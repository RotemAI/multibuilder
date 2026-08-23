import sys

import pytest

from multibuilder.process_runner import SubprocessAgentRunner
from multibuilder.providers import ProviderCommand, SecretRedactor
from multibuilder.worker_runtime import EventNormalizer


@pytest.mark.asyncio
async def test_process_runner_streams_normalized_redacted_events(tmp_path) -> None:
    events = []
    command = ProviderCommand(
        argv=(
            sys.executable,
            "-c",
            "import json; print(json.dumps({'type':'item.completed','item':{'type':'command_execution','command':'private-value','status':'completed'}}))",
        ),
        cwd=tmp_path,
    )
    runner = SubprocessAgentRunner(
        normalizer=EventNormalizer(SecretRedactor(["private-value"])),
        heartbeat_interval_seconds=0.05,
    )

    outcome = await runner.run("codex", command, on_event=events.append, timeout_seconds=5)

    command_event = next(event for event in events if event.event_type == "command.completed")
    assert (
        outcome.returncode,
        events[0].event_type,
        command_event.payload["command"],
    ) == (0, "run.process_started", "[REDACTED]")


@pytest.mark.asyncio
async def test_process_runner_times_out_and_terminates_its_exact_process_group(tmp_path) -> None:
    command = ProviderCommand(
        argv=(sys.executable, "-c", "import time; time.sleep(10)"),
        cwd=tmp_path,
    )
    runner = SubprocessAgentRunner(
        normalizer=EventNormalizer(SecretRedactor()),
        heartbeat_interval_seconds=0.05,
    )

    outcome = await runner.run("codex", command, on_event=lambda event: None, timeout_seconds=0.1)

    assert outcome.timed_out is True
