from __future__ import annotations

import asyncio
import base64
import binascii
import fcntl
import functools
import hashlib
import hmac
import html
import inspect
import ipaddress
import json
import logging
import mimetypes
import os
import pty
import re
import secrets
import select
import shlex
import shutil
import signal
import struct
import subprocess
import sys
import tempfile
import termios
import threading
import time
from concurrent.futures import ThreadPoolExecutor
from contextlib import asynccontextmanager

try:
    import tomllib
except ModuleNotFoundError:  # Python 3.9/3.10 production hosts
    import tomli as tomllib
import glob as globmod
from datetime import datetime, timedelta, timezone
from pathlib import Path

logger = logging.getLogger("codex-dashboard")
logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(name)s] %(levelname)s: %(message)s")

import httpx
import openai
import uvicorn
import websockets
from cryptography.exceptions import InvalidTag
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
from fastapi import FastAPI, File, Request, UploadFile, WebSocket, WebSocketDisconnect
from fastapi.exceptions import RequestValidationError
from fastapi.responses import FileResponse, HTMLResponse, JSONResponse, RedirectResponse, Response
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

import db_store
import google_policy

# Configuration constants now live in core/config.py. They are re-exported
# here unchanged so existing imports (`from app import ROOT_PATH`, and the
# test suite's 223 such imports) keep working while the split proceeds.
from core import tokens as core_tokens  # noqa: E402

# User accounts, request identity and impersonation now live in core/users.py.
# Re-exported here so the 78 _current_user call sites and the test suite's
# imports keep working unchanged.
from core import users as core_users  # noqa: E402
from core.config import (  # noqa: E402
    _CLAUDE_API_KEYS_MD,
    _CODEX_DEFAULT_MODEL,
    _CODEX_DOCS_MCP_OVERRIDE,
    _CODEX_DOCS_MCP_SERVER,
    _CODEX_DOCS_OVERRIDE_RE,
    _CODEX_MIN_CLI_VERSION,
    _CONTEXT_FILES,
    _DEFAULT_BROWSER_SESSION,
    _DISABLE_STALLED_OPENAI_DOCS_MCP,
    _GO_NUTS_SKILLS_DIR,
    _INFRA_DETAIL_DIRS,
    _LOGIN_STATE_FILE,
    _SANDBOX_HOOK_SCRIPT,
    _SKILLS_DIR,
    ADMIN_APPROVAL_EMAIL,
    ADMIN_GOOGLE_EMAIL,
    ADVISOR_ADMIN_TOKEN_FILE,
    ADVISOR_BASE_URL,
    ADVISOR_HOST_NAME,
    AUTH_COOKIE,
    AUTH_PASS,
    AUTH_USER,
    AUTO_AUTH_ENABLED,
    AUTO_SUMMARIZER_ENABLED,
    BRAND_NAME,
    BROWSER_LAUNCHER,
    BROWSER_LEASE_TTL,
    BROWSER_PARK_AFTER,
    BROWSER_POLICY_FILE,
    CB_ROOT,
    CLAUDE_EFFORTS,
    CLAUDE_SESSION_CMD,
    CODEX_API_FALLBACK_ENABLED,
    CODEX_HOME,
    CONTROLLER_SOCKET,
    DASH_LOCAL_URL,
    DOCVAULT_MCP_KEY,
    DOCVAULT_MCP_SCRIPT,
    DOCVAULT_MCP_URL,
    GIT_EMAIL_DOMAIN,
    GOOGLE_DWD_SERVICE_ACCOUNT_FILE,
    GOOGLE_LOGIN_DOMAINS,
    GOOGLE_LOGIN_EMAILS,
    GOOGLE_MCP_SCRIPT,
    IDE_BUNDLE_DIR,
    MAIL_FROM,
    MAX_IDE_TERMINALS,
    MESSAGES_DIR,
    MODELS_FILE,
    NEW_SESSION_CMD,
    OPENAI_API_KEY,
    PERMISSION_GROUPS,
    PLAYWRIGHT_MCP_CLI,
    PORT,
    PROCESS_ROLE,
    PROJECTS_ROOT,
    PUB_URL,
    PUBLIC_BASE_URL,
    QA_OUTPUT_DIR,
    RESEND_API_KEY,
    ROOT_PATH,
    SAVED_INFO_ENABLED,
    SAVED_INFO_MODEL,
    SESSION_LIFECYCLE_INTERVAL,
    SESSION_PARK_AFTER,
    SHARED_CREDENTIALS,
    SSH_CONTROL_DIR,
    SSH_KNOWN_HOSTS,
    TEAM_EFFORT,
    TEAM_MODE,
    TEAM_MODEL,
    TEMPLATES_DIR,
    USERS_FILE,
)

# Pure validators moved to core/validators.py; re-exported so existing
# imports and the test suite keep working unchanged.
from core.io import _atomic_write_json  # noqa: E402
from core.state import _db_ready, _shared_store  # noqa: E402
from core.users import (  # noqa: E402
    _IMPERSONATION_SESSION_TTL,
    _IMPERSONATION_TICKET_TTL,
    _USER_ONLINE_WINDOW_SECONDS,
    IMPERSONATION_SESSIONS_FILE,
    _current_user,
    _find_user_by_id,
    _hash_password,
    _impersonation_lock,
    _impersonation_sessions,
    _impersonation_sessions_loaded,
    _impersonation_tickets,
    _load_impersonation_sessions_locked,
    _load_users,
    _new_salt,
    _public_user,
    _purge_expired_impersonation_tokens,
    _save_impersonation_sessions_locked,
    _save_users,
    _touch_user_presence,
    _user_from_impersonation_session,
    _user_from_token,
    _user_presence,
)
from core.validators import (  # noqa: E402
    _html_escape,
    _is_admin,
    _is_valid_session_name,
    _path_within,
    _safe_seg,
    _tmux_safe_label,
    _valid_git_branch,
    _valid_git_commit_ref,
    _valid_git_pathspec,
)
from runtime_control import (
    BrowserLeaseStore,
    LockedJsonStore,
    SessionLifecycleStore,
    browser_start_argv,
    browser_unit_name,
    scoped_codex_command,
    user_systemd_argv,
)

# Agent context files, git rules and auto-push mode now live in
# services/agent_config.py.
from services import agent_config as agent_config_service  # noqa: E402
from services import autonomous as autonomous_service  # noqa: E402
from services import browser as browser_service  # noqa: E402

# config.toml editing and CLI readiness now live in services/codex_config.py.
from services import codex_config as codex_config_service  # noqa: E402

# Google sign-in and connected-service OAuth now live in services/google_auth.py.
from services import google_auth as google_auth_service  # noqa: E402

# Member Codex isolation and advisor sync now live in
# services/member_auth.py.
from services import member_auth as member_auth_service  # noqa: E402

# Public project serving and the Codex alert log now live in
# services/projects.py.
from services import projects as projects_service  # noqa: E402

# Session launch and lifecycle now live in services/session_launch.py.
from services import session_launch as session_launch_service  # noqa: E402
from services import ssh as ssh_service  # noqa: E402

# Per-session stores (messages, notes, skills, memory) now live in
# services/stores.py.
from services import stores as stores_service  # noqa: E402

# Shared terminal stream fan-out now lives in services/terminal.py.
from services import terminal as terminal_service  # noqa: E402
from services import tmux as tmux_service  # noqa: E402

# The Remote SSH IDE service now lives in services/ssh.py. Route handlers
# stay here; everything they call is re-exported below so call sites and
# the test suite's patch points keep working unchanged.
# Browser sessions now live in services/browser.py; route handlers stay here.
# Away / Go Nuts autonomous modes now live in services/autonomous.py.
# tmux inspection and agent activity detection now live in services/tmux.py.
# Usage accounting (tokens, cost, prompt audit) now lives in services/usage.py.
from services import usage as usage_service  # noqa: E402

# Session watchdogs now live in services/watchdog.py.
from services import watchdog as watchdog_service  # noqa: E402
from services.agent_config import (  # noqa: E402
    _CONTEXT_DIRS,
    _CONTEXT_TOP_FILES,
    _DEFAULT_GLOBAL_CONTEXT,
    _GIT_RULES,
    _GIT_RULES_BEGIN,
    _GIT_RULES_END,
    _GLOBAL_CTX_BEGIN,
    _GLOBAL_CTX_END,
    _GROUP_CTX_BEGIN,
    _GROUP_CTX_END,
    AUTOPUSH_DEFAULT,
    AUTOPUSH_MODE_FILE,
    AUTOPUSH_MODES,
    GLOBAL_CONTEXT_FILE,
    _autopush_mode,
    _context_file_entries,
    _context_root,
    _ensure_global_context_file,
    _get_autopush_mode,
    _list_context_files,
    _load_autopush_mode,
    _my_context_path,
    _read_global_context,
    _read_group_context,
    _remove_legacy_global_context_from_agents,
    _save_autopush_mode,
    _setup_shared_git_config,
    _sync_git_rules_into,
    _sync_global_context_into,
    _sync_group_context_into,
)
from services.autonomous import (  # noqa: E402
    _AWAY_PING_PROMPT,
    _GN_PHASE1_PROMPT,
    _GN_PHASE2_PROMPT,
    _GN_PHASE3_PROMPT,
    _GN_PING_PROMPT,
    _GO_NUTS_LOG_CAP,
    _PHASE1_PROMPT,
    _PHASE2_PROMPT,
    _PHASE3_ROUND1_PROMPT,
    _PHASE3_ROUND2_PROMPT,
    _PHASE3_ROUND3_PROMPT,
    _UNSTICK_PROMPT_AWAY,
    _UNSTICK_PROMPT_GONUTS,
    GoNutsModeBody,
    _away_log,
    _away_mode_continuous_loop,
    _away_mode_state,
    _away_mode_worker,
    _away_phase_execute,
    _away_phase_select,
    _away_phase_study,
    _away_send_and_wait,
    _away_send_prompt,
    _away_state_summary,
    _away_toggle_local,
    _away_wait_for_idle,
    _go_nuts_continuous_loop,
    _go_nuts_log,
    _go_nuts_mode_worker,
    _go_nuts_phase_backlog,
    _go_nuts_phase_build,
    _go_nuts_phase_discover,
    _go_nuts_send_and_wait,
    _go_nuts_state,
    _go_nuts_state_summary,
    _go_nuts_toggle_local,
)
from services.browser import (  # noqa: E402
    _BROWSER_AUTH_TTL,
    _BROWSER_LAUNCHER_SCRIPT,
    BROWSER_AUDIT_MAX_EVENTS,
    BROWSER_AUDIT_RETENTION_SECONDS,
    BROWSER_AUDIT_ROOT,
    BROWSER_PROXY_CONF,
    BROWSER_PROXY_USAGE,
    BROWSER_SESSIONS_FILE,
    BrowserCreateBody,
    BrowserLeaseBody,
    BrowserPatchBody,
    BrowserProxyBody,
    _acquire_browser_lease_local,
    _append_browser_audit,
    _browser_audit_dir,
    _browser_audit_lock,
    _browser_auth_cache,
    _browser_busy,
    _browser_busy_ctx,
    _browser_capture_state,
    _browser_claude_account,
    _browser_external_url,
    _browser_leases,
    _browser_lifecycle_loop,
    _browser_live_streaming,
    _browser_network_route,
    _browser_operation_lock,
    _browser_operation_locks,
    _browser_owner_id,
    _browser_port_alive,
    _browser_primary_target,
    _browser_process_alive,
    _browser_profile_dir,
    _browser_response_row,
    _browser_running,
    _browser_runtime,
    _browser_runtime_row,
    _browser_session_by_id,
    _browser_sessions_lock,
    _browser_starting,
    _browser_viewer_url,
    _capture_browser_screenshot,
    _cdp_tab,
    _CdpTab,
    _claim_browser_proxy_session,
    _default_browser_systemctl,
    _delete_user_browser_session,
    _ensure_all_user_browser_sessions,
    _ensure_browser_launcher,
    _ensure_browser_mcp,
    _ensure_tenant_browser,
    _ensure_user_browser_session,
    _load_browser_sessions,
    _next_browser_slot,
    _pick_login_browser,
    _proxy_conf,
    _proxy_exit_info,
    _proxy_presets,
    _proxy_save,
    _proxy_to_port,
    _proxy_usage,
    _prune_browser_audit_locked,
    _read_browser_audit,
    _release_browser_proxy_sessions,
    _safe_browser_audit_url,
    _save_browser_sessions,
    _set_browser_runtime,
    _start_browser_local,
    _start_browser_unlocked,
    _stop_browser_controlled,
    _stop_browser_local,
    _sync_account_browser_context,
    _tenant_browser_id,
    _user_can_access_browser,
)
from services.codex_config import (  # noqa: E402
    _codex_cli_readiness,
    _merge_top_level_toml_keys,
    _rewrite_top_level_toml,
    _set_toml_table_bool,
    _strip_toml_sections,
    _toml_basic_string,
    _toml_escape,
)
from services.google_auth import (  # noqa: E402
    _GOOGLE_BTN_HTML,
    CONNECTIONS_DIR,
    GOOGLE_DRIVE_SCOPE,
    GOOGLE_GMAIL_SCOPE,
    GOOGLE_LABELS,
    GOOGLE_LOGIN_SCOPES,
    GOOGLE_LOGIN_STATE_COOKIE,
    GOOGLE_MCP_AUDIT_FILE,
    GOOGLE_MCP_PYTHON,
    GOOGLE_OAUTH_CLIENT_FILE,
    GOOGLE_SCOPES,
    GOOGLE_WORKSPACE_REQUIRED_SCOPES,
    _callback_uri,
    _conn_path,
    _ensure_google_mcp,
    _extract_oauth_code,
    _google_client,
    _google_email_allowed,
    _google_login_enabled,
    _google_login_redirect_uri,
    _google_login_user,
    _google_mcp_command,
    _google_workspace_delegation_ready,
    _google_workspace_subject,
    _jwt_claims,
    _sign_state,
    _sync_admin_google_email,
    _verify_state,
    _write_google_mcp,
)
from services.member_auth import (  # noqa: E402
    _CODEX_AUTH_PROBE_FLOOR,
    _CODEX_AUTH_PROBE_MAX_AGE,
    SHARED_CODEX_AUTH,
    _advisor_live_sync_enabled,
    _advisor_request,
    _apply_member_auth,
    _codex_auth_display,
    _codex_auth_fallback_state,
    _codex_auth_health,
    _codex_auth_status_dict,
    _codex_auth_validation_lock,
    _codex_health_auth,
    _configure_member_codex_isolation,
    _ensure_codex_auth_with_fallback,
    _member_developer_instructions,
    _repair_member_codex_auth,
    _set_member_codex_permissions,
    _sync_advisor_user,
    _sync_permission_groups_with_advisor,
)
from services.projects import (  # noqa: E402
    _CODEX_ALERT_MAX,
    _CODEX_ALERT_REPEAT_WINDOW,
    _CODEX_MCP_HEADER_RE,
    _PROJ_NOTE,
    _PROJ_NOTE_BEGIN,
    _PROJ_NOTE_END,
    _PROJECT_FILES,
    _PROJECTS_PAGE_CSS,
    CODEX_ALERTS_FILE,
    ProjectFileBody,
    _build_project_isolation_preamble,
    _codex_alerts_lock,
    _codex_alerts_snapshot,
    _codex_app_server_account_read,
    _codex_app_server_initialize,
    _codex_app_server_process,
    _codex_app_server_rate_limits,
    _codex_app_server_send,
    _codex_app_server_wait,
    _codex_home_mcp_servers,
    _codex_mcp_decl_cache,
    _encode_project_path,
    _ensure_codex_project_trust,
    _list_projects,
    _member_can_serve_file,
    _member_session_project_dir,
    _project_dir,
    _project_dir_for_cwd,
    _projects_page_html,
    _publish_codex_auth_state,
    _read_codex_alerts_locked,
    _resolve_codex_alerts,
    _run_api_server,
    _safe_project_path,
    _sync_projects_note_into,
    _terminate_codex_app_server,
    _user_projects_dir,
    _write_codex_alerts_locked,
)
from services.session_launch import (  # noqa: E402
    SESSION_LIFECYCLE_FILE,
    _agent_quit_command,
    _archive_tmux_scrollback,
    _claude_launch_flags,
    _launch_codex_cmd,
    _park_session_local,
    _restore_parked_tmux_shell,
    _resume_parked_session,
    _session_agent_kind,
    _session_agents_file,
    _session_agents_store,
    _session_claude_setting,
    _session_launch_base,
    _session_launch_command,
    _session_launch_identity_prefix,
    _session_lifecycle_loop,
    _set_session_agent,
)
from services.ssh import (  # noqa: E402
    _SSH_BROWSE_SCRIPT,
    _SSH_FILESYSTEM_SCRIPT,
    _SSH_GIT_SCRIPT,
    _SSH_HOST_RE,
    _SSH_KEY_HEADER_RE,
    _SSH_LIST_SCRIPT,
    _SSH_LSP_STATUS_SCRIPT,
    _SSH_READ_SCRIPT,
    _SSH_SEARCH_SCRIPT,
    _SSH_SECRET_FIELDS,
    _SSH_USER_RE,
    _SSH_WRITE_SCRIPT,
    LOCAL_CONNECTION_KIND,
    SSH_CONNECTIONS_FILE,
    SSH_IDE_AUDIT_FILE,
    SSH_IDE_STATE_FILE,
    SSH_MANAGED_KEYS_DIR,
    SSH_MAX_FILE_BYTES,
    SSH_MAX_UNSAVED_STATE_BYTES,
    SSH_VAULT_KEY_FILE,
    SSHConnectBody,
    SSHConnectionBody,
    SSHGitBody,
    SSHHostKeyBody,
    SSHRemoteFileBody,
    SSHRemoteFilesystemBody,
    SSHWorkspaceRootBody,
    SSHWorkspaceStateBody,
    _append_ssh_ide_audit,
    _browse_path_allowed,
    _browse_roots,
    _create_local_workspace,
    _discard_ssh_key,
    _harden_ssh_state_file,
    _is_local_profile,
    _local_command_parts,
    _local_open_tmux_window,
    _local_root_denied,
    _local_run,
    _local_tmux_window_name,
    _materialize_ssh_key,
    _normalized_local_root,
    _normalized_remote_path,
    _normalized_ssh_identity_file,
    _normalized_workspace_path,
    _private_key_is_encrypted,
    _record_ssh_ide_audit,
    _ssh_argv,
    _ssh_connections_store,
    _ssh_control_is_alive,
    _ssh_control_socket,
    _ssh_focus_tmux_window,
    _ssh_host_is_known,
    _ssh_ide_audit_lock,
    _ssh_ide_denied,
    _ssh_ide_session_or_response,
    _ssh_ide_state_key,
    _ssh_ide_state_store,
    _ssh_key_fingerprints,
    _ssh_kill_tmux_window,
    _ssh_list_terminal_indexes,
    _ssh_managed_key_path,
    _ssh_open_tmux_window,
    _ssh_profile,
    _ssh_profile_or_response,
    _ssh_profiles,
    _ssh_public_profile,
    _ssh_read_ide_state,
    _ssh_remote_command,
    _ssh_run,
    _ssh_set_pty_size,
    _ssh_start_control_master,
    _ssh_terminal_argv,
    _ssh_terminal_pty,
    _ssh_tmux_window_exists,
    _ssh_tmux_window_name,
    _ssh_trust_host,
    _ssh_update_profile,
    _ssh_user_may_use_profile,
    _ssh_vault_decrypt,
    _ssh_vault_encrypt,
    _ssh_vault_key,
    _ssh_vault_key_cache,
    _ssh_vault_key_lock,
    _ssh_workspace_command,
    _ssh_write_ide_state,
    _tmux_window_suffix,
    _valid_private_key_blob,
    _valid_ssh_host,
    _WorkspaceCommand,
)
from services.stores import (  # noqa: E402
    _MEMORY_EXTRA_RE,
    _SKILL_DIR_NAME_RE,
    _SKILL_FILENAME_RE,
    SKILL_LIBRARY_DIR,
    SKILLS_DIR,
    SaveLibrarySkillBody,
    SkillFileBody,
    SkillLibraryBody,
    _account_skills_dir,
    _list_library_skills,
    _load_all_notes,
    _load_messages,
    _load_session_messages,
    _load_session_notes,
    _materialize_member_skills,
    _parse_skill_frontmatter,
    _read_skill_dir,
    _sanitize_memory_filename,
    _sanitize_skill_dir_name,
    _sanitize_skill_filename,
    _save_messages,
    _save_notes,
    _session_memory_dir,
    _skill_dir_for_session,
    _sync_group_skills_into,
    _user_messages_file,
    _user_notes_file,
    get_notes,
)
from services.terminal import (  # noqa: E402
    _controller_terminal_connection,
    _terminal_broadcast,
    _terminal_channels,
    _terminal_full_payload,
    _terminal_next_payload,
    _terminal_producer,
    _terminal_send,
    _terminal_subscribe,
    _terminal_unsubscribe,
)
from services.tmux import (  # noqa: E402
    _AGENT_PROCESS_NAMES,
    _CODEX_CONVERSATION_RE,
    _CODEX_DASH_VISIBILITY_CACHE,
    _CODEX_DASH_VISIBILITY_TTL,
    _CODEX_LAUNCH_LINE_RE,
    _CODEX_START_FAILURE_RE,
    _CODEX_WELCOME_RE,
    _CRASH_OOM_RE,
    _CRASH_SIGNATURE_RE,
    _PANE_RESIDUE_RE,
    _PROCESS_TREE_CACHE,
    _PROCESS_TREE_TTL,
    _RE_COMPLETION,
    _RE_COMPLETION_MSG,
    _RE_IDLE_PROMPT,
    _RE_RUNNING_TASK,
    _RE_SHELL_PROMPT,
    _RE_SPINNER_INLINE,
    _RE_SPINNER_START,
    _RE_THOUGHT,
    _RE_TIP_CODEX,
    _SHELL_CONTINUATION_RE,
    _SHELL_PROMPT_RE,
    _SPINNER_ICONS,
    IDLE_CONFIRM_COUNT,
    _activity_state,
    _agent_pane_target,
    _all_pane_pids_by_session,
    _codex_is_down_recoverably,
    _codex_launch_was_attempted,
    _detect_activity_raw,
    _detect_interactive_prompt,
    _find_session,
    _is_pane_residue,
    _looks_like_bare_shell,
    _looks_like_codex_start_failure,
    _looks_like_crash,
    _looks_like_fresh_claude_session,
    _looks_like_stuck_shell,
    _pane_is_dead,
    _pane_is_recoverable_shell,
    _pane_stability,
    _pane_text,
    _process_tree_snapshot,
    _session_is_codex,
    _shell_has_pending_input,
    _visible_pane_hash,
    async_detect_activity,
    capture_pane_full,
    capture_pane_recent,
    detect_activity,
    get_pane_position,
    get_pane_width,
    get_session_cwd,
    get_tmux_sessions,
)
from services.usage import (  # noqa: E402
    PROMPT_AUDIT_FILE,
    _advisor_admin_token,
    _check_token,
    _codex_turn_cost,
    _decode_id_token,
    _estimate_cost,
    _fetch_api_usage_sync,
    _find_session_jsonl_files,
    _iter_jsonl_reverse,
    _load_longlived_token,
    _make_token,
    _parse_session_stats,
    _parse_usage_file,
    _pct_status,
    _prompt_audit_lock,
    _prompt_audit_summary,
    _prompt_audit_summary_cache,
    _prompt_counts_by_user,
    _rollout_lifetime_cache,
    _rollout_lifetime_usage,
    _session_stats_cache,
    _subscription_token_valid,
    _token_usage_for_home,
    _usage_by_account,
    _usage_err,
    _usage_na,
    _user_lifetime_stats,
)
from services.watchdog import (  # noqa: E402
    _CODEX_HEALTH_COOLDOWN,
    _CODEX_HEALTH_INTERVAL,
    _LOGIN_FLOW_STALE_AFTER,
    _LOGIN_NEEDED_RE,
    _LOGIN_WATCHDOG_COOLDOWN,
    _LOGIN_WATCHDOG_INTERVAL,
    _MAX_NUDGES_BEFORE_RESTART,
    _NUDGE_COOLDOWN,
    _NUDGE_PROMPT,
    _SIMPLE_WATCHDOG_COOLDOWN,
    _SIMPLE_WATCHDOG_IDLE_SECS,
    _SIMPLE_WATCHDOG_INTERVAL,
    _SIMPLE_WATCHDOG_MAX_LOG,
    _SIMPLE_WATCHDOG_MAX_SAME_STALL,
    _SIMPLE_WATCHDOG_SYSTEM_PROMPT,
    _STALL_THRESHOLD,
    _TMP_WATCHDOG_CRITICAL_PCT,
    _TMP_WATCHDOG_INTERVAL,
    _TMP_WATCHDOG_PROTECTED_PREFIXES,
    _TMP_WATCHDOG_SAFE_AGE_CRITICAL,
    _TMP_WATCHDOG_SAFE_AGE_NORMAL,
    _TMP_WATCHDOG_WARN_PCT,
    _WATCHDOG_INTERVAL,
    _WATCHDOG_SAFE_CONTINUE,
    SIMPLE_WATCHDOG_DISABLED_FILE,
    _codex_health_state,
    _codex_health_watchdog_loop,
    _crash_recovery_state,
    _load_simple_watchdog_disabled,
    _login_watchdog_loop,
    _login_watchdog_state,
    _save_simple_watchdog_disabled,
    _seen_claude_running,
    _simple_watchdog_disabled,
    _simple_watchdog_log,
    _simple_watchdog_loop,
    _simple_watchdog_record,
    _simple_watchdog_send_continue,
    _simple_watchdog_send_text,
    _simple_watchdog_state,
    _tmp_watchdog_check,
    _tmp_watchdog_loop,
    _tmp_watchdog_prune,
    _tmp_watchdog_size,
    _watchdog_check_session,
    _watchdog_loop,
    _watchdog_restart_mode,
    _watchdog_snapshots,
)

if PROCESS_ROLE not in {"combined", "api", "controller"}:
    PROCESS_ROLE = "combined"
_CODEX_REASONING_EFFORTS = ("none", "low", "medium", "high", "xhigh", "max")
_CODEX_REASONING_EFFORT_ALIASES = {
    "ultra": "max",
    "extra-high": "xhigh",
    "extra_high": "xhigh",
}
_CODEX_DEFAULT_REASONING_EFFORT = os.environ.get(
    "TMUX_DASH_DEFAULT_REASONING_EFFORT",
    os.environ.get("CODEX_DEFAULT_REASONING_EFFORT", "max"),
).strip().lower()
_CODEX_DEFAULT_REASONING_EFFORT = _CODEX_REASONING_EFFORT_ALIASES.get(
    _CODEX_DEFAULT_REASONING_EFFORT,
    _CODEX_DEFAULT_REASONING_EFFORT,
)
if _CODEX_DEFAULT_REASONING_EFFORT not in _CODEX_REASONING_EFFORTS:
    _CODEX_DEFAULT_REASONING_EFFORT = "max"


# Compatibility name retained for the newer Grabo frontend and API payloads.
DEFAULT_MODEL = _CODEX_DEFAULT_MODEL
_SEED_MODEL_CATALOG = [
    ["gpt-5.6-sol", "GPT-5.6 Sol"],
    ["gpt-5.6", "GPT-5.6 (Sol alias)"],
    ["gpt-5.6-terra", "GPT-5.6 Terra"],
    ["gpt-5.6-luna", "GPT-5.6 Luna"],
    ["gpt-5.5", "GPT-5.5"],
    ["gpt-5.4", "GPT-5.4"],
]


def _load_model_catalog() -> list:
    try:
        data = json.loads(MODELS_FILE.read_text())
        rows = data.get("models") if isinstance(data, dict) else data
        rows = [list(row) for row in (rows or [])
                if isinstance(row, (list, tuple)) and len(row) == 2]
        if rows:
            return rows
    except Exception:
        logger.debug("No usable Codex model catalog at %s", MODELS_FILE, exc_info=True)
    return [list(row) for row in _SEED_MODEL_CATALOG]


def _save_model_catalog(catalog: list, last_check: float = 0.0):
    try:
        MODELS_FILE.parent.mkdir(parents=True, exist_ok=True)
        MODELS_FILE.write_text(json.dumps({"models": catalog, "last_check": last_check}, indent=2))
    except Exception:
        logger.debug("Failed to save %s", MODELS_FILE, exc_info=True)


def _fetch_codex_model_catalog() -> list:
    """Read the model catalog bundled with the installed Codex CLI."""
    result = subprocess.run(
        ["codex", "debug", "models", "--bundled"],
        capture_output=True,
        text=True,
        timeout=20,
    )
    if result.returncode != 0:
        return []
    data = json.loads(result.stdout or "{}")
    rows = []
    for model in data.get("models", []):
        if not isinstance(model, dict) or model.get("visibility") == "hide":
            continue
        slug = str(model.get("slug") or "").strip()
        if not slug:
            continue
        label = str(model.get("display_name") or slug).strip()
        rows.append([slug, label])
    return rows


MODEL_CATALOG = _load_model_catalog()
ALLOWED_SESSION_MODELS = [row[0] for row in MODEL_CATALOG]
if DEFAULT_MODEL not in ALLOWED_SESSION_MODELS:
    MODEL_CATALOG.insert(0, [DEFAULT_MODEL, DEFAULT_MODEL])
    ALLOWED_SESSION_MODELS.insert(0, DEFAULT_MODEL)

MODEL_CHECK_INTERVAL = 24 * 3600




async def _refresh_model_catalog(force: bool = False) -> bool:
    global MODEL_CATALOG, ALLOWED_SESSION_MODELS
    try:
        last_check = 0.0
        try:
            last_check = float(json.loads(MODELS_FILE.read_text()).get("last_check", 0))
        except Exception:
            pass
        now = time.time()
        if not force and now - last_check < MODEL_CHECK_INTERVAL:
            return False
        detected = await asyncio.to_thread(_fetch_codex_model_catalog)
        if not detected:
            return False
        seen = set()
        merged = []
        for row in detected + _SEED_MODEL_CATALOG:
            if row[0] not in seen:
                seen.add(row[0])
                merged.append(list(row))
        changed = merged != MODEL_CATALOG
        MODEL_CATALOG = merged
        ALLOWED_SESSION_MODELS = [row[0] for row in MODEL_CATALOG]
        _save_model_catalog(MODEL_CATALOG, now)
        return changed
    except Exception:
        logger.debug("Codex model catalog refresh failed", exc_info=True)
        return False


async def _model_refresh_loop():
    await asyncio.sleep(20)
    while True:
        try:
            await _refresh_model_catalog()
        except Exception:
            logger.debug("Codex model refresh loop failed", exc_info=True)
        await asyncio.sleep(3600)
























CLAUDE_MODEL_ALIASES = ("fable", "opus", "sonnet")








def _set_session_claude_setting(session_name: str, key: str, value: str) -> None:
    def mutate(agents: dict):
        row = agents.get(str(session_name))
        if not isinstance(row, dict):
            row = {"agent": str(row or "codex")}
        row[key] = str(value)
        agents[str(session_name)] = row

    _session_agents_store().update(mutate)


def _clear_session_agent(session_name: str) -> None:
    def mutate(agents: dict):
        agents.pop(str(session_name), None)

    _session_agents_store().update(mutate)










# Compatibility aliases used by newer Grabo paths while the implementation is Codex.
def _launch_claude_cmd(
    cmd: str, pin_model: bool = True, codex_home: Path | None = None
) -> str:
    return _launch_codex_cmd(cmd, pin_model=pin_model, codex_home=codex_home)


def _restore_default_model_setting():
    """Keep the default Codex config aligned with the dashboard selection."""
    try:
        CODEX_HOME.mkdir(parents=True, exist_ok=True)
        cfg = CODEX_HOME / "config.toml"
        existing = cfg.read_text() if cfg.exists() else ""
        managed = {
            "model": DEFAULT_MODEL,
            "model_reasoning_effort": _CODEX_DEFAULT_REASONING_EFFORT,
            "sandbox_mode": "danger-full-access",
            "approval_policy": "never",
        }
        merged = _merge_top_level_toml_keys(existing, managed)
        merged = _ensure_codex_project_trust(merged, os.getcwd())
        if merged != existing:
            _backup_before_dashboard_write(cfg)
            cfg.write_text(merged)
    except Exception:
        logger.debug("Failed to align default Codex config", exc_info=True)


def _model_flag_for_relaunch(session_name: str) -> str:
    try:
        model = _get_session_model(session_name) or DEFAULT_MODEL
    except Exception:
        model = DEFAULT_MODEL
    return f" --model {shlex.quote(model)}" if model else ""


client = openai.AsyncOpenAI(api_key=OPENAI_API_KEY) if OPENAI_API_KEY else None

SAVED_INFO_PROMPT_VERSION = "v4"

CONTROLLER_SNAPSHOT_FILE = MESSAGES_DIR / "controller-runtime.json"
# Session lifecycle rides on the shared store so a session's working directory
# survives a tmux server death -- the metadata is what makes a session
# restorable, and a host-local JSON file is lost to exactly the teardown that
# kills the sessions in the first place.
_session_lifecycle = SessionLifecycleStore(
    SESSION_LIFECYCLE_FILE,
    store=_shared_store(
        "session_lifecycle",
        SESSION_LIFECYCLE_FILE,
        lambda: {"version": 1, "sessions": {}},
    ),
)
_controller_snapshot = LockedJsonStore(
    CONTROLLER_SNAPSHOT_FILE, lambda: {"version": 1}
)
OPENAI_KEY_FILE = MESSAGES_DIR / "openai_api_key"
_stored_openai_key: str = ""




def _load_openai_key() -> str:
    global _stored_openai_key
    try:
        if OPENAI_KEY_FILE.exists():
            _stored_openai_key = OPENAI_KEY_FILE.read_text().strip()
    except Exception:
        logger.debug("Failed to load OpenAI API key", exc_info=True)
    return _stored_openai_key


def _write_codex_api_auth(codex_home: Path, key: str):
    """Write file-backed Codex API authentication without logging the secret."""
    if not key:
        return
    codex_home.mkdir(parents=True, exist_ok=True)
    auth_path = codex_home / "auth.json"
    if auth_path.exists():
        _backup_before_dashboard_write(auth_path)
    auth_path.write_text(json.dumps({"auth_mode": "apikey", "OPENAI_API_KEY": key}, indent=2))
    auth_path.chmod(0o600)


def _save_openai_key(key: str):
    global _stored_openai_key
    _stored_openai_key = key
    try:
        MESSAGES_DIR.mkdir(parents=True, exist_ok=True)
        OPENAI_KEY_FILE.write_text(key)
        OPENAI_KEY_FILE.chmod(0o600)
        _write_codex_api_auth(CODEX_HOME, key)
    except Exception:
        logger.debug("Failed to save OpenAI API key", exc_info=True)


def _clear_openai_key():
    global _stored_openai_key
    _stored_openai_key = ""
    try:
        if OPENAI_KEY_FILE.exists():
            OPENAI_KEY_FILE.unlink()
    except Exception:
        logger.debug("Failed to clear OpenAI API key", exc_info=True)


_load_openai_key()


def _active_openai_key() -> str:
    return _stored_openai_key or OPENAI_API_KEY


def _codex_launch_env_prefix() -> str:
    return ""


# Compatibility aliases for inactive legacy team/browser paths. They point at
# the Codex key store and never expose a key in logs or API responses.
ANTHROPIC_API_KEY_FILE = OPENAI_KEY_FILE
_stored_anthropic_key = _stored_openai_key
_save_anthropic_key = _save_openai_key
_clear_anthropic_key = _clear_openai_key


def _claude_launch_env_prefix() -> str:
    return _codex_launch_env_prefix()

# Track auth mode per session: "subscription" or "api"
_session_auth_mode: dict[str, str] = {}


def _codex_home_auth_mode(codex_home: Path) -> str:
    """Return the UI auth label for the credential Codex will actually read."""
    try:
        creds = json.loads((codex_home / "auth.json").read_text())
        mode = creds.get("auth_mode")
        tokens = creds.get("tokens")
        if (
            mode == "chatgpt"
            and isinstance(tokens, dict)
            and tokens.get("access_token")
            and tokens.get("refresh_token")
        ):
            return "subscription"
        if mode == "apikey" and creds.get("OPENAI_API_KEY"):
            return "api"
    except Exception:
        pass
    return "unconfigured"


def _session_real_auth_mode(session_name: str) -> str:
    """Resolve live per-session auth instead of trusting the process-local cache."""
    try:
        resolved = _codex_home_auth_mode(_session_config_base(session_name))
        if resolved != "unconfigured":
            return resolved
    except Exception:
        logger.debug("Failed to resolve auth mode for '%s'", session_name, exc_info=True)
    return _session_auth_mode.get(session_name, "unconfigured")

# Per-session structure when active:
# {
#   "enabled": bool,
#   "phase": int (1-5),
#   "phase_name": str,
#   "step": int,
#   "step_name": str,
#   "started_at": float,
#   "log": [{"ts": float, "phase": int, "step": int, "action": str}],
#   "report": str,
#   "task": asyncio.Task | None,
# }


# Flag to prevent CancelledError handlers from wiping persisted state during shutdown.
# When True, worker cancel handlers skip setting enabled=False and re-saving to disk.
_shutting_down = False

# --- Persistent autonomous mode state ---
# Survives restarts: stores which sessions had away/go-nuts mode enabled.
AUTONOMOUS_STATE_FILE = MESSAGES_DIR / "autonomous-modes.json"

def _save_autonomous_state():
    """Persist which sessions have away/go-nuts mode enabled to disk."""
    try:
        MESSAGES_DIR.mkdir(parents=True, exist_ok=True)
        state = {}
        for name, s in _away_mode_state.items():
            if s.get("enabled"):
                state.setdefault(name, {})["away_mode"] = True
        for name, s in _go_nuts_state.items():
            if s.get("enabled"):
                state.setdefault(name, {})["go_nuts_mode"] = True
        AUTONOMOUS_STATE_FILE.write_text(json.dumps(state))
    except Exception:
        logger.debug("Failed to save autonomous mode state", exc_info=True)

def _load_autonomous_state() -> dict[str, dict]:
    """Load persisted autonomous mode state from disk."""
    try:
        if AUTONOMOUS_STATE_FILE.exists():
            return json.loads(AUTONOMOUS_STATE_FILE.read_text())
    except Exception:
        logger.debug("Failed to load autonomous mode state", exc_info=True)
    return {}
















def _is_codex_running(session_name: str) -> bool:
    """Return True only when the tmux pane has a live Codex descendant."""
    try:
        result = subprocess.run(
            ["tmux", "display-message", "-t", session_name, "-p", "#{pane_pid}"],
            capture_output=True, text=True, timeout=5
        )
        if result.returncode != 0:
            return False
        pane_pid = (result.stdout or "").strip()
        if not pane_pid.isdigit():
            return False
        children, commands = _process_tree_snapshot()
        pending = [pane_pid]
        seen: set[str] = set()
        while pending and len(seen) < 10000:
            current = pending.pop()
            if current in seen:
                continue
            seen.add(current)
            # Match any supported agent, not just "codex": a Claude pane was
            # reported as idle, so restart logic typed a launch command straight
            # into the live agent's prompt instead of a shell.
            if commands.get(current) in _AGENT_PROCESS_NAMES:
                return True
            pending.extend(children.get(current, ()))
        return False
    except Exception:
        return False


async def _async_is_codex_running(session_name: str) -> bool:
    """Non-blocking version of _is_codex_running."""
    return await asyncio.to_thread(_is_codex_running, session_name)


async def _ensure_codex_running(session_name: str, log_fn=None, state: dict = None,
                                resume_uuid: str = None) -> bool:
    """Restart a crashed Codex pane and resume its most recent local thread."""
    alog = logging.getLogger("autonomous")
    if await _async_is_codex_running(session_name):
        return True

    msg = f"Codex not running in '{session_name}' — restarting it"
    alog.warning(msg)
    if log_fn and state:
        log_fn(state, msg)

    try:
        # Re-export the owner's CODEX_HOME before launching in case the shell
        # was respawned (environment variables do not survive a fresh bash).
        try:
            if not await asyncio.to_thread(
                _send_session_owner_environment,
                session_name,
            ):
                raise RuntimeError("could not restore the session owner environment")
            await asyncio.sleep(0.2)
        except Exception:
            logger.debug("Failed to re-export owner env on auto-restart", exc_info=True)
        # Re-apply clean member auth before relaunch so an accidental /login (which
        # writes stray creds that 401 against the shared key) self-heals on the next
        # start. Picks the right mode: subscription plan if live, else API key.
        try:
            if _multi_tenant_enabled():
                _owner = _find_user_by_id(_load_session_owners().get(session_name, "admin"))
                if _owner and not _is_admin(_owner):
                    _apply_member_auth(_user_codex_config_dir(_owner))
        except Exception:
            logger.debug("Failed to re-apply member auth on relaunch", exc_info=True)
        try:
            await asyncio.to_thread(
                _ensure_codex_auth_with_fallback,
                _session_config_base(session_name),
                True,
            )
        except Exception:
            logger.debug("Failed to validate Codex auth before relaunch", exc_info=True)
        # Codex stores local threads under CODEX_HOME. Resume the newest thread
        # for this working directory instead of opening the interactive picker.
        launch_base = _session_launch_base(session_name)
        launch = _session_launch_command(
            session_name, launch_base, pin_model=True, resume=True
        )
        # C-c first: an unterminated paste leaves bash on a `>` continuation
        # prompt, where C-u only clears the current line and the relaunch would
        # be swallowed as more of the same command. C-u then discards any stray
        # text left on the prompt line (e.g. a "continue" a watchdog typed
        # before this loop took over).
        await asyncio.to_thread(subprocess.run,
            ["tmux", "send-keys", "-t", session_name, "C-c"],
            capture_output=True, text=True, timeout=5)
        await asyncio.sleep(0.2)
        await asyncio.to_thread(subprocess.run,
            ["tmux", "send-keys", "-t", session_name, "C-u"],
            capture_output=True, text=True, timeout=5)
        await asyncio.to_thread(subprocess.run,
            ["tmux", "send-keys", "-t", session_name, "-l", launch],
            capture_output=True, text=True, timeout=5)
        await asyncio.to_thread(subprocess.run,
            ["tmux", "send-keys", "-t", session_name, "Enter"],
            capture_output=True, text=True, timeout=5)

        # Wait for codex to start (up to 30s)
        for _ in range(15):
            await asyncio.sleep(2)
            if await _async_is_codex_running(session_name):
                alog.info(f"Codex restarted successfully in '{session_name}'")
                if log_fn and state:
                    log_fn(state, "Codex restarted successfully")
                # Give it a moment to fully initialize
                await asyncio.sleep(5)
                return True

        alog.error(f"Failed to restart Codex in '{session_name}' after 30s")
        if log_fn and state:
            log_fn(state, "Failed to restart Codex after 30s")
        return False
    except Exception as e:
        alog.error(f"Error restarting Codex in '{session_name}': {e}")
        return False


# Backwards-compatible internal names used by newer Grabo browser/recovery code.
_is_claude_running = _is_codex_running
_async_is_claude_running = _async_is_codex_running
_ensure_claude_running = _ensure_codex_running


_background_tasks: list = []


@asynccontextmanager
async def lifespan(_app: FastAPI):
    """Start watchdogs only in the controller; API workers stay stateless."""
    global _shutting_down
    _shutting_down = False
    loop = asyncio.get_running_loop()
    loop.set_default_executor(ThreadPoolExecutor(max_workers=8 if PROCESS_ROLE == "api" else 20))
    logger.info("Codex Dashboard starting — role=%s port=%s root_path=%s auth=%s openai=%s",
                PROCESS_ROLE, PORT, ROOT_PATH,
                "enabled" if AUTH_PASS else "disabled",
                "configured" if OPENAI_API_KEY else "missing")
    if not AUTH_PASS:
        logger.warning("TMUX_DASH_PASS is not set — authentication is DISABLED. "
                       "Set TMUX_DASH_PASS to enable auth.")
    if not OPENAI_API_KEY:
        logger.warning("OPENAI_API_KEY is not set — LLM summaries will not work.")
    if not os.environ.get("TMUX_DASH_SECRET"):
        logger.warning("TMUX_DASH_SECRET is not set — auth tokens will be invalidated on restart. "
                       "Set a persistent secret for stable sessions.")
    _load_simple_watchdog_disabled()
    _load_autopush_mode()
    _restore_default_model_setting()

    if PROCESS_ROLE == "api":
        # All mutation/watchdog ownership lives across the Unix socket in the
        # controller. API workers only serve HTTP and relay streams.
        yield
        return

    if _multi_tenant_enabled():
        try:
            _setup_shared_git_config()
            logger.info("Team mode: shared git config applied")
        except Exception:
            logger.debug("shared git config setup failed", exc_info=True)
    users = _load_users()
    synced_browser_mcp = 0
    for member in users:
        if not member:
            continue
        config_dir = _user_codex_config_dir(member)
        if _multi_tenant_enabled() and not _is_admin(member):
            # Self-heal the full tenant config on startup, including global and
            # group instructions. Previously only the browser MCP was repaired,
            # so a host that accidentally omitted TEAM_MODE never received the
            # admin's shared policy until that user was edited or recreated.
            _ensure_user_codex_config_dir(member)
        elif _multi_tenant_enabled() and _is_admin(member):
            # Admins do not receive the member developer-instruction block. Keep
            # their managed project handoff rule current on every controller
            # start, not only when they create a brand-new tmux session.
            _sync_projects_note_into(config_dir / "AGENTS.md")
        _ensure_user_browser_session(member, start=False)
        if (config_dir / "config.toml").exists():
            synced_browser_mcp += int(_ensure_browser_mcp(config_dir, member))
    logger.info("Playwright lease proxy synced to %d Codex homes", synced_browser_mcp)
    try:
        migrated_prompts = _backfill_prompt_audit(users)
        if migrated_prompts:
            logger.info("Backfilled %d human prompts into the account audit", migrated_prompts)
    except Exception:
        logger.exception("Failed to backfill the account prompt audit")
    sessions = get_tmux_sessions()
    logger.info("Found %d existing tmux sessions", len(sessions))
    _background_tasks.clear()
    await _start_controller_socket()

    async def sync_advisor_accounts() -> None:
        if not _advisor_live_sync_enabled():
            return
        try:
            await asyncio.to_thread(_sync_permission_groups_with_advisor)
            for account in users:
                await asyncio.to_thread(
                    _sync_advisor_user,
                    account,
                    provision=False,
                )
            logger.info("Advisor permission groups and %d accounts synced", len(users))
        except Exception:
            logger.exception("Advisor account/group startup sync failed")

    controller_loops = (
        ("auto-responder", _auto_responder_loop()),
        ("autonomous watchdog", _watchdog_loop()),
        ("simple watchdog", _simple_watchdog_loop()),
        ("tmp watchdog", _tmp_watchdog_loop()),
        ("crash recovery", _crash_recovery_loop()),
        ("codex health watchdog", _codex_health_watchdog_loop()),
        ("model refresh", _model_refresh_loop()),
        ("browser lifecycle", _browser_lifecycle_loop()),
        ("session lifecycle", _session_lifecycle_loop()),
        ("controller snapshot", _controller_snapshot_loop()),
        ("advisor account sync", sync_advisor_accounts()),
    )
    for label, coroutine in controller_loops:
        _background_tasks.append(asyncio.create_task(coroutine))
        logger.info("%s started", label)

    # Restore persistent autonomous mode state from disk
    saved = _load_autonomous_state()
    if saved:
        session_names = {s["name"] for s in sessions}
        for name, modes in saved.items():
            if name not in session_names:
                logger.info("Skipping autonomous restore for '%s' — session no longer exists", name)
                continue
            if modes.get("away_mode"):
                logger.info("Restoring Away Mode for '%s' (was active before restart)", name)
                state = {
                    "enabled": True, "phase": 4, "phase_name": "Continuous (restored)",
                    "step": 0, "step_name": "Restored after restart",
                    "started_at": time.time(), "log": [], "report": "", "task": None,
                }
                _away_mode_state[name] = state
                _away_log(state, "Away mode restored after server restart")
                t = asyncio.create_task(_restore_autonomous_mode(name, state, "away"))
                state["task"] = t
            elif modes.get("go_nuts_mode"):
                logger.info("Restoring Go Nuts Mode for '%s' (was active before restart)", name)
                state = {
                    "enabled": True, "phase": 4, "phase_name": "Continuous Build (restored)",
                    "step": 0, "step_name": "Restored after restart",
                    "started_at": time.time(), "log": [], "report": "", "task": None,
                }
                _go_nuts_state[name] = state
                _go_nuts_log(state, "Go Nuts mode restored after server restart")
                t = asyncio.create_task(_restore_autonomous_mode(name, state, "gonuts"))
                state["task"] = t

    # Clean up orphaned entries (sessions that no longer exist were skipped above
    # but file still has their old state). Re-save now based on in-memory dicts only.
    _save_autonomous_state()

    yield  # Application is running

    _shutting_down = True  # Prevent CancelledError handlers from wiping persisted state
    logger.info("Controller shutting down — cancelling %d background tasks", len(_background_tasks))
    # Save autonomous mode state BEFORE cancelling tasks (so enabled=True is preserved)
    _save_autonomous_state()
    logger.info("Autonomous mode state saved to disk for restore on next startup")
    for t in _background_tasks:
        if not t.done():
            t.cancel()
    # Cancel any running away-mode workers
    for name, state in _away_mode_state.items():
        if state.get("task") and not state["task"].done():
            state["task"].cancel()
            logger.info("Cancelled away-mode worker for '%s'", name)
    # Cancel any running go-nuts-mode workers
    for name, state in _go_nuts_state.items():
        if state.get("task") and not state["task"].done():
            state["task"].cancel()
            logger.info("Cancelled go-nuts-mode worker for '%s'", name)
    await _stop_controller_socket()
    try:
        _cancel_codex_chatgpt_login()
    except Exception:
        logger.debug("Failed to stop pending Codex login during shutdown", exc_info=True)
    logger.info("Shutdown complete")


app = FastAPI(root_path=ROOT_PATH, lifespan=lifespan)

IDE_BUNDLE_ENTRY = IDE_BUNDLE_DIR / "ide.js"
if IDE_BUNDLE_DIR.is_dir():
    app.mount("/static/ide", StaticFiles(directory=str(IDE_BUNDLE_DIR)), name="ide-bundle")


@app.exception_handler(RequestValidationError)
async def request_validation_error_handler(_request: Request, exc: RequestValidationError):
    """Keep API validation errors compatible with the dashboard's JS client.

    Do not serialize Pydantic's full error structure here: it can include the
    submitted value, which is especially undesirable on credential routes.
    """
    errors = exc.errors()
    message = errors[0].get("msg", "Invalid request") if errors else "Invalid request"
    return JSONResponse({"error": message}, status_code=422)

AUTH_SECRET = os.environ.get("TMUX_DASH_SECRET", secrets.token_hex(32))












def _new_user_id() -> str:
    return "u_" + secrets.token_hex(8)








def _find_user_by_username(username: str) -> dict | None:
    for u in _load_users():
        if u.get("username") == username:
            return u
    return None


def _verify_password(user: dict, password: str) -> bool:
    salt = user.get("password_salt", "")
    expected = user.get("password_hash", "")
    candidate = _hash_password(password, salt)
    return bool(expected) and hmac.compare_digest(candidate, expected)









def _multi_tenant_enabled() -> bool:
    """Enable tenant behavior whenever real member accounts exist.

    Older deployments relied only on ``TMUX_DASH_TEAM_MODE``. That made a
    multi-user users.json silently run with the single-user security/UI policy
    when the environment flag was omitted. The explicit flag remains useful
    for provisioning a fresh team host, while persisted non-admin accounts are
    now sufficient to keep tenant isolation enabled after every restart.
    """
    if TEAM_MODE:
        return True
    try:
        return any(not _is_admin(user) for user in _load_users())
    except Exception:
        return False


# Initialize the users store on import so the admin always exists.
try:
    _load_users()
except Exception:
    logger.exception("Failed to initialize users.json")


# --- Per-user data dirs ---
# Admin keeps the legacy ~/.tmux-dashboard/ root for backwards compatibility
# with existing messages.json / notes.json / uploads/ on disk. Non-admin users
# are isolated under ~/.tmux-dashboard/users/<user_id>/.
def _user_data_dir(user: dict | None) -> Path:
    if not user or user.get("id") == "admin":
        return MESSAGES_DIR
    d = MESSAGES_DIR / "users" / user["id"]
    d.mkdir(parents=True, exist_ok=True)
    return d






def _user_uploads_dir(user: dict | None) -> Path:
    return _user_data_dir(user) / "uploads"


def _user_autonomous_file(user: dict | None) -> Path:
    return _user_data_dir(user) / "autonomous-modes.json"


def _user_codex_config_dir(user: dict | None) -> Path:
    """Where Codex reads AGENTS.md / MEMORY.md / config.toml / skills/
    / projects/ / memory/ for this user. Admin uses the standard ~/.codex root;
    non-admin users get a fully isolated directory.
    """
    if not user or user.get("id") == "admin":
        return Path.home() / ".codex"
    return Path.home() / f".codex-user-{user['id']}"


# Wire core/users.py now that both of its injected dependencies exist. It is
# deliberately not importing them: AUTH_SECRET must keep one definition, and
# importing _user_codex_config_dir from app would make core depend on the
# application it is being extracted from.
core_users.configure(user_codex_config_dir=_user_codex_config_dir)
core_users.configure_secret(AUTH_SECRET)
# Resolve through this module's attribute rather than the imported function, so
# tests that patch `app._load_users` still steer user lookups made inside
# core/users.py. Binding the function object directly would freeze the pre-patch
# version and silently read the real users file.
core_users.configure_users_provider(lambda: globals()["_load_users"]())














def _existing_playwright_block(config_text: str) -> str:
    """The playwright-browser MCP block already in a member's config.toml.

    Returned WITH its `# BEGIN/# END GRABO PLAYWRIGHT MCP` markers when they are
    present: a marker-less table sends _ensure_browser_mcp down its migration
    branch, which strips forward to the next TOML table and takes the following
    block's BEGIN comment with it.
    """
    begin = "# BEGIN GRABO PLAYWRIGHT MCP (managed)"
    end = "# END GRABO PLAYWRIGHT MCP"
    if begin in config_text and end in config_text:
        head = config_text.split(begin, 1)[1]
        if end in head:
            return begin + head.split(end, 1)[0] + end + "\n"
    marker = "[mcp_servers.playwright-browser]"
    if marker not in config_text:
        return ""
    tail = config_text.split(marker, 1)[1]
    out = [marker]
    seen_content = False
    for line in tail.splitlines():
        if not line.strip() and not seen_content:
            continue          # padding between the marker and the first key
        seen_content = True
        stripped = line.strip()
        if stripped.startswith("[") and not stripped.startswith(
            "[mcp_servers.playwright-browser"
        ):
            break
        if stripped.startswith("# BEGIN ") or stripped.startswith("# END "):
            break
        out.append(line)
    # Wrap it so the next startup recognises it as managed instead of migrating it.
    return begin + "\n" + "\n".join(out).rstrip() + "\n" + end + "\n"




def _strip_managed_block(text: str, marker: str) -> str:
    """Remove a `# BEGIN <marker> ... # END <marker>` section we no longer write.

    Members keep a long-lived config.toml, so retiring a managed block has to
    delete what an earlier build already wrote, not merely stop appending it.
    """
    pattern = re.compile(
        r"\n*# BEGIN " + re.escape(marker) + r".*?# END " + re.escape(marker) + r"[^\n]*\n?",
        re.S,
    )
    return pattern.sub("\n", text)






def _ensure_user_codex_config_dir(user: dict):
    """Create + seed a fresh Codex config dir for a non-admin user."""
    if not user or user.get("id") == "admin":
        return
    d = _user_codex_config_dir(user)
    d.mkdir(parents=True, exist_ok=True)
    for sub in ("skills", "projects", "memories", "agents", "commands"):
        (d / sub).mkdir(parents=True, exist_ok=True)
    try:
        (d / "memory").rmdir()
    except OSError:
        pass
    # Seed minimal files so Codex has something to read.
    codex_md = d / "AGENTS.md"
    if not codex_md.exists():
        codex_md.write_text(
            f"# {user.get('username', user['id'])}'s AGENTS.md\n"
            "Personal notes and project context for this user.\n"
        )
    memory_md = d / "MEMORY.md"
    if not memory_md.exists():
        memory_md.write_text(
            "# Account notes\n\n"
            "Optional dashboard notes; Codex does not load this file automatically.\n"
        )
    config_toml = d / "config.toml"
    existing_config = config_toml.read_text() if config_toml.exists() else ""
    if existing_config:
        desired_config = existing_config
    else:
        desired_config = (
            f'model = "{_CODEX_DEFAULT_MODEL}"\n'
            f'model_reasoning_effort = "{_CODEX_DEFAULT_REASONING_EFFORT}"\n'
            'approval_policy = "never"\n'
        )
    if desired_config != existing_config:
        _backup_before_dashboard_write(config_toml)
        config_toml.write_text(desired_config)
    key = _active_openai_key()
    if key and not (d / "auth.json").exists():
        try:
            _write_codex_api_auth(d, key)
        except Exception:
            logger.debug("Failed to seed Codex auth for user %s", user.get("id"), exc_info=True)
    # Managed member context is independent of the legacy TEAM_MODE flag:
    # multi-account deployments existed before that flag was introduced.
    # Re-apply on every call so existing and newly provisioned accounts
    # self-heal after a host/context change.
    try:
        _remove_legacy_global_context_from_agents(codex_md)
        _sync_group_context_into(codex_md, "")
        _materialize_member_skills(d)
        _sync_git_rules_into(codex_md)
    except Exception:
        logger.exception(
            "Failed to apply managed context for user %s",
            user.get("id"),
        )
    # TEAM_MODE additionally shares Codex authentication and applies the
    # compatibility guard/model setup used by older team deployments.
    if TEAM_MODE:
        try:
            _apply_member_auth(d)
        except Exception:
            logger.exception("Failed to apply team-mode setup for user %s", user.get("id"))
    try:
        _configure_member_codex_isolation(d, user)
    except Exception:
        logger.exception("Failed to configure Codex for user %s", user.get("id"))
    _set_member_codex_permissions(d)


# Compatibility aliases used throughout the newer Grabo team/admin code.
_user_claude_config_dir = _user_codex_config_dir
_ensure_user_claude_config_dir = _ensure_user_codex_config_dir


# --- Session ownership ---
SESSION_OWNERS_FILE = MESSAGES_DIR / "session_owners.json"


def _load_session_owners() -> dict[str, str]:
    """Read the ownership map fresh under a cross-process shared lock.

    API workers and the controller are separate processes. The old permanent
    in-process cache could therefore keep stale owners indefinitely and its
    read/modify/write updates could overwrite another worker's assignment.
    """
    try:
        data = _shared_store("session_owners", SESSION_OWNERS_FILE, dict).read()
        return {str(k): str(v) for k, v in data.items()}
    except Exception:
        logger.debug("Failed to load session owners", exc_info=True)
    return {}


def _session_owner_id(session_name: str) -> str:
    """Return the owner user_id for a session. Pre-existing sessions with no
    recorded owner default to the admin."""
    owners = _load_session_owners()
    return owners.get(session_name, "admin")


def _set_session_owner(session_name: str, user_id: str):
    def mutate(owners: dict):
        owners[str(session_name)] = str(user_id)

    _shared_store("session_owners", SESSION_OWNERS_FILE, dict).update(mutate)


def _clear_session_owner(session_name: str):
    def mutate(owners: dict):
        owners.pop(str(session_name), None)

    _shared_store("session_owners", SESSION_OWNERS_FILE, dict).update(mutate)


def _user_for_session(session_name: str) -> dict | None:
    """Find the user record that owns this session, falling back to admin."""
    owner_id = _session_owner_id(session_name)
    user = _find_user_by_id(owner_id) or _find_user_by_id("admin")
    return user


def _user_can_access_session(user: dict | None, session_name: str) -> bool:
    """Return whether the effective signed-in account owns this session."""
    if not user:
        return False
    return _session_owner_id(session_name) == user["id"]


# Login page: a static document with the same placeholder substitution as the
# dashboard (applied below), so it lives beside it in templates/.
LOGIN_PAGE = (TEMPLATES_DIR / "login.html").read_text()


_PASSWORD_LOGIN_HTML = """  <div class="field"><label>Username</label><input name="username" autocomplete="username" autofocus></div>
  <div class="field"><label>Password</label><input name="password" type="password" autocomplete="current-password"></div>
  <button class="login-btn" type="submit">Log in</button>"""


def _login_page() -> str:
    """The login page, with the Google button rendered only when configured.

    Resolved per request rather than at import so dropping in
    ~/.tmux-dashboard/google_oauth_client.json takes effect on the next page
    load instead of needing the app restarted.
    """
    if not _google_login_enabled():
        return (
            LOGIN_PAGE.replace("__GOOGLE_BTN__", "")
            .replace("__PASSWORD_LOGIN__", _PASSWORD_LOGIN_HTML)
        )
    domains = ", ".join("@" + d for d in GOOGLE_LOGIN_DOMAINS)
    hint = ("Company accounts only (" + domains + ")") if domains else "Company accounts only"
    return (
        LOGIN_PAGE.replace(
            "__GOOGLE_BTN__",
            _GOOGLE_BTN_HTML.replace("__GOOGLE_HINT__", hint),
        )
        .replace("__PASSWORD_LOGIN__", "")
    )


def _apply_security_headers(request: Request, response: Response) -> Response:
    """Apply the dashboard's response policy, including direct login pages."""
    response.headers["Cache-Control"] = "no-store, no-cache, must-revalidate, max-age=0"
    response.headers["Pragma"] = "no-cache"
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "SAMEORIGIN"
    response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
    response.headers["X-XSS-Protection"] = "1; mode=block"
    response.headers["Permissions-Policy"] = "camera=(), microphone=(self), geolocation=()"
    if (
        request.headers.get("x-forwarded-proto", "").split(",", 1)[0].strip().lower() == "https"
        or request.url.scheme == "https"
    ):
        response.headers["Strict-Transport-Security"] = (
            "max-age=31536000; includeSubDomains"
        )
    # CSP: Monaco is deliberately pinned to a known CDN release.  Its workers are
    # created as blobs, while every API and WebSocket call stays same-origin.
    response.headers["Content-Security-Policy"] = (
        "default-src 'self'; "
        "script-src 'self' 'unsafe-inline' blob: https://cdn.jsdelivr.net; "
        "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; "
        "img-src 'self' data:; "
        "connect-src 'self'; "
        "font-src 'self' data: https://cdn.jsdelivr.net; "
        "worker-src 'self' blob:; "
        "frame-ancestors 'self'"
    )
    return response


@app.middleware("http")
async def security_headers_middleware(request: Request, call_next):
    """Add security headers to all responses and log slow requests."""
    start = time.time()
    response = await call_next(request)
    duration = time.time() - start
    if duration > 2.0:
        logger.warning("Slow request: %s %s took %.1fs", request.method, request.url.path, duration)
    return _apply_security_headers(request, response)


# Regex for /api/sessions/<name>/... and /api/sessions/<name> (DELETE/GET on bare URL).
_SESSION_PATH_RE = re.compile(r"^/api/sessions/([^/]+)(?:/.*)?$")


_ADMIN_ONLY_PREFIXES = (
    "/qa-output",
    "/api/admin",
    "/api/skill-library",
    "/api/context-files",
    "/api/global-context",
    "/api/global-codex",
    "/api/global",
    "/api/all-sessions",
    "/api/stats",
    "/api/login-health",
    "/api/auto-respond-log",
    "/api/browser",
    "/api/auth/status",
    "/api/auth/token",
    "/api/auth/setup",
    "/api/auth/chatgpt",
    "/api/auth/api-key",
    "/api/auth/logout",
    "/api/auth/codex-status",
    "/api/auth/claude-status",
    "/api/auth/usage",
    "/api/usage/limits",
    "/api/models/refresh",
    "/api/ide",
)


@app.middleware("http")
async def session_ownership_middleware(request: Request, call_next):
    """Block per-session API calls when the caller doesn't own the session
    and reject admin-only routes for non-admin users.

    Admin accounts follow the same ownership rule as members. To access a
    member's session, an admin must use "Log in as" so that member becomes the
    effective account. Sessions with no recorded owner default to admin so
    legacy sessions stay with the built-in account.
    """
    if not AUTH_PASS:
        return await call_next(request)
    path = request.url.path
    rp = request.scope.get("root_path", "")
    if rp and path.startswith(rp):
        rel = path[len(rp):] or "/"
    else:
        rel = path
    user = _current_user(request)
    if getattr(request.state, "_invalid_impersonation", False):
        return JSONResponse(
            {"error": "Impersonation session expired or invalid"},
            status_code=401,
        )
    # Admin-only routes (global instructions, account administration, etc.)
    for prefix in _ADMIN_ONLY_PREFIXES:
        if rel == prefix or rel.startswith(prefix + "/"):
            if not _is_admin(user):
                return JSONResponse({"error": "Admin only"}, status_code=403)
            break
    # Only gate paths under /api/sessions/<name>. The list endpoints
    # /api/sessions and /api/sessions-fast are handled at the route level
    # (they filter to the caller's owned sessions).
    if rel in ("/api/sessions", "/api/sessions-fast", "/api/sessions/create"):
        return await call_next(request)
    m = _SESSION_PATH_RE.match(rel)
    if not m:
        return await call_next(request)
    session_name = m.group(1)
    if not _user_can_access_session(user, session_name):
        return JSONResponse({"error": "Session not found"}, status_code=404)
    return await call_next(request)


@app.middleware("http")
async def auth_middleware(request: Request, call_next):
    # Skip auth entirely if no password is configured
    if not AUTH_PASS:
        return await call_next(request)
    path = request.url.path
    # Allow login routes without auth
    rp = request.scope.get("root_path", "")
    if path in ("/login", "/login/", rp + "/login", rp + "/login/"):
        return await call_next(request)
    if path in ("/logout", "/logout/", rp + "/logout", rp + "/logout/"):
        return await call_next(request)
    # SSO verify endpoint for nginx auth_request from sibling knowva.ai apps:
    # it must return its own 200/401 based on the cookie, NOT the login-page
    # fallback (auth_request only treats a real 2xx as authenticated).
    if path.endswith("/api/auth/verify"):
        return await call_next(request)
    # Sandbox guard hook calls this from localhost with no cookie (it checks the
    # client host itself). OAuth callback self-verifies a signed state param and
    # must work even when the cross-site redirect from Google drops the cookie.
    if path.endswith("/api/sandbox/check") or path.endswith("/api/connections/google/callback"):
        return await call_next(request)
    # Google sign-in: both legs run before there is a session cookie.
    if "/auth/google/" in path:
        return await call_next(request)
    token = request.cookies.get(AUTH_COOKIE)
    if not _check_token(token):
        resp = HTMLResponse(_login_page())
        return _apply_security_headers(request, resp)
    # Token signature is valid — also verify the user still exists. If users.json
    # was tampered with or the user got deleted while logged in, fall back to
    # the login screen.
    user = _user_from_token(token)
    if not user:
        resp = HTMLResponse(_login_page())
        resp.delete_cookie(AUTH_COOKIE)
        return _apply_security_headers(request, resp)
    request.state._authenticated_user = user
    request.state._current_user = user
    return await call_next(request)


@app.get("/api/auth/verify")
async def api_auth_verify(request: Request):
    """SSO check for nginx ``auth_request`` from sibling knowva.ai apps.

    Returns 200 when this dashboard's configured auth cookie is valid, else 401 — so a
    single login to this dashboard unlocks the other knowva.ai apps (matcher,
    crypto, zoom, ...) which gate on this endpoint instead of separate logins.

    Accounts carrying ``sso: false`` (Google-provisioned employees) are 401'd
    here on purpose: letting anyone with a company address into the dashboard
    should not also hand them the crypto/sales/matcher apps.
    """
    u = _user_from_token(request.cookies.get(AUTH_COOKIE))
    if u and u.get("sso", True) is not False:
        return JSONResponse({"ok": True})
    return JSONResponse({"ok": False}, status_code=401)


# Simple in-memory login rate limiter: (ip, window_start_minute) -> attempt_count
_login_attempts: dict[str, int] = {}
_LOGIN_MAX_ATTEMPTS = 10  # per IP per minute
_LOGIN_WINDOW = 60        # seconds


def _check_login_rate_limit(ip: str) -> bool:
    """Return True if the IP is allowed to attempt login, False if rate-limited."""
    now = time.time()
    window_key = f"{ip}:{int(now // _LOGIN_WINDOW)}"
    count = _login_attempts.get(window_key, 0)
    if count >= _LOGIN_MAX_ATTEMPTS:
        return False
    _login_attempts[window_key] = count + 1
    # Prune old keys to avoid unbounded growth
    stale = [k for k in list(_login_attempts) if k != window_key and k.split(":")[0] == ip]
    for k in stale:
        del _login_attempts[k]
    return True


@app.post("/login")
async def do_login(request: Request):
    ip = request.client.host if request.client else "unknown"
    if not _check_login_rate_limit(ip):
        logger.warning("Login rate limit exceeded for IP %s", ip)
        return HTMLResponse("Too many login attempts. Please wait a moment.", status_code=429)
    form = await request.form()
    username = form.get("username", "")
    password = form.get("password", "")
    # Where to land after a successful login. Only same-origin relative paths are
    # honoured ("//host" would be an open redirect), and never /login itself.
    nxt = (form.get("next") or "").strip()
    if not (nxt.startswith("/") and not nxt.startswith("//")) or "/login" in nxt.split("?")[0]:
        nxt = request.scope.get("root_path", "") + "/"
    # Legacy env-var path: if the credentials match TMUX_DASH_USER/TMUX_DASH_PASS,
    # accept and treat as the admin user. This keeps the dashboard reachable even
    # if users.json was deleted by hand.
    legacy_ok = (
        AUTH_PASS
        and hmac.compare_digest(username, AUTH_USER)
        and hmac.compare_digest(password, AUTH_PASS)
    )
    user = _find_user_by_username(username)
    if user and _verify_password(user, password):
        target_user = user
    elif legacy_ok:
        # Rebuild the admin user record on the fly if missing/out of sync. Find
        # the admin inside *this* `users` list so the mutation we save below
        # actually lands on the right object (calling _find_user_by_id would
        # return a copy from a separate _load_users()).
        users = _load_users()
        target_user = next((u for u in users if u.get("id") == "admin"), None)
        salt = _new_salt()
        if target_user is None:
            target_user = {
                "id": "admin",
                "username": username,
                "password_hash": _hash_password(password, salt),
                "password_salt": salt,
                "role": "admin",
                "created_at": time.time(),
                "last_login": 0,
            }
            users.append(target_user)
        else:
            # Re-sync username + password hash to whatever the env says (this
            # protects against a stale users.json shipped with an old salt).
            target_user["username"] = username
            target_user["password_salt"] = salt
            target_user["password_hash"] = _hash_password(password, salt)
        _save_users(users)
    else:
        # The login form is served by GET "/" — there is no GET /login route, so
        # redirecting there on a bad password 405s instead of re-showing the form.
        # Any gated path re-serves the form, so bounce back to `next` and keep
        # the deep link across a mistyped password.
        return RedirectResponse(url=nxt + ("&" if "?" in nxt else "?") + "err=1", status_code=303)

    # Update last_login + capture IP / browser for the admin audit view
    ua = (request.headers.get("user-agent", "") or "")[:300]
    fwd = request.headers.get("x-forwarded-for", "")
    real_ip = fwd.split(",")[0].strip() if fwd else ip
    try:
        users = _load_users()
        for u in users:
            if u.get("id") == target_user["id"]:
                u["last_login"] = time.time()
                u["last_login_ip"] = real_ip
                u["last_login_ua"] = ua
                break
        _save_users(users)
    except Exception:
        logger.debug("Failed to update last_login for %s", target_user.get("id"), exc_info=True)

    token = _make_token(target_user["id"])
    resp = RedirectResponse(url=nxt, status_code=303)
    is_https = request.headers.get("x-forwarded-proto") == "https" or request.url.scheme == "https"
    resp.set_cookie(AUTH_COOKIE, token, max_age=86400 * 30, httponly=True, samesite="lax", secure=is_https)
    return resp


@app.api_route("/logout", methods=["GET", "POST"])
async def do_logout(request: Request):
    root = request.scope.get("root_path", "").rstrip("/") + "/"
    resp = RedirectResponse(url=root, status_code=303)
    resp.delete_cookie(AUTH_COOKIE, path="/")
    resp.delete_cookie("tmux_imp_orig", path="/")
    resp.delete_cookie(AUTH_COOKIE + "_google_state", path="/")
    return resp










def _public_base_url(request: Request) -> str:
    """Externally-visible scheme://host for this request.

    TMUX_DASH_PUBLIC_URL wins when set; otherwise trust the proxy headers, since
    nginx terminates TLS and forwards plain HTTP (request.url.scheme would say
    "http" and Google rejects a redirect_uri that doesn't match exactly).
    """
    if PUBLIC_BASE_URL:
        return PUBLIC_BASE_URL.rstrip("/")
    proto = (request.headers.get("x-forwarded-proto", "").split(",")[0].strip()
             or request.url.scheme)
    host = (request.headers.get("x-forwarded-host", "").split(",")[0].strip()
            or request.headers.get("host", "") or request.url.netloc)
    return f"{proto}://{host}"












_sync_admin_google_email()


@app.get("/auth/google/start")
async def google_login_start(request: Request):
    rp = request.scope.get("root_path", "")
    cid, csec = _google_client()
    if not cid or not csec:
        return RedirectResponse(url=rp + "/?gerr=config", status_code=303)
    nxt = (request.query_params.get("next") or "").strip()
    if not (nxt.startswith("/") and not nxt.startswith("//")) or "/login" in nxt.split("?")[0]:
        nxt = rp + "/"
    state = _sign_state(
        f"glogin:{int(time.time())}:{base64.urlsafe_b64encode(nxt.encode()).decode()}"
    )
    params = urllib.parse.urlencode({
        "client_id": cid,
        "redirect_uri": _google_login_redirect_uri(request),
        "response_type": "code",
        "scope": GOOGLE_LOGIN_SCOPES,
        # Always show the picker: these boxes are shared, and a stale Google
        # session would otherwise sign you in as the wrong person silently.
        "prompt": "select_account",
        "state": state,
    })
    return RedirectResponse("https://accounts.google.com/o/oauth2/v2/auth?" + params)


@app.get("/auth/google/callback")
async def google_login_callback(request: Request):
    rp = request.scope.get("root_path", "")
    ip = request.client.host if request.client else "unknown"
    if request.query_params.get("error"):
        return RedirectResponse(url=rp + "/?gerr=denied", status_code=303)
    if not _check_login_rate_limit(ip):
        return HTMLResponse("Too many login attempts. Please wait a moment.", status_code=429)
    code = request.query_params.get("code") or ""
    payload = _verify_state(request.query_params.get("state") or "")
    if not code or not payload or not payload.startswith("glogin:"):
        return RedirectResponse(url=rp + "/?gerr=state", status_code=303)
    try:
        _, ts, nxt_b64 = payload.split(":", 2)
        nxt = base64.urlsafe_b64decode(nxt_b64.encode()).decode()
    except Exception:
        return RedirectResponse(url=rp + "/?gerr=state", status_code=303)
    if time.time() - int(ts) > 600:
        return RedirectResponse(url=rp + "/?gerr=state", status_code=303)
    if not (nxt.startswith("/") and not nxt.startswith("//")):
        nxt = rp + "/"

    cid, csec = _google_client()
    data = urllib.parse.urlencode({
        "code": code, "client_id": cid, "client_secret": csec,
        "redirect_uri": _google_login_redirect_uri(request),
        "grant_type": "authorization_code",
    }).encode()
    try:
        req = urllib.request.Request("https://oauth2.googleapis.com/token", data=data)
        with urllib.request.urlopen(req, timeout=20) as r:
            tok = json.load(r)
        claims = _decode_id_token(tok.get("id_token") or "")
    except Exception:
        logger.exception("Google sign-in token exchange failed")
        return RedirectResponse(url=rp + "/?gerr=failed", status_code=303)

    if claims.get("aud") != cid:
        logger.warning("Google sign-in: id_token audience mismatch")
        return RedirectResponse(url=rp + "/?gerr=failed", status_code=303)
    if claims.get("iss") not in ("accounts.google.com", "https://accounts.google.com"):
        logger.warning("Google sign-in: unexpected issuer %s", claims.get("iss"))
        return RedirectResponse(url=rp + "/?gerr=failed", status_code=303)
    if float(claims.get("exp") or 0) < time.time():
        return RedirectResponse(url=rp + "/?gerr=state", status_code=303)
    email = (claims.get("email") or "").strip().lower()
    if not email or not claims.get("email_verified"):
        return RedirectResponse(url=rp + "/?gerr=domain", status_code=303)

    target_user = _google_login_user(email, claims.get("name") or "")
    if not target_user:
        logger.warning("Google sign-in rejected for %s (not an allowed domain)", email)
        return RedirectResponse(url=rp + "/?gerr=domain", status_code=303)

    ua = (request.headers.get("user-agent", "") or "")[:300]
    fwd = request.headers.get("x-forwarded-for", "")
    real_ip = fwd.split(",")[0].strip() if fwd else ip
    try:
        users = _load_users()
        for u in users:
            if u.get("id") == target_user["id"]:
                u["last_login"] = time.time()
                u["last_login_ip"] = real_ip
                u["last_login_ua"] = ua
                u["last_login_via"] = "google"
                break
        _save_users(users)
    except Exception:
        logger.debug("Failed to update last_login for %s", target_user.get("id"), exc_info=True)

    logger.info("Google sign-in: %s -> user '%s' (%s)",
                email, target_user.get("username"), target_user.get("role"))
    resp = RedirectResponse(url=nxt, status_code=303)
    return _set_auth_cookie(resp, request, _make_token(target_user["id"]))


class CreateUserBody(BaseModel):
    username: str
    password: str
    role: str = "user"
    group: str = ""


class UpdateUserBody(BaseModel):
    password: str | None = None
    role: str | None = None
    username: str | None = None
    group: str | None = None
    google_email: str | None = None
    sso: bool | None = None




def _user_session_count(user_id: str) -> int:
    owners = _load_session_owners()
    return sum(1 for v in owners.values() if v == user_id)


def _last_human_activity(user: dict) -> float:
    """Return the newest timestamp written by this human, never agent output."""
    user_id = str(user.get("id") or "")
    audit_row = _prompt_audit_summary().get(user_id)
    if audit_row is not None:
        # Prompts sent while an admin is impersonating this account remain in
        # its audit trail, but do not make the member appear personally active.
        # Summaries written before impersonation attribution existed only have
        # ``last_ts``; those records were necessarily direct user activity.
        key = "last_direct_ts" if "last_direct_ts" in audit_row else "last_ts"
        return float(audit_row.get(key) or 0)
    latest = 0.0
    for messages in _load_messages(user).values():
        if not isinstance(messages, list):
            continue
        for message in messages:
            if not isinstance(message, dict) or message.get("role") != "user":
                continue
            try:
                latest = max(latest, float(message.get("ts") or 0))
            except (TypeError, ValueError):
                continue
    return latest




@app.get("/api/admin/users")
async def api_admin_list_users(request: Request):
    user = _current_user(request)
    if not _is_admin(user):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    users = _load_users()
    lifetime_stats = await asyncio.to_thread(_user_lifetime_stats, users)
    out = []
    for u in users:
        rec = _public_user(u)
        rec["session_count"] = _user_session_count(u["id"])
        rec["last_activity"] = _last_human_activity(u)
        rec.update(lifetime_stats.get(str(u.get("id") or ""), {}))
        out.append(rec)
    return JSONResponse({"users": out})


@app.post("/api/admin/users")
async def api_admin_create_user(request: Request, body: CreateUserBody):
    user = _current_user(request)
    if not _is_admin(user):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    username = (body.username or "").strip()
    password = body.password or ""
    role = body.role if body.role in ("user", "admin") else "user"
    group_id = (body.group or "").strip()
    if group_id and group_id not in PERMISSION_GROUPS:
        return JSONResponse({"error": "Unknown permission group"}, status_code=400)
    if role == "admin":
        group_id = ""
    if not username:
        return JSONResponse({"error": "Username is required"}, status_code=400)
    if not re.match(r"^[A-Za-z0-9._@-]{2,40}$", username):
        return JSONResponse({"error": "Username must be 2-40 chars (letters, numbers, . _ @ -)"}, status_code=400)
    if len(password) < 6:
        return JSONResponse({"error": "Password must be at least 6 characters"}, status_code=400)
    users = _load_users()
    if any(u.get("username") == username for u in users):
        return JSONResponse({"error": f"Username '{username}' already exists"}, status_code=409)
    salt = _new_salt()
    new_user = {
        "id": _new_user_id(),
        "username": username,
        "password_hash": _hash_password(password, salt),
        "password_salt": salt,
        "role": role,
        "group": group_id,
        "created_at": time.time(),
        "last_login": 0,
    }
    # Seed the user's data + Codex config dirs so they're ready to use.
    try:
        _user_data_dir(new_user)
        _ensure_user_codex_config_dir(new_user)
        if _advisor_live_sync_enabled():
            await asyncio.to_thread(
                _sync_advisor_user,
                new_user,
                provision=not _is_admin(new_user),
            )
            # The advisor MCP block is gated on the token file, which only exists
            # after the call above -- rewrite the config now that it does.
            _ensure_user_codex_config_dir(new_user)
        _ensure_user_browser_session(new_user, start=False)
    except Exception:
        logger.exception("Failed to provision isolated resources for new user %s", new_user["id"])
        return JSONResponse(
            {"error": "Could not provision the user's private account resources"},
            status_code=502,
        )
    users.append(new_user)
    _save_users(users)
    logger.info("Admin '%s' created user '%s' (role=%s)", user["username"], username, role)
    return JSONResponse({"ok": True, "user": _public_user(new_user)})


@app.patch("/api/admin/users/{user_id}")
async def api_admin_update_user(request: Request, user_id: str, body: UpdateUserBody):
    user = _current_user(request)
    if not _is_admin(user):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    users = _load_users()
    target = next((u for u in users if u["id"] == user_id), None)
    if not target:
        return JSONResponse({"error": "User not found"}, status_code=404)
    changed = False
    if body.username is not None:
        new_un = body.username.strip()
        if not re.match(r"^[A-Za-z0-9._@-]{2,40}$", new_un):
            return JSONResponse({"error": "Invalid username"}, status_code=400)
        if any(u.get("username") == new_un and u["id"] != user_id for u in users):
            return JSONResponse({"error": "Username already taken"}, status_code=409)
        target["username"] = new_un
        changed = True
    if body.password is not None:
        if len(body.password) < 6:
            return JSONResponse({"error": "Password must be at least 6 characters"}, status_code=400)
        salt = _new_salt()
        target["password_salt"] = salt
        target["password_hash"] = _hash_password(body.password, salt)
        changed = True
    if body.role is not None:
        if body.role not in ("user", "admin"):
            return JSONResponse({"error": "Role must be 'user' or 'admin'"}, status_code=400)
        # Block demoting the last remaining admin so we don't lock everyone out.
        if target["id"] == "admin" and body.role != "admin":
            return JSONResponse({"error": "The default admin cannot be demoted"}, status_code=400)
        admin_count = sum(1 for u in users if u.get("role") == "admin")
        if target.get("role") == "admin" and body.role != "admin" and admin_count <= 1:
            return JSONResponse({"error": "Cannot demote the only remaining admin"}, status_code=400)
        target["role"] = body.role
        if body.role == "admin":
            target["group"] = ""
        changed = True
    if body.group is not None:
        group_id = body.group.strip()
        if group_id and group_id not in PERMISSION_GROUPS:
            return JSONResponse({"error": "Unknown permission group"}, status_code=400)
        if _is_admin(target) and group_id:
            return JSONResponse(
                {"error": "Administrators do not use a permission group"},
                status_code=400,
            )
        target["group"] = group_id
        changed = True
    if body.google_email is not None:
        gmail = body.google_email.strip().lower()
        if gmail and "@" not in gmail:
            return JSONResponse({"error": "Invalid Google address"}, status_code=400)
        if gmail and any((u.get("google_email") or "").lower() == gmail and u["id"] != user_id
                         for u in users):
            return JSONResponse({"error": "That Google address is already linked to another user"},
                                status_code=409)
        target["google_email"] = gmail
        changed = True
    if body.sso is not None:
        target["sso"] = bool(body.sso)
        changed = True
    if changed:
        try:
            if _advisor_live_sync_enabled():
                await asyncio.to_thread(
                    _sync_advisor_user,
                    target,
                    provision=not _is_admin(target),
                )
        except Exception:
            logger.exception("Failed to sync advisor identity for %s", user_id)
            return JSONResponse(
                {"error": "Could not apply the permission group to the user's private data connection"},
                status_code=502,
            )
        _save_users(users)
        # Re-apply per-user context (incl. the group block) for non-admin users.
        try:
            if not _is_admin(target):
                _ensure_user_codex_config_dir(target)
            _ensure_user_browser_session(target, start=False)
        except Exception:
            logger.debug("Failed to re-apply context after user update", exc_info=True)
    return JSONResponse({"ok": True, "user": _public_user(target)})


@app.delete("/api/admin/users/{user_id}")
async def api_admin_delete_user(request: Request, user_id: str):
    user = _current_user(request)
    if not _is_admin(user):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    if user_id == "admin":
        return JSONResponse({"error": "The default admin cannot be deleted"}, status_code=400)
    users = _load_users()
    target = next((u for u in users if u["id"] == user_id), None)
    if not target:
        return JSONResponse({"error": "User not found"}, status_code=404)
    # Kill any tmux sessions this user owned (their content would otherwise
    # become orphaned and visible only to admins).
    owners = _load_session_owners()
    owned = [name for name, oid in owners.items() if oid == user_id]
    for name in owned:
        try:
            subprocess.run(["tmux", "kill-session", "-t", name],
                           capture_output=True, text=True, timeout=5)
        except Exception:
            logger.debug("Failed to kill session '%s' during user delete", name, exc_info=True)
        _clear_session_owner(name)
    # Remove the user record.
    users = [u for u in users if u["id"] != user_id]
    _save_users(users)
    try:
        _delete_user_browser_session(user_id)
    except Exception:
        logger.exception("Failed to retire browser for deleted user %s", user_id)
    # Tear down per-user data + Codex config dirs.
    try:
        data_dir = MESSAGES_DIR / "users" / user_id
        if data_dir.exists():
            shutil.rmtree(data_dir, ignore_errors=True)
    except Exception:
        logger.debug("Failed to remove user data dir for %s", user_id, exc_info=True)
    try:
        cfg_dir = Path.home() / f".codex-user-{user_id}"
        if cfg_dir.exists():
            shutil.rmtree(cfg_dir, ignore_errors=True)
    except Exception:
        logger.debug("Failed to remove user codex config for %s", user_id, exc_info=True)
    logger.info("Admin '%s' deleted user '%s' (and %d sessions)",
                user["username"], target.get("username", user_id), len(owned))
    return JSONResponse({"ok": True})


def _set_auth_cookie(resp, request: Request, token: str):
    is_https = request.headers.get("x-forwarded-proto") == "https" or request.url.scheme == "https"
    resp.set_cookie(AUTH_COOKIE, token, max_age=86400 * 30,
                    httponly=True, samesite="lax", secure=is_https)
    return resp












class ImpersonationExchangeBody(BaseModel):
    ticket: str = Field(min_length=20, max_length=200)


@app.post("/api/admin/users/{user_id}/impersonate")
async def api_admin_impersonate(request: Request, user_id: str):
    """Issue a short-lived ticket for an isolated impersonation browser tab."""
    admin = _current_user(request)
    if not _is_admin(admin):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    target = next((u for u in _load_users() if u["id"] == user_id), None)
    if not target:
        return JSONResponse({"error": "User not found"}, status_code=404)
    if target["id"] == admin["id"]:
        return JSONResponse({"error": "That's already you"}, status_code=400)
    ticket = secrets.token_urlsafe(32)
    with _impersonation_lock:
        _purge_expired_impersonation_tokens()
        _impersonation_tickets[ticket] = {
            "admin_id": admin["id"],
            "target_id": target["id"],
            "expires_at": time.time() + _IMPERSONATION_TICKET_TTL,
        }
    url = (
        f"{ROOT_PATH or ''}/?impersonate_ticket="
        f"{urllib.parse.quote(ticket, safe='')}"
    )
    logger.info(
        "Admin '%s' issued an impersonation ticket for '%s'",
        admin.get("username"),
        target.get("username"),
    )
    return JSONResponse({
        "ok": True,
        "username": target.get("username", ""),
        "url": url,
        "expires_in": _IMPERSONATION_TICKET_TTL,
    })


@app.post("/api/admin/impersonation/exchange")
async def api_admin_impersonation_exchange(
    request: Request,
    body: ImpersonationExchangeBody,
):
    """Consume a one-time ticket and return a token kept in tab sessionStorage."""
    admin = _current_user(request)
    if not _is_admin(admin):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    now = time.time()
    with _impersonation_lock:
        _purge_expired_impersonation_tokens(now)
        record = _impersonation_tickets.get(body.ticket)
        if not record:
            return JSONResponse(
                {"error": "Impersonation ticket expired or already used"},
                status_code=410,
            )
        if record.get("admin_id") != admin.get("id"):
            return JSONResponse({"error": "Ticket belongs to another admin"}, status_code=403)
        _impersonation_tickets.pop(body.ticket, None)
        token = secrets.token_urlsafe(48)
        _impersonation_sessions[token] = {
            "admin_id": admin["id"],
            "target_id": record["target_id"],
            "expires_at": now + _IMPERSONATION_SESSION_TTL,
        }
        _save_impersonation_sessions_locked()
    target = _find_user_by_id(str(record["target_id"]))
    if not target:
        with _impersonation_lock:
            _impersonation_sessions.pop(token, None)
            _save_impersonation_sessions_locked()
        return JSONResponse({"error": "User no longer exists"}, status_code=404)
    return JSONResponse({
        "ok": True,
        "token": token,
        "expires_in": _IMPERSONATION_SESSION_TTL,
        "user": _public_user(target),
    })


@app.post("/api/impersonation/end")
async def api_end_impersonation(request: Request):
    """Revoke the current tab-scoped impersonation token."""
    token = request.headers.get("X-Tmux-Impersonate", "").strip()
    impersonator = getattr(request.state, "_impersonator", None)
    target = _current_user(request)
    if not token or not _is_admin(impersonator) or not target:
        return JSONResponse({"error": "Not impersonating"}, status_code=400)
    with _impersonation_lock:
        record = _impersonation_sessions.get(token)
        if (
            not record
            or record.get("admin_id") != impersonator.get("id")
            or record.get("target_id") != target.get("id")
        ):
            return JSONResponse({"error": "Not impersonating"}, status_code=400)
        _impersonation_sessions.pop(token, None)
        _save_impersonation_sessions_locked()
    return JSONResponse({"ok": True})


@app.post("/api/unimpersonate")
async def api_unimpersonate(request: Request):
    """Return to the admin account. Authorized by possessing a valid admin token
    in the tmux_imp_orig cookie, so the impersonated (non-admin) session can call it."""
    orig = request.cookies.get("tmux_imp_orig")
    admin = _user_from_token(orig) if orig else None
    if not admin or not _is_admin(admin):
        return JSONResponse({"error": "Not impersonating"}, status_code=400)
    resp = JSONResponse({"ok": True, "username": admin.get("username", "")})
    _set_auth_cookie(resp, request, orig)
    resp.delete_cookie("tmux_imp_orig")
    logger.info("Returned to admin '%s' from impersonation", admin.get("username"))
    return resp


# ─────────────────────────────────────────────────────────────────────────────
# API registry — a managed catalog of all external API keys/services (Brave,
# SerpApi, ScrapingBee, OpenAI, Anthropic, …) with plan/limit/cost notes and,
# where the provider exposes one, a LIVE usage fetch so you can see how close to
# the limit you are. Admin-only. Secrets never live in git: the seed below is
# metadata only, and actual key values are hydrated at first run from
# ~/CLAUDE_API_KEYS.md (or the environment). Once seeded, the full records live
# in ~/.tmux-dashboard/api_registry.json (chmod 600, not in the repo).
# ─────────────────────────────────────────────────────────────────────────────
import urllib.error

API_REGISTRY_FILE = MESSAGES_DIR / "api_registry.json"

# Metadata-only seed (NO secret values). key_label is a substring hint used to
# pick the right value when one env var appears multiple times in the md file.
_API_SEED = [
    # ── Search & Scrape ──────────────────────────────────────────────────────
    {"seed_id": "brave", "name": "Brave Search", "provider": "brave", "category": "search",
     "env_var": "BRAVE_API_KEY", "key_label": "", "plan": "Free/Data-for-Search",
     "limits": "Free: ~2,000 q/mo · 1 q/s", "costs": "Free tier / from $3 CPM",
     "usage_provider": "brave", "docs_url": "https://api-dashboard.search.brave.com/app/documentation",
     "dashboard_url": "https://api-dashboard.search.brave.com/", "notes": "Web search API. Live rate-limit headers read on each fetch."},
    {"seed_id": "serpapi", "name": "SerpApi", "provider": "serpapi", "category": "search",
     "env_var": "SERPAPI_KEY", "key_label": "", "plan": "Production",
     "limits": "15,000 searches/mo · 3,000/hr", "costs": "$150/mo",
     "usage_provider": "serpapi", "docs_url": "https://serpapi.com/search-api",
     "dashboard_url": "https://serpapi.com/dashboard", "notes": "Google/Bing/etc SERP scraping. Live usage supported."},
    {"seed_id": "scrapingbee", "name": "ScrapingBee", "provider": "scrapingbee", "category": "search",
     "env_var": "SCRAPINGBEE_API_KEY", "key_label": "", "plan": "",
     "limits": "1,000,000 API credits/mo · 100 concurrency", "costs": "paid plan",
     "usage_provider": "scrapingbee", "docs_url": "https://www.scrapingbee.com/documentation/",
     "dashboard_url": "https://app.scrapingbee.com/dashboard", "notes": "Headless-browser scraping + JS render (SocialPanel gated-platform metrics). Live usage supported."},
    {"seed_id": "firecrawl", "name": "Firecrawl", "provider": "firecrawl", "category": "search",
     "env_var": "FIRECRAWL_API_KEY", "key_label": "", "plan": "",
     "limits": "100,000 credits/period", "costs": "paid plan",
     "usage_provider": "firecrawl", "docs_url": "https://docs.firecrawl.dev/",
     "dashboard_url": "https://www.firecrawl.dev/app", "notes": "Crawl → markdown/JSON. Live usage supported."},
    {"seed_id": "linkup", "name": "Linkup", "provider": "linkup", "category": "search",
     "env_var": "LINKUP_API_KEY", "key_label": "", "plan": "",
     "limits": "credit-based", "costs": "pay-as-you-go",
     "usage_provider": "linkup", "docs_url": "https://docs.linkup.so/",
     "dashboard_url": "https://app.linkup.so/", "notes": "AI web search. Live credit balance supported."},
    {"seed_id": "exa", "name": "Exa", "provider": "exa", "category": "search",
     "env_var": "EXA_API_KEY", "key_label": "", "plan": "",
     "limits": "credit-based", "costs": "pay-as-you-go",
     "usage_provider": "exa", "docs_url": "https://docs.exa.ai/",
     "dashboard_url": "https://dashboard.exa.ai/", "notes": "Neural/semantic web search. No usage API — check dashboard."},
    {"seed_id": "jina", "name": "Jina AI", "provider": "jina", "category": "search",
     "env_var": "JINA_API_KEY", "key_label": "", "plan": "",
     "limits": "token-based wallet", "costs": "pay-as-you-go",
     "usage_provider": "jina", "docs_url": "https://jina.ai/reader/",
     "dashboard_url": "https://jina.ai/api-dashboard/", "notes": "Reader (r.jina.ai) + embeddings + reranker. Live wallet balance supported."},
    {"seed_id": "tavily", "name": "Tavily", "provider": "tavily", "category": "search",
     "env_var": "TAVILY_API_KEY", "key_label": "", "plan": "Dev",
     "limits": "credit-based", "costs": "free dev tier",
     "usage_provider": "tavily", "docs_url": "https://docs.tavily.com/",
     "dashboard_url": "https://app.tavily.com/", "notes": "AI search API. Live usage attempted."},
    {"seed_id": "valyu", "name": "Valyu", "provider": "valyu", "category": "search",
     "env_var": "VALYU_API_KEY", "key_label": "", "plan": "",
     "limits": "credit-based", "costs": "pay-as-you-go",
     "usage_provider": "valyu", "docs_url": "https://docs.valyu.network/",
     "dashboard_url": "https://exchange.valyu.network/", "notes": "⚠️ Stored value currently duplicates the Tavily key — looks mislabeled; verify the real Valyu key."},
    {"seed_id": "mistral", "name": "Mistral", "provider": "mistral", "category": "search",
     "env_var": "MISTRAL_API_KEY", "key_label": "", "plan": "",
     "limits": "token/req rate limits", "costs": "pay-as-you-go",
     "usage_provider": "mistral", "docs_url": "https://docs.mistral.ai/",
     "dashboard_url": "https://console.mistral.ai/", "notes": "LLM + OCR/document APIs. Key validated live; usage on dashboard."},
    # ── LLM / AI models ──────────────────────────────────────────────────────
    {"seed_id": "openai-grabo", "name": "OpenAI (GRABO-data)", "provider": "openai", "category": "llm",
     "env_var": "OPENAI_API_KEY", "key_label": "GRABO-data", "plan": "",
     "limits": "per-model TPM/RPM", "costs": "pay-as-you-go",
     "usage_provider": "openai", "docs_url": "https://platform.openai.com/docs/",
     "dashboard_url": "https://platform.openai.com/usage", "notes": "Rotated 2026-05-20. Hit 429 insufficient_quota 2026-07-17 → Vertex fallback."},
    {"seed_id": "openai-rotemai", "name": "OpenAI (rotemai)", "provider": "openai", "category": "llm",
     "env_var": "OPENAI_API_KEY", "key_label": "rotemai", "plan": "",
     "limits": "per-model TPM/RPM", "costs": "pay-as-you-go",
     "usage_provider": "openai", "docs_url": "https://platform.openai.com/docs/",
     "dashboard_url": "https://platform.openai.com/usage", "notes": "Rotated 2026-05-20."},
    {"seed_id": "anthropic-grabo", "name": "Anthropic (grabo-data)", "provider": "anthropic", "category": "llm",
     "env_var": "ANTHROPIC_API_KEY", "key_label": "grabo-data", "plan": "",
     "limits": "per-model TPM/RPM", "costs": "pay-as-you-go",
     "usage_provider": "anthropic", "docs_url": "https://docs.claude.com/",
     "dashboard_url": "https://console.anthropic.com/settings/usage", "notes": "Rotated 2026-05-27. Cost/usage report needs an Admin API key."},
    {"seed_id": "anthropic-docvault", "name": "Anthropic (docvault-GRABO)", "provider": "anthropic", "category": "llm",
     "env_var": "ANTHROPIC_API_KEY", "key_label": "docvault", "plan": "",
     "limits": "per-model TPM/RPM", "costs": "pay-as-you-go",
     "usage_provider": "anthropic", "docs_url": "https://docs.claude.com/",
     "dashboard_url": "https://console.anthropic.com/settings/usage", "notes": "Rotated 2026-05-27."},
    {"seed_id": "gemini", "name": "Gemini (Direct API)", "provider": "gemini", "category": "llm",
     "env_var": "GEMINI_API_KEY", "key_label": "", "plan": "",
     "limits": "per-model RPM/RPD", "costs": "free tier + pay-as-you-go",
     "usage_provider": "gemini", "docs_url": "https://ai.google.dev/gemini-api/docs",
     "dashboard_url": "https://aistudio.google.com/app/apikey", "notes": "Non-Vertex. Project 808242700204, rotated 2026-05-20. Key validated live; usage in Google Cloud console."},
    {"seed_id": "vertex", "name": "Vertex AI / Gemini (GCE SA)", "provider": "vertex", "category": "llm",
     "env_var": "", "key_label": "", "plan": "GCP", "limits": "GCP quotas",
     "costs": "GCP billing (nimo-gpt)", "usage_provider": "vertex",
     "docs_url": "https://cloud.google.com/vertex-ai/docs", "dashboard_url": "https://console.cloud.google.com/vertex-ai",
     "notes": "No API key — GCE service account nimo-843@nimo-gpt. google.genai(vertexai=True, project='nimo-gpt', location='us-central1'). OpenAI-quota fallback."},
    # ── Email / Messaging ────────────────────────────────────────────────────
    {"seed_id": "resend-alphabell", "name": "Resend (alphabell-relay)", "provider": "resend", "category": "mail",
     "env_var": "RESEND_API_KEY", "key_label": "alphabell", "plan": "",
     "limits": "Free: 100/day · 3,000/mo", "costs": "free tier",
     "usage_provider": "resend", "docs_url": "https://resend.com/docs",
     "dashboard_url": "https://resend.com/overview", "notes": "Verified domain alphabell.com. Used by alphabell/lisa mail relays."},
    {"seed_id": "resend-grabo", "name": "Resend (grabo-relay)", "provider": "resend", "category": "mail",
     "env_var": "RESEND_API_KEY", "key_label": "grabo-relay", "plan": "",
     "limits": "Free: 100/day · 3,000/mo", "costs": "free tier",
     "usage_provider": "resend", "docs_url": "https://resend.com/docs",
     "dashboard_url": "https://resend.com/overview", "notes": "Verified domain grabo.cc. Used by grabo-mail relay (2026-06-08)."},
    {"seed_id": "twilio", "name": "Twilio (SMS + phone agent)", "provider": "twilio", "category": "mail",
     "env_var": "", "key_label": "", "plan": "pay-as-you-go",
     "limits": "account balance", "costs": "~$208 MTD (2026-07-17)",
     "usage_provider": "twilio", "docs_url": "https://www.twilio.com/docs",
     "dashboard_url": "https://console.twilio.com/", "notes": "SID ACe4d65af6… Live creds env-based on builder ~/phoneagent-app/.env (token not stored here). Killed Voice Intelligence auto-transcribe ~$27/day."},
]


def _parse_api_keys_md():
    """Extract (env_var, label, value) triples from ~/CLAUDE_API_KEYS.md.
    Lines look like `- SERPAPI_KEY: abc` or `- OPENAI_API_KEY (rotemai): sk-…`."""
    out = []
    try:
        if not _CLAUDE_API_KEYS_MD.exists():
            return out
        for line in _CLAUDE_API_KEYS_MD.read_text(errors="replace").splitlines():
            m = re.match(r"^\s*[-*]?\s*([A-Z][A-Z0-9_]{2,})\s*(?:\(([^)]*)\))?\s*:\s*(\S+)", line)
            if m:
                out.append((m.group(1), (m.group(2) or "").strip(), m.group(3).strip()))
    except Exception:
        logger.debug("Failed to parse CLAUDE_API_KEYS.md", exc_info=True)
    return out


def _resolve_seed_key(env_var, key_label):
    """Best-effort hydrate a seed entry's key from the md file, then env."""
    if not env_var:
        return ""
    triples = _parse_api_keys_md()
    cands = [(lbl, val) for (ev, lbl_, val) in triples for lbl in [lbl_] if ev == env_var]
    if cands:
        if key_label:
            hint = key_label.lower()
            for lbl, val in cands:
                if hint in lbl.lower():
                    return val
        return cands[0][1]
    return os.environ.get(env_var, "") or ""


def _new_api_id() -> str:
    return "api_" + secrets.token_hex(6)


def _seed_api_registry() -> list:
    items = []
    for s in _API_SEED:
        e = dict(s)
        e["id"] = "api_" + s["seed_id"]
        e["key"] = _resolve_seed_key(s.get("env_var", ""), s.get("key_label", ""))
        e["status"] = "active"
        e["created_at"] = time.time()
        e["updated_at"] = time.time()
        items.append(e)
    return items


def _load_api_registry() -> list:
    if API_REGISTRY_FILE.exists():
        try:
            data = json.loads(API_REGISTRY_FILE.read_text())
            items = data.get("apis") if isinstance(data, dict) else None
            if isinstance(items, list):
                return items
        except Exception:
            logger.exception("Failed to read %s — re-seeding", API_REGISTRY_FILE)
    items = _seed_api_registry()
    _save_api_registry(items)
    return items


def _save_api_registry(items: list):
    try:
        MESSAGES_DIR.mkdir(parents=True, exist_ok=True)
        API_REGISTRY_FILE.write_text(json.dumps({"apis": items}, indent=2))
        try:
            API_REGISTRY_FILE.chmod(0o600)
        except Exception:
            logger.debug("chmod 600 on api_registry.json failed", exc_info=True)
    except Exception:
        logger.exception("Failed to save API registry to %s", API_REGISTRY_FILE)


def _mask_key(k: str) -> str:
    if not k:
        return ""
    if len(k) <= 12:
        return k[:2] + "•" * (len(k) - 2)
    return k[:6] + "…" + k[-4:]


def _public_api_entry(e: dict) -> dict:
    k = e.get("key", "") or ""
    return {
        "id": e.get("id", ""),
        "name": e.get("name", ""),
        "provider": e.get("provider", ""),
        "category": e.get("category", "other"),
        "env_var": e.get("env_var", ""),
        "key_label": e.get("key_label", ""),
        "key_masked": _mask_key(k),
        "key_set": bool(k),
        "plan": e.get("plan", ""),
        "limits": e.get("limits", ""),
        "costs": e.get("costs", ""),
        "notes": e.get("notes", ""),
        "docs_url": e.get("docs_url", ""),
        "dashboard_url": e.get("dashboard_url", ""),
        "usage_provider": e.get("usage_provider", ""),
        "status": e.get("status", "active"),
        "updated_at": e.get("updated_at", 0),
    }


_API_CATEGORY_ORDER = ["search", "llm", "mail", "other"]
_API_CATEGORY_LABELS = {
    "search": "Search & Scrape", "llm": "LLM / AI Models",
    "mail": "Email & Messaging", "other": "Other",
}

# ── Live usage fetchers ──────────────────────────────────────────────────────
def _api_http(url, headers=None, timeout=15, method="GET", data=None):
    """GET/POST returning (status, body_text, lower-cased headers). Never raises;
    HTTP errors are returned with their status + body so callers can read e.g. a
    402 with rate-limit headers."""
    # Some providers sit behind a WAF (Cloudflare) that 403s the default
    # `Python-urllib/x.y` User-Agent. Present a normal browser-ish UA + Accept
    # unless the caller set them explicitly.
    hdrs = dict(headers or {})
    hdrs.setdefault("User-Agent", "Mozilla/5.0 (X11; Linux x86_64) tmux-dashboard/1.0")
    hdrs.setdefault("Accept", "application/json, */*")
    req = urllib.request.Request(url, headers=hdrs, method=method, data=data)
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            body = r.read().decode("utf-8", "replace")
            return r.status, body, {k.lower(): v for k, v in r.headers.items()}
    except urllib.error.HTTPError as e:
        body = ""
        try:
            body = e.read().decode("utf-8", "replace")
        except Exception:
            pass
        hdrs = {}
        try:
            hdrs = {k.lower(): v for k, v in (e.headers or {}).items()}
        except Exception:
            pass
        return e.code, body, hdrs
    except Exception as e:
        return 0, str(e), {}










class ApiEntryBody(BaseModel):
    name: str | None = None
    provider: str | None = None
    category: str | None = None
    key: str | None = None
    env_var: str | None = None
    key_label: str | None = None
    plan: str | None = None
    limits: str | None = None
    costs: str | None = None
    notes: str | None = None
    docs_url: str | None = None
    dashboard_url: str | None = None
    usage_provider: str | None = None
    status: str | None = None


@app.get("/api/admin/apis")
async def api_admin_list_apis(request: Request):
    user = _current_user(request)
    if not _is_admin(user):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    items = _load_api_registry()
    return JSONResponse({
        "apis": [_public_api_entry(e) for e in items],
        "category_order": _API_CATEGORY_ORDER,
        "category_labels": _API_CATEGORY_LABELS,
    })


@app.post("/api/admin/apis")
async def api_admin_create_api(request: Request, body: ApiEntryBody):
    user = _current_user(request)
    if not _is_admin(user):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    name = (body.name or "").strip()
    if not name:
        return JSONResponse({"error": "Name is required"}, status_code=400)
    items = _load_api_registry()
    now = time.time()
    entry = {
        "id": _new_api_id(), "name": name,
        "provider": (body.provider or "").strip(),
        "category": (body.category or "other").strip() or "other",
        "key": (body.key or "").strip(),
        "env_var": (body.env_var or "").strip(),
        "key_label": (body.key_label or "").strip(),
        "plan": (body.plan or "").strip(),
        "limits": (body.limits or "").strip(),
        "costs": (body.costs or "").strip(),
        "notes": (body.notes or "").strip(),
        "docs_url": (body.docs_url or "").strip(),
        "dashboard_url": (body.dashboard_url or "").strip(),
        "usage_provider": (body.usage_provider or "").strip(),
        "status": "active",
        "created_at": now, "updated_at": now,
    }
    items.append(entry)
    _save_api_registry(items)
    logger.info("Admin '%s' added API '%s'", user.get("username"), name)
    return JSONResponse({"ok": True, "api": _public_api_entry(entry)})


@app.patch("/api/admin/apis/{api_id}")
async def api_admin_update_api(request: Request, api_id: str, body: ApiEntryBody):
    user = _current_user(request)
    if not _is_admin(user):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    items = _load_api_registry()
    target = next((e for e in items if e.get("id") == api_id), None)
    if not target:
        return JSONResponse({"error": "API not found"}, status_code=404)
    for field in ("name", "provider", "category", "env_var", "key_label", "plan",
                  "limits", "costs", "notes", "docs_url", "dashboard_url", "usage_provider"):
        val = getattr(body, field)
        if val is not None:
            target[field] = val.strip()
    # Key: only overwrite when a non-empty value is sent (empty string leaves it
    # untouched so an edit that doesn't retype the secret keeps it).
    if body.key is not None and body.key.strip():
        target["key"] = body.key.strip()
    if body.status is not None:
        if body.status not in ("active", "revoked"):
            return JSONResponse({"error": "status must be active or revoked"}, status_code=400)
        target["status"] = body.status
    target["updated_at"] = time.time()
    _save_api_registry(items)
    return JSONResponse({"ok": True, "api": _public_api_entry(target)})


@app.delete("/api/admin/apis/{api_id}")
async def api_admin_delete_api(request: Request, api_id: str):
    user = _current_user(request)
    if not _is_admin(user):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    items = _load_api_registry()
    target = next((e for e in items if e.get("id") == api_id), None)
    if not target:
        return JSONResponse({"error": "API not found"}, status_code=404)
    items = [e for e in items if e.get("id") != api_id]
    _save_api_registry(items)
    logger.info("Admin '%s' removed API '%s'", user.get("username"), target.get("name"))
    return JSONResponse({"ok": True})


@app.get("/api/admin/apis/{api_id}/reveal")
async def api_admin_reveal_api(request: Request, api_id: str):
    user = _current_user(request)
    if not _is_admin(user):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    target = next((e for e in _load_api_registry() if e.get("id") == api_id), None)
    if not target:
        return JSONResponse({"error": "API not found"}, status_code=404)
    return JSONResponse({"key": target.get("key", "")})


@app.get("/api/admin/apis/{api_id}/usage")
async def api_admin_api_usage(request: Request, api_id: str):
    user = _current_user(request)
    if not _is_admin(user):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    target = next((e for e in _load_api_registry() if e.get("id") == api_id), None)
    if not target:
        return JSONResponse({"error": "API not found"}, status_code=404)
    usage = await asyncio.to_thread(_fetch_api_usage_sync, target)
    return JSONResponse({"id": api_id, "usage": usage})


@app.get("/api/admin/apis-usage-all")
async def api_admin_api_usage_all(request: Request):
    user = _current_user(request)
    if not _is_admin(user):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    items = _load_api_registry()
    results = await asyncio.gather(*[asyncio.to_thread(_fetch_api_usage_sync, e) for e in items])
    return JSONResponse({"usage": {e.get("id"): u for e, u in zip(items, results)}})


class SaveMyContextBody(BaseModel):
    content: str




_MY_CONTEXT_ALLOWED = {"AGENTS.md", "MEMORY.md", "config.toml"}


@app.get("/api/my/context")
async def api_my_context(request: Request):
    """Return current user's AGENTS.md / MEMORY.md / config.toml contents."""
    user = _current_user(request)
    if not user:
        return JSONResponse({"error": "Not logged in"}, status_code=401)
    if not _is_admin(user):
        _ensure_user_codex_config_dir(user)
    out = {"dir": str(_user_codex_config_dir(user)), "files": []}
    for name in ("AGENTS.md", "MEMORY.md", "config.toml"):
        p = _my_context_path(user, name)
        content = ""
        exists = False
        if p and p.exists():
            try:
                content = p.read_text()
                exists = True
            except Exception:
                logger.debug("Failed to read %s", p, exc_info=True)
        out["files"].append({"name": name, "content": content, "exists": exists, "path": str(p)})
    return JSONResponse(out)


@app.post("/api/my/context/{filename}")
async def api_my_context_save(request: Request, filename: str, body: SaveMyContextBody):
    user = _current_user(request)
    if not user:
        return JSONResponse({"error": "Not logged in"}, status_code=401)
    if filename not in _MY_CONTEXT_ALLOWED:
        return JSONResponse({"error": "Not editable from this endpoint"}, status_code=400)
    if not _is_admin(user):
        _ensure_user_codex_config_dir(user)
    p = _my_context_path(user, filename)
    if p is None:
        return JSONResponse({"error": "Invalid path"}, status_code=400)
    try:
        # Validate config.toml before writing; Codex expects valid TOML.
        if filename == "config.toml":
            try:
                tomllib.loads(body.content or "")
            except tomllib.TOMLDecodeError as e:
                return JSONResponse({"error": f"Invalid TOML: {e}"}, status_code=400)
        _backup_before_dashboard_write(p)
        p.write_text(body.content or "")
        if not _is_admin(user):
            # A member may edit their private content, but cannot accidentally
            # strip the admin/group policy or their isolated browser binding.
            _ensure_user_codex_config_dir(user)
        return JSONResponse({"ok": True, "path": str(p)})
    except Exception:
        logger.exception("Failed to save my-context %s for %s", filename, user["id"])
        return JSONResponse({"error": "Failed to save"}, status_code=500)


# --- History (per-user past sessions) ---

@app.get("/api/history")
async def api_history(request: Request):
    """List past sessions for the current user, with title/notes/last activity.

    A "session" here is any entry in the user's messages.json (current OR
    deleted). Each entry includes the Key Info (notes) so the history list
    can show it inline without a second round-trip.
    """
    user = _current_user(request)
    if not user:
        return JSONResponse({"error": "Not logged in"}, status_code=401)
    messages_by_session = _load_messages(user)
    notes_by_session = _load_all_notes(user)
    # Live cache might have newer in-memory entries for currently active sessions
    # this user owns; merge them in so the list reflects the most recent state.
    live_sessions = set()
    owners = _load_session_owners()
    for sess in get_tmux_sessions():
        if owners.get(sess["name"], "admin") == user["id"]:
            live_sessions.add(sess["name"])
    out = []
    all_names = set(messages_by_session.keys()) | set(notes_by_session.keys()) | live_sessions
    # Live sessions for the admin without explicit ownership records
    if _is_admin(user):
        for sess in get_tmux_sessions():
            if owners.get(sess["name"], "admin") == "admin":
                all_names.add(sess["name"])
                live_sessions.add(sess["name"])
    for name in all_names:
        msgs = messages_by_session.get(name) or []
        # If the session is currently in cache (memory), prefer the live list
        # so newly-sent messages show up without waiting for the next save.
        cache_entry = cache.get(name) or {}
        if cache_entry.get("messages"):
            msgs = cache_entry["messages"]
        notes = notes_by_session.get(name, "") or cache_entry.get("notes", "")
        title = cache_entry.get("title") or ""
        last_ts = 0
        user_msg_count = 0
        for m in msgs:
            if not isinstance(m, dict):
                continue
            ts = m.get("ts") or 0
            if ts > last_ts:
                last_ts = ts
            if m.get("role") == "user":
                user_msg_count += 1
        out.append({
            "session_name": name,
            "title": title,
            "key_info": notes,
            "user_message_count": user_msg_count,
            "total_messages": len(msgs),
            "last_message_at": last_ts,
            "is_live": name in live_sessions,
        })
    out.sort(key=lambda e: e["last_message_at"], reverse=True)
    return JSONResponse({"sessions": out})


@app.get("/api/history/{session_name}")
async def api_history_detail(request: Request, session_name: str):
    """Return all user messages + Key Info for a past session this user owns."""
    user = _current_user(request)
    if not user:
        return JSONResponse({"error": "Not logged in"}, status_code=401)
    if not _user_can_access_session(user, session_name):
        return JSONResponse({"error": "Not found"}, status_code=404)
    # Prefer the live cache for currently-active sessions, fall back to disk.
    msgs: list = []
    cache_entry = cache.get(session_name) or {}
    if cache_entry.get("messages"):
        msgs = cache_entry["messages"]
    else:
        msgs = _load_messages(user).get(session_name, [])
    notes = ""
    if cache_entry.get("notes"):
        notes = cache_entry["notes"]
    else:
        notes = _load_all_notes(user).get(session_name, "")
    user_msgs = [
        {"text": m.get("text", ""), "ts": m.get("ts", 0)}
        for m in msgs
        if isinstance(m, dict) and m.get("role") == "user"
    ]
    return JSONResponse({
        "session_name": session_name,
        "key_info": notes,
        "user_messages": user_msgs,
        "total_user_messages": len(user_msgs),
    })


@app.get("/api/me")
async def api_me(request: Request):
    """Return the currently logged-in user (for the frontend to know who they are)."""
    user = _current_user(request)
    if not user:
        # Auth disabled (no AUTH_PASS) → expose a synthetic admin so the UI works.
        if not AUTH_PASS:
            return JSONResponse({
                "id": "admin", "username": AUTH_USER or "admin",
                "role": "admin", "auth_disabled": True,
                "team_mode": _multi_tenant_enabled(), "brand": BRAND_NAME, "simple": False,
            })
        return JSONResponse({"error": "Not logged in"}, status_code=401)
    is_admin = _is_admin(user)
    # Impersonation: an admin "logged in as" this user has their real token in
    # the side cookie, so we can surface a "return to admin" banner.
    imp_orig = request.cookies.get("tmux_imp_orig")
    imp_admin = getattr(request.state, "_impersonator", None)
    if imp_admin is None:
        imp_admin = _user_from_token(imp_orig) if imp_orig else None
    impersonating = bool(imp_admin and _is_admin(imp_admin) and imp_admin["id"] != user["id"])
    return JSONResponse({
        "id": user["id"],
        "username": user.get("username", ""),
        "role": user.get("role", "user"),
        "auth_disabled": False,
        "team_mode": _multi_tenant_enabled(),
        "brand": BRAND_NAME,
        # "simple" = the heavily-stripped team UI shown to non-admin members.
        "simple": bool(_multi_tenant_enabled() and not is_admin),
        "impersonating": impersonating,
        "impersonator": imp_admin.get("username", "") if impersonating else "",
    })


# ===========================================================================
# Multi-tenant mode: shared auth, global context, soft sandbox, Google connections.
# Enabled explicitly or automatically once a non-admin account exists.
# ===========================================================================
import urllib.parse
import urllib.request

SANDBOX_HOOK_PATH = MESSAGES_DIR / "hooks" / "sandbox_guard.py"












def _sync_global_policy_into_config(config: Path, user: dict | None = None) -> bool:
    """Apply host and permission-group policy as a developer instruction."""
    existing = config.read_text() if config.exists() else ""
    instructions = (
        _member_developer_instructions(user)
        if user
        else _read_global_context()
    )
    updated = _rewrite_top_level_toml(
        existing,
        {"developer_instructions": _toml_basic_string(instructions)},
    )
    tomllib.loads(updated)
    if updated == existing:
        return False
    config.parent.mkdir(parents=True, exist_ok=True)
    _backup_before_dashboard_write(config)
    config.write_text(updated)
    return True


















def _share_credentials_symlink(cfg_dir: Path):
    """Point a user's .credentials.json at the shared admin token so one login
    authenticates everyone. A single file = a single refresh token, which avoids
    the OAuth rotation war that divergent copies would cause."""
    try:
        link = cfg_dir / ".credentials.json"
        if link.is_symlink():
            try:
                if os.readlink(link) == str(SHARED_CREDENTIALS):
                    return
            except OSError:
                pass
            link.unlink()
        elif link.exists():
            link.unlink()
        link.symlink_to(SHARED_CREDENTIALS)
    except Exception:
        logger.debug("Failed to symlink shared credentials into %s", cfg_dir, exc_info=True)


def _approve_anthropic_key(cfg_dir: Path, key: str):
    """Pre-approve a shared ANTHROPIC_API_KEY in the config dir's settings.json so
    Claude Code doesn't interactively prompt 'Detected a custom API key — use it?'
    (which defaults to No). Claude matches on the key's last 20 chars."""
    if not key:
        return
    suffix = key[-20:]
    sp = cfg_dir / "settings.json"
    try:
        s = json.loads(sp.read_text()) if sp.exists() else {}
        if not isinstance(s, dict):
            s = {}
    except Exception:
        s = {}
    car = s.get("customApiKeyResponses")
    if not isinstance(car, dict):
        car = {}
    approved = car.get("approved") if isinstance(car.get("approved"), list) else []
    if suffix not in approved:
        approved.append(suffix)
    car["approved"] = approved
    if not isinstance(car.get("rejected"), list):
        car["rejected"] = []
    s["customApiKeyResponses"] = car
    try:
        sp.parent.mkdir(parents=True, exist_ok=True)
        sp.write_text(json.dumps(s, indent=2))
    except Exception:
        logger.debug("Failed to write customApiKeyResponses into %s", sp, exc_info=True)


def _set_api_key_helper(cfg_dir: Path):
    """Point Claude Code at the shared API key via settings.json `apiKeyHelper`.
    Interactive claude does NOT honor a bare ANTHROPIC_API_KEY env var for
    inference (it falls back to /login), but apiKeyHelper authenticates reliably —
    and the key stays in a 0600 file rather than the terminal scrollback."""
    sp = cfg_dir / "settings.json"
    try:
        s = json.loads(sp.read_text()) if sp.exists() else {}
        if not isinstance(s, dict):
            s = {}
    except Exception:
        s = {}
    s["apiKeyHelper"] = "cat " + shlex.quote(str(ANTHROPIC_API_KEY_FILE))
    try:
        sp.parent.mkdir(parents=True, exist_ok=True)
        sp.write_text(json.dumps(s, indent=2))
    except Exception:
        logger.debug("Failed to set apiKeyHelper in %s", sp, exc_info=True)


def _remove_subscription_creds(cfg_dir: Path):
    """In API-key mode, drop any (dead) subscription .credentials.json so claude
    uses the API key instead of trying the expired OAuth token and hitting /login."""
    p = cfg_dir / ".credentials.json"
    try:
        if p.is_symlink() or p.exists():
            p.unlink()
    except Exception:
        logger.debug("Failed to remove subscription creds in %s", cfg_dir, exc_info=True)


def _apply_api_key_auth(cfg_dir: Path):
    """Configure a config dir to authenticate via the shared API key."""
    cfg_dir.mkdir(parents=True, exist_ok=True)
    _remove_subscription_creds(cfg_dir)
    _set_api_key_helper(cfg_dir)
    _approve_anthropic_key(cfg_dir, _stored_anthropic_key)




def _remove_api_key_helper(cfg_dir: Path):
    """Strip apiKeyHelper + customApiKeyResponses so claude uses the (symlinked)
    subscription token instead of the metered API key."""
    sp = cfg_dir / "settings.json"
    try:
        s = json.loads(sp.read_text()) if sp.exists() else {}
        if not isinstance(s, dict):
            return
    except Exception:
        return
    if "apiKeyHelper" in s or "customApiKeyResponses" in s:
        s.pop("apiKeyHelper", None)
        s.pop("customApiKeyResponses", None)
        try:
            sp.write_text(json.dumps(s, indent=2))
        except Exception:
            logger.debug("Failed to strip apiKeyHelper from %s", sp, exc_info=True)


def _apply_subscription_auth(cfg_dir: Path):
    """Configure a config dir to authenticate via the shared subscription PLAN:
    symlink .credentials.json to the admin token and remove API-key settings."""
    cfg_dir.mkdir(parents=True, exist_ok=True)
    _remove_api_key_helper(cfg_dir)
    _share_credentials_symlink(cfg_dir)


def _disable_claude_ai_connectors(cfg_dir: Path):
    """Turn off the claude.ai ACCOUNT-level connectors (Drive/Gmail/Calendar that
    ride the shared plan account, `mcp__claude_ai_*`). On the shared plan those are
    the admin account's data — a leak into member sessions, and members can't
    re-auth them when they expire. Members use our per-user `google` MCP instead.
    Requires Claude Code >= 2.1.182. Custom mcpServers are unaffected."""
    sp = cfg_dir / "settings.json"
    try:
        s = json.loads(sp.read_text()) if sp.exists() else {}
        if not isinstance(s, dict):
            s = {}
    except Exception:
        s = {}
    if s.get("disableClaudeAiConnectors") is not True:
        s["disableClaudeAiConnectors"] = True
        try:
            sp.parent.mkdir(parents=True, exist_ok=True)
            sp.write_text(json.dumps(s, indent=2))
        except Exception:
            logger.debug("Failed to set disableClaudeAiConnectors in %s", sp, exc_info=True)


def _set_team_model_effort(cfg_dir: Path):
    """Pin the team model and reasoning effort in Codex config.toml."""
    sp = cfg_dir / "config.toml"
    try:
        existing = sp.read_text() if sp.exists() else ""
        merged = _merge_top_level_toml_keys(existing, {
            "model": TEAM_MODEL or _CODEX_DEFAULT_MODEL,
            "model_reasoning_effort": (
                _normalize_reasoning_effort(TEAM_EFFORT)
                or _CODEX_DEFAULT_REASONING_EFFORT
            ),
            "sandbox_mode": "workspace-write",
            "approval_policy": "never",
        })
        merged = _ensure_codex_project_trust(merged, os.getcwd())
        if merged != existing:
            _backup_before_dashboard_write(sp)
            sp.parent.mkdir(parents=True, exist_ok=True)
            sp.write_text(merged)
    except Exception:
        logger.debug("Failed to set team Codex model/effort in %s", sp, exc_info=True)




def _claude_config_json(cfg_dir: Path) -> Path:
    """Where Claude keeps its main config for a given config dir.

    The default ~/.claude uses the HOME-level ~/.claude.json, not a file inside
    the directory. Writing the wrong one leaves the real config untouched and
    the session still prompts.
    """
    try:
        if cfg_dir.resolve() == (Path.home() / ".claude").resolve():
            return Path.home() / ".claude.json"
    except OSError:
        pass
    return cfg_dir / ".claude.json"


def _seed_trust(cfg_dir: Path, cwd: str):
    """Pre-accept Claude Code's per-folder trust dialog for `cwd` in this config
    dir's .claude.json so it doesn't prompt (which would hang a detached session)."""
    cj = _claude_config_json(cfg_dir)
    try:
        d = json.loads(cj.read_text()) if cj.exists() else {}
        if not isinstance(d, dict):
            d = {}
    except Exception:
        d = {}
    projects = d.get("projects") if isinstance(d.get("projects"), dict) else {}
    proj = projects.get(cwd) if isinstance(projects.get(cwd), dict) else {}
    proj["hasTrustDialogAccepted"] = True
    projects[cwd] = proj
    d["projects"] = projects
    d.setdefault("hasCompletedOnboarding", True)
    try:
        cj.write_text(json.dumps(d, indent=2))
    except Exception:
        logger.debug("Failed to seed trust into %s", cj, exc_info=True)


# A standalone primer that drives a throwaway tmux session WITH an attached pty
# client to accept the one-time "Bypass Permissions" warning. A detached session
# (no client) can't confirm it and claude exits, so members would otherwise hang.
PRIME_SCRIPT_PATH = MESSAGES_DIR / "hooks" / "prime_claude.sh"
_PRIME_SCRIPT = r'''#!/usr/bin/env bash
# Accept the one-time --dangerously-skip-permissions warning for a config dir.
CFG="$1"
MARKER="$CFG/.claude_primed"
[ -f "$MARKER" ] && { echo "already primed"; exit 0; }
KEY="$(cat "$DASH_KEY_FILE" 2>/dev/null)"
S="prime_$$"
tmux kill-session -t "$S" 2>/dev/null
tmux new-session -d -s "$S" -x 200 -y 50 -c "$PWD" || exit 1
# Subscription mode (no key): rely on the config dir's symlinked plan creds.
if [ -n "$KEY" ]; then PRE="export ANTHROPIC_API_KEY=$KEY; "; else PRE="unset ANTHROPIC_API_KEY; "; fi
tmux send-keys -t "$S" "${PRE}export CLAUDE_CONFIG_DIR=$CFG; claude --dangerously-skip-permissions" Enter
# Attach a pty client in the background so claude sees an interactive terminal.
setsid bash -c "script -qfc 'tmux attach -t $S' /dev/null" >/dev/null 2>&1 &
ok=0
for i in $(seq 1 45); do
  pane="$(tmux capture-pane -t "$S" -p 2>/dev/null)"
  if echo "$pane" | grep -q "bypass permissions on"; then ok=1; break; fi
  if echo "$pane" | grep -q "Yes, I accept"; then
    tmux send-keys -t "$S" Down; sleep 1; tmux send-keys -t "$S" Enter; sleep 2
  fi
  sleep 1
done
tmux send-keys -t "$S" C-c 2>/dev/null
sleep 1
tmux kill-session -t "$S" 2>/dev/null
pkill -f "tmux attach -t $S" 2>/dev/null
if [ "$ok" = "1" ]; then date +%s > "$MARKER"; echo "primed"; exit 0; fi
echo "prime failed"; exit 1
'''


def _write_prime_script():
    PRIME_SCRIPT_PATH.parent.mkdir(parents=True, exist_ok=True)
    try:
        if (not PRIME_SCRIPT_PATH.exists()) or PRIME_SCRIPT_PATH.read_text() != _PRIME_SCRIPT:
            PRIME_SCRIPT_PATH.write_text(_PRIME_SCRIPT)
        PRIME_SCRIPT_PATH.chmod(0o755)
    except Exception:
        logger.debug("Failed to write prime script", exc_info=True)


def _prime_claude_config(cfg_dir: Path) -> bool:
    """One-time per config dir: accept the bypass-permissions warning so detached
    sessions launch cleanly. Idempotent via a marker file. Works in subscription
    mode (symlinked plan creds) or, as a legacy path, with a stored API key."""
    if not _subscription_token_valid() and not _stored_anthropic_key:
        return False
    marker = cfg_dir / ".claude_primed"
    if marker.exists():
        return True
    try:
        cfg_dir.mkdir(parents=True, exist_ok=True)
        _seed_trust(cfg_dir, os.getcwd())
        if _stored_anthropic_key:
            _approve_anthropic_key(cfg_dir, _stored_anthropic_key)
        _write_prime_script()
        env = dict(os.environ,
                   DASH_KEY_FILE=str(ANTHROPIC_API_KEY_FILE),
                   PATH=os.environ.get("PATH", "") + ":/usr/local/bin:/usr/bin")
        subprocess.run(["bash", str(PRIME_SCRIPT_PATH), str(cfg_dir)],
                       cwd=os.getcwd(), env=env, capture_output=True, text=True, timeout=90)
    except Exception:
        logger.debug("prime_claude_config failed for %s", cfg_dir, exc_info=True)
    return marker.exists()




def _write_sandbox_hook_script():
    SANDBOX_HOOK_PATH.parent.mkdir(parents=True, exist_ok=True)
    content = _SANDBOX_HOOK_SCRIPT.replace("__DASH_URL__", DASH_LOCAL_URL).replace("__BRAND__", BRAND_NAME)
    try:
        if (not SANDBOX_HOOK_PATH.exists()) or SANDBOX_HOOK_PATH.read_text() != content:
            SANDBOX_HOOK_PATH.write_text(content)
        SANDBOX_HOOK_PATH.chmod(0o755)
    except Exception:
        logger.debug("Failed to write sandbox hook", exc_info=True)


def _install_sandbox_hook(cfg_dir: Path, user: dict):
    """Apply Codex's workspace sandbox for a non-admin team member.

    Claude's PreToolUse hook format is not read by Codex. The dashboard instead
    launches these sessions without the dangerous bypass flag and pins
    workspace-write + never-ask behavior in config.toml.
    """
    _set_team_model_effort(cfg_dir)


# --- email (Resend) --------------------------------------------------------
def _send_email(subject: str, html_body: str, to: str | None = None) -> bool:
    to = to or ADMIN_APPROVAL_EMAIL
    if not RESEND_API_KEY:
        logger.warning("Email not sent (no RESEND_API_KEY): %s", subject)
        return False
    payload = json.dumps({
        "from": MAIL_FROM, "to": [to], "subject": subject,
        "html": html_body, "text": re.sub("<[^>]+>", "", html_body),
    }).encode()
    try:
        req = urllib.request.Request(
            "https://api.resend.com/emails", data=payload,
            headers={"Authorization": "Bearer " + RESEND_API_KEY,
                     "Content-Type": "application/json",
                     # Resend is behind Cloudflare, which 403s (error 1010) the
                     # default Python-urllib User-Agent. Send a normal one.
                     "User-Agent": f"Mozilla/5.0 (X11; Linux x86_64) {BRAND_NAME}/1.0"})
        with urllib.request.urlopen(req, timeout=15) as r:
            r.read()
        return True
    except Exception:
        logger.exception("Failed to send email via Resend")
        return False


@app.post("/api/sandbox/check")
async def api_sandbox_check(request: Request):
    """Called by the per-user PreToolUse guard hook (localhost only).

    The sandbox block itself is a security control and stays. The approval queue
    that used to sit behind it (a pending/approve/deny store plus an admin panel
    and notification email) was removed: it was never used — no approvals file
    was ever written — and it granted a 1-hour bypass of a boundary that should
    not be bypassable from a web UI.
    """
    if request.client and request.client.host not in ("127.0.0.1", "::1", "localhost"):
        return JSONResponse({"decision": "deny", "reason": "forbidden"}, status_code=403)
    try:
        body = await request.json()
    except Exception:
        body = {}
    logger.warning(
        "sandbox: blocked cross-server action user=%s tool=%s cwd=%s cmd=%s",
        (body.get("user_id") or "").strip(), body.get("tool") or "",
        body.get("cwd") or "", (body.get("command") or "")[:400],
    )
    return JSONResponse({"decision": "deny", "reason":
        f"{BRAND_NAME} sandbox: this action targets another server and is blocked. "
        "Keep working on things that stay on this server; do not try to bypass."})




























@app.get("/api/connections")
async def api_connections(request: Request):
    user = _current_user(request)
    if not user:
        return JSONResponse({"error": "Not logged in"}, status_code=401)
    cid, _ = _google_client()
    out = {
        "configured": bool(cid),
        "mcp_ready": bool(os.environ.get("GOOGLE_MCP_COMMAND", "")),
        "services": [],
    }
    for svc in ("drive", "gmail", "calendar"):
        out["services"].append({
            "id": svc, "label": GOOGLE_LABELS[svc],
            "connected": _conn_path(user["id"], svc).exists(),
        })
    return JSONResponse(out)


@app.get("/api/connections/{service}/start")
async def api_connection_start(request: Request, service: str):
    user = _current_user(request)
    if not user:
        return JSONResponse({"error": "Not logged in"}, status_code=401)
    if service not in GOOGLE_SCOPES:
        return JSONResponse({"error": "Unknown service"}, status_code=400)
    cid, csec = _google_client()
    if not cid or not csec:
        return JSONResponse({"error": "Google connections are not configured yet. "
                             "Ask the admin to add the OAuth client."}, status_code=503)
    state = _sign_state(user["id"] + ":" + service + ":" + str(int(time.time())))
    params = urllib.parse.urlencode({
        "client_id": cid,
        "redirect_uri": _callback_uri(request),
        "response_type": "code",
        "scope": " ".join(GOOGLE_SCOPES[service]),
        "access_type": "offline",
        "prompt": "consent",
        "include_granted_scopes": "true",
        "state": state,
    })
    return RedirectResponse("https://accounts.google.com/o/oauth2/v2/auth?" + params)


@app.get("/api/connections/google/callback")
async def api_connection_callback(request: Request):
    if request.query_params.get("error"):
        return RedirectResponse(ROOT_PATH + "/?connect=denied")
    code = request.query_params.get("code")
    payload = _verify_state(request.query_params.get("state") or "")
    if not code or not payload:
        return HTMLResponse("Invalid OAuth state", status_code=400)
    try:
        user_id, service, ts = payload.split(":")
    except ValueError:
        return HTMLResponse("Invalid OAuth state", status_code=400)
    if service not in GOOGLE_SCOPES or time.time() - int(ts) > 600:
        return HTMLResponse("OAuth flow expired — please retry.", status_code=400)
    cid, csec = _google_client()
    data = urllib.parse.urlencode({
        "code": code, "client_id": cid, "client_secret": csec,
        "redirect_uri": _callback_uri(request), "grant_type": "authorization_code",
    }).encode()
    try:
        req = urllib.request.Request("https://oauth2.googleapis.com/token", data=data)
        with urllib.request.urlopen(req, timeout=20) as r:
            tok = json.load(r)
    except Exception:
        logger.exception("Google token exchange failed")
        return RedirectResponse(ROOT_PATH + "/?connect=error")
    p = _conn_path(user_id, service)
    p.parent.mkdir(parents=True, exist_ok=True)
    tok["_obtained_at"] = time.time()
    tok["_service"] = service
    try:
        p.write_text(json.dumps(tok, indent=2))
        p.chmod(0o600)
    except Exception:
        logger.exception("Failed to store connection token")
        return RedirectResponse(ROOT_PATH + "/?connect=error")
    u = _find_user_by_id(user_id)
    if u:
        _write_google_mcp(u, service)
    return RedirectResponse(ROOT_PATH + "/?connect=ok&svc=" + service)


@app.delete("/api/connections/{service}")
async def api_connection_delete(request: Request, service: str):
    user = _current_user(request)
    if not user:
        return JSONResponse({"error": "Not logged in"}, status_code=401)
    p = _conn_path(user["id"], service)
    if p.exists():
        try:
            p.unlink()
        except Exception:
            logger.exception("Failed to remove connection")
    return JSONResponse({"ok": True})


# --- Global system context (admin) -----------------------------------------
@app.get("/api/global-context")
async def api_get_global_context(request: Request):
    user = _current_user(request)
    if not _is_admin(user):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    return JSONResponse({"content": _read_global_context(), "path": str(GLOBAL_CONTEXT_FILE)})


@app.post("/api/global-context")
async def api_save_global_context(request: Request):
    user = _current_user(request)
    if not _is_admin(user):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    try:
        body = await request.json()
    except Exception:
        body = {}
    GLOBAL_CONTEXT_FILE.parent.mkdir(parents=True, exist_ok=True)
    content = body.get("content", "") or ""
    existing = GLOBAL_CONTEXT_FILE.read_text() if GLOBAL_CONTEXT_FILE.exists() else None
    if existing != content:
        _backup_before_dashboard_write(GLOBAL_CONTEXT_FILE)
        GLOBAL_CONTEXT_FILE.write_text(content)
    # Re-sync hidden policy into each member's native Codex configuration.
    synced = 0
    for u in _load_users():
        if u.get("role") == "admin":
            continue
        try:
            d = _user_codex_config_dir(u)
            d.mkdir(parents=True, exist_ok=True)
            agents = d / "AGENTS.md"
            _remove_legacy_global_context_from_agents(agents)
            _sync_group_context_into(agents, "")
            _sync_global_policy_into_config(d / "config.toml", u)
            synced += 1
        except Exception:
            logger.debug("Failed to re-sync global context for %s", u.get("id"), exc_info=True)
    return JSONResponse({"ok": True, "synced": synced})


# ===========================================================================
# Work groups · admin context-file editor · admin user history · projects
# ===========================================================================
GROUPS_FILE = MESSAGES_DIR / "groups.json"
GROUPS_DIR = MESSAGES_DIR / "groups"


# Top-level path segments reserved for the app (never treated as usernames).
_RESERVED_TOP = {"", "api", "login", "logout", "qa-output", "static", "favicon.ico",
                 "robots.txt", "sw.js", "health", "_next", "assets", "tmux", "ws"}


def _load_groups() -> dict:
    """Return the fixed permission catalog; permissions are not user-editable."""
    return {
        "groups": [
            {"id": group_id, **dict(group)}
            for group_id, group in PERMISSION_GROUPS.items()
        ]
    }


def _group_dir(group_id: str) -> Path:
    return GROUPS_DIR / group_id


def _ensure_group_dir(group_id: str):
    group = PERMISSION_GROUPS.get(group_id)
    if not group:
        raise ValueError(f"Unknown permission group: {group_id}")
    d = _group_dir(group_id)
    d.mkdir(parents=True, exist_ok=True)
    policy_path = d / "AGENTS.md"
    content = group["instructions"].strip() + "\n"
    existing = policy_path.read_text() if policy_path.exists() else None
    if existing != content:
        if policy_path.exists():
            _backup_before_dashboard_write(policy_path)
        policy_path.write_text(content)
    return d
























def _safe_ctx_path(root: Path, rel: str):
    rel = (rel or "").lstrip("/").replace("\\", "/")
    if not rel or ".." in rel.split("/"):
        return None
    target = (root / rel).resolve()
    try:
        target.relative_to(root.resolve())
    except ValueError:
        return None
    return target


class CtxFileBody(BaseModel):
    path: str
    content: str = ""


@app.get("/api/admin/context/{scope}/{ident}")
async def api_admin_context_list(request: Request, scope: str, ident: str):
    if not _is_admin(_current_user(request)):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    root = _context_root(scope, ident)
    if root is None:
        return JSONResponse({"error": "Not found"}, status_code=404)
    root.mkdir(parents=True, exist_ok=True)
    return JSONResponse({"root": str(root), "files": _list_context_files(root)})


@app.get("/api/admin/context/{scope}/{ident}/file")
async def api_admin_context_read(request: Request, scope: str, ident: str, path: str = ""):
    if not _is_admin(_current_user(request)):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    root = _context_root(scope, ident)
    if root is None:
        return JSONResponse({"error": "Not found"}, status_code=404)
    target = _safe_ctx_path(root, path)
    if target is None:
        return JSONResponse({"error": "Invalid path"}, status_code=400)
    if not target.exists():
        return JSONResponse({"path": path, "content": "", "exists": False})
    try:
        return JSONResponse({"path": path, "content": target.read_text(), "exists": True})
    except Exception:
        return JSONResponse({"error": "Unreadable (binary file?)"}, status_code=400)


@app.post("/api/admin/context/{scope}/{ident}/file")
async def api_admin_context_write(request: Request, scope: str, ident: str, body: CtxFileBody):
    if not _is_admin(_current_user(request)):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    if scope == "group":
        return JSONResponse(
            {"error": "Permission group policies are managed and cannot be edited here"},
            status_code=403,
        )
    root = _context_root(scope, ident)
    if root is None:
        return JSONResponse({"error": "Not found"}, status_code=404)
    target = _safe_ctx_path(root, body.path)
    if target is None:
        return JSONResponse({"error": "Invalid path"}, status_code=400)
    if body.path.endswith(".json"):
        try:
            json.loads(body.content or "{}")
        except json.JSONDecodeError as e:
            return JSONResponse({"error": "Invalid JSON: " + e.msg}, status_code=400)
    if body.path.endswith(".toml") and body.content.strip():
        try:
            tomllib.loads(body.content)
        except tomllib.TOMLDecodeError as e:
            return JSONResponse({"error": f"Invalid TOML: {e}"}, status_code=400)
    try:
        target.parent.mkdir(parents=True, exist_ok=True)
        content = body.content or ""
        existing = target.read_text() if target.exists() else None
        if existing != content:
            _backup_before_dashboard_write(target)
            target.write_text(content)
    except Exception:
        return JSONResponse({"error": "Write failed"}, status_code=500)
    # Group AGENTS.md edit → re-sync that group's members immediately.
    if scope == "group" and target.name == "AGENTS.md":
        for u in _load_users():
            if u.get("group") == ident and u.get("role") != "admin":
                try:
                    _ensure_user_codex_config_dir(u)
                except Exception:
                    pass
    elif scope == "user":
        target_user = _find_user_by_id(ident)
        if target_user and not _is_admin(target_user):
            try:
                _ensure_user_codex_config_dir(target_user)
            except Exception:
                logger.debug("Failed to re-apply managed member context", exc_info=True)
    return JSONResponse({"ok": True})


@app.delete("/api/admin/context/{scope}/{ident}/file")
async def api_admin_context_delete(request: Request, scope: str, ident: str, path: str = ""):
    if not _is_admin(_current_user(request)):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    if scope == "group":
        return JSONResponse(
            {"error": "Permission group policies are managed and cannot be deleted"},
            status_code=403,
        )
    root = _context_root(scope, ident)
    if root is None:
        return JSONResponse({"error": "Not found"}, status_code=404)
    target = _safe_ctx_path(root, path)
    if target is None or not target.exists():
        return JSONResponse({"error": "Invalid path"}, status_code=400)
    try:
        if target.is_dir():
            backup = target.with_name(f"{target.name}.bak-dashboard-{int(time.time() * 1000)}")
            shutil.copytree(str(target), str(backup), symlinks=True)
            shutil.rmtree(target)
        else:
            _backup_before_dashboard_write(target)
            target.unlink()
    except Exception:
        return JSONResponse({"error": "Delete failed"}, status_code=500)
    if scope == "user":
        target_user = _find_user_by_id(ident)
        if target_user and not _is_admin(target_user):
            try:
                _ensure_user_codex_config_dir(target_user)
            except Exception:
                logger.debug("Failed to restore managed member files", exc_info=True)
    return JSONResponse({"ok": True})


@app.get("/api/admin/groups")
async def api_admin_groups(request: Request):
    if not _is_admin(_current_user(request)):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    users = _load_users()
    out = []
    for g in _load_groups().get("groups", []):
        out.append({**g, "member_count": sum(1 for u in users if u.get("group") == g.get("id"))})
    return JSONResponse({"groups": out})


# --- admin: view any user's full history ----------------------------------
def _history_list_for(target: dict):
    messages_by_session = _load_messages(target)
    notes_by_session = _load_all_notes(target)
    owners = _load_session_owners()
    live = {s["name"] for s in get_tmux_sessions() if owners.get(s["name"], "admin") == target["id"]}
    out = []
    for name in set(messages_by_session) | set(notes_by_session) | live:
        msgs = messages_by_session.get(name) or []
        last_ts, uc = 0, 0
        for m in msgs:
            if isinstance(m, dict):
                last_ts = max(last_ts, m.get("ts") or 0)
                uc += 1 if m.get("role") == "user" else 0
        out.append({"session_name": name, "key_info": notes_by_session.get(name, ""),
                    "user_message_count": uc, "total_messages": len(msgs),
                    "last_message_at": last_ts, "is_live": name in live})
    out.sort(key=lambda e: e["last_message_at"], reverse=True)
    return out


@app.get("/api/admin/users/{user_id}/history")
async def api_admin_user_history(request: Request, user_id: str):
    if not _is_admin(_current_user(request)):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    target = _find_user_by_id(user_id)
    if not target:
        return JSONResponse({"error": "User not found"}, status_code=404)
    return JSONResponse({"sessions": _history_list_for(target)})


@app.get("/api/admin/users/{user_id}/history/{session_name}")
async def api_admin_user_history_detail(request: Request, user_id: str, session_name: str):
    if not _is_admin(_current_user(request)):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    target = _find_user_by_id(user_id)
    if not target:
        return JSONResponse({"error": "User not found"}, status_code=404)
    return JSONResponse({
        "session_name": session_name,
        "key_info": _load_all_notes(target).get(session_name, ""),
        "messages": _load_messages(target).get(session_name) or [],
    })


def _admin_user_file_record(root: Path, path: Path) -> dict | None:
    """Describe one private text file without allowing a symlink escape."""
    try:
        resolved_root = root.resolve()
        resolved = path.resolve()
        resolved.relative_to(resolved_root)
        if not path.is_file() or path.stat().st_size > 5 * 1024 * 1024:
            return None
        raw = path.read_text(errors="replace")
        return {
            "path": str(path.relative_to(root)),
            "size": path.stat().st_size,
            "modified": path.stat().st_mtime,
            "preview": raw[:1200],
        }
    except (OSError, ValueError):
        return None


def _admin_user_data_inventory(target: dict) -> tuple[list[dict], list[dict]]:
    """Return context and memory inventories from this account's CODEX_HOME."""
    root = _user_codex_config_dir(target)
    if not root.exists():
        return [], []
    context_paths: set[Path] = set()
    for name in _CONTEXT_TOP_FILES:
        path = root / name
        if path.is_file():
            context_paths.add(path)
    for dirname in ("skills", "agents", "commands", "plugins"):
        base = root / dirname
        if not base.exists():
            continue
        for path in base.rglob("*"):
            if path.is_file() and not path.name.startswith("."):
                context_paths.add(path)

    memory_paths: set[Path] = set()
    root_memory = root / "MEMORY.md"
    if root_memory.is_file():
        memory_paths.add(root_memory)
    for dirname in ("memories", "memory"):
        base = root / dirname
        if base.exists():
            memory_paths.update(path for path in base.rglob("*") if path.is_file())
    projects = root / "projects"
    if projects.exists():
        for path in projects.rglob("*"):
            if path.is_file() and "memory" in path.relative_to(projects).parts:
                memory_paths.add(path)

    context = [
        record
        for path in sorted(context_paths)[:1000]
        if (record := _admin_user_file_record(root, path)) is not None
    ]
    memories = [
        record
        for path in sorted(memory_paths)[:2000]
        if (record := _admin_user_file_record(root, path)) is not None
    ]
    return context, memories


@app.get("/api/admin/users/{user_id}/overview")
async def api_admin_user_overview(request: Request, user_id: str):
    """One navigable admin view of a user's prompts, history, and private data."""
    if not _is_admin(_current_user(request)):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    target = _find_user_by_id(user_id)
    if not target:
        return JSONResponse({"error": "User not found"}, status_code=404)
    messages_by_session = _load_messages(target)
    prompts = [
        {
            "id": str(entry.get("id") or ""),
            "session_name": str(entry.get("session_name") or ""),
            "prompt": str(entry.get("prompt") or ""),
            "ts": float(entry.get("ts") or 0),
            "source": str(entry.get("source") or ""),
            "impersonated_by": str(entry.get("impersonated_by") or ""),
        }
        for entry in _read_prompt_audit(user_id=user_id, limit=5000)
    ]
    if not prompts:
        for session_name, messages in messages_by_session.items():
            if not isinstance(messages, list):
                continue
            for message in messages:
                if not isinstance(message, dict) or message.get("role") != "user":
                    continue
                prompts.append({
                    "session_name": session_name,
                    "prompt": str(message.get("text") or ""),
                    "ts": float(message.get("ts") or 0),
                    "source": "messages",
                    "impersonated_by": "",
                })
        prompts.sort(key=lambda row: row["ts"], reverse=True)
    context, memories = await asyncio.to_thread(_admin_user_data_inventory, target)
    public = _public_user(target)
    public["last_activity"] = _last_human_activity(target)
    public["session_count"] = _user_session_count(target["id"])
    group = PERMISSION_GROUPS.get(str(target.get("group") or ""), {})
    return JSONResponse({
        "user": public,
        "group_policy": {
            "name": group.get("name", "Unassigned"),
            "summary": group.get("summary", "Baseline member restrictions apply."),
            "instructions": group.get("instructions", ""),
        },
        "prompts": prompts,
        "history": _history_list_for(target),
        "context": context,
        "memories": memories,
    })


@app.get("/api/admin/users/{user_id}/data-file")
async def api_admin_user_data_file(
    request: Request,
    user_id: str,
    kind: str,
    path: str,
):
    """Read one file already admitted to the user's context/memory inventory."""
    if not _is_admin(_current_user(request)):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    target_user = _find_user_by_id(user_id)
    if not target_user:
        return JSONResponse({"error": "User not found"}, status_code=404)
    if kind not in {"context", "memory"}:
        return JSONResponse({"error": "Invalid data kind"}, status_code=400)
    context, memories = await asyncio.to_thread(_admin_user_data_inventory, target_user)
    inventory = context if kind == "context" else memories
    if path not in {str(item.get("path") or "") for item in inventory}:
        return JSONResponse({"error": "File not found in user data"}, status_code=404)
    root = _user_codex_config_dir(target_user).resolve()
    target = (root / path).resolve()
    try:
        target.relative_to(root)
        if not target.is_file() or target.stat().st_size > 5 * 1024 * 1024:
            raise OSError("File is unavailable")
        content = await asyncio.to_thread(target.read_text, errors="replace")
        stat = target.stat()
    except (OSError, ValueError):
        return JSONResponse({"error": "File is unavailable"}, status_code=404)
    return JSONResponse({
        "path": path,
        "kind": kind,
        "content": content,
        "size": stat.st_size,
        "modified": stat.st_mtime,
    })













@app.get("/qa-output/{filepath:path}")
async def serve_qa_output(filepath: str):
    target = (QA_OUTPUT_DIR / filepath).resolve()
    if not str(target).startswith(str(QA_OUTPUT_DIR.resolve())):
        return JSONResponse({"error": "Forbidden"}, status_code=403)
    if not target.exists():
        return JSONResponse({"error": "Not found"}, status_code=404)
    return FileResponse(str(target))


# Serve absolute-path files referenced in terminal output. The frontend
# linkifier turns paths like /home/.../foo.md into <BASE>/file?path=/home/.../foo.md
# links. Auth-gated by the global middleware; we still reject obviously
# sensitive paths and require the resolved real path to match what was asked
# (so symlinks can't escape into something unexpected).
_FILE_SERVE_DENYLIST = {
    "/etc/shadow", "/etc/gshadow", "/etc/sudoers",
    "/root/.ssh/id_rsa", "/root/.ssh/id_ed25519",
}
_FILE_SERVE_DENY_PREFIXES = (
    "/proc/", "/sys/", "/dev/",
)
_FILE_SERVE_DENY_NAMES = {
    ".git-credentials", ".credentials.json", "auth.json",
    "claude_api_keys.md", "credentials.json",
}


def _file_path_is_sensitive(path: Path) -> bool:
    """Reject credential-shaped paths even when a terminal prints a link."""
    for part in path.parts:
        lowered = part.lower()
        if lowered == ".env" or lowered.startswith(".env."):
            return True
        if lowered in _FILE_SERVE_DENY_NAMES:
            return True
        if lowered.endswith((".pem", ".key")) or lowered.startswith("id_rsa"):
            return True
    return False





# Some paths the terminal linkifier turns into <BASE>/file?path=... links are
# not absolute filesystem paths but URL routes on sister apps (typically the
# grabo.cc dashboards). When the local lookup misses, we 302-redirect to the
# upstream host so the user reaches the actual resource. Comma-separated
# overrides via TMUX_DASHBOARD_URL_REDIRECT_MAP="/prefix=https://host,...".
_DEFAULT_URL_REDIRECT_MAP = {
    "/data-dashboard": "https://grabo.cc",
    "/extensiv":        "https://grabo.cc",
    "/shippo":          "https://grabo.cc",
    "/invoices":        "https://grabo.cc",
    "/sztx":            "https://grabo.cc",
    "/hztx":            "https://grabo.cc",
    "/hzbs":            "https://grabo.cc",
    "/outflows":        "https://grabo.cc",
    "/productmanagement": "https://grabo.cc",
    "/sznptinventory":  "https://grabo.cc",
    "/ups":             "https://grabo.cc",
    "/upsv3":           "https://grabo.cc",
    "/usabanks":        "https://grabo.cc",
    "/hsbchk":          "https://grabo.cc",
    "/gusto":           "https://grabo.cc",
    "/inventory":       "https://grabo.cc",
    "/po":              "https://grabo.cc",
    "/balance-sheet":   "https://grabo.cc",
    "/bom":             "https://grabo.cc",
    "/docvault":        "https://grabo.cc",
}


def _load_url_redirect_map() -> dict[str, str]:
    raw = os.environ.get("TMUX_DASHBOARD_URL_REDIRECT_MAP", "").strip()
    if not raw:
        return dict(_DEFAULT_URL_REDIRECT_MAP)
    merged = dict(_DEFAULT_URL_REDIRECT_MAP)
    for entry in raw.split(","):
        entry = entry.strip()
        if not entry or "=" not in entry:
            continue
        prefix, host = entry.split("=", 1)
        prefix = prefix.strip().rstrip("/")
        host = host.strip().rstrip("/")
        if prefix.startswith("/") and host.startswith("http"):
            merged[prefix] = host
    return merged


_URL_REDIRECT_MAP = _load_url_redirect_map()


def _upstream_url_for_path(path: str) -> str | None:
    """Return upstream URL if `path` is a known dashboard URL slug, else None."""
    if not path.startswith("/"):
        return None
    first = "/" + path.lstrip("/").split("/", 1)[0]
    host = _URL_REDIRECT_MAP.get(first)
    if not host:
        return None
    return host + path


def _file_error(request: Request, status: int, title: str, message: str, path: str):
    """Return JSON for API clients, friendly HTML for browsers."""
    accept = (request.headers.get("accept") or "").lower()
    wants_html = "text/html" in accept and "application/json" not in accept
    if not wants_html:
        return JSONResponse({"error": title.lower(), "message": message, "path": path}, status_code=status)
    safe_path = (path or "").replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    safe_msg = message.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    rp = request.scope.get("root_path", "") or "/"
    html = f"""<!doctype html>
<html lang="en"><head><meta charset="UTF-8">
<title>{status} · {title} · {BRAND_NAME} Dashboard</title>
<style>
  body{{margin:0;background:#0d1117;color:#c9d1d9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:24px;box-sizing:border-box}}
  .card{{background:#161b22;border:1px solid #21262d;border-radius:10px;padding:28px 32px;max-width:640px;width:100%;box-shadow:0 6px 30px rgba(0,0,0,.4)}}
  .status{{font-size:.8rem;letter-spacing:.08em;text-transform:uppercase;color:#8b949e;margin-bottom:6px}}
  h1{{font-size:1.4rem;margin:0 0 12px 0;color:#f0f6fc}}
  p{{margin:0 0 14px 0;color:#c9d1d9;line-height:1.55}}
  .path{{display:block;background:#0d1117;border:1px solid #30363d;border-radius:6px;padding:10px 12px;font-family:'SF Mono','Fira Code',Consolas,monospace;font-size:.85rem;color:#79c0ff;word-break:break-all;margin:4px 0 14px 0}}
  .meta{{color:#6e7681;font-size:.85rem}}
  a{{color:#58a6ff;text-decoration:none}}
  a:hover{{text-decoration:underline}}
</style></head>
<body><div class="card">
  <div class="status">Error {status} · {title}</div>
  <h1>{safe_msg}</h1>
  <p>The terminal link pointed to:</p>
  <code class="path">{safe_path or '(no path)'}</code>
  <p class="meta">If this is a file you expected to exist, double-check the spelling, or that the dashboard is running on the host where the file lives.</p>
  <p><a href="{rp}">← back to dashboard</a></p>
</div></body></html>"""
    return HTMLResponse(html, status_code=status)


def _safe_is_dir(p: Path) -> bool:
    try:
        return p.is_dir()
    except Exception:
        return False


def _human_size(n: int) -> str:
    try:
        size = float(n)
    except Exception:
        return ""
    for unit in ("B", "KB", "MB", "GB", "TB"):
        if size < 1024 or unit == "TB":
            return (f"{int(size)} {unit}" if unit == "B" else f"{size:.1f} {unit}")
        size /= 1024.0
    return f"{size:.1f} TB"


_DIR_LISTING_MAX = 2000  # cap entries so a huge dir can't produce a giant page


def _render_dir_listing(request: Request, dir_path: Path) -> HTMLResponse:
    """Render a clickable HTML listing for a directory referenced from terminal
    output. Every row links back through /file?path=... so browsing stays behind
    the dashboard's auth middleware — same login as the dashboard itself."""
    rp = request.scope.get("root_path", "") or ""
    real = str(dir_path)
    session_name = request.query_params.get("session", "")

    def _attr(s: str) -> str:
        return _html_escape(s).replace('"', "&quot;")

    def _link(p: Path) -> str:
        link = rp + "/file?path=" + urllib.parse.quote(str(p), safe="")
        if session_name:
            link += "&session=" + urllib.parse.quote(session_name, safe="")
        return link

    try:
        kids = list(dir_path.iterdir())
    except PermissionError:
        return _file_error(request, 403, "Forbidden", "Permission denied listing this directory.", real)
    except Exception:
        return _file_error(request, 500, "Error", "That directory could not be read.", real)
    kids.sort(key=lambda p: (not _safe_is_dir(p), p.name.lower()))
    total = len(kids)
    truncated = total > _DIR_LISTING_MAX
    kids = kids[:_DIR_LISTING_MAX]

    rows = []
    # Parent link (skip when already at the filesystem root).
    if dir_path != dir_path.parent:
        rows.append(
            '<tr><td class="ic">&#128193;</td>'
            f'<td><a class="row-link" href="{_attr(_link(dir_path.parent))}">../</a></td>'
            '<td class="sz"></td><td class="mt"></td></tr>'
        )
    for p in kids:
        is_dir = _safe_is_dir(p)
        try:
            st = p.stat()
        except Exception:
            st = None
        name = p.name + ("/" if is_dir else "")
        icon = "&#128193;" if is_dir else "&#128196;"
        size = "" if (is_dir or st is None) else _human_size(st.st_size)
        mtime = datetime.fromtimestamp(st.st_mtime).strftime("%Y-%m-%d %H:%M") if st else ""
        rows.append(
            f'<tr><td class="ic">{icon}</td>'
            f'<td><a class="row-link" href="{_attr(_link(p))}">{_html_escape(name)}</a></td>'
            f'<td class="sz">{_html_escape(size)}</td>'
            f'<td class="mt">{_html_escape(mtime)}</td></tr>'
        )
    body = "\n".join(rows) or '<tr><td colspan="4" class="empty">(empty directory)</td></tr>'
    note = (f'<div class="note">Showing first {_DIR_LISTING_MAX} of {total} entries.</div>'
            if truncated else "")
    count_lbl = f"{total} item" + ("" if total == 1 else "s")
    doc = f"""<!doctype html>
<html lang="en"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{_html_escape(dir_path.name or '/')} · index · {BRAND_NAME} Dashboard</title>
<style>
  body{{margin:0;background:#0d1117;color:#c9d1d9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;padding:24px;box-sizing:border-box}}
  .wrap{{max-width:960px;margin:0 auto;background:#161b22;border:1px solid #21262d;border-radius:10px;overflow:hidden;box-shadow:0 6px 30px rgba(0,0,0,.4)}}
  .hd{{padding:18px 22px;border-bottom:1px solid #21262d}}
  .crumb{{font-family:'SF Mono','Fira Code',Consolas,monospace;font-size:.9rem;color:#79c0ff;word-break:break-all}}
  .meta{{color:#8b949e;font-size:.8rem;margin-top:6px}}
  .meta a{{color:#58a6ff;text-decoration:none}} .meta a:hover{{text-decoration:underline}}
  table{{width:100%;border-collapse:collapse;font-size:.88rem}}
  th{{text-align:left;color:#8b949e;font-weight:500;font-size:.72rem;letter-spacing:.06em;text-transform:uppercase;padding:8px 22px;border-bottom:1px solid #21262d}}
  td{{padding:7px 22px;border-bottom:1px solid #1b2027;white-space:nowrap}}
  tr:last-child td{{border-bottom:none}}
  tr:hover td{{background:#1c2330}}
  td.ic{{width:20px;padding-right:0;opacity:.85}}
  .row-link{{color:#c9d1d9;text-decoration:none;word-break:break-all}}
  .row-link:hover{{color:#79c0ff;text-decoration:underline}}
  td.sz,td.mt,th.sz,th.mt{{color:#8b949e;text-align:right;font-variant-numeric:tabular-nums}}
  td.mt,th.mt{{font-size:.8rem}}
  .empty{{color:#6e7681;text-align:center;padding:24px}}
  .note{{padding:10px 22px;color:#d29922;font-size:.8rem;border-top:1px solid #21262d}}
</style></head>
<body><div class="wrap">
  <div class="hd">
    <div class="crumb">&#128193; {_html_escape(real)}</div>
    <div class="meta">{count_lbl} · directory listing · <a href="{rp or '/'}">← dashboard</a></div>
  </div>
  <table><thead><tr><th></th><th>Name</th><th class="sz">Size</th><th class="mt">Modified</th></tr></thead>
  <tbody>
{body}
  </tbody></table>
  {note}
</div></body></html>"""
    resp = HTMLResponse(doc)
    resp.headers["Cache-Control"] = "no-store"
    return resp


@app.get("/file")
async def serve_terminal_file(
    request: Request, path: str = "", download: int = 0, session: str = ""
):
    """Serve a file (or directory listing) referenced from terminal output.

    The terminal linkifier (frontend) discovers file paths — absolute
    (/home/nimrod_rotem/notes.md) and home-relative (~/PROBST_LAWSUIT_2026-07-10/)
    — and turns them into <BASE>/file?path=... links. Files render inline by
    default so .md / .py / images / PDFs show in the browser tab (pass
    ?download=1 to force a download); directories render a clickable listing.
    This route sits behind the dashboard's auth middleware, so every link is
    protected by the same login as the dashboard itself.
    """
    orig_path = path
    user = _current_user(request)
    if not path:
        return _file_error(request, 400, "Bad request", "A file path is required.", orig_path)
    if not _is_admin(user):
        if not user or not session or _session_owner_id(session) != user.get("id"):
            return _file_error(
                request, 403, "Forbidden",
                "Member file links require one of your own sessions.", orig_path,
            )
    # Expand ~ / ~user home-relative paths (terminal output prints these a lot,
    # e.g. "Deliverables in ~/PROBST_LAWSUIT_2026-07-10/").
    if path.startswith("~"):
        path = os.path.expanduser(path)
    if not path.startswith("/"):
        return _file_error(request, 400, "Bad request", "An absolute path (or a ~ home path) is required.", orig_path)
    if path in _FILE_SERVE_DENYLIST:
        return _file_error(request, 403, "Forbidden", "This file is on the dashboard's protected list.", orig_path)
    for pref in _FILE_SERVE_DENY_PREFIXES:
        if path.startswith(pref):
            return _file_error(request, 403, "Forbidden", "Pseudo-filesystem paths (/proc, /sys, /dev) are not served.", orig_path)
    try:
        target = Path(path).resolve()
    except Exception:
        return _file_error(request, 400, "Bad request", "That path could not be resolved.", orig_path)
    # Re-check denylist against the resolved real path (defeats symlink tricks).
    real = str(target)
    if _file_path_is_sensitive(target):
        return _file_error(request, 403, "Forbidden", "Credential files are never served.", orig_path)
    if real in _FILE_SERVE_DENYLIST:
        return _file_error(request, 403, "Forbidden", "This file is on the dashboard's protected list.", orig_path)
    for pref in _FILE_SERVE_DENY_PREFIXES:
        if real.startswith(pref):
            return _file_error(request, 403, "Forbidden", "Pseudo-filesystem paths (/proc, /sys, /dev) are not served.", orig_path)
    if not target.exists():
        upstream = _upstream_url_for_path(orig_path)
        if upstream:
            return RedirectResponse(url=upstream, status_code=302)
        return _file_error(request, 404, "Not found", "No such file or directory on this host.", orig_path)
    if not _is_admin(user) and not _member_can_serve_file(user, session, target):
        return _file_error(
            request, 403, "Forbidden",
            "That path is outside this session's workspace.", orig_path,
        )
    # Directories → a clickable listing (each row stays behind this auth route).
    if target.is_dir():
        return _render_dir_listing(request, target)
    if not target.is_file():
        return _file_error(request, 400, "Unsupported", "That path is not a regular file or directory.", orig_path)
    mime, _ = mimetypes.guess_type(real)
    headers = {}
    # Render text/markdown/code inline as plain text so the browser shows the
    # content rather than offering a download dialog.
    ext = target.suffix.lower()
    text_like_exts = {
        ".md", ".markdown", ".txt", ".log", ".py", ".js", ".ts", ".tsx", ".jsx",
        ".json", ".yaml", ".yml", ".toml", ".ini", ".cfg", ".conf", ".sh",
        ".bash", ".zsh", ".env", ".csv", ".tsv", ".sql", ".html", ".htm",
        ".css", ".scss", ".xml", ".rb", ".go", ".rs", ".c", ".h", ".cpp",
        ".hpp", ".java", ".kt", ".swift", ".php", ".lua", ".r", ".dockerfile",
        ".gitignore", ".gitattributes",
    }
    if not mime and ext in text_like_exts:
        mime = "text/plain; charset=utf-8"
    elif mime and mime.startswith("text/"):
        mime = mime + "; charset=utf-8" if "charset" not in mime else mime
    if download:
        headers["Content-Disposition"] = f'attachment; filename="{target.name}"'
    else:
        headers["Content-Disposition"] = f'inline; filename="{target.name}"'
    return FileResponse(str(target), media_type=mime or "application/octet-stream", headers=headers)


# Three-tier cache per session
cache: dict[str, dict] = {}

# Persistent message storage
# NOTE: messages + notes are now scoped per-user. The legacy
# ~/.tmux-dashboard/messages.json and notes.json are the admin's files. Other
# users get ~/.tmux-dashboard/users/<id>/messages.json and notes.json.
MESSAGES_FILE = MESSAGES_DIR / "messages.json"
NOTES_FILE = MESSAGES_DIR / "notes.json"
PROMPT_AUDIT_BACKFILL_MARKER = MESSAGES_DIR / "prompt-history-backfill-v1.json"


def _append_prompt_audit(
    user: dict,
    session_name: str,
    prompt: str,
    *,
    source: str = "dashboard",
    impersonator: dict | None = None,
    timestamp: float | None = None,
) -> dict:
    """Append one immutable human prompt record to the private audit log."""
    entry = {
        "id": secrets.token_hex(12),
        "ts": float(timestamp if timestamp is not None else time.time()),
        "user_id": user.get("id", ""),
        "username": user.get("username", ""),
        "role": user.get("role", "user"),
        "session_name": session_name,
        "prompt": prompt,
        "source": source,
    }
    if impersonator:
        entry["impersonated_by_id"] = impersonator.get("id", "")
        entry["impersonated_by"] = impersonator.get("username", "")
    encoded = (json.dumps(entry, ensure_ascii=False) + "\n").encode("utf-8")
    with _prompt_audit_lock:
        PROMPT_AUDIT_FILE.parent.mkdir(parents=True, exist_ok=True)
        fd = os.open(
            PROMPT_AUDIT_FILE,
            os.O_APPEND | os.O_CREAT | os.O_WRONLY,
            0o600,
        )
        try:
            os.fchmod(fd, 0o600)
            os.write(fd, encoded)
            os.fsync(fd)
        finally:
            os.close(fd)
    return entry


def _iter_prompt_audit_reverse():
    """Yield valid prompt records newest-first without loading the whole log."""
    if not PROMPT_AUDIT_FILE.exists():
        return
    block_size = 64 * 1024
    with _prompt_audit_lock, PROMPT_AUDIT_FILE.open("rb") as stream:
        stream.seek(0, os.SEEK_END)
        position = stream.tell()
        remainder = b""
        while position > 0:
            size = min(block_size, position)
            position -= size
            stream.seek(position)
            chunk = stream.read(size) + remainder
            lines = chunk.split(b"\n")
            remainder = lines[0]
            for raw in reversed(lines[1:]):
                if not raw.strip():
                    continue
                try:
                    entry = json.loads(raw)
                except (json.JSONDecodeError, UnicodeDecodeError):
                    continue
                if isinstance(entry, dict):
                    yield entry
        if remainder.strip():
            try:
                entry = json.loads(remainder)
            except (json.JSONDecodeError, UnicodeDecodeError):
                entry = None
            if isinstance(entry, dict):
                yield entry


def _read_prompt_audit(
    *,
    user_id: str = "",
    limit: int = 100,
    before: float = 0,
    cursor: str = "",
) -> list[dict]:
    prompts = []
    cursor_found = not cursor
    for entry in _iter_prompt_audit_reverse() or ():
        if user_id and entry.get("user_id") != user_id:
            continue
        if not cursor_found:
            if str(entry.get("id", "")) == cursor:
                cursor_found = True
            continue
        timestamp = float(entry.get("ts") or 0)
        if before and timestamp >= before:
            continue
        prompts.append(entry)
        if len(prompts) >= limit:
            break
    return prompts






@app.get("/api/admin/prompts")
async def api_admin_prompts(
    request: Request,
    user_id: str = "",
    limit: int = 100,
    before: float = 0,
    cursor: str = "",
):
    """Return the private, append-only human prompt audit to administrators."""
    if not _is_admin(_current_user(request)):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    safe_limit = max(1, min(int(limit or 100), 500))
    prompts = await asyncio.to_thread(
        _read_prompt_audit,
        user_id=(user_id or "").strip(),
        limit=safe_limit,
        before=max(0, float(before or 0)),
        cursor=(cursor or "").strip()[:200],
    )
    next_before = float(prompts[-1].get("ts") or 0) if len(prompts) == safe_limit else 0
    next_cursor = str(prompts[-1].get("id", "")) if len(prompts) == safe_limit else ""
    return JSONResponse({
        "prompts": prompts,
        "next_before": next_before,
        "next_cursor": next_cursor,
    })




def _read_json_file(path: Path) -> dict:
    try:
        if path.exists():
            data = json.loads(path.read_text())
            if isinstance(data, dict):
                return data
    except Exception:
        logger.debug("Failed to read %s", path, exc_info=True)
    return {}



def _write_json_file(path: Path, data: dict):
    try:
        _atomic_write_json(path, data)
    except Exception:
        logger.debug("Failed to write %s", path, exc_info=True)










def _backfill_prompt_audit(users: list[dict] | None = None) -> int:
    """Migrate existing per-user chat prompts into the global audit once."""
    if PROMPT_AUDIT_BACKFILL_MARKER.exists():
        return 0
    users = users if users is not None else _load_users()
    existing_ids = {
        str(entry.get("id", ""))
        for entry in (_iter_prompt_audit_reverse() or ())
        if entry.get("id")
    }
    records = []
    for user in users:
        for session_name, messages in _load_messages(user).items():
            if not isinstance(messages, list):
                continue
            for message in messages:
                if not isinstance(message, dict) or message.get("role") != "user":
                    continue
                prompt = message.get("text")
                if not isinstance(prompt, str) or not prompt:
                    continue
                timestamp = float(message.get("ts", 0) or 0)
                identity = "\0".join((
                    str(user.get("id", "")),
                    str(session_name),
                    repr(timestamp),
                    prompt,
                ))
                entry_id = "legacy_" + hashlib.sha256(
                    identity.encode("utf-8")
                ).hexdigest()[:24]
                if entry_id in existing_ids:
                    continue
                existing_ids.add(entry_id)
                records.append({
                    "id": entry_id,
                    "ts": timestamp,
                    "user_id": user.get("id", ""),
                    "username": user.get("username", ""),
                    "role": user.get("role", "user"),
                    "session_name": str(session_name),
                    "prompt": prompt,
                    "source": "legacy_messages_backfill",
                })
    if records:
        encoded = "".join(
            json.dumps(record, ensure_ascii=False) + "\n"
            for record in records
        ).encode("utf-8")
        with _prompt_audit_lock:
            PROMPT_AUDIT_FILE.parent.mkdir(parents=True, exist_ok=True)
            fd = os.open(
                PROMPT_AUDIT_FILE,
                os.O_APPEND | os.O_CREAT | os.O_WRONLY,
                0o600,
            )
            try:
                os.fchmod(fd, 0o600)
                remaining = memoryview(encoded)
                while remaining:
                    written = os.write(fd, remaining)
                    remaining = remaining[written:]
                os.fsync(fd)
            finally:
                os.close(fd)
    _atomic_write_json(PROMPT_AUDIT_BACKFILL_MARKER, {
        "completed_at": time.time(),
        "migrated": len(records),
    })
    _prompt_audit_summary_cache["signature"] = None
    _prompt_audit_summary_cache["data"] = {}
    return len(records)






DESCRIPTION_TTL = 0    # never auto-expire
PROGRESS_TTL = 600     # 10 minutes
REALTIME_TTL = 15      # 15 seconds — text extraction is cheap (no LLM call usually)
NOTES_TTL = 600        # 10 minutes














def _filter_sessions_for_user(sessions: list, user: dict | None) -> list:
    """Restrict a session list to sessions owned by the signed-in account."""
    if not user:
        return []
    owners = _load_session_owners()
    uid = user["id"]
    return [s for s in sessions if owners.get(s["name"], "admin") == uid]


def _session_list_for_request(request: Request, sessions: list) -> tuple[list | None, str]:
    """Restrict every workspace list to the effective account's sessions."""
    user = _current_user(request)
    return _filter_sessions_for_user(sessions, user), "mine"


def _find_session_for_user(session_name: str, user: dict | None) -> tuple:
    """Same as _find_session but enforces user ownership. Returns
    (sessions, session_dict) on success or (sessions, None) if missing OR not
    owned by `user`."""
    sessions, sess = _find_session(session_name)
    if sess is None:
        return sessions, None
    if not _user_can_access_session(user, session_name):
        return sessions, None
    return sessions, sess


# Wire services/ssh.py now that its one injected dependency exists. It is passed
# rather than imported: _find_session_for_user reaches into tmux listing and the
# user access checks, so importing it there would point the service module back
# at the application it was extracted from.
ssh_service.configure(
    find_session_for_user=_find_session_for_user,
    # Resolved through this module's attribute so tests patching
    # `app._current_user` still steer the service's ownership checks.
    current_user=lambda request: globals()["_current_user"](request),
)


# Keep `monkeypatch.setattr(app, "SSH_...")` working after the extraction.
#
# Those names now live in services/ssh.py, and the functions that read them read
# THAT module's globals. Without this forwarding, patching the re-exported copy
# on app.py would rebind a name nothing consults -- the tests would still pass
# their assertions about app.py while the service kept using real paths. That is
# the same silent-bypass failure the user-store extraction hit, so it is handled
# explicitly rather than by rewriting 33 call sites.
_SSH_FORWARDED_NAMES = frozenset(
    name for name in dir(ssh_service) if not name.startswith("__")
)

# Same forwarding for the browser service. PUBLIC_BASE_URL and ROOT_PATH are
# read inside it when building external URLs, and tests patch them on app.
# The autonomous loops hold references bound at configure() time; tests patch
# these on app, so forward the write into the service too.
# Everything the service defines, plus the app helpers it is configured with.
#
# The phase functions call siblings (`_away_send_and_wait`, the prompt loops)
# through their own module globals, and tests patch those on app to stub out the
# real agent wait. Without forwarding, the patch rebinds app's re-exported copy
# while the service keeps calling the real one -- which does not fail, it HANGS
# waiting on an agent that never replies.
_AUTONOMOUS_FORWARDED_NAMES = frozenset(
    {
        name for name in dir(autonomous_service)
        if not name.startswith("__")
    }
    | {
        "_build_project_isolation_preamble", "_ensure_codex_running", "_find_session",
        "_resume_parked_session", "_save_autonomous_state", "async_detect_activity",
        "capture_pane_full", "capture_pane_recent", "llm_call",
    }
)

_CODEX_CONFIG_FORWARDED_NAMES = frozenset(
    name for name in dir(codex_config_service) if not name.startswith("__")
)

_WATCHDOG_FORWARDED_NAMES = frozenset(
    name for name in dir(watchdog_service) if not name.startswith("__")
)

_GOOGLE_FORWARDED_NAMES = frozenset(
    name for name in dir(google_auth_service) if not name.startswith("__")
)

_PROJECTS_FORWARDED_NAMES = frozenset(
    name for name in dir(projects_service) if not name.startswith("__")
)

_SESSION_LAUNCH_FORWARDED_NAMES = frozenset(
    name for name in dir(session_launch_service) if not name.startswith("__")
)

_MEMBER_AUTH_FORWARDED_NAMES = frozenset(
    name for name in dir(member_auth_service) if not name.startswith("__")
)

_AGENT_CONFIG_FORWARDED_NAMES = frozenset(
    name for name in dir(agent_config_service) if not name.startswith("__")
)

_TERMINAL_FORWARDED_NAMES = frozenset(
    name for name in dir(terminal_service) if not name.startswith("__")
)

_STORES_FORWARDED_NAMES = frozenset(
    name for name in dir(stores_service) if not name.startswith("__")
)

_USAGE_FORWARDED_NAMES = frozenset(
    name for name in dir(usage_service) if not name.startswith("__")
)

_TMUX_FORWARDED_NAMES = frozenset(
    name for name in dir(tmux_service) if not name.startswith("__")
)

_BROWSER_FORWARDED_NAMES = frozenset(
    name for name in dir(browser_service) if not name.startswith("__")
)


import sys as _sys  # noqa: E402


class _AppModule(type(_sys.modules[__name__])):
    """Forwards SSH attribute writes to services.ssh; reads are unaffected."""

    def __setattr__(self, name, value):
        if name in _SSH_FORWARDED_NAMES:
            setattr(ssh_service, name, value)
        if name in _BROWSER_FORWARDED_NAMES:
            setattr(browser_service, name, value)
        if name in _AUTONOMOUS_FORWARDED_NAMES:
            setattr(autonomous_service, name, value)
        if name in _TMUX_FORWARDED_NAMES:
            setattr(tmux_service, name, value)
        if name in _USAGE_FORWARDED_NAMES:
            setattr(usage_service, name, value)
        if name in _STORES_FORWARDED_NAMES:
            setattr(stores_service, name, value)
        if name in _TERMINAL_FORWARDED_NAMES:
            setattr(terminal_service, name, value)
        if name in _AGENT_CONFIG_FORWARDED_NAMES:
            setattr(agent_config_service, name, value)
        if name in _MEMBER_AUTH_FORWARDED_NAMES:
            setattr(member_auth_service, name, value)
        if name in _SESSION_LAUNCH_FORWARDED_NAMES:
            setattr(session_launch_service, name, value)
        if name in _PROJECTS_FORWARDED_NAMES:
            setattr(projects_service, name, value)
        if name in _GOOGLE_FORWARDED_NAMES:
            setattr(google_auth_service, name, value)
        if name in _WATCHDOG_FORWARDED_NAMES:
            setattr(watchdog_service, name, value)
        if name in _CODEX_CONFIG_FORWARDED_NAMES:
            setattr(codex_config_service, name, value)
        super().__setattr__(name, value)


_sys.modules[__name__].__class__ = _AppModule






_CODEX_MODEL_LOADING_RE = re.compile(
    r"(?im)^[ \t]*[│|]\s*model:\s*loading\b"
)
_CODEX_INPUT_READY_TIMEOUT = 15.0


async def _wait_for_codex_input_ready(
    session_name: str,
    timeout: float = _CODEX_INPUT_READY_TIMEOUT,
) -> bool:
    """Wait out Codex's initial ``model: loading`` state before typing.

    Codex 0.146 accepts input while its model and MCP servers are still
    starting, but doing so interrupts MCP startup. Its welcome card can also
    keep the literal ``model: loading`` text after startup is usable, so the
    marker activates a bounded grace period rather than a permanent block.
    Established busy sessions continue to accept queued follow-ups immediately.
    """
    pane = await asyncio.to_thread(capture_pane_recent, session_name, 40)
    if not _CODEX_MODEL_LOADING_RE.search(pane):
        return True

    deadline = time.monotonic() + max(0.0, timeout)
    while time.monotonic() < deadline:
        await asyncio.sleep(0.25)
        pane = await asyncio.to_thread(capture_pane_recent, session_name, 40)
        if pane and not _CODEX_MODEL_LOADING_RE.search(pane):
            return True

    logger.info(
        "Codex still shows its loading welcome card for session '%s' after "
        "%.1fs; submitting after the startup grace period",
        session_name,
        timeout,
    )
    return True






# Track auto-approve state to avoid re-triggering
_auto_approve_sent: dict[str, float] = {}





_AUTONOMOUS_KEYWORDS = [
    "don't ask", "without asking", "bypass", "skip permission",
    "autonomous", "all permissions", "proceed without",
    "do everything", "yes to all", "approve all",
    "don't confirm", "without confirm", "skip confirm",
    "no further", "without further",
]


def _check_auto_approve(session_name: str, visible: str):
    """Detect Codex permission prompts and numbered question prompts,
    then auto-select the most autonomous / 'just do it' option."""
    # Don't re-trigger within 10 seconds
    last = _auto_approve_sent.get(session_name, 0)
    if time.time() - last < 10:
        return

    lines = visible.split("\n")

    # --- Strategy 1: Permission prompt with "Yes, and bypass" ---
    option2_line = -1
    selected_line = -1
    for i, line in enumerate(lines):
        stripped = line.strip()
        if re.search(r'2\.\s+Yes.*bypass', stripped):
            option2_line = i
        if stripped.startswith('❯') or stripped.startswith('>'):
            selected_line = i

    if option2_line >= 0 and selected_line >= 0:
        downs = option2_line - selected_line
        if downs >= 0:
            _send_option(session_name, downs)
            return

    # --- Strategy 2: Numbered question prompt (1. / 2. / 3. style) ---
    # Codex sometimes asks the user to pick from numbered options after planning.
    # We look for a list of numbered options and pick the most autonomous one.
    numbered_options = {}  # line_index -> (number, text)
    for i, line in enumerate(lines):
        stripped = line.strip()
        m = re.match(r'^(\d+)[.\-\)]\s+(.+)', stripped)
        if m:
            numbered_options[i] = (int(m.group(1)), m.group(2))

    if len(numbered_options) >= 2:
        # Find the option that means "do it all, don't ask again"
        best_line = None
        best_score = -1
        for line_idx, (num, text) in numbered_options.items():
            lower = text.lower()
            score = sum(1 for kw in _AUTONOMOUS_KEYWORDS if kw in lower)
            # Also favor option 1 as tiebreaker (usually the most autonomous)
            if score > best_score or (score == best_score and best_line is not None
                                      and num < numbered_options.get(best_line, (999, ""))[0]):
                best_score = score
                best_line = line_idx

        # Only act if we found a clear autonomous option (keyword match)
        # or if there are exactly 2-3 options and option 1 mentions doing/proceeding
        if best_score > 0 and best_line is not None:
            target_num = numbered_options[best_line][0]
            # Type the number and press Enter
            try:
                subprocess.run(
                    ["tmux", "send-keys", "-t", session_name, "-l", str(target_num)],
                    capture_output=True, text=True, timeout=3
                )
                subprocess.run(
                    ["tmux", "send-keys", "-t", session_name, "Enter"],
                    capture_output=True, text=True, timeout=3
                )
                _auto_approve_sent[session_name] = time.time()
            except Exception:
                logger.debug("Auto-approve send failed for '%s'", session_name, exc_info=True)
            return

    # --- Strategy 3: AskUserQuestion with labeled options (cursor-based) ---
    # Codex sometimes presents options where ❯ is the selector and
    # options contain labels. Pick the one with autonomous keywords.
    if selected_line >= 0:
        option_lines = []
        for i, line in enumerate(lines):
            stripped = line.strip()
            # Options in a cursor-based list start with ❯, >, or spaces (unselected)
            if re.match(r'^[❯>\s]\s+\S', stripped):
                option_lines.append((i, stripped.lstrip('❯> ')))
        if len(option_lines) >= 2:
            autonomous_target = None
            for _, (line_i, text) in enumerate(option_lines):
                lower = text.lower()
                for kw in _AUTONOMOUS_KEYWORDS:
                    if kw in lower:
                        autonomous_target = line_i
                        break
                if autonomous_target is not None:
                    break
            if autonomous_target is not None:
                downs = autonomous_target - selected_line
                if downs >= 0:
                    _send_option(session_name, downs)
                    return


def _send_option(session_name: str, downs: int):
    """Send Down arrow keys + Enter to select an option in a tmux pane."""
    try:
        for _ in range(downs):
            subprocess.run(
                ["tmux", "send-keys", "-t", session_name, "Down"],
                capture_output=True, text=True, timeout=3
            )
        subprocess.run(
            ["tmux", "send-keys", "-t", session_name, "Enter"],
            capture_output=True, text=True, timeout=3
        )
        _auto_approve_sent[session_name] = time.time()
    except Exception:
        logger.debug("Failed to send option keys to '%s'", session_name, exc_info=True)








async def llm_call(system_prompt: str, user_content: str, max_tokens: int = 200,
                   response_format: dict = None) -> str:
    start = time.time()
    try:
        kwargs = dict(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_content},
            ],
            max_tokens=max_tokens,
            temperature=0.3,
        )
        if response_format:
            kwargs["response_format"] = response_format
        resp = await asyncio.wait_for(
            client.chat.completions.create(**kwargs),
            timeout=45,
        )
        duration = time.time() - start
        tokens_used = getattr(resp.usage, "total_tokens", 0) if resp.usage else 0
        logger.debug("LLM call completed in %.1fs, %d tokens", duration, tokens_used)
        return resp.choices[0].message.content.strip()
    except asyncio.TimeoutError:
        duration = time.time() - start
        logger.error("LLM call timed out after %.1fs", duration)
        return ""
    except Exception as e:
        duration = time.time() - start
        logger.error("LLM call failed after %.1fs: %s", duration, e)
        # Return empty string (not the error text) so callers don't cache the
        # error as content. Downstream keyword checks (`"CONTINUE" not in ...`,
        # `"LEGITIMATE" in ...`) treat empty as a no-op, which is the right
        # fail-safe behavior.
        return ""


async def get_title_and_description(session_name: str, full_output: str) -> tuple:
    """Return (title, description) for a session."""
    lines = full_output.split("\n")
    early = "\n".join(lines[:150])
    mid_start = len(lines) // 3
    middle = "\n".join(lines[mid_start:mid_start + 80])
    context = f"=== EARLIEST OUTPUT (first 150 lines) ===\n{early}\n\n=== MIDDLE SECTION ===\n{middle}"
    truncated = context[:4000]

    title_coro = llm_call(
        system_prompt=(
            "Given terminal output from a tmux session, produce a SHORT title (3-6 words) "
            "naming the project or task. Use the actual project name or directory if visible. "
            "Examples: 'monitor-app LLM re-match', 'tmux-dashboard project', "
            "'Next.js frontend build'. "
            "Return ONLY the title, no quotes, no punctuation at the end."
        ),
        user_content=f"tmux session '{session_name}':\n\n{truncated}",
        max_tokens=30,
    )
    desc_coro = llm_call(
        system_prompt=(
            "You summarize what a terminal session is for. Write ONE short plain sentence. "
            "Be informative and specific — mention the tool, the actual project name, and "
            "what it does or where it runs if you can tell. "
            "Write like a human would casually describe it to a colleague.\n"
            "GOOD examples:\n"
            "- 'Codex working on the product monitoring app at monitor.grabo.cc'\n"
            "- 'Building and testing the tmux-dashboard FastAPI service'\n"
            "- 'Running a data migration script for the user database'\n"
            "BAD examples (too verbose/robotic):\n"
            "- 'This tmux session is for the Codex AI assistant working on...'\n"
            "- 'The session involves running and debugging an LLM-based...'\n"
            "Keep it under 20 words. No filler phrases. No 'This session is for...'."
        ),
        user_content=f"tmux session '{session_name}':\n\n{truncated}",
        max_tokens=60,
    )
    title, description = await asyncio.gather(title_coro, desc_coro)
    return title, description


async def get_progress(session_name: str, full_output: str) -> str:
    lines = full_output.split("\n")
    total = len(lines)
    slices = [("BEGINNING", "\n".join(lines[:60]))]
    if total > 200:
        q1 = total // 4
        slices.append(("QUARTER", "\n".join(lines[q1:q1 + 50])))
    if total > 300:
        mid = total // 2
        slices.append(("MIDDLE", "\n".join(lines[mid:mid + 50])))
    if total > 400:
        q3 = (total * 3) // 4
        slices.append(("THREE-QUARTER", "\n".join(lines[q3:q3 + 50])))
    slices.append(("RECENT", "\n".join(lines[-60:])))
    context = "\n\n".join(f"=== {label} ===\n{text}" for label, text in slices)
    return await llm_call(
        system_prompt=(
            "Summarize what was accomplished in this terminal session so far. "
            "Write 1-3 short plain sentences listing concrete things that were built, "
            "fixed, or completed. Use casual first-person plural ('we') and past tense. "
            "Focus on WHAT was done, not HOW (don't mention commands, bash, git, etc.).\n"
            "GOOD example: 'Built a price parser module and multi-tier classifier. "
            "Improved scraper extraction and finished the analytics dashboard.'\n"
            "BAD example: 'Several key tasks were completed including building modules "
            "and running scripts. Files such as matching.py were referenced.'\n"
            "Be condensed. Under 40 words. No filler."
        ),
        user_content=f"tmux session '{session_name}' sampled history:\n\n{context[:5000]}",
        max_tokens=100,
    )








# Agent CLIs draw their prompt and message bullets with different glyphs across
# versions: Codex used '❯'/'●' and now uses '›'/'•'. Matching only the old pair
# made every pane scrape return nothing after a CLI upgrade, which silently
# stopped chat replies. Match the known set instead of a single character.
_AGENT_PROMPT_GLYPHS = ("\u276f", "\u203a", ">")
_AGENT_TEXT_GLYPHS = ("\u25cf", "\u2022")

# Placeholders the composer shows when nothing has been typed. Treating one as a
# submitted prompt would split the pane below the agent's reply and lose it.
_AGENT_INPUT_PLACEHOLDERS = (
    "ask codex to do anything",
    "ask claude to do anything",
)


def _is_agent_input_placeholder(text: str) -> bool:
    """True for the agent composer's own placeholder rather than a real prompt."""
    probe = (text or "").strip().lower().rstrip(".\u2026")
    return not probe or probe in _AGENT_INPUT_PLACEHOLDERS


def _extract_codex_text(terminal_output: str) -> str:
    """Extract Codex's human-readable text from terminal output.

    Codex's terminal output uses these patterns:
    - '● Text here...' = Codex's spoken text (INCLUDE)
    - '● ToolName(args...)' = Tool call (EXCLUDE)
    - '  ⎿ ...' = Tool output / indented continuation (EXCLUDE)
    - '✻ ...' = Status line (EXCLUDE)
    - Lines starting with '❯' = User prompt (EXCLUDE)

    Returns extracted text paragraphs joined by newlines.
    """
    lines = terminal_output.split("\n")
    # Known tool prefixes that indicate a tool call, not text
    tool_names = (
        "Bash(", "Read(", "Edit(", "Write(", "Grep(", "Glob(", "Task(",
        "WebFetch(", "WebSearch(", "NotebookEdit(", "AskUser", "Skill(",
        "EnterPlanMode", "ExitPlanMode", "TaskCreate(", "TaskUpdate(",
        "TaskGet(", "TaskList(", "TodoWrite(", "mcp__",
    )
    text_blocks = []
    current_block = []
    in_text_block = False
    in_tool_block = False

    for line in lines:
        stripped = line.strip()
        # Detect start of a Codex text block (● followed by text, not a tool)
        if stripped[:1] in _AGENT_TEXT_GLYPHS:
            content_after = stripped[1:].strip()
            # Check if this is a tool call
            is_tool = any(content_after.startswith(t) for t in tool_names) or _is_pane_residue(content_after)
            if is_tool:
                # End any current text block
                if current_block:
                    text_blocks.append("\n".join(current_block))
                    current_block = []
                in_text_block = False
                in_tool_block = True
            else:
                # This is Codex's spoken text
                if current_block:
                    text_blocks.append("\n".join(current_block))
                    current_block = []
                in_text_block = True
                in_tool_block = False
                if content_after:
                    current_block.append(content_after)
        elif stripped[:1] in ("\u23bf", "\u2514"):
            # Tool output — skip. '└' is what the current Codex CLI draws for a
            # tool result ("└ Read SKILL.md"); '⎿' is the older/Claude form.
            in_text_block = False
            in_tool_block = True
        elif stripped[:1] in ("\u273b", "\u25e6") or stripped[:1] in _AGENT_PROMPT_GLYPHS:
            # Status/spinner line ('◦ Searching the web') or user prompt — end block
            if current_block:
                text_blocks.append("\n".join(current_block))
                current_block = []
            in_text_block = False
            in_tool_block = False
        elif stripped.startswith("───") or stripped == "":
            # Separator or blank line
            if in_text_block and current_block:
                # Blank line within text block — preserve as paragraph break
                if stripped == "":
                    current_block.append("")
                else:
                    text_blocks.append("\n".join(current_block))
                    current_block = []
                    in_text_block = False
        elif in_text_block:
            # Continuation of the agent's text (indented lines under ●)
            if _is_pane_residue(stripped):
                continue
            current_block.append(stripped)
        elif in_tool_block:
            # Skip tool output continuation
            pass

    if current_block:
        text_blocks.append("\n".join(current_block))

    return "\n\n".join(b for b in text_blocks if b.strip())


def _extract_codex_response_since_last_user(terminal_output: str) -> str:
    """Extract Codex's text response since the last user message (❯ prompt).

    Scans backward from the end of terminal output to find the last ❯ prompt,
    then extracts all Codex text blocks after it.
    """
    lines = terminal_output.split("\n")
    # Find the last user prompt line (❯)
    last_prompt_idx = -1
    for i in range(len(lines) - 1, -1, -1):
        stripped = lines[i].strip()
        # Codex changed its prompt glyph between CLI versions ('❯' -> '›'), and
        # Claude uses '>'. Accept all of them so a CLI upgrade cannot silently
        # stop chat replies from being captured.
        if stripped[:1] not in _AGENT_PROMPT_GLYPHS or len(stripped) <= 1:
            continue
        # The composer sits at the BOTTOM of an idle pane showing its
        # placeholder ("Ask Codex to do anything"). Splitting there would throw
        # away the reply printed above it, so skip the empty input box and keep
        # looking for the prompt that carries real submitted text.
        if _is_agent_input_placeholder(stripped[1:].strip()):
            continue
        last_prompt_idx = i
        break

    # If no user prompt found, use all output
    if last_prompt_idx < 0:
        section = terminal_output
    else:
        section = "\n".join(lines[last_prompt_idx + 1:])

    return _extract_codex_text(section)


_extract_claude_response_since_last_user = _extract_codex_response_since_last_user


async def get_realtime(session_name: str) -> str:
    """Extract Codex's human-readable text from recent terminal output.

    Instead of LLM summarization, directly parses Codex's text output.
    Only falls back to LLM summarization if extracted text is very long (>500 words).
    """
    recent = await asyncio.to_thread(capture_pane_recent, session_name, 150)

    extracted = _extract_codex_response_since_last_user(recent)

    if not extracted.strip():
        return ""

    # If the extracted text is short enough, return it directly
    word_count = len(extracted.split())
    if word_count <= 500 or not AUTO_SUMMARIZER_ENABLED:
        return extracted.strip()

    # Text is very long — summarize it
    return await llm_call(
        system_prompt=(
            "Summarize Codex's response text into a concise message (2-4 sentences). "
            "Keep concrete details: file paths, URLs, numbers, outcomes. "
            "Write in first person as Codex would. Under 80 words."
        ),
        user_content=f"Codex's response text:\n\n{extracted[:4000]}",
        max_tokens=200,
    )


def _output_signature(text: str) -> str:
    """Normalized hash of terminal output, used to skip LLM re-summarization when
    the output hasn't meaningfully changed. Insensitive to trailing whitespace
    and runs of blank lines (those flap a lot during spinners / redraws)."""
    if not text:
        return ""
    out = []
    blank = False
    for ln in text.split("\n"):
        ln = ln.rstrip()
        if not ln:
            if not blank:
                out.append("")
            blank = True
        else:
            out.append(ln)
            blank = False
    return hashlib.sha256("\n".join(out).encode("utf-8", "replace")).hexdigest()


async def get_session_data(session_name: str, force_all: bool = False) -> dict:
    now = time.time()
    # IMPORTANT: use setdefault so `entry` is the SAME object as cache[session_name].
    # This prevents a race with api_send_command where a concurrent /send could
    # add a user message to a different cache entry, then get clobbered when this
    # function reassigns cache[session_name] below after awaiting LLM calls.
    entry = cache.setdefault(session_name, {})
    if "messages" not in entry:
        entry["messages"] = _load_session_messages(session_name)
    if "notes" not in entry:
        entry["notes"] = _load_session_notes(session_name)

    has_description = "description" in entry
    has_progress = "progress" in entry
    has_notes = "notes" in entry
    progress_ttl_expired = (now - entry.get("progress_at", 0)) >= PROGRESS_TTL
    notes_ttl_expired = (now - entry.get("notes_at", 0)) >= NOTES_TTL

    # Capture pane up front when any task might fire, so we can compare a
    # content signature against the last successful summary and skip the LLM
    # call when nothing has actually changed. Capture is a cheap subprocess
    # call relative to an OpenAI request.
    full_output = None
    sig = ""
    might_need = AUTO_SUMMARIZER_ENABLED and (force_all or (
        not has_description
        or not has_progress or progress_ttl_expired
        or not has_notes or notes_ttl_expired
    ))
    if might_need:
        full_output = capture_pane_full(session_name)
        sig = _output_signature(full_output)

    # Staleness gate: skip the LLM call when the captured output hasn't changed
    # since the last successful summary. Force / missing cache still bypass.
    need_description = force_all or not has_description or (
        bool(sig) and entry.get("description_sig") != sig
    )
    need_progress = force_all or not has_progress or (
        progress_ttl_expired and bool(sig) and entry.get("progress_sig") != sig
    )
    need_notes = force_all or not has_notes or (
        notes_ttl_expired and bool(sig) and entry.get("notes_sig") != sig
    )

    # Auto-summarizer removed: never issue LLM title/description/progress/notes calls.
    if not AUTO_SUMMARIZER_ENABLED:
        need_description = need_progress = need_notes = False

    tasks = {}
    if need_description:
        tasks["title_desc"] = get_title_and_description(session_name, full_output)
    if need_progress:
        tasks["progress"] = get_progress(session_name, full_output)
    if need_notes:
        tasks["notes"] = get_notes(session_name, full_output, entry.get("notes", ""), entry.get("messages", []))
    if force_all or "realtime" not in entry or (now - entry.get("realtime_at", 0)) >= REALTIME_TTL:
        tasks["realtime"] = get_realtime(session_name)

    # Simplified Chat tab: when Codex is idle, (re)generate ONE plain-language
    # recap of its whole last turn. Triggered promptly on the busy->idle edge,
    # then at most every REALTIME_TTL; the signature gate inside get_chat_summary
    # skips the LLM call when the turn output hasn't changed.
    _chat_status = _activity_state.get(session_name, {}).get("status", "")
    if _chat_status == "busy":
        entry["_chat_was_busy"] = True
    _summary_due = (now - entry.get("chat_summary_at", 0)) >= REALTIME_TTL
    if _chat_status == "idle" and (force_all or entry.get("_chat_was_busy") or _summary_due):
        # Pass the last user message so the right transcript is matched when
        # several sessions share a cwd (project dir).
        _last_user = next((m.get("text", "") for m in reversed(entry.get("messages", []))
                           if m.get("role") == "user"), "")
        tasks["chat_summary"] = get_chat_summary(session_name, entry.get("chat_summary_sig", ""), _last_user)
        entry["chat_summary_at"] = now
        entry["_chat_was_busy"] = False

    if tasks:
        results = await asyncio.gather(*tasks.values())
        result_map = dict(zip(tasks.keys(), results))
        if "title_desc" in result_map:
            title, description = result_map["title_desc"]
            # Only commit if at least one of the parallel calls succeeded.
            # Empty strings come from llm_call's error path -- preserve prior
            # cached value (and don't update sig, so we'll retry next round).
            if (title and title.strip()) or (description and description.strip()):
                entry["title"] = title or entry.get("title", "")
                entry["description"] = description or entry.get("description", "")
                entry["description_at"] = now
                entry["description_sig"] = sig
        if "progress" in result_map:
            progress = result_map["progress"]
            if progress and progress.strip():
                entry["progress"] = progress
                entry["progress_at"] = now
                entry["progress_sig"] = sig
        if "notes" in result_map:
            notes = result_map["notes"]
            if notes and notes.strip():
                entry["notes"] = notes
                entry["notes_at"] = now
                entry["notes_sig"] = sig
        if "realtime" in result_map:
            realtime = result_map["realtime"]
            if realtime and realtime.strip():
                # Kept for the Info tab's "live" field only — NOT pushed into the
                # Chat tab (that now shows the idle summary below, not raw text).
                entry["realtime"] = realtime
                entry["realtime_at"] = now
        if "chat_summary" in result_map:
            cs = result_map["chat_summary"]
            if cs and (cs.get("summary") or cs.get("full")):
                _append_assistant_msg(entry, cs.get("summary", ""), now,
                                      full=cs.get("full", ""), links=cs.get("links") or [])
                entry["chat_summary_sig"] = cs["sig"]

    cache[session_name] = entry
    if entry.get("messages"):
        _save_messages()
    if entry.get("notes"):
        _save_notes()
    return entry


def _msg_similarity(a: str, b: str) -> float:
    """Quick word-overlap similarity between two strings."""
    wa = set(a.lower().split())
    wb = set(b.lower().split())
    if not wa or not wb:
        return 0.0
    return len(wa & wb) / max(len(wa), len(wb))


def _append_assistant_msg(entry: dict, text: str, ts: float, full: str = "", links: list = None):
    """Update or append an assistant message for the current Codex response.

    Instead of appending multiple assistant messages per response, we maintain
    a single assistant message after the last user message that gets updated
    as Codex produces more text. This keeps the chat clean:
    user → single assistant response → user → single assistant response.
    """
    if not (text or "").strip() and not (full or "").strip():
        return
    text = text or ""
    msgs = entry.setdefault("messages", [])

    # Find the last user message index
    last_user_idx = -1
    for i in range(len(msgs) - 1, -1, -1):
        if msgs[i]["role"] == "user":
            last_user_idx = i
            break

    # Find the last assistant message after the last user message
    last_assistant_idx = -1
    for i in range(len(msgs) - 1, -1, -1):
        if msgs[i]["role"] == "assistant" and i > last_user_idx:
            last_assistant_idx = i
            break

    if last_assistant_idx >= 0:
        prev = msgs[last_assistant_idx]
        # The recap is regenerated by an LLM and wobbles between near-identical
        # wordings, so it alone can't decide whether anything changed — the full
        # reply and the deliverables can grow while the recap reads the same.
        same_full = (prev.get("full") or "") == (full or "")
        same_links = (prev.get("links") or []) == (links or [])
        if prev["text"] == text and same_full and same_links:
            return  # No change
        if _msg_similarity(prev["text"], text) > 0.9 and same_full and same_links:
            return  # Too similar, skip
        prev["text"] = text
        prev["ts"] = ts
        prev["full"] = full or ""
        prev["links"] = links or []
    else:
        # No assistant message after last user message — create one
        msgs.append({"role": "assistant", "text": text, "ts": ts,
                     "full": full or "", "links": links or []})

    _save_messages()


# --- Simplified Chat tab: one plain-language recap per completed Codex turn ---
#
# The Chat tab is for non-developer users who shouldn't see raw terminal/tool
# output. Instead of streaming Codex's live text into the chat, we wait until
# Codex goes idle and then post ONE short summary of everything it produced
# that turn. The clean source of "everything Codex output" is the session's
# JSONL transcript (assistant `text` blocks since the last genuine user
# message) — far cleaner than scraping the pane. We fall back to the pane scrape
# when no transcript exists.

def _read_jsonl_tail(path: str, max_bytes: int = 1_500_000) -> list:
    """Return the trailing lines of a (possibly huge) JSONL file cheaply."""
    try:
        size = os.path.getsize(path)
        with open(path, "rb") as f:
            if size > max_bytes:
                f.seek(size - max_bytes)
                f.readline()  # discard the partial first line
            data = f.read()
        return data.decode("utf-8", "replace").splitlines()
    except Exception:
        return []


def _codex_event_payload(event: dict, event_type: str) -> dict | None:
    payload = event.get("payload")
    if (
        event.get("type") == "event_msg"
        and isinstance(payload, dict)
        and payload.get("type") == event_type
    ):
        return payload
    return None


def _claude_turn_text(event: dict) -> str | None:
    """Assistant text from one Claude transcript line, or None.

    Claude writes a different shape from Codex: `{"type": "assistant",
    "message": {"content": [{"type": "text", "text": ...}]}}` rather than an
    `event_msg`/`agent_message` envelope. Without this the extractor found
    nothing in a Claude transcript and silently fell back to scraping the
    terminal pane -- which returns the WRAPPED, on-screen text, so long replies
    were cut off and tables arrived mangled by the terminal's box drawing.

    Tool-use blocks are skipped: only what the agent actually said is a reply.
    """
    if event.get("type") != "assistant":
        return None
    message = event.get("message")
    if not isinstance(message, dict):
        return None
    content = message.get("content")
    if isinstance(content, str):
        return content.strip() or None
    if not isinstance(content, list):
        return None
    parts = [
        block.get("text", "")
        for block in content
        if isinstance(block, dict) and block.get("type") == "text"
    ]
    joined = "\n".join(part for part in parts if part.strip()).strip()
    return joined or None


def _claude_is_user_turn(event: dict) -> bool:
    """A real human prompt, not a tool result echoed back as a user message."""
    if event.get("type") != "user":
        return False
    message = event.get("message")
    if not isinstance(message, dict):
        return False
    content = message.get("content")
    if isinstance(content, str):
        return bool(content.strip())
    if isinstance(content, list):
        # A tool result arrives as a "user" event too; it is not a new prompt.
        return any(
            isinstance(block, dict) and block.get("type") == "text"
            for block in content
        )
    return False


def _norm_text(s: str) -> str:
    return " ".join((s or "").split()).lower()


def _last_genuine_user_text(path: str) -> str:
    """The most recent Codex user_message recorded in a rollout file."""
    last = ""
    for ln in _read_jsonl_tail(path):
        ln = ln.strip()
        if not ln:
            continue
        try:
            o = json.loads(ln)
        except Exception:
            continue
        payload = _codex_event_payload(o, "user_message")
        if payload and isinstance(payload.get("message"), str):
            last = payload["message"]
    return last.strip()


def _resolve_session_transcript(session_name: str, last_user_text: str):
    """Pick the transcript that belongs to THIS tmux session.

    Several Codex sessions can share one cwd, so newest-mtime is not a reliable
    per-session signal — it
    can point at a sibling session that happened to write more recently. Instead
    match on content: the transcript whose latest human prompt equals the command
    the dashboard last sent to this session. Returns None when it can't be
    disambiguated (caller falls back to this session's own terminal pane)."""
    files = _find_session_jsonl_files(session_name)
    if not files:
        return None
    if len(files) == 1:
        return files[0]
    want = _norm_text(last_user_text)
    if not want:
        return None  # nothing to match on — don't guess across sessions
    key = want[:60]
    for path in sorted(files, key=os.path.getmtime, reverse=True):
        lu = _norm_text(_last_genuine_user_text(path))
        if lu and (lu.startswith(key) or key in lu):
            return path
    return None


def _extract_last_assistant_turn(session_name: str, last_user_text: str = "") -> str:
    """Clean text of Codex's most recent turn: every agent_message event
    since the last user_message in the rollout. Reasoning and tool
    calls/results are excluded. Falls back to this session's terminal pane when
    the transcript can't be unambiguously matched to this session."""
    path = _resolve_session_transcript(session_name, last_user_text)
    if path:
        try:
            texts: list = []
            for ln in _read_jsonl_tail(path):
                ln = ln.strip()
                if not ln:
                    continue
                try:
                    o = json.loads(ln)
                except Exception:
                    continue
                # Both agents' transcript shapes, so a Claude session reads its
                # real reply text instead of falling through to the pane scrape.
                if _codex_event_payload(o, "user_message") or _claude_is_user_turn(o):
                    texts = []
                    continue
                payload = _codex_event_payload(o, "agent_message")
                if payload:
                    text = payload.get("message")
                    if isinstance(text, str) and text.strip():
                        texts.append(text.strip())
                    continue
                claude_text = _claude_turn_text(o)
                if claude_text:
                    texts.append(claude_text)
            if texts:
                return "\n\n".join(texts).strip()
        except Exception:
            logger.debug("transcript turn extraction failed", exc_info=True)
    # Fallback: scrape the visible terminal.
    try:
        recent = capture_pane_recent(session_name, 200)
        return _extract_codex_response_since_last_user(recent).strip()
    except Exception:
        return ""


def _trim_plain(text: str, limit: int = 600) -> str:
    """Trim to a sentence/word boundary near `limit`, adding an ellipsis."""
    text = (text or "").strip()
    if len(text) <= limit:
        return text
    cut = text[:limit]
    for sep in (". ", "! ", "? ", "\n"):
        i = cut.rfind(sep)
        if i > limit * 0.5:
            return cut[: i + 1].strip() + " …"
    i = cut.rfind(" ")
    return (cut[:i] if i > 0 else cut).strip() + " …"


# --- Deliverables: the links and files a turn actually produced ---------------
#
# The Chat tab used to show a 70-word recap and nothing else, which loses the one
# thing the reader came for: where the work IS. The user is remote — a path in
# the recap ("saved to /home/.../REPORT.md") is unreachable from their phone — so
# every file that really exists is handed over as a /file?path= link, which the
# frontend resolves against the dashboard's own origin and which sits behind the
# same login as the dashboard.
_TURN_URL_RE = re.compile(r"https?://[^\s<>()\[\]{}\"'`]+")
_TURN_PATH_RE = re.compile(
    r"(?:^|[\s(\[|>*`])"
    r"((?:~|/(?:home|root|var|opt|srv|usr|etc|tmp|mnt|media|data))/[^\s<>()\[\]{}\"'`,;]+)",
    re.M,
)
_LINK_TRIM = ".,;:!?)]}'\"*`>"


def _link_label(url: str) -> str:
    """A chip caption: the last meaningful path segment, else the host."""
    try:
        from urllib.parse import urlsplit
        u = urlsplit(url)
        seg = [s for s in (u.path or "").split("/") if s]
        if seg and (len(seg[-1]) > 2 or "." in seg[-1]):
            return seg[-1][:48]
        return (u.netloc or url)[:48]
    except Exception:
        return url[:48]


def _extract_turn_links(text: str, limit: int = 14) -> list:
    """Web links and on-disk deliverables mentioned in one assistant turn.

    Files are only offered when they exist right now — a path the agent merely
    talked about would produce a link that 404s, which is worse than no link."""
    out: list = []
    seen: set = set()
    body = text or ""
    for m in _TURN_URL_RE.finditer(body):
        u = m.group(0).rstrip(_LINK_TRIM)
        while u and u.count("(") < u.count(")"):
            u = u[:-1].rstrip(_LINK_TRIM)
        if not u or u in seen:
            continue
        seen.add(u)
        out.append({"kind": "url", "href": u, "label": _link_label(u)})
        if len(out) >= limit:
            return out
    for m in _TURN_PATH_RE.finditer(body):
        p = m.group(1).rstrip(_LINK_TRIM)
        if not p or p in seen:
            continue
        seen.add(p)
        try:
            real = os.path.expanduser(p)
            if not os.path.exists(real):
                continue
            is_dir = os.path.isdir(real)
        except Exception:
            continue
        out.append({
            "kind": "file",
            "path": p,
            "label": (os.path.basename(real.rstrip("/")) or p)[:48],
            "dir": is_dir,
        })
        if len(out) >= limit:
            break
    return out


# The stored copy of a turn is capped only to stop one runaway reply bloating the
# per-user message file forever. Real prose never gets near this.
_CHAT_FULL_MAX = 20000


def _turn_full_text(text: str) -> str:
    body = (text or "").strip()
    if len(body) <= _CHAT_FULL_MAX:
        return body
    return body[:_CHAT_FULL_MAX].rstrip() + "\n\n[… reply truncated at 20,000 characters — open the Terminal view for the rest]"


async def _summarize_turn(text: str) -> str:
    """Short, plain-language recap of one assistant turn for non-dev users."""
    body = (text or "").strip()
    if not body:
        return ""
    summary = await llm_call(
        system_prompt=(
            "You summarize what an AI coding assistant just did, for a "
            "non-technical user who cannot see the terminal. Write a short, "
            "plain, friendly recap (1-3 sentences, under 70 words) of what was "
            "done, found, or decided. Keep concrete outcomes (what changed, what "
            "was created/fixed, any link, number, or result). No code blocks, no "
            "file-path jargon unless essential, no preamble or sign-off. Write in "
            "first person as the assistant ('I ...'). If the assistant asked the "
            "user something, state the question."
        ),
        user_content=f"The assistant's full output for this turn:\n\n{body[:8000]}",
        max_tokens=170,
    )
    summary = (summary or "").strip()
    # LLM unavailable/failed -> fall back to the assistant's own words (already
    # clean prose from the transcript), trimmed, rather than raw terminal output.
    return summary or _trim_plain(body, 600)


async def _capture_agent_reply(session_name: str) -> bool:
    """Record the agent's finished turn into the session's chat store.

    Extracted so the IDE chat panel can pull replies without depending on the
    dashboard being open in another tab. Mirrors the poll's gates: only when the
    agent is idle, and only when the turn signature actually changed.
    """
    try:
        entry = cache.setdefault(session_name, {})
        if _activity_state.get(session_name, {}).get("status", "") == "busy":
            # Note that a turn is in flight so the next idle poll captures it.
            entry["_chat_was_busy"] = True
            return False
        last_user = next(
            (m.get("text", "") for m in reversed(entry.get("messages", []) or [])
             if m.get("role") == "user"),
            "",
        )
        summary = await get_chat_summary(
            session_name, entry.get("chat_summary_sig", ""), last_user, want_summary=False
        )
        if not summary or not (summary.get("summary") or summary.get("full")):
            return False
        _append_assistant_msg(
            entry, summary.get("summary", ""), time.time(),
            full=summary.get("full", ""), links=summary.get("links") or [],
        )
        entry["chat_summary_sig"] = summary["sig"]
        entry["chat_summary_at"] = time.time()
        entry["_chat_was_busy"] = False
        cache[session_name] = entry
        _save_messages()
        return True
    except Exception:
        logger.debug("IDE chat reply capture failed for %s", session_name, exc_info=True)
        return False


# An agent status line ("✻ Finding … (1m 49s · esc to interrupt)") is not a
# reply. Detection should stop the capture happening at all, but if a turn ever
# arrives that is nothing but status chrome, recording it would pin the chat to
# that line forever: the signature is stored, so the real answer that follows
# looks unchanged and is never captured. That is the "chat stuck" symptom.
# Two shapes count as status chrome, and nothing else. A bare sentence that
# merely ends in "..." is a real reply and must not be swallowed.
_RE_TURN_IS_STATUS_ONLY = re.compile(
    r"^\s*(?:"
    # 1. Leading spinner glyph followed by a phrase.
    r"[✶✽✻☆◆●⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏✢✦✧✹✵✴✸❋❊❉✺◇◈⟡⊛⊕⊗▸▹►▻◉◎★♦♢⬡⬢]\s*\S[^\n]*"
    r"|"
    # 2. No glyph, but the agent's own timing/interrupt footer.
    r"\S[^\n]*\(\s*\d+\s*[smh][^)]*\)"
    r")\s*$"
)


def _turn_is_only_status(text: str) -> bool:
    """True when a captured turn is just the agent's working indicator."""
    body = (text or "").strip()
    if not body:
        return True
    lines = [line for line in body.splitlines() if line.strip()]
    if len(lines) > 2:
        return False
    return all(_RE_TURN_IS_STATUS_ONLY.match(line.strip()) for line in lines)


async def get_chat_summary(
    session_name: str, prev_sig: str, last_user_text: str = "", want_summary: bool = True
):
    """Return {'sig','summary','full','links'} for the latest turn, or None when
    unchanged/empty.

    `summary` is the short recap; `full` is what the agent actually wrote, which
    is what the Chat tab shows. The recap alone was cutting every answer off
    after a couple of lines and dropping the links with it."""
    turn_text = await asyncio.to_thread(_extract_last_assistant_turn, session_name, last_user_text)
    turn_text = (turn_text or "").strip()
    if not turn_text or _turn_is_only_status(turn_text):
        return None
    sig = _output_signature(turn_text)
    if sig == prev_sig:
        return None  # this exact output was already summarized
    full = _turn_full_text(turn_text)
    # The IDE chat renders `full`, so summarising there is a whole extra LLM
    # round trip of latency before the reply can appear. Only the dashboard
    # Chat tab needs the plain-language recap.
    summary = (await _summarize_turn(turn_text) or "").strip() if want_summary else ""
    if not summary and not full:
        return None
    links = await asyncio.to_thread(_extract_turn_links, turn_text)
    return {"sig": sig, "summary": summary or _trim_plain(full, 600), "full": full, "links": links}


def build_session_response(sess: dict, data: dict, activity: dict = None) -> dict:
    if activity is None:
        activity = detect_activity(sess["name"])
    lifecycle = _session_lifecycle.get(sess["name"])
    autonomous = _load_autonomous_state().get(sess["name"], {})
    return {
        "name": sess["name"],
        "windows": sess["windows"],
        "attached": sess["attached"],
        "title": data.get("title", ""),
        "description": data.get("description", ""),
        "description_at": data.get("description_at", 0),
        "progress": data.get("progress", ""),
        "progress_at": data.get("progress_at", 0),
        "notes": data.get("notes", ""),
        "notes_at": data.get("notes_at", 0),
        "realtime": data.get("realtime", ""),
        "realtime_at": data.get("realtime_at", 0),
        "messages": data.get("messages", []),
        "activity_status": "parked" if lifecycle.get("parked") else activity["status"],
        "activity_command": activity["command"],
        "activity_detail": activity["detail"],
        "auth_mode": _session_real_auth_mode(sess["name"]),
        "autopush_mode": _get_autopush_mode(sess["name"]),
        "simple_watchdog": _get_autopush_mode(sess["name"]) == "full",
        "away_mode": bool(autonomous.get("away_mode")),
        "go_nuts_mode": bool(autonomous.get("go_nuts_mode")),
        "parked": bool(lifecycle.get("parked")),
        "parked_at": float(lifecycle.get("parked_at") or 0),
        **_session_model_fields(sess["name"]),
    }


# --- Routes ---

@app.get("/", response_class=HTMLResponse)
async def index(request: Request):
    # Inject the per-user "simple" flag so the member UI is correct from the very
    # first line of JS (before any /api/me round-trip), avoiding admin-only fetches.
    simple = bool(_multi_tenant_enabled() and not _is_admin(_current_user(request)))
    return HTMLResponse(HTML_PAGE.replace("__SIMPLE__", "true" if simple else "false"))


@app.get("/api/sessions")
async def api_sessions(request: Request):
    sessions, _scope = _session_list_for_request(request, get_tmux_sessions())
    if sessions is None:
        return JSONResponse({"error": "Admin only"}, status_code=403)
    results, activities = await asyncio.gather(
        asyncio.gather(*[get_session_data(s["name"]) for s in sessions]),
        asyncio.gather(*(async_detect_activity(s["name"]) for s in sessions)),
    )
    return JSONResponse([
        build_session_response(sess, data, activity=act)
        for sess, data, act in zip(sessions, results, activities)
    ])


@app.get("/api/sessions-fast")
async def api_sessions_fast(request: Request):
    """Return session list with cached data only — no LLM calls. Fast startup."""
    sessions, _scope = _session_list_for_request(request, get_tmux_sessions())
    if sessions is None:
        return JSONResponse({"error": "Admin only"}, status_code=403)
    # Run activity detection for all sessions in parallel threads
    activities = await asyncio.gather(
        *(async_detect_activity(sess["name"]) for sess in sessions)
    )
    out = []
    _owners_map = _load_session_owners()
    _uid_to_name = {u["id"]: u.get("username", "") for u in _load_users()}
    for sess, activity in zip(sessions, activities):
        entry = cache.get(sess["name"], {})
        if "messages" not in entry:
            entry["messages"] = _load_session_messages(sess["name"])
        if "notes" not in entry:
            entry["notes"] = _load_session_notes(sess["name"])
        cache[sess["name"]] = entry
        lifecycle = _session_lifecycle.get(sess["name"])
        autonomous = _load_autonomous_state().get(sess["name"], {})
        out.append({
            "name": sess["name"],
            "windows": sess["windows"],
            "attached": sess["attached"],
            "owner": _uid_to_name.get(_owners_map.get(sess["name"], "admin"), "") or AUTH_USER,
            "title": entry.get("title", ""),
            "description": entry.get("description", ""),
            "description_at": entry.get("description_at", 0),
            "progress": entry.get("progress", ""),
            "progress_at": entry.get("progress_at", 0),
            "notes": entry.get("notes", ""),
            "notes_at": entry.get("notes_at", 0),
            "realtime": entry.get("realtime", ""),
            "realtime_at": entry.get("realtime_at", 0),
            "messages": entry.get("messages", []),
            "activity_status": "parked" if lifecycle.get("parked") else activity["status"],
            "activity_command": activity.get("command", ""),
            "activity_detail": activity.get("detail", ""),
            "auth_mode": _session_real_auth_mode(sess["name"]),
            "autopush_mode": _get_autopush_mode(sess["name"]),
            "simple_watchdog": _get_autopush_mode(sess["name"]) == "full",
            "away_mode": bool(autonomous.get("away_mode")),
            "go_nuts_mode": bool(autonomous.get("go_nuts_mode")),
            "parked": bool(lifecycle.get("parked")),
            "parked_at": float(lifecycle.get("parked_at") or 0),
            **_session_model_fields(sess["name"]),
        })
    return JSONResponse(out)


@app.post("/api/sessions/{session_name}/refresh")
async def api_refresh_session(session_name: str):
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)

    entry = await get_session_data(session_name)
    activity = await async_detect_activity(session_name)
    return JSONResponse(build_session_response(sess, entry, activity=activity))


@app.post("/api/sessions/{session_name}/refresh-all")
async def api_refresh_all_tiers(session_name: str):
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)

    entry = await get_session_data(session_name, force_all=True)
    activity = await async_detect_activity(session_name)
    return JSONResponse(build_session_response(sess, entry, activity=activity))


@app.get("/api/status")
async def api_status(request: Request):
    """Lightweight: return only activity status per session, no LLM calls."""
    sessions, _scope = _session_list_for_request(request, get_tmux_sessions())
    if sessions is None:
        return JSONResponse({"error": "Admin only"}, status_code=403)
    activities = await asyncio.gather(
        *(async_detect_activity(sess["name"]) for sess in sessions)
    )
    out = []
    for sess, activity in zip(sessions, activities):
        lifecycle = _session_lifecycle.get(sess["name"])
        out.append({
            "name": sess["name"],
            "activity_status": "parked" if lifecycle.get("parked") else activity["status"],
            "activity_detail": activity["detail"],
            "autopush_mode": _get_autopush_mode(sess["name"]),
            "simple_watchdog": _get_autopush_mode(sess["name"]) == "full",
            "parked": bool(lifecycle.get("parked")),
            **_session_model_fields(sess["name"]),
        })
    return JSONResponse(out)


@app.get("/api/sessions/{session_name}/raw")
async def api_raw_output(session_name: str):
    """Return raw scrollback content for a session."""
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    raw = await asyncio.to_thread(capture_pane_full, session_name)
    activity = await async_detect_activity(session_name)
    pane_width = await asyncio.to_thread(get_pane_width, session_name)
    return JSONResponse({
        "name": session_name,
        "raw": raw,
        "lines": len(raw.split("\n")),
        "pane_width": pane_width,
        "activity_status": activity["status"],
        "activity_command": activity["command"],
        "activity_detail": activity["detail"],
    })




@app.get("/api/sessions/{session_name}/raw-tail")
async def api_raw_tail(session_name: str, known_lines: int = 0, last_hash: str = ""):
    """Return delta output since the client's last known line count.

    Also detects in-place TUI redraws (Codex's alternate screen) by
    hashing the visible pane — a hash mismatch forces a full capture even when
    scrollback length is unchanged.
    """
    _, found = _find_session(session_name)
    if not found:
        return JSONResponse({"error": "Session not found"}, status_code=404)

    pos = await asyncio.to_thread(get_pane_position, session_name)
    current_total = pos["total_lines"]
    vis_hash = await asyncio.to_thread(_visible_pane_hash, session_name)
    pane_width = await asyncio.to_thread(get_pane_width, session_name)

    # First load or session reset → full capture
    if known_lines <= 0 or known_lines > current_total:
        raw = await asyncio.to_thread(capture_pane_full, session_name)
        return JSONResponse({
            "mode": "full",
            "raw": raw,
            "total_lines": len(raw.split("\n")),
            "pane_total": current_total,
            "pane_width": pane_width,
            "visible_hash": vis_hash,
        })

    # No scrollback growth, but visible content changed (TUI redraw) → full
    if current_total <= known_lines:
        if last_hash and vis_hash and last_hash != vis_hash:
            raw = await asyncio.to_thread(capture_pane_full, session_name)
            return JSONResponse({
                "mode": "full",
                "raw": raw,
                "total_lines": len(raw.split("\n")),
                "pane_total": current_total,
                "pane_width": pane_width,
                "visible_hash": vis_hash,
            })
        return JSONResponse({
            "mode": "none",
            "total_lines": known_lines,
            "pane_total": current_total,
            "pane_width": pane_width,
            "visible_hash": vis_hash,
        })

    # Delta: capture only the new lines + small overlap for dedup
    overlap = 5
    lines_from_end = (current_total - known_lines) + overlap
    raw = await asyncio.to_thread(capture_pane_recent, session_name, lines_from_end)
    return JSONResponse({
        "mode": "delta",
        "raw": raw,
        "total_lines": current_total,
        "pane_total": current_total,
        "pane_width": pane_width,
        "overlap": overlap,
        "visible_hash": vis_hash,
    })


_controller_server = None


class _TerminalQueueWriter:
    """StreamWriter-shaped adapter used by the in-process development server."""

    def __init__(self):
        self.queue: asyncio.Queue[bytes] = asyncio.Queue(maxsize=100)
        self.closed = False

    def write(self, data: bytes) -> None:
        if self.closed:
            raise ConnectionError("terminal subscriber closed")
        try:
            self.queue.put_nowait(data)
        except asyncio.QueueFull as exc:
            # A browser that cannot drain 100 terminal events is stale. Closing
            # it prevents one slow client from retaining an unbounded backlog.
            self.closed = True
            raise ConnectionError("terminal subscriber fell behind") from exc

    async def drain(self) -> None:
        if self.closed:
            raise ConnectionError("terminal subscriber closed")

    def close(self) -> None:
        self.closed = True

    async def wait_closed(self) -> None:
        return None
















def _session_tmux_activity(session_name: str) -> float:
    try:
        result = subprocess.run(
            ["tmux", "display-message", "-t", session_name, "-p", "#{session_activity}"],
            capture_output=True,
            text=True,
            timeout=5,
        )
        if result.returncode == 0:
            return float((result.stdout or "0").strip() or 0)
    except Exception:
        pass
    return 0.0


def _session_last_activity(session_name: str, created: float = 0) -> float:
    lifecycle = _session_lifecycle.get(session_name)
    return max(
        float(created or 0),
        _session_tmux_activity(session_name),
        float(lifecycle.get("last_interaction") or 0),
        float(lifecycle.get("resumed_at") or 0),
    )


def _session_has_autonomous_work(session_name: str) -> bool:
    if _away_mode_state.get(session_name, {}).get("enabled"):
        return True
    if _go_nuts_state.get(session_name, {}).get("enabled"):
        return True
    saved = _load_autonomous_state().get(session_name, {})
    return bool(saved.get("away_mode") or saved.get("go_nuts_mode"))














def _controller_runtime_data() -> dict:
    leases = _browser_leases.snapshot()
    lifecycle = _session_lifecycle.snapshot().get("sessions", {})
    browser_runtime = _browser_runtime.read().get("browsers", {})
    return {
        "version": 1,
        "controller_pid": os.getpid(),
        "updated_at": time.time(),
        "process_role": PROCESS_ROLE,
        "active_browser_leases": leases["active"],
        "browser_leases_by_session": leases["by_browser"],
        "browser_runtime": browser_runtime,
        "parked_sessions": sum(1 for row in lifecycle.values() if row.get("parked")),
        "session_lifecycle": lifecycle,
        "terminal_streams": len(_terminal_channels),
        "terminal_subscribers": sum(
            len(channel.get("writers", ())) for channel in _terminal_channels.values()
        ),
    }


async def _controller_snapshot_loop() -> None:
    while True:
        try:
            snapshot = _controller_runtime_data()

            def replace(value: dict, current: dict = snapshot) -> None:
                value.clear()
                value.update(current)

            await asyncio.to_thread(_controller_snapshot.update, replace)
        except asyncio.CancelledError:
            raise
        except Exception:
            logger.debug("Failed to write controller runtime snapshot", exc_info=True)
        await asyncio.sleep(10)


async def _controller_dispatch(message: dict) -> dict:
    op = str(message.get("op") or "")
    if op == "ping":
        return {"ok": True, "pid": os.getpid(), "role": PROCESS_ROLE}
    if op == "runtime":
        return {"ok": True, **_controller_runtime_data()}
    if op == "session_touch":
        row = await asyncio.to_thread(
            _session_lifecycle.touch,
            str(message.get("session") or ""),
            source=str(message.get("source") or "dashboard"),
        )
        return {"ok": True, "session": row}
    if op == "session_resume":
        return await _resume_parked_session(
            str(message.get("session") or ""),
            source=str(message.get("source") or "dashboard"),
        )
    if op == "session_register_virtual":
        name = str(message.get("session") or "")
        if not re.fullmatch(r"[A-Za-z0-9_.-]{1,128}", name):
            return {"ok": False, "error": "invalid session name"}
        row = await asyncio.to_thread(
            _session_lifecycle.mark_parked,
            name,
            reason=str(message.get("reason") or "recovered parked session"),
            last_activity=float(message.get("last_activity") or 0),
            cwd=str(message.get("cwd") or ""),
            virtual=True,
        )
        return {"ok": True, "session": row}
    if op == "browser_acquire":
        return await _acquire_browser_lease_local(
            str(message.get("browser_id") or ""),
            kind=str(message.get("kind") or "agent"),
            owner=str(message.get("owner") or ""),
            ttl=int(message.get("ttl") or BROWSER_LEASE_TTL),
            mode=str(message.get("mode") or "headless"),
        )
    if op == "browser_renew":
        lease = await asyncio.to_thread(
            _browser_leases.renew,
            str(message.get("token") or ""),
            int(message.get("ttl") or BROWSER_LEASE_TTL),
        )
        return {"ok": bool(lease), "lease": lease or {}}
    if op == "browser_release":
        released = await asyncio.to_thread(
            _browser_leases.release, str(message.get("token") or "")
        )
        return {"ok": released}
    if op == "browser_stop":
        sid = str(message.get("browser_id") or "")
        browser = _browser_session_by_id(sid)
        if not browser:
            return {"ok": False, "error": "browser session not found"}
        stopped = await _stop_browser_controlled(
            browser, reason=str(message.get("reason") or "requested")
        )
        return {"ok": stopped, "stopped": stopped}
    if op == "away_toggle":
        return await _away_toggle_local(
            str(message.get("session") or ""), bool(message.get("enabled"))
        )
    if op == "away_status":
        return {"ok": True, **_away_state_summary(
            _away_mode_state.get(str(message.get("session") or ""), {})
        )}
    if op == "go_nuts_toggle":
        return await _go_nuts_toggle_local(
            str(message.get("session") or ""), bool(message.get("enabled"))
        )
    if op == "go_nuts_status":
        return {"ok": True, **_go_nuts_state_summary(
            _go_nuts_state.get(str(message.get("session") or ""), {})
        )}
    if op == "watchdog_status":
        name = str(message.get("session") or "")
        return {
            "ok": True,
            "mode": _get_autopush_mode(name),
            "log": list(_simple_watchdog_log.get(name, []))[-_SIMPLE_WATCHDOG_MAX_LOG:],
        }
    if op == "autopush_set":
        name = str(message.get("session") or "")
        mode = str(message.get("mode") or "").lower()
        if mode not in AUTOPUSH_MODES:
            return {"ok": False, "error": f"mode must be one of {list(AUTOPUSH_MODES)}", "_status": 400}
        _autopush_mode[name] = mode
        _save_autopush_mode()
        if mode != "full":
            _simple_watchdog_state.pop(name, None)
        return {
            "ok": True,
            "mode": mode,
            "enabled": mode == "full",
            "log": list(_simple_watchdog_log.get(name, []))[-_SIMPLE_WATCHDOG_MAX_LOG:],
        }
    return {"ok": False, "error": f"unknown controller operation: {op}"}


async def _controller_client(
    reader: asyncio.StreamReader, writer: asyncio.StreamWriter
) -> None:
    session_name = ""
    subscribed = False
    try:
        line = await asyncio.wait_for(reader.readline(), timeout=10)
        message = json.loads(line.decode("utf-8", "replace"))
        if message.get("op") == "terminal_subscribe":
            session_name = str(message.get("session") or "")
            if not _is_valid_session_name(session_name) or not _find_session(session_name)[1]:
                await _terminal_send(writer, {"mode": "error", "error": "Session not found"})
                return
            await _resume_parked_session(session_name, source="terminal-stream")
            await _terminal_subscribe(session_name, writer)
            subscribed = True
            await reader.read()
            return
        response = await _controller_dispatch(message)
        writer.write((json.dumps(response, separators=(",", ":")) + "\n").encode())
        await writer.drain()
    except Exception as exc:
        try:
            writer.write((json.dumps({"ok": False, "error": str(exc)[:240]}) + "\n").encode())
            await writer.drain()
        except Exception:
            pass
    finally:
        if subscribed:
            await _terminal_unsubscribe(session_name, writer)
        try:
            writer.close()
            await writer.wait_closed()
        except Exception:
            pass


async def _start_controller_socket() -> None:
    global _controller_server
    CONTROLLER_SOCKET.parent.mkdir(parents=True, exist_ok=True)
    try:
        CONTROLLER_SOCKET.unlink()
    except FileNotFoundError:
        pass
    _controller_server = await asyncio.start_unix_server(
        _controller_client, path=str(CONTROLLER_SOCKET), limit=1024 * 1024
    )
    CONTROLLER_SOCKET.chmod(0o600)
    logger.info("Controller IPC listening on %s", CONTROLLER_SOCKET)


async def _stop_controller_socket() -> None:
    global _controller_server
    if _controller_server:
        _controller_server.close()
        await _controller_server.wait_closed()
        _controller_server = None
    try:
        CONTROLLER_SOCKET.unlink()
    except FileNotFoundError:
        pass


async def _controller_call(op: str, **fields) -> dict:
    """Call the controller from an API worker, or dispatch locally in dev."""
    message = {"op": op, **fields}
    if PROCESS_ROLE != "api":
        return await _controller_dispatch(message)
    last_error = "controller unavailable"
    for _ in range(10):
        try:
            reader, writer = await asyncio.open_unix_connection(
                str(CONTROLLER_SOCKET), limit=32 * 1024 * 1024
            )
            writer.write((json.dumps(message, separators=(",", ":")) + "\n").encode())
            await writer.drain()
            line = await asyncio.wait_for(reader.readline(), timeout=30)
            writer.close()
            await writer.wait_closed()
            return json.loads(line.decode("utf-8", "replace"))
        except Exception as exc:
            last_error = str(exc)
            await asyncio.sleep(0.2)
    return {"ok": False, "error": last_error}




@app.websocket("/ws/sessions/{session_name}/raw")
async def ws_session_raw(ws: WebSocket, session_name: str):
    if AUTH_PASS and not _check_token(ws.cookies.get(AUTH_COOKIE)):
        await ws.close(code=1008)
        return
    user = _current_user(ws)
    if not _user_can_access_session(user, session_name):
        await ws.close(code=1008)
        return
    await ws.accept()
    reader = writer = None
    local_writer = None
    try:
        if PROCESS_ROLE == "api":
            reader, writer = await _controller_terminal_connection(session_name)

            async def forward_terminal():
                while True:
                    line = await reader.readline()
                    if not line:
                        raise ConnectionError("controller stream closed")
                    await ws.send_text(line.decode("utf-8", "replace").rstrip("\n"))
        else:
            local_writer = _TerminalQueueWriter()
            await _resume_parked_session(session_name, source="terminal-stream")
            await _terminal_subscribe(session_name, local_writer)

            async def forward_terminal():
                while True:
                    line = await local_writer.queue.get()
                    await ws.send_text(line.decode("utf-8", "replace").rstrip("\n"))

        async def watch_client():
            while True:
                message = await ws.receive()
                if message["type"] == "websocket.disconnect":
                    return

        tasks = {asyncio.create_task(forward_terminal()), asyncio.create_task(watch_client())}
        done, pending = await asyncio.wait(tasks, return_when=asyncio.FIRST_COMPLETED)
        for task in pending:
            task.cancel()
        await asyncio.gather(*pending, return_exceptions=True)
        for task in done:
            task.result()
    except WebSocketDisconnect:
        pass
    except Exception as exc:
        logger.warning("raw websocket ended for '%s': %s: %s", session_name, type(exc).__name__, exc)
        try:
            await ws.close()
        except Exception:
            pass
    finally:
        if writer:
            writer.close()
            try:
                await writer.wait_closed()
            except Exception:
                pass
        if local_writer:
            await _terminal_unsubscribe(session_name, local_writer)
            local_writer.close()


class CreateSession(BaseModel):
    name: str = ""
    agent: str = "codex"        # "codex" | "claude"
    # Optional workspace to attach to the new session. The agent always runs on
    # the dashboard host (it needs CODEX_HOME, the advisor token and the owner's
    # auth files); this only decides which folder the IDE opens and, for an SSH
    # target, adds an interactive remote window to the session.
    workspace: str = ""          # "" | "local" | "ssh"
    workspace_root: str = ""
    reuse_connection_id: str = ""
    ssh_host: str = ""
    ssh_username: str = ""
    ssh_port: int = 22
    ssh_auth_mode: str = "agent"
    ssh_identity_file: str = ""
    ssh_password: str = ""
    private_key: str = ""
    workspace_label: str = ""



async def _attach_session_workspace(
    request: Request, session_name: str, body: CreateSession, user: dict | None
) -> dict:
    """Create the new session's IDE workspace, reusing a saved host when asked.

    Returns a small report rather than raising: the tmux session already exists
    by this point, so a bad host must not turn a successful session creation
    into a failure. The caller surfaces `warning` instead.
    """
    kind = (body.workspace or "").strip().lower()
    if kind not in {"local", "ssh"}:
        return {}

    payload = None
    if body.reuse_connection_id:
        # Reuse: clone one of this user's existing profiles onto the new session
        # so a host is configured once. Stored secrets are NOT copied -- the
        # ciphertext is bound to its original connection id by the GCM AAD, so a
        # password target re-authenticates and re-seals under the new id.
        source = next(
            (
                profile
                for profile in (_ssh_connections_store().read() or {}).get("connections", [])
                if isinstance(profile, dict)
                and profile.get("id") == body.reuse_connection_id
                and _ssh_user_may_use_profile(user, profile)
            ),
            None,
        )
        if not source:
            return {"warning": "That saved connection is no longer available"}
        payload = SSHConnectionBody(
            kind=str(source.get("kind") or "ssh"),
            label=str(source.get("label") or ""),
            host=str(source.get("host") or ""),
            username=str(source.get("username") or ""),
            port=int(source.get("port") or 22),
            identity_file=str(source.get("identity_file") or ""),
            auth_mode=str(source.get("auth_mode") or "agent"),
            password=body.ssh_password or "",
            workspace_root=str(body.workspace_root or source.get("workspace_root") or "."),
            max_file_bytes=int(source.get("max_file_bytes") or SSH_MAX_FILE_BYTES),
        )
    elif kind == "local":
        payload = SSHConnectionBody(
            kind="local",
            label=body.workspace_label or "",
            workspace_root=body.workspace_root or "",
        )
    else:
        payload = SSHConnectionBody(
            kind="ssh",
            label=body.workspace_label or "",
            host=body.ssh_host,
            username=body.ssh_username,
            port=body.ssh_port,
            identity_file=body.ssh_identity_file,
            auth_mode=body.ssh_auth_mode,
            password=body.ssh_password,
            private_key=body.private_key,
            workspace_root=body.workspace_root or ".",
        )

    response = await api_create_ssh_connection(request, session_name, payload)
    created = json.loads(bytes(response.body).decode("utf-8") or "{}")
    if response.status_code != 201:
        return {"warning": created.get("error") or "Could not attach the workspace"}

    connection = created.get("connection") or {}
    connection_id = str(connection.get("id") or "")
    result = {"connection": connection}
    # Connecting is best-effort: an unreachable host still leaves a usable
    # session and a saved workspace the user can retry from the IDE.
    try:
        connect = await api_connect_ssh_connection(
            request, session_name, connection_id, SSHConnectBody(password=body.ssh_password or "")
        )
        if connect.status_code != 200:
            detail = json.loads(bytes(connect.body).decode("utf-8") or "{}")
            result["warning"] = detail.get("error") or "Workspace saved, but connecting failed"
    except Exception as exc:  # noqa: BLE001 - never fail session creation
        logger.info("Workspace attach could not connect for %s", session_name, exc_info=True)
        result["warning"] = str(exc)[:200] or "Workspace saved, but connecting failed"
    return result


@app.post("/api/sessions/create")
async def api_create_session(request: Request, body: CreateSession):
    """Create a new tmux session."""
    user = _current_user(request)
    name = body.name.strip()
    if name:
        # Validate name: alphanumeric, dash, underscore only
        if not _is_valid_session_name(name):
            return JSONResponse(
                {"error": "Invalid name — no spaces or symbols. Use letters, numbers, "
                          "dots, dashes or underscores, for example 'my-project'."},
                status_code=400,
            )
        existing = [s["name"] for s in get_tmux_sessions()]
        if name in existing:
            return JSONResponse({"error": f"Session '{name}' already exists."}, status_code=409)
    # A stored API key is the recovery credential when a managed ChatGPT token
    # can no longer be refreshed. Validate/switch before launching the new pane.
    auth_home = _user_codex_config_dir(user)
    if user and not _is_admin(user):
        _ensure_user_codex_config_dir(user)
        if not (auth_home / "advisor-token").is_file():
            return JSONResponse(
                {"error": "This account's private data connection is not provisioned"},
                status_code=503,
            )
    await asyncio.to_thread(_ensure_codex_auth_with_fallback, auth_home, True)
    ready, reason, details = await asyncio.to_thread(_codex_cli_readiness)
    if not ready:
        return JSONResponse(
            {"error": f"Codex launch blocked: {reason}", "codex": details},
            status_code=503,
        )
    try:
        cmd = ["tmux", "new-session", "-d"]
        if name:
            cmd += ["-s", name]
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=5)
        if result.returncode != 0:
            detail = result.stderr.strip() or "Failed to create session"
            # tmux rejects a name already taken by a session the dashboard does
            # not list; report that as a conflict rather than a server error.
            if "duplicate session" in detail.lower():
                return JSONResponse(
                    {"error": f"Session '{name}' already exists."}, status_code=409
                )
            return JSONResponse({"error": detail}, status_code=500)
        # Find the new session name (if auto-named)
        sessions = get_tmux_sessions()
        if name:
            created = name
        else:
            created = sessions[-1]["name"] if sessions else "unknown"
        # Record which agent this session runs before anything builds its launch
        # command, so _session_launch_base/_session_launch_command see it.
        _agent = (body.agent or "codex").strip().lower()
        if _agent not in {"codex", "claude"}:
            _agent = "codex"
        if _agent == "claude" and not shutil.which("claude"):
            # Fall back rather than launching a command that cannot exist; the
            # session is still usable and the reason is reported to the caller.
            logger.warning("Claude requested for %s but the CLI is not installed", created)
            _agent = "codex"
            _agent_warning = "Claude is not installed on this server — started Codex instead"
        else:
            _agent_warning = ""
        _set_session_agent(created, _agent)
        # Persist the working directory now, while the session exists. The
        # restore path recreates a session with `tmux new-session -c <cwd>`, so
        # without this a session that outlives its tmux server comes back in the
        # wrong directory -- or cannot be identified as restorable at all. Ask
        # tmux what it actually resolved rather than recomputing the guess.
        try:
            _created_cwd = subprocess.run(
                ["tmux", "display-message", "-p", "-t", f"{created}:", "#{pane_current_path}"],
                capture_output=True, text=True, timeout=5,
            ).stdout.strip()
        except (OSError, subprocess.SubprocessError):
            _created_cwd = ""
        try:
            _session_lifecycle.touch(created, source="create", cwd=_created_cwd)
        except Exception:  # noqa: BLE001 - state is best-effort, never block create
            logger.warning("Could not record lifecycle for '%s'", created, exc_info=True)
        if _agent == "claude":
            # Claude asks a per-folder trust question on first use of a
            # directory. A detached pane cannot answer it, so pre-accept it for
            # the folder this session will work in — the user already owns it,
            # and the alternative is a session that hangs on a prompt forever.
            try:
                _cfg_dir = (
                    _user_claude_config_dir(user)
                    if (user and not _is_admin(user))
                    else Path.home() / ".claude"
                )
                # A member's pane starts in their project dir; an admin's starts
                # in the dashboard directory. Seed both rather than guessing,
                # since trust is keyed on the exact path.
                for _cwd in {
                    str(PROJECTS_ROOT / ((user or {}).get("username") or "admin") / created),
                    str(Path(__file__).resolve().parent),
                }:
                    _seed_trust(_cfg_dir, _cwd)
            except Exception:
                logger.debug("Could not seed Claude trust for %s", created, exc_info=True)
        # Record session ownership. If auth is disabled, fall back to admin.
        owner_id = user["id"] if user else "admin"
        _set_session_owner(created, owner_id)
        # Export project-publishing convention env vars so Codex can publish to
        # https://dianaotech.com/<username>/<session> reliably (see global context).
        try:
            _owner_name = (user.get("username") if user else AUTH_USER) or "admin"
            _proj_dir = str(PROJECTS_ROOT / _owner_name / created)
            _pub_base = PUB_URL
            # Per-user git identity: every member shares ONE OS user, so set the
            # commit author/committer per session → commits are attributed to the
            # right person. Push still uses the box's shared GitHub creds.
            _git_email = f"{_owner_name}@{GIT_EMAIL_DOMAIN}"
            _exports = ("export DASH_USER={} DASH_SESSION={} DASH_PROJECT_DIR={} DASH_PROJECT_URL={} "
                        "GIT_AUTHOR_NAME={} GIT_AUTHOR_EMAIL={} GIT_COMMITTER_NAME={} GIT_COMMITTER_EMAIL={}".format(
                shlex.quote(_owner_name), shlex.quote(created),
                shlex.quote(_proj_dir), shlex.quote(f"{_pub_base}/{_owner_name}/{created}"),
                shlex.quote(_owner_name), shlex.quote(_git_email),
                shlex.quote(_owner_name), shlex.quote(_git_email)))
            subprocess.run(["tmux", "send-keys", "-t", created, "-l", _exports], capture_output=True, text=True, timeout=5)
            subprocess.run(["tmux", "send-keys", "-t", created, "Enter"], capture_output=True, text=True, timeout=5)
        except Exception:
            logger.debug("Failed to export DASH_* project env for %s", created, exc_info=True)
        # Admins don't receive the member global block, so give them the projects
        # convention directly (members already have it in their global context).
        try:
            if _multi_tenant_enabled() and _is_admin(user):
                acfg = _user_codex_config_dir(user)
                _sync_projects_note_into(acfg / "AGENTS.md")
                _ensure_google_mcp(acfg, user)
                _set_team_model_effort(acfg)
                _sync_git_rules_into(acfg / "AGENTS.md")
        except Exception:
            logger.debug("Failed to harden admin team config", exc_info=True)
        # Bind both CODEX_HOME and the advisor identity to the session owner.
        # An unbound member pane would inherit the admin token from the shared
        # Unix login shell, so a failed export is a hard launch failure.
        if not _send_session_owner_environment(created):
            subprocess.run(
                ["tmux", "kill-session", "-t", created],
                capture_output=True,
                text=True,
                timeout=5,
            )
            _clear_session_owner(created)
            return JSONResponse(
                {"error": "Could not bind the session to its account"},
                status_code=503,
            )
        # Authenticate non-admin sessions from the shared Codex auth file.
        # Admin sessions use the default ~/.codex login directly.
        if user and not _is_admin(user):
            _session_auth_mode[created] = _apply_member_auth(_user_codex_config_dir(user))
        else:
            try:
                mode = json.loads((CODEX_HOME / "auth.json").read_text()).get("auth_mode")
            except Exception:
                mode = ""
            _session_auth_mode[created] = (
                "subscription" if mode == "chatgpt"
                else "api" if mode == "apikey"
                else "unconfigured"
            )
        # Optionally launch a command in the new session. Members pin their model
        # in the isolated account config; admins use the dashboard default.
        if NEW_SESSION_CMD:
            _pin_model = not (user and not _is_admin(user))
            subprocess.run(
                ["tmux", "send-keys", "-t", created, "-l",
                 _session_launch_command(
                     created, _session_launch_base(created, user), pin_model=_pin_model
                 )],
                capture_output=True, text=True, timeout=5
            )
            subprocess.run(
                ["tmux", "send-keys", "-t", created, "Enter"],
                capture_output=True, text=True, timeout=5
            )
        logger.info("Session created: '%s' (auth_mode=%s)", created, _session_auth_mode.get(created, "unknown"))
        payload = {"ok": True, "name": created, "agent": _agent}
        if _agent_warning:
            payload["warning"] = _agent_warning
        attached = await _attach_session_workspace(request, created, body, user)
        if attached.get("connection"):
            payload["connection"] = attached["connection"]
        if attached.get("warning"):
            payload["warning"] = attached["warning"]
        return JSONResponse(payload)
    except Exception as e:
        logger.error("Failed to create session '%s': %s", name, e)
        return JSONResponse({"error": str(e)}, status_code=500)


@app.delete("/api/sessions/{session_name}")
async def api_delete_session(request: Request, session_name: str):
    """Kill a tmux session and all its child processes."""
    user = _current_user(request)
    _, sess = _find_session_for_user(session_name, user)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    if sess.get("virtual"):
        await asyncio.to_thread(_session_lifecycle.remove, session_name)
        _clear_session_owner(session_name)
        _clear_session_agent(session_name)
        return JSONResponse({"ok": True, "killed": session_name, "virtual": True})
    try:
        # First, find and kill all processes in the session's panes.
        # This ensures Codex (node) processes are terminated cleanly
        # before the tmux session is destroyed.
        try:
            # Get all pane PIDs in this session
            pane_result = subprocess.run(
                ["tmux", "list-panes", "-t", session_name, "-F", "#{pane_pid}"],
                capture_output=True, text=True, timeout=5
            )
            if pane_result.returncode == 0:
                for pid_str in pane_result.stdout.strip().split("\n"):
                    pid_str = pid_str.strip()
                    if not pid_str:
                        continue
                    # Kill the entire process group rooted at this pane's shell
                    # This catches Codex (node), any background tasks, etc.
                    try:
                        subprocess.run(
                            ["pkill", "-TERM", "-P", pid_str],
                            capture_output=True, text=True, timeout=3
                        )
                    except Exception:
                        logger.debug("pkill -TERM failed for pid %s", pid_str, exc_info=True)
                # Brief pause to let processes handle SIGTERM
                await asyncio.sleep(0.5)
                # Force-kill any remaining children
                for pid_str in pane_result.stdout.strip().split("\n"):
                    pid_str = pid_str.strip()
                    if not pid_str:
                        continue
                    try:
                        subprocess.run(
                            ["pkill", "-KILL", "-P", pid_str],
                            capture_output=True, text=True, timeout=3
                        )
                    except Exception:
                        logger.debug("pkill -KILL failed for pid %s", pid_str, exc_info=True)
        except Exception:
            logger.debug("Process cleanup failed for session '%s' — kill-session will still clean up", session_name, exc_info=True)

        result = subprocess.run(
            ["tmux", "kill-session", "-t", session_name],
            capture_output=True, text=True, timeout=5
        )
        if result.returncode != 0:
            return JSONResponse({"error": result.stderr.strip() or "Failed to kill session"}, status_code=500)
        # Clean up all per-session state from global dicts
        cache.pop(session_name, None)
        _auto_approve_sent.pop(session_name, None)
        _pane_stability.pop(session_name, None)
        _activity_state.pop(session_name, None)
        _session_stats_cache.pop(session_name, None)
        _auto_respond_cooldown.pop(session_name, None)
        _session_auth_mode.pop(session_name, None)
        _away_mode_state.pop(session_name, None)
        # Cancel go-nuts worker if running
        gn_state = _go_nuts_state.get(session_name, {})
        if gn_state.get("task") and not gn_state["task"].done():
            gn_state["task"].cancel()
        _go_nuts_state.pop(session_name, None)
        _simple_watchdog_state.pop(session_name, None)
        _simple_watchdog_log.pop(session_name, None)
        _crash_recovery_state.pop(session_name, None)
        _seen_claude_running.discard(session_name)
        if session_name in _simple_watchdog_disabled:
            _simple_watchdog_disabled.discard(session_name)
            _save_simple_watchdog_disabled()
        # Drop the ownership record. Messages/notes are kept on disk so they
        # show up in the user's History tab even after the live session dies.
        _clear_session_owner(session_name)
        _clear_session_agent(session_name)
        await asyncio.to_thread(_session_lifecycle.remove, session_name)
        logger.info("Session deleted: '%s'", session_name)
        return JSONResponse({"ok": True, "killed": session_name})
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)




UPLOADS_DIR = MESSAGES_DIR / "uploads"


def _session_uploads_dir(session_name: str) -> Path:
    return _user_uploads_dir(_user_for_session(session_name)) / session_name


@app.post("/api/sessions/{session_name}/upload")
async def api_upload_file(session_name: str, file: UploadFile = File(...)):
    """Upload a file to a session-specific uploads dir; record only in this session's chat history."""
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)

    # Sanitize filename — keep only the basename
    filename = os.path.basename(file.filename or "upload")
    if not filename or filename.startswith("."):
        return JSONResponse({"error": "Invalid filename"}, status_code=400)

    # Save under the owning account's data root, never another tenant's tree.
    uploads_dir = _session_uploads_dir(session_name)
    uploads_dir.mkdir(parents=True, exist_ok=True)
    dest = str(uploads_dir / filename)
    try:
        content = await file.read()
        max_size = 50 * 1024 * 1024  # 50 MB
        if len(content) > max_size:
            return JSONResponse({"error": f"File too large ({len(content) / 1024 / 1024:.1f} MB). Max is 50 MB."}, status_code=413)
        with open(dest, "wb") as f:
            f.write(content)
        # Per-session record only — never touch the project AGENTS.md, which is
        # shared across every session running in the same cwd.
        size_kb = len(content) / 1024
        note = f"Uploaded {filename} ({size_kb:.1f} KB) to {dest}"
        now = time.time()
        entry = cache.setdefault(session_name, {})
        if "messages" not in entry:
            entry["messages"] = _load_session_messages(session_name)
        entry["messages"].append({"role": "user", "text": note, "ts": now})
        _save_messages()
        return JSONResponse({"ok": True, "path": dest, "size": len(content)})
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)


@app.get("/api/sessions/{session_name}/uploads")
async def api_list_uploads(session_name: str):
    """List previously uploaded files for a session (newest first)."""
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    uploads_dir = _session_uploads_dir(session_name)
    files = []
    if uploads_dir.exists():
        for entry in uploads_dir.iterdir():
            if not entry.is_file():
                continue
            try:
                st = entry.stat()
                files.append({
                    "name": entry.name,
                    "path": str(entry),
                    "size": st.st_size,
                    "mtime": st.st_mtime,
                })
            except Exception:
                continue
    files.sort(key=lambda f: f["mtime"], reverse=True)
    return JSONResponse({"files": files})


@app.delete("/api/sessions/{session_name}/uploads/{filename}")
async def api_delete_upload(session_name: str, filename: str):
    """Remove a previously uploaded file from the session uploads dir."""
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    safe_name = os.path.basename(filename)
    if not safe_name or safe_name.startswith("."):
        return JSONResponse({"error": "Invalid filename"}, status_code=400)
    target = _session_uploads_dir(session_name) / safe_name
    try:
        if target.exists() and target.is_file():
            target.unlink()
            return JSONResponse({"ok": True})
        return JSONResponse({"error": "File not found"}, status_code=404)
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)


# --- AGENTS.md viewer/editor ---

@app.get("/api/sessions/{session_name}/codex-md")
async def api_get_codex_md(session_name: str):
    """Read project and account AGENTS.md files for this session."""
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    cwd = get_session_cwd(session_name)
    results = []
    # Check session CWD
    if cwd:
        md_path = os.path.join(cwd, "AGENTS.md")
        content = ""
        if os.path.exists(md_path):
            try:
                with open(md_path) as f:
                    content = f.read()
            except Exception:
                logger.debug("Failed to read AGENTS.md at %s", md_path, exc_info=True)
        results.append({"path": md_path, "content": content, "exists": os.path.exists(md_path), "label": "Project"})
    # Members get their isolated CODEX_HOME instructions. Keep the legacy
    # ~/AGENTS.md location for admin sessions for backwards compatibility.
    owner = _user_for_session(session_name)
    home_md = str(
        (_user_codex_config_dir(owner) / "AGENTS.md")
        if owner and not _is_admin(owner)
        else (Path.home() / "AGENTS.md")
    )
    home_content = ""
    if os.path.exists(home_md):
        try:
            with open(home_md) as f:
                home_content = f.read()
        except Exception:
            logger.debug("Failed to read global AGENTS.md at %s", home_md, exc_info=True)
    results.append({"path": home_md, "content": home_content, "exists": os.path.exists(home_md), "label": "Global"})
    return JSONResponse({"files": results, "cwd": cwd or ""})


class SaveCodexMd(BaseModel):
    path: str
    content: str


@app.post("/api/sessions/{session_name}/codex-md")
async def api_save_codex_md(session_name: str, body: SaveCodexMd):
    """Save AGENTS.md to the specified path."""
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    # Safety: only the project AGENTS.md and this account's own global file are
    # valid. Merely being somewhere under the shared OS home is not isolation.
    if not body.path.endswith("AGENTS.md"):
        return JSONResponse({"error": "Can only write AGENTS.md files"}, status_code=400)
    real_path = os.path.realpath(body.path)
    if not real_path.endswith("/AGENTS.md"):
        return JSONResponse({"error": "Invalid path after resolution"}, status_code=400)
    owner = _user_for_session(session_name)
    global_path = (
        _user_codex_config_dir(owner) / "AGENTS.md"
        if owner and not _is_admin(owner)
        else Path.home() / "AGENTS.md"
    )
    allowed = {os.path.realpath(str(global_path))}
    cwd = get_session_cwd(session_name)
    if cwd:
        allowed.add(os.path.realpath(str(Path(cwd) / "AGENTS.md")))
    if real_path not in allowed:
        return JSONResponse({"error": "Path is outside this session's project and account"}, status_code=403)
    try:
        os.makedirs(os.path.dirname(real_path), exist_ok=True)
        _backup_before_dashboard_write(Path(real_path))
        with open(real_path, "w") as f:
            f.write(body.content)
        if owner and not _is_admin(owner) and real_path == os.path.realpath(str(global_path)):
            _ensure_user_codex_config_dir(owner)
        return JSONResponse({"ok": True, "path": real_path})
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)


# The global AGENTS.md is edited through /api/context-files, alongside the
# reference docs it links to, so the whole set is visible in one place.


# --- Session-scoped auto-memory (project MEMORY.md + sibling topic files) ---
# Codex reads MEMORY.md from `<CODEX_HOME>/projects/<encoded-cwd>/memory/MEMORY.md`,
# where the encoded path replaces `/` and `_` with `-`. We mirror that here.



def _session_config_base(session_name: str) -> Path:
    """Resolve the CODEX_HOME a session actually uses.

    Members use their isolated ``~/.codex-user-<id>/`` directory. Admin
    sessions use the one standard dashboard Codex home.
    """
    owner = _user_for_session(session_name)
    if owner and not _is_admin(owner):
        return _user_codex_config_dir(owner)
    return CODEX_HOME


# Wire services/session_launch.py once its helpers exist.
session_launch_service.configure(
    _async_is_codex_running=_async_is_codex_running,
    _codex_home_mcp_servers=_codex_home_mcp_servers,
    _ensure_codex_running=_ensure_codex_running,
    _multi_tenant_enabled=_multi_tenant_enabled,
    _seen_claude_running=_seen_claude_running,
    _session_config_base=_session_config_base,
    _session_has_autonomous_work=_session_has_autonomous_work,
    _session_last_activity=_session_last_activity,
    _session_lifecycle=_session_lifecycle,
    _terminal_channels=_terminal_channels,
    _user_claude_config_dir=_user_claude_config_dir,
    _user_codex_config_dir=_user_codex_config_dir,
    _user_for_session=_user_for_session,
    DEFAULT_MODEL=DEFAULT_MODEL,
)


# Wire services/stores.py. `cache` is passed by reference: it is mutated in
# place on both sides, so both must see the same object.
stores_service.configure(
    _encode_project_path=_encode_project_path,
    _read_json_file=_read_json_file,
    _session_config_base=_session_config_base,
    _session_owner_id=_session_owner_id,
    _user_codex_config_dir=_user_codex_config_dir,
    _user_data_dir=_user_data_dir,
    _user_for_session=_user_for_session,
    _write_json_file=_write_json_file,
    llm_call=llm_call,
    cache=cache,
)


# Wire services/usage.py once its helpers exist. AUTH_SECRET and DEFAULT_MODEL
# are passed as current values here and kept in step by the module-level
# attribute forwarding below, which is what tests patch through.
usage_service.configure(
    _api_http=_api_http,
    _iter_prompt_audit_reverse=_iter_prompt_audit_reverse,
    _session_config_base=_session_config_base,
    _user_codex_config_dir=_user_codex_config_dir,
    AUTH_SECRET=AUTH_SECRET,
    DEFAULT_MODEL=DEFAULT_MODEL,
)








@app.get("/api/sessions/{session_name}/memory-md")
async def api_get_session_memory_md(session_name: str):
    """Read auto-memory for the session owner's account and working directory."""
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    mem_dir, cwd = _session_memory_dir(session_name)
    if not cwd:
        return JSONResponse({"error": "Could not determine session cwd"}, status_code=400)
    mpath = mem_dir / "MEMORY.md"
    content = ""
    if mpath.exists():
        try:
            content = mpath.read_text()
        except Exception:
            logger.debug("Failed to read session MEMORY.md at %s", mpath, exc_info=True)
    return JSONResponse({
        "path": str(mpath), "content": content, "exists": mpath.exists(),
        "dir": str(mem_dir), "cwd": cwd,
    })


@app.post("/api/sessions/{session_name}/memory-md")
async def api_save_session_memory_md(session_name: str, body: SaveCodexMd):
    """Save the auto-memory MEMORY.md (creates dir if missing)."""
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    mem_dir, cwd = _session_memory_dir(session_name)
    if not cwd:
        return JSONResponse({"error": "Could not determine session cwd"}, status_code=400)
    mpath = mem_dir / "MEMORY.md"
    # Path safety: ensure mpath stays inside the account's memory directory.
    try:
        if not str(mpath.resolve().parent) == str(mem_dir.resolve()):
            return JSONResponse({"error": "Invalid path"}, status_code=400)
    except Exception:
        pass
    real_target = os.path.realpath(body.path)
    if real_target != os.path.realpath(str(mpath)):
        return JSONResponse({"error": "Path mismatch"}, status_code=400)
    try:
        mem_dir.mkdir(parents=True, exist_ok=True)
        mpath.write_text(body.content)
        return JSONResponse({"ok": True, "path": str(mpath)})
    except Exception:
        logger.exception("Failed to save session MEMORY.md")
        return JSONResponse({"error": "Failed to save"}, status_code=500)


@app.get("/api/sessions/{session_name}/memory-extras")
async def api_list_session_memory_extras(session_name: str):
    """List sibling .md topic files alongside MEMORY.md (excludes MEMORY.md itself)."""
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    mem_dir, cwd = _session_memory_dir(session_name)
    files = []
    if mem_dir.exists():
        for p in sorted(mem_dir.iterdir()):
            if not (p.is_file() and p.suffix == ".md"):
                continue
            if p.name.upper() == "MEMORY.MD":
                continue
            try:
                files.append({"name": p.name, "content": p.read_text(),
                              "size": p.stat().st_size})
            except Exception:
                logger.debug("Failed to read memory topic %s", p, exc_info=True)
    return JSONResponse({"files": files, "dir": str(mem_dir), "cwd": cwd})


@app.post("/api/sessions/{session_name}/memory-extras")
async def api_save_session_memory_extra(session_name: str, body: SkillFileBody):
    """Create or update a topic file in the session's memory dir."""
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    mem_dir, cwd = _session_memory_dir(session_name)
    if not cwd:
        return JSONResponse({"error": "Could not determine session cwd"}, status_code=400)
    fname = _sanitize_memory_filename(body.name)
    if not fname:
        return JSONResponse({"error": "Invalid filename. Use alphanumerics/dots/dashes/underscores ending in .md."}, status_code=400)
    if fname.upper() == "MEMORY.MD":
        return JSONResponse({"error": "MEMORY.md has its own editor."}, status_code=400)
    mem_dir.mkdir(parents=True, exist_ok=True)
    fpath = mem_dir / fname
    if not str(fpath.resolve()).startswith(str(mem_dir.resolve()) + os.sep):
        return JSONResponse({"error": "Invalid path"}, status_code=400)
    try:
        fpath.write_text(body.content)
        return JSONResponse({"ok": True, "name": fname})
    except Exception:
        logger.exception("Failed to save memory topic file")
        return JSONResponse({"error": "Failed to save file"}, status_code=500)


@app.delete("/api/sessions/{session_name}/memory-extras/{filename}")
async def api_delete_session_memory_extra(session_name: str, filename: str):
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    mem_dir, _cwd = _session_memory_dir(session_name)
    fname = _sanitize_memory_filename(filename)
    if not fname or fname.upper() == "MEMORY.MD":
        return JSONResponse({"error": "Invalid filename"}, status_code=400)
    fpath = mem_dir / fname
    if not str(fpath.resolve()).startswith(str(mem_dir.resolve()) + os.sep):
        return JSONResponse({"error": "Invalid path"}, status_code=400)
    if fpath.exists():
        try:
            fpath.unlink()
        except Exception:
            logger.exception("Failed to delete memory topic file")
            return JSONResponse({"error": "Failed to delete"}, status_code=500)
    return JSONResponse({"ok": True})


# --- Context files: the canonical set Codex reads on this host ---
#
# NB: this module uses `from __future__ import annotations`, so a body model must
# be defined ABOVE the route that annotates it — otherwise FastAPI cannot resolve
# the string annotation at registration time and silently demotes it to a query
# parameter.
class ContextFileBody(BaseModel):
    name: str        # registry id, not a path
    content: str





def _first_existing_path(paths: list[Path]) -> Path:
    """Return the first existing candidate, or the preferred path if none exist."""
    return next((path for path in paths if path.exists()), paths[0])




@app.get("/api/context-files")
async def api_list_context_files():
    files = []
    for e in _context_file_entries():
        p = e["path"]
        try:
            exists = p.exists()
            content = p.read_text(errors="replace") if exists else ""
            size = p.stat().st_size if exists else 0
        except Exception:
            logger.debug("Failed to read context file %s", p, exc_info=True)
            continue
        files.append({
            "id": e["id"], "name": e.get("label") or p.name, "path": str(p),
            "load": e["load"], "note": e["note"], "secret": bool(e.get("secret")),
            "content": content, "size": size, "exists": exists,
        })
    auto = sum(f["size"] for f in files if f["load"] == "auto")
    return JSONResponse({"files": files, "auto_bytes": auto})


@app.post("/api/context-files")
async def api_save_context_file(body: ContextFileBody):
    """Save one registry file in place. `name` carries the registry id — the path
    is never taken from the client, so there is nothing to traverse."""
    entry = next((e for e in _context_file_entries() if e["id"] == body.name), None)
    if entry is None:
        return JSONResponse({"error": "Unknown context file"}, status_code=404)
    p = entry["path"]
    try:
        existing = p.read_text() if p.exists() else None
        if existing != body.content:
            _backup_before_dashboard_write(p)
            p.parent.mkdir(parents=True, exist_ok=True)
            p.write_text(body.content)
        if entry.get("secret"):
            try:
                os.chmod(p, 0o600)
            except Exception:
                logger.debug("chmod 600 failed for %s", p, exc_info=True)
        return JSONResponse({"ok": True, "id": entry["id"], "size": p.stat().st_size})
    except Exception:
        logger.exception("Failed to save context file %s", p)
        return JSONResponse({"error": "Failed to save file"}, status_code=500)


# --- Skills file management ---
#
# There are three layers:
#   1. Library:  ~/.tmux-dashboard/skill-library/<name>/SKILL.md
#                Canonical user-authored skills with YAML frontmatter
#                (name + description). This is the source of truth.
#   2. Account:  <owner CODEX_HOME>/skills/<name>/SKILL.md
#                Private skills loaded in every session owned by that account.
#   3. Built-ins: bundled into the Codex binary itself. Always present,
#                not configurable per account. Listed via /api/builtin-skills
#                so the UI can surface them as read-only.



# Built-in skills bundled with Codex itself. Always available; cannot be
# disabled per account. Surfaced to the UI as a read-only "Built-in" section
# so users understand which skills are available without any configuration.
_BUILTIN_SKILLS = [
    {"name": "imagegen", "description": "Generate and edit images with OpenAI image models."},
    {"name": "openai-docs", "description": "Look up OpenAI / Codex documentation."},
    {"name": "plugin-creator", "description": "Scaffold a new Codex plugin."},
    {"name": "skill-creator", "description": "Create a new Codex skill (SKILL.md) interactively."},
    {"name": "skill-installer", "description": "Install or manage Codex skills."},
]












def _is_library_link(skills_dir: Path, skill_dir_name: str) -> bool:
    """Return True iff `skills_dir/skill_dir_name` is a symlink to the library copy."""
    target = skills_dir / skill_dir_name
    if not target.is_symlink():
        return False
    try:
        resolved = target.resolve()
    except Exception:
        return False
    expected = (SKILL_LIBRARY_DIR / skill_dir_name).resolve()
    return resolved == expected












@app.get("/api/my/skills")
async def api_list_my_skills(request: Request):
    """List the canonical skills loaded by the signed-in account."""
    user = _current_user(request)
    if not user:
        return JSONResponse({"error": "Not logged in"}, status_code=401)
    if not _is_admin(user):
        _ensure_user_codex_config_dir(user)
    skills_dir = _account_skills_dir(user)
    skills = []
    legacy_files = []
    for entry in sorted(skills_dir.iterdir()):
        info = _read_skill_dir(entry)
        if info:
            info["from_library"] = False
            skills.append(info)
        elif entry.is_file() and entry.suffix == ".md":
            legacy_files.append(entry.name)
    return JSONResponse({
        "skills": skills,
        "legacy_files": legacy_files,
        "path": str(skills_dir),
        "scope": "account",
    })


@app.post("/api/my/skills/{skill_name}")
async def api_save_my_skill(
    request: Request,
    skill_name: str,
    body: SaveLibrarySkillBody,
):
    user = _current_user(request)
    if not user:
        return JSONResponse({"error": "Not logged in"}, status_code=401)
    name = _sanitize_skill_dir_name(skill_name)
    if not name:
        return JSONResponse({"error": "Invalid skill name"}, status_code=400)
    if not _is_admin(user):
        _ensure_user_codex_config_dir(user)
    skills_dir = _account_skills_dir(user)
    target = skills_dir / name
    if target.is_symlink() or target.resolve().parent != skills_dir.resolve():
        return JSONResponse({"error": "Invalid account skill path"}, status_code=400)
    description = (body.description or "").strip().replace("\n", " ").replace("\r", " ")
    raw = (body.content or "").lstrip()
    if raw.startswith("---"):
        content = raw if raw.endswith("\n") else raw + "\n"
    else:
        content = (
            f"---\nname: {name}\ndescription: {description}\n---\n\n"
            f"{raw.rstrip()}\n"
        )
    target.mkdir(parents=True, exist_ok=True)
    target.chmod(0o700)
    skill_md = target / "SKILL.md"
    if skill_md.exists():
        _backup_before_dashboard_write(skill_md)
    skill_md.write_text(content)
    skill_md.chmod(0o600)
    return JSONResponse({"ok": True, "name": name, "scope": "account"})


@app.get("/api/my/skills/{skill_name}")
async def api_get_my_skill(request: Request, skill_name: str):
    user = _current_user(request)
    if not user:
        return JSONResponse({"error": "Not logged in"}, status_code=401)
    name = _sanitize_skill_dir_name(skill_name)
    if not name:
        return JSONResponse({"error": "Invalid skill name"}, status_code=400)
    if not _is_admin(user):
        _ensure_user_codex_config_dir(user)
    skills_dir = _account_skills_dir(user)
    target = skills_dir / name
    if target.is_symlink() or target.resolve().parent != skills_dir.resolve():
        return JSONResponse({"error": "Invalid account skill path"}, status_code=400)
    info = _read_skill_dir(target)
    if not info:
        return JSONResponse({"error": "Skill not found"}, status_code=404)
    info["scope"] = "account"
    return JSONResponse(info)


@app.delete("/api/my/skills/{skill_name}")
async def api_delete_my_skill(request: Request, skill_name: str):
    user = _current_user(request)
    if not user:
        return JSONResponse({"error": "Not logged in"}, status_code=401)
    name = _sanitize_skill_dir_name(skill_name)
    if not name:
        return JSONResponse({"error": "Invalid skill name"}, status_code=400)
    if not _is_admin(user):
        _ensure_user_codex_config_dir(user)
    skills_dir = _account_skills_dir(user)
    target = skills_dir / name
    if target.is_symlink() or target.resolve().parent != skills_dir.resolve():
        return JSONResponse({"error": "Invalid account skill path"}, status_code=400)
    if not target.is_dir():
        return JSONResponse({"error": "Skill not found"}, status_code=404)
    trash_dir = _user_codex_config_dir(user) / ".skill-trash"
    trash_dir.mkdir(parents=True, exist_ok=True)
    trash_dir.chmod(0o700)
    trash_target = trash_dir / f"{name}-{int(time.time() * 1000)}"
    shutil.move(str(target), str(trash_target))
    # A moved directory keeps its original mode.  Harden the recoverable copy
    # after the move so another OS account on the shared host cannot traverse
    # or read a member's retired skill.
    trash_target.chmod(0o700)
    for archived_path in trash_target.rglob("*"):
        if archived_path.is_symlink():
            continue
        archived_path.chmod(0o700 if archived_path.is_dir() else 0o600)
    return JSONResponse({"ok": True, "name": name, "recoverable": True})


@app.get("/api/sessions/{session_name}/skills")
async def api_list_skills(session_name: str):
    """List .md skill files for a session."""
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    d = _skill_dir_for_session(session_name)
    files = []
    for p in sorted(d.iterdir()):
        if p.suffix == ".md" and p.is_file():
            try:
                content = p.read_text()
                stat = p.stat()
                files.append({
                    "name": p.name,
                    "content": content,
                    "size": stat.st_size,
                    "modified": stat.st_mtime,
                })
            except Exception:
                logger.debug("Failed to read skill file %s", p, exc_info=True)
    return JSONResponse({"files": files, "path": str(d)})


@app.post("/api/sessions/{session_name}/skills")
async def api_save_skill(session_name: str, body: SkillFileBody):
    """Create or update a skill .md file."""
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    fname = _sanitize_skill_filename(body.name)
    if not fname:
        return JSONResponse({"error": "Invalid filename. Use alphanumeric, hyphens, underscores with .md extension."}, status_code=400)
    d = _skill_dir_for_session(session_name)
    fpath = d / fname
    # Resolve to prevent traversal
    if not str(fpath.resolve()).startswith(str(d.resolve())):
        return JSONResponse({"error": "Invalid path"}, status_code=400)
    try:
        fpath.write_text(body.content)
        return JSONResponse({"ok": True, "name": fname, "path": str(fpath)})
    except Exception:
        logger.exception("Failed to save skill file")
        return JSONResponse({"error": "Failed to save skill file"}, status_code=500)


@app.delete("/api/sessions/{session_name}/skills/{filename}")
async def api_delete_skill(session_name: str, filename: str):
    """Delete a skill .md file."""
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    fname = _sanitize_skill_filename(filename)
    if not fname:
        return JSONResponse({"error": "Invalid filename"}, status_code=400)
    d = _skill_dir_for_session(session_name)
    fpath = d / fname
    if not str(fpath.resolve()).startswith(str(d.resolve())):
        return JSONResponse({"error": "Invalid path"}, status_code=400)
    if not fpath.exists():
        return JSONResponse({"error": "File not found"}, status_code=404)
    try:
        fpath.unlink()
        return JSONResponse({"ok": True})
    except Exception:
        logger.exception("Failed to delete skill file")
        return JSONResponse({"error": "Failed to delete skill file"}, status_code=500)


@app.get("/api/skill-library")
async def api_list_skill_library():
    """List all skills in the library with their frontmatter metadata."""
    return JSONResponse({"skills": _list_library_skills()})


@app.get("/api/skill-library/{skill_name}")
async def api_get_library_skill(skill_name: str):
    """Return the SKILL.md content + metadata for a single library skill."""
    name = _sanitize_skill_dir_name(skill_name)
    if not name:
        return JSONResponse({"error": "Invalid skill name"}, status_code=400)
    info = _read_skill_dir(SKILL_LIBRARY_DIR / name)
    if not info:
        return JSONResponse({"error": "Skill not found"}, status_code=404)
    return JSONResponse(info)


@app.post("/api/skill-library/{skill_name}")
async def api_save_library_skill(skill_name: str, body: SaveLibrarySkillBody):
    """Create or update a library skill.

    Body content is the raw SKILL.md text. If it already starts with a `---`
    frontmatter block, it is trusted as-is. Otherwise we synthesize a frontmatter
    block from `skill_name` and `description`.
    """
    name = _sanitize_skill_dir_name(skill_name)
    if not name:
        return JSONResponse({"error": "Invalid skill name (alphanumeric, hyphens, underscores; max 64 chars)"}, status_code=400)
    desc = (body.description or "").strip().replace("\n", " ").replace("\r", " ")
    raw = (body.content or "").lstrip()
    if raw.startswith("---"):
        full = raw if raw.endswith("\n") else raw + "\n"
    else:
        full = f"---\nname: {name}\ndescription: {desc}\n---\n\n{raw.rstrip()}\n"
    d = SKILL_LIBRARY_DIR / name
    try:
        d.mkdir(parents=True, exist_ok=True)
        (d / "SKILL.md").write_text(full)
    except Exception:
        logger.exception("Failed to save library skill")
        return JSONResponse({"error": "Failed to save skill"}, status_code=500)
    return JSONResponse({"ok": True, "name": name})


@app.delete("/api/skill-library/{skill_name}")
async def api_delete_library_skill(skill_name: str):
    """Delete a shared library skill and clean up account links to it."""
    name = _sanitize_skill_dir_name(skill_name)
    if not name:
        return JSONResponse({"error": "Invalid skill name"}, status_code=400)
    d = SKILL_LIBRARY_DIR / name
    if not d.is_dir():
        return JSONResponse({"error": "Skill not found"}, status_code=404)
    # Sweep account skill directories and remove links to the deleted library copy.
    try:
        for account in _load_users():
            sd = _user_codex_config_dir(account) / "skills"
            link = sd / name
            if link.is_symlink() and _is_library_link(sd, name):
                try:
                    link.unlink()
                except Exception:
                    logger.debug("Failed to clean up account skill link %s", link, exc_info=True)
    except Exception:
        logger.debug("Failed to sweep account skill links for deleted skill", exc_info=True)
    try:
        shutil.rmtree(str(d))
    except Exception:
        logger.exception("Failed to delete library skill")
        return JSONResponse({"error": "Failed to delete skill"}, status_code=500)
    return JSONResponse({"ok": True})


@app.get("/api/builtin-skills")
async def api_list_builtin_skills():
    """Return the list of skills bundled with Codex itself (read-only)."""
    return JSONResponse({"skills": list(_BUILTIN_SKILLS)})


# --- Standard Codex settings -----------------------------------------------
# All sessions use their owner's one CODEX_HOME, with no per-session config mapping.




def _backup_before_dashboard_write(path: Path):
    """Back up an existing file before the dashboard overwrites it."""
    if not path.exists():
        return
    try:
        backup = path.with_name(f"{path.name}.bak-dashboard-{int(time.time() * 1000)}")
        shutil.copy2(path, backup)
    except Exception:
        logger.debug("Failed to back up %s before dashboard write", path, exc_info=True)


# Wire services/member_auth.py once its helpers exist.
member_auth_service.configure(
    _active_openai_key=_active_openai_key,
    _backup_before_dashboard_write=_backup_before_dashboard_write,
    _ensure_group_dir=_ensure_group_dir,
    _existing_playwright_block=_existing_playwright_block,
    _load_session_owners=_load_session_owners,
    _multi_tenant_enabled=_multi_tenant_enabled,
    _strip_managed_block=_strip_managed_block,
    _user_codex_config_dir=_user_codex_config_dir,
    _write_codex_api_auth=_write_codex_api_auth,
)


# Wire services/agent_config.py once its helpers exist.
agent_config_service.configure(
    _backup_before_dashboard_write=_backup_before_dashboard_write,
    _ensure_user_codex_config_dir=_ensure_user_codex_config_dir,
    _first_existing_path=_first_existing_path,
    _group_dir=_group_dir,
    _user_codex_config_dir=_user_codex_config_dir,
)


# Wire services/projects.py once its helpers exist.
projects_service.configure(
    _backup_before_dashboard_write=_backup_before_dashboard_write,
    _session_owner_id=_session_owner_id,
    _toml_escape=_toml_escape,
    _user_codex_config_dir=_user_codex_config_dir,
    _user_data_dir=_user_data_dir,
)


# Wire services/browser.py here rather than beside its import: these helpers are
# defined further down the file, and configuring at import position would bind
# names that do not exist yet.
browser_service.configure(
    backup_before_dashboard_write=_backup_before_dashboard_write,
    configure_member_codex_isolation=_configure_member_codex_isolation,
    controller_call=_controller_call,
    ensure_user_codex_config_dir=_ensure_user_codex_config_dir,
    toml_escape=_toml_escape,
    user_codex_config_dir=_user_codex_config_dir,
    client=client,
)






def _normalize_reasoning_effort(effort: str | None) -> str | None:
    value = (effort or "").strip().lower()
    if not value:
        return ""
    value = _CODEX_REASONING_EFFORT_ALIASES.get(value, value)
    if value not in _CODEX_REASONING_EFFORTS:
        return None
    return value


class SetSessionEffortBody(BaseModel):
    effort: str
    restart: bool = False


class SetSessionModelBody(BaseModel):
    model: str
    restart: bool = False

# --- Project-scope (per-session, cwd-bound) file management ---
# Codex loads these on top of the owner's account configuration:
# <cwd>/AGENTS.md, <cwd>/.codex/config.toml, <cwd>/.mcp.json.
# Surface them in the session's "More" dropdown so the user can edit per-project
# rules without leaving the dashboard.





@app.get("/api/sessions/{session_name}/project-files")
async def api_list_session_project_files(session_name: str):
    """Inventory of project-scope files for this session's cwd."""
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    cwd = get_session_cwd(session_name) or ""
    files = []
    if cwd:
        base = Path(cwd)
        for rel, kind, desc in _PROJECT_FILES:
            p = base / rel
            files.append({
                "path": rel, "kind": kind, "description": desc,
                "exists": p.exists(),
                "size": p.stat().st_size if p.exists() else 0,
            })
    return JSONResponse({"cwd": cwd, "files": files})


@app.get("/api/sessions/{session_name}/project-file")
async def api_get_session_project_file(session_name: str, path: str):
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    cwd = get_session_cwd(session_name) or ""
    target = _safe_project_path(cwd, path)
    if target is None:
        return JSONResponse({"error": "Invalid path (not an allowed project file or session has no cwd)"},
                            status_code=400)
    content = ""
    exists = target.exists()
    if exists:
        try:
            content = target.read_text()
        except Exception:
            logger.debug("Failed to read %s", target, exc_info=True)
            return JSONResponse({"error": "Could not read file"}, status_code=500)
    return JSONResponse({"path": path, "abs_path": str(target),
                         "content": content, "exists": exists,
                         "cwd": cwd,
                         "size": target.stat().st_size if exists else 0})




@app.put("/api/sessions/{session_name}/project-file")
async def api_save_session_project_file(session_name: str, body: ProjectFileBody):
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    cwd = get_session_cwd(session_name) or ""
    target = _safe_project_path(cwd, body.path)
    if target is None:
        return JSONResponse({"error": "Invalid path"}, status_code=400)
    if target.suffix.lower() == ".json" and body.content.strip():
        try:
            json.loads(body.content)
        except Exception as e:
            return JSONResponse({"error": f"Invalid JSON: {e}"}, status_code=400)
    if target.suffix.lower() == ".toml" and body.content.strip():
        try:
            tomllib.loads(body.content)
        except tomllib.TOMLDecodeError as e:
            return JSONResponse({"error": f"Invalid TOML: {e}"}, status_code=400)
    try:
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(body.content)
        return JSONResponse({"ok": True, "path": body.path,
                             "abs_path": str(target),
                             "size": target.stat().st_size})
    except Exception:
        logger.exception("Failed to write project file %s", target)
        return JSONResponse({"error": "Failed to save"}, status_code=500)


















def _require_ssh_ide_admin(request: Request) -> dict | None:
    user = _current_user(request)
    return user if _is_admin(user) else None



























































































































@app.get("/ide/{session_name}", response_class=HTMLResponse)
async def remote_ide_page(request: Request, session_name: str):
    """Serve the Svelte Remote IDE shell for one owned session."""
    denied = _ssh_ide_denied(request)
    if denied:
        return HTMLResponse("<h1>Sign in to use the Remote SSH IDE</h1>", status_code=403)
    _sessions, session = _find_session_for_user(session_name, _current_user(request))
    if not session:
        return HTMLResponse("<h1>Session not found</h1>", status_code=404)
    if not IDE_BUNDLE_ENTRY.is_file():
        return HTMLResponse(
            "<h1>Remote IDE bundle is not built</h1>"
            "<p>Run <code>make ide</code> on the dashboard host, then reload.</p>",
            status_code=503,
        )
    names = [str(item.get("name") or "") for item in (_sessions or []) if item.get("name")]
    bootstrap = json.dumps({
        "session": session_name,
        "sessions": names,
        "rootPath": ROOT_PATH,
    })
    return HTMLResponse(
        "<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\">"
        "<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">"
        f"<title>Remote IDE · {html.escape(session_name)}</title>"
        "<style>html,body{margin:0;height:100%;background:#272822}#ide-root{height:100vh}</style>"
        f"<link rel=\"stylesheet\" href=\"{ROOT_PATH}/static/ide/ide.css\">"
        "</head><body><div id=\"ide-root\"></div>"
        f"<script>window.__IDE_BOOTSTRAP__={bootstrap};</script>"
        f"<script type=\"module\" src=\"{ROOT_PATH}/static/ide/ide.js\"></script>"
        "</body></html>"
    )


@app.websocket("/ws/sessions/{session_name}/ide/terminal/{connection_id}")
async def ws_ssh_ide_terminal(ws: WebSocket, session_name: str, connection_id: str):
    # `?index=N` selects which of the connection's terminals to attach to, so a
    # workspace can have several independent shells. Index 0 is the original
    # window, so an old client that sends no index keeps its terminal.
    await _ws_ssh_ide_terminal(ws, session_name, connection_id)


async def _ws_ssh_ide_terminal(ws: WebSocket, session_name: str, connection_id: str):
    """Bidirectional PTY bridge to the session's SSH tmux window.

    Authorization mirrors the HTTP IDE routes: a valid token, access to the
    session, and ownership of the connection. A connection the caller does not
    own is closed as if it did not exist.
    """
    if AUTH_PASS and not _check_token(ws.cookies.get(AUTH_COOKIE)):
        await ws.close(code=1008)
        return
    user = _current_user(ws)
    if not user or not _user_can_access_session(user, session_name):
        await ws.close(code=1008)
        return
    profile = _ssh_profile(session_name, connection_id, user)
    if not profile:
        await ws.close(code=1008)
        return
    # Clamped rather than rejected: a bad index should open a terminal, not
    # fail the socket. The cap bounds how many tmux windows one connection can
    # create from the browser.
    try:
        index = int(ws.query_params.get("index") or 0)
    except (TypeError, ValueError):
        index = 0
    index = max(0, min(index, MAX_IDE_TERMINALS - 1))
    if not await asyncio.to_thread(_ssh_control_is_alive, profile, session_name):
        await ws.close(code=1011)
        return
    # The shell lives in a tmux window, which is what makes this terminal
    # persistent across browser reloads. If that window is gone (killed, or the
    # tmux server restarted) attaching would fail forever, so re-create it and
    # hand the client a working terminal instead of a dead one.
    if not await asyncio.to_thread(_ssh_tmux_window_exists, profile, session_name, index):
        try:
            await asyncio.to_thread(_ssh_open_tmux_window, profile, session_name, index)
        except (OSError, RuntimeError, subprocess.TimeoutExpired):
            logger.info("Could not re-open terminal window for %s", session_name, exc_info=True)
            await ws.close(code=1011)
            return

    await ws.accept()
    process = master_fd = None
    loop = asyncio.get_running_loop()
    try:
        # The user is already resolved above; log directly rather than
        # re-deriving it from a WebSocket via the HTTP-shaped helper.
        try:
            await asyncio.to_thread(
                _append_ssh_ide_audit, user, session_name, profile, "terminal_attached"
            )
        except OSError:
            logger.exception("Could not append SSH IDE terminal audit event")
        process, master_fd = await _ssh_terminal_pty(profile, session_name, 80, 24, index)

        async def pump_output():
            """Forward PTY bytes to the browser without blocking the loop."""
            reader = asyncio.StreamReader()
            transport, _protocol = await loop.connect_read_pipe(
                lambda: asyncio.StreamReaderProtocol(reader), os.fdopen(master_fd, "rb", 0)
            )
            try:
                while True:
                    chunk = await reader.read(4096)
                    if not chunk:
                        return
                    await ws.send_bytes(chunk)
            finally:
                transport.close()

        async def pump_input():
            """Forward keystrokes, and resize requests, from the browser."""
            while True:
                message = await ws.receive()
                if message["type"] == "websocket.disconnect":
                    return
                data = message.get("bytes")
                if data:
                    os.write(master_fd, data)
                    continue
                text = message.get("text")
                if not text:
                    continue
                # Text frames carry control messages only; keystrokes are binary,
                # so a resize can never be mistaken for typed input.
                try:
                    payload = json.loads(text)
                except ValueError:
                    continue
                if payload.get("type") == "resize":
                    _ssh_set_pty_size(
                        master_fd,
                        payload.get("cols", 80),
                        payload.get("rows", 24),
                        process.pid,
                    )

        tasks = {asyncio.create_task(pump_output()), asyncio.create_task(pump_input())}
        done, pending = await asyncio.wait(tasks, return_when=asyncio.FIRST_COMPLETED)
        for task in pending:
            task.cancel()
        await asyncio.gather(*pending, return_exceptions=True)
        for task in done:
            task.result()
    except WebSocketDisconnect:
        pass
    except Exception as exc:
        logger.warning(
            "SSH IDE terminal ended for '%s': %s: %s", session_name, type(exc).__name__, exc
        )
    finally:
        # Detaching must not kill the tmux window: the same shell is still the
        # user's SSH session, and other views may be attached to it.
        if process and process.returncode is None:
            try:
                process.terminate()
                await asyncio.wait_for(process.wait(), timeout=5)
            except (ProcessLookupError, asyncio.TimeoutError):
                pass
        try:
            await ws.close()
        except Exception:
            pass


@app.get("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/agent-context")
async def api_agent_workspace_context(request: Request, session_name: str, connection_id: str):
    """Context the chat panel prepends so the agent works on the RIGHT machine.

    The agent process runs on the dashboard host, but an SSH workspace lives
    somewhere else entirely. Without this the agent inspected its own cwd and
    reported the workspace "not visible" -- correctly, but uselessly.

    For an SSH workspace this hands over the exact `ssh` invocation that reaches
    it, using the connection's own stored key. That is a real grant of shell
    access on the remote host, so it is built server-side (the browser never
    learns the key path) and only for a connection the caller already owns.
    """
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    root = str(profile.get("workspace_root") or ".")
    if _is_local_profile(profile):
        return JSONResponse({
            "kind": "local",
            "root": root,
            "context": f"[IDE workspace]\nLocal folder on this machine: {root}\n",
        })

    host = str(profile.get("host") or "")
    username = str(profile.get("username") or "")
    port = int(profile.get("port") or 22)
    try:
        argv = await asyncio.to_thread(_ssh_argv, profile)
    except RuntimeError as exc:
        return JSONResponse({"error": str(exc)}, status_code=400)
    # _ssh_argv ends with user@host; the flags before it are what the agent
    # needs to authenticate the same way the IDE does.
    flags = " ".join(shlex.quote(part) for part in argv[1:-1])
    ssh_cmd = f"ssh {flags} {username}@{host}"

    listing = ""
    try:
        # Use the workspace-scoped command so the listing is of the configured
        # root, not the login directory the bare script would land in.
        raw = await asyncio.to_thread(
            _ssh_run, profile, session_name,
            _ssh_workspace_command(profile, _SSH_LIST_SCRIPT, "."),
            timeout=20,
        )
        entries = json.loads(raw).get("entries", [])
        names = [e["name"] + ("/" if e.get("is_dir") else "") for e in entries[:60]]
        listing = "  " + "  ".join(names) if names else "  (empty)"
    except (RuntimeError, ValueError, subprocess.TimeoutExpired):
        listing = "  (could not list — the connection may be down)"

    context = (
        "[IDE workspace — IMPORTANT]\n"
        f"The files you are being asked about are NOT on this machine. They are on\n"
        f"{username}@{host}:{port}, in {root}.\n\n"
        "Run commands there with this exact prefix (the key is already authorised):\n"
        f"  {ssh_cmd} 'cd {shlex.quote(root)} && <your command>'\n\n"
        f"Workspace root ({root}) contains:\n{listing}\n"
    )
    return JSONResponse({
        "kind": "ssh",
        "root": root,
        "host": host,
        "username": username,
        "ssh_command": ssh_cmd,
        "context": context,
    })


@app.get("/api/sessions/{session_name}/ide/chat")
async def api_ide_chat_messages(request: Request, session_name: str, limit: int = 80):
    """Return recent agent chat for the IDE panel.

    The Svelte IDE has no access to the dashboard's global session poll, so it
    reads replies here. Ownership is enforced the same way as every other IDE
    route, and messages come from the owner's store rather than the caller's.
    """
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    # Assistant replies are only written when something captures the agent's
    # finished turn. That used to happen exclusively in the dashboard's session
    # poll, so an IDE used on its own showed the user's own messages and never
    # an answer. Capture here too, on the same idle/signature gates.
    await _capture_agent_reply(session_name)
    messages = await asyncio.to_thread(_load_session_messages, session_name)
    bounded = max(1, min(int(limit or 80), 200))
    # Report whether the agent is mid-turn. The composer only knew about its own
    # POST, which finishes in milliseconds, so the panel looked idle for the
    # minutes the agent was actually working.
    activity = _activity_state.get(session_name) or {}
    busy = str(activity.get("status") or "") == "busy"
    # While a turn is in flight, hand back what the agent has written SO FAR.
    #
    # Both CLIs append their assistant blocks to the transcript as the turn
    # progresses, so re-reading it each poll streams the reply in. This is
    # deliberately not persisted: the stored message is still written once, when
    # the turn settles, so a partial read can never become the saved reply.
    pending = ""
    if busy:
        try:
            last_user = next(
                (m.get("text", "") for m in reversed(messages) if m.get("role") == "user"),
                "",
            )
            draft = await asyncio.to_thread(
                _extract_last_assistant_turn, session_name, last_user
            )
            draft = (draft or "").strip()
            if draft and not _turn_is_only_status(draft):
                pending = _turn_full_text(draft)
        except Exception:  # noqa: BLE001 - a missing draft must not fail the poll
            logger.debug("pending turn read failed for %s", session_name, exc_info=True)
    return JSONResponse({
        "messages": messages[-bounded:],
        "busy": busy,
        "detail": str(activity.get("detail") or "") if busy else "",
        "pending": pending,
    })


@app.get("/api/sessions/{session_name}/ide/ssh-connections")
async def api_list_ssh_connections(request: Request, session_name: str):
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profiles = _ssh_profiles(session_name, _current_user(request))
    return JSONResponse({"connections": [_ssh_public_profile(item) for item in profiles]})








@app.get("/api/ide/connections/saved")
async def api_saved_connections(request: Request):
    """Every connection this user owns, across all sessions.

    The per-session lists power the IDE; this one powers "reuse a saved
    connection" when creating a session, so a host is configured once rather
    than re-entered for each new session.
    """
    denied = _ssh_ide_denied(request)
    if denied:
        return denied
    user = _current_user(request)
    data = _ssh_connections_store().read()
    profiles = data.get("connections") if isinstance(data, dict) else []
    seen: dict[str, dict] = {}
    for profile in profiles:
        if not isinstance(profile, dict) or not _ssh_user_may_use_profile(user, profile):
            continue
        public = _ssh_public_profile(profile)
        # One host may be attached to several sessions; offer each target once,
        # keyed by what actually identifies it.
        key = "|".join([
            str(public.get("kind") or "ssh"),
            str(public.get("host") or ""),
            str(public.get("username") or ""),
            str(public.get("port") or 22),
            str(public.get("workspace_root") or ""),
        ])
        if key not in seen:
            seen[key] = public
    items = sorted(seen.values(), key=lambda item: (item.get("kind") or "", (item.get("label") or "").lower()))
    return JSONResponse({"connections": items})


@app.get("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/browse")
async def api_browse_connection_directories(
    request: Request, session_name: str, connection_id: str, path: str = ""
):
    """Browse folders on whichever machine this connection points at.

    "Open Folder" used to always browse the dashboard host, so choosing a folder
    while connected over SSH silently created a LOCAL workspace pointing at a
    path on the wrong machine. This walks the connection's own filesystem.
    """
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    if _is_local_profile(profile):
        # A local workspace browses this host, with the caller's own scoping.
        return await api_browse_directories(request, path=path)
    target = (path or "").strip() or "."
    if len(target) > 4096 or "\x00" in target:
        return JSONResponse({"error": "Invalid path"}, status_code=400)
    try:
        raw = await asyncio.to_thread(
            _ssh_run,
            profile,
            session_name,
            _WorkspaceCommand(
                _ssh_remote_command(_SSH_BROWSE_SCRIPT, target), _SSH_BROWSE_SCRIPT, target
            ),
            timeout=25,
        )
        return JSONResponse(json.loads(raw))
    except (RuntimeError, ValueError, subprocess.TimeoutExpired) as exc:
        return JSONResponse({"error": str(exc)[:300]}, status_code=502)


@app.get("/api/ide/browse")
async def api_browse_directories(request: Request, path: str = ""):
    """List sub-directories so the IDE can offer a VS Code style folder picker.

    Directories only: this feeds "Open Folder", and never returns file contents.
    """
    denied = _ssh_ide_denied(request)
    if denied:
        return denied
    user = _current_user(request)
    roots = _browse_roots(user)
    if not roots:
        return JSONResponse({"error": "No browsable location for this account"}, status_code=403)
    raw = (path or "").strip() or str(roots[0])
    try:
        target = Path(raw).expanduser().resolve(strict=True)
    except (OSError, ValueError, RuntimeError):
        return JSONResponse({"error": "Folder not found"}, status_code=404)
    if not target.is_dir():
        return JSONResponse({"error": "Not a folder"}, status_code=400)
    if not _browse_path_allowed(target, roots):
        return JSONResponse({"error": "Folder is outside your allowed area"}, status_code=403)
    entries = []
    try:
        with os.scandir(target) as children:
            for entry in children:
                if not entry.name.startswith("."):
                    try:
                        if entry.is_dir(follow_symlinks=False):
                            entries.append({"name": entry.name, "path": str(target / entry.name)})
                    except OSError:
                        continue
    except PermissionError:
        return JSONResponse({"error": "Permission denied for this folder"}, status_code=403)
    except OSError as exc:
        return JSONResponse({"error": str(exc)[:200]}, status_code=400)
    entries.sort(key=lambda item: item["name"].lower())
    parent = str(target.parent)
    return JSONResponse({
        "path": str(target),
        # Withhold the parent at a boundary so the UI cannot offer a step up
        # into a directory the next request would refuse anyway.
        "parent": parent if (parent != str(target) and _browse_path_allowed(Path(parent), roots)) else "",
        "entries": entries[:1000],
        "is_git": (target / ".git").exists(),
    })




@app.post("/api/sessions/{session_name}/ide/ssh-connections")
async def api_create_ssh_connection(request: Request, session_name: str, body: SSHConnectionBody):
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    kind = (body.kind or "ssh").strip().lower()
    if kind not in {"ssh", LOCAL_CONNECTION_KIND}:
        return JSONResponse({"error": "Connection kind must be 'ssh' or 'local'"}, status_code=400)
    if kind == LOCAL_CONNECTION_KIND:
        return await _create_local_workspace(request, session_name, body)
    host = body.host.strip()
    username = body.username.strip()
    label = (body.label.strip() or f"{username}@{host}")[:80]
    auth_mode = body.auth_mode.strip().lower()
    identity_file = _normalized_ssh_identity_file(body.identity_file)
    if not _valid_ssh_host(host):
        return JSONResponse({"error": "Enter a valid hostname or IP address"}, status_code=400)
    if not _SSH_USER_RE.fullmatch(username):
        return JSONResponse({"error": "Enter a valid SSH username"}, status_code=400)
    if not 1 <= body.port <= 65535:
        return JSONResponse({"error": "SSH port must be between 1 and 65535"}, status_code=400)
    if identity_file is None:
        return JSONResponse({"error": "Identity file must be a readable file under ~/.ssh"}, status_code=400)
    if auth_mode not in {"agent", "key", "password"}:
        return JSONResponse({"error": "Choose SSH agent, key, or password authentication"}, status_code=400)
    pasted_key = (body.private_key or "").strip()
    if pasted_key and not _valid_private_key_blob(pasted_key):
        return JSONResponse(
            {"error": "That does not look like an OpenSSH private key (expected a BEGIN … PRIVATE KEY block)"},
            status_code=400,
        )
    # A passphrase-protected key cannot be used: connections run under
    # BatchMode=yes with no askpass, so OpenSSH fails with a bare
    # "permission denied" that reads like wrong credentials. Say so up front
    # instead of storing a passphrase nothing ever applies.
    if pasted_key and _private_key_is_encrypted(pasted_key):
        return JSONResponse(
            {"error": "That key is passphrase-protected, which is not supported here. "
                      "Paste a key without a passphrase, or use password authentication."},
            status_code=400,
        )
    if auth_mode == "key" and not identity_file and not pasted_key:
        return JSONResponse(
            {"error": "Paste a private key, or name an existing identity file under ~/.ssh"},
            status_code=400,
        )
    if auth_mode == "password" and (not body.password or "\x00" in body.password or len(body.password) > 4096):
        return JSONResponse({"error": "Enter a valid SSH password"}, status_code=400)
    workspace_root = body.workspace_root.strip() or "."
    if len(workspace_root) > 4096 or "\x00" in workspace_root:
        return JSONResponse({"error": "Enter a valid remote workspace root"}, status_code=400)
    if not 1_024 <= body.max_file_bytes <= SSH_MAX_FILE_BYTES:
        return JSONResponse({"error": "File limit must be between 1 KB and 1 MB"}, status_code=400)
    user = _current_user(request)
    # The id is the AES-GCM AAD, so it must exist before the secret is sealed.
    connection_id = secrets.token_urlsafe(12)
    try:
        password_enc = _ssh_vault_encrypt(body.password, connection_id)
        private_key_enc = _ssh_vault_encrypt(pasted_key, connection_id)
        passphrase_enc = _ssh_vault_encrypt(body.key_passphrase or "", connection_id)
    except RuntimeError as exc:
        return JSONResponse({"error": str(exc)}, status_code=500)
    profile = {
        "id": connection_id,
        "session_name": session_name,
        "label": label,
        "host": host,
        "username": username,
        "port": body.port,
        "identity_file": identity_file,
        "auth_mode": auth_mode,
        "workspace_root": workspace_root,
        "max_file_bytes": body.max_file_bytes,
        "owner_id": str((user or {}).get("id") or ""),
        "owner_username": str((user or {}).get("username") or ""),
        "password_enc": password_enc,
        "private_key_enc": private_key_enc,
        "passphrase_enc": passphrase_enc,
        "last_directory": ".",
        "created_at": time.time(),
    }

    def add(data: dict):
        data.setdefault("connections", []).append(profile)

    _ssh_connections_store().update(add)
    _harden_ssh_state_file(SSH_CONNECTIONS_FILE)
    return JSONResponse({"ok": True, "connection": _ssh_public_profile(profile)}, status_code=201)




@app.post("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/workspace-root")
async def api_set_workspace_root(
    request: Request, session_name: str, connection_id: str, body: SSHWorkspaceRootBody
):
    """Point an existing connection at a different folder.

    Cloning the connection instead would break authentication: a stored key or
    password is sealed with the connection id as GCM AAD, so a copy under a new
    id cannot decrypt it. Re-rooting keeps the working credential.
    """
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    root = (body.workspace_root or "").strip()
    if not root or len(root) > 4096 or "\x00" in root:
        return JSONResponse({"error": "Enter a valid folder path"}, status_code=400)
    if _is_local_profile(profile):
        resolved = _normalized_local_root(root)
        if resolved is None:
            return JSONResponse(
                {"error": "Enter an existing folder path on this server"}, status_code=400
            )
        denied = _local_root_denied(request, resolved)
        if denied:
            return denied
        root = resolved
    else:
        # Validate the remote path BEFORE committing: this route also clears the
        # stored tabs and buffers, so a typo would destroy unsaved work and
        # leave the connection pointing at a directory that does not exist.
        try:
            await asyncio.to_thread(
                _ssh_run,
                profile,
                session_name,
                _WorkspaceCommand(
                    _ssh_remote_command(_SSH_BROWSE_SCRIPT, root), _SSH_BROWSE_SCRIPT, root
                ),
                timeout=25,
            )
        except (RuntimeError, ValueError, subprocess.TimeoutExpired) as exc:
            return JSONResponse(
                {"error": f"Could not open {root} on the remote host: {str(exc)[:200]}"},
                status_code=400,
            )
    changes = {"workspace_root": root, "last_directory": "."}
    label = (body.label or "").strip()
    if label:
        changes["label"] = label[:80]
    _ssh_update_profile(session_name, connection_id, changes)
    # Stored tabs and buffers belong to the old root; keep them from reopening
    # against paths that may not exist under the new one.
    def drop_state(data: dict) -> None:
        data.setdefault("workspaces", {}).pop(_ssh_ide_state_key(session_name, connection_id), None)

    _ssh_ide_state_store().update(drop_state)
    updated = _ssh_profile(session_name, connection_id, _current_user(request))
    return JSONResponse({"ok": True, "connection": _ssh_public_profile(updated or {})})


@app.delete("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}")
async def api_delete_ssh_connection(request: Request, session_name: str, connection_id: str):
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error

    user = _current_user(request)

    def remove(data: dict) -> bool:
        profiles = data.setdefault("connections", [])
        data["connections"] = [
            item
            for item in profiles
            if not (
                item.get("id") == connection_id
                and item.get("session_name") == session_name
                and _ssh_user_may_use_profile(user, item)
            )
        ]
        return len(data["connections"]) != len(profiles)

    _data, removed = _ssh_connections_store().update(remove)
    if not removed:
        return JSONResponse({"error": "SSH connection not found"}, status_code=404)
    _harden_ssh_state_file(SSH_CONNECTIONS_FILE)
    # A pasted key was materialized to disk for OpenSSH; it must not outlive the
    # connection record that justified storing it.
    _discard_ssh_key(connection_id)

    # Deleting the connection must also drop its stored buffers; leaving them
    # behind would outlive the credential that justified keeping them.
    def drop_state(data: dict) -> None:
        data.setdefault("workspaces", {}).pop(_ssh_ide_state_key(session_name, connection_id), None)

    _ssh_ide_state_store().update(drop_state)
    return JSONResponse({"ok": True})




@app.get("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/host-key")
async def api_ssh_host_key(request: Request, session_name: str, connection_id: str):
    """Fetch the host's public key fingerprint so the user can verify it.

    Connecting requires the host to be in known_hosts (StrictHostKeyChecking is
    deliberately left on). Rather than weakening that, show the fingerprint and
    let the user decide -- the same trust-on-first-use step ssh itself prompts
    for, surfaced in the UI because a detached pane cannot answer a prompt.
    """
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    if _is_local_profile(profile):
        return JSONResponse({"error": "A local workspace has no SSH host key"}, status_code=400)
    host = str(profile.get("host") or "")
    port = int(profile.get("port") or 22)
    if not _valid_ssh_host(host) or not 1 <= port <= 65535:
        return JSONResponse({"error": "SSH connection profile is invalid"}, status_code=400)
    known = await asyncio.to_thread(_ssh_host_is_known, host, port)
    if known:
        return JSONResponse({"known": True, "host": host, "port": port, "fingerprints": []})
    try:
        scan = await asyncio.to_thread(
            subprocess.run,
            ["ssh-keyscan", "-T", "10", "-p", str(port), host],
            capture_output=True, text=True, timeout=20,
        )
    except (OSError, subprocess.TimeoutExpired) as exc:
        return JSONResponse({"error": f"Could not reach {host}: {exc}"[:200]}, status_code=502)
    lines = [ln for ln in (scan.stdout or "").splitlines() if ln.strip() and not ln.startswith("#")]
    if not lines:
        # ssh-keyscan is silent when the host simply does not answer, so say
        # that plainly rather than reporting an empty-looking key failure.
        return JSONResponse({
            "error": f"{host}:{port} is not responding. Check the machine is running "
                     "and reachable from this server.",
            "unreachable": True,
        }, status_code=502)
    return JSONResponse({
        "known": False,
        "host": host,
        "port": port,
        "fingerprints": await asyncio.to_thread(_ssh_key_fingerprints, lines),
    })


@app.post("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/host-key")
async def api_trust_ssh_host(
    request: Request, session_name: str, connection_id: str, body: SSHHostKeyBody
):
    """Add this host's key to known_hosts after the user accepted it."""
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    if not body.accept:
        return JSONResponse({"error": "Host key was not accepted"}, status_code=400)
    host = str(profile.get("host") or "")
    port = int(profile.get("port") or 22)
    if not _valid_ssh_host(host) or not 1 <= port <= 65535:
        return JSONResponse({"error": "SSH connection profile is invalid"}, status_code=400)
    try:
        added = await asyncio.to_thread(_ssh_trust_host, host, port)
    except (OSError, RuntimeError, subprocess.TimeoutExpired) as exc:
        return JSONResponse({"error": str(exc)[:200]}, status_code=502)
    if not added:
        return JSONResponse({"error": f"Could not fetch a host key from {host}"}, status_code=502)
    await _record_ssh_ide_audit(request, session_name, profile, "host_key_trusted")
    return JSONResponse({"ok": True, "host": host, "port": port})


@app.post("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/connect")
async def api_connect_ssh_connection(
    request: Request,
    session_name: str,
    connection_id: str,
    body: SSHConnectBody | None = None,
):
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    # A local workspace has nothing to authenticate: just make sure the folder is
    # still there and give it the same interactive tmux window an SSH target gets.
    if _is_local_profile(profile):
        try:
            window_name = await asyncio.to_thread(_local_open_tmux_window, profile, session_name)
        except (OSError, RuntimeError, subprocess.TimeoutExpired) as exc:
            return JSONResponse({"error": str(exc)}, status_code=502)
        await _record_ssh_ide_audit(request, session_name, profile, "local_opened")
        return JSONResponse({"ok": True, "connected": True, "window_name": window_name})
    # A password supplied in the request wins (rotation / first use); otherwise
    # fall back to the stored credential so a resumed session reconnects without
    # prompting anyone.
    supplied = (body.password if body else "") or ""
    try:
        stored = _ssh_vault_decrypt(
            str(profile.get("password_enc") or ""), str(profile.get("id") or "")
        )
    except RuntimeError as exc:
        return JSONResponse({"error": str(exc)}, status_code=500)
    password = supplied or stored
    try:
        await asyncio.to_thread(_ssh_start_control_master, profile, session_name, password=password)
        window_name = await asyncio.to_thread(_ssh_open_tmux_window, profile, session_name)
        # Recorded only after the connection is actually usable: an audit row
        # written before the last failure point implies a connect that never
        # happened, and this log is the security record.
        await _record_ssh_ide_audit(request, session_name, profile, "connected")
    except (OSError, RuntimeError, subprocess.TimeoutExpired) as exc:
        detail = str(exc)
        low = detail.lower()
        # An untrusted host is a decision the user can make, not a dead end.
        # Flag it so the IDE can offer the fingerprint instead of just failing.
        if "host key verification failed" in low or "is known for" in low:
            return JSONResponse({"error": detail, "needs_host_key": True}, status_code=502)
        # Distinguish "the host is not answering" from a credential problem:
        # the first is nothing the user can fix in this dialog, and reporting it
        # as a generic failure sends people hunting for a wrong password.
        host = str(profile.get("host") or "the host")
        if "timed out" in low or "no route to host" in low or "network is unreachable" in low:
            return JSONResponse({
                "error": f"{host} is not responding on port {int(profile.get('port') or 22)}. "
                         "Check the machine is running and reachable from this server.",
                "unreachable": True,
            }, status_code=502)
        if "connection refused" in low:
            return JSONResponse({
                "error": f"{host} refused the connection on port "
                         f"{int(profile.get('port') or 22)} — is its SSH service running?",
                "unreachable": True,
            }, status_code=502)
        if "permission denied" in low:
            return JSONResponse({
                "error": f"{host} rejected the credentials. Check the username, and the key "
                         "or password for this connection.",
                "auth_failed": True,
            }, status_code=502)
        return JSONResponse({"error": detail}, status_code=502)
    # Persist a freshly supplied password only after it actually authenticated,
    # so a typo never overwrites a working stored credential.
    if supplied and supplied != stored:
        _ssh_update_profile(
            session_name,
            connection_id,
            {"password_enc": _ssh_vault_encrypt(supplied, connection_id)},
        )
    return JSONResponse({"ok": True, "connected": True, "window_name": window_name})


@app.get("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/status")
async def api_ssh_connection_status(
    request: Request, session_name: str, connection_id: str, reconnect: bool = False
):
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    try:
        connected = await asyncio.to_thread(_ssh_control_is_alive, profile, session_name)
    except (OSError, RuntimeError, subprocess.TimeoutExpired) as exc:
        return JSONResponse({"error": str(exc)}, status_code=502)
    # Auto-reconnect: a stored credential lets a dropped control master come back
    # without user action. Failure is reported as "needs reconnect", not a 502,
    # because the IDE polls this and a dead host should not surface as an error.
    reconnected = False
    if not connected and reconnect and str(profile.get("password_enc") or ""):
        try:
            password = _ssh_vault_decrypt(
                str(profile.get("password_enc") or ""), str(profile.get("id") or "")
            )
            await asyncio.to_thread(
                _ssh_start_control_master, profile, session_name, password=password
            )
            await asyncio.to_thread(_ssh_open_tmux_window, profile, session_name)
            await _record_ssh_ide_audit(request, session_name, profile, "auto_reconnected")
            connected = reconnected = True
        except (OSError, RuntimeError, subprocess.TimeoutExpired):
            logger.info("Auto-reconnect failed for SSH connection %s", connection_id, exc_info=True)
    return JSONResponse({
        "connected": connected,
        "reconnected": reconnected,
        "window_name": _ssh_tmux_window_name(profile) if connected else "",
    })




@app.get("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/workspace")
async def api_get_ssh_workspace_state(request: Request, session_name: str, connection_id: str):
    """Return everything needed to resume this workspace where it was left."""
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    state = _ssh_read_ide_state(session_name, connection_id)
    return JSONResponse({
        "connection": _ssh_public_profile(profile),
        "tabs": state.get("tabs") or [],
        "active_path": state.get("active_path") or "",
        "last_directory": state.get("last_directory") or str(profile.get("last_directory") or "."),
        "buffers": state.get("buffers") or {},
    })


@app.put("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/workspace")
async def api_save_ssh_workspace_state(
    request: Request, session_name: str, connection_id: str, body: SSHWorkspaceStateBody
):
    """Persist tabs, focus, directory, and unsaved buffers for later resume."""
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    if len(body.tabs) > 50:
        return JSONResponse({"error": "Too many open tabs to persist"}, status_code=400)
    tabs: list[str] = []
    for tab in body.tabs:
        normalized = _normalized_workspace_path(profile, tab)
        if normalized is None:
            return JSONResponse({"error": "Invalid tab path"}, status_code=400)
        if normalized not in tabs:
            tabs.append(normalized)
    active_path = ""
    if body.active_path:
        active_path = _normalized_workspace_path(profile, body.active_path) or ""
    last_directory = _normalized_workspace_path(profile, body.last_directory)
    if last_directory is None:
        return JSONResponse({"error": "Invalid last directory"}, status_code=400)
    # Unsaved buffers hold real remote file content, so they are bounded here and
    # written to a 0600 file rather than kept unlimited.
    buffers: dict[str, str] = {}
    total = 0
    for raw_path, content in list(body.buffers.items())[:50]:
        normalized = _normalized_workspace_path(profile, raw_path)
        if normalized is None:
            return JSONResponse({"error": "Invalid buffer path"}, status_code=400)
        text = content or ""
        total += len(text.encode("utf-8"))
        if total > SSH_MAX_UNSAVED_STATE_BYTES:
            return JSONResponse(
                {"error": "Unsaved editor content is too large to preserve"}, status_code=413
            )
        buffers[normalized] = text
    _ssh_write_ide_state(session_name, connection_id, {
        "tabs": tabs,
        "active_path": active_path,
        "last_directory": last_directory,
        "buffers": buffers,
        "updated_at": time.time(),
    })
    _ssh_update_profile(session_name, connection_id, {"last_directory": last_directory})
    return JSONResponse({"ok": True, "tabs": tabs, "active_path": active_path, "last_directory": last_directory})


@app.post("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/focus-terminal")
async def api_focus_ssh_terminal(request: Request, session_name: str, connection_id: str):
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    try:
        audit = await asyncio.to_thread(
            _append_ssh_ide_audit, _current_user(request), session_name, profile, "terminal_focus_requested"
        )
        window_name = await asyncio.to_thread(_ssh_focus_tmux_window, profile, session_name)
    except (OSError, RuntimeError, subprocess.TimeoutExpired) as exc:
        return JSONResponse({"error": str(exc)}, status_code=502)
    return JSONResponse({"ok": True, "window_name": window_name, "audit_id": audit["id"]})




@app.get("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/terminals")
async def api_list_ssh_terminals(request: Request, session_name: str, connection_id: str):
    """The terminals that actually exist for this connection, from tmux."""
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    indexes = await asyncio.to_thread(_ssh_list_terminal_indexes, profile, session_name)
    return JSONResponse({"terminals": indexes, "max": MAX_IDE_TERMINALS})


@app.delete("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/terminals/{index}")
async def api_close_ssh_terminal(
    request: Request, session_name: str, connection_id: str, index: int
):
    """End one terminal: kill its tmux window and whatever is running in it."""
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    if index < 0 or index >= MAX_IDE_TERMINALS:
        return JSONResponse({"error": "Unknown terminal"}, status_code=400)
    try:
        killed = await asyncio.to_thread(
            _ssh_kill_tmux_window, profile, session_name, index
        )
        await asyncio.to_thread(
            _append_ssh_ide_audit, _current_user(request), session_name, profile,
            "terminal_closed",
        )
    except (OSError, RuntimeError, subprocess.TimeoutExpired) as exc:
        return JSONResponse({"error": str(exc)}, status_code=502)
    remaining = await asyncio.to_thread(_ssh_list_terminal_indexes, profile, session_name)
    return JSONResponse({"ok": True, "closed": killed, "terminals": remaining})


@app.get("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/files/search")
async def api_search_ssh_files(
    request: Request, session_name: str, connection_id: str, path: str = ".", query: str = ""
):
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    remote_path = _normalized_workspace_path(profile, path)
    search_query = query.strip()
    if remote_path is None:
        return JSONResponse({"error": "Invalid remote path"}, status_code=400)
    if not search_query or len(search_query) > 160 or "\x00" in search_query:
        return JSONResponse({"error": "Enter a file name query up to 160 characters"}, status_code=400)
    payload = json.dumps({"path": remote_path, "query": search_query})
    try:
        raw = await asyncio.to_thread(
            _ssh_run,
            profile,
            session_name,
            _ssh_workspace_command(profile, _SSH_SEARCH_SCRIPT, payload),
            timeout=30,
        )
        return JSONResponse(json.loads(raw))
    except (RuntimeError, ValueError, subprocess.TimeoutExpired) as exc:
        return JSONResponse({"error": str(exc)}, status_code=502)


@app.get("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/lsp/status")
async def api_ssh_lsp_status(request: Request, session_name: str, connection_id: str):
    """Discover supported remote language servers without starting a protocol process."""
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    try:
        raw = await asyncio.to_thread(
            _ssh_run, profile, session_name, _ssh_workspace_command(profile, _SSH_LSP_STATUS_SCRIPT, "."), timeout=20
        )
        return JSONResponse(json.loads(raw))
    except (RuntimeError, ValueError, subprocess.TimeoutExpired) as exc:
        return JSONResponse({"error": str(exc)}, status_code=502)


@app.get("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/files")
async def api_list_ssh_files(request: Request, session_name: str, connection_id: str, path: str = "."):
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    remote_path = _normalized_workspace_path(profile, path)
    if remote_path is None:
        return JSONResponse({"error": "Invalid remote path"}, status_code=400)
    try:
        raw = await asyncio.to_thread(
            _ssh_run, profile, session_name, _ssh_workspace_command(profile, _SSH_LIST_SCRIPT, remote_path), timeout=25
        )
        await _record_ssh_ide_audit(request, session_name, profile, "remote_list")
        return JSONResponse(json.loads(raw))
    except (RuntimeError, ValueError, subprocess.TimeoutExpired) as exc:
        return JSONResponse({"error": str(exc)}, status_code=502)


@app.get("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/file")
async def api_get_ssh_file(request: Request, session_name: str, connection_id: str, path: str):
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    remote_path = _normalized_workspace_path(profile, path)
    if remote_path is None:
        return JSONResponse({"error": "Invalid remote path"}, status_code=400)
    try:
        raw = await asyncio.to_thread(
            _ssh_run, profile, session_name, _ssh_workspace_command(profile, _SSH_READ_SCRIPT, remote_path), timeout=30
        )
        await _record_ssh_ide_audit(request, session_name, profile, "remote_read")
        return JSONResponse(json.loads(raw))
    except (RuntimeError, ValueError, subprocess.TimeoutExpired) as exc:
        return JSONResponse({"error": str(exc)}, status_code=502)


@app.put("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/file")
async def api_save_ssh_file(
    request: Request, session_name: str, connection_id: str, body: SSHRemoteFileBody
):
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    remote_path = _normalized_workspace_path(profile, body.path)
    if remote_path is None:
        return JSONResponse({"error": "Invalid remote path"}, status_code=400)
    content = body.content.encode("utf-8")
    max_file_bytes = int(profile.get("max_file_bytes") or SSH_MAX_FILE_BYTES)
    if len(content) > max_file_bytes:
        return JSONResponse({"error": f"File exceeds the {max_file_bytes // 1_000} KB connection limit"}, status_code=413)
    try:
        raw = await asyncio.to_thread(
            _ssh_run,
            profile,
            session_name,
            _ssh_workspace_command(profile, _SSH_WRITE_SCRIPT, remote_path),
            input_data=base64.b64encode(content),
            timeout=35,
        )
        await _record_ssh_ide_audit(request, session_name, profile, "remote_write")
        return JSONResponse(json.loads(raw))
    except (RuntimeError, ValueError, subprocess.TimeoutExpired) as exc:
        return JSONResponse({"error": str(exc)}, status_code=502)


@app.post("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/fs")
async def api_manage_ssh_filesystem(
    request: Request, session_name: str, connection_id: str, body: SSHRemoteFilesystemBody
):
    """Perform a deliberately small, non-recursive remote filesystem operation."""
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    if body.action not in {"create_file", "create_dir", "rename", "delete"}:
        return JSONResponse({"error": "Unsupported filesystem action"}, status_code=400)
    remote_path = _normalized_workspace_path(profile, body.path)
    if remote_path is None:
        return JSONResponse({"error": "Invalid remote path"}, status_code=400)
    new_path = ""
    if body.action == "rename":
        new_path = _normalized_workspace_path(profile, body.new_path)
        if new_path is None:
            return JSONResponse({"error": "Invalid destination path"}, status_code=400)
    elif body.new_path:
        return JSONResponse({"error": "A destination path is only valid for rename"}, status_code=400)
    payload = json.dumps({"action": body.action, "path": remote_path, "new_path": new_path})
    try:
        raw = await asyncio.to_thread(
            _ssh_run,
            profile,
            session_name,
            _ssh_workspace_command(profile, _SSH_FILESYSTEM_SCRIPT, payload),
            timeout=30,
        )
        await _record_ssh_ide_audit(request, session_name, profile, "remote_filesystem_change")
        return JSONResponse(json.loads(raw))
    except (RuntimeError, ValueError, subprocess.TimeoutExpired) as exc:
        return JSONResponse({"error": str(exc)}, status_code=502)


@app.post("/api/sessions/{session_name}/ide/ssh-connections/{connection_id}/git")
async def api_manage_ssh_git(
    request: Request, session_name: str, connection_id: str, body: SSHGitBody
):
    """Run a fixed, validated set of Git operations over the live SSH bridge."""
    _session, error = _ssh_ide_session_or_response(request, session_name)
    if error:
        return error
    profile, error = _ssh_profile_or_response(request, session_name, connection_id)
    if error:
        return error
    if body.action not in {
        "status", "diff", "diff_file", "stage", "unstage", "discard",
        "commit", "switch", "create_branch", "fetch", "pull", "push", "log",
        "show",
    }:
        return JSONResponse({"error": "Unsupported Git action"}, status_code=400)
    remote_path = _normalized_workspace_path(profile, body.path)
    if remote_path is None:
        return JSONResponse({"error": "Invalid repository path"}, status_code=400)
    files = [item.strip() for item in body.files]
    if len(files) > 100 or any(not _valid_git_pathspec(item) for item in files):
        return JSONResponse({"error": "Invalid Git file selection"}, status_code=400)
    if body.action in {"stage", "unstage", "discard"} and not files:
        return JSONResponse({"error": "Select at least one file or folder"}, status_code=400)
    if body.action == "diff_file" and len(files) != 1:
        return JSONResponse({"error": "Choose exactly one file to diff"}, status_code=400)
    message = body.message.strip()
    if body.action == "commit" and (not message or len(message) > 1000 or "\x00" in message):
        return JSONResponse({"error": "Enter a commit message up to 1,000 characters"}, status_code=400)
    branch = body.branch.strip()
    if body.action in {"switch", "create_branch"} and not _valid_git_branch(branch):
        return JSONResponse({"error": "Invalid branch name"}, status_code=400)
    ref = body.ref.strip()
    if body.action == "show" and not _valid_git_commit_ref(ref):
        return JSONResponse({"error": "Invalid commit reference"}, status_code=400)
    payload = json.dumps({
        "action": body.action,
        "path": remote_path,
        "files": files,
        "message": message,
        "branch": branch,
        "ref": ref,
    })
    try:
        raw = await asyncio.to_thread(
            _ssh_run,
            profile,
            session_name,
            _ssh_workspace_command(profile, _SSH_GIT_SCRIPT, payload),
            timeout=40,
        )
        return JSONResponse(json.loads(raw))
    except (RuntimeError, ValueError, subprocess.TimeoutExpired) as exc:
        return JSONResponse({"error": str(exc)}, status_code=502)


def _send_session_owner_environment(session_name: str):
    """Bind a pane to its owner's CODEX_HOME, advisor token, and project."""
    owner = _user_for_session(session_name)
    if owner and not _is_admin(owner):
        try:
            _ensure_user_codex_config_dir(owner)
            codex_home = _user_codex_config_dir(owner)
            token_path = codex_home / "advisor-token"
            if not token_path.is_file():
                logger.error(
                    "Refusing to configure member session '%s': private advisor token is missing",
                    session_name,
                )
                return False
            project_dir = _member_session_project_dir(owner, session_name)
            config_path = codex_home / "config.toml"
            existing = config_path.read_text() if config_path.exists() else ""
            trusted = _ensure_codex_project_trust(existing, str(project_dir))
            if trusted != existing:
                _backup_before_dashboard_write(config_path)
                config_path.write_text(trusted)
            cmd = (
                "export CODEX_HOME="
                + shlex.quote(str(codex_home))
                + "; export ADVISOR_TOKEN=\"$(cat "
                + shlex.quote(str(token_path))
                + " 2>/dev/null)\""
                + "; cd -- "
                + shlex.quote(str(project_dir))
            )
        except Exception:
            logger.exception("Failed to prepare owner environment for '%s'", session_name)
            return False
    else:
        token_path = Path.home() / ".advisor-token"
        cmd = (
            "unset CODEX_HOME; export ADVISOR_TOKEN=\"$(cat "
            + shlex.quote(str(token_path))
            + " 2>/dev/null)\""
        )
    try:
        subprocess.run(["tmux", "send-keys", "-t", session_name, "-l", cmd],
                       capture_output=True, text=True, timeout=5)
        subprocess.run(["tmux", "send-keys", "-t", session_name, "Enter"],
                       capture_output=True, text=True, timeout=5)
        return True
    except Exception:
        logger.debug("send-keys failed for owner environment", exc_info=True)
        return False


# --- System stats ---

@app.get("/api/stats")
async def api_stats():
    """System stats: CPU, disk, memory, tmux sessions, Codex processes."""
    stats = {}
    # CPU load
    try:
        with open('/proc/loadavg') as f:
            parts = f.read().split()
            stats["cpu_load"] = {"1m": parts[0], "5m": parts[1], "15m": parts[2]}
            # Running threads from field 4 (e.g. "2/150")
            if len(parts) > 3 and '/' in parts[3]:
                running, total = parts[3].split('/')
                stats["threads_running"] = int(running)
                stats["threads_total"] = int(total)
    except Exception:
        stats["cpu_load"] = {}
    # CPU count and approximate usage percent
    try:
        cpu_count = os.cpu_count() or 1
        stats["cpu_count"] = cpu_count
        load_1m = float(stats.get("cpu_load", {}).get("1m", 0))
        stats["cpu_percent"] = min(round(load_1m / cpu_count * 100, 1), 100.0)
    except Exception:
        stats["cpu_count"] = 1
        stats["cpu_percent"] = 0
    # Memory
    try:
        result = subprocess.run(["free", "-m"], capture_output=True, text=True, timeout=5)
        lines = result.stdout.strip().split("\n")
        if len(lines) >= 2:
            parts = lines[1].split()
            stats["memory"] = {
                "total_mb": int(parts[1]),
                "used_mb": int(parts[2]),
                "available_mb": int(parts[6]) if len(parts) > 6 else int(parts[3]),
            }
    except Exception:
        stats["memory"] = {}
    # Disk
    try:
        usage = shutil.disk_usage("/")
        stats["disk"] = {
            "total_gb": round(usage.total / (1024**3), 1),
            "used_gb": round(usage.used / (1024**3), 1),
            "free_gb": round(usage.free / (1024**3), 1),
            "pct": round(usage.used / usage.total * 100, 1),
        }
    except Exception:
        stats["disk"] = {}
    # tmux sessions
    stats["tmux_sessions"] = get_tmux_sessions()
    # Codex processes
    try:
        result = subprocess.run(
            ["pgrep", "-a", "codex"],
            capture_output=True, text=True, timeout=5
        )
        stats["codex_processes"] = [
            line.strip() for line in result.stdout.strip().split("\n") if line.strip()
        ]
    except Exception:
        stats["codex_processes"] = []
    # Codex-related processes
    try:
        result = subprocess.run(
            ["pgrep", "-a", "-f", "codex"],
            capture_output=True, text=True, timeout=5
        )
        stats["codex_related"] = len([
            line for line in result.stdout.strip().split("\n") if line.strip()
        ])
    except Exception:
        stats["codex_related"] = 0
    # Uptime
    try:
        with open('/proc/uptime') as f:
            uptime_secs = float(f.read().split()[0])
            days = int(uptime_secs // 86400)
            hours = int((uptime_secs % 86400) // 3600)
            stats["uptime"] = f"{days}d {hours}h"
    except Exception:
        stats["uptime"] = "unknown"
    controller = _controller_snapshot.read()
    by_browser = controller.get("browser_leases_by_session", {})
    stats["capacity"] = {
        # This is the scheduling signal. Parked/idle tmux sessions retain user
        # state but consume no browser capacity.
        "active_browser_leases": int(controller.get("active_browser_leases") or 0),
        "active_browsers": sum(1 for count in by_browser.values() if int(count) > 0),
        "browser_leases_by_session": by_browser,
        "parked_sessions": int(controller.get("parked_sessions") or 0),
        "terminal_streams": int(controller.get("terminal_streams") or 0),
        "terminal_subscribers": int(controller.get("terminal_subscribers") or 0),
        "total_tmux_sessions": len(stats["tmux_sessions"]),
        "controller_age_seconds": round(max(0, time.time() - float(controller.get("updated_at") or 0)), 1),
    }
    return JSONResponse(stats)


@app.get("/api/health")
async def api_health():
    """Lightweight health check for tmux, Codex CLI, and authentication."""
    checks = {
        "status": "ok",
        "tmux": False,
        "openai": bool(_active_openai_key() or (CODEX_HOME / "auth.json").exists()),
        "data_dir": False,
    }
    try:
        checks["data_dir"] = MESSAGES_DIR.is_dir() and os.access(MESSAGES_DIR, os.W_OK)
    except Exception:
        checks["data_dir"] = False
    try:
        result = subprocess.run(
            ["tmux", "list-sessions", "-F", "#{session_name}"],
            capture_output=True, text=True, timeout=3
        )
        checks["tmux"] = result.returncode == 0 or "no server running" in result.stderr
    except Exception:
        checks["tmux"] = False
    codex_ready, codex_reason, codex_details = await asyncio.to_thread(_codex_cli_readiness)
    checks["codex_cli"] = {"ready": codex_ready, "reason": codex_reason, **codex_details}
    controller = await _controller_call("ping")
    checks["controller"] = controller
    if not checks["tmux"] or not codex_ready or not checks["data_dir"] or not controller.get("ok"):
        checks["status"] = "degraded"
    return JSONResponse(checks)


# --- Claude account identity + per-session stale-login detection ---
#
# A running `claude` process pins whatever account was in `.credentials.json`
# at startup; the file changing later does NOT switch a live session. So a
# session started before a login switch keeps showing the OLD account's 5-hour
# usage bar inside its TUI. We detect that by comparing each session's claude
# process start time against when the active account last *changed* (not merely
# refreshed) for that session's CLAUDE_CONFIG_DIR.

def _friendly_plan(sub: str, tier: str) -> str:
    t = (tier or "").lower()
    if "max_20x" in t:
        return "Max 20x"
    if "max_5x" in t:
        return "Max 5x"
    if "pro" in t:
        return "Pro"
    if "team" in t:
        return "Team"
    s = (sub or "").lower()
    if s == "max":
        return "Max"
    if s == "pro":
        return "Pro"
    if s == "free":
        return "Free"
    return sub.capitalize() if sub else "—"


def _clk_tck() -> int:
    try:
        return os.sysconf("SC_CLK_TCK")
    except Exception:
        return 100


_btime_cache: list = [0.0]


def _system_btime() -> float:
    if _btime_cache[0]:
        return _btime_cache[0]
    try:
        with open("/proc/stat") as f:
            for line in f:
                if line.startswith("btime "):
                    _btime_cache[0] = float(line.split()[1])
                    break
    except Exception:
        pass
    return _btime_cache[0]


def _proc_start_epoch(pid) -> float:
    """Wall-clock epoch when process <pid> started, from /proc/<pid>/stat."""
    try:
        with open(f"/proc/{pid}/stat") as f:
            data = f.read()
        # comm (field 2) is wrapped in parens and may contain spaces/parens, so
        # split after the last ')'. starttime is field 22 (clock ticks since boot).
        fields = data[data.rfind(")") + 2:].split()
        if len(fields) <= 19:
            return 0.0
        btime = _system_btime()
        if btime <= 0:
            return 0.0
        return btime + float(fields[19]) / _clk_tck()
    except Exception:
        return 0.0


def _build_proc_tree() -> tuple:
    """One `ps` call -> (children_by_ppid: dict, comm_by_pid: dict)."""
    children: dict = {}
    comm: dict = {}
    try:
        res = subprocess.run(
            ["ps", "-eo", "pid=,ppid=,comm="],
            capture_output=True, text=True, timeout=5,
        )
        for line in (res.stdout or "").splitlines():
            parts = line.split(None, 2)
            if len(parts) < 2:
                continue
            pid, ppid = parts[0], parts[1]
            children.setdefault(ppid, []).append(pid)
            comm[pid] = parts[2] if len(parts) > 2 else ""
    except Exception:
        pass
    return children, comm




def _claude_pids_under(roots, children: dict, comm: dict) -> list:
    """BFS the process tree from pane roots, returning descendant `claude` pids."""
    out = []
    stack = list(roots)
    seen = set(roots)
    steps = 0
    while stack and steps < 10000:
        steps += 1
        cur = stack.pop()
        for ch in children.get(cur, []):
            if ch in seen:
                continue
            seen.add(ch)
            stack.append(ch)
            if (comm.get(ch, "") or "").lower() == "claude":
                out.append(ch)
    return out


_account_ident_cache: dict = {}


def _account_identity(config_dir) -> dict:
    """Current Claude account for a CLAUDE_CONFIG_DIR (cached 30s)."""
    key = str(config_dir)
    now = time.time()
    cached = _account_ident_cache.get(key)
    if cached and now - cached[0] < 30:
        return cached[1]
    config_dir = Path(config_dir)
    sub = tier = email = org = ""
    cred_mtime = 0.0
    creds = config_dir / ".credentials.json"
    try:
        cred_mtime = creds.stat().st_mtime
        oauth = json.loads(creds.read_text()).get("claudeAiOauth", {})
        sub = oauth.get("subscriptionType", "") or ""
        tier = oauth.get("rateLimitTier", "") or ""
    except Exception:
        pass
    # The big config (with oauthAccount.emailAddress) lives at <dir>/.claude.json,
    # except the default ~/.claude whose config is the home-level ~/.claude.json.
    cj = config_dir / ".claude.json"
    profile_fetched = 0.0
    try:
        if not cj.exists() and config_dir == Path.home() / ".claude":
            cj = Path.home() / ".claude.json"
        oa = json.loads(cj.read_text()).get("oauthAccount", {})
        email = oa.get("emailAddress", "") or ""
        org = oa.get("organizationUuid", "") or ""
        # profileFetchedAt (ms) marks when this account was last logged in/switched.
        # Unlike the credentials mtime, it does NOT move on a routine token refresh,
        # so it's the correct anchor for "when did the active account change".
        pf = oa.get("profileFetchedAt") or 0
        profile_fetched = float(pf) / 1000.0 if pf else 0.0
    except Exception:
        pass
    ident = {
        "email": email, "sub": sub, "tier": tier,
        "plan": _friendly_plan(sub, tier),
        "fp": org or (sub + "/" + tier),  # account fingerprint (changes per account)
        "cred_mtime": cred_mtime,
        "profile_fetched": profile_fetched,
    }
    _account_ident_cache[key] = (now, ident)
    return ident




def _load_login_state() -> dict:
    try:
        return json.loads(_LOGIN_STATE_FILE.read_text())
    except Exception:
        return {}


def _save_login_state(state: dict):
    try:
        _LOGIN_STATE_FILE.parent.mkdir(parents=True, exist_ok=True)
        _LOGIN_STATE_FILE.write_text(json.dumps(state))
    except Exception:
        logger.debug("Could not persist login_state.json", exc_info=True)


def _login_switch_time(config_dir, ident: dict) -> float:
    """Epoch of the last *observed* account switch for this config dir, or 0.

    Returns 0 when the dashboard has only ever seen one account fingerprint for
    this dir — i.e. no switch has happened — so long-running sessions are never
    falsely flagged. The value advances ONLY when the active fingerprint is seen
    to change between two polls.

    Why not anchor on profileFetchedAt / the credentials mtime: BOTH of those
    move on a routine OAuth token refresh (claude re-fetches the profile and
    rewrites .credentials.json every few hours) even though the account is
    unchanged. Anchoring on them made the first poll after a refresh look like a
    brand-new login and flag every older — but identical-account — session as
    "on old login". The fingerprint (org UUID / sub+tier) does NOT move on a
    refresh, so a fingerprint *change* is the only reliable switch signal.

    Persisted so a genuine switch (including one that happened while the
    dashboard was down) survives restarts.
    """
    key = str(config_dir)
    state = _load_login_state()
    cur = state.get(key)
    now = time.time()
    fp = ident.get("fp", "")
    # Best estimate of when a switch happened = the new account's profile fetch
    # time (≈ when it was logged in/switched to); fall back to creds mtime/now.
    anchor = ident.get("profile_fetched") or ident.get("cred_mtime") or now
    if not cur:
        # First sight of this dir: record the account but do NOT assume a switch
        # just happened — the account may have been active for a long time.
        state[key] = {"fp": fp, "since": anchor, "switched_at": 0}
        _save_login_state(state)
        return 0.0
    if cur.get("fp") != fp:
        # A genuine account change observed between two polls -> record it.
        state[key] = {"fp": fp, "since": anchor, "switched_at": anchor}
        _save_login_state(state)
        return anchor
    # Same account as last poll: keep the recorded switch time (0 if never).
    return float(cur.get("switched_at", 0) or 0)


@app.get("/api/login-health")
async def api_login_health():
    """Per-session Claude login health: flags sessions whose live `claude`
    process started before the current account became active (i.e. its in-TUI
    5-hour usage bar reflects a previous account)."""
    def _compute():
        sessions = get_tmux_sessions()
        children, comm = _build_proc_tree()
        panes = _all_pane_pids_by_session()
        ident_by_dir: dict = {}
        out = []
        for s in sessions:
            name = s["name"]
            base = _session_config_base(name)
            key = str(base)
            ident = ident_by_dir.get(key)
            if ident is None:
                ident = _account_identity(base)
                ident_by_dir[key] = ident
            switched_at = _login_switch_time(base, ident)
            cpids = _claude_pids_under(panes.get(name, []), children, comm)
            starts = [e for e in (_proc_start_epoch(p) for p in cpids) if e > 0]
            claude_started = min(starts) if starts else 0
            # Flag stale only when an account switch was actually observed AND
            # this session's claude predates it (5s slack avoids flagging a
            # session launched in the same moment as the switch).
            stale = bool(claude_started and switched_at and claude_started < switched_at - 5)
            out.append({
                "name": name,
                "stale": stale,
                "claude_running": bool(cpids),
                "claude_started": claude_started,
                "plan": ident["plan"],
                "account": ident["email"] or ident["sub"],
            })
        active = _account_identity(Path.home() / ".claude")
        return {
            "account": {"email": active["email"], "plan": active["plan"],
                        "sub": active["sub"], "tier": active["tier"]},
            "stale_count": sum(1 for x in out if x["stale"]),
            "sessions": out,
        }
    try:
        data = await asyncio.to_thread(_compute)
    except Exception:
        logger.exception("login-health compute failed")
        return JSONResponse({"account": {}, "stale_count": 0, "sessions": []})
    return JSONResponse(data)


# --- Codex authentication status --------------------------------------------
def _auth_admin_ok(request: Request) -> bool:
    user = _current_user(request)
    return bool(user and _is_admin(user))






@app.get("/api/auth/status")
async def api_auth_status(request: Request):
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    return JSONResponse(_codex_auth_status_dict())


@app.post("/api/auth/token")
@app.delete("/api/auth/token")
@app.post("/api/auth/setup/start")
@app.post("/api/auth/setup/submit")
async def api_legacy_claude_auth_removed(request: Request):
    """Retire Claude's setup-token flow; Codex uses login or API-key auth."""
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    return JSONResponse(
        {"error": "Claude setup-token auth was removed. Use Codex login or the OpenAI API key control."},
        status_code=410,
    )


BROWSER_MAX_EXTRA = 4  # cap concurrent EXTRA browsers (RAM headroom)





























































@app.get("/api/my/browser")
async def api_my_browser(request: Request):
    """Return only the signed-in member's persistent, on-demand browser."""
    user = _current_user(request)
    if not user:
        return JSONResponse({"error": "Not logged in"}, status_code=401)
    browser = await asyncio.to_thread(
        _ensure_user_browser_session,
        user,
        start=False,
    )
    row = _browser_response_row(browser)
    runtime = _browser_runtime_row(str(browser.get("id") or ""))
    row["running"] = await asyncio.to_thread(_browser_process_alive, browser)
    row["mode"] = runtime.get("mode", "headed" if row["running"] else "parked")
    row["parked"] = not row["running"]
    leases = await asyncio.to_thread(_browser_leases.snapshot)
    row["active_leases"] = int(
        leases.get("by_browser", {}).get(browser.get("id"), 0)
    )
    public = {
        key: row.get(key)
        for key in (
            "id", "name", "viewer_url", "running", "mode", "parked",
            "active_leases",
        )
    }
    return JSONResponse({"browser": public})


@app.get("/api/browser/sessions")
async def api_browser_sessions(request: Request):
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    sessions = [
        session
        for session in _load_browser_sessions()
        if _browser_owner_id(session) == "admin"
    ]
    out = []
    leases = await asyncio.to_thread(_browser_leases.snapshot)
    for s in sessions:
        row = _browser_response_row(s)
        runtime = _browser_runtime_row(str(s.get("id") or ""))
        row["running"] = await asyncio.to_thread(_browser_process_alive, s)
        row["mode"] = runtime.get("mode", "headed" if row["running"] else "parked")
        row["parked"] = not row["running"]
        row["active_leases"] = int(leases.get("by_browser", {}).get(s.get("id"), 0))
        out.append(row)
    extra = sum(
        1
        for s in sessions
        if s.get("managed") and not s.get("account_browser")
    )
    return JSONResponse({"sessions": out, "max_extra": BROWSER_MAX_EXTRA,
                         "extra_count": extra, "root_path": ROOT_PATH})


@app.post("/api/browser/sessions")
async def api_browser_create(body: BrowserCreateBody, request: Request):
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    sessions = _load_browser_sessions()
    if sum(
        1
        for s in sessions
        if s.get("managed")
        and _browser_owner_id(s) == "admin"
        and not s.get("account_browser")
    ) >= BROWSER_MAX_EXTRA:
        return JSONResponse({"error": f"Limit reached ({BROWSER_MAX_EXTRA} extra sessions)."}, status_code=400)
    slot = _next_browser_slot(sessions)
    sid = f"s{slot}"
    disp, rfb, vnc, cdp = 99 + slot, 5900 + slot, 6080 + slot, 9222 + slot
    name = (body.name or "").strip() or f"Browser {slot + 1}"
    entry = {"id": sid, "name": name, "slot": slot, "display": disp, "rfb_port": rfb,
             "vnc_port": vnc, "cdp_port": cdp, "managed": True,
             "owner_id": "admin", "account_browser": False,
             "created_at": time.time()}
    sessions.append(entry)
    _save_browser_sessions(sessions)
    if await asyncio.to_thread(_browser_process_alive, entry):
        acquired = {"ok": True, "lease": {}}
    else:
        acquired = await _controller_call(
            "browser_acquire",
            browser_id=sid,
            kind="create",
            owner="dashboard",
            ttl=BROWSER_LEASE_TTL,
            mode="headless",
        )
    ok = bool(acquired.get("ok"))
    row = _browser_response_row(entry)
    row["running"] = ok
    row["mode"] = "headless" if ok else "failed"
    row["active_leases"] = 1 if ok else 0
    logger.info("Browser session '%s' created on display :%d (vnc %d, cdp %d), started=%s",
                sid, disp, vnc, cdp, ok)
    return JSONResponse({"ok": ok, "session": row, "started": ok,
                         "lease": acquired.get("lease", {})},
                        status_code=200 if ok else 502)


@app.delete("/api/browser/sessions/{sid}")
async def api_browser_delete(sid: str, request: Request):
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    sessions = _load_browser_sessions()
    target = next((s for s in sessions if s.get("id") == sid), None)
    if (
        not target
        or _browser_owner_id(target) != "admin"
        or target.get("account_browser")
    ):
        return JSONResponse({"error": "not found"}, status_code=404)
    if not target.get("managed"):
        return JSONResponse({"error": "The default browser is managed by systemd and can't be removed here."},
                            status_code=400)

    await asyncio.to_thread(_browser_leases.release_browser, sid)
    stopped = await _controller_call("browser_stop", browser_id=sid, reason="browser removed")
    if not stopped.get("ok"):
        return JSONResponse({"error": stopped.get("error", "browser did not stop")}, status_code=502)
    _save_browser_sessions([s for s in sessions if s.get("id") != sid])
    # Give its proxy port + sticky identity back, so a later browser reusing the
    # slot doesn't inherit a stranger's exit IP or its bandwidth counter.
    try:
        conf = _proxy_conf()
        if (conf.get("sessions") or {}).pop(sid, None) is not None:
            _proxy_save(conf)
    except Exception:
        logger.debug("Failed to drop proxy session for %s", sid, exc_info=True)
    logger.info("Browser session '%s' stopped and removed", sid)
    return JSONResponse({"ok": True})


@app.post("/api/browser/sessions/{sid}/lease")
async def api_browser_lease_acquire(sid: str, body: BrowserLeaseBody, request: Request):
    """Acquire an explicit renewable browser lease and restore it on demand."""
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    result = await _controller_call(
        "browser_acquire",
        browser_id=sid,
        kind=body.kind,
        owner=body.owner or str(_current_user(request) or "dashboard"),
        ttl=body.ttl,
        mode=body.mode,
    )
    return JSONResponse(result, status_code=200 if result.get("ok") else 503)


@app.put("/api/browser/leases/{token}")
async def api_browser_lease_renew(token: str, body: BrowserLeaseBody, request: Request):
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    result = await _controller_call("browser_renew", token=token, ttl=body.ttl)
    return JSONResponse(result, status_code=200 if result.get("ok") else 404)


@app.delete("/api/browser/leases/{token}")
async def api_browser_lease_release(token: str, request: Request):
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    result = await _controller_call("browser_release", token=token)
    return JSONResponse(result, status_code=200 if result.get("ok") else 404)




@app.patch("/api/browser/sessions/{sid}")
async def api_browser_update(sid: str, body: BrowserPatchBody, request: Request):
    """Rename a browser session and/or set its note (what the browser is for).
    Allowed for the default systemd browser too — it's only metadata."""
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    sessions = _load_browser_sessions()
    target = next((s for s in sessions if s.get("id") == sid), None)
    if not target or _browser_owner_id(target) != "admin":
        return JSONResponse({"error": "not found"}, status_code=404)
    if body.name is not None:
        name = body.name.strip()
        if not name:
            return JSONResponse({"error": "Name cannot be empty"}, status_code=400)
        target["name"] = name[:80]
    if body.notes is not None:
        target["notes"] = body.notes.strip()[:2000]
    if body.use_for_login is not None:
        # Exactly one browser owned by this account is designated for login.
        for s in sessions:
            if _browser_owner_id(s) == "admin":
                s["use_for_login"] = False
        target["use_for_login"] = bool(body.use_for_login)
    _save_browser_sessions(sessions)
    _browser_auth_cache.pop(sid, None)   # re-check on next poll
    row = _browser_response_row(target)
    row["running"] = await asyncio.to_thread(_browser_port_alive, target.get("vnc_port", 0))
    logger.info("Browser session '%s' updated (name=%r, notes=%d chars)",
                sid, target.get("name"), len(target.get("notes", "")))
    return JSONResponse({"ok": True, "session": row})


BROWSER_FINGERPRINT_TOOL = CB_ROOT / "bin" / "fingerprint-audit.py"














@app.get("/api/browser/proxy")
async def api_browser_proxy_get(request: Request, check: int = 0):
    """Proxy config (password never leaves the box), per-browser identity and
    the bandwidth each browser has burned — residential traffic is billed per GB."""
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    conf = _proxy_conf()
    usage = _proxy_usage()
    rows = []
    for s in _load_browser_sessions():
        sid = s.get("id")
        sess = (conf.get("sessions") or {}).get(sid) or {}
        u = usage.get(sid) or {}
        row = {
            "id": sid, "name": s.get("name", ""),
            "local_port": sess.get("local_port"),
            "session_id": sess.get("session_id", ""),
            "country": sess.get("country") or conf.get("country") or "",
            "enabled": bool(sess.get("enabled", True)) and bool(sess.get("local_port")),
            "bytes": int(u.get("bytes_up", 0)) + int(u.get("bytes_down", 0)),
            "conns": int(u.get("conns", 0)),
            "last_error": u.get("last_error", ""),
        }
        if check and sess.get("local_port"):
            row["exit"] = await _proxy_exit_info(sess["local_port"])
        rows.append(row)
    total = sum(int(u.get("bytes_up", 0)) + int(u.get("bytes_down", 0)) for u in usage.values())
    return JSONResponse({
        "installed": BROWSER_PROXY_CONF.parent.exists() and (CB_ROOT / "bin" / "proxy_relay.py").exists(),
        "enabled": bool(conf.get("enabled")),
        "provider": conf.get("provider", ""),
        "host": conf.get("host", ""), "port": conf.get("port", 0),
        "username": conf.get("username", ""), "zone": conf.get("zone", ""),
        "password_set": bool(conf.get("password")),
        "country": conf.get("country", ""),
        "providers": sorted(_proxy_presets().keys()),
        "browsers": rows, "total_bytes": total,
    })




@app.post("/api/browser/proxy")
async def api_browser_proxy_set(body: BrowserProxyBody, request: Request):
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    conf = _proxy_conf()
    presets = _proxy_presets()
    if body.provider and body.provider in presets:
        p = presets[body.provider]
        conf["provider"] = body.provider
        conf["host"] = body.host or p["host"]
        conf["port"] = body.port or p["port"]
        for k in ("username_template", "password_template", "rotating_template"):
            conf[k] = p[k]
    if body.host:
        conf["host"] = body.host
    if body.port:
        conf["port"] = body.port
    if body.username is not None:
        conf["username"] = body.username.strip()
    if body.password:                       # blank => keep the stored one
        conf["password"] = body.password
    if body.zone is not None:
        conf["zone"] = body.zone.strip()
    if body.country is not None:
        conf["country"] = body.country.strip().lower()
    if body.enabled is not None:
        conf["enabled"] = bool(body.enabled)
        # The cached exit-IP timezone belongs to the old route.
        for f in (CB_ROOT / "state").glob("*.geo.json"):
            try:
                f.unlink()
            except Exception:
                pass
    _proxy_save(conf)
    logger.info("Browser proxy config updated (enabled=%s provider=%s user=%s)",
                conf.get("enabled"), conf.get("provider"), conf.get("username"))
    return JSONResponse({"ok": True})


@app.post("/api/browser/proxy/{sid}/rotate")
async def api_browser_proxy_rotate(sid: str, request: Request):
    """New sticky session id => the provider hands this browser a new exit IP."""
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    conf = _proxy_conf()
    sess = (conf.get("sessions") or {}).get(sid)
    if not sess:
        return JSONResponse({"error": "this browser has no proxy port yet"}, status_code=404)
    sess["session_id"] = secrets.token_hex(5)   # lowercase alnum: valid for every provider
    _proxy_save(conf)
    try:
        (CB_ROOT / "state" / f"{sid}.geo.json").unlink()
    except Exception:
        pass
    await asyncio.sleep(6)      # let the relay pick the config change up
    info = await _proxy_exit_info(sess.get("local_port", 0))
    logger.info("Browser '%s' rotated to sticky session %s (exit %s)",
                sid, sess["session_id"], info.get("ip", "?"))
    return JSONResponse({"ok": True, "session_id": sess["session_id"], "exit": info})


@app.get("/api/browser/fingerprint/{sid}")
async def api_browser_fingerprint(sid: str, request: Request):
    """Run the fingerprint audit against one browser: what a bot-detection
    vendor would see (webdriver flag, WebGL renderer, WebRTC leak, timezone vs
    exit IP, fonts, media devices …)."""
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    s = _browser_session_by_id(sid)
    if not s:
        return JSONResponse({"error": "not found"}, status_code=404)
    if not BROWSER_FINGERPRINT_TOOL.exists():
        return JSONResponse({"error": "fingerprint-audit.py is not installed"}, status_code=501)

    def _run():
        return subprocess.run(
            ["python3", str(BROWSER_FINGERPRINT_TOOL), "--cdp", str(s.get("cdp_port", 0)), "--json"],
            capture_output=True, text=True, timeout=180)

    async with _browser_busy_ctx(sid, "fingerprint check"):
        try:
            r = await asyncio.to_thread(_run)
        except Exception as e:
            return JSONResponse({"error": str(e)[:300]}, status_code=500)
    if r.returncode != 0:
        return JSONResponse({"error": (r.stderr or "audit failed").strip()[:300]}, status_code=502)
    try:
        return JSONResponse(json.loads(r.stdout))
    except Exception:
        return JSONResponse({"error": "could not parse audit output"}, status_code=502)




@asynccontextmanager




















@asynccontextmanager






def _display_idle_ms(display: int) -> int:
    """Milliseconds since the last real input (mouse/keyboard) on an X display.
    Drives the 'browser is being used right now' state — this is what catches a
    human clicking around over noVNC, which no amount of CDP polling would see."""
    try:
        out = subprocess.run(["xprintidle"], env={"DISPLAY": f":{display}", "PATH": "/usr/bin:/bin"},
                             capture_output=True, text=True, timeout=5).stdout.strip()
        return int(out) if out.isdigit() else -1
    except Exception:
        return -1


# Below this, the browser counts as actively in use (blinking indicator).
BROWSER_ACTIVE_IDLE_MS = 15000




@app.get("/api/browser/auth-status")
async def api_browser_auth_status(request: Request, refresh: int = 0):
    """Compatibility endpoint for the retired Claude browser-auth integration."""
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    generic = []
    for session in _load_browser_sessions():
        running = await asyncio.to_thread(_browser_port_alive, session.get("vnc_port", 0))
        generic.append({
            "id": session.get("id"),
            "name": session.get("name", ""),
            "running": running,
            "logged_in": False,
            "can_authorize": False,
            "active": False,
            "busy": False,
        })
    return JSONResponse({
        "sessions": generic,
        "any_logged_in": False,
        "any_can_authorize": False,
        "active": False,
        "busy": False,
        "auto_auth": False,
        "pending_auth": {},
        "retired": True,
    })
    # Legacy implementation retained below for rollback archaeology; unreachable.
    sessions = _load_browser_sessions()
    login_pick = _pick_login_browser()
    out = []
    for s in sessions:
        sid = s.get("id")
        alive = await asyncio.to_thread(_browser_port_alive, s.get("vnc_port", 0))
        acct = {"logged_in": False, "email": "", "can_authorize": False,
                "capabilities": [], "error": "not running"}
        if alive:
            cached = _browser_auth_cache.get(sid)
            if refresh or not cached:
                acct = await _browser_claude_account(sid, s.get("cdp_port", 0), force=bool(refresh))
            else:
                acct = cached["data"]
        # "In use" = real input on its X display (someone driving it over noVNC)
        # OR us driving it over CDP right now.
        idle_ms = await asyncio.to_thread(_display_idle_ms, s.get("display", 0)) if alive else -1
        driven = sid in _browser_busy
        active = driven or (0 <= idle_ms < BROWSER_ACTIVE_IDLE_MS)
        out.append({
            "id": sid, "name": s.get("name", ""), "running": alive,
            "use_for_login": bool(s.get("use_for_login")) or (login_pick.get("id") == sid),
            "busy": driven,
            "busy_what": (_browser_busy.get(sid) or {}).get("what", ""),
            "idle_ms": idle_ms, "active": active,
            **acct,
        })
    return JSONResponse({
        "sessions": out,
        "any_logged_in": any(x["logged_in"] for x in out),
        "any_can_authorize": any(x["can_authorize"] for x in out),
        # A signed-in browser is being used right now (by a person over noVNC or
        # by us) -> the indicator blinks.
        "active": any(x["active"] and x["logged_in"] for x in out),
        "active_what": next((x["busy_what"] or ("in use: " + x["name"])
                             for x in out if x["active"] and x["logged_in"]), ""),
        "busy": bool(_browser_busy),
        "busy_what": next((v.get("what", "") for v in _browser_busy.values()), ""),
        "login_browser": login_pick.get("id", ""),
        "auto_auth": AUTO_AUTH_ENABLED,
        # Set only when auto-auth got everything ready but couldn't click the
        # final consent through; the UI turns this into a one-click link.
        "pending_auth": (_pending_auth
                         if _pending_auth and time.time() - _pending_auth.get("ts", 0) < 1800
                         else {}),
    })


# --- Auto-auth: complete a Claude Code login without a human ------------------
# When a session is sitting at "please run /login" (or a fresh session needs its
# first sign-in), we: start the /login flow, scrape the authorize URL out of the
# pane, click it through in the designated login browser (which is already signed
# in to claude.ai), read the resulting code, and type it back into the session.
# The whole dance is deterministic Python + CDP — no second Claude session and no
# metered API spend needed to log a session back in.
_AUTH_URL_RE = re.compile(r"https://claude\.(?:ai|com)/[^\s\"'<>]*oauth/authorize\S*")
# A URL continuation fragment: the TUI hard-wraps the authorize link across
# several REAL lines (not soft-wrapped, so `capture-pane -J` won't rejoin them),
# and any line made purely of URL characters is the next chunk of it.
_URL_CONT_RE = re.compile(r"^[A-Za-z0-9%&=_+./:?#~\[\]@!$'()*,;-]+$")


def _scrape_authorize_url(pane: str) -> str:
    """Pull the full OAuth authorize URL out of a pane.

    The full /login URL (six scopes) is ~380 chars and Claude Code renders it
    over three lines, so a plain regex returns only the first ~200 chars — a
    truncated link that loads an error page with no Authorize button. Stitch the
    continuation lines back on.

    Always returns the LAST link on screen: a session that has retried /login
    has older, already-consumed URLs in its scrollback, and authorizing one of
    those yields a code whose PKCE verifier no longer matches — the CLI answers
    "Invalid code"."""
    lines = pane.split("\n")
    found = ""
    for i, line in enumerate(lines):
        m = _AUTH_URL_RE.search(line)
        if not m:
            continue
        url = m.group(0).rstrip()
        for nxt in lines[i + 1:]:
            frag = nxt.strip()
            if not frag or not _URL_CONT_RE.fullmatch(frag):
                break          # blank line or prose -> the URL ended
            url += frag
        found = url.rstrip(".,)")   # keep the newest, don't return early
    return found
_auto_auth_state: dict[str, dict] = {}   # session -> {"ts": float, "status": str}
_AUTO_AUTH_COOLDOWN = 300
_AUTO_AUTH_MAX_FAILS = 2
# Last login that auto-auth couldn't finish by itself. Surfaced in the header so
# the one human step left is a single click on a ready-made link, not a hunt
# through a pane for a wrapped URL.
_pending_auth: dict = {}




async def _send_line(session_name: str, text: str):
    await asyncio.to_thread(subprocess.run,
        ["tmux", "send-keys", "-t", session_name, "-l", text],
        capture_output=True, text=True, timeout=10)
    await asyncio.sleep(0.3)
    await asyncio.to_thread(subprocess.run,
        ["tmux", "send-keys", "-t", session_name, "Enter"],
        capture_output=True, text=True, timeout=10)


def _code_from_urls(urls: list) -> str:
    """Find an auth code in any URL we saw. Ignores the authorize link's own
    `code=true` flag (that's 'give me a code', not the code)."""
    for u in urls:
        try:
            q = urllib.parse.parse_qs(urllib.parse.urlparse(u).query)
        except Exception:
            continue
        c = (q.get("code") or [""])[0]
        if c and c != "true" and len(c) > 8:
            s = (q.get("state") or [""])[0]
            return c + ("#" + s if s else "")
    return ""


# Wire services/google_auth.py once its helpers exist.
google_auth_service.configure(
    _advisor_live_sync_enabled=_advisor_live_sync_enabled,
    _backup_before_dashboard_write=_backup_before_dashboard_write,
    _code_from_urls=_code_from_urls,
    _ensure_user_browser_session=_ensure_user_browser_session,
    _ensure_user_codex_config_dir=_ensure_user_codex_config_dir,
    _new_user_id=_new_user_id,
    _public_base_url=_public_base_url,
    _sync_advisor_user=_sync_advisor_user,
    _toml_escape=_toml_escape,
    _user_codex_config_dir=_user_codex_config_dir,
    _user_data_dir=_user_data_dir,
    AUTH_SECRET=AUTH_SECRET,
)




async def _auto_fix_login(session_name: str) -> dict:
    """Validate Codex auth, activate the API fallback, and relaunch the pane."""
    alog = logging.getLogger("auto-auth")
    config_home = _session_config_base(session_name)
    auth_state = await asyncio.to_thread(
        _ensure_codex_auth_with_fallback, config_home, True
    )
    if not auth_state.get("loggedIn"):
        return {
            "ok": False,
            "error": "no valid ChatGPT credential or stored OpenAI API key is available",
        }
    # Clear a stranded interactive login before restarting Codex.
    for _ in range(3):
        await asyncio.to_thread(subprocess.run,
            ["tmux", "send-keys", "-t", session_name, "Escape"],
            capture_output=True, text=True, timeout=5)
        await asyncio.sleep(0.4)
    _exported, restarted = await _restart_codex_for_session(session_name)
    if not restarted:
        return {"ok": False, "error": "Codex could not be relaunched after auth recovery"}
    for _ in range(20):
        await asyncio.sleep(1)
        pane = await asyncio.to_thread(_pane_text, session_name, 25)
        if _LOGIN_NEEDED_RE.search(pane) or "paste code here" in pane.lower():
            continue
        if await _async_is_codex_running(session_name):
            _account_ident_cache.clear()
            via = "api-key-fallback" if auth_state.get("fallbackActive") else auth_state["activeMode"]
            alog.info("auto-fix '%s': logged back in via %s", session_name, via)
            return {"ok": True, "via": via}
    return {"ok": False, "error": "relaunched but the session still looks logged out"}


async def _auto_auth_session(session_name: str, reason: str = "") -> dict:
    """Log `session_name` back in using the designated login browser."""
    alog = logging.getLogger("auto-auth")
    st = _auto_auth_state.setdefault(session_name, {})
    if time.time() - st.get("ts", 0) < _AUTO_AUTH_COOLDOWN and st.get("running"):
        return {"ok": False, "error": "auto-auth already running for this session"}
    # Give up after repeated failures rather than reopening browser tabs every
    # cooldown forever. A manual trigger (or a success) clears the counter.
    if reason != "manual" and st.get("fails", 0) >= _AUTO_AUTH_MAX_FAILS:
        return {"ok": False, "error": "auto-auth gave up for this session after "
                                      f"{st['fails']} attempts — finish the login manually"}
    browser = _pick_login_browser()
    if not browser:
        return {"ok": False, "error": "no browser is marked for login — open Settings → "
                                      "Browser and tick 'use for Claude login' on one"}
    sid, cdp = browser.get("id"), browser.get("cdp_port", 0)
    if not await asyncio.to_thread(_browser_port_alive, browser.get("vnc_port", 0)):
        return {"ok": False, "error": f"the login browser '{browser.get('name')}' isn't running"}
    st.update({"ts": time.time(), "running": True, "status": "starting"})
    try:
        async with _browser_busy_ctx(sid, f"logging in '{session_name}'"):
            # 1. Get the session to a /login prompt (unless one is already up).
            #    If a login flow is mid-flight but hasn't produced a URL yet, a
            #    human is very likely typing it — sending another /login would
            #    interrupt them, so back off instead.
            pane = await asyncio.to_thread(_pane_text, session_name)
            if not _scrape_authorize_url(pane):
                low = pane.lower()
                if "select login method" in low or "paste code here" in low:
                    st.update({"running": False, "status": "a login is already in progress"})
                    return {"ok": False,
                            "error": "a login is already in progress in this session — "
                                     "finish it, or press Esc first"}
                st["status"] = "running /login"
                await _send_line(session_name, "/login")
                await asyncio.sleep(2.5)
                # Claude asks which method first — pick the subscription option.
                pane = await asyncio.to_thread(_pane_text, session_name)
                if re.search(r"select login method|subscription", pane, re.I):
                    await asyncio.to_thread(subprocess.run,
                        ["tmux", "send-keys", "-t", session_name, "Enter"],
                        capture_output=True, text=True, timeout=10)
                    await asyncio.sleep(2.5)
            # 2. Scrape the authorize URL.
            url = ""
            for _ in range(20):
                pane = await asyncio.to_thread(_pane_text, session_name)
                url = _scrape_authorize_url(pane)
                if url:
                    break
                await asyncio.sleep(1.5)
            if not url:
                st.update({"running": False, "status": "no authorize URL",
                           "fails": st.get("fails", 0) + 1})
                return {"ok": False, "error": "couldn't find an authorize URL in the session"}
            alog.info("auto-auth '%s': authorizing via browser '%s'", session_name, sid)
            # 3. Click it through in the logged-in browser.
            st["status"] = "authorizing in browser"
            async with _cdp_tab(cdp) as tab:
                res = await _extract_oauth_code(tab, url)
            if res.get("error"):
                # Hand the blocker back with the exact link, so finishing it by
                # hand is one click instead of a hunt through the pane.
                st.update({"running": False, "status": res["error"], "url": url,
                           "fails": st.get("fails", 0) + 1})
                _pending_auth.update({"session": session_name, "url": url,
                                      "why": res["error"], "ts": time.time()})
                alog.warning("auto-auth '%s' failed: %s — finish manually: %s",
                             session_name, res["error"], url)
                return {"ok": False, "error": res["error"], "authorize_url": url}
            # 4. Paste the code back into the waiting prompt.
            st["status"] = "submitting code"
            await _send_line(session_name, res["code"])
            # Success = the paste prompt goes away with no error, not merely the
            # absence of a "login required" string (which is briefly true while
            # the CLI is still exchanging the code).
            _pending_auth.clear()
            ok, why = False, "timed out waiting for the login to settle"
            for _ in range(12):
                await asyncio.sleep(2)
                pane = await asyncio.to_thread(_pane_text, session_name)
                low = pane.lower()
                if "invalid code" in low or "oauth error" in low or "authentication failed" in low:
                    ok, why = False, "Claude rejected the code"
                    break
                if "login successful" in low or "logged in as" in low:
                    ok, why = True, ""
                    break
                if "paste code here" not in low and not _LOGIN_NEEDED_RE.search(pane):
                    ok, why = True, ""
                    break
            st.update({"running": False, "status": "logged in" if ok else why,
                       "fails": 0 if ok else st.get("fails", 0) + 1})
            _account_ident_cache.clear()
            alog.info("auto-auth '%s': %s", session_name, st["status"])
            return {"ok": ok, "browser": sid, "error": "" if ok else why}
    except Exception as e:
        st.update({"running": False, "status": f"error: {e}",
                   "fails": st.get("fails", 0) + 1})
        alog.warning("auto-auth '%s' crashed: %s", session_name, e, exc_info=True)
        return {"ok": False, "error": f"{type(e).__name__}: {e}"}


@app.post("/api/sessions/{session_name}/auto-auth")
async def api_auto_auth(session_name: str, request: Request):
    """The Claude browser-driven login flow is not applicable to Codex."""
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    return JSONResponse(
        {"error": "Browser auto-auth was retired. Use `codex login` or configure an OpenAI API key."},
        status_code=410,
    )


@app.websocket("/browser/{sid}/websockify")
async def browser_proxy_ws(ws: WebSocket, sid: str):
    """Reverse-proxy the noVNC WebSocket to the session's local websockify. The
    HTTP auth middleware doesn't run for websockets, so re-check the cookie here."""
    if AUTH_PASS and not _check_token(ws.cookies.get(AUTH_COOKIE)):
        await ws.close(code=1008)
        return
    user = _current_user(ws)
    if not _user_can_access_browser(user, sid):
        await ws.close(code=1008)
        return
    s = _browser_session_by_id(sid)
    if not s:
        await ws.close(code=1011)
        return
    owner = "viewer"
    if ws.client:
        owner = f"viewer:{ws.client.host}"
    acquired = await _controller_call(
        "browser_acquire",
        browser_id=sid,
        kind="viewer",
        owner=owner,
        ttl=BROWSER_LEASE_TTL,
        mode="headed",
    )
    if not acquired.get("ok"):
        await ws.close(code=1013)
        return
    lease_token = str((acquired.get("lease") or {}).get("token") or "")
    port = int(s.get("vnc_port") or 0)
    offered = ws.scope.get("subprotocols") or []
    accept_sub = "binary" if "binary" in offered else None
    await ws.accept(subprotocol=accept_sub)
    renew_task = None
    try:
        async def renew_viewer_lease():
            while True:
                await asyncio.sleep(max(30, BROWSER_LEASE_TTL // 2))
                renewed = await _controller_call(
                    "browser_renew", token=lease_token, ttl=BROWSER_LEASE_TTL
                )
                if not renewed.get("ok"):
                    raise ConnectionError("browser viewer lease expired")

        renew_task = asyncio.create_task(renew_viewer_lease())
        async with websockets.connect(
            f"ws://127.0.0.1:{port}/websockify",
            subprotocols=["binary"], max_size=None, ping_interval=None,
        ) as up:
            t_start = time.time()
            ended = {}  # which direction ended first, and why

            async def c2u():
                why = "clean"
                try:
                    while True:
                        msg = await ws.receive()
                        if msg["type"] == "websocket.disconnect":
                            why = f"client disconnect code={msg.get('code')}"
                            break
                        if msg.get("bytes") is not None:
                            await up.send(msg["bytes"])
                        elif msg.get("text") is not None:
                            await up.send(msg["text"])
                except Exception as e:
                    why = f"{type(e).__name__}: {e}"
                finally:
                    ended.setdefault("first", ("client->upstream", why, time.time() - t_start))
                    try:
                        await up.close()
                    except Exception:
                        pass

            async def u2c():
                why = "clean"
                try:
                    async for message in up:
                        if isinstance(message, (bytes, bytearray)):
                            await ws.send_bytes(bytes(message))
                        else:
                            await ws.send_text(message)
                    why = f"upstream closed code={up.close_code} reason={up.close_reason!r}"
                except Exception as e:
                    why = f"{type(e).__name__}: {e}"
                finally:
                    ended.setdefault("first", ("upstream->client", why, time.time() - t_start))
                    try:
                        await ws.close()
                    except Exception:
                        pass

            # return_exceptions: one side failing must not leave the other orphaned.
            await asyncio.gather(c2u(), u2c(), return_exceptions=True)
            side, why, dur = ended.get("first", ("?", "?", time.time() - t_start))
            logger.info("browser ws '%s' closed after %.1fs — %s ended first (%s)",
                        sid, dur, side, why)
    except Exception as e:
        # WARNING, not debug: a silent drop here is exactly the "keeps logging
        # off" symptom, so make the cause visible in the log.
        logger.warning("browser ws proxy for '%s' ended: %s: %s", sid, type(e).__name__, e)
        try:
            await ws.close()
        except Exception:
            pass
    finally:
        if renew_task:
            renew_task.cancel()
        if lease_token:
            await _controller_call("browser_release", token=lease_token)


@app.api_route("/browser/{sid}/{path:path}", methods=["GET", "HEAD"])
async def browser_proxy_http(sid: str, path: str, request: Request):
    """Reverse-proxy noVNC static assets (vnc.html + app/core/vendor) to the
    session's local websockify, so the viewer is same-origin with the dashboard."""
    if not _user_can_access_browser(_current_user(request), sid):
        return Response("browser not found", status_code=404)
    s = _browser_session_by_id(sid)
    if not s:
        return Response("unknown browser session", status_code=404)
    if not path or path.endswith("vnc.html"):
        # The HTML must be reachable before noVNC can open its WebSocket. Hold a
        # short bootstrap viewer lease; the socket replaces it with a renewable
        # lease and this one naturally expires if the page never connects.
        acquired = await _controller_call(
            "browser_acquire",
            browser_id=sid,
            kind="viewer",
            owner="viewer-bootstrap",
            ttl=60,
            mode="headed",
        )
        if not acquired.get("ok"):
            return Response(acquired.get("error", "browser unavailable"), status_code=503)
    port = int(s.get("vnc_port") or 0)
    target = f"http://127.0.0.1:{port}/{path}"
    try:
        async with httpx.AsyncClient(timeout=30) as c:
            up = await c.request(request.method, target, params=dict(request.query_params))
    except Exception as e:
        return Response(f"browser session unreachable ({e})", status_code=502)
    headers = {}
    for h in ("content-type", "cache-control", "last-modified", "etag"):
        if h in up.headers:
            headers[h] = up.headers[h]
    return Response(content=up.content, status_code=up.status_code, headers=headers)


@app.post("/api/sessions/{session_name}/relogin")
async def api_session_relogin(session_name: str, request: Request):
    """Restart Codex with the active CODEX_HOME and resume its latest thread."""
    user = _current_user(request)
    if not _user_can_access_session(user, session_name):
        return JSONResponse({"error": "Session not found"}, status_code=404)
    running = await _async_is_codex_running(session_name)
    _exported, restarted = await _restart_codex_for_session(session_name)
    return JSONResponse({
        "ok": restarted,
        "relaunched": restarted,
        "codex_was_running": running,
    }, status_code=200 if restarted else 500)


@app.post("/api/transcribe")
async def api_transcribe(audio: UploadFile = File(...)):
    """Transcribe a recorded voice clip to text (for the composer mic button)."""
    key = os.environ.get("OPENAI_API_KEY", "")
    if not key:
        return JSONResponse({"error": "Transcription is not configured."}, status_code=503)
    try:
        data = await audio.read()
    except Exception:
        return JSONResponse({"error": "Could not read audio."}, status_code=400)
    if not data:
        return JSONResponse({"error": "Empty audio."}, status_code=400)
    suffix = os.path.splitext(audio.filename or "")[1] or ".webm"

    def _do():
        with tempfile.NamedTemporaryFile(suffix=suffix, delete=True) as tf:
            tf.write(data)
            tf.flush()
            client = openai.OpenAI(api_key=key)
            with open(tf.name, "rb") as fh:
                tr = client.audio.transcriptions.create(model="whisper-1", file=fh)
            return (getattr(tr, "text", "") or "").strip()

    try:
        text = await asyncio.to_thread(_do)
    except Exception as e:
        logger.warning("transcribe failed: %s", e)
        return JSONResponse({"error": "Transcription failed."}, status_code=502)
    return JSONResponse({"text": text})


# --- Codex auth management ---

_codex_auth_cache: dict = {"ts": 0, "data": {}}
_codex_login_lock = threading.Lock()
_codex_login_process = None
_codex_login_state: dict = {
    "status": "idle",
    "verificationUrl": "",
    "userCode": "",
    "loginId": "",
    "expiresAt": 0,
    "error": "",
}
















def _public_codex_login_state() -> dict:
    with _codex_login_lock:
        return dict(_codex_login_state)


def _set_codex_login_state(**changes):
    with _codex_login_lock:
        _codex_login_state.update(changes)


def _monitor_codex_chatgpt_login(process, login_id: str):
    """Wait for the official app-server completion notification."""
    global _codex_login_process
    completed = False
    try:
        if process.stdout is None:
            raise RuntimeError("Codex app-server stdout is unavailable")
        for line in process.stdout:
            try:
                message = json.loads(line)
            except json.JSONDecodeError:
                continue
            if message.get("method") != "account/login/completed":
                continue
            params = message.get("params") or {}
            if params.get("loginId") not in (None, login_id):
                continue
            completed = True
            if params.get("success"):
                _codex_auth_fallback_state.update({"path": "", "reason": "", "ts": 0.0})
                _set_codex_login_state(status="succeeded", error="")
            else:
                _set_codex_login_state(
                    status="failed",
                    error=str(params.get("error") or "ChatGPT sign-in failed")[:300],
                )
            break
    except Exception:
        logger.warning("ChatGPT device login monitor failed", exc_info=True)
    finally:
        _terminate_codex_app_server(process)
        with _codex_login_lock:
            if _codex_login_process is process:
                _codex_login_process = None
            if not completed and _codex_login_state.get("status") not in ("cancelled", "failed"):
                _codex_login_state.update({
                    "status": "failed",
                    "error": "Codex login ended before authorization completed",
                })
        _codex_auth_cache["ts"] = 0


def _start_codex_chatgpt_login() -> dict:
    """Start Codex's managed device-code login and return its URL/code."""
    global _codex_login_process
    with _codex_login_lock:
        if (
            _codex_login_process is not None
            and _codex_login_process.poll() is None
            and _codex_login_state.get("status") in ("starting", "pending")
        ):
            return dict(_codex_login_state)
        _codex_login_state.update({
            "status": "starting",
            "verificationUrl": "",
            "userCode": "",
            "loginId": "",
            "expiresAt": 0,
            "error": "",
        })
        auth_path = CODEX_HOME / "auth.json"
        if auth_path.exists():
            _backup_before_dashboard_write(auth_path)
        process = _codex_app_server_process(CODEX_HOME)
        _codex_login_process = process
    try:
        _codex_app_server_initialize(process)
        _codex_app_server_send(process, {
            "method": "account/login/start",
            "id": 4,
            "params": {"type": "chatgptDeviceCode"},
        })
        response = _codex_app_server_wait(process, 4, timeout=20)
        if response.get("error"):
            raise RuntimeError("Codex rejected the ChatGPT device login request")
        result = response.get("result") or {}
        verification_url = str(result.get("verificationUrl") or "")
        user_code = str(result.get("userCode") or "")
        login_id = str(result.get("loginId") or "")
        if not verification_url.startswith("https://") or not user_code or not login_id:
            raise RuntimeError("Codex returned an incomplete device login response")
        _set_codex_login_state(
            status="pending",
            verificationUrl=verification_url,
            userCode=user_code,
            loginId=login_id,
            expiresAt=int(time.time()) + 15 * 60,
            error="",
        )
        monitor = threading.Thread(
            target=_monitor_codex_chatgpt_login,
            args=(process, login_id),
            name="codex-chatgpt-login",
            daemon=True,
        )
        monitor.start()
        return _public_codex_login_state()
    except Exception as exc:
        logger.warning("Unable to start ChatGPT device login: %s", exc)
        _terminate_codex_app_server(process)
        with _codex_login_lock:
            if _codex_login_process is process:
                _codex_login_process = None
            _codex_login_state.update({
                "status": "failed",
                "error": str(exc)[:300],
            })
        return _public_codex_login_state()


def _cancel_codex_chatgpt_login() -> bool:
    global _codex_login_process
    with _codex_login_lock:
        process = _codex_login_process
        login_id = str(_codex_login_state.get("loginId") or "")
        _codex_login_state.update({"status": "cancelled", "error": ""})
    if process is None or process.poll() is not None:
        return False
    try:
        if login_id:
            _codex_app_server_send(process, {
                "method": "account/login/cancel",
                "id": 5,
                "params": {"loginId": login_id},
            })
    except Exception:
        pass
    _terminate_codex_app_server(process)
    with _codex_login_lock:
        if _codex_login_process is process:
            _codex_login_process = None
    return True






@app.get("/api/auth/codex-status")
@app.get("/api/auth/claude-status", include_in_schema=False)
async def api_codex_auth_status():
    now = time.time()
    if now - _codex_auth_cache["ts"] < 60 and _codex_auth_cache["data"]:
        return JSONResponse(dict(_codex_auth_cache["data"]))
    result = await asyncio.to_thread(_codex_auth_display)
    _codex_auth_cache.update({"ts": now, "data": result})
    return JSONResponse(result)


@app.post("/api/auth/chatgpt/start")
async def api_start_codex_chatgpt_login(request: Request):
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    result = await asyncio.to_thread(_start_codex_chatgpt_login)
    status_code = 200 if result.get("status") in ("pending", "succeeded") else 502
    return JSONResponse(result, status_code=status_code)


@app.get("/api/auth/chatgpt/status")
async def api_codex_chatgpt_login_status(request: Request):
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    return JSONResponse(_public_codex_login_state())


@app.post("/api/auth/chatgpt/cancel")
async def api_cancel_codex_chatgpt_login(request: Request):
    if not _auth_admin_ok(request):
        return JSONResponse({"error": "admin only"}, status_code=403)
    cancelled = await asyncio.to_thread(_cancel_codex_chatgpt_login)
    return JSONResponse({"ok": True, "cancelled": cancelled})


class SetApiKey(BaseModel):
    apiKey: str = Field(max_length=500)


@app.post("/api/auth/api-key")
async def api_set_codex_key(body: SetApiKey):
    key = body.apiKey.strip()
    if key:
        if not key.startswith("sk-"):
            return JSONResponse(
                {"error": "Invalid API key format. Expected an OpenAI key starting with sk-."},
                status_code=400,
            )
        _save_openai_key(key)
        _codex_auth_fallback_state.update({"path": "", "reason": "", "ts": 0.0})
        _codex_auth_cache["ts"] = 0
        return JSONResponse({"ok": True, "message": "OpenAI API key stored for Codex."})
    else:
        _clear_openai_key()
        _codex_auth_fallback_state.update({"path": "", "reason": "", "ts": 0.0})
        _codex_auth_cache["ts"] = 0
        return JSONResponse({"ok": True, "message": "API key cleared."})


@app.post("/api/auth/logout")
async def api_codex_auth_logout():
    """Back up the current credential file, then run `codex logout`."""
    errors = []
    auth_path = CODEX_HOME / "auth.json"
    if auth_path.exists():
        _backup_before_dashboard_write(auth_path)
    try:
        result = subprocess.run(
            ["codex", "logout"],
            capture_output=True, text=True, timeout=10,
        )
        if result.returncode != 0:
            errors.append(result.stderr.strip() or "codex logout failed")
    except Exception:
        logger.warning("Unable to run codex logout", exc_info=True)
        errors.append("Codex logout command could not be run")
    _clear_openai_key()
    _codex_auth_fallback_state.update({"path": "", "reason": "", "ts": 0.0})
    _codex_auth_cache["ts"] = 0
    if errors:
        return JSONResponse({"ok": True, "warnings": errors})
    return JSONResponse({"ok": True})


_usage_cache: dict = {"ts": 0, "data": {}}
_openai_limits_cache: dict = {"ts": 0, "data": None}


def _codex_session_dirs() -> list[Path]:
    """Return known rollout roots for the admin and member account homes."""
    homes = {CODEX_HOME}
    try:
        homes.update(
            _user_codex_config_dir(user)
            for user in _load_users()
            if user and not _is_admin(user)
        )
    except Exception:
        pass
    return [home / "sessions" for home in homes if (home / "sessions").exists()]


def _all_codex_rollouts() -> list[Path]:
    files: list[Path] = []
    for sessions_dir in _codex_session_dirs():
        files.extend(sessions_dir.rglob("rollout-*.jsonl"))
    return files




def _rate_limit_window_payload(slot: str, window: object) -> dict | None:
    if not isinstance(window, dict):
        return None
    try:
        used_percent = max(0, min(100, int(window.get("usedPercent", 0))))
    except (TypeError, ValueError):
        used_percent = 0
    try:
        duration = int(window.get("windowDurationMins") or 0)
    except (TypeError, ValueError):
        duration = 0
    if duration and duration % (24 * 60) == 0:
        label = f"{duration // (24 * 60)}d"
    elif duration and duration % 60 == 0:
        label = f"{duration // 60}h"
    elif duration:
        label = f"{duration}m"
    else:
        label = slot.title()
    resets_at = None
    try:
        reset_epoch = int(window.get("resetsAt") or 0)
        if reset_epoch:
            resets_at = datetime.fromtimestamp(
                reset_epoch, timezone.utc
            ).isoformat().replace("+00:00", "Z")
    except (TypeError, ValueError, OSError, OverflowError):
        pass
    return {
        "id": slot,
        "label": label,
        "duration_minutes": duration or None,
        "utilization": used_percent,
        "resets_at": resets_at,
    }


@app.get("/api/usage/limits")
async def api_openai_usage_limits():
    """Return genuine ChatGPT plan windows; never invent API-key quotas."""
    now = time.time()
    auth_state = await asyncio.to_thread(
        _ensure_codex_auth_with_fallback, CODEX_HOME, True
    )
    auth_mode = str(auth_state.get("activeMode") or "unknown")
    cached = _openai_limits_cache.get("data")
    if (
        now - _openai_limits_cache["ts"] < 600
        and isinstance(cached, dict)
        and cached.get("auth_mode") == auth_mode
    ):
        return JSONResponse(cached)

    if auth_mode == "apikey":
        data = {
            "fetched_at": now,
            "auth_mode": "apikey",
            "billing_mode": "pay_as_you_go",
            "windows": [],
            "message": "API-key usage is billed per token; it has no Codex plan quota windows.",
        }
        _openai_limits_cache.update({"ts": now, "data": data})
        return JSONResponse(data)
    if auth_mode != "chatgpt":
        return JSONResponse({
            "auth_mode": auth_mode,
            "windows": [],
            "error": "Codex is not authenticated.",
        }, status_code=503)

    raw = await asyncio.to_thread(_codex_app_server_rate_limits, CODEX_HOME)
    by_limit_id = raw.get("rateLimitsByLimitId")
    snapshot = None
    if isinstance(by_limit_id, dict):
        snapshot = by_limit_id.get("codex")
        if not isinstance(snapshot, dict):
            snapshot = next(
                (value for value in by_limit_id.values() if isinstance(value, dict)),
                None,
            )
    if not isinstance(snapshot, dict):
        snapshot = raw.get("rateLimits")
    if not isinstance(snapshot, dict):
        return JSONResponse({
            "auth_mode": "chatgpt",
            "windows": [],
            "error": "Codex did not return plan rate limits.",
        }, status_code=502)

    windows = [
        _rate_limit_window_payload("primary", snapshot.get("primary")),
        _rate_limit_window_payload("secondary", snapshot.get("secondary")),
    ]
    windows = [window for window in windows if window is not None]
    account = auth_state.get("account")
    account = account if isinstance(account, dict) else {}
    data = {
        "fetched_at": now,
        "auth_mode": "chatgpt",
        "billing_mode": "plan",
        "plan_type": snapshot.get("planType") or account.get("planType"),
        "limit_id": snapshot.get("limitId"),
        "limit_name": snapshot.get("limitName"),
        "windows": windows,
    }
    _openai_limits_cache["ts"] = now
    _openai_limits_cache["data"] = data
    return JSONResponse(data)


@app.get("/api/auth/usage")
async def api_codex_usage():
    """Token usage for today, parsed from codex session rollout JSONL files."""
    now = time.time()
    if now - _usage_cache["ts"] < 60:
        return JSONResponse(_usage_cache["data"])

    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    files = _all_codex_rollouts()

    input_tok = 0
    output_tok = 0
    cache_read = 0
    reasoning_tok = 0
    msg_count = 0

    for fpath in files:
        try:
            mtime = fpath.stat().st_mtime
            if datetime.fromtimestamp(mtime, timezone.utc).strftime("%Y-%m-%d") < today:
                continue
            inp, out, cached, reasoning, messages = _parse_usage_file(fpath, today)
            input_tok += inp
            output_tok += out
            cache_read += cached
            reasoning_tok += reasoning
            msg_count += messages
        except Exception:
            logger.debug("Failed to parse usage JSONL for '%s'", fpath, exc_info=True)

    data = {
        "date": today,
        "messages": msg_count,
        "inputTokens": input_tok,
        "outputTokens": output_tok,
        "cacheReadTokens": cache_read,
        "cacheCreateTokens": reasoning_tok,
        "reasoningTokens": reasoning_tok,
        # input + output, matching Codex's own total_tokens. Cached input is a
        # subset of input and reasoning a subset of output — adding them again
        # double-counts (it inflated a 7-day estimate from $463 to $3527).
        "totalTokens": input_tok + output_tok,
    }
    _usage_cache["ts"] = now
    _usage_cache["data"] = data
    return JSONResponse(data)




_stats_usage_cache: dict = {"ts": 0, "data": {}}



_user_usage_cache: dict = {"ts": 0, "data": {}}
















@app.get("/api/stats/usage-by-user")
async def api_stats_usage_by_user(request: Request):
    """Per-account prompt and token usage for today and the last 7 days.

    Administrators see every account; a member sees only their own row.
    """
    viewer = _current_user(request)
    if not viewer:
        return JSONResponse({"error": "Not signed in"}, status_code=401)
    now = time.time()
    if now - _user_usage_cache["ts"] > 120 or not _user_usage_cache["data"]:
        _user_usage_cache["data"] = await asyncio.to_thread(_usage_by_account)
        _user_usage_cache["ts"] = now
    data = dict(_user_usage_cache["data"])
    if not _is_admin(viewer):
        mine = [
            row for row in data.get("users", [])
            if row.get("user_id") == str(viewer.get("id") or "")
        ]
        data["users"] = mine
        data["totals"] = {
            "promptsToday": sum(row["promptsToday"] for row in mine),
            "promptsWeek": sum(row["promptsWeek"] for row in mine),
            "promptsTotal": sum(row["promptsTotal"] for row in mine),
            "tokensToday": sum(row["today"]["totalTokens"] for row in mine),
            "tokensWeek": sum(row["week"]["totalTokens"] for row in mine),
            "tokensTotal": sum(row["all"]["totalTokens"] for row in mine),
            "costToday": round(sum(row["today"]["estimatedCost"] for row in mine), 2),
            "costWeek": round(sum(row["week"]["estimatedCost"] for row in mine), 2),
        }
    return JSONResponse(data)


@app.get("/api/admin/codex-alerts")
async def api_admin_codex_alerts(request: Request, include_resolved: int = 1):
    """Codex health alerts raised by the watchdog."""
    if not _is_admin(_current_user(request)):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    rows, auth = _codex_alerts_snapshot(include_resolved=bool(include_resolved))
    return JSONResponse({
        "alerts": rows[:100],
        "open": sum(1 for row in rows if not row.get("resolved")),
        "auth": auth,
    })


@app.get("/api/admin/google-audit")
async def api_admin_google_audit(
    request: Request,
    limit: int = 200,
    user_id: str = "",
    decision: str = "",
):
    """Who reached which Google document or mailbox, and what was refused.

    The MCP writes one line per tool call; this is the only place an access
    review can see it, so it is admin-only and read-only.
    """
    if not _is_admin(_current_user(request)):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    rows = google_policy.read_audit(
        GOOGLE_MCP_AUDIT_FILE, limit=max(1, min(int(limit), 2000))
    )
    if user_id:
        rows = [row for row in rows if row.get("user_id") == user_id]
    if decision:
        rows = [row for row in rows if row.get("decision") == decision]
    return JSONResponse({
        "entries": rows,
        "denied": sum(1 for row in rows if row.get("decision") == "denied"),
        "file": str(GOOGLE_MCP_AUDIT_FILE),
    })


@app.post("/api/admin/codex-alerts/clear")
async def api_admin_codex_alerts_clear(request: Request):
    """Acknowledge every Codex health alert."""
    if not _is_admin(_current_user(request)):
        return JSONResponse({"error": "Admin only"}, status_code=403)
    with _codex_alerts_lock:
        _write_codex_alerts_locked([], _read_codex_alerts_locked()[1])
    return JSONResponse({"ok": True})


@app.get("/api/stats/usage")
async def api_stats_usage():
    """Aggregated token usage across all codex sessions: 5h window + this week."""
    now = time.time()
    if now - _stats_usage_cache["ts"] < 120 and _stats_usage_cache["data"]:
        return JSONResponse(_stats_usage_cache["data"])

    now_dt = datetime.now(timezone.utc)
    cutoff_5h = (now_dt - timedelta(hours=5)).isoformat()
    week_start = (now_dt - timedelta(days=now_dt.weekday())).replace(
        hour=0, minute=0, second=0, microsecond=0
    ).isoformat()

    all_files = _all_codex_rollouts()
    week_start_date = week_start[:10]

    # Build mapping: cwd -> list of (timestamp, inp, out, cr, reasoning, model)
    cwd_entries: dict = {}

    for fpath in all_files:
        try:
            mtime = fpath.stat().st_mtime
            if datetime.fromtimestamp(mtime, timezone.utc).strftime("%Y-%m-%d") < week_start_date:
                continue
            session_cwd = ""
            model = "gpt-5.4"
            with open(fpath) as f:
                for line in f:
                    try:
                        d = json.loads(line)
                    except Exception:
                        continue
                    if d.get("type") == "session_meta":
                        session_cwd = d.get("payload", {}).get("cwd", "") or session_cwd
                    elif d.get("type") == "turn_context":
                        m = d.get("payload", {}).get("model")
                        if m:
                            model = m
                    elif d.get("type") == "event_msg":
                        pl = d.get("payload", {})
                        if pl.get("type") != "token_count":
                            continue
                        ts = d.get("timestamp", "")
                        if ts < week_start:
                            continue
                        last = (pl.get("info", {}) or {}).get("last_token_usage", {}) or {}
                        inp = last.get("input_tokens", 0)
                        out = last.get("output_tokens", 0)
                        cr = last.get("cached_input_tokens", 0)
                        reason = last.get("reasoning_output_tokens", 0)
                        key = session_cwd or str(fpath.parent)
                        cwd_entries.setdefault(key, []).append((ts, inp, out, cr, reason, model))
        except Exception:
            logger.debug("Failed to parse stats usage JSONL '%s'", fpath, exc_info=True)

    # Map tmux sessions to cwd
    tmux_sessions = get_tmux_sessions()
    session_cwd_to_name: dict = {}
    for s in tmux_sessions:
        cwd = get_session_cwd(s["name"])
        if cwd:
            session_cwd_to_name[cwd] = s["name"]

    g5h = {"inputTokens": 0, "outputTokens": 0, "cacheReadTokens": 0, "cacheCreateTokens": 0, "totalTokens": 0, "messages": 0, "estimatedCost": 0.0}
    gweek = {"inputTokens": 0, "outputTokens": 0, "cacheReadTokens": 0, "cacheCreateTokens": 0, "totalTokens": 0, "messages": 0, "estimatedCost": 0.0}
    session_list = []

    for cwd, entries in cwd_entries.items():
        if not entries:
            continue
        sname = session_cwd_to_name.get(cwd, os.path.basename(cwd.rstrip("/")) or cwd)
        s5h = {"totalTokens": 0, "messages": 0, "estimatedCost": 0.0}
        sweek = {"totalTokens": 0, "messages": 0, "estimatedCost": 0.0}
        latest_ts = ""
        latest_model = "gpt-5.4"

        for ts, inp, out, cr, reason, model in entries:
            total = inp + out          # cached/reasoning are subsets, not extras
            sweek["totalTokens"] += total
            sweek["messages"] += 1
            sweek["estimatedCost"] += _estimate_cost(inp, out, cr, reason, model)
            gweek["inputTokens"] += inp
            gweek["outputTokens"] += out
            gweek["cacheReadTokens"] += cr
            gweek["cacheCreateTokens"] += reason
            gweek["totalTokens"] += total
            gweek["messages"] += 1
            gweek["estimatedCost"] += _estimate_cost(inp, out, cr, reason, model)
            if ts > latest_ts:
                latest_ts = ts
                latest_model = model
            if ts >= cutoff_5h:
                s5h["totalTokens"] += total
                s5h["messages"] += 1
                s5h["estimatedCost"] += _estimate_cost(inp, out, cr, reason, model)
                g5h["inputTokens"] += inp
                g5h["outputTokens"] += out
                g5h["cacheReadTokens"] += cr
                g5h["cacheCreateTokens"] += reason
                g5h["totalTokens"] += total
                g5h["messages"] += 1
                g5h["estimatedCost"] += _estimate_cost(inp, out, cr, reason, model)

        s5h["estimatedCost"] = round(s5h["estimatedCost"], 2)
        sweek["estimatedCost"] = round(sweek["estimatedCost"], 2)

        session_list.append({
            "name": sname,
            "model": latest_model,
            "window5h": s5h,
            "thisWeek": sweek,
            "lastActive": latest_ts,
        })

    session_list.sort(key=lambda x: x["lastActive"], reverse=True)
    g5h["estimatedCost"] = round(g5h["estimatedCost"], 2)
    gweek["estimatedCost"] = round(gweek["estimatedCost"], 2)

    data = {
        "window5h": g5h,
        "thisWeek": gweek,
        "sessions": session_list,
    }
    _stats_usage_cache["ts"] = now
    _stats_usage_cache["data"] = data
    return JSONResponse(data)


# --- Per-session token stats & rate tracking ---

_session_model_cache: dict[str, dict] = {}  # {session_name: {"model": str, "ts": float}}
# Model switches requested via the header dropdown, not yet confirmed by the
# transcript (the JSONL only shows the new model on the NEXT assistant reply).
_session_model_pending: dict[str, dict] = {}  # {session_name: {"model": str, "ts": float}}


def _session_model_fields(session_name: str) -> dict:
    """Model, effort, and pending model for session API payloads. Clears pending once
    the transcript confirms the switch, or after 15 min (request abandoned)."""
    model = _get_session_model(session_name)
    pend = _session_model_pending.get(session_name)
    if pend:
        base = pend.get("model", "").split("[", 1)[0]
        confirmed = bool(model and base and (model == base or model.startswith(base + "-")))
        if confirmed or time.time() - pend.get("ts", 0) > 900:
            _session_model_pending.pop(session_name, None)
            pend = None
    effort = _CODEX_DEFAULT_REASONING_EFFORT
    try:
        cfg = (_session_config_base(session_name) / "config.toml").read_text()
        match = re.search(
            r'^\s*model_reasoning_effort\s*=\s*"([^"]+)"',
            cfg,
            re.MULTILINE,
        )
        if match:
            effort = match.group(1)
    except Exception:
        pass
    return {
        "model": model,
        "model_pending": (pend or {}).get("model", ""),
        "effort": effort,
    }


def _get_session_model(session_name: str) -> str:
    """Detect the current model for a session by reading its latest codex rollout."""
    now = time.time()
    cached = _session_model_cache.get(session_name)
    if cached and now - cached.get("ts", 0) < 30:
        return cached.get("model", "")
    files = _find_session_jsonl_files(session_name)
    if not files:
        # Fall back to the model from codex config.toml
        try:
            cfg = (_session_config_base(session_name) / "config.toml").read_text()
            m = re.search(r'^\s*model\s*=\s*"([^"]+)"', cfg, re.MULTILINE)
            if m:
                _session_model_cache[session_name] = {"model": m.group(1), "ts": now}
                return m.group(1)
        except Exception:
            pass
        _session_model_cache[session_name] = {"model": "", "ts": now}
        return ""
    newest = max(files, key=lambda f: os.path.getmtime(f), default=None)
    if not newest:
        _session_model_cache[session_name] = {"model": "", "ts": now}
        return ""
    model = ""
    try:
        with open(newest, "rb") as f:
            f.seek(0, 2)
            size = f.tell()
            f.seek(max(0, size - 65536))
            tail = f.read().decode("utf-8", errors="replace")
        for line in reversed(tail.strip().split("\n")):
            try:
                d = json.loads(line)
                if d.get("type") == "turn_context":
                    m = d.get("payload", {}).get("model", "")
                    if m:
                        model = m
                        break
                if d.get("type") == "session_meta":
                    pass
            except (json.JSONDecodeError, KeyError):
                continue
    except Exception:
        logger.debug("Failed to detect model for '%s'", session_name, exc_info=True)
    _session_model_cache[session_name] = {"model": model, "ts": now}
    return model






@app.get("/api/sessions/{session_name}/stats")
async def api_session_stats(session_name: str):
    """Per-session token usage, cost, and rate limit detection."""
    stats = await asyncio.to_thread(_parse_session_stats, session_name)
    return JSONResponse(stats)


class SendCommand(BaseModel):
    command: str

class SendKeys(BaseModel):
    # List of tmux key names, e.g. ["Escape"], ["C-c"], ["q", "Enter"].
    keys: list[str] = Field(max_length=50)

class AuthModeBody(BaseModel):
    mode: str  # "api" or "subscription"

class AwayModeBody(BaseModel):
    enabled: bool



@app.post("/api/sessions/{session_name}/resume")
async def api_resume_session(session_name: str):
    if not _find_session(session_name)[1]:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    result = await _controller_call(
        "session_resume", session=session_name, source="explicit-resume"
    )
    return JSONResponse(result, status_code=200 if result.get("ok") else 503)


@app.post("/api/sessions/{session_name}/send")
async def api_send_command(request: Request, session_name: str, body: SendCommand):
    # Aim at the AGENT's pane, not the session's active window: the IDE's
    # terminal window becomes active when a browser terminal attaches, and
    # prompts were being typed into that SSH shell instead of the agent.
    agent_target = await asyncio.to_thread(_agent_pane_target, session_name)
    """Send keystrokes to a tmux session, as if typed at the terminal."""
    _, sess = _find_session_for_user(session_name, _current_user(request))
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    resumed = await _controller_call(
        "session_resume", session=session_name, source="send-command"
    )
    if not resumed.get("ok"):
        return JSONResponse({"error": resumed.get("error", "session resume failed")}, status_code=503)
    if not await _wait_for_codex_input_ready(session_name):
        return JSONResponse(
            {
                "error": (
                    "Codex is still starting. Your message was not sent; "
                    "wait a moment and retry."
                )
            },
            status_code=503,
        )
    try:
        cmd_text = body.command
        if len(cmd_text) > 200:
            # For long messages, use tmux load-buffer + paste-buffer.
            # Codex's bracketed paste mode shows "[Pasted text +N lines]"
            # as a preview and often swallows the Enter that follows, leaving
            # the paste stuck until the user sends a second message. We defeat
            # this by sending the \e[?2004l escape sequence first (disables
            # bracketed paste), then pasting, then waiting long enough for
            # the terminal to render before pressing Enter.
            await asyncio.to_thread(subprocess.run,
                ["tmux", "send-keys", "-t", agent_target, "-H",
                 "1b", "5b", "3f", "32", "30", "30", "34", "6c"],  # \e[?2004l
                capture_output=True, text=True, timeout=5
            )
            await asyncio.sleep(0.15)
            with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as tmp:
                tmp.write(cmd_text)
                tmp_path = tmp.name
            try:
                await asyncio.to_thread(subprocess.run,
                    ["tmux", "load-buffer", tmp_path],
                    capture_output=True, text=True, timeout=5
                )
                await asyncio.to_thread(subprocess.run,
                    ["tmux", "paste-buffer", "-t", agent_target],
                    capture_output=True, text=True, timeout=5
                )
            finally:
                os.unlink(tmp_path)
            # Wait long enough for Codex to render the pasted content
            # before pressing Enter. Scale with length; cap at 5s.
            wait_secs = max(0.8, min(5.0, len(cmd_text) / 1500))
            await asyncio.sleep(wait_secs)
            # C-m is an explicit carriage return, which Codex treats as submit.
            await asyncio.to_thread(subprocess.run,
                ["tmux", "send-keys", "-t", agent_target, "C-m"],
                capture_output=True, text=True, timeout=5
            )
            # Belt-and-braces: if a bracketed paste preview is still showing
            # (because the escape sequence arrived too late, or bracketed paste
            # was re-enabled mid-flight), a second Enter usually dismisses the
            # preview and submits. Check the pane, only re-press Enter if we
            # still see paste preview markers.
            await asyncio.sleep(0.4)
            try:
                tail = await asyncio.to_thread(capture_pane_recent, session_name, 6)
                if "Pasted text" in tail or "[Pasted" in tail:
                    await asyncio.to_thread(subprocess.run,
                        ["tmux", "send-keys", "-t", agent_target, "C-m"],
                        capture_output=True, text=True, timeout=5
                    )
            except Exception:
                logger.debug("Post-paste verification failed", exc_info=True)
        else:
            # Short messages: send-keys -l is fine, but Codex's TUI needs one
            # render tick before Enter. Sending text and Enter back-to-back can
            # leave the text visibly parked in the input box without submitting.
            await asyncio.to_thread(subprocess.run,
                ["tmux", "send-keys", "-t", agent_target, "-l", cmd_text],
                capture_output=True, text=True, timeout=5
            )
            await asyncio.sleep(0.25)
            # Submit as a separate, explicit carriage-return key event.
            await asyncio.to_thread(subprocess.run,
                ["tmux", "send-keys", "-t", agent_target, "C-m"],
                capture_output=True, text=True, timeout=5
            )
        # Record user message in chat history
        now = time.time()
        entry = cache.setdefault(session_name, {})
        if "messages" not in entry:
            entry["messages"] = _load_session_messages(session_name)
        entry["messages"].append({
            "role": "user", "text": body.command, "ts": now
        })
        _save_messages()
        try:
            prompt_user = _current_user(request) or _user_for_session(session_name)
            if prompt_user:
                impersonator = getattr(request.state, "_impersonator", None)
                original = request.cookies.get("tmux_imp_orig")
                if impersonator is None:
                    impersonator = _user_from_token(original) if original else None
                if not _is_admin(impersonator):
                    impersonator = None
                _append_prompt_audit(
                    prompt_user,
                    session_name,
                    body.command,
                    impersonator=impersonator,
                    timestamp=now,
                )
        except Exception:
            logger.exception(
                "Failed to append prompt audit for session '%s'",
                session_name,
            )
        return JSONResponse({"ok": True, "sent": body.command})
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)



@app.post("/api/sessions/{session_name}/interrupt")
async def api_interrupt_session(session_name: str):
    """Send Escape key to interrupt a running Codex session."""
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    await _controller_call("session_touch", session=session_name, source="interrupt")
    try:
        await asyncio.to_thread(subprocess.run,
            ["tmux", "send-keys", "-t", session_name, "Escape"],
            capture_output=True, text=True, timeout=5
        )
        return JSONResponse({"ok": True, "action": "interrupt"})
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)


# Allowed tmux key names to prevent injection
ALLOWED_TMUX_KEYS = {
    "Escape", "Enter", "Space", "Tab", "BSpace",
    "Up", "Down", "Left", "Right",
    "C-c", "C-d", "C-z", "C-l", "C-a", "C-e", "C-u", "C-k", "C-w",
    "PageUp", "PageDown", "Home", "End",
}

@app.post("/api/sessions/{session_name}/send-keys")
async def api_send_keys(session_name: str, body: SendKeys):
    """Send raw key sequences to a tmux session (Escape, C-c, Enter, q, etc.).

    Unlike /send, this does NOT wrap text in -l (literal) mode and does NOT
    auto-append Enter. Use this for terminal control keys.
    """
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    resumed = await _controller_call(
        "session_resume", session=session_name, source="send-keys"
    )
    if not resumed.get("ok"):
        return JSONResponse({"error": resumed.get("error", "session resume failed")}, status_code=503)
    try:
        for key in body.keys:
            # Allow single printable characters (q, y, n, etc.) and known tmux key names
            if key in ALLOWED_TMUX_KEYS or (len(key) == 1 and key.isprintable()):
                await asyncio.to_thread(subprocess.run,
                    ["tmux", "send-keys", "-t", session_name, key],
                    capture_output=True, text=True, timeout=5
                )
            else:
                return JSONResponse({"error": f"Key not allowed: {key}"}, status_code=400)
        return JSONResponse({"ok": True, "keys_sent": body.keys})
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)


class BracketedPasteBody(BaseModel):
    enabled: bool

@app.post("/api/sessions/{session_name}/bracketed-paste")
async def api_bracketed_paste_toggle(session_name: str, body: BracketedPasteBody):
    """Toggle bracketed paste mode for a tmux session.
    Sends the ANSI escape sequence to enable/disable bracketed paste in the terminal.
    """
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    try:
        if body.enabled:
            # \e[?2004h — enable bracketed paste
            hex_seq = ["1b", "5b", "3f", "32", "30", "30", "34", "68"]
        else:
            # \e[?2004l — disable bracketed paste
            hex_seq = ["1b", "5b", "3f", "32", "30", "30", "34", "6c"]
        await asyncio.to_thread(subprocess.run,
            ["tmux", "send-keys", "-t", session_name, "-H"] + hex_seq,
            capture_output=True, text=True, timeout=5,
        )
        return JSONResponse({"ok": True, "bracketed_paste": body.enabled})
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)


@app.post("/api/sessions/{session_name}/set-auth-mode")
async def api_set_auth_mode(session_name: str, body: AuthModeBody):
    """Reject the legacy per-pane auth toggle.

    Codex credentials belong to CODEX_HOME. Mutating a shell variable in an
    already-running pane neither switches the active Codex process nor safely
    isolates one account from another, and sending a key through tmux
    would expose it in pane history. Authentication is therefore managed in
    Settings for the signed-in account.
    """
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    if body.mode not in ("api", "subscription"):
        return JSONResponse({"error": "Invalid mode"}, status_code=400)
    return JSONResponse(
        {
            "error": (
                "Codex authentication is configured per account. "
                "Use Settings > Login."
            )
        },
        status_code=409,
    )


@app.get("/api/models")
async def api_models():
    """The model dropdown catalog ([id, label] rows) + the launch default. Kept
    current by the 24h auto-detect; the frontend fetches this on load so newly
    released models appear without a redeploy."""
    return JSONResponse({
        "models": MODEL_CATALOG,
        "default": DEFAULT_MODEL,
        "efforts": list(_CODEX_REASONING_EFFORTS),
        "default_effort": _CODEX_DEFAULT_REASONING_EFFORT,
    })


@app.post("/api/models/refresh")
async def api_models_refresh(request: Request):
    """Force an immediate refresh from the installed Codex CLI (admin)."""
    user = _current_user(request)
    if not (user and _is_admin(user)):
        return JSONResponse({"error": "admin only"}, status_code=403)
    changed = await _refresh_model_catalog(force=True)
    return JSONResponse({"ok": True, "changed": changed, "models": MODEL_CATALOG})


async def _restart_codex_for_session(session_name: str) -> tuple[bool, bool]:
    """Exit Codex, restore the owner's environment, and resume the thread."""
    exported = False
    try:
        await asyncio.to_thread(
            subprocess.run,
            ["tmux", "send-keys", "-t", session_name, "-l", _agent_quit_command(session_name)],
            capture_output=True,
            text=True,
            timeout=5,
        )
        await asyncio.sleep(0.25)
        await asyncio.to_thread(
            subprocess.run,
            ["tmux", "send-keys", "-t", session_name, "Enter"],
            capture_output=True,
            text=True,
            timeout=5,
        )
        for _ in range(15):
            await asyncio.sleep(1)
            if not await _async_is_codex_running(session_name):
                break
        if await _async_is_codex_running(session_name):
            # An idle composer can retain partial text. Clear it once, then
            # retry the literal slash command. Never paste shell exports or a
            # launch command while the old Codex process is still alive.
            await asyncio.to_thread(
                subprocess.run,
                ["tmux", "send-keys", "-t", session_name, "C-c"],
                capture_output=True,
                text=True,
                timeout=5,
            )
            await asyncio.sleep(0.5)
            await asyncio.to_thread(
                subprocess.run,
                ["tmux", "send-keys", "-t", session_name, "-l", _agent_quit_command(session_name)],
                capture_output=True,
                text=True,
                timeout=5,
            )
            await asyncio.sleep(0.25)
            await asyncio.to_thread(
                subprocess.run,
                ["tmux", "send-keys", "-t", session_name, "Enter"],
                capture_output=True,
                text=True,
                timeout=5,
            )
            for _ in range(10):
                await asyncio.sleep(1)
                if not await _async_is_codex_running(session_name):
                    break
        if await _async_is_codex_running(session_name):
            logger.error(
                "Refusing to inject owner environment while Codex is still running in '%s'",
                session_name,
            )
            return False, False
        exported = _send_session_owner_environment(session_name)
        if not exported:
            return False, False
        await asyncio.sleep(0.3)
        launch = _session_launch_command(
            session_name,
            _session_launch_base(session_name),
            pin_model=False,
            resume=True,
        )
        await asyncio.to_thread(
            subprocess.run,
            ["tmux", "send-keys", "-t", session_name, "-l", launch],
            capture_output=True,
            text=True,
            timeout=5,
        )
        await asyncio.to_thread(
            subprocess.run,
            ["tmux", "send-keys", "-t", session_name, "Enter"],
            capture_output=True,
            text=True,
            timeout=5,
        )
        for _ in range(15):
            await asyncio.sleep(1)
            if await _async_is_codex_running(session_name):
                return exported, True
    except Exception:
        logger.exception("Failed to restart Codex in '%s'", session_name)
    return exported, False


def _write_session_codex_settings(session_name: str, managed: dict) -> Path:
    """Merge model settings into the session owner's standard config."""
    base = _session_config_base(session_name)
    base.mkdir(parents=True, exist_ok=True)
    config_path = base / "config.toml"
    existing = config_path.read_text() if config_path.exists() else ""
    merged = _merge_top_level_toml_keys(existing, managed)
    if merged != existing:
        _backup_before_dashboard_write(config_path)
        config_path.write_text(merged)
    return config_path


@app.post("/api/sessions/{session_name}/effort")
async def api_set_session_effort(session_name: str, body: SetSessionEffortBody):
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    # Claude takes --effort as a launch flag and never reads Codex's config.toml,
    # so its effort is stored per session and applied when the pane restarts.
    if _session_agent_kind(session_name) == "claude":
        level = (body.effort or "").strip().lower()
        if level not in CLAUDE_EFFORTS:
            return JSONResponse(
                {"error": f"Invalid effort. Use {', '.join(CLAUDE_EFFORTS)}."}, status_code=400
            )
        _set_session_claude_setting(session_name, "claude_effort", level)
        restarted = False
        if body.restart:
            try:
                await _restart_agent_with_new_flags(session_name)
                restarted = True
            except Exception as exc:  # noqa: BLE001 - setting is saved either way
                logger.info("Could not restart Claude for effort change", exc_info=True)
                return JSONResponse(
                    {"ok": True, "effort": level, "restarted": False, "warning": str(exc)[:200]}
                )
        return JSONResponse({"ok": True, "effort": level, "restarted": restarted})
    effort = _normalize_reasoning_effort(body.effort)
    if effort is None or effort == "":
        allowed = ", ".join(_CODEX_REASONING_EFFORTS)
        return JSONResponse({"error": f"Invalid effort. Use {allowed}."}, status_code=400)
    await asyncio.to_thread(
        _write_session_codex_settings,
        session_name,
        {"model_reasoning_effort": effort},
    )
    running = await _async_is_codex_running(session_name)
    exported = restarted = False
    if not running:
        exported = _send_session_owner_environment(session_name)
    elif body.restart:
        exported, restarted = await _restart_codex_for_session(session_name)
    return JSONResponse({
        "ok": True,
        "effort": effort,
        "codex_was_running": running,
        "exported": exported,
        "restarted": restarted,
    })


async def _quit_running_agent(session_name: str) -> bool:
    """Exit the agent in this pane, using its own quit command then Ctrl-C.

    Returns True when the pane is free. Callers MUST check: sending a launch
    command into a pane where the old agent is still alive types it into that
    agent's prompt instead of a shell.
    """
    for keys in (["-l", _agent_quit_command(session_name)], ["Enter"]):
        await asyncio.to_thread(
            subprocess.run,
            ["tmux", "send-keys", "-t", session_name, *keys],
            capture_output=True, text=True, timeout=5,
        )
    for _ in range(12):
        await asyncio.sleep(1)
        if not await _async_is_codex_running(session_name):
            return True
    await asyncio.to_thread(
        subprocess.run,
        ["tmux", "send-keys", "-t", session_name, "C-c"],
        capture_output=True, text=True, timeout=5,
    )
    for _ in range(8):
        await asyncio.sleep(1)
        if not await _async_is_codex_running(session_name):
            return True
    return False


async def _restart_agent_with_new_flags(session_name: str) -> bool:
    """Relaunch the session's agent so changed launch flags take effect.

    Claude's --effort/--model are read at process start, so a change only lands
    on the next launch. Quitting and relaunching in the same pane is what makes
    the setting apply without the user retyping anything.
    """
    # _restart_codex_for_session RESUMES the agent, which re-runs the previous
    # command line — so a changed --effort/--model would never take effect.
    # Quit the process, then send a freshly built launch command instead.
    if await _async_is_codex_running(session_name):
        if not await _quit_running_agent(session_name):
            # Never paste a launch command into a live agent's prompt.
            raise RuntimeError("The running agent did not exit; settings saved for its next start")
    owner = _user_for_session(session_name)
    _send_session_owner_environment(session_name)
    base = _session_launch_base(session_name, owner)
    await asyncio.to_thread(
        subprocess.run,
        ["tmux", "send-keys", "-t", session_name, "-l",
         _session_launch_command(session_name, base, pin_model=False)],
        capture_output=True, text=True, timeout=5,
    )
    await asyncio.to_thread(
        subprocess.run,
        ["tmux", "send-keys", "-t", session_name, "Enter"],
        capture_output=True, text=True, timeout=5,
    )
    return True


class SetSessionAgentBody(BaseModel):
    agent: str = "codex"
    restart: bool = True


@app.get("/api/sessions/{session_name}/agent")
async def api_get_session_agent(request: Request, session_name: str):
    """Everything the chat panel's agent/model/effort controls need, in one call.

    The panel would otherwise fan out to /api/models plus two session reads on
    every open; the values all come from the same place, so serve them together.
    """
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    agent = _session_agent_kind(session_name)
    if agent == "claude":
        # Claude's settings live with the session, not in Codex's config, and it
        # offers its own model aliases and effort levels.
        return JSONResponse({
            "agent": agent,
            "available": [name for name in ("codex", "claude") if shutil.which(name)],
            "model": _session_claude_setting(session_name, "claude_model"),
            "model_pending": "",
            "effort": _session_claude_setting(session_name, "claude_effort"),
            "models": [[alias, alias.capitalize()] for alias in CLAUDE_MODEL_ALIASES],
            "efforts": list(CLAUDE_EFFORTS),
            "default_model": "",
        })
    fields = await asyncio.to_thread(_session_model_fields, session_name)
    return JSONResponse({
        "agent": agent,
        "available": [name for name in ("codex", "claude") if shutil.which(name)],
        "model": fields.get("model", ""),
        "model_pending": fields.get("model_pending", ""),
        "effort": fields.get("effort", ""),
        "models": MODEL_CATALOG,
        "efforts": list(_CODEX_REASONING_EFFORTS),
        "default_model": DEFAULT_MODEL,
    })


@app.post("/api/sessions/{session_name}/agent")
async def api_set_session_agent(request: Request, session_name: str, body: SetSessionAgentBody):
    """Switch the agent running in a session.

    Unlike the model, the agent IS the process, so taking effect means quitting
    the current one and launching the other in the same pane.
    """
    user = _current_user(request)
    if user and not _user_can_access_session(user, session_name):
        return JSONResponse({"error": "Session not found"}, status_code=404)
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    agent = (body.agent or "").strip().lower()
    if agent not in {"codex", "claude"}:
        return JSONResponse({"error": "Agent must be 'codex' or 'claude'"}, status_code=400)
    if not shutil.which(agent):
        return JSONResponse(
            {"error": f"{agent} is not installed on this server"}, status_code=503
        )
    previous = _session_agent_kind(session_name)
    if not body.restart:
        _set_session_agent(session_name, agent)
        return JSONResponse({"ok": True, "agent": agent, "restarted": False})
    # Order matters: the OLD agent is what is running, so quit it with ITS quit
    # command before recording the new one. Setting the agent first made
    # _agent_quit_command return the new agent's command, which the running one
    # does not recognise — it stayed alive and the switch reported false success.
    try:
        if await _async_is_codex_running(session_name):
            await _quit_running_agent(session_name)
            if await _async_is_codex_running(session_name):
                return JSONResponse(
                    {"error": f"The running {previous} did not exit; agent unchanged"},
                    status_code=409,
                )
        _set_session_agent(session_name, agent)
        _send_session_owner_environment(session_name)
        base = _session_launch_base(session_name, user)
        for keys in (
            ["-l", _session_launch_command(session_name, base, pin_model=agent == "codex")],
            ["Enter"],
        ):
            await asyncio.to_thread(
                subprocess.run,
                ["tmux", "send-keys", "-t", session_name, *keys],
                capture_output=True, text=True, timeout=5,
            )
    except Exception as exc:  # noqa: BLE001 - report, don't 500 the switch
        _set_session_agent(session_name, previous)
        logger.warning("Agent switch failed for %s", session_name, exc_info=True)
        return JSONResponse({"error": str(exc)[:200] or "Could not switch agent"}, status_code=502)
    return JSONResponse({"ok": True, "agent": agent, "restarted": True})


@app.post("/api/sessions/{session_name}/model")
async def api_set_session_model(session_name: str, body: SetSessionModelBody):
    """Persist the account's Codex model and optionally restart the live pane."""
    _, sess = _find_session(session_name)
    if not sess:
        return JSONResponse({"error": "Session not found"}, status_code=404)
    model = (body.model or "").strip()
    if not re.match(r"^[A-Za-z0-9._:/-]{2,80}$", model):
        return JSONResponse({"error": "Invalid model id."}, status_code=400)
    if _session_agent_kind(session_name) == "claude":
        _set_session_claude_setting(session_name, "claude_model", model)
        restarted = False
        if body.restart:
            try:
                await _restart_agent_with_new_flags(session_name)
                restarted = True
            except Exception as exc:  # noqa: BLE001 - setting is saved either way
                logger.info("Could not restart Claude for model change", exc_info=True)
                return JSONResponse(
                    {"ok": True, "model": model, "restarted": False, "warning": str(exc)[:200]}
                )
        return JSONResponse({"ok": True, "model": model, "restarted": restarted})
    await asyncio.to_thread(
        _write_session_codex_settings,
        session_name,
        {"model": model},
    )
    _session_model_cache.pop(session_name, None)
    running = await _async_is_codex_running(session_name)
    exported = restarted = False
    if not running:
        exported = _send_session_owner_environment(session_name)
    elif body.restart:
        exported, restarted = await _restart_codex_for_session(session_name)
    if running and not restarted:
        _session_model_pending[session_name] = {"model": model, "ts": time.time()}
    else:
        _session_model_pending.pop(session_name, None)
    return JSONResponse({
        "ok": True,
        "model": model,
        "codex_was_running": running,
        "exported": exported,
        "restarted": restarted,
    })


# --- Auto-responder for Codex interactive prompts ---
# Automatically detects when Codex is waiting for user input
# (plan approval, questions, permission prompts) and sends Enter
# to select the default/first option — keeps sessions unblocked.

_auto_respond_cooldown: dict[str, float] = {}
_AUTO_RESPOND_INTERVAL = 3      # seconds between checks
_AUTO_RESPOND_COOLDOWN = 10     # min seconds between auto-responds per session
_auto_respond_log: list = []    # recent auto-respond events (for debugging)




_MENU_PICK_SYSTEM_PROMPT = (
    "A Codex agent is showing a numbered selection menu and THE USER IS AWAY and will "
    "not answer. Pick the option number that best lets the agent CONTINUE and COMPLETE the work "
    "on its own.\n"
    "- Strongly prefer options that proceed / do the work / say Yes / auto-accept / "
    "'yes, and don't ask again' / accept-edits / run it.\n"
    "- AVOID options that pause, stop, cancel, exit, quit, reject, defer, or hand control back "
    "to the user (e.g. 'no', 'let me decide', 'I'll do it myself', 'ask me later').\n"
    "- If several options proceed, pick the one that makes the MOST progress with the fewest "
    "future interruptions.\n"
    "- If genuinely unsure, pick 1.\n"
    "Reply with ONLY the option number, nothing else."
)


def _parse_menu_options(visible_text: str):
    """Parse a Codex numbered menu. Returns (options, selected_idx) where
    options = [(number, label), ...] in visual order and selected_idx is the
    0-based position of the ❯-highlighted option (0 if none found)."""
    options = []
    selected = None
    for line in visible_text.split("\n"):
        s = line.strip()
        m = re.match(r"^(❯|❯)?\s*(\d+)\.\s+(\S.*)$", s)
        if not m:
            continue
        if m.group(1):
            selected = len(options)
        options.append((int(m.group(2)), m.group(3).strip()))
    return options, (selected if selected is not None else 0)


async def _llm_pick_menu_option(name: str, visible: str, options: list):
    """Ask the LLM which menu option best continues the work. Returns the chosen
    option NUMBER, or None to fall back to the default (Enter)."""
    valid = {n for n, _ in options}
    if not valid:
        return None
    try:
        raw = await llm_call(
            system_prompt=_MENU_PICK_SYSTEM_PROMPT,
            user_content=(f"Session '{name}' is showing this menu:\n\n{visible[-2500:]}\n\n"
                          f"Valid option numbers: {sorted(valid)}. Reply with ONE number."),
            max_tokens=4,
        )
    except Exception:
        return None
    m = re.search(r"\d+", raw or "")
    if not m:
        return None
    n = int(m.group())
    return n if n in valid else None


async def _select_menu_option(name: str, options: list, selected_idx: int, target_num: int) -> str:
    """Navigate to the target option (arrow keys) and Enter. Returns a label for logging."""
    target_idx = next((i for i, (n, _) in enumerate(options) if n == target_num), None)
    if target_idx is None:
        target_idx = selected_idx
    delta = target_idx - selected_idx
    if 0 < abs(delta) < len(options):
        key = "Down" if delta > 0 else "Up"
        for _ in range(abs(delta)):
            await asyncio.to_thread(subprocess.run,
                ["tmux", "send-keys", "-t", name, key],
                capture_output=True, text=True, timeout=3)
            await asyncio.sleep(0.06)
    await asyncio.to_thread(subprocess.run,
        ["tmux", "send-keys", "-t", name, "Enter"],
        capture_output=True, text=True, timeout=3)
    label = next((option_label for n, option_label in options if n == target_num), "")
    return f"option {target_num} ({label[:40]})" if label else f"option {target_num}"


async def _auto_responder_loop():
    """Background loop that auto-responds to Codex interactive prompts."""
    log = logging.getLogger("auto-responder")
    await asyncio.sleep(5)  # initial delay after startup
    while True:
        try:
            await asyncio.sleep(_AUTO_RESPOND_INTERVAL)
            sessions_list = get_tmux_sessions()
            now = time.time()
            for sess in sessions_list:
                name = sess["name"]
                # Auto-push "off" means never type anything into this terminal.
                if _get_autopush_mode(name) == "off":
                    continue
                # Check cooldown
                last = _auto_respond_cooldown.get(name, 0)
                if now - last < _AUTO_RESPOND_COOLDOWN:
                    continue
                # Capture visible pane (not history — just what's on screen)
                try:
                    result = await asyncio.to_thread(
                        subprocess.run,
                        ["tmux", "capture-pane", "-t", name, "-p"],
                        capture_output=True, text=True, timeout=3,
                    )
                    if result.returncode != 0 or not result.stdout.strip():
                        continue
                except Exception:
                    continue

                prompt_type = _detect_interactive_prompt(result.stdout)
                if prompt_type:
                    # Safety backstop: don't auto-approve a clearly destructive /
                    # irreversible action — leave it for a human. (Back off ~60s to
                    # avoid re-logging every poll.)
                    if _looks_destructive(result.stdout):
                        _auto_respond_cooldown[name] = now + 50
                        log.info("Auto-responder HOLDING '%s' — destructive prompt needs a human", name)
                        continue
                    # Read the options and let the LLM choose the one that best
                    # continues the work autonomously, then navigate to it + Enter.
                    # Falls back to Enter (the highlighted/first option) if the LLM
                    # is unavailable or unsure — menus still get handled instantly.
                    options, selected_idx = _parse_menu_options(result.stdout)
                    target = (await _llm_pick_menu_option(name, result.stdout, options)
                              if len(options) >= 2 else None)
                    if target is not None:
                        chosen = await _select_menu_option(name, options, selected_idx, target)
                    else:
                        await asyncio.to_thread(
                            subprocess.run,
                            ["tmux", "send-keys", "-t", name, "Enter"],
                            capture_output=True, text=True, timeout=3,
                        )
                        chosen = "default option (Enter)"
                    _auto_respond_cooldown[name] = now
                    event = {"session": name, "type": prompt_type, "choice": chosen, "ts": now}
                    _auto_respond_log.append(event)
                    # Keep log bounded
                    if len(_auto_respond_log) > 50:
                        _auto_respond_log.pop(0)
                    log.info(f"Auto-responded to {prompt_type} in session '{name}' -> {chosen}")
        except Exception:
            logger.debug("Auto-responder loop iteration failed", exc_info=True)


@app.get("/api/auto-respond-log")
async def api_auto_respond_log():
    """Recent auto-respond events for debugging."""
    return JSONResponse(_auto_respond_log[-20:])


# --- Autopilot Watchdog Loop (formerly "simple watchdog") ---
# Always-on smart supervisor. When a session goes idle because Codex stopped and
# is waiting on the user in ANY way — a question, a choice, a confirmation, work
# it deferred ("left for phase 2", "out of scope", "next steps", "we could
# also…"), or just a soft pause — it reads the screen, asks an LLM what reply
# keeps the work moving on its own, and types that reply back. The user is usually
# away, so the bias is: ALWAYS find a way to continue autonomously. It only holds
# off (WAIT) when Codex is still actively working, when the only next action is
# genuinely destructive/irreversible (needs a human), or when the task is truly
# 100% complete with nothing deferred or optional left.




# Deterministic safety backstop. If the recent screen (or the message we're about
# to send) names a clearly catastrophic / irreversible operation, we NEVER
# auto-drive it — we leave it for a human, regardless of what the LLM decided.
# Kept tight so it doesn't block the common "just keep going" cases.
_DESTRUCTIVE_RE = re.compile(
    r"\bDROP\s+(?:TABLE|DATABASE|SCHEMA)\b"
    r"|\bTRUNCATE\s+TABLE\b"
    r"|\brm\s+-[rfRF]{1,2}\s+(?:-{1,2}\w+\s+)*(?:/|~|\$HOME|\*|/etc|/var|/usr|/home|/opt|/root|/boot)"
    r"|\b(?:force[- ]?push|push\s+--force\b|push\s+-f\b|git\s+reset\s+--hard)\b"
    r"|\b(?:delet|drop|wip|eras|destroy|purg)\w*\s+(?:\w+\s+){0,5}?(?:production|prod\b|all\s+(?:the\s+)?(?:user|customer|account|record|row|data|table))"
    r"|\b(?:irreversibl\w*|cannot be undone|can'?t be undone|permanently\s+(?:delet|remov|eras|destroy)\w*)"
    r"|\boverwrit\w*\s+(?:\w+\s+){0,5}?(?:production|remote\s+history|shared\s+history)"
    # high-cost spend: a spend verb near a $100+ amount, or any $100+ /month|/year rate
    # ($100+ = 3+ plain digits or comma-grouped thousands; "$99"/"$5/mo" stay under)
    r"|\b(?:spend|purchas\w*|buy|buying|charg\w*|pay|paying|subscrib\w*|upgrad\w*|order\w*)\b[^\n]{0,40}\$\s?(?:[1-9]\d{2,}|[1-9]\d?(?:,\d{3})+)"
    r"|\$\s?(?:[1-9]\d{2,}|[1-9]\d?(?:,\d{3})+)(?:\.\d+)?\s*(?:/|per)\s*(?:mo|month|yr|year)\b",
    re.I,
)


def _looks_destructive(text: str) -> bool:
    """True if the text names a clearly destructive/irreversible/high-cost action
    that should never be auto-approved without a human."""
    return bool(_DESTRUCTIVE_RE.search(text or ""))



_COMPLETION_ASSERT_RE = re.compile(
    # telling the agent to mark/treat/declare the work finished
    r"\b(?:mark|set|flag|treat|consider|declare|call|close)\b[^\n.]{0,45}?\b"
    r"(?:complete|completed|done|finished|verified|resolved|closed)\b"
    r"|\bfully\s+(?:verified|complete|completed|done|tested)\b"
    # asserting checks/tests/steps passed or were confirmed
    r"|\b(?:all|every|each|the|both)\s+(?:check|test|verification|step|task)s?\b[^\n.]{0,35}?\b"
    r"(?:pass(?:ed|es)?|confirm(?:ed)?|verifi(?:ed|es)|green|success\w*|working|complete)\b"
    # asserting something works / is confirmed / functioning correctly
    r"|\b(?:functioning|working|works?|behav\w+|operat\w+)\s+(?:correctly|properly|as[ -]expected|fine)\b"
    r"|\beverything\s+(?:is\s+|looks?\s+|seems?\s+)?(?:working|confirmed|verified|complete|good|fine|in order|passing)\b"
    r"|\bgood\s+to\s+go\b",
    re.I,
)


def _asserts_completion(text: str) -> bool:
    """True if the text claims work passed/works or tells the agent to mark a task
    complete/verified. The watchdog only pushes UNFINISHED work forward — it must
    never rubber-stamp completion or fabricate a result."""
    return bool(_COMPLETION_ASSERT_RE.search(text or ""))


def _parse_autopilot_decision(raw: str):
    """Parse the autopilot LLM JSON. Returns {'action':'send','message':...},
    {'action':'wait'}, or None. Conservative: only 'send' on valid JSON + message."""
    if not raw:
        return None
    t = raw.strip().strip("`").strip()
    if re.fullmatch(r"(?i)wait\.?", t):
        return {"action": "wait"}
    m = re.search(r"\{.*\}", t, re.S)
    if not m:
        return None
    try:
        d = json.loads(m.group())
    except Exception:
        return None
    if not isinstance(d, dict):
        return None
    act = str(d.get("action", "")).lower()
    if act == "wait":
        return {"action": "wait"}
    if act == "send":
        msg = str(d.get("message", "")).strip()
        return {"action": "send", "message": msg} if msg else None
    return None










# --- Auto /login watchdog: re-authenticate a session when Codex asks for login ---





# --- Crash-recovery watchdog: relaunch Codex when a session OOM/crashes to a shell ---
# When Codex exhausts the V8 heap it prints "Aborted" (SIGABRT) — or the OS
# OOM killer prints "Killed", or V8 prints "JavaScript heap out of memory" — and
# the tmux pane drops back to the parent bash. At that point nothing on screen is
# a live Codex prompt, so the auto-responder and simple-watchdog can't help: the
# session just sits dead at a shell forever (the exact "stuck" symptom reported).
# This loop detects that state and relaunches Codex, resuming the crashed
# conversation so the task continues where it left off.

_CRASH_RECOVERY_INTERVAL = 20          # poll every 20s
_CRASH_RECOVERY_COOLDOWN = 120         # min seconds between restart attempts per session
_CRASH_RECOVERY_MAX_ATTEMPTS = 3       # give up after this many consecutive failed restarts
_CRASH_RECOVERY_MAX_TRANSCRIPT = 60_000_000   # don't scan transcripts larger than this (bytes)




















def _record_codex_alert(
    session_name: str,
    kind: str,
    detail: str,
    *,
    username: str = "",
    resolved: bool = False,
) -> dict:
    """Record (or fold into) one Codex health alert and log it loudly."""
    now = time.time()
    detail = (detail or "").strip()[:400]
    with _codex_alerts_lock:
        rows, auth = _read_codex_alerts_locked()
        for row in reversed(rows):
            if (
                row.get("session_name") == session_name
                and row.get("kind") == kind
                and not row.get("resolved")
                and now - float(row.get("last_ts") or 0) < _CODEX_ALERT_REPEAT_WINDOW
            ):
                row["count"] = int(row.get("count") or 1) + 1
                row["last_ts"] = now
                if detail:
                    row["detail"] = detail
                _write_codex_alerts_locked(rows, auth)
                return dict(row)
        entry = {
            "id": secrets.token_hex(8),
            "session_name": session_name,
            "username": username,
            "kind": kind,
            "detail": detail,
            "count": 1,
            "first_ts": now,
            "last_ts": now,
            "resolved": bool(resolved),
            "resolved_ts": now if resolved else 0,
        }
        rows.append(entry)
        _write_codex_alerts_locked(rows, auth)
    logging.getLogger("codex-health").error(
        "ALERT %s in '%s'%s: %s",
        kind, session_name, f" ({username})" if username else "", detail,
    )
    return dict(entry)








def _username_for_session(session_name: str) -> str:
    try:
        owner = _user_for_session(session_name)
        return str(owner.get("username") or "") if owner else ""
    except Exception:
        return ""


def _codex_failure_excerpt(text: str, max_chars: int = 300) -> str:
    """The lines from a dead pane that say *why* Codex is not running.

    Prefers the error lines themselves; falls back to the last real output
    above the shell prompt so an alert is never empty.
    """
    lines = [line.rstrip() for line in (text or "").split("\n")]
    picked: list[str] = []
    for index, line in enumerate(lines):
        if not line.strip() or _SHELL_PROMPT_RE.search(line):
            continue
        if _CODEX_START_FAILURE_RE.search(line) or _CRASH_SIGNATURE_RE.search(line):
            for follow in lines[index:index + 3]:
                follow = follow.strip()
                if follow and follow not in picked and not _SHELL_PROMPT_RE.search(follow):
                    picked.append(follow)
    if not picked:
        for line in reversed(lines):
            stripped = line.strip()
            if not stripped or _SHELL_PROMPT_RE.search(line):
                continue
            picked.append(stripped)
            if len(picked) >= 2:
                break
        picked.reverse()
    return " / ".join(picked)[:max_chars]

















def _find_session_transcript_uuid(session_name: str) -> str | None:
    """Codex recovery uses `resume --last`; no Claude transcript UUID lookup."""
    return None


async def _crash_recovery_loop():
    """Relaunch Codex in sessions that have crashed/OOM'd to a bare shell."""
    rlog = logging.getLogger("crash-recovery")
    await asyncio.sleep(12)  # let startup settle
    while True:
        try:
            await asyncio.sleep(_CRASH_RECOVERY_INTERVAL)
            sessions_list = await asyncio.to_thread(get_tmux_sessions)
            now = time.time()
            owners = _load_session_owners()
            for sess in sessions_list:
                name = sess["name"]
                if _session_lifecycle.get(name).get("parked"):
                    continue
                if await _async_is_claude_running(name):
                    _seen_claude_running.add(name)
                    st = _crash_recovery_state.get(name)
                    if st:
                        st["attempts"] = 0
                        st["gave_up"] = False
                    continue
                # Pane is a bare shell. Only touch sessions we manage / have seen run Codex.
                if name not in owners and name not in _seen_claude_running:
                    continue
                state = _crash_recovery_state.setdefault(name, {"attempts": 0, "last_action": 0})
                if now - state.get("last_action", 0) < _CRASH_RECOVERY_COOLDOWN:
                    continue
                try:
                    recent = await asyncio.to_thread(capture_pane_recent, name, 80)
                except Exception:
                    continue
                # Only recover a Codex that really died — never hijack a shell
                # someone opened on purpose, and never fire into a session that
                # is still starting up.
                if not _pane_is_recoverable_shell(recent):
                    continue
                start_failure = _looks_like_codex_start_failure(recent)
                if state.get("attempts", 0) >= _CRASH_RECOVERY_MAX_ATTEMPTS:
                    if not state.get("gave_up"):
                        rlog.error("Crash recovery giving up on '%s' after %d attempts — "
                                   "manual restart needed", name, state["attempts"])
                        state["gave_up"] = True
                        _record_codex_alert(
                            name,
                            "relaunch-failed",
                            "Codex would not stay up after "
                            f"{state['attempts']} relaunch attempts. Last pane output: "
                            + _codex_failure_excerpt(recent),
                            username=_username_for_session(name),
                        )
                    continue
                state["attempts"] = state.get("attempts", 0) + 1
                state["last_action"] = now
                reason = (
                    "crashed"
                    if _looks_like_crash(recent)
                    else "failed to start" if start_failure
                    else "exited"
                )
                rlog.warning("Session '%s' %s to shell — resuming Codex, attempt %d/%d",
                             name, reason,
                             state["attempts"], _CRASH_RECOVERY_MAX_ATTEMPTS)
                if start_failure:
                    _record_codex_alert(
                        name,
                        "codex-start-failure",
                        _codex_failure_excerpt(recent),
                        username=_username_for_session(name),
                    )
                ok = await _ensure_codex_running(name)
                if ok:
                    _seen_claude_running.add(name)
                    _crash_recovery_state[name] = {"attempts": 0, "last_action": now, "gave_up": False}
                    _resolve_codex_alerts(name, "relaunched by crash recovery")
                    rlog.info("Recovered '%s' — Codex is running again", name)
        except asyncio.CancelledError:
            rlog.info("Crash recovery cancelled")
            raise
        except Exception:
            logger.debug("Crash recovery iteration failed", exc_info=True)


# --- Codex health watchdog: alert, repair the login, relaunch ----------------
# Crash recovery watches one pane at a time and needs a death signature. This
# loop watches the fleet and the *credential*. When the shared ChatGPT login
# stops working every account goes down together and each pane quietly falls
# back to its login shell, which is what users report as "logged out of Codex,
# left in a terminal". It raises an alert for anything it finds, repairs the
# credential when that is the fault, and types the correct relaunch command
# into every session still sitting at a shell.







def _has_pending_user_input(visible: str) -> bool:
    """True if the visible pane shows the ❯ user-input box with text already typed.

    Pattern: a line like '❯ some text the user is typing'. We must NOT send
    'continue' in that case — it would concatenate or submit the user's draft.
    Empty input (just '❯' or '❯ ') is fine.
    """
    for line in visible.split("\n")[-20:]:
        m = re.search(r"❯\s+(\S.*)", line)
        if not m:
            continue
        tail = m.group(1).strip()
        # Numbered selection lines like "❯ 1. Yes" are handled by the auto-responder
        if re.match(r"^\d+\.", tail):
            continue
        # Trailing box-drawing chars are not real input
        tail = tail.rstrip("│ \t")
        if tail:
            return True
    return False


# Wire services/tmux.py once both dependencies exist.
tmux_service.configure(
    _has_pending_user_input=_has_pending_user_input,
    _session_lifecycle=_session_lifecycle,
)






@app.get("/api/sessions/{session_name}/autopush")
async def api_autopush_status(session_name: str):
    """Return the per-session auto-push mode ('off'|'basic'|'full') + recent log."""
    result = await _controller_call("watchdog_status", session=session_name)
    return JSONResponse(result, status_code=200 if result.get("ok") else 503)


class AutopushBody(BaseModel):
    mode: str


@app.post("/api/sessions/{session_name}/autopush")
async def api_autopush_set(session_name: str, body: AutopushBody):
    """Set the per-session auto-push mode.

    off   — the dashboard never types into this terminal.
    basic — auto-pick option menus + confirm permission/plan prompts + keep the
            session logged in (no free-form messages).
    full  — everything in basic, plus auto-compose a "keep going" nudge when
            Codex pauses waiting on the user before a task is finished.
    """
    mode = (body.mode or "").strip().lower()
    if mode not in AUTOPUSH_MODES:
        return JSONResponse(
            {"error": f"mode must be one of {list(AUTOPUSH_MODES)}"}, status_code=400
        )
    result = await _controller_call("autopush_set", session=session_name, mode=mode)
    status = int(result.pop("_status", 200 if result.get("ok") else 503))
    return JSONResponse(result, status_code=status)


# --- Legacy simple-watchdog endpoints. Kept for back-compat and now mapped onto
# the auto-push mode: "enabled" == full, "disabled" == basic. ---
@app.get("/api/sessions/{session_name}/simple-watchdog")
async def api_simple_watchdog_status(session_name: str):
    """Return per-session simple-watchdog state (legacy shape)."""
    result = await _controller_call("watchdog_status", session=session_name)
    result["enabled"] = result.get("mode") == "full"
    return JSONResponse(result, status_code=200 if result.get("ok") else 503)


class SimpleWatchdogBody(BaseModel):
    enabled: bool


@app.post("/api/sessions/{session_name}/simple-watchdog")
async def api_simple_watchdog_toggle(session_name: str, body: SimpleWatchdogBody):
    """Enable/disable the free-form watchdog (legacy). Maps to auto-push full/basic."""
    mode = "full" if body.enabled else "basic"
    result = await _controller_call("autopush_set", session=session_name, mode=mode)
    status = int(result.pop("_status", 200 if result.get("ok") else 503))
    return JSONResponse(result, status_code=status)


# --- Autonomous Mode Watchdog ---
# Monitors all active away-mode and go-nuts-mode sessions.
# Detects stalls (no terminal change for too long) and unsticks them.

# Per-session: {"content_hash": str, "first_seen": float, "nudge_count": int, "last_nudge": float}






async def _restore_autonomous_mode(session_name: str, state: dict, mode: str):
    """Restore an autonomous mode after server restart: wait for session, send prompt, launch loop."""
    rlog = logging.getLogger("restore")
    rlog.info(f"Restoring {mode} mode for '{session_name}' — waiting 15s for tmux to stabilize")
    log_fn = _away_log if mode == "away" else _go_nuts_log

    try:
        # Give tmux and Codex a moment to settle after server restart
        await asyncio.sleep(15)

        if not state.get("enabled"):
            return

        # Check the session still exists
        try:
            activity = await async_detect_activity(session_name)
        except Exception:
            log_fn(state, "Session not found during restore — stopping")
            state["enabled"] = False
            _save_autonomous_state()
            return

        # Wait for session to be idle before sending prompt (max 10 min)
        if activity.get("status") == "busy":
            log_fn(state, "Session is busy — waiting for it to finish current task")
            await _away_wait_for_idle(session_name, timeout=600)

        if not state.get("enabled"):
            return

        # Ensure Codex is actually running (handles OOM/crash during server downtime)
        codex_ok = await _ensure_codex_running(session_name, log_fn, state)
        if not codex_ok:
            log_fn(state, "Could not restart Codex during restore — stopping")
            state["enabled"] = False
            _save_autonomous_state()
            return

        # Send the appropriate unstick/resume prompt (with project isolation)
        skills_dir = _SKILLS_DIR if mode == "away" else _GO_NUTS_SKILLS_DIR
        unstick_prompt = _build_project_isolation_preamble(session_name) + (_UNSTICK_PROMPT_AWAY if mode == "away" else _UNSTICK_PROMPT_GONUTS).format(skills_dir=skills_dir)
        log_fn(state, "Sending resume prompt to session")
        await _away_send_prompt(session_name, unstick_prompt)
        await asyncio.sleep(2)

        # Now enter the continuous monitoring loop
        if mode == "away":
            await _away_mode_continuous_loop(session_name)
        else:
            await _go_nuts_continuous_loop(session_name)

    except asyncio.CancelledError:
        if _shutting_down:
            log_fn(state, f"{mode} restore cancelled (server shutdown — will restore)")
        else:
            log_fn(state, f"{mode} restore cancelled")
            state["enabled"] = False
            _save_autonomous_state()
        raise
    except Exception as e:
        log_fn(state, f"{mode} restore error: {e}")
        rlog.error(f"Restore {mode} for '{session_name}' failed: {e}")
        # Don't set enabled=False — watchdog zombie detection will restart us
    finally:
        state["task"] = None






















# --- Away Mode ---
# Autonomous mode: sends structured prompts to a Codex session,
# waits for idle, captures output, summarizes, advances to next phase.











# Wire services/watchdog.py once every helper its loops drive exists.
watchdog_service.configure(
    _active_openai_key=_active_openai_key,
    _asserts_completion=_asserts_completion,
    _async_is_claude_running=_async_is_claude_running,
    _async_is_codex_running=_async_is_codex_running,
    _auto_auth_session=_auto_auth_session,
    _auto_fix_login=_auto_fix_login,
    _build_project_isolation_preamble=_build_project_isolation_preamble,
    _codex_auth_health=_codex_auth_health,
    _codex_failure_excerpt=_codex_failure_excerpt,
    _detect_interactive_prompt=_detect_interactive_prompt,
    _ensure_codex_running=_ensure_codex_running,
    _get_autopush_mode=_get_autopush_mode,
    _has_pending_user_input=_has_pending_user_input,
    _load_session_owners=_load_session_owners,
    _looks_destructive=_looks_destructive,
    _looks_like_fresh_claude_session=_looks_like_fresh_claude_session,
    _pane_is_recoverable_shell=_pane_is_recoverable_shell,
    _parse_autopilot_decision=_parse_autopilot_decision,
    _pick_login_browser=_pick_login_browser,
    _record_codex_alert=_record_codex_alert,
    _repair_member_codex_auth=_repair_member_codex_auth,
    _resolve_codex_alerts=_resolve_codex_alerts,
    _save_autonomous_state=_save_autonomous_state,
    _session_lifecycle=_session_lifecycle,
    _username_for_session=_username_for_session,
    llm_call=llm_call,
)


# Wire services/autonomous.py once every helper it drives exists. These are the
# deep session-control entry points (resume, capture, activity detection, the
# LLM call); passing them keeps the service a leaf.
autonomous_service.configure(
    _build_project_isolation_preamble=_build_project_isolation_preamble,
    _ensure_codex_running=_ensure_codex_running,
    _find_session=_find_session,
    _resume_parked_session=_resume_parked_session,
    _save_autonomous_state=_save_autonomous_state,
    async_detect_activity=async_detect_activity,
    capture_pane_full=capture_pane_full,
    capture_pane_recent=capture_pane_recent,
    llm_call=llm_call,
    is_shutting_down=lambda: _shutting_down,
)






















@app.post("/api/sessions/{session_name}/away-mode")
async def api_away_mode_toggle(session_name: str, body: AwayModeBody):
    """Toggle controller-owned away mode on or off for a session."""
    result = await _controller_call(
        "away_toggle", session=session_name, enabled=body.enabled
    )
    status = int(result.pop("_status", 200 if result.get("ok") else 503))
    return JSONResponse(result, status_code=status)


@app.get("/api/sessions/{session_name}/away-mode")
async def api_away_mode_status(session_name: str):
    """Get current away-mode state for a session."""
    result = await _controller_call("away_status", session=session_name)
    return JSONResponse(result, status_code=200 if result.get("ok") else 503)


# --- Go Nuts Mode ---
# Autonomous feature-building mode: discovers the project, generates a feature backlog,
# then continuously builds features, tests, and improves the project in a loop.








# --- Go Nuts Phase Prompts ---
















@app.post("/api/sessions/{session_name}/go-nuts-mode")
async def api_go_nuts_mode_toggle(session_name: str, body: GoNutsModeBody):
    """Toggle controller-owned go-nuts mode on or off for a session."""
    result = await _controller_call(
        "go_nuts_toggle", session=session_name, enabled=body.enabled
    )
    status = int(result.pop("_status", 200 if result.get("ok") else 503))
    return JSONResponse(result, status_code=status)


@app.get("/api/sessions/{session_name}/go-nuts-mode")
async def api_go_nuts_mode_status(session_name: str):
    """Get current go-nuts-mode state for a session."""
    result = await _controller_call("go_nuts_status", session=session_name)
    return JSONResponse(result, status_code=200 if result.get("ok") else 503)


# The dashboard page is a 7,790-line static document with placeholder
# substitution, not an f-string: it lives in templates/dashboard.html and is
# read once at import. The __ROOT_PATH__ / __BRAND__ replacements below are
# unchanged, so the served bytes are identical to the inline version.
HTML_PAGE = (TEMPLATES_DIR / "dashboard.html").read_text()

# Inject the actual ROOT_PATH into the JS BASE variable
HTML_PAGE = HTML_PAGE.replace("__ROOT_PATH__", ROOT_PATH)
HTML_PAGE = HTML_PAGE.replace("__BRAND__", BRAND_NAME)
LOGIN_PAGE = LOGIN_PAGE.replace("__ROOT_PATH__", ROOT_PATH) if "__ROOT_PATH__" in LOGIN_PAGE else LOGIN_PAGE
LOGIN_PAGE = LOGIN_PAGE.replace("__BRAND__", BRAND_NAME)






@app.get("/{username}", response_class=HTMLResponse)
async def user_projects_page(request: Request, username: str):
    if username in _RESERVED_TOP or "." in username:
        return HTMLResponse("Not found", status_code=404)
    target = _find_user_by_username(username)
    if not target:
        return HTMLResponse("Not found", status_code=404)
    viewer = _current_user(request)
    if not viewer:
        return HTMLResponse(LOGIN_PAGE, status_code=401)
    is_admin = _is_admin(viewer)
    if viewer.get("id") != target["id"] and not is_admin:
        return HTMLResponse("Forbidden — you can only view your own projects.", status_code=403)
    # An admin visiting an admin's page gets the master list of everyone's projects.
    if is_admin and _is_admin(target):
        rows = []
        for u in sorted(_load_users(), key=lambda x: x.get("username", "")):
            for proj in _list_projects(u.get("username", "")):
                rows.append((u["username"], proj))
        return HTMLResponse(_projects_page_html("All projects (admin)", rows))
    rows = [(username, proj) for proj in _list_projects(username)]
    return HTMLResponse(_projects_page_html(username + "'s projects", rows))


@app.api_route("/{username}/{project}", methods=["GET", "POST"])
@app.api_route("/{username}/{project}/{subpath:path}", methods=["GET", "POST"])
async def serve_project(request: Request, username: str, project: str, subpath: str = ""):
    if username in _RESERVED_TOP:
        return HTMLResponse("Not found", status_code=404)
    viewer = _current_user(request)
    if not viewer:
        return HTMLResponse(_login_page(), status_code=401)
    owner = _find_user_by_username(username)
    if not owner:
        # Project namespaces predate account renames on some long-lived
        # sessions.  Resolve those stable URLs through the explicit session
        # owner whenever the registry has one.
        owner_id = _load_session_owners().get(project)
        owner = _find_user_by_id(owner_id) if owner_id else None
    if not owner:
        # The administrator can recover still-valid static handoffs from
        # namespaces created before either account or session ownership was
        # recorded.  Members cannot probe or open those orphaned directories.
        if not _is_admin(viewer):
            return HTMLResponse("Not found", status_code=404)
    elif viewer.get("id") != owner.get("id") and not _is_admin(viewer):
        return HTMLResponse("Forbidden — you can only view your own projects.", status_code=403)
    pdir = _project_dir(username, project)
    if pdir is None or not pdir.exists():
        return HTMLResponse(f"Project not found. (Served from ~/web-projects/{username}/{project}/)",
                            status_code=404)
    serve_cfg = pdir / ".serve.json"
    if serve_cfg.exists():
        try:
            port = int(json.loads(serve_cfg.read_text()).get("port", 0))
        except Exception:
            port = 0
        if port:
            return await _proxy_to_port(request, port, subpath)
    rel = subpath or "index.html"
    target = (pdir / rel).resolve()
    try:
        target.relative_to(pdir.resolve())
    except ValueError:
        return HTMLResponse("Forbidden", status_code=403)
    if target.is_dir():
        target = target / "index.html"
    if not target.exists():
        idx = pdir / "index.html"
        target = idx if idx.exists() else None
    if not target or not target.exists():
        return HTMLResponse("Not found", status_code=404)
    mime = mimetypes.guess_type(str(target))[0] or "application/octet-stream"
    return FileResponse(str(target), media_type=mime)


async def _controller_forever() -> None:
    stop = asyncio.Event()
    loop = asyncio.get_running_loop()
    for sig in (signal.SIGTERM, signal.SIGINT):
        try:
            loop.add_signal_handler(sig, stop.set)
        except NotImplementedError:
            pass
    async with lifespan(app):
        await stop.wait()




if __name__ == "__main__":
    if PROCESS_ROLE == "controller":
        asyncio.run(_controller_forever())
    elif PROCESS_ROLE == "api":
        _run_api_server(1)
    else:
        # One controller owns watchdogs, lifecycle and tmux readers. Uvicorn's
        # workers are stateless HTTP/WebSocket relays and can scale independently.
        # Floor of 1, not 2: this host has ~2 GB RAM and each worker imports the
        # whole 28k-line module, so forcing a second worker on a memory-tight box
        # made every child die at spawn and the service never bound its port.
        workers = max(1, min(8, int(os.environ.get("TMUX_DASH_WEB_WORKERS", "2"))))
        controller_env = os.environ.copy()
        controller_env["TMUX_DASH_PROCESS_ROLE"] = "controller"
        controller = subprocess.Popen(
            [sys.executable, str(Path(__file__).resolve())],
            env=controller_env,
            start_new_session=True,
        )
        os.environ["TMUX_DASH_PROCESS_ROLE"] = "api"
        controller_stopping = threading.Event()

        def watch_controller() -> None:
            code = controller.wait()
            if not controller_stopping.is_set():
                logger.error("Lifecycle controller exited unexpectedly with code %s", code)
                os.kill(os.getpid(), signal.SIGTERM)

        threading.Thread(target=watch_controller, daemon=True).start()
        try:
            _run_api_server(workers)
        finally:
            controller_stopping.set()
            if controller.poll() is None:
                controller.terminate()
                try:
                    controller.wait(timeout=20)
                except subprocess.TimeoutExpired:
                    controller.kill()
                    controller.wait(timeout=5)
