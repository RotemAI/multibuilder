"""Member Codex isolation and advisor account sync.

Extracted from app.py. Gives each non-admin user their own CODEX_HOME with its
own auth, permissions and developer instructions, and keeps the advisor service
in step with the dashboard's accounts and permission groups.

Per-user directory resolution and the managed-block editors stay in app.py and
are injected: they are shared with the config-file layer.
"""

from __future__ import annotations

import asyncio
import json
import logging
import os
import re
import shlex
import shutil
import subprocess
import threading
import time
from pathlib import Path

import httpx
import tomllib

from core.config import (
    ADVISOR_ADMIN_TOKEN_FILE,
    ADVISOR_BASE_URL,
    ADVISOR_HOST_NAME,
    CODEX_HOME,
    GOOGLE_DWD_SERVICE_ACCOUNT_FILE,
    MESSAGES_DIR,
    PERMISSION_GROUPS,
    PLAYWRIGHT_MCP_CLI,
    PROJECTS_ROOT,
    PUB_URL,
)
from core.users import _is_admin, _load_users
from services.agent_config import _read_global_context
from services.codex_config import _toml_basic_string, _toml_escape
from services.google_auth import (
    CONNECTIONS_DIR,
    GOOGLE_OAUTH_CLIENT_FILE,
    _google_mcp_command,
    _google_workspace_subject,
    _jwt_claims,
)
from services.projects import _PROJ_NOTE, _codex_app_server_account_read, _publish_codex_auth_state
from services.usage import _advisor_admin_token

logger = logging.getLogger("codex-dashboard")

# Injected by app.py; see configure().
_active_openai_key = None
_backup_before_dashboard_write = None
_ensure_group_dir = None
_existing_playwright_block = None
_load_session_owners = None
_multi_tenant_enabled = None
_strip_managed_block = None
_user_codex_config_dir = None
_write_codex_api_auth = None


def configure(**kw):
    """Bind app-level helpers; an unknown name raises instead of passing silently."""
    for key, value in kw.items():
        if key not in globals():
            raise TypeError(f"services.member_auth.configure: unknown dependency {key!r}")
        globals()[key] = value


def _member_developer_instructions(user: dict) -> str:
    """Combine host policy with the signed-in account's fixed permission group."""
    global_context = _read_global_context().strip()
    sections = [global_context]
    # Existing deployments keep their admin-edited global context file. Append
    # the managed publishing rule when that file predates it, rather than
    # overwriting the administrator's policy to pick up a new default.
    if "local filesystem path as the only link to a work product" not in global_context:
        sections.append(_PROJ_NOTE.replace("__PUBURL__", PUB_URL).strip())
    group = PERMISSION_GROUPS.get(str(user.get("group") or ""))
    if group:
        sections.append(str(group.get("instructions") or "").strip())
    return "\n\n".join(section for section in sections if section)


def _configure_member_codex_isolation(
    cfg_dir: Path,
    user: dict,
    browser: dict | None = None,
) -> bool:
    """Write the complete unattended full-access config for one member."""
    if not user or _is_admin(user):
        return False
    cfg_dir.mkdir(parents=True, exist_ok=True)
    config = cfg_dir / "config.toml"
    existing = config.read_text() if config.exists() else ""
    project_root = PROJECTS_ROOT / str(user.get("username") or user["id"])
    trusted_projects = []
    try:
        trusted_projects = [
            project_root / session_name
            for session_name, owner_id in sorted(
                _load_session_owners().items()
            )
            if owner_id == user.get("id")
            and re.fullmatch(r"[A-Za-z0-9_.-]{1,128}", session_name)
        ]
    except Exception:
        logger.warning(
            "Could not enumerate trusted projects for member %s",
            user.get("id", ""),
            exc_info=True,
        )

    lines = [
        'model = "gpt-5.6-sol"',
        'model_reasoning_effort = "max"',
        "check_for_update_on_startup = false",
        'approval_policy = "never"',
        'default_permissions = ":danger-full-access"',
        (
            "developer_instructions = "
            + _toml_basic_string(_member_developer_instructions(user))
        ),
        "",
        "[notice]",
        "hide_full_access_warning = true",
        "",
        "[features]",
        "remote_plugin = false",
        "apps = false",
        "memories = true",
        "",
        "[memories]",
        "use_memories = true",
        "generate_memories = true",
        "disable_on_external_context = true",
        "",
        "[tui.model_availability_nux]",
        '"gpt-5.6-sol" = 3',
    ]
    for trusted_project in trusted_projects:
        lines.extend((
            "",
            f'[projects."{_toml_escape(str(trusted_project))}"]',
            'trust_level = "trusted"',
        ))
    lines.extend((
        "",
        "[apps._default]",
        "enabled = false",
    ))
    # A managed playwright block that already exists is KEPT verbatim, whether or
    # not this caller resolved a browser. _ensure_browser_mcp owns that block; if
    # this function also rewrote it the two would undo each other on every sync.
    keep = _existing_playwright_block(existing)
    if keep:
        lines.extend(("", keep.rstrip("\n")))
    if (
        not keep
        and browser
        and str(browser.get("owner_id", "")) == str(user.get("id", ""))
        and browser.get("account_browser")
        and int(browser.get("cdp_port", 0) or 0) > 0
    ):
        browser_output = cfg_dir / "browser-output"
        browser_output.mkdir(parents=True, exist_ok=True)
        try:
            browser_output.chmod(0o700)
        except OSError:
            logger.debug(
                "Could not set private permissions on %s",
                browser_output,
                exc_info=True,
            )
        lines.extend((
            "",
            "# BEGIN GRABO PLAYWRIGHT MCP (managed)",
            "[mcp_servers.playwright-browser]",
            'command = "node"',
            (
                'args = ["'
                + _toml_escape(str(PLAYWRIGHT_MCP_CLI))
                + '", "--cdp-endpoint", "http://127.0.0.1:'
                + str(int(browser["cdp_port"]))
                + '", "--output-dir", "'
                + _toml_escape(str(browser_output))
                + '"]'
            ),
            "startup_timeout_sec = 30",
            "tool_timeout_sec = 120",
            "# END GRABO PLAYWRIGHT MCP",
        ))
    google_cmd = _google_mcp_command()
    try:
        google_parts = shlex.split(google_cmd)
    except ValueError:
        google_parts = []
    if google_parts:
        google_args = ", ".join(
            f'"{_toml_escape(value)}"' for value in google_parts[1:]
        )
        google_env = [
            (
                'GOOGLE_MCP_CREDENTIALS_DIR = "'
                + _toml_escape(str(CONNECTIONS_DIR / user["id"]))
                + '"'
            ),
            (
                'GOOGLE_OAUTH_CLIENT_FILE = "'
                + _toml_escape(str(GOOGLE_OAUTH_CLIENT_FILE))
                + '"'
            ),
        ]
        dwd_subject = _google_workspace_subject(user)
        if dwd_subject:
            google_env.extend((
                (
                    'GOOGLE_WORKSPACE_DWD_SERVICE_ACCOUNT_FILE = "'
                    + _toml_escape(str(GOOGLE_DWD_SERVICE_ACCOUNT_FILE))
                    + '"'
                ),
                (
                    'GOOGLE_WORKSPACE_DWD_SUBJECT = "'
                    + _toml_escape(dwd_subject)
                    + '"'
                ),
            ))
        lines.extend((
            "",
            "# BEGIN GRABO GOOGLE MCP (managed)",
            "[mcp_servers.google]",
            f'command = "{_toml_escape(google_parts[0])}"',
            f"args = [{google_args}]",
            'default_tools_approval_mode = "approve"',
            "",
            "[mcp_servers.google.env]",
            *google_env,
            "# END GRABO GOOGLE MCP",
        ))
    # The advisor is the single source of truth every builder host shares, and a
    # member reaches it as THEMSELVES: the token file below is per-account and the
    # launcher exports it as ADVISOR_TOKEN, so the advisor applies that person's
    # role and group. Without this block the token existed but no tool did.
    if (cfg_dir / "advisor-token").is_file():
        lines.extend((
            "",
            "# BEGIN GRABO ADVISOR MCP (managed)",
            "[mcp_servers.advisor]",
            f'url = "{_toml_escape(ADVISOR_BASE_URL)}/mcp"',
            'bearer_token_env_var = "ADVISOR_TOKEN"',
            "# END GRABO ADVISOR MCP",
        ))
    # The document vault is NOT wired directly any more. It used to be: every
    # member's config.toml carried the vault's bearer key and talked to
    # https://grabo.cc/docvault-mcp/mcp itself, so ~150,000 company documents
    # (payroll runs, bank paperwork, passport scans) were reachable with no
    # per-person check and the key sat in fifteen files on disk. The advisor
    # holds the key now and exposes `docvault_search` / `docvault_get`, which
    # apply the caller's permission group to the query and to what comes back.
    # Any leftover block from the old wiring is stripped below.
    updated = "\n".join(lines) + "\n"
    updated = _strip_managed_block(updated, "GRABO DOCVAULT MCP")
    # Fixed point: collapse blank runs and settle the trailing newline, so the
    # next sync produces exactly this text and writes nothing.
    updated = re.sub(r"\n{3,}", "\n\n", updated).strip("\n") + "\n"
    tomllib.loads(updated)
    if updated == existing:
        return False
    _backup_before_dashboard_write(config)
    config.write_text(updated)
    return True


def _set_member_codex_permissions(cfg_dir: Path) -> None:
    """Keep every account-owned Codex file private at the filesystem level."""
    try:
        cfg_dir.chmod(0o700)
        for root, dir_names, file_names in os.walk(cfg_dir, followlinks=False):
            root_path = Path(root)
            for name in dir_names:
                path = root_path / name
                if not path.is_symlink():
                    path.chmod(0o700)
            for name in file_names:
                path = root_path / name
                if path.is_symlink():
                    continue
                current_mode = path.stat().st_mode
                path.chmod(0o700 if current_mode & 0o111 else 0o600)
    except OSError:
        logger.exception(
            "Failed to set private permissions on member Codex home %s",
            cfg_dir,
        )


SHARED_CODEX_AUTH = CODEX_HOME / "auth.json"


def _apply_member_auth(cfg_dir: Path) -> str:
    """Share the admin Codex login with an isolated member CODEX_HOME."""
    cfg_dir.mkdir(parents=True, exist_ok=True)
    target = cfg_dir / "auth.json"
    try:
        if cfg_dir.resolve() == CODEX_HOME.resolve():
            source = SHARED_CODEX_AUTH
        else:
            source = SHARED_CODEX_AUTH
            if source.exists():
                if target.is_symlink() and target.resolve() == source.resolve():
                    pass
                else:
                    _backup_before_dashboard_write(target)
                    if target.is_symlink() or target.exists():
                        target.unlink()
                    target.symlink_to(source)
            elif _active_openai_key():
                _backup_before_dashboard_write(target)
                _write_codex_api_auth(cfg_dir, _active_openai_key())
        data = json.loads(source.read_text()) if source.exists() else {}
        return "subscription" if data.get("auth_mode") == "chatgpt" else "api"
    except Exception:
        logger.debug("Failed to share Codex auth into %s", cfg_dir, exc_info=True)
        return "api" if _active_openai_key() else "unconfigured"


def _advisor_live_sync_enabled() -> bool:
    """Avoid mutating the shared advisor from unit-test request handlers."""
    return not bool(os.environ.get("PYTEST_CURRENT_TEST"))


def _advisor_request(method: str, path: str, payload: dict | None = None) -> dict:
    """Call the shared advisor as this host's admin without logging its token."""
    token = _advisor_admin_token()
    if not token:
        raise RuntimeError(f"Advisor admin token is missing at {ADVISOR_ADMIN_TOKEN_FILE}")
    response = httpx.request(
        method,
        ADVISOR_BASE_URL + path,
        headers={"Authorization": f"Bearer {token}"},
        json=payload,
        timeout=15,
    )
    response.raise_for_status()
    data = response.json()
    return data if isinstance(data, dict) else {}


def _sync_permission_groups_with_advisor() -> int:
    """Make the advisor's fixed group records match the dashboard policy."""
    synced = 0
    for group_id, group in PERMISSION_GROUPS.items():
        _ensure_group_dir(group_id)
        _advisor_request("POST", "/api/groups", {
            "name": group_id,
            "title": group["name"],
            "role": "member",
            "can_see": group["advisor_can_see"],
            "cannot_see": group["advisor_cannot_see"],
            "notes": group["summary"] + "\n\n" + group["instructions"].strip(),
        })
        synced += 1
    return synced


def _sync_advisor_user(user: dict, *, provision: bool = False) -> bool:
    """Provision or update one account's owner-bound advisor identity."""
    if not user:
        return False
    user_id = str(user.get("id") or "").strip()
    if not user_id:
        return False
    group_id = str(user.get("group") or "").strip()
    if group_id and group_id not in PERMISSION_GROUPS:
        raise ValueError(f"Unknown permission group: {group_id}")
    is_admin = _is_admin(user)
    group = PERMISSION_GROUPS.get(group_id, {})
    client_name = f"{ADVISOR_HOST_NAME}:{user_id}"
    token_path = _user_codex_config_dir(user) / "advisor-token"
    if not is_admin and provision and not token_path.is_file():
        provisioned = _advisor_request("POST", "/api/provision-user", {
            "user_id": user_id,
            "username": str(user.get("username") or user_id),
            "host": ADVISOR_HOST_NAME,
            "role": "member",
            "group_name": group_id,
        })
        token = str(provisioned.get("token") or "")
        if not token:
            raise RuntimeError(
                "Advisor identity already exists but its private token is missing locally"
            )
        token_path.parent.mkdir(parents=True, exist_ok=True)
        token_path.write_text(token + "\n")
        token_path.chmod(0o600)
    _advisor_request("POST", "/api/clients", {
        "name": client_name,
        "label": f"{user.get('username') or user_id} on {ADVISOR_HOST_NAME}",
        "role": "admin" if is_admin else "member",
        "scopes": (
            "secrets,infra,memories.write,payments"
            if is_admin
            else str(group.get("advisor_scopes") or "secrets,infra,memories.write")
        ),
        "username": str(user.get("username") or user_id),
        "host": ADVISOR_HOST_NAME,
        "group_name": "" if is_admin else group_id,
        "enabled": 1,
    })
    return is_admin or token_path.is_file()


def _codex_auth_status_dict(codex_home: Path = CODEX_HOME) -> dict:
    auth_path = codex_home / "auth.json"
    mode = "unknown"
    has_api_key = False
    try:
        data = json.loads(auth_path.read_text())
        mode = str(data.get("auth_mode") or "unknown")
        has_api_key = bool(data.get("OPENAI_API_KEY"))
    except Exception:
        pass
    return {
        "loggedIn": auth_path.exists() and (has_api_key or mode in ("chatgpt", "apikey")),
        "authMode": mode,
        "hasApiKey": has_api_key or bool(_active_openai_key()),
        "credentialsFile": auth_path.exists(),
    }


_codex_auth_validation_lock = threading.Lock()


_codex_auth_fallback_state: dict = {"path": "", "reason": "", "ts": 0.0}


def _ensure_codex_auth_with_fallback(
    codex_home: Path = CODEX_HOME,
    validate_chatgpt: bool = True,
) -> dict:
    """Validate ChatGPT auth and activate the stored API key when it is unusable."""
    with _codex_auth_validation_lock:
        auth_path = codex_home / "auth.json"
        creds: dict = {}
        parse_error = False
        try:
            loaded = json.loads(auth_path.read_text())
            creds = loaded if isinstance(loaded, dict) else {}
        except Exception:
            parse_error = True
        configured_mode = str(creds.get("auth_mode") or "unknown")
        active_mode = "unknown"
        reason = ""
        account: dict = {}

        if configured_mode == "apikey" and creds.get("OPENAI_API_KEY"):
            active_mode = "apikey"
        elif configured_mode == "chatgpt":
            tokens = creds.get("tokens")
            if not isinstance(tokens, dict) or not all(
                tokens.get(name) for name in ("access_token", "refresh_token")
            ):
                reason = "ChatGPT credential is missing required tokens"
            elif validate_chatgpt:
                probe = _codex_app_server_account_read(codex_home, refresh_token=True)
                account = probe.get("account") if isinstance(probe.get("account"), dict) else {}
                if probe.get("ok") and account.get("type") == "chatgpt":
                    active_mode = "chatgpt"
                else:
                    reason = "ChatGPT credential is expired, revoked, or could not be refreshed"
            else:
                active_mode = "chatgpt"
        elif parse_error:
            reason = "Codex credential file is missing or unreadable"
        else:
            reason = "Codex credential is not usable"

        stored_key = _active_openai_key()
        fallback_active = False
        if active_mode == "unknown" and reason and stored_key:
            _write_codex_api_auth(codex_home, stored_key)
            active_mode = "apikey"
            fallback_active = True
            _codex_auth_fallback_state.update({
                "path": str(auth_path), "reason": reason, "ts": time.time(),
            })
            logger.warning("Activated stored OpenAI API-key fallback for %s", codex_home)
        elif (
            active_mode == "apikey"
            and _codex_auth_fallback_state.get("path") == str(auth_path)
            and _codex_auth_fallback_state.get("reason")
        ):
            fallback_active = True
            reason = str(_codex_auth_fallback_state["reason"])

        return {
            "configuredMode": configured_mode,
            "activeMode": active_mode,
            "loggedIn": active_mode in ("apikey", "chatgpt"),
            "fallbackActive": fallback_active,
            "fallbackReason": reason if fallback_active else "",
            "account": account,
        }


def _codex_auth_display() -> dict:
    auth_state = _ensure_codex_auth_with_fallback(CODEX_HOME, True)
    result: dict = {
        "loggedIn": auth_state["loggedIn"],
        "hasApiKey": bool(_active_openai_key()),
        "authMode": auth_state["activeMode"],
        "activeMode": auth_state["activeMode"],
        "configuredMode": auth_state["configuredMode"],
        "fallbackActive": auth_state["fallbackActive"],
        "fallbackReason": auth_state["fallbackReason"],
        "model": "",
    }
    try:
        creds = json.loads((CODEX_HOME / "auth.json").read_text())
        mode = auth_state["activeMode"]
        result["hasApiKey"] = bool(_active_openai_key() or creds.get("OPENAI_API_KEY"))
        if mode == "apikey" and creds.get("OPENAI_API_KEY"):
            result.update({
                "loggedIn": True,
                "subscriptionType": "API key",
                "email": "OpenAI API",
            })
        elif mode == "chatgpt" and isinstance(creds.get("tokens"), dict):
            claims = _jwt_claims(creds["tokens"].get("id_token"))
            auth_claims = claims.get("https://api.openai.com/auth")
            if not isinstance(auth_claims, dict):
                auth_claims = {}
            plan = (
                claims.get("chatgpt_plan_type")
                or auth_claims.get("chatgpt_plan_type")
                or "ChatGPT"
            )
            result.update({
                "loggedIn": True,
                "subscriptionType": str(
                    auth_state["account"].get("planType") or plan
                ),
                "email": str(
                    auth_state["account"].get("email")
                    or claims.get("email")
                    or "ChatGPT user"
                ),
            })
    except Exception:
        logger.debug("Could not read Codex auth status", exc_info=True)
    try:
        cfg = (CODEX_HOME / "config.toml").read_text()
        match = re.search(r'^\s*model\s*=\s*"([^"]+)"', cfg, re.MULTILINE)
        if match:
            result["model"] = match.group(1)
    except Exception:
        pass
    return result


def _repair_member_codex_auth() -> int:
    """Re-point every member CODEX_HOME at the shared, working credential.

    Member ``auth.json`` files are symlinks into the admin home. An accidental
    ``/login`` (or an atomic rewrite) replaces the symlink with a stale copy,
    and that account alone starts failing. Re-applying the link is cheap and
    idempotent, so this runs whenever the credential looks unhealthy.
    """
    repaired = 0
    try:
        if not _multi_tenant_enabled():
            return 0
        for user in _load_users():
            if not user or _is_admin(user):
                continue
            try:
                _apply_member_auth(_user_codex_config_dir(user))
                repaired += 1
            except Exception:
                logger.debug(
                    "Could not repair Codex auth for %s", user.get("id"), exc_info=True
                )
    except Exception:
        logger.debug("Member Codex auth repair failed", exc_info=True)
    return repaired


_CODEX_AUTH_PROBE_MAX_AGE = 300    # reuse a credential verdict for this long


_CODEX_AUTH_PROBE_FLOOR = 120      # ...and never re-probe faster than this


_codex_health_auth: dict = {"ts": 0.0, "loggedIn": True, "reason": ""}


async def _codex_auth_health(force: bool = False) -> dict:
    """Validate the shared Codex credential, at most once every few minutes.

    Validation starts a Codex app-server, so it is far too expensive to run on
    every sweep; the cached verdict is plenty for deciding whether a fleet-wide
    outage is a login problem. Even ``force`` keeps a floor, so a persistent
    outage cannot spawn an app-server every single sweep.
    """
    now = time.time()
    age = now - float(_codex_health_auth.get("ts") or 0)
    if age < (_CODEX_AUTH_PROBE_FLOOR if force else _CODEX_AUTH_PROBE_MAX_AGE):
        return dict(_codex_health_auth)
    try:
        state = await asyncio.to_thread(
            _ensure_codex_auth_with_fallback, CODEX_HOME, True
        )
    except Exception:
        logger.debug("Codex auth health probe failed", exc_info=True)
        return dict(_codex_health_auth)
    _codex_health_auth.update({
        "ts": now,
        "loggedIn": bool(state.get("loggedIn")),
        "activeMode": str(state.get("activeMode") or "unknown"),
        "reason": str(state.get("fallbackReason") or ""),
        "fallbackActive": bool(state.get("fallbackActive")),
    })
    # The API workers cannot see this process's memory — publish it.
    await asyncio.to_thread(_publish_codex_auth_state, _codex_health_auth)
    return dict(_codex_health_auth)
