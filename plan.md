# Remote SSH IDE Plan

## Goal

Provide a safe, browser-based remote development workspace inside the dashboard with a VS Code-style layout:

- Left: SSH file explorer and Git panel.
- Center: Monaco code editor (Monokai) with multiple open tabs.
- Right: AI chat, targeting either a Codex or a Claude agent session.

## Current implementation

Status: the Remote IDE UI and direct SSH file operations are implemented. The
next implementation step is to bind SSH transport to the selected real tmux
session.

- Remote SSH connection profiles can be created, listed, and removed. Each profile is owned by its creator; the owner and dashboard admins may use it, and other members receive 404 so a connection's existence is not disclosed.
- Profiles persist connection metadata **and credentials**, so a workspace can resume after a dashboard restart. Passwords are sealed with AES-256-GCM, bound to the connection id as AAD, and never returned by any API. Private-key contents are still never accepted.
- The dashboard currently uses the host's OpenSSH client in non-interactive mode, with strict host-key checking, no forwarding, and a short connection timeout.
- An optional identity file must already exist below the dashboard host's `~/.ssh`; otherwise SSH agent identities are used.
- Remote browsing, UTF-8 text-file viewing, and atomic saves are supported. Files over 1 MB are intentionally rejected.
- The full-screen IDE has a remote file explorer, Monaco editor, multi-tabs, syntax-language detection, dirty-state indicators, and Ctrl/Cmd+S save.
- The AI panel sends requests to the selected existing Codex session, including the active remote path and up to 12,000 characters from the active editor buffer.
- The IDE frontend is a **Svelte 5 application** in `ide-ui/`, compiled by Vite
  into `static/ide/` and mounted by FastAPI at `<ROOT_PATH>/static/ide/`.
  Reactive runes replace the previous hand-rolled `_ide` mutable object and
  manual DOM updates, which is what made the growing state unmanageable.
- Monaco ships **in the bundle** rather than from a CDN, with only the
  languages `languageFor()` can return; it is code-split so the entry chunk
  stays ~72 kB (26 kB gzipped) and language chunks load on demand.
- Existing CSP already permits this: `script-src 'self'`, `font-src 'self'`,
  and `worker-src 'self' blob:` cover the local bundle and Monaco's workers,
  so no policy change was needed.
- The AI chat's provider switch is a **target-session selector**: Codex and
  Claude both run as agents inside tmux sessions, so choosing the session is
  what chooses the assistant. There is no separate Claude API call here.

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

Connections are per-owner. The creating user and dashboard admins may use a
stored connection; nobody else can see that it exists. Members still never
borrow the dashboard host's SSH agent identity: a member connection
authenticates only with the credential stored against that connection.

### What at-rest encryption does and does not protect

Credentials are encrypted with AES-256-GCM. The data key comes from
`TMUX_DASH_SSH_KEY` or, failing that, a `0600` keyfile generated beside the
ciphertext in the state directory. **An attacker who reads the dashboard
host's disk as the dashboard user therefore recovers both the ciphertext and
the key.** Encryption here defends against stolen backups, copied state
directories, and casual file reads -- not against compromise of the dashboard
account itself. Set `TMUX_DASH_SSH_KEY` from outside the state directory to
raise that bar.

Authentication modes for the session bridge:

- Password: stored encrypted against the connection so a resumed session
  reconnects without prompting. A password supplied on a later connect
  replaces the stored one only after it successfully authenticates.
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

The browser terminal is implemented: `/ws/sessions/{session}/ide/terminal/
{connection}` attaches a PTY to the session's existing `ssh:<host>` tmux
window, so the browser view and the tmux window are the same shell over the
same authenticated control master -- not a second SSH login. Keystrokes are
binary frames and resizes are JSON text frames, so typed input can never be
parsed as a control message. Resizing sends SIGWINCH as well as TIOCSWINSZ,
because the tmux client only re-reads its size on that signal. Detaching
terminates only the tmux client, never the window.

Still missing, in rough priority order: the command palette and Monaco
find/replace, a rendered diff view, file upload/download, and content search
(today's search matches filenames only).

- Add a constrained remote terminal with a visible command audit trail.
- Add Git status, diff, stage, commit, and branch views.
- Add editor search/replace, go-to-line, and command palette shortcuts.
- Add language-server integration where the remote environment supports it.

### P4 — Collaboration and governance

- Add an explicit per-connection sharing/ownership model if non-admin SSH use is needed; do not reuse the dashboard host identity for members.
- Add connection usage auditing and configurable file-size/path policy.
- Add a review mode that lets Codex propose patches and requires the user to approve each remote write.
- Add integration tests against a disposable local SSH server and browser-level tests for the Monaco workspace.

## Building the IDE

`static/ide/` is committed so the Linux deployment needs no Node toolchain:
`git pull && sudo supervisorctl restart tmux-dashboard` remains sufficient.
After changing anything under `ide-ui/`, run `make ide` and commit the
rebuilt bundle; `make ide-dev` rebuilds on change while developing.

## Verification

- Full suite: 464 passing. The one remaining failure,
  `TestAwayWaitForIdle::test_phase_b_resets_idle_count_and_times_out`, is
  pre-existing and unrelated (it fails identically on the previous commit).
- Credential vault: 14 tests covering round-trip, AAD binding, tamper
  rejection, keyfile permissions, restart survival, and no-plaintext-on-disk.
- Python compilation and rendered browser JavaScript syntax checks: passing.
- The Svelte IDE was driven in a real browser: the shell mounts, Monaco
  renders at Monokai's `#272822`, sidebar/git/chat panels and the connection
  form all work, and creating a password connection through the UI wrote
  ciphertext (no plaintext) to a `0600` state file.
