from __future__ import annotations

import fnmatch
import subprocess
from dataclasses import dataclass
from pathlib import Path
from uuid import UUID


class WorkspaceError(RuntimeError):
    pass


@dataclass(frozen=True, slots=True)
class Workspace:
    project_id: UUID
    task_id: UUID
    repository_path: Path
    path: Path
    branch: str
    base_commit: str
    write_scope: tuple[str, ...]


@dataclass(frozen=True, slots=True)
class FinalizedCommit:
    commit: str
    files_changed: tuple[str, ...]


class WorkspaceManager:
    def __init__(self, root: Path) -> None:
        self.root = root.resolve()

    def allocate(
        self,
        *,
        project_id: UUID,
        task_id: UUID,
        repository_path: Path,
        base_ref: str,
        write_scope: list[str],
    ) -> Workspace:
        repository = repository_path.resolve(strict=True)
        if self._git(repository, "rev-parse", "--is-inside-work-tree") != "true":
            raise WorkspaceError(f"not a Git repository: {repository}")

        project_dir = self.root / project_id.hex[:12]
        path = project_dir / task_id.hex
        self._assert_below_root(path)
        branch = f"multibuilder/{project_id.hex[:8]}/{task_id.hex[:12]}"
        base_commit = self._git(repository, "rev-parse", "--verify", f"{base_ref}^{{commit}}")

        if path.exists():
            current = self._git(path, "branch", "--show-current")
            if current not in {"", branch}:
                raise WorkspaceError(f"workspace path is owned by branch {current or 'detached'}")
            if current == "":
                branch_commit = self._git(repository, "rev-parse", "--verify", f"refs/heads/{branch}^{{commit}}")
                current_commit = self._git(path, "rev-parse", "HEAD")
                if current_commit != branch_commit:
                    raise WorkspaceError("detached workspace moved away from its scheduler-owned branch")
            return Workspace(
                project_id,
                task_id,
                repository,
                path,
                branch,
                base_commit,
                tuple(write_scope),
            )

        project_dir.mkdir(parents=True, exist_ok=True)
        branch_exists = self._git_result(repository, "show-ref", "--verify", "--quiet", f"refs/heads/{branch}")
        if branch_exists.returncode == 0:
            self._git(repository, "worktree", "add", "--detach", str(path), branch)
        else:
            self._git(repository, "branch", branch, base_commit)
            self._git(repository, "worktree", "add", "--detach", str(path), base_commit)

        return Workspace(
            project_id,
            task_id,
            repository,
            path,
            branch,
            base_commit,
            tuple(write_scope),
        )

    def scope_violations(self, workspace: Workspace) -> list[str]:
        violations: list[str] = []
        root = workspace.path.resolve()
        for relative_path in self.changed_paths(workspace):
            candidate = (workspace.path / relative_path).resolve(strict=False)
            inside_workspace = candidate == root or root in candidate.parents
            if not inside_workspace or not self._allowed(relative_path, workspace.write_scope):
                violations.append(relative_path)
        return violations

    def changed_paths(self, workspace: Workspace) -> tuple[str, ...]:
        return tuple(self._changed_paths(workspace))

    def commit_changes(self, workspace: Workspace, *, message: str) -> FinalizedCommit:
        violations = self.scope_violations(workspace)
        if violations:
            raise WorkspaceError("worker changed files outside its write scope: " + ", ".join(violations[:20]))
        branch = self._git(workspace.path, "branch", "--show-current")
        if branch == "":
            branch_commit = self._git(
                workspace.repository_path,
                "rev-parse",
                "--verify",
                f"refs/heads/{workspace.branch}^{{commit}}",
            )
            if self._git(workspace.path, "rev-parse", "HEAD") != branch_commit:
                raise WorkspaceError("detached workspace moved away from its scheduler-owned branch")
            self._git(workspace.path, "switch", workspace.branch)
        elif branch != workspace.branch:
            raise WorkspaceError(f"workspace branch changed to {branch or 'detached'}")

        uncommitted = self._uncommitted_paths(workspace)
        if uncommitted:
            self._git(workspace.path, "add", "--all", "--", *uncommitted)
            self._git(
                workspace.path,
                "-c",
                "core.hooksPath=/dev/null",
                "commit",
                "--no-gpg-sign",
                "--message",
                message,
            )
        if self._git(workspace.path, "status", "--porcelain", "--untracked-files=all"):
            raise WorkspaceError("workspace is not clean after scheduler commit")

        changed = tuple(
            line
            for line in self._git(
                workspace.path,
                "diff",
                "--name-only",
                f"{workspace.base_commit}...HEAD",
            ).splitlines()
            if line
        )
        if not changed:
            raise WorkspaceError("worker reported changes but the task branch has no commit")
        return FinalizedCommit(
            commit=self._git(workspace.path, "rev-parse", "HEAD"),
            files_changed=changed,
        )

    def _changed_paths(self, workspace: Workspace) -> list[str]:
        changed = set(self._uncommitted_paths(workspace))
        output = self._git(workspace.path, "diff", "--name-only", f"{workspace.base_commit}...HEAD")
        changed.update(line for line in output.splitlines() if line)
        return sorted(changed)

    def _uncommitted_paths(self, workspace: Workspace) -> list[str]:
        changed: set[str] = set()
        for arguments in (
            ("diff", "--name-only"),
            ("diff", "--cached", "--name-only"),
            ("ls-files", "--others", "--exclude-standard"),
        ):
            output = self._git(workspace.path, *arguments)
            changed.update(line for line in output.splitlines() if line)
        return sorted(changed)

    @staticmethod
    def _allowed(path: str, scopes: tuple[str, ...]) -> bool:
        normalized = path.replace("\\", "/")
        for scope in scopes:
            pattern = scope.strip().replace("\\", "/").lstrip("./")
            if pattern in {"*", "**", "**/*"} or fnmatch.fnmatchcase(normalized, pattern):
                return True
            prefix = pattern.removesuffix("/**").rstrip("/")
            if pattern.endswith("/**") and (normalized == prefix or normalized.startswith(prefix + "/")):
                return True
        return False

    def _assert_below_root(self, path: Path) -> None:
        resolved = path.resolve(strict=False)
        if resolved == self.root or self.root not in resolved.parents:
            raise WorkspaceError("workspace path escapes the configured root")

    @classmethod
    def _git(cls, repository: Path, *arguments: str) -> str:
        result = cls._git_result(repository, *arguments)
        if result.returncode != 0:
            message = result.stderr.strip() or result.stdout.strip() or "git command failed"
            raise WorkspaceError(message)
        return result.stdout.strip()

    @staticmethod
    def _git_result(repository: Path, *arguments: str) -> subprocess.CompletedProcess[str]:
        return subprocess.run(
            ["git", "-C", str(repository), *arguments],
            check=False,
            capture_output=True,
            text=True,
        )
