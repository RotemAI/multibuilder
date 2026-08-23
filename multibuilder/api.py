from __future__ import annotations

import asyncio
import json
from contextlib import asynccontextmanager
from pathlib import Path
from typing import Annotated, Callable, Protocol
from uuid import UUID, uuid4

from fastapi import FastAPI, Header, HTTPException, Request, Response, status
from fastapi.responses import FileResponse, HTMLResponse, JSONResponse, StreamingResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, ConfigDict, Field

from .database import Database
from .domain import ProjectSpec, TaskSpec, TaskType
from .lifecycle import LifecycleUnavailable, ProjectLifecycleResult, ProjectLifecycleService
from .repository import ControlPlaneRepository, InvalidProjectTransition


class CreateProjectRequest(BaseModel):
    model_config = ConfigDict(extra="forbid")

    name: str = Field(min_length=1, max_length=120, pattern=r"^[a-zA-Z0-9][a-zA-Z0-9._-]*$")
    goal: str = Field(min_length=1, max_length=30_000)
    repository_url: str = Field(default="", max_length=2_000)
    base_branch: str = Field(default="main", min_length=1, max_length=255)
    acceptance_criteria: list[str] = Field(min_length=1)
    max_parallelism: int = Field(default=8, ge=1, le=256)


class ApplicationRuntime(Protocol):
    async def start(self) -> None: ...

    async def stop(self) -> None: ...

    async def cancel_project_workers(self, project_id: UUID) -> tuple[UUID, ...]: ...


def create_app(
    *,
    database_url: str,
    scheduler_enabled: bool = True,
    runtime_factory: Callable[[ControlPlaneRepository], ApplicationRuntime] | None = None,
) -> FastAPI:
    static_directory = Path(__file__).with_name("static")

    @asynccontextmanager
    async def lifespan(app: FastAPI):
        database = Database(database_url)
        await database.create_schema()
        app.state.database = database
        app.state.repository = ControlPlaneRepository(database.session_factory)
        app.state.scheduler_enabled = scheduler_enabled
        runtime = runtime_factory(app.state.repository) if scheduler_enabled and runtime_factory else None
        app.state.runtime = runtime
        workers = runtime if runtime is not None and hasattr(runtime, "cancel_project_workers") else None
        app.state.project_lifecycle = ProjectLifecycleService(
            repository=app.state.repository,
            workers=workers,
        )
        try:
            if runtime is not None:
                await runtime.start()
            yield
        finally:
            if runtime is not None:
                await runtime.stop()
            await database.dispose()

    app = FastAPI(title="MultiBuilder", version="0.1.0", lifespan=lifespan)

    @app.middleware("http")
    async def security_headers(request: Request, call_next):
        response = await call_next(request)
        response.headers["Content-Security-Policy"] = (
            "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; "
            "connect-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'self'"
        )
        response.headers["X-Content-Type-Options"] = "nosniff"
        response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
        response.headers["X-Frame-Options"] = "DENY"
        response.headers["Referrer-Policy"] = "no-referrer"
        response.headers["Permissions-Policy"] = "camera=(), microphone=(), geolocation=()"
        response.headers["Cross-Origin-Opener-Policy"] = "same-origin"
        response.headers["Cross-Origin-Resource-Policy"] = "same-origin"
        if request.url.path.startswith("/api/"):
            response.headers["Cache-Control"] = "no-store"
        return response

    @app.get("/api/health")
    async def health(request: Request) -> dict:
        repository: ControlPlaneRepository = request.app.state.repository
        await repository.ping()
        return {
            "status": "ok",
            "database": "ready",
            "scheduler": "enabled" if request.app.state.scheduler_enabled else "disabled",
        }

    @app.post("/api/projects", status_code=status.HTTP_201_CREATED)
    async def create_project(payload: CreateProjectRequest, request: Request) -> JSONResponse:
        repository: ControlPlaneRepository = request.app.state.repository
        project = ProjectSpec(id=uuid4(), **payload.model_dump())
        director = TaskSpec(
            id=uuid4(),
            project_id=project.id,
            parent_task_id=None,
            task_type=TaskType.DIRECTOR,
            goal="Create the milestones and executable task DAG for this project",
            instructions=(
                "Analyze the project goal and managed Git workspace, then create a hierarchy of Workstream Leads and narrowly "
                "scoped worker tasks. Return milestones and an acyclic DAG with explicit dependencies, non-overlapping "
                "write scopes, acceptance criteria, timeouts, retry limits, and preferred capabilities. Use strong "
                "reasoning for architecture, difficult debugging, integration, and critical review. Use fast workers "
                "for exploration, mechanical coding, tests, documentation, and validation. Keep QA separate from "
                "implementation, require independent review of every code-producing task, add bounded repair paths, "
                "and place final integration and preview validation on the critical path. Only the scheduler launches "
                "tasks, so propose all child work in the structured result. The project is complete only after the "
                "integrated build passes every project acceptance criterion. Include an early task that creates "
                ".multibuilder/validation.json with safe argv arrays for every applicable build, typecheck, lint, "
                "unit, integration, and security gate, and make code tasks depend on that validation contract."
            ),
            dependencies=[],
            write_scope=[],
            acceptance_criteria=["The proposed DAG is acyclic, scoped, and covers every project acceptance criterion"],
            preferred_capabilities=["reasoning"],
            preferred_providers=["codex"],
            timeout_seconds=3_600,
            retry_limit=4,
        )
        await repository.create_project(project)
        await repository.create_tasks([director], priority=100)
        await repository.append_event(
            project.id,
            "project.created",
            {"name": project.name, "goal": project.goal, "director_task_id": str(director.id)},
        )
        return JSONResponse(
            status_code=status.HTTP_201_CREATED,
            content={"id": str(project.id), "status": "planning", "director_task_id": str(director.id)},
        )

    @app.get("/api/projects")
    async def list_projects(request: Request) -> dict:
        repository: ControlPlaneRepository = request.app.state.repository
        projects = await repository.list_projects()
        return {
            "projects": [
                {
                    **project.project.model_dump(mode="json"),
                    "status": project.status.value,
                    "blocked_reason": project.blocked_reason,
                    "task_counts": project.task_counts,
                    "created_at": project.created_at.isoformat(),
                    "updated_at": project.updated_at.isoformat(),
                }
                for project in projects
            ]
        }

    @app.get("/api/projects/{project_id}")
    async def project_snapshot(project_id: UUID, request: Request) -> dict:
        repository: ControlPlaneRepository = request.app.state.repository
        try:
            snapshot = await repository.get_project_snapshot(project_id)
        except KeyError as exc:
            raise HTTPException(status.HTTP_404_NOT_FOUND, "Project not found") from exc
        return snapshot.model_dump(mode="json")

    def lifecycle_response(result: ProjectLifecycleResult) -> dict:
        return {
            "id": str(result.project_id),
            "status": result.status.value,
            "runs_cancelled": result.runs_cancelled,
            "tasks_cancelled": result.tasks_cancelled,
            "merge_items_cancelled": result.merge_items_cancelled,
        }

    async def apply_lifecycle_action(project_id: UUID, request: Request, action: str) -> dict:
        lifecycle: ProjectLifecycleService = request.app.state.project_lifecycle
        try:
            operation = getattr(lifecycle, action)
            result = await operation(project_id)
        except KeyError as exc:
            raise HTTPException(status.HTTP_404_NOT_FOUND, "Project not found") from exc
        except InvalidProjectTransition as exc:
            raise HTTPException(status.HTTP_409_CONFLICT, str(exc)) from exc
        except LifecycleUnavailable as exc:
            raise HTTPException(status.HTTP_503_SERVICE_UNAVAILABLE, str(exc)) from exc
        return lifecycle_response(result)

    @app.post("/api/projects/{project_id}/pause")
    async def pause_project(project_id: UUID, request: Request) -> dict:
        return await apply_lifecycle_action(project_id, request, "pause")

    @app.post("/api/projects/{project_id}/resume")
    async def resume_project(project_id: UUID, request: Request) -> dict:
        return await apply_lifecycle_action(project_id, request, "resume")

    @app.post("/api/projects/{project_id}/cancel")
    async def cancel_project(project_id: UUID, request: Request) -> dict:
        return await apply_lifecycle_action(project_id, request, "cancel")

    @app.get("/api/projects/{project_id}/events")
    async def project_events(project_id: UUID, request: Request, after: int = 0, limit: int = 500) -> dict:
        repository: ControlPlaneRepository = request.app.state.repository
        events = await repository.list_events(project_id, after_id=max(after, 0), limit=min(max(limit, 1), 2_000))
        return {"events": [event.model_dump(mode="json") for event in events]}

    @app.get("/api/projects/{project_id}/events/stream")
    async def project_event_stream(
        project_id: UUID,
        request: Request,
        after: int = 0,
        follow: bool = True,
        last_event_id: Annotated[str | None, Header(alias="Last-Event-ID")] = None,
    ) -> StreamingResponse:
        repository: ControlPlaneRepository = request.app.state.repository
        try:
            cursor = max(after, int(last_event_id or 0), 0)
        except ValueError:
            cursor = max(after, 0)

        async def generate_events():
            nonlocal cursor
            heartbeat_ticks = 0
            while True:
                events = await repository.list_events(project_id, after_id=cursor, limit=500)
                for event in events:
                    cursor = event.id
                    serialized = json.dumps(event.model_dump(mode="json"), separators=(",", ":"))
                    yield f"id: {event.id}\nevent: {event.event_type}\ndata: {serialized}\n\n"
                if not follow:
                    return
                if await request.is_disconnected():
                    return
                heartbeat_ticks += 1
                if heartbeat_ticks >= 15:
                    heartbeat_ticks = 0
                    yield ": keepalive\n\n"
                await asyncio.sleep(1)

        return StreamingResponse(
            generate_events(),
            media_type="text/event-stream",
            headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"},
        )

    @app.get("/", response_class=HTMLResponse)
    async def index() -> Response:
        index_file = static_directory / "index.html"
        if index_file.is_file():
            return FileResponse(index_file)
        return HTMLResponse('<!doctype html><html><body><div id="multibuilder-app"></div></body></html>')

    app.mount("/static", StaticFiles(directory=static_directory, check_dir=False), name="static")

    return app
