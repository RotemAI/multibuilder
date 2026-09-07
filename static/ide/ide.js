const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ide-monaco.js","./ide2.css","./ide3.css"])))=>i.map(i=>d[i]);
var Jl=Object.defineProperty;var Qa=e=>{throw TypeError(e)};var Xl=(e,t,n)=>t in e?Jl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ft=(e,t,n)=>Xl(e,typeof t!="symbol"?t+"":t,n),ra=(e,t,n)=>t.has(e)||Qa("Cannot "+n);var u=(e,t,n)=>(ra(e,t,"read from private field"),n?n.call(e):t.get(e)),W=(e,t,n)=>t.has(e)?Qa("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),de=(e,t,n,r)=>(ra(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),xe=(e,t,n)=>(ra(e,t,"access private method"),n);var qo=Array.isArray,Zl=Array.prototype.indexOf,Ro=Array.prototype.includes,Go=Array.from,Ii=Object.defineProperty,Vn=Object.getOwnPropertyDescriptor,Oi=Object.getOwnPropertyDescriptors,Ql=Object.prototype,ec=Array.prototype,Ra=Object.getPrototypeOf,ei=Object.isExtensible;function $s(e){return typeof e=="function"}const tc=()=>{};function nc(e){return e()}function ma(e){for(var t=0;t<e.length;t++)e[t]()}function Ri(){var e,t,n=new Promise((r,s)=>{e=r,t=s});return{promise:n,resolve:e,reject:t}}function rc(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const n=[];for(const r of e)if(n.push(r),n.length===t)break;return n}const rt=2,ns=4,xo=8,La=1<<24,Xt=16,jt=32,Nn=64,ba=128,Da=256,Ht=512,tt=1024,nt=2048,tn=4096,_t=8192,kt=16384,is=32768,Lo=1<<25,Un=65536,Do=1<<17,sc=1<<18,ls=1<<19,Li=1<<20,vn=1<<25,_r=65536,Fo=1<<21,Wr=1<<22,Kn=1<<23,_n=Symbol("$state"),Di=Symbol("component"),Fi=Symbol("legacy props"),oc=Symbol(""),To=Symbol("attributes"),xa=Symbol("class"),ya=Symbol("style"),Ts=Symbol("text"),No=Symbol("form reset"),yo=new class extends Error{constructor(){super(...arguments);ft(this,"name","StaleReactionError");ft(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var zi;const Fa=!!((zi=globalThis.document)!=null&&zi.contentType)&&globalThis.document.contentType.includes("xml"),ac=1,ic=2,Hi=4,lc=8,cc=16,uc=1,dc=2,ji=4,fc=8,vc=16,pc=1,hc=2,et=Symbol("uninitialized"),Bi="http://www.w3.org/1999/xhtml",Vi="http://www.w3.org/2000/svg",_c="http://www.w3.org/1998/Math/MathML",gc="@attach";function mc(){console.warn("https://svelte.dev/e/derived_inert")}function bc(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function xc(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Ki(e){return e===this.v}function yc(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Ui(e){return!yc(e,this.v)}function Wi(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function wc(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function kc(e,t,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function $c(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Sc(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Cc(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Ec(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Tc(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Nc(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Pc(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function zc(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Mc(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let cs=!1;function Ac(){cs=!0}let je=null;function rs(e){je=e}function gt(e,t=!1,n){je={p:je,i:!1,c:null,e:null,s:e,x:null,r:pe,l:cs&&!t?{s:null,u:null,$:[]}:null}}function mt(e){var t=je,n=t.e;if(n!==null){t.e=null;for(var r of n)hl(r)}return t.i=!0,je=t.p,Ha(e)}function Ha(e={}){return Ii(e,Di,{value:!0}),e}function us(){return!cs||je!==null&&je.l===null}let ar=[];function qi(){var e=ar;ar=[],ma(e)}function pn(e){if(ar.length===0&&!Ls){var t=ar;queueMicrotask(()=>{t===ar&&qi()})}ar.push(e)}function Ic(){for(;ar.length>0;)qi()}const Oc=-7169;function Ue(e,t){e.f=e.f&Oc|t}function ja(e){(e.f&Ht)!==0||e.deps===null?Ue(e,tt):Ue(e,tn)}function Gi(e){if(e!==null)for(const t of e)(t.f&rt)===0||(t.f&_r)===0||(t.f^=_r,Gi(t.deps))}function Yi(e,t,n){(e.f&nt)!==0?t.add(e):(e.f&tn)!==0&&n.add(e),Gi(e.deps),Ue(e,tt)}let Co=!1;function Rc(e){var t=Co;try{return Co=!1,[e(),Co]}finally{Co=t}}function Ji(e,t){if(t){const n=document.body;e.autofocus=!0,pn(()=>{document.activeElement===n&&e.focus()})}}let ti=!1;function Lc(){ti||(ti=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n[No])==null||t.call(n)})},{capture:!0}))}function ds(e){var t=be,n=pe;Bt(null),Vt(null);try{return e()}finally{Bt(t),Vt(n)}}function Xi(e,t,n,r=n){e.addEventListener(t,()=>ds(n));const s=e[No];s?e[No]=()=>{s(),r(!0)}:e[No]=()=>r(!0),Lc()}function Zi(e,t,n,r){const s=us()?ss:Ba;var i=e.filter(k=>!k.settled),a=t.map(s);if(n.length===0&&i.length===0){r(a);return}var l=pe,c=Dc(),f=i.length===1?i[0].promise:i.length>1?Promise.all(i.map(k=>k.promise)):null;function p(k){if((l.f&kt)===0){c();try{r([...a,...k])}catch($){fn($,l)}Ho()}}var y=Qi();if(n.length===0){f.then(()=>p([])).finally(y);return}function _(){Promise.all(n.map(k=>Fc(k))).then(p).catch(k=>fn(k,l)).finally(y)}f?f.then(()=>{c(),_(),Ho()}):_()}function Dc(){var e=pe,t=be,n=je,r=ee;return function(i=!0){Vt(e),Bt(t),rs(n),i&&(e.f&kt)===0&&(r==null||r.activate(),r==null||r.apply())}}function Ho(e=!0){Vt(null),Bt(null),rs(null),e&&(ee==null||ee.deactivate())}function Qi(){var e=pe,t=e.b,n=ee,r=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,n),n.increment(r,e),()=>{t==null||t.update_pending_count(-1,n),n.decrement(r,e)}}function ss(e){var t=rt|nt;return pe!==null&&(pe.f|=ls),{ctx:je,deps:null,effects:null,equals:Ki,f:t,fn:e,reactions:null,rv:0,v:et,wv:0,parent:pe,ac:null}}const Ns=Symbol("obsolete");function Fc(e,t,n){let r=pe;r===null&&wc();var s=void 0,i=Pn(et),a=!be,l=new Set;return eu(()=>{var k,$;var c=pe,f=Ri();s=f.promise;try{Promise.resolve(e()).then(f.resolve,w=>{w!==yo&&f.reject(w)}).finally(Ho)}catch(w){f.reject(w),Ho()}var p=ee;if(a){if((c.f&is)!==0)var y=Qi();if((k=r.b)!=null&&k.is_rendered())($=p.async_deriveds.get(c))==null||$.reject(Ns);else for(const w of l.values())w.reject(Ns);l.add(f),p.async_deriveds.set(c,f)}const _=(w,C=void 0)=>{y==null||y(),l.delete(f),C!==Ns&&(p.activate(),C?(i.f|=Kn,os(i,C)):((i.f&Kn)!==0&&(i.f^=Kn),os(i,w)),p.deactivate())};f.promise.then(_,w=>_(null,w||"unknown"))}),Jo(()=>{for(const c of l)c.reject(Ns)}),new Promise(c=>{function f(p){function y(){p===s?c(i):f(s)}p.then(y,y)}f(s)})}function at(e){const t=ss(e);return wl(t),t}function Ba(e){const t=ss(e);return t.equals=Ui,t}function Hc(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)lt(t[n])}}function Va(e){var t,n=pe,r=e.parent;if(!zn&&r!==null&&e.v!==et&&(r.f&(kt|_t))!==0)return mc(),e.v;Vt(r);try{e.f&=~_r,Hc(e),t=Cl(e)}finally{Vt(n)}return t}function el(e){var t=Va(e);if(!e.equals(t)&&(e.wv=$l(),(!(ee!=null&&ee.is_fork)||e.deps===null)&&(ee!==null?(ee.capture(e,t,!0),Rs==null||Rs.capture(e,t,!0)):e.v=t,e.deps===null))){Ue(e,tt);return}zn||(ot!==null?(Wa()||ee!=null&&ee.is_fork)&&ot.set(e,t):ja(e))}function jc(e){var t;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),n.ac!==null&&ds(()=>{n.ac.abort(yo),n.ac=null}),n.fn!==null&&(n.teardown=tc),js(n,0),Ga(n))}function tl(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&as(t)}let sa=null,Vr=null,ee=null,Rs=null,ot=null,wa=null,Ls=!1,oa=!1,Ur=null,Po=null;var ni=0;let Bc=1;var Yr,jn,cr,Jr,Xr,Zr,Cn,Qr,xt,Ks,En,Yt,cn,es,ur,ze,ka,Ps,$a,nl,rl,Kr,Vc,zs;const Ko=class Ko{constructor(){W(this,ze);ft(this,"id",Bc++);W(this,Yr,!1);ft(this,"linked",!0);W(this,jn,null);W(this,cr,null);ft(this,"async_deriveds",new Map);ft(this,"current",new Map);ft(this,"previous",new Map);W(this,Jr,new Set);W(this,Xr,new Set);W(this,Zr,0);W(this,Cn,new Map);W(this,Qr,null);W(this,xt,[]);W(this,Ks,[]);W(this,En,new Set);W(this,Yt,new Set);W(this,cn,new Map);W(this,es,new Set);ft(this,"is_fork",!1);W(this,ur,!1);Vr===null?sa=Vr=this:(de(Vr,cr,this),de(this,jn,Vr)),Vr=this}skip_effect(t){u(this,cn).has(t)||u(this,cn).set(t,{d:[],m:[]}),u(this,es).delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=u(this,cn).get(t);if(r){u(this,cn).delete(t);for(var s of r.d)Ue(s,nt),n(s);for(s of r.m)Ue(s,tn),n(s)}u(this,es).add(t)}capture(t,n,r=!1){t.v!==et&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Kn)===0&&(this.current.set(t,[n,r]),ot==null||ot.set(t,n)),this.is_fork||(t.v=n)}activate(){ee=this}deactivate(){ee=null,ot=null}flush(){try{oa=!0,ee=this,xe(this,ze,Ps).call(this)}finally{ni=0,wa=null,Ur=null,Po=null,oa=!1,ee=null,ot=null,gn.clear()}}discard(){var t;for(const n of u(this,Xr))n(this);u(this,Xr).clear();for(const n of this.async_deriveds.values())n.reject(Ns);xe(this,ze,zs).call(this),(t=u(this,Qr))==null||t.resolve()}register_created_effect(t){u(this,Ks).push(t)}increment(t,n){if(de(this,Zr,u(this,Zr)+1),t){let r=u(this,Cn).get(n)??0;u(this,Cn).set(n,r+1)}}decrement(t,n){if(de(this,Zr,u(this,Zr)-1),t){let r=u(this,Cn).get(n)??0;r===1?u(this,Cn).delete(n):u(this,Cn).set(n,r-1)}u(this,ur)||(de(this,ur,!0),pn(()=>{de(this,ur,!1),this.linked&&this.flush()}))}transfer_effects(t,n){for(const r of t)u(this,En).add(r);for(const r of n)u(this,Yt).add(r);t.clear(),n.clear()}oncommit(t){u(this,Jr).add(t)}ondiscard(t){u(this,Xr).add(t)}settled(){return(u(this,Qr)??de(this,Qr,Ri())).promise}static ensure(){if(ee===null){const t=ee=new Ko;!oa&&!Ls&&pn(()=>{u(t,Yr)||t.flush()})}return ee}apply(){{ot=null;return}}schedule(t){var s;if(wa=t,(s=t.b)!=null&&s.is_pending&&(t.f&(ns|xo|La))!==0&&(t.f&is)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(Ur!==null&&n===pe&&(be===null||(be.f&rt)===0))return;if((r&(Nn|jt))!==0){if((r&tt)===0)return;n.f^=tt}}u(this,xt).push(n)}};Yr=new WeakMap,jn=new WeakMap,cr=new WeakMap,Jr=new WeakMap,Xr=new WeakMap,Zr=new WeakMap,Cn=new WeakMap,Qr=new WeakMap,xt=new WeakMap,Ks=new WeakMap,En=new WeakMap,Yt=new WeakMap,cn=new WeakMap,es=new WeakMap,ur=new WeakMap,ze=new WeakSet,ka=function(){if(this.is_fork)return!0;for(const r of u(this,Cn).keys()){for(var t=r,n=!1;t.parent!==null;){if(u(this,cn).has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1},Ps=function(){var c,f,p,y;de(this,Yr,!0),ni++>1e3&&(xe(this,ze,zs).call(this),Uc());for(const _ of u(this,En))u(this,Yt).delete(_),Ue(_,nt),this.schedule(_);for(const _ of u(this,Yt))Ue(_,tn),this.schedule(_);const t=u(this,xt);de(this,xt,[]),this.apply();var n=Ur=[],r=[],s=Po=[];for(const _ of t)try{xe(this,ze,$a).call(this,_,n,r)}catch(k){throw al(_),xe(this,ze,ka).call(this)||this.discard(),k}if(ee=null,s.length>0){var i=Ko.ensure();for(const _ of s)i.schedule(_)}if(Ur=null,Po=null,xe(this,ze,ka).call(this)){xe(this,ze,Kr).call(this,r),xe(this,ze,Kr).call(this,n);for(const[_,k]of u(this,cn))ol(_,k);s.length>0&&xe(c=ee,ze,Ps).call(c);return}const a=xe(this,ze,nl).call(this);if(a){xe(this,ze,Kr).call(this,r),xe(this,ze,Kr).call(this,n),xe(f=a,ze,rl).call(f,this);return}u(this,En).clear(),u(this,Yt).clear();for(const _ of u(this,Jr))_(this);u(this,Jr).clear(),Rs=this,ri(r),ri(n),Rs=null,(p=u(this,Qr))==null||p.resolve();var l=ee;if(u(this,Zr)===0&&(u(this,xt).length===0||l!==null)&&xe(this,ze,zs).call(this),u(this,xt).length>0)if(l!==null){const _=l;u(_,xt).push(...u(this,xt).filter(k=>!u(_,xt).includes(k)))}else l=this;l!==null&&(gn.clear(),xe(y=l,ze,Ps).call(y))},$a=function(t,n,r){t.f^=tt;for(var s=t.first;s!==null;){var i=s.f,a=(i&(jt|Nn))!==0,l=a&&(i&tt)!==0,c=l||(i&_t)!==0||u(this,cn).has(s);if(!c&&s.fn!==null){a?s.f^=tt:(i&ns)!==0?n.push(s):ko(s)&&((i&Xt)!==0&&u(this,Yt).add(s),as(s));var f=s.first;if(f!==null){s=f;continue}}for(;s!==null;){var p=s.next;if(p!==null){s=p;break}s=s.parent}}},nl=function(){for(var t=u(this,jn);t!==null;){if(!t.is_fork){for(const[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=u(t,jn)}return null},rl=function(t){var r;for(const[s,i]of t.current)!this.previous.has(s)&&t.previous.has(s)&&this.previous.set(s,t.previous.get(s)),this.current.set(s,i);for(const[s,i]of t.async_deriveds){const a=this.async_deriveds.get(s);a&&i.promise.then(a.resolve).catch(a.reject)}t.async_deriveds.clear(),this.transfer_effects(u(t,En),u(t,Yt));const n=s=>{var i=s.reactions;if(i!==null&&!((s.f&rt)!==0&&(s.f&(nt|tn))===0))for(const c of i){var a=c.f;if((a&rt)!==0)n(c);else{var l=c;a&(Wr|Xt)&&!this.async_deriveds.has(l)&&(u(this,Yt).delete(l),Ue(l,nt),this.schedule(l))}}};for(const s of this.current.keys())n(s);this.oncommit(()=>t.discard()),xe(r=t,ze,zs).call(r),ee=this,xe(this,ze,Ps).call(this)},Kr=function(t){for(var n=0;n<t.length;n+=1)Yi(t[n],u(this,En),u(this,Yt))},Vc=function(){var y;for(let _=sa;_!==null;_=u(_,cr)){var t=_.id<this.id,n=[];for(const[k,[$,w]]of this.current){if(_.current.has(k)){var r=_.current.get(k)[0];if(t&&$!==r)_.current.set(k,[$,w]);else continue}n.push(k)}if(t)for(const[k,$]of this.async_deriveds){const w=_.async_deriveds.get(k);w&&$.promise.then(w.resolve).catch(w.reject)}var s=[..._.current.keys()].filter(k=>!_.current.get(k)[1]);if(!(!u(_,Yr)||s.length===0)){var i=s.filter(k=>!this.current.has(k));if(i.length===0)t&&_.discard();else if(n.length>0){if(t)for(const k of u(this,es))_.unskip_effect(k,$=>{var w;($.f&(Xt|Wr))!==0?_.schedule($):xe(w=_,ze,Kr).call(w,[$])});_.activate();var a=new Set,l=new Map;for(var c of n)sl(c,i,a,l);l=new Map;var f=[..._.current].filter(([k,$])=>{const w=this.current.get(k);return w?w[0]!==$[0]||w[1]!==$[1]:!0}).map(([k])=>k);if(f.length>0)for(const k of u(this,Ks))(k.f&(kt|_t|Do))===0&&Ka(k,f,l)&&((k.f&(Wr|Xt))!==0?(Ue(k,nt),_.schedule(k)):u(_,En).add(k));if(u(_,xt).length>0&&!u(_,ur)){_.apply();for(var p of u(_,xt))xe(y=_,ze,$a).call(y,p,[],[]);de(_,xt,[])}_.deactivate()}}}},zs=function(){if(this.linked){var t=u(this,jn),n=u(this,cr);t===null?sa=n:de(t,cr,n),n===null?Vr=t:de(n,jn,t),this.linked=!1}};let gr=Ko;function Kc(e){var t=Ls;Ls=!0;try{for(var n;;){if(Ic(),ee===null)return n;ee.flush()}}finally{Ls=t}}function Uc(){try{Ec()}catch(e){fn(e,wa)}}let Gt=null;function ri(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(kt|_t))===0&&ko(r)&&(Gt=new Set,as(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&bl(r),(Gt==null?void 0:Gt.size)>0)){gn.clear();for(const s of Gt){if((s.f&(kt|_t))!==0)continue;const i=[s];let a=s.parent;for(;a!==null;)Gt.has(a)&&(Gt.delete(a),i.push(a)),a=a.parent;for(let l=i.length-1;l>=0;l--){const c=i[l];(c.f&(kt|_t))===0&&as(c)}}Gt.clear()}}Gt=null}}function sl(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const s of e.reactions){const i=s.f;(i&rt)!==0?sl(s,t,n,r):(i&(Wr|Xt))!==0&&(i&nt)===0&&Ka(s,t,r)&&(Ue(s,nt),Ua(s))}}function Ka(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const s of e.deps){if(Ro.call(t,s))return!0;if((s.f&rt)!==0&&Ka(s,t,n))return n.set(s,!0),!0}return n.set(e,!1),!1}function Ua(e){ee.schedule(e)}function ol(e,t){if(!((e.f&jt)!==0&&(e.f&tt)!==0)){(e.f&nt)!==0?t.d.push(e):(e.f&tn)!==0&&t.m.push(e),Ue(e,tt);for(var n=e.first;n!==null;)ol(n,t),n=n.next}}function al(e){Ue(e,tt);for(var t=e.first;t!==null;)al(t),t=t.next}let jo=new Set;const gn=new Map;let il=!1;function Pn(e,t){var n={f:0,v:e,reactions:null,equals:Ki,rv:0,wv:0};return n}function O(e,t){const n=Pn(e);return wl(n),n}function Wc(e,t=!1,n=!0){var s;const r=Pn(e);return t||(r.equals=Ui),cs&&n&&je!==null&&je.l!==null&&((s=je.l).s??(s.s=[])).push(r),r}function d(e,t,n=!1){be!==null&&(!Qt||(be.f&Do)!==0)&&us()&&(be.f&(rt|Xt|Wr|Do))!==0&&(bn===null||!bn.has(e))&&zc();let r=n?Pe(t):t;return os(e,r,Po)}function os(e,t,n=null){if(!e.equals(t)){zn?gn.set(e,t):gn.has(e)||gn.set(e,e.v);var r=gr.ensure();if(r.capture(e,t),(e.f&rt)!==0){const s=e;(e.f&nt)!==0&&Va(s),ot===null&&ja(s)}e.wv=$l(),ll(e,nt,n),us()&&pe!==null&&(pe.f&tt)!==0&&(pe.f&(jt|Nn))===0&&(Lt===null?nu([e]):Lt.push(e)),!r.is_fork&&jo.size>0&&!il&&qc()}return t}function qc(){il=!1;for(const e of jo){(e.f&tt)!==0&&Ue(e,tn);let t;try{t=ko(e)}catch{t=!0}t&&as(e)}jo.clear()}function si(e,t=1){var n=o(e),r=t===1?n++:n--;return d(e,n),r}function Ds(e){d(e,e.v+1)}function ll(e,t,n){var r=e.reactions;if(r!==null)for(var s=us(),i=r.length,a=0;a<i;a++){var l=r[a],c=l.f;if(!(!s&&l===pe)){var f=(c&nt)===0;if(f&&Ue(l,t),(c&Do)!==0)jo.add(l);else if((c&rt)!==0){var p=l;ot==null||ot.delete(p),(c&_r)===0&&(c&Ht&&(pe===null||(pe.f&Fo)===0)&&(l.f|=_r),ll(p,tn,n))}else if(f){var y=l;(c&Xt)!==0&&Gt!==null&&Gt.add(y),n!==null?n.push(y):Ua(y)}}}}function Pe(e){if(typeof e!="object"||e===null||_n in e||Di in e)return e;const t=Ra(e);if(t!==Ql&&t!==ec)return e;var n=new Map,r=qo(e),s=O(0),i=hr,a=l=>{if(hr===i)return l();var c=be,f=hr;Bt(null),ii(i);var p=l();return Bt(c),ii(f),p};return r&&n.set("length",O(e.length)),new Proxy(e,{defineProperty(l,c,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&Nc();var p=n.get(c);return p===void 0?a(()=>{var y=O(f.value);return n.set(c,y),y}):d(p,f.value,!0),!0},deleteProperty(l,c){var f=n.get(c);if(f===void 0){if(c in l){const p=a(()=>O(et));n.set(c,p),Ds(s)}}else d(f,et),Ds(s);return!0},get(l,c,f){var k;if(c===_n)return e;var p=n.get(c),y=c in l;if(p===void 0&&(!y||(k=Vn(l,c))!=null&&k.writable)&&(p=a(()=>{var $=Pe(y?l[c]:et),w=O($);return w}),n.set(c,p)),p!==void 0){var _=o(p);return _===et?void 0:_}return Reflect.get(l,c,f)},getOwnPropertyDescriptor(l,c){var f=Reflect.getOwnPropertyDescriptor(l,c);if(f&&"value"in f){var p=n.get(c);p&&(f.value=o(p))}else if(f===void 0){var y=n.get(c),_=y==null?void 0:y.v;if(y!==void 0&&_!==et)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return f},has(l,c){var _;if(c===_n)return!0;var f=n.get(c),p=f!==void 0&&f.v!==et||Reflect.has(l,c);if(f!==void 0||pe!==null&&(!p||(_=Vn(l,c))!=null&&_.writable)){f===void 0&&(f=a(()=>{var k=p?Pe(l[c]):et,$=O(k);return $}),n.set(c,f));var y=o(f);if(y===et)return!1}return p},set(l,c,f,p){var M;var y=n.get(c),_=c in l;if(r&&c==="length")for(var k=f;k<y.v;k+=1){var $=n.get(k+"");$!==void 0?d($,et):k in l&&($=a(()=>O(et)),n.set(k+"",$))}if(y===void 0)(!_||(M=Vn(l,c))!=null&&M.writable)&&(y=a(()=>O(void 0)),d(y,Pe(f)),n.set(c,y));else{_=y.v!==et;var w=a(()=>Pe(f));d(y,w)}var C=Reflect.getOwnPropertyDescriptor(l,c);if(C!=null&&C.set&&C.set.call(p,f),!_){if(r&&typeof c=="string"){var I=n.get("length"),D=Number(c);Number.isInteger(D)&&D>=I.v&&d(I,D+1)}Ds(s)}return!0},ownKeys(l){o(s);var c=Reflect.ownKeys(l).filter(y=>{var _=n.get(y);return _===void 0||_.v!==et});for(var[f,p]of n)p.v!==et&&!(f in l)&&c.push(f);return c},setPrototypeOf(){Pc()}})}function oi(e){try{if(e!==null&&typeof e=="object"&&_n in e)return e[_n]}catch{}return e}function cl(e,t){return Object.is(oi(e),oi(t))}var Hs,ul,dl,fl;function Gc(){if(Hs===void 0){Hs=window,ul=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;dl=Vn(t,"firstChild").get,fl=Vn(t,"nextSibling").get,ei(e)&&(e[xa]=void 0,e[To]=null,e[ya]=void 0,e.__e=void 0),ei(n)&&(n[Ts]=void 0)}}function mn(e=""){return document.createTextNode(e)}function Zt(e){return dl.call(e)}function wo(e){return fl.call(e)}function b(e,t){return Zt(e)}function j(e,t=!1){{var n=Zt(e);return n instanceof Comment&&n.data===""?wo(n):n}}function Z(e,t=!1){return Zt(e)}function v(e,t=1,n=!1){let r=e;for(;t--;)r=wo(r);return r}function Yc(e){e.textContent=""}function vl(){return!1}function Yo(e,t,n){return t==null||t===Bi?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function Jc(e){var t=pe;if(t===null)return be.f|=Kn,e;if((t.f&is)===0&&(t.f&ns)===0)throw e;fn(e,t)}function fn(e,t){if(!(t!==null&&(t.f&kt)!==0)){for(;t!==null;){if((t.f&ba)!==0&&(t.f&(kt|Lo))===0){if((t.f&is)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}function pl(e){pe===null&&(be===null&&Cc(),Sc()),zn&&$c()}function Xc(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function nn(e,t){var n=pe;n!==null&&(n.f&_t)!==0&&(e|=_t);var r={ctx:je,deps:null,nodes:null,f:e|nt|Ht,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};ee==null||ee.register_created_effect(r);var s=r;if((e&ns)!==0)Ur!==null?Ur.push(r):gr.ensure().schedule(r);else if(t!==null){try{as(r)}catch(a){throw lt(r),a}s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&ls)===0&&(s=s.first,(e&Xt)!==0&&(e&Un)!==0&&s!==null&&(s.f|=Un))}if(s!==null&&(s.parent=n,n!==null&&Xc(s,n),be!==null&&(be.f&rt)!==0&&(e&Nn)===0)){var i=be;(i.effects??(i.effects=[])).push(s)}return r}function Wa(){return be!==null&&!Qt}function Jo(e){const t=nn(xo,null);return Ue(t,tt),t.teardown=e,t}function it(e){pl();var t=pe.f,n=!be&&(t&jt)!==0&&je!==null&&!je.i;if(n){var r=je;(r.e??(r.e=[])).push(e)}else return hl(e)}function hl(e){return nn(ns|Li,e)}function Zc(e){return pl(),nn(xo|Li,e)}function Qc(e){gr.ensure();const t=nn(Nn|ls,e);return(n={})=>new Promise(r=>{n.outro?pr(t,()=>{lt(t),r(void 0)}):(lt(t),r(void 0))})}function Xo(e){return nn(ns,e)}function eu(e){return nn(Wr|ls,e)}function qa(e,t=0){return nn(xo|t,e)}function q(e,t=[],n=[],r=[]){Zi(r,t,n,s=>{nn(xo,()=>{e(...s.map(o))})})}function fs(e,t=0){var n=nn(Xt|t,e);return n}function _l(e,t=0){var n=nn(La|t,e);return n}function yt(e){return nn(jt|ls,e)}function gl(e){var t=e.teardown;if(t!==null){const n=zn,r=be;ai(!0),Bt(null);try{t.call(null)}catch(s){fn(s,e.parent)}finally{ai(n),Bt(r)}}}function Ga(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const s=n.ac;s!==null&&ds(()=>{s.abort(yo)});var r=n.next;(n.f&Nn)!==0?n.parent=null:lt(n,t),n=r}}function tu(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&jt)===0&&lt(t),t=n}}function lt(e,t=!0){var n=!1;(t||(e.f&sc)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(ml(e.nodes.start,e.nodes.end),n=!0),e.f|=Lo,Ga(e,t&&!n),js(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const i of r)i.stop();gl(e),e.f^=Lo,e.f|=kt;var s=e.parent;s!==null&&s.first!==null&&bl(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function ml(e,t){for(;e!==null;){var n=e===t?null:wo(e);e.remove(),e=n}}function bl(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function pr(e,t,n=!0){var r=[];e.f|=Da,xl(e,r,!0);var s=()=>{n&&lt(e),t&&t()},i=r.length;if(i>0){var a=()=>--i||s();for(var l of r)l.out(a)}else s()}function xl(e,t,n){if((e.f&_t)===0){e.f^=_t;var r=e.nodes&&e.nodes.t;if(r!==null)for(const l of r)(l.is_global||n)&&t.push(l);for(var s=e.first;s!==null;){var i=s.next;if((s.f&Nn)===0){var a=(s.f&Un)!==0||(s.f&jt)!==0&&(e.f&Xt)!==0;xl(s,t,a?n:!1)}s=i}}}function Bo(e){e.f&=~Da,yl(e,!0)}function yl(e,t){if((e.f&Da)===0&&(e.f&_t)!==0){e.f^=_t,(e.f&tt)===0&&(Ue(e,nt),gr.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,s=(n.f&Un)!==0||(n.f&jt)!==0;yl(n,s?t:!1),n=r}var i=e.nodes&&e.nodes.t;if(i!==null)for(const a of i)(a.is_global||t)&&a.in()}}function Ya(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var s=n===r?null:wo(n);t.append(n),n=s}}let zo=!1,zn=!1;function ai(e){zn=e}let be=null,Qt=!1;function Bt(e){be=e}let pe=null;function Vt(e){pe=e}let bn=null;function wl(e){be!==null&&(bn??(bn=new Set)).add(e)}let wt=null,Nt=0,Lt=null;function nu(e){Lt=e}let kl=1,ir=0,hr=ir;function ii(e){hr=e}function $l(){return++kl}function ko(e){var t=e.f;if((t&nt)!==0)return!0;if(t&rt&&(e.f&=~_r),(t&tn)!==0){for(var n=e.deps,r=n.length,s=0;s<r;s++){var i=n[s];if(ko(i)&&el(i),i.wv>e.wv)return!0}(t&Ht)!==0&&ot===null&&Ue(e,tt)}return!1}function Sl(e,t,n=!0){var r=e.reactions;if(r!==null&&!(bn!==null&&bn.has(e)))for(var s=0;s<r.length;s++){var i=r[s];(i.f&rt)!==0?Sl(i,t,!1):t===i&&(n?Ue(i,nt):(i.f&tt)!==0&&Ue(i,tn),Ua(i))}}function Cl(e){var t=wt,n=Nt,r=Lt,s=be,i=bn,a=je,l=Qt,c=hr,f=e.f;wt=null,Nt=0,Lt=null,be=(f&(jt|Nn))===0?e:null,bn=null,rs(e.ctx),Qt=!1,hr=++ir,e.ac!==null&&(ds(()=>{e.ac.abort(yo)}),e.ac=null);try{e.f|=Fo;var p=e.fn,y=p();e.f|=is;var _=li(e);if(us()&&Lt!==null&&!Qt&&_!==null&&(e.f&(rt|tn|nt))===0)for(var k=0;k<Lt.length;k++)Sl(Lt[k],e);if(s!==null&&s!==e){if(ir++,s.deps!==null)for(let $=0;$<n;$+=1)s.deps[$].rv=ir;if(t!==null)for(const $ of t)$.rv=ir;Lt!==null&&(r===null?r=Lt:r.push(...Lt))}return(e.f&Kn)!==0&&(e.f^=Kn),y}catch($){return li(e),Jc($)}finally{e.f^=Fo,wt=t,Nt=n,Lt=r,be=s,bn=i,rs(a),Qt=l,hr=c}}function li(e){var s;var t=e.deps,n=ee==null?void 0:ee.is_fork;if(wt!==null){var r;if(n||js(e,Nt),t!==null&&Nt>0)for(t.length=Nt+wt.length,r=0;r<wt.length;r++)t[Nt+r]=wt[r];else e.deps=t=wt;if(Wa()&&(e.f&Ht)!==0)for(r=Nt;r<t.length;r++)((s=t[r]).reactions??(s.reactions=[])).push(e)}else!n&&t!==null&&Nt<t.length&&(js(e,Nt),t.length=Nt);return t}function ru(e,t){let n=t.reactions;if(n!==null){var r=Zl.call(n,e);if(r!==-1){var s=n.length-1;s===0?n=t.reactions=null:(n[r]=n[s],n.pop())}}if(n===null&&(t.f&rt)!==0&&(wt===null||!Ro.call(wt,t))){var i=t;(i.f&Ht)!==0&&(i.f^=Ht,i.f&=~_r),i.v!==et&&ja(i),i.ac!==null&&ds(()=>{i.ac.abort(yo),i.ac=null,Ue(i,nt)}),jc(i),js(i,0)}}function js(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)ru(e,n[r])}function as(e){var t=e.f;if((t&kt)===0){Ue(e,tt);var n=pe,r=zo;pe=e,zo=(t&(jt|Nn))===0;try{(t&(Xt|La))!==0?tu(e):Ga(e),gl(e);var s=Cl(e);e.teardown=typeof s=="function"?s:null,e.wv=kl;var i}finally{zo=r,pe=n}}}async function su(){await Promise.resolve(),Kc()}function o(e){var t=e.f,n=(t&rt)!==0;if(be!==null&&!Qt){var r=pe!==null&&(pe.f&kt)!==0;if(!r&&(bn===null||!bn.has(e))){var s=be.deps;if((be.f&Fo)!==0)e.rv<ir&&(e.rv=ir,wt===null&&s!==null&&s[Nt]===e?Nt++:wt===null?wt=[e]:wt.push(e));else{be.deps??(be.deps=[]),Ro.call(be.deps,e)||be.deps.push(e);var i=e.reactions;i===null?e.reactions=[be]:Ro.call(i,be)||i.push(be)}}}if(zn&&gn.has(e))return gn.get(e);if(n){var a=e;if(zn){var l=a.v;return((a.f&tt)===0&&a.reactions!==null||Tl(a))&&(l=Va(a)),gn.set(a,l),l}var c=(a.f&Ht)===0&&!Qt&&be!==null&&(zo||(be.f&Ht)!==0),f=(a.f&is)===0;ko(a)&&(c&&(a.f|=Ht),el(a)),c&&!f&&(tl(a),El(a))}if(ot!=null&&ot.has(e))return ot.get(e);if((e.f&Kn)!==0)throw e.v;return e.v}function El(e){if(e.f|=Ht,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&rt)!==0&&(t.f&Ht)===0&&(tl(t),El(t))}function Tl(e){if(e.v===et)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(gn.has(t)||(t.f&rt)!==0&&Tl(t))return!0;return!1}function Mn(e){var t=Qt;try{return Qt=!0,e()}finally{Qt=t}}function sr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(_n in e)Sa(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&_n in n&&Sa(n)}}}function Sa(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{Sa(e[r],t)}catch{}const n=Ra(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=Oi(n);for(let s in r){const i=r[s].get;if(i)try{i.call(e)}catch{}}}}}function ou(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const au=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function iu(e){return au.includes(e)}const lu={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function cu(e){return e=e.toLowerCase(),lu[e]??e}const uu=["touchstart","touchmove"];function du(e){return uu.includes(e)}const lr=Symbol("events"),Nl=new Set,Ca=new Set;function Pl(e,t,n,r={}){function s(i){if(r.capture||Ea.call(t,i),!i.cancelBubble)return ds(()=>n==null?void 0:n.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?pn(()=>{t.addEventListener(e,s,r)}):t.addEventListener(e,s,r),s}function Wn(e,t,n,r,s){var i={capture:r,passive:s},a=Pl(e,t,n,i);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Jo(()=>{t.removeEventListener(e,a,i)})}function L(e,t,n){(t[lr]??(t[lr]={}))[e]=n}function Kt(e){for(var t=0;t<e.length;t++)Nl.add(e[t]);for(var n of Ca)n(e)}let aa=null,ia=!1;function Ea(e){var w,C;var t=this,n=t.ownerDocument,r=e.type,s=((w=e.composedPath)==null?void 0:w.call(e))||[],i=s[0]||e.target;aa=e,ia||(ia=!0,setTimeout(()=>{ia=!1,aa=null}));var a=0,l=aa===e&&e[lr];if(l){var c=s.indexOf(l);if(c!==-1&&(t===document||t===window)){e[lr]=t;return}var f=s.indexOf(t);if(f===-1)return;c<=f&&(a=c)}if(i=s[a]||e.target,i!==t){Ii(e,"currentTarget",{configurable:!0,get(){return i||n}});var p=be,y=pe;Bt(null),Vt(null);try{for(var _,k=[];i!==null&&i!==t;){try{var $=(C=i[lr])==null?void 0:C[r];$!=null&&(!i.disabled||e.target===i)&&$.call(i,e)}catch(I){_?k.push(I):_=I}if(e.cancelBubble)break;a++,i=a<s.length?s[a]:null}if(_){for(let I of k)queueMicrotask(()=>{throw I});throw _}}finally{e[lr]=t,delete e.currentTarget,Bt(p),Vt(y)}}}var Mi;const la=((Mi=globalThis==null?void 0:globalThis.window)==null?void 0:Mi.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function fu(e){return(la==null?void 0:la.createHTML(e))??e}function zl(e){var t=Yo("template");return t.innerHTML=fu(e.replaceAll("<!>","<!---->")),t.content}function qn(e,t){var n=pe;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function P(e,t){var n=(t&pc)!==0,r=(t&hc)!==0,s,i=!e.startsWith("<!>");return()=>{s===void 0&&(s=zl(i?e:"<!>"+e),n||(s=Zt(s)));var a=r||ul?document.importNode(s,!0):s.cloneNode(!0);if(n){var l=Zt(a),c=a.lastChild;qn(l,c)}else qn(a,a);return a}}function vu(e,t,n="svg"){var r=!e.startsWith("<!>"),s=`<${n}>${r?e:"<!>"+e}</${n}>`,i;return()=>{if(!i){var a=zl(s),l=Zt(a);i=Zt(l)}var c=i.cloneNode(!0);return qn(c,c),c}}function Ml(e,t){return vu(e,t,"svg")}function ci(e=""){{var t=mn(e+"");return qn(t,t),t}}function Q(){var e=document.createDocumentFragment(),t=document.createComment(""),n=mn();return e.append(t,n),qn(t,n),e}function m(e,t){e!==null&&e.before(t)}function pu(e){let t=0,n=Pn(0),r;return()=>{Wa()&&(o(n),qa(()=>(t===0&&(r=Mn(()=>e(()=>Ds(n)))),t+=1,()=>{pn(()=>{t-=1,t===0&&(r==null||r(),r=void 0,Ds(n))})})))}}var hu=Un|ls;function _u(e,t,n,r){new gu(e,t,n,r)}var Dt,Oa,Ft,dr,vt,Ct,pt,Et,un,fr,Bn,ts,Us,Ws,Tn,Uo,He,mu,bu,Ta,xu,Na,Ms,Mo,Pa,za;class gu{constructor(t,n,r,s){W(this,He);ft(this,"parent");ft(this,"is_pending",!1);ft(this,"transform_error");W(this,Dt);W(this,Oa,null);W(this,Ft);W(this,dr);W(this,vt);W(this,Ct,null);W(this,pt,null);W(this,Et,null);W(this,un,null);W(this,fr,0);W(this,Bn,0);W(this,ts,!1);W(this,Us,new Set);W(this,Ws,new Set);W(this,Tn,null);W(this,Uo,pu(()=>(de(this,Tn,Pn(u(this,fr))),()=>{de(this,Tn,null)})));var i;de(this,Dt,t),de(this,Ft,n),de(this,dr,a=>{var l=pe;l.b=this,l.f|=ba,r(a)}),this.parent=pe.b,this.transform_error=s??((i=this.parent)==null?void 0:i.transform_error)??(a=>a),de(this,vt,fs(()=>{xe(this,He,Na).call(this)},hu))}defer_effect(t){Yi(t,u(this,Us),u(this,Ws))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,Ft).pending}update_pending_count(t,n){xe(this,He,Pa).call(this,t,n),de(this,fr,u(this,fr)+t),!(!u(this,Tn)||u(this,ts))&&(de(this,ts,!0),pn(()=>{de(this,ts,!1),u(this,Tn)&&os(u(this,Tn),u(this,fr))}))}get_effect_pending(){return u(this,Uo).call(this),o(u(this,Tn))}error(t){if(!u(this,Ft).onerror&&!u(this,Ft).failed)throw t;ee!=null&&ee.is_fork?(u(this,Ct)&&ee.skip_effect(u(this,Ct)),u(this,pt)&&ee.skip_effect(u(this,pt)),u(this,Et)&&ee.skip_effect(u(this,Et)),ee.oncommit(()=>{xe(this,He,za).call(this,t)})):xe(this,He,za).call(this,t)}}Dt=new WeakMap,Oa=new WeakMap,Ft=new WeakMap,dr=new WeakMap,vt=new WeakMap,Ct=new WeakMap,pt=new WeakMap,Et=new WeakMap,un=new WeakMap,fr=new WeakMap,Bn=new WeakMap,ts=new WeakMap,Us=new WeakMap,Ws=new WeakMap,Tn=new WeakMap,Uo=new WeakMap,He=new WeakSet,mu=function(){try{de(this,Ct,yt(()=>u(this,dr).call(this,u(this,Dt))))}catch(t){this.error(t)}},bu=function(t){const n=u(this,Ft).failed,{reset:r,invoke_onerror:s}=xe(this,He,Ta).call(this,t);pn(s),n&&de(this,Et,yt(()=>{n(u(this,Dt),()=>t,()=>r)}))},Ta=function(t){var n=!1,r=!1;const s=()=>{if(n){xc();return}n=!0,r&&Mc(),u(this,Et)!==null&&pr(u(this,Et),()=>{de(this,Et,null)}),xe(this,He,Mo).call(this,()=>{xe(this,He,Na).call(this)})};return{reset:s,invoke_onerror:()=>{var a,l;try{r=!0,(l=(a=u(this,Ft)).onerror)==null||l.call(a,t,s),r=!1}catch(c){fn(c,u(this,vt)&&u(this,vt).parent)}}}},xu=function(){const t=u(this,Ft).pending;t&&(this.is_pending=!0,de(this,pt,yt(()=>t(u(this,Dt)))),pn(()=>{var n=de(this,un,document.createDocumentFragment()),r=mn(),s=!1;if(n.append(r),de(this,Ct,xe(this,He,Mo).call(this,()=>{try{return yt(()=>u(this,dr).call(this,r))}catch(i){try{this.error(i),s=!0}catch(a){fn(a,u(this,vt).parent)}return null}})),u(this,Ct)===null){de(this,un,null),s&&xe(this,He,Ms).call(this,ee);return}u(this,Bn)===0&&(u(this,Dt).before(n),de(this,un,null),pr(u(this,pt),()=>{de(this,pt,null)}),xe(this,He,Ms).call(this,ee))}))},Na=function(){try{if(this.is_pending=this.has_pending_snippet(),de(this,Bn,0),de(this,fr,0),de(this,Ct,yt(()=>{u(this,dr).call(this,u(this,Dt))})),u(this,Bn)>0){var t=de(this,un,document.createDocumentFragment());Ya(u(this,Ct),t);const n=u(this,Ft).pending;de(this,pt,yt(()=>n(u(this,Dt))))}else xe(this,He,Ms).call(this,ee)}catch(n){this.error(n)}},Ms=function(t){this.is_pending=!1,t.transfer_effects(u(this,Us),u(this,Ws))},Mo=function(t){var n=pe,r=be,s=je;Vt(u(this,vt)),Bt(u(this,vt)),rs(u(this,vt).ctx);try{return gr.ensure(),t()}finally{Vt(n),Bt(r),rs(s)}},Pa=function(t,n){var r;if(!this.has_pending_snippet()){this.parent&&xe(r=this.parent,He,Pa).call(r,t,n);return}de(this,Bn,u(this,Bn)+t),u(this,Bn)===0&&(xe(this,He,Ms).call(this,n),u(this,pt)&&pr(u(this,pt),()=>{de(this,pt,null)}),u(this,un)&&(u(this,Dt).before(u(this,un)),de(this,un,null)))},za=function(t){u(this,Ct)&&(lt(u(this,Ct)),de(this,Ct,null)),u(this,pt)&&(lt(u(this,pt)),de(this,pt,null)),u(this,Et)&&(lt(u(this,Et)),de(this,Et,null));let n=u(this,Ft).failed;const r=s=>{const{reset:i,invoke_onerror:a}=xe(this,He,Ta).call(this,s);a(),n&&de(this,Et,xe(this,He,Mo).call(this,()=>{try{return yt(()=>{var l=pe;l.b=this,l.f|=ba,n(u(this,Dt),()=>s,()=>i)})}catch(l){return fn(l,u(this,vt).parent),null}}))};pn(()=>{var s;try{s=this.transform_error(t)}catch(i){fn(i,u(this,vt)&&u(this,vt).parent);return}s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(r,i=>fn(i,u(this,vt)&&u(this,vt).parent)):r(s)})};function V(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[Ts]??(e[Ts]=e.nodeValue))&&(e[Ts]=n,e.nodeValue=`${n}`)}function yu(e,t){return wu(e,t)}const Eo=new Map;function wu(e,{target:t,anchor:n,props:r={},events:s,context:i,intro:a=!0,transformError:l}){Gc();var c=void 0,f=Qc(()=>{var p=n??t.appendChild(mn());_u(p,{pending:()=>{}},k=>{gt({});var $=je;i&&($.c=i),s&&(r.$$events=s),c=e(k,r)||Ha(),mt()},l);var y=new Set,_=k=>{for(var $=0;$<k.length;$++){var w=k[$];if(!y.has(w)){y.add(w);var C=du(w);for(const M of[t,document]){var I=Eo.get(M);I===void 0&&(I=new Map,Eo.set(M,I));var D=I.get(w);D===void 0?(M.addEventListener(w,Ea,{passive:C}),I.set(w,1)):I.set(w,D+1)}}}};return _(Go(Nl)),Ca.add(_),()=>{var C;for(var k of y)for(const I of[t,document]){var $=Eo.get(I),w=$.get(k);--w==0?(I.removeEventListener(k,Ea),$.delete(k),$.size===0&&Eo.delete(I)):$.set(k,w)}Ca.delete(_),p!==n&&((C=p.parentNode)==null||C.removeChild(p))}});return ku.set(c,f),c}let ku=new WeakMap;var Jt,dn,Tt,vr,qs,Gs,Wo;class Zo{constructor(t,n=!0){ft(this,"anchor");W(this,Jt,new Map);W(this,dn,new Map);W(this,Tt,new Map);W(this,vr,new Set);W(this,qs,!0);W(this,Gs,t=>{if(u(this,Jt).has(t)){var n=u(this,Jt).get(t),r=u(this,dn).get(n);if(r)Bo(r),u(this,vr).delete(n);else{var s=u(this,Tt).get(n);s&&(Bo(s.effect),u(this,dn).set(n,s.effect),u(this,Tt).delete(n),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[i,a]of u(this,Jt)){if(u(this,Jt).delete(i),i===t)break;const l=u(this,Tt).get(a);l&&(lt(l.effect),u(this,Tt).delete(a))}for(const[i,a]of u(this,dn)){if(i===n||u(this,vr).has(i))continue;const l=()=>{if(Array.from(u(this,Jt).values()).includes(i)){var f=document.createDocumentFragment();Ya(a,f),f.append(mn()),u(this,Tt).set(i,{effect:a,fragment:f})}else lt(a);u(this,vr).delete(i),u(this,dn).delete(i)};u(this,qs)||!r?(u(this,vr).add(i),pr(a,l,!1)):l()}}});W(this,Wo,t=>{u(this,Jt).delete(t);const n=Array.from(u(this,Jt).values());for(const[r,s]of u(this,Tt))n.includes(r)||(lt(s.effect),u(this,Tt).delete(r))});this.anchor=t,de(this,qs,n)}ensure(t,n){var r=ee,s=vl();if(n&&!u(this,dn).has(t)&&!u(this,Tt).has(t))if(s){var i=document.createDocumentFragment(),a=mn();i.append(a),u(this,Tt).set(t,{effect:yt(()=>n(a)),fragment:i})}else u(this,dn).set(t,yt(()=>n(this.anchor)));if(u(this,Jt).set(r,t),s){for(const[l,c]of u(this,dn))l===t?r.unskip_effect(c):r.skip_effect(c);for(const[l,c]of u(this,Tt))l===t?r.unskip_effect(c.effect):r.skip_effect(c.effect);r.oncommit(u(this,Gs)),r.ondiscard(u(this,Wo))}else u(this,Gs).call(this,r)}}Jt=new WeakMap,dn=new WeakMap,Tt=new WeakMap,vr=new WeakMap,qs=new WeakMap,Gs=new WeakMap,Wo=new WeakMap;function H(e,t,n=!1){var r=new Zo(e),s=n?Un:0;function i(a,l){r.ensure(a,l)}fs(()=>{var a=!1;t((l,c=0)=>{a=!0,i(c,l)}),a||i(-1,null)},s)}const $u=Symbol("NaN");function Su(e,t,n){var r=new Zo(e),s=!us();fs(()=>{var i=t();i!==i&&(i=$u),s&&i!==null&&typeof i=="object"&&(i={}),r.ensure(i,n)})}function Al(e,t){return t}function Cu(e,t,n){for(var r=[],s=t.length,i,a=t.length,l=0;l<s;l++){let y=t[l];pr(y,()=>{if(i){if(i.pending.delete(y),i.done.add(y),i.pending.size===0){var _=e.outrogroups;Ma(e,Go(i.done)),_.delete(i),_.size===0&&(e.outrogroups=null)}}else a-=1},!1)}if(a===0){var c=r.length===0&&n!==null&&e.pending.size===0;if(c){var f=n,p=f.parentNode;Yc(p),p.append(f),e.items.clear()}Ma(e,t,!c)}else i={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(i)}function Ma(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(const a of e.pending.values())for(const l of a)r.add(e.items.get(l).e)}for(var s=0;s<t.length;s++){var i=t[s];if(r!=null&&r.has(i)){i.f|=vn;const a=document.createDocumentFragment();Ya(i,a)}else lt(t[s],n)}}var ui;function Je(e,t,n,r,s,i=null){var a=e,l=new Map,c=(t&Hi)!==0;if(c){var f=e;a=f.appendChild(mn())}var p=null,y=Ba(()=>{var M=n();return qo(M)?M:M==null?[]:Go(M)}),_,k=new Map,$=!0;function w(M){(D.effect.f&kt)===0&&(D.pending.delete(M),D.fallback=p,Eu(D,_,a,t,r),p!==null&&(_.length===0?(p.f&vn)===0?Bo(p):(p.f^=vn,As(p,null,a)):pr(p,()=>{p=null})))}function C(M){D.pending.delete(M)}var I=fs(()=>{_=o(y);for(var M=_.length,K=new Set,N=ee,S=vl(),z=0;z<M;z+=1){var G=_[z],Y=r(G,z),J=$?null:l.get(Y);J?(J.v&&os(J.v,G),J.i&&os(J.i,z),S&&N.unskip_effect(J.e)):(J=Tu(l,$?a:ui??(ui=mn()),G,Y,z,s,t,n),$||(J.e.f|=vn),l.set(Y,J)),K.add(Y)}if(M===0&&i&&!p&&($?p=yt(()=>i(a)):(p=yt(()=>i(ui??(ui=mn()))),p.f|=vn)),M>K.size&&kc(),!$)if(k.set(N,K),S){for(const[F,B]of l)K.has(F)||N.skip_effect(B.e);N.oncommit(w),N.ondiscard(C)}else w(N);o(y)}),D={effect:I,items:l,pending:k,outrogroups:null,fallback:p};$=!1}function Ss(e){for(;e!==null&&(e.f&jt)===0;)e=e.next;return e}function Eu(e,t,n,r,s){var J,F,B,he,ye,qe,Oe,Xe,re;var i=(r&lc)!==0,a=t.length,l=e.items,c=Ss(e.effect.first),f,p=null,y,_=[],k=[],$,w,C,I;if(i)for(I=0;I<a;I+=1)$=t[I],w=s($,I),C=l.get(w).e,(C.f&vn)===0&&((F=(J=C.nodes)==null?void 0:J.a)==null||F.measure(),(y??(y=new Set)).add(C));for(I=0;I<a;I+=1){if($=t[I],w=s($,I),C=l.get(w).e,e.outrogroups!==null)for(const ue of e.outrogroups)ue.pending.delete(C),ue.done.delete(C);if((C.f&_t)!==0&&(Bo(C),i&&((he=(B=C.nodes)==null?void 0:B.a)==null||he.unfix(),(y??(y=new Set)).delete(C))),(C.f&vn)!==0)if(C.f^=vn,C===c)As(C,null,n);else{var D=p?p.next:c;C===e.effect.last&&(e.effect.last=C.prev),C.prev&&(C.prev.next=C.next),C.next&&(C.next.prev=C.prev),Fn(e,p,C),Fn(e,C,D),As(C,D,n),p=C,_=[],k=[],c=Ss(p.next);continue}if(C!==c){if(f!==void 0&&f.has(C)){if(_.length<k.length){var M=k[0],K;p=M.prev;var N=_[0],S=_[_.length-1];for(K=0;K<_.length;K+=1)As(_[K],M,n);for(K=0;K<k.length;K+=1)f.delete(k[K]);Fn(e,N.prev,S.next),Fn(e,p,N),Fn(e,S,M),c=M,p=S,I-=1,_=[],k=[]}else f.delete(C),As(C,c,n),Fn(e,C.prev,C.next),Fn(e,C,p===null?e.effect.first:p.next),Fn(e,p,C),p=C;continue}for(_=[],k=[];c!==null&&c!==C;)(f??(f=new Set)).add(c),k.push(c),c=Ss(c.next);if(c===null)continue}(C.f&vn)===0&&_.push(C),p=C,c=Ss(C.next)}if(e.outrogroups!==null){for(const ue of e.outrogroups)ue.pending.size===0&&(Ma(e,Go(ue.done)),(ye=e.outrogroups)==null||ye.delete(ue));e.outrogroups.size===0&&(e.outrogroups=null)}if(c!==null||f!==void 0){var z=[];if(f!==void 0)for(C of f)(C.f&_t)===0&&z.push(C);for(;c!==null;)(c.f&_t)===0&&c!==e.fallback&&z.push(c),c=Ss(c.next);var G=z.length;if(G>0){var Y=(r&Hi)!==0&&a===0?n:null;if(i){for(I=0;I<G;I+=1)(Oe=(qe=z[I].nodes)==null?void 0:qe.a)==null||Oe.measure();for(I=0;I<G;I+=1)(re=(Xe=z[I].nodes)==null?void 0:Xe.a)==null||re.fix()}Cu(e,z,Y)}}i&&pn(()=>{var ue,T;if(y!==void 0)for(C of y)(T=(ue=C.nodes)==null?void 0:ue.a)==null||T.apply()})}function Tu(e,t,n,r,s,i,a,l){var c=(a&ac)!==0?(a&cc)===0?Wc(n,!1,!1):Pn(n):null,f=(a&ic)!==0?Pn(s):null;return{v:c,i:f,e:yt(()=>(i(t,c??n,f??s,l),()=>{e.delete(r)}))}}function As(e,t,n){if(e.nodes)for(var r=e.nodes.start,s=e.nodes.end,i=t&&(t.f&vn)===0?t.nodes.start:n;r!==null;){var a=wo(r);if(i.before(r),r===s)return;r=a}}function Fn(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function di(e,t,n=!1,r=!1,s=!1,i=!1){var a=e,l="";if(n)var c=e;q(()=>{var f=pe;if(l!==(l=t()??"")){if(n){f.nodes=null,c.innerHTML=l,l!==""&&qn(Zt(c),c.lastChild);return}if(f.nodes!==null&&(ml(f.nodes.start,f.nodes.end),f.nodes=null),l!==""){var p=r?Vi:s?_c:void 0,y=Yo(r?"svg":s?"math":"template",p);y.innerHTML=l;var _=r||s?y:y.content;if(qn(Zt(_),_.lastChild),r||s)for(;Zt(_);)a.before(Zt(_));else a.before(_)}}})}function oe(e,t,n,r,s){var l,c;if((l=t.$$host)!=null&&l.$$shadowRoot){const f=Yo("slot");m(e,f);return}var i=(c=t.$$slots)==null?void 0:c[n],a=!1;i===!0&&(i=t.children,a=!0),i===void 0||i(e,a?()=>r:r)}function fi(e,t,n){var r=new Zo(e);fs(()=>{var s=t()??null;r.ensure(s,s&&(i=>n(i,s)))},Un)}function Nu(e,t,n,r,s,i){var a=null,l=e,c=new Zo(l,!1);fs(()=>{const f=t()||null;var p=Vi;if(f===null){c.ensure(null,null);return}return c.ensure(f,y=>{if(f){if(a=Yo(f,p),qn(a,a),r){var _=null,k=a.appendChild(mn());r(a,k),_==null||_.remove()}pe.nodes.end=a,y.before(a)}}),()=>{}},Un),Jo(()=>{})}function Pu(e,t){var n=void 0,r;_l(()=>{n!==(n=t())&&(r&&(lt(r),r=null),n&&(r=yt(()=>{Xo(()=>n(e))})))})}function Il(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=Il(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function zu(){for(var e,t,n=0,r="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=Il(e))&&(r&&(r+=" "),r+=t);return r}function Ol(e){return typeof e=="object"?zu(e):e??""}const vi=[...` 	
\r\f \v\uFEFF`];function Mu(e,t,n){var r=e==null?"":""+e;if(t&&(r=r?r+" "+t:t),n){for(var s of Object.keys(n))if(n[s])r=r?r+" "+s:s;else if(r.length)for(var i=s.length,a=0;(a=r.indexOf(s,a))>=0;){var l=a+i;(a===0||vi.includes(r[a-1]))&&(l===r.length||vi.includes(r[l]))?r=(a===0?"":r.substring(0,a))+r.substring(l+1):a=l}}return r===""?null:r}function pi(e,t=!1){var n=t?" !important;":";",r="";for(var s of Object.keys(e)){var i=e[s];i!=null&&i!==""&&(r+=" "+s+": "+i+n)}return r}function ca(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Au(e,t){if(t){var n="",r,s;if(Array.isArray(t)?(r=t[0],s=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var i=!1,a=0,l=!1,c=[];r&&c.push(...Object.keys(r).map(ca)),s&&c.push(...Object.keys(s).map(ca));var f=0,p=-1;const w=e.length;for(var y=0;y<w;y++){var _=e[y];if(l?_==="/"&&e[y-1]==="*"&&(l=!1):i?i===_&&(i=!1):_==="/"&&e[y+1]==="*"?l=!0:_==='"'||_==="'"?i=_:_==="("?a++:_===")"&&a--,!l&&i===!1&&a===0){if(_===":"&&p===-1)p=y;else if(_===";"||y===w-1){if(p!==-1){var k=ca(e.substring(f,p).trim());if(!c.includes(k)){_!==";"&&y++;var $=e.substring(f,y).trim();n+=" "+$+";"}}f=y+1,p=-1}}}}return r&&(n+=pi(r)),s&&(n+=pi(s,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function ht(e,t,n,r,s,i){var a=e[xa];if(a!==n||a===void 0){var l=Mu(n,r,i);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e[xa]=n}else if(i&&s!==i)for(var c in i){var f=!!i[c];(s==null||f!==!!s[c])&&e.classList.toggle(c,f)}return i}function ua(e,t={},n,r){for(var s in n){var i=n[s];t[s]!==i&&(n[s]==null?e.style.removeProperty(s):e.style.setProperty(s,i,r))}}function qr(e,t,n,r){var s=e[ya];if(s!==t){var i=Au(t,r);i==null?e.removeAttribute("style"):e.style.cssText=i,e[ya]=t}else r&&(Array.isArray(r)?(ua(e,n==null?void 0:n[0],r[0]),ua(e,n==null?void 0:n[1],r[1],"important")):ua(e,n,r));return r}function Rl(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function hi(e,t){var n=!("__defaultValue"in e);!n&&e.__defaultValue===t||(e.__defaultValue=t,Ll(e,!n||"__value"in e))}function Ll(e,t){var n=e.__defaultValue,r=e.multiple,s=r?n??[]:null;if(!(r&&!qo(s))){var i=e.selectedIndex,a=t&&r?new Set(e.selectedOptions):null;for(var l of e.options){var c=Gr(l);Rl(l,r?s.includes(c):cl(c,n))}if(t)if(a!==null)for(l of e.options){var f=a.has(l);l.selected!==f&&(l.selected=f)}else e.selectedIndex!==i&&(e.selectedIndex=i)}}function Bs(e,t,n=!1){if(e.multiple){if(t==null)return;if(!qo(t))return bc();for(var r of e.options)r.selected=t.includes(Gr(r));return}for(r of e.options){var s=Gr(r);if(cl(s,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Is(e){var t=new MutationObserver(n=>{n.every(Iu)||("__defaultValue"in e&&Ll(e,!1),"__value"in e&&Bs(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Jo(()=>{t.disconnect()})}function da(e,t,n=t){var r=new WeakSet,s=!0;Xi(e,"change",i=>{var a=i?"[selected]":":checked",l;if(e.multiple)l=[].map.call(e.querySelectorAll(a),Gr);else{var c=e.querySelector(a)??e.querySelector("option:not([disabled])");l=c&&Gr(c)}n(l),e.__value=l,ee!==null&&r.add(ee)}),Xo(()=>{var i=t();if(e===document.activeElement){var a=ee;if(r.has(a))return}if(Bs(e,i,s),s&&i===void 0){var l=e.querySelector(":checked");l!==null&&(i=Gr(l),n(i))}e.__value=i,s=!1})}function Gr(e){return"__value"in e?e.__value:e.value}function Iu(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(n=>n.nodeName==="SELECTEDCONTENT")}return!1}const Cs=Symbol("class"),Es=Symbol("style"),Dl=Symbol("is custom element"),Fl=Symbol("is html"),Ou=Fa?"input":"INPUT",Ru=Fa?"option":"OPTION",Hl=Fa?"select":"SELECT";function me(e,t,n,r){var s=jl(e);s[t]!==(s[t]=n)&&(t==="loading"&&(e[oc]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Bl(e).has(t)?e[t]=n:e.setAttribute(t,n))}function Lu(e,t,n,r,s=!1,i=!1){var a=jl(e),l=a[Dl],c=!a[Fl],f=t||{},p=e.nodeName===Ru,y=e.nodeName===Hl;for(var _ in t)!(_ in n)&&_[0]+_[1]!=="$$"&&(n[_]=null);n.class?n.class=Ol(n.class):n[Cs]&&(n.class=null),n[Es]&&(n.style??(n.style=null));var k=Bl(e);if(e.nodeName===Ou&&"type"in n&&("value"in n||"__value"in n)){var $=n.type;($!==f.type||$===void 0&&e.hasAttribute("type"))&&(f.type=$,me(e,"type",$))}for(const N in n){let S=n[N];if(p&&N==="value"&&S==null){e.value=e.__value="",f[N]=S;continue}if(N==="class"){var w=e.namespaceURI==="http://www.w3.org/1999/xhtml";ht(e,w,S,r,t==null?void 0:t[Cs],n[Cs]),f[N]=S,f[Cs]=n[Cs];continue}if(N==="style"){qr(e,S,t==null?void 0:t[Es],n[Es]),f[N]=S,f[Es]=n[Es];continue}var C=f[N];if(!(S===C&&!(S===void 0&&e.hasAttribute(N)))){f[N]=S;var I=N[0]+N[1];if(I!=="$$")if(I==="on"){const z={},G="$$"+N;let Y=N.slice(2);var D=iu(Y);if(ou(Y)&&(Y=Y.slice(0,-7),z.capture=!0),!D&&C){if(S!=null)continue;e.removeEventListener(Y,f[G],z),f[G]=null}if(D)L(Y,e,S),Kt([Y]);else if(S!=null){let J=function(F){f[N].call(this,F)};f[G]=Pl(Y,e,J,z)}}else if(N==="style")me(e,N,S);else if(N==="autofocus")Ji(e,!!S);else if(!l&&(N==="__value"||N==="value"&&S!=null))e.value=e.__value=S;else if(N==="selected"&&p)Rl(e,S);else{var M=N;c||(M=cu(M));var K=M==="defaultValue"||M==="defaultChecked";if(y&&M==="defaultValue")continue;if(S==null&&!l&&!K)if(a[N]=null,M==="value"||M==="checked"){let z=e;const G=t===void 0;if(M==="value"){let Y=z.defaultValue;z.removeAttribute(M),z.defaultValue=Y,z.value=z.__value=G?Y:null}else{let Y=z.defaultChecked;z.removeAttribute(M),z.defaultChecked=Y,z.checked=G?Y:!1}}else e.removeAttribute(N);else K||(l||typeof S!="string")&&k.has(M)?(e[M]=S,M in a&&(a[M]=et)):typeof S!="function"&&me(e,M,S)}}}return f}function _i(e,t,n=[],r=[],s=[],i,a=!1,l=!1){Zi(s,n,r,c=>{var f=void 0,p={},y=e.nodeName===Hl,_=!1;if(_l(()=>{var $=t(...c.map(o)),w=Lu(e,f,$,i,a,l);if(_&&y){var C=e;"defaultValue"in $&&hi(C,$.defaultValue),"value"in $&&Bs(C,$.value)}for(let D of Object.getOwnPropertySymbols(p))$[D]||lt(p[D]);for(let D of Object.getOwnPropertySymbols($)){var I=$[D];D.description===gc&&(!f||I!==f[D])&&(p[D]&&lt(p[D]),p[D]=yt(()=>Pu(e,()=>I))),w[D]=I}f=w}),y){var k=e;Xo(()=>{var $=f;"defaultValue"in $&&hi(k,$.defaultValue),Bs(k,$.value,!0),Is(k)})}_=!0})}function jl(e){return e[To]??(e[To]={[Dl]:e.nodeName.includes("-"),[Fl]:e.namespaceURI===Bi})}var gi=new Map;function Bl(e){var t=e.getAttribute("is")||e.nodeName,n=gi.get(t);if(n)return n;gi.set(t,n=new Set);for(var r,s=e,i=Element.prototype;i!==s;){r=Oi(s);for(var a in r)r[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&n.add(a);s=Ra(s)}return n}function Be(e,t,n=t){var r=new WeakSet;Xi(e,"input",async s=>{var i=s?e.defaultValue:e.value;if(i=fa(e)?va(i):i,n(i),ee!==null&&r.add(ee),await su(),i!==(i=t())){var a=e.selectionStart,l=e.selectionEnd,c=e.value.length;if(e.value=i??"",l!==null){var f=e.value.length;a===l&&l===c&&f>c?(e.selectionStart=f,e.selectionEnd=f):(e.selectionStart=a,e.selectionEnd=Math.min(l,f))}}}),Mn(t)==null&&e.value&&(n(fa(e)?va(e.value):e.value),ee!==null&&r.add(ee)),qa(()=>{var s=t();if(e===document.activeElement){var i=ee;if(r.has(i))return}fa(e)&&s===va(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function fa(e){var t=e.type;return t==="number"||t==="range"}function va(e){return e===""?null:+e}function pa(e,t){return e===t||(e==null?void 0:e[_n])===t}function Vs(e=Ha(),t,n,r){var s=je.r,i=pe;return Xo(()=>{var a,l;return qa(()=>{a=l,l=[],Mn(()=>{pa(n(...l),e)||(t(e,...l),a&&pa(n(...a),e)&&t(null,...a))})}),()=>{let c=i;for(;c!==s&&c.parent!==null&&c.parent.f&Lo;)c=c.parent;const f=()=>{l&&pa(n(...l),e)&&t(null,...l)},p=c.teardown;c.teardown=()=>{f(),p==null||p()}}}),e}function Vl(e=!1){const t=je,n=t.l.u;if(!n)return;let r=()=>sr(t.s);if(e){let s=0,i={};const a=ss(()=>{let l=!1;const c=t.s;for(const f in c)c[f]!==i[f]&&(i[f]=c[f],l=!0);return l&&s++,s});r=()=>o(a)}n.b.length&&Zc(()=>{mi(t,r),ma(n.b)}),it(()=>{const s=Mn(()=>n.m.map(nc));return()=>{for(const i of s)typeof i=="function"&&i()}}),n.a.length&&it(()=>{mi(t,r),ma(n.a)})}function mi(e,t){if(e.l.s)for(const n of e.l.s)o(n);t()}function Du(e){var t=Pn(0);return function(){return arguments.length===1?(d(t,o(t)+1),arguments[0]):(o(t),e())}}const Fu={get(e,t){if(!e.exclude.includes(t))return o(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var r=pe;try{Vt(e.parent_effect),e.special[t]=We({get[t](){return e.props[t]}},t,ji)}finally{Vt(r)}}return e.special[t](n),si(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),si(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function se(e,t){return new Proxy({props:e,exclude:t,special:{},version:Pn(0),parent_effect:pe},Fu)}const Hu={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if($s(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let s=e.props[r];$s(s)&&(s=s());const i=Vn(s,t);if(i&&i.set)return i.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if($s(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const s=Vn(r,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===_n||t===Fi)return!1;for(let n of e.props)if($s(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){const t=[];for(let n of e.props)if($s(n)&&(n=n()),!!n){for(const r in n)t.includes(r)||t.push(r);for(const r of Object.getOwnPropertySymbols(n))t.includes(r)||t.push(r)}return t}};function le(...e){return new Proxy({props:e},Hu)}function We(e,t,n,r){var K;var s=!cs||(n&dc)!==0,i=(n&fc)!==0,a=(n&vc)!==0,l=r,c=!0,f=void 0,p=()=>a&&s?(f??(f=ss(r)),o(f)):(c&&(c=!1,l=a?Mn(r):r),l);let y;if(i){var _=_n in e||Fi in e;y=((K=Vn(e,t))==null?void 0:K.set)??(_&&t in e?N=>e[t]=N:void 0)}var k,$=!1;i?[k,$]=Rc(()=>e[t]):k=e[t],k===void 0&&r!==void 0&&(k=p(),y&&(s&&Tc(),y(k)));var w;if(s?w=()=>{var N=e[t];return N===void 0?p():(c=!0,N)}:w=()=>{var N=e[t];return N!==void 0&&(l=void 0),N===void 0?l:N},s&&(n&ji)===0)return w;if(y){var C=e.$$legacy;return(function(N,S){return arguments.length>0?((!s||!S||C||$)&&y(S?w():N),N):w()})}var I=!1,D=((n&uc)!==0?ss:Ba)(()=>(I=!1,w()));i&&o(D);var M=pe;return(function(N,S){if(arguments.length>0){const z=S?o(D):s&&i?Pe(N):N;return d(D,z),I=!0,l!==void 0&&(l=z),N}return zn&&I||(M.f&kt)!==0?D.v:o(D)})}function vs(e){je===null&&Wi(),cs&&je.l!==null?ju(je).m.push(e):it(()=>{const t=Mn(e);if(typeof t=="function")return t})}function Ja(e){je===null&&Wi(),vs(()=>()=>Mn(e))}function ju(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const Bu="5";var Ai;typeof window<"u"&&((Ai=window.__svelte??(window.__svelte={})).v??(Ai.v=new Set)).add(Bu);const or=()=>window.__IDE_BOOTSTRAP__||{};function Vu(e){const{rootPath:t="",session:n=""}=or();return`${t}/api/sessions/${encodeURIComponent(n)}/ide${e}`}async function Ke(e,t={}){const n=await fetch(Vu(e),t),r=await n.json().catch(()=>({}));if(!n.ok){const s=new Error(r.error||"Request failed");throw Object.assign(s,r),s}return r}const Qe=(e,t)=>`/ssh-connections/${encodeURIComponent(e)}${t}`,$e={chat:async(e,t=80)=>{const{rootPath:n=""}=or(),r=`${n}/api/sessions/${encodeURIComponent(e)}/ide/chat?limit=${t}`,s=await fetch(r),i=await s.json().catch(()=>({}));if(!s.ok)throw new Error(i.error||"Could not load chat");return i},browse:async(e="")=>{const{rootPath:t=""}=or(),n=`${t}/api/ide/browse?path=${encodeURIComponent(e)}`,r=await fetch(n),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not browse folders");return s},sessionAgent:async e=>{const{rootPath:t=""}=or(),n=await fetch(`${t}/api/sessions/${encodeURIComponent(e)}/agent`),r=await n.json().catch(()=>({}));if(!n.ok)throw new Error(r.error||"Could not read agent settings");return r},setSessionAgent:async(e,t)=>{const{rootPath:n=""}=or(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/agent`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({agent:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not switch agent");return s},setSessionModel:async(e,t)=>{const{rootPath:n=""}=or(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/model`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change model");return s},setSessionEffort:async(e,t)=>{const{rootPath:n=""}=or(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/effort`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({effort:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change effort");return s},browseOn:(e,t="")=>Ke(Qe(e,`/browse?path=${encodeURIComponent(t)}`)),setWorkspaceRoot:(e,t,n)=>Ke(Qe(e,"/workspace-root"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({workspace_root:t,label:n})}),agentContext:e=>Ke(Qe(e,"/agent-context")),hostKey:e=>Ke(Qe(e,"/host-key")),trustHost:e=>Ke(Qe(e,"/host-key"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({accept:!0})}),listConnections:()=>Ke("/ssh-connections"),createConnection:e=>Ke("/ssh-connections",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),deleteConnection:e=>Ke(Qe(e,""),{method:"DELETE"}),connect:(e,t)=>Ke(Qe(e,"/connect"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t||""})}),status:e=>Ke(Qe(e,"/status?reconnect=1")),listFiles:(e,t)=>Ke(Qe(e,`/files?path=${encodeURIComponent(t)}`)),searchFiles:(e,t,n)=>Ke(Qe(e,`/files/search?path=${encodeURIComponent(t)}&query=${encodeURIComponent(n)}`)),readFile:(e,t)=>Ke(Qe(e,`/file?path=${encodeURIComponent(t)}`)),saveFile:(e,t,n)=>Ke(Qe(e,"/file"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:t,content:n})}),fs:(e,t)=>Ke(Qe(e,"/fs"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),git:(e,t)=>Ke(Qe(e,"/git"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),focusTerminal:e=>Ke(Qe(e,"/focus-terminal"),{method:"POST"}),updateConnection:(e,t)=>Ke(Qe(e,""),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),listTerminals:e=>Ke(Qe(e,"/terminals")),closeTerminal:(e,t)=>Ke(Qe(e,`/terminals/${t}`),{method:"DELETE"}),getWorkspace:e=>Ke(Qe(e,"/workspace")),saveWorkspace:(e,t)=>Ke(Qe(e,"/workspace"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})};var Ys,Js,Xs,Zs,Qs,eo,to,no,ro,so,oo,ao,io,lo,co,uo,fo,vo,po,ho,_o,go,mo,bo;class Ku{constructor(){W(this,Ys,O(Pe([])));W(this,Js,O(""));W(this,Xs,O("idle"));W(this,Zs,O("Ready"));W(this,Qs,O("No file open"));W(this,eo,O("."));W(this,to,O(Pe([])));W(this,no,O(Pe({})));W(this,ro,O(Pe({})));W(this,so,O(""));W(this,oo,O(Pe([])));W(this,ao,O(""));W(this,io,O(""));W(this,lo,O(""));W(this,co,O(Pe([])));W(this,uo,O(""));W(this,fo,O(!1));W(this,vo,O(!1));W(this,po,O(0));W(this,ho,O(0));W(this,_o,O(!1));W(this,go,O(""));W(this,mo,O(Pe([])));W(this,bo,O(!1));ft(this,"restoredKey","");ft(this,"persistTimer",null)}get connections(){return o(u(this,Ys))}set connections(t){d(u(this,Ys),t,!0)}get connectionId(){return o(u(this,Js))}set connectionId(t){d(u(this,Js),t,!0)}get connectionState(){return o(u(this,Xs))}set connectionState(t){d(u(this,Xs),t,!0)}get statusText(){return o(u(this,Zs))}set statusText(t){d(u(this,Zs),t,!0)}get detailText(){return o(u(this,Qs))}set detailText(t){d(u(this,Qs),t,!0)}get path(){return o(u(this,eo))}set path(t){d(u(this,eo),t,!0)}get entries(){return o(u(this,to))}set entries(t){d(u(this,to),t,!0)}get expanded(){return o(u(this,no))}set expanded(t){d(u(this,no),t,!0)}get treeChildren(){return o(u(this,ro))}set treeChildren(t){d(u(this,ro),t,!0)}get filter(){return o(u(this,so))}set filter(t){d(u(this,so),t,!0)}get tabs(){return o(u(this,oo))}set tabs(t){d(u(this,oo),t,!0)}get activeKey(){return o(u(this,ao))}set activeKey(t){d(u(this,ao),t,!0)}get gitOutput(){return o(u(this,io))}set gitOutput(t){d(u(this,io),t,!0)}get gitStatus(){return o(u(this,lo))}set gitStatus(t){d(u(this,lo),t,!0)}get gitBranches(){return o(u(this,co))}set gitBranches(t){d(u(this,co),t,!0)}get gitBranch(){return o(u(this,uo))}set gitBranch(t){d(u(this,uo),t,!0)}get needsHostKey(){return o(u(this,fo))}set needsHostKey(t){d(u(this,fo),t,!0)}get notARepo(){return o(u(this,vo))}set notARepo(t){d(u(this,vo),t,!0)}get gitAhead(){return o(u(this,po))}set gitAhead(t){d(u(this,po),t,!0)}get gitBehind(){return o(u(this,ho))}set gitBehind(t){d(u(this,ho),t,!0)}get gitHasUpstream(){return o(u(this,_o))}set gitHasUpstream(t){d(u(this,_o),t,!0)}get gitBusy(){return o(u(this,go))}set gitBusy(t){d(u(this,go),t,!0)}get gitCommits(){return o(u(this,mo))}set gitCommits(t){d(u(this,mo),t,!0)}get gitHistoryLoaded(){return o(u(this,bo))}set gitHistoryLoaded(t){d(u(this,bo),t,!0)}get connection(){return this.connections.find(t=>t.id===this.connectionId)||null}get activeTab(){return this.tabs.find(t=>t.key===this.activeKey)||null}get visibleEntries(){const t=this.filter.trim().toLowerCase();return t?this.entries.filter(n=>n.name.toLowerCase().includes(t)):this.entries}get dirtyCount(){return this.tabs.filter(t=>t.dirty).length}get gitDirtyCount(){return this.gitStatus.split(`
`).filter(t=>t.trim()&&!t.startsWith("##")).length}resetWorkspaceView(){this.tabs=[],this.activeKey="",this.restoredKey="",this.path=".",this.entries=[],this.expanded={},this.treeChildren={},this.filter="",this.gitOutput="",this.gitStatus="",this.gitBranches=[],this.gitBranch="",this.needsHostKey=!1,this.notARepo=!1,this.gitAhead=0,this.gitBehind=0,this.gitHasUpstream=!1,this.gitCommits=[],this.gitHistoryLoaded=!1}setStatus(t,n){this.statusText=t,n!==void 0&&(this.detailText=n)}async loadConnections(){try{const t=await $e.listConnections();this.connections=t.connections||[],!this.connectionId&&this.connections.length&&(this.connectionId=this.connections[0].id)}catch(t){this.setStatus(t.message||"Could not load connections")}}async refreshStatus(){var t,n,r;if(this.connectionId)try{const s=await $e.status(this.connectionId);s.connected?(this.connectionState="connected",this.setStatus(`Connected · ${((t=this.connection)==null?void 0:t.label)||"SSH workspace"}`,`SSH terminal: ${s.window_name||"open"}`),await this.restoreWorkspace()):(this.connectionState="reconnect",this.entries=[],this.setStatus(`Reconnect required · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,(r=this.connection)!=null&&r.has_password?"Auto-reconnect failed — select Connect to retry":"Select Connect to reopen SSH"))}catch(s){this.connectionState="error",this.setStatus(s.message||"Could not check SSH connection")}}async connect(t){var n;if(this.connectionId){this.connectionState="connecting",this.setStatus("Connecting…");try{const r=await $e.connect(this.connectionId,t);this.connectionState="connected",this.setStatus(`Connected · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,`SSH terminal: ${r.window_name||"open"}`),await this.restoreWorkspace()}catch(r){this.connectionState="error",this.setStatus(r.message||"Could not connect"),this.needsHostKey=!!r.needs_host_key}}}async refreshFiles(t){if(!this.connectionId)return;const n=t||this.path||".";try{const r=await $e.listFiles(this.connectionId,n);this.path=r.path||n,this.entries=r.entries||[],this.remember()}catch(r){this.setStatus(r.message||"Could not list remote files")}}async toggleDirectory(t){if(this.expanded[t]){const n={...this.expanded};delete n[t],this.expanded=n;return}if(this.expanded={...this.expanded,[t]:!0},!this.treeChildren[t])try{const n=await $e.listFiles(this.connectionId,t);this.treeChildren={...this.treeChildren,[t]:n.entries||[]}}catch(n){this.setStatus(n.message||"Could not expand folder")}}openDiffTab(t,n){const r=`${this.connectionId}|diff:${t}`,s=this.tabs.find(a=>a.key===r);if(s)return s.content=n,s.saved=n,this.activeKey=r,s;const i={key:r,path:`${t} (diff)`,content:n,saved:n,dirty:!1,readOnly:!0,language:"plaintext"};return this.tabs=[...this.tabs,i],this.activeKey=r,i}async openFile(t){if(!this.connectionId)return null;const n=`${this.connectionId}|${t}`,r=this.tabs.find(s=>s.key===n);if(r)return this.activeKey=n,r;try{const s=await $e.readFile(this.connectionId,t),i={key:`${this.connectionId}|${s.path}`,path:s.path,content:s.content||"",saved:s.content||"",dirty:!1};return this.tabs=[...this.tabs,i],this.activeKey=i.key,this.setStatus("Opened",i.path),this.remember(),i}catch(s){return this.setStatus(s.message||"Could not open remote file"),null}}updateContent(t,n){this.tabs=this.tabs.map(r=>r.key===t?{...r,content:n,dirty:n!==r.saved}:r),this.remember()}closeTab(t){var r;const n=this.tabs.find(s=>s.key===t);n!=null&&n.dirty&&!confirm(`Discard unsaved changes to ${n.path}?`)||(this.tabs=this.tabs.filter(s=>s.key!==t),this.activeKey===t&&(this.activeKey=((r=this.tabs.at(-1))==null?void 0:r.key)||""),this.remember())}async saveActive(){const t=this.activeTab;if(t)try{await $e.saveFile(this.connectionId,t.path,t.content),this.tabs=this.tabs.map(n=>n.key===t.key?{...n,saved:n.content,dirty:!1}:n),this.setStatus(`Saved ${t.path}`,t.path),this.remember()}catch(n){this.setStatus(n.message||"Could not save file")}}async restoreWorkspace(){const t=`${this.connectionId}`;if(!t)return;let n=null;try{n=await $e.getWorkspace(this.connectionId)}catch{n=null}if(await this.refreshFiles((n==null?void 0:n.last_directory)||"."),this.restoredKey===t)return;this.restoredKey=t;const r=(n==null?void 0:n.buffers)||{};for(const i of((n==null?void 0:n.tabs)||[]).slice(0,12)){const a=await this.openFile(i);a&&Object.prototype.hasOwnProperty.call(r,i)&&this.updateContent(a.key,r[i])}const s=this.tabs.find(i=>i.path===(n==null?void 0:n.active_path));s&&(this.activeKey=s.key)}remember(){this.persistTimer&&clearTimeout(this.persistTimer),this.persistTimer=setTimeout(()=>this.persist(),1500)}async persist(){var n;if(!this.connectionId)return;const t={};for(const r of this.tabs)r.dirty&&(t[r.path]=r.content);try{await $e.saveWorkspace(this.connectionId,{tabs:this.tabs.map(r=>r.path).slice(0,50),active_path:((n=this.activeTab)==null?void 0:n.path)||"",last_directory:this.path||".",buffers:t})}catch{}}async runGit(t,n={}){try{const r=await $e.git(this.connectionId,{action:t,path:this.path||".",...n});return r.not_a_repo?(this.gitOutput=r.error||"This folder is not a Git repository.",this.gitStatus="",this.gitBranches=[],this.gitBranch="",this.gitCommits=[],this.gitHistoryLoaded=!1,this.notARepo=!0,null):(this.notARepo=!1,this.gitAhead=r.ahead||0,this.gitBehind=r.behind||0,this.gitHasUpstream=!!r.has_upstream,t==="log"?(this.gitCommits=r.commits||[],this.gitHistoryLoaded=!0):t!=="show"&&(this.gitOutput=r.output||r.status||""),this.gitStatus=r.status||"",this.gitBranches=r.branches||[],this.gitBranch=r.current_branch||"",["commit","switch","create_branch","pull","push","fetch"].includes(t)&&(this.gitHistoryLoaded=!1),r)}catch(r){return this.gitOutput=r.message||"Git command failed",null}}}Ys=new WeakMap,Js=new WeakMap,Xs=new WeakMap,Zs=new WeakMap,Qs=new WeakMap,eo=new WeakMap,to=new WeakMap,no=new WeakMap,ro=new WeakMap,so=new WeakMap,oo=new WeakMap,ao=new WeakMap,io=new WeakMap,lo=new WeakMap,co=new WeakMap,uo=new WeakMap,fo=new WeakMap,vo=new WeakMap,po=new WeakMap,ho=new WeakMap,_o=new WeakMap,go=new WeakMap,mo=new WeakMap,bo=new WeakMap;const h=new Ku;Ac();/**
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
 */const Uu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const Wu=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
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
 */const bi=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();var qu=Ml("<svg><!><!></svg>");function ce(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]),r=se(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);gt(t,!1);let s=We(t,"name",8,void 0),i=We(t,"color",8,"currentColor"),a=We(t,"size",8,24),l=We(t,"strokeWidth",8,2),c=We(t,"absoluteStrokeWidth",8,!1),f=We(t,"iconNode",24,()=>[]);Vl();var p=qu();_i(p,(k,$,w)=>({...Uu,...k,...r,width:a(),height:a(),stroke:i(),"stroke-width":$,class:w}),[()=>Wu(r)?void 0:{"aria-hidden":"true"},()=>(sr(c()),sr(l()),sr(a()),Mn(()=>c()?Number(l())*24/Number(a()):l())),()=>(sr(bi),sr(s()),sr(n),Mn(()=>bi("lucide-icon","lucide",s()?`lucide-${s()}`:"",n.class)))]);var y=b(p);Je(y,1,f,Al,(k,$)=>{var w=at(()=>rc(o($),2));let C=()=>o(w)[0],I=()=>o(w)[1];var D=Q(),M=j(D);Nu(M,C,!0,(K,N)=>{_i(K,()=>({...I()}))}),m(k,D)});var _=v(y);oe(_,t,"default",{}),m(e,p),mt()}function Gu(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"m21 8-4-4-4 4"}],["path",{d:"M17 4v16"}]];ce(e,le({name:"arrow-down-up"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Yu(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];ce(e,le({name:"arrow-up"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Ao(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M20 6 9 17l-5-5"}]];ce(e,le({name:"check"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function hn(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];ce(e,le({name:"chevron-down"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Io(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m9 18 6-6-6-6"}]];ce(e,le({name:"chevron-right"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function xi(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];ce(e,le({name:"circle-alert"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Ju(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ce(e,le({name:"circle-check"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Xu(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]];ce(e,le({name:"circle-dot"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Zu(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]];ce(e,le({name:"circle-user"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Qu(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];ce(e,le({name:"circle"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ed(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}],["path",{d:"m9 10-5 5 5 5"}]];ce(e,le({name:"corner-down-left"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function td(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]];ce(e,le({name:"corner-left-up"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function nd(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]];ce(e,le({name:"ellipsis"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function rd(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];ce(e,le({name:"external-link"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function yi(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m5 16-3 3 3 3"}],["path",{d:"m9 22 3-3-3-3"}]];ce(e,le({name:"file-code-corner"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function sd(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]];ce(e,le({name:"file-diff"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function od(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]];ce(e,le({name:"file-plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Xa(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}]];ce(e,le({name:"file"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ad(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"}]];ce(e,le({name:"files"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ha(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];ce(e,le({name:"folder-open"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function id(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];ce(e,le({name:"folder-plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ld(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];ce(e,le({name:"folder"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Aa(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M15 6a9 9 0 0 0-9 9V3"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}]];ce(e,le({name:"git-branch"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function cd(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M10 16h.01"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["path",{d:"M21.946 12.013H2.054"}],["path",{d:"M6 16h.01"}]];ce(e,le({name:"hard-drive"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ud(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];ce(e,le({name:"history"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function dd(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];ce(e,le({name:"link-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function en(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]];ce(e,le({name:"loader"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function wi(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}]];ce(e,le({name:"message-square"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function fd(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m14 10 7-7"}],["path",{d:"M20 10h-6V4"}],["path",{d:"m3 21 7-7"}],["path",{d:"M4 14h6v6"}]];ce(e,le({name:"minimize-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function vd(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M5 12h14"}]];ce(e,le({name:"minus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function pd(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{d:"M10 19v-3.96 3.15"}],["path",{d:"M7 19h5"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2"}]];ce(e,le({name:"monitor-smartphone"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function hd(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}]];ce(e,le({name:"panel-bottom"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function _d(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]];ce(e,le({name:"panel-left"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Fs(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];ce(e,le({name:"plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Ia(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ce(e,le({name:"refresh-cw"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Za(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ce(e,le({name:"search"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ki(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];ce(e,le({name:"server"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function $i(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M14 17H5"}],["path",{d:"M19 7h-9"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]];ce(e,le({name:"settings-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function gd(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]];ce(e,le({name:"shield-alert"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function _a(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];ce(e,le({name:"sparkles"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Si(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]];ce(e,le({name:"square-terminal"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function md(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];ce(e,le({name:"square"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Ci(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];ce(e,le({name:"trash-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function bd(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]];ce(e,le({name:"undo-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Vo(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ce(e,le({name:"x"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);oe(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}var xd=P('<span class="w-[14px] shrink-0"></span>'),yd=Ml('<svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1.5 3.5h4l1.2 1.4h7.8v7.6H1.5z" fill="#c09553"></path></svg>'),wd=P('<div role="treeitem" tabindex="0"><!> <span class="flex shrink-0 items-center"><!></span> <span class="flex-1 truncate text-vs-fg"> </span> <span class="hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Rename"><span class="text-[11px] leading-none">✎</span></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Delete"><span class="text-[11px] leading-none">🗑</span></button></span></div> <!>',1);function Kl(e,t){gt(t,!0);const n=at(()=>t.dir==="."?t.entry.name:`${t.dir}/${t.entry.name}`),r=at(()=>!!h.expanded[o(n)]),s=at(()=>h.treeChildren[o(n)]||[]),i=at(()=>{var F;return((F=h.activeTab)==null?void 0:F.path)===o(n)});async function a(){t.entry.is_dir?await h.toggleDirectory(o(n)):await h.openFile(o(n))}async function l(F){if(F.stopPropagation(),!!confirm(`Delete ${o(n)}? Folders must already be empty.`))try{await $e.fs(h.connectionId,{action:"delete",path:o(n)}),await h.refreshFiles()}catch(B){h.setStatus(B.message||"Could not delete")}}async function c(F){F.stopPropagation();const B=prompt("Rename to (relative path):",o(n));if(!(!B||B===o(n)))try{await $e.fs(h.connectionId,{action:"rename",path:o(n),new_path:B}),await h.refreshFiles()}catch(he){h.setStatus(he.message||"Could not rename")}}var f=wd(),p=j(f);let y;var _=b(p);{var k=F=>{var B=Q(),he=j(B);{var ye=Oe=>{hn(Oe,{size:14,class:"shrink-0 text-vs-muted"})},qe=Oe=>{Io(Oe,{size:14,class:"shrink-0 text-vs-muted"})};H(he,Oe=>{o(r)?Oe(ye):Oe(qe,-1)})}m(F,B)},$=F=>{var B=xd();m(F,B)};H(_,F=>{t.entry.is_dir?F(k):F($,-1)})}var w=v(_,2),C=b(w);{var I=F=>{var B=yd();m(F,B)},D=F=>{dd(F,{size:14,class:"text-vs-muted"})},M=F=>{Xa(F,{size:14,class:"text-vs-blue"})};H(C,F=>{t.entry.is_dir?F(I):t.entry.is_symlink?F(D,1):F(M,-1)})}var K=v(w,2),N=Z(K,!0),S=v(K,2),z=b(S),G=v(z,2),Y=v(p,2);{var J=F=>{var B=Q(),he=j(B);Je(he,17,()=>o(s),ye=>ye.name,(ye,qe)=>{{let Oe=at(()=>t.depth+1);Kl(ye,{get entry(){return o(qe)},get dir(){return o(n)},get depth(){return o(Oe)}})}}),m(F,B)};H(Y,F=>{t.entry.is_dir&&o(r)&&F(J)})}q(()=>{y=ht(p,1,"group flex cursor-pointer items-center gap-1 py-[2px] pr-1 text-[13px] hover:bg-vs-hover",null,y,{"bg-vs-active":o(i)}),qr(p,`padding-left: ${8+t.depth*12}px`),me(p,"aria-expanded",t.entry.is_dir?o(r):void 0),me(p,"aria-selected",o(i)),me(p,"title",o(n)),V(N,t.entry.name),me(z,"aria-label",`Rename ${t.entry.name??""}`),me(G,"aria-label",`Delete ${t.entry.name??""}`)}),L("click",p,a),L("keydown",p,F=>{(F.key==="Enter"||F.key===" ")&&(F.preventDefault(),a())}),L("click",z,c),L("click",G,l),m(e,f),mt()}Kt(["click","keydown"]);var kd=P('<form class="px-2 pb-1"><input class="w-full rounded-sm border border-vs-accent bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none"/></form>'),$d=P('<p class="px-4 py-2 text-xs text-vs-muted">No folder opened.</p>'),Sd=P('<p class="px-4 py-2 text-xs text-vs-muted">No files here</p>'),Cd=P('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-vs-fg uppercase"><span class="flex-1 truncate">Explorer</span></div> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold text-vs-fg uppercase"><!> <span class="flex-1 truncate"> </span> <span class="flex opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-1 hover:bg-vs-hover" title="New file" aria-label="New file"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="New folder" aria-label="New folder"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="Refresh" aria-label="Refresh"><!></button></span></div> <!> <input class="mx-2 mb-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none focus:border-vs-accent" placeholder="Filter files…"/> <div class="min-h-0 flex-1 overflow-y-auto pb-2"><!></div></div>');function Ed(e,t){gt(t,!0);let n=O(""),r=O("");const s=(J,F)=>J==="."?F:`${J}/${F}`;async function i(J){J.preventDefault();const F=o(r).trim();if(F)try{await $e.fs(h.connectionId,{action:o(n)==="dir"?"create_dir":"create_file",path:s(h.path,F)}),d(n,""),d(r,""),await h.refreshFiles()}catch(B){h.setStatus(B.message||"Could not create")}}const a=at(()=>{var J,F;return(((J=h.connection)==null?void 0:J.workspace_root)||"").split("/").filter(Boolean).pop()||((F=h.connection)==null?void 0:F.label)||"WORKSPACE"});var l=Cd(),c=v(b(l),2),f=b(c);hn(f,{size:14,class:"shrink-0 text-vs-muted"});var p=v(f,2),y=Z(p,!0),_=v(p,2),k=b(_),$=b(k);od($,{size:14});var w=v(k,2),C=b(w);id(C,{size:14});var I=v(w,2),D=b(I);Ia(D,{size:13});var M=v(c,2);{var K=J=>{var F=kd(),B=b(F);Ji(B,!0),q(()=>me(B,"placeholder",o(n)==="dir"?"New folder name":"New file name")),Wn("submit",F,i),L("keydown",B,he=>{he.key==="Escape"&&d(n,"")}),Wn("blur",B,()=>{o(r).trim()||d(n,"")}),Be(B,()=>o(r),he=>d(r,he)),m(J,F)};H(M,J=>{o(n)&&J(K)})}var N=v(M,2),S=v(N,2),z=b(S);{var G=J=>{var F=$d();m(J,F)},Y=J=>{var F=Q(),B=j(F);Je(B,17,()=>h.visibleEntries,he=>he.name,(he,ye)=>{Kl(he,{get entry(){return o(ye)},get dir(){return h.path},depth:0})},he=>{var ye=Sd();m(he,ye)}),m(J,F)};H(z,J=>{h.connectionId?J(Y,-1):J(G)})}q(()=>{var J;me(p,"title",(J=h.connection)==null?void 0:J.workspace_root),V(y,o(a))}),L("click",k,()=>{d(n,"file"),d(r,"")}),L("click",w,()=>{d(n,"dir"),d(r,"")}),L("click",I,()=>h.refreshFiles()),Be(N,()=>h.filter,J=>h.filter=J),m(e,l),mt()}Kt(["click","keydown"]);var Td=P('<div class="absolute top-full right-0 z-20 mt-1 min-w-[170px] rounded-md border border-vs-line bg-vs-panel py-1 shadow-2xl"><button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Fetch</button> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Pull</button> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Push</button> <div class="my-1 h-px bg-vs-line"></div> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Create Branch…</button></div>'),Nd=P('<p class="mx-3 flex items-center gap-1.5 text-xs text-vs-muted"><!> Reading repository…</p>'),Pd=P(`<p class="mx-3 text-xs leading-relaxed text-vs-muted">This folder isn't a Git repository.<br/> Open a folder containing a <code class="rounded-sm bg-vs-input px-1">.git</code> directory,
      or run <code class="rounded-sm bg-vs-input px-1">git init</code> in the terminal.</p>`),zd=P('<div class="group flex cursor-pointer items-center gap-1.5 py-[2px] pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><span class="truncate text-vs-fg"> </span> <span class="truncate text-[11px] text-vs-muted"> </span> <span class="ml-auto hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Unstage"><!></button></span> <span> </span></div>'),Md=P('<div class="flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <span class="truncate">Staged Changes</span></button> <span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span></div> <!>',1),Ad=P('<div class="group flex cursor-pointer items-center gap-1.5 py-[2px] pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><span class="truncate text-vs-fg"> </span> <span class="truncate text-[11px] text-vs-muted"> </span> <span class="ml-auto hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Open changes"><!></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Discard changes"><!></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Stage changes"><!></button></span> <span> </span></div>'),Id=P('<p class="px-6 py-2 text-xs text-vs-muted">No changes.</p>'),Od=P('<div class="min-h-0 flex-1 overflow-y-auto"></div>'),Rd=P('<span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span>'),Ld=P('<span class="flex shrink-0 opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-0.5 hover:bg-vs-line" title="Refresh history" aria-label="Refresh history"><!></button></span> <!>',1),Dd=P('<span class="shrink-0 rounded-sm bg-vs-line px-1 text-[10px] text-vs-blue"> </span>'),Fd=P('<div class="group flex cursor-pointer flex-col gap-0.5 py-1 pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><div class="flex min-w-0 items-center gap-1.5"><span class="truncate text-vs-fg"> </span> <!></div> <div class="flex min-w-0 items-center gap-1.5 text-[11px] text-vs-muted"><span class="shrink-0 font-mono text-vs-yellow"> </span> <span class="truncate"> </span> <span class="ml-auto shrink-0"> </span></div></div>'),Hd=P('<p class="px-6 py-2 text-xs text-vs-muted"> </p>'),jd=P('<div class="max-h-[45%] min-h-0 flex-1 overflow-y-auto"></div>'),Bd=P('<button class="flex items-center gap-1 rounded-sm px-1 text-vs-muted hover:bg-vs-hover hover:text-vs-fg" title="Pull then push"><!> </button>'),Vd=P('<div class="flex gap-1 border-t border-vs-line px-3 py-2"><input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="New branch name"/> <button class="rounded-sm bg-vs-status px-2 py-1 text-xs text-white">Create</button></div>'),Kd=P('<pre class="max-h-[120px] shrink-0 overflow-auto border-t border-vs-line px-3 py-1.5 text-[11px] whitespace-pre-wrap text-vs-muted"> </pre>'),Ud=P('<div class="px-3 pb-2"><textarea class="w-full resize-none rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs text-vs-fg outline-none focus:border-vs-accent placeholder:text-vs-muted" rows="2"></textarea> <button class="mt-1 flex w-full items-center justify-center gap-1.5 rounded-sm bg-vs-status px-2 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"><!> Commit</button></div> <!> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <span class="truncate">Changes</span></button> <span class="flex shrink-0 opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-0.5 hover:bg-vs-line" title="Refresh" aria-label="Refresh"><!></button> <button class="rounded-sm p-0.5 hover:bg-vs-line" title="Stage all changes" aria-label="Stage all"><!></button></span> <span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span></div> <!> <div class="group flex shrink-0 items-center gap-1 border-t border-vs-line px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <!> <span class="truncate">History</span></button> <!></div> <!> <div class="mt-auto flex items-center gap-2 border-t border-vs-line px-3 py-1.5 text-[11px]"><span class="flex min-w-0 items-center gap-1 text-vs-muted" title="Current branch"><!> <span class="truncate"> </span></span> <!></div> <!> <!>',1),Wd=P('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase"><span class="flex-1">Source Control</span> <div class="relative" data-scm-menu=""><button class="rounded-sm p-0.5 hover:bg-vs-hover" title="More actions" aria-label="More actions"><!></button> <!></div></div> <!></div>');function qd(e,t){gt(t,!0);let n=O(""),r=O(""),s=O(!1),i=O(!0),a=O(!0),l=O(!1),c=O(!1);const f=at(()=>(h.gitStatus||"").split(`
`).filter(T=>T&&!T.startsWith("##")).map(T=>{const ae=T.slice(3),Me=ae.indexOf(" -> "),Ve=Me===-1?ae:ae.slice(Me+4);return{index:T[0]===" "?"":T[0],work:T[1]===" "?"":T[1],code:T.slice(0,2).trim()||"??",path:Ve.replace(/\r$/,""),from:Me===-1?"":ae.slice(0,Me)}}).filter(T=>T.path)),p=at(()=>o(f).filter(T=>T.index&&T.index!=="?")),y=at(()=>o(f).filter(T=>T.work&&T.work!==" ")),_=T=>T.includes("?")||T.includes("A")?"text-vs-green":T.includes("D")?"text-vs-red":T.includes("R")?"text-vs-blue":"text-vs-yellow",k=T=>T.split("/").pop(),$=T=>{const ae=T.split("/");return ae.pop(),ae.join("/")};async function w(T,ae={}){h.gitBusy=T;try{return await h.runGit(T,ae)}finally{h.gitBusy=""}}async function C(){if(!o(n).trim()||!o(p).length)return;await w("commit",{message:o(n).trim()})&&d(n,"")}async function I(){if(!o(r).trim())return;await w("create_branch",{branch:o(r).trim()})&&(d(r,""),d(s,!1))}async function D(T){confirm(`Discard changes in ${T.path}? This cannot be undone.`)&&await w("discard",{files:[T.path]})}async function M(T){const ae=await h.runGit("diff_file",{files:[T.path]});ae&&h.openDiffTab(T.path,ae.output||"No changes to show.")}let K=O("");it(()=>{const T=h.connectionId,ae=h.connectionState,Me=T?`${T}|${ae}`:"";!T||ae!=="connected"||o(K)!==Me&&(d(K,Me,!0),w("status"))});async function N(){d(l,!o(l)),o(l)&&!h.gitHistoryLoaded&&await w("log")}it(()=>{o(l)&&!h.gitHistoryLoaded&&!h.notARepo&&!h.gitBusy&&w("log")});async function S(T){const ae=await h.runGit("show",{ref:T.hash});ae&&h.openDiffTab(`${T.short} ${T.subject}`,ae.output||"Empty commit.")}const z=T=>(T||"").split(",").map(ae=>ae.trim().replace(/^HEAD -> /,"")).filter(Boolean);function G(T){T.key==="Enter"&&(T.ctrlKey||T.metaKey)&&(T.preventDefault(),C())}var Y=Wd();Wn("click",Hs,T=>{var ae,Me;(Me=(ae=T.target).closest)!=null&&Me.call(ae,"[data-scm-menu]")||d(c,!1)});var J=b(Y),F=v(b(J),2),B=b(F),he=b(B);nd(he,{size:14});var ye=v(B,2);{var qe=T=>{var ae=Td(),Me=b(ae),Ve=v(Me,2),ut=v(Ve,2),rn=v(ut,4);L("click",Me,()=>{d(c,!1),w("fetch")}),L("click",Ve,()=>{d(c,!1),w("pull")}),L("click",ut,()=>{d(c,!1),w("push")}),L("click",rn,()=>{d(c,!1),d(s,!o(s))}),m(T,ae)};H(ye,T=>{o(c)&&T(qe)})}var Oe=v(J,2);{var Xe=T=>{var ae=Nd(),Me=b(ae);en(Me,{size:12,class:"animate-spin"}),m(T,ae)},re=T=>{var ae=Pd();m(T,ae)},ue=T=>{var ae=Ud(),Me=j(ae),Ve=b(Me),ut=v(Ve,2),rn=b(ut);{var Ae=X=>{en(X,{size:12,class:"animate-spin"})},xn=X=>{Ao(X,{size:12})};H(rn,X=>{h.gitBusy==="commit"?X(Ae):X(xn,-1)})}var An=v(Me,2);{var Gn=X=>{var Re=Md(),Ee=j(Re),ie=b(Ee),Ne=b(ie);{var st=U=>{hn(U,{size:14,class:"text-vs-muted"})},Ze=U=>{Io(U,{size:14,class:"text-vs-muted"})};H(Ne,U=>{o(a)?U(st):U(Ze,-1)})}var Pt=v(ie,2),zt=Z(Pt,!0),x=v(Ee,2);{var A=U=>{var ne=Q(),_e=j(ne);Je(_e,17,()=>o(p),ve=>ve.path,(ve,ge)=>{var Se=zd(),Le=b(Se),g=Z(Le,!0),E=v(Le,2),R=Z(E,!0),te=v(E,2),fe=b(te),we=b(fe);vd(we,{size:13});var Te=v(te,2),ke=Z(Te,!0);q((De,Ce,on)=>{me(Se,"title",o(ge).path),V(g,De),V(R,Ce),me(fe,"aria-label",`Unstage ${o(ge).path??""}`),ht(Te,1,`shrink-0 font-mono text-[11px] ${on??""}`),V(ke,o(ge).index||o(ge).code)},[()=>k(o(ge).path),()=>$(o(ge).path),()=>_(o(ge).code)]),L("click",Se,()=>M(o(ge))),L("keydown",Se,De=>{De.key==="Enter"&&M(o(ge))}),L("click",fe,De=>{De.stopPropagation(),w("unstage",{files:[o(ge).path]})}),m(ve,Se)}),m(U,ne)};H(x,U=>{o(a)&&U(A)})}q(()=>V(zt,o(p).length)),L("click",ie,()=>d(a,!o(a))),m(X,Re)};H(An,X=>{o(p).length&&X(Gn)})}var mr=v(An,2),yn=b(mr),br=b(yn);{var xr=X=>{hn(X,{size:14,class:"text-vs-muted"})},yr=X=>{Io(X,{size:14,class:"text-vs-muted"})};H(br,X=>{o(i)?X(xr):X(yr,-1)})}var Yn=v(yn,2),sn=b(Yn),$t=b(sn);Ia($t,{size:12});var In=v(sn,2),ps=b(In);Fs(ps,{size:13});var On=v(Yn,2),wr=Z(On,!0),Jn=v(mr,2);{var kr=X=>{var Re=Od();Je(Re,21,()=>o(y),Ee=>Ee.path,(Ee,ie)=>{var Ne=Ad(),st=b(Ne),Ze=Z(st,!0),Pt=v(st,2),zt=Z(Pt,!0),x=v(Pt,2),A=b(x),U=b(A);sd(U,{size:13});var ne=v(A,2),_e=b(ne);bd(_e,{size:13});var ve=v(ne,2),ge=b(ve);Fs(ge,{size:13});var Se=v(x,2),Le=Z(Se,!0);q((g,E,R)=>{me(Ne,"title",o(ie).path),V(Ze,g),V(zt,E),me(A,"aria-label",`Open changes to ${o(ie).path??""}`),me(ne,"aria-label",`Discard changes to ${o(ie).path??""}`),me(ve,"aria-label",`Stage ${o(ie).path??""}`),ht(Se,1,`shrink-0 font-mono text-[11px] ${R??""}`),V(Le,o(ie).work||o(ie).code)},[()=>k(o(ie).path),()=>$(o(ie).path),()=>_(o(ie).code)]),L("click",Ne,()=>M(o(ie))),L("keydown",Ne,g=>{g.key==="Enter"&&M(o(ie))}),L("click",A,g=>{g.stopPropagation(),M(o(ie))}),L("click",ne,g=>{g.stopPropagation(),D(o(ie))}),L("click",ve,g=>{g.stopPropagation(),w("stage",{files:[o(ie).path]})}),m(Ee,Ne)},Ee=>{var ie=Id();m(Ee,ie)}),m(X,Re)};H(Jn,X=>{o(i)&&X(kr)})}var $r=v(Jn,2),wn=b($r),Xn=b(wn);{var Zn=X=>{hn(X,{size:14,class:"text-vs-muted"})},Sr=X=>{Io(X,{size:14,class:"text-vs-muted"})};H(Xn,X=>{o(l)?X(Zn):X(Sr,-1)})}var Qn=v(Xn,2);ud(Qn,{size:12,class:"shrink-0 text-vs-muted"});var hs=v(wn,2);{var Cr=X=>{var Re=Ld(),Ee=j(Re),ie=b(Ee),Ne=b(ie);{var st=x=>{en(x,{size:12,class:"animate-spin"})},Ze=x=>{Ia(x,{size:12})};H(Ne,x=>{h.gitBusy==="log"?x(st):x(Ze,-1)})}var Pt=v(Ee,2);{var zt=x=>{var A=Rd(),U=Z(A,!0);q(()=>V(U,h.gitCommits.length)),m(x,A)};H(Pt,x=>{h.gitCommits.length&&x(zt)})}L("click",ie,()=>w("log")),m(X,Re)};H(hs,X=>{o(l)&&X(Cr)})}var Er=v($r,2);{var Tr=X=>{var Re=jd();Je(Re,21,()=>h.gitCommits,Ee=>Ee.hash,(Ee,ie)=>{var Ne=Fd(),st=b(Ne),Ze=b(st),Pt=Z(Ze,!0),zt=v(Ze,2);Je(zt,17,()=>z(o(ie).refs),Al,(Se,Le)=>{var g=Dd(),E=Z(g,!0);q(()=>V(E,o(Le))),m(Se,g)});var x=v(st,2),A=b(x),U=Z(A,!0),ne=v(A,2),_e=Z(ne,!0),ve=v(ne,2),ge=Z(ve,!0);q(()=>{me(Ne,"title",`${o(ie).short} · ${o(ie).author} · ${o(ie).date}`),V(Pt,o(ie).subject),V(U,o(ie).short),V(_e,o(ie).author),V(ge,o(ie).relative)}),L("click",Ne,()=>S(o(ie))),L("keydown",Ne,Se=>{Se.key==="Enter"&&S(o(ie))}),m(Ee,Ne)},Ee=>{var ie=Hd(),Ne=Z(ie,!0);q(()=>V(Ne,h.gitBusy==="log"?"Loading history…":"No commits yet.")),m(Ee,ie)}),m(X,Re)};H(Er,X=>{o(l)&&X(Tr)})}var Nr=v(Er,2),Ut=b(Nr),Pr=b(Ut);Aa(Pr,{size:12,class:"shrink-0"});var zr=v(Pr,2),er=Z(zr,!0),Mr=v(Ut,2);{var _s=X=>{var Re=Bd(),Ee=b(Re);{var ie=Ze=>{en(Ze,{size:11,class:"animate-spin"})},Ne=Ze=>{Gu(Ze,{size:11})};H(Ee,Ze=>{h.gitBusy==="pull"||h.gitBusy==="push"?Ze(ie):Ze(Ne,-1)})}var st=v(Ee);q(()=>V(st,` ${h.gitBehind??""}↓ ${h.gitAhead??""}↑`)),L("click",Re,()=>w("pull").then(()=>w("push"))),m(X,Re)};H(Mr,X=>{h.gitHasUpstream&&X(_s)})}var tr=v(Nr,2);{var Ar=X=>{var Re=Vd(),Ee=b(Re),ie=v(Ee,2);L("keydown",Ee,Ne=>{Ne.key==="Enter"&&I(),Ne.key==="Escape"&&d(s,!1)}),Be(Ee,()=>o(r),Ne=>d(r,Ne)),L("click",ie,I),m(X,Re)};H(tr,X=>{o(s)&&X(Ar)})}var Ir=v(tr,2);{var Or=X=>{var Re=Kd(),Ee=Z(Re,!0);q(()=>V(Ee,h.gitOutput)),m(X,Re)};H(Ir,X=>{h.gitOutput&&X(Or)})}q(X=>{me(Ve,"placeholder",`Message (Ctrl+Enter to commit on "${h.gitBranch||"branch"}")`),ut.disabled=X,me(ut,"title",o(p).length?"Commit staged changes":"Stage a change first"),V(wr,o(y).length),V(er,h.gitBranch||"—")},[()=>!o(n).trim()||!o(p).length||h.gitBusy==="commit"]),L("keydown",Ve,G),Be(Ve,()=>o(n),X=>d(n,X)),L("click",ut,C),L("click",yn,()=>d(i,!o(i))),L("click",sn,()=>w("status")),L("click",In,()=>w("stage",{files:["."]})),L("click",wn,N),m(T,ae)};H(Oe,T=>{!o(K)||h.gitBusy==="status"&&!h.gitStatus&&!h.notARepo?T(Xe):h.notARepo?T(re,1):T(ue,-1)})}L("click",B,()=>d(c,!o(c))),m(e,Y),mt()}Kt(["click","keydown"]);const Gd="modulepreload",Yd=function(e,t){return new URL(e,t).href},Ei={},Oo=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let a=function(p){return Promise.all(p.map(y=>Promise.resolve(y).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};const l=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),f=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=a(n.map(p=>{if(p=Yd(p,r),p in Ei)return;Ei[p]=!0;const y=p.endsWith(".css"),_=y?'[rel="stylesheet"]':"";if(!!r)for(let w=l.length-1;w>=0;w--){const C=l[w];if(C.href===p&&(!y||C.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${_}`))return;const $=document.createElement("link");if($.rel=y?"stylesheet":Gd,y||($.as="script"),$.crossOrigin="",$.href=p,f&&$.setAttribute("nonce",f),document.head.appendChild($),y)return new Promise((w,C)=>{$.addEventListener("load",w),$.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${p}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})},Os={base:"vs-dark",inherit:!0,rules:[{token:"",foreground:"f8f8f2",background:"272822"},{token:"comment",foreground:"75715e",fontStyle:"italic"},{token:"string",foreground:"e6db74"},{token:"constant",foreground:"ae81ff"},{token:"number",foreground:"ae81ff"},{token:"keyword",foreground:"f92672"},{token:"operator",foreground:"f92672"},{token:"delimiter",foreground:"f8f8f2"},{token:"type",foreground:"66d9ef",fontStyle:"italic"},{token:"function",foreground:"a6e22e"},{token:"variable",foreground:"f8f8f2"},{token:"variable.parameter",foreground:"fd971f",fontStyle:"italic"},{token:"tag",foreground:"f92672"},{token:"attribute.name",foreground:"a6e22e"},{token:"attribute.value",foreground:"e6db74"},{token:"regexp",foreground:"e6db74"}],colors:{"editor.background":"#272822","editor.foreground":"#f8f8f2","editor.lineHighlightBackground":"#3e3d32","editor.selectionBackground":"#49483e","editorCursor.foreground":"#f8f8f0","editorWhitespace.foreground":"#3b3a32","editorLineNumber.foreground":"#90908a","editorLineNumber.activeForeground":"#f8f8f2","editorIndentGuide.background":"#3b3a32","editorGutter.background":"#272822"}},Jd={py:"python",js:"javascript",mjs:"javascript",cjs:"javascript",ts:"typescript",tsx:"typescript",jsx:"javascript",json:"json",md:"markdown",html:"html",htm:"html",css:"css",scss:"scss",less:"less",sh:"shell",bash:"shell",zsh:"shell",yml:"yaml",yaml:"yaml",toml:"ini",ini:"ini",cfg:"ini",sql:"sql",go:"go",rs:"rust",rb:"ruby",php:"php",java:"java",c:"c",h:"c",cpp:"cpp",hpp:"cpp",cs:"csharp",svelte:"html",vue:"html",xml:"xml",dockerfile:"dockerfile"};function Xd(e){var n;const t=(e||"").split("/").pop()||"";return t.toLowerCase()==="dockerfile"?"dockerfile":t.toLowerCase()==="makefile"?"shell":Jd[(n=t.split(".").pop())==null?void 0:n.toLowerCase()]||"plaintext"}var Zd=P('<div class="editor svelte-1h8xysy"></div>');function Qd(e,t){gt(t,!0);let n,r=null,s=null,i="",a=!1;vs(async()=>{s=await Oo(()=>import("./ide-monaco.js").then(c=>c.a),__vite__mapDeps([0,1]),import.meta.url),s.editor.defineTheme("monokai",Os),r=s.editor.create(n,{value:"",theme:"monokai",automaticLayout:!0,fontSize:13,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",minimap:{enabled:!0},scrollBeyondLastLine:!1,renderWhitespace:"selection",tabSize:2}),r.onDidChangeModelContent(()=>{a||!i||h.updateContent(i,r.getValue())}),r.addCommand(s.KeyMod.CtrlCmd|s.KeyCode.KeyS,()=>h.saveActive())}),Ja(()=>r==null?void 0:r.dispose()),it(()=>{const c=h.activeTab;if(!(!r||!s)){if(!c){a=!0,r.setValue(""),i="",a=!1;return}if(c.key!==i){a=!0;const f=s.editor.createModel(c.content,c.language||Xd(c.path)),p=r.getModel();r.setModel(f),p==null||p.dispose(),r.updateOptions({readOnly:!!c.readOnly}),i=c.key,a=!1}else r.getValue()!==c.content&&(a=!0,r.setValue(c.content),a=!1)}});var l=Zd();Vs(l,c=>n=c,()=>n),m(e,l),mt()}var Hn=Du(()=>h),ef=P('<span class="h-2 w-2 rounded-full bg-vs-fg group-hover:hidden"></span> <!>',1),tf=P('<div><button class="flex items-center gap-1.5 py-2 pr-1 pl-3" role="tab"><!> <span class="whitespace-nowrap"> </span></button> <button class="mr-1.5 flex h-5 w-5 items-center justify-center rounded-sm hover:bg-vs-line"><!></button></div>'),nf=P('<div class="px-3 py-2 text-xs text-vs-muted">Open a file from the Explorer</div>'),rf=P('<div class="flex min-h-[35px] items-stretch overflow-x-auto bg-vs-tabinactive" role="tablist"></div>');function sf(e,t){gt(t,!1);const n=s=>s.split("/").pop();Vl();var r=rf();Je(r,5,()=>Hn().tabs,s=>s.key,(s,i)=>{var a=tf();let l;var c=b(a),f=b(c);Xa(f,{size:14,class:"shrink-0 text-vs-blue"});var p=v(f,2),y=Z(p,!0),_=v(c,2),k=b(_);{var $=C=>{var I=ef(),D=v(j(I),2);Vo(D,{size:14,class:"hidden group-hover:block"}),m(C,I)},w=C=>{Vo(C,{size:14,class:"opacity-0 group-hover:opacity-100"})};H(k,C=>{o(i).dirty?C($):C(w,-1)})}q((C,I)=>{l=ht(a,1,"group flex items-center border-r border-vs-bg text-[13px]",null,l,{"bg-vs-tabactive":o(i).key===Hn().activeKey,"text-vs-bright":o(i).key===Hn().activeKey,"text-vs-muted":o(i).key!==Hn().activeKey}),me(c,"aria-selected",o(i).key===Hn().activeKey),me(c,"title",o(i).path),V(y,C),me(_,"title",o(i).dirty?"Unsaved changes — close":"Close"),me(_,"aria-label",`Close ${I??""}`)},[()=>n(o(i).path),()=>n(o(i).path)]),L("click",c,()=>Hn(Hn().activeKey=o(i).key)),L("click",_,()=>Hn().closeTab(o(i).key)),m(s,a)},s=>{var i=nf();m(s,i)}),m(e,r),mt()}Kt(["click"]);var of=P('<p class="rounded-sm border border-mk-pink/40 bg-mk-pink/10 px-2 py-1 text-xs text-mk-pink svelte-1roe1v9"> </p>'),af=P('<div class="flex flex-col gap-1.5 svelte-1roe1v9"><span class="flex items-center gap-1.5 text-[11px] font-semibold text-mk-green svelte-1roe1v9"><!> </span> <div class="chat-prose text-[13px] leading-relaxed text-mk-fg svelte-1roe1v9"></div></div>'),lf=P('<div class="flex flex-col gap-1.5 border-l-2 border-mk-blue/60 pl-2.5 svelte-1roe1v9"><span class="text-[11px] font-semibold text-mk-blue svelte-1roe1v9">You</span> <div class="text-[13px] leading-relaxed whitespace-pre-wrap text-mk-fg/90 svelte-1roe1v9"> </div></div>'),cf=P(`<div class="m-auto flex max-w-[250px] flex-col items-center gap-2.5 text-center svelte-1roe1v9"><!> <p class="text-xs leading-relaxed text-mk-comment svelte-1roe1v9">Ask about the file you have open. The prompt goes to <span class="text-mk-muted svelte-1roe1v9"> </span>,
            and the reply appears here.</p></div>`),uf=P('<div class="flex flex-col gap-1.5 svelte-1roe1v9"><span class="flex items-center gap-1.5 text-[11px] font-semibold text-mk-green svelte-1roe1v9"><!> </span> <div class="chat-prose text-[13px] leading-relaxed text-mk-fg svelte-1roe1v9"><!><span class="chat-caret svelte-1roe1v9"></span></div></div>'),df=P('<div class="flex items-center gap-2 text-[11px] text-mk-comment svelte-1roe1v9"><!> <span class="svelte-1roe1v9"> <span class="chat-dots svelte-1roe1v9"></span></span></div>'),ff=P(`<button class="mx-auto -mt-1 mb-1 flex shrink-0 items-center gap-1 rounded-full border border-mk-line
             bg-mk-input px-2.5 py-0.5 text-[11px] text-mk-comment shadow hover:text-mk-fg svelte-1roe1v9"><!> </button>`),vf=P(`<span title="Context used of the model's window"> </span> <span class="h-2 w-16 overflow-hidden rounded-full bg-mk-line svelte-1roe1v9" aria-hidden="true"><span></span></span>`,1),pf=P('<span class="text-mk-muted svelte-1roe1v9" title="Several sessions share this folder — totals cover all of them">shared</span>'),hf=P('<span class="truncate text-mk-muted svelte-1roe1v9" title="Model for the most recent turn"> </span>'),_f=P('<!> <span class="svelte-1roe1v9"> </span> <!> <!>',1),gf=P('<span class="text-mk-muted svelte-1roe1v9">No usage reported yet</span>'),mf=P('<button class="ml-auto flex items-center gap-1 rounded-sm px-1.5 py-0.5 hover:bg-mk-line hover:text-mk-fg disabled:opacity-40 svelte-1roe1v9" title="Compact the conversation to free up context (/compact)"><!> Compact</button>'),Ti=P('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line svelte-1roe1v9"><span class="w-3 text-mk-green svelte-1roe1v9"><!></span> </button>'),bf=P('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[150px] rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl svelte-1roe1v9"></div>'),xf=P('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line svelte-1roe1v9"><span class="w-3 text-mk-green svelte-1roe1v9"><!></span> <span class="truncate svelte-1roe1v9"> </span></button>'),yf=P('<div class="absolute bottom-full left-0 z-20 mb-1 max-h-[260px] min-w-[190px] overflow-y-auto rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl svelte-1roe1v9"></div>'),wf=P('<div class="relative svelte-1roe1v9" data-menu=""><button class="flex max-w-[110px] items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg svelte-1roe1v9" title="Model"><span class="truncate svelte-1roe1v9"> </span> <!></button> <!></div>'),kf=P('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[130px] rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl svelte-1roe1v9"></div>'),$f=P('<div class="relative svelte-1roe1v9" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg svelte-1roe1v9" title="Reasoning effort"> <!></button> <!></div>'),Sf=P('<div class="flex h-full min-h-0 flex-col bg-mk-bg text-mk-fg svelte-1roe1v9"><div class="relative flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-3 py-3 svelte-1roe1v9"><!> <!> <!> <!></div> <!> <div class="flex shrink-0 items-center gap-2 border-t border-mk-line px-3 py-1 text-[10px] text-mk-comment svelte-1roe1v9"><!> <!></div> <div class="border-t border-mk-line p-2 svelte-1roe1v9"><div class="rounded-md border border-mk-line bg-mk-input focus-within:border-mk-green svelte-1roe1v9"><textarea rows="2" class="max-h-[200px] w-full resize-none bg-transparent px-2.5 py-2 text-[13px] text-mk-fg outline-none placeholder:text-mk-comment svelte-1roe1v9" placeholder="Ask about this workspace…"></textarea> <div class="flex items-center gap-1 px-1.5 pb-1.5 text-[11px] svelte-1roe1v9"><div class="relative svelte-1roe1v9" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg svelte-1roe1v9" title="Agent"> <!></button> <!></div> <!> <!> <!> <span class="ml-auto flex items-center gap-1.5 svelte-1roe1v9"><kbd class="hidden text-[10px] text-mk-comment sm:inline svelte-1roe1v9">↵ send · ⇧↵ newline</kbd> <button class="flex h-6 w-6 items-center justify-center rounded-md bg-mk-green text-mk-bg disabled:opacity-40 svelte-1roe1v9" title="Send (Enter)" aria-label="Send"><!></button></span></div></div></div></div>');function Cf(e,t){gt(t,!0);let n=We(t,"sessions",19,()=>[]),r=We(t,"session",3,""),s=We(t,"rootPath",3,""),i=We(t,"target",15,"");it(()=>{!i()&&(r()||n()[0])&&i(r()||n()[0])});let a=O(""),l=O(!1),c=0,f=O(!1),p=O(""),y=O("");const _=at(()=>o(l)||o(f)||!!o(p));let k=O(Pe([])),$=O(""),w=O(null),C=O(null),I=null,D=O(Pe({agent:"codex",available:[],model:"",effort:"",models:[],efforts:[]})),M=O(""),K=O("");const N=at(()=>(o(D).models.find(x=>x[0]===o(D).model)||[])[1]||o(D).model||"default");let S=O("");async function z(){if(!h.connectionId){d(S,"");return}try{d(S,(await $e.agentContext(h.connectionId)).context||"",!0)}catch{d(S,"")}}it(()=>{h.connectionId,z()});async function G(){if(i())try{d(D,{agent:"codex",available:[],model:"",effort:"",models:[],efforts:[],...await $e.sessionAgent(i())},!0)}catch(x){d(D,{agent:o(D).agent,available:[],model:"",effort:"",models:[],efforts:[]},!0),h.setStatus(x.message||"Could not read agent settings")}}async function Y(){if(i())try{const x=await $e.chat(i()),A=x.messages||[],U=A.length!==o(k).length;d(k,A,!0),d(f,!!x.busy),d(y,x.detail||"",!0);const ne=x.pending||"",_e=ne!==o(p);d(p,ne,!0),d($,""),(U||_e||o(_))&&o(B)&&queueMicrotask(ye)}catch(x){d($,x.message||"Could not load chat",!0)}}const J=3e3,F=600;it(()=>{const x=o(_)?F:J;!i()||c===x||(c=x,clearInterval(I),I=setInterval(Y,x))});let B=O(!0);function he(){if(!o(w))return;const x=o(w).scrollHeight-o(w).scrollTop-o(w).clientHeight;d(B,x<80)}function ye(){o(w)&&(o(w).scrollTop=o(w).scrollHeight)}function qe(){d(B,!0),ye()}it(()=>{const x=i();d(k,[],!0),d(p,""),d(f,!1),d(B,!0),I&&clearInterval(I),c=0,x&&(Y(),G())}),Ja(()=>{I&&clearInterval(I)});async function Oe(x){if(d(M,""),x!==o(D).agent){d(K,"agent");try{await $e.setSessionAgent(i(),x),await G(),h.setStatus(`Switched to ${x}`)}catch(A){h.setStatus(A.message||"Could not switch agent")}finally{d(K,"")}}}async function Xe(x){if(d(M,""),x!==o(D).model){d(K,"model");try{await $e.setSessionModel(i(),x),await G(),h.setStatus(`Model set to ${x}`)}catch(A){h.setStatus(A.message||"Could not change model")}finally{d(K,"")}}}async function re(x){if(d(M,""),x!==o(D).effort){d(K,"effort");try{await $e.setSessionEffort(i(),x),await G(),h.setStatus(`Reasoning effort set to ${x}`)}catch(A){h.setStatus(A.message||"Could not change effort")}finally{d(K,"")}}}function ue(){const x=h.connection||{},A=h.activeTab,U=A?A.path:h.path||".",ne=A?`
Active file contents (first 12,000 characters):
${A.content.slice(0,12e3)}`:"";return`${o(S)||(x.kind==="local"?`[IDE workspace]
Local folder: ${x.workspace_root||"."}
`:`[IDE workspace]
SSH target: ${x.username||"?"}@${x.host||"?"}
`)}
Currently open: ${U}${ne}

${o(a).trim()}`}async function T(){const x=o(a).trim();if(!x||!i()||o(l))return;const A=ue();d(l,!0);try{const U=await fetch(`${s()}/api/sessions/${encodeURIComponent(i())}/send`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:A})}),ne=await U.json().catch(()=>({}));if(!U.ok)throw new Error(ne.error||"Could not send");d(a,""),o(C)&&(o(C).style.height="auto"),d(k,[...o(k),{role:"user",text:x,ts:Date.now()/1e3,_local:!0}],!0),queueMicrotask(ye),Y(),setTimeout(Y,400)}catch(U){h.setStatus(U.message||"Could not send prompt")}finally{d(l,!1)}}function ae(x){x.key==="Enter"&&!x.shiftKey&&(x.preventDefault(),T())}function Me(x){const A=x.currentTarget;A.style.height="auto",A.style.height=`${Math.min(A.scrollHeight,200)}px`}const Ve=x=>x.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function ut(x){const A=[];return Ve(x).replace(/```(\w*)\n?([\s\S]*?)```/g,(_e,ve,ge)=>(A.push(`<pre class="chat-code"><code>${ge.replace(/\n$/,"")}</code></pre>`),`\0BLOCK${A.length-1}\0`)).replace(/`([^`\n]+)`/g,'<code class="chat-inline">$1</code>').replace(/\*\*([^*\n]+)\*\*/g,"<strong>$1</strong>").split(`
`).map(_e=>{const ve=_e.match(/^\s*[-*]\s+(.*)$/);return ve?`<span class="chat-li">${ve[1]}</span>`:_e}).join(`
`).replace(/\u0000BLOCK(\d+)\u0000/g,(_e,ve)=>A[Number(ve)])}function rn(x){const A=x.full||x.text||"",U=`

`;if(A.startsWith("[IDE workspace")||A.startsWith("[Remote IDE context]")||A.startsWith("[Remote SSH IDE context]")){const ne=A.lastIndexOf(U);if(ne!==-1)return A.slice(ne+U.length)}return A}let Ae=O(null),xn=O(!1),An=null;async function Gn(){if(i())try{const A=await(await fetch(`${s()}/api/sessions/${encodeURIComponent(i())}/stats`)).json().catch(()=>({}));d(Ae,A&&A.available?A:null,!0)}catch{d(Ae,null)}}it(()=>(i(),Gn(),clearInterval(An),An=setInterval(Gn,2e4),()=>clearInterval(An)));async function mr(){if(!(!i()||o(xn))){d(xn,!0);try{const x=await fetch(`${s()}/api/sessions/${encodeURIComponent(i())}/compact`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:"/compact"})}),A=await x.json().catch(()=>({}));if(!x.ok)throw new Error(A.error||"Could not compact");h.setStatus(A.outcome||"Compact requested"),setTimeout(Gn,4e3)}catch(x){h.setStatus(x.message||"Could not compact context")}finally{d(xn,!1)}}}const yn=x=>{const A=Number(x)||0;return A>=1e6?`${(A/1e6).toFixed(1)}M`:A>=1e3?`${(A/1e3).toFixed(1)}k`:String(A)},br=15,xr=2e4,yr=at(()=>!!i()&&!!o(Ae)&&(o(Ae).ctxWindowSize&&(o(Ae).contextPct||0)>=br||!o(Ae).ctxWindowSize&&(o(Ae).lastInputTokens||0)>=xr)),Yn=x=>x>=90?"text-vs-red":x>=70?"text-vs-yellow":"text-vs-muted";var sn=Sf();Wn("click",Hs,x=>{var A,U;(U=(A=x.target).closest)!=null&&U.call(A,"[data-menu]")||d(M,"")});var $t=b(sn),In=b($t);{var ps=x=>{var A=of(),U=Z(A,!0);q(()=>V(U,o($))),m(x,A)};H(In,x=>{o($)&&x(ps)})}var On=v(In,2);Je(On,19,()=>o(k),(x,A)=>x.ts+":"+A,(x,A)=>{var U=Q(),ne=j(U);{var _e=ge=>{var Se=af(),Le=b(Se),g=b(Le);_a(g,{size:11});var E=v(g),R=v(Le,2);di(R,()=>ut(rn(o(A))),!0),q(()=>V(E,` ${o(D).agent==="claude"?"Claude":"Codex"}`)),m(ge,Se)},ve=ge=>{var Se=lf(),Le=v(b(Se),2),g=Z(Le,!0);q(E=>V(g,E),[()=>rn(o(A))]),m(ge,Se)};H(ne,ge=>{o(A).role==="assistant"?ge(_e):ge(ve,-1)})}m(x,U)},x=>{var A=Q(),U=j(A);{var ne=_e=>{var ve=cf(),ge=b(ve);_a(ge,{size:26,strokeWidth:1.3,class:"text-mk-line"});var Se=v(ge,2),Le=v(b(Se)),g=Z(Le,!0);q(()=>V(g,i()||"the selected session")),m(_e,ve)};H(U,_e=>{o($)||_e(ne)})}m(x,A)});var wr=v(On,2);{var Jn=x=>{var A=uf(),U=b(A),ne=b(U);_a(ne,{size:11});var _e=v(ne),ve=v(U,2),ge=b(ve);di(ge,()=>ut(o(p))),q(()=>V(_e,` ${o(D).agent==="claude"?"Claude":"Codex"}`)),m(x,A)};H(wr,x=>{o(p)&&x(Jn)})}var kr=v(wr,2);{var $r=x=>{var A=df(),U=b(A);en(U,{size:11,class:"animate-spin"});var ne=v(U,2),_e=b(ne);q(()=>V(_e,o(y)||"Generating")),m(x,A)};H(kr,x=>{o(_)&&x($r)})}Vs($t,x=>d(w,x),()=>o(w));var wn=v($t,2);{var Xn=x=>{var A=ff(),U=b(A);hn(U,{size:11});var ne=v(U);q(()=>V(ne,` ${o(_)?"Jump to latest — still generating":"Jump to latest"}`)),L("click",A,qe),m(x,A)};H(wn,x=>{o(B)||x(Xn)})}var Zn=v(wn,2),Sr=b(Zn);{var Qn=x=>{var A=_f(),U=j(A);{var ne=E=>{var R=vf(),te=j(R),fe=Z(te),we=v(te,2),Te=Z(we);q((ke,De)=>{ht(te,1,ke,"svelte-1roe1v9"),V(fe,`${o(Ae).contextPct??0??""}% context`),ht(Te,1,`block h-full rounded-full ${(o(Ae).contextPct||0)>=90?"bg-vs-red":(o(Ae).contextPct||0)>=70?"bg-vs-yellow":"bg-mk-green"}`,"svelte-1roe1v9"),qr(Te,`width: ${De??""}%`)},[()=>Ol(Yn(o(Ae).contextPct||0)),()=>Math.min(100,Math.max(0,o(Ae).contextPct||0))]),m(E,R)};H(U,E=>{o(Ae).ctxWindowSize&&E(ne)})}var _e=v(U,2),ve=Z(_e),ge=v(_e,2);{var Se=E=>{var R=pf();m(E,R)};H(ge,E=>{o(Ae).shared&&E(Se)})}var Le=v(ge,2);{var g=E=>{var R=hf(),te=Z(R,!0);q(()=>V(te,o(Ae).model)),m(E,R)};H(Le,E=>{o(Ae).model&&o(Ae).model!=="unknown"&&E(g)})}q((E,R,te)=>{me(_e,"title",`${o(Ae).messageCount??""} turns · ${E??""} in · ${R??""} out`),V(ve,`${te??""} tokens`)},[()=>yn(o(Ae).totalInput),()=>yn(o(Ae).totalOutput),()=>yn(o(Ae).totalTokens)]),m(x,A)},hs=x=>{var A=gf();m(x,A)};H(Sr,x=>{o(Ae)?x(Qn):x(hs,-1)})}var Cr=v(Sr,2);{var Er=x=>{var A=mf(),U=b(A);{var ne=ve=>{en(ve,{size:10,class:"animate-spin"})},_e=ve=>{fd(ve,{size:10})};H(U,ve=>{o(xn)?ve(ne):ve(_e,-1)})}q(()=>A.disabled=o(xn)),L("click",A,mr),m(x,A)};H(Cr,x=>{o(yr)&&x(Er)})}var Tr=v(Zn,2),Nr=b(Tr),Ut=b(Nr);Vs(Ut,x=>d(C,x),()=>o(C));var Pr=v(Ut,2),zr=b(Pr),er=b(zr),Mr=b(er),_s=v(Mr);hn(_s,{size:11});var tr=v(er,2);{var Ar=x=>{var A=bf();Je(A,20,()=>o(D).available.length?o(D).available:["codex"],U=>U,(U,ne)=>{var _e=Ti(),ve=b(_e),ge=b(ve);{var Se=g=>{Ao(g,{size:11})};H(ge,g=>{ne===o(D).agent&&g(Se)})}var Le=v(ve);q(()=>V(Le,` ${ne==="claude"?"Claude":"Codex"}`)),L("click",_e,()=>Oe(ne)),m(U,_e)}),m(x,A)};H(tr,x=>{o(M)==="agent"&&x(Ar)})}var Ir=v(zr,2);{var Or=x=>{var A=wf(),U=b(A),ne=b(U),_e=Z(ne,!0),ve=v(ne,2);hn(ve,{size:11,class:"shrink-0"});var ge=v(U,2);{var Se=Le=>{var g=yf();Je(g,21,()=>o(D).models,E=>E[0],(E,R)=>{var te=xf(),fe=b(te),we=b(fe);{var Te=Ce=>{Ao(Ce,{size:11})};H(we,Ce=>{o(R)[0]===o(D).model&&Ce(Te)})}var ke=v(fe,2),De=Z(ke,!0);q(()=>V(De,o(R)[1])),L("click",te,()=>Xe(o(R)[0])),m(E,te)}),m(Le,g)};H(ge,Le=>{o(M)==="model"&&Le(Se)})}q(()=>V(_e,o(N))),L("click",U,()=>d(M,o(M)==="model"?"":"model",!0)),m(x,A)};H(Ir,x=>{o(D).models.length&&x(Or)})}var X=v(Ir,2);{var Re=x=>{var A=$f(),U=b(A),ne=b(U),_e=v(ne);hn(_e,{size:11});var ve=v(U,2);{var ge=Se=>{var Le=kf();Je(Le,20,()=>o(D).efforts,g=>g,(g,E)=>{var R=Ti(),te=b(R),fe=b(te);{var we=ke=>{Ao(ke,{size:11})};H(fe,ke=>{E===o(D).effort&&ke(we)})}var Te=v(te);q(()=>V(Te,` ${E??""}`)),L("click",R,()=>re(E)),m(g,R)}),m(Se,Le)};H(ve,Se=>{o(M)==="effort"&&Se(ge)})}q(()=>V(ne,`${(o(D).effort||"effort")??""} `)),L("click",U,()=>d(M,o(M)==="effort"?"":"effort",!0)),m(x,A)};H(X,x=>{o(D).efforts.length&&x(Re)})}var Ee=v(X,2);{var ie=x=>{en(x,{size:11,class:"animate-spin text-mk-muted"})};H(Ee,x=>{o(K)&&x(ie)})}var Ne=v(Ee,2),st=v(b(Ne),2),Ze=b(st);{var Pt=x=>{md(x,{size:11})},zt=x=>{Yu(x,{size:13})};H(Ze,x=>{o(_)?x(Pt):x(zt,-1)})}q(x=>{V(Mr,`${o(D).agent==="claude"?"Claude":"Codex"} `),st.disabled=x},[()=>o(_)||!o(a).trim()]),Wn("scroll",$t,he),L("keydown",Ut,ae),L("input",Ut,Me),Be(Ut,()=>o(a),x=>d(a,x)),L("click",er,()=>d(M,o(M)==="agent"?"":"agent",!0)),L("click",st,T),m(e,sn),mt()}Kt(["click","keydown","input"]);var Ef=P('<span class="hint svelte-e2eyom">searching…</span>'),Tf=P('<li><button><span class="name svelte-e2eyom"> </span> <span class="path svelte-e2eyom"> </span> <!></button></li>'),Nf=P('<ul class="results svelte-e2eyom"></ul>'),Pf=P('<p class="empty svelte-e2eyom"> </p>'),zf=P('<div class="backdrop svelte-e2eyom" role="button" tabindex="-1"></div> <div class="dialog svelte-e2eyom" role="dialog" aria-label="Quick open"><div class="field svelte-e2eyom"><!> <input placeholder="Search files by name…" aria-label="Search files by name" class="svelte-e2eyom"/> <!></div> <!></div>',1);function Mf(e,t){gt(t,!0);let n=O(""),r=O(Pe([])),s=O(0),i=O(!1),a=O(null),l=null;it(()=>{o(a)&&o(a).focus()}),it(()=>{const S=o(n).trim();if(l&&clearTimeout(l),!S){d(r,[],!0);return}l=setTimeout(async()=>{d(i,!0);try{const z=await $e.searchFiles(h.connectionId,h.path||".",S);d(r,z.matches||[],!0),d(s,0)}catch{d(r,[],!0)}finally{d(i,!1)}},180)});async function c(S){var G;if(!S)return;const z=h.path&&h.path!=="."?`${h.path}/`:"";await h.openFile(`${z}${S.path}`),(G=t.onclose)==null||G.call(t)}function f(S){var z;S.key==="Escape"?(S.preventDefault(),(z=t.onclose)==null||z.call(t)):S.key==="ArrowDown"?(S.preventDefault(),d(s,Math.min(o(s)+1,o(r).length-1),!0)):S.key==="ArrowUp"?(S.preventDefault(),d(s,Math.max(o(s)-1,0),!0)):S.key==="Enter"&&(S.preventDefault(),c(o(r)[o(s)]))}var p=zf(),y=j(p),_=v(y,2),k=b(_),$=b(k);Za($,{size:14});var w=v($,2);Vs(w,S=>d(a,S),()=>o(a));var C=v(w,2);{var I=S=>{var z=Ef();m(S,z)};H(C,S=>{o(i)&&S(I)})}var D=v(k,2);{var M=S=>{var z=Nf();Je(z,23,()=>o(r),G=>G.path,(G,Y,J)=>{var F=Tf(),B=b(F);let he;var ye=b(B),qe=Z(ye,!0),Oe=v(ye,2),Xe=Z(Oe,!0),re=v(Oe,2);{var ue=T=>{ed(T,{size:12})};H(re,T=>{o(J)===o(s)&&T(ue)})}q(()=>{he=ht(B,1,"svelte-e2eyom",null,he,{active:o(J)===o(s)}),V(qe,o(Y).name),V(Xe,o(Y).path)}),L("click",B,()=>c(o(Y))),m(G,F)}),m(S,z)},K=S=>{var z=Pf(),G=Z(z);q(Y=>V(G,`No files match “${Y??""}”.`),[()=>o(n).trim()]),m(S,z)},N=at(()=>o(n).trim()&&!o(i));H(D,S=>{o(r).length?S(M):o(N)&&S(K,1)})}L("click",y,()=>{var S;return(S=t.onclose)==null?void 0:S.call(t)}),L("keydown",y,S=>{var z;return S.key==="Escape"&&((z=t.onclose)==null?void 0:z.call(t))}),L("keydown",w,f),Be(w,()=>o(n),S=>d(n,S)),m(e,p),mt()}Kt(["click","keydown"]);var Af=P('<div class="terminal-pane svelte-maclc7"><div class="bar svelte-maclc7"><span class="label svelte-maclc7">Terminal</span> <span> </span></div> <div class="screen svelte-maclc7"></div></div>');function If(e,t){gt(t,!0);let n=We(t,"rootPath",3,""),r=We(t,"session",3,""),s=We(t,"index",3,0),i,a=null,l=null,c=null,f=O("connecting"),p=null,y=0,_=null,k=!1;const $={background:Os.colors["editor.background"],foreground:Os.colors["editor.foreground"],cursor:Os.colors["editorCursor.foreground"],selectionBackground:Os.colors["editor.selectionBackground"],black:"#272822",red:"#f92672",green:"#a6e22e",yellow:"#e6db74",blue:"#66d9ef",magenta:"#ae81ff",cyan:"#a1efe4",white:"#f8f8f2",brightBlack:"#75715e",brightRed:"#f92672",brightGreen:"#a6e22e",brightYellow:"#e6db74",brightBlue:"#66d9ef",brightMagenta:"#ae81ff",brightCyan:"#a1efe4",brightWhite:"#f9f8f5"};function w(){if(!(!l||!a||(c==null?void 0:c.readyState)!==WebSocket.OPEN))try{l.fit(),c.send(JSON.stringify({type:"resize",cols:a.cols,rows:a.rows}))}catch{}}function C(){if(k)return;const z=`${location.protocol==="https:"?"wss":"ws"}://${location.host}${n()}/ws/sessions/${encodeURIComponent(r())}/ide/terminal/${encodeURIComponent(h.connectionId)}?index=${encodeURIComponent(s())}`;c=new WebSocket(z),c.binaryType="arraybuffer",c.onopen=()=>{d(f,"connected"),y=0,w()},c.onmessage=G=>{a.write(typeof G.data=="string"?G.data:new Uint8Array(G.data))},c.onclose=G=>{if(k)return;if(G.code===1008){d(f,"refused"),a==null||a.write(`\r
\x1B[31m— not authorised for this terminal —\x1B[0m\r
`);return}if(y>=6){d(f,"closed"),a==null||a.write(`\r
\x1B[33m— terminal unavailable; reopen the panel to retry —\x1B[0m\r
`);return}d(f,"reconnecting");const Y=Math.min(1e3*2**y,1e4);y+=1,_=setTimeout(C,Y)},c.onerror=()=>{k||d(f,"error")}}vs(async()=>{const[{Terminal:S},{FitAddon:z}]=await Promise.all([Oo(()=>import("./ide-xterm.js"),[],import.meta.url),Oo(()=>import("./ide-addon-fit.js"),[],import.meta.url)]);await Oo(()=>Promise.resolve({}),__vite__mapDeps([2]),import.meta.url),a=new S({theme:$,fontSize:12,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",cursorBlink:!0,scrollback:5e3}),l=new z,a.loadAddon(l),a.open(i),l.fit(),C(),a.onData(G=>{(c==null?void 0:c.readyState)===WebSocket.OPEN&&c.send(new TextEncoder().encode(G))}),p=new ResizeObserver(()=>w()),p.observe(i)}),Ja(()=>{k=!0,_&&clearTimeout(_),p==null||p.disconnect(),c==null||c.close(),a==null||a.dispose()});var I=Af(),D=b(I),M=v(b(D),2),K=Z(M,!0),N=v(D,2);Vs(N,S=>i=S,()=>i),q(()=>{ht(M,1,`status ${o(f)??""}`,"svelte-maclc7"),V(K,o(f))}),m(e,I),mt()}var Of=P('<div class="border-b border-vs-line bg-vs-red/10 px-4 py-2 text-xs text-vs-red"> </div>'),Rf=P('<div class="flex items-center gap-2 px-4 py-3 text-xs text-vs-muted"><!> Loading…</div>'),Lf=P('<button class="flex w-full items-center gap-2 px-4 py-1 text-left text-[13px] text-vs-fg hover:bg-vs-hover"><!> <span class="truncate"> </span></button>'),Df=P('<div class="px-4 py-3 text-xs text-vs-muted">No sub-folders here. You can still open this folder.</div>'),Ff=P('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="flex h-[70vh] w-[min(640px,92vw)] flex-col overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright">Open Folder <span class="ml-1 font-normal text-vs-muted"><!></span></div> <form class="flex gap-2 border-b border-vs-line px-3 py-2"><button type="button" class="flex items-center gap-1 rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover disabled:opacity-40" title="Up one folder"><!> Up</button> <input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-xs text-vs-fg outline-none focus:border-vs-accent" spellcheck="false" aria-label="Folder path"/> <button type="submit" class="rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover">Go</button></form> <!> <div class="min-h-0 flex-1 overflow-y-auto py-1"><!></div> <div class="flex items-center gap-2 border-t border-vs-line px-4 py-3"><span class="flex min-w-0 flex-1 items-center gap-2 text-xs text-vs-muted"><!> <span class="truncate font-mono"> </span></span> <button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40">Open Folder</button></div></div></div>');function Hf(e,t){gt(t,!0);let n=O(""),r=O(""),s=O(Pe([])),i=O(""),a=O(!0),l=O("");async function c(re){d(a,!0),d(i,"");try{const ue=h.connectionId?await $e.browseOn(h.connectionId,re):await $e.browse(re);d(n,ue.path,!0),d(r,ue.parent,!0),d(s,ue.entries||[],!0),d(l,ue.path,!0)}catch(ue){d(i,ue.message||"Could not open that folder",!0)}finally{d(a,!1)}}vs(()=>c(""));function f(re){re.preventDefault(),o(l).trim()&&c(o(l).trim())}var p=Ff(),y=b(p),_=b(y),k=v(b(_)),$=b(k);{var w=re=>{var ue=ci();q(()=>V(ue,`on ${h.connection.username??""}@${h.connection.host??""}`)),m(re,ue)},C=re=>{var ue=ci("on this server");m(re,ue)};H($,re=>{h.connection&&h.connection.kind!=="local"?re(w):re(C,-1)})}var I=v(_,2),D=b(I),M=b(D);td(M,{size:14});var K=v(D,2),N=v(I,2);{var S=re=>{var ue=Of(),T=Z(ue,!0);q(()=>V(T,o(i))),m(re,ue)};H(N,re=>{o(i)&&re(S)})}var z=v(N,2),G=b(z);{var Y=re=>{var ue=Rf(),T=b(ue);en(T,{size:13,class:"animate-spin"}),m(re,ue)},J=re=>{var ue=Q(),T=j(ue);Je(T,17,()=>o(s),ae=>ae.path,(ae,Me)=>{var Ve=Lf(),ut=b(Ve);ld(ut,{size:14,class:"shrink-0 text-vs-blue"});var rn=v(ut,2),Ae=Z(rn,!0);q(()=>V(Ae,o(Me).name)),L("dblclick",Ve,()=>c(o(Me).path)),L("click",Ve,()=>c(o(Me).path)),m(ae,Ve)},ae=>{var Me=Df();m(ae,Me)}),m(re,ue)};H(G,re=>{o(a)?re(Y):re(J,-1)})}var F=v(z,2),B=b(F),he=b(B);cd(he,{size:13,class:"shrink-0"});var ye=v(he,2),qe=Z(ye,!0),Oe=v(B,2),Xe=v(Oe,2);q(()=>{D.disabled=!o(r),me(ye,"title",o(n)),V(qe,o(n)),Xe.disabled=!o(n)||o(a)}),L("click",p,re=>re.target===re.currentTarget&&t.onclose()),L("keydown",p,re=>re.key==="Escape"&&t.onclose()),Wn("submit",I,f),L("click",D,()=>o(r)&&c(o(r))),Be(K,()=>o(l),re=>d(l,re)),L("click",Oe,function(...re){var ue;(ue=t.onclose)==null||ue.apply(this,re)}),L("click",Xe,()=>t.onopen(o(n))),m(e,p),mt()}Kt(["click","keydown","dblclick"]);var jf=P('<p class="px-4 py-2 text-xs text-vs-muted">Open a folder to search it.</p>'),Bf=P('<button class="flex w-full items-center gap-2 px-3 py-1 text-left text-[13px] hover:bg-vs-hover"><!> <span class="truncate text-vs-fg"> </span> <span class="ml-auto max-w-[45%] truncate text-[11px] text-vs-muted"> </span></button>'),Vf=P('<p class="px-4 py-2 text-xs text-vs-muted"> </p>'),Kf=P('<p class="px-4 py-2 text-xs text-vs-muted">Type to search filenames in this workspace.</p>'),Uf=P('<div class="flex h-full min-h-0 flex-col"><div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Search</div> <div class="px-3 pb-2"><div class="flex items-center gap-1.5 rounded-sm border border-vs-line bg-vs-input px-2 focus-within:border-vs-accent"><!> <input class="min-w-0 flex-1 bg-transparent py-1 text-xs text-vs-fg outline-none placeholder:text-vs-muted" placeholder="Search filenames" spellcheck="false"/> <!></div></div> <div class="min-h-0 flex-1 overflow-y-auto"><!></div></div>');function Wf(e,t){gt(t,!0);let n=O(""),r=O(Pe([])),s=O(!1),i=O(!1),a=null;it(()=>{const M=o(n).trim();if(a&&clearTimeout(a),!M||!h.connectionId){d(r,[],!0),d(i,!1);return}a=setTimeout(async()=>{d(s,!0);try{const K=await $e.searchFiles(h.connectionId,h.path||".",M);d(r,K.matches||[],!0)}catch(K){d(r,[],!0),h.setStatus(K.message||"Search failed")}finally{d(s,!1),d(i,!0)}},200)});const l=M=>{const K=(M||"").split("/");return K.pop(),K.join("/")};var c=Uf(),f=v(b(c),2),p=b(f),y=b(p);Za(y,{size:12,class:"shrink-0 text-vs-muted"});var _=v(y,2),k=v(_,2);{var $=M=>{en(M,{size:12,class:"shrink-0 animate-spin text-vs-muted"})};H(k,M=>{o(s)&&M($)})}var w=v(f,2),C=b(w);{var I=M=>{var K=jf();m(M,K)},D=M=>{var K=Q(),N=j(K);Je(N,17,()=>o(r),S=>S.path,(S,z)=>{var G=Bf(),Y=b(G);Xa(Y,{size:13,class:"shrink-0 text-vs-blue"});var J=v(Y,2),F=Z(J,!0),B=v(J,2),he=Z(B,!0);q((ye,qe)=>{me(G,"title",o(z).path),V(F,ye),V(he,qe)},[()=>o(z).name||o(z).path.split("/").pop(),()=>l(o(z).path)]),L("click",G,()=>h.openFile(o(z).path)),m(S,G)},S=>{var z=Q(),G=j(z);{var Y=B=>{var he=Vf(),ye=Z(he);q(()=>V(ye,`No files match “${o(n)??""}”.`)),m(B,he)},J=B=>{var he=Kf();m(B,he)},F=at(()=>!o(n).trim());H(G,B=>{o(i)&&!o(s)?B(Y):o(F)&&B(J,1)})}m(S,z)}),m(M,K)};H(C,M=>{h.connectionId?M(D,-1):M(I)})}Be(_,()=>o(n),M=>d(n,M)),m(e,c),mt()}Kt(["click"]);var qf=P('<p class="flex items-center gap-2 text-vs-muted"><!> Fetching host key…</p>'),Gf=P('<p class="text-vs-red"> </p>'),Yf=P("<p>This host is already trusted. Try connecting again.</p>"),Jf=P('<div class="flex items-baseline gap-2 font-mono text-[11px]"><span class="w-16 shrink-0 text-vs-muted"> </span> <span class="break-all text-vs-fg"> </span></div>'),Xf=P(`<p>The authenticity of <span class="font-mono text-vs-blue"> </span> can't be established. Verify these fingerprints match the server before you continue —
          if they don't, someone may be intercepting the connection.</p> <div class="mt-3 flex flex-col gap-1 rounded-sm border border-vs-line bg-vs-input p-2"></div> <p class="mt-3 text-xs text-vs-muted">Accepting adds the key to <span class="font-mono">~/.ssh/known_hosts</span> on this server.</p>`,1),Zf=P('<button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"> </button>'),Qf=P('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="w-[min(560px,92vw)] overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="flex items-center gap-2 border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright"><!> Unknown host</div> <div class="px-4 py-3 text-[13px] leading-relaxed text-vs-fg"><!></div> <div class="flex justify-end gap-2 border-t border-vs-line px-4 py-3"><button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <!></div></div></div>');function ev(e,t){gt(t,!0);let n=O(!0),r=O(""),s=O(null),i=O(!1);vs(async()=>{try{d(s,await $e.hostKey(h.connectionId),!0)}catch(N){d(r,N.message||"Could not fetch the host key",!0)}finally{d(n,!1)}});async function a(){d(i,!0);try{await $e.trustHost(h.connectionId),t.ontrusted()}catch(N){d(r,N.message||"Could not trust this host",!0),d(i,!1)}}var l=Qf(),c=b(l),f=b(c),p=b(f);gd(p,{size:15,class:"text-vs-yellow"});var y=v(f,2),_=b(y);{var k=N=>{var S=qf(),z=b(S);en(z,{size:13,class:"animate-spin"}),m(N,S)},$=N=>{var S=Gf(),z=Z(S,!0);q(()=>V(z,o(r))),m(N,S)},w=N=>{var S=Yf();m(N,S)},C=N=>{var S=Xf(),z=j(S),G=v(b(z)),Y=Z(G),J=v(z,2);Je(J,21,()=>o(s).fingerprints,F=>F.fingerprint,(F,B)=>{var he=Jf(),ye=b(he),qe=Z(ye,!0),Oe=v(ye,2),Xe=Z(Oe,!0);q(()=>{V(qe,o(B).type),V(Xe,o(B).fingerprint)}),m(F,he)}),q(()=>V(Y,`${o(s).host??""}:${o(s).port??""}`)),m(N,S)};H(_,N=>{var S;o(n)?N(k):o(r)?N($,1):(S=o(s))!=null&&S.known?N(w,2):N(C,-1)})}var I=v(y,2),D=b(I),M=v(D,2);{var K=N=>{var S=Zf(),z=Z(S,!0);q(()=>{S.disabled=o(i),V(z,o(i)?"Trusting…":"Trust and connect")}),L("click",S,a),m(N,S)};H(M,N=>{var S;!o(n)&&!((S=o(s))!=null&&S.known)&&!o(r)&&N(K)})}L("click",l,N=>N.target===N.currentTarget&&t.onclose()),L("keydown",l,N=>N.key==="Escape"&&t.onclose()),L("click",D,function(...N){var S;(S=t.onclose)==null||S.apply(this,N)}),m(e,l),mt()}Kt(["click","keydown"]);var tv=P('<div role="separator" tabindex="0" title="Drag to resize (double-click to reset)"><div></div></div>');function ga(e,t){gt(t,!0);let n=We(t,"size",15),r=We(t,"side",3,"right"),s=We(t,"min",3,120),i=We(t,"max",3,800),a=We(t,"onreset",3,null),l=O(!1);const c=r()==="top";function f($){var K;$.preventDefault(),d(l,!0);const w=c?$.clientY:$.clientX,C=n(),I=$.currentTarget;(K=I.setPointerCapture)==null||K.call(I,$.pointerId);function D(N){const z=(c?N.clientY:N.clientX)-w,G=r()==="left"||r()==="top"?-z:z;n(Math.round(Math.min(i(),Math.max(s(),C+G))))}function M(){var N;d(l,!1),(N=I.releasePointerCapture)==null||N.call(I,$.pointerId),window.removeEventListener("pointermove",D),window.removeEventListener("pointerup",M)}window.addEventListener("pointermove",D),window.addEventListener("pointerup",M)}function p($){const w=$.shiftKey?40:10,C=c?"ArrowUp":r()==="left"?"ArrowLeft":"ArrowRight",I=c?"ArrowDown":r()==="left"?"ArrowRight":"ArrowLeft";if($.key===C)n(Math.min(i(),n()+w));else if($.key===I)n(Math.max(s(),n()-w));else return;$.preventDefault()}var y=tv();let _;var k=Z(y);q(()=>{_=ht(y,1,`group relative shrink-0 ${c?"h-1 w-full cursor-row-resize":"w-1 cursor-col-resize"}`,null,_,{"bg-vs-accent":o(l)}),me(y,"aria-orientation",c?"horizontal":"vertical"),me(y,"aria-valuenow",n()),me(y,"aria-valuemin",s()),me(y,"aria-valuemax",i()),ht(k,1,`absolute ${c?"-top-1 -bottom-1 left-0 right-0":"-left-1 -right-1 top-0 bottom-0"}
           transition-colors group-hover:bg-vs-accent ${o(l)?"bg-vs-accent":""}`)}),L("pointerdown",y,f),L("dblclick",y,()=>{var $;return($=a())==null?void 0:$()}),L("keydown",y,p),m(e,y),mt()}Kt(["pointerdown","dblclick","keydown"]);var nv=P('<span class="absolute top-0 bottom-0 left-0 w-0.5 bg-vs-bright"></span>'),rv=P('<span class="absolute right-1.5 bottom-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-vs-status px-1 text-[10px] leading-none font-semibold text-white"> </span>'),sv=P("<button><!> <!> <!></button>"),Ni=P("<option> </option>"),ov=P('<button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Connection settings" aria-label="Connection settings"><!></button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover hover:text-vs-red" title="Remove workspace" aria-label="Remove workspace"><!></button>',1),av=P('<div class="flex gap-1"><input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="Host"/> <input class="w-16 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" type="number" min="1" max="65535" placeholder="Port"/></div> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="Username"/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="Identity file (optional)"/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" type="password" autocomplete="new-password" placeholder="Password — leave blank to keep current"/>',1),iv=P('<div class="flex flex-col gap-1.5 rounded-sm border border-vs-line bg-vs-panel p-2"><span class="text-[11px] font-semibold tracking-wide uppercase text-vs-muted"> </span> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="Label"/> <!> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="Workspace folder"/> <div class="flex gap-1"><button class="flex-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110 disabled:opacity-40"> </button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover">Cancel</button></div></div>'),lv=P('<input class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" type="password" placeholder="Password (optional)" autocomplete="new-password"/>'),cv=P(`<button class="w-full rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Show this host's key fingerprint and trust it">Verify host key…</button>`),uv=P('<!> <button class="w-full rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"> </button> <!>',1),dv=P('<p class="mt-1 font-mono text-[11px] break-all text-vs-muted"> </p>'),fv=P('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="~/.ssh/id_ed25519"/> <textarea class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-[11px] outline-none focus:border-vs-accent" rows="4" placeholder="…or paste a private key (-----BEGIN OPENSSH PRIVATE KEY-----)" spellcheck="false"></textarea>',1),vv=P('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" type="password" placeholder="Password" autocomplete="new-password"/>'),pv=P('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Host" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="User" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Port" type="number" min="1" max="65535"/> <select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>SSH agent</option><option>Existing key</option><option>Password (saved, encrypted)</option></select> <!> <!>',1),hv=P('<form class="mt-2 flex flex-col gap-1.5 border-t border-vs-line px-3 pt-2"><select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>This server (local folder)</option><option>Remote host over SSH</option></select> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Label"/> <!> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"/> <div class="flex gap-1 pb-2"><button class="flex-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110" type="submit">Create</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" type="button">Cancel</button></div></form>'),_v=P('<div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Workspaces</div> <div class="flex flex-col gap-2 px-3 pt-1"><select class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" aria-label="Workspace"><option>— select workspace —</option><!></select> <div class="flex gap-1"><button class="flex flex-1 items-center justify-center gap-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"><!> Open Folder</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Add a workspace or SSH connection" aria-label="Add workspace"><!></button> <!></div> <!> <!> <!></div> <!>',1),gv=P('<aside class="flex shrink-0 flex-col overflow-hidden border-r border-vs-border bg-vs-panel"><!></aside> <!>',1),mv=P('<div class="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center"><!> <div><h1 class="text-2xl font-light text-vs-fg">Multibuilder IDE</h1> <p class="mt-1 text-sm text-vs-muted">Edit files on this server or on a remote host over SSH.</p></div> <div class="flex flex-col gap-2 text-sm"><button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Open Folder… <kbd class="ml-2 rounded-sm border border-vs-line px-1.5 py-0.5 text-[10px] text-vs-muted">Ctrl+Shift+O</kbd></button> <button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Connect to a host over SSH…</button></div></div>'),bv=P('<button class="rounded-sm p-0.5 opacity-0 group-hover:opacity-100 hover:bg-vs-line" title="Close terminal — ends the shell"><!></button>'),xv=P('<span><button class="max-w-[140px] truncate"> </button> <!></span>'),yv=P('<div class="absolute inset-0"><!></div>'),wv=P('<!> <div class="flex shrink-0 flex-col border-t border-vs-border bg-vs-bg"><div class="flex items-center gap-1 border-b border-vs-border px-2 py-1 text-[11px]"><!> <div class="flex min-w-0 flex-1 items-center gap-0.5 overflow-x-auto"></div> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover disabled:opacity-40" title="New terminal in this workspace" aria-label="New terminal"><!></button> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover" title="Hide terminals (Ctrl+`) — sessions keep running" aria-label="Hide all terminals"><!></button> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover hover:text-vs-red" title="Close this terminal — ends the shell" aria-label="Close this terminal"><!></button></div> <div class="relative min-h-0 flex-1"><!></div></div>',1),kv=P('<!> <div class="min-h-0 flex-1"><!></div> <!>',1),$v=P(`<!> <aside class="flex shrink-0 flex-col overflow-hidden border-l border-vs-border bg-vs-panel"><div class="flex items-center gap-1.5 border-b border-vs-border px-3 py-1.5"><!> <span class="shrink-0 text-[11px] font-semibold tracking-wide uppercase">AI Agent</span> <select class="ml-auto min-w-0 flex-1 truncate rounded-sm border border-vs-line bg-vs-input px-1.5 py-0.5
                   text-[11px] text-vs-fg outline-none focus:border-vs-accent" title="Agent session — each has its own history"></select> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover disabled:opacity-40" title="New agent session" aria-label="New agent session"><!></button> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover" title="Hide AI Agent" aria-label="Hide AI Agent"><!></button></div> <div class="min-h-0 flex-1"><!></div></aside>`,1),Sv=P('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20"><!> <!></button>'),Cv=P('<span class="flex items-center gap-1"><!> </span>'),Ev=P("<span> </span>"),Tv=P('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle terminal (Ctrl+`)"><!> Terminal</button> <button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Focus the tmux window on the host"><!></button>',1),Nv=P('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle AI Agent panel"><!> Chat</button>'),Pv=P('<div class="flex h-full flex-col overflow-hidden bg-vs-bg font-sans text-vs-fg"><header class="flex items-center gap-2 border-b border-vs-border bg-vs-titlebar px-3 py-1 text-xs"><!> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover" title="Open a folder on this server (Ctrl+Shift+O)">Open Folder…</button> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40" title="Open a file (Ctrl+P)">Open File…</button> <button><!> Terminal</button> <span class="mx-auto truncate text-vs-muted"> </span> <span><!> </span></header> <div class="flex min-h-0 flex-1"><nav class="flex w-12 shrink-0 flex-col items-center bg-vs-activity"><!> <div class="mt-auto flex flex-col items-center pb-1"><button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Account — signed in to the dashboard" aria-label="Account"><!></button> <button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Toggle side bar (Ctrl+B)" aria-label="Toggle side bar"><!></button></div></nav> <!> <section class="flex min-h-0 min-w-0 flex-1 flex-col"><!></section> <!></div> <footer class="flex shrink-0 items-center gap-3 bg-vs-status px-3 py-0.5 text-[12px] text-white"><!> <!> <span class="truncate"> </span> <span class="ml-auto flex items-center gap-3"><!> <span class="max-w-[40vw] truncate opacity-80"> </span> <!> <!></span></footer> <!> <!> <!></div>');function zv(e,t){gt(t,!0);let n=We(t,"sessions",19,()=>[]),r=We(t,"session",3,""),s=We(t,"rootPath",3,""),i=O(Pe([...n()])),a=O(Pe(r()||n()[0]||"")),l=O(!1),c=O(!1),f=O(!1),p=O(Pe({label:"",host:"",username:"",port:22,identity_file:"",password:"",workspace_root:""}));function y(){h.connection&&(d(w,"remote"),d(z,!0),o(c)||_())}function _(){const g=h.connection;g&&(d(p,{label:g.label||"",host:g.host||"",username:g.username||"",port:g.port||22,identity_file:g.identity_file||"",password:"",workspace_root:g.workspace_root||""},!0),d(c,!o(c)))}async function k(){var g;if(!(!h.connection||o(f))){d(f,!0);try{const E={...o(p),port:Number(o(p).port)||22};E.password||delete E.password,await $e.updateConnection(h.connection.id,E),await((g=h.loadConnections)==null?void 0:g.call(h)),d(c,!1),h.setStatus("Connection settings saved")}catch(E){h.setStatus(E.message||"Could not save connection settings")}finally{d(f,!1)}}}async function $(){var g;if(!o(l)){d(l,!0);try{const E=(((g=h.connection)==null?void 0:g.label)||r()||"agent").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,20)||"agent";let R=E;for(let Te=2;o(i).includes(R);Te+=1)R=`${E}-${Te}`;const te=await fetch(`${s()}/api/sessions/create`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:R,agent:"claude"})}),fe=await te.json().catch(()=>({}));if(!te.ok)throw new Error(fe.error||"Could not create session");const we=fe.session||fe.name||R;o(i).includes(we)||d(i,[...o(i),we],!0),d(a,we,!0),h.setStatus(`Agent session "${we}" created`)}catch(E){h.setStatus(E.message||"Could not create agent session")}finally{d(l,!1)}}}let w=O("files");function C(g,E){try{const R=localStorage.getItem(`ide.show.${g}`);return R===null?E:R==="1"}catch{return E}}let I=O(Pe(C("chat",!0)));const D={sidebar:240,chat:320,panel:240};function M(g){try{const E=localStorage.getItem(`ide.size.${g}`),R=Number(E);return Number.isFinite(R)&&R>0?R:D[g]}catch{return D[g]}}let K=O(Pe(M("sidebar"))),N=O(Pe(M("chat"))),S=O(Pe(M("panel")));it(()=>{try{localStorage.setItem("ide.size.sidebar",String(o(K))),localStorage.setItem("ide.size.chat",String(o(N))),localStorage.setItem("ide.size.panel",String(o(S))),localStorage.setItem("ide.show.terminal",o(Y)?"1":"0"),localStorage.setItem("ide.show.chat",o(I)?"1":"0"),localStorage.setItem("ide.show.sidebar",o(z)?"1":"0")}catch{}});let z=O(Pe(C("sidebar",!0))),G=O(!1),Y=O(Pe(C("terminal",!1)));const J=8;let F=O(Pe([0])),B=O(0);function he(){if(o(F).length>=J)return;let g=0;for(;o(F).includes(g);)g+=1;g>=J||(d(F,[...o(F),g].sort((E,R)=>E-R),!0),d(B,g,!0))}async function ye(g){const E=o(F).indexOf(g),R=o(F).filter(te=>te!==g);d(F,R.length?R:[0],!0),o(B)===g&&d(B,o(F)[Math.min(E,o(F).length-1)],!0);try{await $e.closeTerminal(h.connectionId,g)}catch(te){h.setStatus(te.message||"Could not close terminal")}}let qe=O("");it(()=>{const g=h.connectionId,E=h.connectionState;if(!g||E!=="connected")return;const R=`${g}|${E}`;o(qe)!==R&&(d(qe,R),d(F,[0],!0),d(B,0),$e.listTerminals(g).then(te=>{const fe=((te==null?void 0:te.terminals)||[]).filter(we=>Number.isInteger(we));fe.length&&(d(F,fe,!0),fe.includes(o(B))||d(B,fe[0],!0))}).catch(()=>{}))});let Oe=O(!1);it(()=>{o(Y)&&d(Oe,!0)});let Xe=O(!1),re=O(!1),ue=O(""),T=O(Pe({kind:"local",label:"",host:"",username:"",port:22,auth_mode:"agent",identity_file:"",password:"",private_key:"",workspace_root:"",max_file_bytes:1e6}));const ae={idle:{icon:Qu,label:"Not connected"},connecting:{icon:Xu,label:"Connecting…"},connected:{icon:Ju,label:"Connected"},reconnect:{icon:xi,label:"Reconnect required"},error:{icon:xi,label:"Error"}},Me=at(()=>ae[h.connectionState].icon),Ve=at(()=>{var g;return((g=h.connection)==null?void 0:g.kind)==="local"}),ut=[{id:"files",icon:ad,label:"Explorer",keys:"Ctrl+Shift+E"},{id:"search",icon:Za,label:"Search",keys:"Ctrl+Shift+F"},{id:"git",icon:Aa,label:"Source Control",keys:"Ctrl+Shift+G"},{id:"remote",icon:pd,label:"Remote Explorer",keys:""}];vs(async()=>{await h.loadConnections(),h.connectionId&&await h.refreshStatus()});function rn(g){o(w)===g&&o(z)?d(z,!1):(d(w,g,!0),d(z,!0))}async function Ae(g){h.connectionId=g.currentTarget.value,h.resetWorkspaceView(),await h.refreshStatus()}async function xn(g){d(re,!1);try{const E=g.split("/").filter(Boolean).pop()||g,R=h.connection;if(R&&R.kind!=="local"){await $e.setWorkspaceRoot(R.id,g,E),await h.loadConnections(),h.resetWorkspaceView(),await h.refreshFiles("."),h.setStatus(`Opened ${g} on ${R.username}@${R.host}`),d(w,"files"),d(z,!0);return}if(R&&R.kind==="local"){await $e.setWorkspaceRoot(R.id,g,E),await h.loadConnections(),h.resetWorkspaceView(),await h.refreshFiles("."),h.setStatus(`Opened ${g}`),d(w,"files"),d(z,!0);return}const te=await $e.createConnection({kind:"local",label:E,workspace_root:g,max_file_bytes:1e6});await h.loadConnections(),h.connectionId=te.connection.id,h.resetWorkspaceView(),await h.connect(""),d(w,"files"),d(z,!0)}catch(E){h.setStatus(E.message||"Could not open folder")}}async function An(g){g.preventDefault();try{const E=await $e.createConnection({...o(T),port:Number(o(T).port)});d(Xe,!1),d(T,{...o(T),label:"",host:"",username:"",password:"",private_key:""},!0),await h.loadConnections(),h.connectionId=E.connection.id,await h.refreshStatus()}catch(E){h.setStatus(E.message||"Could not create connection")}}async function Gn(){const g=h.connection;if(!g)return;const E=g.kind==="local"?"workspace":"connection";if(confirm(`Remove ${E} "${g.label}"? Saved tabs are cleared; files are untouched.`))try{await $e.deleteConnection(g.id),h.connectionId="",h.resetWorkspaceView(),await h.loadConnections()}catch(R){h.setStatus(R.message||"Could not delete")}}async function mr(){try{const g=await $e.focusTerminal(h.connectionId);h.setStatus(`Focused ${g.window_name}`,"tmux window selected")}catch(g){h.setStatus(g.message||"Could not focus terminal")}}function yn(g){var fe,we,Te,ke;const E=g.ctrlKey||g.metaKey,R=g.key.toLowerCase(),te=((we=(fe=g.target)==null?void 0:fe.matches)==null?void 0:we.call(fe,"input, textarea, select"))&&!((ke=(Te=g.target).closest)!=null&&ke.call(Te,".monaco-editor"));E&&R==="s"?(g.preventDefault(),h.saveActive()):E&&R==="p"&&!te?(g.preventDefault(),h.connectionId&&d(G,!0)):E&&g.shiftKey&&R==="o"?(g.preventDefault(),d(re,!0)):E&&g.shiftKey&&["e","f","g"].includes(R)?(g.preventDefault(),d(w,{e:"files",f:"search",g:"git"}[R],!0),d(z,!0)):E&&R==="b"&&!te?(g.preventDefault(),d(z,!o(z))):E&&R==="`"?(g.preventDefault(),h.connectionState==="connected"&&d(Y,!o(Y))):g.key==="Escape"&&o(G)&&(g.preventDefault(),d(G,!1))}var br=Pv();Wn("keydown",Hs,yn);var xr=b(br),yr=b(xr);yi(yr,{size:15,class:"shrink-0 text-vs-blue"});var Yn=v(yr,2),sn=v(Yn,2),$t=v(sn,2);let In;var ps=b($t);Si(ps,{size:13});var On=v($t,2),wr=Z(On,!0),Jn=v(On,2),kr=b(Jn);fi(kr,()=>o(Me),(g,E)=>{E(g,{size:12})});var $r=v(kr),wn=v(xr,2),Xn=b(wn),Zn=b(Xn);Je(Zn,17,()=>ut,g=>g.id,(g,E)=>{var R=sv(),te=b(R);{var fe=De=>{var Ce=nv();m(De,Ce)};H(te,De=>{o(w)===o(E).id&&o(z)&&De(fe)})}var we=v(te,2);fi(we,()=>o(E).icon,(De,Ce)=>{Ce(De,{size:24,strokeWidth:1.4})});var Te=v(we,2);{var ke=De=>{var Ce=rv(),on=Z(Ce,!0);q(()=>V(on,h.gitDirtyCount)),m(De,Ce)};H(Te,De=>{o(E).id==="git"&&h.gitDirtyCount&&De(ke)})}q(()=>{ht(R,1,`relative flex h-12 w-12 items-center justify-center ${o(w)===o(E).id&&o(z)?"text-vs-bright":"text-vs-muted hover:text-vs-fg"}`),me(R,"title",o(E).keys?`${o(E).label} (${o(E).keys})`:o(E).label),me(R,"aria-label",o(E).label)}),L("click",R,()=>rn(o(E).id)),m(g,R)});var Sr=v(Zn,2),Qn=b(Sr),hs=b(Qn);Zu(hs,{size:24,strokeWidth:1.4});var Cr=v(Qn,2),Er=b(Cr);_d(Er,{size:24,strokeWidth:1.4});var Tr=v(Xn,2);{var Nr=g=>{var E=gv(),R=j(E),te=b(R);{var fe=Ce=>{Ed(Ce,{})},we=Ce=>{Wf(Ce,{})},Te=Ce=>{qd(Ce,{})},ke=Ce=>{var on=_v(),kn=v(j(on),2),Mt=b(kn),Rn=b(Mt);Rn.value=Rn.__value="";var Rr=v(Rn);Je(Rr,17,()=>h.connections,Ie=>Ie.id,(Ie,Ge)=>{var Ye=Ni(),Wt=Z(Ye),ct={};q(()=>{V(Wt,`${o(Ge).kind==="local"?"🖿 ":"⇅ "}${o(Ge).label??""}`),ct!==(ct=o(Ge).id)&&(Ye.value=(Ye.__value=ct)??"")}),m(Ie,Ye)});var Fe;Is(Mt);var nr=v(Mt,2),At=b(nr),gs=b(At);ha(gs,{size:13});var an=v(At,2),Qo=b(an);Fs(Qo,{size:13});var ea=v(an,2);{var ta=Ie=>{var Ge=ov(),Ye=j(Ge),Wt=b(Ye);$i(Wt,{size:13});var ct=v(Ye,2),Sn=b(ct);Ci(Sn,{size:13}),L("click",Ye,_),L("click",ct,Gn),m(Ie,Ge)};H(ea,Ie=>{h.connection&&Ie(ta)})}var It=v(nr,2);{var St=Ie=>{var Ge=iv(),Ye=b(Ge),Wt=Z(Ye,!0),ct=v(Ye,2),Sn=v(ct,2);{var Dr=ln=>{var xs=av(),ys=j(xs),ws=b(ys),Hr=v(ws,2),jr=v(ys,2),Br=v(jr,2),$o=v(Br,2);Be(ws,()=>o(p).host,Rt=>o(p).host=Rt),Be(Hr,()=>o(p).port,Rt=>o(p).port=Rt),Be(jr,()=>o(p).username,Rt=>o(p).username=Rt),Be(Br,()=>o(p).identity_file,Rt=>o(p).identity_file=Rt),Be($o,()=>o(p).password,Rt=>o(p).password=Rt),m(ln,xs)};H(Sn,ln=>{o(Ve)||ln(Dr)})}var Fr=v(Sn,2),bt=v(Fr,2),Ot=b(bt),bs=Z(Ot,!0),qt=v(Ot,2);q(()=>{V(Wt,o(Ve)?"Folder settings":"SSH connection settings"),Ot.disabled=o(f),V(bs,o(f)?"Saving…":"Save")}),Be(ct,()=>o(p).label,ln=>o(p).label=ln),Be(Fr,()=>o(p).workspace_root,ln=>o(p).workspace_root=ln),L("click",Ot,k),L("click",qt,()=>d(c,!1)),m(Ie,Ge)};H(It,Ie=>{o(c)&&h.connection&&Ie(St)})}var Ln=v(It,2);{var $n=Ie=>{var Ge=uv(),Ye=j(Ge);{var Wt=bt=>{var Ot=lv();Be(Ot,()=>o(ue),bs=>d(ue,bs)),m(bt,Ot)};H(Ye,bt=>{!o(Ve)&&!h.connection.has_password&&bt(Wt)})}var ct=v(Ye,2),Sn=Z(ct,!0),Dr=v(ct,2);{var Fr=bt=>{var Ot=cv();L("click",Ot,()=>h.needsHostKey=!0),m(bt,Ot)};H(Dr,bt=>{o(Ve)||bt(Fr)})}q(()=>V(Sn,o(Ve)?"Open workspace":"Connect")),L("click",ct,()=>h.connect(o(ue))),m(Ie,Ge)};H(Ln,Ie=>{h.connection&&h.connectionState!=="connected"&&Ie($n)})}var Lr=v(Ln,2);{var rr=Ie=>{var Ge=dv(),Ye=Z(Ge,!0);q(()=>V(Ye,h.connection.workspace_root)),m(Ie,Ge)};H(Lr,Ie=>{h.connection&&Ie(rr)})}var ms=v(kn,2);{var Dn=Ie=>{var Ge=hv(),Ye=b(Ge),Wt=b(Ye);Wt.value=Wt.__value="local";var ct=v(Wt);ct.value=ct.__value="ssh",Is(Ye);var Sn=v(Ye,2),Dr=v(Sn,2);{var Fr=qt=>{var ln=pv(),xs=j(ln),ys=v(xs,2),ws=v(ys,2),Hr=v(ws,2),jr=b(Hr);jr.value=jr.__value="agent";var Br=v(jr);Br.value=Br.__value="key";var $o=v(Br);$o.value=$o.__value="password",Is(Hr);var Rt=v(Hr,2);{var Wl=dt=>{var ks=fv(),So=j(ks),Yl=v(So,2);Be(So,()=>o(T).identity_file,na=>o(T).identity_file=na),Be(Yl,()=>o(T).private_key,na=>o(T).private_key=na),m(dt,ks)};H(Rt,dt=>{o(T).auth_mode==="key"&&dt(Wl)})}var ql=v(Rt,2);{var Gl=dt=>{var ks=vv();Be(ks,()=>o(T).password,So=>o(T).password=So),m(dt,ks)};H(ql,dt=>{o(T).auth_mode==="password"&&dt(Gl)})}Be(xs,()=>o(T).host,dt=>o(T).host=dt),Be(ys,()=>o(T).username,dt=>o(T).username=dt),Be(ws,()=>o(T).port,dt=>o(T).port=dt),da(Hr,()=>o(T).auth_mode,dt=>o(T).auth_mode=dt),m(qt,ln)};H(Dr,qt=>{o(T).kind==="ssh"&&qt(Fr)})}var bt=v(Dr,2),Ot=v(bt,2),bs=v(b(Ot),2);q(()=>{me(bt,"placeholder",o(T).kind==="local"?"/var/www/app":"Workspace root"),bt.required=o(T).kind==="local"}),Wn("submit",Ge,An),da(Ye,()=>o(T).kind,qt=>o(T).kind=qt),Be(Sn,()=>o(T).label,qt=>o(T).label=qt),Be(bt,()=>o(T).workspace_root,qt=>o(T).workspace_root=qt),L("click",bs,()=>d(Xe,!1)),m(Ie,Ge)};H(ms,Ie=>{o(Xe)&&Ie(Dn)})}q(()=>{Fe!==(Fe=h.connectionId)&&(Mt.value=(Mt.__value=Fe)??"",Bs(Mt,Fe))}),L("change",Mt,Ae),L("click",At,()=>d(re,!0)),L("click",an,()=>d(Xe,!o(Xe))),m(Ce,on)};H(te,Ce=>{o(w)==="files"?Ce(fe):o(w)==="search"?Ce(we,1):o(w)==="git"?Ce(Te,2):Ce(ke,-1)})}var De=v(R,2);ga(De,{side:"right",min:170,max:620,onreset:()=>d(K,D.sidebar,!0),get size(){return o(K)},set size(Ce){d(K,Ce,!0)}}),q(()=>qr(R,`width: ${o(K)??""}px`)),m(g,E)};H(Tr,g=>{o(z)&&g(Nr)})}var Ut=v(Tr,2),Pr=b(Ut);{var zr=g=>{var E=mv(),R=b(E);yi(R,{size:64,strokeWidth:1,class:"text-vs-line"});var te=v(R,4),fe=b(te),we=b(fe);ha(we,{size:16});var Te=v(fe,2),ke=b(Te);ki(ke,{size:16}),L("click",fe,()=>d(re,!0)),L("click",Te,()=>{d(w,"remote"),d(z,!0),d(Xe,!0)}),m(g,E)},er=g=>{var E=kv(),R=j(E);sf(R,{});var te=v(R,2),fe=b(te);Qd(fe,{});var we=v(te,2);{var Te=ke=>{var De=wv(),Ce=j(De);{var on=It=>{ga(It,{side:"top",min:120,max:640,onreset:()=>d(S,D.panel,!0),get size(){return o(S)},set size(St){d(S,St,!0)}})};H(Ce,It=>{o(Y)&&It(on)})}var kn=v(Ce,2),Mt=b(kn),Rn=b(Mt);Si(Rn,{size:13,class:"mx-1 shrink-0"});var Rr=v(Rn,2);Je(Rr,20,()=>o(F),It=>It,(It,St)=>{var Ln=xv(),$n=b(Ln),Lr=Z($n,!0),rr=v($n,2);{var ms=Dn=>{var Ie=bv(),Ge=b(Ie);Vo(Ge,{size:11}),q(()=>me(Ie,"aria-label",`Close terminal ${St+1}`)),L("click",Ie,()=>ye(St)),m(Dn,Ie)};H(rr,Dn=>{o(F).length>1&&Dn(ms)})}q(()=>{var Dn;ht(Ln,1,`group flex shrink-0 items-center gap-1 rounded-sm px-2 py-0.5
                           ${St===o(B)?"bg-vs-hover text-vs-fg":"text-vs-muted hover:text-vs-fg"}`),V(Lr,St===0?((Dn=h.connection)==null?void 0:Dn.label)||"Terminal":`Terminal ${St+1}`)}),L("click",$n,()=>d(B,St,!0)),m(It,Ln)});var Fe=v(Rr,2),nr=b(Fe);Fs(nr,{size:14});var At=v(Fe,2),gs=b(At);hn(gs,{size:15});var an=v(At,2),Qo=b(an);Ci(Qo,{size:13});var ea=v(Mt,2),ta=b(ea);Su(ta,()=>h.connectionId,It=>{var St=Q(),Ln=j(St);Je(Ln,16,()=>o(F),$n=>$n,($n,Lr)=>{var rr=yv(),ms=b(rr);If(ms,{get rootPath(){return s()},get session(){return r()},get index(){return Lr}}),q(()=>me(rr,"hidden",Lr!==o(B))),m($n,rr)}),m(It,St)}),q(()=>{qr(kn,`height: ${o(S)??""}px`),me(kn,"hidden",!o(Y)),Fe.disabled=o(F).length>=J}),L("click",Fe,he),L("click",At,()=>d(Y,!1)),L("click",an,()=>ye(o(B))),m(ke,De)};H(we,ke=>{o(Oe)&&h.connectionState==="connected"&&ke(Te)})}m(g,E)};H(Pr,g=>{h.connectionId?g(er,-1):g(zr)})}var Mr=v(Ut,2);{var _s=g=>{var E=$v(),R=j(E);ga(R,{side:"left",min:260,max:760,onreset:()=>d(N,D.chat,!0),get size(){return o(N)},set size(Fe){d(N,Fe,!0)}});var te=v(R,2),fe=b(te),we=b(fe);wi(we,{size:13,class:"shrink-0"});var Te=v(we,4);Je(Te,20,()=>o(i),Fe=>Fe,(Fe,nr)=>{var At=Ni(),gs=Z(At,!0),an={};q(()=>{V(gs,nr),an!==(an=nr)&&(At.value=(At.__value=an)??"")}),m(Fe,At)}),Is(Te);var ke=v(Te,2),De=b(ke);{var Ce=Fe=>{en(Fe,{size:13,class:"animate-spin"})},on=Fe=>{Fs(Fe,{size:14})};H(De,Fe=>{o(l)?Fe(Ce):Fe(on,-1)})}var kn=v(ke,2),Mt=b(kn);Vo(Mt,{size:14});var Rn=v(fe,2),Rr=b(Rn);Cf(Rr,{get sessions(){return o(i)},get session(){return r()},get rootPath(){return s()},get target(){return o(a)},set target(Fe){d(a,Fe,!0)}}),q(()=>{qr(te,`width: ${o(N)??""}px`),ke.disabled=o(l)}),da(Te,()=>o(a),Fe=>d(a,Fe)),L("click",ke,$),L("click",kn,()=>d(I,!1)),m(g,E)};H(Mr,g=>{o(I)&&g(_s)})}var tr=v(wn,2),Ar=b(tr);{var Ir=g=>{var E=Sv(),R=b(E);{var te=ke=>{ha(ke,{size:12})},fe=ke=>{ki(ke,{size:12})};H(R,ke=>{o(Ve)?ke(te):ke(fe,-1)})}var we=v(R),Te=v(we);$i(Te,{size:11,class:"opacity-70"}),q(()=>{me(E,"title",`${h.connection.workspace_root??""} — click for connection settings`),V(we,` ${h.connection.label??""} `)}),L("click",E,y),m(g,E)};H(Ar,g=>{h.connection&&g(Ir)})}var Or=v(Ar,2);{var X=g=>{var E=Cv(),R=b(E);Aa(R,{size:12});var te=v(R);q(()=>V(te,` ${h.gitBranch??""}`)),m(g,E)};H(Or,g=>{h.gitBranch&&g(X)})}var Re=v(Or,2),Ee=Z(Re,!0),ie=v(Re,2),Ne=b(ie);{var st=g=>{var E=Ev(),R=Z(E);q(()=>V(R,`${h.dirtyCount??""} unsaved`)),m(g,E)};H(Ne,g=>{h.dirtyCount&&g(st)})}var Ze=v(Ne,2),Pt=Z(Ze,!0),zt=v(Ze,2);{var x=g=>{var E=Tv(),R=j(E),te=b(R);hd(te,{size:12});var fe=v(R,2),we=b(fe);rd(we,{size:12}),L("click",R,()=>d(Y,!o(Y))),L("click",fe,mr),m(g,E)};H(zt,g=>{h.connectionState==="connected"&&g(x)})}var A=v(zt,2);{var U=g=>{var E=Nv(),R=b(E);wi(R,{size:12}),L("click",E,()=>d(I,!o(I))),m(g,E)};H(A,g=>{g(U)})}var ne=v(tr,2);{var _e=g=>{Mf(g,{onclose:()=>d(G,!1)})};H(ne,g=>{o(G)&&g(_e)})}var ve=v(ne,2);{var ge=g=>{Hf(g,{onopen:xn,onclose:()=>d(re,!1)})};H(ve,g=>{o(re)&&g(ge)})}var Se=v(ve,2);{var Le=g=>{ev(g,{onclose:()=>h.needsHostKey=!1,ontrusted:async()=>{h.needsHostKey=!1,await h.connect(o(ue))}})};H(Se,g=>{h.needsHostKey&&g(Le)})}q(()=>{var g;sn.disabled=!h.connectionId,In=ht($t,1,"flex items-center gap-1 rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40",null,In,{"text-vs-bright":o(Y)}),$t.disabled=h.connectionState!=="connected",me($t,"title",h.connectionState==="connected"?"Toggle terminal (Ctrl+`)":"Open a workspace to use the terminal"),me(On,"title",(g=h.connection)==null?void 0:g.workspace_root),V(wr,h.connection?`${h.connection.label} — Multibuilder IDE`:"Multibuilder IDE"),ht(Jn,1,`flex items-center gap-1 ${h.connectionState==="connected"?"text-vs-green":h.connectionState==="connecting"?"text-vs-yellow":h.connectionState==="idle"?"text-vs-muted":"text-vs-red"}`),V($r,` ${ae[h.connectionState].label??""}`),V(Ee,h.statusText),V(Pt,h.detailText)}),L("click",Yn,()=>d(re,!0)),L("click",sn,()=>d(G,!0)),L("click",$t,()=>d(Y,!o(Y))),L("click",Qn,()=>h.setStatus("Signed in to the Multibuilder dashboard")),L("click",Cr,()=>d(z,!o(z))),m(e,br),mt()}Kt(["click","change"]);function Ul(e,t){return yu(zv,{target:e,props:t})}function Pi(){const e=document.getElementById("ide-root");if(!e||e.dataset.mounted)return;e.dataset.mounted="1";const t=window.__IDE_BOOTSTRAP__||{};Ul(e,{sessions:t.sessions||[],session:t.session||"",rootPath:t.rootPath||""})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Pi):Pi();window.mountRemoteIde=Ul;export{Oo as _};
