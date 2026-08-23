from __future__ import annotations

import json
import os
import stat
import subprocess
import sys
from dataclasses import replace
from datetime import UTC, datetime
from pathlib import Path
from uuid import uuid4

import httpx
import pytest

from multibuilder.domain import AgentRunRecord, ProjectSpec, RunStatus, TaskRecord, TaskStatus, TaskType
from multibuilder.execution import (
    DurableProcessRegistry,
    OpenAIResponsesExecutor,
    ProviderExecutionSettings,
    UnifiedProviderExecutor,
)
from multibuilder.orchestrator import ExecutionRequest
from multibuilder.process_runner import RunOutcome
from multibuilder.providers import CodexBackend, SecretRedactor
from multibuilder.worker_runtime import EventNormalizer
from multibuilder.workspaces import Workspace

NOW = datetime.now(UTC)


def execution_request(tmp_path: Path) -> ExecutionRequest:
    project_id = uuid4()
    task_id = uuid4()
    run_id = uuid4()
    project = ProjectSpec(
        id=project_id,
        name="executor",
        goal="Execute one isolated task",
        repository_url=str(tmp_path),
        base_branch="main",
        acceptance_criteria=["The task completes"],
        max_parallelism=2,
    )
    task = TaskRecord(
        id=task_id,
        project_id=project_id,
        parent_task_id=None,
        task_type=TaskType.IMPLEMENTATION,
        goal="Write the implementation",
        instructions="Implement and test the change.",
        dependencies=[],
        write_scope=["src/**"],
        acceptance_criteria=["Focused tests pass"],
        preferred_capabilities=["coding"],
        preferred_providers=["codex"],
        timeout_seconds=300,
        retry_limit=3,
        status=TaskStatus.RUNNING,
        priority=10,
        retry_count=0,
        assigned_provider="codex",
        assigned_model=None,
        blocked_reason=None,
        result=None,
        created_at=NOW,
        updated_at=NOW,
    )
    run = AgentRunRecord(
        id=run_id,
        project_id=project_id,
        task_id=task_id,
        parent_run_id=None,
        provider="codex",
        model=None,
        role="implementation",
        status=RunStatus.STARTING,
        attempt=0,
        pid=None,
        session_id=None,
        started_at=NOW,
        heartbeat_at=NOW,
        progress_at=NOW,
        finished_at=None,
        failure_class=None,
        failure_message=None,
        result=None,
    )
    workspace = Workspace(project_id, task_id, tmp_path, tmp_path, "task-branch", "abc123", ("src/**",))
    return ExecutionRequest(
        project=project,
        task=task,
        run=run,
        workspace=workspace,
        provider="codex",
        model=None,
        prompt="Scoped worker prompt",
        result_schema={"type": "object"},
        timeout_seconds=300,
        providers_tried=(),
    )


class CapturingRunner:
    def __init__(self) -> None:
        self.command = None
        self.environment = None

    async def run(self, provider, command, *, on_event, timeout_seconds, environment=None):
        self.command = command
        self.environment = environment
        await on_event(type("Event", (), {"event_type": "run.process_started", "payload": {"pid": 1234}, "level": "info"})())
        return RunOutcome(1234, 0, False, ("{}",), (), 0.1)


@pytest.mark.asyncio
async def test_cli_execution_writes_private_contract_files_and_injects_no_secrets(tmp_path) -> None:
    runner = CapturingRunner()
    executor = UnifiedProviderExecutor(
        artifact_root=tmp_path / "artifacts",
        process_runner=runner,
        backends={"codex": CodexBackend(binary="codex")},
        settings={"codex": ProviderExecutionSettings(reasoning_effort=None)},
    )
    events = []
    request = execution_request(tmp_path)

    await executor.execute(request, on_event=events.append)

    prompt_file = runner.command.stdin_file
    schema_file = Path(runner.command.argv[runner.command.argv.index("--output-schema") + 1])
    assert prompt_file.read_text() == "Scoped worker prompt"
    assert json.loads(schema_file.read_text()) == {"type": "object"}
    assert stat.S_IMODE(prompt_file.stat().st_mode) == 0o600
    assert runner.environment == {"MULTIBUILDER_RUN_ID": str(request.run.id)}


@pytest.mark.asyncio
async def test_executor_refuses_to_signal_an_untracked_process(tmp_path) -> None:
    executor = UnifiedProviderExecutor(
        artifact_root=tmp_path / "artifacts",
        process_runner=CapturingRunner(),
        backends={},
        settings={},
        normalizer=EventNormalizer(SecretRedactor()),
    )

    assert await executor.is_process_alive(999_999) is False
    await executor.terminate_process(999_999)


@pytest.mark.asyncio
async def test_openai_executor_uses_responses_api_without_exposing_the_key(tmp_path) -> None:
    request = execution_request(tmp_path)
    request = replace(request, provider="openai", model="configured-model")
    seen_request = {}

    def respond(http_request: httpx.Request) -> httpx.Response:
        seen_request["authorization"] = http_request.headers.get("authorization")
        seen_request["body"] = json.loads(http_request.content)
        result = {
            "summary": "Completed API work",
            "commit": "abc1234",
            "files_changed": ["src/api.py"],
            "commands_run": ["pytest -q"],
            "test_results": [{"command": "pytest -q", "passed": True}],
            "remaining_issues": [],
            "proposed_followup_tasks": [],
        }
        return httpx.Response(
            200,
            json={
                "id": "resp_123",
                "status": "completed",
                "output": [{"content": [{"type": "output_text", "text": json.dumps(result)}]}],
                "usage": {"input_tokens": 10, "output_tokens": 20},
            },
        )

    client = httpx.AsyncClient(transport=httpx.MockTransport(respond), base_url="https://api.openai.test/v1")
    remote = OpenAIResponsesExecutor(
        api_key="sk-test-value-that-must-never-appear",
        client=client,
        redactor=SecretRedactor(["sk-test-value-that-must-never-appear"]),
        reasoning_effort="high",
    )
    events = []

    outcome = await remote.execute(request, on_event=events.append)
    await client.aclose()

    assert outcome.returncode == 0
    assert seen_request["authorization"].startswith("Bearer ")
    assert seen_request["body"]["store"] is False
    assert seen_request["body"]["model"] == "configured-model"
    assert seen_request["body"]["reasoning"] == {"effort": "high"}
    assert all("sk-test-value" not in json.dumps(event.payload) for event in events)


def test_process_ownership_survives_restart_and_terminates_only_the_exact_run(tmp_path) -> None:
    run_id = uuid4()
    environment = os.environ | {"MULTIBUILDER_RUN_ID": str(run_id)}
    process = subprocess.Popen(
        [sys.executable, "-c", "import time; time.sleep(10)"],
        env=environment,
        start_new_session=True,
    )
    try:
        registry = DurableProcessRegistry(tmp_path / "runtime")
        registry.record(process.pid, run_id)

        reopened = DurableProcessRegistry(tmp_path / "runtime")
        assert reopened.owns(process.pid) is True
        reopened.terminate(process.pid)
        process.wait(timeout=5)

        assert reopened.owns(process.pid) is False
    finally:
        if process.poll() is None:
            process.terminate()
            process.wait(timeout=5)
