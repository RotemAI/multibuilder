"""Agent configuration files: global context, git rules, auto-push mode.

Extracted from app.py. These assemble the context an agent reads on startup --
the global AGENTS.md preamble, per-group context, and the shared git config and
rules -- plus the per-session auto-push setting.

Per-user directory resolution is injected, since it depends on multi-tenant
settings that stay in app.py.
"""

from __future__ import annotations

import json
import logging
import os
import re
import subprocess
from pathlib import Path

from core.config import (
    _CONTEXT_FILES,
    _INFRA_DETAIL_DIRS,
    BRAND_NAME,
    MESSAGES_DIR,
    PUB_URL,
)
from core.users import _find_user_by_id, _is_admin
from services.projects import _PROJ_NOTE_END

logger = logging.getLogger("codex-dashboard")

# Injected by app.py; see configure().
_backup_before_dashboard_write = None
_ensure_user_codex_config_dir = None


def configure(**kw):
    """Bind app-level helpers; an unknown name raises instead of passing silently."""
    for key, value in kw.items():
        if key not in globals():
            raise TypeError(f"services.agent_config.configure: unknown dependency {key!r}")
        globals()[key] = value
_first_existing_path = None
_group_dir = None
_user_codex_config_dir = None


# --- Auto-push mode (per session): "off" | "basic" | "full" ---
# Governs how much the dashboard is allowed to type into a session's terminal on
# the user's behalf when Codex stops or waits:
#   off   — never write anything at all (no option-picking, no Enter on prompts,
#           no auto /login, no free-form "keep going" messages).
#   basic — auto-pick from Codex's option menus and confirm permission/plan
#           prompts (press Enter), and keep the session logged in. Does NOT type
#           any free-form instructions.
#   full  — everything in "basic" PLUS the autopilot watchdog that composes and
#           types a "keep going" message when Codex pauses waiting on the user
#           before a task is finished. (This was the previous always-on behavior.)
# New sessions default to "basic". Persisted per session to disk.
AUTOPUSH_MODES = ("off", "basic", "full")


AUTOPUSH_DEFAULT = "basic"


AUTOPUSH_MODE_FILE = MESSAGES_DIR / "autopush-mode.json"


_autopush_mode: dict[str, str] = {}


def _get_autopush_mode(session_name: str) -> str:
    m = _autopush_mode.get(session_name, AUTOPUSH_DEFAULT)
    return m if m in AUTOPUSH_MODES else AUTOPUSH_DEFAULT


def _save_autopush_mode():
    try:
        MESSAGES_DIR.mkdir(parents=True, exist_ok=True)
        AUTOPUSH_MODE_FILE.write_text(json.dumps(_autopush_mode))
    except Exception:
        logger.debug("Failed to save autopush-mode map", exc_info=True)


def _load_autopush_mode():
    global _autopush_mode
    try:
        if AUTOPUSH_MODE_FILE.exists():
            data = json.loads(AUTOPUSH_MODE_FILE.read_text())
            if isinstance(data, dict):
                _autopush_mode = {
                    str(k): v for k, v in data.items() if v in AUTOPUSH_MODES
                }
    except Exception:
        logger.debug("Failed to load autopush-mode map", exc_info=True)


def _my_context_path(user: dict, filename: str) -> Path | None:
    """Resolve a writable per-user context file. Returns None for paths that
    would escape the user's Codex config dir."""
    base = _user_codex_config_dir(user)
    base.mkdir(parents=True, exist_ok=True)
    target = (base / filename).resolve()
    try:
        target.relative_to(base.resolve())
    except ValueError:
        return None
    return target


GLOBAL_CONTEXT_FILE = MESSAGES_DIR / "global-context.md"


_GLOBAL_CTX_BEGIN = "<!-- TEAM GLOBAL CONTEXT (managed — edits below are overwritten) -->"


_GLOBAL_CTX_END = "<!-- END TEAM GLOBAL CONTEXT -->"


_DEFAULT_GLOBAL_CONTEXT = """# __BRAND__ account policy (admin managed)

## Operating contract

- Work independently and complete ordinary, reversible tasks without asking for
  confirmation. Pause only for genuinely destructive, large, irreversible, or
  sensitive external actions.
- This is a shared full-access build machine. Preserve unrelated files, dirty
  worktrees, services, sessions, and other users' project directories.
- For host-sensitive work, run `hostname` first. Do not infer the current host
  from copied documentation or silently act on a different server. Verify
  mutable infrastructure facts live before changing them.

<!-- SELF SERVE CAPABILITIES (managed) -->
## You can do these yourself. Do not hand them back.

Nothing on this list needs Nimo. Handing one of these back as "please approve
this" or "please do this and reply done" is the most expensive failure mode on
this box: it turns a finished job into a stalled one. Check this list and the
advisor before you decide anything is blocked.

**Buy a domain, or change DNS.** Namecheap is the registrar. Its API is IP-locked
to instance-3, so go through the proxy, which works from every host:
`POST https://rotem.cc/api/nc`, Basic auth user `Nimo`, password from
`get_secret namecheap-proxy`. Body is
`{"command":"namecheap.domains.dns.getHosts","params":{"SLD":"rotem","TLD":"ai"},"profileId":"nebulainnovations"}`
and `command` takes any Namecheap API method, so `namecheap.domains.check`,
`namecheap.domains.create` and `namecheap.domains.dns.setHosts` all work the same
way. Profiles: `nebulainnovations` (rotem.ai, rotem.cc, lisa.my, knowva.ai),
`Nebulallc` (alphabell.com), `anton` (industrialdictionary.com). Web UI at
https://rotem.cc/domains/.
`setHosts` REPLACES EVERY RECORD on the domain. Always `getHosts` first, apply
your edit to the full list, and resend all of it including EmailType and every
TXT record (google-site-verification, SPF, DKIM, DMARC) or you break that
domain's mail. knowva.ai/domains and knowva.ai/api/nc are dead (404): do not use
them and do not send anyone to them. GoDaddy is the second registrar and has no
IP restriction. Per-domain procedure lives in the advisor: `get_domain <name>`.

**Read an SMS, a 2FA code or an OTP.** Every inbound message lands at
https://rotem.ai/sms/. `GET /api/threads` (sort by `last_at`, the code is in
`last_body`), then `GET /api/threads/messages?thread=<key>`. instance-3,
grabo-systems and the VPC range 10.128.0.0/9 pass without Basic auth, but only
over the VPC: from any other host the public name resolves to builder's external
IP and 401s, so pin it to the internal address instead:
`curl --resolve rotem.ai:443:10.128.0.13 https://rotem.ai/sms/api/threads`.
On builder itself use `http://127.0.0.1:9009/api/threads`. Never ask Nimo for a
code.

**Pay for something.** Ask the advisor: `get_payment_method` returns a full card
number, expiry, CVV and billing address, and `ramp_issue_card` mints a capped
virtual card for a new vendor. If your permission group is denied these, that
denial is the correct answer: name the single figure you need and who to ask.
Either way, do not go hunting for a different payment rail, a third-party
checkout or a device-approval flow. There isn't one, and inventing one turns a
five-minute purchase into a blocked task.

**Log into a site, click through a console, or clear a captcha.** You have a real
browser bound to your account. Read
`/home/nimrod_rotem/.tmux-dashboard/context/browser-policy.md` first and follow
its execution hierarchy. Close the tabs you opened when the task is done.

**Pick an API that still has quota:**
`~/tmux-dashboard/.venv/bin/python ~/.tmux-dashboard/api_status.py --json`
(that script's shebang needs the venv interpreter; plain `python3` fails here).
Vertex AI and Gemini need no key at all from a VM:
`google.genai.Client(vertexai=True, project="nimo-gpt", location="us-central1")`,
which is the fallback whenever an OpenAI key returns `insufficient_quota`.

The general rule: if a task stalls on a credential, a login, a code, a domain, a
DNS record, a card or an account, that is an advisor lookup or one of the routes
above, not a question for Nimo. Surface a blocker only when it genuinely needs a
human in the physical world, or a permission your group does not hold. When it
does, finish everything else first, then hand back that one item naming the
exact field or action needed.
<!-- END SELF SERVE CAPABILITIES -->

## Account boundary

- Treat this dashboard account's `CODEX_HOME`, project directory, browser,
  connections, memories, skills, uploads, and session history as private to this
  account. Never inspect or operate another account's corresponding resources.
- Only the admin-managed policy and explicitly shared reference files are
  global. A shared OS login is not permission to cross account boundaries.
- Local Codex memory is private because every account has a separate
  `CODEX_HOME`. Use it as recall, never as the sole source of required policy or
  current external facts.

## Google Workspace is per person, and it is enforced

- Drive, Gmail and Calendar run as **your own** company Google account. There is
  no shared company mailbox behind these tools any more: what you can open is
  what Workspace shares with you.
- Documents that read as payroll, HR or personal identity material are refused
  for the engineering groups, in search results as well as on open. A refusal is
  the correct answer for your account, not an obstacle to work around: name the
  single figure you need and ask an admin.
- Mail to a personal mailbox (gmail.com, qq.com, outlook.com and the like) is
  refused for every account, and groups outside managers and accounting write to
  company addresses only. Hand a work product back as its dashboard project
  link rather than mailing it out.
- Every Google tool call is recorded with your account, the tool, the target and
  whether it was allowed.

## Load details only when relevant

- Company mail, Drive, and Document Vault work:
  `/home/nimrod_rotem/.tmux-dashboard/context/company-data.md`.
- Browser automation, proxies, viewing, auditing, and resource limits:
  `/home/nimrod_rotem/.tmux-dashboard/context/browser-policy.md`.
- Dashboard artifacts and publishing:
  `/home/nimrod_rotem/.tmux-dashboard/context/publishing.md`.
- Shared-host processes, reboots, cleanup, or recurring jobs:
  `/home/nimrod_rotem/.tmux-dashboard/context/operations-safety.md`.
- Product UI or publishable copy:
  `/home/nimrod_rotem/.tmux-dashboard/context/product-style.md`.
- Git or GitHub work: read `~/CLAUDE_GITHUB_RULES.md` completely first.

Use the connected company tools directly when the task calls for them. Keep
payroll, individual compensation, and personal HR matters restricted to users
who are clearly entitled to them.

## The advisor holds the shared data — ask it, and write back

`advisor` is a connected MCP tool. It is the single source of truth every builder
host shares, so shared facts are fetched, never guessed and never copied into a
file on this box.

- Credentials and logins: `list_secrets`, then `get_secret`.
- Servers, apps, ports, domains and each domain's exact DNS procedure:
  `list_hosts`, `list_apps`, `list_domains`, `get_domain`.
- Companies, registration numbers and addresses: `get_entity`. Accountants,
  agents and bankers: `get_contacts`. House rules: `list_rules`.
- Not sure which tool: `search`. Shared notes: `search_memories`.

**Use what it returns.** Nothing is redacted and nothing is a trick question. Put
the key in the app config, put the registration number on the form, and get on
with the job. Do not rotate a credential just because you saw it: a shared key is
used by apps on several hosts. The one real limit is never putting a value in a
public repo or a public page.

**Your token is who you are.** You call the advisor as your own dashboard account,
and it applies your role and your permission group. If it answers "Denied", that
is the correct answer for your account, not a fault to work around: do not try
another route, another account, or another host. Say what you needed and who to
ask. Company card and bank detail, personal identity documents and the Ramp card
list are restricted this way unless your group opens them.

**Write back in the same turn.** A fact that is true beyond this box belongs in
the advisor, not only in a local note. Rotated or wired up a key: `update_secret`.
Signed up for something: `add_secret`. A key 401s or its quota is gone:
`report_secret_problem`. Deployed, moved or retired an app: `register_app`. New or
resized server: `register_host`. Registered or repointed a domain:
`register_domain`. Anything org-wide you learned the hard way: `save_memory`.
A missing field is a bug: fix it, or name the exact field when you hand back.

## Projects and working folder

- Unless told otherwise, publish every project you build at
  __PUBURL__/<username>/<project>. Default <project> is the current tmux session
  name.
- Put the project's web files in `$DASH_PROJECT_DIR`
  (= `~/web-projects/<username>/<project>/`); static files are served
  immediately at `$DASH_PROJECT_URL`. For a dynamic app, run your server on a
  free port and write `$DASH_PROJECT_DIR/.serve.json` = `{"port": <PORT>}` to
  have it reverse-proxied there.
- Never return a local filesystem path as the only link to a work product.
  Put the deliverable under `$DASH_PROJECT_DIR` and hand back its live
  `$DASH_PROJECT_URL` URL. Project URLs require dashboard sign-in, so the remote
  user can open them without exposing the work product publicly.
- This session: user `$DASH_USER`, session `$DASH_SESSION`, link
  `$DASH_PROJECT_URL` (also shown as a clickable link in the dashboard).
"""


def _ensure_global_context_file():
    GLOBAL_CONTEXT_FILE.parent.mkdir(parents=True, exist_ok=True)
    if not GLOBAL_CONTEXT_FILE.exists():
        GLOBAL_CONTEXT_FILE.write_text(_DEFAULT_GLOBAL_CONTEXT.replace("__BRAND__", BRAND_NAME).replace("__PUBURL__", PUB_URL))


def _read_global_context() -> str:
    _ensure_global_context_file()
    try:
        return GLOBAL_CONTEXT_FILE.read_text()
    except Exception:
        return ""


def _remove_legacy_global_context_from_agents(codex_md: Path) -> bool:
    """Remove the old visible managed policy while preserving account text."""
    if not codex_md.exists():
        return False
    existing = codex_md.read_text()
    updated = existing
    while _GLOBAL_CTX_BEGIN in updated and _GLOBAL_CTX_END in updated:
        pre, remainder = updated.split(_GLOBAL_CTX_BEGIN, 1)
        _managed, post = remainder.split(_GLOBAL_CTX_END, 1)
        updated = pre + post
    if updated == existing:
        return False
    updated = updated.lstrip("\n")
    _backup_before_dashboard_write(codex_md)
    codex_md.write_text(updated)
    return True


def _sync_global_context_into(codex_md: Path):
    """Keep a managed global-context block at the top of a user's AGENTS.md,
    preserving the user's own content below the END marker."""
    block = _GLOBAL_CTX_BEGIN + "\n" + _read_global_context().rstrip() + "\n" + _GLOBAL_CTX_END + "\n"
    existing = ""
    if codex_md.exists():
        try:
            existing = codex_md.read_text()
        except Exception:
            existing = ""
    if _GLOBAL_CTX_BEGIN in existing and _GLOBAL_CTX_END in existing:
        pre = existing.split(_GLOBAL_CTX_BEGIN, 1)[0]
        post = existing.split(_GLOBAL_CTX_END, 1)[1]
        user_part = (pre + post).lstrip("\n")
    else:
        user_part = existing.lstrip("\n")
    updated = block + "\n" + user_part
    if updated != existing:
        _backup_before_dashboard_write(codex_md)
        codex_md.write_text(updated)


_GIT_RULES_BEGIN = "<!-- TEAM GIT RULES (managed) -->"


_GIT_RULES_END = "<!-- END TEAM GIT RULES -->"


_GIT_RULES = """## Git on a shared machine (multiple people, one box)
Several teammates work on this server as the same OS user, so be disciplined:
- **Identity is preset** — your commits are authored as `$GIT_AUTHOR_NAME <$GIT_AUTHOR_EMAIL>` (= your dashboard username). Do NOT change git `user.name`/`user.email` or pass `--author`; let the env vars stand so attribution is correct.
- **Stay in your own space** — work inside this session's cwd / `$DASH_PROJECT_DIR`. Never edit files in another member's project dir (`~/web-projects/<someone-else>/...`).
- **Branch, never commit to a shared branch** — always work on a feature branch named `$DASH_USER/<short-topic>`. Never commit directly to `main`/`master` or to a branch someone else is using.
- **Sync before you start** — `git fetch` + rebase/merge latest so you're not building on stale code. Resolve conflicts cleanly.
- **Push your branch, open a PR** — let the repo owner review/merge. **NEVER force-push** `main` or any shared branch.
- **Isolate when sharing a repo** — if a teammate is already working in a repo's working tree, don't fight over it: make your own worktree — `git worktree add ../<repo>-$DASH_USER -b $DASH_USER/<topic>` — and work there.
- **Never commit secrets** (.env, tokens, keys). Check `git status` before committing."""


def _sync_git_rules_into(codex_md: Path):
    """Maintain a managed GIT RULES block in AGENTS.md (members + admins). Placed
    just under the projects note / top so it's always current regardless of edits."""
    original = codex_md.read_text() if codex_md.exists() else ""
    existing = original
    if _GIT_RULES_BEGIN in existing and _GIT_RULES_END in existing:
        pre = existing.split(_GIT_RULES_BEGIN, 1)[0]
        post = existing.split(_GIT_RULES_END, 1)[1]
        existing = (pre.rstrip("\n") + "\n" + post.lstrip("\n"))
    block = _GIT_RULES_BEGIN + "\n" + _GIT_RULES + "\n" + _GIT_RULES_END + "\n"
    if block in original:
        return
    # Insert after the projects-note block if present, else prepend.
    try:
        codex_md.parent.mkdir(parents=True, exist_ok=True)
        if _PROJ_NOTE_END in existing:
            head, tail = existing.split(_PROJ_NOTE_END, 1)
            updated = head + _PROJ_NOTE_END + "\n\n" + block + tail.lstrip("\n")
        else:
            updated = block + "\n" + existing.lstrip("\n")
        if updated != original:
            _backup_before_dashboard_write(codex_md)
            codex_md.write_text(updated)
    except Exception:
        logger.debug("Failed to sync git rules into %s", codex_md, exc_info=True)


def _setup_shared_git_config():
    """Set safe, friction-reducing git defaults once for the shared OS user so
    multi-user work behaves predictably. Idempotent (git config is declarative)."""
    defaults = [
        ("push.default", "current"),
        ("push.autoSetupRemote", "true"),
        ("pull.rebase", "false"),
        ("init.defaultBranch", "main"),
        ("rerere.enabled", "true"),
        ("merge.conflictStyle", "zdiff3"),
    ]
    for k, v in defaults:
        try:
            subprocess.run(["git", "config", "--global", k, v],
                           capture_output=True, text=True, timeout=5)
        except Exception:
            logger.debug("git config --global %s failed", k, exc_info=True)
    # A global ignore so per-user/editor noise never gets committed by accident.
    try:
        gi = Path.home() / ".gitignore_global"
        if not gi.exists():
            gi.write_text(".DS_Store\n*.swp\n.serve.json\n.claude_primed\nnode_modules/\n__pycache__/\n.venv/\n")
        subprocess.run(["git", "config", "--global", "core.excludesfile", str(gi)],
                       capture_output=True, text=True, timeout=5)
    except Exception:
        logger.debug("global gitignore setup failed", exc_info=True)


_GROUP_CTX_BEGIN = "<!-- TEAM PERMISSION GROUP (managed; edits inside are overwritten) -->"


_GROUP_CTX_END = "<!-- END TEAM GROUP CONTEXT -->"


def _read_group_context(group_id: str) -> str:
    p = _group_dir(group_id) / "AGENTS.md"
    try:
        return p.read_text() if p.exists() else ""
    except Exception:
        return ""


def _sync_group_context_into(codex_md: Path, group_id: str):
    """Maintain a managed GROUP CONTEXT block in a member's AGENTS.md (below the
    global block). Removes it when the user has no group."""
    original = codex_md.read_text() if codex_md.exists() else ""
    existing = original
    if _GROUP_CTX_BEGIN in existing and _GROUP_CTX_END in existing:
        pre = existing.split(_GROUP_CTX_BEGIN, 1)[0]
        post = existing.split(_GROUP_CTX_END, 1)[1]
        existing = pre.rstrip("\n") + "\n" + post.lstrip("\n")
    if not group_id:
        if existing != original:
            _backup_before_dashboard_write(codex_md)
            codex_md.write_text(existing)
        return
    block = _GROUP_CTX_BEGIN + "\n" + _read_group_context(group_id).rstrip() + "\n" + _GROUP_CTX_END + "\n"
    if block in original:
        return
    if _GLOBAL_CTX_END in existing:
        head, tail = existing.split(_GLOBAL_CTX_END, 1)
        existing = head + _GLOBAL_CTX_END + "\n\n" + block + tail.lstrip("\n")
    else:
        existing = block + "\n" + existing.lstrip("\n")
    if existing != original:
        _backup_before_dashboard_write(codex_md)
        codex_md.write_text(existing)


# --- admin context-file editor (per user / per group) ---------------------
_CONTEXT_TOP_FILES = ["AGENTS.md", "MEMORY.md", "config.toml", ".mcp.json"]


_CONTEXT_DIRS = ["skills", "agents", "commands"]


def _context_root(scope: str, ident: str):
    if scope == "user":
        u = _find_user_by_id(ident)
        if not u:
            return None
        d = _user_codex_config_dir(u)
        if not _is_admin(u):
            _ensure_user_codex_config_dir(u)
        return d
    if scope == "group":
        # Permission groups are a fixed policy catalog.  Exposing their backing
        # AGENTS.md files through the generic context editor would quietly turn
        # them back into user-editable groups and could weaken access rules.
        return None
    return None


def _list_context_files(root: Path):
    out = []
    for name in _CONTEXT_TOP_FILES:
        p = root / name
        if p.is_file():
            out.append({"path": name, "size": p.stat().st_size})
    for d in _CONTEXT_DIRS:
        base = root / d
        if base.exists():
            for p in sorted(base.rglob("*")):
                if p.is_file() and not p.name.startswith("."):
                    out.append({"path": str(p.relative_to(root)), "size": p.stat().st_size})
    return out


def _context_file_entries():
    """Resolve fixed registry candidates plus existing per-host infra details."""
    entries = []
    for configured in _CONTEXT_FILES:
        entry = dict(configured)
        candidates = list(entry.pop("paths"))
        entry["path"] = _first_existing_path(candidates)
        entries.append(entry)
    try:
        infra_dir = _first_existing_path(list(_INFRA_DETAIL_DIRS))
        for p in sorted(infra_dir.glob("*.md")):
            entries.append({
                "id": "infra-" + p.stem, "path": p, "load": "ondemand",
                "label": "infra/" + p.name,
                "note": ("One line per infrastructure change, newest first."
                         if p.name == "CHANGELOG.md"
                         else "Per-host infrastructure detail, linked from the index."),
            })
    except Exception:
        logger.debug("Failed to list infra detail files", exc_info=True)
    return entries
