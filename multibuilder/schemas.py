from __future__ import annotations

from copy import deepcopy
from typing import Any

from .domain import CompletedTaskResult


def strict_json_schema(schema: dict[str, Any]) -> dict[str, Any]:
    value = deepcopy(schema)

    def normalize(node: Any) -> Any:
        if isinstance(node, list):
            return [normalize(item) for item in node]
        if not isinstance(node, dict):
            return node
        normalized = {
            key: normalize(child)
            for key, child in node.items()
            if key != "default"
        }
        if normalized.get("type") == "object" or "properties" in normalized:
            properties = normalized.get("properties")
            if not isinstance(properties, dict):
                properties = {}
                normalized["properties"] = properties
            normalized["required"] = list(properties)
            normalized["additionalProperties"] = False
        return normalized

    return normalize(value)


def strict_completed_task_result_schema() -> dict[str, Any]:
    return strict_json_schema(CompletedTaskResult.model_json_schema())


__all__ = ["strict_completed_task_result_schema", "strict_json_schema"]
