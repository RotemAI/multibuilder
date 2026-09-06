const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ide-monaco.js","./ide2.css","./ide3.css"])))=>i.map(i=>d[i]);
var Jl=Object.defineProperty;var Qa=e=>{throw TypeError(e)};var Xl=(e,t,n)=>t in e?Jl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var vt=(e,t,n)=>Xl(e,typeof t!="symbol"?t+"":t,n),ra=(e,t,n)=>t.has(e)||Qa("Cannot "+n);var u=(e,t,n)=>(ra(e,t,"read from private field"),n?n.call(e):t.get(e)),U=(e,t,n)=>t.has(e)?Qa("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),de=(e,t,n,r)=>(ra(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),be=(e,t,n)=>(ra(e,t,"access private method"),n);var qo=Array.isArray,Zl=Array.prototype.indexOf,Ro=Array.prototype.includes,Go=Array.from,Ii=Object.defineProperty,Un=Object.getOwnPropertyDescriptor,Oi=Object.getOwnPropertyDescriptors,Ql=Object.prototype,ec=Array.prototype,Ra=Object.getPrototypeOf,ei=Object.isExtensible;function $s(e){return typeof e=="function"}const tc=()=>{};function nc(e){return e()}function ma(e){for(var t=0;t<e.length;t++)e[t]()}function Ri(){var e,t,n=new Promise((r,s)=>{e=r,t=s});return{promise:n,resolve:e,reject:t}}function rc(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const n=[];for(const r of e)if(n.push(r),n.length===t)break;return n}const st=2,Qr=4,xo=8,La=1<<24,Jt=16,Ht=32,zn=64,ba=128,Da=256,Ft=512,nt=1024,rt=2048,en=4096,_t=8192,$t=16384,ss=32768,Lo=1<<25,qn=65536,Do=1<<17,sc=1<<18,os=1<<19,Li=1<<20,fn=1<<25,kr=65536,Fo=1<<21,Vr=1<<22,Wn=1<<23,hn=Symbol("$state"),Di=Symbol("component"),Fi=Symbol("legacy props"),oc=Symbol(""),To=Symbol("attributes"),xa=Symbol("class"),ya=Symbol("style"),Ts=Symbol("text"),No=Symbol("form reset"),yo=new class extends Error{constructor(){super(...arguments);vt(this,"name","StaleReactionError");vt(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var Pi;const Fa=!!((Pi=globalThis.document)!=null&&Pi.contentType)&&globalThis.document.contentType.includes("xml"),ac=1,ic=2,Hi=4,lc=8,cc=16,uc=1,dc=2,ji=4,fc=8,vc=16,pc=1,hc=2,tt=Symbol("uninitialized"),Bi="http://www.w3.org/1999/xhtml",Vi="http://www.w3.org/2000/svg",gc="http://www.w3.org/1998/Math/MathML",_c="@attach";function mc(){console.warn("https://svelte.dev/e/derived_inert")}function bc(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function xc(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Ki(e){return e===this.v}function yc(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Ui(e){return!yc(e,this.v)}function Wi(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function wc(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function kc(e,t,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function $c(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Sc(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Cc(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Ec(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Tc(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Nc(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function zc(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Pc(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Ac(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let as=!1;function Mc(){as=!0}let je=null;function es(e){je=e}function mt(e,t=!1,n){je={p:je,i:!1,c:null,e:null,s:e,x:null,r:pe,l:as&&!t?{s:null,u:null,$:[]}:null}}function bt(e){var t=je,n=t.e;if(n!==null){t.e=null;for(var r of n)hl(r)}return t.i=!0,je=t.p,Ha(e)}function Ha(e={}){return Ii(e,Di,{value:!0}),e}function is(){return!as||je!==null&&je.l===null}let vr=[];function qi(){var e=vr;vr=[],ma(e)}function vn(e){if(vr.length===0&&!Ls){var t=vr;queueMicrotask(()=>{t===vr&&qi()})}vr.push(e)}function Ic(){for(;vr.length>0;)qi()}const Oc=-7169;function We(e,t){e.f=e.f&Oc|t}function ja(e){(e.f&Ft)!==0||e.deps===null?We(e,nt):We(e,en)}function Gi(e){if(e!==null)for(const t of e)(t.f&st)===0||(t.f&kr)===0||(t.f^=kr,Gi(t.deps))}function Yi(e,t,n){(e.f&rt)!==0?t.add(e):(e.f&en)!==0&&n.add(e),Gi(e.deps),We(e,nt)}let Co=!1;function Rc(e){var t=Co;try{return Co=!1,[e(),Co]}finally{Co=t}}function Ji(e,t){if(t){const n=document.body;e.autofocus=!0,vn(()=>{document.activeElement===n&&e.focus()})}}let ti=!1;function Lc(){ti||(ti=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n[No])==null||t.call(n)})},{capture:!0}))}function ls(e){var t=me,n=pe;jt(null),Bt(null);try{return e()}finally{jt(t),Bt(n)}}function Xi(e,t,n,r=n){e.addEventListener(t,()=>ls(n));const s=e[No];s?e[No]=()=>{s(),r(!0)}:e[No]=()=>r(!0),Lc()}function Zi(e,t,n,r){const s=is()?ts:Ba;var i=e.filter(k=>!k.settled),a=t.map(s);if(n.length===0&&i.length===0){r(a);return}var l=pe,c=Dc(),f=i.length===1?i[0].promise:i.length>1?Promise.all(i.map(k=>k.promise)):null;function p(k){if((l.f&$t)===0){c();try{r([...a,...k])}catch($){dn($,l)}Ho()}}var x=Qi();if(n.length===0){f.then(()=>p([])).finally(x);return}function g(){Promise.all(n.map(k=>Fc(k))).then(p).catch(k=>dn(k,l)).finally(x)}f?f.then(()=>{c(),g(),Ho()}):g()}function Dc(){var e=pe,t=me,n=je,r=ee;return function(i=!0){Bt(e),jt(t),es(n),i&&(e.f&$t)===0&&(r==null||r.activate(),r==null||r.apply())}}function Ho(e=!0){Bt(null),jt(null),es(null),e&&(ee==null||ee.deactivate())}function Qi(){var e=pe,t=e.b,n=ee,r=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,n),n.increment(r,e),()=>{t==null||t.update_pending_count(-1,n),n.decrement(r,e)}}function ts(e){var t=st|rt;return pe!==null&&(pe.f|=os),{ctx:je,deps:null,effects:null,equals:Ki,f:t,fn:e,reactions:null,rv:0,v:tt,wv:0,parent:pe,ac:null}}const Ns=Symbol("obsolete");function Fc(e,t,n){let r=pe;r===null&&wc();var s=void 0,i=Pn(tt),a=!me,l=new Set;return eu(()=>{var k,$;var c=pe,f=Ri();s=f.promise;try{Promise.resolve(e()).then(f.resolve,y=>{y!==yo&&f.reject(y)}).finally(Ho)}catch(y){f.reject(y),Ho()}var p=ee;if(a){if((c.f&ss)!==0)var x=Qi();if((k=r.b)!=null&&k.is_rendered())($=p.async_deriveds.get(c))==null||$.reject(Ns);else for(const y of l.values())y.reject(Ns);l.add(f),p.async_deriveds.set(c,f)}const g=(y,C=void 0)=>{x==null||x(),l.delete(f),C!==Ns&&(p.activate(),C?(i.f|=Wn,ns(i,C)):((i.f&Wn)!==0&&(i.f^=Wn),ns(i,y)),p.deactivate())};f.promise.then(g,y=>g(null,y||"unknown"))}),Jo(()=>{for(const c of l)c.reject(Ns)}),new Promise(c=>{function f(p){function x(){p===s?c(i):f(s)}p.then(x,x)}f(s)})}function ct(e){const t=ts(e);return wl(t),t}function Ba(e){const t=ts(e);return t.equals=Ui,t}function Hc(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)it(t[n])}}function Va(e){var t,n=pe,r=e.parent;if(!An&&r!==null&&e.v!==tt&&(r.f&($t|_t))!==0)return mc(),e.v;Bt(r);try{e.f&=~kr,Hc(e),t=Cl(e)}finally{Bt(n)}return t}function el(e){var t=Va(e);if(!e.equals(t)&&(e.wv=$l(),(!(ee!=null&&ee.is_fork)||e.deps===null)&&(ee!==null?(ee.capture(e,t,!0),Rs==null||Rs.capture(e,t,!0)):e.v=t,e.deps===null))){We(e,nt);return}An||(ot!==null?(Wa()||ee!=null&&ee.is_fork)&&ot.set(e,t):ja(e))}function jc(e){var t;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),n.ac!==null&&ls(()=>{n.ac.abort(yo),n.ac=null}),n.fn!==null&&(n.teardown=tc),js(n,0),Ga(n))}function tl(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&rs(t)}let sa=null,Hr=null,ee=null,Rs=null,ot=null,wa=null,Ls=!1,oa=!1,Br=null,zo=null;var ni=0;let Bc=1;var Wr,Vn,gr,qr,Gr,Yr,En,Jr,yt,Ks,Tn,Gt,ln,Xr,_r,Pe,ka,zs,$a,nl,rl,jr,Vc,Ps;const Ko=class Ko{constructor(){U(this,Pe);vt(this,"id",Bc++);U(this,Wr,!1);vt(this,"linked",!0);U(this,Vn,null);U(this,gr,null);vt(this,"async_deriveds",new Map);vt(this,"current",new Map);vt(this,"previous",new Map);U(this,qr,new Set);U(this,Gr,new Set);U(this,Yr,0);U(this,En,new Map);U(this,Jr,null);U(this,yt,[]);U(this,Ks,[]);U(this,Tn,new Set);U(this,Gt,new Set);U(this,ln,new Map);U(this,Xr,new Set);vt(this,"is_fork",!1);U(this,_r,!1);Hr===null?sa=Hr=this:(de(Hr,gr,this),de(this,Vn,Hr)),Hr=this}skip_effect(t){u(this,ln).has(t)||u(this,ln).set(t,{d:[],m:[]}),u(this,Xr).delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=u(this,ln).get(t);if(r){u(this,ln).delete(t);for(var s of r.d)We(s,rt),n(s);for(s of r.m)We(s,en),n(s)}u(this,Xr).add(t)}capture(t,n,r=!1){t.v!==tt&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Wn)===0&&(this.current.set(t,[n,r]),ot==null||ot.set(t,n)),this.is_fork||(t.v=n)}activate(){ee=this}deactivate(){ee=null,ot=null}flush(){try{oa=!0,ee=this,be(this,Pe,zs).call(this)}finally{ni=0,wa=null,Br=null,zo=null,oa=!1,ee=null,ot=null,gn.clear()}}discard(){var t;for(const n of u(this,Gr))n(this);u(this,Gr).clear();for(const n of this.async_deriveds.values())n.reject(Ns);be(this,Pe,Ps).call(this),(t=u(this,Jr))==null||t.resolve()}register_created_effect(t){u(this,Ks).push(t)}increment(t,n){if(de(this,Yr,u(this,Yr)+1),t){let r=u(this,En).get(n)??0;u(this,En).set(n,r+1)}}decrement(t,n){if(de(this,Yr,u(this,Yr)-1),t){let r=u(this,En).get(n)??0;r===1?u(this,En).delete(n):u(this,En).set(n,r-1)}u(this,_r)||(de(this,_r,!0),vn(()=>{de(this,_r,!1),this.linked&&this.flush()}))}transfer_effects(t,n){for(const r of t)u(this,Tn).add(r);for(const r of n)u(this,Gt).add(r);t.clear(),n.clear()}oncommit(t){u(this,qr).add(t)}ondiscard(t){u(this,Gr).add(t)}settled(){return(u(this,Jr)??de(this,Jr,Ri())).promise}static ensure(){if(ee===null){const t=ee=new Ko;!oa&&!Ls&&vn(()=>{u(t,Wr)||t.flush()})}return ee}apply(){{ot=null;return}}schedule(t){var s;if(wa=t,(s=t.b)!=null&&s.is_pending&&(t.f&(Qr|xo|La))!==0&&(t.f&ss)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(Br!==null&&n===pe&&(me===null||(me.f&st)===0))return;if((r&(zn|Ht))!==0){if((r&nt)===0)return;n.f^=nt}}u(this,yt).push(n)}};Wr=new WeakMap,Vn=new WeakMap,gr=new WeakMap,qr=new WeakMap,Gr=new WeakMap,Yr=new WeakMap,En=new WeakMap,Jr=new WeakMap,yt=new WeakMap,Ks=new WeakMap,Tn=new WeakMap,Gt=new WeakMap,ln=new WeakMap,Xr=new WeakMap,_r=new WeakMap,Pe=new WeakSet,ka=function(){if(this.is_fork)return!0;for(const r of u(this,En).keys()){for(var t=r,n=!1;t.parent!==null;){if(u(this,ln).has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1},zs=function(){var c,f,p,x;de(this,Wr,!0),ni++>1e3&&(be(this,Pe,Ps).call(this),Uc());for(const g of u(this,Tn))u(this,Gt).delete(g),We(g,rt),this.schedule(g);for(const g of u(this,Gt))We(g,en),this.schedule(g);const t=u(this,yt);de(this,yt,[]),this.apply();var n=Br=[],r=[],s=zo=[];for(const g of t)try{be(this,Pe,$a).call(this,g,n,r)}catch(k){throw al(g),be(this,Pe,ka).call(this)||this.discard(),k}if(ee=null,s.length>0){var i=Ko.ensure();for(const g of s)i.schedule(g)}if(Br=null,zo=null,be(this,Pe,ka).call(this)){be(this,Pe,jr).call(this,r),be(this,Pe,jr).call(this,n);for(const[g,k]of u(this,ln))ol(g,k);s.length>0&&be(c=ee,Pe,zs).call(c);return}const a=be(this,Pe,nl).call(this);if(a){be(this,Pe,jr).call(this,r),be(this,Pe,jr).call(this,n),be(f=a,Pe,rl).call(f,this);return}u(this,Tn).clear(),u(this,Gt).clear();for(const g of u(this,qr))g(this);u(this,qr).clear(),Rs=this,ri(r),ri(n),Rs=null,(p=u(this,Jr))==null||p.resolve();var l=ee;if(u(this,Yr)===0&&(u(this,yt).length===0||l!==null)&&be(this,Pe,Ps).call(this),u(this,yt).length>0)if(l!==null){const g=l;u(g,yt).push(...u(this,yt).filter(k=>!u(g,yt).includes(k)))}else l=this;l!==null&&(gn.clear(),be(x=l,Pe,zs).call(x))},$a=function(t,n,r){t.f^=nt;for(var s=t.first;s!==null;){var i=s.f,a=(i&(Ht|zn))!==0,l=a&&(i&nt)!==0,c=l||(i&_t)!==0||u(this,ln).has(s);if(!c&&s.fn!==null){a?s.f^=nt:(i&Qr)!==0?n.push(s):ko(s)&&((i&Jt)!==0&&u(this,Gt).add(s),rs(s));var f=s.first;if(f!==null){s=f;continue}}for(;s!==null;){var p=s.next;if(p!==null){s=p;break}s=s.parent}}},nl=function(){for(var t=u(this,Vn);t!==null;){if(!t.is_fork){for(const[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=u(t,Vn)}return null},rl=function(t){var r;for(const[s,i]of t.current)!this.previous.has(s)&&t.previous.has(s)&&this.previous.set(s,t.previous.get(s)),this.current.set(s,i);for(const[s,i]of t.async_deriveds){const a=this.async_deriveds.get(s);a&&i.promise.then(a.resolve).catch(a.reject)}t.async_deriveds.clear(),this.transfer_effects(u(t,Tn),u(t,Gt));const n=s=>{var i=s.reactions;if(i!==null&&!((s.f&st)!==0&&(s.f&(rt|en))===0))for(const c of i){var a=c.f;if((a&st)!==0)n(c);else{var l=c;a&(Vr|Jt)&&!this.async_deriveds.has(l)&&(u(this,Gt).delete(l),We(l,rt),this.schedule(l))}}};for(const s of this.current.keys())n(s);this.oncommit(()=>t.discard()),be(r=t,Pe,Ps).call(r),ee=this,be(this,Pe,zs).call(this)},jr=function(t){for(var n=0;n<t.length;n+=1)Yi(t[n],u(this,Tn),u(this,Gt))},Vc=function(){var x;for(let g=sa;g!==null;g=u(g,gr)){var t=g.id<this.id,n=[];for(const[k,[$,y]]of this.current){if(g.current.has(k)){var r=g.current.get(k)[0];if(t&&$!==r)g.current.set(k,[$,y]);else continue}n.push(k)}if(t)for(const[k,$]of this.async_deriveds){const y=g.async_deriveds.get(k);y&&$.promise.then(y.resolve).catch(y.reject)}var s=[...g.current.keys()].filter(k=>!g.current.get(k)[1]);if(!(!u(g,Wr)||s.length===0)){var i=s.filter(k=>!this.current.has(k));if(i.length===0)t&&g.discard();else if(n.length>0){if(t)for(const k of u(this,Xr))g.unskip_effect(k,$=>{var y;($.f&(Jt|Vr))!==0?g.schedule($):be(y=g,Pe,jr).call(y,[$])});g.activate();var a=new Set,l=new Map;for(var c of n)sl(c,i,a,l);l=new Map;var f=[...g.current].filter(([k,$])=>{const y=this.current.get(k);return y?y[0]!==$[0]||y[1]!==$[1]:!0}).map(([k])=>k);if(f.length>0)for(const k of u(this,Ks))(k.f&($t|_t|Do))===0&&Ka(k,f,l)&&((k.f&(Vr|Jt))!==0?(We(k,rt),g.schedule(k)):u(g,Tn).add(k));if(u(g,yt).length>0&&!u(g,_r)){g.apply();for(var p of u(g,yt))be(x=g,Pe,$a).call(x,p,[],[]);de(g,yt,[])}g.deactivate()}}}},Ps=function(){if(this.linked){var t=u(this,Vn),n=u(this,gr);t===null?sa=n:de(t,gr,n),n===null?Hr=t:de(n,Vn,t),this.linked=!1}};let $r=Ko;function Kc(e){var t=Ls;Ls=!0;try{for(var n;;){if(Ic(),ee===null)return n;ee.flush()}}finally{Ls=t}}function Uc(){try{Ec()}catch(e){dn(e,wa)}}let qt=null;function ri(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&($t|_t))===0&&ko(r)&&(qt=new Set,rs(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&bl(r),(qt==null?void 0:qt.size)>0)){gn.clear();for(const s of qt){if((s.f&($t|_t))!==0)continue;const i=[s];let a=s.parent;for(;a!==null;)qt.has(a)&&(qt.delete(a),i.push(a)),a=a.parent;for(let l=i.length-1;l>=0;l--){const c=i[l];(c.f&($t|_t))===0&&rs(c)}}qt.clear()}}qt=null}}function sl(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const s of e.reactions){const i=s.f;(i&st)!==0?sl(s,t,n,r):(i&(Vr|Jt))!==0&&(i&rt)===0&&Ka(s,t,r)&&(We(s,rt),Ua(s))}}function Ka(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const s of e.deps){if(Ro.call(t,s))return!0;if((s.f&st)!==0&&Ka(s,t,n))return n.set(s,!0),!0}return n.set(e,!1),!1}function Ua(e){ee.schedule(e)}function ol(e,t){if(!((e.f&Ht)!==0&&(e.f&nt)!==0)){(e.f&rt)!==0?t.d.push(e):(e.f&en)!==0&&t.m.push(e),We(e,nt);for(var n=e.first;n!==null;)ol(n,t),n=n.next}}function al(e){We(e,nt);for(var t=e.first;t!==null;)al(t),t=t.next}let jo=new Set;const gn=new Map;let il=!1;function Pn(e,t){var n={f:0,v:e,reactions:null,equals:Ki,rv:0,wv:0};return n}function O(e,t){const n=Pn(e);return wl(n),n}function Wc(e,t=!1,n=!0){var s;const r=Pn(e);return t||(r.equals=Ui),as&&n&&je!==null&&je.l!==null&&((s=je.l).s??(s.s=[])).push(r),r}function d(e,t,n=!1){me!==null&&(!Zt||(me.f&Do)!==0)&&is()&&(me.f&(st|Jt|Vr|Do))!==0&&(mn===null||!mn.has(e))&&Pc();let r=n?ze(t):t;return ns(e,r,zo)}function ns(e,t,n=null){if(!e.equals(t)){An?gn.set(e,t):gn.has(e)||gn.set(e,e.v);var r=$r.ensure();if(r.capture(e,t),(e.f&st)!==0){const s=e;(e.f&rt)!==0&&Va(s),ot===null&&ja(s)}e.wv=$l(),ll(e,rt,n),is()&&pe!==null&&(pe.f&nt)!==0&&(pe.f&(Ht|zn))===0&&(Rt===null?nu([e]):Rt.push(e)),!r.is_fork&&jo.size>0&&!il&&qc()}return t}function qc(){il=!1;for(const e of jo){(e.f&nt)!==0&&We(e,en);let t;try{t=ko(e)}catch{t=!0}t&&rs(e)}jo.clear()}function si(e,t=1){var n=o(e),r=t===1?n++:n--;return d(e,n),r}function Ds(e){d(e,e.v+1)}function ll(e,t,n){var r=e.reactions;if(r!==null)for(var s=is(),i=r.length,a=0;a<i;a++){var l=r[a],c=l.f;if(!(!s&&l===pe)){var f=(c&rt)===0;if(f&&We(l,t),(c&Do)!==0)jo.add(l);else if((c&st)!==0){var p=l;ot==null||ot.delete(p),(c&kr)===0&&(c&Ft&&(pe===null||(pe.f&Fo)===0)&&(l.f|=kr),ll(p,en,n))}else if(f){var x=l;(c&Jt)!==0&&qt!==null&&qt.add(x),n!==null?n.push(x):Ua(x)}}}}function ze(e){if(typeof e!="object"||e===null||hn in e||Di in e)return e;const t=Ra(e);if(t!==Ql&&t!==ec)return e;var n=new Map,r=qo(e),s=O(0),i=wr,a=l=>{if(wr===i)return l();var c=me,f=wr;jt(null),ii(i);var p=l();return jt(c),ii(f),p};return r&&n.set("length",O(e.length)),new Proxy(e,{defineProperty(l,c,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&Nc();var p=n.get(c);return p===void 0?a(()=>{var x=O(f.value);return n.set(c,x),x}):d(p,f.value,!0),!0},deleteProperty(l,c){var f=n.get(c);if(f===void 0){if(c in l){const p=a(()=>O(tt));n.set(c,p),Ds(s)}}else d(f,tt),Ds(s);return!0},get(l,c,f){var k;if(c===hn)return e;var p=n.get(c),x=c in l;if(p===void 0&&(!x||(k=Un(l,c))!=null&&k.writable)&&(p=a(()=>{var $=ze(x?l[c]:tt),y=O($);return y}),n.set(c,p)),p!==void 0){var g=o(p);return g===tt?void 0:g}return Reflect.get(l,c,f)},getOwnPropertyDescriptor(l,c){var f=Reflect.getOwnPropertyDescriptor(l,c);if(f&&"value"in f){var p=n.get(c);p&&(f.value=o(p))}else if(f===void 0){var x=n.get(c),g=x==null?void 0:x.v;if(x!==void 0&&g!==tt)return{enumerable:!0,configurable:!0,value:g,writable:!0}}return f},has(l,c){var g;if(c===hn)return!0;var f=n.get(c),p=f!==void 0&&f.v!==tt||Reflect.has(l,c);if(f!==void 0||pe!==null&&(!p||(g=Un(l,c))!=null&&g.writable)){f===void 0&&(f=a(()=>{var k=p?ze(l[c]):tt,$=O(k);return $}),n.set(c,f));var x=o(f);if(x===tt)return!1}return p},set(l,c,f,p){var z;var x=n.get(c),g=c in l;if(r&&c==="length")for(var k=f;k<x.v;k+=1){var $=n.get(k+"");$!==void 0?d($,tt):k in l&&($=a(()=>O(tt)),n.set(k+"",$))}if(x===void 0)(!g||(z=Un(l,c))!=null&&z.writable)&&(x=a(()=>O(void 0)),d(x,ze(f)),n.set(c,x));else{g=x.v!==tt;var y=a(()=>ze(f));d(x,y)}var C=Reflect.getOwnPropertyDescriptor(l,c);if(C!=null&&C.set&&C.set.call(p,f),!g){if(r&&typeof c=="string"){var M=n.get("length"),L=Number(c);Number.isInteger(L)&&L>=M.v&&d(M,L+1)}Ds(s)}return!0},ownKeys(l){o(s);var c=Reflect.ownKeys(l).filter(x=>{var g=n.get(x);return g===void 0||g.v!==tt});for(var[f,p]of n)p.v!==tt&&!(f in l)&&c.push(f);return c},setPrototypeOf(){zc()}})}function oi(e){try{if(e!==null&&typeof e=="object"&&hn in e)return e[hn]}catch{}return e}function cl(e,t){return Object.is(oi(e),oi(t))}var Hs,ul,dl,fl;function Gc(){if(Hs===void 0){Hs=window,ul=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;dl=Un(t,"firstChild").get,fl=Un(t,"nextSibling").get,ei(e)&&(e[xa]=void 0,e[To]=null,e[ya]=void 0,e.__e=void 0),ei(n)&&(n[Ts]=void 0)}}function _n(e=""){return document.createTextNode(e)}function Xt(e){return dl.call(e)}function wo(e){return fl.call(e)}function b(e,t){return Xt(e)}function j(e,t=!1){{var n=Xt(e);return n instanceof Comment&&n.data===""?wo(n):n}}function X(e,t=!1){return Xt(e)}function v(e,t=1,n=!1){let r=e;for(;t--;)r=wo(r);return r}function Yc(e){e.textContent=""}function vl(){return!1}function Yo(e,t,n){return t==null||t===Bi?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function Jc(e){var t=pe;if(t===null)return me.f|=Wn,e;if((t.f&ss)===0&&(t.f&Qr)===0)throw e;dn(e,t)}function dn(e,t){if(!(t!==null&&(t.f&$t)!==0)){for(;t!==null;){if((t.f&ba)!==0&&(t.f&($t|Lo))===0){if((t.f&ss)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}function pl(e){pe===null&&(me===null&&Cc(),Sc()),An&&$c()}function Xc(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function tn(e,t){var n=pe;n!==null&&(n.f&_t)!==0&&(e|=_t);var r={ctx:je,deps:null,nodes:null,f:e|rt|Ft,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};ee==null||ee.register_created_effect(r);var s=r;if((e&Qr)!==0)Br!==null?Br.push(r):$r.ensure().schedule(r);else if(t!==null){try{rs(r)}catch(a){throw it(r),a}s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&os)===0&&(s=s.first,(e&Jt)!==0&&(e&qn)!==0&&s!==null&&(s.f|=qn))}if(s!==null&&(s.parent=n,n!==null&&Xc(s,n),me!==null&&(me.f&st)!==0&&(e&zn)===0)){var i=me;(i.effects??(i.effects=[])).push(s)}return r}function Wa(){return me!==null&&!Zt}function Jo(e){const t=tn(xo,null);return We(t,nt),t.teardown=e,t}function at(e){pl();var t=pe.f,n=!me&&(t&Ht)!==0&&je!==null&&!je.i;if(n){var r=je;(r.e??(r.e=[])).push(e)}else return hl(e)}function hl(e){return tn(Qr|Li,e)}function Zc(e){return pl(),tn(xo|Li,e)}function Qc(e){$r.ensure();const t=tn(zn|os,e);return(n={})=>new Promise(r=>{n.outro?yr(t,()=>{it(t),r(void 0)}):(it(t),r(void 0))})}function Xo(e){return tn(Qr,e)}function eu(e){return tn(Vr|os,e)}function qa(e,t=0){return tn(xo|t,e)}function W(e,t=[],n=[],r=[]){Zi(r,t,n,s=>{tn(xo,()=>{e(...s.map(o))})})}function cs(e,t=0){var n=tn(Jt|t,e);return n}function gl(e,t=0){var n=tn(La|t,e);return n}function wt(e){return tn(Ht|os,e)}function _l(e){var t=e.teardown;if(t!==null){const n=An,r=me;ai(!0),jt(null);try{t.call(null)}catch(s){dn(s,e.parent)}finally{ai(n),jt(r)}}}function Ga(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const s=n.ac;s!==null&&ls(()=>{s.abort(yo)});var r=n.next;(n.f&zn)!==0?n.parent=null:it(n,t),n=r}}function tu(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&Ht)===0&&it(t),t=n}}function it(e,t=!0){var n=!1;(t||(e.f&sc)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(ml(e.nodes.start,e.nodes.end),n=!0),e.f|=Lo,Ga(e,t&&!n),js(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const i of r)i.stop();_l(e),e.f^=Lo,e.f|=$t;var s=e.parent;s!==null&&s.first!==null&&bl(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function ml(e,t){for(;e!==null;){var n=e===t?null:wo(e);e.remove(),e=n}}function bl(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function yr(e,t,n=!0){var r=[];e.f|=Da,xl(e,r,!0);var s=()=>{n&&it(e),t&&t()},i=r.length;if(i>0){var a=()=>--i||s();for(var l of r)l.out(a)}else s()}function xl(e,t,n){if((e.f&_t)===0){e.f^=_t;var r=e.nodes&&e.nodes.t;if(r!==null)for(const l of r)(l.is_global||n)&&t.push(l);for(var s=e.first;s!==null;){var i=s.next;if((s.f&zn)===0){var a=(s.f&qn)!==0||(s.f&Ht)!==0&&(e.f&Jt)!==0;xl(s,t,a?n:!1)}s=i}}}function Bo(e){e.f&=~Da,yl(e,!0)}function yl(e,t){if((e.f&Da)===0&&(e.f&_t)!==0){e.f^=_t,(e.f&nt)===0&&(We(e,rt),$r.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,s=(n.f&qn)!==0||(n.f&Ht)!==0;yl(n,s?t:!1),n=r}var i=e.nodes&&e.nodes.t;if(i!==null)for(const a of i)(a.is_global||t)&&a.in()}}function Ya(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var s=n===r?null:wo(n);t.append(n),n=s}}let Po=!1,An=!1;function ai(e){An=e}let me=null,Zt=!1;function jt(e){me=e}let pe=null;function Bt(e){pe=e}let mn=null;function wl(e){me!==null&&(mn??(mn=new Set)).add(e)}let kt=null,Nt=0,Rt=null;function nu(e){Rt=e}let kl=1,pr=0,wr=pr;function ii(e){wr=e}function $l(){return++kl}function ko(e){var t=e.f;if((t&rt)!==0)return!0;if(t&st&&(e.f&=~kr),(t&en)!==0){for(var n=e.deps,r=n.length,s=0;s<r;s++){var i=n[s];if(ko(i)&&el(i),i.wv>e.wv)return!0}(t&Ft)!==0&&ot===null&&We(e,nt)}return!1}function Sl(e,t,n=!0){var r=e.reactions;if(r!==null&&!(mn!==null&&mn.has(e)))for(var s=0;s<r.length;s++){var i=r[s];(i.f&st)!==0?Sl(i,t,!1):t===i&&(n?We(i,rt):(i.f&nt)!==0&&We(i,en),Ua(i))}}function Cl(e){var t=kt,n=Nt,r=Rt,s=me,i=mn,a=je,l=Zt,c=wr,f=e.f;kt=null,Nt=0,Rt=null,me=(f&(Ht|zn))===0?e:null,mn=null,es(e.ctx),Zt=!1,wr=++pr,e.ac!==null&&(ls(()=>{e.ac.abort(yo)}),e.ac=null);try{e.f|=Fo;var p=e.fn,x=p();e.f|=ss;var g=li(e);if(is()&&Rt!==null&&!Zt&&g!==null&&(e.f&(st|en|rt))===0)for(var k=0;k<Rt.length;k++)Sl(Rt[k],e);if(s!==null&&s!==e){if(pr++,s.deps!==null)for(let $=0;$<n;$+=1)s.deps[$].rv=pr;if(t!==null)for(const $ of t)$.rv=pr;Rt!==null&&(r===null?r=Rt:r.push(...Rt))}return(e.f&Wn)!==0&&(e.f^=Wn),x}catch($){return li(e),Jc($)}finally{e.f^=Fo,kt=t,Nt=n,Rt=r,me=s,mn=i,es(a),Zt=l,wr=c}}function li(e){var s;var t=e.deps,n=ee==null?void 0:ee.is_fork;if(kt!==null){var r;if(n||js(e,Nt),t!==null&&Nt>0)for(t.length=Nt+kt.length,r=0;r<kt.length;r++)t[Nt+r]=kt[r];else e.deps=t=kt;if(Wa()&&(e.f&Ft)!==0)for(r=Nt;r<t.length;r++)((s=t[r]).reactions??(s.reactions=[])).push(e)}else!n&&t!==null&&Nt<t.length&&(js(e,Nt),t.length=Nt);return t}function ru(e,t){let n=t.reactions;if(n!==null){var r=Zl.call(n,e);if(r!==-1){var s=n.length-1;s===0?n=t.reactions=null:(n[r]=n[s],n.pop())}}if(n===null&&(t.f&st)!==0&&(kt===null||!Ro.call(kt,t))){var i=t;(i.f&Ft)!==0&&(i.f^=Ft,i.f&=~kr),i.v!==tt&&ja(i),i.ac!==null&&ls(()=>{i.ac.abort(yo),i.ac=null,We(i,rt)}),jc(i),js(i,0)}}function js(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)ru(e,n[r])}function rs(e){var t=e.f;if((t&$t)===0){We(e,nt);var n=pe,r=Po;pe=e,Po=(t&(Ht|zn))===0;try{(t&(Jt|La))!==0?tu(e):Ga(e),_l(e);var s=Cl(e);e.teardown=typeof s=="function"?s:null,e.wv=kl;var i}finally{Po=r,pe=n}}}async function su(){await Promise.resolve(),Kc()}function o(e){var t=e.f,n=(t&st)!==0;if(me!==null&&!Zt){var r=pe!==null&&(pe.f&$t)!==0;if(!r&&(mn===null||!mn.has(e))){var s=me.deps;if((me.f&Fo)!==0)e.rv<pr&&(e.rv=pr,kt===null&&s!==null&&s[Nt]===e?Nt++:kt===null?kt=[e]:kt.push(e));else{me.deps??(me.deps=[]),Ro.call(me.deps,e)||me.deps.push(e);var i=e.reactions;i===null?e.reactions=[me]:Ro.call(i,me)||i.push(me)}}}if(An&&gn.has(e))return gn.get(e);if(n){var a=e;if(An){var l=a.v;return((a.f&nt)===0&&a.reactions!==null||Tl(a))&&(l=Va(a)),gn.set(a,l),l}var c=(a.f&Ft)===0&&!Zt&&me!==null&&(Po||(me.f&Ft)!==0),f=(a.f&ss)===0;ko(a)&&(c&&(a.f|=Ft),el(a)),c&&!f&&(tl(a),El(a))}if(ot!=null&&ot.has(e))return ot.get(e);if((e.f&Wn)!==0)throw e.v;return e.v}function El(e){if(e.f|=Ft,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&st)!==0&&(t.f&Ft)===0&&(tl(t),El(t))}function Tl(e){if(e.v===tt)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(gn.has(t)||(t.f&st)!==0&&Tl(t))return!0;return!1}function Mn(e){var t=Zt;try{return Zt=!0,e()}finally{Zt=t}}function dr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(hn in e)Sa(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&hn in n&&Sa(n)}}}function Sa(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{Sa(e[r],t)}catch{}const n=Ra(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=Oi(n);for(let s in r){const i=r[s].get;if(i)try{i.call(e)}catch{}}}}}function ou(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const au=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function iu(e){return au.includes(e)}const lu={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function cu(e){return e=e.toLowerCase(),lu[e]??e}const uu=["touchstart","touchmove"];function du(e){return uu.includes(e)}const hr=Symbol("events"),Nl=new Set,Ca=new Set;function zl(e,t,n,r={}){function s(i){if(r.capture||Ea.call(t,i),!i.cancelBubble)return ls(()=>n==null?void 0:n.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?vn(()=>{t.addEventListener(e,s,r)}):t.addEventListener(e,s,r),s}function Gn(e,t,n,r,s){var i={capture:r,passive:s},a=zl(e,t,n,i);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Jo(()=>{t.removeEventListener(e,a,i)})}function R(e,t,n){(t[hr]??(t[hr]={}))[e]=n}function Vt(e){for(var t=0;t<e.length;t++)Nl.add(e[t]);for(var n of Ca)n(e)}let aa=null,ia=!1;function Ea(e){var y,C;var t=this,n=t.ownerDocument,r=e.type,s=((y=e.composedPath)==null?void 0:y.call(e))||[],i=s[0]||e.target;aa=e,ia||(ia=!0,setTimeout(()=>{ia=!1,aa=null}));var a=0,l=aa===e&&e[hr];if(l){var c=s.indexOf(l);if(c!==-1&&(t===document||t===window)){e[hr]=t;return}var f=s.indexOf(t);if(f===-1)return;c<=f&&(a=c)}if(i=s[a]||e.target,i!==t){Ii(e,"currentTarget",{configurable:!0,get(){return i||n}});var p=me,x=pe;jt(null),Bt(null);try{for(var g,k=[];i!==null&&i!==t;){try{var $=(C=i[hr])==null?void 0:C[r];$!=null&&(!i.disabled||e.target===i)&&$.call(i,e)}catch(M){g?k.push(M):g=M}if(e.cancelBubble)break;a++,i=a<s.length?s[a]:null}if(g){for(let M of k)queueMicrotask(()=>{throw M});throw g}}finally{e[hr]=t,delete e.currentTarget,jt(p),Bt(x)}}}var Ai;const la=((Ai=globalThis==null?void 0:globalThis.window)==null?void 0:Ai.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function fu(e){return(la==null?void 0:la.createHTML(e))??e}function Pl(e){var t=Yo("template");return t.innerHTML=fu(e.replaceAll("<!>","<!---->")),t.content}function Yn(e,t){var n=pe;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function A(e,t){var n=(t&pc)!==0,r=(t&hc)!==0,s,i=!e.startsWith("<!>");return()=>{s===void 0&&(s=Pl(i?e:"<!>"+e),n||(s=Xt(s)));var a=r||ul?document.importNode(s,!0):s.cloneNode(!0);if(n){var l=Xt(a),c=a.lastChild;Yn(l,c)}else Yn(a,a);return a}}function vu(e,t,n="svg"){var r=!e.startsWith("<!>"),s=`<${n}>${r?e:"<!>"+e}</${n}>`,i;return()=>{if(!i){var a=Pl(s),l=Xt(a);i=Xt(l)}var c=i.cloneNode(!0);return Yn(c,c),c}}function Al(e,t){return vu(e,t,"svg")}function ci(e=""){{var t=_n(e+"");return Yn(t,t),t}}function Q(){var e=document.createDocumentFragment(),t=document.createComment(""),n=_n();return e.append(t,n),Yn(t,n),e}function m(e,t){e!==null&&e.before(t)}function pu(e){let t=0,n=Pn(0),r;return()=>{Wa()&&(o(n),qa(()=>(t===0&&(r=Mn(()=>e(()=>Ds(n)))),t+=1,()=>{vn(()=>{t-=1,t===0&&(r==null||r(),r=void 0,Ds(n))})})))}}var hu=qn|os;function gu(e,t,n,r){new _u(e,t,n,r)}var Lt,Oa,Dt,mr,pt,Ct,ht,Et,cn,br,Kn,Zr,Us,Ws,Nn,Uo,He,mu,bu,Ta,xu,Na,As,Ao,za,Pa;class _u{constructor(t,n,r,s){U(this,He);vt(this,"parent");vt(this,"is_pending",!1);vt(this,"transform_error");U(this,Lt);U(this,Oa,null);U(this,Dt);U(this,mr);U(this,pt);U(this,Ct,null);U(this,ht,null);U(this,Et,null);U(this,cn,null);U(this,br,0);U(this,Kn,0);U(this,Zr,!1);U(this,Us,new Set);U(this,Ws,new Set);U(this,Nn,null);U(this,Uo,pu(()=>(de(this,Nn,Pn(u(this,br))),()=>{de(this,Nn,null)})));var i;de(this,Lt,t),de(this,Dt,n),de(this,mr,a=>{var l=pe;l.b=this,l.f|=ba,r(a)}),this.parent=pe.b,this.transform_error=s??((i=this.parent)==null?void 0:i.transform_error)??(a=>a),de(this,pt,cs(()=>{be(this,He,Na).call(this)},hu))}defer_effect(t){Yi(t,u(this,Us),u(this,Ws))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,Dt).pending}update_pending_count(t,n){be(this,He,za).call(this,t,n),de(this,br,u(this,br)+t),!(!u(this,Nn)||u(this,Zr))&&(de(this,Zr,!0),vn(()=>{de(this,Zr,!1),u(this,Nn)&&ns(u(this,Nn),u(this,br))}))}get_effect_pending(){return u(this,Uo).call(this),o(u(this,Nn))}error(t){if(!u(this,Dt).onerror&&!u(this,Dt).failed)throw t;ee!=null&&ee.is_fork?(u(this,Ct)&&ee.skip_effect(u(this,Ct)),u(this,ht)&&ee.skip_effect(u(this,ht)),u(this,Et)&&ee.skip_effect(u(this,Et)),ee.oncommit(()=>{be(this,He,Pa).call(this,t)})):be(this,He,Pa).call(this,t)}}Lt=new WeakMap,Oa=new WeakMap,Dt=new WeakMap,mr=new WeakMap,pt=new WeakMap,Ct=new WeakMap,ht=new WeakMap,Et=new WeakMap,cn=new WeakMap,br=new WeakMap,Kn=new WeakMap,Zr=new WeakMap,Us=new WeakMap,Ws=new WeakMap,Nn=new WeakMap,Uo=new WeakMap,He=new WeakSet,mu=function(){try{de(this,Ct,wt(()=>u(this,mr).call(this,u(this,Lt))))}catch(t){this.error(t)}},bu=function(t){const n=u(this,Dt).failed,{reset:r,invoke_onerror:s}=be(this,He,Ta).call(this,t);vn(s),n&&de(this,Et,wt(()=>{n(u(this,Lt),()=>t,()=>r)}))},Ta=function(t){var n=!1,r=!1;const s=()=>{if(n){xc();return}n=!0,r&&Ac(),u(this,Et)!==null&&yr(u(this,Et),()=>{de(this,Et,null)}),be(this,He,Ao).call(this,()=>{be(this,He,Na).call(this)})};return{reset:s,invoke_onerror:()=>{var a,l;try{r=!0,(l=(a=u(this,Dt)).onerror)==null||l.call(a,t,s),r=!1}catch(c){dn(c,u(this,pt)&&u(this,pt).parent)}}}},xu=function(){const t=u(this,Dt).pending;t&&(this.is_pending=!0,de(this,ht,wt(()=>t(u(this,Lt)))),vn(()=>{var n=de(this,cn,document.createDocumentFragment()),r=_n(),s=!1;if(n.append(r),de(this,Ct,be(this,He,Ao).call(this,()=>{try{return wt(()=>u(this,mr).call(this,r))}catch(i){try{this.error(i),s=!0}catch(a){dn(a,u(this,pt).parent)}return null}})),u(this,Ct)===null){de(this,cn,null),s&&be(this,He,As).call(this,ee);return}u(this,Kn)===0&&(u(this,Lt).before(n),de(this,cn,null),yr(u(this,ht),()=>{de(this,ht,null)}),be(this,He,As).call(this,ee))}))},Na=function(){try{if(this.is_pending=this.has_pending_snippet(),de(this,Kn,0),de(this,br,0),de(this,Ct,wt(()=>{u(this,mr).call(this,u(this,Lt))})),u(this,Kn)>0){var t=de(this,cn,document.createDocumentFragment());Ya(u(this,Ct),t);const n=u(this,Dt).pending;de(this,ht,wt(()=>n(u(this,Lt))))}else be(this,He,As).call(this,ee)}catch(n){this.error(n)}},As=function(t){this.is_pending=!1,t.transfer_effects(u(this,Us),u(this,Ws))},Ao=function(t){var n=pe,r=me,s=je;Bt(u(this,pt)),jt(u(this,pt)),es(u(this,pt).ctx);try{return $r.ensure(),t()}finally{Bt(n),jt(r),es(s)}},za=function(t,n){var r;if(!this.has_pending_snippet()){this.parent&&be(r=this.parent,He,za).call(r,t,n);return}de(this,Kn,u(this,Kn)+t),u(this,Kn)===0&&(be(this,He,As).call(this,n),u(this,ht)&&yr(u(this,ht),()=>{de(this,ht,null)}),u(this,cn)&&(u(this,Lt).before(u(this,cn)),de(this,cn,null)))},Pa=function(t){u(this,Ct)&&(it(u(this,Ct)),de(this,Ct,null)),u(this,ht)&&(it(u(this,ht)),de(this,ht,null)),u(this,Et)&&(it(u(this,Et)),de(this,Et,null));let n=u(this,Dt).failed;const r=s=>{const{reset:i,invoke_onerror:a}=be(this,He,Ta).call(this,s);a(),n&&de(this,Et,be(this,He,Ao).call(this,()=>{try{return wt(()=>{var l=pe;l.b=this,l.f|=ba,n(u(this,Lt),()=>s,()=>i)})}catch(l){return dn(l,u(this,pt).parent),null}}))};vn(()=>{var s;try{s=this.transform_error(t)}catch(i){dn(i,u(this,pt)&&u(this,pt).parent);return}s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(r,i=>dn(i,u(this,pt)&&u(this,pt).parent)):r(s)})};function V(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[Ts]??(e[Ts]=e.nodeValue))&&(e[Ts]=n,e.nodeValue=`${n}`)}function yu(e,t){return wu(e,t)}const Eo=new Map;function wu(e,{target:t,anchor:n,props:r={},events:s,context:i,intro:a=!0,transformError:l}){Gc();var c=void 0,f=Qc(()=>{var p=n??t.appendChild(_n());gu(p,{pending:()=>{}},k=>{mt({});var $=je;i&&($.c=i),s&&(r.$$events=s),c=e(k,r)||Ha(),bt()},l);var x=new Set,g=k=>{for(var $=0;$<k.length;$++){var y=k[$];if(!x.has(y)){x.add(y);var C=du(y);for(const z of[t,document]){var M=Eo.get(z);M===void 0&&(M=new Map,Eo.set(z,M));var L=M.get(y);L===void 0?(z.addEventListener(y,Ea,{passive:C}),M.set(y,1)):M.set(y,L+1)}}}};return g(Go(Nl)),Ca.add(g),()=>{var C;for(var k of x)for(const M of[t,document]){var $=Eo.get(M),y=$.get(k);--y==0?(M.removeEventListener(k,Ea),$.delete(k),$.size===0&&Eo.delete(M)):$.set(k,y)}Ca.delete(g),p!==n&&((C=p.parentNode)==null||C.removeChild(p))}});return ku.set(c,f),c}let ku=new WeakMap;var Yt,un,Tt,xr,qs,Gs,Wo;class Zo{constructor(t,n=!0){vt(this,"anchor");U(this,Yt,new Map);U(this,un,new Map);U(this,Tt,new Map);U(this,xr,new Set);U(this,qs,!0);U(this,Gs,t=>{if(u(this,Yt).has(t)){var n=u(this,Yt).get(t),r=u(this,un).get(n);if(r)Bo(r),u(this,xr).delete(n);else{var s=u(this,Tt).get(n);s&&(Bo(s.effect),u(this,un).set(n,s.effect),u(this,Tt).delete(n),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[i,a]of u(this,Yt)){if(u(this,Yt).delete(i),i===t)break;const l=u(this,Tt).get(a);l&&(it(l.effect),u(this,Tt).delete(a))}for(const[i,a]of u(this,un)){if(i===n||u(this,xr).has(i))continue;const l=()=>{if(Array.from(u(this,Yt).values()).includes(i)){var f=document.createDocumentFragment();Ya(a,f),f.append(_n()),u(this,Tt).set(i,{effect:a,fragment:f})}else it(a);u(this,xr).delete(i),u(this,un).delete(i)};u(this,qs)||!r?(u(this,xr).add(i),yr(a,l,!1)):l()}}});U(this,Wo,t=>{u(this,Yt).delete(t);const n=Array.from(u(this,Yt).values());for(const[r,s]of u(this,Tt))n.includes(r)||(it(s.effect),u(this,Tt).delete(r))});this.anchor=t,de(this,qs,n)}ensure(t,n){var r=ee,s=vl();if(n&&!u(this,un).has(t)&&!u(this,Tt).has(t))if(s){var i=document.createDocumentFragment(),a=_n();i.append(a),u(this,Tt).set(t,{effect:wt(()=>n(a)),fragment:i})}else u(this,un).set(t,wt(()=>n(this.anchor)));if(u(this,Yt).set(r,t),s){for(const[l,c]of u(this,un))l===t?r.unskip_effect(c):r.skip_effect(c);for(const[l,c]of u(this,Tt))l===t?r.unskip_effect(c.effect):r.skip_effect(c.effect);r.oncommit(u(this,Gs)),r.ondiscard(u(this,Wo))}else u(this,Gs).call(this,r)}}Yt=new WeakMap,un=new WeakMap,Tt=new WeakMap,xr=new WeakMap,qs=new WeakMap,Gs=new WeakMap,Wo=new WeakMap;function H(e,t,n=!1){var r=new Zo(e),s=n?qn:0;function i(a,l){r.ensure(a,l)}cs(()=>{var a=!1;t((l,c=0)=>{a=!0,i(c,l)}),a||i(-1,null)},s)}const $u=Symbol("NaN");function Su(e,t,n){var r=new Zo(e),s=!is();cs(()=>{var i=t();i!==i&&(i=$u),s&&i!==null&&typeof i=="object"&&(i={}),r.ensure(i,n)})}function Ml(e,t){return t}function Cu(e,t,n){for(var r=[],s=t.length,i,a=t.length,l=0;l<s;l++){let x=t[l];yr(x,()=>{if(i){if(i.pending.delete(x),i.done.add(x),i.pending.size===0){var g=e.outrogroups;Aa(e,Go(i.done)),g.delete(i),g.size===0&&(e.outrogroups=null)}}else a-=1},!1)}if(a===0){var c=r.length===0&&n!==null&&e.pending.size===0;if(c){var f=n,p=f.parentNode;Yc(p),p.append(f),e.items.clear()}Aa(e,t,!c)}else i={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(i)}function Aa(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(const a of e.pending.values())for(const l of a)r.add(e.items.get(l).e)}for(var s=0;s<t.length;s++){var i=t[s];if(r!=null&&r.has(i)){i.f|=fn;const a=document.createDocumentFragment();Ya(i,a)}else it(t[s],n)}}var ui;function Xe(e,t,n,r,s,i=null){var a=e,l=new Map,c=(t&Hi)!==0;if(c){var f=e;a=f.appendChild(_n())}var p=null,x=Ba(()=>{var z=n();return qo(z)?z:z==null?[]:Go(z)}),g,k=new Map,$=!0;function y(z){(L.effect.f&$t)===0&&(L.pending.delete(z),L.fallback=p,Eu(L,g,a,t,r),p!==null&&(g.length===0?(p.f&fn)===0?Bo(p):(p.f^=fn,Ms(p,null,a)):yr(p,()=>{p=null})))}function C(z){L.pending.delete(z)}var M=cs(()=>{g=o(x);for(var z=g.length,K=new Set,T=ee,S=vl(),N=0;N<z;N+=1){var q=g[N],G=r(q,N),Y=$?null:l.get(G);Y?(Y.v&&ns(Y.v,q),Y.i&&ns(Y.i,N),S&&T.unskip_effect(Y.e)):(Y=Tu(l,$?a:ui??(ui=_n()),q,G,N,s,t,n),$||(Y.e.f|=fn),l.set(G,Y)),K.add(G)}if(z===0&&i&&!p&&($?p=wt(()=>i(a)):(p=wt(()=>i(ui??(ui=_n()))),p.f|=fn)),z>K.size&&kc(),!$)if(k.set(T,K),S){for(const[D,B]of l)K.has(D)||T.skip_effect(B.e);T.oncommit(y),T.ondiscard(C)}else y(T);o(x)}),L={effect:M,items:l,pending:k,outrogroups:null,fallback:p};$=!1}function Ss(e){for(;e!==null&&(e.f&Ht)===0;)e=e.next;return e}function Eu(e,t,n,r,s){var Y,D,B,he,xe,Ge,Le,Ze,ne;var i=(r&lc)!==0,a=t.length,l=e.items,c=Ss(e.effect.first),f,p=null,x,g=[],k=[],$,y,C,M;if(i)for(M=0;M<a;M+=1)$=t[M],y=s($,M),C=l.get(y).e,(C.f&fn)===0&&((D=(Y=C.nodes)==null?void 0:Y.a)==null||D.measure(),(x??(x=new Set)).add(C));for(M=0;M<a;M+=1){if($=t[M],y=s($,M),C=l.get(y).e,e.outrogroups!==null)for(const ue of e.outrogroups)ue.pending.delete(C),ue.done.delete(C);if((C.f&_t)!==0&&(Bo(C),i&&((he=(B=C.nodes)==null?void 0:B.a)==null||he.unfix(),(x??(x=new Set)).delete(C))),(C.f&fn)!==0)if(C.f^=fn,C===c)Ms(C,null,n);else{var L=p?p.next:c;C===e.effect.last&&(e.effect.last=C.prev),C.prev&&(C.prev.next=C.next),C.next&&(C.next.prev=C.prev),jn(e,p,C),jn(e,C,L),Ms(C,L,n),p=C,g=[],k=[],c=Ss(p.next);continue}if(C!==c){if(f!==void 0&&f.has(C)){if(g.length<k.length){var z=k[0],K;p=z.prev;var T=g[0],S=g[g.length-1];for(K=0;K<g.length;K+=1)Ms(g[K],z,n);for(K=0;K<k.length;K+=1)f.delete(k[K]);jn(e,T.prev,S.next),jn(e,p,T),jn(e,S,z),c=z,p=S,M-=1,g=[],k=[]}else f.delete(C),Ms(C,c,n),jn(e,C.prev,C.next),jn(e,C,p===null?e.effect.first:p.next),jn(e,p,C),p=C;continue}for(g=[],k=[];c!==null&&c!==C;)(f??(f=new Set)).add(c),k.push(c),c=Ss(c.next);if(c===null)continue}(C.f&fn)===0&&g.push(C),p=C,c=Ss(C.next)}if(e.outrogroups!==null){for(const ue of e.outrogroups)ue.pending.size===0&&(Aa(e,Go(ue.done)),(xe=e.outrogroups)==null||xe.delete(ue));e.outrogroups.size===0&&(e.outrogroups=null)}if(c!==null||f!==void 0){var N=[];if(f!==void 0)for(C of f)(C.f&_t)===0&&N.push(C);for(;c!==null;)(c.f&_t)===0&&c!==e.fallback&&N.push(c),c=Ss(c.next);var q=N.length;if(q>0){var G=(r&Hi)!==0&&a===0?n:null;if(i){for(M=0;M<q;M+=1)(Le=(Ge=N[M].nodes)==null?void 0:Ge.a)==null||Le.measure();for(M=0;M<q;M+=1)(ne=(Ze=N[M].nodes)==null?void 0:Ze.a)==null||ne.fix()}Cu(e,N,G)}}i&&vn(()=>{var ue,E;if(x!==void 0)for(C of x)(E=(ue=C.nodes)==null?void 0:ue.a)==null||E.apply()})}function Tu(e,t,n,r,s,i,a,l){var c=(a&ac)!==0?(a&cc)===0?Wc(n,!1,!1):Pn(n):null,f=(a&ic)!==0?Pn(s):null;return{v:c,i:f,e:wt(()=>(i(t,c??n,f??s,l),()=>{e.delete(r)}))}}function Ms(e,t,n){if(e.nodes)for(var r=e.nodes.start,s=e.nodes.end,i=t&&(t.f&fn)===0?t.nodes.start:n;r!==null;){var a=wo(r);if(i.before(r),r===s)return;r=a}}function jn(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function di(e,t,n=!1,r=!1,s=!1,i=!1){var a=e,l="";if(n)var c=e;W(()=>{var f=pe;if(l!==(l=t()??"")){if(n){f.nodes=null,c.innerHTML=l,l!==""&&Yn(Xt(c),c.lastChild);return}if(f.nodes!==null&&(ml(f.nodes.start,f.nodes.end),f.nodes=null),l!==""){var p=r?Vi:s?gc:void 0,x=Yo(r?"svg":s?"math":"template",p);x.innerHTML=l;var g=r||s?x:x.content;if(Yn(Xt(g),g.lastChild),r||s)for(;Xt(g);)a.before(Xt(g));else a.before(g)}}})}function se(e,t,n,r,s){var l,c;if((l=t.$$host)!=null&&l.$$shadowRoot){const f=Yo("slot");m(e,f);return}var i=(c=t.$$slots)==null?void 0:c[n],a=!1;i===!0&&(i=t.children,a=!0),i===void 0||i(e,a?()=>r:r)}function fi(e,t,n){var r=new Zo(e);cs(()=>{var s=t()??null;r.ensure(s,s&&(i=>n(i,s)))},qn)}function Nu(e,t,n,r,s,i){var a=null,l=e,c=new Zo(l,!1);cs(()=>{const f=t()||null;var p=Vi;if(f===null){c.ensure(null,null);return}return c.ensure(f,x=>{if(f){if(a=Yo(f,p),Yn(a,a),r){var g=null,k=a.appendChild(_n());r(a,k),g==null||g.remove()}pe.nodes.end=a,x.before(a)}}),()=>{}},qn),Jo(()=>{})}function zu(e,t){var n=void 0,r;gl(()=>{n!==(n=t())&&(r&&(it(r),r=null),n&&(r=wt(()=>{Xo(()=>n(e))})))})}function Il(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=Il(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Pu(){for(var e,t,n=0,r="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=Il(e))&&(r&&(r+=" "),r+=t);return r}function Ol(e){return typeof e=="object"?Pu(e):e??""}const vi=[...` 	
\r\f \v\uFEFF`];function Au(e,t,n){var r=e==null?"":""+e;if(t&&(r=r?r+" "+t:t),n){for(var s of Object.keys(n))if(n[s])r=r?r+" "+s:s;else if(r.length)for(var i=s.length,a=0;(a=r.indexOf(s,a))>=0;){var l=a+i;(a===0||vi.includes(r[a-1]))&&(l===r.length||vi.includes(r[l]))?r=(a===0?"":r.substring(0,a))+r.substring(l+1):a=l}}return r===""?null:r}function pi(e,t=!1){var n=t?" !important;":";",r="";for(var s of Object.keys(e)){var i=e[s];i!=null&&i!==""&&(r+=" "+s+": "+i+n)}return r}function ca(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Mu(e,t){if(t){var n="",r,s;if(Array.isArray(t)?(r=t[0],s=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var i=!1,a=0,l=!1,c=[];r&&c.push(...Object.keys(r).map(ca)),s&&c.push(...Object.keys(s).map(ca));var f=0,p=-1;const y=e.length;for(var x=0;x<y;x++){var g=e[x];if(l?g==="/"&&e[x-1]==="*"&&(l=!1):i?i===g&&(i=!1):g==="/"&&e[x+1]==="*"?l=!0:g==='"'||g==="'"?i=g:g==="("?a++:g===")"&&a--,!l&&i===!1&&a===0){if(g===":"&&p===-1)p=x;else if(g===";"||x===y-1){if(p!==-1){var k=ca(e.substring(f,p).trim());if(!c.includes(k)){g!==";"&&x++;var $=e.substring(f,x).trim();n+=" "+$+";"}}f=x+1,p=-1}}}}return r&&(n+=pi(r)),s&&(n+=pi(s,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function gt(e,t,n,r,s,i){var a=e[xa];if(a!==n||a===void 0){var l=Au(n,r,i);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e[xa]=n}else if(i&&s!==i)for(var c in i){var f=!!i[c];(s==null||f!==!!s[c])&&e.classList.toggle(c,f)}return i}function ua(e,t={},n,r){for(var s in n){var i=n[s];t[s]!==i&&(n[s]==null?e.style.removeProperty(s):e.style.setProperty(s,i,r))}}function Kr(e,t,n,r){var s=e[ya];if(s!==t){var i=Mu(t,r);i==null?e.removeAttribute("style"):e.style.cssText=i,e[ya]=t}else r&&(Array.isArray(r)?(ua(e,n==null?void 0:n[0],r[0]),ua(e,n==null?void 0:n[1],r[1],"important")):ua(e,n,r));return r}function Rl(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function hi(e,t){var n=!("__defaultValue"in e);!n&&e.__defaultValue===t||(e.__defaultValue=t,Ll(e,!n||"__value"in e))}function Ll(e,t){var n=e.__defaultValue,r=e.multiple,s=r?n??[]:null;if(!(r&&!qo(s))){var i=e.selectedIndex,a=t&&r?new Set(e.selectedOptions):null;for(var l of e.options){var c=Ur(l);Rl(l,r?s.includes(c):cl(c,n))}if(t)if(a!==null)for(l of e.options){var f=a.has(l);l.selected!==f&&(l.selected=f)}else e.selectedIndex!==i&&(e.selectedIndex=i)}}function Bs(e,t,n=!1){if(e.multiple){if(t==null)return;if(!qo(t))return bc();for(var r of e.options)r.selected=t.includes(Ur(r));return}for(r of e.options){var s=Ur(r);if(cl(s,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Is(e){var t=new MutationObserver(n=>{n.every(Iu)||("__defaultValue"in e&&Ll(e,!1),"__value"in e&&Bs(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Jo(()=>{t.disconnect()})}function da(e,t,n=t){var r=new WeakSet,s=!0;Xi(e,"change",i=>{var a=i?"[selected]":":checked",l;if(e.multiple)l=[].map.call(e.querySelectorAll(a),Ur);else{var c=e.querySelector(a)??e.querySelector("option:not([disabled])");l=c&&Ur(c)}n(l),e.__value=l,ee!==null&&r.add(ee)}),Xo(()=>{var i=t();if(e===document.activeElement){var a=ee;if(r.has(a))return}if(Bs(e,i,s),s&&i===void 0){var l=e.querySelector(":checked");l!==null&&(i=Ur(l),n(i))}e.__value=i,s=!1})}function Ur(e){return"__value"in e?e.__value:e.value}function Iu(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(n=>n.nodeName==="SELECTEDCONTENT")}return!1}const Cs=Symbol("class"),Es=Symbol("style"),Dl=Symbol("is custom element"),Fl=Symbol("is html"),Ou=Fa?"input":"INPUT",Ru=Fa?"option":"OPTION",Hl=Fa?"select":"SELECT";function _e(e,t,n,r){var s=jl(e);s[t]!==(s[t]=n)&&(t==="loading"&&(e[oc]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Bl(e).has(t)?e[t]=n:e.setAttribute(t,n))}function Lu(e,t,n,r,s=!1,i=!1){var a=jl(e),l=a[Dl],c=!a[Fl],f=t||{},p=e.nodeName===Ru,x=e.nodeName===Hl;for(var g in t)!(g in n)&&g[0]+g[1]!=="$$"&&(n[g]=null);n.class?n.class=Ol(n.class):n[Cs]&&(n.class=null),n[Es]&&(n.style??(n.style=null));var k=Bl(e);if(e.nodeName===Ou&&"type"in n&&("value"in n||"__value"in n)){var $=n.type;($!==f.type||$===void 0&&e.hasAttribute("type"))&&(f.type=$,_e(e,"type",$))}for(const T in n){let S=n[T];if(p&&T==="value"&&S==null){e.value=e.__value="",f[T]=S;continue}if(T==="class"){var y=e.namespaceURI==="http://www.w3.org/1999/xhtml";gt(e,y,S,r,t==null?void 0:t[Cs],n[Cs]),f[T]=S,f[Cs]=n[Cs];continue}if(T==="style"){Kr(e,S,t==null?void 0:t[Es],n[Es]),f[T]=S,f[Es]=n[Es];continue}var C=f[T];if(!(S===C&&!(S===void 0&&e.hasAttribute(T)))){f[T]=S;var M=T[0]+T[1];if(M!=="$$")if(M==="on"){const N={},q="$$"+T;let G=T.slice(2);var L=iu(G);if(ou(G)&&(G=G.slice(0,-7),N.capture=!0),!L&&C){if(S!=null)continue;e.removeEventListener(G,f[q],N),f[q]=null}if(L)R(G,e,S),Vt([G]);else if(S!=null){let Y=function(D){f[T].call(this,D)};f[q]=zl(G,e,Y,N)}}else if(T==="style")_e(e,T,S);else if(T==="autofocus")Ji(e,!!S);else if(!l&&(T==="__value"||T==="value"&&S!=null))e.value=e.__value=S;else if(T==="selected"&&p)Rl(e,S);else{var z=T;c||(z=cu(z));var K=z==="defaultValue"||z==="defaultChecked";if(x&&z==="defaultValue")continue;if(S==null&&!l&&!K)if(a[T]=null,z==="value"||z==="checked"){let N=e;const q=t===void 0;if(z==="value"){let G=N.defaultValue;N.removeAttribute(z),N.defaultValue=G,N.value=N.__value=q?G:null}else{let G=N.defaultChecked;N.removeAttribute(z),N.defaultChecked=G,N.checked=q?G:!1}}else e.removeAttribute(T);else K||(l||typeof S!="string")&&k.has(z)?(e[z]=S,z in a&&(a[z]=tt)):typeof S!="function"&&_e(e,z,S)}}}return f}function gi(e,t,n=[],r=[],s=[],i,a=!1,l=!1){Zi(s,n,r,c=>{var f=void 0,p={},x=e.nodeName===Hl,g=!1;if(gl(()=>{var $=t(...c.map(o)),y=Lu(e,f,$,i,a,l);if(g&&x){var C=e;"defaultValue"in $&&hi(C,$.defaultValue),"value"in $&&Bs(C,$.value)}for(let L of Object.getOwnPropertySymbols(p))$[L]||it(p[L]);for(let L of Object.getOwnPropertySymbols($)){var M=$[L];L.description===_c&&(!f||M!==f[L])&&(p[L]&&it(p[L]),p[L]=wt(()=>zu(e,()=>M))),y[L]=M}f=y}),x){var k=e;Xo(()=>{var $=f;"defaultValue"in $&&hi(k,$.defaultValue),Bs(k,$.value,!0),Is(k)})}g=!0})}function jl(e){return e[To]??(e[To]={[Dl]:e.nodeName.includes("-"),[Fl]:e.namespaceURI===Bi})}var _i=new Map;function Bl(e){var t=e.getAttribute("is")||e.nodeName,n=_i.get(t);if(n)return n;_i.set(t,n=new Set);for(var r,s=e,i=Element.prototype;i!==s;){r=Oi(s);for(var a in r)r[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&n.add(a);s=Ra(s)}return n}function Be(e,t,n=t){var r=new WeakSet;Xi(e,"input",async s=>{var i=s?e.defaultValue:e.value;if(i=fa(e)?va(i):i,n(i),ee!==null&&r.add(ee),await su(),i!==(i=t())){var a=e.selectionStart,l=e.selectionEnd,c=e.value.length;if(e.value=i??"",l!==null){var f=e.value.length;a===l&&l===c&&f>c?(e.selectionStart=f,e.selectionEnd=f):(e.selectionStart=a,e.selectionEnd=Math.min(l,f))}}}),Mn(t)==null&&e.value&&(n(fa(e)?va(e.value):e.value),ee!==null&&r.add(ee)),qa(()=>{var s=t();if(e===document.activeElement){var i=ee;if(r.has(i))return}fa(e)&&s===va(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function fa(e){var t=e.type;return t==="number"||t==="range"}function va(e){return e===""?null:+e}function pa(e,t){return e===t||(e==null?void 0:e[hn])===t}function Vs(e=Ha(),t,n,r){var s=je.r,i=pe;return Xo(()=>{var a,l;return qa(()=>{a=l,l=[],Mn(()=>{pa(n(...l),e)||(t(e,...l),a&&pa(n(...a),e)&&t(null,...a))})}),()=>{let c=i;for(;c!==s&&c.parent!==null&&c.parent.f&Lo;)c=c.parent;const f=()=>{l&&pa(n(...l),e)&&t(null,...l)},p=c.teardown;c.teardown=()=>{f(),p==null||p()}}}),e}function Vl(e=!1){const t=je,n=t.l.u;if(!n)return;let r=()=>dr(t.s);if(e){let s=0,i={};const a=ts(()=>{let l=!1;const c=t.s;for(const f in c)c[f]!==i[f]&&(i[f]=c[f],l=!0);return l&&s++,s});r=()=>o(a)}n.b.length&&Zc(()=>{mi(t,r),ma(n.b)}),at(()=>{const s=Mn(()=>n.m.map(nc));return()=>{for(const i of s)typeof i=="function"&&i()}}),n.a.length&&at(()=>{mi(t,r),ma(n.a)})}function mi(e,t){if(e.l.s)for(const n of e.l.s)o(n);t()}function Du(e){var t=Pn(0);return function(){return arguments.length===1?(d(t,o(t)+1),arguments[0]):(o(t),e())}}const Fu={get(e,t){if(!e.exclude.includes(t))return o(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var r=pe;try{Bt(e.parent_effect),e.special[t]=qe({get[t](){return e.props[t]}},t,ji)}finally{Bt(r)}}return e.special[t](n),si(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),si(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function re(e,t){return new Proxy({props:e,exclude:t,special:{},version:Pn(0),parent_effect:pe},Fu)}const Hu={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if($s(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let s=e.props[r];$s(s)&&(s=s());const i=Un(s,t);if(i&&i.set)return i.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if($s(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const s=Un(r,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===hn||t===Fi)return!1;for(let n of e.props)if($s(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){const t=[];for(let n of e.props)if($s(n)&&(n=n()),!!n){for(const r in n)t.includes(r)||t.push(r);for(const r of Object.getOwnPropertySymbols(n))t.includes(r)||t.push(r)}return t}};function le(...e){return new Proxy({props:e},Hu)}function qe(e,t,n,r){var K;var s=!as||(n&dc)!==0,i=(n&fc)!==0,a=(n&vc)!==0,l=r,c=!0,f=void 0,p=()=>a&&s?(f??(f=ts(r)),o(f)):(c&&(c=!1,l=a?Mn(r):r),l);let x;if(i){var g=hn in e||Fi in e;x=((K=Un(e,t))==null?void 0:K.set)??(g&&t in e?T=>e[t]=T:void 0)}var k,$=!1;i?[k,$]=Rc(()=>e[t]):k=e[t],k===void 0&&r!==void 0&&(k=p(),x&&(s&&Tc(),x(k)));var y;if(s?y=()=>{var T=e[t];return T===void 0?p():(c=!0,T)}:y=()=>{var T=e[t];return T!==void 0&&(l=void 0),T===void 0?l:T},s&&(n&ji)===0)return y;if(x){var C=e.$$legacy;return(function(T,S){return arguments.length>0?((!s||!S||C||$)&&x(S?y():T),T):y()})}var M=!1,L=((n&uc)!==0?ts:Ba)(()=>(M=!1,y()));i&&o(L);var z=pe;return(function(T,S){if(arguments.length>0){const N=S?o(L):s&&i?ze(T):T;return d(L,N),M=!0,l!==void 0&&(l=N),T}return An&&M||(z.f&$t)!==0?L.v:o(L)})}function us(e){je===null&&Wi(),as&&je.l!==null?ju(je).m.push(e):at(()=>{const t=Mn(e);if(typeof t=="function")return t})}function Ja(e){je===null&&Wi(),us(()=>()=>Mn(e))}function ju(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const Bu="5";var Mi;typeof window<"u"&&((Mi=window.__svelte??(window.__svelte={})).v??(Mi.v=new Set)).add(Bu);const fr=()=>window.__IDE_BOOTSTRAP__||{};function Vu(e){const{rootPath:t="",session:n=""}=fr();return`${t}/api/sessions/${encodeURIComponent(n)}/ide${e}`}async function Ue(e,t={}){const n=await fetch(Vu(e),t),r=await n.json().catch(()=>({}));if(!n.ok){const s=new Error(r.error||"Request failed");throw Object.assign(s,r),s}return r}const et=(e,t)=>`/ssh-connections/${encodeURIComponent(e)}${t}`,Se={chat:async(e,t=80)=>{const{rootPath:n=""}=fr(),r=`${n}/api/sessions/${encodeURIComponent(e)}/ide/chat?limit=${t}`,s=await fetch(r),i=await s.json().catch(()=>({}));if(!s.ok)throw new Error(i.error||"Could not load chat");return i},browse:async(e="")=>{const{rootPath:t=""}=fr(),n=`${t}/api/ide/browse?path=${encodeURIComponent(e)}`,r=await fetch(n),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not browse folders");return s},sessionAgent:async e=>{const{rootPath:t=""}=fr(),n=await fetch(`${t}/api/sessions/${encodeURIComponent(e)}/agent`),r=await n.json().catch(()=>({}));if(!n.ok)throw new Error(r.error||"Could not read agent settings");return r},setSessionAgent:async(e,t)=>{const{rootPath:n=""}=fr(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/agent`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({agent:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not switch agent");return s},setSessionModel:async(e,t)=>{const{rootPath:n=""}=fr(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/model`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change model");return s},setSessionEffort:async(e,t)=>{const{rootPath:n=""}=fr(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/effort`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({effort:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change effort");return s},browseOn:(e,t="")=>Ue(et(e,`/browse?path=${encodeURIComponent(t)}`)),setWorkspaceRoot:(e,t,n)=>Ue(et(e,"/workspace-root"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({workspace_root:t,label:n})}),agentContext:e=>Ue(et(e,"/agent-context")),hostKey:e=>Ue(et(e,"/host-key")),trustHost:e=>Ue(et(e,"/host-key"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({accept:!0})}),listConnections:()=>Ue("/ssh-connections"),createConnection:e=>Ue("/ssh-connections",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),deleteConnection:e=>Ue(et(e,""),{method:"DELETE"}),connect:(e,t)=>Ue(et(e,"/connect"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t||""})}),status:e=>Ue(et(e,"/status?reconnect=1")),listFiles:(e,t)=>Ue(et(e,`/files?path=${encodeURIComponent(t)}`)),searchFiles:(e,t,n)=>Ue(et(e,`/files/search?path=${encodeURIComponent(t)}&query=${encodeURIComponent(n)}`)),readFile:(e,t)=>Ue(et(e,`/file?path=${encodeURIComponent(t)}`)),saveFile:(e,t,n)=>Ue(et(e,"/file"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:t,content:n})}),fs:(e,t)=>Ue(et(e,"/fs"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),git:(e,t)=>Ue(et(e,"/git"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),focusTerminal:e=>Ue(et(e,"/focus-terminal"),{method:"POST"}),updateConnection:(e,t)=>Ue(et(e,""),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),listTerminals:e=>Ue(et(e,"/terminals")),closeTerminal:(e,t)=>Ue(et(e,`/terminals/${t}`),{method:"DELETE"}),getWorkspace:e=>Ue(et(e,"/workspace")),saveWorkspace:(e,t)=>Ue(et(e,"/workspace"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})};var Ys,Js,Xs,Zs,Qs,eo,to,no,ro,so,oo,ao,io,lo,co,uo,fo,vo,po,ho,go,_o,mo,bo;class Ku{constructor(){U(this,Ys,O(ze([])));U(this,Js,O(""));U(this,Xs,O("idle"));U(this,Zs,O("Ready"));U(this,Qs,O("No file open"));U(this,eo,O("."));U(this,to,O(ze([])));U(this,no,O(ze({})));U(this,ro,O(ze({})));U(this,so,O(""));U(this,oo,O(ze([])));U(this,ao,O(""));U(this,io,O(""));U(this,lo,O(""));U(this,co,O(ze([])));U(this,uo,O(""));U(this,fo,O(!1));U(this,vo,O(!1));U(this,po,O(0));U(this,ho,O(0));U(this,go,O(!1));U(this,_o,O(""));U(this,mo,O(ze([])));U(this,bo,O(!1));vt(this,"restoredKey","");vt(this,"persistTimer",null)}get connections(){return o(u(this,Ys))}set connections(t){d(u(this,Ys),t,!0)}get connectionId(){return o(u(this,Js))}set connectionId(t){d(u(this,Js),t,!0)}get connectionState(){return o(u(this,Xs))}set connectionState(t){d(u(this,Xs),t,!0)}get statusText(){return o(u(this,Zs))}set statusText(t){d(u(this,Zs),t,!0)}get detailText(){return o(u(this,Qs))}set detailText(t){d(u(this,Qs),t,!0)}get path(){return o(u(this,eo))}set path(t){d(u(this,eo),t,!0)}get entries(){return o(u(this,to))}set entries(t){d(u(this,to),t,!0)}get expanded(){return o(u(this,no))}set expanded(t){d(u(this,no),t,!0)}get treeChildren(){return o(u(this,ro))}set treeChildren(t){d(u(this,ro),t,!0)}get filter(){return o(u(this,so))}set filter(t){d(u(this,so),t,!0)}get tabs(){return o(u(this,oo))}set tabs(t){d(u(this,oo),t,!0)}get activeKey(){return o(u(this,ao))}set activeKey(t){d(u(this,ao),t,!0)}get gitOutput(){return o(u(this,io))}set gitOutput(t){d(u(this,io),t,!0)}get gitStatus(){return o(u(this,lo))}set gitStatus(t){d(u(this,lo),t,!0)}get gitBranches(){return o(u(this,co))}set gitBranches(t){d(u(this,co),t,!0)}get gitBranch(){return o(u(this,uo))}set gitBranch(t){d(u(this,uo),t,!0)}get needsHostKey(){return o(u(this,fo))}set needsHostKey(t){d(u(this,fo),t,!0)}get notARepo(){return o(u(this,vo))}set notARepo(t){d(u(this,vo),t,!0)}get gitAhead(){return o(u(this,po))}set gitAhead(t){d(u(this,po),t,!0)}get gitBehind(){return o(u(this,ho))}set gitBehind(t){d(u(this,ho),t,!0)}get gitHasUpstream(){return o(u(this,go))}set gitHasUpstream(t){d(u(this,go),t,!0)}get gitBusy(){return o(u(this,_o))}set gitBusy(t){d(u(this,_o),t,!0)}get gitCommits(){return o(u(this,mo))}set gitCommits(t){d(u(this,mo),t,!0)}get gitHistoryLoaded(){return o(u(this,bo))}set gitHistoryLoaded(t){d(u(this,bo),t,!0)}get connection(){return this.connections.find(t=>t.id===this.connectionId)||null}get activeTab(){return this.tabs.find(t=>t.key===this.activeKey)||null}get visibleEntries(){const t=this.filter.trim().toLowerCase();return t?this.entries.filter(n=>n.name.toLowerCase().includes(t)):this.entries}get dirtyCount(){return this.tabs.filter(t=>t.dirty).length}get gitDirtyCount(){return this.gitStatus.split(`
`).filter(t=>t.trim()&&!t.startsWith("##")).length}resetWorkspaceView(){this.tabs=[],this.activeKey="",this.restoredKey="",this.path=".",this.entries=[],this.expanded={},this.treeChildren={},this.filter="",this.gitOutput="",this.gitStatus="",this.gitBranches=[],this.gitBranch="",this.needsHostKey=!1,this.notARepo=!1,this.gitAhead=0,this.gitBehind=0,this.gitHasUpstream=!1,this.gitCommits=[],this.gitHistoryLoaded=!1}setStatus(t,n){this.statusText=t,n!==void 0&&(this.detailText=n)}async loadConnections(){try{const t=await Se.listConnections();this.connections=t.connections||[],!this.connectionId&&this.connections.length&&(this.connectionId=this.connections[0].id)}catch(t){this.setStatus(t.message||"Could not load connections")}}async refreshStatus(){var t,n,r;if(this.connectionId)try{const s=await Se.status(this.connectionId);s.connected?(this.connectionState="connected",this.setStatus(`Connected · ${((t=this.connection)==null?void 0:t.label)||"SSH workspace"}`,`SSH terminal: ${s.window_name||"open"}`),await this.restoreWorkspace()):(this.connectionState="reconnect",this.entries=[],this.setStatus(`Reconnect required · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,(r=this.connection)!=null&&r.has_password?"Auto-reconnect failed — select Connect to retry":"Select Connect to reopen SSH"))}catch(s){this.connectionState="error",this.setStatus(s.message||"Could not check SSH connection")}}async connect(t){var n;if(this.connectionId){this.connectionState="connecting",this.setStatus("Connecting…");try{const r=await Se.connect(this.connectionId,t);this.connectionState="connected",this.setStatus(`Connected · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,`SSH terminal: ${r.window_name||"open"}`),await this.restoreWorkspace()}catch(r){this.connectionState="error",this.setStatus(r.message||"Could not connect"),this.needsHostKey=!!r.needs_host_key}}}async refreshFiles(t){if(!this.connectionId)return;const n=t||this.path||".";try{const r=await Se.listFiles(this.connectionId,n);this.path=r.path||n,this.entries=r.entries||[],this.remember()}catch(r){this.setStatus(r.message||"Could not list remote files")}}async toggleDirectory(t){if(this.expanded[t]){const n={...this.expanded};delete n[t],this.expanded=n;return}if(this.expanded={...this.expanded,[t]:!0},!this.treeChildren[t])try{const n=await Se.listFiles(this.connectionId,t);this.treeChildren={...this.treeChildren,[t]:n.entries||[]}}catch(n){this.setStatus(n.message||"Could not expand folder")}}openDiffTab(t,n){const r=`${this.connectionId}|diff:${t}`,s=this.tabs.find(a=>a.key===r);if(s)return s.content=n,s.saved=n,this.activeKey=r,s;const i={key:r,path:`${t} (diff)`,content:n,saved:n,dirty:!1,readOnly:!0,language:"plaintext"};return this.tabs=[...this.tabs,i],this.activeKey=r,i}async openFile(t){if(!this.connectionId)return null;const n=`${this.connectionId}|${t}`,r=this.tabs.find(s=>s.key===n);if(r)return this.activeKey=n,r;try{const s=await Se.readFile(this.connectionId,t),i={key:`${this.connectionId}|${s.path}`,path:s.path,content:s.content||"",saved:s.content||"",dirty:!1};return this.tabs=[...this.tabs,i],this.activeKey=i.key,this.setStatus("Opened",i.path),this.remember(),i}catch(s){return this.setStatus(s.message||"Could not open remote file"),null}}updateContent(t,n){this.tabs=this.tabs.map(r=>r.key===t?{...r,content:n,dirty:n!==r.saved}:r),this.remember()}closeTab(t){var r;const n=this.tabs.find(s=>s.key===t);n!=null&&n.dirty&&!confirm(`Discard unsaved changes to ${n.path}?`)||(this.tabs=this.tabs.filter(s=>s.key!==t),this.activeKey===t&&(this.activeKey=((r=this.tabs.at(-1))==null?void 0:r.key)||""),this.remember())}async saveActive(){const t=this.activeTab;if(t)try{await Se.saveFile(this.connectionId,t.path,t.content),this.tabs=this.tabs.map(n=>n.key===t.key?{...n,saved:n.content,dirty:!1}:n),this.setStatus(`Saved ${t.path}`,t.path),this.remember()}catch(n){this.setStatus(n.message||"Could not save file")}}async restoreWorkspace(){const t=`${this.connectionId}`;if(!t)return;let n=null;try{n=await Se.getWorkspace(this.connectionId)}catch{n=null}if(await this.refreshFiles((n==null?void 0:n.last_directory)||"."),this.restoredKey===t)return;this.restoredKey=t;const r=(n==null?void 0:n.buffers)||{};for(const i of((n==null?void 0:n.tabs)||[]).slice(0,12)){const a=await this.openFile(i);a&&Object.prototype.hasOwnProperty.call(r,i)&&this.updateContent(a.key,r[i])}const s=this.tabs.find(i=>i.path===(n==null?void 0:n.active_path));s&&(this.activeKey=s.key)}remember(){this.persistTimer&&clearTimeout(this.persistTimer),this.persistTimer=setTimeout(()=>this.persist(),1500)}async persist(){var n;if(!this.connectionId)return;const t={};for(const r of this.tabs)r.dirty&&(t[r.path]=r.content);try{await Se.saveWorkspace(this.connectionId,{tabs:this.tabs.map(r=>r.path).slice(0,50),active_path:((n=this.activeTab)==null?void 0:n.path)||"",last_directory:this.path||".",buffers:t})}catch{}}async runGit(t,n={}){try{const r=await Se.git(this.connectionId,{action:t,path:this.path||".",...n});return r.not_a_repo?(this.gitOutput=r.error||"This folder is not a Git repository.",this.gitStatus="",this.gitBranches=[],this.gitBranch="",this.gitCommits=[],this.gitHistoryLoaded=!1,this.notARepo=!0,null):(this.notARepo=!1,this.gitAhead=r.ahead||0,this.gitBehind=r.behind||0,this.gitHasUpstream=!!r.has_upstream,t==="log"?(this.gitCommits=r.commits||[],this.gitHistoryLoaded=!0):t!=="show"&&(this.gitOutput=r.output||r.status||""),this.gitStatus=r.status||"",this.gitBranches=r.branches||[],this.gitBranch=r.current_branch||"",["commit","switch","create_branch","pull","push","fetch"].includes(t)&&(this.gitHistoryLoaded=!1),r)}catch(r){return this.gitOutput=r.message||"Git command failed",null}}}Ys=new WeakMap,Js=new WeakMap,Xs=new WeakMap,Zs=new WeakMap,Qs=new WeakMap,eo=new WeakMap,to=new WeakMap,no=new WeakMap,ro=new WeakMap,so=new WeakMap,oo=new WeakMap,ao=new WeakMap,io=new WeakMap,lo=new WeakMap,co=new WeakMap,uo=new WeakMap,fo=new WeakMap,vo=new WeakMap,po=new WeakMap,ho=new WeakMap,go=new WeakMap,_o=new WeakMap,mo=new WeakMap,bo=new WeakMap;const h=new Ku;Mc();/**
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
 */const bi=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();var qu=Al("<svg><!><!></svg>");function ce(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]),r=re(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);mt(t,!1);let s=qe(t,"name",8,void 0),i=qe(t,"color",8,"currentColor"),a=qe(t,"size",8,24),l=qe(t,"strokeWidth",8,2),c=qe(t,"absoluteStrokeWidth",8,!1),f=qe(t,"iconNode",24,()=>[]);Vl();var p=qu();gi(p,(k,$,y)=>({...Uu,...k,...r,width:a(),height:a(),stroke:i(),"stroke-width":$,class:y}),[()=>Wu(r)?void 0:{"aria-hidden":"true"},()=>(dr(c()),dr(l()),dr(a()),Mn(()=>c()?Number(l())*24/Number(a()):l())),()=>(dr(bi),dr(s()),dr(n),Mn(()=>bi("lucide-icon","lucide",s()?`lucide-${s()}`:"",n.class)))]);var x=b(p);Xe(x,1,f,Ml,(k,$)=>{var y=ct(()=>rc(o($),2));let C=()=>o(y)[0],M=()=>o(y)[1];var L=Q(),z=j(L);Nu(z,C,!0,(K,T)=>{gi(K,()=>({...M()}))}),m(k,L)});var g=v(x);se(g,t,"default",{}),m(e,p),bt()}function Gu(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"m21 8-4-4-4 4"}],["path",{d:"M17 4v16"}]];ce(e,le({name:"arrow-down-up"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Yu(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];ce(e,le({name:"arrow-up"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Mo(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M20 6 9 17l-5-5"}]];ce(e,le({name:"check"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function pn(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];ce(e,le({name:"chevron-down"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Io(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m9 18 6-6-6-6"}]];ce(e,le({name:"chevron-right"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function xi(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];ce(e,le({name:"circle-alert"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Ju(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ce(e,le({name:"circle-check"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Xu(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]];ce(e,le({name:"circle-dot"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Zu(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]];ce(e,le({name:"circle-user"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Qu(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];ce(e,le({name:"circle"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ed(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}],["path",{d:"m9 10-5 5 5 5"}]];ce(e,le({name:"corner-down-left"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function td(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]];ce(e,le({name:"corner-left-up"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function nd(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]];ce(e,le({name:"ellipsis"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function rd(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];ce(e,le({name:"external-link"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function yi(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m5 16-3 3 3 3"}],["path",{d:"m9 22 3-3-3-3"}]];ce(e,le({name:"file-code-corner"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function sd(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]];ce(e,le({name:"file-diff"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function od(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]];ce(e,le({name:"file-plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Xa(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}]];ce(e,le({name:"file"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ad(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"}]];ce(e,le({name:"files"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ha(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];ce(e,le({name:"folder-open"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function id(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];ce(e,le({name:"folder-plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ld(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];ce(e,le({name:"folder"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Ma(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M15 6a9 9 0 0 0-9 9V3"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}]];ce(e,le({name:"git-branch"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function cd(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M10 16h.01"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["path",{d:"M21.946 12.013H2.054"}],["path",{d:"M6 16h.01"}]];ce(e,le({name:"hard-drive"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ud(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];ce(e,le({name:"history"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function dd(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];ce(e,le({name:"link-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Qt(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]];ce(e,le({name:"loader"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function wi(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}]];ce(e,le({name:"message-square"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function fd(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m14 10 7-7"}],["path",{d:"M20 10h-6V4"}],["path",{d:"m3 21 7-7"}],["path",{d:"M4 14h6v6"}]];ce(e,le({name:"minimize-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function vd(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M5 12h14"}]];ce(e,le({name:"minus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function pd(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{d:"M10 19v-3.96 3.15"}],["path",{d:"M7 19h5"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2"}]];ce(e,le({name:"monitor-smartphone"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function hd(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}]];ce(e,le({name:"panel-bottom"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function gd(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]];ce(e,le({name:"panel-left"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Fs(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];ce(e,le({name:"plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Ia(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ce(e,le({name:"refresh-cw"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Za(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ce(e,le({name:"search"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ki(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];ce(e,le({name:"server"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function $i(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M14 17H5"}],["path",{d:"M19 7h-9"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]];ce(e,le({name:"settings-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function _d(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]];ce(e,le({name:"shield-alert"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ga(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];ce(e,le({name:"sparkles"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Si(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]];ce(e,le({name:"square-terminal"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function md(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];ce(e,le({name:"square"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Ci(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];ce(e,le({name:"trash-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function bd(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]];ce(e,le({name:"undo-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Vo(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ce(e,le({name:"x"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=j(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}var xd=A('<span class="w-[14px] shrink-0"></span>'),yd=Al('<svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1.5 3.5h4l1.2 1.4h7.8v7.6H1.5z" fill="#c09553"></path></svg>'),wd=A('<div role="treeitem" tabindex="0"><!> <span class="flex shrink-0 items-center"><!></span> <span class="flex-1 truncate text-vs-fg"> </span> <span class="hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Rename"><span class="text-[11px] leading-none">✎</span></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Delete"><span class="text-[11px] leading-none">🗑</span></button></span></div> <!>',1);function Kl(e,t){mt(t,!0);const n=ct(()=>t.dir==="."?t.entry.name:`${t.dir}/${t.entry.name}`),r=ct(()=>!!h.expanded[o(n)]),s=ct(()=>h.treeChildren[o(n)]||[]),i=ct(()=>{var D;return((D=h.activeTab)==null?void 0:D.path)===o(n)});async function a(){t.entry.is_dir?await h.toggleDirectory(o(n)):await h.openFile(o(n))}async function l(D){if(D.stopPropagation(),!!confirm(`Delete ${o(n)}? Folders must already be empty.`))try{await Se.fs(h.connectionId,{action:"delete",path:o(n)}),await h.refreshFiles()}catch(B){h.setStatus(B.message||"Could not delete")}}async function c(D){D.stopPropagation();const B=prompt("Rename to (relative path):",o(n));if(!(!B||B===o(n)))try{await Se.fs(h.connectionId,{action:"rename",path:o(n),new_path:B}),await h.refreshFiles()}catch(he){h.setStatus(he.message||"Could not rename")}}var f=wd(),p=j(f);let x;var g=b(p);{var k=D=>{var B=Q(),he=j(B);{var xe=Le=>{pn(Le,{size:14,class:"shrink-0 text-vs-muted"})},Ge=Le=>{Io(Le,{size:14,class:"shrink-0 text-vs-muted"})};H(he,Le=>{o(r)?Le(xe):Le(Ge,-1)})}m(D,B)},$=D=>{var B=xd();m(D,B)};H(g,D=>{t.entry.is_dir?D(k):D($,-1)})}var y=v(g,2),C=b(y);{var M=D=>{var B=yd();m(D,B)},L=D=>{dd(D,{size:14,class:"text-vs-muted"})},z=D=>{Xa(D,{size:14,class:"text-vs-blue"})};H(C,D=>{t.entry.is_dir?D(M):t.entry.is_symlink?D(L,1):D(z,-1)})}var K=v(y,2),T=X(K,!0),S=v(K,2),N=b(S),q=v(N,2),G=v(p,2);{var Y=D=>{var B=Q(),he=j(B);Xe(he,17,()=>o(s),xe=>xe.name,(xe,Ge)=>{{let Le=ct(()=>t.depth+1);Kl(xe,{get entry(){return o(Ge)},get dir(){return o(n)},get depth(){return o(Le)}})}}),m(D,B)};H(G,D=>{t.entry.is_dir&&o(r)&&D(Y)})}W(()=>{x=gt(p,1,"group flex cursor-pointer items-center gap-1 py-[2px] pr-1 text-[13px] hover:bg-vs-hover",null,x,{"bg-vs-active":o(i)}),Kr(p,`padding-left: ${8+t.depth*12}px`),_e(p,"aria-expanded",t.entry.is_dir?o(r):void 0),_e(p,"aria-selected",o(i)),_e(p,"title",o(n)),V(T,t.entry.name),_e(N,"aria-label",`Rename ${t.entry.name??""}`),_e(q,"aria-label",`Delete ${t.entry.name??""}`)}),R("click",p,a),R("keydown",p,D=>{(D.key==="Enter"||D.key===" ")&&(D.preventDefault(),a())}),R("click",N,c),R("click",q,l),m(e,f),bt()}Vt(["click","keydown"]);var kd=A('<form class="px-2 pb-1"><input class="w-full rounded-sm border border-vs-accent bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none"/></form>'),$d=A('<p class="px-4 py-2 text-xs text-vs-muted">No folder opened.</p>'),Sd=A('<p class="px-4 py-2 text-xs text-vs-muted">No files here</p>'),Cd=A('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-vs-fg uppercase"><span class="flex-1 truncate">Explorer</span></div> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold text-vs-fg uppercase"><!> <span class="flex-1 truncate"> </span> <span class="flex opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-1 hover:bg-vs-hover" title="New file" aria-label="New file"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="New folder" aria-label="New folder"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="Refresh" aria-label="Refresh"><!></button></span></div> <!> <input class="mx-2 mb-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none focus:border-vs-accent" placeholder="Filter files…"/> <div class="min-h-0 flex-1 overflow-y-auto pb-2"><!></div></div>');function Ed(e,t){mt(t,!0);let n=O(""),r=O("");const s=(Y,D)=>Y==="."?D:`${Y}/${D}`;async function i(Y){Y.preventDefault();const D=o(r).trim();if(D)try{await Se.fs(h.connectionId,{action:o(n)==="dir"?"create_dir":"create_file",path:s(h.path,D)}),d(n,""),d(r,""),await h.refreshFiles()}catch(B){h.setStatus(B.message||"Could not create")}}const a=ct(()=>{var Y,D;return(((Y=h.connection)==null?void 0:Y.workspace_root)||"").split("/").filter(Boolean).pop()||((D=h.connection)==null?void 0:D.label)||"WORKSPACE"});var l=Cd(),c=v(b(l),2),f=b(c);pn(f,{size:14,class:"shrink-0 text-vs-muted"});var p=v(f,2),x=X(p,!0),g=v(p,2),k=b(g),$=b(k);od($,{size:14});var y=v(k,2),C=b(y);id(C,{size:14});var M=v(y,2),L=b(M);Ia(L,{size:13});var z=v(c,2);{var K=Y=>{var D=kd(),B=b(D);Ji(B,!0),W(()=>_e(B,"placeholder",o(n)==="dir"?"New folder name":"New file name")),Gn("submit",D,i),R("keydown",B,he=>{he.key==="Escape"&&d(n,"")}),Gn("blur",B,()=>{o(r).trim()||d(n,"")}),Be(B,()=>o(r),he=>d(r,he)),m(Y,D)};H(z,Y=>{o(n)&&Y(K)})}var T=v(z,2),S=v(T,2),N=b(S);{var q=Y=>{var D=$d();m(Y,D)},G=Y=>{var D=Q(),B=j(D);Xe(B,17,()=>h.visibleEntries,he=>he.name,(he,xe)=>{Kl(he,{get entry(){return o(xe)},get dir(){return h.path},depth:0})},he=>{var xe=Sd();m(he,xe)}),m(Y,D)};H(N,Y=>{h.connectionId?Y(G,-1):Y(q)})}W(()=>{var Y;_e(p,"title",(Y=h.connection)==null?void 0:Y.workspace_root),V(x,o(a))}),R("click",k,()=>{d(n,"file"),d(r,"")}),R("click",y,()=>{d(n,"dir"),d(r,"")}),R("click",M,()=>h.refreshFiles()),Be(T,()=>h.filter,Y=>h.filter=Y),m(e,l),bt()}Vt(["click","keydown"]);var Td=A('<div class="absolute top-full right-0 z-20 mt-1 min-w-[170px] rounded-md border border-vs-line bg-vs-panel py-1 shadow-2xl"><button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Fetch</button> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Pull</button> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Push</button> <div class="my-1 h-px bg-vs-line"></div> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Create Branch…</button></div>'),Nd=A('<p class="mx-3 flex items-center gap-1.5 text-xs text-vs-muted"><!> Reading repository…</p>'),zd=A(`<p class="mx-3 text-xs leading-relaxed text-vs-muted">This folder isn't a Git repository.<br/> Open a folder containing a <code class="rounded-sm bg-vs-input px-1">.git</code> directory,
      or run <code class="rounded-sm bg-vs-input px-1">git init</code> in the terminal.</p>`),Pd=A('<div class="group flex cursor-pointer items-center gap-1.5 py-[2px] pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><span class="truncate text-vs-fg"> </span> <span class="truncate text-[11px] text-vs-muted"> </span> <span class="ml-auto hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Unstage"><!></button></span> <span> </span></div>'),Ad=A('<div class="flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <span class="truncate">Staged Changes</span></button> <span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span></div> <!>',1),Md=A('<div class="group flex cursor-pointer items-center gap-1.5 py-[2px] pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><span class="truncate text-vs-fg"> </span> <span class="truncate text-[11px] text-vs-muted"> </span> <span class="ml-auto hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Open changes"><!></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Discard changes"><!></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Stage changes"><!></button></span> <span> </span></div>'),Id=A('<p class="px-6 py-2 text-xs text-vs-muted">No changes.</p>'),Od=A('<div class="min-h-0 flex-1 overflow-y-auto"></div>'),Rd=A('<span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span>'),Ld=A('<span class="flex shrink-0 opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-0.5 hover:bg-vs-line" title="Refresh history" aria-label="Refresh history"><!></button></span> <!>',1),Dd=A('<span class="shrink-0 rounded-sm bg-vs-line px-1 text-[10px] text-vs-blue"> </span>'),Fd=A('<div class="group flex cursor-pointer flex-col gap-0.5 py-1 pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><div class="flex min-w-0 items-center gap-1.5"><span class="truncate text-vs-fg"> </span> <!></div> <div class="flex min-w-0 items-center gap-1.5 text-[11px] text-vs-muted"><span class="shrink-0 font-mono text-vs-yellow"> </span> <span class="truncate"> </span> <span class="ml-auto shrink-0"> </span></div></div>'),Hd=A('<p class="px-6 py-2 text-xs text-vs-muted"> </p>'),jd=A('<div class="max-h-[45%] min-h-0 flex-1 overflow-y-auto"></div>'),Bd=A('<button class="flex items-center gap-1 rounded-sm px-1 text-vs-muted hover:bg-vs-hover hover:text-vs-fg" title="Pull then push"><!> </button>'),Vd=A('<div class="flex gap-1 border-t border-vs-line px-3 py-2"><input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="New branch name"/> <button class="rounded-sm bg-vs-status px-2 py-1 text-xs text-white">Create</button></div>'),Kd=A('<pre class="max-h-[120px] shrink-0 overflow-auto border-t border-vs-line px-3 py-1.5 text-[11px] whitespace-pre-wrap text-vs-muted"> </pre>'),Ud=A('<div class="px-3 pb-2"><textarea class="w-full resize-none rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs text-vs-fg outline-none focus:border-vs-accent placeholder:text-vs-muted" rows="2"></textarea> <button class="mt-1 flex w-full items-center justify-center gap-1.5 rounded-sm bg-vs-status px-2 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"><!> Commit</button></div> <!> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <span class="truncate">Changes</span></button> <span class="flex shrink-0 opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-0.5 hover:bg-vs-line" title="Refresh" aria-label="Refresh"><!></button> <button class="rounded-sm p-0.5 hover:bg-vs-line" title="Stage all changes" aria-label="Stage all"><!></button></span> <span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span></div> <!> <div class="group flex shrink-0 items-center gap-1 border-t border-vs-line px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <!> <span class="truncate">History</span></button> <!></div> <!> <div class="mt-auto flex items-center gap-2 border-t border-vs-line px-3 py-1.5 text-[11px]"><span class="flex min-w-0 items-center gap-1 text-vs-muted" title="Current branch"><!> <span class="truncate"> </span></span> <!></div> <!> <!>',1),Wd=A('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase"><span class="flex-1">Source Control</span> <div class="relative" data-scm-menu=""><button class="rounded-sm p-0.5 hover:bg-vs-hover" title="More actions" aria-label="More actions"><!></button> <!></div></div> <!></div>');function qd(e,t){mt(t,!0);let n=O(""),r=O(""),s=O(!1),i=O(!0),a=O(!0),l=O(!1),c=O(!1);const f=ct(()=>(h.gitStatus||"").split(`
`).filter(E=>E&&!E.startsWith("##")).map(E=>{const oe=E.slice(3),Ae=oe.indexOf(" -> "),Ve=Ae===-1?oe:oe.slice(Ae+4);return{index:E[0]===" "?"":E[0],work:E[1]===" "?"":E[1],code:E.slice(0,2).trim()||"??",path:Ve.replace(/\r$/,""),from:Ae===-1?"":oe.slice(0,Ae)}}).filter(E=>E.path)),p=ct(()=>o(f).filter(E=>E.index&&E.index!=="?")),x=ct(()=>o(f).filter(E=>E.work&&E.work!==" ")),g=E=>E.includes("?")||E.includes("A")?"text-vs-green":E.includes("D")?"text-vs-red":E.includes("R")?"text-vs-blue":"text-vs-yellow",k=E=>E.split("/").pop(),$=E=>{const oe=E.split("/");return oe.pop(),oe.join("/")};async function y(E,oe={}){h.gitBusy=E;try{return await h.runGit(E,oe)}finally{h.gitBusy=""}}async function C(){if(!o(n).trim()||!o(p).length)return;await y("commit",{message:o(n).trim()})&&d(n,"")}async function M(){if(!o(r).trim())return;await y("create_branch",{branch:o(r).trim()})&&(d(r,""),d(s,!1))}async function L(E){confirm(`Discard changes in ${E.path}? This cannot be undone.`)&&await y("discard",{files:[E.path]})}async function z(E){const oe=await h.runGit("diff_file",{files:[E.path]});oe&&h.openDiffTab(E.path,oe.output||"No changes to show.")}let K=O("");at(()=>{const E=h.connectionId,oe=h.connectionState,Ae=E?`${E}|${oe}`:"";!E||oe!=="connected"||o(K)!==Ae&&(d(K,Ae,!0),y("status"))});async function T(){d(l,!o(l)),o(l)&&!h.gitHistoryLoaded&&await y("log")}at(()=>{o(l)&&!h.gitHistoryLoaded&&!h.notARepo&&!h.gitBusy&&y("log")});async function S(E){const oe=await h.runGit("show",{ref:E.hash});oe&&h.openDiffTab(`${E.short} ${E.subject}`,oe.output||"Empty commit.")}const N=E=>(E||"").split(",").map(oe=>oe.trim().replace(/^HEAD -> /,"")).filter(Boolean);function q(E){E.key==="Enter"&&(E.ctrlKey||E.metaKey)&&(E.preventDefault(),C())}var G=Wd();Gn("click",Hs,E=>{var oe,Ae;(Ae=(oe=E.target).closest)!=null&&Ae.call(oe,"[data-scm-menu]")||d(c,!1)});var Y=b(G),D=v(b(Y),2),B=b(D),he=b(B);nd(he,{size:14});var xe=v(B,2);{var Ge=E=>{var oe=Td(),Ae=b(oe),Ve=v(Ae,2),ut=v(Ve,2),nn=v(ut,4);R("click",Ae,()=>{d(c,!1),y("fetch")}),R("click",Ve,()=>{d(c,!1),y("pull")}),R("click",ut,()=>{d(c,!1),y("push")}),R("click",nn,()=>{d(c,!1),d(s,!o(s))}),m(E,oe)};H(xe,E=>{o(c)&&E(Ge)})}var Le=v(Y,2);{var Ze=E=>{var oe=Nd(),Ae=b(oe);Qt(Ae,{size:12,class:"animate-spin"}),m(E,oe)},ne=E=>{var oe=zd();m(E,oe)},ue=E=>{var oe=Ud(),Ae=j(oe),Ve=b(Ae),ut=v(Ve,2),nn=b(ut);{var Ke=Z=>{Qt(Z,{size:12,class:"animate-spin"})},bn=Z=>{Mo(Z,{size:12})};H(nn,Z=>{h.gitBusy==="commit"?Z(Ke):Z(bn,-1)})}var In=v(Ae,2);{var Jn=Z=>{var Re=Ad(),Ee=j(Re),ae=b(Ee),Ce=b(ae);{var dt=te=>{pn(te,{size:14,class:"text-vs-muted"})},Qe=te=>{Io(te,{size:14,class:"text-vs-muted"})};H(Ce,te=>{o(a)?te(dt):te(Qe,-1)})}var zt=v(ae,2),w=X(zt,!0),I=v(Ee,2);{var J=te=>{var fe=Q(),Ne=j(fe);Xe(Ne,17,()=>o(p),ye=>ye.path,(ye,we)=>{var ge=Pd(),ke=b(ge),_=X(ke,!0),P=v(ke,2),F=X(P,!0),ie=v(P,2),ve=b(ie),$e=b(ve);vd($e,{size:13});var Te=v(ie,2),Me=X(Te,!0);W((De,Ie,sn)=>{_e(ge,"title",o(we).path),V(_,De),V(F,Ie),_e(ve,"aria-label",`Unstage ${o(we).path??""}`),gt(Te,1,`shrink-0 font-mono text-[11px] ${sn??""}`),V(Me,o(we).index||o(we).code)},[()=>k(o(we).path),()=>$(o(we).path),()=>g(o(we).code)]),R("click",ge,()=>z(o(we))),R("keydown",ge,De=>{De.key==="Enter"&&z(o(we))}),R("click",ve,De=>{De.stopPropagation(),y("unstage",{files:[o(we).path]})}),m(ye,ge)}),m(te,fe)};H(I,te=>{o(a)&&te(J)})}W(()=>V(w,o(p).length)),R("click",ae,()=>d(a,!o(a))),m(Z,Re)};H(In,Z=>{o(p).length&&Z(Jn)})}var Sr=v(In,2),xn=b(Sr),Cr=b(xn);{var Xn=Z=>{pn(Z,{size:14,class:"text-vs-muted"})},yn=Z=>{Io(Z,{size:14,class:"text-vs-muted"})};H(Cr,Z=>{o(i)?Z(Xn):Z(yn,-1)})}var On=v(xn,2),wn=b(On),Kt=b(wn);Ia(Kt,{size:12});var Rn=v(wn,2),ds=b(Rn);Fs(ds,{size:13});var Zn=v(On,2),fs=X(Zn,!0),Ln=v(Sr,2);{var Er=Z=>{var Re=Od();Xe(Re,21,()=>o(x),Ee=>Ee.path,(Ee,ae)=>{var Ce=Md(),dt=b(Ce),Qe=X(dt,!0),zt=v(dt,2),w=X(zt,!0),I=v(zt,2),J=b(I),te=b(J);sd(te,{size:13});var fe=v(J,2),Ne=b(fe);bd(Ne,{size:13});var ye=v(fe,2),we=b(ye);Fs(we,{size:13});var ge=v(I,2),ke=X(ge,!0);W((_,P,F)=>{_e(Ce,"title",o(ae).path),V(Qe,_),V(w,P),_e(J,"aria-label",`Open changes to ${o(ae).path??""}`),_e(fe,"aria-label",`Discard changes to ${o(ae).path??""}`),_e(ye,"aria-label",`Stage ${o(ae).path??""}`),gt(ge,1,`shrink-0 font-mono text-[11px] ${F??""}`),V(ke,o(ae).work||o(ae).code)},[()=>k(o(ae).path),()=>$(o(ae).path),()=>g(o(ae).code)]),R("click",Ce,()=>z(o(ae))),R("keydown",Ce,_=>{_.key==="Enter"&&z(o(ae))}),R("click",J,_=>{_.stopPropagation(),z(o(ae))}),R("click",fe,_=>{_.stopPropagation(),L(o(ae))}),R("click",ye,_=>{_.stopPropagation(),y("stage",{files:[o(ae).path]})}),m(Ee,Ce)},Ee=>{var ae=Id();m(Ee,ae)}),m(Z,Re)};H(Ln,Z=>{o(i)&&Z(Er)})}var Qn=v(Ln,2),kn=b(Qn),er=b(kn);{var Tr=Z=>{pn(Z,{size:14,class:"text-vs-muted"})},tr=Z=>{Io(Z,{size:14,class:"text-vs-muted"})};H(er,Z=>{o(l)?Z(Tr):Z(tr,-1)})}var nr=v(er,2);ud(nr,{size:12,class:"shrink-0 text-vs-muted"});var vs=v(kn,2);{var Nr=Z=>{var Re=Ld(),Ee=j(Re),ae=b(Ee),Ce=b(ae);{var dt=I=>{Qt(I,{size:12,class:"animate-spin"})},Qe=I=>{Ia(I,{size:12})};H(Ce,I=>{h.gitBusy==="log"?I(dt):I(Qe,-1)})}var zt=v(Ee,2);{var w=I=>{var J=Rd(),te=X(J,!0);W(()=>V(te,h.gitCommits.length)),m(I,J)};H(zt,I=>{h.gitCommits.length&&I(w)})}R("click",ae,()=>y("log")),m(Z,Re)};H(vs,Z=>{o(l)&&Z(Nr)})}var zr=v(Qn,2);{var Pr=Z=>{var Re=jd();Xe(Re,21,()=>h.gitCommits,Ee=>Ee.hash,(Ee,ae)=>{var Ce=Fd(),dt=b(Ce),Qe=b(dt),zt=X(Qe,!0),w=v(Qe,2);Xe(w,17,()=>N(o(ae).refs),Ml,(ge,ke)=>{var _=Dd(),P=X(_,!0);W(()=>V(P,o(ke))),m(ge,_)});var I=v(dt,2),J=b(I),te=X(J,!0),fe=v(J,2),Ne=X(fe,!0),ye=v(fe,2),we=X(ye,!0);W(()=>{_e(Ce,"title",`${o(ae).short} · ${o(ae).author} · ${o(ae).date}`),V(zt,o(ae).subject),V(te,o(ae).short),V(Ne,o(ae).author),V(we,o(ae).relative)}),R("click",Ce,()=>S(o(ae))),R("keydown",Ce,ge=>{ge.key==="Enter"&&S(o(ae))}),m(Ee,Ce)},Ee=>{var ae=Hd(),Ce=X(ae,!0);W(()=>V(Ce,h.gitBusy==="log"?"Loading history…":"No commits yet.")),m(Ee,ae)}),m(Z,Re)};H(zr,Z=>{o(l)&&Z(Pr)})}var rn=v(zr,2),rr=b(rn),sr=b(rr);Ma(sr,{size:12,class:"shrink-0"});var or=v(sr,2),Ar=X(or,!0),ps=v(rr,2);{var hs=Z=>{var Re=Bd(),Ee=b(Re);{var ae=Qe=>{Qt(Qe,{size:11,class:"animate-spin"})},Ce=Qe=>{Gu(Qe,{size:11})};H(Ee,Qe=>{h.gitBusy==="pull"||h.gitBusy==="push"?Qe(ae):Qe(Ce,-1)})}var dt=v(Ee);W(()=>V(dt,` ${h.gitBehind??""}↓ ${h.gitAhead??""}↑`)),R("click",Re,()=>y("pull").then(()=>y("push"))),m(Z,Re)};H(ps,Z=>{h.gitHasUpstream&&Z(hs)})}var ar=v(rn,2);{var ir=Z=>{var Re=Vd(),Ee=b(Re),ae=v(Ee,2);R("keydown",Ee,Ce=>{Ce.key==="Enter"&&M(),Ce.key==="Escape"&&d(s,!1)}),Be(Ee,()=>o(r),Ce=>d(r,Ce)),R("click",ae,M),m(Z,Re)};H(ar,Z=>{o(s)&&Z(ir)})}var gs=v(ar,2);{var lr=Z=>{var Re=Kd(),Ee=X(Re,!0);W(()=>V(Ee,h.gitOutput)),m(Z,Re)};H(gs,Z=>{h.gitOutput&&Z(lr)})}W(Z=>{_e(Ve,"placeholder",`Message (Ctrl+Enter to commit on "${h.gitBranch||"branch"}")`),ut.disabled=Z,_e(ut,"title",o(p).length?"Commit staged changes":"Stage a change first"),V(fs,o(x).length),V(Ar,h.gitBranch||"—")},[()=>!o(n).trim()||!o(p).length||h.gitBusy==="commit"]),R("keydown",Ve,q),Be(Ve,()=>o(n),Z=>d(n,Z)),R("click",ut,C),R("click",xn,()=>d(i,!o(i))),R("click",wn,()=>y("status")),R("click",Rn,()=>y("stage",{files:["."]})),R("click",kn,T),m(E,oe)};H(Le,E=>{!o(K)||h.gitBusy==="status"&&!h.gitStatus&&!h.notARepo?E(Ze):h.notARepo?E(ne,1):E(ue,-1)})}R("click",B,()=>d(c,!o(c))),m(e,G),bt()}Vt(["click","keydown"]);const Gd="modulepreload",Yd=function(e,t){return new URL(e,t).href},Ei={},Oo=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let a=function(p){return Promise.all(p.map(x=>Promise.resolve(x).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const l=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),f=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=a(n.map(p=>{if(p=Yd(p,r),p in Ei)return;Ei[p]=!0;const x=p.endsWith(".css"),g=x?'[rel="stylesheet"]':"";if(!!r)for(let y=l.length-1;y>=0;y--){const C=l[y];if(C.href===p&&(!x||C.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${g}`))return;const $=document.createElement("link");if($.rel=x?"stylesheet":Gd,x||($.as="script"),$.crossOrigin="",$.href=p,f&&$.setAttribute("nonce",f),document.head.appendChild($),x)return new Promise((y,C)=>{$.addEventListener("load",y),$.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${p}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})},Os={base:"vs-dark",inherit:!0,rules:[{token:"",foreground:"f8f8f2",background:"272822"},{token:"comment",foreground:"75715e",fontStyle:"italic"},{token:"string",foreground:"e6db74"},{token:"constant",foreground:"ae81ff"},{token:"number",foreground:"ae81ff"},{token:"keyword",foreground:"f92672"},{token:"operator",foreground:"f92672"},{token:"delimiter",foreground:"f8f8f2"},{token:"type",foreground:"66d9ef",fontStyle:"italic"},{token:"function",foreground:"a6e22e"},{token:"variable",foreground:"f8f8f2"},{token:"variable.parameter",foreground:"fd971f",fontStyle:"italic"},{token:"tag",foreground:"f92672"},{token:"attribute.name",foreground:"a6e22e"},{token:"attribute.value",foreground:"e6db74"},{token:"regexp",foreground:"e6db74"}],colors:{"editor.background":"#272822","editor.foreground":"#f8f8f2","editor.lineHighlightBackground":"#3e3d32","editor.selectionBackground":"#49483e","editorCursor.foreground":"#f8f8f0","editorWhitespace.foreground":"#3b3a32","editorLineNumber.foreground":"#90908a","editorLineNumber.activeForeground":"#f8f8f2","editorIndentGuide.background":"#3b3a32","editorGutter.background":"#272822"}},Jd={py:"python",js:"javascript",mjs:"javascript",cjs:"javascript",ts:"typescript",tsx:"typescript",jsx:"javascript",json:"json",md:"markdown",html:"html",htm:"html",css:"css",scss:"scss",less:"less",sh:"shell",bash:"shell",zsh:"shell",yml:"yaml",yaml:"yaml",toml:"ini",ini:"ini",cfg:"ini",sql:"sql",go:"go",rs:"rust",rb:"ruby",php:"php",java:"java",c:"c",h:"c",cpp:"cpp",hpp:"cpp",cs:"csharp",svelte:"html",vue:"html",xml:"xml",dockerfile:"dockerfile"};function Xd(e){var n;const t=(e||"").split("/").pop()||"";return t.toLowerCase()==="dockerfile"?"dockerfile":t.toLowerCase()==="makefile"?"shell":Jd[(n=t.split(".").pop())==null?void 0:n.toLowerCase()]||"plaintext"}var Zd=A('<div class="editor svelte-1h8xysy"></div>');function Qd(e,t){mt(t,!0);let n,r=null,s=null,i="",a=!1;us(async()=>{s=await Oo(()=>import("./ide-monaco.js").then(c=>c.a),__vite__mapDeps([0,1]),import.meta.url),s.editor.defineTheme("monokai",Os),r=s.editor.create(n,{value:"",theme:"monokai",automaticLayout:!0,fontSize:13,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",minimap:{enabled:!0},scrollBeyondLastLine:!1,renderWhitespace:"selection",tabSize:2}),r.onDidChangeModelContent(()=>{a||!i||h.updateContent(i,r.getValue())}),r.addCommand(s.KeyMod.CtrlCmd|s.KeyCode.KeyS,()=>h.saveActive())}),Ja(()=>r==null?void 0:r.dispose()),at(()=>{const c=h.activeTab;if(!(!r||!s)){if(!c){a=!0,r.setValue(""),i="",a=!1;return}if(c.key!==i){a=!0;const f=s.editor.createModel(c.content,c.language||Xd(c.path)),p=r.getModel();r.setModel(f),p==null||p.dispose(),r.updateOptions({readOnly:!!c.readOnly}),i=c.key,a=!1}else r.getValue()!==c.content&&(a=!0,r.setValue(c.content),a=!1)}});var l=Zd();Vs(l,c=>n=c,()=>n),m(e,l),bt()}var Bn=Du(()=>h),ef=A('<span class="h-2 w-2 rounded-full bg-vs-fg group-hover:hidden"></span> <!>',1),tf=A('<div><button class="flex items-center gap-1.5 py-2 pr-1 pl-3" role="tab"><!> <span class="whitespace-nowrap"> </span></button> <button class="mr-1.5 flex h-5 w-5 items-center justify-center rounded-sm hover:bg-vs-line"><!></button></div>'),nf=A('<div class="px-3 py-2 text-xs text-vs-muted">Open a file from the Explorer</div>'),rf=A('<div class="flex min-h-[35px] items-stretch overflow-x-auto bg-vs-tabinactive" role="tablist"></div>');function sf(e,t){mt(t,!1);const n=s=>s.split("/").pop();Vl();var r=rf();Xe(r,5,()=>Bn().tabs,s=>s.key,(s,i)=>{var a=tf();let l;var c=b(a),f=b(c);Xa(f,{size:14,class:"shrink-0 text-vs-blue"});var p=v(f,2),x=X(p,!0),g=v(c,2),k=b(g);{var $=C=>{var M=ef(),L=v(j(M),2);Vo(L,{size:14,class:"hidden group-hover:block"}),m(C,M)},y=C=>{Vo(C,{size:14,class:"opacity-0 group-hover:opacity-100"})};H(k,C=>{o(i).dirty?C($):C(y,-1)})}W((C,M)=>{l=gt(a,1,"group flex items-center border-r border-vs-bg text-[13px]",null,l,{"bg-vs-tabactive":o(i).key===Bn().activeKey,"text-vs-bright":o(i).key===Bn().activeKey,"text-vs-muted":o(i).key!==Bn().activeKey}),_e(c,"aria-selected",o(i).key===Bn().activeKey),_e(c,"title",o(i).path),V(x,C),_e(g,"title",o(i).dirty?"Unsaved changes — close":"Close"),_e(g,"aria-label",`Close ${M??""}`)},[()=>n(o(i).path),()=>n(o(i).path)]),R("click",c,()=>Bn(Bn().activeKey=o(i).key)),R("click",g,()=>Bn().closeTab(o(i).key)),m(s,a)},s=>{var i=nf();m(s,i)}),m(e,r),bt()}Vt(["click"]);var of=A('<p class="rounded-sm border border-mk-pink/40 bg-mk-pink/10 px-2 py-1 text-xs text-mk-pink svelte-1roe1v9"> </p>'),af=A('<div class="flex flex-col gap-1.5 svelte-1roe1v9"><span class="flex items-center gap-1.5 text-[11px] font-semibold text-mk-green svelte-1roe1v9"><!> </span> <div class="chat-prose text-[13px] leading-relaxed text-mk-fg svelte-1roe1v9"></div></div>'),lf=A('<div class="flex flex-col gap-1.5 border-l-2 border-mk-blue/60 pl-2.5 svelte-1roe1v9"><span class="text-[11px] font-semibold text-mk-blue svelte-1roe1v9">You</span> <div class="text-[13px] leading-relaxed whitespace-pre-wrap text-mk-fg/90 svelte-1roe1v9"> </div></div>'),cf=A(`<div class="m-auto flex max-w-[250px] flex-col items-center gap-2.5 text-center svelte-1roe1v9"><!> <p class="text-xs leading-relaxed text-mk-comment svelte-1roe1v9">Ask about the file you have open. The prompt goes to <span class="text-mk-muted svelte-1roe1v9"> </span>,
            and the reply appears here.</p></div>`),uf=A('<div class="flex flex-col gap-1.5 svelte-1roe1v9"><span class="flex items-center gap-1.5 text-[11px] font-semibold text-mk-green svelte-1roe1v9"><!> </span> <div class="chat-prose text-[13px] leading-relaxed text-mk-fg svelte-1roe1v9"><!><span class="chat-caret svelte-1roe1v9"></span></div></div>'),df=A('<div class="flex items-center gap-2 text-[11px] text-mk-comment svelte-1roe1v9"><!> <span class="svelte-1roe1v9"> <span class="chat-dots svelte-1roe1v9"></span></span></div>'),ff=A(`<button class="mx-auto -mt-1 mb-1 flex shrink-0 items-center gap-1 rounded-full border border-mk-line
             bg-mk-input px-2.5 py-0.5 text-[11px] text-mk-comment shadow hover:text-mk-fg svelte-1roe1v9"><!> </button>`),vf=A(`<span title="Context used of the model's window"> </span> <span class="h-2 w-16 overflow-hidden rounded-full bg-mk-line svelte-1roe1v9" aria-hidden="true"><span></span></span>`,1),pf=A('<span class="truncate text-mk-muted svelte-1roe1v9" title="Model for the most recent turn"> </span>'),hf=A('<!> <span class="svelte-1roe1v9"> </span> <!>',1),gf=A('<span class="text-mk-muted svelte-1roe1v9">No usage reported yet</span>'),Ti=A('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line svelte-1roe1v9"><span class="w-3 text-mk-green svelte-1roe1v9"><!></span> </button>'),_f=A('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[150px] rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl svelte-1roe1v9"></div>'),mf=A('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line svelte-1roe1v9"><span class="w-3 text-mk-green svelte-1roe1v9"><!></span> <span class="truncate svelte-1roe1v9"> </span></button>'),bf=A('<div class="absolute bottom-full left-0 z-20 mb-1 max-h-[260px] min-w-[190px] overflow-y-auto rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl svelte-1roe1v9"></div>'),xf=A('<div class="relative svelte-1roe1v9" data-menu=""><button class="flex max-w-[110px] items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg svelte-1roe1v9" title="Model"><span class="truncate svelte-1roe1v9"> </span> <!></button> <!></div>'),yf=A('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[130px] rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl svelte-1roe1v9"></div>'),wf=A('<div class="relative svelte-1roe1v9" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg svelte-1roe1v9" title="Reasoning effort"> <!></button> <!></div>'),kf=A('<div class="flex h-full min-h-0 flex-col bg-mk-bg text-mk-fg svelte-1roe1v9"><div class="relative flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-3 py-3 svelte-1roe1v9"><!> <!> <!> <!></div> <!> <div class="flex shrink-0 items-center gap-2 border-t border-mk-line px-3 py-1 text-[10px] text-mk-comment svelte-1roe1v9"><!> <button class="ml-auto flex items-center gap-1 rounded-sm px-1.5 py-0.5 hover:bg-mk-line hover:text-mk-fg disabled:opacity-40 svelte-1roe1v9" title="Compact the conversation to free up context (/compact)"><!> Compact</button></div> <div class="border-t border-mk-line p-2 svelte-1roe1v9"><div class="rounded-md border border-mk-line bg-mk-input focus-within:border-mk-green svelte-1roe1v9"><textarea rows="2" class="max-h-[200px] w-full resize-none bg-transparent px-2.5 py-2 text-[13px] text-mk-fg outline-none placeholder:text-mk-comment svelte-1roe1v9" placeholder="Ask about this workspace…"></textarea> <div class="flex items-center gap-1 px-1.5 pb-1.5 text-[11px] svelte-1roe1v9"><div class="relative svelte-1roe1v9" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg svelte-1roe1v9" title="Agent"> <!></button> <!></div> <!> <!> <!> <span class="ml-auto flex items-center gap-1.5 svelte-1roe1v9"><kbd class="hidden text-[10px] text-mk-comment sm:inline svelte-1roe1v9">↵ send · ⇧↵ newline</kbd> <button class="flex h-6 w-6 items-center justify-center rounded-md bg-mk-green text-mk-bg disabled:opacity-40 svelte-1roe1v9" title="Send (Enter)" aria-label="Send"><!></button></span></div></div></div></div>');function $f(e,t){mt(t,!0);let n=qe(t,"sessions",19,()=>[]),r=qe(t,"session",3,""),s=qe(t,"rootPath",3,""),i=qe(t,"target",15,"");at(()=>{!i()&&(r()||n()[0])&&i(r()||n()[0])});let a=O(""),l=O(!1),c=0,f=O(!1),p=O(""),x=O("");const g=ct(()=>o(l)||o(f));let k=O(ze([])),$=O(""),y=O(null),C=O(null),M=null,L=O(ze({agent:"codex",available:[],model:"",effort:"",models:[],efforts:[]})),z=O(""),K=O("");const T=ct(()=>(o(L).models.find(w=>w[0]===o(L).model)||[])[1]||o(L).model||"default");let S=O("");async function N(){if(!h.connectionId){d(S,"");return}try{d(S,(await Se.agentContext(h.connectionId)).context||"",!0)}catch{d(S,"")}}at(()=>{h.connectionId,N()});async function q(){if(i())try{d(L,{agent:"codex",available:[],model:"",effort:"",models:[],efforts:[],...await Se.sessionAgent(i())},!0)}catch(w){d(L,{agent:o(L).agent,available:[],model:"",effort:"",models:[],efforts:[]},!0),h.setStatus(w.message||"Could not read agent settings")}}async function G(){if(i())try{const w=await Se.chat(i()),I=w.messages||[],J=I.length!==o(k).length;d(k,I,!0),d(f,!!w.busy),d(x,w.detail||"",!0);const te=w.pending||"",fe=te!==o(p);d(p,te,!0),d($,""),(J||fe)&&o(B)&&queueMicrotask(xe)}catch(w){d($,w.message||"Could not load chat",!0)}}const Y=3e3,D=1e3;at(()=>{const w=o(g)?D:Y;!i()||c===w||(c=w,clearInterval(M),M=setInterval(G,w))});let B=O(!0);function he(){if(!o(y))return;const w=o(y).scrollHeight-o(y).scrollTop-o(y).clientHeight;d(B,w<80)}function xe(){o(y)&&(o(y).scrollTop=o(y).scrollHeight)}function Ge(){d(B,!0),xe()}at(()=>{const w=i();d(k,[],!0),d(p,""),d(f,!1),d(B,!0),M&&clearInterval(M),c=0,w&&(G(),q())}),Ja(()=>{M&&clearInterval(M)});async function Le(w){if(d(z,""),w!==o(L).agent){d(K,"agent");try{await Se.setSessionAgent(i(),w),await q(),h.setStatus(`Switched to ${w}`)}catch(I){h.setStatus(I.message||"Could not switch agent")}finally{d(K,"")}}}async function Ze(w){if(d(z,""),w!==o(L).model){d(K,"model");try{await Se.setSessionModel(i(),w),await q(),h.setStatus(`Model set to ${w}`)}catch(I){h.setStatus(I.message||"Could not change model")}finally{d(K,"")}}}async function ne(w){if(d(z,""),w!==o(L).effort){d(K,"effort");try{await Se.setSessionEffort(i(),w),await q(),h.setStatus(`Reasoning effort set to ${w}`)}catch(I){h.setStatus(I.message||"Could not change effort")}finally{d(K,"")}}}function ue(){const w=h.connection||{},I=h.activeTab,J=I?I.path:h.path||".",te=I?`
Active file contents (first 12,000 characters):
${I.content.slice(0,12e3)}`:"";return`${o(S)||(w.kind==="local"?`[IDE workspace]
Local folder: ${w.workspace_root||"."}
`:`[IDE workspace]
SSH target: ${w.username||"?"}@${w.host||"?"}
`)}
Currently open: ${J}${te}

${o(a).trim()}`}async function E(){const w=o(a).trim();if(!w||!i()||o(l))return;const I=ue();d(l,!0);try{const J=await fetch(`${s()}/api/sessions/${encodeURIComponent(i())}/send`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:I})}),te=await J.json().catch(()=>({}));if(!J.ok)throw new Error(te.error||"Could not send");d(a,""),o(C)&&(o(C).style.height="auto"),d(k,[...o(k),{role:"user",text:w,ts:Date.now()/1e3,_local:!0}],!0),queueMicrotask(xe),setTimeout(G,1200)}catch(J){h.setStatus(J.message||"Could not send prompt")}finally{d(l,!1)}}function oe(w){w.key==="Enter"&&!w.shiftKey&&(w.preventDefault(),E())}function Ae(w){const I=w.currentTarget;I.style.height="auto",I.style.height=`${Math.min(I.scrollHeight,200)}px`}const Ve=w=>w.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function ut(w){const I=[];return Ve(w).replace(/```(\w*)\n?([\s\S]*?)```/g,(fe,Ne,ye)=>(I.push(`<pre class="chat-code"><code>${ye.replace(/\n$/,"")}</code></pre>`),`\0BLOCK${I.length-1}\0`)).replace(/`([^`\n]+)`/g,'<code class="chat-inline">$1</code>').replace(/\*\*([^*\n]+)\*\*/g,"<strong>$1</strong>").split(`
`).map(fe=>{const Ne=fe.match(/^\s*[-*]\s+(.*)$/);return Ne?`<span class="chat-li">${Ne[1]}</span>`:fe}).join(`
`).replace(/\u0000BLOCK(\d+)\u0000/g,(fe,Ne)=>I[Number(Ne)])}function nn(w){const I=w.full||w.text||"",J=`

`;if(I.startsWith("[IDE workspace")||I.startsWith("[Remote IDE context]")||I.startsWith("[Remote SSH IDE context]")){const te=I.lastIndexOf(J);if(te!==-1)return I.slice(te+J.length)}return I}let Ke=O(null),bn=O(!1),In=null;async function Jn(){if(i())try{const I=await(await fetch(`${s()}/api/sessions/${encodeURIComponent(i())}/stats`)).json().catch(()=>({}));d(Ke,I&&I.available?I:null,!0)}catch{d(Ke,null)}}at(()=>(i(),Jn(),clearInterval(In),In=setInterval(Jn,2e4),()=>clearInterval(In)));async function Sr(){if(!(!i()||o(bn))){d(bn,!0);try{const w=await fetch(`${s()}/api/sessions/${encodeURIComponent(i())}/send`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:"/compact"})}),I=await w.json().catch(()=>({}));if(!w.ok)throw new Error(I.error||"Could not compact");setTimeout(Jn,4e3)}catch(w){h.setStatus(w.message||"Could not compact context")}finally{d(bn,!1)}}}const xn=w=>{const I=Number(w)||0;return I>=1e6?`${(I/1e6).toFixed(1)}M`:I>=1e3?`${(I/1e3).toFixed(1)}k`:String(I)},Cr=w=>w>=90?"text-vs-red":w>=70?"text-vs-yellow":"text-vs-muted";var Xn=kf();Gn("click",Hs,w=>{var I,J;(J=(I=w.target).closest)!=null&&J.call(I,"[data-menu]")||d(z,"")});var yn=b(Xn),On=b(yn);{var wn=w=>{var I=of(),J=X(I,!0);W(()=>V(J,o($))),m(w,I)};H(On,w=>{o($)&&w(wn)})}var Kt=v(On,2);Xe(Kt,19,()=>o(k),(w,I)=>w.ts+":"+I,(w,I)=>{var J=Q(),te=j(J);{var fe=ye=>{var we=af(),ge=b(we),ke=b(ge);ga(ke,{size:11});var _=v(ke),P=v(ge,2);di(P,()=>ut(nn(o(I))),!0),W(()=>V(_,` ${o(L).agent==="claude"?"Claude":"Codex"}`)),m(ye,we)},Ne=ye=>{var we=lf(),ge=v(b(we),2),ke=X(ge,!0);W(_=>V(ke,_),[()=>nn(o(I))]),m(ye,we)};H(te,ye=>{o(I).role==="assistant"?ye(fe):ye(Ne,-1)})}m(w,J)},w=>{var I=Q(),J=j(I);{var te=fe=>{var Ne=cf(),ye=b(Ne);ga(ye,{size:26,strokeWidth:1.3,class:"text-mk-line"});var we=v(ye,2),ge=v(b(we)),ke=X(ge,!0);W(()=>V(ke,i()||"the selected session")),m(fe,Ne)};H(J,fe=>{o($)||fe(te)})}m(w,I)});var Rn=v(Kt,2);{var ds=w=>{var I=uf(),J=b(I),te=b(J);ga(te,{size:11});var fe=v(te),Ne=v(J,2),ye=b(Ne);di(ye,()=>ut(o(p))),W(()=>V(fe,` ${o(L).agent==="claude"?"Claude":"Codex"}`)),m(w,I)};H(Rn,w=>{o(p)&&w(ds)})}var Zn=v(Rn,2);{var fs=w=>{var I=df(),J=b(I);Qt(J,{size:11,class:"animate-spin"});var te=v(J,2),fe=b(te);W(()=>V(fe,o(x)||"Generating")),m(w,I)};H(Zn,w=>{o(g)&&w(fs)})}Vs(yn,w=>d(y,w),()=>o(y));var Ln=v(yn,2);{var Er=w=>{var I=ff(),J=b(I);pn(J,{size:11});var te=v(J);W(()=>V(te,` ${o(g)?"Jump to latest — still generating":"Jump to latest"}`)),R("click",I,Ge),m(w,I)};H(Ln,w=>{o(B)||w(Er)})}var Qn=v(Ln,2),kn=b(Qn);{var er=w=>{var I=hf(),J=j(I);{var te=ge=>{var ke=vf(),_=j(ke),P=X(_),F=v(_,2),ie=X(F);W((ve,$e)=>{gt(_,1,ve,"svelte-1roe1v9"),V(P,`${o(Ke).contextPct??0??""}% context`),gt(ie,1,`block h-full rounded-full ${(o(Ke).contextPct||0)>=90?"bg-vs-red":(o(Ke).contextPct||0)>=70?"bg-vs-yellow":"bg-mk-green"}`,"svelte-1roe1v9"),Kr(ie,`width: ${$e??""}%`)},[()=>Ol(Cr(o(Ke).contextPct||0)),()=>Math.min(100,Math.max(0,o(Ke).contextPct||0))]),m(ge,ke)};H(J,ge=>{o(Ke).ctxWindowSize&&ge(te)})}var fe=v(J,2),Ne=X(fe),ye=v(fe,2);{var we=ge=>{var ke=pf(),_=X(ke,!0);W(()=>V(_,o(Ke).model)),m(ge,ke)};H(ye,ge=>{o(Ke).model&&o(Ke).model!=="unknown"&&ge(we)})}W((ge,ke,_)=>{_e(fe,"title",`${o(Ke).messageCount??""} turns · ${ge??""} in · ${ke??""} out`),V(Ne,`${_??""} tokens`)},[()=>xn(o(Ke).totalInput),()=>xn(o(Ke).totalOutput),()=>xn(o(Ke).totalTokens)]),m(w,I)},Tr=w=>{var I=gf();m(w,I)};H(kn,w=>{o(Ke)?w(er):w(Tr,-1)})}var tr=v(kn,2),nr=b(tr);{var vs=w=>{Qt(w,{size:10,class:"animate-spin"})},Nr=w=>{fd(w,{size:10})};H(nr,w=>{o(bn)?w(vs):w(Nr,-1)})}var zr=v(Qn,2),Pr=b(zr),rn=b(Pr);Vs(rn,w=>d(C,w),()=>o(C));var rr=v(rn,2),sr=b(rr),or=b(sr),Ar=b(or),ps=v(Ar);pn(ps,{size:11});var hs=v(or,2);{var ar=w=>{var I=_f();Xe(I,20,()=>o(L).available.length?o(L).available:["codex"],J=>J,(J,te)=>{var fe=Ti(),Ne=b(fe),ye=b(Ne);{var we=ke=>{Mo(ke,{size:11})};H(ye,ke=>{te===o(L).agent&&ke(we)})}var ge=v(Ne);W(()=>V(ge,` ${te==="claude"?"Claude":"Codex"}`)),R("click",fe,()=>Le(te)),m(J,fe)}),m(w,I)};H(hs,w=>{o(z)==="agent"&&w(ar)})}var ir=v(sr,2);{var gs=w=>{var I=xf(),J=b(I),te=b(J),fe=X(te,!0),Ne=v(te,2);pn(Ne,{size:11,class:"shrink-0"});var ye=v(J,2);{var we=ge=>{var ke=bf();Xe(ke,21,()=>o(L).models,_=>_[0],(_,P)=>{var F=mf(),ie=b(F),ve=b(ie);{var $e=De=>{Mo(De,{size:11})};H(ve,De=>{o(P)[0]===o(L).model&&De($e)})}var Te=v(ie,2),Me=X(Te,!0);W(()=>V(Me,o(P)[1])),R("click",F,()=>Ze(o(P)[0])),m(_,F)}),m(ge,ke)};H(ye,ge=>{o(z)==="model"&&ge(we)})}W(()=>V(fe,o(T))),R("click",J,()=>d(z,o(z)==="model"?"":"model",!0)),m(w,I)};H(ir,w=>{o(L).models.length&&w(gs)})}var lr=v(ir,2);{var Z=w=>{var I=wf(),J=b(I),te=b(J),fe=v(te);pn(fe,{size:11});var Ne=v(J,2);{var ye=we=>{var ge=yf();Xe(ge,20,()=>o(L).efforts,ke=>ke,(ke,_)=>{var P=Ti(),F=b(P),ie=b(F);{var ve=Te=>{Mo(Te,{size:11})};H(ie,Te=>{_===o(L).effort&&Te(ve)})}var $e=v(F);W(()=>V($e,` ${_??""}`)),R("click",P,()=>ne(_)),m(ke,P)}),m(we,ge)};H(Ne,we=>{o(z)==="effort"&&we(ye)})}W(()=>V(te,`${(o(L).effort||"effort")??""} `)),R("click",J,()=>d(z,o(z)==="effort"?"":"effort",!0)),m(w,I)};H(lr,w=>{o(L).efforts.length&&w(Z)})}var Re=v(lr,2);{var Ee=w=>{Qt(w,{size:11,class:"animate-spin text-mk-muted"})};H(Re,w=>{o(K)&&w(Ee)})}var ae=v(Re,2),Ce=v(b(ae),2),dt=b(Ce);{var Qe=w=>{md(w,{size:11})},zt=w=>{Yu(w,{size:13})};H(dt,w=>{o(g)?w(Qe):w(zt,-1)})}W(w=>{tr.disabled=o(bn)||!i(),V(Ar,`${o(L).agent==="claude"?"Claude":"Codex"} `),Ce.disabled=w},[()=>o(g)||!o(a).trim()]),Gn("scroll",yn,he),R("click",tr,Sr),R("keydown",rn,oe),R("input",rn,Ae),Be(rn,()=>o(a),w=>d(a,w)),R("click",or,()=>d(z,o(z)==="agent"?"":"agent",!0)),R("click",Ce,E),m(e,Xn),bt()}Vt(["click","keydown","input"]);var Sf=A('<span class="hint svelte-e2eyom">searching…</span>'),Cf=A('<li><button><span class="name svelte-e2eyom"> </span> <span class="path svelte-e2eyom"> </span> <!></button></li>'),Ef=A('<ul class="results svelte-e2eyom"></ul>'),Tf=A('<p class="empty svelte-e2eyom"> </p>'),Nf=A('<div class="backdrop svelte-e2eyom" role="button" tabindex="-1"></div> <div class="dialog svelte-e2eyom" role="dialog" aria-label="Quick open"><div class="field svelte-e2eyom"><!> <input placeholder="Search files by name…" aria-label="Search files by name" class="svelte-e2eyom"/> <!></div> <!></div>',1);function zf(e,t){mt(t,!0);let n=O(""),r=O(ze([])),s=O(0),i=O(!1),a=O(null),l=null;at(()=>{o(a)&&o(a).focus()}),at(()=>{const S=o(n).trim();if(l&&clearTimeout(l),!S){d(r,[],!0);return}l=setTimeout(async()=>{d(i,!0);try{const N=await Se.searchFiles(h.connectionId,h.path||".",S);d(r,N.matches||[],!0),d(s,0)}catch{d(r,[],!0)}finally{d(i,!1)}},180)});async function c(S){var q;if(!S)return;const N=h.path&&h.path!=="."?`${h.path}/`:"";await h.openFile(`${N}${S.path}`),(q=t.onclose)==null||q.call(t)}function f(S){var N;S.key==="Escape"?(S.preventDefault(),(N=t.onclose)==null||N.call(t)):S.key==="ArrowDown"?(S.preventDefault(),d(s,Math.min(o(s)+1,o(r).length-1),!0)):S.key==="ArrowUp"?(S.preventDefault(),d(s,Math.max(o(s)-1,0),!0)):S.key==="Enter"&&(S.preventDefault(),c(o(r)[o(s)]))}var p=Nf(),x=j(p),g=v(x,2),k=b(g),$=b(k);Za($,{size:14});var y=v($,2);Vs(y,S=>d(a,S),()=>o(a));var C=v(y,2);{var M=S=>{var N=Sf();m(S,N)};H(C,S=>{o(i)&&S(M)})}var L=v(k,2);{var z=S=>{var N=Ef();Xe(N,23,()=>o(r),q=>q.path,(q,G,Y)=>{var D=Cf(),B=b(D);let he;var xe=b(B),Ge=X(xe,!0),Le=v(xe,2),Ze=X(Le,!0),ne=v(Le,2);{var ue=E=>{ed(E,{size:12})};H(ne,E=>{o(Y)===o(s)&&E(ue)})}W(()=>{he=gt(B,1,"svelte-e2eyom",null,he,{active:o(Y)===o(s)}),V(Ge,o(G).name),V(Ze,o(G).path)}),R("click",B,()=>c(o(G))),m(q,D)}),m(S,N)},K=S=>{var N=Tf(),q=X(N);W(G=>V(q,`No files match “${G??""}”.`),[()=>o(n).trim()]),m(S,N)},T=ct(()=>o(n).trim()&&!o(i));H(L,S=>{o(r).length?S(z):o(T)&&S(K,1)})}R("click",x,()=>{var S;return(S=t.onclose)==null?void 0:S.call(t)}),R("keydown",x,S=>{var N;return S.key==="Escape"&&((N=t.onclose)==null?void 0:N.call(t))}),R("keydown",y,f),Be(y,()=>o(n),S=>d(n,S)),m(e,p),bt()}Vt(["click","keydown"]);var Pf=A('<div class="terminal-pane svelte-maclc7"><div class="bar svelte-maclc7"><span class="label svelte-maclc7">Terminal</span> <span> </span></div> <div class="screen svelte-maclc7"></div></div>');function Af(e,t){mt(t,!0);let n=qe(t,"rootPath",3,""),r=qe(t,"session",3,""),s=qe(t,"index",3,0),i,a=null,l=null,c=null,f=O("connecting"),p=null,x=0,g=null,k=!1;const $={background:Os.colors["editor.background"],foreground:Os.colors["editor.foreground"],cursor:Os.colors["editorCursor.foreground"],selectionBackground:Os.colors["editor.selectionBackground"],black:"#272822",red:"#f92672",green:"#a6e22e",yellow:"#e6db74",blue:"#66d9ef",magenta:"#ae81ff",cyan:"#a1efe4",white:"#f8f8f2",brightBlack:"#75715e",brightRed:"#f92672",brightGreen:"#a6e22e",brightYellow:"#e6db74",brightBlue:"#66d9ef",brightMagenta:"#ae81ff",brightCyan:"#a1efe4",brightWhite:"#f9f8f5"};function y(){if(!(!l||!a||(c==null?void 0:c.readyState)!==WebSocket.OPEN))try{l.fit(),c.send(JSON.stringify({type:"resize",cols:a.cols,rows:a.rows}))}catch{}}function C(){if(k)return;const N=`${location.protocol==="https:"?"wss":"ws"}://${location.host}${n()}/ws/sessions/${encodeURIComponent(r())}/ide/terminal/${encodeURIComponent(h.connectionId)}?index=${encodeURIComponent(s())}`;c=new WebSocket(N),c.binaryType="arraybuffer",c.onopen=()=>{d(f,"connected"),x=0,y()},c.onmessage=q=>{a.write(typeof q.data=="string"?q.data:new Uint8Array(q.data))},c.onclose=q=>{if(k)return;if(q.code===1008){d(f,"refused"),a==null||a.write(`\r
\x1B[31m— not authorised for this terminal —\x1B[0m\r
`);return}if(x>=6){d(f,"closed"),a==null||a.write(`\r
\x1B[33m— terminal unavailable; reopen the panel to retry —\x1B[0m\r
`);return}d(f,"reconnecting");const G=Math.min(1e3*2**x,1e4);x+=1,g=setTimeout(C,G)},c.onerror=()=>{k||d(f,"error")}}us(async()=>{const[{Terminal:S},{FitAddon:N}]=await Promise.all([Oo(()=>import("./ide-xterm.js"),[],import.meta.url),Oo(()=>import("./ide-addon-fit.js"),[],import.meta.url)]);await Oo(()=>Promise.resolve({}),__vite__mapDeps([2]),import.meta.url),a=new S({theme:$,fontSize:12,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",cursorBlink:!0,scrollback:5e3}),l=new N,a.loadAddon(l),a.open(i),l.fit(),C(),a.onData(q=>{(c==null?void 0:c.readyState)===WebSocket.OPEN&&c.send(new TextEncoder().encode(q))}),p=new ResizeObserver(()=>y()),p.observe(i)}),Ja(()=>{k=!0,g&&clearTimeout(g),p==null||p.disconnect(),c==null||c.close(),a==null||a.dispose()});var M=Pf(),L=b(M),z=v(b(L),2),K=X(z,!0),T=v(L,2);Vs(T,S=>i=S,()=>i),W(()=>{gt(z,1,`status ${o(f)??""}`,"svelte-maclc7"),V(K,o(f))}),m(e,M),bt()}var Mf=A('<div class="border-b border-vs-line bg-vs-red/10 px-4 py-2 text-xs text-vs-red"> </div>'),If=A('<div class="flex items-center gap-2 px-4 py-3 text-xs text-vs-muted"><!> Loading…</div>'),Of=A('<button class="flex w-full items-center gap-2 px-4 py-1 text-left text-[13px] text-vs-fg hover:bg-vs-hover"><!> <span class="truncate"> </span></button>'),Rf=A('<div class="px-4 py-3 text-xs text-vs-muted">No sub-folders here. You can still open this folder.</div>'),Lf=A('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="flex h-[70vh] w-[min(640px,92vw)] flex-col overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright">Open Folder <span class="ml-1 font-normal text-vs-muted"><!></span></div> <form class="flex gap-2 border-b border-vs-line px-3 py-2"><button type="button" class="flex items-center gap-1 rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover disabled:opacity-40" title="Up one folder"><!> Up</button> <input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-xs text-vs-fg outline-none focus:border-vs-accent" spellcheck="false" aria-label="Folder path"/> <button type="submit" class="rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover">Go</button></form> <!> <div class="min-h-0 flex-1 overflow-y-auto py-1"><!></div> <div class="flex items-center gap-2 border-t border-vs-line px-4 py-3"><span class="flex min-w-0 flex-1 items-center gap-2 text-xs text-vs-muted"><!> <span class="truncate font-mono"> </span></span> <button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40">Open Folder</button></div></div></div>');function Df(e,t){mt(t,!0);let n=O(""),r=O(""),s=O(ze([])),i=O(""),a=O(!0),l=O("");async function c(ne){d(a,!0),d(i,"");try{const ue=h.connectionId?await Se.browseOn(h.connectionId,ne):await Se.browse(ne);d(n,ue.path,!0),d(r,ue.parent,!0),d(s,ue.entries||[],!0),d(l,ue.path,!0)}catch(ue){d(i,ue.message||"Could not open that folder",!0)}finally{d(a,!1)}}us(()=>c(""));function f(ne){ne.preventDefault(),o(l).trim()&&c(o(l).trim())}var p=Lf(),x=b(p),g=b(x),k=v(b(g)),$=b(k);{var y=ne=>{var ue=ci();W(()=>V(ue,`on ${h.connection.username??""}@${h.connection.host??""}`)),m(ne,ue)},C=ne=>{var ue=ci("on this server");m(ne,ue)};H($,ne=>{h.connection&&h.connection.kind!=="local"?ne(y):ne(C,-1)})}var M=v(g,2),L=b(M),z=b(L);td(z,{size:14});var K=v(L,2),T=v(M,2);{var S=ne=>{var ue=Mf(),E=X(ue,!0);W(()=>V(E,o(i))),m(ne,ue)};H(T,ne=>{o(i)&&ne(S)})}var N=v(T,2),q=b(N);{var G=ne=>{var ue=If(),E=b(ue);Qt(E,{size:13,class:"animate-spin"}),m(ne,ue)},Y=ne=>{var ue=Q(),E=j(ue);Xe(E,17,()=>o(s),oe=>oe.path,(oe,Ae)=>{var Ve=Of(),ut=b(Ve);ld(ut,{size:14,class:"shrink-0 text-vs-blue"});var nn=v(ut,2),Ke=X(nn,!0);W(()=>V(Ke,o(Ae).name)),R("dblclick",Ve,()=>c(o(Ae).path)),R("click",Ve,()=>c(o(Ae).path)),m(oe,Ve)},oe=>{var Ae=Rf();m(oe,Ae)}),m(ne,ue)};H(q,ne=>{o(a)?ne(G):ne(Y,-1)})}var D=v(N,2),B=b(D),he=b(B);cd(he,{size:13,class:"shrink-0"});var xe=v(he,2),Ge=X(xe,!0),Le=v(B,2),Ze=v(Le,2);W(()=>{L.disabled=!o(r),_e(xe,"title",o(n)),V(Ge,o(n)),Ze.disabled=!o(n)||o(a)}),R("click",p,ne=>ne.target===ne.currentTarget&&t.onclose()),R("keydown",p,ne=>ne.key==="Escape"&&t.onclose()),Gn("submit",M,f),R("click",L,()=>o(r)&&c(o(r))),Be(K,()=>o(l),ne=>d(l,ne)),R("click",Le,function(...ne){var ue;(ue=t.onclose)==null||ue.apply(this,ne)}),R("click",Ze,()=>t.onopen(o(n))),m(e,p),bt()}Vt(["click","keydown","dblclick"]);var Ff=A('<p class="px-4 py-2 text-xs text-vs-muted">Open a folder to search it.</p>'),Hf=A('<button class="flex w-full items-center gap-2 px-3 py-1 text-left text-[13px] hover:bg-vs-hover"><!> <span class="truncate text-vs-fg"> </span> <span class="ml-auto max-w-[45%] truncate text-[11px] text-vs-muted"> </span></button>'),jf=A('<p class="px-4 py-2 text-xs text-vs-muted"> </p>'),Bf=A('<p class="px-4 py-2 text-xs text-vs-muted">Type to search filenames in this workspace.</p>'),Vf=A('<div class="flex h-full min-h-0 flex-col"><div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Search</div> <div class="px-3 pb-2"><div class="flex items-center gap-1.5 rounded-sm border border-vs-line bg-vs-input px-2 focus-within:border-vs-accent"><!> <input class="min-w-0 flex-1 bg-transparent py-1 text-xs text-vs-fg outline-none placeholder:text-vs-muted" placeholder="Search filenames" spellcheck="false"/> <!></div></div> <div class="min-h-0 flex-1 overflow-y-auto"><!></div></div>');function Kf(e,t){mt(t,!0);let n=O(""),r=O(ze([])),s=O(!1),i=O(!1),a=null;at(()=>{const z=o(n).trim();if(a&&clearTimeout(a),!z||!h.connectionId){d(r,[],!0),d(i,!1);return}a=setTimeout(async()=>{d(s,!0);try{const K=await Se.searchFiles(h.connectionId,h.path||".",z);d(r,K.matches||[],!0)}catch(K){d(r,[],!0),h.setStatus(K.message||"Search failed")}finally{d(s,!1),d(i,!0)}},200)});const l=z=>{const K=(z||"").split("/");return K.pop(),K.join("/")};var c=Vf(),f=v(b(c),2),p=b(f),x=b(p);Za(x,{size:12,class:"shrink-0 text-vs-muted"});var g=v(x,2),k=v(g,2);{var $=z=>{Qt(z,{size:12,class:"shrink-0 animate-spin text-vs-muted"})};H(k,z=>{o(s)&&z($)})}var y=v(f,2),C=b(y);{var M=z=>{var K=Ff();m(z,K)},L=z=>{var K=Q(),T=j(K);Xe(T,17,()=>o(r),S=>S.path,(S,N)=>{var q=Hf(),G=b(q);Xa(G,{size:13,class:"shrink-0 text-vs-blue"});var Y=v(G,2),D=X(Y,!0),B=v(Y,2),he=X(B,!0);W((xe,Ge)=>{_e(q,"title",o(N).path),V(D,xe),V(he,Ge)},[()=>o(N).name||o(N).path.split("/").pop(),()=>l(o(N).path)]),R("click",q,()=>h.openFile(o(N).path)),m(S,q)},S=>{var N=Q(),q=j(N);{var G=B=>{var he=jf(),xe=X(he);W(()=>V(xe,`No files match “${o(n)??""}”.`)),m(B,he)},Y=B=>{var he=Bf();m(B,he)},D=ct(()=>!o(n).trim());H(q,B=>{o(i)&&!o(s)?B(G):o(D)&&B(Y,1)})}m(S,N)}),m(z,K)};H(C,z=>{h.connectionId?z(L,-1):z(M)})}Be(g,()=>o(n),z=>d(n,z)),m(e,c),bt()}Vt(["click"]);var Uf=A('<p class="flex items-center gap-2 text-vs-muted"><!> Fetching host key…</p>'),Wf=A('<p class="text-vs-red"> </p>'),qf=A("<p>This host is already trusted. Try connecting again.</p>"),Gf=A('<div class="flex items-baseline gap-2 font-mono text-[11px]"><span class="w-16 shrink-0 text-vs-muted"> </span> <span class="break-all text-vs-fg"> </span></div>'),Yf=A(`<p>The authenticity of <span class="font-mono text-vs-blue"> </span> can't be established. Verify these fingerprints match the server before you continue —
          if they don't, someone may be intercepting the connection.</p> <div class="mt-3 flex flex-col gap-1 rounded-sm border border-vs-line bg-vs-input p-2"></div> <p class="mt-3 text-xs text-vs-muted">Accepting adds the key to <span class="font-mono">~/.ssh/known_hosts</span> on this server.</p>`,1),Jf=A('<button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"> </button>'),Xf=A('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="w-[min(560px,92vw)] overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="flex items-center gap-2 border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright"><!> Unknown host</div> <div class="px-4 py-3 text-[13px] leading-relaxed text-vs-fg"><!></div> <div class="flex justify-end gap-2 border-t border-vs-line px-4 py-3"><button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <!></div></div></div>');function Zf(e,t){mt(t,!0);let n=O(!0),r=O(""),s=O(null),i=O(!1);us(async()=>{try{d(s,await Se.hostKey(h.connectionId),!0)}catch(T){d(r,T.message||"Could not fetch the host key",!0)}finally{d(n,!1)}});async function a(){d(i,!0);try{await Se.trustHost(h.connectionId),t.ontrusted()}catch(T){d(r,T.message||"Could not trust this host",!0),d(i,!1)}}var l=Xf(),c=b(l),f=b(c),p=b(f);_d(p,{size:15,class:"text-vs-yellow"});var x=v(f,2),g=b(x);{var k=T=>{var S=Uf(),N=b(S);Qt(N,{size:13,class:"animate-spin"}),m(T,S)},$=T=>{var S=Wf(),N=X(S,!0);W(()=>V(N,o(r))),m(T,S)},y=T=>{var S=qf();m(T,S)},C=T=>{var S=Yf(),N=j(S),q=v(b(N)),G=X(q),Y=v(N,2);Xe(Y,21,()=>o(s).fingerprints,D=>D.fingerprint,(D,B)=>{var he=Gf(),xe=b(he),Ge=X(xe,!0),Le=v(xe,2),Ze=X(Le,!0);W(()=>{V(Ge,o(B).type),V(Ze,o(B).fingerprint)}),m(D,he)}),W(()=>V(G,`${o(s).host??""}:${o(s).port??""}`)),m(T,S)};H(g,T=>{var S;o(n)?T(k):o(r)?T($,1):(S=o(s))!=null&&S.known?T(y,2):T(C,-1)})}var M=v(x,2),L=b(M),z=v(L,2);{var K=T=>{var S=Jf(),N=X(S,!0);W(()=>{S.disabled=o(i),V(N,o(i)?"Trusting…":"Trust and connect")}),R("click",S,a),m(T,S)};H(z,T=>{var S;!o(n)&&!((S=o(s))!=null&&S.known)&&!o(r)&&T(K)})}R("click",l,T=>T.target===T.currentTarget&&t.onclose()),R("keydown",l,T=>T.key==="Escape"&&t.onclose()),R("click",L,function(...T){var S;(S=t.onclose)==null||S.apply(this,T)}),m(e,l),bt()}Vt(["click","keydown"]);var Qf=A('<div role="separator" tabindex="0" title="Drag to resize (double-click to reset)"><div></div></div>');function _a(e,t){mt(t,!0);let n=qe(t,"size",15),r=qe(t,"side",3,"right"),s=qe(t,"min",3,120),i=qe(t,"max",3,800),a=qe(t,"onreset",3,null),l=O(!1);const c=r()==="top";function f($){var K;$.preventDefault(),d(l,!0);const y=c?$.clientY:$.clientX,C=n(),M=$.currentTarget;(K=M.setPointerCapture)==null||K.call(M,$.pointerId);function L(T){const N=(c?T.clientY:T.clientX)-y,q=r()==="left"||r()==="top"?-N:N;n(Math.round(Math.min(i(),Math.max(s(),C+q))))}function z(){var T;d(l,!1),(T=M.releasePointerCapture)==null||T.call(M,$.pointerId),window.removeEventListener("pointermove",L),window.removeEventListener("pointerup",z)}window.addEventListener("pointermove",L),window.addEventListener("pointerup",z)}function p($){const y=$.shiftKey?40:10,C=c?"ArrowUp":r()==="left"?"ArrowLeft":"ArrowRight",M=c?"ArrowDown":r()==="left"?"ArrowRight":"ArrowLeft";if($.key===C)n(Math.min(i(),n()+y));else if($.key===M)n(Math.max(s(),n()-y));else return;$.preventDefault()}var x=Qf();let g;var k=X(x);W(()=>{g=gt(x,1,`group relative shrink-0 ${c?"h-1 w-full cursor-row-resize":"w-1 cursor-col-resize"}`,null,g,{"bg-vs-accent":o(l)}),_e(x,"aria-orientation",c?"horizontal":"vertical"),_e(x,"aria-valuenow",n()),_e(x,"aria-valuemin",s()),_e(x,"aria-valuemax",i()),gt(k,1,`absolute ${c?"-top-1 -bottom-1 left-0 right-0":"-left-1 -right-1 top-0 bottom-0"}
           transition-colors group-hover:bg-vs-accent ${o(l)?"bg-vs-accent":""}`)}),R("pointerdown",x,f),R("dblclick",x,()=>{var $;return($=a())==null?void 0:$()}),R("keydown",x,p),m(e,x),bt()}Vt(["pointerdown","dblclick","keydown"]);var ev=A('<span class="absolute top-0 bottom-0 left-0 w-0.5 bg-vs-bright"></span>'),tv=A('<span class="absolute right-1.5 bottom-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-vs-status px-1 text-[10px] leading-none font-semibold text-white"> </span>'),nv=A("<button><!> <!> <!></button>"),Ni=A("<option> </option>"),rv=A('<button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Connection settings" aria-label="Connection settings"><!></button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover hover:text-vs-red" title="Remove workspace" aria-label="Remove workspace"><!></button>',1),sv=A('<div class="flex gap-1"><input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="Host"/> <input class="w-16 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" type="number" min="1" max="65535" placeholder="Port"/></div> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="Username"/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="Identity file (optional)"/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" type="password" autocomplete="new-password" placeholder="Password — leave blank to keep current"/>',1),ov=A('<div class="flex flex-col gap-1.5 rounded-sm border border-vs-line bg-vs-panel p-2"><span class="text-[11px] font-semibold tracking-wide uppercase text-vs-muted"> </span> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="Label"/> <!> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="Workspace folder"/> <div class="flex gap-1"><button class="flex-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110 disabled:opacity-40"> </button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover">Cancel</button></div></div>'),av=A('<input class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" type="password" placeholder="Password (optional)" autocomplete="new-password"/>'),iv=A(`<button class="w-full rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Show this host's key fingerprint and trust it">Verify host key…</button>`),lv=A('<!> <button class="w-full rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"> </button> <!>',1),cv=A('<p class="mt-1 font-mono text-[11px] break-all text-vs-muted"> </p>'),uv=A('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="~/.ssh/id_ed25519"/> <textarea class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-[11px] outline-none focus:border-vs-accent" rows="4" placeholder="…or paste a private key (-----BEGIN OPENSSH PRIVATE KEY-----)" spellcheck="false"></textarea>',1),dv=A('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" type="password" placeholder="Password" autocomplete="new-password"/>'),fv=A('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Host" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="User" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Port" type="number" min="1" max="65535"/> <select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>SSH agent</option><option>Existing key</option><option>Password (saved, encrypted)</option></select> <!> <!>',1),vv=A('<form class="mt-2 flex flex-col gap-1.5 border-t border-vs-line px-3 pt-2"><select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>This server (local folder)</option><option>Remote host over SSH</option></select> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Label"/> <!> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"/> <div class="flex gap-1 pb-2"><button class="flex-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110" type="submit">Create</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" type="button">Cancel</button></div></form>'),pv=A('<div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Workspaces</div> <div class="flex flex-col gap-2 px-3 pt-1"><select class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" aria-label="Workspace"><option>— select workspace —</option><!></select> <div class="flex gap-1"><button class="flex flex-1 items-center justify-center gap-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"><!> Open Folder</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Add a workspace or SSH connection" aria-label="Add workspace"><!></button> <!></div> <!> <!> <!></div> <!>',1),hv=A('<aside class="flex shrink-0 flex-col overflow-hidden border-r border-vs-border bg-vs-panel"><!></aside> <!>',1),gv=A('<div class="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center"><!> <div><h1 class="text-2xl font-light text-vs-fg">Multibuilder IDE</h1> <p class="mt-1 text-sm text-vs-muted">Edit files on this server or on a remote host over SSH.</p></div> <div class="flex flex-col gap-2 text-sm"><button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Open Folder… <kbd class="ml-2 rounded-sm border border-vs-line px-1.5 py-0.5 text-[10px] text-vs-muted">Ctrl+Shift+O</kbd></button> <button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Connect to a host over SSH…</button></div></div>'),_v=A('<button class="rounded-sm p-0.5 opacity-0 group-hover:opacity-100 hover:bg-vs-line" title="Close terminal — ends the shell"><!></button>'),mv=A('<span><button class="max-w-[140px] truncate"> </button> <!></span>'),bv=A('<div class="absolute inset-0"><!></div>'),xv=A('<!> <div class="flex shrink-0 flex-col border-t border-vs-border bg-vs-bg"><div class="flex items-center gap-1 border-b border-vs-border px-2 py-1 text-[11px]"><!> <div class="flex min-w-0 flex-1 items-center gap-0.5 overflow-x-auto"></div> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover disabled:opacity-40" title="New terminal in this workspace" aria-label="New terminal"><!></button> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover" title="Hide terminals (Ctrl+`) — sessions keep running" aria-label="Hide all terminals"><!></button> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover hover:text-vs-red" title="Close this terminal — ends the shell" aria-label="Close this terminal"><!></button></div> <div class="relative min-h-0 flex-1"><!></div></div>',1),yv=A('<!> <div class="min-h-0 flex-1"><!></div> <!>',1),wv=A(`<!> <aside class="flex shrink-0 flex-col overflow-hidden border-l border-vs-border bg-vs-panel"><div class="flex items-center gap-1.5 border-b border-vs-border px-3 py-1.5"><!> <span class="shrink-0 text-[11px] font-semibold tracking-wide uppercase">AI Agent</span> <select class="ml-auto min-w-0 flex-1 truncate rounded-sm border border-vs-line bg-vs-input px-1.5 py-0.5
                   text-[11px] text-vs-fg outline-none focus:border-vs-accent" title="Agent session — each has its own history"></select> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover disabled:opacity-40" title="New agent session" aria-label="New agent session"><!></button> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover" title="Hide AI Agent" aria-label="Hide AI Agent"><!></button></div> <div class="min-h-0 flex-1"><!></div></aside>`,1),kv=A('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20"><!> <!></button>'),$v=A('<span class="flex items-center gap-1"><!> </span>'),Sv=A("<span> </span>"),Cv=A('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle terminal (Ctrl+`)"><!> Terminal</button> <button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Focus the tmux window on the host"><!></button>',1),Ev=A('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle AI Agent panel"><!> Chat</button>'),Tv=A('<div class="flex h-full flex-col overflow-hidden bg-vs-bg font-sans text-vs-fg"><header class="flex items-center gap-2 border-b border-vs-border bg-vs-titlebar px-3 py-1 text-xs"><!> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover" title="Open a folder on this server (Ctrl+Shift+O)">Open Folder…</button> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40" title="Open a file (Ctrl+P)">Open File…</button> <button><!> Terminal</button> <span class="mx-auto truncate text-vs-muted"> </span> <span><!> </span></header> <div class="flex min-h-0 flex-1"><nav class="flex w-12 shrink-0 flex-col items-center bg-vs-activity"><!> <div class="mt-auto flex flex-col items-center pb-1"><button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Account — signed in to the dashboard" aria-label="Account"><!></button> <button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Toggle side bar (Ctrl+B)" aria-label="Toggle side bar"><!></button></div></nav> <!> <section class="flex min-h-0 min-w-0 flex-1 flex-col"><!></section> <!></div> <footer class="flex shrink-0 items-center gap-3 bg-vs-status px-3 py-0.5 text-[12px] text-white"><!> <!> <span class="truncate"> </span> <span class="ml-auto flex items-center gap-3"><!> <span class="max-w-[40vw] truncate opacity-80"> </span> <!> <!></span></footer> <!> <!> <!></div>');function Nv(e,t){mt(t,!0);let n=qe(t,"sessions",19,()=>[]),r=qe(t,"session",3,""),s=qe(t,"rootPath",3,""),i=O(ze([...n()])),a=O(ze(r()||n()[0]||"")),l=O(!1),c=O(!1),f=O(!1),p=O(ze({label:"",host:"",username:"",port:22,identity_file:"",password:"",workspace_root:""}));function x(){h.connection&&(d(y,"remote"),d(N,!0),o(c)||g())}function g(){const _=h.connection;_&&(d(p,{label:_.label||"",host:_.host||"",username:_.username||"",port:_.port||22,identity_file:_.identity_file||"",password:"",workspace_root:_.workspace_root||""},!0),d(c,!o(c)))}async function k(){var _;if(!(!h.connection||o(f))){d(f,!0);try{const P={...o(p),port:Number(o(p).port)||22};P.password||delete P.password,await Se.updateConnection(h.connection.id,P),await((_=h.loadConnections)==null?void 0:_.call(h)),d(c,!1),h.setStatus("Connection settings saved")}catch(P){h.setStatus(P.message||"Could not save connection settings")}finally{d(f,!1)}}}async function $(){var _;if(!o(l)){d(l,!0);try{const P=(((_=h.connection)==null?void 0:_.label)||r()||"agent").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,20)||"agent";let F=P;for(let Te=2;o(i).includes(F);Te+=1)F=`${P}-${Te}`;const ie=await fetch(`${s()}/api/sessions/create`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:F,agent:"claude"})}),ve=await ie.json().catch(()=>({}));if(!ie.ok)throw new Error(ve.error||"Could not create session");const $e=ve.session||ve.name||F;o(i).includes($e)||d(i,[...o(i),$e],!0),d(a,$e,!0),h.setStatus(`Agent session "${$e}" created`)}catch(P){h.setStatus(P.message||"Could not create agent session")}finally{d(l,!1)}}}let y=O("files");function C(_,P){try{const F=localStorage.getItem(`ide.show.${_}`);return F===null?P:F==="1"}catch{return P}}let M=O(ze(C("chat",!0)));const L={sidebar:240,chat:320,panel:240};function z(_){try{const P=localStorage.getItem(`ide.size.${_}`),F=Number(P);return Number.isFinite(F)&&F>0?F:L[_]}catch{return L[_]}}let K=O(ze(z("sidebar"))),T=O(ze(z("chat"))),S=O(ze(z("panel")));at(()=>{try{localStorage.setItem("ide.size.sidebar",String(o(K))),localStorage.setItem("ide.size.chat",String(o(T))),localStorage.setItem("ide.size.panel",String(o(S))),localStorage.setItem("ide.show.terminal",o(G)?"1":"0"),localStorage.setItem("ide.show.chat",o(M)?"1":"0"),localStorage.setItem("ide.show.sidebar",o(N)?"1":"0")}catch{}});let N=O(ze(C("sidebar",!0))),q=O(!1),G=O(ze(C("terminal",!1)));const Y=8;let D=O(ze([0])),B=O(0);function he(){if(o(D).length>=Y)return;let _=0;for(;o(D).includes(_);)_+=1;_>=Y||(d(D,[...o(D),_].sort((P,F)=>P-F),!0),d(B,_,!0))}async function xe(_){const P=o(D).indexOf(_),F=o(D).filter(ie=>ie!==_);d(D,F.length?F:[0],!0),o(B)===_&&d(B,o(D)[Math.min(P,o(D).length-1)],!0);try{await Se.closeTerminal(h.connectionId,_)}catch(ie){h.setStatus(ie.message||"Could not close terminal")}}let Ge=O("");at(()=>{const _=h.connectionId,P=h.connectionState;if(!_||P!=="connected")return;const F=`${_}|${P}`;o(Ge)!==F&&(d(Ge,F),d(D,[0],!0),d(B,0),Se.listTerminals(_).then(ie=>{const ve=((ie==null?void 0:ie.terminals)||[]).filter($e=>Number.isInteger($e));ve.length&&(d(D,ve,!0),ve.includes(o(B))||d(B,ve[0],!0))}).catch(()=>{}))});let Le=O(!1);at(()=>{o(G)&&d(Le,!0)});let Ze=O(!1),ne=O(!1),ue=O(""),E=O(ze({kind:"local",label:"",host:"",username:"",port:22,auth_mode:"agent",identity_file:"",password:"",private_key:"",workspace_root:"",max_file_bytes:1e6}));const oe={idle:{icon:Qu,label:"Not connected"},connecting:{icon:Xu,label:"Connecting…"},connected:{icon:Ju,label:"Connected"},reconnect:{icon:xi,label:"Reconnect required"},error:{icon:xi,label:"Error"}},Ae=ct(()=>oe[h.connectionState].icon),Ve=ct(()=>{var _;return((_=h.connection)==null?void 0:_.kind)==="local"}),ut=[{id:"files",icon:ad,label:"Explorer",keys:"Ctrl+Shift+E"},{id:"search",icon:Za,label:"Search",keys:"Ctrl+Shift+F"},{id:"git",icon:Ma,label:"Source Control",keys:"Ctrl+Shift+G"},{id:"remote",icon:pd,label:"Remote Explorer",keys:""}];us(async()=>{await h.loadConnections(),h.connectionId&&await h.refreshStatus()});function nn(_){o(y)===_&&o(N)?d(N,!1):(d(y,_,!0),d(N,!0))}async function Ke(_){h.connectionId=_.currentTarget.value,h.resetWorkspaceView(),await h.refreshStatus()}async function bn(_){d(ne,!1);try{const P=_.split("/").filter(Boolean).pop()||_,F=h.connection;if(F&&F.kind!=="local"){await Se.setWorkspaceRoot(F.id,_,P),await h.loadConnections(),h.resetWorkspaceView(),await h.refreshFiles("."),h.setStatus(`Opened ${_} on ${F.username}@${F.host}`),d(y,"files"),d(N,!0);return}if(F&&F.kind==="local"){await Se.setWorkspaceRoot(F.id,_,P),await h.loadConnections(),h.resetWorkspaceView(),await h.refreshFiles("."),h.setStatus(`Opened ${_}`),d(y,"files"),d(N,!0);return}const ie=await Se.createConnection({kind:"local",label:P,workspace_root:_,max_file_bytes:1e6});await h.loadConnections(),h.connectionId=ie.connection.id,h.resetWorkspaceView(),await h.connect(""),d(y,"files"),d(N,!0)}catch(P){h.setStatus(P.message||"Could not open folder")}}async function In(_){_.preventDefault();try{const P=await Se.createConnection({...o(E),port:Number(o(E).port)});d(Ze,!1),d(E,{...o(E),label:"",host:"",username:"",password:"",private_key:""},!0),await h.loadConnections(),h.connectionId=P.connection.id,await h.refreshStatus()}catch(P){h.setStatus(P.message||"Could not create connection")}}async function Jn(){const _=h.connection;if(!_)return;const P=_.kind==="local"?"workspace":"connection";if(confirm(`Remove ${P} "${_.label}"? Saved tabs are cleared; files are untouched.`))try{await Se.deleteConnection(_.id),h.connectionId="",h.resetWorkspaceView(),await h.loadConnections()}catch(F){h.setStatus(F.message||"Could not delete")}}async function Sr(){try{const _=await Se.focusTerminal(h.connectionId);h.setStatus(`Focused ${_.window_name}`,"tmux window selected")}catch(_){h.setStatus(_.message||"Could not focus terminal")}}function xn(_){var ve,$e,Te,Me;const P=_.ctrlKey||_.metaKey,F=_.key.toLowerCase(),ie=(($e=(ve=_.target)==null?void 0:ve.matches)==null?void 0:$e.call(ve,"input, textarea, select"))&&!((Me=(Te=_.target).closest)!=null&&Me.call(Te,".monaco-editor"));P&&F==="s"?(_.preventDefault(),h.saveActive()):P&&F==="p"&&!ie?(_.preventDefault(),h.connectionId&&d(q,!0)):P&&_.shiftKey&&F==="o"?(_.preventDefault(),d(ne,!0)):P&&_.shiftKey&&["e","f","g"].includes(F)?(_.preventDefault(),d(y,{e:"files",f:"search",g:"git"}[F],!0),d(N,!0)):P&&F==="b"&&!ie?(_.preventDefault(),d(N,!o(N))):P&&F==="`"?(_.preventDefault(),h.connectionState==="connected"&&d(G,!o(G))):_.key==="Escape"&&o(q)&&(_.preventDefault(),d(q,!1))}var Cr=Tv();Gn("keydown",Hs,xn);var Xn=b(Cr),yn=b(Xn);yi(yn,{size:15,class:"shrink-0 text-vs-blue"});var On=v(yn,2),wn=v(On,2),Kt=v(wn,2);let Rn;var ds=b(Kt);Si(ds,{size:13});var Zn=v(Kt,2),fs=X(Zn,!0),Ln=v(Zn,2),Er=b(Ln);fi(Er,()=>o(Ae),(_,P)=>{P(_,{size:12})});var Qn=v(Er),kn=v(Xn,2),er=b(kn),Tr=b(er);Xe(Tr,17,()=>ut,_=>_.id,(_,P)=>{var F=nv(),ie=b(F);{var ve=De=>{var Ie=ev();m(De,Ie)};H(ie,De=>{o(y)===o(P).id&&o(N)&&De(ve)})}var $e=v(ie,2);fi($e,()=>o(P).icon,(De,Ie)=>{Ie(De,{size:24,strokeWidth:1.4})});var Te=v($e,2);{var Me=De=>{var Ie=tv(),sn=X(Ie,!0);W(()=>V(sn,h.gitDirtyCount)),m(De,Ie)};H(Te,De=>{o(P).id==="git"&&h.gitDirtyCount&&De(Me)})}W(()=>{gt(F,1,`relative flex h-12 w-12 items-center justify-center ${o(y)===o(P).id&&o(N)?"text-vs-bright":"text-vs-muted hover:text-vs-fg"}`),_e(F,"title",o(P).keys?`${o(P).label} (${o(P).keys})`:o(P).label),_e(F,"aria-label",o(P).label)}),R("click",F,()=>nn(o(P).id)),m(_,F)});var tr=v(Tr,2),nr=b(tr),vs=b(nr);Zu(vs,{size:24,strokeWidth:1.4});var Nr=v(nr,2),zr=b(Nr);gd(zr,{size:24,strokeWidth:1.4});var Pr=v(er,2);{var rn=_=>{var P=hv(),F=j(P),ie=b(F);{var ve=Ie=>{Ed(Ie,{})},$e=Ie=>{Kf(Ie,{})},Te=Ie=>{qd(Ie,{})},Me=Ie=>{var sn=pv(),$n=v(j(sn),2),Pt=b($n),Dn=b(Pt);Dn.value=Dn.__value="";var Mr=v(Dn);Xe(Mr,17,()=>h.connections,Oe=>Oe.id,(Oe,Ye)=>{var Je=Ni(),Ut=X(Je),lt={};W(()=>{V(Ut,`${o(Ye).kind==="local"?"🖿 ":"⇅ "}${o(Ye).label??""}`),lt!==(lt=o(Ye).id)&&(Je.value=(Je.__value=lt)??"")}),m(Oe,Je)});var Fe;Is(Pt);var cr=v(Pt,2),At=b(cr),_s=b(At);ha(_s,{size:13});var on=v(At,2),Qo=b(on);Fs(Qo,{size:13});var ea=v(on,2);{var ta=Oe=>{var Ye=rv(),Je=j(Ye),Ut=b(Je);$i(Ut,{size:13});var lt=v(Je,2),Cn=b(lt);Ci(Cn,{size:13}),R("click",Je,g),R("click",lt,Jn),m(Oe,Ye)};H(ea,Oe=>{h.connection&&Oe(ta)})}var Mt=v(cr,2);{var St=Oe=>{var Ye=ov(),Je=b(Ye),Ut=X(Je,!0),lt=v(Je,2),Cn=v(lt,2);{var Or=an=>{var xs=sv(),ys=j(xs),ws=b(ys),Lr=v(ws,2),Dr=v(ys,2),Fr=v(Dr,2),$o=v(Fr,2);Be(ws,()=>o(p).host,Ot=>o(p).host=Ot),Be(Lr,()=>o(p).port,Ot=>o(p).port=Ot),Be(Dr,()=>o(p).username,Ot=>o(p).username=Ot),Be(Fr,()=>o(p).identity_file,Ot=>o(p).identity_file=Ot),Be($o,()=>o(p).password,Ot=>o(p).password=Ot),m(an,xs)};H(Cn,an=>{o(Ve)||an(Or)})}var Rr=v(Cn,2),xt=v(Rr,2),It=b(xt),bs=X(It,!0),Wt=v(It,2);W(()=>{V(Ut,o(Ve)?"Folder settings":"SSH connection settings"),It.disabled=o(f),V(bs,o(f)?"Saving…":"Save")}),Be(lt,()=>o(p).label,an=>o(p).label=an),Be(Rr,()=>o(p).workspace_root,an=>o(p).workspace_root=an),R("click",It,k),R("click",Wt,()=>d(c,!1)),m(Oe,Ye)};H(Mt,Oe=>{o(c)&&h.connection&&Oe(St)})}var Fn=v(Mt,2);{var Sn=Oe=>{var Ye=lv(),Je=j(Ye);{var Ut=xt=>{var It=av();Be(It,()=>o(ue),bs=>d(ue,bs)),m(xt,It)};H(Je,xt=>{!o(Ve)&&!h.connection.has_password&&xt(Ut)})}var lt=v(Je,2),Cn=X(lt,!0),Or=v(lt,2);{var Rr=xt=>{var It=iv();R("click",It,()=>h.needsHostKey=!0),m(xt,It)};H(Or,xt=>{o(Ve)||xt(Rr)})}W(()=>V(Cn,o(Ve)?"Open workspace":"Connect")),R("click",lt,()=>h.connect(o(ue))),m(Oe,Ye)};H(Fn,Oe=>{h.connection&&h.connectionState!=="connected"&&Oe(Sn)})}var Ir=v(Fn,2);{var ur=Oe=>{var Ye=cv(),Je=X(Ye,!0);W(()=>V(Je,h.connection.workspace_root)),m(Oe,Ye)};H(Ir,Oe=>{h.connection&&Oe(ur)})}var ms=v($n,2);{var Hn=Oe=>{var Ye=vv(),Je=b(Ye),Ut=b(Je);Ut.value=Ut.__value="local";var lt=v(Ut);lt.value=lt.__value="ssh",Is(Je);var Cn=v(Je,2),Or=v(Cn,2);{var Rr=Wt=>{var an=fv(),xs=j(an),ys=v(xs,2),ws=v(ys,2),Lr=v(ws,2),Dr=b(Lr);Dr.value=Dr.__value="agent";var Fr=v(Dr);Fr.value=Fr.__value="key";var $o=v(Fr);$o.value=$o.__value="password",Is(Lr);var Ot=v(Lr,2);{var Wl=ft=>{var ks=uv(),So=j(ks),Yl=v(So,2);Be(So,()=>o(E).identity_file,na=>o(E).identity_file=na),Be(Yl,()=>o(E).private_key,na=>o(E).private_key=na),m(ft,ks)};H(Ot,ft=>{o(E).auth_mode==="key"&&ft(Wl)})}var ql=v(Ot,2);{var Gl=ft=>{var ks=dv();Be(ks,()=>o(E).password,So=>o(E).password=So),m(ft,ks)};H(ql,ft=>{o(E).auth_mode==="password"&&ft(Gl)})}Be(xs,()=>o(E).host,ft=>o(E).host=ft),Be(ys,()=>o(E).username,ft=>o(E).username=ft),Be(ws,()=>o(E).port,ft=>o(E).port=ft),da(Lr,()=>o(E).auth_mode,ft=>o(E).auth_mode=ft),m(Wt,an)};H(Or,Wt=>{o(E).kind==="ssh"&&Wt(Rr)})}var xt=v(Or,2),It=v(xt,2),bs=v(b(It),2);W(()=>{_e(xt,"placeholder",o(E).kind==="local"?"/var/www/app":"Workspace root"),xt.required=o(E).kind==="local"}),Gn("submit",Ye,In),da(Je,()=>o(E).kind,Wt=>o(E).kind=Wt),Be(Cn,()=>o(E).label,Wt=>o(E).label=Wt),Be(xt,()=>o(E).workspace_root,Wt=>o(E).workspace_root=Wt),R("click",bs,()=>d(Ze,!1)),m(Oe,Ye)};H(ms,Oe=>{o(Ze)&&Oe(Hn)})}W(()=>{Fe!==(Fe=h.connectionId)&&(Pt.value=(Pt.__value=Fe)??"",Bs(Pt,Fe))}),R("change",Pt,Ke),R("click",At,()=>d(ne,!0)),R("click",on,()=>d(Ze,!o(Ze))),m(Ie,sn)};H(ie,Ie=>{o(y)==="files"?Ie(ve):o(y)==="search"?Ie($e,1):o(y)==="git"?Ie(Te,2):Ie(Me,-1)})}var De=v(F,2);_a(De,{side:"right",min:170,max:620,onreset:()=>d(K,L.sidebar,!0),get size(){return o(K)},set size(Ie){d(K,Ie,!0)}}),W(()=>Kr(F,`width: ${o(K)??""}px`)),m(_,P)};H(Pr,_=>{o(N)&&_(rn)})}var rr=v(Pr,2),sr=b(rr);{var or=_=>{var P=gv(),F=b(P);yi(F,{size:64,strokeWidth:1,class:"text-vs-line"});var ie=v(F,4),ve=b(ie),$e=b(ve);ha($e,{size:16});var Te=v(ve,2),Me=b(Te);ki(Me,{size:16}),R("click",ve,()=>d(ne,!0)),R("click",Te,()=>{d(y,"remote"),d(N,!0),d(Ze,!0)}),m(_,P)},Ar=_=>{var P=yv(),F=j(P);sf(F,{});var ie=v(F,2),ve=b(ie);Qd(ve,{});var $e=v(ie,2);{var Te=Me=>{var De=xv(),Ie=j(De);{var sn=Mt=>{_a(Mt,{side:"top",min:120,max:640,onreset:()=>d(S,L.panel,!0),get size(){return o(S)},set size(St){d(S,St,!0)}})};H(Ie,Mt=>{o(G)&&Mt(sn)})}var $n=v(Ie,2),Pt=b($n),Dn=b(Pt);Si(Dn,{size:13,class:"mx-1 shrink-0"});var Mr=v(Dn,2);Xe(Mr,20,()=>o(D),Mt=>Mt,(Mt,St)=>{var Fn=mv(),Sn=b(Fn),Ir=X(Sn,!0),ur=v(Sn,2);{var ms=Hn=>{var Oe=_v(),Ye=b(Oe);Vo(Ye,{size:11}),W(()=>_e(Oe,"aria-label",`Close terminal ${St+1}`)),R("click",Oe,()=>xe(St)),m(Hn,Oe)};H(ur,Hn=>{o(D).length>1&&Hn(ms)})}W(()=>{var Hn;gt(Fn,1,`group flex shrink-0 items-center gap-1 rounded-sm px-2 py-0.5
                           ${St===o(B)?"bg-vs-hover text-vs-fg":"text-vs-muted hover:text-vs-fg"}`),V(Ir,St===0?((Hn=h.connection)==null?void 0:Hn.label)||"Terminal":`Terminal ${St+1}`)}),R("click",Sn,()=>d(B,St,!0)),m(Mt,Fn)});var Fe=v(Mr,2),cr=b(Fe);Fs(cr,{size:14});var At=v(Fe,2),_s=b(At);pn(_s,{size:15});var on=v(At,2),Qo=b(on);Ci(Qo,{size:13});var ea=v(Pt,2),ta=b(ea);Su(ta,()=>h.connectionId,Mt=>{var St=Q(),Fn=j(St);Xe(Fn,16,()=>o(D),Sn=>Sn,(Sn,Ir)=>{var ur=bv(),ms=b(ur);Af(ms,{get rootPath(){return s()},get session(){return r()},get index(){return Ir}}),W(()=>_e(ur,"hidden",Ir!==o(B))),m(Sn,ur)}),m(Mt,St)}),W(()=>{Kr($n,`height: ${o(S)??""}px`),_e($n,"hidden",!o(G)),Fe.disabled=o(D).length>=Y}),R("click",Fe,he),R("click",At,()=>d(G,!1)),R("click",on,()=>xe(o(B))),m(Me,De)};H($e,Me=>{o(Le)&&h.connectionState==="connected"&&Me(Te)})}m(_,P)};H(sr,_=>{h.connectionId?_(Ar,-1):_(or)})}var ps=v(rr,2);{var hs=_=>{var P=wv(),F=j(P);_a(F,{side:"left",min:260,max:760,onreset:()=>d(T,L.chat,!0),get size(){return o(T)},set size(Fe){d(T,Fe,!0)}});var ie=v(F,2),ve=b(ie),$e=b(ve);wi($e,{size:13,class:"shrink-0"});var Te=v($e,4);Xe(Te,20,()=>o(i),Fe=>Fe,(Fe,cr)=>{var At=Ni(),_s=X(At,!0),on={};W(()=>{V(_s,cr),on!==(on=cr)&&(At.value=(At.__value=on)??"")}),m(Fe,At)}),Is(Te);var Me=v(Te,2),De=b(Me);{var Ie=Fe=>{Qt(Fe,{size:13,class:"animate-spin"})},sn=Fe=>{Fs(Fe,{size:14})};H(De,Fe=>{o(l)?Fe(Ie):Fe(sn,-1)})}var $n=v(Me,2),Pt=b($n);Vo(Pt,{size:14});var Dn=v(ve,2),Mr=b(Dn);$f(Mr,{get sessions(){return o(i)},get session(){return r()},get rootPath(){return s()},get target(){return o(a)},set target(Fe){d(a,Fe,!0)}}),W(()=>{Kr(ie,`width: ${o(T)??""}px`),Me.disabled=o(l)}),da(Te,()=>o(a),Fe=>d(a,Fe)),R("click",Me,$),R("click",$n,()=>d(M,!1)),m(_,P)};H(ps,_=>{o(M)&&_(hs)})}var ar=v(kn,2),ir=b(ar);{var gs=_=>{var P=kv(),F=b(P);{var ie=Me=>{ha(Me,{size:12})},ve=Me=>{ki(Me,{size:12})};H(F,Me=>{o(Ve)?Me(ie):Me(ve,-1)})}var $e=v(F),Te=v($e);$i(Te,{size:11,class:"opacity-70"}),W(()=>{_e(P,"title",`${h.connection.workspace_root??""} — click for connection settings`),V($e,` ${h.connection.label??""} `)}),R("click",P,x),m(_,P)};H(ir,_=>{h.connection&&_(gs)})}var lr=v(ir,2);{var Z=_=>{var P=$v(),F=b(P);Ma(F,{size:12});var ie=v(F);W(()=>V(ie,` ${h.gitBranch??""}`)),m(_,P)};H(lr,_=>{h.gitBranch&&_(Z)})}var Re=v(lr,2),Ee=X(Re,!0),ae=v(Re,2),Ce=b(ae);{var dt=_=>{var P=Sv(),F=X(P);W(()=>V(F,`${h.dirtyCount??""} unsaved`)),m(_,P)};H(Ce,_=>{h.dirtyCount&&_(dt)})}var Qe=v(Ce,2),zt=X(Qe,!0),w=v(Qe,2);{var I=_=>{var P=Cv(),F=j(P),ie=b(F);hd(ie,{size:12});var ve=v(F,2),$e=b(ve);rd($e,{size:12}),R("click",F,()=>d(G,!o(G))),R("click",ve,Sr),m(_,P)};H(w,_=>{h.connectionState==="connected"&&_(I)})}var J=v(w,2);{var te=_=>{var P=Ev(),F=b(P);wi(F,{size:12}),R("click",P,()=>d(M,!o(M))),m(_,P)};H(J,_=>{_(te)})}var fe=v(ar,2);{var Ne=_=>{zf(_,{onclose:()=>d(q,!1)})};H(fe,_=>{o(q)&&_(Ne)})}var ye=v(fe,2);{var we=_=>{Df(_,{onopen:bn,onclose:()=>d(ne,!1)})};H(ye,_=>{o(ne)&&_(we)})}var ge=v(ye,2);{var ke=_=>{Zf(_,{onclose:()=>h.needsHostKey=!1,ontrusted:async()=>{h.needsHostKey=!1,await h.connect(o(ue))}})};H(ge,_=>{h.needsHostKey&&_(ke)})}W(()=>{var _;wn.disabled=!h.connectionId,Rn=gt(Kt,1,"flex items-center gap-1 rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40",null,Rn,{"text-vs-bright":o(G)}),Kt.disabled=h.connectionState!=="connected",_e(Kt,"title",h.connectionState==="connected"?"Toggle terminal (Ctrl+`)":"Open a workspace to use the terminal"),_e(Zn,"title",(_=h.connection)==null?void 0:_.workspace_root),V(fs,h.connection?`${h.connection.label} — Multibuilder IDE`:"Multibuilder IDE"),gt(Ln,1,`flex items-center gap-1 ${h.connectionState==="connected"?"text-vs-green":h.connectionState==="connecting"?"text-vs-yellow":h.connectionState==="idle"?"text-vs-muted":"text-vs-red"}`),V(Qn,` ${oe[h.connectionState].label??""}`),V(Ee,h.statusText),V(zt,h.detailText)}),R("click",On,()=>d(ne,!0)),R("click",wn,()=>d(q,!0)),R("click",Kt,()=>d(G,!o(G))),R("click",nr,()=>h.setStatus("Signed in to the Multibuilder dashboard")),R("click",Nr,()=>d(N,!o(N))),m(e,Cr),bt()}Vt(["click","change"]);function Ul(e,t){return yu(Nv,{target:e,props:t})}function zi(){const e=document.getElementById("ide-root");if(!e||e.dataset.mounted)return;e.dataset.mounted="1";const t=window.__IDE_BOOTSTRAP__||{};Ul(e,{sessions:t.sessions||[],session:t.session||"",rootPath:t.rootPath||""})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",zi):zi();window.mountRemoteIde=Ul;export{Oo as _};
