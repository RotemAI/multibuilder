"""Fail-closed adapter for the fleet's per-app metered LLM spend guard."""
from __future__ import annotations

import os
import sys
import threading
from collections.abc import Mapping
from pathlib import Path
from typing import Any


class SpendControlError(RuntimeError):
    """Metered work is unsafe because the cap cannot be enforced or recorded."""


_guard = None
_guard_lock = threading.Lock()


def configured_model(env_name: str, fallback: str) -> str:
    return os.environ.get(env_name, "").strip() or fallback


def _guard_instance():
    global _guard
    if _guard is not None:
        return _guard
    with _guard_lock:
        if _guard is not None:
            return _guard
        library = Path(os.environ.get(
            "TMUX_DASH_LLM_SPEND_LIBRARY", "/usr/local/lib/llm-spend"
        ))
        if str(library) not in sys.path:
            sys.path.insert(0, str(library))
        try:
            from llm_spend_guard import SpendGuard
        except Exception as exc:
            raise SpendControlError("Metered LLM spend guard is unavailable.") from exc
        app = os.environ.get("TMUX_DASH_LLM_SPEND_APP", "tmux-dashboard").strip()
        _guard = SpendGuard(app or "tmux-dashboard")
        return _guard


def _healthy(state) -> None:
    if getattr(state, "degraded", ""):
        raise SpendControlError("Metered LLM spend ledger is unavailable.")


def check(*, need_usd: float = 0.0):
    guard = _guard_instance()
    try:
        state = guard.check(need_usd=max(0.0, float(need_usd)))
    except SpendControlError:
        raise
    except Exception as exc:
        raise SpendControlError("Daily metered LLM spend limit reached.") from exc
    _healthy(state)
    return state


def _usage_mapping(usage: Any) -> dict[str, int]:
    if isinstance(usage, Mapping):
        data = usage
    elif callable(getattr(usage, "model_dump", None)):
        data = usage.model_dump()
    else:
        data = getattr(usage, "__dict__", {})
    if not isinstance(data, Mapping):
        data = {}
    details = data.get("input_tokens_details") or data.get("input_token_details") or {}
    if not isinstance(details, Mapping):
        details = {}
    total_input = max(0, int(data.get("input_tokens") or data.get("prompt_tokens") or 0))
    cached = max(0, int(details.get("cached_tokens") or data.get("cache_read_input_tokens") or 0))
    cached = min(cached, total_input)
    return {
        "input_tokens": total_input - cached,
        "cache_read_input_tokens": cached,
        "output_tokens": max(0, int(data.get("output_tokens") or data.get("completion_tokens") or 0)),
    }


def record(*, usd: float = 0.0, model: str = "", usage: Mapping[str, Any] | None = None,
           provider: str = "openai", route: str = "api", detail: str = "") -> float:
    guard = _guard_instance()
    before = guard.status()
    _healthy(before)
    try:
        amount = guard.record(usd=max(0.0, float(usd)), model=model, usage=usage or {},
                              provider=provider, route=route, detail=detail)
        after = guard.status()
    except SpendControlError:
        raise
    except Exception as exc:
        raise SpendControlError("Metered LLM spend was not recorded.") from exc
    _healthy(after)
    amount = max(0.0, float(amount or 0.0))
    if amount or any(int((usage or {}).get(key) or 0) for key in (
            "input_tokens", "output_tokens", "cache_read_input_tokens")):
        same_day = getattr(before, "day", None) == getattr(after, "day", None)
        expected_calls = int(getattr(before, "calls", 0) or 0) + 1 if same_day else 1
        expected_spend = (float(getattr(before, "spent_usd", 0.0) or 0.0)
                          if same_day else 0.0) + amount
        if (int(getattr(after, "calls", 0) or 0) < expected_calls
                or float(getattr(after, "spent_usd", 0.0) or 0.0) + 1e-9 < expected_spend):
            raise SpendControlError("Metered LLM spend was not recorded.")
    return amount


def record_usage(*, model: str, usage: Any, provider: str = "openai",
                 route: str = "api", detail: str = "") -> float:
    normalized = _usage_mapping(usage)
    return record(model=model, usage=normalized, provider=provider, route=route, detail=detail)


def estimate_text(model: str, content: Any, max_output_tokens: int) -> float:
    """Use one UTF-8 byte per input token and the fleet's conservative model rates."""
    raw = str(content or "").encode("utf-8", "replace")
    usage = {"input_tokens": max(1, len(raw)),
             "output_tokens": max(0, int(max_output_tokens))}
    guard = _guard_instance()
    module = sys.modules.get(guard.__class__.__module__)
    price = getattr(module, "price", None)
    if not callable(price):
        raise SpendControlError("Metered LLM pricing is unavailable.")
    return max(0.0, float(price(model, usage)))
