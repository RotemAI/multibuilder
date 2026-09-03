"""Session launch and lifecycle: which agent runs, parking, and restore.

Extracted from app.py. Builds the launch command for a session's chosen agent
(Codex or Claude, with its model and effort flags), parks an idle session
without destroying its state, and restores one from the recorded working
directory.

Note the restore path: `_restore_parked_tmux_shell` recreates a session with
`tmux new-session -c <cwd>` from the lifecycle store. It is currently only
reachable via `_resume_parked_session`, which requires the `parked` flag -- a
session lost to a tmux server death is never marked parked, so nothing calls
this for it. See TODO.md.
"""

from __future__ import annotations

import asyncio
import json
import logging
import os
import re
import shlex
import subprocess
import time
from pathlib import Path

from core.config import (
    _CODEX_DOCS_MCP_OVERRIDE,
    _CODEX_DOCS_MCP_SERVER,
    _CODEX_DOCS_OVERRIDE_RE,
    _DISABLE_STALLED_OPENAI_DOCS_MCP,
    AUTH_USER,
    CLAUDE_EFFORTS,
    CLAUDE_SESSION_CMD,
    CODEX_API_FALLBACK_ENABLED,
    GIT_EMAIL_DOMAIN,
    MESSAGES_DIR,
    NEW_SESSION_CMD,
    PROJECTS_ROOT,
    PUB_URL,
    SESSION_LIFECYCLE_INTERVAL,
    SESSION_PARK_AFTER,
)
from core.state import _shared_store
from core.users import _is_admin
from runtime_control import scoped_codex_command
from services.tmux import (
    _find_session,
    _pane_is_dead,
    async_detect_activity,
    capture_pane_full,
    get_session_cwd,
    get_tmux_sessions,
)

logger = logging.getLogger("codex-dashboard")

# Injected by app.py; see configure().
_async_is_codex_running = None
_ensure_codex_running = None
_multi_tenant_enabled = None
_session_config_base = None
_session_has_autonomous_work = None
_session_last_activity = None
_user_codex_config_dir = None
_user_for_session = None
_session_lifecycle = None
_codex_home_mcp_servers = None
_user_claude_config_dir = None
_seen_claude_running = None
_terminal_channels = None
DEFAULT_MODEL = ""


def configure(**kw):
    """Bind app-level helpers; an unknown name raises instead of passing silently."""
    for key, value in kw.items():
        if key not in globals():
            raise TypeError(f"services.session_launch.configure: unknown dependency {key!r}")
        globals()[key] = value


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


SESSION_LIFECYCLE_FILE = MESSAGES_DIR / "session-lifecycle.json"


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
