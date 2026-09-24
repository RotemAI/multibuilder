#!/usr/bin/python3
"""Managed Codex hook. The controller derives ownership from our process ancestry."""
import json
import os
import socket
import sys
from pathlib import Path

STATE_PATH = Path("/home/nimrod_rotem/.tmux-dashboard/voice-guards.json")


def main():
    if not os.environ.get('TMUX_DASH_VOICE_SESSION'):
        return
    payload = json.load(sys.stdin)
    sock_path = os.environ.get('TMUX_DASH_CONTROLLER_SOCKET', '/home/nimrod_rotem/.tmux-dashboard/controller.sock')
    try:
        with socket.socket(socket.AF_UNIX, socket.SOCK_STREAM) as connection:
            connection.settimeout(4)
            connection.connect(sock_path)
            connection.sendall((json.dumps({'op': 'voice_hook', 'payload': payload})+'\n').encode())
            response = bytearray()
            while not response.endswith(b'\n'):
                part = connection.recv(65536)
                if not part:
                    raise OSError('Controller disconnected')
                response.extend(part)
                if len(response) > 65536:
                    raise ValueError('Invalid controller response')
            result = json.loads(response)
    except (OSError, ValueError):
        # Transport failure does not create a release gate. Retain a known explicit pause.
        try:
            row = json.loads(STATE_PATH.read_text()).get(os.environ['TMUX_DASH_VOICE_SESSION'], {})
        except (OSError, ValueError):
            row = {}
        paused = (row.get('active') and row.get('paused')
                  and row.get('root') == payload.get('session_id'))
        result = {'ok': not paused, 'reason': 'Voice mode was explicitly paused. Resume before continuing.'}
    if not result.get('ok') and payload.get('hook_event_name') == 'PreToolUse':
        print(json.dumps({'hookSpecificOutput': {'hookEventName': 'PreToolUse', 'permissionDecision': 'deny',
                          'permissionDecisionReason': result.get('reason', 'Voice pause or identity check failed.')}}))


if __name__ == '__main__':
    main()
