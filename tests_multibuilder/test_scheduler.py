from datetime import UTC, datetime
from uuid import uuid4

from multibuilder.domain import TaskRecord, TaskStatus, TaskType
from multibuilder.routing import ProviderProfile, ProviderRouter
from multibuilder.scheduler import SchedulingPlanner


def task(goal: str, scope: list[str], priority: int) -> TaskRecord:
    now = datetime.now(UTC)
    return TaskRecord(
        id=uuid4(),
        project_id=uuid4(),
        parent_task_id=None,
        task_type=TaskType.IMPLEMENTATION,
        goal=goal,
        instructions="Implement the assigned slice.",
        dependencies=[],
        write_scope=scope,
        acceptance_criteria=["Focused tests pass"],
        preferred_capabilities=["coding"],
        preferred_providers=[],
        timeout_seconds=900,
        retry_limit=2,
        status=TaskStatus.READY,
        priority=priority,
        retry_count=0,
        assigned_provider=None,
        assigned_model=None,
        blocked_reason=None,
        result=None,
        created_at=now,
        updated_at=now,
    )


def provider(name: str, *, active=0, maximum=4) -> ProviderProfile:
    return ProviderProfile(
        name=name,
        capabilities=frozenset({"coding", "reasoning"}),
        strength=0.8,
        relative_cost=0.2,
        latency_p95_seconds=2,
        recent_success_rate=0.95,
        active_runs=active,
        max_concurrency=maximum,
        available=True,
    )


def test_planner_uses_parallel_slots_without_overlapping_write_scopes() -> None:
    api = task("API", ["src/api/**"], 30)
    frontend = task("Frontend", ["src/frontend/**"], 20)
    conflicting_api = task("Second API", ["src/api/routes.py"], 10)

    plan = SchedulingPlanner(ProviderRouter()).plan(
        [api, frontend, conflicting_api],
        [provider("muse")],
        active_scopes={},
        available_slots=3,
    )

    assert [assignment.task.id for assignment in plan.assignments] == [api.id, frontend.id]


def test_planner_honors_global_and_project_capacity() -> None:
    tasks = [task("One", ["one/**"], 3), task("Two", ["two/**"], 2)]

    plan = SchedulingPlanner(ProviderRouter()).plan(
        tasks,
        [provider("muse")],
        active_scopes={},
        available_slots=1,
    )

    assert len(plan.assignments) == 1


def test_planner_accounts_for_capacity_consumed_within_the_same_tick() -> None:
    tasks = [task("One", ["one/**"], 3), task("Two", ["two/**"], 2)]

    plan = SchedulingPlanner(ProviderRouter()).plan(
        tasks,
        [provider("muse", maximum=1)],
        active_scopes={},
        available_slots=2,
    )

    assert [assignment.task.goal for assignment in plan.assignments] == ["One"]


def test_planner_load_balances_dozen_scale_parallel_work_without_oversubscription() -> None:
    tasks = [task(f"Slice {index}", [f"src/slice-{index}/**"], 100 - index) for index in range(48)]
    providers = [provider(f"provider-{index}", maximum=12) for index in range(4)]

    plan = SchedulingPlanner(ProviderRouter()).plan(
        tasks,
        providers,
        active_scopes={},
        available_slots=48,
    )

    assignments_by_provider = {
        name: sum(assignment.route.provider == name for assignment in plan.assignments)
        for name in (provider.name for provider in providers)
    }
    assert len(plan.assignments) == 48
    assert assignments_by_provider == {f"provider-{index}": 12 for index in range(4)}
