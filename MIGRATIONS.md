# Database migrations

Schema for the dashboard's PostgreSQL state is managed by **Alembic**.
Revisions live in `alembic/versions/` and are applied in a single linear chain.

## Running

Alembic reads `TMUX_DASH_DB_URL` (the same variable the app uses), so load the
environment first — `alembic.ini` deliberately contains no URL, and therefore no
password:

```bash
export $(grep TMUX_DASH_DB_URL .env | xargs)
.venv/bin/alembic upgrade head      # apply everything outstanding
.venv/bin/alembic current           # what this database is stamped at
.venv/bin/alembic history           # the chain
```

## Adding a change

```bash
.venv/bin/alembic revision -m "short description"
```

Then edit the generated file's `upgrade()` / `downgrade()`. There are no ORM
models — the app uses psycopg directly — so `--autogenerate` has nothing to
diff and revisions are written by hand.

Test against a scratch schema before touching real data:

```bash
psql "$TMUX_DASH_DB_URL" -c "DROP SCHEMA IF EXISTS mtest CASCADE; CREATE SCHEMA mtest;"
TMUX_DASH_DB_URL="${TMUX_DASH_DB_URL}?options=-csearch_path%3Dmtest" \
  .venv/bin/alembic upgrade head
```

## Adopting a database that predates migrations

If the tables already exist but there is no `alembic_version` table, stamp the
baseline instead of running it — this records the revision without re-running
DDL against live data:

```bash
.venv/bin/alembic stamp 8aeaf543cc63
.venv/bin/alembic upgrade head
```

## Why the DDL in `db_store.py` still exists

`db_store.SCHEMA` is the bootstrap for a database that has never had migrations
run against it, so a fresh dev host still starts. It is identical to the baseline
revision.

**Never change the schema there.** It runs `CREATE TABLE IF NOT EXISTS`, so an
added column silently never reaches a database whose tables already exist —
which is precisely the failure Alembic was introduced to prevent. Every schema
change is a new revision.

The app logs its revision at startup and warns when a database carries no stamp.
