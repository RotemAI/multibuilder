from __future__ import annotations

from datetime import datetime
from enum import StrEnum
from typing import Any
from uuid import UUID

from pydantic import BaseModel, ConfigDict, Field, model_validator


class TaskType(StrEnum):
    DIRECTOR = "director"
    WORKSTREAM_LEAD = "workstream_lead"
    EXPLORATION = "exploration"
    IMPLEMENTATION = "implementation"
    TEST = "test"
    REVIEW = "review"
    REPAIR = "repair"
    INTEGRATION = "integration"
    DEPLOYMENT = "deployment"


class ProjectStatus(StrEnum):
    PLANNING = "planning"
    RUNNING = "running"
    PAUSED = "paused"
    BLOCKED = "blocked"
    FAILED = "failed"
    COMPLETED = "completed"
    CANCELLED = "cancelled"


class TaskStatus(StrEnum):
    PENDING = "pending"
    READY = "ready"
    QUEUED = "queued"
    RUNNING = "running"
    AWAITING_REVIEW = "awaiting_review"
    SUCCEEDED = "succeeded"
    FAILED = "failed"
    BLOCKED = "blocked"
    CANCELLED = "cancelled"


class RunStatus(StrEnum):
    STARTING = "starting"
    RUNNING = "running"
    SUCCEEDED = "succeeded"
    FAILED = "failed"
    TIMED_OUT = "timed_out"
    CANCELLED = "cancelled"
    LOST = "lost"


class WorkspaceStatus(StrEnum):
    ACTIVE = "active"
    MERGED = "merged"
    RELEASED = "released"
    FAILED = "failed"


class MilestoneStatus(StrEnum):
    PENDING = "pending"
    ACTIVE = "active"
    COMPLETED = "completed"
    BLOCKED = "blocked"


class MergeStatus(StrEnum):
    QUEUED = "queued"
    VALIDATING = "validating"
    READY = "ready"
    MERGING = "merging"
    MERGED = "merged"
    CONFLICT = "conflict"
    FAILED = "failed"
    CANCELLED = "cancelled"


class ValidationStatus(StrEnum):
    PENDING = "pending"
    RUNNING = "running"
    PASSED = "passed"
    FAILED = "failed"
    SKIPPED = "skipped"


class ProjectSpec(BaseModel):
    model_config = ConfigDict(extra="forbid")

    id: UUID
    name: str = Field(min_length=1, max_length=120, pattern=r"^[a-zA-Z0-9][a-zA-Z0-9._-]*$")
    goal: str = Field(min_length=1, max_length=30_000)
    repository_url: str = Field(default="", max_length=2_000)
    base_branch: str = Field(default="main", min_length=1, max_length=255)
    acceptance_criteria: list[str] = Field(min_length=1)
    max_parallelism: int = Field(ge=1, le=256)


class TaskSpec(BaseModel):
    model_config = ConfigDict(extra="forbid")

    id: UUID
    project_id: UUID
    parent_task_id: UUID | None
    task_type: TaskType
    goal: str = Field(min_length=1, max_length=2_000)
    instructions: str = Field(min_length=1, max_length=30_000)
    dependencies: list[UUID]
    write_scope: list[str]
    acceptance_criteria: list[str] = Field(min_length=1)
    preferred_capabilities: list[str]
    preferred_providers: list[str]
    timeout_seconds: int = Field(ge=30, le=86_400)
    retry_limit: int = Field(ge=0, le=10)

    @model_validator(mode="after")
    def validate_graph_references(self) -> TaskSpec:
        if self.id in self.dependencies:
            raise ValueError("a task cannot depend on itself")
        if self.parent_task_id == self.id:
            raise ValueError("a task cannot be its own parent")
        return self


class FollowupTaskProposal(BaseModel):
    model_config = ConfigDict(extra="forbid")

    key: str = Field(min_length=1, max_length=80, pattern=r"^[a-z0-9][a-z0-9_-]*$")
    task_type: TaskType
    goal: str = Field(min_length=1, max_length=2_000)
    instructions: str = Field(min_length=1, max_length=30_000)
    dependencies: list[str]
    write_scope: list[str]
    acceptance_criteria: list[str] = Field(min_length=1)
    preferred_capabilities: list[str]
    preferred_providers: list[str]
    timeout_seconds: int = Field(ge=30, le=86_400)
    retry_limit: int = Field(ge=0, le=10)
    priority: int = Field(default=0, ge=-10_000, le=10_000)

    @model_validator(mode="after")
    def validate_dependencies(self) -> FollowupTaskProposal:
        if self.key in self.dependencies:
            raise ValueError("a proposed task cannot depend on itself")
        return self


class MilestoneProposal(BaseModel):
    model_config = ConfigDict(extra="forbid")

    key: str = Field(min_length=1, max_length=80, pattern=r"^[a-z0-9][a-z0-9_-]*$")
    title: str = Field(min_length=1, max_length=240)
    description: str = Field(min_length=1, max_length=10_000)
    acceptance_criteria: list[str] = Field(min_length=1)
    task_keys: list[str] = Field(min_length=1)


class TaskTestResult(BaseModel):
    model_config = ConfigDict(extra="forbid")

    command: str = Field(min_length=1, max_length=4_000)
    passed: bool
    summary: str = Field(default="", max_length=4_000)
    output: str = Field(default="", max_length=10_000)
    duration_seconds: float | None = Field(default=None, ge=0)


class CompletedTaskResult(BaseModel):
    model_config = ConfigDict(extra="forbid")

    summary: str = Field(min_length=1, max_length=10_000)
    commit: str | None
    files_changed: list[str]
    commands_run: list[str]
    test_results: list[TaskTestResult]
    remaining_issues: list[str]
    proposed_followup_tasks: list[FollowupTaskProposal]
    proposed_milestones: list[MilestoneProposal] = Field(default_factory=list)


class TaskRecord(TaskSpec):
    status: TaskStatus
    priority: int
    retry_count: int
    assigned_provider: str | None
    assigned_model: str | None
    blocked_reason: str | None
    result: CompletedTaskResult | None
    created_at: datetime
    updated_at: datetime


class EventRecord(BaseModel):
    id: int
    project_id: UUID
    task_id: UUID | None
    run_id: UUID | None
    event_type: str
    level: str
    payload: dict[str, Any]
    created_at: datetime


class AgentRunRecord(BaseModel):
    id: UUID
    project_id: UUID
    task_id: UUID
    parent_run_id: UUID | None
    provider: str
    model: str | None
    role: str
    status: RunStatus
    attempt: int
    pid: int | None
    session_id: str | None
    started_at: datetime
    heartbeat_at: datetime
    progress_at: datetime
    finished_at: datetime | None
    failure_class: str | None
    failure_message: str | None
    result: CompletedTaskResult | None


class WorkspaceRecord(BaseModel):
    id: UUID
    project_id: UUID
    task_id: UUID
    repository_path: str
    worktree_path: str
    branch: str
    base_commit: str
    write_scope: list[str]
    status: WorkspaceStatus
    port: int | None
    created_at: datetime
    updated_at: datetime


class MilestoneRecord(BaseModel):
    id: UUID
    project_id: UUID
    title: str
    description: str
    acceptance_criteria: list[str]
    task_ids: list[UUID]
    status: MilestoneStatus
    ordinal: int
    created_at: datetime
    updated_at: datetime


class MergeQueueRecord(BaseModel):
    id: UUID
    project_id: UUID
    task_id: UUID
    workspace_id: UUID
    commit: str
    branch: str
    status: MergeStatus
    position: int
    attempts: int = 0
    max_attempts: int = 1
    conflict_files: list[str] = Field(default_factory=list)
    conflict_details: str | None
    integration_commit: str | None = None
    created_at: datetime
    updated_at: datetime


class ValidationRecord(BaseModel):
    id: UUID
    project_id: UUID
    task_id: UUID | None
    run_id: UUID | None
    merge_queue_id: UUID | None
    stage: str
    command: str
    status: ValidationStatus
    output: str
    duration_seconds: float | None
    created_at: datetime
    finished_at: datetime | None


class ProviderState(BaseModel):
    name: str
    capabilities: list[str]
    active_runs: int
    max_concurrency: int
    available: bool
    rate_limited_until: datetime | None
    latency_p95_seconds: float
    recent_success_rate: float
    relative_cost: float


class ProjectSummary(BaseModel):
    project: ProjectSpec
    status: ProjectStatus
    blocked_reason: str | None = None
    task_counts: dict[str, int] = Field(default_factory=dict)
    created_at: datetime
    updated_at: datetime


class ProjectSnapshot(BaseModel):
    project: ProjectSpec
    status: ProjectStatus
    tasks: list[TaskRecord]
    milestones: list[MilestoneRecord] = Field(default_factory=list)
    runs: list[AgentRunRecord] = Field(default_factory=list)
    workspaces: list[WorkspaceRecord] = Field(default_factory=list)
    merge_queue: list[MergeQueueRecord] = Field(default_factory=list)
    validations: list[ValidationRecord] = Field(default_factory=list)
    providers: list[ProviderState] = Field(default_factory=list)
    critical_path: list[UUID] = Field(default_factory=list)
    blockers: list[dict[str, Any]] = Field(default_factory=list)
    progress: dict[str, Any] = Field(default_factory=dict)
    created_at: datetime
    updated_at: datetime
