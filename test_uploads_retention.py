"""Uploads die with their session, and orphaned upload dirs are swept after 14 days.

THE DEFECT THIS CATCHES: files uploaded into a session stayed under
~/.tmux-dashboard/uploads/ and users/<id>/uploads/ forever after the session was
deleted (492 MB on builder6, 2026-09-23). The sweep must never take a live or a
parked (durable) session's files, must look under every account's root, and must
delete nothing when tmux or the lifecycle store cannot be asked.
"""
import asyncio
import os
import time

os.environ.setdefault("TMUX_DASH_SECRET", "test-secret-key-for-testing")
os.environ.setdefault("TMUX_DASH_PASS", "testpass")

import pytest

import app

DAY = 86400


class _Lifecycle:
    def __init__(self, names=(), broken=False):
        self._names = list(names)
        self._broken = broken

    def snapshot(self):
        if self._broken:
            raise OSError("unreadable")
        return {"version": 2, "sessions": {n: {"parked": True} for n in self._names}}


@pytest.fixture
def home(tmp_path, monkeypatch):
    monkeypatch.setattr(app, "MESSAGES_DIR", tmp_path)
    monkeypatch.setattr(app, "UPLOADS_DIR", tmp_path / "uploads")
    (tmp_path / "uploads").mkdir()
    (tmp_path / "users" / "u_a" / "uploads").mkdir(parents=True)
    monkeypatch.setattr(app, "_session_lifecycle", _Lifecycle())
    return tmp_path


def _mk(root, name, age_days=0, files=("a.png",)):
    p = root / name
    p.mkdir(parents=True)
    t = time.time() - age_days * DAY
    for f in files:
        (p / f).write_bytes(b"x" * 10)
        os.utime(p / f, (t, t))
    os.utime(p, (t, t))
    return p


def _live(monkeypatch, names):
    monkeypatch.setattr(app, "_live_tmux_session_names",
                        lambda: None if names is None else set(names))


def test_delete_removes_the_session_dir_under_every_root(home):
    admin = home / "uploads"
    member = home / "users" / "u_a" / "uploads"
    _mk(admin, "shot")
    _mk(member, "shot")
    _mk(member, "other")
    gone = app._remove_session_uploads("shot")
    assert len(gone) == 2
    assert not (admin / "shot").exists() and not (member / "shot").exists()
    assert (member / "other").exists()


def test_delete_never_follows_a_symlink_or_escapes_the_root(home, tmp_path):
    outside = tmp_path / "outside"
    _mk(outside, "keep")
    (home / "uploads" / "link").symlink_to(outside / "keep")
    assert app._remove_session_uploads("link") == []
    assert app._remove_session_uploads("..") == []
    assert app._remove_session_uploads("") == []
    assert (outside / "keep" / "a.png").exists()


def test_sweep_keeps_live_parked_and_recent_and_removes_old_orphans(home, monkeypatch):
    admin = home / "uploads"
    member = home / "users" / "u_a" / "uploads"
    _mk(admin, "live-one", age_days=40)
    _mk(member, "parked-one", age_days=40)
    _mk(admin, "recent-orphan", age_days=3)
    _mk(admin, "old-orphan", age_days=20)
    _mk(member, "old-member-orphan", age_days=20)
    _live(monkeypatch, ["live-one"])
    monkeypatch.setattr(app, "_session_lifecycle", _Lifecycle(["parked-one"]))
    res = app._prune_orphan_uploads(max_age_days=14)
    assert sorted(os.path.basename(p) for p in res["removed"]) == ["old-member-orphan", "old-orphan"]
    assert res["kept_live"] == 2 and res["kept_recent"] == 1
    assert res["freed_bytes"] == 20
    assert (admin / "live-one").exists() and (member / "parked-one").exists()
    assert (admin / "recent-orphan").exists()


def test_a_recent_file_deep_inside_keeps_an_old_dir(home, monkeypatch):
    d = _mk(home / "uploads", "old-dir", age_days=30)
    (d / "sub").mkdir()
    (d / "sub" / "new.png").write_bytes(b"y")
    _live(monkeypatch, [])
    assert app._prune_orphan_uploads(max_age_days=14)["removed"] == []


def test_sweep_deletes_nothing_when_tmux_or_lifecycle_cannot_be_asked(home, monkeypatch):
    _mk(home / "uploads", "old-orphan", age_days=30)
    _live(monkeypatch, None)
    assert app._prune_orphan_uploads(max_age_days=14)["skipped"]
    _live(monkeypatch, [])
    monkeypatch.setattr(app, "_session_lifecycle", _Lifecycle(broken=True))
    assert app._prune_orphan_uploads(max_age_days=14)["skipped"]
    assert (home / "uploads" / "old-orphan").exists()


def test_zero_days_disables_the_sweep(home, monkeypatch):
    _mk(home / "uploads", "old-orphan", age_days=30)
    _live(monkeypatch, [])
    assert app._prune_orphan_uploads(max_age_days=0)["removed"] == []
    assert (home / "uploads" / "old-orphan").exists()


def test_sweep_ignores_stray_files_and_symlinks_at_the_root(home, monkeypatch, tmp_path):
    (home / "uploads" / "stray.txt").write_text("x")
    target = _mk(tmp_path / "elsewhere", "precious", age_days=30)
    (home / "uploads" / "precious").symlink_to(target)
    _live(monkeypatch, [])
    assert app._prune_orphan_uploads(max_age_days=14)["removed"] == []
    assert (target / "a.png").exists()


def test_the_retention_loop_is_a_controller_loop():
    src = open(app.__file__, encoding="utf-8").read()
    assert '("uploads retention", _uploads_retention_loop()),' in src
    assert asyncio.iscoroutinefunction(app._uploads_retention_loop)


def test_live_tmux_names_distinguishes_no_server_from_an_error(monkeypatch):
    class R:
        def __init__(self, rc, out="", err=""):
            self.returncode, self.stdout, self.stderr = rc, out, err

    monkeypatch.setattr(app.subprocess, "run", lambda *a, **k: R(1, err="no server running on /tmp/x"))
    assert app._live_tmux_session_names() == set()
    monkeypatch.setattr(app.subprocess, "run", lambda *a, **k: R(1, err="permission denied"))
    assert app._live_tmux_session_names() is None
    monkeypatch.setattr(app.subprocess, "run", lambda *a, **k: R(0, out="a\nb\n"))
    assert app._live_tmux_session_names() == {"a", "b"}


class _DeletingLifecycle:
    """One running generation that the delete may transition and remove."""

    def __init__(self):
        self.removed = False

    def get(self, name):
        return {"generation": "g1", "owner_id": "admin"}

    def begin_transition(self, *a, **k):
        return {}

    def remove(self, *a, **k):
        self.removed = True
        return True

    def snapshot(self):
        return {"version": 2, "sessions": {}}


def test_deleting_a_session_removes_its_uploads(home, monkeypatch):
    """The real delete path, with tmux already gone (the 'absent' branch)."""
    _mk(home / "uploads", "doomed")
    _mk(home / "users" / "u_a" / "uploads", "doomed")
    _mk(home / "uploads", "bystander")
    lifecycle = _DeletingLifecycle()
    monkeypatch.setattr(app, "_session_lifecycle", lifecycle)
    monkeypatch.setattr(app, "_find_session_for_user",
                        lambda name, user: ([], {"name": name, "virtual": True}))
    monkeypatch.setattr(app, "_strict_session_owner", lambda name, oid="": (oid, {"id": oid}))
    monkeypatch.setattr(app, "_exact_tmux_session_state", lambda name: ("absent", ""))

    async def _saved():
        return True

    monkeypatch.setattr(app, "_save_autonomous_state_async", _saved)
    monkeypatch.setattr(app, "_remove_session_tab_label", lambda name: None)
    monkeypatch.setattr(app, "_remove_session_from_tab_order", lambda name, oid: None)
    monkeypatch.setattr(app, "_load_session_owners", lambda: {})
    resp = asyncio.run(app._api_delete_session_unlocked(
        None, "doomed", expected_user={"id": "admin"}))
    assert resp.status_code == 200, resp.body
    assert lifecycle.removed
    assert not (home / "uploads" / "doomed").exists()
    assert not (home / "users" / "u_a" / "uploads" / "doomed").exists()
    assert (home / "uploads" / "bystander").exists()
