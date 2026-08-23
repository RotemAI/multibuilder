from __future__ import annotations

from pathlib import Path
from uuid import uuid4

import pytest

from multibuilder.domain import ProjectSpec, ProjectStatus
from multibuilder.resource_guard import HostResourceGuard, ResourceSnapshot
from multibuilder.runtime import SchedulerRuntime, provider_probe_succeeded
from multibuilder.settings import ProviderRuntimeSettings


def project() -> ProjectSpec:
    return ProjectSpec(
        id=uuid4(),
        name="runtime",
        goal="Run unattended",
        repository_url="https://example.test/runtime.git",
        base_branch="main",
        acceptance_criteria=["The scheduler stays active"],
        max_parallelism=4,
    )


def provider() -> ProviderRuntimeSettings:
    return ProviderRuntimeSettings(
        name="codex",
        adapter="codex_cli",
        enabled=True,
        binary="codex",
        model=None,
        reasoning_effort=None,
        capabilities=frozenset({"coding", "reasoning"}),
        strength=1,
        relative_cost=0.3,
        latency_p95_seconds=5,
        recent_success_rate=0.9,
        max_concurrency=4,
    )


class Repository:
    def __init__(self, item: ProjectSpec) -> None:
        self.item = item
        self.providers = []
        self.transitions = []
        self.events = []
        self.milestone_reconciliations = 0

    async def reconcile_milestones(self):
        self.milestone_reconciliations += 1
        return 0

    async def upsert_provider(self, profile, *, adapter, default_model):
        self.providers.append((profile, adapter, default_model))

    async def list_schedulable_projects(self):
        return [self.item]

    async def transition_project(self, project_id, status, *, blocked_reason=None):
        self.transitions.append((project_id, status, blocked_reason))

    async def append_event(self, project_id, event_type, payload, **kwargs):
        self.events.append((project_id, event_type, payload))


class Sources:
    def __init__(self, path: Path, error: Exception | None = None) -> None:
        self.path = path
        self.error = error
        self.calls = 0

    def prepare(self, project_id, repository_url, base_branch):
        self.calls += 1
        if self.error:
            raise self.error
        return self.path


class Orchestrator:
    def __init__(self) -> None:
        self.ticks = 0
        self.shutdowns = 0
        self.shed_reasons = []
        self.reconciliations = 0

    async def tick(self):
        self.ticks += 1

    async def shutdown(self):
        self.shutdowns += 1

    async def shed_one_worker(self, *, reason):
        self.shed_reasons.append(reason)
        return uuid4()

    async def reconcile_deadlocks(self):
        self.reconciliations += 1
        return ()


class IntegrationRuntime:
    def __init__(self) -> None:
        self.ticks = 0

    async def tick(self):
        self.ticks += 1


class ResourceProbe:
    def __init__(self, snapshot: ResourceSnapshot) -> None:
        self.value = snapshot

    def snapshot(self, state_path: Path) -> ResourceSnapshot:
        assert state_path.is_dir()
        return self.value


@pytest.mark.asyncio
async def test_runtime_seeds_provider_capacity_and_runs_a_scheduler_cycle(tmp_path) -> None:
    item = project()
    repository = Repository(item)
    orchestrator = Orchestrator()
    sources = Sources(tmp_path)
    resolved = {}
    runtime = SchedulerRuntime(
        repository=repository,
        orchestrator=orchestrator,
        source_manager=sources,
        source_paths=resolved,
        provider_settings={"codex": provider()},
        provider_probe=lambda configuration: True,
        interval_seconds=1,
    )

    await runtime.seed_providers()
    await runtime.run_cycle()

    assert repository.providers[0][0].available is True
    assert resolved[item.id] == tmp_path
    assert orchestrator.ticks == 1


@pytest.mark.asyncio
async def test_runtime_start_reconciles_persisted_milestones(tmp_path) -> None:
    item = project()
    repository = Repository(item)
    orchestrator = Orchestrator()
    runtime = SchedulerRuntime(
        repository=repository,
        orchestrator=orchestrator,
        source_manager=Sources(tmp_path),
        source_paths={},
        provider_settings={"codex": provider()},
        provider_probe=lambda configuration: True,
        interval_seconds=0.01,
    )

    await runtime.start()
    await runtime.stop()

    assert repository.milestone_reconciliations == 1


@pytest.mark.asyncio
async def test_source_failure_blocks_only_the_affected_project(tmp_path) -> None:
    item = project()
    repository = Repository(item)
    orchestrator = Orchestrator()
    runtime = SchedulerRuntime(
        repository=repository,
        orchestrator=orchestrator,
        source_manager=Sources(tmp_path, RuntimeError("clone failed")),
        source_paths={},
        provider_settings={"codex": provider()},
        provider_probe=lambda configuration: True,
        interval_seconds=1,
    )

    await runtime.run_cycle()

    assert repository.transitions[0][1] is ProjectStatus.BLOCKED
    assert repository.events[0][1] == "scheduler.source_failed"
    assert orchestrator.ticks == 1


@pytest.mark.asyncio
async def test_scheduler_cycle_advances_agent_and_integration_control_planes(tmp_path) -> None:
    item = project()
    repository = Repository(item)
    orchestrator = Orchestrator()
    integration = IntegrationRuntime()
    runtime = SchedulerRuntime(
        repository=repository,
        orchestrator=orchestrator,
        integration_runtime=integration,
        source_manager=Sources(tmp_path),
        source_paths={},
        provider_settings={"codex": provider()},
        provider_probe=lambda configuration: True,
        interval_seconds=1,
    )

    await runtime.run_cycle()

    assert (orchestrator.ticks, integration.ticks, orchestrator.reconciliations) == (1, 1, 1)


@pytest.mark.asyncio
async def test_resource_pressure_defers_all_new_work_before_source_or_integration(tmp_path) -> None:
    item = project()
    repository = Repository(item)
    orchestrator = Orchestrator()
    sources = Sources(tmp_path)
    integration = IntegrationRuntime()
    runtime = SchedulerRuntime(
        repository=repository,
        orchestrator=orchestrator,
        integration_runtime=integration,
        source_manager=sources,
        source_paths={},
        provider_settings={"codex": provider()},
        provider_probe=lambda configuration: True,
        interval_seconds=1,
        resource_guard=HostResourceGuard(),
        resource_probe=ResourceProbe(ResourceSnapshot(8, 50, 2)),
        state_path=tmp_path,
    )

    await runtime.run_cycle()

    assert (sources.calls, orchestrator.ticks, integration.ticks, orchestrator.shed_reasons) == (0, 0, 0, [])
    assert repository.events[-1][1:] == (
        "resource.admission_deferred",
        {
            "action": "defer",
            "reason": "available memory is 8.0%",
            "memory_available_percent": 8,
            "disk_free_percent": 50,
            "load_average_1m": 2,
            "shed_run_id": None,
        },
    )


@pytest.mark.asyncio
async def test_critical_memory_sheds_exactly_one_owned_worker_and_skips_the_cycle(tmp_path) -> None:
    item = project()
    repository = Repository(item)
    orchestrator = Orchestrator()
    sources = Sources(tmp_path)
    runtime = SchedulerRuntime(
        repository=repository,
        orchestrator=orchestrator,
        source_manager=sources,
        source_paths={},
        provider_settings={"codex": provider()},
        provider_probe=lambda configuration: True,
        interval_seconds=1,
        resource_guard=HostResourceGuard(),
        resource_probe=ResourceProbe(ResourceSnapshot(5, 50, 4)),
        state_path=tmp_path,
    )

    await runtime.run_cycle()

    assert (sources.calls, orchestrator.ticks, len(orchestrator.shed_reasons)) == (0, 0, 1)
    assert repository.events[-1][2]["action"] == "shed_one"
    assert repository.events[-1][2]["shed_run_id"] is not None


def test_provider_probe_rejects_a_cli_that_reports_unauthenticated_with_exit_zero() -> None:
    assert provider_probe_succeeded("grok_cli", 0, "You are not authenticated") is False
    assert provider_probe_succeeded("muse_cli", 0, "muse 0.2.1") is True
