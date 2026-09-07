# Builder5 CPU display recovery

A temporary failed stats request previously replaced a valid CPU percentage with a dash. The header now keeps the last reading explicitly marked stale, including its sample time in the tooltip, and retries automatically. Initial missing data is labelled unavailable. Only finite measurements between 0 and 100 are displayed, and a real 0% remains valid.

Requests time out after eight seconds. Only one request can run at a time; retries back off from five seconds to a maximum of thirty seconds and skip hidden tabs. Success resets the backoff and removes the stale label. Existing CPU and RAM bar changes are preserved.

Builder5 serves a newer non-git runtime than repository main. This narrow patch is for the live runtime, not the old root app.py in this repository. Compare the live app.py SHA-256 against manifest.json before applying cpu-display.patch with patch -p1. Stop on a mismatch and reconcile any concurrent edits. Verify the after hash, then restart only agent-dashboard.service. The unit uses KillMode=process and preserves existing tmux and Codex sessions. Reload the page to load the new client code.

Rollback: verify the after hash, reverse this patch and restart the same service. No dependency, database, credential, model or version change is required.

Validation: test_cpu_status.py runs the actual embedded JavaScript with controlled network and timers. Run it beside the deployed app.py. Existing stats API, CPU sampler and status toolbar tests are also exercised in an isolated account directory. Browser QA verifies a numeric reading, a simulated failed response, the stale label, automatic recovery and mobile visibility.

Verified live on 2026-09-07: 11 CPU regression tests pass, plus eight existing stats API, CPU sampling and toolbar checks. Browser QA passed numeric CPU, a simulated outage, visible stale text fitting the header, automatic recovery, mobile Status & usage access and zero page errors. Both original tmux pane PIDs and native Codex PIDs were unchanged after deployment. Health liveness and readiness returned OK. The patch applies cleanly to its recorded before snapshot and matches all after hashes.
