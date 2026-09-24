"""Date boundaries, lifetime compatibility, and admin-only usage selection."""
import asyncio
import json
from datetime import datetime, timezone, timedelta
from types import SimpleNamespace

import pytest
import app


NOW = datetime(2026, 9, 13, 12, tzinfo=timezone.utc)


class Clock(datetime):
    @classmethod
    def now(cls, tz=None):
        return NOW


@pytest.fixture
def usage(monkeypatch, tmp_path):
    monkeypatch.setattr(app, 'datetime', Clock)
    monkeypatch.setattr(app, '_user_codex_config_dir', lambda user: tmp_path / user['id'])
    user = {'id': 'sample'}
    stamps = [NOW.replace(hour=0), NOW-timedelta(days=2), NOW-timedelta(days=5),
              NOW-timedelta(days=7), NOW-timedelta(days=7, seconds=1)]
    monkeypatch.setattr(app, '_iter_prompt_audit_reverse', lambda: iter([
        {'user_id': 'sample', 'ts': stamp.timestamp()} for stamp in reversed(stamps)]))
    monkeypatch.setattr(app, '_prompt_audit_summary', lambda: {'sample': {'count': 5}})
    directory = tmp_path / 'sample' / 'sessions'
    directory.mkdir(parents=True)
    events = []
    for i, stamp in enumerate(sorted(stamps)):
        events.append({'timestamp': stamp.isoformat(), 'type': 'event_msg', 'payload': {
            'type': 'token_count', 'info': {
                'last_token_usage': {'input_tokens': 8, 'output_tokens': 2},
                'total_token_usage': {'input_tokens': 8*(i+1), 'output_tokens': 2*(i+1)}}}})
    (directory/'rollout-example.jsonl').write_text('\n'.join(json.dumps(row) for row in events))
    return user


@pytest.mark.parametrize('period,count', [('today',1),('2',2),('5',3),('7',4),('all',5)])
def test_usage_windows_include_exact_boundary_and_exclude_older(usage, period, count):
    stats=app._user_period_stats([usage, {'id':'empty'}],period)
    assert stats['sample']=={'total_prompts':count,'total_tokens':count*10}
    assert stats['empty']=={'total_prompts':0,'total_tokens':0}


def test_unknown_window_rejected_before_reading_accounts(monkeypatch):
    monkeypatch.setattr(app,'_current_user',lambda request:{'role':'admin'})
    monkeypatch.setattr(app,'_load_users',lambda:pytest.fail('Must not load users'))
    response=asyncio.run(app.api_admin_list_users(SimpleNamespace(query_params={'usage_period':'3'})))
    assert response.status_code==400


@pytest.mark.parametrize('period', ['all','today','2','5','7'])
def test_members_cannot_request_usage(monkeypatch, period):
    monkeypatch.setattr(app,'_current_user',lambda request:{'role':'user'})
    monkeypatch.setattr(app,'_load_users',lambda:pytest.fail('Must not load users'))
    response=asyncio.run(app.api_admin_list_users(SimpleNamespace(query_params={'usage_period':period})))
    assert response.status_code==403


@pytest.mark.parametrize('query,expected',[({},'all'),({'usage_period':'5'},'5')])
def test_admin_request_keeps_account_metadata(monkeypatch,query,expected):
    user={'id':'sample','username':'Example'}
    monkeypatch.setattr(app,'_current_user',lambda request:{'role':'admin'})
    monkeypatch.setattr(app,'_load_users',lambda:[user])
    monkeypatch.setattr(app,'_public_user',lambda u:dict(u))
    monkeypatch.setattr(app,'_user_session_count',lambda uid:4)
    monkeypatch.setattr(app,'_last_human_activity',lambda u:123)
    def stats(users,period):
        assert period==expected and users==[user]
        return {'sample':{'total_prompts':2,'total_tokens':20}}
    monkeypatch.setattr(app,'_user_period_stats',stats)
    response=asyncio.run(app.api_admin_list_users(SimpleNamespace(query_params=query)))
    data=json.loads(response.body)
    assert data['usage_period']==expected
    assert data['users']==[dict(user,session_count=4,last_activity=123,total_prompts=2,total_tokens=20)]
