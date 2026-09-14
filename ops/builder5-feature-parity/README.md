# Builder5 feature parity with codex.lisa.my

Builder5 now runs the codex.lisa.my dashboard feature set from source commit `5596ad953d5e242f6474ee471526b10732bdd670`, while preserving Builder5 account isolation, direct browser routing and frozen-terminal reading position.

The deployed interface opens in Chat, gives Chat and Terminal one composer and live status row, adds concise assistant cards with expandable detail and durable progress, exposes the new-session action on mobile, retains drafts between views, and adds dictation plus Voice Mode. Project-saved URLs, terminal history, unified controls, current model choices and the model-restart contention fix are included.

Voice Mode uses `gpt-live-1`, with `gpt-5.6-terra` for the backend action path. Summary and transcription routes use `gpt-4o-mini` and `whisper-1`. All metered calls are checked and recorded under the fail-closed `builder5-codex-dashboard` ledger with a USD 100 UTC-day cap. A voice session requires USD 5 of available capacity before connecting. Normal Codex launches keep API fallback disabled and strip the API key, so coding remains on the owner's ChatGPT Pro subscription.

## Deployment

Builder5 is a newer non-git runtime than repository main. This bundle records the exact deployed transition. Check the live runtime against every `before` hash in `manifest.json`, treating null as a required absent file. From the runtime root, pipe `/path/to/ops/builder5-feature-parity/materialize_patch.py` to `patch -p1`, verify all `after` hashes, and restart only `agent-dashboard`. No database migration or production dependency update is required.

The private runtime environment must retain its existing account, cookie and browser settings, then add the advisor credential `openai-realtime-2026-08-10` as `OPENAI_API_KEY` and these nonsecret values:

```text
TMUX_DASH_LLM_SPEND_APP=builder5-codex-dashboard
LLM_SPEND_DIR=/var/lib/llm-spend
TMUX_DASH_VOICE_MODEL=gpt-live-1
TMUX_DASH_VOICE_BACKEND_MODEL=gpt-5.6-terra
TMUX_DASH_VOICE_BACKEND_MAX_OUTPUT_TOKENS=4096
TMUX_DASH_VOICE_SESSION_RESERVE_USD=5.0
TMUX_DASH_SUMMARY_MODEL=gpt-4o-mini
TMUX_DASH_TRANSCRIPTION_MODEL=whisper-1
TMUX_DASH_CODEX_API_FALLBACK_ENABLED=0
```

Keep the environment file mode 0600. The fleet `llm_spend_guard` installation and writable `/var/lib/llm-spend` ledger are required. Install the existing runtime pytest gate at `/usr/local/libexec/tmux-dashboard-python-hooks/tmux_dashboard_pytest_gate.py` as root-owned mode 0444 so an ordinary test run cannot launch a real agent.

The patch template replaces punctuation that appears only in removed baseline lines with ASCII placeholders, keeping human-facing repository text free of that punctuation. `materialize_patch.py` restores the exact original bytes only while piping the patch to the local patch process.

The application now emits the microphone permissions policy and `media-src 'self' blob:` CSP required by Voice Mode. To roll back, verify the `after` hashes, pipe `materialize_patch.py` to `patch -R -p1`, restore the private environment backup, and restart the same service. See `validation.md` and `security-review.md` for release evidence.
