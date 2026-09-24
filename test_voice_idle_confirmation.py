"""Scoped spoken consent, idle delivery, and natural session references."""
import json
import time
from unittest.mock import AsyncMock, Mock

import pytest
from fastapi import Request
from fastapi.responses import JSONResponse
import voice_mode as voice
from test_voice_mode import state, connection
from test_voice_other_sessions import cross, call, prepare_target

WORK = 'Add a dark mode toggle, implement and test locally, and request approval before deployment.'
SPOKEN = 'Dark mode toggle'
OFFER = 'Can I use an idle session for that?'
QUESTION = SPOKEN + '. ' + OFFER
ASK = 'Also add a dark mode toggle as a separate task while the current work continues.'


async def offer(c):
    c.transcripts = [{'role': 'user', 'text': ASK, 'time': time.time()}]
    result = await c.execute(call('propose_idle_session', work_summary=WORK, spoken_summary=SPOKEN, request_quote=ASK))
    assert result == {'spoken_summary': SPOKEN, 'confirmation': OFFER}
    c.host.get_tmux_sessions.assert_not_called()
    c.host._read_terminal_history.assert_not_called()
    return result


def say(c, role, text):
    c.transcripts.append({'role': role, 'text': text, 'time': time.time()})


async def consent(c):
    await offer(c)
    say(c, 'assistant', 'For the dark mode toggle. ' + QUESTION)
    say(c, 'user', 'Yes.')


async def find_idle(c):
    c.host.async_detect_activity.return_value = {'status': 'idle'}
    result = await c.execute(call('list_other_sessions', request_quote='yes'))
    assert result['confirmed_work'] == WORK
    return result['sessions'][0]['target_id']


@pytest.mark.asyncio
async def test_yes_assigns_understood_work_once_without_switching_or_deployment(cross):
    c, bindings = cross
    before = c.state()
    await consent(c)
    t = await find_idle(c)
    result = await c.execute(call('send_other_instructions', target_id=t, summary=WORK, interrupt=False, request_quote='yes'))
    request, name, body = c.host.api_send_command.call_args.args
    assert result['ok'] and name == 'beta' and result['spoken_name'] == 'Mobile layout'
    assert WORK in body.command and voice.OTHER_SESSION_GUIDANCE in body.command
    assert request.state.voice_idle_only is True and request.state.voice_approval is False
    assert request.state.voice_target_binding == bindings['beta']
    assert c.state() == before and c.name == 'alpha' and c.binding['resume_uuid'] == 'root'
    c.host.api_interrupt_session.assert_not_called()
    with pytest.raises(voice.VoiceError):
        await c.execute(call('send_other_instructions', target_id=t, summary=WORK, request_quote='yes'))
    assert c.host.api_send_command.await_count == 1


@pytest.mark.asyncio
@pytest.mark.parametrize('scenario', ['no_offer', 'no_question', 'assistant_yes', 'old_yes', 'unrelated_question', 'negative', 'qualified_yes', 'expired'])
async def test_unrelated_or_invalid_yes_cannot_discover(cross, scenario):
    c, _ = cross
    if scenario != 'no_offer':
        await offer(c)
    if scenario != 'no_question':
        question = 'Shall I deploy this release?' if scenario == 'unrelated_question' else QUESTION
        say(c, 'assistant', question)
    say(c, 'assistant' if scenario == 'assistant_yes' else 'user',
        'No.' if scenario == 'negative' else 'yes, but wait' if scenario == 'qualified_yes' else 'yes')
    if scenario == 'old_yes': c.transcripts[-1]['time'] = 0
    if scenario == 'expired': c.idle_offer['expires'] = 0
    with pytest.raises(voice.VoiceError):
        await c.execute(call('list_other_sessions', request_quote='yes'))
    c.host.get_tmux_sessions.assert_not_called()
    c.host.api_send_command.assert_not_called()


@pytest.mark.asyncio
async def test_fragmented_provider_speech_and_assistant_followup_are_supported(cross):
    c, _ = cross
    await offer(c)
    for text in [QUESTION[:20], QUESTION[20:50], QUESTION[50:]]:
        say(c, 'assistant', text)
    for text in ['y', 'es']:
        say(c, 'user', text)
    say(c, 'assistant', 'I will find an idle session now.')
    await find_idle(c)


@pytest.mark.asyncio
async def test_new_spoken_direction_invalidates_yes(cross):
    c, _ = cross
    await consent(c)
    say(c, 'assistant', 'I will check.')
    say(c, 'user', 'Actually, stop. Let us discuss it first.')
    with pytest.raises(voice.VoiceError):
        await c.execute(call('list_other_sessions', request_quote='yes'))
    c.host.get_tmux_sessions.assert_not_called()


@pytest.mark.asyncio
async def test_new_offer_cannot_reuse_previous_confirmation(cross):
    c, _ = cross
    await consent(c)
    say(c, 'assistant', 'What else?')
    say(c, 'user', 'Separately, add keyboard shortcuts to the editor.')
    await c.execute(call('propose_idle_session', work_summary='Add keyboard shortcuts', spoken_summary='Keyboard shortcuts', request_quote='add keyboard shortcuts to the editor'))
    with pytest.raises(voice.VoiceError):
        await c.execute(call('list_other_sessions', request_quote='yes'))


@pytest.mark.asyncio
@pytest.mark.parametrize('status', ['busy', 'stalled', 'unknown', 'waiting', 'parked'])
async def test_no_idle_target_means_no_assignment(cross, status):
    c, _ = cross
    await consent(c)
    c.host.async_detect_activity.return_value = {'status': status}
    result = await c.execute(call('list_other_sessions', request_quote='yes'))
    assert result['sessions'] == []
    c.host.api_send_command.assert_not_called()
    c.host._read_terminal_history.assert_not_called()


@pytest.mark.asyncio
@pytest.mark.parametrize('change', ['work', 'interrupt', 'busy', 'owner', 'root'])
async def test_confirmed_assignment_rejects_scope_or_target_change(cross, change):
    c, bindings = cross
    await consent(c)
    t = await find_idle(c)
    if change == 'busy': c.host.async_detect_activity.return_value = {'status': 'busy'}
    if change == 'owner': bindings['beta'] = dict(bindings['beta'], owner_id='someone-else')
    if change == 'root': bindings['beta'] = dict(bindings['beta'], resume_uuid='replacement')
    with pytest.raises(voice.VoiceError):
        await c.execute(call('send_other_instructions', target_id=t,
                             summary='Deploy a different feature' if change == 'work' else WORK,
                             interrupt=change == 'interrupt', request_quote='yes'))
    c.host.api_send_command.assert_not_called()
    c.host.api_interrupt_session.assert_not_called()


@pytest.mark.asyncio
async def test_uncertain_delivery_cannot_repeat_with_same_yes(cross):
    c, _ = cross
    await consent(c)
    t = await find_idle(c)
    c.host.api_send_command.side_effect = RuntimeError('Connection lost after delivery')
    with pytest.raises(RuntimeError):
        await c.execute(call('send_other_instructions', target_id=t, summary=WORK, request_quote='yes'))
    with pytest.raises(voice.VoiceError):
        await c.execute(call('send_other_instructions', target_id=t, summary=WORK, request_quote='yes'))
    assert c.host.api_send_command.await_count == 1


@pytest.mark.asyncio
async def test_idle_fence_is_enforced_by_real_send_route_inside_lock(cross, monkeypatch):
    import app
    from contextlib import contextmanager
    c, bindings = cross
    request = Request({'type': 'http', 'state': {'voice_target_binding': bindings['beta'], 'voice_idle_only': True}})
    monkeypatch.setattr(app, '_current_user', lambda _: c.user)
    monkeypatch.setattr(app, '_find_session_for_user', lambda *_: ([], {'name': 'beta'}))
    monkeypatch.setattr(app, '_terminal_history_binding', c.host._terminal_history_binding)
    monkeypatch.setattr(app, '_controller_call', AsyncMock(return_value={'ok': True}))
    monkeypatch.setattr(app, '_wait_for_codex_input_ready', AsyncMock(return_value=True))
    status = {'status': 'idle'}
    monkeypatch.setattr(app, '_detect_activity_raw', lambda _: status)
    terminal = Mock(side_effect=AssertionError('Must not deliver to a newly busy session'))
    monkeypatch.setattr(app, '_terminal_binding', terminal)
    @contextmanager
    def become_busy(_):
        status['status'] = 'busy'
        yield
    monkeypatch.setattr(app, '_session_operation_lock', become_busy)
    response = await app.api_send_command(request, 'beta', app.SendCommand(command=WORK))
    assert response.status_code == 409
    terminal.assert_not_called()


@pytest.mark.asyncio
async def test_proposal_needs_recent_user_speech_and_does_not_persist_work(cross):
    c, _ = cross
    for transcripts in [[], [{'role': 'assistant', 'text': ASK, 'time': time.time()}],
                        [{'role': 'user', 'text': ASK, 'time': 0}]]:
        c.transcripts = transcripts
        with pytest.raises(voice.VoiceError):
            await c.execute(call('propose_idle_session', work_summary=WORK, spoken_summary=SPOKEN, request_quote=ASK))
    await offer(c)
    assert WORK not in (c.host.MESSAGES_DIR / 'voice-guards.json').read_text()


def test_prompts_require_clear_new_work_and_exact_question():
    for prompt in [voice.VOICE_PROMPT, voice.BACKEND_PROMPT]:
        assert 'Can I [perform the specific action]?' in prompt
        assert 'exploratory' in prompt and 'distinct' in prompt
        assert 'spoken_name' in prompt
    assert 'do not offer' in voice.VOICE_PROMPT.casefold()
    assert 'ordinary corrections to the attached task' in voice.BACKEND_PROMPT


def test_friendly_names_disambiguate_labels_and_avoid_suffix_collisions():
    rows = [{'session': 'a8sdf001', 'label': 'Login Fix'}, {'session': 'b8sdf002', 'label': 'login fix'},
            {'session': 'c8sdf003', 'label': 'Login Fix (session 1)'},
            {'session': 'd8sdf004', 'label': ''}, {'session': 'e8sdf005', 'label': ''}]
    names = voice.spoken_session_names(rows)
    assert len({n.casefold() for n in names.values()}) == len(rows)
    assert names['a8sdf001'] == 'Login Fix (session 2)'
    assert names['b8sdf002'] == 'login fix (session 3)'
    assert names['d8sdf004'] == 'Untitled task (session 1)'
    assert not any(row['session'] in names[row['session']] for row in rows)


@pytest.mark.asyncio
async def test_spoken_names_cover_attached_context_discovery_and_action(cross):
    c, bindings = cross
    c.host._session_tab_label = lambda *_: 'Mobile layout'
    context = await c.context()
    assert context['spoken_name'] == 'Mobile layout'
    result = await c.execute(call('list_other_sessions', request_quote=c.transcripts[0]['text']))
    assert result['spoken_name'] == 'Mobile layout (session 1)'
    row = result['sessions'][0]
    assert row['spoken_name'] == 'Mobile layout (session 2)'
    confirmation = await prepare_target(c, row['target_id'], summary='Review it')
    sent = await c.execute(call('confirm_other_action', confirmation_id=confirmation, approval_quote='yes'))
    assert sent['spoken_name'] == row['spoken_name']
    assert c.ws.send_json.call_args.args[0]['message'] == 'Mobile layout (session 2): Instructions delivered.'
    assert c.name == 'alpha'


def test_pending_task_name_is_available_without_reading_history(cross):
    c, _ = cross
    c.host._session_tab_label = lambda *_: ''
    c.host._session_tab_label_rows = lambda: {'beta': {'pending': {'candidate': 'Dark Mode Toggle'}}}
    assert c.spoken_name('beta') == 'Dark Mode Toggle'
    assert c.spoken_name('alpha') == 'Untitled task'
    c.host._read_terminal_history.assert_not_called()


def test_opaque_tab_identifier_is_not_a_spoken_task_name(cross):
    c, _ = cross
    c.host._session_tab_label = lambda name, _: name
    assert c.spoken_name('a1b2c3d4') == 'Untitled task'


@pytest.mark.asyncio
async def test_question_without_transcript_punctuation_still_matches(cross):
    c, _ = cross
    await offer(c)
    say(c, 'assistant', QUESTION.rstrip('?'))
    say(c, 'user', 'yes')
    await find_idle(c)


@pytest.mark.asyncio
async def test_idle_name_is_unambiguous_even_when_collision_is_busy(cross):
    c, bindings = cross
    bindings['gamma'] = dict(bindings['beta'], session_name='gamma', resume_uuid='gamma-root')
    c.host.get_tmux_sessions.return_value = [{'name': n} for n in bindings]
    c.host._session_tab_label = lambda n, _: 'Current task' if n == 'alpha' else 'Mobile layout'
    c.host.async_detect_activity.side_effect = lambda n: {'status': 'idle' if n == 'beta' else 'busy'}
    await consent(c)
    result = await c.execute(call('list_other_sessions', request_quote='yes'))
    assert len(result['sessions']) == 1
    assert result['sessions'][0]['spoken_name'] == 'Mobile layout (session 1)'
    assert c.spoken_names['gamma'] == 'Mobile layout (session 2)'
    assert all(t['binding']['session_name'] != 'gamma' for t in c.other_targets.values())


def test_pending_name_replaces_an_opaque_tab_label(cross):
    c, _ = cross
    c.host._session_tab_label = lambda name, _: name
    c.host._session_tab_label_rows = lambda: {'a1b2c3d4': {'pending': {'candidate': 'Dark Mode'}}}
    assert c.spoken_name('a1b2c3d4') == 'Dark Mode'
