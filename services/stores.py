"""Per-session stores: chat messages, notes, skills, and auto-memory.

Extracted from app.py. These read and write the per-user, per-session files the
agent uses as its working context -- transcripts, saved notes, the skills
library, and the project MEMORY.md set.

Path resolution stays in app.py (it is bound up with multi-tenant user dirs) and
is injected via configure().
"""

from __future__ import annotations

import json
import logging
import os
import re
import secrets
import shutil
import time
from pathlib import Path

from pydantic import BaseModel

import db_store
from core.config import MESSAGES_DIR
from core.state import _db_ready, _shared_store
from core.users import _find_user_by_id, _is_admin
from services.tmux import get_session_cwd

logger = logging.getLogger("codex-dashboard")

# Injected by app.py; see configure().  is the live session-message dict:
# it is mutated in place and shared with app.py, so passing the object keeps a
# single identity rather than creating a second copy that would silently drift.
cache = None
_encode_project_path = None
_read_json_file = None
_session_config_base = None
_session_owner_id = None
_user_codex_config_dir = None
_user_data_dir = None
_user_for_session = None
_write_json_file = None
llm_call = None


def configure(**kw):
    """Bind app-level helpers; an unknown name raises instead of passing silently."""
    for key, value in kw.items():
        if key not in globals():
            raise TypeError(f"services.stores.configure: unknown dependency {key!r}")
        globals()[key] = value


def _user_messages_file(user: dict | None) -> Path:
    return _user_data_dir(user) / "messages.json"


def _user_notes_file(user: dict | None) -> Path:
    return _user_data_dir(user) / "notes.json"


def _materialize_member_skills(cfg_dir: Path) -> None:
    """Replace external skill symlinks with private account-owned copies."""
    skills_dir = cfg_dir / "skills"
    skills_dir.mkdir(parents=True, exist_ok=True)
    account_root = cfg_dir.resolve()
    for entry in list(skills_dir.iterdir()):
        if not entry.is_symlink():
            continue
        try:
            source = entry.resolve(strict=True)
            if source == account_root or source.is_relative_to(account_root):
                continue
            private_copy = skills_dir / (
                f".{entry.name}.private-{secrets.token_hex(4)}"
            )
            if source.is_dir():
                shutil.copytree(source, private_copy)
            elif source.is_file():
                shutil.copy2(source, private_copy)
            else:
                continue
            entry.unlink()
            private_copy.rename(entry)
        except Exception:
            logger.exception(
                "Failed to make skill '%s' private to %s",
                entry.name,
                cfg_dir,
            )


def _sync_group_skills_into(cfg_dir: Path, group_id: str):
    """Remove retired group-skill links; permission groups carry policy only."""
    dst = cfg_dir / "skills"
    try:
        if not dst.exists():
            return
        for link in dst.glob("group-*"):
            if link.is_symlink():
                link.unlink()
    except Exception:
        logger.debug("Failed to clean retired group skill links", exc_info=True)


def _load_all_notes(user: dict | None = None) -> dict[str, str]:
    """Load all session notes for a given user from disk. Falls back to admin
    file if `user` is None (matches legacy single-user behaviour)."""
    return _read_json_file(_user_notes_file(user))


def _save_notes():
    """Persist all session notes to per-user files based on session ownership."""
    # Group cache entries by owning user
    by_user: dict[str, dict[str, str]] = {}
    for name, entry in cache.items():
        notes = entry.get("notes")
        if not notes:
            continue
        owner_id = _session_owner_id(name)
        by_user.setdefault(owner_id, {})[name] = notes

    # Write each user's file, merged with any sessions not currently in cache.
    # Also touch files for users whose cache is empty but who have existing notes
    # so we don't accidentally drop them: just don't write empty files.
    for uid, updates in by_user.items():
        owner = _find_user_by_id(uid) or _find_user_by_id("admin")
        path = _user_notes_file(owner)
        existing = _read_json_file(path)
        existing.update(updates)
        _write_json_file(path, existing)


def _load_session_notes(session_name: str) -> str:
    """Get persisted notes for a specific session, from its owner's file."""
    owner = _user_for_session(session_name)
    return _load_all_notes(owner).get(session_name, "")


def _load_messages(user: dict | None = None) -> dict[str, list]:
    """Load all session messages for a given user from disk."""
    return _read_json_file(_user_messages_file(user))


def _save_messages():
    """Persist all session messages to per-user files based on session ownership."""
    if _db_ready():
        # Mirror into Postgres so the team sees one transcript. The per-user
        # files are still written below, which keeps the fallback path warm and
        # means turning the database off does not lose history.
        for name, entry in cache.items():
            msgs = entry.get("messages")
            if msgs:
                db_store.replace_messages(name, msgs)
    by_user: dict[str, dict[str, list]] = {}
    for name, entry in cache.items():
        msgs = entry.get("messages")
        if not msgs:
            continue
        owner_id = _session_owner_id(name)
        by_user.setdefault(owner_id, {})[name] = msgs

    for uid, updates in by_user.items():
        owner = _find_user_by_id(uid) or _find_user_by_id("admin")
        path = _user_messages_file(owner)
        existing = _read_json_file(path)
        existing.update(updates)
        _write_json_file(path, existing)


def _load_session_messages(session_name: str) -> list:
    """Persisted messages for one session.

    Reads from the shared database when configured — chat is the state that
    most needs to be shared across a team and the one that grew without bound
    in a rewrite-the-whole-file store. Falls back to the owner's JSON file.
    """
    if _db_ready():
        rows = db_store.load_messages(session_name, limit=500)
        if rows:
            return rows
    owner = _user_for_session(session_name)
    return _load_messages(owner).get(session_name, [])


async def get_notes(session_name: str, full_output: str, existing_notes: str = "", messages: list = None) -> str:
    """Extract key reference info from terminal output and chat history."""
    lines = full_output.split("\n")
    total = len(lines)
    slices = [("BEGINNING", "\n".join(lines[:80]))]
    if total > 200:
        q1 = total // 4
        slices.append(("QUARTER", "\n".join(lines[q1:q1 + 60])))
    if total > 300:
        mid = total // 2
        slices.append(("MIDDLE", "\n".join(lines[mid:mid + 60])))
    slices.append(("RECENT", "\n".join(lines[-80:])))
    context = "\n\n".join(f"=== {label} ===\n{text}" for label, text in slices)

    # Include chat messages (captures uploaded files, user commands, etc.)
    chat_section = ""
    if messages:
        recent_msgs = messages[-30:]  # last 30 messages
        chat_lines = [f"[{m['role']}] {m['text']}" for m in recent_msgs]
        chat_section = "\n\n=== CHAT HISTORY (user commands & uploads) ===\n" + "\n".join(chat_lines)

    prev_section = ""
    if existing_notes and existing_notes.strip():
        prev_section = f"\n\n=== PREVIOUS NOTES (merge new findings into these) ===\n{existing_notes}"

    return await llm_call(
        system_prompt=(
            "Extract key reference info from this terminal session. "
            "Organize into these sections:\n\n"
            "CREDENTIALS — usernames, passwords, API keys, tokens, secrets\n"
            "URLS — the public URL(s) where THIS project is served/accessible\n"
            "STACK — languages, frameworks, libraries, dependencies, tools, package managers\n"
            "SERVICES — databases, ports, process managers (PM2/supervisor/systemd), background services\n"
            "STRUCTURE — the key source files created/edited for this deliverable\n"
            "UPLOADS — paths to any files that were uploaded to this session\n"
            "NOTES — important dev decisions, gotchas, deployment steps, things to remember\n\n"
            "Rules:\n"
            "- Only include info actually visible in the terminal output or chat history\n"
            "- Keep each item on one line, be specific (include actual values, paths, ports)\n"
            "- Be SELECTIVE — surface only what the developer would actually reach for again, "
            "not every path/URL that scrolled by. Prefer the primary deliverable over incidentals.\n"
            "- URLS: EXCLUDE localhost/127.0.0.1/internal IPs, third-party API endpoints "
            "(api.openai.com, api.anthropic.com, *.googleapis.com, oauth/health/rest calls), and "
            "URLs for OTHER projects that merely got mentioned. Keep only THIS project's URL(s).\n"
            "- STRUCTURE: EXCLUDE tooling/system paths (~/.claude*, ~/.tmux-dashboard*, ~/.codex*, "
            "/etc, skill/memory files like SKILL.md/CLAUDE.md/claude-roles.json, nginx/supervisor "
            ".conf files) and the dashboard repo dir itself (tmux-dashboard-original). Never emit "
            "placeholder paths containing < or >. List a file at most once.\n"
            "- If a section has nothing relevant, omit it entirely (don't pad it)\n"
            "- If previous notes exist, merge new findings into them — keep old data, "
            "remove duplicates (including near-duplicates that differ only by whitespace/case), "
            "update changed values\n"
            "- Redact nothing — this is the developer's own reference\n"
            "- No intro/outro text, just the section headers and their items"
        ),
        user_content=f"tmux session '{session_name}' sampled history:\n\n{context[:5000]}{chat_section[:1500]}{prev_section}",
        max_tokens=500,
    )


def _session_memory_dir(session_name: str) -> tuple[Path, str]:
    """Resolve the project memory directory for an account and workdir."""
    cwd = get_session_cwd(session_name) or ""
    encoded = _encode_project_path(cwd)
    base = _session_config_base(session_name)
    mem_dir = base / "projects" / encoded / "memory"
    return mem_dir, cwd


_MEMORY_EXTRA_RE = re.compile(r"^[A-Za-z0-9._-]+\.md$")


def _sanitize_memory_filename(name: str) -> str:
    name = os.path.basename(name or "")
    if not _MEMORY_EXTRA_RE.match(name):
        return ""
    return name


SKILLS_DIR = MESSAGES_DIR / "skills"


SKILL_LIBRARY_DIR = MESSAGES_DIR / "skill-library"


_SKILL_FILENAME_RE = re.compile(r"^[a-zA-Z0-9_-]+\.md$")


_SKILL_DIR_NAME_RE = re.compile(r"^[a-zA-Z0-9][a-zA-Z0-9_-]{0,63}$")


def _sanitize_skill_filename(name: str) -> str:
    """Sanitize and validate a flat .md skill filename (legacy session API)."""
    name = os.path.basename(name)
    if not name.endswith(".md"):
        name += ".md"
    if not _SKILL_FILENAME_RE.match(name):
        return ""
    return name


def _sanitize_skill_dir_name(name: str) -> str:
    """Sanitize a skill directory name (the canonical Skill `<name>`)."""
    name = os.path.basename((name or "").strip())
    if name.endswith(".md"):
        name = name[:-3]
    if not _SKILL_DIR_NAME_RE.match(name):
        return ""
    return name


def _parse_skill_frontmatter(skill_md_path: Path) -> dict:
    """Extract `name` and `description` from a SKILL.md YAML frontmatter block.

    Falls back to the parent directory name when frontmatter is missing or malformed.
    """
    out = {"name": skill_md_path.parent.name, "description": ""}
    try:
        text = skill_md_path.read_text()
    except Exception:
        return out
    if not text.startswith("---"):
        return out
    # Find the closing fence
    end = text.find("\n---", 3)
    if end == -1:
        return out
    block = text[3:end]
    for raw in block.splitlines():
        line = raw.strip()
        if line.startswith("name:"):
            v = line.split(":", 1)[1].strip().strip('"').strip("'")
            if v:
                out["name"] = v
        elif line.startswith("description:"):
            v = line.split(":", 1)[1].strip().strip('"').strip("'")
            if v:
                out["description"] = v
    return out


def _read_skill_dir(d: Path) -> dict | None:
    """Read a skill directory; return metadata dict or None if not a valid skill."""
    if not d.is_dir():
        return None
    skill_md = d / "SKILL.md"
    if not skill_md.is_file():
        return None
    fm = _parse_skill_frontmatter(skill_md)
    try:
        content = skill_md.read_text()
    except Exception:
        content = ""
    return {
        "name": fm["name"],
        "dir_name": d.name,
        "description": fm["description"],
        "path": str(skill_md),
        "content": content,
    }


def _list_library_skills() -> list:
    """List all skills in the library (sorted by directory name)."""
    SKILL_LIBRARY_DIR.mkdir(parents=True, exist_ok=True)
    out = []
    for entry in sorted(SKILL_LIBRARY_DIR.iterdir()):
        info = _read_skill_dir(entry)
        if info:
            out.append(info)
    return out


def _skill_dir_for_session(session_name: str) -> Path:
    owner = _user_for_session(session_name)
    if owner and not _is_admin(owner):
        d = _user_data_dir(owner) / "skills" / session_name
    else:
        d = SKILLS_DIR / session_name
    d.mkdir(parents=True, exist_ok=True)
    return d


class SkillFileBody(BaseModel):
    name: str
    content: str


class SaveLibrarySkillBody(BaseModel):
    description: str = ""
    content: str


class SkillLibraryBody(BaseModel):
    name: str
    session_name: str = ""


def _account_skills_dir(user: dict) -> Path:
    skills_dir = _user_codex_config_dir(user) / "skills"
    if skills_dir.is_symlink():
        raise ValueError("Account skills root cannot be a symlink")
    skills_dir.mkdir(parents=True, exist_ok=True)
    skills_dir.chmod(0o700)
    return skills_dir
