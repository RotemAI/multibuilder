from __future__ import annotations

import fnmatch
from collections.abc import Mapping, Sequence
from pathlib import PurePosixPath

_GLOB_MARKERS = ("*", "?", "[")


def _normalize(scope: str) -> str:
    normalized = scope.strip().replace("\\", "/").lstrip("./")
    while "//" in normalized:
        normalized = normalized.replace("//", "/")
    return normalized.rstrip("/") or "**"


def _is_glob(scope: str) -> bool:
    return any(marker in scope for marker in _GLOB_MARKERS)


def _static_prefix(scope: str) -> tuple[str, ...]:
    parts: list[str] = []
    for part in PurePosixPath(scope).parts:
        if _is_glob(part):
            break
        parts.append(part)
    return tuple(parts)


def _is_ancestor(left: tuple[str, ...], right: tuple[str, ...]) -> bool:
    return len(left) <= len(right) and right[: len(left)] == left


def _pair_overlaps(left: str, right: str) -> bool:
    left_glob = _is_glob(left)
    right_glob = _is_glob(right)

    if not left_glob and not right_glob:
        return left == right
    if not left_glob and fnmatch.fnmatchcase(left, right):
        return True
    if not right_glob and fnmatch.fnmatchcase(right, left):
        return True

    left_prefix = _static_prefix(left)
    right_prefix = _static_prefix(right)
    if not left_prefix or not right_prefix:
        return True
    return _is_ancestor(left_prefix, right_prefix) or _is_ancestor(right_prefix, left_prefix)


def scopes_overlap(left: Sequence[str], right: Sequence[str]) -> bool:
    """Conservatively detect whether two tasks may write the same path."""
    if not left or not right:
        return False
    return any(
        _pair_overlaps(_normalize(left_scope), _normalize(right_scope))
        for left_scope in left
        for right_scope in right
    )


def find_scope_conflict(
    requested: Sequence[str],
    active_scopes: Mapping[str, Sequence[str]],
) -> str | None:
    for task_id, scopes in active_scopes.items():
        if scopes_overlap(requested, scopes):
            return task_id
    return None
