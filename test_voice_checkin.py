"""The pre-test inactivity window is scoped, cancellable, and consumed before delivery."""
from types import SimpleNamespace
from unittest.mock import AsyncMock
import pytest
import voice_checkin as checkin
import voice_mode as voice
from test_voice_mode import state, connection

@pytest.fixture
def timer(state,monkeypatch):
    now=[0.0]
    monkeypatch.setattr(checkin,'time',SimpleNamespace(monotonic=lambda:now[0]))
    c=connection(state);c.ready=True;c.send=AsyncMock(return_value={'ok':True})
    return c,c.feature_checkin,now

@pytest.mark.asyncio
async def test_waits_three_minutes_and_continues_once(timer):
    c,t,now=timer
    await t.observe(checkin.CHECKIN_QUESTION)
    now[0]=179.999;await t.observe(checkin.CHECKIN_QUESTION);c.send.assert_not_called()
    now[0]=180;await t.observe(checkin.CHECKIN_QUESTION)
    command,interrupt=c.send.call_args.args
    assert 'Continue testing' in command and 'deploy automatically' in command
    assert 'when checks pass' in command and 'do-not-deploy instruction' in command
    assert not interrupt
    for _ in range(3):await t.observe(checkin.CHECKIN_QUESTION)
    assert c.send.await_count==1 and t.pending is None

@pytest.mark.asyncio
@pytest.mark.parametrize('text',['', 'What did you change?', 'one more detail'])
async def test_user_input_resets_the_inactivity_window(timer,text):
    c,t,now=timer;await t.observe(checkin.CHECKIN_QUESTION)
    now[0]=170;t.activity(text)
    now[0]=180;await t.observe(checkin.CHECKIN_QUESTION);c.send.assert_not_called()
    now[0]=350;await t.observe(checkin.CHECKIN_QUESTION);c.send.assert_awaited_once()

@pytest.mark.asyncio
@pytest.mark.parametrize('text',["wait", "don't deploy", 'stop', 'not yet', 'hold that', 'cancel'])
async def test_explicit_hold_cancels_without_rearming(timer,text):
    c,t,now=timer;await t.observe(checkin.CHECKIN_QUESTION);t.activity(text)
    now[0]=400;await t.observe(checkin.CHECKIN_QUESTION)
    c.send.assert_not_called();assert t.pending is None

@pytest.mark.asyncio
@pytest.mark.parametrize('condition',['paused','disconnected','ended','stopping','nonce','owner'])
async def test_no_continuation_after_session_or_connection_changes(timer,condition):
    c,t,now=timer;await t.observe(checkin.CHECKIN_QUESTION)
    if condition=='paused':c.mutate(lambda r:r.update(paused=True))
    if condition=='disconnected':c.mutate(lambda r:r.update(connected=False))
    if condition in ('ended','stopping'):setattr(c,condition,True)
    if condition=='nonce':c.mutate(lambda r:r.update(nonce='replacement'))
    if condition=='owner':c.host._terminal_history_binding=lambda *_:{'owner_id':'other','generation':'new'}
    now[0]=180
    try:await t.observe(checkin.CHECKIN_QUESTION)
    except voice.VoiceError:pass
    c.send.assert_not_called()

@pytest.mark.asyncio
async def test_changed_work_does_not_reuse_the_old_deadline(timer):
    c,t,now=timer;await t.observe(checkin.CHECKIN_QUESTION)
    c.mutate(lambda r:r.update(revision=2));now[0]=180
    await t.observe(checkin.CHECKIN_QUESTION);c.send.assert_not_called()
    assert t.pending['deadline']==360

@pytest.mark.asyncio
async def test_pending_backend_reply_defers_timeout(timer):
    c,t,now=timer;await t.observe(checkin.CHECKIN_QUESTION)
    c.response_ids['live']='in-flight';now[0]=180
    await t.observe(checkin.CHECKIN_QUESTION);c.send.assert_not_called()
    c.response_ids.clear();now[0]=360;await t.observe(checkin.CHECKIN_QUESTION)
    c.send.assert_awaited_once()

@pytest.mark.asyncio
async def test_uncertain_delivery_is_not_automatically_retried(timer):
    c,t,now=timer;await t.observe(checkin.CHECKIN_QUESTION)
    c.send.side_effect=RuntimeError('unknown delivery');now[0]=180
    with pytest.raises(RuntimeError):await t.observe(checkin.CHECKIN_QUESTION)
    await t.observe(checkin.CHECKIN_QUESTION);assert c.send.await_count==1

@pytest.mark.asyncio
@pytest.mark.parametrize('text',['Ready to deploy.', 'All tests passed.',
    '> '+checkin.CHECKIN_QUESTION, 'Later I will ask: '+checkin.CHECKIN_QUESTION,
    '```\n'+checkin.CHECKIN_QUESTION+'\n```'])
async def test_only_current_pretest_question_starts_timer(timer,text):
    c,t,now=timer;await t.observe(voice.user_decision_request(text))
    now[0]=400;await t.observe(voice.user_decision_request(text))
    c.send.assert_not_called();assert t.pending is None

@pytest.mark.asyncio
@pytest.mark.parametrize('scope',['off','current','all'])
async def test_timer_is_attached_only_and_independent_of_proactive_speech(timer,scope):
    c,t,now=timer;c.update_scope=scope;c.proactive_updates=scope!='off'
    c.context=AsyncMock(return_value={'spoken_name':'Current task','entries':[{'kind':'assistant','text':checkin.CHECKIN_QUESTION}]})
    c.live=AsyncMock();c.observe_other_sessions=AsyncMock()
    await c.observe_once();now[0]=180;await c.observe_once()
    c.send.assert_awaited_once()
    assert c.name=='alpha'
    if scope=='off':c.live.assert_not_called()
    else:assert c.live.await_count==1
    await c.observe_once()
    assert c.send.await_count==1
    if scope!='off':assert c.live.await_count==1
