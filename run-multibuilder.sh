#!/bin/bash
# Launcher for multibuilder under supervisor (grabo.cc/multibuilder, :8501).
#
# The app reads all config from the environment, and supervisor has no native
# .env support, so load .env here rather than copying secrets into the
# supervisor conf (world-readable); .env is mode 600.
set -a
APP_DIR=/home/nimrod_rotem/multibuilder
# shellcheck disable=SC1091
[ -f "$APP_DIR/.env" ] && . "$APP_DIR/.env"
set +a

# PATH is pinned explicitly: session creation shells out to `codex`/`claude`
# and `tmux` via shutil.which(), and supervisor's inherited PATH is minimal.
#
# ~/.npm-global/bin comes FIRST because that is where `codex` actually lives on
# this box (npm's global prefix for nimrod_rotem; .bashrc adds it for
# interactive shells, which is why it works in a terminal but not here).
# Omitting it made every session-create 500 with FileNotFoundError: 'codex'.
export PATH=/home/nimrod_rotem/.npm-global/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
export HOME=/home/nimrod_rotem

# ---------------------------------------------------------------------------
# CRITICAL — private tmux server.
#
# This app adopts EVERY tmux session it can see: it lists them on boot, and its
# auto-responder/watchdogs send keystrokes into them and can kill them. Running
# as nimrod_rotem, the default socket (/tmp/tmux-1001/default) also holds the
# crm-term-{claude,codex,muse} sessions behind grabo.cc/grabo-crm/term/*. A
# smoke test on the default socket did in fact send an Enter into `crm-claude`.
#
# app.py hardcodes bare `tmux` with no -L/-S option, but tmux resolves its
# socket under $TMUX_TMPDIR, so pointing that at a private directory gives this
# app its own tmux server and makes the CRM sessions invisible to it. Do not
# remove this line: without it, multibuilder types into the CRM terminals.
# ---------------------------------------------------------------------------
export TMUX_TMPDIR=/home/nimrod_rotem/.multibuilder-tmux
mkdir -p "$TMUX_TMPDIR"
chmod 700 "$TMUX_TMPDIR"

cd "$APP_DIR" || exit 1
exec "$APP_DIR/.venv/bin/python" "$APP_DIR/app.py"
