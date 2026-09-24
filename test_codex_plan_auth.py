"""Plan-auth regressions without importing dashboard startup side effects."""
import ast
import json
import threading
import time
from pathlib import Path
from unittest.mock import Mock

import pytest

SOURCE = Path(__file__).with_name("app.py")


def helpers(**overrides):
    names = {
        "_ensure_codex_auth_with_fallback", "_codex_app_server_account_read",
        "_codex_app_server_process", "_codex_auth_display", "_jwt_claims",
        "_apply_member_auth",
    }
    import base64
    import os
    import re
    ns = dict(
        Path=Path, json=json, time=time, os=os, re=re, base64=base64,
        CODEX_HOME=Path("/unused"), CODEX_API_FALLBACK_ENABLED=False,
        _codex_auth_validation_lock=threading.Lock(),
        _codex_auth_fallback_state={}, logger=Mock(), subprocess=Mock(),
        _active_openai_key=Mock(return_value="sk-fake-for-test"),
        _write_codex_api_auth=Mock(), _backup_before_dashboard_write=Mock(),
        _resolve_codex_alerts=Mock(), _publish_codex_auth_state=Mock(),
    )
    ns.update(overrides)
    for node in ast.parse(SOURCE.read_text()).body:
        if isinstance(node, ast.FunctionDef) and node.name in names:
            exec(compile(ast.Module(body=[node], type_ignores=[]), str(SOURCE), "exec"), ns)
    return ns


@pytest.fixture
def plan_home(tmp_path):
    (tmp_path / "auth.json").write_text(json.dumps({
        "auth_mode": "chatgpt",
        "tokens": {"access_token": "usable", "refresh_token": "refresh"},
    }))
    return tmp_path


def test_routine_check_does_not_force_token_rotation(plan_home):
    ns = helpers()
    def account_read(home, refresh_token):
        return {"ok": not refresh_token, "account":
                {"type": "chatgpt", "planType": "pro"} if not refresh_token else {}}
    ns["_codex_app_server_account_read"] = account_read
    state = ns["_ensure_codex_auth_with_fallback"](plan_home, True)
    assert state["activeMode"] == "chatgpt"


@pytest.mark.parametrize("tokens", [{}, {"access_token": "usable", "refresh_token": "refresh"}])
def test_disabled_fallback_preserves_auth_on_probe_failure(plan_home, tokens):
    auth_path = plan_home / "auth.json"
    auth_path.write_text(json.dumps({"auth_mode": "chatgpt", "tokens": tokens}))
    original = auth_path.read_bytes()
    ns = helpers()
    ns["_codex_app_server_account_read"] = Mock(return_value={"ok": False})
    state = ns["_ensure_codex_auth_with_fallback"](plan_home, True)
    assert state["activeMode"] == "unknown"
    assert state["fallbackActive"] is False
    ns["_write_codex_api_auth"].assert_not_called()
    assert auth_path.read_bytes() == original


def test_helper_process_drops_inherited_api_key(plan_home, monkeypatch):
    monkeypatch.setenv("OPENAI_API_KEY", "sk-inherited-test")
    ns = helpers()
    ns["_codex_app_server_process"](plan_home)
    has_api_key = "OPENAI_API_KEY" in ns["subprocess"].Popen.call_args.kwargs["env"]
    assert has_api_key is False


def test_missing_shared_auth_does_not_seed_api_key(tmp_path):
    ns = helpers(SHARED_CODEX_AUTH=tmp_path / "missing-auth.json")
    ns["_apply_member_auth"](tmp_path / "member")
    ns["_write_codex_api_auth"].assert_not_called()


def test_verified_plan_clears_stale_global_alert(plan_home):
    ns = helpers(CODEX_HOME=plan_home)
    ns["_codex_app_server_account_read"] = Mock(return_value={
        "ok": True, "account": {"type": "chatgpt", "planType": "pro"},
    })
    status = ns["_codex_auth_display"]()
    assert status["loggedIn"] is True
    ns["_resolve_codex_alerts"].assert_called_once_with("*", "ChatGPT plan connection verified")
    assert ns["_publish_codex_auth_state"].call_args.args[0]["activeMode"] == "chatgpt"
