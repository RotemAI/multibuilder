# Builder5 session launch choices

The New session dialog now asks for model and reasoning effort before launching Codex. Astra with Max is the default; Ultra is selected only explicitly. Changing the model limits the effort dropdown to that account's supported levels, and failed creation preserves the form choices. Named creation, empty-name random generation and automatic navigation into the new session continue to work.

Each new session saves its model, effort and Refuse automatic model fallback checkbox in its private lifecycle generation. Recovery and subsequent model changes use those choices without overwriting another session's settings or the account model. Existing sessions retain legacy settings and are not enrolled in automatic model switching.

Unchecked enables recovery from completed operational failures on subscription sessions. Codex finishes its native retry sequence first; the dashboard then waits at least 20 seconds and may switch to another verified account model, preserving or reducing effort and resuming the same conversation. The configurable preference order is Sol, Terra, Luna. It attempts at most two switches per unsuccessful episode, displays a recovery notice and confirms continuation submission. A successful turn resets the outage counter. It does not add a metered provider or credential fallback.

Safety and cyber policy decisions, authorization failures, usage and budget limits, sandbox errors and unknown failures never trigger a swap. The opt-out checkbox disables dashboard model substitutions. The recovery path additionally checks the error's current model, exact root, owner, generation and immutable tmux binding. A draft, newer turn, approval prompt, closing session or unverified state prevents terminal input. It never sends an interrupt to force recovery.

## Deployment and rollback

This is the narrow deployment at https://builder5.rotem.ai/. The runtime copied from codex.lisa.my is newer than repository main. Apply only to files matching the before hashes in manifest.json; a null hash requires an absent file. Apply session-launch-options.patch with patch -p1, verify all after hashes, then restart the existing agent-dashboard systemd service. Reload existing browser pages.

Reverse the patch only when the after hashes match, then restart the same service. The optional launch_options object remains inside the existing lifecycle JSON and is ignored by older code; there is no destructive migration. Infrastructure configuration, routes and dependencies do not change.

The deployment defaults can be configured with TMUX_DASH_NEW_SESSION_MODEL and TMUX_DASH_NEW_SESSION_EFFORT. TMUX_DASH_FALLBACK_MODELS is a comma-separated preference order, filtered against the authenticated account's verified catalog. No provider access or safety setting is changed by these options.

## Validation

The baseline passed 988 tests. New regression cases were observed failing before their implementation, including submission confirmation and rejecting failures from a previously selected model. Coverage includes lifecycle persistence, owner and generation races, default and custom form values, failed-create form retention, model-specific efforts, opt-out, service-error classification, exact-thread recovery, duplicate prevention, active-turn and draft guards, and the two-switch limit.

A local HTTP 503 fixture reproduced Codex 0.153.4's persisted task_complete error shape without a metered model call. Recovery integration tests exercise restart and continuation using isolated lifecycle state and synthetic terminal events. Live browser QA verifies the creation flow and actual Codex launch arguments; it does not inject outages into user sessions.

Final test and browser results are recorded in validation.md. The review bundle excludes real conversations, account credentials, browser authentication state and scratch probe files.
