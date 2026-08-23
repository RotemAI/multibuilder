from __future__ import annotations

import json
import re
from dataclasses import dataclass
from pathlib import Path
from typing import Any

from ..schemas import strict_json_schema


@dataclass(frozen=True, slots=True)
class ProviderLaunch:
    source_repository: Path
    workspace: Path
    prompt_file: Path
    result_schema_file: Path
    model: str | None
    reasoning_effort: str | None
    timeout_seconds: int


@dataclass(frozen=True, slots=True)
class ProviderCommand:
    argv: tuple[str, ...]
    cwd: Path
    stdin_file: Path | None = None


class CodexBackend:
    name = "codex"

    def __init__(self, *, binary: str = "codex") -> None:
        self.binary = binary

    def build_command(self, launch: ProviderLaunch) -> ProviderCommand:
        argv = [
            self.binary,
            "exec",
            "--json",
            "--ephemeral",
            "--color",
            "never",
            "--sandbox",
            "workspace-write",
            "--cd",
            str(launch.workspace),
            "--output-schema",
            str(launch.result_schema_file),
            "-c",
            "features.multi_agent=false",
        ]
        if launch.reasoning_effort:
            argv.extend(("-c", f'model_reasoning_effort="{launch.reasoning_effort}"'))
        if launch.model:
            argv.extend(("--model", launch.model))
        argv.append("-")
        return ProviderCommand(tuple(argv), launch.workspace, launch.prompt_file)


class MuseBackend:
    name = "muse"

    def __init__(self, *, binary: str = "muse") -> None:
        self.binary = binary

    def build_command(self, launch: ProviderLaunch) -> ProviderCommand:
        argv = [
            self.binary,
            "exec",
            "--json",
            "--prompt-file",
            str(launch.prompt_file),
            "--workspace",
            str(launch.workspace),
            "--disable-approval",
            "--enable-shell-tool",
            "--sandbox-network",
            "proxy-only",
            "--user-input-auto-resolve",
            "--max-model-steps",
            "80",
            "--provider",
            "meta",
        ]
        if launch.model:
            argv.extend(("--model", launch.model))
        if launch.reasoning_effort:
            argv.extend(("--reasoning-effort", launch.reasoning_effort))
        return ProviderCommand(tuple(argv), launch.workspace)


class GrokBackend:
    name = "grok"

    def __init__(self, *, binary: str = "grok") -> None:
        self.binary = binary

    def build_command(self, launch: ProviderLaunch) -> ProviderCommand:
        schema = json.dumps(
            strict_json_schema(json.loads(launch.result_schema_file.read_text(encoding="utf-8"))),
            separators=(",", ":"),
        )
        argv = [
            self.binary,
            "--cwd",
            str(launch.workspace),
            "--prompt-file",
            str(launch.prompt_file),
            "--output-format",
            "streaming-json",
            "--permission-mode",
            "dontAsk",
            "--no-subagents",
            "--json-schema",
            schema,
            "--max-turns",
            "80",
        ]
        if launch.model:
            argv.extend(("--model", launch.model))
        if launch.reasoning_effort:
            argv.extend(("--reasoning-effort", launch.reasoning_effort))
        return ProviderCommand(tuple(argv), launch.workspace)


class OpenAIBackend:
    name = "openai"

    def __init__(self, *, base_url: str = "https://api.openai.com/v1") -> None:
        self.base_url = base_url.rstrip("/")

    def build_request(
        self,
        launch: ProviderLaunch,
        *,
        prompt: str,
        schema: dict[str, Any],
    ) -> dict[str, Any]:
        if not launch.model:
            raise ValueError("the OpenAI model must be provided by runtime configuration")
        request: dict[str, Any] = {
            "model": launch.model,
            "input": prompt,
            "store": False,
            "text": {
                "format": {
                    "type": "json_schema",
                    "name": "completed_task_result",
                    "schema": strict_json_schema(schema),
                    "strict": True,
                }
            },
        }
        if launch.reasoning_effort:
            request["reasoning"] = {"effort": launch.reasoning_effort}
        return request


class SecretRedactor:
    _KEY_PATTERNS = (
        re.compile(r"\bsk-(?:proj-)?[A-Za-z0-9_-]{20,}\b"),
        re.compile(r"\bxai-[A-Za-z0-9_-]{20,}\b"),
        re.compile(r"\bBearer\s+[A-Za-z0-9._~+/=-]{20,}\b", re.IGNORECASE),
        re.compile(r"\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b"),
    )

    def __init__(self, secrets: list[str] | tuple[str, ...] = ()) -> None:
        self._secrets = tuple(sorted((secret for secret in secrets if secret), key=len, reverse=True))

    def redact(self, value: str) -> str:
        sanitized = value
        for secret in self._secrets:
            sanitized = sanitized.replace(secret, "[REDACTED]")
        for pattern in self._KEY_PATTERNS:
            sanitized = pattern.sub("[REDACTED]", sanitized)
        return sanitized

    def redact_value(self, value: Any) -> Any:
        if isinstance(value, str):
            return self.redact(value)
        if isinstance(value, list):
            return [self.redact_value(item) for item in value]
        if isinstance(value, tuple):
            return tuple(self.redact_value(item) for item in value)
        if isinstance(value, dict):
            return {str(key): self.redact_value(item) for key, item in value.items()}
        return value


__all__ = [
    "CodexBackend",
    "GrokBackend",
    "MuseBackend",
    "OpenAIBackend",
    "ProviderCommand",
    "ProviderLaunch",
    "SecretRedactor",
]
