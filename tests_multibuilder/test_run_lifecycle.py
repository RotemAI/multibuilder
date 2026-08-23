from datetime import UTC, datetime
from uuid import uuid4

import pytest

from multibuilder.database import Database
from multibuilder.domain import (
    CompletedTaskResult,
    FollowupTaskProposal,
    MilestoneProposal,
    MilestoneStatus,
    ProjectSpec,
    ProjectStatus,
    RunStatus,
    TaskSpec,
    TaskStatus,
    TaskType,
)
from multibuilder.recovery import RecoveryAction, RetryDecision
from multibuilder.repository import CapacityUnavailable, ControlPlaneRepository
from multibuilder.routing import ProviderProfile


def task(project_id) -> TaskSpec:
    return TaskSpec(
        id=uuid4(),
        project_id=project_id,
        parent_task_id=None,
        task_type=TaskType.IMPLEMENTATION,
        goal="Build the route",
        instructions="Implement and test the route.",
        dependencies=[],
        write_scope=["src/api/**"],
        acceptance_criteria=["The route test passes"],
        preferred_capabilities=["coding"],
        preferred_providers=[],
        timeout_seconds=900,
        retry_limit=2,
    )


def provider(maximum: int = 1) -> ProviderProfile:
    return ProviderProfile(
        name="codex",
        capabilities=frozenset({"coding", "reasoning"}),
        strength=0.98,
        relative_cost=0.7,
        latency_p95_seconds=4,
        recent_success_rate=0.95,
        active_runs=0,
        max_concurrency=maximum,
        available=True,
    )


@pytest.mark.asyncio
async def test_claim_start_heartbeat_and_completion_are_one_durable_lifecycle(tmp_path) -> None:
    database = Database(f"sqlite+aiosqlite:///{tmp_path / 'runs.db'}")
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    project = ProjectSpec(
        id=uuid4(),
        name="runs",
        goal="Exercise the run lifecycle",
        repository_url="git@example.test:runs.git",
        base_branch="main",
        acceptance_criteria=["The task succeeds"],
        max_parallelism=2,
    )
    work = task(project.id)
    await repository.create_project(project)
    await repository.create_tasks([work])
    await repository.upsert_provider(provider(), adapter="codex", default_model=None)

    run = await repository.claim_task(work.id, provider="codex", model=None)
    await repository.mark_run_started(run.id, pid=4321, session_id="thread-1")
    heartbeat_at = datetime.now(UTC)
    await repository.heartbeat_run(run.id, at=heartbeat_at, progress=True)
    result = CompletedTaskResult(
        summary="Implemented and tested",
        commit="abc1234",
        files_changed=["src/api/routes.py"],
        commands_run=["pytest"],
        test_results=[{"command": "pytest", "passed": True}],
        remaining_issues=[],
        proposed_followup_tasks=[],
    )
    await repository.complete_run(run.id, result)

    finished = await repository.get_run(run.id)
    snapshot = await repository.get_project_snapshot(project.id)
    profiles = await repository.list_provider_profiles()
    await database.dispose()

    assert (finished.status, snapshot.tasks[0].status, snapshot.status, profiles[0].active_runs) == (
        RunStatus.SUCCEEDED,
        TaskStatus.AWAITING_REVIEW,
        ProjectStatus.RUNNING,
        0,
    )


@pytest.mark.asyncio
async def test_provider_capacity_is_claimed_transactionally(tmp_path) -> None:
    database = Database(f"sqlite+aiosqlite:///{tmp_path / 'capacity.db'}")
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    project = ProjectSpec(
        id=uuid4(),
        name="capacity",
        goal="Respect provider capacity",
        repository_url="git@example.test:capacity.git",
        base_branch="main",
        acceptance_criteria=["Only one task runs"],
        max_parallelism=2,
    )
    first = task(project.id)
    second = task(project.id)
    await repository.create_project(project)
    await repository.create_tasks([first, second])
    await repository.upsert_provider(provider(maximum=1), adapter="codex", default_model=None)

    await repository.claim_task(first.id, provider="codex", model=None)
    with pytest.raises(CapacityUnavailable):
        await repository.claim_task(second.id, provider="codex", model=None)
    await database.dispose()


@pytest.mark.asyncio
async def test_failed_run_and_retry_transition_are_atomic(tmp_path) -> None:
    database = Database(f"sqlite+aiosqlite:///{tmp_path / 'retry.db'}")
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    project = ProjectSpec(
        id=uuid4(),
        name="retry",
        goal="Recover a failed task",
        repository_url="git@example.test:retry.git",
        base_branch="main",
        acceptance_criteria=["The retry is durable"],
        max_parallelism=2,
    )
    work = task(project.id)
    await repository.create_project(project)
    await repository.create_tasks([work])
    await repository.upsert_provider(provider(), adapter="codex", default_model=None)
    run = await repository.claim_task(work.id, provider="codex", model=None)
    failed_at = datetime.now(UTC)

    await repository.fail_run_and_recover(
        run.id,
        status=RunStatus.FAILED,
        failure_class="logical",
        failure_message="focused tests failed",
        retry_decision=RetryDecision(
            action=RecoveryAction.RETRY_WITH_FEEDBACK,
            target_provider="codex",
            excluded_providers=frozenset(),
            reason="retry with evidence",
        ),
        at=failed_at,
    )

    snapshot = await repository.get_project_snapshot(project.id)
    failed_run = await repository.get_run(run.id)
    await database.dispose()

    assert failed_run.status is RunStatus.FAILED
    assert snapshot.tasks[0].status is TaskStatus.READY
    assert snapshot.tasks[0].retry_count == 1
    assert snapshot.tasks[0].blocked_reason == "focused tests failed"


@pytest.mark.asyncio
async def test_exhausted_recovery_blocks_the_task(tmp_path) -> None:
    database = Database(f"sqlite+aiosqlite:///{tmp_path / 'blocked.db'}")
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    project = ProjectSpec(
        id=uuid4(),
        name="blocked",
        goal="Bound retries",
        repository_url="git@example.test:blocked.git",
        base_branch="main",
        acceptance_criteria=["Retries terminate"],
        max_parallelism=2,
    )
    work = task(project.id)
    await repository.create_project(project)
    await repository.create_tasks([work])
    await repository.upsert_provider(provider(), adapter="codex", default_model=None)
    run = await repository.claim_task(work.id, provider="codex", model=None)

    await repository.fail_run_and_recover(
        run.id,
        status=RunStatus.LOST,
        failure_class="missing_heartbeat",
        failure_message="worker heartbeat expired",
        retry_decision=RetryDecision(
            action=RecoveryAction.REPLAN_OR_BLOCK,
            target_provider=None,
            excluded_providers=frozenset({"codex"}),
            reason="retry limit reached",
        ),
        at=datetime.now(UTC),
    )

    snapshot = await repository.get_project_snapshot(project.id)
    await database.dispose()

    assert snapshot.tasks[0].status is TaskStatus.BLOCKED
    assert snapshot.tasks[0].blocked_reason == "retry limit reached"


@pytest.mark.asyncio
async def test_director_result_materializes_milestones_and_followup_dag_atomically(tmp_path) -> None:
    database = Database(f"sqlite+aiosqlite:///{tmp_path / 'director.db'}")
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    project = ProjectSpec(
        id=uuid4(),
        name="director-plan",
        goal="Build from a structured plan",
        repository_url="git@example.test:plan.git",
        base_branch="main",
        acceptance_criteria=["The planned implementation succeeds"],
        max_parallelism=4,
    )
    director = task(project.id).model_copy(update={"task_type": TaskType.DIRECTOR, "write_scope": []})
    await repository.create_project(project)
    await repository.create_tasks([director])
    await repository.upsert_provider(provider(), adapter="codex", default_model=None)
    run = await repository.claim_task(director.id, provider="codex", model=None)
    result = CompletedTaskResult(
        summary="Created the project plan",
        commit=None,
        files_changed=[],
        commands_run=["git status --short"],
        test_results=[],
        remaining_issues=[],
        proposed_followup_tasks=[
            FollowupTaskProposal(
                key="contract",
                task_type=TaskType.IMPLEMENTATION,
                goal="Build the contract",
                instructions="Implement the public contract with focused tests.",
                dependencies=[],
                write_scope=["src/contracts/**"],
                acceptance_criteria=["Contract tests pass"],
                preferred_capabilities=["coding"],
                preferred_providers=[],
                timeout_seconds=900,
                retry_limit=1,
                priority=20,
            ),
            FollowupTaskProposal(
                key="consumer",
                task_type=TaskType.IMPLEMENTATION,
                goal="Build the consumer",
                instructions="Use the contract and test the integration.",
                dependencies=["contract"],
                write_scope=["src/consumer/**"],
                acceptance_criteria=["Consumer tests pass"],
                preferred_capabilities=["coding"],
                preferred_providers=[],
                timeout_seconds=900,
                retry_limit=3,
                priority=10,
            ),
        ],
        proposed_milestones=[
            MilestoneProposal(
                key="vertical-slice",
                title="Working vertical slice",
                description="Build and connect the contract and consumer.",
                acceptance_criteria=["The integrated flow passes"],
                task_keys=["contract", "consumer"],
            )
        ],
    )

    await repository.complete_run(run.id, result)

    snapshot = await repository.get_project_snapshot(project.id)
    runnable = await repository.list_runnable_tasks(project.id)
    await database.dispose()

    created = {item.goal: item for item in snapshot.tasks}
    assert len(snapshot.milestones) == 1
    assert len(snapshot.milestones[0].task_ids) == 2
    assert created["Build the contract"].parent_task_id == director.id
    assert created["Build the contract"].retry_limit == 3
    assert created["Build the consumer"].dependencies[-1] == created["Build the contract"].id
    assert [item.goal for item in runnable] == ["Build the contract"]


@pytest.mark.asyncio
async def test_milestone_status_tracks_its_task_lifecycle(tmp_path) -> None:
    database = Database(f"sqlite+aiosqlite:///{tmp_path / 'milestone-status.db'}")
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    project = ProjectSpec(
        id=uuid4(),
        name="milestone-status",
        goal="Keep milestone progress consistent with task progress",
        repository_url="git@example.test:milestones.git",
        base_branch="main",
        acceptance_criteria=["The milestone completes with its tasks"],
        max_parallelism=2,
    )
    director = task(project.id).model_copy(update={"task_type": TaskType.DIRECTOR, "write_scope": []})
    await repository.create_project(project)
    await repository.create_tasks([director])
    await repository.upsert_provider(provider(), adapter="codex", default_model=None)
    director_run = await repository.claim_task(director.id, provider="codex", model=None)
    await repository.complete_run(
        director_run.id,
        CompletedTaskResult(
            summary="Created milestone work",
            commit=None,
            files_changed=[],
            commands_run=[],
            test_results=[],
            remaining_issues=[],
            proposed_followup_tasks=[
                FollowupTaskProposal(
                    key="first",
                    task_type=TaskType.EXPLORATION,
                    goal="Complete the first milestone task",
                    instructions="Inspect the first area.",
                    dependencies=[],
                    write_scope=[],
                    acceptance_criteria=["The first inspection passes"],
                    preferred_capabilities=["exploration"],
                    preferred_providers=[],
                    timeout_seconds=300,
                    retry_limit=3,
                    priority=20,
                ),
                FollowupTaskProposal(
                    key="second",
                    task_type=TaskType.EXPLORATION,
                    goal="Complete the second milestone task",
                    instructions="Inspect the second area.",
                    dependencies=["first"],
                    write_scope=[],
                    acceptance_criteria=["The second inspection passes"],
                    preferred_capabilities=["exploration"],
                    preferred_providers=[],
                    timeout_seconds=300,
                    retry_limit=3,
                    priority=10,
                ),
            ],
            proposed_milestones=[
                MilestoneProposal(
                    key="delivery",
                    title="Validated delivery",
                    description="Complete both ordered inspection tasks.",
                    acceptance_criteria=["Both inspections pass"],
                    task_keys=["first", "second"],
                )
            ],
        ),
    )

    snapshot = await repository.get_project_snapshot(project.id)
    first = next(item for item in snapshot.tasks if item.goal == "Complete the first milestone task")
    second = next(item for item in snapshot.tasks if item.goal == "Complete the second milestone task")
    assert snapshot.milestones[0].status is MilestoneStatus.PENDING

    first_run = await repository.claim_task(first.id, provider="codex", model=None)
    snapshot = await repository.get_project_snapshot(project.id)
    assert snapshot.milestones[0].status is MilestoneStatus.ACTIVE
    await repository.complete_run(
        first_run.id,
        CompletedTaskResult(
            summary="First complete",
            commit=None,
            files_changed=[],
            commands_run=[],
            test_results=[],
            remaining_issues=[],
            proposed_followup_tasks=[],
        ),
    )
    second_run = await repository.claim_task(second.id, provider="codex", model=None)
    await repository.complete_run(
        second_run.id,
        CompletedTaskResult(
            summary="Second complete",
            commit=None,
            files_changed=[],
            commands_run=[],
            test_results=[],
            remaining_issues=[],
            proposed_followup_tasks=[],
        ),
    )

    snapshot = await repository.get_project_snapshot(project.id)
    events = await repository.list_events(project.id, limit=100)
    await database.dispose()

    assert snapshot.status is ProjectStatus.COMPLETED
    assert snapshot.milestones[0].status is MilestoneStatus.COMPLETED
    assert any(
        event.event_type == "milestone.status_changed"
        and event.payload["status"] == MilestoneStatus.COMPLETED.value
        for event in events
    )


@pytest.mark.asyncio
async def test_worker_followup_ideas_are_recorded_without_expanding_the_task_dag(tmp_path) -> None:
    database = Database(f"sqlite+aiosqlite:///{tmp_path / 'worker-followups.db'}")
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    project = ProjectSpec(
        id=uuid4(),
        name="bounded-worker",
        goal="Keep worker execution bounded",
        repository_url="git@example.test:bounded.git",
        base_branch="main",
        acceptance_criteria=["Worker suggestions do not recursively launch tasks"],
        max_parallelism=2,
    )
    work = task(project.id)
    await repository.create_project(project)
    await repository.create_tasks([work])
    await repository.upsert_provider(provider(), adapter="codex", default_model=None)
    run = await repository.claim_task(work.id, provider="codex", model=None)
    result = CompletedTaskResult(
        summary="Implemented the bounded task",
        commit="abc1234",
        files_changed=["src/api/routes.py"],
        commands_run=["pytest"],
        test_results=[{"command": "pytest", "passed": True}],
        remaining_issues=[],
        proposed_followup_tasks=[
            FollowupTaskProposal(
                key="extra-check",
                task_type=TaskType.TEST,
                goal="Run an optional extra check",
                instructions="Inspect the worker output without changing files.",
                dependencies=[str(work.id)],
                write_scope=[],
                acceptance_criteria=["The optional check passes"],
                preferred_capabilities=["testing"],
                preferred_providers=[],
                timeout_seconds=300,
                retry_limit=1,
                priority=0,
            )
        ],
    )

    await repository.complete_run(run.id, result)

    snapshot = await repository.get_project_snapshot(project.id)
    await database.dispose()

    assert len(snapshot.tasks) == 1
    assert snapshot.tasks[0].status is TaskStatus.AWAITING_REVIEW
    assert snapshot.tasks[0].result is not None
    assert snapshot.tasks[0].result.proposed_followup_tasks[0].key == "extra-check"


@pytest.mark.asyncio
async def test_third_worker_failure_is_replaced_by_a_workstream_lead_task(tmp_path) -> None:
    database = Database(f"sqlite+aiosqlite:///{tmp_path / 'escalate.db'}")
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    project = ProjectSpec(
        id=uuid4(),
        name="escalate",
        goal="Escalate repeated failures",
        repository_url="git@example.test:escalate.git",
        base_branch="main",
        acceptance_criteria=["A lead replans the failed work"],
        max_parallelism=2,
    )
    work = task(project.id)
    await repository.create_project(project)
    await repository.create_tasks([work])
    await repository.upsert_provider(provider(), adapter="codex", default_model=None)
    run = await repository.claim_task(work.id, provider="codex", model=None)

    await repository.fail_run_and_recover(
        run.id,
        status=RunStatus.FAILED,
        failure_class="repeated_failure",
        failure_message="two repair attempts failed",
        retry_decision=RetryDecision(
            action=RecoveryAction.ESCALATE_TO_LEAD,
            target_provider=None,
            excluded_providers=frozenset({"codex"}),
            reason="workstream lead must diagnose repeated worker failure",
        ),
        at=datetime.now(UTC),
    )

    snapshot = await repository.get_project_snapshot(project.id)
    replacement = next(item for item in snapshot.tasks if item.task_type is TaskType.WORKSTREAM_LEAD)
    original = next(item for item in snapshot.tasks if item.id == work.id)
    await database.dispose()

    assert original.status is TaskStatus.CANCELLED
    assert replacement.parent_task_id == original.id
    assert "two repair attempts failed" in replacement.instructions


@pytest.mark.asyncio
async def test_scheduler_shutdown_requeues_without_consuming_retry_budget(tmp_path) -> None:
    database = Database(f"sqlite+aiosqlite:///{tmp_path / 'shutdown.db'}")
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    project = ProjectSpec(
        id=uuid4(),
        name="shutdown",
        goal="Resume after service restart",
        repository_url="git@example.test:shutdown.git",
        base_branch="main",
        acceptance_criteria=["Shutdown does not spend a repair attempt"],
        max_parallelism=2,
    )
    work = task(project.id)
    await repository.create_project(project)
    await repository.create_tasks([work])
    await repository.upsert_provider(provider(), adapter="codex", default_model=None)
    run = await repository.claim_task(work.id, provider="codex", model=None)

    await repository.cancel_run_and_requeue(
        run.id,
        reason="scheduler stopped for deployment",
        at=datetime.now(UTC),
    )

    snapshot = await repository.get_project_snapshot(project.id)
    cancelled = await repository.get_run(run.id)
    await database.dispose()

    assert cancelled.status is RunStatus.CANCELLED
    assert snapshot.tasks[0].status is TaskStatus.READY
    assert snapshot.tasks[0].retry_count == 0
