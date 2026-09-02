"""HMAC token and state-parameter signing.

Extracted from app.py as pure primitives: they take the signing secret as an
argument rather than importing it, because AUTH_SECRET falls back to a freshly
generated `secrets.token_hex(32)` when TMUX_DASH_SECRET is unset. A second
module defining or re-deriving it would produce a different value and silently
invalidate every signed cookie, so the secret keeps exactly one definition, in
app.py, and is passed in.

Nothing here imports from the application, so it is safe to import anywhere.
"""

from __future__ import annotations

import base64
import hashlib
import hmac

# Signatures are truncated to 24 hex characters (96 bits). That is well beyond
# forgery range for this use and keeps cookie values short.
_SIGNATURE_LENGTH = 24


def _signature(secret: str, payload: str) -> str:
    return hmac.new(
        secret.encode(), payload.encode(), hashlib.sha256
    ).hexdigest()[:_SIGNATURE_LENGTH]


def make_token(secret: str, user_id: str) -> str:
    """A `<user_id>:<signature>` bearer token."""
    return f"{user_id}:{_signature(secret, user_id)}"


def check_token(secret: str, token: str) -> bool:
    """Verify a token produced by `make_token`.

    Uses `compare_digest` so verification does not leak signature bytes through
    timing.
    """
    if not token or ":" not in token:
        return False
    user_id, sig = token.split(":", 1)
    return hmac.compare_digest(sig, _signature(secret, user_id))


def sign_state(secret: str, payload: str) -> str:
    """Sign an OAuth `state` value and wrap it for URL transport."""
    signed = payload + "|" + _signature(secret, payload)
    return base64.urlsafe_b64encode(signed.encode()).decode()


def verify_state(secret: str, state: str) -> str | None:
    """Recover the payload from `sign_state`, or None if it does not verify."""
    try:
        raw = base64.urlsafe_b64decode(state.encode()).decode()
        payload, sig = raw.rsplit("|", 1)
    except Exception:  # noqa: BLE001 - malformed input is simply not valid
        return None
    if hmac.compare_digest(sig, _signature(secret, payload)):
        return payload
    return None
