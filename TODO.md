# TODO

Working notes for the `feat/ssh-ide-connector` branch. Two efforts are in
flight: breaking up `app.py`, and the SSH IDE / session-persistence work that
preceded it.

---

## 1. Break up `app.py`

**Progress: 29,333 → 13,035 lines (−56%).** All extractions are deployed and
green.

### Done

| Module | Lines | Contents |
|---|---:|---|
| `core/config.py` | 463 | Env-derived constants, paths, tunables |
| `core/users.py` | 309 | User store, request identity, impersonation |
| `core/tokens.py` | 62 | HMAC token + OAuth state signing |
| `core/validators.py` | 83 | Pure input predicates, path safety |
| `core/state.py` | 57 | Postgres-or-JSON backend selection |
| `core/io.py` | 37 | Atomic JSON write |
| `services/ssh.py` | 1,489 | Remote SSH IDE: profiles, vault, workspace ops |
| `services/browser.py` | 1,496 | Headless browser lifecycle, CDP, proxy, audit |
| `services/autonomous.py` | 1,181 | Away / Go Nuts modes |
| `services/watchdog.py` | 1,020 | Stall, crash, login, /tmp watchdogs |
| `services/tmux.py` | 980 | Pane capture, activity regexes, heuristics |
| `services/usage.py` | 974 | Token accounting, cost, prompt audit |
| `services/google_auth.py` | 417 | Google sign-in, connected-service OAuth |
| `services/stores.py` | 391 | Messages, notes, skills, memory |
| `services/codex_config.py` | 184 | config.toml merging, CLI readiness |
| `services/projects.py` | 573 | Public project serving, Codex alert log |
| `services/member_auth.py` | 630 | Member Codex isolation, advisor sync |
| `services/agent_config.py` | 520 | Global/group context, git rules, auto-push |
| `services/session_launch.py` | 493 | Agent launch commands, parking, restore |
| `services/terminal.py` | 225 | Shared terminal stream fan-out |
| `templates/dashboard.html` | 7,790 | Was the `HTML_PAGE` constant |
| `templates/login.html` | 51 | Was the `LOGIN_PAGE` constant |

### Remaining in `app.py` (13,035 lines)

- **171 route handlers — 5,089 lines**
- **213 helpers — 4,280 lines**

Routes are now the larger half, and every helper cluster with a clean seam has
been taken. What is left is the controller (see below) plus ~4,000 lines of
small one-offs that share no natural grouping — extracting those individually
would create modules with more injection boilerplate than code.

Helper clusters, with the count of app-level symbols each would need injected:

| Cluster | Defs | Lines | Deps | Notes |
|---|---:|---:|---:|---|
| controller/IPC | 8 | 221 | 2 | **Misleading count — see below** |

Every other cluster has been extracted. All modules landed with **0–9** deps.

#### Controller/IPC: attempted, reverted

The 7-dep count is misleading and I discarded the attempt. The dependency
scan counts only *functions* defined at module level; the controller's
dispatch also reads **24 undefined names** once isolated — browser leases and
runtime, away/go-nuts state and toggles, watchdog log and state, terminal
channels, session lifecycle, autopush mode.

That is the nature of the thing: it is a dispatcher that reaches into every
subsystem by design. Extracting it means injecting most of the app, which
buys nothing. Leave it in `app.py` unless the subsystems it calls are given
a common interface first.

### Routes — not started

The hard part. Handlers are thin wrappers over the shared helper layer:
`/api/sessions` alone (65 routes) references **82** helper functions. Moving
routes means moving or injecting most of what remains, so the helper clusters
above should land first.

Route groups: sessions 65, admin 26, browser 14, auth 12, my 7, connections 4,
skill-library 4, misc 39.

Note that `app.py` is now roughly half routes. Once the remaining viable helper
clusters land, what is left is close to a pure route layer, and the split
becomes a question of grouping handlers by URL prefix rather than untangling
dependencies.

### The pattern that works

Each extraction follows the same recipe. Deviating from it is what produced
every bug below.

1. **Pick by dependency count, not by size.** Compute the transitive closure
   with AST before moving anything.
2. **State moves with its owners.** Never split a mutable global from the
   functions that mutate it.
3. **Inject, don't import.** Anything reaching back into `app.py` is passed via
   `configure()`, which raises on an unknown name.
4. **Shared mutable objects are passed by reference** (`cache`,
   `_seen_claude_running`) — a copy diverges silently.
5. **Re-export every moved name from `app.py`** so existing imports and the
   test suite's patch points keep working.
6. **Forward attribute writes** — see below.
7. Full test run + deploy + live route check after each step.

### Attribute forwarding — do not narrow this

`app.py` installs a module `__setattr__` that forwards writes to the service
modules. It is deliberately **every** public name in each service, not a
hand-picked subset.

This exists because tests patch things on `app` (e.g.
`patch("app._away_send_and_wait")`). Post-extraction the service reads its own
globals, so an unforwarded patch rebinds a copy nothing consults. When that
happened to the autonomous phase functions, the patched stub was bypassed, the
real agent-wait ran, and **the suite hung** rather than failing — 274/319 tests
in, no error message.

`test_service_forwarding_covers_every_public_service_name` guards this.

### Bugs this refactor caused (all fixed, all now tested)

Kept as a record of what this kind of change actually breaks:

- **Cross-tenant access test failed 200-instead-of-404.** `services/ssh.py`
  imported `_current_user` directly, freezing the pre-patch function, so the
  per-connection ownership gate no longer honoured the test's identity patch.
  Production was never wrong, but the guard on a real access-control path had
  been silently defanged. → identity is injected.
- **`AUTH_SECRET` regenerated** when moved to `core/config.py`. It falls back to
  `secrets.token_hex(32)`; a second definition would have invalidated every
  signed cookie and logged out every user. → kept in `app.py`, passed in.
- **Four `Path(__file__)` constants** silently resolved to `core/static/ide`,
  `core/qa-output`, etc. → anchored to `REPO_ROOT`.
- **`app._load_users` patch stopped steering lookups**, so six tests read the
  real users file instead of fixtures. → resolved through the module attribute.
- **The hang described above.**
- **A source-scanning test broke twice.** Assertions that grep `app.py` for a
  rule string (`test_agent_context_forbids_local_only_work_product_handoffs`)
  fail as soon as the code holding that string moves. The scan now covers
  `app.py` + `templates/` + `services/` + `core/`. Expect this to recur with
  any test that reads source rather than behaviour.
- **A rebuilt module silently lost its `configure()`.** Splicing a new header
  onto `services/projects.py` dropped the function; the import succeeded and
  failed only at the wiring call. Re-check `configure` exists after editing a
  module header.

Caught by comparing values/behaviour before and after, not by reading code. Keep
doing that.

---

## 2. Database

- [x] Alembic installed, `alembic/env.py` reads `TMUX_DASH_DB_URL`;
      `alembic.ini` holds no password.
- [x] Baseline revision adopts pre-existing tables (`IF NOT EXISTS`); production
      **stamped**, not recreated.
- [x] Second revision applied live (`documents_updated_at_idx`), proving the
      thing the old startup DDL structurally could not do: alter a deployed
      table. Head is `983551d575be`.
- [x] `MIGRATIONS.md` documents the workflow.
- **Never edit `db_store.SCHEMA` again.** It is `CREATE TABLE IF NOT EXISTS`
  bootstrap only; a column added there never reaches an existing database.

---

## 3. Session persistence

- [x] `loginctl enable-linger tofik` — user processes no longer killed at
      logout. This was the actual cause of vanishing sessions: systemd tore
      down `user@1006.service` seconds after the last SSH session closed, and
      all 14 tmux panes died in the same second.
- [x] Killed a stale orphan app process (1 day old, PPID 1, on the JSON
      fallback while pm2's copy used Postgres).
- [x] `SessionLifecycleStore` moved onto the shared backend; session `cwd` now
      recorded at creation. Verified end to end: created → tmux server killed →
      restored into the identical directory.

### Open

- [ ] **Nothing auto-restores sessions.** The cwd is recorded and
      `_restore_parked_tmux_shell` works, but it is only reachable via
      `_resume_parked_session`, which requires `row["parked"]` — a flag set by
      the idle-timeout path. A session lost to a tmux server death is never
      marked parked, so nothing brings it back. Needs a startup reconciliation
      pass comparing lifecycle rows against live sessions.

      Two decisions needed first: relaunch the agent too, or just the shell in
      the right directory (20 agents on a 2 GB box is a lot); and restore
      everything or only recently-active sessions (there are old test sessions
      like `qa-smoke-test` in the owner table).
- [ ] Sessions created before this fix have no recorded cwd and cannot be
      restored regardless.

---

## 4. Source control panel

- [x] Commit history (`log`), per-commit patch view (`show`), rename handling,
      staged-and-modified files in both lists, empty-repo guard.
- [ ] GRAPH pane — commit-graph lane rendering. `log` already returns the data.
- [ ] History is capped at 100 commits with no paging.

---

## 5. Known issues

- [ ] **`sync_advisor_accounts` fails on every startup** —
      `RuntimeError: Advisor admin token is missing at ~/.advisor-token`.
      Pre-existing (first seen 2026-09-01 14:58, 27 occurrences); unrelated to
      any refactor work. The file simply does not exist.
- [ ] **Memory is tight** — ~1.35 GB of 1.96 GB used with 1.4 GB swapped.
      Worker count is pinned to 1 because 2 uvicorn workers silently never bind
      on this box. Relevant to any plan that starts more agents.
- [ ] Two baseline lint errors (`B007`, unused loop vars in
      `_parse_session_stats`) — pre-existing, now living in
      `services/usage.py:894`.
- [ ] `QuickOpen.svelte` and `Terminal.svelte` still use `--ide-*` CSS aliases
      rather than Tailwind.
- [ ] Idea, never confirmed: a "virtual directory" to speed up the agent's
      comprehension of a remote codebase.

---

## Conventions

- Deploy: `pm2 restart multibuilder` (fork mode, single instance). **`pm2
  restart` does not reload `.env`** — a changed env var needs
  `pm2 delete multibuilder && pm2 start ecosystem.config.js`.
- IDE frontend: `make ide` after editing `ide-ui/` (3–6 min). **Exit code 0 is
  not proof of success** — a nested-`<button>` error once produced a silent
  no-op build. Check that the bundle is newer than the sources and grep it for
  the new code.
- Tests: `.venv/bin/python -m pytest -q` — 628 passing.
- Lint: `.venv/bin/ruff check app.py core/ services/` — 2 baseline errors.
