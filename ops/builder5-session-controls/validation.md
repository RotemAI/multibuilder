# Validation, 2026-09-07

923 tests passed with two existing dependency deprecation warnings. The deployment patch was applied to a temporary copy of its baseline; all six resulting SHA-256 values match the deployed files.

Authenticated browser QA passed at 1440 x 1000 and 390 x 844:

- The green + opens an empty name form. A typed multiword name stays visible; an empty submission generates an eight-character name.
- Both newly created sessions open automatically. Reload and browser Back restore the intended session.
- Preferences saves and reloads the account naming toggle. Final setting is off.
- My last message steps through prior submitted prompts. Latest output resumes following.
- Saved uploads appear automatically and download through the authenticated file route. Credentials with punctuation and links render correctly using a browser-only fixture.
- The real account reports one weekly window. Its visible bar showed 73 percent used. An absent second window stays hidden.
- All six requested shortcuts are absent. Mobile has no horizontal overflow.
- Browser console and page-error lists were empty on the complete pass.
- Direct session close completed in 3.08 seconds and retained the uploaded project file. Sessions present before QA remained open. Disposable QA sessions, files, auth state and the headless browser were cleaned up.

An earlier browser pass timed out while opening Preferences. The subsequent complete pass verified the toggle, persistence and both viewports successfully. No source change was made on that observation alone.

Scoped security review found no high-severity issue in the change. Saved records are private mode-0600 JSON files outside published projects, separated by account and session generation. APIs recheck ownership after collection. Managed instructions, reasoning and tool output are excluded. No production dependency or metered model call was added. Existing dependency updates and the nginx version header remain outside this change.
