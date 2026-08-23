from uuid import uuid4

import pytest
from pydantic import ValidationError

from multibuilder.domain import CompletedTaskResult, TaskSpec, TaskType
from multibuilder.schemas import strict_completed_task_result_schema


def test_task_contract_rejects_empty_acceptance_criteria() -> None:
    with pytest.raises(ValidationError):
        TaskSpec(
            id=uuid4(),
            project_id=uuid4(),
            parent_task_id=None,
            task_type=TaskType.IMPLEMENTATION,
            goal="Create the health endpoint",
            instructions="Add a deterministic health response.",
            dependencies=[],
            write_scope=["src/api/**"],
            acceptance_criteria=[],
            preferred_capabilities=["python"],
            preferred_providers=["codex"],
            timeout_seconds=900,
            retry_limit=2,
        )


def test_task_contract_rejects_its_own_dependency() -> None:
    task_id = uuid4()

    with pytest.raises(ValidationError):
        TaskSpec(
            id=task_id,
            project_id=uuid4(),
            parent_task_id=None,
            task_type=TaskType.IMPLEMENTATION,
            goal="Create the health endpoint",
            instructions="Add a deterministic health response.",
            dependencies=[task_id],
            write_scope=["src/api/**"],
            acceptance_criteria=["GET /health returns 200"],
            preferred_capabilities=["python"],
            preferred_providers=["codex"],
            timeout_seconds=900,
            retry_limit=2,
        )


def test_completed_result_preserves_the_compact_upward_contract() -> None:
    result = CompletedTaskResult(
        summary="Implemented the health route.",
        commit="abc1234",
        files_changed=["src/api/health.py"],
        commands_run=["pytest tests/test_health.py"],
        test_results=[{"command": "pytest tests/test_health.py", "passed": True}],
        remaining_issues=[],
        proposed_followup_tasks=[],
    )

    assert result.model_dump()["summary"] == "Implemented the health route."


def test_provider_output_schema_is_strict_at_every_object_level() -> None:
    schema = strict_completed_task_result_schema()

    def assert_strict(value) -> None:
        if isinstance(value, dict):
            assert "default" not in value
            if value.get("type") == "object" or "properties" in value:
                properties = value.get("properties", {})
                assert value.get("additionalProperties") is False
                assert set(value.get("required", [])) == set(properties)
            for child in value.values():
                assert_strict(child)
        elif isinstance(value, list):
            for child in value:
                assert_strict(child)

    assert_strict(schema)
