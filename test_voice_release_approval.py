"""Deployment is ordinary conversation; only explicit pause and identity are enforced."""
import io
import json
from pathlib import Path
from unittest.mock import AsyncMock, Mock

import pytest
import voice_mode as voice
import voice_hook
from test_voice_mode import state, connection, hook
from test_voice_other_sessions import call


@pytest.mark.parametrize('command', ['python ops/deploy_prod.py', 'npm publish',
    'git push origin HEAD:merge/pr-12', 'sudo supervisorctl restart tmux-dashboard',
    'python deploy.py --changed-command'])
def test_release_commands_do_not_create_or_require_gate_records(state, command):
    for _ in range(2): assert hook(state, command)['ok']
    assert not voice.store(state).read()['alpha'].get('pending')
    assert not voice.store(state).read()['alpha'].get('approved')


def test_old_release_records_do_not_hold_new_commands(state):
    voice.store(state).update(lambda rows: rows['alpha'].update(
        pending={'request_id':'obsolete'}, approved={'scope':'current_release','expires':0}))
    assert hook(state, 'python deploy.py')['ok']
    assert not voice.store(state).read()['alpha'].get('pending')
    assert not voice.store(state).read()['alpha'].get('approved')


def test_explicit_pause_still_holds_release_and_local_commands(state):
    voice.store(state).update(lambda rows: rows['alpha'].update(paused=True))
    assert not hook(state, 'python deploy.py')['ok']
    assert not hook(state, 'echo hello')['ok']
    voice.note_prompt(state,'alpha','one')
    assert hook(state, 'python deploy.py')['ok']


@pytest.mark.asyncio
async def test_deploy_now_uses_ordinary_instruction_without_gate_token(state):
    c=connection(state)
    result=await c.execute(call('send_instructions', summary='Deploy the reviewed dark mode change now.', interrupt=False))
    assert result['ok']
    command=c.host.api_send_command.call_args.args[2].command
    assert 'Deploy the reviewed dark mode change now.' in command
    assert voice.DEPLOYMENT_GUIDANCE in command
    assert not getattr(c.host.api_send_command.call_args.args[0].state,'voice_approval',False)
    assert not c.state().get('approved') and not c.state().get('pending')


@pytest.mark.asyncio
async def test_correction_stays_a_correction_without_deployment_permission(state):
    c=connection(state)
    await c.execute(call('send_instructions',summary='Wait before deploying. Change the button text first.',interrupt=False))
    command=c.host.api_send_command.call_args.args[2].command
    assert 'Wait before deploying. Change the button text first.' in command
    assert '[Voice approval]' not in command
    assert not c.state().get('approved')


@pytest.mark.asyncio
@pytest.mark.parametrize('action', ['approve_deployment','prepare_deployment_approval','complete_deployment','request_deployment_question'])
async def test_retired_gate_tools_cannot_be_used_or_synthesize_permission(state, action):
    c=connection(state)
    assert action not in {t['name'] for t in voice.TOOLS}
    with pytest.raises(voice.VoiceError,match='Unknown voice action'):
        await c.execute(call(action,request_id='old',approval_quote='yes',release_summary='Deploy'))
    c.host.api_send_command.assert_not_called()


@pytest.mark.asyncio
async def test_background_observation_never_auto_deploys_or_prepares_gate_questions(state):
    c=connection(state)
    c.live=AsyncMock()
    c.host._read_terminal_history=lambda *_: {'entries':[{'kind':'assistant','text':'Ready to deploy.'}], 'cursor':'','has_more':False}
    for _ in range(3): await c.observe_once()
    c.host.api_send_command.assert_not_called()
    c.live.assert_not_called()
    assert not c.state().get('pending')
    context=await c.context()
    assert context['deployment_workflow']=='pretest_idle_timeout'
    assert 'approval_question' not in context and 'approved_release' not in context


@pytest.mark.asyncio
async def test_ordinary_delivery_does_not_retry_after_uncertain_failure(state):
    c=connection(state)
    c.host.api_send_command.side_effect=RuntimeError('uncertain delivery')
    with pytest.raises(RuntimeError):
        await c.execute(call('send_instructions',summary='Go ahead with the prepared release.',interrupt=False))
    assert c.host.api_send_command.await_count==1
    assert not c.state().get('approved')


def test_prompt_contract_waits_for_comments_without_creating_an_approval_system():
    for prompt in (voice.VOICE_PROMPT,voice.BACKEND_PROMPT):
        assert voice.DEPLOYMENT_GUIDANCE in prompt
        assert 'three minutes without user input' in prompt
        assert 'BEFORE testing, not before deployment' in prompt
        assert 'Already-given directions to proceed' in prompt
        assert 'Existing project, service and sensitive-action approval requirements still apply' in prompt
        assert 'Deployment requires ONE explicit approval' not in prompt
        assert 'approval_question' not in prompt


@pytest.mark.parametrize('paused', [False,True])
def test_controller_outage_only_retains_a_known_explicit_pause(tmp_path,monkeypatch,capsys,paused):
    statefile=tmp_path/'guards.json'
    statefile.write_text(json.dumps({'alpha':{'active':True,'paused':paused,'root':'root'}}))
    monkeypatch.setattr(voice_hook,'STATE_PATH',statefile)
    monkeypatch.setenv('TMUX_DASH_VOICE_SESSION','alpha')
    monkeypatch.setattr(voice_hook.sys,'stdin',io.StringIO(json.dumps({'session_id':'root','hook_event_name':'PreToolUse','tool_name':'Bash','tool_input':{'command':'python deploy.py'}})))
    monkeypatch.setattr(voice_hook.socket,'socket',Mock(side_effect=OSError('unavailable')))
    voice_hook.main()
    output=capsys.readouterr().out
    if paused: assert json.loads(output)['hookSpecificOutput']['permissionDecision']=='deny'
    else: assert output==''


@pytest.mark.parametrize('paused',[False,True])
def test_disconnect_does_not_add_or_release_an_explicit_pause(state,paused):
    c=connection(state)
    c.live_id='provider-session'
    c.host.api_interrupt_session=AsyncMock()
    c.mutate(lambda row: row.update(paused=paused,pending={'request_id':'legacy'},approved={'scope':'legacy'}))
    c.finish_connection_state()
    assert c.state()['paused'] is paused
    assert not c.state()['connected']
    assert not c.state().get('pending') and not c.state().get('approved')
    c.host.api_interrupt_session.assert_not_called()


def test_old_connection_cannot_change_replacement_connection_state(state):
    c=connection(state)
    c.live_id='provider-session'
    c.mutate(lambda row: row.update(nonce='replacement',paused=True))
    before=c.state()
    c.finish_connection_state()
    assert c.state()==before
