import json
import time
from unittest.mock import AsyncMock, Mock

import pytest
from fastapi import Request
from fastapi.responses import JSONResponse
import voice_mode as voice
from test_voice_mode import state, connection


def call(name, **args):
    return {'name': name, 'arguments': json.dumps(args)}


@pytest.fixture
def cross(state):
    c = connection(state)
    bindings = {'alpha': dict(c.binding, session_name='alpha'),
                'beta': dict(c.binding, session_name='beta', resume_uuid='beta-root'),
                'private': dict(c.binding, session_name='private', owner_id='someone-else')}
    c.host._terminal_history_binding = Mock(side_effect=lambda n, u: bindings.get(n))
    c.host.get_tmux_sessions = Mock(return_value=[{'name': n} for n in bindings])
    c.host._filter_sessions_for_user = lambda rows, user: [r for r in rows if r['name'] != 'private']
    c.host._session_tab_label_rows = lambda: {}
    c.host._session_tab_label = lambda n, rows: 'Mobile layout' if n == 'beta' else n
    c.host._read_terminal_history = Mock(return_value={'entries': [{'kind': 'assistant', 'text': 'Ready for review'}], 'cursor': 'older', 'has_more': True})
    c.host.async_detect_activity = AsyncMock(return_value={'status': 'busy'})
    c.host.api_interrupt_session = AsyncMock(return_value=JSONResponse({'ok': True}))
    c.host._current_user = lambda r: c.user
    c.transcripts = [{'role': 'user', 'text': 'Check my other sessions and ask Mobile layout to review this change', 'time': time.time()}]
    return c, bindings


async def target(c):
    result = await c.execute(call('list_other_sessions', request_quote=c.transcripts[0]['text']))
    assert result['attached_session'] == 'alpha'
    assert [(r['session'], r['label']) for r in result['sessions']] == [('beta', 'Mobile layout')]
    return result['sessions'][0]['target_id']


@pytest.mark.asyncio
async def test_only_requested_owned_session_is_read_and_attachment_stays(cross):
    c, bindings = cross
    t = await target(c)
    c.host._read_terminal_history.assert_not_called()
    result = await c.execute(call('other_session_context', target_id=t, cursor='previous', request_quote=c.transcripts[0]['text']))
    assert result['session'] == 'beta' and result['status'] == 'busy'
    assert result['has_more'] and result['cursor'] == 'older'
    c.host._read_terminal_history.assert_called_once_with(bindings['beta'], 'previous', False)
    assert c.name == 'alpha' and c.binding['resume_uuid'] == 'root'


@pytest.mark.asyncio
@pytest.mark.parametrize('role,age', [('assistant', 0), ('user', 121)])
async def test_discovery_rejects_non_user_or_old_speech(cross, role, age):
    c, _ = cross
    c.transcripts[0].update(role=role, time=time.time()-age)
    with pytest.raises(voice.VoiceError, match='spoken request'):
        await target(c)
    c.host.get_tmux_sessions.assert_not_called()


@pytest.mark.asyncio
async def test_reference_history_cannot_authorize_tools(cross):
    c, _ = cross
    c.transcripts = []
    with pytest.raises(voice.VoiceError):
        await c.execute(call('list_other_sessions', request_quote='Check my other sessions'))
    c.host.get_tmux_sessions.assert_not_called()


@pytest.mark.asyncio
@pytest.mark.parametrize('key,value', [('generation', 'new'), ('resume_uuid', 'new'), ('owner_id', 'someone-else')])
async def test_reused_target_cannot_receive_instructions(cross, key, value):
    c, bindings = cross
    t = await target(c)
    bindings['beta'] = dict(bindings['beta'], **{key: value})
    with pytest.raises(voice.VoiceError, match='changed'):
        await c.execute(call('send_other_instructions', target_id=t, summary='Review this change', interrupt=False, request_quote=c.transcripts[0]['text']))
    c.host.api_send_command.assert_not_called()


@pytest.mark.asyncio
async def test_changed_target_history_is_not_returned(cross):
    c, bindings = cross
    t = await target(c)
    def read(*args):
        bindings['beta'] = dict(bindings['beta'], generation='changed')
        return {'entries': [], 'cursor': '', 'has_more': False}
    c.host._read_terminal_history.side_effect = read
    with pytest.raises(voice.VoiceError, match='changed'):
        await c.execute(call('other_session_context', target_id=t, request_quote=c.transcripts[0]['text']))


async def prepare_target(c, t, action='instruct', summary='Review the mobile layout changes'):
    result = await c.execute(call('prepare_other_action', target_id=t, action=action,
        summary=summary, request_quote=c.transcripts[0]['text']))
    c.transcripts.extend([{'role':'assistant','text':result['confirmation'],'time':time.time()},
                          {'role':'user','text':'yes','time':time.time()}])
    return result['confirmation_id']


@pytest.mark.asyncio
async def test_direction_uses_target_route_without_transferring_approval(cross):
    c, bindings = cross
    t = await target(c)
    original = c.state()
    c.request.state.voice_approval = True
    confirmation = await prepare_target(c,t)
    result = await c.execute(call('confirm_other_action', confirmation_id=confirmation, approval_quote='yes'))
    request, name, body = c.host.api_send_command.call_args.args
    assert result['ok'] and result['session'] == name == 'beta'
    assert 'Review the mobile layout changes' in body.command
    assert voice.OTHER_SESSION_GUIDANCE in body.command
    assert request.state.voice_approval is False
    assert request.state.voice_target_binding == bindings['beta']
    c.host.api_interrupt_session.assert_not_called()
    assert c.state() == original and c.name == 'alpha'


@pytest.mark.asyncio
async def test_delivery_failure_does_not_claim_sent(cross):
    c, _ = cross
    t = await target(c)
    confirmation = await prepare_target(c,t)
    c.ws.send_json.reset_mock()
    c.host.api_send_command.return_value = JSONResponse({'error': 'Target changed'}, status_code=409)
    with pytest.raises(voice.VoiceError, match='Target changed'):
        await c.execute(call('confirm_other_action', confirmation_id=confirmation, approval_quote='yes'))
    c.ws.send_json.assert_not_called()


@pytest.mark.asyncio
async def test_expired_or_invented_target_is_rejected(cross):
    c, _ = cross
    t = await target(c)
    c.other_targets[t]['expires'] = 0
    for ref in (t, 'beta', 'private'):
        with pytest.raises(voice.VoiceError):
            await c.execute(call('other_session_context', target_id=ref, request_quote=c.transcripts[0]['text']))
    c.host._read_terminal_history.assert_not_called()


@pytest.mark.asyncio
async def test_background_observer_never_discovers_or_reads_others(cross):
    c, _ = cross
    c.live = AsyncMock()
    await c.observe_once()
    c.host.get_tmux_sessions.assert_not_called()
    assert c.host._read_terminal_history.call_args.args[0] == c.binding


def test_input_fence_rejects_changed_root_owner_or_generation(cross):
    c, bindings = cross
    request = Request({'type': 'http', 'state': {'voice_target_binding': dict(bindings['beta'])}})
    assert voice.request_target_matches(c.host, request, 'beta')
    assert not voice.request_target_matches(c.host, request, 'alpha')
    for field in ('owner_id', 'generation', 'resume_uuid'):
        saved = bindings['beta']
        bindings['beta'] = dict(saved, **{field: 'changed'})
        assert not voice.request_target_matches(c.host, request, 'beta')
        bindings['beta'] = saved
    assert voice.request_target_matches(c.host, Request({'type': 'http'}), 'beta')


@pytest.mark.asyncio
@pytest.mark.parametrize('action', ['send', 'interrupt'])
async def test_real_route_rechecks_target_inside_operation_lock(cross, monkeypatch, action):
    import app
    from contextlib import contextmanager
    c, bindings = cross
    request = Request({'type': 'http', 'state': {'voice_target_binding': dict(bindings['beta'])}})
    monkeypatch.setattr(app, '_current_user', lambda r: c.user)
    monkeypatch.setattr(app, '_find_session_for_user', lambda *a: ([], {'name': 'beta'}))
    monkeypatch.setattr(app, '_find_session', lambda *a: ([], {'name': 'beta'}))
    monkeypatch.setattr(app, '_terminal_history_binding', c.host._terminal_history_binding)
    controller = AsyncMock(return_value={'ok': True})
    monkeypatch.setattr(app, '_controller_call', controller)
    monkeypatch.setattr(app, '_wait_for_codex_input_ready', AsyncMock(return_value=True))
    terminal = Mock(side_effect=AssertionError('Must not resolve replacement terminal'))
    monkeypatch.setattr(app, '_terminal_binding', terminal)
    @contextmanager
    def changed_on_lock(name):
        bindings['beta'] = dict(bindings['beta'], resume_uuid='replacement')
        yield
    monkeypatch.setattr(app, '_session_operation_lock', changed_on_lock)
    if action == 'send':
        response = await app.api_send_command(request, 'beta', app.SendCommand(command='Review this'))
    else:
        response = await app.api_interrupt_session(request, 'beta')
    assert response.status_code == 409
    assert controller.await_count == 1  # Resume/touch only, no input recorded or sent.
    terminal.assert_not_called()
