from datetime import UTC, datetime, timedelta
from uuid import uuid4

import pytest

from multibuilder.domain import TaskSpec, TaskType
from multibuilder.routing import ProviderProfile, ProviderRouter, RoutingUnavailable


def make_task(task_type: TaskType, *, preferred: list[str] | None = None) -> TaskSpec:
    return TaskSpec(
        id=uuid4(),
        project_id=uuid4(),
        parent_task_id=None,
        task_type=task_type,
        goal="Complete the assigned slice",
        instructions="Work only inside the declared scope.",
        dependencies=[],
        write_scope=["src/**"],
        acceptance_criteria=["The focused tests pass"],
        preferred_capabilities=["coding"],
        preferred_providers=preferred or [],
        timeout_seconds=900,
        retry_limit=2,
    )


def profile(
    name: str,
    *,
    strength: float,
    cost: float,
    latency: float,
    active: int = 0,
    maximum: int = 8,
    success: float = 0.95,
    rate_limited_until: datetime | None = None,
) -> ProviderProfile:
    return ProviderProfile(
        name=name,
        capabilities=frozenset({"coding", "reasoning"}),
        strength=strength,
        relative_cost=cost,
        latency_p95_seconds=latency,
        recent_success_rate=success,
        active_runs=active,
        max_concurrency=maximum,
        available=True,
        rate_limited_until=rate_limited_until,
    )


def test_director_routes_to_the_strongest_healthy_provider() -> None:
    providers = [
        profile("muse", strength=0.58, cost=0.1, latency=1.0),
        profile("codex", strength=0.98, cost=0.8, latency=5.0),
    ]

    decision = ProviderRouter().select(make_task(TaskType.DIRECTOR), providers)

    assert decision.provider == "codex"


def test_mechanical_work_prefers_a_fast_cheap_capable_provider() -> None:
    providers = [
        profile("muse", strength=0.72, cost=0.1, latency=1.0),
        profile("codex", strength=0.98, cost=0.9, latency=7.0),
    ]

    decision = ProviderRouter().select(make_task(TaskType.IMPLEMENTATION), providers)

    assert decision.provider == "muse"


def test_rate_limited_and_saturated_providers_are_not_selected() -> None:
    now = datetime.now(UTC)
    providers = [
        profile("muse", strength=0.7, cost=0.1, latency=1.0, rate_limited_until=now + timedelta(minutes=2)),
        profile("openai", strength=0.9, cost=0.5, latency=3.0, active=4, maximum=4),
        profile("grok", strength=0.84, cost=0.4, latency=2.0),
    ]

    decision = ProviderRouter().select(make_task(TaskType.REPAIR), providers, now=now)

    assert decision.provider == "grok"


def test_review_can_exclude_the_implementation_provider() -> None:
    providers = [
        profile("codex", strength=0.98, cost=0.8, latency=5.0),
        profile("grok", strength=0.9, cost=0.6, latency=3.0),
    ]

    decision = ProviderRouter().select(
        make_task(TaskType.REVIEW),
        providers,
        excluded_providers={"codex"},
    )

    assert decision.provider == "grok"


def test_router_fails_closed_when_no_provider_is_eligible() -> None:
    providers = [profile("muse", strength=0.7, cost=0.1, latency=1.0, active=1, maximum=1)]

    with pytest.raises(RoutingUnavailable):
        ProviderRouter().select(make_task(TaskType.TEST), providers)


def test_unknown_preferred_capability_is_soft_and_does_not_deadlock_the_dag() -> None:
    task = make_task(TaskType.IMPLEMENTATION).model_copy(
        update={"preferred_capabilities": ["framework-specific-specialist"]}
    )

    decision = ProviderRouter().select(
        task,
        [profile("muse", strength=0.7, cost=0.1, latency=1.0)],
    )

    assert decision.provider == "muse"
