"""baseline documents and messages

The schema as it existed when migrations were introduced. Written with
IF NOT EXISTS so it adopts databases that db_store's old startup DDL had
already created, rather than failing on a live deployment. On a fresh
database it creates the same tables from scratch.

Revision ID: 8aeaf543cc63
Revises:
Create Date: 2026-09-02
"""

from alembic import op

revision = "8aeaf543cc63"
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.execute(
        """
        CREATE TABLE IF NOT EXISTS documents (
            name        TEXT PRIMARY KEY,
            data        JSONB NOT NULL DEFAULT '{}'::jsonb,
            updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
        );
        """
    )
    op.execute(
        """
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
        """
    )
    op.execute(
        "CREATE INDEX IF NOT EXISTS messages_session_ts_idx "
        "ON messages (session_name, ts);"
    )


def downgrade() -> None:
    # Deliberately destructive and deliberately explicit: this drops all
    # dashboard state. It exists so the revision is reversible in a test
    # database, not because it should ever be run against production.
    op.execute("DROP INDEX IF EXISTS messages_session_ts_idx;")
    op.execute("DROP TABLE IF EXISTS messages;")
    op.execute("DROP TABLE IF EXISTS documents;")
