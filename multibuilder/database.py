from __future__ import annotations

from sqlalchemy.ext.asyncio import AsyncEngine, async_sessionmaker, create_async_engine

from .models import Base


class Database:
    def __init__(self, url: str, *, pool_size: int = 10) -> None:
        options: dict[str, object] = {"pool_pre_ping": True}
        if not url.startswith("sqlite"):
            options.update({"pool_size": pool_size, "max_overflow": 0})
        self.engine: AsyncEngine = create_async_engine(url, **options)
        self.session_factory = async_sessionmaker(self.engine, expire_on_commit=False)

    async def create_schema(self) -> None:
        async with self.engine.begin() as connection:
            await connection.run_sync(Base.metadata.create_all)

    async def dispose(self) -> None:
        await self.engine.dispose()
