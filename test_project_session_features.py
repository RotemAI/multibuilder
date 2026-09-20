"""Regression coverage for naming preferences and durable private saved items."""
import json
from pathlib import Path
from unittest.mock import patch

import pytest
from fastapi.testclient import TestClient
import app as dashboard


@pytest.fixture
def private_user(tmp_path, monkeypatch):
    user = {"id": "test-owner", "username": "Tester", "role": "user"}
    monkeypatch.setattr(dashboard, "_user_data_dir", lambda u: tmp_path / str(u["id"]))
    monkeypatch.setattr(dashboard, "_current_user", lambda request: user)
    return user


def test_naming_is_on_by_default_and_scoped_to_the_user(private_user):
    client = TestClient(dashboard.app, cookies={dashboard.AUTH_COOKIE: dashboard._make_token("admin")})
    assert client.get('/api/preferences').json() == {"auto_session_names": True}
    response = client.post('/api/preferences', json={"auto_session_names": False})
    assert response.status_code == 200
    assert client.get('/api/preferences').json()["auto_session_names"] is False
    assert dashboard._user_preferences({"id": "someone-else"})["auto_session_names"] is True
    assert dashboard._preferences_path(private_user).stat().st_mode & 0o777 == 0o600


def test_naming_preference_requires_a_boolean(private_user):
    response = TestClient(dashboard.app, cookies={dashboard.AUTH_COOKIE: dashboard._make_token("admin")}).post('/api/preferences', json={"auto_session_names": "false"})
    assert response.status_code == 422


def test_default_does_not_queue_automatic_renaming(monkeypatch):
    monkeypatch.setattr(dashboard, '_auto_session_names_enabled', lambda owner: False, raising=False)
    assert dashboard._queue_session_tab_label('example', 'test-owner', 'Rename from task') == ''


def test_disabled_preference_does_not_show_old_generated_label(monkeypatch):
    monkeypatch.setattr(dashboard, '_auto_session_names_enabled', lambda owner: False, raising=False)
    assert dashboard._session_tab_label('my-project', {'my-project': {'owner_id':'test-owner', 'label':'Old Task'}}) == ''


def test_saved_items_preserve_exact_passwords_and_private_links():
    from project_saved import collect_saved_items
    result = collect_saved_items({}, [
        '**Username:** `nimo@example.com`\n**Password:** `a,b;c$!`\n'
        'Project: [Open](https://builder5.rotem.ai/Nimo/demo/)\n'
        'Report: [Download](/home/nimrod_rotem/web-projects/Nimo/demo/report.pdf:12)'
    ])
    assert {c['label'].lower(): c['value'] for c in result['creds']} == {'username':'nimo@example.com','password':'a,b;c$!'}
    assert result['urls'] == ['https://builder5.rotem.ai/Nimo/demo/']
    assert result['files'] == ['/home/nimrod_rotem/web-projects/Nimo/demo/report.pdf']


def test_saved_items_accumulate_without_duplicates_and_include_uploads():
    from project_saved import collect_saved_items
    previous = collect_saved_items({}, ['https://example.com/app\nPassword: `keep;me,exact`'])
    result = collect_saved_items(previous, ['https://example.com/app', '| Username | test-user |'], ['/tmp/upload.pdf'])
    assert result['urls'] == ['https://example.com/app']
    assert result['creds'] == [{'label':'Password','value':'keep;me,exact'}, {'label':'Username','value':'test-user'}]
    assert result['files'] == ['/tmp/upload.pdf']


def test_saved_endpoint_never_reads_another_owner(private_user, monkeypatch):
    monkeypatch.setattr(dashboard, '_strict_session_owner', lambda *args: None)
    monkeypatch.setattr(dashboard, '_collect_session_saved_items', lambda *args: pytest.fail('must not read denied session'), raising=False)
    response = TestClient(dashboard.app, cookies={dashboard.AUTH_COOKIE: dashboard._make_token("admin")}).get('/api/sessions/other/saved-items')
    assert response.status_code == 404


def test_saved_collection_is_durable_and_generation_scoped(private_user, tmp_path, monkeypatch):
    import os
    owner_id = private_user['id']
    generation = 'a' * 32
    life = {'resume_uuid':'root', 'generation':generation, 'owner_id':owner_id,
            'managed':True, 'desired_state':'running', 'cwd':str(tmp_path)}
    transcript = tmp_path / 'rollout.jsonl'
    events = [
        {'type':'session_meta','payload':{'id':'root','session_id':'root','thread_source':'user'}},
        {'type':'event_msg','payload':{'type':'user_message','message':'Username: demo\nPassword: `dummy,;value`'}},
        {'type':'event_msg','payload':{'type':'agent_message','message':'Open https://example.com/project/'}},
        {'type':'event_msg','payload':{'type':'agent_reasoning','message':'Password: should-not-save'}},
        {'type':'event_msg','payload':{'type':'user_message','message':'# AGENTS.md instructions\nPassword: system-value'}},
    ]
    transcript.write_text(''.join(json.dumps(e)+'\n' for e in events))
    monkeypatch.setattr(dashboard._session_lifecycle, 'get', lambda n: life)
    monkeypatch.setattr(dashboard, '_strict_session_owner', lambda *args: (owner_id, private_user))
    monkeypatch.setattr(dashboard, '_terminal_history_binding', lambda *args: {
        'session_name':'demo', 'owner_id':owner_id, 'owner':private_user,
        'generation':life['generation'], 'resume_uuid':'root'})
    monkeypatch.setattr(dashboard, '_user_uploads_dir', lambda u: tmp_path / 'uploads' / u['id'])
    monkeypatch.setattr(dashboard, 'cache', {})
    def opener(binding):
        assert binding['owner_id'] == owner_id
        fd = os.open(transcript, os.O_RDONLY)
        st = os.fstat(fd)
        return fd, 'rollout.jsonl', (st.st_dev, st.st_ino, st.st_size, st.st_mtime_ns)
    monkeypatch.setattr(dashboard, '_open_session_close_rollout', opener)
    first = dashboard._collect_session_saved_items('demo', private_user, generation)
    assert first['creds'] == [{'label':'Username','value':'demo'}, {'label':'Password','value':'dummy,;value'}]
    with transcript.open('a') as stream:
        stream.write(json.dumps({'type':'event_msg','payload':{'type':'agent_message','message':'File: /tmp/report.pdf'}})+'\n')
    second = dashboard._collect_session_saved_items('demo', private_user, generation)
    assert second['urls'] == ['https://example.com/project/']
    assert second['files'] == ['/tmp/report.pdf']
    life['generation'] = 'b' * 32
    third = dashboard._collect_session_saved_items('demo', private_user, life['generation'])
    assert third['creds'] == first['creds']
    stores=list((dashboard._user_data_dir(private_user) / 'saved-projects').glob('*.json'))
    assert len(stores) == 2
    assert all(p.stat().st_mode & 0o777 == 0o600 for p in stores)


@pytest.mark.asyncio
async def test_saved_endpoint_rechecks_owner_after_read(private_user, monkeypatch):
    from starlette.requests import Request
    checks=iter([(private_user['id'], private_user), None])
    monkeypatch.setattr(dashboard, '_strict_session_owner', lambda *args: next(checks))
    monkeypatch.setattr(dashboard, '_collect_session_saved_items', lambda *args: {'creds':[{'label':'Password','value':'dummy'}]})
    response = await dashboard.api_session_saved_items(Request({'type':'http'}), 'demo')
    assert response.status_code == 409
    assert b'dummy' not in response.body


def test_no_saved_items_are_extracted_from_managed_instructions():
    from project_saved import collect_saved_items
    result=collect_saved_items({}, ['# AGENTS.md instructions\nLogin: fleet-login\nhttps://fleet.example/admin'])
    assert result == {'urls':[], 'creds':[], 'files':[]}


def test_saved_cursor_can_skip_a_large_tool_event(private_user, tmp_path, monkeypatch):
    import project_saved
    transcript=tmp_path / 'oversized.jsonl'
    transcript.write_text(
        json.dumps({'type':'session_meta','payload':{'id':'root','session_id':'root','thread_source':'user'}})+'\n'+
        json.dumps({'type':'tool_result','payload':'x'*4_000_100})+'\n'+
        json.dumps({'type':'event_msg','payload':{'type':'agent_message','message':'https://example.com/after-large-output'}})+'\n')
    state = {}
    while True:
        with transcript.open('rb') as stream:
            project_saved.scan_rollout(stream, {'resume_uuid':'root'}, state)
        if not state.get('catching_up'):
            break
    assert state['urls'] == ['https://example.com/after-large-output']


def test_a_file_the_agent_wrote_is_read_off_its_own_tool_call():
    """The rollout scan read only user_message and agent_message, so the panel
    could only ever list what was TYPED: every session on this box showed links
    and no files at all. Codex writes files through apply_patch, and its
    `*** Add File:` markers name the path exactly, so nothing is guessed out of a
    shell command and an earlier `cd` cannot make it wrong."""
    event = {
        "type": "response_item",
        "payload": {
            "type": "custom_tool_call",
            "name": "apply_patch",
            "input": '*** Begin Patch\n'
                     '*** Add File: /home/n/work/report.md\n+hello\n'
                     '*** Update File: /home/n/work/notes.md\n+more\n'
                     '*** End Patch',
        },
    }
    from project_saved import event_items
    assert event_items(event)[1] == [
        "/home/n/work/report.md", "/home/n/work/notes.md"]


def test_a_message_is_not_mistaken_for_a_file_write():
    """Only a tool call names a file. An assistant that merely quotes the marker
    is describing one, not writing it."""
    said = {"type": "event_msg",
            "payload": {"type": "agent_message",
                        "message": "I would use *** Add File: /etc/passwd here."}}
    from project_saved import event_items
    assert event_items(said)[1] == []
    assert event_items({"type": "response_item", "payload": {
        "type": "custom_tool_call", "name": "exec", "input": "ls -la"}})[1] == []


def test_teaching_the_scanner_something_new_rewinds_the_cursor():
    """The scan keeps a byte cursor so a long rollout is read once, which also
    means a change to WHAT it extracts reaches only the bytes that arrive after
    the change. Every session here had already been scanned, so learning to read
    file paths would have done nothing for any of them."""
    from project_saved import SCAN_VERSION
    assert SCAN_VERSION >= 3
