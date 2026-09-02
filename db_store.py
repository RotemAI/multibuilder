"""PostgreSQL-backed shared state for team deployments.

The dashboard's state has lived in `~/.tmux-dashboard/*.json` behind
`LockedJsonStore`, which is genuinely safe for concurrent writers (flock +
atomic replace). What it cannot do is scale: every write rewrites the WHOLE
file, so a growing chat transcript rewrites every message on each new one, and
nothing is shared beyond this one host.

This module moves that state into PostgreSQL while keeping the exact
`read()` / `update(mutate)` contract, so callers do not change shape.

Design notes:

* **Same interface as LockedJsonStore.** `PgJsonStore` stores one JSON document
  per logical file, so migrating a store is a one-line swap at the factory. The
  interesting win is `messages`, which additionally gets a real per-row table.
* **Row-level locking, not file locking.** `update()` runs
  `SELECT ... FOR UPDATE` inside a transaction, so two workers mutating the same
  document serialise on that row rather than on a global lock file.
* **Falls back to JSON.** If the database is unreachable the caller keeps the
  file-backed store. A dashboard that cannot start because Postgres is down
  would be a worse outcome than one running on local files.
"""

from __future__ import annotations

import json
import logging
import os
import threading
from collections.abc import Callable
from pathlib import Path
from typing import Any

logger = logging.getLogger("codex-dashboard")

try:  # psycopg is optional: without it the app stays on the JSON stores.
    import psycopg
    from psycopg.rows import dict_row
    from psycopg_pool import ConnectionPool
except Exception:  # noqa: BLE001 - any import failure means "no database"
    psycopg = None
    ConnectionPool = None
    dict_row = None


DB_URL = os.environ.get("TMUX_DASH_DB_URL", "").strip()

_pool = None
_pool_lock = threading.Lock()
_schema_ready = False

# Schema is owned by Alembic (alembic/versions/), not by this module.
#
# This DDL is retained ONLY as the bootstrap for a database that has never had
# migrations run against it, so a fresh dev host still starts. It is applied
# once at pool creation and is deliberately identical to the baseline revision.
# Any CHANGE to the schema must be a new Alembic revision: adding a column here
# would silently never reach a database whose tables already exist.
SCHEMA = """
CREATE TABLE IF NOT EXISTS documents (
    name        TEXT PRIMARY KEY,
    data        JSONB NOT NULL DEFAULT '{}'::jsonb,
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Chat lives in real rows, not one JSON blob. This is the table that made a
-- database worth adding: appending a message must not rewrite the transcript.
CREATE TABLE IF NOT EXISTS messages (
    id           BIGSERIAL PRIMARY KEY,
    session_name TEXT        NOT NULL,
    role         TEXT        NOT NULL,
    text         TEXT        NOT NULL DEFAULT '',
    full_text    TEXT        NOT NULL DEFAULT '',
    links        JSONB       NOT NULL DEFAULT '[]'::jsonb,
    ts           DOUBLE PRECISION NOT NULL,
    created_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Reads are always "the last N for one session", so index that directly.
CREATE INDEX IF NOT EXISTS messages_session_ts_idx
    ON messages (session_name, ts);
"""


def enabled() -> bool:
    """Is a database configured and importable?"""
    return bool(DB_URL) and psycopg is not None and ConnectionPool is not None


def pool():
    """Lazily open a small connection pool.

    Kept small on purpose: this host is memory-constrained and the dashboard
    runs a single uvicorn worker, so a large pool would waste RAM that the
    agents need.
    """
    global _pool, _schema_ready
    if not enabled():
        return None
    with _pool_lock:
        if _pool is None:
            _pool = ConnectionPool(
                DB_URL,
                min_size=1,
                max_size=int(os.environ.get("TMUX_DASH_DB_POOL", "4")),
                timeout=10,
                kwargs={"row_factory": dict_row},
            )
        if not _schema_ready:
            with _pool.connection() as conn:
                conn.execute(SCHEMA)
            _schema_ready = True
    return _pool


def schema_version() -> str:
    """The Alembic revision this database is stamped at, or '' if untracked.

    Used to warn on startup when the deployment is running against a schema
    that migrations have not been applied to -- a mismatch otherwise surfaces
    as a confusing runtime error rather than a clear operational one.
    """
    try:
        p = pool()
        if p is None:
            return ""
        with p.connection() as conn:
            row = conn.execute(
                "SELECT version_num FROM alembic_version LIMIT 1"
            ).fetchone()
        return str(row["version_num"]) if row else ""
    except Exception:  # noqa: BLE001 - an untracked database is not an error
        return ""


def healthy() -> bool:
    """True when a trivial query succeeds; used to decide the fallback."""
    try:
        p = pool()
        if p is None:
            return False
        with p.connection() as conn:
            conn.execute("SELECT 1")
        return True
    except Exception:  # noqa: BLE001 - any failure means "use the JSON store"
        logger.warning("Database unavailable; falling back to file state", exc_info=True)
        return False


class PgJsonStore:
    """One JSON document in Postgres, with LockedJsonStore's interface.

    `update()` takes a row lock for the duration of the mutation, so two workers
    changing the same document cannot interleave and lose a write.
    """

    def __init__(self, name: str, default_factory: Callable[[], dict[str, Any]]):
        self.name = name
        self.default_factory = default_factory

    def read(self) -> dict[str, Any]:
        p = pool()
        if p is None:
            return self.default_factory()
        with p.connection() as conn:
            row = conn.execute(
                "SELECT data FROM documents WHERE name = %s", (self.name,)
            ).fetchone()
        if not row:
            return self.default_factory()
        value = row["data"]
        return value if isinstance(value, dict) else self.default_factory()

    def update(self, mutate: Callable[[dict[str, Any]], Any]) -> tuple[dict[str, Any], Any]:
        p = pool()
        if p is None:
            value = self.default_factory()
            return value, mutate(value)
        with p.connection() as conn:
            with conn.transaction():
                # Materialise the row first so FOR UPDATE has something to lock.
                conn.execute(
                    "INSERT INTO documents (name, data) VALUES (%s, %s::jsonb) "
                    "ON CONFLICT (name) DO NOTHING",
                    (self.name, json.dumps(self.default_factory())),
                )
                row = conn.execute(
                    "SELECT data FROM documents WHERE name = %s FOR UPDATE",
                    (self.name,),
                ).fetchone()
                value = row["data"] if row and isinstance(row["data"], dict) else self.default_factory()
                result = mutate(value)
                conn.execute(
                    "UPDATE documents SET data = %s::jsonb, updated_at = now() WHERE name = %s",
                    (json.dumps(value), self.name),
                )
        return value, result


def append_message(session_name: str, message: dict) -> bool:
    """Append one chat message as a row. Returns False if the DB is unavailable."""
    p = pool()
    if p is None:
        return False
    try:
        with p.connection() as conn:
            conn.execute(
                "INSERT INTO messages (session_name, role, text, full_text, links, ts) "
                "VALUES (%s, %s, %s, %s, %s::jsonb, %s)",
                (
                    session_name,
                    str(message.get("role") or "user"),
                    str(message.get("text") or ""),
                    str(message.get("full") or ""),
                    json.dumps(message.get("links") or []),
                    float(message.get("ts") or 0.0),
                ),
            )
        return True
    except Exception:  # noqa: BLE001
        logger.warning("Could not append message for %s", session_name, exc_info=True)
        return False


def load_messages(session_name: str, limit: int = 200) -> list[dict]:
    """The most recent `limit` messages for a session, oldest first."""
    p = pool()
    if p is None:
        return []
    try:
        with p.connection() as conn:
            rows = conn.execute(
                "SELECT role, text, full_text, links, ts FROM messages "
                "WHERE session_name = %s ORDER BY ts DESC, id DESC LIMIT %s",
                (session_name, max(1, min(int(limit or 200), 1000))),
            ).fetchall()
    except Exception:  # noqa: BLE001
        logger.warning("Could not load messages for %s", session_name, exc_info=True)
        return []
    return [
        {
            "role": r["role"],
            "text": r["text"],
            "full": r["full_text"],
            "links": r["links"] or [],
            "ts": r["ts"],
        }
        for r in reversed(rows)
    ]


def replace_messages(session_name: str, messages: list[dict]) -> bool:
    """Replace a session's transcript. Used by the migration and by rewrites."""
    p = pool()
    if p is None:
        return False
    try:
        with p.connection() as conn:
            with conn.transaction():
                conn.execute("DELETE FROM messages WHERE session_name = %s", (session_name,))
                for m in messages:
                    conn.execute(
                        "INSERT INTO messages (session_name, role, text, full_text, links, ts) "
                        "VALUES (%s, %s, %s, %s, %s::jsonb, %s)",
                        (
                            session_name,
                            str(m.get("role") or "user"),
                            str(m.get("text") or ""),
                            str(m.get("full") or ""),
                            json.dumps(m.get("links") or []),
                            float(m.get("ts") or 0.0),
                        ),
                    )
        return True
    except Exception:  # noqa: BLE001
        logger.warning("Could not replace messages for %s", session_name, exc_info=True)
        return False


def migrate_json_file(path: Path, name: str) -> bool:
    """Copy one JSON state file into `documents`, if not already there.

    Idempotent: an existing non-empty document is left alone, so re-running the
    migration cannot clobber state the app has since written.
    """
    p = pool()
    if p is None or not path.is_file():
        return False
    try:
        payload = json.loads(path.read_text())
        if not isinstance(payload, dict):
            return False
    except (OSError, ValueError):
        return False
    try:
        with p.connection() as conn:
            existing = conn.execute(
                "SELECT data FROM documents WHERE name = %s", (name,)
            ).fetchone()
            if existing and existing["data"]:
                return False
            conn.execute(
                "INSERT INTO documents (name, data) VALUES (%s, %s::jsonb) "
                "ON CONFLICT (name) DO UPDATE SET data = EXCLUDED.data",
                (name, json.dumps(payload)),
            )
        return True
    except Exception:  # noqa: BLE001
        logger.warning("Could not migrate %s", path, exc_info=True)
        return False
