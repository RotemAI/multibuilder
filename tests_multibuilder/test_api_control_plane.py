from functools import partial
from uuid import UUID, uuid4

from fastapi.testclient import TestClient

from multibuilder.api import create_app


def project_payload() -> dict:
    return {
        "name": "factory-demo",
        "goal": "Build and validate a small service",
        "acceptance_criteria": ["The integrated test suite passes"],
        "max_parallelism": 6,
    }


def test_health_checks_the_database_without_authentication(tmp_path) -> None:
    app = create_app(
        database_url=f"sqlite+aiosqlite:///{tmp_path / 'api.db'}",
        scheduler_enabled=False,
    )

    with TestClient(app) as client:
        response = client.get("/api/health")

    assert response.json()["status"] == "ok"


def test_project_creation_needs_no_token_or_repository_url(tmp_path) -> None:
    app = create_app(
        database_url=f"sqlite+aiosqlite:///{tmp_path / 'auth.db'}",
        scheduler_enabled=False,
    )

    with TestClient(app) as client:
        response = client.post("/api/projects", json=project_payload())
        snapshot = client.get(f"/api/projects/{response.json()['id']}")

    assert response.status_code == 201
    assert snapshot.status_code == 200
    assert snapshot.json()["project"]["repository_url"] == ""
    assert snapshot.json()["project"]["base_branch"] == "main"


def test_project_creation_accepts_a_human_readable_name(tmp_path) -> None:
    app = create_app(
        database_url=f"sqlite+aiosqlite:///{tmp_path / 'readable-name.db'}",
        scheduler_enabled=False,
    )
    payload = project_payload() | {"name": "hello project"}

    with TestClient(app) as client:
        response = client.post("/api/projects", json=payload)
        snapshot = client.get(f"/api/projects/{response.json().get('id', 'missing')}")

    assert (response.status_code, snapshot.json().get("project", {}).get("name")) == (201, "hello project")


def test_request_validation_errors_are_readable_text(tmp_path) -> None:
    app = create_app(
        database_url=f"sqlite+aiosqlite:///{tmp_path / 'readable-errors.db'}",
        scheduler_enabled=False,
    )
    payload = project_payload() | {"max_parallelism": 0}

    with TestClient(app) as client:
        response = client.post("/api/projects", json=payload)

    assert response.json() == {"detail": "max_parallelism: Input should be greater than or equal to 1"}


def test_project_creation_persists_a_director_task_and_event(tmp_path) -> None:
    app = create_app(
        database_url=f"sqlite+aiosqlite:///{tmp_path / 'project.db'}",
        scheduler_enabled=False,
    )

    with TestClient(app) as client:
        created = client.post("/api/projects", json=project_payload())
        project_id = created.json()["id"]
        snapshot = client.get(f"/api/projects/{project_id}")
        events = client.get(f"/api/projects/{project_id}/events")

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


def test_project_events_can_be_scoped_to_one_agent_run(tmp_path) -> None:
    app = create_app(
        database_url=f"sqlite+aiosqlite:///{tmp_path / 'run-events.db'}",
        scheduler_enabled=False,
    )
    selected_run = uuid4()
    other_run = uuid4()

    with TestClient(app) as client:
        project_id = client.post("/api/projects", json=project_payload()).json()["id"]
        assert client.portal is not None
        client.portal.call(
            partial(
                app.state.repository.append_event,
                UUID(project_id),
                "agent.message",
                {"text": "selected"},
                run_id=selected_run,
            )
        )
        client.portal.call(
            partial(
                app.state.repository.append_event,
                UUID(project_id),
                "agent.message",
                {"text": "other"},
                run_id=other_run,
            )
        )
        response = client.get(f"/api/projects/{project_id}/events", params={"run_id": str(selected_run)})

    assert [(event["run_id"], event["payload"]["text"]) for event in response.json()["events"]] == [
        (str(selected_run), "selected"),
    ]


def test_access_configuration_is_absent_from_the_api_surface(tmp_path) -> None:
    app = create_app(
        database_url=f"sqlite+aiosqlite:///{tmp_path / 'redaction.db'}",
        scheduler_enabled=False,
    )

    with TestClient(app) as client:
        response = client.post("/api/projects", json=project_payload())
        former_login = client.post("/api/auth/login", json={"token": "unused"})

    assert response.status_code == 201
    assert former_login.status_code == 404
    assert "set-cookie" not in response.headers


def test_project_snapshot_exposes_every_live_inspection_surface(tmp_path) -> None:
    app = create_app(
        database_url=f"sqlite+aiosqlite:///{tmp_path / 'surfaces.db'}",
        scheduler_enabled=False,
    )

    with TestClient(app) as client:
        created = client.post("/api/projects", json=project_payload())
        snapshot = client.get(f"/api/projects/{created.json()['id']}").json()

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


def test_projects_can_be_listed_without_credentials(tmp_path) -> None:
    app = create_app(
        database_url=f"sqlite+aiosqlite:///{tmp_path / 'list.db'}",
        scheduler_enabled=False,
    )

    with TestClient(app) as client:
        client.post("/api/projects", json=project_payload())
        response = client.get("/api/projects")

    assert response.status_code == 200
    assert response.json()["projects"][0]["name"] == "factory-demo"


def test_root_serves_the_spa_with_security_headers(tmp_path) -> None:
    app = create_app(
        database_url=f"sqlite+aiosqlite:///{tmp_path / 'spa.db'}",
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
        scheduler_enabled=False,
    )

    with TestClient(app) as client:
        created = client.post("/api/projects", json=project_payload()).json()
        response = client.get(
            f"/api/projects/{created['id']}/events/stream?after=0&follow=false",
        )

    assert response.status_code == 200
    assert response.headers["content-type"].startswith("text/event-stream")
    assert "event: project.created" in response.text
    assert "id: 1" in response.text


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
        scheduler_enabled=True,
        runtime_factory=lambda repository: runtime,
    )

    with TestClient(app):
        assert runtime.started is True

    assert runtime.stopped is True
