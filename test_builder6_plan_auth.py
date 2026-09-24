import asyncio
import json
from unittest.mock import MagicMock, patch

import app
import pytest


def _chatgpt_auth():
    return {
        "auth_mode": "chatgpt",
        "tokens": {
            "access_token": "access-not-real",
            "refresh_token": "refresh-not-real",
            "id_token": "id-not-real",
        },
    }


@pytest.mark.parametrize("validate", [False, True])
def test_access_only_chatgpt_auth_keeps_plan_usage_available(tmp_path, monkeypatch, validate):
    codex_home = tmp_path / "codex"
    codex_home.mkdir()
    (codex_home / "auth.json").write_text(json.dumps({
        "auth_mode": "chatgpt", "tokens": {"access_token": "access-not-real"},
    }))
    monkeypatch.setattr(app, "CODEX_API_FALLBACK_ENABLED", False)
    monkeypatch.setattr(app, "_codex_app_server_account_read", lambda *_args, **_kwargs: {
        "ok": True, "account": {"type": "chatgpt", "planType": "pro"},
    })

    state = app._ensure_codex_auth_with_fallback(codex_home, validate)

    assert state["activeMode"] == "chatgpt"


def test_disabled_api_fallback_never_rewrites_chatgpt_auth(tmp_path, monkeypatch):
    codex_home = tmp_path / "codex"
    codex_home.mkdir()
    auth_path = codex_home / "auth.json"
    original = _chatgpt_auth()
    auth_path.write_text(json.dumps(original))
    monkeypatch.setattr(app, "CODEX_API_FALLBACK_ENABLED", False)
    monkeypatch.setattr(app, "_active_openai_key", lambda: "sk-fallback-not-real")
    monkeypatch.setattr(
        app,
        "_codex_app_server_account_read",
        lambda *_args, **_kwargs: {"ok": False, "error": "temporary timeout"},
    )

    state = app._ensure_codex_auth_with_fallback(codex_home, True)

    assert (
        state["activeMode"],
        state["fallbackActive"],
        bool(state["authError"]),
        json.loads(auth_path.read_text()),
    ) == (
        "unknown",
        False,
        True,
        original,
    )


def test_plan_only_policy_rejects_existing_api_auth(tmp_path, monkeypatch):
    codex_home = tmp_path / "codex"
    codex_home.mkdir()
    auth_path = codex_home / "auth.json"
    api_auth = {"auth_mode": "apikey", "OPENAI_API_KEY": "sk-existing-not-real"}
    auth_path.write_text(json.dumps(api_auth))
    monkeypatch.setattr(app, "CODEX_API_FALLBACK_ENABLED", False)

    state = app._ensure_codex_auth_with_fallback(codex_home, False)

    assert (state["activeMode"], state["loggedIn"], bool(state["authError"])) == (
        "unknown",
        False,
        True,
    )


def test_saving_auxiliary_api_key_preserves_plan_auth(tmp_path, monkeypatch):
    codex_home = tmp_path / "codex"
    codex_home.mkdir()
    auth_path = codex_home / "auth.json"
    original = _chatgpt_auth()
    auth_path.write_text(json.dumps(original))
    key_file = tmp_path / "openai_api_key"
    monkeypatch.setattr(app, "CODEX_HOME", codex_home)
    monkeypatch.setattr(app, "OPENAI_KEY_FILE", key_file)
    monkeypatch.setattr(app, "CODEX_API_FALLBACK_ENABLED", False)
    monkeypatch.setattr(app, "_stored_openai_key", "")

    app._save_openai_key("sk-auxiliary-not-real")

    assert (key_file.read_text(), json.loads(auth_path.read_text())) == (
        "sk-auxiliary-not-real",
        original,
    )


def test_plan_only_app_server_does_not_inherit_api_credentials(tmp_path, monkeypatch):
    monkeypatch.setattr(app, "CODEX_API_FALLBACK_ENABLED", False)
    monkeypatch.setenv("OPENAI_API_KEY", "sk-openai-not-real")
    monkeypatch.setenv("CODEX_API_KEY", "sk-codex-not-real")
    captured = {}

    def fake_popen(*args, **kwargs):
        captured["env"] = kwargs["env"]
        return MagicMock()

    monkeypatch.setattr(app.subprocess, "Popen", fake_popen)

    app._codex_app_server_process(tmp_path)

    assert {name for name in ("OPENAI_API_KEY", "CODEX_API_KEY") if name in captured["env"]} == set()


def test_routine_account_probe_never_forces_token_refresh(tmp_path):
    process = MagicMock()
    account = {"type": "chatgpt", "email": "person@example.com", "planType": "pro"}
    with (
        patch("app._codex_app_server_process", return_value=process),
        patch("app._codex_app_server_initialize"),
        patch("app._codex_app_server_send") as send,
        patch("app._codex_app_server_wait", return_value={"result": {"account": account}}),
        patch("app._terminate_codex_app_server"),
    ):
        result = app._codex_app_server_account_read(tmp_path)

    assert (result, send.call_args.args[1]["params"]["refreshToken"]) == (
        {"ok": True, "account": account},
        False,
    )


def test_auth_status_exposes_api_fallback_policy(tmp_path, monkeypatch):
    monkeypatch.setattr(app, "CODEX_HOME", tmp_path)
    monkeypatch.setattr(app, "CODEX_API_FALLBACK_ENABLED", False)
    monkeypatch.setattr(
        app,
        "_ensure_codex_auth_with_fallback",
        lambda *_args, **_kwargs: {
            "loggedIn": False,
            "activeMode": "unknown",
            "configuredMode": "unknown",
            "fallbackActive": False,
            "fallbackReason": "",
            "authError": "ChatGPT plan login is required",
            "account": {},
        },
    )

    result = app._codex_auth_display()

    assert (result["apiFallbackEnabled"], result["authError"]) == (
        False,
        "ChatGPT plan login is required",
    )


def test_plan_limits_read_does_not_gate_rate_limits_on_account_probe(monkeypatch):
    validate_values = []

    def fake_auth(_codex_home, validate_chatgpt):
        validate_values.append(validate_chatgpt)
        return {"activeMode": "chatgpt", "account": {}}

    monkeypatch.setattr(app, "_ensure_codex_auth_with_fallback", fake_auth)
    monkeypatch.setattr(
        app,
        "_codex_app_server_rate_limits",
        lambda _codex_home: {
            "rateLimits": {
                "limitId": "codex",
                "planType": "pro",
                "primary": {
                    "usedPercent": 99,
                    "windowDurationMins": 10_080,
                    "resetsAt": 1_790_222_546,
                },
                "secondary": None,
            }
        },
    )
    monkeypatch.setattr(app, "_openai_limits_cache", {"ts": 0, "data": None})

    response = asyncio.run(app.api_openai_usage_limits())

    assert (validate_values, response.status_code) == ([False], 200)


def test_health_state_preserves_plan_only_auth_error(monkeypatch):
    monkeypatch.setattr(
        app,
        "_ensure_codex_auth_with_fallback",
        lambda *_args, **_kwargs: {
            "loggedIn": False,
            "activeMode": "unknown",
            "fallbackActive": False,
            "fallbackReason": "",
            "authError": "ChatGPT plan login is required",
        },
    )
    monkeypatch.setattr(app, "_publish_codex_auth_state", lambda _state: None)
    monkeypatch.setattr(
        app,
        "_codex_health_auth",
        {"ts": 0.0, "loggedIn": True, "reason": ""},
    )

    state = asyncio.run(app._codex_auth_health(force=True))

    assert state["reason"] == "ChatGPT plan login is required"


def test_plan_only_member_provisioning_does_not_seed_api_auth(tmp_path, monkeypatch):
    codex_home = tmp_path / "member"
    monkeypatch.setattr(app, "CODEX_API_FALLBACK_ENABLED", False)
    monkeypatch.setattr(app, "TEAM_MODE", False)
    monkeypatch.setattr(app, "_user_codex_config_dir", lambda _user: codex_home)
    monkeypatch.setattr(app, "_active_openai_key", lambda: "sk-provision-not-real")
    monkeypatch.setattr(app, "_is_admin", lambda _user: False)
    monkeypatch.setattr(app, "_remove_legacy_global_context_from_agents", lambda *_args: None)
    monkeypatch.setattr(app, "_sync_group_context_into", lambda *_args: None)
    monkeypatch.setattr(app, "_materialize_member_skills", lambda *_args: None)
    monkeypatch.setattr(app, "_sync_git_rules_into", lambda *_args: None)
    monkeypatch.setattr(app, "_configure_member_codex_isolation", lambda *_args: None)
    monkeypatch.setattr(app, "_set_member_codex_permissions", lambda *_args: None)

    app._ensure_user_codex_config_dir({"id": "member", "username": "Member", "role": "user"})

    assert not (codex_home / "auth.json").exists()


def test_plan_only_missing_shared_auth_does_not_seed_member_api(tmp_path, monkeypatch):
    admin_home = tmp_path / "admin"
    member_home = tmp_path / "member"
    monkeypatch.setattr(app, "CODEX_HOME", admin_home)
    monkeypatch.setattr(app, "SHARED_CODEX_AUTH", admin_home / "auth.json")
    monkeypatch.setattr(app, "CODEX_API_FALLBACK_ENABLED", False)
    monkeypatch.setattr(app, "_active_openai_key", lambda: "sk-member-not-real")

    mode = app._apply_member_auth(member_home)

    assert (mode, (member_home / "auth.json").exists()) == ("unconfigured", False)


def test_enabled_fallback_can_seed_missing_member_auth(tmp_path, monkeypatch):
    admin_home = tmp_path / "admin"
    member_home = tmp_path / "member"
    monkeypatch.setattr(app, "CODEX_HOME", admin_home)
    monkeypatch.setattr(app, "SHARED_CODEX_AUTH", admin_home / "auth.json")
    monkeypatch.setattr(app, "CODEX_API_FALLBACK_ENABLED", True)
    monkeypatch.setattr(app, "_active_openai_key", lambda: "sk-member-not-real")

    mode = app._apply_member_auth(member_home)

    assert (mode, json.loads((member_home / "auth.json").read_text())["auth_mode"]) == (
        "api",
        "apikey",
    )


def test_plan_only_member_shares_existing_chatgpt_auth(tmp_path, monkeypatch):
    admin_home = tmp_path / "admin"
    member_home = tmp_path / "member"
    admin_home.mkdir()
    shared_auth = admin_home / "auth.json"
    shared_auth.write_text(json.dumps(_chatgpt_auth()))
    monkeypatch.setattr(app, "CODEX_HOME", admin_home)
    monkeypatch.setattr(app, "SHARED_CODEX_AUTH", shared_auth)
    monkeypatch.setattr(app, "CODEX_API_FALLBACK_ENABLED", False)

    mode = app._apply_member_auth(member_home)

    assert (mode, (member_home / "auth.json").resolve()) == ("subscription", shared_auth)


def test_plan_only_member_does_not_share_existing_api_auth(tmp_path, monkeypatch):
    admin_home = tmp_path / "admin"
    member_home = tmp_path / "member"
    admin_home.mkdir()
    shared_auth = admin_home / "auth.json"
    shared_auth.write_text(json.dumps({
        "auth_mode": "apikey",
        "OPENAI_API_KEY": "sk-shared-not-real",
    }))
    monkeypatch.setattr(app, "CODEX_HOME", admin_home)
    monkeypatch.setattr(app, "SHARED_CODEX_AUTH", shared_auth)
    monkeypatch.setattr(app, "CODEX_API_FALLBACK_ENABLED", False)

    mode = app._apply_member_auth(member_home)

    assert (mode, (member_home / "auth.json").exists()) == ("unconfigured", False)
