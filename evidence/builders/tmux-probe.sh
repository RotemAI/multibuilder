#!/usr/bin/env bash
set -u
if sudo -n true 2>/dev/null; then SUDO=sudo; else SUDO=; fi
find /tmp -maxdepth 2 -type s -path '/tmp/tmux-*/*' -print0 2>/dev/null |
while IFS= read -r -d '' sock; do
  owner=$(stat -c '%U' "$sock" 2>/dev/null || true)
  printf 'socket=%s owner=%s\n' "$sock" "$owner"
  if [ -n "$SUDO" ] && [ -n "$owner" ]; then
    $SUDO -u "$owner" tmux -S "$sock" list-sessions -F '#{session_name}\t#{session_windows}\t#{session_attached}\t#{session_activity}' 2>/dev/null || true
  else
    tmux -S "$sock" list-sessions -F '#{session_name}\t#{session_windows}\t#{session_attached}\t#{session_activity}' 2>/dev/null || true
  fi
done
