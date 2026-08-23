# MultiBuilder

MultiBuilder is a durable, multi-provider autonomous coding control plane. A user supplies a software goal and a Git repository. A Director plans the work, workstream leads decompose it, isolated workers implement it, independent agents review it, and a controlled integration pipeline validates each merge.

The production UI is served at [multibuilder.grabo.tools](https://multibuilder.grabo.tools).

## Architecture

```text
Human
  -> Director
    -> Workstream leads
      -> Scheduler-controlled worker pools
        -> Independent review and repair
          -> Validation and merge queue
            -> Integrated preview
```

PostgreSQL is the source of truth for projects, milestones, tasks, dependencies, runs, heartbeats, events, workspaces, validations, provider health, and merge state. The scheduler is the only component allowed to launch workers. Agents can propose structured child tasks, but cannot launch them directly.

Each writing task receives its own Git branch and worktree with an explicit write scope. Workers return changed files, commands, tests, remaining issues, and proposed follow-up tasks in a compact structured result. After scope validation, the scheduler alone stages those files and creates the task commit, then records that commit in the durable result. Full child conversations are not copied into parent prompts.

## Provider backends

| Backend | Authentication | Intended work |
|---|---|---|
| Codex CLI | Logged-in ChatGPT plan session | Directing, architecture, difficult debugging, integration, critical review |
| Muse CLI | Logged-in Meta session | Exploration, mechanical coding, tests, documentation, review |
| OpenAI Responses API | `OPENAI_API_KEY` | Structured remote reasoning when a valid key and model are configured |
| Grok CLI | Logged-in xAI session | Reasoning, implementation, tests, and independent review |

Unavailable or rate-limited providers are excluded automatically. Routing scores capability fit, model strength, available concurrency, latency, relative cost, and recent success rate. Preferred capabilities and providers are soft preferences, so an unfamiliar capability label cannot deadlock the task graph.

## Reliability and safety

- Durable task DAG and append-only event stream
- Transactional provider capacity claims
- Heartbeat, no-progress, timeout, crash, rate-limit, and resource-pressure detection
- Bounded retries with provider changes and lead escalation
- Restart reconciliation using exact process identity, not broad process matching
- Dedicated branches and worktrees with write-scope enforcement
- Scheduler-owned staging and task commits, with repository hooks disabled
- Independent review and bounded repair tasks
- Sequential integration branch merge queue
- Build, typecheck, lint, unit, integration, and security validation stages
- HttpOnly, Secure, SameSite authentication cookie
- Login throttling, strict CSP, HSTS, and no-store API responses
- Git source host allowlist and credential-free repository URLs
- Private prompt and schema artifacts with secret redaction

MultiBuilder never treats tmux as scheduler state. tmux can be used only as an operator inspection layer.

The initial deployment is a single-operator system for repositories that operator trusts. Worktrees, write-scope checks, minimal child environments, the Codex workspace sandbox, and Muse's process sandbox reduce blast radius, but they are not a hard multi-tenant boundary against a deliberately hostile repository. Do not admit untrusted repository owners until every provider backend runs behind a dedicated credential broker and container policy.

## Development

Python 3.11 or newer is required.

```bash
python3 -m venv .venv
.venv/bin/pip install -r requirements-multibuilder.txt
.venv/bin/python -m pytest tests_multibuilder -q
.venv/bin/python -m ruff check multibuilder tests_multibuilder
node --check multibuilder/static/app.js
```

The application fails closed when required production settings are absent.

```bash
export MULTIBUILDER_DATABASE_URL='postgresql+asyncpg:///multibuilder?host=/var/run/postgresql'
export MULTIBUILDER_ADMIN_TOKEN='replace-with-a-random-operator-token'
export MULTIBUILDER_COOKIE_SECRET='replace-with-a-separate-random-secret'
export MULTIBUILDER_PUBLIC_URL='https://multibuilder.grabo.tools'
export MULTIBUILDER_STATE_ROOT='/srv/multibuilder/state'
export MULTIBUILDER_GIT_ALLOWED_HOSTS='github.com'

uvicorn multibuilder.main:app \
  --host 127.0.0.1 \
  --port 8510 \
  --no-server-header
```

Important optional settings:

| Variable | Default | Purpose |
|---|---:|---|
| `MULTIBUILDER_GLOBAL_PARALLELISM` | `8` | Global active worker ceiling |
| `MULTIBUILDER_SCHEDULER_INTERVAL` | `1` | Scheduler loop interval in seconds |
| `MULTIBUILDER_CODEX_CONCURRENCY` | `4` | Codex worker ceiling |
| `MULTIBUILDER_MUSE_CONCURRENCY` | `6` | Muse worker ceiling |
| `MULTIBUILDER_MUSE_XDG_CONFIG_HOME` | unset | Absolute, provider-isolated Muse config root |
| `MULTIBUILDER_MUSE_XDG_DATA_HOME` | unset | Absolute, provider-isolated Muse session-data root |
| `MULTIBUILDER_GROK_CONCURRENCY` | `4` | Grok worker ceiling |
| `MULTIBUILDER_OPENAI_CONCURRENCY` | `8` | OpenAI worker ceiling |
| `MULTIBUILDER_CODEX_REASONING` | unset | Codex reasoning effort |
| `MULTIBUILDER_MUSE_REASONING` | unset | Muse reasoning effort |
| `MULTIBUILDER_GIT_ALLOWED_HOSTS` | `github.com` | Comma-separated exact Git host allowlist |

Provider-specific `*_ENABLED`, `*_BINARY`, `*_MODEL`, and `*_REASONING` variables are defined in `multibuilder/settings.py`. A backend can remain enabled in configuration while its live probe marks it unavailable.

## HTTP API

`GET /api/health` is public and reports database and scheduler health. All project, task, event, agent, integration, and capacity data requires either the operator bearer token or the signed browser session cookie.

Core routes:

- `POST /api/auth/login`
- `POST /api/auth/logout`
- `POST /api/projects`
- `GET /api/projects`
- `GET /api/projects/{project_id}`
- `GET /api/projects/{project_id}/events`
- `GET /api/projects/{project_id}/events/stream`

The event stream supports `Last-Event-ID`, cursor replay, keepalives, and reconnect without relying on in-memory message state.

## Project contract

A new project requires a name, goal, repository URL, base branch, acceptance criteria, and a maximum parallelism limit. The initial Director task must produce an acyclic task DAG with explicit dependencies, scopes, acceptance criteria, provider preferences, timeouts, retry limits, and milestones.

A project is complete only when its integrated acceptance criteria and validation gates pass. A green worker test by itself is not completion.
