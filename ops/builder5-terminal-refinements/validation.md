# Validation, 2026-09-07

950 tests passed with two existing dependency deprecation warnings. Regression cases cover repeated names, ownership, lifecycle races, pending automatic labels, user-message preservation, background heredoc suppression, visible controls in both account modes and views, frozen snapshots and scroll restoration, browser indicator states, and direct-first proxy escalation. New regressions were observed failing before their fixes. Applying the patch to a temporary baseline reproduced all three deployed file hashes exactly.

Authenticated browser QA passed at 1440 x 1000 and 390 x 844:

- A real right-click opened Rename session. Three successive names saved, including literal angle brackets; reload preserved the latest label and the stable session route.
- All three reading controls were visible while Keys & Commands was collapsed.
- My last message highlighted the latest user prompt in a terminal fixture.
- Freeze held the text while output was appended, through normal rendering, forced rendering and a full detail redraw. Scroll position stayed at 137 pixels. Unfreezing displayed the buffered output.
- Clean view hid the background terminal command and JavaScript, preserving the user's prompt and the following assistant reply.
- The real browser status renderer showed red, green and flashing yellow for controlled disconnected, connected and active-lease responses. Real account status was restored afterward and showed green.
- Desktop and mobile screenshots were inspected. The mobile layout had no horizontal overflow, and the browser indicator and reading controls remained visible.
- Browser console and page-error lists were empty.

The terminal fixture was isolated from the disposable session's live stream. An earlier pass exposed an unnecessary stream restart on the first reading-button click; that behavior now has a regression test. The complete pass used the final deployed code.

Live proxy checks confirmed residential enablement without a direct-failure flag returns 400. Direct mode persisted through the authenticated API. The local relay's actual exit matched the VM's external IP. Explicit residential escalation was tested with isolated configuration only; there was no direct-route failure requiring live residential usage.

The two pre-existing sessions remained open. The disposable QA session, its test project, saved record, authentication state and isolated headless browser were removed. The dashboard service is active. No unrelated session or browser was stopped.

Scoped security review found no high-severity issue in the changed paths. Rename requests require authentication, exact ownership and a generation recheck under the session lock. Names are validated display metadata, with escaped rendering and no shell execution. Browser status is account-scoped. Proxy escalation is admin-only and returning to direct preserves other routes. No credential, private configuration, screenshot or debug artifact is included in the review bundle. No production dependency was added; existing dependency updates and the nginx version header remain outside this change.
