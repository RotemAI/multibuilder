"""Headless browser sessions: lifecycle, CDP driving, proxy and audit.

Extracted from app.py. Owns the browser session table, the per-session locks
and caches, the launcher script, and the audit trail -- state moves with the
functions that own it rather than being split across modules.

Route handlers stay in app.py. The handful of app-level helpers this module
needs (Codex config isolation, the controller IPC call) are injected via
configure() rather than imported, so this stays a leaf and cannot cycle back
into the application.
"""

from __future__ import annotations

import asyncio
import base64
import contextlib
import hashlib
import json
import logging
import os
import re
import secrets
import shlex
import shutil
import subprocess
import threading
import time
import urllib.parse
from datetime import datetime, timezone
from pathlib import Path

import httpx
import websockets
from fastapi import Request
from fastapi.responses import HTMLResponse, JSONResponse, Response
from pydantic import BaseModel

from core.config import (
    _DEFAULT_BROWSER_SESSION,
    BROWSER_LAUNCHER,
    BROWSER_LEASE_TTL,
    BROWSER_PARK_AFTER,
    BROWSER_POLICY_FILE,
    CB_ROOT,
    MESSAGES_DIR,
    PUBLIC_BASE_URL,
    ROOT_PATH,
)
from core.state import _shared_store
from core.users import _is_admin, _load_users
from runtime_control import (
    BrowserLeaseStore,
    LockedJsonStore,
    browser_start_argv,
    browser_unit_name,
    user_systemd_argv,
)

logger = logging.getLogger("codex-dashboard")

# Injected by app.py; see configure().
_backup_before_dashboard_write = None
_configure_member_codex_isolation = None
_controller_call = None
_ensure_user_codex_config_dir = None
_toml_escape = None
_user_codex_config_dir = None
client = None


def configure(**deps):
    """Wire in the app-level helpers this module deliberately does not import.

    Callers pass names without the leading underscore (`controller_call=...`);
    they are bound to this module's private globals. Doing the mapping here
    keeps the call site readable and means a typo raises rather than silently
    creating a new unused global.
    """
    for key, value in deps.items():
        name = key if key == "client" else f"_{key}"
        if name not in globals():
            raise TypeError(f"services.browser.configure: unknown dependency {key!r}")
        globals()[name] = value


BROWSER_LEASES_FILE = MESSAGES_DIR / "browser-leases.json"

BROWSER_RUNTIME_FILE = MESSAGES_DIR / "browser-runtime.json"

_ACCOUNT_BROWSER_CTX_BEGIN = "<!-- ACCOUNT BROWSER (managed) -->"

_ACCOUNT_BROWSER_CTX_END = "<!-- END ACCOUNT BROWSER -->"

# Capabilities that mean the account can actually authorize Claude Code. A free
# account lists only ["chat"] and the authorize page answers "Claude Max or Pro
# is required" — so cookies alone are NOT enough to call a browser login-ready.
_PAID_CAPS = ("claude_pro", "claude_max", "pro", "max", "team", "enterprise", "raven")

_browser_leases = BrowserLeaseStore(BROWSER_LEASES_FILE)


_browser_runtime = LockedJsonStore(
    BROWSER_RUNTIME_FILE, lambda: {"version": 1, "browsers": {}}
)


def _sync_account_browser_context(
    codex_md: Path,
    user: dict,
    browser: dict,
) -> None:
    """Tell Codex which owner-bound browser its Playwright MCP controls."""
    original = codex_md.read_text() if codex_md.exists() else ""
    existing = original
    if _ACCOUNT_BROWSER_CTX_BEGIN in existing and _ACCOUNT_BROWSER_CTX_END in existing:
        pre = existing.split(_ACCOUNT_BROWSER_CTX_BEGIN, 1)[0]
        post = existing.split(_ACCOUNT_BROWSER_CTX_END, 1)[1]
        existing = pre.rstrip("\n") + "\n" + post.lstrip("\n")
    if (
        str(browser.get("owner_id", "")) != str(user.get("id", ""))
        or not browser.get("account_browser")
    ):
        updated = existing
    else:
        audit_cli = Path(__file__).resolve().with_name("browser_audit_cli.py")
        block = (
            f"{_ACCOUNT_BROWSER_CTX_BEGIN}\n"
            "## Your private account browser\n"
            f"`playwright-browser` is bound to browser "
            f"`{browser.get('id', '')}` for owner `{user.get('id', '')}`. Never "
            "connect to another account's browser, profile, CDP/VNC port, "
            "screenshots, history, or output directory.\n"
            f"Before browser work, read `{BROWSER_POLICY_FILE}` and follow its "
            "execution hierarchy, resource limits, proxy rules, and live-view "
            "policy. Record each escalation and important audit event with:\n"
            f"`python3 {audit_cli} --browser {browser.get('id', '')} "
            f"--owner {user.get('id', '')} --action \"describe the event\"`\n"
            f"{_ACCOUNT_BROWSER_CTX_END}\n"
        )
        if block in original:
            return
        updated = block + "\n" + existing.lstrip("\n")
    if updated != original:
        codex_md.parent.mkdir(parents=True, exist_ok=True)
        _backup_before_dashboard_write(codex_md)
        codex_md.write_text(updated)
    if codex_md == Path.home() / ".codex" / "AGENTS.md":
        mirror = Path.home() / "AGENTS.md"
        if not mirror.exists() or mirror.read_bytes() != codex_md.read_bytes():
            _backup_before_dashboard_write(mirror)
            mirror.write_bytes(codex_md.read_bytes())


def _tenant_browser_id(user: dict) -> str:
    """Stable, non-identifying browser id for one dashboard member."""
    user_id = str((user or {}).get("id") or "member")
    return "acct-" + hashlib.sha256(user_id.encode("utf-8")).hexdigest()[:12]


def _browser_owner_id(session: dict) -> str:
    """Return the account that owns a browser, migrating legacy metadata."""
    owner_id = str(session.get("owner_id") or "").strip()
    if owner_id:
        return owner_id
    tenant_user_id = str(session.get("tenant_user_id") or "").strip()
    if tenant_user_id:
        return tenant_user_id
    # Browser rows created before account isolation were admin-owned tools.
    return "admin"


def _ensure_tenant_browser(user: dict) -> dict:
    """Provision a parked, persistent browser profile for one member.

    Records are cheap: Chrome/Xvfb are still started only while a lease exists.
    The transaction prevents two API workers creating the same account browser
    with different ports.
    """
    if not user or _is_admin(user):
        return dict(_DEFAULT_BROWSER_SESSION)
    sid = _tenant_browser_id(user)
    snapshot = _load_browser_sessions()
    store = LockedJsonStore(BROWSER_SESSIONS_FILE, lambda: {"sessions": snapshot})

    def mutate(data: dict) -> dict:
        sessions = data.get("sessions")
        if not isinstance(sessions, list):
            sessions = [dict(row) for row in snapshot]
            data["sessions"] = sessions
        found = next((row for row in sessions if row.get("id") == sid), None)
        if found:
            found["owner_id"] = str(user.get("id") or "")
            found["account_browser"] = True
            found.pop("tenant_user_id", None)
            found["lifecycle_managed"] = True
            return dict(found)
        used = {int(row.get("slot", 0) or 0) for row in sessions}
        slot = 1
        while slot in used:
            slot += 1
        row = {
            "id": sid,
            "name": f"{str(user.get('username') or 'member')[:40]} browser",
            "slot": slot,
            "display": 99 + slot,
            "rfb_port": 5900 + slot,
            "vnc_port": 6080 + slot,
            "cdp_port": 9222 + slot,
            "managed": True,
            "lifecycle_managed": True,
            "owner_id": str(user.get("id") or ""),
            "account_browser": True,
            "created_at": time.time(),
        }
        sessions.append(row)
        return dict(row)

    _data, browser = store.update(mutate)
    return browser


def _user_can_access_browser(user: dict | None, browser_id: str) -> bool:
    """Allow browser access only to the account that owns it."""
    if not user:
        return False
    browser = _browser_session_by_id(browser_id)
    return bool(browser) and _browser_owner_id(browser) == str(user.get("id") or "")


def _ensure_browser_mcp(cfg_dir: Path, user: dict | None = None) -> bool:
    """Give each Codex home a call-scoped, account-isolated browser lease."""
    cfg = cfg_dir / "config.toml"
    begin = "# BEGIN GRABO PLAYWRIGHT MCP (managed)"
    end = "# END GRABO PLAYWRIGHT MCP"
    try:
        browser = _ensure_tenant_browser(user) if user and not _is_admin(user) else dict(_DEFAULT_BROWSER_SESSION)
        browser_id = _toml_escape(str(browser.get("id") or "default"))
        cdp_port = int(browser.get("cdp_port") or 9222)
        output_dir = _toml_escape(str(Path.home() / ".playwright-mcp" / browser_id))
        proxy = _toml_escape(str(Path(__file__).resolve().parent / "browser_mcp_lease_proxy.py"))
        block = (
            f"{begin}\n"
            "[mcp_servers.playwright-browser]\n"
            'command = "python3"\n'
            f'args = ["{proxy}"]\n'
            "\n[mcp_servers.playwright-browser.env]\n"
            f'TMUX_DASH_BROWSER_ID = "{browser_id}"\n'
            f'TMUX_DASH_BROWSER_CDP_PORT = "{cdp_port}"\n'
            f'TMUX_DASH_BROWSER_OUTPUT_DIR = "{output_dir}"\n'
            f"{end}\n"
        )
        existing = cfg.read_text() if cfg.exists() else ""
        if begin in existing and end in existing:
            current = re.search(
                rf"{re.escape(begin)}.*?{re.escape(end)}",
                existing,
                flags=re.DOTALL,
            )
            if current and current.group(0).strip() == block.strip():
                return False
            existing = re.sub(
                rf"\n?{re.escape(begin)}.*?{re.escape(end)}\n?",
                "\n",
                existing,
                flags=re.DOTALL,
            ).rstrip() + "\n"
        elif re.search(r"^\s*\[mcp_servers\.playwright-browser\]\s*$", existing, re.MULTILINE):
            # Migrate the old direct, always-connected CDP server. Stop at the
            # next TOML table so unrelated MCP credentials remain byte-for-byte.
            existing = re.sub(
                r"\n?^\s*\[mcp_servers\.playwright-browser\]\s*$.*?(?=^\s*\[|\Z)",
                "\n",
                existing,
                flags=re.MULTILINE | re.DOTALL,
            ).rstrip() + "\n"
        updated = existing.rstrip() + "\n\n" + block if existing.strip() else block
        _backup_before_dashboard_write(cfg)
        cfg.parent.mkdir(parents=True, exist_ok=True)
        cfg.write_text(updated)
        return True
    except Exception:
        logger.debug("Failed to write Playwright MCP entry into %s", cfg, exc_info=True)
        return False


async def _proxy_to_port(request: Request, port: int, subpath: str):
    url = f"http://127.0.0.1:{port}/{subpath}"
    if request.url.query:
        url += "?" + request.url.query
    body = await request.body()
    req = urllib.request.Request(url, data=body or None, method=request.method)
    for h in ("content-type", "accept", "user-agent"):
        v = request.headers.get(h)
        if v:
            req.add_header(h, v)

    def _do():
        return urllib.request.urlopen(req, timeout=30)
    try:
        resp = await asyncio.to_thread(_do)
        return Response(content=resp.read(), status_code=resp.status,
                        media_type=resp.headers.get("Content-Type", "application/octet-stream"))
    except urllib.error.HTTPError as e:
        return Response(content=e.read(), status_code=e.code,
                        media_type=e.headers.get("Content-Type", "text/plain"))
    except Exception:
        return HTMLResponse(
            f"Project server isn't reachable on port {port} (is it running?).",
            status_code=502,
        )


# ============================ Browser sessions ==============================
# Manage one or more independent "Claude browser" backends (each its own Xvfb
# display + x11vnc + websockify + headful Chrome/CDP) and expose their noVNC
# viewers SAME-ORIGIN through this dashboard, so extra sessions are reachable
# without needing a separate public browser host. The DEFAULT session is the
# pre-existing systemd browser on display :99 / port 6080.
BROWSER_SESSIONS_FILE = MESSAGES_DIR / "browser_sessions.json"


BROWSER_AUDIT_ROOT = MESSAGES_DIR / "browser-audit"


_browser_starting: dict[str, float] = {}


_browser_sessions_lock = threading.Lock()


_browser_operation_locks: dict[str, asyncio.Lock] = {}


BROWSER_AUDIT_RETENTION_SECONDS = 7 * 24 * 60 * 60


BROWSER_AUDIT_MAX_EVENTS = 120


_browser_audit_lock = threading.Lock()


_browser_capture_state: dict[str, dict] = {}


# The launcher is self-bootstrapped (write-if-missing) so the feature is portable
# and doesn't depend on a hand-placed file. Mirrors the pre-existing default
# browser's start scripts, parameterized per session (display/ports/profile).
_BROWSER_LAUNCHER_SCRIPT = r'''#!/usr/bin/env bash
# Parameterized EXTRA "Claude browser" session — a second/third independent
# browser alongside the default one (display :99). Each gets its OWN Xvfb
# display, fluxbox, x11vnc, websockify (localhost — reached via the tmux-dashboard
# reverse proxy) and a persistent headful Chrome with its own CDP + profile,
# and its own proxy identity (its own residential exit IP).
#   start:  browser-session.sh start <id> <display> <rfbport> <vncport> <cdpport> <headed|headless>
#   stop:   browser-session.sh stop  <id>
set -uo pipefail
export HOME=/home/nimrod_rotem
# shellcheck source=/home/nimrod_rotem/.claude-browser/bin/chrome-common.sh
source "$HOME/.claude-browser/bin/chrome-common.sh"
ACTION="${1:-}"; ID="${2:-}"
[ -z "$ACTION" ] || [ -z "$ID" ] && { echo "usage: browser-session.sh start|stop <id> ..."; exit 2; }
BASE="$CB_ROOT/sessions/$ID"
LOGS="$BASE/logs"; PROFILE="$BASE/profile"; PIDS="$BASE/pids"
if [ "$ID" = "default" ]; then PROFILE="$CB_ROOT/profile"; fi

if [ "$ACTION" = "stop" ]; then
  if [ -f "$PIDS" ]; then
    while read -r p; do [ -n "$p" ] && kill "$p" 2>/dev/null; done < "$PIDS"
    sleep 1
    while read -r p; do [ -n "$p" ] && kill -9 "$p" 2>/dev/null; done < "$PIDS"
  fi
  # The default profile lives outside sessions/default, so its command line
  # does not match the historical session-directory pkill below. Match the
  # exact persistent profile flag as a recovery net for a stale/missing PID
  # file; this never removes the profile itself.
  pkill -f -- "--user-data-dir=$PROFILE" 2>/dev/null || true
  pkill -f "\.claude-browser/sessions/$ID/" 2>/dev/null || true
  rm -f "$PIDS"
  echo "stopped session $ID"
  exit 0
fi

DISP="${3:?display}"; RFB="${4:?rfbport}"; VNC="${5:?vncport}"; CDP="${6:?cdpport}"
MODE="${7:-headless}"
mkdir -p "$LOGS" "$PROFILE"
: > "$PIDS"

cleanup() {
  if [ -f "$PIDS" ]; then
    while read -r p; do [ -n "$p" ] && kill "$p" 2>/dev/null || true; done < "$PIDS"
  fi
}
trap cleanup EXIT TERM INT

# Own loopback proxy port => own sticky residential IP, so two browsers look
# like two different people to any site they both visit.
if [ -x "$CB_BIN/proxy-ctl.py" ]; then
  python3 "$CB_BIN/proxy-ctl.py" session add "$ID" --port "$((3128 + DISP - 99))" >>"$LOGS/proxy.log" 2>&1 || true
  sleep 6   # let the relay notice the config change and bind the port
fi

if [ "$MODE" = "headed" ]; then
  export DISPLAY=":$DISP"
  rm -f "/tmp/.X${DISP}-lock" 2>/dev/null || true
  Xvfb ":$DISP" -screen 0 "${CB_SCREEN_W}x${CB_SCREEN_H}x24" -nolisten tcp -ac >"$LOGS/xvfb.log" 2>&1 & echo $! >> "$PIDS"
  for i in $(seq 1 50); do [ -S "/tmp/.X11-unix/X${DISP}" ] && break; sleep 0.2; done
  fluxbox >"$LOGS/fluxbox.log" 2>&1 & echo $! >> "$PIDS"
  x11vnc -display ":$DISP" -localhost -rfbport "$RFB" -nopw -forever -shared -noxdamage \
    >"$LOGS/x11vnc.log" 2>&1 & echo $! >> "$PIDS"
  websockify --web=/usr/share/novnc "127.0.0.1:$VNC" "127.0.0.1:$RFB" \
    >"$LOGS/novnc.log" 2>&1 & echo $! >> "$PIDS"
else
  unset DISPLAY
fi

cb_chrome_env "$ID"
mapfile -t FLAGS < <(cb_chrome_flags "$PROFILE" "$CDP" "$ID")
printf '[%s] %s\n' "$(date -Is)" "${FLAGS[*]}" >>"$LOGS/chrome-flags.log"
EXTRA_FLAGS=()
if [ "$MODE" = "headless" ]; then
  EXTRA_FLAGS+=(--headless=new --disable-gpu --window-size="${CB_SCREEN_W},${CB_SCREEN_H}")
fi
dbus-run-session -- google-chrome-stable "${FLAGS[@]}" "${EXTRA_FLAGS[@]}" \
  "about:blank" >"$LOGS/chrome.log" 2>&1 & CHROME_PID=$!; echo "$CHROME_PID" >> "$PIDS"

echo "started session $ID mode $MODE display :$DISP rfb $RFB vnc $VNC cdp $CDP"
wait "$CHROME_PID"
'''


def _ensure_browser_launcher():
    """Keep the on-disk launcher in sync with the copy above.

    It used to be write-if-missing, which meant a launcher written before the
    anti-fingerprinting work stayed frozen at the old flags forever — new
    browsers would still start with --no-sandbox/--disable-gpu and no proxy.
    Rewrite whenever the content differs instead (it's ours; nothing else
    edits it)."""
    p = Path(BROWSER_LAUNCHER)
    try:
        if not p.exists() or p.read_text() != _BROWSER_LAUNCHER_SCRIPT:
            p.parent.mkdir(parents=True, exist_ok=True)
            p.write_text(_BROWSER_LAUNCHER_SCRIPT)
            p.chmod(0o755)
            logger.info("Browser launcher script written to %s", p)
    except Exception:
        logger.debug("Failed to write browser launcher", exc_info=True)


def _load_browser_sessions() -> list:
    try:
        if BROWSER_SESSIONS_FILE.exists():
            d = json.loads(BROWSER_SESSIONS_FILE.read_text())
            sessions = d.get("sessions") if isinstance(d, dict) else d
            if isinstance(sessions, list):
                if not any(s.get("id") == "default" for s in sessions):
                    sessions = [dict(_DEFAULT_BROWSER_SESSION)] + sessions
                else:
                    # Refresh the default entry's derived fields (especially ports)
                    # from code — a copy persisted before those
                    # changed would otherwise pin stale values forever. Only the
                    # user-editable name/notes survive from disk.
                    for s in sessions:
                        if s.get("id") == "default":
                            keep = {k: s[k] for k in ("name", "notes") if k in s}
                            s.clear()
                            s.update(_DEFAULT_BROWSER_SESSION)
                            s.update(keep)
                # Migrate member browser rows written by the first tenant
                # implementation. The explicit owner field is shared by the
                # browser API, Codex MCP binding, audit log, and lifecycle.
                changed = False
                for s in sessions:
                    legacy_owner = str(s.get("tenant_user_id") or "").strip()
                    if legacy_owner and not s.get("owner_id"):
                        s["owner_id"] = legacy_owner
                        changed = True
                    if legacy_owner and not s.get("account_browser"):
                        s["account_browser"] = True
                        changed = True
                    if "tenant_user_id" in s:
                        s.pop("tenant_user_id", None)
                        changed = True
                if changed:
                    _save_browser_sessions(sessions)
                return sessions
    except Exception:
        logger.debug("Failed to load browser sessions", exc_info=True)
    return [dict(_DEFAULT_BROWSER_SESSION)]


def _save_browser_sessions(sessions: list):
    try:
        MESSAGES_DIR.mkdir(parents=True, exist_ok=True)
        BROWSER_SESSIONS_FILE.write_text(json.dumps({"sessions": sessions}, indent=2))
    except Exception:
        logger.debug("Failed to save browser sessions", exc_info=True)


def _browser_session_by_id(sid: str) -> dict:
    for s in _load_browser_sessions():
        if s.get("id") == sid:
            return s
    return {}


def _browser_port_alive(port: int) -> bool:
    import socket
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            s.settimeout(0.4)
            return s.connect_ex(("127.0.0.1", int(port))) == 0
    except Exception:
        return False


def _browser_runtime_row(sid: str) -> dict:
    return dict(_browser_runtime.read().get("browsers", {}).get(sid, {}))


def _set_browser_runtime(sid: str, **fields) -> dict:
    now = time.time()

    def mutate(value: dict) -> dict:
        row = value.setdefault("browsers", {}).setdefault(sid, {})
        row.update(fields)
        row["updated_at"] = now
        return dict(row)

    _value, row = _browser_runtime.update(mutate)
    return row


def _browser_process_alive(browser: dict) -> bool:
    """Headless browsers expose CDP; headed browsers additionally expose VNC."""
    return _browser_port_alive(int(browser.get("cdp_port") or 0))


def _browser_running(browser: dict) -> bool:
    """Compatibility name for Chrome/CDP readiness."""
    return _browser_process_alive(browser)


def _browser_live_streaming(browser: dict) -> bool:
    """Return whether this browser's optional noVNC bridge is reachable."""
    return _browser_port_alive(int(browser.get("vnc_port") or 0))


def _default_browser_systemctl(action: str, browser: dict) -> bool:
    candidates = []
    for unit in (
        str(browser.get("systemd_unit") or "").strip(),
        "claude-browser.service",
        "claude-vnc.service",
    ):
        if unit and unit not in candidates:
            candidates.append(unit)
    for unit in candidates:
        commands = (["systemctl", action, unit], ["sudo", "-n", "systemctl", action, unit])
        for command in commands:
            try:
                result = subprocess.run(command, capture_output=True, text=True, timeout=45)
                if result.returncode == 0:
                    return True
            except Exception:
                continue
    return False


def _stop_browser_local(browser: dict, *, reason: str) -> bool:
    sid = str(browser.get("id") or "")
    if browser.get("managed") or browser.get("lifecycle_managed"):
        unit = browser_unit_name(sid)
        subprocess.run(
            user_systemd_argv("systemctl", "--user", "stop", unit),
            capture_output=True,
            text=True,
            timeout=45,
        )
        if sid == "default":
            # Retire the old always-on system units. The controller's transient
            # user unit restores the same persistent profile on the next lease.
            _default_browser_systemctl("stop", browser)
            for desktop_unit in ("claude-desktop.service", "claude-vnc-desktop.service"):
                subprocess.run(
                    ["sudo", "-n", "systemctl", "stop", desktop_unit],
                    capture_output=True,
                    text=True,
                    timeout=45,
                )
        subprocess.run(
            ["bash", BROWSER_LAUNCHER, "stop", sid],
            capture_output=True,
            text=True,
            timeout=45,
        )
    else:
        _default_browser_systemctl("stop", browser)
    stopped = not _browser_process_alive(browser)
    _set_browser_runtime(
        sid,
        running=not stopped,
        mode="parked" if stopped else _browser_runtime_row(sid).get("mode", "headed"),
        parked_at=time.time() if stopped else 0,
        park_reason=reason,
    )
    return stopped


def _browser_operation_lock(sid: str) -> asyncio.Lock:
    lock = _browser_operation_locks.get(sid)
    if lock is None:
        lock = asyncio.Lock()
        _browser_operation_locks[sid] = lock
    return lock


async def _stop_browser_controlled(browser: dict, *, reason: str) -> bool:
    """Serialize shutdown and never stop a browser with a live lease."""
    sid = str(browser.get("id") or "")
    async with _browser_operation_lock(sid):
        leases = await asyncio.to_thread(_browser_leases.snapshot)
        if leases.get("by_browser", {}).get(sid):
            return False
        return await asyncio.to_thread(_stop_browser_local, browser, reason=reason)


async def _start_browser_unlocked(browser: dict, mode: str) -> bool:
    sid = str(browser.get("id") or "")
    mode = "headed" if mode == "headed" else "headless"
    # The legacy default browser is a host unit. It remains headed until that
    # unit is migrated, but it still obeys explicit leases and idle shutdown.
    desired_mode = mode if browser.get("managed") or browser.get("lifecycle_managed") else "headed"
    runtime = _browser_runtime_row(sid)
    alive = await asyncio.to_thread(_browser_process_alive, browser)
    if alive and not runtime:
        current_mode = (
            "headed"
            if await asyncio.to_thread(_browser_port_alive, int(browser.get("vnc_port") or 0))
            else "headless"
        )
        runtime = _set_browser_runtime(
            sid, running=True, mode=current_mode, last_used_at=time.time(), adopted=True
        )
    if alive and runtime.get("mode") == desired_mode:
        _set_browser_runtime(sid, running=True, last_used_at=time.time())
        return True
    if alive and runtime.get("mode") not in (None, desired_mode):
        await asyncio.to_thread(_stop_browser_local, browser, reason="mode switch")

    if browser.get("managed") or browser.get("lifecycle_managed"):
        _ensure_browser_launcher()
        # Clear a failed/finished transient unit before reusing its stable name.
        await asyncio.to_thread(
            subprocess.run,
            user_systemd_argv(
                "systemctl", "--user", "reset-failed", browser_unit_name(sid)
            ),
            capture_output=True,
            text=True,
            timeout=15,
        )
        argv = browser_start_argv(BROWSER_LAUNCHER, browser, mode=desired_mode)
        manager = await asyncio.to_thread(
            subprocess.run,
            user_systemd_argv("systemctl", "--user", "show-environment"),
            capture_output=True,
            text=True,
            timeout=10,
        )
        # A scope keeps the foreground launcher and its full Chrome/Xvfb tree in
        # one cgroup. systemd-run therefore remains alive for the browser's
        # lifetime and must itself be launched asynchronously.
        launch_argv = argv if manager.returncode == 0 else argv[-9:]
        await asyncio.to_thread(
            subprocess.Popen,
            launch_argv,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
            start_new_session=True,
        )
    else:
        await asyncio.to_thread(_default_browser_systemctl, "start", browser)

    ready_ports = [int(browser.get("cdp_port") or 0)]
    if desired_mode == "headed":
        ready_ports.append(int(browser.get("vnc_port") or 0))
    ready = False
    for _ in range(40):
        port_states = await asyncio.gather(
            *(asyncio.to_thread(_browser_port_alive, port) for port in ready_ports)
        )
        if all(port_states):
            ready = True
            break
        await asyncio.sleep(0.5)
    _set_browser_runtime(
        sid,
        running=ready,
        mode=desired_mode if ready else "failed",
        started_at=time.time() if ready else 0,
        last_used_at=time.time(),
        parked_at=0,
        unit=browser_unit_name(sid) if ready else "",
    )
    return ready


async def _start_browser_local(browser: dict, mode: str) -> bool:
    """Serialize starts/mode switches and discard stale lifecycle decisions."""
    sid = str(browser.get("id") or "")
    async with _browser_operation_lock(sid):
        leases = await asyncio.to_thread(_browser_leases.snapshot)
        if not leases.get("by_browser", {}).get(sid):
            return False
        return await _start_browser_unlocked(browser, mode)


async def _acquire_browser_lease_local(
    sid: str, *, kind: str, owner: str, ttl: int, mode: str
) -> dict:
    browser = _browser_session_by_id(sid)
    if not browser:
        return {"ok": False, "error": "browser session not found"}
    lease = await asyncio.to_thread(
        _browser_leases.acquire, sid, kind=kind, owner=owner, ttl=ttl
    )
    leases = await asyncio.to_thread(_browser_leases.snapshot)
    browser_leases = [
        row for row in leases.get("leases", []) if row.get("browser_id") == sid
    ]
    mode = (
        "headed"
        if mode == "headed" or any(row.get("kind") == "viewer" for row in browser_leases)
        else "headless"
    )
    ready = await _start_browser_local(browser, mode)
    if not ready:
        await asyncio.to_thread(_browser_leases.release, lease["token"])
        return {"ok": False, "error": f"browser {sid} failed to start"}
    _set_browser_runtime(
        sid,
        running=True,
        last_used_at=time.time(),
        mode=(mode if browser.get("managed") or browser.get("lifecycle_managed") else "headed"),
    )
    return {"ok": True, "lease": lease, "browser": _browser_response_row(browser)}


async def _browser_lifecycle_loop() -> None:
    """Park Chrome/Xvfb only after every explicit lease is gone and grace elapsed."""
    while True:
        try:
            snapshot = await asyncio.to_thread(_browser_leases.snapshot)
            active = snapshot.get("by_browser", {})
            lease_rows = snapshot.get("leases", [])
            now = time.time()
            for browser in _load_browser_sessions():
                sid = str(browser.get("id") or "")
                alive = await asyncio.to_thread(_browser_process_alive, browser)
                runtime = _browser_runtime_row(sid)
                if alive and not runtime:
                    runtime = _set_browser_runtime(
                        sid, running=True, mode="headed", last_used_at=now, adopted=True
                    )
                if active.get(sid):
                    wanted = (
                        "headed"
                        if any(
                            row.get("browser_id") == sid and row.get("kind") == "viewer"
                            for row in lease_rows
                        )
                        else "headless"
                    )
                    if runtime.get("mode") != wanted:
                        alive = await _start_browser_local(browser, wanted)
                    _set_browser_runtime(sid, running=alive, last_used_at=now)
                    continue
                last_used = float(runtime.get("last_used_at") or now)
                if alive and now - last_used >= BROWSER_PARK_AFTER:
                    stopped = await _stop_browser_controlled(
                        browser, reason=f"no active lease for {BROWSER_PARK_AFTER}s"
                    )
                    logger.info("Browser '%s' idle-parked=%s", sid, stopped)
        except asyncio.CancelledError:
            raise
        except Exception:
            logger.exception("Browser lifecycle pass failed")
        await asyncio.sleep(min(60, max(15, BROWSER_PARK_AFTER // 4)))


def _next_browser_slot(sessions: list) -> int:
    used = {int(s.get("slot", 0)) for s in sessions}
    k = 1
    while k in used:
        k += 1
    return k


def _claim_browser_proxy_session(session: dict) -> None:
    """Give one browser exclusive ownership of its loopback proxy port."""
    sid = str(session.get("id") or "").strip()
    display = int(session.get("display") or 0)
    if not sid or display < 99:
        return
    local_port = 3128 + display - 99
    conf = _proxy_conf()
    proxy_sessions = conf.setdefault("sessions", {})
    if not isinstance(proxy_sessions, dict):
        proxy_sessions = {}
        conf["sessions"] = proxy_sessions
    changed = False
    for other_sid, other in list(proxy_sessions.items()):
        if (
            other_sid != sid
            and isinstance(other, dict)
            and int(other.get("local_port") or 0) == local_port
        ):
            proxy_sessions.pop(other_sid, None)
            changed = True
    row = proxy_sessions.setdefault(sid, {})
    if int(row.get("local_port") or 0) != local_port:
        row["local_port"] = local_port
        changed = True
    if not row.get("session_id"):
        row["session_id"] = secrets.token_hex(5)
        changed = True
    if "enabled" not in row:
        row["enabled"] = True
        changed = True
    if changed:
        _proxy_save(conf)


def _release_browser_proxy_sessions(session_ids: set[str]) -> None:
    """Release proxy identities owned by browser records being retired."""
    if not session_ids:
        return
    conf = _proxy_conf()
    proxy_sessions = conf.get("sessions")
    if not isinstance(proxy_sessions, dict):
        return
    changed = False
    for sid in session_ids:
        if proxy_sessions.pop(sid, None) is not None:
            changed = True
    if changed:
        _proxy_save(conf)


def _ensure_user_browser_session(user: dict, *, start: bool = True) -> dict:
    """Provision one persistent browser and bind it to the account's Codex home.

    Browser processes remain lease-driven. ``start`` claims the account's
    private proxy identity, but does not bypass the controller's idle lifecycle.
    """
    if not user or not str(user.get("id") or "").strip():
        return {}
    with _browser_sessions_lock:
        user_id = str(user.get("id") or "")
        owned = [
            session
            for session in _load_browser_sessions()
            if _browser_owner_id(session) == user_id
            and session.get(
                "account_browser",
                session.get("id") == "default",
            )
        ]
        browser = next(
            (session for session in owned if session.get("use_for_login")),
            owned[0] if owned else None,
        )
        if browser is None:
            browser = _ensure_tenant_browser(user)
        if not browser:
            return {}
        cfg_dir = _user_codex_config_dir(user)
        if cfg_dir.exists():
            if not _is_admin(user) and (cfg_dir / "config.toml").exists():
                _configure_member_codex_isolation(cfg_dir, user, browser)
            _sync_account_browser_context(
                cfg_dir / "AGENTS.md",
                user,
                browser,
            )
        if start and browser.get("managed"):
            _claim_browser_proxy_session(browser)
        return browser


def _ensure_all_user_browser_sessions() -> None:
    """Refresh account configuration and ensure one browser record per user."""
    for user in _load_users():
        if not _is_admin(user):
            try:
                _ensure_user_codex_config_dir(user)
            except Exception:
                logger.exception(
                    "Failed to refresh Codex context for account '%s'",
                    user.get("id", ""),
                )
        try:
            _ensure_user_browser_session(user, start=False)
        except Exception:
            logger.exception(
                "Failed to provision browser for account '%s'",
                user.get("id", ""),
            )


def _delete_user_browser_session(user_id: str) -> None:
    """Stop and remove only account browsers owned by a deleted user."""
    with _browser_sessions_lock:
        sessions = _load_browser_sessions()
        owned = [
            session
            for session in sessions
            if _browser_owner_id(session) == str(user_id)
            and bool(session.get("account_browser"))
        ]
        for session in owned:
            sid = str(session.get("id") or "")
            if session.get("managed"):
                subprocess.run(
                    ["bash", BROWSER_LAUNCHER, "stop", sid],
                    capture_output=True,
                    text=True,
                    timeout=45,
                )
            _browser_starting.pop(sid, None)
            if re.fullmatch(r"[A-Za-z0-9._-]+", sid) and sid not in (".", ".."):
                session_dir = CB_ROOT / "sessions" / sid
                if session_dir.exists():
                    shutil.rmtree(session_dir, ignore_errors=True)
        if owned:
            owned_ids = {id(session) for session in owned}
            _save_browser_sessions([
                session for session in sessions if id(session) not in owned_ids
            ])
            _release_browser_proxy_sessions({
                str(session.get("id") or "") for session in owned
            })


def _browser_viewer_url(s: dict) -> str:
    """Same-origin noVNC URL for a session, proxied by this dashboard. The `path`
    param is host-absolute (incl. ROOT_PATH) so noVNC connects the websocket back
    through the /browser/<id>/websockify proxy route.

    `reconnect` is forced ON: noVNC defaults it to false, so ANY transient drop
    (laptop sleep, wifi blip, proxy restart) left a dead "Disconnected" screen
    that only a manual reload fixed — the "windows keep logging off" symptom.
    `shared` keeps several viewers (inline preview + opened tab) on one session
    instead of the newcomer kicking the others off."""
    sid = s.get("id")
    root = ROOT_PATH.strip("/")
    wspath = (root + "/" if root else "") + f"browser/{sid}/websockify"
    return (f"{ROOT_PATH}/browser/{sid}/vnc.html?path={wspath}"
            "&autoconnect=true&resize=scale&shared=true"
            "&reconnect=true&reconnect_delay=2000")


def _browser_external_url(s: dict) -> str:
    """Public Direct-link URL for this dashboard host, when one is configured."""
    base = PUBLIC_BASE_URL.rstrip("/")
    return base + _browser_viewer_url(s) if base else ""


def _browser_response_row(s: dict) -> dict:
    """Add request-independent viewer links without persisting derived URLs."""
    row = dict(s)
    row["viewer_url"] = _browser_viewer_url(s)
    external_url = _browser_external_url(s)
    if external_url:
        row["external_url"] = external_url
    else:
        row.pop("external_url", None)
    return row


class BrowserCreateBody(BaseModel):
    name: str = ""


class BrowserLeaseBody(BaseModel):
    kind: str = "agent"
    mode: str = "headless"
    owner: str = ""
    ttl: int = BROWSER_LEASE_TTL


class BrowserPatchBody(BaseModel):
    name: str | None = None
    notes: str | None = None
    use_for_login: bool | None = None


BROWSER_PROXY_CONF = CB_ROOT / "proxy.json"


BROWSER_PROXY_USAGE = CB_ROOT / "state" / "proxy-usage.json"


def _browser_profile_dir(session: dict) -> Path:
    """Return the persistent Chrome profile directory for one browser."""
    if session.get("id") == "default":
        return CB_ROOT / "profile"
    return CB_ROOT / "sessions" / str(session.get("id") or "") / "profile"


def _proxy_presets() -> dict:
    """Provider credential templates, from the relay (the schema owner)."""
    try:
        import sys as _sys
        p = str(CB_ROOT / "bin")
        if p not in _sys.path:
            _sys.path.insert(0, p)
        import proxy_relay  # type: ignore
        return proxy_relay.PRESETS
    except Exception:
        return {}


def _proxy_conf() -> dict:
    try:
        return json.loads(BROWSER_PROXY_CONF.read_text())
    except Exception:
        return {}


def _proxy_save(conf: dict):
    CB_ROOT.mkdir(parents=True, exist_ok=True)
    tmp = BROWSER_PROXY_CONF.with_suffix(".tmp")
    tmp.write_text(json.dumps(conf, indent=2))
    os.chmod(tmp, 0o600)          # provider credentials live in here
    tmp.replace(BROWSER_PROXY_CONF)
    os.chmod(BROWSER_PROXY_CONF, 0o600)


def _proxy_usage() -> dict:
    try:
        return json.loads(BROWSER_PROXY_USAGE.read_text()).get("sessions", {})
    except Exception:
        return {}


async def _proxy_exit_info(local_port: int, timeout: float = 20) -> dict:
    """What the outside world sees for a browser — fetched THROUGH its own
    loopback port, so it reflects exactly what that browser's traffic does."""
    url = _proxy_conf().get("verify_url") or "https://ipinfo.io/json"
    proxy = f"http://127.0.0.1:{int(local_port)}"
    try:
        try:
            client = httpx.AsyncClient(proxy=proxy, timeout=timeout)
        except TypeError:                      # httpx < 0.28
            client = httpx.AsyncClient(proxies=proxy, timeout=timeout)
        async with client as c:
            r = await c.get(url)
            if r.status_code != 200:
                return {"error": f"HTTP {r.status_code}"}
            d = r.json()
            org = str(d.get("org", ""))
            d["datacenter"] = any(k in org.lower() for k in (
                "google", "amazon", "microsoft", "digitalocean", "ovh", "hetzner",
                "linode", "oracle", "contabo"))
            return d
    except Exception as e:
        return {"error": str(e)[:200]}


class BrowserProxyBody(BaseModel):
    enabled: bool | None = None
    provider: str | None = None
    host: str | None = None
    port: int | None = None
    username: str | None = None
    password: str | None = None
    zone: str | None = None
    country: str | None = None


# --- Driving a browser session over CDP -------------------------------------
# Minimal Chrome DevTools Protocol client: open a tab, evaluate JS in it, close
# it. Used to read a browser's claude.ai login state and to click through the
# Claude Code OAuth authorize page automatically.
_browser_busy: dict[str, dict] = {}   # sid -> {"what": str, "since": float}


async def _browser_busy_ctx(sid: str, what: str):
    """Hold a headless lease for programmatic work and release it on exit."""
    _browser_busy[sid] = {"what": what, "since": time.time()}
    lease_token = ""
    try:
        result = await _controller_call(
            "browser_acquire",
            browser_id=sid,
            kind="agent",
            owner=what,
            ttl=max(BROWSER_LEASE_TTL, 600),
            mode="headless",
        )
        if not result.get("ok"):
            raise RuntimeError(result.get("error") or f"browser {sid} is unavailable")
        lease_token = str((result.get("lease") or {}).get("token") or "")
        yield
    finally:
        if lease_token:
            await _controller_call("browser_release", token=lease_token)
        _browser_busy.pop(sid, None)


class _CdpTab:
    """One CDP-attached tab."""

    def __init__(self, ws):
        self._ws = ws
        self._n = 0
        self.events: list = []      # CDP events seen (used to catch the code URL)

    async def call(self, method: str, params: dict = None, timeout: float = 30):
        self._n += 1
        mid = self._n
        await self._ws.send(json.dumps({"id": mid, "method": method, "params": params or {}}))
        deadline = time.time() + timeout
        while time.time() < deadline:
            raw = await asyncio.wait_for(self._ws.recv(), timeout=max(1, deadline - time.time()))
            msg = json.loads(raw)
            if msg.get("id") == mid:
                if "error" in msg:
                    raise RuntimeError(msg["error"].get("message", "CDP error"))
                return msg.get("result", {})
            if msg.get("method"):
                self.events.append(msg)     # don't drop events while awaiting a reply
        raise TimeoutError(f"CDP {method} timed out")

    async def drain(self, seconds: float):
        """Collect events for a while (when nothing else is in flight)."""
        end = time.time() + seconds
        while time.time() < end:
            try:
                raw = await asyncio.wait_for(self._ws.recv(), timeout=max(0.2, end - time.time()))
            except Exception:
                break
            msg = json.loads(raw)
            if msg.get("method"):
                self.events.append(msg)

    def urls_seen(self) -> list:
        """Every URL seen in a request/response/navigation event."""
        out = []
        for e in self.events:
            p, meth = e.get("params", {}), e.get("method", "")
            if meth == "Network.requestWillBeSent":
                out.append(p.get("request", {}).get("url", ""))
            elif meth == "Network.responseReceived":
                out.append(p.get("response", {}).get("url", ""))
            elif meth in ("Page.frameRequestedNavigation", "Page.navigatedWithinDocument"):
                out.append(p.get("url", ""))
        return [u for u in out if u]

    async def eval(self, expression: str, timeout: float = 30):
        """Evaluate JS (awaiting a promise if one is returned) and return the value."""
        res = await self.call("Runtime.evaluate", {
            "expression": expression, "returnByValue": True,
            "awaitPromise": True, "userGesture": True,
        }, timeout=timeout)
        if res.get("exceptionDetails"):
            raise RuntimeError(str(res["exceptionDetails"].get("text", "JS exception")))
        return res.get("result", {}).get("value")

    async def navigate(self, url: str, settle: float = 1.5):
        await self.call("Page.navigate", {"url": url})
        for _ in range(40):
            await asyncio.sleep(0.5)
            try:
                if await self.eval("document.readyState") == "complete":
                    break
            except Exception:
                continue
        await asyncio.sleep(settle)   # let client-side rendering finish

    async def wait_for(self, js_predicate: str, timeout: float = 30, interval: float = 0.5):
        """Poll a JS expression until it returns truthy; returns the value or None."""
        deadline = time.time() + timeout
        while time.time() < deadline:
            try:
                v = await self.eval(js_predicate)
                if v:
                    return v
            except Exception:
                pass
            await asyncio.sleep(interval)
        return None


def _browser_audit_dir(session: dict) -> Path:
    """Return a private, browser-specific audit directory."""
    sid = str(session.get("id") or "")
    if not re.fullmatch(r"[A-Za-z0-9._-]+", sid):
        sid = hashlib.sha256(sid.encode("utf-8")).hexdigest()[:24]
    return BROWSER_AUDIT_ROOT / sid


def _safe_browser_audit_url(url: str) -> tuple[str, str]:
    """Retain location context while dropping query secrets and fragments."""
    try:
        parts = urllib.parse.urlsplit(str(url or ""))
        if parts.scheme not in ("http", "https"):
            return str(url or "")[:500], ""
        safe = urllib.parse.urlunsplit(
            (parts.scheme, parts.netloc, parts.path or "/", "", "")
        )
        return safe[:1000], parts.hostname or ""
    except Exception:
        return str(url or "")[:500], ""


def _browser_network_route(session: dict) -> str:
    """Describe routing without persisting proxy credentials or sticky IDs."""
    try:
        conf = _proxy_conf()
        route = (conf.get("sessions") or {}).get(str(session.get("id") or "")) or {}
        if conf.get("enabled") and route.get("enabled", True) and route.get("local_port"):
            return "residential-proxy"
    except Exception:
        logger.debug("Could not resolve browser route", exc_info=True)
    return "direct"


def _prune_browser_audit_locked(audit_dir: Path) -> None:
    event_file = audit_dir / "events.jsonl"
    if not event_file.exists():
        return
    now = time.time()
    rows = []
    for line in event_file.read_text(errors="replace").splitlines():
        try:
            row = json.loads(line)
            timestamp = datetime.fromisoformat(
                str(row.get("timestamp") or "").replace("Z", "+00:00")
            ).timestamp()
            if now - timestamp <= BROWSER_AUDIT_RETENTION_SECONDS:
                rows.append(row)
        except Exception:
            continue
    rows = rows[-BROWSER_AUDIT_MAX_EVENTS:]
    keep = {str(row.get("screenshot") or "") for row in rows if row.get("screenshot")}
    for image_path in audit_dir.glob("*.jpg"):
        if image_path.name not in keep:
            try:
                image_path.unlink()
            except OSError:
                logger.debug("Could not prune browser screenshot %s", image_path)
    event_file.write_text(
        "".join(json.dumps(row, separators=(",", ":")) + "\n" for row in rows)
    )
    event_file.chmod(0o600)


def _append_browser_audit(session: dict, record: dict) -> None:
    audit_dir = _browser_audit_dir(session)
    with _browser_audit_lock:
        audit_dir.mkdir(parents=True, exist_ok=True)
        audit_dir.chmod(0o700)
        event_file = audit_dir / "events.jsonl"
        with event_file.open("a", encoding="utf-8") as handle:
            handle.write(json.dumps(record, separators=(",", ":")) + "\n")
        event_file.chmod(0o600)
        _prune_browser_audit_locked(audit_dir)


def _read_browser_audit(session: dict, limit: int = 60) -> list[dict]:
    event_file = _browser_audit_dir(session) / "events.jsonl"
    try:
        lines = event_file.read_text(errors="replace").splitlines()
    except FileNotFoundError:
        return []
    except OSError:
        logger.debug("Could not read browser audit %s", event_file, exc_info=True)
        return []
    rows = []
    for line in reversed(lines):
        try:
            row = json.loads(line)
        except Exception:
            continue
        if isinstance(row, dict):
            rows.append(row)
        if len(rows) >= max(1, min(int(limit), BROWSER_AUDIT_MAX_EVENTS)):
            break
    return rows


async def _browser_primary_target(session: dict) -> dict:
    cdp_port = int(session.get("cdp_port") or 0)
    if not cdp_port:
        return {}
    try:
        async with httpx.AsyncClient(timeout=8) as client:
            response = await client.get(f"http://127.0.0.1:{cdp_port}/json/list")
            response.raise_for_status()
            targets = response.json()
    except Exception:
        return {}
    pages = [
        target
        for target in targets
        if target.get("type") == "page" and target.get("webSocketDebuggerUrl")
    ]
    return next(
        (
            target
            for target in pages
            if not str(target.get("url") or "").startswith(
                ("about:blank", "chrome://", "devtools://")
            )
        ),
        pages[0] if pages else {},
    )


async def _capture_browser_screenshot(
    session: dict,
    action: str,
    *,
    task_id: str = "",
    execution_mode: str = "",
) -> dict:
    """Capture the active page and append sanitized, owner-local audit data."""
    sid = str(session.get("id") or "")
    target = await _browser_primary_target(session)
    target_url, domain = _safe_browser_audit_url(target.get("url") or "")
    now = datetime.now(timezone.utc)
    event_id = now.strftime("%Y%m%dT%H%M%S%fZ") + "-" + secrets.token_hex(3)
    screenshot_name = f"{event_id}.jpg"
    runtime_mode = str(_browser_runtime_row(sid).get("mode") or "")
    record = {
        "id": event_id,
        "session_id": sid,
        "task_id": str(task_id or "")[:120],
        "timestamp": now.isoformat(),
        "url": target_url,
        "domain": domain,
        "action": str(action or "manual capture")[:120],
        "execution_mode": execution_mode or runtime_mode or "headless",
        "network_route": _browser_network_route(session),
        "screenshot": "",
    }
    if not target:
        record["error"] = "No browser page is available"
        await asyncio.to_thread(_append_browser_audit, session, record)
        return {"ok": False, "error": record["error"], "event": record}
    try:
        ws = await websockets.connect(
            target["webSocketDebuggerUrl"],
            max_size=None,
            ping_interval=None,
            open_timeout=8,
        )
        try:
            tab = _CdpTab(ws)
            await tab.call("Page.enable", timeout=8)
            shot = await tab.call(
                "Page.captureScreenshot",
                {
                    "format": "jpeg",
                    "quality": 55,
                    "fromSurface": True,
                    "captureBeyondViewport": False,
                },
                timeout=15,
            )
        finally:
            await ws.close()
        image = base64.b64decode(str(shot.get("data") or ""), validate=True)
        if not image:
            raise RuntimeError("Chrome returned an empty screenshot")
        audit_dir = _browser_audit_dir(session)
        audit_dir.mkdir(parents=True, exist_ok=True)
        audit_dir.chmod(0o700)
        screenshot_path = audit_dir / screenshot_name
        await asyncio.to_thread(screenshot_path.write_bytes, image)
        screenshot_path.chmod(0o600)
        record["screenshot"] = screenshot_name
        await asyncio.to_thread(_append_browser_audit, session, record)
        _browser_capture_state[sid] = {
            "last_ts": time.time(),
            "last_url": target_url,
        }
        return {"ok": True, "event": record}
    except Exception as exc:
        record["error"] = f"{type(exc).__name__}: {exc}"[:300]
        await asyncio.to_thread(_append_browser_audit, session, record)
        logger.info("Browser screenshot '%s' failed: %s", sid, record["error"])
        return {"ok": False, "error": record["error"], "event": record}


async def _cdp_tab(cdp_port: int, url: str = "about:blank"):
    """Open a throwaway tab on a browser session's CDP endpoint, yield it, close it."""
    base = f"http://127.0.0.1:{cdp_port}"
    quoted = urllib.parse.quote(url, safe="")
    target = None
    async with httpx.AsyncClient(timeout=20) as c:
        # Chrome >=111 wants PUT for /json/new; older builds only allow GET.
        try:
            r = await c.put(f"{base}/json/new?{quoted}")
            if r.status_code >= 400:
                raise RuntimeError(str(r.status_code))
            target = r.json()
        except Exception:
            r = await c.get(f"{base}/json/new?{quoted}")
            r.raise_for_status()
            target = r.json()
    ws = await websockets.connect(target["webSocketDebuggerUrl"], max_size=None, ping_interval=None)
    tab = _CdpTab(ws)
    try:
        await tab.call("Page.enable")
        await tab.call("Runtime.enable")
        yield tab
    finally:
        try:
            await ws.close()
        except Exception:
            pass
        try:
            async with httpx.AsyncClient(timeout=10) as c:
                await c.get(f"{base}/json/close/{target['id']}")
        except Exception:
            logger.debug("Failed to close CDP tab %s", target.get("id"), exc_info=True)


_browser_auth_cache: dict[str, dict] = {}   # sid -> {"data": {...}, "ts": float}


_BROWSER_AUTH_TTL = 120


async def _browser_claude_account(sid: str, cdp_port: int, force: bool = False) -> dict:
    """Is this browser signed into claude.ai, as whom, and can that account
    authorize Claude Code? Reads claude.ai's own API in a background tab so the
    session cookies are used. Cached, so the header poll stays cheap."""
    cached = _browser_auth_cache.get(sid)
    if cached and not force and time.time() - cached["ts"] < _BROWSER_AUTH_TTL:
        return cached["data"]
    out = {"logged_in": False, "email": "", "can_authorize": False,
           "capabilities": [], "error": ""}
    try:
        async with _browser_busy_ctx(sid, "checking claude.ai login"):
            async with _cdp_tab(cdp_port) as tab:
                await tab.navigate("https://claude.ai/api/organizations", settle=0.8)
                txt = ((await tab.eval("document.body ? document.body.innerText : ''")) or "").strip()
                if txt.startswith("["):
                    orgs = json.loads(txt)
                    out["logged_in"] = True
                    caps = []
                    for o in orgs:
                        caps += [str(x).lower() for x in (o.get("capabilities") or [])]
                        nm = o.get("name") or ""
                        if "@" in nm and not out["email"]:
                            out["email"] = nm.split("'")[0]
                    out["capabilities"] = sorted(set(caps))
                    out["can_authorize"] = any(c in _PAID_CAPS for c in caps)
                    if not out["can_authorize"]:
                        out["error"] = "signed in, but this account has no Max/Pro plan"
                elif "just a moment" in txt.lower() or "cloudflare" in txt.lower():
                    out["error"] = "Cloudflare challenge — retry"
                else:
                    out["error"] = "not signed in to claude.ai"
    except Exception as e:
        out["error"] = f"{type(e).__name__}: {e}"
    _browser_auth_cache[sid] = {"data": out, "ts": time.time()}
    return out


def _pick_login_browser(user: dict | None = None) -> dict:
    """Pick a login browser without crossing the effective account boundary."""
    user_id = str((user or {}).get("id") or "admin")
    sessions = [
        session
        for session in _load_browser_sessions()
        if _browser_owner_id(session) == user_id
    ]
    for s in sessions:
        if s.get("use_for_login"):
            return s
    for s in sessions:
        blob = f"{s.get('name','')} {s.get('notes','')}".lower()
        if "login" in blob or "auth" in blob or "sign in" in blob:
            return s
    for s in sessions:
        if s.get("id") == "default":
            return s
    return sessions[0] if sessions else {}
