from __future__ import annotations

import os
import subprocess
from pathlib import Path
from uuid import uuid4

import pytest

from multibuilder.sources import SourceRepositoryError, SourceRepositoryManager


def git(repository: Path, *arguments: str) -> str:
    environment = os.environ | {
        "GIT_AUTHOR_NAME": "Fixture User",
        "GIT_AUTHOR_EMAIL": "fixture@example.test",
        "GIT_COMMITTER_NAME": "Fixture User",
        "GIT_COMMITTER_EMAIL": "fixture@example.test",
    }
    result = subprocess.run(
        ["git", "-C", str(repository), *arguments],
        check=True,
        capture_output=True,
        text=True,
        env=environment,
    )
    return result.stdout.strip()


def source_repository(path: Path) -> Path:
    path.mkdir()
    git(path, "init", "-b", "main")
    (path / "README.md").write_text("initial\n")
    git(path, "add", "README.md")
    git(path, "commit", "-m", "Initial fixture")
    return path


def test_source_repository_is_cloned_once_and_refreshed_safely(tmp_path) -> None:
    source = source_repository(tmp_path / "source")
    manager = SourceRepositoryManager(tmp_path / "state", allow_local_sources=True)
    project_id = uuid4()

    first = manager.prepare(project_id, str(source), "main")
    second = manager.prepare(project_id, str(source), "main")

    assert first == second
    assert git(first, "rev-parse", "--is-inside-work-tree") == "true"
    assert git(first, "rev-parse", "--verify", "origin/main^{commit}")


def test_source_repository_rejects_credentials_embedded_in_urls(tmp_path) -> None:
    manager = SourceRepositoryManager(tmp_path / "state")

    with pytest.raises(SourceRepositoryError, match="credentials"):
        manager.prepare(uuid4(), "https://token@example.test/repository.git", "main")


@pytest.mark.parametrize(
    "remote",
    (
        "https://127.0.0.1/private.git",
        "ssh://git@metadata.google.internal/private.git",
        "git@10.0.0.7:private/repository.git",
    ),
)
def test_source_repository_rejects_hosts_outside_the_operator_allowlist(tmp_path, remote) -> None:
    manager = SourceRepositoryManager(tmp_path / "state", allowed_hosts={"github.com"})

    with pytest.raises(SourceRepositoryError, match="allowlist"):
        manager.prepare(uuid4(), remote, "main")


def test_git_commands_do_not_inherit_provider_credentials(tmp_path, monkeypatch) -> None:
    captured = {}

    def run(arguments, **kwargs):
        captured.update(kwargs["env"])
        return subprocess.CompletedProcess(arguments, 0, "git version 2.40\n", "")

    monkeypatch.setenv("OPENAI_API_KEY", "must-not-reach-git")
    monkeypatch.setenv("XAI_API_KEY", "must-not-reach-git")
    monkeypatch.setattr(subprocess, "run", run)

    SourceRepositoryManager._command(tmp_path, "git", "--version")

    assert "OPENAI_API_KEY" not in captured
    assert "XAI_API_KEY" not in captured
    assert captured["GIT_TERMINAL_PROMPT"] == "0"


def test_source_repository_rejects_rebinding_a_project_to_another_remote(tmp_path) -> None:
    first_source = source_repository(tmp_path / "first")
    second_source = source_repository(tmp_path / "second")
    manager = SourceRepositoryManager(tmp_path / "state", allow_local_sources=True)
    project_id = uuid4()
    manager.prepare(project_id, str(first_source), "main")

    with pytest.raises(SourceRepositoryError, match="different remote"):
        manager.prepare(project_id, str(second_source), "main")
