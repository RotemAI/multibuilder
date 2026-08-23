from __future__ import annotations

import asyncio
import inspect
import os
import signal
import time
from collections.abc import Awaitable, Callable, Mapping
from dataclasses import dataclass

from .providers import ProviderCommand
from .worker_runtime import EventNormalizer, NormalizedEvent

EventCallback = Callable[[NormalizedEvent], Awaitable[None] | None]


@dataclass(frozen=True, slots=True)
class RunOutcome:
    pid: int
    returncode: int
    timed_out: bool
    stdout_lines: tuple[str, ...]
    stderr_lines: tuple[str, ...]
    duration_seconds: float


class SubprocessAgentRunner:
    _INHERITED_ENVIRONMENT = (
        "PATH",
        "HOME",
        "USER",
        "LOGNAME",
        "LANG",
        "LC_ALL",
        "TERM",
        "TMPDIR",
        "CODEX_HOME",
        "GROK_HOME",
        "XDG_CONFIG_HOME",
        "XDG_DATA_HOME",
        "SSL_CERT_FILE",
        "SSL_CERT_DIR",
        "HTTP_PROXY",
        "HTTPS_PROXY",
        "NO_PROXY",
    )

    def __init__(self, *, normalizer: EventNormalizer, heartbeat_interval_seconds: float = 10) -> None:
        self.normalizer = normalizer
        self.heartbeat_interval_seconds = heartbeat_interval_seconds

    async def run(
        self,
        provider: str,
        command: ProviderCommand,
        *,
        on_event: EventCallback,
        timeout_seconds: float,
        environment: Mapping[str, str] | None = None,
    ) -> RunOutcome:
        started = time.monotonic()
        child_environment = {
            key: os.environ[key]
            for key in self._INHERITED_ENVIRONMENT
            if key in os.environ
        }
        child_environment.update(environment or {})
        stdin_target = asyncio.subprocess.PIPE if command.stdin_file else asyncio.subprocess.DEVNULL
        process = await asyncio.create_subprocess_exec(
            *command.argv,
            cwd=command.cwd,
            env=child_environment,
            stdin=stdin_target,
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE,
            start_new_session=True,
        )
        stdout_lines: list[str] = []
        stderr_lines: list[str] = []

        async def emit(event: NormalizedEvent) -> None:
            result = on_event(event)
            if inspect.isawaitable(result):
                await result

        await emit(
            NormalizedEvent(
                "run.process_started",
                {"provider": provider, "pid": process.pid},
            )
        )

        if command.stdin_file and process.stdin:
            process.stdin.write(command.stdin_file.read_bytes())
            await process.stdin.drain()
            process.stdin.close()

        async def read_stdout() -> None:
            assert process.stdout is not None
            while line := await process.stdout.readline():
                decoded = line.decode("utf-8", errors="replace").rstrip("\r\n")
                stdout_lines.append(decoded)
                for event in self.normalizer.normalize(provider, decoded):
                    await emit(event)

        async def read_stderr() -> None:
            assert process.stderr is not None
            while line := await process.stderr.readline():
                decoded = line.decode("utf-8", errors="replace").rstrip("\r\n")
                sanitized = self.normalizer.redactor.redact(decoded)
                stderr_lines.append(sanitized)
                await emit(NormalizedEvent("provider.stderr", {"provider": provider, "text": sanitized}, "warning"))

        async def heartbeat() -> None:
            while process.returncode is None:
                await asyncio.sleep(self.heartbeat_interval_seconds)
                if process.returncode is None:
                    await emit(NormalizedEvent("run.heartbeat", {"provider": provider, "pid": process.pid}))

        readers = [asyncio.create_task(read_stdout()), asyncio.create_task(read_stderr())]
        heartbeat_task = asyncio.create_task(heartbeat())
        timed_out = False
        try:
            await asyncio.wait_for(process.wait(), timeout=timeout_seconds)
        except TimeoutError:
            timed_out = True
            await self._terminate_process_group(process)
        except asyncio.CancelledError:
            await self._terminate_process_group(process)
            raise
        finally:
            await asyncio.gather(*readers, return_exceptions=True)
            heartbeat_task.cancel()
            await asyncio.gather(heartbeat_task, return_exceptions=True)

        return RunOutcome(
            pid=process.pid,
            returncode=int(process.returncode if process.returncode is not None else -signal.SIGKILL),
            timed_out=timed_out,
            stdout_lines=tuple(stdout_lines),
            stderr_lines=tuple(stderr_lines),
            duration_seconds=time.monotonic() - started,
        )

    @staticmethod
    async def _terminate_process_group(process: asyncio.subprocess.Process) -> None:
        if process.returncode is not None:
            return
        try:
            os.killpg(process.pid, signal.SIGTERM)
        except ProcessLookupError:
            return
        try:
            await asyncio.wait_for(process.wait(), timeout=5)
            return
        except TimeoutError:
            pass
        try:
            os.killpg(process.pid, signal.SIGKILL)
        except ProcessLookupError:
            return
        await process.wait()
