"""Other-session routing retains scoped consent without a release gate."""
import time
from unittest.mock import AsyncMock
import pytest
import voice_mode as voice
from test_voice_mode import state, connection, hook
from test_voice_other_sessions import cross, target, call, prepare_target


@pytest.mark.asyncio
@pytest.mark.parametrize('legacy', [False, True])
async def test_target_deploy_is_a_normal_direction_without_supervision_or_release_record(cross, legacy):
    c, bindings = cross
    c.transcripts[0]['text'] = 'Check my other sessions and deploy the reviewed Mobile layout change.'
    t = await target(c)
    if legacy:
        voice.store(c.host.MESSAGES_DIR).update(lambda rows: rows.update(beta={
            'pending': {'request_id':'obsolete'}, 'approved': {'expires':0}}))
    before = voice.store(c.host.MESSAGES_DIR).read()
    confirmation = await prepare_target(c,t,'deploy','Deploy the reviewed mobile layout change now.')
    assert 'Mobile layout' in c.session_control.offer['confirmation']
    assert 'send this deployment direction' in c.session_control.offer['confirmation']
    result = await c.execute(call('confirm_other_action',confirmation_id=confirmation,approval_quote='yes'))
    assert result['ok'] and result['message']=='Deployment direction delivered.'
    request, name, body = c.host.api_send_command.call_args.args
    assert name == 'beta' and request.state.voice_target_binding == bindings['beta']
    assert voice.OTHER_SESSION_GUIDANCE in body.command and '[Voice approval]' not in body.command
    assert voice.store(c.host.MESSAGES_DIR).read() == before
    assert c.name == 'alpha'
    c.host.api_interrupt_session.assert_not_called()
    with pytest.raises(voice.VoiceError):
        await c.execute(call('confirm_other_action',confirmation_id=confirmation,approval_quote='yes'))
    assert c.host.api_send_command.await_count == 1


@pytest.mark.asyncio
@pytest.mark.parametrize('change', ['history','owner','revision','negated','expired'])
async def test_target_direction_still_rejects_changed_or_ambiguous_consent(cross, change):
    c, bindings = cross
    t = await target(c)
    confirmation = await prepare_target(c,t,'deploy','Deploy mobile layout.')
    reply='yes'
    if change=='history': c.host._read_terminal_history.return_value['entries'].append({'kind':'assistant','text':'Changed scope'})
    if change=='owner': bindings['beta']['owner_id']='someone-else'
    if change=='revision': c.mutate(lambda row:row.update(revision=100))
    if change=='negated': c.transcripts[-1]['text']=reply='yes, wait'
    if change=='expired': c.session_control.offer['expires']=0
    with pytest.raises(voice.VoiceError):
        await c.execute(call('confirm_other_action',confirmation_id=confirmation,approval_quote=reply))
    c.host.api_send_command.assert_not_called()


@pytest.mark.parametrize('paused',[False,True])
def test_source_disconnect_keeps_target_pause_state_unchanged(state,paused):
    c=connection(state)
    voice.store(state).update(lambda rows:rows.update(beta={'owner_id':'one',
        'active':True,'paused':paused,'supervisor_nonce':c.nonce,'supervisor_session':c.name}))
    before=voice.store(state).read()
    c.session_control.disconnect()
    assert voice.store(state).read()==before


def test_missing_supervisor_heartbeat_does_not_add_a_pause(state):
    voice.store(state).update(lambda rows:rows['alpha'].update(
        supervisor_session='disconnected-voice',supervisor_nonce='old'))
    assert hook(state,'python deploy.py')['ok']
    assert not voice.store(state).read()['alpha']['paused']


@pytest.mark.asyncio
async def test_target_status_does_not_advertise_obsolete_release_approval(cross):
    c, bindings=cross
    voice.store(c.host.MESSAGES_DIR).update(lambda rows:rows.update(beta={
        'active':True,'owner_id':'one','generation':'generation','root':'beta-root',
        'pending':{'request_id':'old'},'approved':{'scope':'current_release'}}))
    status=c.session_control.status(bindings['beta'])
    assert status['deployment_workflow']=='pretest_idle_timeout'
    assert 'pending' not in status and 'approved_release' not in status
