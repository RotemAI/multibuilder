import json
from uuid import uuid4

from multibuilder.domain import CompletedTaskResult, TaskRecord, TaskStatus, TaskType
from multibuilder.providers import SecretRedactor
from multibuilder.worker_runtime import EventNormalizer, PromptBuilder, extract_completed_result


def task_record() -> TaskRecord:
    from datetime import UTC, datetime

    now = datetime.now(UTC)
    return TaskRecord(
        id=uuid4(),
        project_id=uuid4(),
        parent_task_id=None,
        task_type=TaskType.IMPLEMENTATION,
        goal="Implement a narrow endpoint",
        instructions="Change only the endpoint module.",
        dependencies=[],
        write_scope=["src/api/**"],
        acceptance_criteria=["The endpoint test passes"],
        preferred_capabilities=["coding"],
        preferred_providers=[],
        timeout_seconds=900,
        retry_limit=2,
        status=TaskStatus.RUNNING,
        priority=10,
        retry_count=0,
        assigned_provider="codex",
        assigned_model="configured-model",
        blocked_reason=None,
        result=None,
        created_at=now,
        updated_at=now,
    )


def test_prompt_contains_only_the_task_contract_and_compact_failure_context() -> None:
    prompt = PromptBuilder().build(
        task_record(),
        project_goal="Build the service",
        failure_context="pytest failed: expected 200, got 500",
    )

    assert "Do not launch child agents" in prompt and "pytest failed" in prompt and len(prompt) < 20_000
    assert "Git staging and commits are scheduler-owned" in prompt


def test_codex_command_event_is_normalized_and_redacted() -> None:
    normalizer = EventNormalizer(SecretRedactor(["private-token"]))
    raw = {
        "type": "item.completed",
        "item": {
            "id": "item_1",
            "type": "command_execution",
            "command": "curl -H 'Authorization: private-token' https://example.test",
            "status": "completed",
            "exit_code": 0,
        },
    }

    event = normalizer.normalize("codex", json.dumps(raw))[0]

    assert event.event_type == "command.completed" and "private-token" not in json.dumps(event.payload)


def test_completed_result_is_extracted_from_the_final_agent_message() -> None:
    result = CompletedTaskResult(
        summary="Done",
        commit="abc1234",
        files_changed=["src/api/routes.py"],
        commands_run=["pytest"],
        test_results=[{"command": "pytest", "passed": True}],
        remaining_issues=[],
        proposed_followup_tasks=[],
    )
    lines = [
        json.dumps({"type": "turn.started"}),
        json.dumps(
            {
                "type": "item.completed",
                "item": {"type": "agent_message", "text": result.model_dump_json()},
            }
        ),
    ]

    extracted = extract_completed_result("codex", lines)

    assert extracted == result


def test_malformed_jsonl_becomes_a_diagnostic_event_instead_of_crashing() -> None:
    event = EventNormalizer(SecretRedactor()).normalize("muse", "not-json")[0]

    assert event.event_type == "provider.output.unparsed"


def test_muse_terminal_envelope_yields_the_structured_task_result() -> None:
    result = CompletedTaskResult(
        summary="Finished with Muse",
        commit="abc1234",
        files_changed=["src/api/routes.py"],
        commands_run=["pytest -q"],
        test_results=[{"command": "pytest -q", "passed": True}],
        remaining_issues=[],
        proposed_followup_tasks=[],
    )
    lines = [
        json.dumps(
            {
                "payload_type": "run.terminal.completed",
                "payload": {"kind": "run_terminal", "terminal": "completed", "text": result.model_dump_json()},
            }
        )
    ]

    extracted = extract_completed_result("muse", lines)
    normalized = EventNormalizer(SecretRedactor()).normalize("muse", lines[0])[0]

    assert extracted == result
    assert normalized.event_type == "run.provider_completed"
