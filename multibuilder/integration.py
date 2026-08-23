from __future__ import annotations

import asyncio
import os
import re
import signal
import time
from collections import defaultdict
from collections.abc import Mapping, Sequence
from dataclasses import dataclass, replace
from enum import StrEnum
from pathlib import Path
from typing import Protocol
from uuid import UUID, uuid4

from .domain import MergeStatus, TaskSpec, TaskType, ValidationStatus

Argv = tuple[str, ...]
_VALIDATION_STAGES = ("build", "typecheck", "lint", "unit", "integration", "security")
_COMMIT_PATTERN = re.compile(r"[0-9a-fA-F]{6,64}")


def _normalize_argv(value: object, *, field: str) -> Argv:
    if isinstance(value, (str, bytes)) or not isinstance(value, Sequence):
        raise ValueError(f"{field} must be an argv sequence, not a shell command string")
    argv = tuple(value)
    if not argv or not all(isinstance(argument, str) for argument in argv) or not argv[0]:
        raise ValueError(f"{field} must contain a nonempty executable and string arguments")
    return argv


def _validate_commit(commit: str) -> str:
    if not _COMMIT_PATTERN.fullmatch(commit):
        raise ValueError("commit must be a hexadecimal object identifier")
    return commit


@dataclass(frozen=True, slots=True)
class ProjectValidationConfig:
    build: Argv | None = None
    typecheck: Argv | None = None
    lint: Argv | None = None
    unit: Argv | None = None
    integration: Argv | None = None
    security: Argv | None = None

    def __post_init__(self) -> None:
        for stage in _VALIDATION_STAGES:
            command = getattr(self, stage)
            if command is not None:
                object.__setattr__(self, stage, _normalize_argv(command, field=f"{stage} argv"))


@dataclass(frozen=True, slots=True)
class ValidationStep:
    stage: str
    argv: Argv

    def __post_init__(self) -> None:
        object.__setattr__(self, "argv", _normalize_argv(self.argv, field=f"{self.stage} argv"))


@dataclass(frozen=True, slots=True)
class ValidationExecutionResult:
    stage: str
    argv: Argv
    status: ValidationStatus
    exit_code: int | None
    stdout: str
    stderr: str
    duration_seconds: float
    timed_out: bool


class ValidationCommandExecutor(Protocol):
    async def execute(
        self,
        step: ValidationStep,
        *,
        cwd: Path,
        timeout_seconds: float,
    ) -> ValidationExecutionResult: ...


@dataclass(frozen=True, slots=True)
class ValidationSuiteResult:
    results: tuple[ValidationExecutionResult, ...]

    @property
    def passed(self) -> bool:
        return bool(self.results) and all(result.status is ValidationStatus.PASSED for result in self.results)


class ValidationRunner:
    def __init__(self, executor: ValidationCommandExecutor) -> None:
        self.executor = executor

    async def run(
        self,
        plan: Sequence[ValidationStep],
        *,
        cwd: Path,
        timeout_seconds: float,
    ) -> ValidationSuiteResult:
        results: list[ValidationExecutionResult] = []
        failed = False
        for step in plan:
            if failed:
                results.append(
                    ValidationExecutionResult(
                        stage=step.stage,
                        argv=step.argv,
                        status=ValidationStatus.SKIPPED,
                        exit_code=None,
                        stdout="",
                        stderr="skipped because an earlier validation failed",
                        duration_seconds=0,
                        timed_out=False,
                    )
                )
                continue
            result = await self.executor.execute(step, cwd=cwd, timeout_seconds=timeout_seconds)
            results.append(result)
            failed = result.status is not ValidationStatus.PASSED
        return ValidationSuiteResult(tuple(results))


@dataclass(frozen=True, slots=True)
class ReviewProviderCandidate:
    name: str
    available: bool = True
    review_capable: bool = True
    preference: float = 0


class ReviewProviderUnavailable(RuntimeError):
    pass


class ReviewProviderSelector:
    def select(
        self,
        implementation_provider: str,
        candidates: Sequence[ReviewProviderCandidate],
    ) -> ReviewProviderCandidate:
        eligible = sorted(
            (candidate for candidate in candidates if candidate.available and candidate.review_capable),
            key=lambda candidate: (-candidate.preference, candidate.name),
        )
        if not eligible:
            raise ReviewProviderUnavailable("no review provider is available")
        return next(
            (candidate for candidate in eligible if candidate.name != implementation_provider),
            eligible[0],
        )


@dataclass(frozen=True, slots=True)
class ReviewTaskRequest:
    task: TaskSpec
    provider: str
    implementation_provider: str
    commit: str


class ReviewTaskFactory:
    def __init__(self, selector: ReviewProviderSelector | None = None) -> None:
        self.selector = selector or ReviewProviderSelector()

    def create(
        self,
        *,
        project_id: UUID,
        implementation_task_id: UUID,
        implementation_provider: str,
        commit: str,
        changed_files: Sequence[str],
        acceptance_criteria: Sequence[str],
        candidates: Sequence[ReviewProviderCandidate],
        task_id: UUID | None = None,
        timeout_seconds: int = 1_200,
    ) -> ReviewTaskRequest:
        _validate_commit(commit)
        provider = self.selector.select(implementation_provider, candidates)
        files_text = "\n".join(f"* {path}" for path in changed_files) or "* no files reported"
        criteria_text = "\n".join(f"* {criterion}" for criterion in acceptance_criteria)
        task = TaskSpec(
            id=task_id or uuid4(),
            project_id=project_id,
            parent_task_id=implementation_task_id,
            task_type=TaskType.REVIEW,
            goal=f"Independently review commit {commit}",
            instructions=(
                f"Review commit {commit} without editing files.\n"
                f"Changed files:\n{files_text}\n"
                f"Acceptance criteria:\n{criteria_text}\n"
                "Inspect correctness, security, regressions, tests, maintainability, and interface compatibility. "
                "Return structured findings with a severity, code, location, summary, and details."
            ),
            dependencies=[implementation_task_id],
            write_scope=[],
            acceptance_criteria=list(acceptance_criteria),
            preferred_capabilities=["review", "testing"],
            preferred_providers=[provider.name],
            timeout_seconds=timeout_seconds,
            retry_limit=1,
        )
        return ReviewTaskRequest(task, provider.name, implementation_provider, commit)


@dataclass(frozen=True, slots=True)
class ReviewFinding:
    code: str
    severity: str
    summary: str
    details: str
    file: str | None = None
    line: int | None = None


@dataclass(frozen=True, slots=True)
class ReviewResult:
    implementation_task_id: UUID
    reviewed_commit: str
    provider: str
    approved: bool
    summary: str
    findings: tuple[ReviewFinding, ...]

    def __post_init__(self) -> None:
        _validate_commit(self.reviewed_commit)

    @property
    def requires_repair(self) -> bool:
        blocking_severities = {"blocker", "critical", "error", "high"}
        return not self.approved or any(finding.severity.casefold() in blocking_severities for finding in self.findings)


@dataclass(frozen=True, slots=True)
class RepairTaskRequest:
    task: TaskSpec
    failed_commit: str
    findings: tuple[ReviewFinding, ...]
    attempt: int
    max_attempts: int


class RepairTaskFactory:
    def create(
        self,
        *,
        project_id: UUID,
        reviewed_task_id: UUID,
        failed_commit: str,
        findings: Sequence[ReviewFinding],
        write_scope: Sequence[str],
        acceptance_criteria: Sequence[str],
        preferred_providers: Sequence[str],
        prior_attempts: int,
        max_attempts: int,
        task_id: UUID | None = None,
        ancestor_task_ids: Sequence[UUID] = (),
        timeout_seconds: int = 1_800,
    ) -> RepairTaskRequest | None:
        _validate_commit(failed_commit)
        if prior_attempts < 0 or max_attempts < 1:
            raise ValueError("repair attempt counts must be positive")
        if prior_attempts >= max_attempts or not findings:
            return None
        if reviewed_task_id in ancestor_task_ids or len(set(ancestor_task_ids)) != len(ancestor_task_ids):
            raise ValueError("repair task would create a task lineage loop")
        next_task_id = task_id or uuid4()
        if next_task_id == reviewed_task_id or next_task_id in ancestor_task_ids:
            raise ValueError("repair task would create a task lineage loop")
        unique_findings = tuple(dict.fromkeys(findings))
        findings_text = "\n".join(self._format_finding(finding) for finding in unique_findings)
        attempt = prior_attempts + 1
        task = TaskSpec(
            id=next_task_id,
            project_id=project_id,
            parent_task_id=reviewed_task_id,
            task_type=TaskType.REPAIR,
            goal=f"Repair review findings for commit {failed_commit}",
            instructions=(
                f"Repair attempt {attempt} of {max_attempts}.\n"
                f"Fix only these independent review findings:\n{findings_text}\n"
                "Add focused regression tests and return one compact result. "
                "Do not create child repair tasks or merge branches."
            ),
            dependencies=[reviewed_task_id],
            write_scope=list(write_scope),
            acceptance_criteria=list(acceptance_criteria),
            preferred_capabilities=["coding", "testing"],
            preferred_providers=list(preferred_providers),
            timeout_seconds=timeout_seconds,
            retry_limit=3,
        )
        return RepairTaskRequest(
            task=task,
            failed_commit=failed_commit,
            findings=unique_findings,
            attempt=attempt,
            max_attempts=max_attempts,
        )

    @staticmethod
    def _format_finding(finding: ReviewFinding) -> str:
        location = finding.file or "repository"
        if finding.line is not None:
            location = f"{location}:{finding.line}"
        return f"[{finding.severity}] {finding.code} at {location}: {finding.summary}. {finding.details}"


@dataclass(frozen=True, slots=True)
class MergeQueueItem:
    id: UUID
    project_id: UUID
    task_id: UUID
    source_branch: str
    commit: str
    status: MergeStatus = MergeStatus.QUEUED
    attempts: int = 0
    max_attempts: int = 1
    conflict_files: tuple[str, ...] = ()
    conflict_details: str | None = None
    integration_commit: str | None = None

    def __post_init__(self) -> None:
        if self.max_attempts < 1 or self.attempts < 0:
            raise ValueError("merge attempt budget must be positive")
        _validate_commit(self.commit)
        if self.integration_commit is not None:
            _validate_commit(self.integration_commit)


class InvalidMergeTransition(RuntimeError):
    pass


class MergeQueueStateMachine:
    _TRANSITIONS = {
        MergeStatus.QUEUED: frozenset({MergeStatus.VALIDATING, MergeStatus.CANCELLED}),
        MergeStatus.VALIDATING: frozenset({MergeStatus.READY, MergeStatus.FAILED, MergeStatus.CANCELLED}),
        MergeStatus.READY: frozenset({MergeStatus.MERGING, MergeStatus.CANCELLED}),
        MergeStatus.MERGING: frozenset({MergeStatus.MERGED, MergeStatus.CONFLICT, MergeStatus.FAILED}),
    }

    def transition(
        self,
        item: MergeQueueItem,
        target: MergeStatus,
        *,
        conflict_files: tuple[str, ...] | None = None,
        conflict_details: str | None = None,
        integration_commit: str | None = None,
    ) -> MergeQueueItem:
        if target not in self._TRANSITIONS.get(item.status, frozenset()):
            raise InvalidMergeTransition(f"cannot transition merge item from {item.status.value} to {target.value}")
        return replace(
            item,
            status=target,
            conflict_files=item.conflict_files if conflict_files is None else conflict_files,
            conflict_details=item.conflict_details if conflict_details is None else conflict_details,
            integration_commit=item.integration_commit if integration_commit is None else integration_commit,
        )


class ProtectedBranchError(ValueError):
    pass


@dataclass(frozen=True, slots=True)
class IntegrationTarget:
    branch: str
    base_ref: str | None = None

    def __post_init__(self) -> None:
        if self.branch != "integration" and not self.branch.startswith("integration/"):
            raise ProtectedBranchError("merge target must be an integration branch")
        if self.base_ref is not None and (
            not self.base_ref
            or self.base_ref.startswith("-")
            or any(character.isspace() for character in self.base_ref)
        ):
            raise ProtectedBranchError("integration base reference is invalid")


@dataclass(frozen=True, slots=True)
class MergeAttemptResult:
    merged: bool
    conflict_files: tuple[str, ...] = ()
    details: str | None = None
    integration_commit: str | None = None


class MergeQueueStore(Protocol):
    async def claim_next(self, project_id: UUID) -> MergeQueueItem | None:
        """Atomically claim the next ready item and return it in merging state."""
        ...

    async def save(self, item: MergeQueueItem) -> None: ...


class MergeBackend(Protocol):
    async def merge(
        self,
        *,
        cwd: Path,
        target: IntegrationTarget,
        commit: str,
    ) -> MergeAttemptResult: ...


class MergeValidationGate:
    def __init__(self, store: MergeQueueStore, runner: ValidationRunner) -> None:
        self.store = store
        self.runner = runner
        self.state_machine = MergeQueueStateMachine()

    async def validate(
        self,
        item: MergeQueueItem,
        plan: Sequence[ValidationStep],
        *,
        cwd: Path,
        timeout_seconds: float,
    ) -> tuple[MergeQueueItem, ValidationSuiteResult]:
        validating = self.state_machine.transition(item, MergeStatus.VALIDATING)
        await self.store.save(validating)
        suite = await self.runner.run(plan, cwd=cwd, timeout_seconds=timeout_seconds)
        if suite.passed:
            completed = self.state_machine.transition(validating, MergeStatus.READY)
        else:
            failed_stages = ", ".join(
                result.stage for result in suite.results if result.status is ValidationStatus.FAILED
            )
            completed = self.state_machine.transition(
                validating,
                MergeStatus.FAILED,
                conflict_details=f"validation failed: {failed_stages or 'no validation gates passed'}",
            )
        await self.store.save(completed)
        return completed, suite


class MergeCoordinator:
    def __init__(self, store: MergeQueueStore, backend: MergeBackend) -> None:
        self.store = store
        self.backend = backend
        self.state_machine = MergeQueueStateMachine()
        self._project_locks: defaultdict[UUID, asyncio.Lock] = defaultdict(asyncio.Lock)

    async def process_next(
        self,
        project_id: UUID,
        *,
        cwd: Path,
        target: IntegrationTarget,
    ) -> MergeQueueItem | None:
        async with self._project_locks[project_id]:
            item = await self.store.claim_next(project_id)
            if item is None:
                return None
            if item.status is not MergeStatus.MERGING:
                raise InvalidMergeTransition("claimed merge item must be in merging state")
            if item.attempts > item.max_attempts:
                exhausted = self.state_machine.transition(
                    item,
                    MergeStatus.FAILED,
                    conflict_details="merge attempt limit reached",
                )
                await self.store.save(exhausted)
                return exhausted
            try:
                attempt = await self.backend.merge(cwd=cwd, target=target, commit=item.commit)
            except Exception as exc:
                failed = self.state_machine.transition(
                    item,
                    MergeStatus.FAILED,
                    conflict_details=f"merge backend failed: {exc}",
                )
                await self.store.save(failed)
                return failed
            if attempt.merged:
                result = self.state_machine.transition(
                    item,
                    MergeStatus.MERGED,
                    integration_commit=attempt.integration_commit,
                )
            elif attempt.conflict_files:
                result = self.state_machine.transition(
                    item,
                    MergeStatus.CONFLICT,
                    conflict_files=attempt.conflict_files,
                    conflict_details=attempt.details,
                )
            else:
                result = self.state_machine.transition(
                    item,
                    MergeStatus.FAILED,
                    conflict_details=attempt.details or "merge failed without conflict details",
                )
            await self.store.save(result)
            return result


class ArgvCommandExecutor:
    _INHERITED_ENVIRONMENT = (
        "PATH",
        "HOME",
        "USER",
        "LOGNAME",
        "LANG",
        "LC_ALL",
        "TERM",
        "TMPDIR",
        "CI",
        "VIRTUAL_ENV",
        "SSL_CERT_FILE",
        "SSL_CERT_DIR",
        "GIT_AUTHOR_NAME",
        "GIT_AUTHOR_EMAIL",
        "GIT_COMMITTER_NAME",
        "GIT_COMMITTER_EMAIL",
    )

    def __init__(self, *, environment: Mapping[str, str] | None = None) -> None:
        self.environment = dict(environment or {})

    async def execute(
        self,
        step: ValidationStep,
        *,
        cwd: Path,
        timeout_seconds: float,
    ) -> ValidationExecutionResult:
        started = time.monotonic()
        child_environment = {key: os.environ[key] for key in self._INHERITED_ENVIRONMENT if key in os.environ}
        child_environment.update(self.environment)
        try:
            process = await asyncio.create_subprocess_exec(
                *step.argv,
                cwd=cwd,
                env=child_environment,
                stdin=asyncio.subprocess.DEVNULL,
                stdout=asyncio.subprocess.PIPE,
                stderr=asyncio.subprocess.PIPE,
                start_new_session=True,
            )
        except OSError as exc:
            return ValidationExecutionResult(
                stage=step.stage,
                argv=step.argv,
                status=ValidationStatus.FAILED,
                exit_code=None,
                stdout="",
                stderr=str(exc),
                duration_seconds=time.monotonic() - started,
                timed_out=False,
            )
        timed_out = False
        try:
            stdout_bytes, stderr_bytes = await asyncio.wait_for(
                process.communicate(),
                timeout=timeout_seconds,
            )
        except TimeoutError:
            timed_out = True
            await self._terminate(process)
            stdout_bytes, stderr_bytes = await process.communicate()
        except asyncio.CancelledError:
            await self._terminate(process)
            raise
        exit_code = int(process.returncode if process.returncode is not None else -signal.SIGKILL)
        return ValidationExecutionResult(
            stage=step.stage,
            argv=step.argv,
            status=ValidationStatus.PASSED if exit_code == 0 and not timed_out else ValidationStatus.FAILED,
            exit_code=exit_code,
            stdout=stdout_bytes.decode("utf-8", errors="replace"),
            stderr=stderr_bytes.decode("utf-8", errors="replace"),
            duration_seconds=time.monotonic() - started,
            timed_out=timed_out,
        )

    @staticmethod
    async def _terminate(process: asyncio.subprocess.Process) -> None:
        if process.returncode is not None:
            return
        try:
            os.killpg(process.pid, signal.SIGTERM)
        except ProcessLookupError:
            return
        try:
            await asyncio.wait_for(process.wait(), timeout=2)
        except TimeoutError:
            try:
                os.killpg(process.pid, signal.SIGKILL)
            except ProcessLookupError:
                return
            await process.wait()


@dataclass(frozen=True, slots=True)
class CommandResult:
    exit_code: int
    stdout: str
    stderr: str
    timed_out: bool = False
    duration_seconds: float = 0


class CommandRunner(Protocol):
    async def run(
        self,
        argv: Argv,
        *,
        cwd: Path,
        timeout_seconds: float,
    ) -> CommandResult: ...


class SubprocessCommandRunner:
    async def run(
        self,
        argv: Argv,
        *,
        cwd: Path,
        timeout_seconds: float,
    ) -> CommandResult:
        result = await ArgvCommandExecutor().execute(
            ValidationStep("command", argv),
            cwd=cwd,
            timeout_seconds=timeout_seconds,
        )
        return CommandResult(
            exit_code=int(result.exit_code if result.exit_code is not None else -signal.SIGKILL),
            stdout=result.stdout,
            stderr=result.stderr,
            timed_out=result.timed_out,
            duration_seconds=result.duration_seconds,
        )


class GitMergeBackend:
    def __init__(self, runner: CommandRunner | None = None, *, timeout_seconds: float = 300) -> None:
        self.runner = runner or SubprocessCommandRunner()
        self.timeout_seconds = timeout_seconds

    async def merge(
        self,
        *,
        cwd: Path,
        target: IntegrationTarget,
        commit: str,
    ) -> MergeAttemptResult:
        if not _COMMIT_PATTERN.fullmatch(commit):
            return MergeAttemptResult(False, details="commit must be a hexadecimal object identifier")

        existing = await self._run(("git", "rev-parse", "-q", "--verify", "MERGE_HEAD"), cwd)
        if existing.exit_code == 0:
            return MergeAttemptResult(False, details="repository already has an active merge")

        checkout = await self._run(("git", "switch", "--", target.branch), cwd)
        if checkout.exit_code != 0 and target.base_ref:
            checkout = await self._run(("git", "switch", "-c", target.branch, "--", target.base_ref), cwd)
        if checkout.exit_code != 0:
            return MergeAttemptResult(False, details=self._details("cannot switch integration branch", checkout))

        merge = await self._run(("git", "merge", "--no-ff", "--no-edit", commit), cwd)
        if merge.exit_code == 0:
            head = await self._run(("git", "rev-parse", "HEAD"), cwd)
            integration_commit = head.stdout.strip() if head.exit_code == 0 else None
            return MergeAttemptResult(
                True,
                details=merge.stdout.strip() or None,
                integration_commit=integration_commit,
            )

        conflicts = await self._run(("git", "diff", "--name-only", "--diff-filter=U"), cwd)
        conflict_files = tuple(line for line in conflicts.stdout.splitlines() if line)
        active_merge = await self._run(("git", "rev-parse", "-q", "--verify", "MERGE_HEAD"), cwd)
        abort_detail = ""
        if active_merge.exit_code == 0:
            abort = await self._run(("git", "merge", "--abort"), cwd)
            if abort.exit_code != 0:
                abort_detail = f"; merge abort failed: {self._details('git error', abort)}"
        return MergeAttemptResult(
            False,
            conflict_files=conflict_files,
            details=f"{self._details('merge failed', merge)}{abort_detail}",
        )

    async def _run(self, argv: Argv, cwd: Path) -> CommandResult:
        return await self.runner.run(argv, cwd=cwd, timeout_seconds=self.timeout_seconds)

    @staticmethod
    def _details(prefix: str, result: CommandResult) -> str:
        output = result.stderr.strip() or result.stdout.strip() or f"exit code {result.exit_code}"
        return f"{prefix}: {output}"


class PreviewStatus(StrEnum):
    DEPLOYED = "deployed"
    FAILED = "failed"
    SKIPPED = "skipped"


@dataclass(frozen=True, slots=True)
class PreviewDeploymentRequest:
    project_id: UUID
    merge_queue_id: UUID
    commit: str
    target: IntegrationTarget
    cwd: Path


@dataclass(frozen=True, slots=True)
class PreviewDeploymentResult:
    status: PreviewStatus
    deployment_id: str | None
    url: str | None
    details: str | None


class PreviewDeploymentHook(Protocol):
    async def deploy(self, request: PreviewDeploymentRequest) -> PreviewDeploymentResult: ...


class PreviewDeploymentCoordinator:
    def __init__(self, hook: PreviewDeploymentHook) -> None:
        self.hook = hook

    async def deploy(
        self,
        item: MergeQueueItem,
        validation: ValidationSuiteResult,
        *,
        cwd: Path,
        target: IntegrationTarget,
    ) -> PreviewDeploymentResult:
        if item.status is not MergeStatus.MERGED:
            return PreviewDeploymentResult(PreviewStatus.SKIPPED, None, None, "merge is not complete")
        if not validation.passed:
            return PreviewDeploymentResult(PreviewStatus.SKIPPED, None, None, "validation did not pass")
        if not item.integration_commit:
            return PreviewDeploymentResult(PreviewStatus.SKIPPED, None, None, "integration commit is unavailable")
        return await self.hook.deploy(
            PreviewDeploymentRequest(
                project_id=item.project_id,
                merge_queue_id=item.id,
                commit=item.integration_commit,
                target=target,
                cwd=cwd,
            )
        )


class ValidationPlanner:
    def plan(self, config: ProjectValidationConfig) -> tuple[ValidationStep, ...]:
        return tuple(
            ValidationStep(stage, command)
            for stage in _VALIDATION_STAGES
            if (command := getattr(config, stage)) is not None
        )
