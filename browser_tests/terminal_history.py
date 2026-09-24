"""Browser regression checks for terminal history. Uses synthetic session data."""
import json
import re
from pathlib import Path
from playwright.sync_api import sync_playwright

source = (Path(__file__).resolve().parents[1] / 'app.py').read_text()
html = re.search(r'^HTML_PAGE = r"""([\s\S]*?)^"""', source, re.M)[1]
js = re.search(r'<script[^>]*>([\s\S]*?)</script>', html)[1]
region = js[js.index('function getRawState('):js.index('// ── Freeze ─')]
tracking = js[js.index('function _ensureRawScrollTracking('):js.index('function applyRawPayload(')]
bootstrap = """
var rawState={},sessions=[{name:'demo',logical_incarnation:'one'}],selectedSession=null,BASE='';
localStorage.setItem('terminalCleanView','true');
"""
with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    try:
        for width, height in [(1440, 1000), (390, 844)]:
            page = browser.new_page(viewport={'width':width,'height':height})
            page.route('https://terminal.test/**', lambda route: route.fulfill(body='<html><body></body></html>', content_type='text/html'))
            page.goto('https://terminal.test/')
            page.set_content('<style>#raw-demo{height:300px;overflow:auto;overflow-anchor:none;font:14px monospace}.terminal-history-entry{margin:16px 0}.terminal-history-text{white-space:pre-wrap}</style><div id="raw-demo"></div>')
            page.add_script_tag(content=bootstrap + region + tracking)
            result = page.evaluate("""async()=>{
              const assert=(ok,msg)=>{if(!ok)throw Error(msg)};
              const st=getRawState('demo'),parts=_terminalParts('demo');
              _ensureRawScrollTracking(parts.scroll,st,'demo');
              parts.live.textContent=Array.from({length:100},(_,i)=>'Live row '+i).join('\\n');
              parts.live.style.whiteSpace='pre';
              let calls=0;
              window.fetch=async()=>({ok:true,json:async()=>{
                calls++;
                if(calls<5)return {entries:[],cursor:'cursor-'+calls,at_start:false};
                return {entries:[{kind:'user',text:'Original request\\n'+'Earlier line\\n'.repeat(70)}],cursor:'older',at_start:false};
              }});
              parts.scroll.scrollTop=150;
              const before=parts.live.getBoundingClientRect().top;
              await loadTerminalHistory('demo');
              assert(calls===5,'Hidden pages stopped pagination');
              assert(Math.abs(before-parts.live.getBoundingClientRect().top)<2,'Prepend moved the reader');
              assert(parts.entries.textContent.includes('Original request'),'Original request missing');
              const saved=parts.entries.firstChild;
              _terminalParts('demo');
              assert(parts.entries.firstChild===saved,'Live refresh discarded history nodes');
              window.fetch=async()=>({ok:true,json:async()=>({entries:[{kind:'assistant',text:'Oldest reply'}],cursor:'',at_start:true})});
              await loadTerminalHistory('demo');
              assert(parts.button.textContent==='Beginning of session','Beginning label missing');
              assert(parts.entries.firstChild.textContent.includes('Oldest reply'),'Earlier page order wrong');

              // A short filtered pane cannot generate a scroll event.
              st.history=null;parts.live.textContent='';
              const tiny=_terminalParts('demo');tiny.scroll.scrollTop=0;
              calls=0;
              window.fetch=async()=>({ok:true,json:async()=>{calls++;return {entries:[{kind:'user',text:'Wheel reached history'}],at_start:true,cursor:''}}});
              tiny.scroll.dispatchEvent(new WheelEvent('wheel',{deltaY:-60}));
              await new Promise(resolve=>setTimeout(resolve,30));
              assert(calls===1&&tiny.entries.textContent.includes('Wheel reached history'),'Wheel on short pane did not load');
              st.history=null;_terminalParts('demo');
              const start=new Event('touchstart');Object.defineProperty(start,'touches',{value:[{clientY:100}]});
              const move=new Event('touchmove');Object.defineProperty(move,'touches',{value:[{clientY:140}]});
              tiny.scroll.dispatchEvent(start);tiny.scroll.dispatchEvent(move);
              await new Promise(resolve=>setTimeout(resolve,30));
              assert(calls===2,'Touch on short pane did not load');

              const sample="     86 +    return {'figure':index+1}\\n     87 +            'bounds_pt':[]\\n     88 +\\n• The drawings are ready.";
              assert(applyRawFilter(sample)==='• The drawings are ready.','Clipped diff leaked');
              localStorage.setItem('terminalCleanView','false');
              assert(applyRawFilter(sample)===sample,'Raw view lost code');
              return {width:innerWidth,emptyPagesSkipped:4,anchorPreserved:true,historyRetained:true,wheel:true,touch:true,clean:true,raw:true};
            }""")
            print(json.dumps(result))
            page.close()
    finally:
        browser.close()
