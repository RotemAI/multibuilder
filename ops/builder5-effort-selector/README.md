# Builder5 effort selector hotfix

Builder5 stopped showing reasoning effort choices in the New session dialog on 2026-09-15. The installed Codex CLI still returned complete model metadata, but an orphaned controller from the retired `/build` deployment rewrote the shared cache using an older schema that omitted `model_efforts`.

The exact retired controller was stopped and the cache was rebuilt from Codex 0.153.4. The application patch makes a cache with no usable effort metadata stale immediately and supplies the known model-specific seed values while the refresh runs. This keeps session creation usable and prevents the same cache shape from blanking the selector again.

## Deployment

The patch in `builder5-effort-selector.patch` applies to the live Builder5 runtime after the 2026-09-15 interface update. Verify the `before` hashes in `manifest.json`, apply the patch from the runtime root with `patch -p1`, verify the `after` hashes, then restart only `agent-dashboard`.

No database, dependency, environment, nginx, port, or DNS change is required. The service restart preserves managed tmux sessions.

## Recovery

If rollback is needed, verify the `after` hashes, apply the patch in reverse, and restart only `agent-dashboard`. The repaired model catalog can remain in place because the prior application accepts its additional field.
