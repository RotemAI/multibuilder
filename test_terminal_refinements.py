"""Regressions for tab renaming, visible reading controls and browser status."""
import json
import subprocess
from pathlib import Path
from unittest.mock import patch

import pytest
from fastapi.testclient import TestClient
import app as dashboard
from test_terminal_render import _run


def test_background_wait_heredoc_is_hidden_but_following_reply_remains():
    pane = """› Please update this project

• Waited for background terminal · cat > .work/browser-
qa.cjs <<'JS'
const fs=require('fs');
const root='/tmp/project';
(async()=>{
 const vals=Object.fromEntries(fs.readFileSync('/tmp/example.env',
'utf8').split('\\n'));
})();
JS

• The browser test passed.
  The project is ready.
"""
    output='\n'.join(_run(pane)['clean'])
    assert 'Please update this project' in output
    assert 'The browser test passed.' in output
    assert 'const fs=' not in output
    assert 'Waited for background terminal' not in output
    assert "const fs=" in '\n'.join(_run(pane,clean_view=False)['clean'])


def test_background_wait_phrase_in_a_user_message_or_code_block_is_preserved():
    pane="› Why does it say Waited for background terminal?\n\n• Example:\n```text\n• Waited for background terminal · example\n```\n"
    assert '• Waited for background terminal · example' in '\n'.join(_run(pane)['clean'])


@pytest.fixture
def rename_client(tmp_path,monkeypatch):
    user={'id':'admin','username':'Tester','role':'admin'}
    monkeypatch.setattr(dashboard,'_current_user',lambda request:user)
    monkeypatch.setattr(dashboard,'_strict_session_owner',lambda name,owner=None: ('admin',user) if name=='test-session' else None)
    monkeypatch.setattr(dashboard,'_user_can_access_session',lambda user,name:name=='test-session')
    monkeypatch.setattr(dashboard,'_auto_session_names_enabled',lambda owner:False)
    monkeypatch.setattr(dashboard,'_session_tab_labels',dashboard.LockedJsonStore(tmp_path/'labels.json',lambda:{'sessions':{}}))
    monkeypatch.setattr(dashboard._session_lifecycle,'get',lambda name:{'owner_id':'admin','generation':'a'*32})
    return TestClient(dashboard.app,cookies={dashboard.AUTH_COOKIE:dashboard._make_token('admin')})


def test_session_name_can_be_edited_repeatedly_without_changing_routing(rename_client):
    for name in ['First project','Revised name','Third name','First project']:
        response=rename_client.patch('/api/sessions/test-session/name',json={'name':name})
        assert response.status_code==200
        assert response.json()['name']=='test-session'
        assert response.json()['tab_label']==name
        assert dashboard._session_tab_label('test-session')==name


def test_rename_rejects_blank_and_other_owner(rename_client):
    assert rename_client.patch('/api/sessions/test-session/name',json={'name':'   '}).status_code==400
    assert rename_client.patch('/api/sessions/other/name',json={'name':'New'}).status_code==404


def test_manual_rename_clears_pending_automatic_name(rename_client,monkeypatch):
    dashboard._session_tab_labels.update(lambda d:d['sessions'].update({'test-session':{'owner_id':'admin','generation':'a'*32,'label':'Old Task','pending':{'id':'stale'}}}))
    monkeypatch.setattr(dashboard,'_auto_session_names_enabled',lambda owner:True)
    response=rename_client.patch('/api/sessions/test-session/name',json={'name':'My actual name'})
    assert response.status_code==200
    assert dashboard._session_tab_label('test-session')=='My actual name'
    assert 'pending' not in dashboard._session_tab_label_rows()['test-session']


UI_DRIVER=r'''
const fs=require('fs'),vm=require('vm'),src=fs.readFileSync(process.argv[1],'utf8'),input=JSON.parse(process.argv[2]);
const el={style:{},title:'',classList:{classes:new Set(),remove(...xs){xs.forEach(x=>this.classes.delete(x))},add(...xs){xs.forEach(x=>this.classes.add(x))}},setAttribute:()=>{}};
const ctx=vm.createContext({console,BASE:'',MEMBER_SIMPLE:!!input.simple,esc:String,_browserBadgeRequest:null,
 localStorage:{getItem:()=>false},document:{hidden:false,getElementById:()=>el},_currentUser:{role:input.simple?'member':'admin'},_browserAuth:null,
 AbortController:class{constructor(){this.signal={};this.abort=()=>{}}},setTimeout:()=>0,clearTimeout:()=>{},
 fetch:async()=>({ok:true,json:async()=>input.payload}),});
(async()=>{
 if(input.action==='keys'){
  vm.runInContext(src.slice(src.indexOf('function buildKeyBar(name,tab){'),src.indexOf('// ── Saved project keys')),ctx);
  const html=ctx.buildKeyBar('test-session',input.tab||'raw');
  process.stdout.write(JSON.stringify({html}));
 }else{
  vm.runInContext(src.slice(src.indexOf('async function refreshBrowserAuthBadge(){'),src.indexOf('function onBrowserBadgeClick(){')),ctx);
  await ctx.refreshBrowserAuthBadge();
  process.stdout.write(JSON.stringify({classes:[...el.classList.classes],display:el.style.display,title:el.title}));
 }
})().catch(e=>{console.error(e);process.exit(1)});
'''


def ui(**scenario):
    result=subprocess.run(['node','-e',UI_DRIVER,str(Path(__file__).with_name('app.py')),json.dumps(scenario)],capture_output=True,text=True,timeout=10)
    assert result.returncode==0,result.stderr
    return json.loads(result.stdout)


@pytest.mark.parametrize('tab',['raw','chat'])
def test_reading_controls_sit_inside_the_keys_drawer(tab):
    """They are terminal controls, like Esc and the arrows, so they belong in the
    row with them. Floating above the closed drawer with no box around them made
    the footer read as two unrelated strips, which is what it looked like."""
    before,_,inside=ui(action='keys',simple=False,tab=tab)['html'].partition('key-bar-toggle')
    for label in ('My last message</button>','Latest output</button>'):
        assert label not in before
        assert label in inside
    assert 'Freeze</button>' not in inside
    assert 'class="key-button-row"' in inside


@pytest.mark.parametrize('tab',['raw','chat'])
def test_a_simple_member_keeps_the_reading_controls_on_screen(tab):
    """There is no drawer in the simplified view, so there is nothing to put them
    inside of and nothing hiding them."""
    visible=ui(action='keys',simple=True,tab=tab)['html'].split('upload-bar')[0]
    assert 'My last message</button>' in visible
    assert 'Latest output</button>' in visible
    assert 'Freeze</button>' not in visible


@pytest.mark.parametrize('running,leases,expected',[(False,0,'bad'),(True,0,'ok'),(True,1,'working')])
@pytest.mark.parametrize('simple',[False,True])
def test_browser_badge_reports_connection_and_work(simple,running,leases,expected):
    browser={'id':'default','account_browser':True,'running':running,'connected':running,'active_leases':leases}
    data=ui(action='badge',simple=simple,payload={'browser':browser} if simple else {'sessions':[browser]})
    assert expected in data['classes']
    assert data['display']!='none'


def test_new_browser_proxy_routes_start_direct(monkeypatch):
    conf={'enabled':True,'sessions':{}}
    monkeypatch.setattr(dashboard,'_proxy_conf',lambda:conf)
    monkeypatch.setattr(dashboard,'_proxy_save',lambda c:None)
    dashboard._claim_browser_proxy_session({'id':'default','display':99})
    assert conf['sessions']['default']['enabled'] is False


def test_freeze_retains_visible_text_while_new_output_is_buffered():
    source=Path(__file__).with_name('app.py')
    script=r'''
const fs=require('fs'),vm=require('vm'),src=fs.readFileSync(process.argv[1],'utf8');
const st={fullText:'The original message',frozen:false};let renders=0;
const ctx=vm.createContext({getRawState:()=>st,document:{getElementById:()=>null},renderRawText:()=>renders++});
vm.runInContext(src.slice(src.indexOf('function _rawVisibleText(st){'),src.indexOf('const CLEAN_VIEW_ON=')),ctx);
ctx.toggleRawFreeze('demo');st.fullText+='\nNew output';const held=ctx._rawVisibleText(st);
ctx.toggleRawFreeze('demo');const resumed=ctx._rawVisibleText(st);
process.stdout.write(JSON.stringify({held,resumed,renders}));
'''
    response=subprocess.run(['node','-e',script,str(source)],capture_output=True,text=True,timeout=10)
    assert response.returncode==0,response.stderr
    assert json.loads(response.stdout)=={'held':'The original message','resumed':'The original message\nNew output','renders':1}


@pytest.mark.asyncio
async def test_rename_checks_generation_inside_the_write(rename_client,monkeypatch):
    from starlette.requests import Request
    generations=iter(['a'*32,'b'*32])
    monkeypatch.setattr(dashboard._session_lifecycle,'get',lambda n:{'generation':next(generations)})
    response=await dashboard.api_rename_session(Request({'type':'http'}),'test-session',dashboard.RenameSessionBody(name='A different session'))
    assert response.status_code==409
    assert not dashboard._session_tab_label_rows()


@pytest.mark.parametrize('frozen,reading,expected_top', [(True, False, 137), (False, True, 137), (False, False, 900)])
def test_terminal_scroll_position_survives_roster_redraw(frozen, reading, expected_top):
    script=r'''
const fs=require('fs'),vm=require('vm'),src=fs.readFileSync(process.argv[1],'utf8'),input=JSON.parse(process.argv[2]);
const start=src.indexOf('        st.fullText=cached.text;'),end=src.indexOf('        startRawPolling(s.name);',start);
const rawEl={scrollTop:0};const st={frozen:input.frozen,userScrolledUp:input.reading};
const ctx=vm.createContext({st,cached:{text:'New buffer',scrollTop:137},rawEl,s:{name:'demo'},infoEl:null,
 renderRawText:()=>{rawEl.scrollTop=900},_setRawScroll:(el,top)=>{el.scrollTop=top}});
vm.runInContext(src.slice(start,end),ctx);
process.stdout.write(JSON.stringify({top:rawEl.scrollTop,reading:st.userScrolledUp}));
'''
    response=subprocess.run(['node','-e',script,str(Path(__file__).with_name('app.py')),json.dumps({'frozen':frozen,'reading':reading})],capture_output=True,text=True,timeout=10)
    assert response.returncode==0,response.stderr
    assert json.loads(response.stdout)=={'top':expected_top,'reading':frozen or reading}


@pytest.mark.parametrize('simple,tab,mobile,switches',[
    (False,None,False,0),(True,None,False,0),(False,None,True,1),
    (False,'raw',False,0),(False,'chat',False,1),
])
def test_reading_controls_only_switch_when_terminal_is_not_visible(simple,tab,mobile,switches):
    script=r'''
const fs=require('fs'),vm=require('vm'),src=fs.readFileSync(process.argv[1],'utf8'),input=JSON.parse(process.argv[2]);
let switches=0,jumps=0;const activeTabs=input.tab?{demo:input.tab}:{};
const ctx=vm.createContext({activeTabs,MEMBER_SIMPLE:input.simple,window:{matchMedia:()=>({matches:input.mobile})},sessions:[{name:'demo'}],switchTab:()=>switches++,
 getRawState:()=>({fullText:'Existing terminal',firstLoad:false}),startRawPolling:()=>{throw Error('Unexpected reload')},statusInfoEl:null,
 jumpToLastUserMessage:()=>jumps++});
vm.runInContext(src.slice(src.indexOf('function _defaultSessionView(){'),src.indexOf('const rawState={};')),ctx);
vm.runInContext(src.slice(src.indexOf('function readTerminal(action,name){'),src.indexOf('function _rawVisibleText(st){')),ctx);
ctx.readTerminal('last','demo');
process.stdout.write(JSON.stringify({switches,jumps}));
'''
    response=subprocess.run(['node','-e',script,str(Path(__file__).with_name('app.py')),json.dumps({'simple':simple,'tab':tab,'mobile':mobile})],capture_output=True,text=True,timeout=10)
    assert response.returncode==0,response.stderr
    assert json.loads(response.stdout)=={'switches':switches,'jumps':1}


def test_a_closing_session_cannot_be_renamed(rename_client,monkeypatch):
    monkeypatch.setattr(dashboard._session_lifecycle,'get',lambda name:{'generation':'a'*32,'desired_state':'deleting'})
    response=rename_client.patch('/api/sessions/test-session/name',json={'name':'Too late'})
    assert response.status_code==409
    assert not dashboard._session_tab_label_rows()


@pytest.fixture
def proxy_client(monkeypatch):
    conf={'enabled':True,'sessions':{'default':{'enabled':False,'local_port':3128},'other':{'enabled':True,'local_port':3130}}}
    monkeypatch.setattr(dashboard,'_auth_admin_ok',lambda request:True)
    monkeypatch.setattr(dashboard,'_proxy_conf',lambda:json.loads(json.dumps(conf)))
    monkeypatch.setattr(dashboard,'_proxy_presets',lambda:{})
    monkeypatch.setattr(dashboard,'_proxy_save',lambda value:conf.update(value))
    return TestClient(dashboard.app,cookies={dashboard.AUTH_COOKIE:dashboard._make_token('admin')}),conf


def test_residential_escalation_requires_a_direct_failure(proxy_client):
    client,conf=proxy_client
    assert client.post('/api/browser/proxy',json={'enabled':True}).status_code==400
    assert conf['sessions']['default']['enabled'] is False


def test_residential_can_be_used_after_direct_failure(proxy_client):
    client,conf=proxy_client
    assert client.post('/api/browser/proxy',json={'enabled':True,'direct_failed':True}).status_code==200
    assert conf['sessions']['default']['enabled'] is True


def test_returning_to_direct_does_not_change_another_browser(proxy_client):
    client,conf=proxy_client
    conf['sessions']['default']['enabled']=True
    assert client.post('/api/browser/proxy',json={'enabled':False}).status_code==200
    assert conf['sessions']['default']['enabled'] is False
    assert conf['enabled'] is True
    assert conf['sessions']['other']['enabled'] is True
