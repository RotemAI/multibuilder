from pathlib import Path

STATIC = Path(__file__).parents[1] / "multibuilder" / "static"


def read_asset(name: str) -> str:
    return (STATIC / name).read_text(encoding="utf-8")


def test_spa_shell_is_self_contained_and_accessible() -> None:
    html = read_asset("index.html")

    assert 'href="/static/styles.css?v=' in html
    assert 'src="/static/app.js?v=' in html
    assert 'href="/static/favicon.svg?v=' in html
    assert "https://" not in html
    assert 'id="primary-navigation"' in html
    assert 'aria-label="Primary navigation"' in html
    assert 'id="mobile-navigation"' in html
    assert 'id="app-view"' in html
    assert 'id="toast-region"' in html
    assert 'aria-live="polite"' in html


def test_every_meaningful_view_has_a_hash_route() -> None:
    script = read_asset("app.js")

    for route in (
        "#/projects",
        "#/projects/new",
        "/overview",
        "/dag",
        "/agents",
        "/agents/:runId",
        "/integration",
        "/capacity",
    ):
        assert route in script

    assert 'addEventListener("hashchange"' in script
    assert 'window.location.hash = "#/projects"' in script
    assert "history" not in script or "window.location.hash" in script


def test_project_views_cover_the_operational_brief() -> None:
    script = read_asset("app.js")

    for label in (
        "User goal",
        "Overall progress",
        "Milestones",
        "Current plan",
        "Critical path",
        "Blockers",
        "Task DAG",
        "Agent tree",
        "Merge queue",
        "Preview deployments",
        "Provider capacity",
        "Rate limit events",
        "Cost and tokens",
    ):
        assert label in script

    assert "<svg" in script
    assert "dependencies" in script
    assert "parent_task_id" in script


def test_agent_inspection_exposes_all_requested_tabs() -> None:
    script = read_asset("app.js")

    for tab in (
        "Instructions",
        "Live events",
        "Commands",
        "Tool calls",
        "Files changed",
        "Git diff",
        "Test output",
        "Messages",
        "Final summary",
    ):
        assert tab in script


def test_operational_tables_implement_the_shared_table_ux_contract() -> None:
    script = read_asset("app.js")
    styles = read_asset("styles.css")

    for behavior in (
        "localStorage",
        "dragstart",
        "dragover",
        "pointerdown",
        "ResizeObserver",
        "data-top-scroll",
        "data-table-scroll",
        "data-columns-button",
        "data-column-toggle",
        "data-reset-columns",
        "data-row-number-toggle",
        "data-cell-value",
    ):
        assert behavior in script

    assert "sticky-header-disabled" in script
    assert "Drag headers to reorder" in script
    assert "Hover truncated cells" in script
    assert "--header-height: 18px" in styles
    assert "position: sticky" in styles
    assert "-webkit-line-clamp: 4" in styles
    assert "cursor: col-resize" in styles
    assert ".top-scrollbar" in styles
    assert ".header-tooltip" in styles
    assert ".cell-popover" in styles


def test_table_status_formatters_do_not_treat_the_row_as_a_badge_label() -> None:
    script = read_asset("app.js")

    assert "format: statusPill" not in script
    assert script.count("format: (value) => statusPill(value)") >= 4


def test_spa_has_loading_empty_error_and_demo_states() -> None:
    script = read_asset("app.js")

    for state in (
        "Loading project",
        "No projects yet",
        "Project unavailable",
        "Load demo project",
        "No active agents",
        "No tasks in the DAG",
    ):
        assert state in script

    assert "demoSnapshot" in script
    assert "requestAnimationFrame" in script


def test_auth_uses_an_http_only_cookie_contract_and_lists_server_projects() -> None:
    script = read_asset("app.js")

    assert 'fetch("/api/projects"' in script
    assert 'fetch("/api/auth/login"' in script
    assert 'credentials: "same-origin"' in script
    assert "Authorization" not in script
    assert "sessionStorage" not in script


def test_templates_are_compatible_with_the_strict_style_csp() -> None:
    html = read_asset("index.html")
    script = read_asset("app.js")

    assert "style=" not in html
    assert "style=" not in script


def test_live_events_use_eventsource_with_reconnect_and_polling_fallback() -> None:
    script = read_asset("app.js")

    assert "new EventSource" in script
    assert "/events/stream?after=" in script
    assert "withCredentials: true" in script
    assert 'source.addEventListener("project.created"' in script
    assert "source.onerror" in script
    assert "source.close()" in script
    assert "scheduleStreamReconnect" in script
    assert "startPollingFallback" in script
    assert "STREAM_FAILURES_BEFORE_FALLBACK" in script


def test_project_lifecycle_controls_are_status_aware_and_refresh_state() -> None:
    script = read_asset("app.js")

    for action in ("pause", "resume", "cancel"):
        assert f'data-project-action="{action}"' in script
        assert "/${action}" in script

    assert "projectActionControls" in script
    assert 'method: "POST"' in script
    assert "window.confirm" in script
    assert 'renderCurrentRoute({ refresh: true })' in script
    assert "Project cancelled" in script


def test_human_visible_assets_do_not_contain_dash_glyphs() -> None:
    for name in ("index.html", "styles.css", "app.js"):
        content = read_asset(name)
        assert "\u2013" not in content
        assert "\u2014" not in content


def test_theme_is_light_blue_and_token_driven() -> None:
    styles = read_asset("styles.css")

    for token in (
        "--bg:",
        "--panel:",
        "--panel-2:",
        "--border:",
        "--text:",
        "--muted:",
        "--accent:",
        "--accent-soft:",
        "--good:",
        "--bad:",
        "--warn:",
        "--header-bg:",
    ):
        assert token in styles

    assert "color-scheme: light" in styles
    assert "purple" not in styles.lower()
    assert "linear-gradient" not in styles.lower()
