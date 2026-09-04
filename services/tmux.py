"""tmux session inspection and agent activity detection.

Extracted from app.py. Owns the pane-capture helpers, the regexes that read an
agent's on-screen state, the process-tree and visibility caches, and the
heuristics that decide whether a pane is working, idle, or stuck.

This is the layer most sensitive to an agent CLI changing its output: the
_RE_* patterns and the glyph sets below are what break when Codex or Claude
alters its spinner or prompt characters, so they are kept together and close
to the functions that consume them.
"""

from __future__ import annotations

import asyncio
import hashlib
import logging
import os
import re
import subprocess
import time

from core.validators import _is_valid_session_name
from runtime_control import SessionLifecycleStore

logger = logging.getLogger("codex-dashboard")

# Injected by app.py; see configure().
_has_pending_user_input = None
_session_lifecycle = None


def configure(**deps):
    """Bind app-level helpers; an unknown name raises instead of passing silently."""
    for key, value in deps.items():
        if key not in globals():
            raise TypeError(f"services.tmux.configure: unknown dependency {key!r}")
        globals()[key] = value


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


# `\S.*?` rather than `\w+`: the agents' status lines are multi-word phrases
# ("Finding the GRABO index.html…", "Compacting conversation…"), and requiring
# the ellipsis to follow a single word meant none of them matched. The session
# then read as idle while the agent was working, and the chat captured the
# status line itself as the reply -- a turn that never updated again.
_RE_SPINNER_START = re.compile(_SPINNER_ICONS + r'\s+\S.*?(?:…|\.{2,3})')


_RE_SPINNER_INLINE = re.compile(
    _SPINNER_ICONS + r'\s+\S.*?(?:…|\.{2,3})(?:\s*\(.*?\))?\s*$'
)


# The status footer carries its own elapsed time and interrupt hint. Matching it
# directly means a working agent is still detected even if the spinner glyph
# scrolls off or the CLI changes its icon set -- the failure mode that has bitten
# this dashboard before.
_RE_STATUS_FOOTER = re.compile(
    r'\(\s*\d+\s*[smh][^)]*\besc to interrupt\b', re.IGNORECASE
)


_RE_THOUGHT = re.compile(r'\(thought for \d+')


_RE_SHELL_PROMPT = re.compile(r'[\$#%>]\s*$')


_RE_IDLE_PROMPT = re.compile(r'^[❯➜]\s*$')


_RE_TIP_CODEX = re.compile(r'Tip:.*codex')


_RE_COMPLETION_MSG = re.compile(r'[A-Z][a-zé]+ for \d+[ms]')


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
            # "(1m 49s · esc to interrupt)" — the agent's own status footer.
            # Checked independently of the spinner glyph so a changed icon set
            # cannot make a working session look idle.
            if _RE_STATUS_FOOTER.search(stripped):
                info["status"] = "busy"
                info["detail"] = "Working"
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


def _pane_text(session_name: str, lines: int = 60) -> str:
    """Pane text with wrapped lines joined (-J), so a long URL is captured whole."""
    try:
        return subprocess.run(
            ["tmux", "capture-pane", "-t", session_name, "-p", "-J", "-S", f"-{lines}"],
            capture_output=True, text=True, timeout=10).stdout or ""
    except Exception:
        return ""


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
