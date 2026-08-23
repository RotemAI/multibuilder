from fastapi.testclient import TestClient

from multibuilder.api import create_app


def project_payload() -> dict:
    return {
        "name": "factory-demo",
        "goal": "Build and validate a small service",
        "repository_url": "git@example.test:factory-demo.git",
        "base_branch": "main",
        "acceptance_criteria": ["The integrated test suite passes"],
        "max_parallelism": 6,
    }


def test_health_checks_the_database_without_authentication(tmp_path) -> None:
    app = create_app(
        database_url=f"sqlite+aiosqlite:///{tmp_path / 'api.db'}",
        admin_token="test-admin-token",
        scheduler_enabled=False,
    )

    with TestClient(app) as client:
        response = client.get("/api/health")

    assert response.json()["status"] == "ok"


def test_project_creation_requires_authentication(tmp_path) -> None:
    app = create_app(
        database_url=f"sqlite+aiosqlite:///{tmp_path / 'auth.db'}",
        admin_token="test-admin-token",
        scheduler_enabled=False,
    )

    with TestClient(app) as client:
        response = client.post("/api/projects", json=project_payload())

    assert response.status_code == 401


def test_project_creation_persists_a_director_task_and_event(tmp_path) -> None:
    app = create_app(
        database_url=f"sqlite+aiosqlite:///{tmp_path / 'project.db'}",
        admin_token="test-admin-token",
        scheduler_enabled=False,
    )
    headers = {"Authorization": "Bearer test-admin-token"}

    with TestClient(app) as client:
        created = client.post("/api/projects", json=project_payload(), headers=headers)
        project_id = created.json()["id"]
        snapshot = client.get(f"/api/projects/{project_id}", headers=headers)
        events = client.get(f"/api/projects/{project_id}/events", headers=headers)

    task = snapshot.json()["tasks"][0]
    assert (
        created.status_code,
        task["task_type"],
        events.json()["events"][0]["event_type"],
    ) == (201, "director", "project.created")
    assert "Workstream Leads" in task["instructions"]
    assert "independent review" in task["instructions"]
    assert "integration and preview" in task["instructions"]
    assert ".multibuilder/validation.json" in task["instructions"]


def test_secrets_are_never_serialized_in_api_responses(tmp_path) -> None:
    app = create_app(
        database_url=f"sqlite+aiosqlite:///{tmp_path / 'redaction.db'}",
        admin_token="test-admin-token",
        scheduler_enabled=False,
    )
    headers = {"Authorization": "Bearer test-admin-token"}

    with TestClient(app) as client:
        response = client.post("/api/projects", json=project_payload(), headers=headers)

    assert "test-admin-token" not in response.text


def test_project_snapshot_exposes_every_live_inspection_surface(tmp_path) -> None:
    app = create_app(
        database_url=f"sqlite+aiosqlite:///{tmp_path / 'surfaces.db'}",
        admin_token="test-admin-token",
        scheduler_enabled=False,
    )
    headers = {"Authorization": "Bearer test-admin-token"}

    with TestClient(app) as client:
        created = client.post("/api/projects", json=project_payload(), headers=headers)
        snapshot = client.get(f"/api/projects/{created.json()['id']}", headers=headers).json()

    assert {
        "milestones",
        "runs",
        "workspaces",
        "merge_queue",
        "validations",
        "providers",
        "critical_path",
        "blockers",
        "progress",
    }.issubset(snapshot)


def test_browser_login_uses_a_secure_http_only_cookie(tmp_path) -> None:
    app = create_app(
        database_url=f"sqlite+aiosqlite:///{tmp_path / 'cookie.db'}",
        admin_token="test-admin-token",
        cookie_signing_secret="a-different-cookie-signing-secret",
        scheduler_enabled=False,
    )

    with TestClient(app, base_url="https://multibuilder.example") as client:
        login = client.post("/api/auth/login", json={"token": "test-admin-token"})
        projects = client.get("/api/projects")

    cookie = login.headers["set-cookie"].lower()
    assert login.json() == {"authenticated": True}
    assert projects.status_code == 200
    assert "httponly" in cookie
    assert "secure" in cookie
    assert "samesite=strict" in cookie
    assert "test-admin-token" not in login.text + cookie


def test_bad_browser_login_is_rejected_without_setting_a_cookie(tmp_path) -> None:
    app = create_app(
        database_url=f"sqlite+aiosqlite:///{tmp_path / 'bad-cookie.db'}",
        admin_token="test-admin-token",
        cookie_signing_secret="a-different-cookie-signing-secret",
        scheduler_enabled=False,
    )

    with TestClient(app, base_url="https://multibuilder.example") as client:
        login = client.post("/api/auth/login", json={"token": "incorrect-token"})

    assert login.status_code == 401
    assert "set-cookie" not in login.headers


def test_repeated_bad_browser_logins_are_rate_limited(tmp_path) -> None:
    app = create_app(
        database_url=f"sqlite+aiosqlite:///{tmp_path / 'login-limit.db'}",
        admin_token="test-admin-token",
        cookie_signing_secret="a-different-cookie-signing-secret",
        scheduler_enabled=False,
    )

    with TestClient(app, base_url="https://multibuilder.example") as client:
        attempts = [client.post("/api/auth/login", json={"token": "incorrect-token"}) for _ in range(6)]

    assert [response.status_code for response in attempts] == [401, 401, 401, 401, 401, 429]
    assert attempts[-1].headers["retry-after"]


def test_projects_can_be_listed_without_serializing_credentials(tmp_path) -> None:
    app = create_app(
        database_url=f"sqlite+aiosqlite:///{tmp_path / 'list.db'}",
        admin_token="test-admin-token",
        scheduler_enabled=False,
    )
    headers = {"Authorization": "Bearer test-admin-token"}

    with TestClient(app) as client:
        client.post("/api/projects", json=project_payload(), headers=headers)
        response = client.get("/api/projects", headers=headers)

    assert response.status_code == 200
    assert response.json()["projects"][0]["name"] == "factory-demo"
    assert "test-admin-token" not in response.text


def test_root_serves_the_spa_with_security_headers(tmp_path) -> None:
    app = create_app(
        database_url=f"sqlite+aiosqlite:///{tmp_path / 'spa.db'}",
        admin_token="test-admin-token",
        scheduler_enabled=False,
    )

    with TestClient(app) as client:
        response = client.get("/")

    assert response.status_code == 200
    assert 'id="app-view"' in response.text
    assert response.headers["x-content-type-options"] == "nosniff"
    assert response.headers["referrer-policy"] == "no-referrer"
    assert response.headers["strict-transport-security"] == "max-age=31536000; includeSubDomains"
    assert response.headers["x-frame-options"] == "DENY"
    assert "default-src 'self'" in response.headers["content-security-policy"]


def test_event_stream_replays_durable_events_from_a_cursor(tmp_path) -> None:
    app = create_app(
        database_url=f"sqlite+aiosqlite:///{tmp_path / 'stream.db'}",
        admin_token="test-admin-token",
        scheduler_enabled=False,
    )
    headers = {"Authorization": "Bearer test-admin-token"}

    with TestClient(app) as client:
        created = client.post("/api/projects", json=project_payload(), headers=headers).json()
        response = client.get(
            f"/api/projects/{created['id']}/events/stream?after=0&follow=false",
            headers=headers,
        )

    assert response.status_code == 200
    assert response.headers["content-type"].startswith("text/event-stream")
    assert "event: project.created" in response.text
    assert "id: 1" in response.text
    assert "test-admin-token" not in response.text


def test_application_lifespan_starts_and_stops_the_scheduler_runtime(tmp_path) -> None:
    class Runtime:
        started = False
        stopped = False

        async def start(self) -> None:
            self.started = True

        async def stop(self) -> None:
            self.stopped = True

    runtime = Runtime()
    app = create_app(
        database_url=f"sqlite+aiosqlite:///{tmp_path / 'runtime.db'}",
        admin_token="test-admin-token",
        scheduler_enabled=True,
        runtime_factory=lambda repository: runtime,
    )

    with TestClient(app):
        assert runtime.started is True

    assert runtime.stopped is True
