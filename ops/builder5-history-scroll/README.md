# Builder5 history scrolling

A newly opened Codex session has no rollout until the first submitted prompt. Builder5 returned HTTP 409 for this normal state, displaying a persistent retry button. It now returns a non-cacheable pending result only when the current owner and unused session generation are verified. The next upward scroll can load the conversation once it exists. Missing established histories and stale cursors remain conflicts.

Status redraws also reset the terminal reading position unless the user had frozen the output. The renderer now preserves the position of any user reading older output and continues following the tail for users already at the bottom.

The live GRABO reference has the same history backend and paging code, so no newer history implementation was available to copy. Builder5 host-specific authentication, model catalog, account isolation and spending controls remain intact.

## Deployment

This patch targets the deployed Builder5 snapshot recorded in manifest.json. The public repository main branch is an older sanitized code line, so deploy this focused patch against the verified live snapshot, not the repository app.py. Apply from the live application directory after checking all before hashes, run the dashboard suite, then restart only agent-dashboard. Keep a recoverable backup of the four files. Existing tmux sessions must survive.
