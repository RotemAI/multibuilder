"""Google sign-in and connected-service OAuth.

Extracted from app.py. Handles the sign-in flow, the signed `state` parameter,
ID-token claim checks, and the per-user credential files for connected Google
services (Drive, Gmail, Calendar).

Signing uses core.tokens with the secret passed in, so AUTH_SECRET keeps its
single definition in app.py.
"""

from __future__ import annotations

import base64
import json
import logging
import os
import re
import secrets
import shlex
import time
import urllib.parse
from pathlib import Path

import httpx
from fastapi import Request

import google_policy
from core import tokens as core_tokens
from core.config import (
    ADMIN_GOOGLE_EMAIL,
    AUTH_COOKIE,
    GOOGLE_DWD_SERVICE_ACCOUNT_FILE,
    GOOGLE_LOGIN_DOMAINS,
    GOOGLE_LOGIN_EMAILS,
    GOOGLE_MCP_SCRIPT,
    MESSAGES_DIR,
    PUBLIC_BASE_URL,
    ROOT_PATH,
)
from core.users import _load_users, _save_users

logger = logging.getLogger("codex-dashboard")

# Injected by app.py; see configure().
_advisor_live_sync_enabled = None
_backup_before_dashboard_write = None
_code_from_urls = None
_ensure_user_codex_config_dir = None
_new_user_id = None
_public_base_url = None
_sync_advisor_user = None
_user_codex_config_dir = None
_user_data_dir = None
_ensure_user_browser_session = None
_toml_escape = None
AUTH_SECRET = ""


def configure(**kw):
    """Bind app-level helpers; an unknown name raises instead of passing silently."""
    for key, value in kw.items():
        if key not in globals():
            raise TypeError(f"services.google_auth.configure: unknown dependency {key!r}")
        globals()[key] = value


GOOGLE_MCP_PYTHON = MESSAGES_DIR / "mcp" / "venv" / "bin" / "python"


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


# Rendered into __GOOGLE_BTN__ only when a Google OAuth client is configured.
_GOOGLE_BTN_HTML = """  <a class="gbtn" id="gbtn" href="__ROOT_PATH__/auth/google/start">
    <svg width="17" height="17" viewBox="0 0 48 48" aria-hidden="true"><path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-3.2-.4-4.7H24v8.9h11.8c-.5 2.7-2 5-4.4 6.6v5.5h7.1c4.2-3.8 6.6-9.5 6.6-16.3z"/><path fill="#34A853" d="M24 46c6 0 11-2 14.6-5.3l-7.1-5.5c-2 1.3-4.5 2.1-7.5 2.1-5.8 0-10.6-3.9-12.4-9.1H4.3v5.7C7.9 41.1 15.4 46 24 46z"/><path fill="#FBBC05" d="M11.6 28.2c-.5-1.3-.7-2.7-.7-4.2s.3-2.9.7-4.2v-5.7H4.3C2.8 16.9 2 20.3 2 24s.8 7.1 2.3 9.9l7.3-5.7z"/><path fill="#EA4335" d="M24 10.7c3.3 0 6.2 1.1 8.5 3.3l6.3-6.3C35 4.1 30 2 24 2 15.4 2 7.9 6.9 4.3 14.1l7.3 5.7c1.8-5.2 6.6-9.1 12.4-9.1z"/></svg>
    Continue with Google</a>
  <div class="ghint">__GOOGLE_HINT__</div>"""


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


CONNECTIONS_DIR = MESSAGES_DIR / "connections"


# Written by google_workspace_mcp.py, one line per Google tool call. Read here
# so an admin can review access without shelling into the box.
GOOGLE_MCP_AUDIT_FILE = MESSAGES_DIR / google_policy.AUDIT_FILE_NAME


GOOGLE_OAUTH_CLIENT_FILE = MESSAGES_DIR / "google_oauth_client.json"


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


_GOOGLE_BTN_HTML = _GOOGLE_BTN_HTML.replace("__ROOT_PATH__", ROOT_PATH)
