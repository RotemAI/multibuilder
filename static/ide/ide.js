const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ide-monaco.js","./ide2.css","./ide3.css"])))=>i.map(i=>d[i]);
var Pl=Object.defineProperty;var Ho=e=>{throw TypeError(e)};var Il=(e,t,n)=>t in e?Pl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var dt=(e,t,n)=>Il(e,typeof t!="symbol"?t+"":t,n),Da=(e,t,n)=>t.has(e)||Ho("Cannot "+n);var u=(e,t,n)=>(Da(e,t,"read from private field"),n?n.call(e):t.get(e)),B=(e,t,n)=>t.has(e)?Ho("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),se=(e,t,n,r)=>(Da(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),ge=(e,t,n)=>(Da(e,t,"access private method"),n);var Ca=Array.isArray,Ol=Array.prototype.indexOf,pa=Array.prototype.includes,Ea=Array.from,mi=Object.defineProperty,Ln=Object.getOwnPropertyDescriptor,bi=Object.getOwnPropertyDescriptors,Rl=Object.prototype,Dl=Array.prototype,go=Object.getPrototypeOf,jo=Object.isExtensible;function ts(e){return typeof e=="function"}const Ll=()=>{};function Fl(e){return e()}function Xa(e){for(var t=0;t<e.length;t++)e[t]()}function xi(){var e,t,n=new Promise((r,s)=>{e=r,t=s});return{promise:n,resolve:e,reject:t}}function Hl(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const n=[];for(const r of e)if(n.push(r),n.length===t)break;return n}const Ze=2,Ir=4,Xs=8,mo=1<<24,Gt=16,Ft=32,Cn=64,Za=128,bo=256,Lt=512,Je=1024,Xe=2048,Xt=4096,pt=8192,wt=16384,Fr=32768,_a=1<<25,jn=65536,ga=1<<17,jl=1<<18,Hr=1<<19,yi=1<<20,cn=1<<25,hr=65536,ma=1<<21,Sr=1<<22,Fn=1<<23,dn=Symbol("$state"),wi=Symbol("component"),ki=Symbol("legacy props"),Bl=Symbol(""),ia=Symbol("attributes"),Qa=Symbol("class"),eo=Symbol("style"),as=Symbol("text"),la=Symbol("form reset"),Zs=new class extends Error{constructor(){super(...arguments);dt(this,"name","StaleReactionError");dt(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var pi;const xo=!!((pi=globalThis.document)!=null&&pi.contentType)&&globalThis.document.contentType.includes("xml"),Vl=1,Kl=2,$i=4,Ul=8,Wl=16,ql=1,Gl=2,Si=4,Yl=8,Jl=16,Xl=1,Zl=2,qe=Symbol("uninitialized"),Ci="http://www.w3.org/1999/xhtml",Ei="http://www.w3.org/2000/svg",Ql="http://www.w3.org/1998/Math/MathML",ec="@attach";function tc(){console.warn("https://svelte.dev/e/derived_inert")}function nc(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function rc(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Ti(e){return e===this.v}function sc(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Ni(e){return!sc(e,this.v)}function Mi(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function ac(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function oc(e,t,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function ic(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function lc(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function cc(e){throw new Error("https://svelte.dev/e/effect_orphan")}function uc(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function dc(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function fc(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function vc(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function hc(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function pc(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let jr=!1;function _c(){jr=!0}let Ae=null;function Or(e){Ae=e}function _t(e,t=!1,n){Ae={p:Ae,i:!1,c:null,e:null,s:e,x:null,r:ue,l:jr&&!t?{s:null,u:null,$:[]}:null}}function gt(e){var t=Ae,n=t.e;if(n!==null){t.e=null;for(var r of n)Qi(r)}return t.i=!0,Ae=t.p,yo(e)}function yo(e={}){return mi(e,wi,{value:!0}),e}function Br(){return!jr||Ae!==null&&Ae.l===null}let sr=[];function zi(){var e=sr;sr=[],Xa(e)}function un(e){if(sr.length===0&&!vs){var t=sr;queueMicrotask(()=>{t===sr&&zi()})}sr.push(e)}function gc(){for(;sr.length>0;)zi()}const mc=-7169;function Fe(e,t){e.f=e.f&mc|t}function wo(e){(e.f&Lt)!==0||e.deps===null?Fe(e,Je):Fe(e,Xt)}function Ai(e){if(e!==null)for(const t of e)(t.f&Ze)===0||(t.f&hr)===0||(t.f^=hr,Ai(t.deps))}function Pi(e,t,n){(e.f&Xe)!==0?t.add(e):(e.f&Xt)!==0&&n.add(e),Ai(e.deps),Fe(e,Je)}let aa=!1;function bc(e){var t=aa;try{return aa=!1,[e(),aa]}finally{aa=t}}function Ii(e,t){if(t){const n=document.body;e.autofocus=!0,un(()=>{document.activeElement===n&&e.focus()})}}let Bo=!1;function xc(){Bo||(Bo=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n[la])==null||t.call(n)})},{capture:!0}))}function Vr(e){var t=pe,n=ue;Ht(null),jt(null);try{return e()}finally{Ht(t),jt(n)}}function Oi(e,t,n,r=n){e.addEventListener(t,()=>Vr(n));const s=e[la];s?e[la]=()=>{s(),r(!0)}:e[la]=()=>r(!0),xc()}function Ri(e,t,n,r){const s=Br()?Rr:ko;var o=e.filter(g=>!g.settled),a=t.map(s);if(n.length===0&&o.length===0){r(a);return}var l=ue,c=yc(),d=o.length===1?o[0].promise:o.length>1?Promise.all(o.map(g=>g.promise)):null;function f(g){if((l.f&wt)===0){c();try{r([...a,...g])}catch(b){ln(b,l)}ba()}}var y=Di();if(n.length===0){d.then(()=>f([])).finally(y);return}function h(){Promise.all(n.map(g=>wc(g))).then(f).catch(g=>ln(g,l)).finally(y)}d?d.then(()=>{c(),h(),ba()}):h()}function yc(){var e=ue,t=pe,n=Ae,r=X;return function(o=!0){jt(e),Ht(t),Or(n),o&&(e.f&wt)===0&&(r==null||r.activate(),r==null||r.apply())}}function ba(e=!0){jt(null),Ht(null),Or(null),e&&(X==null||X.deactivate())}function Di(){var e=ue,t=e.b,n=X,r=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,n),n.increment(r,e),()=>{t==null||t.update_pending_count(-1,n),n.decrement(r,e)}}function Rr(e){var t=Ze|Xe;return ue!==null&&(ue.f|=Hr),{ctx:Ae,deps:null,effects:null,equals:Ti,f:t,fn:e,reactions:null,rv:0,v:qe,wv:0,parent:ue,ac:null}}const os=Symbol("obsolete");function wc(e,t,n){let r=ue;r===null&&ac();var s=void 0,o=En(qe),a=!pe,l=new Set;return Dc(()=>{var g,b;var c=ue,d=xi();s=d.promise;try{Promise.resolve(e()).then(d.resolve,w=>{w!==Zs&&d.reject(w)}).finally(ba)}catch(w){d.reject(w),ba()}var f=X;if(a){if((c.f&Fr)!==0)var y=Di();if((g=r.b)!=null&&g.is_rendered())(b=f.async_deriveds.get(c))==null||b.reject(os);else for(const w of l.values())w.reject(os);l.add(d),f.async_deriveds.set(c,d)}const h=(w,S=void 0)=>{y==null||y(),l.delete(d),S!==os&&(f.activate(),S?(o.f|=Fn,Dr(o,S)):((o.f&Fn)!==0&&(o.f^=Fn),Dr(o,w)),f.deactivate())};d.promise.then(h,w=>h(null,w||"unknown"))}),Na(()=>{for(const c of l)c.reject(os)}),new Promise(c=>{function d(f){function y(){f===s?c(o):d(s)}f.then(y,y)}d(s)})}function ht(e){const t=Rr(e);return ol(t),t}function ko(e){const t=Rr(e);return t.equals=Ni,t}function kc(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)st(t[n])}}function $o(e){var t,n=ue,r=e.parent;if(!Tn&&r!==null&&e.v!==qe&&(r.f&(wt|pt))!==0)return tc(),e.v;jt(r);try{e.f&=~hr,kc(e),t=ul(e)}finally{jt(n)}return t}function Li(e){var t=$o(e);if(!e.equals(t)&&(e.wv=ll(),(!(X!=null&&X.is_fork)||e.deps===null)&&(X!==null?(X.capture(e,t,!0),fs==null||fs.capture(e,t,!0)):e.v=t,e.deps===null))){Fe(e,Je);return}Tn||(rt!==null?(Eo()||X!=null&&X.is_fork)&&rt.set(e,t):wo(e))}function $c(e){var t;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),n.ac!==null&&Vr(()=>{n.ac.abort(Zs),n.ac=null}),n.fn!==null&&(n.teardown=Ll),bs(n,0),No(n))}function Fi(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Lr(t)}let La=null,wr=null,X=null,fs=null,rt=null,to=null,vs=!1,Fa=!1,$r=null,ca=null;var Vo=0;let Sc=1;var Er,Rn,ir,Tr,Nr,Mr,wn,zr,bt,ws,kn,Wt,sn,Ar,lr,ke,no,is,ro,Hi,ji,kr,Cc,ls;const ka=class ka{constructor(){B(this,ke);dt(this,"id",Sc++);B(this,Er,!1);dt(this,"linked",!0);B(this,Rn,null);B(this,ir,null);dt(this,"async_deriveds",new Map);dt(this,"current",new Map);dt(this,"previous",new Map);B(this,Tr,new Set);B(this,Nr,new Set);B(this,Mr,0);B(this,wn,new Map);B(this,zr,null);B(this,bt,[]);B(this,ws,[]);B(this,kn,new Set);B(this,Wt,new Set);B(this,sn,new Map);B(this,Ar,new Set);dt(this,"is_fork",!1);B(this,lr,!1);wr===null?La=wr=this:(se(wr,ir,this),se(this,Rn,wr)),wr=this}skip_effect(t){u(this,sn).has(t)||u(this,sn).set(t,{d:[],m:[]}),u(this,Ar).delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=u(this,sn).get(t);if(r){u(this,sn).delete(t);for(var s of r.d)Fe(s,Xe),n(s);for(s of r.m)Fe(s,Xt),n(s)}u(this,Ar).add(t)}capture(t,n,r=!1){t.v!==qe&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Fn)===0&&(this.current.set(t,[n,r]),rt==null||rt.set(t,n)),this.is_fork||(t.v=n)}activate(){X=this}deactivate(){X=null,rt=null}flush(){try{Fa=!0,X=this,ge(this,ke,is).call(this)}finally{Vo=0,to=null,$r=null,ca=null,Fa=!1,X=null,rt=null,fn.clear()}}discard(){var t;for(const n of u(this,Nr))n(this);u(this,Nr).clear();for(const n of this.async_deriveds.values())n.reject(os);ge(this,ke,ls).call(this),(t=u(this,zr))==null||t.resolve()}register_created_effect(t){u(this,ws).push(t)}increment(t,n){if(se(this,Mr,u(this,Mr)+1),t){let r=u(this,wn).get(n)??0;u(this,wn).set(n,r+1)}}decrement(t,n){if(se(this,Mr,u(this,Mr)-1),t){let r=u(this,wn).get(n)??0;r===1?u(this,wn).delete(n):u(this,wn).set(n,r-1)}u(this,lr)||(se(this,lr,!0),un(()=>{se(this,lr,!1),this.linked&&this.flush()}))}transfer_effects(t,n){for(const r of t)u(this,kn).add(r);for(const r of n)u(this,Wt).add(r);t.clear(),n.clear()}oncommit(t){u(this,Tr).add(t)}ondiscard(t){u(this,Nr).add(t)}settled(){return(u(this,zr)??se(this,zr,xi())).promise}static ensure(){if(X===null){const t=X=new ka;!Fa&&!vs&&un(()=>{u(t,Er)||t.flush()})}return X}apply(){{rt=null;return}}schedule(t){var s;if(to=t,(s=t.b)!=null&&s.is_pending&&(t.f&(Ir|Xs|mo))!==0&&(t.f&Fr)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if($r!==null&&n===ue&&(pe===null||(pe.f&Ze)===0))return;if((r&(Cn|Ft))!==0){if((r&Je)===0)return;n.f^=Je}}u(this,bt).push(n)}};Er=new WeakMap,Rn=new WeakMap,ir=new WeakMap,Tr=new WeakMap,Nr=new WeakMap,Mr=new WeakMap,wn=new WeakMap,zr=new WeakMap,bt=new WeakMap,ws=new WeakMap,kn=new WeakMap,Wt=new WeakMap,sn=new WeakMap,Ar=new WeakMap,lr=new WeakMap,ke=new WeakSet,no=function(){if(this.is_fork)return!0;for(const r of u(this,wn).keys()){for(var t=r,n=!1;t.parent!==null;){if(u(this,sn).has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1},is=function(){var c,d,f,y;se(this,Er,!0),Vo++>1e3&&(ge(this,ke,ls).call(this),Tc());for(const h of u(this,kn))u(this,Wt).delete(h),Fe(h,Xe),this.schedule(h);for(const h of u(this,Wt))Fe(h,Xt),this.schedule(h);const t=u(this,bt);se(this,bt,[]),this.apply();var n=$r=[],r=[],s=ca=[];for(const h of t)try{ge(this,ke,ro).call(this,h,n,r)}catch(g){throw Ki(h),ge(this,ke,no).call(this)||this.discard(),g}if(X=null,s.length>0){var o=ka.ensure();for(const h of s)o.schedule(h)}if($r=null,ca=null,ge(this,ke,no).call(this)){ge(this,ke,kr).call(this,r),ge(this,ke,kr).call(this,n);for(const[h,g]of u(this,sn))Vi(h,g);s.length>0&&ge(c=X,ke,is).call(c);return}const a=ge(this,ke,Hi).call(this);if(a){ge(this,ke,kr).call(this,r),ge(this,ke,kr).call(this,n),ge(d=a,ke,ji).call(d,this);return}u(this,kn).clear(),u(this,Wt).clear();for(const h of u(this,Tr))h(this);u(this,Tr).clear(),fs=this,Ko(r),Ko(n),fs=null,(f=u(this,zr))==null||f.resolve();var l=X;if(u(this,Mr)===0&&(u(this,bt).length===0||l!==null)&&ge(this,ke,ls).call(this),u(this,bt).length>0)if(l!==null){const h=l;u(h,bt).push(...u(this,bt).filter(g=>!u(h,bt).includes(g)))}else l=this;l!==null&&(fn.clear(),ge(y=l,ke,is).call(y))},ro=function(t,n,r){t.f^=Je;for(var s=t.first;s!==null;){var o=s.f,a=(o&(Ft|Cn))!==0,l=a&&(o&Je)!==0,c=l||(o&pt)!==0||u(this,sn).has(s);if(!c&&s.fn!==null){a?s.f^=Je:(o&Ir)!==0?n.push(s):ea(s)&&((o&Gt)!==0&&u(this,Wt).add(s),Lr(s));var d=s.first;if(d!==null){s=d;continue}}for(;s!==null;){var f=s.next;if(f!==null){s=f;break}s=s.parent}}},Hi=function(){for(var t=u(this,Rn);t!==null;){if(!t.is_fork){for(const[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=u(t,Rn)}return null},ji=function(t){var r;for(const[s,o]of t.current)!this.previous.has(s)&&t.previous.has(s)&&this.previous.set(s,t.previous.get(s)),this.current.set(s,o);for(const[s,o]of t.async_deriveds){const a=this.async_deriveds.get(s);a&&o.promise.then(a.resolve).catch(a.reject)}t.async_deriveds.clear(),this.transfer_effects(u(t,kn),u(t,Wt));const n=s=>{var o=s.reactions;if(o!==null&&!((s.f&Ze)!==0&&(s.f&(Xe|Xt))===0))for(const c of o){var a=c.f;if((a&Ze)!==0)n(c);else{var l=c;a&(Sr|Gt)&&!this.async_deriveds.has(l)&&(u(this,Wt).delete(l),Fe(l,Xe),this.schedule(l))}}};for(const s of this.current.keys())n(s);this.oncommit(()=>t.discard()),ge(r=t,ke,ls).call(r),X=this,ge(this,ke,is).call(this)},kr=function(t){for(var n=0;n<t.length;n+=1)Pi(t[n],u(this,kn),u(this,Wt))},Cc=function(){var y;for(let h=La;h!==null;h=u(h,ir)){var t=h.id<this.id,n=[];for(const[g,[b,w]]of this.current){if(h.current.has(g)){var r=h.current.get(g)[0];if(t&&b!==r)h.current.set(g,[b,w]);else continue}n.push(g)}if(t)for(const[g,b]of this.async_deriveds){const w=h.async_deriveds.get(g);w&&b.promise.then(w.resolve).catch(w.reject)}var s=[...h.current.keys()].filter(g=>!h.current.get(g)[1]);if(!(!u(h,Er)||s.length===0)){var o=s.filter(g=>!this.current.has(g));if(o.length===0)t&&h.discard();else if(n.length>0){if(t)for(const g of u(this,Ar))h.unskip_effect(g,b=>{var w;(b.f&(Gt|Sr))!==0?h.schedule(b):ge(w=h,ke,kr).call(w,[b])});h.activate();var a=new Set,l=new Map;for(var c of n)Bi(c,o,a,l);l=new Map;var d=[...h.current].filter(([g,b])=>{const w=this.current.get(g);return w?w[0]!==b[0]||w[1]!==b[1]:!0}).map(([g])=>g);if(d.length>0)for(const g of u(this,ws))(g.f&(wt|pt|ga))===0&&So(g,d,l)&&((g.f&(Sr|Gt))!==0?(Fe(g,Xe),h.schedule(g)):u(h,kn).add(g));if(u(h,bt).length>0&&!u(h,lr)){h.apply();for(var f of u(h,bt))ge(y=h,ke,ro).call(y,f,[],[]);se(h,bt,[])}h.deactivate()}}}},ls=function(){if(this.linked){var t=u(this,Rn),n=u(this,ir);t===null?La=n:se(t,ir,n),n===null?wr=t:se(n,Rn,t),this.linked=!1}};let pr=ka;function Ec(e){var t=vs;vs=!0;try{for(var n;;){if(gc(),X===null)return n;X.flush()}}finally{vs=t}}function Tc(){try{uc()}catch(e){ln(e,to)}}let Ut=null;function Ko(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(wt|pt))===0&&ea(r)&&(Ut=new Set,Lr(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&rl(r),(Ut==null?void 0:Ut.size)>0)){fn.clear();for(const s of Ut){if((s.f&(wt|pt))!==0)continue;const o=[s];let a=s.parent;for(;a!==null;)Ut.has(a)&&(Ut.delete(a),o.push(a)),a=a.parent;for(let l=o.length-1;l>=0;l--){const c=o[l];(c.f&(wt|pt))===0&&Lr(c)}}Ut.clear()}}Ut=null}}function Bi(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const s of e.reactions){const o=s.f;(o&Ze)!==0?Bi(s,t,n,r):(o&(Sr|Gt))!==0&&(o&Xe)===0&&So(s,t,r)&&(Fe(s,Xe),Co(s))}}function So(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const s of e.deps){if(pa.call(t,s))return!0;if((s.f&Ze)!==0&&So(s,t,n))return n.set(s,!0),!0}return n.set(e,!1),!1}function Co(e){X.schedule(e)}function Vi(e,t){if(!((e.f&Ft)!==0&&(e.f&Je)!==0)){(e.f&Xe)!==0?t.d.push(e):(e.f&Xt)!==0&&t.m.push(e),Fe(e,Je);for(var n=e.first;n!==null;)Vi(n,t),n=n.next}}function Ki(e){Fe(e,Je);for(var t=e.first;t!==null;)Ki(t),t=t.next}let xa=new Set;const fn=new Map;let Ui=!1;function En(e,t){var n={f:0,v:e,reactions:null,equals:Ti,rv:0,wv:0};return n}function A(e,t){const n=En(e);return ol(n),n}function Nc(e,t=!1,n=!0){var s;const r=En(e);return t||(r.equals=Ni),jr&&n&&Ae!==null&&Ae.l!==null&&((s=Ae.l).s??(s.s=[])).push(r),r}function v(e,t,n=!1){pe!==null&&(!Jt||(pe.f&ga)!==0)&&Br()&&(pe.f&(Ze|Gt|Sr|ga))!==0&&(hn===null||!hn.has(e))&&hc();let r=n?Te(t):t;return Dr(e,r,ca)}function Dr(e,t,n=null){if(!e.equals(t)){Tn?fn.set(e,t):fn.has(e)||fn.set(e,e.v);var r=pr.ensure();if(r.capture(e,t),(e.f&Ze)!==0){const s=e;(e.f&Xe)!==0&&$o(s),rt===null&&wo(s)}e.wv=ll(),Wi(e,Xe,n),Br()&&ue!==null&&(ue.f&Je)!==0&&(ue.f&(Ft|Cn))===0&&(Ot===null?Fc([e]):Ot.push(e)),!r.is_fork&&xa.size>0&&!Ui&&Mc()}return t}function Mc(){Ui=!1;for(const e of xa){(e.f&Je)!==0&&Fe(e,Xt);let t;try{t=ea(e)}catch{t=!0}t&&Lr(e)}xa.clear()}function Uo(e,t=1){var n=i(e),r=t===1?n++:n--;return v(e,n),r}function hs(e){v(e,e.v+1)}function Wi(e,t,n){var r=e.reactions;if(r!==null)for(var s=Br(),o=r.length,a=0;a<o;a++){var l=r[a],c=l.f;if(!(!s&&l===ue)){var d=(c&Xe)===0;if(d&&Fe(l,t),(c&ga)!==0)xa.add(l);else if((c&Ze)!==0){var f=l;rt==null||rt.delete(f),(c&hr)===0&&(c&Lt&&(ue===null||(ue.f&ma)===0)&&(l.f|=hr),Wi(f,Xt,n))}else if(d){var y=l;(c&Gt)!==0&&Ut!==null&&Ut.add(y),n!==null?n.push(y):Co(y)}}}}function Te(e){if(typeof e!="object"||e===null||dn in e||wi in e)return e;const t=go(e);if(t!==Rl&&t!==Dl)return e;var n=new Map,r=Ca(e),s=A(0),o=vr,a=l=>{if(vr===o)return l();var c=pe,d=vr;Ht(null),Go(o);var f=l();return Ht(c),Go(d),f};return r&&n.set("length",A(e.length)),new Proxy(e,{defineProperty(l,c,d){(!("value"in d)||d.configurable===!1||d.enumerable===!1||d.writable===!1)&&fc();var f=n.get(c);return f===void 0?a(()=>{var y=A(d.value);return n.set(c,y),y}):v(f,d.value,!0),!0},deleteProperty(l,c){var d=n.get(c);if(d===void 0){if(c in l){const f=a(()=>A(qe));n.set(c,f),hs(s)}}else v(d,qe),hs(s);return!0},get(l,c,d){var g;if(c===dn)return e;var f=n.get(c),y=c in l;if(f===void 0&&(!y||(g=Ln(l,c))!=null&&g.writable)&&(f=a(()=>{var b=Te(y?l[c]:qe),w=A(b);return w}),n.set(c,f)),f!==void 0){var h=i(f);return h===qe?void 0:h}return Reflect.get(l,c,d)},getOwnPropertyDescriptor(l,c){var d=Reflect.getOwnPropertyDescriptor(l,c);if(d&&"value"in d){var f=n.get(c);f&&(d.value=i(f))}else if(d===void 0){var y=n.get(c),h=y==null?void 0:y.v;if(y!==void 0&&h!==qe)return{enumerable:!0,configurable:!0,value:h,writable:!0}}return d},has(l,c){var h;if(c===dn)return!0;var d=n.get(c),f=d!==void 0&&d.v!==qe||Reflect.has(l,c);if(d!==void 0||ue!==null&&(!f||(h=Ln(l,c))!=null&&h.writable)){d===void 0&&(d=a(()=>{var g=f?Te(l[c]):qe,b=A(g);return b}),n.set(c,d));var y=i(d);if(y===qe)return!1}return f},set(l,c,d,f){var z;var y=n.get(c),h=c in l;if(r&&c==="length")for(var g=d;g<y.v;g+=1){var b=n.get(g+"");b!==void 0?v(b,qe):g in l&&(b=a(()=>A(qe)),n.set(g+"",b))}if(y===void 0)(!h||(z=Ln(l,c))!=null&&z.writable)&&(y=a(()=>A(void 0)),v(y,Te(d)),n.set(c,y));else{h=y.v!==qe;var w=a(()=>Te(d));v(y,w)}var S=Reflect.getOwnPropertyDescriptor(l,c);if(S!=null&&S.set&&S.set.call(f,d),!h){if(r&&typeof c=="string"){var C=n.get("length"),H=Number(c);Number.isInteger(H)&&H>=C.v&&v(C,H+1)}hs(s)}return!0},ownKeys(l){i(s);var c=Reflect.ownKeys(l).filter(y=>{var h=n.get(y);return h===void 0||h.v!==qe});for(var[d,f]of n)f.v!==qe&&!(d in l)&&c.push(d);return c},setPrototypeOf(){vc()}})}function Wo(e){try{if(e!==null&&typeof e=="object"&&dn in e)return e[dn]}catch{}return e}function qi(e,t){return Object.is(Wo(e),Wo(t))}var ms,Gi,Yi,Ji;function zc(){if(ms===void 0){ms=window,Gi=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Yi=Ln(t,"firstChild").get,Ji=Ln(t,"nextSibling").get,jo(e)&&(e[Qa]=void 0,e[ia]=null,e[eo]=void 0,e.__e=void 0),jo(n)&&(n[as]=void 0)}}function vn(e=""){return document.createTextNode(e)}function Yt(e){return Yi.call(e)}function Qs(e){return Ji.call(e)}function x(e,t){return Yt(e)}function j(e,t=!1){{var n=Yt(e);return n instanceof Comment&&n.data===""?Qs(n):n}}function Q(e,t=!1){return Yt(e)}function _(e,t=1,n=!1){let r=e;for(;t--;)r=Qs(r);return r}function Ac(e){e.textContent=""}function Xi(){return!1}function Ta(e,t,n){return t==null||t===Ci?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function Pc(e){var t=ue;if(t===null)return pe.f|=Fn,e;if((t.f&Fr)===0&&(t.f&Ir)===0)throw e;ln(e,t)}function ln(e,t){if(!(t!==null&&(t.f&wt)!==0)){for(;t!==null;){if((t.f&Za)!==0&&(t.f&(wt|_a))===0){if((t.f&Fr)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}function Zi(e){ue===null&&(pe===null&&cc(),lc()),Tn&&ic()}function Ic(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function Zt(e,t){var n=ue;n!==null&&(n.f&pt)!==0&&(e|=pt);var r={ctx:Ae,deps:null,nodes:null,f:e|Xe|Lt,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};X==null||X.register_created_effect(r);var s=r;if((e&Ir)!==0)$r!==null?$r.push(r):pr.ensure().schedule(r);else if(t!==null){try{Lr(r)}catch(a){throw st(r),a}s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&Hr)===0&&(s=s.first,(e&Gt)!==0&&(e&jn)!==0&&s!==null&&(s.f|=jn))}if(s!==null&&(s.parent=n,n!==null&&Ic(s,n),pe!==null&&(pe.f&Ze)!==0&&(e&Cn)===0)){var o=pe;(o.effects??(o.effects=[])).push(s)}return r}function Eo(){return pe!==null&&!Jt}function Na(e){const t=Zt(Xs,null);return Fe(t,Je),t.teardown=e,t}function kt(e){Zi();var t=ue.f,n=!pe&&(t&Ft)!==0&&Ae!==null&&!Ae.i;if(n){var r=Ae;(r.e??(r.e=[])).push(e)}else return Qi(e)}function Qi(e){return Zt(Ir|yi,e)}function Oc(e){return Zi(),Zt(Xs|yi,e)}function Rc(e){pr.ensure();const t=Zt(Cn|Hr,e);return(n={})=>new Promise(r=>{n.outro?fr(t,()=>{st(t),r(void 0)}):(st(t),r(void 0))})}function Ma(e){return Zt(Ir,e)}function Dc(e){return Zt(Sr|Hr,e)}function To(e,t=0){return Zt(Xs|t,e)}function J(e,t=[],n=[],r=[]){Ri(r,t,n,s=>{Zt(Xs,()=>{e(...s.map(i))})})}function Kr(e,t=0){var n=Zt(Gt|t,e);return n}function el(e,t=0){var n=Zt(mo|t,e);return n}function xt(e){return Zt(Ft|Hr,e)}function tl(e){var t=e.teardown;if(t!==null){const n=Tn,r=pe;qo(!0),Ht(null);try{t.call(null)}catch(s){ln(s,e.parent)}finally{qo(n),Ht(r)}}}function No(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const s=n.ac;s!==null&&Vr(()=>{s.abort(Zs)});var r=n.next;(n.f&Cn)!==0?n.parent=null:st(n,t),n=r}}function Lc(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&Ft)===0&&st(t),t=n}}function st(e,t=!0){var n=!1;(t||(e.f&jl)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(nl(e.nodes.start,e.nodes.end),n=!0),e.f|=_a,No(e,t&&!n),bs(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const o of r)o.stop();tl(e),e.f^=_a,e.f|=wt;var s=e.parent;s!==null&&s.first!==null&&rl(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function nl(e,t){for(;e!==null;){var n=e===t?null:Qs(e);e.remove(),e=n}}function rl(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function fr(e,t,n=!0){var r=[];e.f|=bo,sl(e,r,!0);var s=()=>{n&&st(e),t&&t()},o=r.length;if(o>0){var a=()=>--o||s();for(var l of r)l.out(a)}else s()}function sl(e,t,n){if((e.f&pt)===0){e.f^=pt;var r=e.nodes&&e.nodes.t;if(r!==null)for(const l of r)(l.is_global||n)&&t.push(l);for(var s=e.first;s!==null;){var o=s.next;if((s.f&Cn)===0){var a=(s.f&jn)!==0||(s.f&Ft)!==0&&(e.f&Gt)!==0;sl(s,t,a?n:!1)}s=o}}}function ya(e){e.f&=~bo,al(e,!0)}function al(e,t){if((e.f&bo)===0&&(e.f&pt)!==0){e.f^=pt,(e.f&Je)===0&&(Fe(e,Xe),pr.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,s=(n.f&jn)!==0||(n.f&Ft)!==0;al(n,s?t:!1),n=r}var o=e.nodes&&e.nodes.t;if(o!==null)for(const a of o)(a.is_global||t)&&a.in()}}function Mo(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var s=n===r?null:Qs(n);t.append(n),n=s}}let ua=!1,Tn=!1;function qo(e){Tn=e}let pe=null,Jt=!1;function Ht(e){pe=e}let ue=null;function jt(e){ue=e}let hn=null;function ol(e){pe!==null&&(hn??(hn=new Set)).add(e)}let yt=null,zt=0,Ot=null;function Fc(e){Ot=e}let il=1,ar=0,vr=ar;function Go(e){vr=e}function ll(){return++il}function ea(e){var t=e.f;if((t&Xe)!==0)return!0;if(t&Ze&&(e.f&=~hr),(t&Xt)!==0){for(var n=e.deps,r=n.length,s=0;s<r;s++){var o=n[s];if(ea(o)&&Li(o),o.wv>e.wv)return!0}(t&Lt)!==0&&rt===null&&Fe(e,Je)}return!1}function cl(e,t,n=!0){var r=e.reactions;if(r!==null&&!(hn!==null&&hn.has(e)))for(var s=0;s<r.length;s++){var o=r[s];(o.f&Ze)!==0?cl(o,t,!1):t===o&&(n?Fe(o,Xe):(o.f&Je)!==0&&Fe(o,Xt),Co(o))}}function ul(e){var t=yt,n=zt,r=Ot,s=pe,o=hn,a=Ae,l=Jt,c=vr,d=e.f;yt=null,zt=0,Ot=null,pe=(d&(Ft|Cn))===0?e:null,hn=null,Or(e.ctx),Jt=!1,vr=++ar,e.ac!==null&&(Vr(()=>{e.ac.abort(Zs)}),e.ac=null);try{e.f|=ma;var f=e.fn,y=f();e.f|=Fr;var h=Yo(e);if(Br()&&Ot!==null&&!Jt&&h!==null&&(e.f&(Ze|Xt|Xe))===0)for(var g=0;g<Ot.length;g++)cl(Ot[g],e);if(s!==null&&s!==e){if(ar++,s.deps!==null)for(let b=0;b<n;b+=1)s.deps[b].rv=ar;if(t!==null)for(const b of t)b.rv=ar;Ot!==null&&(r===null?r=Ot:r.push(...Ot))}return(e.f&Fn)!==0&&(e.f^=Fn),y}catch(b){return Yo(e),Pc(b)}finally{e.f^=ma,yt=t,zt=n,Ot=r,pe=s,hn=o,Or(a),Jt=l,vr=c}}function Yo(e){var s;var t=e.deps,n=X==null?void 0:X.is_fork;if(yt!==null){var r;if(n||bs(e,zt),t!==null&&zt>0)for(t.length=zt+yt.length,r=0;r<yt.length;r++)t[zt+r]=yt[r];else e.deps=t=yt;if(Eo()&&(e.f&Lt)!==0)for(r=zt;r<t.length;r++)((s=t[r]).reactions??(s.reactions=[])).push(e)}else!n&&t!==null&&zt<t.length&&(bs(e,zt),t.length=zt);return t}function Hc(e,t){let n=t.reactions;if(n!==null){var r=Ol.call(n,e);if(r!==-1){var s=n.length-1;s===0?n=t.reactions=null:(n[r]=n[s],n.pop())}}if(n===null&&(t.f&Ze)!==0&&(yt===null||!pa.call(yt,t))){var o=t;(o.f&Lt)!==0&&(o.f^=Lt,o.f&=~hr),o.v!==qe&&wo(o),o.ac!==null&&Vr(()=>{o.ac.abort(Zs),o.ac=null,Fe(o,Xe)}),$c(o),bs(o,0)}}function bs(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Hc(e,n[r])}function Lr(e){var t=e.f;if((t&wt)===0){Fe(e,Je);var n=ue,r=ua;ue=e,ua=(t&(Ft|Cn))===0;try{(t&(Gt|mo))!==0?Lc(e):No(e),tl(e);var s=ul(e);e.teardown=typeof s=="function"?s:null,e.wv=il;var o}finally{ua=r,ue=n}}}async function jc(){await Promise.resolve(),Ec()}function i(e){var t=e.f,n=(t&Ze)!==0;if(pe!==null&&!Jt){var r=ue!==null&&(ue.f&wt)!==0;if(!r&&(hn===null||!hn.has(e))){var s=pe.deps;if((pe.f&ma)!==0)e.rv<ar&&(e.rv=ar,yt===null&&s!==null&&s[zt]===e?zt++:yt===null?yt=[e]:yt.push(e));else{pe.deps??(pe.deps=[]),pa.call(pe.deps,e)||pe.deps.push(e);var o=e.reactions;o===null?e.reactions=[pe]:pa.call(o,pe)||o.push(pe)}}}if(Tn&&fn.has(e))return fn.get(e);if(n){var a=e;if(Tn){var l=a.v;return((a.f&Je)===0&&a.reactions!==null||fl(a))&&(l=$o(a)),fn.set(a,l),l}var c=(a.f&Lt)===0&&!Jt&&pe!==null&&(ua||(pe.f&Lt)!==0),d=(a.f&Fr)===0;ea(a)&&(c&&(a.f|=Lt),Li(a)),c&&!d&&(Fi(a),dl(a))}if(rt!=null&&rt.has(e))return rt.get(e);if((e.f&Fn)!==0)throw e.v;return e.v}function dl(e){if(e.f|=Lt,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Ze)!==0&&(t.f&Lt)===0&&(Fi(t),dl(t))}function fl(e){if(e.v===qe)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(fn.has(t)||(t.f&Ze)!==0&&fl(t))return!0;return!1}function Nn(e){var t=Jt;try{return Jt=!0,e()}finally{Jt=t}}function nr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(dn in e)so(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&dn in n&&so(n)}}}function so(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{so(e[r],t)}catch{}const n=go(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=bi(n);for(let s in r){const o=r[s].get;if(o)try{o.call(e)}catch{}}}}}function Bc(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Vc=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Kc(e){return Vc.includes(e)}const Uc={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Wc(e){return e=e.toLowerCase(),Uc[e]??e}const qc=["touchstart","touchmove"];function Gc(e){return qc.includes(e)}const or=Symbol("events"),vl=new Set,ao=new Set;function hl(e,t,n,r={}){function s(o){if(r.capture||oo.call(t,o),!o.cancelBubble)return Vr(()=>n==null?void 0:n.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?un(()=>{t.addEventListener(e,s,r)}):t.addEventListener(e,s,r),s}function _r(e,t,n,r,s){var o={capture:r,passive:s},a=hl(e,t,n,o);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Na(()=>{t.removeEventListener(e,a,o)})}function P(e,t,n){(t[or]??(t[or]={}))[e]=n}function Bt(e){for(var t=0;t<e.length;t++)vl.add(e[t]);for(var n of ao)n(e)}let Ha=null,ja=!1;function oo(e){var w,S;var t=this,n=t.ownerDocument,r=e.type,s=((w=e.composedPath)==null?void 0:w.call(e))||[],o=s[0]||e.target;Ha=e,ja||(ja=!0,setTimeout(()=>{ja=!1,Ha=null}));var a=0,l=Ha===e&&e[or];if(l){var c=s.indexOf(l);if(c!==-1&&(t===document||t===window)){e[or]=t;return}var d=s.indexOf(t);if(d===-1)return;c<=d&&(a=c)}if(o=s[a]||e.target,o!==t){mi(e,"currentTarget",{configurable:!0,get(){return o||n}});var f=pe,y=ue;Ht(null),jt(null);try{for(var h,g=[];o!==null&&o!==t;){try{var b=(S=o[or])==null?void 0:S[r];b!=null&&(!o.disabled||e.target===o)&&b.call(o,e)}catch(C){h?g.push(C):h=C}if(e.cancelBubble)break;a++,o=a<s.length?s[a]:null}if(h){for(let C of g)queueMicrotask(()=>{throw C});throw h}}finally{e[or]=t,delete e.currentTarget,Ht(f),jt(y)}}}var _i;const Ba=((_i=globalThis==null?void 0:globalThis.window)==null?void 0:_i.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Yc(e){return(Ba==null?void 0:Ba.createHTML(e))??e}function pl(e){var t=Ta("template");return t.innerHTML=Yc(e.replaceAll("<!>","<!---->")),t.content}function Bn(e,t){var n=ue;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function N(e,t){var n=(t&Xl)!==0,r=(t&Zl)!==0,s,o=!e.startsWith("<!>");return()=>{s===void 0&&(s=pl(o?e:"<!>"+e),n||(s=Yt(s)));var a=r||Gi?document.importNode(s,!0):s.cloneNode(!0);if(n){var l=Yt(a),c=a.lastChild;Bn(l,c)}else Bn(a,a);return a}}function Jc(e,t,n="svg"){var r=!e.startsWith("<!>"),s=`<${n}>${r?e:"<!>"+e}</${n}>`,o;return()=>{if(!o){var a=pl(s),l=Yt(a);o=Yt(l)}var c=o.cloneNode(!0);return Bn(c,c),c}}function _l(e,t){return Jc(e,t,"svg")}function Jo(e=""){{var t=vn(e+"");return Bn(t,t),t}}function Z(){var e=document.createDocumentFragment(),t=document.createComment(""),n=vn();return e.append(t,n),Bn(t,n),e}function m(e,t){e!==null&&e.before(t)}function Xc(e){let t=0,n=En(0),r;return()=>{Eo()&&(i(n),To(()=>(t===0&&(r=Nn(()=>e(()=>hs(n)))),t+=1,()=>{un(()=>{t-=1,t===0&&(r==null||r(),r=void 0,hs(n))})})))}}var Zc=jn|Hr;function Qc(e,t,n,r){new eu(e,t,n,r)}var Rt,_o,Dt,cr,ft,Tt,vt,Nt,an,ur,Dn,Pr,ks,$s,$n,$a,ze,tu,nu,io,ru,lo,cs,da,co,uo;class eu{constructor(t,n,r,s){B(this,ze);dt(this,"parent");dt(this,"is_pending",!1);dt(this,"transform_error");B(this,Rt);B(this,_o,null);B(this,Dt);B(this,cr);B(this,ft);B(this,Tt,null);B(this,vt,null);B(this,Nt,null);B(this,an,null);B(this,ur,0);B(this,Dn,0);B(this,Pr,!1);B(this,ks,new Set);B(this,$s,new Set);B(this,$n,null);B(this,$a,Xc(()=>(se(this,$n,En(u(this,ur))),()=>{se(this,$n,null)})));var o;se(this,Rt,t),se(this,Dt,n),se(this,cr,a=>{var l=ue;l.b=this,l.f|=Za,r(a)}),this.parent=ue.b,this.transform_error=s??((o=this.parent)==null?void 0:o.transform_error)??(a=>a),se(this,ft,Kr(()=>{ge(this,ze,lo).call(this)},Zc))}defer_effect(t){Pi(t,u(this,ks),u(this,$s))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,Dt).pending}update_pending_count(t,n){ge(this,ze,co).call(this,t,n),se(this,ur,u(this,ur)+t),!(!u(this,$n)||u(this,Pr))&&(se(this,Pr,!0),un(()=>{se(this,Pr,!1),u(this,$n)&&Dr(u(this,$n),u(this,ur))}))}get_effect_pending(){return u(this,$a).call(this),i(u(this,$n))}error(t){if(!u(this,Dt).onerror&&!u(this,Dt).failed)throw t;X!=null&&X.is_fork?(u(this,Tt)&&X.skip_effect(u(this,Tt)),u(this,vt)&&X.skip_effect(u(this,vt)),u(this,Nt)&&X.skip_effect(u(this,Nt)),X.oncommit(()=>{ge(this,ze,uo).call(this,t)})):ge(this,ze,uo).call(this,t)}}Rt=new WeakMap,_o=new WeakMap,Dt=new WeakMap,cr=new WeakMap,ft=new WeakMap,Tt=new WeakMap,vt=new WeakMap,Nt=new WeakMap,an=new WeakMap,ur=new WeakMap,Dn=new WeakMap,Pr=new WeakMap,ks=new WeakMap,$s=new WeakMap,$n=new WeakMap,$a=new WeakMap,ze=new WeakSet,tu=function(){try{se(this,Tt,xt(()=>u(this,cr).call(this,u(this,Rt))))}catch(t){this.error(t)}},nu=function(t){const n=u(this,Dt).failed,{reset:r,invoke_onerror:s}=ge(this,ze,io).call(this,t);un(s),n&&se(this,Nt,xt(()=>{n(u(this,Rt),()=>t,()=>r)}))},io=function(t){var n=!1,r=!1;const s=()=>{if(n){rc();return}n=!0,r&&pc(),u(this,Nt)!==null&&fr(u(this,Nt),()=>{se(this,Nt,null)}),ge(this,ze,da).call(this,()=>{ge(this,ze,lo).call(this)})};return{reset:s,invoke_onerror:()=>{var a,l;try{r=!0,(l=(a=u(this,Dt)).onerror)==null||l.call(a,t,s),r=!1}catch(c){ln(c,u(this,ft)&&u(this,ft).parent)}}}},ru=function(){const t=u(this,Dt).pending;t&&(this.is_pending=!0,se(this,vt,xt(()=>t(u(this,Rt)))),un(()=>{var n=se(this,an,document.createDocumentFragment()),r=vn(),s=!1;if(n.append(r),se(this,Tt,ge(this,ze,da).call(this,()=>{try{return xt(()=>u(this,cr).call(this,r))}catch(o){try{this.error(o),s=!0}catch(a){ln(a,u(this,ft).parent)}return null}})),u(this,Tt)===null){se(this,an,null),s&&ge(this,ze,cs).call(this,X);return}u(this,Dn)===0&&(u(this,Rt).before(n),se(this,an,null),fr(u(this,vt),()=>{se(this,vt,null)}),ge(this,ze,cs).call(this,X))}))},lo=function(){try{if(this.is_pending=this.has_pending_snippet(),se(this,Dn,0),se(this,ur,0),se(this,Tt,xt(()=>{u(this,cr).call(this,u(this,Rt))})),u(this,Dn)>0){var t=se(this,an,document.createDocumentFragment());Mo(u(this,Tt),t);const n=u(this,Dt).pending;se(this,vt,xt(()=>n(u(this,Rt))))}else ge(this,ze,cs).call(this,X)}catch(n){this.error(n)}},cs=function(t){this.is_pending=!1,t.transfer_effects(u(this,ks),u(this,$s))},da=function(t){var n=ue,r=pe,s=Ae;jt(u(this,ft)),Ht(u(this,ft)),Or(u(this,ft).ctx);try{return pr.ensure(),t()}finally{jt(n),Ht(r),Or(s)}},co=function(t,n){var r;if(!this.has_pending_snippet()){this.parent&&ge(r=this.parent,ze,co).call(r,t,n);return}se(this,Dn,u(this,Dn)+t),u(this,Dn)===0&&(ge(this,ze,cs).call(this,n),u(this,vt)&&fr(u(this,vt),()=>{se(this,vt,null)}),u(this,an)&&(u(this,Rt).before(u(this,an)),se(this,an,null)))},uo=function(t){u(this,Tt)&&(st(u(this,Tt)),se(this,Tt,null)),u(this,vt)&&(st(u(this,vt)),se(this,vt,null)),u(this,Nt)&&(st(u(this,Nt)),se(this,Nt,null));let n=u(this,Dt).failed;const r=s=>{const{reset:o,invoke_onerror:a}=ge(this,ze,io).call(this,s);a(),n&&se(this,Nt,ge(this,ze,da).call(this,()=>{try{return xt(()=>{var l=ue;l.b=this,l.f|=Za,n(u(this,Rt),()=>s,()=>o)})}catch(l){return ln(l,u(this,ft).parent),null}}))};un(()=>{var s;try{s=this.transform_error(t)}catch(o){ln(o,u(this,ft)&&u(this,ft).parent);return}s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(r,o=>ln(o,u(this,ft)&&u(this,ft).parent)):r(s)})};function W(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[as]??(e[as]=e.nodeValue))&&(e[as]=n,e.nodeValue=`${n}`)}function su(e,t){return au(e,t)}const oa=new Map;function au(e,{target:t,anchor:n,props:r={},events:s,context:o,intro:a=!0,transformError:l}){zc();var c=void 0,d=Rc(()=>{var f=n??t.appendChild(vn());Qc(f,{pending:()=>{}},g=>{_t({});var b=Ae;o&&(b.c=o),s&&(r.$$events=s),c=e(g,r)||yo(),gt()},l);var y=new Set,h=g=>{for(var b=0;b<g.length;b++){var w=g[b];if(!y.has(w)){y.add(w);var S=Gc(w);for(const z of[t,document]){var C=oa.get(z);C===void 0&&(C=new Map,oa.set(z,C));var H=C.get(w);H===void 0?(z.addEventListener(w,oo,{passive:S}),C.set(w,1)):C.set(w,H+1)}}}};return h(Ea(vl)),ao.add(h),()=>{var S;for(var g of y)for(const C of[t,document]){var b=oa.get(C),w=b.get(g);--w==0?(C.removeEventListener(g,oo),b.delete(g),b.size===0&&oa.delete(C)):b.set(g,w)}ao.delete(h),f!==n&&((S=f.parentNode)==null||S.removeChild(f))}});return ou.set(c,d),c}let ou=new WeakMap;var qt,on,Mt,dr,Ss,Cs,Sa;class za{constructor(t,n=!0){dt(this,"anchor");B(this,qt,new Map);B(this,on,new Map);B(this,Mt,new Map);B(this,dr,new Set);B(this,Ss,!0);B(this,Cs,t=>{if(u(this,qt).has(t)){var n=u(this,qt).get(t),r=u(this,on).get(n);if(r)ya(r),u(this,dr).delete(n);else{var s=u(this,Mt).get(n);s&&(ya(s.effect),u(this,on).set(n,s.effect),u(this,Mt).delete(n),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[o,a]of u(this,qt)){if(u(this,qt).delete(o),o===t)break;const l=u(this,Mt).get(a);l&&(st(l.effect),u(this,Mt).delete(a))}for(const[o,a]of u(this,on)){if(o===n||u(this,dr).has(o))continue;const l=()=>{if(Array.from(u(this,qt).values()).includes(o)){var d=document.createDocumentFragment();Mo(a,d),d.append(vn()),u(this,Mt).set(o,{effect:a,fragment:d})}else st(a);u(this,dr).delete(o),u(this,on).delete(o)};u(this,Ss)||!r?(u(this,dr).add(o),fr(a,l,!1)):l()}}});B(this,Sa,t=>{u(this,qt).delete(t);const n=Array.from(u(this,qt).values());for(const[r,s]of u(this,Mt))n.includes(r)||(st(s.effect),u(this,Mt).delete(r))});this.anchor=t,se(this,Ss,n)}ensure(t,n){var r=X,s=Xi();if(n&&!u(this,on).has(t)&&!u(this,Mt).has(t))if(s){var o=document.createDocumentFragment(),a=vn();o.append(a),u(this,Mt).set(t,{effect:xt(()=>n(a)),fragment:o})}else u(this,on).set(t,xt(()=>n(this.anchor)));if(u(this,qt).set(r,t),s){for(const[l,c]of u(this,on))l===t?r.unskip_effect(c):r.skip_effect(c);for(const[l,c]of u(this,Mt))l===t?r.unskip_effect(c.effect):r.skip_effect(c.effect);r.oncommit(u(this,Cs)),r.ondiscard(u(this,Sa))}else u(this,Cs).call(this,r)}}qt=new WeakMap,on=new WeakMap,Mt=new WeakMap,dr=new WeakMap,Ss=new WeakMap,Cs=new WeakMap,Sa=new WeakMap;function L(e,t,n=!1){var r=new za(e),s=n?jn:0;function o(a,l){r.ensure(a,l)}Kr(()=>{var a=!1;t((l,c=0)=>{a=!0,o(c,l)}),a||o(-1,null)},s)}const iu=Symbol("NaN");function lu(e,t,n){var r=new za(e),s=!Br();Kr(()=>{var o=t();o!==o&&(o=iu),s&&o!==null&&typeof o=="object"&&(o={}),r.ensure(o,n)})}function gl(e,t){return t}function cu(e,t,n){for(var r=[],s=t.length,o,a=t.length,l=0;l<s;l++){let y=t[l];fr(y,()=>{if(o){if(o.pending.delete(y),o.done.add(y),o.pending.size===0){var h=e.outrogroups;fo(e,Ea(o.done)),h.delete(o),h.size===0&&(e.outrogroups=null)}}else a-=1},!1)}if(a===0){var c=r.length===0&&n!==null&&e.pending.size===0;if(c){var d=n,f=d.parentNode;Ac(f),f.append(d),e.items.clear()}fo(e,t,!c)}else o={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(o)}function fo(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(const a of e.pending.values())for(const l of a)r.add(e.items.get(l).e)}for(var s=0;s<t.length;s++){var o=t[s];if(r!=null&&r.has(o)){o.f|=cn;const a=document.createDocumentFragment();Mo(o,a)}else st(t[s],n)}}var Xo;function Ke(e,t,n,r,s,o=null){var a=e,l=new Map,c=(t&$i)!==0;if(c){var d=e;a=d.appendChild(vn())}var f=null,y=ko(()=>{var z=n();return Ca(z)?z:z==null?[]:Ea(z)}),h,g=new Map,b=!0;function w(z){(H.effect.f&wt)===0&&(H.pending.delete(z),H.fallback=f,uu(H,h,a,t,r),f!==null&&(h.length===0?(f.f&cn)===0?ya(f):(f.f^=cn,us(f,null,a)):fr(f,()=>{f=null})))}function S(z){H.pending.delete(z)}var C=Kr(()=>{h=i(y);for(var z=h.length,q=new Set,E=X,k=Xi(),M=0;M<z;M+=1){var G=h[M],R=r(G,M),K=b?null:l.get(R);K?(K.v&&Dr(K.v,G),K.i&&Dr(K.i,M),k&&E.unskip_effect(K.e)):(K=du(l,b?a:Xo??(Xo=vn()),G,R,M,s,t,n),b||(K.e.f|=cn),l.set(R,K)),q.add(R)}if(z===0&&o&&!f&&(b?f=xt(()=>o(a)):(f=xt(()=>o(Xo??(Xo=vn()))),f.f|=cn)),z>q.size&&oc(),!b)if(g.set(E,q),k){for(const[F,U]of l)q.has(F)||E.skip_effect(U.e);E.oncommit(w),E.ondiscard(S)}else w(E);i(y)}),H={effect:C,items:l,pending:g,outrogroups:null,fallback:f};b=!1}function ns(e){for(;e!==null&&(e.f&Ft)===0;)e=e.next;return e}function uu(e,t,n,r,s){var K,F,U,de,me,He,Ne,at,oe;var o=(r&Ul)!==0,a=t.length,l=e.items,c=ns(e.effect.first),d,f=null,y,h=[],g=[],b,w,S,C;if(o)for(C=0;C<a;C+=1)b=t[C],w=s(b,C),S=l.get(w).e,(S.f&cn)===0&&((F=(K=S.nodes)==null?void 0:K.a)==null||F.measure(),(y??(y=new Set)).add(S));for(C=0;C<a;C+=1){if(b=t[C],w=s(b,C),S=l.get(w).e,e.outrogroups!==null)for(const ie of e.outrogroups)ie.pending.delete(S),ie.done.delete(S);if((S.f&pt)!==0&&(ya(S),o&&((de=(U=S.nodes)==null?void 0:U.a)==null||de.unfix(),(y??(y=new Set)).delete(S))),(S.f&cn)!==0)if(S.f^=cn,S===c)us(S,null,n);else{var H=f?f.next:c;S===e.effect.last&&(e.effect.last=S.prev),S.prev&&(S.prev.next=S.next),S.next&&(S.next.prev=S.prev),In(e,f,S),In(e,S,H),us(S,H,n),f=S,h=[],g=[],c=ns(f.next);continue}if(S!==c){if(d!==void 0&&d.has(S)){if(h.length<g.length){var z=g[0],q;f=z.prev;var E=h[0],k=h[h.length-1];for(q=0;q<h.length;q+=1)us(h[q],z,n);for(q=0;q<g.length;q+=1)d.delete(g[q]);In(e,E.prev,k.next),In(e,f,E),In(e,k,z),c=z,f=k,C-=1,h=[],g=[]}else d.delete(S),us(S,c,n),In(e,S.prev,S.next),In(e,S,f===null?e.effect.first:f.next),In(e,f,S),f=S;continue}for(h=[],g=[];c!==null&&c!==S;)(d??(d=new Set)).add(c),g.push(c),c=ns(c.next);if(c===null)continue}(S.f&cn)===0&&h.push(S),f=S,c=ns(S.next)}if(e.outrogroups!==null){for(const ie of e.outrogroups)ie.pending.size===0&&(fo(e,Ea(ie.done)),(me=e.outrogroups)==null||me.delete(ie));e.outrogroups.size===0&&(e.outrogroups=null)}if(c!==null||d!==void 0){var M=[];if(d!==void 0)for(S of d)(S.f&pt)===0&&M.push(S);for(;c!==null;)(c.f&pt)===0&&c!==e.fallback&&M.push(c),c=ns(c.next);var G=M.length;if(G>0){var R=(r&$i)!==0&&a===0?n:null;if(o){for(C=0;C<G;C+=1)(Ne=(He=M[C].nodes)==null?void 0:He.a)==null||Ne.measure();for(C=0;C<G;C+=1)(oe=(at=M[C].nodes)==null?void 0:at.a)==null||oe.fix()}cu(e,M,R)}}o&&un(()=>{var ie,I;if(y!==void 0)for(S of y)(I=(ie=S.nodes)==null?void 0:ie.a)==null||I.apply()})}function du(e,t,n,r,s,o,a,l){var c=(a&Vl)!==0?(a&Wl)===0?Nc(n,!1,!1):En(n):null,d=(a&Kl)!==0?En(s):null;return{v:c,i:d,e:xt(()=>(o(t,c??n,d??s,l),()=>{e.delete(r)}))}}function us(e,t,n){if(e.nodes)for(var r=e.nodes.start,s=e.nodes.end,o=t&&(t.f&cn)===0?t.nodes.start:n;r!==null;){var a=Qs(r);if(o.before(r),r===s)return;r=a}}function In(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function fu(e,t,n=!1,r=!1,s=!1,o=!1){var a=e,l="";if(n)var c=e;J(()=>{var d=ue;if(l!==(l=t()??"")){if(n){d.nodes=null,c.innerHTML=l,l!==""&&Bn(Yt(c),c.lastChild);return}if(d.nodes!==null&&(nl(d.nodes.start,d.nodes.end),d.nodes=null),l!==""){var f=r?Ei:s?Ql:void 0,y=Ta(r?"svg":s?"math":"template",f);y.innerHTML=l;var h=r||s?y:y.content;if(Bn(Yt(h),h.lastChild),r||s)for(;Yt(h);)a.before(Yt(h));else a.before(h)}}})}function ae(e,t,n,r,s){var l,c;if((l=t.$$host)!=null&&l.$$shadowRoot){const d=Ta("slot");m(e,d);return}var o=(c=t.$$slots)==null?void 0:c[n],a=!1;o===!0&&(o=t.children,a=!0),o===void 0||o(e,a?()=>r:r)}function Zo(e,t,n){var r=new za(e);Kr(()=>{var s=t()??null;r.ensure(s,s&&(o=>n(o,s)))},jn)}function vu(e,t,n,r,s,o){var a=null,l=e,c=new za(l,!1);Kr(()=>{const d=t()||null;var f=Ei;if(d===null){c.ensure(null,null);return}return c.ensure(d,y=>{if(d){if(a=Ta(d,f),Bn(a,a),r){var h=null,g=a.appendChild(vn());r(a,g),h==null||h.remove()}ue.nodes.end=a,y.before(a)}}),()=>{}},jn),Na(()=>{})}function hu(e,t){var n=void 0,r;el(()=>{n!==(n=t())&&(r&&(st(r),r=null),n&&(r=xt(()=>{Ma(()=>n(e))})))})}function ml(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=ml(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function pu(){for(var e,t,n=0,r="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=ml(e))&&(r&&(r+=" "),r+=t);return r}function _u(e){return typeof e=="object"?pu(e):e??""}const Qo=[...` 	
\r\f \v\uFEFF`];function gu(e,t,n){var r=e==null?"":""+e;if(t&&(r=r?r+" "+t:t),n){for(var s of Object.keys(n))if(n[s])r=r?r+" "+s:s;else if(r.length)for(var o=s.length,a=0;(a=r.indexOf(s,a))>=0;){var l=a+o;(a===0||Qo.includes(r[a-1]))&&(l===r.length||Qo.includes(r[l]))?r=(a===0?"":r.substring(0,a))+r.substring(l+1):a=l}}return r===""?null:r}function ei(e,t=!1){var n=t?" !important;":";",r="";for(var s of Object.keys(e)){var o=e[s];o!=null&&o!==""&&(r+=" "+s+": "+o+n)}return r}function Va(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function mu(e,t){if(t){var n="",r,s;if(Array.isArray(t)?(r=t[0],s=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var o=!1,a=0,l=!1,c=[];r&&c.push(...Object.keys(r).map(Va)),s&&c.push(...Object.keys(s).map(Va));var d=0,f=-1;const w=e.length;for(var y=0;y<w;y++){var h=e[y];if(l?h==="/"&&e[y-1]==="*"&&(l=!1):o?o===h&&(o=!1):h==="/"&&e[y+1]==="*"?l=!0:h==='"'||h==="'"?o=h:h==="("?a++:h===")"&&a--,!l&&o===!1&&a===0){if(h===":"&&f===-1)f=y;else if(h===";"||y===w-1){if(f!==-1){var g=Va(e.substring(d,f).trim());if(!c.includes(g)){h!==";"&&y++;var b=e.substring(d,y).trim();n+=" "+b+";"}}d=y+1,f=-1}}}}return r&&(n+=ei(r)),s&&(n+=ei(s,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function At(e,t,n,r,s,o){var a=e[Qa];if(a!==n||a===void 0){var l=gu(n,r,o);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e[Qa]=n}else if(o&&s!==o)for(var c in o){var d=!!o[c];(s==null||d!==!!s[c])&&e.classList.toggle(c,d)}return o}function Ka(e,t={},n,r){for(var s in n){var o=n[s];t[s]!==o&&(n[s]==null?e.style.removeProperty(s):e.style.setProperty(s,o,r))}}function ps(e,t,n,r){var s=e[eo];if(s!==t){var o=mu(t,r);o==null?e.removeAttribute("style"):e.style.cssText=o,e[eo]=t}else r&&(Array.isArray(r)?(Ka(e,n==null?void 0:n[0],r[0]),Ka(e,n==null?void 0:n[1],r[1],"important")):Ka(e,n,r));return r}function bl(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function ti(e,t){var n=!("__defaultValue"in e);!n&&e.__defaultValue===t||(e.__defaultValue=t,xl(e,!n||"__value"in e))}function xl(e,t){var n=e.__defaultValue,r=e.multiple,s=r?n??[]:null;if(!(r&&!Ca(s))){var o=e.selectedIndex,a=t&&r?new Set(e.selectedOptions):null;for(var l of e.options){var c=Cr(l);bl(l,r?s.includes(c):qi(c,n))}if(t)if(a!==null)for(l of e.options){var d=a.has(l);l.selected!==d&&(l.selected=d)}else e.selectedIndex!==o&&(e.selectedIndex=o)}}function xs(e,t,n=!1){if(e.multiple){if(t==null)return;if(!Ca(t))return nc();for(var r of e.options)r.selected=t.includes(Cr(r));return}for(r of e.options){var s=Cr(r);if(qi(s,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function _s(e){var t=new MutationObserver(n=>{n.every(bu)||("__defaultValue"in e&&xl(e,!1),"__value"in e&&xs(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Na(()=>{t.disconnect()})}function vo(e,t,n=t){var r=new WeakSet,s=!0;Oi(e,"change",o=>{var a=o?"[selected]":":checked",l;if(e.multiple)l=[].map.call(e.querySelectorAll(a),Cr);else{var c=e.querySelector(a)??e.querySelector("option:not([disabled])");l=c&&Cr(c)}n(l),e.__value=l,X!==null&&r.add(X)}),Ma(()=>{var o=t();if(e===document.activeElement){var a=X;if(r.has(a))return}if(xs(e,o,s),s&&o===void 0){var l=e.querySelector(":checked");l!==null&&(o=Cr(l),n(o))}e.__value=o,s=!1})}function Cr(e){return"__value"in e?e.__value:e.value}function bu(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(n=>n.nodeName==="SELECTEDCONTENT")}return!1}const rs=Symbol("class"),ss=Symbol("style"),yl=Symbol("is custom element"),wl=Symbol("is html"),xu=xo?"input":"INPUT",yu=xo?"option":"OPTION",kl=xo?"select":"SELECT";function he(e,t,n,r){var s=$l(e);s[t]!==(s[t]=n)&&(t==="loading"&&(e[Bl]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Sl(e).has(t)?e[t]=n:e.setAttribute(t,n))}function wu(e,t,n,r,s=!1,o=!1){var a=$l(e),l=a[yl],c=!a[wl],d=t||{},f=e.nodeName===yu,y=e.nodeName===kl;for(var h in t)!(h in n)&&h[0]+h[1]!=="$$"&&(n[h]=null);n.class?n.class=_u(n.class):n[rs]&&(n.class=null),n[ss]&&(n.style??(n.style=null));var g=Sl(e);if(e.nodeName===xu&&"type"in n&&("value"in n||"__value"in n)){var b=n.type;(b!==d.type||b===void 0&&e.hasAttribute("type"))&&(d.type=b,he(e,"type",b))}for(const E in n){let k=n[E];if(f&&E==="value"&&k==null){e.value=e.__value="",d[E]=k;continue}if(E==="class"){var w=e.namespaceURI==="http://www.w3.org/1999/xhtml";At(e,w,k,r,t==null?void 0:t[rs],n[rs]),d[E]=k,d[rs]=n[rs];continue}if(E==="style"){ps(e,k,t==null?void 0:t[ss],n[ss]),d[E]=k,d[ss]=n[ss];continue}var S=d[E];if(!(k===S&&!(k===void 0&&e.hasAttribute(E)))){d[E]=k;var C=E[0]+E[1];if(C!=="$$")if(C==="on"){const M={},G="$$"+E;let R=E.slice(2);var H=Kc(R);if(Bc(R)&&(R=R.slice(0,-7),M.capture=!0),!H&&S){if(k!=null)continue;e.removeEventListener(R,d[G],M),d[G]=null}if(H)P(R,e,k),Bt([R]);else if(k!=null){let K=function(F){d[E].call(this,F)};d[G]=hl(R,e,K,M)}}else if(E==="style")he(e,E,k);else if(E==="autofocus")Ii(e,!!k);else if(!l&&(E==="__value"||E==="value"&&k!=null))e.value=e.__value=k;else if(E==="selected"&&f)bl(e,k);else{var z=E;c||(z=Wc(z));var q=z==="defaultValue"||z==="defaultChecked";if(y&&z==="defaultValue")continue;if(k==null&&!l&&!q)if(a[E]=null,z==="value"||z==="checked"){let M=e;const G=t===void 0;if(z==="value"){let R=M.defaultValue;M.removeAttribute(z),M.defaultValue=R,M.value=M.__value=G?R:null}else{let R=M.defaultChecked;M.removeAttribute(z),M.defaultChecked=R,M.checked=G?R:!1}}else e.removeAttribute(E);else q||(l||typeof k!="string")&&g.has(z)?(e[z]=k,z in a&&(a[z]=qe)):typeof k!="function"&&he(e,z,k)}}}return d}function ni(e,t,n=[],r=[],s=[],o,a=!1,l=!1){Ri(s,n,r,c=>{var d=void 0,f={},y=e.nodeName===kl,h=!1;if(el(()=>{var b=t(...c.map(i)),w=wu(e,d,b,o,a,l);if(h&&y){var S=e;"defaultValue"in b&&ti(S,b.defaultValue),"value"in b&&xs(S,b.value)}for(let H of Object.getOwnPropertySymbols(f))b[H]||st(f[H]);for(let H of Object.getOwnPropertySymbols(b)){var C=b[H];H.description===ec&&(!d||C!==d[H])&&(f[H]&&st(f[H]),f[H]=xt(()=>hu(e,()=>C))),w[H]=C}d=w}),y){var g=e;Ma(()=>{var b=d;"defaultValue"in b&&ti(g,b.defaultValue),xs(g,b.value,!0),_s(g)})}h=!0})}function $l(e){return e[ia]??(e[ia]={[yl]:e.nodeName.includes("-"),[wl]:e.namespaceURI===Ci})}var ri=new Map;function Sl(e){var t=e.getAttribute("is")||e.nodeName,n=ri.get(t);if(n)return n;ri.set(t,n=new Set);for(var r,s=e,o=Element.prototype;o!==s;){r=bi(s);for(var a in r)r[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&n.add(a);s=go(s)}return n}function nt(e,t,n=t){var r=new WeakSet;Oi(e,"input",async s=>{var o=s?e.defaultValue:e.value;if(o=Ua(e)?Wa(o):o,n(o),X!==null&&r.add(X),await jc(),o!==(o=t())){var a=e.selectionStart,l=e.selectionEnd,c=e.value.length;if(e.value=o??"",l!==null){var d=e.value.length;a===l&&l===c&&d>c?(e.selectionStart=d,e.selectionEnd=d):(e.selectionStart=a,e.selectionEnd=Math.min(l,d))}}}),Nn(t)==null&&e.value&&(n(Ua(e)?Wa(e.value):e.value),X!==null&&r.add(X)),To(()=>{var s=t();if(e===document.activeElement){var o=X;if(r.has(o))return}Ua(e)&&s===Wa(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function Ua(e){var t=e.type;return t==="number"||t==="range"}function Wa(e){return e===""?null:+e}function qa(e,t){return e===t||(e==null?void 0:e[dn])===t}function ys(e=yo(),t,n,r){var s=Ae.r,o=ue;return Ma(()=>{var a,l;return To(()=>{a=l,l=[],Nn(()=>{qa(n(...l),e)||(t(e,...l),a&&qa(n(...a),e)&&t(null,...a))})}),()=>{let c=o;for(;c!==s&&c.parent!==null&&c.parent.f&_a;)c=c.parent;const d=()=>{l&&qa(n(...l),e)&&t(null,...l)},f=c.teardown;c.teardown=()=>{d(),f==null||f()}}}),e}function Cl(e=!1){const t=Ae,n=t.l.u;if(!n)return;let r=()=>nr(t.s);if(e){let s=0,o={};const a=Rr(()=>{let l=!1;const c=t.s;for(const d in c)c[d]!==o[d]&&(o[d]=c[d],l=!0);return l&&s++,s});r=()=>i(a)}n.b.length&&Oc(()=>{si(t,r),Xa(n.b)}),kt(()=>{const s=Nn(()=>n.m.map(Fl));return()=>{for(const o of s)typeof o=="function"&&o()}}),n.a.length&&kt(()=>{si(t,r),Xa(n.a)})}function si(e,t){if(e.l.s)for(const n of e.l.s)i(n);t()}function ku(e){var t=En(0);return function(){return arguments.length===1?(v(t,i(t)+1),arguments[0]):(i(t),e())}}const $u={get(e,t){if(!e.exclude.includes(t))return i(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var r=ue;try{jt(e.parent_effect),e.special[t]=Ve({get[t](){return e.props[t]}},t,Si)}finally{jt(r)}}return e.special[t](n),Uo(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),Uo(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ne(e,t){return new Proxy({props:e,exclude:t,special:{},version:En(0),parent_effect:ue},$u)}const Su={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(ts(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let s=e.props[r];ts(s)&&(s=s());const o=Ln(s,t);if(o&&o.set)return o.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(ts(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const s=Ln(r,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===dn||t===ki)return!1;for(let n of e.props)if(ts(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){const t=[];for(let n of e.props)if(ts(n)&&(n=n()),!!n){for(const r in n)t.includes(r)||t.push(r);for(const r of Object.getOwnPropertySymbols(n))t.includes(r)||t.push(r)}return t}};function le(...e){return new Proxy({props:e},Su)}function Ve(e,t,n,r){var q;var s=!jr||(n&Gl)!==0,o=(n&Yl)!==0,a=(n&Jl)!==0,l=r,c=!0,d=void 0,f=()=>a&&s?(d??(d=Rr(r)),i(d)):(c&&(c=!1,l=a?Nn(r):r),l);let y;if(o){var h=dn in e||ki in e;y=((q=Ln(e,t))==null?void 0:q.set)??(h&&t in e?E=>e[t]=E:void 0)}var g,b=!1;o?[g,b]=bc(()=>e[t]):g=e[t],g===void 0&&r!==void 0&&(g=f(),y&&(s&&dc(),y(g)));var w;if(s?w=()=>{var E=e[t];return E===void 0?f():(c=!0,E)}:w=()=>{var E=e[t];return E!==void 0&&(l=void 0),E===void 0?l:E},s&&(n&Si)===0)return w;if(y){var S=e.$$legacy;return(function(E,k){return arguments.length>0?((!s||!k||S||b)&&y(k?w():E),E):w()})}var C=!1,H=((n&ql)!==0?Rr:ko)(()=>(C=!1,w()));o&&i(H);var z=ue;return(function(E,k){if(arguments.length>0){const M=k?i(H):s&&o?Te(E):E;return v(H,M),C=!0,l!==void 0&&(l=M),E}return Tn&&C||(z.f&wt)!==0?H.v:i(H)})}function Ur(e){Ae===null&&Mi(),jr&&Ae.l!==null?Cu(Ae).m.push(e):kt(()=>{const t=Nn(e);if(typeof t=="function")return t})}function zo(e){Ae===null&&Mi(),Ur(()=>()=>Nn(e))}function Cu(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const Eu="5";var gi;typeof window<"u"&&((gi=window.__svelte??(window.__svelte={})).v??(gi.v=new Set)).add(Eu);const rr=()=>window.__IDE_BOOTSTRAP__||{};function Tu(e){const{rootPath:t="",session:n=""}=rr();return`${t}/api/sessions/${encodeURIComponent(n)}/ide${e}`}async function Ye(e,t={}){const n=await fetch(Tu(e),t),r=await n.json().catch(()=>({}));if(!n.ok){const s=new Error(r.error||"Request failed");throw Object.assign(s,r),s}return r}const tt=(e,t)=>`/ssh-connections/${encodeURIComponent(e)}${t}`,xe={chat:async(e,t=80)=>{const{rootPath:n=""}=rr(),r=`${n}/api/sessions/${encodeURIComponent(e)}/ide/chat?limit=${t}`,s=await fetch(r),o=await s.json().catch(()=>({}));if(!s.ok)throw new Error(o.error||"Could not load chat");return o},browse:async(e="")=>{const{rootPath:t=""}=rr(),n=`${t}/api/ide/browse?path=${encodeURIComponent(e)}`,r=await fetch(n),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not browse folders");return s},sessionAgent:async e=>{const{rootPath:t=""}=rr(),n=await fetch(`${t}/api/sessions/${encodeURIComponent(e)}/agent`),r=await n.json().catch(()=>({}));if(!n.ok)throw new Error(r.error||"Could not read agent settings");return r},setSessionAgent:async(e,t)=>{const{rootPath:n=""}=rr(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/agent`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({agent:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not switch agent");return s},setSessionModel:async(e,t)=>{const{rootPath:n=""}=rr(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/model`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change model");return s},setSessionEffort:async(e,t)=>{const{rootPath:n=""}=rr(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/effort`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({effort:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change effort");return s},browseOn:(e,t="")=>Ye(tt(e,`/browse?path=${encodeURIComponent(t)}`)),setWorkspaceRoot:(e,t,n)=>Ye(tt(e,"/workspace-root"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({workspace_root:t,label:n})}),agentContext:e=>Ye(tt(e,"/agent-context")),hostKey:e=>Ye(tt(e,"/host-key")),trustHost:e=>Ye(tt(e,"/host-key"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({accept:!0})}),listConnections:()=>Ye("/ssh-connections"),createConnection:e=>Ye("/ssh-connections",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),deleteConnection:e=>Ye(tt(e,""),{method:"DELETE"}),connect:(e,t)=>Ye(tt(e,"/connect"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t||""})}),status:e=>Ye(tt(e,"/status?reconnect=1")),listFiles:(e,t)=>Ye(tt(e,`/files?path=${encodeURIComponent(t)}`)),searchFiles:(e,t,n)=>Ye(tt(e,`/files/search?path=${encodeURIComponent(t)}&query=${encodeURIComponent(n)}`)),readFile:(e,t)=>Ye(tt(e,`/file?path=${encodeURIComponent(t)}`)),saveFile:(e,t,n)=>Ye(tt(e,"/file"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:t,content:n})}),fs:(e,t)=>Ye(tt(e,"/fs"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),git:(e,t)=>Ye(tt(e,"/git"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),focusTerminal:e=>Ye(tt(e,"/focus-terminal"),{method:"POST"}),getWorkspace:e=>Ye(tt(e,"/workspace")),saveWorkspace:(e,t)=>Ye(tt(e,"/workspace"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})};var Es,Ts,Ns,Ms,zs,As,Ps,Is,Os,Rs,Ds,Ls,Fs,Hs,js,Bs,Vs,Ks,Us,Ws,qs,Gs,Ys,Js;class Nu{constructor(){B(this,Es,A(Te([])));B(this,Ts,A(""));B(this,Ns,A("idle"));B(this,Ms,A("Ready"));B(this,zs,A("No file open"));B(this,As,A("."));B(this,Ps,A(Te([])));B(this,Is,A(Te({})));B(this,Os,A(Te({})));B(this,Rs,A(""));B(this,Ds,A(Te([])));B(this,Ls,A(""));B(this,Fs,A(""));B(this,Hs,A(""));B(this,js,A(Te([])));B(this,Bs,A(""));B(this,Vs,A(!1));B(this,Ks,A(!1));B(this,Us,A(0));B(this,Ws,A(0));B(this,qs,A(!1));B(this,Gs,A(""));B(this,Ys,A(Te([])));B(this,Js,A(!1));dt(this,"restoredKey","");dt(this,"persistTimer",null)}get connections(){return i(u(this,Es))}set connections(t){v(u(this,Es),t,!0)}get connectionId(){return i(u(this,Ts))}set connectionId(t){v(u(this,Ts),t,!0)}get connectionState(){return i(u(this,Ns))}set connectionState(t){v(u(this,Ns),t,!0)}get statusText(){return i(u(this,Ms))}set statusText(t){v(u(this,Ms),t,!0)}get detailText(){return i(u(this,zs))}set detailText(t){v(u(this,zs),t,!0)}get path(){return i(u(this,As))}set path(t){v(u(this,As),t,!0)}get entries(){return i(u(this,Ps))}set entries(t){v(u(this,Ps),t,!0)}get expanded(){return i(u(this,Is))}set expanded(t){v(u(this,Is),t,!0)}get treeChildren(){return i(u(this,Os))}set treeChildren(t){v(u(this,Os),t,!0)}get filter(){return i(u(this,Rs))}set filter(t){v(u(this,Rs),t,!0)}get tabs(){return i(u(this,Ds))}set tabs(t){v(u(this,Ds),t,!0)}get activeKey(){return i(u(this,Ls))}set activeKey(t){v(u(this,Ls),t,!0)}get gitOutput(){return i(u(this,Fs))}set gitOutput(t){v(u(this,Fs),t,!0)}get gitStatus(){return i(u(this,Hs))}set gitStatus(t){v(u(this,Hs),t,!0)}get gitBranches(){return i(u(this,js))}set gitBranches(t){v(u(this,js),t,!0)}get gitBranch(){return i(u(this,Bs))}set gitBranch(t){v(u(this,Bs),t,!0)}get needsHostKey(){return i(u(this,Vs))}set needsHostKey(t){v(u(this,Vs),t,!0)}get notARepo(){return i(u(this,Ks))}set notARepo(t){v(u(this,Ks),t,!0)}get gitAhead(){return i(u(this,Us))}set gitAhead(t){v(u(this,Us),t,!0)}get gitBehind(){return i(u(this,Ws))}set gitBehind(t){v(u(this,Ws),t,!0)}get gitHasUpstream(){return i(u(this,qs))}set gitHasUpstream(t){v(u(this,qs),t,!0)}get gitBusy(){return i(u(this,Gs))}set gitBusy(t){v(u(this,Gs),t,!0)}get gitCommits(){return i(u(this,Ys))}set gitCommits(t){v(u(this,Ys),t,!0)}get gitHistoryLoaded(){return i(u(this,Js))}set gitHistoryLoaded(t){v(u(this,Js),t,!0)}get connection(){return this.connections.find(t=>t.id===this.connectionId)||null}get activeTab(){return this.tabs.find(t=>t.key===this.activeKey)||null}get visibleEntries(){const t=this.filter.trim().toLowerCase();return t?this.entries.filter(n=>n.name.toLowerCase().includes(t)):this.entries}get dirtyCount(){return this.tabs.filter(t=>t.dirty).length}get gitDirtyCount(){return this.gitStatus.split(`
`).filter(t=>t.trim()&&!t.startsWith("##")).length}resetWorkspaceView(){this.tabs=[],this.activeKey="",this.restoredKey="",this.path=".",this.entries=[],this.expanded={},this.treeChildren={},this.filter="",this.gitOutput="",this.gitStatus="",this.gitBranches=[],this.gitBranch="",this.needsHostKey=!1,this.notARepo=!1,this.gitAhead=0,this.gitBehind=0,this.gitHasUpstream=!1,this.gitCommits=[],this.gitHistoryLoaded=!1}setStatus(t,n){this.statusText=t,n!==void 0&&(this.detailText=n)}async loadConnections(){try{const t=await xe.listConnections();this.connections=t.connections||[],!this.connectionId&&this.connections.length&&(this.connectionId=this.connections[0].id)}catch(t){this.setStatus(t.message||"Could not load connections")}}async refreshStatus(){var t,n,r;if(this.connectionId)try{const s=await xe.status(this.connectionId);s.connected?(this.connectionState="connected",this.setStatus(`Connected · ${((t=this.connection)==null?void 0:t.label)||"SSH workspace"}`,`SSH terminal: ${s.window_name||"open"}`),await this.restoreWorkspace()):(this.connectionState="reconnect",this.entries=[],this.setStatus(`Reconnect required · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,(r=this.connection)!=null&&r.has_password?"Auto-reconnect failed — select Connect to retry":"Select Connect to reopen SSH"))}catch(s){this.connectionState="error",this.setStatus(s.message||"Could not check SSH connection")}}async connect(t){var n;if(this.connectionId){this.connectionState="connecting",this.setStatus("Connecting…");try{const r=await xe.connect(this.connectionId,t);this.connectionState="connected",this.setStatus(`Connected · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,`SSH terminal: ${r.window_name||"open"}`),await this.restoreWorkspace()}catch(r){this.connectionState="error",this.setStatus(r.message||"Could not connect"),this.needsHostKey=!!r.needs_host_key}}}async refreshFiles(t){if(!this.connectionId)return;const n=t||this.path||".";try{const r=await xe.listFiles(this.connectionId,n);this.path=r.path||n,this.entries=r.entries||[],this.remember()}catch(r){this.setStatus(r.message||"Could not list remote files")}}async toggleDirectory(t){if(this.expanded[t]){const n={...this.expanded};delete n[t],this.expanded=n;return}if(this.expanded={...this.expanded,[t]:!0},!this.treeChildren[t])try{const n=await xe.listFiles(this.connectionId,t);this.treeChildren={...this.treeChildren,[t]:n.entries||[]}}catch(n){this.setStatus(n.message||"Could not expand folder")}}openDiffTab(t,n){const r=`${this.connectionId}|diff:${t}`,s=this.tabs.find(a=>a.key===r);if(s)return s.content=n,s.saved=n,this.activeKey=r,s;const o={key:r,path:`${t} (diff)`,content:n,saved:n,dirty:!1,readOnly:!0,language:"plaintext"};return this.tabs=[...this.tabs,o],this.activeKey=r,o}async openFile(t){if(!this.connectionId)return null;const n=`${this.connectionId}|${t}`,r=this.tabs.find(s=>s.key===n);if(r)return this.activeKey=n,r;try{const s=await xe.readFile(this.connectionId,t),o={key:`${this.connectionId}|${s.path}`,path:s.path,content:s.content||"",saved:s.content||"",dirty:!1};return this.tabs=[...this.tabs,o],this.activeKey=o.key,this.setStatus("Opened",o.path),this.remember(),o}catch(s){return this.setStatus(s.message||"Could not open remote file"),null}}updateContent(t,n){this.tabs=this.tabs.map(r=>r.key===t?{...r,content:n,dirty:n!==r.saved}:r),this.remember()}closeTab(t){var r;const n=this.tabs.find(s=>s.key===t);n!=null&&n.dirty&&!confirm(`Discard unsaved changes to ${n.path}?`)||(this.tabs=this.tabs.filter(s=>s.key!==t),this.activeKey===t&&(this.activeKey=((r=this.tabs.at(-1))==null?void 0:r.key)||""),this.remember())}async saveActive(){const t=this.activeTab;if(t)try{await xe.saveFile(this.connectionId,t.path,t.content),this.tabs=this.tabs.map(n=>n.key===t.key?{...n,saved:n.content,dirty:!1}:n),this.setStatus(`Saved ${t.path}`,t.path),this.remember()}catch(n){this.setStatus(n.message||"Could not save file")}}async restoreWorkspace(){const t=`${this.connectionId}`;if(!t)return;let n=null;try{n=await xe.getWorkspace(this.connectionId)}catch{n=null}if(await this.refreshFiles((n==null?void 0:n.last_directory)||"."),this.restoredKey===t)return;this.restoredKey=t;const r=(n==null?void 0:n.buffers)||{};for(const o of((n==null?void 0:n.tabs)||[]).slice(0,12)){const a=await this.openFile(o);a&&Object.prototype.hasOwnProperty.call(r,o)&&this.updateContent(a.key,r[o])}const s=this.tabs.find(o=>o.path===(n==null?void 0:n.active_path));s&&(this.activeKey=s.key)}remember(){this.persistTimer&&clearTimeout(this.persistTimer),this.persistTimer=setTimeout(()=>this.persist(),1500)}async persist(){var n;if(!this.connectionId)return;const t={};for(const r of this.tabs)r.dirty&&(t[r.path]=r.content);try{await xe.saveWorkspace(this.connectionId,{tabs:this.tabs.map(r=>r.path).slice(0,50),active_path:((n=this.activeTab)==null?void 0:n.path)||"",last_directory:this.path||".",buffers:t})}catch{}}async runGit(t,n={}){try{const r=await xe.git(this.connectionId,{action:t,path:this.path||".",...n});return r.not_a_repo?(this.gitOutput=r.error||"This folder is not a Git repository.",this.gitStatus="",this.gitBranches=[],this.gitBranch="",this.gitCommits=[],this.gitHistoryLoaded=!1,this.notARepo=!0,null):(this.notARepo=!1,this.gitAhead=r.ahead||0,this.gitBehind=r.behind||0,this.gitHasUpstream=!!r.has_upstream,t==="log"?(this.gitCommits=r.commits||[],this.gitHistoryLoaded=!0):t!=="show"&&(this.gitOutput=r.output||r.status||""),this.gitStatus=r.status||"",this.gitBranches=r.branches||[],this.gitBranch=r.current_branch||"",["commit","switch","create_branch","pull","push","fetch"].includes(t)&&(this.gitHistoryLoaded=!1),r)}catch(r){return this.gitOutput=r.message||"Git command failed",null}}}Es=new WeakMap,Ts=new WeakMap,Ns=new WeakMap,Ms=new WeakMap,zs=new WeakMap,As=new WeakMap,Ps=new WeakMap,Is=new WeakMap,Os=new WeakMap,Rs=new WeakMap,Ds=new WeakMap,Ls=new WeakMap,Fs=new WeakMap,Hs=new WeakMap,js=new WeakMap,Bs=new WeakMap,Vs=new WeakMap,Ks=new WeakMap,Us=new WeakMap,Ws=new WeakMap,qs=new WeakMap,Gs=new WeakMap,Ys=new WeakMap,Js=new WeakMap;const p=new Nu;_c();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Mu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const zu=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const ai=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();var Au=_l("<svg><!><!></svg>");function ce(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]),r=ne(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);_t(t,!1);let s=Ve(t,"name",8,void 0),o=Ve(t,"color",8,"currentColor"),a=Ve(t,"size",8,24),l=Ve(t,"strokeWidth",8,2),c=Ve(t,"absoluteStrokeWidth",8,!1),d=Ve(t,"iconNode",24,()=>[]);Cl();var f=Au();ni(f,(g,b,w)=>({...Mu,...g,...r,width:a(),height:a(),stroke:o(),"stroke-width":b,class:w}),[()=>zu(r)?void 0:{"aria-hidden":"true"},()=>(nr(c()),nr(l()),nr(a()),Nn(()=>c()?Number(l())*24/Number(a()):l())),()=>(nr(ai),nr(s()),nr(n),Nn(()=>ai("lucide-icon","lucide",s()?`lucide-${s()}`:"",n.class)))]);var y=x(f);Ke(y,1,d,gl,(g,b)=>{var w=ht(()=>Hl(i(b),2));let S=()=>i(w)[0],C=()=>i(w)[1];var H=Z(),z=j(H);vu(z,S,!0,(q,E)=>{ni(q,()=>({...C()}))}),m(g,H)});var h=_(y);ae(h,t,"default",{}),m(e,f),gt()}function Pu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"m21 8-4-4-4 4"}],["path",{d:"M17 4v16"}]];ce(e,le({name:"arrow-down-up"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Iu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];ce(e,le({name:"arrow-up"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function fa(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 6 9 17l-5-5"}]];ce(e,le({name:"check"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Hn(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];ce(e,le({name:"chevron-down"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function va(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m9 18 6-6-6-6"}]];ce(e,le({name:"chevron-right"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function oi(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];ce(e,le({name:"circle-alert"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Ou(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ce(e,le({name:"circle-check"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Ru(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]];ce(e,le({name:"circle-dot"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Du(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]];ce(e,le({name:"circle-user"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Lu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];ce(e,le({name:"circle"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Fu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}],["path",{d:"m9 10-5 5 5 5"}]];ce(e,le({name:"corner-down-left"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Hu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]];ce(e,le({name:"corner-left-up"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ju(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]];ce(e,le({name:"ellipsis"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Bu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];ce(e,le({name:"external-link"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ii(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m5 16-3 3 3 3"}],["path",{d:"m9 22 3-3-3-3"}]];ce(e,le({name:"file-code-corner"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Vu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]];ce(e,le({name:"file-diff"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Ku(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]];ce(e,le({name:"file-plus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Ao(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}]];ce(e,le({name:"file"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Uu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"}]];ce(e,le({name:"files"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Ga(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];ce(e,le({name:"folder-open"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Wu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];ce(e,le({name:"folder-plus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function qu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];ce(e,le({name:"folder"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ho(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 6a9 9 0 0 0-9 9V3"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}]];ce(e,le({name:"git-branch"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Gu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 16h.01"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["path",{d:"M21.946 12.013H2.054"}],["path",{d:"M6 16h.01"}]];ce(e,le({name:"hard-drive"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Yu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];ce(e,le({name:"history"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Ju(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];ce(e,le({name:"link-2"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Sn(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]];ce(e,le({name:"loader"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function li(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}]];ce(e,le({name:"message-square"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Xu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}]];ce(e,le({name:"minus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Zu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{d:"M10 19v-3.96 3.15"}],["path",{d:"M7 19h5"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2"}]];ce(e,le({name:"monitor-smartphone"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Qu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}]];ce(e,le({name:"panel-bottom"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ed(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]];ce(e,le({name:"panel-left"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function wa(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];ce(e,le({name:"plus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function po(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ce(e,le({name:"refresh-cw"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Po(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ce(e,le({name:"search"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ci(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];ce(e,le({name:"server"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function td(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]];ce(e,le({name:"shield-alert"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Ya(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];ce(e,le({name:"sparkles"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ui(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]];ce(e,le({name:"square-terminal"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function nd(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];ce(e,le({name:"square"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function rd(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];ce(e,le({name:"trash-2"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function sd(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]];ce(e,le({name:"undo-2"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function gs(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ce(e,le({name:"x"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Z(),l=j(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}var ad=N('<span class="w-[14px] shrink-0"></span>'),od=_l('<svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1.5 3.5h4l1.2 1.4h7.8v7.6H1.5z" fill="#c09553"></path></svg>'),id=N('<div role="treeitem" tabindex="0"><!> <span class="flex shrink-0 items-center"><!></span> <span class="flex-1 truncate text-vs-fg"> </span> <span class="hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Rename"><span class="text-[11px] leading-none">✎</span></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Delete"><span class="text-[11px] leading-none">🗑</span></button></span></div> <!>',1);function El(e,t){_t(t,!0);const n=ht(()=>t.dir==="."?t.entry.name:`${t.dir}/${t.entry.name}`),r=ht(()=>!!p.expanded[i(n)]),s=ht(()=>p.treeChildren[i(n)]||[]),o=ht(()=>{var F;return((F=p.activeTab)==null?void 0:F.path)===i(n)});async function a(){t.entry.is_dir?await p.toggleDirectory(i(n)):await p.openFile(i(n))}async function l(F){if(F.stopPropagation(),!!confirm(`Delete ${i(n)}? Folders must already be empty.`))try{await xe.fs(p.connectionId,{action:"delete",path:i(n)}),await p.refreshFiles()}catch(U){p.setStatus(U.message||"Could not delete")}}async function c(F){F.stopPropagation();const U=prompt("Rename to (relative path):",i(n));if(!(!U||U===i(n)))try{await xe.fs(p.connectionId,{action:"rename",path:i(n),new_path:U}),await p.refreshFiles()}catch(de){p.setStatus(de.message||"Could not rename")}}var d=id(),f=j(d);let y;var h=x(f);{var g=F=>{var U=Z(),de=j(U);{var me=Ne=>{Hn(Ne,{size:14,class:"shrink-0 text-vs-muted"})},He=Ne=>{va(Ne,{size:14,class:"shrink-0 text-vs-muted"})};L(de,Ne=>{i(r)?Ne(me):Ne(He,-1)})}m(F,U)},b=F=>{var U=ad();m(F,U)};L(h,F=>{t.entry.is_dir?F(g):F(b,-1)})}var w=_(h,2),S=x(w);{var C=F=>{var U=od();m(F,U)},H=F=>{Ju(F,{size:14,class:"text-vs-muted"})},z=F=>{Ao(F,{size:14,class:"text-vs-blue"})};L(S,F=>{t.entry.is_dir?F(C):t.entry.is_symlink?F(H,1):F(z,-1)})}var q=_(w,2),E=Q(q,!0),k=_(q,2),M=x(k),G=_(M,2),R=_(f,2);{var K=F=>{var U=Z(),de=j(U);Ke(de,17,()=>i(s),me=>me.name,(me,He)=>{{let Ne=ht(()=>t.depth+1);El(me,{get entry(){return i(He)},get dir(){return i(n)},get depth(){return i(Ne)}})}}),m(F,U)};L(R,F=>{t.entry.is_dir&&i(r)&&F(K)})}J(()=>{y=At(f,1,"group flex cursor-pointer items-center gap-1 py-[2px] pr-1 text-[13px] hover:bg-vs-hover",null,y,{"bg-vs-active":i(o)}),ps(f,`padding-left: ${8+t.depth*12}px`),he(f,"aria-expanded",t.entry.is_dir?i(r):void 0),he(f,"aria-selected",i(o)),he(f,"title",i(n)),W(E,t.entry.name),he(M,"aria-label",`Rename ${t.entry.name??""}`),he(G,"aria-label",`Delete ${t.entry.name??""}`)}),P("click",f,a),P("keydown",f,F=>{(F.key==="Enter"||F.key===" ")&&(F.preventDefault(),a())}),P("click",M,c),P("click",G,l),m(e,d),gt()}Bt(["click","keydown"]);var ld=N('<form class="px-2 pb-1"><input class="w-full rounded-sm border border-vs-accent bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none"/></form>'),cd=N('<p class="px-4 py-2 text-xs text-vs-muted">No folder opened.</p>'),ud=N('<p class="px-4 py-2 text-xs text-vs-muted">No files here</p>'),dd=N('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-vs-fg uppercase"><span class="flex-1 truncate">Explorer</span></div> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold text-vs-fg uppercase"><!> <span class="flex-1 truncate"> </span> <span class="flex opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-1 hover:bg-vs-hover" title="New file" aria-label="New file"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="New folder" aria-label="New folder"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="Refresh" aria-label="Refresh"><!></button></span></div> <!> <input class="mx-2 mb-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none focus:border-vs-accent" placeholder="Filter files…"/> <div class="min-h-0 flex-1 overflow-y-auto pb-2"><!></div></div>');function fd(e,t){_t(t,!0);let n=A(""),r=A("");const s=(K,F)=>K==="."?F:`${K}/${F}`;async function o(K){K.preventDefault();const F=i(r).trim();if(F)try{await xe.fs(p.connectionId,{action:i(n)==="dir"?"create_dir":"create_file",path:s(p.path,F)}),v(n,""),v(r,""),await p.refreshFiles()}catch(U){p.setStatus(U.message||"Could not create")}}const a=ht(()=>{var K,F;return(((K=p.connection)==null?void 0:K.workspace_root)||"").split("/").filter(Boolean).pop()||((F=p.connection)==null?void 0:F.label)||"WORKSPACE"});var l=dd(),c=_(x(l),2),d=x(c);Hn(d,{size:14,class:"shrink-0 text-vs-muted"});var f=_(d,2),y=Q(f,!0),h=_(f,2),g=x(h),b=x(g);Ku(b,{size:14});var w=_(g,2),S=x(w);Wu(S,{size:14});var C=_(w,2),H=x(C);po(H,{size:13});var z=_(c,2);{var q=K=>{var F=ld(),U=x(F);Ii(U,!0),J(()=>he(U,"placeholder",i(n)==="dir"?"New folder name":"New file name")),_r("submit",F,o),P("keydown",U,de=>{de.key==="Escape"&&v(n,"")}),_r("blur",U,()=>{i(r).trim()||v(n,"")}),nt(U,()=>i(r),de=>v(r,de)),m(K,F)};L(z,K=>{i(n)&&K(q)})}var E=_(z,2),k=_(E,2),M=x(k);{var G=K=>{var F=cd();m(K,F)},R=K=>{var F=Z(),U=j(F);Ke(U,17,()=>p.visibleEntries,de=>de.name,(de,me)=>{El(de,{get entry(){return i(me)},get dir(){return p.path},depth:0})},de=>{var me=ud();m(de,me)}),m(K,F)};L(M,K=>{p.connectionId?K(R,-1):K(G)})}J(()=>{var K;he(f,"title",(K=p.connection)==null?void 0:K.workspace_root),W(y,i(a))}),P("click",g,()=>{v(n,"file"),v(r,"")}),P("click",w,()=>{v(n,"dir"),v(r,"")}),P("click",C,()=>p.refreshFiles()),nt(E,()=>p.filter,K=>p.filter=K),m(e,l),gt()}Bt(["click","keydown"]);var vd=N('<div class="absolute top-full right-0 z-20 mt-1 min-w-[170px] rounded-md border border-vs-line bg-vs-panel py-1 shadow-2xl"><button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Fetch</button> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Pull</button> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Push</button> <div class="my-1 h-px bg-vs-line"></div> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Create Branch…</button></div>'),hd=N('<p class="mx-3 flex items-center gap-1.5 text-xs text-vs-muted"><!> Reading repository…</p>'),pd=N(`<p class="mx-3 text-xs leading-relaxed text-vs-muted">This folder isn't a Git repository.<br/> Open a folder containing a <code class="rounded-sm bg-vs-input px-1">.git</code> directory,
      or run <code class="rounded-sm bg-vs-input px-1">git init</code> in the terminal.</p>`),_d=N('<div class="group flex cursor-pointer items-center gap-1.5 py-[2px] pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><span class="truncate text-vs-fg"> </span> <span class="truncate text-[11px] text-vs-muted"> </span> <span class="ml-auto hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Unstage"><!></button></span> <span> </span></div>'),gd=N('<div class="flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <span class="truncate">Staged Changes</span></button> <span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span></div> <!>',1),md=N('<div class="group flex cursor-pointer items-center gap-1.5 py-[2px] pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><span class="truncate text-vs-fg"> </span> <span class="truncate text-[11px] text-vs-muted"> </span> <span class="ml-auto hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Open changes"><!></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Discard changes"><!></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Stage changes"><!></button></span> <span> </span></div>'),bd=N('<p class="px-6 py-2 text-xs text-vs-muted">No changes.</p>'),xd=N('<div class="min-h-0 flex-1 overflow-y-auto"></div>'),yd=N('<span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span>'),wd=N('<span class="flex shrink-0 opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-0.5 hover:bg-vs-line" title="Refresh history" aria-label="Refresh history"><!></button></span> <!>',1),kd=N('<span class="shrink-0 rounded-sm bg-vs-line px-1 text-[10px] text-vs-blue"> </span>'),$d=N('<div class="group flex cursor-pointer flex-col gap-0.5 py-1 pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><div class="flex min-w-0 items-center gap-1.5"><span class="truncate text-vs-fg"> </span> <!></div> <div class="flex min-w-0 items-center gap-1.5 text-[11px] text-vs-muted"><span class="shrink-0 font-mono text-vs-yellow"> </span> <span class="truncate"> </span> <span class="ml-auto shrink-0"> </span></div></div>'),Sd=N('<p class="px-6 py-2 text-xs text-vs-muted"> </p>'),Cd=N('<div class="max-h-[45%] min-h-0 flex-1 overflow-y-auto"></div>'),Ed=N('<button class="flex items-center gap-1 rounded-sm px-1 text-vs-muted hover:bg-vs-hover hover:text-vs-fg" title="Pull then push"><!> </button>'),Td=N('<div class="flex gap-1 border-t border-vs-line px-3 py-2"><input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="New branch name"/> <button class="rounded-sm bg-vs-status px-2 py-1 text-xs text-white">Create</button></div>'),Nd=N('<pre class="max-h-[120px] shrink-0 overflow-auto border-t border-vs-line px-3 py-1.5 text-[11px] whitespace-pre-wrap text-vs-muted"> </pre>'),Md=N('<div class="px-3 pb-2"><textarea class="w-full resize-none rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs text-vs-fg outline-none focus:border-vs-accent placeholder:text-vs-muted" rows="2"></textarea> <button class="mt-1 flex w-full items-center justify-center gap-1.5 rounded-sm bg-vs-status px-2 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"><!> Commit</button></div> <!> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <span class="truncate">Changes</span></button> <span class="flex shrink-0 opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-0.5 hover:bg-vs-line" title="Refresh" aria-label="Refresh"><!></button> <button class="rounded-sm p-0.5 hover:bg-vs-line" title="Stage all changes" aria-label="Stage all"><!></button></span> <span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span></div> <!> <div class="group flex shrink-0 items-center gap-1 border-t border-vs-line px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <!> <span class="truncate">History</span></button> <!></div> <!> <div class="mt-auto flex items-center gap-2 border-t border-vs-line px-3 py-1.5 text-[11px]"><span class="flex min-w-0 items-center gap-1 text-vs-muted" title="Current branch"><!> <span class="truncate"> </span></span> <!></div> <!> <!>',1),zd=N('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase"><span class="flex-1">Source Control</span> <div class="relative" data-scm-menu=""><button class="rounded-sm p-0.5 hover:bg-vs-hover" title="More actions" aria-label="More actions"><!></button> <!></div></div> <!></div>');function Ad(e,t){_t(t,!0);let n=A(""),r=A(""),s=A(!1),o=A(!0),a=A(!0),l=A(!1),c=A(!1);const d=ht(()=>(p.gitStatus||"").split(`
`).filter(I=>I&&!I.startsWith("##")).map(I=>{const ee=I.slice(3),ye=ee.indexOf(" -> "),Ue=ye===-1?ee:ee.slice(ye+4);return{index:I[0]===" "?"":I[0],work:I[1]===" "?"":I[1],code:I.slice(0,2).trim()||"??",path:Ue.replace(/\r$/,""),from:ye===-1?"":ee.slice(0,ye)}}).filter(I=>I.path)),f=ht(()=>i(d).filter(I=>I.index&&I.index!=="?")),y=ht(()=>i(d).filter(I=>I.work&&I.work!==" ")),h=I=>I.includes("?")||I.includes("A")?"text-vs-green":I.includes("D")?"text-vs-red":I.includes("R")?"text-vs-blue":"text-vs-yellow",g=I=>I.split("/").pop(),b=I=>{const ee=I.split("/");return ee.pop(),ee.join("/")};async function w(I,ee={}){p.gitBusy=I;try{return await p.runGit(I,ee)}finally{p.gitBusy=""}}async function S(){if(!i(n).trim()||!i(f).length)return;await w("commit",{message:i(n).trim()})&&v(n,"")}async function C(){if(!i(r).trim())return;await w("create_branch",{branch:i(r).trim()})&&(v(r,""),v(s,!1))}async function H(I){confirm(`Discard changes in ${I.path}? This cannot be undone.`)&&await w("discard",{files:[I.path]})}async function z(I){const ee=await p.runGit("diff_file",{files:[I.path]});ee&&p.openDiffTab(I.path,ee.output||"No changes to show.")}let q=A("");kt(()=>{const I=p.connectionId,ee=p.connectionState,ye=I?`${I}|${ee}`:"";!I||ee!=="connected"||i(q)!==ye&&(v(q,ye,!0),w("status"))});async function E(){v(l,!i(l)),i(l)&&!p.gitHistoryLoaded&&await w("log")}kt(()=>{i(l)&&!p.gitHistoryLoaded&&!p.notARepo&&!p.gitBusy&&w("log")});async function k(I){const ee=await p.runGit("show",{ref:I.hash});ee&&p.openDiffTab(`${I.short} ${I.subject}`,ee.output||"Empty commit.")}const M=I=>(I||"").split(",").map(ee=>ee.trim().replace(/^HEAD -> /,"")).filter(Boolean);function G(I){I.key==="Enter"&&(I.ctrlKey||I.metaKey)&&(I.preventDefault(),S())}var R=zd();_r("click",ms,I=>{var ee,ye;(ye=(ee=I.target).closest)!=null&&ye.call(ee,"[data-scm-menu]")||v(c,!1)});var K=x(R),F=_(x(K),2),U=x(F),de=x(U);ju(de,{size:14});var me=_(U,2);{var He=I=>{var ee=vd(),ye=x(ee),Ue=_(ye,2),it=_(Ue,2),Vt=_(it,4);P("click",ye,()=>{v(c,!1),w("fetch")}),P("click",Ue,()=>{v(c,!1),w("pull")}),P("click",it,()=>{v(c,!1),w("push")}),P("click",Vt,()=>{v(c,!1),v(s,!i(s))}),m(I,ee)};L(me,I=>{i(c)&&I(He)})}var Ne=_(K,2);{var at=I=>{var ee=hd(),ye=x(ee);Sn(ye,{size:12,class:"animate-spin"}),m(I,ee)},oe=I=>{var ee=pd();m(I,ee)},ie=I=>{var ee=Md(),ye=j(ee),Ue=x(ye),it=_(Ue,2),Vt=x(it);{var Pt=Y=>{Sn(Y,{size:12,class:"animate-spin"})},gr=Y=>{fa(Y,{size:12})};L(Vt,Y=>{p.gitBusy==="commit"?Y(Pt):Y(gr,-1)})}var Qt=_(ye,2);{var Vn=Y=>{var Pe=gd(),Ce=j(Pe),re=x(Ce),Me=x(re);{var $t=fe=>{Hn(fe,{size:14,class:"text-vs-muted"})},Qe=fe=>{va(fe,{size:14,class:"text-vs-muted"})};L(Me,fe=>{i(a)?fe($t):fe(Qe,-1)})}var $=_(re,2),D=Q($,!0),O=_(Ce,2);{var _e=fe=>{var we=Z(),Ee=j(we);Ke(Ee,17,()=>i(f),Ie=>Ie.path,(Ie,be)=>{var ve=_d(),ct=x(ve),Be=Q(ct,!0),et=_(ct,2),nn=Q(et,!0),Zn=_(et,2),St=x(Zn),xr=x(St);Xu(xr,{size:13});var bn=_(Zn,2),Xr=Q(bn,!0);J((Kt,Zr,Ct)=>{he(ve,"title",i(be).path),W(Be,Kt),W(nn,Zr),he(St,"aria-label",`Unstage ${i(be).path??""}`),At(bn,1,`shrink-0 font-mono text-[11px] ${Ct??""}`),W(Xr,i(be).index||i(be).code)},[()=>g(i(be).path),()=>b(i(be).path),()=>h(i(be).code)]),P("click",ve,()=>z(i(be))),P("keydown",ve,Kt=>{Kt.key==="Enter"&&z(i(be))}),P("click",St,Kt=>{Kt.stopPropagation(),w("unstage",{files:[i(be).path]})}),m(Ie,ve)}),m(fe,we)};L(O,fe=>{i(a)&&fe(_e)})}J(()=>W(D,i(f).length)),P("click",re,()=>v(a,!i(a))),m(Y,Pe)};L(Qt,Y=>{i(f).length&&Y(Vn)})}var Kn=_(Qt,2),en=x(Kn),Un=x(en);{var Wr=Y=>{Hn(Y,{size:14,class:"text-vs-muted"})},mr=Y=>{va(Y,{size:14,class:"text-vs-muted"})};L(Un,Y=>{i(o)?Y(Wr):Y(mr,-1)})}var Wn=_(en,2),pn=x(Wn),qr=x(pn);po(qr,{size:12});var _n=_(pn,2),Gr=x(_n);wa(Gr,{size:13});var qn=_(Wn,2),Yr=Q(qn,!0),Gn=_(Kn,2);{var Yn=Y=>{var Pe=xd();Ke(Pe,21,()=>i(y),Ce=>Ce.path,(Ce,re)=>{var Me=md(),$t=x(Me),Qe=Q($t,!0),$=_($t,2),D=Q($,!0),O=_($,2),_e=x(O),fe=x(_e);Vu(fe,{size:13});var we=_(_e,2),Ee=x(we);sd(Ee,{size:13});var Ie=_(we,2),be=x(Ie);wa(be,{size:13});var ve=_(O,2),ct=Q(ve,!0);J((Be,et,nn)=>{he(Me,"title",i(re).path),W(Qe,Be),W(D,et),he(_e,"aria-label",`Open changes to ${i(re).path??""}`),he(we,"aria-label",`Discard changes to ${i(re).path??""}`),he(Ie,"aria-label",`Stage ${i(re).path??""}`),At(ve,1,`shrink-0 font-mono text-[11px] ${nn??""}`),W(ct,i(re).work||i(re).code)},[()=>g(i(re).path),()=>b(i(re).path),()=>h(i(re).code)]),P("click",Me,()=>z(i(re))),P("keydown",Me,Be=>{Be.key==="Enter"&&z(i(re))}),P("click",_e,Be=>{Be.stopPropagation(),z(i(re))}),P("click",we,Be=>{Be.stopPropagation(),H(i(re))}),P("click",Ie,Be=>{Be.stopPropagation(),w("stage",{files:[i(re).path]})}),m(Ce,Me)},Ce=>{var re=bd();m(Ce,re)}),m(Y,Pe)};L(Gn,Y=>{i(o)&&Y(Yn)})}var Jn=_(Gn,2),Xn=x(Jn),br=x(Xn);{var T=Y=>{Hn(Y,{size:14,class:"text-vs-muted"})},V=Y=>{va(Y,{size:14,class:"text-vs-muted"})};L(br,Y=>{i(l)?Y(T):Y(V,-1)})}var te=_(br,2);Yu(te,{size:12,class:"shrink-0 text-vs-muted"});var $e=_(Xn,2);{var Se=Y=>{var Pe=wd(),Ce=j(Pe),re=x(Ce),Me=x(re);{var $t=O=>{Sn(O,{size:12,class:"animate-spin"})},Qe=O=>{po(O,{size:12})};L(Me,O=>{p.gitBusy==="log"?O($t):O(Qe,-1)})}var $=_(Ce,2);{var D=O=>{var _e=yd(),fe=Q(_e,!0);J(()=>W(fe,p.gitCommits.length)),m(O,_e)};L($,O=>{p.gitCommits.length&&O(D)})}P("click",re,()=>w("log")),m(Y,Pe)};L($e,Y=>{i(l)&&Y(Se)})}var Re=_(Jn,2);{var De=Y=>{var Pe=Cd();Ke(Pe,21,()=>p.gitCommits,Ce=>Ce.hash,(Ce,re)=>{var Me=$d(),$t=x(Me),Qe=x($t),$=Q(Qe,!0),D=_(Qe,2);Ke(D,17,()=>M(i(re).refs),gl,(ve,ct)=>{var Be=kd(),et=Q(Be,!0);J(()=>W(et,i(ct))),m(ve,Be)});var O=_($t,2),_e=x(O),fe=Q(_e,!0),we=_(_e,2),Ee=Q(we,!0),Ie=_(we,2),be=Q(Ie,!0);J(()=>{he(Me,"title",`${i(re).short} · ${i(re).author} · ${i(re).date}`),W($,i(re).subject),W(fe,i(re).short),W(Ee,i(re).author),W(be,i(re).relative)}),P("click",Me,()=>k(i(re))),P("keydown",Me,ve=>{ve.key==="Enter"&&k(i(re))}),m(Ce,Me)},Ce=>{var re=Sd(),Me=Q(re,!0);J(()=>W(Me,p.gitBusy==="log"?"Loading history…":"No commits yet.")),m(Ce,re)}),m(Y,Pe)};L(Re,Y=>{i(l)&&Y(De)})}var We=_(Re,2),je=x(We),Le=x(je);ho(Le,{size:12,class:"shrink-0"});var lt=_(Le,2),mt=Q(lt,!0),tn=_(je,2);{var gn=Y=>{var Pe=Ed(),Ce=x(Pe);{var re=Qe=>{Sn(Qe,{size:11,class:"animate-spin"})},Me=Qe=>{Pu(Qe,{size:11})};L(Ce,Qe=>{p.gitBusy==="pull"||p.gitBusy==="push"?Qe(re):Qe(Me,-1)})}var $t=_(Ce);J(()=>W($t,` ${p.gitBehind??""}↓ ${p.gitAhead??""}↑`)),P("click",Pe,()=>w("pull").then(()=>w("push"))),m(Y,Pe)};L(tn,Y=>{p.gitHasUpstream&&Y(gn)})}var Mn=_(We,2);{var zn=Y=>{var Pe=Td(),Ce=x(Pe),re=_(Ce,2);P("keydown",Ce,Me=>{Me.key==="Enter"&&C(),Me.key==="Escape"&&v(s,!1)}),nt(Ce,()=>i(r),Me=>v(r,Me)),P("click",re,C),m(Y,Pe)};L(Mn,Y=>{i(s)&&Y(zn)})}var mn=_(Mn,2);{var Jr=Y=>{var Pe=Nd(),Ce=Q(Pe,!0);J(()=>W(Ce,p.gitOutput)),m(Y,Pe)};L(mn,Y=>{p.gitOutput&&Y(Jr)})}J(Y=>{he(Ue,"placeholder",`Message (Ctrl+Enter to commit on "${p.gitBranch||"branch"}")`),it.disabled=Y,he(it,"title",i(f).length?"Commit staged changes":"Stage a change first"),W(Yr,i(y).length),W(mt,p.gitBranch||"—")},[()=>!i(n).trim()||!i(f).length||p.gitBusy==="commit"]),P("keydown",Ue,G),nt(Ue,()=>i(n),Y=>v(n,Y)),P("click",it,S),P("click",en,()=>v(o,!i(o))),P("click",pn,()=>w("status")),P("click",_n,()=>w("stage",{files:["."]})),P("click",Xn,E),m(I,ee)};L(Ne,I=>{!i(q)||p.gitBusy==="status"&&!p.gitStatus&&!p.notARepo?I(at):p.notARepo?I(oe,1):I(ie,-1)})}P("click",U,()=>v(c,!i(c))),m(e,R),gt()}Bt(["click","keydown"]);const Pd="modulepreload",Id=function(e,t){return new URL(e,t).href},di={},ha=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let a=function(f){return Promise.all(f.map(y=>Promise.resolve(y).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const l=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),d=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=a(n.map(f=>{if(f=Id(f,r),f in di)return;di[f]=!0;const y=f.endsWith(".css"),h=y?'[rel="stylesheet"]':"";if(!!r)for(let w=l.length-1;w>=0;w--){const S=l[w];if(S.href===f&&(!y||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${h}`))return;const b=document.createElement("link");if(b.rel=y?"stylesheet":Pd,y||(b.as="script"),b.crossOrigin="",b.href=f,d&&b.setAttribute("nonce",d),document.head.appendChild(b),y)return new Promise((w,S)=>{b.addEventListener("load",w),b.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${f}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})},ds={base:"vs-dark",inherit:!0,rules:[{token:"",foreground:"f8f8f2",background:"272822"},{token:"comment",foreground:"75715e",fontStyle:"italic"},{token:"string",foreground:"e6db74"},{token:"constant",foreground:"ae81ff"},{token:"number",foreground:"ae81ff"},{token:"keyword",foreground:"f92672"},{token:"operator",foreground:"f92672"},{token:"delimiter",foreground:"f8f8f2"},{token:"type",foreground:"66d9ef",fontStyle:"italic"},{token:"function",foreground:"a6e22e"},{token:"variable",foreground:"f8f8f2"},{token:"variable.parameter",foreground:"fd971f",fontStyle:"italic"},{token:"tag",foreground:"f92672"},{token:"attribute.name",foreground:"a6e22e"},{token:"attribute.value",foreground:"e6db74"},{token:"regexp",foreground:"e6db74"}],colors:{"editor.background":"#272822","editor.foreground":"#f8f8f2","editor.lineHighlightBackground":"#3e3d32","editor.selectionBackground":"#49483e","editorCursor.foreground":"#f8f8f0","editorWhitespace.foreground":"#3b3a32","editorLineNumber.foreground":"#90908a","editorLineNumber.activeForeground":"#f8f8f2","editorIndentGuide.background":"#3b3a32","editorGutter.background":"#272822"}},Od={py:"python",js:"javascript",mjs:"javascript",cjs:"javascript",ts:"typescript",tsx:"typescript",jsx:"javascript",json:"json",md:"markdown",html:"html",htm:"html",css:"css",scss:"scss",less:"less",sh:"shell",bash:"shell",zsh:"shell",yml:"yaml",yaml:"yaml",toml:"ini",ini:"ini",cfg:"ini",sql:"sql",go:"go",rs:"rust",rb:"ruby",php:"php",java:"java",c:"c",h:"c",cpp:"cpp",hpp:"cpp",cs:"csharp",svelte:"html",vue:"html",xml:"xml",dockerfile:"dockerfile"};function Rd(e){var n;const t=(e||"").split("/").pop()||"";return t.toLowerCase()==="dockerfile"?"dockerfile":t.toLowerCase()==="makefile"?"shell":Od[(n=t.split(".").pop())==null?void 0:n.toLowerCase()]||"plaintext"}var Dd=N('<div class="editor svelte-1h8xysy"></div>');function Ld(e,t){_t(t,!0);let n,r=null,s=null,o="",a=!1;Ur(async()=>{s=await ha(()=>import("./ide-monaco.js").then(c=>c.a),__vite__mapDeps([0,1]),import.meta.url),s.editor.defineTheme("monokai",ds),r=s.editor.create(n,{value:"",theme:"monokai",automaticLayout:!0,fontSize:13,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",minimap:{enabled:!0},scrollBeyondLastLine:!1,renderWhitespace:"selection",tabSize:2}),r.onDidChangeModelContent(()=>{a||!o||p.updateContent(o,r.getValue())}),r.addCommand(s.KeyMod.CtrlCmd|s.KeyCode.KeyS,()=>p.saveActive())}),zo(()=>r==null?void 0:r.dispose()),kt(()=>{const c=p.activeTab;if(!(!r||!s)){if(!c){a=!0,r.setValue(""),o="",a=!1;return}if(c.key!==o){a=!0;const d=s.editor.createModel(c.content,c.language||Rd(c.path)),f=r.getModel();r.setModel(d),f==null||f.dispose(),r.updateOptions({readOnly:!!c.readOnly}),o=c.key,a=!1}else r.getValue()!==c.content&&(a=!0,r.setValue(c.content),a=!1)}});var l=Dd();ys(l,c=>n=c,()=>n),m(e,l),gt()}var On=ku(()=>p),Fd=N('<span class="h-2 w-2 rounded-full bg-vs-fg group-hover:hidden"></span> <!>',1),Hd=N('<div><button class="flex items-center gap-1.5 py-2 pr-1 pl-3" role="tab"><!> <span class="whitespace-nowrap"> </span></button> <button class="mr-1.5 flex h-5 w-5 items-center justify-center rounded-sm hover:bg-vs-line"><!></button></div>'),jd=N('<div class="px-3 py-2 text-xs text-vs-muted">Open a file from the Explorer</div>'),Bd=N('<div class="flex min-h-[35px] items-stretch overflow-x-auto bg-vs-tabinactive" role="tablist"></div>');function Vd(e,t){_t(t,!1);const n=s=>s.split("/").pop();Cl();var r=Bd();Ke(r,5,()=>On().tabs,s=>s.key,(s,o)=>{var a=Hd();let l;var c=x(a),d=x(c);Ao(d,{size:14,class:"shrink-0 text-vs-blue"});var f=_(d,2),y=Q(f,!0),h=_(c,2),g=x(h);{var b=S=>{var C=Fd(),H=_(j(C),2);gs(H,{size:14,class:"hidden group-hover:block"}),m(S,C)},w=S=>{gs(S,{size:14,class:"opacity-0 group-hover:opacity-100"})};L(g,S=>{i(o).dirty?S(b):S(w,-1)})}J((S,C)=>{l=At(a,1,"group flex items-center border-r border-vs-bg text-[13px]",null,l,{"bg-vs-tabactive":i(o).key===On().activeKey,"text-vs-bright":i(o).key===On().activeKey,"text-vs-muted":i(o).key!==On().activeKey}),he(c,"aria-selected",i(o).key===On().activeKey),he(c,"title",i(o).path),W(y,S),he(h,"title",i(o).dirty?"Unsaved changes — close":"Close"),he(h,"aria-label",`Close ${C??""}`)},[()=>n(i(o).path),()=>n(i(o).path)]),P("click",c,()=>On(On().activeKey=i(o).key)),P("click",h,()=>On().closeTab(i(o).key)),m(s,a)},s=>{var o=jd();m(s,o)}),m(e,r),gt()}Bt(["click"]);var Kd=N("<option> </option>"),Ud=N('<p class="rounded-sm border border-mk-pink/40 bg-mk-pink/10 px-2 py-1 text-xs text-mk-pink"> </p>'),Wd=N('<div class="flex flex-col gap-1.5"><span class="flex items-center gap-1.5 text-[11px] font-semibold text-mk-green"><!> </span> <div class="chat-prose text-[13px] leading-relaxed text-mk-fg svelte-1roe1v9"></div></div>'),qd=N('<div class="flex flex-col gap-1.5 border-l-2 border-mk-blue/60 pl-2.5"><span class="text-[11px] font-semibold text-mk-blue">You</span> <div class="text-[13px] leading-relaxed whitespace-pre-wrap text-mk-fg/90"> </div></div>'),Gd=N(`<div class="m-auto flex max-w-[250px] flex-col items-center gap-2.5 text-center"><!> <p class="text-xs leading-relaxed text-mk-comment">Ask about the file you have open. The prompt goes to <span class="text-mk-muted"> </span>,
            and the reply appears here.</p></div>`),Yd=N('<div class="flex items-center gap-2 text-[11px] text-mk-comment"><!> Working…</div>'),fi=N('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line"><span class="w-3 text-mk-green"><!></span> </button>'),Jd=N('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[150px] rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl"></div>'),Xd=N('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line"><span class="w-3 text-mk-green"><!></span> <span class="truncate"> </span></button>'),Zd=N('<div class="absolute bottom-full left-0 z-20 mb-1 max-h-[260px] min-w-[190px] overflow-y-auto rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl"></div>'),Qd=N('<div class="relative" data-menu=""><button class="flex max-w-[110px] items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg" title="Model"><span class="truncate"> </span> <!></button> <!></div>'),ef=N('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[130px] rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl"></div>'),tf=N('<div class="relative" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg" title="Reasoning effort"> <!></button> <!></div>'),nf=N('<div class="flex h-full min-h-0 flex-col bg-mk-bg text-mk-fg"><div class="flex items-center gap-2 border-b border-mk-line px-3 py-1.5"><!> <span class="text-[11px] font-semibold tracking-wide text-mk-muted uppercase">Chat</span> <select class="ml-auto min-w-0 max-w-[55%] truncate rounded-sm border border-mk-line bg-mk-input px-1.5 py-0.5 text-[11px] text-mk-fg outline-none focus:border-mk-green" title="Agent session that answers"></select></div> <div class="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-3 py-3"><!> <!> <!></div> <div class="border-t border-mk-line p-2"><div class="rounded-md border border-mk-line bg-mk-input focus-within:border-mk-green"><textarea rows="2" class="max-h-[200px] w-full resize-none bg-transparent px-2.5 py-2 text-[13px] text-mk-fg outline-none placeholder:text-mk-comment" placeholder="Ask about this workspace…"></textarea> <div class="flex items-center gap-1 px-1.5 pb-1.5 text-[11px]"><div class="relative" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg" title="Agent"> <!></button> <!></div> <!> <!> <!> <span class="ml-auto flex items-center gap-1.5"><kbd class="hidden text-[10px] text-mk-comment sm:inline">↵ send · ⇧↵ newline</kbd> <button class="flex h-6 w-6 items-center justify-center rounded-md bg-mk-green text-mk-bg disabled:opacity-40" title="Send (Enter)" aria-label="Send"><!></button></span></div></div></div></div>');function rf(e,t){_t(t,!0);let n=Ve(t,"sessions",19,()=>[]),r=Ve(t,"session",3,""),s=Ve(t,"rootPath",3,""),o=A(""),a=A(Te(r()||n()[0]||"")),l=A(!1),c=A(Te([])),d=A(""),f=A(null),y=A(null),h=null,g=A(Te({agent:"codex",available:[],model:"",effort:"",models:[],efforts:[]})),b=A(""),w=A("");const S=ht(()=>(i(g).models.find(T=>T[0]===i(g).model)||[])[1]||i(g).model||"default");let C=A("");async function H(){if(!p.connectionId){v(C,"");return}try{v(C,(await xe.agentContext(p.connectionId)).context||"",!0)}catch{v(C,"")}}kt(()=>{p.connectionId,H()});async function z(){if(i(a))try{v(g,{agent:"codex",available:[],model:"",effort:"",models:[],efforts:[],...await xe.sessionAgent(i(a))},!0)}catch(T){v(g,{agent:i(g).agent,available:[],model:"",effort:"",models:[],efforts:[]},!0),p.setStatus(T.message||"Could not read agent settings")}}async function q(){if(i(a))try{const V=(await xe.chat(i(a))).messages||[],te=V.length!==i(c).length;v(c,V,!0),v(d,""),te&&queueMicrotask(E)}catch(T){v(d,T.message||"Could not load chat",!0)}}function E(){i(f)&&(i(f).scrollTop=i(f).scrollHeight)}kt(()=>{const T=i(a);v(c,[],!0),h&&clearInterval(h),T&&(q(),z(),h=setInterval(q,3e3))}),zo(()=>{h&&clearInterval(h)});async function k(T){if(v(b,""),T!==i(g).agent){v(w,"agent");try{await xe.setSessionAgent(i(a),T),await z(),p.setStatus(`Switched to ${T}`)}catch(V){p.setStatus(V.message||"Could not switch agent")}finally{v(w,"")}}}async function M(T){if(v(b,""),T!==i(g).model){v(w,"model");try{await xe.setSessionModel(i(a),T),await z(),p.setStatus(`Model set to ${T}`)}catch(V){p.setStatus(V.message||"Could not change model")}finally{v(w,"")}}}async function G(T){if(v(b,""),T!==i(g).effort){v(w,"effort");try{await xe.setSessionEffort(i(a),T),await z(),p.setStatus(`Reasoning effort set to ${T}`)}catch(V){p.setStatus(V.message||"Could not change effort")}finally{v(w,"")}}}function R(){const T=p.connection||{},V=p.activeTab,te=V?V.path:p.path||".",$e=V?`
Active file contents (first 12,000 characters):
${V.content.slice(0,12e3)}`:"";return`${i(C)||(T.kind==="local"?`[IDE workspace]
Local folder: ${T.workspace_root||"."}
`:`[IDE workspace]
SSH target: ${T.username||"?"}@${T.host||"?"}
`)}
Currently open: ${te}${$e}

${i(o).trim()}`}async function K(){const T=i(o).trim();if(!T||!i(a)||i(l))return;const V=R();v(l,!0);try{const te=await fetch(`${s()}/api/sessions/${encodeURIComponent(i(a))}/send`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:V})}),$e=await te.json().catch(()=>({}));if(!te.ok)throw new Error($e.error||"Could not send");v(o,""),i(y)&&(i(y).style.height="auto"),v(c,[...i(c),{role:"user",text:T,ts:Date.now()/1e3,_local:!0}],!0),queueMicrotask(E),setTimeout(q,1200)}catch(te){p.setStatus(te.message||"Could not send prompt")}finally{v(l,!1)}}function F(T){T.key==="Enter"&&!T.shiftKey&&(T.preventDefault(),K())}function U(T){const V=T.currentTarget;V.style.height="auto",V.style.height=`${Math.min(V.scrollHeight,200)}px`}const de=T=>T.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function me(T){const V=[];return de(T).replace(/```(\w*)\n?([\s\S]*?)```/g,(Se,Re,De)=>(V.push(`<pre class="chat-code"><code>${De.replace(/\n$/,"")}</code></pre>`),`\0BLOCK${V.length-1}\0`)).replace(/`([^`\n]+)`/g,'<code class="chat-inline">$1</code>').replace(/\*\*([^*\n]+)\*\*/g,"<strong>$1</strong>").split(`
`).map(Se=>{const Re=Se.match(/^\s*[-*]\s+(.*)$/);return Re?`<span class="chat-li">${Re[1]}</span>`:Se}).join(`
`).replace(/\u0000BLOCK(\d+)\u0000/g,(Se,Re)=>V[Number(Re)])}function He(T){const V=T.full||T.text||"",te=`

`;if(V.startsWith("[IDE workspace")||V.startsWith("[Remote IDE context]")||V.startsWith("[Remote SSH IDE context]")){const $e=V.lastIndexOf(te);if($e!==-1)return V.slice($e+te.length)}return V}var Ne=nf();_r("click",ms,T=>{var V,te;(te=(V=T.target).closest)!=null&&te.call(V,"[data-menu]")||v(b,"")});var at=x(Ne),oe=x(at);Ya(oe,{size:13,class:"shrink-0 text-mk-green"});var ie=_(oe,4);Ke(ie,20,n,T=>T,(T,V)=>{var te=Kd(),$e=Q(te,!0),Se={};J(()=>{W($e,V),Se!==(Se=V)&&(te.value=(te.__value=Se)??"")}),m(T,te)}),_s(ie);var I=_(at,2),ee=x(I);{var ye=T=>{var V=Ud(),te=Q(V,!0);J(()=>W(te,i(d))),m(T,V)};L(ee,T=>{i(d)&&T(ye)})}var Ue=_(ee,2);Ke(Ue,19,()=>i(c),(T,V)=>T.ts+":"+V,(T,V)=>{var te=Z(),$e=j(te);{var Se=De=>{var We=Wd(),je=x(We),Le=x(je);Ya(Le,{size:11});var lt=_(Le),mt=_(je,2);fu(mt,()=>me(He(i(V))),!0),J(()=>W(lt,` ${i(g).agent==="claude"?"Claude":"Codex"}`)),m(De,We)},Re=De=>{var We=qd(),je=_(x(We),2),Le=Q(je,!0);J(lt=>W(Le,lt),[()=>He(i(V))]),m(De,We)};L($e,De=>{i(V).role==="assistant"?De(Se):De(Re,-1)})}m(T,te)},T=>{var V=Z(),te=j(V);{var $e=Se=>{var Re=Gd(),De=x(Re);Ya(De,{size:26,strokeWidth:1.3,class:"text-mk-line"});var We=_(De,2),je=_(x(We)),Le=Q(je,!0);J(()=>W(Le,i(a)||"the selected session")),m(Se,Re)};L(te,Se=>{i(d)||Se($e)})}m(T,V)});var it=_(Ue,2);{var Vt=T=>{var V=Yd(),te=x(V);Sn(te,{size:11,class:"animate-spin"}),m(T,V)};L(it,T=>{i(l)&&T(Vt)})}ys(I,T=>v(f,T),()=>i(f));var Pt=_(I,2),gr=x(Pt),Qt=x(gr);ys(Qt,T=>v(y,T),()=>i(y));var Vn=_(Qt,2),Kn=x(Vn),en=x(Kn),Un=x(en),Wr=_(Un);Hn(Wr,{size:11});var mr=_(en,2);{var Wn=T=>{var V=Jd();Ke(V,20,()=>i(g).available.length?i(g).available:["codex"],te=>te,(te,$e)=>{var Se=fi(),Re=x(Se),De=x(Re);{var We=Le=>{fa(Le,{size:11})};L(De,Le=>{$e===i(g).agent&&Le(We)})}var je=_(Re);J(()=>W(je,` ${$e==="claude"?"Claude":"Codex"}`)),P("click",Se,()=>k($e)),m(te,Se)}),m(T,V)};L(mr,T=>{i(b)==="agent"&&T(Wn)})}var pn=_(Kn,2);{var qr=T=>{var V=Qd(),te=x(V),$e=x(te),Se=Q($e,!0),Re=_($e,2);Hn(Re,{size:11,class:"shrink-0"});var De=_(te,2);{var We=je=>{var Le=Zd();Ke(Le,21,()=>i(g).models,lt=>lt[0],(lt,mt)=>{var tn=Xd(),gn=x(tn),Mn=x(gn);{var zn=Y=>{fa(Y,{size:11})};L(Mn,Y=>{i(mt)[0]===i(g).model&&Y(zn)})}var mn=_(gn,2),Jr=Q(mn,!0);J(()=>W(Jr,i(mt)[1])),P("click",tn,()=>M(i(mt)[0])),m(lt,tn)}),m(je,Le)};L(De,je=>{i(b)==="model"&&je(We)})}J(()=>W(Se,i(S))),P("click",te,()=>v(b,i(b)==="model"?"":"model",!0)),m(T,V)};L(pn,T=>{i(g).models.length&&T(qr)})}var _n=_(pn,2);{var Gr=T=>{var V=tf(),te=x(V),$e=x(te),Se=_($e);Hn(Se,{size:11});var Re=_(te,2);{var De=We=>{var je=ef();Ke(je,20,()=>i(g).efforts,Le=>Le,(Le,lt)=>{var mt=fi(),tn=x(mt),gn=x(tn);{var Mn=mn=>{fa(mn,{size:11})};L(gn,mn=>{lt===i(g).effort&&mn(Mn)})}var zn=_(tn);J(()=>W(zn,` ${lt??""}`)),P("click",mt,()=>G(lt)),m(Le,mt)}),m(We,je)};L(Re,We=>{i(b)==="effort"&&We(De)})}J(()=>W($e,`${(i(g).effort||"effort")??""} `)),P("click",te,()=>v(b,i(b)==="effort"?"":"effort",!0)),m(T,V)};L(_n,T=>{i(g).efforts.length&&T(Gr)})}var qn=_(_n,2);{var Yr=T=>{Sn(T,{size:11,class:"animate-spin text-mk-muted"})};L(qn,T=>{i(w)&&T(Yr)})}var Gn=_(qn,2),Yn=_(x(Gn),2),Jn=x(Yn);{var Xn=T=>{nd(T,{size:11})},br=T=>{Iu(T,{size:13})};L(Jn,T=>{i(l)?T(Xn):T(br,-1)})}J(T=>{W(Un,`${i(g).agent==="claude"?"Claude":"Codex"} `),Yn.disabled=T},[()=>i(l)||!i(o).trim()]),vo(ie,()=>i(a),T=>v(a,T)),P("keydown",Qt,F),P("input",Qt,U),nt(Qt,()=>i(o),T=>v(o,T)),P("click",en,()=>v(b,i(b)==="agent"?"":"agent",!0)),P("click",Yn,K),m(e,Ne),gt()}Bt(["keydown","input","click"]);var sf=N('<span class="hint svelte-e2eyom">searching…</span>'),af=N('<li><button><span class="name svelte-e2eyom"> </span> <span class="path svelte-e2eyom"> </span> <!></button></li>'),of=N('<ul class="results svelte-e2eyom"></ul>'),lf=N('<p class="empty svelte-e2eyom"> </p>'),cf=N('<div class="backdrop svelte-e2eyom" role="button" tabindex="-1"></div> <div class="dialog svelte-e2eyom" role="dialog" aria-label="Quick open"><div class="field svelte-e2eyom"><!> <input placeholder="Search files by name…" aria-label="Search files by name" class="svelte-e2eyom"/> <!></div> <!></div>',1);function uf(e,t){_t(t,!0);let n=A(""),r=A(Te([])),s=A(0),o=A(!1),a=A(null),l=null;kt(()=>{i(a)&&i(a).focus()}),kt(()=>{const k=i(n).trim();if(l&&clearTimeout(l),!k){v(r,[],!0);return}l=setTimeout(async()=>{v(o,!0);try{const M=await xe.searchFiles(p.connectionId,p.path||".",k);v(r,M.matches||[],!0),v(s,0)}catch{v(r,[],!0)}finally{v(o,!1)}},180)});async function c(k){var G;if(!k)return;const M=p.path&&p.path!=="."?`${p.path}/`:"";await p.openFile(`${M}${k.path}`),(G=t.onclose)==null||G.call(t)}function d(k){var M;k.key==="Escape"?(k.preventDefault(),(M=t.onclose)==null||M.call(t)):k.key==="ArrowDown"?(k.preventDefault(),v(s,Math.min(i(s)+1,i(r).length-1),!0)):k.key==="ArrowUp"?(k.preventDefault(),v(s,Math.max(i(s)-1,0),!0)):k.key==="Enter"&&(k.preventDefault(),c(i(r)[i(s)]))}var f=cf(),y=j(f),h=_(y,2),g=x(h),b=x(g);Po(b,{size:14});var w=_(b,2);ys(w,k=>v(a,k),()=>i(a));var S=_(w,2);{var C=k=>{var M=sf();m(k,M)};L(S,k=>{i(o)&&k(C)})}var H=_(g,2);{var z=k=>{var M=of();Ke(M,23,()=>i(r),G=>G.path,(G,R,K)=>{var F=af(),U=x(F);let de;var me=x(U),He=Q(me,!0),Ne=_(me,2),at=Q(Ne,!0),oe=_(Ne,2);{var ie=I=>{Fu(I,{size:12})};L(oe,I=>{i(K)===i(s)&&I(ie)})}J(()=>{de=At(U,1,"svelte-e2eyom",null,de,{active:i(K)===i(s)}),W(He,i(R).name),W(at,i(R).path)}),P("click",U,()=>c(i(R))),m(G,F)}),m(k,M)},q=k=>{var M=lf(),G=Q(M);J(R=>W(G,`No files match “${R??""}”.`),[()=>i(n).trim()]),m(k,M)},E=ht(()=>i(n).trim()&&!i(o));L(H,k=>{i(r).length?k(z):i(E)&&k(q,1)})}P("click",y,()=>{var k;return(k=t.onclose)==null?void 0:k.call(t)}),P("keydown",y,k=>{var M;return k.key==="Escape"&&((M=t.onclose)==null?void 0:M.call(t))}),P("keydown",w,d),nt(w,()=>i(n),k=>v(n,k)),m(e,f),gt()}Bt(["click","keydown"]);var df=N('<div class="terminal-pane svelte-maclc7"><div class="bar svelte-maclc7"><span class="label svelte-maclc7">Terminal</span> <span> </span></div> <div class="screen svelte-maclc7"></div></div>');function ff(e,t){_t(t,!0);let n=Ve(t,"rootPath",3,""),r=Ve(t,"session",3,""),s=Ve(t,"index",3,0),o,a=null,l=null,c=null,d=A("connecting"),f=null,y=0,h=null,g=!1;const b={background:ds.colors["editor.background"],foreground:ds.colors["editor.foreground"],cursor:ds.colors["editorCursor.foreground"],selectionBackground:ds.colors["editor.selectionBackground"],black:"#272822",red:"#f92672",green:"#a6e22e",yellow:"#e6db74",blue:"#66d9ef",magenta:"#ae81ff",cyan:"#a1efe4",white:"#f8f8f2",brightBlack:"#75715e",brightRed:"#f92672",brightGreen:"#a6e22e",brightYellow:"#e6db74",brightBlue:"#66d9ef",brightMagenta:"#ae81ff",brightCyan:"#a1efe4",brightWhite:"#f9f8f5"};function w(){if(!(!l||!a||(c==null?void 0:c.readyState)!==WebSocket.OPEN))try{l.fit(),c.send(JSON.stringify({type:"resize",cols:a.cols,rows:a.rows}))}catch{}}function S(){if(g)return;const M=`${location.protocol==="https:"?"wss":"ws"}://${location.host}${n()}/ws/sessions/${encodeURIComponent(r())}/ide/terminal/${encodeURIComponent(p.connectionId)}?index=${encodeURIComponent(s())}`;c=new WebSocket(M),c.binaryType="arraybuffer",c.onopen=()=>{v(d,"connected"),y=0,w()},c.onmessage=G=>{a.write(typeof G.data=="string"?G.data:new Uint8Array(G.data))},c.onclose=G=>{if(g)return;if(G.code===1008){v(d,"refused"),a==null||a.write(`\r
\x1B[31m— not authorised for this terminal —\x1B[0m\r
`);return}if(y>=6){v(d,"closed"),a==null||a.write(`\r
\x1B[33m— terminal unavailable; reopen the panel to retry —\x1B[0m\r
`);return}v(d,"reconnecting");const R=Math.min(1e3*2**y,1e4);y+=1,h=setTimeout(S,R)},c.onerror=()=>{g||v(d,"error")}}Ur(async()=>{const[{Terminal:k},{FitAddon:M}]=await Promise.all([ha(()=>import("./ide-xterm.js"),[],import.meta.url),ha(()=>import("./ide-addon-fit.js"),[],import.meta.url)]);await ha(()=>Promise.resolve({}),__vite__mapDeps([2]),import.meta.url),a=new k({theme:b,fontSize:12,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",cursorBlink:!0,scrollback:5e3}),l=new M,a.loadAddon(l),a.open(o),l.fit(),S(),a.onData(G=>{(c==null?void 0:c.readyState)===WebSocket.OPEN&&c.send(new TextEncoder().encode(G))}),f=new ResizeObserver(()=>w()),f.observe(o)}),zo(()=>{g=!0,h&&clearTimeout(h),f==null||f.disconnect(),c==null||c.close(),a==null||a.dispose()});var C=df(),H=x(C),z=_(x(H),2),q=Q(z,!0),E=_(H,2);ys(E,k=>o=k,()=>o),J(()=>{At(z,1,`status ${i(d)??""}`,"svelte-maclc7"),W(q,i(d))}),m(e,C),gt()}var vf=N('<div class="border-b border-vs-line bg-vs-red/10 px-4 py-2 text-xs text-vs-red"> </div>'),hf=N('<div class="flex items-center gap-2 px-4 py-3 text-xs text-vs-muted"><!> Loading…</div>'),pf=N('<button class="flex w-full items-center gap-2 px-4 py-1 text-left text-[13px] text-vs-fg hover:bg-vs-hover"><!> <span class="truncate"> </span></button>'),_f=N('<div class="px-4 py-3 text-xs text-vs-muted">No sub-folders here. You can still open this folder.</div>'),gf=N('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="flex h-[70vh] w-[min(640px,92vw)] flex-col overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright">Open Folder <span class="ml-1 font-normal text-vs-muted"><!></span></div> <form class="flex gap-2 border-b border-vs-line px-3 py-2"><button type="button" class="flex items-center gap-1 rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover disabled:opacity-40" title="Up one folder"><!> Up</button> <input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-xs text-vs-fg outline-none focus:border-vs-accent" spellcheck="false" aria-label="Folder path"/> <button type="submit" class="rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover">Go</button></form> <!> <div class="min-h-0 flex-1 overflow-y-auto py-1"><!></div> <div class="flex items-center gap-2 border-t border-vs-line px-4 py-3"><span class="flex min-w-0 flex-1 items-center gap-2 text-xs text-vs-muted"><!> <span class="truncate font-mono"> </span></span> <button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40">Open Folder</button></div></div></div>');function mf(e,t){_t(t,!0);let n=A(""),r=A(""),s=A(Te([])),o=A(""),a=A(!0),l=A("");async function c(oe){v(a,!0),v(o,"");try{const ie=p.connectionId?await xe.browseOn(p.connectionId,oe):await xe.browse(oe);v(n,ie.path,!0),v(r,ie.parent,!0),v(s,ie.entries||[],!0),v(l,ie.path,!0)}catch(ie){v(o,ie.message||"Could not open that folder",!0)}finally{v(a,!1)}}Ur(()=>c(""));function d(oe){oe.preventDefault(),i(l).trim()&&c(i(l).trim())}var f=gf(),y=x(f),h=x(y),g=_(x(h)),b=x(g);{var w=oe=>{var ie=Jo();J(()=>W(ie,`on ${p.connection.username??""}@${p.connection.host??""}`)),m(oe,ie)},S=oe=>{var ie=Jo("on this server");m(oe,ie)};L(b,oe=>{p.connection&&p.connection.kind!=="local"?oe(w):oe(S,-1)})}var C=_(h,2),H=x(C),z=x(H);Hu(z,{size:14});var q=_(H,2),E=_(C,2);{var k=oe=>{var ie=vf(),I=Q(ie,!0);J(()=>W(I,i(o))),m(oe,ie)};L(E,oe=>{i(o)&&oe(k)})}var M=_(E,2),G=x(M);{var R=oe=>{var ie=hf(),I=x(ie);Sn(I,{size:13,class:"animate-spin"}),m(oe,ie)},K=oe=>{var ie=Z(),I=j(ie);Ke(I,17,()=>i(s),ee=>ee.path,(ee,ye)=>{var Ue=pf(),it=x(Ue);qu(it,{size:14,class:"shrink-0 text-vs-blue"});var Vt=_(it,2),Pt=Q(Vt,!0);J(()=>W(Pt,i(ye).name)),P("dblclick",Ue,()=>c(i(ye).path)),P("click",Ue,()=>c(i(ye).path)),m(ee,Ue)},ee=>{var ye=_f();m(ee,ye)}),m(oe,ie)};L(G,oe=>{i(a)?oe(R):oe(K,-1)})}var F=_(M,2),U=x(F),de=x(U);Gu(de,{size:13,class:"shrink-0"});var me=_(de,2),He=Q(me,!0),Ne=_(U,2),at=_(Ne,2);J(()=>{H.disabled=!i(r),he(me,"title",i(n)),W(He,i(n)),at.disabled=!i(n)||i(a)}),P("click",f,oe=>oe.target===oe.currentTarget&&t.onclose()),P("keydown",f,oe=>oe.key==="Escape"&&t.onclose()),_r("submit",C,d),P("click",H,()=>i(r)&&c(i(r))),nt(q,()=>i(l),oe=>v(l,oe)),P("click",Ne,function(...oe){var ie;(ie=t.onclose)==null||ie.apply(this,oe)}),P("click",at,()=>t.onopen(i(n))),m(e,f),gt()}Bt(["click","keydown","dblclick"]);var bf=N('<p class="px-4 py-2 text-xs text-vs-muted">Open a folder to search it.</p>'),xf=N('<button class="flex w-full items-center gap-2 px-3 py-1 text-left text-[13px] hover:bg-vs-hover"><!> <span class="truncate text-vs-fg"> </span> <span class="ml-auto max-w-[45%] truncate text-[11px] text-vs-muted"> </span></button>'),yf=N('<p class="px-4 py-2 text-xs text-vs-muted"> </p>'),wf=N('<p class="px-4 py-2 text-xs text-vs-muted">Type to search filenames in this workspace.</p>'),kf=N('<div class="flex h-full min-h-0 flex-col"><div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Search</div> <div class="px-3 pb-2"><div class="flex items-center gap-1.5 rounded-sm border border-vs-line bg-vs-input px-2 focus-within:border-vs-accent"><!> <input class="min-w-0 flex-1 bg-transparent py-1 text-xs text-vs-fg outline-none placeholder:text-vs-muted" placeholder="Search filenames" spellcheck="false"/> <!></div></div> <div class="min-h-0 flex-1 overflow-y-auto"><!></div></div>');function $f(e,t){_t(t,!0);let n=A(""),r=A(Te([])),s=A(!1),o=A(!1),a=null;kt(()=>{const z=i(n).trim();if(a&&clearTimeout(a),!z||!p.connectionId){v(r,[],!0),v(o,!1);return}a=setTimeout(async()=>{v(s,!0);try{const q=await xe.searchFiles(p.connectionId,p.path||".",z);v(r,q.matches||[],!0)}catch(q){v(r,[],!0),p.setStatus(q.message||"Search failed")}finally{v(s,!1),v(o,!0)}},200)});const l=z=>{const q=(z||"").split("/");return q.pop(),q.join("/")};var c=kf(),d=_(x(c),2),f=x(d),y=x(f);Po(y,{size:12,class:"shrink-0 text-vs-muted"});var h=_(y,2),g=_(h,2);{var b=z=>{Sn(z,{size:12,class:"shrink-0 animate-spin text-vs-muted"})};L(g,z=>{i(s)&&z(b)})}var w=_(d,2),S=x(w);{var C=z=>{var q=bf();m(z,q)},H=z=>{var q=Z(),E=j(q);Ke(E,17,()=>i(r),k=>k.path,(k,M)=>{var G=xf(),R=x(G);Ao(R,{size:13,class:"shrink-0 text-vs-blue"});var K=_(R,2),F=Q(K,!0),U=_(K,2),de=Q(U,!0);J((me,He)=>{he(G,"title",i(M).path),W(F,me),W(de,He)},[()=>i(M).name||i(M).path.split("/").pop(),()=>l(i(M).path)]),P("click",G,()=>p.openFile(i(M).path)),m(k,G)},k=>{var M=Z(),G=j(M);{var R=U=>{var de=yf(),me=Q(de);J(()=>W(me,`No files match “${i(n)??""}”.`)),m(U,de)},K=U=>{var de=wf();m(U,de)},F=ht(()=>!i(n).trim());L(G,U=>{i(o)&&!i(s)?U(R):i(F)&&U(K,1)})}m(k,M)}),m(z,q)};L(S,z=>{p.connectionId?z(H,-1):z(C)})}nt(h,()=>i(n),z=>v(n,z)),m(e,c),gt()}Bt(["click"]);var Sf=N('<p class="flex items-center gap-2 text-vs-muted"><!> Fetching host key…</p>'),Cf=N('<p class="text-vs-red"> </p>'),Ef=N("<p>This host is already trusted. Try connecting again.</p>"),Tf=N('<div class="flex items-baseline gap-2 font-mono text-[11px]"><span class="w-16 shrink-0 text-vs-muted"> </span> <span class="break-all text-vs-fg"> </span></div>'),Nf=N(`<p>The authenticity of <span class="font-mono text-vs-blue"> </span> can't be established. Verify these fingerprints match the server before you continue —
          if they don't, someone may be intercepting the connection.</p> <div class="mt-3 flex flex-col gap-1 rounded-sm border border-vs-line bg-vs-input p-2"></div> <p class="mt-3 text-xs text-vs-muted">Accepting adds the key to <span class="font-mono">~/.ssh/known_hosts</span> on this server.</p>`,1),Mf=N('<button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"> </button>'),zf=N('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="w-[min(560px,92vw)] overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="flex items-center gap-2 border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright"><!> Unknown host</div> <div class="px-4 py-3 text-[13px] leading-relaxed text-vs-fg"><!></div> <div class="flex justify-end gap-2 border-t border-vs-line px-4 py-3"><button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <!></div></div></div>');function Af(e,t){_t(t,!0);let n=A(!0),r=A(""),s=A(null),o=A(!1);Ur(async()=>{try{v(s,await xe.hostKey(p.connectionId),!0)}catch(E){v(r,E.message||"Could not fetch the host key",!0)}finally{v(n,!1)}});async function a(){v(o,!0);try{await xe.trustHost(p.connectionId),t.ontrusted()}catch(E){v(r,E.message||"Could not trust this host",!0),v(o,!1)}}var l=zf(),c=x(l),d=x(c),f=x(d);td(f,{size:15,class:"text-vs-yellow"});var y=_(d,2),h=x(y);{var g=E=>{var k=Sf(),M=x(k);Sn(M,{size:13,class:"animate-spin"}),m(E,k)},b=E=>{var k=Cf(),M=Q(k,!0);J(()=>W(M,i(r))),m(E,k)},w=E=>{var k=Ef();m(E,k)},S=E=>{var k=Nf(),M=j(k),G=_(x(M)),R=Q(G),K=_(M,2);Ke(K,21,()=>i(s).fingerprints,F=>F.fingerprint,(F,U)=>{var de=Tf(),me=x(de),He=Q(me,!0),Ne=_(me,2),at=Q(Ne,!0);J(()=>{W(He,i(U).type),W(at,i(U).fingerprint)}),m(F,de)}),J(()=>W(R,`${i(s).host??""}:${i(s).port??""}`)),m(E,k)};L(h,E=>{var k;i(n)?E(g):i(r)?E(b,1):(k=i(s))!=null&&k.known?E(w,2):E(S,-1)})}var C=_(y,2),H=x(C),z=_(H,2);{var q=E=>{var k=Mf(),M=Q(k,!0);J(()=>{k.disabled=i(o),W(M,i(o)?"Trusting…":"Trust and connect")}),P("click",k,a),m(E,k)};L(z,E=>{var k;!i(n)&&!((k=i(s))!=null&&k.known)&&!i(r)&&E(q)})}P("click",l,E=>E.target===E.currentTarget&&t.onclose()),P("keydown",l,E=>E.key==="Escape"&&t.onclose()),P("click",H,function(...E){var k;(k=t.onclose)==null||k.apply(this,E)}),m(e,l),gt()}Bt(["click","keydown"]);var Pf=N('<div role="separator" tabindex="0" title="Drag to resize (double-click to reset)"><div></div></div>');function Ja(e,t){_t(t,!0);let n=Ve(t,"size",15),r=Ve(t,"side",3,"right"),s=Ve(t,"min",3,120),o=Ve(t,"max",3,800),a=Ve(t,"onreset",3,null),l=A(!1);const c=r()==="top";function d(b){var q;b.preventDefault(),v(l,!0);const w=c?b.clientY:b.clientX,S=n(),C=b.currentTarget;(q=C.setPointerCapture)==null||q.call(C,b.pointerId);function H(E){const M=(c?E.clientY:E.clientX)-w,G=r()==="left"||r()==="top"?-M:M;n(Math.round(Math.min(o(),Math.max(s(),S+G))))}function z(){var E;v(l,!1),(E=C.releasePointerCapture)==null||E.call(C,b.pointerId),window.removeEventListener("pointermove",H),window.removeEventListener("pointerup",z)}window.addEventListener("pointermove",H),window.addEventListener("pointerup",z)}function f(b){const w=b.shiftKey?40:10,S=c?"ArrowUp":r()==="left"?"ArrowLeft":"ArrowRight",C=c?"ArrowDown":r()==="left"?"ArrowRight":"ArrowLeft";if(b.key===S)n(Math.min(o(),n()+w));else if(b.key===C)n(Math.max(s(),n()-w));else return;b.preventDefault()}var y=Pf();let h;var g=Q(y);J(()=>{h=At(y,1,`group relative shrink-0 ${c?"h-1 w-full cursor-row-resize":"w-1 cursor-col-resize"}`,null,h,{"bg-vs-accent":i(l)}),he(y,"aria-orientation",c?"horizontal":"vertical"),he(y,"aria-valuenow",n()),he(y,"aria-valuemin",s()),he(y,"aria-valuemax",o()),At(g,1,`absolute ${c?"-top-1 -bottom-1 left-0 right-0":"-left-1 -right-1 top-0 bottom-0"}
           transition-colors group-hover:bg-vs-accent ${i(l)?"bg-vs-accent":""}`)}),P("pointerdown",y,d),P("dblclick",y,()=>{var b;return(b=a())==null?void 0:b()}),P("keydown",y,f),m(e,y),gt()}Bt(["pointerdown","dblclick","keydown"]);var If=N('<span class="absolute top-0 bottom-0 left-0 w-0.5 bg-vs-bright"></span>'),Of=N('<span class="absolute right-1.5 bottom-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-vs-status px-1 text-[10px] leading-none font-semibold text-white"> </span>'),Rf=N("<button><!> <!> <!></button>"),Df=N("<option> </option>"),Lf=N('<button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover hover:text-vs-red" title="Remove workspace" aria-label="Remove workspace"><!></button>'),Ff=N('<input class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" type="password" placeholder="Password (optional)" autocomplete="new-password"/>'),Hf=N(`<button class="w-full rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Show this host's key fingerprint and trust it">Verify host key…</button>`),jf=N('<!> <button class="w-full rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"> </button> <!>',1),Bf=N('<p class="mt-1 font-mono text-[11px] break-all text-vs-muted"> </p>'),Vf=N('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="~/.ssh/id_ed25519"/> <textarea class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-[11px] outline-none focus:border-vs-accent" rows="4" placeholder="…or paste a private key (-----BEGIN OPENSSH PRIVATE KEY-----)" spellcheck="false"></textarea>',1),Kf=N('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" type="password" placeholder="Password" autocomplete="new-password"/>'),Uf=N('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Host" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="User" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Port" type="number" min="1" max="65535"/> <select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>SSH agent</option><option>Existing key</option><option>Password (saved, encrypted)</option></select> <!> <!>',1),Wf=N('<form class="mt-2 flex flex-col gap-1.5 border-t border-vs-line px-3 pt-2"><select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>This server (local folder)</option><option>Remote host over SSH</option></select> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Label"/> <!> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"/> <div class="flex gap-1 pb-2"><button class="flex-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110" type="submit">Create</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" type="button">Cancel</button></div></form>'),qf=N('<div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Workspaces</div> <div class="flex flex-col gap-2 px-3 pt-1"><select class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" aria-label="Workspace"><option>— select workspace —</option><!></select> <div class="flex gap-1"><button class="flex flex-1 items-center justify-center gap-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"><!> Open Folder</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Add a workspace or SSH connection" aria-label="Add workspace"><!></button> <!></div> <!> <!></div> <!>',1),Gf=N('<aside class="flex shrink-0 flex-col overflow-hidden border-r border-vs-border bg-vs-panel"><!></aside> <!>',1),Yf=N('<div class="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center"><!> <div><h1 class="text-2xl font-light text-vs-fg">Multibuilder IDE</h1> <p class="mt-1 text-sm text-vs-muted">Edit files on this server or on a remote host over SSH.</p></div> <div class="flex flex-col gap-2 text-sm"><button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Open Folder… <kbd class="ml-2 rounded-sm border border-vs-line px-1.5 py-0.5 text-[10px] text-vs-muted">Ctrl+Shift+O</kbd></button> <button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Connect to a host over SSH…</button></div></div>'),Jf=N('<button class="rounded-sm p-0.5 opacity-0 group-hover:opacity-100 hover:bg-vs-line" title="Close terminal"><!></button>'),Xf=N('<span><button class="max-w-[140px] truncate"> </button> <!></span>'),Zf=N('<div class="absolute inset-0"><!></div>'),Qf=N('<!> <div class="flex shrink-0 flex-col border-t border-vs-border bg-vs-bg"><div class="flex items-center gap-1 border-b border-vs-border px-2 py-1 text-[11px]"><!> <div class="flex min-w-0 flex-1 items-center gap-0.5 overflow-x-auto"></div> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover disabled:opacity-40" title="New terminal in this workspace" aria-label="New terminal"><!></button> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover" title="Hide panel" aria-label="Hide terminal panel"><!></button></div> <div class="relative min-h-0 flex-1"><!></div></div>',1),ev=N('<!> <div class="min-h-0 flex-1"><!></div> <!>',1),tv=N('<!> <aside class="flex shrink-0 flex-col overflow-hidden border-l border-vs-border bg-vs-panel"><div class="flex items-center gap-2 border-b border-vs-border px-3 py-1.5"><!> <span class="flex-1 text-[11px] font-semibold tracking-wide uppercase">Chat</span> <button class="rounded-sm p-0.5 hover:bg-vs-hover" title="Hide chat" aria-label="Hide chat"><!></button></div> <div class="min-h-0 flex-1"><!></div></aside>',1),vi=N('<span class="flex items-center gap-1"><!> </span>'),nv=N("<span> </span>"),rv=N('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle terminal (Ctrl+`)"><!> Terminal</button> <button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Focus the tmux window on the host"><!></button>',1),sv=N('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle chat panel"><!> Chat</button>'),av=N('<div class="flex h-full flex-col overflow-hidden bg-vs-bg font-sans text-vs-fg"><header class="flex items-center gap-2 border-b border-vs-border bg-vs-titlebar px-3 py-1 text-xs"><!> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover" title="Open a folder on this server (Ctrl+Shift+O)">Open Folder…</button> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40" title="Open a file (Ctrl+P)">Open File…</button> <button><!> Terminal</button> <span class="mx-auto truncate text-vs-muted"> </span> <span><!> </span></header> <div class="flex min-h-0 flex-1"><nav class="flex w-12 shrink-0 flex-col items-center bg-vs-activity"><!> <div class="mt-auto flex flex-col items-center pb-1"><button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Account — signed in to the dashboard" aria-label="Account"><!></button> <button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Toggle side bar (Ctrl+B)" aria-label="Toggle side bar"><!></button></div></nav> <!> <section class="flex min-h-0 min-w-0 flex-1 flex-col"><!></section> <!></div> <footer class="flex shrink-0 items-center gap-3 bg-vs-status px-3 py-0.5 text-[12px] text-white"><!> <!> <span class="truncate"> </span> <span class="ml-auto flex items-center gap-3"><!> <span class="max-w-[40vw] truncate opacity-80"> </span> <!> <!></span></footer> <!> <!> <!></div>');function ov(e,t){_t(t,!0);let n=Ve(t,"sessions",19,()=>[]),r=Ve(t,"session",3,""),s=Ve(t,"rootPath",3,""),o=A("files");function a($,D){try{const O=localStorage.getItem(`ide.show.${$}`);return O===null?D:O==="1"}catch{return D}}let l=A(Te(a("chat",!0)));const c={sidebar:240,chat:320,panel:240};function d($){try{const D=localStorage.getItem(`ide.size.${$}`),O=Number(D);return Number.isFinite(O)&&O>0?O:c[$]}catch{return c[$]}}let f=A(Te(d("sidebar"))),y=A(Te(d("chat"))),h=A(Te(d("panel")));kt(()=>{try{localStorage.setItem("ide.size.sidebar",String(i(f))),localStorage.setItem("ide.size.chat",String(i(y))),localStorage.setItem("ide.size.panel",String(i(h))),localStorage.setItem("ide.show.terminal",i(w)?"1":"0"),localStorage.setItem("ide.show.chat",i(l)?"1":"0"),localStorage.setItem("ide.show.sidebar",i(g)?"1":"0")}catch{}});let g=A(Te(a("sidebar",!0))),b=A(!1),w=A(Te(a("terminal",!1)));const S=8;let C=A(Te([0])),H=A(0);function z(){if(i(C).length>=S)return;let $=0;for(;i(C).includes($);)$+=1;$>=S||(v(C,[...i(C),$].sort((D,O)=>D-O),!0),v(H,$,!0))}function q($){if(i(C).length<=1)return;const D=i(C).indexOf($);v(C,i(C).filter(O=>O!==$),!0),i(H)===$&&v(H,i(C)[Math.min(D,i(C).length-1)],!0)}kt(()=>{p.connectionId,v(C,[0],!0),v(H,0)});let E=A(!1);kt(()=>{i(w)&&v(E,!0)});let k=A(!1),M=A(!1),G=A(""),R=A(Te({kind:"local",label:"",host:"",username:"",port:22,auth_mode:"agent",identity_file:"",password:"",private_key:"",workspace_root:"",max_file_bytes:1e6}));const K={idle:{icon:Lu,label:"Not connected"},connecting:{icon:Ru,label:"Connecting…"},connected:{icon:Ou,label:"Connected"},reconnect:{icon:oi,label:"Reconnect required"},error:{icon:oi,label:"Error"}},F=ht(()=>K[p.connectionState].icon),U=ht(()=>{var $;return(($=p.connection)==null?void 0:$.kind)==="local"}),de=[{id:"files",icon:Uu,label:"Explorer",keys:"Ctrl+Shift+E"},{id:"search",icon:Po,label:"Search",keys:"Ctrl+Shift+F"},{id:"git",icon:ho,label:"Source Control",keys:"Ctrl+Shift+G"},{id:"remote",icon:Zu,label:"Remote Explorer",keys:""}];Ur(async()=>{await p.loadConnections(),p.connectionId&&await p.refreshStatus()});function me($){i(o)===$&&i(g)?v(g,!1):(v(o,$,!0),v(g,!0))}async function He($){p.connectionId=$.currentTarget.value,p.resetWorkspaceView(),await p.refreshStatus()}async function Ne($){v(M,!1);try{const D=$.split("/").filter(Boolean).pop()||$,O=p.connection;if(O&&O.kind!=="local"){await xe.setWorkspaceRoot(O.id,$,D),await p.loadConnections(),p.resetWorkspaceView(),await p.refreshFiles("."),p.setStatus(`Opened ${$} on ${O.username}@${O.host}`),v(o,"files"),v(g,!0);return}if(O&&O.kind==="local"){await xe.setWorkspaceRoot(O.id,$,D),await p.loadConnections(),p.resetWorkspaceView(),await p.refreshFiles("."),p.setStatus(`Opened ${$}`),v(o,"files"),v(g,!0);return}const _e=await xe.createConnection({kind:"local",label:D,workspace_root:$,max_file_bytes:1e6});await p.loadConnections(),p.connectionId=_e.connection.id,p.resetWorkspaceView(),await p.connect(""),v(o,"files"),v(g,!0)}catch(D){p.setStatus(D.message||"Could not open folder")}}async function at($){$.preventDefault();try{const D=await xe.createConnection({...i(R),port:Number(i(R).port)});v(k,!1),v(R,{...i(R),label:"",host:"",username:"",password:"",private_key:""},!0),await p.loadConnections(),p.connectionId=D.connection.id,await p.refreshStatus()}catch(D){p.setStatus(D.message||"Could not create connection")}}async function oe(){const $=p.connection;if(!$)return;const D=$.kind==="local"?"workspace":"connection";if(confirm(`Remove ${D} "${$.label}"? Saved tabs are cleared; files are untouched.`))try{await xe.deleteConnection($.id),p.connectionId="",p.resetWorkspaceView(),await p.loadConnections()}catch(O){p.setStatus(O.message||"Could not delete")}}async function ie(){try{const $=await xe.focusTerminal(p.connectionId);p.setStatus(`Focused ${$.window_name}`,"tmux window selected")}catch($){p.setStatus($.message||"Could not focus terminal")}}function I($){var fe,we,Ee,Ie;const D=$.ctrlKey||$.metaKey,O=$.key.toLowerCase(),_e=((we=(fe=$.target)==null?void 0:fe.matches)==null?void 0:we.call(fe,"input, textarea, select"))&&!((Ie=(Ee=$.target).closest)!=null&&Ie.call(Ee,".monaco-editor"));D&&O==="s"?($.preventDefault(),p.saveActive()):D&&O==="p"&&!_e?($.preventDefault(),p.connectionId&&v(b,!0)):D&&$.shiftKey&&O==="o"?($.preventDefault(),v(M,!0)):D&&$.shiftKey&&["e","f","g"].includes(O)?($.preventDefault(),v(o,{e:"files",f:"search",g:"git"}[O],!0),v(g,!0)):D&&O==="b"&&!_e?($.preventDefault(),v(g,!i(g))):D&&O==="`"?($.preventDefault(),p.connectionState==="connected"&&v(w,!i(w))):$.key==="Escape"&&i(b)&&($.preventDefault(),v(b,!1))}var ee=av();_r("keydown",ms,I);var ye=x(ee),Ue=x(ye);ii(Ue,{size:15,class:"shrink-0 text-vs-blue"});var it=_(Ue,2),Vt=_(it,2),Pt=_(Vt,2);let gr;var Qt=x(Pt);ui(Qt,{size:13});var Vn=_(Pt,2),Kn=Q(Vn,!0),en=_(Vn,2),Un=x(en);Zo(Un,()=>i(F),($,D)=>{D($,{size:12})});var Wr=_(Un),mr=_(ye,2),Wn=x(mr),pn=x(Wn);Ke(pn,17,()=>de,$=>$.id,($,D)=>{var O=Rf(),_e=x(O);{var fe=be=>{var ve=If();m(be,ve)};L(_e,be=>{i(o)===i(D).id&&i(g)&&be(fe)})}var we=_(_e,2);Zo(we,()=>i(D).icon,(be,ve)=>{ve(be,{size:24,strokeWidth:1.4})});var Ee=_(we,2);{var Ie=be=>{var ve=Of(),ct=Q(ve,!0);J(()=>W(ct,p.gitDirtyCount)),m(be,ve)};L(Ee,be=>{i(D).id==="git"&&p.gitDirtyCount&&be(Ie)})}J(()=>{At(O,1,`relative flex h-12 w-12 items-center justify-center ${i(o)===i(D).id&&i(g)?"text-vs-bright":"text-vs-muted hover:text-vs-fg"}`),he(O,"title",i(D).keys?`${i(D).label} (${i(D).keys})`:i(D).label),he(O,"aria-label",i(D).label)}),P("click",O,()=>me(i(D).id)),m($,O)});var qr=_(pn,2),_n=x(qr),Gr=x(_n);Du(Gr,{size:24,strokeWidth:1.4});var qn=_(_n,2),Yr=x(qn);ed(Yr,{size:24,strokeWidth:1.4});var Gn=_(Wn,2);{var Yn=$=>{var D=Gf(),O=j(D),_e=x(O);{var fe=ve=>{fd(ve,{})},we=ve=>{$f(ve,{})},Ee=ve=>{Ad(ve,{})},Ie=ve=>{var ct=qf(),Be=_(j(ct),2),et=x(Be),nn=x(et);nn.value=nn.__value="";var Zn=_(nn);Ke(Zn,17,()=>p.connections,Oe=>Oe.id,(Oe,Ge)=>{var ot=Df(),er=Q(ot),rn={};J(()=>{W(er,`${i(Ge).kind==="local"?"🖿 ":"⇅ "}${i(Ge).label??""}`),rn!==(rn=i(Ge).id)&&(ot.value=(ot.__value=rn)??"")}),m(Oe,ot)});var St;_s(et);var xr=_(et,2),bn=x(xr),Xr=x(bn);Ga(Xr,{size:13});var Kt=_(bn,2),Zr=x(Kt);wa(Zr,{size:13});var Ct=_(Kt,2);{var Et=Oe=>{var Ge=Lf(),ot=x(Ge);rd(ot,{size:13}),P("click",Ge,oe),m(Oe,Ge)};L(Ct,Oe=>{p.connection&&Oe(Et)})}var An=_(xr,2);{var xn=Oe=>{var Ge=jf(),ot=j(Ge);{var er=It=>{var tr=Ff();nt(tr,()=>i(G),Pa=>v(G,Pa)),m(It,tr)};L(ot,It=>{!i(U)&&!p.connection.has_password&&It(er)})}var rn=_(ot,2),ta=Q(rn,!0),na=_(rn,2);{var Aa=It=>{var tr=Hf();P("click",tr,()=>p.needsHostKey=!0),m(It,tr)};L(na,It=>{i(U)||It(Aa)})}J(()=>W(ta,i(U)?"Open workspace":"Connect")),P("click",rn,()=>p.connect(i(G))),m(Oe,Ge)};L(An,Oe=>{p.connection&&p.connectionState!=="connected"&&Oe(xn)})}var yr=_(An,2);{var Qn=Oe=>{var Ge=Bf(),ot=Q(Ge,!0);J(()=>W(ot,p.connection.workspace_root)),m(Oe,Ge)};L(yr,Oe=>{p.connection&&Oe(Qn)})}var Qr=_(Be,2);{var Pn=Oe=>{var Ge=Wf(),ot=x(Ge),er=x(ot);er.value=er.__value="local";var rn=_(er);rn.value=rn.__value="ssh",_s(ot);var ta=_(ot,2),na=_(ta,2);{var Aa=yn=>{var Io=Uf(),Oo=j(Io),Ro=_(Oo,2),Do=_(Ro,2),ra=_(Do,2),Ia=x(ra);Ia.value=Ia.__value="agent";var Oa=_(Ia);Oa.value=Oa.__value="key";var Lo=_(Oa);Lo.value=Lo.__value="password",_s(ra);var Fo=_(ra,2);{var Nl=ut=>{var es=Vf(),sa=j(es),Al=_(sa,2);nt(sa,()=>i(R).identity_file,Ra=>i(R).identity_file=Ra),nt(Al,()=>i(R).private_key,Ra=>i(R).private_key=Ra),m(ut,es)};L(Fo,ut=>{i(R).auth_mode==="key"&&ut(Nl)})}var Ml=_(Fo,2);{var zl=ut=>{var es=Kf();nt(es,()=>i(R).password,sa=>i(R).password=sa),m(ut,es)};L(Ml,ut=>{i(R).auth_mode==="password"&&ut(zl)})}nt(Oo,()=>i(R).host,ut=>i(R).host=ut),nt(Ro,()=>i(R).username,ut=>i(R).username=ut),nt(Do,()=>i(R).port,ut=>i(R).port=ut),vo(ra,()=>i(R).auth_mode,ut=>i(R).auth_mode=ut),m(yn,Io)};L(na,yn=>{i(R).kind==="ssh"&&yn(Aa)})}var It=_(na,2),tr=_(It,2),Pa=_(x(tr),2);J(()=>{he(It,"placeholder",i(R).kind==="local"?"/var/www/app":"Workspace root"),It.required=i(R).kind==="local"}),_r("submit",Ge,at),vo(ot,()=>i(R).kind,yn=>i(R).kind=yn),nt(ta,()=>i(R).label,yn=>i(R).label=yn),nt(It,()=>i(R).workspace_root,yn=>i(R).workspace_root=yn),P("click",Pa,()=>v(k,!1)),m(Oe,Ge)};L(Qr,Oe=>{i(k)&&Oe(Pn)})}J(()=>{St!==(St=p.connectionId)&&(et.value=(et.__value=St)??"",xs(et,St))}),P("change",et,He),P("click",bn,()=>v(M,!0)),P("click",Kt,()=>v(k,!i(k))),m(ve,ct)};L(_e,ve=>{i(o)==="files"?ve(fe):i(o)==="search"?ve(we,1):i(o)==="git"?ve(Ee,2):ve(Ie,-1)})}var be=_(O,2);Ja(be,{side:"right",min:170,max:620,onreset:()=>v(f,c.sidebar,!0),get size(){return i(f)},set size(ve){v(f,ve,!0)}}),J(()=>ps(O,`width: ${i(f)??""}px`)),m($,D)};L(Gn,$=>{i(g)&&$(Yn)})}var Jn=_(Gn,2),Xn=x(Jn);{var br=$=>{var D=Yf(),O=x(D);ii(O,{size:64,strokeWidth:1,class:"text-vs-line"});var _e=_(O,4),fe=x(_e),we=x(fe);Ga(we,{size:16});var Ee=_(fe,2),Ie=x(Ee);ci(Ie,{size:16}),P("click",fe,()=>v(M,!0)),P("click",Ee,()=>{v(o,"remote"),v(g,!0),v(k,!0)}),m($,D)},T=$=>{var D=ev(),O=j(D);Vd(O,{});var _e=_(O,2),fe=x(_e);Ld(fe,{});var we=_(_e,2);{var Ee=Ie=>{var be=Qf(),ve=j(be);{var ct=Ct=>{Ja(Ct,{side:"top",min:120,max:640,onreset:()=>v(h,c.panel,!0),get size(){return i(h)},set size(Et){v(h,Et,!0)}})};L(ve,Ct=>{i(w)&&Ct(ct)})}var Be=_(ve,2),et=x(Be),nn=x(et);ui(nn,{size:13,class:"mx-1 shrink-0"});var Zn=_(nn,2);Ke(Zn,20,()=>i(C),Ct=>Ct,(Ct,Et)=>{var An=Xf(),xn=x(An),yr=Q(xn,!0),Qn=_(xn,2);{var Qr=Pn=>{var Oe=Jf(),Ge=x(Oe);gs(Ge,{size:11}),J(()=>he(Oe,"aria-label",`Close terminal ${Et+1}`)),P("click",Oe,()=>q(Et)),m(Pn,Oe)};L(Qn,Pn=>{i(C).length>1&&Pn(Qr)})}J(()=>{var Pn;At(An,1,`group flex shrink-0 items-center gap-1 rounded-sm px-2 py-0.5
                           ${Et===i(H)?"bg-vs-hover text-vs-fg":"text-vs-muted hover:text-vs-fg"}`),W(yr,Et===0?((Pn=p.connection)==null?void 0:Pn.label)||"Terminal":`Terminal ${Et+1}`)}),P("click",xn,()=>v(H,Et,!0)),m(Ct,An)});var St=_(Zn,2),xr=x(St);wa(xr,{size:14});var bn=_(St,2),Xr=x(bn);gs(Xr,{size:14});var Kt=_(et,2),Zr=x(Kt);lu(Zr,()=>p.connectionId,Ct=>{var Et=Z(),An=j(Et);Ke(An,16,()=>i(C),xn=>xn,(xn,yr)=>{var Qn=Zf(),Qr=x(Qn);ff(Qr,{get rootPath(){return s()},get session(){return r()},get index(){return yr}}),J(()=>he(Qn,"hidden",yr!==i(H))),m(xn,Qn)}),m(Ct,Et)}),J(()=>{ps(Be,`height: ${i(h)??""}px`),he(Be,"hidden",!i(w)),St.disabled=i(C).length>=S}),P("click",St,z),P("click",bn,()=>v(w,!1)),m(Ie,be)};L(we,Ie=>{i(E)&&p.connectionState==="connected"&&Ie(Ee)})}m($,D)};L(Xn,$=>{p.connectionId?$(T,-1):$(br)})}var V=_(Jn,2);{var te=$=>{var D=tv(),O=j(D);Ja(O,{side:"left",min:260,max:760,onreset:()=>v(y,c.chat,!0),get size(){return i(y)},set size(ct){v(y,ct,!0)}});var _e=_(O,2),fe=x(_e),we=x(fe);li(we,{size:13});var Ee=_(we,4),Ie=x(Ee);gs(Ie,{size:14});var be=_(fe,2),ve=x(be);rf(ve,{get sessions(){return n()},get session(){return r()},get rootPath(){return s()}}),J(()=>ps(_e,`width: ${i(y)??""}px`)),P("click",Ee,()=>v(l,!1)),m($,D)};L(V,$=>{i(l)&&$(te)})}var $e=_(mr,2),Se=x($e);{var Re=$=>{var D=vi(),O=x(D);{var _e=Ee=>{Ga(Ee,{size:12})},fe=Ee=>{ci(Ee,{size:12})};L(O,Ee=>{i(U)?Ee(_e):Ee(fe,-1)})}var we=_(O);J(()=>{he(D,"title",p.connection.workspace_root),W(we,` ${p.connection.label??""}`)}),m($,D)};L(Se,$=>{p.connection&&$(Re)})}var De=_(Se,2);{var We=$=>{var D=vi(),O=x(D);ho(O,{size:12});var _e=_(O);J(()=>W(_e,` ${p.gitBranch??""}`)),m($,D)};L(De,$=>{p.gitBranch&&$(We)})}var je=_(De,2),Le=Q(je,!0),lt=_(je,2),mt=x(lt);{var tn=$=>{var D=nv(),O=Q(D);J(()=>W(O,`${p.dirtyCount??""} unsaved`)),m($,D)};L(mt,$=>{p.dirtyCount&&$(tn)})}var gn=_(mt,2),Mn=Q(gn,!0),zn=_(gn,2);{var mn=$=>{var D=rv(),O=j(D),_e=x(O);Qu(_e,{size:12});var fe=_(O,2),we=x(fe);Bu(we,{size:12}),P("click",O,()=>v(w,!i(w))),P("click",fe,ie),m($,D)};L(zn,$=>{p.connectionState==="connected"&&$(mn)})}var Jr=_(zn,2);{var Y=$=>{var D=sv(),O=x(D);li(O,{size:12}),P("click",D,()=>v(l,!i(l))),m($,D)};L(Jr,$=>{$(Y)})}var Pe=_($e,2);{var Ce=$=>{uf($,{onclose:()=>v(b,!1)})};L(Pe,$=>{i(b)&&$(Ce)})}var re=_(Pe,2);{var Me=$=>{mf($,{onopen:Ne,onclose:()=>v(M,!1)})};L(re,$=>{i(M)&&$(Me)})}var $t=_(re,2);{var Qe=$=>{Af($,{onclose:()=>p.needsHostKey=!1,ontrusted:async()=>{p.needsHostKey=!1,await p.connect(i(G))}})};L($t,$=>{p.needsHostKey&&$(Qe)})}J(()=>{var $;Vt.disabled=!p.connectionId,gr=At(Pt,1,"flex items-center gap-1 rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40",null,gr,{"text-vs-bright":i(w)}),Pt.disabled=p.connectionState!=="connected",he(Pt,"title",p.connectionState==="connected"?"Toggle terminal (Ctrl+`)":"Open a workspace to use the terminal"),he(Vn,"title",($=p.connection)==null?void 0:$.workspace_root),W(Kn,p.connection?`${p.connection.label} — Multibuilder IDE`:"Multibuilder IDE"),At(en,1,`flex items-center gap-1 ${p.connectionState==="connected"?"text-vs-green":p.connectionState==="connecting"?"text-vs-yellow":p.connectionState==="idle"?"text-vs-muted":"text-vs-red"}`),W(Wr,` ${K[p.connectionState].label??""}`),W(Le,p.statusText),W(Mn,p.detailText)}),P("click",it,()=>v(M,!0)),P("click",Vt,()=>v(b,!0)),P("click",Pt,()=>v(w,!i(w))),P("click",_n,()=>p.setStatus("Signed in to the Multibuilder dashboard")),P("click",qn,()=>v(g,!i(g))),m(e,ee),gt()}Bt(["click","change"]);function Tl(e,t){return su(ov,{target:e,props:t})}function hi(){const e=document.getElementById("ide-root");if(!e||e.dataset.mounted)return;e.dataset.mounted="1";const t=window.__IDE_BOOTSTRAP__||{};Tl(e,{sessions:t.sessions||[],session:t.session||"",rootPath:t.rootPath||""})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",hi):hi();window.mountRemoteIde=Tl;export{ha as _};
