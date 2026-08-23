from __future__ import annotations

import pytest

from multibuilder.settings import RuntimeSettings


def valid_environment() -> dict[str, str]:
    return {
        "MULTIBUILDER_DATABASE_URL": "postgresql+asyncpg:///multibuilder",
        "MULTIBUILDER_ADMIN_TOKEN": "an-admin-token-with-enough-entropy",
        "MULTIBUILDER_COOKIE_SECRET": "a-cookie-secret-with-enough-entropy",
        "MULTIBUILDER_PUBLIC_URL": "https://multibuilder.grabo.tools",
        "MULTIBUILDER_STATE_ROOT": "/srv/multibuilder/state",
    }


def test_runtime_settings_are_fail_closed_and_do_not_repr_secrets() -> None:
    settings = RuntimeSettings.from_environment(valid_environment())

    assert settings.bind_host == "127.0.0.1"
    assert settings.port == 8510
    assert settings.scheduler_enabled is True
    assert settings.git_allowed_hosts == frozenset({"github.com"})
    assert settings.providers["codex"].enabled is True
    assert "an-admin-token" not in repr(settings)
    assert "cookie-secret" not in repr(settings)


def test_public_bind_requires_an_explicit_override() -> None:
    environment = {**valid_environment(), "MULTIBUILDER_BIND_HOST": "0.0.0.0"}

    with pytest.raises(ValueError, match="loopback"):
        RuntimeSettings.from_environment(environment)


def test_provider_models_and_capacity_come_from_runtime_configuration() -> None:
    environment = {
        **valid_environment(),
        "MULTIBUILDER_CODEX_MODEL": "configured-director-model",
        "MULTIBUILDER_CODEX_CONCURRENCY": "7",
        "MULTIBUILDER_MUSE_ENABLED": "false",
    }

    settings = RuntimeSettings.from_environment(environment)

    assert settings.providers["codex"].model == "configured-director-model"
    assert settings.providers["codex"].max_concurrency == 7
    assert settings.providers["muse"].enabled is False


def test_muse_worker_receives_only_explicit_provider_state_paths() -> None:
    environment = {
        **valid_environment(),
        "MULTIBUILDER_MUSE_XDG_CONFIG_HOME": "/srv/multibuilder/providers/muse/config",
        "MULTIBUILDER_MUSE_XDG_DATA_HOME": "/srv/multibuilder/providers/muse/data",
    }

    settings = RuntimeSettings.from_environment(environment)

    assert settings.providers["muse"].worker_environment == {
        "XDG_CONFIG_HOME": "/srv/multibuilder/providers/muse/config",
        "XDG_DATA_HOME": "/srv/multibuilder/providers/muse/data",
    }


def test_provider_state_paths_must_be_absolute() -> None:
    environment = {
        **valid_environment(),
        "MULTIBUILDER_MUSE_XDG_CONFIG_HOME": "relative/config",
    }

    with pytest.raises(ValueError, match="absolute"):
        RuntimeSettings.from_environment(environment)


def test_git_host_allowlist_is_explicitly_configurable() -> None:
    environment = {
        **valid_environment(),
        "MULTIBUILDER_GIT_ALLOWED_HOSTS": "github.com, git.example.test",
    }

    settings = RuntimeSettings.from_environment(environment)

    assert settings.git_allowed_hosts == frozenset({"github.com", "git.example.test"})


def test_direct_openai_backend_is_not_advertised_for_workspace_writes() -> None:
    settings = RuntimeSettings.from_environment(
        {
            **valid_environment(),
            "OPENAI_API_KEY": "test-key",
            "MULTIBUILDER_OPENAI_MODEL": "configured-reasoning-model",
        }
    )

    assert settings.providers["openai"].capabilities == frozenset({"reasoning", "planning", "review"})
