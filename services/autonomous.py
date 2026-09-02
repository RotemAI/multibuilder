"""Autonomous session modes: Away and Go Nuts.

Extracted from app.py. These drive a session unattended -- pinging the agent,
detecting a stall, and escalating through phased prompts -- so the prompt text
and the per-session mode state live here together with the loops that use them.

Every app-level helper is injected via configure(): these loops reach deep into
session control (resume, capture, activity detection, the LLM call), and
importing those would point this module back at the application.
"""

from __future__ import annotations

import asyncio
import json
import logging
import os
import re
import subprocess
import tempfile
import time
from pathlib import Path

from pydantic import BaseModel

from core.config import _GO_NUTS_SKILLS_DIR, _SKILLS_DIR

logger = logging.getLogger("codex-dashboard")

# Injected by app.py; see configure().
_build_project_isolation_preamble = None
_ensure_codex_running = None
_find_session = None
_resume_parked_session = None
_save_autonomous_state = None
async_detect_activity = None
capture_pane_full = None
capture_pane_recent = None
llm_call = None
# A callable, not a copy: _shutting_down is rebound at runtime in app.py, and a
# snapshot taken at import would report the startup value forever.
def is_shutting_down() -> bool:
    """Replaced by configure(); default keeps the module importable alone."""
    return False


_GO_NUTS_LOG_CAP = 200


def configure(**deps):
    """Bind app-level helpers; an unknown name raises rather than passing silently."""
    for key, value in deps.items():
        if key not in globals():
            raise TypeError(f"services.autonomous.configure: unknown dependency {key!r}")
        globals()[key] = value


# Away mode state per session
_away_mode_state: dict[str, dict] = {}


# Go Nuts mode state per session (same structure as away mode)
_go_nuts_state: dict[str, dict] = {}


class GoNutsModeBody(BaseModel):
    enabled: bool


_UNSTICK_PROMPT_AWAY = """You are in Away Mode. The system detected you were stuck and restarted your task loop.

Your previous work is preserved on the current branch. Pick up where you left off:
1. Run `pwd` to confirm you are in the correct project directory
2. Check git log to see what you've already done
3. Check /tmp/ for your session-specific notes (files prefixed with your session name)
4. Pick the next most valuable skill to execute

IMPORTANT: Only work on files within your current project directory. Do not touch other projects.

Available skills are at: {skills_dir}/
Read a SKILL.md file and execute its tasks. Take action immediately."""


_UNSTICK_PROMPT_GONUTS = """You are in Go Nuts Mode. The system detected you were stuck and restarted your task loop.

Your previous work is preserved on the current branch. Pick up where you left off:
1. Run `pwd` to confirm you are in the correct project directory
2. Check git log to see what you've already built
3. Check /tmp/ for your session-specific notes (files prefixed with your session name)
4. Pick the next feature to build or generate new ideas

IMPORTANT: Only work on files within your current project directory. Do not touch other projects.

Available skills are at: {skills_dir}/
Read a SKILL.md file and execute its tasks. Build something NOW."""


async def _away_mode_continuous_loop(session_name: str):
    """Standalone continuous loop for away mode (used by watchdog restart)."""
    log = logging.getLogger("away-mode")
    state = _away_mode_state[session_name]
    try:
        # Wait for the unstick prompt to be processed
        await _away_wait_for_idle(session_name, timeout=600)

        cycle = state.get("step", 0) + 1
        consecutive_errors = 0
        while state.get("enabled"):
            try:
                _away_log(state, f"Monitoring for idle (cycle {cycle})...")
                idle_since = None
                while state.get("enabled"):
                    await asyncio.sleep(10)
                    try:
                        activity = await async_detect_activity(session_name)
                    except Exception:
                        activity = {"status": "unknown"}
                    if activity["status"] == "idle":
                        if idle_since is None:
                            idle_since = time.time()
                        elif time.time() - idle_since >= 90:
                            break
                    else:
                        idle_since = None

                if not state.get("enabled"):
                    return

                # Ensure Codex is running before sending prompt (OOM recovery)
                codex_ok = await _ensure_codex_running(session_name, _away_log, state)
                if not codex_ok:
                    _away_log(state, "Codex dead and couldn't restart — stopping away mode")
                    state["enabled"] = False
                    _save_autonomous_state()
                    return

                state["step"] = cycle
                state["step_name"] = f"Ping cycle {cycle}"
                _away_log(state, f"Session idle 90s — task ping (cycle {cycle})")
                await _away_send_and_wait(session_name, _AWAY_PING_PROMPT, state,
                                           f"Task ping cycle {cycle}", timeout=900)
                cycle += 1
                consecutive_errors = 0
                _save_autonomous_state()  # Periodic save after each successful cycle
                await asyncio.sleep(5)

            except asyncio.CancelledError:
                raise
            except Exception as e:
                consecutive_errors += 1
                _away_log(state, f"Cycle {cycle} error ({consecutive_errors}): {e}")
                log.error(f"Away mode cycle error for '{session_name}': {e}")
                if consecutive_errors >= 5:
                    await asyncio.sleep(300)
                    consecutive_errors = 0
                else:
                    await asyncio.sleep(30)

    except asyncio.CancelledError:
        if is_shutting_down():
            _away_log(state, "Away mode (restarted) cancelled (server shutdown — will restore)")
        else:
            _away_log(state, "Away mode (restarted) cancelled")
            state["enabled"] = False
            _save_autonomous_state()
        raise
    except Exception as e:
        _away_log(state, f"Away mode (restarted) error: {e}")
        log.error(f"Away mode restarted loop error for '{session_name}': {e}")
        _save_autonomous_state()  # Save state so watchdog can recover
        # Don't set enabled=False — let watchdog zombie detection restart us
    finally:
        state["task"] = None


async def _go_nuts_continuous_loop(session_name: str):
    """Standalone continuous loop for go-nuts mode (used by watchdog restart)."""
    log = logging.getLogger("go-nuts-mode")
    state = _go_nuts_state[session_name]
    try:
        await _away_wait_for_idle(session_name, timeout=600)

        cycle = state.get("step", 0) + 1
        consecutive_errors = 0
        while state.get("enabled"):
            try:
                _go_nuts_log(state, f"Monitoring for idle (cycle {cycle})...")
                idle_since = None
                while state.get("enabled"):
                    await asyncio.sleep(10)
                    try:
                        activity = await async_detect_activity(session_name)
                    except Exception:
                        activity = {"status": "unknown"}
                    if activity["status"] == "idle":
                        if idle_since is None:
                            idle_since = time.time()
                        elif time.time() - idle_since >= 90:
                            break
                    else:
                        idle_since = None

                if not state.get("enabled"):
                    return

                # Ensure Codex is running before sending prompt (OOM recovery)
                codex_ok = await _ensure_codex_running(session_name, _go_nuts_log, state)
                if not codex_ok:
                    _go_nuts_log(state, "Codex dead and couldn't restart — stopping go nuts mode")
                    state["enabled"] = False
                    _save_autonomous_state()
                    return

                state["step"] = cycle
                state["step_name"] = f"Build cycle {cycle}"
                _go_nuts_log(state, f"Session idle 90s — build ping (cycle {cycle})")
                await _go_nuts_send_and_wait(session_name, _GN_PING_PROMPT, state,
                                              f"Build cycle {cycle}", timeout=900)
                cycle += 1
                consecutive_errors = 0
                _save_autonomous_state()  # Periodic save after each successful cycle
                await asyncio.sleep(5)

            except asyncio.CancelledError:
                raise
            except Exception as e:
                consecutive_errors += 1
                _go_nuts_log(state, f"Cycle {cycle} error ({consecutive_errors}): {e}")
                log.error(f"Go Nuts cycle error for '{session_name}': {e}")
                if consecutive_errors >= 5:
                    await asyncio.sleep(300)
                    consecutive_errors = 0
                else:
                    await asyncio.sleep(30)

    except asyncio.CancelledError:
        if is_shutting_down():
            _go_nuts_log(state, "Go Nuts mode (restarted) cancelled (server shutdown — will restore)")
        else:
            _go_nuts_log(state, "Go Nuts mode (restarted) cancelled")
            state["enabled"] = False
            _save_autonomous_state()
        raise
    except Exception as e:
        _go_nuts_log(state, f"Go Nuts mode (restarted) error: {e}")
        log.error(f"Go Nuts restarted loop error for '{session_name}': {e}")
        _save_autonomous_state()  # Save state so watchdog can recover
        # Don't set enabled=False — let watchdog zombie detection restart us
    finally:
        state["task"] = None


def _away_log(state: dict, action: str):
    """Append a log entry to the away-mode state."""
    entry = {"ts": time.time(), "phase": state.get("phase", 0), "step": state.get("step", 0), "action": action}
    state.setdefault("log", []).append(entry)
    if len(state["log"]) > 200:
        state["log"] = state["log"][-200:]


def _away_state_summary(state: dict) -> dict:
    """Return a JSON-safe summary of away-mode state (no asyncio.Task)."""
    return {
        "enabled": state.get("enabled", False),
        "phase": state.get("phase", 0),
        "phase_name": state.get("phase_name", ""),
        "step": state.get("step", 0),
        "step_name": state.get("step_name", ""),
        "started_at": state.get("started_at", 0),
        "log": state.get("log", [])[-30:],
        "report": state.get("report", ""),
    }


async def _away_send_prompt(session_name: str, prompt: str):
    """Send a long prompt to a Codex session via tmux paste-buffer.

    Two-phase approach to defeat the bracketed paste "[Pasted text +N lines]" hang:
    Phase 1: Write prompt to a temp file, then send a short shell-pipe command that
             reads the file and feeds it to the Codex prompt via xdotool-style
             keyboard simulation. This avoids bracketed paste entirely.
    Phase 2 (fallback): If Phase 1 fails or Codex is truly at its ❯ prompt
             (not a shell), use paste-buffer with aggressive Enter retries.
    """
    log = logging.getLogger("away-mode")
    prompt_text = prompt.rstrip("\n\r ")  # Strip trailing whitespace/newlines
    prompt_file = None
    try:
        fd, prompt_file = tempfile.mkstemp(prefix=f"away-prompt-{session_name}-", suffix=".md")
        os.close(fd)
        Path(prompt_file).write_text(prompt_text)

        # Capture terminal state before paste to detect changes later
        pre_snapshot = await asyncio.to_thread(capture_pane_recent, session_name, 5)

        # --- Strategy: Disable bracketed paste, then paste raw ---
        # Send \e[?2004l escape sequence directly to the terminal to disable
        # bracketed paste mode. tmux send-keys -H sends raw hex bytes.
        await asyncio.to_thread(subprocess.run,
            ["tmux", "send-keys", "-t", session_name, "-H",
             "1b", "5b", "3f", "32", "30", "30", "34", "6c"],  # \e[?2004l
            capture_output=True, text=True, timeout=5,
        )
        await asyncio.sleep(0.2)

        # Load file into tmux buffer and paste
        await asyncio.to_thread(subprocess.run,
            ["tmux", "load-buffer", prompt_file],
            capture_output=True, text=True, timeout=5,
        )
        await asyncio.to_thread(subprocess.run,
            ["tmux", "paste-buffer", "-t", session_name],
            capture_output=True, text=True, timeout=10,
        )

        # Scale wait time with prompt size
        wait_secs = max(2.0, min(8.0, len(prompt_text) / 1500))
        await asyncio.sleep(wait_secs)

        # Send Enter to submit
        await asyncio.to_thread(subprocess.run,
            ["tmux", "send-keys", "-t", session_name, "Enter"],
            capture_output=True, text=True, timeout=5,
        )
        log.info(f"Sent prompt to '{session_name}' ({len(prompt_text)} chars, waited {wait_secs:.1f}s)")

        # Note: we do NOT re-enable bracketed paste (\e[?2004h) here.
        # Bracketed paste causes "[Pasted text +N lines]" previews that hang.
        # Users can toggle it back on from the Keys bar if they want it.

        # --- Verify submission with retries ---
        for attempt in range(3):
            await asyncio.sleep(3)
            try:
                activity = await async_detect_activity(session_name)
            except Exception:
                activity = {"status": "unknown"}

            if activity["status"] == "busy":
                log.info(f"Session '{session_name}' is busy — prompt accepted")
                return  # Success — session started processing

            # Check if terminal output changed (even if still "idle" per detection)
            post_snapshot = await asyncio.to_thread(capture_pane_recent, session_name, 5)
            if post_snapshot != pre_snapshot:
                log.info(f"Session '{session_name}' terminal changed — prompt likely accepted")
                return  # Terminal content changed, prompt was received

            # Still showing the same content — try Enter again
            log.warning(f"Session '{session_name}' still idle after paste (attempt {attempt+1}/3) — retrying Enter")
            await asyncio.to_thread(subprocess.run,
                ["tmux", "send-keys", "-t", session_name, "Enter"],
                capture_output=True, text=True, timeout=5,
            )

        # All Enter retries failed. Check if there's a bracketed paste preview stuck.
        recent = await asyncio.to_thread(capture_pane_recent, session_name, 10)
        if "Pasted text" in recent or "pasted" in recent.lower():
            # Bracketed paste preview is stuck — Escape to cancel it, then re-send
            log.warning(f"Session '{session_name}' has stuck paste preview — clearing and retrying")
            await asyncio.to_thread(subprocess.run, ["tmux", "send-keys", "-t", session_name, "Escape"], timeout=3, capture_output=True)
            await asyncio.sleep(0.5)
            await asyncio.to_thread(subprocess.run, ["tmux", "send-keys", "-t", session_name, "C-c"], timeout=3, capture_output=True)
            await asyncio.sleep(1)
            # Re-send the prompt, this time relying on bracketed paste disabled earlier
            await asyncio.to_thread(subprocess.run, ["tmux", "load-buffer", prompt_file], capture_output=True, text=True, timeout=5)
            await asyncio.to_thread(subprocess.run, ["tmux", "paste-buffer", "-t", session_name], capture_output=True, text=True, timeout=10)
            await asyncio.sleep(wait_secs)
            await asyncio.to_thread(subprocess.run, ["tmux", "send-keys", "-t", session_name, "Enter"], capture_output=True, text=True, timeout=5)
            log.info(f"Re-sent prompt to '{session_name}' after clearing stuck paste")

    except Exception as e:
        log.error(f"Failed to send prompt to '{session_name}': {e}")
    finally:
        if prompt_file:
            try:
                os.unlink(prompt_file)
            except (OSError, UnboundLocalError):
                pass


async def _away_wait_for_idle(session_name: str, timeout: int = 900) -> bool:
    """Wait for a session to become busy then return to idle. Returns True on success."""
    log = logging.getLogger("away-mode")

    # Phase A: wait for session to become busy (max 30s)
    start = time.time()
    became_busy = False
    while time.time() - start < 30:
        await asyncio.sleep(2)
        activity = await async_detect_activity(session_name)
        if activity["status"] == "busy":
            became_busy = True
            break

    if not became_busy:
        log.warning(f"Session '{session_name}' never became busy, proceeding anyway")

    # Phase B: wait for session to return to idle (up to timeout)
    idle_count = 0
    while time.time() - start < timeout:
        await asyncio.sleep(5)
        activity = await async_detect_activity(session_name)
        if activity["status"] == "idle":
            idle_count += 1
            if idle_count >= 2:  # 2 consecutive idle readings = confirmed idle
                return True
        else:
            idle_count = 0

    log.warning(f"Session '{session_name}' timed out after {timeout}s")
    return False


async def _away_send_and_wait(session_name: str, prompt: str, state: dict,
                               step_name: str, timeout: int = 900) -> str:
    """Send prompt, wait for completion, capture and summarize output."""
    state["step_name"] = step_name
    _away_log(state, f"Sending: {step_name}")

    prompt = _build_project_isolation_preamble(session_name) + prompt
    await _away_send_prompt(session_name, prompt)
    completed = await _away_wait_for_idle(session_name, timeout=timeout)

    if not completed:
        _away_log(state, f"Timeout on: {step_name}")
        # Send Ctrl+C to unstick if needed
        subprocess.run(["tmux", "send-keys", "-t", session_name, "C-c"], timeout=3)
        await asyncio.sleep(2)

    # Capture output and summarize
    output = capture_pane_full(session_name)
    try:
        summary = await llm_call(
            system_prompt=(
                "Summarize what the agent accomplished in this terminal output. "
                "Focus on concrete actions: files created/modified, tests run, errors, "
                "branches created, findings. Be specific and concise. Under 80 words."
            ),
            user_content=f"Away mode step: {step_name}\n\nTerminal output:\n{output[-4000:]}",
            max_tokens=200,
        )
    except Exception:
        summary = "(summary unavailable)"

    _away_log(state, f"Done: {summary[:200]}")
    state["step"] += 1
    return summary


_PHASE1_PROMPT = f"""I'm putting you in Away Mode. You are autonomous — the user is not present. Every action must be safe, verifiable, and revertible. You cannot ask questions — make decisions and document reasoning.

IMPORTANT: Detailed skill instructions are available as files on disk at:
  {_SKILLS_DIR}/
Each subdirectory contains a SKILL.md with specific tasks and guidance. You MUST read the relevant SKILL.md file before executing any skill.

PHASE 1: Study the Project

1. Read the project root directory structure
2. Examine root config files (package.json, pyproject.toml, Cargo.toml, go.mod, Makefile, docker-compose.yml, .env.example, etc.)
3. Examine source directories (src/, app/, lib/, components/, routes/, api/)
4. Check test directories (test/, tests/, __tests__/, spec/, e2e/)
5. Check git history: recent commits, active areas of development
6. Create a project profile at /tmp/<SESSION_NAME>-away-mode-profile.md (replace <SESSION_NAME> with the session name from the PROJECT ISOLATION preamble above) covering:
   - Project name, type, primary languages, frameworks
   - Architecture: frontend, backend, database, external services
   - Current state: can it build? tests? linting?
   - Development patterns, known issues from TODOs
7. Establish baseline:
   - Record git status and recent commits
   - Create safety branch: git checkout -b away-mode/session-$(date +%Y%m%d-%H%M%S)
   - Run existing tests if available, record results
   - Run linter if configured, record results

CRITICAL: Never commit to main/master. Work on the away-mode branch.
CRITICAL: If tests fail at baseline, note which tests fail — do NOT introduce NEW failures.

When done with this phase, immediately continue to the next task without waiting."""


_PHASE2_PROMPT = f"""PHASE 2: Select Applicable Skills

Review the project profile you created. The following skills are available on disk. For each, read its SKILL.md to understand its scope, then decide if it applies to THIS project.

Available skills (read the SKILL.md inside each directory):
 1. {_SKILLS_DIR}/05-security/SKILL.md — Security Auditing (ALWAYS applicable)
 2. {_SKILLS_DIR}/08-testing/SKILL.md — Testing & Coverage (ALWAYS applicable)
 3. {_SKILLS_DIR}/09-code-quality/SKILL.md — Code Quality & Refactoring (ALWAYS applicable)
 4. {_SKILLS_DIR}/07-dependencies/SKILL.md — Dependency Management
 5. {_SKILLS_DIR}/10-error-handling/SKILL.md — Error Handling & Resilience
 6. {_SKILLS_DIR}/13-documentation/SKILL.md — Documentation
 7. {_SKILLS_DIR}/21-codebase-audit/SKILL.md — Codebase Audit & Reporting
 8. {_SKILLS_DIR}/22-config-hardening/SKILL.md — Build & Config Hardening
 9. {_SKILLS_DIR}/01-live-qa/SKILL.md — Live QA & Runtime Testing (if web app)
10. {_SKILLS_DIR}/02-performance/SKILL.md — Performance & Speed (if web app/API)
11. {_SKILLS_DIR}/06-content-integrity/SKILL.md — Content & Data Integrity
12. {_SKILLS_DIR}/03-seo/SKILL.md — SEO & Web Standards (if public web pages)
13. {_SKILLS_DIR}/04-accessibility/SKILL.md — Accessibility (if UI exists)
14. {_SKILLS_DIR}/14-styling/SKILL.md — Styling & Visual Polish (if UI)
15. {_SKILLS_DIR}/15-data-api/SKILL.md — Data, Database & API Quality
16. {_SKILLS_DIR}/16-observability/SKILL.md — Logging & Observability
17. {_SKILLS_DIR}/19-ux-improvements/SKILL.md — UX Micro-Improvements (if UI)
18. {_SKILLS_DIR}/23-git-hygiene/SKILL.md — Git Hygiene
19. {_SKILLS_DIR}/12-devops/SKILL.md — DevOps & CI/CD
20. {_SKILLS_DIR}/20-feature-generation/SKILL.md — Smart Feature Generation

For each skill, read the SKILL.md, then decide: applicable? priority? risk level?

Write selection to /tmp/<SESSION_NAME>-away-mode-skills-selected.md (use your session name) with selected skills in priority order.

When done, immediately continue to executing skills — do not wait."""


_PHASE3_ROUND1_PROMPT = f"""PHASE 3, ROUND 1: Observe and Audit (NO code changes)

Read these skill files and execute their AUDIT tasks. Do NOT modify code — observe and report only.

1. Read {_SKILLS_DIR}/05-security/SKILL.md — execute all security scan tasks
2. Read {_SKILLS_DIR}/06-content-integrity/SKILL.md — execute content integrity checks
3. Read {_SKILLS_DIR}/21-codebase-audit/SKILL.md — execute codebase audit tasks

For EVERY finding, log it in /tmp/<SESSION_NAME>-away-mode-audit.md (use your session name) with:
- Category | Severity (critical/high/medium/low) | Description | File:Line

When done, immediately continue to the next round."""


_PHASE3_ROUND2_PROMPT = f"""PHASE 3, ROUND 2: Safe Mechanical Fixes

Read these skill files and execute their FIX tasks — only safe, deterministic changes:

1. Read {_SKILLS_DIR}/07-dependencies/SKILL.md — apply patch updates (semver-safe only)
2. Read {_SKILLS_DIR}/22-config-hardening/SKILL.md — tighten configs, fix .gitignore
3. Read {_SKILLS_DIR}/23-git-hygiene/SKILL.md — clean up git state

EXECUTION WRAPPER for every change:
1. Record current git SHA
2. Make ONE logical change
3. Run full test suite + build
4. ALL GREEN → commit: [away-mode][category] description
5. ANY RED → git checkout . to fully revert

When done, immediately continue to the next round."""


_PHASE3_ROUND3_PROMPT = f"""PHASE 3, ROUND 3: Test-Gated Improvements

Read these skill files and execute their tasks:

1. Read {_SKILLS_DIR}/08-testing/SKILL.md — generate tests for untested code (HIGHEST PRIORITY)
2. Read {_SKILLS_DIR}/09-code-quality/SKILL.md — refactor, remove dead code, simplify
3. Read {_SKILLS_DIR}/10-error-handling/SKILL.md — fix empty catches, add error handlers

EXECUTION WRAPPER: one commit per change, test after each, revert on failure.

When done, immediately continue to the next task."""


async def _away_phase_study(session_name: str, state: dict):
    """Phase 1: Study the project."""
    state["phase"] = 1
    state["phase_name"] = "Study Project"
    state["step"] = 1
    _away_log(state, "Starting Phase 1: Study the Project")
    await _away_send_and_wait(session_name, _PHASE1_PROMPT, state,
                               "Study project structure & establish baseline", timeout=600)


async def _away_phase_select(session_name: str, state: dict):
    """Phase 2: Select applicable skills."""
    state["phase"] = 2
    state["phase_name"] = "Select Skills"
    state["step"] = 1
    _away_log(state, "Starting Phase 2: Select Applicable Skills")
    await _away_send_and_wait(session_name, _PHASE2_PROMPT, state,
                               "Evaluate and select skills", timeout=300)


async def _away_phase_execute(session_name: str, state: dict):
    """Phase 3: Execute skills in rounds."""
    state["phase"] = 3
    state["phase_name"] = "Execute Skills"
    state["step"] = 1

    rounds = [
        ("Round 1: Audit (read-only)", _PHASE3_ROUND1_PROMPT, 600),
        ("Round 2: Safe fixes", _PHASE3_ROUND2_PROMPT, 900),
        ("Round 3: Test-gated improvements", _PHASE3_ROUND3_PROMPT, 900),
    ]

    for round_name, prompt, timeout in rounds:
        if not state.get("enabled"):
            return
        _away_log(state, f"Starting {round_name}")
        await _away_send_and_wait(session_name, prompt, state, round_name, timeout=timeout)
        # Brief pause between rounds
        await asyncio.sleep(5)


_AWAY_PING_PROMPT = f"""You are in Away Mode. The user is not present. You are autonomous.

You just finished your previous task and are now idle. Pick the NEXT most valuable thing to do. Choose a skill you haven't fully completed yet, or revisit one that could be improved.

STEP 1: Pick a skill from the list below.
STEP 2: Read the SKILL.md file for that skill — it contains detailed tasks and instructions.
STEP 3: Execute the tasks described in the SKILL.md.

Available skills (each has a SKILL.md with full instructions):
 1. {_SKILLS_DIR}/05-security/SKILL.md — Security Auditing & Hardening
 2. {_SKILLS_DIR}/08-testing/SKILL.md — Testing & Coverage
 3. {_SKILLS_DIR}/09-code-quality/SKILL.md — Code Quality & Refactoring
 4. {_SKILLS_DIR}/07-dependencies/SKILL.md — Dependency Management
 5. {_SKILLS_DIR}/10-error-handling/SKILL.md — Error Handling & Resilience
 6. {_SKILLS_DIR}/13-documentation/SKILL.md — Documentation
 7. {_SKILLS_DIR}/02-performance/SKILL.md — Performance & Speed
 8. {_SKILLS_DIR}/06-content-integrity/SKILL.md — Content & Data Integrity
 9. {_SKILLS_DIR}/22-config-hardening/SKILL.md — Build & Config Hardening
10. {_SKILLS_DIR}/21-codebase-audit/SKILL.md — Codebase Audit & Reporting
11. {_SKILLS_DIR}/14-styling/SKILL.md — Styling & Visual Polish
12. {_SKILLS_DIR}/15-data-api/SKILL.md — Data, Database & API Quality
13. {_SKILLS_DIR}/16-observability/SKILL.md — Logging & Observability
14. {_SKILLS_DIR}/19-ux-improvements/SKILL.md — UX Micro-Improvements
15. {_SKILLS_DIR}/23-git-hygiene/SKILL.md — Git Hygiene
16. {_SKILLS_DIR}/01-live-qa/SKILL.md — Live QA & Runtime Testing
17. {_SKILLS_DIR}/03-seo/SKILL.md — SEO & Web Standards
18. {_SKILLS_DIR}/04-accessibility/SKILL.md — Accessibility
19. {_SKILLS_DIR}/12-devops/SKILL.md — DevOps & CI/CD
20. {_SKILLS_DIR}/20-feature-generation/SKILL.md — Smart Feature Generation
21. {_SKILLS_DIR}/24-cost-optimization/SKILL.md — Cost Optimization
22. {_SKILLS_DIR}/25-migration-readiness/SKILL.md — Migration Readiness
23. {_SKILLS_DIR}/26-email-notifications/SKILL.md — Email & Notifications
24. {_SKILLS_DIR}/27-mobile-pwa/SKILL.md — Mobile & PWA
25. {_SKILLS_DIR}/28-asset-pipeline/SKILL.md — Asset Pipeline
26. {_SKILLS_DIR}/29-developer-tooling/SKILL.md — Developer Tooling
27. {_SKILLS_DIR}/30-disaster-recovery/SKILL.md — Disaster Recovery

Rules:
- Work on the away-mode branch (create one if not already on it)
- Never commit to main/master
- One logical change per commit: [away-mode][category] description
- Run tests after every change — revert immediately on new failures
- READ the SKILL.md first, then execute its specific tasks
- Take concrete action — don't just plan or summarize

Pick a skill, read its SKILL.md, and execute it now."""


async def _away_mode_worker(session_name: str):
    """Main away-mode coroutine. Runs initial phases then loops forever, pinging when idle."""
    log = logging.getLogger("away-mode")
    state = _away_mode_state[session_name]
    log.info(f"Away mode started for session '{session_name}'")
    try:
        # --- Initial setup phases (run once, errors skip to continuous loop) ---
        try:
            await _away_phase_study(session_name, state)
        except asyncio.CancelledError:
            raise
        except Exception as e:
            _away_log(state, f"Phase 1 error (skipping): {e}")
            log.error(f"Away mode phase 1 error for '{session_name}': {e}")

        if not state.get("enabled"):
            return

        try:
            await _away_phase_select(session_name, state)
        except asyncio.CancelledError:
            raise
        except Exception as e:
            _away_log(state, f"Phase 2 error (skipping): {e}")
            log.error(f"Away mode phase 2 error for '{session_name}': {e}")

        if not state.get("enabled"):
            return

        try:
            await _away_phase_execute(session_name, state)
        except asyncio.CancelledError:
            raise
        except Exception as e:
            _away_log(state, f"Phase 3 error (skipping): {e}")
            log.error(f"Away mode phase 3 error for '{session_name}': {e}")

        if not state.get("enabled"):
            return

        # --- Continuous loop: monitor idle, ping with next task ---
        # This loop NEVER exits unless cancelled or disabled by user.
        state["phase"] = 4
        state["phase_name"] = "Continuous"
        cycle = 1
        consecutive_errors = 0
        while state.get("enabled"):
            try:
                _away_log(state, f"Monitoring for idle (cycle {cycle})...")
                # Wait for confirmed idle: 90 seconds of consecutive idle readings
                idle_since = None
                while state.get("enabled"):
                    await asyncio.sleep(10)
                    try:
                        activity = await async_detect_activity(session_name)
                    except Exception:
                        activity = {"status": "unknown"}
                    if activity["status"] == "idle":
                        if idle_since is None:
                            idle_since = time.time()
                        elif time.time() - idle_since >= 90:
                            break  # Confirmed idle for 90s
                    else:
                        idle_since = None  # Reset — session is busy

                if not state.get("enabled"):
                    return

                # Ensure Codex is running before sending prompt (OOM recovery)
                codex_ok = await _ensure_codex_running(session_name, _away_log, state)
                if not codex_ok:
                    _away_log(state, "Codex dead and couldn't restart — stopping away mode")
                    state["enabled"] = False
                    _save_autonomous_state()
                    return

                # Session has been idle for 90s — send ping prompt
                state["step"] = cycle
                state["step_name"] = f"Ping cycle {cycle}"
                _away_log(state, f"Session idle for 90s — sending task ping (cycle {cycle})")
                await _away_send_and_wait(session_name, _AWAY_PING_PROMPT, state,
                                           f"Task ping cycle {cycle}", timeout=900)
                cycle += 1
                consecutive_errors = 0
                _save_autonomous_state()  # Periodic save after each successful cycle
                await asyncio.sleep(5)

            except asyncio.CancelledError:
                raise
            except Exception as e:
                consecutive_errors += 1
                _away_log(state, f"Cycle {cycle} error ({consecutive_errors}): {e}")
                log.error(f"Away mode cycle {cycle} error for '{session_name}': {e}")
                if consecutive_errors >= 5:
                    _away_log(state, "Too many consecutive errors, pausing 5 minutes...")
                    await asyncio.sleep(300)
                    consecutive_errors = 0
                else:
                    await asyncio.sleep(30)

    except asyncio.CancelledError:
        if is_shutting_down():
            _away_log(state, "Away mode cancelled (server shutdown — will restore)")
        else:
            _away_log(state, "Away mode cancelled by user")
            state["enabled"] = False
            _save_autonomous_state()
        log.info(f"Away mode cancelled for '{session_name}'")
        raise
    except Exception as e:
        _away_log(state, f"Away mode fatal error: {e}")
        log.error(f"Away mode fatal error for '{session_name}': {e}")
        _save_autonomous_state()  # Save state so watchdog can recover
        # Don't set enabled=False — let watchdog zombie detection restart us
    finally:
        state["task"] = None
        log.info(f"Away mode finished for '{session_name}'")


async def _away_toggle_local(session_name: str, enabled: bool) -> dict:
    _, sess = _find_session(session_name)
    if not sess:
        return {"ok": False, "error": "Session not found", "_status": 404}

    if enabled:
        # Don't allow both away mode and go-nuts mode at the same time on same session
        if _go_nuts_state.get(session_name, {}).get("enabled"):
            return {"ok": False, "error": "Go Nuts Mode is active on this session. Disable it first.", "_status": 409}

        # Check if already running for this session
        if _away_mode_state.get(session_name, {}).get("enabled"):
            return {"ok": True, **_away_state_summary(_away_mode_state[session_name])}

        resumed = await _resume_parked_session(session_name, source="away-mode")
        if not resumed.get("ok"):
            return {"ok": False, "error": resumed.get("error", "session resume failed"), "_status": 503}

        # Initialize and launch
        state = {
            "enabled": True,
            "phase": 0,
            "phase_name": "Initializing",
            "step": 0,
            "step_name": "",
            "started_at": time.time(),
            "log": [],
            "report": "",
            "task": None,
        }
        _away_mode_state[session_name] = state
        _away_log(state, "Away mode enabled")
        task = asyncio.create_task(_away_mode_worker(session_name))
        state["task"] = task
        _save_autonomous_state()
        return {"ok": True, **_away_state_summary(state)}
    else:
        # Disable
        state = _away_mode_state.get(session_name, {})
        if state.get("task") and not state["task"].done():
            state["task"].cancel()
        state["enabled"] = False
        state["task"] = None
        _away_log(state, "Away mode disabled by user")
        _save_autonomous_state()
        return {"ok": True, **_away_state_summary(state)}


def _go_nuts_log(state: dict, action: str):
    """Append a log entry to the go-nuts-mode state."""
    entry = {"ts": time.time(), "phase": state.get("phase", 0), "step": state.get("step", 0), "action": action}
    state.setdefault("log", []).append(entry)
    if len(state["log"]) > _GO_NUTS_LOG_CAP:
        state["log"] = state["log"][-_GO_NUTS_LOG_CAP:]


def _go_nuts_state_summary(state: dict) -> dict:
    """Return a JSON-safe summary of go-nuts-mode state (no asyncio.Task)."""
    return {
        "enabled": state.get("enabled", False),
        "phase": state.get("phase", 0),
        "phase_name": state.get("phase_name", ""),
        "step": state.get("step", 0),
        "step_name": state.get("step_name", ""),
        "started_at": state.get("started_at", 0),
        "log": state.get("log", [])[-30:],
        "report": state.get("report", ""),
    }


async def _go_nuts_send_and_wait(session_name: str, prompt: str, state: dict,
                                  step_name: str, timeout: int = 900) -> str:
    """Send prompt, wait for completion, capture and summarize output."""
    state["step_name"] = step_name
    _go_nuts_log(state, f"Sending: {step_name}")

    prompt = _build_project_isolation_preamble(session_name) + prompt
    # Reuse the same send/wait infrastructure as away mode
    await _away_send_prompt(session_name, prompt)
    completed = await _away_wait_for_idle(session_name, timeout=timeout)

    if not completed:
        _go_nuts_log(state, f"Timeout on: {step_name}")
        subprocess.run(["tmux", "send-keys", "-t", session_name, "C-c"], timeout=3)
        await asyncio.sleep(2)

    output = capture_pane_full(session_name)
    try:
        summary = await llm_call(
            system_prompt=(
                "Summarize what the agent accomplished in this terminal output. "
                "Focus on concrete actions: features built, files created/modified, tests run, errors. "
                "Be specific and concise. Under 80 words."
            ),
            user_content=f"Go Nuts step: {step_name}\n\nTerminal output:\n{output[-4000:]}",
            max_tokens=200,
        )
    except Exception:
        summary = "(summary unavailable)"

    _go_nuts_log(state, f"Done: {summary[:200]}")
    state["step"] += 1
    return summary


_GN_PHASE1_PROMPT = f"""I'm putting you in Go Nuts Mode. You are autonomous — the user is not present. Your job is to BUILD FEATURES and IMPROVE this project as aggressively as possible.

IMPORTANT: Detailed skill instructions are available as files on disk at:
  {_GO_NUTS_SKILLS_DIR}/
Each subdirectory contains a SKILL.md with specific tasks and guidance. You MUST read the relevant SKILL.md file before executing any skill.

PHASE 1: Discover the Project

Read {_GO_NUTS_SKILLS_DIR}/01-project-discovery/SKILL.md and execute ALL tasks described in it.

Key objectives:
1. Map every route, endpoint, model, dependency, and feature
2. Understand the product vision — who uses this, what does "done" look like?
3. Assess maturity level (skeleton/prototype/MVP/early product/established)
4. Map constraints — what can and can't we build?
5. Write the product profile to /tmp/<SESSION_NAME>-go-nuts-product-profile.md (replace <SESSION_NAME> with the session name from the PROJECT ISOLATION preamble above)

Then immediately read {_GO_NUTS_SKILLS_DIR}/02-product-gap-analysis/SKILL.md and execute it:
1. Compare what exists vs what users of this product type expect
2. Identify every missing feature and gap
3. Write the gap analysis to /tmp/<SESSION_NAME>-go-nuts-gap-analysis.md (use your session name)

CRITICAL: Create a working branch: git checkout -b go-nuts/session-$(date +%Y%m%d-%H%M%S)
CRITICAL: Never commit to main/master. All work on the go-nuts branch.
CRITICAL: After EVERY feature you build, run tests + build to verify nothing broke.

When done, immediately continue to the next task without waiting."""


_GN_PHASE2_PROMPT = f"""PHASE 2: Generate Feature Backlog

Read {_GO_NUTS_SKILLS_DIR}/03-feature-ideation/SKILL.md and execute ALL tasks:
1. Use the brainstorming frameworks (What If, Adjacent Feature, Delight, Productization)
2. Research competitors if possible (use web search)
3. Score each feature on Impact/Feasibility/Independence/Novelty
4. Write the prioritized backlog to /tmp/<SESSION_NAME>-go-nuts-feature-backlog.md (use your session name)

Then pick the TOP 3 highest-priority features from the backlog and start building them.

For EACH feature:
1. Create a git checkpoint (read {_GO_NUTS_SKILLS_DIR}/20-backup-checkpoint/SKILL.md)
2. Build the complete feature — not a stub, not a placeholder, the REAL thing
3. Match existing code style, design language, and patterns
4. Handle all states: loading, empty, error, populated
5. Run tests + build after completion
6. If tests pass → commit: [go-nuts][feature] description
7. If tests fail → revert and move to next feature

When done, immediately continue to the next task without waiting."""


_GN_PHASE3_PROMPT = f"""PHASE 3: Build Features (Batch)

Continue building features from the backlog at /tmp/<SESSION_NAME>-go-nuts-feature-backlog.md (use your session name from the PROJECT ISOLATION preamble).

For each feature, use the relevant skill file:
- UI/pages → Read {_GO_NUTS_SKILLS_DIR}/07-ui-pages-components/SKILL.md
- API/backend → Read {_GO_NUTS_SKILLS_DIR}/08-api-backend/SKILL.md
- Auth/users → Read {_GO_NUTS_SKILLS_DIR}/04-auth-user-system/SKILL.md
- Navigation → Read {_GO_NUTS_SKILLS_DIR}/05-navigation-routing/SKILL.md
- Data/state → Read {_GO_NUTS_SKILLS_DIR}/06-data-state/SKILL.md
- Search → Read {_GO_NUTS_SKILLS_DIR}/09-search-filtering/SKILL.md
- Notifications → Read {_GO_NUTS_SKILLS_DIR}/10-notifications-realtime/SKILL.md
- Config → Read {_GO_NUTS_SKILLS_DIR}/11-config-preferences/SKILL.md
- Content pages → Read {_GO_NUTS_SKILLS_DIR}/12-content-pages/SKILL.md
- Dashboard → Read {_GO_NUTS_SKILLS_DIR}/13-dashboard-analytics/SKILL.md
- Import/Export → Read {_GO_NUTS_SKILLS_DIR}/14-import-export/SKILL.md

EXECUTION WRAPPER for every feature:
1. Checkpoint (git stash or note SHA)
2. Build the COMPLETE feature
3. Run tests + build
4. ALL GREEN → commit: [go-nuts][feature] description
5. ANY RED → full revert, log why it failed, move on

Build as many features as you can. Prioritize high-impact, high-feasibility items.

When done, immediately continue to the next task without waiting."""


_GN_PING_PROMPT = f"""You are in Go Nuts Mode. The user is not present. You are autonomous. Your mission: BUILD FEATURES and IMPROVE the project.

You just finished your previous task and are now idle. Pick the NEXT most valuable thing to do.

STEP 1: Check your backlog at /tmp/<SESSION_NAME>-go-nuts-feature-backlog.md (use your session name) — any features left to build?
STEP 2: If backlog is empty or low, generate new ideas using {_GO_NUTS_SKILLS_DIR}/03-feature-ideation/SKILL.md
STEP 3: Pick a skill and execute it.

Available skills (each has a SKILL.md with full instructions):
 1. {_GO_NUTS_SKILLS_DIR}/07-ui-pages-components/SKILL.md — Build UI Pages & Components
 2. {_GO_NUTS_SKILLS_DIR}/08-api-backend/SKILL.md — Build API & Backend Features
 3. {_GO_NUTS_SKILLS_DIR}/04-auth-user-system/SKILL.md — Auth & User System
 4. {_GO_NUTS_SKILLS_DIR}/05-navigation-routing/SKILL.md — Navigation & Routing
 5. {_GO_NUTS_SKILLS_DIR}/06-data-state/SKILL.md — Data & State Management
 6. {_GO_NUTS_SKILLS_DIR}/09-search-filtering/SKILL.md — Search & Filtering
 7. {_GO_NUTS_SKILLS_DIR}/10-notifications-realtime/SKILL.md — Notifications & Realtime
 8. {_GO_NUTS_SKILLS_DIR}/11-config-preferences/SKILL.md — Config & Preferences
 9. {_GO_NUTS_SKILLS_DIR}/12-content-pages/SKILL.md — Content Pages
10. {_GO_NUTS_SKILLS_DIR}/13-dashboard-analytics/SKILL.md — Dashboard & Analytics
11. {_GO_NUTS_SKILLS_DIR}/14-import-export/SKILL.md — Import & Export
12. {_GO_NUTS_SKILLS_DIR}/15-social-collaboration/SKILL.md — Social & Collaboration
13. {_GO_NUTS_SKILLS_DIR}/16-onboarding-empty-states/SKILL.md — Onboarding & Empty States
14. {_GO_NUTS_SKILLS_DIR}/17-qa-stability-audit/SKILL.md — QA & Stability Audit
15. {_GO_NUTS_SKILLS_DIR}/18-security-sweep/SKILL.md — Security Sweep
16. {_GO_NUTS_SKILLS_DIR}/19-web-research/SKILL.md — Web Research & Inspiration
17. {_GO_NUTS_SKILLS_DIR}/03-feature-ideation/SKILL.md — Feature Ideation & Brainstorming
18. {_GO_NUTS_SKILLS_DIR}/20-backup-checkpoint/SKILL.md — Backup & Checkpoint Manager

Rules:
- Work on the go-nuts branch (create one if not already on it)
- Never commit to main/master
- One feature per commit: [go-nuts][feature] description
- Run tests + build after every change — revert immediately on new failures
- READ the SKILL.md first, then execute its specific tasks
- Build COMPLETE features, not stubs or placeholders
- Every 5th cycle, run QA audit ({_GO_NUTS_SKILLS_DIR}/17-qa-stability-audit/SKILL.md) and security sweep ({_GO_NUTS_SKILLS_DIR}/18-security-sweep/SKILL.md)

Pick a skill, read its SKILL.md, and execute it now."""


async def _go_nuts_phase_discover(session_name: str, state: dict):
    """Phase 1: Discover the project and analyze gaps."""
    state["phase"] = 1
    state["phase_name"] = "Discover Project"
    state["step"] = 1
    _go_nuts_log(state, "Starting Phase 1: Project Discovery & Gap Analysis")
    await _go_nuts_send_and_wait(session_name, _GN_PHASE1_PROMPT, state,
                                  "Discover project & analyze gaps", timeout=600)


async def _go_nuts_phase_backlog(session_name: str, state: dict):
    """Phase 2: Generate feature backlog and start building."""
    state["phase"] = 2
    state["phase_name"] = "Feature Backlog"
    state["step"] = 1
    _go_nuts_log(state, "Starting Phase 2: Generate Feature Backlog & Build Top Features")
    await _go_nuts_send_and_wait(session_name, _GN_PHASE2_PROMPT, state,
                                  "Generate backlog & build top features", timeout=900)


async def _go_nuts_phase_build(session_name: str, state: dict):
    """Phase 3: Build features from backlog."""
    state["phase"] = 3
    state["phase_name"] = "Build Features"
    state["step"] = 1
    _go_nuts_log(state, "Starting Phase 3: Build Features Batch")
    await _go_nuts_send_and_wait(session_name, _GN_PHASE3_PROMPT, state,
                                  "Build features from backlog", timeout=900)


async def _go_nuts_mode_worker(session_name: str):
    """Main go-nuts-mode coroutine. Runs discovery phases then loops forever, building features."""
    log = logging.getLogger("go-nuts-mode")
    state = _go_nuts_state[session_name]
    log.info(f"Go Nuts mode started for session '{session_name}'")
    try:
        # --- Initial setup phases (run once, errors skip to continuous loop) ---
        try:
            await _go_nuts_phase_discover(session_name, state)
        except asyncio.CancelledError:
            raise
        except Exception as e:
            _go_nuts_log(state, f"Phase 1 error (skipping): {e}")
            log.error(f"Go Nuts phase 1 error for '{session_name}': {e}")

        if not state.get("enabled"):
            return

        try:
            await _go_nuts_phase_backlog(session_name, state)
        except asyncio.CancelledError:
            raise
        except Exception as e:
            _go_nuts_log(state, f"Phase 2 error (skipping): {e}")
            log.error(f"Go Nuts phase 2 error for '{session_name}': {e}")

        if not state.get("enabled"):
            return

        try:
            await _go_nuts_phase_build(session_name, state)
        except asyncio.CancelledError:
            raise
        except Exception as e:
            _go_nuts_log(state, f"Phase 3 error (skipping): {e}")
            log.error(f"Go Nuts phase 3 error for '{session_name}': {e}")

        if not state.get("enabled"):
            return

        # --- Continuous loop: monitor idle, ping with next feature task ---
        # This loop NEVER exits unless cancelled or disabled by user.
        state["phase"] = 4
        state["phase_name"] = "Continuous Build"
        cycle = 1
        consecutive_errors = 0
        while state.get("enabled"):
            try:
                _go_nuts_log(state, f"Monitoring for idle (cycle {cycle})...")
                idle_since = None
                while state.get("enabled"):
                    await asyncio.sleep(10)
                    try:
                        activity = await async_detect_activity(session_name)
                    except Exception:
                        activity = {"status": "unknown"}
                    if activity["status"] == "idle":
                        if idle_since is None:
                            idle_since = time.time()
                        elif time.time() - idle_since >= 90:
                            break
                    else:
                        idle_since = None

                if not state.get("enabled"):
                    return

                # Ensure Codex is running before sending prompt (OOM recovery)
                codex_ok = await _ensure_codex_running(session_name, _go_nuts_log, state)
                if not codex_ok:
                    _go_nuts_log(state, "Codex dead and couldn't restart — stopping go nuts mode")
                    state["enabled"] = False
                    _save_autonomous_state()
                    return

                state["step"] = cycle
                state["step_name"] = f"Build cycle {cycle}"
                _go_nuts_log(state, f"Session idle for 90s — sending build ping (cycle {cycle})")
                await _go_nuts_send_and_wait(session_name, _GN_PING_PROMPT, state,
                                              f"Build cycle {cycle}", timeout=900)
                cycle += 1
                consecutive_errors = 0
                _save_autonomous_state()  # Periodic save after each successful cycle
                await asyncio.sleep(5)

            except asyncio.CancelledError:
                raise
            except Exception as e:
                consecutive_errors += 1
                _go_nuts_log(state, f"Cycle {cycle} error ({consecutive_errors}): {e}")
                log.error(f"Go Nuts cycle {cycle} error for '{session_name}': {e}")
                if consecutive_errors >= 5:
                    _go_nuts_log(state, "Too many consecutive errors, pausing 5 minutes...")
                    await asyncio.sleep(300)
                    consecutive_errors = 0
                else:
                    await asyncio.sleep(30)

    except asyncio.CancelledError:
        if is_shutting_down():
            _go_nuts_log(state, "Go Nuts mode cancelled (server shutdown — will restore)")
        else:
            _go_nuts_log(state, "Go Nuts mode cancelled by user")
            state["enabled"] = False
            _save_autonomous_state()
        log.info(f"Go Nuts mode cancelled for '{session_name}'")
        raise
    except Exception as e:
        _go_nuts_log(state, f"Go Nuts mode fatal error: {e}")
        log.error(f"Go Nuts mode fatal error for '{session_name}': {e}")
        _save_autonomous_state()  # Save state so watchdog can recover
        # Don't set enabled=False — let watchdog zombie detection restart us
    finally:
        state["task"] = None
        log.info(f"Go Nuts mode finished for '{session_name}'")


async def _go_nuts_toggle_local(session_name: str, enabled: bool) -> dict:
    _, sess = _find_session(session_name)
    if not sess:
        return {"ok": False, "error": "Session not found", "_status": 404}

    if enabled:
        # Don't allow both away mode and go-nuts mode at the same time on same session
        if _away_mode_state.get(session_name, {}).get("enabled"):
            return {"ok": False, "error": "Away Mode is active on this session. Disable it first.", "_status": 409}

        if _go_nuts_state.get(session_name, {}).get("enabled"):
            return {"ok": True, **_go_nuts_state_summary(_go_nuts_state[session_name])}

        resumed = await _resume_parked_session(session_name, source="go-nuts-mode")
        if not resumed.get("ok"):
            return {"ok": False, "error": resumed.get("error", "session resume failed"), "_status": 503}

        state = {
            "enabled": True,
            "phase": 0,
            "phase_name": "Initializing",
            "step": 0,
            "step_name": "",
            "started_at": time.time(),
            "log": [],
            "report": "",
            "task": None,
        }
        _go_nuts_state[session_name] = state
        _go_nuts_log(state, "Go Nuts mode enabled")
        task = asyncio.create_task(_go_nuts_mode_worker(session_name))
        state["task"] = task
        _save_autonomous_state()
        return {"ok": True, **_go_nuts_state_summary(state)}
    else:
        state = _go_nuts_state.get(session_name, {})
        if state.get("task") and not state["task"].done():
            state["task"].cancel()
        state["enabled"] = False
        state["task"] = None
        _go_nuts_log(state, "Go Nuts mode disabled by user")
        _save_autonomous_state()
        return {"ok": True, **_go_nuts_state_summary(state)}
