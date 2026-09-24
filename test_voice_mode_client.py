"""Static client-contract checks for Voice Mode startup behavior."""

from pathlib import Path


SOURCE = Path(__file__).with_name("voice-mode.js").read_text()


def test_open_immediately_starts_voice_from_the_opening_click():
    opened = SOURCE.index("async function open(session)")
    status_request = SOURCE.index("/voice/status", opened)
    start = SOURCE.index("void start();", opened)

    assert start < status_request
    assert "mode='continuous';muted=false;capturing=false;" in SOURCE[opened:start]


def test_continuous_start_primes_the_acquired_microphone_track_on():
    acquired = SOURCE.index("const acquired = await navigator.mediaDevices.getUserMedia")
    negotiation = SOURCE.index("const peer = new RTCPeerConnection()", acquired)
    setup = SOURCE[acquired:negotiation]

    assert "capturing = mode === 'continuous' && !muted && !document.hidden;" in setup
    assert "t.enabled=capturing" in setup
    assert "t.enabled=false" not in setup


def test_connect_button_remains_as_one_retry_control():
    assert SOURCE.count('id="voice-start"') == 1
