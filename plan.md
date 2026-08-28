# Remote SSH IDE Plan

## Goal

Provide a safe, browser-based remote development workspace inside the dashboard with a VS Code-style layout:

- Left: SSH file explorer.
- Center: Monaco code editor with multiple open tabs.
- Right: Codex AI chat for the selected dashboard session.

## Current implementation

Status: the Remote IDE UI and direct SSH file operations are implemented. The
next implementation step is to bind SSH transport to the selected real tmux
session.

- Remote SSH connection profiles can be created, listed, and removed by dashboard administrators.
- Profiles persist only connection metadata in the dashboard state directory; passwords and private-key contents are never accepted or stored.
- The dashboard currently uses the host's OpenSSH client in non-interactive mode, with strict host-key checking, no forwarding, and a short connection timeout.
- An optional identity file must already exist below the dashboard host's `~/.ssh`; otherwise SSH agent identities are used.
- Remote browsing, UTF-8 text-file viewing, and atomic saves are supported. Files over 1 MB are intentionally rejected.
- The full-screen IDE has a remote file explorer, Monaco editor, multi-tabs, syntax-language detection, dirty-state indicators, and Ctrl/Cmd+S save.
- The AI panel sends requests to the selected existing Codex session, including the active remote path and up to 12,000 characters from the active editor buffer.
- Monaco is loaded from the pinned jsDelivr version `0.52.0`; CSP permits only that CDN plus blob workers.

## Target session bridge

The Remote IDE remains a three-panel browser interface, but its SSH transport
will belong to the selected real tmux/Codex session:

1. The user selects a dashboard session and opens **Remote SSH IDE**.
2. The dashboard creates a session-scoped OpenSSH control connection.
3. A dedicated `ssh:<host>` tmux window opens in that same session, leaving the
   Codex pane uninterrupted.
4. The Monaco file explorer/editor uses that live control connection for remote
   file operations.
5. The right-hand AI chat continues to send requests to the same Codex session.

This makes the visible Remote IDE and the real SSH terminal two views of one
session-owned connection. The connection must not be shared with another
dashboard session.

## Authentication and security boundary

The SSH IDE is administrator-only until session-owned credentials and auditing
are implemented. The dashboard process may have access to the host user's SSH
agent and `~/.ssh`; allowing member accounts to use that identity would violate
tenant isolation.

Authentication modes for the session bridge:

- Password: supplied when connecting, used only to establish the live SSH
  connection, and never written to a profile or disk.
- SSH key: use an SSH agent or an existing key path. A later improvement may
  allow a pasted private key only as a short-lived temporary file while the
  connection is established; it must never be persisted.

Operational requirements:

- OpenSSH client installed on the dashboard host.
- Remote target has `python3`, used by the constrained file-list/read/write helper commands.
- The target host key is already present in the dashboard host's `known_hosts` file.
- The configured SSH identity or agent is authorized for the remote account.

## Use flow

1. Open a dashboard session and choose **More → Remote SSH IDE**.
2. Choose **SSH Connections → Add SSH connection**.
3. Enter host, port, username, and optionally an existing `~/.ssh` key path.
4. Browse folders in the left panel, open files in the center panel, and save with Ctrl/Cmd+S.
5. Select the Codex session in the IDE header and ask questions in the right panel.

## Next milestones

### P1 — Session-owned SSH bridge

- Move SSH profile and file routes under the selected session and enforce
  session ownership.
- Establish a per-session OpenSSH control socket and use it for all editor file
  operations.
- Open a dedicated SSH tmux window in the same selected session.
- Add session-only password authentication alongside SSH agent/key
  authentication.
- Detect a lost control connection and offer a reconnect action without losing
  editor tabs.

### P2 — Workspace productivity

- Add create, rename, move, and delete file/folder actions with explicit confirmations.
- Add recursive tree view, filename filtering, and quick-open.
- Preserve open tabs and last directory per SSH profile in browser storage.
- Show clearer connection diagnostics and a manual reconnect action.

### P3 — Developer tooling

- Add a constrained remote terminal with a visible command audit trail.
- Add Git status, diff, stage, commit, and branch views.
- Add editor search/replace, go-to-line, and command palette shortcuts.
- Add language-server integration where the remote environment supports it.

### P4 — Collaboration and governance

- Add an explicit per-connection sharing/ownership model if non-admin SSH use is needed; do not reuse the dashboard host identity for members.
- Add connection usage auditing and configurable file-size/path policy.
- Add a review mode that lets Codex propose patches and requires the user to approve each remote write.
- Add integration tests against a disposable local SSH server and browser-level tests for the Monaco workspace.

## Verification

- Focused SSH IDE and security tests: 42 passing.
- Python compilation and rendered browser JavaScript syntax checks: passing.
- Existing project lint has two unrelated `B007` warnings in `app.py` for unused loop variables.
