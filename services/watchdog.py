"""Session watchdogs: stall detection, crash recovery, login repair, /tmp guard.

Extracted from app.py. Each loop watches one failure mode of a running agent
session and nudges, restarts, or re-authenticates it. The tuning constants and
the per-session state each loop keeps live here with them.

State note: the dicts and sets below are mutated in place, never rebound, so
the handful of app.py functions that also touch them (session delete, park and
resume) share the same objects through the re-export -- there is no second copy
to drift.

All app-level helpers are injected via configure(); this module reaches deep
into session control and importing those would cycle back into the app.
"""

from __future__ import annotations

import asyncio
import hashlib
import json
import logging
import os
import re
import shutil
import subprocess
import time
from pathlib import Path

from core.config import _GO_NUTS_SKILLS_DIR, _SKILLS_DIR, AUTO_AUTH_ENABLED, MESSAGES_DIR
from services.autonomous import (
    _UNSTICK_PROMPT_AWAY,
    _UNSTICK_PROMPT_GONUTS,
    _away_log,
    _away_mode_continuous_loop,
    _away_mode_state,
    _away_send_prompt,
    _go_nuts_continuous_loop,
    _go_nuts_log,
    _go_nuts_state,
)
from services.tmux import (
    _looks_like_bare_shell,
    async_detect_activity,
    capture_pane_recent,
    get_tmux_sessions,
)

logger = logging.getLogger("codex-dashboard")

# Injected by app.py; see configure().
_detect_interactive_prompt = None
_looks_like_fresh_claude_session = None
_pane_is_recoverable_shell = None
_pick_login_browser = None
_active_openai_key = None
_asserts_completion = None
_async_is_claude_running = None
_async_is_codex_running = None
_auto_auth_session = None
_auto_fix_login = None
_build_project_isolation_preamble = None
_codex_auth_health = None
_codex_failure_excerpt = None
_ensure_codex_running = None
_get_autopush_mode = None
_has_pending_user_input = None
_load_session_owners = None
_looks_destructive = None
_parse_autopilot_decision = None
_record_codex_alert = None
_repair_member_codex_auth = None
_resolve_codex_alerts = None
_save_autonomous_state = None
_session_lifecycle = None
_username_for_session = None
llm_call = None


def configure(**kw):
    """Bind app-level helpers; an unknown name raises instead of passing silently."""
    for key, value in kw.items():
        if key not in globals():
            raise TypeError(f"services.watchdog.configure: unknown dependency {key!r}")
        globals()[key] = value


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


_crash_recovery_state: dict[str, dict] = {}


_seen_claude_running: set = set()       # sessions observed running Codex this process


_CODEX_HEALTH_INTERVAL = 60        # seconds between fleet sweeps


_CODEX_HEALTH_COOLDOWN = 120       # min seconds between relaunches per session


_codex_health_state: dict[str, dict] = {}


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


_watchdog_snapshots: dict[str, dict] = {}


_WATCHDOG_INTERVAL = 30         # Check every 30 seconds


_STALL_THRESHOLD = 600          # 10 minutes of identical terminal = stalled


_NUDGE_COOLDOWN = 180           # Wait 3 minutes between nudge attempts


_MAX_NUDGES_BEFORE_RESTART = 3  # After 3 failed nudges, hard-restart the mode


_NUDGE_PROMPT = """You appear to be idle or stuck. The user is not present — you are in autonomous mode.

If you just finished a task: pick the next one and start working. Check your skill files and backlog.
If you're waiting for something: cancel the wait (Ctrl+C if needed) and move to a different task.
If you encountered an error: log it, revert if needed, and continue with the next item.

Do NOT say "standing by" or ask for instructions. Take action NOW."""


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
