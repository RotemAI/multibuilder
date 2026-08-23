from __future__ import annotations

import asyncio
import fnmatch
from collections.abc import Awaitable, Callable, Mapping, Sequence
from dataclasses import dataclass
from datetime import UTC, datetime
from pathlib import Path
from typing import Protocol
from uuid import UUID

from .domain import (
    AgentRunRecord,
    CompletedTaskResult,
    MergeStatus,
    ProjectSnapshot,
    ProjectSpec,
    ProjectStatus,
    RunStatus,
    TaskRecord,
    TaskStatus,
    TaskType,
)
from .process_runner import RunOutcome
from .recovery import (
    FailureClass,
    RecoveryAction,
    RetryDecision,
    RetryPolicy,
    RunHealth,
    Watchdog,
    WatchdogAction,
)
from .routing import ProviderProfile
from .scheduler import Assignment, DeferredTask, SchedulingPlanner
from .schemas import strict_completed_task_result_schema
from .sources import project_base_ref
from .worker_runtime import NormalizedEvent, PromptBuilder, extract_completed_result
from .workspaces import FinalizedCommit, Workspace

Clock = Callable[[], datetime]
RepositoryResolver = Callable[[ProjectSpec], Path]
EventHandler = Callable[[NormalizedEvent], Awaitable[None]]


@dataclass(frozen=True, slots=True)
class ExecutionRequest:
    project: ProjectSpec
    task: TaskRecord
    run: AgentRunRecord
    workspace: Workspace
    provider: str
    model: str | None
    prompt: str
    result_schema: dict
    timeout_seconds: int
    providers_tried: tuple[str, ...]


@dataclass(frozen=True, slots=True)
class DeferredLaunch:
    project_id: UUID
    task_id: UUID
    reason: str


@dataclass(frozen=True, slots=True)
class RecoveryRecord:
    project_id: UUID
    task_id: UUID
    run_id: UUID
    failure_class: FailureClass
    action: RecoveryAction


@dataclass(frozen=True, slots=True)
class TickReport:
    launched: tuple[UUID, ...]
    deferred: tuple[DeferredLaunch, ...]
    recovered: tuple[RecoveryRecord, ...]


class OrchestratorRepository(Protocol):
    async def list_schedulable_projects(self) -> Sequence[ProjectSpec]: ...

    async def get_project_snapshot(self, project_id: UUID) -> ProjectSnapshot: ...

    async def list_runnable_tasks(self, project_id: UUID) -> Sequence[TaskRecord]: ...

    async def list_provider_profiles(self) -> Sequence[ProviderProfile]: ...

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
    ) -> object: ...

    async def claim_task(
        self,
        task_id: UUID,
        *,
        provider: str,
        model: str | None,
        parent_run_id: UUID | None = None,
    ) -> AgentRunRecord: ...

    async def mark_run_started(self, run_id: UUID, *, pid: int, session_id: str | None = None) -> None: ...

    async def heartbeat_run(self, run_id: UUID, *, at: datetime | None = None, progress: bool = False) -> None: ...

    async def complete_run(self, run_id: UUID, result: CompletedTaskResult) -> None: ...

    async def fail_run_and_recover(
        self,
        run_id: UUID,
        *,
        status: RunStatus,
        failure_class: str,
        failure_message: str,
        retry_decision: RetryDecision,
        at: datetime,
    ) -> None: ...

    async def cancel_run_and_requeue(
        self,
        run_id: UUID,
        *,
        reason: str,
        at: datetime,
    ) -> None: ...

    async def transition_task(
        self,
        task_id: UUID,
        status: TaskStatus,
        *,
        result: CompletedTaskResult | None = None,
        blocked_reason: str | None = None,
    ) -> None: ...

    async def transition_project(
        self,
        project_id: UUID,
        status: ProjectStatus,
        *,
        blocked_reason: str | None = None,
    ) -> None: ...

    async def append_event(
        self,
        project_id: UUID,
        event_type: str,
        payload: dict,
        *,
        task_id: UUID | None = None,
        run_id: UUID | None = None,
        level: str = "info",
    ) -> object: ...


class WorkspaceAllocator(Protocol):
    def allocate(
        self,
        *,
        project_id: UUID,
        task_id: UUID,
        repository_path: Path,
        base_ref: str,
        write_scope: list[str],
    ) -> Workspace: ...

    def scope_violations(self, workspace: Workspace) -> list[str]: ...

    def changed_paths(self, workspace: Workspace) -> tuple[str, ...]: ...

    def commit_changes(self, workspace: Workspace, *, message: str) -> FinalizedCommit: ...


class ProviderExecutor(Protocol):
    async def execute(self, request: ExecutionRequest, *, on_event: EventHandler) -> RunOutcome: ...

    async def is_process_alive(self, pid: int) -> bool: ...

    async def terminate_process(self, pid: int) -> None: ...


class RecoveryEngine:
    def __init__(self, policy: RetryPolicy | None = None) -> None:
        self.policy = policy or RetryPolicy()

    def decide(
        self,
        *,
        task: TaskRecord,
        run: AgentRunRecord,
        failure_class: FailureClass,
        providers_tried: Sequence[str],
    ) -> RetryDecision:
        history = list(dict.fromkeys([*providers_tried, run.provider]))
        return self.policy.decide(
            attempt=run.attempt,
            retry_limit=task.retry_limit,
            failure_class=failure_class,
            provider=run.provider,
            providers_tried=history,
        )


class Orchestrator:
    _ACTIVE_RUN_STATUSES = frozenset({RunStatus.STARTING, RunStatus.RUNNING})
    _NON_PROGRESS_EVENTS = frozenset({"run.heartbeat", "provider.stderr"})
    _EVENT_FAILURE_CLASSES = {
        "rate_limit.observed": FailureClass.RATE_LIMIT,
        "resource.exhaustion": FailureClass.RESOURCE_EXHAUSTION,
    }
    _ISSUE_REPORTING_TASK_TYPES = frozenset(
        {TaskType.DIRECTOR, TaskType.WORKSTREAM_LEAD, TaskType.REVIEW}
    )

    def __init__(
        self,
        *,
        repository: OrchestratorRepository,
        planner: SchedulingPlanner,
        workspace_manager: WorkspaceAllocator,
        executor: ProviderExecutor,
        prompt_builder: PromptBuilder,
        watchdog: Watchdog,
        repository_resolver: RepositoryResolver,
        global_max_parallelism: int,
        clock: Clock | None = None,
        recovery_engine: RecoveryEngine | None = None,
    ) -> None:
        if global_max_parallelism < 1:
            raise ValueError("global_max_parallelism must be positive")
        self.repository = repository
        self.planner = planner
        self.workspace_manager = workspace_manager
        self.executor = executor
        self.prompt_builder = prompt_builder
        self.watchdog = watchdog
        self.repository_resolver = repository_resolver
        self.global_max_parallelism = global_max_parallelism
        self.clock = clock or (lambda: datetime.now(UTC))
        self.recovery_engine = recovery_engine or RecoveryEngine()
        self._execution_tasks: dict[UUID, asyncio.Task[None]] = {}
        self._execution_projects: dict[UUID, UUID] = {}
        self._project_cancellations: set[UUID] = set()
        self._requeue_cancellations: dict[UUID, str] = {}
        self._watchdog_cancellations: set[UUID] = set()
        self._shutting_down = False

    @property
    def active_execution_count(self) -> int:
        return len(self._execution_tasks)

    async def tick(self) -> TickReport:
        if self._shutting_down:
            return TickReport((), (), ())
        await self._collect_finished()
        projects = sorted(await self.repository.list_schedulable_projects(), key=lambda item: str(item.id))
        snapshots = [await self.repository.get_project_snapshot(project.id) for project in projects]
        recovered: list[RecoveryRecord] = []
        for snapshot in snapshots:
            recovered.extend(await self._reconcile_snapshot(snapshot))
        if recovered:
            snapshots = [await self.repository.get_project_snapshot(project.id) for project in projects]

        providers = list(await self.repository.list_provider_profiles())
        total_active = sum(self._active_run_count(snapshot) for snapshot in snapshots)
        launched: list[UUID] = []
        deferred: list[DeferredLaunch] = []

        for project, snapshot in zip(projects, snapshots, strict=True):
            project_capacity = max(project.max_parallelism - self._active_run_count(snapshot), 0)
            global_capacity = max(self.global_max_parallelism - total_active - len(launched), 0)
            available_slots = min(project_capacity, global_capacity)
            runnable = list(await self.repository.list_runnable_tasks(project.id))
            task_runs = self._runs_by_task(snapshot)
            plan = self.planner.plan(
                runnable,
                providers,
                active_scopes=self._active_scopes(snapshot),
                available_slots=available_slots,
                provider_exclusions=self._provider_exclusions(snapshot.tasks, task_runs, providers),
            )
            deferred.extend(self._deferred_records(project.id, plan.deferred))
            for assignment in plan.assignments:
                run_id = await self._prepare_assignment(project, snapshot, assignment, task_runs)
                if run_id is not None:
                    launched.append(run_id)
            providers = self._reserve_provider_capacity(providers, plan.assignments)

        return TickReport(tuple(launched), tuple(deferred), tuple(recovered))

    async def drain(self) -> None:
        if not self._execution_tasks:
            return
        current = list(self._execution_tasks.items())
        results = await asyncio.gather(*(task for _, task in current), return_exceptions=True)
        for run_id, _ in current:
            self._execution_tasks.pop(run_id, None)
            self._execution_projects.pop(run_id, None)
        errors = [result for result in results if isinstance(result, BaseException)]
        if errors:
            raise RuntimeError(f"{len(errors)} orchestrator execution task failed") from errors[0]

    async def reconcile_deadlocks(self) -> tuple[UUID, ...]:
        await self._collect_finished()
        blocked_projects: list[UUID] = []
        projects = sorted(await self.repository.list_schedulable_projects(), key=lambda item: str(item.id))
        active_merge_statuses = {
            MergeStatus.QUEUED,
            MergeStatus.VALIDATING,
            MergeStatus.READY,
            MergeStatus.MERGING,
        }
        for project in projects:
            snapshot = await self.repository.get_project_snapshot(project.id)
            blocking_tasks = [
                task for task in snapshot.tasks if task.status in {TaskStatus.BLOCKED, TaskStatus.FAILED}
            ]
            if not blocking_tasks or self._active_run_count(snapshot):
                continue
            if await self.repository.list_runnable_tasks(project.id):
                continue
            if any(item.status in active_merge_statuses for item in snapshot.merge_queue):
                continue
            reason = "no runnable recovery path remains"
            await self.repository.transition_project(project.id, ProjectStatus.BLOCKED, blocked_reason=reason)
            await self.repository.append_event(
                project.id,
                "scheduler.deadlock_blocked",
                {
                    "reason": reason,
                    "blocking_task_ids": [str(task.id) for task in blocking_tasks],
                },
                level="error",
            )
            blocked_projects.append(project.id)
        return tuple(blocked_projects)

    async def shutdown(self) -> None:
        self._shutting_down = True
        current = list(self._execution_tasks.items())
        for _, task in current:
            task.cancel()
        results = await asyncio.gather(*(task for _, task in current), return_exceptions=True)
        for run_id, _ in current:
            self._execution_tasks.pop(run_id, None)
            self._execution_projects.pop(run_id, None)
        errors = [
            result
            for result in results
            if isinstance(result, BaseException) and not isinstance(result, asyncio.CancelledError)
        ]
        if errors:
            raise RuntimeError(f"{len(errors)} orchestrator shutdown task failed") from errors[0]

    async def cancel_project_workers(self, project_id: UUID) -> tuple[UUID, ...]:
        snapshot = await self.repository.get_project_snapshot(project_id)
        active_runs = {
            run.id: run
            for run in snapshot.runs
            if run.project_id == project_id and run.status in self._ACTIVE_RUN_STATUSES
        }
        tracked = [
            (run_id, task)
            for run_id, task in self._execution_tasks.items()
            if self._execution_projects.get(run_id) == project_id
        ]
        tracked_ids = {run_id for run_id, _ in tracked}
        self._project_cancellations.update(tracked_ids)
        for _, task in tracked:
            task.cancel()
        results = await asyncio.gather(*(task for _, task in tracked), return_exceptions=True)
        for run_id, _ in tracked:
            self._execution_tasks.pop(run_id, None)
            self._execution_projects.pop(run_id, None)
            self._project_cancellations.discard(run_id)
        errors = [
            result
            for result in results
            if isinstance(result, BaseException) and not isinstance(result, asyncio.CancelledError)
        ]
        if errors:
            raise RuntimeError(f"{len(errors)} project worker cancellation task failed") from errors[0]

        for run_id in sorted(active_runs, key=str):
            if run_id in tracked_ids:
                continue
            run = active_runs[run_id]
            if run.pid is not None and run.pid > 1 and await self.executor.is_process_alive(run.pid):
                await self.executor.terminate_process(run.pid)
        return tuple(sorted(active_runs, key=str))

    async def shed_one_worker(self, *, reason: str) -> UUID | None:
        await self._collect_finished()
        projects = sorted(await self.repository.list_schedulable_projects(), key=lambda item: str(item.id))
        snapshots = [await self.repository.get_project_snapshot(project.id) for project in projects]
        active_runs = sorted(
            (
                run
                for snapshot in snapshots
                for run in snapshot.runs
                if run.status in self._ACTIVE_RUN_STATUSES
            ),
            key=lambda run: (run.started_at, str(run.id)),
            reverse=True,
        )
        if not active_runs:
            return None

        tracked_ids = {run_id for run_id, task in self._execution_tasks.items() if not task.done()}
        run = next((item for item in active_runs if item.id in tracked_ids), active_runs[0])
        execution_task = self._execution_tasks.get(run.id)
        if execution_task is not None and not execution_task.done():
            self._requeue_cancellations[run.id] = reason
            execution_task.cancel()
            result = await asyncio.gather(execution_task, return_exceptions=True)
            self._execution_tasks.pop(run.id, None)
            self._execution_projects.pop(run.id, None)
            errors = [
                item
                for item in result
                if isinstance(item, BaseException) and not isinstance(item, asyncio.CancelledError)
            ]
            if errors:
                raise RuntimeError("resource workload cancellation failed") from errors[0]
        else:
            if run.pid is not None and run.pid > 1 and await self.executor.is_process_alive(run.pid):
                await self.executor.terminate_process(run.pid)
            await self.repository.cancel_run_and_requeue(run.id, reason=reason, at=self.clock())

        await self.repository.append_event(
            run.project_id,
            "resource.workload_shed",
            {"reason": reason},
            task_id=run.task_id,
            run_id=run.id,
            level="warning",
        )
        return run.id

    async def run_cycles(
        self,
        max_cycles: int,
        *,
        interval_seconds: float = 0,
        sleeper: Callable[[float], Awaitable[None]] = asyncio.sleep,
    ) -> tuple[TickReport, ...]:
        if max_cycles < 1:
            raise ValueError("max_cycles must be positive")
        reports: list[TickReport] = []
        for cycle in range(max_cycles):
            reports.append(await self.tick())
            if cycle + 1 < max_cycles and interval_seconds > 0:
                await sleeper(interval_seconds)
        return tuple(reports)

    async def _prepare_assignment(
        self,
        project: ProjectSpec,
        snapshot: ProjectSnapshot,
        assignment: Assignment,
        task_runs: Mapping[UUID, Sequence[AgentRunRecord]],
    ) -> UUID | None:
        task = assignment.task
        try:
            workspace = self.workspace_manager.allocate(
                project_id=project.id,
                task_id=task.id,
                repository_path=self.repository_resolver(project),
                base_ref=self._workspace_base_ref(project, snapshot, task),
                write_scope=task.write_scope,
            )
            await self.repository.record_workspace(
                task_id=task.id,
                repository_path=str(workspace.repository_path),
                worktree_path=str(workspace.path),
                branch=workspace.branch,
                base_commit=workspace.base_commit,
                write_scope=list(workspace.write_scope),
            )
        except Exception as exc:
            reason = f"workspace allocation failed: {exc}"
            await self.repository.transition_task(task.id, TaskStatus.BLOCKED, blocked_reason=reason)
            await self.repository.transition_project(
                project.id,
                ProjectStatus.BLOCKED,
                blocked_reason=reason,
            )
            await self.repository.append_event(
                project.id,
                "scheduler.workspace_failed",
                {"reason": reason},
                task_id=task.id,
                level="error",
            )
            return None

        try:
            parent_history = task_runs.get(task.parent_task_id, ()) if task.parent_task_id else ()
            parent_run_id = parent_history[-1].id if parent_history else None
            run = await self.repository.claim_task(
                task.id,
                provider=assignment.route.provider,
                model=None,
                parent_run_id=parent_run_id,
            )
        except Exception as exc:
            await self.repository.append_event(
                project.id,
                "scheduler.claim_deferred",
                {"provider": assignment.route.provider, "reason": str(exc)},
                task_id=task.id,
                level="warning",
            )
            return None

        history = tuple(previous.provider for previous in self._failed_provider_runs(task_runs.get(task.id, ())))
        prompt = self.prompt_builder.build(
            task,
            project_goal=project.goal,
            failure_context=task.blocked_reason if task.retry_count else None,
        )
        request = ExecutionRequest(
            project=project,
            task=task,
            run=run,
            workspace=workspace,
            provider=assignment.route.provider,
            model=run.model,
            prompt=prompt,
            result_schema=strict_completed_task_result_schema(),
            timeout_seconds=task.timeout_seconds,
            providers_tried=history,
        )
        self._execution_tasks[run.id] = asyncio.create_task(self._execute(request))
        self._execution_projects[run.id] = project.id
        return run.id

    @staticmethod
    def _workspace_base_ref(
        project: ProjectSpec,
        snapshot: ProjectSnapshot,
        task: TaskRecord,
    ) -> str:
        tasks = {item.id: item for item in snapshot.tasks}
        frontier = list(dict.fromkeys([*task.dependencies, *([task.parent_task_id] if task.parent_task_id else [])]))
        visited: set[UUID] = set()
        while frontier:
            commits: set[str] = set()
            next_frontier: list[UUID] = []
            for task_id in frontier:
                if task_id in visited:
                    continue
                visited.add(task_id)
                dependency = tasks.get(task_id)
                if dependency is None:
                    continue
                if dependency.result is not None and dependency.result.commit:
                    commits.add(dependency.result.commit)
                    continue
                next_frontier.extend(dependency.dependencies)
                if dependency.parent_task_id is not None:
                    next_frontier.append(dependency.parent_task_id)
            if len(commits) == 1:
                return commits.pop()
            if len(commits) > 1:
                merged = {
                    item.commit
                    for item in snapshot.merge_queue
                    if item.status is MergeStatus.MERGED
                }
                if commits.issubset(merged):
                    return f"integration/{project.id.hex[:12]}"
                raise ValueError("task has multiple dependency commits that have not been integrated")
            frontier = list(dict.fromkeys(next_frontier))
        if any(item.status is MergeStatus.MERGED for item in snapshot.merge_queue):
            return f"integration/{project.id.hex[:12]}"
        return project_base_ref(project.repository_url, project.base_branch)

    async def _execute(self, request: ExecutionRequest) -> None:
        process_started = False
        observed_failure: FailureClass | None = None

        async def on_event(event: NormalizedEvent) -> None:
            nonlocal observed_failure, process_started
            if event.event_type == "run.process_started" and isinstance(event.payload.get("pid"), int):
                session_id = event.payload.get("session_id")
                await self.repository.mark_run_started(
                    request.run.id,
                    pid=event.payload["pid"],
                    session_id=str(session_id) if session_id is not None else None,
                )
                process_started = True
            if event.event_type in self._EVENT_FAILURE_CLASSES:
                observed_failure = self._EVENT_FAILURE_CLASSES[event.event_type]
            await self.repository.heartbeat_run(
                request.run.id,
                at=self.clock(),
                progress=event.event_type not in self._NON_PROGRESS_EVENTS,
            )
            await self.repository.append_event(
                request.project.id,
                event.event_type,
                event.payload,
                task_id=request.task.id,
                run_id=request.run.id,
                level=event.level,
            )

        try:
            outcome = await self.executor.execute(request, on_event=on_event)
        except asyncio.CancelledError:
            requeue_reason = self._requeue_cancellations.pop(request.run.id, None)
            if requeue_reason is not None:
                await self.repository.cancel_run_and_requeue(
                    request.run.id,
                    reason=requeue_reason,
                    at=self.clock(),
                )
            elif request.run.id in self._watchdog_cancellations:
                pass
            elif request.run.id not in self._project_cancellations:
                await self.repository.cancel_run_and_requeue(
                    request.run.id,
                    reason="scheduler shutdown cancelled the provider execution",
                    at=self.clock(),
                )
            raise
        except Exception as exc:
            await self._recover_execution(
                request,
                FailureClass.TRANSPORT,
                f"provider execution failed: {exc}",
                RunStatus.FAILED,
            )
            return

        if not process_started:
            await self.repository.mark_run_started(request.run.id, pid=outcome.pid)
        if outcome.timed_out:
            await self._recover_execution(
                request,
                FailureClass.TIMEOUT,
                "provider execution exceeded the task timeout",
                RunStatus.TIMED_OUT,
            )
            return
        if outcome.returncode != 0:
            evidence = self._bounded_failure_evidence(outcome)
            await self._recover_execution(
                request,
                observed_failure or FailureClass.PROCESS_CRASH,
                f"provider process exited with code {outcome.returncode}{evidence}",
                RunStatus.FAILED,
            )
            return

        try:
            result = extract_completed_result(request.provider, list(outcome.stdout_lines))
            violations = self.workspace_manager.scope_violations(request.workspace)
            if violations:
                joined = ", ".join(violations[:20])
                raise ValueError(f"worker changed files outside its write scope: {joined}")
            reported_violations = [
                path
                for path in result.files_changed
                if not self._path_within_write_scope(path, request.task.write_scope)
            ]
            if reported_violations:
                joined = ", ".join(reported_violations[:20])
                raise ValueError(f"worker reported files outside its write scope: {joined}")
            actual_files = self.workspace_manager.changed_paths(request.workspace)
            if set(result.files_changed) != set(actual_files):
                raise ValueError(
                    "reported files do not match the workspace: "
                    f"reported={sorted(result.files_changed)}, actual={sorted(actual_files)}"
                )
            if result.remaining_issues and request.task.task_type not in self._ISSUE_REPORTING_TASK_TYPES:
                raise ValueError("worker returned unresolved issues: " + result.remaining_issues[0][:2_000])
            failed_tests = [test for test in result.test_results if not test.passed]
            if failed_tests and request.task.task_type is not TaskType.REVIEW:
                raise ValueError("worker returned a failed test: " + failed_tests[0].summary[:2_000])
            if result.files_changed and not result.commit:
                finalized = self.workspace_manager.commit_changes(
                    request.workspace,
                    message=f"[task] Finalize {request.task.id}",
                )
                result = result.model_copy(
                    update={
                        "commit": finalized.commit,
                        "files_changed": list(finalized.files_changed),
                    }
                )
        except Exception as exc:
            await self._recover_execution(
                request,
                FailureClass.LOGICAL,
                f"completion validation failed: {exc}",
                RunStatus.FAILED,
            )
            return

        try:
            await self.repository.complete_run(request.run.id, result)
        except ValueError as exc:
            await self._recover_execution(
                request,
                FailureClass.LOGICAL,
                f"completion transaction rejected the result: {exc}",
                RunStatus.FAILED,
            )
        except Exception as exc:
            await self._recover_execution(
                request,
                FailureClass.TRANSPORT,
                f"completion transaction failed: {exc}",
                RunStatus.FAILED,
            )

    async def _recover_execution(
        self,
        request: ExecutionRequest,
        failure_class: FailureClass,
        message: str,
        status: RunStatus,
    ) -> RetryDecision:
        decision = self.recovery_engine.decide(
            task=request.task,
            run=request.run,
            failure_class=failure_class,
            providers_tried=request.providers_tried,
        )
        await self.repository.fail_run_and_recover(
            request.run.id,
            status=status,
            failure_class=failure_class.value,
            failure_message=message,
            retry_decision=decision,
            at=self.clock(),
        )
        await self.repository.append_event(
            request.project.id,
            "recovery.decided",
            {
                "failure_class": failure_class.value,
                "action": decision.action.value,
                "reason": decision.reason,
                "target_provider": decision.target_provider,
                "excluded_providers": sorted(decision.excluded_providers),
            },
            task_id=request.task.id,
            run_id=request.run.id,
            level="error",
        )
        return decision

    async def _reconcile_snapshot(self, snapshot: ProjectSnapshot) -> list[RecoveryRecord]:
        tasks = {task.id: task for task in snapshot.tasks}
        task_runs = self._runs_by_task(snapshot)
        recovered: list[RecoveryRecord] = []
        for run in sorted(snapshot.runs, key=lambda item: str(item.id)):
            if run.status not in self._ACTIVE_RUN_STATUSES:
                continue
            task = tasks.get(run.task_id)
            if task is None:
                continue
            process_alive = run.pid is not None and await self.executor.is_process_alive(run.pid)
            decision = self.watchdog.inspect(
                RunHealth(
                    run_id=run.id,
                    task_id=run.task_id,
                    started_at=run.started_at,
                    heartbeat_at=run.heartbeat_at,
                    progress_at=run.progress_at,
                    timeout_seconds=task.timeout_seconds,
                    process_alive=process_alive,
                ),
                now=self.clock(),
            )
            if decision.action != WatchdogAction.CANCEL_AND_REQUEUE or decision.failure_class is None:
                continue
            tracked = self._execution_tasks.get(run.id)
            if tracked is not None:
                self._watchdog_cancellations.add(run.id)
                tracked.cancel()
                await asyncio.gather(tracked, return_exceptions=True)
                self._execution_tasks.pop(run.id, None)
                self._execution_projects.pop(run.id, None)
                self._watchdog_cancellations.discard(run.id)
            elif process_alive and run.pid is not None:
                await self.executor.terminate_process(run.pid)
            retry = self.recovery_engine.decide(
                task=task,
                run=run,
                failure_class=decision.failure_class,
                providers_tried=[
                    item.provider for item in self._failed_provider_runs(task_runs.get(task.id, ()))
                ],
            )
            status = RunStatus.TIMED_OUT if decision.failure_class == FailureClass.TIMEOUT else RunStatus.LOST
            await self.repository.fail_run_and_recover(
                run.id,
                status=status,
                failure_class=decision.failure_class.value,
                failure_message=decision.reason,
                retry_decision=retry,
                at=self.clock(),
            )
            await self.repository.append_event(
                snapshot.project.id,
                "watchdog.recovered",
                {
                    "failure_class": decision.failure_class.value,
                    "reason": decision.reason,
                    "action": retry.action.value,
                },
                task_id=task.id,
                run_id=run.id,
                level="error",
            )
            recovered.append(
                RecoveryRecord(
                    project_id=snapshot.project.id,
                    task_id=task.id,
                    run_id=run.id,
                    failure_class=decision.failure_class,
                    action=retry.action,
                )
            )
        return recovered

    async def _collect_finished(self) -> None:
        finished = [(run_id, task) for run_id, task in self._execution_tasks.items() if task.done()]
        if not finished:
            return
        results = await asyncio.gather(*(task for _, task in finished), return_exceptions=True)
        for run_id, _ in finished:
            self._execution_tasks.pop(run_id, None)
            self._execution_projects.pop(run_id, None)
        errors = [result for result in results if isinstance(result, BaseException)]
        if errors:
            raise RuntimeError(f"{len(errors)} orchestrator execution task failed") from errors[0]

    def _provider_exclusions(
        self,
        tasks: Sequence[TaskRecord],
        task_runs: Mapping[UUID, Sequence[AgentRunRecord]],
        providers: Sequence[ProviderProfile],
    ) -> dict[str, set[str]]:
        all_names = {provider.name for provider in providers}
        tasks_by_id = {task.id: task for task in tasks}
        exclusions: dict[str, set[str]] = {}
        for task in tasks:
            history = self._failed_provider_runs(task_runs.get(task.id, ()))
            excluded: set[str] = set()
            if task.task_type == TaskType.REVIEW:
                reviewed_task_ids = self._nearest_upstream_commit_task_ids(task, tasks_by_id)
                if not reviewed_task_ids:
                    direct_ids = {*task.dependencies, *([task.parent_task_id] if task.parent_task_id else [])}
                    reviewed_task_ids = {
                        task_id
                        for task_id in direct_ids
                        if any(run.result is not None and run.result.commit for run in task_runs.get(task_id, ()))
                    }
                reviewed_providers = {
                    runs[-1].provider
                    for task_id in reviewed_task_ids
                    if (runs := list(task_runs.get(task_id, ())))
                }
                if reviewed_providers:
                    has_independent_provider = any(
                        item.name not in reviewed_providers
                        and item.available
                        and item.max_concurrency > item.active_runs
                        for item in providers
                    )
                    if has_independent_provider:
                        excluded.update(reviewed_providers)
            if task.retry_count == 1 and history:
                excluded.update(all_names - {history[-1].provider})
            elif task.retry_count >= 2 and history:
                excluded.update(run.provider for run in history)
            if excluded:
                exclusions[str(task.id)] = excluded
        return exclusions

    @staticmethod
    def _nearest_upstream_commit_task_ids(
        task: TaskRecord,
        tasks: Mapping[UUID, TaskRecord],
    ) -> set[UUID]:
        frontier = list(dict.fromkeys([*task.dependencies, *([task.parent_task_id] if task.parent_task_id else [])]))
        visited: set[UUID] = set()
        while frontier:
            matches: set[UUID] = set()
            next_frontier: list[UUID] = []
            for task_id in frontier:
                if task_id in visited:
                    continue
                visited.add(task_id)
                candidate = tasks.get(task_id)
                if candidate is None:
                    continue
                if candidate.result is not None and candidate.result.commit:
                    matches.add(task_id)
                    continue
                next_frontier.extend(candidate.dependencies)
                if candidate.parent_task_id is not None:
                    next_frontier.append(candidate.parent_task_id)
            if matches:
                return matches
            frontier = list(dict.fromkeys(next_frontier))
        return set()

    @staticmethod
    def _failed_provider_runs(runs: Sequence[AgentRunRecord]) -> list[AgentRunRecord]:
        failed_statuses = {RunStatus.FAILED, RunStatus.TIMED_OUT, RunStatus.LOST}
        return [
            run
            for run in runs
            if run.status in failed_statuses or run.failure_class is not None
        ]

    @classmethod
    def _active_scopes(cls, snapshot: ProjectSnapshot) -> dict[str, Sequence[str]]:
        active_task_ids = {run.task_id for run in snapshot.runs if run.status in cls._ACTIVE_RUN_STATUSES}
        return {
            str(workspace.task_id): workspace.write_scope
            for workspace in snapshot.workspaces
            if workspace.task_id in active_task_ids
        }

    @classmethod
    def _active_run_count(cls, snapshot: ProjectSnapshot) -> int:
        return sum(run.status in cls._ACTIVE_RUN_STATUSES for run in snapshot.runs)

    @staticmethod
    def _runs_by_task(snapshot: ProjectSnapshot) -> dict[UUID, list[AgentRunRecord]]:
        result: dict[UUID, list[AgentRunRecord]] = {}
        for run in sorted(snapshot.runs, key=lambda item: (item.started_at, str(item.id))):
            result.setdefault(run.task_id, []).append(run)
        return result

    @staticmethod
    def _deferred_records(project_id: UUID, deferred: Sequence[DeferredTask]) -> list[DeferredLaunch]:
        return [DeferredLaunch(project_id, item.task.id, item.reason) for item in deferred]

    @staticmethod
    def _reserve_provider_capacity(
        providers: Sequence[ProviderProfile],
        assignments: Sequence[Assignment],
    ) -> list[ProviderProfile]:
        reservations: dict[str, int] = {}
        for assignment in assignments:
            reservations[assignment.route.provider] = reservations.get(assignment.route.provider, 0) + 1
        return [
            ProviderProfile(
                name=provider.name,
                capabilities=provider.capabilities,
                strength=provider.strength,
                relative_cost=provider.relative_cost,
                latency_p95_seconds=provider.latency_p95_seconds,
                recent_success_rate=provider.recent_success_rate,
                active_runs=provider.active_runs + reservations.get(provider.name, 0),
                max_concurrency=provider.max_concurrency,
                available=provider.available,
                rate_limited_until=provider.rate_limited_until,
            )
            for provider in providers
        ]

    @staticmethod
    def _bounded_failure_evidence(outcome: RunOutcome) -> str:
        lines = [*outcome.stderr_lines[-10:], *outcome.stdout_lines[-10:]]
        if not lines:
            return ""
        evidence = "\n".join(lines)[-2_000:]
        return f": {evidence}"

    @staticmethod
    def _path_within_write_scope(path: str, scopes: Sequence[str]) -> bool:
        normalized = path.replace("\\", "/")
        if (
            not normalized
            or normalized.startswith("/")
            or ".." in normalized.split("/")
            or normalized.split("/", 1)[0].endswith(":")
        ):
            return False
        while normalized.startswith("./"):
            normalized = normalized[2:]
        for scope in scopes:
            pattern = scope.strip().replace("\\", "/").lstrip("./")
            if pattern in {"*", "**", "**/*"} or fnmatch.fnmatchcase(normalized, pattern):
                return True
            prefix = pattern.removesuffix("/**").rstrip("/")
            if pattern.endswith("/**") and (normalized == prefix or normalized.startswith(prefix + "/")):
                return True
        return False


__all__ = [
    "DeferredLaunch",
    "ExecutionRequest",
    "Orchestrator",
    "OrchestratorRepository",
    "ProviderExecutor",
    "RecoveryEngine",
    "RecoveryRecord",
    "TickReport",
    "WorkspaceAllocator",
]
