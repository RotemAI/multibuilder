from __future__ import annotations

from dataclasses import dataclass, field
from pathlib import Path
from uuid import uuid4

import pytest

from multibuilder.database import Database
from multibuilder.domain import (
    CompletedTaskResult,
    MergeStatus,
    ProjectSpec,
    TaskSpec,
    TaskStatus,
    TaskType,
    ValidationStatus,
)
from multibuilder.integration import (
    IntegrationTarget,
    MergeAttemptResult,
    ProjectValidationConfig,
    ValidationExecutionResult,
    ValidationRunner,
    ValidationStep,
)
from multibuilder.integration_runtime import AutonomousIntegrationRuntime
from multibuilder.repository import ControlPlaneRepository
from multibuilder.routing import ProviderProfile


def project() -> ProjectSpec:
    return ProjectSpec(
        id=uuid4(),
        name="autonomous-integration",
        goal="Integrate reviewed code",
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
        instructions="Implement the API and tests.",
        dependencies=[],
        write_scope=["src/**", "tests/**"],
        acceptance_criteria=["The focused tests pass"],
        preferred_capabilities=["coding"],
        preferred_providers=[],
        timeout_seconds=900,
        retry_limit=2,
    )


def result(*, issues: list[str] | None = None) -> CompletedTaskResult:
    return CompletedTaskResult(
        summary="Completed the task",
        commit="def456",
        files_changed=["src/api.py"],
        commands_run=["pytest"],
        test_results=[{"command": "pytest", "passed": not issues}],
        remaining_issues=issues or [],
        proposed_followup_tasks=[],
    )


def provider(name: str, strength: float) -> ProviderProfile:
    return ProviderProfile(
        name=name,
        capabilities=frozenset({"coding", "review", "testing"}),
        strength=strength,
        relative_cost=0.2,
        latency_p95_seconds=5,
        recent_success_rate=0.9,
        active_runs=0,
        max_concurrency=4,
        available=True,
    )


@dataclass
class PassingValidationExecutor:
    calls: list[ValidationStep] = field(default_factory=list)

    async def execute(self, step, *, cwd: Path, timeout_seconds: float):
        self.calls.append(step)
        return ValidationExecutionResult(
            stage=step.stage,
            argv=step.argv,
            status=ValidationStatus.PASSED,
            exit_code=0,
            stdout=f"{step.stage} passed",
            stderr="",
            duration_seconds=0.1,
            timed_out=False,
        )


@dataclass
class SuccessfulMergeBackend:
    calls: list[tuple[Path, IntegrationTarget, str]] = field(default_factory=list)

    async def merge(self, *, cwd: Path, target: IntegrationTarget, commit: str):
        self.calls.append((cwd, target, commit))
        return MergeAttemptResult(True, integration_commit="fedcba")


@pytest.mark.asyncio
async def test_reviewed_commit_is_validated_merged_and_finalized_durably(tmp_path) -> None:
    database = Database(f"sqlite+aiosqlite:///{tmp_path / 'runtime.db'}")
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    item_project = project().model_copy(update={"repository_url": ""})
    code = implementation(item_project.id)
    repository_path = tmp_path / "repository"
    worktree_path = tmp_path / "worktree"
    repository_path.mkdir()
    worktree_path.mkdir()
    await repository.create_project(item_project)
    await repository.create_tasks([code])
    await repository.record_workspace(
        task_id=code.id,
        repository_path=str(repository_path),
        worktree_path=str(worktree_path),
        branch="multibuilder/project/task",
        base_commit="abc123",
        write_scope=code.write_scope,
    )
    await repository.upsert_provider(provider("codex", 1), adapter="codex_cli", default_model=None)
    await repository.upsert_provider(provider("grok", 0.8), adapter="grok_cli", default_model=None)
    await repository.transition_task(code.id, TaskStatus.SUCCEEDED, result=result())
    validation = PassingValidationExecutor()
    merge = SuccessfulMergeBackend()
    runtime = AutonomousIntegrationRuntime(
        repository=repository,
        validation_runner=ValidationRunner(validation),
        merge_backend=merge,
        repository_resolver=lambda selected: repository_path,
        validation_config_resolver=lambda selected, path: ProjectValidationConfig(build=("build",), unit=("pytest",)),
        max_repair_tasks=2,
    )

    first = await runtime.tick()
    review = next(
        task
        for task in (await repository.get_project_snapshot(item_project.id)).tasks
        if task.task_type is TaskType.REVIEW
    )
    await repository.transition_task(
        review.id,
        TaskStatus.SUCCEEDED,
        result=result(issues=[]).model_copy(update={"commit": None, "files_changed": []}),
    )
    second = await runtime.tick()
    snapshot = await repository.get_project_snapshot(item_project.id)
    await database.dispose()

    integrated_code = next(task for task in snapshot.tasks if task.id == code.id)
    assert (
        first.staged_reviews,
        second.merged,
        integrated_code.status,
        snapshot.merge_queue[0].status,
        [record.stage for record in snapshot.validations],
        len(merge.calls),
        merge.calls[0][1].base_ref,
    ) == (1, 1, TaskStatus.SUCCEEDED, MergeStatus.MERGED, ["unit", "build"], 1, "main")


@pytest.mark.asyncio
async def test_third_failed_review_escalates_to_one_lead_without_another_repair(tmp_path) -> None:
    database = Database(f"sqlite+aiosqlite:///{tmp_path / 'bounded-repair.db'}")
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    item_project = project().model_copy(update={"id": uuid4(), "name": "bounded-repair"})
    root = implementation(item_project.id)

    def child(task_type: TaskType, parent: TaskSpec, goal: str, *, write: bool) -> TaskSpec:
        return implementation(item_project.id).model_copy(
            update={
                "id": uuid4(),
                "parent_task_id": parent.id,
                "task_type": task_type,
                "goal": goal,
                "dependencies": [parent.id],
                "write_scope": root.write_scope if write else [],
                "preferred_capabilities": ["coding", "testing"] if write else ["review", "testing"],
            }
        )

    review_one = child(TaskType.REVIEW, root, "Review root", write=False)
    repair_one = child(TaskType.REPAIR, review_one, "Repair root", write=True)
    review_two = child(TaskType.REVIEW, repair_one, "Review repair one", write=False)
    repair_two = child(TaskType.REPAIR, review_two, "Repair again", write=True)
    review_three = child(TaskType.REVIEW, repair_two, "Review repair two", write=False)
    await repository.create_project(item_project)
    await repository.create_tasks([root, review_one, repair_one, review_two, repair_two, review_three])
    await repository.upsert_provider(provider("codex", 1), adapter="codex_cli", default_model=None)
    await repository.upsert_provider(provider("grok", 0.8), adapter="grok_cli", default_model=None)
    await repository.transition_task(root.id, TaskStatus.AWAITING_REVIEW, result=result())
    await repository.transition_task(
        review_one.id,
        TaskStatus.SUCCEEDED,
        result=result(issues=["first failure"]).model_copy(update={"commit": None, "files_changed": []}),
    )
    await repository.transition_task(repair_one.id, TaskStatus.AWAITING_REVIEW, result=result())
    await repository.transition_task(
        review_two.id,
        TaskStatus.SUCCEEDED,
        result=result(issues=["second failure"]).model_copy(update={"commit": None, "files_changed": []}),
    )
    await repository.transition_task(repair_two.id, TaskStatus.AWAITING_REVIEW, result=result())
    await repository.transition_task(
        review_three.id,
        TaskStatus.SUCCEEDED,
        result=result(issues=["third failure"]).model_copy(update={"commit": None, "files_changed": []}),
    )
    runtime = AutonomousIntegrationRuntime(
        repository=repository,
        validation_runner=ValidationRunner(PassingValidationExecutor()),
        merge_backend=SuccessfulMergeBackend(),
        repository_resolver=lambda selected: tmp_path,
        validation_config_resolver=lambda selected, path: ProjectValidationConfig(unit=("pytest",)),
        max_repair_tasks=2,
    )

    report = await runtime.tick()
    snapshot = await repository.get_project_snapshot(item_project.id)
    await database.dispose()

    leads = [task for task in snapshot.tasks if task.task_type is TaskType.WORKSTREAM_LEAD]
    repairs = [task for task in snapshot.tasks if task.task_type is TaskType.REPAIR]
    assert (report.lead_escalations, report.repairs, len(leads), len(repairs), leads[0].parent_task_id) == (
        1,
        0,
        1,
        2,
        review_three.id,
    )


@pytest.mark.asyncio
async def test_failed_review_creates_one_runnable_repair_with_concrete_evidence(tmp_path) -> None:
    database = Database(f"sqlite+aiosqlite:///{tmp_path / 'repair.db'}")
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    item_project = project().model_copy(update={"id": uuid4(), "name": "review-repair"})
    code = implementation(item_project.id)
    await repository.create_project(item_project)
    await repository.create_tasks([code])
    await repository.upsert_provider(provider("codex", 1), adapter="codex_cli", default_model=None)
    await repository.upsert_provider(provider("grok", 0.8), adapter="grok_cli", default_model=None)
    await repository.transition_task(code.id, TaskStatus.SUCCEEDED, result=result())
    runtime = AutonomousIntegrationRuntime(
        repository=repository,
        validation_runner=ValidationRunner(PassingValidationExecutor()),
        merge_backend=SuccessfulMergeBackend(),
        repository_resolver=lambda selected: tmp_path,
        validation_config_resolver=lambda selected, path: ProjectValidationConfig(unit=("pytest",)),
        max_repair_tasks=2,
    )
    await runtime.tick()
    review = next(
        task
        for task in (await repository.get_project_snapshot(item_project.id)).tasks
        if task.task_type is TaskType.REVIEW
    )
    await repository.transition_task(
        review.id,
        TaskStatus.SUCCEEDED,
        result=result(issues=["Authorization guard is missing"]).model_copy(
            update={"commit": None, "files_changed": []}
        ),
    )

    report = await runtime.tick()
    snapshot = await repository.get_project_snapshot(item_project.id)
    runnable = await repository.list_runnable_tasks(item_project.id)
    await database.dispose()

    repair = next(task for task in snapshot.tasks if task.task_type is TaskType.REPAIR)
    assert (
        report.repairs,
        repair.parent_task_id,
        "Authorization guard is missing" in repair.instructions,
        "The scheduler initialized this repair workspace at reviewed commit" in repair.instructions,
        "Apply reviewed commit" not in repair.instructions,
        [task.id for task in runnable],
    ) == (1, review.id, True, True, True, [repair.id])
