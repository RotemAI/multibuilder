"""Closing a session must be quick, and must free its name.

Both symptoms had one cause. The delete path slept a flat second whatever the
processes actually did, and a session name stays fenced for as long as its
delete runs, so closing a tab and reopening the same name came straight back
with "already exists". A delete that never reached its confirmation left the
fence standing for ever, with nothing to sweep it.
"""

import os
from pathlib import Path

os.environ.setdefault("TMUX_DASH_SECRET", "test-secret-key-for-testing")
os.environ.setdefault("TMUX_DASH_PASS", "testpass")

import app as app_module


class _Lifecycle:
    """Stands in for the durable lifecycle store, holding one fixed row."""

    def __init__(self, row):
        self._row = row

    def get(self, name):
        return dict(self._row)


def test_an_orphan_ownership_row_does_not_block_the_name(monkeypatch):
    """The builder7 case: "login" was owned by nothing live, and unusable."""
    monkeypatch.setattr(app_module, "_load_session_owners", lambda: {"login": "admin"})
    monkeypatch.setattr(app_module, "_session_lifecycle", _Lifecycle({}))
    monkeypatch.setattr(app_module, "_exact_tmux_session_id", lambda name: "")

    assert app_module._durable_session_name_reserved("login") is False


def test_a_delete_still_in_flight_keeps_the_name_fenced(monkeypatch):
    """The fence itself has to survive: a reboot must not resurrect a closed tab."""
    monkeypatch.setattr(app_module, "_load_session_owners", lambda: {})
    monkeypatch.setattr(
        app_module,
        "_session_lifecycle",
        _Lifecycle({"managed": True, "desired_state": "deleting"}),
    )
    monkeypatch.setattr(app_module, "_exact_tmux_session_id", lambda name: "")

    assert app_module._durable_session_name_reserved("doomed") is True


def test_an_owner_row_blocks_while_tmux_still_holds_the_session(monkeypatch):
    monkeypatch.setattr(app_module, "_load_session_owners", lambda: {"live": "admin"})
    monkeypatch.setattr(app_module, "_session_lifecycle", _Lifecycle({}))
    monkeypatch.setattr(app_module, "_exact_tmux_session_id", lambda name: "$7")

    assert app_module._durable_session_name_reserved("live") is True


def test_close_waits_on_the_processes_not_on_a_fixed_second():
    """pkill -P reaches only direct children, and that sleep was unconditional."""
    src = Path(app_module.__file__).read_text(encoding="utf-8")

    assert (
        "browser_resource_guard.terminate_descendants" in src,
        '["pkill", "-KILL", "-P", pid_str]' in src,
        '["pkill", "-TERM", "-P", pid_str]' in src,
    ) == (True, False, False)
