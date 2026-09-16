# Validation

## Reproduction

The live access logs contained 16 HTTP 409 responses for history requests made before the first submitted prompt created the new session transcript. The response was the saved-history-unavailable error. A real Chromium reproduction also showed a routine detail redraw changing the reading position from 137 pixels to 24,096 pixels, the live tail.

Three new regression scenarios failed against the unchanged deployment: the unused-session API response, pending-history display, and unfrozen scroll retention. Existing focused baseline: 111 passed.

## Final checks

- Both Builder5 and build.grabo.tools run Codex CLI 0.153.4. The reference history parser and paging implementation match the pre-fix Builder5 deployment; its source hash was rechecked after deployment.

- Focused parser, API, paging, terminal rendering and reading controls: 124 passed.
- Full deployed-source suite: 1,578 passed, with two existing framework deprecation warnings. No real agent sessions launched by the added tests.
- Desktop Chromium at 1440 by 960 and mobile viewport at 390 by 844 loaded all 16 pages of a real saved conversation by scrolling. Both reached Beginning of session, with every history response HTTP 200 and no page errors.
- After deployment, the same detail redraw retained the exact 137-pixel reading position on both viewports.
- Browser API-boundary simulation of a new session displayed No earlier history yet, then loaded the first message on the next upward scroll. No retry click or real disposable agent was needed.
- Existing tmux session and pane IDs, pane PIDs, account records and ownership records matched the pre-test snapshot after cleanup.
- Both public health routes returned HTTP 200. Service remained active with no automatic restarts. Live hashes match the tested candidate.
- Focused security review found no introduced authentication, ownership, cursor, escaping, file access or secret-handling issues. The API response is private and non-cacheable. HSTS, nosniff, CSP and SAMEORIGIN headers are present. Existing nginx version disclosure is unchanged.
- Dependency freshness checked; dependencies were unchanged. This check is not a full CVE audit.
- QA browser contexts and processes were closed.

## Release

Applied 2026-09-16 to https://builder5.rotem.ai/ and restarted only agent-dashboard. Before hashes and rollback file copies are retained locally under the task directory .work/history-scroll/before. Existing browser pages need one reload to receive the updated JavaScript.
