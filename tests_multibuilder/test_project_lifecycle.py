from __future__ import annotations

import asyncio
from datetime import UTC, datetime
from pathlib import Path
from uuid import UUID, uuid4

import pytest
from fastapi.testclient import TestClient

from multibuilder.api import create_app
from multibuilder.database import Database
from multibuilder.domain import (
    AgentRunRecord,
    CompletedTaskResult,
    MergeStatus,
    ProjectSpec,
    ProjectStatus,
    RunStatus,
    TaskSpec,
    TaskStatus,
    TaskType,
)
from multibuilder.lifecycle import ProjectLifecycleService
from multibuilder.recovery import RecoveryAction, RetryDecision
from multibuilder.repository import CapacityUnavailable, ControlPlaneRepository, InvalidProjectTransition
from multibuilder.routing import ProviderProfile


def project() -> ProjectSpec:
    return ProjectSpec(
        id=uuid4(),
        name=f"lifecycle-{uuid4().hex[:8]}",
        goal="Exercise durable project lifecycle controls",
        repository_url="git@example.test:lifecycle.git",
        base_branch="main",
        acceptance_criteria=["Lifecycle transitions remain durable"],
        max_parallelism=4,
    )


def task(project_id: UUID, goal: str = "Build the API") -> TaskSpec:
    return TaskSpec(
        id=uuid4(),
        project_id=project_id,
        parent_task_id=None,
        task_type=TaskType.IMPLEMENTATION,
        goal=goal,
        instructions="Implement and test the requested behavior.",
        dependencies=[],
        write_scope=[f"src/{uuid4().hex[:8]}/**"],
        acceptance_criteria=["Focused tests pass"],
        preferred_capabilities=["coding"],
        preferred_providers=[],
        timeout_seconds=300,
        retry_limit=3,
    )


def provider() -> ProviderProfile:
    return ProviderProfile(
        name="codex",
        capabilities=frozenset({"coding", "reasoning"}),
        strength=0.95,
        relative_cost=0.4,
        latency_p95_seconds=2,
        recent_success_rate=0.95,
        active_runs=0,
        max_concurrency=4,
        available=True,
    )


def result() -> CompletedTaskResult:
    return CompletedTaskResult(
        summary="Completed the implementation",
        commit=None,
        files_changed=[],
        commands_run=["pytest -q"],
        test_results=[{"command": "pytest -q", "passed": True}],
        remaining_issues=[],
        proposed_followup_tasks=[],
    )


@pytest.mark.asyncio
async def test_pause_atomically_blocks_new_claims_while_inflight_work_finishes(tmp_path: Path) -> None:
    database = Database(f"sqlite+aiosqlite:///{tmp_path / 'pause.db'}")
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    item = project()
    active = task(item.id, "Active task")
    waiting = task(item.id, "Waiting task")
    await repository.create_project(item)
    await repository.create_tasks([active, waiting])
    await repository.upsert_provider(provider(), adapter="codex", default_model=None)
    run = await repository.claim_task(active.id, provider="codex", model=None)

    await repository.pause_project(item.id)
    with pytest.raises(CapacityUnavailable):
        await repository.claim_task(waiting.id, provider="codex", model=None)
    await repository.complete_run(run.id, result())
    snapshot = await repository.get_project_snapshot(item.id)
    events = await repository.list_events(item.id)
    await database.dispose()

    assert (snapshot.status, snapshot.tasks[0].status, events[-2].event_type) == (
        ProjectStatus.PAUSED,
        TaskStatus.SUCCEEDED,
        "project.paused",
    )


@pytest.mark.asyncio
async def test_last_inflight_completion_does_not_override_a_paused_project(tmp_path: Path) -> None:
    database = Database(f"sqlite+aiosqlite:///{tmp_path / 'pause-last.db'}")
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    item = project()
    active = task(item.id)
    await repository.create_project(item)
    await repository.create_tasks([active])
    await repository.upsert_provider(provider(), adapter="codex", default_model=None)
    run = await repository.claim_task(active.id, provider="codex", model=None)

    await repository.pause_project(item.id)
    await repository.complete_run(run.id, result())
    snapshot = await repository.get_project_snapshot(item.id)
    await database.dispose()

    assert (snapshot.status, snapshot.tasks[0].status) == (ProjectStatus.PAUSED, TaskStatus.SUCCEEDED)


@pytest.mark.asyncio
async def test_resume_accepts_paused_or_blocked_projects_and_clears_the_blocker(tmp_path: Path) -> None:
    database = Database(f"sqlite+aiosqlite:///{tmp_path / 'resume.db'}")
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    paused = project()
    blocked = project()
    await repository.create_project(paused)
    await repository.create_project(blocked)
    await repository.pause_project(paused.id)
    await repository.transition_project(blocked.id, ProjectStatus.BLOCKED, blocked_reason="source clone failed")

    await repository.resume_project(paused.id)
    await repository.resume_project(blocked.id)
    paused_snapshot = await repository.get_project_snapshot(paused.id)
    blocked_snapshot = await repository.get_project_snapshot(blocked.id)
    summaries = {item.project.id: item for item in await repository.list_projects()}
    events = await repository.list_events(blocked.id)
    await database.dispose()

    assert (
        paused_snapshot.status,
        blocked_snapshot.status,
        summaries[blocked.id].blocked_reason,
        events[-1].event_type,
    ) == (ProjectStatus.RUNNING, ProjectStatus.RUNNING, None, "project.resumed")


@pytest.mark.asyncio
async def test_resume_requeues_blocked_tasks_without_consuming_retry_budget(tmp_path: Path) -> None:
    database = Database(f"sqlite+aiosqlite:///{tmp_path / 'resume-task.db'}")
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    item = project()
    blocked_task = task(item.id)
    await repository.create_project(item)
    await repository.create_tasks([blocked_task])
    await repository.transition_task(
        blocked_task.id,
        TaskStatus.BLOCKED,
        blocked_reason="workspace allocation failed: missing remote base",
    )
    await repository.transition_project(
        item.id,
        ProjectStatus.BLOCKED,
        blocked_reason="workspace allocation failed: missing remote base",
    )

    await repository.resume_project(item.id)
    snapshot = await repository.get_project_snapshot(item.id)
    events = await repository.list_events(item.id)
    await database.dispose()

    restored = snapshot.tasks[0]
    assert (
        snapshot.status,
        restored.status,
        restored.retry_count,
        restored.blocked_reason,
        events[-1].payload["tasks_requeued"],
    ) == (ProjectStatus.RUNNING, TaskStatus.READY, 0, None, 1)


@pytest.mark.asyncio
async def test_operator_resume_resets_a_blocked_tasks_bounded_recovery_budget(tmp_path: Path) -> None:
    database = Database(f"sqlite+aiosqlite:///{tmp_path / 'resume-budget.db'}")
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    item = project()
    blocked_task = task(item.id)
    await repository.create_project(item)
    await repository.create_tasks([blocked_task])
    await repository.upsert_provider(provider(), adapter="codex", default_model=None)
    first = await repository.claim_task(blocked_task.id, provider="codex", model=None)
    await repository.fail_run_and_recover(
        first.id,
        status=RunStatus.FAILED,
        failure_class="logical",
        failure_message="first bounded failure",
        retry_decision=RetryDecision(
            action=RecoveryAction.RETRY_WITH_FEEDBACK,
            target_provider="codex",
            excluded_providers=frozenset(),
            reason="retry with concrete feedback",
        ),
        at=datetime.now(UTC),
    )
    second = await repository.claim_task(blocked_task.id, provider="codex", model=None)
    await repository.fail_run_and_recover(
        second.id,
        status=RunStatus.FAILED,
        failure_class="logical",
        failure_message="retry remained blocked",
        retry_decision=RetryDecision(
            action=RecoveryAction.REPLAN_OR_BLOCK,
            target_provider=None,
            excluded_providers=frozenset({"codex"}),
            reason="operator intervention required",
        ),
        at=datetime.now(UTC),
    )
    await repository.pause_project(item.id)

    await repository.resume_project(item.id)

    snapshot = await repository.get_project_snapshot(item.id)
    events = await repository.list_events(item.id)
    await database.dispose()

    restored = snapshot.tasks[0]
    assert (restored.status, restored.retry_count, events[-1].payload["retry_budgets_reset"]) == (
        TaskStatus.READY,
        0,
        1,
    )


@pytest.mark.asyncio
async def test_cancellation_state_is_atomic_complete_and_idempotent(tmp_path: Path) -> None:
    database = Database(f"sqlite+aiosqlite:///{tmp_path / 'cancel-state.db'}")
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    item = project()
    active = task(item.id, "Active task")
    waiting = task(item.id, "Waiting task")
    succeeded = task(item.id, "Succeeded task")
    failed = task(item.id, "Failed task")
    await repository.create_project(item)
    await repository.create_tasks([active, waiting, succeeded, failed])
    await repository.upsert_provider(provider(), adapter="codex", default_model=None)
    await repository.claim_task(active.id, provider="codex", model=None)
    await repository.transition_task(succeeded.id, TaskStatus.SUCCEEDED)
    await repository.transition_task(failed.id, TaskStatus.FAILED)
    await repository.record_workspace(
        task_id=waiting.id,
        repository_path="/srv/project",
        worktree_path=f"/srv/worktrees/{waiting.id}",
        branch=f"multibuilder/{waiting.id}",
        base_commit="abc1234",
        write_scope=waiting.write_scope,
    )
    await repository.enqueue_merge(waiting.id, commit="abcdef1")

    await repository.begin_project_cancellation(item.id, at=datetime.now(UTC))
    with pytest.raises(CapacityUnavailable):
        await repository.claim_task(waiting.id, provider="codex", model=None)
    await repository.finalize_project_cancellation(item.id, at=datetime.now(UTC))
    await repository.begin_project_cancellation(item.id, at=datetime.now(UTC))
    await repository.finalize_project_cancellation(item.id, at=datetime.now(UTC))
    snapshot = await repository.get_project_snapshot(item.id)
    events = await repository.list_events(item.id)
    await database.dispose()

    tasks = {record.id: record for record in snapshot.tasks}
    assert (
        snapshot.status,
        snapshot.runs[0].status,
        tasks[active.id].status,
        tasks[active.id].retry_count,
        tasks[waiting.id].status,
        tasks[succeeded.id].status,
        tasks[failed.id].status,
        snapshot.merge_queue[0].status,
        [event.event_type for event in events].count("project.cancelled"),
    ) == (
        ProjectStatus.CANCELLED,
        RunStatus.CANCELLED,
        TaskStatus.CANCELLED,
        0,
        TaskStatus.CANCELLED,
        TaskStatus.SUCCEEDED,
        TaskStatus.FAILED,
        MergeStatus.CANCELLED,
        1,
    )


@pytest.mark.asyncio
async def test_service_prevents_scheduling_before_it_stops_project_workers(tmp_path: Path) -> None:
    database = Database(f"sqlite+aiosqlite:///{tmp_path / 'cancel-order.db'}")
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    item = project()
    active = task(item.id)
    await repository.create_project(item)
    await repository.create_tasks([active])
    await repository.upsert_provider(provider(), adapter="codex", default_model=None)
    run = await repository.claim_task(active.id, provider="codex", model=None)
    await repository.mark_run_started(run.id, pid=4101)

    class Workers:
        observed_status: ProjectStatus | None = None
        calls = 0

        async def cancel_project_workers(self, project_id: UUID) -> tuple[UUID, ...]:
            self.calls += 1
            self.observed_status = (await repository.get_project_snapshot(project_id)).status
            return (run.id,)

    workers = Workers()
    service = ProjectLifecycleService(repository=repository, workers=workers, clock=lambda: datetime.now(UTC))

    first = await service.cancel(item.id)
    second = await service.cancel(item.id)
    snapshot = await repository.get_project_snapshot(item.id)
    await database.dispose()

    assert (workers.observed_status, workers.calls, first.status, second.status, snapshot.status) == (
        ProjectStatus.CANCELLED,
        1,
        ProjectStatus.CANCELLED,
        ProjectStatus.CANCELLED,
        ProjectStatus.CANCELLED,
    )


def test_authenticated_lifecycle_routes_enforce_status_and_missing_project_contracts(tmp_path: Path) -> None:
    app = create_app(
        database_url=f"sqlite+aiosqlite:///{tmp_path / 'lifecycle-api.db'}",
        admin_token="test-admin-token",
        scheduler_enabled=False,
    )
    headers = {"Authorization": "Bearer test-admin-token"}
    payload = {
        "name": "lifecycle-api",
        "goal": "Exercise project lifecycle routes",
        "repository_url": "git@example.test:lifecycle-api.git",
        "base_branch": "main",
        "acceptance_criteria": ["Lifecycle routes work"],
        "max_parallelism": 2,
    }

    with TestClient(app) as client:
        created = client.post("/api/projects", json=payload, headers=headers).json()
        project_id = created["id"]
        unauthenticated = client.post(f"/api/projects/{project_id}/pause")
        paused = client.post(f"/api/projects/{project_id}/pause", headers=headers)
        resumed = client.post(f"/api/projects/{project_id}/resume", headers=headers)
        cancelled = client.post(f"/api/projects/{project_id}/cancel", headers=headers)
        cancelled_again = client.post(f"/api/projects/{project_id}/cancel", headers=headers)
        invalid_pause = client.post(f"/api/projects/{project_id}/pause", headers=headers)
        invalid_resume = client.post(f"/api/projects/{project_id}/resume", headers=headers)
        missing = client.post(f"/api/projects/{uuid4()}/cancel", headers=headers)

    assert (
        unauthenticated.status_code,
        paused.status_code,
        paused.json()["status"],
        resumed.json()["status"],
        cancelled.json()["status"],
        cancelled_again.status_code,
        invalid_pause.status_code,
        invalid_resume.status_code,
        missing.status_code,
    ) == (401, 200, "paused", "running", "cancelled", 200, 409, 409, 404)
