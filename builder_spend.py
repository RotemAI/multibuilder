"""Shared builder API accounting; active voice sessions retain in-flight headroom."""
import os
from pathlib import Path
import sys
import time

sys.path.insert(0, '/usr/local/lib/llm-spend')
from llm_spend_guard import SpendGuard
from runtime_control import LockedJsonStore

guard = SpendGuard(os.environ.get('TMUX_DASH_SPEND_APP', 'build-grabo-tools'))


def check(directory, need_usd=0.0):
    rows = LockedJsonStore(Path(directory) / 'voice-guards.json', dict).read()
    active = sum(bool(r.get('active') and r.get('connected') and
                      r.get('heartbeat', 0) > time.time() - 90) for r in rows.values())
    # Protect the budget while the provider finishes an already-started backend turn.
    status = guard.check(need_usd=max(0.0, need_usd) + active * 20.0)
    if status.degraded:
        raise RuntimeError('API spend accounting is unavailable')
    return status


def record(usd, model, route):
    if usd > 0:
        guard.record(usd=usd, model=model, provider='openai', route=route)


def response_cost(usage):
    if not isinstance(usage, dict):
        return 0.0
    # Conservative uncached rates, including reasoning tokens in output usage.
    return (max(0, int(usage.get('input_tokens', usage.get('prompt_tokens', 0)) or 0)) * 10
            + max(0, int(usage.get('output_tokens', usage.get('completion_tokens', 0)) or 0)) * 50) / 1_000_000


class VoiceMeter:
    def __init__(self, directory):
        self.directory = directory
        self.seconds = 0.0
        self.responses = set()

    def duration(self, seconds):
        seconds = max(self.seconds, float(seconds))
        record((seconds - self.seconds) * 0.05 / 60, 'gpt-live-1', 'voice')
        self.seconds = seconds

    def response(self, response):
        rid = response.get('id')
        if rid and rid not in self.responses:
            record(response_cost(response.get('usage')), 'gpt-5.6-terra', 'voice-backend')
            self.responses.add(rid)
