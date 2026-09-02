"""index documents updated_at

Proves the migration path can ALTER an existing table, which the old
CREATE TABLE IF NOT EXISTS startup DDL could not do: it only ever created
missing tables, so any change to one already deployed was silently skipped.

The index itself supports ordering documents by recency, which the admin
views do when listing shared state.

Revision ID: 983551d575be
Revises: 8aeaf543cc63
Create Date: 2026-09-02
"""

from alembic import op

revision = "983551d575be"
down_revision = "8aeaf543cc63"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.execute(
        "CREATE INDEX IF NOT EXISTS documents_updated_at_idx "
        "ON documents (updated_at DESC);"
    )


def downgrade() -> None:
    op.execute("DROP INDEX IF EXISTS documents_updated_at_idx;")
