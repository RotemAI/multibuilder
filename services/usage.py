"""Usage accounting: token counts, cost estimation, and prompt auditing.

Extracted from app.py. Reads the agent CLIs' own JSONL transcripts to attribute
tokens and cost per session and per user, and rolls those up for the stats
views.

The four app-level helpers it needs (the API client, the audit-log reader, and
the per-user config paths) are injected via configure() rather than imported.
"""

from __future__ import annotations

import base64
import json
import logging
import os
import re
import threading
import time
import urllib.parse
from collections import defaultdict
from datetime import datetime, timedelta, timezone
from pathlib import Path

from core import tokens as core_tokens
from core.config import (
    _CODEX_DEFAULT_MODEL,
    ADVISOR_ADMIN_TOKEN_FILE,
    MESSAGES_DIR,
    SHARED_CREDENTIALS,
)
from core.users import _load_users
from services.tmux import detect_activity, get_session_cwd

logger = logging.getLogger("codex-dashboard")

# Injected by app.py; see configure().
_api_http = None
_iter_prompt_audit_reverse = None
_session_config_base = None
_session_agent_kind = None
_user_codex_config_dir = None
# Injected as accessors, not values: both are rebound at runtime in app.py, so a
# snapshot taken at import would go stale.
AUTH_SECRET = ""
DEFAULT_MODEL = ""


def configure(**deps):
    """Bind app-level helpers; an unknown name raises instead of passing silently."""
    for key, value in deps.items():
        if key not in globals():
            raise TypeError(f"services.usage.configure: unknown dependency {key!r}")
        globals()[key] = value


# The signing primitives live in core/tokens.py; AUTH_SECRET stays here so it
# keeps exactly one definition (it is generated per process when
# TMUX_DASH_SECRET is unset) and is passed in rather than imported.
def _make_token(user_id: str) -> str:
    return core_tokens.make_token(AUTH_SECRET, user_id)


def _check_token(token: str) -> bool:
    return core_tokens.check_token(AUTH_SECRET, token)


def _decode_id_token(id_token: str) -> dict:
    """Return the claims of a Google ID token.

    No signature check: the token is read straight off Google's HTTPS token
    endpoint in response to a request authenticated with our client secret, which
    is the case Google explicitly documents as not needing local verification.
    The claims below (aud/iss/exp) are still checked by the caller.
    """
    parts = id_token.split(".")
    if len(parts) != 3:
        raise ValueError("malformed id_token")
    payload = parts[1] + "=" * (-len(parts[1]) % 4)
    return json.loads(base64.urlsafe_b64decode(payload.encode()))


def _user_lifetime_stats(users: list[dict]) -> dict[str, dict[str, int]]:
    """Return lightweight retained prompt/token totals for the Users table."""
    prompt_totals = _prompt_audit_summary()
    stats = {}
    for user in users:
        user_id = str(user.get("id") or "")
        if not user_id:
            continue
        tokens = _token_usage_for_home(
            _user_codex_config_dir(user), {"all": ""}
        )["all"]
        stats[user_id] = {
            "total_prompts": int(
                (prompt_totals.get(user_id) or {}).get("count") or 0
            ),
            "total_tokens": int(tokens.get("totalTokens") or 0),
        }
    return stats


def _pct_status(pct):
    if pct is None:
        return "ok"
    if pct >= 90:
        return "err"
    if pct >= 75:
        return "warn"
    return "ok"


def _usage_na(msg="No live usage endpoint — open the dashboard"):
    return {"ok": False, "status": "na", "summary": msg,
            "used": None, "limit": None, "remaining": None, "pct": None, "detail": ""}


def _usage_err(st, body):
    return {"ok": False, "status": "err", "summary": f"HTTP {st}" if st else "request failed",
            "used": None, "limit": None, "remaining": None, "pct": None,
            "detail": (body or "")[:200]}


def _fetch_api_usage_sync(entry: dict) -> dict:
    prov = (entry.get("usage_provider") or "").lower()
    key = entry.get("key") or ""
    if entry.get("status") == "revoked":
        return {"ok": False, "status": "na", "summary": "Revoked — not checked",
                "used": None, "limit": None, "remaining": None, "pct": None, "detail": ""}
    if prov in ("", "exa", "valyu", "vertex", "twilio") or (not key and prov not in ("vertex", "twilio")):
        if prov == "vertex":
            return _usage_na("Service-account auth — usage in GCP console")
        if prov == "twilio":
            return _usage_na("Token lives on builder VM — usage in Twilio console")
        if not key:
            return _usage_na("No key set")
        return _usage_na()
    try:
        if prov == "serpapi":
            st, body, _ = _api_http("https://serpapi.com/account?api_key=" + urllib.parse.quote(key))
            if st == 200:
                d = json.loads(body)
                limit = d.get("searches_per_month")
                used = d.get("this_month_usage")
                left = d.get("total_searches_left")
                pct = (used / limit * 100) if (limit and used is not None) else None
                return {"ok": True, "status": _pct_status(pct),
                        "summary": f"{used:,} / {limit:,} used · {left:,} left" if limit is not None else "OK",
                        "used": used, "limit": limit, "remaining": left, "pct": pct,
                        "detail": f"{d.get('plan_name','')} · ${d.get('plan_monthly_price','?')}/mo · renews {d.get('plan_renewal_date','?')} · {d.get('this_hour_searches','?')}/{d.get('account_rate_limit_per_hour','?')} this hr"}
            return _usage_err(st, body)

        if prov == "scrapingbee":
            st, body, _ = _api_http("https://app.scrapingbee.com/api/v1/usage?api_key=" + urllib.parse.quote(key))
            if st == 200:
                d = json.loads(body)
                limit = d.get("max_api_credit")
                used = d.get("used_api_credit")
                rem = (limit - used) if (limit is not None and used is not None) else None
                pct = (used / limit * 100) if limit else None
                return {"ok": True, "status": _pct_status(pct),
                        "summary": f"{used:,} / {limit:,} credits used",
                        "used": used, "limit": limit, "remaining": rem, "pct": pct,
                        "detail": f"concurrency {d.get('current_concurrency','?')}/{d.get('max_concurrency','?')} · renews {str(d.get('renewal_subscription_date',''))[:10]}"}
            return _usage_err(st, body)

        if prov == "firecrawl":
            st, body, _ = _api_http("https://api.firecrawl.dev/v1/team/credit-usage",
                                    headers={"Authorization": "Bearer " + key})
            if st == 200:
                d = (json.loads(body) or {}).get("data", {}) or {}
                limit = d.get("plan_credits")
                rem = d.get("remaining_credits")
                used = (limit - rem) if (limit is not None and rem is not None) else None
                pct = (used / limit * 100) if limit else None
                return {"ok": True, "status": _pct_status(pct),
                        "summary": f"{used:,} / {limit:,} credits used · {rem:,} left" if limit is not None else "OK",
                        "used": used, "limit": limit, "remaining": rem, "pct": pct,
                        "detail": f"period {str(d.get('billing_period_start',''))[:10]} → {str(d.get('billing_period_end',''))[:10]}"}
            return _usage_err(st, body)

        if prov == "brave":
            st, body, hdrs = _api_http(
                "https://api.search.brave.com/res/v1/web/search?q=ping&count=1",
                headers={"X-Subscription-Token": key, "Accept": "application/json"})

            def _last(s):
                parts = [p.strip() for p in (s or "").split(",") if p.strip() != ""]
                return parts[-1] if parts else ""
            lim = hdrs.get("x-ratelimit-limit", "")
            rem = hdrs.get("x-ratelimit-remaining", "")
            mlim, mrem = _last(lim), _last(rem)
            if st == 402:
                return {"ok": True, "status": "err",
                        "summary": "402 — free quota exhausted / plan inactive",
                        "used": None, "limit": None, "remaining": None, "pct": None,
                        "detail": f"monthly limit {mlim or '?'} · remaining {mrem or '?'}"}
            if st == 200:
                try:
                    L = int(mlim)
                    R = int(mrem)
                    U = L - R
                    pct = (U / L * 100) if L else None
                    return {"ok": True, "status": _pct_status(pct),
                            "summary": (f"{U:,} / {L:,} used this month · {R:,} left" if L else "Key valid"),
                            "used": (U if L else None), "limit": (L or None),
                            "remaining": (R if L else None), "pct": pct,
                            "detail": f"per-second cap {(lim or '').split(',')[0].strip()}"}
                except Exception:
                    return {"ok": True, "status": "ok", "summary": "Key valid",
                            "used": None, "limit": None, "remaining": None, "pct": None,
                            "detail": f"limit {lim} · remaining {rem}"}
            return _usage_err(st, body)

        if prov == "linkup":
            st, body, _ = _api_http("https://api.linkup.so/v1/credits/balance",
                                    headers={"Authorization": "Bearer " + key})
            if st == 200:
                bal = (json.loads(body) or {}).get("balance")
                low = isinstance(bal, (int, float)) and bal <= 5
                return {"ok": True, "status": "warn" if low else "ok",
                        "summary": f"{bal} credits remaining",
                        "used": None, "limit": None, "remaining": bal, "pct": None, "detail": ""}
            return _usage_err(st, body)

        if prov == "jina":
            u = "https://embeddings-dashboard-api.jina.ai/api/v1/api_key/user?api_key=" + urllib.parse.quote(key)
            st, body, _ = _api_http(u, headers={"Authorization": "Bearer " + key})
            if st == 200:
                w = (json.loads(body) or {}).get("wallet", {}) or {}
                bal = w.get("total_balance")
                neg = isinstance(bal, (int, float)) and bal < 0
                summ = (f"balance {bal:,} tokens" if isinstance(bal, (int, float)) else "Key valid")
                if neg:
                    summ += " (depleted / negative)"
                return {"ok": True, "status": "err" if neg else "ok", "summary": summ,
                        "used": None, "limit": None, "remaining": bal, "pct": None, "detail": ""}
            return _usage_err(st, body)

        if prov == "tavily":
            st, body, _ = _api_http("https://api.tavily.com/usage",
                                    headers={"Authorization": "Bearer " + key})
            if st == 200:
                try:
                    d = json.loads(body)
                    acct = d.get("account", {}) or {}
                    k = d.get("key", {}) or {}
                    limit = acct.get("plan_limit") or k.get("limit")
                    used = acct.get("plan_usage") if acct.get("plan_usage") is not None else k.get("usage")
                    if limit and used is not None:
                        pct = used / limit * 100
                        return {"ok": True, "status": _pct_status(pct),
                                "summary": f"{used:,} / {limit:,} used",
                                "used": used, "limit": limit, "remaining": limit - used,
                                "pct": pct, "detail": ""}
                    return {"ok": True, "status": "ok", "summary": "Key valid",
                            "used": None, "limit": None, "remaining": None, "pct": None,
                            "detail": json.dumps(d)[:180]}
                except Exception:
                    return {"ok": True, "status": "ok", "summary": "Key valid",
                            "used": None, "limit": None, "remaining": None, "pct": None, "detail": ""}
            return _usage_err(st, body)

        if prov == "openai":
            st, body, _ = _api_http("https://api.openai.com/v1/models",
                                    headers={"Authorization": "Bearer " + key})
            if st == 200:
                n = len((json.loads(body) or {}).get("data", []))
                return {"ok": True, "status": "ok",
                        "summary": f"Key valid ({n} models) — $/usage on dashboard",
                        "used": None, "limit": None, "remaining": None, "pct": None,
                        "detail": "Cost/usage numbers need an Admin API key; open the dashboard."}
            if st == 429:
                return {"ok": True, "status": "warn", "summary": "429 — rate/quota limited",
                        "used": None, "limit": None, "remaining": None, "pct": None, "detail": (body or "")[:180]}
            if st == 401:
                return {"ok": True, "status": "err", "summary": "401 — invalid/expired key",
                        "used": None, "limit": None, "remaining": None, "pct": None, "detail": (body or "")[:180]}
            return _usage_err(st, body)

        if prov == "anthropic":
            st, body, _ = _api_http("https://api.anthropic.com/v1/models",
                                    headers={"x-api-key": key, "anthropic-version": "2023-06-01"})
            if st == 200:
                n = len((json.loads(body) or {}).get("data", []))
                return {"ok": True, "status": "ok",
                        "summary": f"Key valid ({n} models) — $/usage on dashboard",
                        "used": None, "limit": None, "remaining": None, "pct": None,
                        "detail": "Cost/usage report needs an Admin API key (sk-ant-admin…)."}
            if st == 429:
                return {"ok": True, "status": "warn", "summary": "429 — rate/quota limited",
                        "used": None, "limit": None, "remaining": None, "pct": None, "detail": (body or "")[:180]}
            if st in (401, 403):
                return {"ok": True, "status": "err", "summary": f"{st} — invalid/expired key",
                        "used": None, "limit": None, "remaining": None, "pct": None, "detail": (body or "")[:180]}
            return _usage_err(st, body)

        if prov == "gemini":
            st, body, _ = _api_http(
                "https://generativelanguage.googleapis.com/v1beta/models?key=" + urllib.parse.quote(key))
            if st == 200:
                n = len((json.loads(body) or {}).get("models", []))
                return {"ok": True, "status": "ok",
                        "summary": f"Key valid ({n} models) — usage in GCP console",
                        "used": None, "limit": None, "remaining": None, "pct": None, "detail": ""}
            return _usage_err(st, body)

        if prov == "mistral":
            st, body, _ = _api_http("https://api.mistral.ai/v1/models",
                                    headers={"Authorization": "Bearer " + key})
            if st == 200:
                n = len((json.loads(body) or {}).get("data", []))
                return {"ok": True, "status": "ok",
                        "summary": f"Key valid ({n} models) — usage on dashboard",
                        "used": None, "limit": None, "remaining": None, "pct": None, "detail": ""}
            return _usage_err(st, body)

        if prov == "resend":
            st, body, _ = _api_http("https://api.resend.com/domains",
                                    headers={"Authorization": "Bearer " + key})
            if st == 200:
                data = (json.loads(body) or {}).get("data", [])
                doms = ", ".join(d.get("name", "") for d in data) if isinstance(data, list) else ""
                return {"ok": True, "status": "ok",
                        "summary": f"Key valid — {len(data) if isinstance(data, list) else 0} domain(s)",
                        "used": None, "limit": None, "remaining": None, "pct": None,
                        "detail": (doms or "Free tier: 100/day · 3,000/mo")}
            # Resend returns 400/401 for a bad key, 403 for a valid but
            # permission-restricted (send-only) key — the latter is not an error.
            if st in (400, 401):
                return {"ok": True, "status": "err", "summary": f"{st} — invalid key",
                        "used": None, "limit": None, "remaining": None, "pct": None, "detail": (body or "")[:180]}
            if st == 403:
                return {"ok": True, "status": "ok", "summary": "Key valid — restricted (send-only)",
                        "used": None, "limit": None, "remaining": None, "pct": None,
                        "detail": "Key lacks domains:read; used by mail relays. Free tier: 100/day · 3,000/mo"}
            return _usage_err(st, body)
    except Exception as e:
        logger.debug("usage fetch failed for %s", entry.get("id"), exc_info=True)
        return {"ok": False, "status": "err", "summary": "fetch error: " + str(e)[:120],
                "used": None, "limit": None, "remaining": None, "pct": None, "detail": ""}
    return _usage_na()


def _subscription_token_valid() -> bool:
    """True when the shared admin subscription token (~/.claude/.credentials.json)
    exists and isn't expired — i.e. the Max/Pro PLAN is usable for members."""
    try:
        o = json.loads(SHARED_CREDENTIALS.read_text()).get("claudeAiOauth", {})
        return bool(o) and int(o.get("expiresAt") or 0) > int(time.time() * 1000)
    except Exception:
        return False


def _advisor_admin_token() -> str:
    try:
        return ADVISOR_ADMIN_TOKEN_FILE.read_text().strip()
    except OSError:
        return ""


PROMPT_AUDIT_FILE = MESSAGES_DIR / "prompt-history.jsonl"


_prompt_audit_lock = threading.Lock()


_prompt_audit_summary_cache: dict = {"signature": None, "data": {}}


def _prompt_audit_summary() -> dict[str, dict]:
    """Count prompts by account, reusing results while the audit file is unchanged."""
    try:
        stat = PROMPT_AUDIT_FILE.stat()
        signature = (stat.st_mtime_ns, stat.st_size)
    except OSError:
        return {}
    if _prompt_audit_summary_cache["signature"] == signature:
        return {
            key: dict(value)
            for key, value in _prompt_audit_summary_cache["data"].items()
        }

    summary: dict[str, dict] = {}
    with _prompt_audit_lock:
        try:
            with PROMPT_AUDIT_FILE.open(errors="replace") as stream:
                for raw in stream:
                    try:
                        entry = json.loads(raw)
                    except json.JSONDecodeError:
                        continue
                    user_id = str(entry.get("user_id", ""))
                    if not user_id:
                        continue
                    row = summary.setdefault(
                        user_id,
                        {"count": 0, "last_ts": 0, "last_direct_ts": 0},
                    )
                    row["count"] += 1
                    row["last_ts"] = max(
                        float(row["last_ts"]),
                        float(entry.get("ts", 0) or 0),
                    )
                    if not entry.get("impersonated_by_id"):
                        row["last_direct_ts"] = max(
                            float(row["last_direct_ts"]),
                            float(entry.get("ts", 0) or 0),
                        )
        except OSError:
            return {}
    _prompt_audit_summary_cache["signature"] = signature
    _prompt_audit_summary_cache["data"] = summary
    return {key: dict(value) for key, value in summary.items()}


def _load_longlived_token() -> str:
    """Compatibility shim for retired Claude browser-auth paths."""
    return ""


def _parse_usage_file(path: str | Path, date_prefix: str) -> tuple[int, int, int, int, int]:
    """Parse one Codex rollout's token deltas and assistant-message count.

    ``token_count`` events contain both cumulative totals and the last turn's
    delta; only ``last_token_usage`` is summed so repeated snapshots do not
    inflate usage.
    """
    input_tok = output_tok = cache_read = reasoning_tok = msg_count = 0
    with open(path) as stream:
        for line in stream:
            try:
                event = json.loads(line)
            except Exception:
                continue
            if not str(event.get("timestamp", "")).startswith(date_prefix):
                continue
            if event.get("type") != "event_msg":
                continue
            payload = event.get("payload", {}) or {}
            if payload.get("type") == "agent_message":
                msg_count += 1
                continue
            if payload.get("type") != "token_count":
                continue
            last = (payload.get("info", {}) or {}).get("last_token_usage", {}) or {}
            input_tok += int(last.get("input_tokens", 0) or 0)
            output_tok += int(last.get("output_tokens", 0) or 0)
            cache_read += int(last.get("cached_input_tokens", 0) or 0)
            reasoning_tok += int(last.get("reasoning_output_tokens", 0) or 0)
    return input_tok, output_tok, cache_read, reasoning_tok, msg_count


def _estimate_cost(inp: int, out: int, cr: int, cc: int, model: str) -> float:
    """Estimate cost in USD from one turn's Codex token counts.

    Delegates to :func:`_codex_turn_cost` so every usage view on the dashboard
    prices a turn the same way. ``cc`` (reasoning output) is accepted for the
    callers that still pass it but deliberately ignored: it is a subset of
    ``out``, so adding it again charged reasoning twice.
    """
    return _codex_turn_cost(inp, out, cr, model)


def _prompt_counts_by_user(cutoffs: dict[str, float]) -> dict[str, dict[str, int]]:
    """Count audited human prompts per account for each named time window."""
    counts: dict[str, dict[str, int]] = {}
    oldest = min(cutoffs.values()) if cutoffs else 0
    # Scanned in full rather than stopping at the first old record: the audit is
    # append-only in real time, but `_backfill_prompt_audit` appends historical
    # rows, so the file is not reliably sorted. It is one line per human prompt,
    # so a full pass is cheap and the result is cached for two minutes anyway.
    for entry in _iter_prompt_audit_reverse() or ():
        timestamp = float(entry.get("ts") or 0)
        if timestamp < oldest:
            continue
        user_id = str(entry.get("user_id") or "")
        if not user_id:
            continue
        row = counts.setdefault(user_id, {key: 0 for key in cutoffs})
        for window, cutoff in cutoffs.items():
            if timestamp >= cutoff:
                row[window] += 1
    return counts


def _codex_turn_cost(inp: int, out: int, cached: int, model: str) -> float:
    """List-price estimate for one Codex turn.

    ``cached_input_tokens`` is a SUBSET of ``input_tokens`` and
    ``reasoning_output_tokens`` a subset of ``output_tokens`` — Codex's own
    ``total_tokens`` is exactly ``input + output``. So the cached part is billed
    at the cache rate and only the remainder at the full input rate; reasoning
    is already inside ``output`` and must not be added again.
    """
    rate_in, rate_out, rate_cached = 1.25, 10.0, 0.125
    name = (model or "").lower()
    if "o3" in name and "mini" not in name:
        rate_in, rate_out, rate_cached = 2.0, 8.0, 0.5
    elif any(tag in name for tag in ("o3-mini", "o4-mini", "gpt-5-mini", "gpt-5.4-mini")):
        rate_in, rate_out, rate_cached = 0.25, 2.0, 0.025
    elif "gpt-4o-mini" in name:
        rate_in, rate_out, rate_cached = 0.15, 0.6, 0.075
    elif "gpt-4o" in name:
        rate_in, rate_out, rate_cached = 2.5, 10.0, 1.25
    fresh = max(0, inp - cached)
    return (fresh * rate_in + cached * rate_cached + out * rate_out) / 1e6


_rollout_lifetime_cache: dict[str, dict] = {}


def _iter_jsonl_reverse(path: Path, chunk_size: int = 64 * 1024):
    """Yield a JSONL file's raw lines newest-first without loading it in memory."""
    with path.open("rb") as stream:
        stream.seek(0, os.SEEK_END)
        position = stream.tell()
        carry = b""
        while position > 0:
            size = min(chunk_size, position)
            position -= size
            stream.seek(position)
            parts = (stream.read(size) + carry).split(b"\n")
            carry = parts[0]
            for raw in reversed(parts[1:]):
                if raw:
                    yield raw
        if carry:
            yield carry


def _rollout_lifetime_usage(path: str | Path) -> dict[str, int]:
    """Read one rollout's final cumulative token counter efficiently.

    Codex writes ``total_token_usage`` as a running total alongside every turn
    delta. The newest counter is therefore the rollout's lifetime total. Reading
    backward avoids rescanning very large transcripts merely to show an all-time
    figure. Old-format rollouts without a cumulative counter fall back to summing
    their deltas once.
    """
    rollout = Path(path)
    blank = {
        "inputTokens": 0, "outputTokens": 0, "cacheReadTokens": 0,
        "reasoningTokens": 0, "totalTokens": 0,
    }
    try:
        stat = rollout.stat()
    except OSError:
        return blank
    signature = (stat.st_mtime_ns, stat.st_size)
    key = str(rollout)
    cached = _rollout_lifetime_cache.get(key)
    if cached and cached.get("signature") == signature:
        return dict(cached["usage"])

    usage = None
    try:
        for raw in _iter_jsonl_reverse(rollout):
            if b'"token_count"' not in raw:
                continue
            try:
                event = json.loads(raw)
            except (json.JSONDecodeError, UnicodeDecodeError):
                continue
            if event.get("type") != "event_msg":
                continue
            payload = event.get("payload") or {}
            if payload.get("type") != "token_count":
                continue
            total = (payload.get("info") or {}).get("total_token_usage") or {}
            if not total:
                continue
            try:
                inp = int(total.get("input_tokens") or 0)
                out = int(total.get("output_tokens") or 0)
                cached_input = int(total.get("cached_input_tokens") or 0)
                reasoning = int(total.get("reasoning_output_tokens") or 0)
            except (TypeError, ValueError):
                continue
            usage = {
                "inputTokens": inp,
                "outputTokens": out,
                "cacheReadTokens": cached_input,
                "reasoningTokens": reasoning,
                "totalTokens": inp + out,
            }
            break
    except OSError:
        return blank

    if usage is None:
        try:
            inp, out, cached_input, reasoning, _ = _parse_usage_file(rollout, "")
            usage = {
                "inputTokens": inp,
                "outputTokens": out,
                "cacheReadTokens": cached_input,
                "reasoningTokens": reasoning,
                "totalTokens": inp + out,
            }
        except OSError:
            usage = blank

    _rollout_lifetime_cache[key] = {"signature": signature, "usage": dict(usage)}
    if len(_rollout_lifetime_cache) > 2048:
        _rollout_lifetime_cache.pop(next(iter(_rollout_lifetime_cache)), None)
    return dict(usage)


def _token_usage_for_home(codex_home: Path, cutoffs: dict[str, str]) -> dict[str, dict]:
    """Sum a CODEX_HOME's rollout token deltas into each named time window.

    ``token_count`` events carry both a running total and that turn's delta;
    only ``last_token_usage`` is summed so repeated snapshots cannot inflate the
    figures. Cutoffs are ISO-8601 strings compared against each record's own
    timestamp, so a thread spanning midnight lands in the right day.

    The reserved ``all`` window uses each rollout's final cumulative counter,
    which avoids rescanning multi-hundred-megabyte transcripts. Other windows
    sum timestamped deltas. ``totalTokens`` is ``input + output``, matching
    Codex's own ``total_tokens``; cached input and reasoning output are reported
    alongside as subsets, never added on top.
    """
    blank = {
        "inputTokens": 0, "outputTokens": 0, "cacheReadTokens": 0,
        "reasoningTokens": 0, "totalTokens": 0, "turns": 0, "estimatedCost": 0.0,
    }
    totals = {window: dict(blank) for window in cutoffs}
    sessions_dir = codex_home / "sessions"
    if not sessions_dir.exists():
        return totals
    active_cutoffs = {
        window: cutoff for window, cutoff in cutoffs.items() if window != "all"
    }
    oldest = min(active_cutoffs.values()) if active_cutoffs else ""
    for path in sessions_dir.rglob("rollout-*.jsonl"):
        try:
            if "all" in totals:
                lifetime = _rollout_lifetime_usage(path)
                for field in (
                    "inputTokens", "outputTokens", "cacheReadTokens",
                    "reasoningTokens", "totalTokens",
                ):
                    totals["all"][field] += lifetime[field]
            if not active_cutoffs:
                continue
            # Cheap skip: a file untouched since before the widest window can
            # hold nothing inside it.
            mtime = datetime.fromtimestamp(path.stat().st_mtime, timezone.utc)
            if mtime.isoformat() < oldest:
                continue
            model = DEFAULT_MODEL
            with open(path, errors="replace") as stream:
                for line in stream:
                    try:
                        event = json.loads(line)
                    except Exception:
                        continue
                    if event.get("type") == "turn_context":
                        model = (event.get("payload") or {}).get("model") or model
                        continue
                    if event.get("type") != "event_msg":
                        continue
                    payload = event.get("payload") or {}
                    if payload.get("type") != "token_count":
                        continue
                    timestamp = str(event.get("timestamp") or "")
                    last = (payload.get("info") or {}).get("last_token_usage") or {}
                    inp = int(last.get("input_tokens") or 0)
                    out = int(last.get("output_tokens") or 0)
                    cached = int(last.get("cached_input_tokens") or 0)
                    reasoning = int(last.get("reasoning_output_tokens") or 0)
                    if not (inp or out):
                        continue
                    cost = _codex_turn_cost(inp, out, cached, model)
                    for window, cutoff in active_cutoffs.items():
                        if timestamp < cutoff:
                            continue
                        bucket = totals[window]
                        bucket["inputTokens"] += inp
                        bucket["outputTokens"] += out
                        bucket["cacheReadTokens"] += cached
                        bucket["reasoningTokens"] += reasoning
                        bucket["totalTokens"] += inp + out
                        bucket["turns"] += 1
                        bucket["estimatedCost"] += cost
        except Exception:
            logger.debug("Failed to parse rollout '%s' for usage", path, exc_info=True)
    for bucket in totals.values():
        bucket["estimatedCost"] = round(bucket["estimatedCost"], 2)
    return totals


def _usage_by_account() -> dict:
    """Prompts and tokens per dashboard account, including retained history."""
    now_dt = datetime.now(timezone.utc)
    today_start = now_dt.replace(hour=0, minute=0, second=0, microsecond=0)
    week_start = now_dt - timedelta(days=7)
    ts_cutoffs = {"today": today_start.timestamp(), "week": week_start.timestamp()}
    iso_cutoffs = {
        "today": today_start.isoformat(), "week": week_start.isoformat(), "all": "",
    }

    prompt_counts = _prompt_counts_by_user(ts_cutoffs)
    prompt_totals = _prompt_audit_summary()
    rows = []
    totals = {
        "promptsToday": 0, "promptsWeek": 0, "promptsTotal": 0,
        "tokensToday": 0, "tokensWeek": 0, "tokensTotal": 0,
        "costToday": 0.0, "costWeek": 0.0,
    }
    for user in _load_users():
        if not user:
            continue
        user_id = str(user.get("id") or "")
        tokens = _token_usage_for_home(_user_codex_config_dir(user), iso_cutoffs)
        prompts = prompt_counts.get(user_id, {"today": 0, "week": 0})
        row = {
            "user_id": user_id,
            "username": str(user.get("username") or ""),
            "role": str(user.get("role") or "user"),
            "promptsToday": prompts.get("today", 0),
            "promptsWeek": prompts.get("week", 0),
            "promptsTotal": int((prompt_totals.get(user_id) or {}).get("count") or 0),
            "today": tokens["today"],
            "week": tokens["week"],
            "all": tokens["all"],
        }
        rows.append(row)
        totals["promptsToday"] += row["promptsToday"]
        totals["promptsWeek"] += row["promptsWeek"]
        totals["promptsTotal"] += row["promptsTotal"]
        totals["tokensToday"] += tokens["today"]["totalTokens"]
        totals["tokensWeek"] += tokens["week"]["totalTokens"]
        totals["tokensTotal"] += tokens["all"]["totalTokens"]
        totals["costToday"] += tokens["today"]["estimatedCost"]
        totals["costWeek"] += tokens["week"]["estimatedCost"]
    totals["costToday"] = round(totals["costToday"], 2)
    totals["costWeek"] = round(totals["costWeek"], 2)
    rows.sort(
        key=lambda row: (row["week"]["totalTokens"], row["promptsWeek"]),
        reverse=True,
    )
    return {
        "generatedAt": now_dt.timestamp(),
        "todayStart": today_start.isoformat(),
        "weekStart": week_start.isoformat(),
        "users": rows,
        "totals": totals,
    }


_session_stats_cache: dict[str, dict] = {}


def _find_session_jsonl_files(session_name: str) -> list:
    """Find codex rollout JSONL files whose recorded cwd matches the tmux session's cwd.

    Codex sessions are stored at ~/.codex/sessions/YYYY/MM/DD/rollout-*.jsonl
    and the cwd is recorded in the session_meta event at line 1.
    """
    cwd = get_session_cwd(session_name)
    if not cwd:
        return []
    cwd_norm = cwd.rstrip("/")
    # Pick the store that belongs to THIS session's agent. A directory commonly
    # holds both Codex rollouts and Claude transcripts, so searching Codex first
    # and falling back would hand a Claude session someone else's Codex file --
    # which then fails to match and drops it onto the terminal scrape.
    if _session_agent_kind is not None and _session_agent_kind(session_name) == "claude":
        return _find_claude_transcripts(cwd_norm)
    sessions_home = _session_config_base(session_name)
    sessions_dir = sessions_home / "sessions"
    if not sessions_dir.exists():
        return []
    matches = []
    # Look back up to 30 days for performance.
    for fpath in sessions_dir.rglob("rollout-*.jsonl"):
        try:
            mtime = fpath.stat().st_mtime
            if time.time() - mtime > 30 * 86400:
                continue
            with open(fpath) as f:
                first = f.readline()
            if not first:
                continue
            try:
                meta = json.loads(first)
            except Exception:
                continue
            if meta.get("type") != "session_meta":
                continue
            mcwd = (meta.get("payload", {}) or {}).get("cwd", "").rstrip("/")
            if mcwd == cwd_norm:
                matches.append(str(fpath))
        except Exception:
            logger.debug("Failed to peek rollout %s", fpath, exc_info=True)
    return matches or _find_claude_transcripts(cwd_norm)


def _find_claude_transcripts(cwd: str) -> list:
    """Claude's transcripts for a working directory, newest first.

    Claude stores them at ~/.claude/projects/<cwd with / replaced by ->/<uuid>.jsonl
    rather than in Codex's ~/.codex/sessions tree. Without this a Claude session
    matched no transcript at all, so every reply fell back to scraping the
    terminal pane -- which truncates long answers and drags the CLI's own
    chrome ("Auto-update failed…") in with the text.
    """
    if not cwd:
        return []
    root = Path.home() / ".claude" / "projects" / cwd.replace("/", "-")
    if not root.is_dir():
        return []
    try:
        files = [f for f in root.glob("*.jsonl") if f.is_file()]
    except OSError:
        return []
    cutoff = time.time() - 30 * 86400
    fresh = [f for f in files if f.stat().st_mtime > cutoff]
    fresh.sort(key=lambda f: f.stat().st_mtime, reverse=True)
    return [str(f) for f in fresh]


def _parse_session_stats(session_name: str) -> dict:
    """Parse JSONL files and compute per-session token stats with rate tracking."""
    now = time.time()
    cached = _session_stats_cache.get(session_name)
    if cached and now - cached.get("_ts", 0) < 15:
        return cached

    files = _find_session_jsonl_files(session_name)
    if not files:
        result = {"available": False, "_ts": now}
        _session_stats_cache[session_name] = result
        return result

    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    now_epoch = now

    # Collect all assistant messages with usage from today
    entries = []  # (epoch_seconds, input_tok, output_tok, cache_read, cache_create, model)
    total_input = 0
    total_output = 0
    total_cache_read = 0
    total_cache_create = 0
    msg_count = 0
    models_seen = {}
    latest_model = "unknown"  # Track the most recently used model
    latest_model_ts = ""
    latest_input_tokens = 0
    latest_context_tokens = 0
    latest_context_window = 0
    estimated_cost = 0.0

    for fpath in files:
        try:
            mtime = os.path.getmtime(fpath)
            if datetime.fromtimestamp(mtime, timezone.utc).strftime("%Y-%m-%d") < today:
                continue
            current_model = _CODEX_DEFAULT_MODEL
            with open(fpath) as f:
                for line in f:
                    d = json.loads(line)
                    if d.get("type") == "turn_context":
                        current_model = d.get("payload", {}).get("model") or current_model
                        continue
                    if d.get("type") != "event_msg":
                        continue
                    payload = d.get("payload", {}) or {}
                    if payload.get("type") != "token_count":
                        continue
                    ts_str = d.get("timestamp", "")
                    if not ts_str.startswith(today):
                        continue
                    usage = (payload.get("info", {}) or {}).get("last_token_usage", {}) or {}
                    if not usage:
                        continue
                    info = payload.get("info", {}) or {}
                    inp = usage.get("input_tokens", 0)
                    out = usage.get("output_tokens", 0)
                    cr = usage.get("cached_input_tokens", 0)
                    cc = usage.get("reasoning_output_tokens", 0)
                    model = current_model

                    total_input += inp
                    total_output += out
                    total_cache_read += cr
                    total_cache_create += cc
                    msg_count += 1
                    models_seen[model] = models_seen.get(model, 0) + 1
                    estimated_cost += _estimate_cost(inp, out, cr, cc, model)
                    if ts_str >= latest_model_ts:
                        latest_model_ts = ts_str
                        latest_model = model
                        latest_input_tokens = int(usage.get("input_tokens", 0) or 0)
                        total_usage = info.get("total_token_usage", {}) or {}
                        latest_context_tokens = int(total_usage.get("total_tokens", 0) or 0)
                        latest_context_window = int(info.get("model_context_window", 0) or 0)

                    # Parse timestamp to epoch for rate calc
                    try:
                        dt = datetime.fromisoformat(ts_str.replace("Z", "+00:00"))
                        epoch = dt.timestamp()
                        entries.append((epoch, inp, out, cr, cc))
                    except Exception:
                        logger.debug("Failed to parse timestamp in stats JSONL entry", exc_info=True)
        except Exception:
            logger.debug("Failed to read stats JSONL for '%s'", session_name, exc_info=True)

    if not entries:
        result = {"available": False, "_ts": now}
        _session_stats_cache[session_name] = result
        return result

    # Sort by timestamp
    entries.sort(key=lambda e: e[0])

    # Use the most recently used model for display (cost was accumulated per event).
    primary_model = latest_model if latest_model != "unknown" else (max(models_seen, key=models_seen.get) if models_seen else "unknown")

    # Rate calculation: bucket into 1-minute windows
    # Only consider windows with meaningful output (> 10 output tokens = actually streaming)
    buckets = {}  # minute_epoch -> {input, output, total}
    for epoch, inp, out, cr, cc in entries:
        minute = int(epoch // 60) * 60
        b = buckets.setdefault(minute, {"input": 0, "output": 0, "total": 0})
        b["input"] += inp
        b["output"] += out
        b["total"] += inp + out

    # Active minutes: only windows with meaningful output (streaming, not just tool calls)
    active_minutes = [m for m, b in buckets.items() if b["output"] > 10]
    active_minutes.sort()

    # Peak rate: median of top 5 windows (avoid outlier spikes)
    output_rates = sorted([b["output"] for b in buckets.values() if b["output"] > 10], reverse=True)
    peak_output_rate = 0
    if output_rates:
        top = output_rates[:5]
        peak_output_rate = top[len(top) // 2]  # median of top 5

    # Recent rate: last 3 active minutes within the past 10 minutes
    recent_output_rate = 0
    cutoff = now_epoch - 600  # 10 minutes ago
    recent_active = [m for m in active_minutes if m >= cutoff]
    if recent_active:
        recent_mins = recent_active[-3:]
        recent_output_rate = int(sum(buckets[m]["output"] for m in recent_mins) / len(recent_mins))

    # Rate limit detection: only meaningful when session is currently busy
    # and has recent activity (within last 5 minutes)
    rate_status = "normal"
    rate_pct = 100
    activity = detect_activity(session_name)
    is_busy = activity["status"] == "busy"
    has_recent = recent_active and (now_epoch - recent_active[-1]) < 300

    if peak_output_rate > 100 and recent_output_rate > 0 and has_recent:
        rate_pct = min(100, int(recent_output_rate / peak_output_rate * 100))
        if is_busy and rate_pct < 30:
            rate_status = "severely_limited"
        elif is_busy and rate_pct < 60:
            rate_status = "limited"
    elif not has_recent:
        rate_pct = 0  # no recent data

    # Time since last activity
    last_active = entries[-1][0] if entries else 0
    secs_since_last = int(now_epoch - last_active) if last_active else -1

    # Session duration (first to last entry)
    session_start = entries[0][0]
    session_duration_min = int((entries[-1][0] - session_start) / 60) if len(entries) > 1 else 0

    result = {
        "available": True,
        "model": primary_model,
        "messageCount": msg_count,
        "totalInput": total_input,
        "totalOutput": total_output,
        "cacheRead": total_cache_read,
        "cacheCreate": total_cache_create,
        "totalTokens": total_input + total_output,
        "estimatedCost": round(estimated_cost, 4),
        "peakOutputRate": peak_output_rate,  # tokens/min
        "peakTotalRate": peak_output_rate,
        "recentOutputRate": recent_output_rate,
        "recentTotalRate": recent_output_rate,
        "rateStatus": rate_status,  # normal | limited | severely_limited
        "ratePct": rate_pct,
        "activeMinutes": len(active_minutes),
        "sessionDurationMin": session_duration_min,
        "secsSinceLastActivity": secs_since_last,
        "modelsUsed": models_seen,
        "contextPct": (
            round(latest_context_tokens / latest_context_window * 100, 1)
            if latest_context_window else 0
        ),
        "lastInputTokens": latest_input_tokens,
        "ctxWindowSize": latest_context_window,
        "_ts": now,
    }
    _session_stats_cache[session_name] = result
    return result
