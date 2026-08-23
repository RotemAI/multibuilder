from __future__ import annotations

import os
import shutil
from dataclasses import dataclass
from enum import StrEnum
from pathlib import Path


class ResourceAction(StrEnum):
    ALLOW = "allow"
    DEFER = "defer"
    SHED_ONE = "shed_one"


@dataclass(frozen=True, slots=True)
class ResourceSnapshot:
    memory_available_percent: float
    disk_free_percent: float
    load_average_1m: float


@dataclass(frozen=True, slots=True)
class ResourceDecision:
    action: ResourceAction
    reason: str


class HostResourceGuard:
    def __init__(
        self,
        *,
        memory_shed_below_percent: float = 6,
        memory_defer_below_percent: float = 10,
        disk_defer_below_percent: float = 5,
    ) -> None:
        if not 0 < memory_shed_below_percent < memory_defer_below_percent <= 100:
            raise ValueError("memory thresholds must be ordered percentages")
        if not 0 < disk_defer_below_percent <= 100:
            raise ValueError("disk threshold must be a percentage")
        self.memory_shed_below_percent = memory_shed_below_percent
        self.memory_defer_below_percent = memory_defer_below_percent
        self.disk_defer_below_percent = disk_defer_below_percent

    def decide(self, snapshot: ResourceSnapshot) -> ResourceDecision:
        if snapshot.memory_available_percent < self.memory_shed_below_percent:
            return ResourceDecision(
                ResourceAction.SHED_ONE,
                f"available memory is {snapshot.memory_available_percent:.1f}%",
            )
        if snapshot.memory_available_percent < self.memory_defer_below_percent:
            return ResourceDecision(
                ResourceAction.DEFER,
                f"available memory is {snapshot.memory_available_percent:.1f}%",
            )
        if snapshot.disk_free_percent < self.disk_defer_below_percent:
            return ResourceDecision(
                ResourceAction.DEFER,
                f"state disk free space is {snapshot.disk_free_percent:.1f}%",
            )
        return ResourceDecision(ResourceAction.ALLOW, "host resources are healthy")


class ProcResourceProbe:
    def __init__(self, *, meminfo_path: Path = Path("/proc/meminfo")) -> None:
        self.meminfo_path = meminfo_path

    def snapshot(self, state_path: Path) -> ResourceSnapshot:
        values = self._read_meminfo()
        total = values.get("MemTotal", 0)
        available = values.get("MemAvailable", 0)
        if total <= 0 or available < 0:
            raise RuntimeError("host memory metrics are unavailable")
        disk = shutil.disk_usage(state_path)
        if disk.total <= 0:
            raise RuntimeError("state disk metrics are unavailable")
        return ResourceSnapshot(
            memory_available_percent=(available / total) * 100,
            disk_free_percent=(disk.free / disk.total) * 100,
            load_average_1m=os.getloadavg()[0],
        )

    def _read_meminfo(self) -> dict[str, int]:
        values: dict[str, int] = {}
        for line in self.meminfo_path.read_text(encoding="utf-8").splitlines():
            name, separator, remainder = line.partition(":")
            if not separator:
                continue
            amount = remainder.strip().split(maxsplit=1)[0]
            if amount.isdigit():
                values[name] = int(amount)
        return values


__all__ = [
    "HostResourceGuard",
    "ProcResourceProbe",
    "ResourceAction",
    "ResourceDecision",
    "ResourceSnapshot",
]
