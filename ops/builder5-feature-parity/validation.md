# Validation, 2026-09-14

The complete deployed suite passed: 1,564 tests, with two existing dependency deprecation warnings. Syntax checks passed for every production Python module and `voice-mode.js`. The patch was also applied to an isolated copy of the recorded baseline, then every output file was checked against its `after` SHA-256 value.

Regression coverage includes Chat as the default, the shared composer and status row, view-preserved drafts, concise expandable replies, durable progress, mobile session creation, project-saved URLs, terminal history, dictation, Voice Mode session ownership, spend accounting, API failure paths, cross-session behavior, model restart contention and frozen-terminal scroll retention. Feature and spend tests were first observed failing against the previous runtime.

Authenticated desktop and 390 x 844 mobile browser QA passed:

- The mobile new-session control opened the complete model and reasoning form.
- Chat loaded by default. A draft survived a Chat to Terminal switch byte for byte, then was cleared without submission.
- Terminal controls showed the saved project URL and reading actions.
- The live status row showed activity, elapsed time, cumulative tokens, context use and background terminal state.
- Voice Mode completed a real WebRTC connection to `gpt-live-1`, returned audible assistant output, exposed Mute and End, and ended cleanly.
- The mobile controls, composer, dictation and Voice Mode fit without overlap or horizontal overflow.
- Browser console and page-error lists remained empty.

Real authenticated OpenAI responses passed on `gpt-4o-mini` and `gpt-5.6-terra`. Model retrieval passed for `gpt-live-1` and `whisper-1`. The spend ledger recorded four calls and USD 0.0186, with USD 99.9814 remaining and no degraded state.

Both health routes return 200. The service is active with zero restarts, port 8505 is loopback-only, startup logs show the provider configured, and no application traceback or provider failure appeared after the final restart. All three tmux sessions that existed before deployment remained open. The isolated QA browser was closed and the owner's three existing browser tabs were untouched.
