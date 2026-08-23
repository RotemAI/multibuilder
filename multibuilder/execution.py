from __future__ import annotations

import asyncio
import inspect
import json
import os
import signal
import time
from collections.abc import Mapping
from dataclasses import dataclass
from pathlib import Path
from typing import Any, Protocol

import httpx

from .orchestrator import EventHandler, ExecutionRequest
from .process_runner import RunOutcome
from .providers import OpenAIBackend, ProviderLaunch, SecretRedactor
from .worker_runtime import EventNormalizer, NormalizedEvent


class DurableProcessRegistry:
    def __init__(self, state_directory: Path) -> None:
        self.state_directory = state_directory.resolve()
        self.state_directory.mkdir(mode=0o700, parents=True, exist_ok=True)
        os.chmod(self.state_directory, 0o700)
        self.path = self.state_directory / "process-registry.json"
        self._records = self._load()

    def record(self, pid: int, run_id) -> bool:
        identity = self._identity(pid)
        if identity is None or str(run_id) not in self._run_ids(pid):
            return False
        self._records[str(pid)] = {"run_id": str(run_id), "start_time": identity}
        self._persist()
        return True

    def owns(self, pid: int) -> bool:
        record = self._records.get(str(pid))
        if not isinstance(record, dict):
            return False
        if self._identity(pid) != record.get("start_time"):
            return False
        return str(record.get("run_id")) in self._run_ids(pid)

    def forget(self, pid: int) -> None:
        if self._records.pop(str(pid), None) is not None:
            self._persist()

    def terminate(self, pid: int) -> bool:
        if not self.owns(pid):
            self.forget(pid)
            return False
        try:
            os.killpg(pid, signal.SIGTERM)
        except ProcessLookupError:
            self.forget(pid)
            return True
        deadline = time.monotonic() + 5
        while self.owns(pid) and time.monotonic() < deadline:
            time.sleep(0.05)
        if self.owns(pid):
            try:
                os.killpg(pid, signal.SIGKILL)
            except ProcessLookupError:
                pass
            kill_deadline = time.monotonic() + 2
            while self.owns(pid) and time.monotonic() < kill_deadline:
                time.sleep(0.05)
        exited = not self.owns(pid)
        self.forget(pid)
        return exited

    def _load(self) -> dict[str, dict[str, str]]:
        try:
            value = json.loads(self.path.read_text(encoding="utf-8"))
        except (FileNotFoundError, OSError, json.JSONDecodeError):
            return {}
        if not isinstance(value, dict):
            return {}
        return {
            str(pid): record
            for pid, record in value.items()
            if isinstance(record, dict)
            and isinstance(record.get("run_id"), str)
            and isinstance(record.get("start_time"), str)
        }

    def _persist(self) -> None:
        temporary = self.path.with_name(f"{self.path.name}.tmp-{os.getpid()}")
        descriptor = os.open(temporary, os.O_WRONLY | os.O_CREAT | os.O_TRUNC, 0o600)
        with os.fdopen(descriptor, "w", encoding="utf-8") as handle:
            json.dump(self._records, handle, separators=(",", ":"), sort_keys=True)
        os.replace(temporary, self.path)
        os.chmod(self.path, 0o600)

    @staticmethod
    def _identity(pid: int) -> str | None:
        try:
            raw = Path(f"/proc/{pid}/stat").read_text(encoding="utf-8")
            fields = raw.rsplit(")", 1)[1].strip().split()
            if fields[0] == "Z":
                return None
            return fields[19]
        except (FileNotFoundError, IndexError, OSError):
            return None

    @staticmethod
    def _run_ids(pid: int) -> set[str]:
        try:
            values = Path(f"/proc/{pid}/environ").read_bytes().split(b"\0")
        except (FileNotFoundError, OSError, PermissionError):
            return set()
        prefix = b"MULTIBUILDER_RUN_ID="
        return {
            value[len(prefix) :].decode("utf-8", errors="strict")
            for value in values
            if value.startswith(prefix)
        }


class ExecutionBackend(Protocol):
    def build_command(self, launch: ProviderLaunch): ...


class ProcessRunner(Protocol):
    async def run(
        self,
        provider: str,
        command,
        *,
        on_event,
        timeout_seconds: float,
        environment: Mapping[str, str] | None = None,
    ) -> RunOutcome: ...


class RemoteExecutor(Protocol):
    async def execute(self, request: ExecutionRequest, *, on_event: EventHandler) -> RunOutcome: ...


@dataclass(frozen=True, slots=True)
class ProviderExecutionSettings:
    reasoning_effort: str | None
    environment: Mapping[str, str] | None = None

    def safe_environment(self) -> dict[str, str]:
        return dict(self.environment or {})


class UnifiedProviderExecutor:
    def __init__(
        self,
        *,
        artifact_root: Path,
        process_runner: ProcessRunner,
        backends: Mapping[str, ExecutionBackend],
        settings: Mapping[str, ProviderExecutionSettings],
        remote_executors: Mapping[str, RemoteExecutor] | None = None,
        normalizer: EventNormalizer | None = None,
        process_registry: DurableProcessRegistry | None = None,
    ) -> None:
        self.artifact_root = artifact_root.resolve()
        self.process_runner = process_runner
        self.backends = dict(backends)
        self.settings = dict(settings)
        self.remote_executors = dict(remote_executors or {})
        self.normalizer = normalizer
        self.process_registry = process_registry or DurableProcessRegistry(self.artifact_root / "runtime")
        self._active_pids: set[int] = set()

    async def execute(self, request: ExecutionRequest, *, on_event: EventHandler) -> RunOutcome:
        remote = self.remote_executors.get(request.provider)
        if remote is not None:
            return await remote.execute(request, on_event=on_event)
        backend = self.backends.get(request.provider)
        configuration = self.settings.get(request.provider)
        if backend is None or configuration is None:
            raise ValueError(f"provider backend is not configured: {request.provider}")
        artifact_directory = self._artifact_directory(request)
        prompt_file = artifact_directory / "prompt.txt"
        schema_file = artifact_directory / "result-schema.json"
        self._write_private(prompt_file, request.prompt)
        self._write_private(schema_file, json.dumps(request.result_schema, indent=2, sort_keys=True))
        launch = ProviderLaunch(
            source_repository=request.workspace.repository_path,
            workspace=request.workspace.path,
            prompt_file=prompt_file,
            result_schema_file=schema_file,
            model=request.model,
            reasoning_effort=configuration.reasoning_effort,
            timeout_seconds=request.timeout_seconds,
        )
        command = backend.build_command(launch)

        async def observe(event: NormalizedEvent) -> None:
            if event.event_type == "run.process_started":
                pid = event.payload.get("pid")
                if isinstance(pid, int) and pid > 1:
                    self._active_pids.add(pid)
                    self.process_registry.record(pid, request.run.id)
            callback_result = on_event(event)
            if inspect.isawaitable(callback_result):
                await callback_result

        try:
            return await self.process_runner.run(
                request.provider,
                command,
                on_event=observe,
                timeout_seconds=request.timeout_seconds,
                environment={
                    **configuration.safe_environment(),
                    "MULTIBUILDER_RUN_ID": str(request.run.id),
                },
            )
        finally:
            completed_pids = {pid for pid in self._active_pids if not self._process_exists(pid)}
            self._active_pids.difference_update(completed_pids)
            for pid in completed_pids:
                self.process_registry.forget(pid)

    async def is_process_alive(self, pid: int) -> bool:
        return (pid in self._active_pids and self._process_exists(pid)) or self.process_registry.owns(pid)

    async def terminate_process(self, pid: int) -> None:
        if pid in self._active_pids and not self.process_registry.owns(pid):
            try:
                os.killpg(pid, signal.SIGTERM)
            except ProcessLookupError:
                pass
        else:
            await asyncio.to_thread(self.process_registry.terminate, pid)
        self._active_pids.discard(pid)

    def _artifact_directory(self, request: ExecutionRequest) -> Path:
        directory = self.artifact_root / request.project.id.hex / request.run.id.hex
        resolved = directory.resolve(strict=False)
        if resolved == self.artifact_root or self.artifact_root not in resolved.parents:
            raise ValueError("run artifact path escapes the configured root")
        resolved.mkdir(mode=0o700, parents=True, exist_ok=True)
        os.chmod(resolved, 0o700)
        return resolved

    @staticmethod
    def _write_private(path: Path, content: str) -> None:
        flags = os.O_WRONLY | os.O_CREAT | os.O_TRUNC
        if hasattr(os, "O_NOFOLLOW"):
            flags |= os.O_NOFOLLOW
        descriptor = os.open(path, flags, 0o600)
        try:
            with os.fdopen(descriptor, "w", encoding="utf-8") as handle:
                handle.write(content)
        finally:
            if not getattr(locals().get("handle"), "closed", True):
                os.close(descriptor)
        os.chmod(path, 0o600)

    @staticmethod
    def _process_exists(pid: int) -> bool:
        try:
            os.kill(pid, 0)
        except (ProcessLookupError, PermissionError):
            return False
        return True


class OpenAIResponsesExecutor:
    def __init__(
        self,
        *,
        api_key: str,
        client: httpx.AsyncClient | None = None,
        backend: OpenAIBackend | None = None,
        redactor: SecretRedactor | None = None,
        reasoning_effort: str | None = None,
    ) -> None:
        if not api_key:
            raise ValueError("an OpenAI API key is required")
        self.api_key = api_key
        self.backend = backend or OpenAIBackend()
        self.redactor = redactor or SecretRedactor([api_key])
        self.reasoning_effort = reasoning_effort
        self.client = client or httpx.AsyncClient(base_url=self.backend.base_url, timeout=120)
        self._owns_client = client is None

    async def execute(self, request: ExecutionRequest, *, on_event: EventHandler) -> RunOutcome:
        started = time.monotonic()

        async def emit(event: NormalizedEvent) -> None:
            callback_result = on_event(event)
            if inspect.isawaitable(callback_result):
                await callback_result

        await emit(NormalizedEvent("run.process_started", {"provider": "openai", "pid": 0}))
        launch = ProviderLaunch(
            source_repository=request.workspace.repository_path,
            workspace=request.workspace.path,
            prompt_file=Path("prompt.txt"),
            result_schema_file=Path("result-schema.json"),
            model=request.model,
            reasoning_effort=self.reasoning_effort,
            timeout_seconds=request.timeout_seconds,
        )
        body = self.backend.build_request(
            launch,
            prompt=request.prompt,
            schema=request.result_schema,
        )
        response = await self.client.post(
            "/responses",
            json=body,
            headers={"Authorization": f"Bearer {self.api_key}", "Content-Type": "application/json"},
            timeout=request.timeout_seconds,
        )
        if response.status_code >= 400:
            detail = self.redactor.redact(response.text)[-2_000:]
            event_type = "rate_limit.observed" if response.status_code == 429 else "provider.http_error"
            await emit(
                NormalizedEvent(
                    event_type,
                    {"provider": "openai", "status_code": response.status_code, "detail": detail},
                    "error",
                )
            )
            return RunOutcome(
                pid=0,
                returncode=1,
                timed_out=False,
                stdout_lines=(),
                stderr_lines=(f"OpenAI Responses API returned HTTP {response.status_code}: {detail}",),
                duration_seconds=time.monotonic() - started,
            )

        raw_payload = response.json()
        payload = self.redactor.redact_value(raw_payload)
        response_id = payload.get("id") if isinstance(payload, dict) else None
        await emit(NormalizedEvent("run.session_started", {"provider": "openai", "session_id": response_id}))
        if isinstance(payload, dict) and payload.get("usage"):
            await emit(NormalizedEvent("usage.reported", payload["usage"]))
        await emit(
            NormalizedEvent(
                "run.provider_completed",
                {"provider": "openai", "response_id": response_id, "status": payload.get("status")},
            )
        )
        output_text = self._output_text(payload)
        lines = [json.dumps(payload, separators=(",", ":"))]
        if output_text:
            lines.append(output_text)
        return RunOutcome(
            pid=0,
            returncode=0,
            timed_out=False,
            stdout_lines=tuple(lines),
            stderr_lines=(),
            duration_seconds=time.monotonic() - started,
        )

    async def aclose(self) -> None:
        if self._owns_client:
            await self.client.aclose()

    @classmethod
    def _output_text(cls, value: Any) -> str | None:
        if isinstance(value, dict):
            if value.get("type") == "output_text" and isinstance(value.get("text"), str):
                return value["text"]
            if isinstance(value.get("output_text"), str):
                return value["output_text"]
            for child in value.values():
                found = cls._output_text(child)
                if found:
                    return found
        elif isinstance(value, list):
            for child in value:
                found = cls._output_text(child)
                if found:
                    return found
        return None


__all__ = [
    "DurableProcessRegistry",
    "OpenAIResponsesExecutor",
    "ProviderExecutionSettings",
    "UnifiedProviderExecutor",
]
