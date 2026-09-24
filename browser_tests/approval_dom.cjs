// NODE_PATH=/path/to/jsdom/node_modules node browser_tests/approval_dom.cjs
// Synthetic sockets/audio only. This verifies DOM state, not real browser layout or sound.
const {JSDOM} = require('jsdom');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
(async()=>{
 const dom = new JSDOM('<!doctype html><body><nav><button>Other tab</button></nav><main id="main"><textarea></textarea></main></body>',{url:'https://example.test/approval-test',runScripts:'outside-only',pretendToBeVisual:true});
 const w=dom.window, commands=[], audioEvents=[], track={enabled:false,stop(){}};
 let socket,channel;
 w.fetch=async()=>({ok:true,json:async()=>({active:false})});
 w.HTMLMediaElement.prototype.pause=()=>{};
 w.WebSocket=class{static OPEN=1;constructor(){socket=this;this.readyState=1;queueMicrotask(()=>this.onopen?.())}send(raw){commands.push(JSON.parse(raw))}close(){this.readyState=3}};
 w.RTCPeerConnection=class{addTrack(){}createDataChannel(){return channel={readyState:'open',send:raw=>audioEvents.push(JSON.parse(raw)),close(){}}}async createOffer(){return{sdp:'test'}}async setLocalDescription(){}async setRemoteDescription(){}close(){}};
 Object.defineProperty(w.navigator,'mediaDevices',{value:{getUserMedia:async()=>({getTracks:()=>[track],getAudioTracks:()=>[track]})}});
 w.eval(fs.readFileSync(path.join(__dirname,'../voice_mode.js'),'utf8'));
 const node=id=>w.document.getElementById('voice-'+id);
 try {
  await w.voiceMode.open('synthetic');await node('start').onclick();
  for(let i=0;i<8;i++)await Promise.resolve();
  channel.onmessage({data:JSON.stringify({type:'session.started'})});
  const event=d=>socket.onmessage({data:JSON.stringify(d)});
  for(const phase of ['preparing','ready','asking','awaiting_consent','failed','expired','closed']){
   const retry=['ready','failed','expired'].includes(phase);
   await event({type:'deployment',request_id:'req-1',revision:4,phase,message:'State '+phase,confirmation:phase==='asking'?'Can I release <img src=x onerror=alert(1)>?':'',can_retry:retry});
   assert.equal(w.document.querySelector('.voice-panel').dataset.approvalPhase,phase);
   assert.equal(node('approval-retry').hidden,!retry);
   assert.equal(w.document.querySelectorAll('#voice-status img').length,0);
  }
  await event({type:'deployment',request_id:'req-1',revision:4,phase:'failed',message:'Preparation failed',can_retry:true});
  node('approval-retry').focus();node('approval-retry').click();
  assert.deepEqual(commands.at(-1),{type:'approval_question',request_id:'req-1',revision:4});
  assert(node('approval-retry').disabled);
  assert(!commands.some(e=>/deploy|approve/.test(e.type)));
  assert.equal(node('approval-retry').tagName,'BUTTON');
  assert.match(node('approval-retry').title,/does not approve/);
  assert.equal(track.enabled,true);
  channel.onmessage({data:JSON.stringify({type:'error',client_event_id:'approval_test'})});
  assert.equal(track.enabled,true);
  channel.onmessage({data:JSON.stringify({type:'session.input_transcript.delta',delta:'private dictation'})});
  assert(!w.document.body.textContent.includes('private dictation'));
  await event({type:'deployment',request_id:'req-1',revision:4,phase:'asking',message:'Asking',confirmation:'long assistant text '.repeat(100),can_retry:false});
  assert.equal(w.getComputedStyle(node('status')).height,'63px');
  assert.equal(w.getComputedStyle(node('status')).overflow,'hidden');
  assert.equal(w.getComputedStyle(node('status')).webkitLineClamp,'3');
  await event({type:'release_approved',message:'Release approved'});
  assert(node('approval-retry').hidden);
  w.dispatchEvent(new w.Event('pagehide'));assert.equal(track.enabled,false);
  console.log(JSON.stringify({passed:true,checks:['seven approval phases','request-bound retry sends no approval','native accessible button','text rendered safely','three-line caption style','dictation hidden','approval error preserves microphone','approval hides retry','pagehide stops capture'],environment:'jsdom; synthetic audio and sockets; no browser layout/audio assertion'},null,2));
 } finally {dom.window.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
