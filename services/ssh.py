"""Remote SSH IDE: connections, credentials, and workspace operations.

Extracted from app.py. This module owns everything the IDE needs to talk to a
remote host or a local folder -- profile storage, the AES-256-GCM credential
vault, key materialisation, the remote helper scripts, and the tmux plumbing --
but NOT the route handlers, which stay in app.py with their decorators and
Request wiring.

Connections are per-owner: the creating user and dashboard admins may use one,
and nobody else can see that it exists. Credentials ARE stored, encrypted at
rest, because operators need a session to survive a dashboard restart; the
threat model is documented on the vault functions themselves.

`_find_session_for_user` is injected via configure() rather than imported: it
reaches into tmux session listing and user access checks, and importing it here
would point this module back at the application it was extracted from.
"""

from __future__ import annotations

import asyncio
import base64
import binascii
import fcntl
import hashlib
import ipaddress
import json
import logging
import os
import pty
import re
import secrets
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
from pathlib import Path

from cryptography.exceptions import InvalidTag
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
from fastapi import Request
from fastapi.responses import JSONResponse
from pydantic import BaseModel

from core.config import (
    MAX_IDE_TERMINALS,
    MESSAGES_DIR,
    PROJECTS_ROOT,
    SSH_CONTROL_DIR,
    SSH_KNOWN_HOSTS,
)
from core.io import _atomic_write_json
from core.state import _shared_store
from core.users import _is_admin
from core.validators import _is_valid_session_name, _tmux_safe_label

logger = logging.getLogger("codex-dashboard")

# Injected by app.py at import time; see configure().
_find_session_for_user = None
_current_user_impl = None


def configure(*, find_session_for_user, current_user):
    """Wire in the app-level lookups this module deliberately does not import."""
    global _find_session_for_user, _current_user_impl
    _find_session_for_user = find_session_for_user
    _current_user_impl = current_user


def _current_user(request):
    """Resolve identity through app.py's binding.

    Importing core.users._current_user directly would freeze the pre-patch
    function, so `patch("app._current_user", ...)` would no longer steer the
    per-connection ownership gate -- a test that guards cross-tenant access
    caught exactly that.
    """
    return _current_user_impl(request)


# --- Remote SSH IDE ---------------------------------------------------------
#
# Connections are per-owner: the creating user and dashboard admins may use one,
# and nobody else can see that it exists.  Because operators need a session to
# survive a dashboard restart, credentials ARE stored here -- encrypted at rest
# with AES-256-GCM and never returned by any API.
#
# Threat model, stated plainly: the data key lives in TMUX_DASH_SSH_KEY or in a
# 0600 keyfile beside the ciphertext, so an attacker who can read the dashboard
# host's disk AS THE DASHBOARD USER recovers the credentials.  Encryption here
# defends against stolen backups, cloned state directories, and casual file
# reads -- not against full compromise of the dashboard account.  Protect that
# account accordingly.
SSH_CONNECTIONS_FILE = MESSAGES_DIR / "ssh-connections.json"


SSH_VAULT_KEY_FILE = MESSAGES_DIR / "ssh-vault.key"


SSH_IDE_STATE_FILE = MESSAGES_DIR / "ssh-ide-state.json"


SSH_IDE_AUDIT_FILE = MESSAGES_DIR / "ssh-ide-audit.jsonl"


_ssh_ide_audit_lock = threading.Lock()


SSH_MAX_FILE_BYTES = 1_000_000


# Unsaved buffers are convenience state, not storage: cap what one workspace
# may park in the dashboard state directory.
SSH_MAX_UNSAVED_STATE_BYTES = 2_000_000


_SSH_HOST_RE = re.compile(r"^[A-Za-z0-9][A-Za-z0-9.-]{0,252}$")


_SSH_USER_RE = re.compile(r"^[A-Za-z_][A-Za-z0-9_.-]{0,63}$")


def _harden_ssh_state_file(path: Path) -> None:
    """Keep SSH ciphertext and resume state readable only by the dashboard user."""
    try:
        path.chmod(0o600)
    except OSError:
        logger.debug("chmod 600 on %s failed", path, exc_info=True)


_ssh_vault_key_lock = threading.Lock()


_ssh_vault_key_cache: bytes | None = None


def _ssh_vault_key() -> bytes:
    """Return the AES-256 data key, generating a 0600 keyfile on first use.

    TMUX_DASH_SSH_KEY (base64, 32 bytes) wins when set, so a deployment can keep
    the key out of the state directory entirely. Otherwise the key is generated
    once and stored beside the ciphertext -- see the module header for exactly
    what that does and does not protect against.
    """
    global _ssh_vault_key_cache
    with _ssh_vault_key_lock:
        if _ssh_vault_key_cache is not None:
            return _ssh_vault_key_cache
        env_key = os.environ.get("TMUX_DASH_SSH_KEY", "").strip()
        if env_key:
            try:
                key = base64.b64decode(env_key, validate=True)
            except (ValueError, binascii.Error) as exc:
                raise RuntimeError("TMUX_DASH_SSH_KEY must be base64-encoded") from exc
            if len(key) != 32:
                raise RuntimeError("TMUX_DASH_SSH_KEY must decode to exactly 32 bytes")
            _ssh_vault_key_cache = key
            return key
        try:
            key = base64.b64decode(SSH_VAULT_KEY_FILE.read_text().strip(), validate=True)
            if len(key) == 32:
                _ssh_vault_key_cache = key
                return key
            logger.error("SSH vault keyfile is malformed; refusing to overwrite it")
            raise RuntimeError("SSH vault keyfile is malformed")
        except FileNotFoundError:
            pass
        except (ValueError, binascii.Error) as exc:
            raise RuntimeError("SSH vault keyfile is not valid base64") from exc
        key = secrets.token_bytes(32)
        SSH_VAULT_KEY_FILE.parent.mkdir(parents=True, exist_ok=True)
        # O_EXCL so two workers racing at first boot cannot clobber each other's
        # key and silently strand every previously stored credential.
        try:
            fd = os.open(SSH_VAULT_KEY_FILE, os.O_WRONLY | os.O_CREAT | os.O_EXCL, 0o600)
        except FileExistsError:
            existing = base64.b64decode(SSH_VAULT_KEY_FILE.read_text().strip(), validate=True)
            _ssh_vault_key_cache = existing
            return existing
        try:
            os.fchmod(fd, 0o600)
            os.write(fd, base64.b64encode(key) + b"\n")
            os.fsync(fd)
        finally:
            os.close(fd)
        _ssh_vault_key_cache = key
        return key


def _ssh_vault_encrypt(secret: str, connection_id: str) -> str:
    """Encrypt one credential, bound to its connection id via AES-GCM AAD.

    The AAD binding means a ciphertext copied onto a different connection record
    fails to decrypt rather than silently authenticating somewhere unintended.
    """
    if not secret:
        return ""
    nonce = secrets.token_bytes(12)
    sealed = AESGCM(_ssh_vault_key()).encrypt(
        nonce, secret.encode("utf-8"), connection_id.encode("utf-8")
    )
    return base64.b64encode(nonce + sealed).decode("ascii")


def _ssh_vault_decrypt(blob: str, connection_id: str) -> str:
    if not blob:
        return ""
    try:
        raw = base64.b64decode(blob, validate=True)
        return AESGCM(_ssh_vault_key()).decrypt(
            raw[:12], raw[12:], connection_id.encode("utf-8")
        ).decode("utf-8")
    except (ValueError, binascii.Error, InvalidTag) as exc:
        raise RuntimeError("Stored SSH credential could not be decrypted") from exc


def _append_ssh_ide_audit(user: dict, session_name: str, profile: dict, action: str) -> dict:
    """Append a credential-free record before a Remote IDE terminal action."""
    entry = {
        "id": secrets.token_hex(12),
        "ts": time.time(),
        "action": action,
        "user_id": str(user.get("id") or ""),
        "username": str(user.get("username") or ""),
        "session_name": session_name,
        "connection_id": str(profile.get("id") or ""),
        "connection_label": str(profile.get("label") or ""),
        "terminal_mode": {
            "terminal_focus_requested": "focus_existing_tmux_window",
            "terminal_attached": "browser_pty_attach",
        }.get(action, "open_tmux_window"),
    }
    encoded = (json.dumps(entry, separators=(",", ":")) + "\n").encode("utf-8")
    with _ssh_ide_audit_lock:
        SSH_IDE_AUDIT_FILE.parent.mkdir(parents=True, exist_ok=True)
        fd = os.open(SSH_IDE_AUDIT_FILE, os.O_APPEND | os.O_CREAT | os.O_WRONLY, 0o600)
        try:
            os.fchmod(fd, 0o600)
            os.write(fd, encoded)
            os.fsync(fd)
        finally:
            os.close(fd)
    return entry


async def _record_ssh_ide_audit(request: Request, session_name: str, profile: dict, action: str) -> None:
    """Best-effort audit logging must not turn a completed remote operation into an error."""
    try:
        await asyncio.to_thread(_append_ssh_ide_audit, _current_user(request), session_name, profile, action)
    except OSError:
        logger.exception("Could not append SSH IDE audit event %s", action)


def _ssh_connections_store():
    return _shared_store(
        "ssh_connections", SSH_CONNECTIONS_FILE, lambda: {"version": 1, "connections": []}
    )


def _ssh_control_socket(session_name: str, connection_id: str) -> Path:
    """Return a short, non-guessable control path for one tmux SSH workspace."""
    if not _is_valid_session_name(session_name) or not re.fullmatch(r"[A-Za-z0-9_-]{8,128}", connection_id):
        raise ValueError("Invalid SSH workspace identity")
    digest = hashlib.sha256(f"{session_name}\0{connection_id}".encode()).hexdigest()[:32]
    return SSH_CONTROL_DIR / f"ide-{digest}.sock"


def _valid_ssh_host(host: str) -> bool:
    candidate = (host or "").strip()
    if not candidate or len(candidate) > 253:
        return False
    try:
        ipaddress.ip_address(candidate)
        return True
    except ValueError:
        return bool(_SSH_HOST_RE.fullmatch(candidate)) and ".." not in candidate


def _normalized_ssh_identity_file(value: str) -> str | None:
    """Allow an explicit key only from this dashboard host's ~/.ssh directory."""
    raw = (value or "").strip()
    if not raw:
        return ""
    try:
        candidate = Path(raw).expanduser().resolve(strict=True)
        ssh_root = (Path.home() / ".ssh").resolve(strict=False)
        candidate.relative_to(ssh_root)
    except (OSError, ValueError):
        return None
    if not candidate.is_file():
        return None
    return str(candidate)


_SSH_SECRET_FIELDS = ("password_enc", "passphrase_enc", "private_key_enc")


# Pasted private keys live under the dashboard's own state dir, never in
# ~/.ssh: the key belongs to one stored connection, so it is written 0600 with
# the connection id as its name and removed when that connection is deleted.
SSH_MANAGED_KEYS_DIR = MESSAGES_DIR / "ssh-keys"


_SSH_KEY_HEADER_RE = re.compile(r"-----BEGIN [A-Z0-9 ]*PRIVATE KEY-----")


def _private_key_is_encrypted(text: str) -> bool:
    """Is this pasted key protected by a passphrase?

    Classic PEM announces it in headers; OpenSSH-format keys name a cipher other
    than "none" in the base64 body, which decodes to a readable marker.
    """
    body = text or ""
    if "Proc-Type: 4,ENCRYPTED" in body or "DEK-Info:" in body:
        return True
    try:
        inner = "".join(
            line.strip() for line in body.splitlines() if not line.startswith("-----")
        )
        raw = base64.b64decode(inner, validate=False)[:120]
    except (ValueError, binascii.Error):
        return False
    if not raw.startswith(b"openssh-key-v1\x00"):
        return False
    # After the magic comes a length-prefixed cipher name; "none" means plaintext.
    return b"none" not in raw[:40]


def _valid_private_key_blob(text: str) -> bool:
    """Cheap shape check so an obviously wrong paste fails before it is stored."""
    body = (text or "").strip()
    if not body or len(body) > 64_000 or "\x00" in body:
        return False
    return bool(_SSH_KEY_HEADER_RE.search(body)) and "PRIVATE KEY-----" in body


def _ssh_managed_key_path(connection_id: str) -> Path:
    return SSH_MANAGED_KEYS_DIR / f"{connection_id}.key"


def _materialize_ssh_key(profile: dict) -> str:
    """Write a stored pasted key to a 0600 file and return its path.

    The key is held encrypted at rest; OpenSSH needs a real file, so it is
    decrypted to one owned by this user with 0600 permissions. Rewritten each
    time rather than trusted from a previous run, so a rotated key takes effect.
    """
    blob = str(profile.get("private_key_enc") or "")
    if not blob:
        return ""
    connection_id = str(profile.get("id") or "")
    key_text = _ssh_vault_decrypt(blob, connection_id)
    if not key_text.endswith("\n"):
        key_text += "\n"
    SSH_MANAGED_KEYS_DIR.mkdir(mode=0o700, parents=True, exist_ok=True)
    path = _ssh_managed_key_path(connection_id)
    # Create with 0600 from the start; writing then chmod-ing leaves a window
    # where the key is briefly readable by others.
    fd = os.open(path, os.O_WRONLY | os.O_CREAT | os.O_TRUNC, 0o600)
    with os.fdopen(fd, "w") as handle:
        handle.write(key_text)
    return str(path)


def _discard_ssh_key(connection_id: str) -> None:
    """Remove a materialized key file; called when its connection is deleted."""
    try:
        _ssh_managed_key_path(connection_id).unlink()
    except FileNotFoundError:
        pass
    except OSError:
        logger.debug("Could not remove managed SSH key for %s", connection_id, exc_info=True)


def _ssh_public_profile(profile: dict) -> dict:
    """Return connection metadata for the browser.

    Credentials are stored, so this allow-list is the boundary that keeps them
    off the wire: it names every field that may be published and never reads the
    encrypted ones. `has_password` reports only that a secret exists.
    """
    return {
        "id": str(profile.get("id") or ""),
        "kind": str(profile.get("kind") or "ssh"),
        "label": str(profile.get("label") or ""),
        "host": str(profile.get("host") or ""),
        "username": str(profile.get("username") or ""),
        "port": int(profile.get("port") or 22),
        "identity_file": str(profile.get("identity_file") or ""),
        "auth_mode": str(profile.get("auth_mode") or "agent"),
        "workspace_root": str(profile.get("workspace_root") or "."),
        "max_file_bytes": int(profile.get("max_file_bytes") or SSH_MAX_FILE_BYTES),
        "owner_id": str(profile.get("owner_id") or ""),
        "owner_username": str(profile.get("owner_username") or ""),
        "has_password": bool(profile.get("password_enc")),
        "has_private_key": bool(profile.get("private_key_enc")),
        "last_directory": str(profile.get("last_directory") or "."),
    }


def _ssh_user_may_use_profile(user: dict | None, profile: dict) -> bool:
    """A stored connection belongs to its creator; admins retain oversight."""
    if not user or not profile:
        return False
    if _is_admin(user):
        return True
    owner_id = str(profile.get("owner_id") or "")
    return bool(owner_id) and owner_id == str(user.get("id") or "")


def _ssh_profiles(session_name: str, user: dict | None = None) -> list[dict]:
    """List stored connections for a session, filtered to what `user` may use.

    Passing user=None returns every profile and is for internal callers only;
    request paths must pass the caller so ownership is enforced at the source
    rather than depending on each route to re-filter.
    """
    data = _ssh_connections_store().read()
    profiles = data.get("connections") if isinstance(data, dict) else []
    return [
        dict(profile)
        for profile in profiles
        if isinstance(profile, dict)
        and profile.get("session_name") == session_name
        and (user is None or _ssh_user_may_use_profile(user, profile))
    ]


def _ssh_profile(session_name: str, connection_id: str, user: dict | None = None) -> dict | None:
    return next(
        (
            profile
            for profile in _ssh_profiles(session_name, user)
            if profile.get("id") == connection_id
        ),
        None,
    )


def _ssh_update_profile(session_name: str, connection_id: str, changes: dict) -> None:
    """Merge fields into one stored connection under the store's lock."""

    def mutate(data: dict) -> bool:
        for item in data.setdefault("connections", []):
            if item.get("id") == connection_id and item.get("session_name") == session_name:
                item.update(changes)
                return True
        return False

    _ssh_connections_store().update(mutate)
    _harden_ssh_state_file(SSH_CONNECTIONS_FILE)


def _ssh_ide_state_store():
    return _shared_store(
        "ssh_ide_state", SSH_IDE_STATE_FILE, lambda: {"version": 1, "workspaces": {}}
    )


def _ssh_ide_state_key(session_name: str, connection_id: str) -> str:
    """Composite key for one session's view of one connection.

    A NUL byte was used as the separator, which PostgreSQL rejects in both text
    and JSONB. "\x1f" (unit separator) is equally impossible in a session name
    or a connection id -- both are restricted charsets -- and stores cleanly.
    """
    return f"{session_name}\x1f{connection_id}"


def _ssh_read_ide_state(session_name: str, connection_id: str) -> dict:
    data = _ssh_ide_state_store().read()
    workspaces = data.get("workspaces") if isinstance(data, dict) else {}
    entry = workspaces.get(_ssh_ide_state_key(session_name, connection_id)) if isinstance(workspaces, dict) else None
    if not isinstance(entry, dict):
        return {"tabs": [], "active_path": "", "last_directory": ".", "buffers": {}}
    return {
        "tabs": entry.get("tabs") or [],
        "active_path": str(entry.get("active_path") or ""),
        "last_directory": str(entry.get("last_directory") or "."),
        "buffers": entry.get("buffers") or {},
        "updated_at": entry.get("updated_at"),
    }


def _ssh_write_ide_state(session_name: str, connection_id: str, state: dict) -> None:
    def mutate(data: dict) -> None:
        workspaces = data.setdefault("workspaces", {})
        workspaces[_ssh_ide_state_key(session_name, connection_id)] = state

    _ssh_ide_state_store().update(mutate)
    _harden_ssh_state_file(SSH_IDE_STATE_FILE)


def _normalized_remote_path(value: str) -> str | None:
    path = (value or ".").strip()
    if not path or len(path) > 4096 or "\x00" in path:
        return None
    return path


def _normalized_workspace_path(profile: dict, value: str) -> str | None:
    """Return a relative workspace path, never a lexical escape from its root."""
    path = _normalized_remote_path(value)
    if path is None or path.startswith("/"):
        return None
    normalized = os.path.normpath(path)
    if normalized == ".." or normalized.startswith(".." + os.sep):
        return None
    return "." if normalized == "." else normalized


def _ssh_host_is_known(host: str, port: int = 22) -> bool:
    """Is this host already trusted in known_hosts?"""
    try:
        result = subprocess.run(
            ["ssh-keygen", "-F", f"[{host}]:{port}" if port != 22 else host,
             "-f", str(SSH_KNOWN_HOSTS)],
            capture_output=True, text=True, timeout=10,
        )
    except (OSError, subprocess.TimeoutExpired):
        return False
    return result.returncode == 0 and bool((result.stdout or "").strip())


def _ssh_key_fingerprints(scan_lines: list[str]) -> list[dict]:
    """SHA256 fingerprints for scanned host keys, for the user to verify."""
    out = []
    for line in scan_lines:
        try:
            proc = subprocess.run(
                ["ssh-keygen", "-l", "-f", "-"],
                input=line, capture_output=True, text=True, timeout=10,
            )
        except (OSError, subprocess.TimeoutExpired):
            continue
        parts = (proc.stdout or "").strip().split()
        # "256 SHA256:abc… host (ED25519)"
        if len(parts) >= 4:
            out.append({
                "bits": parts[0],
                "fingerprint": parts[1],
                "type": parts[-1].strip("()"),
            })
    return out


def _ssh_trust_host(host: str, port: int = 22) -> bool:
    """Append this host's keys to known_hosts. Called only after the user
    accepted the fingerprint shown to them."""
    result = subprocess.run(
        ["ssh-keyscan", "-T", "10", "-p", str(port), host],
        capture_output=True, text=True, timeout=25,
    )
    lines = [ln for ln in (result.stdout or "").splitlines() if ln.strip() and not ln.startswith("#")]
    if not lines:
        return False
    SSH_KNOWN_HOSTS.parent.mkdir(mode=0o700, parents=True, exist_ok=True)
    existing = SSH_KNOWN_HOSTS.read_text() if SSH_KNOWN_HOSTS.is_file() else ""
    # Append only what is missing, so re-trusting does not duplicate entries.
    added = [ln for ln in lines if ln.strip() not in existing]
    if added:
        with open(SSH_KNOWN_HOSTS, "a") as handle:
            if existing and not existing.endswith("\n"):
                handle.write("\n")
            handle.write("\n".join(added) + "\n")
    try:
        SSH_KNOWN_HOSTS.chmod(0o600)
    except OSError:
        pass
    return True


def _ssh_argv(profile: dict, *, password_auth: bool = False) -> list[str]:
    """Build a non-interactive, no-forwarding SSH invocation from validated data."""
    if not shutil.which("ssh"):
        raise RuntimeError("OpenSSH client is not installed on the dashboard host")
    port = int(profile.get("port") or 22)
    host = str(profile.get("host") or "")
    username = str(profile.get("username") or "")
    if not _valid_ssh_host(host) or not _SSH_USER_RE.fullmatch(username) or not 1 <= port <= 65535:
        raise RuntimeError("SSH connection profile is invalid")
    argv = [
        "ssh",
        "-o", "BatchMode=no" if password_auth else "BatchMode=yes",
        "-o", "ConnectTimeout=12",
        "-o", "StrictHostKeyChecking=yes",
        "-o", "ClearAllForwardings=yes",
        "-o", "RequestTTY=no",
        "-p", str(port),
    ]
    if password_auth:
        argv.extend(("-o", "NumberOfPasswordPrompts=1", "-o", "PreferredAuthentications=keyboard-interactive,password"))
    # A pasted key wins over a ~/.ssh path: it belongs to this connection only.
    identity_file = _materialize_ssh_key(profile)
    if not identity_file:
        identity_file = _normalized_ssh_identity_file(str(profile.get("identity_file") or ""))
        if identity_file is None:
            raise RuntimeError("Configured SSH key is unavailable or outside ~/.ssh")
    if identity_file:
        argv.extend(("-i", identity_file, "-o", "IdentitiesOnly=yes"))
    argv.append(f"{username}@{host}")
    return argv


def _ssh_control_is_alive(profile: dict, session_name: str) -> bool:
    """Ask OpenSSH whether this session/profile control master is still live."""
    # A local workspace is reachable exactly while its folder is a directory,
    # so it reports connected without any transport to check.
    if _is_local_profile(profile):
        return _normalized_local_root(str(profile.get("workspace_root") or "")) is not None
    socket_path = _ssh_control_socket(session_name, str(profile.get("id") or ""))
    if not socket_path.exists():
        return False
    target = _ssh_argv(profile).pop()
    result = subprocess.run(
        ["ssh", "-S", str(socket_path), "-O", "check", target],
        capture_output=True,
        timeout=8,
    )
    return result.returncode == 0


def _ssh_start_control_master(profile: dict, session_name: str, *, password: str = "") -> Path:
    """Start the live SSH transport used by one Remote IDE tmux session."""
    socket_path = _ssh_control_socket(session_name, str(profile.get("id") or ""))
    SSH_CONTROL_DIR.mkdir(mode=0o700, parents=True, exist_ok=True)
    try:
        SSH_CONTROL_DIR.chmod(0o700)
    except OSError:
        pass
    if _ssh_control_is_alive(profile, session_name):
        return socket_path
    try:
        socket_path.unlink(missing_ok=True)
    except OSError as exc:
        raise RuntimeError(f"Could not reset SSH control socket: {exc}") from exc
    password_auth = str(profile.get("auth_mode") or "agent") == "password"
    if password_auth and (not password or "\x00" in password or len(password) > 4096):
        raise RuntimeError("Enter a valid SSH password to connect")
    argv = _ssh_argv(profile, password_auth=password_auth)
    target = argv.pop()
    askpass_path = None
    environment = None
    if password_auth:
        fd, askpass_name = tempfile.mkstemp(prefix="nemo-ssh-askpass-", text=True)
        askpass_path = Path(askpass_name)
        with os.fdopen(fd, "w") as handle:
            handle.write('#!/bin/sh\nprintf "%s\\n" "$TMUX_DASH_SSH_PASSWORD"\n')
        askpass_path.chmod(0o700)
        environment = os.environ.copy()
        environment.update({
            "SSH_ASKPASS": str(askpass_path),
            "SSH_ASKPASS_REQUIRE": "force",
            "DISPLAY": "nemo-ssh",
            "TMUX_DASH_SSH_PASSWORD": password,
        })
    try:
        result = subprocess.run(
            [
                *argv,
                "-S", str(socket_path),
                "-o", "ControlMaster=yes",
                "-o", "ControlPersist=30m",
                "-N",
                "-f",
                target,
            ],
            capture_output=True,
            timeout=25,
            env=environment,
        )
    finally:
        if askpass_path:
            askpass_path.unlink(missing_ok=True)
    if result.returncode != 0:
        detail = result.stderr.decode("utf-8", "replace").strip().replace("\n", " ")
        raise RuntimeError((detail or "Could not establish SSH connection")[:800])
    if not _ssh_control_is_alive(profile, session_name):
        raise RuntimeError("SSH connection did not stay active")
    return socket_path


def _tmux_window_suffix(profile: dict) -> str:
    """A short, unique tail for a connection's tmux window name.

    Labels alone collided: sanitising "prod server", "prod-server" and
    "prod/server" all yield "prod-server", so a second connection reused the
    first one's window — and its terminal then attached to the WRONG host.
    """
    return str(profile.get("id") or "")[:8]


def _ssh_workspace_root(profile: dict) -> str:
    """The remote directory a terminal for this connection should start in.

    Falls back to the login home (`~`) when no workspace root is configured, so
    the shell still opens somewhere sensible.
    """
    root = str(profile.get("workspace_root") or "").strip()
    return root or "~"


def _ssh_tmux_window_name(profile: dict, index: int = 0) -> str:
    """The tmux window backing one terminal for this connection.

    `index` lets a connection own several independent shells: index 0 keeps the
    original, un-suffixed name so existing windows (and anything already
    attached to them) are unaffected.
    """
    if _is_local_profile(profile):
        return _local_tmux_window_name(profile, index)
    label = _tmux_safe_label(profile.get("label"), "remote")
    name = f"ssh-{label[:28]}-{_tmux_window_suffix(profile)}"
    return name if index <= 0 else f"{name}-{int(index)}"


def _ssh_tmux_window_exists(profile: dict, session_name: str, index: int = 0) -> bool:
    """Is this connection's terminal window still present in the tmux session?"""
    if not shutil.which("tmux"):
        return False
    try:
        result = subprocess.run(
            ["tmux", "list-windows", "-t", session_name, "-F", "#{window_name}"],
            capture_output=True, text=True, timeout=8,
        )
    except (OSError, subprocess.TimeoutExpired):
        return False
    if result.returncode != 0:
        return False
    return _ssh_tmux_window_name(profile, index) in result.stdout.split()


def _ssh_open_tmux_window(profile: dict, session_name: str, index: int = 0) -> str:
    """Open an interactive view of the already-authenticated SSH control master."""
    if _is_local_profile(profile):
        return _local_open_tmux_window(profile, session_name, index)
    if not shutil.which("tmux"):
        raise RuntimeError("tmux is not installed on the dashboard host")
    socket_path = _ssh_control_socket(session_name, str(profile.get("id") or ""))
    if not _ssh_control_is_alive(profile, session_name):
        raise RuntimeError("SSH connection is not live; reconnect from the Remote IDE")
    argv = _ssh_argv(profile)
    target = argv.pop()
    terminal_argv = [
        *argv,
        "-tt",
        "-S", str(socket_path),
        "-o", "ControlMaster=no",
        target,
    ]
    # Start in the workspace, not the login home directory. Without this the
    # terminal opens wherever the remote account lands, which is almost never
    # the folder the IDE is showing -- the local path already does this with
    # `tmux new-window -c`, and the two should behave the same.
    #
    # `cd || true` keeps a shell even if the folder has gone away, rather than
    # dropping the connection; `exec $SHELL -l` then replaces it with a normal
    # login shell so the prompt and rc files are what the user expects.
    remote_root = _ssh_workspace_root(profile)
    remote_command = (
        f"cd {shlex.quote(remote_root)} 2>/dev/null || true; exec \"$SHELL\" -l"
    )
    command = (
        "exec "
        + " ".join(shlex.quote(arg) for arg in terminal_argv)
        + " "
        + shlex.quote(remote_command)
    )
    window_name = _ssh_tmux_window_name(profile, index)
    result = subprocess.run(
        ["tmux", "new-window", "-d", "-t", session_name, "-n", window_name, command],
        capture_output=True,
        timeout=10,
    )
    if result.returncode != 0:
        detail = result.stderr.decode("utf-8", "replace").strip().replace("\n", " ")
        raise RuntimeError((detail or "Could not open SSH tmux window")[:800])
    return window_name


def _ssh_list_terminal_indexes(profile: dict, session_name: str) -> list[int]:
    """Which of this connection's terminals actually exist right now.

    tmux is the source of truth: a tab list kept only in the browser drifts from
    reality after a reload, a server restart, or a window killed from elsewhere.
    Index 0 is always offered so the panel has a tab to open even before its
    window has been created.
    """
    if not shutil.which("tmux"):
        return [0]
    try:
        result = subprocess.run(
            ["tmux", "list-windows", "-t", session_name, "-F", "#{window_name}"],
            capture_output=True, text=True, timeout=8,
        )
    except (OSError, subprocess.TimeoutExpired):
        return [0]
    if result.returncode != 0:
        return [0]
    live = set(result.stdout.split())
    found = [
        index for index in range(MAX_IDE_TERMINALS)
        if _ssh_tmux_window_name(profile, index) in live
    ]
    return found or [0]


def _ssh_kill_tmux_window(profile: dict, session_name: str, index: int) -> bool:
    """End one terminal for real: kill its tmux window and the shell in it.

    Closing a tab should stop the remote shell, not just hide a view -- an
    abandoned window keeps its SSH channel and any process running in it.
    Returns False when the window was already gone, which is not an error.
    """
    if not shutil.which("tmux"):
        raise RuntimeError("tmux is not installed on the dashboard host")
    window_name = _ssh_tmux_window_name(profile, index)
    result = subprocess.run(
        ["tmux", "kill-window", "-t", f"{session_name}:={window_name}"],
        capture_output=True, text=True, timeout=8,
    )
    if result.returncode == 0:
        return True
    detail = (result.stderr or "").strip().lower()
    if "can't find window" in detail or "no such window" in detail:
        return False
    raise RuntimeError((result.stderr.strip() or "Could not close terminal")[:400])


def _ssh_focus_tmux_window(profile: dict, session_name: str, index: int = 0) -> str:
    """Select the Remote IDE's interactive SSH window in its owning session."""
    if not shutil.which("tmux"):
        raise RuntimeError("tmux is not installed on the dashboard host")
    window_name = _ssh_tmux_window_name(profile, index)
    result = subprocess.run(
        ["tmux", "select-window", "-t", f"{session_name}:={window_name}"],
        capture_output=True,
        timeout=8,
    )
    if result.returncode != 0:
        detail = result.stderr.decode("utf-8", "replace").strip().replace("\n", " ")
        raise RuntimeError((detail or "SSH terminal window is not available; reconnect first")[:800])
    return window_name


def _ssh_remote_command(script: str, path: str) -> str:
    """Quote the only remote shell command; user-controlled paths never become syntax."""
    return "python3 -c " + shlex.quote(script) + " -- " + shlex.quote(path)


class _WorkspaceCommand(str):
    """The remote shell command, carrying the parts the local transport needs.

    It subclasses str so the SSH path keeps receiving exactly the string it
    always did, while _ssh_run can recover (script, path) for a local workspace
    without shell-parsing them back out of the quoted command.
    """

    script: str
    path: str

    def __new__(cls, command: str, script: str, path: str) -> _WorkspaceCommand:
        obj = super().__new__(cls, command)
        obj.script = script
        obj.path = path
        return obj


def _local_command_parts(command: str) -> tuple[str, str]:
    """Recover the (script, path) pair a local workspace should execute."""
    if isinstance(command, _WorkspaceCommand):
        return command.script, command.path
    raise RuntimeError("Local workspaces cannot run this command")


def _ssh_workspace_command(profile: dict, script: str, path: str) -> str:
    """Run a fixed script inside the configured remote root, without shell interpolation."""
    root = str(profile.get("workspace_root") or ".")
    if not root or len(root) > 4096 or "\x00" in root:
        raise RuntimeError("Configured remote workspace root is invalid")
    return _WorkspaceCommand(
        "cd -- " + shlex.quote(root) + " && " + _ssh_remote_command(script, path),
        script,
        path,
    )


# ---------------------------------------------------------------------------
# Local workspaces
#
# The IDE was built for SSH targets only. A "local" connection opens a folder on
# the dashboard host itself, the way VS Code opens a local folder next to a
# Remote-SSH window. It is modelled as a connection profile with
# `kind == "local"` so every existing route, the stored workspace state and the
# frontend keep working unchanged — only the transport differs.
#
# Both transports execute the SAME _SSH_*_SCRIPT payloads. Those scripts resolve
# realpaths and refuse anything outside the workspace root, so a local workspace
# inherits that confinement instead of re-implementing it.
# ---------------------------------------------------------------------------
LOCAL_CONNECTION_KIND = "local"


def _is_local_profile(profile: dict) -> bool:
    return str((profile or {}).get("kind") or "").lower() == LOCAL_CONNECTION_KIND


def _normalized_local_root(value: str) -> str | None:
    """Resolve a local workspace root, or None when it is not a usable directory.

    Unlike the remote side there is no shell to quote against, but the path still
    has to exist and be a real directory before a workspace is created — that is
    what turns a typo into a clear 400 instead of a confusing failure later.
    """
    raw = (value or "").strip()
    if not raw or len(raw) > 4096 or "\x00" in raw:
        return None
    try:
        candidate = Path(raw).expanduser().resolve(strict=True)
    except (OSError, ValueError, RuntimeError):
        return None
    return str(candidate) if candidate.is_dir() else None


def _local_run(
    profile: dict,
    script: str,
    path: str,
    *,
    input_data: bytes | None = None,
    timeout: int = 30,
) -> str:
    """Run a workspace script on the dashboard host, mirroring _ssh_run's contract.

    Same scripts, same argv shape and same RuntimeError-on-failure behaviour as
    the SSH path, so callers do not care which transport they got.
    """
    root = _normalized_local_root(str(profile.get("workspace_root") or ""))
    if root is None:
        raise RuntimeError("Local workspace folder is missing or is not a directory")
    result = subprocess.run(
        [sys.executable, "-c", script, "--", path],
        cwd=root,
        input=input_data,
        capture_output=True,
        timeout=timeout,
    )
    if result.returncode != 0:
        detail = result.stderr.decode("utf-8", "replace").strip().replace("\n", " ")
        raise RuntimeError((detail or "Local command failed")[:800])
    return result.stdout.decode("utf-8", "replace")


def _local_tmux_window_name(profile: dict, index: int = 0) -> str:
    """Index 0 keeps the original name so existing windows still resolve."""
    label = _tmux_safe_label(profile.get("label"), "local")
    name = f"local-{label[:28]}-{_tmux_window_suffix(profile)}"
    return name if index <= 0 else f"{name}-{int(index)}"


def _local_open_tmux_window(profile: dict, session_name: str, index: int = 0) -> str:
    """Open a shell in the workspace folder, the local twin of the SSH window."""
    if not shutil.which("tmux"):
        raise RuntimeError("tmux is not installed on the dashboard host")
    root = _normalized_local_root(str(profile.get("workspace_root") or ""))
    if root is None:
        raise RuntimeError("Local workspace folder is missing or is not a directory")
    window_name = _local_tmux_window_name(profile, index)
    existing = subprocess.run(
        ["tmux", "list-windows", "-t", session_name, "-F", "#{window_name}"],
        capture_output=True,
        timeout=8,
    )
    if window_name in existing.stdout.decode("utf-8", "replace").split():
        return window_name
    result = subprocess.run(
        ["tmux", "new-window", "-d", "-t", session_name, "-n", window_name, "-c", root],
        capture_output=True,
        timeout=10,
    )
    if result.returncode != 0:
        detail = result.stderr.decode("utf-8", "replace").strip().replace("\n", " ")
        raise RuntimeError((detail or "Could not open local tmux window")[:800])
    return window_name


def _ssh_run(
    profile: dict,
    session_name: str,
    remote_command: str,
    *,
    input_data: bytes | None = None,
    timeout: int = 30,
) -> str:
    # A local workspace has no control master; it runs the same script here.
    if _is_local_profile(profile):
        script, path = _local_command_parts(remote_command)
        return _local_run(profile, script, path, input_data=input_data, timeout=timeout)
    if not _ssh_control_is_alive(profile, session_name):
        raise RuntimeError("SSH connection is not live; reconnect from the Remote IDE")
    argv = _ssh_argv(profile)
    target = argv.pop()
    result = subprocess.run(
        [
            *argv,
            "-S", str(_ssh_control_socket(session_name, str(profile.get("id") or ""))),
            target,
            remote_command,
        ],
        input=input_data,
        capture_output=True,
        timeout=timeout,
    )
    if result.returncode != 0:
        detail = result.stderr.decode("utf-8", "replace").strip().replace("\n", " ")
        raise RuntimeError((detail or "SSH command failed")[:800])
    return result.stdout.decode("utf-8", "replace")


# Directory-only listing for the remote "Open Folder" picker. Unlike
# _SSH_LIST_SCRIPT this is NOT confined to the workspace root -- the whole point
# is choosing a new root -- so it returns directory names only and never file
# contents, and the caller must already hold an authenticated connection.
_SSH_BROWSE_SCRIPT = """
import json, os, sys
target = os.path.realpath(os.path.expanduser(sys.argv[-1] or '.'))
if not os.path.isdir(target):
    raise SystemExit('not a directory: ' + target)
entries = []
try:
    with os.scandir(target) as children:
        for entry in children:
            if entry.name.startswith('.'):
                continue
            try:
                if entry.is_dir(follow_symlinks=False):
                    entries.append({'name': entry.name,
                                    'path': os.path.join(target, entry.name)})
            except OSError:
                continue
except PermissionError:
    raise SystemExit('permission denied: ' + target)
entries.sort(key=lambda item: item['name'].lower())
parent = os.path.dirname(target)
print(json.dumps({
    'path': target,
    'parent': parent if parent != target else '',
    'entries': entries[:1000],
    'is_git': os.path.exists(os.path.join(target, '.git')),
}))
"""


_SSH_LIST_SCRIPT = """
import json, os, stat, sys
root = os.path.realpath('.')
path = os.path.realpath(sys.argv[-1])
if os.path.commonpath((root, path)) != root:
    raise RuntimeError('Path is outside the configured workspace root')
entries = []
with os.scandir(path) as children:
    for entry in children:
        try:
            info = entry.stat(follow_symlinks=False)
        except OSError:
            continue
        entries.append({
            'name': entry.name,
            'is_dir': stat.S_ISDIR(info.st_mode),
            'is_file': stat.S_ISREG(info.st_mode),
            'is_symlink': stat.S_ISLNK(info.st_mode),
            'size': info.st_size,
            'modified': info.st_mtime,
        })
entries.sort(key=lambda item: (not item['is_dir'], item['name'].lower()))
print(json.dumps({'path': sys.argv[-1], 'entries': entries}))
"""


_SSH_READ_SCRIPT = f"""
import base64, json, os, sys
root = os.path.realpath('.')
path = os.path.realpath(sys.argv[-1])
if os.path.commonpath((root, path)) != root:
    raise RuntimeError('Path is outside the configured workspace root')
if not os.path.isfile(path):
    raise RuntimeError('Not a regular file')
with open(path, 'rb') as handle:
    raw = handle.read({SSH_MAX_FILE_BYTES + 1})
if len(raw) > {SSH_MAX_FILE_BYTES}:
    raise RuntimeError('File exceeds the {SSH_MAX_FILE_BYTES // 1_000_000} MB IDE limit')
try:
    content = raw.decode('utf-8')
except UnicodeDecodeError:
    raise RuntimeError('Only UTF-8 text files can be opened in the IDE')
print(json.dumps({{'path': sys.argv[-1], 'content': content, 'size': len(raw), 'modified': os.path.getmtime(path)}}))
"""


_SSH_WRITE_SCRIPT = """
import base64, json, os, tempfile, sys
root = os.path.realpath('.')
path = os.path.realpath(sys.argv[-1])
if os.path.commonpath((root, path)) != root:
    raise RuntimeError('Path is outside the configured workspace root')
raw = base64.b64decode(sys.stdin.buffer.read(), validate=True)
directory = os.path.dirname(os.path.abspath(path)) or '.'
if not os.path.isdir(directory):
    raise RuntimeError('Parent directory does not exist')
mode = None
try:
    mode = os.stat(path).st_mode & 0o777
except FileNotFoundError:
    pass
fd, temporary = tempfile.mkstemp(prefix='.nemo-ide-', dir=directory)
try:
    with os.fdopen(fd, 'wb') as handle:
        handle.write(raw)
        handle.flush()
        os.fsync(handle.fileno())
    if mode is not None:
        os.chmod(temporary, mode)
    os.replace(temporary, path)
finally:
    try:
        os.unlink(temporary)
    except FileNotFoundError:
        pass
print(json.dumps({'ok': True, 'path': sys.argv[-1], 'size': len(raw)}))
"""


_SSH_FILESYSTEM_SCRIPT = """
import json, os, sys
request = json.loads(sys.argv[-1])
action = request['action']
root = os.path.realpath('.')
path = os.path.realpath(request['path'])
new_path = os.path.realpath(request.get('new_path', '')) if request.get('new_path') else ''
if os.path.commonpath((root, path)) != root or (new_path and os.path.commonpath((root, new_path)) != root):
    raise RuntimeError('Path is outside the configured workspace root')
if action == 'create_file':
    directory = os.path.dirname(os.path.abspath(path)) or '.'
    if not os.path.isdir(directory):
        raise RuntimeError('Parent directory does not exist')
    fd = os.open(path, os.O_WRONLY | os.O_CREAT | os.O_EXCL, 0o644)
    os.close(fd)
elif action == 'create_dir':
    os.mkdir(path)
elif action == 'rename':
    if os.path.lexists(new_path):
        raise RuntimeError('Destination already exists')
    directory = os.path.dirname(os.path.abspath(new_path)) or '.'
    if not os.path.isdir(directory):
        raise RuntimeError('Destination directory does not exist')
    os.rename(path, new_path)
elif action == 'delete':
    if os.path.islink(path) or os.path.isfile(path):
        os.unlink(path)
    elif os.path.isdir(path):
        os.rmdir(path)
    else:
        raise RuntimeError('File or folder does not exist')
else:
    raise RuntimeError('Unsupported filesystem action')
print(json.dumps({'ok': True, 'action': action, 'path': request['path'], 'new_path': request.get('new_path', '')}))
"""


_SSH_SEARCH_SCRIPT = """
import json, os, sys
request = json.loads(sys.argv[-1])
workspace_root = os.path.realpath('.')
root = os.path.realpath(request['path'])
if os.path.commonpath((workspace_root, root)) != workspace_root:
    raise RuntimeError('Path is outside the configured workspace root')
query = request['query'].casefold()
matches = []
for directory, subdirs, files in os.walk(root, followlinks=False):
    depth = os.path.relpath(directory, root).count(os.sep)
    if depth >= 12:
        subdirs[:] = []
    for name in sorted(files):
        if query in name.casefold():
            matches.append({'path': os.path.relpath(os.path.join(directory, name), root), 'name': name})
            if len(matches) >= 120:
                break
    if len(matches) >= 120:
        break
print(json.dumps({'path': root, 'matches': matches, 'truncated': len(matches) >= 120}))
"""


_SSH_GIT_SCRIPT = """
import json, os, shutil, subprocess, sys
request = json.loads(sys.argv[-1])
workspace_root = os.path.realpath('.')
root = os.path.realpath(request['path'])
if os.path.commonpath((workspace_root, root)) != workspace_root:
    raise RuntimeError('Path is outside the configured workspace root')
action = request['action']
commits = []
def git(*args):
    result = subprocess.run(['git', '-C', root, *args], text=True, capture_output=True, timeout=25)
    if result.returncode:
        raise RuntimeError((result.stderr or result.stdout or 'Git command failed').strip()[:1200])
    return result.stdout[:250000]
# A workspace that is not a repository is an ordinary state, not a crash: report
# it as data so the panel can say so, instead of raising and surfacing a raw
# Python traceback to the user.
probe = subprocess.run(['git', '-C', root, 'rev-parse', '--show-toplevel'],
                       text=True, capture_output=True, timeout=25)
if probe.returncode:
    print(json.dumps({'ok': False, 'not_a_repo': True, 'root': root,
                      'error': 'This folder is not a Git repository.'}))
    raise SystemExit(0)
if action == 'status':
    output = git('status', '--short', '--branch')
elif action == 'diff':
    output = git('diff', '--no-ext-diff', '--')
elif action == 'stage':
    output = git('add', '--', *request['files'])
elif action == 'unstage':
    output = git('restore', '--staged', '--', *request['files'])
elif action == 'commit':
    output = git('commit', '-m', request['message'])
elif action == 'switch':
    output = git('switch', request['branch'])
elif action == 'create_branch':
    output = git('switch', '-c', request['branch'])
elif action == 'diff_file':
    # One file's diff, named in files[0]. Staged changes live in the index, so
    # ask for both and show whichever has content -- otherwise a staged-only
    # file looks clean.
    target_file = request['files'][0]
    unstaged = git('diff', '--no-ext-diff', '--', target_file)
    output = unstaged or git('diff', '--no-ext-diff', '--cached', '--', target_file)
elif action == 'discard':
    # Restore tracked files; delete untracked ones, which `restore` cannot undo.
    tracked, untracked = [], []
    for item in request['files']:
        probe = subprocess.run(['git', '-C', root, 'ls-files', '--error-unmatch', '--', item],
                               text=True, capture_output=True, timeout=25)
        (tracked if probe.returncode == 0 else untracked).append(item)
    output = ''
    if tracked:
        output += git('restore', '--worktree', '--staged', '--', *tracked)
    for item in untracked:
        target = os.path.realpath(os.path.join(root, item))
        if os.path.commonpath((workspace_root, target)) != workspace_root:
            raise RuntimeError('Refusing to delete outside the workspace root')
        if os.path.isdir(target):
            shutil.rmtree(target, ignore_errors=True)
        elif os.path.exists(target):
            os.remove(target)
elif action == 'fetch':
    output = git('fetch', '--prune')
elif action == 'pull':
    output = git('pull', '--ff-only')
elif action == 'push':
    output = git('push')
elif action == 'log':
    # Unit-separated so a subject containing the delimiter cannot split a row.
    # `git log` fails on a repository with no commits yet ("unknown revision"),
    # which is an empty history rather than an error, so probe HEAD first.
    if subprocess.run(['git', '-C', root, 'rev-parse', '--verify', 'HEAD'],
                      capture_output=True, timeout=25).returncode:
        commits = []
    else:
        raw_log = git('log', '--max-count=100', '--date=short',
                      '--pretty=format:%H\x1f%h\x1f%an\x1f%ad\x1f%ar\x1f%D\x1f%s')
        commits = []
        for line in raw_log.splitlines():
            parts = line.split('\x1f')
            if len(parts) == 7:
                commits.append({'hash': parts[0], 'short': parts[1], 'author': parts[2],
                                'date': parts[3], 'relative': parts[4],
                                'refs': parts[5], 'subject': parts[6]})
    output = ''
elif action == 'show':
    # One commit's patch, for the history view's detail pane.
    output = git('show', '--no-ext-diff', '--stat', '--patch',
                 '--format=%H%n%an <%ae>%n%ad%n%n%s%n%n%b', request['ref'])
else:
    raise RuntimeError('Unsupported Git action')
def counts():
    # Ahead/behind vs the upstream, for the status bar's sync indicator. A
    # branch with no upstream simply has nothing to report.
    probe = subprocess.run(
        ['git', '-C', root, 'rev-list', '--left-right', '--count', '@{upstream}...HEAD'],
        text=True, capture_output=True, timeout=25)
    if probe.returncode:
        return 0, 0, False
    parts = (probe.stdout or '').split()
    return (int(parts[0]), int(parts[1]), True) if len(parts) == 2 else (0, 0, True)

behind, ahead, has_upstream = counts()
print(json.dumps({'ok': True, 'action': action, 'root': root, 'output': output,
                  'commits': commits,
                  'status': git('status', '--short', '--branch'),
                  'current_branch': git('branch', '--show-current').strip(),
                  'branches': git('branch', '--format=%(refname:short)').splitlines(),
                  'ahead': ahead, 'behind': behind, 'has_upstream': has_upstream}))
"""


_SSH_LSP_STATUS_SCRIPT = """
import json, shutil
servers = [
    ('python', 'pylsp'),
    ('python', 'basedpyright-langserver'),
    ('typescript', 'typescript-language-server'),
    ('go', 'gopls'),
    ('rust', 'rust-analyzer'),
]
available = [{'language': language, 'command': command} for language, command in servers if shutil.which(command)]
print(json.dumps({'available': available, 'bridge': 'not-configured'}))
"""


def _ssh_terminal_argv(profile: dict, session_name: str, index: int = 0) -> list[str]:
    """Attach a PTY to the session's existing SSH tmux window.

    Attaching to the window the connect step already opened means the browser
    terminal and the tmux window are the same shell, over the same authenticated
    control master -- rather than a second SSH login with its own credentials.
    `-r` is deliberately omitted: this view is interactive.
    """
    window_name = _ssh_tmux_window_name(profile, index)
    return [
        "tmux",
        "attach-session",
        "-t", f"{session_name}:={window_name}",
    ]


async def _ssh_terminal_pty(
    profile: dict, session_name: str, cols: int, rows: int, index: int = 0
):
    """Spawn the tmux client on a PTY sized to the browser's terminal."""
    primary, secondary = pty.openpty()
    try:
        process = await asyncio.create_subprocess_exec(
            *_ssh_terminal_argv(profile, session_name, index),
            stdin=secondary,
            stdout=secondary,
            stderr=secondary,
            start_new_session=True,
            env={**os.environ, "TERM": "xterm-256color"},
        )
    except BaseException:
        os.close(primary)
        os.close(secondary)
        raise
    # The child owns the secondary end; keeping it open here would stop us from
    # ever seeing EOF when the shell exits.
    os.close(secondary)
    _ssh_set_pty_size(primary, cols, rows, process.pid)
    return process, primary


def _ssh_set_pty_size(fd: int, cols: int, rows: int, pid: int | None = None) -> None:
    """Resize the PTY so full-screen remote programs render correctly.

    Setting the window size alone is not enough: the tmux client only re-reads
    it on SIGWINCH, so without the signal the remote view stays at whatever size
    it had when it attached.
    """
    safe_cols = max(20, min(int(cols or 80), 500))
    safe_rows = max(5, min(int(rows or 24), 200))
    try:
        fcntl.ioctl(fd, termios.TIOCSWINSZ, struct.pack("HHHH", safe_rows, safe_cols, 0, 0))
    except OSError:
        logger.debug("Could not set SSH terminal PTY size", exc_info=True)
        return
    if pid:
        try:
            os.kill(pid, signal.SIGWINCH)
        except (ProcessLookupError, PermissionError):
            logger.debug("Could not signal SSH terminal resize", exc_info=True)


class SSHConnectionBody(BaseModel):
    # kind="local" opens a folder on the dashboard host; host/username are then
    # unused, so they carry defaults instead of being required.
    kind: str = "ssh"
    label: str = ""
    host: str = ""
    username: str = ""
    port: int = 22
    identity_file: str = ""
    auth_mode: str = "agent"
    password: str = ""
    # A private key pasted into the browser, stored encrypted like a password
    # instead of requiring the key to be placed under ~/.ssh by hand.
    private_key: str = ""
    key_passphrase: str = ""
    workspace_root: str = "."
    max_file_bytes: int = SSH_MAX_FILE_BYTES


class SSHConnectBody(BaseModel):
    password: str = ""


class SSHRemoteFileBody(BaseModel):
    path: str
    content: str


class SSHRemoteFilesystemBody(BaseModel):
    action: str
    path: str
    new_path: str = ""


class SSHGitBody(BaseModel):
    action: str
    path: str = "."
    files: list[str] = []
    message: str = ""
    branch: str = ""
    ref: str = ""


def _ssh_ide_denied(request: Request) -> JSONResponse | None:
    """Any signed-in user may reach the IDE; per-connection ownership gates use."""
    if _current_user(request):
        return None
    return JSONResponse({"error": "Sign in to use the Remote SSH IDE"}, status_code=403)


def _ssh_ide_session_or_response(
    request: Request, session_name: str
) -> tuple[dict | None, JSONResponse | None]:
    """Resolve an owned tmux session before exposing its SSH workspace."""
    denied = _ssh_ide_denied(request)
    if denied:
        return None, denied
    _sessions, session = _find_session_for_user(session_name, _current_user(request))
    if not session:
        return None, JSONResponse({"error": "Session not found"}, status_code=404)
    return session, None


def _browse_roots(user: dict | None) -> list[Path]:
    """Directories this user may browse when picking a folder to open.

    An admin manages the host, so the filesystem root is in scope. A member is
    confined to their own project space -- the same boundary the rest of the
    dashboard enforces -- so the folder picker can never be used to enumerate
    another tenant's files.
    """
    if _is_admin(user):
        return [Path("/")]
    username = str((user or {}).get("username") or (user or {}).get("id") or "")
    if not username:
        return []
    return [PROJECTS_ROOT / username]


def _browse_path_allowed(candidate: Path, roots: list[Path]) -> bool:
    for root in roots:
        try:
            # Resolve the root too: comparing a resolved candidate against an
            # unresolved root fails for everything as soon as any component of
            # the path is a symlink.
            candidate.relative_to(root.resolve(strict=False))
            return True
        except (ValueError, OSError):
            continue
    return False


def _local_root_denied(request: Request, root: str) -> JSONResponse | None:
    """Refuse a local workspace root outside the caller's allowed area.

    The folder PICKER was tenant-scoped but connection creation was not, so a
    member could name any directory on the host directly (~/.ssh, /, the
    dashboard's own state) and get read/write through the file routes.
    """
    user = _current_user(request)
    roots = _browse_roots(user)
    if not roots:
        return JSONResponse({"error": "No browsable location for this account"}, status_code=403)
    try:
        resolved = Path(root).expanduser().resolve(strict=False)
    except (OSError, ValueError, RuntimeError):
        return JSONResponse({"error": "Invalid folder path"}, status_code=400)
    if not _browse_path_allowed(resolved, roots):
        return JSONResponse(
            {"error": "That folder is outside your allowed area"}, status_code=403
        )
    return None


async def _create_local_workspace(request: Request, session_name: str, body: SSHConnectionBody):
    """Register a folder on the dashboard host as an IDE workspace.

    Stored in the same file and shape as an SSH connection so listing, deleting,
    workspace-state resume and every file route treat both kinds identically.
    """
    root = _normalized_local_root(body.workspace_root)
    if root is None:
        return JSONResponse(
            {"error": "Enter an existing folder path on this server"}, status_code=400
        )
    denied = _local_root_denied(request, root)
    if denied:
        return denied
    if not 1_024 <= body.max_file_bytes <= SSH_MAX_FILE_BYTES:
        return JSONResponse({"error": "File limit must be between 1 KB and 1 MB"}, status_code=400)
    label = (body.label.strip() or Path(root).name or root)[:80]
    user = _current_user(request)
    connection_id = secrets.token_urlsafe(12)
    profile = {
        "id": connection_id,
        "kind": LOCAL_CONNECTION_KIND,
        "session_name": session_name,
        "label": label,
        "host": "",
        "username": "",
        "port": 22,
        "identity_file": "",
        "auth_mode": "local",
        "workspace_root": root,
        "max_file_bytes": body.max_file_bytes,
        "owner_id": str((user or {}).get("id") or ""),
        "owner_username": str((user or {}).get("username") or ""),
        "password_enc": "",
        "last_directory": ".",
        "created_at": time.time(),
    }

    def add(data: dict):
        data.setdefault("connections", []).append(profile)

    _ssh_connections_store().update(add)
    _harden_ssh_state_file(SSH_CONNECTIONS_FILE)
    return JSONResponse({"ok": True, "connection": _ssh_public_profile(profile)}, status_code=201)


class SSHWorkspaceRootBody(BaseModel):
    workspace_root: str
    label: str = ""


class SSHHostKeyBody(BaseModel):
    accept: bool = False


class SSHWorkspaceStateBody(BaseModel):
    tabs: list[str] = []
    active_path: str = ""
    last_directory: str = "."
    buffers: dict[str, str] = {}


def _ssh_profile_or_response(
    request: Request, session_name: str, connection_id: str
) -> tuple[dict | None, JSONResponse | None]:
    """Resolve a connection the caller owns.

    A connection belonging to someone else returns 404, not 403, so the response
    does not confirm that another user's connection id exists.
    """
    profile = _ssh_profile(session_name, connection_id, _current_user(request))
    if not profile:
        return None, JSONResponse({"error": "SSH connection not found"}, status_code=404)
    return profile, None
