# Validation, 2026-09-07

1,029 tests passed with two existing dependency deprecation warnings. The baseline passed 988 tests. Initial missing-behavior regressions failed before the fixes; later regressions also reproduced an unconfirmed continuation being reported as submitted and an old model error overriding a new selection. Both now pass. The deployment patch reproduces all six final file hashes from the exact baseline, and the live files match those hashes.

Authenticated browser QA passed at 1440 x 1000 and 390 x 844. Clicking the green plus opened a blank name field, Astra, Max and an unchecked refusal checkbox. Creating the named session navigated directly into it, and the native Codex process received the explicit Astra and Max launch arguments.

Switching to GPT-5.5 constrained effort to its supported levels. A second session created with Luna, High and the refusal checkbox checked launched with those exact arguments. Reload preserved the route, effort and refusal setting. The first session remained on Astra/Max, and the existing account model and effort were unchanged. Recovery notices rendered visibly on mobile, with no horizontal overflow. Desktop and mobile screenshots were inspected. Browser console and page error lists were empty.

The first browser pass found a bug in the QA script's tmux pane target, after successfully checking the default form and navigation. The script was corrected to use an exact session-and-pane target and the complete pass was repeated successfully. Both disposable sessions and their generated project directories were removed. The task browser was closed, temporary authentication state removed, and both pre-existing tmux sessions remained open.

The local synthetic HTTP 503 probe used no metered API. Guarded recovery tests verify preserved thread and owner identity, opt-out, policy exclusions, no interruption of active turns or drafts, no duplicate submission, submission confirmation, and the bounded fallback chain. No outage was injected into an existing user session.
