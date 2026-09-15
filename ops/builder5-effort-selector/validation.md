# Validation

The regression test first failed against the deployed loader because a catalog containing models but no `model_efforts` was accepted as fresh. It passed after the loader began seeding known effort metadata and setting the refresh timestamp to zero.

Results on the production host after deployment:

- Focused model catalog, launch option, and New session UI tests: 62 passed.
- Full application suite: 1,565 passed with two existing deprecation warnings.
- Authenticated model API: five visible models, each with a nonempty effort list.
- Authenticated New session DOM: Astra showed low, medium, high, xhigh, max, and ultra; max was selected.
- Launch validation accepted Astra with max effort without starting a test agent.
- Service health: active, zero restarts, HTTP 200.
- Both preexisting tmux sessions remained present across the service restart.
- The retired `/build` controller was absent after cleanup and only the current controller owned the IPC socket.

## Security review

No new endpoint, user input path, subprocess call, credential, or dependency was added. The changed loader copies only predeclared effort constants for model identifiers already validated against the saved catalog.

Severity: MEDIUM

Category: Development dependency

Finding: `pip-audit` reports PYSEC-2026-1845 in pytest 8.4.2. It affects temporary directory handling on shared Unix hosts and is fixed in pytest 9.0.3. This predates the hotfix and pytest is not imported by the running dashboard.

Recommendation: upgrade pytest separately with its own compatibility run.

Severity: LOW

Category: Repository hygiene

Finding: `.gitignore` covers `.env` files but lacks generic patterns for PEM files, key files, and credential files. The hotfix contains no secret material.

Recommendation: add the generic ignore patterns in a separate repository hygiene change.

Severity: LOW

Category: HTTP headers

Finding: HSTS, CSP, frame protection, MIME sniffing protection, and restrictive permissions policy are present. The public response exposes the nginx version in the Server header.

Recommendation: disable nginx version tokens in a separate shared configuration review.
