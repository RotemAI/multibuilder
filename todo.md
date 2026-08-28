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
- [x] Pass a password only while establishing the connection; never persist it in profiles, logs, commands, or environment files.
- [x] Support existing keys from `~/.ssh` and SSH agent identities.
- [x] Do not support pasted private keys; use an SSH agent or an existing key under `~/.ssh` so browser-submitted private-key material is never accepted.
- [x] Add tests proving credential fields are absent from persisted profile data and API responses.

## Remote IDE UX

- [x] Add connection state in the header: connecting, connected, reconnect required, and error.
- [x] Show a link/button to focus the matching SSH tmux window.
- [x] Preserve tabs, active file, and last directory per session/connection in browser storage.
- [x] Add create, rename, move, and delete file/folder actions with confirmation dialogs; folders can only be deleted when empty.
- [x] Add a loaded-file filter, Ctrl/Cmd+P Quick Open, and a lazy recursive tree view.

## Developer tooling

- [x] Add a constrained terminal launcher that focuses the session-owned tmux SSH window and records credential-free audit events.
- [x] Add fixed-command Git status, diff, stage/unstage, commit, and branch switch/create controls over the session SSH bridge.
- [x] Add Monaco search/replace, go-to-line, and Ctrl/Cmd+Shift+P command-palette shortcuts.
- [ ] Evaluate remote language-server support and connect Monaco models where available.

## Security and verification

- [ ] Keep the connector admin-only until session-specific credential ownership and sharing rules exist.
- [x] Add private, credential-free audit events for connect/reconnect, remote list/read/write, filesystem changes, and terminal launch/focus.
- [x] Add a configurable workspace root and 1 KB–1 MB file limit per connection; accept only relative paths and enforce the root locally and after remote symlink resolution.
- [ ] Test against a disposable SSH server for password, agent/key, reconnect, and failed-host-key cases.
- [ ] Add browser tests for Monaco tabs, saves, reconnect UI, and AI context forwarding.
