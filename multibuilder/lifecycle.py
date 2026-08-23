from __future__ import annotations

from collections.abc import Callable
from dataclasses import dataclass
from datetime import UTC, datetime
from typing import Protocol
from uuid import UUID

from .domain import ProjectSnapshot, ProjectStatus, RunStatus


class LifecycleUnavailable(RuntimeError):
    pass


class LifecycleRepository(Protocol):
    async def pause_project(self, project_id: UUID) -> ProjectStatus: ...

    async def resume_project(self, project_id: UUID) -> ProjectStatus: ...

    async def begin_project_cancellation(self, project_id: UUID, *, at: datetime) -> ProjectStatus: ...

    async def finalize_project_cancellation(self, project_id: UUID, *, at: datetime) -> dict[str, int]: ...

    async def get_project_snapshot(self, project_id: UUID) -> ProjectSnapshot: ...


class ProjectWorkers(Protocol):
    async def cancel_project_workers(self, project_id: UUID) -> tuple[UUID, ...]: ...


@dataclass(frozen=True, slots=True)
class ProjectLifecycleResult:
    project_id: UUID
    status: ProjectStatus
    runs_cancelled: int = 0
    tasks_cancelled: int = 0
    merge_items_cancelled: int = 0


class ProjectLifecycleService:
    def __init__(
        self,
        *,
        repository: LifecycleRepository,
        workers: ProjectWorkers | None,
        clock: Callable[[], datetime] | None = None,
    ) -> None:
        self.repository = repository
        self.workers = workers
        self.clock = clock or (lambda: datetime.now(UTC))

    async def pause(self, project_id: UUID) -> ProjectLifecycleResult:
        status = await self.repository.pause_project(project_id)
        return ProjectLifecycleResult(project_id, status)

    async def resume(self, project_id: UUID) -> ProjectLifecycleResult:
        status = await self.repository.resume_project(project_id)
        return ProjectLifecycleResult(project_id, status)

    async def cancel(self, project_id: UUID) -> ProjectLifecycleResult:
        await self.repository.begin_project_cancellation(project_id, at=self.clock())
        snapshot = await self.repository.get_project_snapshot(project_id)
        active_runs = [run for run in snapshot.runs if run.status in {RunStatus.STARTING, RunStatus.RUNNING}]
        if active_runs:
            if self.workers is None:
                raise LifecycleUnavailable("active project workers cannot be stopped by this runtime")
            await self.workers.cancel_project_workers(project_id)
        counts = await self.repository.finalize_project_cancellation(project_id, at=self.clock())
        return ProjectLifecycleResult(project_id, ProjectStatus.CANCELLED, **counts)


__all__ = [
    "LifecycleUnavailable",
    "ProjectLifecycleResult",
    "ProjectLifecycleService",
    "ProjectWorkers",
]
