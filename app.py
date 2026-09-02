from __future__ import annotations

import asyncio
import base64
import binascii
import fcntl
import functools
import hashlib
import hmac
import html
import inspect
import ipaddress
import json
import logging
import mimetypes
import os
import pty
import re
import secrets
import select
import shlex
import shutil
import signal
import struct
import subprocess
import sys
import tempfile
import termios
import threading
import time
from concurrent.futures import ThreadPoolExecutor
from contextlib import asynccontextmanager

try:
    import tomllib
except ModuleNotFoundError:  # Python 3.9/3.10 production hosts
    import tomli as tomllib
import glob as globmod
from datetime import datetime, timedelta, timezone
from pathlib import Path

logger = logging.getLogger("codex-dashboard")
logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(name)s] %(levelname)s: %(message)s")

import httpx
import openai
import uvicorn
import websockets
from cryptography.exceptions import InvalidTag
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
from fastapi import FastAPI, File, Request, UploadFile, WebSocket, WebSocketDisconnect
from fastapi.exceptions import RequestValidationError
from fastapi.responses import FileResponse, HTMLResponse, JSONResponse, RedirectResponse, Response
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

import db_store
import google_policy

# Configuration constants now live in core/config.py. They are re-exported
# here unchanged so existing imports (`from app import ROOT_PATH`, and the
# test suite's 223 such imports) keep working while the split proceeds.
from core import tokens as core_tokens  # noqa: E402

# User accounts, request identity and impersonation now live in core/users.py.
# Re-exported here so the 78 _current_user call sites and the test suite's
# imports keep working unchanged.
from core import users as core_users  # noqa: E402
from core.config import (  # noqa: E402
    _CLAUDE_API_KEYS_MD,
    _CODEX_DEFAULT_MODEL,
    _CODEX_MIN_CLI_VERSION,
    _CONTEXT_FILES,
    _DEFAULT_BROWSER_SESSION,
    _DISABLE_STALLED_OPENAI_DOCS_MCP,
    _GO_NUTS_SKILLS_DIR,
    _INFRA_DETAIL_DIRS,
    _LOGIN_STATE_FILE,
    _SANDBOX_HOOK_SCRIPT,
    _SKILLS_DIR,
    ADMIN_APPROVAL_EMAIL,
    ADMIN_GOOGLE_EMAIL,
    ADVISOR_ADMIN_TOKEN_FILE,
    ADVISOR_BASE_URL,
    ADVISOR_HOST_NAME,
    AUTH_COOKIE,
    AUTH_PASS,
    AUTH_USER,
    AUTO_AUTH_ENABLED,
    AUTO_SUMMARIZER_ENABLED,
    BRAND_NAME,
    BROWSER_LAUNCHER,
    BROWSER_LEASE_TTL,
    BROWSER_PARK_AFTER,
    BROWSER_POLICY_FILE,
    CB_ROOT,
    CLAUDE_SESSION_CMD,
    CODEX_API_FALLBACK_ENABLED,
    CODEX_HOME,
    CONTROLLER_SOCKET,
    DASH_LOCAL_URL,
    DOCVAULT_MCP_KEY,
    DOCVAULT_MCP_SCRIPT,
    DOCVAULT_MCP_URL,
    GIT_EMAIL_DOMAIN,
    GOOGLE_DWD_SERVICE_ACCOUNT_FILE,
    GOOGLE_LOGIN_DOMAINS,
    GOOGLE_LOGIN_EMAILS,
    GOOGLE_MCP_SCRIPT,
    IDE_BUNDLE_DIR,
    MAIL_FROM,
    MESSAGES_DIR,
    MODELS_FILE,
    NEW_SESSION_CMD,
    OPENAI_API_KEY,
    PERMISSION_GROUPS,
    PLAYWRIGHT_MCP_CLI,
    PORT,
    PROCESS_ROLE,
    PROJECTS_ROOT,
    PUBLIC_BASE_URL,
    QA_OUTPUT_DIR,
    RESEND_API_KEY,
    ROOT_PATH,
    SAVED_INFO_ENABLED,
    SAVED_INFO_MODEL,
    SESSION_LIFECYCLE_INTERVAL,
    SESSION_PARK_AFTER,
    SHARED_CREDENTIALS,
    SSH_CONTROL_DIR,
    SSH_KNOWN_HOSTS,
    TEAM_EFFORT,
    TEAM_MODE,
    TEAM_MODEL,
    TEMPLATES_DIR,
    USERS_FILE,
)

# Pure validators moved to core/validators.py; re-exported so existing
# imports and the test suite keep working unchanged.
from core.io import _atomic_write_json  # noqa: E402
from core.state import _db_ready, _shared_store  # noqa: E402
from core.users import (  # noqa: E402
    _IMPERSONATION_SESSION_TTL,
    _IMPERSONATION_TICKET_TTL,
    _USER_ONLINE_WINDOW_SECONDS,
    IMPERSONATION_SESSIONS_FILE,
    _current_user,
    _find_user_by_id,
    _hash_password,
    _impersonation_lock,
    _impersonation_sessions,
    _impersonation_sessions_loaded,
    _impersonation_tickets,
    _load_impersonation_sessions_locked,
    _load_users,
    _new_salt,
    _public_user,
    _purge_expired_impersonation_tokens,
    _save_impersonation_sessions_locked,
    _save_users,
    _touch_user_presence,
    _user_from_impersonation_session,
    _user_from_token,
    _user_presence,
)
from core.validators import (  # noqa: E402
    _is_admin,
    _is_valid_session_name,
    _tmux_safe_label,
    _valid_git_branch,
    _valid_git_commit_ref,
    _valid_git_pathspec,
)
from runtime_control import (
    BrowserLeaseStore,
    LockedJsonStore,
    SessionLifecycleStore,
    browser_start_argv,
    browser_unit_name,
    scoped_codex_command,
    user_systemd_argv,
)

# The Remote SSH IDE service now lives in services/ssh.py. Route handlers
# stay here; everything they call is re-exported below so call sites and
# the test suite's patch points keep working unchanged.
# Browser sessions now live in services/browser.py; route handlers stay here.
# Away / Go Nuts autonomous modes now live in services/autonomous.py.
from services import autonomous as autonomous_service  # noqa: E402
from services import browser as browser_service  # noqa: E402
from services import ssh as ssh_service  # noqa: E402
from services.autonomous import (  # noqa: E402
    _AWAY_PING_PROMPT,
    _GN_PHASE1_PROMPT,
    _GN_PHASE2_PROMPT,
    _GN_PHASE3_PROMPT,
    _GN_PING_PROMPT,
    _GO_NUTS_LOG_CAP,
    _PHASE1_PROMPT,
    _PHASE2_PROMPT,
    _PHASE3_ROUND1_PROMPT,
    _PHASE3_ROUND2_PROMPT,
    _PHASE3_ROUND3_PROMPT,
    _UNSTICK_PROMPT_AWAY,
    _UNSTICK_PROMPT_GONUTS,
    GoNutsModeBody,
    _away_log,
    _away_mode_continuous_loop,
    _away_mode_state,
    _away_mode_worker,
    _away_phase_execute,
    _away_phase_select,
    _away_phase_study,
    _away_send_and_wait,
    _away_send_prompt,
    _away_state_summary,
    _away_toggle_local,
    _away_wait_for_idle,
    _go_nuts_continuous_loop,
    _go_nuts_log,
    _go_nuts_mode_worker,
    _go_nuts_phase_backlog,
    _go_nuts_phase_build,
    _go_nuts_phase_discover,
    _go_nuts_send_and_wait,
    _go_nuts_state,
    _go_nuts_state_summary,
    _go_nuts_toggle_local,
)
from services.browser import (  # noqa: E402
    _BROWSER_AUTH_TTL,
    _BROWSER_LAUNCHER_SCRIPT,
    BROWSER_AUDIT_MAX_EVENTS,
    BROWSER_AUDIT_RETENTION_SECONDS,
    BROWSER_AUDIT_ROOT,
    BROWSER_PROXY_CONF,
    BROWSER_PROXY_USAGE,
    BROWSER_SESSIONS_FILE,
    BrowserCreateBody,
    BrowserLeaseBody,
    BrowserPatchBody,
    BrowserProxyBody,
    _acquire_browser_lease_local,
    _append_browser_audit,
    _browser_audit_dir,
    _browser_audit_lock,
    _browser_auth_cache,
    _browser_busy,
    _browser_busy_ctx,
    _browser_capture_state,
    _browser_claude_account,
    _browser_external_url,
    _browser_leases,
    _browser_lifecycle_loop,
    _browser_live_streaming,
    _browser_network_route,
    _browser_operation_lock,
    _browser_operation_locks,
    _browser_owner_id,
    _browser_port_alive,
    _browser_primary_target,
    _browser_process_alive,
    _browser_profile_dir,
    _browser_response_row,
    _browser_running,
    _browser_runtime,
    _browser_runtime_row,
    _browser_session_by_id,
    _browser_sessions_lock,
    _browser_starting,
    _browser_viewer_url,
    _capture_browser_screenshot,
    _cdp_tab,
    _CdpTab,
    _claim_browser_proxy_session,
    _default_browser_systemctl,
    _delete_user_browser_session,
    _ensure_all_user_browser_sessions,
    _ensure_browser_launcher,
    _ensure_browser_mcp,
    _ensure_tenant_browser,
    _ensure_user_browser_session,
    _load_browser_sessions,
    _next_browser_slot,
    _pick_login_browser,
    _proxy_conf,
    _proxy_exit_info,
    _proxy_presets,
    _proxy_save,
    _proxy_to_port,
    _proxy_usage,
    _prune_browser_audit_locked,
    _read_browser_audit,
    _release_browser_proxy_sessions,
    _safe_browser_audit_url,
    _save_browser_sessions,
    _set_browser_runtime,
    _start_browser_local,
    _start_browser_unlocked,
    _stop_browser_controlled,
    _stop_browser_local,
    _sync_account_browser_context,
    _tenant_browser_id,
    _user_can_access_browser,
)
from services.ssh import (  # noqa: E402
    _SSH_BROWSE_SCRIPT,
    _SSH_FILESYSTEM_SCRIPT,
    _SSH_GIT_SCRIPT,
    _SSH_HOST_RE,
    _SSH_KEY_HEADER_RE,
    _SSH_LIST_SCRIPT,
    _SSH_LSP_STATUS_SCRIPT,
    _SSH_READ_SCRIPT,
    _SSH_SEARCH_SCRIPT,
    _SSH_SECRET_FIELDS,
    _SSH_USER_RE,
    _SSH_WRITE_SCRIPT,
    LOCAL_CONNECTION_KIND,
    SSH_CONNECTIONS_FILE,
    SSH_IDE_AUDIT_FILE,
    SSH_IDE_STATE_FILE,
    SSH_MANAGED_KEYS_DIR,
    SSH_MAX_FILE_BYTES,
    SSH_MAX_UNSAVED_STATE_BYTES,
    SSH_VAULT_KEY_FILE,
    SSHConnectBody,
    SSHConnectionBody,
    SSHGitBody,
    SSHHostKeyBody,
    SSHRemoteFileBody,
    SSHRemoteFilesystemBody,
    SSHWorkspaceRootBody,
    SSHWorkspaceStateBody,
    _append_ssh_ide_audit,
    _browse_path_allowed,
    _browse_roots,
    _create_local_workspace,
    _discard_ssh_key,
    _harden_ssh_state_file,
    _is_local_profile,
    _local_command_parts,
    _local_open_tmux_window,
    _local_root_denied,
    _local_run,
    _local_tmux_window_name,
    _materialize_ssh_key,
    _normalized_local_root,
    _normalized_remote_path,
    _normalized_ssh_identity_file,
    _normalized_workspace_path,
    _private_key_is_encrypted,
    _record_ssh_ide_audit,
    _ssh_argv,
    _ssh_connections_store,
    _ssh_control_is_alive,
    _ssh_control_socket,
    _ssh_focus_tmux_window,
    _ssh_host_is_known,
    _ssh_ide_audit_lock,
    _ssh_ide_denied,
    _ssh_ide_session_or_response,
    _ssh_ide_state_key,
    _ssh_ide_state_store,
    _ssh_key_fingerprints,
    _ssh_managed_key_path,
    _ssh_open_tmux_window,
    _ssh_profile,
    _ssh_profile_or_response,
    _ssh_profiles,
    _ssh_public_profile,
    _ssh_read_ide_state,
    _ssh_remote_command,
    _ssh_run,
    _ssh_set_pty_size,
    _ssh_start_control_master,
    _ssh_terminal_argv,
    _ssh_terminal_pty,
    _ssh_tmux_window_exists,
    _ssh_tmux_window_name,
    _ssh_trust_host,
    _ssh_update_profile,
    _ssh_user_may_use_profile,
    _ssh_vault_decrypt,
    _ssh_vault_encrypt,
    _ssh_vault_key,
    _ssh_vault_key_cache,
    _ssh_vault_key_lock,
    _ssh_workspace_command,
    _ssh_write_ide_state,
    _tmux_window_suffix,
    _valid_private_key_blob,
    _valid_ssh_host,
    _WorkspaceCommand,
)

if PROCESS_ROLE not in {"combined", "api", "controller"}:
    PROCESS_ROLE = "combined"
_CODEX_REASONING_EFFORTS = ("none", "low", "medium", "high", "xhigh", "max")
_CODEX_REASONING_EFFORT_ALIASES = {
    "ultra": "max",
    "extra-high": "xhigh",
    "extra_high": "xhigh",
}
_CODEX_DEFAULT_REASONING_EFFORT = os.environ.get(
    "TMUX_DASH_DEFAULT_REASONING_EFFORT",
    os.environ.get("CODEX_DEFAULT_REASONING_EFFORT", "max"),
).strip().lower()
_CODEX_DEFAULT_REASONING_EFFORT = _CODEX_REASONING_EFFORT_ALIASES.get(
    _CODEX_DEFAULT_REASONING_EFFORT,
    _CODEX_DEFAULT_REASONING_EFFORT,
)
if _CODEX_DEFAULT_REASONING_EFFORT not in _CODEX_REASONING_EFFORTS:
    _CODEX_DEFAULT_REASONING_EFFORT = "max"


# Compatibility name retained for the newer Grabo frontend and API payloads.
DEFAULT_MODEL = _CODEX_DEFAULT_MODEL
_SEED_MODEL_CATALOG = [
    ["gpt-5.6-sol", "GPT-5.6 Sol"],
    ["gpt-5.6", "GPT-5.6 (Sol alias)"],
    ["gpt-5.6-terra", "GPT-5.6 Terra"],
    ["gpt-5.6-luna", "GPT-5.6 Luna"],
    ["gpt-5.5", "GPT-5.5"],
    ["gpt-5.4", "GPT-5.4"],
]


def _load_model_catalog() -> list:
    try:
        data = json.loads(MODELS_FILE.read_text())
        rows = data.get("models") if isinstance(data, dict) else data
        rows = [list(row) for row in (rows or [])
                if isinstance(row, (list, tuple)) and len(row) == 2]
        if rows:
            return rows
    except Exception:
        logger.debug("No usable Codex model catalog at %s", MODELS_FILE, exc_info=True)
    return [list(row) for row in _SEED_MODEL_CATALOG]


def _save_model_catalog(catalog: list, last_check: float = 0.0):
    try:
        MODELS_FILE.parent.mkdir(parents=True, exist_ok=True)
        MODELS_FILE.write_text(json.dumps({"models": catalog, "last_check": last_check}, indent=2))
    except Exception:
        logger.debug("Failed to save %s", MODELS_FILE, exc_info=True)


def _fetch_codex_model_catalog() -> list:
    """Read the model catalog bundled with the installed Codex CLI."""
    result = subprocess.run(
        ["codex", "debug", "models", "--bundled"],
        capture_output=True,
        text=True,
        timeout=20,
    )
    if result.returncode != 0:
        return []
    data = json.loads(result.stdout or "{}")
    rows = []
    for model in data.get("models", []):
        if not isinstance(model, dict) or model.get("visibility") == "hide":
            continue
        slug = str(model.get("slug") or "").strip()
        if not slug:
            continue
        label = str(model.get("display_name") or slug).strip()
        rows.append([slug, label])
    return rows


MODEL_CATALOG = _load_model_catalog()
ALLOWED_SESSION_MODELS = [row[0] for row in MODEL_CATALOG]
if DEFAULT_MODEL not in ALLOWED_SESSION_MODELS:
    MODEL_CATALOG.insert(0, [DEFAULT_MODEL, DEFAULT_MODEL])
    ALLOWED_SESSION_MODELS.insert(0, DEFAULT_MODEL)

MODEL_CHECK_INTERVAL = 24 * 3600


def _codex_cli_readiness() -> tuple[bool, str, dict]:
    """Check that a compatible Codex CLI is available before starting a pane."""
    binary = shutil.which("codex")
    details = {"binary": binary or "", "minimum": _CODEX_MIN_CLI_VERSION, "version": ""}
    if not binary:
        return False, "the codex CLI is not installed", details
    try:
        result = subprocess.run(
            [binary, "--version"], capture_output=True, text=True, timeout=10
        )
        text = ((result.stdout or "") + " " + (result.stderr or "")).strip()
        match = re.search(r"(\d+\.\d+\.\d+)", text)
        version = match.group(1) if match else ""
        details["version"] = version
        if result.returncode != 0 or not version:
            return False, "the codex CLI version could not be determined", details
        current = tuple(int(part) for part in version.split("."))
        minimum = tuple(int(part) for part in _CODEX_MIN_CLI_VERSION.split("."))
        if current < minimum:
            return False, f"codex {version} is older than required {_CODEX_MIN_CLI_VERSION}", details
    except Exception as exc:
        return False, f"codex CLI check failed: {type(exc).__name__}", details
    return True, "ready", details


async def _refresh_model_catalog(force: bool = False) -> bool:
    global MODEL_CATALOG, ALLOWED_SESSION_MODELS
    try:
        last_check = 0.0
        try:
            last_check = float(json.loads(MODELS_FILE.read_text()).get("last_check", 0))
        except Exception:
            pass
        now = time.time()
        if not force and now - last_check < MODEL_CHECK_INTERVAL:
            return False
        detected = await asyncio.to_thread(_fetch_codex_model_catalog)
        if not detected:
            return False
        seen = set()
        merged = []
        for row in detected + _SEED_MODEL_CATALOG:
            if row[0] not in seen:
                seen.add(row[0])
                merged.append(list(row))
        changed = merged != MODEL_CATALOG
        MODEL_CATALOG = merged
        ALLOWED_SESSION_MODELS = [row[0] for row in MODEL_CATALOG]
        _save_model_catalog(MODEL_CATALOG, now)
        return changed
    except Exception:
        logger.debug("Codex model catalog refresh failed", exc_info=True)
        return False


async def _model_refresh_loop():
    await asyncio.sleep(20)
    while True:
        try:
            await _refresh_model_catalog()
        except Exception:
            logger.debug("Codex model refresh loop failed", exc_info=True)
        await asyncio.sleep(3600)


_CODEX_MCP_HEADER_RE = re.compile(r"^\s*\[\s*mcp_servers\s*\.\s*([^\].]+?)\s*[\].]")
_codex_mcp_decl_cache: dict[str, tuple[float, int, frozenset[str]]] = {}


def _codex_home_mcp_servers(codex_home: Path | None) -> frozenset[str]:
    """Names of the MCP servers a CODEX_HOME's ``config.toml`` really declares.

    Cached on (mtime, size) so starting a session does not re-read the file.
    """
    path = Path(codex_home or CODEX_HOME) / "config.toml"
    key = str(path)
    try:
        stat = path.stat()
    except OSError:
        _codex_mcp_decl_cache.pop(key, None)
        return frozenset()
    cached = _codex_mcp_decl_cache.get(key)
    if cached and cached[0] == stat.st_mtime and cached[1] == stat.st_size:
        return cached[2]
    names: set[str] = set()
    try:
        for line in path.read_text(errors="replace").splitlines():
            match = _CODEX_MCP_HEADER_RE.match(line)
            if match:
                names.add(match.group(1).strip().strip("\"'"))
    except OSError:
        return frozenset()
    resolved = frozenset(names)
    _codex_mcp_decl_cache[key] = (stat.st_mtime, stat.st_size, resolved)
    return resolved


# Codex validates every `mcp_servers.*` table while loading config.toml —
# including a table that only an `-c` override brought into existence. Sending
# `-c mcp_servers.openaiDeveloperDocs.enabled=false` to a CODEX_HOME whose
# config.toml does not declare that server therefore CREATES a server with no
# `command` and no `url`, and Codex refuses to start:
#
#     Error: failed to load configuration
#     Caused by: invalid transport in `mcp_servers.openaiDeveloperDocs`
#
# It exits before the TUI draws, the pane falls back to its parent login shell,
# and the account looks logged out. Member homes never declare that server, so
# every member session died this way while admin sessions (whose config.toml
# does declare it) were fine. Only send the override where the server exists.
_CODEX_DOCS_MCP_SERVER = "openaiDeveloperDocs"
_CODEX_DOCS_MCP_OVERRIDE = f"mcp_servers.{_CODEX_DOCS_MCP_SERVER}.enabled=false"
_CODEX_DOCS_OVERRIDE_RE = re.compile(
    r"\s+-c\s+(['\"]?)" + re.escape(_CODEX_DOCS_MCP_OVERRIDE) + r"\1"
)


def _launch_codex_cmd(
    cmd: str,
    pin_model: bool = True,
    resume: bool = False,
    codex_home: Path | None = None,
) -> str:
    """Build a Codex launch command using the account's standard configuration."""
    out = cmd.strip() or NEW_SESSION_CMD
    if resume:
        out = "codex resume --last"
        if "--yolo" in cmd or "--dangerously-bypass-approvals-and-sandbox" in cmd:
            out += " --yolo"
        elif "--sandbox" in cmd or " -s " in f" {cmd} ":
            out += " --sandbox workspace-write --ask-for-approval never"
    if pin_model and DEFAULT_MODEL and "--model" not in out and " -m " not in f" {out} ":
        out += " --model " + shlex.quote(DEFAULT_MODEL)
    # Strip any inherited copy first: a stored session command must not be able
    # to smuggle the override into a home that does not declare the server.
    out = _CODEX_DOCS_OVERRIDE_RE.sub("", out).strip()
    if (
        _DISABLE_STALLED_OPENAI_DOCS_MCP
        and _CODEX_DOCS_MCP_SERVER in _codex_home_mcp_servers(codex_home)
    ):
        out += " -c " + shlex.quote(_CODEX_DOCS_MCP_OVERRIDE)
    if not CODEX_API_FALLBACK_ENABLED:
        out = "env -u OPENAI_API_KEY " + out
    return out








def _session_agents_file() -> Path:
    # Resolved lazily: this helper is defined above MESSAGES_DIR, and binding
    # the path at import time would fail with an undefined name.
    return MESSAGES_DIR / "session_agents.json"


def _session_agents_store():
    return _shared_store("session_agents", _session_agents_file(), dict)


def _session_agent_kind(session_name: str) -> str:
    try:
        row = (_session_agents_store().read() or {}).get(str(session_name))
        # Rows were plain strings before per-agent settings were added; accept
        # both shapes so existing sessions keep their agent after an upgrade.
        raw = row.get("agent") if isinstance(row, dict) else row
        value = str(raw or "").strip().lower()
        return value if value in {"codex", "claude"} else "codex"
    except Exception:
        return "codex"


def _set_session_agent(session_name: str, agent: str) -> None:
    def mutate(agents: dict):
        # Preserve any sibling settings (effort, model) stored for this session.
        row = agents.get(str(session_name))
        if isinstance(row, dict):
            row["agent"] = str(agent)
        else:
            agents[str(session_name)] = {"agent": str(agent)}

    _session_agents_store().update(mutate)


# Claude Code takes effort and model as LAUNCH FLAGS (--effort/--model); it does
# not read Codex's config.toml. They are stored per session here and applied
# when the pane starts, rather than written into a config Claude never reads.
CLAUDE_EFFORTS = ("low", "medium", "high", "xhigh", "max")
CLAUDE_MODEL_ALIASES = ("fable", "opus", "sonnet")


def _agent_pane_target(session_name: str) -> str:
    """The tmux target for the pane the AGENT runs in.

    Bare "<session>" resolves to whichever window is ACTIVE, and the IDE's own
    terminal windows (ssh-… / local-…) become active as soon as a browser
    terminal attaches. Prompts meant for the agent were then typed into that SSH
    shell instead. Find the agent's window explicitly and fall back to the
    session only when no agent pane can be identified.
    """
    try:
        result = subprocess.run(
            ["tmux", "list-panes", "-s", "-t", session_name, "-F",
             "#{window_index}\t#{pane_current_command}\t#{pane_pid}"],
            capture_output=True, text=True, timeout=5,
        )
        if result.returncode != 0:
            return session_name
        rows = []
        for line in (result.stdout or "").splitlines():
            index, _, rest = line.strip().partition("\t")
            command, _, pid = rest.partition("\t")
            if index:
                rows.append((index, command, pid))
        # Prefer a pane whose own command is the agent.
        for index, command, _pid in rows:
            if command in _AGENT_PROCESS_NAMES:
                return f"{session_name}:{index}"
        # Otherwise look for one with an agent somewhere in its process tree.
        children, commands = _process_tree_snapshot()
        for index, _command, pid in rows:
            if not pid.isdigit():
                continue
            pending, seen = [pid], set()
            while pending and len(seen) < 5000:
                current = pending.pop()
                if current in seen:
                    continue
                seen.add(current)
                if commands.get(current) in _AGENT_PROCESS_NAMES:
                    return f"{session_name}:{index}"
                pending.extend(children.get(current, ()))
        # No agent found: prefer a window the IDE did not create.
        for index, _command, _pid in rows:
            name = subprocess.run(
                ["tmux", "display-message", "-t", f"{session_name}:{index}", "-p", "#{window_name}"],
                capture_output=True, text=True, timeout=3,
            ).stdout.strip()
            if not name.startswith(("ssh-", "local-", "ssh:", "local:")):
                return f"{session_name}:{index}"
    except Exception:  # noqa: BLE001 - resolution is best-effort
        # Never let pane resolution break the caller: falling back to the bare
        # session name reproduces the previous behaviour rather than failing.
        logger.debug("Agent pane resolution failed for %s", session_name, exc_info=True)
    return session_name


def _agent_quit_command(session_name: str) -> str:
    """The slash command that exits this session's agent.

    Codex quits on "/quit", Claude Code on "/exit". Sending the wrong one is not
    inert: the live agent treats it as a chat message, stays running, and the
    caller then believes the pane is free.
    """
    return "/exit" if _session_agent_kind(session_name) == "claude" else "/quit"


def _session_claude_setting(session_name: str, key: str) -> str:
    try:
        row = (_session_agents_store().read() or {}).get(str(session_name))
        return str(row.get(key) or "") if isinstance(row, dict) else ""
    except Exception:
        return ""


def _set_session_claude_setting(session_name: str, key: str, value: str) -> None:
    def mutate(agents: dict):
        row = agents.get(str(session_name))
        if not isinstance(row, dict):
            row = {"agent": str(row or "codex")}
        row[key] = str(value)
        agents[str(session_name)] = row

    _session_agents_store().update(mutate)


def _clear_session_agent(session_name: str) -> None:
    def mutate(agents: dict):
        agents.pop(str(session_name), None)

    _session_agents_store().update(mutate)


def _claude_launch_flags(session_name: str) -> str:
    """--effort/--model flags for this session's stored Claude settings."""
    parts = []
    effort = _session_claude_setting(session_name, "claude_effort")
    if effort in CLAUDE_EFFORTS:
        parts.append("--effort " + shlex.quote(effort))
    model = _session_claude_setting(session_name, "claude_model")
    if model and re.fullmatch(r"[A-Za-z0-9._:-]{2,80}", model):
        parts.append("--model " + shlex.quote(model))
    return (" " + " ".join(parts)) if parts else ""


def _session_launch_base(session_name: str = "", user: dict | None = None) -> str:
    """Use the canonical full-access launch for members and configured admin command."""
    if session_name and _session_agent_kind(session_name) == "claude":
        return CLAUDE_SESSION_CMD + _claude_launch_flags(session_name)
    try:
        owner = user or (_user_for_session(session_name) if session_name else None)
        if owner and not _is_admin(owner):
            return "codex --yolo"
    except Exception:
        pass
    return NEW_SESSION_CMD


def _session_launch_identity_prefix(session_name: str) -> str:
    """Rebind account identity inside the login shell used by systemd-run.

    The shared OS login exports the admin Advisor token. A member's parent tmux
    shell may be correct, but ``bash -lc`` sources login files again, so the
    final child command must override both values after that startup sequence.
    """
    owner = _user_for_session(session_name)
    if owner and not _is_admin(owner):
        codex_home = _user_codex_config_dir(owner)
        token_path = codex_home / "advisor-token"
        return (
            "env CODEX_HOME="
            + shlex.quote(str(codex_home))
            + " CLAUDE_CONFIG_DIR="
            + shlex.quote(str(_user_claude_config_dir(owner)))
            + " ADVISOR_TOKEN=\"$(cat "
            + shlex.quote(str(token_path))
            + " 2>/dev/null)\""
        )
    token_path = Path.home() / ".advisor-token"
    return (
        # CLAUDE_CONFIG_DIR is deliberately NOT set for the admin: Claude's
        # default layout keeps credentials in ~/.claude/.credentials.json but
        # its main config at ~/.claude.json (home level, not inside the dir).
        # Pointing CLAUDE_CONFIG_DIR at ~/.claude makes Claude look for
        # ~/.claude/.claude.json, miss the real config, and rewrite a blank one.
        # Inheriting the environment is what keeps the existing login working.
        "env -u CODEX_HOME ADVISOR_TOKEN=\"$(cat "
        + shlex.quote(str(token_path))
        + " 2>/dev/null)\""
    )


def _session_launch_command(
    session_name: str,
    base: str,
    *,
    pin_model: bool = True,
    resume: bool = False,
) -> str:
    """Build the agent command and keep its process tree in a session scope."""
    if _session_agent_kind(session_name) == "claude":
        # Claude Code takes none of Codex's --model / CODEX_HOME flags; passing
        # them through _launch_codex_cmd would produce an invalid command line.
        # It does have its own resume flag, though: without it a crash-restart
        # silently dropped the whole conversation while logging "restarted".
        launch = base + (" --continue" if resume else "")
    else:
        launch = _launch_codex_cmd(
            base,
            pin_model=pin_model,
            resume=resume,
            codex_home=_session_config_base(session_name),
        )
    launch = _session_launch_identity_prefix(session_name) + " " + launch
    return scoped_codex_command(
        session_name,
        launch,
        memory_high_mb=int(os.environ.get("TMUX_DASH_CODEX_MEMORY_HIGH_MB", "2048")),
        memory_max_mb=int(os.environ.get("TMUX_DASH_CODEX_MEMORY_MAX_MB", "4096")),
        tasks_max=int(os.environ.get("TMUX_DASH_CODEX_TASKS_MAX", "768")),
        cpu_weight=int(os.environ.get("TMUX_DASH_CODEX_CPU_WEIGHT", "100")),
    )


# Compatibility aliases used by newer Grabo paths while the implementation is Codex.
def _launch_claude_cmd(
    cmd: str, pin_model: bool = True, codex_home: Path | None = None
) -> str:
    return _launch_codex_cmd(cmd, pin_model=pin_model, codex_home=codex_home)


def _restore_default_model_setting():
    """Keep the default Codex config aligned with the dashboard selection."""
    try:
        CODEX_HOME.mkdir(parents=True, exist_ok=True)
        cfg = CODEX_HOME / "config.toml"
        existing = cfg.read_text() if cfg.exists() else ""
        managed = {
            "model": DEFAULT_MODEL,
            "model_reasoning_effort": _CODEX_DEFAULT_REASONING_EFFORT,
            "sandbox_mode": "danger-full-access",
            "approval_policy": "never",
        }
        merged = _merge_top_level_toml_keys(existing, managed)
        merged = _ensure_codex_project_trust(merged, os.getcwd())
        if merged != existing:
            _backup_before_dashboard_write(cfg)
            cfg.write_text(merged)
    except Exception:
        logger.debug("Failed to align default Codex config", exc_info=True)


def _model_flag_for_relaunch(session_name: str) -> str:
    try:
        model = _get_session_model(session_name) or DEFAULT_MODEL
    except Exception:
        model = DEFAULT_MODEL
    return f" --model {shlex.quote(model)}" if model else ""

PUB_URL = (PUBLIC_BASE_URL.rstrip("/") or "https://dianaotech.com") + ROOT_PATH  # external base incl. the ROOT_PATH subpath (e.g. .../build)

client = openai.AsyncOpenAI(api_key=OPENAI_API_KEY) if OPENAI_API_KEY else None

SAVED_INFO_PROMPT_VERSION = "v4"

SESSION_LIFECYCLE_FILE = MESSAGES_DIR / "session-lifecycle.json"
CONTROLLER_SNAPSHOT_FILE = MESSAGES_DIR / "controller-runtime.json"
# Session lifecycle rides on the shared store so a session's working directory
# survives a tmux server death -- the metadata is what makes a session
# restorable, and a host-local JSON file is lost to exactly the teardown that
# kills the sessions in the first place.
_session_lifecycle = SessionLifecycleStore(
    SESSION_LIFECYCLE_FILE,
    store=_shared_store(
        "session_lifecycle",
        SESSION_LIFECYCLE_FILE,
        lambda: {"version": 1, "sessions": {}},
    ),
)
_controller_snapshot = LockedJsonStore(
    CONTROLLER_SNAPSHOT_FILE, lambda: {"version": 1}
)
OPENAI_KEY_FILE = MESSAGES_DIR / "openai_api_key"
GOOGLE_MCP_PYTHON = MESSAGES_DIR / "mcp" / "venv" / "bin" / "python"
_stored_openai_key: str = ""


def _google_mcp_command() -> str:
    """Return the configured command or this checkout's deployed MCP runtime."""
    configured = os.environ.get("GOOGLE_MCP_COMMAND", "").strip()
    if configured:
        return configured
    if (
        GOOGLE_MCP_PYTHON.is_file()
        and os.access(GOOGLE_MCP_PYTHON, os.X_OK)
        and GOOGLE_MCP_SCRIPT.is_file()
    ):
        return shlex.join((str(GOOGLE_MCP_PYTHON), str(GOOGLE_MCP_SCRIPT)))
    return ""


def _load_openai_key() -> str:
    global _stored_openai_key
    try:
        if OPENAI_KEY_FILE.exists():
            _stored_openai_key = OPENAI_KEY_FILE.read_text().strip()
    except Exception:
        logger.debug("Failed to load OpenAI API key", exc_info=True)
    return _stored_openai_key


def _write_codex_api_auth(codex_home: Path, key: str):
    """Write file-backed Codex API authentication without logging the secret."""
    if not key:
        return
    codex_home.mkdir(parents=True, exist_ok=True)
    auth_path = codex_home / "auth.json"
    if auth_path.exists():
        _backup_before_dashboard_write(auth_path)
    auth_path.write_text(json.dumps({"auth_mode": "apikey", "OPENAI_API_KEY": key}, indent=2))
    auth_path.chmod(0o600)


def _save_openai_key(key: str):
    global _stored_openai_key
    _stored_openai_key = key
    try:
        MESSAGES_DIR.mkdir(parents=True, exist_ok=True)
        OPENAI_KEY_FILE.write_text(key)
        OPENAI_KEY_FILE.chmod(0o600)
        _write_codex_api_auth(CODEX_HOME, key)
    except Exception:
        logger.debug("Failed to save OpenAI API key", exc_info=True)


def _clear_openai_key():
    global _stored_openai_key
    _stored_openai_key = ""
    try:
        if OPENAI_KEY_FILE.exists():
            OPENAI_KEY_FILE.unlink()
    except Exception:
        logger.debug("Failed to clear OpenAI API key", exc_info=True)


_load_openai_key()


def _active_openai_key() -> str:
    return _stored_openai_key or OPENAI_API_KEY


def _codex_launch_env_prefix() -> str:
    return ""


# Compatibility aliases for inactive legacy team/browser paths. They point at
# the Codex key store and never expose a key in logs or API responses.
ANTHROPIC_API_KEY_FILE = OPENAI_KEY_FILE
_stored_anthropic_key = _stored_openai_key
_save_anthropic_key = _save_openai_key
_clear_anthropic_key = _clear_openai_key


def _claude_launch_env_prefix() -> str:
    return _codex_launch_env_prefix()

# Track auth mode per session: "subscription" or "api"
_session_auth_mode: dict[str, str] = {}


def _codex_home_auth_mode(codex_home: Path) -> str:
    """Return the UI auth label for the credential Codex will actually read."""
    try:
        creds = json.loads((codex_home / "auth.json").read_text())
        mode = creds.get("auth_mode")
        tokens = creds.get("tokens")
        if (
            mode == "chatgpt"
            and isinstance(tokens, dict)
            and tokens.get("access_token")
            and tokens.get("refresh_token")
        ):
            return "subscription"
        if mode == "apikey" and creds.get("OPENAI_API_KEY"):
            return "api"
    except Exception:
        pass
    return "unconfigured"


def _session_real_auth_mode(session_name: str) -> str:
    """Resolve live per-session auth instead of trusting the process-local cache."""
    try:
        resolved = _codex_home_auth_mode(_session_config_base(session_name))
        if resolved != "unconfigured":
            return resolved
    except Exception:
        logger.debug("Failed to resolve auth mode for '%s'", session_name, exc_info=True)
    return _session_auth_mode.get(session_name, "unconfigured")

# Per-session structure when active:
# {
#   "enabled": bool,
#   "phase": int (1-5),
#   "phase_name": str,
#   "step": int,
#   "step_name": str,
#   "started_at": float,
#   "log": [{"ts": float, "phase": int, "step": int, "action": str}],
#   "report": str,
#   "task": asyncio.Task | None,
# }


# Flag to prevent CancelledError handlers from wiping persisted state during shutdown.
# When True, worker cancel handlers skip setting enabled=False and re-saving to disk.
_shutting_down = False

# --- Persistent autonomous mode state ---
# Survives restarts: stores which sessions had away/go-nuts mode enabled.
AUTONOMOUS_STATE_FILE = MESSAGES_DIR / "autonomous-modes.json"

def _save_autonomous_state():
    """Persist which sessions have away/go-nuts mode enabled to disk."""
    try:
        MESSAGES_DIR.mkdir(parents=True, exist_ok=True)
        state = {}
        for name, s in _away_mode_state.items():
            if s.get("enabled"):
                state.setdefault(name, {})["away_mode"] = True
        for name, s in _go_nuts_state.items():
            if s.get("enabled"):
                state.setdefault(name, {})["go_nuts_mode"] = True
        AUTONOMOUS_STATE_FILE.write_text(json.dumps(state))
    except Exception:
        logger.debug("Failed to save autonomous mode state", exc_info=True)

def _load_autonomous_state() -> dict[str, dict]:
    """Load persisted autonomous mode state from disk."""
    try:
        if AUTONOMOUS_STATE_FILE.exists():
            return json.loads(AUTONOMOUS_STATE_FILE.read_text())
    except Exception:
        logger.debug("Failed to load autonomous mode state", exc_info=True)
    return {}


# --- Simple Watchdog ---
# Default-ON, lightweight watchdog that auto-replies "continue" when Codex is
# idle waiting for the user to confirm whether to keep working on the current
# task. Does NOT take initiative on truly finished work — only resolves the
# "shall I continue?" pause case. Per-session opt-out persisted to disk.
SIMPLE_WATCHDOG_DISABLED_FILE = MESSAGES_DIR / "simple-watchdog-disabled.json"
_simple_watchdog_disabled: set = set()
# Per-session log of recent "continue" sends, capped at 20 entries.
_simple_watchdog_log: dict[str, list] = {}
# Per-session bookkeeping: {"idle_since": float, "last_action": float, "last_hash": str}
_simple_watchdog_state: dict[str, dict] = {}


def _save_simple_watchdog_disabled():
    try:
        MESSAGES_DIR.mkdir(parents=True, exist_ok=True)
        SIMPLE_WATCHDOG_DISABLED_FILE.write_text(json.dumps(sorted(_simple_watchdog_disabled)))
    except Exception:
        logger.debug("Failed to save simple-watchdog disabled list", exc_info=True)


def _load_simple_watchdog_disabled():
    global _simple_watchdog_disabled
    try:
        if SIMPLE_WATCHDOG_DISABLED_FILE.exists():
            data = json.loads(SIMPLE_WATCHDOG_DISABLED_FILE.read_text())
            if isinstance(data, list):
                _simple_watchdog_disabled = set(data)
    except Exception:
        logger.debug("Failed to load simple-watchdog disabled list", exc_info=True)


# --- Auto-push mode (per session): "off" | "basic" | "full" ---
# Governs how much the dashboard is allowed to type into a session's terminal on
# the user's behalf when Codex stops or waits:
#   off   — never write anything at all (no option-picking, no Enter on prompts,
#           no auto /login, no free-form "keep going" messages).
#   basic — auto-pick from Codex's option menus and confirm permission/plan
#           prompts (press Enter), and keep the session logged in. Does NOT type
#           any free-form instructions.
#   full  — everything in "basic" PLUS the autopilot watchdog that composes and
#           types a "keep going" message when Codex pauses waiting on the user
#           before a task is finished. (This was the previous always-on behavior.)
# New sessions default to "basic". Persisted per session to disk.
AUTOPUSH_MODES = ("off", "basic", "full")
AUTOPUSH_DEFAULT = "basic"
AUTOPUSH_MODE_FILE = MESSAGES_DIR / "autopush-mode.json"
_autopush_mode: dict[str, str] = {}


def _get_autopush_mode(session_name: str) -> str:
    m = _autopush_mode.get(session_name, AUTOPUSH_DEFAULT)
    return m if m in AUTOPUSH_MODES else AUTOPUSH_DEFAULT


def _save_autopush_mode():
    try:
        MESSAGES_DIR.mkdir(parents=True, exist_ok=True)
        AUTOPUSH_MODE_FILE.write_text(json.dumps(_autopush_mode))
    except Exception:
        logger.debug("Failed to save autopush-mode map", exc_info=True)


def _load_autopush_mode():
    global _autopush_mode
    try:
        if AUTOPUSH_MODE_FILE.exists():
            data = json.loads(AUTOPUSH_MODE_FILE.read_text())
            if isinstance(data, dict):
                _autopush_mode = {
                    str(k): v for k, v in data.items() if v in AUTOPUSH_MODES
                }
    except Exception:
        logger.debug("Failed to load autopush-mode map", exc_info=True)


def _is_codex_running(session_name: str) -> bool:
    """Return True only when the tmux pane has a live Codex descendant."""
    try:
        result = subprocess.run(
            ["tmux", "display-message", "-t", session_name, "-p", "#{pane_pid}"],
            capture_output=True, text=True, timeout=5
        )
        if result.returncode != 0:
            return False
        pane_pid = (result.stdout or "").strip()
        if not pane_pid.isdigit():
            return False
        children, commands = _process_tree_snapshot()
        pending = [pane_pid]
        seen: set[str] = set()
        while pending and len(seen) < 10000:
            current = pending.pop()
            if current in seen:
                continue
            seen.add(current)
            # Match any supported agent, not just "codex": a Claude pane was
            # reported as idle, so restart logic typed a launch command straight
            # into the live agent's prompt instead of a shell.
            if commands.get(current) in _AGENT_PROCESS_NAMES:
                return True
            pending.extend(children.get(current, ()))
        return False
    except Exception:
        return False


async def _async_is_codex_running(session_name: str) -> bool:
    """Non-blocking version of _is_codex_running."""
    return await asyncio.to_thread(_is_codex_running, session_name)


async def _ensure_codex_running(session_name: str, log_fn=None, state: dict = None,
                                resume_uuid: str = None) -> bool:
    """Restart a crashed Codex pane and resume its most recent local thread."""
    alog = logging.getLogger("autonomous")
    if await _async_is_codex_running(session_name):
        return True

    msg = f"Codex not running in '{session_name}' — restarting it"
    alog.warning(msg)
    if log_fn and state:
        log_fn(state, msg)

    try:
        # Re-export the owner's CODEX_HOME before launching in case the shell
        # was respawned (environment variables do not survive a fresh bash).
        try:
            if not await asyncio.to_thread(
                _send_session_owner_environment,
                session_name,
            ):
                raise RuntimeError("could not restore the session owner environment")
            await asyncio.sleep(0.2)
        except Exception:
            logger.debug("Failed to re-export owner env on auto-restart", exc_info=True)
        # Re-apply clean member auth before relaunch so an accidental /login (which
        # writes stray creds that 401 against the shared key) self-heals on the next
        # start. Picks the right mode: subscription plan if live, else API key.
        try:
            if _multi_tenant_enabled():
                _owner = _find_user_by_id(_load_session_owners().get(session_name, "admin"))
                if _owner and not _is_admin(_owner):
                    _apply_member_auth(_user_codex_config_dir(_owner))
        except Exception:
            logger.debug("Failed to re-apply member auth on relaunch", exc_info=True)
        try:
            await asyncio.to_thread(
                _ensure_codex_auth_with_fallback,
                _session_config_base(session_name),
                True,
            )
        except Exception:
            logger.debug("Failed to validate Codex auth before relaunch", exc_info=True)
        # Codex stores local threads under CODEX_HOME. Resume the newest thread
        # for this working directory instead of opening the interactive picker.
        launch_base = _session_launch_base(session_name)
        launch = _session_launch_command(
            session_name, launch_base, pin_model=True, resume=True
        )
        # C-c first: an unterminated paste leaves bash on a `>` continuation
        # prompt, where C-u only clears the current line and the relaunch would
        # be swallowed as more of the same command. C-u then discards any stray
        # text left on the prompt line (e.g. a "continue" a watchdog typed
        # before this loop took over).
        await asyncio.to_thread(subprocess.run,
            ["tmux", "send-keys", "-t", session_name, "C-c"],
            capture_output=True, text=True, timeout=5)
        await asyncio.sleep(0.2)
        await asyncio.to_thread(subprocess.run,
            ["tmux", "send-keys", "-t", session_name, "C-u"],
            capture_output=True, text=True, timeout=5)
        await asyncio.to_thread(subprocess.run,
            ["tmux", "send-keys", "-t", session_name, "-l", launch],
            capture_output=True, text=True, timeout=5)
        await asyncio.to_thread(subprocess.run,
            ["tmux", "send-keys", "-t", session_name, "Enter"],
            capture_output=True, text=True, timeout=5)

        # Wait for codex to start (up to 30s)
        for _ in range(15):
            await asyncio.sleep(2)
            if await _async_is_codex_running(session_name):
                alog.info(f"Codex restarted successfully in '{session_name}'")
                if log_fn and state:
                    log_fn(state, "Codex restarted successfully")
                # Give it a moment to fully initialize
                await asyncio.sleep(5)
                return True

        alog.error(f"Failed to restart Codex in '{session_name}' after 30s")
        if log_fn and state:
            log_fn(state, "Failed to restart Codex after 30s")
        return False
    except Exception as e:
        alog.error(f"Error restarting Codex in '{session_name}': {e}")
        return False


# Backwards-compatible internal names used by newer Grabo browser/recovery code.
_is_claude_running = _is_codex_running
_async_is_claude_running = _async_is_codex_running
_ensure_claude_running = _ensure_codex_running


_background_tasks: list = []


@asynccontextmanager
async def lifespan(_app: FastAPI):
    """Start watchdogs only in the controller; API workers stay stateless."""
    global _shutting_down
    _shutting_down = False
    loop = asyncio.get_running_loop()
    loop.set_default_executor(ThreadPoolExecutor(max_workers=8 if PROCESS_ROLE == "api" else 20))
    logger.info("Codex Dashboard starting — role=%s port=%s root_path=%s auth=%s openai=%s",
                PROCESS_ROLE, PORT, ROOT_PATH,
                "enabled" if AUTH_PASS else "disabled",
                "configured" if OPENAI_API_KEY else "missing")
    if not AUTH_PASS:
        logger.warning("TMUX_DASH_PASS is not set — authentication is DISABLED. "
                       "Set TMUX_DASH_PASS to enable auth.")
    if not OPENAI_API_KEY:
        logger.warning("OPENAI_API_KEY is not set — LLM summaries will not work.")
    if not os.environ.get("TMUX_DASH_SECRET"):
        logger.warning("TMUX_DASH_SECRET is not set — auth tokens will be invalidated on restart. "
                       "Set a persistent secret for stable sessions.")
    _load_simple_watchdog_disabled()
    _load_autopush_mode()
    _restore_default_model_setting()

    if PROCESS_ROLE == "api":
        # All mutation/watchdog ownership lives across the Unix socket in the
        # controller. API workers only serve HTTP and relay streams.
        yield
        return

    if _multi_tenant_enabled():
        try:
            _setup_shared_git_config()
            logger.info("Team mode: shared git config applied")
        except Exception:
            logger.debug("shared git config setup failed", exc_info=True)
    users = _load_users()
    synced_browser_mcp = 0
    for member in users:
        if not member:
            continue
        config_dir = _user_codex_config_dir(member)
        if _multi_tenant_enabled() and not _is_admin(member):
            # Self-heal the full tenant config on startup, including global and
            # group instructions. Previously only the browser MCP was repaired,
            # so a host that accidentally omitted TEAM_MODE never received the
            # admin's shared policy until that user was edited or recreated.
            _ensure_user_codex_config_dir(member)
        elif _multi_tenant_enabled() and _is_admin(member):
            # Admins do not receive the member developer-instruction block. Keep
            # their managed project handoff rule current on every controller
            # start, not only when they create a brand-new tmux session.
            _sync_projects_note_into(config_dir / "AGENTS.md")
        _ensure_user_browser_session(member, start=False)
        if (config_dir / "config.toml").exists():
            synced_browser_mcp += int(_ensure_browser_mcp(config_dir, member))
    logger.info("Playwright lease proxy synced to %d Codex homes", synced_browser_mcp)
    try:
        migrated_prompts = _backfill_prompt_audit(users)
        if migrated_prompts:
            logger.info("Backfilled %d human prompts into the account audit", migrated_prompts)
    except Exception:
        logger.exception("Failed to backfill the account prompt audit")
    sessions = get_tmux_sessions()
    logger.info("Found %d existing tmux sessions", len(sessions))
    _background_tasks.clear()
    await _start_controller_socket()

    async def sync_advisor_accounts() -> None:
        if not _advisor_live_sync_enabled():
            return
        try:
            await asyncio.to_thread(_sync_permission_groups_with_advisor)
            for account in users:
                await asyncio.to_thread(
                    _sync_advisor_user,
                    account,
                    provision=False,
                )
            logger.info("Advisor permission groups and %d accounts synced", len(users))
        except Exception:
            logger.exception("Advisor account/group startup sync failed")

    controller_loops = (
        ("auto-responder", _auto_responder_loop()),
        ("autonomous watchdog", _watchdog_loop()),
        ("simple watchdog", _simple_watchdog_loop()),
        ("tmp watchdog", _tmp_watchdog_loop()),
        ("crash recovery", _crash_recovery_loop()),
        ("codex health watchdog", _codex_health_watchdog_loop()),
        ("model refresh", _model_refresh_loop()),
        ("browser lifecycle", _browser_lifecycle_loop()),
        ("session lifecycle", _session_lifecycle_loop()),
        ("controller snapshot", _controller_snapshot_loop()),
        ("advisor account sync", sync_advisor_accounts()),
    )
    for label, coroutine in controller_loops:
        _background_tasks.append(asyncio.create_task(coroutine))
        logger.info("%s started", label)

    # Restore persistent autonomous mode state from disk
    saved = _load_autonomous_state()
    if saved:
        session_names = {s["name"] for s in sessions}
        for name, modes in saved.items():
            if name not in session_names:
                logger.info("Skipping autonomous restore for '%s' — session no longer exists", name)
                continue
            if modes.get("away_mode"):
                logger.info("Restoring Away Mode for '%s' (was active before restart)", name)
                state = {
                    "enabled": True, "phase": 4, "phase_name": "Continuous (restored)",
                    "step": 0, "step_name": "Restored after restart",
                    "started_at": time.time(), "log": [], "report": "", "task": None,
                }
                _away_mode_state[name] = state
                _away_log(state, "Away mode restored after server restart")
                t = asyncio.create_task(_restore_autonomous_mode(name, state, "away"))
                state["task"] = t
            elif modes.get("go_nuts_mode"):
                logger.info("Restoring Go Nuts Mode for '%s' (was active before restart)", name)
                state = {
                    "enabled": True, "phase": 4, "phase_name": "Continuous Build (restored)",
                    "step": 0, "step_name": "Restored after restart",
                    "started_at": time.time(), "log": [], "report": "", "task": None,
                }
                _go_nuts_state[name] = state
                _go_nuts_log(state, "Go Nuts mode restored after server restart")
                t = asyncio.create_task(_restore_autonomous_mode(name, state, "gonuts"))
                state["task"] = t

    # Clean up orphaned entries (sessions that no longer exist were skipped above
    # but file still has their old state). Re-save now based on in-memory dicts only.
    _save_autonomous_state()

    yield  # Application is running

    _shutting_down = True  # Prevent CancelledError handlers from wiping persisted state
    logger.info("Controller shutting down — cancelling %d background tasks", len(_background_tasks))
    # Save autonomous mode state BEFORE cancelling tasks (so enabled=True is preserved)
    _save_autonomous_state()
    logger.info("Autonomous mode state saved to disk for restore on next startup")
    for t in _background_tasks:
        if not t.done():
            t.cancel()
    # Cancel any running away-mode workers
    for name, state in _away_mode_state.items():
        if state.get("task") and not state["task"].done():
            state["task"].cancel()
            logger.info("Cancelled away-mode worker for '%s'", name)
    # Cancel any running go-nuts-mode workers
    for name, state in _go_nuts_state.items():
        if state.get("task") and not state["task"].done():
            state["task"].cancel()
            logger.info("Cancelled go-nuts-mode worker for '%s'", name)
    await _stop_controller_socket()
    try:
        _cancel_codex_chatgpt_login()
    except Exception:
        logger.debug("Failed to stop pending Codex login during shutdown", exc_info=True)
    logger.info("Shutdown complete")


app = FastAPI(root_path=ROOT_PATH, lifespan=lifespan)

IDE_BUNDLE_ENTRY = IDE_BUNDLE_DIR / "ide.js"
if IDE_BUNDLE_DIR.is_dir():
    app.mount("/static/ide", StaticFiles(directory=str(IDE_BUNDLE_DIR)), name="ide-bundle")


@app.exception_handler(RequestValidationError)
async def request_validation_error_handler(_request: Request, exc: RequestValidationError):
    """Keep API validation errors compatible with the dashboard's JS client.

    Do not serialize Pydantic's full error structure here: it can include the
    submitted value, which is especially undesirable on credential routes.
    """
    errors = exc.errors()
    message = errors[0].get("msg", "Invalid request") if errors else "Invalid request"
    return JSONResponse({"error": message}, status_code=422)

AUTH_SECRET = os.environ.get("TMUX_DASH_SECRET", secrets.token_hex(32))


# The signing primitives live in core/tokens.py; AUTH_SECRET stays here so it
# keeps exactly one definition (it is generated per process when
# TMUX_DASH_SECRET is unset) and is passed in rather than imported.
def _make_token(user_id: str) -> str:
    return core_tokens.make_token(AUTH_SECRET, user_id)


def _check_token(token: str) -> bool:
    return core_tokens.check_token(AUTH_SECRET, token)








def _new_user_id() -> str:
    return "u_" + secrets.token_hex(8)








def _find_user_by_username(username: str) -> dict | None:
    for u in _load_users():
        if u.get("username") == username:
            return u
    return None


def _verify_password(user: dict, password: str) -> bool:
    salt = user.get("password_salt", "")
    expected = user.get("password_hash", "")
    candidate = _hash_password(password, salt)
    return bool(expected) and hmac.compare_digest(candidate, expected)









def _multi_tenant_enabled() -> bool:
    """Enable tenant behavior whenever real member accounts exist.

    Older deployments relied only on ``TMUX_DASH_TEAM_MODE``. That made a
    multi-user users.json silently run with the single-user security/UI policy
    when the environment flag was omitted. The explicit flag remains useful
    for provisioning a fresh team host, while persisted non-admin accounts are
    now sufficient to keep tenant isolation enabled after every restart.
    """
    if TEAM_MODE:
        return True
    try:
        return any(not _is_admin(user) for user in _load_users())
    except Exception:
        return False


# Initialize the users store on import so the admin always exists.
try:
    _load_users()
except Exception:
    logger.exception("Failed to initialize users.json")


# --- Per-user data dirs ---
# Admin keeps the legacy ~/.tmux-dashboard/ root for backwards compatibility
# with existing messages.json / notes.json / uploads/ on disk. Non-admin users
# are isolated under ~/.tmux-dashboard/users/<user_id>/.
def _user_data_dir(user: dict | None) -> Path:
    if not user or user.get("id") == "admin":
        return MESSAGES_DIR
    d = MESSAGES_DIR / "users" / user["id"]
    d.mkdir(parents=True, exist_ok=True)
    return d


def _user_messages_file(user: dict | None) -> Path:
    return _user_data_dir(user) / "messages.json"


def _user_notes_file(user: dict | None) -> Path:
    return _user_data_dir(user) / "notes.json"


def _user_uploads_dir(user: dict | None) -> Path:
    return _user_data_dir(user) / "uploads"


def _user_autonomous_file(user: dict | None) -> Path:
    return _user_data_dir(user) / "autonomous-modes.json"


def _user_codex_config_dir(user: dict | None) -> Path:
    """Where Codex reads AGENTS.md / MEMORY.md / config.toml / skills/
    / projects/ / memory/ for this user. Admin uses the standard ~/.codex root;
    non-admin users get a fully isolated directory.
    """
    if not user or user.get("id") == "admin":
        return Path.home() / ".codex"
    return Path.home() / f".codex-user-{user['id']}"


# Wire core/users.py now that both of its injected dependencies exist. It is
# deliberately not importing them: AUTH_SECRET must keep one definition, and
# importing _user_codex_config_dir from app would make core depend on the
# application it is being extracted from.
core_users.configure(user_codex_config_dir=_user_codex_config_dir)
core_users.configure_secret(AUTH_SECRET)
# Resolve through this module's attribute rather than the imported function, so
# tests that patch `app._load_users` still steer user lookups made inside
# core/users.py. Binding the function object directly would freeze the pre-patch
# version and silently read the real users file.
core_users.configure_users_provider(lambda: globals()["_load_users"]())


def _member_session_project_dir(user: dict, session_name: str) -> Path:
    """Return and create the private project root for one member session."""
    username = str(user.get("username") or user.get("id") or "")
    if not re.fullmatch(r"[A-Za-z0-9.@_-]{1,128}", username):
        username = str(user.get("id") or "member")
    safe_session = str(session_name or "")
    if not re.fullmatch(r"[A-Za-z0-9_.-]{1,128}", safe_session):
        safe_session = "session-" + hashlib.sha256(
            safe_session.encode("utf-8")
        ).hexdigest()[:16]
    project_dir = PROJECTS_ROOT / username / safe_session
    project_dir.mkdir(parents=True, exist_ok=True)
    return project_dir


def _rewrite_top_level_toml(existing: str, values: dict[str, str | None]) -> str:
    """Replace or remove selected top-level keys without touching TOML tables."""
    out: list[str] = []
    written: set[str] = set()
    in_section = False
    for line in existing.splitlines():
        stripped = line.strip()
        if stripped.startswith("[") and stripped.endswith("]"):
            if not in_section:
                for key, value in values.items():
                    if value is not None and key not in written:
                        out.append(f"{key} = {value}")
                        written.add(key)
            in_section = True
            out.append(line)
            continue
        if not in_section and "=" in stripped and not stripped.startswith("#"):
            key = stripped.split("=", 1)[0].strip()
            if key in values:
                if values[key] is not None and key not in written:
                    out.append(f"{key} = {values[key]}")
                    written.add(key)
                continue
        out.append(line)
    if not in_section:
        if out and out[-1].strip():
            out.append("")
        for key, value in values.items():
            if value is not None and key not in written:
                out.append(f"{key} = {value}")
    return "\n".join(out).rstrip() + "\n"


def _toml_basic_string(value: str) -> str:
    """Render one TOML basic string with JSON-compatible escaping."""
    return json.dumps(value or "", ensure_ascii=False)


def _strip_toml_sections(existing: str, prefixes: tuple[str, ...]) -> str:
    """Remove complete TOML tables whose dotted names match a prefix."""
    out: list[str] = []
    skipping = False
    for line in existing.splitlines():
        match = re.match(r"^\s*\[([^\[\]]+)\]\s*$", line)
        if match:
            section = match.group(1).strip()
            skipping = any(
                section == prefix or section.startswith(prefix + ".")
                for prefix in prefixes
            )
        if not skipping:
            out.append(line)
    return "\n".join(out).rstrip() + "\n"


def _set_toml_table_bool(existing: str, section: str, key: str, value: bool) -> str:
    """Upsert one boolean in an existing or new TOML table."""
    lines = existing.splitlines()
    header = f"[{section}]"
    start = next(
        (index for index, line in enumerate(lines) if line.strip() == header),
        None,
    )
    rendered = f"{key} = {'true' if value else 'false'}"
    if start is None:
        if lines and lines[-1].strip():
            lines.append("")
        lines.extend((header, rendered))
        return "\n".join(lines).rstrip() + "\n"
    end = next(
        (
            index
            for index in range(start + 1, len(lines))
            if lines[index].strip().startswith("[")
            and lines[index].strip().endswith("]")
        ),
        len(lines),
    )
    matches = [
        index
        for index in range(start + 1, end)
        if re.match(rf"^\s*{re.escape(key)}\s*=", lines[index])
    ]
    if matches:
        lines[matches[0]] = rendered
        for duplicate in reversed(matches[1:]):
            del lines[duplicate]
    else:
        lines.insert(start + 1, rendered)
    return "\n".join(lines).rstrip() + "\n"


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


def _existing_playwright_block(config_text: str) -> str:
    """The playwright-browser MCP block already in a member's config.toml.

    Returned WITH its `# BEGIN/# END GRABO PLAYWRIGHT MCP` markers when they are
    present: a marker-less table sends _ensure_browser_mcp down its migration
    branch, which strips forward to the next TOML table and takes the following
    block's BEGIN comment with it.
    """
    begin = "# BEGIN GRABO PLAYWRIGHT MCP (managed)"
    end = "# END GRABO PLAYWRIGHT MCP"
    if begin in config_text and end in config_text:
        head = config_text.split(begin, 1)[1]
        if end in head:
            return begin + head.split(end, 1)[0] + end + "\n"
    marker = "[mcp_servers.playwright-browser]"
    if marker not in config_text:
        return ""
    tail = config_text.split(marker, 1)[1]
    out = [marker]
    seen_content = False
    for line in tail.splitlines():
        if not line.strip() and not seen_content:
            continue          # padding between the marker and the first key
        seen_content = True
        stripped = line.strip()
        if stripped.startswith("[") and not stripped.startswith(
            "[mcp_servers.playwright-browser"
        ):
            break
        if stripped.startswith("# BEGIN ") or stripped.startswith("# END "):
            break
        out.append(line)
    # Wrap it so the next startup recognises it as managed instead of migrating it.
    return begin + "\n" + "\n".join(out).rstrip() + "\n" + end + "\n"


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


def _strip_managed_block(text: str, marker: str) -> str:
    """Remove a `# BEGIN <marker> ... # END <marker>` section we no longer write.

    Members keep a long-lived config.toml, so retiring a managed block has to
    delete what an earlier build already wrote, not merely stop appending it.
    """
    pattern = re.compile(
        r"\n*# BEGIN " + re.escape(marker) + r".*?# END " + re.escape(marker) + r"[^\n]*\n?",
        re.S,
    )
    return pattern.sub("\n", text)


def _materialize_member_skills(cfg_dir: Path) -> None:
    """Replace external skill symlinks with private account-owned copies."""
    skills_dir = cfg_dir / "skills"
    skills_dir.mkdir(parents=True, exist_ok=True)
    account_root = cfg_dir.resolve()
    for entry in list(skills_dir.iterdir()):
        if not entry.is_symlink():
            continue
        try:
            source = entry.resolve(strict=True)
            if source == account_root or source.is_relative_to(account_root):
                continue
            private_copy = skills_dir / (
                f".{entry.name}.private-{secrets.token_hex(4)}"
            )
            if source.is_dir():
                shutil.copytree(source, private_copy)
            elif source.is_file():
                shutil.copy2(source, private_copy)
            else:
                continue
            entry.unlink()
            private_copy.rename(entry)
        except Exception:
            logger.exception(
                "Failed to make skill '%s' private to %s",
                entry.name,
                cfg_dir,
            )


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


def _ensure_user_codex_config_dir(user: dict):
    """Create + seed a fresh Codex config dir for a non-admin user."""
    if not user or user.get("id") == "admin":
        return
    d = _user_codex_config_dir(user)
    d.mkdir(parents=True, exist_ok=True)
    for sub in ("skills", "projects", "memories", "agents", "commands"):
        (d / sub).mkdir(parents=True, exist_ok=True)
    try:
        (d / "memory").rmdir()
    except OSError:
        pass
    # Seed minimal files so Codex has something to read.
    codex_md = d / "AGENTS.md"
    if not codex_md.exists():
        codex_md.write_text(
            f"# {user.get('username', user['id'])}'s AGENTS.md\n"
            "Personal notes and project context for this user.\n"
        )
    memory_md = d / "MEMORY.md"
    if not memory_md.exists():
        memory_md.write_text(
            "# Account notes\n\n"
            "Optional dashboard notes; Codex does not load this file automatically.\n"
        )
    config_toml = d / "config.toml"
    existing_config = config_toml.read_text() if config_toml.exists() else ""
    if existing_config:
        desired_config = existing_config
    else:
        desired_config = (
            f'model = "{_CODEX_DEFAULT_MODEL}"\n'
            f'model_reasoning_effort = "{_CODEX_DEFAULT_REASONING_EFFORT}"\n'
            'approval_policy = "never"\n'
        )
    if desired_config != existing_config:
        _backup_before_dashboard_write(config_toml)
        config_toml.write_text(desired_config)
    key = _active_openai_key()
    if key and not (d / "auth.json").exists():
        try:
            _write_codex_api_auth(d, key)
        except Exception:
            logger.debug("Failed to seed Codex auth for user %s", user.get("id"), exc_info=True)
    # Managed member context is independent of the legacy TEAM_MODE flag:
    # multi-account deployments existed before that flag was introduced.
    # Re-apply on every call so existing and newly provisioned accounts
    # self-heal after a host/context change.
    try:
        _remove_legacy_global_context_from_agents(codex_md)
        _sync_group_context_into(codex_md, "")
        _materialize_member_skills(d)
        _sync_git_rules_into(codex_md)
    except Exception:
        logger.exception(
            "Failed to apply managed context for user %s",
            user.get("id"),
        )
    # TEAM_MODE additionally shares Codex authentication and applies the
    # compatibility guard/model setup used by older team deployments.
    if TEAM_MODE:
        try:
            _apply_member_auth(d)
        except Exception:
            logger.exception("Failed to apply team-mode setup for user %s", user.get("id"))
    try:
        _configure_member_codex_isolation(d, user)
    except Exception:
        logger.exception("Failed to configure Codex for user %s", user.get("id"))
    _set_member_codex_permissions(d)


# Compatibility aliases used throughout the newer Grabo team/admin code.
_user_claude_config_dir = _user_codex_config_dir
_ensure_user_claude_config_dir = _ensure_user_codex_config_dir


# --- Session ownership ---
SESSION_OWNERS_FILE = MESSAGES_DIR / "session_owners.json"


def _load_session_owners() -> dict[str, str]:
    """Read the ownership map fresh under a cross-process shared lock.

    API workers and the controller are separate processes. The old permanent
    in-process cache could therefore keep stale owners indefinitely and its
    read/modify/write updates could overwrite another worker's assignment.
    """
    try:
        data = _shared_store("session_owners", SESSION_OWNERS_FILE, dict).read()
        return {str(k): str(v) for k, v in data.items()}
    except Exception:
        logger.debug("Failed to load session owners", exc_info=True)
    return {}


def _session_owner_id(session_name: str) -> str:
    """Return the owner user_id for a session. Pre-existing sessions with no
    recorded owner default to the admin."""
    owners = _load_session_owners()
    return owners.get(session_name, "admin")


def _set_session_owner(session_name: str, user_id: str):
    def mutate(owners: dict):
        owners[str(session_name)] = str(user_id)

    _shared_store("session_owners", SESSION_OWNERS_FILE, dict).update(mutate)


def _clear_session_owner(session_name: str):
    def mutate(owners: dict):
        owners.pop(str(session_name), None)

    _shared_store("session_owners", SESSION_OWNERS_FILE, dict).update(mutate)


def _user_for_session(session_name: str) -> dict | None:
    """Find the user record that owns this session, falling back to admin."""
    owner_id = _session_owner_id(session_name)
    user = _find_user_by_id(owner_id) or _find_user_by_id("admin")
    return user


def _user_can_access_session(user: dict | None, session_name: str) -> bool:
    """Return whether the effective signed-in account owns this session."""
    if not user:
        return False
    return _session_owner_id(session_name) == user["id"]


# Login page: a static document with the same placeholder substitution as the
# dashboard (applied below), so it lives beside it in templates/.
LOGIN_PAGE = (TEMPLATES_DIR / "login.html").read_text()

# Rendered into __GOOGLE_BTN__ only when a Google OAuth client is configured.
_GOOGLE_BTN_HTML = """  <a class="gbtn" id="gbtn" href="__ROOT_PATH__/auth/google/start">
    <svg width="17" height="17" viewBox="0 0 48 48" aria-hidden="true"><path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-3.2-.4-4.7H24v8.9h11.8c-.5 2.7-2 5-4.4 6.6v5.5h7.1c4.2-3.8 6.6-9.5 6.6-16.3z"/><path fill="#34A853" d="M24 46c6 0 11-2 14.6-5.3l-7.1-5.5c-2 1.3-4.5 2.1-7.5 2.1-5.8 0-10.6-3.9-12.4-9.1H4.3v5.7C7.9 41.1 15.4 46 24 46z"/><path fill="#FBBC05" d="M11.6 28.2c-.5-1.3-.7-2.7-.7-4.2s.3-2.9.7-4.2v-5.7H4.3C2.8 16.9 2 20.3 2 24s.8 7.1 2.3 9.9l7.3-5.7z"/><path fill="#EA4335" d="M24 10.7c3.3 0 6.2 1.1 8.5 3.3l6.3-6.3C35 4.1 30 2 24 2 15.4 2 7.9 6.9 4.3 14.1l7.3 5.7c1.8-5.2 6.6-9.1 12.4-9.1z"/></svg>
    Continue with Google</a>
  <div class="ghint">__GOOGLE_HINT__</div>"""

_PASSWORD_LOGIN_HTML = """  <div class="field"><label>Username</label><input name="username" autocomplete="username" autofocus></div>
  <div class="field"><label>Password</label><input name="password" type="password" autocomplete="current-password"></div>
  <button class="login-btn" type="submit">Log in</button>"""


def _login_page() -> str:
    """The login page, with the Google button rendered only when configured.

    Resolved per request rather than at import so dropping in
    ~/.tmux-dashboard/google_oauth_client.json takes effect on the next page
    load instead of needing the app restarted.
    """
    if not _google_login_enabled():
        return (
            LOGIN_PAGE.replace("__GOOGLE_BTN__", "")
            .replace("__PASSWORD_LOGIN__", _PASSWORD_LOGIN_HTML)
        )
    domains = ", ".join("@" + d for d in GOOGLE_LOGIN_DOMAINS)
    hint = ("Company accounts only (" + domains + ")") if domains else "Company accounts only"
    return (
        LOGIN_PAGE.replace(
            "__GOOGLE_BTN__",
            _GOOGLE_BTN_HTML.replace("__GOOGLE_HINT__", hint),
        )
        .replace("__PASSWORD_LOGIN__", "")
    )


def _apply_security_headers(request: Request, response: Response) -> Response:
    """Apply the dashboard's response policy, including direct login pages."""
    response.headers["Cache-Control"] = "no-store, no-cache, must-revalidate, max-age=0"
    response.headers["Pragma"] = "no-cache"
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "SAMEORIGIN"
    response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
    response.headers["X-XSS-Protection"] = "1; mode=block"
    response.headers["Permissions-Policy"] = "camera=(), microphone=(self), geolocation=()"
    if (
        request.headers.get("x-forwarded-proto", "").split(",", 1)[0].strip().lower() == "https"
        or request.url.scheme == "https"
    ):
        response.headers["Strict-Transport-Security"] = (
            "max-age=31536000; includeSubDomains"
        )
    # CSP: Monaco is deliberately pinned to a known CDN release.  Its workers are
    # created as blobs, while every API and WebSocket call stays same-origin.
    response.headers["Content-Security-Policy"] = (
        "default-src 'self'; "
        "script-src 'self' 'unsafe-inline' blob: https://cdn.jsdelivr.net; "
        "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; "
        "img-src 'self' data:; "
        "connect-src 'self'; "
        "font-src 'self' data: https://cdn.jsdelivr.net; "
        "worker-src 'self' blob:; "
        "frame-ancestors 'self'"
    )
    return response


@app.middleware("http")
async def security_headers_middleware(request: Request, call_next):
    """Add security headers to all responses and log slow requests."""
    start = time.time()
    response = await call_next(request)
    duration = time.time() - start
    if duration > 2.0:
        logger.warning("Slow request: %s %s took %.1fs", request.method, request.url.path, duration)
    return _apply_security_headers(request, response)


# Regex for /api/sessions/<name>/... and /api/sessions/<name> (DELETE/GET on bare URL).
_SESSION_PATH_RE = re.compile(r"^/api/sessions/([^/]+)(?:/.*)?$")


_ADMIN_ONLY_PREFIXES = (
    "/qa-output",
    "/api/admin",
    "/api/skill-library",
    "/api/context-files",
    "/api/global-context",
    "/api/global-codex",
    "/api/global",
    "/api/all-sessions",
    "/api/stats",
    "/api/login-health",
    "/api/auto-respond-log",
    "/api/browser",
    "/api/auth/status",
    "/api/auth/token",
    "/api/auth/setup",
    "/api/auth/chatgpt",
    "/api/auth/api-key",
    "/api/auth/logout",
    "/api/auth/codex-status",
    "/api/auth/claude-status",
    "/api/auth/usage",
    "/api/usage/limits",
    "/api/models/refresh",
    "/api/ide",
)


@app.middleware("http")
async def session_ownership_middleware(request: Request, call_next):
    """Block per-session API calls when the caller doesn't own the session
    and reject admin-only routes for non-admin users.

    Admin accounts follow the same ownership rule as members. To access a
    member's session, an admin must use "Log in as" so that member becomes the
    effective account. Sessions with no recorded owner default to admin so
    legacy sessions stay with the built-in account.
    """
    if not AUTH_PASS:
        return await call_next(request)
    path = request.url.path
    rp = request.scope.get("root_path", "")
    if rp and path.startswith(rp):
        rel = path[len(rp):] or "/"
    else:
        rel = path
    user = _current_user(request)
    if getattr(request.state, "_invalid_impersonation", False):
        return JSONResponse(
            {"error": "Impersonation session expired or invalid"},
            status_code=401,
        )
    # Admin-only routes (global instructions, account administration, etc.)
    for prefix in _ADMIN_ONLY_PREFIXES:
        if rel == prefix or rel.startswith(prefix + "/"):
            if not _is_admin(user):
                return JSONResponse({"error": "Admin only"}, status_code=403)
            break
    # Only gate paths under /api/sessions/<name>. The list endpoints
    # /api/sessions and /api/sessions-fast are handled at the route level
    # (they filter to the caller's owned sessions).
    if rel in ("/api/sessions", "/api/sessions-fast", "/api/sessions/create"):
        return await call_next(request)
    m = _SESSION_PATH_RE.match(rel)
    if not m:
        return await call_next(request)
    session_name = m.group(1)
    if not _user_can_access_session(user, session_name):
        return JSONResponse({"error": "Session not found"}, status_code=404)
    return await call_next(request)


@app.middleware("http")
async def auth_middleware(request: Request, call_next):
    # Skip auth entirely if no password is configured
    if not AUTH_PASS:
        return await call_next(request)
    path = request.url.path
    # Allow login routes without auth
    rp = request.scope.get("root_path", "")
    if path in ("/login", "/login/", rp + "/login", rp + "/login/"):
        return await call_next(request)
    if path in ("/logout", "/logout/", rp + "/logout", rp + "/logout/"):
        return await call_next(request)
    # SSO verify endpoint for nginx auth_request from sibling knowva.ai apps:
    # it must return its own 200/401 based on the cookie, NOT the login-page
    # fallback (auth_request only treats a real 2xx as authenticated).
    if path.endswith("/api/auth/verify"):
        return await call_next(request)
    # Sandbox guard hook calls this from localhost with no cookie (it checks the
    # client host itself). OAuth callback self-verifies a signed state param and
    # must work even when the cross-site redirect from Google drops the cookie.
    if path.endswith("/api/sandbox/check") or path.endswith("/api/connections/google/callback"):
        return await call_next(request)
    # Google sign-in: both legs run before there is a session cookie.
    if "/auth/google/" in path:
        return await call_next(request)
    token = request.cookies.get(AUTH_COOKIE)
    if not _check_token(token):
        resp = HTMLResponse(_login_page())
        return _apply_security_headers(request, resp)
    # Token signature is valid — also verify the user still exists. If users.json
    # was tampered with or the user got deleted while logged in, fall back to
    # the login screen.
    user = _user_from_token(token)
    if not user:
        resp = HTMLResponse(_login_page())
        resp.delete_cookie(AUTH_COOKIE)
        return _apply_security_headers(request, resp)
    request.state._authenticated_user = user
    request.state._current_user = user
    return await call_next(request)


@app.get("/api/auth/verify")
async def api_auth_verify(request: Request):
    """SSO check for nginx ``auth_request`` from sibling knowva.ai apps.

    Returns 200 when this dashboard's configured auth cookie is valid, else 401 — so a
    single login to this dashboard unlocks the other knowva.ai apps (matcher,
    crypto, zoom, ...) which gate on this endpoint instead of separate logins.

    Accounts carrying ``sso: false`` (Google-provisioned employees) are 401'd
    here on purpose: letting anyone with a company address into the dashboard
    should not also hand them the crypto/sales/matcher apps.
    """
    u = _user_from_token(request.cookies.get(AUTH_COOKIE))
    if u and u.get("sso", True) is not False:
        return JSONResponse({"ok": True})
    return JSONResponse({"ok": False}, status_code=401)


# Simple in-memory login rate limiter: (ip, window_start_minute) -> attempt_count
_login_attempts: dict[str, int] = {}
_LOGIN_MAX_ATTEMPTS = 10  # per IP per minute
_LOGIN_WINDOW = 60        # seconds


def _check_login_rate_limit(ip: str) -> bool:
    """Return True if the IP is allowed to attempt login, False if rate-limited."""
    now = time.time()
    window_key = f"{ip}:{int(now // _LOGIN_WINDOW)}"
    count = _login_attempts.get(window_key, 0)
    if count >= _LOGIN_MAX_ATTEMPTS:
        return False
    _login_attempts[window_key] = count + 1
    # Prune old keys to avoid unbounded growth
    stale = [k for k in list(_login_attempts) if k != window_key and k.split(":")[0] == ip]
    for k in stale:
        del _login_attempts[k]
    return True


@app.post("/login")
async def do_login(request: Request):
    ip = request.client.host if request.client else "unknown"
    if not _check_login_rate_limit(ip):
        logger.warning("Login rate limit exceeded for IP %s", ip)
        return HTMLResponse("Too many login attempts. Please wait a moment.", status_code=429)
    form = await request.form()
    username = form.get("username", "")
    password = form.get("password", "")
    # Where to land after a successful login. Only same-origin relative paths are
    # honoured ("//host" would be an open redirect), and never /login itself.
    nxt = (form.get("next") or "").strip()
    if not (nxt.startswith("/") and not nxt.startswith("//")) or "/login" in nxt.split("?")[0]:
        nxt = request.scope.get("root_path", "") + "/"
    # Legacy env-var path: if the credentials match TMUX_DASH_USER/TMUX_DASH_PASS,
    # accept and treat as the admin user. This keeps the dashboard reachable even
    # if users.json was deleted by hand.
    legacy_ok = (
        AUTH_PASS
        and hmac.compare_digest(username, AUTH_USER)
        and hmac.compare_digest(password, AUTH_PASS)
    )
    user = _find_user_by_username(username)
    if user and _verify_password(user, password):
        target_user = user
    elif legacy_ok:
        # Rebuild the admin user record on the fly if missing/out of sync. Find
        # the admin inside *this* `users` list so the mutation we save below
        # actually lands on the right object (calling _find_user_by_id would
        # return a copy from a separate _load_users()).
        users = _load_users()
        target_user = next((u for u in users if u.get("id") == "admin"), None)
        salt = _new_salt()
        if target_user is None:
            target_user = {
                "id": "admin",
                "username": username,
                "password_hash": _hash_password(password, salt),
                "password_salt": salt,
                "role": "admin",
                "created_at": time.time(),
                "last_login": 0,
            }
            users.append(target_user)
        else:
            # Re-sync username + password hash to whatever the env says (this
            # protects against a stale users.json shipped with an old salt).
            target_user["username"] = username
            target_user["password_salt"] = salt
            target_user["password_hash"] = _hash_password(password, salt)
        _save_users(users)
    else:
        # The login form is served by GET "/" — there is no GET /login route, so
        # redirecting there on a bad password 405s instead of re-showing the form.
        # Any gated path re-serves the form, so bounce back to `next` and keep
        # the deep link across a mistyped password.
        return RedirectResponse(url=nxt + ("&" if "?" in nxt else "?") + "err=1", status_code=303)

    # Update last_login + capture IP / browser for the admin audit view
    ua = (request.headers.get("user-agent", "") or "")[:300]
    fwd = request.headers.get("x-forwarded-for", "")
    real_ip = fwd.split(",")[0].strip() if fwd else ip
    try:
        users = _load_users()
        for u in users:
            if u.get("id") == target_user["id"]:
                u["last_login"] = time.time()
                u["last_login_ip"] = real_ip
                u["last_login_ua"] = ua
                break
        _save_users(users)
    except Exception:
        logger.debug("Failed to update last_login for %s", target_user.get("id"), exc_info=True)

    token = _make_token(target_user["id"])
    resp = RedirectResponse(url=nxt, status_code=303)
    is_https = request.headers.get("x-forwarded-proto") == "https" or request.url.scheme == "https"
    resp.set_cookie(AUTH_COOKIE, token, max_age=86400 * 30, httponly=True, samesite="lax", secure=is_https)
    return resp


@app.api_route("/logout", methods=["GET", "POST"])
async def do_logout(request: Request):
    root = request.scope.get("root_path", "").rstrip("/") + "/"
    resp = RedirectResponse(url=root, status_code=303)
    resp.delete_cookie(AUTH_COOKIE, path="/")
    resp.delete_cookie("tmux_imp_orig", path="/")
    resp.delete_cookie(AUTH_COOKIE + "_google_state", path="/")
    return resp


GOOGLE_DRIVE_SCOPE = "https://www.googleapis.com/auth/drive"
GOOGLE_GMAIL_SCOPE = "https://www.googleapis.com/auth/gmail.modify"
GOOGLE_WORKSPACE_REQUIRED_SCOPES = (
    GOOGLE_DRIVE_SCOPE,
    GOOGLE_GMAIL_SCOPE,
)
GOOGLE_LOGIN_SCOPES = "openid email profile"
GOOGLE_LOGIN_STATE_COOKIE = AUTH_COOKIE + "_google_state"


def _google_workspace_subject(user: dict | None) -> str:
    """Return the company identity that domain-wide delegation may use."""
    if not user or not GOOGLE_DWD_SERVICE_ACCOUNT_FILE.is_file():
        return ""
    email = str(user.get("google_email") or "").strip().lower()
    if "@" not in email:
        return ""
    if email.split("@", 1)[1] not in GOOGLE_LOGIN_DOMAINS:
        return ""
    return email


def _google_workspace_delegation_ready(user: dict | None) -> bool:
    """Verify that company delegation grants both required APIs."""
    subject = _google_workspace_subject(user)
    if not subject:
        return False
    try:
        from google.auth.transport.requests import Request as GoogleAuthRequest
        from google.oauth2 import service_account

        credentials = service_account.Credentials.from_service_account_file(
            str(GOOGLE_DWD_SERVICE_ACCOUNT_FILE),
            scopes=list(GOOGLE_WORKSPACE_REQUIRED_SCOPES),
            subject=subject,
        )
        credentials.refresh(GoogleAuthRequest())
        return bool(credentials.token)
    except Exception:
        logger.exception(
            "Google Workspace delegation preflight failed for %s",
            subject,
        )
        return False


def _google_login_enabled() -> bool:
    cid, csec = _google_client()
    return bool(cid and csec)


def _public_base_url(request: Request) -> str:
    """Externally-visible scheme://host for this request.

    TMUX_DASH_PUBLIC_URL wins when set; otherwise trust the proxy headers, since
    nginx terminates TLS and forwards plain HTTP (request.url.scheme would say
    "http" and Google rejects a redirect_uri that doesn't match exactly).
    """
    if PUBLIC_BASE_URL:
        return PUBLIC_BASE_URL.rstrip("/")
    proto = (request.headers.get("x-forwarded-proto", "").split(",")[0].strip()
             or request.url.scheme)
    host = (request.headers.get("x-forwarded-host", "").split(",")[0].strip()
            or request.headers.get("host", "") or request.url.netloc)
    return f"{proto}://{host}"


def _google_login_redirect_uri(request: Request) -> str:
    """Must match a redirect URI registered on the OAuth client, exactly."""
    return _public_base_url(request) + ROOT_PATH + "/auth/google/callback"


def _google_email_allowed(email: str) -> bool:
    email = (email or "").lower()
    if "@" not in email:
        return False
    if email in GOOGLE_LOGIN_EMAILS or (ADMIN_GOOGLE_EMAIL and email == ADMIN_GOOGLE_EMAIL):
        return True
    return email.split("@", 1)[1] in GOOGLE_LOGIN_DOMAINS


def _decode_id_token(id_token: str) -> dict:
    """Return the claims of a Google ID token.

    No signature check: the token is read straight off Google's HTTPS token
    endpoint in response to a request authenticated with our client secret, which
    is the case Google explicitly documents as not needing local verification.
    The claims below (aud/iss/exp) are still checked by the caller.
    """
    parts = id_token.split(".")
    if len(parts) != 3:
        raise ValueError("malformed id_token")
    payload = parts[1] + "=" * (-len(parts[1]) % 4)
    return json.loads(base64.urlsafe_b64decode(payload.encode()))


def _google_login_user(email: str, name: str) -> dict | None:
    """Find (or provision) the account for a verified Google address.

    Explicit bindings win over the domain allowlist so a personal address can be
    pinned to an existing account: an exact `google_email` match, the env-pinned
    ADMIN_GOOGLE_EMAIL, or a username that already *is* the address. Only after
    those do we fall back to "allowed domain → create a new member account".
    """
    email = (email or "").strip().lower()
    users = _load_users()

    target = next((u for u in users if (u.get("google_email") or "").lower() == email), None)
    if target is None and ADMIN_GOOGLE_EMAIL and email == ADMIN_GOOGLE_EMAIL:
        target = next((u for u in users if u.get("id") == "admin"), None)
    if target is None:
        target = next((u for u in users if (u.get("username") or "").lower() == email), None)
    if target is not None:
        if (target.get("google_email") or "").lower() != email:
            target["google_email"] = email
            _save_users(users)
        return target

    if not _google_email_allowed(email):
        return None

    # New employee: provision a member account with no password (password login
    # stays impossible — _verify_password rejects an empty hash — so the Google
    # identity is the only way in until an admin sets one).
    base = re.sub(r"[^A-Za-z0-9._-]", "", email.split("@", 1)[0]) or "user"
    username = base[:40]
    taken = {(u.get("username") or "").lower() for u in users}
    if username.lower() in taken:
        username = email[:40]
    if username.lower() in taken:
        username = (base[:32] + "-" + secrets.token_hex(3))
    new_user = {
        "id": _new_user_id(),
        "username": username,
        "password_hash": "",
        "password_salt": "",
        "role": "user",
        "group": "",
        "google_email": email,
        "display_name": (name or "")[:80],
        "auth": "google",
        # Google-provisioned members are dashboard-only: they must not inherit
        # the nginx auth_request SSO that unlocks the sibling knowva.ai apps.
        "sso": False,
        "created_at": time.time(),
        "last_login": 0,
    }
    users.append(new_user)
    _save_users(users)
    try:
        _user_data_dir(new_user)
        _ensure_user_codex_config_dir(new_user)
        if _advisor_live_sync_enabled():
            _sync_advisor_user(new_user, provision=True)
            # The advisor MCP block is gated on the token file, which only exists
            # after the line above -- so write the config once more now that it does.
            _ensure_user_codex_config_dir(new_user)
        _ensure_user_browser_session(new_user, start=False)
    except Exception:
        logger.exception("Failed to provision isolated resources for Google user %s", new_user["id"])
        users = [u for u in users if u.get("id") != new_user["id"]]
        _save_users(users)
        return None
    logger.info("Provisioned Google user '%s' (%s)", username, email)
    return new_user


def _sync_admin_google_email():
    """Keep the admin record's google_email in step with the env pin."""
    if not ADMIN_GOOGLE_EMAIL:
        return
    try:
        users = _load_users()
        admin = next((u for u in users if u.get("id") == "admin"), None)
        if admin is not None and (admin.get("google_email") or "").lower() != ADMIN_GOOGLE_EMAIL:
            admin["google_email"] = ADMIN_GOOGLE_EMAIL
            _save_users(users)
    except Exception:
        logger.exception("Failed to sync the admin Google address")


_sync_admin_google_email()


@app.get("/auth/google/start")
async def google_login_start(request: Request):
    rp = request.scope.get("root_path", "")
    cid, csec = _google_client()
    if not cid or not csec:
        return RedirectResponse(url=rp + "/?gerr=config", status_code=303)
    nxt = (request.query_params.get("next") or "").strip()
    if not (nxt.startswith("/") and not nxt.startswith("//")) or "/login" in nxt.split("?")[0]:
        nxt = rp + "/"
    state = _sign_state(
        f"glogin:{int(time.time())}:{base64.urlsafe_b64encode(nxt.encode()).decode()}"
    )
    params = urllib.parse.urlencode({
        "client_id": cid,
        "redirect_uri": _google_login_redirect_uri(request),
        "response_type": "code",
        "scope": GOOGLE_LOGIN_SCOPES,
        # Always show the picker: these boxes are shared, and a stale Google
        # session would otherwise sign you in as the wrong person silently.
        "prompt": "select_account",
        "state": state,
    })
    return RedirectResponse("https://accounts.google.com/o/oauth2/v2/auth?" + params)


@app.get("/auth/google/callback")
async def google_login_callback(request: Request):
    rp = request.scope.get("root_path", "")
    ip = request.client.host if request.client else "unknown"
    if request.query_params.get("error"):
        return RedirectResponse(url=rp + "/?gerr=denied", status_code=303)
    if not _check_login_rate_limit(ip):
        return HTMLResponse("Too many login attempts. Please wait a moment.", status_code=429)
    code = request.query_params.get("code") or ""
    payload = _verify_state(request.query_params.get("state") or "")
    if not code or not payload or not payload.startswith("glogin:"):
        return RedirectResponse(url=rp + "/?gerr=state", status_code=303)
    try:
        _, ts, nxt_b64 = payload.split(":", 2)
        nxt = base64.urlsafe_b64decode(nxt_b64.encode()).decode()
    except Exception:
        return RedirectResponse(url=rp + "/?gerr=state", status_code=303)
    if time.time() - int(ts) > 600:
        return RedirectResponse(url=rp + "/?gerr=state", status_code=303)
    if not (nxt.startswith("/") and not nxt.startswith("//")):
        nxt = rp + "/"

    cid, csec = _google_client()
    data = urllib.parse.urlencode({
        "code": code, "client_id": cid, "client_secret": csec,
        "redirect_uri": _google_login_redirect_uri(request),
        "grant_type": "authorization_code",
    }).encode()
    try:
        req = urllib.request.Request("https://oauth2.googleapis.com/token", data=data)
        with urllib.request.urlopen(req, timeout=20) as r:
            tok = json.load(r)
        claims = _decode_id_token(tok.get("id_token") or "")
    except Exception:
        logger.exception("Google sign-in token exchange failed")
        return RedirectResponse(url=rp + "/?gerr=failed", status_code=303)

    if claims.get("aud") != cid:
        logger.warning("Google sign-in: id_token audience mismatch")
        return RedirectResponse(url=rp + "/?gerr=failed", status_code=303)
    if claims.get("iss") not in ("accounts.google.com", "https://accounts.google.com"):
        logger.warning("Google sign-in: unexpected issuer %s", claims.get("iss"))
        return RedirectResponse(url=rp + "/?gerr=failed", status_code=303)
    if float(claims.get("exp") or 0) < time.time():
        return RedirectResponse(url=rp + "/?gerr=state", status_code=303)
    email = (claims.get("email") or "").strip().lower()
    if not email or not claims.get("email_verified"):
        return RedirectResponse(url=rp + "/?gerr=domain", status_code=303)

    target_user = _google_login_user(email, claims.get("name") or "")
    if not target_user:
        logger.warning("Google sign-in rejected for %s (not an allowed domain)", email)
        return RedirectResponse(url=rp + "/?gerr=domain", status_code=303)

    ua = (request.headers.get("user-agent", "") or "")[:300]
    fwd = request.headers.get("x-forwarded-for", "")
    real_ip = fwd.split(",")[0].strip() if fwd else ip
    try:
        users = _load_users()
        for u in users:
            if u.get("id") == target_user["id"]:
                u["last_login"] = time.time()
                u["last_login_ip"] = real_ip
                u["last_login_ua"] = ua
                u["last_login_via"] = "google"
                break
        _save_users(users)
    except Exception:
        logger.debug("Failed to update last_login for %s", target_user.get("id"), exc_info=True)

    logger.info("Google sign-in: %s -> user '%s' (%s)",
                email, target_user.get("username"), target_user.get("role"))
    resp = RedirectResponse(url=nxt, status_code=303)
    return _set_auth_cookie(resp, request, _make_token(target_user["id"]))


class CreateUserBody(BaseModel):
    username: str
    password: str
    role: str = "user"
    group: str = ""


class UpdateUserBody(BaseModel):
    password: str | None = None
    role: str | None = None
    username: str | None = None
    group: str | None = None
    google_email: str | None = None
    sso: bool | None = None




def _user_session_count(user_id: str) -> int:
    owners = _load_session_owners()
    return sum(1 for v in owners.values() if v == user_id)


def _last_human_activity(user: dict) -> float:
    """Return the newest timestamp written by this human, never agent output."""
    user_id = str(user.get("id") or "")
    audit_row = _prompt_audit_summary().get(user_id)
    if audit_row is not None:
        # Prompts sent while an admin is impersonating this account remain in
        # its audit trail, but do not make the member appear personally active.
        # Summaries written before impersonation attribution existed only have
        # ``last_ts``; those records were necessarily direct user activity.
        key = "last_direct_ts" if "last_direct_ts" in audit_row else "last_ts"
        return float(audit_row.get(key) or 0)
    latest = 0.0
    for messages in _load_messages(user).values():
        if not isinstance(messages, list):
            continue
        for message in messages:
            if not isinstance(message, dict) or message.get("role") != "user":
                continue
            try:
                latest = max(latest, float(message.get("ts") or 0))
            except (TypeError, ValueError):
                continue
    return latest


def _user_lifetime_stats(users: list[dict]) -> dict[str, dict[str, int]]:
    """Return lightweight retained prompt/token totals for the Users table."""
    prompt_totals = _prompt_audit_summary()
    stats = {}
    for user in users:
        user_id = str(user.get("id") or "")
        if not user_id:
            continue
        tokens = _token_usage_for_home(
            _user_codex_config_dir(user), {"all": ""}
        )["all"]
        stats[user_id] = {
            "total_prompts": int(
                (prompt_totals.get(user_id) or {}).get("count") or 0
            ),
            "total_tokens": int(tokens.get("totalTokens") or 0),
        }
    return stats


@app.get("/api/admin/users")
async def api_admin_list_users(request: Request):
    user = _current_user(request)
    if not _is_admin(user):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    users = _load_users()
    lifetime_stats = await asyncio.to_thread(_user_lifetime_stats, users)
    out = []
    for u in users:
        rec = _public_user(u)
        rec["session_count"] = _user_session_count(u["id"])
        rec["last_activity"] = _last_human_activity(u)
        rec.update(lifetime_stats.get(str(u.get("id") or ""), {}))
        out.append(rec)
    return JSONResponse({"users": out})


@app.post("/api/admin/users")
async def api_admin_create_user(request: Request, body: CreateUserBody):
    user = _current_user(request)
    if not _is_admin(user):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    username = (body.username or "").strip()
    password = body.password or ""
    role = body.role if body.role in ("user", "admin") else "user"
    group_id = (body.group or "").strip()
    if group_id and group_id not in PERMISSION_GROUPS:
        return JSONResponse({"error": "Unknown permission group"}, status_code=400)
    if role == "admin":
        group_id = ""
    if not username:
        return JSONResponse({"error": "Username is required"}, status_code=400)
    if not re.match(r"^[A-Za-z0-9._@-]{2,40}$", username):
        return JSONResponse({"error": "Username must be 2-40 chars (letters, numbers, . _ @ -)"}, status_code=400)
    if len(password) < 6:
        return JSONResponse({"error": "Password must be at least 6 characters"}, status_code=400)
    users = _load_users()
    if any(u.get("username") == username for u in users):
        return JSONResponse({"error": f"Username '{username}' already exists"}, status_code=409)
    salt = _new_salt()
    new_user = {
        "id": _new_user_id(),
        "username": username,
        "password_hash": _hash_password(password, salt),
        "password_salt": salt,
        "role": role,
        "group": group_id,
        "created_at": time.time(),
        "last_login": 0,
    }
    # Seed the user's data + Codex config dirs so they're ready to use.
    try:
        _user_data_dir(new_user)
        _ensure_user_codex_config_dir(new_user)
        if _advisor_live_sync_enabled():
            await asyncio.to_thread(
                _sync_advisor_user,
                new_user,
                provision=not _is_admin(new_user),
            )
            # The advisor MCP block is gated on the token file, which only exists
            # after the call above -- rewrite the config now that it does.
            _ensure_user_codex_config_dir(new_user)
        _ensure_user_browser_session(new_user, start=False)
    except Exception:
        logger.exception("Failed to provision isolated resources for new user %s", new_user["id"])
        return JSONResponse(
            {"error": "Could not provision the user's private account resources"},
            status_code=502,
        )
    users.append(new_user)
    _save_users(users)
    logger.info("Admin '%s' created user '%s' (role=%s)", user["username"], username, role)
    return JSONResponse({"ok": True, "user": _public_user(new_user)})


@app.patch("/api/admin/users/{user_id}")
async def api_admin_update_user(request: Request, user_id: str, body: UpdateUserBody):
    user = _current_user(request)
    if not _is_admin(user):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    users = _load_users()
    target = next((u for u in users if u["id"] == user_id), None)
    if not target:
        return JSONResponse({"error": "User not found"}, status_code=404)
    changed = False
    if body.username is not None:
        new_un = body.username.strip()
        if not re.match(r"^[A-Za-z0-9._@-]{2,40}$", new_un):
            return JSONResponse({"error": "Invalid username"}, status_code=400)
        if any(u.get("username") == new_un and u["id"] != user_id for u in users):
            return JSONResponse({"error": "Username already taken"}, status_code=409)
        target["username"] = new_un
        changed = True
    if body.password is not None:
        if len(body.password) < 6:
            return JSONResponse({"error": "Password must be at least 6 characters"}, status_code=400)
        salt = _new_salt()
        target["password_salt"] = salt
        target["password_hash"] = _hash_password(body.password, salt)
        changed = True
    if body.role is not None:
        if body.role not in ("user", "admin"):
            return JSONResponse({"error": "Role must be 'user' or 'admin'"}, status_code=400)
        # Block demoting the last remaining admin so we don't lock everyone out.
        if target["id"] == "admin" and body.role != "admin":
            return JSONResponse({"error": "The default admin cannot be demoted"}, status_code=400)
        admin_count = sum(1 for u in users if u.get("role") == "admin")
        if target.get("role") == "admin" and body.role != "admin" and admin_count <= 1:
            return JSONResponse({"error": "Cannot demote the only remaining admin"}, status_code=400)
        target["role"] = body.role
        if body.role == "admin":
            target["group"] = ""
        changed = True
    if body.group is not None:
        group_id = body.group.strip()
        if group_id and group_id not in PERMISSION_GROUPS:
            return JSONResponse({"error": "Unknown permission group"}, status_code=400)
        if _is_admin(target) and group_id:
            return JSONResponse(
                {"error": "Administrators do not use a permission group"},
                status_code=400,
            )
        target["group"] = group_id
        changed = True
    if body.google_email is not None:
        gmail = body.google_email.strip().lower()
        if gmail and "@" not in gmail:
            return JSONResponse({"error": "Invalid Google address"}, status_code=400)
        if gmail and any((u.get("google_email") or "").lower() == gmail and u["id"] != user_id
                         for u in users):
            return JSONResponse({"error": "That Google address is already linked to another user"},
                                status_code=409)
        target["google_email"] = gmail
        changed = True
    if body.sso is not None:
        target["sso"] = bool(body.sso)
        changed = True
    if changed:
        try:
            if _advisor_live_sync_enabled():
                await asyncio.to_thread(
                    _sync_advisor_user,
                    target,
                    provision=not _is_admin(target),
                )
        except Exception:
            logger.exception("Failed to sync advisor identity for %s", user_id)
            return JSONResponse(
                {"error": "Could not apply the permission group to the user's private data connection"},
                status_code=502,
            )
        _save_users(users)
        # Re-apply per-user context (incl. the group block) for non-admin users.
        try:
            if not _is_admin(target):
                _ensure_user_codex_config_dir(target)
            _ensure_user_browser_session(target, start=False)
        except Exception:
            logger.debug("Failed to re-apply context after user update", exc_info=True)
    return JSONResponse({"ok": True, "user": _public_user(target)})


@app.delete("/api/admin/users/{user_id}")
async def api_admin_delete_user(request: Request, user_id: str):
    user = _current_user(request)
    if not _is_admin(user):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    if user_id == "admin":
        return JSONResponse({"error": "The default admin cannot be deleted"}, status_code=400)
    users = _load_users()
    target = next((u for u in users if u["id"] == user_id), None)
    if not target:
        return JSONResponse({"error": "User not found"}, status_code=404)
    # Kill any tmux sessions this user owned (their content would otherwise
    # become orphaned and visible only to admins).
    owners = _load_session_owners()
    owned = [name for name, oid in owners.items() if oid == user_id]
    for name in owned:
        try:
            subprocess.run(["tmux", "kill-session", "-t", name],
                           capture_output=True, text=True, timeout=5)
        except Exception:
            logger.debug("Failed to kill session '%s' during user delete", name, exc_info=True)
        _clear_session_owner(name)
    # Remove the user record.
    users = [u for u in users if u["id"] != user_id]
    _save_users(users)
    try:
        _delete_user_browser_session(user_id)
    except Exception:
        logger.exception("Failed to retire browser for deleted user %s", user_id)
    # Tear down per-user data + Codex config dirs.
    try:
        data_dir = MESSAGES_DIR / "users" / user_id
        if data_dir.exists():
            shutil.rmtree(data_dir, ignore_errors=True)
    except Exception:
        logger.debug("Failed to remove user data dir for %s", user_id, exc_info=True)
    try:
        cfg_dir = Path.home() / f".codex-user-{user_id}"
        if cfg_dir.exists():
            shutil.rmtree(cfg_dir, ignore_errors=True)
    except Exception:
        logger.debug("Failed to remove user codex config for %s", user_id, exc_info=True)
    logger.info("Admin '%s' deleted user '%s' (and %d sessions)",
                user["username"], target.get("username", user_id), len(owned))
    return JSONResponse({"ok": True})


def _set_auth_cookie(resp, request: Request, token: str):
    is_https = request.headers.get("x-forwarded-proto") == "https" or request.url.scheme == "https"
    resp.set_cookie(AUTH_COOKIE, token, max_age=86400 * 30,
                    httponly=True, samesite="lax", secure=is_https)
    return resp












class ImpersonationExchangeBody(BaseModel):
    ticket: str = Field(min_length=20, max_length=200)


@app.post("/api/admin/users/{user_id}/impersonate")
async def api_admin_impersonate(request: Request, user_id: str):
    """Issue a short-lived ticket for an isolated impersonation browser tab."""
    admin = _current_user(request)
    if not _is_admin(admin):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    target = next((u for u in _load_users() if u["id"] == user_id), None)
    if not target:
        return JSONResponse({"error": "User not found"}, status_code=404)
    if target["id"] == admin["id"]:
        return JSONResponse({"error": "That's already you"}, status_code=400)
    ticket = secrets.token_urlsafe(32)
    with _impersonation_lock:
        _purge_expired_impersonation_tokens()
        _impersonation_tickets[ticket] = {
            "admin_id": admin["id"],
            "target_id": target["id"],
            "expires_at": time.time() + _IMPERSONATION_TICKET_TTL,
        }
    url = (
        f"{ROOT_PATH or ''}/?impersonate_ticket="
        f"{urllib.parse.quote(ticket, safe='')}"
    )
    logger.info(
        "Admin '%s' issued an impersonation ticket for '%s'",
        admin.get("username"),
        target.get("username"),
    )
    return JSONResponse({
        "ok": True,
        "username": target.get("username", ""),
        "url": url,
        "expires_in": _IMPERSONATION_TICKET_TTL,
    })


@app.post("/api/admin/impersonation/exchange")
async def api_admin_impersonation_exchange(
    request: Request,
    body: ImpersonationExchangeBody,
):
    """Consume a one-time ticket and return a token kept in tab sessionStorage."""
    admin = _current_user(request)
    if not _is_admin(admin):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    now = time.time()
    with _impersonation_lock:
        _purge_expired_impersonation_tokens(now)
        record = _impersonation_tickets.get(body.ticket)
        if not record:
            return JSONResponse(
                {"error": "Impersonation ticket expired or already used"},
                status_code=410,
            )
        if record.get("admin_id") != admin.get("id"):
            return JSONResponse({"error": "Ticket belongs to another admin"}, status_code=403)
        _impersonation_tickets.pop(body.ticket, None)
        token = secrets.token_urlsafe(48)
        _impersonation_sessions[token] = {
            "admin_id": admin["id"],
            "target_id": record["target_id"],
            "expires_at": now + _IMPERSONATION_SESSION_TTL,
        }
        _save_impersonation_sessions_locked()
    target = _find_user_by_id(str(record["target_id"]))
    if not target:
        with _impersonation_lock:
            _impersonation_sessions.pop(token, None)
            _save_impersonation_sessions_locked()
        return JSONResponse({"error": "User no longer exists"}, status_code=404)
    return JSONResponse({
        "ok": True,
        "token": token,
        "expires_in": _IMPERSONATION_SESSION_TTL,
        "user": _public_user(target),
    })


@app.post("/api/impersonation/end")
async def api_end_impersonation(request: Request):
    """Revoke the current tab-scoped impersonation token."""
    token = request.headers.get("X-Tmux-Impersonate", "").strip()
    impersonator = getattr(request.state, "_impersonator", None)
    target = _current_user(request)
    if not token or not _is_admin(impersonator) or not target:
        return JSONResponse({"error": "Not impersonating"}, status_code=400)
    with _impersonation_lock:
        record = _impersonation_sessions.get(token)
        if (
            not record
            or record.get("admin_id") != impersonator.get("id")
            or record.get("target_id") != target.get("id")
        ):
            return JSONResponse({"error": "Not impersonating"}, status_code=400)
        _impersonation_sessions.pop(token, None)
        _save_impersonation_sessions_locked()
    return JSONResponse({"ok": True})


@app.post("/api/unimpersonate")
async def api_unimpersonate(request: Request):
    """Return to the admin account. Authorized by possessing a valid admin token
    in the tmux_imp_orig cookie, so the impersonated (non-admin) session can call it."""
    orig = request.cookies.get("tmux_imp_orig")
    admin = _user_from_token(orig) if orig else None
    if not admin or not _is_admin(admin):
        return JSONResponse({"error": "Not impersonating"}, status_code=400)
    resp = JSONResponse({"ok": True, "username": admin.get("username", "")})
    _set_auth_cookie(resp, request, orig)
    resp.delete_cookie("tmux_imp_orig")
    logger.info("Returned to admin '%s' from impersonation", admin.get("username"))
    return resp


# ─────────────────────────────────────────────────────────────────────────────
# API registry — a managed catalog of all external API keys/services (Brave,
# SerpApi, ScrapingBee, OpenAI, Anthropic, …) with plan/limit/cost notes and,
# where the provider exposes one, a LIVE usage fetch so you can see how close to
# the limit you are. Admin-only. Secrets never live in git: the seed below is
# metadata only, and actual key values are hydrated at first run from
# ~/CLAUDE_API_KEYS.md (or the environment). Once seeded, the full records live
# in ~/.tmux-dashboard/api_registry.json (chmod 600, not in the repo).
# ─────────────────────────────────────────────────────────────────────────────
import urllib.error

API_REGISTRY_FILE = MESSAGES_DIR / "api_registry.json"

# Metadata-only seed (NO secret values). key_label is a substring hint used to
# pick the right value when one env var appears multiple times in the md file.
_API_SEED = [
    # ── Search & Scrape ──────────────────────────────────────────────────────
    {"seed_id": "brave", "name": "Brave Search", "provider": "brave", "category": "search",
     "env_var": "BRAVE_API_KEY", "key_label": "", "plan": "Free/Data-for-Search",
     "limits": "Free: ~2,000 q/mo · 1 q/s", "costs": "Free tier / from $3 CPM",
     "usage_provider": "brave", "docs_url": "https://api-dashboard.search.brave.com/app/documentation",
     "dashboard_url": "https://api-dashboard.search.brave.com/", "notes": "Web search API. Live rate-limit headers read on each fetch."},
    {"seed_id": "serpapi", "name": "SerpApi", "provider": "serpapi", "category": "search",
     "env_var": "SERPAPI_KEY", "key_label": "", "plan": "Production",
     "limits": "15,000 searches/mo · 3,000/hr", "costs": "$150/mo",
     "usage_provider": "serpapi", "docs_url": "https://serpapi.com/search-api",
     "dashboard_url": "https://serpapi.com/dashboard", "notes": "Google/Bing/etc SERP scraping. Live usage supported."},
    {"seed_id": "scrapingbee", "name": "ScrapingBee", "provider": "scrapingbee", "category": "search",
     "env_var": "SCRAPINGBEE_API_KEY", "key_label": "", "plan": "",
     "limits": "1,000,000 API credits/mo · 100 concurrency", "costs": "paid plan",
     "usage_provider": "scrapingbee", "docs_url": "https://www.scrapingbee.com/documentation/",
     "dashboard_url": "https://app.scrapingbee.com/dashboard", "notes": "Headless-browser scraping + JS render (SocialPanel gated-platform metrics). Live usage supported."},
    {"seed_id": "firecrawl", "name": "Firecrawl", "provider": "firecrawl", "category": "search",
     "env_var": "FIRECRAWL_API_KEY", "key_label": "", "plan": "",
     "limits": "100,000 credits/period", "costs": "paid plan",
     "usage_provider": "firecrawl", "docs_url": "https://docs.firecrawl.dev/",
     "dashboard_url": "https://www.firecrawl.dev/app", "notes": "Crawl → markdown/JSON. Live usage supported."},
    {"seed_id": "linkup", "name": "Linkup", "provider": "linkup", "category": "search",
     "env_var": "LINKUP_API_KEY", "key_label": "", "plan": "",
     "limits": "credit-based", "costs": "pay-as-you-go",
     "usage_provider": "linkup", "docs_url": "https://docs.linkup.so/",
     "dashboard_url": "https://app.linkup.so/", "notes": "AI web search. Live credit balance supported."},
    {"seed_id": "exa", "name": "Exa", "provider": "exa", "category": "search",
     "env_var": "EXA_API_KEY", "key_label": "", "plan": "",
     "limits": "credit-based", "costs": "pay-as-you-go",
     "usage_provider": "exa", "docs_url": "https://docs.exa.ai/",
     "dashboard_url": "https://dashboard.exa.ai/", "notes": "Neural/semantic web search. No usage API — check dashboard."},
    {"seed_id": "jina", "name": "Jina AI", "provider": "jina", "category": "search",
     "env_var": "JINA_API_KEY", "key_label": "", "plan": "",
     "limits": "token-based wallet", "costs": "pay-as-you-go",
     "usage_provider": "jina", "docs_url": "https://jina.ai/reader/",
     "dashboard_url": "https://jina.ai/api-dashboard/", "notes": "Reader (r.jina.ai) + embeddings + reranker. Live wallet balance supported."},
    {"seed_id": "tavily", "name": "Tavily", "provider": "tavily", "category": "search",
     "env_var": "TAVILY_API_KEY", "key_label": "", "plan": "Dev",
     "limits": "credit-based", "costs": "free dev tier",
     "usage_provider": "tavily", "docs_url": "https://docs.tavily.com/",
     "dashboard_url": "https://app.tavily.com/", "notes": "AI search API. Live usage attempted."},
    {"seed_id": "valyu", "name": "Valyu", "provider": "valyu", "category": "search",
     "env_var": "VALYU_API_KEY", "key_label": "", "plan": "",
     "limits": "credit-based", "costs": "pay-as-you-go",
     "usage_provider": "valyu", "docs_url": "https://docs.valyu.network/",
     "dashboard_url": "https://exchange.valyu.network/", "notes": "⚠️ Stored value currently duplicates the Tavily key — looks mislabeled; verify the real Valyu key."},
    {"seed_id": "mistral", "name": "Mistral", "provider": "mistral", "category": "search",
     "env_var": "MISTRAL_API_KEY", "key_label": "", "plan": "",
     "limits": "token/req rate limits", "costs": "pay-as-you-go",
     "usage_provider": "mistral", "docs_url": "https://docs.mistral.ai/",
     "dashboard_url": "https://console.mistral.ai/", "notes": "LLM + OCR/document APIs. Key validated live; usage on dashboard."},
    # ── LLM / AI models ──────────────────────────────────────────────────────
    {"seed_id": "openai-grabo", "name": "OpenAI (GRABO-data)", "provider": "openai", "category": "llm",
     "env_var": "OPENAI_API_KEY", "key_label": "GRABO-data", "plan": "",
     "limits": "per-model TPM/RPM", "costs": "pay-as-you-go",
     "usage_provider": "openai", "docs_url": "https://platform.openai.com/docs/",
     "dashboard_url": "https://platform.openai.com/usage", "notes": "Rotated 2026-05-20. Hit 429 insufficient_quota 2026-07-17 → Vertex fallback."},
    {"seed_id": "openai-rotemai", "name": "OpenAI (rotemai)", "provider": "openai", "category": "llm",
     "env_var": "OPENAI_API_KEY", "key_label": "rotemai", "plan": "",
     "limits": "per-model TPM/RPM", "costs": "pay-as-you-go",
     "usage_provider": "openai", "docs_url": "https://platform.openai.com/docs/",
     "dashboard_url": "https://platform.openai.com/usage", "notes": "Rotated 2026-05-20."},
    {"seed_id": "anthropic-grabo", "name": "Anthropic (grabo-data)", "provider": "anthropic", "category": "llm",
     "env_var": "ANTHROPIC_API_KEY", "key_label": "grabo-data", "plan": "",
     "limits": "per-model TPM/RPM", "costs": "pay-as-you-go",
     "usage_provider": "anthropic", "docs_url": "https://docs.claude.com/",
     "dashboard_url": "https://console.anthropic.com/settings/usage", "notes": "Rotated 2026-05-27. Cost/usage report needs an Admin API key."},
    {"seed_id": "anthropic-docvault", "name": "Anthropic (docvault-GRABO)", "provider": "anthropic", "category": "llm",
     "env_var": "ANTHROPIC_API_KEY", "key_label": "docvault", "plan": "",
     "limits": "per-model TPM/RPM", "costs": "pay-as-you-go",
     "usage_provider": "anthropic", "docs_url": "https://docs.claude.com/",
     "dashboard_url": "https://console.anthropic.com/settings/usage", "notes": "Rotated 2026-05-27."},
    {"seed_id": "gemini", "name": "Gemini (Direct API)", "provider": "gemini", "category": "llm",
     "env_var": "GEMINI_API_KEY", "key_label": "", "plan": "",
     "limits": "per-model RPM/RPD", "costs": "free tier + pay-as-you-go",
     "usage_provider": "gemini", "docs_url": "https://ai.google.dev/gemini-api/docs",
     "dashboard_url": "https://aistudio.google.com/app/apikey", "notes": "Non-Vertex. Project 808242700204, rotated 2026-05-20. Key validated live; usage in Google Cloud console."},
    {"seed_id": "vertex", "name": "Vertex AI / Gemini (GCE SA)", "provider": "vertex", "category": "llm",
     "env_var": "", "key_label": "", "plan": "GCP", "limits": "GCP quotas",
     "costs": "GCP billing (nimo-gpt)", "usage_provider": "vertex",
     "docs_url": "https://cloud.google.com/vertex-ai/docs", "dashboard_url": "https://console.cloud.google.com/vertex-ai",
     "notes": "No API key — GCE service account nimo-843@nimo-gpt. google.genai(vertexai=True, project='nimo-gpt', location='us-central1'). OpenAI-quota fallback."},
    # ── Email / Messaging ────────────────────────────────────────────────────
    {"seed_id": "resend-alphabell", "name": "Resend (alphabell-relay)", "provider": "resend", "category": "mail",
     "env_var": "RESEND_API_KEY", "key_label": "alphabell", "plan": "",
     "limits": "Free: 100/day · 3,000/mo", "costs": "free tier",
     "usage_provider": "resend", "docs_url": "https://resend.com/docs",
     "dashboard_url": "https://resend.com/overview", "notes": "Verified domain alphabell.com. Used by alphabell/lisa mail relays."},
    {"seed_id": "resend-grabo", "name": "Resend (grabo-relay)", "provider": "resend", "category": "mail",
     "env_var": "RESEND_API_KEY", "key_label": "grabo-relay", "plan": "",
     "limits": "Free: 100/day · 3,000/mo", "costs": "free tier",
     "usage_provider": "resend", "docs_url": "https://resend.com/docs",
     "dashboard_url": "https://resend.com/overview", "notes": "Verified domain grabo.cc. Used by grabo-mail relay (2026-06-08)."},
    {"seed_id": "twilio", "name": "Twilio (SMS + phone agent)", "provider": "twilio", "category": "mail",
     "env_var": "", "key_label": "", "plan": "pay-as-you-go",
     "limits": "account balance", "costs": "~$208 MTD (2026-07-17)",
     "usage_provider": "twilio", "docs_url": "https://www.twilio.com/docs",
     "dashboard_url": "https://console.twilio.com/", "notes": "SID ACe4d65af6… Live creds env-based on builder ~/phoneagent-app/.env (token not stored here). Killed Voice Intelligence auto-transcribe ~$27/day."},
]


def _parse_api_keys_md():
    """Extract (env_var, label, value) triples from ~/CLAUDE_API_KEYS.md.
    Lines look like `- SERPAPI_KEY: abc` or `- OPENAI_API_KEY (rotemai): sk-…`."""
    out = []
    try:
        if not _CLAUDE_API_KEYS_MD.exists():
            return out
        for line in _CLAUDE_API_KEYS_MD.read_text(errors="replace").splitlines():
            m = re.match(r"^\s*[-*]?\s*([A-Z][A-Z0-9_]{2,})\s*(?:\(([^)]*)\))?\s*:\s*(\S+)", line)
            if m:
                out.append((m.group(1), (m.group(2) or "").strip(), m.group(3).strip()))
    except Exception:
        logger.debug("Failed to parse CLAUDE_API_KEYS.md", exc_info=True)
    return out


def _resolve_seed_key(env_var, key_label):
    """Best-effort hydrate a seed entry's key from the md file, then env."""
    if not env_var:
        return ""
    triples = _parse_api_keys_md()
    cands = [(lbl, val) for (ev, lbl_, val) in triples for lbl in [lbl_] if ev == env_var]
    if cands:
        if key_label:
            hint = key_label.lower()
            for lbl, val in cands:
                if hint in lbl.lower():
                    return val
        return cands[0][1]
    return os.environ.get(env_var, "") or ""


def _new_api_id() -> str:
    return "api_" + secrets.token_hex(6)


def _seed_api_registry() -> list:
    items = []
    for s in _API_SEED:
        e = dict(s)
        e["id"] = "api_" + s["seed_id"]
        e["key"] = _resolve_seed_key(s.get("env_var", ""), s.get("key_label", ""))
        e["status"] = "active"
        e["created_at"] = time.time()
        e["updated_at"] = time.time()
        items.append(e)
    return items


def _load_api_registry() -> list:
    if API_REGISTRY_FILE.exists():
        try:
            data = json.loads(API_REGISTRY_FILE.read_text())
            items = data.get("apis") if isinstance(data, dict) else None
            if isinstance(items, list):
                return items
        except Exception:
            logger.exception("Failed to read %s — re-seeding", API_REGISTRY_FILE)
    items = _seed_api_registry()
    _save_api_registry(items)
    return items


def _save_api_registry(items: list):
    try:
        MESSAGES_DIR.mkdir(parents=True, exist_ok=True)
        API_REGISTRY_FILE.write_text(json.dumps({"apis": items}, indent=2))
        try:
            API_REGISTRY_FILE.chmod(0o600)
        except Exception:
            logger.debug("chmod 600 on api_registry.json failed", exc_info=True)
    except Exception:
        logger.exception("Failed to save API registry to %s", API_REGISTRY_FILE)


def _mask_key(k: str) -> str:
    if not k:
        return ""
    if len(k) <= 12:
        return k[:2] + "•" * (len(k) - 2)
    return k[:6] + "…" + k[-4:]


def _public_api_entry(e: dict) -> dict:
    k = e.get("key", "") or ""
    return {
        "id": e.get("id", ""),
        "name": e.get("name", ""),
        "provider": e.get("provider", ""),
        "category": e.get("category", "other"),
        "env_var": e.get("env_var", ""),
        "key_label": e.get("key_label", ""),
        "key_masked": _mask_key(k),
        "key_set": bool(k),
        "plan": e.get("plan", ""),
        "limits": e.get("limits", ""),
        "costs": e.get("costs", ""),
        "notes": e.get("notes", ""),
        "docs_url": e.get("docs_url", ""),
        "dashboard_url": e.get("dashboard_url", ""),
        "usage_provider": e.get("usage_provider", ""),
        "status": e.get("status", "active"),
        "updated_at": e.get("updated_at", 0),
    }


_API_CATEGORY_ORDER = ["search", "llm", "mail", "other"]
_API_CATEGORY_LABELS = {
    "search": "Search & Scrape", "llm": "LLM / AI Models",
    "mail": "Email & Messaging", "other": "Other",
}

# ── Live usage fetchers ──────────────────────────────────────────────────────
def _api_http(url, headers=None, timeout=15, method="GET", data=None):
    """GET/POST returning (status, body_text, lower-cased headers). Never raises;
    HTTP errors are returned with their status + body so callers can read e.g. a
    402 with rate-limit headers."""
    # Some providers sit behind a WAF (Cloudflare) that 403s the default
    # `Python-urllib/x.y` User-Agent. Present a normal browser-ish UA + Accept
    # unless the caller set them explicitly.
    hdrs = dict(headers or {})
    hdrs.setdefault("User-Agent", "Mozilla/5.0 (X11; Linux x86_64) tmux-dashboard/1.0")
    hdrs.setdefault("Accept", "application/json, */*")
    req = urllib.request.Request(url, headers=hdrs, method=method, data=data)
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            body = r.read().decode("utf-8", "replace")
            return r.status, body, {k.lower(): v for k, v in r.headers.items()}
    except urllib.error.HTTPError as e:
        body = ""
        try:
            body = e.read().decode("utf-8", "replace")
        except Exception:
            pass
        hdrs = {}
        try:
            hdrs = {k.lower(): v for k, v in (e.headers or {}).items()}
        except Exception:
            pass
        return e.code, body, hdrs
    except Exception as e:
        return 0, str(e), {}


def _pct_status(pct):
    if pct is None:
        return "ok"
    if pct >= 90:
        return "err"
    if pct >= 75:
        return "warn"
    return "ok"


def _usage_na(msg="No live usage endpoint — open the dashboard"):
    return {"ok": False, "status": "na", "summary": msg,
            "used": None, "limit": None, "remaining": None, "pct": None, "detail": ""}


def _usage_err(st, body):
    return {"ok": False, "status": "err", "summary": f"HTTP {st}" if st else "request failed",
            "used": None, "limit": None, "remaining": None, "pct": None,
            "detail": (body or "")[:200]}


def _fetch_api_usage_sync(entry: dict) -> dict:
    prov = (entry.get("usage_provider") or "").lower()
    key = entry.get("key") or ""
    if entry.get("status") == "revoked":
        return {"ok": False, "status": "na", "summary": "Revoked — not checked",
                "used": None, "limit": None, "remaining": None, "pct": None, "detail": ""}
    if prov in ("", "exa", "valyu", "vertex", "twilio") or (not key and prov not in ("vertex", "twilio")):
        if prov == "vertex":
            return _usage_na("Service-account auth — usage in GCP console")
        if prov == "twilio":
            return _usage_na("Token lives on builder VM — usage in Twilio console")
        if not key:
            return _usage_na("No key set")
        return _usage_na()
    try:
        if prov == "serpapi":
            st, body, _ = _api_http("https://serpapi.com/account?api_key=" + urllib.parse.quote(key))
            if st == 200:
                d = json.loads(body)
                limit = d.get("searches_per_month")
                used = d.get("this_month_usage")
                left = d.get("total_searches_left")
                pct = (used / limit * 100) if (limit and used is not None) else None
                return {"ok": True, "status": _pct_status(pct),
                        "summary": f"{used:,} / {limit:,} used · {left:,} left" if limit is not None else "OK",
                        "used": used, "limit": limit, "remaining": left, "pct": pct,
                        "detail": f"{d.get('plan_name','')} · ${d.get('plan_monthly_price','?')}/mo · renews {d.get('plan_renewal_date','?')} · {d.get('this_hour_searches','?')}/{d.get('account_rate_limit_per_hour','?')} this hr"}
            return _usage_err(st, body)

        if prov == "scrapingbee":
            st, body, _ = _api_http("https://app.scrapingbee.com/api/v1/usage?api_key=" + urllib.parse.quote(key))
            if st == 200:
                d = json.loads(body)
                limit = d.get("max_api_credit")
                used = d.get("used_api_credit")
                rem = (limit - used) if (limit is not None and used is not None) else None
                pct = (used / limit * 100) if limit else None
                return {"ok": True, "status": _pct_status(pct),
                        "summary": f"{used:,} / {limit:,} credits used",
                        "used": used, "limit": limit, "remaining": rem, "pct": pct,
                        "detail": f"concurrency {d.get('current_concurrency','?')}/{d.get('max_concurrency','?')} · renews {str(d.get('renewal_subscription_date',''))[:10]}"}
            return _usage_err(st, body)

        if prov == "firecrawl":
            st, body, _ = _api_http("https://api.firecrawl.dev/v1/team/credit-usage",
                                    headers={"Authorization": "Bearer " + key})
            if st == 200:
                d = (json.loads(body) or {}).get("data", {}) or {}
                limit = d.get("plan_credits")
                rem = d.get("remaining_credits")
                used = (limit - rem) if (limit is not None and rem is not None) else None
                pct = (used / limit * 100) if limit else None
                return {"ok": True, "status": _pct_status(pct),
                        "summary": f"{used:,} / {limit:,} credits used · {rem:,} left" if limit is not None else "OK",
                        "used": used, "limit": limit, "remaining": rem, "pct": pct,
                        "detail": f"period {str(d.get('billing_period_start',''))[:10]} → {str(d.get('billing_period_end',''))[:10]}"}
            return _usage_err(st, body)

        if prov == "brave":
            st, body, hdrs = _api_http(
                "https://api.search.brave.com/res/v1/web/search?q=ping&count=1",
                headers={"X-Subscription-Token": key, "Accept": "application/json"})

            def _last(s):
                parts = [p.strip() for p in (s or "").split(",") if p.strip() != ""]
                return parts[-1] if parts else ""
            lim = hdrs.get("x-ratelimit-limit", "")
            rem = hdrs.get("x-ratelimit-remaining", "")
            mlim, mrem = _last(lim), _last(rem)
            if st == 402:
                return {"ok": True, "status": "err",
                        "summary": "402 — free quota exhausted / plan inactive",
                        "used": None, "limit": None, "remaining": None, "pct": None,
                        "detail": f"monthly limit {mlim or '?'} · remaining {mrem or '?'}"}
            if st == 200:
                try:
                    L = int(mlim)
                    R = int(mrem)
                    U = L - R
                    pct = (U / L * 100) if L else None
                    return {"ok": True, "status": _pct_status(pct),
                            "summary": (f"{U:,} / {L:,} used this month · {R:,} left" if L else "Key valid"),
                            "used": (U if L else None), "limit": (L or None),
                            "remaining": (R if L else None), "pct": pct,
                            "detail": f"per-second cap {(lim or '').split(',')[0].strip()}"}
                except Exception:
                    return {"ok": True, "status": "ok", "summary": "Key valid",
                            "used": None, "limit": None, "remaining": None, "pct": None,
                            "detail": f"limit {lim} · remaining {rem}"}
            return _usage_err(st, body)

        if prov == "linkup":
            st, body, _ = _api_http("https://api.linkup.so/v1/credits/balance",
                                    headers={"Authorization": "Bearer " + key})
            if st == 200:
                bal = (json.loads(body) or {}).get("balance")
                low = isinstance(bal, (int, float)) and bal <= 5
                return {"ok": True, "status": "warn" if low else "ok",
                        "summary": f"{bal} credits remaining",
                        "used": None, "limit": None, "remaining": bal, "pct": None, "detail": ""}
            return _usage_err(st, body)

        if prov == "jina":
            u = "https://embeddings-dashboard-api.jina.ai/api/v1/api_key/user?api_key=" + urllib.parse.quote(key)
            st, body, _ = _api_http(u, headers={"Authorization": "Bearer " + key})
            if st == 200:
                w = (json.loads(body) or {}).get("wallet", {}) or {}
                bal = w.get("total_balance")
                neg = isinstance(bal, (int, float)) and bal < 0
                summ = (f"balance {bal:,} tokens" if isinstance(bal, (int, float)) else "Key valid")
                if neg:
                    summ += " (depleted / negative)"
                return {"ok": True, "status": "err" if neg else "ok", "summary": summ,
                        "used": None, "limit": None, "remaining": bal, "pct": None, "detail": ""}
            return _usage_err(st, body)

        if prov == "tavily":
            st, body, _ = _api_http("https://api.tavily.com/usage",
                                    headers={"Authorization": "Bearer " + key})
            if st == 200:
                try:
                    d = json.loads(body)
                    acct = d.get("account", {}) or {}
                    k = d.get("key", {}) or {}
                    limit = acct.get("plan_limit") or k.get("limit")
                    used = acct.get("plan_usage") if acct.get("plan_usage") is not None else k.get("usage")
                    if limit and used is not None:
                        pct = used / limit * 100
                        return {"ok": True, "status": _pct_status(pct),
                                "summary": f"{used:,} / {limit:,} used",
                                "used": used, "limit": limit, "remaining": limit - used,
                                "pct": pct, "detail": ""}
                    return {"ok": True, "status": "ok", "summary": "Key valid",
                            "used": None, "limit": None, "remaining": None, "pct": None,
                            "detail": json.dumps(d)[:180]}
                except Exception:
                    return {"ok": True, "status": "ok", "summary": "Key valid",
                            "used": None, "limit": None, "remaining": None, "pct": None, "detail": ""}
            return _usage_err(st, body)

        if prov == "openai":
            st, body, _ = _api_http("https://api.openai.com/v1/models",
                                    headers={"Authorization": "Bearer " + key})
            if st == 200:
                n = len((json.loads(body) or {}).get("data", []))
                return {"ok": True, "status": "ok",
                        "summary": f"Key valid ({n} models) — $/usage on dashboard",
                        "used": None, "limit": None, "remaining": None, "pct": None,
                        "detail": "Cost/usage numbers need an Admin API key; open the dashboard."}
            if st == 429:
                return {"ok": True, "status": "warn", "summary": "429 — rate/quota limited",
                        "used": None, "limit": None, "remaining": None, "pct": None, "detail": (body or "")[:180]}
            if st == 401:
                return {"ok": True, "status": "err", "summary": "401 — invalid/expired key",
                        "used": None, "limit": None, "remaining": None, "pct": None, "detail": (body or "")[:180]}
            return _usage_err(st, body)

        if prov == "anthropic":
            st, body, _ = _api_http("https://api.anthropic.com/v1/models",
                                    headers={"x-api-key": key, "anthropic-version": "2023-06-01"})
            if st == 200:
                n = len((json.loads(body) or {}).get("data", []))
                return {"ok": True, "status": "ok",
                        "summary": f"Key valid ({n} models) — $/usage on dashboard",
                        "used": None, "limit": None, "remaining": None, "pct": None,
                        "detail": "Cost/usage report needs an Admin API key (sk-ant-admin…)."}
            if st == 429:
                return {"ok": True, "status": "warn", "summary": "429 — rate/quota limited",
                        "used": None, "limit": None, "remaining": None, "pct": None, "detail": (body or "")[:180]}
            if st in (401, 403):
                return {"ok": True, "status": "err", "summary": f"{st} — invalid/expired key",
                        "used": None, "limit": None, "remaining": None, "pct": None, "detail": (body or "")[:180]}
            return _usage_err(st, body)

        if prov == "gemini":
            st, body, _ = _api_http(
                "https://generativelanguage.googleapis.com/v1beta/models?key=" + urllib.parse.quote(key))
            if st == 200:
                n = len((json.loads(body) or {}).get("models", []))
                return {"ok": True, "status": "ok",
                        "summary": f"Key valid ({n} models) — usage in GCP console",
                        "used": None, "limit": None, "remaining": None, "pct": None, "detail": ""}
            return _usage_err(st, body)

        if prov == "mistral":
            st, body, _ = _api_http("https://api.mistral.ai/v1/models",
                                    headers={"Authorization": "Bearer " + key})
            if st == 200:
                n = len((json.loads(body) or {}).get("data", []))
                return {"ok": True, "status": "ok",
                        "summary": f"Key valid ({n} models) — usage on dashboard",
                        "used": None, "limit": None, "remaining": None, "pct": None, "detail": ""}
            return _usage_err(st, body)

        if prov == "resend":
            st, body, _ = _api_http("https://api.resend.com/domains",
                                    headers={"Authorization": "Bearer " + key})
            if st == 200:
                data = (json.loads(body) or {}).get("data", [])
                doms = ", ".join(d.get("name", "") for d in data) if isinstance(data, list) else ""
                return {"ok": True, "status": "ok",
                        "summary": f"Key valid — {len(data) if isinstance(data, list) else 0} domain(s)",
                        "used": None, "limit": None, "remaining": None, "pct": None,
                        "detail": (doms or "Free tier: 100/day · 3,000/mo")}
            # Resend returns 400/401 for a bad key, 403 for a valid but
            # permission-restricted (send-only) key — the latter is not an error.
            if st in (400, 401):
                return {"ok": True, "status": "err", "summary": f"{st} — invalid key",
                        "used": None, "limit": None, "remaining": None, "pct": None, "detail": (body or "")[:180]}
            if st == 403:
                return {"ok": True, "status": "ok", "summary": "Key valid — restricted (send-only)",
                        "used": None, "limit": None, "remaining": None, "pct": None,
                        "detail": "Key lacks domains:read; used by mail relays. Free tier: 100/day · 3,000/mo"}
            return _usage_err(st, body)
    except Exception as e:
        logger.debug("usage fetch failed for %s", entry.get("id"), exc_info=True)
        return {"ok": False, "status": "err", "summary": "fetch error: " + str(e)[:120],
                "used": None, "limit": None, "remaining": None, "pct": None, "detail": ""}
    return _usage_na()


class ApiEntryBody(BaseModel):
    name: str | None = None
    provider: str | None = None
    category: str | None = None
    key: str | None = None
    env_var: str | None = None
    key_label: str | None = None
    plan: str | None = None
    limits: str | None = None
    costs: str | None = None
    notes: str | None = None
    docs_url: str | None = None
    dashboard_url: str | None = None
    usage_provider: str | None = None
    status: str | None = None


@app.get("/api/admin/apis")
async def api_admin_list_apis(request: Request):
    user = _current_user(request)
    if not _is_admin(user):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    items = _load_api_registry()
    return JSONResponse({
        "apis": [_public_api_entry(e) for e in items],
        "category_order": _API_CATEGORY_ORDER,
        "category_labels": _API_CATEGORY_LABELS,
    })


@app.post("/api/admin/apis")
async def api_admin_create_api(request: Request, body: ApiEntryBody):
    user = _current_user(request)
    if not _is_admin(user):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    name = (body.name or "").strip()
    if not name:
        return JSONResponse({"error": "Name is required"}, status_code=400)
    items = _load_api_registry()
    now = time.time()
    entry = {
        "id": _new_api_id(), "name": name,
        "provider": (body.provider or "").strip(),
        "category": (body.category or "other").strip() or "other",
        "key": (body.key or "").strip(),
        "env_var": (body.env_var or "").strip(),
        "key_label": (body.key_label or "").strip(),
        "plan": (body.plan or "").strip(),
        "limits": (body.limits or "").strip(),
        "costs": (body.costs or "").strip(),
        "notes": (body.notes or "").strip(),
        "docs_url": (body.docs_url or "").strip(),
        "dashboard_url": (body.dashboard_url or "").strip(),
        "usage_provider": (body.usage_provider or "").strip(),
        "status": "active",
        "created_at": now, "updated_at": now,
    }
    items.append(entry)
    _save_api_registry(items)
    logger.info("Admin '%s' added API '%s'", user.get("username"), name)
    return JSONResponse({"ok": True, "api": _public_api_entry(entry)})


@app.patch("/api/admin/apis/{api_id}")
async def api_admin_update_api(request: Request, api_id: str, body: ApiEntryBody):
    user = _current_user(request)
    if not _is_admin(user):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    items = _load_api_registry()
    target = next((e for e in items if e.get("id") == api_id), None)
    if not target:
        return JSONResponse({"error": "API not found"}, status_code=404)
    for field in ("name", "provider", "category", "env_var", "key_label", "plan",
                  "limits", "costs", "notes", "docs_url", "dashboard_url", "usage_provider"):
        val = getattr(body, field)
        if val is not None:
            target[field] = val.strip()
    # Key: only overwrite when a non-empty value is sent (empty string leaves it
    # untouched so an edit that doesn't retype the secret keeps it).
    if body.key is not None and body.key.strip():
        target["key"] = body.key.strip()
    if body.status is not None:
        if body.status not in ("active", "revoked"):
            return JSONResponse({"error": "status must be active or revoked"}, status_code=400)
        target["status"] = body.status
    target["updated_at"] = time.time()
    _save_api_registry(items)
    return JSONResponse({"ok": True, "api": _public_api_entry(target)})


@app.delete("/api/admin/apis/{api_id}")
async def api_admin_delete_api(request: Request, api_id: str):
    user = _current_user(request)
    if not _is_admin(user):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    items = _load_api_registry()
    target = next((e for e in items if e.get("id") == api_id), None)
    if not target:
        return JSONResponse({"error": "API not found"}, status_code=404)
    items = [e for e in items if e.get("id") != api_id]
    _save_api_registry(items)
    logger.info("Admin '%s' removed API '%s'", user.get("username"), target.get("name"))
    return JSONResponse({"ok": True})


@app.get("/api/admin/apis/{api_id}/reveal")
async def api_admin_reveal_api(request: Request, api_id: str):
    user = _current_user(request)
    if not _is_admin(user):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    target = next((e for e in _load_api_registry() if e.get("id") == api_id), None)
    if not target:
        return JSONResponse({"error": "API not found"}, status_code=404)
    return JSONResponse({"key": target.get("key", "")})


@app.get("/api/admin/apis/{api_id}/usage")
async def api_admin_api_usage(request: Request, api_id: str):
    user = _current_user(request)
    if not _is_admin(user):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    target = next((e for e in _load_api_registry() if e.get("id") == api_id), None)
    if not target:
        return JSONResponse({"error": "API not found"}, status_code=404)
    usage = await asyncio.to_thread(_fetch_api_usage_sync, target)
    return JSONResponse({"id": api_id, "usage": usage})


@app.get("/api/admin/apis-usage-all")
async def api_admin_api_usage_all(request: Request):
    user = _current_user(request)
    if not _is_admin(user):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    items = _load_api_registry()
    results = await asyncio.gather(*[asyncio.to_thread(_fetch_api_usage_sync, e) for e in items])
    return JSONResponse({"usage": {e.get("id"): u for e, u in zip(items, results)}})


class SaveMyContextBody(BaseModel):
    content: str


def _my_context_path(user: dict, filename: str) -> Path | None:
    """Resolve a writable per-user context file. Returns None for paths that
    would escape the user's Codex config dir."""
    base = _user_codex_config_dir(user)
    base.mkdir(parents=True, exist_ok=True)
    target = (base / filename).resolve()
    try:
        target.relative_to(base.resolve())
    except ValueError:
        return None
    return target


_MY_CONTEXT_ALLOWED = {"AGENTS.md", "MEMORY.md", "config.toml"}


@app.get("/api/my/context")
async def api_my_context(request: Request):
    """Return current user's AGENTS.md / MEMORY.md / config.toml contents."""
    user = _current_user(request)
    if not user:
        return JSONResponse({"error": "Not logged in"}, status_code=401)
    if not _is_admin(user):
        _ensure_user_codex_config_dir(user)
    out = {"dir": str(_user_codex_config_dir(user)), "files": []}
    for name in ("AGENTS.md", "MEMORY.md", "config.toml"):
        p = _my_context_path(user, name)
        content = ""
        exists = False
        if p and p.exists():
            try:
                content = p.read_text()
                exists = True
            except Exception:
                logger.debug("Failed to read %s", p, exc_info=True)
        out["files"].append({"name": name, "content": content, "exists": exists, "path": str(p)})
    return JSONResponse(out)


@app.post("/api/my/context/{filename}")
async def api_my_context_save(request: Request, filename: str, body: SaveMyContextBody):
    user = _current_user(request)
    if not user:
        return JSONResponse({"error": "Not logged in"}, status_code=401)
    if filename not in _MY_CONTEXT_ALLOWED:
        return JSONResponse({"error": "Not editable from this endpoint"}, status_code=400)
    if not _is_admin(user):
        _ensure_user_codex_config_dir(user)
    p = _my_context_path(user, filename)
    if p is None:
        return JSONResponse({"error": "Invalid path"}, status_code=400)
    try:
        # Validate config.toml before writing; Codex expects valid TOML.
        if filename == "config.toml":
            try:
                tomllib.loads(body.content or "")
            except tomllib.TOMLDecodeError as e:
                return JSONResponse({"error": f"Invalid TOML: {e}"}, status_code=400)
        _backup_before_dashboard_write(p)
        p.write_text(body.content or "")
        if not _is_admin(user):
            # A member may edit their private content, but cannot accidentally
            # strip the admin/group policy or their isolated browser binding.
            _ensure_user_codex_config_dir(user)
        return JSONResponse({"ok": True, "path": str(p)})
    except Exception:
        logger.exception("Failed to save my-context %s for %s", filename, user["id"])
        return JSONResponse({"error": "Failed to save"}, status_code=500)


# --- History (per-user past sessions) ---

@app.get("/api/history")
async def api_history(request: Request):
    """List past sessions for the current user, with title/notes/last activity.

    A "session" here is any entry in the user's messages.json (current OR
    deleted). Each entry includes the Key Info (notes) so the history list
    can show it inline without a second round-trip.
    """
    user = _current_user(request)
    if not user:
        return JSONResponse({"error": "Not logged in"}, status_code=401)
    messages_by_session = _load_messages(user)
    notes_by_session = _load_all_notes(user)
    # Live cache might have newer in-memory entries for currently active sessions
    # this user owns; merge them in so the list reflects the most recent state.
    live_sessions = set()
    owners = _load_session_owners()
    for sess in get_tmux_sessions():
        if owners.get(sess["name"], "admin") == user["id"]:
            live_sessions.add(sess["name"])
    out = []
    all_names = set(messages_by_session.keys()) | set(notes_by_session.keys()) | live_sessions
    # Live sessions for the admin without explicit ownership records
    if _is_admin(user):
        for sess in get_tmux_sessions():
            if owners.get(sess["name"], "admin") == "admin":
                all_names.add(sess["name"])
                live_sessions.add(sess["name"])
    for name in all_names:
        msgs = messages_by_session.get(name) or []
        # If the session is currently in cache (memory), prefer the live list
        # so newly-sent messages show up without waiting for the next save.
        cache_entry = cache.get(name) or {}
        if cache_entry.get("messages"):
            msgs = cache_entry["messages"]
        notes = notes_by_session.get(name, "") or cache_entry.get("notes", "")
        title = cache_entry.get("title") or ""
        last_ts = 0
        user_msg_count = 0
        for m in msgs:
            if not isinstance(m, dict):
                continue
            ts = m.get("ts") or 0
            if ts > last_ts:
                last_ts = ts
            if m.get("role") == "user":
                user_msg_count += 1
        out.append({
            "session_name": name,
            "title": title,
            "key_info": notes,
            "user_message_count": user_msg_count,
            "total_messages": len(msgs),
            "last_message_at": last_ts,
            "is_live": name in live_sessions,
        })
    out.sort(key=lambda e: e["last_message_at"], reverse=True)
    return JSONResponse({"sessions": out})


@app.get("/api/history/{session_name}")
async def api_history_detail(request: Request, session_name: str):
    """Return all user messages + Key Info for a past session this user owns."""
    user = _current_user(request)
    if not user:
        return JSONResponse({"error": "Not logged in"}, status_code=401)
    if not _user_can_access_session(user, session_name):
        return JSONResponse({"error": "Not found"}, status_code=404)
    # Prefer the live cache for currently-active sessions, fall back to disk.
    msgs: list = []
    cache_entry = cache.get(session_name) or {}
    if cache_entry.get("messages"):
        msgs = cache_entry["messages"]
    else:
        msgs = _load_messages(user).get(session_name, [])
    notes = ""
    if cache_entry.get("notes"):
        notes = cache_entry["notes"]
    else:
        notes = _load_all_notes(user).get(session_name, "")
    user_msgs = [
        {"text": m.get("text", ""), "ts": m.get("ts", 0)}
        for m in msgs
        if isinstance(m, dict) and m.get("role") == "user"
    ]
    return JSONResponse({
        "session_name": session_name,
        "key_info": notes,
        "user_messages": user_msgs,
        "total_user_messages": len(user_msgs),
    })


@app.get("/api/me")
async def api_me(request: Request):
    """Return the currently logged-in user (for the frontend to know who they are)."""
    user = _current_user(request)
    if not user:
        # Auth disabled (no AUTH_PASS) → expose a synthetic admin so the UI works.
        if not AUTH_PASS:
            return JSONResponse({
                "id": "admin", "username": AUTH_USER or "admin",
                "role": "admin", "auth_disabled": True,
                "team_mode": _multi_tenant_enabled(), "brand": BRAND_NAME, "simple": False,
            })
        return JSONResponse({"error": "Not logged in"}, status_code=401)
    is_admin = _is_admin(user)
    # Impersonation: an admin "logged in as" this user has their real token in
    # the side cookie, so we can surface a "return to admin" banner.
    imp_orig = request.cookies.get("tmux_imp_orig")
    imp_admin = getattr(request.state, "_impersonator", None)
    if imp_admin is None:
        imp_admin = _user_from_token(imp_orig) if imp_orig else None
    impersonating = bool(imp_admin and _is_admin(imp_admin) and imp_admin["id"] != user["id"])
    return JSONResponse({
        "id": user["id"],
        "username": user.get("username", ""),
        "role": user.get("role", "user"),
        "auth_disabled": False,
        "team_mode": _multi_tenant_enabled(),
        "brand": BRAND_NAME,
        # "simple" = the heavily-stripped team UI shown to non-admin members.
        "simple": bool(_multi_tenant_enabled() and not is_admin),
        "impersonating": impersonating,
        "impersonator": imp_admin.get("username", "") if impersonating else "",
    })


# ===========================================================================
# Multi-tenant mode: shared auth, global context, soft sandbox, Google connections.
# Enabled explicitly or automatically once a non-admin account exists.
# ===========================================================================
import urllib.parse
import urllib.request

SHARED_CODEX_AUTH = CODEX_HOME / "auth.json"
GLOBAL_CONTEXT_FILE = MESSAGES_DIR / "global-context.md"
SANDBOX_HOOK_PATH = MESSAGES_DIR / "hooks" / "sandbox_guard.py"
CONNECTIONS_DIR = MESSAGES_DIR / "connections"
# Written by google_workspace_mcp.py, one line per Google tool call. Read here
# so an admin can review access without shelling into the box.
GOOGLE_MCP_AUDIT_FILE = MESSAGES_DIR / google_policy.AUDIT_FILE_NAME
GOOGLE_OAUTH_CLIENT_FILE = MESSAGES_DIR / "google_oauth_client.json"

_GLOBAL_CTX_BEGIN = "<!-- TEAM GLOBAL CONTEXT (managed — edits below are overwritten) -->"
_GLOBAL_CTX_END = "<!-- END TEAM GLOBAL CONTEXT -->"

_DEFAULT_GLOBAL_CONTEXT = """# __BRAND__ account policy (admin managed)

## Operating contract

- Work independently and complete ordinary, reversible tasks without asking for
  confirmation. Pause only for genuinely destructive, large, irreversible, or
  sensitive external actions.
- This is a shared full-access build machine. Preserve unrelated files, dirty
  worktrees, services, sessions, and other users' project directories.
- For host-sensitive work, run `hostname` first. Do not infer the current host
  from copied documentation or silently act on a different server. Verify
  mutable infrastructure facts live before changing them.

<!-- SELF SERVE CAPABILITIES (managed) -->
## You can do these yourself. Do not hand them back.

Nothing on this list needs Nimo. Handing one of these back as "please approve
this" or "please do this and reply done" is the most expensive failure mode on
this box: it turns a finished job into a stalled one. Check this list and the
advisor before you decide anything is blocked.

**Buy a domain, or change DNS.** Namecheap is the registrar. Its API is IP-locked
to instance-3, so go through the proxy, which works from every host:
`POST https://rotem.cc/api/nc`, Basic auth user `Nimo`, password from
`get_secret namecheap-proxy`. Body is
`{"command":"namecheap.domains.dns.getHosts","params":{"SLD":"rotem","TLD":"ai"},"profileId":"nebulainnovations"}`
and `command` takes any Namecheap API method, so `namecheap.domains.check`,
`namecheap.domains.create` and `namecheap.domains.dns.setHosts` all work the same
way. Profiles: `nebulainnovations` (rotem.ai, rotem.cc, lisa.my, knowva.ai),
`Nebulallc` (alphabell.com), `anton` (industrialdictionary.com). Web UI at
https://rotem.cc/domains/.
`setHosts` REPLACES EVERY RECORD on the domain. Always `getHosts` first, apply
your edit to the full list, and resend all of it including EmailType and every
TXT record (google-site-verification, SPF, DKIM, DMARC) or you break that
domain's mail. knowva.ai/domains and knowva.ai/api/nc are dead (404): do not use
them and do not send anyone to them. GoDaddy is the second registrar and has no
IP restriction. Per-domain procedure lives in the advisor: `get_domain <name>`.

**Read an SMS, a 2FA code or an OTP.** Every inbound message lands at
https://rotem.ai/sms/. `GET /api/threads` (sort by `last_at`, the code is in
`last_body`), then `GET /api/threads/messages?thread=<key>`. instance-3,
grabo-systems and the VPC range 10.128.0.0/9 pass without Basic auth, but only
over the VPC: from any other host the public name resolves to builder's external
IP and 401s, so pin it to the internal address instead:
`curl --resolve rotem.ai:443:10.128.0.13 https://rotem.ai/sms/api/threads`.
On builder itself use `http://127.0.0.1:9009/api/threads`. Never ask Nimo for a
code.

**Pay for something.** Ask the advisor: `get_payment_method` returns a full card
number, expiry, CVV and billing address, and `ramp_issue_card` mints a capped
virtual card for a new vendor. If your permission group is denied these, that
denial is the correct answer: name the single figure you need and who to ask.
Either way, do not go hunting for a different payment rail, a third-party
checkout or a device-approval flow. There isn't one, and inventing one turns a
five-minute purchase into a blocked task.

**Log into a site, click through a console, or clear a captcha.** You have a real
browser bound to your account. Read
`/home/nimrod_rotem/.tmux-dashboard/context/browser-policy.md` first and follow
its execution hierarchy. Close the tabs you opened when the task is done.

**Pick an API that still has quota:**
`~/tmux-dashboard/.venv/bin/python ~/.tmux-dashboard/api_status.py --json`
(that script's shebang needs the venv interpreter; plain `python3` fails here).
Vertex AI and Gemini need no key at all from a VM:
`google.genai.Client(vertexai=True, project="nimo-gpt", location="us-central1")`,
which is the fallback whenever an OpenAI key returns `insufficient_quota`.

The general rule: if a task stalls on a credential, a login, a code, a domain, a
DNS record, a card or an account, that is an advisor lookup or one of the routes
above, not a question for Nimo. Surface a blocker only when it genuinely needs a
human in the physical world, or a permission your group does not hold. When it
does, finish everything else first, then hand back that one item naming the
exact field or action needed.
<!-- END SELF SERVE CAPABILITIES -->

## Account boundary

- Treat this dashboard account's `CODEX_HOME`, project directory, browser,
  connections, memories, skills, uploads, and session history as private to this
  account. Never inspect or operate another account's corresponding resources.
- Only the admin-managed policy and explicitly shared reference files are
  global. A shared OS login is not permission to cross account boundaries.
- Local Codex memory is private because every account has a separate
  `CODEX_HOME`. Use it as recall, never as the sole source of required policy or
  current external facts.

## Google Workspace is per person, and it is enforced

- Drive, Gmail and Calendar run as **your own** company Google account. There is
  no shared company mailbox behind these tools any more: what you can open is
  what Workspace shares with you.
- Documents that read as payroll, HR or personal identity material are refused
  for the engineering groups, in search results as well as on open. A refusal is
  the correct answer for your account, not an obstacle to work around: name the
  single figure you need and ask an admin.
- Mail to a personal mailbox (gmail.com, qq.com, outlook.com and the like) is
  refused for every account, and groups outside managers and accounting write to
  company addresses only. Hand a work product back as its dashboard project
  link rather than mailing it out.
- Every Google tool call is recorded with your account, the tool, the target and
  whether it was allowed.

## Load details only when relevant

- Company mail, Drive, and Document Vault work:
  `/home/nimrod_rotem/.tmux-dashboard/context/company-data.md`.
- Browser automation, proxies, viewing, auditing, and resource limits:
  `/home/nimrod_rotem/.tmux-dashboard/context/browser-policy.md`.
- Dashboard artifacts and publishing:
  `/home/nimrod_rotem/.tmux-dashboard/context/publishing.md`.
- Shared-host processes, reboots, cleanup, or recurring jobs:
  `/home/nimrod_rotem/.tmux-dashboard/context/operations-safety.md`.
- Product UI or publishable copy:
  `/home/nimrod_rotem/.tmux-dashboard/context/product-style.md`.
- Git or GitHub work: read `~/CLAUDE_GITHUB_RULES.md` completely first.

Use the connected company tools directly when the task calls for them. Keep
payroll, individual compensation, and personal HR matters restricted to users
who are clearly entitled to them.

## The advisor holds the shared data — ask it, and write back

`advisor` is a connected MCP tool. It is the single source of truth every builder
host shares, so shared facts are fetched, never guessed and never copied into a
file on this box.

- Credentials and logins: `list_secrets`, then `get_secret`.
- Servers, apps, ports, domains and each domain's exact DNS procedure:
  `list_hosts`, `list_apps`, `list_domains`, `get_domain`.
- Companies, registration numbers and addresses: `get_entity`. Accountants,
  agents and bankers: `get_contacts`. House rules: `list_rules`.
- Not sure which tool: `search`. Shared notes: `search_memories`.

**Use what it returns.** Nothing is redacted and nothing is a trick question. Put
the key in the app config, put the registration number on the form, and get on
with the job. Do not rotate a credential just because you saw it: a shared key is
used by apps on several hosts. The one real limit is never putting a value in a
public repo or a public page.

**Your token is who you are.** You call the advisor as your own dashboard account,
and it applies your role and your permission group. If it answers "Denied", that
is the correct answer for your account, not a fault to work around: do not try
another route, another account, or another host. Say what you needed and who to
ask. Company card and bank detail, personal identity documents and the Ramp card
list are restricted this way unless your group opens them.

**Write back in the same turn.** A fact that is true beyond this box belongs in
the advisor, not only in a local note. Rotated or wired up a key: `update_secret`.
Signed up for something: `add_secret`. A key 401s or its quota is gone:
`report_secret_problem`. Deployed, moved or retired an app: `register_app`. New or
resized server: `register_host`. Registered or repointed a domain:
`register_domain`. Anything org-wide you learned the hard way: `save_memory`.
A missing field is a bug: fix it, or name the exact field when you hand back.

## Projects and working folder

- Unless told otherwise, publish every project you build at
  __PUBURL__/<username>/<project>. Default <project> is the current tmux session
  name.
- Put the project's web files in `$DASH_PROJECT_DIR`
  (= `~/web-projects/<username>/<project>/`); static files are served
  immediately at `$DASH_PROJECT_URL`. For a dynamic app, run your server on a
  free port and write `$DASH_PROJECT_DIR/.serve.json` = `{"port": <PORT>}` to
  have it reverse-proxied there.
- Never return a local filesystem path as the only link to a work product.
  Put the deliverable under `$DASH_PROJECT_DIR` and hand back its live
  `$DASH_PROJECT_URL` URL. Project URLs require dashboard sign-in, so the remote
  user can open them without exposing the work product publicly.
- This session: user `$DASH_USER`, session `$DASH_SESSION`, link
  `$DASH_PROJECT_URL` (also shown as a clickable link in the dashboard).
"""


def _html_escape(s: str) -> str:
    return (s or "").replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def _ensure_global_context_file():
    GLOBAL_CONTEXT_FILE.parent.mkdir(parents=True, exist_ok=True)
    if not GLOBAL_CONTEXT_FILE.exists():
        GLOBAL_CONTEXT_FILE.write_text(_DEFAULT_GLOBAL_CONTEXT.replace("__BRAND__", BRAND_NAME).replace("__PUBURL__", PUB_URL))


def _read_global_context() -> str:
    _ensure_global_context_file()
    try:
        return GLOBAL_CONTEXT_FILE.read_text()
    except Exception:
        return ""


def _remove_legacy_global_context_from_agents(codex_md: Path) -> bool:
    """Remove the old visible managed policy while preserving account text."""
    if not codex_md.exists():
        return False
    existing = codex_md.read_text()
    updated = existing
    while _GLOBAL_CTX_BEGIN in updated and _GLOBAL_CTX_END in updated:
        pre, remainder = updated.split(_GLOBAL_CTX_BEGIN, 1)
        _managed, post = remainder.split(_GLOBAL_CTX_END, 1)
        updated = pre + post
    if updated == existing:
        return False
    updated = updated.lstrip("\n")
    _backup_before_dashboard_write(codex_md)
    codex_md.write_text(updated)
    return True


def _sync_global_policy_into_config(config: Path, user: dict | None = None) -> bool:
    """Apply host and permission-group policy as a developer instruction."""
    existing = config.read_text() if config.exists() else ""
    instructions = (
        _member_developer_instructions(user)
        if user
        else _read_global_context()
    )
    updated = _rewrite_top_level_toml(
        existing,
        {"developer_instructions": _toml_basic_string(instructions)},
    )
    tomllib.loads(updated)
    if updated == existing:
        return False
    config.parent.mkdir(parents=True, exist_ok=True)
    _backup_before_dashboard_write(config)
    config.write_text(updated)
    return True


def _sync_global_context_into(codex_md: Path):
    """Keep a managed global-context block at the top of a user's AGENTS.md,
    preserving the user's own content below the END marker."""
    block = _GLOBAL_CTX_BEGIN + "\n" + _read_global_context().rstrip() + "\n" + _GLOBAL_CTX_END + "\n"
    existing = ""
    if codex_md.exists():
        try:
            existing = codex_md.read_text()
        except Exception:
            existing = ""
    if _GLOBAL_CTX_BEGIN in existing and _GLOBAL_CTX_END in existing:
        pre = existing.split(_GLOBAL_CTX_BEGIN, 1)[0]
        post = existing.split(_GLOBAL_CTX_END, 1)[1]
        user_part = (pre + post).lstrip("\n")
    else:
        user_part = existing.lstrip("\n")
    updated = block + "\n" + user_part
    if updated != existing:
        _backup_before_dashboard_write(codex_md)
        codex_md.write_text(updated)


_PROJ_NOTE_BEGIN = "<!-- TEAM PROJECTS CONVENTION (managed) -->"
_PROJ_NOTE_END = "<!-- END TEAM PROJECTS CONVENTION -->"
_PROJ_NOTE = """## Projects & working folder
- Publish projects at __PUBURL__/<username>/<project> (default <project> = the current tmux session name).
- Put the project's web files in `$DASH_PROJECT_DIR` (= `~/web-projects/<username>/<project>/`); static files are served immediately at `$DASH_PROJECT_URL`. For a dynamic app, run your server on a free port and write `$DASH_PROJECT_DIR/.serve.json` = `{"port": <PORT>}` to have it reverse-proxied there.
- Never return a local filesystem path as the only link to a work product. Put the deliverable under `$DASH_PROJECT_DIR` and hand back its live `$DASH_PROJECT_URL` URL. Project URLs require dashboard sign-in, so the remote user can open them without exposing the work product publicly.
- This session: user `$DASH_USER`, link `$DASH_PROJECT_URL` (also shown as a clickable link in the dashboard)."""


def _sync_projects_note_into(codex_md: Path):
    """Add a managed projects-convention block at the top of AGENTS.md
    (used for admins, who don't receive the member global block)."""
    original = codex_md.read_text() if codex_md.exists() else ""
    existing = original
    if _PROJ_NOTE_BEGIN in existing and _PROJ_NOTE_END in existing:
        pre = existing.split(_PROJ_NOTE_BEGIN, 1)[0]
        post = existing.split(_PROJ_NOTE_END, 1)[1]
        existing = (pre + post).lstrip("\n")
    else:
        existing = existing.lstrip("\n")
    block = _PROJ_NOTE_BEGIN + "\n" + _PROJ_NOTE.replace("__PUBURL__", PUB_URL) + "\n" + _PROJ_NOTE_END + "\n"
    # Already there, unchanged: leave it where it is. Re-prepending an identical
    # block fights the other managed writers and rewrites the file forever.
    if block in original:
        return
    try:
        codex_md.parent.mkdir(parents=True, exist_ok=True)
        updated = block + "\n" + existing
        if updated != original:
            _backup_before_dashboard_write(codex_md)
            codex_md.write_text(updated)
    except Exception:
        logger.debug("Failed to sync projects note into %s", codex_md, exc_info=True)


_GIT_RULES_BEGIN = "<!-- TEAM GIT RULES (managed) -->"
_GIT_RULES_END = "<!-- END TEAM GIT RULES -->"
_GIT_RULES = """## Git on a shared machine (multiple people, one box)
Several teammates work on this server as the same OS user, so be disciplined:
- **Identity is preset** — your commits are authored as `$GIT_AUTHOR_NAME <$GIT_AUTHOR_EMAIL>` (= your dashboard username). Do NOT change git `user.name`/`user.email` or pass `--author`; let the env vars stand so attribution is correct.
- **Stay in your own space** — work inside this session's cwd / `$DASH_PROJECT_DIR`. Never edit files in another member's project dir (`~/web-projects/<someone-else>/...`).
- **Branch, never commit to a shared branch** — always work on a feature branch named `$DASH_USER/<short-topic>`. Never commit directly to `main`/`master` or to a branch someone else is using.
- **Sync before you start** — `git fetch` + rebase/merge latest so you're not building on stale code. Resolve conflicts cleanly.
- **Push your branch, open a PR** — let the repo owner review/merge. **NEVER force-push** `main` or any shared branch.
- **Isolate when sharing a repo** — if a teammate is already working in a repo's working tree, don't fight over it: make your own worktree — `git worktree add ../<repo>-$DASH_USER -b $DASH_USER/<topic>` — and work there.
- **Never commit secrets** (.env, tokens, keys). Check `git status` before committing."""


def _sync_git_rules_into(codex_md: Path):
    """Maintain a managed GIT RULES block in AGENTS.md (members + admins). Placed
    just under the projects note / top so it's always current regardless of edits."""
    original = codex_md.read_text() if codex_md.exists() else ""
    existing = original
    if _GIT_RULES_BEGIN in existing and _GIT_RULES_END in existing:
        pre = existing.split(_GIT_RULES_BEGIN, 1)[0]
        post = existing.split(_GIT_RULES_END, 1)[1]
        existing = (pre.rstrip("\n") + "\n" + post.lstrip("\n"))
    block = _GIT_RULES_BEGIN + "\n" + _GIT_RULES + "\n" + _GIT_RULES_END + "\n"
    if block in original:
        return
    # Insert after the projects-note block if present, else prepend.
    try:
        codex_md.parent.mkdir(parents=True, exist_ok=True)
        if _PROJ_NOTE_END in existing:
            head, tail = existing.split(_PROJ_NOTE_END, 1)
            updated = head + _PROJ_NOTE_END + "\n\n" + block + tail.lstrip("\n")
        else:
            updated = block + "\n" + existing.lstrip("\n")
        if updated != original:
            _backup_before_dashboard_write(codex_md)
            codex_md.write_text(updated)
    except Exception:
        logger.debug("Failed to sync git rules into %s", codex_md, exc_info=True)






def _setup_shared_git_config():
    """Set safe, friction-reducing git defaults once for the shared OS user so
    multi-user work behaves predictably. Idempotent (git config is declarative)."""
    defaults = [
        ("push.default", "current"),
        ("push.autoSetupRemote", "true"),
        ("pull.rebase", "false"),
        ("init.defaultBranch", "main"),
        ("rerere.enabled", "true"),
        ("merge.conflictStyle", "zdiff3"),
    ]
    for k, v in defaults:
        try:
            subprocess.run(["git", "config", "--global", k, v],
                           capture_output=True, text=True, timeout=5)
        except Exception:
            logger.debug("git config --global %s failed", k, exc_info=True)
    # A global ignore so per-user/editor noise never gets committed by accident.
    try:
        gi = Path.home() / ".gitignore_global"
        if not gi.exists():
            gi.write_text(".DS_Store\n*.swp\n.serve.json\n.claude_primed\nnode_modules/\n__pycache__/\n.venv/\n")
        subprocess.run(["git", "config", "--global", "core.excludesfile", str(gi)],
                       capture_output=True, text=True, timeout=5)
    except Exception:
        logger.debug("global gitignore setup failed", exc_info=True)


def _share_credentials_symlink(cfg_dir: Path):
    """Point a user's .credentials.json at the shared admin token so one login
    authenticates everyone. A single file = a single refresh token, which avoids
    the OAuth rotation war that divergent copies would cause."""
    try:
        link = cfg_dir / ".credentials.json"
        if link.is_symlink():
            try:
                if os.readlink(link) == str(SHARED_CREDENTIALS):
                    return
            except OSError:
                pass
            link.unlink()
        elif link.exists():
            link.unlink()
        link.symlink_to(SHARED_CREDENTIALS)
    except Exception:
        logger.debug("Failed to symlink shared credentials into %s", cfg_dir, exc_info=True)


def _approve_anthropic_key(cfg_dir: Path, key: str):
    """Pre-approve a shared ANTHROPIC_API_KEY in the config dir's settings.json so
    Claude Code doesn't interactively prompt 'Detected a custom API key — use it?'
    (which defaults to No). Claude matches on the key's last 20 chars."""
    if not key:
        return
    suffix = key[-20:]
    sp = cfg_dir / "settings.json"
    try:
        s = json.loads(sp.read_text()) if sp.exists() else {}
        if not isinstance(s, dict):
            s = {}
    except Exception:
        s = {}
    car = s.get("customApiKeyResponses")
    if not isinstance(car, dict):
        car = {}
    approved = car.get("approved") if isinstance(car.get("approved"), list) else []
    if suffix not in approved:
        approved.append(suffix)
    car["approved"] = approved
    if not isinstance(car.get("rejected"), list):
        car["rejected"] = []
    s["customApiKeyResponses"] = car
    try:
        sp.parent.mkdir(parents=True, exist_ok=True)
        sp.write_text(json.dumps(s, indent=2))
    except Exception:
        logger.debug("Failed to write customApiKeyResponses into %s", sp, exc_info=True)


def _set_api_key_helper(cfg_dir: Path):
    """Point Claude Code at the shared API key via settings.json `apiKeyHelper`.
    Interactive claude does NOT honor a bare ANTHROPIC_API_KEY env var for
    inference (it falls back to /login), but apiKeyHelper authenticates reliably —
    and the key stays in a 0600 file rather than the terminal scrollback."""
    sp = cfg_dir / "settings.json"
    try:
        s = json.loads(sp.read_text()) if sp.exists() else {}
        if not isinstance(s, dict):
            s = {}
    except Exception:
        s = {}
    s["apiKeyHelper"] = "cat " + shlex.quote(str(ANTHROPIC_API_KEY_FILE))
    try:
        sp.parent.mkdir(parents=True, exist_ok=True)
        sp.write_text(json.dumps(s, indent=2))
    except Exception:
        logger.debug("Failed to set apiKeyHelper in %s", sp, exc_info=True)


def _remove_subscription_creds(cfg_dir: Path):
    """In API-key mode, drop any (dead) subscription .credentials.json so claude
    uses the API key instead of trying the expired OAuth token and hitting /login."""
    p = cfg_dir / ".credentials.json"
    try:
        if p.is_symlink() or p.exists():
            p.unlink()
    except Exception:
        logger.debug("Failed to remove subscription creds in %s", cfg_dir, exc_info=True)


def _apply_api_key_auth(cfg_dir: Path):
    """Configure a config dir to authenticate via the shared API key."""
    cfg_dir.mkdir(parents=True, exist_ok=True)
    _remove_subscription_creds(cfg_dir)
    _set_api_key_helper(cfg_dir)
    _approve_anthropic_key(cfg_dir, _stored_anthropic_key)


def _subscription_token_valid() -> bool:
    """True when the shared admin subscription token (~/.claude/.credentials.json)
    exists and isn't expired — i.e. the Max/Pro PLAN is usable for members."""
    try:
        o = json.loads(SHARED_CREDENTIALS.read_text()).get("claudeAiOauth", {})
        return bool(o) and int(o.get("expiresAt") or 0) > int(time.time() * 1000)
    except Exception:
        return False


def _remove_api_key_helper(cfg_dir: Path):
    """Strip apiKeyHelper + customApiKeyResponses so claude uses the (symlinked)
    subscription token instead of the metered API key."""
    sp = cfg_dir / "settings.json"
    try:
        s = json.loads(sp.read_text()) if sp.exists() else {}
        if not isinstance(s, dict):
            return
    except Exception:
        return
    if "apiKeyHelper" in s or "customApiKeyResponses" in s:
        s.pop("apiKeyHelper", None)
        s.pop("customApiKeyResponses", None)
        try:
            sp.write_text(json.dumps(s, indent=2))
        except Exception:
            logger.debug("Failed to strip apiKeyHelper from %s", sp, exc_info=True)


def _apply_subscription_auth(cfg_dir: Path):
    """Configure a config dir to authenticate via the shared subscription PLAN:
    symlink .credentials.json to the admin token and remove API-key settings."""
    cfg_dir.mkdir(parents=True, exist_ok=True)
    _remove_api_key_helper(cfg_dir)
    _share_credentials_symlink(cfg_dir)


def _disable_claude_ai_connectors(cfg_dir: Path):
    """Turn off the claude.ai ACCOUNT-level connectors (Drive/Gmail/Calendar that
    ride the shared plan account, `mcp__claude_ai_*`). On the shared plan those are
    the admin account's data — a leak into member sessions, and members can't
    re-auth them when they expire. Members use our per-user `google` MCP instead.
    Requires Claude Code >= 2.1.182. Custom mcpServers are unaffected."""
    sp = cfg_dir / "settings.json"
    try:
        s = json.loads(sp.read_text()) if sp.exists() else {}
        if not isinstance(s, dict):
            s = {}
    except Exception:
        s = {}
    if s.get("disableClaudeAiConnectors") is not True:
        s["disableClaudeAiConnectors"] = True
        try:
            sp.parent.mkdir(parents=True, exist_ok=True)
            sp.write_text(json.dumps(s, indent=2))
        except Exception:
            logger.debug("Failed to set disableClaudeAiConnectors in %s", sp, exc_info=True)


def _set_team_model_effort(cfg_dir: Path):
    """Pin the team model and reasoning effort in Codex config.toml."""
    sp = cfg_dir / "config.toml"
    try:
        existing = sp.read_text() if sp.exists() else ""
        merged = _merge_top_level_toml_keys(existing, {
            "model": TEAM_MODEL or _CODEX_DEFAULT_MODEL,
            "model_reasoning_effort": (
                _normalize_reasoning_effort(TEAM_EFFORT)
                or _CODEX_DEFAULT_REASONING_EFFORT
            ),
            "sandbox_mode": "workspace-write",
            "approval_policy": "never",
        })
        merged = _ensure_codex_project_trust(merged, os.getcwd())
        if merged != existing:
            _backup_before_dashboard_write(sp)
            sp.parent.mkdir(parents=True, exist_ok=True)
            sp.write_text(merged)
    except Exception:
        logger.debug("Failed to set team Codex model/effort in %s", sp, exc_info=True)


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


def _claude_config_json(cfg_dir: Path) -> Path:
    """Where Claude keeps its main config for a given config dir.

    The default ~/.claude uses the HOME-level ~/.claude.json, not a file inside
    the directory. Writing the wrong one leaves the real config untouched and
    the session still prompts.
    """
    try:
        if cfg_dir.resolve() == (Path.home() / ".claude").resolve():
            return Path.home() / ".claude.json"
    except OSError:
        pass
    return cfg_dir / ".claude.json"


def _seed_trust(cfg_dir: Path, cwd: str):
    """Pre-accept Claude Code's per-folder trust dialog for `cwd` in this config
    dir's .claude.json so it doesn't prompt (which would hang a detached session)."""
    cj = _claude_config_json(cfg_dir)
    try:
        d = json.loads(cj.read_text()) if cj.exists() else {}
        if not isinstance(d, dict):
            d = {}
    except Exception:
        d = {}
    projects = d.get("projects") if isinstance(d.get("projects"), dict) else {}
    proj = projects.get(cwd) if isinstance(projects.get(cwd), dict) else {}
    proj["hasTrustDialogAccepted"] = True
    projects[cwd] = proj
    d["projects"] = projects
    d.setdefault("hasCompletedOnboarding", True)
    try:
        cj.write_text(json.dumps(d, indent=2))
    except Exception:
        logger.debug("Failed to seed trust into %s", cj, exc_info=True)


# A standalone primer that drives a throwaway tmux session WITH an attached pty
# client to accept the one-time "Bypass Permissions" warning. A detached session
# (no client) can't confirm it and claude exits, so members would otherwise hang.
PRIME_SCRIPT_PATH = MESSAGES_DIR / "hooks" / "prime_claude.sh"
_PRIME_SCRIPT = r'''#!/usr/bin/env bash
# Accept the one-time --dangerously-skip-permissions warning for a config dir.
CFG="$1"
MARKER="$CFG/.claude_primed"
[ -f "$MARKER" ] && { echo "already primed"; exit 0; }
KEY="$(cat "$DASH_KEY_FILE" 2>/dev/null)"
S="prime_$$"
tmux kill-session -t "$S" 2>/dev/null
tmux new-session -d -s "$S" -x 200 -y 50 -c "$PWD" || exit 1
# Subscription mode (no key): rely on the config dir's symlinked plan creds.
if [ -n "$KEY" ]; then PRE="export ANTHROPIC_API_KEY=$KEY; "; else PRE="unset ANTHROPIC_API_KEY; "; fi
tmux send-keys -t "$S" "${PRE}export CLAUDE_CONFIG_DIR=$CFG; claude --dangerously-skip-permissions" Enter
# Attach a pty client in the background so claude sees an interactive terminal.
setsid bash -c "script -qfc 'tmux attach -t $S' /dev/null" >/dev/null 2>&1 &
ok=0
for i in $(seq 1 45); do
  pane="$(tmux capture-pane -t "$S" -p 2>/dev/null)"
  if echo "$pane" | grep -q "bypass permissions on"; then ok=1; break; fi
  if echo "$pane" | grep -q "Yes, I accept"; then
    tmux send-keys -t "$S" Down; sleep 1; tmux send-keys -t "$S" Enter; sleep 2
  fi
  sleep 1
done
tmux send-keys -t "$S" C-c 2>/dev/null
sleep 1
tmux kill-session -t "$S" 2>/dev/null
pkill -f "tmux attach -t $S" 2>/dev/null
if [ "$ok" = "1" ]; then date +%s > "$MARKER"; echo "primed"; exit 0; fi
echo "prime failed"; exit 1
'''


def _write_prime_script():
    PRIME_SCRIPT_PATH.parent.mkdir(parents=True, exist_ok=True)
    try:
        if (not PRIME_SCRIPT_PATH.exists()) or PRIME_SCRIPT_PATH.read_text() != _PRIME_SCRIPT:
            PRIME_SCRIPT_PATH.write_text(_PRIME_SCRIPT)
        PRIME_SCRIPT_PATH.chmod(0o755)
    except Exception:
        logger.debug("Failed to write prime script", exc_info=True)


def _prime_claude_config(cfg_dir: Path) -> bool:
    """One-time per config dir: accept the bypass-permissions warning so detached
    sessions launch cleanly. Idempotent via a marker file. Works in subscription
    mode (symlinked plan creds) or, as a legacy path, with a stored API key."""
    if not _subscription_token_valid() and not _stored_anthropic_key:
        return False
    marker = cfg_dir / ".claude_primed"
    if marker.exists():
        return True
    try:
        cfg_dir.mkdir(parents=True, exist_ok=True)
        _seed_trust(cfg_dir, os.getcwd())
        if _stored_anthropic_key:
            _approve_anthropic_key(cfg_dir, _stored_anthropic_key)
        _write_prime_script()
        env = dict(os.environ,
                   DASH_KEY_FILE=str(ANTHROPIC_API_KEY_FILE),
                   PATH=os.environ.get("PATH", "") + ":/usr/local/bin:/usr/bin")
        subprocess.run(["bash", str(PRIME_SCRIPT_PATH), str(cfg_dir)],
                       cwd=os.getcwd(), env=env, capture_output=True, text=True, timeout=90)
    except Exception:
        logger.debug("prime_claude_config failed for %s", cfg_dir, exc_info=True)
    return marker.exists()




def _write_sandbox_hook_script():
    SANDBOX_HOOK_PATH.parent.mkdir(parents=True, exist_ok=True)
    content = _SANDBOX_HOOK_SCRIPT.replace("__DASH_URL__", DASH_LOCAL_URL).replace("__BRAND__", BRAND_NAME)
    try:
        if (not SANDBOX_HOOK_PATH.exists()) or SANDBOX_HOOK_PATH.read_text() != content:
            SANDBOX_HOOK_PATH.write_text(content)
        SANDBOX_HOOK_PATH.chmod(0o755)
    except Exception:
        logger.debug("Failed to write sandbox hook", exc_info=True)


def _install_sandbox_hook(cfg_dir: Path, user: dict):
    """Apply Codex's workspace sandbox for a non-admin team member.

    Claude's PreToolUse hook format is not read by Codex. The dashboard instead
    launches these sessions without the dangerous bypass flag and pins
    workspace-write + never-ask behavior in config.toml.
    """
    _set_team_model_effort(cfg_dir)


# --- email (Resend) --------------------------------------------------------
def _send_email(subject: str, html_body: str, to: str | None = None) -> bool:
    to = to or ADMIN_APPROVAL_EMAIL
    if not RESEND_API_KEY:
        logger.warning("Email not sent (no RESEND_API_KEY): %s", subject)
        return False
    payload = json.dumps({
        "from": MAIL_FROM, "to": [to], "subject": subject,
        "html": html_body, "text": re.sub("<[^>]+>", "", html_body),
    }).encode()
    try:
        req = urllib.request.Request(
            "https://api.resend.com/emails", data=payload,
            headers={"Authorization": "Bearer " + RESEND_API_KEY,
                     "Content-Type": "application/json",
                     # Resend is behind Cloudflare, which 403s (error 1010) the
                     # default Python-urllib User-Agent. Send a normal one.
                     "User-Agent": f"Mozilla/5.0 (X11; Linux x86_64) {BRAND_NAME}/1.0"})
        with urllib.request.urlopen(req, timeout=15) as r:
            r.read()
        return True
    except Exception:
        logger.exception("Failed to send email via Resend")
        return False


@app.post("/api/sandbox/check")
async def api_sandbox_check(request: Request):
    """Called by the per-user PreToolUse guard hook (localhost only).

    The sandbox block itself is a security control and stays. The approval queue
    that used to sit behind it (a pending/approve/deny store plus an admin panel
    and notification email) was removed: it was never used — no approvals file
    was ever written — and it granted a 1-hour bypass of a boundary that should
    not be bypassable from a web UI.
    """
    if request.client and request.client.host not in ("127.0.0.1", "::1", "localhost"):
        return JSONResponse({"decision": "deny", "reason": "forbidden"}, status_code=403)
    try:
        body = await request.json()
    except Exception:
        body = {}
    logger.warning(
        "sandbox: blocked cross-server action user=%s tool=%s cwd=%s cmd=%s",
        (body.get("user_id") or "").strip(), body.get("tool") or "",
        body.get("cwd") or "", (body.get("command") or "")[:400],
    )
    return JSONResponse({"decision": "deny", "reason":
        f"{BRAND_NAME} sandbox: this action targets another server and is blocked. "
        "Keep working on things that stay on this server; do not try to bypass."})


# --- Google connections (Drive / Gmail / Calendar) -------------------------
GOOGLE_SCOPES = {
    "drive": ["https://www.googleapis.com/auth/drive.readonly"],
    "gmail": ["https://www.googleapis.com/auth/gmail.readonly"],
    "calendar": ["https://www.googleapis.com/auth/calendar.readonly"],
}
GOOGLE_LABELS = {"drive": "Google Drive", "gmail": "Gmail", "calendar": "Google Calendar"}


def _google_client():
    cid = os.environ.get("GOOGLE_OAUTH_CLIENT_ID", "")
    csec = os.environ.get("GOOGLE_OAUTH_CLIENT_SECRET", "")
    if (not cid or not csec) and GOOGLE_OAUTH_CLIENT_FILE.exists():
        try:
            j = json.loads(GOOGLE_OAUTH_CLIENT_FILE.read_text())
            j = j.get("web") or j.get("installed") or j
            cid = cid or j.get("client_id", "")
            csec = csec or j.get("client_secret", "")
        except Exception:
            logger.debug("Failed to read Google OAuth client file", exc_info=True)
    return cid, csec


def _conn_path(user_id: str, service: str) -> Path:
    return CONNECTIONS_DIR / str(user_id) / (service + ".json")


def _sign_state(payload: str) -> str:
    return core_tokens.sign_state(AUTH_SECRET, payload)


def _verify_state(state: str) -> str | None:
    return core_tokens.verify_state(AUTH_SECRET, state)


def _callback_uri(request: Request) -> str:
    base = PUBLIC_BASE_URL.rstrip("/") or str(request.base_url).rstrip("/")
    return base + ROOT_PATH + "/api/connections/google/callback"


def _ensure_google_mcp(cfg_dir: Path, user: dict):
    """Register Grabo's Google MCP server in this user's Codex config.toml."""
    cmd = os.environ.get("GOOGLE_MCP_COMMAND", "")
    if not cmd or not user or not user.get("id"):
        return
    cfg = cfg_dir / "config.toml"
    begin = "# BEGIN GRABO GOOGLE MCP (managed)"
    end = "# END GRABO GOOGLE MCP"
    try:
        parts = shlex.split(cmd)
        if not parts:
            return
        existing = cfg.read_text() if cfg.exists() else ""
        if begin in existing and end in existing:
            existing = re.sub(
                rf"\n?{re.escape(begin)}.*?{re.escape(end)}\n?",
                "\n",
                existing,
                flags=re.DOTALL,
            ).rstrip() + "\n"
        elif re.search(r"^\s*\[mcp_servers\.google\]\s*$", existing, re.MULTILINE):
            logger.warning("Leaving user-managed mcp_servers.google unchanged in %s", cfg)
            return
        args = ", ".join(f'"{_toml_escape(value)}"' for value in parts[1:])
        credentials_dir = _toml_escape(str(CONNECTIONS_DIR / user["id"]))
        client_file = _toml_escape(str(GOOGLE_OAUTH_CLIENT_FILE))
        block = (
            f"{begin}\n"
            "[mcp_servers.google]\n"
            f'command = "{_toml_escape(parts[0])}"\n'
            f"args = [{args}]\n"
            "\n[mcp_servers.google.env]\n"
            f'GOOGLE_MCP_CREDENTIALS_DIR = "{credentials_dir}"\n'
            f'GOOGLE_OAUTH_CLIENT_FILE = "{client_file}"\n'
            f"{end}\n"
        )
        updated = existing.rstrip() + "\n\n" + block if existing.strip() else block
        _backup_before_dashboard_write(cfg)
        cfg.parent.mkdir(parents=True, exist_ok=True)
        cfg.write_text(updated)
    except Exception:
        logger.debug("Failed to write Google MCP entry into %s", cfg, exc_info=True)












def _write_google_mcp(user: dict, service: str):
    """Called after a successful connect; ensures the google MCP server is registered."""
    _ensure_google_mcp(_user_codex_config_dir(user), user)


@app.get("/api/connections")
async def api_connections(request: Request):
    user = _current_user(request)
    if not user:
        return JSONResponse({"error": "Not logged in"}, status_code=401)
    cid, _ = _google_client()
    out = {
        "configured": bool(cid),
        "mcp_ready": bool(os.environ.get("GOOGLE_MCP_COMMAND", "")),
        "services": [],
    }
    for svc in ("drive", "gmail", "calendar"):
        out["services"].append({
            "id": svc, "label": GOOGLE_LABELS[svc],
            "connected": _conn_path(user["id"], svc).exists(),
        })
    return JSONResponse(out)


@app.get("/api/connections/{service}/start")
async def api_connection_start(request: Request, service: str):
    user = _current_user(request)
    if not user:
        return JSONResponse({"error": "Not logged in"}, status_code=401)
    if service not in GOOGLE_SCOPES:
        return JSONResponse({"error": "Unknown service"}, status_code=400)
    cid, csec = _google_client()
    if not cid or not csec:
        return JSONResponse({"error": "Google connections are not configured yet. "
                             "Ask the admin to add the OAuth client."}, status_code=503)
    state = _sign_state(user["id"] + ":" + service + ":" + str(int(time.time())))
    params = urllib.parse.urlencode({
        "client_id": cid,
        "redirect_uri": _callback_uri(request),
        "response_type": "code",
        "scope": " ".join(GOOGLE_SCOPES[service]),
        "access_type": "offline",
        "prompt": "consent",
        "include_granted_scopes": "true",
        "state": state,
    })
    return RedirectResponse("https://accounts.google.com/o/oauth2/v2/auth?" + params)


@app.get("/api/connections/google/callback")
async def api_connection_callback(request: Request):
    if request.query_params.get("error"):
        return RedirectResponse(ROOT_PATH + "/?connect=denied")
    code = request.query_params.get("code")
    payload = _verify_state(request.query_params.get("state") or "")
    if not code or not payload:
        return HTMLResponse("Invalid OAuth state", status_code=400)
    try:
        user_id, service, ts = payload.split(":")
    except ValueError:
        return HTMLResponse("Invalid OAuth state", status_code=400)
    if service not in GOOGLE_SCOPES or time.time() - int(ts) > 600:
        return HTMLResponse("OAuth flow expired — please retry.", status_code=400)
    cid, csec = _google_client()
    data = urllib.parse.urlencode({
        "code": code, "client_id": cid, "client_secret": csec,
        "redirect_uri": _callback_uri(request), "grant_type": "authorization_code",
    }).encode()
    try:
        req = urllib.request.Request("https://oauth2.googleapis.com/token", data=data)
        with urllib.request.urlopen(req, timeout=20) as r:
            tok = json.load(r)
    except Exception:
        logger.exception("Google token exchange failed")
        return RedirectResponse(ROOT_PATH + "/?connect=error")
    p = _conn_path(user_id, service)
    p.parent.mkdir(parents=True, exist_ok=True)
    tok["_obtained_at"] = time.time()
    tok["_service"] = service
    try:
        p.write_text(json.dumps(tok, indent=2))
        p.chmod(0o600)
    except Exception:
        logger.exception("Failed to store connection token")
        return RedirectResponse(ROOT_PATH + "/?connect=error")
    u = _find_user_by_id(user_id)
    if u:
        _write_google_mcp(u, service)
    return RedirectResponse(ROOT_PATH + "/?connect=ok&svc=" + service)


@app.delete("/api/connections/{service}")
async def api_connection_delete(request: Request, service: str):
    user = _current_user(request)
    if not user:
        return JSONResponse({"error": "Not logged in"}, status_code=401)
    p = _conn_path(user["id"], service)
    if p.exists():
        try:
            p.unlink()
        except Exception:
            logger.exception("Failed to remove connection")
    return JSONResponse({"ok": True})


# --- Global system context (admin) -----------------------------------------
@app.get("/api/global-context")
async def api_get_global_context(request: Request):
    user = _current_user(request)
    if not _is_admin(user):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    return JSONResponse({"content": _read_global_context(), "path": str(GLOBAL_CONTEXT_FILE)})


@app.post("/api/global-context")
async def api_save_global_context(request: Request):
    user = _current_user(request)
    if not _is_admin(user):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    try:
        body = await request.json()
    except Exception:
        body = {}
    GLOBAL_CONTEXT_FILE.parent.mkdir(parents=True, exist_ok=True)
    content = body.get("content", "") or ""
    existing = GLOBAL_CONTEXT_FILE.read_text() if GLOBAL_CONTEXT_FILE.exists() else None
    if existing != content:
        _backup_before_dashboard_write(GLOBAL_CONTEXT_FILE)
        GLOBAL_CONTEXT_FILE.write_text(content)
    # Re-sync hidden policy into each member's native Codex configuration.
    synced = 0
    for u in _load_users():
        if u.get("role") == "admin":
            continue
        try:
            d = _user_codex_config_dir(u)
            d.mkdir(parents=True, exist_ok=True)
            agents = d / "AGENTS.md"
            _remove_legacy_global_context_from_agents(agents)
            _sync_group_context_into(agents, "")
            _sync_global_policy_into_config(d / "config.toml", u)
            synced += 1
        except Exception:
            logger.debug("Failed to re-sync global context for %s", u.get("id"), exc_info=True)
    return JSONResponse({"ok": True, "synced": synced})


# ===========================================================================
# Work groups · admin context-file editor · admin user history · projects
# ===========================================================================
GROUPS_FILE = MESSAGES_DIR / "groups.json"
GROUPS_DIR = MESSAGES_DIR / "groups"
_GROUP_CTX_BEGIN = "<!-- TEAM PERMISSION GROUP (managed; edits inside are overwritten) -->"
_GROUP_CTX_END = "<!-- END TEAM GROUP CONTEXT -->"


# Top-level path segments reserved for the app (never treated as usernames).
_RESERVED_TOP = {"", "api", "login", "logout", "qa-output", "static", "favicon.ico",
                 "robots.txt", "sw.js", "health", "_next", "assets", "tmux", "ws"}


def _load_groups() -> dict:
    """Return the fixed permission catalog; permissions are not user-editable."""
    return {
        "groups": [
            {"id": group_id, **dict(group)}
            for group_id, group in PERMISSION_GROUPS.items()
        ]
    }


def _group_dir(group_id: str) -> Path:
    return GROUPS_DIR / group_id


def _ensure_group_dir(group_id: str):
    group = PERMISSION_GROUPS.get(group_id)
    if not group:
        raise ValueError(f"Unknown permission group: {group_id}")
    d = _group_dir(group_id)
    d.mkdir(parents=True, exist_ok=True)
    policy_path = d / "AGENTS.md"
    content = group["instructions"].strip() + "\n"
    existing = policy_path.read_text() if policy_path.exists() else None
    if existing != content:
        if policy_path.exists():
            _backup_before_dashboard_write(policy_path)
        policy_path.write_text(content)
    return d


def _read_group_context(group_id: str) -> str:
    p = _group_dir(group_id) / "AGENTS.md"
    try:
        return p.read_text() if p.exists() else ""
    except Exception:
        return ""


def _sync_group_context_into(codex_md: Path, group_id: str):
    """Maintain a managed GROUP CONTEXT block in a member's AGENTS.md (below the
    global block). Removes it when the user has no group."""
    original = codex_md.read_text() if codex_md.exists() else ""
    existing = original
    if _GROUP_CTX_BEGIN in existing and _GROUP_CTX_END in existing:
        pre = existing.split(_GROUP_CTX_BEGIN, 1)[0]
        post = existing.split(_GROUP_CTX_END, 1)[1]
        existing = pre.rstrip("\n") + "\n" + post.lstrip("\n")
    if not group_id:
        if existing != original:
            _backup_before_dashboard_write(codex_md)
            codex_md.write_text(existing)
        return
    block = _GROUP_CTX_BEGIN + "\n" + _read_group_context(group_id).rstrip() + "\n" + _GROUP_CTX_END + "\n"
    if block in original:
        return
    if _GLOBAL_CTX_END in existing:
        head, tail = existing.split(_GLOBAL_CTX_END, 1)
        existing = head + _GLOBAL_CTX_END + "\n\n" + block + tail.lstrip("\n")
    else:
        existing = block + "\n" + existing.lstrip("\n")
    if existing != original:
        _backup_before_dashboard_write(codex_md)
        codex_md.write_text(existing)


def _sync_group_skills_into(cfg_dir: Path, group_id: str):
    """Remove retired group-skill links; permission groups carry policy only."""
    dst = cfg_dir / "skills"
    try:
        if not dst.exists():
            return
        for link in dst.glob("group-*"):
            if link.is_symlink():
                link.unlink()
    except Exception:
        logger.debug("Failed to clean retired group skill links", exc_info=True)


def _advisor_admin_token() -> str:
    try:
        return ADVISOR_ADMIN_TOKEN_FILE.read_text().strip()
    except OSError:
        return ""


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


# --- admin context-file editor (per user / per group) ---------------------
_CONTEXT_TOP_FILES = ["AGENTS.md", "MEMORY.md", "config.toml", ".mcp.json"]
_CONTEXT_DIRS = ["skills", "agents", "commands"]


def _context_root(scope: str, ident: str):
    if scope == "user":
        u = _find_user_by_id(ident)
        if not u:
            return None
        d = _user_codex_config_dir(u)
        if not _is_admin(u):
            _ensure_user_codex_config_dir(u)
        return d
    if scope == "group":
        # Permission groups are a fixed policy catalog.  Exposing their backing
        # AGENTS.md files through the generic context editor would quietly turn
        # them back into user-editable groups and could weaken access rules.
        return None
    return None


def _list_context_files(root: Path):
    out = []
    for name in _CONTEXT_TOP_FILES:
        p = root / name
        if p.is_file():
            out.append({"path": name, "size": p.stat().st_size})
    for d in _CONTEXT_DIRS:
        base = root / d
        if base.exists():
            for p in sorted(base.rglob("*")):
                if p.is_file() and not p.name.startswith("."):
                    out.append({"path": str(p.relative_to(root)), "size": p.stat().st_size})
    return out


def _safe_ctx_path(root: Path, rel: str):
    rel = (rel or "").lstrip("/").replace("\\", "/")
    if not rel or ".." in rel.split("/"):
        return None
    target = (root / rel).resolve()
    try:
        target.relative_to(root.resolve())
    except ValueError:
        return None
    return target


class CtxFileBody(BaseModel):
    path: str
    content: str = ""


@app.get("/api/admin/context/{scope}/{ident}")
async def api_admin_context_list(request: Request, scope: str, ident: str):
    if not _is_admin(_current_user(request)):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    root = _context_root(scope, ident)
    if root is None:
        return JSONResponse({"error": "Not found"}, status_code=404)
    root.mkdir(parents=True, exist_ok=True)
    return JSONResponse({"root": str(root), "files": _list_context_files(root)})


@app.get("/api/admin/context/{scope}/{ident}/file")
async def api_admin_context_read(request: Request, scope: str, ident: str, path: str = ""):
    if not _is_admin(_current_user(request)):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    root = _context_root(scope, ident)
    if root is None:
        return JSONResponse({"error": "Not found"}, status_code=404)
    target = _safe_ctx_path(root, path)
    if target is None:
        return JSONResponse({"error": "Invalid path"}, status_code=400)
    if not target.exists():
        return JSONResponse({"path": path, "content": "", "exists": False})
    try:
        return JSONResponse({"path": path, "content": target.read_text(), "exists": True})
    except Exception:
        return JSONResponse({"error": "Unreadable (binary file?)"}, status_code=400)


@app.post("/api/admin/context/{scope}/{ident}/file")
async def api_admin_context_write(request: Request, scope: str, ident: str, body: CtxFileBody):
    if not _is_admin(_current_user(request)):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    if scope == "group":
        return JSONResponse(
            {"error": "Permission group policies are managed and cannot be edited here"},
            status_code=403,
        )
    root = _context_root(scope, ident)
    if root is None:
        return JSONResponse({"error": "Not found"}, status_code=404)
    target = _safe_ctx_path(root, body.path)
    if target is None:
        return JSONResponse({"error": "Invalid path"}, status_code=400)
    if body.path.endswith(".json"):
        try:
            json.loads(body.content or "{}")
        except json.JSONDecodeError as e:
            return JSONResponse({"error": "Invalid JSON: " + e.msg}, status_code=400)
    if body.path.endswith(".toml") and body.content.strip():
        try:
            tomllib.loads(body.content)
        except tomllib.TOMLDecodeError as e:
            return JSONResponse({"error": f"Invalid TOML: {e}"}, status_code=400)
    try:
        target.parent.mkdir(parents=True, exist_ok=True)
        content = body.content or ""
        existing = target.read_text() if target.exists() else None
        if existing != content:
            _backup_before_dashboard_write(target)
            target.write_text(content)
    except Exception:
        return JSONResponse({"error": "Write failed"}, status_code=500)
    # Group AGENTS.md edit → re-sync that group's members immediately.
    if scope == "group" and target.name == "AGENTS.md":
        for u in _load_users():
            if u.get("group") == ident and u.get("role") != "admin":
                try:
                    _ensure_user_codex_config_dir(u)
                except Exception:
                    pass
    elif scope == "user":
        target_user = _find_user_by_id(ident)
        if target_user and not _is_admin(target_user):
            try:
                _ensure_user_codex_config_dir(target_user)
            except Exception:
                logger.debug("Failed to re-apply managed member context", exc_info=True)
    return JSONResponse({"ok": True})


@app.delete("/api/admin/context/{scope}/{ident}/file")
async def api_admin_context_delete(request: Request, scope: str, ident: str, path: str = ""):
    if not _is_admin(_current_user(request)):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    if scope == "group":
        return JSONResponse(
            {"error": "Permission group policies are managed and cannot be deleted"},
            status_code=403,
        )
    root = _context_root(scope, ident)
    if root is None:
        return JSONResponse({"error": "Not found"}, status_code=404)
    target = _safe_ctx_path(root, path)
    if target is None or not target.exists():
        return JSONResponse({"error": "Invalid path"}, status_code=400)
    try:
        if target.is_dir():
            backup = target.with_name(f"{target.name}.bak-dashboard-{int(time.time() * 1000)}")
            shutil.copytree(str(target), str(backup), symlinks=True)
            shutil.rmtree(target)
        else:
            _backup_before_dashboard_write(target)
            target.unlink()
    except Exception:
        return JSONResponse({"error": "Delete failed"}, status_code=500)
    if scope == "user":
        target_user = _find_user_by_id(ident)
        if target_user and not _is_admin(target_user):
            try:
                _ensure_user_codex_config_dir(target_user)
            except Exception:
                logger.debug("Failed to restore managed member files", exc_info=True)
    return JSONResponse({"ok": True})


@app.get("/api/admin/groups")
async def api_admin_groups(request: Request):
    if not _is_admin(_current_user(request)):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    users = _load_users()
    out = []
    for g in _load_groups().get("groups", []):
        out.append({**g, "member_count": sum(1 for u in users if u.get("group") == g.get("id"))})
    return JSONResponse({"groups": out})


# --- admin: view any user's full history ----------------------------------
def _history_list_for(target: dict):
    messages_by_session = _load_messages(target)
    notes_by_session = _load_all_notes(target)
    owners = _load_session_owners()
    live = {s["name"] for s in get_tmux_sessions() if owners.get(s["name"], "admin") == target["id"]}
    out = []
    for name in set(messages_by_session) | set(notes_by_session) | live:
        msgs = messages_by_session.get(name) or []
        last_ts, uc = 0, 0
        for m in msgs:
            if isinstance(m, dict):
                last_ts = max(last_ts, m.get("ts") or 0)
                uc += 1 if m.get("role") == "user" else 0
        out.append({"session_name": name, "key_info": notes_by_session.get(name, ""),
                    "user_message_count": uc, "total_messages": len(msgs),
                    "last_message_at": last_ts, "is_live": name in live})
    out.sort(key=lambda e: e["last_message_at"], reverse=True)
    return out


@app.get("/api/admin/users/{user_id}/history")
async def api_admin_user_history(request: Request, user_id: str):
    if not _is_admin(_current_user(request)):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    target = _find_user_by_id(user_id)
    if not target:
        return JSONResponse({"error": "User not found"}, status_code=404)
    return JSONResponse({"sessions": _history_list_for(target)})


@app.get("/api/admin/users/{user_id}/history/{session_name}")
async def api_admin_user_history_detail(request: Request, user_id: str, session_name: str):
    if not _is_admin(_current_user(request)):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    target = _find_user_by_id(user_id)
    if not target:
        return JSONResponse({"error": "User not found"}, status_code=404)
    return JSONResponse({
        "session_name": session_name,
        "key_info": _load_all_notes(target).get(session_name, ""),
        "messages": _load_messages(target).get(session_name) or [],
    })


def _admin_user_file_record(root: Path, path: Path) -> dict | None:
    """Describe one private text file without allowing a symlink escape."""
    try:
        resolved_root = root.resolve()
        resolved = path.resolve()
        resolved.relative_to(resolved_root)
        if not path.is_file() or path.stat().st_size > 5 * 1024 * 1024:
            return None
        raw = path.read_text(errors="replace")
        return {
            "path": str(path.relative_to(root)),
            "size": path.stat().st_size,
            "modified": path.stat().st_mtime,
            "preview": raw[:1200],
        }
    except (OSError, ValueError):
        return None


def _admin_user_data_inventory(target: dict) -> tuple[list[dict], list[dict]]:
    """Return context and memory inventories from this account's CODEX_HOME."""
    root = _user_codex_config_dir(target)
    if not root.exists():
        return [], []
    context_paths: set[Path] = set()
    for name in _CONTEXT_TOP_FILES:
        path = root / name
        if path.is_file():
            context_paths.add(path)
    for dirname in ("skills", "agents", "commands", "plugins"):
        base = root / dirname
        if not base.exists():
            continue
        for path in base.rglob("*"):
            if path.is_file() and not path.name.startswith("."):
                context_paths.add(path)

    memory_paths: set[Path] = set()
    root_memory = root / "MEMORY.md"
    if root_memory.is_file():
        memory_paths.add(root_memory)
    for dirname in ("memories", "memory"):
        base = root / dirname
        if base.exists():
            memory_paths.update(path for path in base.rglob("*") if path.is_file())
    projects = root / "projects"
    if projects.exists():
        for path in projects.rglob("*"):
            if path.is_file() and "memory" in path.relative_to(projects).parts:
                memory_paths.add(path)

    context = [
        record
        for path in sorted(context_paths)[:1000]
        if (record := _admin_user_file_record(root, path)) is not None
    ]
    memories = [
        record
        for path in sorted(memory_paths)[:2000]
        if (record := _admin_user_file_record(root, path)) is not None
    ]
    return context, memories


@app.get("/api/admin/users/{user_id}/overview")
async def api_admin_user_overview(request: Request, user_id: str):
    """One navigable admin view of a user's prompts, history, and private data."""
    if not _is_admin(_current_user(request)):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    target = _find_user_by_id(user_id)
    if not target:
        return JSONResponse({"error": "User not found"}, status_code=404)
    messages_by_session = _load_messages(target)
    prompts = [
        {
            "id": str(entry.get("id") or ""),
            "session_name": str(entry.get("session_name") or ""),
            "prompt": str(entry.get("prompt") or ""),
            "ts": float(entry.get("ts") or 0),
            "source": str(entry.get("source") or ""),
            "impersonated_by": str(entry.get("impersonated_by") or ""),
        }
        for entry in _read_prompt_audit(user_id=user_id, limit=5000)
    ]
    if not prompts:
        for session_name, messages in messages_by_session.items():
            if not isinstance(messages, list):
                continue
            for message in messages:
                if not isinstance(message, dict) or message.get("role") != "user":
                    continue
                prompts.append({
                    "session_name": session_name,
                    "prompt": str(message.get("text") or ""),
                    "ts": float(message.get("ts") or 0),
                    "source": "messages",
                    "impersonated_by": "",
                })
        prompts.sort(key=lambda row: row["ts"], reverse=True)
    context, memories = await asyncio.to_thread(_admin_user_data_inventory, target)
    public = _public_user(target)
    public["last_activity"] = _last_human_activity(target)
    public["session_count"] = _user_session_count(target["id"])
    group = PERMISSION_GROUPS.get(str(target.get("group") or ""), {})
    return JSONResponse({
        "user": public,
        "group_policy": {
            "name": group.get("name", "Unassigned"),
            "summary": group.get("summary", "Baseline member restrictions apply."),
            "instructions": group.get("instructions", ""),
        },
        "prompts": prompts,
        "history": _history_list_for(target),
        "context": context,
        "memories": memories,
    })


@app.get("/api/admin/users/{user_id}/data-file")
async def api_admin_user_data_file(
    request: Request,
    user_id: str,
    kind: str,
    path: str,
):
    """Read one file already admitted to the user's context/memory inventory."""
    if not _is_admin(_current_user(request)):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    target_user = _find_user_by_id(user_id)
    if not target_user:
        return JSONResponse({"error": "User not found"}, status_code=404)
    if kind not in {"context", "memory"}:
        return JSONResponse({"error": "Invalid data kind"}, status_code=400)
    context, memories = await asyncio.to_thread(_admin_user_data_inventory, target_user)
    inventory = context if kind == "context" else memories
    if path not in {str(item.get("path") or "") for item in inventory}:
        return JSONResponse({"error": "File not found in user data"}, status_code=404)
    root = _user_codex_config_dir(target_user).resolve()
    target = (root / path).resolve()
    try:
        target.relative_to(root)
        if not target.is_file() or target.stat().st_size > 5 * 1024 * 1024:
            raise OSError("File is unavailable")
        content = await asyncio.to_thread(target.read_text, errors="replace")
        stat = target.stat()
    except (OSError, ValueError):
        return JSONResponse({"error": "File is unavailable"}, status_code=404)
    return JSONResponse({
        "path": path,
        "kind": kind,
        "content": content,
        "size": stat.st_size,
        "modified": stat.st_mtime,
    })


# --- public projects: serving + helpers -----------------------------------
def _safe_seg(s: str) -> bool:
    return bool(s) and re.match(r"^[A-Za-z0-9.@_-]{1,128}$", s or "") is not None and s not in (".", "..")


def _user_projects_dir(username: str) -> Path:
    return PROJECTS_ROOT / username


def _list_projects(username: str):
    d = _user_projects_dir(username)
    if not d.exists():
        return []
    return sorted(p.name for p in d.iterdir() if p.is_dir() and not p.name.startswith("."))


def _project_dir(username: str, project: str):
    if not _safe_seg(username) or not _safe_seg(project):
        return None
    return _user_projects_dir(username) / project





@app.get("/qa-output/{filepath:path}")
async def serve_qa_output(filepath: str):
    target = (QA_OUTPUT_DIR / filepath).resolve()
    if not str(target).startswith(str(QA_OUTPUT_DIR.resolve())):
        return JSONResponse({"error": "Forbidden"}, status_code=403)
    if not target.exists():
        return JSONResponse({"error": "Not found"}, status_code=404)
    return FileResponse(str(target))


# Serve absolute-path files referenced in terminal output. The frontend
# linkifier turns paths like /home/.../foo.md into <BASE>/file?path=/home/.../foo.md
# links. Auth-gated by the global middleware; we still reject obviously
# sensitive paths and require the resolved real path to match what was asked
# (so symlinks can't escape into something unexpected).
_FILE_SERVE_DENYLIST = {
    "/etc/shadow", "/etc/gshadow", "/etc/sudoers",
    "/root/.ssh/id_rsa", "/root/.ssh/id_ed25519",
}
_FILE_SERVE_DENY_PREFIXES = (
    "/proc/", "/sys/", "/dev/",
)
_FILE_SERVE_DENY_NAMES = {
    ".git-credentials", ".credentials.json", "auth.json",
    "claude_api_keys.md", "credentials.json",
}


def _file_path_is_sensitive(path: Path) -> bool:
    """Reject credential-shaped paths even when a terminal prints a link."""
    for part in path.parts:
        lowered = part.lower()
        if lowered == ".env" or lowered.startswith(".env."):
            return True
        if lowered in _FILE_SERVE_DENY_NAMES:
            return True
        if lowered.endswith((".pem", ".key")) or lowered.startswith("id_rsa"):
            return True
    return False


def _path_within(path: Path, root: Path) -> bool:
    try:
        resolved_root = root.resolve()
        return path == resolved_root or resolved_root in path.parents
    except Exception:
        return False


def _member_can_serve_file(user: dict, session_name: str, target: Path) -> bool:
    """Limit member file links to their account and owned session workspace."""
    if not session_name or _session_owner_id(session_name) != user.get("id"):
        return False
    roots = [
        _user_data_dir(user),
        _user_codex_config_dir(user),
        PROJECTS_ROOT / str(user.get("username") or user.get("id") or "member"),
    ]
    cwd = get_session_cwd(session_name)
    if cwd:
        cwd_path = Path(cwd).resolve()
        # A pane at / or the shared OS home must not turn /file into a browser
        # for every tenant's data. Once the pane enters a project, that project
        # becomes an allowed root for its owner.
        if cwd_path not in (Path("/"), Path.home().resolve()):
            roots.append(cwd_path)
    return any(_path_within(target, root) for root in roots)

# Some paths the terminal linkifier turns into <BASE>/file?path=... links are
# not absolute filesystem paths but URL routes on sister apps (typically the
# grabo.cc dashboards). When the local lookup misses, we 302-redirect to the
# upstream host so the user reaches the actual resource. Comma-separated
# overrides via TMUX_DASHBOARD_URL_REDIRECT_MAP="/prefix=https://host,...".
_DEFAULT_URL_REDIRECT_MAP = {
    "/data-dashboard": "https://grabo.cc",
    "/extensiv":        "https://grabo.cc",
    "/shippo":          "https://grabo.cc",
    "/invoices":        "https://grabo.cc",
    "/sztx":            "https://grabo.cc",
    "/hztx":            "https://grabo.cc",
    "/hzbs":            "https://grabo.cc",
    "/outflows":        "https://grabo.cc",
    "/productmanagement": "https://grabo.cc",
    "/sznptinventory":  "https://grabo.cc",
    "/ups":             "https://grabo.cc",
    "/upsv3":           "https://grabo.cc",
    "/usabanks":        "https://grabo.cc",
    "/hsbchk":          "https://grabo.cc",
    "/gusto":           "https://grabo.cc",
    "/inventory":       "https://grabo.cc",
    "/po":              "https://grabo.cc",
    "/balance-sheet":   "https://grabo.cc",
    "/bom":             "https://grabo.cc",
    "/docvault":        "https://grabo.cc",
}


def _load_url_redirect_map() -> dict[str, str]:
    raw = os.environ.get("TMUX_DASHBOARD_URL_REDIRECT_MAP", "").strip()
    if not raw:
        return dict(_DEFAULT_URL_REDIRECT_MAP)
    merged = dict(_DEFAULT_URL_REDIRECT_MAP)
    for entry in raw.split(","):
        entry = entry.strip()
        if not entry or "=" not in entry:
            continue
        prefix, host = entry.split("=", 1)
        prefix = prefix.strip().rstrip("/")
        host = host.strip().rstrip("/")
        if prefix.startswith("/") and host.startswith("http"):
            merged[prefix] = host
    return merged


_URL_REDIRECT_MAP = _load_url_redirect_map()


def _upstream_url_for_path(path: str) -> str | None:
    """Return upstream URL if `path` is a known dashboard URL slug, else None."""
    if not path.startswith("/"):
        return None
    first = "/" + path.lstrip("/").split("/", 1)[0]
    host = _URL_REDIRECT_MAP.get(first)
    if not host:
        return None
    return host + path


def _file_error(request: Request, status: int, title: str, message: str, path: str):
    """Return JSON for API clients, friendly HTML for browsers."""
    accept = (request.headers.get("accept") or "").lower()
    wants_html = "text/html" in accept and "application/json" not in accept
    if not wants_html:
        return JSONResponse({"error": title.lower(), "message": message, "path": path}, status_code=status)
    safe_path = (path or "").replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    safe_msg = message.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    rp = request.scope.get("root_path", "") or "/"
    html = f"""<!doctype html>
<html lang="en"><head><meta charset="UTF-8">
<title>{status} · {title} · {BRAND_NAME} Dashboard</title>
<style>
  body{{margin:0;background:#0d1117;color:#c9d1d9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:24px;box-sizing:border-box}}
  .card{{background:#161b22;border:1px solid #21262d;border-radius:10px;padding:28px 32px;max-width:640px;width:100%;box-shadow:0 6px 30px rgba(0,0,0,.4)}}
  .status{{font-size:.8rem;letter-spacing:.08em;text-transform:uppercase;color:#8b949e;margin-bottom:6px}}
  h1{{font-size:1.4rem;margin:0 0 12px 0;color:#f0f6fc}}
  p{{margin:0 0 14px 0;color:#c9d1d9;line-height:1.55}}
  .path{{display:block;background:#0d1117;border:1px solid #30363d;border-radius:6px;padding:10px 12px;font-family:'SF Mono','Fira Code',Consolas,monospace;font-size:.85rem;color:#79c0ff;word-break:break-all;margin:4px 0 14px 0}}
  .meta{{color:#6e7681;font-size:.85rem}}
  a{{color:#58a6ff;text-decoration:none}}
  a:hover{{text-decoration:underline}}
</style></head>
<body><div class="card">
  <div class="status">Error {status} · {title}</div>
  <h1>{safe_msg}</h1>
  <p>The terminal link pointed to:</p>
  <code class="path">{safe_path or '(no path)'}</code>
  <p class="meta">If this is a file you expected to exist, double-check the spelling, or that the dashboard is running on the host where the file lives.</p>
  <p><a href="{rp}">← back to dashboard</a></p>
</div></body></html>"""
    return HTMLResponse(html, status_code=status)


def _safe_is_dir(p: Path) -> bool:
    try:
        return p.is_dir()
    except Exception:
        return False


def _human_size(n: int) -> str:
    try:
        size = float(n)
    except Exception:
        return ""
    for unit in ("B", "KB", "MB", "GB", "TB"):
        if size < 1024 or unit == "TB":
            return (f"{int(size)} {unit}" if unit == "B" else f"{size:.1f} {unit}")
        size /= 1024.0
    return f"{size:.1f} TB"


_DIR_LISTING_MAX = 2000  # cap entries so a huge dir can't produce a giant page


def _render_dir_listing(request: Request, dir_path: Path) -> HTMLResponse:
    """Render a clickable HTML listing for a directory referenced from terminal
    output. Every row links back through /file?path=... so browsing stays behind
    the dashboard's auth middleware — same login as the dashboard itself."""
    rp = request.scope.get("root_path", "") or ""
    real = str(dir_path)
    session_name = request.query_params.get("session", "")

    def _attr(s: str) -> str:
        return _html_escape(s).replace('"', "&quot;")

    def _link(p: Path) -> str:
        link = rp + "/file?path=" + urllib.parse.quote(str(p), safe="")
        if session_name:
            link += "&session=" + urllib.parse.quote(session_name, safe="")
        return link

    try:
        kids = list(dir_path.iterdir())
    except PermissionError:
        return _file_error(request, 403, "Forbidden", "Permission denied listing this directory.", real)
    except Exception:
        return _file_error(request, 500, "Error", "That directory could not be read.", real)
    kids.sort(key=lambda p: (not _safe_is_dir(p), p.name.lower()))
    total = len(kids)
    truncated = total > _DIR_LISTING_MAX
    kids = kids[:_DIR_LISTING_MAX]

    rows = []
    # Parent link (skip when already at the filesystem root).
    if dir_path != dir_path.parent:
        rows.append(
            '<tr><td class="ic">&#128193;</td>'
            f'<td><a class="row-link" href="{_attr(_link(dir_path.parent))}">../</a></td>'
            '<td class="sz"></td><td class="mt"></td></tr>'
        )
    for p in kids:
        is_dir = _safe_is_dir(p)
        try:
            st = p.stat()
        except Exception:
            st = None
        name = p.name + ("/" if is_dir else "")
        icon = "&#128193;" if is_dir else "&#128196;"
        size = "" if (is_dir or st is None) else _human_size(st.st_size)
        mtime = datetime.fromtimestamp(st.st_mtime).strftime("%Y-%m-%d %H:%M") if st else ""
        rows.append(
            f'<tr><td class="ic">{icon}</td>'
            f'<td><a class="row-link" href="{_attr(_link(p))}">{_html_escape(name)}</a></td>'
            f'<td class="sz">{_html_escape(size)}</td>'
            f'<td class="mt">{_html_escape(mtime)}</td></tr>'
        )
    body = "\n".join(rows) or '<tr><td colspan="4" class="empty">(empty directory)</td></tr>'
    note = (f'<div class="note">Showing first {_DIR_LISTING_MAX} of {total} entries.</div>'
            if truncated else "")
    count_lbl = f"{total} item" + ("" if total == 1 else "s")
    doc = f"""<!doctype html>
<html lang="en"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{_html_escape(dir_path.name or '/')} · index · {BRAND_NAME} Dashboard</title>
<style>
  body{{margin:0;background:#0d1117;color:#c9d1d9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;padding:24px;box-sizing:border-box}}
  .wrap{{max-width:960px;margin:0 auto;background:#161b22;border:1px solid #21262d;border-radius:10px;overflow:hidden;box-shadow:0 6px 30px rgba(0,0,0,.4)}}
  .hd{{padding:18px 22px;border-bottom:1px solid #21262d}}
  .crumb{{font-family:'SF Mono','Fira Code',Consolas,monospace;font-size:.9rem;color:#79c0ff;word-break:break-all}}
  .meta{{color:#8b949e;font-size:.8rem;margin-top:6px}}
  .meta a{{color:#58a6ff;text-decoration:none}} .meta a:hover{{text-decoration:underline}}
  table{{width:100%;border-collapse:collapse;font-size:.88rem}}
  th{{text-align:left;color:#8b949e;font-weight:500;font-size:.72rem;letter-spacing:.06em;text-transform:uppercase;padding:8px 22px;border-bottom:1px solid #21262d}}
  td{{padding:7px 22px;border-bottom:1px solid #1b2027;white-space:nowrap}}
  tr:last-child td{{border-bottom:none}}
  tr:hover td{{background:#1c2330}}
  td.ic{{width:20px;padding-right:0;opacity:.85}}
  .row-link{{color:#c9d1d9;text-decoration:none;word-break:break-all}}
  .row-link:hover{{color:#79c0ff;text-decoration:underline}}
  td.sz,td.mt,th.sz,th.mt{{color:#8b949e;text-align:right;font-variant-numeric:tabular-nums}}
  td.mt,th.mt{{font-size:.8rem}}
  .empty{{color:#6e7681;text-align:center;padding:24px}}
  .note{{padding:10px 22px;color:#d29922;font-size:.8rem;border-top:1px solid #21262d}}
</style></head>
<body><div class="wrap">
  <div class="hd">
    <div class="crumb">&#128193; {_html_escape(real)}</div>
    <div class="meta">{count_lbl} · directory listing · <a href="{rp or '/'}">← dashboard</a></div>
  </div>
  <table><thead><tr><th></th><th>Name</th><th class="sz">Size</th><th class="mt">Modified</th></tr></thead>
  <tbody>
{body}
  </tbody></table>
  {note}
</div></body></html>"""
    resp = HTMLResponse(doc)
    resp.headers["Cache-Control"] = "no-store"
    return resp


@app.get("/file")
async def serve_terminal_file(
    request: Request, path: str = "", download: int = 0, session: str = ""
):
    """Serve a file (or directory listing) referenced from terminal output.

    The terminal linkifier (frontend) discovers file paths — absolute
    (/home/nimrod_rotem/notes.md) and home-relative (~/PROBST_LAWSUIT_2026-07-10/)
    — and turns them into <BASE>/file?path=... links. Files render inline by
    default so .md / .py / images / PDFs show in the browser tab (pass
    ?download=1 to force a download); directories render a clickable listing.
    This route sits behind the dashboard's auth middleware, so every link is
    protected by the same login as the dashboard itself.
    """
    orig_path = path
    user = _current_user(request)
    if not path:
        return _file_error(request, 400, "Bad request", "A file path is required.", orig_path)
    if not _is_admin(user):
        if not user or not session or _session_owner_id(session) != user.get("id"):
            return _file_error(
                request, 403, "Forbidden",
                "Member file links require one of your own sessions.", orig_path,
            )
    # Expand ~ / ~user home-relative paths (terminal output prints these a lot,
    # e.g. "Deliverables in ~/PROBST_LAWSUIT_2026-07-10/").
    if path.startswith("~"):
        path = os.path.expanduser(path)
    if not path.startswith("/"):
        return _file_error(request, 400, "Bad request", "An absolute path (or a ~ home path) is required.", orig_path)
    if path in _FILE_SERVE_DENYLIST:
        return _file_error(request, 403, "Forbidden", "This file is on the dashboard's protected list.", orig_path)
    for pref in _FILE_SERVE_DENY_PREFIXES:
        if path.startswith(pref):
            return _file_error(request, 403, "Forbidden", "Pseudo-filesystem paths (/proc, /sys, /dev) are not served.", orig_path)
    try:
        target = Path(path).resolve()
    except Exception:
        return _file_error(request, 400, "Bad request", "That path could not be resolved.", orig_path)
    # Re-check denylist against the resolved real path (defeats symlink tricks).
    real = str(target)
    if _file_path_is_sensitive(target):
        return _file_error(request, 403, "Forbidden", "Credential files are never served.", orig_path)
    if real in _FILE_SERVE_DENYLIST:
        return _file_error(request, 403, "Forbidden", "This file is on the dashboard's protected list.", orig_path)
    for pref in _FILE_SERVE_DENY_PREFIXES:
        if real.startswith(pref):
            return _file_error(request, 403, "Forbidden", "Pseudo-filesystem paths (/proc, /sys, /dev) are not served.", orig_path)
    if not target.exists():
        upstream = _upstream_url_for_path(orig_path)
        if upstream:
            return RedirectResponse(url=upstream, status_code=302)
        return _file_error(request, 404, "Not found", "No such file or directory on this host.", orig_path)
    if not _is_admin(user) and not _member_can_serve_file(user, session, target):
        return _file_error(
            request, 403, "Forbidden",
            "That path is outside this session's workspace.", orig_path,
        )
    # Directories → a clickable listing (each row stays behind this auth route).
    if target.is_dir():
        return _render_dir_listing(request, target)
    if not target.is_file():
        return _file_error(request, 400, "Unsupported", "That path is not a regular file or directory.", orig_path)
    mime, _ = mimetypes.guess_type(real)
    headers = {}
    # Render text/markdown/code inline as plain text so the browser shows the
    # content rather than offering a download dialog.
    ext = target.suffix.lower()
    text_like_exts = {
        ".md", ".markdown", ".txt", ".log", ".py", ".js", ".ts", ".tsx", ".jsx",
        ".json", ".yaml", ".yml", ".toml", ".ini", ".cfg", ".conf", ".sh",
        ".bash", ".zsh", ".env", ".csv", ".tsv", ".sql", ".html", ".htm",
        ".css", ".scss", ".xml", ".rb", ".go", ".rs", ".c", ".h", ".cpp",
        ".hpp", ".java", ".kt", ".swift", ".php", ".lua", ".r", ".dockerfile",
        ".gitignore", ".gitattributes",
    }
    if not mime and ext in text_like_exts:
        mime = "text/plain; charset=utf-8"
    elif mime and mime.startswith("text/"):
        mime = mime + "; charset=utf-8" if "charset" not in mime else mime
    if download:
        headers["Content-Disposition"] = f'attachment; filename="{target.name}"'
    else:
        headers["Content-Disposition"] = f'inline; filename="{target.name}"'
    return FileResponse(str(target), media_type=mime or "application/octet-stream", headers=headers)


# Three-tier cache per session
cache: dict[str, dict] = {}

# Persistent message storage
# NOTE: messages + notes are now scoped per-user. The legacy
# ~/.tmux-dashboard/messages.json and notes.json are the admin's files. Other
# users get ~/.tmux-dashboard/users/<id>/messages.json and notes.json.
MESSAGES_FILE = MESSAGES_DIR / "messages.json"
NOTES_FILE = MESSAGES_DIR / "notes.json"
PROMPT_AUDIT_FILE = MESSAGES_DIR / "prompt-history.jsonl"
PROMPT_AUDIT_BACKFILL_MARKER = MESSAGES_DIR / "prompt-history-backfill-v1.json"
_prompt_audit_lock = threading.Lock()


def _append_prompt_audit(
    user: dict,
    session_name: str,
    prompt: str,
    *,
    source: str = "dashboard",
    impersonator: dict | None = None,
    timestamp: float | None = None,
) -> dict:
    """Append one immutable human prompt record to the private audit log."""
    entry = {
        "id": secrets.token_hex(12),
        "ts": float(timestamp if timestamp is not None else time.time()),
        "user_id": user.get("id", ""),
        "username": user.get("username", ""),
        "role": user.get("role", "user"),
        "session_name": session_name,
        "prompt": prompt,
        "source": source,
    }
    if impersonator:
        entry["impersonated_by_id"] = impersonator.get("id", "")
        entry["impersonated_by"] = impersonator.get("username", "")
    encoded = (json.dumps(entry, ensure_ascii=False) + "\n").encode("utf-8")
    with _prompt_audit_lock:
        PROMPT_AUDIT_FILE.parent.mkdir(parents=True, exist_ok=True)
        fd = os.open(
            PROMPT_AUDIT_FILE,
            os.O_APPEND | os.O_CREAT | os.O_WRONLY,
            0o600,
        )
        try:
            os.fchmod(fd, 0o600)
            os.write(fd, encoded)
            os.fsync(fd)
        finally:
            os.close(fd)
    return entry


def _iter_prompt_audit_reverse():
    """Yield valid prompt records newest-first without loading the whole log."""
    if not PROMPT_AUDIT_FILE.exists():
        return
    block_size = 64 * 1024
    with _prompt_audit_lock, PROMPT_AUDIT_FILE.open("rb") as stream:
        stream.seek(0, os.SEEK_END)
        position = stream.tell()
        remainder = b""
        while position > 0:
            size = min(block_size, position)
            position -= size
            stream.seek(position)
            chunk = stream.read(size) + remainder
            lines = chunk.split(b"\n")
            remainder = lines[0]
            for raw in reversed(lines[1:]):
                if not raw.strip():
                    continue
                try:
                    entry = json.loads(raw)
                except (json.JSONDecodeError, UnicodeDecodeError):
                    continue
                if isinstance(entry, dict):
                    yield entry
        if remainder.strip():
            try:
                entry = json.loads(remainder)
            except (json.JSONDecodeError, UnicodeDecodeError):
                entry = None
            if isinstance(entry, dict):
                yield entry


def _read_prompt_audit(
    *,
    user_id: str = "",
    limit: int = 100,
    before: float = 0,
    cursor: str = "",
) -> list[dict]:
    prompts = []
    cursor_found = not cursor
    for entry in _iter_prompt_audit_reverse() or ():
        if user_id and entry.get("user_id") != user_id:
            continue
        if not cursor_found:
            if str(entry.get("id", "")) == cursor:
                cursor_found = True
            continue
        timestamp = float(entry.get("ts") or 0)
        if before and timestamp >= before:
            continue
        prompts.append(entry)
        if len(prompts) >= limit:
            break
    return prompts


_prompt_audit_summary_cache: dict = {"signature": None, "data": {}}


def _prompt_audit_summary() -> dict[str, dict]:
    """Count prompts by account, reusing results while the audit file is unchanged."""
    try:
        stat = PROMPT_AUDIT_FILE.stat()
        signature = (stat.st_mtime_ns, stat.st_size)
    except OSError:
        return {}
    if _prompt_audit_summary_cache["signature"] == signature:
        return {
            key: dict(value)
            for key, value in _prompt_audit_summary_cache["data"].items()
        }

    summary: dict[str, dict] = {}
    with _prompt_audit_lock:
        try:
            with PROMPT_AUDIT_FILE.open(errors="replace") as stream:
                for raw in stream:
                    try:
                        entry = json.loads(raw)
                    except json.JSONDecodeError:
                        continue
                    user_id = str(entry.get("user_id", ""))
                    if not user_id:
                        continue
                    row = summary.setdefault(
                        user_id,
                        {"count": 0, "last_ts": 0, "last_direct_ts": 0},
                    )
                    row["count"] += 1
                    row["last_ts"] = max(
                        float(row["last_ts"]),
                        float(entry.get("ts", 0) or 0),
                    )
                    if not entry.get("impersonated_by_id"):
                        row["last_direct_ts"] = max(
                            float(row["last_direct_ts"]),
                            float(entry.get("ts", 0) or 0),
                        )
        except OSError:
            return {}
    _prompt_audit_summary_cache["signature"] = signature
    _prompt_audit_summary_cache["data"] = summary
    return {key: dict(value) for key, value in summary.items()}


@app.get("/api/admin/prompts")
async def api_admin_prompts(
    request: Request,
    user_id: str = "",
    limit: int = 100,
    before: float = 0,
    cursor: str = "",
):
    """Return the private, append-only human prompt audit to administrators."""
    if not _is_admin(_current_user(request)):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    safe_limit = max(1, min(int(limit or 100), 500))
    prompts = await asyncio.to_thread(
        _read_prompt_audit,
        user_id=(user_id or "").strip(),
        limit=safe_limit,
        before=max(0, float(before or 0)),
        cursor=(cursor or "").strip()[:200],
    )
    next_before = float(prompts[-1].get("ts") or 0) if len(prompts) == safe_limit else 0
    next_cursor = str(prompts[-1].get("id", "")) if len(prompts) == safe_limit else ""
    return JSONResponse({
        "prompts": prompts,
        "next_before": next_before,
        "next_cursor": next_cursor,
    })




def _read_json_file(path: Path) -> dict:
    try:
        if path.exists():
            data = json.loads(path.read_text())
            if isinstance(data, dict):
                return data
    except Exception:
        logger.debug("Failed to read %s", path, exc_info=True)
    return {}



def _write_json_file(path: Path, data: dict):
    try:
        _atomic_write_json(path, data)
    except Exception:
        logger.debug("Failed to write %s", path, exc_info=True)


def _load_all_notes(user: dict | None = None) -> dict[str, str]:
    """Load all session notes for a given user from disk. Falls back to admin
    file if `user` is None (matches legacy single-user behaviour)."""
    return _read_json_file(_user_notes_file(user))


def _save_notes():
    """Persist all session notes to per-user files based on session ownership."""
    # Group cache entries by owning user
    by_user: dict[str, dict[str, str]] = {}
    for name, entry in cache.items():
        notes = entry.get("notes")
        if not notes:
            continue
        owner_id = _session_owner_id(name)
        by_user.setdefault(owner_id, {})[name] = notes

    # Write each user's file, merged with any sessions not currently in cache.
    # Also touch files for users whose cache is empty but who have existing notes
    # so we don't accidentally drop them: just don't write empty files.
    for uid, updates in by_user.items():
        owner = _find_user_by_id(uid) or _find_user_by_id("admin")
        path = _user_notes_file(owner)
        existing = _read_json_file(path)
        existing.update(updates)
        _write_json_file(path, existing)


def _load_session_notes(session_name: str) -> str:
    """Get persisted notes for a specific session, from its owner's file."""
    owner = _user_for_session(session_name)
    return _load_all_notes(owner).get(session_name, "")


def _load_messages(user: dict | None = None) -> dict[str, list]:
    """Load all session messages for a given user from disk."""
    return _read_json_file(_user_messages_file(user))


def _backfill_prompt_audit(users: list[dict] | None = None) -> int:
    """Migrate existing per-user chat prompts into the global audit once."""
    if PROMPT_AUDIT_BACKFILL_MARKER.exists():
        return 0
    users = users if users is not None else _load_users()
    existing_ids = {
        str(entry.get("id", ""))
        for entry in (_iter_prompt_audit_reverse() or ())
        if entry.get("id")
    }
    records = []
    for user in users:
        for session_name, messages in _load_messages(user).items():
            if not isinstance(messages, list):
                continue
            for message in messages:
                if not isinstance(message, dict) or message.get("role") != "user":
                    continue
                prompt = message.get("text")
                if not isinstance(prompt, str) or not prompt:
                    continue
                timestamp = float(message.get("ts", 0) or 0)
                identity = "\0".join((
                    str(user.get("id", "")),
                    str(session_name),
                    repr(timestamp),
                    prompt,
                ))
                entry_id = "legacy_" + hashlib.sha256(
                    identity.encode("utf-8")
                ).hexdigest()[:24]
                if entry_id in existing_ids:
                    continue
                existing_ids.add(entry_id)
                records.append({
                    "id": entry_id,
                    "ts": timestamp,
                    "user_id": user.get("id", ""),
                    "username": user.get("username", ""),
                    "role": user.get("role", "user"),
                    "session_name": str(session_name),
                    "prompt": prompt,
                    "source": "legacy_messages_backfill",
                })
    if records:
        encoded = "".join(
            json.dumps(record, ensure_ascii=False) + "\n"
            for record in records
        ).encode("utf-8")
        with _prompt_audit_lock:
            PROMPT_AUDIT_FILE.parent.mkdir(parents=True, exist_ok=True)
            fd = os.open(
                PROMPT_AUDIT_FILE,
                os.O_APPEND | os.O_CREAT | os.O_WRONLY,
                0o600,
            )
            try:
                os.fchmod(fd, 0o600)
                remaining = memoryview(encoded)
                while remaining:
                    written = os.write(fd, remaining)
                    remaining = remaining[written:]
                os.fsync(fd)
            finally:
                os.close(fd)
    _atomic_write_json(PROMPT_AUDIT_BACKFILL_MARKER, {
        "completed_at": time.time(),
        "migrated": len(records),
    })
    _prompt_audit_summary_cache["signature"] = None
    _prompt_audit_summary_cache["data"] = {}
    return len(records)


def _save_messages():
    """Persist all session messages to per-user files based on session ownership."""
    if _db_ready():
        # Mirror into Postgres so the team sees one transcript. The per-user
        # files are still written below, which keeps the fallback path warm and
        # means turning the database off does not lose history.
        for name, entry in cache.items():
            msgs = entry.get("messages")
            if msgs:
                db_store.replace_messages(name, msgs)
    by_user: dict[str, dict[str, list]] = {}
    for name, entry in cache.items():
        msgs = entry.get("messages")
        if not msgs:
            continue
        owner_id = _session_owner_id(name)
        by_user.setdefault(owner_id, {})[name] = msgs

    for uid, updates in by_user.items():
        owner = _find_user_by_id(uid) or _find_user_by_id("admin")
        path = _user_messages_file(owner)
        existing = _read_json_file(path)
        existing.update(updates)
        _write_json_file(path, existing)


def _load_session_messages(session_name: str) -> list:
    """Persisted messages for one session.

    Reads from the shared database when configured — chat is the state that
    most needs to be shared across a team and the one that grew without bound
    in a rewrite-the-whole-file store. Falls back to the owner's JSON file.
    """
    if _db_ready():
        rows = db_store.load_messages(session_name, limit=500)
        if rows:
            return rows
    owner = _user_for_session(session_name)
    return _load_messages(owner).get(session_name, [])


DESCRIPTION_TTL = 0    # never auto-expire
PROGRESS_TTL = 600     # 10 minutes
REALTIME_TTL = 15      # 15 seconds — text extraction is cheap (no LLM call usually)
NOTES_TTL = 600        # 10 minutes


# Sessions whose pane is running Codex belong in this dashboard. Bare shells are
# also shown so a crashed/exited Codex session can be restarted from the UI.
_CODEX_DASH_VISIBILITY_CACHE: dict[str, tuple] = {}
_CODEX_DASH_VISIBILITY_TTL = 5.0
_PROCESS_TREE_CACHE: tuple[float, dict[str, list[str]], dict[str, str]] | None = None
_PROCESS_TREE_TTL = 2.0


def _process_tree_snapshot() -> tuple[dict[str, list[str]], dict[str, str]]:
    """Return the process tree from one ``ps`` call, briefly cached.

    The dashboard used to run ``pgrep -P`` once per descendant for every tmux
    session. On a busy builder that meant hundreds of full /proc scans while
    handling a single request. Build the same tree once and walk it in memory.
    """
    global _PROCESS_TREE_CACHE
    now = time.monotonic()
    cached = _PROCESS_TREE_CACHE
    if cached and now - cached[0] < _PROCESS_TREE_TTL:
        return cached[1], cached[2]

    try:
        result = subprocess.run(
            ["ps", "-eo", "pid=,ppid=,comm="],
            capture_output=True,
            text=True,
            timeout=3,
        )
        if result.returncode != 0:
            raise RuntimeError("ps failed")
        children: dict[str, list[str]] = {}
        commands: dict[str, str] = {}
        for line in (result.stdout or "").splitlines():
            parts = line.split(None, 2)
            if len(parts) != 3:
                continue
            pid, parent_pid, command = parts
            commands[pid] = command.lower()
            children.setdefault(parent_pid, []).append(pid)
        _PROCESS_TREE_CACHE = (now, children, commands)
        return children, commands
    except Exception:
        # A stale snapshot is safer than hiding all live Codex sessions because
        # of one transient process-table failure.
        if cached:
            return cached[1], cached[2]
        return {}, {}


# Process names that mark a tmux session as belonging to this dashboard. Claude
# sessions were invisible while this matched only "codex", so a session started
# with the Claude agent vanished from the list the moment its shell was replaced.
_AGENT_PROCESS_NAMES = frozenset({"codex", "claude"})


def _session_is_codex(name: str) -> bool:
    """Return True if this tmux session belongs to the codex dashboard.

    A codex process means show it here. A bare shell is also shown because it is
    the state left behind after Codex exits or crashes. Other active foreground
    programs are hidden.
    """
    now = time.time()
    cached = _CODEX_DASH_VISIBILITY_CACHE.get(name)
    if cached and now - cached[1] < _CODEX_DASH_VISIBILITY_TTL:
        return cached[0]
    try:
        # Every pane in the session, not just the ACTIVE window's. The IDE adds
        # its own terminal windows (ssh:… / local:…), and once one of those was
        # focused this check looked at `ssh` instead of the agent and hid the
        # whole session — every route for it then 404'd.
        pp = subprocess.run(
            [
                "tmux", "list-panes", "-s", "-t", name, "-F",
                "#{pane_pid}\t#{pane_current_command}",
            ],
            capture_output=True, text=True, timeout=3,
        )
        if pp.returncode != 0:
            _CODEX_DASH_VISIBILITY_CACHE[name] = (False, now)
            return False
        rows = [r for r in (pp.stdout or "").splitlines() if r.strip()]
        if not rows:
            _CODEX_DASH_VISIBILITY_CACHE[name] = (False, now)
            return False
        pane_pids = []
        pane_commands = []
        for row in rows:
            pid, _, command = row.strip().partition("\t")
            if pid.isdigit():
                pane_pids.append(pid)
                pane_commands.append(command)
        if not pane_pids:
            _CODEX_DASH_VISIBILITY_CACHE[name] = (False, now)
            return False
        children, commands = _process_tree_snapshot()
        # Search from EVERY pane: the agent may be in a window other than the
        # one that happens to be active.
        to_check = list(pane_pids)
        seen: set[str] = set()
        has_codex = False
        while to_check and len(seen) < 10000:
            current = to_check.pop()
            if current in seen:
                continue
            seen.add(current)
            if commands.get(current) in _AGENT_PROCESS_NAMES:
                has_codex = True
                break
            to_check.extend(children.get(current, ()))
        shells = {"bash", "zsh", "sh", "fish", "dash", "-bash", "-zsh", "-sh"}
        decision = has_codex or any(c.lower() in shells for c in pane_commands)
    except Exception:
        decision = False
    _CODEX_DASH_VISIBILITY_CACHE[name] = (decision, now)
    return decision


def get_tmux_sessions() -> list[dict]:
    try:
        result = subprocess.run(
            ["tmux", "list-sessions", "-F",
             "#{session_name}:#{session_windows}:#{session_created}:#{session_attached}"],
            capture_output=True, text=True, timeout=5
        )
        if result.returncode != 0:
            result.stdout = ""
        sessions = []
        for line in result.stdout.strip().split("\n"):
            if not line:
                continue
            parts = line.split(":")
            name = parts[0]
            if name.startswith("__") and name.endswith("__"):
                continue  # Skip internal sessions (e.g. __auth_login_tmp__)
            if not _session_is_codex(name):
                continue  # Hide non-Codex tmux sessions from the codex dashboard
            sessions.append({
                "name": name,
                "windows": parts[1] if len(parts) > 1 else "?",
                "created": parts[2] if len(parts) > 2 else "",
                "attached": parts[3] == "1" if len(parts) > 3 else False,
            })
        live_names = {session["name"] for session in sessions}
        lifecycle_rows = _session_lifecycle.snapshot().get("sessions", {})
        for name, row in lifecycle_rows.items():
            if (
                name in live_names
                or not row.get("parked")
                or not re.fullmatch(r"[A-Za-z0-9_.-]{1,128}", str(name))
            ):
                continue
            sessions.append(
                {
                    "name": name,
                    "windows": "0",
                    "created": str(int(row.get("parked_at") or 0)),
                    "attached": False,
                    "virtual": bool(row.get("virtual")),
                }
            )
        return sessions
    except Exception:
        return []


def _find_session(session_name: str) -> tuple:
    """Look up a tmux session by name.

    Returns (sessions_list, session_dict) if found, or (sessions_list, None) if not.
    """
    # Reject control characters and tmux target syntax before invoking tmux.
    if not _is_valid_session_name(session_name):
        return [], None
    sessions = get_tmux_sessions()
    for s in sessions:
        if s["name"] == session_name:
            return sessions, s
    return sessions, None


def _filter_sessions_for_user(sessions: list, user: dict | None) -> list:
    """Restrict a session list to sessions owned by the signed-in account."""
    if not user:
        return []
    owners = _load_session_owners()
    uid = user["id"]
    return [s for s in sessions if owners.get(s["name"], "admin") == uid]


def _session_list_for_request(request: Request, sessions: list) -> tuple[list | None, str]:
    """Restrict every workspace list to the effective account's sessions."""
    user = _current_user(request)
    return _filter_sessions_for_user(sessions, user), "mine"


def _find_session_for_user(session_name: str, user: dict | None) -> tuple:
    """Same as _find_session but enforces user ownership. Returns
    (sessions, session_dict) on success or (sessions, None) if missing OR not
    owned by `user`."""
    sessions, sess = _find_session(session_name)
    if sess is None:
        return sessions, None
    if not _user_can_access_session(user, session_name):
        return sessions, None
    return sessions, sess


# Wire services/ssh.py now that its one injected dependency exists. It is passed
# rather than imported: _find_session_for_user reaches into tmux listing and the
# user access checks, so importing it there would point the service module back
# at the application it was extracted from.
ssh_service.configure(
    find_session_for_user=_find_session_for_user,
    # Resolved through this module's attribute so tests patching
    # `app._current_user` still steer the service's ownership checks.
    current_user=lambda request: globals()["_current_user"](request),
)


# Keep `monkeypatch.setattr(app, "SSH_...")` working after the extraction.
#
# Those names now live in services/ssh.py, and the functions that read them read
# THAT module's globals. Without this forwarding, patching the re-exported copy
# on app.py would rebind a name nothing consults -- the tests would still pass
# their assertions about app.py while the service kept using real paths. That is
# the same silent-bypass failure the user-store extraction hit, so it is handled
# explicitly rather than by rewriting 33 call sites.
_SSH_FORWARDED_NAMES = frozenset(
    name for name in dir(ssh_service) if not name.startswith("__")
)

# Same forwarding for the browser service. PUBLIC_BASE_URL and ROOT_PATH are
# read inside it when building external URLs, and tests patch them on app.
# The autonomous loops hold references bound at configure() time; tests patch
# these on app, so forward the write into the service too.
# Everything the service defines, plus the app helpers it is configured with.
#
# The phase functions call siblings (`_away_send_and_wait`, the prompt loops)
# through their own module globals, and tests patch those on app to stub out the
# real agent wait. Without forwarding, the patch rebinds app's re-exported copy
# while the service keeps calling the real one -- which does not fail, it HANGS
# waiting on an agent that never replies.
_AUTONOMOUS_FORWARDED_NAMES = frozenset(
    {
        name for name in dir(autonomous_service)
        if not name.startswith("__")
    }
    | {
        "_build_project_isolation_preamble", "_ensure_codex_running", "_find_session",
        "_resume_parked_session", "_save_autonomous_state", "async_detect_activity",
        "capture_pane_full", "capture_pane_recent", "llm_call",
    }
)

_BROWSER_FORWARDED_NAMES = frozenset(
    name for name in dir(browser_service) if not name.startswith("__")
)


import sys as _sys  # noqa: E402


class _AppModule(type(_sys.modules[__name__])):
    """Forwards SSH attribute writes to services.ssh; reads are unaffected."""

    def __setattr__(self, name, value):
        if name in _SSH_FORWARDED_NAMES:
            setattr(ssh_service, name, value)
        if name in _BROWSER_FORWARDED_NAMES:
            setattr(browser_service, name, value)
        if name in _AUTONOMOUS_FORWARDED_NAMES:
            setattr(autonomous_service, name, value)
        super().__setattr__(name, value)


_sys.modules[__name__].__class__ = _AppModule


def capture_pane_full(session_name: str) -> str:
    try:
        # -J joins terminal-wrap continuation lines so long strings (e.g. OAuth
        # login URLs) come back intact instead of split at pane width.
        result = subprocess.run(
            ["tmux", "capture-pane", "-t", _agent_pane_target(session_name), "-p", "-J", "-S", "-"],
            capture_output=True, text=True, timeout=10
        )
        return result.stdout if result.returncode == 0 else ""
    except Exception:
        return ""


def capture_pane_recent(session_name: str, lines: int = 80) -> str:
    """Recent output from the AGENT's pane.

    Targeting the bare session reads whichever window is active, which becomes
    the IDE's SSH terminal as soon as a browser terminal attaches — activity
    detection and chat-reply capture then watched a shell instead of the agent.
    """
    try:
        result = subprocess.run(
            ["tmux", "capture-pane", "-t", _agent_pane_target(session_name),
             "-p", "-J", "-S", f"-{lines}"],
            capture_output=True, text=True, timeout=5
        )
        return result.stdout if result.returncode == 0 else ""
    except Exception:
        return ""


_CODEX_MODEL_LOADING_RE = re.compile(
    r"(?im)^[ \t]*[│|]\s*model:\s*loading\b"
)
_CODEX_INPUT_READY_TIMEOUT = 15.0


async def _wait_for_codex_input_ready(
    session_name: str,
    timeout: float = _CODEX_INPUT_READY_TIMEOUT,
) -> bool:
    """Wait out Codex's initial ``model: loading`` state before typing.

    Codex 0.146 accepts input while its model and MCP servers are still
    starting, but doing so interrupts MCP startup. Its welcome card can also
    keep the literal ``model: loading`` text after startup is usable, so the
    marker activates a bounded grace period rather than a permanent block.
    Established busy sessions continue to accept queued follow-ups immediately.
    """
    pane = await asyncio.to_thread(capture_pane_recent, session_name, 40)
    if not _CODEX_MODEL_LOADING_RE.search(pane):
        return True

    deadline = time.monotonic() + max(0.0, timeout)
    while time.monotonic() < deadline:
        await asyncio.sleep(0.25)
        pane = await asyncio.to_thread(capture_pane_recent, session_name, 40)
        if pane and not _CODEX_MODEL_LOADING_RE.search(pane):
            return True

    logger.info(
        "Codex still shows its loading welcome card for session '%s' after "
        "%.1fs; submitting after the startup grace period",
        session_name,
        timeout,
    )
    return True


def get_pane_width(session_name: str) -> int:
    try:
        result = subprocess.run(
            ["tmux", "display-message", "-t", session_name, "-p", "#{pane_width}"],
            capture_output=True, text=True, timeout=2,
        )
        if result.returncode == 0:
            return int(result.stdout.strip())
    except Exception:
        pass
    return 80


def get_pane_position(session_name: str) -> dict:
    """Get current pane line-count metadata (cheap, no content capture).

    Uses history_size + pane_height (not cursor_y) so the count only changes
    when new content actually scrolls up, not when the cursor moves within
    the visible area (status bar updates, etc.).  This prevents false deltas
    that cause duplicate lines in the terminal view.
    """
    try:
        result = subprocess.run(
            ["tmux", "display-message", "-t", session_name, "-p",
             "#{history_size}:#{pane_height}"],
            capture_output=True, text=True, timeout=3
        )
        if result.returncode == 0:
            parts = result.stdout.strip().split(":")
            history_size = int(parts[0])
            pane_height = int(parts[1])
            return {"total_lines": history_size + pane_height}
    except Exception:
        logger.debug("Failed to get pane position for '%s'", session_name, exc_info=True)
    return {"total_lines": 0}


# Track auto-approve state to avoid re-triggering
_auto_approve_sent: dict[str, float] = {}

# Content stability tracking for idle detection
# Stores (hash, first_seen_time, consecutive_count) per session
_pane_stability: dict[str, tuple] = {}

# Hysteresis for activity detection — prevents rapid busy/idle flickering.
# Stores per session: {"status": str, "since": float, "consecutive_idle": int, "raw": str}
_activity_state: dict[str, dict] = {}
# Require N consecutive idle readings before switching from busy → idle.
# At 10s polling interval, 3 readings = ~30 seconds of consistent idle signal.
IDLE_CONFIRM_COUNT = 3

# Pre-compiled regexes for activity detection (hot path — called every ~10s per session)
_SPINNER_ICONS = r'[✶✽✻☆◆●⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏✢✦✧✹✵✴✸❋❊❉✺◇◈⟡⊛⊕⊗▸▹►▻◉◎★♦♢⬡⬢]'
_RE_COMPLETION = re.compile(
    r'^[✶✽✻●⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏✢✦✧✹✵✴✸❋❊❉✺◇◈⟡⊛⊕⊗▸▹►▻◉◎★♦♢⬡⬢☆◆]\s+'
    r'(?:Done|Completed|[A-Z][a-zé]+(?:ed|d)\s+for\s+\d+[hms])'
)
_RE_RUNNING_TASK = re.compile(r'^[⎿\s]*◼')
_RE_SPINNER_START = re.compile(_SPINNER_ICONS + r'\s+\w+(?:…|\.{2,3})')
_RE_SPINNER_INLINE = re.compile(_SPINNER_ICONS + r'\s+\w+(?:…|\.{2,3})(?:\s*\(.*?\))?\s*$')
_RE_THOUGHT = re.compile(r'\(thought for \d+')
_RE_SHELL_PROMPT = re.compile(r'[\$#%>]\s*$')
_RE_IDLE_PROMPT = re.compile(r'^[❯➜]\s*$')
_RE_TIP_CODEX = re.compile(r'Tip:.*codex')
_RE_COMPLETION_MSG = re.compile(r'[A-Z][a-zé]+ for \d+[ms]')


_AUTONOMOUS_KEYWORDS = [
    "don't ask", "without asking", "bypass", "skip permission",
    "autonomous", "all permissions", "proceed without",
    "do everything", "yes to all", "approve all",
    "don't confirm", "without confirm", "skip confirm",
    "no further", "without further",
]


def _check_auto_approve(session_name: str, visible: str):
    """Detect Codex permission prompts and numbered question prompts,
    then auto-select the most autonomous / 'just do it' option."""
    # Don't re-trigger within 10 seconds
    last = _auto_approve_sent.get(session_name, 0)
    if time.time() - last < 10:
        return

    lines = visible.split("\n")

    # --- Strategy 1: Permission prompt with "Yes, and bypass" ---
    option2_line = -1
    selected_line = -1
    for i, line in enumerate(lines):
        stripped = line.strip()
        if re.search(r'2\.\s+Yes.*bypass', stripped):
            option2_line = i
        if stripped.startswith('❯') or stripped.startswith('>'):
            selected_line = i

    if option2_line >= 0 and selected_line >= 0:
        downs = option2_line - selected_line
        if downs >= 0:
            _send_option(session_name, downs)
            return

    # --- Strategy 2: Numbered question prompt (1. / 2. / 3. style) ---
    # Codex sometimes asks the user to pick from numbered options after planning.
    # We look for a list of numbered options and pick the most autonomous one.
    numbered_options = {}  # line_index -> (number, text)
    for i, line in enumerate(lines):
        stripped = line.strip()
        m = re.match(r'^(\d+)[.\-\)]\s+(.+)', stripped)
        if m:
            numbered_options[i] = (int(m.group(1)), m.group(2))

    if len(numbered_options) >= 2:
        # Find the option that means "do it all, don't ask again"
        best_line = None
        best_score = -1
        for line_idx, (num, text) in numbered_options.items():
            lower = text.lower()
            score = sum(1 for kw in _AUTONOMOUS_KEYWORDS if kw in lower)
            # Also favor option 1 as tiebreaker (usually the most autonomous)
            if score > best_score or (score == best_score and best_line is not None
                                      and num < numbered_options.get(best_line, (999, ""))[0]):
                best_score = score
                best_line = line_idx

        # Only act if we found a clear autonomous option (keyword match)
        # or if there are exactly 2-3 options and option 1 mentions doing/proceeding
        if best_score > 0 and best_line is not None:
            target_num = numbered_options[best_line][0]
            # Type the number and press Enter
            try:
                subprocess.run(
                    ["tmux", "send-keys", "-t", session_name, "-l", str(target_num)],
                    capture_output=True, text=True, timeout=3
                )
                subprocess.run(
                    ["tmux", "send-keys", "-t", session_name, "Enter"],
                    capture_output=True, text=True, timeout=3
                )
                _auto_approve_sent[session_name] = time.time()
            except Exception:
                logger.debug("Auto-approve send failed for '%s'", session_name, exc_info=True)
            return

    # --- Strategy 3: AskUserQuestion with labeled options (cursor-based) ---
    # Codex sometimes presents options where ❯ is the selector and
    # options contain labels. Pick the one with autonomous keywords.
    if selected_line >= 0:
        option_lines = []
        for i, line in enumerate(lines):
            stripped = line.strip()
            # Options in a cursor-based list start with ❯, >, or spaces (unselected)
            if re.match(r'^[❯>\s]\s+\S', stripped):
                option_lines.append((i, stripped.lstrip('❯> ')))
        if len(option_lines) >= 2:
            autonomous_target = None
            for _, (line_i, text) in enumerate(option_lines):
                lower = text.lower()
                for kw in _AUTONOMOUS_KEYWORDS:
                    if kw in lower:
                        autonomous_target = line_i
                        break
                if autonomous_target is not None:
                    break
            if autonomous_target is not None:
                downs = autonomous_target - selected_line
                if downs >= 0:
                    _send_option(session_name, downs)
                    return


def _send_option(session_name: str, downs: int):
    """Send Down arrow keys + Enter to select an option in a tmux pane."""
    try:
        for _ in range(downs):
            subprocess.run(
                ["tmux", "send-keys", "-t", session_name, "Down"],
                capture_output=True, text=True, timeout=3
            )
        subprocess.run(
            ["tmux", "send-keys", "-t", session_name, "Enter"],
            capture_output=True, text=True, timeout=3
        )
        _auto_approve_sent[session_name] = time.time()
    except Exception:
        logger.debug("Failed to send option keys to '%s'", session_name, exc_info=True)


def _detect_activity_raw(session_name: str) -> dict:
    """Raw single-snapshot activity detection (no debounce)."""
    info = {"status": "unknown", "command": "", "detail": ""}
    try:
        # Get the foreground command and pane pid
        result = subprocess.run(
            ["tmux", "display-message", "-t", session_name, "-p",
             "#{pane_current_command}:#{pane_pid}"],
            capture_output=True, text=True, timeout=5
        )
        if result.returncode != 0:
            return info

        parts = result.stdout.strip().split(":")
        cmd = parts[0] if parts else ""
        info["command"] = cmd

        # Capture the very bottom of the visible pane — this is the ground truth.
        # tmux capture-pane without -S captures just the visible area.
        try:
            vis = subprocess.run(
                ["tmux", "capture-pane", "-t", _agent_pane_target(session_name), "-p"],
                capture_output=True, text=True, timeout=5
            )
            visible = vis.stdout if vis.returncode == 0 else ""
        except Exception:
            visible = ""

        # Auto-approve disabled: never type/select on the user's behalf.
        # _check_auto_approve(session_name, visible)

        all_lines = visible.split("\n")
        # Strip trailing empty lines to find the real bottom
        while all_lines and not all_lines[-1].strip():
            all_lines.pop()

        # Look at the bottom 6 lines to catch prompt + status bar + separators
        bottom = all_lines[-6:] if len(all_lines) >= 6 else all_lines
        bottom_text = "\n".join(bottom)

        # --- Step 1: Check "esc to interrupt" — strongest busy signal ---
        # This appears in Codex's status bar when a task is actively running.
        has_esc_to_interrupt = "esc to interrupt" in bottom_text

        # --- Step 2: Check for idle prompt indicators in bottom area ---
        idle_prompt_patterns = [_RE_IDLE_PROMPT, _RE_TIP_CODEX, _RE_COMPLETION_MSG]
        # Lines containing these phrases override idle — session is still working
        busy_overrides = [
            "still running",
            "agents running",
            "waiting for completion",
            "in progress",
        ]
        has_idle_prompt = False
        for pattern in idle_prompt_patterns:
            for line in bottom:
                stripped = line.strip()
                if pattern.search(stripped):
                    # Check if the same line has a busy override
                    lower = stripped.lower()
                    if any(phrase in lower for phrase in busy_overrides):
                        continue  # not truly idle
                    has_idle_prompt = True
                    break
            if has_idle_prompt:
                break

        # --- Step 3: Check for active spinners/progress ---
        # Scan a wider window (bottom 25 lines) because Codex's
        # spinners and task indicators appear in the content area
        # *above* the bottom chrome.  This MUST run before we return
        # idle — the ❯ prompt is always visible even while Codex is
        # executing tools / thinking / streaming.
        window = all_lines[-25:] if len(all_lines) >= 25 else all_lines

        # All checks are LINE-BY-LINE.  Start-of-line anchoring is used
        # where possible to avoid false positives from these patterns
        # appearing in conversation output text.
        # (Regexes are pre-compiled at module level: _RE_COMPLETION, etc.)
        for line in window:
            stripped = line.strip()
            # Skip completion markers — these look like spinners but mean "finished"
            if _RE_COMPLETION.match(stripped):
                continue
            # ◼ at start of line (with optional ⎿ tree prefix) = running task
            if _RE_RUNNING_TASK.match(stripped):
                info["status"] = "busy"
                info["detail"] = "Running task"
                return info
            # Spinner icon + verb… at START of line
            if _RE_SPINNER_START.match(stripped):
                info["status"] = "busy"
                if '(thinking)' in stripped or 'thought for' in stripped:
                    info["detail"] = "Thinking"
                else:
                    info["detail"] = "Working"
                return info
            # Spinner icon + verb… anywhere in line (catches inline spinners)
            if _RE_SPINNER_INLINE.search(stripped):
                info["status"] = "busy"
                if '(thinking)' in stripped or 'thought for' in stripped:
                    info["detail"] = "Thinking"
                else:
                    info["detail"] = "Working"
                return info
            # "(thought for Xs)" or "(thinking)" near end of line — strong busy signal
            if _RE_THOUGHT.search(stripped) or stripped.endswith('(thinking)'):
                info["status"] = "busy"
                info["detail"] = "Thinking"
                return info
            # "N local agents still running" or "Waiting for completion" = busy
            lower = stripped.lower()
            if "still running" in lower or "waiting for completion" in lower:
                info["status"] = "busy"
                info["detail"] = "Agents running"
                return info

        # --- Step 4: Content stability check ---
        # If the terminal content hasn't changed for 20+ seconds and there's no
        # "esc to interrupt", the session is idle — real work produces output,
        # real spinners animate.  This catches cases text patterns miss.
        content_hash = hashlib.md5(visible.encode()).hexdigest()
        now = time.time()
        prev = _pane_stability.get(session_name)
        if prev and prev[0] == content_hash:
            # Content unchanged since last check
            stable_since = prev[1]
            stable_seconds = now - stable_since
            _pane_stability[session_name] = (content_hash, stable_since, prev[2] + 1)
        else:
            # Content changed — reset
            stable_seconds = 0
            _pane_stability[session_name] = (content_hash, now, 1)

        content_is_static = stable_seconds >= 20

        # --- Step 5: If idle prompt + no busy signals → truly idle ---
        if has_idle_prompt and not has_esc_to_interrupt:
            info["status"] = "idle"
            info["detail"] = ""
            return info

        # "esc to interrupt" without a spinner = background tasks running
        if has_esc_to_interrupt:
            info["status"] = "busy"
            info["detail"] = "Background tasks"
            return info

        # --- Step 6: Static content override ---
        # If the terminal hasn't changed in 20+ seconds and the foreground
        # command is codex/node, it's almost certainly idle — the text-based
        # checks above may have missed it or the output just looks ambiguous.
        if content_is_static and cmd.lower() in ("codex", "codex", "node"):
            info["status"] = "idle"
            info["detail"] = ""
            return info

        # --- Step 7: Shell prompt check ---
        last_line = bottom[-1].strip() if bottom else ""
        shell_cmds = {"bash", "zsh", "sh", "fish", "tmux"}
        if cmd.lower() in shell_cmds:
            if _RE_SHELL_PROMPT.search(last_line) or not last_line:
                info["status"] = "idle"
                info["detail"] = "Shell prompt"
            else:
                info["status"] = "busy"
                info["detail"] = cmd
        elif cmd.lower() in ("codex", "codex", "node"):
            # Codex with no spinner + no "esc to interrupt" = idle
            info["status"] = "idle"
            info["detail"] = ""
        else:
            info["status"] = "busy"
            info["detail"] = cmd
    except Exception:
        logger.debug("Activity detection failed for session '%s'", session_name, exc_info=True)
    return info


def detect_activity(session_name: str) -> dict:
    """Debounced activity detection with asymmetric hysteresis.

    - busy → idle: requires IDLE_CONFIRM_COUNT consecutive idle readings (~30s)
    - idle → busy: immediate (1 reading)

    This prevents flickering when Codex briefly shows no spinner
    between tool calls or streaming chunks.
    """
    raw = _detect_activity_raw(session_name)
    now = time.time()
    prev = _activity_state.get(session_name)

    if prev is None:
        # First reading — accept as-is
        _activity_state[session_name] = {
            "status": raw["status"],
            "since": now,
            "consecutive_idle": 1 if raw["status"] == "idle" else 0,
            "raw": raw,
        }
        return raw

    if raw["status"] == "busy":
        # Busy is always accepted immediately — reset idle counter
        _activity_state[session_name] = {
            "status": "busy",
            "since": now if prev["status"] != "busy" else prev["since"],
            "consecutive_idle": 0,
            "raw": raw,
        }
        return raw

    if raw["status"] in ("idle", "unknown"):
        if prev["status"] == "busy":
            # Trying to transition busy → idle: increment counter but hold busy
            idle_count = prev["consecutive_idle"] + 1
            if idle_count >= IDLE_CONFIRM_COUNT:
                # Enough consecutive idle readings — confirm transition
                _activity_state[session_name] = {
                    "status": raw["status"],
                    "since": now,
                    "consecutive_idle": idle_count,
                    "raw": raw,
                }
                return raw
            else:
                # Not enough yet — stay busy but record the idle reading
                _activity_state[session_name] = {
                    "status": "busy",
                    "since": prev["since"],
                    "consecutive_idle": idle_count,
                    "raw": prev["raw"],  # keep last busy details
                }
                return prev["raw"]
        else:
            # Already idle/unknown — stay idle, keep counting
            _activity_state[session_name] = {
                "status": raw["status"],
                "since": prev["since"],
                "consecutive_idle": prev["consecutive_idle"] + 1,
                "raw": raw,
            }
            return raw

    # Fallback
    _activity_state[session_name] = {
        "status": raw["status"],
        "since": now,
        "consecutive_idle": 0,
        "raw": raw,
    }
    return raw


async def async_detect_activity(session_name: str) -> dict:
    """Non-blocking detect_activity — runs in thread pool to avoid blocking the event loop."""
    return await asyncio.to_thread(detect_activity, session_name)


async def llm_call(system_prompt: str, user_content: str, max_tokens: int = 200,
                   response_format: dict = None) -> str:
    start = time.time()
    try:
        kwargs = dict(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_content},
            ],
            max_tokens=max_tokens,
            temperature=0.3,
        )
        if response_format:
            kwargs["response_format"] = response_format
        resp = await asyncio.wait_for(
            client.chat.completions.create(**kwargs),
            timeout=45,
        )
        duration = time.time() - start
        tokens_used = getattr(resp.usage, "total_tokens", 0) if resp.usage else 0
        logger.debug("LLM call completed in %.1fs, %d tokens", duration, tokens_used)
        return resp.choices[0].message.content.strip()
    except asyncio.TimeoutError:
        duration = time.time() - start
        logger.error("LLM call timed out after %.1fs", duration)
        return ""
    except Exception as e:
        duration = time.time() - start
        logger.error("LLM call failed after %.1fs: %s", duration, e)
        # Return empty string (not the error text) so callers don't cache the
        # error as content. Downstream keyword checks (`"CONTINUE" not in ...`,
        # `"LEGITIMATE" in ...`) treat empty as a no-op, which is the right
        # fail-safe behavior.
        return ""


async def get_title_and_description(session_name: str, full_output: str) -> tuple:
    """Return (title, description) for a session."""
    lines = full_output.split("\n")
    early = "\n".join(lines[:150])
    mid_start = len(lines) // 3
    middle = "\n".join(lines[mid_start:mid_start + 80])
    context = f"=== EARLIEST OUTPUT (first 150 lines) ===\n{early}\n\n=== MIDDLE SECTION ===\n{middle}"
    truncated = context[:4000]

    title_coro = llm_call(
        system_prompt=(
            "Given terminal output from a tmux session, produce a SHORT title (3-6 words) "
            "naming the project or task. Use the actual project name or directory if visible. "
            "Examples: 'monitor-app LLM re-match', 'tmux-dashboard project', "
            "'Next.js frontend build'. "
            "Return ONLY the title, no quotes, no punctuation at the end."
        ),
        user_content=f"tmux session '{session_name}':\n\n{truncated}",
        max_tokens=30,
    )
    desc_coro = llm_call(
        system_prompt=(
            "You summarize what a terminal session is for. Write ONE short plain sentence. "
            "Be informative and specific — mention the tool, the actual project name, and "
            "what it does or where it runs if you can tell. "
            "Write like a human would casually describe it to a colleague.\n"
            "GOOD examples:\n"
            "- 'Codex working on the product monitoring app at monitor.grabo.cc'\n"
            "- 'Building and testing the tmux-dashboard FastAPI service'\n"
            "- 'Running a data migration script for the user database'\n"
            "BAD examples (too verbose/robotic):\n"
            "- 'This tmux session is for the Codex AI assistant working on...'\n"
            "- 'The session involves running and debugging an LLM-based...'\n"
            "Keep it under 20 words. No filler phrases. No 'This session is for...'."
        ),
        user_content=f"tmux session '{session_name}':\n\n{truncated}",
        max_tokens=60,
    )
    title, description = await asyncio.gather(title_coro, desc_coro)
    return title, description


async def get_progress(session_name: str, full_output: str) -> str:
    lines = full_output.split("\n")
    total = len(lines)
    slices = [("BEGINNING", "\n".join(lines[:60]))]
    if total > 200:
        q1 = total // 4
        slices.append(("QUARTER", "\n".join(lines[q1:q1 + 50])))
    if total > 300:
        mid = total // 2
        slices.append(("MIDDLE", "\n".join(lines[mid:mid + 50])))
    if total > 400:
        q3 = (total * 3) // 4
        slices.append(("THREE-QUARTER", "\n".join(lines[q3:q3 + 50])))
    slices.append(("RECENT", "\n".join(lines[-60:])))
    context = "\n\n".join(f"=== {label} ===\n{text}" for label, text in slices)
    return await llm_call(
        system_prompt=(
            "Summarize what was accomplished in this terminal session so far. "
            "Write 1-3 short plain sentences listing concrete things that were built, "
            "fixed, or completed. Use casual first-person plural ('we') and past tense. "
            "Focus on WHAT was done, not HOW (don't mention commands, bash, git, etc.).\n"
            "GOOD example: 'Built a price parser module and multi-tier classifier. "
            "Improved scraper extraction and finished the analytics dashboard.'\n"
            "BAD example: 'Several key tasks were completed including building modules "
            "and running scripts. Files such as matching.py were referenced.'\n"
            "Be condensed. Under 40 words. No filler."
        ),
        user_content=f"tmux session '{session_name}' sampled history:\n\n{context[:5000]}",
        max_tokens=100,
    )


async def get_notes(session_name: str, full_output: str, existing_notes: str = "", messages: list = None) -> str:
    """Extract key reference info from terminal output and chat history."""
    lines = full_output.split("\n")
    total = len(lines)
    slices = [("BEGINNING", "\n".join(lines[:80]))]
    if total > 200:
        q1 = total // 4
        slices.append(("QUARTER", "\n".join(lines[q1:q1 + 60])))
    if total > 300:
        mid = total // 2
        slices.append(("MIDDLE", "\n".join(lines[mid:mid + 60])))
    slices.append(("RECENT", "\n".join(lines[-80:])))
    context = "\n\n".join(f"=== {label} ===\n{text}" for label, text in slices)

    # Include chat messages (captures uploaded files, user commands, etc.)
    chat_section = ""
    if messages:
        recent_msgs = messages[-30:]  # last 30 messages
        chat_lines = [f"[{m['role']}] {m['text']}" for m in recent_msgs]
        chat_section = "\n\n=== CHAT HISTORY (user commands & uploads) ===\n" + "\n".join(chat_lines)

    prev_section = ""
    if existing_notes and existing_notes.strip():
        prev_section = f"\n\n=== PREVIOUS NOTES (merge new findings into these) ===\n{existing_notes}"

    return await llm_call(
        system_prompt=(
            "Extract key reference info from this terminal session. "
            "Organize into these sections:\n\n"
            "CREDENTIALS — usernames, passwords, API keys, tokens, secrets\n"
            "URLS — the public URL(s) where THIS project is served/accessible\n"
            "STACK — languages, frameworks, libraries, dependencies, tools, package managers\n"
            "SERVICES — databases, ports, process managers (PM2/supervisor/systemd), background services\n"
            "STRUCTURE — the key source files created/edited for this deliverable\n"
            "UPLOADS — paths to any files that were uploaded to this session\n"
            "NOTES — important dev decisions, gotchas, deployment steps, things to remember\n\n"
            "Rules:\n"
            "- Only include info actually visible in the terminal output or chat history\n"
            "- Keep each item on one line, be specific (include actual values, paths, ports)\n"
            "- Be SELECTIVE — surface only what the developer would actually reach for again, "
            "not every path/URL that scrolled by. Prefer the primary deliverable over incidentals.\n"
            "- URLS: EXCLUDE localhost/127.0.0.1/internal IPs, third-party API endpoints "
            "(api.openai.com, api.anthropic.com, *.googleapis.com, oauth/health/rest calls), and "
            "URLs for OTHER projects that merely got mentioned. Keep only THIS project's URL(s).\n"
            "- STRUCTURE: EXCLUDE tooling/system paths (~/.claude*, ~/.tmux-dashboard*, ~/.codex*, "
            "/etc, skill/memory files like SKILL.md/CLAUDE.md/claude-roles.json, nginx/supervisor "
            ".conf files) and the dashboard repo dir itself (tmux-dashboard-original). Never emit "
            "placeholder paths containing < or >. List a file at most once.\n"
            "- If a section has nothing relevant, omit it entirely (don't pad it)\n"
            "- If previous notes exist, merge new findings into them — keep old data, "
            "remove duplicates (including near-duplicates that differ only by whitespace/case), "
            "update changed values\n"
            "- Redact nothing — this is the developer's own reference\n"
            "- No intro/outro text, just the section headers and their items"
        ),
        user_content=f"tmux session '{session_name}' sampled history:\n\n{context[:5000]}{chat_section[:1500]}{prev_section}",
        max_tokens=500,
    )


# Pane furniture that reads as prose but is not: a COLLAPSED tool block still
# starts with `●` and carries no recognisable `Tool(` prefix, so "Called advisor
# (ctrl+o to expand)" and "Made 1 edit +108 (ctrl+o to expand)" used to land in
# the Chat tab as if the agent had said them. The `(ctrl+o to expand)` suffix is
# the reliable tell — Claude Code only prints it on collapsible tool output.
_PANE_RESIDUE_RE = re.compile(
    r"\(ctrl\s*\+?\s*o\s+to\s+(expand|view\s+transcript)\)\s*$"
    r"|^(?:…|\.\.\.)?\s*\+\d+\s+lines?\b"
    r"|^Shell cwd was reset\b"
    r"|^Background command\b.*\b(completed|failed)\b"
    r"|^(Running|Thinking|Working)…?\s*$",
    re.I,
)


def _is_pane_residue(s: str) -> bool:
    s = (s or "").strip()
    return bool(s) and bool(_PANE_RESIDUE_RE.search(s))


# Agent CLIs draw their prompt and message bullets with different glyphs across
# versions: Codex used '❯'/'●' and now uses '›'/'•'. Matching only the old pair
# made every pane scrape return nothing after a CLI upgrade, which silently
# stopped chat replies. Match the known set instead of a single character.
_AGENT_PROMPT_GLYPHS = ("\u276f", "\u203a", ">")
_AGENT_TEXT_GLYPHS = ("\u25cf", "\u2022")

# Placeholders the composer shows when nothing has been typed. Treating one as a
# submitted prompt would split the pane below the agent's reply and lose it.
_AGENT_INPUT_PLACEHOLDERS = (
    "ask codex to do anything",
    "ask claude to do anything",
)


def _is_agent_input_placeholder(text: str) -> bool:
    """True for the agent composer's own placeholder rather than a real prompt."""
    probe = (text or "").strip().lower().rstrip(".\u2026")
    return not probe or probe in _AGENT_INPUT_PLACEHOLDERS


def _extract_codex_text(terminal_output: str) -> str:
    """Extract Codex's human-readable text from terminal output.

    Codex's terminal output uses these patterns:
    - '● Text here...' = Codex's spoken text (INCLUDE)
    - '● ToolName(args...)' = Tool call (EXCLUDE)
    - '  ⎿ ...' = Tool output / indented continuation (EXCLUDE)
    - '✻ ...' = Status line (EXCLUDE)
    - Lines starting with '❯' = User prompt (EXCLUDE)

    Returns extracted text paragraphs joined by newlines.
    """
    lines = terminal_output.split("\n")
    # Known tool prefixes that indicate a tool call, not text
    tool_names = (
        "Bash(", "Read(", "Edit(", "Write(", "Grep(", "Glob(", "Task(",
        "WebFetch(", "WebSearch(", "NotebookEdit(", "AskUser", "Skill(",
        "EnterPlanMode", "ExitPlanMode", "TaskCreate(", "TaskUpdate(",
        "TaskGet(", "TaskList(", "TodoWrite(", "mcp__",
    )
    text_blocks = []
    current_block = []
    in_text_block = False
    in_tool_block = False

    for line in lines:
        stripped = line.strip()
        # Detect start of a Codex text block (● followed by text, not a tool)
        if stripped[:1] in _AGENT_TEXT_GLYPHS:
            content_after = stripped[1:].strip()
            # Check if this is a tool call
            is_tool = any(content_after.startswith(t) for t in tool_names) or _is_pane_residue(content_after)
            if is_tool:
                # End any current text block
                if current_block:
                    text_blocks.append("\n".join(current_block))
                    current_block = []
                in_text_block = False
                in_tool_block = True
            else:
                # This is Codex's spoken text
                if current_block:
                    text_blocks.append("\n".join(current_block))
                    current_block = []
                in_text_block = True
                in_tool_block = False
                if content_after:
                    current_block.append(content_after)
        elif stripped[:1] in ("\u23bf", "\u2514"):
            # Tool output — skip. '└' is what the current Codex CLI draws for a
            # tool result ("└ Read SKILL.md"); '⎿' is the older/Claude form.
            in_text_block = False
            in_tool_block = True
        elif stripped[:1] in ("\u273b", "\u25e6") or stripped[:1] in _AGENT_PROMPT_GLYPHS:
            # Status/spinner line ('◦ Searching the web') or user prompt — end block
            if current_block:
                text_blocks.append("\n".join(current_block))
                current_block = []
            in_text_block = False
            in_tool_block = False
        elif stripped.startswith("───") or stripped == "":
            # Separator or blank line
            if in_text_block and current_block:
                # Blank line within text block — preserve as paragraph break
                if stripped == "":
                    current_block.append("")
                else:
                    text_blocks.append("\n".join(current_block))
                    current_block = []
                    in_text_block = False
        elif in_text_block:
            # Continuation of the agent's text (indented lines under ●)
            if _is_pane_residue(stripped):
                continue
            current_block.append(stripped)
        elif in_tool_block:
            # Skip tool output continuation
            pass

    if current_block:
        text_blocks.append("\n".join(current_block))

    return "\n\n".join(b for b in text_blocks if b.strip())


def _extract_codex_response_since_last_user(terminal_output: str) -> str:
    """Extract Codex's text response since the last user message (❯ prompt).

    Scans backward from the end of terminal output to find the last ❯ prompt,
    then extracts all Codex text blocks after it.
    """
    lines = terminal_output.split("\n")
    # Find the last user prompt line (❯)
    last_prompt_idx = -1
    for i in range(len(lines) - 1, -1, -1):
        stripped = lines[i].strip()
        # Codex changed its prompt glyph between CLI versions ('❯' -> '›'), and
        # Claude uses '>'. Accept all of them so a CLI upgrade cannot silently
        # stop chat replies from being captured.
        if stripped[:1] not in _AGENT_PROMPT_GLYPHS or len(stripped) <= 1:
            continue
        # The composer sits at the BOTTOM of an idle pane showing its
        # placeholder ("Ask Codex to do anything"). Splitting there would throw
        # away the reply printed above it, so skip the empty input box and keep
        # looking for the prompt that carries real submitted text.
        if _is_agent_input_placeholder(stripped[1:].strip()):
            continue
        last_prompt_idx = i
        break

    # If no user prompt found, use all output
    if last_prompt_idx < 0:
        section = terminal_output
    else:
        section = "\n".join(lines[last_prompt_idx + 1:])

    return _extract_codex_text(section)


_extract_claude_response_since_last_user = _extract_codex_response_since_last_user


async def get_realtime(session_name: str) -> str:
    """Extract Codex's human-readable text from recent terminal output.

    Instead of LLM summarization, directly parses Codex's text output.
    Only falls back to LLM summarization if extracted text is very long (>500 words).
    """
    recent = await asyncio.to_thread(capture_pane_recent, session_name, 150)

    extracted = _extract_codex_response_since_last_user(recent)

    if not extracted.strip():
        return ""

    # If the extracted text is short enough, return it directly
    word_count = len(extracted.split())
    if word_count <= 500 or not AUTO_SUMMARIZER_ENABLED:
        return extracted.strip()

    # Text is very long — summarize it
    return await llm_call(
        system_prompt=(
            "Summarize Codex's response text into a concise message (2-4 sentences). "
            "Keep concrete details: file paths, URLs, numbers, outcomes. "
            "Write in first person as Codex would. Under 80 words."
        ),
        user_content=f"Codex's response text:\n\n{extracted[:4000]}",
        max_tokens=200,
    )


def _output_signature(text: str) -> str:
    """Normalized hash of terminal output, used to skip LLM re-summarization when
    the output hasn't meaningfully changed. Insensitive to trailing whitespace
    and runs of blank lines (those flap a lot during spinners / redraws)."""
    if not text:
        return ""
    out = []
    blank = False
    for ln in text.split("\n"):
        ln = ln.rstrip()
        if not ln:
            if not blank:
                out.append("")
            blank = True
        else:
            out.append(ln)
            blank = False
    return hashlib.sha256("\n".join(out).encode("utf-8", "replace")).hexdigest()


async def get_session_data(session_name: str, force_all: bool = False) -> dict:
    now = time.time()
    # IMPORTANT: use setdefault so `entry` is the SAME object as cache[session_name].
    # This prevents a race with api_send_command where a concurrent /send could
    # add a user message to a different cache entry, then get clobbered when this
    # function reassigns cache[session_name] below after awaiting LLM calls.
    entry = cache.setdefault(session_name, {})
    if "messages" not in entry:
        entry["messages"] = _load_session_messages(session_name)
    if "notes" not in entry:
        entry["notes"] = _load_session_notes(session_name)

    has_description = "description" in entry
    has_progress = "progress" in entry
    has_notes = "notes" in entry
    progress_ttl_expired = (now - entry.get("progress_at", 0)) >= PROGRESS_TTL
    notes_ttl_expired = (now - entry.get("notes_at", 0)) >= NOTES_TTL

    # Capture pane up front when any task might fire, so we can compare a
    # content signature against the last successful summary and skip the LLM
    # call when nothing has actually changed. Capture is a cheap subprocess
    # call relative to an OpenAI request.
    full_output = None
    sig = ""
    might_need = AUTO_SUMMARIZER_ENABLED and (force_all or (
        not has_description
        or not has_progress or progress_ttl_expired
        or not has_notes or notes_ttl_expired
    ))
    if might_need:
        full_output = capture_pane_full(session_name)
        sig = _output_signature(full_output)

    # Staleness gate: skip the LLM call when the captured output hasn't changed
    # since the last successful summary. Force / missing cache still bypass.
    need_description = force_all or not has_description or (
        bool(sig) and entry.get("description_sig") != sig
    )
    need_progress = force_all or not has_progress or (
        progress_ttl_expired and bool(sig) and entry.get("progress_sig") != sig
    )
    need_notes = force_all or not has_notes or (
        notes_ttl_expired and bool(sig) and entry.get("notes_sig") != sig
    )

    # Auto-summarizer removed: never issue LLM title/description/progress/notes calls.
    if not AUTO_SUMMARIZER_ENABLED:
        need_description = need_progress = need_notes = False

    tasks = {}
    if need_description:
        tasks["title_desc"] = get_title_and_description(session_name, full_output)
    if need_progress:
        tasks["progress"] = get_progress(session_name, full_output)
    if need_notes:
        tasks["notes"] = get_notes(session_name, full_output, entry.get("notes", ""), entry.get("messages", []))
    if force_all or "realtime" not in entry or (now - entry.get("realtime_at", 0)) >= REALTIME_TTL:
        tasks["realtime"] = get_realtime(session_name)

    # Simplified Chat tab: when Codex is idle, (re)generate ONE plain-language
    # recap of its whole last turn. Triggered promptly on the busy->idle edge,
    # then at most every REALTIME_TTL; the signature gate inside get_chat_summary
    # skips the LLM call when the turn output hasn't changed.
    _chat_status = _activity_state.get(session_name, {}).get("status", "")
    if _chat_status == "busy":
        entry["_chat_was_busy"] = True
    _summary_due = (now - entry.get("chat_summary_at", 0)) >= REALTIME_TTL
    if _chat_status == "idle" and (force_all or entry.get("_chat_was_busy") or _summary_due):
        # Pass the last user message so the right transcript is matched when
        # several sessions share a cwd (project dir).
        _last_user = next((m.get("text", "") for m in reversed(entry.get("messages", []))
                           if m.get("role") == "user"), "")
        tasks["chat_summary"] = get_chat_summary(session_name, entry.get("chat_summary_sig", ""), _last_user)
        entry["chat_summary_at"] = now
        entry["_chat_was_busy"] = False

    if tasks:
        results = await asyncio.gather(*tasks.values())
        result_map = dict(zip(tasks.keys(), results))
        if "title_desc" in result_map:
            title, description = result_map["title_desc"]
            # Only commit if at least one of the parallel calls succeeded.
            # Empty strings come from llm_call's error path -- preserve prior
            # cached value (and don't update sig, so we'll retry next round).
            if (title and title.strip()) or (description and description.strip()):
                entry["title"] = title or entry.get("title", "")
                entry["description"] = description or entry.get("description", "")
                entry["description_at"] = now
                entry["description_sig"] = sig
        if "progress" in result_map:
            progress = result_map["progress"]
            if progress and progress.strip():
                entry["progress"] = progress
                entry["progress_at"] = now
                entry["progress_sig"] = sig
        if "notes" in result_map:
            notes = result_map["notes"]
            if notes and notes.strip():
                entry["notes"] = notes
                entry["notes_at"] = now
                entry["notes_sig"] = sig
        if "realtime" in result_map:
            realtime = result_map["realtime"]
            if realtime and realtime.strip():
                # Kept for the Info tab's "live" field only — NOT pushed into the
                # Chat tab (that now shows the idle summary below, not raw text).
                entry["realtime"] = realtime
                entry["realtime_at"] = now
        if "chat_summary" in result_map:
            cs = result_map["chat_summary"]
            if cs and (cs.get("summary") or cs.get("full")):
                _append_assistant_msg(entry, cs.get("summary", ""), now,
                                      full=cs.get("full", ""), links=cs.get("links") or [])
                entry["chat_summary_sig"] = cs["sig"]

    cache[session_name] = entry
    if entry.get("messages"):
        _save_messages()
    if entry.get("notes"):
        _save_notes()
    return entry


def _msg_similarity(a: str, b: str) -> float:
    """Quick word-overlap similarity between two strings."""
    wa = set(a.lower().split())
    wb = set(b.lower().split())
    if not wa or not wb:
        return 0.0
    return len(wa & wb) / max(len(wa), len(wb))


def _append_assistant_msg(entry: dict, text: str, ts: float, full: str = "", links: list = None):
    """Update or append an assistant message for the current Codex response.

    Instead of appending multiple assistant messages per response, we maintain
    a single assistant message after the last user message that gets updated
    as Codex produces more text. This keeps the chat clean:
    user → single assistant response → user → single assistant response.
    """
    if not (text or "").strip() and not (full or "").strip():
        return
    text = text or ""
    msgs = entry.setdefault("messages", [])

    # Find the last user message index
    last_user_idx = -1
    for i in range(len(msgs) - 1, -1, -1):
        if msgs[i]["role"] == "user":
            last_user_idx = i
            break

    # Find the last assistant message after the last user message
    last_assistant_idx = -1
    for i in range(len(msgs) - 1, -1, -1):
        if msgs[i]["role"] == "assistant" and i > last_user_idx:
            last_assistant_idx = i
            break

    if last_assistant_idx >= 0:
        prev = msgs[last_assistant_idx]
        # The recap is regenerated by an LLM and wobbles between near-identical
        # wordings, so it alone can't decide whether anything changed — the full
        # reply and the deliverables can grow while the recap reads the same.
        same_full = (prev.get("full") or "") == (full or "")
        same_links = (prev.get("links") or []) == (links or [])
        if prev["text"] == text and same_full and same_links:
            return  # No change
        if _msg_similarity(prev["text"], text) > 0.9 and same_full and same_links:
            return  # Too similar, skip
        prev["text"] = text
        prev["ts"] = ts
        prev["full"] = full or ""
        prev["links"] = links or []
    else:
        # No assistant message after last user message — create one
        msgs.append({"role": "assistant", "text": text, "ts": ts,
                     "full": full or "", "links": links or []})

    _save_messages()


# --- Simplified Chat tab: one plain-language recap per completed Codex turn ---
#
# The Chat tab is for non-developer users who shouldn't see raw terminal/tool
# output. Instead of streaming Codex's live text into the chat, we wait until
# Codex goes idle and then post ONE short summary of everything it produced
# that turn. The clean source of "everything Codex output" is the session's
# JSONL transcript (assistant `text` blocks since the last genuine user
# message) — far cleaner than scraping the pane. We fall back to the pane scrape
# when no transcript exists.

def _read_jsonl_tail(path: str, max_bytes: int = 1_500_000) -> list:
    """Return the trailing lines of a (possibly huge) JSONL file cheaply."""
    try:
        size = os.path.getsize(path)
        with open(path, "rb") as f:
            if size > max_bytes:
                f.seek(size - max_bytes)
                f.readline()  # discard the partial first line
            data = f.read()
        return data.decode("utf-8", "replace").splitlines()
    except Exception:
        return []


def _codex_event_payload(event: dict, event_type: str) -> dict | None:
    payload = event.get("payload")
    if (
        event.get("type") == "event_msg"
        and isinstance(payload, dict)
        and payload.get("type") == event_type
    ):
        return payload
    return None


def _norm_text(s: str) -> str:
    return " ".join((s or "").split()).lower()


def _last_genuine_user_text(path: str) -> str:
    """The most recent Codex user_message recorded in a rollout file."""
    last = ""
    for ln in _read_jsonl_tail(path):
        ln = ln.strip()
        if not ln:
            continue
        try:
            o = json.loads(ln)
        except Exception:
            continue
        payload = _codex_event_payload(o, "user_message")
        if payload and isinstance(payload.get("message"), str):
            last = payload["message"]
    return last.strip()


def _resolve_session_transcript(session_name: str, last_user_text: str):
    """Pick the transcript that belongs to THIS tmux session.

    Several Codex sessions can share one cwd, so newest-mtime is not a reliable
    per-session signal — it
    can point at a sibling session that happened to write more recently. Instead
    match on content: the transcript whose latest human prompt equals the command
    the dashboard last sent to this session. Returns None when it can't be
    disambiguated (caller falls back to this session's own terminal pane)."""
    files = _find_session_jsonl_files(session_name)
    if not files:
        return None
    if len(files) == 1:
        return files[0]
    want = _norm_text(last_user_text)
    if not want:
        return None  # nothing to match on — don't guess across sessions
    key = want[:60]
    for path in sorted(files, key=os.path.getmtime, reverse=True):
        lu = _norm_text(_last_genuine_user_text(path))
        if lu and (lu.startswith(key) or key in lu):
            return path
    return None


def _extract_last_assistant_turn(session_name: str, last_user_text: str = "") -> str:
    """Clean text of Codex's most recent turn: every agent_message event
    since the last user_message in the rollout. Reasoning and tool
    calls/results are excluded. Falls back to this session's terminal pane when
    the transcript can't be unambiguously matched to this session."""
    path = _resolve_session_transcript(session_name, last_user_text)
    if path:
        try:
            texts: list = []
            for ln in _read_jsonl_tail(path):
                ln = ln.strip()
                if not ln:
                    continue
                try:
                    o = json.loads(ln)
                except Exception:
                    continue
                if _codex_event_payload(o, "user_message"):
                    texts = []
                    continue
                payload = _codex_event_payload(o, "agent_message")
                if payload:
                    text = payload.get("message")
                    if isinstance(text, str) and text.strip():
                        texts.append(text.strip())
            if texts:
                return "\n\n".join(texts).strip()
        except Exception:
            logger.debug("transcript turn extraction failed", exc_info=True)
    # Fallback: scrape the visible terminal.
    try:
        recent = capture_pane_recent(session_name, 200)
        return _extract_codex_response_since_last_user(recent).strip()
    except Exception:
        return ""


def _trim_plain(text: str, limit: int = 600) -> str:
    """Trim to a sentence/word boundary near `limit`, adding an ellipsis."""
    text = (text or "").strip()
    if len(text) <= limit:
        return text
    cut = text[:limit]
    for sep in (". ", "! ", "? ", "\n"):
        i = cut.rfind(sep)
        if i > limit * 0.5:
            return cut[: i + 1].strip() + " …"
    i = cut.rfind(" ")
    return (cut[:i] if i > 0 else cut).strip() + " …"


# --- Deliverables: the links and files a turn actually produced ---------------
#
# The Chat tab used to show a 70-word recap and nothing else, which loses the one
# thing the reader came for: where the work IS. The user is remote — a path in
# the recap ("saved to /home/.../REPORT.md") is unreachable from their phone — so
# every file that really exists is handed over as a /file?path= link, which the
# frontend resolves against the dashboard's own origin and which sits behind the
# same login as the dashboard.
_TURN_URL_RE = re.compile(r"https?://[^\s<>()\[\]{}\"'`]+")
_TURN_PATH_RE = re.compile(
    r"(?:^|[\s(\[|>*`])"
    r"((?:~|/(?:home|root|var|opt|srv|usr|etc|tmp|mnt|media|data))/[^\s<>()\[\]{}\"'`,;]+)",
    re.M,
)
_LINK_TRIM = ".,;:!?)]}'\"*`>"


def _link_label(url: str) -> str:
    """A chip caption: the last meaningful path segment, else the host."""
    try:
        from urllib.parse import urlsplit
        u = urlsplit(url)
        seg = [s for s in (u.path or "").split("/") if s]
        if seg and (len(seg[-1]) > 2 or "." in seg[-1]):
            return seg[-1][:48]
        return (u.netloc or url)[:48]
    except Exception:
        return url[:48]


def _extract_turn_links(text: str, limit: int = 14) -> list:
    """Web links and on-disk deliverables mentioned in one assistant turn.

    Files are only offered when they exist right now — a path the agent merely
    talked about would produce a link that 404s, which is worse than no link."""
    out: list = []
    seen: set = set()
    body = text or ""
    for m in _TURN_URL_RE.finditer(body):
        u = m.group(0).rstrip(_LINK_TRIM)
        while u and u.count("(") < u.count(")"):
            u = u[:-1].rstrip(_LINK_TRIM)
        if not u or u in seen:
            continue
        seen.add(u)
        out.append({"kind": "url", "href": u, "label": _link_label(u)})
        if len(out) >= limit:
            return out
    for m in _TURN_PATH_RE.finditer(body):
        p = m.group(1).rstrip(_LINK_TRIM)
        if not p or p in seen:
            continue
        seen.add(p)
        try:
            real = os.path.expanduser(p)
            if not os.path.exists(real):
                continue
            is_dir = os.path.isdir(real)
        except Exception:
            continue
        out.append({
            "kind": "file",
            "path": p,
            "label": (os.path.basename(real.rstrip("/")) or p)[:48],
            "dir": is_dir,
        })
        if len(out) >= limit:
            break
    return out


# The stored copy of a turn is capped only to stop one runaway reply bloating the
# per-user message file forever. Real prose never gets near this.
_CHAT_FULL_MAX = 20000


def _turn_full_text(text: str) -> str:
    body = (text or "").strip()
    if len(body) <= _CHAT_FULL_MAX:
        return body
    return body[:_CHAT_FULL_MAX].rstrip() + "\n\n[… reply truncated at 20,000 characters — open the Terminal view for the rest]"


async def _summarize_turn(text: str) -> str:
    """Short, plain-language recap of one assistant turn for non-dev users."""
    body = (text or "").strip()
    if not body:
        return ""
    summary = await llm_call(
        system_prompt=(
            "You summarize what an AI coding assistant just did, for a "
            "non-technical user who cannot see the terminal. Write a short, "
            "plain, friendly recap (1-3 sentences, under 70 words) of what was "
            "done, found, or decided. Keep concrete outcomes (what changed, what "
            "was created/fixed, any link, number, or result). No code blocks, no "
            "file-path jargon unless essential, no preamble or sign-off. Write in "
            "first person as the assistant ('I ...'). If the assistant asked the "
            "user something, state the question."
        ),
        user_content=f"The assistant's full output for this turn:\n\n{body[:8000]}",
        max_tokens=170,
    )
    summary = (summary or "").strip()
    # LLM unavailable/failed -> fall back to the assistant's own words (already
    # clean prose from the transcript), trimmed, rather than raw terminal output.
    return summary or _trim_plain(body, 600)


async def _capture_agent_reply(session_name: str) -> bool:
    """Record the agent's finished turn into the session's chat store.

    Extracted so the IDE chat panel can pull replies without depending on the
    dashboard being open in another tab. Mirrors the poll's gates: only when the
    agent is idle, and only when the turn signature actually changed.
    """
    try:
        entry = cache.setdefault(session_name, {})
        if _activity_state.get(session_name, {}).get("status", "") == "busy":
            # Note that a turn is in flight so the next idle poll captures it.
            entry["_chat_was_busy"] = True
            return False
        last_user = next(
            (m.get("text", "") for m in reversed(entry.get("messages", []) or [])
             if m.get("role") == "user"),
            "",
        )
        summary = await get_chat_summary(session_name, entry.get("chat_summary_sig", ""), last_user)
        if not summary or not (summary.get("summary") or summary.get("full")):
            return False
        _append_assistant_msg(
            entry, summary.get("summary", ""), time.time(),
            full=summary.get("full", ""), links=summary.get("links") or [],
        )
        entry["chat_summary_sig"] = summary["sig"]
        entry["chat_summary_at"] = time.time()
        entry["_chat_was_busy"] = False
        cache[session_name] = entry
        _save_messages()
        return True
    except Exception:
        logger.debug("IDE chat reply capture failed for %s", session_name, exc_info=True)
        return False


async def get_chat_summary(session_name: str, prev_sig: str, last_user_text: str = ""):
    """Return {'sig','summary','full','links'} for the latest turn, or None when
    unchanged/empty.

    `summary` is the short recap; `full` is what the agent actually wrote, which
    is what the Chat tab shows. The recap alone was cutting every answer off
    after a couple of lines and dropping the links with it."""
    turn_text = await asyncio.to_thread(_extract_last_assistant_turn, session_name, last_user_text)
    turn_text = (turn_text or "").strip()
    if not turn_text:
        return None
    sig = _output_signature(turn_text)
    if sig == prev_sig:
        return None  # this exact output was already summarized
    full = _turn_full_text(turn_text)
    summary = await _summarize_turn(turn_text)
    summary = (summary or "").strip()
    if not summary and not full:
        return None
    links = await asyncio.to_thread(_extract_turn_links, turn_text)
    return {"sig": sig, "summary": summary or _trim_plain(full, 600), "full": full, "links": links}


def build_session_response(sess: dict, data: dict, activity: dict = None) -> dict:
    if activity is None:
        activity = detect_activity(sess["name"])
    lifecycle = _session_lifecycle.get(sess["name"])
    autonomous = _load_autonomous_state().get(sess["name"], {})
    return {
        "name": sess["name"],
        "windows": sess["windows"],
        "attached": sess["attached"],
        "title": data.get("title", ""),
        "description": data.get("description", ""),
        "description_at": data.get("description_at", 0),
        "progress": data.get("progress", ""),
        "progress_at": data.get("progress_at", 0),
        "notes": data.get("notes", ""),
        "notes_at": data.get("notes_at", 0),
        "realtime": data.get("realtime", ""),
        "realtime_at": data.get("realtime_at", 0),
        "messages": data.get("messages", []),
        "activity_status": "parked" if lifecycle.get("parked") else activity["status"],
        "activity_command": activity["command"],
        "activity_detail": activity["detail"],
        "auth_mode": _session_real_auth_mode(sess["name"]),
        "autopush_mode": _get_autopush_mode(sess["name"]),
        "simple_watchdog": _get_autopush_mode(sess["name"]) == "full",
        "away_mode": bool(autonomous.get("away_mode")),
        "go_nuts_mode": bool(autonomous.get("go_nuts_mode")),
        "parked": bool(lifecycle.get("parked")),
        "parked_at": float(lifecycle.get("parked_at") or 0),
        **_session_model_fields(sess["name"]),
    }


# --- Routes ---

@app.get("/", response_class=HTMLResponse)
async def index(request: Request):
    # Inject the per-user "simple" flag so the member UI is correct from the very
    # first line of JS (before any /api/me round-trip), avoiding admin-only fetches.
    simple = bool(_multi_tenant_enabled() and not _is_admin(_current_user(request)))
    return HTMLResponse(HTML_PAGE.replace("__SIMPLE__", "true" if simple else "false"))


@app.get("/api/sessions")
async def api_sessions(request: Request):
    sessions, _scope = _session_list_for_request(request, get_tmux_sessions())
    if sessions is None:
        return JSONResponse({"error": "Admin only"}, status_code=403)
    results, activities = await asyncio.gather(
        asyncio.gather(*[get_session_data(s["name"]) for s in sessions]),
        asyncio.gather(*(async_detect_activity(s["name"]) for s in sessions)),
    )
    return JSONResponse([
        build_session_response(sess, data, activity=act)
        for sess, data, act in zip(sessions, results, activities)
    ])


@app.get("/api/sessions-fast")
async def api_sessions_fast(request: Request):
    """Return session list with cached data only — no LLM calls. Fast startup."""
    sessions, _scope = _session_list_for_request(request, get_tmux_sessions())
    if sessions is None:
        return JSONResponse({"error": "Admin only"}, status_code=403)
    # Run activity detection for all sessions in parallel threads
    activities = await asyncio.gather(
        *(async_detect_activity(sess["name"]) for sess in sessions)
    )
    out = []
    _owners_map = _load_session_owners()
    _uid_to_name = {u["id"]: u.get("username", "") for u in _load_users()}
    for sess, activity in zip(sessions, activities):
        entry = cache.get(sess["name"], {})
        if "messages" not in entry:
            entry["messages"] = _load_session_messages(sess["name"])
        if "notes" not in entry:
            entry["notes"] = _load_session_notes(sess["name"])
        cache[sess["name"]] = entry
        lifecycle = _session_lifecycle.get(sess["name"])
        autonomous = _load_autonomous_state().get(sess["name"], {})
        out.append({
            "name": sess["name"],
            "windows": sess["windows"],
            "attached": sess["attached"],
            "owner": _uid_to_name.get(_owners_map.get(sess["name"], "admin"), "") or AUTH_USER,
            "title": entry.get("title", ""),
            "description": entry.get("description", ""),
            "description_at": entry.get("description_at", 0),
            "progress": entry.get("progress", ""),
            "progress_at": entry.get("progress_at", 0),
            "notes": entry.get("notes", ""),
            "notes_at": entry.get("notes_at", 0),
            "realtime": entry.get("realtime", ""),
            "realtime_at": entry.get("realtime_at", 0),
            "messages": entry.get("messages", []),
            "activity_status": "parked" if lifecycle.get("parked") else activity["status"],
            "activity_command": activity.get("command", ""),
            "activity_detail": activity.get("detail", ""),
            "auth_mode": _session_real_auth_mode(sess["name"]),
            "autopush_mode": _get_autopush_mode(sess["name"]),
            "simple_watchdog": _get_autopush_mode(sess["name"]) == "full",
            "away_mode": bool(autonomous.get("away_mode")),
            "go_nuts_mode": bool(autonomous.get("go_nuts_mode")),
            "parked": bool(lifecycle.get("parked")),
            "parked_at": float(lifecycle.get("parked_at") or 0),
            **_session_model_fields(sess["name"]),
        })
    return JSONResponse(out)


@app.post("/api/sessions/{session_name}/refresh")
async def api_refresh_session(session_name: str):
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)

    entry = await get_session_data(session_name)
    activity = await async_detect_activity(session_name)
    return JSONResponse(build_session_response(sess, entry, activity=activity))


@app.post("/api/sessions/{session_name}/refresh-all")
async def api_refresh_all_tiers(session_name: str):
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)

    entry = await get_session_data(session_name, force_all=True)
    activity = await async_detect_activity(session_name)
    return JSONResponse(build_session_response(sess, entry, activity=activity))


@app.get("/api/status")
async def api_status(request: Request):
    """Lightweight: return only activity status per session, no LLM calls."""
    sessions, _scope = _session_list_for_request(request, get_tmux_sessions())
    if sessions is None:
        return JSONResponse({"error": "Admin only"}, status_code=403)
    activities = await asyncio.gather(
        *(async_detect_activity(sess["name"]) for sess in sessions)
    )
    out = []
    for sess, activity in zip(sessions, activities):
        lifecycle = _session_lifecycle.get(sess["name"])
        out.append({
            "name": sess["name"],
            "activity_status": "parked" if lifecycle.get("parked") else activity["status"],
            "activity_detail": activity["detail"],
            "autopush_mode": _get_autopush_mode(sess["name"]),
            "simple_watchdog": _get_autopush_mode(sess["name"]) == "full",
            "parked": bool(lifecycle.get("parked")),
            **_session_model_fields(sess["name"]),
        })
    return JSONResponse(out)


@app.get("/api/sessions/{session_name}/raw")
async def api_raw_output(session_name: str):
    """Return raw scrollback content for a session."""
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    raw = await asyncio.to_thread(capture_pane_full, session_name)
    activity = await async_detect_activity(session_name)
    pane_width = await asyncio.to_thread(get_pane_width, session_name)
    return JSONResponse({
        "name": session_name,
        "raw": raw,
        "lines": len(raw.split("\n")),
        "pane_width": pane_width,
        "activity_status": activity["status"],
        "activity_command": activity["command"],
        "activity_detail": activity["detail"],
    })


def _visible_pane_hash(session_name: str) -> str:
    """Cheap fingerprint of the visible tmux pane (alternate-screen aware).

    capture-pane without -S only returns the visible area, which Codex
    redraws into via its TUI even when history_size never grows. We hash that
    so the client can detect TUI redraws as content changes.
    """
    try:
        result = subprocess.run(
            ["tmux", "capture-pane", "-t", _agent_pane_target(session_name), "-p"],
            capture_output=True, text=True, timeout=3,
        )
        if result.returncode == 0:
            return hashlib.md5(result.stdout.encode("utf-8", "replace")).hexdigest()
    except Exception:
        logger.debug("Failed to hash visible pane for '%s'", session_name, exc_info=True)
    return ""


@app.get("/api/sessions/{session_name}/raw-tail")
async def api_raw_tail(session_name: str, known_lines: int = 0, last_hash: str = ""):
    """Return delta output since the client's last known line count.

    Also detects in-place TUI redraws (Codex's alternate screen) by
    hashing the visible pane — a hash mismatch forces a full capture even when
    scrollback length is unchanged.
    """
    _, found = _find_session(session_name)
    if not found:
        return JSONResponse({"error": "Session not found"}, status_code=404)

    pos = await asyncio.to_thread(get_pane_position, session_name)
    current_total = pos["total_lines"]
    vis_hash = await asyncio.to_thread(_visible_pane_hash, session_name)
    pane_width = await asyncio.to_thread(get_pane_width, session_name)

    # First load or session reset → full capture
    if known_lines <= 0 or known_lines > current_total:
        raw = await asyncio.to_thread(capture_pane_full, session_name)
        return JSONResponse({
            "mode": "full",
            "raw": raw,
            "total_lines": len(raw.split("\n")),
            "pane_total": current_total,
            "pane_width": pane_width,
            "visible_hash": vis_hash,
        })

    # No scrollback growth, but visible content changed (TUI redraw) → full
    if current_total <= known_lines:
        if last_hash and vis_hash and last_hash != vis_hash:
            raw = await asyncio.to_thread(capture_pane_full, session_name)
            return JSONResponse({
                "mode": "full",
                "raw": raw,
                "total_lines": len(raw.split("\n")),
                "pane_total": current_total,
                "pane_width": pane_width,
                "visible_hash": vis_hash,
            })
        return JSONResponse({
            "mode": "none",
            "total_lines": known_lines,
            "pane_total": current_total,
            "pane_width": pane_width,
            "visible_hash": vis_hash,
        })

    # Delta: capture only the new lines + small overlap for dedup
    overlap = 5
    lines_from_end = (current_total - known_lines) + overlap
    raw = await asyncio.to_thread(capture_pane_recent, session_name, lines_from_end)
    return JSONResponse({
        "mode": "delta",
        "raw": raw,
        "total_lines": current_total,
        "pane_total": current_total,
        "pane_width": pane_width,
        "overlap": overlap,
        "visible_hash": vis_hash,
    })


# --- Shared terminal stream + controller IPC -------------------------------
# One controller process owns one tmux capture loop per viewed session. API
# workers only relay its line-delimited JSON over authenticated WebSockets.
_terminal_channels: dict[str, dict] = {}
_controller_server = None


class _TerminalQueueWriter:
    """StreamWriter-shaped adapter used by the in-process development server."""

    def __init__(self):
        self.queue: asyncio.Queue[bytes] = asyncio.Queue(maxsize=100)
        self.closed = False

    def write(self, data: bytes) -> None:
        if self.closed:
            raise ConnectionError("terminal subscriber closed")
        try:
            self.queue.put_nowait(data)
        except asyncio.QueueFull as exc:
            # A browser that cannot drain 100 terminal events is stale. Closing
            # it prevents one slow client from retaining an unbounded backlog.
            self.closed = True
            raise ConnectionError("terminal subscriber fell behind") from exc

    async def drain(self) -> None:
        if self.closed:
            raise ConnectionError("terminal subscriber closed")

    def close(self) -> None:
        self.closed = True

    async def wait_closed(self) -> None:
        return None


def _terminal_full_payload(session_name: str) -> tuple[dict, str, int, str, int]:
    pos = get_pane_position(session_name)
    pane_total = int(pos.get("total_lines", 0))
    visible_hash = _visible_pane_hash(session_name)
    pane_width = get_pane_width(session_name)
    raw = capture_pane_full(session_name)
    payload = {
        "mode": "full",
        "raw": raw,
        "total_lines": len(raw.split("\n")),
        "pane_total": pane_total,
        "pane_width": pane_width,
        "visible_hash": visible_hash,
    }
    return payload, raw, pane_total, visible_hash, pane_width


def _terminal_next_payload(session_name: str, channel: dict) -> dict | None:
    """Capture one shared delta while maintaining a full reconnect snapshot."""
    pos = get_pane_position(session_name)
    current_total = int(pos.get("total_lines", 0))
    visible_hash = _visible_pane_hash(session_name)
    pane_width = get_pane_width(session_name)
    known = int(channel.get("pane_total", 0))
    full_text = str(channel.get("full_text", ""))

    if not full_text or current_total < known:
        payload, raw, total, vis, width = _terminal_full_payload(session_name)
        channel.update(
            full_text=raw, pane_total=total, visible_hash=vis, pane_width=width
        )
        return payload

    if current_total > known:
        overlap = 5
        lines_from_end = (current_total - known) + overlap
        raw = capture_pane_recent(session_name, lines_from_end)
        incoming = raw.split("\n")
        existing = full_text.split("\n")
        if len(existing) >= overlap and existing[-overlap:] == incoming[:overlap]:
            tail = incoming[overlap:]
            if tail:
                channel["full_text"] = full_text + "\n" + "\n".join(tail)
            channel.update(
                pane_total=current_total,
                visible_hash=visible_hash,
                pane_width=pane_width,
            )
            return {
                "mode": "delta",
                "raw": raw,
                "total_lines": current_total,
                "pane_total": current_total,
                "pane_width": pane_width,
                "overlap": overlap,
                "visible_hash": visible_hash,
            }
        payload, raw, total, vis, width = _terminal_full_payload(session_name)
        channel.update(
            full_text=raw, pane_total=total, visible_hash=vis, pane_width=width
        )
        return payload

    if visible_hash and visible_hash != channel.get("visible_hash"):
        payload, raw, total, vis, width = _terminal_full_payload(session_name)
        channel.update(
            full_text=raw, pane_total=total, visible_hash=vis, pane_width=width
        )
        return payload

    channel.update(visible_hash=visible_hash, pane_width=pane_width)
    return None


async def _terminal_send(writer: asyncio.StreamWriter, payload: dict) -> bool:
    try:
        writer.write((json.dumps(payload, separators=(",", ":")) + "\n").encode())
        await asyncio.wait_for(writer.drain(), timeout=3)
        return True
    except Exception:
        return False


async def _terminal_broadcast(session_name: str, payload: dict) -> None:
    channel = _terminal_channels.get(session_name)
    if not channel:
        return
    writers = list(channel.get("writers", set()))
    if not writers:
        return
    results = await asyncio.gather(
        *(_terminal_send(writer, payload) for writer in writers),
        return_exceptions=True,
    )
    for writer, ok in zip(writers, results):
        if ok is not True:
            channel["writers"].discard(writer)
            try:
                writer.close()
            except Exception:
                pass


async def _terminal_producer(session_name: str) -> None:
    channel = _terminal_channels[session_name]
    quiet_ticks = 0
    try:
        while channel.get("writers"):
            try:
                payload = await asyncio.to_thread(
                    _terminal_next_payload, session_name, channel
                )
                if payload:
                    quiet_ticks = 0
                    channel["last_emit"] = time.time()
                    await _terminal_broadcast(session_name, payload)
                else:
                    quiet_ticks += 1
                    if time.time() - channel.get("last_emit", 0) >= 20:
                        channel["last_emit"] = time.time()
                        await _terminal_broadcast(
                            session_name,
                            {
                                "mode": "ping",
                                "pane_total": channel.get("pane_total", 0),
                                "pane_width": channel.get("pane_width", 0),
                                "visible_hash": channel.get("visible_hash", ""),
                            },
                        )
            except Exception as exc:
                await _terminal_broadcast(
                    session_name, {"mode": "error", "error": str(exc)[:240]}
                )
                quiet_ticks += 1
            await asyncio.sleep(0.6 if quiet_ticks < 5 else min(2.0, 0.8 + quiet_ticks / 10))
    finally:
        channel["task"] = None
        if not channel.get("writers"):
            _terminal_channels.pop(session_name, None)


async def _terminal_subscribe(
    session_name: str, writer: asyncio.StreamWriter
) -> dict:
    channel = _terminal_channels.setdefault(
        session_name,
        {
            "writers": set(),
            "task": None,
            "full_text": "",
            "pane_total": 0,
            "visible_hash": "",
            "pane_width": 0,
            "last_emit": 0.0,
        },
    )
    channel["writers"].add(writer)
    if channel.get("full_text"):
        await _terminal_send(
            writer,
            {
                "mode": "full",
                "raw": channel["full_text"],
                "total_lines": len(channel["full_text"].split("\n")),
                "pane_total": channel.get("pane_total", 0),
                "pane_width": channel.get("pane_width", 0),
                "visible_hash": channel.get("visible_hash", ""),
            },
        )
    if not channel.get("task") or channel["task"].done():
        channel["task"] = asyncio.create_task(_terminal_producer(session_name))
    return channel


async def _terminal_unsubscribe(session_name: str, writer: asyncio.StreamWriter) -> None:
    channel = _terminal_channels.get(session_name)
    if not channel:
        return
    channel.get("writers", set()).discard(writer)
    if not channel.get("writers") and channel.get("task"):
        channel["task"].cancel()


def _session_tmux_activity(session_name: str) -> float:
    try:
        result = subprocess.run(
            ["tmux", "display-message", "-t", session_name, "-p", "#{session_activity}"],
            capture_output=True,
            text=True,
            timeout=5,
        )
        if result.returncode == 0:
            return float((result.stdout or "0").strip() or 0)
    except Exception:
        pass
    return 0.0


def _session_last_activity(session_name: str, created: float = 0) -> float:
    lifecycle = _session_lifecycle.get(session_name)
    return max(
        float(created or 0),
        _session_tmux_activity(session_name),
        float(lifecycle.get("last_interaction") or 0),
        float(lifecycle.get("resumed_at") or 0),
    )


def _session_has_autonomous_work(session_name: str) -> bool:
    if _away_mode_state.get(session_name, {}).get("enabled"):
        return True
    if _go_nuts_state.get(session_name, {}).get("enabled"):
        return True
    saved = _load_autonomous_state().get(session_name, {})
    return bool(saved.get("away_mode") or saved.get("go_nuts_mode"))


def _pane_is_dead(session_name: str) -> bool:
    try:
        result = subprocess.run(
            ["tmux", "display-message", "-t", session_name, "-p", "#{pane_dead}"],
            capture_output=True,
            text=True,
            timeout=5,
        )
        return result.returncode == 0 and (result.stdout or "").strip() == "1"
    except Exception:
        return False


def _archive_tmux_scrollback(session_name: str) -> str:
    """Persist a mode-600 copy in addition to tmux's remain-on-exit history."""
    try:
        target_dir = MESSAGES_DIR / "parked-scrollback"
        target_dir.mkdir(parents=True, exist_ok=True)
        target = target_dir / f"{session_name}.log"
        content = capture_pane_full(session_name)
        if content:
            tmp = target.with_suffix(".tmp")
            tmp.write_text(content)
            tmp.chmod(0o600)
            os.replace(tmp, target)
            return str(target)
    except Exception:
        logger.exception("Could not archive tmux scrollback for '%s'", session_name)
    return ""


def _restore_parked_tmux_shell(session_name: str, lifecycle: dict) -> bool:
    """Reanimate a dead/virtual pane without changing its worktree or transcript."""
    owner = _user_for_session(session_name)
    cwd = str(lifecycle.get("cwd") or "")
    if not cwd and _multi_tenant_enabled() and owner and not _is_admin(owner):
        cwd = str(PROJECTS_ROOT / str(owner.get("username") or "member") / session_name)
    if not cwd or not Path(cwd).is_dir():
        cwd = str(Path(__file__).resolve().parent)
    try:
        has_session = subprocess.run(
            ["tmux", "has-session", "-t", session_name],
            capture_output=True,
            text=True,
            timeout=5,
        ).returncode == 0
        if has_session and _pane_is_dead(session_name):
            result = subprocess.run(
                ["tmux", "respawn-pane", "-k", "-t", session_name, "-c", cwd],
                capture_output=True,
                text=True,
                timeout=10,
            )
        elif not has_session:
            result = subprocess.run(
                ["tmux", "new-session", "-d", "-s", session_name, "-c", cwd],
                capture_output=True,
                text=True,
                timeout=10,
            )
        else:
            return True
        if result.returncode != 0:
            logger.error("Could not restore parked tmux '%s': %s", session_name, result.stderr.strip())
            return False
        subprocess.run(
            ["tmux", "set-option", "-pt", session_name, "remain-on-exit", "on"],
            capture_output=True,
            text=True,
            timeout=5,
        )
        owner_name = ((owner or {}).get("username") or AUTH_USER or "admin")
        project_dir = str(PROJECTS_ROOT / owner_name / session_name)
        git_email = f"{owner_name}@{GIT_EMAIL_DOMAIN}"
        assignments = {
            "DASH_USER": owner_name,
            "DASH_SESSION": session_name,
            "DASH_PROJECT_DIR": project_dir,
            "DASH_PROJECT_URL": f"{PUB_URL}/{owner_name}/{session_name}",
            "GIT_AUTHOR_NAME": owner_name,
            "GIT_AUTHOR_EMAIL": git_email,
            "GIT_COMMITTER_NAME": owner_name,
            "GIT_COMMITTER_EMAIL": git_email,
        }
        if owner and not _is_admin(owner):
            assignments["CODEX_HOME"] = str(_user_codex_config_dir(owner))
        export = "export " + " ".join(
            f"{key}={shlex.quote(value)}" for key, value in assignments.items()
        )
        subprocess.run(
            ["tmux", "send-keys", "-t", session_name, "-l", export],
            capture_output=True,
            text=True,
            timeout=5,
        )
        subprocess.run(
            ["tmux", "send-keys", "-t", session_name, "Enter"],
            capture_output=True,
            text=True,
            timeout=5,
        )
        return True
    except Exception:
        logger.exception("Failed to restore parked tmux shell '%s'", session_name)
        return False


async def _park_session_local(session_name: str, last_activity: float) -> dict:
    """Checkpoint by gracefully exiting Codex; tmux, Git and rollouts remain intact."""
    if _terminal_channels.get(session_name, {}).get("writers"):
        return {"ok": False, "skipped": "terminal is being viewed"}
    if _session_has_autonomous_work(session_name):
        return {"ok": False, "skipped": "autonomous work is enabled"}
    activity = await async_detect_activity(session_name)
    if activity.get("status") != "idle":
        return {"ok": False, "skipped": f"session is {activity.get('status', 'unknown')}"}
    scrollback_file = await asyncio.to_thread(_archive_tmux_scrollback, session_name)
    session_cwd = await asyncio.to_thread(get_session_cwd, session_name)
    await asyncio.to_thread(
        subprocess.run,
        ["tmux", "set-option", "-pt", session_name, "remain-on-exit", "on"],
        capture_output=True,
        text=True,
        timeout=5,
    )
    if not await _async_is_codex_running(session_name):
        row = await asyncio.to_thread(
            _session_lifecycle.mark_parked,
            session_name,
            reason="inactive Codex was already stopped",
            last_activity=last_activity,
            cwd=session_cwd,
            scrollback_file=scrollback_file,
        )
        return {"ok": True, "parked": True, "session": row}

    await asyncio.to_thread(
        subprocess.run,
        ["tmux", "send-keys", "-t", session_name, "-l", _agent_quit_command(session_name)],
        capture_output=True,
        text=True,
        timeout=5,
    )
    await asyncio.to_thread(
        subprocess.run,
        ["tmux", "send-keys", "-t", session_name, "Enter"],
        capture_output=True,
        text=True,
        timeout=5,
    )
    for _ in range(15):
        await asyncio.sleep(1)
        if not await _async_is_codex_running(session_name):
            break
    if await _async_is_codex_running(session_name):
        # Codex may require one interrupt to leave an empty composer before it
        # accepts /quit. This is used only after an idle re-check.
        await asyncio.to_thread(
            subprocess.run,
            ["tmux", "send-keys", "-t", session_name, "C-c"],
            capture_output=True,
            text=True,
            timeout=5,
        )
        await asyncio.sleep(0.5)
        await asyncio.to_thread(
            subprocess.run,
            ["tmux", "send-keys", "-t", session_name, "-l", _agent_quit_command(session_name)],
            capture_output=True,
            text=True,
            timeout=5,
        )
        await asyncio.to_thread(
            subprocess.run,
            ["tmux", "send-keys", "-t", session_name, "Enter"],
            capture_output=True,
            text=True,
            timeout=5,
        )
        for _ in range(10):
            await asyncio.sleep(1)
            if not await _async_is_codex_running(session_name):
                break
    if await _async_is_codex_running(session_name):
        return {"ok": False, "error": "Codex did not exit cleanly; left running"}
    row = await asyncio.to_thread(
        _session_lifecycle.mark_parked,
        session_name,
        reason=f"inactive for at least {SESSION_PARK_AFTER}s",
        last_activity=last_activity,
        cwd=session_cwd,
        scrollback_file=scrollback_file,
    )
    _seen_claude_running.discard(session_name)
    logger.info("Parked inactive Codex session '%s' without removing tmux or state", session_name)
    return {"ok": True, "parked": True, "session": row}


async def _resume_parked_session(session_name: str, source: str = "dashboard") -> dict:
    row = await asyncio.to_thread(
        _session_lifecycle.touch, session_name, source=source
    )
    if not row.get("parked"):
        return {"ok": True, "parked": False, "resumed": False, "session": row}
    if row.get("virtual") or _pane_is_dead(session_name):
        restored = await asyncio.to_thread(
            _restore_parked_tmux_shell, session_name, row
        )
        if not restored:
            return {"ok": False, "error": "parked tmux shell could not be restored"}
    if not _find_session(session_name)[1]:
        return {"ok": False, "error": "session not found"}
    resumed = await _ensure_codex_running(session_name)
    if not resumed:
        return {"ok": False, "error": "Codex resume failed; tmux and state are intact"}
    row = await asyncio.to_thread(
        _session_lifecycle.mark_resumed, session_name, source=source
    )
    _seen_claude_running.add(session_name)
    logger.info("Resumed parked Codex session '%s' on demand", session_name)
    return {"ok": True, "parked": False, "resumed": True, "session": row}


async def _session_lifecycle_loop() -> None:
    await asyncio.sleep(20)
    while True:
        try:
            now = time.time()
            sessions = await asyncio.to_thread(get_tmux_sessions)
            for session in sessions:
                name = session["name"]
                lifecycle = _session_lifecycle.get(name)
                if lifecycle.get("parked") or _session_has_autonomous_work(name):
                    continue
                if _terminal_channels.get(name, {}).get("writers"):
                    continue
                last_activity = await asyncio.to_thread(
                    _session_last_activity, name, float(session.get("created") or 0)
                )
                if not last_activity or now - last_activity < SESSION_PARK_AFTER:
                    continue
                result = await _park_session_local(name, last_activity)
                if not result.get("ok") and result.get("error"):
                    logger.warning("Could not park '%s': %s", name, result["error"])
        except asyncio.CancelledError:
            raise
        except Exception:
            logger.exception("Session lifecycle pass failed")
        await asyncio.sleep(SESSION_LIFECYCLE_INTERVAL)


def _controller_runtime_data() -> dict:
    leases = _browser_leases.snapshot()
    lifecycle = _session_lifecycle.snapshot().get("sessions", {})
    browser_runtime = _browser_runtime.read().get("browsers", {})
    return {
        "version": 1,
        "controller_pid": os.getpid(),
        "updated_at": time.time(),
        "process_role": PROCESS_ROLE,
        "active_browser_leases": leases["active"],
        "browser_leases_by_session": leases["by_browser"],
        "browser_runtime": browser_runtime,
        "parked_sessions": sum(1 for row in lifecycle.values() if row.get("parked")),
        "session_lifecycle": lifecycle,
        "terminal_streams": len(_terminal_channels),
        "terminal_subscribers": sum(
            len(channel.get("writers", ())) for channel in _terminal_channels.values()
        ),
    }


async def _controller_snapshot_loop() -> None:
    while True:
        try:
            snapshot = _controller_runtime_data()

            def replace(value: dict, current: dict = snapshot) -> None:
                value.clear()
                value.update(current)

            await asyncio.to_thread(_controller_snapshot.update, replace)
        except asyncio.CancelledError:
            raise
        except Exception:
            logger.debug("Failed to write controller runtime snapshot", exc_info=True)
        await asyncio.sleep(10)


async def _controller_dispatch(message: dict) -> dict:
    op = str(message.get("op") or "")
    if op == "ping":
        return {"ok": True, "pid": os.getpid(), "role": PROCESS_ROLE}
    if op == "runtime":
        return {"ok": True, **_controller_runtime_data()}
    if op == "session_touch":
        row = await asyncio.to_thread(
            _session_lifecycle.touch,
            str(message.get("session") or ""),
            source=str(message.get("source") or "dashboard"),
        )
        return {"ok": True, "session": row}
    if op == "session_resume":
        return await _resume_parked_session(
            str(message.get("session") or ""),
            source=str(message.get("source") or "dashboard"),
        )
    if op == "session_register_virtual":
        name = str(message.get("session") or "")
        if not re.fullmatch(r"[A-Za-z0-9_.-]{1,128}", name):
            return {"ok": False, "error": "invalid session name"}
        row = await asyncio.to_thread(
            _session_lifecycle.mark_parked,
            name,
            reason=str(message.get("reason") or "recovered parked session"),
            last_activity=float(message.get("last_activity") or 0),
            cwd=str(message.get("cwd") or ""),
            virtual=True,
        )
        return {"ok": True, "session": row}
    if op == "browser_acquire":
        return await _acquire_browser_lease_local(
            str(message.get("browser_id") or ""),
            kind=str(message.get("kind") or "agent"),
            owner=str(message.get("owner") or ""),
            ttl=int(message.get("ttl") or BROWSER_LEASE_TTL),
            mode=str(message.get("mode") or "headless"),
        )
    if op == "browser_renew":
        lease = await asyncio.to_thread(
            _browser_leases.renew,
            str(message.get("token") or ""),
            int(message.get("ttl") or BROWSER_LEASE_TTL),
        )
        return {"ok": bool(lease), "lease": lease or {}}
    if op == "browser_release":
        released = await asyncio.to_thread(
            _browser_leases.release, str(message.get("token") or "")
        )
        return {"ok": released}
    if op == "browser_stop":
        sid = str(message.get("browser_id") or "")
        browser = _browser_session_by_id(sid)
        if not browser:
            return {"ok": False, "error": "browser session not found"}
        stopped = await _stop_browser_controlled(
            browser, reason=str(message.get("reason") or "requested")
        )
        return {"ok": stopped, "stopped": stopped}
    if op == "away_toggle":
        return await _away_toggle_local(
            str(message.get("session") or ""), bool(message.get("enabled"))
        )
    if op == "away_status":
        return {"ok": True, **_away_state_summary(
            _away_mode_state.get(str(message.get("session") or ""), {})
        )}
    if op == "go_nuts_toggle":
        return await _go_nuts_toggle_local(
            str(message.get("session") or ""), bool(message.get("enabled"))
        )
    if op == "go_nuts_status":
        return {"ok": True, **_go_nuts_state_summary(
            _go_nuts_state.get(str(message.get("session") or ""), {})
        )}
    if op == "watchdog_status":
        name = str(message.get("session") or "")
        return {
            "ok": True,
            "mode": _get_autopush_mode(name),
            "log": list(_simple_watchdog_log.get(name, []))[-_SIMPLE_WATCHDOG_MAX_LOG:],
        }
    if op == "autopush_set":
        name = str(message.get("session") or "")
        mode = str(message.get("mode") or "").lower()
        if mode not in AUTOPUSH_MODES:
            return {"ok": False, "error": f"mode must be one of {list(AUTOPUSH_MODES)}", "_status": 400}
        _autopush_mode[name] = mode
        _save_autopush_mode()
        if mode != "full":
            _simple_watchdog_state.pop(name, None)
        return {
            "ok": True,
            "mode": mode,
            "enabled": mode == "full",
            "log": list(_simple_watchdog_log.get(name, []))[-_SIMPLE_WATCHDOG_MAX_LOG:],
        }
    return {"ok": False, "error": f"unknown controller operation: {op}"}


async def _controller_client(
    reader: asyncio.StreamReader, writer: asyncio.StreamWriter
) -> None:
    session_name = ""
    subscribed = False
    try:
        line = await asyncio.wait_for(reader.readline(), timeout=10)
        message = json.loads(line.decode("utf-8", "replace"))
        if message.get("op") == "terminal_subscribe":
            session_name = str(message.get("session") or "")
            if not _is_valid_session_name(session_name) or not _find_session(session_name)[1]:
                await _terminal_send(writer, {"mode": "error", "error": "Session not found"})
                return
            await _resume_parked_session(session_name, source="terminal-stream")
            await _terminal_subscribe(session_name, writer)
            subscribed = True
            await reader.read()
            return
        response = await _controller_dispatch(message)
        writer.write((json.dumps(response, separators=(",", ":")) + "\n").encode())
        await writer.drain()
    except Exception as exc:
        try:
            writer.write((json.dumps({"ok": False, "error": str(exc)[:240]}) + "\n").encode())
            await writer.drain()
        except Exception:
            pass
    finally:
        if subscribed:
            await _terminal_unsubscribe(session_name, writer)
        try:
            writer.close()
            await writer.wait_closed()
        except Exception:
            pass


async def _start_controller_socket() -> None:
    global _controller_server
    CONTROLLER_SOCKET.parent.mkdir(parents=True, exist_ok=True)
    try:
        CONTROLLER_SOCKET.unlink()
    except FileNotFoundError:
        pass
    _controller_server = await asyncio.start_unix_server(
        _controller_client, path=str(CONTROLLER_SOCKET), limit=1024 * 1024
    )
    CONTROLLER_SOCKET.chmod(0o600)
    logger.info("Controller IPC listening on %s", CONTROLLER_SOCKET)


async def _stop_controller_socket() -> None:
    global _controller_server
    if _controller_server:
        _controller_server.close()
        await _controller_server.wait_closed()
        _controller_server = None
    try:
        CONTROLLER_SOCKET.unlink()
    except FileNotFoundError:
        pass


async def _controller_call(op: str, **fields) -> dict:
    """Call the controller from an API worker, or dispatch locally in dev."""
    message = {"op": op, **fields}
    if PROCESS_ROLE != "api":
        return await _controller_dispatch(message)
    last_error = "controller unavailable"
    for _ in range(10):
        try:
            reader, writer = await asyncio.open_unix_connection(
                str(CONTROLLER_SOCKET), limit=32 * 1024 * 1024
            )
            writer.write((json.dumps(message, separators=(",", ":")) + "\n").encode())
            await writer.drain()
            line = await asyncio.wait_for(reader.readline(), timeout=30)
            writer.close()
            await writer.wait_closed()
            return json.loads(line.decode("utf-8", "replace"))
        except Exception as exc:
            last_error = str(exc)
            await asyncio.sleep(0.2)
    return {"ok": False, "error": last_error}


async def _controller_terminal_connection(session_name: str):
    if PROCESS_ROLE != "api":
        return None, None
    reader, writer = await asyncio.open_unix_connection(
        str(CONTROLLER_SOCKET), limit=32 * 1024 * 1024
    )
    writer.write((json.dumps({"op": "terminal_subscribe", "session": session_name}) + "\n").encode())
    await writer.drain()
    return reader, writer


@app.websocket("/ws/sessions/{session_name}/raw")
async def ws_session_raw(ws: WebSocket, session_name: str):
    if AUTH_PASS and not _check_token(ws.cookies.get(AUTH_COOKIE)):
        await ws.close(code=1008)
        return
    user = _current_user(ws)
    if not _user_can_access_session(user, session_name):
        await ws.close(code=1008)
        return
    await ws.accept()
    reader = writer = None
    local_writer = None
    try:
        if PROCESS_ROLE == "api":
            reader, writer = await _controller_terminal_connection(session_name)

            async def forward_terminal():
                while True:
                    line = await reader.readline()
                    if not line:
                        raise ConnectionError("controller stream closed")
                    await ws.send_text(line.decode("utf-8", "replace").rstrip("\n"))
        else:
            local_writer = _TerminalQueueWriter()
            await _resume_parked_session(session_name, source="terminal-stream")
            await _terminal_subscribe(session_name, local_writer)

            async def forward_terminal():
                while True:
                    line = await local_writer.queue.get()
                    await ws.send_text(line.decode("utf-8", "replace").rstrip("\n"))

        async def watch_client():
            while True:
                message = await ws.receive()
                if message["type"] == "websocket.disconnect":
                    return

        tasks = {asyncio.create_task(forward_terminal()), asyncio.create_task(watch_client())}
        done, pending = await asyncio.wait(tasks, return_when=asyncio.FIRST_COMPLETED)
        for task in pending:
            task.cancel()
        await asyncio.gather(*pending, return_exceptions=True)
        for task in done:
            task.result()
    except WebSocketDisconnect:
        pass
    except Exception as exc:
        logger.warning("raw websocket ended for '%s': %s: %s", session_name, type(exc).__name__, exc)
        try:
            await ws.close()
        except Exception:
            pass
    finally:
        if writer:
            writer.close()
            try:
                await writer.wait_closed()
            except Exception:
                pass
        if local_writer:
            await _terminal_unsubscribe(session_name, local_writer)
            local_writer.close()


class CreateSession(BaseModel):
    name: str = ""
    agent: str = "codex"        # "codex" | "claude"
    # Optional workspace to attach to the new session. The agent always runs on
    # the dashboard host (it needs CODEX_HOME, the advisor token and the owner's
    # auth files); this only decides which folder the IDE opens and, for an SSH
    # target, adds an interactive remote window to the session.
    workspace: str = ""          # "" | "local" | "ssh"
    workspace_root: str = ""
    reuse_connection_id: str = ""
    ssh_host: str = ""
    ssh_username: str = ""
    ssh_port: int = 22
    ssh_auth_mode: str = "agent"
    ssh_identity_file: str = ""
    ssh_password: str = ""
    private_key: str = ""
    workspace_label: str = ""



async def _attach_session_workspace(
    request: Request, session_name: str, body: CreateSession, user: dict | None
) -> dict:
    """Create the new session's IDE workspace, reusing a saved host when asked.

    Returns a small report rather than raising: the tmux session already exists
    by this point, so a bad host must not turn a successful session creation
    into a failure. The caller surfaces `warning` instead.
    """
    kind = (body.workspace or "").strip().lower()
    if kind not in {"local", "ssh"}:
        return {}

    payload = None
    if body.reuse_connection_id:
        # Reuse: clone one of this user's existing profiles onto the new session
        # so a host is configured once. Stored secrets are NOT copied -- the
        # ciphertext is bound to its original connection id by the GCM AAD, so a
        # password target re-authenticates and re-seals under the new id.
        source = next(
            (
                profile
                for profile in (_ssh_connections_store().read() or {}).get("connections", [])
                if isinstance(profile, dict)
                and profile.get("id") == body.reuse_connection_id
                and _ssh_user_may_use_profile(user, profile)
            ),
            None,
        )
        if not source:
            return {"warning": "That saved connection is no longer available"}
        payload = SSHConnectionBody(
            kind=str(source.get("kind") or "ssh"),
            label=str(source.get("label") or ""),
            host=str(source.get("host") or ""),
            username=str(source.get("username") or ""),
            port=int(source.get("port") or 22),
            identity_file=str(source.get("identity_file") or ""),
            auth_mode=str(source.get("auth_mode") or "agent"),
            password=body.ssh_password or "",
            workspace_root=str(body.workspace_root or source.get("workspace_root") or "."),
            max_file_bytes=int(source.get("max_file_bytes") or SSH_MAX_FILE_BYTES),
        )
    elif kind == "local":
        payload = SSHConnectionBody(
            kind="local",
            label=body.workspace_label or "",
            workspace_root=body.workspace_root or "",
        )
    else:
        payload = SSHConnectionBody(
            kind="ssh",
            label=body.workspace_label or "",
            host=body.ssh_host,
            username=body.ssh_username,
            port=body.ssh_port,
            identity_file=body.ssh_identity_file,
            auth_mode=body.ssh_auth_mode,
            password=body.ssh_password,
            private_key=body.private_key,
            workspace_root=body.workspace_root or ".",
        )

    response = await api_create_ssh_connection(request, session_name, payload)
    created = json.loads(bytes(response.body).decode("utf-8") or "{}")
    if response.status_code != 201:
        return {"warning": created.get("error") or "Could not attach the workspace"}

    connection = created.get("connection") or {}
    connection_id = str(connection.get("id") or "")
    result = {"connection": connection}
    # Connecting is best-effort: an unreachable host still leaves a usable
    # session and a saved workspace the user can retry from the IDE.
    try:
        connect = await api_connect_ssh_connection(
            request, session_name, connection_id, SSHConnectBody(password=body.ssh_password or "")
        )
        if connect.status_code != 200:
            detail = json.loads(bytes(connect.body).decode("utf-8") or "{}")
            result["warning"] = detail.get("error") or "Workspace saved, but connecting failed"
    except Exception as exc:  # noqa: BLE001 - never fail session creation
        logger.info("Workspace attach could not connect for %s", session_name, exc_info=True)
        result["warning"] = str(exc)[:200] or "Workspace saved, but connecting failed"
    return result


@app.post("/api/sessions/create")
async def api_create_session(request: Request, body: CreateSession):
    """Create a new tmux session."""
    user = _current_user(request)
    name = body.name.strip()
    if name:
        # Validate name: alphanumeric, dash, underscore only
        if not _is_valid_session_name(name):
            return JSONResponse(
                {"error": "Invalid name — no spaces or symbols. Use letters, numbers, "
                          "dots, dashes or underscores, for example 'my-project'."},
                status_code=400,
            )
        existing = [s["name"] for s in get_tmux_sessions()]
        if name in existing:
            return JSONResponse({"error": f"Session '{name}' already exists."}, status_code=409)
    # A stored API key is the recovery credential when a managed ChatGPT token
    # can no longer be refreshed. Validate/switch before launching the new pane.
    auth_home = _user_codex_config_dir(user)
    if user and not _is_admin(user):
        _ensure_user_codex_config_dir(user)
        if not (auth_home / "advisor-token").is_file():
            return JSONResponse(
                {"error": "This account's private data connection is not provisioned"},
                status_code=503,
            )
    await asyncio.to_thread(_ensure_codex_auth_with_fallback, auth_home, True)
    ready, reason, details = await asyncio.to_thread(_codex_cli_readiness)
    if not ready:
        return JSONResponse(
            {"error": f"Codex launch blocked: {reason}", "codex": details},
            status_code=503,
        )
    try:
        cmd = ["tmux", "new-session", "-d"]
        if name:
            cmd += ["-s", name]
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=5)
        if result.returncode != 0:
            detail = result.stderr.strip() or "Failed to create session"
            # tmux rejects a name already taken by a session the dashboard does
            # not list; report that as a conflict rather than a server error.
            if "duplicate session" in detail.lower():
                return JSONResponse(
                    {"error": f"Session '{name}' already exists."}, status_code=409
                )
            return JSONResponse({"error": detail}, status_code=500)
        # Find the new session name (if auto-named)
        sessions = get_tmux_sessions()
        if name:
            created = name
        else:
            created = sessions[-1]["name"] if sessions else "unknown"
        # Record which agent this session runs before anything builds its launch
        # command, so _session_launch_base/_session_launch_command see it.
        _agent = (body.agent or "codex").strip().lower()
        if _agent not in {"codex", "claude"}:
            _agent = "codex"
        if _agent == "claude" and not shutil.which("claude"):
            # Fall back rather than launching a command that cannot exist; the
            # session is still usable and the reason is reported to the caller.
            logger.warning("Claude requested for %s but the CLI is not installed", created)
            _agent = "codex"
            _agent_warning = "Claude is not installed on this server — started Codex instead"
        else:
            _agent_warning = ""
        _set_session_agent(created, _agent)
        # Persist the working directory now, while the session exists. The
        # restore path recreates a session with `tmux new-session -c <cwd>`, so
        # without this a session that outlives its tmux server comes back in the
        # wrong directory -- or cannot be identified as restorable at all. Ask
        # tmux what it actually resolved rather than recomputing the guess.
        try:
            _created_cwd = subprocess.run(
                ["tmux", "display-message", "-p", "-t", f"{created}:", "#{pane_current_path}"],
                capture_output=True, text=True, timeout=5,
            ).stdout.strip()
        except (OSError, subprocess.SubprocessError):
            _created_cwd = ""
        try:
            _session_lifecycle.touch(created, source="create", cwd=_created_cwd)
        except Exception:  # noqa: BLE001 - state is best-effort, never block create
            logger.warning("Could not record lifecycle for '%s'", created, exc_info=True)
        if _agent == "claude":
            # Claude asks a per-folder trust question on first use of a
            # directory. A detached pane cannot answer it, so pre-accept it for
            # the folder this session will work in — the user already owns it,
            # and the alternative is a session that hangs on a prompt forever.
            try:
                _cfg_dir = (
                    _user_claude_config_dir(user)
                    if (user and not _is_admin(user))
                    else Path.home() / ".claude"
                )
                # A member's pane starts in their project dir; an admin's starts
                # in the dashboard directory. Seed both rather than guessing,
                # since trust is keyed on the exact path.
                for _cwd in {
                    str(PROJECTS_ROOT / ((user or {}).get("username") or "admin") / created),
                    str(Path(__file__).resolve().parent),
                }:
                    _seed_trust(_cfg_dir, _cwd)
            except Exception:
                logger.debug("Could not seed Claude trust for %s", created, exc_info=True)
        # Record session ownership. If auth is disabled, fall back to admin.
        owner_id = user["id"] if user else "admin"
        _set_session_owner(created, owner_id)
        # Export project-publishing convention env vars so Codex can publish to
        # https://dianaotech.com/<username>/<session> reliably (see global context).
        try:
            _owner_name = (user.get("username") if user else AUTH_USER) or "admin"
            _proj_dir = str(PROJECTS_ROOT / _owner_name / created)
            _pub_base = PUB_URL
            # Per-user git identity: every member shares ONE OS user, so set the
            # commit author/committer per session → commits are attributed to the
            # right person. Push still uses the box's shared GitHub creds.
            _git_email = f"{_owner_name}@{GIT_EMAIL_DOMAIN}"
            _exports = ("export DASH_USER={} DASH_SESSION={} DASH_PROJECT_DIR={} DASH_PROJECT_URL={} "
                        "GIT_AUTHOR_NAME={} GIT_AUTHOR_EMAIL={} GIT_COMMITTER_NAME={} GIT_COMMITTER_EMAIL={}".format(
                shlex.quote(_owner_name), shlex.quote(created),
                shlex.quote(_proj_dir), shlex.quote(f"{_pub_base}/{_owner_name}/{created}"),
                shlex.quote(_owner_name), shlex.quote(_git_email),
                shlex.quote(_owner_name), shlex.quote(_git_email)))
            subprocess.run(["tmux", "send-keys", "-t", created, "-l", _exports], capture_output=True, text=True, timeout=5)
            subprocess.run(["tmux", "send-keys", "-t", created, "Enter"], capture_output=True, text=True, timeout=5)
        except Exception:
            logger.debug("Failed to export DASH_* project env for %s", created, exc_info=True)
        # Admins don't receive the member global block, so give them the projects
        # convention directly (members already have it in their global context).
        try:
            if _multi_tenant_enabled() and _is_admin(user):
                acfg = _user_codex_config_dir(user)
                _sync_projects_note_into(acfg / "AGENTS.md")
                _ensure_google_mcp(acfg, user)
                _set_team_model_effort(acfg)
                _sync_git_rules_into(acfg / "AGENTS.md")
        except Exception:
            logger.debug("Failed to harden admin team config", exc_info=True)
        # Bind both CODEX_HOME and the advisor identity to the session owner.
        # An unbound member pane would inherit the admin token from the shared
        # Unix login shell, so a failed export is a hard launch failure.
        if not _send_session_owner_environment(created):
            subprocess.run(
                ["tmux", "kill-session", "-t", created],
                capture_output=True,
                text=True,
                timeout=5,
            )
            _clear_session_owner(created)
            return JSONResponse(
                {"error": "Could not bind the session to its account"},
                status_code=503,
            )
        # Authenticate non-admin sessions from the shared Codex auth file.
        # Admin sessions use the default ~/.codex login directly.
        if user and not _is_admin(user):
            _session_auth_mode[created] = _apply_member_auth(_user_codex_config_dir(user))
        else:
            try:
                mode = json.loads((CODEX_HOME / "auth.json").read_text()).get("auth_mode")
            except Exception:
                mode = ""
            _session_auth_mode[created] = (
                "subscription" if mode == "chatgpt"
                else "api" if mode == "apikey"
                else "unconfigured"
            )
        # Optionally launch a command in the new session. Members pin their model
        # in the isolated account config; admins use the dashboard default.
        if NEW_SESSION_CMD:
            _pin_model = not (user and not _is_admin(user))
            subprocess.run(
                ["tmux", "send-keys", "-t", created, "-l",
                 _session_launch_command(
                     created, _session_launch_base(created, user), pin_model=_pin_model
                 )],
                capture_output=True, text=True, timeout=5
            )
            subprocess.run(
                ["tmux", "send-keys", "-t", created, "Enter"],
                capture_output=True, text=True, timeout=5
            )
        logger.info("Session created: '%s' (auth_mode=%s)", created, _session_auth_mode.get(created, "unknown"))
        payload = {"ok": True, "name": created, "agent": _agent}
        if _agent_warning:
            payload["warning"] = _agent_warning
        attached = await _attach_session_workspace(request, created, body, user)
        if attached.get("connection"):
            payload["connection"] = attached["connection"]
        if attached.get("warning"):
            payload["warning"] = attached["warning"]
        return JSONResponse(payload)
    except Exception as e:
        logger.error("Failed to create session '%s': %s", name, e)
        return JSONResponse({"error": str(e)}, status_code=500)


@app.delete("/api/sessions/{session_name}")
async def api_delete_session(request: Request, session_name: str):
    """Kill a tmux session and all its child processes."""
    user = _current_user(request)
    _, sess = _find_session_for_user(session_name, user)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    if sess.get("virtual"):
        await asyncio.to_thread(_session_lifecycle.remove, session_name)
        _clear_session_owner(session_name)
        _clear_session_agent(session_name)
        return JSONResponse({"ok": True, "killed": session_name, "virtual": True})
    try:
        # First, find and kill all processes in the session's panes.
        # This ensures Codex (node) processes are terminated cleanly
        # before the tmux session is destroyed.
        try:
            # Get all pane PIDs in this session
            pane_result = subprocess.run(
                ["tmux", "list-panes", "-t", session_name, "-F", "#{pane_pid}"],
                capture_output=True, text=True, timeout=5
            )
            if pane_result.returncode == 0:
                for pid_str in pane_result.stdout.strip().split("\n"):
                    pid_str = pid_str.strip()
                    if not pid_str:
                        continue
                    # Kill the entire process group rooted at this pane's shell
                    # This catches Codex (node), any background tasks, etc.
                    try:
                        subprocess.run(
                            ["pkill", "-TERM", "-P", pid_str],
                            capture_output=True, text=True, timeout=3
                        )
                    except Exception:
                        logger.debug("pkill -TERM failed for pid %s", pid_str, exc_info=True)
                # Brief pause to let processes handle SIGTERM
                await asyncio.sleep(0.5)
                # Force-kill any remaining children
                for pid_str in pane_result.stdout.strip().split("\n"):
                    pid_str = pid_str.strip()
                    if not pid_str:
                        continue
                    try:
                        subprocess.run(
                            ["pkill", "-KILL", "-P", pid_str],
                            capture_output=True, text=True, timeout=3
                        )
                    except Exception:
                        logger.debug("pkill -KILL failed for pid %s", pid_str, exc_info=True)
        except Exception:
            logger.debug("Process cleanup failed for session '%s' — kill-session will still clean up", session_name, exc_info=True)

        result = subprocess.run(
            ["tmux", "kill-session", "-t", session_name],
            capture_output=True, text=True, timeout=5
        )
        if result.returncode != 0:
            return JSONResponse({"error": result.stderr.strip() or "Failed to kill session"}, status_code=500)
        # Clean up all per-session state from global dicts
        cache.pop(session_name, None)
        _auto_approve_sent.pop(session_name, None)
        _pane_stability.pop(session_name, None)
        _activity_state.pop(session_name, None)
        _session_stats_cache.pop(session_name, None)
        _auto_respond_cooldown.pop(session_name, None)
        _session_auth_mode.pop(session_name, None)
        _away_mode_state.pop(session_name, None)
        # Cancel go-nuts worker if running
        gn_state = _go_nuts_state.get(session_name, {})
        if gn_state.get("task") and not gn_state["task"].done():
            gn_state["task"].cancel()
        _go_nuts_state.pop(session_name, None)
        _simple_watchdog_state.pop(session_name, None)
        _simple_watchdog_log.pop(session_name, None)
        _crash_recovery_state.pop(session_name, None)
        _seen_claude_running.discard(session_name)
        if session_name in _simple_watchdog_disabled:
            _simple_watchdog_disabled.discard(session_name)
            _save_simple_watchdog_disabled()
        # Drop the ownership record. Messages/notes are kept on disk so they
        # show up in the user's History tab even after the live session dies.
        _clear_session_owner(session_name)
        _clear_session_agent(session_name)
        await asyncio.to_thread(_session_lifecycle.remove, session_name)
        logger.info("Session deleted: '%s'", session_name)
        return JSONResponse({"ok": True, "killed": session_name})
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)


def get_session_cwd(session_name: str) -> str:
    """Get the current working directory of a tmux session's active pane."""
    try:
        result = subprocess.run(
            ["tmux", "display-message", "-t", session_name, "-p", "#{pane_current_path}"],
            capture_output=True, text=True, timeout=5
        )
        if result.returncode == 0 and result.stdout.strip():
            return result.stdout.strip()
    except Exception:
        logger.debug("Failed to get CWD for session '%s'", session_name, exc_info=True)
    return ""


UPLOADS_DIR = MESSAGES_DIR / "uploads"


def _session_uploads_dir(session_name: str) -> Path:
    return _user_uploads_dir(_user_for_session(session_name)) / session_name


@app.post("/api/sessions/{session_name}/upload")
async def api_upload_file(session_name: str, file: UploadFile = File(...)):
    """Upload a file to a session-specific uploads dir; record only in this session's chat history."""
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)

    # Sanitize filename — keep only the basename
    filename = os.path.basename(file.filename or "upload")
    if not filename or filename.startswith("."):
        return JSONResponse({"error": "Invalid filename"}, status_code=400)

    # Save under the owning account's data root, never another tenant's tree.
    uploads_dir = _session_uploads_dir(session_name)
    uploads_dir.mkdir(parents=True, exist_ok=True)
    dest = str(uploads_dir / filename)
    try:
        content = await file.read()
        max_size = 50 * 1024 * 1024  # 50 MB
        if len(content) > max_size:
            return JSONResponse({"error": f"File too large ({len(content) / 1024 / 1024:.1f} MB). Max is 50 MB."}, status_code=413)
        with open(dest, "wb") as f:
            f.write(content)
        # Per-session record only — never touch the project AGENTS.md, which is
        # shared across every session running in the same cwd.
        size_kb = len(content) / 1024
        note = f"Uploaded {filename} ({size_kb:.1f} KB) to {dest}"
        now = time.time()
        entry = cache.setdefault(session_name, {})
        if "messages" not in entry:
            entry["messages"] = _load_session_messages(session_name)
        entry["messages"].append({"role": "user", "text": note, "ts": now})
        _save_messages()
        return JSONResponse({"ok": True, "path": dest, "size": len(content)})
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)


@app.get("/api/sessions/{session_name}/uploads")
async def api_list_uploads(session_name: str):
    """List previously uploaded files for a session (newest first)."""
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    uploads_dir = _session_uploads_dir(session_name)
    files = []
    if uploads_dir.exists():
        for entry in uploads_dir.iterdir():
            if not entry.is_file():
                continue
            try:
                st = entry.stat()
                files.append({
                    "name": entry.name,
                    "path": str(entry),
                    "size": st.st_size,
                    "mtime": st.st_mtime,
                })
            except Exception:
                continue
    files.sort(key=lambda f: f["mtime"], reverse=True)
    return JSONResponse({"files": files})


@app.delete("/api/sessions/{session_name}/uploads/{filename}")
async def api_delete_upload(session_name: str, filename: str):
    """Remove a previously uploaded file from the session uploads dir."""
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    safe_name = os.path.basename(filename)
    if not safe_name or safe_name.startswith("."):
        return JSONResponse({"error": "Invalid filename"}, status_code=400)
    target = _session_uploads_dir(session_name) / safe_name
    try:
        if target.exists() and target.is_file():
            target.unlink()
            return JSONResponse({"ok": True})
        return JSONResponse({"error": "File not found"}, status_code=404)
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)


# --- AGENTS.md viewer/editor ---

@app.get("/api/sessions/{session_name}/codex-md")
async def api_get_codex_md(session_name: str):
    """Read project and account AGENTS.md files for this session."""
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    cwd = get_session_cwd(session_name)
    results = []
    # Check session CWD
    if cwd:
        md_path = os.path.join(cwd, "AGENTS.md")
        content = ""
        if os.path.exists(md_path):
            try:
                with open(md_path) as f:
                    content = f.read()
            except Exception:
                logger.debug("Failed to read AGENTS.md at %s", md_path, exc_info=True)
        results.append({"path": md_path, "content": content, "exists": os.path.exists(md_path), "label": "Project"})
    # Members get their isolated CODEX_HOME instructions. Keep the legacy
    # ~/AGENTS.md location for admin sessions for backwards compatibility.
    owner = _user_for_session(session_name)
    home_md = str(
        (_user_codex_config_dir(owner) / "AGENTS.md")
        if owner and not _is_admin(owner)
        else (Path.home() / "AGENTS.md")
    )
    home_content = ""
    if os.path.exists(home_md):
        try:
            with open(home_md) as f:
                home_content = f.read()
        except Exception:
            logger.debug("Failed to read global AGENTS.md at %s", home_md, exc_info=True)
    results.append({"path": home_md, "content": home_content, "exists": os.path.exists(home_md), "label": "Global"})
    return JSONResponse({"files": results, "cwd": cwd or ""})


class SaveCodexMd(BaseModel):
    path: str
    content: str


@app.post("/api/sessions/{session_name}/codex-md")
async def api_save_codex_md(session_name: str, body: SaveCodexMd):
    """Save AGENTS.md to the specified path."""
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    # Safety: only the project AGENTS.md and this account's own global file are
    # valid. Merely being somewhere under the shared OS home is not isolation.
    if not body.path.endswith("AGENTS.md"):
        return JSONResponse({"error": "Can only write AGENTS.md files"}, status_code=400)
    real_path = os.path.realpath(body.path)
    if not real_path.endswith("/AGENTS.md"):
        return JSONResponse({"error": "Invalid path after resolution"}, status_code=400)
    owner = _user_for_session(session_name)
    global_path = (
        _user_codex_config_dir(owner) / "AGENTS.md"
        if owner and not _is_admin(owner)
        else Path.home() / "AGENTS.md"
    )
    allowed = {os.path.realpath(str(global_path))}
    cwd = get_session_cwd(session_name)
    if cwd:
        allowed.add(os.path.realpath(str(Path(cwd) / "AGENTS.md")))
    if real_path not in allowed:
        return JSONResponse({"error": "Path is outside this session's project and account"}, status_code=403)
    try:
        os.makedirs(os.path.dirname(real_path), exist_ok=True)
        _backup_before_dashboard_write(Path(real_path))
        with open(real_path, "w") as f:
            f.write(body.content)
        if owner and not _is_admin(owner) and real_path == os.path.realpath(str(global_path)):
            _ensure_user_codex_config_dir(owner)
        return JSONResponse({"ok": True, "path": real_path})
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)


# The global AGENTS.md is edited through /api/context-files, alongside the
# reference docs it links to, so the whole set is visible in one place.


# --- Session-scoped auto-memory (project MEMORY.md + sibling topic files) ---
# Codex reads MEMORY.md from `<CODEX_HOME>/projects/<encoded-cwd>/memory/MEMORY.md`,
# where the encoded path replaces `/` and `_` with `-`. We mirror that here.

def _encode_project_path(cwd: str) -> str:
    """Mirror Codex's project-dir encoding: replace `/` and `_` with `-`."""
    return (cwd or "").replace("/", "-").replace("_", "-")


def _session_config_base(session_name: str) -> Path:
    """Resolve the CODEX_HOME a session actually uses.

    Members use their isolated ``~/.codex-user-<id>/`` directory. Admin
    sessions use the one standard dashboard Codex home.
    """
    owner = _user_for_session(session_name)
    if owner and not _is_admin(owner):
        return _user_codex_config_dir(owner)
    return CODEX_HOME


def _session_memory_dir(session_name: str) -> tuple[Path, str]:
    """Resolve the project memory directory for an account and workdir."""
    cwd = get_session_cwd(session_name) or ""
    encoded = _encode_project_path(cwd)
    base = _session_config_base(session_name)
    mem_dir = base / "projects" / encoded / "memory"
    return mem_dir, cwd


_MEMORY_EXTRA_RE = re.compile(r"^[A-Za-z0-9._-]+\.md$")


def _sanitize_memory_filename(name: str) -> str:
    name = os.path.basename(name or "")
    if not _MEMORY_EXTRA_RE.match(name):
        return ""
    return name


@app.get("/api/sessions/{session_name}/memory-md")
async def api_get_session_memory_md(session_name: str):
    """Read auto-memory for the session owner's account and working directory."""
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    mem_dir, cwd = _session_memory_dir(session_name)
    if not cwd:
        return JSONResponse({"error": "Could not determine session cwd"}, status_code=400)
    mpath = mem_dir / "MEMORY.md"
    content = ""
    if mpath.exists():
        try:
            content = mpath.read_text()
        except Exception:
            logger.debug("Failed to read session MEMORY.md at %s", mpath, exc_info=True)
    return JSONResponse({
        "path": str(mpath), "content": content, "exists": mpath.exists(),
        "dir": str(mem_dir), "cwd": cwd,
    })


@app.post("/api/sessions/{session_name}/memory-md")
async def api_save_session_memory_md(session_name: str, body: SaveCodexMd):
    """Save the auto-memory MEMORY.md (creates dir if missing)."""
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    mem_dir, cwd = _session_memory_dir(session_name)
    if not cwd:
        return JSONResponse({"error": "Could not determine session cwd"}, status_code=400)
    mpath = mem_dir / "MEMORY.md"
    # Path safety: ensure mpath stays inside the account's memory directory.
    try:
        if not str(mpath.resolve().parent) == str(mem_dir.resolve()):
            return JSONResponse({"error": "Invalid path"}, status_code=400)
    except Exception:
        pass
    real_target = os.path.realpath(body.path)
    if real_target != os.path.realpath(str(mpath)):
        return JSONResponse({"error": "Path mismatch"}, status_code=400)
    try:
        mem_dir.mkdir(parents=True, exist_ok=True)
        mpath.write_text(body.content)
        return JSONResponse({"ok": True, "path": str(mpath)})
    except Exception:
        logger.exception("Failed to save session MEMORY.md")
        return JSONResponse({"error": "Failed to save"}, status_code=500)


@app.get("/api/sessions/{session_name}/memory-extras")
async def api_list_session_memory_extras(session_name: str):
    """List sibling .md topic files alongside MEMORY.md (excludes MEMORY.md itself)."""
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    mem_dir, cwd = _session_memory_dir(session_name)
    files = []
    if mem_dir.exists():
        for p in sorted(mem_dir.iterdir()):
            if not (p.is_file() and p.suffix == ".md"):
                continue
            if p.name.upper() == "MEMORY.MD":
                continue
            try:
                files.append({"name": p.name, "content": p.read_text(),
                              "size": p.stat().st_size})
            except Exception:
                logger.debug("Failed to read memory topic %s", p, exc_info=True)
    return JSONResponse({"files": files, "dir": str(mem_dir), "cwd": cwd})


@app.post("/api/sessions/{session_name}/memory-extras")
async def api_save_session_memory_extra(session_name: str, body: SkillFileBody):
    """Create or update a topic file in the session's memory dir."""
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    mem_dir, cwd = _session_memory_dir(session_name)
    if not cwd:
        return JSONResponse({"error": "Could not determine session cwd"}, status_code=400)
    fname = _sanitize_memory_filename(body.name)
    if not fname:
        return JSONResponse({"error": "Invalid filename. Use alphanumerics/dots/dashes/underscores ending in .md."}, status_code=400)
    if fname.upper() == "MEMORY.MD":
        return JSONResponse({"error": "MEMORY.md has its own editor."}, status_code=400)
    mem_dir.mkdir(parents=True, exist_ok=True)
    fpath = mem_dir / fname
    if not str(fpath.resolve()).startswith(str(mem_dir.resolve()) + os.sep):
        return JSONResponse({"error": "Invalid path"}, status_code=400)
    try:
        fpath.write_text(body.content)
        return JSONResponse({"ok": True, "name": fname})
    except Exception:
        logger.exception("Failed to save memory topic file")
        return JSONResponse({"error": "Failed to save file"}, status_code=500)


@app.delete("/api/sessions/{session_name}/memory-extras/{filename}")
async def api_delete_session_memory_extra(session_name: str, filename: str):
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    mem_dir, _cwd = _session_memory_dir(session_name)
    fname = _sanitize_memory_filename(filename)
    if not fname or fname.upper() == "MEMORY.MD":
        return JSONResponse({"error": "Invalid filename"}, status_code=400)
    fpath = mem_dir / fname
    if not str(fpath.resolve()).startswith(str(mem_dir.resolve()) + os.sep):
        return JSONResponse({"error": "Invalid path"}, status_code=400)
    if fpath.exists():
        try:
            fpath.unlink()
        except Exception:
            logger.exception("Failed to delete memory topic file")
            return JSONResponse({"error": "Failed to delete"}, status_code=500)
    return JSONResponse({"ok": True})


# --- Context files: the canonical set Codex reads on this host ---
#
# NB: this module uses `from __future__ import annotations`, so a body model must
# be defined ABOVE the route that annotates it — otherwise FastAPI cannot resolve
# the string annotation at registration time and silently demotes it to a query
# parameter.
class ContextFileBody(BaseModel):
    name: str        # registry id, not a path
    content: str





def _first_existing_path(paths: list[Path]) -> Path:
    """Return the first existing candidate, or the preferred path if none exist."""
    return next((path for path in paths if path.exists()), paths[0])


def _context_file_entries():
    """Resolve fixed registry candidates plus existing per-host infra details."""
    entries = []
    for configured in _CONTEXT_FILES:
        entry = dict(configured)
        candidates = list(entry.pop("paths"))
        entry["path"] = _first_existing_path(candidates)
        entries.append(entry)
    try:
        infra_dir = _first_existing_path(list(_INFRA_DETAIL_DIRS))
        for p in sorted(infra_dir.glob("*.md")):
            entries.append({
                "id": "infra-" + p.stem, "path": p, "load": "ondemand",
                "label": "infra/" + p.name,
                "note": ("One line per infrastructure change, newest first."
                         if p.name == "CHANGELOG.md"
                         else "Per-host infrastructure detail, linked from the index."),
            })
    except Exception:
        logger.debug("Failed to list infra detail files", exc_info=True)
    return entries


@app.get("/api/context-files")
async def api_list_context_files():
    files = []
    for e in _context_file_entries():
        p = e["path"]
        try:
            exists = p.exists()
            content = p.read_text(errors="replace") if exists else ""
            size = p.stat().st_size if exists else 0
        except Exception:
            logger.debug("Failed to read context file %s", p, exc_info=True)
            continue
        files.append({
            "id": e["id"], "name": e.get("label") or p.name, "path": str(p),
            "load": e["load"], "note": e["note"], "secret": bool(e.get("secret")),
            "content": content, "size": size, "exists": exists,
        })
    auto = sum(f["size"] for f in files if f["load"] == "auto")
    return JSONResponse({"files": files, "auto_bytes": auto})


@app.post("/api/context-files")
async def api_save_context_file(body: ContextFileBody):
    """Save one registry file in place. `name` carries the registry id — the path
    is never taken from the client, so there is nothing to traverse."""
    entry = next((e for e in _context_file_entries() if e["id"] == body.name), None)
    if entry is None:
        return JSONResponse({"error": "Unknown context file"}, status_code=404)
    p = entry["path"]
    try:
        existing = p.read_text() if p.exists() else None
        if existing != body.content:
            _backup_before_dashboard_write(p)
            p.parent.mkdir(parents=True, exist_ok=True)
            p.write_text(body.content)
        if entry.get("secret"):
            try:
                os.chmod(p, 0o600)
            except Exception:
                logger.debug("chmod 600 failed for %s", p, exc_info=True)
        return JSONResponse({"ok": True, "id": entry["id"], "size": p.stat().st_size})
    except Exception:
        logger.exception("Failed to save context file %s", p)
        return JSONResponse({"error": "Failed to save file"}, status_code=500)


# --- Skills file management ---
#
# There are three layers:
#   1. Library:  ~/.tmux-dashboard/skill-library/<name>/SKILL.md
#                Canonical user-authored skills with YAML frontmatter
#                (name + description). This is the source of truth.
#   2. Account:  <owner CODEX_HOME>/skills/<name>/SKILL.md
#                Private skills loaded in every session owned by that account.
#   3. Built-ins: bundled into the Codex binary itself. Always present,
#                not configurable per account. Listed via /api/builtin-skills
#                so the UI can surface them as read-only.

SKILLS_DIR = MESSAGES_DIR / "skills"
SKILL_LIBRARY_DIR = MESSAGES_DIR / "skill-library"

_SKILL_FILENAME_RE = re.compile(r"^[a-zA-Z0-9_-]+\.md$")
_SKILL_DIR_NAME_RE = re.compile(r"^[a-zA-Z0-9][a-zA-Z0-9_-]{0,63}$")

# Built-in skills bundled with Codex itself. Always available; cannot be
# disabled per account. Surfaced to the UI as a read-only "Built-in" section
# so users understand which skills are available without any configuration.
_BUILTIN_SKILLS = [
    {"name": "imagegen", "description": "Generate and edit images with OpenAI image models."},
    {"name": "openai-docs", "description": "Look up OpenAI / Codex documentation."},
    {"name": "plugin-creator", "description": "Scaffold a new Codex plugin."},
    {"name": "skill-creator", "description": "Create a new Codex skill (SKILL.md) interactively."},
    {"name": "skill-installer", "description": "Install or manage Codex skills."},
]


def _sanitize_skill_filename(name: str) -> str:
    """Sanitize and validate a flat .md skill filename (legacy session API)."""
    name = os.path.basename(name)
    if not name.endswith(".md"):
        name += ".md"
    if not _SKILL_FILENAME_RE.match(name):
        return ""
    return name


def _sanitize_skill_dir_name(name: str) -> str:
    """Sanitize a skill directory name (the canonical Skill `<name>`)."""
    name = os.path.basename((name or "").strip())
    if name.endswith(".md"):
        name = name[:-3]
    if not _SKILL_DIR_NAME_RE.match(name):
        return ""
    return name


def _parse_skill_frontmatter(skill_md_path: Path) -> dict:
    """Extract `name` and `description` from a SKILL.md YAML frontmatter block.

    Falls back to the parent directory name when frontmatter is missing or malformed.
    """
    out = {"name": skill_md_path.parent.name, "description": ""}
    try:
        text = skill_md_path.read_text()
    except Exception:
        return out
    if not text.startswith("---"):
        return out
    # Find the closing fence
    end = text.find("\n---", 3)
    if end == -1:
        return out
    block = text[3:end]
    for raw in block.splitlines():
        line = raw.strip()
        if line.startswith("name:"):
            v = line.split(":", 1)[1].strip().strip('"').strip("'")
            if v:
                out["name"] = v
        elif line.startswith("description:"):
            v = line.split(":", 1)[1].strip().strip('"').strip("'")
            if v:
                out["description"] = v
    return out


def _read_skill_dir(d: Path) -> dict | None:
    """Read a skill directory; return metadata dict or None if not a valid skill."""
    if not d.is_dir():
        return None
    skill_md = d / "SKILL.md"
    if not skill_md.is_file():
        return None
    fm = _parse_skill_frontmatter(skill_md)
    try:
        content = skill_md.read_text()
    except Exception:
        content = ""
    return {
        "name": fm["name"],
        "dir_name": d.name,
        "description": fm["description"],
        "path": str(skill_md),
        "content": content,
    }


def _list_library_skills() -> list:
    """List all skills in the library (sorted by directory name)."""
    SKILL_LIBRARY_DIR.mkdir(parents=True, exist_ok=True)
    out = []
    for entry in sorted(SKILL_LIBRARY_DIR.iterdir()):
        info = _read_skill_dir(entry)
        if info:
            out.append(info)
    return out


def _is_library_link(skills_dir: Path, skill_dir_name: str) -> bool:
    """Return True iff `skills_dir/skill_dir_name` is a symlink to the library copy."""
    target = skills_dir / skill_dir_name
    if not target.is_symlink():
        return False
    try:
        resolved = target.resolve()
    except Exception:
        return False
    expected = (SKILL_LIBRARY_DIR / skill_dir_name).resolve()
    return resolved == expected


def _skill_dir_for_session(session_name: str) -> Path:
    owner = _user_for_session(session_name)
    if owner and not _is_admin(owner):
        d = _user_data_dir(owner) / "skills" / session_name
    else:
        d = SKILLS_DIR / session_name
    d.mkdir(parents=True, exist_ok=True)
    return d


class SkillFileBody(BaseModel):
    name: str
    content: str


class SaveLibrarySkillBody(BaseModel):
    description: str = ""
    content: str


class SkillLibraryBody(BaseModel):
    name: str
    session_name: str = ""


def _account_skills_dir(user: dict) -> Path:
    skills_dir = _user_codex_config_dir(user) / "skills"
    if skills_dir.is_symlink():
        raise ValueError("Account skills root cannot be a symlink")
    skills_dir.mkdir(parents=True, exist_ok=True)
    skills_dir.chmod(0o700)
    return skills_dir


@app.get("/api/my/skills")
async def api_list_my_skills(request: Request):
    """List the canonical skills loaded by the signed-in account."""
    user = _current_user(request)
    if not user:
        return JSONResponse({"error": "Not logged in"}, status_code=401)
    if not _is_admin(user):
        _ensure_user_codex_config_dir(user)
    skills_dir = _account_skills_dir(user)
    skills = []
    legacy_files = []
    for entry in sorted(skills_dir.iterdir()):
        info = _read_skill_dir(entry)
        if info:
            info["from_library"] = False
            skills.append(info)
        elif entry.is_file() and entry.suffix == ".md":
            legacy_files.append(entry.name)
    return JSONResponse({
        "skills": skills,
        "legacy_files": legacy_files,
        "path": str(skills_dir),
        "scope": "account",
    })


@app.post("/api/my/skills/{skill_name}")
async def api_save_my_skill(
    request: Request,
    skill_name: str,
    body: SaveLibrarySkillBody,
):
    user = _current_user(request)
    if not user:
        return JSONResponse({"error": "Not logged in"}, status_code=401)
    name = _sanitize_skill_dir_name(skill_name)
    if not name:
        return JSONResponse({"error": "Invalid skill name"}, status_code=400)
    if not _is_admin(user):
        _ensure_user_codex_config_dir(user)
    skills_dir = _account_skills_dir(user)
    target = skills_dir / name
    if target.is_symlink() or target.resolve().parent != skills_dir.resolve():
        return JSONResponse({"error": "Invalid account skill path"}, status_code=400)
    description = (body.description or "").strip().replace("\n", " ").replace("\r", " ")
    raw = (body.content or "").lstrip()
    if raw.startswith("---"):
        content = raw if raw.endswith("\n") else raw + "\n"
    else:
        content = (
            f"---\nname: {name}\ndescription: {description}\n---\n\n"
            f"{raw.rstrip()}\n"
        )
    target.mkdir(parents=True, exist_ok=True)
    target.chmod(0o700)
    skill_md = target / "SKILL.md"
    if skill_md.exists():
        _backup_before_dashboard_write(skill_md)
    skill_md.write_text(content)
    skill_md.chmod(0o600)
    return JSONResponse({"ok": True, "name": name, "scope": "account"})


@app.get("/api/my/skills/{skill_name}")
async def api_get_my_skill(request: Request, skill_name: str):
    user = _current_user(request)
    if not user:
        return JSONResponse({"error": "Not logged in"}, status_code=401)
    name = _sanitize_skill_dir_name(skill_name)
    if not name:
        return JSONResponse({"error": "Invalid skill name"}, status_code=400)
    if not _is_admin(user):
        _ensure_user_codex_config_dir(user)
    skills_dir = _account_skills_dir(user)
    target = skills_dir / name
    if target.is_symlink() or target.resolve().parent != skills_dir.resolve():
        return JSONResponse({"error": "Invalid account skill path"}, status_code=400)
    info = _read_skill_dir(target)
    if not info:
        return JSONResponse({"error": "Skill not found"}, status_code=404)
    info["scope"] = "account"
    return JSONResponse(info)


@app.delete("/api/my/skills/{skill_name}")
async def api_delete_my_skill(request: Request, skill_name: str):
    user = _current_user(request)
    if not user:
        return JSONResponse({"error": "Not logged in"}, status_code=401)
    name = _sanitize_skill_dir_name(skill_name)
    if not name:
        return JSONResponse({"error": "Invalid skill name"}, status_code=400)
    if not _is_admin(user):
        _ensure_user_codex_config_dir(user)
    skills_dir = _account_skills_dir(user)
    target = skills_dir / name
    if target.is_symlink() or target.resolve().parent != skills_dir.resolve():
        return JSONResponse({"error": "Invalid account skill path"}, status_code=400)
    if not target.is_dir():
        return JSONResponse({"error": "Skill not found"}, status_code=404)
    trash_dir = _user_codex_config_dir(user) / ".skill-trash"
    trash_dir.mkdir(parents=True, exist_ok=True)
    trash_dir.chmod(0o700)
    trash_target = trash_dir / f"{name}-{int(time.time() * 1000)}"
    shutil.move(str(target), str(trash_target))
    # A moved directory keeps its original mode.  Harden the recoverable copy
    # after the move so another OS account on the shared host cannot traverse
    # or read a member's retired skill.
    trash_target.chmod(0o700)
    for archived_path in trash_target.rglob("*"):
        if archived_path.is_symlink():
            continue
        archived_path.chmod(0o700 if archived_path.is_dir() else 0o600)
    return JSONResponse({"ok": True, "name": name, "recoverable": True})


@app.get("/api/sessions/{session_name}/skills")
async def api_list_skills(session_name: str):
    """List .md skill files for a session."""
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    d = _skill_dir_for_session(session_name)
    files = []
    for p in sorted(d.iterdir()):
        if p.suffix == ".md" and p.is_file():
            try:
                content = p.read_text()
                stat = p.stat()
                files.append({
                    "name": p.name,
                    "content": content,
                    "size": stat.st_size,
                    "modified": stat.st_mtime,
                })
            except Exception:
                logger.debug("Failed to read skill file %s", p, exc_info=True)
    return JSONResponse({"files": files, "path": str(d)})


@app.post("/api/sessions/{session_name}/skills")
async def api_save_skill(session_name: str, body: SkillFileBody):
    """Create or update a skill .md file."""
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    fname = _sanitize_skill_filename(body.name)
    if not fname:
        return JSONResponse({"error": "Invalid filename. Use alphanumeric, hyphens, underscores with .md extension."}, status_code=400)
    d = _skill_dir_for_session(session_name)
    fpath = d / fname
    # Resolve to prevent traversal
    if not str(fpath.resolve()).startswith(str(d.resolve())):
        return JSONResponse({"error": "Invalid path"}, status_code=400)
    try:
        fpath.write_text(body.content)
        return JSONResponse({"ok": True, "name": fname, "path": str(fpath)})
    except Exception:
        logger.exception("Failed to save skill file")
        return JSONResponse({"error": "Failed to save skill file"}, status_code=500)


@app.delete("/api/sessions/{session_name}/skills/{filename}")
async def api_delete_skill(session_name: str, filename: str):
    """Delete a skill .md file."""
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    fname = _sanitize_skill_filename(filename)
    if not fname:
        return JSONResponse({"error": "Invalid filename"}, status_code=400)
    d = _skill_dir_for_session(session_name)
    fpath = d / fname
    if not str(fpath.resolve()).startswith(str(d.resolve())):
        return JSONResponse({"error": "Invalid path"}, status_code=400)
    if not fpath.exists():
        return JSONResponse({"error": "File not found"}, status_code=404)
    try:
        fpath.unlink()
        return JSONResponse({"ok": True})
    except Exception:
        logger.exception("Failed to delete skill file")
        return JSONResponse({"error": "Failed to delete skill file"}, status_code=500)


@app.get("/api/skill-library")
async def api_list_skill_library():
    """List all skills in the library with their frontmatter metadata."""
    return JSONResponse({"skills": _list_library_skills()})


@app.get("/api/skill-library/{skill_name}")
async def api_get_library_skill(skill_name: str):
    """Return the SKILL.md content + metadata for a single library skill."""
    name = _sanitize_skill_dir_name(skill_name)
    if not name:
        return JSONResponse({"error": "Invalid skill name"}, status_code=400)
    info = _read_skill_dir(SKILL_LIBRARY_DIR / name)
    if not info:
        return JSONResponse({"error": "Skill not found"}, status_code=404)
    return JSONResponse(info)


@app.post("/api/skill-library/{skill_name}")
async def api_save_library_skill(skill_name: str, body: SaveLibrarySkillBody):
    """Create or update a library skill.

    Body content is the raw SKILL.md text. If it already starts with a `---`
    frontmatter block, it is trusted as-is. Otherwise we synthesize a frontmatter
    block from `skill_name` and `description`.
    """
    name = _sanitize_skill_dir_name(skill_name)
    if not name:
        return JSONResponse({"error": "Invalid skill name (alphanumeric, hyphens, underscores; max 64 chars)"}, status_code=400)
    desc = (body.description or "").strip().replace("\n", " ").replace("\r", " ")
    raw = (body.content or "").lstrip()
    if raw.startswith("---"):
        full = raw if raw.endswith("\n") else raw + "\n"
    else:
        full = f"---\nname: {name}\ndescription: {desc}\n---\n\n{raw.rstrip()}\n"
    d = SKILL_LIBRARY_DIR / name
    try:
        d.mkdir(parents=True, exist_ok=True)
        (d / "SKILL.md").write_text(full)
    except Exception:
        logger.exception("Failed to save library skill")
        return JSONResponse({"error": "Failed to save skill"}, status_code=500)
    return JSONResponse({"ok": True, "name": name})


@app.delete("/api/skill-library/{skill_name}")
async def api_delete_library_skill(skill_name: str):
    """Delete a shared library skill and clean up account links to it."""
    name = _sanitize_skill_dir_name(skill_name)
    if not name:
        return JSONResponse({"error": "Invalid skill name"}, status_code=400)
    d = SKILL_LIBRARY_DIR / name
    if not d.is_dir():
        return JSONResponse({"error": "Skill not found"}, status_code=404)
    # Sweep account skill directories and remove links to the deleted library copy.
    try:
        for account in _load_users():
            sd = _user_codex_config_dir(account) / "skills"
            link = sd / name
            if link.is_symlink() and _is_library_link(sd, name):
                try:
                    link.unlink()
                except Exception:
                    logger.debug("Failed to clean up account skill link %s", link, exc_info=True)
    except Exception:
        logger.debug("Failed to sweep account skill links for deleted skill", exc_info=True)
    try:
        shutil.rmtree(str(d))
    except Exception:
        logger.exception("Failed to delete library skill")
        return JSONResponse({"error": "Failed to delete skill"}, status_code=500)
    return JSONResponse({"ok": True})


@app.get("/api/builtin-skills")
async def api_list_builtin_skills():
    """Return the list of skills bundled with Codex itself (read-only)."""
    return JSONResponse({"skills": list(_BUILTIN_SKILLS)})


# --- Standard Codex settings -----------------------------------------------
# All sessions use their owner's one CODEX_HOME, with no per-session config mapping.


def _toml_escape(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"')


def _backup_before_dashboard_write(path: Path):
    """Back up an existing file before the dashboard overwrites it."""
    if not path.exists():
        return
    try:
        backup = path.with_name(f"{path.name}.bak-dashboard-{int(time.time() * 1000)}")
        shutil.copy2(path, backup)
    except Exception:
        logger.debug("Failed to back up %s before dashboard write", path, exc_info=True)


# Wire services/browser.py here rather than beside its import: these helpers are
# defined further down the file, and configuring at import position would bind
# names that do not exist yet.
browser_service.configure(
    backup_before_dashboard_write=_backup_before_dashboard_write,
    configure_member_codex_isolation=_configure_member_codex_isolation,
    controller_call=_controller_call,
    ensure_user_codex_config_dir=_ensure_user_codex_config_dir,
    toml_escape=_toml_escape,
    user_codex_config_dir=_user_codex_config_dir,
    client=client,
)


def _merge_top_level_toml_keys(existing: str, managed: dict) -> str:
    """Merge dashboard-managed top-level TOML keys without touching sections."""
    managed_keys = ("model", "model_reasoning_effort", "sandbox_mode", "approval_policy")
    updates = {key: str(managed[key]) for key in managed_keys if managed.get(key)}
    if not updates:
        return existing if existing.endswith("\n") else existing + "\n"

    def render_line(key: str) -> str:
        return f'{key} = "{_toml_escape(updates[key])}"'

    out: list[str] = []
    written: set[str] = set()
    in_section = False
    inserted_before_sections = False
    for line in existing.splitlines():
        stripped = line.strip()
        if stripped.startswith("[") and stripped.endswith("]"):
            if not inserted_before_sections:
                for key in managed_keys:
                    if key in updates and key not in written:
                        out.append(render_line(key))
                        written.add(key)
                inserted_before_sections = True
            in_section = True
            out.append(line)
            continue
        if not in_section and "=" in stripped and not stripped.startswith("#"):
            key = stripped.split("=", 1)[0].strip()
            if key in updates:
                out.append(render_line(key))
                written.add(key)
                continue
        out.append(line)
    if not inserted_before_sections:
        if out and out[-1].strip():
            out.append("")
        for key in managed_keys:
            if key in updates and key not in written:
                out.append(render_line(key))
                written.add(key)
    return "\n".join(out).rstrip() + "\n"


def _ensure_codex_project_trust(existing: str, project_dir: str) -> str:
    """Persist Codex's native trust marker for a dashboard-managed workdir."""
    project = str(Path(project_dir).expanduser().resolve())
    header = f'[projects."{_toml_escape(project)}"]'
    lines = existing.splitlines()
    section_start = next(
        (index for index, line in enumerate(lines) if line.strip() == header),
        None,
    )
    if section_start is None:
        if lines and lines[-1].strip():
            lines.append("")
        lines.extend((header, 'trust_level = "trusted"'))
        return "\n".join(lines).rstrip() + "\n"

    section_end = next(
        (
            index
            for index in range(section_start + 1, len(lines))
            if lines[index].strip().startswith("[")
            and lines[index].strip().endswith("]")
        ),
        len(lines),
    )
    trust_line = re.compile(r"^\s*trust_level\s*=")
    matches = [
        index
        for index in range(section_start + 1, section_end)
        if trust_line.match(lines[index])
    ]
    if matches:
        first = matches[0]
        lines[first] = 'trust_level = "trusted"'
        for duplicate in reversed(matches[1:]):
            del lines[duplicate]
    else:
        lines.insert(section_start + 1, 'trust_level = "trusted"')
    return "\n".join(lines).rstrip() + "\n"


def _normalize_reasoning_effort(effort: str | None) -> str | None:
    value = (effort or "").strip().lower()
    if not value:
        return ""
    value = _CODEX_REASONING_EFFORT_ALIASES.get(value, value)
    if value not in _CODEX_REASONING_EFFORTS:
        return None
    return value


class SetSessionEffortBody(BaseModel):
    effort: str
    restart: bool = False


class SetSessionModelBody(BaseModel):
    model: str
    restart: bool = False

# --- Project-scope (per-session, cwd-bound) file management ---
# Codex loads these on top of the owner's account configuration:
# <cwd>/AGENTS.md, <cwd>/.codex/config.toml, <cwd>/.mcp.json.
# Surface them in the session's "More" dropdown so the user can edit per-project
# rules without leaving the dashboard.

_PROJECT_FILES = [
    ("AGENTS.md", "md",
     "Project rules loaded on top of the account AGENTS.md."),
    (".codex/config.toml", "toml",
     "Project config (model, env, hooks) loaded on top of account config."),
    (".codex/config.local.toml", "toml",
     "Project-local config (not committed). Loaded last; wins over everything."),
    (".mcp.json", "json",
     "Project-scope MCP servers added to the account MCP servers."),
]


def _safe_project_path(cwd: str, rel: str) -> Path | None:
    """Confine writes to known per-project files under cwd."""
    if not cwd:
        return None
    rel_clean = (rel or "").lstrip("/").replace("\\", "/")
    allowed = {p for p, _, _ in _PROJECT_FILES}
    if rel_clean not in allowed:
        return None
    base = Path(cwd).resolve()
    if not base.exists() or not base.is_dir():
        return None
    target = (base / rel_clean).resolve()
    try:
        target.relative_to(base)
    except ValueError:
        return None
    return target


@app.get("/api/sessions/{session_name}/project-files")
async def api_list_session_project_files(session_name: str):
    """Inventory of project-scope files for this session's cwd."""
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    cwd = get_session_cwd(session_name) or ""
    files = []
    if cwd:
        base = Path(cwd)
        for rel, kind, desc in _PROJECT_FILES:
            p = base / rel
            files.append({
                "path": rel, "kind": kind, "description": desc,
                "exists": p.exists(),
                "size": p.stat().st_size if p.exists() else 0,
            })
    return JSONResponse({"cwd": cwd, "files": files})


@app.get("/api/sessions/{session_name}/project-file")
async def api_get_session_project_file(session_name: str, path: str):
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    cwd = get_session_cwd(session_name) or ""
    target = _safe_project_path(cwd, path)
    if target is None:
        return JSONResponse({"error": "Invalid path (not an allowed project file or session has no cwd)"},
                            status_code=400)
    content = ""
    exists = target.exists()
    if exists:
        try:
            content = target.read_text()
        except Exception:
            logger.debug("Failed to read %s", target, exc_info=True)
            return JSONResponse({"error": "Could not read file"}, status_code=500)
    return JSONResponse({"path": path, "abs_path": str(target),
                         "content": content, "exists": exists,
                         "cwd": cwd,
                         "size": target.stat().st_size if exists else 0})


class ProjectFileBody(BaseModel):
    path: str
    content: str


@app.put("/api/sessions/{session_name}/project-file")
async def api_save_session_project_file(session_name: str, body: ProjectFileBody):
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    cwd = get_session_cwd(session_name) or ""
    target = _safe_project_path(cwd, body.path)
    if target is None:
        return JSONResponse({"error": "Invalid path"}, status_code=400)
    if target.suffix.lower() == ".json" and body.content.strip():
        try:
            json.loads(body.content)
        except Exception as e:
            return JSONResponse({"error": f"Invalid JSON: {e}"}, status_code=400)
    if target.suffix.lower() == ".toml" and body.content.strip():
        try:
            tomllib.loads(body.content)
        except tomllib.TOMLDecodeError as e:
            return JSONResponse({"error": f"Invalid TOML: {e}"}, status_code=400)
    try:
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(body.content)
        return JSONResponse({"ok": True, "path": body.path,
                             "abs_path": str(target),
                             "size": target.stat().st_size})
    except Exception:
        logger.exception("Failed to write project file %s", target)
        return JSONResponse({"error": "Failed to save"}, status_code=500)


















def _require_ssh_ide_admin(request: Request) -> dict | None:
    user = _current_user(request)
    return user if _is_admin(user) else None



























































































































@app.get("/ide/{session_name}", response_class=HTMLResponse)
async def remote_ide_page(request: Request, session_name: str):
    """Serve the Svelte Remote IDE shell for one owned session."""
    denied = _ssh_ide_denied(request)
    if denied:
        return HTMLResponse("<h1>Sign in to use the Remote SSH IDE</h1>", status_code=403)
    _sessions, session = _find_session_for_user(session_name, _current_user(request))
    if not session:
        return HTMLResponse("<h1>Session not found</h1>", status_code=404)
    if not IDE_BUNDLE_ENTRY.is_file():
        return HTMLResponse(
            "<h1>Remote IDE bundle is not built</h1>"
            "<p>Run <code>make ide</code> on the dashboard host, then reload.</p>",
            status_code=503,
        )
    names = [str(item.get("name") or "") for item in (_sessions or []) if item.get("name")]
    bootstrap = json.dumps({
        "session": session_name,
        "sessions": names,
        "rootPath": ROOT_PATH,
    })
    return HTMLResponse(
        "<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\">"
        "<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">"
        f"<title>Remote IDE · {html.escape(session_name)}</title>"
        "<style>html,body{margin:0;height:100%;background:#272822}#ide-root{height:100vh}</style>"
        f"<link rel=\"stylesheet\" href=\"{ROOT_PATH}/static/ide/ide.css\">"
        "</head><body><div id=\"ide-root\"></div>"
        f"<script>window.__IDE_BOOTSTRAP__={bootstrap};</script>"
        f"<script type=\"module\" src=\"{ROOT_PATH}/static/ide/ide.js\"></script>"
        "</body></html>"
    )


@app.websocket("/ws/sessions/{session_name}/ide/terminal/{connection_id}")
async def ws_ssh_ide_terminal(ws: WebSocket, session_name: str, connection_id: str):
    """Bidirectional PTY bridge to the session's SSH tmux window.

    Authorization mirrors the HTTP IDE routes: a valid token, access to the
    session, and ownership of the connection. A connection the caller does not
    own is closed as if it did not exist.
    """
    if AUTH_PASS and not _check_token(ws.cookies.get(AUTH_COOKIE)):
        await ws.close(code=1008)
        return
    user = _current_user(ws)
    if not user or not _user_can_access_session(user, session_name):
        await ws.close(code=1008)
        return
    profile = _ssh_profile(session_name, connection_id, user)
    if not profile:
        await ws.close(code=1008)
        return
    if not await asyncio.to_thread(_ssh_control_is_alive, profile, session_name):
        await ws.close(code=1011)
        return
    # The shell lives in a tmux window, which is what makes this terminal
    # persistent across browser reloads. If that window is gone (killed, or the
    # tmux server restarted) attaching would fail forever, so re-create it and
    # hand the client a working terminal instead of a dead one.
    if not await asyncio.to_thread(_ssh_tmux_window_exists, profile, session_name):
        try:
            await asyncio.to_thread(_ssh_open_tmux_window, profile, session_name)
        except (OSError, RuntimeError, subprocess.TimeoutExpired):
            logger.info("Could not re-open terminal window for %s", session_name, exc_info=True)
            await ws.close(code=1011)
            return

    await ws.accept()
    process = master_fd = None
    loop = asyncio.get_running_loop()
    try:
        # The user is already resolved above; log directly rather than
        # re-deriving it from a WebSocket via the HTTP-shaped helper.
        try:
            await asyncio.to_thread(
                _append_ssh_ide_audit, user, session_name, profile, "terminal_attached"
            )
        except OSError:
            logger.exception("Could not append SSH IDE terminal audit event")
        process, master_fd = await _ssh_terminal_pty(profile, session_name, 80, 24)

        async def pump_output():
            """Forward PTY bytes to the browser without blocking the loop."""
            reader = asyncio.StreamReader()
            transport, _protocol = await loop.connect_read_pipe(
                lambda: asyncio.StreamReaderProtocol(reader), os.fdopen(master_fd, "rb", 0)
            )
            try:
                while True:
                    chunk = await reader.read(4096)
                    if not chunk:
                        return
                    await ws.send_bytes(chunk)
            finally:
                transport.close()

        async def pump_input():
            """Forward keystrokes, and resize requests, from the browser."""
            while True:
                message = await ws.receive()
                if message["type"] == "websocket.disconnect":
                    return
                data = message.get("bytes")
                if data:
                    os.write(master_fd, data)
                    continue
                text = message.get("text")
                if not text:
                    continue
                # Text frames carry control messages only; keystrokes are binary,
                # so a resize can never be mistaken for typed input.
                try:
                    payload = json.loads(text)
                except ValueError:
                    continue
                if payload.get("type") == "resize":
                    _ssh_set_pty_size(
                        master_fd,
                        payload.get("cols", 80),
                        payload.get("rows", 24),
                        process.pid,
                    )

        tasks = {asyncio.create_task(pump_output()), asyncio.create_task(pump_input())}
        done, pending = await asyncio.wait(tasks, return_when=asyncio.FIRST_COMPLETED)
        for task in pending:
            task.cancel()
        await asyncio.gather(*pending, return_exceptions=True)
        for task in done:
            task.result()
    except WebSocketDisconnect:
        pass
    except Exception as exc:
        logger.warning(
            "SSH IDE terminal ended for '%s': %s: %s", session_name, type(exc).__name__, exc
        )
    finally:
        # Detaching must not kill the tmux window: the same shell is still the
        # user's SSH session, and other views may be attached to it.
        if process and process.returncode is None:
            try:
                process.terminate()
                await asyncio.wait_for(process.wait(), timeout=5)
            except (ProcessLookupError, asyncio.TimeoutError):
                pass
        try:
            await ws.close()
        except Exception:
            pass


@app.get("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/agent-context")
async def api_agent_workspace_context(request: Request, session_name: str, connection_id: str):
    """Context the chat panel prepends so the agent works on the RIGHT machine.

    The agent process runs on the dashboard host, but an SSH workspace lives
    somewhere else entirely. Without this the agent inspected its own cwd and
    reported the workspace "not visible" -- correctly, but uselessly.

    For an SSH workspace this hands over the exact `ssh` invocation that reaches
    it, using the connection's own stored key. That is a real grant of shell
    access on the remote host, so it is built server-side (the browser never
    learns the key path) and only for a connection the caller already owns.
    """
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    root = str(profile.get("workspace_root") or ".")
    if _is_local_profile(profile):
        return JSONResponse({
            "kind": "local",
            "root": root,
            "context": f"[IDE workspace]\nLocal folder on this machine: {root}\n",
        })

    host = str(profile.get("host") or "")
    username = str(profile.get("username") or "")
    port = int(profile.get("port") or 22)
    try:
        argv = await asyncio.to_thread(_ssh_argv, profile)
    except RuntimeError as exc:
        return JSONResponse({"error": str(exc)}, status_code=400)
    # _ssh_argv ends with user@host; the flags before it are what the agent
    # needs to authenticate the same way the IDE does.
    flags = " ".join(shlex.quote(part) for part in argv[1:-1])
    ssh_cmd = f"ssh {flags} {username}@{host}"

    listing = ""
    try:
        # Use the workspace-scoped command so the listing is of the configured
        # root, not the login directory the bare script would land in.
        raw = await asyncio.to_thread(
            _ssh_run, profile, session_name,
            _ssh_workspace_command(profile, _SSH_LIST_SCRIPT, "."),
            timeout=20,
        )
        entries = json.loads(raw).get("entries", [])
        names = [e["name"] + ("/" if e.get("is_dir") else "") for e in entries[:60]]
        listing = "  " + "  ".join(names) if names else "  (empty)"
    except (RuntimeError, ValueError, subprocess.TimeoutExpired):
        listing = "  (could not list — the connection may be down)"

    context = (
        "[IDE workspace — IMPORTANT]\n"
        f"The files you are being asked about are NOT on this machine. They are on\n"
        f"{username}@{host}:{port}, in {root}.\n\n"
        "Run commands there with this exact prefix (the key is already authorised):\n"
        f"  {ssh_cmd} 'cd {shlex.quote(root)} && <your command>'\n\n"
        f"Workspace root ({root}) contains:\n{listing}\n"
    )
    return JSONResponse({
        "kind": "ssh",
        "root": root,
        "host": host,
        "username": username,
        "ssh_command": ssh_cmd,
        "context": context,
    })


@app.get("/api/sessions/{session_name}/ide/chat")
async def api_ide_chat_messages(request: Request, session_name: str, limit: int = 80):
    """Return recent agent chat for the IDE panel.

    The Svelte IDE has no access to the dashboard's global session poll, so it
    reads replies here. Ownership is enforced the same way as every other IDE
    route, and messages come from the owner's store rather than the caller's.
    """
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    # Assistant replies are only written when something captures the agent's
    # finished turn. That used to happen exclusively in the dashboard's session
    # poll, so an IDE used on its own showed the user's own messages and never
    # an answer. Capture here too, on the same idle/signature gates.
    await _capture_agent_reply(session_name)
    messages = await asyncio.to_thread(_load_session_messages, session_name)
    bounded = max(1, min(int(limit or 80), 200))
    return JSONResponse({"messages": messages[-bounded:]})


@app.get("/api/sessions/{session_name}/ide/ssh-connections")
async def api_list_ssh_connections(request: Request, session_name: str):
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profiles = _ssh_profiles(session_name, _current_user(request))
    return JSONResponse({"connections": [_ssh_public_profile(item) for item in profiles]})








@app.get("/api/ide/connections/saved")
async def api_saved_connections(request: Request):
    """Every connection this user owns, across all sessions.

    The per-session lists power the IDE; this one powers "reuse a saved
    connection" when creating a session, so a host is configured once rather
    than re-entered for each new session.
    """
    denied = _ssh_ide_denied(request)
    if denied:
        return denied
    user = _current_user(request)
    data = _ssh_connections_store().read()
    profiles = data.get("connections") if isinstance(data, dict) else []
    seen: dict[str, dict] = {}
    for profile in profiles:
        if not isinstance(profile, dict) or not _ssh_user_may_use_profile(user, profile):
            continue
        public = _ssh_public_profile(profile)
        # One host may be attached to several sessions; offer each target once,
        # keyed by what actually identifies it.
        key = "|".join([
            str(public.get("kind") or "ssh"),
            str(public.get("host") or ""),
            str(public.get("username") or ""),
            str(public.get("port") or 22),
            str(public.get("workspace_root") or ""),
        ])
        if key not in seen:
            seen[key] = public
    items = sorted(seen.values(), key=lambda item: (item.get("kind") or "", (item.get("label") or "").lower()))
    return JSONResponse({"connections": items})


@app.get("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/browse")
async def api_browse_connection_directories(
    request: Request, session_name: str, connection_id: str, path: str = ""
):
    """Browse folders on whichever machine this connection points at.

    "Open Folder" used to always browse the dashboard host, so choosing a folder
    while connected over SSH silently created a LOCAL workspace pointing at a
    path on the wrong machine. This walks the connection's own filesystem.
    """
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    if _is_local_profile(profile):
        # A local workspace browses this host, with the caller's own scoping.
        return await api_browse_directories(request, path=path)
    target = (path or "").strip() or "."
    if len(target) > 4096 or "\x00" in target:
        return JSONResponse({"error": "Invalid path"}, status_code=400)
    try:
        raw = await asyncio.to_thread(
            _ssh_run,
            profile,
            session_name,
            _WorkspaceCommand(
                _ssh_remote_command(_SSH_BROWSE_SCRIPT, target), _SSH_BROWSE_SCRIPT, target
            ),
            timeout=25,
        )
        return JSONResponse(json.loads(raw))
    except (RuntimeError, ValueError, subprocess.TimeoutExpired) as exc:
        return JSONResponse({"error": str(exc)[:300]}, status_code=502)


@app.get("/api/ide/browse")
async def api_browse_directories(request: Request, path: str = ""):
    """List sub-directories so the IDE can offer a VS Code style folder picker.

    Directories only: this feeds "Open Folder", and never returns file contents.
    """
    denied = _ssh_ide_denied(request)
    if denied:
        return denied
    user = _current_user(request)
    roots = _browse_roots(user)
    if not roots:
        return JSONResponse({"error": "No browsable location for this account"}, status_code=403)
    raw = (path or "").strip() or str(roots[0])
    try:
        target = Path(raw).expanduser().resolve(strict=True)
    except (OSError, ValueError, RuntimeError):
        return JSONResponse({"error": "Folder not found"}, status_code=404)
    if not target.is_dir():
        return JSONResponse({"error": "Not a folder"}, status_code=400)
    if not _browse_path_allowed(target, roots):
        return JSONResponse({"error": "Folder is outside your allowed area"}, status_code=403)
    entries = []
    try:
        with os.scandir(target) as children:
            for entry in children:
                if not entry.name.startswith("."):
                    try:
                        if entry.is_dir(follow_symlinks=False):
                            entries.append({"name": entry.name, "path": str(target / entry.name)})
                    except OSError:
                        continue
    except PermissionError:
        return JSONResponse({"error": "Permission denied for this folder"}, status_code=403)
    except OSError as exc:
        return JSONResponse({"error": str(exc)[:200]}, status_code=400)
    entries.sort(key=lambda item: item["name"].lower())
    parent = str(target.parent)
    return JSONResponse({
        "path": str(target),
        # Withhold the parent at a boundary so the UI cannot offer a step up
        # into a directory the next request would refuse anyway.
        "parent": parent if (parent != str(target) and _browse_path_allowed(Path(parent), roots)) else "",
        "entries": entries[:1000],
        "is_git": (target / ".git").exists(),
    })




@app.post("/api/sessions/{session_name}/ide/ssh-connections")
async def api_create_ssh_connection(request: Request, session_name: str, body: SSHConnectionBody):
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    kind = (body.kind or "ssh").strip().lower()
    if kind not in {"ssh", LOCAL_CONNECTION_KIND}:
        return JSONResponse({"error": "Connection kind must be 'ssh' or 'local'"}, status_code=400)
    if kind == LOCAL_CONNECTION_KIND:
        return await _create_local_workspace(request, session_name, body)
    host = body.host.strip()
    username = body.username.strip()
    label = (body.label.strip() or f"{username}@{host}")[:80]
    auth_mode = body.auth_mode.strip().lower()
    identity_file = _normalized_ssh_identity_file(body.identity_file)
    if not _valid_ssh_host(host):
        return JSONResponse({"error": "Enter a valid hostname or IP address"}, status_code=400)
    if not _SSH_USER_RE.fullmatch(username):
        return JSONResponse({"error": "Enter a valid SSH username"}, status_code=400)
    if not 1 <= body.port <= 65535:
        return JSONResponse({"error": "SSH port must be between 1 and 65535"}, status_code=400)
    if identity_file is None:
        return JSONResponse({"error": "Identity file must be a readable file under ~/.ssh"}, status_code=400)
    if auth_mode not in {"agent", "key", "password"}:
        return JSONResponse({"error": "Choose SSH agent, key, or password authentication"}, status_code=400)
    pasted_key = (body.private_key or "").strip()
    if pasted_key and not _valid_private_key_blob(pasted_key):
        return JSONResponse(
            {"error": "That does not look like an OpenSSH private key (expected a BEGIN … PRIVATE KEY block)"},
            status_code=400,
        )
    # A passphrase-protected key cannot be used: connections run under
    # BatchMode=yes with no askpass, so OpenSSH fails with a bare
    # "permission denied" that reads like wrong credentials. Say so up front
    # instead of storing a passphrase nothing ever applies.
    if pasted_key and _private_key_is_encrypted(pasted_key):
        return JSONResponse(
            {"error": "That key is passphrase-protected, which is not supported here. "
                      "Paste a key without a passphrase, or use password authentication."},
            status_code=400,
        )
    if auth_mode == "key" and not identity_file and not pasted_key:
        return JSONResponse(
            {"error": "Paste a private key, or name an existing identity file under ~/.ssh"},
            status_code=400,
        )
    if auth_mode == "password" and (not body.password or "\x00" in body.password or len(body.password) > 4096):
        return JSONResponse({"error": "Enter a valid SSH password"}, status_code=400)
    workspace_root = body.workspace_root.strip() or "."
    if len(workspace_root) > 4096 or "\x00" in workspace_root:
        return JSONResponse({"error": "Enter a valid remote workspace root"}, status_code=400)
    if not 1_024 <= body.max_file_bytes <= SSH_MAX_FILE_BYTES:
        return JSONResponse({"error": "File limit must be between 1 KB and 1 MB"}, status_code=400)
    user = _current_user(request)
    # The id is the AES-GCM AAD, so it must exist before the secret is sealed.
    connection_id = secrets.token_urlsafe(12)
    try:
        password_enc = _ssh_vault_encrypt(body.password, connection_id)
        private_key_enc = _ssh_vault_encrypt(pasted_key, connection_id)
        passphrase_enc = _ssh_vault_encrypt(body.key_passphrase or "", connection_id)
    except RuntimeError as exc:
        return JSONResponse({"error": str(exc)}, status_code=500)
    profile = {
        "id": connection_id,
        "session_name": session_name,
        "label": label,
        "host": host,
        "username": username,
        "port": body.port,
        "identity_file": identity_file,
        "auth_mode": auth_mode,
        "workspace_root": workspace_root,
        "max_file_bytes": body.max_file_bytes,
        "owner_id": str((user or {}).get("id") or ""),
        "owner_username": str((user or {}).get("username") or ""),
        "password_enc": password_enc,
        "private_key_enc": private_key_enc,
        "passphrase_enc": passphrase_enc,
        "last_directory": ".",
        "created_at": time.time(),
    }

    def add(data: dict):
        data.setdefault("connections", []).append(profile)

    _ssh_connections_store().update(add)
    _harden_ssh_state_file(SSH_CONNECTIONS_FILE)
    return JSONResponse({"ok": True, "connection": _ssh_public_profile(profile)}, status_code=201)




@app.post("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/workspace-root")
async def api_set_workspace_root(
    request: Request, session_name: str, connection_id: str, body: SSHWorkspaceRootBody
):
    """Point an existing connection at a different folder.

    Cloning the connection instead would break authentication: a stored key or
    password is sealed with the connection id as GCM AAD, so a copy under a new
    id cannot decrypt it. Re-rooting keeps the working credential.
    """
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    root = (body.workspace_root or "").strip()
    if not root or len(root) > 4096 or "\x00" in root:
        return JSONResponse({"error": "Enter a valid folder path"}, status_code=400)
    if _is_local_profile(profile):
        resolved = _normalized_local_root(root)
        if resolved is None:
            return JSONResponse(
                {"error": "Enter an existing folder path on this server"}, status_code=400
            )
        denied = _local_root_denied(request, resolved)
        if denied:
            return denied
        root = resolved
    else:
        # Validate the remote path BEFORE committing: this route also clears the
        # stored tabs and buffers, so a typo would destroy unsaved work and
        # leave the connection pointing at a directory that does not exist.
        try:
            await asyncio.to_thread(
                _ssh_run,
                profile,
                session_name,
                _WorkspaceCommand(
                    _ssh_remote_command(_SSH_BROWSE_SCRIPT, root), _SSH_BROWSE_SCRIPT, root
                ),
                timeout=25,
            )
        except (RuntimeError, ValueError, subprocess.TimeoutExpired) as exc:
            return JSONResponse(
                {"error": f"Could not open {root} on the remote host: {str(exc)[:200]}"},
                status_code=400,
            )
    changes = {"workspace_root": root, "last_directory": "."}
    label = (body.label or "").strip()
    if label:
        changes["label"] = label[:80]
    _ssh_update_profile(session_name, connection_id, changes)
    # Stored tabs and buffers belong to the old root; keep them from reopening
    # against paths that may not exist under the new one.
    def drop_state(data: dict) -> None:
        data.setdefault("workspaces", {}).pop(_ssh_ide_state_key(session_name, connection_id), None)

    _ssh_ide_state_store().update(drop_state)
    updated = _ssh_profile(session_name, connection_id, _current_user(request))
    return JSONResponse({"ok": True, "connection": _ssh_public_profile(updated or {})})


@app.delete("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}")
async def api_delete_ssh_connection(request: Request, session_name: str, connection_id: str):
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error

    user = _current_user(request)

    def remove(data: dict) -> bool:
        profiles = data.setdefault("connections", [])
        data["connections"] = [
            item
            for item in profiles
            if not (
                item.get("id") == connection_id
                and item.get("session_name") == session_name
                and _ssh_user_may_use_profile(user, item)
            )
        ]
        return len(data["connections"]) != len(profiles)

    _data, removed = _ssh_connections_store().update(remove)
    if not removed:
        return JSONResponse({"error": "SSH connection not found"}, status_code=404)
    _harden_ssh_state_file(SSH_CONNECTIONS_FILE)
    # A pasted key was materialized to disk for OpenSSH; it must not outlive the
    # connection record that justified storing it.
    _discard_ssh_key(connection_id)

    # Deleting the connection must also drop its stored buffers; leaving them
    # behind would outlive the credential that justified keeping them.
    def drop_state(data: dict) -> None:
        data.setdefault("workspaces", {}).pop(_ssh_ide_state_key(session_name, connection_id), None)

    _ssh_ide_state_store().update(drop_state)
    return JSONResponse({"ok": True})




@app.get("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/host-key")
async def api_ssh_host_key(request: Request, session_name: str, connection_id: str):
    """Fetch the host's public key fingerprint so the user can verify it.

    Connecting requires the host to be in known_hosts (StrictHostKeyChecking is
    deliberately left on). Rather than weakening that, show the fingerprint and
    let the user decide -- the same trust-on-first-use step ssh itself prompts
    for, surfaced in the UI because a detached pane cannot answer a prompt.
    """
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    if _is_local_profile(profile):
        return JSONResponse({"error": "A local workspace has no SSH host key"}, status_code=400)
    host = str(profile.get("host") or "")
    port = int(profile.get("port") or 22)
    if not _valid_ssh_host(host) or not 1 <= port <= 65535:
        return JSONResponse({"error": "SSH connection profile is invalid"}, status_code=400)
    known = await asyncio.to_thread(_ssh_host_is_known, host, port)
    if known:
        return JSONResponse({"known": True, "host": host, "port": port, "fingerprints": []})
    try:
        scan = await asyncio.to_thread(
            subprocess.run,
            ["ssh-keyscan", "-T", "10", "-p", str(port), host],
            capture_output=True, text=True, timeout=20,
        )
    except (OSError, subprocess.TimeoutExpired) as exc:
        return JSONResponse({"error": f"Could not reach {host}: {exc}"[:200]}, status_code=502)
    lines = [ln for ln in (scan.stdout or "").splitlines() if ln.strip() and not ln.startswith("#")]
    if not lines:
        # ssh-keyscan is silent when the host simply does not answer, so say
        # that plainly rather than reporting an empty-looking key failure.
        return JSONResponse({
            "error": f"{host}:{port} is not responding. Check the machine is running "
                     "and reachable from this server.",
            "unreachable": True,
        }, status_code=502)
    return JSONResponse({
        "known": False,
        "host": host,
        "port": port,
        "fingerprints": await asyncio.to_thread(_ssh_key_fingerprints, lines),
    })


@app.post("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/host-key")
async def api_trust_ssh_host(
    request: Request, session_name: str, connection_id: str, body: SSHHostKeyBody
):
    """Add this host's key to known_hosts after the user accepted it."""
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    if not body.accept:
        return JSONResponse({"error": "Host key was not accepted"}, status_code=400)
    host = str(profile.get("host") or "")
    port = int(profile.get("port") or 22)
    if not _valid_ssh_host(host) or not 1 <= port <= 65535:
        return JSONResponse({"error": "SSH connection profile is invalid"}, status_code=400)
    try:
        added = await asyncio.to_thread(_ssh_trust_host, host, port)
    except (OSError, RuntimeError, subprocess.TimeoutExpired) as exc:
        return JSONResponse({"error": str(exc)[:200]}, status_code=502)
    if not added:
        return JSONResponse({"error": f"Could not fetch a host key from {host}"}, status_code=502)
    await _record_ssh_ide_audit(request, session_name, profile, "host_key_trusted")
    return JSONResponse({"ok": True, "host": host, "port": port})


@app.post("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/connect")
async def api_connect_ssh_connection(
    request: Request,
    session_name: str,
    connection_id: str,
    body: SSHConnectBody | None = None,
):
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    # A local workspace has nothing to authenticate: just make sure the folder is
    # still there and give it the same interactive tmux window an SSH target gets.
    if _is_local_profile(profile):
        try:
            window_name = await asyncio.to_thread(_local_open_tmux_window, profile, session_name)
        except (OSError, RuntimeError, subprocess.TimeoutExpired) as exc:
            return JSONResponse({"error": str(exc)}, status_code=502)
        await _record_ssh_ide_audit(request, session_name, profile, "local_opened")
        return JSONResponse({"ok": True, "connected": True, "window_name": window_name})
    # A password supplied in the request wins (rotation / first use); otherwise
    # fall back to the stored credential so a resumed session reconnects without
    # prompting anyone.
    supplied = (body.password if body else "") or ""
    try:
        stored = _ssh_vault_decrypt(
            str(profile.get("password_enc") or ""), str(profile.get("id") or "")
        )
    except RuntimeError as exc:
        return JSONResponse({"error": str(exc)}, status_code=500)
    password = supplied or stored
    try:
        await asyncio.to_thread(_ssh_start_control_master, profile, session_name, password=password)
        window_name = await asyncio.to_thread(_ssh_open_tmux_window, profile, session_name)
        # Recorded only after the connection is actually usable: an audit row
        # written before the last failure point implies a connect that never
        # happened, and this log is the security record.
        await _record_ssh_ide_audit(request, session_name, profile, "connected")
    except (OSError, RuntimeError, subprocess.TimeoutExpired) as exc:
        detail = str(exc)
        low = detail.lower()
        # An untrusted host is a decision the user can make, not a dead end.
        # Flag it so the IDE can offer the fingerprint instead of just failing.
        if "host key verification failed" in low or "is known for" in low:
            return JSONResponse({"error": detail, "needs_host_key": True}, status_code=502)
        # Distinguish "the host is not answering" from a credential problem:
        # the first is nothing the user can fix in this dialog, and reporting it
        # as a generic failure sends people hunting for a wrong password.
        host = str(profile.get("host") or "the host")
        if "timed out" in low or "no route to host" in low or "network is unreachable" in low:
            return JSONResponse({
                "error": f"{host} is not responding on port {int(profile.get('port') or 22)}. "
                         "Check the machine is running and reachable from this server.",
                "unreachable": True,
            }, status_code=502)
        if "connection refused" in low:
            return JSONResponse({
                "error": f"{host} refused the connection on port "
                         f"{int(profile.get('port') or 22)} — is its SSH service running?",
                "unreachable": True,
            }, status_code=502)
        if "permission denied" in low:
            return JSONResponse({
                "error": f"{host} rejected the credentials. Check the username, and the key "
                         "or password for this connection.",
                "auth_failed": True,
            }, status_code=502)
        return JSONResponse({"error": detail}, status_code=502)
    # Persist a freshly supplied password only after it actually authenticated,
    # so a typo never overwrites a working stored credential.
    if supplied and supplied != stored:
        _ssh_update_profile(
            session_name,
            connection_id,
            {"password_enc": _ssh_vault_encrypt(supplied, connection_id)},
        )
    return JSONResponse({"ok": True, "connected": True, "window_name": window_name})


@app.get("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/status")
async def api_ssh_connection_status(
    request: Request, session_name: str, connection_id: str, reconnect: bool = False
):
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    try:
        connected = await asyncio.to_thread(_ssh_control_is_alive, profile, session_name)
    except (OSError, RuntimeError, subprocess.TimeoutExpired) as exc:
        return JSONResponse({"error": str(exc)}, status_code=502)
    # Auto-reconnect: a stored credential lets a dropped control master come back
    # without user action. Failure is reported as "needs reconnect", not a 502,
    # because the IDE polls this and a dead host should not surface as an error.
    reconnected = False
    if not connected and reconnect and str(profile.get("password_enc") or ""):
        try:
            password = _ssh_vault_decrypt(
                str(profile.get("password_enc") or ""), str(profile.get("id") or "")
            )
            await asyncio.to_thread(
                _ssh_start_control_master, profile, session_name, password=password
            )
            await asyncio.to_thread(_ssh_open_tmux_window, profile, session_name)
            await _record_ssh_ide_audit(request, session_name, profile, "auto_reconnected")
            connected = reconnected = True
        except (OSError, RuntimeError, subprocess.TimeoutExpired):
            logger.info("Auto-reconnect failed for SSH connection %s", connection_id, exc_info=True)
    return JSONResponse({
        "connected": connected,
        "reconnected": reconnected,
        "window_name": _ssh_tmux_window_name(profile) if connected else "",
    })




@app.get("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/workspace")
async def api_get_ssh_workspace_state(request: Request, session_name: str, connection_id: str):
    """Return everything needed to resume this workspace where it was left."""
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    state = _ssh_read_ide_state(session_name, connection_id)
    return JSONResponse({
        "connection": _ssh_public_profile(profile),
        "tabs": state.get("tabs") or [],
        "active_path": state.get("active_path") or "",
        "last_directory": state.get("last_directory") or str(profile.get("last_directory") or "."),
        "buffers": state.get("buffers") or {},
    })


@app.put("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/workspace")
async def api_save_ssh_workspace_state(
    request: Request, session_name: str, connection_id: str, body: SSHWorkspaceStateBody
):
    """Persist tabs, focus, directory, and unsaved buffers for later resume."""
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    if len(body.tabs) > 50:
        return JSONResponse({"error": "Too many open tabs to persist"}, status_code=400)
    tabs: list[str] = []
    for tab in body.tabs:
        normalized = _normalized_workspace_path(profile, tab)
        if normalized is None:
            return JSONResponse({"error": "Invalid tab path"}, status_code=400)
        if normalized not in tabs:
            tabs.append(normalized)
    active_path = ""
    if body.active_path:
        active_path = _normalized_workspace_path(profile, body.active_path) or ""
    last_directory = _normalized_workspace_path(profile, body.last_directory)
    if last_directory is None:
        return JSONResponse({"error": "Invalid last directory"}, status_code=400)
    # Unsaved buffers hold real remote file content, so they are bounded here and
    # written to a 0600 file rather than kept unlimited.
    buffers: dict[str, str] = {}
    total = 0
    for raw_path, content in list(body.buffers.items())[:50]:
        normalized = _normalized_workspace_path(profile, raw_path)
        if normalized is None:
            return JSONResponse({"error": "Invalid buffer path"}, status_code=400)
        text = content or ""
        total += len(text.encode("utf-8"))
        if total > SSH_MAX_UNSAVED_STATE_BYTES:
            return JSONResponse(
                {"error": "Unsaved editor content is too large to preserve"}, status_code=413
            )
        buffers[normalized] = text
    _ssh_write_ide_state(session_name, connection_id, {
        "tabs": tabs,
        "active_path": active_path,
        "last_directory": last_directory,
        "buffers": buffers,
        "updated_at": time.time(),
    })
    _ssh_update_profile(session_name, connection_id, {"last_directory": last_directory})
    return JSONResponse({"ok": True, "tabs": tabs, "active_path": active_path, "last_directory": last_directory})


@app.post("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/focus-terminal")
async def api_focus_ssh_terminal(request: Request, session_name: str, connection_id: str):
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    try:
        audit = await asyncio.to_thread(
            _append_ssh_ide_audit, _current_user(request), session_name, profile, "terminal_focus_requested"
        )
        window_name = await asyncio.to_thread(_ssh_focus_tmux_window, profile, session_name)
    except (OSError, RuntimeError, subprocess.TimeoutExpired) as exc:
        return JSONResponse({"error": str(exc)}, status_code=502)
    return JSONResponse({"ok": True, "window_name": window_name, "audit_id": audit["id"]})




@app.get("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/files/search")
async def api_search_ssh_files(
    request: Request, session_name: str, connection_id: str, path: str = ".", query: str = ""
):
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    remote_path = _normalized_workspace_path(profile, path)
    search_query = query.strip()
    if remote_path is None:
        return JSONResponse({"error": "Invalid remote path"}, status_code=400)
    if not search_query or len(search_query) > 160 or "\x00" in search_query:
        return JSONResponse({"error": "Enter a file name query up to 160 characters"}, status_code=400)
    payload = json.dumps({"path": remote_path, "query": search_query})
    try:
        raw = await asyncio.to_thread(
            _ssh_run,
            profile,
            session_name,
            _ssh_workspace_command(profile, _SSH_SEARCH_SCRIPT, payload),
            timeout=30,
        )
        return JSONResponse(json.loads(raw))
    except (RuntimeError, ValueError, subprocess.TimeoutExpired) as exc:
        return JSONResponse({"error": str(exc)}, status_code=502)


@app.get("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/lsp/status")
async def api_ssh_lsp_status(request: Request, session_name: str, connection_id: str):
    """Discover supported remote language servers without starting a protocol process."""
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    try:
        raw = await asyncio.to_thread(
            _ssh_run, profile, session_name, _ssh_workspace_command(profile, _SSH_LSP_STATUS_SCRIPT, "."), timeout=20
        )
        return JSONResponse(json.loads(raw))
    except (RuntimeError, ValueError, subprocess.TimeoutExpired) as exc:
        return JSONResponse({"error": str(exc)}, status_code=502)


@app.get("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/files")
async def api_list_ssh_files(request: Request, session_name: str, connection_id: str, path: str = "."):
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    remote_path = _normalized_workspace_path(profile, path)
    if remote_path is None:
        return JSONResponse({"error": "Invalid remote path"}, status_code=400)
    try:
        raw = await asyncio.to_thread(
            _ssh_run, profile, session_name, _ssh_workspace_command(profile, _SSH_LIST_SCRIPT, remote_path), timeout=25
        )
        await _record_ssh_ide_audit(request, session_name, profile, "remote_list")
        return JSONResponse(json.loads(raw))
    except (RuntimeError, ValueError, subprocess.TimeoutExpired) as exc:
        return JSONResponse({"error": str(exc)}, status_code=502)


@app.get("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/file")
async def api_get_ssh_file(request: Request, session_name: str, connection_id: str, path: str):
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    remote_path = _normalized_workspace_path(profile, path)
    if remote_path is None:
        return JSONResponse({"error": "Invalid remote path"}, status_code=400)
    try:
        raw = await asyncio.to_thread(
            _ssh_run, profile, session_name, _ssh_workspace_command(profile, _SSH_READ_SCRIPT, remote_path), timeout=30
        )
        await _record_ssh_ide_audit(request, session_name, profile, "remote_read")
        return JSONResponse(json.loads(raw))
    except (RuntimeError, ValueError, subprocess.TimeoutExpired) as exc:
        return JSONResponse({"error": str(exc)}, status_code=502)


@app.put("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/file")
async def api_save_ssh_file(
    request: Request, session_name: str, connection_id: str, body: SSHRemoteFileBody
):
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    remote_path = _normalized_workspace_path(profile, body.path)
    if remote_path is None:
        return JSONResponse({"error": "Invalid remote path"}, status_code=400)
    content = body.content.encode("utf-8")
    max_file_bytes = int(profile.get("max_file_bytes") or SSH_MAX_FILE_BYTES)
    if len(content) > max_file_bytes:
        return JSONResponse({"error": f"File exceeds the {max_file_bytes // 1_000} KB connection limit"}, status_code=413)
    try:
        raw = await asyncio.to_thread(
            _ssh_run,
            profile,
            session_name,
            _ssh_workspace_command(profile, _SSH_WRITE_SCRIPT, remote_path),
            input_data=base64.b64encode(content),
            timeout=35,
        )
        await _record_ssh_ide_audit(request, session_name, profile, "remote_write")
        return JSONResponse(json.loads(raw))
    except (RuntimeError, ValueError, subprocess.TimeoutExpired) as exc:
        return JSONResponse({"error": str(exc)}, status_code=502)


@app.post("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/fs")
async def api_manage_ssh_filesystem(
    request: Request, session_name: str, connection_id: str, body: SSHRemoteFilesystemBody
):
    """Perform a deliberately small, non-recursive remote filesystem operation."""
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    if body.action not in {"create_file", "create_dir", "rename", "delete"}:
        return JSONResponse({"error": "Unsupported filesystem action"}, status_code=400)
    remote_path = _normalized_workspace_path(profile, body.path)
    if remote_path is None:
        return JSONResponse({"error": "Invalid remote path"}, status_code=400)
    new_path = ""
    if body.action == "rename":
        new_path = _normalized_workspace_path(profile, body.new_path)
        if new_path is None:
            return JSONResponse({"error": "Invalid destination path"}, status_code=400)
    elif body.new_path:
        return JSONResponse({"error": "A destination path is only valid for rename"}, status_code=400)
    payload = json.dumps({"action": body.action, "path": remote_path, "new_path": new_path})
    try:
        raw = await asyncio.to_thread(
            _ssh_run,
            profile,
            session_name,
            _ssh_workspace_command(profile, _SSH_FILESYSTEM_SCRIPT, payload),
            timeout=30,
        )
        await _record_ssh_ide_audit(request, session_name, profile, "remote_filesystem_change")
        return JSONResponse(json.loads(raw))
    except (RuntimeError, ValueError, subprocess.TimeoutExpired) as exc:
        return JSONResponse({"error": str(exc)}, status_code=502)


@app.post("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/git")
async def api_manage_ssh_git(
    request: Request, session_name: str, connection_id: str, body: SSHGitBody
):
    """Run a fixed, validated set of Git operations over the live SSH bridge."""
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    if body.action not in {
        "status", "diff", "diff_file", "stage", "unstage", "discard",
        "commit", "switch", "create_branch", "fetch", "pull", "push", "log",
        "show",
    }:
        return JSONResponse({"error": "Unsupported Git action"}, status_code=400)
    remote_path = _normalized_workspace_path(profile, body.path)
    if remote_path is None:
        return JSONResponse({"error": "Invalid repository path"}, status_code=400)
    files = [item.strip() for item in body.files]
    if len(files) > 100 or any(not _valid_git_pathspec(item) for item in files):
        return JSONResponse({"error": "Invalid Git file selection"}, status_code=400)
    if body.action in {"stage", "unstage", "discard"} and not files:
        return JSONResponse({"error": "Select at least one file or folder"}, status_code=400)
    if body.action == "diff_file" and len(files) != 1:
        return JSONResponse({"error": "Choose exactly one file to diff"}, status_code=400)
    message = body.message.strip()
    if body.action == "commit" and (not message or len(message) > 1000 or "\x00" in message):
        return JSONResponse({"error": "Enter a commit message up to 1,000 characters"}, status_code=400)
    branch = body.branch.strip()
    if body.action in {"switch", "create_branch"} and not _valid_git_branch(branch):
        return JSONResponse({"error": "Invalid branch name"}, status_code=400)
    ref = body.ref.strip()
    if body.action == "show" and not _valid_git_commit_ref(ref):
        return JSONResponse({"error": "Invalid commit reference"}, status_code=400)
    payload = json.dumps({
        "action": body.action,
        "path": remote_path,
        "files": files,
        "message": message,
        "branch": branch,
        "ref": ref,
    })
    try:
        raw = await asyncio.to_thread(
            _ssh_run,
            profile,
            session_name,
            _ssh_workspace_command(profile, _SSH_GIT_SCRIPT, payload),
            timeout=40,
        )
        return JSONResponse(json.loads(raw))
    except (RuntimeError, ValueError, subprocess.TimeoutExpired) as exc:
        return JSONResponse({"error": str(exc)}, status_code=502)


def _send_session_owner_environment(session_name: str):
    """Bind a pane to its owner's CODEX_HOME, advisor token, and project."""
    owner = _user_for_session(session_name)
    if owner and not _is_admin(owner):
        try:
            _ensure_user_codex_config_dir(owner)
            codex_home = _user_codex_config_dir(owner)
            token_path = codex_home / "advisor-token"
            if not token_path.is_file():
                logger.error(
                    "Refusing to configure member session '%s': private advisor token is missing",
                    session_name,
                )
                return False
            project_dir = _member_session_project_dir(owner, session_name)
            config_path = codex_home / "config.toml"
            existing = config_path.read_text() if config_path.exists() else ""
            trusted = _ensure_codex_project_trust(existing, str(project_dir))
            if trusted != existing:
                _backup_before_dashboard_write(config_path)
                config_path.write_text(trusted)
            cmd = (
                "export CODEX_HOME="
                + shlex.quote(str(codex_home))
                + "; export ADVISOR_TOKEN=\"$(cat "
                + shlex.quote(str(token_path))
                + " 2>/dev/null)\""
                + "; cd -- "
                + shlex.quote(str(project_dir))
            )
        except Exception:
            logger.exception("Failed to prepare owner environment for '%s'", session_name)
            return False
    else:
        token_path = Path.home() / ".advisor-token"
        cmd = (
            "unset CODEX_HOME; export ADVISOR_TOKEN=\"$(cat "
            + shlex.quote(str(token_path))
            + " 2>/dev/null)\""
        )
    try:
        subprocess.run(["tmux", "send-keys", "-t", session_name, "-l", cmd],
                       capture_output=True, text=True, timeout=5)
        subprocess.run(["tmux", "send-keys", "-t", session_name, "Enter"],
                       capture_output=True, text=True, timeout=5)
        return True
    except Exception:
        logger.debug("send-keys failed for owner environment", exc_info=True)
        return False


# --- System stats ---

@app.get("/api/stats")
async def api_stats():
    """System stats: CPU, disk, memory, tmux sessions, Codex processes."""
    stats = {}
    # CPU load
    try:
        with open('/proc/loadavg') as f:
            parts = f.read().split()
            stats["cpu_load"] = {"1m": parts[0], "5m": parts[1], "15m": parts[2]}
            # Running threads from field 4 (e.g. "2/150")
            if len(parts) > 3 and '/' in parts[3]:
                running, total = parts[3].split('/')
                stats["threads_running"] = int(running)
                stats["threads_total"] = int(total)
    except Exception:
        stats["cpu_load"] = {}
    # CPU count and approximate usage percent
    try:
        cpu_count = os.cpu_count() or 1
        stats["cpu_count"] = cpu_count
        load_1m = float(stats.get("cpu_load", {}).get("1m", 0))
        stats["cpu_percent"] = min(round(load_1m / cpu_count * 100, 1), 100.0)
    except Exception:
        stats["cpu_count"] = 1
        stats["cpu_percent"] = 0
    # Memory
    try:
        result = subprocess.run(["free", "-m"], capture_output=True, text=True, timeout=5)
        lines = result.stdout.strip().split("\n")
        if len(lines) >= 2:
            parts = lines[1].split()
            stats["memory"] = {
                "total_mb": int(parts[1]),
                "used_mb": int(parts[2]),
                "available_mb": int(parts[6]) if len(parts) > 6 else int(parts[3]),
            }
    except Exception:
        stats["memory"] = {}
    # Disk
    try:
        usage = shutil.disk_usage("/")
        stats["disk"] = {
            "total_gb": round(usage.total / (1024**3), 1),
            "used_gb": round(usage.used / (1024**3), 1),
            "free_gb": round(usage.free / (1024**3), 1),
            "pct": round(usage.used / usage.total * 100, 1),
        }
    except Exception:
        stats["disk"] = {}
    # tmux sessions
    stats["tmux_sessions"] = get_tmux_sessions()
    # Codex processes
    try:
        result = subprocess.run(
            ["pgrep", "-a", "codex"],
            capture_output=True, text=True, timeout=5
        )
        stats["codex_processes"] = [
            line.strip() for line in result.stdout.strip().split("\n") if line.strip()
        ]
    except Exception:
        stats["codex_processes"] = []
    # Codex-related processes
    try:
        result = subprocess.run(
            ["pgrep", "-a", "-f", "codex"],
            capture_output=True, text=True, timeout=5
        )
        stats["codex_related"] = len([
            line for line in result.stdout.strip().split("\n") if line.strip()
        ])
    except Exception:
        stats["codex_related"] = 0
    # Uptime
    try:
        with open('/proc/uptime') as f:
            uptime_secs = float(f.read().split()[0])
            days = int(uptime_secs // 86400)
            hours = int((uptime_secs % 86400) // 3600)
            stats["uptime"] = f"{days}d {hours}h"
    except Exception:
        stats["uptime"] = "unknown"
    controller = _controller_snapshot.read()
    by_browser = controller.get("browser_leases_by_session", {})
    stats["capacity"] = {
        # This is the scheduling signal. Parked/idle tmux sessions retain user
        # state but consume no browser capacity.
        "active_browser_leases": int(controller.get("active_browser_leases") or 0),
        "active_browsers": sum(1 for count in by_browser.values() if int(count) > 0),
        "browser_leases_by_session": by_browser,
        "parked_sessions": int(controller.get("parked_sessions") or 0),
        "terminal_streams": int(controller.get("terminal_streams") or 0),
        "terminal_subscribers": int(controller.get("terminal_subscribers") or 0),
        "total_tmux_sessions": len(stats["tmux_sessions"]),
        "controller_age_seconds": round(max(0, time.time() - float(controller.get("updated_at") or 0)), 1),
    }
    return JSONResponse(stats)


@app.get("/api/health")
async def api_health():
    """Lightweight health check for tmux, Codex CLI, and authentication."""
    checks = {
        "status": "ok",
        "tmux": False,
        "openai": bool(_active_openai_key() or (CODEX_HOME / "auth.json").exists()),
        "data_dir": False,
    }
    try:
        checks["data_dir"] = MESSAGES_DIR.is_dir() and os.access(MESSAGES_DIR, os.W_OK)
    except Exception:
        checks["data_dir"] = False
    try:
        result = subprocess.run(
            ["tmux", "list-sessions", "-F", "#{session_name}"],
            capture_output=True, text=True, timeout=3
        )
        checks["tmux"] = result.returncode == 0 or "no server running" in result.stderr
    except Exception:
        checks["tmux"] = False
    codex_ready, codex_reason, codex_details = await asyncio.to_thread(_codex_cli_readiness)
    checks["codex_cli"] = {"ready": codex_ready, "reason": codex_reason, **codex_details}
    controller = await _controller_call("ping")
    checks["controller"] = controller
    if not checks["tmux"] or not codex_ready or not checks["data_dir"] or not controller.get("ok"):
        checks["status"] = "degraded"
    return JSONResponse(checks)


# --- Claude account identity + per-session stale-login detection ---
#
# A running `claude` process pins whatever account was in `.credentials.json`
# at startup; the file changing later does NOT switch a live session. So a
# session started before a login switch keeps showing the OLD account's 5-hour
# usage bar inside its TUI. We detect that by comparing each session's claude
# process start time against when the active account last *changed* (not merely
# refreshed) for that session's CLAUDE_CONFIG_DIR.

def _friendly_plan(sub: str, tier: str) -> str:
    t = (tier or "").lower()
    if "max_20x" in t:
        return "Max 20x"
    if "max_5x" in t:
        return "Max 5x"
    if "pro" in t:
        return "Pro"
    if "team" in t:
        return "Team"
    s = (sub or "").lower()
    if s == "max":
        return "Max"
    if s == "pro":
        return "Pro"
    if s == "free":
        return "Free"
    return sub.capitalize() if sub else "—"


def _clk_tck() -> int:
    try:
        return os.sysconf("SC_CLK_TCK")
    except Exception:
        return 100


_btime_cache: list = [0.0]


def _system_btime() -> float:
    if _btime_cache[0]:
        return _btime_cache[0]
    try:
        with open("/proc/stat") as f:
            for line in f:
                if line.startswith("btime "):
                    _btime_cache[0] = float(line.split()[1])
                    break
    except Exception:
        pass
    return _btime_cache[0]


def _proc_start_epoch(pid) -> float:
    """Wall-clock epoch when process <pid> started, from /proc/<pid>/stat."""
    try:
        with open(f"/proc/{pid}/stat") as f:
            data = f.read()
        # comm (field 2) is wrapped in parens and may contain spaces/parens, so
        # split after the last ')'. starttime is field 22 (clock ticks since boot).
        fields = data[data.rfind(")") + 2:].split()
        if len(fields) <= 19:
            return 0.0
        btime = _system_btime()
        if btime <= 0:
            return 0.0
        return btime + float(fields[19]) / _clk_tck()
    except Exception:
        return 0.0


def _build_proc_tree() -> tuple:
    """One `ps` call -> (children_by_ppid: dict, comm_by_pid: dict)."""
    children: dict = {}
    comm: dict = {}
    try:
        res = subprocess.run(
            ["ps", "-eo", "pid=,ppid=,comm="],
            capture_output=True, text=True, timeout=5,
        )
        for line in (res.stdout or "").splitlines():
            parts = line.split(None, 2)
            if len(parts) < 2:
                continue
            pid, ppid = parts[0], parts[1]
            children.setdefault(ppid, []).append(pid)
            comm[pid] = parts[2] if len(parts) > 2 else ""
    except Exception:
        pass
    return children, comm


def _all_pane_pids_by_session() -> dict:
    """One `tmux list-panes -a` call -> {session_name: [pane_pid, ...]}."""
    m: dict = {}
    try:
        res = subprocess.run(
            ["tmux", "list-panes", "-a", "-F", "#{session_name} #{pane_pid}"],
            capture_output=True, text=True, timeout=5,
        )
        for line in (res.stdout or "").splitlines():
            parts = line.split()
            if len(parts) >= 2 and parts[1].isdigit():
                m.setdefault(parts[0], []).append(parts[1])
    except Exception:
        pass
    return m


def _claude_pids_under(roots, children: dict, comm: dict) -> list:
    """BFS the process tree from pane roots, returning descendant `claude` pids."""
    out = []
    stack = list(roots)
    seen = set(roots)
    steps = 0
    while stack and steps < 10000:
        steps += 1
        cur = stack.pop()
        for ch in children.get(cur, []):
            if ch in seen:
                continue
            seen.add(ch)
            stack.append(ch)
            if (comm.get(ch, "") or "").lower() == "claude":
                out.append(ch)
    return out


_account_ident_cache: dict = {}


def _account_identity(config_dir) -> dict:
    """Current Claude account for a CLAUDE_CONFIG_DIR (cached 30s)."""
    key = str(config_dir)
    now = time.time()
    cached = _account_ident_cache.get(key)
    if cached and now - cached[0] < 30:
        return cached[1]
    config_dir = Path(config_dir)
    sub = tier = email = org = ""
    cred_mtime = 0.0
    creds = config_dir / ".credentials.json"
    try:
        cred_mtime = creds.stat().st_mtime
        oauth = json.loads(creds.read_text()).get("claudeAiOauth", {})
        sub = oauth.get("subscriptionType", "") or ""
        tier = oauth.get("rateLimitTier", "") or ""
    except Exception:
        pass
    # The big config (with oauthAccount.emailAddress) lives at <dir>/.claude.json,
    # except the default ~/.claude whose config is the home-level ~/.claude.json.
    cj = config_dir / ".claude.json"
    profile_fetched = 0.0
    try:
        if not cj.exists() and config_dir == Path.home() / ".claude":
            cj = Path.home() / ".claude.json"
        oa = json.loads(cj.read_text()).get("oauthAccount", {})
        email = oa.get("emailAddress", "") or ""
        org = oa.get("organizationUuid", "") or ""
        # profileFetchedAt (ms) marks when this account was last logged in/switched.
        # Unlike the credentials mtime, it does NOT move on a routine token refresh,
        # so it's the correct anchor for "when did the active account change".
        pf = oa.get("profileFetchedAt") or 0
        profile_fetched = float(pf) / 1000.0 if pf else 0.0
    except Exception:
        pass
    ident = {
        "email": email, "sub": sub, "tier": tier,
        "plan": _friendly_plan(sub, tier),
        "fp": org or (sub + "/" + tier),  # account fingerprint (changes per account)
        "cred_mtime": cred_mtime,
        "profile_fetched": profile_fetched,
    }
    _account_ident_cache[key] = (now, ident)
    return ident




def _load_login_state() -> dict:
    try:
        return json.loads(_LOGIN_STATE_FILE.read_text())
    except Exception:
        return {}


def _save_login_state(state: dict):
    try:
        _LOGIN_STATE_FILE.parent.mkdir(parents=True, exist_ok=True)
        _LOGIN_STATE_FILE.write_text(json.dumps(state))
    except Exception:
        logger.debug("Could not persist login_state.json", exc_info=True)


def _login_switch_time(config_dir, ident: dict) -> float:
    """Epoch of the last *observed* account switch for this config dir, or 0.

    Returns 0 when the dashboard has only ever seen one account fingerprint for
    this dir — i.e. no switch has happened — so long-running sessions are never
    falsely flagged. The value advances ONLY when the active fingerprint is seen
    to change between two polls.

    Why not anchor on profileFetchedAt / the credentials mtime: BOTH of those
    move on a routine OAuth token refresh (claude re-fetches the profile and
    rewrites .credentials.json every few hours) even though the account is
    unchanged. Anchoring on them made the first poll after a refresh look like a
    brand-new login and flag every older — but identical-account — session as
    "on old login". The fingerprint (org UUID / sub+tier) does NOT move on a
    refresh, so a fingerprint *change* is the only reliable switch signal.

    Persisted so a genuine switch (including one that happened while the
    dashboard was down) survives restarts.
    """
    key = str(config_dir)
    state = _load_login_state()
    cur = state.get(key)
    now = time.time()
    fp = ident.get("fp", "")
    # Best estimate of when a switch happened = the new account's profile fetch
    # time (≈ when it was logged in/switched to); fall back to creds mtime/now.
    anchor = ident.get("profile_fetched") or ident.get("cred_mtime") or now
    if not cur:
        # First sight of this dir: record the account but do NOT assume a switch
        # just happened — the account may have been active for a long time.
        state[key] = {"fp": fp, "since": anchor, "switched_at": 0}
        _save_login_state(state)
        return 0.0
    if cur.get("fp") != fp:
        # A genuine account change observed between two polls -> record it.
        state[key] = {"fp": fp, "since": anchor, "switched_at": anchor}
        _save_login_state(state)
        return anchor
    # Same account as last poll: keep the recorded switch time (0 if never).
    return float(cur.get("switched_at", 0) or 0)


@app.get("/api/login-health")
async def api_login_health():
    """Per-session Claude login health: flags sessions whose live `claude`
    process started before the current account became active (i.e. its in-TUI
    5-hour usage bar reflects a previous account)."""
    def _compute():
        sessions = get_tmux_sessions()
        children, comm = _build_proc_tree()
        panes = _all_pane_pids_by_session()
        ident_by_dir: dict = {}
        out = []
        for s in sessions:
            name = s["name"]
            base = _session_config_base(name)
            key = str(base)
            ident = ident_by_dir.get(key)
            if ident is None:
                ident = _account_identity(base)
                ident_by_dir[key] = ident
            switched_at = _login_switch_time(base, ident)
            cpids = _claude_pids_under(panes.get(name, []), children, comm)
            starts = [e for e in (_proc_start_epoch(p) for p in cpids) if e > 0]
            claude_started = min(starts) if starts else 0
            # Flag stale only when an account switch was actually observed AND
            # this session's claude predates it (5s slack avoids flagging a
            # session launched in the same moment as the switch).
            stale = bool(claude_started and switched_at and claude_started < switched_at - 5)
            out.append({
                "name": name,
                "stale": stale,
                "claude_running": bool(cpids),
                "claude_started": claude_started,
                "plan": ident["plan"],
                "account": ident["email"] or ident["sub"],
            })
        active = _account_identity(Path.home() / ".claude")
        return {
            "account": {"email": active["email"], "plan": active["plan"],
                        "sub": active["sub"], "tier": active["tier"]},
            "stale_count": sum(1 for x in out if x["stale"]),
            "sessions": out,
        }
    try:
        data = await asyncio.to_thread(_compute)
    except Exception:
        logger.exception("login-health compute failed")
        return JSONResponse({"account": {}, "stale_count": 0, "sessions": []})
    return JSONResponse(data)


# --- Codex authentication status --------------------------------------------
def _auth_admin_ok(request: Request) -> bool:
    user = _current_user(request)
    return bool(user and _is_admin(user))


def _load_longlived_token() -> str:
    """Compatibility shim for retired Claude browser-auth paths."""
    return ""


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


@app.get("/api/auth/status")
async def api_auth_status(request: Request):
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    return JSONResponse(_codex_auth_status_dict())


@app.post("/api/auth/token")
@app.delete("/api/auth/token")
@app.post("/api/auth/setup/start")
@app.post("/api/auth/setup/submit")
async def api_legacy_claude_auth_removed(request: Request):
    """Retire Claude's setup-token flow; Codex uses login or API-key auth."""
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    return JSONResponse(
        {"error": "Claude setup-token auth was removed. Use Codex login or the OpenAI API key control."},
        status_code=410,
    )


BROWSER_MAX_EXTRA = 4  # cap concurrent EXTRA browsers (RAM headroom)





























































@app.get("/api/my/browser")
async def api_my_browser(request: Request):
    """Return only the signed-in member's persistent, on-demand browser."""
    user = _current_user(request)
    if not user:
        return JSONResponse({"error": "Not logged in"}, status_code=401)
    browser = await asyncio.to_thread(
        _ensure_user_browser_session,
        user,
        start=False,
    )
    row = _browser_response_row(browser)
    runtime = _browser_runtime_row(str(browser.get("id") or ""))
    row["running"] = await asyncio.to_thread(_browser_process_alive, browser)
    row["mode"] = runtime.get("mode", "headed" if row["running"] else "parked")
    row["parked"] = not row["running"]
    leases = await asyncio.to_thread(_browser_leases.snapshot)
    row["active_leases"] = int(
        leases.get("by_browser", {}).get(browser.get("id"), 0)
    )
    public = {
        key: row.get(key)
        for key in (
            "id", "name", "viewer_url", "running", "mode", "parked",
            "active_leases",
        )
    }
    return JSONResponse({"browser": public})


@app.get("/api/browser/sessions")
async def api_browser_sessions(request: Request):
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    sessions = [
        session
        for session in _load_browser_sessions()
        if _browser_owner_id(session) == "admin"
    ]
    out = []
    leases = await asyncio.to_thread(_browser_leases.snapshot)
    for s in sessions:
        row = _browser_response_row(s)
        runtime = _browser_runtime_row(str(s.get("id") or ""))
        row["running"] = await asyncio.to_thread(_browser_process_alive, s)
        row["mode"] = runtime.get("mode", "headed" if row["running"] else "parked")
        row["parked"] = not row["running"]
        row["active_leases"] = int(leases.get("by_browser", {}).get(s.get("id"), 0))
        out.append(row)
    extra = sum(
        1
        for s in sessions
        if s.get("managed") and not s.get("account_browser")
    )
    return JSONResponse({"sessions": out, "max_extra": BROWSER_MAX_EXTRA,
                         "extra_count": extra, "root_path": ROOT_PATH})


@app.post("/api/browser/sessions")
async def api_browser_create(body: BrowserCreateBody, request: Request):
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    sessions = _load_browser_sessions()
    if sum(
        1
        for s in sessions
        if s.get("managed")
        and _browser_owner_id(s) == "admin"
        and not s.get("account_browser")
    ) >= BROWSER_MAX_EXTRA:
        return JSONResponse({"error": f"Limit reached ({BROWSER_MAX_EXTRA} extra sessions)."}, status_code=400)
    slot = _next_browser_slot(sessions)
    sid = f"s{slot}"
    disp, rfb, vnc, cdp = 99 + slot, 5900 + slot, 6080 + slot, 9222 + slot
    name = (body.name or "").strip() or f"Browser {slot + 1}"
    entry = {"id": sid, "name": name, "slot": slot, "display": disp, "rfb_port": rfb,
             "vnc_port": vnc, "cdp_port": cdp, "managed": True,
             "owner_id": "admin", "account_browser": False,
             "created_at": time.time()}
    sessions.append(entry)
    _save_browser_sessions(sessions)
    if await asyncio.to_thread(_browser_process_alive, entry):
        acquired = {"ok": True, "lease": {}}
    else:
        acquired = await _controller_call(
            "browser_acquire",
            browser_id=sid,
            kind="create",
            owner="dashboard",
            ttl=BROWSER_LEASE_TTL,
            mode="headless",
        )
    ok = bool(acquired.get("ok"))
    row = _browser_response_row(entry)
    row["running"] = ok
    row["mode"] = "headless" if ok else "failed"
    row["active_leases"] = 1 if ok else 0
    logger.info("Browser session '%s' created on display :%d (vnc %d, cdp %d), started=%s",
                sid, disp, vnc, cdp, ok)
    return JSONResponse({"ok": ok, "session": row, "started": ok,
                         "lease": acquired.get("lease", {})},
                        status_code=200 if ok else 502)


@app.delete("/api/browser/sessions/{sid}")
async def api_browser_delete(sid: str, request: Request):
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    sessions = _load_browser_sessions()
    target = next((s for s in sessions if s.get("id") == sid), None)
    if (
        not target
        or _browser_owner_id(target) != "admin"
        or target.get("account_browser")
    ):
        return JSONResponse({"error": "not found"}, status_code=404)
    if not target.get("managed"):
        return JSONResponse({"error": "The default browser is managed by systemd and can't be removed here."},
                            status_code=400)

    await asyncio.to_thread(_browser_leases.release_browser, sid)
    stopped = await _controller_call("browser_stop", browser_id=sid, reason="browser removed")
    if not stopped.get("ok"):
        return JSONResponse({"error": stopped.get("error", "browser did not stop")}, status_code=502)
    _save_browser_sessions([s for s in sessions if s.get("id") != sid])
    # Give its proxy port + sticky identity back, so a later browser reusing the
    # slot doesn't inherit a stranger's exit IP or its bandwidth counter.
    try:
        conf = _proxy_conf()
        if (conf.get("sessions") or {}).pop(sid, None) is not None:
            _proxy_save(conf)
    except Exception:
        logger.debug("Failed to drop proxy session for %s", sid, exc_info=True)
    logger.info("Browser session '%s' stopped and removed", sid)
    return JSONResponse({"ok": True})


@app.post("/api/browser/sessions/{sid}/lease")
async def api_browser_lease_acquire(sid: str, body: BrowserLeaseBody, request: Request):
    """Acquire an explicit renewable browser lease and restore it on demand."""
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    result = await _controller_call(
        "browser_acquire",
        browser_id=sid,
        kind=body.kind,
        owner=body.owner or str(_current_user(request) or "dashboard"),
        ttl=body.ttl,
        mode=body.mode,
    )
    return JSONResponse(result, status_code=200 if result.get("ok") else 503)


@app.put("/api/browser/leases/{token}")
async def api_browser_lease_renew(token: str, body: BrowserLeaseBody, request: Request):
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    result = await _controller_call("browser_renew", token=token, ttl=body.ttl)
    return JSONResponse(result, status_code=200 if result.get("ok") else 404)


@app.delete("/api/browser/leases/{token}")
async def api_browser_lease_release(token: str, request: Request):
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    result = await _controller_call("browser_release", token=token)
    return JSONResponse(result, status_code=200 if result.get("ok") else 404)




@app.patch("/api/browser/sessions/{sid}")
async def api_browser_update(sid: str, body: BrowserPatchBody, request: Request):
    """Rename a browser session and/or set its note (what the browser is for).
    Allowed for the default systemd browser too — it's only metadata."""
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    sessions = _load_browser_sessions()
    target = next((s for s in sessions if s.get("id") == sid), None)
    if not target or _browser_owner_id(target) != "admin":
        return JSONResponse({"error": "not found"}, status_code=404)
    if body.name is not None:
        name = body.name.strip()
        if not name:
            return JSONResponse({"error": "Name cannot be empty"}, status_code=400)
        target["name"] = name[:80]
    if body.notes is not None:
        target["notes"] = body.notes.strip()[:2000]
    if body.use_for_login is not None:
        # Exactly one browser owned by this account is designated for login.
        for s in sessions:
            if _browser_owner_id(s) == "admin":
                s["use_for_login"] = False
        target["use_for_login"] = bool(body.use_for_login)
    _save_browser_sessions(sessions)
    _browser_auth_cache.pop(sid, None)   # re-check on next poll
    row = _browser_response_row(target)
    row["running"] = await asyncio.to_thread(_browser_port_alive, target.get("vnc_port", 0))
    logger.info("Browser session '%s' updated (name=%r, notes=%d chars)",
                sid, target.get("name"), len(target.get("notes", "")))
    return JSONResponse({"ok": True, "session": row})


BROWSER_FINGERPRINT_TOOL = CB_ROOT / "bin" / "fingerprint-audit.py"














@app.get("/api/browser/proxy")
async def api_browser_proxy_get(request: Request, check: int = 0):
    """Proxy config (password never leaves the box), per-browser identity and
    the bandwidth each browser has burned — residential traffic is billed per GB."""
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    conf = _proxy_conf()
    usage = _proxy_usage()
    rows = []
    for s in _load_browser_sessions():
        sid = s.get("id")
        sess = (conf.get("sessions") or {}).get(sid) or {}
        u = usage.get(sid) or {}
        row = {
            "id": sid, "name": s.get("name", ""),
            "local_port": sess.get("local_port"),
            "session_id": sess.get("session_id", ""),
            "country": sess.get("country") or conf.get("country") or "",
            "enabled": bool(sess.get("enabled", True)) and bool(sess.get("local_port")),
            "bytes": int(u.get("bytes_up", 0)) + int(u.get("bytes_down", 0)),
            "conns": int(u.get("conns", 0)),
            "last_error": u.get("last_error", ""),
        }
        if check and sess.get("local_port"):
            row["exit"] = await _proxy_exit_info(sess["local_port"])
        rows.append(row)
    total = sum(int(u.get("bytes_up", 0)) + int(u.get("bytes_down", 0)) for u in usage.values())
    return JSONResponse({
        "installed": BROWSER_PROXY_CONF.parent.exists() and (CB_ROOT / "bin" / "proxy_relay.py").exists(),
        "enabled": bool(conf.get("enabled")),
        "provider": conf.get("provider", ""),
        "host": conf.get("host", ""), "port": conf.get("port", 0),
        "username": conf.get("username", ""), "zone": conf.get("zone", ""),
        "password_set": bool(conf.get("password")),
        "country": conf.get("country", ""),
        "providers": sorted(_proxy_presets().keys()),
        "browsers": rows, "total_bytes": total,
    })




@app.post("/api/browser/proxy")
async def api_browser_proxy_set(body: BrowserProxyBody, request: Request):
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    conf = _proxy_conf()
    presets = _proxy_presets()
    if body.provider and body.provider in presets:
        p = presets[body.provider]
        conf["provider"] = body.provider
        conf["host"] = body.host or p["host"]
        conf["port"] = body.port or p["port"]
        for k in ("username_template", "password_template", "rotating_template"):
            conf[k] = p[k]
    if body.host:
        conf["host"] = body.host
    if body.port:
        conf["port"] = body.port
    if body.username is not None:
        conf["username"] = body.username.strip()
    if body.password:                       # blank => keep the stored one
        conf["password"] = body.password
    if body.zone is not None:
        conf["zone"] = body.zone.strip()
    if body.country is not None:
        conf["country"] = body.country.strip().lower()
    if body.enabled is not None:
        conf["enabled"] = bool(body.enabled)
        # The cached exit-IP timezone belongs to the old route.
        for f in (CB_ROOT / "state").glob("*.geo.json"):
            try:
                f.unlink()
            except Exception:
                pass
    _proxy_save(conf)
    logger.info("Browser proxy config updated (enabled=%s provider=%s user=%s)",
                conf.get("enabled"), conf.get("provider"), conf.get("username"))
    return JSONResponse({"ok": True})


@app.post("/api/browser/proxy/{sid}/rotate")
async def api_browser_proxy_rotate(sid: str, request: Request):
    """New sticky session id => the provider hands this browser a new exit IP."""
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    conf = _proxy_conf()
    sess = (conf.get("sessions") or {}).get(sid)
    if not sess:
        return JSONResponse({"error": "this browser has no proxy port yet"}, status_code=404)
    sess["session_id"] = secrets.token_hex(5)   # lowercase alnum: valid for every provider
    _proxy_save(conf)
    try:
        (CB_ROOT / "state" / f"{sid}.geo.json").unlink()
    except Exception:
        pass
    await asyncio.sleep(6)      # let the relay pick the config change up
    info = await _proxy_exit_info(sess.get("local_port", 0))
    logger.info("Browser '%s' rotated to sticky session %s (exit %s)",
                sid, sess["session_id"], info.get("ip", "?"))
    return JSONResponse({"ok": True, "session_id": sess["session_id"], "exit": info})


@app.get("/api/browser/fingerprint/{sid}")
async def api_browser_fingerprint(sid: str, request: Request):
    """Run the fingerprint audit against one browser: what a bot-detection
    vendor would see (webdriver flag, WebGL renderer, WebRTC leak, timezone vs
    exit IP, fonts, media devices …)."""
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    s = _browser_session_by_id(sid)
    if not s:
        return JSONResponse({"error": "not found"}, status_code=404)
    if not BROWSER_FINGERPRINT_TOOL.exists():
        return JSONResponse({"error": "fingerprint-audit.py is not installed"}, status_code=501)

    def _run():
        return subprocess.run(
            ["python3", str(BROWSER_FINGERPRINT_TOOL), "--cdp", str(s.get("cdp_port", 0)), "--json"],
            capture_output=True, text=True, timeout=180)

    async with _browser_busy_ctx(sid, "fingerprint check"):
        try:
            r = await asyncio.to_thread(_run)
        except Exception as e:
            return JSONResponse({"error": str(e)[:300]}, status_code=500)
    if r.returncode != 0:
        return JSONResponse({"error": (r.stderr or "audit failed").strip()[:300]}, status_code=502)
    try:
        return JSONResponse(json.loads(r.stdout))
    except Exception:
        return JSONResponse({"error": "could not parse audit output"}, status_code=502)




@asynccontextmanager




















@asynccontextmanager






def _display_idle_ms(display: int) -> int:
    """Milliseconds since the last real input (mouse/keyboard) on an X display.
    Drives the 'browser is being used right now' state — this is what catches a
    human clicking around over noVNC, which no amount of CDP polling would see."""
    try:
        out = subprocess.run(["xprintidle"], env={"DISPLAY": f":{display}", "PATH": "/usr/bin:/bin"},
                             capture_output=True, text=True, timeout=5).stdout.strip()
        return int(out) if out.isdigit() else -1
    except Exception:
        return -1


# Below this, the browser counts as actively in use (blinking indicator).
BROWSER_ACTIVE_IDLE_MS = 15000




@app.get("/api/browser/auth-status")
async def api_browser_auth_status(request: Request, refresh: int = 0):
    """Compatibility endpoint for the retired Claude browser-auth integration."""
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    generic = []
    for session in _load_browser_sessions():
        running = await asyncio.to_thread(_browser_port_alive, session.get("vnc_port", 0))
        generic.append({
            "id": session.get("id"),
            "name": session.get("name", ""),
            "running": running,
            "logged_in": False,
            "can_authorize": False,
            "active": False,
            "busy": False,
        })
    return JSONResponse({
        "sessions": generic,
        "any_logged_in": False,
        "any_can_authorize": False,
        "active": False,
        "busy": False,
        "auto_auth": False,
        "pending_auth": {},
        "retired": True,
    })
    # Legacy implementation retained below for rollback archaeology; unreachable.
    sessions = _load_browser_sessions()
    login_pick = _pick_login_browser()
    out = []
    for s in sessions:
        sid = s.get("id")
        alive = await asyncio.to_thread(_browser_port_alive, s.get("vnc_port", 0))
        acct = {"logged_in": False, "email": "", "can_authorize": False,
                "capabilities": [], "error": "not running"}
        if alive:
            cached = _browser_auth_cache.get(sid)
            if refresh or not cached:
                acct = await _browser_claude_account(sid, s.get("cdp_port", 0), force=bool(refresh))
            else:
                acct = cached["data"]
        # "In use" = real input on its X display (someone driving it over noVNC)
        # OR us driving it over CDP right now.
        idle_ms = await asyncio.to_thread(_display_idle_ms, s.get("display", 0)) if alive else -1
        driven = sid in _browser_busy
        active = driven or (0 <= idle_ms < BROWSER_ACTIVE_IDLE_MS)
        out.append({
            "id": sid, "name": s.get("name", ""), "running": alive,
            "use_for_login": bool(s.get("use_for_login")) or (login_pick.get("id") == sid),
            "busy": driven,
            "busy_what": (_browser_busy.get(sid) or {}).get("what", ""),
            "idle_ms": idle_ms, "active": active,
            **acct,
        })
    return JSONResponse({
        "sessions": out,
        "any_logged_in": any(x["logged_in"] for x in out),
        "any_can_authorize": any(x["can_authorize"] for x in out),
        # A signed-in browser is being used right now (by a person over noVNC or
        # by us) -> the indicator blinks.
        "active": any(x["active"] and x["logged_in"] for x in out),
        "active_what": next((x["busy_what"] or ("in use: " + x["name"])
                             for x in out if x["active"] and x["logged_in"]), ""),
        "busy": bool(_browser_busy),
        "busy_what": next((v.get("what", "") for v in _browser_busy.values()), ""),
        "login_browser": login_pick.get("id", ""),
        "auto_auth": AUTO_AUTH_ENABLED,
        # Set only when auto-auth got everything ready but couldn't click the
        # final consent through; the UI turns this into a one-click link.
        "pending_auth": (_pending_auth
                         if _pending_auth and time.time() - _pending_auth.get("ts", 0) < 1800
                         else {}),
    })


# --- Auto-auth: complete a Claude Code login without a human ------------------
# When a session is sitting at "please run /login" (or a fresh session needs its
# first sign-in), we: start the /login flow, scrape the authorize URL out of the
# pane, click it through in the designated login browser (which is already signed
# in to claude.ai), read the resulting code, and type it back into the session.
# The whole dance is deterministic Python + CDP — no second Claude session and no
# metered API spend needed to log a session back in.
_AUTH_URL_RE = re.compile(r"https://claude\.(?:ai|com)/[^\s\"'<>]*oauth/authorize\S*")
# A URL continuation fragment: the TUI hard-wraps the authorize link across
# several REAL lines (not soft-wrapped, so `capture-pane -J` won't rejoin them),
# and any line made purely of URL characters is the next chunk of it.
_URL_CONT_RE = re.compile(r"^[A-Za-z0-9%&=_+./:?#~\[\]@!$'()*,;-]+$")


def _scrape_authorize_url(pane: str) -> str:
    """Pull the full OAuth authorize URL out of a pane.

    The full /login URL (six scopes) is ~380 chars and Claude Code renders it
    over three lines, so a plain regex returns only the first ~200 chars — a
    truncated link that loads an error page with no Authorize button. Stitch the
    continuation lines back on.

    Always returns the LAST link on screen: a session that has retried /login
    has older, already-consumed URLs in its scrollback, and authorizing one of
    those yields a code whose PKCE verifier no longer matches — the CLI answers
    "Invalid code"."""
    lines = pane.split("\n")
    found = ""
    for i, line in enumerate(lines):
        m = _AUTH_URL_RE.search(line)
        if not m:
            continue
        url = m.group(0).rstrip()
        for nxt in lines[i + 1:]:
            frag = nxt.strip()
            if not frag or not _URL_CONT_RE.fullmatch(frag):
                break          # blank line or prose -> the URL ended
            url += frag
        found = url.rstrip(".,)")   # keep the newest, don't return early
    return found
_auto_auth_state: dict[str, dict] = {}   # session -> {"ts": float, "status": str}
_AUTO_AUTH_COOLDOWN = 300
_AUTO_AUTH_MAX_FAILS = 2
# Last login that auto-auth couldn't finish by itself. Surfaced in the header so
# the one human step left is a single click on a ready-made link, not a hunt
# through a pane for a wrapped URL.
_pending_auth: dict = {}


def _pane_text(session_name: str, lines: int = 60) -> str:
    """Pane text with wrapped lines joined (-J), so a long URL is captured whole."""
    try:
        return subprocess.run(
            ["tmux", "capture-pane", "-t", session_name, "-p", "-J", "-S", f"-{lines}"],
            capture_output=True, text=True, timeout=10).stdout or ""
    except Exception:
        return ""


async def _send_line(session_name: str, text: str):
    await asyncio.to_thread(subprocess.run,
        ["tmux", "send-keys", "-t", session_name, "-l", text],
        capture_output=True, text=True, timeout=10)
    await asyncio.sleep(0.3)
    await asyncio.to_thread(subprocess.run,
        ["tmux", "send-keys", "-t", session_name, "Enter"],
        capture_output=True, text=True, timeout=10)


def _code_from_urls(urls: list) -> str:
    """Find an auth code in any URL we saw. Ignores the authorize link's own
    `code=true` flag (that's 'give me a code', not the code)."""
    for u in urls:
        try:
            q = urllib.parse.parse_qs(urllib.parse.urlparse(u).query)
        except Exception:
            continue
        c = (q.get("code") or [""])[0]
        if c and c != "true" and len(c) > 8:
            s = (q.get("state") or [""])[0]
            return c + ("#" + s if s else "")
    return ""


async def _extract_oauth_code(tab, authorize_url: str) -> dict:
    """Drive the consent page to an auth code. Returns {code} or {error}."""
    await tab.call("Network.enable")
    # A background tab's renderer is throttled and the consent button does
    # nothing at all, so the tab must be foregrounded before we touch it.
    await tab.call("Page.bringToFront")
    await tab.navigate(authorize_url, settle=2.5)
    await tab.call("Page.bringToFront")
    body = (await tab.eval("document.body ? document.body.innerText : ''")) or ""
    # A free/no-plan account can't authorize Claude Code at all — say so plainly
    # rather than waiting for a button that will never work.
    if "Max or Pro is required" in body or "required to connect to Claude Code" in body:
        return {"error": "the login browser's claude.ai account has no Max/Pro plan, "
                         "so it cannot authorize Claude Code"}
    if "just a moment" in body.lower():
        return {"error": "Cloudflare challenge on the consent page — retry"}
    if "sign in" in body.lower() and "authorize" not in body.lower():
        return {"error": "the login browser is signed out of claude.ai"}
    clicked = await tab.wait_for("""(() => {
        const want = /^(authorize|allow|continue|approve)$/i;
        const els = [...document.querySelectorAll('button, a[role=button], input[type=submit]')];
        const b = els.find(e => want.test((e.innerText||e.value||'').trim()));
        if (b) { b.click(); return true; }
        return false;
    })()""", timeout=25)
    if not clicked:
        return {"error": "no Authorize button appeared on the consent page"}
    # The code can surface three ways, so watch all of them: the redirect to the
    # callback (often ABORTED here, but the request event still carries the code),
    # the address bar, or the code rendered on the page for copying.
    deadline = time.time() + 60
    while time.time() < deadline:
        await tab.drain(3)
        code = _code_from_urls(tab.urls_seen())
        if code:
            return {"code": code}
        try:
            onpage = await tab.eval("""(() => {
                const p = new URLSearchParams(location.search);
                const c = p.get('code');
                if (c && c !== 'true') return c + (p.get('state') ? '#' + p.get('state') : '');
                const t = document.body ? document.body.innerText : '';
                const m = t.match(/[A-Za-z0-9_-]{20,}#[A-Za-z0-9_-]{10,}/);
                return m ? m[0] : '';
            })()""")
        except Exception:
            onpage = ""
        if onpage:
            return {"code": str(onpage).strip()}
    return {"error": "clicked Authorize but claude.ai never returned a code "
                     "(its consent page stalls when driven automatically)"}


async def _auto_fix_login(session_name: str) -> dict:
    """Validate Codex auth, activate the API fallback, and relaunch the pane."""
    alog = logging.getLogger("auto-auth")
    config_home = _session_config_base(session_name)
    auth_state = await asyncio.to_thread(
        _ensure_codex_auth_with_fallback, config_home, True
    )
    if not auth_state.get("loggedIn"):
        return {
            "ok": False,
            "error": "no valid ChatGPT credential or stored OpenAI API key is available",
        }
    # Clear a stranded interactive login before restarting Codex.
    for _ in range(3):
        await asyncio.to_thread(subprocess.run,
            ["tmux", "send-keys", "-t", session_name, "Escape"],
            capture_output=True, text=True, timeout=5)
        await asyncio.sleep(0.4)
    _exported, restarted = await _restart_codex_for_session(session_name)
    if not restarted:
        return {"ok": False, "error": "Codex could not be relaunched after auth recovery"}
    for _ in range(20):
        await asyncio.sleep(1)
        pane = await asyncio.to_thread(_pane_text, session_name, 25)
        if _LOGIN_NEEDED_RE.search(pane) or "paste code here" in pane.lower():
            continue
        if await _async_is_codex_running(session_name):
            _account_ident_cache.clear()
            via = "api-key-fallback" if auth_state.get("fallbackActive") else auth_state["activeMode"]
            alog.info("auto-fix '%s': logged back in via %s", session_name, via)
            return {"ok": True, "via": via}
    return {"ok": False, "error": "relaunched but the session still looks logged out"}


async def _auto_auth_session(session_name: str, reason: str = "") -> dict:
    """Log `session_name` back in using the designated login browser."""
    alog = logging.getLogger("auto-auth")
    st = _auto_auth_state.setdefault(session_name, {})
    if time.time() - st.get("ts", 0) < _AUTO_AUTH_COOLDOWN and st.get("running"):
        return {"ok": False, "error": "auto-auth already running for this session"}
    # Give up after repeated failures rather than reopening browser tabs every
    # cooldown forever. A manual trigger (or a success) clears the counter.
    if reason != "manual" and st.get("fails", 0) >= _AUTO_AUTH_MAX_FAILS:
        return {"ok": False, "error": "auto-auth gave up for this session after "
                                      f"{st['fails']} attempts — finish the login manually"}
    browser = _pick_login_browser()
    if not browser:
        return {"ok": False, "error": "no browser is marked for login — open Settings → "
                                      "Browser and tick 'use for Claude login' on one"}
    sid, cdp = browser.get("id"), browser.get("cdp_port", 0)
    if not await asyncio.to_thread(_browser_port_alive, browser.get("vnc_port", 0)):
        return {"ok": False, "error": f"the login browser '{browser.get('name')}' isn't running"}
    st.update({"ts": time.time(), "running": True, "status": "starting"})
    try:
        async with _browser_busy_ctx(sid, f"logging in '{session_name}'"):
            # 1. Get the session to a /login prompt (unless one is already up).
            #    If a login flow is mid-flight but hasn't produced a URL yet, a
            #    human is very likely typing it — sending another /login would
            #    interrupt them, so back off instead.
            pane = await asyncio.to_thread(_pane_text, session_name)
            if not _scrape_authorize_url(pane):
                low = pane.lower()
                if "select login method" in low or "paste code here" in low:
                    st.update({"running": False, "status": "a login is already in progress"})
                    return {"ok": False,
                            "error": "a login is already in progress in this session — "
                                     "finish it, or press Esc first"}
                st["status"] = "running /login"
                await _send_line(session_name, "/login")
                await asyncio.sleep(2.5)
                # Claude asks which method first — pick the subscription option.
                pane = await asyncio.to_thread(_pane_text, session_name)
                if re.search(r"select login method|subscription", pane, re.I):
                    await asyncio.to_thread(subprocess.run,
                        ["tmux", "send-keys", "-t", session_name, "Enter"],
                        capture_output=True, text=True, timeout=10)
                    await asyncio.sleep(2.5)
            # 2. Scrape the authorize URL.
            url = ""
            for _ in range(20):
                pane = await asyncio.to_thread(_pane_text, session_name)
                url = _scrape_authorize_url(pane)
                if url:
                    break
                await asyncio.sleep(1.5)
            if not url:
                st.update({"running": False, "status": "no authorize URL",
                           "fails": st.get("fails", 0) + 1})
                return {"ok": False, "error": "couldn't find an authorize URL in the session"}
            alog.info("auto-auth '%s': authorizing via browser '%s'", session_name, sid)
            # 3. Click it through in the logged-in browser.
            st["status"] = "authorizing in browser"
            async with _cdp_tab(cdp) as tab:
                res = await _extract_oauth_code(tab, url)
            if res.get("error"):
                # Hand the blocker back with the exact link, so finishing it by
                # hand is one click instead of a hunt through the pane.
                st.update({"running": False, "status": res["error"], "url": url,
                           "fails": st.get("fails", 0) + 1})
                _pending_auth.update({"session": session_name, "url": url,
                                      "why": res["error"], "ts": time.time()})
                alog.warning("auto-auth '%s' failed: %s — finish manually: %s",
                             session_name, res["error"], url)
                return {"ok": False, "error": res["error"], "authorize_url": url}
            # 4. Paste the code back into the waiting prompt.
            st["status"] = "submitting code"
            await _send_line(session_name, res["code"])
            # Success = the paste prompt goes away with no error, not merely the
            # absence of a "login required" string (which is briefly true while
            # the CLI is still exchanging the code).
            _pending_auth.clear()
            ok, why = False, "timed out waiting for the login to settle"
            for _ in range(12):
                await asyncio.sleep(2)
                pane = await asyncio.to_thread(_pane_text, session_name)
                low = pane.lower()
                if "invalid code" in low or "oauth error" in low or "authentication failed" in low:
                    ok, why = False, "Claude rejected the code"
                    break
                if "login successful" in low or "logged in as" in low:
                    ok, why = True, ""
                    break
                if "paste code here" not in low and not _LOGIN_NEEDED_RE.search(pane):
                    ok, why = True, ""
                    break
            st.update({"running": False, "status": "logged in" if ok else why,
                       "fails": 0 if ok else st.get("fails", 0) + 1})
            _account_ident_cache.clear()
            alog.info("auto-auth '%s': %s", session_name, st["status"])
            return {"ok": ok, "browser": sid, "error": "" if ok else why}
    except Exception as e:
        st.update({"running": False, "status": f"error: {e}",
                   "fails": st.get("fails", 0) + 1})
        alog.warning("auto-auth '%s' crashed: %s", session_name, e, exc_info=True)
        return {"ok": False, "error": f"{type(e).__name__}: {e}"}


@app.post("/api/sessions/{session_name}/auto-auth")
async def api_auto_auth(session_name: str, request: Request):
    """The Claude browser-driven login flow is not applicable to Codex."""
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    return JSONResponse(
        {"error": "Browser auto-auth was retired. Use `codex login` or configure an OpenAI API key."},
        status_code=410,
    )


@app.websocket("/browser/{sid}/websockify")
async def browser_proxy_ws(ws: WebSocket, sid: str):
    """Reverse-proxy the noVNC WebSocket to the session's local websockify. The
    HTTP auth middleware doesn't run for websockets, so re-check the cookie here."""
    if AUTH_PASS and not _check_token(ws.cookies.get(AUTH_COOKIE)):
        await ws.close(code=1008)
        return
    user = _current_user(ws)
    if not _user_can_access_browser(user, sid):
        await ws.close(code=1008)
        return
    s = _browser_session_by_id(sid)
    if not s:
        await ws.close(code=1011)
        return
    owner = "viewer"
    if ws.client:
        owner = f"viewer:{ws.client.host}"
    acquired = await _controller_call(
        "browser_acquire",
        browser_id=sid,
        kind="viewer",
        owner=owner,
        ttl=BROWSER_LEASE_TTL,
        mode="headed",
    )
    if not acquired.get("ok"):
        await ws.close(code=1013)
        return
    lease_token = str((acquired.get("lease") or {}).get("token") or "")
    port = int(s.get("vnc_port") or 0)
    offered = ws.scope.get("subprotocols") or []
    accept_sub = "binary" if "binary" in offered else None
    await ws.accept(subprotocol=accept_sub)
    renew_task = None
    try:
        async def renew_viewer_lease():
            while True:
                await asyncio.sleep(max(30, BROWSER_LEASE_TTL // 2))
                renewed = await _controller_call(
                    "browser_renew", token=lease_token, ttl=BROWSER_LEASE_TTL
                )
                if not renewed.get("ok"):
                    raise ConnectionError("browser viewer lease expired")

        renew_task = asyncio.create_task(renew_viewer_lease())
        async with websockets.connect(
            f"ws://127.0.0.1:{port}/websockify",
            subprotocols=["binary"], max_size=None, ping_interval=None,
        ) as up:
            t_start = time.time()
            ended = {}  # which direction ended first, and why

            async def c2u():
                why = "clean"
                try:
                    while True:
                        msg = await ws.receive()
                        if msg["type"] == "websocket.disconnect":
                            why = f"client disconnect code={msg.get('code')}"
                            break
                        if msg.get("bytes") is not None:
                            await up.send(msg["bytes"])
                        elif msg.get("text") is not None:
                            await up.send(msg["text"])
                except Exception as e:
                    why = f"{type(e).__name__}: {e}"
                finally:
                    ended.setdefault("first", ("client->upstream", why, time.time() - t_start))
                    try:
                        await up.close()
                    except Exception:
                        pass

            async def u2c():
                why = "clean"
                try:
                    async for message in up:
                        if isinstance(message, (bytes, bytearray)):
                            await ws.send_bytes(bytes(message))
                        else:
                            await ws.send_text(message)
                    why = f"upstream closed code={up.close_code} reason={up.close_reason!r}"
                except Exception as e:
                    why = f"{type(e).__name__}: {e}"
                finally:
                    ended.setdefault("first", ("upstream->client", why, time.time() - t_start))
                    try:
                        await ws.close()
                    except Exception:
                        pass

            # return_exceptions: one side failing must not leave the other orphaned.
            await asyncio.gather(c2u(), u2c(), return_exceptions=True)
            side, why, dur = ended.get("first", ("?", "?", time.time() - t_start))
            logger.info("browser ws '%s' closed after %.1fs — %s ended first (%s)",
                        sid, dur, side, why)
    except Exception as e:
        # WARNING, not debug: a silent drop here is exactly the "keeps logging
        # off" symptom, so make the cause visible in the log.
        logger.warning("browser ws proxy for '%s' ended: %s: %s", sid, type(e).__name__, e)
        try:
            await ws.close()
        except Exception:
            pass
    finally:
        if renew_task:
            renew_task.cancel()
        if lease_token:
            await _controller_call("browser_release", token=lease_token)


@app.api_route("/browser/{sid}/{path:path}", methods=["GET", "HEAD"])
async def browser_proxy_http(sid: str, path: str, request: Request):
    """Reverse-proxy noVNC static assets (vnc.html + app/core/vendor) to the
    session's local websockify, so the viewer is same-origin with the dashboard."""
    if not _user_can_access_browser(_current_user(request), sid):
        return Response("browser not found", status_code=404)
    s = _browser_session_by_id(sid)
    if not s:
        return Response("unknown browser session", status_code=404)
    if not path or path.endswith("vnc.html"):
        # The HTML must be reachable before noVNC can open its WebSocket. Hold a
        # short bootstrap viewer lease; the socket replaces it with a renewable
        # lease and this one naturally expires if the page never connects.
        acquired = await _controller_call(
            "browser_acquire",
            browser_id=sid,
            kind="viewer",
            owner="viewer-bootstrap",
            ttl=60,
            mode="headed",
        )
        if not acquired.get("ok"):
            return Response(acquired.get("error", "browser unavailable"), status_code=503)
    port = int(s.get("vnc_port") or 0)
    target = f"http://127.0.0.1:{port}/{path}"
    try:
        async with httpx.AsyncClient(timeout=30) as c:
            up = await c.request(request.method, target, params=dict(request.query_params))
    except Exception as e:
        return Response(f"browser session unreachable ({e})", status_code=502)
    headers = {}
    for h in ("content-type", "cache-control", "last-modified", "etag"):
        if h in up.headers:
            headers[h] = up.headers[h]
    return Response(content=up.content, status_code=up.status_code, headers=headers)


@app.post("/api/sessions/{session_name}/relogin")
async def api_session_relogin(session_name: str, request: Request):
    """Restart Codex with the active CODEX_HOME and resume its latest thread."""
    user = _current_user(request)
    if not _user_can_access_session(user, session_name):
        return JSONResponse({"error": "Session not found"}, status_code=404)
    running = await _async_is_codex_running(session_name)
    _exported, restarted = await _restart_codex_for_session(session_name)
    return JSONResponse({
        "ok": restarted,
        "relaunched": restarted,
        "codex_was_running": running,
    }, status_code=200 if restarted else 500)


@app.post("/api/transcribe")
async def api_transcribe(audio: UploadFile = File(...)):
    """Transcribe a recorded voice clip to text (for the composer mic button)."""
    key = os.environ.get("OPENAI_API_KEY", "")
    if not key:
        return JSONResponse({"error": "Transcription is not configured."}, status_code=503)
    try:
        data = await audio.read()
    except Exception:
        return JSONResponse({"error": "Could not read audio."}, status_code=400)
    if not data:
        return JSONResponse({"error": "Empty audio."}, status_code=400)
    suffix = os.path.splitext(audio.filename or "")[1] or ".webm"

    def _do():
        with tempfile.NamedTemporaryFile(suffix=suffix, delete=True) as tf:
            tf.write(data)
            tf.flush()
            client = openai.OpenAI(api_key=key)
            with open(tf.name, "rb") as fh:
                tr = client.audio.transcriptions.create(model="whisper-1", file=fh)
            return (getattr(tr, "text", "") or "").strip()

    try:
        text = await asyncio.to_thread(_do)
    except Exception as e:
        logger.warning("transcribe failed: %s", e)
        return JSONResponse({"error": "Transcription failed."}, status_code=502)
    return JSONResponse({"text": text})


# --- Codex auth management ---

_codex_auth_cache: dict = {"ts": 0, "data": {}}
_codex_auth_validation_lock = threading.Lock()
_codex_auth_fallback_state: dict = {"path": "", "reason": "", "ts": 0.0}
_codex_login_lock = threading.Lock()
_codex_login_process = None
_codex_login_state: dict = {
    "status": "idle",
    "verificationUrl": "",
    "userCode": "",
    "loginId": "",
    "expiresAt": 0,
    "error": "",
}


def _codex_app_server_process(codex_home: Path):
    """Start the official Codex app-server with file-backed credentials."""
    codex_home.mkdir(parents=True, exist_ok=True)
    env = dict(os.environ)
    env["CODEX_HOME"] = str(codex_home)
    return subprocess.Popen(
        [
            "codex", "app-server", "-c", 'cli_auth_credentials_store="file"',
            "--stdio",
        ],
        stdin=subprocess.PIPE,
        stdout=subprocess.PIPE,
        stderr=subprocess.DEVNULL,
        text=True,
        bufsize=1,
        env=env,
    )


def _codex_app_server_send(process, message: dict):
    if process.stdin is None:
        raise RuntimeError("Codex app-server stdin is unavailable")
    process.stdin.write(json.dumps(message, separators=(",", ":")) + "\n")
    process.stdin.flush()


def _codex_app_server_wait(process, request_id: int, timeout: float = 15.0) -> dict:
    """Read JSONL until the requested response arrives, with a hard deadline."""
    if process.stdout is None:
        raise RuntimeError("Codex app-server stdout is unavailable")
    deadline = time.monotonic() + timeout
    while time.monotonic() < deadline:
        if process.poll() is not None:
            raise RuntimeError("Codex app-server exited before responding")
        remaining = max(0.0, deadline - time.monotonic())
        ready, _, _ = select.select([process.stdout], [], [], min(0.5, remaining))
        if not ready:
            continue
        line = process.stdout.readline()
        if not line:
            continue
        try:
            message = json.loads(line)
        except json.JSONDecodeError:
            continue
        if message.get("id") == request_id:
            return message
    raise TimeoutError("Codex app-server did not respond in time")


def _codex_app_server_initialize(process):
    _codex_app_server_send(process, {
        "method": "initialize",
        "id": 0,
        "params": {
            "clientInfo": {
                "name": "grabo_dashboard",
                "title": "Grabo Codex Dashboard",
                "version": "1",
            },
        },
    })
    response = _codex_app_server_wait(process, 0)
    if response.get("error"):
        raise RuntimeError("Codex app-server initialization failed")
    _codex_app_server_send(process, {"method": "initialized", "params": {}})


def _terminate_codex_app_server(process):
    if process is None or process.poll() is not None:
        return
    try:
        process.terminate()
        process.wait(timeout=3)
    except Exception:
        try:
            process.kill()
            process.wait(timeout=2)
        except Exception:
            pass


def _codex_app_server_account_read(codex_home: Path, refresh_token: bool = True) -> dict:
    """Ask Codex itself to validate (and, for ChatGPT, refresh) its credential."""
    process = _codex_app_server_process(codex_home)
    try:
        _codex_app_server_initialize(process)
        _codex_app_server_send(process, {
            "method": "account/read",
            "id": 1,
            "params": {"refreshToken": refresh_token},
        })
        response = _codex_app_server_wait(process, 1, timeout=20)
        if response.get("error"):
            error = response.get("error") or {}
            message = error.get("message") if isinstance(error, dict) else ""
            return {"ok": False, "error": str(message or "credential refresh failed")[:300]}
        result = response.get("result") or {}
        account = result.get("account")
        if not isinstance(account, dict):
            return {"ok": False, "error": "Codex reported no active account"}
        return {"ok": True, "account": account}
    except Exception as exc:
        logger.warning("Codex credential validation failed: %s", type(exc).__name__)
        return {"ok": False, "error": "Codex could not validate the ChatGPT credential"}
    finally:
        _terminate_codex_app_server(process)


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


def _public_codex_login_state() -> dict:
    with _codex_login_lock:
        return dict(_codex_login_state)


def _set_codex_login_state(**changes):
    with _codex_login_lock:
        _codex_login_state.update(changes)


def _monitor_codex_chatgpt_login(process, login_id: str):
    """Wait for the official app-server completion notification."""
    global _codex_login_process
    completed = False
    try:
        if process.stdout is None:
            raise RuntimeError("Codex app-server stdout is unavailable")
        for line in process.stdout:
            try:
                message = json.loads(line)
            except json.JSONDecodeError:
                continue
            if message.get("method") != "account/login/completed":
                continue
            params = message.get("params") or {}
            if params.get("loginId") not in (None, login_id):
                continue
            completed = True
            if params.get("success"):
                _codex_auth_fallback_state.update({"path": "", "reason": "", "ts": 0.0})
                _set_codex_login_state(status="succeeded", error="")
            else:
                _set_codex_login_state(
                    status="failed",
                    error=str(params.get("error") or "ChatGPT sign-in failed")[:300],
                )
            break
    except Exception:
        logger.warning("ChatGPT device login monitor failed", exc_info=True)
    finally:
        _terminate_codex_app_server(process)
        with _codex_login_lock:
            if _codex_login_process is process:
                _codex_login_process = None
            if not completed and _codex_login_state.get("status") not in ("cancelled", "failed"):
                _codex_login_state.update({
                    "status": "failed",
                    "error": "Codex login ended before authorization completed",
                })
        _codex_auth_cache["ts"] = 0


def _start_codex_chatgpt_login() -> dict:
    """Start Codex's managed device-code login and return its URL/code."""
    global _codex_login_process
    with _codex_login_lock:
        if (
            _codex_login_process is not None
            and _codex_login_process.poll() is None
            and _codex_login_state.get("status") in ("starting", "pending")
        ):
            return dict(_codex_login_state)
        _codex_login_state.update({
            "status": "starting",
            "verificationUrl": "",
            "userCode": "",
            "loginId": "",
            "expiresAt": 0,
            "error": "",
        })
        auth_path = CODEX_HOME / "auth.json"
        if auth_path.exists():
            _backup_before_dashboard_write(auth_path)
        process = _codex_app_server_process(CODEX_HOME)
        _codex_login_process = process
    try:
        _codex_app_server_initialize(process)
        _codex_app_server_send(process, {
            "method": "account/login/start",
            "id": 4,
            "params": {"type": "chatgptDeviceCode"},
        })
        response = _codex_app_server_wait(process, 4, timeout=20)
        if response.get("error"):
            raise RuntimeError("Codex rejected the ChatGPT device login request")
        result = response.get("result") or {}
        verification_url = str(result.get("verificationUrl") or "")
        user_code = str(result.get("userCode") or "")
        login_id = str(result.get("loginId") or "")
        if not verification_url.startswith("https://") or not user_code or not login_id:
            raise RuntimeError("Codex returned an incomplete device login response")
        _set_codex_login_state(
            status="pending",
            verificationUrl=verification_url,
            userCode=user_code,
            loginId=login_id,
            expiresAt=int(time.time()) + 15 * 60,
            error="",
        )
        monitor = threading.Thread(
            target=_monitor_codex_chatgpt_login,
            args=(process, login_id),
            name="codex-chatgpt-login",
            daemon=True,
        )
        monitor.start()
        return _public_codex_login_state()
    except Exception as exc:
        logger.warning("Unable to start ChatGPT device login: %s", exc)
        _terminate_codex_app_server(process)
        with _codex_login_lock:
            if _codex_login_process is process:
                _codex_login_process = None
            _codex_login_state.update({
                "status": "failed",
                "error": str(exc)[:300],
            })
        return _public_codex_login_state()


def _cancel_codex_chatgpt_login() -> bool:
    global _codex_login_process
    with _codex_login_lock:
        process = _codex_login_process
        login_id = str(_codex_login_state.get("loginId") or "")
        _codex_login_state.update({"status": "cancelled", "error": ""})
    if process is None or process.poll() is not None:
        return False
    try:
        if login_id:
            _codex_app_server_send(process, {
                "method": "account/login/cancel",
                "id": 5,
                "params": {"loginId": login_id},
            })
    except Exception:
        pass
    _terminate_codex_app_server(process)
    with _codex_login_lock:
        if _codex_login_process is process:
            _codex_login_process = None
    return True


def _jwt_claims(token: object) -> dict:
    """Decode non-secret display claims from a JWT without validating it."""
    if not isinstance(token, str) or token.count(".") < 2:
        return token if isinstance(token, dict) else {}
    try:
        payload = token.split(".", 2)[1]
        payload += "=" * (-len(payload) % 4)
        data = json.loads(base64.urlsafe_b64decode(payload.encode()).decode())
        return data if isinstance(data, dict) else {}
    except Exception:
        return {}


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


@app.get("/api/auth/codex-status")
@app.get("/api/auth/claude-status", include_in_schema=False)
async def api_codex_auth_status():
    now = time.time()
    if now - _codex_auth_cache["ts"] < 60 and _codex_auth_cache["data"]:
        return JSONResponse(dict(_codex_auth_cache["data"]))
    result = await asyncio.to_thread(_codex_auth_display)
    _codex_auth_cache.update({"ts": now, "data": result})
    return JSONResponse(result)


@app.post("/api/auth/chatgpt/start")
async def api_start_codex_chatgpt_login(request: Request):
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    result = await asyncio.to_thread(_start_codex_chatgpt_login)
    status_code = 200 if result.get("status") in ("pending", "succeeded") else 502
    return JSONResponse(result, status_code=status_code)


@app.get("/api/auth/chatgpt/status")
async def api_codex_chatgpt_login_status(request: Request):
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    return JSONResponse(_public_codex_login_state())


@app.post("/api/auth/chatgpt/cancel")
async def api_cancel_codex_chatgpt_login(request: Request):
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    cancelled = await asyncio.to_thread(_cancel_codex_chatgpt_login)
    return JSONResponse({"ok": True, "cancelled": cancelled})


class SetApiKey(BaseModel):
    apiKey: str = Field(max_length=500)


@app.post("/api/auth/api-key")
async def api_set_codex_key(body: SetApiKey):
    key = body.apiKey.strip()
    if key:
        if not key.startswith("sk-"):
            return JSONResponse(
                {"error": "Invalid API key format. Expected an OpenAI key starting with sk-."},
                status_code=400,
            )
        _save_openai_key(key)
        _codex_auth_fallback_state.update({"path": "", "reason": "", "ts": 0.0})
        _codex_auth_cache["ts"] = 0
        return JSONResponse({"ok": True, "message": "OpenAI API key stored for Codex."})
    else:
        _clear_openai_key()
        _codex_auth_fallback_state.update({"path": "", "reason": "", "ts": 0.0})
        _codex_auth_cache["ts"] = 0
        return JSONResponse({"ok": True, "message": "API key cleared."})


@app.post("/api/auth/logout")
async def api_codex_auth_logout():
    """Back up the current credential file, then run `codex logout`."""
    errors = []
    auth_path = CODEX_HOME / "auth.json"
    if auth_path.exists():
        _backup_before_dashboard_write(auth_path)
    try:
        result = subprocess.run(
            ["codex", "logout"],
            capture_output=True, text=True, timeout=10,
        )
        if result.returncode != 0:
            errors.append(result.stderr.strip() or "codex logout failed")
    except Exception:
        logger.warning("Unable to run codex logout", exc_info=True)
        errors.append("Codex logout command could not be run")
    _clear_openai_key()
    _codex_auth_fallback_state.update({"path": "", "reason": "", "ts": 0.0})
    _codex_auth_cache["ts"] = 0
    if errors:
        return JSONResponse({"ok": True, "warnings": errors})
    return JSONResponse({"ok": True})


_usage_cache: dict = {"ts": 0, "data": {}}
_openai_limits_cache: dict = {"ts": 0, "data": None}


def _codex_session_dirs() -> list[Path]:
    """Return known rollout roots for the admin and member account homes."""
    homes = {CODEX_HOME}
    try:
        homes.update(
            _user_codex_config_dir(user)
            for user in _load_users()
            if user and not _is_admin(user)
        )
    except Exception:
        pass
    return [home / "sessions" for home in homes if (home / "sessions").exists()]


def _all_codex_rollouts() -> list[Path]:
    files: list[Path] = []
    for sessions_dir in _codex_session_dirs():
        files.extend(sessions_dir.rglob("rollout-*.jsonl"))
    return files


def _codex_app_server_rate_limits(codex_home: Path) -> dict:
    """Read the authoritative plan windows from Codex's app-server."""
    process = _codex_app_server_process(codex_home)
    try:
        _codex_app_server_initialize(process)
        _codex_app_server_send(process, {
            "method": "account/rateLimits/read",
            "id": 2,
            "params": None,
        })
        response = _codex_app_server_wait(process, 2, timeout=20)
        if response.get("error"):
            return {}
        result = response.get("result")
        return result if isinstance(result, dict) else {}
    except Exception:
        logger.warning("Codex rate-limit lookup failed", exc_info=True)
        return {}
    finally:
        _terminate_codex_app_server(process)


def _rate_limit_window_payload(slot: str, window: object) -> dict | None:
    if not isinstance(window, dict):
        return None
    try:
        used_percent = max(0, min(100, int(window.get("usedPercent", 0))))
    except (TypeError, ValueError):
        used_percent = 0
    try:
        duration = int(window.get("windowDurationMins") or 0)
    except (TypeError, ValueError):
        duration = 0
    if duration and duration % (24 * 60) == 0:
        label = f"{duration // (24 * 60)}d"
    elif duration and duration % 60 == 0:
        label = f"{duration // 60}h"
    elif duration:
        label = f"{duration}m"
    else:
        label = slot.title()
    resets_at = None
    try:
        reset_epoch = int(window.get("resetsAt") or 0)
        if reset_epoch:
            resets_at = datetime.fromtimestamp(
                reset_epoch, timezone.utc
            ).isoformat().replace("+00:00", "Z")
    except (TypeError, ValueError, OSError, OverflowError):
        pass
    return {
        "id": slot,
        "label": label,
        "duration_minutes": duration or None,
        "utilization": used_percent,
        "resets_at": resets_at,
    }


@app.get("/api/usage/limits")
async def api_openai_usage_limits():
    """Return genuine ChatGPT plan windows; never invent API-key quotas."""
    now = time.time()
    auth_state = await asyncio.to_thread(
        _ensure_codex_auth_with_fallback, CODEX_HOME, True
    )
    auth_mode = str(auth_state.get("activeMode") or "unknown")
    cached = _openai_limits_cache.get("data")
    if (
        now - _openai_limits_cache["ts"] < 600
        and isinstance(cached, dict)
        and cached.get("auth_mode") == auth_mode
    ):
        return JSONResponse(cached)

    if auth_mode == "apikey":
        data = {
            "fetched_at": now,
            "auth_mode": "apikey",
            "billing_mode": "pay_as_you_go",
            "windows": [],
            "message": "API-key usage is billed per token; it has no Codex plan quota windows.",
        }
        _openai_limits_cache.update({"ts": now, "data": data})
        return JSONResponse(data)
    if auth_mode != "chatgpt":
        return JSONResponse({
            "auth_mode": auth_mode,
            "windows": [],
            "error": "Codex is not authenticated.",
        }, status_code=503)

    raw = await asyncio.to_thread(_codex_app_server_rate_limits, CODEX_HOME)
    by_limit_id = raw.get("rateLimitsByLimitId")
    snapshot = None
    if isinstance(by_limit_id, dict):
        snapshot = by_limit_id.get("codex")
        if not isinstance(snapshot, dict):
            snapshot = next(
                (value for value in by_limit_id.values() if isinstance(value, dict)),
                None,
            )
    if not isinstance(snapshot, dict):
        snapshot = raw.get("rateLimits")
    if not isinstance(snapshot, dict):
        return JSONResponse({
            "auth_mode": "chatgpt",
            "windows": [],
            "error": "Codex did not return plan rate limits.",
        }, status_code=502)

    windows = [
        _rate_limit_window_payload("primary", snapshot.get("primary")),
        _rate_limit_window_payload("secondary", snapshot.get("secondary")),
    ]
    windows = [window for window in windows if window is not None]
    account = auth_state.get("account")
    account = account if isinstance(account, dict) else {}
    data = {
        "fetched_at": now,
        "auth_mode": "chatgpt",
        "billing_mode": "plan",
        "plan_type": snapshot.get("planType") or account.get("planType"),
        "limit_id": snapshot.get("limitId"),
        "limit_name": snapshot.get("limitName"),
        "windows": windows,
    }
    _openai_limits_cache["ts"] = now
    _openai_limits_cache["data"] = data
    return JSONResponse(data)


@app.get("/api/auth/usage")
async def api_codex_usage():
    """Token usage for today, parsed from codex session rollout JSONL files."""
    now = time.time()
    if now - _usage_cache["ts"] < 60:
        return JSONResponse(_usage_cache["data"])

    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    files = _all_codex_rollouts()

    input_tok = 0
    output_tok = 0
    cache_read = 0
    reasoning_tok = 0
    msg_count = 0

    for fpath in files:
        try:
            mtime = fpath.stat().st_mtime
            if datetime.fromtimestamp(mtime, timezone.utc).strftime("%Y-%m-%d") < today:
                continue
            inp, out, cached, reasoning, messages = _parse_usage_file(fpath, today)
            input_tok += inp
            output_tok += out
            cache_read += cached
            reasoning_tok += reasoning
            msg_count += messages
        except Exception:
            logger.debug("Failed to parse usage JSONL for '%s'", fpath, exc_info=True)

    data = {
        "date": today,
        "messages": msg_count,
        "inputTokens": input_tok,
        "outputTokens": output_tok,
        "cacheReadTokens": cache_read,
        "cacheCreateTokens": reasoning_tok,
        "reasoningTokens": reasoning_tok,
        # input + output, matching Codex's own total_tokens. Cached input is a
        # subset of input and reasoning a subset of output — adding them again
        # double-counts (it inflated a 7-day estimate from $463 to $3527).
        "totalTokens": input_tok + output_tok,
    }
    _usage_cache["ts"] = now
    _usage_cache["data"] = data
    return JSONResponse(data)


def _parse_usage_file(path: str | Path, date_prefix: str) -> tuple[int, int, int, int, int]:
    """Parse one Codex rollout's token deltas and assistant-message count.

    ``token_count`` events contain both cumulative totals and the last turn's
    delta; only ``last_token_usage`` is summed so repeated snapshots do not
    inflate usage.
    """
    input_tok = output_tok = cache_read = reasoning_tok = msg_count = 0
    with open(path) as stream:
        for line in stream:
            try:
                event = json.loads(line)
            except Exception:
                continue
            if not str(event.get("timestamp", "")).startswith(date_prefix):
                continue
            if event.get("type") != "event_msg":
                continue
            payload = event.get("payload", {}) or {}
            if payload.get("type") == "agent_message":
                msg_count += 1
                continue
            if payload.get("type") != "token_count":
                continue
            last = (payload.get("info", {}) or {}).get("last_token_usage", {}) or {}
            input_tok += int(last.get("input_tokens", 0) or 0)
            output_tok += int(last.get("output_tokens", 0) or 0)
            cache_read += int(last.get("cached_input_tokens", 0) or 0)
            reasoning_tok += int(last.get("reasoning_output_tokens", 0) or 0)
    return input_tok, output_tok, cache_read, reasoning_tok, msg_count


_stats_usage_cache: dict = {"ts": 0, "data": {}}

def _estimate_cost(inp: int, out: int, cr: int, cc: int, model: str) -> float:
    """Estimate cost in USD from one turn's Codex token counts.

    Delegates to :func:`_codex_turn_cost` so every usage view on the dashboard
    prices a turn the same way. ``cc`` (reasoning output) is accepted for the
    callers that still pass it but deliberately ignored: it is a subset of
    ``out``, so adding it again charged reasoning twice.
    """
    return _codex_turn_cost(inp, out, cr, model)


_user_usage_cache: dict = {"ts": 0, "data": {}}


def _prompt_counts_by_user(cutoffs: dict[str, float]) -> dict[str, dict[str, int]]:
    """Count audited human prompts per account for each named time window."""
    counts: dict[str, dict[str, int]] = {}
    oldest = min(cutoffs.values()) if cutoffs else 0
    # Scanned in full rather than stopping at the first old record: the audit is
    # append-only in real time, but `_backfill_prompt_audit` appends historical
    # rows, so the file is not reliably sorted. It is one line per human prompt,
    # so a full pass is cheap and the result is cached for two minutes anyway.
    for entry in _iter_prompt_audit_reverse() or ():
        timestamp = float(entry.get("ts") or 0)
        if timestamp < oldest:
            continue
        user_id = str(entry.get("user_id") or "")
        if not user_id:
            continue
        row = counts.setdefault(user_id, {key: 0 for key in cutoffs})
        for window, cutoff in cutoffs.items():
            if timestamp >= cutoff:
                row[window] += 1
    return counts


def _codex_turn_cost(inp: int, out: int, cached: int, model: str) -> float:
    """List-price estimate for one Codex turn.

    ``cached_input_tokens`` is a SUBSET of ``input_tokens`` and
    ``reasoning_output_tokens`` a subset of ``output_tokens`` — Codex's own
    ``total_tokens`` is exactly ``input + output``. So the cached part is billed
    at the cache rate and only the remainder at the full input rate; reasoning
    is already inside ``output`` and must not be added again.
    """
    rate_in, rate_out, rate_cached = 1.25, 10.0, 0.125
    name = (model or "").lower()
    if "o3" in name and "mini" not in name:
        rate_in, rate_out, rate_cached = 2.0, 8.0, 0.5
    elif any(tag in name for tag in ("o3-mini", "o4-mini", "gpt-5-mini", "gpt-5.4-mini")):
        rate_in, rate_out, rate_cached = 0.25, 2.0, 0.025
    elif "gpt-4o-mini" in name:
        rate_in, rate_out, rate_cached = 0.15, 0.6, 0.075
    elif "gpt-4o" in name:
        rate_in, rate_out, rate_cached = 2.5, 10.0, 1.25
    fresh = max(0, inp - cached)
    return (fresh * rate_in + cached * rate_cached + out * rate_out) / 1e6


_rollout_lifetime_cache: dict[str, dict] = {}


def _iter_jsonl_reverse(path: Path, chunk_size: int = 64 * 1024):
    """Yield a JSONL file's raw lines newest-first without loading it in memory."""
    with path.open("rb") as stream:
        stream.seek(0, os.SEEK_END)
        position = stream.tell()
        carry = b""
        while position > 0:
            size = min(chunk_size, position)
            position -= size
            stream.seek(position)
            parts = (stream.read(size) + carry).split(b"\n")
            carry = parts[0]
            for raw in reversed(parts[1:]):
                if raw:
                    yield raw
        if carry:
            yield carry


def _rollout_lifetime_usage(path: str | Path) -> dict[str, int]:
    """Read one rollout's final cumulative token counter efficiently.

    Codex writes ``total_token_usage`` as a running total alongside every turn
    delta. The newest counter is therefore the rollout's lifetime total. Reading
    backward avoids rescanning very large transcripts merely to show an all-time
    figure. Old-format rollouts without a cumulative counter fall back to summing
    their deltas once.
    """
    rollout = Path(path)
    blank = {
        "inputTokens": 0, "outputTokens": 0, "cacheReadTokens": 0,
        "reasoningTokens": 0, "totalTokens": 0,
    }
    try:
        stat = rollout.stat()
    except OSError:
        return blank
    signature = (stat.st_mtime_ns, stat.st_size)
    key = str(rollout)
    cached = _rollout_lifetime_cache.get(key)
    if cached and cached.get("signature") == signature:
        return dict(cached["usage"])

    usage = None
    try:
        for raw in _iter_jsonl_reverse(rollout):
            if b'"token_count"' not in raw:
                continue
            try:
                event = json.loads(raw)
            except (json.JSONDecodeError, UnicodeDecodeError):
                continue
            if event.get("type") != "event_msg":
                continue
            payload = event.get("payload") or {}
            if payload.get("type") != "token_count":
                continue
            total = (payload.get("info") or {}).get("total_token_usage") or {}
            if not total:
                continue
            try:
                inp = int(total.get("input_tokens") or 0)
                out = int(total.get("output_tokens") or 0)
                cached_input = int(total.get("cached_input_tokens") or 0)
                reasoning = int(total.get("reasoning_output_tokens") or 0)
            except (TypeError, ValueError):
                continue
            usage = {
                "inputTokens": inp,
                "outputTokens": out,
                "cacheReadTokens": cached_input,
                "reasoningTokens": reasoning,
                "totalTokens": inp + out,
            }
            break
    except OSError:
        return blank

    if usage is None:
        try:
            inp, out, cached_input, reasoning, _ = _parse_usage_file(rollout, "")
            usage = {
                "inputTokens": inp,
                "outputTokens": out,
                "cacheReadTokens": cached_input,
                "reasoningTokens": reasoning,
                "totalTokens": inp + out,
            }
        except OSError:
            usage = blank

    _rollout_lifetime_cache[key] = {"signature": signature, "usage": dict(usage)}
    if len(_rollout_lifetime_cache) > 2048:
        _rollout_lifetime_cache.pop(next(iter(_rollout_lifetime_cache)), None)
    return dict(usage)


def _token_usage_for_home(codex_home: Path, cutoffs: dict[str, str]) -> dict[str, dict]:
    """Sum a CODEX_HOME's rollout token deltas into each named time window.

    ``token_count`` events carry both a running total and that turn's delta;
    only ``last_token_usage`` is summed so repeated snapshots cannot inflate the
    figures. Cutoffs are ISO-8601 strings compared against each record's own
    timestamp, so a thread spanning midnight lands in the right day.

    The reserved ``all`` window uses each rollout's final cumulative counter,
    which avoids rescanning multi-hundred-megabyte transcripts. Other windows
    sum timestamped deltas. ``totalTokens`` is ``input + output``, matching
    Codex's own ``total_tokens``; cached input and reasoning output are reported
    alongside as subsets, never added on top.
    """
    blank = {
        "inputTokens": 0, "outputTokens": 0, "cacheReadTokens": 0,
        "reasoningTokens": 0, "totalTokens": 0, "turns": 0, "estimatedCost": 0.0,
    }
    totals = {window: dict(blank) for window in cutoffs}
    sessions_dir = codex_home / "sessions"
    if not sessions_dir.exists():
        return totals
    active_cutoffs = {
        window: cutoff for window, cutoff in cutoffs.items() if window != "all"
    }
    oldest = min(active_cutoffs.values()) if active_cutoffs else ""
    for path in sessions_dir.rglob("rollout-*.jsonl"):
        try:
            if "all" in totals:
                lifetime = _rollout_lifetime_usage(path)
                for field in (
                    "inputTokens", "outputTokens", "cacheReadTokens",
                    "reasoningTokens", "totalTokens",
                ):
                    totals["all"][field] += lifetime[field]
            if not active_cutoffs:
                continue
            # Cheap skip: a file untouched since before the widest window can
            # hold nothing inside it.
            mtime = datetime.fromtimestamp(path.stat().st_mtime, timezone.utc)
            if mtime.isoformat() < oldest:
                continue
            model = DEFAULT_MODEL
            with open(path, errors="replace") as stream:
                for line in stream:
                    try:
                        event = json.loads(line)
                    except Exception:
                        continue
                    if event.get("type") == "turn_context":
                        model = (event.get("payload") or {}).get("model") or model
                        continue
                    if event.get("type") != "event_msg":
                        continue
                    payload = event.get("payload") or {}
                    if payload.get("type") != "token_count":
                        continue
                    timestamp = str(event.get("timestamp") or "")
                    last = (payload.get("info") or {}).get("last_token_usage") or {}
                    inp = int(last.get("input_tokens") or 0)
                    out = int(last.get("output_tokens") or 0)
                    cached = int(last.get("cached_input_tokens") or 0)
                    reasoning = int(last.get("reasoning_output_tokens") or 0)
                    if not (inp or out):
                        continue
                    cost = _codex_turn_cost(inp, out, cached, model)
                    for window, cutoff in active_cutoffs.items():
                        if timestamp < cutoff:
                            continue
                        bucket = totals[window]
                        bucket["inputTokens"] += inp
                        bucket["outputTokens"] += out
                        bucket["cacheReadTokens"] += cached
                        bucket["reasoningTokens"] += reasoning
                        bucket["totalTokens"] += inp + out
                        bucket["turns"] += 1
                        bucket["estimatedCost"] += cost
        except Exception:
            logger.debug("Failed to parse rollout '%s' for usage", path, exc_info=True)
    for bucket in totals.values():
        bucket["estimatedCost"] = round(bucket["estimatedCost"], 2)
    return totals


def _usage_by_account() -> dict:
    """Prompts and tokens per dashboard account, including retained history."""
    now_dt = datetime.now(timezone.utc)
    today_start = now_dt.replace(hour=0, minute=0, second=0, microsecond=0)
    week_start = now_dt - timedelta(days=7)
    ts_cutoffs = {"today": today_start.timestamp(), "week": week_start.timestamp()}
    iso_cutoffs = {
        "today": today_start.isoformat(), "week": week_start.isoformat(), "all": "",
    }

    prompt_counts = _prompt_counts_by_user(ts_cutoffs)
    prompt_totals = _prompt_audit_summary()
    rows = []
    totals = {
        "promptsToday": 0, "promptsWeek": 0, "promptsTotal": 0,
        "tokensToday": 0, "tokensWeek": 0, "tokensTotal": 0,
        "costToday": 0.0, "costWeek": 0.0,
    }
    for user in _load_users():
        if not user:
            continue
        user_id = str(user.get("id") or "")
        tokens = _token_usage_for_home(_user_codex_config_dir(user), iso_cutoffs)
        prompts = prompt_counts.get(user_id, {"today": 0, "week": 0})
        row = {
            "user_id": user_id,
            "username": str(user.get("username") or ""),
            "role": str(user.get("role") or "user"),
            "promptsToday": prompts.get("today", 0),
            "promptsWeek": prompts.get("week", 0),
            "promptsTotal": int((prompt_totals.get(user_id) or {}).get("count") or 0),
            "today": tokens["today"],
            "week": tokens["week"],
            "all": tokens["all"],
        }
        rows.append(row)
        totals["promptsToday"] += row["promptsToday"]
        totals["promptsWeek"] += row["promptsWeek"]
        totals["promptsTotal"] += row["promptsTotal"]
        totals["tokensToday"] += tokens["today"]["totalTokens"]
        totals["tokensWeek"] += tokens["week"]["totalTokens"]
        totals["tokensTotal"] += tokens["all"]["totalTokens"]
        totals["costToday"] += tokens["today"]["estimatedCost"]
        totals["costWeek"] += tokens["week"]["estimatedCost"]
    totals["costToday"] = round(totals["costToday"], 2)
    totals["costWeek"] = round(totals["costWeek"], 2)
    rows.sort(
        key=lambda row: (row["week"]["totalTokens"], row["promptsWeek"]),
        reverse=True,
    )
    return {
        "generatedAt": now_dt.timestamp(),
        "todayStart": today_start.isoformat(),
        "weekStart": week_start.isoformat(),
        "users": rows,
        "totals": totals,
    }


@app.get("/api/stats/usage-by-user")
async def api_stats_usage_by_user(request: Request):
    """Per-account prompt and token usage for today and the last 7 days.

    Administrators see every account; a member sees only their own row.
    """
    viewer = _current_user(request)
    if not viewer:
        return JSONResponse({"error": "Not signed in"}, status_code=401)
    now = time.time()
    if now - _user_usage_cache["ts"] > 120 or not _user_usage_cache["data"]:
        _user_usage_cache["data"] = await asyncio.to_thread(_usage_by_account)
        _user_usage_cache["ts"] = now
    data = dict(_user_usage_cache["data"])
    if not _is_admin(viewer):
        mine = [
            row for row in data.get("users", [])
            if row.get("user_id") == str(viewer.get("id") or "")
        ]
        data["users"] = mine
        data["totals"] = {
            "promptsToday": sum(row["promptsToday"] for row in mine),
            "promptsWeek": sum(row["promptsWeek"] for row in mine),
            "promptsTotal": sum(row["promptsTotal"] for row in mine),
            "tokensToday": sum(row["today"]["totalTokens"] for row in mine),
            "tokensWeek": sum(row["week"]["totalTokens"] for row in mine),
            "tokensTotal": sum(row["all"]["totalTokens"] for row in mine),
            "costToday": round(sum(row["today"]["estimatedCost"] for row in mine), 2),
            "costWeek": round(sum(row["week"]["estimatedCost"] for row in mine), 2),
        }
    return JSONResponse(data)


@app.get("/api/admin/codex-alerts")
async def api_admin_codex_alerts(request: Request, include_resolved: int = 1):
    """Codex health alerts raised by the watchdog."""
    if not _is_admin(_current_user(request)):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    rows, auth = _codex_alerts_snapshot(include_resolved=bool(include_resolved))
    return JSONResponse({
        "alerts": rows[:100],
        "open": sum(1 for row in rows if not row.get("resolved")),
        "auth": auth,
    })


@app.get("/api/admin/google-audit")
async def api_admin_google_audit(
    request: Request,
    limit: int = 200,
    user_id: str = "",
    decision: str = "",
):
    """Who reached which Google document or mailbox, and what was refused.

    The MCP writes one line per tool call; this is the only place an access
    review can see it, so it is admin-only and read-only.
    """
    if not _is_admin(_current_user(request)):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    rows = google_policy.read_audit(
        GOOGLE_MCP_AUDIT_FILE, limit=max(1, min(int(limit), 2000))
    )
    if user_id:
        rows = [row for row in rows if row.get("user_id") == user_id]
    if decision:
        rows = [row for row in rows if row.get("decision") == decision]
    return JSONResponse({
        "entries": rows,
        "denied": sum(1 for row in rows if row.get("decision") == "denied"),
        "file": str(GOOGLE_MCP_AUDIT_FILE),
    })


@app.post("/api/admin/codex-alerts/clear")
async def api_admin_codex_alerts_clear(request: Request):
    """Acknowledge every Codex health alert."""
    if not _is_admin(_current_user(request)):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    with _codex_alerts_lock:
        _write_codex_alerts_locked([], _read_codex_alerts_locked()[1])
    return JSONResponse({"ok": True})


@app.get("/api/stats/usage")
async def api_stats_usage():
    """Aggregated token usage across all codex sessions: 5h window + this week."""
    now = time.time()
    if now - _stats_usage_cache["ts"] < 120 and _stats_usage_cache["data"]:
        return JSONResponse(_stats_usage_cache["data"])

    now_dt = datetime.now(timezone.utc)
    cutoff_5h = (now_dt - timedelta(hours=5)).isoformat()
    week_start = (now_dt - timedelta(days=now_dt.weekday())).replace(
        hour=0, minute=0, second=0, microsecond=0
    ).isoformat()

    all_files = _all_codex_rollouts()
    week_start_date = week_start[:10]

    # Build mapping: cwd -> list of (timestamp, inp, out, cr, reasoning, model)
    cwd_entries: dict = {}

    for fpath in all_files:
        try:
            mtime = fpath.stat().st_mtime
            if datetime.fromtimestamp(mtime, timezone.utc).strftime("%Y-%m-%d") < week_start_date:
                continue
            session_cwd = ""
            model = "gpt-5.4"
            with open(fpath) as f:
                for line in f:
                    try:
                        d = json.loads(line)
                    except Exception:
                        continue
                    if d.get("type") == "session_meta":
                        session_cwd = d.get("payload", {}).get("cwd", "") or session_cwd
                    elif d.get("type") == "turn_context":
                        m = d.get("payload", {}).get("model")
                        if m:
                            model = m
                    elif d.get("type") == "event_msg":
                        pl = d.get("payload", {})
                        if pl.get("type") != "token_count":
                            continue
                        ts = d.get("timestamp", "")
                        if ts < week_start:
                            continue
                        last = (pl.get("info", {}) or {}).get("last_token_usage", {}) or {}
                        inp = last.get("input_tokens", 0)
                        out = last.get("output_tokens", 0)
                        cr = last.get("cached_input_tokens", 0)
                        reason = last.get("reasoning_output_tokens", 0)
                        key = session_cwd or str(fpath.parent)
                        cwd_entries.setdefault(key, []).append((ts, inp, out, cr, reason, model))
        except Exception:
            logger.debug("Failed to parse stats usage JSONL '%s'", fpath, exc_info=True)

    # Map tmux sessions to cwd
    tmux_sessions = get_tmux_sessions()
    session_cwd_to_name: dict = {}
    for s in tmux_sessions:
        cwd = get_session_cwd(s["name"])
        if cwd:
            session_cwd_to_name[cwd] = s["name"]

    g5h = {"inputTokens": 0, "outputTokens": 0, "cacheReadTokens": 0, "cacheCreateTokens": 0, "totalTokens": 0, "messages": 0, "estimatedCost": 0.0}
    gweek = {"inputTokens": 0, "outputTokens": 0, "cacheReadTokens": 0, "cacheCreateTokens": 0, "totalTokens": 0, "messages": 0, "estimatedCost": 0.0}
    session_list = []

    for cwd, entries in cwd_entries.items():
        if not entries:
            continue
        sname = session_cwd_to_name.get(cwd, os.path.basename(cwd.rstrip("/")) or cwd)
        s5h = {"totalTokens": 0, "messages": 0, "estimatedCost": 0.0}
        sweek = {"totalTokens": 0, "messages": 0, "estimatedCost": 0.0}
        latest_ts = ""
        latest_model = "gpt-5.4"

        for ts, inp, out, cr, reason, model in entries:
            total = inp + out          # cached/reasoning are subsets, not extras
            sweek["totalTokens"] += total
            sweek["messages"] += 1
            sweek["estimatedCost"] += _estimate_cost(inp, out, cr, reason, model)
            gweek["inputTokens"] += inp
            gweek["outputTokens"] += out
            gweek["cacheReadTokens"] += cr
            gweek["cacheCreateTokens"] += reason
            gweek["totalTokens"] += total
            gweek["messages"] += 1
            gweek["estimatedCost"] += _estimate_cost(inp, out, cr, reason, model)
            if ts > latest_ts:
                latest_ts = ts
                latest_model = model
            if ts >= cutoff_5h:
                s5h["totalTokens"] += total
                s5h["messages"] += 1
                s5h["estimatedCost"] += _estimate_cost(inp, out, cr, reason, model)
                g5h["inputTokens"] += inp
                g5h["outputTokens"] += out
                g5h["cacheReadTokens"] += cr
                g5h["cacheCreateTokens"] += reason
                g5h["totalTokens"] += total
                g5h["messages"] += 1
                g5h["estimatedCost"] += _estimate_cost(inp, out, cr, reason, model)

        s5h["estimatedCost"] = round(s5h["estimatedCost"], 2)
        sweek["estimatedCost"] = round(sweek["estimatedCost"], 2)

        session_list.append({
            "name": sname,
            "model": latest_model,
            "window5h": s5h,
            "thisWeek": sweek,
            "lastActive": latest_ts,
        })

    session_list.sort(key=lambda x: x["lastActive"], reverse=True)
    g5h["estimatedCost"] = round(g5h["estimatedCost"], 2)
    gweek["estimatedCost"] = round(gweek["estimatedCost"], 2)

    data = {
        "window5h": g5h,
        "thisWeek": gweek,
        "sessions": session_list,
    }
    _stats_usage_cache["ts"] = now
    _stats_usage_cache["data"] = data
    return JSONResponse(data)


# --- Per-session token stats & rate tracking ---

_session_stats_cache: dict[str, dict] = {}
_session_model_cache: dict[str, dict] = {}  # {session_name: {"model": str, "ts": float}}
# Model switches requested via the header dropdown, not yet confirmed by the
# transcript (the JSONL only shows the new model on the NEXT assistant reply).
_session_model_pending: dict[str, dict] = {}  # {session_name: {"model": str, "ts": float}}


def _session_model_fields(session_name: str) -> dict:
    """Model, effort, and pending model for session API payloads. Clears pending once
    the transcript confirms the switch, or after 15 min (request abandoned)."""
    model = _get_session_model(session_name)
    pend = _session_model_pending.get(session_name)
    if pend:
        base = pend.get("model", "").split("[", 1)[0]
        confirmed = bool(model and base and (model == base or model.startswith(base + "-")))
        if confirmed or time.time() - pend.get("ts", 0) > 900:
            _session_model_pending.pop(session_name, None)
            pend = None
    effort = _CODEX_DEFAULT_REASONING_EFFORT
    try:
        cfg = (_session_config_base(session_name) / "config.toml").read_text()
        match = re.search(
            r'^\s*model_reasoning_effort\s*=\s*"([^"]+)"',
            cfg,
            re.MULTILINE,
        )
        if match:
            effort = match.group(1)
    except Exception:
        pass
    return {
        "model": model,
        "model_pending": (pend or {}).get("model", ""),
        "effort": effort,
    }


def _get_session_model(session_name: str) -> str:
    """Detect the current model for a session by reading its latest codex rollout."""
    now = time.time()
    cached = _session_model_cache.get(session_name)
    if cached and now - cached.get("ts", 0) < 30:
        return cached.get("model", "")
    files = _find_session_jsonl_files(session_name)
    if not files:
        # Fall back to the model from codex config.toml
        try:
            cfg = (_session_config_base(session_name) / "config.toml").read_text()
            m = re.search(r'^\s*model\s*=\s*"([^"]+)"', cfg, re.MULTILINE)
            if m:
                _session_model_cache[session_name] = {"model": m.group(1), "ts": now}
                return m.group(1)
        except Exception:
            pass
        _session_model_cache[session_name] = {"model": "", "ts": now}
        return ""
    newest = max(files, key=lambda f: os.path.getmtime(f), default=None)
    if not newest:
        _session_model_cache[session_name] = {"model": "", "ts": now}
        return ""
    model = ""
    try:
        with open(newest, "rb") as f:
            f.seek(0, 2)
            size = f.tell()
            f.seek(max(0, size - 65536))
            tail = f.read().decode("utf-8", errors="replace")
        for line in reversed(tail.strip().split("\n")):
            try:
                d = json.loads(line)
                if d.get("type") == "turn_context":
                    m = d.get("payload", {}).get("model", "")
                    if m:
                        model = m
                        break
                if d.get("type") == "session_meta":
                    pass
            except (json.JSONDecodeError, KeyError):
                continue
    except Exception:
        logger.debug("Failed to detect model for '%s'", session_name, exc_info=True)
    _session_model_cache[session_name] = {"model": model, "ts": now}
    return model


def _find_session_jsonl_files(session_name: str) -> list:
    """Find codex rollout JSONL files whose recorded cwd matches the tmux session's cwd.

    Codex sessions are stored at ~/.codex/sessions/YYYY/MM/DD/rollout-*.jsonl
    and the cwd is recorded in the session_meta event at line 1.
    """
    cwd = get_session_cwd(session_name)
    if not cwd:
        return []
    cwd_norm = cwd.rstrip("/")
    sessions_home = _session_config_base(session_name)
    sessions_dir = sessions_home / "sessions"
    if not sessions_dir.exists():
        return []
    matches = []
    # Look back up to 30 days for performance.
    for fpath in sessions_dir.rglob("rollout-*.jsonl"):
        try:
            mtime = fpath.stat().st_mtime
            if time.time() - mtime > 30 * 86400:
                continue
            with open(fpath) as f:
                first = f.readline()
            if not first:
                continue
            try:
                meta = json.loads(first)
            except Exception:
                continue
            if meta.get("type") != "session_meta":
                continue
            mcwd = (meta.get("payload", {}) or {}).get("cwd", "").rstrip("/")
            if mcwd == cwd_norm:
                matches.append(str(fpath))
        except Exception:
            logger.debug("Failed to peek rollout %s", fpath, exc_info=True)
    return matches


def _parse_session_stats(session_name: str) -> dict:
    """Parse JSONL files and compute per-session token stats with rate tracking."""
    now = time.time()
    cached = _session_stats_cache.get(session_name)
    if cached and now - cached.get("_ts", 0) < 15:
        return cached

    files = _find_session_jsonl_files(session_name)
    if not files:
        result = {"available": False, "_ts": now}
        _session_stats_cache[session_name] = result
        return result

    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    now_epoch = now

    # Collect all assistant messages with usage from today
    entries = []  # (epoch_seconds, input_tok, output_tok, cache_read, cache_create, model)
    total_input = 0
    total_output = 0
    total_cache_read = 0
    total_cache_create = 0
    msg_count = 0
    models_seen = {}
    latest_model = "unknown"  # Track the most recently used model
    latest_model_ts = ""
    latest_input_tokens = 0
    latest_context_tokens = 0
    latest_context_window = 0
    estimated_cost = 0.0

    for fpath in files:
        try:
            mtime = os.path.getmtime(fpath)
            if datetime.fromtimestamp(mtime, timezone.utc).strftime("%Y-%m-%d") < today:
                continue
            current_model = _CODEX_DEFAULT_MODEL
            with open(fpath) as f:
                for line in f:
                    d = json.loads(line)
                    if d.get("type") == "turn_context":
                        current_model = d.get("payload", {}).get("model") or current_model
                        continue
                    if d.get("type") != "event_msg":
                        continue
                    payload = d.get("payload", {}) or {}
                    if payload.get("type") != "token_count":
                        continue
                    ts_str = d.get("timestamp", "")
                    if not ts_str.startswith(today):
                        continue
                    usage = (payload.get("info", {}) or {}).get("last_token_usage", {}) or {}
                    if not usage:
                        continue
                    info = payload.get("info", {}) or {}
                    inp = usage.get("input_tokens", 0)
                    out = usage.get("output_tokens", 0)
                    cr = usage.get("cached_input_tokens", 0)
                    cc = usage.get("reasoning_output_tokens", 0)
                    model = current_model

                    total_input += inp
                    total_output += out
                    total_cache_read += cr
                    total_cache_create += cc
                    msg_count += 1
                    models_seen[model] = models_seen.get(model, 0) + 1
                    estimated_cost += _estimate_cost(inp, out, cr, cc, model)
                    if ts_str >= latest_model_ts:
                        latest_model_ts = ts_str
                        latest_model = model
                        latest_input_tokens = int(usage.get("input_tokens", 0) or 0)
                        total_usage = info.get("total_token_usage", {}) or {}
                        latest_context_tokens = int(total_usage.get("total_tokens", 0) or 0)
                        latest_context_window = int(info.get("model_context_window", 0) or 0)

                    # Parse timestamp to epoch for rate calc
                    try:
                        dt = datetime.fromisoformat(ts_str.replace("Z", "+00:00"))
                        epoch = dt.timestamp()
                        entries.append((epoch, inp, out, cr, cc))
                    except Exception:
                        logger.debug("Failed to parse timestamp in stats JSONL entry", exc_info=True)
        except Exception:
            logger.debug("Failed to read stats JSONL for '%s'", session_name, exc_info=True)

    if not entries:
        result = {"available": False, "_ts": now}
        _session_stats_cache[session_name] = result
        return result

    # Sort by timestamp
    entries.sort(key=lambda e: e[0])

    # Use the most recently used model for display (cost was accumulated per event).
    primary_model = latest_model if latest_model != "unknown" else (max(models_seen, key=models_seen.get) if models_seen else "unknown")

    # Rate calculation: bucket into 1-minute windows
    # Only consider windows with meaningful output (> 10 output tokens = actually streaming)
    buckets = {}  # minute_epoch -> {input, output, total}
    for epoch, inp, out, cr, cc in entries:
        minute = int(epoch // 60) * 60
        b = buckets.setdefault(minute, {"input": 0, "output": 0, "total": 0})
        b["input"] += inp
        b["output"] += out
        b["total"] += inp + out

    # Active minutes: only windows with meaningful output (streaming, not just tool calls)
    active_minutes = [m for m, b in buckets.items() if b["output"] > 10]
    active_minutes.sort()

    # Peak rate: median of top 5 windows (avoid outlier spikes)
    output_rates = sorted([b["output"] for b in buckets.values() if b["output"] > 10], reverse=True)
    peak_output_rate = 0
    if output_rates:
        top = output_rates[:5]
        peak_output_rate = top[len(top) // 2]  # median of top 5

    # Recent rate: last 3 active minutes within the past 10 minutes
    recent_output_rate = 0
    cutoff = now_epoch - 600  # 10 minutes ago
    recent_active = [m for m in active_minutes if m >= cutoff]
    if recent_active:
        recent_mins = recent_active[-3:]
        recent_output_rate = int(sum(buckets[m]["output"] for m in recent_mins) / len(recent_mins))

    # Rate limit detection: only meaningful when session is currently busy
    # and has recent activity (within last 5 minutes)
    rate_status = "normal"
    rate_pct = 100
    activity = detect_activity(session_name)
    is_busy = activity["status"] == "busy"
    has_recent = recent_active and (now_epoch - recent_active[-1]) < 300

    if peak_output_rate > 100 and recent_output_rate > 0 and has_recent:
        rate_pct = min(100, int(recent_output_rate / peak_output_rate * 100))
        if is_busy and rate_pct < 30:
            rate_status = "severely_limited"
        elif is_busy and rate_pct < 60:
            rate_status = "limited"
    elif not has_recent:
        rate_pct = 0  # no recent data

    # Time since last activity
    last_active = entries[-1][0] if entries else 0
    secs_since_last = int(now_epoch - last_active) if last_active else -1

    # Session duration (first to last entry)
    session_start = entries[0][0]
    session_duration_min = int((entries[-1][0] - session_start) / 60) if len(entries) > 1 else 0

    result = {
        "available": True,
        "model": primary_model,
        "messageCount": msg_count,
        "totalInput": total_input,
        "totalOutput": total_output,
        "cacheRead": total_cache_read,
        "cacheCreate": total_cache_create,
        "totalTokens": total_input + total_output,
        "estimatedCost": round(estimated_cost, 4),
        "peakOutputRate": peak_output_rate,  # tokens/min
        "peakTotalRate": peak_output_rate,
        "recentOutputRate": recent_output_rate,
        "recentTotalRate": recent_output_rate,
        "rateStatus": rate_status,  # normal | limited | severely_limited
        "ratePct": rate_pct,
        "activeMinutes": len(active_minutes),
        "sessionDurationMin": session_duration_min,
        "secsSinceLastActivity": secs_since_last,
        "modelsUsed": models_seen,
        "contextPct": (
            round(latest_context_tokens / latest_context_window * 100, 1)
            if latest_context_window else 0
        ),
        "lastInputTokens": latest_input_tokens,
        "ctxWindowSize": latest_context_window,
        "_ts": now,
    }
    _session_stats_cache[session_name] = result
    return result


@app.get("/api/sessions/{session_name}/stats")
async def api_session_stats(session_name: str):
    """Per-session token usage, cost, and rate limit detection."""
    stats = await asyncio.to_thread(_parse_session_stats, session_name)
    return JSONResponse(stats)


class SendCommand(BaseModel):
    command: str

class SendKeys(BaseModel):
    # List of tmux key names, e.g. ["Escape"], ["C-c"], ["q", "Enter"].
    keys: list[str] = Field(max_length=50)

class AuthModeBody(BaseModel):
    mode: str  # "api" or "subscription"

class AwayModeBody(BaseModel):
    enabled: bool



@app.post("/api/sessions/{session_name}/resume")
async def api_resume_session(session_name: str):
    if not _find_session(session_name)[1]:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    result = await _controller_call(
        "session_resume", session=session_name, source="explicit-resume"
    )
    return JSONResponse(result, status_code=200 if result.get("ok") else 503)


@app.post("/api/sessions/{session_name}/send")
async def api_send_command(request: Request, session_name: str, body: SendCommand):
    # Aim at the AGENT's pane, not the session's active window: the IDE's
    # terminal window becomes active when a browser terminal attaches, and
    # prompts were being typed into that SSH shell instead of the agent.
    agent_target = await asyncio.to_thread(_agent_pane_target, session_name)
    """Send keystrokes to a tmux session, as if typed at the terminal."""
    _, sess = _find_session_for_user(session_name, _current_user(request))
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    resumed = await _controller_call(
        "session_resume", session=session_name, source="send-command"
    )
    if not resumed.get("ok"):
        return JSONResponse({"error": resumed.get("error", "session resume failed")}, status_code=503)
    if not await _wait_for_codex_input_ready(session_name):
        return JSONResponse(
            {
                "error": (
                    "Codex is still starting. Your message was not sent; "
                    "wait a moment and retry."
                )
            },
            status_code=503,
        )
    try:
        cmd_text = body.command
        if len(cmd_text) > 200:
            # For long messages, use tmux load-buffer + paste-buffer.
            # Codex's bracketed paste mode shows "[Pasted text +N lines]"
            # as a preview and often swallows the Enter that follows, leaving
            # the paste stuck until the user sends a second message. We defeat
            # this by sending the \e[?2004l escape sequence first (disables
            # bracketed paste), then pasting, then waiting long enough for
            # the terminal to render before pressing Enter.
            await asyncio.to_thread(subprocess.run,
                ["tmux", "send-keys", "-t", agent_target, "-H",
                 "1b", "5b", "3f", "32", "30", "30", "34", "6c"],  # \e[?2004l
                capture_output=True, text=True, timeout=5
            )
            await asyncio.sleep(0.15)
            with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as tmp:
                tmp.write(cmd_text)
                tmp_path = tmp.name
            try:
                await asyncio.to_thread(subprocess.run,
                    ["tmux", "load-buffer", tmp_path],
                    capture_output=True, text=True, timeout=5
                )
                await asyncio.to_thread(subprocess.run,
                    ["tmux", "paste-buffer", "-t", agent_target],
                    capture_output=True, text=True, timeout=5
                )
            finally:
                os.unlink(tmp_path)
            # Wait long enough for Codex to render the pasted content
            # before pressing Enter. Scale with length; cap at 5s.
            wait_secs = max(0.8, min(5.0, len(cmd_text) / 1500))
            await asyncio.sleep(wait_secs)
            # C-m is an explicit carriage return, which Codex treats as submit.
            await asyncio.to_thread(subprocess.run,
                ["tmux", "send-keys", "-t", agent_target, "C-m"],
                capture_output=True, text=True, timeout=5
            )
            # Belt-and-braces: if a bracketed paste preview is still showing
            # (because the escape sequence arrived too late, or bracketed paste
            # was re-enabled mid-flight), a second Enter usually dismisses the
            # preview and submits. Check the pane, only re-press Enter if we
            # still see paste preview markers.
            await asyncio.sleep(0.4)
            try:
                tail = await asyncio.to_thread(capture_pane_recent, session_name, 6)
                if "Pasted text" in tail or "[Pasted" in tail:
                    await asyncio.to_thread(subprocess.run,
                        ["tmux", "send-keys", "-t", agent_target, "C-m"],
                        capture_output=True, text=True, timeout=5
                    )
            except Exception:
                logger.debug("Post-paste verification failed", exc_info=True)
        else:
            # Short messages: send-keys -l is fine, but Codex's TUI needs one
            # render tick before Enter. Sending text and Enter back-to-back can
            # leave the text visibly parked in the input box without submitting.
            await asyncio.to_thread(subprocess.run,
                ["tmux", "send-keys", "-t", agent_target, "-l", cmd_text],
                capture_output=True, text=True, timeout=5
            )
            await asyncio.sleep(0.25)
            # Submit as a separate, explicit carriage-return key event.
            await asyncio.to_thread(subprocess.run,
                ["tmux", "send-keys", "-t", agent_target, "C-m"],
                capture_output=True, text=True, timeout=5
            )
        # Record user message in chat history
        now = time.time()
        entry = cache.setdefault(session_name, {})
        if "messages" not in entry:
            entry["messages"] = _load_session_messages(session_name)
        entry["messages"].append({
            "role": "user", "text": body.command, "ts": now
        })
        _save_messages()
        try:
            prompt_user = _current_user(request) or _user_for_session(session_name)
            if prompt_user:
                impersonator = getattr(request.state, "_impersonator", None)
                original = request.cookies.get("tmux_imp_orig")
                if impersonator is None:
                    impersonator = _user_from_token(original) if original else None
                if not _is_admin(impersonator):
                    impersonator = None
                _append_prompt_audit(
                    prompt_user,
                    session_name,
                    body.command,
                    impersonator=impersonator,
                    timestamp=now,
                )
        except Exception:
            logger.exception(
                "Failed to append prompt audit for session '%s'",
                session_name,
            )
        return JSONResponse({"ok": True, "sent": body.command})
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)



@app.post("/api/sessions/{session_name}/interrupt")
async def api_interrupt_session(session_name: str):
    """Send Escape key to interrupt a running Codex session."""
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    await _controller_call("session_touch", session=session_name, source="interrupt")
    try:
        await asyncio.to_thread(subprocess.run,
            ["tmux", "send-keys", "-t", session_name, "Escape"],
            capture_output=True, text=True, timeout=5
        )
        return JSONResponse({"ok": True, "action": "interrupt"})
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)


# Allowed tmux key names to prevent injection
ALLOWED_TMUX_KEYS = {
    "Escape", "Enter", "Space", "Tab", "BSpace",
    "Up", "Down", "Left", "Right",
    "C-c", "C-d", "C-z", "C-l", "C-a", "C-e", "C-u", "C-k", "C-w",
    "PageUp", "PageDown", "Home", "End",
}

@app.post("/api/sessions/{session_name}/send-keys")
async def api_send_keys(session_name: str, body: SendKeys):
    """Send raw key sequences to a tmux session (Escape, C-c, Enter, q, etc.).

    Unlike /send, this does NOT wrap text in -l (literal) mode and does NOT
    auto-append Enter. Use this for terminal control keys.
    """
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    resumed = await _controller_call(
        "session_resume", session=session_name, source="send-keys"
    )
    if not resumed.get("ok"):
        return JSONResponse({"error": resumed.get("error", "session resume failed")}, status_code=503)
    try:
        for key in body.keys:
            # Allow single printable characters (q, y, n, etc.) and known tmux key names
            if key in ALLOWED_TMUX_KEYS or (len(key) == 1 and key.isprintable()):
                await asyncio.to_thread(subprocess.run,
                    ["tmux", "send-keys", "-t", session_name, key],
                    capture_output=True, text=True, timeout=5
                )
            else:
                return JSONResponse({"error": f"Key not allowed: {key}"}, status_code=400)
        return JSONResponse({"ok": True, "keys_sent": body.keys})
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)


class BracketedPasteBody(BaseModel):
    enabled: bool

@app.post("/api/sessions/{session_name}/bracketed-paste")
async def api_bracketed_paste_toggle(session_name: str, body: BracketedPasteBody):
    """Toggle bracketed paste mode for a tmux session.
    Sends the ANSI escape sequence to enable/disable bracketed paste in the terminal.
    """
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    try:
        if body.enabled:
            # \e[?2004h — enable bracketed paste
            hex_seq = ["1b", "5b", "3f", "32", "30", "30", "34", "68"]
        else:
            # \e[?2004l — disable bracketed paste
            hex_seq = ["1b", "5b", "3f", "32", "30", "30", "34", "6c"]
        await asyncio.to_thread(subprocess.run,
            ["tmux", "send-keys", "-t", session_name, "-H"] + hex_seq,
            capture_output=True, text=True, timeout=5,
        )
        return JSONResponse({"ok": True, "bracketed_paste": body.enabled})
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)


@app.post("/api/sessions/{session_name}/set-auth-mode")
async def api_set_auth_mode(session_name: str, body: AuthModeBody):
    """Reject the legacy per-pane auth toggle.

    Codex credentials belong to CODEX_HOME. Mutating a shell variable in an
    already-running pane neither switches the active Codex process nor safely
    isolates one account from another, and sending a key through tmux
    would expose it in pane history. Authentication is therefore managed in
    Settings for the signed-in account.
    """
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    if body.mode not in ("api", "subscription"):
        return JSONResponse({"error": "Invalid mode"}, status_code=400)
    return JSONResponse(
        {
            "error": (
                "Codex authentication is configured per account. "
                "Use Settings > Login."
            )
        },
        status_code=409,
    )


@app.get("/api/models")
async def api_models():
    """The model dropdown catalog ([id, label] rows) + the launch default. Kept
    current by the 24h auto-detect; the frontend fetches this on load so newly
    released models appear without a redeploy."""
    return JSONResponse({
        "models": MODEL_CATALOG,
        "default": DEFAULT_MODEL,
        "efforts": list(_CODEX_REASONING_EFFORTS),
        "default_effort": _CODEX_DEFAULT_REASONING_EFFORT,
    })


@app.post("/api/models/refresh")
async def api_models_refresh(request: Request):
    """Force an immediate refresh from the installed Codex CLI (admin)."""
    user = _current_user(request)
    if not (user and _is_admin(user)):
        return JSONResponse({"error": "admin only"}, status_code=403)
    changed = await _refresh_model_catalog(force=True)
    return JSONResponse({"ok": True, "changed": changed, "models": MODEL_CATALOG})


async def _restart_codex_for_session(session_name: str) -> tuple[bool, bool]:
    """Exit Codex, restore the owner's environment, and resume the thread."""
    exported = False
    try:
        await asyncio.to_thread(
            subprocess.run,
            ["tmux", "send-keys", "-t", session_name, "-l", _agent_quit_command(session_name)],
            capture_output=True,
            text=True,
            timeout=5,
        )
        await asyncio.sleep(0.25)
        await asyncio.to_thread(
            subprocess.run,
            ["tmux", "send-keys", "-t", session_name, "Enter"],
            capture_output=True,
            text=True,
            timeout=5,
        )
        for _ in range(15):
            await asyncio.sleep(1)
            if not await _async_is_codex_running(session_name):
                break
        if await _async_is_codex_running(session_name):
            # An idle composer can retain partial text. Clear it once, then
            # retry the literal slash command. Never paste shell exports or a
            # launch command while the old Codex process is still alive.
            await asyncio.to_thread(
                subprocess.run,
                ["tmux", "send-keys", "-t", session_name, "C-c"],
                capture_output=True,
                text=True,
                timeout=5,
            )
            await asyncio.sleep(0.5)
            await asyncio.to_thread(
                subprocess.run,
                ["tmux", "send-keys", "-t", session_name, "-l", _agent_quit_command(session_name)],
                capture_output=True,
                text=True,
                timeout=5,
            )
            await asyncio.sleep(0.25)
            await asyncio.to_thread(
                subprocess.run,
                ["tmux", "send-keys", "-t", session_name, "Enter"],
                capture_output=True,
                text=True,
                timeout=5,
            )
            for _ in range(10):
                await asyncio.sleep(1)
                if not await _async_is_codex_running(session_name):
                    break
        if await _async_is_codex_running(session_name):
            logger.error(
                "Refusing to inject owner environment while Codex is still running in '%s'",
                session_name,
            )
            return False, False
        exported = _send_session_owner_environment(session_name)
        if not exported:
            return False, False
        await asyncio.sleep(0.3)
        launch = _session_launch_command(
            session_name,
            _session_launch_base(session_name),
            pin_model=False,
            resume=True,
        )
        await asyncio.to_thread(
            subprocess.run,
            ["tmux", "send-keys", "-t", session_name, "-l", launch],
            capture_output=True,
            text=True,
            timeout=5,
        )
        await asyncio.to_thread(
            subprocess.run,
            ["tmux", "send-keys", "-t", session_name, "Enter"],
            capture_output=True,
            text=True,
            timeout=5,
        )
        for _ in range(15):
            await asyncio.sleep(1)
            if await _async_is_codex_running(session_name):
                return exported, True
    except Exception:
        logger.exception("Failed to restart Codex in '%s'", session_name)
    return exported, False


def _write_session_codex_settings(session_name: str, managed: dict) -> Path:
    """Merge model settings into the session owner's standard config."""
    base = _session_config_base(session_name)
    base.mkdir(parents=True, exist_ok=True)
    config_path = base / "config.toml"
    existing = config_path.read_text() if config_path.exists() else ""
    merged = _merge_top_level_toml_keys(existing, managed)
    if merged != existing:
        _backup_before_dashboard_write(config_path)
        config_path.write_text(merged)
    return config_path


@app.post("/api/sessions/{session_name}/effort")
async def api_set_session_effort(session_name: str, body: SetSessionEffortBody):
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    # Claude takes --effort as a launch flag and never reads Codex's config.toml,
    # so its effort is stored per session and applied when the pane restarts.
    if _session_agent_kind(session_name) == "claude":
        level = (body.effort or "").strip().lower()
        if level not in CLAUDE_EFFORTS:
            return JSONResponse(
                {"error": f"Invalid effort. Use {', '.join(CLAUDE_EFFORTS)}."}, status_code=400
            )
        _set_session_claude_setting(session_name, "claude_effort", level)
        restarted = False
        if body.restart:
            try:
                await _restart_agent_with_new_flags(session_name)
                restarted = True
            except Exception as exc:  # noqa: BLE001 - setting is saved either way
                logger.info("Could not restart Claude for effort change", exc_info=True)
                return JSONResponse(
                    {"ok": True, "effort": level, "restarted": False, "warning": str(exc)[:200]}
                )
        return JSONResponse({"ok": True, "effort": level, "restarted": restarted})
    effort = _normalize_reasoning_effort(body.effort)
    if effort is None or effort == "":
        allowed = ", ".join(_CODEX_REASONING_EFFORTS)
        return JSONResponse({"error": f"Invalid effort. Use {allowed}."}, status_code=400)
    await asyncio.to_thread(
        _write_session_codex_settings,
        session_name,
        {"model_reasoning_effort": effort},
    )
    running = await _async_is_codex_running(session_name)
    exported = restarted = False
    if not running:
        exported = _send_session_owner_environment(session_name)
    elif body.restart:
        exported, restarted = await _restart_codex_for_session(session_name)
    return JSONResponse({
        "ok": True,
        "effort": effort,
        "codex_was_running": running,
        "exported": exported,
        "restarted": restarted,
    })


async def _quit_running_agent(session_name: str) -> bool:
    """Exit the agent in this pane, using its own quit command then Ctrl-C.

    Returns True when the pane is free. Callers MUST check: sending a launch
    command into a pane where the old agent is still alive types it into that
    agent's prompt instead of a shell.
    """
    for keys in (["-l", _agent_quit_command(session_name)], ["Enter"]):
        await asyncio.to_thread(
            subprocess.run,
            ["tmux", "send-keys", "-t", session_name, *keys],
            capture_output=True, text=True, timeout=5,
        )
    for _ in range(12):
        await asyncio.sleep(1)
        if not await _async_is_codex_running(session_name):
            return True
    await asyncio.to_thread(
        subprocess.run,
        ["tmux", "send-keys", "-t", session_name, "C-c"],
        capture_output=True, text=True, timeout=5,
    )
    for _ in range(8):
        await asyncio.sleep(1)
        if not await _async_is_codex_running(session_name):
            return True
    return False


async def _restart_agent_with_new_flags(session_name: str) -> bool:
    """Relaunch the session's agent so changed launch flags take effect.

    Claude's --effort/--model are read at process start, so a change only lands
    on the next launch. Quitting and relaunching in the same pane is what makes
    the setting apply without the user retyping anything.
    """
    # _restart_codex_for_session RESUMES the agent, which re-runs the previous
    # command line — so a changed --effort/--model would never take effect.
    # Quit the process, then send a freshly built launch command instead.
    if await _async_is_codex_running(session_name):
        if not await _quit_running_agent(session_name):
            # Never paste a launch command into a live agent's prompt.
            raise RuntimeError("The running agent did not exit; settings saved for its next start")
    owner = _user_for_session(session_name)
    _send_session_owner_environment(session_name)
    base = _session_launch_base(session_name, owner)
    await asyncio.to_thread(
        subprocess.run,
        ["tmux", "send-keys", "-t", session_name, "-l",
         _session_launch_command(session_name, base, pin_model=False)],
        capture_output=True, text=True, timeout=5,
    )
    await asyncio.to_thread(
        subprocess.run,
        ["tmux", "send-keys", "-t", session_name, "Enter"],
        capture_output=True, text=True, timeout=5,
    )
    return True


class SetSessionAgentBody(BaseModel):
    agent: str = "codex"
    restart: bool = True


@app.get("/api/sessions/{session_name}/agent")
async def api_get_session_agent(request: Request, session_name: str):
    """Everything the chat panel's agent/model/effort controls need, in one call.

    The panel would otherwise fan out to /api/models plus two session reads on
    every open; the values all come from the same place, so serve them together.
    """
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    agent = _session_agent_kind(session_name)
    if agent == "claude":
        # Claude's settings live with the session, not in Codex's config, and it
        # offers its own model aliases and effort levels.
        return JSONResponse({
            "agent": agent,
            "available": [name for name in ("codex", "claude") if shutil.which(name)],
            "model": _session_claude_setting(session_name, "claude_model"),
            "model_pending": "",
            "effort": _session_claude_setting(session_name, "claude_effort"),
            "models": [[alias, alias.capitalize()] for alias in CLAUDE_MODEL_ALIASES],
            "efforts": list(CLAUDE_EFFORTS),
            "default_model": "",
        })
    fields = await asyncio.to_thread(_session_model_fields, session_name)
    return JSONResponse({
        "agent": agent,
        "available": [name for name in ("codex", "claude") if shutil.which(name)],
        "model": fields.get("model", ""),
        "model_pending": fields.get("model_pending", ""),
        "effort": fields.get("effort", ""),
        "models": MODEL_CATALOG,
        "efforts": list(_CODEX_REASONING_EFFORTS),
        "default_model": DEFAULT_MODEL,
    })


@app.post("/api/sessions/{session_name}/agent")
async def api_set_session_agent(request: Request, session_name: str, body: SetSessionAgentBody):
    """Switch the agent running in a session.

    Unlike the model, the agent IS the process, so taking effect means quitting
    the current one and launching the other in the same pane.
    """
    user = _current_user(request)
    if user and not _user_can_access_session(user, session_name):
        return JSONResponse({"error": "Session not found"}, status_code=404)
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    agent = (body.agent or "").strip().lower()
    if agent not in {"codex", "claude"}:
        return JSONResponse({"error": "Agent must be 'codex' or 'claude'"}, status_code=400)
    if not shutil.which(agent):
        return JSONResponse(
            {"error": f"{agent} is not installed on this server"}, status_code=503
        )
    previous = _session_agent_kind(session_name)
    if not body.restart:
        _set_session_agent(session_name, agent)
        return JSONResponse({"ok": True, "agent": agent, "restarted": False})
    # Order matters: the OLD agent is what is running, so quit it with ITS quit
    # command before recording the new one. Setting the agent first made
    # _agent_quit_command return the new agent's command, which the running one
    # does not recognise — it stayed alive and the switch reported false success.
    try:
        if await _async_is_codex_running(session_name):
            await _quit_running_agent(session_name)
            if await _async_is_codex_running(session_name):
                return JSONResponse(
                    {"error": f"The running {previous} did not exit; agent unchanged"},
                    status_code=409,
                )
        _set_session_agent(session_name, agent)
        _send_session_owner_environment(session_name)
        base = _session_launch_base(session_name, user)
        for keys in (
            ["-l", _session_launch_command(session_name, base, pin_model=agent == "codex")],
            ["Enter"],
        ):
            await asyncio.to_thread(
                subprocess.run,
                ["tmux", "send-keys", "-t", session_name, *keys],
                capture_output=True, text=True, timeout=5,
            )
    except Exception as exc:  # noqa: BLE001 - report, don't 500 the switch
        _set_session_agent(session_name, previous)
        logger.warning("Agent switch failed for %s", session_name, exc_info=True)
        return JSONResponse({"error": str(exc)[:200] or "Could not switch agent"}, status_code=502)
    return JSONResponse({"ok": True, "agent": agent, "restarted": True})


@app.post("/api/sessions/{session_name}/model")
async def api_set_session_model(session_name: str, body: SetSessionModelBody):
    """Persist the account's Codex model and optionally restart the live pane."""
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    model = (body.model or "").strip()
    if not re.match(r"^[A-Za-z0-9._:/-]{2,80}$", model):
        return JSONResponse({"error": "Invalid model id."}, status_code=400)
    if _session_agent_kind(session_name) == "claude":
        _set_session_claude_setting(session_name, "claude_model", model)
        restarted = False
        if body.restart:
            try:
                await _restart_agent_with_new_flags(session_name)
                restarted = True
            except Exception as exc:  # noqa: BLE001 - setting is saved either way
                logger.info("Could not restart Claude for model change", exc_info=True)
                return JSONResponse(
                    {"ok": True, "model": model, "restarted": False, "warning": str(exc)[:200]}
                )
        return JSONResponse({"ok": True, "model": model, "restarted": restarted})
    await asyncio.to_thread(
        _write_session_codex_settings,
        session_name,
        {"model": model},
    )
    _session_model_cache.pop(session_name, None)
    running = await _async_is_codex_running(session_name)
    exported = restarted = False
    if not running:
        exported = _send_session_owner_environment(session_name)
    elif body.restart:
        exported, restarted = await _restart_codex_for_session(session_name)
    if running and not restarted:
        _session_model_pending[session_name] = {"model": model, "ts": time.time()}
    else:
        _session_model_pending.pop(session_name, None)
    return JSONResponse({
        "ok": True,
        "model": model,
        "codex_was_running": running,
        "exported": exported,
        "restarted": restarted,
    })


# --- Auto-responder for Codex interactive prompts ---
# Automatically detects when Codex is waiting for user input
# (plan approval, questions, permission prompts) and sends Enter
# to select the default/first option — keeps sessions unblocked.

_auto_respond_cooldown: dict[str, float] = {}
_AUTO_RESPOND_INTERVAL = 3      # seconds between checks
_AUTO_RESPOND_COOLDOWN = 10     # min seconds between auto-responds per session
_auto_respond_log: list = []    # recent auto-respond events (for debugging)


def _detect_interactive_prompt(visible_text: str) -> str | None:
    """Check if visible terminal shows a Codex interactive prompt.

    Returns a description of the detected prompt, or None.

    SAFETY: We require the ❯ cursor to sit DIRECTLY on a numbered option
    line (e.g. "❯ 1. Yes"). If ❯ is followed by free text (e.g.
    "❯ test it in the browser") that is the user input prompt, not a
    selection — Enter would submit that text instead of selecting an option,
    which is the "phantom message" bug we must avoid.
    """
    lines = visible_text.strip().split("\n")
    last_25 = lines[-25:]
    text = "\n".join(last_25)

    # Must have the ❯ selection cursor
    if "\u276f" not in text and "❯" not in text:
        return None

    # Count lines that look like numbered options: "  1. text" or "❯ 1. text"
    numbered = 0
    has_selector_on_option = False
    selector_followed_by_text = False
    for line in last_25:
        stripped = line.strip()
        if re.match(r"^[❯\u276f\s]*\d+\.\s", stripped):
            numbered += 1
        if re.match(r"^❯\s*\d+\.", stripped) or re.match(r"^\u276f\s*\d+\.", stripped):
            has_selector_on_option = True
        # ❯ followed by non-numeric text = user input prompt with text waiting.
        # Enter on this would submit that text — never auto-fire here.
        if re.match(r"^[❯\u276f]\s+\S", stripped) and not re.match(r"^[❯\u276f]\s*\d+\.", stripped):
            selector_followed_by_text = True

    # Bail if cursor is in the user input box with text waiting.
    if selector_followed_by_text and not has_selector_on_option:
        return None

    # Strong signal: specific Codex prompt keywords
    strong_keywords = [
        "bypass permissions",
        "manually approve edits",
        "shift+tab to approve",
        "Would you like to proceed",
        "approve with this feedback",
    ]
    has_strong = any(kw in text for kw in strong_keywords)

    # Plan approval / permission prompt — keyword AND cursor on a numbered
    # option, so Enter selects an option and never submits free text.
    if has_strong and has_selector_on_option and numbered >= 2:
        return "plan_approval"

    # Generic Codex selection prompt: ❯ on a numbered option + 2+ options
    if has_selector_on_option and numbered >= 2:
        return "selection_prompt"

    return None


_MENU_PICK_SYSTEM_PROMPT = (
    "A Codex agent is showing a numbered selection menu and THE USER IS AWAY and will "
    "not answer. Pick the option number that best lets the agent CONTINUE and COMPLETE the work "
    "on its own.\n"
    "- Strongly prefer options that proceed / do the work / say Yes / auto-accept / "
    "'yes, and don't ask again' / accept-edits / run it.\n"
    "- AVOID options that pause, stop, cancel, exit, quit, reject, defer, or hand control back "
    "to the user (e.g. 'no', 'let me decide', 'I'll do it myself', 'ask me later').\n"
    "- If several options proceed, pick the one that makes the MOST progress with the fewest "
    "future interruptions.\n"
    "- If genuinely unsure, pick 1.\n"
    "Reply with ONLY the option number, nothing else."
)


def _parse_menu_options(visible_text: str):
    """Parse a Codex numbered menu. Returns (options, selected_idx) where
    options = [(number, label), ...] in visual order and selected_idx is the
    0-based position of the ❯-highlighted option (0 if none found)."""
    options = []
    selected = None
    for line in visible_text.split("\n"):
        s = line.strip()
        m = re.match(r"^(❯|❯)?\s*(\d+)\.\s+(\S.*)$", s)
        if not m:
            continue
        if m.group(1):
            selected = len(options)
        options.append((int(m.group(2)), m.group(3).strip()))
    return options, (selected if selected is not None else 0)


async def _llm_pick_menu_option(name: str, visible: str, options: list):
    """Ask the LLM which menu option best continues the work. Returns the chosen
    option NUMBER, or None to fall back to the default (Enter)."""
    valid = {n for n, _ in options}
    if not valid:
        return None
    try:
        raw = await llm_call(
            system_prompt=_MENU_PICK_SYSTEM_PROMPT,
            user_content=(f"Session '{name}' is showing this menu:\n\n{visible[-2500:]}\n\n"
                          f"Valid option numbers: {sorted(valid)}. Reply with ONE number."),
            max_tokens=4,
        )
    except Exception:
        return None
    m = re.search(r"\d+", raw or "")
    if not m:
        return None
    n = int(m.group())
    return n if n in valid else None


async def _select_menu_option(name: str, options: list, selected_idx: int, target_num: int) -> str:
    """Navigate to the target option (arrow keys) and Enter. Returns a label for logging."""
    target_idx = next((i for i, (n, _) in enumerate(options) if n == target_num), None)
    if target_idx is None:
        target_idx = selected_idx
    delta = target_idx - selected_idx
    if 0 < abs(delta) < len(options):
        key = "Down" if delta > 0 else "Up"
        for _ in range(abs(delta)):
            await asyncio.to_thread(subprocess.run,
                ["tmux", "send-keys", "-t", name, key],
                capture_output=True, text=True, timeout=3)
            await asyncio.sleep(0.06)
    await asyncio.to_thread(subprocess.run,
        ["tmux", "send-keys", "-t", name, "Enter"],
        capture_output=True, text=True, timeout=3)
    label = next((option_label for n, option_label in options if n == target_num), "")
    return f"option {target_num} ({label[:40]})" if label else f"option {target_num}"


async def _auto_responder_loop():
    """Background loop that auto-responds to Codex interactive prompts."""
    log = logging.getLogger("auto-responder")
    await asyncio.sleep(5)  # initial delay after startup
    while True:
        try:
            await asyncio.sleep(_AUTO_RESPOND_INTERVAL)
            sessions_list = get_tmux_sessions()
            now = time.time()
            for sess in sessions_list:
                name = sess["name"]
                # Auto-push "off" means never type anything into this terminal.
                if _get_autopush_mode(name) == "off":
                    continue
                # Check cooldown
                last = _auto_respond_cooldown.get(name, 0)
                if now - last < _AUTO_RESPOND_COOLDOWN:
                    continue
                # Capture visible pane (not history — just what's on screen)
                try:
                    result = await asyncio.to_thread(
                        subprocess.run,
                        ["tmux", "capture-pane", "-t", name, "-p"],
                        capture_output=True, text=True, timeout=3,
                    )
                    if result.returncode != 0 or not result.stdout.strip():
                        continue
                except Exception:
                    continue

                prompt_type = _detect_interactive_prompt(result.stdout)
                if prompt_type:
                    # Safety backstop: don't auto-approve a clearly destructive /
                    # irreversible action — leave it for a human. (Back off ~60s to
                    # avoid re-logging every poll.)
                    if _looks_destructive(result.stdout):
                        _auto_respond_cooldown[name] = now + 50
                        log.info("Auto-responder HOLDING '%s' — destructive prompt needs a human", name)
                        continue
                    # Read the options and let the LLM choose the one that best
                    # continues the work autonomously, then navigate to it + Enter.
                    # Falls back to Enter (the highlighted/first option) if the LLM
                    # is unavailable or unsure — menus still get handled instantly.
                    options, selected_idx = _parse_menu_options(result.stdout)
                    target = (await _llm_pick_menu_option(name, result.stdout, options)
                              if len(options) >= 2 else None)
                    if target is not None:
                        chosen = await _select_menu_option(name, options, selected_idx, target)
                    else:
                        await asyncio.to_thread(
                            subprocess.run,
                            ["tmux", "send-keys", "-t", name, "Enter"],
                            capture_output=True, text=True, timeout=3,
                        )
                        chosen = "default option (Enter)"
                    _auto_respond_cooldown[name] = now
                    event = {"session": name, "type": prompt_type, "choice": chosen, "ts": now}
                    _auto_respond_log.append(event)
                    # Keep log bounded
                    if len(_auto_respond_log) > 50:
                        _auto_respond_log.pop(0)
                    log.info(f"Auto-responded to {prompt_type} in session '{name}' -> {chosen}")
        except Exception:
            logger.debug("Auto-responder loop iteration failed", exc_info=True)


@app.get("/api/auto-respond-log")
async def api_auto_respond_log():
    """Recent auto-respond events for debugging."""
    return JSONResponse(_auto_respond_log[-20:])


# --- Autopilot Watchdog Loop (formerly "simple watchdog") ---
# Always-on smart supervisor. When a session goes idle because Codex stopped and
# is waiting on the user in ANY way — a question, a choice, a confirmation, work
# it deferred ("left for phase 2", "out of scope", "next steps", "we could
# also…"), or just a soft pause — it reads the screen, asks an LLM what reply
# keeps the work moving on its own, and types that reply back. The user is usually
# away, so the bias is: ALWAYS find a way to continue autonomously. It only holds
# off (WAIT) when Codex is still actively working, when the only next action is
# genuinely destructive/irreversible (needs a human), or when the task is truly
# 100% complete with nothing deferred or optional left.

_SIMPLE_WATCHDOG_INTERVAL = 20          # poll every 20s
_SIMPLE_WATCHDOG_IDLE_SECS = 45         # stable-idle this long before considering action
_SIMPLE_WATCHDOG_COOLDOWN = 90          # min seconds between replies per session
_SIMPLE_WATCHDOG_MAX_LOG = 20
_SIMPLE_WATCHDOG_MAX_SAME_STALL = 3     # back off after N nudges that don't change the screen

_SIMPLE_WATCHDOG_SYSTEM_PROMPT = (
    "You are an autonomous operator keeping a Codex agent moving while THE USER IS AWAY. "
    "You are shown the bottom of the agent's terminal; the agent has gone idle. If it has stopped "
    "and is in ANY way waiting on the user before it can keep working, write the exact message to "
    "send so it continues on its own. The user is not here and will not answer — waiting wastes time.\n\n"
    "CRITICAL: only ever continue work that is ALREADY underway. If the agent has not started "
    "anything — a brand-new or empty session, just the welcome screen, or an idle prompt with no "
    "question and no work above it to act on — choose 'wait'. NEVER invent a task, instruction, or "
    "next step out of nothing; you only push EXISTING work forward, you do not start new work.\n\n"
    "NEVER ASSERT RESULTS AND NEVER DECLARE THE WORK DONE. You are only reading a terminal — you do "
    "NOT actually know whether any check, test, build, deploy, or fix passed or works. So you must NEVER:\n"
    "- State or imply that checks/tests passed, or that something is verified, confirmed, working, "
    "fixed, or 'functioning correctly'.\n"
    "- Tell the agent to mark, set, treat, consider, or declare a task complete, done, verified, "
    "resolved, or finished.\n"
    "Your job is to push UNFINISHED work forward, never to rubber-stamp it as finished. If the agent "
    "is showing results and is about to wrap up, do NOT confirm them for it — instead tell it to "
    "re-verify the work ITSELF and keep going, e.g. 'Re-check that yourself end to end before "
    "concluding, then finish anything still left. Don't wait for me.' If the task genuinely has "
    "nothing left to do, choose 'wait' — let the agent or the user close it out, never close it out "
    "for them.\n\n"
    "Treat ALL of these as 'waiting on the user' and answer them so work continues:\n"
    "- Questions or choices ('Which should I do, A or B?', 'Do you want X or Y?', 'which one?').\n"
    "- Confirmations ('Shall I proceed?', 'Want me to continue?', 'Should I also do X?').\n"
    "- Deferrals / scope-punts ('I left this for phase 2', 'X is out of scope', 'as a follow-up', "
    "'next steps:', 'we could also…', 'optionally', 'if you want I can…').\n"
    "- Soft stops ('Let me know how you'd like to proceed', 'standing by', 'paused here').\n\n"
    "How to answer — always push toward FULLY DONE, autonomously:\n"
    "- Choice: pick the option that best completes the overall task and say to proceed with it, e.g. "
    "'Go with option 2 and keep going — don't wait for me.'\n"
    "- Deferral/scope-punt: tell it to do that work now, e.g. 'Do phase 2 now as well. Treat the "
    "whole thing as in scope and finish it end to end. Don't stop to ask.'\n"
    "- Confirmation: 'Yes, proceed. Keep going autonomously and don't wait for me.'\n"
    "- Make reasonable default assumptions; NEVER ask the user anything back; never tell it to stop, "
    "pause, or wait. Keep the message to 1-3 concrete sentences that include an instruction to "
    "continue without the user.\n\n"
    "Choose action 'wait' ONLY if:\n"
    "- The agent is still actively working (spinner / 'esc to interrupt' / tool output streaming), OR\n"
    "- There is NO existing task to advance: a brand-new/empty session, a bare welcome screen, or an "
    "idle prompt with no question, no deferred work, and nothing above it to act on. Do not fabricate "
    "a first instruction — only continue work already on screen, OR\n"
    "- The task is 100% complete: every goal met, nothing deferred, nothing optional left, no question "
    "on screen, OR\n"
    "- *** SAFETY OVERRIDE (this beats the continue-bias) *** the next action is genuinely "
    "DESTRUCTIVE / IRREVERSIBLE / HIGH-COST and a human must decide: deleting or overwriting "
    "production or unrecoverable data, dropping/truncating DB tables, force-pushing or rewriting "
    "shared git history, spending real money above a small (~$100) threshold, or sending mass / "
    "sensitive external messages. If there is ANY doubt about whether an action is destructive, "
    "irreversible, or high-cost, choose 'wait'. Never auto-approve these.\n\n"
    "Respond with STRICT JSON only: {\"action\":\"send\",\"message\":\"<what to type>\"} "
    "or {\"action\":\"wait\"}."
)


# Deterministic safety backstop. If the recent screen (or the message we're about
# to send) names a clearly catastrophic / irreversible operation, we NEVER
# auto-drive it — we leave it for a human, regardless of what the LLM decided.
# Kept tight so it doesn't block the common "just keep going" cases.
_DESTRUCTIVE_RE = re.compile(
    r"\bDROP\s+(?:TABLE|DATABASE|SCHEMA)\b"
    r"|\bTRUNCATE\s+TABLE\b"
    r"|\brm\s+-[rfRF]{1,2}\s+(?:-{1,2}\w+\s+)*(?:/|~|\$HOME|\*|/etc|/var|/usr|/home|/opt|/root|/boot)"
    r"|\b(?:force[- ]?push|push\s+--force\b|push\s+-f\b|git\s+reset\s+--hard)\b"
    r"|\b(?:delet|drop|wip|eras|destroy|purg)\w*\s+(?:\w+\s+){0,5}?(?:production|prod\b|all\s+(?:the\s+)?(?:user|customer|account|record|row|data|table))"
    r"|\b(?:irreversibl\w*|cannot be undone|can'?t be undone|permanently\s+(?:delet|remov|eras|destroy)\w*)"
    r"|\boverwrit\w*\s+(?:\w+\s+){0,5}?(?:production|remote\s+history|shared\s+history)"
    # high-cost spend: a spend verb near a $100+ amount, or any $100+ /month|/year rate
    # ($100+ = 3+ plain digits or comma-grouped thousands; "$99"/"$5/mo" stay under)
    r"|\b(?:spend|purchas\w*|buy|buying|charg\w*|pay|paying|subscrib\w*|upgrad\w*|order\w*)\b[^\n]{0,40}\$\s?(?:[1-9]\d{2,}|[1-9]\d?(?:,\d{3})+)"
    r"|\$\s?(?:[1-9]\d{2,}|[1-9]\d?(?:,\d{3})+)(?:\.\d+)?\s*(?:/|per)\s*(?:mo|month|yr|year)\b",
    re.I,
)


def _looks_destructive(text: str) -> bool:
    """True if the text names a clearly destructive/irreversible/high-cost action
    that should never be auto-approved without a human."""
    return bool(_DESTRUCTIVE_RE.search(text or ""))


# The watchdog must only push UNFINISHED work forward — it must never assert that
# checks/tests passed or instruct the agent to mark a task complete/verified. (It
# only reads a terminal; it cannot actually know any result.) If the composed reply
# does either, we swap it for this neutral nudge so the session still gets unstuck
# without fabricating a status or forcing a premature "done".
_WATCHDOG_SAFE_CONTINUE = (
    "Keep going on your own and take the task all the way to the end. Don't rely on my say-so for "
    "whether it's finished — re-check the work yourself first, then continue with anything still left. "
    "Don't wait for me."
)

_COMPLETION_ASSERT_RE = re.compile(
    # telling the agent to mark/treat/declare the work finished
    r"\b(?:mark|set|flag|treat|consider|declare|call|close)\b[^\n.]{0,45}?\b"
    r"(?:complete|completed|done|finished|verified|resolved|closed)\b"
    r"|\bfully\s+(?:verified|complete|completed|done|tested)\b"
    # asserting checks/tests/steps passed or were confirmed
    r"|\b(?:all|every|each|the|both)\s+(?:check|test|verification|step|task)s?\b[^\n.]{0,35}?\b"
    r"(?:pass(?:ed|es)?|confirm(?:ed)?|verifi(?:ed|es)|green|success\w*|working|complete)\b"
    # asserting something works / is confirmed / functioning correctly
    r"|\b(?:functioning|working|works?|behav\w+|operat\w+)\s+(?:correctly|properly|as[ -]expected|fine)\b"
    r"|\beverything\s+(?:is\s+|looks?\s+|seems?\s+)?(?:working|confirmed|verified|complete|good|fine|in order|passing)\b"
    r"|\bgood\s+to\s+go\b",
    re.I,
)


def _asserts_completion(text: str) -> bool:
    """True if the text claims work passed/works or tells the agent to mark a task
    complete/verified. The watchdog only pushes UNFINISHED work forward — it must
    never rubber-stamp completion or fabricate a result."""
    return bool(_COMPLETION_ASSERT_RE.search(text or ""))


def _parse_autopilot_decision(raw: str):
    """Parse the autopilot LLM JSON. Returns {'action':'send','message':...},
    {'action':'wait'}, or None. Conservative: only 'send' on valid JSON + message."""
    if not raw:
        return None
    t = raw.strip().strip("`").strip()
    if re.fullmatch(r"(?i)wait\.?", t):
        return {"action": "wait"}
    m = re.search(r"\{.*\}", t, re.S)
    if not m:
        return None
    try:
        d = json.loads(m.group())
    except Exception:
        return None
    if not isinstance(d, dict):
        return None
    act = str(d.get("action", "")).lower()
    if act == "wait":
        return {"action": "wait"}
    if act == "send":
        msg = str(d.get("message", "")).strip()
        return {"action": "send", "message": msg} if msg else None
    return None


def _simple_watchdog_record(session_name: str, action: str):
    log = _simple_watchdog_log.setdefault(session_name, [])
    log.append({"ts": time.time(), "action": action})
    if len(log) > _SIMPLE_WATCHDOG_MAX_LOG:
        del log[:-_SIMPLE_WATCHDOG_MAX_LOG]


async def _simple_watchdog_send_continue(session_name: str) -> bool:
    """Send 'continue' to the session's Codex prompt. Returns True on send."""
    return await _simple_watchdog_send_text(session_name, "continue")


async def _simple_watchdog_send_text(session_name: str, text: str) -> bool:
    """Type a composed reply into the session's Codex input box and submit.
    Collapses to a single line so Enter submits the whole message at once."""
    text = " ".join((text or "").split())
    if not text:
        return False
    try:
        # -l sends the text literally (so it isn't interpreted as tmux key names);
        # a separate Enter then submits it to Codex.
        await asyncio.to_thread(
            subprocess.run,
            ["tmux", "send-keys", "-t", session_name, "-l", text],
            capture_output=True, text=True, timeout=5,
        )
        await asyncio.sleep(0.1)
        await asyncio.to_thread(
            subprocess.run,
            ["tmux", "send-keys", "-t", session_name, "Enter"],
            capture_output=True, text=True, timeout=5,
        )
        return True
    except Exception as e:
        logger.debug("autopilot: failed to send reply to '%s': %s", session_name, e)
        return False


async def _simple_watchdog_loop():
    """Background loop: nudge sessions that are paused waiting for 'continue'."""
    slog = logging.getLogger("simple-watchdog")
    await asyncio.sleep(8)  # let startup settle
    while True:
        try:
            await asyncio.sleep(_SIMPLE_WATCHDOG_INTERVAL)
            sessions_list = await asyncio.to_thread(get_tmux_sessions)
            now = time.time()
            for sess in sessions_list:
                name = sess["name"]
                # Free-form "keep going" nudges only run in FULL auto-push mode.
                # ("off"/"basic" leave the composing watchdog idle; basic still
                # gets option-picking + prompt confirms via the auto-responder.)
                if _get_autopush_mode(name) != "full":
                    _simple_watchdog_state.pop(name, None)
                    continue
                # Don't fight the autonomous-mode watchdog — those modes have their own loop
                if _away_mode_state.get(name, {}).get("enabled"):
                    continue
                if _go_nuts_state.get(name, {}).get("enabled"):
                    continue
                # Don't fire if Codex isn't even running
                if not await _async_is_codex_running(name):
                    _simple_watchdog_state.pop(name, None)
                    continue
                # Cooldown
                state = _simple_watchdog_state.setdefault(name, {})
                last_action = state.get("last_action", 0)
                if now - last_action < _SIMPLE_WATCHDOG_COOLDOWN:
                    continue
                # Activity must be idle
                try:
                    activity = await async_detect_activity(name)
                except Exception:
                    continue
                if activity.get("status") != "idle":
                    state["idle_since"] = 0
                    continue
                # Capture the visible pane to inspect the prompt area
                try:
                    vis = await asyncio.to_thread(
                        subprocess.run,
                        ["tmux", "capture-pane", "-t", name, "-p"],
                        capture_output=True, text=True, timeout=3,
                    )
                    if vis.returncode != 0:
                        continue
                    visible = vis.stdout
                except Exception:
                    continue
                # Skip if there's an interactive selection prompt — auto-responder owns it
                if _detect_interactive_prompt(visible):
                    continue
                # Never type "continue" into a bare shell. If Codex crashed to bash
                # between the is-running check above and now, the crash-recovery loop
                # owns relaunching it — typing here would just spam the shell.
                if _looks_like_bare_shell(visible):
                    continue
                # Never act on a brand-new Codex session that hasn't started work yet
                # (welcome splash + empty prompt, no conversation). There is nothing to
                # "continue", so nudging only makes the LLM fabricate a first instruction
                # and type it into an untouched session.
                if _looks_like_fresh_claude_session(visible):
                    continue
                # Skip if user has typed something into the prompt box (don't clobber)
                if _has_pending_user_input(visible):
                    continue
                # Track stable-idle duration
                content_hash = hashlib.md5(visible.encode()).hexdigest()
                if state.get("last_hash") != content_hash:
                    state["last_hash"] = content_hash
                    state["idle_since"] = now
                    continue
                idle_for = now - state.get("idle_since", now)
                if idle_for < _SIMPLE_WATCHDOG_IDLE_SECS:
                    continue
                # Back off if we keep hitting the EXACT same stalled screen — a reply
                # that doesn't move it means poking again won't help; leave it for a human.
                if content_hash == state.get("acted_hash"):
                    same = state.get("same_stall", 0) + 1
                    state["same_stall"] = same
                    if same >= _SIMPLE_WATCHDOG_MAX_SAME_STALL:
                        if not state.get("backed_off"):
                            slog.info("Autopilot backing off '%s' — unchanged after %d replies", name, same)
                            state["backed_off"] = True
                        continue
                else:
                    state["same_stall"] = 0
                    state["backed_off"] = False
                # Read the screen and let the LLM compose the reply that keeps it moving.
                recent = await asyncio.to_thread(capture_pane_recent, name, 80)
                if not recent.strip():
                    continue
                # Safety backstop: never auto-drive a clearly destructive/irreversible
                # action — the one carve-out from the continue bias. Checked before the
                # LLM call (cheap) so we don't waste a call either.
                if _looks_destructive(recent):
                    if state.get("held_hash") != content_hash:
                        state["held_hash"] = content_hash
                        slog.info("Autopilot HOLDING '%s' — possible destructive/irreversible "
                                  "action on screen; needs a human", name)
                    continue
                try:
                    raw = await llm_call(
                        system_prompt=_SIMPLE_WATCHDOG_SYSTEM_PROMPT,
                        user_content=f"Session '{name}' terminal (most recent lines):\n\n{recent[-4500:]}",
                        max_tokens=160,
                        response_format={"type": "json_object"},
                    )
                except Exception:
                    continue
                decision = _parse_autopilot_decision(raw)
                if not decision or decision.get("action") != "send":
                    continue
                msg = (decision.get("message") or "").strip()
                if not msg or _looks_destructive(msg):
                    continue
                # Never let the watchdog assert results or rubber-stamp completion. Its
                # only job is to UNSTICK the session and push unfinished work forward —
                # not to claim checks passed or tell the agent to mark a task done. If the
                # composed reply does either, swap it for a neutral "keep going, verify it
                # yourself" nudge so we still continue without fabricating a status.
                if _asserts_completion(msg):
                    slog.info("Autopilot rewrote completion-asserting reply to '%s': %s",
                              name, (msg if len(msg) <= 120 else msg[:117] + "..."))
                    _simple_watchdog_record(name, f"rewrote completion claim: {msg[:80]}")
                    msg = _WATCHDOG_SAFE_CONTINUE
                # One more guard: re-check Codex is still running before sending
                if not await _async_is_claude_running(name):
                    continue
                ok = await _simple_watchdog_send_text(name, msg)
                if ok:
                    state["last_action"] = now
                    state["idle_since"] = now
                    state["acted_hash"] = content_hash
                    short = msg if len(msg) <= 90 else msg[:87] + "..."
                    _simple_watchdog_record(name, f"replied (idle {int(idle_for)}s): {short}")
                    slog.info("Autopilot replied to '%s' after %ds idle: %s", name, int(idle_for), short)
        except asyncio.CancelledError:
            slog.info("Simple watchdog cancelled")
            raise
        except Exception:
            logger.debug("Simple watchdog iteration failed", exc_info=True)


# --- Auto /login watchdog: re-authenticate a session when Codex asks for login ---

_LOGIN_NEEDED_RE = re.compile(
    r"(?:please run\s+/login|run\s+`?/login`?|type\s+/login|/login\s+to\s+(?:authenticate|continue|log in|sign in)|"
    r"invalid api key|authentication[ _]error|oauth[^\n]*(?:token)?[^\n]*(?:expired|invalid|revoked)|"
    r"(?:your )?session (?:has )?expired|please (?:re-?)?log\s?in|login required|"
    r"you (?:are|'re) not (?:logged in|authenticated)|sign in to continue)",
    re.I,
)
_LOGIN_WATCHDOG_INTERVAL = 15      # seconds between scans
_LOGIN_WATCHDOG_COOLDOWN = 180     # min seconds between auto /login per session
# A login prompt must sit unchanged this long before we treat it as abandoned and
# clear it — otherwise we'd interrupt someone typing /login by hand.
_LOGIN_FLOW_STALE_AFTER = 45
_login_watchdog_state: dict[str, dict] = {}


async def _login_watchdog_loop():
    """If a session's Codex shows a login-required message, auto-run /login once
    (per cooldown) so the user doesn't have to notice and type it themselves."""
    llog = logging.getLogger("login-watchdog")
    await asyncio.sleep(10)  # let startup settle
    while True:
        try:
            await asyncio.sleep(_LOGIN_WATCHDOG_INTERVAL)
            sessions_list = await asyncio.to_thread(get_tmux_sessions)
            now = time.time()
            for sess in sessions_list:
                name = sess["name"]
                # Auto-push "off" means fully hands-off — don't even auto /login.
                if _get_autopush_mode(name) == "off":
                    continue
                state = _login_watchdog_state.setdefault(name, {})
                if now - state.get("last_action", 0) < _LOGIN_WATCHDOG_COOLDOWN:
                    continue
                if not await _async_is_claude_running(name):
                    continue
                try:
                    recent = await asyncio.to_thread(capture_pane_recent, name, 40)
                except Exception:
                    continue
                low = (recent or "").lower()
                # Is a Codex /login flow currently on screen? (auth-method menu,
                # OAuth URL, paste-code prompt, or the "invalid code — retry" error).
                login_flow_open = bool(recent) and (
                    ("paste" in low and "code" in low)
                    or ("https://" in recent and "oauth" in low)
                    or ("oauth error" in low)
                    or ("select login method" in low)
                    or ("press enter to retry" in low and "esc to cancel" in low)
                )

                needs_login = bool(recent) and bool(_LOGIN_NEEDED_RE.search(recent))
                # A stored OpenAI key is the non-interactive recovery path. If the
                # active ChatGPT refresh token was revoked, _auto_fix_login asks
                # Codex to validate it, writes API-key auth on failure, and relaunches.
                if _active_openai_key():
                    if not needs_login and not login_flow_open:
                        state.pop("flow_since", None)
                        continue
                    state["last_action"] = now
                    state.pop("flow_since", None)
                    res = await _auto_fix_login(name)
                    if res.get("ok"):
                        llog.warning(
                            "Session '%s' recovered automatically (via %s)",
                            name,
                            res.get("via"),
                        )
                    else:
                        llog.warning("API fallback recovery for '%s' failed: %s", name, res.get("error"))
                    continue

                if not needs_login and not login_flow_open:
                    state.pop("flow_since", None)
                    continue

                # A login prompt on screen might be a HUMAN typing /login right
                # now — never yank that out from under them. Only once the same
                # prompt has sat unchanged for a while is it stale and ours.
                if login_flow_open:
                    since = state.get("flow_since")
                    if not since:
                        state["flow_since"] = now
                        continue
                    if now - since < _LOGIN_FLOW_STALE_AFTER:
                        continue
                else:
                    state.pop("flow_since", None)

                # Primary recovery: restore the machine's valid credential and
                # relaunch. No OAuth, no browser, no clicks — a stranded /login
                # clears itself within ~15s.
                state["last_action"] = now
                state.pop("flow_since", None)
                llog.warning("Auto-fixing login for '%s' (%s)", name,
                             "stale login prompt" if login_flow_open else "login required")
                res = await _auto_fix_login(name)
                if res.get("ok"):
                    llog.warning("Session '%s' logged back in automatically (via %s)",
                                 name, res.get("via"))
                    continue
                llog.warning("Auto-fix for '%s' failed: %s", name, res.get("error"))

                # Optional fallback: drive the OAuth consent in the signed-in
                # browser. Off by default — claude.ai blocks it.
                if AUTO_AUTH_ENABLED and _pick_login_browser():
                    res = await _auto_auth_session(name, reason="watchdog")
                    llog.warning("Auto-auth for '%s': %s", name,
                                 "ok" if res.get("ok") else res.get("error"))
                continue
                try:
                    await asyncio.to_thread(
                        subprocess.run,
                        ["tmux", "send-keys", "-t", name, "/login", "Enter"],
                        capture_output=True, text=True, timeout=5,
                    )
                    state["last_action"] = now
                    llog.warning("Auto-ran /login in '%s' (login-required detected)", name)
                except Exception as e:
                    llog.debug("login watchdog send failed for '%s': %s", name, e)
        except asyncio.CancelledError:
            llog.info("Login watchdog cancelled")
            raise
        except Exception:
            logger.debug("Login watchdog iteration failed", exc_info=True)


# --- Crash-recovery watchdog: relaunch Codex when a session OOM/crashes to a shell ---
# When Codex exhausts the V8 heap it prints "Aborted" (SIGABRT) — or the OS
# OOM killer prints "Killed", or V8 prints "JavaScript heap out of memory" — and
# the tmux pane drops back to the parent bash. At that point nothing on screen is
# a live Codex prompt, so the auto-responder and simple-watchdog can't help: the
# session just sits dead at a shell forever (the exact "stuck" symptom reported).
# This loop detects that state and relaunches Codex, resuming the crashed
# conversation so the task continues where it left off.

_CRASH_RECOVERY_INTERVAL = 20          # poll every 20s
_CRASH_RECOVERY_COOLDOWN = 120         # min seconds between restart attempts per session
_CRASH_RECOVERY_MAX_ATTEMPTS = 3       # give up after this many consecutive failed restarts
_CRASH_RECOVERY_MAX_TRANSCRIPT = 60_000_000   # don't scan transcripts larger than this (bytes)
_crash_recovery_state: dict[str, dict] = {}
_seen_claude_running: set = set()       # sessions observed running Codex this process

# Crash signatures that mean Codex (node) died and the pane fell back to a shell.
# Only ever evaluated once the pane is already a bare shell, so false positives are
# very unlikely. libc/kernel messages are matched as exact-case substrings (NOT
# anchored to line-end) because on an OOM the "Aborted" is printed OVER leftover
# TUI text — e.g. it lands mid-line as "Abortedn GRPO…" when Codex's alternate
# screen wasn't cleared. Case-sensitivity still avoids matching a lowercase
# "aborted"/"killed" sitting in prose above the shell.
_CRASH_SIGNATURE_RE = re.compile(
    r"Aborted|Killed|Segmentation fault|Bus error|"
    r"Trace/breakpoint trap|Floating point exception|core dumped"
)
# V8 / out-of-memory death throes (case-insensitive).
_CRASH_OOM_RE = re.compile(
    r"JavaScript heap out of memory|Reached heap limit"
    r"|FATAL ERROR:[^\n]*(?:heap|memory|allocation)"
    r"|<--- Last few GCs --->|out of memory",
    re.I,
)


# Codex also dies *before* the TUI ever draws: a config.toml Codex refuses to
# load, a rejected credential, an unknown CLI flag. None of those print an
# OOM/SIGABRT signature, so the two matchers above never fired and the pane sat
# at a bare shell until a human noticed — the "logged out into the terminal"
# report. These are the startup failures worth recovering from.
_CODEX_START_FAILURE_RE = re.compile(
    r"failed to load configuration"
    r"|error loading config\.toml"
    r"|invalid transport"
    r"|unexpected argument|unknown option|unrecognized option"
    r"|codex: command not found|command not found: codex"
    r"|not logged in|please run\s+`?codex login`?|run `?codex login`?"
    r"|401 unauthorized|invalid_grant|missing required tokens",
    re.I,
)

# The dashboard's own launch line, as it stays in the pane's scrollback. Seeing
# it while no Codex process is alive and the pane is a bare shell means the
# launch we issued did not survive, whatever the reason.
_CODEX_LAUNCH_LINE_RE = re.compile(
    r"CODEX_HOME=\S+[^\n]*\bcodex\b|systemd-run[^\n]*--unit=codex-"
)


def _looks_like_crash(text: str) -> bool:
    """True if recent pane output shows a process-death signature (OOM/SIGABRT/etc.)."""
    return bool(_CRASH_SIGNATURE_RE.search(text) or _CRASH_OOM_RE.search(text))


def _looks_like_codex_start_failure(text: str) -> bool:
    """True if Codex refused to start (bad config, bad credential, bad flag)."""
    return bool(_CODEX_START_FAILURE_RE.search(text or ""))


def _codex_launch_was_attempted(text: str) -> bool:
    """True if the pane's scrollback still shows a dashboard Codex launch."""
    return bool(_CODEX_LAUNCH_LINE_RE.search(text or ""))


def _codex_is_down_recoverably(text: str) -> bool:
    """Decide whether a bare-shell pane is a dead Codex we should relaunch.

    Only ever consulted once the pane is already a shell with no live Codex
    descendant. Any one of three signals is enough: a process-death signature, a
    startup failure, or our own launch line sitting in the scrollback.
    """
    return (
        _looks_like_crash(text)
        or _looks_like_codex_start_failure(text)
        or _codex_launch_was_attempted(text)
    )


# --- Codex health alerts -----------------------------------------------------
# The watchdog below repairs sessions on its own, but a repair that keeps
# happening is a fault someone has to see.
#
# The file on disk is the single source of truth, not a module global: the
# watchdog runs in the controller process while the API is served by separate
# uvicorn workers (see PROCESS_ROLE), so an in-memory list would leave the
# endpoint reporting zero alerts while the controller was raising them. Alerts
# are rare enough that read-modify-write per alert costs nothing.
CODEX_ALERTS_FILE = MESSAGES_DIR / "codex-alerts.json"
_CODEX_ALERT_MAX = 200
_CODEX_ALERT_REPEAT_WINDOW = 900   # fold repeats of the same fault into one row
_codex_alerts_lock = threading.Lock()


def _read_codex_alerts_locked() -> tuple[list[dict], dict]:
    """Return (alerts, auth-state) from disk. Tolerates the legacy bare list."""
    try:
        data = json.loads(CODEX_ALERTS_FILE.read_text())
    except Exception:
        return [], {}
    if isinstance(data, list):
        return [row for row in data if isinstance(row, dict)], {}
    if isinstance(data, dict):
        rows = data.get("alerts")
        auth = data.get("auth")
        return (
            [row for row in rows if isinstance(row, dict)] if isinstance(rows, list) else [],
            auth if isinstance(auth, dict) else {},
        )
    return [], {}


def _write_codex_alerts_locked(rows: list[dict], auth: dict | None = None):
    try:
        MESSAGES_DIR.mkdir(parents=True, exist_ok=True)
        payload = {"alerts": rows[-_CODEX_ALERT_MAX:]}
        payload["auth"] = auth if auth is not None else _read_codex_alerts_locked()[1]
        _atomic_write_json(CODEX_ALERTS_FILE, payload)
    except Exception:
        logger.debug("Failed to persist Codex alerts", exc_info=True)


def _record_codex_alert(
    session_name: str,
    kind: str,
    detail: str,
    *,
    username: str = "",
    resolved: bool = False,
) -> dict:
    """Record (or fold into) one Codex health alert and log it loudly."""
    now = time.time()
    detail = (detail or "").strip()[:400]
    with _codex_alerts_lock:
        rows, auth = _read_codex_alerts_locked()
        for row in reversed(rows):
            if (
                row.get("session_name") == session_name
                and row.get("kind") == kind
                and not row.get("resolved")
                and now - float(row.get("last_ts") or 0) < _CODEX_ALERT_REPEAT_WINDOW
            ):
                row["count"] = int(row.get("count") or 1) + 1
                row["last_ts"] = now
                if detail:
                    row["detail"] = detail
                _write_codex_alerts_locked(rows, auth)
                return dict(row)
        entry = {
            "id": secrets.token_hex(8),
            "session_name": session_name,
            "username": username,
            "kind": kind,
            "detail": detail,
            "count": 1,
            "first_ts": now,
            "last_ts": now,
            "resolved": bool(resolved),
            "resolved_ts": now if resolved else 0,
        }
        rows.append(entry)
        _write_codex_alerts_locked(rows, auth)
    logging.getLogger("codex-health").error(
        "ALERT %s in '%s'%s: %s",
        kind, session_name, f" ({username})" if username else "", detail,
    )
    return dict(entry)


def _resolve_codex_alerts(session_name: str, note: str = ""):
    """Mark a session's open alerts resolved once Codex is healthy again."""
    with _codex_alerts_lock:
        rows, auth = _read_codex_alerts_locked()
        changed = False
        for row in rows:
            if row.get("session_name") == session_name and not row.get("resolved"):
                row["resolved"] = True
                row["resolved_ts"] = time.time()
                if note:
                    row["resolution"] = note[:200]
                changed = True
        if changed:
            _write_codex_alerts_locked(rows, auth)


def _publish_codex_auth_state(auth: dict):
    """Share the watchdog's credential verdict with the API workers."""
    with _codex_alerts_lock:
        rows, _ = _read_codex_alerts_locked()
        _write_codex_alerts_locked(rows, dict(auth))


def _codex_alerts_snapshot(include_resolved: bool = True) -> tuple[list[dict], dict]:
    with _codex_alerts_lock:
        rows, auth = _read_codex_alerts_locked()
    if not include_resolved:
        rows = [row for row in rows if not row.get("resolved")]
    rows.sort(key=lambda row: float(row.get("last_ts") or 0), reverse=True)
    return rows, auth


def _username_for_session(session_name: str) -> str:
    try:
        owner = _user_for_session(session_name)
        return str(owner.get("username") or "") if owner else ""
    except Exception:
        return ""


def _codex_failure_excerpt(text: str, max_chars: int = 300) -> str:
    """The lines from a dead pane that say *why* Codex is not running.

    Prefers the error lines themselves; falls back to the last real output
    above the shell prompt so an alert is never empty.
    """
    lines = [line.rstrip() for line in (text or "").split("\n")]
    picked: list[str] = []
    for index, line in enumerate(lines):
        if not line.strip() or _SHELL_PROMPT_RE.search(line):
            continue
        if _CODEX_START_FAILURE_RE.search(line) or _CRASH_SIGNATURE_RE.search(line):
            for follow in lines[index:index + 3]:
                follow = follow.strip()
                if follow and follow not in picked and not _SHELL_PROMPT_RE.search(follow):
                    picked.append(follow)
    if not picked:
        for line in reversed(lines):
            stripped = line.strip()
            if not stripped or _SHELL_PROMPT_RE.search(line):
                continue
            picked.append(stripped)
            if len(picked) >= 2:
                break
        picked.reverse()
    return " / ".join(picked)[:max_chars]


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

# A user@host:path$ / # / % prompt line. Group 1 = anything typed after it.
_SHELL_PROMPT_RE = re.compile(r"[\w.\-]+@[\w.\-]+:[^\n]*[$#%>]\s*([^\n]*)$")


def _looks_like_bare_shell(visible: str) -> bool:
    """True if the LAST non-empty line looks like a bash/zsh prompt (no Codex TUI)."""
    for line in reversed(visible.split("\n")):
        if not line.strip():
            continue
        return bool(_SHELL_PROMPT_RE.search(line.rstrip()))
    return False


def _pane_is_recoverable_shell(text: str) -> bool:
    """Whether a pane with no live Codex is one we may relaunch into.

    Both watchdogs share this so they cannot drift apart. Three conditions, and
    all of them matter:

    1. The pane really is a shell — a prompt, or a bash `>` continuation. Codex
       takes a moment to appear in the process tree after launch, so "no codex
       process" alone would let a poll fire *into a starting session* and type a
       second launch line into the TUI.
    2. Codex died rather than never having been started here: a crash
       signature, a startup failure, or our own launch line in the scrollback.
    3. Nothing half-typed on the prompt line that a relaunch would clobber.
    """
    if not (text or "").strip():
        return False
    if not (_looks_like_bare_shell(text) or _looks_like_stuck_shell(text)):
        return False
    if not _codex_is_down_recoverably(text):
        return False
    return not _shell_has_pending_input(text)


# bash's secondary prompts. A pane sitting on one of these is a shell waiting
# for the rest of an unterminated command — it happens when a user pastes a
# prompt containing a quote into a pane that has already dropped out of Codex.
# It is still a dead session, but `_looks_like_bare_shell` cannot see it because
# there is no user@host on the line.
_SHELL_CONTINUATION_RE = re.compile(r"^\s*(?:>|dquote>|quote>|bquote>|cmdsubst>)\s*$")


def _looks_like_stuck_shell(visible: str) -> bool:
    """True if the pane's last line is a bash continuation prompt."""
    for line in reversed((visible or "").split("\n")):
        if not line.strip():
            continue
        return bool(_SHELL_CONTINUATION_RE.match(line.rstrip()))
    return False


def _shell_has_pending_input(visible: str) -> bool:
    """True if the user seems to have typed a command at the shell prompt that a
    relaunch would clobber. An empty prompt → safe to relaunch."""
    for line in reversed(visible.split("\n")):
        if not line.strip():
            continue
        m = _SHELL_PROMPT_RE.search(line.rstrip())
        if not m:
            return False  # last line is command output, not a typed-at prompt
        return bool(m.group(1).strip())
    return False


def _project_dir_for_cwd(cwd: str) -> Path | None:
    """Map a working directory to its ~/.claude/projects/<encoded> transcript dir.
    Claude encodes the path by replacing '/', '_' and '.' with '-'."""
    base = Path.home() / ".claude" / "projects"
    enc = re.sub(r"[/_.]", "-", cwd.rstrip("/"))
    cand = base / enc
    if cand.is_dir():
        return cand
    try:
        leaf = re.sub(r"[/_.]", "-", cwd.rstrip("/").split("/")[-1])
        for d in sorted(base.glob("*" + leaf)):
            if d.is_dir():
                return d
    except Exception:
        pass
    return None


def _find_session_transcript_uuid(session_name: str) -> str | None:
    """Codex recovery uses `resume --last`; no Claude transcript UUID lookup."""
    return None


async def _crash_recovery_loop():
    """Relaunch Codex in sessions that have crashed/OOM'd to a bare shell."""
    rlog = logging.getLogger("crash-recovery")
    await asyncio.sleep(12)  # let startup settle
    while True:
        try:
            await asyncio.sleep(_CRASH_RECOVERY_INTERVAL)
            sessions_list = await asyncio.to_thread(get_tmux_sessions)
            now = time.time()
            owners = _load_session_owners()
            for sess in sessions_list:
                name = sess["name"]
                if _session_lifecycle.get(name).get("parked"):
                    continue
                if await _async_is_claude_running(name):
                    _seen_claude_running.add(name)
                    st = _crash_recovery_state.get(name)
                    if st:
                        st["attempts"] = 0
                        st["gave_up"] = False
                    continue
                # Pane is a bare shell. Only touch sessions we manage / have seen run Codex.
                if name not in owners and name not in _seen_claude_running:
                    continue
                state = _crash_recovery_state.setdefault(name, {"attempts": 0, "last_action": 0})
                if now - state.get("last_action", 0) < _CRASH_RECOVERY_COOLDOWN:
                    continue
                try:
                    recent = await asyncio.to_thread(capture_pane_recent, name, 80)
                except Exception:
                    continue
                # Only recover a Codex that really died — never hijack a shell
                # someone opened on purpose, and never fire into a session that
                # is still starting up.
                if not _pane_is_recoverable_shell(recent):
                    continue
                start_failure = _looks_like_codex_start_failure(recent)
                if state.get("attempts", 0) >= _CRASH_RECOVERY_MAX_ATTEMPTS:
                    if not state.get("gave_up"):
                        rlog.error("Crash recovery giving up on '%s' after %d attempts — "
                                   "manual restart needed", name, state["attempts"])
                        state["gave_up"] = True
                        _record_codex_alert(
                            name,
                            "relaunch-failed",
                            "Codex would not stay up after "
                            f"{state['attempts']} relaunch attempts. Last pane output: "
                            + _codex_failure_excerpt(recent),
                            username=_username_for_session(name),
                        )
                    continue
                state["attempts"] = state.get("attempts", 0) + 1
                state["last_action"] = now
                reason = (
                    "crashed"
                    if _looks_like_crash(recent)
                    else "failed to start" if start_failure
                    else "exited"
                )
                rlog.warning("Session '%s' %s to shell — resuming Codex, attempt %d/%d",
                             name, reason,
                             state["attempts"], _CRASH_RECOVERY_MAX_ATTEMPTS)
                if start_failure:
                    _record_codex_alert(
                        name,
                        "codex-start-failure",
                        _codex_failure_excerpt(recent),
                        username=_username_for_session(name),
                    )
                ok = await _ensure_codex_running(name)
                if ok:
                    _seen_claude_running.add(name)
                    _crash_recovery_state[name] = {"attempts": 0, "last_action": now, "gave_up": False}
                    _resolve_codex_alerts(name, "relaunched by crash recovery")
                    rlog.info("Recovered '%s' — Codex is running again", name)
        except asyncio.CancelledError:
            rlog.info("Crash recovery cancelled")
            raise
        except Exception:
            logger.debug("Crash recovery iteration failed", exc_info=True)


# --- Codex health watchdog: alert, repair the login, relaunch ----------------
# Crash recovery watches one pane at a time and needs a death signature. This
# loop watches the fleet and the *credential*. When the shared ChatGPT login
# stops working every account goes down together and each pane quietly falls
# back to its login shell, which is what users report as "logged out of Codex,
# left in a terminal". It raises an alert for anything it finds, repairs the
# credential when that is the fault, and types the correct relaunch command
# into every session still sitting at a shell.

_CODEX_HEALTH_INTERVAL = 60        # seconds between fleet sweeps
_CODEX_HEALTH_COOLDOWN = 120       # min seconds between relaunches per session
_CODEX_AUTH_PROBE_MAX_AGE = 300    # reuse a credential verdict for this long
_CODEX_AUTH_PROBE_FLOOR = 120      # ...and never re-probe faster than this
_codex_health_state: dict[str, dict] = {}
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


async def _codex_health_watchdog_loop():
    """Alert on, and recover from, sessions that dropped out of Codex."""
    hlog = logging.getLogger("codex-health")
    await asyncio.sleep(25)  # let startup and crash recovery settle
    while True:
        try:
            await asyncio.sleep(_CODEX_HEALTH_INTERVAL)
            sessions_list = await asyncio.to_thread(get_tmux_sessions)
            owners = _load_session_owners()
            now = time.time()

            down: list[tuple[str, str]] = []
            for sess in sessions_list:
                name = sess["name"]
                if _session_lifecycle.get(name).get("parked"):
                    continue
                # Only sessions this dashboard owns or has seen running Codex.
                if name not in owners and name not in _seen_claude_running:
                    continue
                if await _async_is_codex_running(name):
                    _seen_claude_running.add(name)
                    if _codex_health_state.pop(name, None):
                        _resolve_codex_alerts(name, "Codex is running again")
                    continue
                try:
                    recent = await asyncio.to_thread(capture_pane_recent, name, 80)
                except Exception:
                    continue
                if not _pane_is_recoverable_shell(recent):
                    continue
                down.append((name, recent))

            if not down:
                continue

            # More than one account down at once points at the shared
            # credential rather than one bad session. Check the login before
            # relaunching anything, and repair it when it is the fault.
            auth = await _codex_auth_health(force=len(down) > 1)
            if not auth.get("loggedIn"):
                _record_codex_alert(
                    "*",
                    "codex-logged-out",
                    auth.get("reason") or "Codex has no usable credential",
                )
                repaired = await asyncio.to_thread(_repair_member_codex_auth)
                hlog.warning("Repaired Codex auth for %d member home(s)", repaired)
                auth = await _codex_auth_health(force=True)
                if auth.get("loggedIn"):
                    _resolve_codex_alerts("*", "credential repaired")

            for name, recent in down:
                state = _codex_health_state.setdefault(
                    name, {"attempts": 0, "last_action": 0}
                )
                # Recheck the clock: validating the credential above can take
                # seconds, and a stale `now` would shorten every cooldown.
                now = time.time()
                if now - float(state.get("last_action") or 0) < _CODEX_HEALTH_COOLDOWN:
                    continue
                # Crash recovery polls three times as often and may already be
                # relaunching this pane. Two loops typing into the same terminal
                # is worse than waiting one sweep.
                peer = _crash_recovery_state.get(name) or {}
                if now - float(peer.get("last_action") or 0) < _CODEX_HEALTH_COOLDOWN:
                    continue
                state["last_action"] = now
                state["attempts"] = int(state.get("attempts") or 0) + 1
                username = _username_for_session(name)
                _record_codex_alert(
                    name,
                    "codex-not-running",
                    _codex_failure_excerpt(recent) or "Codex exited to a shell",
                    username=username,
                )
                hlog.warning(
                    "Relaunching Codex in '%s'%s (attempt %d)",
                    name, f" for {username}" if username else "", state["attempts"],
                )
                if await _ensure_codex_running(name):
                    _seen_claude_running.add(name)
                    _codex_health_state.pop(name, None)
                    _resolve_codex_alerts(name, "relaunched by the health watchdog")
                    hlog.warning("Session '%s' is back on Codex", name)
                else:
                    _record_codex_alert(
                        name,
                        "relaunch-failed",
                        "Relaunch did not bring Codex up. Pane: "
                        + _codex_failure_excerpt(recent),
                        username=username,
                    )
        except asyncio.CancelledError:
            hlog.info("Codex health watchdog cancelled")
            raise
        except Exception:
            logger.debug("Codex health watchdog iteration failed", exc_info=True)


def _has_pending_user_input(visible: str) -> bool:
    """True if the visible pane shows the ❯ user-input box with text already typed.

    Pattern: a line like '❯ some text the user is typing'. We must NOT send
    'continue' in that case — it would concatenate or submit the user's draft.
    Empty input (just '❯' or '❯ ') is fine.
    """
    for line in visible.split("\n")[-20:]:
        m = re.search(r"❯\s+(\S.*)", line)
        if not m:
            continue
        tail = m.group(1).strip()
        # Numbered selection lines like "❯ 1. Yes" are handled by the auto-responder
        if re.match(r"^\d+\.", tail):
            continue
        # Trailing box-drawing chars are not real input
        tail = tail.rstrip("│ \t")
        if tail:
            return True
    return False


# Codex TUI markers used only by the opt-in full auto-push guard.
_CODEX_CONVERSATION_RE = re.compile(
    r"esc to interrupt|Worked for \d|tokens used|You have \d+ weighted tokens left",
    re.I,
)
_CODEX_WELCOME_RE = re.compile(r"OpenAI Codex|Codex CLI|gpt-5\.", re.I)


def _looks_like_fresh_claude_session(visible: str) -> bool:
    """True if the pane shows a brand-new Codex session that hasn't started any
    work: the welcome splash is on screen, the ❯ box is empty, and there is no
    conversation below it. Such a session has nothing to 'continue' — without this
    guard the autopilot LLM (hard-biased to keep going) fabricates a first
    instruction out of nothing and types it into an idle, untouched session."""
    if not visible:
        return False
    if not _CODEX_WELCOME_RE.search(visible):
        return False
    # Any sign a turn has happened (even one short exchange) → not fresh; the
    # watchdog should handle it normally (e.g. answer a trailing question).
    if _CODEX_CONVERSATION_RE.search(visible):
        return False
    # An empty input box confirms the user hasn't even begun a first prompt.
    return not _has_pending_user_input(visible)


@app.get("/api/sessions/{session_name}/autopush")
async def api_autopush_status(session_name: str):
    """Return the per-session auto-push mode ('off'|'basic'|'full') + recent log."""
    result = await _controller_call("watchdog_status", session=session_name)
    return JSONResponse(result, status_code=200 if result.get("ok") else 503)


class AutopushBody(BaseModel):
    mode: str


@app.post("/api/sessions/{session_name}/autopush")
async def api_autopush_set(session_name: str, body: AutopushBody):
    """Set the per-session auto-push mode.

    off   — the dashboard never types into this terminal.
    basic — auto-pick option menus + confirm permission/plan prompts + keep the
            session logged in (no free-form messages).
    full  — everything in basic, plus auto-compose a "keep going" nudge when
            Codex pauses waiting on the user before a task is finished.
    """
    mode = (body.mode or "").strip().lower()
    if mode not in AUTOPUSH_MODES:
        return JSONResponse(
            {"error": f"mode must be one of {list(AUTOPUSH_MODES)}"}, status_code=400
        )
    result = await _controller_call("autopush_set", session=session_name, mode=mode)
    status = int(result.pop("_status", 200 if result.get("ok") else 503))
    return JSONResponse(result, status_code=status)


# --- Legacy simple-watchdog endpoints. Kept for back-compat and now mapped onto
# the auto-push mode: "enabled" == full, "disabled" == basic. ---
@app.get("/api/sessions/{session_name}/simple-watchdog")
async def api_simple_watchdog_status(session_name: str):
    """Return per-session simple-watchdog state (legacy shape)."""
    result = await _controller_call("watchdog_status", session=session_name)
    result["enabled"] = result.get("mode") == "full"
    return JSONResponse(result, status_code=200 if result.get("ok") else 503)


class SimpleWatchdogBody(BaseModel):
    enabled: bool


@app.post("/api/sessions/{session_name}/simple-watchdog")
async def api_simple_watchdog_toggle(session_name: str, body: SimpleWatchdogBody):
    """Enable/disable the free-form watchdog (legacy). Maps to auto-push full/basic."""
    mode = "full" if body.enabled else "basic"
    result = await _controller_call("autopush_set", session=session_name, mode=mode)
    status = int(result.pop("_status", 200 if result.get("ok") else 503))
    return JSONResponse(result, status_code=status)


# --- Autonomous Mode Watchdog ---
# Monitors all active away-mode and go-nuts-mode sessions.
# Detects stalls (no terminal change for too long) and unsticks them.

_watchdog_snapshots: dict[str, dict] = {}
# Per-session: {"content_hash": str, "first_seen": float, "nudge_count": int, "last_nudge": float}

_WATCHDOG_INTERVAL = 30         # Check every 30 seconds
_STALL_THRESHOLD = 600          # 10 minutes of identical terminal = stalled
_NUDGE_COOLDOWN = 180           # Wait 3 minutes between nudge attempts
_MAX_NUDGES_BEFORE_RESTART = 3  # After 3 failed nudges, hard-restart the mode

_NUDGE_PROMPT = """You appear to be idle or stuck. The user is not present — you are in autonomous mode.

If you just finished a task: pick the next one and start working. Check your skill files and backlog.
If you're waiting for something: cancel the wait (Ctrl+C if needed) and move to a different task.
If you encountered an error: log it, revert if needed, and continue with the next item.

Do NOT say "standing by" or ask for instructions. Take action NOW."""




async def _restore_autonomous_mode(session_name: str, state: dict, mode: str):
    """Restore an autonomous mode after server restart: wait for session, send prompt, launch loop."""
    rlog = logging.getLogger("restore")
    rlog.info(f"Restoring {mode} mode for '{session_name}' — waiting 15s for tmux to stabilize")
    log_fn = _away_log if mode == "away" else _go_nuts_log

    try:
        # Give tmux and Codex a moment to settle after server restart
        await asyncio.sleep(15)

        if not state.get("enabled"):
            return

        # Check the session still exists
        try:
            activity = await async_detect_activity(session_name)
        except Exception:
            log_fn(state, "Session not found during restore — stopping")
            state["enabled"] = False
            _save_autonomous_state()
            return

        # Wait for session to be idle before sending prompt (max 10 min)
        if activity.get("status") == "busy":
            log_fn(state, "Session is busy — waiting for it to finish current task")
            await _away_wait_for_idle(session_name, timeout=600)

        if not state.get("enabled"):
            return

        # Ensure Codex is actually running (handles OOM/crash during server downtime)
        codex_ok = await _ensure_codex_running(session_name, log_fn, state)
        if not codex_ok:
            log_fn(state, "Could not restart Codex during restore — stopping")
            state["enabled"] = False
            _save_autonomous_state()
            return

        # Send the appropriate unstick/resume prompt (with project isolation)
        skills_dir = _SKILLS_DIR if mode == "away" else _GO_NUTS_SKILLS_DIR
        unstick_prompt = _build_project_isolation_preamble(session_name) + (_UNSTICK_PROMPT_AWAY if mode == "away" else _UNSTICK_PROMPT_GONUTS).format(skills_dir=skills_dir)
        log_fn(state, "Sending resume prompt to session")
        await _away_send_prompt(session_name, unstick_prompt)
        await asyncio.sleep(2)

        # Now enter the continuous monitoring loop
        if mode == "away":
            await _away_mode_continuous_loop(session_name)
        else:
            await _go_nuts_continuous_loop(session_name)

    except asyncio.CancelledError:
        if _shutting_down:
            log_fn(state, f"{mode} restore cancelled (server shutdown — will restore)")
        else:
            log_fn(state, f"{mode} restore cancelled")
            state["enabled"] = False
            _save_autonomous_state()
        raise
    except Exception as e:
        log_fn(state, f"{mode} restore error: {e}")
        rlog.error(f"Restore {mode} for '{session_name}' failed: {e}")
        # Don't set enabled=False — watchdog zombie detection will restart us
    finally:
        state["task"] = None


_TMP_WATCHDOG_INTERVAL = 120            # poll /tmp every 2 minutes
_TMP_WATCHDOG_WARN_PCT = 75             # start cleaning at 75% full
_TMP_WATCHDOG_CRITICAL_PCT = 90         # aggressive clean at 90% full
_TMP_WATCHDOG_SAFE_AGE_NORMAL = 3600    # delete files older than 1h at warn level
_TMP_WATCHDOG_SAFE_AGE_CRITICAL = 600   # delete files older than 10m at critical
_TMP_WATCHDOG_PROTECTED_PREFIXES = (
    ".",                # .X11-unix, .ICE-unix, dotfiles
    "codex-",          # active Codex CLI cache
    "tsx-",             # active tsx cache
    "tmux-",            # tmux server sockets
    "systemd-",         # systemd runtime
    "snap-",            # snap runtime
    "node-compile-cache",
    "data-gym-cache",   # tiktoken cache (recreated on demand but expensive)
    "vscode-",
)


async def _tmp_watchdog_loop():
    """Background watchdog: prevents /tmp from filling up.

    When /tmp is a tmpfs (RAM-backed), filling it breaks bash commands and
    any tool that writes temp files. This loop monitors usage and prunes
    stale files before that happens.
    """
    tlog = logging.getLogger("tmp_watchdog")
    tlog.info("Tmp watchdog started — interval=%ds warn=%d%% critical=%d%%",
              _TMP_WATCHDOG_INTERVAL, _TMP_WATCHDOG_WARN_PCT, _TMP_WATCHDOG_CRITICAL_PCT)
    while True:
        try:
            await asyncio.sleep(_TMP_WATCHDOG_INTERVAL)
            await asyncio.to_thread(_tmp_watchdog_check, tlog)
        except asyncio.CancelledError:
            tlog.info("Tmp watchdog cancelled")
            raise
        except Exception as e:
            tlog.error(f"Tmp watchdog loop error: {e}")
            await asyncio.sleep(60)


def _tmp_watchdog_check(tlog: logging.Logger) -> None:
    """One iteration: check /tmp usage and clean if needed. Runs in a thread."""
    try:
        usage = shutil.disk_usage("/tmp")
    except OSError as e:
        tlog.error(f"shutil.disk_usage('/tmp') failed: {e}")
        return
    pct = (usage.used / usage.total) * 100 if usage.total else 0
    if pct < _TMP_WATCHDOG_WARN_PCT:
        return  # plenty of room

    if pct >= _TMP_WATCHDOG_CRITICAL_PCT:
        max_age = _TMP_WATCHDOG_SAFE_AGE_CRITICAL
        level = "CRITICAL"
    else:
        max_age = _TMP_WATCHDOG_SAFE_AGE_NORMAL
        level = "WARN"

    tlog.warning("/tmp at %.1f%% (%s) — pruning entries older than %ds",
                 pct, level, max_age)
    deleted, freed = _tmp_watchdog_prune(max_age, tlog)
    try:
        new_usage = shutil.disk_usage("/tmp")
        new_pct = (new_usage.used / new_usage.total) * 100 if new_usage.total else 0
    except OSError:
        new_pct = pct
    tlog.warning("/tmp cleanup done — removed %d entries (~%d KB freed), now %.1f%% used",
                 deleted, freed // 1024, new_pct)


def _tmp_watchdog_prune(max_age_secs: int, tlog: logging.Logger) -> tuple[int, int]:
    """Delete files/dirs in /tmp older than max_age_secs. Returns (count, bytes_freed).

    Skips any entry whose name starts with a protected prefix (system sockets,
    active CLI caches). Also skips entries owned by other users.
    """
    deleted = 0
    freed = 0
    now = time.time()
    my_uid = os.getuid()
    try:
        entries = list(os.scandir("/tmp"))
    except OSError as e:
        tlog.error(f"scandir /tmp failed: {e}")
        return (0, 0)
    for entry in entries:
        name = entry.name
        if any(name.startswith(p) for p in _TMP_WATCHDOG_PROTECTED_PREFIXES):
            continue
        try:
            st = entry.stat(follow_symlinks=False)
        except OSError:
            continue
        if st.st_uid != my_uid:
            continue  # don't touch other users' files
        age = now - st.st_mtime
        if age < max_age_secs:
            continue
        size = _tmp_watchdog_size(entry.path) if entry.is_dir(follow_symlinks=False) else st.st_size
        try:
            if entry.is_dir(follow_symlinks=False):
                shutil.rmtree(entry.path, ignore_errors=True)
            else:
                os.unlink(entry.path)
            deleted += 1
            freed += size
        except OSError as e:
            tlog.warning(f"Failed to delete {entry.path}: {e}")
    return (deleted, freed)


def _tmp_watchdog_size(path: str) -> int:
    """Recursive size of a directory in bytes. Best-effort, ignores errors."""
    total = 0
    for root, _dirs, files in os.walk(path, onerror=lambda _: None):
        for f in files:
            try:
                total += os.lstat(os.path.join(root, f)).st_size
            except OSError:
                pass
    return total


async def _watchdog_loop():
    """Background watchdog: detects stalled autonomous sessions and unsticks them."""
    wlog = logging.getLogger("watchdog")
    wlog.info("Autonomous mode watchdog started")
    while True:
        try:
            await asyncio.sleep(_WATCHDOG_INTERVAL)
            # Collect all active autonomous sessions
            active_sessions: list[tuple[str, dict, str]] = []  # (name, state, mode)
            for name, state in _away_mode_state.items():
                if state.get("enabled") and state.get("task") and not state["task"].done():
                    active_sessions.append((name, state, "away"))
            for name, state in _go_nuts_state.items():
                if state.get("enabled") and state.get("task") and not state["task"].done():
                    active_sessions.append((name, state, "gonuts"))

            if not active_sessions:
                if _watchdog_snapshots:
                    _watchdog_snapshots.clear()
                continue

            for session_name, state, mode in active_sessions:
                try:
                    await _watchdog_check_session(session_name, state, mode, wlog)
                except asyncio.CancelledError:
                    raise
                except Exception as e:
                    wlog.error(f"Watchdog error checking '{session_name}': {e}")

            # Also check for zombie states: enabled=True but task is dead
            for name, state in list(_away_mode_state.items()):
                if state.get("enabled") and (not state.get("task") or state["task"].done()):
                    wlog.warning(f"Away mode zombie detected for '{name}' — restarting worker")
                    await _watchdog_restart_mode(name, state, "away", wlog)
            for name, state in list(_go_nuts_state.items()):
                if state.get("enabled") and (not state.get("task") or state["task"].done()):
                    wlog.warning(f"Go Nuts mode zombie detected for '{name}' — restarting worker")
                    await _watchdog_restart_mode(name, state, "gonuts", wlog)

        except asyncio.CancelledError:
            wlog.info("Watchdog cancelled")
            raise
        except Exception as e:
            wlog.error(f"Watchdog loop error: {e}")
            await asyncio.sleep(60)


async def _watchdog_check_session(session_name: str, state: dict, mode: str, wlog):
    """Check a single session for stalls."""
    import hashlib
    now = time.time()

    # Capture recent terminal content (non-blocking)
    recent = await asyncio.to_thread(capture_pane_recent, session_name, 50)
    if not recent.strip():
        return  # Empty pane, can't assess

    content_hash = hashlib.md5(recent.encode()).hexdigest()
    snap = _watchdog_snapshots.get(session_name)

    if snap is None or snap["content_hash"] != content_hash:
        # Terminal content changed — session is making progress
        _watchdog_snapshots[session_name] = {
            "content_hash": content_hash,
            "first_seen": now,
            "nudge_count": 0,
            "last_nudge": 0,
        }
        return

    # Terminal content is UNCHANGED since last check
    stall_duration = now - snap["first_seen"]

    if stall_duration < _STALL_THRESHOLD:
        return  # Not stalled yet — could be processing

    # Terminal has been identical for >10 minutes. Check if there's a good reason.
    log_fn = _away_log if mode == "away" else _go_nuts_log

    # Check if Codex has crashed (OOM, etc) — if so, restart immediately
    if not await _async_is_codex_running(session_name):
        wlog.warning(f"Codex not running in '{session_name}' — OOM/crash detected, restarting")
        log_fn(state, "Watchdog: Codex crashed (OOM?) — restarting")
        _watchdog_snapshots.pop(session_name, None)
        await _watchdog_restart_mode(session_name, state, mode, wlog)
        return

    # First stall detection — use LLM to check if it's a legitimate long operation
    if snap["nudge_count"] == 0 and snap["last_nudge"] == 0:
        wlog.info(f"Potential stall detected for '{session_name}' ({mode}) — {stall_duration:.0f}s unchanged")
        try:
            assessment = await llm_call(
                system_prompt=(
                    "You are monitoring an autonomous AI coding session. The terminal output has not changed "
                    "for over 10 minutes. Assess whether this is:\n"
                    "1. LEGITIMATE: downloading large files, compiling a big project, running extensive tests, "
                    "waiting for a deployment, or any operation that genuinely takes >10 minutes\n"
                    "2. STUCK: the agent said 'standing by', asked a question, hit an error and stopped, "
                    "is waiting for user input, or simply finished and didn't continue\n\n"
                    "Reply with ONLY one word: LEGITIMATE or STUCK"
                ),
                user_content=f"Terminal output (last 50 lines):\n{recent[-3000:]}",
                max_tokens=10,
            )
            assessment = assessment.strip().upper()
        except Exception:
            assessment = "STUCK"  # If we can't assess, assume stuck

        if "LEGITIMATE" in assessment:
            wlog.info(f"Session '{session_name}' stall assessed as LEGITIMATE — skipping for now")
            log_fn(state, f"Watchdog: stall detected ({stall_duration:.0f}s) but appears legitimate — waiting")
            # Push out the first_seen so we re-check in another 10 minutes
            snap["first_seen"] = now - _STALL_THRESHOLD + 300  # Re-check in 5 min
            return

        wlog.info(f"Session '{session_name}' assessed as STUCK — will nudge")

    # Session is stuck. Try nudging.
    if now - snap["last_nudge"] < _NUDGE_COOLDOWN:
        return  # Wait for cooldown between nudges

    if snap["nudge_count"] < _MAX_NUDGES_BEFORE_RESTART:
        # Gentle nudge: send continuation prompt
        snap["nudge_count"] += 1
        snap["last_nudge"] = now
        log_fn(state, f"Watchdog: nudge #{snap['nudge_count']} — sending continuation prompt")
        wlog.info(f"Nudging '{session_name}' (attempt {snap['nudge_count']}/{_MAX_NUDGES_BEFORE_RESTART})")

        # Ensure Codex is running before nudging
        if not await _async_is_codex_running(session_name):
            wlog.warning(f"Codex not running in '{session_name}' during nudge — restarting mode")
            log_fn(state, "Watchdog: Codex not running during nudge — restarting")
            _watchdog_snapshots.pop(session_name, None)
            await _watchdog_restart_mode(session_name, state, mode, wlog)
            return

        # If session appears to be waiting for input or truly idle, just send the nudge
        try:
            activity = await async_detect_activity(session_name)
        except Exception:
            activity = {"status": "unknown"}

        if activity["status"] == "busy":
            # Session claims busy but terminal hasn't changed — might be truly stuck
            # Send Ctrl+C first to break out of whatever it's doing
            log_fn(state, "Watchdog: session reports busy but no terminal change — sending Ctrl+C")
            await asyncio.to_thread(subprocess.run, ["tmux", "send-keys", "-t", session_name, "C-c"], timeout=3, capture_output=True)
            await asyncio.sleep(5)

        await _away_send_prompt(session_name, _build_project_isolation_preamble(session_name) + _NUDGE_PROMPT)
        return

    # Nudges exhausted — hard restart
    log_fn(state, f"Watchdog: {_MAX_NUDGES_BEFORE_RESTART} nudges failed — restarting {mode} mode")
    wlog.warning(f"Restarting {mode} mode for '{session_name}' after {snap['nudge_count']} failed nudges")
    await _watchdog_restart_mode(session_name, state, mode, wlog)
    # Reset snapshot
    _watchdog_snapshots.pop(session_name, None)


async def _watchdog_restart_mode(session_name: str, state: dict, mode: str, wlog):
    """Gracefully restart an autonomous mode session, preserving history."""
    log_fn = _away_log if mode == "away" else _go_nuts_log

    # 1. Cancel existing task
    old_task = state.get("task")
    if old_task and not old_task.done():
        old_task.cancel()
        try:
            await asyncio.wait_for(asyncio.shield(old_task), timeout=5)
        except (asyncio.CancelledError, asyncio.TimeoutError, Exception):
            pass

    # 2. Send Ctrl+C to break any stuck process in the terminal
    try:
        await asyncio.to_thread(subprocess.run, ["tmux", "send-keys", "-t", session_name, "C-c"], timeout=3, capture_output=True)
        await asyncio.sleep(3)
        await asyncio.to_thread(subprocess.run, ["tmux", "send-keys", "-t", session_name, "C-c"], timeout=3, capture_output=True)
        await asyncio.sleep(2)
    except Exception:
        pass

    # 2b. Ensure Codex is actually running (handles OOM/crash recovery)
    codex_ok = await _ensure_codex_running(session_name, log_fn, state)
    if not codex_ok:
        log_fn(state, "Watchdog: could not restart Codex — aborting restart")
        state["enabled"] = False
        _save_autonomous_state()
        return

    # 3. Preserve the log history, reset state for fresh loop
    old_log = state.get("log", [])
    old_started = state.get("started_at", time.time())
    old_step = state.get("step", 0)

    log_fn(state, "Watchdog: restarting mode — skipping initial phases, jumping to continuous loop")

    # 4. Re-initialize state
    state.update({
        "enabled": True,
        "phase": 4,
        "phase_name": "Continuous (restarted)" if mode == "away" else "Continuous Build (restarted)",
        "step": old_step,
        "step_name": "Watchdog restart",
        "started_at": old_started,  # Keep original start time
        "log": old_log,  # Keep full log history
        "task": None,
    })
    _save_autonomous_state()

    # 5. Send an unstick prompt directly instead of re-running initial phases (with project isolation)
    skills_dir = _SKILLS_DIR if mode == "away" else _GO_NUTS_SKILLS_DIR
    unstick_prompt = _build_project_isolation_preamble(session_name) + (_UNSTICK_PROMPT_AWAY if mode == "away" else _UNSTICK_PROMPT_GONUTS).format(skills_dir=skills_dir)

    await _away_send_prompt(session_name, unstick_prompt)
    await asyncio.sleep(2)

    # 6. Launch fresh worker that skips to continuous loop
    if mode == "away":
        task = asyncio.create_task(_away_mode_continuous_loop(session_name))
        state["task"] = task
    else:
        task = asyncio.create_task(_go_nuts_continuous_loop(session_name))
        state["task"] = task

    wlog.info(f"Restarted {mode} mode for '{session_name}' — continuous loop relaunched")






# --- Away Mode ---
# Autonomous mode: sends structured prompts to a Codex session,
# waits for idle, captures output, summarizes, advances to next phase.









def _build_project_isolation_preamble(session_name: str) -> str:
    """Build a preamble that anchors the autonomous mode to the correct project."""
    cwd = get_session_cwd(session_name)
    return f"""PROJECT ISOLATION — READ THIS FIRST:
You are working in tmux session "{session_name}".
Your project directory is: {cwd or '(unknown — run pwd to confirm)'}

STRICT RULES:
- ONLY modify files inside your project directory ({cwd or 'current working directory'}).
- NEVER cd into, read from, or write to other project directories on this server.
- NEVER modify files under /var/www/, /opt/, or ~/  that belong to other projects.
- Write all reports and temp files to /tmp/ using your session name as prefix: /tmp/{session_name}-*.md
- Do NOT write to generic paths like /tmp/away-mode-*.md or /tmp/go-nuts-*.md — always include the session name.
- If you need to check infrastructure context, read ~/.codex/vm_projects_dir.md (read-only, never modify during autonomous mode).
- If a skill or task does not apply to THIS project, skip it entirely.
- Do NOT restart, modify configs for, or interact with services belonging to other projects.

"""


# Wire services/autonomous.py once every helper it drives exists. These are the
# deep session-control entry points (resume, capture, activity detection, the
# LLM call); passing them keeps the service a leaf.
autonomous_service.configure(
    _build_project_isolation_preamble=_build_project_isolation_preamble,
    _ensure_codex_running=_ensure_codex_running,
    _find_session=_find_session,
    _resume_parked_session=_resume_parked_session,
    _save_autonomous_state=_save_autonomous_state,
    async_detect_activity=async_detect_activity,
    capture_pane_full=capture_pane_full,
    capture_pane_recent=capture_pane_recent,
    llm_call=llm_call,
    is_shutting_down=lambda: _shutting_down,
)






















@app.post("/api/sessions/{session_name}/away-mode")
async def api_away_mode_toggle(session_name: str, body: AwayModeBody):
    """Toggle controller-owned away mode on or off for a session."""
    result = await _controller_call(
        "away_toggle", session=session_name, enabled=body.enabled
    )
    status = int(result.pop("_status", 200 if result.get("ok") else 503))
    return JSONResponse(result, status_code=status)


@app.get("/api/sessions/{session_name}/away-mode")
async def api_away_mode_status(session_name: str):
    """Get current away-mode state for a session."""
    result = await _controller_call("away_status", session=session_name)
    return JSONResponse(result, status_code=200 if result.get("ok") else 503)


# --- Go Nuts Mode ---
# Autonomous feature-building mode: discovers the project, generates a feature backlog,
# then continuously builds features, tests, and improves the project in a loop.








# --- Go Nuts Phase Prompts ---
















@app.post("/api/sessions/{session_name}/go-nuts-mode")
async def api_go_nuts_mode_toggle(session_name: str, body: GoNutsModeBody):
    """Toggle controller-owned go-nuts mode on or off for a session."""
    result = await _controller_call(
        "go_nuts_toggle", session=session_name, enabled=body.enabled
    )
    status = int(result.pop("_status", 200 if result.get("ok") else 503))
    return JSONResponse(result, status_code=status)


@app.get("/api/sessions/{session_name}/go-nuts-mode")
async def api_go_nuts_mode_status(session_name: str):
    """Get current go-nuts-mode state for a session."""
    result = await _controller_call("go_nuts_status", session=session_name)
    return JSONResponse(result, status_code=200 if result.get("ok") else 503)


# The dashboard page is a 7,790-line static document with placeholder
# substitution, not an f-string: it lives in templates/dashboard.html and is
# read once at import. The __ROOT_PATH__ / __BRAND__ replacements below are
# unchanged, so the served bytes are identical to the inline version.
HTML_PAGE = (TEMPLATES_DIR / "dashboard.html").read_text()

# Inject the actual ROOT_PATH into the JS BASE variable
HTML_PAGE = HTML_PAGE.replace("__ROOT_PATH__", ROOT_PATH)
HTML_PAGE = HTML_PAGE.replace("__BRAND__", BRAND_NAME)
LOGIN_PAGE = LOGIN_PAGE.replace("__ROOT_PATH__", ROOT_PATH) if "__ROOT_PATH__" in LOGIN_PAGE else LOGIN_PAGE
LOGIN_PAGE = LOGIN_PAGE.replace("__BRAND__", BRAND_NAME)
_GOOGLE_BTN_HTML = _GOOGLE_BTN_HTML.replace("__ROOT_PATH__", ROOT_PATH)


# ===========================================================================
# Catch-all routes for authenticated projects + per-user project lists. Registered
# LAST so every literal/api route takes precedence over these path params.
# ===========================================================================
_PROJECTS_PAGE_CSS = (
    "body{font-family:-apple-system,Segoe UI,Roboto,sans-serif;background:#0d1117;color:#e6edf3;"
    "max-width:820px;margin:40px auto;padding:0 20px}a{color:#58a6ff;text-decoration:none}"
    "a:hover{text-decoration:underline}h1{font-size:1.3rem}.muted{color:#8b949e;font-size:.85rem}"
    "li{margin:7px 0;list-style:none}ul{padding:0}.grp{margin-top:18px;color:#79c0ff;font-weight:600}"
    ".card{background:#161b22;border:1px solid #30363d;border-radius:10px;padding:18px 22px;margin-top:16px}"
    ".open{font-size:.72rem;color:#8b949e;border:1px solid #30363d;border-radius:4px;padding:1px 6px;margin-left:8px}"
)


def _projects_page_html(title: str, rows):
    base = PUB_URL.rstrip("/")
    items = "".join(
        (
            '<li><a href="{href}">{label}</a> <span class="open">open ↗</span></li>'
            .format(
                href=_html_escape(
                    base + "/" + urllib.parse.quote(str(u), safe="@._-")
                    + "/" + urllib.parse.quote(str(p), safe="@._-")
                ),
                label=_html_escape(f"{base}/{u}/{p}"),
            )
        )
        for (u, p) in rows) or '<li class="muted">No projects yet. Ask Codex in a session to build something — it gets published here.</li>'
    return (f"<!doctype html><html><head><meta charset=utf-8><title>{_html_escape(title)} · {BRAND_NAME}</title>"
            "<meta name=viewport content='width=device-width,initial-scale=1'>"
            f"<style>{_PROJECTS_PAGE_CSS}</style></head><body><h1>{_html_escape(title)}</h1>"
            f"<div class=card><ul>{items}</ul></div>"
            f"<p class=muted>{BRAND_NAME} — projects are private and require dashboard sign-in.</p>"
            "</body></html>")


@app.get("/{username}", response_class=HTMLResponse)
async def user_projects_page(request: Request, username: str):
    if username in _RESERVED_TOP or "." in username:
        return HTMLResponse("Not found", status_code=404)
    target = _find_user_by_username(username)
    if not target:
        return HTMLResponse("Not found", status_code=404)
    viewer = _current_user(request)
    if not viewer:
        return HTMLResponse(LOGIN_PAGE, status_code=401)
    is_admin = _is_admin(viewer)
    if viewer.get("id") != target["id"] and not is_admin:
        return HTMLResponse("Forbidden — you can only view your own projects.", status_code=403)
    # An admin visiting an admin's page gets the master list of everyone's projects.
    if is_admin and _is_admin(target):
        rows = []
        for u in sorted(_load_users(), key=lambda x: x.get("username", "")):
            for proj in _list_projects(u.get("username", "")):
                rows.append((u["username"], proj))
        return HTMLResponse(_projects_page_html("All projects (admin)", rows))
    rows = [(username, proj) for proj in _list_projects(username)]
    return HTMLResponse(_projects_page_html(username + "'s projects", rows))


@app.api_route("/{username}/{project}", methods=["GET", "POST"])
@app.api_route("/{username}/{project}/{subpath:path}", methods=["GET", "POST"])
async def serve_project(request: Request, username: str, project: str, subpath: str = ""):
    if username in _RESERVED_TOP:
        return HTMLResponse("Not found", status_code=404)
    viewer = _current_user(request)
    if not viewer:
        return HTMLResponse(_login_page(), status_code=401)
    owner = _find_user_by_username(username)
    if not owner:
        # Project namespaces predate account renames on some long-lived
        # sessions.  Resolve those stable URLs through the explicit session
        # owner whenever the registry has one.
        owner_id = _load_session_owners().get(project)
        owner = _find_user_by_id(owner_id) if owner_id else None
    if not owner:
        # The administrator can recover still-valid static handoffs from
        # namespaces created before either account or session ownership was
        # recorded.  Members cannot probe or open those orphaned directories.
        if not _is_admin(viewer):
            return HTMLResponse("Not found", status_code=404)
    elif viewer.get("id") != owner.get("id") and not _is_admin(viewer):
        return HTMLResponse("Forbidden — you can only view your own projects.", status_code=403)
    pdir = _project_dir(username, project)
    if pdir is None or not pdir.exists():
        return HTMLResponse(f"Project not found. (Served from ~/web-projects/{username}/{project}/)",
                            status_code=404)
    serve_cfg = pdir / ".serve.json"
    if serve_cfg.exists():
        try:
            port = int(json.loads(serve_cfg.read_text()).get("port", 0))
        except Exception:
            port = 0
        if port:
            return await _proxy_to_port(request, port, subpath)
    rel = subpath or "index.html"
    target = (pdir / rel).resolve()
    try:
        target.relative_to(pdir.resolve())
    except ValueError:
        return HTMLResponse("Forbidden", status_code=403)
    if target.is_dir():
        target = target / "index.html"
    if not target.exists():
        idx = pdir / "index.html"
        target = idx if idx.exists() else None
    if not target or not target.exists():
        return HTMLResponse("Not found", status_code=404)
    mime = mimetypes.guess_type(str(target))[0] or "application/octet-stream"
    return FileResponse(str(target), media_type=mime)


async def _controller_forever() -> None:
    stop = asyncio.Event()
    loop = asyncio.get_running_loop()
    for sig in (signal.SIGTERM, signal.SIGINT):
        try:
            loop.add_signal_handler(sig, stop.set)
        except NotImplementedError:
            pass
    async with lifespan(app):
        await stop.wait()


def _run_api_server(workers: int) -> None:
    # WebSocket keepalive — this is what stopped the noVNC viewers dropping every
    # ~minute. A viewer watching a STATIC desktop sends/receives nothing, and
    # uvicorn's default ws implementation on websockets>=14 ("websockets_sansio")
    # implements no ping at all, so ws_ping_interval was silently ignored and the
    # connection carried zero traffic — leaving it to be reaped by the first
    # intermediary's idle timeout (nginx proxy_send_timeout, NAT, etc.). Pinning
    # ws="websockets" selects the implementation that DOES honour ping_interval,
    # so a Ping/Pong flows every 25s and every hop keeps the tunnel open. The
    # generous ping_timeout avoids killing a healthy viewer over one late pong.
    try:
        uvicorn.run("app:app", host="0.0.0.0", port=PORT, workers=workers,
                    ws="websockets", ws_ping_interval=25, ws_ping_timeout=120)
    except (ValueError, ImportError, KeyError):
        # The legacy implementation is deprecated upstream; if a future uvicorn
        # drops it, fall back to the default rather than failing to boot.
        logger.warning("uvicorn ws='websockets' unavailable — falling back to the default "
                       "implementation (WebSocket keepalive pings will be disabled)")
        uvicorn.run("app:app", host="0.0.0.0", port=PORT, workers=workers)


if __name__ == "__main__":
    if PROCESS_ROLE == "controller":
        asyncio.run(_controller_forever())
    elif PROCESS_ROLE == "api":
        _run_api_server(1)
    else:
        # One controller owns watchdogs, lifecycle and tmux readers. Uvicorn's
        # workers are stateless HTTP/WebSocket relays and can scale independently.
        # Floor of 1, not 2: this host has ~2 GB RAM and each worker imports the
        # whole 28k-line module, so forcing a second worker on a memory-tight box
        # made every child die at spawn and the service never bound its port.
        workers = max(1, min(8, int(os.environ.get("TMUX_DASH_WEB_WORKERS", "2"))))
        controller_env = os.environ.copy()
        controller_env["TMUX_DASH_PROCESS_ROLE"] = "controller"
        controller = subprocess.Popen(
            [sys.executable, str(Path(__file__).resolve())],
            env=controller_env,
            start_new_session=True,
        )
        os.environ["TMUX_DASH_PROCESS_ROLE"] = "api"
        controller_stopping = threading.Event()

        def watch_controller() -> None:
            code = controller.wait()
            if not controller_stopping.is_set():
                logger.error("Lifecycle controller exited unexpectedly with code %s", code)
                os.kill(os.getpid(), signal.SIGTERM)

        threading.Thread(target=watch_controller, daemon=True).start()
        try:
            _run_api_server(workers)
        finally:
            controller_stopping.set()
            if controller.poll() is None:
                controller.terminate()
                try:
                    controller.wait(timeout=20)
                except subprocess.TimeoutExpired:
                    controller.kill()
                    controller.wait(timeout=5)
