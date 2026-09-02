"""Codex config.toml editing and CLI readiness checks.

Extracted from app.py. These merge dashboard-managed keys into a user's
config.toml without disturbing the rest of the file, and probe whether the
Codex CLI is installed and new enough to launch.

Pure of application state: everything is a function of its arguments.
"""

from __future__ import annotations

import json
import logging
import re
import shutil
import subprocess

from core.config import _CODEX_MIN_CLI_VERSION

logger = logging.getLogger("codex-dashboard")


def _codex_cli_readiness() -> tuple[bool, str, dict]:
    """Check that a compatible Codex CLI is available before starting a pane."""
    binary = shutil.which("codex")
    details = {"binary": binary or "", "minimum": _CODEX_MIN_CLI_VERSION, "version": ""}
    if not binary:
        return False, "the codex CLI is not installed", details
    try:
        result = subprocess.run(
            [binary, "--version"], capture_output=True, text=True, timeout=10
        )
        text = ((result.stdout or "") + " " + (result.stderr or "")).strip()
        match = re.search(r"(\d+\.\d+\.\d+)", text)
        version = match.group(1) if match else ""
        details["version"] = version
        if result.returncode != 0 or not version:
            return False, "the codex CLI version could not be determined", details
        current = tuple(int(part) for part in version.split("."))
        minimum = tuple(int(part) for part in _CODEX_MIN_CLI_VERSION.split("."))
        if current < minimum:
            return False, f"codex {version} is older than required {_CODEX_MIN_CLI_VERSION}", details
    except Exception as exc:
        return False, f"codex CLI check failed: {type(exc).__name__}", details
    return True, "ready", details


def _rewrite_top_level_toml(existing: str, values: dict[str, str | None]) -> str:
    """Replace or remove selected top-level keys without touching TOML tables."""
    out: list[str] = []
    written: set[str] = set()
    in_section = False
    for line in existing.splitlines():
        stripped = line.strip()
        if stripped.startswith("[") and stripped.endswith("]"):
            if not in_section:
                for key, value in values.items():
                    if value is not None and key not in written:
                        out.append(f"{key} = {value}")
                        written.add(key)
            in_section = True
            out.append(line)
            continue
        if not in_section and "=" in stripped and not stripped.startswith("#"):
            key = stripped.split("=", 1)[0].strip()
            if key in values:
                if values[key] is not None and key not in written:
                    out.append(f"{key} = {values[key]}")
                    written.add(key)
                continue
        out.append(line)
    if not in_section:
        if out and out[-1].strip():
            out.append("")
        for key, value in values.items():
            if value is not None and key not in written:
                out.append(f"{key} = {value}")
    return "\n".join(out).rstrip() + "\n"


def _toml_basic_string(value: str) -> str:
    """Render one TOML basic string with JSON-compatible escaping."""
    return json.dumps(value or "", ensure_ascii=False)


def _strip_toml_sections(existing: str, prefixes: tuple[str, ...]) -> str:
    """Remove complete TOML tables whose dotted names match a prefix."""
    out: list[str] = []
    skipping = False
    for line in existing.splitlines():
        match = re.match(r"^\s*\[([^\[\]]+)\]\s*$", line)
        if match:
            section = match.group(1).strip()
            skipping = any(
                section == prefix or section.startswith(prefix + ".")
                for prefix in prefixes
            )
        if not skipping:
            out.append(line)
    return "\n".join(out).rstrip() + "\n"


def _set_toml_table_bool(existing: str, section: str, key: str, value: bool) -> str:
    """Upsert one boolean in an existing or new TOML table."""
    lines = existing.splitlines()
    header = f"[{section}]"
    start = next(
        (index for index, line in enumerate(lines) if line.strip() == header),
        None,
    )
    rendered = f"{key} = {'true' if value else 'false'}"
    if start is None:
        if lines and lines[-1].strip():
            lines.append("")
        lines.extend((header, rendered))
        return "\n".join(lines).rstrip() + "\n"
    end = next(
        (
            index
            for index in range(start + 1, len(lines))
            if lines[index].strip().startswith("[")
            and lines[index].strip().endswith("]")
        ),
        len(lines),
    )
    matches = [
        index
        for index in range(start + 1, end)
        if re.match(rf"^\s*{re.escape(key)}\s*=", lines[index])
    ]
    if matches:
        lines[matches[0]] = rendered
        for duplicate in reversed(matches[1:]):
            del lines[duplicate]
    else:
        lines.insert(start + 1, rendered)
    return "\n".join(lines).rstrip() + "\n"


def _toml_escape(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"')


def _merge_top_level_toml_keys(existing: str, managed: dict) -> str:
    """Merge dashboard-managed top-level TOML keys without touching sections."""
    managed_keys = ("model", "model_reasoning_effort", "sandbox_mode", "approval_policy")
    updates = {key: str(managed[key]) for key in managed_keys if managed.get(key)}
    if not updates:
        return existing if existing.endswith("\n") else existing + "\n"

    def render_line(key: str) -> str:
        return f'{key} = "{_toml_escape(updates[key])}"'

    out: list[str] = []
    written: set[str] = set()
    in_section = False
    inserted_before_sections = False
    for line in existing.splitlines():
        stripped = line.strip()
        if stripped.startswith("[") and stripped.endswith("]"):
            if not inserted_before_sections:
                for key in managed_keys:
                    if key in updates and key not in written:
                        out.append(render_line(key))
                        written.add(key)
                inserted_before_sections = True
            in_section = True
            out.append(line)
            continue
        if not in_section and "=" in stripped and not stripped.startswith("#"):
            key = stripped.split("=", 1)[0].strip()
            if key in updates:
                out.append(render_line(key))
                written.add(key)
                continue
        out.append(line)
    if not inserted_before_sections:
        if out and out[-1].strip():
            out.append("")
        for key in managed_keys:
            if key in updates and key not in written:
                out.append(render_line(key))
                written.add(key)
    return "\n".join(out).rstrip() + "\n"
