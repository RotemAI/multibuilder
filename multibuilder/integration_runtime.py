from __future__ import annotations

import json
from collections.abc import Callable, Sequence
from dataclasses import dataclass
from pathlib import Path
from typing import Protocol
from uuid import UUID, uuid4

from .domain import (
    MergeQueueRecord,
    MergeStatus,
    ProjectSnapshot,
    ProjectSpec,
    TaskRecord,
    TaskSpec,
    TaskStatus,
    TaskType,
)
from .integration import (
    IntegrationTarget,
    MergeBackend,
    MergeCoordinator,
    MergeQueueItem,
    MergeValidationGate,
    ProjectValidationConfig,
    RepairTaskFactory,
    ReviewFinding,
    ReviewProviderCandidate,
    ReviewResult,
    ReviewTaskFactory,
    ValidationPlanner,
    ValidationRunner,
    ValidationSuiteResult,
)
from .routing import ProviderProfile
from .sources import project_base_ref


class IntegrationRepository(Protocol):
    async def list_schedulable_projects(self) -> Sequence[ProjectSpec]: ...

    async def get_project_snapshot(self, project_id: UUID) -> ProjectSnapshot: ...

    async def list_provider_profiles(self) -> Sequence[ProviderProfile]: ...

    async def stage_review(self, code_task_id: UUID, review: TaskSpec) -> bool: ...

    async def stage_pipeline_child(self, parent_task_id: UUID, child: TaskSpec) -> bool: ...

    async def enqueue_merge(
        self,
        task_id: UUID,
        *,
        commit: str,
        max_attempts: int = 1,
    ) -> MergeQueueItem: ...

    async def save(self, item: MergeQueueItem) -> None: ...

    async def claim_next(self, project_id: UUID) -> MergeQueueItem | None: ...

    async def record_validation_results(
        self,
        item: MergeQueueItem,
        suite: ValidationSuiteResult,
        *,
        run_id: UUID | None = None,
    ) -> None: ...

    async def finalize_merge(self, item: MergeQueueItem) -> None: ...

    async def append_event(
        self,
        project_id: UUID,
        event_type: str,
        payload: dict,
        *,
        task_id: UUID | None = None,
        run_id: UUID | None = None,
        level: str = "info",
    ) -> object: ...


RepositoryResolver = Callable[[ProjectSpec], Path]
ValidationConfigResolver = Callable[[ProjectSpec, Path], ProjectValidationConfig]


@dataclass(frozen=True, slots=True)
class IntegrationTickReport:
    staged_reviews: int = 0
    queued_merges: int = 0
    validations: int = 0
    merged: int = 0
    repairs: int = 0
    lead_escalations: int = 0
    failures: int = 0

    def add(self, other: IntegrationTickReport) -> IntegrationTickReport:
        return IntegrationTickReport(
            staged_reviews=self.staged_reviews + other.staged_reviews,
            queued_merges=self.queued_merges + other.queued_merges,
            validations=self.validations + other.validations,
            merged=self.merged + other.merged,
            repairs=self.repairs + other.repairs,
            lead_escalations=self.lead_escalations + other.lead_escalations,
            failures=self.failures + other.failures,
        )


class AutonomousIntegrationRuntime:
    _CODE_TASK_TYPES = frozenset({TaskType.IMPLEMENTATION, TaskType.REPAIR, TaskType.TEST})

    def __init__(
        self,
        *,
        repository: IntegrationRepository,
        validation_runner: ValidationRunner,
        merge_backend: MergeBackend,
        repository_resolver: RepositoryResolver,
        validation_config_resolver: ValidationConfigResolver,
        max_repair_tasks: int = 2,
        merge_attempts: int = 1,
        validation_timeout_seconds: float = 1_800,
    ) -> None:
        if max_repair_tasks < 1 or merge_attempts < 1:
            raise ValueError("integration recovery budgets must be positive")
        self.repository = repository
        self.validation_runner = validation_runner
        self.merge_backend = merge_backend
        self.repository_resolver = repository_resolver
        self.validation_config_resolver = validation_config_resolver
        self.max_repair_tasks = max_repair_tasks
        self.merge_attempts = merge_attempts
        self.validation_timeout_seconds = validation_timeout_seconds
        self.review_factory = ReviewTaskFactory()
        self.repair_factory = RepairTaskFactory()
        self.validation_planner = ValidationPlanner()
        self.merge_gate = MergeValidationGate(repository, validation_runner)
        self.merge_coordinator = MergeCoordinator(repository, merge_backend)

    async def tick(self) -> IntegrationTickReport:
        report = IntegrationTickReport()
        providers = tuple(await self.repository.list_provider_profiles())
        projects = sorted(await self.repository.list_schedulable_projects(), key=lambda item: str(item.id))
        for project in projects:
            try:
                report = report.add(await self._tick_project(project, providers))
            except Exception as exc:
                await self.repository.append_event(
                    project.id,
                    "integration.cycle_failed",
                    {"reason": f"{type(exc).__name__}: {exc}"[-4_000:]},
                    level="error",
                )
                report = report.add(IntegrationTickReport(failures=1))
        return report

    async def _tick_project(
        self,
        project: ProjectSpec,
        providers: Sequence[ProviderProfile],
    ) -> IntegrationTickReport:
        report = IntegrationTickReport()
        snapshot = await self.repository.get_project_snapshot(project.id)
        report = report.add(await self._stage_reviews(snapshot, providers))

        snapshot = await self.repository.get_project_snapshot(project.id)
        report = report.add(await self._process_reviews(snapshot, providers))

        snapshot = await self.repository.get_project_snapshot(project.id)
        report = report.add(await self._validate_next(snapshot, providers))

        snapshot = await self.repository.get_project_snapshot(project.id)
        report = report.add(await self._merge_next(snapshot, providers))
        return report

    async def _stage_reviews(
        self,
        snapshot: ProjectSnapshot,
        providers: Sequence[ProviderProfile],
    ) -> IntegrationTickReport:
        children = self._children_by_parent(snapshot.tasks)
        candidates = self._review_candidates(providers)
        staged = 0
        for task in snapshot.tasks:
            result = task.result
            if (
                task.task_type not in self._CODE_TASK_TYPES
                or task.status not in {TaskStatus.SUCCEEDED, TaskStatus.AWAITING_REVIEW}
                or result is None
                or not result.commit
                or not result.files_changed
                or any(child.task_type is TaskType.REVIEW for child in children.get(task.id, ()))
            ):
                continue
            request = self.review_factory.create(
                project_id=task.project_id,
                implementation_task_id=task.id,
                implementation_provider=task.assigned_provider or "",
                commit=result.commit,
                changed_files=result.files_changed,
                acceptance_criteria=task.acceptance_criteria,
                candidates=candidates,
            )
            if await self.repository.stage_review(task.id, request.task):
                staged += 1
        return IntegrationTickReport(staged_reviews=staged)

    async def _process_reviews(
        self,
        snapshot: ProjectSnapshot,
        providers: Sequence[ProviderProfile],
    ) -> IntegrationTickReport:
        tasks = {task.id: task for task in snapshot.tasks}
        children = self._children_by_parent(snapshot.tasks)
        merged_task_ids = {item.task_id for item in snapshot.merge_queue}
        report = IntegrationTickReport()
        for review in snapshot.tasks:
            if review.task_type is not TaskType.REVIEW or review.status is not TaskStatus.SUCCEEDED:
                continue
            if review.parent_task_id is None or review.result is None:
                continue
            code = tasks.get(review.parent_task_id)
            if code is None or code.result is None or not code.result.commit:
                continue
            if code.id in merged_task_ids or children.get(review.id):
                continue
            findings = self._review_findings(review)
            review_result = ReviewResult(
                implementation_task_id=code.id,
                reviewed_commit=code.result.commit,
                provider=review.assigned_provider or "unknown",
                approved=not findings,
                summary=review.result.summary,
                findings=findings,
            )
            if not review_result.requires_repair:
                await self.repository.enqueue_merge(
                    code.id,
                    commit=code.result.commit,
                    max_attempts=self.merge_attempts,
                )
                report = report.add(IntegrationTickReport(queued_merges=1))
                continue
            report = report.add(
                await self._surface_failure(
                    snapshot,
                    source_task=code,
                    failure_parent=review,
                    findings=review_result.findings,
                    providers=providers,
                )
            )
        return report

    async def _validate_next(
        self,
        snapshot: ProjectSnapshot,
        providers: Sequence[ProviderProfile],
    ) -> IntegrationTickReport:
        if any(item.status in {MergeStatus.VALIDATING, MergeStatus.MERGING} for item in snapshot.merge_queue):
            return IntegrationTickReport()
        queued = next(
            (
                item
                for item in sorted(snapshot.merge_queue, key=lambda value: value.position)
                if item.status is MergeStatus.QUEUED
            ),
            None,
        )
        if queued is None:
            return IntegrationTickReport()
        item = self._merge_item(queued)
        workspace = next((value for value in snapshot.workspaces if value.id == queued.workspace_id), None)
        source_task = next((value for value in snapshot.tasks if value.id == queued.task_id), None)
        if workspace is None or source_task is None:
            raise RuntimeError("merge queue item lost its workspace or task")
        worktree = Path(workspace.worktree_path)
        config = self.validation_config_resolver(snapshot.project, worktree)
        plan = self.validation_planner.plan(config)
        completed, suite = await self.merge_gate.validate(
            item,
            plan,
            cwd=worktree,
            timeout_seconds=self.validation_timeout_seconds,
        )
        await self.repository.record_validation_results(item, suite)
        report = IntegrationTickReport(validations=1)
        if completed.status is not MergeStatus.READY:
            findings = self._validation_findings(suite)
            if not findings:
                findings = (
                    ReviewFinding(
                        "VALIDATION-CONFIG",
                        "high",
                        "No validation gate passed",
                        "Add explicit build, typecheck, lint, unit, integration, or security commands.",
                    ),
                )
            report = report.add(
                await self._surface_failure(
                    snapshot,
                    source_task=source_task,
                    failure_parent=source_task,
                    findings=findings,
                    providers=providers,
                )
            )
        return report

    async def _merge_next(
        self,
        snapshot: ProjectSnapshot,
        providers: Sequence[ProviderProfile],
    ) -> IntegrationTickReport:
        if not any(item.status is MergeStatus.READY for item in snapshot.merge_queue):
            return IntegrationTickReport()
        target = IntegrationTarget(
            f"integration/{snapshot.project.id.hex[:12]}",
            base_ref=project_base_ref(snapshot.project.repository_url, snapshot.project.base_branch),
        )
        result = await self.merge_coordinator.process_next(
            snapshot.project.id,
            cwd=self.repository_resolver(snapshot.project),
            target=target,
        )
        if result is None:
            return IntegrationTickReport()
        if result.status is MergeStatus.MERGED:
            await self.repository.finalize_merge(result)
            return IntegrationTickReport(merged=1)
        source_task = next((task for task in snapshot.tasks if task.id == result.task_id), None)
        if source_task is None:
            raise RuntimeError("failed merge lost its source task")
        files = ", ".join(result.conflict_files) or "no paths reported"
        finding = ReviewFinding(
            "MERGE-CONFLICT" if result.status is MergeStatus.CONFLICT else "MERGE-FAILURE",
            "high",
            "Integration merge failed",
            f"{result.conflict_details or 'merge failed'}; affected paths: {files}",
        )
        return IntegrationTickReport(failures=1).add(
            await self._surface_failure(
                snapshot,
                source_task=source_task,
                failure_parent=source_task,
                findings=(finding,),
                providers=providers,
            )
        )

    async def _surface_failure(
        self,
        snapshot: ProjectSnapshot,
        *,
        source_task: TaskRecord,
        failure_parent: TaskRecord,
        findings: Sequence[ReviewFinding],
        providers: Sequence[ProviderProfile],
    ) -> IntegrationTickReport:
        if source_task.result is None or not source_task.result.commit:
            return await self._stage_lead(snapshot, failure_parent, findings)
        repair_count = self._repair_count(source_task, snapshot.tasks)
        preferred = tuple(
            provider.name for provider in providers if provider.available and "coding" in provider.capabilities
        )
        request = self.repair_factory.create(
            project_id=source_task.project_id,
            reviewed_task_id=failure_parent.id,
            failed_commit=source_task.result.commit,
            findings=findings,
            write_scope=source_task.write_scope,
            acceptance_criteria=source_task.acceptance_criteria,
            preferred_providers=preferred,
            prior_attempts=repair_count,
            max_attempts=self.max_repair_tasks,
            ancestor_task_ids=self._ancestor_ids(failure_parent, snapshot.tasks),
        )
        if request is None:
            return await self._stage_lead(snapshot, failure_parent, findings)
        repair = request.task.model_copy(
            update={
                "instructions": (
                    "The scheduler initialized this repair workspace at reviewed commit "
                    f"{source_task.result.commit}. Do not cherry-pick, switch branches, stage, commit, or merge.\n"
                    f"{request.task.instructions}"
                )
            }
        )
        created = await self.repository.stage_pipeline_child(failure_parent.id, repair)
        return IntegrationTickReport(repairs=1 if created else 0)

    async def _stage_lead(
        self,
        snapshot: ProjectSnapshot,
        failure_parent: TaskRecord,
        findings: Sequence[ReviewFinding],
    ) -> IntegrationTickReport:
        evidence = "\n".join(
            f"[{finding.severity}] {finding.code}: {finding.summary}. {finding.details}" for finding in findings
        )[-6_000:]
        task = TaskSpec(
            id=uuid4(),
            project_id=snapshot.project.id,
            parent_task_id=failure_parent.id,
            task_type=TaskType.WORKSTREAM_LEAD,
            goal=f"Replan failed integration for {failure_parent.goal}"[:2_000],
            instructions=(
                "Diagnose the bounded integration or repair failure and propose a finite replacement task DAG. "
                "Do not directly merge a branch.\n\n"
                f"Failure evidence:\n{evidence}"
            ),
            dependencies=[],
            write_scope=[],
            acceptance_criteria=["The failure has a root cause and finite repair plan"],
            preferred_capabilities=["reasoning"],
            preferred_providers=[],
            timeout_seconds=1_800,
            retry_limit=1,
        )
        created = await self.repository.stage_pipeline_child(failure_parent.id, task)
        return IntegrationTickReport(lead_escalations=1 if created else 0, failures=1)

    @staticmethod
    def _review_candidates(providers: Sequence[ProviderProfile]) -> tuple[ReviewProviderCandidate, ...]:
        return tuple(
            ReviewProviderCandidate(
                provider.name,
                available=provider.available,
                review_capable="review" in provider.capabilities,
                preference=provider.strength * provider.recent_success_rate,
            )
            for provider in providers
        )

    @staticmethod
    def _review_findings(review: TaskRecord) -> tuple[ReviewFinding, ...]:
        assert review.result is not None
        findings = [
            ReviewFinding(f"REVIEW-{index:03d}", "high", issue, issue)
            for index, issue in enumerate(review.result.remaining_issues, start=1)
        ]
        for index, test in enumerate(review.result.test_results, start=1):
            if not test.passed:
                findings.append(
                    ReviewFinding(
                        f"TEST-{index:03d}",
                        "high",
                        f"Review validation failed: {test.command}",
                        test.output or test.summary or "The review reported a failed validation.",
                    )
                )
        return tuple(findings)

    @staticmethod
    def _validation_findings(suite: ValidationSuiteResult) -> tuple[ReviewFinding, ...]:
        return tuple(
            ReviewFinding(
                f"VALIDATION-{index:03d}",
                "high",
                f"{result.stage} validation failed",
                (result.stderr or result.stdout or "The validation command failed.")[-4_000:],
            )
            for index, result in enumerate(suite.results, start=1)
            if result.status.value == "failed"
        )

    @staticmethod
    def _children_by_parent(tasks: Sequence[TaskRecord]) -> dict[UUID, list[TaskRecord]]:
        children: dict[UUID, list[TaskRecord]] = {}
        for task in tasks:
            if task.parent_task_id is not None:
                children.setdefault(task.parent_task_id, []).append(task)
        return children

    @staticmethod
    def _ancestor_ids(task: TaskRecord, tasks: Sequence[TaskRecord]) -> tuple[UUID, ...]:
        by_id = {item.id: item for item in tasks}
        ancestors: list[UUID] = []
        current = task
        while current.parent_task_id is not None:
            parent = by_id.get(current.parent_task_id)
            if parent is None or parent.id in ancestors:
                break
            ancestors.append(parent.id)
            current = parent
        return tuple(ancestors)

    @classmethod
    def _repair_count(cls, task: TaskRecord, tasks: Sequence[TaskRecord]) -> int:
        by_id = {item.id: item for item in tasks}
        count = 0
        current: TaskRecord | None = task
        visited: set[UUID] = set()
        while current is not None and current.id not in visited:
            visited.add(current.id)
            if current.task_type is TaskType.REPAIR:
                count += 1
            current = by_id.get(current.parent_task_id) if current.parent_task_id else None
        return count

    @staticmethod
    def _merge_item(record: MergeQueueRecord) -> MergeQueueItem:
        return MergeQueueItem(
            id=record.id,
            project_id=record.project_id,
            task_id=record.task_id,
            source_branch=record.branch,
            commit=record.commit,
            status=record.status,
            attempts=record.attempts,
            max_attempts=record.max_attempts,
            conflict_files=tuple(record.conflict_files),
            conflict_details=record.conflict_details,
            integration_commit=record.integration_commit,
        )


def load_validation_config(project: ProjectSpec, worktree: Path) -> ProjectValidationConfig:
    path = worktree / ".multibuilder" / "validation.json"
    if not path.is_file():
        return ProjectValidationConfig()
    payload = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(payload, dict):
        raise ValueError("validation configuration must be an object")
    unknown = set(payload).difference({"build", "typecheck", "lint", "unit", "integration", "security"})
    if unknown:
        raise ValueError("unknown validation stage: " + sorted(unknown)[0])
    return ProjectValidationConfig(**payload)


__all__ = [
    "AutonomousIntegrationRuntime",
    "IntegrationTickReport",
    "load_validation_config",
]
