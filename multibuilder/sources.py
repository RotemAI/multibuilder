from __future__ import annotations

import os
import re
import subprocess
from collections.abc import Iterable
from pathlib import Path
from urllib.parse import urlsplit
from uuid import UUID


class SourceRepositoryError(RuntimeError):
    pass


class SourceRepositoryManager:
    _INHERITED_ENVIRONMENT = (
        "PATH",
        "HOME",
        "USER",
        "LOGNAME",
        "LANG",
        "LC_ALL",
        "SSH_AUTH_SOCK",
        "HTTP_PROXY",
        "HTTPS_PROXY",
        "NO_PROXY",
        "SSL_CERT_FILE",
        "SSL_CERT_DIR",
        "GIT_AUTHOR_NAME",
        "GIT_AUTHOR_EMAIL",
        "GIT_COMMITTER_NAME",
        "GIT_COMMITTER_EMAIL",
    )

    def __init__(
        self,
        state_root: Path,
        *,
        allow_local_sources: bool = False,
        allowed_hosts: Iterable[str] = ("github.com",),
    ) -> None:
        self.repositories_root = (state_root / "repositories").resolve()
        self.allow_local_sources = allow_local_sources
        self.allowed_hosts = frozenset(host.strip().casefold().rstrip(".") for host in allowed_hosts if host.strip())
        if not self.allowed_hosts and not allow_local_sources:
            raise ValueError("at least one Git host must be allowed")

    def prepare(self, project_id: UUID, repository_url: str, base_branch: str) -> Path:
        self._validate_branch(base_branch)
        repository = self.repositories_root / project_id.hex
        self._assert_below_root(repository)
        remote = repository_url.strip()
        if not remote:
            return self._prepare_managed(repository, base_branch)
        remote = self._validate_remote(remote)

        if repository.exists():
            if self._git(repository, "rev-parse", "--is-inside-work-tree") != "true":
                raise SourceRepositoryError("the existing project source is not a Git working tree")
            configured_remote = self._git(repository, "remote", "get-url", "origin")
            if configured_remote != remote:
                raise SourceRepositoryError("the project source is already bound to a different remote")
            self._git(repository, "fetch", "--prune", "origin", timeout=300)
        else:
            repository.parent.mkdir(parents=True, exist_ok=True)
            self._command(
                repository.parent,
                "git",
                "clone",
                "--no-hardlinks",
                "--origin",
                "origin",
                remote,
                str(repository),
                timeout=600,
            )

        self._git(repository, "rev-parse", "--verify", f"origin/{base_branch}^{{commit}}")
        return repository

    def _prepare_managed(self, repository: Path, base_branch: str) -> Path:
        needs_initial_commit = False
        if repository.exists():
            if self._git(repository, "rev-parse", "--is-inside-work-tree") != "true":
                raise SourceRepositoryError("the existing project source is not a Git working tree")
            if self._git(repository, "remote"):
                raise SourceRepositoryError("the managed project source unexpectedly has a remote")
            branch_commit = self._command(
                repository,
                "git",
                "-C",
                str(repository),
                "rev-parse",
                "--verify",
                f"{base_branch}^{{commit}}",
                check=False,
            )
            if branch_commit.returncode != 0:
                if self._git(repository, "symbolic-ref", "--short", "HEAD") != base_branch:
                    raise SourceRepositoryError("the managed project source is on an unexpected branch")
                if self._git(repository, "status", "--porcelain"):
                    raise SourceRepositoryError("the incomplete managed project source contains unexpected files")
                needs_initial_commit = True
        else:
            repository.parent.mkdir(parents=True, exist_ok=True)
            self._command(repository.parent, "git", "init", "-b", base_branch, str(repository))
            needs_initial_commit = True
        if needs_initial_commit:
            self._command(
                repository,
                "git",
                "-c",
                "core.hooksPath=/dev/null",
                "-c",
                "commit.gpgSign=false",
                "commit",
                "--allow-empty",
                "-m",
                "[init] Create managed MultiBuilder workspace",
            )
        self._git(repository, "rev-parse", "--verify", f"{base_branch}^{{commit}}")
        return repository

    def _validate_remote(self, value: str) -> str:
        remote = value.strip()
        if not remote:
            raise SourceRepositoryError("repository URL is required")
        local = Path(remote).expanduser()
        if local.is_absolute() or remote.startswith(("./", "../")):
            if not self.allow_local_sources:
                raise SourceRepositoryError("local repository sources are disabled")
            return str(local.resolve(strict=True))
        if remote.startswith("file:"):
            raise SourceRepositoryError("file URLs are not permitted")
        scp_match = re.fullmatch(r"[^@\s]+@([^:\s]+):.+", remote)
        if scp_match:
            self._validate_host(scp_match.group(1))
            return remote
        parsed = urlsplit(remote)
        if parsed.scheme not in {"https", "ssh"} or not parsed.hostname:
            raise SourceRepositoryError("repository URL must use HTTPS or SSH")
        if parsed.password or (parsed.scheme == "https" and parsed.username):
            raise SourceRepositoryError("credentials must not be embedded in repository URLs")
        self._validate_host(parsed.hostname)
        return remote

    def _validate_host(self, host: str) -> None:
        normalized = host.casefold().rstrip(".")
        if normalized not in self.allowed_hosts:
            raise SourceRepositoryError("repository host is not in the operator allowlist")

    @classmethod
    def _validate_branch(cls, branch: str) -> None:
        result = cls._command(Path.cwd(), "git", "check-ref-format", "--branch", branch, check=False)
        if result.returncode != 0:
            raise SourceRepositoryError("base branch is not a valid Git branch name")

    def _assert_below_root(self, path: Path) -> None:
        resolved = path.resolve(strict=False)
        if resolved == self.repositories_root or self.repositories_root not in resolved.parents:
            raise SourceRepositoryError("repository path escapes the configured state root")

    @classmethod
    def _git(cls, repository: Path, *arguments: str, timeout: int = 120) -> str:
        result = cls._command(repository, "git", "-C", str(repository), *arguments, timeout=timeout)
        return result.stdout.strip()

    @staticmethod
    def _command(
        cwd: Path,
        *arguments: str,
        timeout: int = 120,
        check: bool = True,
    ) -> subprocess.CompletedProcess[str]:
        environment = {
            key: os.environ[key]
            for key in SourceRepositoryManager._INHERITED_ENVIRONMENT
            if key in os.environ
        }
        environment["GIT_TERMINAL_PROMPT"] = "0"
        try:
            result = subprocess.run(
                list(arguments),
                cwd=cwd,
                env=environment,
                check=False,
                capture_output=True,
                text=True,
                timeout=timeout,
            )
        except (OSError, subprocess.TimeoutExpired) as exc:
            raise SourceRepositoryError(f"Git operation could not complete: {type(exc).__name__}") from exc
        if check and result.returncode != 0:
            message = result.stderr.strip().splitlines()[-1:] or result.stdout.strip().splitlines()[-1:]
            detail = message[0] if message else "Git command failed"
            raise SourceRepositoryError(detail)
        return result


def project_base_ref(repository_url: str, base_branch: str) -> str:
    return f"origin/{base_branch}" if repository_url.strip() else base_branch


__all__ = ["SourceRepositoryError", "SourceRepositoryManager", "project_base_ref"]
