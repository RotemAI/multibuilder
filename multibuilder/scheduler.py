from __future__ import annotations

from collections.abc import Mapping, Sequence
from dataclasses import dataclass, replace

from .domain import TaskRecord
from .routing import ProviderProfile, ProviderRouter, RouteDecision, RoutingUnavailable
from .scopes import find_scope_conflict


@dataclass(frozen=True, slots=True)
class Assignment:
    task: TaskRecord
    route: RouteDecision


@dataclass(frozen=True, slots=True)
class DeferredTask:
    task: TaskRecord
    reason: str


@dataclass(frozen=True, slots=True)
class SchedulingPlan:
    assignments: tuple[Assignment, ...]
    deferred: tuple[DeferredTask, ...]


class SchedulingPlanner:
    def __init__(self, router: ProviderRouter) -> None:
        self.router = router

    def plan(
        self,
        tasks: Sequence[TaskRecord],
        providers: Sequence[ProviderProfile],
        *,
        active_scopes: Mapping[str, Sequence[str]],
        available_slots: int,
        provider_exclusions: Mapping[str, set[str]] | None = None,
    ) -> SchedulingPlan:
        remaining_slots = max(available_slots, 0)
        provider_state = {provider.name: provider for provider in providers}
        reserved_scopes = dict(active_scopes)
        exclusions = provider_exclusions or {}
        assignments: list[Assignment] = []
        deferred: list[DeferredTask] = []

        ordered = sorted(tasks, key=lambda task: (-task.priority, task.created_at, str(task.id)))
        for task in ordered:
            if remaining_slots == 0:
                deferred.append(DeferredTask(task, "no project or global worker slot is available"))
                continue
            conflict = find_scope_conflict(task.write_scope, reserved_scopes)
            if conflict:
                deferred.append(DeferredTask(task, f"write scope conflicts with active task {conflict}"))
                continue
            try:
                route = self.router.select(
                    task,
                    provider_state.values(),
                    excluded_providers=exclusions.get(str(task.id), set()),
                )
            except RoutingUnavailable as exc:
                deferred.append(DeferredTask(task, str(exc)))
                continue

            assignments.append(Assignment(task, route))
            remaining_slots -= 1
            reserved_scopes[str(task.id)] = task.write_scope
            selected = provider_state[route.provider]
            provider_state[route.provider] = replace(selected, active_runs=selected.active_runs + 1)

        return SchedulingPlan(tuple(assignments), tuple(deferred))
