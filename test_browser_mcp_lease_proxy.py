import os
import signal
import subprocess
import sys
import time
from pathlib import Path

import pytest

import browser_mcp_lease_proxy as proxy


def test_missing_local_playwright_cli_uses_pinned_package_runner(monkeypatch, tmp_path):
    monkeypatch.setattr(proxy, "_host_home", lambda: tmp_path)
    monkeypatch.setattr(proxy, "BROWSER_CDP_PORT", 9333)
    monkeypatch.setattr(proxy, "BROWSER_OUTPUT_DIR", Path("/tmp/browser-output"))

    assert proxy._default_upstream_command() == [
        "npx",
        "--yes",
        "@playwright/mcp@0.0.82",
        "--cdp-endpoint",
        "http://127.0.0.1:9333",
        "--output-dir",
        "/tmp/browser-output",
    ]


def test_upstream_environment_skips_browser_download_by_default(monkeypatch):
    monkeypatch.delenv("PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD", raising=False)

    assert proxy._upstream_environment()["PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD"] == "1"


@pytest.mark.parametrize("shutdown", ("eof", "terminate"))
def test_proxy_reaps_upstream_descendants_on_shutdown(tmp_path, shutdown):
    child_pid_file = tmp_path / "child.pid"
    stub = tmp_path / "stub_upstream.py"
    stub.write_text(
        "import subprocess, sys\n"
        "from pathlib import Path\n"
        "child = subprocess.Popen([sys.executable, '-c', "
        "'import time; time.sleep(60)'], stdin=subprocess.DEVNULL, "
        "stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)\n"
        "Path(sys.argv[1]).write_text(str(child.pid))\n"
        "sys.stdin.buffer.read()\n"
    )
    runner = subprocess.Popen(
        [sys.executable, proxy.__file__, sys.executable, str(stub), str(child_pid_file)],
        stdin=subprocess.PIPE,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
    )
    child_pid = 0
    child_gone = False
    try:
        deadline = time.monotonic() + 5
        while time.monotonic() < deadline and not child_pid_file.exists():
            time.sleep(0.02)
        if not child_pid_file.exists():
            raise TimeoutError("stub upstream did not start its child")
        child_pid = int(child_pid_file.read_text())
        if shutdown == "eof":
            runner.stdin.close()
        else:
            runner.terminate()
        runner.wait(timeout=5)
        deadline = time.monotonic() + 3
        while time.monotonic() < deadline:
            try:
                os.kill(child_pid, 0)
            except ProcessLookupError:
                child_gone = True
                break
            time.sleep(0.02)
    finally:
        if runner.poll() is None:
            runner.kill()
            runner.wait(timeout=3)
        if child_pid and not child_gone:
            try:
                os.kill(child_pid, signal.SIGKILL)
            except ProcessLookupError:
                pass

    assert child_gone
