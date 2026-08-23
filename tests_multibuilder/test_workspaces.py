import os
import subprocess
from pathlib import Path
from uuid import uuid4

from multibuilder.workspaces import WorkspaceManager


def git(repo: Path, *args: str) -> str:
    environment = os.environ | {
        "GIT_AUTHOR_NAME": os.environ.get("GIT_AUTHOR_NAME", "Fixture User"),
        "GIT_AUTHOR_EMAIL": os.environ.get("GIT_AUTHOR_EMAIL", "fixture@example.test"),
        "GIT_COMMITTER_NAME": os.environ.get("GIT_COMMITTER_NAME", "Fixture User"),
        "GIT_COMMITTER_EMAIL": os.environ.get("GIT_COMMITTER_EMAIL", "fixture@example.test"),
    }
    result = subprocess.run(
        ["git", "-C", str(repo), *args],
        check=True,
        capture_output=True,
        text=True,
        env=environment,
    )
    return result.stdout.strip()


def create_repository(path: Path) -> None:
    path.mkdir()
    git(path, "init", "-b", "main")
    (path / "README.md").write_text("fixture\n")
    git(path, "add", "README.md")
    git(path, "commit", "-m", "Initial fixture")


def test_allocate_creates_a_detached_worktree_with_a_dedicated_branch(tmp_path) -> None:
    repository = tmp_path / "repository"
    create_repository(repository)
    manager = WorkspaceManager(tmp_path / "worktrees")
    project_id = uuid4()
    task_id = uuid4()

    workspace = manager.allocate(
        project_id=project_id,
        task_id=task_id,
        repository_path=repository,
        base_ref="main",
        write_scope=["src/**"],
    )

    assert git(workspace.path, "branch", "--show-current") == ""
    assert git(repository, "rev-parse", f"refs/heads/{workspace.branch}") == workspace.base_commit


def test_allocate_is_idempotent_for_restart_recovery(tmp_path) -> None:
    repository = tmp_path / "repository"
    create_repository(repository)
    manager = WorkspaceManager(tmp_path / "worktrees")
    project_id = uuid4()
    task_id = uuid4()

    first = manager.allocate(
        project_id=project_id,
        task_id=task_id,
        repository_path=repository,
        base_ref="main",
        write_scope=["src/**"],
    )
    second = WorkspaceManager(tmp_path / "worktrees").allocate(
        project_id=project_id,
        task_id=task_id,
        repository_path=repository,
        base_ref="main",
        write_scope=["src/**"],
    )

    assert second == first


def test_scope_validation_reports_files_outside_the_contract(tmp_path) -> None:
    repository = tmp_path / "repository"
    create_repository(repository)
    manager = WorkspaceManager(tmp_path / "worktrees")
    workspace = manager.allocate(
        project_id=uuid4(),
        task_id=uuid4(),
        repository_path=repository,
        base_ref="main",
        write_scope=["src/**"],
    )
    (workspace.path / "README.md").write_text("changed outside scope\n")

    violations = manager.scope_violations(workspace)

    assert violations == ["README.md"]


def test_scheduler_finalizes_scoped_worker_changes_as_a_clean_commit(tmp_path) -> None:
    repository = tmp_path / "repository"
    create_repository(repository)
    manager = WorkspaceManager(tmp_path / "worktrees")
    workspace = manager.allocate(
        project_id=uuid4(),
        task_id=uuid4(),
        repository_path=repository,
        base_ref="main",
        write_scope=["src/**"],
    )
    (workspace.path / "src").mkdir()
    (workspace.path / "src" / "feature.py").write_text("ENABLED = True\n")

    finalized = manager.commit_changes(workspace, message="[task] Finalize scoped worker output")

    assert finalized.files_changed == ("src/feature.py",)
    assert finalized.commit == git(workspace.path, "rev-parse", "HEAD")
    assert git(workspace.path, "branch", "--show-current") == workspace.branch
    assert git(workspace.path, "status", "--porcelain") == ""
    assert git(workspace.path, "log", "-1", "--format=%s") == "[task] Finalize scoped worker output"
