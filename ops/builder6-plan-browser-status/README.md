# Builder6 plan authentication, browser MCP, and terminal status

A routine credential probe could replace a valid ChatGPT login with a stored API key even when API fallback was disabled. Builder6 now preserves the plan credential, reads real plan usage without forcing token rotation, and requires ChatGPT authentication for coding sessions. Settings show the account and plan and accurately describe the billing policy.

Playwright MCP now resolves an installed package or a pinned fallback. Its managed configuration allows a cold package start. The host has the pinned dependency installed; initialization and tool discovery succeed without launching a browser.

The terminal footer paints cache status and obtains elapsed time and generated token counts from the exact root rollout when terminal redraws omit them. Hot and cold cache states retain their existing colors. A guarded reconnect accepts an expected conversation generation, root, completed turn, model, and effort so changing authentication cannot restart another conversation or interrupt a new prompt.

## Deploy

Builder6 runs a newer non-git Codex runtime. Repository main is a separate Claude line. This bundle follows the existing operations-patch convention and must be applied to the recorded Builder6 runtime, not to repository main.

1. Verify every `before` SHA-256 in `manifest.json` against the runtime. A null hash requires an absent file.
2. Back up the affected runtime files and private configuration.
3. Pipe `materialize_patch.py` into `patch -p1` from the runtime directory, then verify every `after` hash.
4. Keep `TMUX_DASH_CODEX_API_FALLBACK_ENABLED=0`. Keep auxiliary API credentials separate from the Codex login.
5. Restore only a separately validated credential for this account and host. Do not copy refresh tokens across hosts or restore an unvalidated backup.
6. Set the admin Codex configuration to `forced_login_method = "chatgpt"` and the managed Playwright MCP startup timeout to 60 seconds.
7. Install `@playwright/mcp@0.0.82` in the existing browser dependency directory with browser downloads and package scripts disabled.
8. Restart only `agent-dashboard`. Its process-only kill policy preserves tmux sessions.
9. Verify account identity, plan windows, the footer, and browser MCP initialization. A Codex process already using API auth must finish its active turn and then resume its exact conversation under the plan-only launcher.

The template replaces existing dash punctuation with placeholders. The materializer restores original bytes only when applying the patch. No credential value is stored in this bundle.

## Validation

The full runtime suite passed 1,613 tests. Six failures reproduce on the unchanged baseline: three idle-notification markup checks, the idle hysteresis threshold, an old expectation that the header plan bars are hidden, and an idle-notification timing fixture. Focused tests cover the changed authentication, browser, account isolation, rollout metrics, and footer behavior. The reconnect fence is tested with process launches stubbed.

The deployed Python environment uses pytest 9.1.1. The source dependency pin and pre-existing member-browser output ownership issue are tracked in the separate security review; neither changes the verified administrator path.
