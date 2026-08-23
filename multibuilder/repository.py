from __future__ import annotations

import shlex
from collections.abc import Sequence
from datetime import UTC, datetime, timedelta
from uuid import UUID, uuid4

from sqlalchemy import func, select, text
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker

from .domain import (
    AgentRunRecord,
    CompletedTaskResult,
    EventRecord,
    MergeQueueRecord,
    MergeStatus,
    MilestoneRecord,
    MilestoneStatus,
    ProjectSnapshot,
    ProjectSpec,
    ProjectStatus,
    ProjectSummary,
    ProviderState,
    RunStatus,
    TaskRecord,
    TaskSpec,
    TaskStatus,
    TaskType,
    ValidationRecord,
    ValidationStatus,
    WorkspaceRecord,
    WorkspaceStatus,
)
from .integration import MergeQueueItem, MergeQueueStateMachine, ValidationSuiteResult
from .models import (
    AgentRunRow,
    EventRow,
    MergeQueueRow,
    MilestoneRow,
    ProjectRow,
    ProviderRow,
    TaskRow,
    ValidationRow,
    WorkspaceRow,
)
from .recovery import RecoveryAction, RetryDecision
from .routing import ProviderProfile


class CapacityUnavailable(RuntimeError):
    pass


class InvalidTaskGraph(ValueError):
    pass


class InvalidProjectTransition(ValueError):
    pass


class ControlPlaneRepository:
    _CODE_TASK_TYPES = frozenset({TaskType.IMPLEMENTATION.value, TaskType.REPAIR.value, TaskType.TEST.value})

    def __init__(self, session_factory: async_sessionmaker[AsyncSession]) -> None:
        self._sessions = session_factory

    async def ping(self) -> None:
        async with self._sessions() as session:
            await session.execute(text("SELECT 1"))

    async def create_project(self, project: ProjectSpec) -> None:
        async with self._sessions.begin() as session:
            session.add(
                ProjectRow(
                    id=str(project.id),
                    name=project.name,
                    goal=project.goal,
                    repository_url=project.repository_url,
                    base_branch=project.base_branch,
                    acceptance_criteria=project.acceptance_criteria,
                    max_parallelism=project.max_parallelism,
                    status=ProjectStatus.PLANNING.value,
                )
            )

    async def list_projects(self) -> list[ProjectSummary]:
        async with self._sessions() as session:
            project_rows = list(
                (
                    await session.execute(
                        select(ProjectRow).order_by(ProjectRow.created_at.desc(), ProjectRow.id.desc())
                    )
                ).scalars()
            )
            count_rows = (
                await session.execute(
                    select(TaskRow.project_id, TaskRow.status, func.count(TaskRow.id)).group_by(
                        TaskRow.project_id, TaskRow.status
                    )
                )
            ).all()

        counts: dict[str, dict[str, int]] = {}
        for project_id, task_status, count in count_rows:
            counts.setdefault(project_id, {})[task_status] = int(count)
        return [
            ProjectSummary(
                project=self._project_spec(row),
                status=ProjectStatus(row.status),
                blocked_reason=row.blocked_reason,
                task_counts=counts.get(row.id, {}),
                created_at=self._aware(row.created_at),
                updated_at=self._aware(row.updated_at),
            )
            for row in project_rows
        ]

    async def transition_project(
        self,
        project_id: UUID,
        status: ProjectStatus,
        *,
        blocked_reason: str | None = None,
    ) -> None:
        async with self._sessions.begin() as session:
            row = await session.get(ProjectRow, str(project_id), with_for_update=True)
            if row is None:
                raise KeyError(f"unknown project {project_id}")
            row.status = status.value
            row.blocked_reason = blocked_reason[-10_000:] if blocked_reason else None
            row.updated_at = datetime.now(UTC)
            await self._refresh_milestones(session, row.id, at=row.updated_at)

    async def pause_project(self, project_id: UUID) -> ProjectStatus:
        async with self._sessions.begin() as session:
            row = await session.get(ProjectRow, str(project_id), with_for_update=True)
            if row is None:
                raise KeyError(f"unknown project {project_id}")
            current = ProjectStatus(row.status)
            if current is ProjectStatus.PAUSED:
                return current
            if current not in {ProjectStatus.PLANNING, ProjectStatus.RUNNING, ProjectStatus.BLOCKED}:
                raise InvalidProjectTransition(f"cannot pause a {current.value} project")
            row.status = ProjectStatus.PAUSED.value
            row.updated_at = datetime.now(UTC)
            session.add(
                EventRow(
                    project_id=row.id,
                    event_type="project.paused",
                    payload={"previous_status": current.value},
                )
            )
            return ProjectStatus.PAUSED

    async def resume_project(self, project_id: UUID) -> ProjectStatus:
        async with self._sessions.begin() as session:
            row = await session.get(ProjectRow, str(project_id), with_for_update=True)
            if row is None:
                raise KeyError(f"unknown project {project_id}")
            current = ProjectStatus(row.status)
            if current not in {ProjectStatus.PAUSED, ProjectStatus.BLOCKED}:
                raise InvalidProjectTransition(f"cannot resume a {current.value} project")
            row.status = ProjectStatus.RUNNING.value
            row.blocked_reason = None
            row.updated_at = datetime.now(UTC)
            blocked_tasks = list(
                (
                    await session.execute(
                        select(TaskRow)
                        .where(
                            TaskRow.project_id == row.id,
                            TaskRow.status == TaskStatus.BLOCKED.value,
                        )
                        .with_for_update()
                    )
                ).scalars()
            )
            retry_budgets_reset = sum(task.retry_count > 0 for task in blocked_tasks)
            for task in blocked_tasks:
                task.status = TaskStatus.READY.value
                task.retry_count = 0
                task.blocked_reason = None
                task.assigned_provider = None
                task.assigned_model = None
                task.updated_at = row.updated_at
            await self._refresh_milestones(session, row.id, at=row.updated_at)
            session.add(
                EventRow(
                    project_id=row.id,
                    event_type="project.resumed",
                    payload={
                        "previous_status": current.value,
                        "tasks_requeued": len(blocked_tasks),
                        "retry_budgets_reset": retry_budgets_reset,
                    },
                )
            )
            return ProjectStatus.RUNNING

    async def begin_project_cancellation(self, project_id: UUID, *, at: datetime) -> ProjectStatus:
        async with self._sessions.begin() as session:
            row = await session.get(ProjectRow, str(project_id), with_for_update=True)
            if row is None:
                raise KeyError(f"unknown project {project_id}")
            current = ProjectStatus(row.status)
            if current is ProjectStatus.CANCELLED:
                return current
            if current in {ProjectStatus.COMPLETED, ProjectStatus.FAILED}:
                raise InvalidProjectTransition(f"cannot cancel a {current.value} project")
            row.status = ProjectStatus.CANCELLED.value
            row.blocked_reason = None
            row.updated_at = at
            await self._refresh_milestones(session, row.id, at=at)
            session.add(
                EventRow(
                    project_id=row.id,
                    event_type="project.cancellation_started",
                    payload={"previous_status": current.value},
                )
            )
            return ProjectStatus.CANCELLED

    async def finalize_project_cancellation(self, project_id: UUID, *, at: datetime) -> dict[str, int]:
        active_run_statuses = {RunStatus.STARTING.value, RunStatus.RUNNING.value}
        terminal_task_statuses = {
            TaskStatus.SUCCEEDED.value,
            TaskStatus.FAILED.value,
            TaskStatus.CANCELLED.value,
        }
        terminal_merge_statuses = {
            MergeStatus.MERGED.value,
            MergeStatus.CONFLICT.value,
            MergeStatus.FAILED.value,
            MergeStatus.CANCELLED.value,
        }
        async with self._sessions.begin() as session:
            project = await session.get(ProjectRow, str(project_id), with_for_update=True)
            if project is None:
                raise KeyError(f"unknown project {project_id}")
            if project.status != ProjectStatus.CANCELLED.value:
                raise InvalidProjectTransition(f"cannot finalize cancellation from {project.status}")

            runs = list(
                (
                    await session.execute(
                        select(AgentRunRow)
                        .where(
                            AgentRunRow.project_id == str(project_id),
                            AgentRunRow.status.in_(active_run_statuses),
                        )
                        .with_for_update()
                    )
                ).scalars()
            )
            for run in runs:
                run.status = RunStatus.CANCELLED.value
                run.failure_class = None
                run.failure_message = "project cancelled by user"
                run.finished_at = at
                run.heartbeat_at = at

            tasks = list(
                (
                    await session.execute(
                        select(TaskRow)
                        .where(
                            TaskRow.project_id == str(project_id),
                            TaskRow.status.not_in(terminal_task_statuses),
                        )
                        .with_for_update()
                    )
                ).scalars()
            )
            for task in tasks:
                task.status = TaskStatus.CANCELLED.value
                task.blocked_reason = "project cancelled by user"
                task.assigned_provider = None
                task.assigned_model = None
                task.updated_at = at

            merge_items = list(
                (
                    await session.execute(
                        select(MergeQueueRow)
                        .where(
                            MergeQueueRow.project_id == str(project_id),
                            MergeQueueRow.status.not_in(terminal_merge_statuses),
                        )
                        .with_for_update()
                    )
                ).scalars()
            )
            for merge in merge_items:
                merge.status = MergeStatus.CANCELLED.value
                merge.conflict_details = "project cancelled by user"
                merge.updated_at = at

            completed_event = await session.scalar(
                select(EventRow.id)
                .where(
                    EventRow.project_id == str(project_id),
                    EventRow.event_type == "project.cancelled",
                )
                .limit(1)
            )
            counts = {
                "runs_cancelled": len(runs),
                "tasks_cancelled": len(tasks),
                "merge_items_cancelled": len(merge_items),
            }
            if completed_event is None:
                session.add(
                    EventRow(
                        project_id=project.id,
                        event_type="project.cancelled",
                        payload=counts,
                    )
                )
            project.updated_at = at
            await self._refresh_milestones(session, project.id, at=at)
            return counts

    async def list_schedulable_projects(self) -> list[ProjectSpec]:
        async with self._sessions() as session:
            rows = list(
                (
                    await session.execute(
                        select(ProjectRow)
                        .where(ProjectRow.status.in_((ProjectStatus.PLANNING.value, ProjectStatus.RUNNING.value)))
                        .order_by(ProjectRow.created_at, ProjectRow.id)
                    )
                ).scalars()
            )
        return [self._project_spec(row) for row in rows]

    async def create_tasks(self, tasks: Sequence[TaskSpec], *, priority: int = 0) -> None:
        if not tasks:
            return
        project_ids = {task.project_id for task in tasks}
        if len(project_ids) != 1:
            raise InvalidTaskGraph("one task batch cannot span multiple projects")
        project_id = next(iter(project_ids))
        task_ids = [task.id for task in tasks]
        if len(set(task_ids)) != len(task_ids):
            raise InvalidTaskGraph("task IDs must be unique within a batch")

        async with self._sessions.begin() as session:
            project = await session.get(ProjectRow, str(project_id))
            if project is None:
                raise InvalidTaskGraph(f"unknown project {project_id}")
            existing_rows = list(
                (await session.execute(select(TaskRow).where(TaskRow.project_id == str(project_id)))).scalars()
            )
            existing_ids = {UUID(row.id) for row in existing_rows}
            duplicates = existing_ids.intersection(task_ids)
            if duplicates:
                raise InvalidTaskGraph(f"task already exists: {sorted(str(value) for value in duplicates)[0]}")
            known_ids = existing_ids.union(task_ids)
            for task in tasks:
                unknown_dependencies = set(task.dependencies).difference(known_ids)
                if unknown_dependencies:
                    raise InvalidTaskGraph(
                        "unknown dependency: " + sorted(str(value) for value in unknown_dependencies)[0]
                    )
                if task.parent_task_id is not None and task.parent_task_id not in known_ids:
                    raise InvalidTaskGraph(f"unknown parent task: {task.parent_task_id}")

            dependency_graph = {
                UUID(row.id): [UUID(dependency) for dependency in row.dependencies] for row in existing_rows
            }
            dependency_graph.update({task.id: task.dependencies for task in tasks})
            self._validate_acyclic(dependency_graph)
            session.add_all(
                [
                    TaskRow(
                        id=str(task.id),
                        project_id=str(task.project_id),
                        parent_task_id=str(task.parent_task_id) if task.parent_task_id else None,
                        task_type=task.task_type.value,
                        goal=task.goal,
                        instructions=task.instructions,
                        dependencies=[str(dependency) for dependency in task.dependencies],
                        write_scope=task.write_scope,
                        acceptance_criteria=task.acceptance_criteria,
                        preferred_capabilities=task.preferred_capabilities,
                        preferred_providers=task.preferred_providers,
                        timeout_seconds=task.timeout_seconds,
                        retry_limit=task.retry_limit,
                        priority=priority,
                        status=TaskStatus.PENDING.value,
                    )
                    for task in tasks
                ]
            )

    @staticmethod
    def _validate_acyclic(graph: dict[UUID, list[UUID]]) -> None:
        visited: set[UUID] = set()
        visiting: set[UUID] = set()

        def visit(task_id: UUID) -> None:
            if task_id in visiting:
                raise InvalidTaskGraph("task dependency cycle detected")
            if task_id in visited:
                return
            visiting.add(task_id)
            for dependency in graph.get(task_id, []):
                visit(dependency)
            visiting.remove(task_id)
            visited.add(task_id)

        for task_id in graph:
            visit(task_id)

    async def upsert_provider(
        self,
        profile: ProviderProfile,
        *,
        adapter: str,
        default_model: str | None,
    ) -> None:
        async with self._sessions.begin() as session:
            row = await session.get(ProviderRow, profile.name, with_for_update=True)
            values = {
                "adapter": adapter,
                "capabilities": sorted(profile.capabilities),
                "strength": profile.strength,
                "relative_cost": profile.relative_cost,
                "latency_p95_seconds": profile.latency_p95_seconds,
                "recent_success_rate": profile.recent_success_rate,
                "max_concurrency": profile.max_concurrency,
                "available": profile.available,
                "rate_limited_until": profile.rate_limited_until,
                "default_model": default_model,
                "updated_at": datetime.now(UTC),
            }
            if row is None:
                session.add(ProviderRow(name=profile.name, **values))
            else:
                for field, value in values.items():
                    setattr(row, field, value)

    async def list_provider_profiles(self) -> list[ProviderProfile]:
        active_statuses = (RunStatus.STARTING.value, RunStatus.RUNNING.value)
        async with self._sessions() as session:
            providers = list((await session.execute(select(ProviderRow).order_by(ProviderRow.name))).scalars())
            count_rows = (
                await session.execute(
                    select(AgentRunRow.provider, func.count(AgentRunRow.id))
                    .where(AgentRunRow.status.in_(active_statuses))
                    .group_by(AgentRunRow.provider)
                )
            ).all()
            counts: dict[str, int] = {str(provider): int(count) for provider, count in count_rows}
        return [
            ProviderProfile(
                name=row.name,
                capabilities=frozenset(row.capabilities),
                strength=row.strength,
                relative_cost=row.relative_cost,
                latency_p95_seconds=row.latency_p95_seconds,
                recent_success_rate=row.recent_success_rate,
                active_runs=int(counts.get(row.name, 0)),
                max_concurrency=row.max_concurrency,
                available=row.available,
                rate_limited_until=self._aware(row.rate_limited_until) if row.rate_limited_until else None,
            )
            for row in providers
        ]

    async def claim_task(
        self,
        task_id: UUID,
        *,
        provider: str,
        model: str | None,
        parent_run_id: UUID | None = None,
    ) -> AgentRunRecord:
        active_statuses = (RunStatus.STARTING.value, RunStatus.RUNNING.value)
        async with self._sessions.begin() as session:
            project_id = await session.scalar(select(TaskRow.project_id).where(TaskRow.id == str(task_id)))
            if project_id is None:
                raise KeyError(f"unknown task {task_id}")
            project = await session.get(ProjectRow, project_id, with_for_update=True)
            if project is None:
                raise KeyError(f"unknown project {project_id}")
            if project.status not in {ProjectStatus.PLANNING.value, ProjectStatus.RUNNING.value}:
                raise CapacityUnavailable(f"project {project_id} is {project.status}")

            provider_row = await session.get(ProviderRow, provider, with_for_update=True)
            if provider_row is None or not provider_row.available:
                raise CapacityUnavailable(f"provider {provider} is unavailable")
            if provider_row.rate_limited_until:
                cooldown = self._aware(provider_row.rate_limited_until)
                if cooldown > datetime.now(UTC):
                    raise CapacityUnavailable(f"provider {provider} is rate limited")
            active = await session.scalar(
                select(func.count(AgentRunRow.id)).where(
                    AgentRunRow.provider == provider,
                    AgentRunRow.status.in_(active_statuses),
                )
            )
            if int(active or 0) >= provider_row.max_concurrency:
                raise CapacityUnavailable(f"provider {provider} has no free worker slot")

            task = await session.scalar(select(TaskRow).where(TaskRow.id == str(task_id)).with_for_update())
            if task is None:
                raise KeyError(f"unknown task {task_id}")
            if task.status not in {TaskStatus.PENDING.value, TaskStatus.READY.value, TaskStatus.FAILED.value}:
                raise CapacityUnavailable(f"task {task_id} is already {task.status}")

            now = datetime.now(UTC)
            run = AgentRunRow(
                id=str(uuid4()),
                project_id=task.project_id,
                task_id=task.id,
                parent_run_id=str(parent_run_id) if parent_run_id else None,
                provider=provider,
                model=model or provider_row.default_model,
                role=task.task_type,
                status=RunStatus.STARTING.value,
                attempt=task.retry_count,
                started_at=now,
                heartbeat_at=now,
                progress_at=now,
            )
            session.add(run)
            task.status = TaskStatus.RUNNING.value
            task.assigned_provider = provider
            task.assigned_model = run.model
            task.updated_at = now
            if project.status == ProjectStatus.PLANNING.value:
                project.status = ProjectStatus.RUNNING.value
                project.updated_at = now
            session.add(
                EventRow(
                    project_id=task.project_id,
                    task_id=task.id,
                    run_id=run.id,
                    event_type="run.claimed",
                    payload={"provider": provider, "model": run.model, "attempt": run.attempt},
                )
            )
            await self._refresh_milestones(session, task.project_id, at=now)
            await session.flush()
            return self._run_record(run)

    async def get_run(self, run_id: UUID) -> AgentRunRecord:
        async with self._sessions() as session:
            row = await session.get(AgentRunRow, str(run_id))
            if row is None:
                raise KeyError(f"unknown run {run_id}")
            return self._run_record(row)

    async def mark_run_started(self, run_id: UUID, *, pid: int, session_id: str | None = None) -> None:
        async with self._sessions.begin() as session:
            row = await session.get(AgentRunRow, str(run_id), with_for_update=True)
            if row is None:
                raise KeyError(f"unknown run {run_id}")
            now = datetime.now(UTC)
            row.status = RunStatus.RUNNING.value
            row.pid = pid
            row.session_id = session_id
            row.heartbeat_at = now
            row.progress_at = now

    async def heartbeat_run(self, run_id: UUID, *, at: datetime | None = None, progress: bool = False) -> None:
        async with self._sessions.begin() as session:
            row = await session.get(AgentRunRow, str(run_id), with_for_update=True)
            if row is None:
                raise KeyError(f"unknown run {run_id}")
            heartbeat = at or datetime.now(UTC)
            row.heartbeat_at = heartbeat
            if progress:
                row.progress_at = heartbeat

    async def complete_run(self, run_id: UUID, result: CompletedTaskResult) -> None:
        async with self._sessions.begin() as session:
            row = await session.get(AgentRunRow, str(run_id), with_for_update=True)
            if row is None:
                raise KeyError(f"unknown run {run_id}")
            task = await session.get(TaskRow, row.task_id, with_for_update=True)
            if task is None:
                raise KeyError(f"unknown task {row.task_id}")
            followup_rows, milestone_rows = self._materialize_followups(task, result)
            now = datetime.now(UTC)
            payload = result.model_dump(mode="json")
            row.status = RunStatus.SUCCEEDED.value
            row.result_payload = payload
            row.finished_at = now
            row.heartbeat_at = now
            row.progress_at = now
            needs_integration = (
                task.task_type in self._CODE_TASK_TYPES and bool(result.commit) and bool(result.files_changed)
            )
            task.status = TaskStatus.AWAITING_REVIEW.value if needs_integration else TaskStatus.SUCCEEDED.value
            task.result_payload = payload
            task.updated_at = now
            session.add_all([*followup_rows, *milestone_rows])
            provider = await session.get(ProviderRow, row.provider, with_for_update=True)
            if provider is not None:
                provider.recent_success_rate = min(provider.recent_success_rate * 0.9 + 0.1, 1)
                provider.rate_limited_until = None
                provider.updated_at = now
            session.add(
                EventRow(
                    project_id=row.project_id,
                    task_id=row.task_id,
                    run_id=row.id,
                    event_type="run.completed",
                    payload={"summary": result.summary, "commit": result.commit},
                )
            )
            if followup_rows:
                session.add(
                    EventRow(
                        project_id=row.project_id,
                        task_id=row.task_id,
                        run_id=row.id,
                        event_type="task.followups_created",
                        payload={
                            "task_ids": [item.id for item in followup_rows],
                            "milestone_ids": [item.id for item in milestone_rows],
                        },
                    )
                )
            await session.flush()
            remaining = await session.scalar(
                select(func.count(TaskRow.id)).where(
                    TaskRow.project_id == row.project_id,
                    TaskRow.status.not_in((TaskStatus.SUCCEEDED.value, TaskStatus.CANCELLED.value)),
                )
            )
            project = await session.get(ProjectRow, row.project_id, with_for_update=True)
            if project is not None and project.status in {
                ProjectStatus.PLANNING.value,
                ProjectStatus.RUNNING.value,
            }:
                if int(remaining or 0) == 0:
                    project.status = ProjectStatus.COMPLETED.value
                else:
                    project.status = ProjectStatus.RUNNING.value
                project.updated_at = now
            await self._refresh_milestones(session, row.project_id, at=now)

    @classmethod
    def _materialize_followups(
        cls,
        parent: TaskRow,
        result: CompletedTaskResult,
    ) -> tuple[list[TaskRow], list[MilestoneRow]]:
        proposals = result.proposed_followup_tasks
        if parent.task_type not in {
            TaskType.DIRECTOR.value,
            TaskType.WORKSTREAM_LEAD.value,
        }:
            return [], []
        if parent.task_type == TaskType.DIRECTOR.value and not proposals:
            raise InvalidTaskGraph("a director must propose at least one executable follow-up task")
        keys = [proposal.key for proposal in proposals]
        if len(set(keys)) != len(keys):
            raise InvalidTaskGraph("proposed follow-up task keys must be unique")
        known_keys = set(keys)
        for proposal in proposals:
            unknown = set(proposal.dependencies).difference(known_keys)
            if unknown:
                raise InvalidTaskGraph("unknown proposed dependency: " + sorted(unknown)[0])

        task_ids = {key: uuid4() for key in keys}
        dependency_graph = {
            task_ids[proposal.key]: [task_ids[key] for key in proposal.dependencies] for proposal in proposals
        }
        cls._validate_acyclic(dependency_graph)
        task_rows = [
            TaskRow(
                id=str(task_ids[proposal.key]),
                project_id=parent.project_id,
                parent_task_id=parent.id,
                task_type=proposal.task_type.value,
                goal=proposal.goal,
                instructions=proposal.instructions,
                dependencies=[parent.id, *(str(task_ids[key]) for key in proposal.dependencies)],
                write_scope=proposal.write_scope,
                acceptance_criteria=proposal.acceptance_criteria,
                preferred_capabilities=proposal.preferred_capabilities,
                preferred_providers=proposal.preferred_providers,
                timeout_seconds=proposal.timeout_seconds,
                retry_limit=max(proposal.retry_limit, 3),
                priority=proposal.priority,
                status=TaskStatus.PENDING.value,
            )
            for proposal in proposals
        ]

        milestone_keys = [milestone.key for milestone in result.proposed_milestones]
        if len(set(milestone_keys)) != len(milestone_keys):
            raise InvalidTaskGraph("proposed milestone keys must be unique")
        milestone_rows: list[MilestoneRow] = []
        for ordinal, milestone in enumerate(result.proposed_milestones):
            unknown = set(milestone.task_keys).difference(known_keys)
            if unknown:
                raise InvalidTaskGraph("milestone references unknown task: " + sorted(unknown)[0])
            milestone_rows.append(
                MilestoneRow(
                    id=str(uuid4()),
                    project_id=parent.project_id,
                    title=milestone.title,
                    description=milestone.description,
                    acceptance_criteria=milestone.acceptance_criteria,
                    task_ids=[str(task_ids[key]) for key in milestone.task_keys],
                    status=MilestoneStatus.PENDING.value,
                    ordinal=ordinal,
                )
            )
        return task_rows, milestone_rows

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
        if status not in {RunStatus.FAILED, RunStatus.TIMED_OUT, RunStatus.CANCELLED, RunStatus.LOST}:
            raise ValueError("failed recovery requires a terminal run status")
        async with self._sessions.begin() as session:
            run = await session.get(AgentRunRow, str(run_id), with_for_update=True)
            if run is None:
                raise KeyError(f"unknown run {run_id}")
            task = await session.get(TaskRow, run.task_id, with_for_update=True)
            if task is None:
                raise KeyError(f"unknown task {run.task_id}")
            run.status = status.value
            run.failure_class = failure_class
            run.failure_message = failure_message[-10_000:]
            run.finished_at = at
            run.heartbeat_at = at
            lead_task_id: str | None = None
            if retry_decision.action is RecoveryAction.REPLAN_OR_BLOCK:
                task.status = TaskStatus.BLOCKED.value
                task.blocked_reason = retry_decision.reason
            elif retry_decision.action is RecoveryAction.ESCALATE_TO_LEAD:
                if task.task_type == TaskType.WORKSTREAM_LEAD.value:
                    task.status = TaskStatus.BLOCKED.value
                    task.blocked_reason = "a workstream lead could not recover the repeated failure"
                else:
                    task.status = TaskStatus.CANCELLED.value
                    task.retry_count += 1
                    task.blocked_reason = retry_decision.reason
                    lead_task_id = str(uuid4())
                    session.add(
                        TaskRow(
                            id=lead_task_id,
                            project_id=task.project_id,
                            parent_task_id=task.id,
                            task_type=TaskType.WORKSTREAM_LEAD.value,
                            goal=f"Diagnose and replan: {task.goal}"[:2_000],
                            instructions=(
                                "Diagnose the repeated worker failure, inspect the repository evidence, and propose "
                                "a bounded repair task DAG. Do not implement the repair in this planning task.\n\n"
                                f"Failure evidence:\n{failure_message[-6_000:]}"
                            ),
                            dependencies=task.dependencies,
                            write_scope=[],
                            acceptance_criteria=[
                                "The failure has a concrete root-cause diagnosis and executable repair tasks"
                            ],
                            preferred_capabilities=["reasoning"],
                            preferred_providers=[],
                            timeout_seconds=min(max(task.timeout_seconds, 600), 3_600),
                            retry_limit=min(max(task.retry_limit, 1), 3),
                            priority=task.priority + 100,
                            status=TaskStatus.PENDING.value,
                        )
                    )
            else:
                task.status = TaskStatus.READY.value
                task.retry_count += 1
                task.blocked_reason = failure_message[-10_000:]
                task.assigned_provider = None
                task.assigned_model = None
            task.updated_at = at

            if failure_class == "rate_limit":
                provider = await session.get(ProviderRow, run.provider, with_for_update=True)
                if provider is not None:
                    provider.rate_limited_until = at + timedelta(seconds=60)
                    provider.recent_success_rate = max(provider.recent_success_rate * 0.9, 0)
                    provider.updated_at = at

            session.add(
                EventRow(
                    project_id=run.project_id,
                    task_id=run.task_id,
                    run_id=run.id,
                    event_type="run.recovery_committed",
                    level="error",
                    payload={
                        "status": status.value,
                        "failure_class": failure_class,
                        "action": retry_decision.action.value,
                        "reason": retry_decision.reason,
                        "lead_task_id": lead_task_id,
                    },
                )
            )
            await self._refresh_milestones(session, run.project_id, at=at)

    async def cancel_run_and_requeue(
        self,
        run_id: UUID,
        *,
        reason: str,
        at: datetime,
    ) -> None:
        async with self._sessions.begin() as session:
            run = await session.get(AgentRunRow, str(run_id), with_for_update=True)
            if run is None:
                raise KeyError(f"unknown run {run_id}")
            task = await session.get(TaskRow, run.task_id, with_for_update=True)
            if task is None:
                raise KeyError(f"unknown task {run.task_id}")
            run.status = RunStatus.CANCELLED.value
            run.failure_class = None
            run.failure_message = reason[-10_000:]
            run.finished_at = at
            run.heartbeat_at = at
            task.status = TaskStatus.READY.value
            task.blocked_reason = reason[-10_000:]
            task.assigned_provider = None
            task.assigned_model = None
            task.updated_at = at
            session.add(
                EventRow(
                    project_id=run.project_id,
                    task_id=run.task_id,
                    run_id=run.id,
                    event_type="run.cancelled_for_shutdown",
                    payload={"reason": reason[-4_000:]},
                )
            )
            await self._refresh_milestones(session, run.project_id, at=at)

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
        async with self._sessions.begin() as session:
            task = await session.get(TaskRow, str(task_id))
            if task is None:
                raise KeyError(f"unknown task {task_id}")
            existing = await session.scalar(select(WorkspaceRow).where(WorkspaceRow.task_id == str(task_id)))
            if existing is not None:
                return self._workspace_record(existing)
            row = WorkspaceRow(
                id=str(uuid4()),
                project_id=task.project_id,
                task_id=task.id,
                repository_path=repository_path,
                worktree_path=worktree_path,
                branch=branch,
                base_commit=base_commit,
                write_scope=write_scope,
                status=WorkspaceStatus.ACTIVE.value,
                port=port,
            )
            session.add(row)
            await session.flush()
            return self._workspace_record(row)

    async def get_workspace_for_task(self, task_id: UUID) -> WorkspaceRecord:
        async with self._sessions() as session:
            row = await session.scalar(select(WorkspaceRow).where(WorkspaceRow.task_id == str(task_id)))
            if row is None:
                raise KeyError(f"task {task_id} has no workspace")
            return self._workspace_record(row)

    async def enqueue_merge(
        self,
        task_id: UUID,
        *,
        commit: str,
        max_attempts: int = 1,
    ) -> MergeQueueItem:
        if max_attempts < 1:
            raise ValueError("merge attempt budget must be positive")
        async with self._sessions.begin() as session:
            task = await session.get(TaskRow, str(task_id), with_for_update=True)
            if task is None:
                raise KeyError(f"unknown task {task_id}")
            workspace = await session.scalar(
                select(WorkspaceRow).where(WorkspaceRow.task_id == task.id).with_for_update()
            )
            if workspace is None:
                raise KeyError(f"task {task_id} has no workspace")
            existing = await session.scalar(
                select(MergeQueueRow).where(MergeQueueRow.task_id == task.id).with_for_update()
            )
            if existing is not None:
                return self._merge_item(existing)
            maximum_position = await session.scalar(
                select(func.max(MergeQueueRow.position)).where(MergeQueueRow.project_id == task.project_id)
            )
            row = MergeQueueRow(
                id=str(uuid4()),
                project_id=task.project_id,
                task_id=task.id,
                workspace_id=workspace.id,
                commit=commit,
                branch=workspace.branch,
                status=MergeStatus.QUEUED.value,
                position=int(maximum_position or 0) + 1,
                attempts=0,
                max_attempts=max_attempts,
                conflict_files=[],
            )
            session.add(row)
            session.add(
                EventRow(
                    project_id=task.project_id,
                    task_id=task.id,
                    event_type="merge.queued",
                    payload={"merge_queue_id": row.id, "commit": commit, "position": row.position},
                )
            )
            await session.flush()
            return self._merge_item(row)

    async def claim_next(self, project_id: UUID) -> MergeQueueItem | None:
        async with self._sessions.begin() as session:
            active = await session.scalar(
                select(MergeQueueRow.id)
                .where(
                    MergeQueueRow.project_id == str(project_id),
                    MergeQueueRow.status == MergeStatus.MERGING.value,
                )
                .limit(1)
                .with_for_update(skip_locked=True)
            )
            if active is not None:
                return None
            row = await session.scalar(
                select(MergeQueueRow)
                .where(
                    MergeQueueRow.project_id == str(project_id),
                    MergeQueueRow.status == MergeStatus.READY.value,
                )
                .order_by(MergeQueueRow.position, MergeQueueRow.created_at)
                .limit(1)
                .with_for_update(skip_locked=True)
            )
            if row is None:
                return None
            if row.attempts >= row.max_attempts:
                row.status = MergeStatus.FAILED.value
                row.conflict_details = "merge attempt limit reached"
                session.add(
                    EventRow(
                        project_id=row.project_id,
                        task_id=row.task_id,
                        event_type="merge.failed",
                        level="error",
                        payload={"merge_queue_id": row.id, "reason": row.conflict_details},
                    )
                )
                return None
            row.status = MergeStatus.MERGING.value
            row.attempts += 1
            row.updated_at = datetime.now(UTC)
            session.add(
                EventRow(
                    project_id=row.project_id,
                    task_id=row.task_id,
                    event_type="merge.started",
                    payload={"merge_queue_id": row.id, "attempt": row.attempts},
                )
            )
            await session.flush()
            return self._merge_item(row)

    async def save(self, item: MergeQueueItem) -> None:
        async with self._sessions.begin() as session:
            row = await session.get(MergeQueueRow, str(item.id), with_for_update=True)
            if row is None:
                raise KeyError(f"unknown merge queue item {item.id}")
            current = self._merge_item(row)
            if current.status is not item.status:
                MergeQueueStateMachine().transition(current, item.status)
            row.status = item.status.value
            row.attempts = item.attempts
            row.max_attempts = item.max_attempts
            row.conflict_files = list(item.conflict_files)
            row.conflict_details = item.conflict_details
            row.integration_commit = item.integration_commit
            row.updated_at = datetime.now(UTC)
            level = "error" if item.status in {MergeStatus.CONFLICT, MergeStatus.FAILED} else "info"
            session.add(
                EventRow(
                    project_id=row.project_id,
                    task_id=row.task_id,
                    event_type=f"merge.{item.status.value}",
                    level=level,
                    payload={
                        "merge_queue_id": row.id,
                        "attempt": row.attempts,
                        "conflict_files": row.conflict_files,
                        "details": row.conflict_details,
                        "integration_commit": row.integration_commit,
                    },
                )
            )

    async def record_validation_results(
        self,
        item: MergeQueueItem,
        suite: ValidationSuiteResult,
        *,
        run_id: UUID | None = None,
    ) -> None:
        now = datetime.now(UTC)
        async with self._sessions.begin() as session:
            merge = await session.get(MergeQueueRow, str(item.id))
            if merge is None:
                raise KeyError(f"unknown merge queue item {item.id}")
            for result in suite.results:
                output = result.stdout
                if result.stderr:
                    output = f"{output}\n{result.stderr}" if output else result.stderr
                session.add(
                    ValidationRow(
                        id=str(uuid4()),
                        project_id=merge.project_id,
                        task_id=merge.task_id,
                        run_id=str(run_id) if run_id else None,
                        merge_queue_id=merge.id,
                        stage=result.stage,
                        command=shlex.join(result.argv),
                        status=result.status.value,
                        output=output[-20_000:],
                        duration_seconds=result.duration_seconds,
                        created_at=now,
                        finished_at=now,
                    )
                )
            session.add(
                EventRow(
                    project_id=merge.project_id,
                    task_id=merge.task_id,
                    event_type="validation.completed",
                    level="info" if suite.passed else "error",
                    payload={
                        "merge_queue_id": merge.id,
                        "passed": suite.passed,
                        "stages": [result.stage for result in suite.results],
                    },
                )
            )

    async def stage_review(self, code_task_id: UUID, review: TaskSpec) -> bool:
        if review.task_type is not TaskType.REVIEW or review.parent_task_id != code_task_id:
            raise ValueError("review task must be a child of the code task")
        if code_task_id not in review.dependencies:
            raise ValueError("review task must depend on the code task")
        async with self._sessions.begin() as session:
            code_task = await session.get(TaskRow, str(code_task_id), with_for_update=True)
            if code_task is None:
                raise KeyError(f"unknown task {code_task_id}")
            project = await session.get(ProjectRow, code_task.project_id, with_for_update=True)
            if project is None:
                raise KeyError(f"unknown project {code_task.project_id}")
            if project.status not in {ProjectStatus.PLANNING.value, ProjectStatus.RUNNING.value}:
                return False
            existing = await session.scalar(
                select(TaskRow)
                .where(
                    TaskRow.parent_task_id == code_task.id,
                    TaskRow.task_type == TaskType.REVIEW.value,
                )
                .limit(1)
                .with_for_update()
            )
            if existing is not None:
                return False
            if code_task.status not in {
                TaskStatus.SUCCEEDED.value,
                TaskStatus.AWAITING_REVIEW.value,
            }:
                return False
            row = TaskRow(
                id=str(review.id),
                project_id=str(review.project_id),
                parent_task_id=str(review.parent_task_id),
                task_type=review.task_type.value,
                goal=review.goal,
                instructions=review.instructions,
                dependencies=[str(dependency) for dependency in review.dependencies],
                write_scope=review.write_scope,
                acceptance_criteria=review.acceptance_criteria,
                preferred_capabilities=review.preferred_capabilities,
                preferred_providers=review.preferred_providers,
                timeout_seconds=review.timeout_seconds,
                retry_limit=review.retry_limit,
                priority=code_task.priority + 50,
                status=TaskStatus.PENDING.value,
            )
            session.add(row)
            code_task.status = TaskStatus.AWAITING_REVIEW.value
            code_task.updated_at = datetime.now(UTC)
            if project.status == ProjectStatus.PLANNING.value:
                project.status = ProjectStatus.RUNNING.value
                project.updated_at = datetime.now(UTC)
            session.add(
                EventRow(
                    project_id=code_task.project_id,
                    task_id=code_task.id,
                    event_type="review.queued",
                    payload={"review_task_id": row.id, "commit": (code_task.result_payload or {}).get("commit")},
                )
            )
            await self._refresh_milestones(session, code_task.project_id, at=code_task.updated_at)
            return True

    async def stage_pipeline_child(self, parent_task_id: UUID, child: TaskSpec) -> bool:
        if child.task_type not in {TaskType.REPAIR, TaskType.WORKSTREAM_LEAD}:
            raise ValueError("pipeline child must be a repair or workstream lead task")
        if child.parent_task_id != parent_task_id:
            raise ValueError("pipeline child must reference its durable parent")
        async with self._sessions.begin() as session:
            parent = await session.get(TaskRow, str(parent_task_id), with_for_update=True)
            if parent is None:
                raise KeyError(f"unknown task {parent_task_id}")
            project = await session.get(ProjectRow, parent.project_id, with_for_update=True)
            if project is None:
                raise KeyError(f"unknown project {parent.project_id}")
            if project.status not in {ProjectStatus.PLANNING.value, ProjectStatus.RUNNING.value}:
                return False
            existing = await session.scalar(
                select(TaskRow)
                .where(
                    TaskRow.parent_task_id == parent.id,
                    TaskRow.task_type == child.task_type.value,
                )
                .limit(1)
                .with_for_update()
            )
            if existing is not None:
                return False
            row = TaskRow(
                id=str(child.id),
                project_id=str(child.project_id),
                parent_task_id=str(child.parent_task_id),
                task_type=child.task_type.value,
                goal=child.goal,
                instructions=child.instructions,
                dependencies=[str(dependency) for dependency in child.dependencies],
                write_scope=child.write_scope,
                acceptance_criteria=child.acceptance_criteria,
                preferred_capabilities=child.preferred_capabilities,
                preferred_providers=child.preferred_providers,
                timeout_seconds=child.timeout_seconds,
                retry_limit=child.retry_limit,
                priority=parent.priority + 100,
                status=TaskStatus.PENDING.value,
            )
            session.add(row)
            session.add(
                EventRow(
                    project_id=parent.project_id,
                    task_id=parent.id,
                    event_type=f"{child.task_type.value}.queued",
                    level="error",
                    payload={"child_task_id": row.id},
                )
            )
            if project.status == ProjectStatus.PLANNING.value:
                project.status = ProjectStatus.RUNNING.value
                project.updated_at = datetime.now(UTC)
            return True

    async def finalize_merge(self, item: MergeQueueItem) -> None:
        if item.status is not MergeStatus.MERGED:
            raise ValueError("only a merged queue item can finalize integration")
        async with self._sessions.begin() as session:
            merge = await session.get(MergeQueueRow, str(item.id), with_for_update=True)
            if merge is None:
                raise KeyError(f"unknown merge queue item {item.id}")
            if merge.status != MergeStatus.MERGED.value:
                raise ValueError("durable merge state is not merged")
            workspace = await session.get(WorkspaceRow, merge.workspace_id, with_for_update=True)
            if workspace is not None:
                workspace.status = WorkspaceStatus.MERGED.value
                workspace.updated_at = datetime.now(UTC)

            current_id: str | None = merge.task_id
            while current_id is not None:
                task = await session.get(TaskRow, current_id, with_for_update=True)
                if task is None:
                    break
                if task.status == TaskStatus.AWAITING_REVIEW.value:
                    task.status = TaskStatus.SUCCEEDED.value
                    task.blocked_reason = None
                    task.updated_at = datetime.now(UTC)
                current_id = task.parent_task_id

            remaining = await session.scalar(
                select(func.count(TaskRow.id)).where(
                    TaskRow.project_id == merge.project_id,
                    TaskRow.status.not_in((TaskStatus.SUCCEEDED.value, TaskStatus.CANCELLED.value)),
                )
            )
            project = await session.get(ProjectRow, merge.project_id, with_for_update=True)
            if project is not None and project.status in {
                ProjectStatus.PLANNING.value,
                ProjectStatus.RUNNING.value,
            }:
                project.status = (
                    ProjectStatus.COMPLETED.value if int(remaining or 0) == 0 else ProjectStatus.RUNNING.value
                )
                project.updated_at = datetime.now(UTC)
            await self._refresh_milestones(session, merge.project_id, at=datetime.now(UTC))
            session.add(
                EventRow(
                    project_id=merge.project_id,
                    task_id=merge.task_id,
                    event_type="integration.finalized",
                    payload={"merge_queue_id": merge.id, "integration_commit": merge.integration_commit},
                )
            )

    async def get_project_snapshot(self, project_id: UUID) -> ProjectSnapshot:
        async with self._sessions() as session:
            project = await session.get(ProjectRow, str(project_id))
            if project is None:
                raise KeyError(f"unknown project {project_id}")
            result = await session.execute(
                select(TaskRow)
                .where(TaskRow.project_id == str(project_id))
                .order_by(TaskRow.priority.desc(), TaskRow.created_at, TaskRow.id)
            )
            tasks = [self._task_record(row) for row in result.scalars()]
            milestone_rows = list(
                (
                    await session.execute(
                        select(MilestoneRow)
                        .where(MilestoneRow.project_id == str(project_id))
                        .order_by(MilestoneRow.ordinal)
                    )
                ).scalars()
            )
            run_rows = list(
                (
                    await session.execute(
                        select(AgentRunRow)
                        .where(AgentRunRow.project_id == str(project_id))
                        .order_by(AgentRunRow.started_at.desc())
                    )
                ).scalars()
            )
            workspace_rows = list(
                (
                    await session.execute(
                        select(WorkspaceRow)
                        .where(WorkspaceRow.project_id == str(project_id))
                        .order_by(WorkspaceRow.created_at)
                    )
                ).scalars()
            )
            merge_rows = list(
                (
                    await session.execute(
                        select(MergeQueueRow)
                        .where(MergeQueueRow.project_id == str(project_id))
                        .order_by(MergeQueueRow.position, MergeQueueRow.created_at)
                    )
                ).scalars()
            )
            validation_rows = list(
                (
                    await session.execute(
                        select(ValidationRow)
                        .where(ValidationRow.project_id == str(project_id))
                        .order_by(ValidationRow.created_at.desc())
                    )
                ).scalars()
            )

        profiles = await self.list_provider_profiles()
        completed = sum(task.status == TaskStatus.SUCCEEDED for task in tasks)
        active = sum(
            task.status in {TaskStatus.QUEUED, TaskStatus.RUNNING, TaskStatus.AWAITING_REVIEW} for task in tasks
        )
        blockers = [
            {"task_id": str(task.id), "goal": task.goal, "reason": task.blocked_reason or task.status.value}
            for task in tasks
            if task.status in {TaskStatus.BLOCKED, TaskStatus.FAILED}
        ]
        if project.blocked_reason:
            blockers.insert(0, {"project_id": project.id, "reason": project.blocked_reason})
        return ProjectSnapshot(
            project=self._project_spec(project),
            status=ProjectStatus(project.status),
            tasks=tasks,
            milestones=[self._milestone_record(row) for row in milestone_rows],
            runs=[self._run_record(row) for row in run_rows],
            workspaces=[self._workspace_record(row) for row in workspace_rows],
            merge_queue=[self._merge_record(row) for row in merge_rows],
            validations=[self._validation_record(row) for row in validation_rows],
            providers=[self._provider_state(profile) for profile in profiles],
            critical_path=self._critical_path(tasks),
            blockers=blockers,
            progress={
                "completed": completed,
                "total": len(tasks),
                "active": active,
                "percent": round((completed / len(tasks)) * 100, 1) if tasks else 0,
            },
            created_at=self._aware(project.created_at),
            updated_at=self._aware(project.updated_at),
        )

    async def list_runnable_tasks(self, project_id: UUID) -> list[TaskRecord]:
        async with self._sessions() as session:
            result = await session.execute(
                select(TaskRow)
                .where(TaskRow.project_id == str(project_id))
                .order_by(TaskRow.priority.desc(), TaskRow.created_at, TaskRow.id)
            )
            rows = list(result.scalars())

        statuses = {row.id: row.status for row in rows}

        def dependencies_ready(row: TaskRow) -> bool:
            accepted = {TaskStatus.SUCCEEDED.value}
            if row.task_type in {TaskType.REVIEW.value, TaskType.REPAIR.value}:
                accepted.add(TaskStatus.AWAITING_REVIEW.value)
            return all(statuses.get(dependency) in accepted for dependency in row.dependencies)

        return [
            self._task_record(row)
            for row in rows
            if row.status in {TaskStatus.PENDING.value, TaskStatus.READY.value} and dependencies_ready(row)
        ]

    async def transition_task(
        self,
        task_id: UUID,
        status: TaskStatus,
        *,
        result: CompletedTaskResult | None = None,
        blocked_reason: str | None = None,
    ) -> None:
        async with self._sessions.begin() as session:
            row = await session.get(TaskRow, str(task_id), with_for_update=True)
            if row is None:
                raise KeyError(f"unknown task {task_id}")
            row.status = status.value
            row.blocked_reason = blocked_reason
            row.result_payload = result.model_dump(mode="json") if result else row.result_payload
            row.updated_at = datetime.now(UTC)
            await self._refresh_milestones(session, row.project_id, at=row.updated_at)

    async def reconcile_milestones(self) -> int:
        async with self._sessions.begin() as session:
            project_ids = list(
                (
                    await session.execute(
                        select(MilestoneRow.project_id).distinct().order_by(MilestoneRow.project_id)
                    )
                ).scalars()
            )
            changed = 0
            now = datetime.now(UTC)
            for project_id in project_ids:
                changed += await self._refresh_milestones(session, project_id, at=now)
            return changed

    @staticmethod
    async def _refresh_milestones(
        session: AsyncSession,
        project_id: str,
        *,
        at: datetime,
    ) -> int:
        await session.flush()
        milestones = list(
            (
                await session.execute(
                    select(MilestoneRow)
                    .where(MilestoneRow.project_id == project_id)
                    .order_by(MilestoneRow.ordinal, MilestoneRow.id)
                    .with_for_update()
                )
            ).scalars()
        )
        if not milestones:
            return 0
        project_status = await session.scalar(select(ProjectRow.status).where(ProjectRow.id == project_id))
        task_rows = (
            await session.execute(
                select(TaskRow.id, TaskRow.parent_task_id, TaskRow.status)
                .where(TaskRow.project_id == project_id)
                .order_by(TaskRow.created_at, TaskRow.id)
            )
        ).all()
        task_statuses = {str(task_id): str(status) for task_id, _, status in task_rows}
        children: dict[str, list[str]] = {}
        for task_id, parent_task_id, _ in task_rows:
            if parent_task_id is not None:
                children.setdefault(str(parent_task_id), []).append(str(task_id))

        changed = 0
        failed_project = project_status in {ProjectStatus.CANCELLED.value, ProjectStatus.FAILED.value}
        success_statuses = {TaskStatus.SUCCEEDED.value, TaskStatus.CANCELLED.value}
        failure_statuses = {TaskStatus.BLOCKED.value, TaskStatus.FAILED.value}
        for milestone in milestones:
            tracked = list(dict.fromkeys(str(task_id) for task_id in milestone.task_ids))
            known = set(tracked)
            cursor = 0
            while cursor < len(tracked):
                for child_id in children.get(tracked[cursor], []):
                    if child_id not in known:
                        known.add(child_id)
                        tracked.append(child_id)
                cursor += 1
            statuses = [task_statuses.get(task_id) for task_id in tracked]
            if failed_project or any(status is None for status in statuses):
                target = MilestoneStatus.BLOCKED
            elif statuses and all(status in success_statuses for status in statuses):
                target = MilestoneStatus.COMPLETED
            elif any(status in failure_statuses for status in statuses):
                target = MilestoneStatus.BLOCKED
            elif any(status != TaskStatus.PENDING.value for status in statuses):
                target = MilestoneStatus.ACTIVE
            else:
                target = MilestoneStatus.PENDING

            previous = milestone.status
            task_ids_changed = tracked != list(milestone.task_ids)
            if previous == target.value and not task_ids_changed:
                continue
            milestone.task_ids = tracked
            milestone.status = target.value
            milestone.updated_at = at
            changed += 1
            session.add(
                EventRow(
                    project_id=project_id,
                    event_type="milestone.status_changed",
                    payload={
                        "milestone_id": milestone.id,
                        "previous_status": previous,
                        "status": target.value,
                        "task_ids": tracked,
                    },
                )
            )
        return changed

    async def append_event(
        self,
        project_id: UUID,
        event_type: str,
        payload: dict,
        *,
        task_id: UUID | None = None,
        run_id: UUID | None = None,
        level: str = "info",
    ) -> EventRecord:
        async with self._sessions.begin() as session:
            row = EventRow(
                project_id=str(project_id),
                task_id=str(task_id) if task_id else None,
                run_id=str(run_id) if run_id else None,
                event_type=event_type,
                level=level,
                payload=payload,
            )
            session.add(row)
            await session.flush()
            await session.refresh(row)
            return self._event_record(row)

    async def list_events(
        self,
        project_id: UUID,
        *,
        after_id: int = 0,
        limit: int = 500,
        run_id: UUID | None = None,
    ) -> list[EventRecord]:
        async with self._sessions() as session:
            conditions = [EventRow.project_id == str(project_id), EventRow.id > after_id]
            if run_id is not None:
                conditions.append(EventRow.run_id == str(run_id))
            result = await session.execute(
                select(EventRow)
                .where(*conditions)
                .order_by(EventRow.id)
                .limit(limit)
            )
            return [self._event_record(row) for row in result.scalars()]

    @staticmethod
    def _project_spec(row: ProjectRow) -> ProjectSpec:
        return ProjectSpec(
            id=UUID(row.id),
            name=row.name,
            goal=row.goal,
            repository_url=row.repository_url,
            base_branch=row.base_branch,
            acceptance_criteria=row.acceptance_criteria,
            max_parallelism=row.max_parallelism,
        )

    @classmethod
    def _task_record(cls, row: TaskRow) -> TaskRecord:
        return TaskRecord(
            id=UUID(row.id),
            project_id=UUID(row.project_id),
            parent_task_id=UUID(row.parent_task_id) if row.parent_task_id else None,
            task_type=TaskType(row.task_type),
            goal=row.goal,
            instructions=row.instructions,
            dependencies=[UUID(dependency) for dependency in row.dependencies],
            write_scope=row.write_scope,
            acceptance_criteria=row.acceptance_criteria,
            preferred_capabilities=row.preferred_capabilities,
            preferred_providers=row.preferred_providers,
            timeout_seconds=row.timeout_seconds,
            retry_limit=row.retry_limit,
            status=TaskStatus(row.status),
            priority=row.priority,
            retry_count=row.retry_count,
            assigned_provider=row.assigned_provider,
            assigned_model=row.assigned_model,
            blocked_reason=row.blocked_reason,
            result=CompletedTaskResult.model_validate(row.result_payload) if row.result_payload else None,
            created_at=cls._aware(row.created_at),
            updated_at=cls._aware(row.updated_at),
        )

    @classmethod
    def _event_record(cls, row: EventRow) -> EventRecord:
        return EventRecord(
            id=row.id,
            project_id=UUID(row.project_id),
            task_id=UUID(row.task_id) if row.task_id else None,
            run_id=UUID(row.run_id) if row.run_id else None,
            event_type=row.event_type,
            level=row.level,
            payload=row.payload,
            created_at=cls._aware(row.created_at),
        )

    @classmethod
    def _run_record(cls, row: AgentRunRow) -> AgentRunRecord:
        return AgentRunRecord(
            id=UUID(row.id),
            project_id=UUID(row.project_id),
            task_id=UUID(row.task_id),
            parent_run_id=UUID(row.parent_run_id) if row.parent_run_id else None,
            provider=row.provider,
            model=row.model,
            role=row.role,
            status=RunStatus(row.status),
            attempt=row.attempt,
            pid=row.pid,
            session_id=row.session_id,
            started_at=cls._aware(row.started_at),
            heartbeat_at=cls._aware(row.heartbeat_at),
            progress_at=cls._aware(row.progress_at),
            finished_at=cls._aware(row.finished_at) if row.finished_at else None,
            failure_class=row.failure_class,
            failure_message=row.failure_message,
            result=CompletedTaskResult.model_validate(row.result_payload) if row.result_payload else None,
        )

    @classmethod
    def _workspace_record(cls, row: WorkspaceRow) -> WorkspaceRecord:
        return WorkspaceRecord(
            id=UUID(row.id),
            project_id=UUID(row.project_id),
            task_id=UUID(row.task_id),
            repository_path=row.repository_path,
            worktree_path=row.worktree_path,
            branch=row.branch,
            base_commit=row.base_commit,
            write_scope=row.write_scope,
            status=WorkspaceStatus(row.status),
            port=row.port,
            created_at=cls._aware(row.created_at),
            updated_at=cls._aware(row.updated_at),
        )

    @classmethod
    def _milestone_record(cls, row: MilestoneRow) -> MilestoneRecord:
        return MilestoneRecord(
            id=UUID(row.id),
            project_id=UUID(row.project_id),
            title=row.title,
            description=row.description,
            acceptance_criteria=row.acceptance_criteria,
            task_ids=[UUID(task_id) for task_id in row.task_ids],
            status=MilestoneStatus(row.status),
            ordinal=row.ordinal,
            created_at=cls._aware(row.created_at),
            updated_at=cls._aware(row.updated_at),
        )

    @classmethod
    def _merge_record(cls, row: MergeQueueRow) -> MergeQueueRecord:
        return MergeQueueRecord(
            id=UUID(row.id),
            project_id=UUID(row.project_id),
            task_id=UUID(row.task_id),
            workspace_id=UUID(row.workspace_id),
            commit=row.commit,
            branch=row.branch,
            status=MergeStatus(row.status),
            position=row.position,
            attempts=row.attempts,
            max_attempts=row.max_attempts,
            conflict_files=row.conflict_files,
            conflict_details=row.conflict_details,
            integration_commit=row.integration_commit,
            created_at=cls._aware(row.created_at),
            updated_at=cls._aware(row.updated_at),
        )

    @staticmethod
    def _merge_item(row: MergeQueueRow) -> MergeQueueItem:
        return MergeQueueItem(
            id=UUID(row.id),
            project_id=UUID(row.project_id),
            task_id=UUID(row.task_id),
            source_branch=row.branch,
            commit=row.commit,
            status=MergeStatus(row.status),
            attempts=row.attempts,
            max_attempts=row.max_attempts,
            conflict_files=tuple(row.conflict_files),
            conflict_details=row.conflict_details,
            integration_commit=row.integration_commit,
        )

    @classmethod
    def _validation_record(cls, row: ValidationRow) -> ValidationRecord:
        return ValidationRecord(
            id=UUID(row.id),
            project_id=UUID(row.project_id),
            task_id=UUID(row.task_id) if row.task_id else None,
            run_id=UUID(row.run_id) if row.run_id else None,
            merge_queue_id=UUID(row.merge_queue_id) if row.merge_queue_id else None,
            stage=row.stage,
            command=row.command,
            status=ValidationStatus(row.status),
            output=row.output,
            duration_seconds=row.duration_seconds,
            created_at=cls._aware(row.created_at),
            finished_at=cls._aware(row.finished_at) if row.finished_at else None,
        )

    @staticmethod
    def _provider_state(profile: ProviderProfile) -> ProviderState:
        return ProviderState(
            name=profile.name,
            capabilities=sorted(profile.capabilities),
            active_runs=profile.active_runs,
            max_concurrency=profile.max_concurrency,
            available=profile.available,
            rate_limited_until=profile.rate_limited_until,
            latency_p95_seconds=profile.latency_p95_seconds,
            recent_success_rate=profile.recent_success_rate,
            relative_cost=profile.relative_cost,
        )

    @staticmethod
    def _critical_path(tasks: list[TaskRecord]) -> list[UUID]:
        remaining = {task.id: task for task in tasks if task.status != TaskStatus.SUCCEEDED}
        memo: dict[UUID, list[UUID]] = {}

        def longest_to(task_id: UUID, visiting: frozenset[UUID] = frozenset()) -> list[UUID]:
            if task_id in memo:
                return memo[task_id]
            if task_id in visiting or task_id not in remaining:
                return []
            task = remaining[task_id]
            dependency_paths = [
                longest_to(dependency, visiting | {task_id})
                for dependency in task.dependencies
                if dependency in remaining
            ]
            prefix = max(dependency_paths, key=len, default=[])
            memo[task_id] = [*prefix, task_id]
            return memo[task_id]

        return max((longest_to(task_id) for task_id in remaining), key=len, default=[])

    @staticmethod
    def _aware(value: datetime) -> datetime:
        return value if value.tzinfo is not None else value.replace(tzinfo=UTC)
