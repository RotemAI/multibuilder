const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ide-monaco.js","./ide2.css","./ide3.css"])))=>i.map(i=>d[i]);
var yl=Object.defineProperty;var gi=e=>{throw TypeError(e)};var xl=(e,t,n)=>t in e?yl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var tt=(e,t,n)=>xl(e,typeof t!="symbol"?t+"":t,n),po=(e,t,n)=>t.has(e)||gi("Cannot "+n);var u=(e,t,n)=>(po(e,t,"read from private field"),n?n.call(e):t.get(e)),V=(e,t,n)=>t.has(e)?gi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Q=(e,t,n,r)=>(po(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),ce=(e,t,n)=>(po(e,t,"access private method"),n);var Xs=Array.isArray,wl=Array.prototype.indexOf,Ds=Array.prototype.includes,Zs=Array.from,Xi=Object.defineProperty,yn=Object.getOwnPropertyDescriptor,Zi=Object.getOwnPropertyDescriptors,kl=Object.prototype,$l=Array.prototype,qo=Object.getPrototypeOf,mi=Object.isExtensible;function Ir(e){return typeof e=="function"}const Sl=()=>{};function El(e){return e()}function Mo(e){for(var t=0;t<e.length;t++)e[t]()}function Qi(){var e,t,n=new Promise((r,s)=>{e=r,t=s});return{promise:n,resolve:e,reject:t}}function Cl(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const n=[];for(const r of e)if(n.push(r),n.length===t)break;return n}const Ve=2,vr=4,ws=8,Go=1<<24,Rt=16,Tt=32,un=64,Po=128,Yo=256,Ct=512,Le=1024,Fe=2048,Dt=4096,st=8192,vt=16384,yr=32768,js=1<<25,wn=65536,Hs=1<<17,Tl=1<<18,xr=1<<19,ea=1<<20,Jt=1<<25,Bn=65536,Vs=1<<21,rr=1<<22,xn=1<<23,Zt=Symbol("$state"),ta=Symbol("component"),na=Symbol("legacy props"),Nl=Symbol(""),zs=Symbol("attributes"),Ao=Symbol("class"),zo=Symbol("style"),Fr=Symbol("text"),Is=Symbol("form reset"),ks=new class extends Error{constructor(){super(...arguments);tt(this,"name","StaleReactionError");tt(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var Gi;const Jo=!!((Gi=globalThis.document)!=null&&Gi.contentType)&&globalThis.document.contentType.includes("xml"),Ml=1,Pl=2,ra=4,Al=8,zl=16,Il=1,Ol=2,sa=4,Rl=8,Ll=16,Fl=1,Dl=2,Pe=Symbol("uninitialized"),oa="http://www.w3.org/1999/xhtml",ia="http://www.w3.org/2000/svg",jl="http://www.w3.org/1998/Math/MathML",Hl="@attach";function Vl(){console.warn("https://svelte.dev/e/derived_inert")}function Bl(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Kl(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function aa(e){return e===this.v}function Wl(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function la(e){return!Wl(e,this.v)}function ca(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Ul(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function ql(e,t,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Gl(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Yl(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Jl(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Xl(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Zl(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Ql(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ec(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function tc(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function nc(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let wr=!1;function rc(){wr=!0}let ye=null;function hr(e){ye=e}function ot(e,t=!1,n){ye={p:ye,i:!1,c:null,e:null,s:e,x:null,r:ie,l:wr&&!t?{s:null,u:null,$:[]}:null}}function it(e){var t=ye,n=t.e;if(n!==null){t.e=null;for(var r of n)Pa(r)}return t.i=!0,ye=t.p,Xo(e)}function Xo(e={}){return Xi(e,ta,{value:!0}),e}function kr(){return!wr||ye!==null&&ye.l===null}let zn=[];function ua(){var e=zn;zn=[],Mo(e)}function Xt(e){if(zn.length===0&&!Ur){var t=zn;queueMicrotask(()=>{t===zn&&ua()})}zn.push(e)}function sc(){for(;zn.length>0;)ua()}const oc=-7169;function Ee(e,t){e.f=e.f&oc|t}function Zo(e){(e.f&Ct)!==0||e.deps===null?Ee(e,Le):Ee(e,Dt)}function fa(e){if(e!==null)for(const t of e)(t.f&Ve)===0||(t.f&Bn)===0||(t.f^=Bn,fa(t.deps))}function da(e,t,n){(e.f&Fe)!==0?t.add(e):(e.f&Dt)!==0&&n.add(e),fa(e.deps),Ee(e,Le)}let Ps=!1;function ic(e){var t=Ps;try{return Ps=!1,[e(),Ps]}finally{Ps=t}}function va(e,t){if(t){const n=document.body;e.autofocus=!0,Xt(()=>{document.activeElement===n&&e.focus()})}}let bi=!1;function ac(){bi||(bi=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n[Is])==null||t.call(n)})},{capture:!0}))}function $r(e){var t=le,n=ie;Nt(null),Mt(null);try{return e()}finally{Nt(t),Mt(n)}}function Qo(e,t,n,r=n){e.addEventListener(t,()=>$r(n));const s=e[Is];s?e[Is]=()=>{s(),r(!0)}:e[Is]=()=>r(!0),ac()}function ha(e,t,n,r){const s=kr()?pr:ei;var o=e.filter(h=>!h.settled),i=t.map(s);if(n.length===0&&o.length===0){r(i);return}var a=ie,c=lc(),f=o.length===1?o[0].promise:o.length>1?Promise.all(o.map(h=>h.promise)):null;function v(h){if((a.f&vt)===0){c();try{r([...i,...h])}catch(p){Yt(p,a)}Bs()}}var b=pa();if(n.length===0){f.then(()=>v([])).finally(b);return}function d(){Promise.all(n.map(h=>cc(h))).then(v).catch(h=>Yt(h,a)).finally(b)}f?f.then(()=>{c(),d(),Bs()}):d()}function lc(){var e=ie,t=le,n=ye,r=W;return function(o=!0){Mt(e),Nt(t),hr(n),o&&(e.f&vt)===0&&(r==null||r.activate(),r==null||r.apply())}}function Bs(e=!0){Mt(null),Nt(null),hr(null),e&&(W==null||W.deactivate())}function pa(){var e=ie,t=e.b,n=W,r=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,n),n.increment(r,e),()=>{t==null||t.update_pending_count(-1,n),n.decrement(r,e)}}function pr(e){var t=Ve|Fe;return ie!==null&&(ie.f|=xr),{ctx:ye,deps:null,effects:null,equals:aa,f:t,fn:e,reactions:null,rv:0,v:Pe,wv:0,parent:ie,ac:null}}const Dr=Symbol("obsolete");function cc(e,t,n){let r=ie;r===null&&Ul();var s=void 0,o=fn(Pe),i=!le,a=new Set;return $c(()=>{var h,p;var c=ie,f=Qi();s=f.promise;try{Promise.resolve(e()).then(f.resolve,k=>{k!==ks&&f.reject(k)}).finally(Bs)}catch(k){f.reject(k),Bs()}var v=W;if(i){if((c.f&yr)!==0)var b=pa();if((h=r.b)!=null&&h.is_rendered())(p=v.async_deriveds.get(c))==null||p.reject(Dr);else for(const k of a.values())k.reject(Dr);a.add(f),v.async_deriveds.set(c,f)}const d=(k,S=void 0)=>{b==null||b(),a.delete(f),S!==Dr&&(v.activate(),S?(o.f|=xn,_r(o,S)):((o.f&xn)!==0&&(o.f^=xn),_r(o,k)),v.deactivate())};f.promise.then(d,k=>d(null,k||"unknown"))}),eo(()=>{for(const c of a)c.reject(Dr)}),new Promise(c=>{function f(v){function b(){v===s?c(o):f(s)}v.then(b,b)}f(s)})}function ft(e){const t=pr(e);return Fa(t),t}function ei(e){const t=pr(e);return t.equals=la,t}function uc(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)Ye(t[n])}}function ti(e){var t,n=ie,r=e.parent;if(!dn&&r!==null&&e.v!==Pe&&(r.f&(vt|st))!==0)return Vl(),e.v;Mt(r);try{e.f&=~Bn,uc(e),t=Va(e)}finally{Mt(n)}return t}function _a(e){var t=ti(e);if(!e.equals(t)&&(e.wv=ja(),(!(W!=null&&W.is_fork)||e.deps===null)&&(W!==null?(W.capture(e,t,!0),Wr==null||Wr.capture(e,t,!0)):e.v=t,e.deps===null))){Ee(e,Le);return}dn||(qe!==null?(si()||W!=null&&W.is_fork)&&qe.set(e,t):Zo(e))}function fc(e){var t;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),n.ac!==null&&$r(()=>{n.ac.abort(ks),n.ac=null}),n.fn!==null&&(n.teardown=Sl),Jr(n,0),oi(n))}function ga(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&gr(t)}let _o=null,er=null,W=null,Wr=null,qe=null,Io=null,Ur=!1,go=!1,nr=null,Os=null;var yi=0;let dc=1;var ir,mn,Rn,ar,lr,cr,an,ur,ct,Qr,ln,It,Ut,fr,Ln,de,Oo,jr,Ro,ma,ba,tr,vc,Hr;const Gs=class Gs{constructor(){V(this,de);tt(this,"id",dc++);V(this,ir,!1);tt(this,"linked",!0);V(this,mn,null);V(this,Rn,null);tt(this,"async_deriveds",new Map);tt(this,"current",new Map);tt(this,"previous",new Map);V(this,ar,new Set);V(this,lr,new Set);V(this,cr,0);V(this,an,new Map);V(this,ur,null);V(this,ct,[]);V(this,Qr,[]);V(this,ln,new Set);V(this,It,new Set);V(this,Ut,new Map);V(this,fr,new Set);tt(this,"is_fork",!1);V(this,Ln,!1);er===null?_o=er=this:(Q(er,Rn,this),Q(this,mn,er)),er=this}skip_effect(t){u(this,Ut).has(t)||u(this,Ut).set(t,{d:[],m:[]}),u(this,fr).delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=u(this,Ut).get(t);if(r){u(this,Ut).delete(t);for(var s of r.d)Ee(s,Fe),n(s);for(s of r.m)Ee(s,Dt),n(s)}u(this,fr).add(t)}capture(t,n,r=!1){t.v!==Pe&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&xn)===0&&(this.current.set(t,[n,r]),qe==null||qe.set(t,n)),this.is_fork||(t.v=n)}activate(){W=this}deactivate(){W=null,qe=null}flush(){try{go=!0,W=this,ce(this,de,jr).call(this)}finally{yi=0,Io=null,nr=null,Os=null,go=!1,W=null,qe=null,Qt.clear()}}discard(){var t;for(const n of u(this,lr))n(this);u(this,lr).clear();for(const n of this.async_deriveds.values())n.reject(Dr);ce(this,de,Hr).call(this),(t=u(this,ur))==null||t.resolve()}register_created_effect(t){u(this,Qr).push(t)}increment(t,n){if(Q(this,cr,u(this,cr)+1),t){let r=u(this,an).get(n)??0;u(this,an).set(n,r+1)}}decrement(t,n){if(Q(this,cr,u(this,cr)-1),t){let r=u(this,an).get(n)??0;r===1?u(this,an).delete(n):u(this,an).set(n,r-1)}u(this,Ln)||(Q(this,Ln,!0),Xt(()=>{Q(this,Ln,!1),this.linked&&this.flush()}))}transfer_effects(t,n){for(const r of t)u(this,ln).add(r);for(const r of n)u(this,It).add(r);t.clear(),n.clear()}oncommit(t){u(this,ar).add(t)}ondiscard(t){u(this,lr).add(t)}settled(){return(u(this,ur)??Q(this,ur,Qi())).promise}static ensure(){if(W===null){const t=W=new Gs;!go&&!Ur&&Xt(()=>{u(t,ir)||t.flush()})}return W}apply(){{qe=null;return}}schedule(t){var s;if(Io=t,(s=t.b)!=null&&s.is_pending&&(t.f&(vr|ws|Go))!==0&&(t.f&yr)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(nr!==null&&n===ie&&(le===null||(le.f&Ve)===0))return;if((r&(un|Tt))!==0){if((r&Le)===0)return;n.f^=Le}}u(this,ct).push(n)}};ir=new WeakMap,mn=new WeakMap,Rn=new WeakMap,ar=new WeakMap,lr=new WeakMap,cr=new WeakMap,an=new WeakMap,ur=new WeakMap,ct=new WeakMap,Qr=new WeakMap,ln=new WeakMap,It=new WeakMap,Ut=new WeakMap,fr=new WeakMap,Ln=new WeakMap,de=new WeakSet,Oo=function(){if(this.is_fork)return!0;for(const r of u(this,an).keys()){for(var t=r,n=!1;t.parent!==null;){if(u(this,Ut).has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1},jr=function(){var c,f,v,b;Q(this,ir,!0),yi++>1e3&&(ce(this,de,Hr).call(this),pc());for(const d of u(this,ln))u(this,It).delete(d),Ee(d,Fe),this.schedule(d);for(const d of u(this,It))Ee(d,Dt),this.schedule(d);const t=u(this,ct);Q(this,ct,[]),this.apply();var n=nr=[],r=[],s=Os=[];for(const d of t)try{ce(this,de,Ro).call(this,d,n,r)}catch(h){throw wa(d),ce(this,de,Oo).call(this)||this.discard(),h}if(W=null,s.length>0){var o=Gs.ensure();for(const d of s)o.schedule(d)}if(nr=null,Os=null,ce(this,de,Oo).call(this)){ce(this,de,tr).call(this,r),ce(this,de,tr).call(this,n);for(const[d,h]of u(this,Ut))xa(d,h);s.length>0&&ce(c=W,de,jr).call(c);return}const i=ce(this,de,ma).call(this);if(i){ce(this,de,tr).call(this,r),ce(this,de,tr).call(this,n),ce(f=i,de,ba).call(f,this);return}u(this,ln).clear(),u(this,It).clear();for(const d of u(this,ar))d(this);u(this,ar).clear(),Wr=this,xi(r),xi(n),Wr=null,(v=u(this,ur))==null||v.resolve();var a=W;if(u(this,cr)===0&&(u(this,ct).length===0||a!==null)&&ce(this,de,Hr).call(this),u(this,ct).length>0)if(a!==null){const d=a;u(d,ct).push(...u(this,ct).filter(h=>!u(d,ct).includes(h)))}else a=this;a!==null&&(Qt.clear(),ce(b=a,de,jr).call(b))},Ro=function(t,n,r){t.f^=Le;for(var s=t.first;s!==null;){var o=s.f,i=(o&(Tt|un))!==0,a=i&&(o&Le)!==0,c=a||(o&st)!==0||u(this,Ut).has(s);if(!c&&s.fn!==null){i?s.f^=Le:(o&vr)!==0?n.push(s):Ss(s)&&((o&Rt)!==0&&u(this,It).add(s),gr(s));var f=s.first;if(f!==null){s=f;continue}}for(;s!==null;){var v=s.next;if(v!==null){s=v;break}s=s.parent}}},ma=function(){for(var t=u(this,mn);t!==null;){if(!t.is_fork){for(const[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=u(t,mn)}return null},ba=function(t){var r;for(const[s,o]of t.current)!this.previous.has(s)&&t.previous.has(s)&&this.previous.set(s,t.previous.get(s)),this.current.set(s,o);for(const[s,o]of t.async_deriveds){const i=this.async_deriveds.get(s);i&&o.promise.then(i.resolve).catch(i.reject)}t.async_deriveds.clear(),this.transfer_effects(u(t,ln),u(t,It));const n=s=>{var o=s.reactions;if(o!==null&&!((s.f&Ve)!==0&&(s.f&(Fe|Dt))===0))for(const c of o){var i=c.f;if((i&Ve)!==0)n(c);else{var a=c;i&(rr|Rt)&&!this.async_deriveds.has(a)&&(u(this,It).delete(a),Ee(a,Fe),this.schedule(a))}}};for(const s of this.current.keys())n(s);this.oncommit(()=>t.discard()),ce(r=t,de,Hr).call(r),W=this,ce(this,de,jr).call(this)},tr=function(t){for(var n=0;n<t.length;n+=1)da(t[n],u(this,ln),u(this,It))},vc=function(){var b;for(let d=_o;d!==null;d=u(d,Rn)){var t=d.id<this.id,n=[];for(const[h,[p,k]]of this.current){if(d.current.has(h)){var r=d.current.get(h)[0];if(t&&p!==r)d.current.set(h,[p,k]);else continue}n.push(h)}if(t)for(const[h,p]of this.async_deriveds){const k=d.async_deriveds.get(h);k&&p.promise.then(k.resolve).catch(k.reject)}var s=[...d.current.keys()].filter(h=>!d.current.get(h)[1]);if(!(!u(d,ir)||s.length===0)){var o=s.filter(h=>!this.current.has(h));if(o.length===0)t&&d.discard();else if(n.length>0){if(t)for(const h of u(this,fr))d.unskip_effect(h,p=>{var k;(p.f&(Rt|rr))!==0?d.schedule(p):ce(k=d,de,tr).call(k,[p])});d.activate();var i=new Set,a=new Map;for(var c of n)ya(c,o,i,a);a=new Map;var f=[...d.current].filter(([h,p])=>{const k=this.current.get(h);return k?k[0]!==p[0]||k[1]!==p[1]:!0}).map(([h])=>h);if(f.length>0)for(const h of u(this,Qr))(h.f&(vt|st|Hs))===0&&ni(h,f,a)&&((h.f&(rr|Rt))!==0?(Ee(h,Fe),d.schedule(h)):u(d,ln).add(h));if(u(d,ct).length>0&&!u(d,Ln)){d.apply();for(var v of u(d,ct))ce(b=d,de,Ro).call(b,v,[],[]);Q(d,ct,[])}d.deactivate()}}}},Hr=function(){if(this.linked){var t=u(this,mn),n=u(this,Rn);t===null?_o=n:Q(t,Rn,n),n===null?er=t:Q(n,mn,t),this.linked=!1}};let Kn=Gs;function hc(e){var t=Ur;Ur=!0;try{for(var n;;){if(sc(),W===null)return n;W.flush()}}finally{Ur=t}}function pc(){try{Xl()}catch(e){Yt(e,Io)}}let zt=null;function xi(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(vt|st))===0&&Ss(r)&&(zt=new Set,gr(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Oa(r),(zt==null?void 0:zt.size)>0)){Qt.clear();for(const s of zt){if((s.f&(vt|st))!==0)continue;const o=[s];let i=s.parent;for(;i!==null;)zt.has(i)&&(zt.delete(i),o.push(i)),i=i.parent;for(let a=o.length-1;a>=0;a--){const c=o[a];(c.f&(vt|st))===0&&gr(c)}}zt.clear()}}zt=null}}function ya(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const s of e.reactions){const o=s.f;(o&Ve)!==0?ya(s,t,n,r):(o&(rr|Rt))!==0&&(o&Fe)===0&&ni(s,t,r)&&(Ee(s,Fe),ri(s))}}function ni(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const s of e.deps){if(Ds.call(t,s))return!0;if((s.f&Ve)!==0&&ni(s,t,n))return n.set(s,!0),!0}return n.set(e,!1),!1}function ri(e){W.schedule(e)}function xa(e,t){if(!((e.f&Tt)!==0&&(e.f&Le)!==0)){(e.f&Fe)!==0?t.d.push(e):(e.f&Dt)!==0&&t.m.push(e),Ee(e,Le);for(var n=e.first;n!==null;)xa(n,t),n=n.next}}function wa(e){Ee(e,Le);for(var t=e.first;t!==null;)wa(t),t=t.next}let Ks=new Set;const Qt=new Map;let ka=!1;function fn(e,t){var n={f:0,v:e,reactions:null,equals:aa,rv:0,wv:0};return n}function O(e,t){const n=fn(e);return Fa(n),n}function _c(e,t=!1,n=!0){var s;const r=fn(e);return t||(r.equals=la),wr&&n&&ye!==null&&ye.l!==null&&((s=ye.l).s??(s.s=[])).push(r),r}function g(e,t,n=!1){le!==null&&(!Ft||(le.f&Hs)!==0)&&kr()&&(le.f&(Ve|Rt|rr|Hs))!==0&&(tn===null||!tn.has(e))&&tc();let r=n?ge(t):t;return _r(e,r,Os)}function _r(e,t,n=null){if(!e.equals(t)){dn?Qt.set(e,t):Qt.has(e)||Qt.set(e,e.v);var r=Kn.ensure();if(r.capture(e,t),(e.f&Ve)!==0){const s=e;(e.f&Fe)!==0&&ti(s),qe===null&&Zo(s)}e.wv=ja(),$a(e,Fe,n),kr()&&ie!==null&&(ie.f&Le)!==0&&(ie.f&(Tt|un))===0&&($t===null?Ec([e]):$t.push(e)),!r.is_fork&&Ks.size>0&&!ka&&gc()}return t}function gc(){ka=!1;for(const e of Ks){(e.f&Le)!==0&&Ee(e,Dt);let t;try{t=Ss(e)}catch{t=!0}t&&gr(e)}Ks.clear()}function wi(e,t=1){var n=l(e),r=t===1?n++:n--;return g(e,n),r}function qr(e){g(e,e.v+1)}function $a(e,t,n){var r=e.reactions;if(r!==null)for(var s=kr(),o=r.length,i=0;i<o;i++){var a=r[i],c=a.f;if(!(!s&&a===ie)){var f=(c&Fe)===0;if(f&&Ee(a,t),(c&Hs)!==0)Ks.add(a);else if((c&Ve)!==0){var v=a;qe==null||qe.delete(v),(c&Bn)===0&&(c&Ct&&(ie===null||(ie.f&Vs)===0)&&(a.f|=Bn),$a(v,Dt,n))}else if(f){var b=a;(c&Rt)!==0&&zt!==null&&zt.add(b),n!==null?n.push(b):ri(b)}}}}function ge(e){if(typeof e!="object"||e===null||Zt in e||ta in e)return e;const t=qo(e);if(t!==kl&&t!==$l)return e;var n=new Map,r=Xs(e),s=O(0),o=Vn,i=a=>{if(Vn===o)return a();var c=le,f=Vn;Nt(null),Si(o);var v=a();return Nt(c),Si(f),v};return r&&n.set("length",O(e.length)),new Proxy(e,{defineProperty(a,c,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&Ql();var v=n.get(c);return v===void 0?i(()=>{var b=O(f.value);return n.set(c,b),b}):g(v,f.value,!0),!0},deleteProperty(a,c){var f=n.get(c);if(f===void 0){if(c in a){const v=i(()=>O(Pe));n.set(c,v),qr(s)}}else g(f,Pe),qr(s);return!0},get(a,c,f){var h;if(c===Zt)return e;var v=n.get(c),b=c in a;if(v===void 0&&(!b||(h=yn(a,c))!=null&&h.writable)&&(v=i(()=>{var p=ge(b?a[c]:Pe),k=O(p);return k}),n.set(c,v)),v!==void 0){var d=l(v);return d===Pe?void 0:d}return Reflect.get(a,c,f)},getOwnPropertyDescriptor(a,c){var f=Reflect.getOwnPropertyDescriptor(a,c);if(f&&"value"in f){var v=n.get(c);v&&(f.value=l(v))}else if(f===void 0){var b=n.get(c),d=b==null?void 0:b.v;if(b!==void 0&&d!==Pe)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return f},has(a,c){var d;if(c===Zt)return!0;var f=n.get(c),v=f!==void 0&&f.v!==Pe||Reflect.has(a,c);if(f!==void 0||ie!==null&&(!v||(d=yn(a,c))!=null&&d.writable)){f===void 0&&(f=i(()=>{var h=v?ge(a[c]):Pe,p=O(h);return p}),n.set(c,f));var b=l(f);if(b===Pe)return!1}return v},set(a,c,f,v){var M;var b=n.get(c),d=c in a;if(r&&c==="length")for(var h=f;h<b.v;h+=1){var p=n.get(h+"");p!==void 0?g(p,Pe):h in a&&(p=i(()=>O(Pe)),n.set(h+"",p))}if(b===void 0)(!d||(M=yn(a,c))!=null&&M.writable)&&(b=i(()=>O(void 0)),g(b,ge(f)),n.set(c,b));else{d=b.v!==Pe;var k=i(()=>ge(f));g(b,k)}var S=Reflect.getOwnPropertyDescriptor(a,c);if(S!=null&&S.set&&S.set.call(v,f),!d){if(r&&typeof c=="string"){var C=n.get("length"),z=Number(c);Number.isInteger(z)&&z>=C.v&&g(C,z+1)}qr(s)}return!0},ownKeys(a){l(s);var c=Reflect.ownKeys(a).filter(b=>{var d=n.get(b);return d===void 0||d.v!==Pe});for(var[f,v]of n)v.v!==Pe&&!(f in a)&&c.push(f);return c},setPrototypeOf(){ec()}})}function ki(e){try{if(e!==null&&typeof e=="object"&&Zt in e)return e[Zt]}catch{}return e}function Sa(e,t){return Object.is(ki(e),ki(t))}var Ws,Ea,Ca,Ta;function mc(){if(Ws===void 0){Ws=window,Ea=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Ca=yn(t,"firstChild").get,Ta=yn(t,"nextSibling").get,mi(e)&&(e[Ao]=void 0,e[zs]=null,e[zo]=void 0,e.__e=void 0),mi(n)&&(n[Fr]=void 0)}}function en(e=""){return document.createTextNode(e)}function Lt(e){return Ca.call(e)}function $s(e){return Ta.call(e)}function w(e,t){return Lt(e)}function L(e,t=!1){{var n=Lt(e);return n instanceof Comment&&n.data===""?$s(n):n}}function ae(e,t=!1){return Lt(e)}function m(e,t=1,n=!1){let r=e;for(;t--;)r=$s(r);return r}function bc(e){e.textContent=""}function Na(){return!1}function Qs(e,t,n){return t==null||t===oa?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function yc(e){var t=ie;if(t===null)return le.f|=xn,e;if((t.f&yr)===0&&(t.f&vr)===0)throw e;Yt(e,t)}function Yt(e,t){if(!(t!==null&&(t.f&vt)!==0)){for(;t!==null;){if((t.f&Po)!==0&&(t.f&(vt|js))===0){if((t.f&yr)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}function Ma(e){ie===null&&(le===null&&Jl(),Yl()),dn&&Gl()}function xc(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function Ht(e,t){var n=ie;n!==null&&(n.f&st)!==0&&(e|=st);var r={ctx:ye,deps:null,nodes:null,f:e|Fe|Ct,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};W==null||W.register_created_effect(r);var s=r;if((e&vr)!==0)nr!==null?nr.push(r):Kn.ensure().schedule(r);else if(t!==null){try{gr(r)}catch(i){throw Ye(r),i}s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&xr)===0&&(s=s.first,(e&Rt)!==0&&(e&wn)!==0&&s!==null&&(s.f|=wn))}if(s!==null&&(s.parent=n,n!==null&&xc(s,n),le!==null&&(le.f&Ve)!==0&&(e&un)===0)){var o=le;(o.effects??(o.effects=[])).push(s)}return r}function si(){return le!==null&&!Ft}function eo(e){const t=Ht(ws,null);return Ee(t,Le),t.teardown=e,t}function nn(e){Ma();var t=ie.f,n=!le&&(t&Tt)!==0&&ye!==null&&!ye.i;if(n){var r=ye;(r.e??(r.e=[])).push(e)}else return Pa(e)}function Pa(e){return Ht(vr|ea,e)}function wc(e){return Ma(),Ht(ws|ea,e)}function kc(e){Kn.ensure();const t=Ht(un|xr,e);return(n={})=>new Promise(r=>{n.outro?Hn(t,()=>{Ye(t),r(void 0)}):(Ye(t),r(void 0))})}function to(e){return Ht(vr,e)}function $c(e){return Ht(rr|xr,e)}function no(e,t=0){return Ht(ws|t,e)}function G(e,t=[],n=[],r=[]){ha(r,t,n,s=>{Ht(ws,()=>{e(...s.map(l))})})}function Sr(e,t=0){var n=Ht(Rt|t,e);return n}function Aa(e,t=0){var n=Ht(Go|t,e);return n}function ut(e){return Ht(Tt|xr,e)}function za(e){var t=e.teardown;if(t!==null){const n=dn,r=le;$i(!0),Nt(null);try{t.call(null)}catch(s){Yt(s,e.parent)}finally{$i(n),Nt(r)}}}function oi(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const s=n.ac;s!==null&&$r(()=>{s.abort(ks)});var r=n.next;(n.f&un)!==0?n.parent=null:Ye(n,t),n=r}}function Sc(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&Tt)===0&&Ye(t),t=n}}function Ye(e,t=!0){var n=!1;(t||(e.f&Tl)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Ia(e.nodes.start,e.nodes.end),n=!0),e.f|=js,oi(e,t&&!n),Jr(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const o of r)o.stop();za(e),e.f^=js,e.f|=vt;var s=e.parent;s!==null&&s.first!==null&&Oa(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Ia(e,t){for(;e!==null;){var n=e===t?null:$s(e);e.remove(),e=n}}function Oa(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Hn(e,t,n=!0){var r=[];e.f|=Yo,Ra(e,r,!0);var s=()=>{n&&Ye(e),t&&t()},o=r.length;if(o>0){var i=()=>--o||s();for(var a of r)a.out(i)}else s()}function Ra(e,t,n){if((e.f&st)===0){e.f^=st;var r=e.nodes&&e.nodes.t;if(r!==null)for(const a of r)(a.is_global||n)&&t.push(a);for(var s=e.first;s!==null;){var o=s.next;if((s.f&un)===0){var i=(s.f&wn)!==0||(s.f&Tt)!==0&&(e.f&Rt)!==0;Ra(s,t,i?n:!1)}s=o}}}function Us(e){e.f&=~Yo,La(e,!0)}function La(e,t){if((e.f&Yo)===0&&(e.f&st)!==0){e.f^=st,(e.f&Le)===0&&(Ee(e,Fe),Kn.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,s=(n.f&wn)!==0||(n.f&Tt)!==0;La(n,s?t:!1),n=r}var o=e.nodes&&e.nodes.t;if(o!==null)for(const i of o)(i.is_global||t)&&i.in()}}function ii(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var s=n===r?null:$s(n);t.append(n),n=s}}let Rs=!1,dn=!1;function $i(e){dn=e}let le=null,Ft=!1;function Nt(e){le=e}let ie=null;function Mt(e){ie=e}let tn=null;function Fa(e){le!==null&&(tn??(tn=new Set)).add(e)}let dt=null,bt=0,$t=null;function Ec(e){$t=e}let Da=1,In=0,Vn=In;function Si(e){Vn=e}function ja(){return++Da}function Ss(e){var t=e.f;if((t&Fe)!==0)return!0;if(t&Ve&&(e.f&=~Bn),(t&Dt)!==0){for(var n=e.deps,r=n.length,s=0;s<r;s++){var o=n[s];if(Ss(o)&&_a(o),o.wv>e.wv)return!0}(t&Ct)!==0&&qe===null&&Ee(e,Le)}return!1}function Ha(e,t,n=!0){var r=e.reactions;if(r!==null&&!(tn!==null&&tn.has(e)))for(var s=0;s<r.length;s++){var o=r[s];(o.f&Ve)!==0?Ha(o,t,!1):t===o&&(n?Ee(o,Fe):(o.f&Le)!==0&&Ee(o,Dt),ri(o))}}function Va(e){var t=dt,n=bt,r=$t,s=le,o=tn,i=ye,a=Ft,c=Vn,f=e.f;dt=null,bt=0,$t=null,le=(f&(Tt|un))===0?e:null,tn=null,hr(e.ctx),Ft=!1,Vn=++In,e.ac!==null&&($r(()=>{e.ac.abort(ks)}),e.ac=null);try{e.f|=Vs;var v=e.fn,b=v();e.f|=yr;var d=Ei(e);if(kr()&&$t!==null&&!Ft&&d!==null&&(e.f&(Ve|Dt|Fe))===0)for(var h=0;h<$t.length;h++)Ha($t[h],e);if(s!==null&&s!==e){if(In++,s.deps!==null)for(let p=0;p<n;p+=1)s.deps[p].rv=In;if(t!==null)for(const p of t)p.rv=In;$t!==null&&(r===null?r=$t:r.push(...$t))}return(e.f&xn)!==0&&(e.f^=xn),b}catch(p){return Ei(e),yc(p)}finally{e.f^=Vs,dt=t,bt=n,$t=r,le=s,tn=o,hr(i),Ft=a,Vn=c}}function Ei(e){var s;var t=e.deps,n=W==null?void 0:W.is_fork;if(dt!==null){var r;if(n||Jr(e,bt),t!==null&&bt>0)for(t.length=bt+dt.length,r=0;r<dt.length;r++)t[bt+r]=dt[r];else e.deps=t=dt;if(si()&&(e.f&Ct)!==0)for(r=bt;r<t.length;r++)((s=t[r]).reactions??(s.reactions=[])).push(e)}else!n&&t!==null&&bt<t.length&&(Jr(e,bt),t.length=bt);return t}function Cc(e,t){let n=t.reactions;if(n!==null){var r=wl.call(n,e);if(r!==-1){var s=n.length-1;s===0?n=t.reactions=null:(n[r]=n[s],n.pop())}}if(n===null&&(t.f&Ve)!==0&&(dt===null||!Ds.call(dt,t))){var o=t;(o.f&Ct)!==0&&(o.f^=Ct,o.f&=~Bn),o.v!==Pe&&Zo(o),o.ac!==null&&$r(()=>{o.ac.abort(ks),o.ac=null,Ee(o,Fe)}),fc(o),Jr(o,0)}}function Jr(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Cc(e,n[r])}function gr(e){var t=e.f;if((t&vt)===0){Ee(e,Le);var n=ie,r=Rs;ie=e,Rs=(t&(Tt|un))===0;try{(t&(Rt|Go))!==0?Sc(e):oi(e),za(e);var s=Va(e);e.teardown=typeof s=="function"?s:null,e.wv=Da;var o}finally{Rs=r,ie=n}}}async function Tc(){await Promise.resolve(),hc()}function l(e){var t=e.f,n=(t&Ve)!==0;if(le!==null&&!Ft){var r=ie!==null&&(ie.f&vt)!==0;if(!r&&(tn===null||!tn.has(e))){var s=le.deps;if((le.f&Vs)!==0)e.rv<In&&(e.rv=In,dt===null&&s!==null&&s[bt]===e?bt++:dt===null?dt=[e]:dt.push(e));else{le.deps??(le.deps=[]),Ds.call(le.deps,e)||le.deps.push(e);var o=e.reactions;o===null?e.reactions=[le]:Ds.call(o,le)||o.push(le)}}}if(dn&&Qt.has(e))return Qt.get(e);if(n){var i=e;if(dn){var a=i.v;return((i.f&Le)===0&&i.reactions!==null||Ka(i))&&(a=ti(i)),Qt.set(i,a),a}var c=(i.f&Ct)===0&&!Ft&&le!==null&&(Rs||(le.f&Ct)!==0),f=(i.f&yr)===0;Ss(i)&&(c&&(i.f|=Ct),_a(i)),c&&!f&&(ga(i),Ba(i))}if(qe!=null&&qe.has(e))return qe.get(e);if((e.f&xn)!==0)throw e.v;return e.v}function Ba(e){if(e.f|=Ct,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Ve)!==0&&(t.f&Ct)===0&&(ga(t),Ba(t))}function Ka(e){if(e.v===Pe)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Qt.has(t)||(t.f&Ve)!==0&&Ka(t))return!0;return!1}function rn(e){var t=Ft;try{return Ft=!0,e()}finally{Ft=t}}function Pn(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Zt in e)Lo(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&Zt in n&&Lo(n)}}}function Lo(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{Lo(e[r],t)}catch{}const n=qo(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=Zi(n);for(let s in r){const o=r[s].get;if(o)try{o.call(e)}catch{}}}}}function Nc(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Mc=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Pc(e){return Mc.includes(e)}const Ac={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function zc(e){return e=e.toLowerCase(),Ac[e]??e}const Ic=["touchstart","touchmove"];function Oc(e){return Ic.includes(e)}const On=Symbol("events"),Wa=new Set,Fo=new Set;function Ua(e,t,n,r={}){function s(o){if(r.capture||Do.call(t,o),!o.cancelBubble)return $r(()=>n==null?void 0:n.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Xt(()=>{t.addEventListener(e,s,r)}):t.addEventListener(e,s,r),s}function mr(e,t,n,r,s){var o={capture:r,passive:s},i=Ua(e,t,n,o);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&eo(()=>{t.removeEventListener(e,i,o)})}function R(e,t,n){(t[On]??(t[On]={}))[e]=n}function Pt(e){for(var t=0;t<e.length;t++)Wa.add(e[t]);for(var n of Fo)n(e)}let mo=null,bo=!1;function Do(e){var k,S;var t=this,n=t.ownerDocument,r=e.type,s=((k=e.composedPath)==null?void 0:k.call(e))||[],o=s[0]||e.target;mo=e,bo||(bo=!0,setTimeout(()=>{bo=!1,mo=null}));var i=0,a=mo===e&&e[On];if(a){var c=s.indexOf(a);if(c!==-1&&(t===document||t===window)){e[On]=t;return}var f=s.indexOf(t);if(f===-1)return;c<=f&&(i=c)}if(o=s[i]||e.target,o!==t){Xi(e,"currentTarget",{configurable:!0,get(){return o||n}});var v=le,b=ie;Nt(null),Mt(null);try{for(var d,h=[];o!==null&&o!==t;){try{var p=(S=o[On])==null?void 0:S[r];p!=null&&(!o.disabled||e.target===o)&&p.call(o,e)}catch(C){d?h.push(C):d=C}if(e.cancelBubble)break;i++,o=i<s.length?s[i]:null}if(d){for(let C of h)queueMicrotask(()=>{throw C});throw d}}finally{e[On]=t,delete e.currentTarget,Nt(v),Mt(b)}}}var Yi;const yo=((Yi=globalThis==null?void 0:globalThis.window)==null?void 0:Yi.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Rc(e){return(yo==null?void 0:yo.createHTML(e))??e}function qa(e){var t=Qs("template");return t.innerHTML=Rc(e.replaceAll("<!>","<!---->")),t.content}function kn(e,t){var n=ie;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function A(e,t){var n=(t&Fl)!==0,r=(t&Dl)!==0,s,o=!e.startsWith("<!>");return()=>{s===void 0&&(s=qa(o?e:"<!>"+e),n||(s=Lt(s)));var i=r||Ea?document.importNode(s,!0):s.cloneNode(!0);if(n){var a=Lt(i),c=i.lastChild;kn(a,c)}else kn(i,i);return i}}function Lc(e,t,n="svg"){var r=!e.startsWith("<!>"),s=`<${n}>${r?e:"<!>"+e}</${n}>`,o;return()=>{if(!o){var i=qa(s),a=Lt(i);o=Lt(a)}var c=o.cloneNode(!0);return kn(c,c),c}}function Ga(e,t){return Lc(e,t,"svg")}function Ci(e=""){{var t=en(e+"");return kn(t,t),t}}function U(){var e=document.createDocumentFragment(),t=document.createComment(""),n=en();return e.append(t,n),kn(t,n),e}function y(e,t){e!==null&&e.before(t)}function Fc(e){let t=0,n=fn(0),r;return()=>{si()&&(l(n),no(()=>(t===0&&(r=rn(()=>e(()=>qr(n)))),t+=1,()=>{Xt(()=>{t-=1,t===0&&(r==null||r(),r=void 0,qr(n))})})))}}var Dc=wn|xr;function jc(e,t,n,r){new Hc(e,t,n,r)}var St,Uo,Et,Fn,nt,_t,rt,gt,qt,Dn,bn,dr,es,ts,cn,Ys,me,Vc,Bc,jo,Kc,Ho,Vr,Ls,Vo,Bo;class Hc{constructor(t,n,r,s){V(this,me);tt(this,"parent");tt(this,"is_pending",!1);tt(this,"transform_error");V(this,St);V(this,Uo,null);V(this,Et);V(this,Fn);V(this,nt);V(this,_t,null);V(this,rt,null);V(this,gt,null);V(this,qt,null);V(this,Dn,0);V(this,bn,0);V(this,dr,!1);V(this,es,new Set);V(this,ts,new Set);V(this,cn,null);V(this,Ys,Fc(()=>(Q(this,cn,fn(u(this,Dn))),()=>{Q(this,cn,null)})));var o;Q(this,St,t),Q(this,Et,n),Q(this,Fn,i=>{var a=ie;a.b=this,a.f|=Po,r(i)}),this.parent=ie.b,this.transform_error=s??((o=this.parent)==null?void 0:o.transform_error)??(i=>i),Q(this,nt,Sr(()=>{ce(this,me,Ho).call(this)},Dc))}defer_effect(t){da(t,u(this,es),u(this,ts))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,Et).pending}update_pending_count(t,n){ce(this,me,Vo).call(this,t,n),Q(this,Dn,u(this,Dn)+t),!(!u(this,cn)||u(this,dr))&&(Q(this,dr,!0),Xt(()=>{Q(this,dr,!1),u(this,cn)&&_r(u(this,cn),u(this,Dn))}))}get_effect_pending(){return u(this,Ys).call(this),l(u(this,cn))}error(t){if(!u(this,Et).onerror&&!u(this,Et).failed)throw t;W!=null&&W.is_fork?(u(this,_t)&&W.skip_effect(u(this,_t)),u(this,rt)&&W.skip_effect(u(this,rt)),u(this,gt)&&W.skip_effect(u(this,gt)),W.oncommit(()=>{ce(this,me,Bo).call(this,t)})):ce(this,me,Bo).call(this,t)}}St=new WeakMap,Uo=new WeakMap,Et=new WeakMap,Fn=new WeakMap,nt=new WeakMap,_t=new WeakMap,rt=new WeakMap,gt=new WeakMap,qt=new WeakMap,Dn=new WeakMap,bn=new WeakMap,dr=new WeakMap,es=new WeakMap,ts=new WeakMap,cn=new WeakMap,Ys=new WeakMap,me=new WeakSet,Vc=function(){try{Q(this,_t,ut(()=>u(this,Fn).call(this,u(this,St))))}catch(t){this.error(t)}},Bc=function(t){const n=u(this,Et).failed,{reset:r,invoke_onerror:s}=ce(this,me,jo).call(this,t);Xt(s),n&&Q(this,gt,ut(()=>{n(u(this,St),()=>t,()=>r)}))},jo=function(t){var n=!1,r=!1;const s=()=>{if(n){Kl();return}n=!0,r&&nc(),u(this,gt)!==null&&Hn(u(this,gt),()=>{Q(this,gt,null)}),ce(this,me,Ls).call(this,()=>{ce(this,me,Ho).call(this)})};return{reset:s,invoke_onerror:()=>{var i,a;try{r=!0,(a=(i=u(this,Et)).onerror)==null||a.call(i,t,s),r=!1}catch(c){Yt(c,u(this,nt)&&u(this,nt).parent)}}}},Kc=function(){const t=u(this,Et).pending;t&&(this.is_pending=!0,Q(this,rt,ut(()=>t(u(this,St)))),Xt(()=>{var n=Q(this,qt,document.createDocumentFragment()),r=en(),s=!1;if(n.append(r),Q(this,_t,ce(this,me,Ls).call(this,()=>{try{return ut(()=>u(this,Fn).call(this,r))}catch(o){try{this.error(o),s=!0}catch(i){Yt(i,u(this,nt).parent)}return null}})),u(this,_t)===null){Q(this,qt,null),s&&ce(this,me,Vr).call(this,W);return}u(this,bn)===0&&(u(this,St).before(n),Q(this,qt,null),Hn(u(this,rt),()=>{Q(this,rt,null)}),ce(this,me,Vr).call(this,W))}))},Ho=function(){try{if(this.is_pending=this.has_pending_snippet(),Q(this,bn,0),Q(this,Dn,0),Q(this,_t,ut(()=>{u(this,Fn).call(this,u(this,St))})),u(this,bn)>0){var t=Q(this,qt,document.createDocumentFragment());ii(u(this,_t),t);const n=u(this,Et).pending;Q(this,rt,ut(()=>n(u(this,St))))}else ce(this,me,Vr).call(this,W)}catch(n){this.error(n)}},Vr=function(t){this.is_pending=!1,t.transfer_effects(u(this,es),u(this,ts))},Ls=function(t){var n=ie,r=le,s=ye;Mt(u(this,nt)),Nt(u(this,nt)),hr(u(this,nt).ctx);try{return Kn.ensure(),t()}finally{Mt(n),Nt(r),hr(s)}},Vo=function(t,n){var r;if(!this.has_pending_snippet()){this.parent&&ce(r=this.parent,me,Vo).call(r,t,n);return}Q(this,bn,u(this,bn)+t),u(this,bn)===0&&(ce(this,me,Vr).call(this,n),u(this,rt)&&Hn(u(this,rt),()=>{Q(this,rt,null)}),u(this,qt)&&(u(this,St).before(u(this,qt)),Q(this,qt,null)))},Bo=function(t){u(this,_t)&&(Ye(u(this,_t)),Q(this,_t,null)),u(this,rt)&&(Ye(u(this,rt)),Q(this,rt,null)),u(this,gt)&&(Ye(u(this,gt)),Q(this,gt,null));let n=u(this,Et).failed;const r=s=>{const{reset:o,invoke_onerror:i}=ce(this,me,jo).call(this,s);i(),n&&Q(this,gt,ce(this,me,Ls).call(this,()=>{try{return ut(()=>{var a=ie;a.b=this,a.f|=Po,n(u(this,St),()=>s,()=>o)})}catch(a){return Yt(a,u(this,nt).parent),null}}))};Xt(()=>{var s;try{s=this.transform_error(t)}catch(o){Yt(o,u(this,nt)&&u(this,nt).parent);return}s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(r,o=>Yt(o,u(this,nt)&&u(this,nt).parent)):r(s)})};function Y(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[Fr]??(e[Fr]=e.nodeValue))&&(e[Fr]=n,e.nodeValue=`${n}`)}function Wc(e,t){return Uc(e,t)}const As=new Map;function Uc(e,{target:t,anchor:n,props:r={},events:s,context:o,intro:i=!0,transformError:a}){mc();var c=void 0,f=kc(()=>{var v=n??t.appendChild(en());jc(v,{pending:()=>{}},h=>{ot({});var p=ye;o&&(p.c=o),s&&(r.$$events=s),c=e(h,r)||Xo(),it()},a);var b=new Set,d=h=>{for(var p=0;p<h.length;p++){var k=h[p];if(!b.has(k)){b.add(k);var S=Oc(k);for(const M of[t,document]){var C=As.get(M);C===void 0&&(C=new Map,As.set(M,C));var z=C.get(k);z===void 0?(M.addEventListener(k,Do,{passive:S}),C.set(k,1)):C.set(k,z+1)}}}};return d(Zs(Wa)),Fo.add(d),()=>{var S;for(var h of b)for(const C of[t,document]){var p=As.get(C),k=p.get(h);--k==0?(C.removeEventListener(h,Do),p.delete(h),p.size===0&&As.delete(C)):p.set(h,k)}Fo.delete(d),v!==n&&((S=v.parentNode)==null||S.removeChild(v))}});return qc.set(c,f),c}let qc=new WeakMap;var Ot,Gt,mt,jn,ns,rs,Js;class ro{constructor(t,n=!0){tt(this,"anchor");V(this,Ot,new Map);V(this,Gt,new Map);V(this,mt,new Map);V(this,jn,new Set);V(this,ns,!0);V(this,rs,t=>{if(u(this,Ot).has(t)){var n=u(this,Ot).get(t),r=u(this,Gt).get(n);if(r)Us(r),u(this,jn).delete(n);else{var s=u(this,mt).get(n);s&&(Us(s.effect),u(this,Gt).set(n,s.effect),u(this,mt).delete(n),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[o,i]of u(this,Ot)){if(u(this,Ot).delete(o),o===t)break;const a=u(this,mt).get(i);a&&(Ye(a.effect),u(this,mt).delete(i))}for(const[o,i]of u(this,Gt)){if(o===n||u(this,jn).has(o))continue;const a=()=>{if(Array.from(u(this,Ot).values()).includes(o)){var f=document.createDocumentFragment();ii(i,f),f.append(en()),u(this,mt).set(o,{effect:i,fragment:f})}else Ye(i);u(this,jn).delete(o),u(this,Gt).delete(o)};u(this,ns)||!r?(u(this,jn).add(o),Hn(i,a,!1)):a()}}});V(this,Js,t=>{u(this,Ot).delete(t);const n=Array.from(u(this,Ot).values());for(const[r,s]of u(this,mt))n.includes(r)||(Ye(s.effect),u(this,mt).delete(r))});this.anchor=t,Q(this,ns,n)}ensure(t,n){var r=W,s=Na();if(n&&!u(this,Gt).has(t)&&!u(this,mt).has(t))if(s){var o=document.createDocumentFragment(),i=en();o.append(i),u(this,mt).set(t,{effect:ut(()=>n(i)),fragment:o})}else u(this,Gt).set(t,ut(()=>n(this.anchor)));if(u(this,Ot).set(r,t),s){for(const[a,c]of u(this,Gt))a===t?r.unskip_effect(c):r.skip_effect(c);for(const[a,c]of u(this,mt))a===t?r.unskip_effect(c.effect):r.skip_effect(c.effect);r.oncommit(u(this,rs)),r.ondiscard(u(this,Js))}else u(this,rs).call(this,r)}}Ot=new WeakMap,Gt=new WeakMap,mt=new WeakMap,jn=new WeakMap,ns=new WeakMap,rs=new WeakMap,Js=new WeakMap;function j(e,t,n=!1){var r=new ro(e),s=n?wn:0;function o(i,a){r.ensure(i,a)}Sr(()=>{var i=!1;t((a,c=0)=>{i=!0,o(c,a)}),i||o(-1,null)},s)}const Gc=Symbol("NaN");function Yc(e,t,n){var r=new ro(e),s=!kr();Sr(()=>{var o=t();o!==o&&(o=Gc),s&&o!==null&&typeof o=="object"&&(o={}),r.ensure(o,n)})}function Jc(e,t){return t}function Xc(e,t,n){for(var r=[],s=t.length,o,i=t.length,a=0;a<s;a++){let b=t[a];Hn(b,()=>{if(o){if(o.pending.delete(b),o.done.add(b),o.pending.size===0){var d=e.outrogroups;Ko(e,Zs(o.done)),d.delete(o),d.size===0&&(e.outrogroups=null)}}else i-=1},!1)}if(i===0){var c=r.length===0&&n!==null&&e.pending.size===0;if(c){var f=n,v=f.parentNode;bc(v),v.append(f),e.items.clear()}Ko(e,t,!c)}else o={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(o)}function Ko(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(const i of e.pending.values())for(const a of i)r.add(e.items.get(a).e)}for(var s=0;s<t.length;s++){var o=t[s];if(r!=null&&r.has(o)){o.f|=Jt;const i=document.createDocumentFragment();ii(o,i)}else Ye(t[s],n)}}var Ti;function Ge(e,t,n,r,s,o=null){var i=e,a=new Map,c=(t&ra)!==0;if(c){var f=e;i=f.appendChild(en())}var v=null,b=ei(()=>{var M=n();return Xs(M)?M:M==null?[]:Zs(M)}),d,h=new Map,p=!0;function k(M){(z.effect.f&vt)===0&&(z.pending.delete(M),z.fallback=v,Zc(z,d,i,t,r),v!==null&&(d.length===0?(v.f&Jt)===0?Us(v):(v.f^=Jt,Br(v,null,i)):Hn(v,()=>{v=null})))}function S(M){z.pending.delete(M)}var C=Sr(()=>{d=l(b);for(var M=d.length,P=new Set,x=W,$=Na(),N=0;N<M;N+=1){var q=d[N],J=r(q,N),B=p?null:a.get(J);B?(B.v&&_r(B.v,q),B.i&&_r(B.i,N),$&&x.unskip_effect(B.e)):(B=Qc(a,p?i:Ti??(Ti=en()),q,J,N,s,t,n),p||(B.e.f|=Jt),a.set(J,B)),P.add(J)}if(M===0&&o&&!v&&(p?v=ut(()=>o(i)):(v=ut(()=>o(Ti??(Ti=en()))),v.f|=Jt)),M>P.size&&ql(),!p)if(h.set(x,P),$){for(const[I,K]of a)P.has(I)||x.skip_effect(K.e);x.oncommit(k),x.ondiscard(S)}else k(x);l(b)}),z={effect:C,items:a,pending:h,outrogroups:null,fallback:v};p=!1}function Or(e){for(;e!==null&&(e.f&Tt)===0;)e=e.next;return e}function Zc(e,t,n,r,s){var B,I,K,re,ue,ke,he,ze,X;var o=(r&Al)!==0,i=t.length,a=e.items,c=Or(e.effect.first),f,v=null,b,d=[],h=[],p,k,S,C;if(o)for(C=0;C<i;C+=1)p=t[C],k=s(p,C),S=a.get(k).e,(S.f&Jt)===0&&((I=(B=S.nodes)==null?void 0:B.a)==null||I.measure(),(b??(b=new Set)).add(S));for(C=0;C<i;C+=1){if(p=t[C],k=s(p,C),S=a.get(k).e,e.outrogroups!==null)for(const Z of e.outrogroups)Z.pending.delete(S),Z.done.delete(S);if((S.f&st)!==0&&(Us(S),o&&((re=(K=S.nodes)==null?void 0:K.a)==null||re.unfix(),(b??(b=new Set)).delete(S))),(S.f&Jt)!==0)if(S.f^=Jt,S===c)Br(S,null,n);else{var z=v?v.next:c;S===e.effect.last&&(e.effect.last=S.prev),S.prev&&(S.prev.next=S.next),S.next&&(S.next.prev=S.prev),_n(e,v,S),_n(e,S,z),Br(S,z,n),v=S,d=[],h=[],c=Or(v.next);continue}if(S!==c){if(f!==void 0&&f.has(S)){if(d.length<h.length){var M=h[0],P;v=M.prev;var x=d[0],$=d[d.length-1];for(P=0;P<d.length;P+=1)Br(d[P],M,n);for(P=0;P<h.length;P+=1)f.delete(h[P]);_n(e,x.prev,$.next),_n(e,v,x),_n(e,$,M),c=M,v=$,C-=1,d=[],h=[]}else f.delete(S),Br(S,c,n),_n(e,S.prev,S.next),_n(e,S,v===null?e.effect.first:v.next),_n(e,v,S),v=S;continue}for(d=[],h=[];c!==null&&c!==S;)(f??(f=new Set)).add(c),h.push(c),c=Or(c.next);if(c===null)continue}(S.f&Jt)===0&&d.push(S),v=S,c=Or(S.next)}if(e.outrogroups!==null){for(const Z of e.outrogroups)Z.pending.size===0&&(Ko(e,Zs(Z.done)),(ue=e.outrogroups)==null||ue.delete(Z));e.outrogroups.size===0&&(e.outrogroups=null)}if(c!==null||f!==void 0){var N=[];if(f!==void 0)for(S of f)(S.f&st)===0&&N.push(S);for(;c!==null;)(c.f&st)===0&&c!==e.fallback&&N.push(c),c=Or(c.next);var q=N.length;if(q>0){var J=(r&ra)!==0&&i===0?n:null;if(o){for(C=0;C<q;C+=1)(he=(ke=N[C].nodes)==null?void 0:ke.a)==null||he.measure();for(C=0;C<q;C+=1)(X=(ze=N[C].nodes)==null?void 0:ze.a)==null||X.fix()}Xc(e,N,J)}}o&&Xt(()=>{var Z,Te;if(b!==void 0)for(S of b)(Te=(Z=S.nodes)==null?void 0:Z.a)==null||Te.apply()})}function Qc(e,t,n,r,s,o,i,a){var c=(i&Ml)!==0?(i&zl)===0?_c(n,!1,!1):fn(n):null,f=(i&Pl)!==0?fn(s):null;return{v:c,i:f,e:ut(()=>(o(t,c??n,f??s,a),()=>{e.delete(r)}))}}function Br(e,t,n){if(e.nodes)for(var r=e.nodes.start,s=e.nodes.end,o=t&&(t.f&Jt)===0?t.nodes.start:n;r!==null;){var i=$s(r);if(o.before(r),r===s)return;r=i}}function _n(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function eu(e,t,n=!1,r=!1,s=!1,o=!1){var i=e,a="";if(n)var c=e;G(()=>{var f=ie;if(a!==(a=t()??"")){if(n){f.nodes=null,c.innerHTML=a,a!==""&&kn(Lt(c),c.lastChild);return}if(f.nodes!==null&&(Ia(f.nodes.start,f.nodes.end),f.nodes=null),a!==""){var v=r?ia:s?jl:void 0,b=Qs(r?"svg":s?"math":"template",v);b.innerHTML=a;var d=r||s?b:b.content;if(kn(Lt(d),d.lastChild),r||s)for(;Lt(d);)i.before(Lt(d));else i.before(d)}}})}function ne(e,t,n,r,s){var a,c;if((a=t.$$host)!=null&&a.$$shadowRoot){const f=Qs("slot");y(e,f);return}var o=(c=t.$$slots)==null?void 0:c[n],i=!1;o===!0&&(o=t.children,i=!0),o===void 0||o(e,i?()=>r:r)}function Ni(e,t,n){var r=new ro(e);Sr(()=>{var s=t()??null;r.ensure(s,s&&(o=>n(o,s)))},wn)}function tu(e,t,n,r,s,o){var i=null,a=e,c=new ro(a,!1);Sr(()=>{const f=t()||null;var v=ia;if(f===null){c.ensure(null,null);return}return c.ensure(f,b=>{if(f){if(i=Qs(f,v),kn(i,i),r){var d=null,h=i.appendChild(en());r(i,h),d==null||d.remove()}ie.nodes.end=i,b.before(i)}}),()=>{}},wn),eo(()=>{})}function nu(e,t){var n=void 0,r;Aa(()=>{n!==(n=t())&&(r&&(Ye(r),r=null),n&&(r=ut(()=>{to(()=>n(e))})))})}function Ya(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=Ya(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function ru(){for(var e,t,n=0,r="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=Ya(e))&&(r&&(r+=" "),r+=t);return r}function su(e){return typeof e=="object"?ru(e):e??""}const Mi=[...` 	
\r\f \v\uFEFF`];function ou(e,t,n){var r=e==null?"":""+e;if(t&&(r=r?r+" "+t:t),n){for(var s of Object.keys(n))if(n[s])r=r?r+" "+s:s;else if(r.length)for(var o=s.length,i=0;(i=r.indexOf(s,i))>=0;){var a=i+o;(i===0||Mi.includes(r[i-1]))&&(a===r.length||Mi.includes(r[a]))?r=(i===0?"":r.substring(0,i))+r.substring(a+1):i=a}}return r===""?null:r}function Pi(e,t=!1){var n=t?" !important;":";",r="";for(var s of Object.keys(e)){var o=e[s];o!=null&&o!==""&&(r+=" "+s+": "+o+n)}return r}function xo(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function iu(e,t){if(t){var n="",r,s;if(Array.isArray(t)?(r=t[0],s=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var o=!1,i=0,a=!1,c=[];r&&c.push(...Object.keys(r).map(xo)),s&&c.push(...Object.keys(s).map(xo));var f=0,v=-1;const k=e.length;for(var b=0;b<k;b++){var d=e[b];if(a?d==="/"&&e[b-1]==="*"&&(a=!1):o?o===d&&(o=!1):d==="/"&&e[b+1]==="*"?a=!0:d==='"'||d==="'"?o=d:d==="("?i++:d===")"&&i--,!a&&o===!1&&i===0){if(d===":"&&v===-1)v=b;else if(d===";"||b===k-1){if(v!==-1){var h=xo(e.substring(f,v).trim());if(!c.includes(h)){d!==";"&&b++;var p=e.substring(f,b).trim();n+=" "+p+";"}}f=b+1,v=-1}}}}return r&&(n+=Pi(r)),s&&(n+=Pi(s,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function jt(e,t,n,r,s,o){var i=e[Ao];if(i!==n||i===void 0){var a=ou(n,r,o);a==null?e.removeAttribute("class"):t?e.className=a:e.setAttribute("class",a),e[Ao]=n}else if(o&&s!==o)for(var c in o){var f=!!o[c];(s==null||f!==!!s[c])&&e.classList.toggle(c,f)}return o}function wo(e,t={},n,r){for(var s in n){var o=n[s];t[s]!==o&&(n[s]==null?e.style.removeProperty(s):e.style.setProperty(s,o,r))}}function Gr(e,t,n,r){var s=e[zo];if(s!==t){var o=iu(t,r);o==null?e.removeAttribute("style"):e.style.cssText=o,e[zo]=t}else r&&(Array.isArray(r)?(wo(e,n==null?void 0:n[0],r[0]),wo(e,n==null?void 0:n[1],r[1],"important")):wo(e,n,r));return r}function Ja(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Ai(e,t){var n=!("__defaultValue"in e);!n&&e.__defaultValue===t||(e.__defaultValue=t,Xa(e,!n||"__value"in e))}function Xa(e,t){var n=e.__defaultValue,r=e.multiple,s=r?n??[]:null;if(!(r&&!Xs(s))){var o=e.selectedIndex,i=t&&r?new Set(e.selectedOptions):null;for(var a of e.options){var c=or(a);Ja(a,r?s.includes(c):Sa(c,n))}if(t)if(i!==null)for(a of e.options){var f=i.has(a);a.selected!==f&&(a.selected=f)}else e.selectedIndex!==o&&(e.selectedIndex=o)}}function br(e,t,n=!1){if(e.multiple){if(t==null)return;if(!Xs(t))return Bl();for(var r of e.options)r.selected=t.includes(or(r));return}for(r of e.options){var s=or(r);if(Sa(s,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function sr(e){var t=new MutationObserver(n=>{n.every(au)||("__defaultValue"in e&&Xa(e,!1),"__value"in e&&br(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),eo(()=>{t.disconnect()})}function Wo(e,t,n=t){var r=new WeakSet,s=!0;Qo(e,"change",o=>{var i=o?"[selected]":":checked",a;if(e.multiple)a=[].map.call(e.querySelectorAll(i),or);else{var c=e.querySelector(i)??e.querySelector("option:not([disabled])");a=c&&or(c)}n(a),e.__value=a,W!==null&&r.add(W)}),to(()=>{var o=t();if(e===document.activeElement){var i=W;if(r.has(i))return}if(br(e,o,s),s&&o===void 0){var a=e.querySelector(":checked");a!==null&&(o=or(a),n(o))}e.__value=o,s=!1})}function or(e){return"__value"in e?e.__value:e.value}function au(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(n=>n.nodeName==="SELECTEDCONTENT")}return!1}const Rr=Symbol("class"),Lr=Symbol("style"),Za=Symbol("is custom element"),Qa=Symbol("is html"),lu=Jo?"input":"INPUT",cu=Jo?"option":"OPTION",el=Jo?"select":"SELECT";function ve(e,t,n,r){var s=tl(e);s[t]!==(s[t]=n)&&(t==="loading"&&(e[Nl]=n),n==null?e.removeAttribute(t):typeof n!="string"&&nl(e).has(t)?e[t]=n:e.setAttribute(t,n))}function uu(e,t,n,r,s=!1,o=!1){var i=tl(e),a=i[Za],c=!i[Qa],f=t||{},v=e.nodeName===cu,b=e.nodeName===el;for(var d in t)!(d in n)&&d[0]+d[1]!=="$$"&&(n[d]=null);n.class?n.class=su(n.class):n[Rr]&&(n.class=null),n[Lr]&&(n.style??(n.style=null));var h=nl(e);if(e.nodeName===lu&&"type"in n&&("value"in n||"__value"in n)){var p=n.type;(p!==f.type||p===void 0&&e.hasAttribute("type"))&&(f.type=p,ve(e,"type",p))}for(const x in n){let $=n[x];if(v&&x==="value"&&$==null){e.value=e.__value="",f[x]=$;continue}if(x==="class"){var k=e.namespaceURI==="http://www.w3.org/1999/xhtml";jt(e,k,$,r,t==null?void 0:t[Rr],n[Rr]),f[x]=$,f[Rr]=n[Rr];continue}if(x==="style"){Gr(e,$,t==null?void 0:t[Lr],n[Lr]),f[x]=$,f[Lr]=n[Lr];continue}var S=f[x];if(!($===S&&!($===void 0&&e.hasAttribute(x)))){f[x]=$;var C=x[0]+x[1];if(C!=="$$")if(C==="on"){const N={},q="$$"+x;let J=x.slice(2);var z=Pc(J);if(Nc(J)&&(J=J.slice(0,-7),N.capture=!0),!z&&S){if($!=null)continue;e.removeEventListener(J,f[q],N),f[q]=null}if(z)R(J,e,$),Pt([J]);else if($!=null){let B=function(I){f[x].call(this,I)};f[q]=Ua(J,e,B,N)}}else if(x==="style")ve(e,x,$);else if(x==="autofocus")va(e,!!$);else if(!a&&(x==="__value"||x==="value"&&$!=null))e.value=e.__value=$;else if(x==="selected"&&v)Ja(e,$);else{var M=x;c||(M=zc(M));var P=M==="defaultValue"||M==="defaultChecked";if(b&&M==="defaultValue")continue;if($==null&&!a&&!P)if(i[x]=null,M==="value"||M==="checked"){let N=e;const q=t===void 0;if(M==="value"){let J=N.defaultValue;N.removeAttribute(M),N.defaultValue=J,N.value=N.__value=q?J:null}else{let J=N.defaultChecked;N.removeAttribute(M),N.defaultChecked=J,N.checked=q?J:!1}}else e.removeAttribute(x);else P||(a||typeof $!="string")&&h.has(M)?(e[M]=$,M in i&&(i[M]=Pe)):typeof $!="function"&&ve(e,M,$)}}}return f}function zi(e,t,n=[],r=[],s=[],o,i=!1,a=!1){ha(s,n,r,c=>{var f=void 0,v={},b=e.nodeName===el,d=!1;if(Aa(()=>{var p=t(...c.map(l)),k=uu(e,f,p,o,i,a);if(d&&b){var S=e;"defaultValue"in p&&Ai(S,p.defaultValue),"value"in p&&br(S,p.value)}for(let z of Object.getOwnPropertySymbols(v))p[z]||Ye(v[z]);for(let z of Object.getOwnPropertySymbols(p)){var C=p[z];z.description===Hl&&(!f||C!==f[z])&&(v[z]&&Ye(v[z]),v[z]=ut(()=>nu(e,()=>C))),k[z]=C}f=k}),b){var h=e;to(()=>{var p=f;"defaultValue"in p&&Ai(h,p.defaultValue),br(h,p.value,!0),sr(h)})}d=!0})}function tl(e){return e[zs]??(e[zs]={[Za]:e.nodeName.includes("-"),[Qa]:e.namespaceURI===oa})}var Ii=new Map;function nl(e){var t=e.getAttribute("is")||e.nodeName,n=Ii.get(t);if(n)return n;Ii.set(t,n=new Set);for(var r,s=e,o=Element.prototype;o!==s;){r=Zi(s);for(var i in r)r[i].set&&i!=="innerHTML"&&i!=="textContent"&&i!=="innerText"&&n.add(i);s=qo(s)}return n}function Ue(e,t,n=t){var r=new WeakSet;Qo(e,"input",async s=>{var o=s?e.defaultValue:e.value;if(o=ko(e)?$o(o):o,n(o),W!==null&&r.add(W),await Tc(),o!==(o=t())){var i=e.selectionStart,a=e.selectionEnd,c=e.value.length;if(e.value=o??"",a!==null){var f=e.value.length;i===a&&a===c&&f>c?(e.selectionStart=f,e.selectionEnd=f):(e.selectionStart=i,e.selectionEnd=Math.min(a,f))}}}),rn(t)==null&&e.value&&(n(ko(e)?$o(e.value):e.value),W!==null&&r.add(W)),no(()=>{var s=t();if(e===document.activeElement){var o=W;if(r.has(o))return}ko(e)&&s===$o(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function fu(e,t,n=t){Qo(e,"change",r=>{var s=r?e.defaultChecked:e.checked;n(s)}),rn(t)==null&&n(e.checked),no(()=>{var r=t();e.checked=!!r})}function ko(e){var t=e.type;return t==="number"||t==="range"}function $o(e){return e===""?null:+e}function So(e,t){return e===t||(e==null?void 0:e[Zt])===t}function Xr(e=Xo(),t,n,r){var s=ye.r,o=ie;return to(()=>{var i,a;return no(()=>{i=a,a=[],rn(()=>{So(n(...a),e)||(t(e,...a),i&&So(n(...i),e)&&t(null,...i))})}),()=>{let c=o;for(;c!==s&&c.parent!==null&&c.parent.f&js;)c=c.parent;const f=()=>{a&&So(n(...a),e)&&t(null,...a)},v=c.teardown;c.teardown=()=>{f(),v==null||v()}}}),e}function rl(e=!1){const t=ye,n=t.l.u;if(!n)return;let r=()=>Pn(t.s);if(e){let s=0,o={};const i=pr(()=>{let a=!1;const c=t.s;for(const f in c)c[f]!==o[f]&&(o[f]=c[f],a=!0);return a&&s++,s});r=()=>l(i)}n.b.length&&wc(()=>{Oi(t,r),Mo(n.b)}),nn(()=>{const s=rn(()=>n.m.map(El));return()=>{for(const o of s)typeof o=="function"&&o()}}),n.a.length&&nn(()=>{Oi(t,r),Mo(n.a)})}function Oi(e,t){if(e.l.s)for(const n of e.l.s)l(n);t()}function du(e){var t=fn(0);return function(){return arguments.length===1?(g(t,l(t)+1),arguments[0]):(l(t),e())}}const vu={get(e,t){if(!e.exclude.includes(t))return l(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var r=ie;try{Mt(e.parent_effect),e.special[t]=Ae({get[t](){return e.props[t]}},t,sa)}finally{Mt(r)}}return e.special[t](n),wi(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),wi(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ee(e,t){return new Proxy({props:e,exclude:t,special:{},version:fn(0),parent_effect:ie},vu)}const hu={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(Ir(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let s=e.props[r];Ir(s)&&(s=s());const o=yn(s,t);if(o&&o.set)return o.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(Ir(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const s=yn(r,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===Zt||t===na)return!1;for(let n of e.props)if(Ir(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){const t=[];for(let n of e.props)if(Ir(n)&&(n=n()),!!n){for(const r in n)t.includes(r)||t.push(r);for(const r of Object.getOwnPropertySymbols(n))t.includes(r)||t.push(r)}return t}};function se(...e){return new Proxy({props:e},hu)}function Ae(e,t,n,r){var P;var s=!wr||(n&Ol)!==0,o=(n&Rl)!==0,i=(n&Ll)!==0,a=r,c=!0,f=void 0,v=()=>i&&s?(f??(f=pr(r)),l(f)):(c&&(c=!1,a=i?rn(r):r),a);let b;if(o){var d=Zt in e||na in e;b=((P=yn(e,t))==null?void 0:P.set)??(d&&t in e?x=>e[t]=x:void 0)}var h,p=!1;o?[h,p]=ic(()=>e[t]):h=e[t],h===void 0&&r!==void 0&&(h=v(),b&&(s&&Zl(),b(h)));var k;if(s?k=()=>{var x=e[t];return x===void 0?v():(c=!0,x)}:k=()=>{var x=e[t];return x!==void 0&&(a=void 0),x===void 0?a:x},s&&(n&sa)===0)return k;if(b){var S=e.$$legacy;return(function(x,$){return arguments.length>0?((!s||!$||S||p)&&b($?k():x),x):k()})}var C=!1,z=((n&Il)!==0?pr:ei)(()=>(C=!1,k()));o&&l(z);var M=ie;return(function(x,$){if(arguments.length>0){const N=$?l(z):s&&o?ge(x):x;return g(z,N),C=!0,a!==void 0&&(a=N),x}return dn&&C||(M.f&vt)!==0?z.v:l(z)})}function Er(e){ye===null&&ca(),wr&&ye.l!==null?pu(ye).m.push(e):nn(()=>{const t=rn(e);if(typeof t=="function")return t})}function ai(e){ye===null&&ca(),Er(()=>()=>rn(e))}function pu(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const _u="5";var Ji;typeof window<"u"&&((Ji=window.__svelte??(window.__svelte={})).v??(Ji.v=new Set)).add(_u);const An=()=>window.__IDE_BOOTSTRAP__||{};function gu(e){const{rootPath:t="",session:n=""}=An();return`${t}/api/sessions/${encodeURIComponent(n)}/ide${e}`}async function He(e,t={}){const n=await fetch(gu(e),t),r=await n.json().catch(()=>({}));if(!n.ok){const s=new Error(r.error||"Request failed");throw Object.assign(s,r),s}return r}const Ze=(e,t)=>`/ssh-connections/${encodeURIComponent(e)}${t}`,fe={chat:async(e,t=80)=>{const{rootPath:n=""}=An(),r=`${n}/api/sessions/${encodeURIComponent(e)}/ide/chat?limit=${t}`,s=await fetch(r),o=await s.json().catch(()=>({}));if(!s.ok)throw new Error(o.error||"Could not load chat");return o},browse:async(e="")=>{const{rootPath:t=""}=An(),n=`${t}/api/ide/browse?path=${encodeURIComponent(e)}`,r=await fetch(n),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not browse folders");return s},sessionAgent:async e=>{const{rootPath:t=""}=An(),n=await fetch(`${t}/api/sessions/${encodeURIComponent(e)}/agent`),r=await n.json().catch(()=>({}));if(!n.ok)throw new Error(r.error||"Could not read agent settings");return r},setSessionAgent:async(e,t)=>{const{rootPath:n=""}=An(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/agent`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({agent:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not switch agent");return s},setSessionModel:async(e,t)=>{const{rootPath:n=""}=An(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/model`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change model");return s},setSessionEffort:async(e,t)=>{const{rootPath:n=""}=An(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/effort`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({effort:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change effort");return s},browseOn:(e,t="")=>He(Ze(e,`/browse?path=${encodeURIComponent(t)}`)),setWorkspaceRoot:(e,t,n)=>He(Ze(e,"/workspace-root"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({workspace_root:t,label:n})}),hostKey:e=>He(Ze(e,"/host-key")),trustHost:e=>He(Ze(e,"/host-key"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({accept:!0})}),listConnections:()=>He("/ssh-connections"),createConnection:e=>He("/ssh-connections",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),deleteConnection:e=>He(Ze(e,""),{method:"DELETE"}),connect:(e,t)=>He(Ze(e,"/connect"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t||""})}),status:e=>He(Ze(e,"/status?reconnect=1")),listFiles:(e,t)=>He(Ze(e,`/files?path=${encodeURIComponent(t)}`)),searchFiles:(e,t,n)=>He(Ze(e,`/files/search?path=${encodeURIComponent(t)}&query=${encodeURIComponent(n)}`)),readFile:(e,t)=>He(Ze(e,`/file?path=${encodeURIComponent(t)}`)),saveFile:(e,t,n)=>He(Ze(e,"/file"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:t,content:n})}),fs:(e,t)=>He(Ze(e,"/fs"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),git:(e,t)=>He(Ze(e,"/git"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),focusTerminal:e=>He(Ze(e,"/focus-terminal"),{method:"POST"}),getWorkspace:e=>He(Ze(e,"/workspace")),saveWorkspace:(e,t)=>He(Ze(e,"/workspace"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})};var ss,os,is,as,ls,cs,us,fs,ds,vs,hs,ps,_s,gs,ms,bs,ys,xs;class mu{constructor(){V(this,ss,O(ge([])));V(this,os,O(""));V(this,is,O("idle"));V(this,as,O("Ready"));V(this,ls,O("No file open"));V(this,cs,O("."));V(this,us,O(ge([])));V(this,fs,O(ge({})));V(this,ds,O(ge({})));V(this,vs,O(""));V(this,hs,O(ge([])));V(this,ps,O(""));V(this,_s,O(""));V(this,gs,O(""));V(this,ms,O(ge([])));V(this,bs,O(""));V(this,ys,O(!1));V(this,xs,O(!1));tt(this,"restoredKey","");tt(this,"persistTimer",null)}get connections(){return l(u(this,ss))}set connections(t){g(u(this,ss),t,!0)}get connectionId(){return l(u(this,os))}set connectionId(t){g(u(this,os),t,!0)}get connectionState(){return l(u(this,is))}set connectionState(t){g(u(this,is),t,!0)}get statusText(){return l(u(this,as))}set statusText(t){g(u(this,as),t,!0)}get detailText(){return l(u(this,ls))}set detailText(t){g(u(this,ls),t,!0)}get path(){return l(u(this,cs))}set path(t){g(u(this,cs),t,!0)}get entries(){return l(u(this,us))}set entries(t){g(u(this,us),t,!0)}get expanded(){return l(u(this,fs))}set expanded(t){g(u(this,fs),t,!0)}get treeChildren(){return l(u(this,ds))}set treeChildren(t){g(u(this,ds),t,!0)}get filter(){return l(u(this,vs))}set filter(t){g(u(this,vs),t,!0)}get tabs(){return l(u(this,hs))}set tabs(t){g(u(this,hs),t,!0)}get activeKey(){return l(u(this,ps))}set activeKey(t){g(u(this,ps),t,!0)}get gitOutput(){return l(u(this,_s))}set gitOutput(t){g(u(this,_s),t,!0)}get gitStatus(){return l(u(this,gs))}set gitStatus(t){g(u(this,gs),t,!0)}get gitBranches(){return l(u(this,ms))}set gitBranches(t){g(u(this,ms),t,!0)}get gitBranch(){return l(u(this,bs))}set gitBranch(t){g(u(this,bs),t,!0)}get needsHostKey(){return l(u(this,ys))}set needsHostKey(t){g(u(this,ys),t,!0)}get notARepo(){return l(u(this,xs))}set notARepo(t){g(u(this,xs),t,!0)}get connection(){return this.connections.find(t=>t.id===this.connectionId)||null}get activeTab(){return this.tabs.find(t=>t.key===this.activeKey)||null}get visibleEntries(){const t=this.filter.trim().toLowerCase();return t?this.entries.filter(n=>n.name.toLowerCase().includes(t)):this.entries}get dirtyCount(){return this.tabs.filter(t=>t.dirty).length}get gitDirtyCount(){return this.gitStatus.split(`
`).filter(t=>t.trim()&&!t.startsWith("##")).length}resetWorkspaceView(){this.tabs=[],this.activeKey="",this.restoredKey="",this.path=".",this.entries=[],this.expanded={},this.treeChildren={},this.filter="",this.gitOutput="",this.gitStatus="",this.gitBranches=[],this.gitBranch="",this.needsHostKey=!1,this.notARepo=!1}setStatus(t,n){this.statusText=t,n!==void 0&&(this.detailText=n)}async loadConnections(){try{const t=await fe.listConnections();this.connections=t.connections||[],!this.connectionId&&this.connections.length&&(this.connectionId=this.connections[0].id)}catch(t){this.setStatus(t.message||"Could not load connections")}}async refreshStatus(){var t,n,r;if(this.connectionId)try{const s=await fe.status(this.connectionId);s.connected?(this.connectionState="connected",this.setStatus(`Connected · ${((t=this.connection)==null?void 0:t.label)||"SSH workspace"}`,`SSH terminal: ${s.window_name||"open"}`),await this.restoreWorkspace()):(this.connectionState="reconnect",this.entries=[],this.setStatus(`Reconnect required · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,(r=this.connection)!=null&&r.has_password?"Auto-reconnect failed — select Connect to retry":"Select Connect to reopen SSH"))}catch(s){this.connectionState="error",this.setStatus(s.message||"Could not check SSH connection")}}async connect(t){var n;if(this.connectionId){this.connectionState="connecting",this.setStatus("Connecting…");try{const r=await fe.connect(this.connectionId,t);this.connectionState="connected",this.setStatus(`Connected · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,`SSH terminal: ${r.window_name||"open"}`),await this.restoreWorkspace()}catch(r){this.connectionState="error",this.setStatus(r.message||"Could not connect"),this.needsHostKey=!!r.needs_host_key}}}async refreshFiles(t){if(!this.connectionId)return;const n=t||this.path||".";try{const r=await fe.listFiles(this.connectionId,n);this.path=r.path||n,this.entries=r.entries||[],this.remember()}catch(r){this.setStatus(r.message||"Could not list remote files")}}async toggleDirectory(t){if(this.expanded[t]){const n={...this.expanded};delete n[t],this.expanded=n;return}if(this.expanded={...this.expanded,[t]:!0},!this.treeChildren[t])try{const n=await fe.listFiles(this.connectionId,t);this.treeChildren={...this.treeChildren,[t]:n.entries||[]}}catch(n){this.setStatus(n.message||"Could not expand folder")}}async openFile(t){if(!this.connectionId)return null;const n=`${this.connectionId}|${t}`,r=this.tabs.find(s=>s.key===n);if(r)return this.activeKey=n,r;try{const s=await fe.readFile(this.connectionId,t),o={key:`${this.connectionId}|${s.path}`,path:s.path,content:s.content||"",saved:s.content||"",dirty:!1};return this.tabs=[...this.tabs,o],this.activeKey=o.key,this.setStatus("Opened",o.path),this.remember(),o}catch(s){return this.setStatus(s.message||"Could not open remote file"),null}}updateContent(t,n){this.tabs=this.tabs.map(r=>r.key===t?{...r,content:n,dirty:n!==r.saved}:r),this.remember()}closeTab(t){var r;const n=this.tabs.find(s=>s.key===t);n!=null&&n.dirty&&!confirm(`Discard unsaved changes to ${n.path}?`)||(this.tabs=this.tabs.filter(s=>s.key!==t),this.activeKey===t&&(this.activeKey=((r=this.tabs.at(-1))==null?void 0:r.key)||""),this.remember())}async saveActive(){const t=this.activeTab;if(t)try{await fe.saveFile(this.connectionId,t.path,t.content),this.tabs=this.tabs.map(n=>n.key===t.key?{...n,saved:n.content,dirty:!1}:n),this.setStatus(`Saved ${t.path}`,t.path),this.remember()}catch(n){this.setStatus(n.message||"Could not save file")}}async restoreWorkspace(){const t=`${this.connectionId}`;if(!t)return;let n=null;try{n=await fe.getWorkspace(this.connectionId)}catch{n=null}if(await this.refreshFiles((n==null?void 0:n.last_directory)||"."),this.restoredKey===t)return;this.restoredKey=t;const r=(n==null?void 0:n.buffers)||{};for(const o of((n==null?void 0:n.tabs)||[]).slice(0,12)){const i=await this.openFile(o);i&&Object.prototype.hasOwnProperty.call(r,o)&&this.updateContent(i.key,r[o])}const s=this.tabs.find(o=>o.path===(n==null?void 0:n.active_path));s&&(this.activeKey=s.key)}remember(){this.persistTimer&&clearTimeout(this.persistTimer),this.persistTimer=setTimeout(()=>this.persist(),1500)}async persist(){var n;if(!this.connectionId)return;const t={};for(const r of this.tabs)r.dirty&&(t[r.path]=r.content);try{await fe.saveWorkspace(this.connectionId,{tabs:this.tabs.map(r=>r.path).slice(0,50),active_path:((n=this.activeTab)==null?void 0:n.path)||"",last_directory:this.path||".",buffers:t})}catch{}}async runGit(t,n={}){try{const r=await fe.git(this.connectionId,{action:t,path:this.path||".",...n});return r.not_a_repo?(this.gitOutput=r.error||"This folder is not a Git repository.",this.gitStatus="",this.gitBranches=[],this.gitBranch="",this.notARepo=!0,null):(this.notARepo=!1,this.gitOutput=r.output||r.status||"",this.gitStatus=r.status||"",this.gitBranches=r.branches||[],this.gitBranch=r.current_branch||"",r)}catch(r){return this.gitOutput=r.message||"Git command failed",null}}}ss=new WeakMap,os=new WeakMap,is=new WeakMap,as=new WeakMap,ls=new WeakMap,cs=new WeakMap,us=new WeakMap,fs=new WeakMap,ds=new WeakMap,vs=new WeakMap,hs=new WeakMap,ps=new WeakMap,_s=new WeakMap,gs=new WeakMap,ms=new WeakMap,bs=new WeakMap,ys=new WeakMap,xs=new WeakMap;const _=new mu;rc();/**
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
 */const bu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const yu=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
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
 */const Ri=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();var xu=Ga("<svg><!><!></svg>");function oe(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]),r=ee(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);ot(t,!1);let s=Ae(t,"name",8,void 0),o=Ae(t,"color",8,"currentColor"),i=Ae(t,"size",8,24),a=Ae(t,"strokeWidth",8,2),c=Ae(t,"absoluteStrokeWidth",8,!1),f=Ae(t,"iconNode",24,()=>[]);rl();var v=xu();zi(v,(h,p,k)=>({...bu,...h,...r,width:i(),height:i(),stroke:o(),"stroke-width":p,class:k}),[()=>yu(r)?void 0:{"aria-hidden":"true"},()=>(Pn(c()),Pn(a()),Pn(i()),rn(()=>c()?Number(a())*24/Number(i()):a())),()=>(Pn(Ri),Pn(s()),Pn(n),rn(()=>Ri("lucide-icon","lucide",s()?`lucide-${s()}`:"",n.class)))]);var b=w(v);Ge(b,1,f,Jc,(h,p)=>{var k=ft(()=>Cl(l(p),2));let S=()=>l(k)[0],C=()=>l(k)[1];var z=U(),M=L(z);tu(M,S,!0,(P,x)=>{zi(P,()=>({...C()}))}),y(h,z)});var d=m(b);ne(d,t,"default",{}),y(e,v),it()}function wu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];oe(e,se({name:"arrow-up"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Eo(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M20 6 9 17l-5-5"}]];oe(e,se({name:"check"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Yr(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];oe(e,se({name:"chevron-down"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function ku(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m9 18 6-6-6-6"}]];oe(e,se({name:"chevron-right"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Li(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];oe(e,se({name:"circle-alert"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function $u(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];oe(e,se({name:"circle-check"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Su(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]];oe(e,se({name:"circle-dot"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Eu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]];oe(e,se({name:"circle-user"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Cu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];oe(e,se({name:"circle"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Tu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}],["path",{d:"m9 10-5 5 5 5"}]];oe(e,se({name:"corner-down-left"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Nu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]];oe(e,se({name:"corner-left-up"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Mu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];oe(e,se({name:"external-link"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Fi(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m5 16-3 3 3 3"}],["path",{d:"m9 22 3-3-3-3"}]];oe(e,se({name:"file-code-corner"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Pu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]];oe(e,se({name:"file-diff"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Au(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M20 14V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M14 18h6"}]];oe(e,se({name:"file-minus-corner"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Di(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M14 19h6"}],["path",{d:"M17 16v6"}]];oe(e,se({name:"file-plus-corner"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function zu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]];oe(e,se({name:"file-plus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function li(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}]];oe(e,se({name:"file"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Iu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"}]];oe(e,se({name:"files"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Co(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];oe(e,se({name:"folder-open"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Ou(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];oe(e,se({name:"folder-plus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Ru(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];oe(e,se({name:"folder"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Lu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M6 3v12"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M15 6a9 9 0 0 0-9 9"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]];oe(e,se({name:"git-branch-plus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function ji(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M15 6a9 9 0 0 0-9 9V3"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}]];oe(e,se({name:"git-branch"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Fu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M12 3v6"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 15v6"}]];oe(e,se({name:"git-commit-vertical"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Du(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M10 16h.01"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["path",{d:"M21.946 12.013H2.054"}],["path",{d:"M6 16h.01"}]];oe(e,se({name:"hard-drive"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function ju(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];oe(e,se({name:"link-2"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Zr(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]];oe(e,se({name:"loader"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Hi(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}]];oe(e,se({name:"message-square"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Hu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{d:"M10 19v-3.96 3.15"}],["path",{d:"M7 19h5"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2"}]];oe(e,se({name:"monitor-smartphone"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Vu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}]];oe(e,se({name:"panel-bottom"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Bu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]];oe(e,se({name:"panel-left"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Ku(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];oe(e,se({name:"plus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function sl(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];oe(e,se({name:"refresh-cw"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function ci(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];oe(e,se({name:"search"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Vi(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];oe(e,se({name:"server"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Wu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]];oe(e,se({name:"shield-alert"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function To(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];oe(e,se({name:"sparkles"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Bi(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]];oe(e,se({name:"square-terminal"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Uu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];oe(e,se({name:"square"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function qu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];oe(e,se({name:"trash-2"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function qs(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];oe(e,se({name:"x"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=L(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}var Gu=A('<span class="w-[14px] shrink-0"></span>'),Yu=Ga('<svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1.5 3.5h4l1.2 1.4h7.8v7.6H1.5z" fill="#c09553"></path></svg>'),Ju=A('<div role="treeitem" tabindex="0"><!> <span class="flex shrink-0 items-center"><!></span> <span class="flex-1 truncate text-vs-fg"> </span> <span class="hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Rename"><span class="text-[11px] leading-none">✎</span></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Delete"><span class="text-[11px] leading-none">🗑</span></button></span></div> <!>',1);function ol(e,t){ot(t,!0);const n=ft(()=>t.dir==="."?t.entry.name:`${t.dir}/${t.entry.name}`),r=ft(()=>!!_.expanded[l(n)]),s=ft(()=>_.treeChildren[l(n)]||[]),o=ft(()=>{var I;return((I=_.activeTab)==null?void 0:I.path)===l(n)});async function i(){t.entry.is_dir?await _.toggleDirectory(l(n)):await _.openFile(l(n))}async function a(I){if(I.stopPropagation(),!!confirm(`Delete ${l(n)}? Folders must already be empty.`))try{await fe.fs(_.connectionId,{action:"delete",path:l(n)}),await _.refreshFiles()}catch(K){_.setStatus(K.message||"Could not delete")}}async function c(I){I.stopPropagation();const K=prompt("Rename to (relative path):",l(n));if(!(!K||K===l(n)))try{await fe.fs(_.connectionId,{action:"rename",path:l(n),new_path:K}),await _.refreshFiles()}catch(re){_.setStatus(re.message||"Could not rename")}}var f=Ju(),v=L(f);let b;var d=w(v);{var h=I=>{var K=U(),re=L(K);{var ue=he=>{Yr(he,{size:14,class:"shrink-0 text-vs-muted"})},ke=he=>{ku(he,{size:14,class:"shrink-0 text-vs-muted"})};j(re,he=>{l(r)?he(ue):he(ke,-1)})}y(I,K)},p=I=>{var K=Gu();y(I,K)};j(d,I=>{t.entry.is_dir?I(h):I(p,-1)})}var k=m(d,2),S=w(k);{var C=I=>{var K=Yu();y(I,K)},z=I=>{ju(I,{size:14,class:"text-vs-muted"})},M=I=>{li(I,{size:14,class:"text-vs-blue"})};j(S,I=>{t.entry.is_dir?I(C):t.entry.is_symlink?I(z,1):I(M,-1)})}var P=m(k,2),x=ae(P,!0),$=m(P,2),N=w($),q=m(N,2),J=m(v,2);{var B=I=>{var K=U(),re=L(K);Ge(re,17,()=>l(s),ue=>ue.name,(ue,ke)=>{{let he=ft(()=>t.depth+1);ol(ue,{get entry(){return l(ke)},get dir(){return l(n)},get depth(){return l(he)}})}}),y(I,K)};j(J,I=>{t.entry.is_dir&&l(r)&&I(B)})}G(()=>{b=jt(v,1,"group flex cursor-pointer items-center gap-1 py-[2px] pr-1 text-[13px] hover:bg-vs-hover",null,b,{"bg-vs-active":l(o)}),Gr(v,`padding-left: ${8+t.depth*12}px`),ve(v,"aria-expanded",t.entry.is_dir?l(r):void 0),ve(v,"aria-selected",l(o)),ve(v,"title",l(n)),Y(x,t.entry.name),ve(N,"aria-label",`Rename ${t.entry.name??""}`),ve(q,"aria-label",`Delete ${t.entry.name??""}`)}),R("click",v,i),R("keydown",v,I=>{(I.key==="Enter"||I.key===" ")&&(I.preventDefault(),i())}),R("click",N,c),R("click",q,a),y(e,f),it()}Pt(["click","keydown"]);var Xu=A('<form class="px-2 pb-1"><input class="w-full rounded-sm border border-vs-accent bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none"/></form>'),Zu=A('<p class="px-4 py-2 text-xs text-vs-muted">No folder opened.</p>'),Qu=A('<p class="px-4 py-2 text-xs text-vs-muted">No files here</p>'),ef=A('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-vs-fg uppercase"><span class="flex-1 truncate">Explorer</span></div> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold text-vs-fg uppercase"><!> <span class="flex-1 truncate"> </span> <span class="flex opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-1 hover:bg-vs-hover" title="New file" aria-label="New file"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="New folder" aria-label="New folder"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="Refresh" aria-label="Refresh"><!></button></span></div> <!> <input class="mx-2 mb-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none focus:border-vs-accent" placeholder="Filter files…"/> <div class="min-h-0 flex-1 overflow-y-auto pb-2"><!></div></div>');function tf(e,t){ot(t,!0);let n=O(""),r=O("");const s=(B,I)=>B==="."?I:`${B}/${I}`;async function o(B){B.preventDefault();const I=l(r).trim();if(I)try{await fe.fs(_.connectionId,{action:l(n)==="dir"?"create_dir":"create_file",path:s(_.path,I)}),g(n,""),g(r,""),await _.refreshFiles()}catch(K){_.setStatus(K.message||"Could not create")}}const i=ft(()=>{var B,I;return(((B=_.connection)==null?void 0:B.workspace_root)||"").split("/").filter(Boolean).pop()||((I=_.connection)==null?void 0:I.label)||"WORKSPACE"});var a=ef(),c=m(w(a),2),f=w(c);Yr(f,{size:14,class:"shrink-0 text-vs-muted"});var v=m(f,2),b=ae(v,!0),d=m(v,2),h=w(d),p=w(h);zu(p,{size:14});var k=m(h,2),S=w(k);Ou(S,{size:14});var C=m(k,2),z=w(C);sl(z,{size:13});var M=m(c,2);{var P=B=>{var I=Xu(),K=w(I);va(K,!0),G(()=>ve(K,"placeholder",l(n)==="dir"?"New folder name":"New file name")),mr("submit",I,o),R("keydown",K,re=>{re.key==="Escape"&&g(n,"")}),mr("blur",K,()=>{l(r).trim()||g(n,"")}),Ue(K,()=>l(r),re=>g(r,re)),y(B,I)};j(M,B=>{l(n)&&B(P)})}var x=m(M,2),$=m(x,2),N=w($);{var q=B=>{var I=Zu();y(B,I)},J=B=>{var I=U(),K=L(I);Ge(K,17,()=>_.visibleEntries,re=>re.name,(re,ue)=>{ol(re,{get entry(){return l(ue)},get dir(){return _.path},depth:0})},re=>{var ue=Qu();y(re,ue)}),y(B,I)};j(N,B=>{_.connectionId?B(J,-1):B(q)})}G(()=>{var B;ve(v,"title",(B=_.connection)==null?void 0:B.workspace_root),Y(b,l(i))}),R("click",h,()=>{g(n,"file"),g(r,"")}),R("click",k,()=>{g(n,"dir"),g(r,"")}),R("click",C,()=>_.refreshFiles()),Ue(x,()=>_.filter,B=>_.filter=B),y(e,a),it()}Pt(["click","keydown"]);var nf=A(`<p class="empty-repo svelte-1skdisl">This folder isn't a Git repository.<br/> Open a folder containing a <code class="svelte-1skdisl">.git</code> directory, or run <code class="svelte-1skdisl">git init</code> in the terminal.</p>`),rf=A('<div class="branch svelte-1skdisl">On <strong> </strong></div>'),sf=A('<li class="svelte-1skdisl"><label class="svelte-1skdisl"><input type="checkbox"/> <span> </span> <span class="file svelte-1skdisl"> </span></label></li>'),of=A('<ul class="changes svelte-1skdisl"></ul> <div class="row svelte-1skdisl"><button class="svelte-1skdisl"><!> </button> <button class="svelte-1skdisl"><!> Unstage</button></div>',1),af=A("<option> </option>"),lf=A('<select class="svelte-1skdisl"></select>'),cf=A('<!> <!> <!> <div class="row svelte-1skdisl"><input placeholder="New branch…" class="svelte-1skdisl"/> <button class="svelte-1skdisl"><!> Create</button></div> <div class="row svelte-1skdisl"><input placeholder="Commit message…" class="svelte-1skdisl"/> <button class="svelte-1skdisl"><!> Commit</button></div> <pre class="output svelte-1skdisl"> </pre>',1),uf=A('<div class="git svelte-1skdisl"><div class="row svelte-1skdisl"><button class="svelte-1skdisl"><!> Status</button> <button class="svelte-1skdisl"><!> Diff</button> <button class="svelte-1skdisl"><!> Stage all</button></div> <!></div>');function ff(e,t){ot(t,!0);let n=O(""),r=O(""),s=O(ge({}));const o=ft(()=>(_.gitStatus||"").split(`
`).filter(x=>x&&!x.startsWith("##")).map(x=>({code:x.slice(0,2).trim()||"??",path:x.slice(3).trim()})).filter(x=>x.path)),i=ft(()=>l(o).filter(x=>l(s)[x.path]).map(x=>x.path));async function a(x){l(i).length&&(await _.runGit(x,{files:l(i)}),g(s,{},!0))}async function c(){if(!l(n).trim())return;await _.runGit("commit",{message:l(n).trim()})&&g(n,"")}async function f(){if(!l(r).trim())return;await _.runGit("create_branch",{branch:l(r).trim()})&&g(r,"")}var v=uf(),b=w(v),d=w(b),h=w(d);sl(h,{size:13});var p=m(d,2),k=w(p);Pu(k,{size:13});var S=m(p,2),C=w(S);Di(C,{size:13});var z=m(b,2);{var M=x=>{var $=nf();y(x,$)},P=x=>{var $=cf(),N=L($);{var q=xe=>{var $e=rf(),Qe=m(w($e)),Ne=ae(Qe,!0);G(()=>Y(Ne,_.gitBranch)),y(xe,$e)};j(N,xe=>{_.gitBranch&&xe(q)})}var J=m(N,2);{var B=xe=>{var $e=of(),Qe=L($e);Ge(Qe,21,()=>l(o),$n=>$n.path,($n,pt)=>{var Sn=sf(),Un=w(Sn),En=w(Un),vn=m(En,2);let Cn;var qn=ae(vn,!0),Gn=m(vn,2),Tn=ae(Gn,!0);G(()=>{Cn=jt(vn,1,"code svelte-1skdisl",null,Cn,{staged:l(pt).code[0]!=="?"&&l(pt).code[0]!==" "}),Y(qn,l(pt).code),ve(Gn,"title",l(pt).path),Y(Tn,l(pt).path)}),fu(En,()=>l(s)[l(pt).path],Cr=>l(s)[l(pt).path]=Cr),y($n,Sn)});var Ne=m(Qe,2),xt=w(Ne),wt=w(xt);Di(wt,{size:13});var Vt=m(wt),ht=m(xt,2),Wn=w(ht);Au(Wn,{size:13}),G(()=>{xt.disabled=!l(i).length,Y(Vt,` Stage (${l(i).length??""})`),ht.disabled=!l(i).length}),R("click",xt,()=>a("stage")),R("click",ht,()=>a("unstage")),y(xe,$e)};j(J,xe=>{l(o).length&&xe(B)})}var I=m(J,2);{var K=xe=>{var $e=lf();Ge($e,20,()=>_.gitBranches,Ne=>Ne,(Ne,xt)=>{var wt=af(),Vt=ae(wt,!0),ht={};G(()=>{Y(Vt,xt),ht!==(ht=xt)&&(wt.value=(wt.__value=ht)??"")}),y(Ne,wt)});var Qe;sr($e),G(()=>{Qe!==(Qe=_.gitBranch)&&($e.value=($e.__value=Qe)??"",br($e,Qe))}),R("change",$e,Ne=>_.runGit("switch",{branch:Ne.currentTarget.value})),y(xe,$e)};j(I,xe=>{_.gitBranches.length&&xe(K)})}var re=m(I,2),ue=w(re),ke=m(ue,2),he=w(ke);Lu(he,{size:13});var ze=m(re,2),X=w(ze),Z=m(X,2),Te=w(Z);Fu(Te,{size:13});var Be=m(ze,2),yt=ae(Be,!0);G(()=>Y(yt,_.gitOutput||"No git output yet.")),Ue(ue,()=>l(r),xe=>g(r,xe)),R("click",ke,f),Ue(X,()=>l(n),xe=>g(n,xe)),R("click",Z,c),y(x,$)};j(z,x=>{_.notARepo?x(M):x(P,-1)})}R("click",d,()=>_.runGit("status")),R("click",p,()=>_.runGit("diff")),R("click",S,()=>_.runGit("stage",{files:["."]})),y(e,v),it()}Pt(["click","change"]);const df="modulepreload",vf=function(e,t){return new URL(e,t).href},Ki={},Fs=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let i=function(v){return Promise.all(v.map(b=>Promise.resolve(b).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const a=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),f=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=i(n.map(v=>{if(v=vf(v,r),v in Ki)return;Ki[v]=!0;const b=v.endsWith(".css"),d=b?'[rel="stylesheet"]':"";if(!!r)for(let k=a.length-1;k>=0;k--){const S=a[k];if(S.href===v&&(!b||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${v}"]${d}`))return;const p=document.createElement("link");if(p.rel=b?"stylesheet":df,b||(p.as="script"),p.crossOrigin="",p.href=v,f&&p.setAttribute("nonce",f),document.head.appendChild(p),b)return new Promise((k,S)=>{p.addEventListener("load",k),p.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${v}`)))})}))}function o(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return s.then(i=>{for(const a of i||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})},Kr={base:"vs-dark",inherit:!0,rules:[{token:"",foreground:"f8f8f2",background:"272822"},{token:"comment",foreground:"75715e",fontStyle:"italic"},{token:"string",foreground:"e6db74"},{token:"constant",foreground:"ae81ff"},{token:"number",foreground:"ae81ff"},{token:"keyword",foreground:"f92672"},{token:"operator",foreground:"f92672"},{token:"delimiter",foreground:"f8f8f2"},{token:"type",foreground:"66d9ef",fontStyle:"italic"},{token:"function",foreground:"a6e22e"},{token:"variable",foreground:"f8f8f2"},{token:"variable.parameter",foreground:"fd971f",fontStyle:"italic"},{token:"tag",foreground:"f92672"},{token:"attribute.name",foreground:"a6e22e"},{token:"attribute.value",foreground:"e6db74"},{token:"regexp",foreground:"e6db74"}],colors:{"editor.background":"#272822","editor.foreground":"#f8f8f2","editor.lineHighlightBackground":"#3e3d32","editor.selectionBackground":"#49483e","editorCursor.foreground":"#f8f8f0","editorWhitespace.foreground":"#3b3a32","editorLineNumber.foreground":"#90908a","editorLineNumber.activeForeground":"#f8f8f2","editorIndentGuide.background":"#3b3a32","editorGutter.background":"#272822"}},hf={py:"python",js:"javascript",mjs:"javascript",cjs:"javascript",ts:"typescript",tsx:"typescript",jsx:"javascript",json:"json",md:"markdown",html:"html",htm:"html",css:"css",scss:"scss",less:"less",sh:"shell",bash:"shell",zsh:"shell",yml:"yaml",yaml:"yaml",toml:"ini",ini:"ini",cfg:"ini",sql:"sql",go:"go",rs:"rust",rb:"ruby",php:"php",java:"java",c:"c",h:"c",cpp:"cpp",hpp:"cpp",cs:"csharp",svelte:"html",vue:"html",xml:"xml",dockerfile:"dockerfile"};function pf(e){var n;const t=(e||"").split("/").pop()||"";return t.toLowerCase()==="dockerfile"?"dockerfile":t.toLowerCase()==="makefile"?"shell":hf[(n=t.split(".").pop())==null?void 0:n.toLowerCase()]||"plaintext"}var _f=A('<div class="editor svelte-1h8xysy"></div>');function gf(e,t){ot(t,!0);let n,r=null,s=null,o="",i=!1;Er(async()=>{s=await Fs(()=>import("./ide-monaco.js").then(c=>c.a),__vite__mapDeps([0,1]),import.meta.url),s.editor.defineTheme("monokai",Kr),r=s.editor.create(n,{value:"",theme:"monokai",automaticLayout:!0,fontSize:13,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",minimap:{enabled:!0},scrollBeyondLastLine:!1,renderWhitespace:"selection",tabSize:2}),r.onDidChangeModelContent(()=>{i||!o||_.updateContent(o,r.getValue())}),r.addCommand(s.KeyMod.CtrlCmd|s.KeyCode.KeyS,()=>_.saveActive())}),ai(()=>r==null?void 0:r.dispose()),nn(()=>{const c=_.activeTab;if(!(!r||!s)){if(!c){i=!0,r.setValue(""),o="",i=!1;return}if(c.key!==o){i=!0;const f=s.editor.createModel(c.content,pf(c.path)),v=r.getModel();r.setModel(f),v==null||v.dispose(),o=c.key,i=!1}else r.getValue()!==c.content&&(i=!0,r.setValue(c.content),i=!1)}});var a=_f();Xr(a,c=>n=c,()=>n),y(e,a),it()}var gn=du(()=>_),mf=A('<span class="h-2 w-2 rounded-full bg-vs-fg group-hover:hidden"></span> <!>',1),bf=A('<div><button class="flex items-center gap-1.5 py-2 pr-1 pl-3" role="tab"><!> <span class="whitespace-nowrap"> </span></button> <button class="mr-1.5 flex h-5 w-5 items-center justify-center rounded-sm hover:bg-vs-line"><!></button></div>'),yf=A('<div class="px-3 py-2 text-xs text-vs-muted">Open a file from the Explorer</div>'),xf=A('<div class="flex min-h-[35px] items-stretch overflow-x-auto bg-vs-tabinactive" role="tablist"></div>');function wf(e,t){ot(t,!1);const n=s=>s.split("/").pop();rl();var r=xf();Ge(r,5,()=>gn().tabs,s=>s.key,(s,o)=>{var i=bf();let a;var c=w(i),f=w(c);li(f,{size:14,class:"shrink-0 text-vs-blue"});var v=m(f,2),b=ae(v,!0),d=m(c,2),h=w(d);{var p=S=>{var C=mf(),z=m(L(C),2);qs(z,{size:14,class:"hidden group-hover:block"}),y(S,C)},k=S=>{qs(S,{size:14,class:"opacity-0 group-hover:opacity-100"})};j(h,S=>{l(o).dirty?S(p):S(k,-1)})}G((S,C)=>{a=jt(i,1,"group flex items-center border-r border-vs-bg text-[13px]",null,a,{"bg-vs-tabactive":l(o).key===gn().activeKey,"text-vs-bright":l(o).key===gn().activeKey,"text-vs-muted":l(o).key!==gn().activeKey}),ve(c,"aria-selected",l(o).key===gn().activeKey),ve(c,"title",l(o).path),Y(b,S),ve(d,"title",l(o).dirty?"Unsaved changes — close":"Close"),ve(d,"aria-label",`Close ${C??""}`)},[()=>n(l(o).path),()=>n(l(o).path)]),R("click",c,()=>gn(gn().activeKey=l(o).key)),R("click",d,()=>gn().closeTab(l(o).key)),y(s,i)},s=>{var o=yf();y(s,o)}),y(e,r),it()}Pt(["click"]);var kf=A("<option> </option>"),$f=A('<p class="rounded-sm border border-mk-pink/40 bg-mk-pink/10 px-2 py-1 text-xs text-mk-pink"> </p>'),Sf=A('<div class="flex flex-col gap-1.5"><span class="flex items-center gap-1.5 text-[11px] font-semibold text-mk-green"><!> </span> <div class="chat-prose text-[13px] leading-relaxed text-mk-fg svelte-1roe1v9"></div></div>'),Ef=A('<div class="flex flex-col gap-1.5 border-l-2 border-mk-blue/60 pl-2.5"><span class="text-[11px] font-semibold text-mk-blue">You</span> <div class="text-[13px] leading-relaxed whitespace-pre-wrap text-mk-fg/90"> </div></div>'),Cf=A(`<div class="m-auto flex max-w-[250px] flex-col items-center gap-2.5 text-center"><!> <p class="text-xs leading-relaxed text-mk-comment">Ask about the file you have open. The prompt goes to <span class="text-mk-muted"> </span>,
            and the reply appears here.</p></div>`),Tf=A('<div class="flex items-center gap-2 text-[11px] text-mk-comment"><!> Working…</div>'),Wi=A('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line"><span class="w-3 text-mk-green"><!></span> </button>'),Nf=A('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[150px] rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl"></div>'),Mf=A('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line"><span class="w-3 text-mk-green"><!></span> <span class="truncate"> </span></button>'),Pf=A('<div class="absolute bottom-full left-0 z-20 mb-1 max-h-[260px] min-w-[190px] overflow-y-auto rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl"></div>'),Af=A('<div class="relative" data-menu=""><button class="flex max-w-[110px] items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg" title="Model"><span class="truncate"> </span> <!></button> <!></div>'),zf=A('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[130px] rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl"></div>'),If=A('<div class="relative" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg" title="Reasoning effort"> <!></button> <!></div>'),Of=A('<div class="flex h-full min-h-0 flex-col bg-mk-bg text-mk-fg"><div class="flex items-center gap-2 border-b border-mk-line px-3 py-1.5"><!> <span class="text-[11px] font-semibold tracking-wide text-mk-muted uppercase">Chat</span> <select class="ml-auto min-w-0 max-w-[55%] truncate rounded-sm border border-mk-line bg-mk-input px-1.5 py-0.5 text-[11px] text-mk-fg outline-none focus:border-mk-green" title="Agent session that answers"></select></div> <div class="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-3 py-3"><!> <!> <!></div> <div class="border-t border-mk-line p-2"><div class="rounded-md border border-mk-line bg-mk-input focus-within:border-mk-green"><textarea rows="2" class="max-h-[200px] w-full resize-none bg-transparent px-2.5 py-2 text-[13px] text-mk-fg outline-none placeholder:text-mk-comment" placeholder="Ask about this workspace…"></textarea> <div class="flex items-center gap-1 px-1.5 pb-1.5 text-[11px]"><div class="relative" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg" title="Agent"> <!></button> <!></div> <!> <!> <!> <span class="ml-auto flex items-center gap-1.5"><kbd class="hidden text-[10px] text-mk-comment sm:inline">↵ send · ⇧↵ newline</kbd> <button class="flex h-6 w-6 items-center justify-center rounded-md bg-mk-green text-mk-bg disabled:opacity-40" title="Send (Enter)" aria-label="Send"><!></button></span></div></div></div></div>');function Rf(e,t){ot(t,!0);let n=Ae(t,"sessions",19,()=>[]),r=Ae(t,"session",3,""),s=Ae(t,"rootPath",3,""),o=O(""),i=O(ge(r()||n()[0]||"")),a=O(!1),c=O(ge([])),f=O(""),v=O(null),b=O(null),d=null,h=O(ge({agent:"codex",available:[],model:"",effort:"",models:[],efforts:[]})),p=O(""),k=O("");const S=ft(()=>(l(h).models.find(T=>T[0]===l(h).model)||[])[1]||l(h).model||"default");async function C(){if(l(i))try{g(h,{agent:"codex",available:[],model:"",effort:"",models:[],efforts:[],...await fe.sessionAgent(l(i))},!0)}catch(T){g(h,{agent:l(h).agent,available:[],model:"",effort:"",models:[],efforts:[]},!0),_.setStatus(T.message||"Could not read agent settings")}}async function z(){if(l(i))try{const D=(await fe.chat(l(i))).messages||[],te=D.length!==l(c).length;g(c,D,!0),g(f,""),te&&queueMicrotask(M)}catch(T){g(f,T.message||"Could not load chat",!0)}}function M(){l(v)&&(l(v).scrollTop=l(v).scrollHeight)}nn(()=>{const T=l(i);g(c,[],!0),d&&clearInterval(d),T&&(z(),C(),d=setInterval(z,3e3))}),ai(()=>{d&&clearInterval(d)});async function P(T){if(g(p,""),T!==l(h).agent){g(k,"agent");try{await fe.setSessionAgent(l(i),T),await C(),_.setStatus(`Switched to ${T}`)}catch(D){_.setStatus(D.message||"Could not switch agent")}finally{g(k,"")}}}async function x(T){if(g(p,""),T!==l(h).model){g(k,"model");try{await fe.setSessionModel(l(i),T),await C(),_.setStatus(`Model set to ${T}`)}catch(D){_.setStatus(D.message||"Could not change model")}finally{g(k,"")}}}async function $(T){if(g(p,""),T!==l(h).effort){g(k,"effort");try{await fe.setSessionEffort(l(i),T),await C(),_.setStatus(`Reasoning effort set to ${T}`)}catch(D){_.setStatus(D.message||"Could not change effort")}finally{g(k,"")}}}function N(){const T=_.connection||{},D=_.activeTab,te=D?D.path:_.path||".",pe=D?`
Active file contents (first 12,000 characters):
${D.content.slice(0,12e3)}`:"";return`[Remote IDE context]
${T.kind==="local"?`Local workspace: ${T.workspace_root||"."}`:`SSH target: ${T.username||"?"}@${T.host||"?"}`}
Path: ${te}${pe}

${l(o).trim()}`}async function q(){const T=l(o).trim();if(!T||!l(i)||l(a))return;const D=N();g(a,!0);try{const te=await fetch(`${s()}/api/sessions/${encodeURIComponent(l(i))}/send`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:D})}),pe=await te.json().catch(()=>({}));if(!te.ok)throw new Error(pe.error||"Could not send");g(o,""),l(b)&&(l(b).style.height="auto"),g(c,[...l(c),{role:"user",text:T,ts:Date.now()/1e3,_local:!0}],!0),queueMicrotask(M),setTimeout(z,1200)}catch(te){_.setStatus(te.message||"Could not send prompt")}finally{g(a,!1)}}function J(T){T.key==="Enter"&&!T.shiftKey&&(T.preventDefault(),q())}function B(T){const D=T.currentTarget;D.style.height="auto",D.style.height=`${Math.min(D.scrollHeight,200)}px`}const I=T=>T.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function K(T){const D=[];return I(T).replace(/```(\w*)\n?([\s\S]*?)```/g,(be,Me,Ie)=>(D.push(`<pre class="chat-code"><code>${Ie.replace(/\n$/,"")}</code></pre>`),`\0BLOCK${D.length-1}\0`)).replace(/`([^`\n]+)`/g,'<code class="chat-inline">$1</code>').replace(/\*\*([^*\n]+)\*\*/g,"<strong>$1</strong>").split(`
`).map(be=>{const Me=be.match(/^\s*[-*]\s+(.*)$/);return Me?`<span class="chat-li">${Me[1]}</span>`:be}).join(`
`).replace(/\u0000BLOCK(\d+)\u0000/g,(be,Me)=>D[Number(Me)])}function re(T){const D=T.full||T.text||"",te=`

`;if(D.startsWith("[Remote IDE context]")||D.startsWith("[Remote SSH IDE context]")){const pe=D.lastIndexOf(te);if(pe!==-1)return D.slice(pe+te.length)}return D}var ue=Of();mr("click",Ws,T=>{var D,te;(te=(D=T.target).closest)!=null&&te.call(D,"[data-menu]")||g(p,"")});var ke=w(ue),he=w(ke);To(he,{size:13,class:"shrink-0 text-mk-green"});var ze=m(he,4);Ge(ze,20,n,T=>T,(T,D)=>{var te=kf(),pe=ae(te,!0),be={};G(()=>{Y(pe,D),be!==(be=D)&&(te.value=(te.__value=be)??"")}),y(T,te)}),sr(ze);var X=m(ke,2),Z=w(X);{var Te=T=>{var D=$f(),te=ae(D,!0);G(()=>Y(te,l(f))),y(T,D)};j(Z,T=>{l(f)&&T(Te)})}var Be=m(Z,2);Ge(Be,19,()=>l(c),(T,D)=>T.ts+":"+D,(T,D)=>{var te=U(),pe=L(te);{var be=Ie=>{var Ke=Sf(),De=w(Ke),Oe=w(De);To(Oe,{size:11});var at=m(Oe),At=m(De,2);eu(At,()=>K(re(l(D))),!0),G(()=>Y(at,` ${l(h).agent==="claude"?"Claude":"Codex"}`)),y(Ie,Ke)},Me=Ie=>{var Ke=Ef(),De=m(w(Ke),2),Oe=ae(De,!0);G(at=>Y(Oe,at),[()=>re(l(D))]),y(Ie,Ke)};j(pe,Ie=>{l(D).role==="assistant"?Ie(be):Ie(Me,-1)})}y(T,te)},T=>{var D=U(),te=L(D);{var pe=be=>{var Me=Cf(),Ie=w(Me);To(Ie,{size:26,strokeWidth:1.3,class:"text-mk-line"});var Ke=m(Ie,2),De=m(w(Ke)),Oe=ae(De,!0);G(()=>Y(Oe,l(i)||"the selected session")),y(be,Me)};j(te,be=>{l(f)||be(pe)})}y(T,D)});var yt=m(Be,2);{var xe=T=>{var D=Tf(),te=w(D);Zr(te,{size:11,class:"animate-spin"}),y(T,D)};j(yt,T=>{l(a)&&T(xe)})}Xr(X,T=>g(v,T),()=>l(v));var $e=m(X,2),Qe=w($e),Ne=w(Qe);Xr(Ne,T=>g(b,T),()=>l(b));var xt=m(Ne,2),wt=w(xt),Vt=w(wt),ht=w(Vt),Wn=m(ht);Yr(Wn,{size:11});var $n=m(Vt,2);{var pt=T=>{var D=Nf();Ge(D,20,()=>l(h).available.length?l(h).available:["codex"],te=>te,(te,pe)=>{var be=Wi(),Me=w(be),Ie=w(Me);{var Ke=Oe=>{Eo(Oe,{size:11})};j(Ie,Oe=>{pe===l(h).agent&&Oe(Ke)})}var De=m(Me);G(()=>Y(De,` ${pe==="claude"?"Claude":"Codex"}`)),R("click",be,()=>P(pe)),y(te,be)}),y(T,D)};j($n,T=>{l(p)==="agent"&&T(pt)})}var Sn=m(wt,2);{var Un=T=>{var D=Af(),te=w(D),pe=w(te),be=ae(pe,!0),Me=m(pe,2);Yr(Me,{size:11,class:"shrink-0"});var Ie=m(te,2);{var Ke=De=>{var Oe=Pf();Ge(Oe,21,()=>l(h).models,at=>at[0],(at,At)=>{var sn=Mf(),Yn=w(sn),Tr=w(Yn);{var Nr=Jn=>{Eo(Jn,{size:11})};j(Tr,Jn=>{l(At)[0]===l(h).model&&Jn(Nr)})}var hn=m(Yn,2),io=ae(hn,!0);G(()=>Y(io,l(At)[1])),R("click",sn,()=>x(l(At)[0])),y(at,sn)}),y(De,Oe)};j(Ie,De=>{l(p)==="model"&&De(Ke)})}G(()=>Y(be,l(S))),R("click",te,()=>g(p,l(p)==="model"?"":"model",!0)),y(T,D)};j(Sn,T=>{l(h).models.length&&T(Un)})}var En=m(Sn,2);{var vn=T=>{var D=If(),te=w(D),pe=w(te),be=m(pe);Yr(be,{size:11});var Me=m(te,2);{var Ie=Ke=>{var De=zf();Ge(De,20,()=>l(h).efforts,Oe=>Oe,(Oe,at)=>{var At=Wi(),sn=w(At),Yn=w(sn);{var Tr=hn=>{Eo(hn,{size:11})};j(Yn,hn=>{at===l(h).effort&&hn(Tr)})}var Nr=m(sn);G(()=>Y(Nr,` ${at??""}`)),R("click",At,()=>$(at)),y(Oe,At)}),y(Ke,De)};j(Me,Ke=>{l(p)==="effort"&&Ke(Ie)})}G(()=>Y(pe,`${(l(h).effort||"effort")??""} `)),R("click",te,()=>g(p,l(p)==="effort"?"":"effort",!0)),y(T,D)};j(En,T=>{l(h).efforts.length&&T(vn)})}var Cn=m(En,2);{var qn=T=>{Zr(T,{size:11,class:"animate-spin text-mk-muted"})};j(Cn,T=>{l(k)&&T(qn)})}var Gn=m(Cn,2),Tn=m(w(Gn),2),Cr=w(Tn);{var so=T=>{Uu(T,{size:11})},oo=T=>{wu(T,{size:13})};j(Cr,T=>{l(a)?T(so):T(oo,-1)})}G(T=>{Y(ht,`${l(h).agent==="claude"?"Claude":"Codex"} `),Tn.disabled=T},[()=>l(a)||!l(o).trim()]),Wo(ze,()=>l(i),T=>g(i,T)),R("keydown",Ne,J),R("input",Ne,B),Ue(Ne,()=>l(o),T=>g(o,T)),R("click",Vt,()=>g(p,l(p)==="agent"?"":"agent",!0)),R("click",Tn,q),y(e,ue),it()}Pt(["keydown","input","click"]);var Lf=A('<span class="hint svelte-e2eyom">searching…</span>'),Ff=A('<li><button><span class="name svelte-e2eyom"> </span> <span class="path svelte-e2eyom"> </span> <!></button></li>'),Df=A('<ul class="results svelte-e2eyom"></ul>'),jf=A('<p class="empty svelte-e2eyom"> </p>'),Hf=A('<div class="backdrop svelte-e2eyom" role="button" tabindex="-1"></div> <div class="dialog svelte-e2eyom" role="dialog" aria-label="Quick open"><div class="field svelte-e2eyom"><!> <input placeholder="Search files by name…" aria-label="Search files by name" class="svelte-e2eyom"/> <!></div> <!></div>',1);function Vf(e,t){ot(t,!0);let n=O(""),r=O(ge([])),s=O(0),o=O(!1),i=O(null),a=null;nn(()=>{l(i)&&l(i).focus()}),nn(()=>{const $=l(n).trim();if(a&&clearTimeout(a),!$){g(r,[],!0);return}a=setTimeout(async()=>{g(o,!0);try{const N=await fe.searchFiles(_.connectionId,_.path||".",$);g(r,N.matches||[],!0),g(s,0)}catch{g(r,[],!0)}finally{g(o,!1)}},180)});async function c($){var q;if(!$)return;const N=_.path&&_.path!=="."?`${_.path}/`:"";await _.openFile(`${N}${$.path}`),(q=t.onclose)==null||q.call(t)}function f($){var N;$.key==="Escape"?($.preventDefault(),(N=t.onclose)==null||N.call(t)):$.key==="ArrowDown"?($.preventDefault(),g(s,Math.min(l(s)+1,l(r).length-1),!0)):$.key==="ArrowUp"?($.preventDefault(),g(s,Math.max(l(s)-1,0),!0)):$.key==="Enter"&&($.preventDefault(),c(l(r)[l(s)]))}var v=Hf(),b=L(v),d=m(b,2),h=w(d),p=w(h);ci(p,{size:14});var k=m(p,2);Xr(k,$=>g(i,$),()=>l(i));var S=m(k,2);{var C=$=>{var N=Lf();y($,N)};j(S,$=>{l(o)&&$(C)})}var z=m(h,2);{var M=$=>{var N=Df();Ge(N,23,()=>l(r),q=>q.path,(q,J,B)=>{var I=Ff(),K=w(I);let re;var ue=w(K),ke=ae(ue,!0),he=m(ue,2),ze=ae(he,!0),X=m(he,2);{var Z=Te=>{Tu(Te,{size:12})};j(X,Te=>{l(B)===l(s)&&Te(Z)})}G(()=>{re=jt(K,1,"svelte-e2eyom",null,re,{active:l(B)===l(s)}),Y(ke,l(J).name),Y(ze,l(J).path)}),R("click",K,()=>c(l(J))),y(q,I)}),y($,N)},P=$=>{var N=jf(),q=ae(N);G(J=>Y(q,`No files match “${J??""}”.`),[()=>l(n).trim()]),y($,N)},x=ft(()=>l(n).trim()&&!l(o));j(z,$=>{l(r).length?$(M):l(x)&&$(P,1)})}R("click",b,()=>{var $;return($=t.onclose)==null?void 0:$.call(t)}),R("keydown",b,$=>{var N;return $.key==="Escape"&&((N=t.onclose)==null?void 0:N.call(t))}),R("keydown",k,f),Ue(k,()=>l(n),$=>g(n,$)),y(e,v),it()}Pt(["click","keydown"]);var Bf=A('<div class="terminal-pane svelte-maclc7"><div class="bar svelte-maclc7"><span class="label svelte-maclc7">Terminal</span> <span> </span></div> <div class="screen svelte-maclc7"></div></div>');function Kf(e,t){ot(t,!0);let n=Ae(t,"rootPath",3,""),r=Ae(t,"session",3,""),s,o=null,i=null,a=null,c=O("connecting"),f=null,v=0,b=null,d=!1;const h={background:Kr.colors["editor.background"],foreground:Kr.colors["editor.foreground"],cursor:Kr.colors["editorCursor.foreground"],selectionBackground:Kr.colors["editor.selectionBackground"],black:"#272822",red:"#f92672",green:"#a6e22e",yellow:"#e6db74",blue:"#66d9ef",magenta:"#ae81ff",cyan:"#a1efe4",white:"#f8f8f2",brightBlack:"#75715e",brightRed:"#f92672",brightGreen:"#a6e22e",brightYellow:"#e6db74",brightBlue:"#66d9ef",brightMagenta:"#ae81ff",brightCyan:"#a1efe4",brightWhite:"#f9f8f5"};function p(){if(!(!i||!o||(a==null?void 0:a.readyState)!==WebSocket.OPEN))try{i.fit(),a.send(JSON.stringify({type:"resize",cols:o.cols,rows:o.rows}))}catch{}}function k(){if(d)return;const $=`${location.protocol==="https:"?"wss":"ws"}://${location.host}${n()}/ws/sessions/${encodeURIComponent(r())}/ide/terminal/${encodeURIComponent(_.connectionId)}`;a=new WebSocket($),a.binaryType="arraybuffer",a.onopen=()=>{g(c,"connected"),v=0,p()},a.onmessage=N=>{o.write(typeof N.data=="string"?N.data:new Uint8Array(N.data))},a.onclose=N=>{if(d)return;if(N.code===1008){g(c,"refused"),o==null||o.write(`\r
\x1B[31m— not authorised for this terminal —\x1B[0m\r
`);return}if(v>=6){g(c,"closed"),o==null||o.write(`\r
\x1B[33m— terminal unavailable; reopen the panel to retry —\x1B[0m\r
`);return}g(c,"reconnecting");const q=Math.min(1e3*2**v,1e4);v+=1,b=setTimeout(k,q)},a.onerror=()=>{d||g(c,"error")}}Er(async()=>{const[{Terminal:x},{FitAddon:$}]=await Promise.all([Fs(()=>import("./ide-xterm.js"),[],import.meta.url),Fs(()=>import("./ide-addon-fit.js"),[],import.meta.url)]);await Fs(()=>Promise.resolve({}),__vite__mapDeps([2]),import.meta.url),o=new x({theme:h,fontSize:12,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",cursorBlink:!0,scrollback:5e3}),i=new $,o.loadAddon(i),o.open(s),i.fit(),k(),o.onData(N=>{(a==null?void 0:a.readyState)===WebSocket.OPEN&&a.send(new TextEncoder().encode(N))}),f=new ResizeObserver(()=>p()),f.observe(s)}),ai(()=>{d=!0,b&&clearTimeout(b),f==null||f.disconnect(),a==null||a.close(),o==null||o.dispose()});var S=Bf(),C=w(S),z=m(w(C),2),M=ae(z,!0),P=m(C,2);Xr(P,x=>s=x,()=>s),G(()=>{jt(z,1,`status ${l(c)??""}`,"svelte-maclc7"),Y(M,l(c))}),y(e,S),it()}var Wf=A('<div class="border-b border-vs-line bg-vs-red/10 px-4 py-2 text-xs text-vs-red"> </div>'),Uf=A('<div class="flex items-center gap-2 px-4 py-3 text-xs text-vs-muted"><!> Loading…</div>'),qf=A('<button class="flex w-full items-center gap-2 px-4 py-1 text-left text-[13px] text-vs-fg hover:bg-vs-hover"><!> <span class="truncate"> </span></button>'),Gf=A('<div class="px-4 py-3 text-xs text-vs-muted">No sub-folders here. You can still open this folder.</div>'),Yf=A('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="flex h-[70vh] w-[min(640px,92vw)] flex-col overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright">Open Folder <span class="ml-1 font-normal text-vs-muted"><!></span></div> <form class="flex gap-2 border-b border-vs-line px-3 py-2"><button type="button" class="flex items-center gap-1 rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover disabled:opacity-40" title="Up one folder"><!> Up</button> <input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-xs text-vs-fg outline-none focus:border-vs-accent" spellcheck="false" aria-label="Folder path"/> <button type="submit" class="rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover">Go</button></form> <!> <div class="min-h-0 flex-1 overflow-y-auto py-1"><!></div> <div class="flex items-center gap-2 border-t border-vs-line px-4 py-3"><span class="flex min-w-0 flex-1 items-center gap-2 text-xs text-vs-muted"><!> <span class="truncate font-mono"> </span></span> <button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40">Open Folder</button></div></div></div>');function Jf(e,t){ot(t,!0);let n=O(""),r=O(""),s=O(ge([])),o=O(""),i=O(!0),a=O("");async function c(X){g(i,!0),g(o,"");try{const Z=_.connectionId?await fe.browseOn(_.connectionId,X):await fe.browse(X);g(n,Z.path,!0),g(r,Z.parent,!0),g(s,Z.entries||[],!0),g(a,Z.path,!0)}catch(Z){g(o,Z.message||"Could not open that folder",!0)}finally{g(i,!1)}}Er(()=>c(""));function f(X){X.preventDefault(),l(a).trim()&&c(l(a).trim())}var v=Yf(),b=w(v),d=w(b),h=m(w(d)),p=w(h);{var k=X=>{var Z=Ci();G(()=>Y(Z,`on ${_.connection.username??""}@${_.connection.host??""}`)),y(X,Z)},S=X=>{var Z=Ci("on this server");y(X,Z)};j(p,X=>{_.connection&&_.connection.kind!=="local"?X(k):X(S,-1)})}var C=m(d,2),z=w(C),M=w(z);Nu(M,{size:14});var P=m(z,2),x=m(C,2);{var $=X=>{var Z=Wf(),Te=ae(Z,!0);G(()=>Y(Te,l(o))),y(X,Z)};j(x,X=>{l(o)&&X($)})}var N=m(x,2),q=w(N);{var J=X=>{var Z=Uf(),Te=w(Z);Zr(Te,{size:13,class:"animate-spin"}),y(X,Z)},B=X=>{var Z=U(),Te=L(Z);Ge(Te,17,()=>l(s),Be=>Be.path,(Be,yt)=>{var xe=qf(),$e=w(xe);Ru($e,{size:14,class:"shrink-0 text-vs-blue"});var Qe=m($e,2),Ne=ae(Qe,!0);G(()=>Y(Ne,l(yt).name)),R("dblclick",xe,()=>c(l(yt).path)),R("click",xe,()=>c(l(yt).path)),y(Be,xe)},Be=>{var yt=Gf();y(Be,yt)}),y(X,Z)};j(q,X=>{l(i)?X(J):X(B,-1)})}var I=m(N,2),K=w(I),re=w(K);Du(re,{size:13,class:"shrink-0"});var ue=m(re,2),ke=ae(ue,!0),he=m(K,2),ze=m(he,2);G(()=>{z.disabled=!l(r),ve(ue,"title",l(n)),Y(ke,l(n)),ze.disabled=!l(n)||l(i)}),R("click",v,X=>X.target===X.currentTarget&&t.onclose()),R("keydown",v,X=>X.key==="Escape"&&t.onclose()),mr("submit",C,f),R("click",z,()=>l(r)&&c(l(r))),Ue(P,()=>l(a),X=>g(a,X)),R("click",he,function(...X){var Z;(Z=t.onclose)==null||Z.apply(this,X)}),R("click",ze,()=>t.onopen(l(n))),y(e,v),it()}Pt(["click","keydown","dblclick"]);var Xf=A('<p class="px-4 py-2 text-xs text-vs-muted">Open a folder to search it.</p>'),Zf=A('<button class="flex w-full items-center gap-2 px-3 py-1 text-left text-[13px] hover:bg-vs-hover"><!> <span class="truncate text-vs-fg"> </span> <span class="ml-auto max-w-[45%] truncate text-[11px] text-vs-muted"> </span></button>'),Qf=A('<p class="px-4 py-2 text-xs text-vs-muted"> </p>'),ed=A('<p class="px-4 py-2 text-xs text-vs-muted">Type to search filenames in this workspace.</p>'),td=A('<div class="flex h-full min-h-0 flex-col"><div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Search</div> <div class="px-3 pb-2"><div class="flex items-center gap-1.5 rounded-sm border border-vs-line bg-vs-input px-2 focus-within:border-vs-accent"><!> <input class="min-w-0 flex-1 bg-transparent py-1 text-xs text-vs-fg outline-none placeholder:text-vs-muted" placeholder="Search filenames" spellcheck="false"/> <!></div></div> <div class="min-h-0 flex-1 overflow-y-auto"><!></div></div>');function nd(e,t){ot(t,!0);let n=O(""),r=O(ge([])),s=O(!1),o=O(!1),i=null;nn(()=>{const M=l(n).trim();if(i&&clearTimeout(i),!M||!_.connectionId){g(r,[],!0),g(o,!1);return}i=setTimeout(async()=>{g(s,!0);try{const P=await fe.searchFiles(_.connectionId,_.path||".",M);g(r,P.matches||[],!0)}catch(P){g(r,[],!0),_.setStatus(P.message||"Search failed")}finally{g(s,!1),g(o,!0)}},200)});const a=M=>{const P=(M||"").split("/");return P.pop(),P.join("/")};var c=td(),f=m(w(c),2),v=w(f),b=w(v);ci(b,{size:12,class:"shrink-0 text-vs-muted"});var d=m(b,2),h=m(d,2);{var p=M=>{Zr(M,{size:12,class:"shrink-0 animate-spin text-vs-muted"})};j(h,M=>{l(s)&&M(p)})}var k=m(f,2),S=w(k);{var C=M=>{var P=Xf();y(M,P)},z=M=>{var P=U(),x=L(P);Ge(x,17,()=>l(r),$=>$.path,($,N)=>{var q=Zf(),J=w(q);li(J,{size:13,class:"shrink-0 text-vs-blue"});var B=m(J,2),I=ae(B,!0),K=m(B,2),re=ae(K,!0);G((ue,ke)=>{ve(q,"title",l(N).path),Y(I,ue),Y(re,ke)},[()=>l(N).name||l(N).path.split("/").pop(),()=>a(l(N).path)]),R("click",q,()=>_.openFile(l(N).path)),y($,q)},$=>{var N=U(),q=L(N);{var J=K=>{var re=Qf(),ue=ae(re);G(()=>Y(ue,`No files match “${l(n)??""}”.`)),y(K,re)},B=K=>{var re=ed();y(K,re)},I=ft(()=>!l(n).trim());j(q,K=>{l(o)&&!l(s)?K(J):l(I)&&K(B,1)})}y($,N)}),y(M,P)};j(S,M=>{_.connectionId?M(z,-1):M(C)})}Ue(d,()=>l(n),M=>g(n,M)),y(e,c),it()}Pt(["click"]);var rd=A('<p class="flex items-center gap-2 text-vs-muted"><!> Fetching host key…</p>'),sd=A('<p class="text-vs-red"> </p>'),od=A("<p>This host is already trusted. Try connecting again.</p>"),id=A('<div class="flex items-baseline gap-2 font-mono text-[11px]"><span class="w-16 shrink-0 text-vs-muted"> </span> <span class="break-all text-vs-fg"> </span></div>'),ad=A(`<p>The authenticity of <span class="font-mono text-vs-blue"> </span> can't be established. Verify these fingerprints match the server before you continue —
          if they don't, someone may be intercepting the connection.</p> <div class="mt-3 flex flex-col gap-1 rounded-sm border border-vs-line bg-vs-input p-2"></div> <p class="mt-3 text-xs text-vs-muted">Accepting adds the key to <span class="font-mono">~/.ssh/known_hosts</span> on this server.</p>`,1),ld=A('<button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"> </button>'),cd=A('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="w-[min(560px,92vw)] overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="flex items-center gap-2 border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright"><!> Unknown host</div> <div class="px-4 py-3 text-[13px] leading-relaxed text-vs-fg"><!></div> <div class="flex justify-end gap-2 border-t border-vs-line px-4 py-3"><button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <!></div></div></div>');function ud(e,t){ot(t,!0);let n=O(!0),r=O(""),s=O(null),o=O(!1);Er(async()=>{try{g(s,await fe.hostKey(_.connectionId),!0)}catch(x){g(r,x.message||"Could not fetch the host key",!0)}finally{g(n,!1)}});async function i(){g(o,!0);try{await fe.trustHost(_.connectionId),t.ontrusted()}catch(x){g(r,x.message||"Could not trust this host",!0),g(o,!1)}}var a=cd(),c=w(a),f=w(c),v=w(f);Wu(v,{size:15,class:"text-vs-yellow"});var b=m(f,2),d=w(b);{var h=x=>{var $=rd(),N=w($);Zr(N,{size:13,class:"animate-spin"}),y(x,$)},p=x=>{var $=sd(),N=ae($,!0);G(()=>Y(N,l(r))),y(x,$)},k=x=>{var $=od();y(x,$)},S=x=>{var $=ad(),N=L($),q=m(w(N)),J=ae(q),B=m(N,2);Ge(B,21,()=>l(s).fingerprints,I=>I.fingerprint,(I,K)=>{var re=id(),ue=w(re),ke=ae(ue,!0),he=m(ue,2),ze=ae(he,!0);G(()=>{Y(ke,l(K).type),Y(ze,l(K).fingerprint)}),y(I,re)}),G(()=>Y(J,`${l(s).host??""}:${l(s).port??""}`)),y(x,$)};j(d,x=>{var $;l(n)?x(h):l(r)?x(p,1):($=l(s))!=null&&$.known?x(k,2):x(S,-1)})}var C=m(b,2),z=w(C),M=m(z,2);{var P=x=>{var $=ld(),N=ae($,!0);G(()=>{$.disabled=l(o),Y(N,l(o)?"Trusting…":"Trust and connect")}),R("click",$,i),y(x,$)};j(M,x=>{var $;!l(n)&&!(($=l(s))!=null&&$.known)&&!l(r)&&x(P)})}R("click",a,x=>x.target===x.currentTarget&&t.onclose()),R("keydown",a,x=>x.key==="Escape"&&t.onclose()),R("click",z,function(...x){var $;($=t.onclose)==null||$.apply(this,x)}),y(e,a),it()}Pt(["click","keydown"]);var fd=A('<div role="separator" tabindex="0" title="Drag to resize (double-click to reset)"><div></div></div>');function No(e,t){ot(t,!0);let n=Ae(t,"size",15),r=Ae(t,"side",3,"right"),s=Ae(t,"min",3,120),o=Ae(t,"max",3,800),i=Ae(t,"onreset",3,null),a=O(!1);const c=r()==="top";function f(p){var P;p.preventDefault(),g(a,!0);const k=c?p.clientY:p.clientX,S=n(),C=p.currentTarget;(P=C.setPointerCapture)==null||P.call(C,p.pointerId);function z(x){const N=(c?x.clientY:x.clientX)-k,q=r()==="left"||r()==="top"?-N:N;n(Math.round(Math.min(o(),Math.max(s(),S+q))))}function M(){var x;g(a,!1),(x=C.releasePointerCapture)==null||x.call(C,p.pointerId),window.removeEventListener("pointermove",z),window.removeEventListener("pointerup",M)}window.addEventListener("pointermove",z),window.addEventListener("pointerup",M)}function v(p){const k=p.shiftKey?40:10,S=c?"ArrowUp":r()==="left"?"ArrowLeft":"ArrowRight",C=c?"ArrowDown":r()==="left"?"ArrowRight":"ArrowLeft";if(p.key===S)n(Math.min(o(),n()+k));else if(p.key===C)n(Math.max(s(),n()-k));else return;p.preventDefault()}var b=fd();let d;var h=ae(b);G(()=>{d=jt(b,1,`group relative shrink-0 ${c?"h-1 w-full cursor-row-resize":"w-1 cursor-col-resize"}`,null,d,{"bg-vs-accent":l(a)}),ve(b,"aria-orientation",c?"horizontal":"vertical"),ve(b,"aria-valuenow",n()),ve(b,"aria-valuemin",s()),ve(b,"aria-valuemax",o()),jt(h,1,`absolute ${c?"-top-1 -bottom-1 left-0 right-0":"-left-1 -right-1 top-0 bottom-0"}
           transition-colors group-hover:bg-vs-accent ${l(a)?"bg-vs-accent":""}`)}),R("pointerdown",b,f),R("dblclick",b,()=>{var p;return(p=i())==null?void 0:p()}),R("keydown",b,v),y(e,b),it()}Pt(["pointerdown","dblclick","keydown"]);var dd=A('<span class="absolute top-0 bottom-0 left-0 w-0.5 bg-vs-bright"></span>'),vd=A('<span class="absolute right-1.5 bottom-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-vs-status px-1 text-[10px] leading-none font-semibold text-white"> </span>'),hd=A("<button><!> <!> <!></button>"),pd=A("<option> </option>"),_d=A('<button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover hover:text-vs-red" title="Remove workspace" aria-label="Remove workspace"><!></button>'),gd=A('<input class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" type="password" placeholder="Password (optional)" autocomplete="new-password"/>'),md=A(`<button class="w-full rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Show this host's key fingerprint and trust it">Verify host key…</button>`),bd=A('<!> <button class="w-full rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"> </button> <!>',1),yd=A('<p class="mt-1 font-mono text-[11px] break-all text-vs-muted"> </p>'),xd=A('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="~/.ssh/id_ed25519"/> <textarea class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-[11px] outline-none focus:border-vs-accent" rows="4" placeholder="…or paste a private key (-----BEGIN OPENSSH PRIVATE KEY-----)" spellcheck="false"></textarea>',1),wd=A('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" type="password" placeholder="Password" autocomplete="new-password"/>'),kd=A('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Host" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="User" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Port" type="number" min="1" max="65535"/> <select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>SSH agent</option><option>Existing key</option><option>Password (saved, encrypted)</option></select> <!> <!>',1),$d=A('<form class="mt-2 flex flex-col gap-1.5 border-t border-vs-line px-3 pt-2"><select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>This server (local folder)</option><option>Remote host over SSH</option></select> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Label"/> <!> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"/> <div class="flex gap-1 pb-2"><button class="flex-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110" type="submit">Create</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" type="button">Cancel</button></div></form>'),Sd=A('<div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Workspaces</div> <div class="flex flex-col gap-2 px-3 pt-1"><select class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" aria-label="Workspace"><option>— select workspace —</option><!></select> <div class="flex gap-1"><button class="flex flex-1 items-center justify-center gap-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"><!> Open Folder</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Add a workspace or SSH connection" aria-label="Add workspace"><!></button> <!></div> <!> <!></div> <!>',1),Ed=A('<aside class="flex shrink-0 flex-col overflow-hidden border-r border-vs-border bg-vs-panel"><!></aside> <!>',1),Cd=A('<div class="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center"><!> <div><h1 class="text-2xl font-light text-vs-fg">Multibuilder IDE</h1> <p class="mt-1 text-sm text-vs-muted">Edit files on this server or on a remote host over SSH.</p></div> <div class="flex flex-col gap-2 text-sm"><button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Open Folder… <kbd class="ml-2 rounded-sm border border-vs-line px-1.5 py-0.5 text-[10px] text-vs-muted">Ctrl+Shift+O</kbd></button> <button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Connect to a host over SSH…</button></div></div>'),Td=A('<!> <div class="flex shrink-0 flex-col border-t border-vs-border bg-vs-bg"><div class="flex items-center gap-2 border-b border-vs-border px-3 py-1 text-[11px] tracking-wide uppercase"><!> Terminal <span class="text-vs-muted normal-case"> </span> <button class="ml-auto rounded-sm p-0.5 hover:bg-vs-hover" title="Hide panel" aria-label="Hide terminal panel"><!></button></div> <div class="min-h-0 flex-1"><!></div></div>',1),Nd=A('<!> <div class="min-h-0 flex-1"><!></div> <!>',1),Md=A('<!> <aside class="flex shrink-0 flex-col overflow-hidden border-l border-vs-border bg-vs-panel"><div class="flex items-center gap-2 border-b border-vs-border px-3 py-1.5"><!> <span class="flex-1 text-[11px] font-semibold tracking-wide uppercase">Chat</span> <button class="rounded-sm p-0.5 hover:bg-vs-hover" title="Hide chat" aria-label="Hide chat"><!></button></div> <div class="min-h-0 flex-1"><!></div></aside>',1),Ui=A('<span class="flex items-center gap-1"><!> </span>'),Pd=A("<span> </span>"),Ad=A('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle terminal (Ctrl+`)"><!> Terminal</button> <button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Focus the tmux window on the host"><!></button>',1),zd=A('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle chat panel"><!> Chat</button>'),Id=A('<div class="flex h-full flex-col overflow-hidden bg-vs-bg font-sans text-vs-fg"><header class="flex items-center gap-2 border-b border-vs-border bg-vs-titlebar px-3 py-1 text-xs"><!> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover" title="Open a folder on this server (Ctrl+Shift+O)">Open Folder…</button> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40" title="Open a file (Ctrl+P)">Open File…</button> <button><!> Terminal</button> <span class="mx-auto truncate text-vs-muted"> </span> <span><!> </span></header> <div class="flex min-h-0 flex-1"><nav class="flex w-12 shrink-0 flex-col items-center bg-vs-activity"><!> <div class="mt-auto flex flex-col items-center pb-1"><button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Account — signed in to the dashboard" aria-label="Account"><!></button> <button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Toggle side bar (Ctrl+B)" aria-label="Toggle side bar"><!></button></div></nav> <!> <section class="flex min-h-0 min-w-0 flex-1 flex-col"><!></section> <!></div> <footer class="flex shrink-0 items-center gap-3 bg-vs-status px-3 py-0.5 text-[12px] text-white"><!> <!> <span class="truncate"> </span> <span class="ml-auto flex items-center gap-3"><!> <span class="max-w-[40vw] truncate opacity-80"> </span> <!> <!></span></footer> <!> <!> <!></div>');function Od(e,t){ot(t,!0);let n=Ae(t,"sessions",19,()=>[]),r=Ae(t,"session",3,""),s=Ae(t,"rootPath",3,""),o=O("files");function i(E,F){try{const H=localStorage.getItem(`ide.show.${E}`);return H===null?F:H==="1"}catch{return F}}let a=O(ge(i("chat",!0)));const c={sidebar:240,chat:320,panel:240};function f(E){try{const F=localStorage.getItem(`ide.size.${E}`),H=Number(F);return Number.isFinite(H)&&H>0?H:c[E]}catch{return c[E]}}let v=O(ge(f("sidebar"))),b=O(ge(f("chat"))),d=O(ge(f("panel")));nn(()=>{try{localStorage.setItem("ide.size.sidebar",String(l(v))),localStorage.setItem("ide.size.chat",String(l(b))),localStorage.setItem("ide.size.panel",String(l(d))),localStorage.setItem("ide.show.terminal",l(k)?"1":"0"),localStorage.setItem("ide.show.chat",l(a)?"1":"0"),localStorage.setItem("ide.show.sidebar",l(h)?"1":"0")}catch{}});let h=O(ge(i("sidebar",!0))),p=O(!1),k=O(ge(i("terminal",!1))),S=O(!1);nn(()=>{l(k)&&g(S,!0)});let C=O(!1),z=O(!1),M=O(""),P=O(ge({kind:"local",label:"",host:"",username:"",port:22,auth_mode:"agent",identity_file:"",password:"",private_key:"",workspace_root:"",max_file_bytes:1e6}));const x={idle:{icon:Cu,label:"Not connected"},connecting:{icon:Su,label:"Connecting…"},connected:{icon:$u,label:"Connected"},reconnect:{icon:Li,label:"Reconnect required"},error:{icon:Li,label:"Error"}},$=ft(()=>x[_.connectionState].icon),N=ft(()=>{var E;return((E=_.connection)==null?void 0:E.kind)==="local"}),q=[{id:"files",icon:Iu,label:"Explorer",keys:"Ctrl+Shift+E"},{id:"search",icon:ci,label:"Search",keys:"Ctrl+Shift+F"},{id:"git",icon:ji,label:"Source Control",keys:"Ctrl+Shift+G"},{id:"remote",icon:Hu,label:"Remote Explorer",keys:""}];Er(async()=>{await _.loadConnections(),_.connectionId&&await _.refreshStatus()});function J(E){l(o)===E&&l(h)?g(h,!1):(g(o,E,!0),g(h,!0))}async function B(E){_.connectionId=E.currentTarget.value,_.resetWorkspaceView(),await _.refreshStatus()}async function I(E){g(z,!1);try{const F=E.split("/").filter(Boolean).pop()||E,H=_.connection;if(H&&H.kind!=="local"){await fe.setWorkspaceRoot(H.id,E,F),await _.loadConnections(),_.resetWorkspaceView(),await _.refreshFiles("."),_.setStatus(`Opened ${E} on ${H.username}@${H.host}`),g(o,"files"),g(h,!0);return}if(H&&H.kind==="local"){await fe.setWorkspaceRoot(H.id,E,F),await _.loadConnections(),_.resetWorkspaceView(),await _.refreshFiles("."),_.setStatus(`Opened ${E}`),g(o,"files"),g(h,!0);return}const we=await fe.createConnection({kind:"local",label:F,workspace_root:E,max_file_bytes:1e6});await _.loadConnections(),_.connectionId=we.connection.id,_.resetWorkspaceView(),await _.connect(""),g(o,"files"),g(h,!0)}catch(F){_.setStatus(F.message||"Could not open folder")}}async function K(E){E.preventDefault();try{const F=await fe.createConnection({...l(P),port:Number(l(P).port)});g(C,!1),g(P,{...l(P),label:"",host:"",username:"",password:"",private_key:""},!0),await _.loadConnections(),_.connectionId=F.connection.id,await _.refreshStatus()}catch(F){_.setStatus(F.message||"Could not create connection")}}async function re(){const E=_.connection;if(!E)return;const F=E.kind==="local"?"workspace":"connection";if(confirm(`Remove ${F} "${E.label}"? Saved tabs are cleared; files are untouched.`))try{await fe.deleteConnection(E.id),_.connectionId="",_.resetWorkspaceView(),await _.loadConnections()}catch(H){_.setStatus(H.message||"Could not delete")}}async function ue(){try{const E=await fe.focusTerminal(_.connectionId);_.setStatus(`Focused ${E.window_name}`,"tmux window selected")}catch(E){_.setStatus(E.message||"Could not focus terminal")}}function ke(E){var Se,je,Ce,lt;const F=E.ctrlKey||E.metaKey,H=E.key.toLowerCase(),we=((je=(Se=E.target)==null?void 0:Se.matches)==null?void 0:je.call(Se,"input, textarea, select"))&&!((lt=(Ce=E.target).closest)!=null&&lt.call(Ce,".monaco-editor"));F&&H==="s"?(E.preventDefault(),_.saveActive()):F&&H==="p"&&!we?(E.preventDefault(),_.connectionId&&g(p,!0)):F&&E.shiftKey&&H==="o"?(E.preventDefault(),g(z,!0)):F&&E.shiftKey&&["e","f","g"].includes(H)?(E.preventDefault(),g(o,{e:"files",f:"search",g:"git"}[H],!0),g(h,!0)):F&&H==="b"&&!we?(E.preventDefault(),g(h,!l(h))):F&&H==="`"?(E.preventDefault(),_.connectionState==="connected"&&g(k,!l(k))):E.key==="Escape"&&l(p)&&(E.preventDefault(),g(p,!1))}var he=Id();mr("keydown",Ws,ke);var ze=w(he),X=w(ze);Fi(X,{size:15,class:"shrink-0 text-vs-blue"});var Z=m(X,2),Te=m(Z,2),Be=m(Te,2);let yt;var xe=w(Be);Bi(xe,{size:13});var $e=m(Be,2),Qe=ae($e,!0),Ne=m($e,2),xt=w(Ne);Ni(xt,()=>l($),(E,F)=>{F(E,{size:12})});var wt=m(xt),Vt=m(ze,2),ht=w(Vt),Wn=w(ht);Ge(Wn,17,()=>q,E=>E.id,(E,F)=>{var H=hd(),we=w(H);{var Se=Je=>{var _e=dd();y(Je,_e)};j(we,Je=>{l(o)===l(F).id&&l(h)&&Je(Se)})}var je=m(we,2);Ni(je,()=>l(F).icon,(Je,_e)=>{_e(Je,{size:24,strokeWidth:1.4})});var Ce=m(je,2);{var lt=Je=>{var _e=vd(),pn=ae(_e,!0);G(()=>Y(pn,_.gitDirtyCount)),y(Je,_e)};j(Ce,Je=>{l(F).id==="git"&&_.gitDirtyCount&&Je(lt)})}G(()=>{jt(H,1,`relative flex h-12 w-12 items-center justify-center ${l(o)===l(F).id&&l(h)?"text-vs-bright":"text-vs-muted hover:text-vs-fg"}`),ve(H,"title",l(F).keys?`${l(F).label} (${l(F).keys})`:l(F).label),ve(H,"aria-label",l(F).label)}),R("click",H,()=>J(l(F).id)),y(E,H)});var $n=m(Wn,2),pt=w($n),Sn=w(pt);Eu(Sn,{size:24,strokeWidth:1.4});var Un=m(pt,2),En=w(Un);Bu(En,{size:24,strokeWidth:1.4});var vn=m(ht,2);{var Cn=E=>{var F=Ed(),H=L(F),we=w(H);{var Se=_e=>{tf(_e,{})},je=_e=>{nd(_e,{})},Ce=_e=>{ff(_e,{})},lt=_e=>{var pn=Sd(),Xn=m(L(pn),2),Bt=w(Xn),Zn=w(Bt);Zn.value=Zn.__value="";var Es=m(Zn);Ge(Es,17,()=>_.connections,Re=>Re.id,(Re,We)=>{var Xe=pd(),Nn=ae(Xe),Wt={};G(()=>{Y(Nn,`${l(We).kind==="local"?"🖿 ":"⇅ "}${l(We).label??""}`),Wt!==(Wt=l(We).id)&&(Xe.value=(Xe.__value=Wt)??"")}),y(Re,Xe)});var Qn;sr(Bt);var Mr=m(Bt,2),Pr=w(Mr),ao=w(Pr);Co(ao,{size:13});var Ar=m(Pr,2),Kt=w(Ar);Ku(Kt,{size:13});var lo=m(Ar,2);{var ul=Re=>{var We=_d(),Xe=w(We);qu(Xe,{size:13}),R("click",We,re),y(Re,We)};j(lo,Re=>{_.connection&&Re(ul)})}var ui=m(Mr,2);{var fl=Re=>{var We=bd(),Xe=L(We);{var Nn=kt=>{var Mn=gd();Ue(Mn,()=>l(M),uo=>g(M,uo)),y(kt,Mn)};j(Xe,kt=>{!l(N)&&!_.connection.has_password&&kt(Nn)})}var Wt=m(Xe,2),Cs=ae(Wt,!0),Ts=m(Wt,2);{var co=kt=>{var Mn=md();R("click",Mn,()=>_.needsHostKey=!0),y(kt,Mn)};j(Ts,kt=>{l(N)||kt(co)})}G(()=>Y(Cs,l(N)?"Open workspace":"Connect")),R("click",Wt,()=>_.connect(l(M))),y(Re,We)};j(ui,Re=>{_.connection&&_.connectionState!=="connected"&&Re(fl)})}var dl=m(ui,2);{var vl=Re=>{var We=yd(),Xe=ae(We,!0);G(()=>Y(Xe,_.connection.workspace_root)),y(Re,We)};j(dl,Re=>{_.connection&&Re(vl)})}var hl=m(Xn,2);{var pl=Re=>{var We=$d(),Xe=w(We),Nn=w(Xe);Nn.value=Nn.__value="local";var Wt=m(Nn);Wt.value=Wt.__value="ssh",sr(Xe);var Cs=m(Xe,2),Ts=m(Cs,2);{var co=on=>{var fi=kd(),di=L(fi),vi=m(di,2),hi=m(vi,2),Ns=m(hi,2),fo=w(Ns);fo.value=fo.__value="agent";var vo=m(fo);vo.value=vo.__value="key";var pi=m(vo);pi.value=pi.__value="password",sr(Ns);var _i=m(Ns,2);{var _l=et=>{var zr=xd(),Ms=L(zr),bl=m(Ms,2);Ue(Ms,()=>l(P).identity_file,ho=>l(P).identity_file=ho),Ue(bl,()=>l(P).private_key,ho=>l(P).private_key=ho),y(et,zr)};j(_i,et=>{l(P).auth_mode==="key"&&et(_l)})}var gl=m(_i,2);{var ml=et=>{var zr=wd();Ue(zr,()=>l(P).password,Ms=>l(P).password=Ms),y(et,zr)};j(gl,et=>{l(P).auth_mode==="password"&&et(ml)})}Ue(di,()=>l(P).host,et=>l(P).host=et),Ue(vi,()=>l(P).username,et=>l(P).username=et),Ue(hi,()=>l(P).port,et=>l(P).port=et),Wo(Ns,()=>l(P).auth_mode,et=>l(P).auth_mode=et),y(on,fi)};j(Ts,on=>{l(P).kind==="ssh"&&on(co)})}var kt=m(Ts,2),Mn=m(kt,2),uo=m(w(Mn),2);G(()=>{ve(kt,"placeholder",l(P).kind==="local"?"/var/www/app":"Workspace root"),kt.required=l(P).kind==="local"}),mr("submit",We,K),Wo(Xe,()=>l(P).kind,on=>l(P).kind=on),Ue(Cs,()=>l(P).label,on=>l(P).label=on),Ue(kt,()=>l(P).workspace_root,on=>l(P).workspace_root=on),R("click",uo,()=>g(C,!1)),y(Re,We)};j(hl,Re=>{l(C)&&Re(pl)})}G(()=>{Qn!==(Qn=_.connectionId)&&(Bt.value=(Bt.__value=Qn)??"",br(Bt,Qn))}),R("change",Bt,B),R("click",Pr,()=>g(z,!0)),R("click",Ar,()=>g(C,!l(C))),y(_e,pn)};j(we,_e=>{l(o)==="files"?_e(Se):l(o)==="search"?_e(je,1):l(o)==="git"?_e(Ce,2):_e(lt,-1)})}var Je=m(H,2);No(Je,{side:"right",min:170,max:620,onreset:()=>g(v,c.sidebar,!0),get size(){return l(v)},set size(_e){g(v,_e,!0)}}),G(()=>Gr(H,`width: ${l(v)??""}px`)),y(E,F)};j(vn,E=>{l(h)&&E(Cn)})}var qn=m(vn,2),Gn=w(qn);{var Tn=E=>{var F=Cd(),H=w(F);Fi(H,{size:64,strokeWidth:1,class:"text-vs-line"});var we=m(H,4),Se=w(we),je=w(Se);Co(je,{size:16});var Ce=m(Se,2),lt=w(Ce);Vi(lt,{size:16}),R("click",Se,()=>g(z,!0)),R("click",Ce,()=>{g(o,"remote"),g(h,!0),g(C,!0)}),y(E,F)},Cr=E=>{var F=Nd(),H=L(F);wf(H,{});var we=m(H,2),Se=w(we);gf(Se,{});var je=m(we,2);{var Ce=lt=>{var Je=Td(),_e=L(Je);{var pn=Kt=>{No(Kt,{side:"top",min:120,max:640,onreset:()=>g(d,c.panel,!0),get size(){return l(d)},set size(lo){g(d,lo,!0)}})};j(_e,Kt=>{l(k)&&Kt(pn)})}var Xn=m(_e,2),Bt=w(Xn),Zn=w(Bt);Bi(Zn,{size:13});var Es=m(Zn,2),Qn=ae(Es,!0),Mr=m(Es,2),Pr=w(Mr);qs(Pr,{size:14});var ao=m(Bt,2),Ar=w(ao);Yc(Ar,()=>_.connectionId,Kt=>{Kf(Kt,{get rootPath(){return s()},get session(){return r()}})}),G(()=>{var Kt;Gr(Xn,`height: ${l(d)??""}px`),ve(Xn,"hidden",!l(k)),Y(Qn,((Kt=_.connection)==null?void 0:Kt.label)||"")}),R("click",Mr,()=>g(k,!1)),y(lt,Je)};j(je,lt=>{l(S)&&_.connectionState==="connected"&&lt(Ce)})}y(E,F)};j(Gn,E=>{_.connectionId?E(Cr,-1):E(Tn)})}var so=m(qn,2);{var oo=E=>{var F=Md(),H=L(F);No(H,{side:"left",min:260,max:760,onreset:()=>g(b,c.chat,!0),get size(){return l(b)},set size(pn){g(b,pn,!0)}});var we=m(H,2),Se=w(we),je=w(Se);Hi(je,{size:13});var Ce=m(je,4),lt=w(Ce);qs(lt,{size:14});var Je=m(Se,2),_e=w(Je);Rf(_e,{get sessions(){return n()},get session(){return r()},get rootPath(){return s()}}),G(()=>Gr(we,`width: ${l(b)??""}px`)),R("click",Ce,()=>g(a,!1)),y(E,F)};j(so,E=>{l(a)&&E(oo)})}var T=m(Vt,2),D=w(T);{var te=E=>{var F=Ui(),H=w(F);{var we=Ce=>{Co(Ce,{size:12})},Se=Ce=>{Vi(Ce,{size:12})};j(H,Ce=>{l(N)?Ce(we):Ce(Se,-1)})}var je=m(H);G(()=>{ve(F,"title",_.connection.workspace_root),Y(je,` ${_.connection.label??""}`)}),y(E,F)};j(D,E=>{_.connection&&E(te)})}var pe=m(D,2);{var be=E=>{var F=Ui(),H=w(F);ji(H,{size:12});var we=m(H);G(()=>Y(we,` ${_.gitBranch??""}`)),y(E,F)};j(pe,E=>{_.gitBranch&&E(be)})}var Me=m(pe,2),Ie=ae(Me,!0),Ke=m(Me,2),De=w(Ke);{var Oe=E=>{var F=Pd(),H=ae(F);G(()=>Y(H,`${_.dirtyCount??""} unsaved`)),y(E,F)};j(De,E=>{_.dirtyCount&&E(Oe)})}var at=m(De,2),At=ae(at,!0),sn=m(at,2);{var Yn=E=>{var F=Ad(),H=L(F),we=w(H);Vu(we,{size:12});var Se=m(H,2),je=w(Se);Mu(je,{size:12}),R("click",H,()=>g(k,!l(k))),R("click",Se,ue),y(E,F)};j(sn,E=>{_.connectionState==="connected"&&E(Yn)})}var Tr=m(sn,2);{var Nr=E=>{var F=zd(),H=w(F);Hi(H,{size:12}),R("click",F,()=>g(a,!l(a))),y(E,F)};j(Tr,E=>{E(Nr)})}var hn=m(T,2);{var io=E=>{Vf(E,{onclose:()=>g(p,!1)})};j(hn,E=>{l(p)&&E(io)})}var Jn=m(hn,2);{var al=E=>{Jf(E,{onopen:I,onclose:()=>g(z,!1)})};j(Jn,E=>{l(z)&&E(al)})}var ll=m(Jn,2);{var cl=E=>{ud(E,{onclose:()=>_.needsHostKey=!1,ontrusted:async()=>{_.needsHostKey=!1,await _.connect(l(M))}})};j(ll,E=>{_.needsHostKey&&E(cl)})}G(()=>{var E;Te.disabled=!_.connectionId,yt=jt(Be,1,"flex items-center gap-1 rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40",null,yt,{"text-vs-bright":l(k)}),Be.disabled=_.connectionState!=="connected",ve(Be,"title",_.connectionState==="connected"?"Toggle terminal (Ctrl+`)":"Open a workspace to use the terminal"),ve($e,"title",(E=_.connection)==null?void 0:E.workspace_root),Y(Qe,_.connection?`${_.connection.label} — Multibuilder IDE`:"Multibuilder IDE"),jt(Ne,1,`flex items-center gap-1 ${_.connectionState==="connected"?"text-vs-green":_.connectionState==="connecting"?"text-vs-yellow":_.connectionState==="idle"?"text-vs-muted":"text-vs-red"}`),Y(wt,` ${x[_.connectionState].label??""}`),Y(Ie,_.statusText),Y(At,_.detailText)}),R("click",Z,()=>g(z,!0)),R("click",Te,()=>g(p,!0)),R("click",Be,()=>g(k,!l(k))),R("click",pt,()=>_.setStatus("Signed in to the Multibuilder dashboard")),R("click",Un,()=>g(h,!l(h))),y(e,he),it()}Pt(["click","change"]);function il(e,t){return Wc(Od,{target:e,props:t})}function qi(){const e=document.getElementById("ide-root");if(!e||e.dataset.mounted)return;e.dataset.mounted="1";const t=window.__IDE_BOOTSTRAP__||{};il(e,{sessions:t.sessions||[],session:t.session||"",rootPath:t.rootPath||""})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",qi):qi();window.mountRemoteIde=il;export{Fs as _};
