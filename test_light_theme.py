from pathlib import Path

import voice_mode


HTML_PAGE = Path(__file__).with_name('app.py').read_text()


def test_dashboard_defaults_to_dark_theme():
    assert '<body>' in HTML_PAGE
    assert 'data-theme="light"' not in HTML_PAGE


def test_voice_prompt_dispatches_clear_tasks_to_attached_sessions():
    prompt = voice_mode.VOICE_PROMPT + voice_mode.BACKEND_PROMPT
    assert 'call send_instructions immediately' in prompt
