"""Exercise direct session-tab renaming without a browser or network."""

import json
import shutil
import subprocess
from pathlib import Path

import pytest


APP = Path(__file__).with_name("app.py")
NODE = shutil.which("node")
pytestmark = pytest.mark.skipif(NODE is None, reason="node is not installed")


DRIVER = r"""
const fs=require('fs'),vm=require('vm');
const source=fs.readFileSync(process.argv[1],'utf8');
const start=source.indexOf('let _renamingSession=null;');
const end=start<0?-1:source.indexOf('function renderNav()',start);
if(start<0||end<0){process.stdout.write(JSON.stringify({available:false}));process.exit(0)}
const listeners={},requests=[];let input=null,renders=0,toast='';
const label={replaceChildren(child){input=child}};
const context=vm.createContext({
  console,Promise,JSON,BASE:'',selectedSession:'alpha',
  sessions:[{name:'alpha',tab_label:'Alpha',logical_incarnation:'one'}],
  _sessionClientEpoch:{alpha:0},
  document:{createElement(){return {value:'',maxLength:0,className:'',type:'',attributes:{},
    setAttribute(k,v){this.attributes[k]=String(v)},focus(){},select(){},
    addEventListener(name,fn){listeners[name]=fn}}}},
  sessionTabLabel:s=>s.tab_label||s.name,
  _sessionLogicalIncarnation:name=>(context.sessions.find(s=>s.name===name)||{}).logical_incarnation||'',
  renderNav:()=>renders++,showToast:value=>{toast=value},
  fetch:async(url,options)=>{requests.push({url,options});return {ok:true,json:async()=>({ok:true,name:'alpha',tab_label:'Renamed session'})}},
});
vm.runInContext(source.slice(start,end),context);
(async()=>{
  context.startSessionRename('alpha',label);
  input.value='Renamed session';
  listeners.keydown({key:'Enter',preventDefault(){},stopPropagation(){}});
  await new Promise(resolve=>setImmediate(resolve));
  process.stdout.write(JSON.stringify({
    available:true,label:context.sessions[0].tab_label,renders,toast,
    request:requests.length?{url:requests[0].url,method:requests[0].options.method,
      body:JSON.parse(requests[0].options.body)}:null,
    aria:input.attributes['aria-label'],maxLength:input.maxLength,
  }));
})().catch(error=>{console.error(error);process.exit(1)});
"""


RENDER_DRIVER = r"""
const fs=require('fs'),vm=require('vm');
const source=fs.readFileSync(process.argv[1],'utf8');
const start=source.indexOf('function renderNav(){');
const end=start<0?-1:source.indexOf("navEl.addEventListener('dragover'",start);
if(start<0||end<0){process.stdout.write(JSON.stringify({available:false}));process.exit(0)}
const items=[],renamed=[],selected=[];let navQueries=0;
function makeLabel(){
  const listeners={};
  return {listeners,addEventListener(name,fn){listeners[name]=fn}};
}
function makeItem(){
  const listeners={};let label=null,markup='';
  return {listeners,dataset:{},className:'',id:'',draggable:false,
    addEventListener(name,fn){listeners[name]=fn},
    querySelector(selector){return selector==='.nav-session-id'?label:null},
    set innerHTML(value){markup=value;label=makeLabel()},get innerHTML(){return markup},
    get label(){return label},
  };
}
const navEl={
  querySelectorAll(){navQueries++;return []},
  querySelector(selector){return selector==='.nav-new-btn'?{}:null},
  insertBefore(item){items.push(item)},
};
const context=vm.createContext({
  console,navEl,items,_renamingSession:null,_tabOrderSuppressClick:false,
  selectedSession:'alpha',sessions:[{name:'alpha',tab_label:'Alpha'},{name:'beta',tab_label:'Beta'}],
  document:{createElement:makeItem},esc:value=>String(value),lastStatus:{},
  sessionTabLabel:s=>s.tab_label||s.name,_navDotClass:()=>'',
  selectSession:name=>selected.push(name),startSessionRename:name=>renamed.push(name),
  _startTabOrderDrag(){},_finishTabOrderDrag(){},_installTabTouchDrag(){},
});
vm.runInContext(source.slice(start,end),context);
context.renderNav();
let alphaStopped=false;
items[0].label.listeners.click({stopPropagation(){alphaStopped=true}});
let betaStopped=false;
items[1].label.listeners.click({stopPropagation(){betaStopped=true}});
items[1].onclick();
let rightPrevented=false,rightStopped=false;
items[1].label.listeners.contextmenu({preventDefault(){rightPrevented=true},stopPropagation(){rightStopped=true}});
const beforeGuard=navQueries;
context._renamingSession='alpha';
context.renderNav();
process.stdout.write(JSON.stringify({
  available:true,renamed,selected,alphaStopped,betaStopped,rightPrevented,rightStopped,
  guarded:navQueries===beforeGuard,
}));
"""


def run() -> dict:
    result = subprocess.run(
        [NODE, "-e", DRIVER, str(APP)],
        capture_output=True,
        text=True,
        timeout=20,
    )
    assert result.returncode == 0, result.stderr
    return json.loads(result.stdout)


def run_render() -> dict:
    result = subprocess.run(
        [NODE, "-e", RENDER_DRIVER, str(APP)],
        capture_output=True,
        text=True,
        timeout=20,
    )
    assert result.returncode == 0, result.stderr
    return json.loads(result.stdout)


def test_inline_rename_submits_and_repaints_the_tab():
    assert run() == {
        "available": True,
        "label": "Renamed session",
        "renders": 1,
        "toast": 'Renamed to "Renamed session".',
        "request": {
            "url": "/api/sessions/alpha/name",
            "method": "PATCH",
            "body": {"name": "Renamed session"},
        },
        "aria": "Session name",
        "maxLength": 128,
    }


def test_active_click_and_any_right_click_start_inline_rename():
    assert run_render() == {
        "available": True,
        "renamed": ["alpha", "beta"],
        "selected": ["beta"],
        "alphaStopped": True,
        "betaStopped": False,
        "rightPrevented": True,
        "rightStopped": True,
        "guarded": True,
    }
