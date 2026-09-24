const {test}=require('node:test');
const assert=require('node:assert/strict');
const vm=require('node:vm');
const fs=require('node:fs');
const source=fs.readFileSync(__dirname+'/voice_mode.js','utf8');
const start=source.indexOf('  function userActivity()');
const body=source.slice(start,source.indexOf('\n  }',start)+4);
function fixture(){
 let now=10000,seq=0;const timers=new Map(),messages=[];
 const c={connected:true,ending:false,lastActivityPulse:0,activityPulseTimer:null,
 Date:{now:()=>now},send:v=>messages.push({type:v.type,time:now,keys:Object.keys(v)}),
 setTimeout(fn,delay){timers.set(++seq,{fn,at:now+delay});return seq;},clearTimeout(id){timers.delete(id);}};
 vm.createContext(c);vm.runInContext(body,c);
 return {c,messages,advance(ms){now+=ms;for(const [id,t] of timers){if(t.at<=now){timers.delete(id);t.fn();}}},now:()=>now};
}
test('activity is batched but the final input still resets inactivity',()=>{
 const f=fixture();f.c.userActivity();assert.equal(f.messages.length,1);
 for(let i=0;i<10;i++){f.advance(100);f.c.userActivity();}
 assert.equal(f.messages.length,2);
 f.advance(250);assert.equal(f.messages.length,3);assert.equal(f.messages.at(-1).time,f.now());
 assert.ok(f.messages.every(m=>m.type==='user_activity'&&m.keys.join()==='type'));
});
test('no activity traffic before connection or while ending',()=>{
 const f=fixture();f.c.connected=false;f.c.userActivity();
 f.c.connected=true;f.c.ending=true;f.c.userActivity();f.advance(300);
 assert.equal(f.messages.length,0);
});
