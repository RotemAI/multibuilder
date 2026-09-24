import asyncio
from types import SimpleNamespace
from unittest.mock import AsyncMock, Mock

import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient
import idle_recap as recap


@pytest.fixture
def host(tmp_path):
    binding={'session_name':'alpha','owner_id':'one','generation':'gen','resume_uuid':'root'}
    entries=[{'kind':'user','text':'Fix the phone layout','id':'1'},
             {'kind':'assistant','text':'The layout is fixed and tested. Deployment is waiting for your approval.','id':'2'}]
    return SimpleNamespace(MESSAGES_DIR=tmp_path,
        _terminal_history_binding=Mock(return_value=binding),
        _detect_activity_raw=Mock(return_value={'status':'idle'}),
        _read_terminal_history=Mock(return_value={'entries':entries,'has_more':False,'cursor':''}),
        get_tmux_sessions=lambda:[{'name':'alpha'}],_load_session_owners=lambda:{'alpha':'one'},
        llm_call=AsyncMock(return_value='- Phone layout is fixed and tested.\n- Waiting for your approval to deploy.'),
        logger=Mock(),_current_user=lambda r:{'id':'one'} if r.cookies.get('owner')=='one' else None,
        _user_can_access_session=lambda u,n:n=='alpha')


async def settle(service):
    jobs=list(service.jobs.values())
    if jobs:
        await asyncio.gather(*jobs,return_exceptions=True)


@pytest.mark.asyncio
async def test_twenty_seconds_required_and_unchanged_history_is_not_resummarized(host):
    service=recap.Service(host)
    await service.tick(now=100)
    await service.tick(now=119.999)
    host.llm_call.assert_not_called()
    await service.tick(now=120)
    await settle(service)
    host.llm_call.assert_awaited_once()
    row=recap.storage(host).read()['alpha']
    assert row['ready'] and 'Waiting' in row['text']
    service.observed['alpha']['check_at']=0
    await service.tick(now=160)
    await settle(service)
    host.llm_call.assert_awaited_once()
    assert (host.MESSAGES_DIR/'idle-recaps.json').stat().st_mode & 0o777==0o600


@pytest.mark.asyncio
async def test_new_activity_hides_recap_and_restarts_timer(host):
    service=recap.Service(host)
    await service.tick(now=100);await service.tick(now=120);await settle(service)
    host._detect_activity_raw.return_value={'status':'busy'}
    await service.tick(now=121)
    assert not recap.storage(host).read()['alpha']['ready']
    host._detect_activity_raw.return_value={'status':'idle'}
    host._read_terminal_history.return_value['entries'].append({'kind':'assistant','text':'Now deployed and checked.','id':'3'})
    await service.tick(now=122);await service.tick(now=141)
    assert host.llm_call.await_count==1
    await service.tick(now=142);await settle(service)
    assert host.llm_call.await_count==2


@pytest.mark.asyncio
async def test_history_change_while_apparently_idle_resets_timer(host):
    service=recap.Service(host)
    await service.tick(now=100)
    host._read_terminal_history.return_value['entries'].append({'kind':'assistant','text':'Another result','id':'3'})
    await service.tick(now=120)
    host.llm_call.assert_not_called()
    await service.tick(now=140);await settle(service)
    host.llm_call.assert_awaited_once()


@pytest.mark.asyncio
@pytest.mark.parametrize('change',['busy','owner','root','generation','history'])
async def test_changed_session_during_generation_cannot_publish(host,change):
    async def generate(*args,**kwargs):
        if change=='busy':host._detect_activity_raw.return_value={'status':'busy'}
        elif change=='history':host._read_terminal_history.return_value['entries'].append({'kind':'user','text':'Stop that plan','id':'3'})
        else:
            field={'owner':'owner_id','root':'resume_uuid','generation':'generation'}[change]
            host._terminal_history_binding.return_value=dict(host._terminal_history_binding.return_value,**{field:'changed'})
        return 'Old recap'
    host.llm_call.side_effect=generate
    service=recap.Service(host)
    await service.tick(now=100);await service.tick(now=120);await settle(service)
    assert not recap.storage(host).read().get('alpha',{}).get('ready')


@pytest.mark.asyncio
async def test_failure_has_labeled_bounded_fallback(host):
    host.llm_call.side_effect=RuntimeError('unavailable')
    host._read_terminal_history.return_value['entries'][-1]['text']='Update '*200
    service=recap.Service(host)
    await service.tick(now=100);await service.tick(now=120);await settle(service)
    row=recap.storage(host).read()['alpha']
    assert row['fallback'] and 'Latest assistant update' in row['text']
    assert len(row['text'].split())<=75


def test_hard_word_cap_and_bullets():
    assert len(recap.limit_words('word '*120).split())<=75
    assert len(recap.limit_words('\n'.join('- '+str(i) for i in range(100))).split())<=75
    assert recap.limit_words('- Fixed layout.\n* Waiting for approval.')=='• Fixed layout.\n• Waiting for approval.'


def test_context_combines_recent_twelve_messages_and_pages(host):
    entries=[{'kind':'assistant','text':f'Result {i}','id':str(i)} for i in range(14)]
    host._read_terminal_history.side_effect=[{'entries':entries[7:],'has_more':True,'cursor':'older'},
                                           {'entries':entries[:7],'has_more':False,'cursor':''}]
    text,sig,last=recap.context(host,host._terminal_history_binding.return_value)
    assert 'Result 2\n' in text and 'Result 0\n' not in text
    assert 'Result 13' in text and last=='Result 13' and sig


@pytest.mark.asyncio
async def test_waiting_for_user_also_gets_recap_without_resuming_session(host):
    host._detect_activity_raw.return_value={'status':'waiting'}
    service=recap.Service(host)
    await service.tick(now=100);await service.tick(now=120);await settle(service)
    assert recap.storage(host).read()['alpha']['ready']


@pytest.mark.asyncio
async def test_endpoint_rechecks_owner_history_and_root(host):
    service=recap.Service(host)
    await service.tick(now=100);await service.tick(now=120);await settle(service)
    app=FastAPI();recap.install(app,host)
    with TestClient(app) as client:
        assert client.get('/api/sessions/alpha/idle-recap').status_code==404
        client.cookies.set('owner','one')
        assert client.get('/api/sessions/private/idle-recap').status_code==404
        response=client.get('/api/sessions/alpha/idle-recap')
        assert response.json()['recap']['text']
        assert response.headers['cache-control']=='private, no-store'
        host._terminal_history_binding.return_value=dict(host._terminal_history_binding.return_value,resume_uuid='other')
        assert client.get('/api/sessions/alpha/idle-recap').json()['recap'] is None


@pytest.mark.asyncio
async def test_endpoint_drops_stale_history_even_before_controller_next_tick(host):
    service=recap.Service(host)
    await service.tick(now=100);await service.tick(now=120);await settle(service)
    app=FastAPI();recap.install(app,host)
    with TestClient(app) as client:
        client.cookies.set('owner','one')
        host._read_terminal_history.return_value['entries'].append({'kind':'user','text':'New work','id':'3'})
        assert client.get('/api/sessions/alpha/idle-recap').json()['recap'] is None
