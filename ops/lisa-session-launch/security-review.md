# Scoped review, 2026-09-07

No new high-severity finding in the changed paths. The deployed model recovery implementation matches the reviewed Builder5 version. Creation authenticates the caller and validates model/effort against that account's verified catalog before tmux creation. Choices are stored in the private lifecycle generation; model changes compare owner, generation and prior settings before writing.

Recovery remains subscription-only, uses structured completed-turn errors and the actual failed model, and checks the exact root and terminal identity. Policy, cyber, permission, sandbox, usage/budget and unknown failures do not trigger a swap. Drafts, active turns, unverified bindings and approval prompts prevent automatic input. Two automatic model switches are allowed per unsuccessful episode, with visible status and continuation confirmation. No provider, credential, approval or sandbox override is introduced.

This port additionally preserves explicit names in generation-bound metadata and adds session hash routes. Name validation and HTML escaping remain in place; generated routes use encodeURIComponent. Existing automatic names and other accounts' settings are preserved. Temporary authentication state and session/PID snapshots remain private and outside the patch bundle.

No dependency or infrastructure configuration changes are included. The target dependency inventory is checked separately; existing maintenance updates are outside this feature. The targeted Supervisor restart is preceded by checking that existing terminal and native Codex PIDs are outside its process group, and followed by comparing the same PIDs.

The destination dependency inventory reports existing updates for anyio, click, cryptography, FastAPI, Google Auth, OpenAI, Pydantic, ruff, setuptools, Starlette, uvicorn and websockets. None was changed by this deployment.
