from __future__ import annotations

from fastapi import FastAPI

from .api import create_app
from .runtime import build_runtime
from .settings import RuntimeSettings


def create_application(settings: RuntimeSettings | None = None) -> FastAPI:
    runtime_settings = settings or RuntimeSettings.from_environment()
    return create_app(
        database_url=runtime_settings.database_url,
        admin_token=runtime_settings.admin_token,
        cookie_signing_secret=runtime_settings.cookie_signing_secret,
        scheduler_enabled=runtime_settings.scheduler_enabled,
        runtime_factory=lambda repository: build_runtime(runtime_settings, repository),
    )


app = create_application()


__all__ = ["app", "create_application"]
