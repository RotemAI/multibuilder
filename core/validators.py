"""Pure validation predicates.

Input validators and name-safety helpers, extracted from app.py. Every function
here is a pure function of its arguments: no application imports, no module
constants, no I/O. That is what makes them safe to import from anywhere,
including modules app.py itself imports.
"""

from __future__ import annotations

import re


def _is_admin(user: dict | None) -> bool:
    return bool(user) and user.get("role") == "admin"


def _is_valid_session_name(name: str) -> bool:
    return bool(name and len(name) <= 128 and re.fullmatch(r"[A-Za-z0-9_.-]+", name))


def _valid_git_pathspec(value: str) -> bool:
    path = (value or "").strip()
    return bool(
        path
        and len(path) <= 4096
        and "\x00" not in path
        and not path.startswith("/")
        and all(part not in {"", ".", ".."} for part in path.split("/"))
    )


def _valid_git_branch(value: str) -> bool:
    branch = (value or "").strip()
    return bool(
        branch
        and len(branch) <= 100
        and re.fullmatch(r"[A-Za-z0-9][A-Za-z0-9._/-]*", branch)
        and ".." not in branch
        and not branch.endswith((".", "/", ".lock"))
        and "@{" not in branch
    )


def _valid_git_commit_ref(value: str) -> bool:
    """A commit ref for `show` is a hex object name and nothing else.

    Deliberately narrower than a branch name: this value reaches `git show`,
    so allowing revision syntax (`..`, `@{`, `-`) would turn a history click
    into an arbitrary-revision selector.
    """
    ref = (value or "").strip()
    return bool(ref and re.fullmatch(r"[0-9a-fA-F]{4,64}", ref))


def _tmux_safe_label(raw: str, fallback: str) -> str:
    """Sanitise a label for use inside a tmux target string.

    tmux parses targets as "session:window.pane", so a DOT in a window name is
    read as a pane separator: a label like "tofik@136.114.173.71" made tmux hunt
    for pane "114.173.71-..." and every attach failed. Colons split the session
    off, so both characters have to go.
    """
    cleaned = re.sub(r"[^A-Za-z0-9_-]+", "-", str(raw or "")).strip("-")
    return cleaned or fallback
