# Scoped security review, 2026-09-14

No high or medium severity issue was found in the deployed parity paths. `pip-audit` reported no known vulnerability in `requirements.txt`, and `pip check` reported a consistent environment.

Authentication and ownership checks cover new session, transcript, saved-project, voice and control routes. Voice session state is owner-scoped. User text is escaped before HTML rendering, file targets remain validated, and request bodies have explicit size and type limits. Dictation rejects audio above 25 MB. No new SQL path or shell interpolation was added.

All metered model calls pass through a fail-closed USD 100 UTC-day guard. A ledger or guard failure blocks the call. Voice reserves USD 5 before session creation, then records provider usage or a conservative elapsed-time fallback. Nested backend usage is recorded once. Normal Codex child processes receive no API key and retain ChatGPT subscription authentication.

The public route emits HSTS, nosniff, same-origin framing, strict referrer policy, a microphone self policy and a CSP that permits same-origin blob audio. The single-file interface still needs CSP `unsafe-inline`; that inherited design is a low residual risk. The public nginx header exposes version 1.22.1, also inherited and outside this application patch.

Secret-pattern review found no credentials, cookies, private configuration, screenshots or debug artifacts in this bundle. The private `.env` is excluded. Documentation names the advisor credential record, never its value.
