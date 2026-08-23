from __future__ import annotations

from collections.abc import Iterable
from dataclasses import dataclass
from datetime import UTC, datetime

from .domain import TaskSpec, TaskType


class RoutingUnavailable(RuntimeError):
    """Raised when no provider can safely accept a task."""


@dataclass(frozen=True, slots=True)
class ProviderProfile:
    name: str
    capabilities: frozenset[str]
    strength: float
    relative_cost: float
    latency_p95_seconds: float
    recent_success_rate: float
    active_runs: int
    max_concurrency: int
    available: bool
    rate_limited_until: datetime | None = None


@dataclass(frozen=True, slots=True)
class RouteDecision:
    provider: str
    score: float
    reason: str


class ProviderRouter:
    _REASONING_CRITICAL = {
        TaskType.DIRECTOR,
        TaskType.WORKSTREAM_LEAD,
        TaskType.REVIEW,
        TaskType.REPAIR,
        TaskType.INTEGRATION,
        TaskType.DEPLOYMENT,
    }

    def select(
        self,
        task: TaskSpec,
        providers: Iterable[ProviderProfile],
        *,
        excluded_providers: set[str] | None = None,
        now: datetime | None = None,
    ) -> RouteDecision:
        current_time = now or datetime.now(UTC)
        excluded = excluded_providers or set()
        eligible: list[tuple[float, ProviderProfile]] = []

        for provider in providers:
            if not self._eligible(task, provider, excluded, current_time):
                continue
            eligible.append((self._score(task, provider), provider))

        if not eligible:
            raise RoutingUnavailable("no healthy provider has the required capability and capacity")

        score, selected = max(eligible, key=lambda candidate: (candidate[0], candidate[1].name))
        return RouteDecision(
            provider=selected.name,
            score=round(score, 6),
            reason=(
                f"selected from {len(eligible)} eligible providers using capability, quality, "
                "capacity, latency, cost, and recent reliability"
            ),
        )

    @staticmethod
    def _eligible(
        task: TaskSpec,
        provider: ProviderProfile,
        excluded: set[str],
        now: datetime,
    ) -> bool:
        if provider.name in excluded or not provider.available:
            return False
        if provider.max_concurrency <= 0 or provider.active_runs >= provider.max_concurrency:
            return False
        if provider.rate_limited_until is not None and provider.rate_limited_until > now:
            return False
        return True

    def _score(self, task: TaskSpec, provider: ProviderProfile) -> float:
        latency_score = 1 / (1 + max(provider.latency_p95_seconds, 0) / 5)
        cost_score = 1 - min(max(provider.relative_cost, 0), 1)
        capacity_score = 1 - (provider.active_runs / provider.max_concurrency)
        preferred_bonus = 0.08 if provider.name in task.preferred_providers else 0
        requested_capabilities = set(task.preferred_capabilities)
        capability_score = (
            len(requested_capabilities.intersection(provider.capabilities))
            / len(requested_capabilities)
            if requested_capabilities
            else 1
        )

        if task.task_type in self._REASONING_CRITICAL:
            return (
                provider.strength * 0.57
                + provider.recent_success_rate * 0.21
                + capability_score * 0.08
                + capacity_score * 0.07
                + latency_score * 0.04
                + cost_score * 0.03
                + preferred_bonus
            )

        return (
            provider.strength * 0.2
            + provider.recent_success_rate * 0.2
            + capability_score * 0.1
            + capacity_score * 0.14
            + latency_score * 0.18
            + cost_score * 0.18
            + preferred_bonus
        )
