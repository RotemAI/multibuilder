from pathlib import Path

from multibuilder.providers import (
    CodexBackend,
    GrokBackend,
    MuseBackend,
    OpenAIBackend,
    ProviderLaunch,
    SecretRedactor,
)


def launch(tmp_path: Path) -> ProviderLaunch:
    prompt_file = tmp_path / "prompt.txt"
    prompt_file.write_text("Implement the task")
    schema_file = tmp_path / "result.schema.json"
    schema_file.write_text("{}")
    workspace = tmp_path / "workspace"
    workspace.mkdir()
    return ProviderLaunch(
        source_repository=tmp_path,
        workspace=workspace,
        prompt_file=prompt_file,
        result_schema_file=schema_file,
        model="configured-model",
        reasoning_effort="high",
        timeout_seconds=900,
    )


def test_codex_uses_jsonl_and_a_structured_result_without_putting_prompt_in_argv(tmp_path) -> None:
    command = CodexBackend(binary="/usr/bin/codex").build_command(launch(tmp_path))

    assert command.argv[-1] == "-" and "--json" in command.argv and "--output-schema" in command.argv
    assert "--ephemeral" in command.argv
    assert 'model_reasoning_effort="high"' in command.argv
    assert "features.multi_agent=false" in command.argv
    assert "--add-dir" not in command.argv


def test_muse_operates_inside_the_scheduler_owned_workspace_without_remounting_git(tmp_path) -> None:
    command = MuseBackend(binary="/opt/muse").build_command(launch(tmp_path))

    assert command.argv[command.argv.index("--workspace") + 1] == str(tmp_path / "workspace")
    assert "--worktree" not in command.argv
    assert "--worktree-existing" not in command.argv
    assert "--disable-approval" in command.argv
    assert "--approval-mode" not in command.argv
    assert "--enable-shell-tool" in command.argv


def test_grok_cannot_launch_native_subagents(tmp_path) -> None:
    command = GrokBackend(binary="/opt/grok").build_command(launch(tmp_path))

    assert "--no-subagents" in command.argv
    assert "--json-schema" in command.argv


def test_openai_payload_uses_configured_model_and_strict_structured_output(tmp_path) -> None:
    request = OpenAIBackend(base_url="https://api.openai.test/v1").build_request(
        launch(tmp_path),
        prompt="Return the compact task result",
        schema={"type": "object", "properties": {"summary": {"type": "string"}}},
    )

    assert request["text"]["format"]["strict"] is True and request["model"] == "configured-model"


def test_secret_redactor_removes_registered_and_key_shaped_values() -> None:
    redactor = SecretRedactor(["literal-private-value"])

    sanitized = redactor.redact("literal-private-value sk-proj-abcdefghijklmnopqrstuvwxyz123456")

    assert sanitized == "[REDACTED] [REDACTED]"
