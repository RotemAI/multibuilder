# Builder5 session controls

Builder5 now asks for a session name, generates a random name only after an empty submission, and opens the new session immediately. Account preferences can enable content-based tab naming; it defaults to off. Typed multiword names retain their display text and use stable dash-separated session identifiers.

The terminal gains My last message, which steps backward through submitted messages, and Latest output, which resumes following. Plan usage appears in visible bars. The six requested shortcuts are removed. Session URLs support reload and browser Back/Forward.

Saved for this project now collects links, labelled credentials and files directly from the exact session conversation and uploads. Private structured records retain password punctuation, accumulate across refreshes, exclude managed instructions and tool output, and are scoped to account and session generation. No summarizer or metered model call is needed.

## Deployment

The live Builder5 tree is a non-git copy of the newer codex.lisa.my runtime. Repository main predates that runtime. This patch records the narrow deployed changes without importing unrelated upstream code. Apply it to the Builder5 runtime after the direct-close patch in PR #2. The manifest contains the expected SHA-256 before and after values for every changed file; stop if a live file differs.

Apply `session-controls.patch` from the runtime root with `patch -p1`, then restart the `agent-dashboard` systemd unit. No database migration or new production dependency is needed. Existing pages need a reload. The prior direct-close behavior and model catalog are preserved.

## Validation

923 tests passed, including account isolation, session generations, private-file permissions, incremental conversation collection, exact credentials, naming preferences, creation races, and message navigation. The deployment also receives authenticated desktop and mobile browser QA with disposable sessions. See `validation.md` for the recorded outcome.
