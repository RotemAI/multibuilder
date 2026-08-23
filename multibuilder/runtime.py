from __future__ import annotations

import asyncio
import inspect
import os
from collections.abc import Awaitable, Callable, Mapping, MutableMapping, Sequence
from pathlib import Path
from typing import Protocol
from uuid import UUID

from .domain import EventRecord, ProjectSpec, ProjectStatus
from .execution import ExecutionBackend, OpenAIResponsesExecutor, ProviderExecutionSettings, UnifiedProviderExecutor
from .integration import ArgvCommandExecutor, GitMergeBackend, ValidationRunner
from .integration_runtime import AutonomousIntegrationRuntime, load_validation_config
from .orchestrator import Orchestrator
from .process_runner import SubprocessAgentRunner
from .providers import CodexBackend, GrokBackend, MuseBackend, SecretRedactor
from .recovery import Watchdog
from .repository import ControlPlaneRepository
from .resource_guard import HostResourceGuard, ProcResourceProbe, ResourceAction, ResourceSnapshot
from .routing import ProviderRouter
from .scheduler import SchedulingPlanner
from .settings import ProviderRuntimeSettings, RuntimeSettings
from .sources import SourceRepositoryManager
from .worker_runtime import EventNormalizer, PromptBuilder
from .workspaces import WorkspaceManager


class RuntimeRepository(Protocol):
    async def reconcile_milestones(self) -> int: ...

    async def upsert_provider(self, profile, *, adapter: str, default_model: str | None) -> None: ...

    async def list_schedulable_projects(self) -> Sequence[ProjectSpec]: ...

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
    ) -> EventRecord: ...


class RuntimeOrchestrator(Protocol):
    async def tick(self): ...

    async def shutdown(self) -> None: ...

    async def cancel_project_workers(self, project_id: UUID) -> tuple[UUID, ...]: ...

    async def shed_one_worker(self, *, reason: str) -> UUID | None: ...

    async def reconcile_deadlocks(self) -> tuple[UUID, ...]: ...


class RuntimeIntegration(Protocol):
    async def tick(self): ...


class RuntimeSourceManager(Protocol):
    def prepare(self, project_id: UUID, repository_url: str, base_branch: str) -> Path: ...


class RuntimeResourceProbe(Protocol):
    def snapshot(self, state_path: Path) -> ResourceSnapshot: ...


ProviderProbe = Callable[[ProviderRuntimeSettings], bool | Awaitable[bool]]


class SchedulerRuntime:
    def __init__(
        self,
        *,
        repository: RuntimeRepository,
        orchestrator: RuntimeOrchestrator,
        source_manager: RuntimeSourceManager,
        source_paths: MutableMapping[UUID, Path],
        provider_settings: Mapping[str, ProviderRuntimeSettings],
        provider_probe: ProviderProbe,
        interval_seconds: float,
        integration_runtime: RuntimeIntegration | None = None,
        resource_guard: HostResourceGuard | None = None,
        resource_probe: RuntimeResourceProbe | None = None,
        state_path: Path | None = None,
        redact: Callable[[str], str] | None = None,
        close_callbacks: Sequence[Callable[[], Awaitable[None]]] = (),
    ) -> None:
        if interval_seconds <= 0:
            raise ValueError("scheduler interval must be positive")
        self.repository = repository
        self.orchestrator = orchestrator
        self.source_manager = source_manager
        self.source_paths = source_paths
        self.provider_settings = dict(provider_settings)
        self.provider_probe = provider_probe
        self.interval_seconds = interval_seconds
        self.integration_runtime = integration_runtime
        configured_resource_parts = sum(item is not None for item in (resource_guard, resource_probe, state_path))
        if configured_resource_parts not in {0, 3}:
            raise ValueError("resource guard, probe, and state path must be configured together")
        self.resource_guard = resource_guard
        self.resource_probe = resource_probe
        self.state_path = state_path
        self.redact = redact or (lambda value: value)
        self.close_callbacks = tuple(close_callbacks)
        self._stop_event = asyncio.Event()
        self._loop_task: asyncio.Task[None] | None = None

    async def start(self) -> None:
        if self._loop_task is not None:
            return
        await self.repository.reconcile_milestones()
        await self.seed_providers()
        self._stop_event.clear()
        self._loop_task = asyncio.create_task(self._run_loop(), name="multibuilder-scheduler")

    async def stop(self) -> None:
        self._stop_event.set()
        loop_task = self._loop_task
        self._loop_task = None
        if loop_task is not None:
            try:
                await asyncio.wait_for(loop_task, timeout=max(self.interval_seconds + 1, 2))
            except TimeoutError:
                loop_task.cancel()
                await asyncio.gather(loop_task, return_exceptions=True)
        await self.orchestrator.shutdown()
        for close in self.close_callbacks:
            await close()

    async def seed_providers(self) -> None:
        for name in sorted(self.provider_settings):
            configuration = self.provider_settings[name]
            available = False
            if configuration.enabled:
                probe_result = self.provider_probe(configuration)
                available = await probe_result if inspect.isawaitable(probe_result) else probe_result
            await self.repository.upsert_provider(
                configuration.profile(available=bool(available)),
                adapter=configuration.adapter,
                default_model=configuration.model,
            )

    async def cancel_project_workers(self, project_id: UUID) -> tuple[UUID, ...]:
        return await self.orchestrator.cancel_project_workers(project_id)

    async def run_cycle(self) -> None:
        projects = await self.repository.list_schedulable_projects()
        if projects and not await self._resources_allow_work(projects):
            return
        for project in projects:
            if project.id in self.source_paths:
                continue
            try:
                path = await asyncio.to_thread(
                    self.source_manager.prepare,
                    project.id,
                    project.repository_url,
                    project.base_branch,
                )
            except Exception as exc:
                reason = self.redact(f"source preparation failed: {type(exc).__name__}: {exc}")[-4_000:]
                await self.repository.transition_project(
                    project.id,
                    ProjectStatus.BLOCKED,
                    blocked_reason=reason,
                )
                await self.repository.append_event(
                    project.id,
                    "scheduler.source_failed",
                    {"reason": reason},
                    level="error",
                )
                continue
            self.source_paths[project.id] = path
            await self.repository.append_event(
                project.id,
                "scheduler.source_ready",
                {"repository_path": str(path)},
            )
        await self.orchestrator.tick()
        if self.integration_runtime is not None:
            await self.integration_runtime.tick()
        await self.orchestrator.reconcile_deadlocks()

    async def _resources_allow_work(self, projects: Sequence[ProjectSpec]) -> bool:
        if self.resource_guard is None or self.resource_probe is None or self.state_path is None:
            return True
        try:
            snapshot = await asyncio.to_thread(self.resource_probe.snapshot, self.state_path)
            decision = self.resource_guard.decide(snapshot)
        except Exception as exc:
            reason = self.redact(f"host resource probe failed: {type(exc).__name__}: {exc}")[-4_000:]
            for project in projects:
                await self.repository.append_event(
                    project.id,
                    "resource.guard_failed",
                    {"reason": reason},
                    level="error",
                )
            return False
        if decision.action is ResourceAction.ALLOW:
            return True

        shed_run_id = None
        if decision.action is ResourceAction.SHED_ONE:
            shed_run_id = await self.orchestrator.shed_one_worker(reason=decision.reason)
        payload = {
            "action": decision.action.value,
            "reason": decision.reason,
            "memory_available_percent": snapshot.memory_available_percent,
            "disk_free_percent": snapshot.disk_free_percent,
            "load_average_1m": snapshot.load_average_1m,
            "shed_run_id": str(shed_run_id) if shed_run_id else None,
        }
        for project in projects:
            await self.repository.append_event(
                project.id,
                "resource.admission_deferred",
                payload,
                level="warning",
            )
        return False

    async def _run_loop(self) -> None:
        while not self._stop_event.is_set():
            try:
                await self.run_cycle()
            except asyncio.CancelledError:
                raise
            except Exception as exc:
                reason = self.redact(f"scheduler cycle failed: {type(exc).__name__}: {exc}")[-4_000:]
                for project in await self.repository.list_schedulable_projects():
                    await self.repository.append_event(
                        project.id,
                        "scheduler.cycle_failed",
                        {"reason": reason},
                        level="error",
                    )
            try:
                await asyncio.wait_for(self._stop_event.wait(), timeout=self.interval_seconds)
            except TimeoutError:
                pass


async def probe_provider(configuration: ProviderRuntimeSettings) -> bool:
    if not configuration.enabled:
        return False
    if configuration.adapter == "openai_responses":
        return bool(configuration.model and os.environ.get("OPENAI_API_KEY"))
    if not configuration.binary:
        return False
    binary = Path(configuration.binary)
    if not binary.is_file() or not os.access(binary, os.X_OK):
        return False
    arguments = [str(binary), "--version"]
    if configuration.adapter == "codex_cli":
        arguments = [str(binary), "login", "status"]
    elif configuration.adapter == "grok_cli":
        arguments = [str(binary), "models"]
    environment = {
        key: os.environ[key]
        for key in ("PATH", "HOME", "USER", "LOGNAME", "CODEX_HOME", "GROK_HOME", "XDG_CONFIG_HOME")
        if key in os.environ
    }
    environment.update(configuration.worker_environment)
    process = await asyncio.create_subprocess_exec(
        *arguments,
        env=environment,
        stdin=asyncio.subprocess.DEVNULL,
        stdout=asyncio.subprocess.PIPE,
        stderr=asyncio.subprocess.STDOUT,
        start_new_session=True,
    )
    try:
        output, _ = await asyncio.wait_for(process.communicate(), timeout=15)
        return provider_probe_succeeded(
            configuration.adapter,
            int(process.returncode or 0),
            output.decode("utf-8", errors="replace")[-8_000:],
        )
    except TimeoutError:
        try:
            os.killpg(process.pid, 15)
        except ProcessLookupError:
            pass
        await process.wait()
        return False


def provider_probe_succeeded(adapter: str, returncode: int, output: str) -> bool:
    if returncode != 0:
        return False
    normalized = output.casefold()
    authentication_failures = (
        "not authenticated",
        "not logged in",
        "authentication required",
        "invalid api key",
        "unauthorized",
    )
    return not any(message in normalized for message in authentication_failures)


def build_runtime(settings: RuntimeSettings, repository: ControlPlaneRepository) -> SchedulerRuntime:
    state_root = settings.state_root
    state_root.mkdir(mode=0o700, parents=True, exist_ok=True)
    os.chmod(state_root, 0o700)
    redactor = SecretRedactor(
        [
            settings.admin_token,
            settings.cookie_signing_secret,
            *([settings.openai_api_key] if settings.openai_api_key else []),
        ]
    )
    normalizer = EventNormalizer(redactor)
    process_runner = SubprocessAgentRunner(normalizer=normalizer)
    backends: dict[str, ExecutionBackend] = {}
    execution_settings = {}
    for name, configuration in settings.providers.items():
        if not configuration.enabled or configuration.adapter == "openai_responses":
            continue
        if configuration.adapter == "codex_cli":
            backends[name] = CodexBackend(binary=configuration.binary or "codex")
        elif configuration.adapter == "muse_cli":
            backends[name] = MuseBackend(binary=configuration.binary or "muse")
        elif configuration.adapter == "grok_cli":
            backends[name] = GrokBackend(binary=configuration.binary or "grok")
        execution_settings[name] = ProviderExecutionSettings(
            reasoning_effort=configuration.reasoning_effort,
            environment=configuration.worker_environment,
        )

    remote_executors = {}
    close_callbacks = []
    openai_configuration = settings.providers.get("openai")
    if openai_configuration and openai_configuration.enabled and settings.openai_api_key and openai_configuration.model:
        openai_executor = OpenAIResponsesExecutor(
            api_key=settings.openai_api_key,
            redactor=redactor,
        )
        remote_executors["openai"] = openai_executor
        close_callbacks.append(openai_executor.aclose)

    executor = UnifiedProviderExecutor(
        artifact_root=state_root / "artifacts",
        process_runner=process_runner,
        backends=backends,
        settings=execution_settings,
        remote_executors=remote_executors,
        normalizer=normalizer,
    )
    source_paths: dict[UUID, Path] = {}
    source_manager = SourceRepositoryManager(state_root, allowed_hosts=settings.git_allowed_hosts)

    def resolve_repository(project: ProjectSpec) -> Path:
        try:
            return source_paths[project.id]
        except KeyError as exc:
            raise RuntimeError("project source is not prepared") from exc

    orchestrator = Orchestrator(
        repository=repository,
        planner=SchedulingPlanner(ProviderRouter()),
        workspace_manager=WorkspaceManager(state_root / "worktrees"),
        executor=executor,
        prompt_builder=PromptBuilder(),
        watchdog=Watchdog(heartbeat_timeout_seconds=90, progress_timeout_seconds=900),
        repository_resolver=resolve_repository,
        global_max_parallelism=settings.global_max_parallelism,
    )
    integration_runtime = AutonomousIntegrationRuntime(
        repository=repository,
        validation_runner=ValidationRunner(ArgvCommandExecutor()),
        merge_backend=GitMergeBackend(),
        repository_resolver=resolve_repository,
        validation_config_resolver=load_validation_config,
    )
    return SchedulerRuntime(
        repository=repository,
        orchestrator=orchestrator,
        source_manager=source_manager,
        source_paths=source_paths,
        provider_settings=settings.providers,
        provider_probe=probe_provider,
        interval_seconds=settings.scheduler_interval_seconds,
        integration_runtime=integration_runtime,
        resource_guard=HostResourceGuard(),
        resource_probe=ProcResourceProbe(),
        state_path=state_root,
        redact=redactor.redact,
        close_callbacks=close_callbacks,
    )


__all__ = ["SchedulerRuntime", "build_runtime", "probe_provider", "provider_probe_succeeded"]
