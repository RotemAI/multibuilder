"""A spoken yes cannot move between actions, work revisions, or approval scopes."""
import json
import time

import pytest
import voice_mode as voice
from test_voice_mode import state, connection
from test_voice_other_sessions import cross, call
from test_voice_idle_confirmation import offer, consent, say, WORK, QUESTION, SPOKEN


@pytest.mark.asyncio
async def test_idle_question_must_name_the_frozen_task(cross):
    c, _ = cross
    await offer(c)
    say(c, 'assistant', QUESTION.replace(SPOKEN, 'Keyboard shortcuts'))
    say(c, 'user', 'Yes')
    with pytest.raises(voice.VoiceError):
        await c.execute(call('list_other_sessions', request_quote='yes'))
    c.host.get_tmux_sessions.assert_not_called()


def test_all_voice_confirmation_guidance_names_action_and_preserves_requirements():
    for prompt in (voice.VOICE_PROMPT, voice.BACKEND_PROMPT, voice.CONSENT_GUIDANCE):
        assert 'Can I [perform the specific action]?' in prompt
        assert 'solely to that stated action' in prompt
        assert 'interruption' in prompt and 'sensitive actions' in prompt
        assert 'every applicable approval requirement' in prompt
    assert 'Shall I use an idle session for that?' not in voice.VOICE_PROMPT + voice.BACKEND_PROMPT


@pytest.mark.asyncio
@pytest.mark.parametrize('reply', sorted(voice.AFFIRMATIVE_REPLIES))
async def test_spoken_affirmatives_authorize_only_the_prepared_idle_assignment(cross, reply):
    c, _ = cross
    await offer(c)
    say(c, 'assistant', QUESTION)
    say(c, 'user', reply.upper() + '!')
    c.host.async_detect_activity.return_value = {'status': 'idle'}
    result = await c.execute(call('list_other_sessions', request_quote=reply))
    target = result['sessions'][0]['target_id']
    assert (await c.execute(call('send_other_instructions', target_id=target,
        summary=WORK, interrupt=False, request_quote=reply)))['ok']
    assert c.host.api_send_command.call_args.args[0].state.voice_approval is False
    with pytest.raises(voice.VoiceError):
        await c.execute(call('send_other_instructions', target_id=target,
            summary=WORK, interrupt=False, request_quote=reply))


@pytest.mark.asyncio
@pytest.mark.parametrize('scenario', ['missing', 'unrelated', 'expired', 'changed', 'clipped_quote'])
async def test_alternative_affirmative_still_needs_exact_current_action(cross, scenario):
    c, _ = cross
    await offer(c)
    if scenario != 'missing':
        say(c, 'assistant', 'Can I interrupt the current task?' if scenario == 'unrelated' else QUESTION)
    say(c, 'user', 'yeah, wait' if scenario == 'clipped_quote' else 'yeah')
    if scenario == 'expired': c.idle_offer['expires'] = 0
    if scenario == 'changed': c.idle_offer['spoken_summary'] = 'Keyboard shortcuts'
    with pytest.raises(voice.VoiceError):
        await c.execute(call('list_other_sessions', request_quote='yeah'))
    c.host.get_tmux_sessions.assert_not_called()


@pytest.mark.asyncio
async def test_affirmative_tool_quote_must_match_actual_provider_reply(cross):
    c, _ = cross
    await offer(c)
    say(c, 'assistant', QUESTION)
    say(c, 'user', 'yep')
    with pytest.raises(voice.VoiceError):
        await c.execute(call('list_other_sessions', request_quote='yes'))


@pytest.mark.asyncio
@pytest.mark.parametrize('reply', ['all right, but wait', 'alright if tests pass', 'yeah, not yet',
    'yes, check a different task instead', 'maybe later', 'probably', 'I am not sure', 'no, stop now'])
async def test_long_idle_replies_cannot_fall_back_to_explicit_other_session_authorization(cross, reply):
    c, _ = cross
    await offer(c)
    say(c, 'assistant', QUESTION)
    say(c, 'user', reply)
    with pytest.raises(voice.VoiceError):
        await c.execute(call('list_other_sessions', request_quote=reply))
    c.host.get_tmux_sessions.assert_not_called()
    c.host.api_send_command.assert_not_called()
