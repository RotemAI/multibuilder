"""Suite-wide environment that must exist before any test module imports app."""
import os


os.environ["TMUX_DASH_SECRET"] = "test-secret-key-for-testing"
os.environ["TMUX_DASH_PASS"] = "testpass"
os.environ["TMUX_DASH_USER"] = "admin"
os.environ["OPENAI_API_KEY"] = "sk-test-not-real"
os.environ["TMUX_DASH_COOKIE"] = "tmux_auth"
os.environ["TMUX_DASH_PROCESS_ROLE"] = "combined"
os.environ["TMUX_DASH_ROOT_PATH"] = ""
