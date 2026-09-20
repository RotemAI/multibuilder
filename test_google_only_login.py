"""Regression coverage for dashboard login and logout."""

import os

os.environ.setdefault("TMUX_DASH_SECRET", "test-secret-key-for-testing")
os.environ.setdefault("TMUX_DASH_PASS", "testpass")

from fastapi.testclient import TestClient

import app as app_module


def test_google_enabled_login_page_still_offers_the_password_fields(monkeypatch):
    """Owner decision 2026-09-20: both ways in, on every builder box.

    A configured Google client used to REPLACE the username and password
    fields. POST /login accepted a password the whole time, so every check that
    posted a credential passed while the browser offered nowhere to type one,
    and the box was unreachable whenever Google was down or the address was not
    on the allowlist.
    """
    monkeypatch.setattr(app_module, "_google_login_enabled", lambda: True)

    page = app_module._login_page()

    assert (
        'id="gbtn"' in page,
        'name="username"' in page,
        'name="password"' in page,
    ) == (True, True, True)


def test_login_path_serves_the_page_rather_than_404():
    """/login had no GET route, so typing the URL gave Not found."""
    client = TestClient(app_module.app)

    response = client.get("/login")

    assert (response.status_code, 'name="password"' in response.text) == (200, True)


def test_password_fallback_remains_available_without_google(monkeypatch):
    monkeypatch.setattr(app_module, "_google_login_enabled", lambda: False)

    page = app_module._login_page()

    assert (
        'id="gbtn"' in page,
        'name="username"' in page,
        'name="password"' in page,
    ) == (False, True, True)


def test_visible_codex_sign_out_control_logs_out_of_the_dashboard():
    html = app_module.HTML_PAGE

    assert (
        'onclick="doLogout()">Sign out</button>' in html,
        'onclick="codexLogout()">Sign out of Codex</button>' in html,
    ) == (True, False)


def test_dashboard_logout_removes_the_session_cookie():
    client = TestClient(app_module.app)
    client.cookies.set(
        app_module.AUTH_COOKIE,
        "stale-session",
        domain="testserver.local",
        path="/",
    )

    response = client.post("/logout")

    assert (
        response.status_code,
        client.cookies.get(app_module.AUTH_COOKIE),
    ) == (200, None)
