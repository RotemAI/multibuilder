"""Public project serving and the Codex alert log.

Extracted from app.py. Serves each user's published project directory over
HTTP, resolves per-session project roots, and keeps the alert log the dashboard
shows when an agent reports a problem.

Path safety lives in core.validators (_path_within, _safe_seg); per-user
directory resolution is injected, since it depends on multi-tenant settings
that stay in app.py.
"""

from __future__ import annotations

import hashlib
import html
import json
import logging
import mimetypes
import os
import re
import select
import shutil
import subprocess
import threading
import time
import urllib.parse
from pathlib import Path

import uvicorn
from fastapi.responses import FileResponse, HTMLResponse, Response
from pydantic import BaseModel

from core.config import (
    BRAND_NAME,
    CODEX_HOME,
    MESSAGES_DIR,
    PORT,
    PROJECTS_ROOT,
    PUB_URL,
)
from core.io import _atomic_write_json
from core.validators import _html_escape, _path_within, _safe_seg
from services.tmux import get_session_cwd

logger = logging.getLogger("codex-dashboard")

# Injected by app.py; see configure().
_toml_escape = None
_backup_before_dashboard_write = None
_session_owner_id = None
_user_codex_config_dir = None
_user_data_dir = None


def configure(**kw):
    """Bind app-level helpers; an unknown name raises instead of passing silently."""
    for key, value in kw.items():
        if key not in globals():
            raise TypeError(f"services.projects.configure: unknown dependency {key!r}")
        globals()[key] = value


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


def _encode_project_path(cwd: str) -> str:
    """Mirror Codex's project-dir encoding: replace `/` and `_` with `-`."""
    return (cwd or "").replace("/", "-").replace("_", "-")


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


class ProjectFileBody(BaseModel):
    path: str
    content: str


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
