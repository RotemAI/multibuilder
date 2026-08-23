from __future__ import annotations

from dataclasses import dataclass
from datetime import UTC, datetime
from enum import StrEnum
from uuid import UUID


class FailureClass(StrEnum):
    TRANSPORT = "transport"
    RATE_LIMIT = "rate_limit"
    LOGICAL = "logical"
    TEST_FAILURE = "test_failure"
    REVIEW_FAILURE = "review_failure"
    TIMEOUT = "timeout"
    MISSING_HEARTBEAT = "missing_heartbeat"
    NO_PROGRESS = "no_progress"
    PROCESS_CRASH = "process_crash"
    RESOURCE_EXHAUSTION = "resource_exhaustion"
    REPEATED_FAILURE = "repeated_failure"


class RecoveryAction(StrEnum):
    RETRY_WITH_FEEDBACK = "retry_with_feedback"
    RETRY_OTHER_PROVIDER = "retry_other_provider"
    ESCALATE_TO_LEAD = "escalate_to_lead"
    REPLAN_OR_BLOCK = "replan_or_block"


@dataclass(frozen=True, slots=True)
class RetryDecision:
    action: RecoveryAction
    target_provider: str | None
    excluded_providers: frozenset[str]
    reason: str


class RetryPolicy:
    """A bounded four-stage policy. No branch can create an infinite loop."""

    def decide(
        self,
        *,
        attempt: int,
        retry_limit: int,
        failure_class: FailureClass,
        provider: str,
        providers_tried: list[str],
    ) -> RetryDecision:
        if attempt >= retry_limit:
            return RetryDecision(
                action=RecoveryAction.REPLAN_OR_BLOCK,
                target_provider=None,
                excluded_providers=frozenset(providers_tried),
                reason=f"retry limit reached after {failure_class.value}",
            )
        if attempt == 0:
            return RetryDecision(
                action=RecoveryAction.RETRY_WITH_FEEDBACK,
                target_provider=provider,
                excluded_providers=frozenset(),
                reason=f"retry once with concrete {failure_class.value} evidence",
            )
        if attempt == 1:
            return RetryDecision(
                action=RecoveryAction.RETRY_OTHER_PROVIDER,
                target_provider=None,
                excluded_providers=frozenset(providers_tried),
                reason="switch provider after the evidence-guided retry failed",
            )
        if attempt == 2:
            return RetryDecision(
                action=RecoveryAction.ESCALATE_TO_LEAD,
                target_provider=None,
                excluded_providers=frozenset(providers_tried),
                reason="workstream lead must diagnose repeated worker failure",
            )
        return RetryDecision(
            action=RecoveryAction.REPLAN_OR_BLOCK,
            target_provider=None,
            excluded_providers=frozenset(providers_tried),
            reason="bounded recovery sequence exhausted",
        )


class WatchdogAction(StrEnum):
    NONE = "none"
    CANCEL_AND_REQUEUE = "cancel_and_requeue"


@dataclass(frozen=True, slots=True)
class RunHealth:
    run_id: UUID
    task_id: UUID
    started_at: datetime
    heartbeat_at: datetime
    progress_at: datetime
    timeout_seconds: int
    process_alive: bool


@dataclass(frozen=True, slots=True)
class WatchdogDecision:
    action: WatchdogAction
    failure_class: FailureClass | None
    reason: str


class Watchdog:
    def __init__(self, *, heartbeat_timeout_seconds: int, progress_timeout_seconds: int) -> None:
        self.heartbeat_timeout_seconds = heartbeat_timeout_seconds
        self.progress_timeout_seconds = progress_timeout_seconds

    def inspect(self, run: RunHealth, *, now: datetime | None = None) -> WatchdogDecision:
        current_time = now or datetime.now(UTC)
        if not run.process_alive:
            return self._requeue(FailureClass.PROCESS_CRASH, "worker process is not alive")
        if (current_time - run.started_at).total_seconds() > run.timeout_seconds:
            return self._requeue(FailureClass.TIMEOUT, "task runtime exceeded its contract timeout")
        if (current_time - run.heartbeat_at).total_seconds() > self.heartbeat_timeout_seconds:
            return self._requeue(FailureClass.MISSING_HEARTBEAT, "worker heartbeat expired")
        if (current_time - run.progress_at).total_seconds() > self.progress_timeout_seconds:
            return self._requeue(FailureClass.NO_PROGRESS, "worker emitted no meaningful progress")
        return WatchdogDecision(WatchdogAction.NONE, None, "run is healthy")

    @staticmethod
    def _requeue(failure_class: FailureClass, reason: str) -> WatchdogDecision:
        return WatchdogDecision(WatchdogAction.CANCEL_AND_REQUEUE, failure_class, reason)
