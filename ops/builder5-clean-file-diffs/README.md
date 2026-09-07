# Builder5 clean view: wrapped file diffs

Clean view leaked an Added file preview when the long filename wrapped onto a second terminal row and the numbered diff started with `1 +# Validation`. The filter required whitespace after the diff sign, so it did not recognize that row as evidence for the wrapped tool header. A one-line correction recognizes the sign regardless of the first content character and hides the entire file-change block.

Regression tests cover the reported Markdown patch, compact added and removed source lines, wrapped filenames and statistics, user-pasted patches, fenced examples and raw view. Conversation boundaries and HTML escaping are unchanged.

## Deployment

This is the narrow patch deployed at https://builder5.rotem.ai/. The live runtime is newer than repository main and includes previous Builder5 deployments plus subsequent navigation and saved-item changes. Apply only to a runtime matching every before hash in `manifest.json`; null means the file must be absent. Apply `clean-file-diffs.patch` with `patch -p1`, verify after hashes, and restart `agent-dashboard`. Existing browser pages need a reload. No migration, dependency, account preference or infrastructure configuration changes are needed.

To roll back, verify the after hashes, reverse the patch and restart the same service. The bundle contains no real terminal history, browser auth state or credentials.

## Validation

The exact 61-line file-change block captured from the reported session leaked before the fix and is fully hidden afterward. The following assistant reply and user message remain visible. 13 new cases failed before the fix. All 79 clean-view and terminal-rendering tests pass, including 24 new cases.

The full suite changed from 948 passed and two existing failures to 972 passed and the same two failures. Both pre-existing failures concern a separate live change that moved reading controls inside the collapsed drawer; this patch leaves that layout untouched. Later concurrent CPU-indicator edits were preserved, and the 79 focused tests passed again against the final source before deployment.

The patch was applied to a temporary baseline and reproduced both deployed hashes. Scoped security review found no new issue: there is no new endpoint, HTML interpolation, external request or file access. Dependency manifests and security headers are unchanged from the same-day reviewed deployment.

Authenticated browser QA passed against the real session's history and the complete captured block. The original tool header was absent from non-user content. Raw view restored the patch; clean view hid it again while retaining the following conversation. Desktop and mobile screenshots were inspected, with no horizontal overflow or browser errors. Both existing sessions remained open, and the isolated browser and temporary authentication state were removed.

Initial browser attempts coincided with dashboard restarts and received 502 responses. The complete pass ran after the service was ready. A separate CPU-indicator CSS update landed after deployment; the clean-view correction remained intact and was verified in the running page.
