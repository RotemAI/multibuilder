# Deployment — multibuilder

Runs from `/var/www/multibuilder` under **pm2** as `multibuilder`, served at
<https://hub.grabo.tools/multibuilder/>.

## Layout

| Piece | Value |
|---|---|
| Port | `127.0.0.1:8501` |
| URL prefix | `/multibuilder` (`TMUX_DASH_ROOT_PATH`) |
| Process manager | pm2, app name `multibuilder` |
| Config | `.env` (gitignored, mode 600) |
| Logs | `logs/multibuilder.{out,err}.log` |
| nginx | `/etc/nginx/sites-available/hub.grabo.tools` |

## Auth

The app handles its **own** auth — nginx does not gate it (no `auth_request`),
matching how this app was previously deployed at `/tmux`. Sign in with
`TMUX_DASH_USER` / `TMUX_DASH_PASS`, or via Google for the domains in
`TMUX_DASH_GOOGLE_DOMAINS` (`grabo.com`, `nemopowertools.com`).

Google sign-in needs an OAuth client before the button appears — set
`GOOGLE_OAUTH_CLIENT_ID` / `GOOGLE_OAUTH_CLIENT_SECRET` in `.env`, or drop
`~/.tmux-dashboard/google_oauth_client.json`. Authorized redirect URI:

    https://hub.grabo.tools/multibuilder/auth/google/callback

## Everyday commands

    pm2 restart multibuilder     # after editing app.py
    pm2 logs multibuilder        # tail logs
    pm2 stop multibuilder
    make ide                     # rebuild the Svelte IDE bundle first, if changed

pm2 runs **one** process in **fork** mode on purpose: `app.py` forks its own
lifecycle controller plus uvicorn workers, so pm2 cluster mode would duplicate
the controller and corrupt shared tmux/session state.

Boot persistence is via the `pm2-tofik` systemd unit (`pm2 startup`) plus
`pm2 save`. Re-run `pm2 save` after adding or removing an app.

## Dev

    .venv/bin/python -m pytest test_app.py test_api.py -q
    .venv/bin/ruff check app.py

## Runtime dependencies

Session creation shells out to **`codex`** and **`tmux`**, resolved via
`shutil.which()` — so both must be on the PATH of the process pm2 starts, not
just your interactive shell.

    codex --version    # needs >= 0.145.0 (TMUX_DASH_MIN_CODEX_VERSION)
    tmux -V

`codex` is installed globally as `@openai/codex` at `/usr/local/bin/codex`.
Do **not** rely on the copy bundled inside the VS Code ChatGPT extension
(`~/.vscode-server/extensions/openai.chatgpt-*/bin/`): that path is versioned,
changes on every extension update, and vanishes if the extension is removed.
Reinstall with:

    sudo npm install -g @openai/codex

## Known gaps

- The legacy `/tmux/` nginx route still proxies to :8501. Because this app now
  serves under the `/multibuilder` prefix, pages fetched via `/tmux/` render but
  their links point at `/multibuilder/*`. Replace that block with a redirect
  (`location /tmux/ { return 301 /multibuilder/$is_args$args; }`).
- `OPENAI_API_KEY` is unset, so LLM summaries are disabled.
- Startup logs an Advisor sync error (missing `~/.advisor-token`); that
  integration is optional and unrelated to serving the dashboard.
