"""A plan-only dashboard cannot launch Codex using an inherited API login."""
import shlex

import app


def test_plan_only_launch_requires_chatgpt_even_with_api_auth_file(monkeypatch, tmp_path):
    monkeypatch.setattr(app, "CODEX_API_FALLBACK_ENABLED", False)
    (tmp_path / "config.toml").write_text("")
    command = shlex.split(app._launch_codex_cmd("codex --yolo", codex_home=tmp_path))
    assert 'forced_login_method="chatgpt"' in command
    for assignment in ("OPENAI_API_KEY=", "CODEX_API_KEY=", "ANTHROPIC_API_KEY="):
        assert assignment in command


def test_browser_launcher_uses_the_dashboard_service_home(monkeypatch):
    monkeypatch.setattr(app.Path, "home", lambda: app.Path("/home/builder-service"))
    launcher = app._browser_launcher_script()
    assert "export HOME=/home/builder-service" in launcher


def test_explicit_api_launch_is_not_forced_to_chatgpt(monkeypatch, tmp_path):
    monkeypatch.setattr(app, "CODEX_API_FALLBACK_ENABLED", True)
    (tmp_path / "config.toml").write_text("")
    assert "forced_login_method" not in app._launch_codex_cmd("codex --yolo", codex_home=tmp_path)


def test_browser_config_allows_pinned_package_cold_start(monkeypatch, tmp_path):
    import tomllib

    monkeypatch.setattr(app, "BROWSER_MCP_ENABLED", True)
    assert app._ensure_browser_mcp(tmp_path)
    config = tomllib.loads((tmp_path / "config.toml").read_text())
    assert config["mcp_servers"]["playwright-browser"]["startup_timeout_sec"] >= 60
