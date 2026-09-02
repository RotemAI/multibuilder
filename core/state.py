"""Shared state backend selection.

Chooses PostgreSQL when a database is configured and reachable, falling back to
the flock-protected JSON stores otherwise. The cached probe result lives here
alongside the functions that own it, rather than being split across modules.
"""

from __future__ import annotations

import logging
from pathlib import Path

import db_store
from runtime_control import LockedJsonStore

logger = logging.getLogger("codex-dashboard")


# Persisted per session: uvicorn runs several workers, so an in-memory dict
# would let the worker that answers a read disagree with the one that handled
# the write — the agent picker showed the old value after a successful switch.
# --- Shared state backend -------------------------------------------------
#
# Team deployments keep state in PostgreSQL so several people (and, later,
# several hosts) see the same sessions, workspaces and chat. The JSON files
# remain the fallback: a dashboard that refuses to start because the database
# is down would be worse than one running on local files.
_DB_BACKEND_CHECKED = False

_DB_BACKEND_OK = False

def _db_ready() -> bool:
    """Is the shared database usable? Probed once, then cached."""
    global _DB_BACKEND_CHECKED, _DB_BACKEND_OK
    if not _DB_BACKEND_CHECKED:
        _DB_BACKEND_OK = db_store.enabled() and db_store.healthy()
        _DB_BACKEND_CHECKED = True
        logger.info("Shared state backend: %s", "postgresql" if _DB_BACKEND_OK else "json files")
        if _DB_BACKEND_OK:
            # An unstamped database means migrations have never been run here.
            # Say so plainly at startup: the alternative is a schema mismatch
            # surfacing later as an opaque query error.
            revision = db_store.schema_version()
            if revision:
                logger.info("Database schema revision: %s", revision)
            else:
                logger.warning(
                    "Database has no Alembic revision stamp; "
                    "run 'alembic upgrade head' to bring the schema under migration control"
                )
    return _DB_BACKEND_OK

def _shared_store(name: str, path: Path, default_factory):
    """A document store backed by Postgres when available, else the JSON file."""
    if _db_ready():
        return db_store.PgJsonStore(name, default_factory)
    return LockedJsonStore(path, default_factory)
