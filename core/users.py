"""User accounts, request identity, and admin impersonation.

Extracted from app.py. This module owns the user store and the impersonation
tables together, deliberately: `_current_user` resolves impersonation, and
impersonation resolves users, so splitting them would create an import cycle.
The mutable module state (`_user_presence`, `_impersonation_*`) moves WITH the
functions that own it -- state split across modules is how a refactor silently
diverges.

`_user_codex_config_dir` stays in app.py (53 call sites there) and is injected
via `configure()` rather than imported, which is what keeps this module free of
a back-import into the application.
"""

from __future__ import annotations

import base64
import hashlib
import json
import os
import secrets
import threading
import time
from pathlib import Path

from fastapi import Request

from core.config import (
    AUTH_COOKIE,
    AUTH_PASS,
    AUTH_USER,
    MESSAGES_DIR,
    PERMISSION_GROUPS,
    USERS_FILE,
)
from core.io import _atomic_write_json
from core.tokens import check_token
from core.validators import _is_admin

logger = __import__("logging").getLogger("codex-dashboard")

# Injected by app.py at import time: see configure().
_user_codex_config_dir = None


def configure(*, user_codex_config_dir):
    """Wire in the app-level helpers this module deliberately does not import."""
    global _user_codex_config_dir
    _user_codex_config_dir = user_codex_config_dir


def _check_token(token: str) -> bool:
    """Token check against the app's secret, set by configure_secret()."""
    return check_token(_AUTH_SECRET, token)


_AUTH_SECRET = ""


def configure_secret(secret: str) -> None:
    """AUTH_SECRET has exactly one definition, in app.py; it is passed in here."""
    global _AUTH_SECRET
    _AUTH_SECRET = secret


_USER_ONLINE_WINDOW_SECONDS = 120


_user_presence: dict[str, float] = {}


def _hash_password(password: str, salt: str) -> str:
    return hashlib.sha256((salt + password).encode("utf-8")).hexdigest()


def _new_salt() -> str:
    return secrets.token_hex(16)


def _load_users() -> list:
    """Load users from disk. On first run, seed an admin from env vars."""
    if USERS_FILE.exists():
        try:
            data = json.loads(USERS_FILE.read_text())
            users = data.get("users") if isinstance(data, dict) else None
            if isinstance(users, list) and users:
                return users
        except Exception:
            logger.exception("Failed to read %s -- re-seeding", USERS_FILE)
    # Seed admin from env vars (single-user legacy mode)
    salt = _new_salt()
    admin = {
        "id": "admin",
        "username": AUTH_USER or "admin",
        "password_hash": _hash_password(AUTH_PASS or "", salt),
        "password_salt": salt,
        "role": "admin",
        "created_at": time.time(),
        "last_login": 0,
    }
    _save_users([admin])
    return [admin]


def _save_users(users: list):
    try:
        MESSAGES_DIR.mkdir(parents=True, exist_ok=True)
        USERS_FILE.write_text(json.dumps({"users": users}, indent=2))
        try:
            USERS_FILE.chmod(0o600)
        except Exception:
            logger.debug("chmod 600 on users.json failed", exc_info=True)
    except Exception:
        logger.exception("Failed to save users to %s", USERS_FILE)


def _users_provider():
    """Resolve _load_users through app.py when it re-exports us.

    The test suite patches `app._load_users`; if this module called its own
    global directly, that patch would no longer be seen and route handlers
    would read the real users file. Resolving through the injected accessor
    keeps the existing test seam working after the extraction.
    """
    if _load_users_override is not None:
        return _load_users_override()
    return _load_users()


_load_users_override = None


def configure_users_provider(loader) -> None:
    """Point user lookups at app.py's (patchable) _load_users binding."""
    global _load_users_override
    _load_users_override = loader


def _find_user_by_id(user_id: str) -> dict | None:
    for u in _users_provider():
        if u.get("id") == user_id:
            return u
    return None


def _user_from_token(token: str | None) -> dict | None:
    """Validate token signature AND look up the user. Returns user dict or None."""
    if not token or not _check_token(token):
        return None
    user_id = token.split(":", 1)[0]
    return _find_user_by_id(user_id)


def _touch_user_presence(user: dict | None) -> None:
    """Record authenticated dashboard activity for lightweight presence."""
    if user and user.get("id"):
        _user_presence[str(user["id"])] = time.time()


def _current_user(request: Request) -> dict | None:
    """Resolve the user for an HTTP request via the tmux_auth cookie.

    When AUTH_PASS is empty (auth disabled), behave as if the admin is logged
    in so every downstream check (`is_admin`, ownership filters, etc.) still
    works without per-call ``if not AUTH_PASS`` branches.
    """
    if not AUTH_PASS:
        admin = _find_user_by_id("admin")
        if admin:
            _touch_user_presence(admin)
            return admin
        synthetic = {
            "id": "admin", "username": AUTH_USER or "admin",
            "role": "admin", "_synthetic": True,
        }
        _touch_user_presence(synthetic)
        return synthetic
    if getattr(request.state, "_current_user_resolved", False):
        return getattr(request.state, "_current_user", None) or None
    cached = getattr(request.state, "_current_user", None)
    base_user = getattr(request.state, "_authenticated_user", None)
    if base_user is None:
        base_user = (cached or None) if cached is not None else _user_from_token(
            request.cookies.get(AUTH_COOKIE)
        )
    user = base_user
    impersonation_token = request.headers.get("X-Tmux-Impersonate", "").strip()
    if impersonation_token:
        target = None
        if _is_admin(base_user):
            target = _user_from_impersonation_session(
                impersonation_token,
                base_user,
            )
        if target:
            request.state._impersonator = base_user
            user = target
        else:
            request.state._invalid_impersonation = True
    request.state._current_user = user or {}
    request.state._current_user_resolved = True
    if user:
        _touch_user_presence(user)
        request.state._presence_touched = True
    return user


def _public_user(u: dict) -> dict:
    """Strip secrets before returning a user record to the client."""
    group_id = str(u.get("group") or "")
    return {
        "id": u.get("id", ""),
        "username": u.get("username", ""),
        "role": u.get("role", "user"),
        "group": group_id,
        "group_name": PERMISSION_GROUPS.get(group_id, {}).get("name", ""),
        "google_email": u.get("google_email", ""),
        "sso": u.get("sso", True) is not False,
        "created_at": u.get("created_at", 0),
        "advisor_ready": (
            True
            if _is_admin(u)
            else (_user_codex_config_dir(u) / "advisor-token").is_file()
        ),
    }


_IMPERSONATION_TICKET_TTL = 60


_IMPERSONATION_SESSION_TTL = 8 * 60 * 60


_impersonation_lock = threading.Lock()


_impersonation_tickets: dict[str, dict] = {}


_impersonation_sessions: dict[str, dict] = {}


IMPERSONATION_SESSIONS_FILE = MESSAGES_DIR / "impersonation-sessions.json"


_impersonation_sessions_loaded = False


def _load_impersonation_sessions_locked() -> None:
    """Load active opaque tab sessions once; caller holds the lock."""
    global _impersonation_sessions_loaded
    if _impersonation_sessions_loaded:
        return
    loaded = {}
    try:
        data = json.loads(IMPERSONATION_SESSIONS_FILE.read_text())
        rows = data.get("sessions", {}) if isinstance(data, dict) else {}
        if isinstance(rows, dict):
            loaded = {
                str(token): record
                for token, record in rows.items()
                if isinstance(record, dict)
            }
    except (OSError, json.JSONDecodeError, UnicodeError):
        loaded = {}
    _impersonation_sessions.clear()
    _impersonation_sessions.update(loaded)
    _impersonation_sessions_loaded = True


def _save_impersonation_sessions_locked() -> None:
    """Persist opaque tab sessions privately; caller holds the lock."""
    _atomic_write_json(
        IMPERSONATION_SESSIONS_FILE,
        {"sessions": _impersonation_sessions},
    )


def _purge_expired_impersonation_tokens(now: float | None = None) -> None:
    """Purge expired records; caller holds ``_impersonation_lock``."""
    _load_impersonation_sessions_locked()
    timestamp = now or time.time()
    sessions_changed = False
    for store in (_impersonation_tickets, _impersonation_sessions):
        for token, record in list(store.items()):
            if float(record.get("expires_at", 0) or 0) <= timestamp:
                store.pop(token, None)
                if store is _impersonation_sessions:
                    sessions_changed = True
    if sessions_changed:
        _save_impersonation_sessions_locked()


def _user_from_impersonation_session(
    token: str,
    authenticated_admin: dict,
) -> dict | None:
    """Resolve a tab-scoped session only when its original admin is logged in."""
    with _impersonation_lock:
        _purge_expired_impersonation_tokens()
        record = _impersonation_sessions.get(token)
        if (
            not record
            or record.get("admin_id") != authenticated_admin.get("id")
        ):
            return None
        target_id = str(record.get("target_id", ""))
    target = _find_user_by_id(target_id)
    return target if target and target.get("id") != authenticated_admin.get("id") else None
