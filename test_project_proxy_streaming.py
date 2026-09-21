"""Exercise the actual proxy helper without importing app startup or agents."""

import ast
import asyncio
import gzip
import threading
import time
import urllib.error
import urllib.request
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

import httpx
import pytest
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, Response, StreamingResponse
from starlette.requests import ClientDisconnect


@pytest.fixture
def proxy():
    source = ast.parse(Path(__file__).with_name("app.py").read_text())
    node = next(n for n in source.body if isinstance(n, ast.AsyncFunctionDef)
                and n.name == "_proxy_to_port")
    namespace = dict(globals())
    exec(compile(ast.Module(body=[node], type_ignores=[]), "app.py", "exec"), namespace)
    return namespace["_proxy_to_port"]


@pytest.fixture
def upstream():
    release = threading.Event()
    requests = []

    class Handler(BaseHTTPRequestHandler):
        protocol_version = "HTTP/1.1"

        def log_message(self, *args):
            pass

        def do_GET(self):
            requests.append((self.command, self.path, dict(self.headers), b""))
            if self.path.startswith("/stream"):
                self.send_response(200)
                self.send_header("Content-Type", "text/event-stream")
                self.send_header("Transfer-Encoding", "chunked")
                self.send_header("Cache-Control", "no-cache")
                self.end_headers()
                self.wfile.write(b"d\r\ndata: first\n\n\r\n")
                self.wfile.flush()
                release.wait(1.5)  # Broken implementations must fail, never hang.
                try:
                    self.wfile.write(b"0\r\n\r\n")
                    self.wfile.flush()
                except (BrokenPipeError, ConnectionResetError):
                    pass
                return
            body = gzip.compress(b"project response") if self.path == "/gzip" else b"project error"
            self.send_response(200 if self.path == "/gzip" else 503)
            self.send_header("Content-Type", "application/octet-stream")
            self.send_header("Content-Length", str(len(body)))
            if self.path == "/gzip":
                self.send_header("Content-Encoding", "gzip")
            self.end_headers()
            self.wfile.write(body)

        def do_POST(self):
            body = self.rfile.read(int(self.headers.get("Content-Length", 0)))
            requests.append((self.command, self.path, dict(self.headers), body))
            self.send_response(201)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)

    server = ThreadingHTTPServer(("127.0.0.1", 0), Handler)
    worker = threading.Thread(target=server.serve_forever, daemon=True)
    worker.start()
    yield server.server_port, release, requests
    release.set()
    server.shutdown()
    server.server_close()
    worker.join(timeout=2)


def request(method="GET", query=b"", body=b"", headers=()):
    async def receive():
        return {"type": "http.request", "body": body, "more_body": False}
    return Request({"type": "http", "method": method, "path": "/project",
                    "query_string": query, "headers": list(headers)}, receive)


async def read_body(response):
    if isinstance(response, StreamingResponse):
        return b"".join([chunk async for chunk in response.body_iterator])
    return response.body


@pytest.mark.asyncio
async def test_open_stream_delivers_first_event_and_leaves_dashboard_responsive(proxy, upstream):
    port, release, _ = upstream
    started = time.monotonic()
    response = await proxy(request(), port, "stream")
    try:
        assert time.monotonic() - started < 0.75, "Proxy waited for stream EOF on the event loop"
        assert isinstance(response, StreamingResponse)
        first = await asyncio.wait_for(anext(response.body_iterator), 0.5)
        assert first == b"data: first\n\n"
        assert response.headers["x-accel-buffering"] == "no"
        assert response.headers["cache-control"] == "no-cache"
        assert "transfer-encoding" not in response.headers

        app = FastAPI()

        @app.get("/health")
        async def health():
            return {"ok": True}

        async with httpx.AsyncClient(transport=httpx.ASGITransport(app), base_url="http://test") as client:
            result = await asyncio.wait_for(client.get("/health"), 0.5)
        assert result.json() == {"ok": True}
        assert not release.is_set()
    finally:
        release.set()
        if isinstance(response, StreamingResponse):
            await response.body_iterator.aclose()


@pytest.mark.asyncio
@pytest.mark.parametrize("path,status", [("error", 503), ("gzip", 200)])
async def test_status_and_encoded_response_are_preserved(proxy, upstream, path, status):
    response = await proxy(request(), upstream[0], path)
    assert response.status_code == status
    body = await read_body(response)
    if path == "gzip":
        assert response.headers["content-encoding"] == "gzip"
        assert gzip.decompress(body) == b"project response"
    else:
        assert body == b"project error"


@pytest.mark.asyncio
async def test_post_preserves_query_body_and_only_allowed_request_headers(proxy, upstream):
    port, _, requests = upstream
    body = b'{"value":1}'
    response = await proxy(request("POST", b"q=a%20b", body, [
        (b"content-type", b"application/json"), (b"cookie", b"dashboard=private"),
        (b"authorization", b"Bearer private"),
    ]), port, "echo")
    assert response.status_code == 201
    assert await read_body(response) == body
    method, path, headers, received = requests[-1]
    assert (method, path, received) == ("POST", "/echo?q=a%20b", body)
    headers = {key.lower(): value for key, value in headers.items()}
    assert headers["content-type"] == "application/json"
    assert "cookie" not in headers and "authorization" not in headers


@pytest.mark.asyncio
async def test_unavailable_upstream_returns_502(proxy):
    server = ThreadingHTTPServer(("127.0.0.1", 0), BaseHTTPRequestHandler)
    port = server.server_port
    server.server_close()
    response = await proxy(request(), port, "")
    assert response.status_code == 502


@pytest.mark.asyncio
async def test_cancelled_stream_closes_upstream_and_client(proxy, upstream, monkeypatch):
    clients = []
    responses = []

    class TrackedClient(httpx.AsyncClient):
        def __init__(self, *args, **kwargs):
            super().__init__(*args, **kwargs)
            clients.append(self)

        async def send(self, *args, **kwargs):
            response = await super().send(*args, **kwargs)
            responses.append(response)
            return response

    monkeypatch.setattr(httpx, "AsyncClient", TrackedClient)
    response = await proxy(request(), upstream[0], "stream")
    assert await anext(response.body_iterator) == b"data: first\n\n"
    pending = asyncio.create_task(anext(response.body_iterator))
    await asyncio.sleep(0.02)
    pending.cancel()
    with pytest.raises(asyncio.CancelledError):
        await pending
    assert responses[0].is_closed and clients[0].is_closed


@pytest.mark.asyncio
async def test_disconnect_before_response_headers_closes_connections(proxy, upstream, monkeypatch):
    clients = []
    responses = []

    class TrackedClient(httpx.AsyncClient):
        def __init__(self, *args, **kwargs):
            super().__init__(*args, **kwargs)
            clients.append(self)

        async def send(self, *args, **kwargs):
            response = await super().send(*args, **kwargs)
            responses.append(response)
            return response

    monkeypatch.setattr(httpx, "AsyncClient", TrackedClient)
    response = await proxy(request(), upstream[0], "stream")

    async def send(message):
        raise OSError("client disconnected before headers")

    async def receive():
        return {"type": "http.disconnect"}

    with pytest.raises(ClientDisconnect):
        await response({"type": "http", "asgi": {"spec_version": "2.4"}}, receive, send)
    assert responses[0].is_closed and clients[0].is_closed
