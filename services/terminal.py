"""Shared terminal stream fan-out.

Extracted from app.py. One tmux pane can have many browser viewers; this keeps
the per-session subscriber channels and broadcasts pane output to all of them.

A leaf module: no application imports, no injected dependencies.
"""

from __future__ import annotations

import asyncio
import json
import logging
import time

from core.config import CONTROLLER_SOCKET, PROCESS_ROLE
from services.tmux import (
    _visible_pane_hash,
    capture_pane_full,
    capture_pane_recent,
    get_pane_position,
    get_pane_width,
)

logger = logging.getLogger("codex-dashboard")


# --- Shared terminal stream + controller IPC -------------------------------
# One controller process owns one tmux capture loop per viewed session. API
# workers only relay its line-delimited JSON over authenticated WebSockets.
_terminal_channels: dict[str, dict] = {}


def _terminal_full_payload(session_name: str) -> tuple[dict, str, int, str, int]:
    pos = get_pane_position(session_name)
    pane_total = int(pos.get("total_lines", 0))
    visible_hash = _visible_pane_hash(session_name)
    pane_width = get_pane_width(session_name)
    raw = capture_pane_full(session_name)
    payload = {
        "mode": "full",
        "raw": raw,
        "total_lines": len(raw.split("\n")),
        "pane_total": pane_total,
        "pane_width": pane_width,
        "visible_hash": visible_hash,
    }
    return payload, raw, pane_total, visible_hash, pane_width


def _terminal_next_payload(session_name: str, channel: dict) -> dict | None:
    """Capture one shared delta while maintaining a full reconnect snapshot."""
    pos = get_pane_position(session_name)
    current_total = int(pos.get("total_lines", 0))
    visible_hash = _visible_pane_hash(session_name)
    pane_width = get_pane_width(session_name)
    known = int(channel.get("pane_total", 0))
    full_text = str(channel.get("full_text", ""))

    if not full_text or current_total < known:
        payload, raw, total, vis, width = _terminal_full_payload(session_name)
        channel.update(
            full_text=raw, pane_total=total, visible_hash=vis, pane_width=width
        )
        return payload

    if current_total > known:
        overlap = 5
        lines_from_end = (current_total - known) + overlap
        raw = capture_pane_recent(session_name, lines_from_end)
        incoming = raw.split("\n")
        existing = full_text.split("\n")
        if len(existing) >= overlap and existing[-overlap:] == incoming[:overlap]:
            tail = incoming[overlap:]
            if tail:
                channel["full_text"] = full_text + "\n" + "\n".join(tail)
            channel.update(
                pane_total=current_total,
                visible_hash=visible_hash,
                pane_width=pane_width,
            )
            return {
                "mode": "delta",
                "raw": raw,
                "total_lines": current_total,
                "pane_total": current_total,
                "pane_width": pane_width,
                "overlap": overlap,
                "visible_hash": visible_hash,
            }
        payload, raw, total, vis, width = _terminal_full_payload(session_name)
        channel.update(
            full_text=raw, pane_total=total, visible_hash=vis, pane_width=width
        )
        return payload

    if visible_hash and visible_hash != channel.get("visible_hash"):
        payload, raw, total, vis, width = _terminal_full_payload(session_name)
        channel.update(
            full_text=raw, pane_total=total, visible_hash=vis, pane_width=width
        )
        return payload

    channel.update(visible_hash=visible_hash, pane_width=pane_width)
    return None


async def _terminal_send(writer: asyncio.StreamWriter, payload: dict) -> bool:
    try:
        writer.write((json.dumps(payload, separators=(",", ":")) + "\n").encode())
        await asyncio.wait_for(writer.drain(), timeout=3)
        return True
    except Exception:
        return False


async def _terminal_broadcast(session_name: str, payload: dict) -> None:
    channel = _terminal_channels.get(session_name)
    if not channel:
        return
    writers = list(channel.get("writers", set()))
    if not writers:
        return
    results = await asyncio.gather(
        *(_terminal_send(writer, payload) for writer in writers),
        return_exceptions=True,
    )
    for writer, ok in zip(writers, results):
        if ok is not True:
            channel["writers"].discard(writer)
            try:
                writer.close()
            except Exception:
                pass


async def _terminal_producer(session_name: str) -> None:
    channel = _terminal_channels[session_name]
    quiet_ticks = 0
    try:
        while channel.get("writers"):
            try:
                payload = await asyncio.to_thread(
                    _terminal_next_payload, session_name, channel
                )
                if payload:
                    quiet_ticks = 0
                    channel["last_emit"] = time.time()
                    await _terminal_broadcast(session_name, payload)
                else:
                    quiet_ticks += 1
                    if time.time() - channel.get("last_emit", 0) >= 20:
                        channel["last_emit"] = time.time()
                        await _terminal_broadcast(
                            session_name,
                            {
                                "mode": "ping",
                                "pane_total": channel.get("pane_total", 0),
                                "pane_width": channel.get("pane_width", 0),
                                "visible_hash": channel.get("visible_hash", ""),
                            },
                        )
            except Exception as exc:
                await _terminal_broadcast(
                    session_name, {"mode": "error", "error": str(exc)[:240]}
                )
                quiet_ticks += 1
            await asyncio.sleep(0.6 if quiet_ticks < 5 else min(2.0, 0.8 + quiet_ticks / 10))
    finally:
        channel["task"] = None
        if not channel.get("writers"):
            _terminal_channels.pop(session_name, None)


async def _terminal_subscribe(
    session_name: str, writer: asyncio.StreamWriter
) -> dict:
    channel = _terminal_channels.setdefault(
        session_name,
        {
            "writers": set(),
            "task": None,
            "full_text": "",
            "pane_total": 0,
            "visible_hash": "",
            "pane_width": 0,
            "last_emit": 0.0,
        },
    )
    channel["writers"].add(writer)
    if channel.get("full_text"):
        await _terminal_send(
            writer,
            {
                "mode": "full",
                "raw": channel["full_text"],
                "total_lines": len(channel["full_text"].split("\n")),
                "pane_total": channel.get("pane_total", 0),
                "pane_width": channel.get("pane_width", 0),
                "visible_hash": channel.get("visible_hash", ""),
            },
        )
    if not channel.get("task") or channel["task"].done():
        channel["task"] = asyncio.create_task(_terminal_producer(session_name))
    return channel


async def _terminal_unsubscribe(session_name: str, writer: asyncio.StreamWriter) -> None:
    channel = _terminal_channels.get(session_name)
    if not channel:
        return
    channel.get("writers", set()).discard(writer)
    if not channel.get("writers") and channel.get("task"):
        channel["task"].cancel()


async def _controller_terminal_connection(session_name: str):
    if PROCESS_ROLE != "api":
        return None, None
    reader, writer = await asyncio.open_unix_connection(
        str(CONTROLLER_SOCKET), limit=32 * 1024 * 1024
    )
    writer.write((json.dumps({"op": "terminal_subscribe", "session": session_name}) + "\n").encode())
    await writer.drain()
    return reader, writer
