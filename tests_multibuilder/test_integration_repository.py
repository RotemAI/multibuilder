from __future__ import annotations

from datetime import UTC, datetime
from uuid import uuid4

import pytest

from multibuilder.database import Database
from multibuilder.domain import (
    CompletedTaskResult,
    MergeStatus,
    ProjectSpec,
    ProjectStatus,
    TaskSpec,
    TaskStatus,
    TaskType,
    ValidationStatus,
)
from multibuilder.integration import (
    MergeQueueStateMachine,
    ReviewProviderCandidate,
    ReviewTaskFactory,
    ValidationExecutionResult,
    ValidationSuiteResult,
)
from multibuilder.repository import ControlPlaneRepository


def project() -> ProjectSpec:
    return ProjectSpec(
        id=uuid4(),
        name="integration-state",
        goal="Persist integration state",
        repository_url="https://example.test/project.git",
        base_branch="main",
        acceptance_criteria=["The integrated build passes"],
        max_parallelism=4,
    )


def implementation(project_id) -> TaskSpec:
    return TaskSpec(
        id=uuid4(),
        project_id=project_id,
        parent_task_id=None,
        task_type=TaskType.IMPLEMENTATION,
        goal="Build the API",
        instructions="Implement the API and focused tests.",
        dependencies=[],
        write_scope=["src/**", "tests/**"],
        acceptance_criteria=["Focused tests pass"],
        preferred_capabilities=["coding"],
        preferred_providers=[],
        timeout_seconds=900,
        retry_limit=2,
    )


@pytest.mark.asyncio
async def test_merge_transitions_and_validation_results_survive_reconnection(tmp_path) -> None:
    database_url = f"sqlite+aiosqlite:///{tmp_path / 'integration.db'}"
    database = Database(database_url)
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    item_project = project()
    task = implementation(item_project.id)
    await repository.create_project(item_project)
    await repository.create_tasks([task])
    await repository.record_workspace(
        task_id=task.id,
        repository_path=str(tmp_path / "repository"),
        worktree_path=str(tmp_path / "worktree"),
        branch="multibuilder/project/task",
        base_commit="abc123",
        write_scope=task.write_scope,
    )

    queued = await repository.enqueue_merge(task.id, commit="def456", max_attempts=2)
    state = MergeQueueStateMachine()
    validating = state.transition(queued, MergeStatus.VALIDATING)
    await repository.save(validating)
    suite = ValidationSuiteResult(
        (
            ValidationExecutionResult(
                stage="unit",
                argv=("pytest", "tests"),
                status=ValidationStatus.PASSED,
                exit_code=0,
                stdout="12 passed",
                stderr="",
                duration_seconds=1.25,
                timed_out=False,
            ),
        )
    )
    await repository.record_validation_results(queued, suite)
    await repository.save(state.transition(validating, MergeStatus.READY))
    await database.dispose()

    reopened = Database(database_url)
    snapshot = await ControlPlaneRepository(reopened.session_factory).get_project_snapshot(item_project.id)
    await reopened.dispose()

    assert (
        snapshot.merge_queue[0].status,
        snapshot.merge_queue[0].attempts,
        snapshot.validations[0].status,
        snapshot.validations[0].output,
    ) == (MergeStatus.READY, 0, ValidationStatus.PASSED, "12 passed")


@pytest.mark.asyncio
async def test_review_staging_is_atomic_idempotent_and_runnable(tmp_path) -> None:
    database = Database(f"sqlite+aiosqlite:///{tmp_path / 'review.db'}")
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    item_project = project().model_copy(update={"id": uuid4(), "name": "review-state"})
    task = implementation(item_project.id)
    await repository.create_project(item_project)
    await repository.create_tasks([task])
    completed = CompletedTaskResult(
        summary="Implemented the API",
        commit="def456",
        files_changed=["src/api.py"],
        commands_run=["pytest"],
        test_results=[{"command": "pytest", "passed": True}],
        remaining_issues=[],
        proposed_followup_tasks=[],
    )
    await repository.transition_task(task.id, TaskStatus.SUCCEEDED, result=completed)
    review = ReviewTaskFactory().create(
        project_id=item_project.id,
        implementation_task_id=task.id,
        implementation_provider="codex",
        commit="def456",
        changed_files=("src/api.py",),
        acceptance_criteria=task.acceptance_criteria,
        candidates=(ReviewProviderCandidate("codex", preference=100), ReviewProviderCandidate("grok", preference=80)),
    )

    first = await repository.stage_review(task.id, review.task)
    second = await repository.stage_review(task.id, review.task.model_copy(update={"id": uuid4()}))
    snapshot = await repository.get_project_snapshot(item_project.id)
    runnable = await repository.list_runnable_tasks(item_project.id)
    await database.dispose()

    code = next(item for item in snapshot.tasks if item.id == task.id)
    reviews = [item for item in snapshot.tasks if item.task_type is TaskType.REVIEW]
    assert (first, second, code.status, len(reviews), [item.id for item in runnable]) == (
        True,
        False,
        TaskStatus.AWAITING_REVIEW,
        1,
        [reviews[0].id],
    )


@pytest.mark.asyncio
async def test_durable_merge_claim_allows_only_one_active_item_per_project(tmp_path) -> None:
    database = Database(f"sqlite+aiosqlite:///{tmp_path / 'claim.db'}")
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    item_project = project().model_copy(update={"id": uuid4(), "name": "merge-claim"})
    first_task = implementation(item_project.id)
    second_task = implementation(item_project.id)
    await repository.create_project(item_project)
    await repository.create_tasks([first_task, second_task])
    for position, task in enumerate((first_task, second_task), start=1):
        await repository.record_workspace(
            task_id=task.id,
            repository_path=str(tmp_path / "repository"),
            worktree_path=str(tmp_path / f"worktree-{position}"),
            branch=f"multibuilder/project/task-{position}",
            base_commit="abc123",
            write_scope=task.write_scope,
        )
        queued = await repository.enqueue_merge(task.id, commit=f"def45{position}")
        validating = MergeQueueStateMachine().transition(queued, MergeStatus.VALIDATING)
        await repository.save(validating)
        await repository.save(MergeQueueStateMachine().transition(validating, MergeStatus.READY))

    first_claim = await repository.claim_next(item_project.id)
    blocked_claim = await repository.claim_next(item_project.id)
    await repository.save(
        MergeQueueStateMachine().transition(first_claim, MergeStatus.MERGED, integration_commit="fedcba")
    )
    second_claim = await repository.claim_next(item_project.id)
    await database.dispose()

    assert (first_claim.task_id, blocked_claim, second_claim.task_id) == (
        first_task.id,
        None,
        second_task.id,
    )


@pytest.mark.asyncio
async def test_pipeline_staging_does_not_resurrect_a_paused_project(tmp_path) -> None:
    database = Database(f"sqlite+aiosqlite:///{tmp_path / 'paused-review.db'}")
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    item_project = project().model_copy(update={"id": uuid4(), "name": "paused-review"})
    task = implementation(item_project.id)
    await repository.create_project(item_project)
    await repository.create_tasks([task])
    await repository.transition_task(task.id, TaskStatus.SUCCEEDED)
    await repository.pause_project(item_project.id)
    review = ReviewTaskFactory().create(
        project_id=item_project.id,
        implementation_task_id=task.id,
        implementation_provider="codex",
        commit="def456",
        changed_files=("src/api.py",),
        acceptance_criteria=task.acceptance_criteria,
        candidates=(ReviewProviderCandidate("muse", preference=100),),
    )

    staged = await repository.stage_review(task.id, review.task)
    snapshot = await repository.get_project_snapshot(item_project.id)
    await database.dispose()

    assert (staged, snapshot.status, len(snapshot.tasks)) == (False, ProjectStatus.PAUSED, 1)


@pytest.mark.asyncio
async def test_recovery_child_staging_does_not_resurrect_a_cancelled_project(tmp_path) -> None:
    database = Database(f"sqlite+aiosqlite:///{tmp_path / 'cancelled-repair.db'}")
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    item_project = project().model_copy(update={"id": uuid4(), "name": "cancelled-repair"})
    parent = implementation(item_project.id)
    await repository.create_project(item_project)
    await repository.create_tasks([parent])
    await repository.begin_project_cancellation(item_project.id, at=datetime.now(UTC))
    await repository.finalize_project_cancellation(item_project.id, at=datetime.now(UTC))
    child = TaskSpec(
        id=uuid4(),
        project_id=item_project.id,
        parent_task_id=parent.id,
        task_type=TaskType.REPAIR,
        goal="Repair the failed branch",
        instructions="Apply the bounded repair and rerun focused tests.",
        dependencies=[parent.id],
        write_scope=parent.write_scope,
        acceptance_criteria=parent.acceptance_criteria,
        preferred_capabilities=["coding"],
        preferred_providers=[],
        timeout_seconds=300,
        retry_limit=1,
    )

    staged = await repository.stage_pipeline_child(parent.id, child)
    snapshot = await repository.get_project_snapshot(item_project.id)
    await database.dispose()

    assert (staged, snapshot.status, len(snapshot.tasks)) == (False, ProjectStatus.CANCELLED, 1)


@pytest.mark.asyncio
async def test_merge_finalization_preserves_a_paused_project_status(tmp_path) -> None:
    database = Database(f"sqlite+aiosqlite:///{tmp_path / 'paused-merge.db'}")
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    item_project = project().model_copy(update={"id": uuid4(), "name": "paused-merge"})
    task = implementation(item_project.id)
    await repository.create_project(item_project)
    await repository.create_tasks([task])
    await repository.transition_task(task.id, TaskStatus.AWAITING_REVIEW)
    await repository.record_workspace(
        task_id=task.id,
        repository_path=str(tmp_path / "repository"),
        worktree_path=str(tmp_path / "worktree"),
        branch="multibuilder/paused/task",
        base_commit="abc123",
        write_scope=task.write_scope,
    )
    queued = await repository.enqueue_merge(task.id, commit="def456")
    state = MergeQueueStateMachine()
    validating = state.transition(queued, MergeStatus.VALIDATING)
    ready = state.transition(validating, MergeStatus.READY)
    merging = state.transition(ready, MergeStatus.MERGING)
    merged = state.transition(merging, MergeStatus.MERGED, integration_commit="fedcba")
    for item in (validating, ready, merging, merged):
        await repository.save(item)
    await repository.pause_project(item_project.id)

    await repository.finalize_merge(merged)
    snapshot = await repository.get_project_snapshot(item_project.id)
    await database.dispose()

    assert (snapshot.status, snapshot.tasks[0].status) == (ProjectStatus.PAUSED, TaskStatus.SUCCEEDED)
