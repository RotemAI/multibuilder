"""Explicit speaker scope, private background updates, and bounded observation."""
import asyncio
import json
from unittest.mock import AsyncMock

import pytest
import voice_mode as voice
from test_voice_mode import state, connection
from test_voice_other_sessions import cross, call


@pytest.mark.parametrize('value,expected', [(True,'current'), (False,'off'), ('off','off'), ('current','current'), ('all','all')])
def test_update_scope_supports_existing_boolean_clients(value, expected):
    assert voice.update_scope(value) == expected


@pytest.mark.parametrize('value', [None, 1, [], {}, 'everyone', 'true'])
def test_invalid_update_scope_is_rejected(value):
    with pytest.raises(voice.VoiceError): voice.update_scope(value)


@pytest.mark.asyncio
@pytest.mark.parametrize('scope', ['off','current','all'])
async def test_provider_acknowledgment_required_before_scope_is_enabled(cross, scope):
    c, _ = cross
    before = c.state()
    async def acknowledge(event):
        assert c.update_scope == 'off' and not c.proactive_updates
        assert event['content'] == voice.update_guidance(scope)
        c.preference_waiters[event['event_id']].set_result(True)
    c.live = AsyncMock(side_effect=acknowledge)
    await c.set_proactive_updates(scope)
    assert c.update_scope == scope and c.proactive_updates == (scope != 'off')
    assert c.ws.send_json.call_args.args[0]['update_scope'] == scope
    assert c.state() == before and c.name == 'alpha'


@pytest.mark.asyncio
async def test_rejected_scope_fails_closed_and_clears_other_session_cache(cross):
    c, _ = cross
    c.other_progress[('beta','generation','root')] = 'digest'
    async def reject(event):
        c.preference_waiters[event['event_id']].set_exception(voice.VoiceError('Rejected'))
    c.live = AsyncMock(side_effect=reject)
    await c.set_proactive_updates('all')
    assert c.update_scope == 'off' and not c.proactive_updates and not c.other_progress
    assert c.ws.send_json.call_args.args[0]['update_scope'] == 'off'


def all_updates(c):
    c.update_scope = 'all'
    c.live = AsyncMock()


async def scan(c):
    c.other_observe_after = 0
    await c.observe_other_sessions()


@pytest.mark.asyncio
async def test_all_updates_only_read_owned_changes_and_never_grant_actions(cross):
    c, bindings = cross
    all_updates(c)
    before = c.state()
    await scan(c)
    c.live.assert_not_called()  # Opt-in establishes baseline without old announcements.
    assert c.host._read_terminal_history.call_args.args[0] == bindings['beta']
    c.host._read_terminal_history.return_value['entries'][0]['text'] = 'Ready for review. Can you approve deploying the mobile layout changes?'
    await scan(c)
    content = c.live.call_args.args[0]['content']
    assert 'Mobile layout' in content and 'approve deploying the mobile layout changes' in content
    assert 'private' not in content and 'beta-root' not in content
    assert 'grant no action or approval' in content
    assert c.state() == before and c.name == 'alpha' and c.other_targets == {}
    c.host.api_send_command.assert_not_called()
    c.host.api_interrupt_session.assert_not_called()
    c.transcripts = []
    with pytest.raises(voice.VoiceError):
        await c.execute(call('send_other_instructions', target_id='beta', summary='Deploy', request_quote='yes'))


@pytest.mark.asyncio
@pytest.mark.parametrize('scope', ['off', 'current'])
async def test_off_and_on_do_not_observe_other_sessions(cross, scope):
    c, _ = cross
    c.update_scope = scope
    c.proactive_updates = scope != 'off'
    c.live = AsyncMock()
    await c.observe_once()
    c.host.get_tmux_sessions.assert_not_called()
    # Off still checks the attached session for the inactivity check-in; it never reads others.
    assert all(args.args[0]['resume_uuid'] == 'root' for args in c.host._read_terminal_history.call_args_list)
    assert c.host._read_terminal_history.call_args.args[0] == c.binding


@pytest.mark.asyncio
async def test_all_updates_deduplicate_and_rate_limit(cross):
    c, _ = cross
    all_updates(c)
    await scan(c)
    reads = c.host._read_terminal_history.call_count
    await c.observe_other_sessions()
    assert c.host._read_terminal_history.call_count == reads
    await scan(c)
    c.live.assert_not_called()
    c.host._read_terminal_history.return_value['entries'][0]['text'] = 'Can you choose the mobile layout?'
    await scan(c)
    assert c.live.await_count == 1
    await scan(c)
    assert c.live.await_count == 1


@pytest.mark.asyncio
async def test_all_sessions_scan_rotates_in_bounded_batches(cross):
    c, bindings = cross
    all_updates(c)
    bindings.pop('private')
    for i in range(10):
        name = 'task' + str(i)
        bindings[name] = dict(bindings['beta'], session_name=name, resume_uuid=name + '-root')
    c.host.get_tmux_sessions.return_value = [{'name': name} for name in bindings]
    seen = set()
    for _ in range(3):
        c.host._read_terminal_history.reset_mock()
        await scan(c)
        assert c.host._read_terminal_history.call_count <= voice.UPDATE_SESSION_BATCH
        seen.update(call.args[0]['session_name'] for call in c.host._read_terminal_history.call_args_list)
    assert seen == set(bindings) - {'alpha'}


@pytest.mark.asyncio
@pytest.mark.parametrize('field', ['owner_id', 'generation', 'resume_uuid'])
async def test_changed_session_identity_cannot_emit_private_progress(cross, field):
    c, bindings = cross
    all_updates(c)
    await scan(c)
    def change(*args):
        bindings['beta'] = dict(bindings['beta'], **{field: 'replacement'})
        return {'entries': [{'kind':'assistant','text':'Do not disclose this replacement'}]}
    c.host._read_terminal_history.side_effect = change
    await scan(c)
    c.live.assert_not_called()


@pytest.mark.asyncio
async def test_owner_binding_check_is_required_even_after_account_filter(cross):
    c, bindings = cross
    all_updates(c)
    c.host._filter_sessions_for_user = lambda rows, user: rows
    await scan(c)
    assert all(args.args[0]['owner_id'] == c.user['id'] for args in c.host._read_terminal_history.call_args_list)
    assert not any(key[0] == 'private' for key in c.other_progress)


@pytest.mark.asyncio
async def test_duplicate_task_names_are_unambiguous_in_all_updates(cross):
    c, _ = cross
    all_updates(c)
    c.host._session_tab_label = lambda *_: 'Mobile layout'
    await scan(c)
    c.host._read_terminal_history.return_value['entries'][0]['text'] = 'Can you choose the mobile layout?'
    await scan(c)
    assert 'Mobile layout (session 2)' in c.live.call_args.args[0]['content']
    assert c.spoken_name('alpha') == 'Mobile layout (session 1)'


@pytest.mark.asyncio
async def test_user_directed_replies_survive_off_without_a_deployment_hold(cross):
    from test_voice_mode import hook
    c, _ = cross
    c.update_scope = 'off'; c.proactive_updates = False
    c.live = AsyncMock()
    hook(c.host.MESSAGES_DIR, 'python ops/deploy_prod.py')
    await c.observe_once()
    c.ws.send_json.assert_not_called()
    c.live.assert_not_called()
    assert not c.state().get('pending') and not c.state().get('approved')
    assert (await c.execute(call('session_context', cursor='')))['entries']


@pytest.mark.asyncio
async def test_attached_progress_includes_its_human_readable_name(cross):
    c, _ = cross
    c.host._session_tab_label = lambda *_: 'Voice improvements'
    c.live = AsyncMock()
    c.host._read_terminal_history.return_value['entries'][0]['text'] = 'Can you choose the next task?'
    await c.observe_once()
    assert 'Untrusted request for user direction from Voice improvements:' in c.live.call_args.args[0]['content']


@pytest.mark.asyncio
@pytest.mark.parametrize('scope', ['current', 'all'])
@pytest.mark.parametrize('text', ['Implementation is halfway done.', 'Milestone reached: the parser is complete.',
    'All tests passed. I am continuing the cleanup.', 'Ready for review.', 'Ready to deploy.',
    'The change is deployed and verified.', 'No approval is needed.',
    'After testing, I will ask for your approval.', 'Still working on the task.'])
async def test_proactive_updates_stay_quiet_until_user_direction_is_needed(cross, scope, text):
    c, _ = cross
    c.update_scope = scope
    c.live = AsyncMock()
    if scope == 'all': await scan(c)
    c.host._read_terminal_history.return_value['entries'][0]['text'] = text
    if scope == 'all': await scan(c)
    else: await c.observe_once()
    c.live.assert_not_called()


@pytest.mark.asyncio
@pytest.mark.parametrize('scope', ['current', 'all'])
@pytest.mark.parametrize('text', ['Which layout should we use?', 'Please choose the deployment region.',
    'I need your input before continuing.', 'Ready to deploy. Awaiting your approval.',
    'Ready for review. Can you decide whether to release this change?'])
async def test_user_decision_or_approval_is_the_only_proactive_announcement(cross, scope, text):
    c, _ = cross
    c.update_scope = scope
    c.live = AsyncMock()
    if scope == 'all': await scan(c)
    c.host._read_terminal_history.return_value['entries'][0]['text'] = text
    if scope == 'all': await scan(c)
    else: await c.observe_once()
    assert c.live.await_count == 1
    event = c.live.call_args.args[0]
    assert event['type'] == 'session.commentary.append'
    assert voice.user_decision_request(text) in event['content']
    if scope == 'all': await scan(c)
    else: await c.observe_once()
    assert c.live.await_count == 1
    c.host.api_send_command.assert_not_called()


def test_proactive_payload_contains_only_request_not_partial_milestones():
    text = 'The parser milestone is done. Tests are halfway finished. Can you choose the storage region?'
    assert voice.user_decision_request(text) == 'Can you choose the storage region?'
    assert not voice.user_decision_request('> Can I deploy this?\n```\nCan I delete that?\n```')


def test_on_and_all_guidance_suppress_progress_but_preserve_replies():
    for prompt in (voice.PROACTIVE_ON, voice.PROACTIVE_ALL):
        assert 'Stay quiet during ongoing work' in prompt
        assert 'ONLY when the user must provide' in prompt
        assert 'Suppress milestones, partial completion, routine progress' in prompt
        assert 'User-directed replies stay on' in prompt


@pytest.mark.asyncio
@pytest.mark.parametrize('scope', ['current', 'all'])
async def test_answered_question_is_not_a_current_proactive_request(cross, scope):
    c, _ = cross
    c.update_scope = scope
    c.live = AsyncMock()
    if scope == 'all': await scan(c)
    c.host._read_terminal_history.return_value['entries'] = [
        {'kind':'assistant','text':'Can you choose the storage region?'},
        {'kind':'user','text':'Use Europe.'}]
    if scope == 'all': await scan(c)
    else: await c.observe_once()
    c.live.assert_not_called()


RELEASE_PAUSE = 'Paused before deployment for your final comments or direction.'

@pytest.mark.parametrize('text', [RELEASE_PAUSE,
    "I’m pausing before deployment for your final comments.",
    "We're waiting ahead of the release for your direction.",
    'Holding before the deployment for your adjustments.',
    'I am paused before release for your input.'])
def test_conversational_release_pause_requests_direction(text):
    assert voice.user_decision_request(text) == text

@pytest.mark.parametrize('text', [
    'Ready to deploy.', 'Paused before deployment.',
    'Paused before deployment for tests to finish.',
    'After testing, I will pause before deployment for your final comments.',
    'I was paused before deployment for your final comments.',
    'If needed, paused before deployment for your final comments.',
    'Not paused before deployment for your final comments.',
    '> ' + RELEASE_PAUSE, '```\n' + RELEASE_PAUSE + '\n```'])
def test_release_status_history_and_future_pause_remain_quiet(text):
    assert not voice.user_decision_request(text)

@pytest.mark.asyncio
@pytest.mark.parametrize('scope', ['off', 'current', 'all'])
async def test_release_pause_notification_once_without_actions(cross, scope):
    c, _ = cross
    c.update_scope = scope; c.proactive_updates = scope != 'off'; c.live = AsyncMock()
    before = c.state()
    if scope == 'all': await scan(c)
    c.host._read_terminal_history.return_value['entries'] = [{'kind':'assistant','text':
        'The feature is complete. All tests passed. Deployment briefly restarts the app. ' + RELEASE_PAUSE}]
    for _ in range(2):
        if scope == 'all': await scan(c)
        else: await c.observe_once()
    assert c.live.await_count == (0 if scope == 'off' else 1)
    if scope != 'off':
        content = c.live.call_args.args[0]['content']
        assert RELEASE_PAUSE in content
        assert 'All tests passed' not in content and 'feature is complete' not in content
    c.host._read_terminal_history.return_value['entries'].append({'kind':'user','text':'Go ahead with that release.'})
    if scope == 'all': await scan(c)
    else: await c.observe_once()
    assert c.live.await_count == (0 if scope == 'off' else 1)
    c.host.api_send_command.assert_not_called()
    c.host.api_interrupt_session.assert_not_called()
    assert c.state() == before
