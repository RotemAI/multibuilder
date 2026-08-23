from __future__ import annotations

import os
from collections.abc import Mapping
from dataclasses import dataclass, field
from pathlib import Path

from .routing import ProviderProfile


def _boolean(value: str | None, default: bool) -> bool:
    if value is None:
        return default
    normalized = value.strip().lower()
    if normalized in {"1", "true", "yes", "on"}:
        return True
    if normalized in {"0", "false", "no", "off"}:
        return False
    raise ValueError(f"invalid boolean value: {value}")


def _integer(value: str | None, default: int, *, minimum: int, maximum: int) -> int:
    parsed = default if value is None else int(value)
    if not minimum <= parsed <= maximum:
        raise ValueError(f"integer must be between {minimum} and {maximum}")
    return parsed


def _absolute_path(value: str | None, *, setting: str) -> str | None:
    if value is None or not value.strip():
        return None
    path = Path(value.strip())
    if not path.is_absolute():
        raise ValueError(f"{setting} must be an absolute path")
    return str(path)


@dataclass(frozen=True, slots=True)
class ProviderRuntimeSettings:
    name: str
    adapter: str
    enabled: bool
    binary: str | None
    model: str | None
    reasoning_effort: str | None
    capabilities: frozenset[str]
    strength: float
    relative_cost: float
    latency_p95_seconds: float
    recent_success_rate: float
    max_concurrency: int
    worker_environment: Mapping[str, str] = field(default_factory=dict, repr=False)

    def profile(self, *, available: bool | None = None) -> ProviderProfile:
        return ProviderProfile(
            name=self.name,
            capabilities=self.capabilities,
            strength=self.strength,
            relative_cost=self.relative_cost,
            latency_p95_seconds=self.latency_p95_seconds,
            recent_success_rate=self.recent_success_rate,
            active_runs=0,
            max_concurrency=self.max_concurrency,
            available=self.enabled if available is None else available,
        )


@dataclass(frozen=True, slots=True)
class RuntimeSettings:
    database_url: str
    admin_token: str = field(repr=False)
    cookie_signing_secret: str = field(repr=False)
    public_url: str
    state_root: Path
    bind_host: str = "127.0.0.1"
    port: int = 8510
    scheduler_enabled: bool = True
    scheduler_interval_seconds: float = 1.0
    global_max_parallelism: int = 8
    git_allowed_hosts: frozenset[str] = frozenset({"github.com"})
    providers: dict[str, ProviderRuntimeSettings] = field(default_factory=dict)
    openai_api_key: str | None = field(default=None, repr=False)

    @classmethod
    def from_environment(cls, environment: Mapping[str, str] | None = None) -> RuntimeSettings:
        values = os.environ if environment is None else environment
        database_url = values.get("MULTIBUILDER_DATABASE_URL", "").strip()
        admin_token = values.get("MULTIBUILDER_ADMIN_TOKEN", "")
        cookie_secret = values.get("MULTIBUILDER_COOKIE_SECRET", "")
        public_url = values.get("MULTIBUILDER_PUBLIC_URL", "").rstrip("/")
        state_root_text = values.get("MULTIBUILDER_STATE_ROOT", "").strip()
        missing = [
            name
            for name, value in (
                ("MULTIBUILDER_DATABASE_URL", database_url),
                ("MULTIBUILDER_ADMIN_TOKEN", admin_token),
                ("MULTIBUILDER_COOKIE_SECRET", cookie_secret),
                ("MULTIBUILDER_PUBLIC_URL", public_url),
                ("MULTIBUILDER_STATE_ROOT", state_root_text),
            )
            if not value
        ]
        if missing:
            raise ValueError("missing required settings: " + ", ".join(missing))
        if len(admin_token) < 24 or len(cookie_secret) < 24:
            raise ValueError("admin and cookie secrets must contain at least 24 characters")
        if not public_url.startswith("https://"):
            raise ValueError("the public URL must use HTTPS")

        bind_host = values.get("MULTIBUILDER_BIND_HOST", "127.0.0.1")
        allow_public_bind = _boolean(values.get("MULTIBUILDER_ALLOW_PUBLIC_BIND"), False)
        if bind_host not in {"127.0.0.1", "::1", "localhost"} and not allow_public_bind:
            raise ValueError("the service must bind to loopback unless the public-bind override is explicit")

        openai_api_key = values.get("OPENAI_API_KEY") or None
        git_allowed_hosts = frozenset(
            host.strip().casefold().rstrip(".")
            for host in values.get("MULTIBUILDER_GIT_ALLOWED_HOSTS", "github.com").split(",")
            if host.strip()
        )
        if not git_allowed_hosts:
            raise ValueError("MULTIBUILDER_GIT_ALLOWED_HOSTS must contain at least one host")
        muse_worker_environment = {
            key: path
            for key, path in (
                (
                    "XDG_CONFIG_HOME",
                    _absolute_path(
                        values.get("MULTIBUILDER_MUSE_XDG_CONFIG_HOME"),
                        setting="MULTIBUILDER_MUSE_XDG_CONFIG_HOME",
                    ),
                ),
                (
                    "XDG_DATA_HOME",
                    _absolute_path(
                        values.get("MULTIBUILDER_MUSE_XDG_DATA_HOME"),
                        setting="MULTIBUILDER_MUSE_XDG_DATA_HOME",
                    ),
                ),
            )
            if path is not None
        }
        providers = {
            "codex": ProviderRuntimeSettings(
                name="codex",
                adapter="codex_cli",
                enabled=_boolean(values.get("MULTIBUILDER_CODEX_ENABLED"), True),
                binary=values.get("MULTIBUILDER_CODEX_BINARY", "/usr/bin/codex"),
                model=values.get("MULTIBUILDER_CODEX_MODEL") or None,
                reasoning_effort=values.get("MULTIBUILDER_CODEX_REASONING") or None,
                capabilities=frozenset(
                    {"reasoning", "coding", "testing", "review", "integration", "exploration", "deployment"}
                ),
                strength=1.0,
                relative_cost=0.35,
                latency_p95_seconds=15,
                recent_success_rate=0.9,
                max_concurrency=_integer(
                    values.get("MULTIBUILDER_CODEX_CONCURRENCY"), 4, minimum=1, maximum=64
                ),
            ),
            "muse": ProviderRuntimeSettings(
                name="muse",
                adapter="muse_cli",
                enabled=_boolean(values.get("MULTIBUILDER_MUSE_ENABLED"), True),
                binary=values.get("MULTIBUILDER_MUSE_BINARY", "/home/nimrod_rotem/.local/bin/muse"),
                model=values.get("MULTIBUILDER_MUSE_MODEL") or None,
                reasoning_effort=values.get("MULTIBUILDER_MUSE_REASONING") or None,
                capabilities=frozenset({"coding", "testing", "review", "exploration", "documentation"}),
                strength=0.72,
                relative_cost=0.08,
                latency_p95_seconds=8,
                recent_success_rate=0.82,
                max_concurrency=_integer(
                    values.get("MULTIBUILDER_MUSE_CONCURRENCY"), 6, minimum=1, maximum=128
                ),
                worker_environment=muse_worker_environment,
            ),
            "grok": ProviderRuntimeSettings(
                name="grok",
                adapter="grok_cli",
                enabled=_boolean(values.get("MULTIBUILDER_GROK_ENABLED"), True),
                binary=values.get("MULTIBUILDER_GROK_BINARY", "/home/nimrod_rotem/.grok/bin/grok"),
                model=values.get("MULTIBUILDER_GROK_MODEL") or None,
                reasoning_effort=values.get("MULTIBUILDER_GROK_REASONING") or None,
                capabilities=frozenset({"reasoning", "coding", "testing", "review", "exploration"}),
                strength=0.8,
                relative_cost=0.2,
                latency_p95_seconds=10,
                recent_success_rate=0.8,
                max_concurrency=_integer(
                    values.get("MULTIBUILDER_GROK_CONCURRENCY"), 4, minimum=1, maximum=64
                ),
            ),
            "openai": ProviderRuntimeSettings(
                name="openai",
                adapter="openai_responses",
                enabled=_boolean(values.get("MULTIBUILDER_OPENAI_ENABLED"), bool(openai_api_key)),
                binary=None,
                model=values.get("MULTIBUILDER_OPENAI_MODEL") or None,
                reasoning_effort=values.get("MULTIBUILDER_OPENAI_REASONING") or None,
                capabilities=frozenset({"reasoning", "planning", "review"}),
                strength=0.95,
                relative_cost=0.75,
                latency_p95_seconds=12,
                recent_success_rate=0.88,
                max_concurrency=_integer(
                    values.get("MULTIBUILDER_OPENAI_CONCURRENCY"), 8, minimum=1, maximum=128
                ),
            ),
        }
        return cls(
            database_url=database_url,
            admin_token=admin_token,
            cookie_signing_secret=cookie_secret,
            public_url=public_url,
            state_root=Path(state_root_text).resolve(),
            bind_host=bind_host,
            port=_integer(values.get("MULTIBUILDER_PORT"), 8510, minimum=1024, maximum=65_535),
            scheduler_enabled=_boolean(values.get("MULTIBUILDER_SCHEDULER_ENABLED"), True),
            scheduler_interval_seconds=float(values.get("MULTIBUILDER_SCHEDULER_INTERVAL", "1")),
            global_max_parallelism=_integer(
                values.get("MULTIBUILDER_GLOBAL_PARALLELISM"), 8, minimum=1, maximum=256
            ),
            git_allowed_hosts=git_allowed_hosts,
            providers=providers,
            openai_api_key=openai_api_key,
        )


__all__ = ["ProviderRuntimeSettings", "RuntimeSettings"]
