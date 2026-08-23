from datetime import UTC, datetime, timedelta
from uuid import uuid4

from multibuilder.recovery import (
    FailureClass,
    RecoveryAction,
    RetryPolicy,
    RunHealth,
    Watchdog,
    WatchdogAction,
)


def test_first_failure_retries_with_concrete_feedback_on_same_provider() -> None:
    decision = RetryPolicy().decide(
        attempt=0,
        retry_limit=4,
        failure_class=FailureClass.LOGICAL,
        provider="muse",
        providers_tried=["muse"],
    )

    assert decision.action is RecoveryAction.RETRY_WITH_FEEDBACK


def test_second_failure_switches_provider() -> None:
    decision = RetryPolicy().decide(
        attempt=1,
        retry_limit=4,
        failure_class=FailureClass.LOGICAL,
        provider="muse",
        providers_tried=["muse"],
    )

    assert decision.excluded_providers == frozenset({"muse"})


def test_third_failure_escalates_to_the_workstream_lead() -> None:
    decision = RetryPolicy().decide(
        attempt=2,
        retry_limit=4,
        failure_class=FailureClass.TEST_FAILURE,
        provider="grok",
        providers_tried=["muse", "grok"],
    )

    assert decision.action is RecoveryAction.ESCALATE_TO_LEAD


def test_retry_limit_terminates_the_loop() -> None:
    decision = RetryPolicy().decide(
        attempt=3,
        retry_limit=3,
        failure_class=FailureClass.REPEATED_FAILURE,
        provider="codex",
        providers_tried=["muse", "grok", "codex"],
    )

    assert decision.action is RecoveryAction.REPLAN_OR_BLOCK


def test_watchdog_requeues_a_run_with_a_missing_heartbeat() -> None:
    now = datetime.now(UTC)
    run = RunHealth(
        run_id=uuid4(),
        task_id=uuid4(),
        started_at=now - timedelta(minutes=10),
        heartbeat_at=now - timedelta(minutes=3),
        progress_at=now - timedelta(seconds=20),
        timeout_seconds=3_600,
        process_alive=True,
    )

    action = Watchdog(heartbeat_timeout_seconds=60, progress_timeout_seconds=600).inspect(run, now=now)

    assert action.action is WatchdogAction.CANCEL_AND_REQUEUE


def test_watchdog_leaves_a_healthy_run_alone() -> None:
    now = datetime.now(UTC)
    run = RunHealth(
        run_id=uuid4(),
        task_id=uuid4(),
        started_at=now - timedelta(minutes=2),
        heartbeat_at=now - timedelta(seconds=10),
        progress_at=now - timedelta(seconds=30),
        timeout_seconds=3_600,
        process_alive=True,
    )

    action = Watchdog(heartbeat_timeout_seconds=60, progress_timeout_seconds=600).inspect(run, now=now)

    assert action.action is WatchdogAction.NONE


def test_watchdog_distinguishes_a_dead_process_from_a_stalled_agent() -> None:
    now = datetime.now(UTC)
    run = RunHealth(
        run_id=uuid4(),
        task_id=uuid4(),
        started_at=now - timedelta(minutes=2),
        heartbeat_at=now - timedelta(seconds=5),
        progress_at=now - timedelta(seconds=5),
        timeout_seconds=3_600,
        process_alive=False,
    )

    action = Watchdog(heartbeat_timeout_seconds=60, progress_timeout_seconds=600).inspect(run, now=now)

    assert action.failure_class is FailureClass.PROCESS_CRASH
