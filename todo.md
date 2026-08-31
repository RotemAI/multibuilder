# Remote SSH IDE TODO

## Completed

- [x] Add the three-panel Remote IDE UI: SSH explorer, Monaco tabs, and Codex chat.
- [x] Add SSH profile metadata, remote UTF-8 file browsing, reading, and atomic saving.
- [x] Restrict the current connector to administrators and enforce strict host-key checking.
- [x] Add focused API/security tests and JavaScript syntax verification.

## Now — session-owned SSH bridge

- [x] Move SSH IDE routes below `/api/sessions/{session_name}` and enforce session ownership on every call.
- [x] Define a short control-socket path for each `{session, connection}` pair.
- [x] Start a session-scoped OpenSSH control master with forwarding disabled and strict `known_hosts` validation.
- [x] Open a dedicated `ssh:<host>` tmux window within the selected session; do not interrupt the Codex pane.
- [x] Route IDE file operations through that live control socket rather than a separate SSH invocation.
- [x] Detect dead/expired control masters and expose a reconnect action in the IDE.

## Authentication

- [x] Add an authentication-mode selector: password, SSH agent, or existing key path.
- [x] Keep passwords out of logs, command lines, and environment files; the only persisted copy is the AES-256-GCM ciphertext in the connection store.
- [x] Support existing keys from `~/.ssh` and SSH agent identities.
- [x] Do not support pasted private keys; use an SSH agent or an existing key under `~/.ssh` so browser-submitted private-key material is never accepted.
- [x] Store passwords encrypted at rest (AES-256-GCM, AAD-bound to the connection id) so a workspace resumes after a restart.
- [x] Add tests proving plaintext credentials never reach API responses or the state file.

## Session resume

- [x] Persist last directory, open tabs, and active file server-side so a resume survives a browser change or restart.
- [x] Persist unsaved editor buffers (bounded, 0600) and restore them as dirty tabs.
- [x] Auto-reconnect a dead control master on open using the stored credential.
- [x] Purge stored buffers when a connection is deleted.

## Remote IDE UX

- [x] Add connection state in the header: connecting, connected, reconnect required, and error.
- [x] Show a link/button to focus the matching SSH tmux window.
- [x] Preserve tabs, active file, and last directory per session/connection in browser storage.
- [x] Add create, rename, move, and delete file/folder actions with confirmation dialogs; folders can only be deleted when empty.
- [x] Add a loaded-file filter, Ctrl/Cmd+P Quick Open, and a lazy recursive tree view.

## Frontend

- [x] Rebuild the IDE as a Svelte 5 app in `ide-ui/`, compiled to `static/ide/`.
- [x] Replace the mutable `_ide` object with a reactive store.
- [x] Bundle Monaco locally with the Monokai theme; code-split languages.
- [x] Three-panel shell: explorer + git, editor tabs, AI chat, status bar.
- [x] Target a Codex or Claude agent session from the chat panel.
- [x] Open the Svelte IDE from **More → Remote SSH IDE**; the old overlay is
      still reachable as "Remote SSH IDE (legacy)" until parity is reached.
- [x] Show agent replies in the chat panel (`/ide/chat`, polled every 3s)
      instead of echoing only what the user sent.
- [x] Port Quick Open (Ctrl/Cmd+P) to the Svelte shell.
- [x] Stage and unstage individual files from the Git panel.
- [ ] Port the command palette and Monaco find/replace + go-to-line.
- [ ] Surface remote LSP status in the Svelte shell.
- [ ] Use the store's lazy `toggleDirectory` to render a recursive tree.
- [ ] Retire the legacy inline IDE JavaScript in `app.py` once the Svelte
      shell has full parity.

## Developer tooling

- [x] Add a constrained terminal launcher that focuses the session-owned tmux SSH window and records credential-free audit events.
- [x] Add fixed-command Git status, diff, stage/unstage, commit, and branch switch/create controls over the session SSH bridge.
- [x] Add Monaco search/replace, go-to-line, and Ctrl/Cmd+Shift+P command-palette shortcuts.
- [ ] Evaluate remote language-server support and connect Monaco models where available.

## Security and verification

- [x] Replace the admin-only gate with per-owner ownership: creator + admins may use a connection; others get 404 so existence is not disclosed.
- [ ] Document key-management guidance for `TMUX_DASH_SSH_KEY` in the deployment runbook.
- [x] Add private, credential-free audit events for connect/reconnect, remote list/read/write, filesystem changes, and terminal launch/focus.
- [x] Add a configurable workspace root and 1 KB–1 MB file limit per connection; accept only relative paths and enforce the root locally and after remote symlink resolution.
- [ ] Test against a disposable SSH server for password, agent/key, reconnect, and failed-host-key cases.
- [ ] Add browser tests for Monaco tabs, saves, reconnect UI, and AI context forwarding.
