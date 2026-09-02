"""Configuration constants for the dashboard.

Environment-derived paths, tunables and feature flags, extracted from app.py as
the first step of breaking up the monolith. Everything here is read once at
import and never reassigned -- constants that the app rebinds at runtime
deliberately stayed behind, because moving them would break `global` rebinding.

This module imports nothing from the application, so it can be imported from
anywhere without creating a cycle.
"""

from __future__ import annotations

import os
import secrets
from pathlib import Path

# Paths were written relative to app.py at the repository root. This module
# lives one level down, so anchor them explicitly rather than on __file__,
# which would silently resolve them inside core/.
REPO_ROOT = Path(__file__).resolve().parent.parent

OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY", "")
CODEX_API_FALLBACK_ENABLED = os.environ.get(
    "TMUX_DASH_CODEX_API_FALLBACK_ENABLED",
    "",
).lower() in ("1", "true", "yes", "on")
PORT = int(os.environ.get("TMUX_DASH_PORT", "8505"))
ROOT_PATH = os.environ.get("TMUX_DASH_ROOT_PATH", "/codex")
PROCESS_ROLE = os.environ.get("TMUX_DASH_PROCESS_ROLE", "combined").strip().lower()

# Default launch command for codex sessions. config.toml already sets
# sandbox_mode=danger-full-access and approval_policy=never so bare `codex`
# is non-interactive; we still pass the explicit flag for safety on hosts that
# haven't been pre-configured.
NEW_SESSION_CMD = os.environ.get(
    "TMUX_DASH_NEW_SESSION_CMD",
    "codex --dangerously-bypass-approvals-and-sandbox",
)
# Where the codex CLI keeps its state. Mirrors $CODEX_HOME.
CODEX_HOME = Path(os.environ.get("CODEX_HOME", str(Path.home() / ".codex")))
# Codex runtime, model, and reasoning defaults.
_CODEX_MIN_CLI_VERSION = os.environ.get("TMUX_DASH_MIN_CODEX_VERSION", "0.145.0").strip()
_CODEX_DEFAULT_MODEL = os.environ.get(
    "TMUX_DASH_DEFAULT_MODEL",
    os.environ.get("CODEX_DEFAULT_MODEL", "gpt-5.6-sol"),
).strip() or "gpt-5.6-sol"

# Codex 0.146 can leave its TUI blocked in MCP startup for minutes when the
# OpenAI developer-docs HTTP server is configured. Dashboard sessions have web
# access for documentation lookups, so keep that optional MCP out of the
# interactive startup path unless an operator explicitly opts back in.
_DISABLE_STALLED_OPENAI_DOCS_MCP = os.environ.get(
    "TMUX_DASH_DISABLE_OPENAI_DOCS_MCP", "1"
).strip().lower() not in {"0", "false", "no", "off"}

MODELS_FILE = Path.home() / ".tmux-dashboard" / "codex-models.json"

# Agents the dashboard can launch in a session. Codex remains the default; the
# value is stored per session so relaunch/resume keeps the same agent.
CLAUDE_SESSION_CMD = os.environ.get(
    "TMUX_DASH_CLAUDE_SESSION_CMD",
    "claude --dangerously-skip-permissions",
)

# --- Team mode ------------------------------------------------------------
# When TMUX_DASH_TEAM_MODE=1, non-admin ("user" role) accounts get a heavily
# simplified UI, shared Codex authentication, per-user context, OAuth connections,
# and a soft sandbox (cross-server actions are blocked and logged). Gated behind
# env so the shared codebase is unchanged for the personal
# single-admin dashboards (instance-3, builder) that never set these vars.
TEAM_MODE = os.environ.get("TMUX_DASH_TEAM_MODE", "") == "1"
BRAND_NAME = os.environ.get("TMUX_DASH_BRAND", "tmux")
ADMIN_APPROVAL_EMAIL = os.environ.get("TMUX_DASH_ADMIN_EMAIL", "nimrod.rotem@gmail.com")
RESEND_API_KEY = os.environ.get("RESEND_API_KEY", "")
MAIL_FROM = os.environ.get("TMUX_DASH_MAIL_FROM", f"{BRAND_NAME} <dev@grabo.cc>")
PUBLIC_BASE_URL = os.environ.get("TMUX_DASH_PUBLIC_URL", "")  # e.g. https://dianaotech.com

DASH_LOCAL_URL = os.environ.get("TMUX_DASH_LOCAL_URL", "http://127.0.0.1:8501")
# Team-mode default model + reasoning effort, pinned into every session's config.
TEAM_MODEL = os.environ.get("TMUX_DASH_TEAM_MODEL", _CODEX_DEFAULT_MODEL)
TEAM_EFFORT = os.environ.get("TMUX_DASH_TEAM_EFFORT", "max")
# Email domain used for per-user git commit identity (commits are AUTHORED by the
# member even though everyone shares one OS user).
GIT_EMAIL_DOMAIN = os.environ.get("TMUX_DASH_GIT_EMAIL_DOMAIN", "grabo.tech")

# Auto-summarizer (LLM session title/description/progress/notes + realtime fallback).
AUTO_SUMMARIZER_ENABLED = os.environ.get("TMUX_DASH_AUTO_SUMMARY", "").lower() in ("1", "true", "yes")
SAVED_INFO_ENABLED = os.environ.get(
    "TMUX_DASH_SAVED_INFO",
    "1",
).lower() not in ("0", "false", "no", "off")
SAVED_INFO_MODEL = os.environ.get(
    "TMUX_DASH_SAVED_INFO_MODEL",
    os.environ.get("TMUX_DASH_LLM_MODEL", "gpt-4o-mini"),
).strip()

# Keep Grabo's established dashboard state directory so users, history, browser
# sessions, and settings survive the runtime migration.
MESSAGES_DIR = Path.home() / ".tmux-dashboard"
CONTROLLER_SOCKET = Path(
    os.environ.get("TMUX_DASH_CONTROLLER_SOCKET", str(MESSAGES_DIR / "controller.sock"))
)

BROWSER_LEASE_TTL = max(60, int(os.environ.get("TMUX_DASH_BROWSER_LEASE_TTL", "300")))
BROWSER_PARK_AFTER = max(300, int(os.environ.get("TMUX_DASH_BROWSER_PARK_AFTER", "1200")))
SESSION_PARK_AFTER = max(3600, int(os.environ.get("TMUX_DASH_SESSION_PARK_AFTER", "86400")))
SESSION_LIFECYCLE_INTERVAL = max(
    30, int(os.environ.get("TMUX_DASH_LIFECYCLE_INTERVAL", "300"))
)

GOOGLE_MCP_SCRIPT = REPO_ROOT / "google_workspace_mcp.py"
PLAYWRIGHT_MCP_CLI = Path(
    os.environ.get(
        "TMUX_DASH_PLAYWRIGHT_MCP_CLI",
        str(
            Path.home()
            / ".claude-browser"
            / "node_modules"
            / "@playwright"
            / "mcp"
            / "cli.js"
        ),
    )
).expanduser()
GOOGLE_DWD_SERVICE_ACCOUNT_FILE = Path(
    os.environ.get(
        "GOOGLE_WORKSPACE_DWD_SERVICE_ACCOUNT_FILE",
        str(Path.home() / ".gworkspace-admin" / "sa-key.json"),
    )
).expanduser()
DOCVAULT_MCP_URL = os.environ.get(
    "DOCVAULT_MCP_URL", "https://grabo.cc/docvault-mcp/mcp"
)
DOCVAULT_MCP_KEY = os.environ.get("DOCVAULT_MCP_KEY", "")
DOCVAULT_MCP_SCRIPT = REPO_ROOT / "docvault_mcp.py"

# The Svelte Remote IDE bundle is built by `make ide` into static/ide/. Mounted
# only when present so a checkout without a build still starts; the IDE route
# reports the missing build rather than serving a blank page.
IDE_BUNDLE_DIR = REPO_ROOT / "static" / "ide"

# --- Auth ---
AUTH_USER = os.environ.get("TMUX_DASH_USER", "admin")
AUTH_PASS = os.environ.get("TMUX_DASH_PASS", "")
AUTH_COOKIE = os.environ.get("TMUX_DASH_COOKIE", "tmux_auth")

# --- Google sign-in --------------------------------------------------------
# One-click login for company Google accounts. Employees at the allowed domains
# get an account provisioned on first sign-in; everyone else is rejected before
# any account is created. Uses the same OAuth client as the Drive/Gmail
# connections feature (`_google_client()`), so a single client ID configured via
# GOOGLE_OAUTH_CLIENT_ID/SECRET or ~/.tmux-dashboard/google_oauth_client.json
# covers both. `_sign_state`/`_verify_state` live further down the module with
# the connections code; they're only called at request time so the forward
# reference is fine.
GOOGLE_LOGIN_DOMAINS = [
    d.strip().lower().lstrip("@")
    for d in os.environ.get("TMUX_DASH_GOOGLE_DOMAINS", "grabo.com,nemopowertools.com").split(",")
    if d.strip()
]
# Individual addresses allowed on top of the domains (e.g. a personal Gmail that
# should map onto an existing account). Comma-separated.
GOOGLE_LOGIN_EMAILS = [
    e.strip().lower() for e in os.environ.get("TMUX_DASH_GOOGLE_EMAILS", "").split(",") if e.strip()
]
# Google address that signs in as the built-in admin (id="admin").
ADMIN_GOOGLE_EMAIL = os.environ.get("TMUX_DASH_ADMIN_GOOGLE_EMAIL", "").strip().lower()

_CLAUDE_API_KEYS_MD = Path.home() / "CLAUDE_API_KEYS.md"

SHARED_CREDENTIALS = Path.home() / ".claude" / ".credentials.json"

BROWSER_POLICY_FILE = Path.home() / ".tmux-dashboard" / "context" / "browser-policy.md"

_SANDBOX_HOOK_SCRIPT = r'''#!/usr/bin/env python3
# Soft-sandbox guard (auto-generated; do not edit).
# PreToolUse hook: blocks actions that touch OTHER servers / cloud resources and
# logs them on the dashboard. Local changes on this server are allowed.
import sys, json, os, re, urllib.request

DASH_URL = os.environ.get("DASH_URL", "__DASH_URL__")

BLOCK_PATTERNS = [
    r"\bgcloud\b", r"\bgsutil\b", r"\bbq\b", r"\bkubectl\b", r"\bhelm\b",
    r"\bssh\b", r"\bscp\b", r"\bsftp\b", r"\bsshpass\b", r"\bmosh\b",
    r"\bdoctl\b", r"\baws\b", r"\baz\b", r"\bterraform\b",
    r"169\.254\.169\.254", r"metadata\.google\.internal",
    r"\brsync\b[^\n]*::", r"\brsync\b[^\n]*@",
]
BLOCK_RE = [re.compile(p, re.I) for p in BLOCK_PATTERNS]


def extract_text(tool_input):
    if not isinstance(tool_input, dict):
        return ""
    parts = []
    for k in ("command", "cmd", "script", "url"):
        v = tool_input.get(k)
        if isinstance(v, str):
            parts.append(v)
    return "\n".join(parts)


def main():
    try:
        data = json.load(sys.stdin)
    except Exception:
        sys.exit(0)
    tool_name = data.get("tool_name", "")
    text = extract_text(data.get("tool_input", {}))
    if not text or not any(rx.search(text) for rx in BLOCK_RE):
        sys.exit(0)
    cfg = os.environ.get("CLAUDE_CONFIG_DIR", "")
    uid = ""
    if ".claude-user-" in cfg:
        uid = cfg.split(".claude-user-", 1)[1].strip("/").split("/")[0]
    payload = json.dumps({
        "user_id": uid, "tool": tool_name,
        "command": text[:4000], "cwd": data.get("cwd", os.getcwd()),
    }).encode()
    try:
        req = urllib.request.Request(
            DASH_URL.rstrip("/") + "/api/sandbox/check",
            data=payload, headers={"Content-Type": "application/json"})
        with urllib.request.urlopen(req, timeout=8) as r:
            resp = json.load(r)
    except Exception:
        print("__BRAND__ sandbox: cross-server action blocked (guard service "
              "unreachable). This server only — other servers are off-limits.",
              file=sys.stderr)
        sys.exit(2)
    if resp.get("decision") == "allow":
        sys.exit(0)
    print(resp.get("reason") or
          "__BRAND__ sandbox: this targets another server and is blocked. "
          "Do not attempt to bypass it.", file=sys.stderr)
    sys.exit(2)


main()
'''

PROJECTS_ROOT = Path.home() / "web-projects"

ADVISOR_BASE_URL = os.environ.get(
    "TMUX_DASH_ADVISOR_URL",
    "https://advisor.rotem.ai",
).rstrip("/")
ADVISOR_ADMIN_TOKEN_FILE = Path.home() / ".advisor-token"
ADVISOR_HOST_NAME = os.environ.get(
    "TMUX_DASH_ADVISOR_HOST",
    os.uname().nodename,
).strip()

QA_OUTPUT_DIR = REPO_ROOT / "qa-output"

#
# There is one primary AGENTS.md plus a handful of reference docs it points at.
# This registry is fixed on purpose: the UI edits these files in place and offers
# no way to create arbitrary sidecar context files. Every extra file either costs
# context on every session or quietly drifts because nothing ever reads it.
#
# "auto" files are injected into every session's context; "ondemand" files cost
# nothing until AGENTS.md sends a session to them.
_CONTEXT_FILES = [
    {"id": "codex-agents", "paths": [CODEX_HOME / "AGENTS.md"], "load": "auto",
     "label": "$CODEX_HOME/AGENTS.md",
     "note": "Global Codex instructions loaded for sessions owned by this account."},
    {"id": "home-agents", "paths": [Path.home() / "AGENTS.md"], "load": "auto",
     "label": "~/AGENTS.md",
     "note": "Project-tree instructions for sessions whose working directory is under home."},
    {"id": "github-rules", "paths": [
        Path.home() / "CODEX_GITHUB_RULES.md",
        Path.home() / "CLAUDE_GITHUB_RULES.md",
    ], "load": "ondemand",
     "note": "Git and GitHub rules."},
    {"id": "api-keys", "paths": [
        Path.home() / "CODEX_API_KEYS.md",
        Path.home() / "CLAUDE_API_KEYS.md",
    ], "load": "ondemand",
     "secret": True,
     "note": "Raw API key file. Prefer Settings → APIs, which also shows live usage."},
    {"id": "full-context", "paths": [
        Path.home() / "CODEX_FULL_CONTEXT.md",
        Path.home() / "CLAUDE_FULL_CONTEXT.md",
    ], "load": "ondemand", "secret": True,
     "note": "Complete generated environment, development-system, and settings snapshot."},
    {"id": "infra-index", "paths": [
        CODEX_HOME / "vm_projects_dir.md",
        Path.home() / ".claude" / "vm_projects_dir.md",
    ], "load": "ondemand",
     "note": "Infrastructure index: VMs, domains, and pointers to the per-host detail files."},
    {"id": "droplets", "paths": [Path.home() / "claude_droplets_access.md"], "load": "ondemand",
     "note": "SSH access to the legacy DigitalOcean droplets."},
    {"id": "infra-keeper", "paths": [
        MESSAGES_DIR / "skills" / "_global" / "infra-directory-keeper.md",
    ],
     "load": "ondemand", "note": "Rules for keeping the infrastructure index current."},
    {"id": "browser-qa", "paths": [
        MESSAGES_DIR / "skills" / "_global" / "browser-qa.md",
    ],
     "load": "ondemand", "note": "agent-browser QA procedure to run after a large change."},
    {"id": "legacy-claude", "paths": [Path.home() / "CLAUDE.md"], "load": "legacy",
     "label": "~/CLAUDE.md (legacy)",
     "note": "Legacy Claude context retained for migration reference; Codex does not auto-load it."},
]

_INFRA_DETAIL_DIRS = [CODEX_HOME / "infra", Path.home() / ".claude" / "infra"]

# Keep UNIX-domain socket paths short enough for OpenSSH on macOS and Linux.
# The socket identifies a dashboard session + SSH profile but contains neither
# name, host, nor credential material.
SSH_CONTROL_DIR = Path("/tmp") / f"nssh-{os.getuid()}"

SSH_KNOWN_HOSTS = Path.home() / ".ssh" / "known_hosts"

_LOGIN_STATE_FILE = Path.home() / ".tmux-dashboard" / "login_state.json"

BROWSER_LAUNCHER = str(Path.home() / ".claude-browser" / "bin" / "browser-session.sh")

# Auto-auth: drive the OAuth click-through in the designated login browser and
# type the code back.
#
# DEFAULT OFF for the watchdog. claude.ai's consent page stalls when the
# Authorize button is driven programmatically (verified with a JS click, trusted
# CDP mouse events and a real X11 click), so the automated path can never
# actually finish a /login — it can only get in the way. Left on, the watchdog
# saw a HUMAN's /login as "a login flow to finish", typed into their pane and
# interrupted them. Set TMUX_DASH_AUTO_AUTH=1 to re-enable if claude.ai ever
# stops blocking it. The manual button/endpoint works regardless.
AUTO_AUTH_ENABLED = os.environ.get("TMUX_DASH_AUTO_AUTH", "0") == "1"

# The default session's ports are host-dependent: 5900/6080 is the convention,
# but on builder the ups-audit app owns that pair on the SAME display :99 (nginx
# maps /ups-vnc/ -> 6080) with a password-protected x11vnc, so this dashboard's
# viewer landed on UPS's RFB and hung on a VNC password prompt. There the
# claude-vnc unit runs on 5902/6082 and these env vars point us at it.
_DEFAULT_BROWSER_SESSION = {
    "id": "default", "name": "Main browser", "slot": 0, "display": 99,
    "rfb_port": int(os.environ.get("CB_DEFAULT_RFB_PORT") or 5900),
    "vnc_port": int(os.environ.get("CB_DEFAULT_VNC_PORT") or 6080),
    "cdp_port": int(os.environ.get("CB_DEFAULT_CDP_PORT") or 9222),
    "managed": False,
    "lifecycle_managed": True,
    "systemd_unit": os.environ.get("CB_DEFAULT_SYSTEMD_UNIT", "claude-vnc.service"),
    "owner_id": "admin",
    "account_browser": True,
}

# --- Residential proxy + fingerprint ----------------------------------------
# Every browser goes out through a loopback port served by the proxy relay
# (~/.claude-browser/bin/proxy_relay.py), which attaches the residential
# provider's credentials. Each browser has its OWN port => its own sticky exit
# IP, so two browsers look like two different people. Config + credentials live
# in ~/.claude-browser/proxy.json (mode 600); this dashboard only edits it.
CB_ROOT = Path.home() / ".claude-browser"

# --- Phase implementations ---
# Skills are installed at ~/.codex/away-mode-skills/XX-name/SKILL.md
_SKILLS_DIR = str(Path.home() / ".codex" / "away-mode-skills")

_GO_NUTS_SKILLS_DIR = str(Path.home() / ".codex" / "go-nuts-mode-skills")
