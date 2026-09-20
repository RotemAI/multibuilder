"""Regressions for the compact CPU status in the navigation header."""

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
const scenario=JSON.parse(process.argv[2]);
const quotes='"'.repeat(3);
const html=source.match(new RegExp('^HTML_PAGE = r'+quotes+'([\\s\\S]*?)^'+quotes,'m'))[1];
const js=html.match(/<script[^>]*>([\s\S]*?)<\/script>/)[1];
const start=js.indexOf('// --- Inline server stats in nav header ---');
const end=js.indexOf('// --- Open Codex health alerts',start);
let region=js.slice(start,end).replace(/\nrefreshNavStats\(\);\s*$/,'');

function makeHarness(responses){
  const elements={
    'nav-server-stats':{innerHTML:''},
    'nav-cpu-summary':{title:''},
    'nav-cpu-summary-value':{textContent:'',className:''},
  };
  let fetchCalls=0,nextTimer=1,abortCount=0,signalPassed=false,hidden=false;
  const timers=new Map();
  const fetch=async(_url,options={})=>{
    fetchCalls++;
    signalPassed=!!options.signal;
    const response=responses.shift();
    if(response.pending)return new Promise((resolve,reject)=>{
      if(options.signal)options.signal._reject=reject;
    });
    if(response.error)throw new Error(response.error);
    return {ok:response.ok!==false,status:response.status||200,json:async()=>response.payload};
  };
  class AbortController{
    constructor(){this.signal={aborted:false}}
    abort(){
      this.signal.aborted=true;
      abortCount++;
      if(this.signal._reject)this.signal._reject(new Error('aborted'));
    }
  }
  const context=vm.createContext({
    console,BASE:'',MEMBER_SIMPLE:false,fetch,AbortController,
    document:{get hidden(){return hidden},getElementById:id=>elements[id]||null},
    setTimeout:(fn,delay)=>{const id=nextTimer++;timers.set(id,{fn,delay,cleared:false});return id},
    clearTimeout:id=>{const timer=timers.get(id);if(timer)timer.cleared=true},
    refreshCodexAlertBadge:async()=>{},
  });
  vm.runInContext(region,context);
  const active=delay=>[...timers.values()].filter(t=>!t.cleared&&t.delay===delay);
  const state=()=>({
    text:elements['nav-cpu-summary-value'].textContent,
    className:elements['nav-cpu-summary-value'].className,
    title:elements['nav-cpu-summary'].title,
    fetchCalls,
    retryTimers:active(5000).length,
    retryDelays:[...timers.values()].filter(t=>!t.cleared&&t.delay!==8000).map(t=>t.delay).sort((a,b)=>a-b),
    timeoutTimers:active(8000).length,
    abortCount,
    signalPassed,
  });
  return {context,elements,active,state,setHidden:value=>{hidden=value}};
}

(async()=>{
  if(scenario==='stale-retry'){
    const h=makeHarness([
      {payload:{cpu_percent:37.5,cpu_iowait_percent:1,cpu_count:2,threads_running:1,capacity:{active_browser_leases:0},cpu_measurement:'proc_stat_delta'}},
      {error:'offline'},
    ]);
    await h.context.refreshNavStats();
    const fresh=h.state();
    await h.context.refreshNavStats();
    process.stdout.write(JSON.stringify({fresh,failed:h.state()}));
    return;
  }
  if(scenario==='first-failure-recovery'){
    const h=makeHarness([
      {error:'offline'},
      {payload:{cpu_percent:0,cpu_iowait_percent:0,cpu_count:2,threads_running:0,capacity:{active_browser_leases:0},cpu_measurement:'proc_stat_delta'}},
    ]);
    await h.context.refreshNavStats();
    const failed=h.state();
    await h.context.refreshNavStats();
    process.stdout.write(JSON.stringify({failed,recovered:h.state()}));
    return;
  }
  if(scenario==='timeout-recovery'){
    const h=makeHarness([
      {pending:true},
      {payload:{cpu_percent:12,cpu_iowait_percent:0,cpu_count:2,threads_running:1,capacity:{active_browser_leases:0},cpu_measurement:'proc_stat_delta'}},
    ]);
    const first=h.context.refreshNavStats();
    h.context.refreshNavStats();
    await Promise.resolve();
    const pending=h.state();
    const timeout=h.active(8000)[0];
    if(timeout){timeout.cleared=true;timeout.fn();}
    await first;
    const timedOut=h.state();
    const retry=h.active(5000)[0];
    if(retry){retry.cleared=true;await retry.fn();await Promise.resolve();await Promise.resolve();}
    process.stdout.write(JSON.stringify({pending,timedOut,recovered:h.state()}));
    return;
  }
  if(scenario==='backoff-reset'){
    const h=makeHarness([
      {error:'offline'},{error:'offline'},{error:'offline'},{error:'offline'},
      {error:'offline'},
      {payload:{cpu_percent:8,cpu_measurement:'proc_stat_delta'}},
      {error:'offline'},
    ]);
    const delays=[];
    for(let i=0;i<5;i++){
      await h.context.refreshNavStats();
      delays.push(h.state().retryDelays[0]);
    }
    await h.context.refreshNavStats();
    const success=h.state();
    await h.context.refreshNavStats();
    process.stdout.write(JSON.stringify({delays,success,afterReset:h.state()}));
    return;
  }
  if(scenario==='hidden-retry'){
    const h=makeHarness([
      {error:'offline'},
      {payload:{cpu_percent:9,cpu_measurement:'proc_stat_delta'}},
    ]);
    await h.context.refreshNavStats();
    const failed=h.state();
    h.setHidden(true);
    const retry=h.active(5000)[0];
    if(retry){retry.cleared=true;await retry.fn();}
    const hidden=h.state();
    h.setHidden(false);
    await h.context.refreshNavStats();
    process.stdout.write(JSON.stringify({failed,hidden,recovered:h.state()}));
    return;
  }
  const responses={
    unavailable:{payload:{cpu_percent:0,cpu_measurement:'unavailable'}},
    missing:{payload:{cpu_measurement:'proc_stat_delta'}},
    invalid:{payload:{cpu_percent:'0',cpu_measurement:'proc_stat_delta'}},
    negative:{payload:{cpu_percent:-1,cpu_measurement:'proc_stat_delta'}},
    over100:{payload:{cpu_percent:100.1,cpu_measurement:'proc_stat_delta'}},
    nonok:{ok:false,status:503,payload:{cpu_percent:0,cpu_measurement:'proc_stat_delta'}},
  };
  const h=makeHarness([responses[scenario]]);
  await h.context.refreshNavStats();
  process.stdout.write(JSON.stringify(h.state()));
})().catch(error=>{console.error(error);process.exit(1)});
"""


def run_scenario(name: str) -> dict:
    result = subprocess.run(
        [NODE, "-e", DRIVER, str(APP), json.dumps(name)],
        capture_output=True,
        text=True,
        timeout=10,
    )
    assert result.returncode == 0, result.stderr
    return json.loads(result.stdout)


def test_cpu_failure_keeps_last_measurement_and_schedules_retry():
    state = run_scenario("stale-retry")
    assert state["fresh"]["text"] == "37.5%"
    assert state["failed"]["text"] == "37.5% (stale)"
    assert "stale" in state["failed"]["className"]
    assert state["failed"]["retryTimers"] == 1


def test_cpu_first_failure_recovers_to_real_zero_on_retry():
    state = run_scenario("first-failure-recovery")
    assert state["failed"]["text"] == "unavailable"
    assert state["failed"]["retryTimers"] == 1
    assert state["recovered"]["text"] == "0%"
    assert "stale" not in state["recovered"]["className"]
    assert state["recovered"]["retryTimers"] == 0


@pytest.mark.parametrize(
    "scenario",
    ["unavailable", "missing", "invalid", "negative", "over100", "nonok"],
)
def test_invalid_cpu_responses_never_show_a_fake_zero(scenario):
    state = run_scenario(scenario)
    assert state["text"] == "unavailable"
    assert state["retryTimers"] == 1


def test_cpu_timeout_retries_and_overlapping_polls_share_one_request():
    state = run_scenario("timeout-recovery")
    assert state["pending"]["fetchCalls"] == 1
    assert state["pending"]["timeoutTimers"] == 1
    assert state["pending"]["signalPassed"] is True
    assert state["timedOut"]["abortCount"] == 1
    assert state["timedOut"]["text"] == "unavailable"
    assert state["timedOut"]["retryTimers"] == 1
    assert state["recovered"]["fetchCalls"] == 2
    assert state["recovered"]["text"] == "12%"
    assert state["recovered"]["retryTimers"] == 0


def test_cpu_retry_backoff_is_capped_and_success_resets_it():
    state = run_scenario("backoff-reset")
    assert state["delays"] == [5000, 10000, 20000, 30000, 30000]
    assert state["success"]["text"] == "8%"
    assert state["success"]["retryDelays"] == []
    assert state["afterReset"]["retryDelays"] == [5000]


def test_cpu_retry_does_not_fetch_while_tab_is_hidden():
    state = run_scenario("hidden-retry")
    assert state["failed"]["fetchCalls"] == 1
    assert state["hidden"]["fetchCalls"] == 1
    assert state["hidden"]["retryDelays"] == []
    assert state["recovered"]["fetchCalls"] == 2
    assert state["recovered"]["text"] == "9%"
