"""Tests for tmux Dashboard app.py — utility functions and API logic."""
import base64
import hashlib
import hmac
import json
import os
import stat
import time

import pytest

# Patch environment before importing app to control auth behavior
os.environ.setdefault("TMUX_DASH_SECRET", "test-secret-key-for-testing")
os.environ.setdefault("TMUX_DASH_PASS", "testpass")
os.environ.setdefault("TMUX_DASH_USER", "admin")
os.environ.setdefault("OPENAI_API_KEY", "sk-test-not-real")

from unittest.mock import MagicMock, patch

from app import (
    _RE_COMPLETION,
    _RE_COMPLETION_MSG,
    _RE_IDLE_PROMPT,
    _RE_RUNNING_TASK,
    _RE_SHELL_PROMPT,
    _RE_SPINNER_INLINE,
    _RE_SPINNER_START,
    _RE_THOUGHT,
    _RE_TIP_CODEX,
    AUTH_SECRET,
    IDLE_CONFIRM_COUNT,
    _activity_state,
    _append_assistant_msg,
    _away_log,
    _away_state_summary,
    _check_login_rate_limit,
    _check_token,
    _detect_interactive_prompt,
    _find_session,
    _is_valid_session_name,
    _login_attempts,
    _make_token,
    _msg_similarity,
    build_session_response,
    detect_activity,
    get_pane_position,
    get_session_cwd,
    get_tmux_sessions,
)

# ─── Auth Token Tests ───


class TestMakeToken:
    def test_returns_username_colon_signature(self):
        token = _make_token("admin")
        assert ":" in token
        username, sig = token.split(":", 1)
        assert username == "admin"
        assert len(sig) == 24  # truncated hex

    def test_deterministic(self):
        assert _make_token("admin") == _make_token("admin")

    def test_different_users_different_tokens(self):
        assert _make_token("admin") != _make_token("user2")

    def test_empty_username(self):
        token = _make_token("")
        assert token.startswith(":")
        assert len(token.split(":", 1)[1]) == 24


class TestCheckToken:
    def test_valid_token(self):
        token = _make_token("admin")
        assert _check_token(token) is True

    def test_invalid_signature(self):
        assert _check_token("admin:invalidsig000000000") is False

    def test_empty_string(self):
        assert _check_token("") is False

    def test_none(self):
        assert _check_token(None) is False

    def test_no_colon(self):
        assert _check_token("nocolonhere") is False

    def test_tampered_username(self):
        token = _make_token("admin")
        tampered = "hacker" + token[5:]
        assert _check_token(tampered) is False

    def test_roundtrip(self):
        for user in ["admin", "test", "a", "user-with-dashes", "user_underscore"]:
            token = _make_token(user)
            assert _check_token(token) is True


# ─── Message Similarity Tests ───


class TestMsgSimilarity:
    def test_identical_strings(self):
        assert _msg_similarity("hello world", "hello world") == 1.0

    def test_completely_different(self):
        assert _msg_similarity("hello world", "foo bar") == 0.0

    def test_partial_overlap(self):
        sim = _msg_similarity("the quick brown fox", "the quick red dog")
        assert 0.0 < sim < 1.0
        # "the" and "quick" overlap = 2 out of 4 = 0.5
        assert sim == pytest.approx(0.5)

    def test_empty_first(self):
        assert _msg_similarity("", "hello") == 0.0

    def test_empty_second(self):
        assert _msg_similarity("hello", "") == 0.0

    def test_both_empty(self):
        assert _msg_similarity("", "") == 0.0

    def test_case_insensitive(self):
        assert _msg_similarity("Hello World", "hello world") == 1.0

    def test_single_word_match(self):
        assert _msg_similarity("hello", "hello") == 1.0

    def test_subset_overlap(self):
        # "a b" vs "a b c d" => overlap 2, max len 4 => 0.5
        sim = _msg_similarity("a b", "a b c d")
        assert sim == pytest.approx(0.5)


# ─── Append Assistant Message Tests ───


class TestAppendAssistantMsg:
    def test_appends_new_message(self):
        entry = {"messages": []}
        # Mock _save_messages to prevent file I/O
        import app
        original_save = app._save_messages
        app._save_messages = lambda: None
        try:
            _append_assistant_msg(entry, "hello", 1000.0)
            assert len(entry["messages"]) == 1
            assert entry["messages"][0]["role"] == "assistant"
            assert entry["messages"][0]["text"] == "hello"
            assert entry["messages"][0]["ts"] == 1000.0
        finally:
            app._save_messages = original_save

    def test_skips_identical_message(self):
        import app
        original_save = app._save_messages
        app._save_messages = lambda: None
        try:
            entry = {"messages": [{"role": "assistant", "text": "hello", "ts": 1.0}]}
            _append_assistant_msg(entry, "hello", 2.0)
            assert len(entry["messages"]) == 1  # not added
        finally:
            app._save_messages = original_save

    def test_skips_very_similar_message(self):
        import app
        original_save = app._save_messages
        app._save_messages = lambda: None
        try:
            entry = {"messages": [
                {"role": "assistant", "text": "the quick brown fox jumps", "ts": 1.0}
            ]}
            # >70% word overlap
            _append_assistant_msg(entry, "the quick brown fox leaps", 2.0)
            assert len(entry["messages"]) == 1  # not added (4/5 = 0.8 > 0.7)
        finally:
            app._save_messages = original_save

    def test_updates_different_message_in_same_turn(self):
        import app
        original_save = app._save_messages
        app._save_messages = lambda: None
        try:
            entry = {"messages": [
                {"role": "assistant", "text": "hello world", "ts": 1.0}
            ]}
            _append_assistant_msg(entry, "completely different text here", 2.0)
            assert len(entry["messages"]) == 1
            assert entry["messages"][0]["text"] == "completely different text here"
            assert entry["messages"][0]["ts"] == 2.0
        finally:
            app._save_messages = original_save

    def test_creates_messages_key_if_missing(self):
        import app
        original_save = app._save_messages
        app._save_messages = lambda: None
        try:
            entry = {}
            _append_assistant_msg(entry, "first message", 1.0)
            assert "messages" in entry
            assert len(entry["messages"]) == 1
        finally:
            app._save_messages = original_save

    def test_updates_assistant_message_after_last_user(self):
        import app
        original_save = app._save_messages
        app._save_messages = lambda: None
        try:
            entry = {"messages": [
                {"role": "assistant", "text": "old message", "ts": 1.0},
                {"role": "user", "text": "user input", "ts": 2.0},
                {"role": "assistant", "text": "recent message", "ts": 3.0},
            ]}
            # Same as an older turn, but the current turn's assistant bubble is updated.
            _append_assistant_msg(entry, "old message", 4.0)
            assert len(entry["messages"]) == 3
            assert entry["messages"][-1]["text"] == "old message"
        finally:
            app._save_messages = original_save


# ─── Away Mode Utility Tests ───


class TestAwayLog:
    def test_appends_log_entry(self):
        state = {"phase": 1, "step": 2, "log": []}
        _away_log(state, "test action")
        assert len(state["log"]) == 1
        assert state["log"][0]["action"] == "test action"
        assert state["log"][0]["phase"] == 1
        assert state["log"][0]["step"] == 2
        assert "ts" in state["log"][0]

    def test_creates_log_list_if_missing(self):
        state = {"phase": 1, "step": 1}
        _away_log(state, "first entry")
        assert "log" in state
        assert len(state["log"]) == 1

    def test_truncates_at_200_entries(self):
        state = {"phase": 1, "step": 1, "log": [{"ts": i, "phase": 1, "step": 1, "action": f"entry-{i}"} for i in range(200)]}
        _away_log(state, "entry-200")
        assert len(state["log"]) == 200  # stays at 200, not 201
        assert state["log"][-1]["action"] == "entry-200"
        assert state["log"][0]["action"] == "entry-1"  # entry-0 was dropped

    def test_defaults_phase_and_step(self):
        state = {}
        _away_log(state, "no phase")
        assert state["log"][0]["phase"] == 0
        assert state["log"][0]["step"] == 0


class TestAwayStateSummary:
    def test_returns_safe_dict(self):
        state = {
            "enabled": True,
            "phase": 3,
            "phase_name": "execute",
            "step": 2,
            "step_name": "running tests",
            "started_at": 1000.0,
            "log": [{"ts": 1, "phase": 1, "step": 1, "action": "test"}],
            "report": "all good",
            "task": "SHOULD_NOT_APPEAR",  # asyncio.Task — not JSON-safe
        }
        summary = _away_state_summary(state)
        assert summary["enabled"] is True
        assert summary["phase"] == 3
        assert summary["phase_name"] == "execute"
        assert "task" not in summary
        assert json.dumps(summary)  # must be JSON-serializable

    def test_empty_state_defaults(self):
        summary = _away_state_summary({})
        assert summary["enabled"] is False
        assert summary["phase"] == 0
        assert summary["phase_name"] == ""


# ─── Interactive Prompt Detection Tests ───


class TestDetectInteractivePrompt:
    def test_no_prompt(self):
        assert _detect_interactive_prompt("just some normal output\nno prompts here") is None

    def test_no_selector(self):
        text = "1. Option one\n2. Option two\n3. Option three"
        assert _detect_interactive_prompt(text) is None  # no ❯ cursor

    def test_plan_approval_prompt(self):
        text = "\n".join([
            "Would you like to proceed",
            "❯ 1. Yes, proceed",
            "  2. No, cancel",
            "  3. Modify plan",
        ])
        result = _detect_interactive_prompt(text)
        assert result == "plan_approval"

    def test_selection_prompt(self):
        text = "\n".join([
            "Choose an option:",
            "❯ 1. First option",
            "  2. Second option",
        ])
        result = _detect_interactive_prompt(text)
        assert result == "selection_prompt"

    def test_empty_string(self):
        assert _detect_interactive_prompt("") is None

    def test_single_option_not_enough(self):
        text = "❯ 1. Only one option"
        assert _detect_interactive_prompt(text) is None

    def test_bypass_permissions_prompt(self):
        text = "\n".join([
            "bypass permissions for this session",
            "❯ 1. Yes, bypass all",
            "  2. No, ask each time",
            "  3. Cancel",
        ])
        result = _detect_interactive_prompt(text)
        assert result == "plan_approval"


# ─── Session Name Validation Tests ───


class TestSessionNameValidation:
    """Test the regex pattern used for session name validation."""

    def test_valid_names(self):
        import re
        pattern = r'^[a-zA-Z0-9_-]+$'
        valid = ["test", "my-session", "session_1", "ABC123", "a", "a-b-c", "a_b_c"]
        for name in valid:
            assert re.match(pattern, name), f"Should be valid: {name}"

    def test_invalid_names(self):
        import re
        pattern = r'^[a-zA-Z0-9_-]+$'
        invalid = ["", "test session", "test;rm -rf /", "test$(cmd)", "../etc", "test\ninjection", "test\x00null"]
        for name in invalid:
            assert not re.match(pattern, name), f"Should be invalid: {name}"


# ─── Path Traversal Protection Tests ───


class TestClaudeMdPathValidation:
    """Test the path validation logic used in api_save_claude_md."""

    def _validate_path(self, path: str) -> bool:
        """Reproduce the validation logic from api_save_claude_md."""
        from pathlib import Path
        if not path.endswith("AGENTS.md"):
            return False
        real_path = os.path.realpath(path)
        home_dir = str(Path.home())
        if not real_path.startswith(home_dir + "/") and real_path != home_dir:
            return False
        if not real_path.endswith("/AGENTS.md"):
            return False
        return True

    def test_valid_home_claude_md(self):
        from pathlib import Path
        path = str(Path.home() / "AGENTS.md")
        assert self._validate_path(path) is True

    def test_valid_project_claude_md(self):
        from pathlib import Path
        path = str(Path.home() / "some-project" / "AGENTS.md")
        assert self._validate_path(path) is True

    def test_rejects_etc_claude_md(self):
        assert self._validate_path("/etc/AGENTS.md") is False

    def test_rejects_root_claude_md(self):
        assert self._validate_path("/root/AGENTS.md") is False

    def test_rejects_dot_dot_traversal(self):
        from pathlib import Path
        path = str(Path.home() / ".." / "etc" / "AGENTS.md")
        assert self._validate_path(path) is False

    def test_rejects_non_claude_md(self):
        from pathlib import Path
        path = str(Path.home() / "some-file.txt")
        assert self._validate_path(path) is False

    def test_rejects_tricky_suffix(self):
        # "notAGENTS.md" ends with AGENTS.md but isn't a standalone filename
        from pathlib import Path
        path = str(Path.home() / "notAGENTS.md")
        # os.path.realpath resolves to /home/user/notAGENTS.md
        # endswith("/AGENTS.md") would fail since it's "/notAGENTS.md"
        assert self._validate_path(path) is False


# ─── _find_session Helper Tests ───


class TestFindSession:
    """Test the _find_session helper (mocking get_tmux_sessions)."""

    def test_finds_existing_session(self):
        import app
        original = app.get_tmux_sessions
        app.get_tmux_sessions = lambda: [
            {"name": "sess1", "windows": "1"},
            {"name": "sess2", "windows": "2"},
        ]
        try:
            sessions, found = _find_session("sess1")
            assert found is not None
            assert found["name"] == "sess1"
            assert len(sessions) == 2
        finally:
            app.get_tmux_sessions = original

    def test_returns_none_for_missing(self):
        import app
        original = app.get_tmux_sessions
        app.get_tmux_sessions = lambda: [
            {"name": "sess1", "windows": "1"},
        ]
        try:
            sessions, found = _find_session("nonexistent")
            assert found is None
            assert len(sessions) == 1
        finally:
            app.get_tmux_sessions = original

    def test_empty_sessions_list(self):
        import app
        original = app.get_tmux_sessions
        app.get_tmux_sessions = lambda: []
        try:
            sessions, found = _find_session("any")
            assert found is None
            assert sessions == []
        finally:
            app.get_tmux_sessions = original

    def test_returns_correct_session_dict(self):
        import app
        original = app.get_tmux_sessions
        app.get_tmux_sessions = lambda: [
            {"name": "a", "windows": "1", "attached": False},
            {"name": "b", "windows": "3", "attached": True},
        ]
        try:
            _, found = _find_session("b")
            assert found["windows"] == "3"
            assert found["attached"] is True
        finally:
            app.get_tmux_sessions = original


# ─── get_tmux_sessions Parsing Tests ───


class TestGetTmuxSessions:
    """Test tmux session list parsing with mocked subprocess."""

    @pytest.fixture(autouse=True)
    def _show_test_sessions_in_codex_dashboard(self):
        # `get_tmux_sessions` also re-adds *parked* sessions from the lifecycle
        # store so a retained session does not vanish from the UI. That store is
        # real state on the host, so without isolating it these tests fail on any
        # box that happens to have a parked session.
        import app as _app
        empty = {"sessions": {}}
        with patch("app._session_is_codex", return_value=True), \
             patch.object(_app._session_lifecycle, "snapshot", return_value=empty):
            yield

    @patch("app.subprocess.run")
    def test_parses_standard_output(self, mock_run):
        mock_run.return_value = MagicMock(
            returncode=0,
            stdout="main:3:1700000000:1\nwork:1:1700001000:0\n"
        )
        sessions = get_tmux_sessions()
        assert len(sessions) == 2
        assert sessions[0]["name"] == "main"
        assert sessions[0]["windows"] == "3"
        assert sessions[0]["created"] == "1700000000"
        assert sessions[0]["attached"] is True
        assert sessions[1]["name"] == "work"
        assert sessions[1]["attached"] is False

    @patch("app.subprocess.run")
    def test_empty_output(self, mock_run):
        mock_run.return_value = MagicMock(returncode=0, stdout="")
        sessions = get_tmux_sessions()
        assert sessions == []

    @patch("app.subprocess.run")
    def test_nonzero_returncode(self, mock_run):
        mock_run.return_value = MagicMock(returncode=1, stdout="error")
        sessions = get_tmux_sessions()
        assert sessions == []

    @patch("app.subprocess.run")
    def test_subprocess_exception(self, mock_run):
        mock_run.side_effect = Exception("tmux not running")
        sessions = get_tmux_sessions()
        assert sessions == []

    @patch("app.subprocess.run")
    def test_partial_fields(self, mock_run):
        """Session line with fewer fields than expected."""
        mock_run.return_value = MagicMock(returncode=0, stdout="lonely\n")
        sessions = get_tmux_sessions()
        assert len(sessions) == 1
        assert sessions[0]["name"] == "lonely"
        assert sessions[0]["windows"] == "?"
        assert sessions[0]["created"] == ""
        assert sessions[0]["attached"] is False

    @patch("app.subprocess.run")
    def test_session_name_with_colons(self, mock_run):
        """Session name containing colons splits correctly (only first 4 parts used)."""
        mock_run.return_value = MagicMock(
            returncode=0, stdout="my:session:2:1700000000:0\n"
        )
        sessions = get_tmux_sessions()
        # parts[0] = "my", parts[1] = "session", parts[2] = "2", parts[3] = "1700000000"
        assert sessions[0]["name"] == "my"


# ─── get_pane_position Tests ───


class TestGetPanePosition:
    @patch("app.subprocess.run")
    def test_parses_position(self, mock_run):
        mock_run.return_value = MagicMock(returncode=0, stdout="500:25\n")
        pos = get_pane_position("test-session")
        assert pos["total_lines"] == 525  # 500 + 25

    @patch("app.subprocess.run")
    def test_zero_position(self, mock_run):
        mock_run.return_value = MagicMock(returncode=0, stdout="0:0\n")
        pos = get_pane_position("test-session")
        assert pos["total_lines"] == 0

    @patch("app.subprocess.run")
    def test_failure_returns_zero(self, mock_run):
        mock_run.return_value = MagicMock(returncode=1, stdout="")
        pos = get_pane_position("test-session")
        assert pos["total_lines"] == 0

    @patch("app.subprocess.run")
    def test_exception_returns_zero(self, mock_run):
        mock_run.side_effect = Exception("timeout")
        pos = get_pane_position("test-session")
        assert pos["total_lines"] == 0


# ─── detect_activity Hysteresis Tests ───


class TestDetectActivityHysteresis:
    """Test the state machine transitions in detect_activity()."""

    def setup_method(self):
        """Clean up global state before each test."""
        _activity_state.clear()

    @patch("app._detect_activity_raw")
    def test_first_reading_accepted(self, mock_raw):
        mock_raw.return_value = {"status": "busy", "command": "claude", "detail": "Working"}
        result = detect_activity("test-sess")
        assert result["status"] == "busy"
        assert "test-sess" in _activity_state

    @patch("app._detect_activity_raw")
    def test_first_idle_reading_accepted(self, mock_raw):
        mock_raw.return_value = {"status": "idle", "command": "claude", "detail": "Waiting"}
        result = detect_activity("test-sess")
        assert result["status"] == "idle"
        assert _activity_state["test-sess"]["consecutive_idle"] == 1

    @patch("app._detect_activity_raw")
    def test_idle_to_busy_immediate(self, mock_raw):
        """Transition from idle to busy should be immediate (no debounce)."""
        # Start idle
        mock_raw.return_value = {"status": "idle", "command": "claude", "detail": "Waiting"}
        detect_activity("test-sess")
        # Go busy
        mock_raw.return_value = {"status": "busy", "command": "claude", "detail": "Working"}
        result = detect_activity("test-sess")
        assert result["status"] == "busy"

    @patch("app._detect_activity_raw")
    def test_busy_to_idle_requires_confirmation(self, mock_raw):
        """Transition from busy to idle requires IDLE_CONFIRM_COUNT consecutive readings."""
        # Start busy
        mock_raw.return_value = {"status": "busy", "command": "claude", "detail": "Working"}
        detect_activity("test-sess")

        # First idle reading — should stay busy
        mock_raw.return_value = {"status": "idle", "command": "claude", "detail": "Waiting"}
        result = detect_activity("test-sess")
        assert result["status"] == "busy"  # held busy

        # Second idle reading — still busy (need IDLE_CONFIRM_COUNT=3)
        result = detect_activity("test-sess")
        assert result["status"] == "busy"  # still held

        # Third idle reading — NOW transitions to idle
        result = detect_activity("test-sess")
        assert result["status"] == "idle"

    @patch("app._detect_activity_raw")
    def test_busy_to_idle_interrupted_by_busy(self, mock_raw):
        """A busy reading during idle confirmation resets the counter."""
        # Start busy
        mock_raw.return_value = {"status": "busy", "command": "claude", "detail": "Working"}
        detect_activity("test-sess")

        # One idle reading
        mock_raw.return_value = {"status": "idle", "command": "claude", "detail": "Waiting"}
        result = detect_activity("test-sess")
        assert result["status"] == "busy"  # held

        # Interrupted by busy
        mock_raw.return_value = {"status": "busy", "command": "claude", "detail": "Still working"}
        result = detect_activity("test-sess")
        assert result["status"] == "busy"
        assert _activity_state["test-sess"]["consecutive_idle"] == 0  # reset

    @patch("app._detect_activity_raw")
    def test_idle_stays_idle(self, mock_raw):
        """Consecutive idle readings keep incrementing the counter."""
        mock_raw.return_value = {"status": "idle", "command": "bash", "detail": "Shell prompt"}
        detect_activity("test-sess")
        assert _activity_state["test-sess"]["consecutive_idle"] == 1

        detect_activity("test-sess")
        assert _activity_state["test-sess"]["consecutive_idle"] == 2

        detect_activity("test-sess")
        assert _activity_state["test-sess"]["consecutive_idle"] == 3

    @patch("app._detect_activity_raw")
    def test_busy_stays_busy(self, mock_raw):
        """Consecutive busy readings keep status as busy."""
        mock_raw.return_value = {"status": "busy", "command": "claude", "detail": "Working"}
        detect_activity("test-sess")
        detect_activity("test-sess")
        result = detect_activity("test-sess")
        assert result["status"] == "busy"
        assert _activity_state["test-sess"]["consecutive_idle"] == 0

    @patch("app._detect_activity_raw")
    def test_fallback_for_unexpected_status(self, mock_raw):
        """Covers lines 1075-1081: fallback when raw status is not busy/idle/unknown."""
        # Pre-populate state so prev is not None
        _activity_state["test-sess"] = {
            "status": "idle", "since": 0, "consecutive_idle": 1, "raw": {}
        }
        # Return a status that doesn't match any of the handled cases
        mock_raw.return_value = {"status": "custom_status", "command": "custom", "detail": ""}
        result = detect_activity("test-sess")
        assert result["status"] == "custom_status"
        assert _activity_state["test-sess"]["consecutive_idle"] == 0


# ─── build_session_response Tests ───


class TestBuildSessionResponse:
    @patch("app._session_real_auth_mode", return_value="api")
    @patch("app.detect_activity")
    def test_builds_complete_response(self, mock_activity, mock_auth_mode):
        mock_activity.return_value = {"status": "idle", "command": "codex", "detail": "Waiting"}
        sess = {"name": "test", "windows": "2", "attached": True}
        data = {
            "title": "My Task",
            "description": "Doing stuff",
            "description_at": 100.0,
            "progress": "50%",
            "progress_at": 200.0,
            "notes": "Some notes",
            "notes_at": 300.0,
            "realtime": "Active",
            "realtime_at": 400.0,
            "messages": [{"role": "assistant", "text": "hi"}],
        }
        result = build_session_response(sess, data)
        assert result["name"] == "test"
        assert result["windows"] == "2"
        assert result["attached"] is True
        assert result["title"] == "My Task"
        assert result["description"] == "Doing stuff"
        assert result["activity_status"] == "idle"
        assert result["activity_command"] == "codex"
        assert result["activity_detail"] == "Waiting"
        assert result["auth_mode"] == "api"
        assert result["autopush_mode"] == "basic"
        assert result["simple_watchdog"] is False

    @patch("app.detect_activity")
    def test_missing_data_keys_use_defaults(self, mock_activity):
        mock_activity.return_value = {"status": "unknown", "command": "", "detail": ""}
        sess = {"name": "empty", "windows": "1", "attached": False}
        result = build_session_response(sess, {})
        assert result["title"] == ""
        assert result["description"] == ""
        assert result["progress"] == ""
        assert result["notes"] == ""
        assert result["realtime"] == ""
        assert result["messages"] == []
        assert result["description_at"] == 0
        assert result["progress_at"] == 0
        assert result["notes_at"] == 0
        assert result["realtime_at"] == 0


# ─── Pre-compiled Regex Pattern Tests ───


class TestActivityRegexPatterns:
    """Test the pre-compiled regex constants used in activity detection."""

    def test_completion_matches_done(self):
        assert _RE_COMPLETION.match("● Done")
        assert _RE_COMPLETION.match("✻ Completed")

    def test_completion_matches_timed(self):
        assert _RE_COMPLETION.match("✶ Churned for 2m")
        assert _RE_COMPLETION.match("✻ Sautéed for 4m 47s")

    def test_completion_no_match_spinner(self):
        assert not _RE_COMPLETION.match("● Working…")
        assert not _RE_COMPLETION.match("⠋ Reading…")

    def test_running_task(self):
        assert _RE_RUNNING_TASK.match("◼")
        assert _RE_RUNNING_TASK.match("  ◼ task name")
        assert _RE_RUNNING_TASK.match("⎿ ◼")
        assert not _RE_RUNNING_TASK.match("some text ◼")

    def test_spinner_start(self):
        assert _RE_SPINNER_START.match("⠋ Reading…")
        assert _RE_SPINNER_START.match("● Working...")
        assert _RE_SPINNER_START.match("✶ Ebbing…")
        assert not _RE_SPINNER_START.match("normal text")
        assert not _RE_SPINNER_START.match("● Done.")  # single dot, not ellipsis

    def test_spinner_inline(self):
        assert _RE_SPINNER_INLINE.search("Let me create it. ✢ Ebbing… (thought for 8s)")
        assert _RE_SPINNER_INLINE.search("text ⠋ Working…")
        assert not _RE_SPINNER_INLINE.search("normal text with no spinner")

    def test_thought_pattern(self):
        assert _RE_THOUGHT.search("(thought for 5s)")
        assert _RE_THOUGHT.search("some text (thought for 12m)")
        assert not _RE_THOUGHT.search("(thinking)")
        assert not _RE_THOUGHT.search("thought without parens")

    def test_shell_prompt(self):
        assert _RE_SHELL_PROMPT.search("user@host:~$ ")
        assert _RE_SHELL_PROMPT.search("# ")
        assert _RE_SHELL_PROMPT.search(">>> ")  # > matches
        assert not _RE_SHELL_PROMPT.search("normal text")

    def test_idle_prompt(self):
        assert _RE_IDLE_PROMPT.match("❯ ")
        assert _RE_IDLE_PROMPT.match("❯")
        assert _RE_IDLE_PROMPT.match("➜ ")
        assert not _RE_IDLE_PROMPT.match("❯ some command")  # has text after

    def test_tip_codex(self):
        assert _RE_TIP_CODEX.search("Tip: Use codex --help for more info")
        assert not _RE_TIP_CODEX.search("Tip: Use git for version control")

    def test_completion_msg(self):
        assert _RE_COMPLETION_MSG.search("Completed for 3m")
        assert _RE_COMPLETION_MSG.search("Sautéed for 4s")
        assert not _RE_COMPLETION_MSG.search("completed for 3m")  # lowercase


# ─── get_session_cwd Tests ───


class TestGetSessionCwd:
    @patch("app.subprocess.run")
    def test_returns_cwd_on_success(self, mock_run):
        mock_run.return_value = MagicMock(returncode=0, stdout="/home/user/project\n")
        result = get_session_cwd("test-session")
        assert result == "/home/user/project"

    @patch("app.subprocess.run")
    def test_returns_empty_on_failure(self, mock_run):
        mock_run.return_value = MagicMock(returncode=1, stdout="")
        result = get_session_cwd("test-session")
        assert result == ""

    @patch("app.subprocess.run")
    def test_returns_empty_on_exception(self, mock_run):
        mock_run.side_effect = Exception("tmux not running")
        result = get_session_cwd("test-session")
        assert result == ""

    @patch("app.subprocess.run")
    def test_strips_whitespace(self, mock_run):
        mock_run.return_value = MagicMock(returncode=0, stdout="  /home/user/project  \n")
        result = get_session_cwd("test-session")
        assert result == "/home/user/project"


# ─── Login Password Comparison Tests ───


class TestLoginComparison:
    """Test that the login uses constant-time comparison."""

    def test_login_uses_hmac_compare(self):
        """Verify hmac.compare_digest is used in the login handler source."""
        import inspect

        import app
        source = inspect.getsource(app.do_login)
        assert "hmac.compare_digest" in source
        # Should NOT use plain == for password comparison
        assert "password == AUTH_PASS" not in source


# ─── datetime Module-Level Import Tests ───


class TestDatetimeImport:
    """Verify datetime is imported at module level, not inside functions."""

    def test_datetime_available_at_module_level(self):
        import app
        assert hasattr(app, 'datetime')
        assert hasattr(app, 'timezone')
        from datetime import datetime, timezone
        assert app.datetime is datetime
        assert app.timezone is timezone


# ─── Session Name Validation Tests ───


class TestIsValidSessionName:
    def test_simple_alphanumeric(self):
        assert _is_valid_session_name("mysession") is True

    def test_with_hyphen(self):
        assert _is_valid_session_name("my-session") is True

    def test_with_underscore(self):
        assert _is_valid_session_name("my_session") is True

    def test_with_dot(self):
        assert _is_valid_session_name("my.session") is True

    def test_numbers_only(self):
        assert _is_valid_session_name("12345") is True

    def test_empty_string(self):
        assert _is_valid_session_name("") is False

    def test_none_like_empty(self):
        assert _is_valid_session_name("") is False

    def test_colon_rejected(self):
        # tmux uses colon for window targeting (session:window)
        assert _is_valid_session_name("session:1") is False

    def test_space_rejected(self):
        assert _is_valid_session_name("my session") is False

    def test_semicolon_rejected(self):
        assert _is_valid_session_name("sess;rm -rf /") is False

    def test_backtick_rejected(self):
        assert _is_valid_session_name("sess`cmd`") is False

    def test_dollar_rejected(self):
        assert _is_valid_session_name("sess$(cmd)") is False

    def test_slash_rejected(self):
        assert _is_valid_session_name("path/traversal") is False

    def test_too_long_rejected(self):
        assert _is_valid_session_name("a" * 129) is False

    def test_max_length_accepted(self):
        assert _is_valid_session_name("a" * 128) is True


class TestFindSessionRejectsInvalidNames:
    @patch("app.get_tmux_sessions")
    def test_invalid_name_returns_empty_not_found(self, mock_sessions):
        mock_sessions.return_value = [{"name": "session:1", "windows": "1", "created": "", "attached": False}]
        sessions, sess = _find_session("session:1")
        assert sess is None
        assert sessions == []
        # get_tmux_sessions should NOT be called for invalid names
        mock_sessions.assert_not_called()

    @patch("app.get_tmux_sessions")
    def test_valid_name_calls_tmux(self, mock_sessions):
        mock_sessions.return_value = [{"name": "valid", "windows": "1", "created": "", "attached": False}]
        sessions, sess = _find_session("valid")
        assert sess is not None
        mock_sessions.assert_called_once()


# ─── Login Rate Limiter Tests ───


class TestLoginRateLimiter:
    def setup_method(self):
        """Clear rate limit state before each test."""
        _login_attempts.clear()

    def test_allows_first_attempt(self):
        assert _check_login_rate_limit("1.2.3.4") is True

    def test_allows_up_to_limit(self):
        for _ in range(10):
            assert _check_login_rate_limit("10.0.0.1") is True

    def test_blocks_after_limit(self):
        for _ in range(10):
            _check_login_rate_limit("10.0.0.2")
        assert _check_login_rate_limit("10.0.0.2") is False

    def test_different_ips_independent(self):
        for _ in range(10):
            _check_login_rate_limit("192.168.1.1")
        # A different IP should still be allowed
        assert _check_login_rate_limit("192.168.1.2") is True

    def test_rate_limit_resets_in_new_window(self):
        import math

        import app
        original = time.time
        fixed_time = 1000.0
        try:
            time.time = lambda: fixed_time
            app.time.time = lambda: fixed_time
            for _ in range(10):
                _check_login_rate_limit("5.5.5.5")
            assert _check_login_rate_limit("5.5.5.5") is False
            # Advance to the next window
            new_time = fixed_time + 61.0
            time.time = lambda: new_time
            app.time.time = lambda: new_time
            _login_attempts.clear()
            assert _check_login_rate_limit("5.5.5.5") is True
        finally:
            time.time = original
            app.time.time = original


# ─── Shell command safety ───


class TestApiKeyShellQuoting:
    """Shell metadata is quoted and authentication never enters pane history."""

    def test_shlex_quoted_in_session_create(self):
        import inspect

        import app
        source = inspect.getsource(app.api_create_session)
        assert "shlex.quote" in source

    def test_set_auth_mode_never_sends_credentials_to_tmux(self):
        import inspect

        import app
        source = inspect.getsource(app.api_set_auth_mode)
        assert "OPENAI_API_KEY" not in source
        assert "subprocess" not in source


# ─── Codex detached-session trust ───


class TestCodexProjectTrust:
    def test_adds_native_trust_and_preserves_other_sections(self):
        from app import _ensure_codex_project_trust, tomllib

        original = (
            'model = "gpt-5.6-sol"\n\n'
            '[mcp_servers.google]\ncommand = "uvx"\n'
        )
        result = _ensure_codex_project_trust(original, "/srv/grabo")
        parsed = tomllib.loads(result)
        assert parsed["projects"]["/srv/grabo"]["trust_level"] == "trusted"
        assert parsed["mcp_servers"]["google"]["command"] == "uvx"

    def test_replaces_untrusted_marker_idempotently(self):
        from app import _ensure_codex_project_trust

        original = (
            '[projects."/srv/grabo"]\n'
            'trust_level = "untrusted"\n'
            'trust_level = "untrusted"\n'
        )
        result = _ensure_codex_project_trust(original, "/srv/grabo")
        assert result.count('trust_level = "trusted"') == 1
        assert "untrusted" not in result
        assert _ensure_codex_project_trust(result, "/srv/grabo") == result


# ─── Atomic JSON Write Tests ───


class TestAtomicWriteJson:
    """Verify _atomic_write_json writes data correctly and leaves no .tmp file."""

    def test_writes_data_atomically(self, tmp_path):
        from app import _atomic_write_json
        target = tmp_path / "data.json"
        _atomic_write_json(target, {"key": "value", "num": 42})
        assert target.exists()
        data = json.loads(target.read_text())
        assert data == {"key": "value", "num": 42}

    def test_no_tmp_file_left_behind(self, tmp_path):
        from app import _atomic_write_json
        target = tmp_path / "state.json"
        _atomic_write_json(target, [1, 2, 3])
        tmp_file = target.with_suffix(".tmp")
        assert not tmp_file.exists(), ".tmp file should be renamed away after write"

    def test_overwrites_existing_file(self, tmp_path):
        from app import _atomic_write_json
        target = tmp_path / "notes.json"
        target.write_text(json.dumps({"old": "data"}))
        _atomic_write_json(target, {"new": "data"})
        data = json.loads(target.read_text())
        assert data == {"new": "data"}

    def test_sets_file_permissions_600(self, tmp_path):
        from app import _atomic_write_json
        target = tmp_path / "secret.json"
        _atomic_write_json(target, {"tok": "abc"})
        mode = oct(target.stat().st_mode & 0o777)
        assert mode == "0o600", f"Expected 0o600, got {mode}"


class TestSshIdeSafety:
    """Guard the small, deliberately non-interactive SSH execution surface."""

    @pytest.mark.parametrize("host", ["example.com", "host-1.internal", "192.0.2.10", "2001:db8::1"])
    def test_accepts_hostnames_and_ip_addresses(self, host):
        from app import _valid_ssh_host

        assert _valid_ssh_host(host) is True

    @pytest.mark.parametrize("host", ["", "host;id", "host name", "example..com", "$(id)"])
    def test_rejects_shell_syntax_and_invalid_hosts(self, host):
        from app import _valid_ssh_host

        assert _valid_ssh_host(host) is False

    def test_remote_command_quotes_path_without_executing_it(self):
        from app import _ssh_remote_command

        command = _ssh_remote_command("print('ok')", "/srv/app; touch /tmp/pwned")

        assert "touch /tmp/pwned" in command
        assert command.count("'") >= 2
        assert command.startswith("python3 -c ")

    def test_remote_filesystem_script_only_deletes_empty_folders(self):
        from app import _SSH_FILESYSTEM_SCRIPT

        assert "os.rmdir(path)" in _SSH_FILESYSTEM_SCRIPT
        assert "rmtree" not in _SSH_FILESYSTEM_SCRIPT
        assert "os.O_EXCL" in _SSH_FILESYSTEM_SCRIPT

    def test_remote_search_is_bounded_and_does_not_follow_links(self):
        from app import _SSH_SEARCH_SCRIPT

        assert "os.walk(root, followlinks=False)" in _SSH_SEARCH_SCRIPT
        assert "depth >= 12" in _SSH_SEARCH_SCRIPT
        assert "len(matches) >= 120" in _SSH_SEARCH_SCRIPT

    def test_terminal_audit_is_private_and_credential_free(self, tmp_path, monkeypatch):
        import app as app_module
        from app import _append_ssh_ide_audit

        audit_file = tmp_path / "ssh-ide-audit.jsonl"
        monkeypatch.setattr(app_module, "SSH_IDE_AUDIT_FILE", audit_file)
        entry = _append_ssh_ide_audit(
            {"id": "admin", "username": "admin"},
            "test-session",
            {"id": "connection-id", "label": "Production", "password": "never-record-this"},
            "terminal_focus_requested",
        )

        assert entry["action"] == "terminal_focus_requested"
        assert "never-record-this" not in audit_file.read_text()
        assert oct(audit_file.stat().st_mode & 0o777) == "0o600"

    def test_git_input_validators_reject_path_traversal_and_bad_branches(self):
        from app import _valid_git_branch, _valid_git_pathspec

        assert _valid_git_pathspec("src/main.py")
        assert not _valid_git_pathspec("../secret")
        assert _valid_git_branch("feature/remote-ide")
        assert not _valid_git_branch("feature/../secret")

    def test_every_service_declaring_injected_names_has_configure(self):
        """A module that declares injected globals must expose configure().

        Splicing a new header onto a service module twice dropped its
        configure() function. The module still imported cleanly and failed only
        at the wiring call, so import success is not evidence the module is
        whole.
        """
        import importlib
        import re
        from pathlib import Path

        for path in sorted(Path("services").glob("*.py")):
            if path.name == "__init__.py":
                continue
            source = path.read_text()
            if "# Injected by app.py" not in source:
                continue
            module = importlib.import_module(f"services.{path.stem}")
            assert callable(getattr(module, "configure", None)), (
                f"{path} declares injected names but has no configure()"
            )
            # And it must reject an unknown name rather than silently binding it.
            try:
                module.configure(__definitely_not_a_dependency__=1)
            except TypeError:
                pass
            else:
                raise AssertionError(f"{path}: configure() accepted an unknown name")

    def test_git_panel_loads_status_on_mount(self):
        """Source Control must fetch status when it opens, not only on click.

        runGit previously ran only from user actions, so opening the panel
        showed an empty file list, no branch, and no "not a repository" notice
        -- a non-repo workspace and a clean repo looked identical, and both
        looked broken.
        """
        from pathlib import Path

        panel = Path("ide-ui/src/lib/GitPanel.svelte").read_text()
        assert "$effect(" in panel, "GitPanel has no reactive load"
        # The effect must actually request status, keyed on the connection so a
        # workspace switch refetches.
        effect = panel.split("$effect(")[1].split("})")[0]
        assert "run('status')" in effect
        assert "ide.connectionId" in effect
        assert "connectionState" in effect

    def test_ssh_terminal_starts_in_the_workspace_root(self):
        """A remote terminal must open in the workspace, not the login home.

        Plain `ssh host` lands wherever the account's home is, which is almost
        never the folder the IDE is showing. The local path already does this
        with `tmux new-window -c`; the two must behave the same.
        """
        from services import ssh as ssh_service

        profile = {"kind": "ssh", "workspace_root": "/var/www/workspace"}
        assert ssh_service._ssh_workspace_root(profile) == "/var/www/workspace"
        # No configured root still yields a usable shell.
        assert ssh_service._ssh_workspace_root({"kind": "ssh"}) == "~"

    def test_terminal_window_names_are_stable_per_index(self):
        """Index 0 keeps the original name; other indexes are distinct.

        Index 0 must not gain a suffix, or every terminal window created before
        multi-terminal support would stop resolving.
        """
        from services import ssh as ssh_service

        for kind in ("ssh", "local"):
            profile = {"kind": kind, "label": "Prod", "id": "abc123"}
            base = ssh_service._ssh_tmux_window_name(profile, 0)
            assert not base.endswith("-0")
            names = {ssh_service._ssh_tmux_window_name(profile, i) for i in range(4)}
            assert len(names) == 4, f"{kind}: window names collide across indexes"

    def test_terminal_index_is_clamped_to_the_configured_maximum(self):
        """A browser must not be able to spawn unbounded tmux windows."""
        from core.config import MAX_IDE_TERMINALS

        assert 1 <= MAX_IDE_TERMINALS <= 32
        for raw, expected in (
            ("0", 0), ("3", 3), ("-5", 0), ("9999", MAX_IDE_TERMINALS - 1),
        ):
            index = max(0, min(int(raw), MAX_IDE_TERMINALS - 1))
            assert index == expected, raw

    def test_shared_message_cache_is_one_object_not_a_copy(self):
        """services/stores.py must mutate the SAME dict app.py does.

        The session message cache is mutated in place on both sides. If the
        extraction had copied it, writes on one side would be invisible to the
        other and transcripts would silently diverge.
        """
        import app
        from services import stores as stores_service

        assert stores_service.cache is app.cache
        probe = "__cache_identity_probe__"
        try:
            app.cache[probe] = {"messages": []}
            assert probe in stores_service.cache
        finally:
            app.cache.pop(probe, None)

    def test_every_service_module_is_wired(self):
        """A configure() call that never runs leaves silent None dependencies.

        Each service declares its injected names as module globals defaulting to
        None; after import they must all be bound, or the first call into that
        path fails with a TypeError at runtime rather than at startup.
        """
        import app

        # Only names the module declares as INJECTED may not stay None. A
        # lazily-populated cache is legitimately None until first use, so read
        # each module's configure() to learn which names it expects wired.
        import inspect
        import re

        for module in (
            app.ssh_service, app.browser_service, app.autonomous_service,
            app.tmux_service, app.usage_service, app.watchdog_service,
            app.google_auth_service, app.stores_service,
        ):
            source = inspect.getsource(module)
            # Injected names are declared between the "Injected by app.py"
            # marker and the configure() definition.
            block = source.split("# Injected by app.py")
            if len(block) < 2:
                continue
            declared = re.findall(
                r"^(\w+) = (?:None|\"\")$", block[1].split("def configure")[0], re.M
            )
            unbound = [n for n in declared if getattr(module, n, "") is None]
            assert not unbound, f"{module.__name__} has unwired deps: {unbound}"

    def test_patching_a_service_sibling_on_app_reaches_the_service(self):
        """Intra-service calls must honour a patch applied on app.

        The autonomous phase functions call siblings such as
        _away_send_and_wait through their own module globals. When only a
        hand-listed subset of names was forwarded, patching that sibling on app
        rebound a copy the service never read, so the phase function called the
        REAL agent wait and the test suite hung rather than failing. Forwarding
        covers every service name for exactly this reason.
        """
        import app
        from services import autonomous as autonomous_service

        original = autonomous_service._away_send_and_wait
        marker = object()
        try:
            app._away_send_and_wait = marker
            assert autonomous_service._away_send_and_wait is marker
        finally:
            app._away_send_and_wait = original
            autonomous_service._away_send_and_wait = original

    def test_service_forwarding_covers_every_public_service_name(self):
        """A hand-maintained subset silently rots; assert the sets are complete."""
        import app

        for module, names in (
            (app.ssh_service, app._SSH_FORWARDED_NAMES),
            (app.browser_service, app._BROWSER_FORWARDED_NAMES),
            (app.autonomous_service, app._AUTONOMOUS_FORWARDED_NAMES),
        ):
            missing = [
                n for n in dir(module)
                if not n.startswith("__") and n not in names
            ]
            assert not missing, f"{module.__name__} names not forwarded: {missing[:5]}"

    def test_dashboard_template_is_loaded_and_substituted(self):
        """The page moved to templates/dashboard.html; substitution must survive.

        __ROOT_PATH__ and __BRAND__ are replaced at import, and __SIMPLE__ at
        request time. A template read that skipped the substitutions would serve
        a page with literal placeholders in its JavaScript.
        """
        import app
        from core.config import TEMPLATES_DIR

        assert (TEMPLATES_DIR / "dashboard.html").is_file()
        assert (TEMPLATES_DIR / "login.html").is_file()
        # Import-time substitutions are done.
        assert "__ROOT_PATH__" not in app.HTML_PAGE
        assert "__BRAND__" not in app.HTML_PAGE
        # The per-request one is deliberately still present.
        assert "__SIMPLE__" in app.HTML_PAGE
        assert app.HTML_PAGE.startswith("<!doctype html>")
        assert len(app.HTML_PAGE) > 400_000

    def test_ssh_service_identity_follows_a_patched_app_current_user(self):
        """The connection ownership gate must honour `patch("app._current_user")`.

        services/ssh.py originally imported _current_user directly, which froze
        the pre-patch function: the per-connection gate then ran as the real
        user while the test believed it was another tenant, and a cross-tenant
        access test failed. Identity is injected for exactly this reason.
        """
        from unittest.mock import patch

        import app
        from services import ssh as ssh_service

        sentinel = {"id": "probe-user", "role": "member"}
        with patch.object(app, "_current_user", return_value=sentinel):
            assert ssh_service._current_user(None) is sentinel

    def test_ssh_service_does_not_import_the_application(self):
        """services/ssh.py must stay injectable, not import app."""
        import re
        from pathlib import Path

        source = Path("services/ssh.py").read_text()
        for line in re.findall(r"^\s*(?:from|import)\s+\S+", source, re.M):
            root = line.split()[-1].split(".")[0]
            assert root != "app", f"services/ssh.py imports the application: {line}"

    def test_patching_ssh_paths_on_app_reaches_the_service(self):
        """`monkeypatch.setattr(app, "SSH_...")` must reach services/ssh.py.

        The vault and connection files moved; without attribute forwarding a
        patch would rebind a name nothing reads, and tests would assert against
        app.py while the service quietly used the real paths.
        """
        from pathlib import Path

        import app
        from services import ssh as ssh_service

        original = ssh_service.SSH_VAULT_KEY_FILE
        try:
            app.SSH_VAULT_KEY_FILE = Path("/tmp/probe-vault.key")
            assert ssh_service.SSH_VAULT_KEY_FILE == Path("/tmp/probe-vault.key")
        finally:
            app.SSH_VAULT_KEY_FILE = original
            ssh_service.SSH_VAULT_KEY_FILE = original

    def test_user_lookups_follow_a_patched_app_load_users(self):
        """Extraction must not break the `app._load_users` monkeypatch seam.

        Routes call _find_user_by_id, which lives in core/users.py. If that
        module called its own _load_users global directly, patching
        app._load_users would stop steering lookups and handlers would silently
        read the real users file -- which is exactly what broke six tests when
        this module was first extracted.
        """
        from unittest.mock import patch

        import app

        fake = [{"id": "u_probe", "username": "probe", "role": "user"}]
        with patch.object(app, "_load_users", return_value=fake):
            found = app._find_user_by_id("u_probe")
        assert found is not None and found["username"] == "probe"

    def test_users_module_does_not_import_the_application(self):
        """core/users.py must stay a leaf: injection, not a back-import."""
        import re
        from pathlib import Path

        source = Path("core/users.py").read_text()
        for line in re.findall(r"^\s*(?:from|import)\s+\S+", source, re.M):
            root = line.split()[-1].split(".")[0]
            assert root != "app", f"core/users.py imports the application: {line}"

    def test_token_signing_stays_backward_compatible(self):
        """Extracted signing must not invalidate cookies already in browsers.

        The primitives moved to core/tokens.py; if the output changed, every
        signed-in user would be silently logged out on deploy.
        """
        import base64
        import hashlib
        import hmac

        import app

        secret = app.AUTH_SECRET

        def legacy_token(user_id):
            sig = hmac.new(
                secret.encode(), user_id.encode(), hashlib.sha256
            ).hexdigest()[:24]
            return f"{user_id}:{sig}"

        def legacy_state(payload):
            sig = hmac.new(
                secret.encode(), payload.encode(), hashlib.sha256
            ).hexdigest()[:24]
            return base64.urlsafe_b64encode((payload + "|" + sig).encode()).decode()

        for user_id in ("admin", "member", ""):
            assert app._make_token(user_id) == legacy_token(user_id)
            assert app._check_token(legacy_token(user_id)) is True
        for payload in ("state", "a|b", ""):
            assert app._sign_state(payload) == legacy_state(payload)
            assert app._verify_state(legacy_state(payload)) == payload

    def test_auth_secret_has_exactly_one_definition(self):
        """core/tokens.py must take the secret as an argument, never define it."""
        from pathlib import Path

        # Check code, not prose: the module docstring explains AUTH_SECRET, so
        # match only an actual assignment or import of it.
        import re

        source = Path("core/tokens.py").read_text()
        assert not re.search(r"^\s*AUTH_SECRET\s*=", source, re.M)
        assert not re.search(r"^\s*(?:from|import).*AUTH_SECRET", source, re.M)
        assert not re.search(r"^\s*\w+\s*=.*token_hex\(", source, re.M)

    def test_extracted_helpers_are_not_redefined_in_app(self):
        """A leftover definition would shadow the import and silently diverge."""
        import re
        from pathlib import Path

        source = Path("app.py").read_text()
        for name in (
            "_is_admin", "_is_valid_session_name", "_tmux_safe_label",
            "_valid_git_branch", "_valid_git_commit_ref", "_valid_git_pathspec",
        ):
            found = re.findall(rf"^def {name}\b", source, re.M)
            assert not found, f"{name} is still defined in app.py"

    def test_validators_module_is_dependency_free(self):
        """It must import nothing from the app, or it cannot be a leaf module."""
        from pathlib import Path

        import re

        source = Path("core/validators.py").read_text()
        imports = re.findall(r"^\s*(?:from|import)\s+\S+", source, re.M)
        for line in imports:
            assert "app" not in line.split()[-1].split(".")[0], line
            assert "core.config" not in line, line

    def test_config_paths_anchor_to_the_repository_root(self):
        """core/config.py lives one level down, so __file__ must not anchor paths.

        Writing `Path(__file__).parent / "static"` inside core/ silently resolves
        to core/static -- the exact bug this extraction introduced and which
        value-comparison against app.py caught.
        """
        import core.config as config

        assert config.REPO_ROOT.name == "multibuilder"
        assert (config.REPO_ROOT / "app.py").is_file()
        for name in ("IDE_BUNDLE_DIR", "QA_OUTPUT_DIR", "GOOGLE_MCP_SCRIPT"):
            value = getattr(config, name)
            assert "core" not in value.parts[-3:], f"{name} resolved inside core/: {value}"

    def test_app_reexports_every_config_constant(self):
        """Existing `from app import X` must keep working after the extraction."""
        import app
        import core.config as config

        exported = [
            n for n in dir(config)
            if n.isupper() and not n.startswith("__") and n != "REPO_ROOT"
        ]
        assert len(exported) > 50, "config module looks empty"
        missing = [n for n in exported if not hasattr(app, n)]
        assert not missing, f"app.py no longer re-exports: {missing}"
        # And the values must be the same object, not a divergent copy.
        for name in exported:
            assert getattr(app, name) == getattr(config, name), name

    def test_auth_secret_is_not_defined_in_config_module(self):
        """A per-process generated secret must have exactly one definition.

        With TMUX_DASH_SECRET unset it falls back to secrets.token_hex(); if both
        app.py and core/config.py defined it they would generate different values
        and signed cookies would stop validating.
        """
        import core.config as config
        from pathlib import Path

        assert not hasattr(config, "AUTH_SECRET")
        assert "AUTH_SECRET" not in Path("core/config.py").read_text()

    def test_alembic_revisions_form_a_single_linear_chain(self):
        """Every revision must chain to exactly one parent, with one root.

        A duplicated down_revision (easy to create by writing two revisions off
        the same head) makes `alembic upgrade head` fail with a multiple-heads
        error at deploy time rather than in review.
        """
        import re
        from pathlib import Path

        versions = sorted(Path("alembic/versions").glob("*.py"))
        assert versions, "no Alembic revisions found"

        revisions, parents = {}, []
        for path in versions:
            body = path.read_text()
            rev = re.search(r'^revision = ["\'](.+?)["\']', body, re.M).group(1)
            down = re.search(r'^down_revision = (.+)$', body, re.M).group(1).strip()
            revisions[rev] = path.name
            parents.append(None if down == "None" else down.strip("\"'"))

        roots = [p for p in parents if p is None]
        assert len(roots) == 1, "expected exactly one base revision"
        # No two revisions may share a parent, and every parent must exist.
        named = [p for p in parents if p is not None]
        assert len(named) == len(set(named)), "two revisions share a down_revision"
        for parent in named:
            assert parent in revisions, f"unknown down_revision {parent}"

    def test_alembic_ini_carries_no_database_credentials(self):
        """The committed ini must not hold a URL; env.py reads the env var."""
        from pathlib import Path

        ini = Path("alembic.ini").read_text()
        for line in ini.splitlines():
            stripped = line.strip()
            if stripped.startswith("sqlalchemy.url"):
                raise AssertionError(f"alembic.ini defines a URL: {stripped}")
        assert "TMUX_DASH_DB_URL" in Path("alembic/env.py").read_text()

    def test_lifecycle_store_accepts_injected_shared_backend(self):
        """The lifecycle store must be able to ride the shared (DB) backend.

        A host-local JSON file is destroyed by exactly the user-manager teardown
        that kills the tmux sessions, so the cwd needed to restore them has to
        live somewhere shared.
        """
        from pathlib import Path
        from runtime_control import SessionLifecycleStore

        class FakeShared:
            def __init__(self):
                self.value = {"version": 1, "sessions": {}}

            def read(self):
                return self.value

            def update(self, mutate):
                result = mutate(self.value)
                return self.value, result

        backing = FakeShared()
        store = SessionLifecycleStore(Path("/nonexistent/never-written.json"), store=backing)
        store.touch("s1", source="create", cwd="/srv/project")

        # The injected store received it; no file was touched.
        assert backing.value["sessions"]["s1"]["cwd"] == "/srv/project"
        assert store.get("s1")["cwd"] == "/srv/project"

    def test_lifecycle_touch_never_clears_a_recorded_cwd(self):
        """A later touch without a cwd must not erase the restore directory."""
        import tempfile
        from pathlib import Path
        from runtime_control import SessionLifecycleStore

        with tempfile.TemporaryDirectory() as folder:
            store = SessionLifecycleStore(Path(folder) / "lifecycle.json")
            store.touch("s1", source="create", cwd="/srv/project")
            store.touch("s1", source="poll")

            assert store.get("s1")["cwd"] == "/srv/project"
            assert store.get("s1")["last_source"] == "poll"

    def test_git_commit_ref_validator_only_accepts_object_names(self):
        """`show` reaches `git show`, so the ref must not carry revision syntax.

        A branch-shaped validator would allow `HEAD@{1}` or `a..b`, turning a
        history click into an arbitrary-revision selector; only hex is safe.
        """
        from app import _valid_git_commit_ref

        assert _valid_git_commit_ref("20bd0f8")
        assert _valid_git_commit_ref("ae8a6856e1d1f03e893065e0adce397d1970348d")
        for bad in (
            "", "a", "HEAD", "HEAD@{1}", "main..dev", "../../etc/passwd",
            "20bd0f8;rm -rf /", "--output=/tmp/x", "$(id)",
        ):
            assert not _valid_git_commit_ref(bad), bad

    def test_git_script_reports_empty_history_instead_of_failing(self):
        """`git log` errors on a repo with no commits; that is empty, not broken."""
        import json
        import re
        import subprocess
        import tempfile
        from pathlib import Path

        source = Path("services/ssh.py").read_text()
        script = re.search(r'_SSH_GIT_SCRIPT = """(.*?)"""', source, re.S).group(1)
        with tempfile.TemporaryDirectory() as folder:
            subprocess.run(["git", "init", "-q", folder], check=True)
            result = subprocess.run(
                ["python3", "-c", script,
                 json.dumps({"action": "log", "path": ".", "files": [],
                             "message": "", "branch": "", "ref": ""})],
                cwd=folder, text=True, capture_output=True, timeout=60,
            )
            assert result.returncode == 0, result.stderr
            payload = json.loads(result.stdout)
            assert payload["ok"] is True
            assert payload["commits"] == []

    def test_git_script_log_returns_structured_commits(self):
        """History must arrive as rows, not as text in the shared output field."""
        import json
        import re
        import subprocess
        import tempfile
        from pathlib import Path

        source = Path("services/ssh.py").read_text()
        script = re.search(r'_SSH_GIT_SCRIPT = """(.*?)"""', source, re.S).group(1)
        with tempfile.TemporaryDirectory() as folder:
            def run(*argv):
                return subprocess.run(argv, cwd=folder, check=True, capture_output=True)

            run("git", "init", "-q", ".")
            run("git", "config", "user.email", "t@example.com")
            run("git", "config", "user.name", "Tester")
            Path(folder, "file.txt").write_text("hello\n")
            run("git", "add", "file.txt")
            run("git", "commit", "-qm", "add file")
            result = subprocess.run(
                ["python3", "-c", script,
                 json.dumps({"action": "log", "path": ".", "files": [],
                             "message": "", "branch": "", "ref": ""})],
                cwd=folder, text=True, capture_output=True, timeout=60,
            )
            assert result.returncode == 0, result.stderr
            payload = json.loads(result.stdout)
            assert len(payload["commits"]) == 1
            entry = payload["commits"][0]
            assert entry["subject"] == "add file"
            assert entry["author"] == "Tester"
            assert len(entry["hash"]) == 40
            # The status must still be present: history must not replace the
            # file list the panel renders from.
            assert "## " in payload["status"]

    def test_workspace_paths_are_relative_and_commands_enter_configured_root(self):
        from app import _normalized_workspace_path, _ssh_workspace_command

        profile = {"workspace_root": "/srv/app"}
        assert _normalized_workspace_path(profile, "src/main.py") == "src/main.py"
        assert _normalized_workspace_path(profile, "../secret") is None
        assert _normalized_workspace_path(profile, "/etc/passwd") is None
        command = _ssh_workspace_command(profile, "print('ok')", "src/main.py")
        assert command.startswith("cd -- /srv/app && python3 -c ")

    def test_rejects_nul_and_overlong_remote_paths(self):
        from app import _normalized_remote_path

        assert _normalized_remote_path("src/main.py") == "src/main.py"
        assert _normalized_remote_path("bad\x00path") is None
        assert _normalized_remote_path("a" * 4097) is None

    def test_control_socket_is_short_and_scoped_to_session_and_connection(self):
        from app import _ssh_control_socket

        first = _ssh_control_socket("project-alpha", "abcdefghijkl")
        other_session = _ssh_control_socket("project-beta", "abcdefghijkl")
        other_connection = _ssh_control_socket("project-alpha", "zyxwvutsrqpo")

        assert len(str(first)) < 100
        assert first != other_session
        assert first != other_connection

    @pytest.mark.parametrize("session, connection", [("bad/name", "abcdefghijkl"), ("valid", "short")])
    def test_control_socket_rejects_invalid_workspace_identifiers(self, session, connection):
        from app import _ssh_control_socket

        with pytest.raises(ValueError):
            _ssh_control_socket(session, connection)

    @patch("app.shutil.which", return_value="/usr/bin/ssh")
    def test_argv_disables_interactive_auth_and_forwarding(self, _which):
        from app import _ssh_argv

        argv = _ssh_argv({"host": "example.com", "username": "deploy", "port": 2222})

        assert argv[-1] == "deploy@example.com"
        assert "BatchMode=yes" in argv
        assert "ClearAllForwardings=yes" in argv
        assert "StrictHostKeyChecking=yes" in argv

    @patch("app._ssh_control_is_alive", side_effect=[False, True])
    @patch("app.shutil.which", return_value="/usr/bin/ssh")
    @patch("app.subprocess.run")
    def test_starts_a_session_scoped_control_master(self, run, _which, _alive, tmp_path, monkeypatch):
        import app as app_module
        from app import _ssh_start_control_master

        monkeypatch.setattr(app_module, "SSH_CONTROL_DIR", tmp_path / "ssh-control")
        run.return_value = MagicMock(returncode=0, stderr=b"")
        profile = {"id": "abcdefghijkl", "host": "example.com", "username": "deploy", "port": 22}

        socket_path = _ssh_start_control_master(profile, "test-session")

        command = run.call_args.args[0]
        assert socket_path.parent == tmp_path / "ssh-control"
        assert "ControlMaster=yes" in command
        assert "ControlPersist=30m" in command
        assert command[-1] == "deploy@example.com"

    @patch("app._ssh_control_is_alive", return_value=True)
    @patch("app.shutil.which", return_value="/usr/bin/tmux")
    @patch("app.subprocess.run")
    def test_opens_dedicated_tmux_window_for_live_connection(self, run, _which, _alive):
        from app import _ssh_open_tmux_window

        run.return_value = MagicMock(returncode=0, stderr=b"")
        profile = {"id": "abcdefghijkl", "label": "Production API", "host": "example.com", "username": "deploy"}

        window_name = _ssh_open_tmux_window(profile, "test-session")

        command = run.call_args.args[0]
        assert command[:5] == ["tmux", "new-window", "-d", "-t", "test-session"]
        assert window_name == "ssh-Production-API-abcdefgh"

    @patch("app._ssh_control_is_alive", side_effect=[False, True])
    @patch("app.shutil.which", return_value="/usr/bin/ssh")
    @patch("app.subprocess.run")
    def test_password_uses_ephemeral_askpass_script(self, run, _which, _alive):
        from app import _ssh_start_control_master

        run.return_value = MagicMock(returncode=0, stderr=b"")
        profile = {"id": "abcdefghijkl", "auth_mode": "password", "host": "example.com", "username": "deploy"}

        _ssh_start_control_master(profile, "test-session", password="correct horse battery staple")

        environment = run.call_args.kwargs["env"]
        assert environment["TMUX_DASH_SSH_PASSWORD"] == "correct horse battery staple"
        assert not os.path.exists(environment["SSH_ASKPASS"])

    @patch("app.shutil.which", return_value="/usr/bin/tmux")
    @patch("app.subprocess.run")
    def test_focuses_matching_tmux_ssh_window(self, run, _which):
        from app import _ssh_focus_tmux_window

        run.return_value = MagicMock(returncode=0, stderr=b"")
        window_name = _ssh_focus_tmux_window(
            {"id": "abcdefghijkl", "label": "Production API"}, "test-session"
        )

        assert window_name == "ssh-Production-API-abcdefgh"
        assert run.call_args.args[0] == [
            "tmux", "select-window", "-t", "test-session:=ssh-Production-API-abcdefgh",
        ]


class TestSshCredentialVault:
    """Credentials are stored now, so these guard the at-rest boundary."""

    def _isolate(self, tmp_path, monkeypatch):
        import app as app_module

        monkeypatch.setattr(app_module, "SSH_VAULT_KEY_FILE", tmp_path / "ssh-vault.key")
        monkeypatch.setattr(app_module, "SSH_CONNECTIONS_FILE", tmp_path / "ssh-connections.json")
        monkeypatch.setattr(app_module, "_ssh_vault_key_cache", None)
        monkeypatch.delenv("TMUX_DASH_SSH_KEY", raising=False)
        return app_module

    def test_roundtrip_recovers_the_secret(self, tmp_path, monkeypatch):
        app_module = self._isolate(tmp_path, monkeypatch)

        sealed = app_module._ssh_vault_encrypt("hunter2", "conn-1")
        assert app_module._ssh_vault_decrypt(sealed, "conn-1") == "hunter2"

    def test_ciphertext_does_not_contain_the_plaintext(self, tmp_path, monkeypatch):
        app_module = self._isolate(tmp_path, monkeypatch)

        sealed = app_module._ssh_vault_encrypt("correct-horse-battery", "conn-1")
        assert "correct-horse-battery" not in sealed
        assert b"correct-horse-battery" not in base64.b64decode(sealed)

    def test_nonce_is_fresh_so_equal_secrets_differ(self, tmp_path, monkeypatch):
        app_module = self._isolate(tmp_path, monkeypatch)

        assert app_module._ssh_vault_encrypt("same", "conn-1") != app_module._ssh_vault_encrypt(
            "same", "conn-1"
        )

    def test_ciphertext_is_bound_to_its_connection_id(self, tmp_path, monkeypatch):
        """A blob copied onto another connection record must not decrypt."""
        app_module = self._isolate(tmp_path, monkeypatch)

        sealed = app_module._ssh_vault_encrypt("hunter2", "conn-1")
        with pytest.raises(RuntimeError):
            app_module._ssh_vault_decrypt(sealed, "conn-2")

    def test_tampered_ciphertext_is_rejected(self, tmp_path, monkeypatch):
        app_module = self._isolate(tmp_path, monkeypatch)

        raw = bytearray(base64.b64decode(app_module._ssh_vault_encrypt("hunter2", "conn-1")))
        raw[-1] ^= 0x01
        with pytest.raises(RuntimeError):
            app_module._ssh_vault_decrypt(base64.b64encode(bytes(raw)).decode(), "conn-1")

    def test_keyfile_is_created_private(self, tmp_path, monkeypatch):
        app_module = self._isolate(tmp_path, monkeypatch)

        app_module._ssh_vault_encrypt("hunter2", "conn-1")
        keyfile = tmp_path / "ssh-vault.key"
        assert keyfile.is_file()
        assert stat.S_IMODE(keyfile.stat().st_mode) == 0o600

    def test_key_survives_restart_so_sessions_resume(self, tmp_path, monkeypatch):
        """The whole point of storing credentials: a restart must still decrypt."""
        app_module = self._isolate(tmp_path, monkeypatch)

        sealed = app_module._ssh_vault_encrypt("hunter2", "conn-1")
        monkeypatch.setattr(app_module, "_ssh_vault_key_cache", None)  # simulate restart
        assert app_module._ssh_vault_decrypt(sealed, "conn-1") == "hunter2"

    def test_env_key_takes_precedence_and_writes_no_keyfile(self, tmp_path, monkeypatch):
        app_module = self._isolate(tmp_path, monkeypatch)
        monkeypatch.setenv("TMUX_DASH_SSH_KEY", base64.b64encode(b"k" * 32).decode())

        assert app_module._ssh_vault_key() == b"k" * 32
        assert not (tmp_path / "ssh-vault.key").exists()

    @pytest.mark.parametrize("bad", ["not-base64!!", base64.b64encode(b"short").decode()])
    def test_malformed_env_key_is_rejected(self, tmp_path, monkeypatch, bad):
        app_module = self._isolate(tmp_path, monkeypatch)
        monkeypatch.setenv("TMUX_DASH_SSH_KEY", bad)

        with pytest.raises(RuntimeError):
            app_module._ssh_vault_key()

    def test_empty_secret_stays_empty(self, tmp_path, monkeypatch):
        app_module = self._isolate(tmp_path, monkeypatch)

        assert app_module._ssh_vault_encrypt("", "conn-1") == ""
        assert app_module._ssh_vault_decrypt("", "conn-1") == ""

    def test_public_profile_never_exposes_credentials(self, tmp_path, monkeypatch):
        app_module = self._isolate(tmp_path, monkeypatch)

        public = app_module._ssh_public_profile({
            "id": "conn-1",
            "label": "Prod",
            "host": "example.com",
            "username": "deploy",
            "password_enc": app_module._ssh_vault_encrypt("hunter2", "conn-1"),
            "owner_id": "alice",
        })

        assert "hunter2" not in json.dumps(public)
        assert not any(field in public for field in app_module._SSH_SECRET_FIELDS)
        assert public["has_password"] is True

    def test_ownership_allows_owner_and_admin_only(self, tmp_path, monkeypatch):
        app_module = self._isolate(tmp_path, monkeypatch)
        profile = {"id": "conn-1", "owner_id": "alice"}

        assert app_module._ssh_user_may_use_profile({"id": "alice", "role": "member"}, profile)
        assert app_module._ssh_user_may_use_profile({"id": "root", "role": "admin"}, profile)
        assert not app_module._ssh_user_may_use_profile({"id": "bob", "role": "member"}, profile)
        assert not app_module._ssh_user_may_use_profile(None, profile)

    def test_unowned_legacy_profile_is_not_claimed_by_members(self, tmp_path, monkeypatch):
        """A pre-existing profile with no owner must not become everyone's."""
        app_module = self._isolate(tmp_path, monkeypatch)

        assert not app_module._ssh_user_may_use_profile(
            {"id": "bob", "role": "member"}, {"id": "conn-1"}
        )
