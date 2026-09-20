"""Fail-closed contracts for the dashboard's metered LLM spend adapter."""

from types import SimpleNamespace

import pytest

import dashboard_spend as spend


class FakeGuard:
    def __init__(self, *, degraded="", persist=True):
        self.degraded = degraded
        self.persist = persist
        self.calls = 0
        self.spent = 0.0
        self.checked = []
        self.recorded = []

    def status(self):
        return SimpleNamespace(day="2026-09-14", calls=self.calls,
                               spent_usd=self.spent, degraded=self.degraded)

    def check(self, *, need_usd=0.0):
        self.checked.append(need_usd)
        return self.status()

    def record(self, **kwargs):
        self.recorded.append(kwargs)
        amount = float(kwargs.get("usd") or 0.25)
        if self.persist:
            self.calls += 1
            self.spent += amount
        return amount


def test_check_passes_reserve_to_guard(monkeypatch):
    guard = FakeGuard()
    monkeypatch.setattr(spend, "_guard", guard)
    spend.check(need_usd=5.0)
    assert guard.checked == [5.0]


def test_degraded_ledger_fails_closed(monkeypatch):
    monkeypatch.setattr(spend, "_guard", FakeGuard(degraded="disk unavailable"))
    with pytest.raises(spend.SpendControlError, match="unavailable"):
        spend.check()


def test_record_requires_a_persisted_ledger_row(monkeypatch):
    monkeypatch.setattr(spend, "_guard", FakeGuard(persist=False))
    with pytest.raises(spend.SpendControlError, match="not recorded"):
        spend.record(usd=0.10, model="gpt-live-1", provider="openai", route="live")


def test_record_normalizes_response_usage_and_cached_tokens(monkeypatch):
    guard = FakeGuard()
    monkeypatch.setattr(spend, "_guard", guard)
    amount = spend.record_usage(
        model="gpt-5.6-terra",
        usage={"input_tokens": 100, "output_tokens": 20,
               "input_tokens_details": {"cached_tokens": 40}},
        provider="openai",
        route="voice-backend",
    )
    assert amount == 0.25
    assert guard.recorded[0]["usage"] == {
        "input_tokens": 60,
        "cache_read_input_tokens": 40,
        "output_tokens": 20,
    }


def test_model_names_are_environment_configurable(monkeypatch):
    monkeypatch.setenv("SYNTHETIC_MODEL", " model-from-env ")
    assert spend.configured_model("SYNTHETIC_MODEL", "fallback") == "model-from-env"
    monkeypatch.setenv("SYNTHETIC_MODEL", " ")
    assert spend.configured_model("SYNTHETIC_MODEL", "fallback") == "fallback"
