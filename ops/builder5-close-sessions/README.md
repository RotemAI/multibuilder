# Builder5 session closing

Closing a Builder5 session was gated on an unavailable technical handoff service. The deployed patch sends the existing authenticated DELETE route to the controller's direct session-delete operation. It removes the handoff progress/polling flow, keeps one short confirmation, and dismisses the dialog after the server confirms the exact session was closed.

Saved conversations and project files stay on disk. Existing owner checks, session generation checks, server/session locks, and scoped process cleanup remain in place. Busy sessions no longer wait for an idle agent, an LLM summary, or a technical-spec write.

## Runtime source

Builder5 runs the September 6 codex.lisa.my build from `/home/nimrod_rotem/multibuilder`. That deployed source is newer than this repository's main branch and is not a Git checkout. This narrow runtime patch records only this fix and its tests, without importing unrelated dashboard changes.

Base app SHA-256: `15382e520a287c6edd9f0373046b1f0118ae6d6e1bbd33ed8987351eb4851b43`.

For that runtime, review and dry-run before applying:

```sh
cd /home/nimrod_rotem/multibuilder
patch --dry-run -p1 < /path/to/close-without-handoff.patch
patch -p1 < /path/to/close-without-handoff.patch
sudo systemctl restart agent-dashboard
```

The service restart preserves managed tmux sessions. Reload an existing browser tab to load the updated close dialog.

## Validation

The regression suite covers direct controller dispatch with the handoff service unavailable, successful cleanup, errors and lost responses, preserving local session state on an unconfirmed close, and a late response arriving after another dialog opens. All 906 runtime tests passed in 103 seconds. Tests ran with an isolated temporary account directory and the local controller role so inherited production settings could not affect them.
