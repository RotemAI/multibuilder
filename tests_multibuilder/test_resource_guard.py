from multibuilder.resource_guard import HostResourceGuard, ResourceAction, ResourceSnapshot


def snapshot(*, memory: float, disk: float = 50) -> ResourceSnapshot:
    return ResourceSnapshot(
        memory_available_percent=memory,
        disk_free_percent=disk,
        load_average_1m=1,
    )


def test_guard_sheds_one_owned_worker_below_the_host_survival_floor() -> None:
    decision = HostResourceGuard().decide(snapshot(memory=5.9))

    assert decision.action is ResourceAction.SHED_ONE
    assert "memory" in decision.reason


def test_guard_defers_new_work_before_memory_reaches_the_survival_floor() -> None:
    decision = HostResourceGuard().decide(snapshot(memory=8))

    assert decision.action is ResourceAction.DEFER


def test_guard_defers_new_work_when_the_state_disk_is_nearly_full() -> None:
    decision = HostResourceGuard().decide(snapshot(memory=50, disk=4.9))

    assert decision.action is ResourceAction.DEFER
    assert "disk" in decision.reason


def test_guard_allows_work_when_resources_are_healthy() -> None:
    decision = HostResourceGuard().decide(snapshot(memory=25, disk=40))

    assert decision.action is ResourceAction.ALLOW
