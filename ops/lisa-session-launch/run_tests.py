"""Keep dashboard test state in a temporary account directory."""
import os
import pathlib
import sys
import tempfile
from unittest.mock import patch
root=pathlib.Path(__file__).resolve().parent/'runtime'
sys.path[:0]=[str(root),str(root/'runtime_hooks')]
import pytest
os.environ.update(TMUX_DASH_ROOT_PATH="", TMUX_DASH_PROCESS_ROLE="combined", TMUX_DASH_COOKIE="tmux_auth", TMUX_DASH_USER="admin", TMUX_DASH_PASS="testpass", TMUX_DASH_SECRET="test-secret-key-for-testing")
with tempfile.TemporaryDirectory(prefix='builder5-close-tests-') as directory:
    with patch.object(pathlib.Path, 'home', return_value=pathlib.Path(directory)):
        raise SystemExit(pytest.main(sys.argv[1:]))
