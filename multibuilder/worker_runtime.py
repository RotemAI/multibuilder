from __future__ import annotations

import json
from dataclasses import dataclass
from typing import Any, cast

from .domain import CompletedTaskResult, TaskRecord
from .providers import SecretRedactor
from .schemas import strict_completed_task_result_schema


@dataclass(frozen=True, slots=True)
class NormalizedEvent:
    event_type: str
    payload: dict[str, Any]
    level: str = "info"


class PromptBuilder:
    def build(
        self,
        task: TaskRecord,
        *,
        project_goal: str,
        failure_context: str | None = None,
    ) -> str:
        task_contract = {
            "id": str(task.id),
            "parent_task_id": str(task.parent_task_id) if task.parent_task_id else None,
            "type": task.task_type.value,
            "goal": task.goal,
            "instructions": task.instructions,
            "dependencies": [str(dependency) for dependency in task.dependencies],
            "write_scope": task.write_scope,
            "acceptance_criteria": task.acceptance_criteria,
            "timeout_seconds": task.timeout_seconds,
            "retry_limit": task.retry_limit,
        }
        result_contract = strict_completed_task_result_schema()
        planning_role = task.task_type.value in {"director", "workstream_lead"}
        followup_instruction = (
            "Plan bounded child tasks in proposed_followup_tasks. Dependencies must use keys from "
            "that same proposed list, never task IDs. Only the scheduler may launch them."
            if planning_role
            else "Do not launch child agents; only the scheduler may launch them. Report only genuinely "
            "new follow-up ideas that are not already covered by the task DAG. Worker suggestions are "
            "recorded for lead inspection and are not launched automatically."
        )
        sections = [
            "You are one worker in a scheduler-controlled software factory.",
            followup_instruction,
            "Work only in the current Git worktree and only inside the declared write_scope.",
            (
                "Git staging and commits are scheduler-owned. Do not run git add, git commit, branch changes, or "
                "merges. Return commit as null and report the exact files_changed; the scheduler validates scope "
                "and creates the task commit after your successful result."
            ),
            "Run focused tests and leave the scoped worktree changes ready for scheduler finalization.",
            f"Project goal:\n{project_goal}",
            "Task contract:\n" + json.dumps(task_contract, indent=2, sort_keys=True),
        ]
        if failure_context:
            sections.append("Concrete failure evidence from the previous attempt:\n" + failure_context[-6_000:])
        sections.extend(
            [
                "Return only one JSON object matching this result schema. Do not include a transcript.",
                json.dumps(result_contract, indent=2, sort_keys=True),
            ]
        )
        return "\n\n".join(sections)


class EventNormalizer:
    def __init__(self, redactor: SecretRedactor) -> None:
        self.redactor = redactor

    def normalize(self, provider: str, line: str) -> list[NormalizedEvent]:
        try:
            raw = json.loads(line)
        except json.JSONDecodeError:
            return [
                NormalizedEvent(
                    "provider.output.unparsed",
                    {"provider": provider, "text": self.redactor.redact(line)},
                    "warning",
                )
            ]
        if not isinstance(raw, dict):
            return [NormalizedEvent("provider.event", {"provider": provider, "value": raw})]
        payload = cast(dict[str, Any], self.redactor.redact_value(raw))
        if provider == "codex":
            return self._normalize_codex(payload)
        return self._normalize_generic(provider, payload)

    def _normalize_codex(self, raw: dict[str, Any]) -> list[NormalizedEvent]:
        event_type = str(raw.get("type") or "")
        if event_type == "thread.started":
            return [NormalizedEvent("run.session_started", raw)]
        if event_type == "turn.started":
            return [NormalizedEvent("run.started", raw)]
        if event_type == "turn.completed":
            events = [NormalizedEvent("usage.reported", raw.get("usage") or {})]
            events.append(NormalizedEvent("run.provider_completed", raw))
            return events
        if event_type in {"turn.failed", "error"}:
            return [NormalizedEvent("run.failed", raw, "error")]
        if event_type.startswith("item."):
            raw_item = raw.get("item")
            item: dict[str, Any] = cast(dict[str, Any], raw_item) if isinstance(raw_item, dict) else {}
            item_type = str(item.get("type") or "unknown")
            phase = "started" if event_type.endswith("started") else "completed"
            if item_type == "command_execution":
                return [NormalizedEvent(f"command.{phase}", item)]
            if item_type in {"mcp_tool_call", "web_search"}:
                return [NormalizedEvent(f"tool.{phase}", item)]
            if item_type in {"file_change", "file_changes"}:
                return [NormalizedEvent("files.changed", item)]
            if item_type == "agent_message":
                return [NormalizedEvent("agent.message", item)]
            if item_type == "reasoning":
                return [
                    NormalizedEvent(
                        "agent.reasoning_status",
                        {"id": item.get("id"), "status": item.get("status", phase)},
                    )
                ]
            return [NormalizedEvent(f"provider.item.{phase}", item)]
        return [NormalizedEvent("provider.event", raw)]

    @staticmethod
    def _normalize_generic(provider: str, raw: dict[str, Any]) -> list[NormalizedEvent]:
        native_type = str(raw.get("type") or raw.get("event") or raw.get("payload_type") or "event")
        lowered = native_type.lower()
        if "rate" in lowered and "limit" in lowered:
            normalized = "rate_limit.observed"
        elif "tool" in lowered:
            normalized = "tool.completed" if "complete" in lowered or "result" in lowered else "tool.started"
        elif "command" in lowered:
            normalized = "command.completed" if "complete" in lowered or "result" in lowered else "command.started"
        elif "complete" in lowered or lowered in {"done", "finished"}:
            normalized = "run.provider_completed"
        elif "error" in lowered or "fail" in lowered:
            normalized = "run.failed"
        else:
            normalized = "provider.event"
        return [NormalizedEvent(normalized, {"provider": provider, "native": raw})]


def extract_completed_result(provider: str, lines: list[str]) -> CompletedTaskResult:
    del provider
    validation_errors: list[str] = []
    for line in reversed(lines):
        try:
            value = json.loads(line)
        except json.JSONDecodeError:
            continue
        for candidate in _candidate_payloads(value):
            if isinstance(candidate, str):
                candidate = _parse_json_text(candidate)
            if not isinstance(candidate, dict):
                continue
            try:
                return CompletedTaskResult.model_validate(candidate)
            except Exception as exc:
                validation_errors.append(str(exc))
    detail = validation_errors[0] if validation_errors else "no structured final agent message was found"
    raise ValueError(f"provider did not return a valid completed-task result: {detail}")


def _candidate_payloads(value: Any) -> list[Any]:
    candidates: list[Any] = [value]
    if isinstance(value, list):
        for item in value:
            candidates.extend(_candidate_payloads(item))
        return candidates
    if not isinstance(value, dict):
        return candidates
    for key in (
        "result",
        "output",
        "output_text",
        "content",
        "message",
        "text",
        "payload",
        "data",
        "response",
        "native",
    ):
        if key in value:
            candidates.extend(_candidate_payloads(value[key]))
    item = value.get("item")
    if isinstance(item, dict):
        candidates.extend(_candidate_payloads(item))
    if isinstance(value.get("choices"), list):
        for choice in value["choices"]:
            candidates.extend(_candidate_payloads(choice))
    return candidates


def _parse_json_text(value: str) -> Any:
    stripped = value.strip()
    if stripped.startswith("```json") and stripped.endswith("```"):
        stripped = stripped[7:-3].strip()
    elif stripped.startswith("```") and stripped.endswith("```"):
        stripped = stripped[3:-3].strip()
    try:
        return json.loads(stripped)
    except json.JSONDecodeError:
        return None
