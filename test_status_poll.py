"""Run the status-poll suite in test_status_poll.js under pytest too."""
import shutil
import subprocess
from pathlib import Path

import pytest

JS = Path(__file__).with_suffix(".js")


@pytest.mark.skipif(shutil.which("node") is None, reason="node is not installed")
def test_status_poll_failover():
    proc = subprocess.run(["node", str(JS)], capture_output=True, text=True, timeout=120)
    assert proc.returncode == 0, proc.stdout + proc.stderr
    assert "all 5 passed" in proc.stdout
