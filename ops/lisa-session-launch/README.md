# codex.lisa.my session launch controls

The green plus now opens a New session dialog with a name, model, supported reasoning effort and Refuse automatic model fallback checkbox. Astra with Max is the default; Ultra must be chosen explicitly. Named sessions retain their chosen display name, an empty Create submission generates a random name, and creation opens the new session automatically. Session URLs preserve the selected session across reload and browser navigation.

Model, effort and fallback preference persist in the private lifecycle generation. Existing sessions and account-wide settings are preserved. The subscription-only recovery implementation is the reviewed Builder5 version from PR 7: after native retries and a completed service error, it can resume the same root with another verified model and show the switch. Effort is preserved or lowered, and at most two model switches are allowed per unsuccessful episode. Safety, cyber, permission, sandbox, usage/budget and unknown failures never trigger a swap. Drafts, live turns, approval prompts, stale model selections and changed session bindings prevent automatic terminal input.

## Deployment

Live at https://codex.lisa.my/. This patch is based on that host's own runtime, not a replacement copy of Builder5. It preserves Lisa-specific authentication, bug-report handoff, browsing, existing close behavior and session data. The target runtime is outside Git, so the review bundle contains the narrow source patch with exact before/after hashes.

Apply session-launch.patch with patch -p1 only after every existing file matches its before hash in manifest.json. A null before hash requires an absent file. Verify after hashes, then restart Supervisor's tmux-dashboard service. Reload browser pages. Reverse the patch only against matching after hashes to roll back. The optional launch_options metadata is ignored by older code; no destructive migration or infrastructure configuration change is required.

On lisa-codex, the guarded deployment and rollback copies are under /home/nimrod_rotem/tmux-dashboard/.work/session-launch-20260907-mlnmt3js. The deployment checks the host, source hashes, passed tests and Supervisor process group before touching the runtime, then verifies readiness and existing tmux/native Codex process IDs.

## Validation

The original runtime passed 906 tests. The final candidate passed 953 tests locally and on lisa-codex. The new regression suite was run against the old source and failed before the port. Coverage includes default/custom launch settings, opt-out persistence, supported efforts, exact-root recovery, refusal exclusions, stale generations and models, pending user input, retry limits, submission confirmation, stable manual names and session routes.

The initial remote test run exposed a test-runner setting: ROOT_PATH defaulted to /codex, while the deployed site uses /. Four existing bug-handoff tests could not reuse their path-scoped cookies. Setting the isolated runner to the deployed root mount resolved them without a production change. The final remote run passed 953 tests with one dependency deprecation warning.

Live browser QA and final deployment evidence are in validation.md. Credentials, real session history, PID snapshots and browser state are excluded from this bundle.
