from pathlib import Path
from unittest.mock import MagicMock, patch

import app


def test_account_read_accepts_plan_limits_when_account_metadata_is_missing():
    process = MagicMock()
    with (
        patch("app._codex_app_server_process", return_value=process),
        patch("app._codex_app_server_initialize"),
        patch("app._codex_app_server_send"),
        patch(
            "app._codex_app_server_wait",
            side_effect=[
                {
                    "id": 1,
                    "result": {
                        "account": None,
                        "requiresOpenaiAuth": True,
                    },
                },
                {
                    "id": 2,
                    "result": {
                        "rateLimits": {
                            "limitId": "codex",
                            "planType": "pro",
                        },
                    },
                },
            ],
        ),
        patch("app._terminate_codex_app_server"),
    ):
        result = app._codex_app_server_account_read(Path("/tmp/test-codex"))

    assert result == {
        "ok": True,
        "account": {"type": "chatgpt", "planType": "pro"},
    }
