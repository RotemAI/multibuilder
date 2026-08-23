from __future__ import annotations

import asyncio
import json
from datetime import UTC, datetime, timedelta
from pathlib import Path
from uuid import UUID, uuid4

import pytest

from multibuilder.database import Database
from multibuilder.domain import (
    AgentRunRecord,
    CompletedTaskResult,
    MergeQueueRecord,
    MergeStatus,
    ProjectSnapshot,
    ProjectSpec,
    ProjectStatus,
    RunStatus,
    TaskRecord,
    TaskStatus,
    TaskType,
    WorkspaceRecord,
    WorkspaceStatus,
)
from multibuilder.orchestrator import ExecutionRequest, Orchestrator
from multibuilder.process_runner import RunOutcome
from multibuilder.recovery import FailureClass, RecoveryAction, RetryDecision, Watchdog
from multibuilder.repository import ControlPlaneRepository
from multibuilder.routing import ProviderProfile, ProviderRouter
from multibuilder.scheduler import SchedulingPlanner
from multibuilder.worker_runtime import NormalizedEvent, PromptBuilder
from multibuilder.workspaces import FinalizedCommit, Workspace

NOW = datetime(2026, 8, 23, 12, 0, tzinfo=UTC)


def make_project(repository: Path, *, maximum: int = 4) -> ProjectSpec:
    return ProjectSpec(
        id=uuid4(),
        name="factory",
        goal="Build the requested software",
        repository_url=str(repository),
        base_branch="main",
        acceptance_criteria=["The integrated project passes its tests"],
        max_parallelism=maximum,
    )


def make_task(project_id: UUID, goal: str, scope: str, *, retry_limit: int = 3) -> TaskRecord:
    return TaskRecord(
        id=uuid4(),
        project_id=project_id,
        parent_task_id=None,
        task_type=TaskType.IMPLEMENTATION,
        goal=goal,
        instructions=f"Implement {goal} and test it.",
        dependencies=[],
        write_scope=[scope],
        acceptance_criteria=[f"{goal} passes focused tests"],
        preferred_capabilities=["coding"],
        preferred_providers=[],
        timeout_seconds=300,
        retry_limit=retry_limit,
        status=TaskStatus.READY,
        priority=10,
        retry_count=0,
        assigned_provider=None,
        assigned_model=None,
        blocked_reason=None,
        result=None,
        created_at=NOW,
        updated_at=NOW,
    )


def provider(name: str = "codex", *, maximum: int = 4) -> ProviderProfile:
    return ProviderProfile(
        name=name,
        capabilities=frozenset({"coding", "reasoning"}),
        strength=0.9,
        relative_cost=0.4,
        latency_p95_seconds=2,
        recent_success_rate=0.95,
        active_runs=0,
        max_concurrency=maximum,
        available=True,
    )


def completed_result(goal: str) -> CompletedTaskResult:
    return CompletedTaskResult(
        summary=f"Completed {goal}",
        commit="abc1234",
        files_changed=[f"{goal.lower()}/file.py"],
        commands_run=["pytest -q"],
        test_results=[{"command": "pytest -q", "passed": True}],
        remaining_issues=[],
        proposed_followup_tasks=[],
    )


class FakeRepository:
    def __init__(self, project: ProjectSpec, tasks: list[TaskRecord], providers: list[ProviderProfile]) -> None:
        self.project = project
        self.tasks = {task.id: task for task in tasks}
        self.providers = providers
        self.runs: dict[UUID, AgentRunRecord] = {}
        self.workspaces: dict[UUID, WorkspaceRecord] = {}
        self.merge_queue: list[MergeQueueRecord] = []
        self.events: list[tuple[str, UUID | None, UUID | None, dict, str]] = []
        self.recoveries: list[tuple[UUID, str, RetryDecision]] = []
        self.completions: list[UUID] = []
        self.heartbeats: list[tuple[UUID, datetime | None, bool]] = []
        self.completion_error: Exception | None = None
        self.project_status = ProjectStatus.RUNNING
        self.project_blocked_reason: str | None = None

    async def list_schedulable_projects(self) -> list[ProjectSpec]:
        return [self.project]

    async def get_project_snapshot(self, project_id: UUID) -> ProjectSnapshot:
        assert project_id == self.project.id
        return ProjectSnapshot(
            project=self.project,
            status=self.project_status,
            tasks=list(self.tasks.values()),
            runs=list(self.runs.values()),
            workspaces=list(self.workspaces.values()),
            merge_queue=self.merge_queue,
            created_at=NOW,
            updated_at=NOW,
        )

    async def list_runnable_tasks(self, project_id: UUID) -> list[TaskRecord]:
        assert project_id == self.project.id
        return [task for task in self.tasks.values() if task.status in {TaskStatus.PENDING, TaskStatus.READY}]

    async def list_provider_profiles(self) -> list[ProviderProfile]:
        active = {name: 0 for name in (item.name for item in self.providers)}
        for run in self.runs.values():
            if run.status in {RunStatus.STARTING, RunStatus.RUNNING}:
                active[run.provider] = active.get(run.provider, 0) + 1
        return [
            ProviderProfile(
                name=item.name,
                capabilities=item.capabilities,
                strength=item.strength,
                relative_cost=item.relative_cost,
                latency_p95_seconds=item.latency_p95_seconds,
                recent_success_rate=item.recent_success_rate,
                active_runs=active.get(item.name, 0),
                max_concurrency=item.max_concurrency,
                available=item.available,
                rate_limited_until=item.rate_limited_until,
            )
            for item in self.providers
        ]

    async def record_workspace(
        self,
        *,
        task_id: UUID,
        repository_path: str,
        worktree_path: str,
        branch: str,
        base_commit: str,
        write_scope: list[str],
        port: int | None = None,
    ) -> WorkspaceRecord:
        record = WorkspaceRecord(
            id=uuid4(),
            project_id=self.project.id,
            task_id=task_id,
            repository_path=repository_path,
            worktree_path=worktree_path,
            branch=branch,
            base_commit=base_commit,
            write_scope=write_scope,
            status=WorkspaceStatus.ACTIVE,
            port=port,
            created_at=NOW,
            updated_at=NOW,
        )
        self.workspaces[task_id] = record
        return record

    async def claim_task(
        self,
        task_id: UUID,
        *,
        provider: str,
        model: str | None,
        parent_run_id: UUID | None = None,
    ) -> AgentRunRecord:
        task = self.tasks[task_id]
        run = AgentRunRecord(
            id=uuid4(),
            project_id=task.project_id,
            task_id=task.id,
            parent_run_id=parent_run_id,
            provider=provider,
            model=model,
            role=task.task_type.value,
            status=RunStatus.STARTING,
            attempt=task.retry_count,
            pid=None,
            session_id=None,
            started_at=NOW,
            heartbeat_at=NOW,
            progress_at=NOW,
            finished_at=None,
            failure_class=None,
            failure_message=None,
            result=None,
        )
        self.runs[run.id] = run
        self.tasks[task_id] = task.model_copy(
            update={"status": TaskStatus.RUNNING, "assigned_provider": provider, "assigned_model": model}
        )
        return run

    async def mark_run_started(self, run_id: UUID, *, pid: int, session_id: str | None = None) -> None:
        run = self.runs[run_id]
        self.runs[run_id] = run.model_copy(update={"status": RunStatus.RUNNING, "pid": pid, "session_id": session_id})

    async def heartbeat_run(self, run_id: UUID, *, at: datetime | None = None, progress: bool = False) -> None:
        self.heartbeats.append((run_id, at, progress))
        run = self.runs[run_id]
        update = {"heartbeat_at": at or NOW}
        if progress:
            update["progress_at"] = at or NOW
        self.runs[run_id] = run.model_copy(update=update)

    async def complete_run(self, run_id: UUID, result: CompletedTaskResult) -> None:
        if self.completion_error is not None:
            raise self.completion_error
        run = self.runs[run_id]
        self.runs[run_id] = run.model_copy(update={"status": RunStatus.SUCCEEDED, "finished_at": NOW, "result": result})
        task = self.tasks[run.task_id]
        self.tasks[run.task_id] = task.model_copy(update={"status": TaskStatus.SUCCEEDED, "result": result})
        self.completions.append(run_id)

    async def fail_run_and_recover(
        self,
        run_id: UUID,
        *,
        status: RunStatus,
        failure_class: str,
        failure_message: str,
        retry_decision: RetryDecision,
        at: datetime,
    ) -> None:
        run = self.runs[run_id]
        self.runs[run_id] = run.model_copy(
            update={
                "status": status,
                "finished_at": at,
                "failure_class": failure_class,
                "failure_message": failure_message,
            }
        )
        task = self.tasks[run.task_id]
        if retry_decision.action == RecoveryAction.REPLAN_OR_BLOCK:
            task_update = {
                "status": TaskStatus.BLOCKED,
                "blocked_reason": retry_decision.reason,
            }
        else:
            task_update = {
                "status": TaskStatus.READY,
                "retry_count": task.retry_count + 1,
                "blocked_reason": failure_message,
            }
        self.tasks[task.id] = task.model_copy(update=task_update)
        self.recoveries.append((run_id, failure_class, retry_decision))

    async def cancel_run_and_requeue(
        self,
        run_id: UUID,
        *,
        reason: str,
        at: datetime,
    ) -> None:
        run = self.runs[run_id]
        self.runs[run_id] = run.model_copy(
            update={"status": RunStatus.CANCELLED, "finished_at": at, "failure_message": reason}
        )
        task = self.tasks[run.task_id]
        self.tasks[task.id] = task.model_copy(update={"status": TaskStatus.READY, "blocked_reason": reason})

    async def transition_task(
        self,
        task_id: UUID,
        status: TaskStatus,
        *,
        result: CompletedTaskResult | None = None,
        blocked_reason: str | None = None,
    ) -> None:
        task = self.tasks[task_id]
        self.tasks[task_id] = task.model_copy(
            update={"status": status, "result": result or task.result, "blocked_reason": blocked_reason}
        )

    async def transition_project(
        self,
        project_id: UUID,
        status: ProjectStatus,
        *,
        blocked_reason: str | None = None,
    ) -> None:
        assert project_id == self.project.id
        self.project_status = status
        self.project_blocked_reason = blocked_reason

    async def append_event(
        self,
        project_id: UUID,
        event_type: str,
        payload: dict,
        *,
        task_id: UUID | None = None,
        run_id: UUID | None = None,
        level: str = "info",
    ) -> object:
        assert project_id == self.project.id
        self.events.append((event_type, task_id, run_id, payload, level))
        return object()


class FakeWorkspaceManager:
    def __init__(self) -> None:
        self.violations: dict[UUID, list[str]] = {}
        self.base_refs: list[str] = []
        self.commit_messages: list[str] = []

    def allocate(
        self,
        *,
        project_id: UUID,
        task_id: UUID,
        repository_path: Path,
        base_ref: str,
        write_scope: list[str],
    ) -> Workspace:
        self.base_refs.append(base_ref)
        return Workspace(
            project_id=project_id,
            task_id=task_id,
            repository_path=repository_path,
            path=repository_path / ".worktrees" / task_id.hex,
            branch=f"multibuilder/{project_id.hex[:8]}/{task_id.hex[:12]}",
            base_commit=f"{base_ref}-commit",
            write_scope=tuple(write_scope),
        )

    def scope_violations(self, workspace: Workspace) -> list[str]:
        return self.violations.get(workspace.task_id, [])

    def changed_paths(self, workspace: Workspace) -> tuple[str, ...]:
        scope = workspace.write_scope[0]
        changed = scope.removesuffix("/**").rstrip("/") + "/file.py" if scope.endswith("/**") else scope
        return (changed,) if changed else ()

    def commit_changes(self, workspace: Workspace, *, message: str) -> FinalizedCommit:
        self.commit_messages.append(message)
        return FinalizedCommit("scheduler-commit", self.changed_paths(workspace))


class FailingWorkspaceManager(FakeWorkspaceManager):
    def allocate(self, **kwargs) -> Workspace:
        raise RuntimeError("remote base ref is missing")


class SuccessfulExecutor:
    def __init__(self) -> None:
        self.requests: list[ExecutionRequest] = []
        self.active = 0
        self.max_active = 0
        self.alive: dict[int, bool] = {}
        self.terminated: list[int] = []

    async def execute(self, request: ExecutionRequest, *, on_event) -> RunOutcome:
        self.requests.append(request)
        self.active += 1
        self.max_active = max(self.max_active, self.active)
        pid = 1000 + len(self.requests)
        self.alive[pid] = True
        await on_event(NormalizedEvent("run.process_started", {"pid": pid, "session_id": f"s-{pid}"}))
        await on_event(NormalizedEvent("run.heartbeat", {"pid": pid}))
        await asyncio.sleep(0)
        await on_event(NormalizedEvent("agent.message", {"text": f"Finished {request.task.goal}"}))
        scope = request.task.write_scope[0]
        changed_file = scope.removesuffix("/**").rstrip("/") + "/file.py" if scope.endswith("/**") else scope
        result = completed_result(request.task.goal).model_copy(update={"files_changed": [changed_file]})
        self.active -= 1
        self.alive[pid] = False
        return RunOutcome(
            pid=pid,
            returncode=0,
            timed_out=False,
            stdout_lines=(json.dumps(result.model_dump(mode="json")),),
            stderr_lines=(),
            duration_seconds=0.1,
        )

    async def is_process_alive(self, pid: int) -> bool:
        return self.alive.get(pid, False)

    async def terminate_process(self, pid: int) -> None:
        self.terminated.append(pid)
        self.alive[pid] = False


class RateLimitedExecutor(SuccessfulExecutor):
    async def execute(self, request: ExecutionRequest, *, on_event) -> RunOutcome:
        await on_event(NormalizedEvent("run.process_started", {"pid": 4290}))
        await on_event(NormalizedEvent("rate_limit.observed", {"provider": request.provider}))
        return RunOutcome(
            pid=4290,
            returncode=1,
            timed_out=False,
            stdout_lines=(),
            stderr_lines=("request was rate limited",),
            duration_seconds=0.1,
        )


class ResourceExhaustedExecutor(SuccessfulExecutor):
    async def execute(self, request: ExecutionRequest, *, on_event) -> RunOutcome:
        await on_event(NormalizedEvent("run.process_started", {"pid": 5030}))
        await on_event(NormalizedEvent("resource.exhaustion", {"resource": "memory"}, "error"))
        return RunOutcome(
            pid=5030,
            returncode=137,
            timed_out=False,
            stdout_lines=(),
            stderr_lines=("worker was terminated under memory pressure",),
            duration_seconds=0.1,
        )


class ReportedScopeViolationExecutor(SuccessfulExecutor):
    def __init__(self, path: str = "secrets.txt") -> None:
        super().__init__()
        self.path = path

    async def execute(self, request: ExecutionRequest, *, on_event) -> RunOutcome:
        await on_event(NormalizedEvent("run.process_started", {"pid": 2001}))
        result = completed_result(request.task.goal).model_copy(update={"files_changed": [self.path]})
        return RunOutcome(
            pid=2001,
            returncode=0,
            timed_out=False,
            stdout_lines=(json.dumps(result.model_dump(mode="json")),),
            stderr_lines=(),
            duration_seconds=0.1,
        )


class UncommittedSuccessfulExecutor(SuccessfulExecutor):
    async def execute(self, request: ExecutionRequest, *, on_event) -> RunOutcome:
        self.requests.append(request)
        await on_event(NormalizedEvent("run.process_started", {"pid": 2002}))
        scope = request.task.write_scope[0]
        changed_file = scope.removesuffix("/**").rstrip("/") + "/file.py"
        result = completed_result(request.task.goal).model_copy(
            update={"commit": None, "files_changed": [changed_file]}
        )
        return RunOutcome(
            pid=2002,
            returncode=0,
            timed_out=False,
            stdout_lines=(json.dumps(result.model_dump(mode="json")),),
            stderr_lines=(),
            duration_seconds=0.1,
        )


class UnderreportedWorkerExecutor(SuccessfulExecutor):
    async def execute(self, request: ExecutionRequest, *, on_event) -> RunOutcome:
        await on_event(NormalizedEvent("run.process_started", {"pid": 2003}))
        result = completed_result(request.task.goal).model_copy(
            update={
                "commit": None,
                "files_changed": [],
                "remaining_issues": ["The worker could not finalize its scoped change"],
            }
        )
        return RunOutcome(
            pid=2003,
            returncode=0,
            timed_out=False,
            stdout_lines=(json.dumps(result.model_dump(mode="json")),),
            stderr_lines=(),
            duration_seconds=0.1,
        )


class TimedOutExecutor(SuccessfulExecutor):
    async def execute(self, request: ExecutionRequest, *, on_event) -> RunOutcome:
        self.requests.append(request)
        await on_event(NormalizedEvent("run.process_started", {"pid": 4080}))
        return RunOutcome(
            pid=4080,
            returncode=-15,
            timed_out=True,
            stdout_lines=(),
            stderr_lines=(),
            duration_seconds=request.timeout_seconds,
        )


class BlockingExecutor(SuccessfulExecutor):
    def __init__(self) -> None:
        super().__init__()
        self.started = asyncio.Event()
        self.cleaned_up = asyncio.Event()

    async def execute(self, request: ExecutionRequest, *, on_event) -> RunOutcome:
        self.requests.append(request)
        await on_event(NormalizedEvent("run.process_started", {"pid": 9001}))
        self.started.set()
        try:
            await asyncio.Event().wait()
        finally:
            self.cleaned_up.set()
        raise AssertionError("the blocking executor must be cancelled")


def make_orchestrator(
    repository: FakeRepository,
    executor: SuccessfulExecutor,
    workspaces: FakeWorkspaceManager | None = None,
) -> Orchestrator:
    return Orchestrator(
        repository=repository,
        planner=SchedulingPlanner(ProviderRouter()),
        workspace_manager=workspaces or FakeWorkspaceManager(),
        executor=executor,
        prompt_builder=PromptBuilder(),
        watchdog=Watchdog(heartbeat_timeout_seconds=30, progress_timeout_seconds=90),
        repository_resolver=lambda project: Path(project.repository_url),
        global_max_parallelism=8,
        clock=lambda: NOW,
    )


@pytest.mark.asyncio
async def test_dependent_workspace_uses_integration_branch_after_upstream_merge(tmp_path: Path) -> None:
    project = make_project(tmp_path)
    upstream = make_task(project.id, "Contract", "contract/**").model_copy(update={"status": TaskStatus.SUCCEEDED})
    dependent = make_task(project.id, "Consumer", "consumer/**").model_copy(update={"dependencies": [upstream.id]})
    repository = FakeRepository(project, [upstream, dependent], [provider()])
    repository.merge_queue.append(
        MergeQueueRecord(
            id=uuid4(),
            project_id=project.id,
            task_id=upstream.id,
            workspace_id=uuid4(),
            commit="abc1234",
            branch="multibuilder/upstream",
            status=MergeStatus.MERGED,
            position=1,
            conflict_details=None,
            integration_commit="def5678",
            created_at=NOW,
            updated_at=NOW,
        )
    )
    workspaces = FakeWorkspaceManager()
    orchestrator = make_orchestrator(repository, SuccessfulExecutor(), workspaces)

    await orchestrator.tick()
    await orchestrator.drain()

    assert workspaces.base_refs == [f"integration/{project.id.hex[:12]}"]


@pytest.mark.asyncio
async def test_initial_workspace_uses_the_verified_remote_base_branch(tmp_path: Path) -> None:
    project = make_project(tmp_path).model_copy(update={"base_branch": "Nimo/canary"})
    task = make_task(project.id, "API", "api/**")
    repository = FakeRepository(project, [task], [provider()])
    workspaces = FakeWorkspaceManager()
    orchestrator = make_orchestrator(repository, SuccessfulExecutor(), workspaces)

    await orchestrator.tick()
    await orchestrator.drain()

    assert workspaces.base_refs == ["origin/Nimo/canary"]


@pytest.mark.asyncio
async def test_dependent_workspace_uses_the_nearest_upstream_task_commit(tmp_path: Path) -> None:
    project = make_project(tmp_path)
    upstream = make_task(project.id, "Contract", "contract/**").model_copy(
        update={"status": TaskStatus.SUCCEEDED, "result": completed_result("Contract")}
    )
    dependent = make_task(project.id, "Consumer", "consumer/**").model_copy(
        update={"dependencies": [upstream.id]}
    )
    repository = FakeRepository(project, [upstream, dependent], [provider()])
    workspaces = FakeWorkspaceManager()
    orchestrator = make_orchestrator(repository, SuccessfulExecutor(), workspaces)

    await orchestrator.tick()
    await orchestrator.drain()

    assert workspaces.base_refs == ["abc1234"]


@pytest.mark.asyncio
async def test_workspace_allocation_failure_blocks_the_project_for_bounded_operator_recovery(tmp_path: Path) -> None:
    project = make_project(tmp_path)
    task = make_task(project.id, "API", "api/**")
    repository = FakeRepository(project, [task], [provider()])
    orchestrator = make_orchestrator(repository, SuccessfulExecutor(), FailingWorkspaceManager())

    report = await orchestrator.tick()

    assert (
        report.launched,
        repository.tasks[task.id].status,
        repository.project_status,
        repository.project_blocked_reason,
    ) == ((), TaskStatus.BLOCKED, ProjectStatus.BLOCKED, "workspace allocation failed: remote base ref is missing")


@pytest.mark.asyncio
async def test_tick_runs_all_safe_assignments_concurrently(tmp_path: Path) -> None:
    project = make_project(tmp_path)
    tasks = [
        make_task(project.id, "API", "api/**"),
        make_task(project.id, "Frontend", "frontend/**"),
        make_task(project.id, "Conflicting API", "api/routes.py"),
    ]
    repository = FakeRepository(project, tasks, [provider(maximum=2)])
    executor = SuccessfulExecutor()
    orchestrator = make_orchestrator(repository, executor)

    report = await orchestrator.tick()
    await orchestrator.drain()

    assert (len(report.launched), executor.max_active, len(repository.completions)) == (2, 2, 2)


@pytest.mark.asyncio
async def test_rate_limit_event_drives_rate_limit_recovery(tmp_path: Path) -> None:
    project = make_project(tmp_path)
    task = make_task(project.id, "API", "api/**")
    repository = FakeRepository(project, [task], [provider()])
    orchestrator = make_orchestrator(repository, RateLimitedExecutor())

    await orchestrator.tick()
    await orchestrator.drain()

    assert repository.recoveries[0][1] == "rate_limit"


@pytest.mark.asyncio
async def test_resource_event_drives_resource_exhaustion_recovery(tmp_path: Path) -> None:
    project = make_project(tmp_path)
    task = make_task(project.id, "API", "api/**")
    repository = FakeRepository(project, [task], [provider()])
    orchestrator = make_orchestrator(repository, ResourceExhaustedExecutor())

    await orchestrator.tick()
    await orchestrator.drain()

    assert repository.recoveries[0][1] == "resource_exhaustion"


@pytest.mark.asyncio
async def test_completion_rejects_reported_files_outside_write_scope(tmp_path: Path) -> None:
    project = make_project(tmp_path)
    task = make_task(project.id, "API", "api/**")
    repository = FakeRepository(project, [task], [provider()])
    orchestrator = make_orchestrator(repository, ReportedScopeViolationExecutor())

    await orchestrator.tick()
    await orchestrator.drain()

    assert (len(repository.completions), repository.recoveries[0][1]) == (0, "logical")


@pytest.mark.asyncio
async def test_completion_rejects_parent_path_escape_in_reported_files(tmp_path: Path) -> None:
    project = make_project(tmp_path)
    task = make_task(project.id, "API", "api/**")
    repository = FakeRepository(project, [task], [provider()])
    executor = ReportedScopeViolationExecutor("../api/file.py")
    orchestrator = make_orchestrator(repository, executor)

    await orchestrator.tick()
    await orchestrator.drain()

    assert len(repository.completions) == 0


@pytest.mark.asyncio
async def test_scheduler_commits_valid_scoped_worker_output_before_completion(tmp_path: Path) -> None:
    project = make_project(tmp_path)
    task = make_task(project.id, "API", "api/**")
    repository = FakeRepository(project, [task], [provider()])
    workspaces = FakeWorkspaceManager()
    orchestrator = make_orchestrator(repository, UncommittedSuccessfulExecutor(), workspaces)

    await orchestrator.tick()
    await orchestrator.drain()

    completed = repository.tasks[task.id].result
    assert completed is not None
    assert completed.commit == "scheduler-commit"
    assert completed.files_changed == ["api/file.py"]
    assert workspaces.commit_messages == [f"[task] Finalize {task.id}"]


@pytest.mark.asyncio
async def test_completion_rejects_a_blocked_worker_result_that_underreports_workspace_changes(
    tmp_path: Path,
) -> None:
    project = make_project(tmp_path)
    task = make_task(project.id, "API", "api/**")
    repository = FakeRepository(project, [task], [provider()])
    orchestrator = make_orchestrator(repository, UnderreportedWorkerExecutor())

    await orchestrator.tick()
    await orchestrator.drain()

    assert repository.completions == []
    assert repository.recoveries[0][1] == "logical"


@pytest.mark.asyncio
async def test_review_uses_a_provider_independent_from_its_parent_run(tmp_path: Path) -> None:
    project = make_project(tmp_path)
    implementation = make_task(project.id, "API", "api/**").model_copy(update={"status": TaskStatus.SUCCEEDED})
    review = make_task(project.id, "Review API", "reviews/**").model_copy(
        update={
            "task_type": TaskType.REVIEW,
            "parent_task_id": implementation.id,
            "preferred_providers": ["codex"],
        }
    )
    repository = FakeRepository(project, [implementation, review], [provider("codex"), provider("grok")])
    parent_run = AgentRunRecord(
        id=uuid4(),
        project_id=project.id,
        task_id=implementation.id,
        parent_run_id=None,
        provider="codex",
        model="strong",
        role=TaskType.IMPLEMENTATION.value,
        status=RunStatus.SUCCEEDED,
        attempt=0,
        pid=3001,
        session_id=None,
        started_at=NOW - timedelta(minutes=2),
        heartbeat_at=NOW - timedelta(minutes=1),
        progress_at=NOW - timedelta(minutes=1),
        finished_at=NOW - timedelta(minutes=1),
        failure_class=None,
        failure_message=None,
        result=completed_result("API"),
    )
    repository.runs[parent_run.id] = parent_run
    executor = SuccessfulExecutor()
    orchestrator = make_orchestrator(repository, executor)

    await orchestrator.tick()
    await orchestrator.drain()

    assert (executor.requests[0].provider, executor.requests[0].run.parent_run_id) == (
        "grok",
        parent_run.id,
    )


@pytest.mark.asyncio
async def test_review_uses_a_provider_independent_from_an_upstream_code_dependency(tmp_path: Path) -> None:
    project = make_project(tmp_path)
    implementation = make_task(project.id, "API", "api/**").model_copy(
        update={"status": TaskStatus.SUCCEEDED, "result": completed_result("API")}
    )
    lead = make_task(project.id, "Lead API", "").model_copy(
        update={"task_type": TaskType.WORKSTREAM_LEAD, "status": TaskStatus.SUCCEEDED, "write_scope": []}
    )
    review = make_task(project.id, "Review API", "").model_copy(
        update={
            "task_type": TaskType.REVIEW,
            "parent_task_id": lead.id,
            "dependencies": [lead.id, implementation.id],
            "write_scope": [],
            "preferred_capabilities": ["critical_review"],
            "preferred_providers": ["codex"],
        }
    )
    repository = FakeRepository(project, [implementation, lead, review], [provider("codex"), provider("grok")])
    implementation_run = AgentRunRecord(
        id=uuid4(),
        project_id=project.id,
        task_id=implementation.id,
        parent_run_id=None,
        provider="codex",
        model="strong",
        role=TaskType.IMPLEMENTATION.value,
        status=RunStatus.SUCCEEDED,
        attempt=0,
        pid=3001,
        session_id=None,
        started_at=NOW - timedelta(minutes=2),
        heartbeat_at=NOW - timedelta(minutes=1),
        progress_at=NOW - timedelta(minutes=1),
        finished_at=NOW - timedelta(minutes=1),
        failure_class=None,
        failure_message=None,
        result=completed_result("API"),
    )
    repository.runs[implementation_run.id] = implementation_run
    executor = SuccessfulExecutor()
    orchestrator = make_orchestrator(repository, executor)

    await orchestrator.tick()
    await orchestrator.drain()

    assert executor.requests[0].provider == "grok"


@pytest.mark.asyncio
async def test_restart_reconciles_a_stale_live_run_before_relaunch(tmp_path: Path) -> None:
    project = make_project(tmp_path)
    task = make_task(project.id, "API", "api/**")
    repository = FakeRepository(project, [task], [provider()])
    stale = await repository.claim_task(task.id, provider="codex", model=None)
    await repository.mark_run_started(stale.id, pid=7001)
    repository.runs[stale.id] = repository.runs[stale.id].model_copy(
        update={
            "started_at": NOW - timedelta(seconds=45),
            "heartbeat_at": NOW - timedelta(seconds=45),
            "progress_at": NOW - timedelta(seconds=45),
        }
    )
    executor = SuccessfulExecutor()
    executor.alive[7001] = True
    orchestrator = make_orchestrator(repository, executor)

    report = await orchestrator.tick()
    await orchestrator.drain()

    assert (
        report.recovered[0].failure_class.value,
        executor.terminated,
        len(report.launched),
        len(repository.completions),
    ) == ("missing_heartbeat", [7001], 1, 1)


@pytest.mark.asyncio
async def test_watchdog_cancels_and_recovers_a_tracked_run_with_no_progress(tmp_path: Path) -> None:
    project = make_project(tmp_path)
    task = make_task(project.id, "API", "api/**")
    repository = FakeRepository(project, [task], [provider()])
    executor = BlockingExecutor()
    current_time = [NOW]
    orchestrator = Orchestrator(
        repository=repository,
        planner=SchedulingPlanner(ProviderRouter()),
        workspace_manager=FakeWorkspaceManager(),
        executor=executor,
        prompt_builder=PromptBuilder(),
        watchdog=Watchdog(heartbeat_timeout_seconds=30, progress_timeout_seconds=90),
        repository_resolver=lambda item: Path(item.repository_url),
        global_max_parallelism=8,
        clock=lambda: current_time[0],
    )

    initial = await orchestrator.tick()
    await asyncio.wait_for(executor.started.wait(), timeout=1)
    executor.alive[9001] = True
    current_time[0] = NOW + timedelta(seconds=100)
    repository.runs[initial.launched[0]] = repository.runs[initial.launched[0]].model_copy(
        update={"heartbeat_at": current_time[0]}
    )

    recovered = await orchestrator.tick()
    old_run = repository.runs[initial.launched[0]]
    await orchestrator.shutdown()

    assert (
        recovered.recovered[0].failure_class,
        executor.cleaned_up.is_set(),
        old_run.status,
        repository.tasks[task.id].retry_count,
    ) == (FailureClass.NO_PROGRESS, True, RunStatus.LOST, 1)


@pytest.mark.asyncio
async def test_timeout_at_retry_limit_blocks_without_an_agent_loop(tmp_path: Path) -> None:
    project = make_project(tmp_path)
    task = make_task(project.id, "API", "api/**", retry_limit=0)
    repository = FakeRepository(project, [task], [provider()])
    executor = TimedOutExecutor()
    orchestrator = make_orchestrator(repository, executor)

    await orchestrator.tick()
    await orchestrator.drain()
    second = await orchestrator.tick()

    assert (
        repository.tasks[task.id].status,
        repository.recoveries[0][2].action,
        len(executor.requests),
        len(second.launched),
    ) == (TaskStatus.BLOCKED, RecoveryAction.REPLAN_OR_BLOCK, 1, 0)


@pytest.mark.asyncio
async def test_deadlocked_project_is_marked_blocked_after_recovery_paths_are_exhausted(tmp_path: Path) -> None:
    project = make_project(tmp_path)
    blocked = make_task(project.id, "API", "api/**").model_copy(
        update={"status": TaskStatus.BLOCKED, "blocked_reason": "bounded recovery exhausted"}
    )
    repository = FakeRepository(project, [blocked], [provider()])
    orchestrator = make_orchestrator(repository, SuccessfulExecutor())

    reconciled = await orchestrator.reconcile_deadlocks()

    assert reconciled == (project.id,)
    assert repository.project_status is ProjectStatus.BLOCKED
    assert repository.project_blocked_reason == "no runnable recovery path remains"


@pytest.mark.asyncio
async def test_shutdown_cancels_workers_awaits_cleanup_and_clears_tracking(tmp_path: Path) -> None:
    project = make_project(tmp_path)
    task = make_task(project.id, "API", "api/**")
    repository = FakeRepository(project, [task], [provider()])
    executor = BlockingExecutor()
    orchestrator = make_orchestrator(repository, executor)

    report = await orchestrator.tick()
    await asyncio.wait_for(executor.started.wait(), timeout=1)
    await asyncio.wait_for(orchestrator.shutdown(), timeout=1)

    assert (
        executor.cleaned_up.is_set(),
        orchestrator.active_execution_count,
        repository.runs[report.launched[0]].status,
        repository.tasks[task.id].status,
    ) == (True, 0, RunStatus.CANCELLED, TaskStatus.READY)


@pytest.mark.asyncio
async def test_shutdown_cancellation_does_not_exclude_a_provider_from_later_recovery(tmp_path: Path) -> None:
    project = make_project(tmp_path)
    task = make_task(project.id, "API", "api/**").model_copy(update={"retry_count": 2})
    repository = FakeRepository(project, [task], [provider("codex"), provider("muse")])

    def historical_run(provider_name: str, status: RunStatus, attempt: int) -> AgentRunRecord:
        failed = status is RunStatus.FAILED
        return AgentRunRecord(
            id=uuid4(),
            project_id=project.id,
            task_id=task.id,
            parent_run_id=None,
            provider=provider_name,
            model=None,
            role=task.task_type.value,
            status=status,
            attempt=attempt,
            pid=None,
            session_id=None,
            started_at=NOW + timedelta(seconds=attempt),
            heartbeat_at=NOW + timedelta(seconds=attempt),
            progress_at=NOW + timedelta(seconds=attempt),
            finished_at=NOW + timedelta(seconds=attempt),
            failure_class="process_crash" if failed else None,
            failure_message="provider crashed" if failed else "scheduler shutdown",
            result=None,
        )

    cancelled = historical_run("codex", RunStatus.CANCELLED, 0)
    first_failure = historical_run("muse", RunStatus.FAILED, 0)
    second_failure = historical_run("muse", RunStatus.FAILED, 1)
    repository.runs = {item.id: item for item in (cancelled, first_failure, second_failure)}
    executor = SuccessfulExecutor()
    orchestrator = make_orchestrator(repository, executor)

    report = await orchestrator.tick()
    await orchestrator.drain()

    assert len(report.launched) == 1
    assert executor.requests[0].provider == "codex"
    assert executor.requests[0].providers_tried == ("muse", "muse")


@pytest.mark.asyncio
async def test_resource_guard_sheds_one_owned_worker_without_consuming_a_retry(tmp_path: Path) -> None:
    project = make_project(tmp_path)
    task = make_task(project.id, "API", "api/**")
    repository = FakeRepository(project, [task], [provider()])
    executor = BlockingExecutor()
    orchestrator = make_orchestrator(repository, executor)

    report = await orchestrator.tick()
    await asyncio.wait_for(executor.started.wait(), timeout=1)
    shed = await orchestrator.shed_one_worker(reason="available memory is 5.0%")

    run = repository.runs[report.launched[0]]
    restored_task = repository.tasks[task.id]
    assert (
        shed,
        executor.cleaned_up.is_set(),
        orchestrator.active_execution_count,
        run.status,
        run.failure_message,
        restored_task.status,
        restored_task.retry_count,
        repository.events[-1][0],
    ) == (
        run.id,
        True,
        0,
        RunStatus.CANCELLED,
        "available memory is 5.0%",
        TaskStatus.READY,
        0,
        "resource.workload_shed",
    )


@pytest.mark.asyncio
async def test_worker_events_and_heartbeats_are_durable_and_prompt_is_compact(tmp_path: Path) -> None:
    project = make_project(tmp_path)
    task = make_task(project.id, "API", "api/**")
    repository = FakeRepository(project, [task], [provider()])
    executor = SuccessfulExecutor()
    orchestrator = make_orchestrator(repository, executor)

    await orchestrator.tick()
    await orchestrator.drain()

    event_types = [event[0] for event in repository.events]
    prompt = executor.requests[0].prompt
    assert (
        event_types,
        [progress for _, _, progress in repository.heartbeats],
        "only the scheduler may launch them" in prompt,
        str(task.id) in prompt,
    ) == (
        ["run.process_started", "run.heartbeat", "agent.message"],
        [True, False, True],
        True,
        True,
    )


@pytest.mark.asyncio
async def test_atomic_completion_rejection_uses_bounded_recovery(tmp_path: Path) -> None:
    project = make_project(tmp_path)
    task = make_task(project.id, "API", "api/**")
    repository = FakeRepository(project, [task], [provider()])
    repository.completion_error = ValueError("invalid follow-up task graph")
    orchestrator = make_orchestrator(repository, SuccessfulExecutor())

    await orchestrator.tick()
    await orchestrator.drain()

    assert repository.recoveries[0][1] == "logical"


@pytest.mark.asyncio
async def test_orchestrator_runs_against_the_durable_repository_contract(tmp_path: Path) -> None:
    database = Database(f"sqlite+aiosqlite:///{tmp_path / 'orchestrator.db'}")
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    project = make_project(tmp_path)
    task = make_task(project.id, "API", "api/**")
    await repository.create_project(project)
    await repository.create_tasks([task])
    await repository.upsert_provider(provider(), adapter="codex", default_model="worker-model")
    orchestrator = Orchestrator(
        repository=repository,
        planner=SchedulingPlanner(ProviderRouter()),
        workspace_manager=FakeWorkspaceManager(),
        executor=SuccessfulExecutor(),
        prompt_builder=PromptBuilder(),
        watchdog=Watchdog(heartbeat_timeout_seconds=30, progress_timeout_seconds=90),
        repository_resolver=lambda item: Path(item.repository_url),
        global_max_parallelism=8,
        clock=lambda: NOW,
    )

    report = await orchestrator.tick()
    await orchestrator.drain()
    snapshot = await repository.get_project_snapshot(project.id)
    await database.dispose()

    assert (len(report.launched), snapshot.tasks[0].status, snapshot.status, snapshot.runs[0].model) == (
        1,
        TaskStatus.AWAITING_REVIEW,
        ProjectStatus.RUNNING,
        "worker-model",
    )


@pytest.mark.asyncio
async def test_repeated_worker_failure_escalates_to_a_durable_lead_task(tmp_path: Path) -> None:
    database = Database(f"sqlite+aiosqlite:///{tmp_path / 'escalation.db'}")
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    project = make_project(tmp_path)
    task = make_task(project.id, "API", "api/**", retry_limit=3)
    await repository.create_project(project)
    await repository.create_tasks([task])
    await repository.upsert_provider(provider("codex"), adapter="codex", default_model=None)
    await repository.upsert_provider(provider("grok"), adapter="grok", default_model=None)
    orchestrator = Orchestrator(
        repository=repository,
        planner=SchedulingPlanner(ProviderRouter()),
        workspace_manager=FakeWorkspaceManager(),
        executor=ReportedScopeViolationExecutor(),
        prompt_builder=PromptBuilder(),
        watchdog=Watchdog(heartbeat_timeout_seconds=30, progress_timeout_seconds=90),
        repository_resolver=lambda item: Path(item.repository_url),
        global_max_parallelism=8,
        clock=lambda: NOW,
    )

    for _ in range(3):
        await orchestrator.tick()
        await orchestrator.drain()
    snapshot = await repository.get_project_snapshot(project.id)
    await database.dispose()

    lead = next(item for item in snapshot.tasks if item.task_type == TaskType.WORKSTREAM_LEAD)
    original = next(item for item in snapshot.tasks if item.id == task.id)
    assert (original.status, lead.status, lead.parent_task_id) == (
        TaskStatus.CANCELLED,
        TaskStatus.PENDING,
        task.id,
    )


@pytest.mark.asyncio
async def test_project_cancellation_terminates_only_project_owned_active_workers(tmp_path: Path) -> None:
    project = make_project(tmp_path)
    task = make_task(project.id, "API", "api/**")
    repository = FakeRepository(project, [task], [provider()])
    run = await repository.claim_task(task.id, provider="codex", model=None)
    await repository.mark_run_started(run.id, pid=7001)
    executor = SuccessfulExecutor()
    executor.alive[7001] = True
    executor.alive[8001] = True
    orchestrator = make_orchestrator(repository, executor)

    cancelled = await orchestrator.cancel_project_workers(project.id)

    assert (cancelled, executor.terminated, executor.alive[8001]) == ((run.id,), [7001], True)
