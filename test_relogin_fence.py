from contextlib import asynccontextmanager
from types import SimpleNamespace
from unittest.mock import AsyncMock, MagicMock

import pytest

import app


@asynccontextmanager
async def _unlocked(*_args, **_kwargs):
    yield


@pytest.mark.parametrize("newer_turn", [True, False])
@pytest.mark.asyncio
async def test_exact_relogin_fences_latest_turn(tmp_path, monkeypatch, newer_turn):
    generation = "a" * 32
    root = "01a035f8-3188-7c21-8cca-582b01ad3002"
    completed_turn = "01a0bfee-0cc9-7631-88e7-c506ca163c25"
    row = {
        "managed": True,
        "generation": generation,
        "owner_id": "admin",
        "desired_state": "running",
        "restore_on_startup": True,
        "resume_uuid": root,
        "cwd": str(tmp_path),
        "launch_options": {"model": "gpt-6-astra", "effort": "xhigh"},
    }
    run = MagicMock(return_value=MagicMock(returncode=0))

    monkeypatch.setattr(app, "_async_tmux_server_mutation_lock", _unlocked)
    monkeypatch.setattr(app, "_settings_restart_operation_lock", _unlocked)
    monkeypatch.setattr(app, "_strict_session_owner", lambda *_: ("admin", {"id": "admin"}))
    monkeypatch.setattr(app, "_checkpoint_active_session", lambda *_args, **_kwargs: row)
    monkeypatch.setattr(app._session_lifecycle, "get", lambda *_: row)
    monkeypatch.setattr(app._session_lifecycle, "matches", lambda *_args, **_kwargs: True)
    monkeypatch.setattr(app, "_active_session_root_thread_id", lambda *_: root)
    monkeypatch.setattr(app, "_validated_session_root_thread_id", lambda *_: root)
    monkeypatch.setattr(app, "_session_generation_is_unused", lambda *_: False)
    monkeypatch.setattr(app, "_durable_session_cwd", lambda *_: str(tmp_path))
    monkeypatch.setattr(app, "get_session_cwd", lambda *_: str(tmp_path))
    monkeypatch.setattr(app, "_exact_tmux_session_id", lambda *_: "$1")
    monkeypatch.setattr(app, "_tmux_session_matches_owner", lambda *_: True)
    monkeypatch.setattr(
        app,
        "_saved_session_model_effort",
        lambda *_: ("gpt-6-astra", "xhigh"),
    )
    monkeypatch.setattr(
        app,
        "_model_recovery_event",
        lambda *_: {
            "type": "task_started" if newer_turn else "task_complete",
            "turn_id": "newer-turn" if newer_turn else completed_turn,
        },
    )
    monkeypatch.setattr(app.subprocess, "run", run)
    monkeypatch.setattr(app, "_async_is_codex_running", AsyncMock(return_value=False))
    ensure_running = AsyncMock(return_value=True)
    monkeypatch.setattr(app, "_ensure_codex_running", ensure_running)
    monkeypatch.setattr(app.asyncio, "sleep", AsyncMock())

    result = await app._restart_codex_for_session(
        "builder6",
        expected_owner_id="admin",
        expected_generation=generation,
        expected_resume_uuid=root,
        completed_turn_id=completed_turn,
        expected_model="gpt-6-astra",
        expected_effort="xhigh",
    )

    if newer_turn:
        assert result == (False, False)
        run.assert_not_called()
        ensure_running.assert_not_awaited()
    else:
        assert result == (True, True)
        assert run.call_count == 2
        ensure_running.assert_awaited_once()


@pytest.mark.asyncio
async def test_relogin_endpoint_passes_exact_fence(monkeypatch):
    generation = "b" * 32
    root = "01a035f8-3188-7c21-8cca-582b01ad3002"
    completed_turn = "01a0bfee-0cc9-7631-88e7-c506ca163c25"
    restart = AsyncMock(return_value=(True, True))
    monkeypatch.setattr(app, "_current_user", lambda *_: {"id": "admin"})
    monkeypatch.setattr(app, "_user_can_access_session", lambda *_: True)
    monkeypatch.setattr(app, "_async_is_codex_running", AsyncMock(return_value=True))
    monkeypatch.setattr(app, "_restart_codex_for_session", restart)

    response = await app.api_session_relogin(
        "builder6",
        MagicMock(),
        SimpleNamespace(
            expected_generation=generation,
            expected_resume_uuid=root,
            completed_turn_id=completed_turn,
            expected_model="gpt-6-astra",
            expected_effort="xhigh",
        ),
    )

    assert response.status_code == 200
    restart.assert_awaited_once_with(
        "builder6",
        expected_owner_id="admin",
        expected_generation=generation,
        expected_resume_uuid=root,
        completed_turn_id=completed_turn,
        expected_model="gpt-6-astra",
        expected_effort="xhigh",
    )


@pytest.mark.asyncio
async def test_relogin_endpoint_empty_body_preserves_legacy_call(monkeypatch):
    restart = AsyncMock(return_value=(True, True))
    monkeypatch.setattr(app, "_current_user", lambda *_: {"id": "admin"})
    monkeypatch.setattr(app, "_user_can_access_session", lambda *_: True)
    monkeypatch.setattr(app, "_async_is_codex_running", AsyncMock(return_value=True))
    monkeypatch.setattr(app, "_restart_codex_for_session", restart)

    response = await app.api_session_relogin("builder6", MagicMock())

    assert response.status_code == 200
    restart.assert_awaited_once_with("builder6")


@pytest.mark.asyncio
async def test_relogin_endpoint_rejects_partial_guard(monkeypatch):
    restart = AsyncMock(return_value=(True, True))
    monkeypatch.setattr(app, "_current_user", lambda *_: {"id": "admin"})
    monkeypatch.setattr(app, "_user_can_access_session", lambda *_: True)
    monkeypatch.setattr(app, "_async_is_codex_running", AsyncMock(return_value=True))
    monkeypatch.setattr(app, "_restart_codex_for_session", restart)

    response = await app.api_session_relogin(
        "builder6",
        MagicMock(),
        SimpleNamespace(
            expected_generation="",
            expected_resume_uuid="",
            completed_turn_id="",
            expected_model="gpt-6-astra",
            expected_effort="xhigh",
        ),
    )

    assert response.status_code == 400
    restart.assert_not_awaited()
