const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ide-monaco.js","./ide2.css","./ide3.css"])))=>i.map(i=>d[i]);
var Bu=Object.defineProperty;var fl=t=>{throw TypeError(t)};var Uu=(t,e,n)=>e in t?Bu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Re=(t,e,n)=>Uu(t,typeof e!="symbol"?e+"":e,n),Ka=(t,e,n)=>e.has(t)||fl("Cannot "+n);var v=(t,e,n)=>(Ka(t,e,"read from private field"),n?n.call(t):e.get(t)),ne=(t,e,n)=>e.has(t)?fl("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Ee=(t,e,n,r)=>(Ka(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),je=(t,e,n)=>(Ka(t,e,"access private method"),n);var Ha=Array.isArray,ju=Array.prototype.indexOf,$a=Array.prototype.includes,Ba=Array.from,vc=Object.defineProperty,ss=Object.getOwnPropertyDescriptor,gc=Object.getOwnPropertyDescriptors,Wu=Object.prototype,Vu=Array.prototype,Di=Object.getPrototypeOf,dl=Object.isExtensible;function ao(t){return typeof t=="function"}const qu=()=>{};function Gu(t){return t()}function vi(t){for(var e=0;e<t.length;e++)t[e]()}function mc(){var t,e,n=new Promise((r,s)=>{t=r,e=s});return{promise:n,resolve:t,reject:e}}function Ku(t,e){if(Array.isArray(t))return t;if(!(Symbol.iterator in t))return Array.from(t);const n=[];for(const r of t)if(n.push(r),n.length===e)break;return n}const jt=2,Vs=4,aa=8,Fi=1<<24,ir=16,Gn=32,jr=64,gi=128,Hi=256,qn=512,Nt=1024,Ot=2048,fr=4096,pn=8192,Sn=16384,Xs=32768,Ea=1<<25,as=65536,Aa=1<<17,Yu=1<<18,Qs=1<<19,_c=1<<20,Sr=1<<25,Ss=65536,Ca=1<<21,zs=1<<22,os=1<<23,Er=Symbol("$state"),bc=Symbol("component"),xc=Symbol("legacy props"),Zu=Symbol(""),_a=Symbol("attributes"),mi=Symbol("class"),_i=Symbol("style"),vo=Symbol("text"),ba=Symbol("form reset"),ia=new class extends Error{constructor(){super(...arguments);Re(this,"name","StaleReactionError");Re(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var dc;const Bi=!!((dc=globalThis.document)!=null&&dc.contentType)&&globalThis.document.contentType.includes("xml"),Xu=1,Qu=2,yc=4,Ju=8,ef=16,tf=1,nf=2,kc=4,rf=8,sf=16,of=1,af=2,Et=Symbol("uninitialized"),wc="http://www.w3.org/1999/xhtml",Sc="http://www.w3.org/2000/svg",lf="http://www.w3.org/1998/Math/MathML",cf="@attach";function uf(){console.warn("https://svelte.dev/e/derived_inert")}function ff(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function df(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Tc(t){return t===this.v}function pf(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function $c(t){return!pf(t,this.v)}function Ec(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function hf(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function vf(t,e,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function gf(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function mf(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function _f(t){throw new Error("https://svelte.dev/e/effect_orphan")}function bf(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function xf(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function yf(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function kf(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function wf(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Sf(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Js=!1;function Tf(){Js=!0}let ut=null;function qs(t){ut=t}function hn(t,e=!1,n){ut={p:ut,i:!1,c:null,e:null,s:t,x:null,r:Ie,l:Js&&!e?{s:null,u:null,$:[]}:null}}function vn(t){var e=ut,n=e.e;if(n!==null){e.e=null;for(var r of n)Zc(r)}return e.i=!0,ut=e.p,Ui(t)}function Ui(t={}){return vc(t,bc,{value:!0}),t}function eo(){return!Js||ut!==null&&ut.l===null}let ps=[];function Ac(){var t=ps;ps=[],vi(t)}function Tr(t){if(ps.length===0&&!$o){var e=ps;queueMicrotask(()=>{e===ps&&Ac()})}ps.push(t)}function $f(){for(;ps.length>0;)Ac()}const Ef=-7169;function xt(t,e){t.f=t.f&Ef|e}function ji(t){(t.f&qn)!==0||t.deps===null?xt(t,Nt):xt(t,fr)}function Cc(t){if(t!==null)for(const e of t)(e.f&jt)===0||(e.f&Ss)===0||(e.f^=Ss,Cc(e.deps))}function Rc(t,e,n){(t.f&Ot)!==0?e.add(t):(t.f&fr)!==0&&n.add(t),Cc(t.deps),xt(t,Nt)}let pa=!1;function Af(t){var e=pa;try{return pa=!1,[t(),pa]}finally{pa=e}}function Pc(t,e){if(e){const n=document.body;t.autofocus=!0,Tr(()=>{document.activeElement===n&&t.focus()})}}let pl=!1;function Cf(){pl||(pl=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const n of t.target.elements)(e=n[ba])==null||e.call(n)})},{capture:!0}))}function to(t){var e=Fe,n=Ie;Kn(null),Yn(null);try{return t()}finally{Kn(e),Yn(n)}}function Ic(t,e,n,r=n){t.addEventListener(e,()=>to(n));const s=t[ba];s?t[ba]=()=>{s(),r(!0)}:t[ba]=()=>r(!0),Cf()}function Nc(t,e,n,r){const s=eo()?Gs:Wi;var o=t.filter(T=>!T.settled),a=e.map(s);if(n.length===0&&o.length===0){r(a);return}var l=Ie,c=Rf(),p=o.length===1?o[0].promise:o.length>1?Promise.all(o.map(T=>T.promise)):null;function f(T){if((l.f&Sn)===0){c();try{r([...a,...T])}catch(b){wr(b,l)}Ra()}}var _=Oc();if(n.length===0){p.then(()=>f([])).finally(_);return}function d(){Promise.all(n.map(T=>Pf(T))).then(f).catch(T=>wr(T,l)).finally(_)}p?p.then(()=>{c(),d(),Ra()}):d()}function Rf(){var t=Ie,e=Fe,n=ut,r=me;return function(o=!0){Yn(t),Kn(e),qs(n),o&&(t.f&Sn)===0&&(r==null||r.activate(),r==null||r.apply())}}function Ra(t=!0){Yn(null),Kn(null),qs(null),t&&(me==null||me.deactivate())}function Oc(){var t=Ie,e=t.b,n=me,r=!!(e!=null&&e.is_rendered());return e==null||e.update_pending_count(1,n),n.increment(r,t),()=>{e==null||e.update_pending_count(-1,n),n.decrement(r,t)}}function Gs(t){var e=jt|Ot;return Ie!==null&&(Ie.f|=Qs),{ctx:ut,deps:null,effects:null,equals:Tc,f:e,fn:t,reactions:null,rv:0,v:Et,wv:0,parent:Ie,ac:null}}const go=Symbol("obsolete");function Pf(t,e,n){let r=Ie;r===null&&hf();var s=void 0,o=Wr(Et),a=!Fe,l=new Set;return qf(()=>{var T,b;var c=Ie,p=mc();s=p.promise;try{Promise.resolve(t()).then(p.resolve,w=>{w!==ia&&p.reject(w)}).finally(Ra)}catch(w){p.reject(w),Ra()}var f=me;if(a){if((c.f&Xs)!==0)var _=Oc();if((T=r.b)!=null&&T.is_rendered())(b=f.async_deriveds.get(c))==null||b.reject(go);else for(const w of l.values())w.reject(go);l.add(p),f.async_deriveds.set(c,p)}const d=(w,A=void 0)=>{_==null||_(),l.delete(p),A!==go&&(f.activate(),A?(o.f|=os,Ks(o,A)):((o.f&os)!==0&&(o.f^=os),Ks(o,w)),f.deactivate())};p.promise.then(d,w=>d(null,w||"unknown"))}),ja(()=>{for(const c of l)c.reject(go)}),new Promise(c=>{function p(f){function _(){f===s?c(o):p(s)}f.then(_,_)}p(s)})}function Bt(t){const e=Gs(t);return ru(e),e}function Wi(t){const e=Gs(t);return e.equals=$c,e}function If(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)nn(e[n])}}function Vi(t){var e,n=Ie,r=t.parent;if(!Vr&&r!==null&&t.v!==Et&&(r.f&(Sn|pn))!==0)return uf(),t.v;Yn(r);try{t.f&=~Ss,If(t),e=iu(t)}finally{Yn(n)}return e}function zc(t){var e=Vi(t);if(!t.equals(e)&&(t.wv=ou(),(!(me!=null&&me.is_fork)||t.deps===null)&&(me!==null?(me.capture(t,e,!0),To==null||To.capture(t,e,!0)):t.v=e,t.deps===null))){xt(t,Nt);return}Vr||(en!==null?(Ki()||me!=null&&me.is_fork)&&en.set(t,e):ji(t))}function Nf(t){var e;if(t.effects!==null)for(const n of t.effects)(n.teardown||n.ac)&&((e=n.teardown)==null||e.call(n),n.ac!==null&&to(()=>{n.ac.abort(ia),n.ac=null}),n.fn!==null&&(n.teardown=qu),Co(n,0),Zi(n))}function Mc(t){if(t.effects!==null)for(const e of t.effects)e.teardown&&e.fn!==null&&Ys(e)}let Ya=null,Rs=null,me=null,To=null,en=null,bi=null,$o=!1,Za=!1,Os=null,xa=null;var hl=0;let Of=1;var Ds,ns,gs,Fs,Hs,Bs,Hr,Us,xn,Po,Br,rr,xr,js,ms,nt,xi,mo,yi,Lc,Dc,Is,zf,_o;const La=class La{constructor(){ne(this,nt);Re(this,"id",Of++);ne(this,Ds,!1);Re(this,"linked",!0);ne(this,ns,null);ne(this,gs,null);Re(this,"async_deriveds",new Map);Re(this,"current",new Map);Re(this,"previous",new Map);ne(this,Fs,new Set);ne(this,Hs,new Set);ne(this,Bs,0);ne(this,Hr,new Map);ne(this,Us,null);ne(this,xn,[]);ne(this,Po,[]);ne(this,Br,new Set);ne(this,rr,new Set);ne(this,xr,new Map);ne(this,js,new Set);Re(this,"is_fork",!1);ne(this,ms,!1);Rs===null?Ya=Rs=this:(Ee(Rs,gs,this),Ee(this,ns,Rs)),Rs=this}skip_effect(e){v(this,xr).has(e)||v(this,xr).set(e,{d:[],m:[]}),v(this,js).delete(e)}unskip_effect(e,n=r=>this.schedule(r)){var r=v(this,xr).get(e);if(r){v(this,xr).delete(e);for(var s of r.d)xt(s,Ot),n(s);for(s of r.m)xt(s,fr),n(s)}v(this,js).add(e)}capture(e,n,r=!1){e.v!==Et&&!this.previous.has(e)&&this.previous.set(e,e.v),(e.f&os)===0&&(this.current.set(e,[n,r]),en==null||en.set(e,n)),this.is_fork||(e.v=n)}activate(){me=this}deactivate(){me=null,en=null}flush(){try{Za=!0,me=this,je(this,nt,mo).call(this)}finally{hl=0,bi=null,Os=null,xa=null,Za=!1,me=null,en=null,Ar.clear()}}discard(){var e;for(const n of v(this,Hs))n(this);v(this,Hs).clear();for(const n of this.async_deriveds.values())n.reject(go);je(this,nt,_o).call(this),(e=v(this,Us))==null||e.resolve()}register_created_effect(e){v(this,Po).push(e)}increment(e,n){if(Ee(this,Bs,v(this,Bs)+1),e){let r=v(this,Hr).get(n)??0;v(this,Hr).set(n,r+1)}}decrement(e,n){if(Ee(this,Bs,v(this,Bs)-1),e){let r=v(this,Hr).get(n)??0;r===1?v(this,Hr).delete(n):v(this,Hr).set(n,r-1)}v(this,ms)||(Ee(this,ms,!0),Tr(()=>{Ee(this,ms,!1),this.linked&&this.flush()}))}transfer_effects(e,n){for(const r of e)v(this,Br).add(r);for(const r of n)v(this,rr).add(r);e.clear(),n.clear()}oncommit(e){v(this,Fs).add(e)}ondiscard(e){v(this,Hs).add(e)}settled(){return(v(this,Us)??Ee(this,Us,mc())).promise}static ensure(){if(me===null){const e=me=new La;!Za&&!$o&&Tr(()=>{v(e,Ds)||e.flush()})}return me}apply(){{en=null;return}}schedule(e){var s;if(bi=e,(s=e.b)!=null&&s.is_pending&&(e.f&(Vs|aa|Fi))!==0&&(e.f&Xs)===0){e.b.defer_effect(e);return}for(var n=e;n.parent!==null;){n=n.parent;var r=n.f;if(Os!==null&&n===Ie&&(Fe===null||(Fe.f&jt)===0))return;if((r&(jr|Gn))!==0){if((r&Nt)===0)return;n.f^=Nt}}v(this,xn).push(n)}};Ds=new WeakMap,ns=new WeakMap,gs=new WeakMap,Fs=new WeakMap,Hs=new WeakMap,Bs=new WeakMap,Hr=new WeakMap,Us=new WeakMap,xn=new WeakMap,Po=new WeakMap,Br=new WeakMap,rr=new WeakMap,xr=new WeakMap,js=new WeakMap,ms=new WeakMap,nt=new WeakSet,xi=function(){if(this.is_fork)return!0;for(const r of v(this,Hr).keys()){for(var e=r,n=!1;e.parent!==null;){if(v(this,xr).has(e)){n=!0;break}e=e.parent}if(!n)return!0}return!1},mo=function(){var c,p,f,_;Ee(this,Ds,!0),hl++>1e3&&(je(this,nt,_o).call(this),Lf());for(const d of v(this,Br))v(this,rr).delete(d),xt(d,Ot),this.schedule(d);for(const d of v(this,rr))xt(d,fr),this.schedule(d);const e=v(this,xn);Ee(this,xn,[]),this.apply();var n=Os=[],r=[],s=xa=[];for(const d of e)try{je(this,nt,yi).call(this,d,n,r)}catch(T){throw Bc(d),je(this,nt,xi).call(this)||this.discard(),T}if(me=null,s.length>0){var o=La.ensure();for(const d of s)o.schedule(d)}if(Os=null,xa=null,je(this,nt,xi).call(this)){je(this,nt,Is).call(this,r),je(this,nt,Is).call(this,n);for(const[d,T]of v(this,xr))Hc(d,T);s.length>0&&je(c=me,nt,mo).call(c);return}const a=je(this,nt,Lc).call(this);if(a){je(this,nt,Is).call(this,r),je(this,nt,Is).call(this,n),je(p=a,nt,Dc).call(p,this);return}v(this,Br).clear(),v(this,rr).clear();for(const d of v(this,Fs))d(this);v(this,Fs).clear(),To=this,vl(r),vl(n),To=null,(f=v(this,Us))==null||f.resolve();var l=me;if(v(this,Bs)===0&&(v(this,xn).length===0||l!==null)&&je(this,nt,_o).call(this),v(this,xn).length>0)if(l!==null){const d=l;v(d,xn).push(...v(this,xn).filter(T=>!v(d,xn).includes(T)))}else l=this;l!==null&&(Ar.clear(),je(_=l,nt,mo).call(_))},yi=function(e,n,r){e.f^=Nt;for(var s=e.first;s!==null;){var o=s.f,a=(o&(Gn|jr))!==0,l=a&&(o&Nt)!==0,c=l||(o&pn)!==0||v(this,xr).has(s);if(!c&&s.fn!==null){a?s.f^=Nt:(o&Vs)!==0?n.push(s):ca(s)&&((o&ir)!==0&&v(this,rr).add(s),Ys(s));var p=s.first;if(p!==null){s=p;continue}}for(;s!==null;){var f=s.next;if(f!==null){s=f;break}s=s.parent}}},Lc=function(){for(var e=v(this,ns);e!==null;){if(!e.is_fork){for(const[n,[,r]]of this.current)if(e.current.has(n)&&!r)return e}e=v(e,ns)}return null},Dc=function(e){var r;for(const[s,o]of e.current)!this.previous.has(s)&&e.previous.has(s)&&this.previous.set(s,e.previous.get(s)),this.current.set(s,o);for(const[s,o]of e.async_deriveds){const a=this.async_deriveds.get(s);a&&o.promise.then(a.resolve).catch(a.reject)}e.async_deriveds.clear(),this.transfer_effects(v(e,Br),v(e,rr));const n=s=>{var o=s.reactions;if(o!==null&&!((s.f&jt)!==0&&(s.f&(Ot|fr))===0))for(const c of o){var a=c.f;if((a&jt)!==0)n(c);else{var l=c;a&(zs|ir)&&!this.async_deriveds.has(l)&&(v(this,rr).delete(l),xt(l,Ot),this.schedule(l))}}};for(const s of this.current.keys())n(s);this.oncommit(()=>e.discard()),je(r=e,nt,_o).call(r),me=this,je(this,nt,mo).call(this)},Is=function(e){for(var n=0;n<e.length;n+=1)Rc(e[n],v(this,Br),v(this,rr))},zf=function(){var _;for(let d=Ya;d!==null;d=v(d,gs)){var e=d.id<this.id,n=[];for(const[T,[b,w]]of this.current){if(d.current.has(T)){var r=d.current.get(T)[0];if(e&&b!==r)d.current.set(T,[b,w]);else continue}n.push(T)}if(e)for(const[T,b]of this.async_deriveds){const w=d.async_deriveds.get(T);w&&b.promise.then(w.resolve).catch(w.reject)}var s=[...d.current.keys()].filter(T=>!d.current.get(T)[1]);if(!(!v(d,Ds)||s.length===0)){var o=s.filter(T=>!this.current.has(T));if(o.length===0)e&&d.discard();else if(n.length>0){if(e)for(const T of v(this,js))d.unskip_effect(T,b=>{var w;(b.f&(ir|zs))!==0?d.schedule(b):je(w=d,nt,Is).call(w,[b])});d.activate();var a=new Set,l=new Map;for(var c of n)Fc(c,o,a,l);l=new Map;var p=[...d.current].filter(([T,b])=>{const w=this.current.get(T);return w?w[0]!==b[0]||w[1]!==b[1]:!0}).map(([T])=>T);if(p.length>0)for(const T of v(this,Po))(T.f&(Sn|pn|Aa))===0&&qi(T,p,l)&&((T.f&(zs|ir))!==0?(xt(T,Ot),d.schedule(T)):v(d,Br).add(T));if(v(d,xn).length>0&&!v(d,ms)){d.apply();for(var f of v(d,xn))je(_=d,nt,yi).call(_,f,[],[]);Ee(d,xn,[])}d.deactivate()}}}},_o=function(){if(this.linked){var e=v(this,ns),n=v(this,gs);e===null?Ya=n:Ee(e,gs,n),n===null?Rs=e:Ee(n,ns,e),this.linked=!1}};let Ts=La;function Mf(t){var e=$o;$o=!0;try{for(var n;;){if($f(),me===null)return n;me.flush()}}finally{$o=e}}function Lf(){try{bf()}catch(t){wr(t,bi)}}let nr=null;function vl(t){var e=t.length;if(e!==0){for(var n=0;n<e;){var r=t[n++];if((r.f&(Sn|pn))===0&&ca(r)&&(nr=new Set,Ys(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&eu(r),(nr==null?void 0:nr.size)>0)){Ar.clear();for(const s of nr){if((s.f&(Sn|pn))!==0)continue;const o=[s];let a=s.parent;for(;a!==null;)nr.has(a)&&(nr.delete(a),o.push(a)),a=a.parent;for(let l=o.length-1;l>=0;l--){const c=o[l];(c.f&(Sn|pn))===0&&Ys(c)}}nr.clear()}}nr=null}}function Fc(t,e,n,r){if(!n.has(t)&&(n.add(t),t.reactions!==null))for(const s of t.reactions){const o=s.f;(o&jt)!==0?Fc(s,e,n,r):(o&(zs|ir))!==0&&(o&Ot)===0&&qi(s,e,r)&&(xt(s,Ot),Gi(s))}}function qi(t,e,n){const r=n.get(t);if(r!==void 0)return r;if(t.deps!==null)for(const s of t.deps){if($a.call(e,s))return!0;if((s.f&jt)!==0&&qi(s,e,n))return n.set(s,!0),!0}return n.set(t,!1),!1}function Gi(t){me.schedule(t)}function Hc(t,e){if(!((t.f&Gn)!==0&&(t.f&Nt)!==0)){(t.f&Ot)!==0?e.d.push(t):(t.f&fr)!==0&&e.m.push(t),xt(t,Nt);for(var n=t.first;n!==null;)Hc(n,e),n=n.next}}function Bc(t){xt(t,Nt);for(var e=t.first;e!==null;)Bc(e),e=e.next}let Pa=new Set;const Ar=new Map;let Uc=!1;function Wr(t,e){var n={f:0,v:t,reactions:null,equals:Tc,rv:0,wv:0};return n}function L(t,e){const n=Wr(t);return ru(n),n}function Df(t,e=!1,n=!0){var s;const r=Wr(t);return e||(r.equals=$c),Js&&n&&ut!==null&&ut.l!==null&&((s=ut.l).s??(s.s=[])).push(r),r}function h(t,e,n=!1){Fe!==null&&(!cr||(Fe.f&Aa)!==0)&&eo()&&(Fe.f&(jt|ir|zs|Aa))!==0&&(Rr===null||!Rr.has(t))&&wf();let r=n?Qe(e):e;return Ks(t,r,xa)}function Ks(t,e,n=null){if(!t.equals(e)){Vr?Ar.set(t,e):Ar.has(t)||Ar.set(t,t.v);var r=Ts.ensure();if(r.capture(t,e),(t.f&jt)!==0){const s=t;(t.f&Ot)!==0&&Vi(s),en===null&&ji(s)}t.wv=ou(),jc(t,Ot,n),eo()&&Ie!==null&&(Ie.f&Nt)!==0&&(Ie.f&(Gn|jr))===0&&(jn===null?Kf([t]):jn.push(t)),!r.is_fork&&Pa.size>0&&!Uc&&Ff()}return e}function Ff(){Uc=!1;for(const t of Pa){(t.f&Nt)!==0&&xt(t,fr);let e;try{e=ca(t)}catch{e=!0}e&&Ys(t)}Pa.clear()}function gl(t,e=1){var n=i(t),r=e===1?n++:n--;return h(t,n),r}function Eo(t){h(t,t.v+1)}function jc(t,e,n){var r=t.reactions;if(r!==null)for(var s=eo(),o=r.length,a=0;a<o;a++){var l=r[a],c=l.f;if(!(!s&&l===Ie)){var p=(c&Ot)===0;if(p&&xt(l,e),(c&Aa)!==0)Pa.add(l);else if((c&jt)!==0){var f=l;en==null||en.delete(f),(c&Ss)===0&&(c&qn&&(Ie===null||(Ie.f&Ca)===0)&&(l.f|=Ss),jc(f,fr,n))}else if(p){var _=l;(c&ir)!==0&&nr!==null&&nr.add(_),n!==null?n.push(_):Gi(_)}}}}function Qe(t){if(typeof t!="object"||t===null||Er in t||bc in t)return t;const e=Di(t);if(e!==Wu&&e!==Vu)return t;var n=new Map,r=Ha(t),s=L(0),o=ks,a=l=>{if(ks===o)return l();var c=Fe,p=ks;Kn(null),bl(o);var f=l();return Kn(c),bl(p),f};return r&&n.set("length",L(t.length)),new Proxy(t,{defineProperty(l,c,p){(!("value"in p)||p.configurable===!1||p.enumerable===!1||p.writable===!1)&&yf();var f=n.get(c);return f===void 0?a(()=>{var _=L(p.value);return n.set(c,_),_}):h(f,p.value,!0),!0},deleteProperty(l,c){var p=n.get(c);if(p===void 0){if(c in l){const f=a(()=>L(Et));n.set(c,f),Eo(s)}}else h(p,Et),Eo(s);return!0},get(l,c,p){var T;if(c===Er)return t;var f=n.get(c),_=c in l;if(f===void 0&&(!_||(T=ss(l,c))!=null&&T.writable)&&(f=a(()=>{var b=Qe(_?l[c]:Et),w=L(b);return w}),n.set(c,f)),f!==void 0){var d=i(f);return d===Et?void 0:d}return Reflect.get(l,c,p)},getOwnPropertyDescriptor(l,c){var p=Reflect.getOwnPropertyDescriptor(l,c);if(p&&"value"in p){var f=n.get(c);f&&(p.value=i(f))}else if(p===void 0){var _=n.get(c),d=_==null?void 0:_.v;if(_!==void 0&&d!==Et)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return p},has(l,c){var d;if(c===Er)return!0;var p=n.get(c),f=p!==void 0&&p.v!==Et||Reflect.has(l,c);if(p!==void 0||Ie!==null&&(!f||(d=ss(l,c))!=null&&d.writable)){p===void 0&&(p=a(()=>{var T=f?Qe(l[c]):Et,b=L(T);return b}),n.set(c,p));var _=i(p);if(_===Et)return!1}return f},set(l,c,p,f){var B;var _=n.get(c),d=c in l;if(r&&c==="length")for(var T=p;T<_.v;T+=1){var b=n.get(T+"");b!==void 0?h(b,Et):T in l&&(b=a(()=>L(Et)),n.set(T+"",b))}if(_===void 0)(!d||(B=ss(l,c))!=null&&B.writable)&&(_=a(()=>L(void 0)),h(_,Qe(p)),n.set(c,_));else{d=_.v!==Et;var w=a(()=>Qe(p));h(_,w)}var A=Reflect.getOwnPropertyDescriptor(l,c);if(A!=null&&A.set&&A.set.call(f,p),!d){if(r&&typeof c=="string"){var O=n.get("length"),U=Number(c);Number.isInteger(U)&&U>=O.v&&h(O,U+1)}Eo(s)}return!0},ownKeys(l){i(s);var c=Reflect.ownKeys(l).filter(_=>{var d=n.get(_);return d===void 0||d.v!==Et});for(var[p,f]of n)f.v!==Et&&!(p in l)&&c.push(p);return c},setPrototypeOf(){kf()}})}function ml(t){try{if(t!==null&&typeof t=="object"&&Er in t)return t[Er]}catch{}return t}function Wc(t,e){return Object.is(ml(t),ml(e))}var $s,Vc,qc,Gc;function Hf(){if($s===void 0){$s=window,Vc=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,n=Text.prototype;qc=ss(e,"firstChild").get,Gc=ss(e,"nextSibling").get,dl(t)&&(t[mi]=void 0,t[_a]=null,t[_i]=void 0,t.__e=void 0),dl(n)&&(n[vo]=void 0)}}function Cr(t=""){return document.createTextNode(t)}function lr(t){return qc.call(t)}function la(t){return Gc.call(t)}function S(t,e){return lr(t)}function q(t,e=!1){{var n=lr(t);return n instanceof Comment&&n.data===""?la(n):n}}function ae(t,e=!1){return lr(t)}function g(t,e=1,n=!1){let r=t;for(;e--;)r=la(r);return r}function Bf(t){t.textContent=""}function Kc(){return!1}function Ua(t,e,n){return e==null||e===wc?n?document.createElement(t,{is:n}):document.createElement(t):n?document.createElementNS(e,t,{is:n}):document.createElementNS(e,t)}function Uf(t){var e=Ie;if(e===null)return Fe.f|=os,t;if((e.f&Xs)===0&&(e.f&Vs)===0)throw t;wr(t,e)}function wr(t,e){if(!(e!==null&&(e.f&Sn)!==0)){for(;e!==null;){if((e.f&gi)!==0&&(e.f&(Sn|Ea))===0){if((e.f&Xs)===0)throw t;try{e.b.error(t);return}catch(n){t=n}}e=e.parent}throw t}}function Yc(t){Ie===null&&(Fe===null&&_f(),mf()),Vr&&gf()}function jf(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function dr(t,e){var n=Ie;n!==null&&(n.f&pn)!==0&&(t|=pn);var r={ctx:ut,deps:null,nodes:null,f:t|Ot|qn,first:null,fn:e,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};me==null||me.register_created_effect(r);var s=r;if((t&Vs)!==0)Os!==null?Os.push(r):Ts.ensure().schedule(r);else if(e!==null){try{Ys(r)}catch(a){throw nn(r),a}s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&Qs)===0&&(s=s.first,(t&ir)!==0&&(t&as)!==0&&s!==null&&(s.f|=as))}if(s!==null&&(s.parent=n,n!==null&&jf(s,n),Fe!==null&&(Fe.f&jt)!==0&&(t&jr)===0)){var o=Fe;(o.effects??(o.effects=[])).push(s)}return r}function Ki(){return Fe!==null&&!cr}function ja(t){const e=dr(aa,null);return xt(e,Nt),e.teardown=t,e}function tn(t){Yc();var e=Ie.f,n=!Fe&&(e&Gn)!==0&&ut!==null&&!ut.i;if(n){var r=ut;(r.e??(r.e=[])).push(t)}else return Zc(t)}function Zc(t){return dr(Vs|_c,t)}function Wf(t){return Yc(),dr(aa|_c,t)}function Vf(t){Ts.ensure();const e=dr(jr|Qs,t);return(n={})=>new Promise(r=>{n.outro?ys(e,()=>{nn(e),r(void 0)}):(nn(e),r(void 0))})}function Wa(t){return dr(Vs,t)}function qf(t){return dr(zs|Qs,t)}function Yi(t,e=0){return dr(aa|e,t)}function X(t,e=[],n=[],r=[]){Nc(r,e,n,s=>{dr(aa,()=>{t(...s.map(i))})})}function no(t,e=0){var n=dr(ir|e,t);return n}function Xc(t,e=0){var n=dr(Fi|e,t);return n}function kn(t){return dr(Gn|Qs,t)}function Qc(t){var e=t.teardown;if(e!==null){const n=Vr,r=Fe;_l(!0),Kn(null);try{e.call(null)}catch(s){wr(s,t.parent)}finally{_l(n),Kn(r)}}}function Zi(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){const s=n.ac;s!==null&&to(()=>{s.abort(ia)});var r=n.next;(n.f&jr)!==0?n.parent=null:nn(n,e),n=r}}function Gf(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&Gn)===0&&nn(e),e=n}}function nn(t,e=!0){var n=!1;(e||(t.f&Yu)!==0)&&t.nodes!==null&&t.nodes.end!==null&&(Jc(t.nodes.start,t.nodes.end),n=!0),t.f|=Ea,Zi(t,e&&!n),Co(t,0);var r=t.nodes&&t.nodes.t;if(r!==null)for(const o of r)o.stop();Qc(t),t.f^=Ea,t.f|=Sn;var s=t.parent;s!==null&&s.first!==null&&eu(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes=t.ac=t.b=null}function Jc(t,e){for(;t!==null;){var n=t===e?null:la(t);t.remove(),t=n}}function eu(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function ys(t,e,n=!0){var r=[];t.f|=Hi,tu(t,r,!0);var s=()=>{n&&nn(t),e&&e()},o=r.length;if(o>0){var a=()=>--o||s();for(var l of r)l.out(a)}else s()}function tu(t,e,n){if((t.f&pn)===0){t.f^=pn;var r=t.nodes&&t.nodes.t;if(r!==null)for(const l of r)(l.is_global||n)&&e.push(l);for(var s=t.first;s!==null;){var o=s.next;if((s.f&jr)===0){var a=(s.f&as)!==0||(s.f&Gn)!==0&&(t.f&ir)!==0;tu(s,e,a?n:!1)}s=o}}}function Ia(t){t.f&=~Hi,nu(t,!0)}function nu(t,e){if((t.f&Hi)===0&&(t.f&pn)!==0){t.f^=pn,(t.f&Nt)===0&&(xt(t,Ot),Ts.ensure().schedule(t));for(var n=t.first;n!==null;){var r=n.next,s=(n.f&as)!==0||(n.f&Gn)!==0;nu(n,s?e:!1),n=r}var o=t.nodes&&t.nodes.t;if(o!==null)for(const a of o)(a.is_global||e)&&a.in()}}function Xi(t,e){if(t.nodes)for(var n=t.nodes.start,r=t.nodes.end;n!==null;){var s=n===r?null:la(n);e.append(n),n=s}}let ya=!1,Vr=!1;function _l(t){Vr=t}let Fe=null,cr=!1;function Kn(t){Fe=t}let Ie=null;function Yn(t){Ie=t}let Rr=null;function ru(t){Fe!==null&&(Rr??(Rr=new Set)).add(t)}let wn=null,zn=0,jn=null;function Kf(t){jn=t}let su=1,hs=0,ks=hs;function bl(t){ks=t}function ou(){return++su}function ca(t){var e=t.f;if((e&Ot)!==0)return!0;if(e&jt&&(t.f&=~Ss),(e&fr)!==0){for(var n=t.deps,r=n.length,s=0;s<r;s++){var o=n[s];if(ca(o)&&zc(o),o.wv>t.wv)return!0}(e&qn)!==0&&en===null&&xt(t,Nt)}return!1}function au(t,e,n=!0){var r=t.reactions;if(r!==null&&!(Rr!==null&&Rr.has(t)))for(var s=0;s<r.length;s++){var o=r[s];(o.f&jt)!==0?au(o,e,!1):e===o&&(n?xt(o,Ot):(o.f&Nt)!==0&&xt(o,fr),Gi(o))}}function iu(t){var e=wn,n=zn,r=jn,s=Fe,o=Rr,a=ut,l=cr,c=ks,p=t.f;wn=null,zn=0,jn=null,Fe=(p&(Gn|jr))===0?t:null,Rr=null,qs(t.ctx),cr=!1,ks=++hs,t.ac!==null&&(to(()=>{t.ac.abort(ia)}),t.ac=null);try{t.f|=Ca;var f=t.fn,_=f();t.f|=Xs;var d=xl(t);if(eo()&&jn!==null&&!cr&&d!==null&&(t.f&(jt|fr|Ot))===0)for(var T=0;T<jn.length;T++)au(jn[T],t);if(s!==null&&s!==t){if(hs++,s.deps!==null)for(let b=0;b<n;b+=1)s.deps[b].rv=hs;if(e!==null)for(const b of e)b.rv=hs;jn!==null&&(r===null?r=jn:r.push(...jn))}return(t.f&os)!==0&&(t.f^=os),_}catch(b){return xl(t),Uf(b)}finally{t.f^=Ca,wn=e,zn=n,jn=r,Fe=s,Rr=o,qs(a),cr=l,ks=c}}function xl(t){var s;var e=t.deps,n=me==null?void 0:me.is_fork;if(wn!==null){var r;if(n||Co(t,zn),e!==null&&zn>0)for(e.length=zn+wn.length,r=0;r<wn.length;r++)e[zn+r]=wn[r];else t.deps=e=wn;if(Ki()&&(t.f&qn)!==0)for(r=zn;r<e.length;r++)((s=e[r]).reactions??(s.reactions=[])).push(t)}else!n&&e!==null&&zn<e.length&&(Co(t,zn),e.length=zn);return e}function Yf(t,e){let n=e.reactions;if(n!==null){var r=ju.call(n,t);if(r!==-1){var s=n.length-1;s===0?n=e.reactions=null:(n[r]=n[s],n.pop())}}if(n===null&&(e.f&jt)!==0&&(wn===null||!$a.call(wn,e))){var o=e;(o.f&qn)!==0&&(o.f^=qn,o.f&=~Ss),o.v!==Et&&ji(o),o.ac!==null&&to(()=>{o.ac.abort(ia),o.ac=null,xt(o,Ot)}),Nf(o),Co(o,0)}}function Co(t,e){var n=t.deps;if(n!==null)for(var r=e;r<n.length;r++)Yf(t,n[r])}function Ys(t){var e=t.f;if((e&Sn)===0){xt(t,Nt);var n=Ie,r=ya;Ie=t,ya=(e&(Gn|jr))===0;try{(e&(ir|Fi))!==0?Gf(t):Zi(t),Qc(t);var s=iu(t);t.teardown=typeof s=="function"?s:null,t.wv=su;var o}finally{ya=r,Ie=n}}}async function Qi(){await Promise.resolve(),Mf()}function i(t){var e=t.f,n=(e&jt)!==0;if(Fe!==null&&!cr){var r=Ie!==null&&(Ie.f&Sn)!==0;if(!r&&(Rr===null||!Rr.has(t))){var s=Fe.deps;if((Fe.f&Ca)!==0)t.rv<hs&&(t.rv=hs,wn===null&&s!==null&&s[zn]===t?zn++:wn===null?wn=[t]:wn.push(t));else{Fe.deps??(Fe.deps=[]),$a.call(Fe.deps,t)||Fe.deps.push(t);var o=t.reactions;o===null?t.reactions=[Fe]:$a.call(o,Fe)||o.push(Fe)}}}if(Vr&&Ar.has(t))return Ar.get(t);if(n){var a=t;if(Vr){var l=a.v;return((a.f&Nt)===0&&a.reactions!==null||cu(a))&&(l=Vi(a)),Ar.set(a,l),l}var c=(a.f&qn)===0&&!cr&&Fe!==null&&(ya||(Fe.f&qn)!==0),p=(a.f&Xs)===0;ca(a)&&(c&&(a.f|=qn),zc(a)),c&&!p&&(Mc(a),lu(a))}if(en!=null&&en.has(t))return en.get(t);if((t.f&os)!==0)throw t.v;return t.v}function lu(t){if(t.f|=qn,t.deps!==null)for(const e of t.deps)(e.reactions??(e.reactions=[])).push(t),(e.f&jt)!==0&&(e.f&qn)===0&&(Mc(e),lu(e))}function cu(t){if(t.v===Et)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(Ar.has(e)||(e.f&jt)!==0&&cu(e))return!0;return!1}function qr(t){var e=cr;try{return cr=!0,t()}finally{cr=e}}function cs(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(Er in t)ki(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];typeof n=="object"&&n&&Er in n&&ki(n)}}}function ki(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let r in t)try{ki(t[r],e)}catch{}const n=Di(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=gc(n);for(let s in r){const o=r[s].get;if(o)try{o.call(t)}catch{}}}}}function Zf(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const Xf=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Qf(t){return Xf.includes(t)}const Jf={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function ed(t){return t=t.toLowerCase(),Jf[t]??t}const td=["touchstart","touchmove"];function nd(t){return td.includes(t)}const vs=Symbol("events"),uu=new Set,wi=new Set;function fu(t,e,n,r={}){function s(o){if(r.capture||Si.call(e,o),!o.cancelBubble)return to(()=>n==null?void 0:n.call(this,o))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?Tr(()=>{e.addEventListener(t,s,r)}):e.addEventListener(t,s,r),s}function Ut(t,e,n,r,s){var o={capture:r,passive:s},a=fu(t,e,n,o);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&ja(()=>{e.removeEventListener(t,a,o)})}function H(t,e,n){(e[vs]??(e[vs]={}))[t]=n}function Zn(t){for(var e=0;e<t.length;e++)uu.add(t[e]);for(var n of wi)n(t)}let Xa=null,Qa=!1;function Si(t){var w,A;var e=this,n=e.ownerDocument,r=t.type,s=((w=t.composedPath)==null?void 0:w.call(t))||[],o=s[0]||t.target;Xa=t,Qa||(Qa=!0,setTimeout(()=>{Qa=!1,Xa=null}));var a=0,l=Xa===t&&t[vs];if(l){var c=s.indexOf(l);if(c!==-1&&(e===document||e===window)){t[vs]=e;return}var p=s.indexOf(e);if(p===-1)return;c<=p&&(a=c)}if(o=s[a]||t.target,o!==e){vc(t,"currentTarget",{configurable:!0,get(){return o||n}});var f=Fe,_=Ie;Kn(null),Yn(null);try{for(var d,T=[];o!==null&&o!==e;){try{var b=(A=o[vs])==null?void 0:A[r];b!=null&&(!o.disabled||t.target===o)&&b.call(o,t)}catch(O){d?T.push(O):d=O}if(t.cancelBubble)break;a++,o=a<s.length?s[a]:null}if(d){for(let O of T)queueMicrotask(()=>{throw O});throw d}}finally{t[vs]=e,delete t.currentTarget,Kn(f),Yn(_)}}}var pc;const Ja=((pc=globalThis==null?void 0:globalThis.window)==null?void 0:pc.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:t=>t});function rd(t){return(Ja==null?void 0:Ja.createHTML(t))??t}function du(t){var e=Ua("template");return e.innerHTML=rd(t.replaceAll("<!>","<!---->")),e.content}function is(t,e){var n=Ie;n.nodes===null&&(n.nodes={start:t,end:e,a:null,t:null})}function N(t,e){var n=(e&of)!==0,r=(e&af)!==0,s,o=!t.startsWith("<!>");return()=>{s===void 0&&(s=du(o?t:"<!>"+t),n||(s=lr(s)));var a=r||Vc?document.importNode(s,!0):s.cloneNode(!0);if(n){var l=lr(a),c=a.lastChild;is(l,c)}else is(a,a);return a}}function sd(t,e,n="svg"){var r=!t.startsWith("<!>"),s=`<${n}>${r?t:"<!>"+t}</${n}>`,o;return()=>{if(!o){var a=du(s),l=lr(a);o=lr(l)}var c=o.cloneNode(!0);return is(c,c),c}}function pu(t,e){return sd(t,e,"svg")}function yl(t=""){{var e=Cr(t+"");return is(e,e),e}}function ue(){var t=document.createDocumentFragment(),e=document.createComment(""),n=Cr();return t.append(e,n),is(e,n),t}function y(t,e){t!==null&&t.before(e)}function od(t){let e=0,n=Wr(0),r;return()=>{Ki()&&(i(n),Yi(()=>(e===0&&(r=qr(()=>t(()=>Eo(n)))),e+=1,()=>{Tr(()=>{e-=1,e===0&&(r==null||r(),r=void 0,Eo(n))})})))}}var ad=as|Qs;function id(t,e,n,r){new ld(t,e,n,r)}var Wn,Li,Vn,_s,un,In,fn,Nn,yr,bs,rs,Ws,Io,No,Ur,Da,it,cd,ud,Ti,fd,$i,bo,ka,Ei,Ai;class ld{constructor(e,n,r,s){ne(this,it);Re(this,"parent");Re(this,"is_pending",!1);Re(this,"transform_error");ne(this,Wn);ne(this,Li,null);ne(this,Vn);ne(this,_s);ne(this,un);ne(this,In,null);ne(this,fn,null);ne(this,Nn,null);ne(this,yr,null);ne(this,bs,0);ne(this,rs,0);ne(this,Ws,!1);ne(this,Io,new Set);ne(this,No,new Set);ne(this,Ur,null);ne(this,Da,od(()=>(Ee(this,Ur,Wr(v(this,bs))),()=>{Ee(this,Ur,null)})));var o;Ee(this,Wn,e),Ee(this,Vn,n),Ee(this,_s,a=>{var l=Ie;l.b=this,l.f|=gi,r(a)}),this.parent=Ie.b,this.transform_error=s??((o=this.parent)==null?void 0:o.transform_error)??(a=>a),Ee(this,un,no(()=>{je(this,it,$i).call(this)},ad))}defer_effect(e){Rc(e,v(this,Io),v(this,No))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!v(this,Vn).pending}update_pending_count(e,n){je(this,it,Ei).call(this,e,n),Ee(this,bs,v(this,bs)+e),!(!v(this,Ur)||v(this,Ws))&&(Ee(this,Ws,!0),Tr(()=>{Ee(this,Ws,!1),v(this,Ur)&&Ks(v(this,Ur),v(this,bs))}))}get_effect_pending(){return v(this,Da).call(this),i(v(this,Ur))}error(e){if(!v(this,Vn).onerror&&!v(this,Vn).failed)throw e;me!=null&&me.is_fork?(v(this,In)&&me.skip_effect(v(this,In)),v(this,fn)&&me.skip_effect(v(this,fn)),v(this,Nn)&&me.skip_effect(v(this,Nn)),me.oncommit(()=>{je(this,it,Ai).call(this,e)})):je(this,it,Ai).call(this,e)}}Wn=new WeakMap,Li=new WeakMap,Vn=new WeakMap,_s=new WeakMap,un=new WeakMap,In=new WeakMap,fn=new WeakMap,Nn=new WeakMap,yr=new WeakMap,bs=new WeakMap,rs=new WeakMap,Ws=new WeakMap,Io=new WeakMap,No=new WeakMap,Ur=new WeakMap,Da=new WeakMap,it=new WeakSet,cd=function(){try{Ee(this,In,kn(()=>v(this,_s).call(this,v(this,Wn))))}catch(e){this.error(e)}},ud=function(e){const n=v(this,Vn).failed,{reset:r,invoke_onerror:s}=je(this,it,Ti).call(this,e);Tr(s),n&&Ee(this,Nn,kn(()=>{n(v(this,Wn),()=>e,()=>r)}))},Ti=function(e){var n=!1,r=!1;const s=()=>{if(n){df();return}n=!0,r&&Sf(),v(this,Nn)!==null&&ys(v(this,Nn),()=>{Ee(this,Nn,null)}),je(this,it,ka).call(this,()=>{je(this,it,$i).call(this)})};return{reset:s,invoke_onerror:()=>{var a,l;try{r=!0,(l=(a=v(this,Vn)).onerror)==null||l.call(a,e,s),r=!1}catch(c){wr(c,v(this,un)&&v(this,un).parent)}}}},fd=function(){const e=v(this,Vn).pending;e&&(this.is_pending=!0,Ee(this,fn,kn(()=>e(v(this,Wn)))),Tr(()=>{var n=Ee(this,yr,document.createDocumentFragment()),r=Cr(),s=!1;if(n.append(r),Ee(this,In,je(this,it,ka).call(this,()=>{try{return kn(()=>v(this,_s).call(this,r))}catch(o){try{this.error(o),s=!0}catch(a){wr(a,v(this,un).parent)}return null}})),v(this,In)===null){Ee(this,yr,null),s&&je(this,it,bo).call(this,me);return}v(this,rs)===0&&(v(this,Wn).before(n),Ee(this,yr,null),ys(v(this,fn),()=>{Ee(this,fn,null)}),je(this,it,bo).call(this,me))}))},$i=function(){try{if(this.is_pending=this.has_pending_snippet(),Ee(this,rs,0),Ee(this,bs,0),Ee(this,In,kn(()=>{v(this,_s).call(this,v(this,Wn))})),v(this,rs)>0){var e=Ee(this,yr,document.createDocumentFragment());Xi(v(this,In),e);const n=v(this,Vn).pending;Ee(this,fn,kn(()=>n(v(this,Wn))))}else je(this,it,bo).call(this,me)}catch(n){this.error(n)}},bo=function(e){this.is_pending=!1,e.transfer_effects(v(this,Io),v(this,No))},ka=function(e){var n=Ie,r=Fe,s=ut;Yn(v(this,un)),Kn(v(this,un)),qs(v(this,un).ctx);try{return Ts.ensure(),e()}finally{Yn(n),Kn(r),qs(s)}},Ei=function(e,n){var r;if(!this.has_pending_snippet()){this.parent&&je(r=this.parent,it,Ei).call(r,e,n);return}Ee(this,rs,v(this,rs)+e),v(this,rs)===0&&(je(this,it,bo).call(this,n),v(this,fn)&&ys(v(this,fn),()=>{Ee(this,fn,null)}),v(this,yr)&&(v(this,Wn).before(v(this,yr)),Ee(this,yr,null)))},Ai=function(e){v(this,In)&&(nn(v(this,In)),Ee(this,In,null)),v(this,fn)&&(nn(v(this,fn)),Ee(this,fn,null)),v(this,Nn)&&(nn(v(this,Nn)),Ee(this,Nn,null));let n=v(this,Vn).failed;const r=s=>{const{reset:o,invoke_onerror:a}=je(this,it,Ti).call(this,s);a(),n&&Ee(this,Nn,je(this,it,ka).call(this,()=>{try{return kn(()=>{var l=Ie;l.b=this,l.f|=gi,n(v(this,Wn),()=>s,()=>o)})}catch(l){return wr(l,v(this,un).parent),null}}))};Tr(()=>{var s;try{s=this.transform_error(e)}catch(o){wr(o,v(this,un)&&v(this,un).parent);return}s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(r,o=>wr(o,v(this,un)&&v(this,un).parent)):r(s)})};function Z(t,e){var n=e==null?"":typeof e=="object"?`${e}`:e;n!==(t[vo]??(t[vo]=t.nodeValue))&&(t[vo]=n,t.nodeValue=`${n}`)}function dd(t,e){return pd(t,e)}const ha=new Map;function pd(t,{target:e,anchor:n,props:r={},events:s,context:o,intro:a=!0,transformError:l}){Hf();var c=void 0,p=Vf(()=>{var f=n??e.appendChild(Cr());id(f,{pending:()=>{}},T=>{hn({});var b=ut;o&&(b.c=o),s&&(r.$$events=s),c=t(T,r)||Ui(),vn()},l);var _=new Set,d=T=>{for(var b=0;b<T.length;b++){var w=T[b];if(!_.has(w)){_.add(w);var A=nd(w);for(const B of[e,document]){var O=ha.get(B);O===void 0&&(O=new Map,ha.set(B,O));var U=O.get(w);U===void 0?(B.addEventListener(w,Si,{passive:A}),O.set(w,1)):O.set(w,U+1)}}}};return d(Ba(uu)),wi.add(d),()=>{var A;for(var T of _)for(const O of[e,document]){var b=ha.get(O),w=b.get(T);--w==0?(O.removeEventListener(T,Si),b.delete(T),b.size===0&&ha.delete(O)):b.set(T,w)}wi.delete(d),f!==n&&((A=f.parentNode)==null||A.removeChild(f))}});return hd.set(c,p),c}let hd=new WeakMap;var sr,kr,On,xs,Oo,zo,Fa;class Va{constructor(e,n=!0){Re(this,"anchor");ne(this,sr,new Map);ne(this,kr,new Map);ne(this,On,new Map);ne(this,xs,new Set);ne(this,Oo,!0);ne(this,zo,e=>{if(v(this,sr).has(e)){var n=v(this,sr).get(e),r=v(this,kr).get(n);if(r)Ia(r),v(this,xs).delete(n);else{var s=v(this,On).get(n);s&&(Ia(s.effect),v(this,kr).set(n,s.effect),v(this,On).delete(n),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[o,a]of v(this,sr)){if(v(this,sr).delete(o),o===e)break;const l=v(this,On).get(a);l&&(nn(l.effect),v(this,On).delete(a))}for(const[o,a]of v(this,kr)){if(o===n||v(this,xs).has(o))continue;const l=()=>{if(Array.from(v(this,sr).values()).includes(o)){var p=document.createDocumentFragment();Xi(a,p),p.append(Cr()),v(this,On).set(o,{effect:a,fragment:p})}else nn(a);v(this,xs).delete(o),v(this,kr).delete(o)};v(this,Oo)||!r?(v(this,xs).add(o),ys(a,l,!1)):l()}}});ne(this,Fa,e=>{v(this,sr).delete(e);const n=Array.from(v(this,sr).values());for(const[r,s]of v(this,On))n.includes(r)||(nn(s.effect),v(this,On).delete(r))});this.anchor=e,Ee(this,Oo,n)}ensure(e,n){var r=me,s=Kc();if(n&&!v(this,kr).has(e)&&!v(this,On).has(e))if(s){var o=document.createDocumentFragment(),a=Cr();o.append(a),v(this,On).set(e,{effect:kn(()=>n(a)),fragment:o})}else v(this,kr).set(e,kn(()=>n(this.anchor)));if(v(this,sr).set(r,e),s){for(const[l,c]of v(this,kr))l===e?r.unskip_effect(c):r.skip_effect(c);for(const[l,c]of v(this,On))l===e?r.unskip_effect(c.effect):r.skip_effect(c.effect);r.oncommit(v(this,zo)),r.ondiscard(v(this,Fa))}else v(this,zo).call(this,r)}}sr=new WeakMap,kr=new WeakMap,On=new WeakMap,xs=new WeakMap,Oo=new WeakMap,zo=new WeakMap,Fa=new WeakMap;function j(t,e,n=!1){var r=new Va(t),s=n?as:0;function o(a,l){r.ensure(a,l)}no(()=>{var a=!1;e((l,c=0)=>{a=!0,o(c,l)}),a||o(-1,null)},s)}const vd=Symbol("NaN");function gd(t,e,n){var r=new Va(t),s=!eo();no(()=>{var o=e();o!==o&&(o=vd),s&&o!==null&&typeof o=="object"&&(o={}),r.ensure(o,n)})}function Ji(t,e){return e}function md(t,e,n){for(var r=[],s=e.length,o,a=e.length,l=0;l<s;l++){let _=e[l];ys(_,()=>{if(o){if(o.pending.delete(_),o.done.add(_),o.pending.size===0){var d=t.outrogroups;Ci(t,Ba(o.done)),d.delete(o),d.size===0&&(t.outrogroups=null)}}else a-=1},!1)}if(a===0){var c=r.length===0&&n!==null&&t.pending.size===0;if(c){var p=n,f=p.parentNode;Bf(f),f.append(p),t.items.clear()}Ci(t,e,!c)}else o={pending:new Set(e),done:new Set},(t.outrogroups??(t.outrogroups=new Set)).add(o)}function Ci(t,e,n=!0){var r;if(t.pending.size>0){r=new Set;for(const a of t.pending.values())for(const l of a)r.add(t.items.get(l).e)}for(var s=0;s<e.length;s++){var o=e[s];if(r!=null&&r.has(o)){o.f|=Sr;const a=document.createDocumentFragment();Xi(o,a)}else nn(e[s],n)}}var kl;function _t(t,e,n,r,s,o=null){var a=t,l=new Map,c=(e&yc)!==0;if(c){var p=t;a=p.appendChild(Cr())}var f=null,_=Wi(()=>{var B=n();return Ha(B)?B:B==null?[]:Ba(B)}),d,T=new Map,b=!0;function w(B){(U.effect.f&Sn)===0&&(U.pending.delete(B),U.fallback=f,_d(U,d,a,e,r),f!==null&&(d.length===0?(f.f&Sr)===0?Ia(f):(f.f^=Sr,xo(f,null,a)):ys(f,()=>{f=null})))}function A(B){U.pending.delete(B)}var O=no(()=>{d=i(_);for(var B=d.length,Y=new Set,C=me,E=Kc(),z=0;z<B;z+=1){var J=d[z],Q=r(J,z),de=b?null:l.get(Q);de?(de.v&&Ks(de.v,J),de.i&&Ks(de.i,z),E&&C.unskip_effect(de.e)):(de=bd(l,b?a:kl??(kl=Cr()),J,Q,z,s,e,n),b||(de.e.f|=Sr),l.set(Q,de)),Y.add(Q)}if(B===0&&o&&!f&&(b?f=kn(()=>o(a)):(f=kn(()=>o(kl??(kl=Cr()))),f.f|=Sr)),B>Y.size&&vf(),!b)if(T.set(C,Y),E){for(const[pe,he]of l)Y.has(pe)||C.skip_effect(he.e);C.oncommit(w),C.ondiscard(A)}else w(C);i(_)}),U={effect:O,items:l,pending:T,outrogroups:null,fallback:f};b=!1}function io(t){for(;t!==null&&(t.f&Gn)===0;)t=t.next;return t}function _d(t,e,n,r,s){var de,pe,he,Ze,Ge,Je,K,ve,re;var o=(r&Ju)!==0,a=e.length,l=t.items,c=io(t.effect.first),p,f=null,_,d=[],T=[],b,w,A,O;if(o)for(O=0;O<a;O+=1)b=e[O],w=s(b,O),A=l.get(w).e,(A.f&Sr)===0&&((pe=(de=A.nodes)==null?void 0:de.a)==null||pe.measure(),(_??(_=new Set)).add(A));for(O=0;O<a;O+=1){if(b=e[O],w=s(b,O),A=l.get(w).e,t.outrogroups!==null)for(const se of t.outrogroups)se.pending.delete(A),se.done.delete(A);if((A.f&pn)!==0&&(Ia(A),o&&((Ze=(he=A.nodes)==null?void 0:he.a)==null||Ze.unfix(),(_??(_=new Set)).delete(A))),(A.f&Sr)!==0)if(A.f^=Sr,A===c)xo(A,null,n);else{var U=f?f.next:c;A===t.effect.last&&(t.effect.last=A.prev),A.prev&&(A.prev.next=A.next),A.next&&(A.next.prev=A.prev),Qr(t,f,A),Qr(t,A,U),xo(A,U,n),f=A,d=[],T=[],c=io(f.next);continue}if(A!==c){if(p!==void 0&&p.has(A)){if(d.length<T.length){var B=T[0],Y;f=B.prev;var C=d[0],E=d[d.length-1];for(Y=0;Y<d.length;Y+=1)xo(d[Y],B,n);for(Y=0;Y<T.length;Y+=1)p.delete(T[Y]);Qr(t,C.prev,E.next),Qr(t,f,C),Qr(t,E,B),c=B,f=E,O-=1,d=[],T=[]}else p.delete(A),xo(A,c,n),Qr(t,A.prev,A.next),Qr(t,A,f===null?t.effect.first:f.next),Qr(t,f,A),f=A;continue}for(d=[],T=[];c!==null&&c!==A;)(p??(p=new Set)).add(c),T.push(c),c=io(c.next);if(c===null)continue}(A.f&Sr)===0&&d.push(A),f=A,c=io(A.next)}if(t.outrogroups!==null){for(const se of t.outrogroups)se.pending.size===0&&(Ci(t,Ba(se.done)),(Ge=t.outrogroups)==null||Ge.delete(se));t.outrogroups.size===0&&(t.outrogroups=null)}if(c!==null||p!==void 0){var z=[];if(p!==void 0)for(A of p)(A.f&pn)===0&&z.push(A);for(;c!==null;)(c.f&pn)===0&&c!==t.fallback&&z.push(c),c=io(c.next);var J=z.length;if(J>0){var Q=(r&yc)!==0&&a===0?n:null;if(o){for(O=0;O<J;O+=1)(K=(Je=z[O].nodes)==null?void 0:Je.a)==null||K.measure();for(O=0;O<J;O+=1)(re=(ve=z[O].nodes)==null?void 0:ve.a)==null||re.fix()}md(t,z,Q)}}o&&Tr(()=>{var se,P;if(_!==void 0)for(A of _)(P=(se=A.nodes)==null?void 0:se.a)==null||P.apply()})}function bd(t,e,n,r,s,o,a,l){var c=(a&Xu)!==0?(a&ef)===0?Df(n,!1,!1):Wr(n):null,p=(a&Qu)!==0?Wr(s):null;return{v:c,i:p,e:kn(()=>(o(e,c??n,p??s,l),()=>{t.delete(r)}))}}function xo(t,e,n){if(t.nodes)for(var r=t.nodes.start,s=t.nodes.end,o=e&&(e.f&Sr)===0?e.nodes.start:n;r!==null;){var a=la(r);if(o.before(r),r===s)return;r=a}}function Qr(t,e,n){e===null?t.effect.first=n:e.next=n,n===null?t.effect.last=e:n.prev=e}function wl(t,e,n=!1,r=!1,s=!1,o=!1){var a=t,l="";if(n)var c=t;X(()=>{var p=Ie;if(l!==(l=e()??"")){if(n){p.nodes=null,c.innerHTML=l,l!==""&&is(lr(c),c.lastChild);return}if(p.nodes!==null&&(Jc(p.nodes.start,p.nodes.end),p.nodes=null),l!==""){var f=r?Sc:s?lf:void 0,_=Ua(r?"svg":s?"math":"template",f);_.innerHTML=l;var d=r||s?_:_.content;if(is(lr(d),d.lastChild),r||s)for(;lr(d);)a.before(lr(d));else a.before(d)}}})}function Se(t,e,n,r,s){var l,c;if((l=e.$$host)!=null&&l.$$shadowRoot){const p=Ua("slot");y(t,p);return}var o=(c=e.$$slots)==null?void 0:c[n],a=!1;o===!0&&(o=e.children,a=!0),o===void 0||o(t,a?()=>r:r)}function Sl(t,e,n){var r=new Va(t);no(()=>{var s=e()??null;r.ensure(s,s&&(o=>n(o,s)))},as)}function xd(t,e,n,r,s,o){var a=null,l=t,c=new Va(l,!1);no(()=>{const p=e()||null;var f=Sc;if(p===null){c.ensure(null,null);return}return c.ensure(p,_=>{if(p){if(a=Ua(p,f),is(a,a),r){var d=null,T=a.appendChild(Cr());r(a,T),d==null||d.remove()}Ie.nodes.end=a,_.before(a)}}),()=>{}},as),ja(()=>{})}function yd(t,e){var n=void 0,r;Xc(()=>{n!==(n=e())&&(r&&(nn(r),r=null),n&&(r=kn(()=>{Wa(()=>n(t))})))})}function hu(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(e=0;e<s;e++)t[e]&&(n=hu(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function kd(){for(var t,e,n=0,r="",s=arguments.length;n<s;n++)(t=arguments[n])&&(e=hu(t))&&(r&&(r+=" "),r+=e);return r}function vu(t){return typeof t=="object"?kd(t):t??""}const Tl=[...` 	
\r\f \v\uFEFF`];function wd(t,e,n){var r=t==null?"":""+t;if(e&&(r=r?r+" "+e:e),n){for(var s of Object.keys(n))if(n[s])r=r?r+" "+s:s;else if(r.length)for(var o=s.length,a=0;(a=r.indexOf(s,a))>=0;){var l=a+o;(a===0||Tl.includes(r[a-1]))&&(l===r.length||Tl.includes(r[l]))?r=(a===0?"":r.substring(0,a))+r.substring(l+1):a=l}}return r===""?null:r}function $l(t,e=!1){var n=e?" !important;":";",r="";for(var s of Object.keys(t)){var o=t[s];o!=null&&o!==""&&(r+=" "+s+": "+o+n)}return r}function ei(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function Sd(t,e){if(e){var n="",r,s;if(Array.isArray(e)?(r=e[0],s=e[1]):r=e,t){t=String(t).replaceAll(/\/\*.*?\*\//g,"").trim();var o=!1,a=0,l=!1,c=[];r&&c.push(...Object.keys(r).map(ei)),s&&c.push(...Object.keys(s).map(ei));var p=0,f=-1;const w=t.length;for(var _=0;_<w;_++){var d=t[_];if(l?d==="/"&&t[_-1]==="*"&&(l=!1):o?o===d&&(o=!1):d==="/"&&t[_+1]==="*"?l=!0:d==='"'||d==="'"?o=d:d==="("?a++:d===")"&&a--,!l&&o===!1&&a===0){if(d===":"&&f===-1)f=_;else if(d===";"||_===w-1){if(f!==-1){var T=ei(t.substring(p,f).trim());if(!c.includes(T)){d!==";"&&_++;var b=t.substring(p,_).trim();n+=" "+b+";"}}p=_+1,f=-1}}}}return r&&(n+=$l(r)),s&&(n+=$l(s,!0)),n=n.trim(),n===""?null:n}return t==null?null:String(t)}function dn(t,e,n,r,s,o){var a=t[mi];if(a!==n||a===void 0){var l=wd(n,r,o);l==null?t.removeAttribute("class"):e?t.className=l:t.setAttribute("class",l),t[mi]=n}else if(o&&s!==o)for(var c in o){var p=!!o[c];(s==null||p!==!!s[c])&&t.classList.toggle(c,p)}return o}function ti(t,e={},n,r){for(var s in n){var o=n[s];e[s]!==o&&(n[s]==null?t.style.removeProperty(s):t.style.setProperty(s,o,r))}}function ws(t,e,n,r){var s=t[_i];if(s!==e){var o=Sd(e,r);o==null?t.removeAttribute("style"):t.style.cssText=o,t[_i]=e}else r&&(Array.isArray(r)?(ti(t,n==null?void 0:n[0],r[0]),ti(t,n==null?void 0:n[1],r[1],"important")):ti(t,n,r));return r}function gu(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function El(t,e){var n=!("__defaultValue"in t);!n&&t.__defaultValue===e||(t.__defaultValue=e,mu(t,!n||"__value"in t))}function mu(t,e){var n=t.__defaultValue,r=t.multiple,s=r?n??[]:null;if(!(r&&!Ha(s))){var o=t.selectedIndex,a=e&&r?new Set(t.selectedOptions):null;for(var l of t.options){var c=Ms(l);gu(l,r?s.includes(c):Wc(c,n))}if(e)if(a!==null)for(l of t.options){var p=a.has(l);l.selected!==p&&(l.selected=p)}else t.selectedIndex!==o&&(t.selectedIndex=o)}}function Ro(t,e,n=!1){if(t.multiple){if(e==null)return;if(!Ha(e))return ff();for(var r of t.options)r.selected=e.includes(Ms(r));return}for(r of t.options){var s=Ms(r);if(Wc(s,e)){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function yo(t){var e=new MutationObserver(n=>{n.every(Td)||("__defaultValue"in t&&mu(t,!1),"__value"in t&&Ro(t,t.__value))});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ja(()=>{e.disconnect()})}function ni(t,e,n=e){var r=new WeakSet,s=!0;Ic(t,"change",o=>{var a=o?"[selected]":":checked",l;if(t.multiple)l=[].map.call(t.querySelectorAll(a),Ms);else{var c=t.querySelector(a)??t.querySelector("option:not([disabled])");l=c&&Ms(c)}n(l),t.__value=l,me!==null&&r.add(me)}),Wa(()=>{var o=e();if(t===document.activeElement){var a=me;if(r.has(a))return}if(Ro(t,o,s),s&&o===void 0){var l=t.querySelector(":checked");l!==null&&(o=Ms(l),n(o))}t.__value=o,s=!1})}function Ms(t){return"__value"in t?t.__value:t.value}function Td(t){if(t.target.closest("selectedcontent")!==null)return!0;if(t.type==="childList"){var e=[...t.addedNodes,...t.removedNodes];return e.length>0&&e.every(n=>n.nodeName==="SELECTEDCONTENT")}return!1}const lo=Symbol("class"),co=Symbol("style"),_u=Symbol("is custom element"),bu=Symbol("is html"),$d=Bi?"input":"INPUT",Ed=Bi?"option":"OPTION",xu=Bi?"select":"SELECT";function Pe(t,e,n,r){var s=yu(t);s[e]!==(s[e]=n)&&(e==="loading"&&(t[Zu]=n),n==null?t.removeAttribute(e):typeof n!="string"&&ku(t).has(e)?t[e]=n:t.setAttribute(e,n))}function Ad(t,e,n,r,s=!1,o=!1){var a=yu(t),l=a[_u],c=!a[bu],p=e||{},f=t.nodeName===Ed,_=t.nodeName===xu;for(var d in e)!(d in n)&&d[0]+d[1]!=="$$"&&(n[d]=null);n.class?n.class=vu(n.class):n[lo]&&(n.class=null),n[co]&&(n.style??(n.style=null));var T=ku(t);if(t.nodeName===$d&&"type"in n&&("value"in n||"__value"in n)){var b=n.type;(b!==p.type||b===void 0&&t.hasAttribute("type"))&&(p.type=b,Pe(t,"type",b))}for(const C in n){let E=n[C];if(f&&C==="value"&&E==null){t.value=t.__value="",p[C]=E;continue}if(C==="class"){var w=t.namespaceURI==="http://www.w3.org/1999/xhtml";dn(t,w,E,r,e==null?void 0:e[lo],n[lo]),p[C]=E,p[lo]=n[lo];continue}if(C==="style"){ws(t,E,e==null?void 0:e[co],n[co]),p[C]=E,p[co]=n[co];continue}var A=p[C];if(!(E===A&&!(E===void 0&&t.hasAttribute(C)))){p[C]=E;var O=C[0]+C[1];if(O!=="$$")if(O==="on"){const z={},J="$$"+C;let Q=C.slice(2);var U=Qf(Q);if(Zf(Q)&&(Q=Q.slice(0,-7),z.capture=!0),!U&&A){if(E!=null)continue;t.removeEventListener(Q,p[J],z),p[J]=null}if(U)H(Q,t,E),Zn([Q]);else if(E!=null){let de=function(pe){p[C].call(this,pe)};p[J]=fu(Q,t,de,z)}}else if(C==="style")Pe(t,C,E);else if(C==="autofocus")Pc(t,!!E);else if(!l&&(C==="__value"||C==="value"&&E!=null))t.value=t.__value=E;else if(C==="selected"&&f)gu(t,E);else{var B=C;c||(B=ed(B));var Y=B==="defaultValue"||B==="defaultChecked";if(_&&B==="defaultValue")continue;if(E==null&&!l&&!Y)if(a[C]=null,B==="value"||B==="checked"){let z=t;const J=e===void 0;if(B==="value"){let Q=z.defaultValue;z.removeAttribute(B),z.defaultValue=Q,z.value=z.__value=J?Q:null}else{let Q=z.defaultChecked;z.removeAttribute(B),z.defaultChecked=Q,z.checked=J?Q:!1}}else t.removeAttribute(C);else Y||(l||typeof E!="string")&&T.has(B)?(t[B]=E,B in a&&(a[B]=Et)):typeof E!="function"&&Pe(t,B,E)}}}return p}function Al(t,e,n=[],r=[],s=[],o,a=!1,l=!1){Nc(s,n,r,c=>{var p=void 0,f={},_=t.nodeName===xu,d=!1;if(Xc(()=>{var b=e(...c.map(i)),w=Ad(t,p,b,o,a,l);if(d&&_){var A=t;"defaultValue"in b&&El(A,b.defaultValue),"value"in b&&Ro(A,b.value)}for(let U of Object.getOwnPropertySymbols(f))b[U]||nn(f[U]);for(let U of Object.getOwnPropertySymbols(b)){var O=b[U];U.description===cf&&(!p||O!==p[U])&&(f[U]&&nn(f[U]),f[U]=kn(()=>yd(t,()=>O))),w[U]=O}p=w}),_){var T=t;Wa(()=>{var b=p;"defaultValue"in b&&El(T,b.defaultValue),Ro(T,b.value,!0),yo(T)})}d=!0})}function yu(t){return t[_a]??(t[_a]={[_u]:t.nodeName.includes("-"),[bu]:t.namespaceURI===wc})}var Cl=new Map;function ku(t){var e=t.getAttribute("is")||t.nodeName,n=Cl.get(e);if(n)return n;Cl.set(e,n=new Set);for(var r,s=t,o=Element.prototype;o!==s;){r=gc(s);for(var a in r)r[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&n.add(a);s=Di(s)}return n}function ct(t,e,n=e){var r=new WeakSet;Ic(t,"input",async s=>{var o=s?t.defaultValue:t.value;if(o=ri(t)?si(o):o,n(o),me!==null&&r.add(me),await Qi(),o!==(o=e())){var a=t.selectionStart,l=t.selectionEnd,c=t.value.length;if(t.value=o??"",l!==null){var p=t.value.length;a===l&&l===c&&p>c?(t.selectionStart=p,t.selectionEnd=p):(t.selectionStart=a,t.selectionEnd=Math.min(l,p))}}}),qr(e)==null&&t.value&&(n(ri(t)?si(t.value):t.value),me!==null&&r.add(me)),Yi(()=>{var s=e();if(t===document.activeElement){var o=me;if(r.has(o))return}ri(t)&&s===si(t.value)||t.type==="date"&&!s&&!t.value||s!==t.value&&(t.value=s??"")})}function ri(t){var e=t.type;return e==="number"||e==="range"}function si(t){return t===""?null:+t}function oi(t,e){return t===e||(t==null?void 0:t[Er])===e}function Zs(t=Ui(),e,n,r){var s=ut.r,o=Ie;return Wa(()=>{var a,l;return Yi(()=>{a=l,l=[],qr(()=>{oi(n(...l),t)||(e(t,...l),a&&oi(n(...a),t)&&e(null,...a))})}),()=>{let c=o;for(;c!==s&&c.parent!==null&&c.parent.f&Ea;)c=c.parent;const p=()=>{l&&oi(n(...l),t)&&e(null,...l)},f=c.teardown;c.teardown=()=>{p(),f==null||f()}}}),t}function wu(t=!1){const e=ut,n=e.l.u;if(!n)return;let r=()=>cs(e.s);if(t){let s=0,o={};const a=Gs(()=>{let l=!1;const c=e.s;for(const p in c)c[p]!==o[p]&&(o[p]=c[p],l=!0);return l&&s++,s});r=()=>i(a)}n.b.length&&Wf(()=>{Rl(e,r),vi(n.b)}),tn(()=>{const s=qr(()=>n.m.map(Gu));return()=>{for(const o of s)typeof o=="function"&&o()}}),n.a.length&&tn(()=>{Rl(e,r),vi(n.a)})}function Rl(t,e){if(t.l.s)for(const n of t.l.s)i(n);e()}function Cd(t){var e=Wr(0);return function(){return arguments.length===1?(h(e,i(e)+1),arguments[0]):(i(e),t())}}const Rd={get(t,e){if(!t.exclude.includes(e))return i(t.version),e in t.special?t.special[e]():t.props[e]},set(t,e,n){if(!(e in t.special)){var r=Ie;try{Yn(t.parent_effect),t.special[e]=yt({get[e](){return t.props[e]}},e,kc)}finally{Yn(r)}}return t.special[e](n),gl(t.version),!0},getOwnPropertyDescriptor(t,e){if(!t.exclude.includes(e)&&e in t.props)return{enumerable:!0,configurable:!0,value:t.props[e]}},deleteProperty(t,e){return t.exclude.includes(e)||(t.exclude.push(e),gl(t.version)),!0},has(t,e){return t.exclude.includes(e)?!1:e in t.props},ownKeys(t){return Reflect.ownKeys(t.props).filter(e=>!t.exclude.includes(e))}};function ke(t,e){return new Proxy({props:t,exclude:e,special:{},version:Wr(0),parent_effect:Ie},Rd)}const Pd={get(t,e){let n=t.props.length;for(;n--;){let r=t.props[n];if(ao(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r)return r[e]}},set(t,e,n){let r=t.props.length;for(;r--;){let s=t.props[r];ao(s)&&(s=s());const o=ss(s,e);if(o&&o.set)return o.set(n),!0}return!1},getOwnPropertyDescriptor(t,e){let n=t.props.length;for(;n--;){let r=t.props[n];if(ao(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r){const s=ss(r,e);return s&&!s.configurable&&(s.configurable=!0),s}}},has(t,e){if(e===Er||e===xc)return!1;for(let n of t.props)if(ao(n)&&(n=n()),n!=null&&e in n)return!0;return!1},ownKeys(t){const e=[];for(let n of t.props)if(ao(n)&&(n=n()),!!n){for(const r in n)e.includes(r)||e.push(r);for(const r of Object.getOwnPropertySymbols(n))e.includes(r)||e.push(r)}return e}};function Te(...t){return new Proxy({props:t},Pd)}function yt(t,e,n,r){var Y;var s=!Js||(n&nf)!==0,o=(n&rf)!==0,a=(n&sf)!==0,l=r,c=!0,p=void 0,f=()=>a&&s?(p??(p=Gs(r)),i(p)):(c&&(c=!1,l=a?qr(r):r),l);let _;if(o){var d=Er in t||xc in t;_=((Y=ss(t,e))==null?void 0:Y.set)??(d&&e in t?C=>t[e]=C:void 0)}var T,b=!1;o?[T,b]=Af(()=>t[e]):T=t[e],T===void 0&&r!==void 0&&(T=f(),_&&(s&&xf(),_(T)));var w;if(s?w=()=>{var C=t[e];return C===void 0?f():(c=!0,C)}:w=()=>{var C=t[e];return C!==void 0&&(l=void 0),C===void 0?l:C},s&&(n&kc)===0)return w;if(_){var A=t.$$legacy;return(function(C,E){return arguments.length>0?((!s||!E||A||b)&&_(E?w():C),C):w()})}var O=!1,U=((n&tf)!==0?Gs:Wi)(()=>(O=!1,w()));o&&i(U);var B=Ie;return(function(C,E){if(arguments.length>0){const z=E?i(U):s&&o?Qe(C):C;return h(U,z),O=!0,l!==void 0&&(l=z),C}return Vr&&O||(B.f&Sn)!==0?U.v:i(U)})}function ro(t){ut===null&&Ec(),Js&&ut.l!==null?Id(ut).m.push(t):tn(()=>{const e=qr(t);if(typeof e=="function")return e})}function el(t){ut===null&&Ec(),ro(()=>()=>qr(t))}function Id(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}const Nd="5";var hc;typeof window<"u"&&((hc=window.__svelte??(window.__svelte={})).v??(hc.v=new Set)).add(Nd);const us=()=>window.__IDE_BOOTSTRAP__||{};function Od(t){const{rootPath:e="",session:n=""}=us();return`${e}/api/sessions/${encodeURIComponent(n)}/ide${t}`}async function bt(t,e={}){const n=await fetch(Od(t),e),r=await n.json().catch(()=>({}));if(!n.ok){const s=new Error(r.error||"Request failed");throw Object.assign(s,r),s}return r}const $t=(t,e)=>`/ssh-connections/${encodeURIComponent(t)}${e}`,He={chat:async(t,e=80)=>{const{rootPath:n=""}=us(),r=`${n}/api/sessions/${encodeURIComponent(t)}/ide/chat?limit=${e}`,s=await fetch(r),o=await s.json().catch(()=>({}));if(!s.ok)throw new Error(o.error||"Could not load chat");return o},browse:async(t="")=>{const{rootPath:e=""}=us(),n=`${e}/api/ide/browse?path=${encodeURIComponent(t)}`,r=await fetch(n),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not browse folders");return s},sessionAgent:async t=>{const{rootPath:e=""}=us(),n=await fetch(`${e}/api/sessions/${encodeURIComponent(t)}/agent`),r=await n.json().catch(()=>({}));if(!n.ok)throw new Error(r.error||"Could not read agent settings");return r},setSessionAgent:async(t,e)=>{const{rootPath:n=""}=us(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(t)}/agent`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({agent:e,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not switch agent");return s},setSessionModel:async(t,e)=>{const{rootPath:n=""}=us(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(t)}/model`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:e,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change model");return s},setSessionEffort:async(t,e)=>{const{rootPath:n=""}=us(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(t)}/effort`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({effort:e,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change effort");return s},browseOn:(t,e="")=>bt($t(t,`/browse?path=${encodeURIComponent(e)}`)),setWorkspaceRoot:(t,e,n)=>bt($t(t,"/workspace-root"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({workspace_root:e,label:n})}),agentContext:t=>bt($t(t,"/agent-context")),hostKey:t=>bt($t(t,"/host-key")),trustHost:t=>bt($t(t,"/host-key"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({accept:!0})}),listConnections:()=>bt("/ssh-connections"),createConnection:t=>bt("/ssh-connections",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),deleteConnection:t=>bt($t(t,""),{method:"DELETE"}),connect:(t,e)=>bt($t(t,"/connect"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e||""})}),status:t=>bt($t(t,"/status?reconnect=1")),listFiles:(t,e)=>bt($t(t,`/files?path=${encodeURIComponent(e)}`)),searchFiles:(t,e,n)=>bt($t(t,`/files/search?path=${encodeURIComponent(e)}&query=${encodeURIComponent(n)}`)),readFile:(t,e)=>bt($t(t,`/file?path=${encodeURIComponent(e)}`)),saveFile:(t,e,n)=>bt($t(t,"/file"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:e,content:n})}),fs:(t,e)=>bt($t(t,"/fs"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),git:(t,e)=>bt($t(t,"/git"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),focusTerminal:t=>bt($t(t,"/focus-terminal"),{method:"POST"}),updateConnection:(t,e)=>bt($t(t,""),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),listTerminals:t=>bt($t(t,"/terminals")),closeTerminal:(t,e)=>bt($t(t,`/terminals/${e}`),{method:"DELETE"}),getWorkspace:t=>bt($t(t,"/workspace")),saveWorkspace:(t,e)=>bt($t(t,"/workspace"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};var Mo,Lo,Do,Fo,Ho,Bo,Uo,jo,Wo,Vo,qo,Go,Ko,Yo,Zo,Xo,Qo,Jo,ea,ta,na,ra,sa,oa;class zd{constructor(){ne(this,Mo,L(Qe([])));ne(this,Lo,L(""));ne(this,Do,L("idle"));ne(this,Fo,L("Ready"));ne(this,Ho,L("No file open"));ne(this,Bo,L("."));ne(this,Uo,L(Qe([])));ne(this,jo,L(Qe({})));ne(this,Wo,L(Qe({})));ne(this,Vo,L(""));ne(this,qo,L(Qe([])));ne(this,Go,L(""));ne(this,Ko,L(""));ne(this,Yo,L(""));ne(this,Zo,L(Qe([])));ne(this,Xo,L(""));ne(this,Qo,L(!1));ne(this,Jo,L(!1));ne(this,ea,L(0));ne(this,ta,L(0));ne(this,na,L(!1));ne(this,ra,L(""));ne(this,sa,L(Qe([])));ne(this,oa,L(!1));Re(this,"restoredKey","");Re(this,"persistTimer",null)}get connections(){return i(v(this,Mo))}set connections(e){h(v(this,Mo),e,!0)}get connectionId(){return i(v(this,Lo))}set connectionId(e){h(v(this,Lo),e,!0)}get connectionState(){return i(v(this,Do))}set connectionState(e){h(v(this,Do),e,!0)}get statusText(){return i(v(this,Fo))}set statusText(e){h(v(this,Fo),e,!0)}get detailText(){return i(v(this,Ho))}set detailText(e){h(v(this,Ho),e,!0)}get path(){return i(v(this,Bo))}set path(e){h(v(this,Bo),e,!0)}get entries(){return i(v(this,Uo))}set entries(e){h(v(this,Uo),e,!0)}get expanded(){return i(v(this,jo))}set expanded(e){h(v(this,jo),e,!0)}get treeChildren(){return i(v(this,Wo))}set treeChildren(e){h(v(this,Wo),e,!0)}get filter(){return i(v(this,Vo))}set filter(e){h(v(this,Vo),e,!0)}get tabs(){return i(v(this,qo))}set tabs(e){h(v(this,qo),e,!0)}get activeKey(){return i(v(this,Go))}set activeKey(e){h(v(this,Go),e,!0)}get gitOutput(){return i(v(this,Ko))}set gitOutput(e){h(v(this,Ko),e,!0)}get gitStatus(){return i(v(this,Yo))}set gitStatus(e){h(v(this,Yo),e,!0)}get gitBranches(){return i(v(this,Zo))}set gitBranches(e){h(v(this,Zo),e,!0)}get gitBranch(){return i(v(this,Xo))}set gitBranch(e){h(v(this,Xo),e,!0)}get needsHostKey(){return i(v(this,Qo))}set needsHostKey(e){h(v(this,Qo),e,!0)}get notARepo(){return i(v(this,Jo))}set notARepo(e){h(v(this,Jo),e,!0)}get gitAhead(){return i(v(this,ea))}set gitAhead(e){h(v(this,ea),e,!0)}get gitBehind(){return i(v(this,ta))}set gitBehind(e){h(v(this,ta),e,!0)}get gitHasUpstream(){return i(v(this,na))}set gitHasUpstream(e){h(v(this,na),e,!0)}get gitBusy(){return i(v(this,ra))}set gitBusy(e){h(v(this,ra),e,!0)}get gitCommits(){return i(v(this,sa))}set gitCommits(e){h(v(this,sa),e,!0)}get gitHistoryLoaded(){return i(v(this,oa))}set gitHistoryLoaded(e){h(v(this,oa),e,!0)}get connection(){return this.connections.find(e=>e.id===this.connectionId)||null}get activeTab(){return this.tabs.find(e=>e.key===this.activeKey)||null}get visibleEntries(){const e=this.filter.trim().toLowerCase();return e?this.entries.filter(n=>n.name.toLowerCase().includes(e)):this.entries}get dirtyCount(){return this.tabs.filter(e=>e.dirty).length}get gitDirtyCount(){return this.gitStatus.split(`
`).filter(e=>e.trim()&&!e.startsWith("##")).length}resetWorkspaceView(){this.tabs=[],this.activeKey="",this.restoredKey="",this.path=".",this.entries=[],this.expanded={},this.treeChildren={},this.filter="",this.gitOutput="",this.gitStatus="",this.gitBranches=[],this.gitBranch="",this.needsHostKey=!1,this.notARepo=!1,this.gitAhead=0,this.gitBehind=0,this.gitHasUpstream=!1,this.gitCommits=[],this.gitHistoryLoaded=!1}setStatus(e,n){this.statusText=e,n!==void 0&&(this.detailText=n)}async loadConnections(){try{const e=await He.listConnections();this.connections=e.connections||[],!this.connectionId&&this.connections.length&&(this.connectionId=this.connections[0].id)}catch(e){this.setStatus(e.message||"Could not load connections")}}async refreshStatus(){var e,n,r;if(this.connectionId)try{const s=await He.status(this.connectionId);s.connected?(this.connectionState="connected",this.setStatus(`Connected · ${((e=this.connection)==null?void 0:e.label)||"SSH workspace"}`,`SSH terminal: ${s.window_name||"open"}`),await this.restoreWorkspace()):(this.connectionState="reconnect",this.entries=[],this.setStatus(`Reconnect required · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,(r=this.connection)!=null&&r.has_password?"Auto-reconnect failed — select Connect to retry":"Select Connect to reopen SSH"))}catch(s){this.connectionState="error",this.setStatus(s.message||"Could not check SSH connection")}}async connect(e){var n;if(this.connectionId){this.connectionState="connecting",this.setStatus("Connecting…");try{const r=await He.connect(this.connectionId,e);this.connectionState="connected",this.setStatus(`Connected · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,`SSH terminal: ${r.window_name||"open"}`),await this.restoreWorkspace()}catch(r){this.connectionState="error",this.setStatus(r.message||"Could not connect"),this.needsHostKey=!!r.needs_host_key}}}async refreshFiles(e){if(!this.connectionId)return;const n=e||this.path||".";try{const r=await He.listFiles(this.connectionId,n);this.path=r.path||n,this.entries=r.entries||[],this.remember()}catch(r){this.setStatus(r.message||"Could not list remote files")}}async toggleDirectory(e){if(this.expanded[e]){const n={...this.expanded};delete n[e],this.expanded=n;return}if(this.expanded={...this.expanded,[e]:!0},!this.treeChildren[e])try{const n=await He.listFiles(this.connectionId,e);this.treeChildren={...this.treeChildren,[e]:n.entries||[]}}catch(n){this.setStatus(n.message||"Could not expand folder")}}openDiffTab(e,n){const r=`${this.connectionId}|diff:${e}`,s=this.tabs.find(a=>a.key===r);if(s)return s.content=n,s.saved=n,this.activeKey=r,s;const o={key:r,path:`${e} (diff)`,content:n,saved:n,dirty:!1,readOnly:!0,language:"plaintext"};return this.tabs=[...this.tabs,o],this.activeKey=r,o}async openFile(e){if(!this.connectionId)return null;const n=`${this.connectionId}|${e}`,r=this.tabs.find(s=>s.key===n);if(r)return this.activeKey=n,r;try{const s=await He.readFile(this.connectionId,e),o={key:`${this.connectionId}|${s.path}`,path:s.path,content:s.content||"",saved:s.content||"",dirty:!1};return this.tabs=[...this.tabs,o],this.activeKey=o.key,this.setStatus("Opened",o.path),this.remember(),o}catch(s){return this.setStatus(s.message||"Could not open remote file"),null}}updateContent(e,n){this.tabs=this.tabs.map(r=>r.key===e?{...r,content:n,dirty:n!==r.saved}:r),this.remember()}closeTab(e){var r;const n=this.tabs.find(s=>s.key===e);n!=null&&n.dirty&&!confirm(`Discard unsaved changes to ${n.path}?`)||(this.tabs=this.tabs.filter(s=>s.key!==e),this.activeKey===e&&(this.activeKey=((r=this.tabs.at(-1))==null?void 0:r.key)||""),this.remember())}async saveActive(){const e=this.activeTab;if(e)try{await He.saveFile(this.connectionId,e.path,e.content),this.tabs=this.tabs.map(n=>n.key===e.key?{...n,saved:n.content,dirty:!1}:n),this.setStatus(`Saved ${e.path}`,e.path),this.remember()}catch(n){this.setStatus(n.message||"Could not save file")}}async restoreWorkspace(){const e=`${this.connectionId}`;if(!e)return;let n=null;try{n=await He.getWorkspace(this.connectionId)}catch{n=null}if(await this.refreshFiles((n==null?void 0:n.last_directory)||"."),this.restoredKey===e)return;this.restoredKey=e;const r=(n==null?void 0:n.buffers)||{};for(const o of((n==null?void 0:n.tabs)||[]).slice(0,12)){const a=await this.openFile(o);a&&Object.prototype.hasOwnProperty.call(r,o)&&this.updateContent(a.key,r[o])}const s=this.tabs.find(o=>o.path===(n==null?void 0:n.active_path));s&&(this.activeKey=s.key)}remember(){this.persistTimer&&clearTimeout(this.persistTimer),this.persistTimer=setTimeout(()=>this.persist(),1500)}async persist(){var n;if(!this.connectionId)return;const e={};for(const r of this.tabs)r.dirty&&(e[r.path]=r.content);try{await He.saveWorkspace(this.connectionId,{tabs:this.tabs.map(r=>r.path).slice(0,50),active_path:((n=this.activeTab)==null?void 0:n.path)||"",last_directory:this.path||".",buffers:e})}catch{}}async runGit(e,n={}){try{const r=await He.git(this.connectionId,{action:e,path:this.path||".",...n});return r.not_a_repo?(this.gitOutput=r.error||"This folder is not a Git repository.",this.gitStatus="",this.gitBranches=[],this.gitBranch="",this.gitCommits=[],this.gitHistoryLoaded=!1,this.notARepo=!0,null):(this.notARepo=!1,this.gitAhead=r.ahead||0,this.gitBehind=r.behind||0,this.gitHasUpstream=!!r.has_upstream,e==="log"?(this.gitCommits=r.commits||[],this.gitHistoryLoaded=!0):e!=="show"&&(this.gitOutput=r.output||r.status||""),this.gitStatus=r.status||"",this.gitBranches=r.branches||[],this.gitBranch=r.current_branch||"",["commit","switch","create_branch","pull","push","fetch"].includes(e)&&(this.gitHistoryLoaded=!1),r)}catch(r){return this.gitOutput=r.message||"Git command failed",null}}}Mo=new WeakMap,Lo=new WeakMap,Do=new WeakMap,Fo=new WeakMap,Ho=new WeakMap,Bo=new WeakMap,Uo=new WeakMap,jo=new WeakMap,Wo=new WeakMap,Vo=new WeakMap,qo=new WeakMap,Go=new WeakMap,Ko=new WeakMap,Yo=new WeakMap,Zo=new WeakMap,Xo=new WeakMap,Qo=new WeakMap,Jo=new WeakMap,ea=new WeakMap,ta=new WeakMap,na=new WeakMap,ra=new WeakMap,sa=new WeakMap,oa=new WeakMap;const m=new zd;Tf();/**
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
 */const Md={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const Ld=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
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
 */const Pl=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();var Dd=pu("<svg><!><!></svg>");function $e(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]),r=ke(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);hn(e,!1);let s=yt(e,"name",8,void 0),o=yt(e,"color",8,"currentColor"),a=yt(e,"size",8,24),l=yt(e,"strokeWidth",8,2),c=yt(e,"absoluteStrokeWidth",8,!1),p=yt(e,"iconNode",24,()=>[]);wu();var f=Dd();Al(f,(T,b,w)=>({...Md,...T,...r,width:a(),height:a(),stroke:o(),"stroke-width":b,class:w}),[()=>Ld(r)?void 0:{"aria-hidden":"true"},()=>(cs(c()),cs(l()),cs(a()),qr(()=>c()?Number(l())*24/Number(a()):l())),()=>(cs(Pl),cs(s()),cs(n),qr(()=>Pl("lucide-icon","lucide",s()?`lucide-${s()}`:"",n.class)))]);var _=S(f);_t(_,1,p,Ji,(T,b)=>{var w=Bt(()=>Ku(i(b),2));let A=()=>i(w)[0],O=()=>i(w)[1];var U=ue(),B=q(U);xd(B,A,!0,(Y,C)=>{Al(Y,()=>({...O()}))}),y(T,U)});var d=g(_);Se(d,e,"default",{}),y(t,f),vn()}function Fd(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"m21 8-4-4-4 4"}],["path",{d:"M17 4v16"}]];$e(t,Te({name:"arrow-down-up"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Hd(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];$e(t,Te({name:"arrow-up"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function wa(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M20 6 9 17l-5-5"}]];$e(t,Te({name:"check"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function $r(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];$e(t,Te({name:"chevron-down"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Sa(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m9 18 6-6-6-6"}]];$e(t,Te({name:"chevron-right"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Il(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];$e(t,Te({name:"circle-alert"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Bd(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];$e(t,Te({name:"circle-check"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Ud(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]];$e(t,Te({name:"circle-dot"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function jd(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]];$e(t,Te({name:"circle-user"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Wd(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];$e(t,Te({name:"circle"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Vd(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}],["path",{d:"m9 10-5 5 5 5"}]];$e(t,Te({name:"corner-down-left"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function qd(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]];$e(t,Te({name:"corner-left-up"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Gd(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]];$e(t,Te({name:"ellipsis"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Kd(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];$e(t,Te({name:"external-link"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Nl(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m5 16-3 3 3 3"}],["path",{d:"m9 22 3-3-3-3"}]];$e(t,Te({name:"file-code-corner"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Yd(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]];$e(t,Te({name:"file-diff"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Zd(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]];$e(t,Te({name:"file-plus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function tl(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}]];$e(t,Te({name:"file"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Xd(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"}]];$e(t,Te({name:"files"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function ai(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];$e(t,Te({name:"folder-open"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Qd(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];$e(t,Te({name:"folder-plus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Jd(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];$e(t,Te({name:"folder"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Ri(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M15 6a9 9 0 0 0-9 9V3"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}]];$e(t,Te({name:"git-branch"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function ep(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M10 16h.01"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["path",{d:"M21.946 12.013H2.054"}],["path",{d:"M6 16h.01"}]];$e(t,Te({name:"hard-drive"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function tp(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];$e(t,Te({name:"history"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function np(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];$e(t,Te({name:"link-2"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function ur(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]];$e(t,Te({name:"loader"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Ol(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}]];$e(t,Te({name:"message-square"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function rp(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m14 10 7-7"}],["path",{d:"M20 10h-6V4"}],["path",{d:"m3 21 7-7"}],["path",{d:"M4 14h6v6"}]];$e(t,Te({name:"minimize-2"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function sp(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M5 12h14"}]];$e(t,Te({name:"minus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function op(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{d:"M10 19v-3.96 3.15"}],["path",{d:"M7 19h5"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2"}]];$e(t,Te({name:"monitor-smartphone"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function ap(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}]];$e(t,Te({name:"panel-bottom"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function ip(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]];$e(t,Te({name:"panel-left"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function lp(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"}]];$e(t,Te({name:"paperclip"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Ao(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];$e(t,Te({name:"plus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Pi(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];$e(t,Te({name:"refresh-cw"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function nl(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];$e(t,Te({name:"search"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function zl(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];$e(t,Te({name:"server"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Ml(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M14 17H5"}],["path",{d:"M19 7h-9"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]];$e(t,Te({name:"settings-2"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function cp(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]];$e(t,Te({name:"shield-alert"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function ii(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];$e(t,Te({name:"sparkles"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Ll(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]];$e(t,Te({name:"square-terminal"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function up(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];$e(t,Te({name:"square"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Dl(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];$e(t,Te({name:"trash-2"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function fp(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]];$e(t,Te({name:"undo-2"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Na(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];$e(t,Te({name:"x"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}var dp=N('<span class="w-[14px] shrink-0"></span>'),pp=pu('<svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1.5 3.5h4l1.2 1.4h7.8v7.6H1.5z" fill="#c09553"></path></svg>'),hp=N('<div draggable="true" role="treeitem" tabindex="0"><!> <span class="flex shrink-0 items-center"><!></span> <span class="flex-1 truncate text-vs-fg"> </span> <span class="hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Rename"><span class="text-[11px] leading-none">✎</span></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Delete"><span class="text-[11px] leading-none">🗑</span></button></span></div> <!>',1);function Su(t,e){hn(e,!0);const n=Bt(()=>e.dir==="."?e.entry.name:`${e.dir}/${e.entry.name}`),r=Bt(()=>!!m.expanded[i(n)]),s=Bt(()=>m.treeChildren[i(n)]||[]),o=Bt(()=>{var K;return((K=m.activeTab)==null?void 0:K.path)===i(n)});async function a(){e.entry.is_dir?await m.toggleDirectory(i(n)):await m.openFile(i(n))}let l=L(!1);function c(K){K.stopPropagation(),K.dataTransfer.effectAllowed="move",K.dataTransfer.setData("text/x-ide-path",i(n))}function p(K){!e.entry.is_dir||!K.dataTransfer.types.includes("text/x-ide-path")||(K.preventDefault(),K.dataTransfer.dropEffect="move",h(l,!0))}async function f(K){if(h(l,!1),!e.entry.is_dir)return;K.preventDefault(),K.stopPropagation();const ve=K.dataTransfer.getData("text/x-ide-path");if(!ve||ve===i(n))return;if(i(n)===ve||i(n).startsWith(`${ve}/`)){m.setStatus("Cannot move a folder into itself");return}const re=ve.split("/").pop(),se=i(n)==="."?re:`${i(n)}/${re}`;if(se!==ve)try{await He.fs(m.connectionId,{action:"rename",path:ve,new_path:se}),await m.refreshFiles(),m.setStatus(`Moved ${re} to ${i(n)}`)}catch(P){m.setStatus(P.message||"Could not move")}}function _(K){var ve;K.preventDefault(),K.stopPropagation(),(ve=m.openTreeMenu)==null||ve.call(m,{path:i(n),isDir:e.entry.is_dir,x:K.clientX,y:K.clientY})}async function d(K){if(K.stopPropagation(),!!confirm(`Delete ${i(n)}? Folders must already be empty.`))try{await He.fs(m.connectionId,{action:"delete",path:i(n)}),await m.refreshFiles()}catch(ve){m.setStatus(ve.message||"Could not delete")}}async function T(K){K.stopPropagation();const ve=prompt("Rename to (relative path):",i(n));if(!(!ve||ve===i(n)))try{await He.fs(m.connectionId,{action:"rename",path:i(n),new_path:ve}),await m.refreshFiles()}catch(re){m.setStatus(re.message||"Could not rename")}}var b=hp(),w=q(b);let A;var O=S(w);{var U=K=>{var ve=ue(),re=q(ve);{var se=D=>{$r(D,{size:14,class:"shrink-0 text-vs-muted"})},P=D=>{Sa(D,{size:14,class:"shrink-0 text-vs-muted"})};j(re,D=>{i(r)?D(se):D(P,-1)})}y(K,ve)},B=K=>{var ve=dp();y(K,ve)};j(O,K=>{e.entry.is_dir?K(U):K(B,-1)})}var Y=g(O,2),C=S(Y);{var E=K=>{var ve=pp();y(K,ve)},z=K=>{np(K,{size:14,class:"text-vs-muted"})},J=K=>{tl(K,{size:14,class:"text-vs-blue"})};j(C,K=>{e.entry.is_dir?K(E):e.entry.is_symlink?K(z,1):K(J,-1)})}var Q=g(Y,2),de=ae(Q,!0),pe=g(Q,2),he=S(pe),Ze=g(he,2),Ge=g(w,2);{var Je=K=>{var ve=ue(),re=q(ve);_t(re,17,()=>i(s),se=>se.name,(se,P)=>{{let D=Bt(()=>e.depth+1);Su(se,{get entry(){return i(P)},get dir(){return i(n)},get depth(){return i(D)}})}}),y(K,ve)};j(Ge,K=>{e.entry.is_dir&&i(r)&&K(Je)})}X(()=>{A=dn(w,1,"group flex cursor-pointer items-center gap-1 py-[2px] pr-1 text-[13px] hover:bg-vs-hover",null,A,{"bg-vs-active":i(o),"ring-1":i(l),"ring-vs-accent":i(l)}),ws(w,`padding-left: ${8+e.depth*12}px`),Pe(w,"aria-expanded",e.entry.is_dir?i(r):void 0),Pe(w,"aria-selected",i(o)),Pe(w,"title",i(n)),Z(de,e.entry.name),Pe(he,"aria-label",`Rename ${e.entry.name??""}`),Pe(Ze,"aria-label",`Delete ${e.entry.name??""}`)}),H("click",w,a),H("keydown",w,K=>{(K.key==="Enter"||K.key===" ")&&(K.preventDefault(),a())}),H("contextmenu",w,_),Ut("dragstart",w,c),Ut("dragover",w,p),Ut("dragleave",w,()=>h(l,!1)),Ut("drop",w,f),H("click",he,T),H("click",Ze,d),y(t,b),vn()}Zn(["click","keydown","contextmenu"]);var vp=N('<form class="px-2 pb-1"><input class="w-full rounded-sm border border-vs-accent bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none"/></form>'),gp=N('<p class="px-4 py-2 text-xs text-vs-muted">No folder opened.</p>'),mp=N('<p class="px-4 py-2 text-xs text-vs-muted">No files here</p>'),_p=N('<form class="px-2 py-1"><input class="w-full rounded-sm border border-vs-line bg-vs-input px-1.5 py-0.5 text-xs outline-none focus:border-vs-accent"/></form>'),bp=N('<button class="w-full px-3 py-1 text-left hover:bg-vs-hover">Rename…</button> <button class="w-full px-3 py-1 text-left hover:bg-vs-hover">Copy Path</button> <div class="my-1 h-px bg-vs-line"></div> <button class="w-full px-3 py-1 text-left text-vs-red hover:bg-vs-hover">Delete</button>',1),xp=N('<div class="fixed z-50 min-w-[170px] rounded-md border border-vs-line bg-vs-panel py-1 text-xs shadow-2xl" data-tree-menu=""><!></div>'),yp=N('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-vs-fg uppercase"><span class="flex-1 truncate">Explorer</span></div> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold text-vs-fg uppercase"><!> <span class="flex-1 truncate"> </span> <span class="flex opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-1 hover:bg-vs-hover" title="New file" aria-label="New file"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="New folder" aria-label="New folder"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="Refresh" aria-label="Refresh"><!></button></span></div> <!> <input class="mx-2 mb-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none focus:border-vs-accent" placeholder="Filter files…"/> <div class="min-h-0 flex-1 overflow-y-auto pb-2"><!></div> <!></div>');function kp(t,e){hn(e,!0);let n=L(null),r=L(!1),s=L(""),o=L(null);function a(){h(n,null),h(r,!1)}m.openTreeMenu=D=>{h(n,{...D,x:Math.min(D.x,window.innerWidth-190)},!0),h(r,!1)};async function l(){var be,we;h(s,i(n).path,!0),h(r,!0),await Qi(),(be=i(o))==null||be.focus();const D=i(s).lastIndexOf("/"),ee=i(s).lastIndexOf(".");(we=i(o))==null||we.setSelectionRange(D+1,ee>D+1?ee:i(s).length)}async function c(D){D.preventDefault();const ee=i(s).trim(),be=i(n).path;if(a(),!(!ee||ee===be))try{await He.fs(m.connectionId,{action:"rename",path:be,new_path:ee}),await m.refreshFiles()}catch(we){m.setStatus(we.message||"Could not rename")}}async function p(){const D=i(n).path;if(a(),!!confirm(`Delete ${D}? Folders must already be empty.`))try{await He.fs(m.connectionId,{action:"delete",path:D}),await m.refreshFiles()}catch(ee){m.setStatus(ee.message||"Could not delete")}}function f(){var ee;const D=i(n).path;a(),(ee=navigator.clipboard)==null||ee.writeText(D).catch(()=>{}),m.setStatus(`Copied ${D}`)}let _=L(""),d=L("");const T=(D,ee)=>D==="."?ee:`${D}/${ee}`;async function b(D){D.preventDefault();const ee=i(d).trim();if(ee)try{await He.fs(m.connectionId,{action:i(_)==="dir"?"create_dir":"create_file",path:T(m.path,ee)}),h(_,""),h(d,""),await m.refreshFiles()}catch(be){m.setStatus(be.message||"Could not create")}}const w=Bt(()=>{var D,ee;return(((D=m.connection)==null?void 0:D.workspace_root)||"").split("/").filter(Boolean).pop()||((ee=m.connection)==null?void 0:ee.label)||"WORKSPACE"});var A=yp();Ut("click",$s,D=>{var ee,be;i(n)&&!((be=(ee=D.target).closest)!=null&&be.call(ee,"[data-tree-menu]"))&&a()}),Ut("keydown",$s,D=>{D.key==="Escape"&&a()});var O=g(S(A),2),U=S(O);$r(U,{size:14,class:"shrink-0 text-vs-muted"});var B=g(U,2),Y=ae(B,!0),C=g(B,2),E=S(C),z=S(E);Zd(z,{size:14});var J=g(E,2),Q=S(J);Qd(Q,{size:14});var de=g(J,2),pe=S(de);Pi(pe,{size:13});var he=g(O,2);{var Ze=D=>{var ee=vp(),be=S(ee);Pc(be,!0),X(()=>Pe(be,"placeholder",i(_)==="dir"?"New folder name":"New file name")),Ut("submit",ee,b),H("keydown",be,we=>{we.key==="Escape"&&h(_,"")}),Ut("blur",be,()=>{i(d).trim()||h(_,"")}),ct(be,()=>i(d),we=>h(d,we)),y(D,ee)};j(he,D=>{i(_)&&D(Ze)})}var Ge=g(he,2),Je=g(Ge,2),K=S(Je);{var ve=D=>{var ee=gp();y(D,ee)},re=D=>{var ee=ue(),be=q(ee);_t(be,17,()=>m.visibleEntries,we=>we.name,(we,Ne)=>{Su(we,{get entry(){return i(Ne)},get dir(){return m.path},depth:0})},we=>{var Ne=mp();y(we,Ne)}),y(D,ee)};j(K,D=>{m.connectionId?D(re,-1):D(ve)})}var se=g(Je,2);{var P=D=>{var ee=xp(),be=S(ee);{var we=rn=>{var gn=_p(),Vt=S(gn);Zs(Vt,qt=>h(o,qt),()=>i(o)),Ut("submit",gn,c),H("keydown",Vt,qt=>{qt.key==="Escape"&&a()}),ct(Vt,()=>i(s),qt=>h(s,qt)),y(rn,gn)},Ne=rn=>{var gn=bp(),Vt=q(gn),qt=g(Vt,2),pr=g(qt,4);H("click",Vt,l),H("click",qt,f),H("click",pr,p),y(rn,gn)};j(be,rn=>{i(r)?rn(we):rn(Ne,-1)})}X(()=>ws(ee,`left: ${i(n).x??""}px; top: ${i(n).y??""}px`)),y(D,ee)};j(se,D=>{i(n)&&D(P)})}X(()=>{var D;Pe(B,"title",(D=m.connection)==null?void 0:D.workspace_root),Z(Y,i(w))}),H("click",E,()=>{h(_,"file"),h(d,"")}),H("click",J,()=>{h(_,"dir"),h(d,"")}),H("click",de,()=>m.refreshFiles()),ct(Ge,()=>m.filter,D=>m.filter=D),y(t,A),vn()}Zn(["click","keydown"]);var wp=N('<div class="absolute top-full right-0 z-20 mt-1 min-w-[170px] rounded-md border border-vs-line bg-vs-panel py-1 shadow-2xl"><button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Fetch</button> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Pull</button> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Push</button> <div class="my-1 h-px bg-vs-line"></div> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Create Branch…</button></div>'),Sp=N('<p class="mx-3 flex items-center gap-1.5 text-xs text-vs-muted"><!> Reading repository…</p>'),Tp=N(`<p class="mx-3 text-xs leading-relaxed text-vs-muted">This folder isn't a Git repository.<br/> Open a folder containing a <code class="rounded-sm bg-vs-input px-1">.git</code> directory,
      or run <code class="rounded-sm bg-vs-input px-1">git init</code> in the terminal.</p>`),$p=N('<div class="group flex cursor-pointer items-center gap-1.5 py-[2px] pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><span class="truncate text-vs-fg"> </span> <span class="truncate text-[11px] text-vs-muted"> </span> <span class="ml-auto hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Unstage"><!></button></span> <span> </span></div>'),Ep=N('<div class="flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <span class="truncate">Staged Changes</span></button> <span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span></div> <!>',1),Ap=N('<div class="group flex cursor-pointer items-center gap-1.5 py-[2px] pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><span class="truncate text-vs-fg"> </span> <span class="truncate text-[11px] text-vs-muted"> </span> <span class="ml-auto hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Open changes"><!></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Discard changes"><!></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Stage changes"><!></button></span> <span> </span></div>'),Cp=N('<p class="px-6 py-2 text-xs text-vs-muted">No changes.</p>'),Rp=N('<div class="min-h-0 flex-1 overflow-y-auto"></div>'),Pp=N('<span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span>'),Ip=N('<span class="flex shrink-0 opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-0.5 hover:bg-vs-line" title="Refresh history" aria-label="Refresh history"><!></button></span> <!>',1),Np=N('<span class="shrink-0 rounded-sm bg-vs-line px-1 text-[10px] text-vs-blue"> </span>'),Op=N('<div class="group flex cursor-pointer flex-col gap-0.5 py-1 pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><div class="flex min-w-0 items-center gap-1.5"><span class="truncate text-vs-fg"> </span> <!></div> <div class="flex min-w-0 items-center gap-1.5 text-[11px] text-vs-muted"><span class="shrink-0 font-mono text-vs-yellow"> </span> <span class="truncate"> </span> <span class="ml-auto shrink-0"> </span></div></div>'),zp=N('<p class="px-6 py-2 text-xs text-vs-muted"> </p>'),Mp=N('<div class="max-h-[45%] min-h-0 flex-1 overflow-y-auto"></div>'),Lp=N('<button class="flex items-center gap-1 rounded-sm px-1 text-vs-muted hover:bg-vs-hover hover:text-vs-fg" title="Pull then push"><!> </button>'),Dp=N('<div class="flex gap-1 border-t border-vs-line px-3 py-2"><input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="New branch name"/> <button class="rounded-sm bg-vs-status px-2 py-1 text-xs text-white">Create</button></div>'),Fp=N('<pre class="max-h-[120px] shrink-0 overflow-auto border-t border-vs-line px-3 py-1.5 text-[11px] whitespace-pre-wrap text-vs-muted"> </pre>'),Hp=N('<div class="px-3 pb-2"><textarea class="w-full resize-none rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs text-vs-fg outline-none focus:border-vs-accent placeholder:text-vs-muted" rows="2"></textarea> <button class="mt-1 flex w-full items-center justify-center gap-1.5 rounded-sm bg-vs-status px-2 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"><!> Commit</button></div> <!> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <span class="truncate">Changes</span></button> <span class="flex shrink-0 opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-0.5 hover:bg-vs-line" title="Refresh" aria-label="Refresh"><!></button> <button class="rounded-sm p-0.5 hover:bg-vs-line" title="Stage all changes" aria-label="Stage all"><!></button></span> <span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span></div> <!> <div class="group flex shrink-0 items-center gap-1 border-t border-vs-line px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <!> <span class="truncate">History</span></button> <!></div> <!> <div class="mt-auto flex items-center gap-2 border-t border-vs-line px-3 py-1.5 text-[11px]"><span class="flex min-w-0 items-center gap-1 text-vs-muted" title="Current branch"><!> <span class="truncate"> </span></span> <!></div> <!> <!>',1),Bp=N('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase"><span class="flex-1">Source Control</span> <div class="relative" data-scm-menu=""><button class="rounded-sm p-0.5 hover:bg-vs-hover" title="More actions" aria-label="More actions"><!></button> <!></div></div> <!></div>');function Up(t,e){hn(e,!0);let n=L(""),r=L(""),s=L(!1),o=L(!0),a=L(!0),l=L(!1),c=L(!1);const p=Bt(()=>(m.gitStatus||"").split(`
`).filter(P=>P&&!P.startsWith("##")).map(P=>{const D=P.slice(3),ee=D.indexOf(" -> "),be=ee===-1?D:D.slice(ee+4);return{index:P[0]===" "?"":P[0],work:P[1]===" "?"":P[1],code:P.slice(0,2).trim()||"??",path:be.replace(/\r$/,""),from:ee===-1?"":D.slice(0,ee)}}).filter(P=>P.path)),f=Bt(()=>i(p).filter(P=>P.index&&P.index!=="?")),_=Bt(()=>i(p).filter(P=>P.work&&P.work!==" ")),d=P=>P.includes("?")||P.includes("A")?"text-vs-green":P.includes("D")?"text-vs-red":P.includes("R")?"text-vs-blue":"text-vs-yellow",T=P=>P.split("/").pop(),b=P=>{const D=P.split("/");return D.pop(),D.join("/")};async function w(P,D={}){m.gitBusy=P;try{return await m.runGit(P,D)}finally{m.gitBusy=""}}async function A(){if(!i(n).trim()||!i(f).length)return;await w("commit",{message:i(n).trim()})&&h(n,"")}async function O(){if(!i(r).trim())return;await w("create_branch",{branch:i(r).trim()})&&(h(r,""),h(s,!1))}async function U(P){confirm(`Discard changes in ${P.path}? This cannot be undone.`)&&await w("discard",{files:[P.path]})}async function B(P){const D=await m.runGit("diff_file",{files:[P.path]});D&&m.openDiffTab(P.path,D.output||"No changes to show.")}let Y=L("");tn(()=>{const P=m.connectionId,D=m.connectionState,ee=P?`${P}|${D}`:"";!P||D!=="connected"||i(Y)!==ee&&(h(Y,ee,!0),w("status"))});async function C(){h(l,!i(l)),i(l)&&!m.gitHistoryLoaded&&await w("log")}tn(()=>{i(l)&&!m.gitHistoryLoaded&&!m.notARepo&&!m.gitBusy&&w("log")});async function E(P){const D=await m.runGit("show",{ref:P.hash});D&&m.openDiffTab(`${P.short} ${P.subject}`,D.output||"Empty commit.")}const z=P=>(P||"").split(",").map(D=>D.trim().replace(/^HEAD -> /,"")).filter(Boolean);function J(P){P.key==="Enter"&&(P.ctrlKey||P.metaKey)&&(P.preventDefault(),A())}var Q=Bp();Ut("click",$s,P=>{var D,ee;(ee=(D=P.target).closest)!=null&&ee.call(D,"[data-scm-menu]")||h(c,!1)});var de=S(Q),pe=g(S(de),2),he=S(pe),Ze=S(he);Gd(Ze,{size:14});var Ge=g(he,2);{var Je=P=>{var D=wp(),ee=S(D),be=g(ee,2),we=g(be,2),Ne=g(we,4);H("click",ee,()=>{h(c,!1),w("fetch")}),H("click",be,()=>{h(c,!1),w("pull")}),H("click",we,()=>{h(c,!1),w("push")}),H("click",Ne,()=>{h(c,!1),h(s,!i(s))}),y(P,D)};j(Ge,P=>{i(c)&&P(Je)})}var K=g(de,2);{var ve=P=>{var D=Sp(),ee=S(D);ur(ee,{size:12,class:"animate-spin"}),y(P,D)},re=P=>{var D=Tp();y(P,D)},se=P=>{var D=Hp(),ee=q(D),be=S(ee),we=g(be,2),Ne=S(we);{var rn=ie=>{ur(ie,{size:12,class:"animate-spin"})},gn=ie=>{wa(ie,{size:12})};j(Ne,ie=>{m.gitBusy==="commit"?ie(rn):ie(gn,-1)})}var Vt=g(ee,2);{var qt=ie=>{var et=Ep(),We=q(et),xe=S(We),Ve=S(xe);{var wt=ht=>{$r(ht,{size:14,class:"text-vs-muted"})},Be=ht=>{Sa(ht,{size:14,class:"text-vs-muted"})};j(Ve,ht=>{i(a)?ht(wt):ht(Be,-1)})}var Ct=g(xe,2),Kt=ae(Ct,!0),ot=g(We,2);{var Rt=ht=>{var Pt=ue(),Fn=q(Pt);_t(Fn,17,()=>i(f),It=>It.path,(It,St)=>{var vt=$p(),Hn=S(vt),$=ae(Hn,!0),I=g(Hn,2),V=ae(I,!0),Ae=g(I,2),Oe=S(Ae),qe=S(Oe);sp(qe,{size:13});var tt=g(Ae,2),x=ae(tt,!0);X((R,W,oe)=>{Pe(vt,"title",i(St).path),Z($,R),Z(V,W),Pe(Oe,"aria-label",`Unstage ${i(St).path??""}`),dn(tt,1,`shrink-0 font-mono text-[11px] ${oe??""}`),Z(x,i(St).index||i(St).code)},[()=>T(i(St).path),()=>b(i(St).path),()=>d(i(St).code)]),H("click",vt,()=>B(i(St))),H("keydown",vt,R=>{R.key==="Enter"&&B(i(St))}),H("click",Oe,R=>{R.stopPropagation(),w("unstage",{files:[i(St).path]})}),y(It,vt)}),y(ht,Pt)};j(ot,ht=>{i(a)&&ht(Rt)})}X(()=>Z(Kt,i(f).length)),H("click",xe,()=>h(a,!i(a))),y(ie,et)};j(Vt,ie=>{i(f).length&&ie(qt)})}var pr=g(Vt,2),Pr=S(pr),Ir=S(Pr);{var Nr=ie=>{$r(ie,{size:14,class:"text-vs-muted"})},hr=ie=>{Sa(ie,{size:14,class:"text-vs-muted"})};j(Ir,ie=>{i(o)?ie(Nr):ie(hr,-1)})}var _e=g(Pr,2),Gt=S(_e),Le=S(Gt);Pi(Le,{size:12});var Xn=g(Gt,2),Mt=S(Xn);Ao(Mt,{size:13});var Tn=g(_e,2),vr=ae(Tn,!0),sn=g(pr,2);{var Or=ie=>{var et=Rp();_t(et,21,()=>i(_),We=>We.path,(We,xe)=>{var Ve=Ap(),wt=S(Ve),Be=ae(wt,!0),Ct=g(wt,2),Kt=ae(Ct,!0),ot=g(Ct,2),Rt=S(ot),ht=S(Rt);Yd(ht,{size:13});var Pt=g(Rt,2),Fn=S(Pt);fp(Fn,{size:13});var It=g(Pt,2),St=S(It);Ao(St,{size:13});var vt=g(ot,2),Hn=ae(vt,!0);X(($,I,V)=>{Pe(Ve,"title",i(xe).path),Z(Be,$),Z(Kt,I),Pe(Rt,"aria-label",`Open changes to ${i(xe).path??""}`),Pe(Pt,"aria-label",`Discard changes to ${i(xe).path??""}`),Pe(It,"aria-label",`Stage ${i(xe).path??""}`),dn(vt,1,`shrink-0 font-mono text-[11px] ${V??""}`),Z(Hn,i(xe).work||i(xe).code)},[()=>T(i(xe).path),()=>b(i(xe).path),()=>d(i(xe).code)]),H("click",Ve,()=>B(i(xe))),H("keydown",Ve,$=>{$.key==="Enter"&&B(i(xe))}),H("click",Rt,$=>{$.stopPropagation(),B(i(xe))}),H("click",Pt,$=>{$.stopPropagation(),U(i(xe))}),H("click",It,$=>{$.stopPropagation(),w("stage",{files:[i(xe).path]})}),y(We,Ve)},We=>{var xe=Cp();y(We,xe)}),y(ie,et)};j(sn,ie=>{i(o)&&ie(Or)})}var gr=g(sn,2),Qn=S(gr),mn=S(Qn);{var on=ie=>{$r(ie,{size:14,class:"text-vs-muted"})},$n=ie=>{Sa(ie,{size:14,class:"text-vs-muted"})};j(mn,ie=>{i(l)?ie(on):ie($n,-1)})}var Lt=g(mn,2);tp(Lt,{size:12,class:"shrink-0 text-vs-muted"});var mr=g(Qn,2);{var Jn=ie=>{var et=Ip(),We=q(et),xe=S(We),Ve=S(xe);{var wt=ot=>{ur(ot,{size:12,class:"animate-spin"})},Be=ot=>{Pi(ot,{size:12})};j(Ve,ot=>{m.gitBusy==="log"?ot(wt):ot(Be,-1)})}var Ct=g(We,2);{var Kt=ot=>{var Rt=Pp(),ht=ae(Rt,!0);X(()=>Z(ht,m.gitCommits.length)),y(ot,Rt)};j(Ct,ot=>{m.gitCommits.length&&ot(Kt)})}H("click",xe,()=>w("log")),y(ie,et)};j(mr,ie=>{i(l)&&ie(Jn)})}var Mn=g(gr,2);{var er=ie=>{var et=Mp();_t(et,21,()=>m.gitCommits,We=>We.hash,(We,xe)=>{var Ve=Op(),wt=S(Ve),Be=S(wt),Ct=ae(Be,!0),Kt=g(Be,2);_t(Kt,17,()=>z(i(xe).refs),Ji,(vt,Hn)=>{var $=Np(),I=ae($,!0);X(()=>Z(I,i(Hn))),y(vt,$)});var ot=g(wt,2),Rt=S(ot),ht=ae(Rt,!0),Pt=g(Rt,2),Fn=ae(Pt,!0),It=g(Pt,2),St=ae(It,!0);X(()=>{Pe(Ve,"title",`${i(xe).short} · ${i(xe).author} · ${i(xe).date}`),Z(Ct,i(xe).subject),Z(ht,i(xe).short),Z(Fn,i(xe).author),Z(St,i(xe).relative)}),H("click",Ve,()=>E(i(xe))),H("keydown",Ve,vt=>{vt.key==="Enter"&&E(i(xe))}),y(We,Ve)},We=>{var xe=zp(),Ve=ae(xe,!0);X(()=>Z(Ve,m.gitBusy==="log"?"Loading history…":"No commits yet.")),y(We,xe)}),y(ie,et)};j(Mn,ie=>{i(l)&&ie(er)})}var En=g(Mn,2),An=S(En),tr=S(An);Ri(tr,{size:12,class:"shrink-0"});var Kr=g(tr,2),Yr=ae(Kr,!0),zr=g(An,2);{var Mr=ie=>{var et=Lp(),We=S(et);{var xe=Be=>{ur(Be,{size:11,class:"animate-spin"})},Ve=Be=>{Fd(Be,{size:11})};j(We,Be=>{m.gitBusy==="pull"||m.gitBusy==="push"?Be(xe):Be(Ve,-1)})}var wt=g(We);X(()=>Z(wt,` ${m.gitBehind??""}↓ ${m.gitAhead??""}↑`)),H("click",et,()=>w("pull").then(()=>w("push"))),y(ie,et)};j(zr,ie=>{m.gitHasUpstream&&ie(Mr)})}var Ln=g(En,2);{var _n=ie=>{var et=Dp(),We=S(et),xe=g(We,2);H("keydown",We,Ve=>{Ve.key==="Enter"&&O(),Ve.key==="Escape"&&h(s,!1)}),ct(We,()=>i(r),Ve=>h(r,Ve)),H("click",xe,O),y(ie,et)};j(Ln,ie=>{i(s)&&ie(_n)})}var Dn=g(Ln,2);{var Lr=ie=>{var et=Fp(),We=ae(et,!0);X(()=>Z(We,m.gitOutput)),y(ie,et)};j(Dn,ie=>{m.gitOutput&&ie(Lr)})}X(ie=>{Pe(be,"placeholder",`Message (Ctrl+Enter to commit on "${m.gitBranch||"branch"}")`),we.disabled=ie,Pe(we,"title",i(f).length?"Commit staged changes":"Stage a change first"),Z(vr,i(_).length),Z(Yr,m.gitBranch||"—")},[()=>!i(n).trim()||!i(f).length||m.gitBusy==="commit"]),H("keydown",be,J),ct(be,()=>i(n),ie=>h(n,ie)),H("click",we,A),H("click",Pr,()=>h(o,!i(o))),H("click",Gt,()=>w("status")),H("click",Xn,()=>w("stage",{files:["."]})),H("click",Qn,C),y(P,D)};j(K,P=>{!i(Y)||m.gitBusy==="status"&&!m.gitStatus&&!m.notARepo?P(ve):m.notARepo?P(re,1):P(se,-1)})}H("click",he,()=>h(c,!i(c))),y(t,Q),vn()}Zn(["click","keydown"]);const jp="modulepreload",Wp=function(t,e){return new URL(t,e).href},Fl={},Ta=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let a=function(f){return Promise.all(f.map(_=>Promise.resolve(_).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const l=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),p=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=a(n.map(f=>{if(f=Wp(f,r),f in Fl)return;Fl[f]=!0;const _=f.endsWith(".css"),d=_?'[rel="stylesheet"]':"";if(!!r)for(let w=l.length-1;w>=0;w--){const A=l[w];if(A.href===f&&(!_||A.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${d}`))return;const b=document.createElement("link");if(b.rel=_?"stylesheet":jp,_||(b.as="script"),b.crossOrigin="",b.href=f,p&&b.setAttribute("nonce",p),document.head.appendChild(b),_)return new Promise((w,A)=>{b.addEventListener("load",w),b.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${f}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return e().catch(o)})},ko={base:"vs-dark",inherit:!0,rules:[{token:"",foreground:"f8f8f2",background:"272822"},{token:"comment",foreground:"75715e",fontStyle:"italic"},{token:"string",foreground:"e6db74"},{token:"constant",foreground:"ae81ff"},{token:"number",foreground:"ae81ff"},{token:"keyword",foreground:"f92672"},{token:"operator",foreground:"f92672"},{token:"delimiter",foreground:"f8f8f2"},{token:"type",foreground:"66d9ef",fontStyle:"italic"},{token:"function",foreground:"a6e22e"},{token:"variable",foreground:"f8f8f2"},{token:"variable.parameter",foreground:"fd971f",fontStyle:"italic"},{token:"tag",foreground:"f92672"},{token:"attribute.name",foreground:"a6e22e"},{token:"attribute.value",foreground:"e6db74"},{token:"regexp",foreground:"e6db74"}],colors:{"editor.background":"#272822","editor.foreground":"#f8f8f2","editor.lineHighlightBackground":"#3e3d32","editor.selectionBackground":"#49483e","editorCursor.foreground":"#f8f8f0","editorWhitespace.foreground":"#3b3a32","editorLineNumber.foreground":"#90908a","editorLineNumber.activeForeground":"#f8f8f2","editorIndentGuide.background":"#3b3a32","editorGutter.background":"#272822"}},Vp={py:"python",js:"javascript",mjs:"javascript",cjs:"javascript",ts:"typescript",tsx:"typescript",jsx:"javascript",json:"json",md:"markdown",html:"html",htm:"html",css:"css",scss:"scss",less:"less",sh:"shell",bash:"shell",zsh:"shell",yml:"yaml",yaml:"yaml",toml:"ini",ini:"ini",cfg:"ini",sql:"sql",go:"go",rs:"rust",rb:"ruby",php:"php",java:"java",c:"c",h:"c",cpp:"cpp",hpp:"cpp",cs:"csharp",svelte:"html",vue:"html",xml:"xml",dockerfile:"dockerfile"};function qp(t){var n;const e=(t||"").split("/").pop()||"";return e.toLowerCase()==="dockerfile"?"dockerfile":e.toLowerCase()==="makefile"?"shell":Vp[(n=e.split(".").pop())==null?void 0:n.toLowerCase()]||"plaintext"}var Gp=N('<div class="editor svelte-1h8xysy"></div>');function Kp(t,e){hn(e,!0);let n,r=null,s=null,o="",a=!1;ro(async()=>{s=await Ta(()=>import("./ide-monaco.js").then(c=>c.a),__vite__mapDeps([0,1]),import.meta.url),s.editor.defineTheme("monokai",ko),r=s.editor.create(n,{value:"",theme:"monokai",automaticLayout:!0,fontSize:13,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",minimap:{enabled:!0},scrollBeyondLastLine:!1,renderWhitespace:"selection",tabSize:2}),r.onDidChangeModelContent(()=>{a||!o||m.updateContent(o,r.getValue())}),r.addCommand(s.KeyMod.CtrlCmd|s.KeyCode.KeyS,()=>m.saveActive())}),el(()=>r==null?void 0:r.dispose()),tn(()=>{const c=m.activeTab;if(!(!r||!s)){if(!c){a=!0,r.setValue(""),o="",a=!1;return}if(c.key!==o){a=!0;const p=s.editor.createModel(c.content,c.language||qp(c.path)),f=r.getModel();r.setModel(p),f==null||f.dispose(),r.updateOptions({readOnly:!!c.readOnly}),o=c.key,a=!1}else r.getValue()!==c.content&&(a=!0,r.setValue(c.content),a=!1)}});var l=Gp();Zs(l,c=>n=c,()=>n),y(t,l),vn()}var Jr=Cd(()=>m),Yp=N('<span class="h-2 w-2 rounded-full bg-vs-fg group-hover:hidden"></span> <!>',1),Zp=N('<div><button class="flex items-center gap-1.5 py-2 pr-1 pl-3" role="tab"><!> <span class="whitespace-nowrap"> </span></button> <button class="mr-1.5 flex h-5 w-5 items-center justify-center rounded-sm hover:bg-vs-line"><!></button></div>'),Xp=N('<div class="px-3 py-2 text-xs text-vs-muted">Open a file from the Explorer</div>'),Qp=N('<div class="flex min-h-[35px] items-stretch overflow-x-auto bg-vs-tabinactive" role="tablist"></div>');function Jp(t,e){hn(e,!1);const n=s=>s.split("/").pop();wu();var r=Qp();_t(r,5,()=>Jr().tabs,s=>s.key,(s,o)=>{var a=Zp();let l;var c=S(a),p=S(c);tl(p,{size:14,class:"shrink-0 text-vs-blue"});var f=g(p,2),_=ae(f,!0),d=g(c,2),T=S(d);{var b=A=>{var O=Yp(),U=g(q(O),2);Na(U,{size:14,class:"hidden group-hover:block"}),y(A,O)},w=A=>{Na(A,{size:14,class:"opacity-0 group-hover:opacity-100"})};j(T,A=>{i(o).dirty?A(b):A(w,-1)})}X((A,O)=>{l=dn(a,1,"group flex items-center border-r border-vs-bg text-[13px]",null,l,{"bg-vs-tabactive":i(o).key===Jr().activeKey,"text-vs-bright":i(o).key===Jr().activeKey,"text-vs-muted":i(o).key!==Jr().activeKey}),Pe(c,"aria-selected",i(o).key===Jr().activeKey),Pe(c,"title",i(o).path),Z(_,A),Pe(d,"title",i(o).dirty?"Unsaved changes — close":"Close"),Pe(d,"aria-label",`Close ${O??""}`)},[()=>n(i(o).path),()=>n(i(o).path)]),H("click",c,()=>Jr(Jr().activeKey=i(o).key)),H("click",d,()=>Jr().closeTab(i(o).key)),y(s,a)},s=>{var o=Xp();y(s,o)}),y(t,r),vn()}Zn(["click"]);function rl(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var As=rl();function Tu(t){As=t}var ds={exec:()=>null};function Ps(t){let e=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),s=e[r];return s||(s=t(r),e[r]=s),s}}function Me(t,e=""){let n=typeof t=="string"?t:t.source,r={replace:(s,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(cn.caret,"$1"),n=n.replace(s,a),r},getRegex:()=>new RegExp(n,e)};return r}var eh=((t="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+t)}catch{return!1}})(),cn={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:Ps(t=>new RegExp(`^ {0,${t}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:Ps(t=>new RegExp(`^ {0,${t}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:Ps(t=>new RegExp(`^ {0,${t}}(?:\`\`\`|~~~)`)),headingBeginRegex:Ps(t=>new RegExp(`^ {0,${t}}#`)),htmlBeginRegex:Ps(t=>new RegExp(`^ {0,${t}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:Ps(t=>new RegExp(`^ {0,${t}}>`))},th=/^(?:[ \t]*(?:\n|$))+/,nh=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,rh=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ua=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,sh=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,sl=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,$u=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Eu=Me($u).replace(/bull/g,sl).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),oh=Me($u).replace(/bull/g,sl).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),ol=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,ah=/^[^\n]+/,al=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,ih=Me(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",al).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),lh=Me(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,sl).getRegex(),qa="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",il=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ch=Me("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",il).replace("tag",qa).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Au=t=>Me(ol).replace("hr",ua).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list",t).replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",qa).getRegex(),uh=Au(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),fh=Au(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),dh=Me(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",fh).getRegex(),ll={blockquote:dh,code:nh,def:ih,fences:rh,heading:sh,hr:ua,html:ch,lheading:Eu,list:lh,newline:th,paragraph:uh,table:ds,text:ah},Hl=Me("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ua).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",qa).getRegex(),ph={...ll,lheading:oh,table:Hl,paragraph:Me(ol).replace("hr",ua).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Hl).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",qa).getRegex()},hh={...ll,html:Me(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",il).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ds,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Me(ol).replace("hr",ua).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Eu).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},vh=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,gh=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Cu=/^( {2,}|\\)\n(?!\s*$)/,mh=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Gr=/[\p{P}\p{S}]/u,so=/[\s\p{P}\p{S}]/u,fa=/[^\s\p{P}\p{S}]/u,_h=Me(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,so).getRegex(),bh=/[\p{Pi}\p{Ps}"']/u,Ru=/(?!~)[\p{P}\p{S}]/u,xh=/(?!~)[\s\p{P}\p{S}]/u,yh=/(?:[^\s\p{P}\p{S}]|~)/u,kh=Me(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",eh?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Pu=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,wh=Me(Pu,"u").replace(/punct/g,Gr).getRegex(),Sh=Me(Pu,"u").replace(/punct/g,Ru).getRegex(),Th=/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,$h=Me(Th,"u").replace(/openQuote/g,bh).replace(/punct/g,Gr).getRegex(),Iu="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Eh=Me(Iu,"gu").replace(/notPunctSpace/g,fa).replace(/punctSpace/g,so).replace(/punct/g,Gr).getRegex(),Ah=Me(Iu,"gu").replace(/notPunctSpace/g,yh).replace(/punctSpace/g,xh).replace(/punct/g,Ru).getRegex(),Ch="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)",Rh=Me(Ch,"gu").replace(/notPunctSpace/g,fa).replace(/punctSpace/g,so).replace(/punct/g,Gr).getRegex(),Ph=Me("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,fa).replace(/punctSpace/g,so).replace(/punct/g,Gr).getRegex(),Ih="^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)",Nh=Me(Ih,"gu").replace(/notPunctSpace/g,fa).replace(/punctSpace/g,so).replace(/punct/g,Gr).getRegex(),Oh=Me(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Gr).getRegex(),zh="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Mh=Me(zh,"gu").replace(/notPunctSpace/g,fa).replace(/punctSpace/g,so).replace(/punct/g,Gr).getRegex(),Lh=Me(/\\(punct)/,"gu").replace(/punct/g,Gr).getRegex(),Dh=Me(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Fh=Me(il).replace("(?:-->|$)","-->").getRegex(),Hh=Me("^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Fh).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Bh=/\[(?:\\[\s\S]|[^\[\]\\])*\]/,Oa=Me(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace("brackets",Bh).getRegex(),Uh=Me(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Oa).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Nu=Me(/^!?\[(label)\]\[(ref)\]/).replace("label",Oa).replace("ref",al).getRegex(),Ou=Me(/^!?\[(ref)\](?:\[\])?/).replace("ref",al).getRegex(),jh=Me("reflink|nolink(?!\\()","g").replace("reflink",Nu).replace("nolink",Ou).getRegex(),Bl=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,cl={_backpedal:ds,anyPunctuation:Lh,autolink:Dh,blockSkip:kh,br:Cu,code:gh,del:ds,delLDelim:ds,delRDelim:ds,emStrongLDelim:wh,emStrongRDelimAst:Eh,emStrongRDelimUnd:Ph,escape:vh,link:Uh,nolink:Ou,punctuation:_h,reflink:Nu,reflinkSearch:jh,tag:Hh,text:mh,url:ds},Wh={...cl,emStrongLDelim:$h,emStrongRDelimAst:Rh,emStrongRDelimUnd:Nh,link:Me(/^!?\[(label)\]\((.*?)\)/).replace("label",Oa).getRegex(),reflink:Me(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Oa).getRegex()},Ii={...cl,emStrongRDelimAst:Ah,emStrongLDelim:Sh,delLDelim:Oh,delRDelim:Mh,url:Me(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Bl).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:Me(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Bl).getRegex()},Vh={...Ii,br:Me(Cu).replace("{2,}","*").getRegex(),text:Me(Ii.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},va={normal:ll,gfm:ph,pedantic:hh},uo={normal:cl,gfm:Ii,breaks:Vh,pedantic:Wh},qh={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ul=t=>qh[t];function Rn(t,e){if(e){if(cn.escapeTest.test(t))return t.replace(cn.escapeReplace,Ul)}else if(cn.escapeTestNoEncode.test(t))return t.replace(cn.escapeReplaceNoEncode,Ul);return t}function jl(t){try{t=encodeURI(t).replace(cn.percentDecode,"%")}catch{return null}return t}function Wl(t,e){var o;let n=t.replace(cn.findPipe,(a,l,c)=>{let p=!1,f=l;for(;--f>=0&&c[f]==="\\";)p=!p;return p?"|":" |"}),r=n.split(cn.splitPipe),s=0;if(r[0].trim()||r.shift(),r.length>0&&!((o=r.at(-1))!=null&&o.trim())&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(cn.slashPipe,"|");return r}function es(t,e,n){let r=t.length;if(r===0)return"";let s=0;for(;s<r&&t.charAt(r-s-1)===e;)s++;return t.slice(0,r-s)}function Vl(t){let e=t.split(`
`),n=e.length-1;for(;n>=0&&cn.blankLine.test(e[n]);)n--;return e.length-n<=2?t:e.slice(0,n+1).join(`
`)}function Gh(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return n>0?-2:-1}function Kh(t,e=0){let n=e,r="";for(let s of t)if(s==="	"){let o=4-n%4;r+=" ".repeat(o),n+=o}else r+=s,n++;return r}function ql(t,e,n,r,s){let o=e.href,a=e.title||null,l=t[1].replace(s.other.outputLinkReplace,"$1"),c=t[0].charAt(0)==="!";r.state.inLink=!0;let p=r.state.linkEmitted,f=r.state.inRawBlock;r.state.linkEmitted=!1;let _=r.inlineTokens(l),d=r.state.linkEmitted;if(r.state.linkEmitted=p,r.state.inLink=!1,!c){if(d){r.state.inRawBlock=f;return}r.state.linkEmitted=!0}return{type:c?"image":"link",raw:n,href:o,title:a,text:l,tokens:_}}function Yh(t,e,n){let r=t.match(n.other.indentCodeCompensation);if(r===null)return e;let s=r[1];return e.split(`
`).map(o=>{let a=o.match(n.other.beginningSpace);if(a===null)return o;let[l]=a;return o.slice(Math.min(l.length,s.length))}).join(`
`)}var za=class{constructor(t){Re(this,"options");Re(this,"rules");Re(this,"lexer");this.options=t||As}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let n=this.options.pedantic?e[0]:Vl(e[0]),r=n.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:n,codeBlockStyle:"indented",text:r}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let n=e[0],r=Yh(n,e[3]||"",this.rules);return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(this.rules.other.endingHash.test(n)){let r=es(n,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceTabChar.test(r))&&(n=r.trim())}return{type:"heading",raw:es(e[0],`
`),depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:es(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let n=es(e[0],`
`).split(`
`),r="",s="",o=[];for(;n.length>0;){let a=!1,l=[],c;for(c=0;c<n.length;c++)if(this.rules.other.blockquoteStart.test(n[c]))l.push(n[c]),a=!0;else if(!a)l.push(n[c]);else break;n=n.slice(c);let p=l.join(`
`),f=p.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${p}`:p,s=s?`${s}
${f}`:f;let _=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(f,o,!0),this.lexer.state.top=_,n.length===0)break;let d=o.at(-1);if((d==null?void 0:d.type)==="code")break;if((d==null?void 0:d.type)==="blockquote"){let T=d,b=n.join(`
`),w=T.raw+`
`+b.replace(this.rules.other.blockquoteSetextReplace2,""),A=this.blockquote(w);o[o.length-1]=A,r=`${r}
${b}`,s=s.substring(0,s.length-T.text.length)+A.text;break}else if((d==null?void 0:d.type)==="list"){let T=d,b=T.raw+`
`+n.join(`
`),w=this.list(b);o[o.length-1]=w,r=r.substring(0,r.length-d.raw.length)+w.raw,s=s.substring(0,s.length-T.raw.length)+w.raw,n=b.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:o,text:s}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n=e[1].trim(),r=n.length>1,s={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");let o=this.rules.other.listItemRegex(n),a=!1;for(;t;){let c=!1,p="",f="";if(!(e=o.exec(t))||this.rules.block.hr.test(t))break;p=e[0],t=t.substring(p.length);let _=Kh(e[2].split(`
`,1)[0],e[1].length),d=t.split(`
`,1)[0],T=!_.trim(),b=0;if(this.options.pedantic?(b=2,f=_.trimStart()):T?b=e[1].length+1:(b=_.search(this.rules.other.nonSpaceChar),b=b>4?1:b,f=_.slice(b),b+=e[1].length),T&&this.rules.other.blankLine.test(d)&&(p+=d+`
`,t=t.substring(d.length+1),c=!0),!c){let w=this.rules.other.nextBulletRegex(b),A=this.rules.other.hrRegex(b),O=this.rules.other.fencesBeginRegex(b),U=this.rules.other.headingBeginRegex(b),B=this.rules.other.htmlBeginRegex(b),Y=this.rules.other.blockquoteBeginRegex(b);for(;t;){let C=t.split(`
`,1)[0],E;if(d=C,this.options.pedantic?(d=d.replace(this.rules.other.listReplaceNesting,"  "),E=d):E=d.replace(this.rules.other.tabCharGlobal,"    "),O.test(d)||U.test(d)||B.test(d)||Y.test(d)||w.test(d)||A.test(d))break;if(E.search(this.rules.other.nonSpaceChar)>=b||!d.trim())f+=`
`+E.slice(b);else{if(T||_.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||O.test(_)||U.test(_)||A.test(_))break;f+=`
`+d}T=!d.trim(),p+=C+`
`,t=t.substring(C.length+1),_=E.slice(b)}}s.loose||(a?s.loose=!0:this.rules.other.doubleBlankLine.test(p)&&(a=!0)),s.items.push({type:"list_item",raw:p,task:!!this.options.gfm&&this.rules.other.listIsTask.test(f),loose:!1,text:f,tokens:[]}),s.raw+=p}let l=s.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;s.raw=s.raw.trimEnd();for(let c of s.items)if(this.lexer.state.top=!1,c.tokens=this.lexer.blockTokens(c.text,[]),!s.loose){let p=c.tokens.filter(_=>_.type==="space"),f=p.length>0&&p.some(_=>this.rules.other.anyLine.test(_.raw));s.loose=f}for(let c of s.items){let p=c.tokens[0];if(c.task&&((p==null?void 0:p.type)==="text"||(p==null?void 0:p.type)==="paragraph")){c.text=c.text.replace(this.rules.other.listReplaceTask,""),p.raw=p.raw.replace(this.rules.other.listReplaceTask,""),p.text=p.text.replace(this.rules.other.listReplaceTask,"");for(let _=this.lexer.inlineQueue.length-1;_>=0;_--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[_].src)){this.lexer.inlineQueue[_].src=this.lexer.inlineQueue[_].src.replace(this.rules.other.listReplaceTask,"");break}let f=this.rules.other.listTaskCheckbox.exec(c.raw);if(f){let _={type:"checkbox",raw:f[0]+" ",checked:f[0]!=="[ ]"};c.checked=_.checked,s.loose?c.tokens[0]&&["paragraph","text"].includes(c.tokens[0].type)&&"tokens"in c.tokens[0]&&c.tokens[0].tokens?(c.tokens[0].raw=_.raw+c.tokens[0].raw,c.tokens[0].text=_.raw+c.tokens[0].text,c.tokens[0].tokens.unshift(_)):c.tokens.unshift({type:"paragraph",raw:_.raw,text:_.raw,tokens:[_]}):c.tokens.unshift(_)}}else c.task&&(c.task=!1)}if(s.loose)for(let c of s.items){c.loose=!0;for(let p of c.tokens)p.type==="text"&&(p.type="paragraph")}return s}}html(t){let e=this.rules.block.html.exec(t);if(e){let n=Vl(e[0]);return{type:"html",block:!0,raw:n,pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:n}}}def(t){let e=this.rules.block.def.exec(t);if(e){let n=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:es(e[0],`
`),href:r,title:s}}}table(t){var a;let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let n=Wl(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=(a=e[3])!=null&&a.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:es(e[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let l of r)this.rules.other.tableAlignRight.test(l)?o.align.push("right"):this.rules.other.tableAlignCenter.test(l)?o.align.push("center"):this.rules.other.tableAlignLeft.test(l)?o.align.push("left"):o.align.push(null);for(let l=0;l<n.length;l++)o.header.push({text:n[l],tokens:this.lexer.inline(n[l]),header:!0,align:o.align[l]});for(let l of s)o.rows.push(Wl(l,o.header.length).map((c,p)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:o.align[p]})));return o}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e){let n=e[1].trim();return{type:"heading",raw:es(e[0],`
`),depth:e[2].charAt(0)==="="?1:2,text:n,tokens:this.lexer.inline(n)}}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){let e=this.rules.inline.link.exec(t);if(e){let n=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let o=es(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{let o=Gh(e[2],"()");if(o===-2)return;if(o>-1){let a=(e[0].indexOf("!")===0?5:4)+e[1].length+o;e[2]=e[2].substring(0,o),e[0]=e[0].substring(0,a).trim(),e[3]=""}}let r=e[2],s="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(r);o&&(r=o[1],s=o[3])}else s=e[3]?e[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?r=r.slice(1):r=r.slice(1,-1)),ql(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let r=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=e[r.toLowerCase()];if(!s){let o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return ql(n,s,n[0],this.lexer,this.rules)}}emStrong(t,e,n=""){let r=this.rules.inline.emStrongLDelim.exec(t);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let s=[...r[0]].length-1,o,a,l=s,c=0,p=r[0][0],f=n===p,_=p==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(_.lastIndex=0,e=e.slice(-1*t.length+s);(r=_.exec(e))!==null;){if(o=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!o)continue;if(a=[...o].length,r[3]||r[4]){l+=a;continue}else if(r[5]||r[6]){if(s%3&&!((s+a)%3)){c+=a;continue}if(f)break}if(l-=a,l>0)continue;a=Math.min(a,a+l+c);let d=[...r[0]][0].length,T=t.slice(0,s+r.index+d+a);if(Math.min(s,a)%2){let w=T.slice(1,-1);return{type:"em",raw:T,text:w,tokens:this.lexer.inlineTokens(w)}}let b=T.slice(2,-2);return{type:"strong",raw:T,text:b,tokens:this.lexer.inlineTokens(b)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(n),s=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return r&&s&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:e[0],text:n}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t,e,n=""){let r=this.rules.inline.delLDelim.exec(t);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let s=[...r[0]].length-1,o,a,l=s,c=this.rules.inline.delRDelim;for(c.lastIndex=0,e=e.slice(-1*t.length+s);(r=c.exec(e))!==null;){if(o=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!o||(a=[...o].length,a!==s))continue;if(r[3]||r[4]){l+=a;continue}if(l-=a,l>0)continue;a=Math.min(a,a+l);let p=[...r[0]][0].length,f=t.slice(0,s+r.index+p+a),_=f.slice(s,-s);return{type:"del",raw:f,text:_,tokens:this.lexer.inlineTokens(_)}}}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let n,r;return e[2]==="@"?(n=e[1],r="mailto:"+n):(n=e[1],r=n),{type:"link",raw:e[0],text:n,href:r,autolink:!0,tokens:[{type:"text",raw:n,text:n}]}}}url(t){var n;let e;if(e=this.rules.inline.url.exec(t)){let r,s;if(e[2]==="@")r=e[0],s="mailto:"+r;else{let o;do o=e[0],e[0]=((n=this.rules.inline._backpedal.exec(e[0]))==null?void 0:n[0])??"";while(o!==e[0]);r=e[0],e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:r,href:s,autolink:!0,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let n=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:n}}}},or=class Ni{constructor(e){Re(this,"tokens");Re(this,"options");Re(this,"state");Re(this,"inlineQueue");Re(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||As,this.options.tokenizer=this.options.tokenizer||new za,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,top:!0};let n={other:cn,block:va.normal,inline:uo.normal};this.options.pedantic?(n.block=va.pedantic,n.inline=uo.pedantic):this.options.gfm&&(n.block=va.gfm,this.options.breaks?n.inline=uo.breaks:n.inline=uo.gfm),this.tokenizer.rules=n}static get rules(){return{block:va,inline:uo}}static lex(e,n){return new Ni(n).lex(e)}static lexInline(e,n){return new Ni(n).inlineTokens(e)}lex(e){e=e.replace(cn.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){var o,a,l;this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(cn.tabCharGlobal,"    ").replace(cn.spaceLine,""));let s=1/0;for(;e;){if(e.length<s)s=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let c;if((a=(o=this.options.extensions)==null?void 0:o.block)!=null&&a.some(f=>(c=f.call({lexer:this},e,n))?(e=e.substring(c.raw.length),n.push(c),!0):!1))continue;if(c=this.tokenizer.space(e)){e=e.substring(c.raw.length);let f=n.at(-1);c.raw.length===1&&f!==void 0?f.raw+=`
`:n.push(c);continue}if(c=this.tokenizer.code(e)){e=e.substring(c.raw.length);let f=n.at(-1);(f==null?void 0:f.type)==="paragraph"||(f==null?void 0:f.type)==="text"?(f.raw+=(f.raw.endsWith(`
`)?"":`
`)+c.raw,f.text+=`
`+c.text,this.inlineQueue.at(-1).src=f.text):n.push(c);continue}if(c=this.tokenizer.fences(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.heading(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.hr(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.blockquote(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.list(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.html(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.def(e)){e=e.substring(c.raw.length);let f=n.at(-1);(f==null?void 0:f.type)==="paragraph"||(f==null?void 0:f.type)==="text"?(f.raw+=(f.raw.endsWith(`
`)?"":`
`)+c.raw,f.text+=`
`+c.raw,this.inlineQueue.at(-1).src=f.text):this.tokens.links[c.tag]||(this.tokens.links[c.tag]={href:c.href,title:c.title},n.push(c));continue}if(c=this.tokenizer.table(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.lheading(e)){e=e.substring(c.raw.length),n.push(c);continue}let p=e;if((l=this.options.extensions)!=null&&l.startBlock){let f=1/0,_=e.slice(1),d;this.options.extensions.startBlock.forEach(T=>{d=T.call({lexer:this},_),typeof d=="number"&&d>=0&&(f=Math.min(f,d))}),f<1/0&&f>=0&&(p=e.substring(0,f+1))}if(this.state.top&&(c=this.tokenizer.paragraph(p))){let f=n.at(-1);r&&(f==null?void 0:f.type)==="paragraph"?(f.raw+=(f.raw.endsWith(`
`)?"":`
`)+c.raw,f.text+=`
`+c.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=f.text):n.push(c),r=p.length!==e.length,e=e.substring(c.raw.length);continue}if(c=this.tokenizer.text(e)){e=e.substring(c.raw.length);let f=n.at(-1);(f==null?void 0:f.type)==="text"?(f.raw+=(f.raw.endsWith(`
`)?"":`
`)+c.raw,f.text+=`
`+c.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=f.text):n.push(c);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}linkInText(e){if(!e.includes("["))return!1;let n=this.tokenizer.rules.inline.link;for(let r of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(n.test(r[0])&&e.charAt(r.index-1)!=="!")return!0;for(let r of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let s=r[0],o=s.lastIndexOf("[");if(!(s.charAt(0)==="!"||!Object.hasOwn(this.tokens.links,s.slice(o+1,-1)))&&!(o>1&&this.linkInText(s.slice(1,o-1))))return!0}return!1}inlineTokens(e,n=[]){var l,c,p,f,_;this.tokenizer.lexer=this;let r=e;if(this.tokens.links&&e.includes("[")){let d=this.tokenizer.rules.inline.reflinkSearch,T=b=>{let w=b.lastIndexOf("[");if(!Object.hasOwn(this.tokens.links,b.slice(w+1,-1)))return b;if(w>1&&b.charAt(0)!=="!"){let A=b.slice(1,w-1);if(this.linkInText(A))return"["+A.replace(d,T)+"]["+"a".repeat(b.length-w-2)+"]"}return"["+"a".repeat(b.length-2)+"]"};r=r.replace(d,T)}r=r.replace(this.tokenizer.rules.inline.anyPunctuation,d=>"+".repeat(d.length)),r=r.replace(this.tokenizer.rules.inline.blockSkip,(d,T,b)=>{let w=b?b.length:0;return d.slice(0,w)+"["+"a".repeat(d.length-w-2)+"]"}),r=((c=(l=this.options.hooks)==null?void 0:l.emStrongMask)==null?void 0:c.call({lexer:this},r))??r;let s=!1,o="",a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}s||(o=""),s=!1;let d;if((f=(p=this.options.extensions)==null?void 0:p.inline)!=null&&f.some(b=>(d=b.call({lexer:this},e,n))?(e=e.substring(d.raw.length),n.push(d),!0):!1))continue;if(d=this.tokenizer.escape(e)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.tag(e)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.link(e)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(d.raw.length);let b=n.at(-1);d.type==="text"&&(b==null?void 0:b.type)==="text"?(b.raw+=d.raw,b.text+=d.text):n.push(d);continue}if(d=this.tokenizer.emStrong(e,r,o)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.codespan(e)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.br(e)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.del(e,r,o)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.autolink(e)){e=e.substring(d.raw.length),n.push(d);continue}if(!this.state.inLink&&(d=this.tokenizer.url(e))){e=e.substring(d.raw.length),n.push(d);continue}let T=e;if((_=this.options.extensions)!=null&&_.startInline){let b=1/0,w=e.slice(1),A;this.options.extensions.startInline.forEach(O=>{A=O.call({lexer:this},w),typeof A=="number"&&A>=0&&(b=Math.min(b,A))}),b<1/0&&b>=0&&(T=e.substring(0,b+1))}if(d=this.tokenizer.inlineText(T)){e=e.substring(d.raw.length),d.raw.slice(-1)!=="_"&&(o=d.raw.slice(-1)),s=!0;let b=n.at(-1);(b==null?void 0:b.type)==="text"?(b.raw+=d.raw,b.text+=d.text):n.push(d);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return n}infiniteLoopError(e){let n="Infinite loop on byte: "+e;if(this.options.silent)console.error(n);else throw new Error(n)}},Ma=class{constructor(t){Re(this,"options");Re(this,"parser");this.options=t||As}space(t){return""}code({text:t,lang:e,escaped:n}){var o;let r=(o=(e||"").match(cn.notSpaceStart))==null?void 0:o[0],s=t?t.replace(cn.endingNewline,"")+`
`:"";return r?'<pre><code class="language-'+Rn(r)+'">'+(n?s:Rn(s,!0))+`</code></pre>
`:"<pre><code>"+(n?s:Rn(s,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}def(t){return""}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){let e=t.ordered,n=t.start,r="";for(let a=0;a<t.items.length;a++){let l=t.items[a];r+=this.listitem(l)}let s=e?"ol":"ul",o=e&&n!==1?' start="'+n+'"':"";return"<"+s+o+`>
`+r+"</"+s+`>
`}listitem(t){return`<li>${this.parser.parse(t.tokens)}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",n="";for(let s=0;s<t.header.length;s++)n+=this.tablecell(t.header[s]);e+=this.tablerow({text:n});let r="";for(let s=0;s<t.rows.length;s++){let o=t.rows[s];n="";for(let a=0;a<o.length;a++)n+=this.tablecell(o[a]);r+=this.tablerow({text:n})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+r+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){let e=this.parser.parseInline(t.tokens),n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${Rn(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,text:n,tokens:r,autolink:s}){let o=s?Rn(n,!0):this.parser.parseInline(r),a=jl(t);if(a===null)return o;t=Rn(a,s);let l='<a href="'+t+'"';return e&&(l+=' title="'+Rn(e)+'"'),l+=">"+o+"</a>",l}image({href:t,title:e,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let s=jl(t);if(s===null)return Rn(n);t=s;let o=`<img src="${Rn(t)}" alt="${Rn(n)}"`;return e&&(o+=` title="${Rn(e)}"`),o+=">",o}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:Rn(t.text)}},ul=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}checkbox({raw:t}){return t}},ar=class Oi{constructor(e){Re(this,"options");Re(this,"renderer");Re(this,"textRenderer");this.options=e||As,this.options.renderer=this.options.renderer||new Ma,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ul}static parse(e,n){return new Oi(n).parse(e)}static parseInline(e,n){return new Oi(n).parseInline(e)}parse(e){var r,s;this.renderer.parser=this;let n="";for(let o=0;o<e.length;o++){let a=e[o];if((s=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&s[a.type]){let c=a,p=this.options.extensions.renderers[c.type].call({parser:this},c);if(p!==!1||!["space","hr","heading","code","table","blockquote","list","checkbox","html","def","paragraph","text"].includes(c.type)){n+=p||"";continue}}let l=a;switch(l.type){case"space":{n+=this.renderer.space(l);break}case"hr":{n+=this.renderer.hr(l);break}case"heading":{n+=this.renderer.heading(l);break}case"code":{n+=this.renderer.code(l);break}case"table":{n+=this.renderer.table(l);break}case"blockquote":{n+=this.renderer.blockquote(l);break}case"list":{n+=this.renderer.list(l);break}case"checkbox":{n+=this.renderer.checkbox(l);break}case"html":{n+=this.renderer.html(l);break}case"def":{n+=this.renderer.def(l);break}case"paragraph":{n+=this.renderer.paragraph(l);break}case"text":{n+=this.renderer.text(l);break}default:{let c='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return n}parseInline(e,n=this.renderer){var s,o;this.renderer.parser=this;let r="";for(let a=0;a<e.length;a++){let l=e[a];if((o=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&o[l.type]){let p=this.options.extensions.renderers[l.type].call({parser:this},l);if(p!==!1||!["escape","html","link","image","checkbox","strong","em","codespan","br","del","text"].includes(l.type)){r+=p||"";continue}}let c=l;switch(c.type){case"escape":{r+=n.text(c);break}case"html":{r+=n.html(c);break}case"link":{r+=n.link(c);break}case"image":{r+=n.image(c);break}case"checkbox":{r+=n.checkbox(c);break}case"strong":{r+=n.strong(c);break}case"em":{r+=n.em(c);break}case"codespan":{r+=n.codespan(c);break}case"br":{r+=n.br(c);break}case"del":{r+=n.del(c);break}case"text":{r+=n.text(c);break}default:{let p='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(p),"";throw new Error(p)}}}return r}},ma,wo=(ma=class{constructor(t){Re(this,"options");Re(this,"block");this.options=t||As}preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(t=this.block){return t?or.lex:or.lexInline}provideParser(t=this.block){return t?ar.parse:ar.parseInline}},Re(ma,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),Re(ma,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),ma),Zh=class{constructor(...t){Re(this,"defaults",rl());Re(this,"options",this.setOptions);Re(this,"parse",this.parseMarkdown(!0));Re(this,"parseInline",this.parseMarkdown(!1));Re(this,"Parser",ar);Re(this,"Renderer",Ma);Re(this,"TextRenderer",ul);Re(this,"Lexer",or);Re(this,"Tokenizer",za);Re(this,"Hooks",wo);this.use(...t)}walkTokens(t,e){var r,s;let n=[];for(let o of t)switch(n=n.concat(e.call(this,o)),o.type){case"table":{let a=o;for(let l of a.header)n=n.concat(this.walkTokens(l.tokens,e));for(let l of a.rows)for(let c of l)n=n.concat(this.walkTokens(c.tokens,e));break}case"list":{let a=o;n=n.concat(this.walkTokens(a.items,e));break}default:{let a=o;(s=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&s[a.type]?this.defaults.extensions.childTokens[a.type].forEach(l=>{let c=a[l].flat(1/0);n=n.concat(this.walkTokens(c,e))}):a.tokens&&(n=n.concat(this.walkTokens(a.tokens,e)))}}return n}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{let r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){let o=e.renderers[s.name];o?e.renderers[s.name]=function(...a){let l=s.renderer.apply(this,a);return l===!1&&(l=o.apply(this,a)),l}:e.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=e[s.level];o?o.unshift(s.tokenizer):e[s.level]=[s.tokenizer],s.start&&(s.level==="block"?e.startBlock?e.startBlock.push(s.start):e.startBlock=[s.start]:s.level==="inline"&&(e.startInline?e.startInline.push(s.start):e.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(e.childTokens[s.name]=s.childTokens)}),r.extensions=e),n.renderer){let s=this.defaults.renderer||new Ma(this.defaults);for(let o in n.renderer){if(!(o in s))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let a=o,l=n.renderer[a],c=s[a];s[a]=(...p)=>{let f=l.apply(s,p);return f===!1&&(f=c.apply(s,p)),f||""}}r.renderer=s}if(n.tokenizer){let s=this.defaults.tokenizer||new za(this.defaults);for(let o in n.tokenizer){if(!(o in s))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let a=o,l=n.tokenizer[a],c=s[a];s[a]=(...p)=>{let f=l.apply(s,p);return f===!1&&(f=c.apply(s,p)),f}}r.tokenizer=s}if(n.hooks){let s=this.defaults.hooks||new wo;for(let o in n.hooks){if(!(o in s))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let a=o,l=n.hooks[a],c=s[a];wo.passThroughHooks.has(o)?s[a]=p=>{if(this.defaults.async&&wo.passThroughHooksRespectAsync.has(o))return(async()=>{let _=await l.call(s,p);return c.call(s,_)})();let f=l.call(s,p);return c.call(s,f)}:s[a]=(...p)=>{if(this.defaults.async)return(async()=>{let _=await l.apply(s,p);return _===!1&&(_=await c.apply(s,p)),_})();let f=l.apply(s,p);return f===!1&&(f=c.apply(s,p)),f}}r.hooks=s}if(n.walkTokens){let s=this.defaults.walkTokens,o=n.walkTokens;r.walkTokens=function(a){let l=[];return l.push(o.call(this,a)),s&&(l=l.concat(s.call(this,a))),l}}this.defaults={...this.defaults,...r}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return or.lex(t,e??this.defaults)}parser(t,e){return ar.parse(t,e??this.defaults)}parseMarkdown(t){return(e,n)=>{let r={...n},s={...this.defaults,...r},o=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&r.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(s.hooks&&(s.hooks.options=s,s.hooks.block=t),s.async)return(async()=>{let a=s.hooks?await s.hooks.preprocess(e):e,l=await(s.hooks?await s.hooks.provideLexer(t):t?or.lex:or.lexInline)(a,s),c=s.hooks?await s.hooks.processAllTokens(l):l;s.walkTokens&&await Promise.all(this.walkTokens(c,s.walkTokens));let p=await(s.hooks?await s.hooks.provideParser(t):t?ar.parse:ar.parseInline)(c,s);return s.hooks?await s.hooks.postprocess(p):p})().catch(o);try{s.hooks&&(e=s.hooks.preprocess(e));let a=(s.hooks?s.hooks.provideLexer(t):t?or.lex:or.lexInline)(e,s);s.hooks&&(a=s.hooks.processAllTokens(a)),s.walkTokens&&this.walkTokens(a,s.walkTokens);let l=(s.hooks?s.hooks.provideParser(t):t?ar.parse:ar.parseInline)(a,s);return s.hooks&&(l=s.hooks.postprocess(l)),l}catch(a){return o(a)}}}onError(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let r="<p>An error occurred:</p><pre>"+Rn(n.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(n);throw n}}},Es=new Zh;function st(t,e){return Es.parse(t,e)}st.options=st.setOptions=function(t){return Es.setOptions(t),st.defaults=Es.defaults,Tu(st.defaults),st};st.getDefaults=rl;st.defaults=As;function Xh(...t){return Es.use(...t),st.defaults=Es.defaults,Tu(st.defaults),st}st.use=Xh;st.walkTokens=function(t,e){return Es.walkTokens(t,e)};st.parseInline=Es.parseInline;st.Parser=ar;st.parser=ar.parse;st.Renderer=Ma;st.TextRenderer=ul;st.Lexer=or;st.lexer=or.lex;st.Tokenizer=za;st.Hooks=wo;st.parse=st;st.options;st.setOptions;st.walkTokens;st.parseInline;ar.parse;or.lex;/*! @license DOMPurify 3.4.15 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.15/LICENSE */function Gl(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Qh(t){if(Array.isArray(t))return t}function Jh(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,s,o,a,l=[],c=!0,p=!1;try{if(o=(n=n.call(t)).next,e!==0)for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(f){p=!0,s=f}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(p)throw s}}return l}}function ev(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tv(t,e){return Qh(t)||Jh(t,e)||nv(t,e)||ev()}function nv(t,e){if(t){if(typeof t=="string")return Gl(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Gl(t,e):void 0}}const zu=Object.entries,Kl=Object.setPrototypeOf,rv=Object.isFrozen,sv=Object.getPrototypeOf,ov=Object.getOwnPropertyDescriptor;let zt=Object.freeze,Wt=Object.seal,Ns=Object.create,Mu=typeof Reflect<"u"&&Reflect,zi=Mu.apply,Mi=Mu.construct;zt||(zt=function(e){return e});Wt||(Wt=function(e){return e});zi||(zi=function(e,n){for(var r=arguments.length,s=new Array(r>2?r-2:0),o=2;o<r;o++)s[o-2]=arguments[o];return e.apply(n,s)});Mi||(Mi=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return new e(...r)});const fs=At(Array.prototype.forEach),av=At(Array.prototype.lastIndexOf),Yl=At(Array.prototype.pop),fo=At(Array.prototype.push),iv=At(Array.prototype.splice),Ls=Array.isArray,So=At(String.prototype.toLowerCase),li=At(String.prototype.toString),Zl=At(String.prototype.match),po=At(String.prototype.replace),Xl=At(String.prototype.indexOf),lv=At(String.prototype.trim),cv=At(Number.prototype.toString),uv=At(Boolean.prototype.toString),Ql=typeof BigInt>"u"?null:At(BigInt.prototype.toString),Jl=typeof Symbol>"u"?null:At(Symbol.prototype.toString),yn=At(Object.prototype.hasOwnProperty),ho=At(Object.prototype.toString),ln=At(RegExp.prototype.test),ls=fv(TypeError);function At(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return zi(t,e,r)}}function fv(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return Mi(t,n)}}function Ye(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:So;if(Kl&&Kl(t,null),!Ls(e))return t;let r=e.length;for(;r--;){let s=e[r];if(typeof s=="string"){const o=n(s);o!==s&&(rv(e)||(e[r]=o),s=o)}t[s]=!0}return t}function dv(t){for(let e=0;e<t.length;e++)yn(t,e)||(t[e]=null);return t}function Pn(t){const e=Ns(null);for(const r of zu(t)){var n=tv(r,2);const s=n[0],o=n[1];yn(t,s)&&(Ls(o)?e[s]=dv(o):o&&typeof o=="object"&&o.constructor===Object?e[s]=Pn(o):e[s]=o)}return e}function pv(t){switch(typeof t){case"string":return t;case"number":return cv(t);case"boolean":return uv(t);case"bigint":return Ql?Ql(t):"0";case"symbol":return Jl?Jl(t):"Symbol()";case"undefined":return ho(t);case"function":case"object":{if(t===null)return ho(t);const e=t,n=Un(e,"toString");if(typeof n=="function"){const r=n(e);return typeof r=="string"?r:ho(r)}return ho(t)}default:return ho(t)}}function Un(t,e){for(;t!==null;){const r=ov(t,e);if(r){if(r.get)return At(r.get);if(typeof r.value=="function")return At(r.value)}t=sv(t)}function n(){return null}return n}function hv(t){try{return ln(t,""),!0}catch{return!1}}const ec=zt(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),ci=zt(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ui=zt(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),vv=zt(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),fi=zt(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),gv=zt(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),tc=zt(["#text"]),nc=zt(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),di=zt(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),rc=zt(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ga=zt(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),mv=Wt(/{{[\w\W]*|^[\w\W]*}}/g),_v=Wt(/<%[\w\W]*|^[\w\W]*%>/g),bv=Wt(/\${[\w\W]*/g),xv=Wt(/^data-[\-\w.\u00B7-\uFFFF]+$/),yv=Wt(/^aria-[\-\w]+$/),sc=Wt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),kv=Wt(/^(?:\w+script|data):/i),wv=Wt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Sv=Wt(/^html$/i),Tv=Wt(/^[a-z][.\w]*(-[.\w]+)+$/i),oc=Wt(/<[/\w!]/g),ac=Wt(/<[/\w]/g),$v=Wt(/<\/no(script|embed|frames)/i),Ev=Wt(/\/>/i),Cn={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Lu=["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"],Av=zt(Ye({},Lu)),Cv=(function(){const t={};return fs(Lu,e=>{t[e]=Wt(new RegExp("</"+e+"(?=[\\t\\n\\f\\r />])","i"))}),zt(t)})(),Rv=function(){return typeof window>"u"?null:window},Pv=function(e,n){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let r=null;const s="data-tt-policy-suffix";n&&n.hasAttribute(s)&&(r=n.getAttribute(s));const o="dompurify"+(r?"#"+r:"");try{return e.createPolicy(o,{createHTML(a){return a},createScriptURL(a){return a}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}},ic=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},ts=function(e,n,r,s){return yn(e,n)&&Ls(e[n])?Ye(s.base?Pn(s.base):{},e[n],s.transform):r},pi=function(e,n,r){const s=yn(e,n)?e[n]:void 0;return s&&typeof s=="object"?Pn(s):r()};function Du(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Rv();const e=F=>Du(F);if(e.version="3.4.15",e.removed=[],!t||!t.document||t.document.nodeType!==Cn.document||!t.Element)return e.isSupported=!1,e;let n=t.document;const r=n,s=r.currentScript;t.DocumentFragment;const o=t.HTMLTemplateElement,a=t.Node,l=t.Element,c=t.NodeFilter,p=t.NamedNodeMap;p===void 0&&(t.NamedNodeMap||t.MozNamedAttrMap),t.HTMLFormElement;const f=t.DOMParser,_=t.trustedTypes,d=l.prototype,T=Un(d,"cloneNode"),b=Un(d,"remove"),w=Un(d,"removeAttributeNode"),A=Un(d,"nextSibling"),O=Un(d,"childNodes"),U=Un(d,"parentNode"),B=Un(d,"shadowRoot"),Y=Un(d,"attributes"),C=a&&a.prototype?Un(a.prototype,"nodeType"):null,E=a&&a.prototype?Un(a.prototype,"nodeName"):null,z=a&&a.prototype?Un(a.prototype,"ownerDocument"):null,J=function(u){return C?C(u):u.nodeType},Q=function(u){return E?E(u):u.nodeName};if(typeof o=="function"){const F=n.createElement("template");F.content&&F.content.ownerDocument&&(n=F.content.ownerDocument)}let de,pe="",he,Ze=!1,Ge=0;const Je=function(){if(Ge>0)throw ls('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},K=function(u){Je(),Ge++;try{return de.createHTML(u)}finally{Ge--}},ve=function(u){Je(),Ge++;try{return de.createScriptURL(u)}finally{Ge--}},re=function(){return Ze||(he=Pv(_,s),Ze=!0),he},se=n,P=se.implementation,D=se.createNodeIterator,ee=se.createDocumentFragment,be=se.getElementsByTagName,we=r.importNode;let Ne=ic();e.isSupported=typeof zu=="function"&&typeof U=="function"&&P&&P.createHTMLDocument!==void 0;const rn=mv,gn=_v,Vt=bv,qt=xv,pr=yv,Pr=kv,Ir=wv,Nr=Tv;let hr=sc,_e=null;const Gt=Ye({},[...ec,...ci,...ui,...fi,...tc]);let Le=null;const Xn=Ye({},[...nc,...di,...rc,...ga]);let Mt=Object.seal(Ns(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Tn=null,vr=null;const sn=Object.seal(Ns(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Or=!0,gr=!0,Qn=!1,mn=!0,on=!1,$n=!0,Lt=!1,mr=!1,Jn=null,Mn=null,er=!1,En=!1,An=!1,tr=!1,Kr=!0,Yr=!1;const zr="user-content-";let Mr=!0,Ln=!1,_n={},Dn=null;const Lr=Ye({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let ie=null;const et=Ye({},["audio","video","img","source","image","track"]);let We=null;const xe=Ye({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ve="http://www.w3.org/1998/Math/MathML",wt="http://www.w3.org/2000/svg",Be="http://www.w3.org/1999/xhtml";let Ct=Be,Kt=!1,ot=null;const Rt=Ye({},[Ve,wt,Be],li),ht=zt(["mi","mo","mn","ms","mtext"]);let Pt=Ye({},ht);const Fn=zt(["annotation-xml"]);let It=Ye({},Fn);const St=Ye({},["title","style","font","a","script"]);let vt=null;const Hn=["application/xhtml+xml","text/html"],$="text/html";let I=null,V=null;const Ae=n.createElement("form"),Oe=function(u){return u instanceof RegExp||u instanceof Function},qe=function(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(V&&V===u)return;(!u||typeof u!="object")&&(u={}),u=Pn(u),vt=Hn.indexOf(u.PARSER_MEDIA_TYPE)===-1?$:u.PARSER_MEDIA_TYPE,I=vt==="application/xhtml+xml"?li:So,_e=ts(u,"ALLOWED_TAGS",Gt,{transform:I}),Le=ts(u,"ALLOWED_ATTR",Xn,{transform:I}),ot=ts(u,"ALLOWED_NAMESPACES",Rt,{transform:li}),We=ts(u,"ADD_URI_SAFE_ATTR",xe,{transform:I,base:xe}),ie=ts(u,"ADD_DATA_URI_TAGS",et,{transform:I,base:et}),Dn=ts(u,"FORBID_CONTENTS",Lr,{transform:I}),Tn=ts(u,"FORBID_TAGS",Pn({}),{transform:I}),vr=ts(u,"FORBID_ATTR",Pn({}),{transform:I}),_n=yn(u,"USE_PROFILES")?u.USE_PROFILES&&typeof u.USE_PROFILES=="object"?Pn(u.USE_PROFILES):u.USE_PROFILES:!1,Or=u.ALLOW_ARIA_ATTR!==!1,gr=u.ALLOW_DATA_ATTR!==!1,Qn=u.ALLOW_UNKNOWN_PROTOCOLS||!1,mn=u.ALLOW_SELF_CLOSE_IN_ATTR!==!1,on=u.SAFE_FOR_TEMPLATES||!1,$n=u.SAFE_FOR_XML!==!1,Lt=u.WHOLE_DOCUMENT||!1,En=u.RETURN_DOM||!1,An=u.RETURN_DOM_FRAGMENT||!1,tr=u.RETURN_TRUSTED_TYPE||!1,er=u.FORCE_BODY||!1,Kr=u.SANITIZE_DOM!==!1,Yr=u.SANITIZE_NAMED_PROPS||!1,Mr=u.KEEP_CONTENT!==!1,Ln=u.IN_PLACE||!1,hr=hv(u.ALLOWED_URI_REGEXP)?u.ALLOWED_URI_REGEXP:sc,Ct=typeof u.NAMESPACE=="string"?u.NAMESPACE:Be,Pt=pi(u,"MATHML_TEXT_INTEGRATION_POINTS",()=>Ye({},ht)),It=pi(u,"HTML_INTEGRATION_POINTS",()=>Ye({},Fn));const k=pi(u,"CUSTOM_ELEMENT_HANDLING",()=>Ns(null));if(Mt=Ns(null),yn(k,"tagNameCheck")&&Oe(k.tagNameCheck)&&(Mt.tagNameCheck=k.tagNameCheck),yn(k,"attributeNameCheck")&&Oe(k.attributeNameCheck)&&(Mt.attributeNameCheck=k.attributeNameCheck),yn(k,"allowCustomizedBuiltInElements")&&typeof k.allowCustomizedBuiltInElements=="boolean"&&(Mt.allowCustomizedBuiltInElements=k.allowCustomizedBuiltInElements),Wt(Mt),on&&(gr=!1),An&&(En=!0),_n&&(_e=Ye({},tc),Le=Ns(null),_n.html===!0&&(Ye(_e,ec),Ye(Le,nc)),_n.svg===!0&&(Ye(_e,ci),Ye(Le,di),Ye(Le,ga)),_n.svgFilters===!0&&(Ye(_e,ui),Ye(Le,di),Ye(Le,ga)),_n.mathMl===!0&&(Ye(_e,fi),Ye(Le,rc),Ye(Le,ga))),sn.tagCheck=null,sn.attributeCheck=null,yn(u,"ADD_TAGS")&&(typeof u.ADD_TAGS=="function"?sn.tagCheck=u.ADD_TAGS:Ls(u.ADD_TAGS)&&(_e===Gt&&(_e=Pn(_e)),Ye(_e,u.ADD_TAGS,I))),yn(u,"ADD_ATTR")&&(typeof u.ADD_ATTR=="function"?sn.attributeCheck=u.ADD_ATTR:Ls(u.ADD_ATTR)&&(Le===Xn&&(Le=Pn(Le)),Ye(Le,u.ADD_ATTR,I))),yn(u,"ADD_FORBID_CONTENTS")&&Ls(u.ADD_FORBID_CONTENTS)&&(Dn===Lr&&(Dn=Pn(Dn)),Ye(Dn,u.ADD_FORBID_CONTENTS,I)),Mr&&(_e["#text"]=!0),Lt&&Ye(_e,["html","head","body"]),_e.table&&(Ye(_e,["tbody"]),delete Tn.tbody),u.TRUSTED_TYPES_POLICY){if(typeof u.TRUSTED_TYPES_POLICY.createHTML!="function")throw ls('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof u.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw ls('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const M=de;de=u.TRUSTED_TYPES_POLICY;try{pe=K("")}catch(G){throw de=M,G}}else u.TRUSTED_TYPES_POLICY===null?(de=void 0,pe=""):(de===void 0&&(de=re()),de&&typeof pe=="string"&&(pe=K("")));zt&&zt(u),V=u},tt=Ye({},[...ci,...ui,...vv]),x=Ye({},[...fi,...gv]),R=function(u,k,M){return k.namespaceURI===Be?u==="svg":k.namespaceURI===Ve?u==="svg"&&(M==="annotation-xml"||Pt[M]):!!tt[u]},W=function(u,k,M){return k.namespaceURI===Be?u==="math":k.namespaceURI===wt?u==="math"&&It[M]:!!x[u]},oe=function(u,k,M){return k.namespaceURI===wt&&!It[M]||k.namespaceURI===Ve&&!Pt[M]?!1:!x[u]&&(St[u]||!tt[u])},ce=function(u){let k=U(u);(!k||!k.tagName)&&(k={namespaceURI:Ct,tagName:"template"});const M=So(u.tagName),G=So(k.tagName);return ot[u.namespaceURI]?u.namespaceURI===wt?R(M,k,G):u.namespaceURI===Ve?W(M,k,G):u.namespaceURI===Be?oe(M,k,G):!!(vt==="application/xhtml+xml"&&ot[u.namespaceURI]):!1},fe=function(u){fo(e.removed,{element:u});try{U(u).removeChild(u)}catch{if(b(u),!U(u))throw ls("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},ye=function(u,k,M){try{w(u,k)}catch{try{u.removeAttribute(M)}catch{}}},De=function(u){Ue(u);const k=O(u);if(k){const G=[];fs(k,te=>{fo(G,te)}),fs(G,te=>{try{b(te)}catch{}})}const M=Y(u);if(M)for(let G=M.length-1;G>=0;--G){const te=M[G],ge=te&&te.name;typeof ge=="string"&&ye(u,te,ge)}},le=function(u,k,M){if(!M)try{M=k.getAttributeNode(u)}catch{M=null}fo(e.removed,{attribute:M||null,from:k});try{M?w(k,M):k.removeAttribute(u)}catch{try{k.removeAttribute(u)}catch{}}if(u==="is")if(En||An)try{fe(k)}catch{}else try{k.setAttribute(u,"")}catch{}},Ce=function(u){const k=Y(u);if(k)for(let M=k.length-1;M>=0;--M){const G=k[M],te=G&&G.name;typeof te!="string"||Le[I(te)]||ye(u,G,te)}},Ue=function(u){const k=[u];for(;k.length>0;){const M=k.pop();J(M)===Cn.element&&Ce(M);const te=O(M);if(te)for(let ge=te.length-1;ge>=0;--ge)k.push(te[ge])}},gt=function(u,k){return $n?u==="patchsrc"?!0:u==="for"&&k!=="label"&&k!=="output":!1},ze=function(u){if(!$n)return;const k=[u];for(;k.length>0;){const M=k.pop(),G=J(M);if(G===Cn.processingInstruction||G===Cn.comment&&ln(ac,M.data)){try{b(M)}catch{}continue}if(G===Cn.element){const ge=M,Ke=I(Q(M));try{ge.hasAttribute&&ge.hasAttribute("patchsrc")&&ge.removeAttribute("patchsrc"),ge.hasAttribute&&ge.hasAttribute("for")&&gt("for",Ke)&&ge.removeAttribute("for")}catch{}}const te=O(M);if(te)for(let ge=te.length-1;ge>=0;--ge)k.push(te[ge])}},lt=function(u){let k=null,M=null;if(er)u="<remove></remove>"+u;else{const ge=Zl(u,/^[\r\n\t ]+/);M=ge&&ge[0]}vt==="application/xhtml+xml"&&Ct===Be&&(u='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+u+"</body></html>");const G=de?K(u):u;if(Ct===Be)try{k=new f().parseFromString(G,vt)}catch{}if(!k||!k.documentElement){k=P.createDocument(Ct,"template",null);try{k.documentElement.innerHTML=Kt?pe:G}catch{}}const te=k.body||k.documentElement;return u&&M&&te.insertBefore(n.createTextNode(M),te.childNodes[0]||null),Ct===Be?be.call(k,Lt?"html":"body")[0]:Lt?k.documentElement:te},Tt=function(u){const k=z?z(u):u.ownerDocument;return D.call(k||u,u,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},Dt=function(u){return u=po(u,rn," "),u=po(u,gn," "),u=po(u,Vt," "),u},ft=function(u){var k;u.normalize();const M=z?z(u):u.ownerDocument,G=D.call(M||u,u,c.SHOW_TEXT|c.SHOW_COMMENT|c.SHOW_CDATA_SECTION|c.SHOW_PROCESSING_INSTRUCTION,null);let te=G.nextNode();for(;te;)te.data=Dt(te.data),te=G.nextNode();const ge=(k=u.querySelectorAll)===null||k===void 0?void 0:k.call(u,"template");ge&&fs(ge,Ke=>{kt(Ke.content)&&ft(Ke.content)})},mt=function(u){const k=E?E(u):null;return typeof k!="string"||I(k)!=="form"?!1:typeof u.nodeName!="string"||typeof u.textContent!="string"||typeof u.removeChild!="function"||u.attributes!==Y(u)||typeof u.removeAttribute!="function"||typeof u.removeAttributeNode!="function"||typeof u.getAttributeNode!="function"||typeof u.setAttribute!="function"||typeof u.namespaceURI!="string"||typeof u.insertBefore!="function"||typeof u.hasChildNodes!="function"||u.nodeType!==C(u)||u.childNodes!==O(u)},kt=function(u){if(!C||typeof u!="object"||u===null)return!1;try{return C(u)===Cn.documentFragment}catch{return!1}},Yt=function(u){if(!C||typeof u!="object"||u===null)return!1;try{return typeof C(u)=="number"}catch{return!1}};function Zt(F,u,k){F.length!==0&&fs(F,M=>{M.call(e,u,k,V)})}const Dr=function(u,k){return!!($n&&u.hasChildNodes()&&!Yt(u.firstElementChild)&&ln(oc,u.textContent)&&ln(oc,u.innerHTML)||$n&&u.namespaceURI===Be&&Av[k]&&(Yt(u.firstElementChild)||typeof u.textContent=="string"&&ln(Cv[k],u.textContent))||u.nodeType===Cn.processingInstruction||$n&&u.nodeType===Cn.comment&&ln(ac,u.data))},_r=function(u,k){if(u instanceof RegExp)return ln(u,k);if(u instanceof Function){for(var M=arguments.length,G=new Array(M>2?M-2:0),te=2;te<M;te++)G[te-2]=arguments[te];return!!u(k,...G)}return!1},br=function(u,k,M){if(!Tn[k]&&Bn(k)&&_r(Mt.tagNameCheck,k))return!1;if(Mr&&!Dn[k]){const G=U(u),te=O(u);if(te&&G){const ge=te.length;for(let Ke=ge-1;Ke>=0;--Ke){const rt=u===M?T(te[Ke],!0):te[Ke];G.insertBefore(rt,A(u))}}}return fe(u),!0},Xe=function(u,k,M,G){return u.length===0?k:k===M||k===G?Pn(k):k},dt=function(u,k){return u===k||U(u)!==null?!1:(Ln&&Ue(u),!0)},pt=function(u,k){if(Zt(Ne.beforeSanitizeElements,u,null),dt(u,k))return!0;if(mt(u))return fe(u),!0;const M=I(Q(u));if(_e=Xe(Ne.uponSanitizeElement,_e,Gt,Jn),Zt(Ne.uponSanitizeElement,u,{tagName:M,allowedTags:_e}),dt(u,k))return!0;if(Dr(u,M))return fe(u),!0;if(Tn[M]||!(sn.tagCheck instanceof Function&&sn.tagCheck(M))&&!_e[M]){const te=br(u,M,k);return te===!1&&Zt(Ne.afterSanitizeElements,u,null),te}if(J(u)===Cn.element&&!ce(u)||(M==="noscript"||M==="noembed"||M==="noframes")&&ln($v,u.innerHTML))return fe(u),!0;if(on&&u.nodeType===Cn.text){const te=Dt(u.textContent);u.textContent!==te&&(fo(e.removed,{element:u.cloneNode()}),u.textContent=te)}return Zt(Ne.afterSanitizeElements,u,null),!1},bn=function(u,k,M){if(vr[k]||gt(k,u)||Kr&&(k==="id"||k==="name")&&(M in n||M in Ae))return!1;const G=Le[k]||sn.attributeCheck instanceof Function&&sn.attributeCheck(k,u);return gr&&ln(qt,k)||Or&&ln(pr,k)?!0:G?We[k]||ln(hr,po(M,Ir,""))||(k==="src"||k==="xlink:href"||k==="href")&&u!=="script"&&Xl(M,"data:")===0&&ie[u]||Qn&&!ln(Pr,po(M,Ir,""))?!0:!M:Bn(u)&&_r(Mt.tagNameCheck,u)&&_r(Mt.attributeNameCheck,k,u)||k==="is"&&Mt.allowCustomizedBuiltInElements&&_r(Mt.tagNameCheck,M)},Ft=Ye({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),Bn=function(u){return!Ft[So(u)]&&ln(Nr,u)},Zr=function(u,k,M,G){if(de&&typeof _=="object"&&typeof _.getAttributeType=="function"&&!M)switch(_.getAttributeType(u,k)){case"TrustedHTML":return K(G);case"TrustedScriptURL":return ve(G)}return G},Xr=function(u,k,M,G){try{return M?u.setAttributeNS(M,k,G):u.setAttribute(k,G),mt(u)?(fe(u),!1):!0}catch{return le(k,u),!1}},Xt=function(u){Zt(Ne.beforeSanitizeAttributes,u,null);const k=u.attributes;if(!k||mt(u))return;Le=Xe(Ne.uponSanitizeAttribute,Le,Xn,Mn);const M={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Le,forceKeepAttr:void 0};let G=k.length;const te=I(u.nodeName);for(;G--;){const ge=k[G],Ke=ge.name,rt=ge.namespaceURI,at=ge.value,an=I(Ke),oo=at;let Jt=Ke==="value"?oo:lv(oo),Ht=!1;if(M.attrName=an,M.attrValue=Jt,M.keepAttr=!0,M.forceKeepAttr=void 0,Zt(Ne.uponSanitizeAttribute,u,M),Jt=M.attrValue,Yr&&(an==="id"||an==="name")&&Xl(Jt,zr)!==0&&(le(Ke,u,ge),Jt=zr+Jt,Ht=!0),$n&&ln(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,Jt)){le(Ke,u,ge);continue}if(an==="attributename"&&Zl(Jt,"href")){le(Ke,u,ge);continue}if(!M.forceKeepAttr){if(!M.keepAttr){le(Ke,u,ge);continue}if(!mn&&ln(Ev,Jt)){le(Ke,u,ge);continue}if(on&&(Jt=Dt(Jt)),!bn(te,an,Jt)){le(Ke,u,ge);continue}Jt=Zr(te,an,rt,Jt),Jt!==oo&&Xr(u,Ke,rt,Jt)&&Ht&&Yl(e.removed)}}Zt(Ne.afterSanitizeAttributes,u,null)},Qt=function(u){let k=null;const M=Tt(u);for(Zt(Ne.beforeSanitizeShadowDOM,u,null);k=M.nextNode();)if(Zt(Ne.uponSanitizeShadowNode,k,null),pt(k,u),Xt(k),kt(k.content)&&Qt(k.content),J(k)===Cn.element){const G=B(k);kt(G)&&(Fr(G),Qt(G))}Zt(Ne.afterSanitizeShadowDOM,u,null)},Fr=function(u){const k=[{node:u,shadow:null}];for(;k.length>0;){const M=k.pop();if(M.shadow){Qt(M.shadow);continue}const G=M.node,ge=J(G)===Cn.element,Ke=O(G);if(Ke)for(let rt=Ke.length-1;rt>=0;--rt)k.push({node:Ke[rt],shadow:null});if(ge){const rt=E?E(G):null;if(typeof rt=="string"&&I(rt)==="template"){const at=G.content;kt(at)&&k.push({node:at,shadow:null})}}if(ge){const rt=B(G);kt(rt)&&k.push({node:null,shadow:rt},{node:rt,shadow:null})}}};return e.sanitize=function(F){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},k=null,M=null,G=null,te=null;if(Kt=!F,Kt&&(F="<!-->"),typeof F!="string"&&!Yt(F)&&(F=pv(F),typeof F!="string"))throw ls("dirty is not a string, aborting");if(!e.isSupported)return F;mr?(_e=Jn,Le=Mn):qe(u),(Ne.uponSanitizeElement.length>0||Ne.uponSanitizeAttribute.length>0)&&(_e=Pn(_e)),Ne.uponSanitizeAttribute.length>0&&(Le=Pn(Le)),e.removed=[];const ge=Ln&&typeof F!="string"&&Yt(F);if(ge){ze(F);const at=Q(F);if(typeof at=="string"){const an=I(at);if(!_e[an]||Tn[an])throw De(F),ls("root node is forbidden and cannot be sanitized in-place")}if(mt(F))throw De(F),ls("root node is clobbered and cannot be sanitized in-place");try{Fr(F)}catch(an){throw De(F),an}}else if(Yt(F))k=lt("<!---->"),M=k.ownerDocument.importNode(F,!0),M.nodeType===Cn.element&&M.nodeName==="BODY"||M.nodeName==="HTML"?k=M:k.appendChild(M),Fr(k);else{if(!En&&!on&&!Lt&&F.indexOf("<")===-1)return de&&tr?K(F):F;if(k=lt(F),!k)return En?null:tr?pe:""}k&&er&&fe(k.firstChild);const Ke=ge?F:k;try{const at=Tt(Ke);for(;G=at.nextNode();)pt(G,Ke),Xt(G),kt(G.content)&&Qt(G.content)}catch(at){throw ge&&(De(F),fs(e.removed,an=>{an.element&&Ue(an.element)})),at}if(ge)return fs(e.removed,at=>{at.element&&Ue(at.element)}),on&&ft(F),F;if(En){if(on&&ft(k),An)for(te=ee.call(k.ownerDocument);k.firstChild;)te.appendChild(k.firstChild);else te=k;return(Le.shadowroot||Le.shadowrootmode)&&(te=we.call(r,te,!0)),te}let rt=Lt?k.outerHTML:k.innerHTML;return Lt&&_e["!doctype"]&&k.ownerDocument&&k.ownerDocument.doctype&&k.ownerDocument.doctype.name&&ln(Sv,k.ownerDocument.doctype.name)&&(rt="<!DOCTYPE "+k.ownerDocument.doctype.name+`>
`+rt),on&&(rt=Dt(rt)),de&&tr?K(rt):rt},e.setConfig=function(){let F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};qe(F),mr=!0,Jn=_e,Mn=Le},e.clearConfig=function(){V=null,mr=!1,Jn=null,Mn=null,de=he,pe=""},e.isValidAttribute=function(F,u,k){V||qe({});const M=I(F),G=I(u);return bn(M,G,k)},e.addHook=function(F,u){typeof u=="function"&&yn(Ne,F)&&fo(Ne[F],u)},e.removeHook=function(F,u){if(yn(Ne,F)){if(u!==void 0){const k=av(Ne[F],u);return k===-1?void 0:iv(Ne[F],k,1)[0]}return Yl(Ne[F])}},e.removeHooks=function(F){yn(Ne,F)&&(Ne[F]=[])},e.removeAllHooks=function(){Ne=ic()},e}var Iv=Du(),Nv=N(`<div class="pointer-events-none absolute inset-2 z-20 flex items-center justify-center
                rounded-md border-2 border-dashed border-mk-green/70 bg-mk-bg/80 text-xs text-mk-green svelte-1roe1v9">Drop files to attach</div>`),Ov=N('<p class="rounded-sm border border-mk-pink/40 bg-mk-pink/10 px-2 py-1 text-xs text-mk-pink svelte-1roe1v9"> </p>'),zv=N('<div class="flex flex-col items-start gap-1 svelte-1roe1v9"><span class="flex items-center gap-1.5 text-[11px] font-semibold text-mk-green svelte-1roe1v9"><!> </span> <div class="chat-bubble chat-bubble-agent chat-prose text-[13px] leading-relaxed text-mk-fg svelte-1roe1v9"></div></div>'),Mv=N('<div class="flex flex-col items-end gap-1 svelte-1roe1v9"><span class="text-[11px] font-semibold text-mk-blue svelte-1roe1v9">You</span> <div class="chat-bubble chat-bubble-user text-[13px] leading-relaxed whitespace-pre-wrap text-mk-fg svelte-1roe1v9"> </div></div>'),Lv=N(`<div class="m-auto flex max-w-[250px] flex-col items-center gap-2.5 text-center svelte-1roe1v9"><!> <p class="text-xs leading-relaxed text-mk-comment svelte-1roe1v9">Ask about the file you have open. The prompt goes to <span class="text-mk-muted svelte-1roe1v9"> </span>,
            and the reply appears here.</p></div>`),lc=N('<span class="text-mk-comment svelte-1roe1v9"> </span>'),Dv=N('<div class="flex items-start gap-1.5 text-mk-comment svelte-1roe1v9"><span class="mt-[3px] text-mk-green svelte-1roe1v9">●</span> <span class="truncate svelte-1roe1v9"><b class="font-medium text-mk-fg/80 svelte-1roe1v9"> </b> <!></span></div>'),Fv=N('<div class="flex flex-col gap-0.5 text-[11px] svelte-1roe1v9"></div>'),Hv=N('<div class="flex flex-col items-start gap-1 svelte-1roe1v9"><span class="flex items-center gap-1.5 text-[11px] font-semibold text-mk-green svelte-1roe1v9"><!> </span> <div class="chat-bubble chat-bubble-agent chat-prose text-[13px] leading-relaxed text-mk-fg svelte-1roe1v9"><!><span class="chat-caret svelte-1roe1v9"></span></div></div>'),Bv=N('<div class="flex items-center gap-2 text-[11px] text-mk-comment svelte-1roe1v9"><!> <span class="svelte-1roe1v9"> <span class="chat-dots svelte-1roe1v9"></span></span></div>'),Uv=N(`<button class="mx-auto -mt-1 mb-1 flex shrink-0 items-center gap-1 rounded-full border border-mk-line
             bg-mk-input px-2.5 py-0.5 text-[11px] text-mk-comment shadow hover:text-mk-fg svelte-1roe1v9"><!> </button>`),jv=N(`<span title="Context used of the model's window"> </span> <span class="h-2 w-16 overflow-hidden rounded-full bg-mk-line svelte-1roe1v9" aria-hidden="true"><span></span></span>`,1),Wv=N('<span class="text-mk-muted svelte-1roe1v9" title="Several sessions share this folder — totals cover all of them">shared</span>'),Vv=N('<span class="truncate text-mk-muted svelte-1roe1v9" title="Model for the most recent turn"> </span>'),qv=N('<!> <span class="svelte-1roe1v9"> </span> <!> <!> <!>',1),Gv=N('<span class="text-mk-muted svelte-1roe1v9">No usage reported yet</span>'),Kv=N('<button class="ml-auto flex items-center gap-1 rounded-sm px-1.5 py-0.5 hover:bg-mk-line hover:text-mk-fg disabled:opacity-40 svelte-1roe1v9" title="Compact the conversation to free up context (/compact)"><!> Compact</button>'),Yv=N('<span class="flex items-center gap-1 rounded-sm bg-mk-input px-1.5 py-0.5 text-[11px] text-mk-fg svelte-1roe1v9"><!> <button class="rounded-sm p-0.5 text-mk-comment hover:text-mk-fg svelte-1roe1v9" title="Remove attachment">×</button></span>'),Zv=N('<div class="flex shrink-0 flex-wrap gap-1 border-t border-mk-line px-3 py-1.5 svelte-1roe1v9"></div>'),cc=N('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line svelte-1roe1v9"><span class="w-3 text-mk-green svelte-1roe1v9"><!></span> </button>'),Xv=N('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[150px] rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl svelte-1roe1v9"></div>'),Qv=N('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line svelte-1roe1v9"><span class="w-3 text-mk-green svelte-1roe1v9"><!></span> <span class="truncate svelte-1roe1v9"> </span></button>'),Jv=N('<div class="absolute bottom-full left-0 z-20 mb-1 max-h-[260px] min-w-[190px] overflow-y-auto rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl svelte-1roe1v9"></div>'),eg=N('<div class="relative svelte-1roe1v9" data-menu=""><button class="flex max-w-[110px] items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg svelte-1roe1v9" title="Model"><span class="truncate svelte-1roe1v9"> </span> <!></button> <!></div>'),tg=N('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[130px] rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl svelte-1roe1v9"></div>'),ng=N('<div class="relative svelte-1roe1v9" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg svelte-1roe1v9" title="Reasoning effort"> <!></button> <!></div>'),rg=N('<div class="relative flex h-full min-h-0 flex-col bg-mk-bg text-mk-fg svelte-1roe1v9" role="region" aria-label="AI Agent conversation"><!> <div class="relative flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-3 py-3 svelte-1roe1v9"><!> <!> <!> <!> <!></div> <!> <div class="flex shrink-0 items-center gap-2 border-t border-mk-line px-3 py-1 text-[10px] text-mk-comment svelte-1roe1v9"><!> <!></div> <!> <div class="border-t border-mk-line p-2 svelte-1roe1v9"><div class="rounded-md border border-mk-line bg-mk-input focus-within:border-mk-green svelte-1roe1v9"><textarea rows="2" class="max-h-[200px] w-full resize-none bg-transparent px-2.5 py-2 text-[13px] text-mk-fg outline-none placeholder:text-mk-comment svelte-1roe1v9" placeholder="Ask about this workspace…"></textarea> <div class="flex items-center gap-1 px-1.5 pb-1.5 text-[11px] svelte-1roe1v9"><div class="relative svelte-1roe1v9" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg svelte-1roe1v9" title="Agent"> <!></button> <!></div> <!> <!> <!> <span class="ml-auto flex items-center gap-1.5 svelte-1roe1v9"><kbd class="hidden text-[10px] text-mk-comment sm:inline svelte-1roe1v9">↵ send · ⇧↵ newline</kbd> <button class="flex h-6 w-6 items-center justify-center rounded-md bg-mk-green text-mk-bg disabled:opacity-40 svelte-1roe1v9" title="Send (Enter)" aria-label="Send"><!></button></span></div></div></div></div>');function sg(t,e){hn(e,!0);let n=yt(e,"sessions",19,()=>[]),r=yt(e,"session",3,""),s=yt(e,"rootPath",3,""),o=yt(e,"target",15,"");tn(()=>{!o()&&(r()||n()[0])&&o(r()||n()[0])});let a=L(""),l=L(!1),c=0,p=L(!1),f=L(""),_=L(Qe([])),d=L(null),T=L("");const b=Bt(()=>i(l)||i(p)||!!i(f)),w=Bt(()=>{const x=[...i(_)].reverse().find(R=>R.type==="tool");return x?`Running ${x.name}`:i(f)?"Writing":i(T)||"Generating"});let A=L(Qe([])),O=L(""),U=L(null),B=L(null),Y=null,C=L(Qe({agent:"codex",available:[],model:"",effort:"",models:[],efforts:[]})),E=L(""),z=L("");const J=Bt(()=>(i(C).models.find(x=>x[0]===i(C).model)||[])[1]||i(C).model||"default");let Q=L("");async function de(){if(!m.connectionId){h(Q,"");return}try{h(Q,(await He.agentContext(m.connectionId)).context||"",!0)}catch{h(Q,"")}}tn(()=>{m.connectionId,de()});async function pe(){if(o())try{h(C,{agent:"codex",available:[],model:"",effort:"",models:[],efforts:[],...await He.sessionAgent(o())},!0)}catch(x){h(C,{agent:i(C).agent,available:[],model:"",effort:"",models:[],efforts:[]},!0),m.setStatus(x.message||"Could not read agent settings")}}async function he(){if(o())try{const x=await He.chat(o()),R=x.messages||[],W=new Set;for(const Ce of R)Ce.role==="user"&&(Ce.text&&W.add(Ce.text.trim()),Ce.full&&W.add(Ce.full.trim()));const oe=i(A).filter(Ce=>Ce._local&&!W.has((Ce.text||"").trim())),ce=oe.length?[...R,...oe]:R,fe=ce.length!==i(A).length;h(A,ce,!0),h(p,!!x.busy),h(T,x.detail||"",!0);const ye=x.pending||"",De=x.steps||[],le=ye!==i(f)||De.length!==i(_).length;h(f,ye,!0),h(_,De,!0),h(O,""),(fe||le||i(b))&&i(Je)&&ve()}catch(x){h(O,x.message||"Could not load chat",!0)}}const Ze=3e3,Ge=600;tn(()=>{const x=i(b)?Ge:Ze;!o()||c===x||(c=x,clearInterval(Y),Y=setInterval(he,x))});let Je=L(!0);function K(){if(!i(U))return;const x=i(U).scrollHeight-i(U).scrollTop-i(U).clientHeight;h(Je,x<80)}async function ve(){await Qi(),i(U)&&(i(U).scrollTop=i(U).scrollHeight,requestAnimationFrame(()=>{i(U)&&(i(U).scrollTop=i(U).scrollHeight)}))}function re(){h(Je,!0),ve()}tn(()=>{const x=o();h(A,[],!0),h(f,""),h(_,[],!0),h(p,!1),h(Je,!0),Y&&clearInterval(Y),c=0,x&&(he(),pe())}),el(()=>{Y&&clearInterval(Y)});async function se(x){if(h(E,""),x!==i(C).agent){h(z,"agent");try{await He.setSessionAgent(o(),x),await pe(),m.setStatus(`Switched to ${x}`)}catch(R){m.setStatus(R.message||"Could not switch agent")}finally{h(z,"")}}}async function P(x){if(h(E,""),x!==i(C).model){h(z,"model");try{await He.setSessionModel(o(),x),await pe(),m.setStatus(`Model set to ${x}`)}catch(R){m.setStatus(R.message||"Could not change model")}finally{h(z,"")}}}async function D(x){if(h(E,""),x!==i(C).effort){h(z,"effort");try{await He.setSessionEffort(o(),x),await pe(),m.setStatus(`Reasoning effort set to ${x}`)}catch(R){m.setStatus(R.message||"Could not change effort")}finally{h(z,"")}}}function ee(){const x=m.connection||{},R=m.activeTab,W=R?R.path:m.path||".",oe=R?`
Active file contents (first 12,000 characters):
${R.content.slice(0,12e3)}`:"";return`${i(Q)||(x.kind==="local"?`[IDE workspace]
Local folder: ${x.workspace_root||"."}
`:`[IDE workspace]
SSH target: ${x.username||"?"}@${x.host||"?"}
`)}
Currently open: ${W}${oe}

${i(a).trim()}`}let be=L(!1),we=L(Qe([]));function Ne(x){const R=x.dataTransfer;!R||!(R.types.includes("Files")||R.types.includes("text/x-ide-path"))||(x.preventDefault(),h(be,!0))}async function rn(x){x.preventDefault(),h(be,!1);const R=x.dataTransfer;if(!R)return;const W=R.getData("text/x-ide-path");if(W){i(we).includes(W)||h(we,[...i(we),W],!0);return}for(const oe of Array.from(R.files||[]))try{const ce=new FormData;ce.append("file",oe);const fe=await fetch(`${s()}/api/sessions/${encodeURIComponent(o())}/upload`,{method:"POST",body:ce}),ye=await fe.json().catch(()=>({}));if(!fe.ok)throw new Error(ye.error||"Upload failed");ye.path&&!i(we).includes(ye.path)&&h(we,[...i(we),ye.path],!0)}catch(ce){m.setStatus(ce.message||`Could not attach ${oe.name}`)}}const gn=x=>{h(we,i(we).filter(R=>R!==x),!0)},Vt=x=>x.split("/").pop();async function qt(){const x=i(a).trim();if(!x||!o()||i(l))return;const R=i(we).length?`

Attached files (read them from these paths):
${i(we).map(ce=>`- ${ce}`).join(`
`)}`:"",W=ee()+R;h(l,!0);const oe={role:"user",text:i(we).length?`${x}

${i(we).map(Vt).join(", ")}`:x,ts:Date.now()/1e3,_local:!0};h(A,[...i(A),oe],!0),h(a,""),h(we,[],!0),i(B)&&(i(B).style.height="auto"),ve();try{const ce=await fetch(`${s()}/api/sessions/${encodeURIComponent(o())}/send`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:W,display:x})}),fe=await ce.json().catch(()=>({}));if(!ce.ok)throw h(A,i(A).filter(ye=>ye!==oe),!0),h(a,x,!0),new Error(fe.error||"Could not send");he(),setTimeout(he,400)}catch(ce){m.setStatus(ce.message||"Could not send prompt")}finally{h(l,!1)}}function pr(x){x.key==="Enter"&&!x.shiftKey&&(x.preventDefault(),qt())}function Pr(x){const R=x.currentTarget;R.style.height="auto",R.style.height=`${Math.min(R.scrollHeight,200)}px`}const Ir=x=>x.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function Nr(x){try{const R=st.parse(x||"",{breaks:!0,gfm:!0});return Iv.sanitize(R,{FORBID_TAGS:["form","input","button","style","iframe","object","embed"],FORBID_ATTR:["style","srcset"]})}catch{return Ir(x||"")}}function hr(x){const R=x.full||x.text||"",W=`

`;if(R.startsWith("[IDE workspace")||R.startsWith("[Remote IDE context]")||R.startsWith("[Remote SSH IDE context]")){const oe=R.lastIndexOf(W);if(oe!==-1)return R.slice(oe+W.length)}return R}let _e=L(null),Gt=L(!1),Le=null;async function Xn(){if(o())try{const x=await fetch(`${s()}/api/sessions/${encodeURIComponent(o())}/mcp`);h(d,x.ok?await x.json():null,!0)}catch{h(d,null)}}async function Mt(){if(o())try{const R=await(await fetch(`${s()}/api/sessions/${encodeURIComponent(o())}/stats`)).json().catch(()=>({}));h(_e,R&&R.available?R:null,!0)}catch{h(_e,null)}}tn(()=>(o(),Mt(),Xn(),clearInterval(Le),Le=setInterval(Mt,2e4),()=>clearInterval(Le)));async function Tn(){if(!(!o()||i(Gt))){h(Gt,!0);try{const x=await fetch(`${s()}/api/sessions/${encodeURIComponent(o())}/compact`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:"/compact"})}),R=await x.json().catch(()=>({}));if(!x.ok)throw new Error(R.error||"Could not compact");m.setStatus(R.outcome||"Compact requested"),setTimeout(Mt,4e3)}catch(x){m.setStatus(x.message||"Could not compact context")}finally{h(Gt,!1)}}}const vr=x=>{const R=Number(x)||0;return R>=1e6?`${(R/1e6).toFixed(1)}M`:R>=1e3?`${(R/1e3).toFixed(1)}k`:String(R)},sn=15,Or=2e4,gr=Bt(()=>!!o()&&!!i(_e)&&(i(_e).ctxWindowSize&&(i(_e).contextPct||0)>=sn||!i(_e).ctxWindowSize&&(i(_e).lastInputTokens||0)>=Or)),Qn=x=>x>=90?"text-vs-red":x>=70?"text-vs-yellow":"text-vs-muted";var mn=rg();Ut("click",$s,x=>{var R,W;(W=(R=x.target).closest)!=null&&W.call(R,"[data-menu]")||h(E,"")});var on=S(mn);{var $n=x=>{var R=Nv();y(x,R)};j(on,x=>{i(be)&&x($n)})}var Lt=g(on,2),mr=S(Lt);{var Jn=x=>{var R=Ov(),W=ae(R,!0);X(()=>Z(W,i(O))),y(x,R)};j(mr,x=>{i(O)&&x(Jn)})}var Mn=g(mr,2);_t(Mn,19,()=>i(A),(x,R)=>x.ts+":"+R,(x,R)=>{var W=ue(),oe=q(W);{var ce=ye=>{var De=zv(),le=S(De),Ce=S(le);ii(Ce,{size:11});var Ue=g(Ce),gt=g(le,2);wl(gt,()=>Nr(hr(i(R))),!0),X(()=>Z(Ue,` ${i(C).agent==="claude"?"Claude":"Codex"}`)),y(ye,De)},fe=ye=>{var De=Mv(),le=g(S(De),2),Ce=ae(le,!0);X(Ue=>Z(Ce,Ue),[()=>hr(i(R))]),y(ye,De)};j(oe,ye=>{i(R).role==="assistant"?ye(ce):ye(fe,-1)})}y(x,W)},x=>{var R=ue(),W=q(R);{var oe=ce=>{var fe=Lv(),ye=S(fe);ii(ye,{size:26,strokeWidth:1.3,class:"text-mk-line"});var De=g(ye,2),le=g(S(De)),Ce=ae(le,!0);X(()=>Z(Ce,o()||"the selected session")),y(ce,fe)};j(W,ce=>{i(O)||ce(oe)})}y(x,R)});var er=g(Mn,2);{var En=x=>{var R=Fv();_t(R,21,()=>i(_).filter(W=>W.type==="tool"),Ji,(W,oe)=>{var ce=Dv(),fe=g(S(ce),2),ye=S(fe),De=ae(ye,!0),le=g(ye,2);{var Ce=Ue=>{var gt=lc(),ze=ae(gt);X(()=>Z(ze,`(${i(oe).detail??""})`)),y(Ue,gt)};j(le,Ue=>{i(oe).detail&&Ue(Ce)})}X(()=>Z(De,i(oe).name)),y(W,ce)}),y(x,R)};j(er,x=>{i(_).length&&i(b)&&x(En)})}var An=g(er,2);{var tr=x=>{var R=Hv(),W=S(R),oe=S(W);ii(oe,{size:11});var ce=g(oe),fe=g(W,2),ye=S(fe);wl(ye,()=>Nr(i(f))),X(()=>Z(ce,` ${i(C).agent==="claude"?"Claude":"Codex"}`)),y(x,R)};j(An,x=>{i(f)&&x(tr)})}var Kr=g(An,2);{var Yr=x=>{var R=Bv(),W=S(R);ur(W,{size:11,class:"animate-spin"});var oe=g(W,2),ce=S(oe);X(()=>Z(ce,i(w))),y(x,R)};j(Kr,x=>{i(b)&&x(Yr)})}Zs(Lt,x=>h(U,x),()=>i(U));var zr=g(Lt,2);{var Mr=x=>{var R=Uv(),W=S(R);$r(W,{size:11});var oe=g(W);X(()=>Z(oe,` ${i(b)?"Jump to latest — still generating":"Jump to latest"}`)),H("click",R,re),y(x,R)};j(zr,x=>{i(Je)||x(Mr)})}var Ln=g(zr,2),_n=S(Ln);{var Dn=x=>{var R=qv(),W=q(R);{var oe=ze=>{var lt=jv(),Tt=q(lt),Dt=ae(Tt),ft=g(Tt,2),mt=ae(ft);X((kt,Yt)=>{dn(Tt,1,kt,"svelte-1roe1v9"),Z(Dt,`${i(_e).contextPct??0??""}% context`),dn(mt,1,`block h-full rounded-full ${(i(_e).contextPct||0)>=90?"bg-vs-red":(i(_e).contextPct||0)>=70?"bg-vs-yellow":"bg-mk-green"}`,"svelte-1roe1v9"),ws(mt,`width: ${Yt??""}%`)},[()=>vu(Qn(i(_e).contextPct||0)),()=>Math.min(100,Math.max(0,i(_e).contextPct||0))]),y(ze,lt)};j(W,ze=>{i(_e).ctxWindowSize&&ze(oe)})}var ce=g(W,2),fe=ae(ce),ye=g(ce,2);{var De=ze=>{var lt=lc(),Tt=ae(lt);X(Dt=>{Pe(lt,"title",Dt),Z(Tt,`${i(d).servers.length??""} MCP`)},[()=>`MCP tools available to this agent: ${i(d).servers.map(Dt=>Dt.name).join(", ")}`]),y(ze,lt)};j(ye,ze=>{i(d)&&i(d).servers&&i(d).servers.length&&ze(De)})}var le=g(ye,2);{var Ce=ze=>{var lt=Wv();y(ze,lt)};j(le,ze=>{i(_e).shared&&ze(Ce)})}var Ue=g(le,2);{var gt=ze=>{var lt=Vv(),Tt=ae(lt,!0);X(()=>Z(Tt,i(_e).model)),y(ze,lt)};j(Ue,ze=>{i(_e).model&&i(_e).model!=="unknown"&&ze(gt)})}X((ze,lt,Tt)=>{Pe(ce,"title",`${i(_e).messageCount??""} turns · ${ze??""} in · ${lt??""} out`),Z(fe,`${Tt??""} tokens`)},[()=>vr(i(_e).totalInput),()=>vr(i(_e).totalOutput),()=>vr(i(_e).totalTokens)]),y(x,R)},Lr=x=>{var R=Gv();y(x,R)};j(_n,x=>{i(_e)?x(Dn):x(Lr,-1)})}var ie=g(_n,2);{var et=x=>{var R=Kv(),W=S(R);{var oe=fe=>{ur(fe,{size:10,class:"animate-spin"})},ce=fe=>{rp(fe,{size:10})};j(W,fe=>{i(Gt)?fe(oe):fe(ce,-1)})}X(()=>R.disabled=i(Gt)),H("click",R,Tn),y(x,R)};j(ie,x=>{i(gr)&&x(et)})}var We=g(Ln,2);{var xe=x=>{var R=Zv();_t(R,20,()=>i(we),W=>W,(W,oe)=>{var ce=Yv(),fe=S(ce);lp(fe,{size:10,class:"text-mk-comment"});var ye=g(fe),De=g(ye);X((le,Ce)=>{Pe(ce,"title",oe),Z(ye,` ${le??""} `),Pe(De,"aria-label",`Remove ${Ce??""}`)},[()=>Vt(oe),()=>Vt(oe)]),H("click",De,()=>gn(oe)),y(W,ce)}),y(x,R)};j(We,x=>{i(we).length&&x(xe)})}var Ve=g(We,2),wt=S(Ve),Be=S(wt);Zs(Be,x=>h(B,x),()=>i(B));var Ct=g(Be,2),Kt=S(Ct),ot=S(Kt),Rt=S(ot),ht=g(Rt);$r(ht,{size:11});var Pt=g(ot,2);{var Fn=x=>{var R=Xv();_t(R,20,()=>i(C).available.length?i(C).available:["codex"],W=>W,(W,oe)=>{var ce=cc(),fe=S(ce),ye=S(fe);{var De=Ce=>{wa(Ce,{size:11})};j(ye,Ce=>{oe===i(C).agent&&Ce(De)})}var le=g(fe);X(()=>Z(le,` ${oe==="claude"?"Claude":"Codex"}`)),H("click",ce,()=>se(oe)),y(W,ce)}),y(x,R)};j(Pt,x=>{i(E)==="agent"&&x(Fn)})}var It=g(Kt,2);{var St=x=>{var R=eg(),W=S(R),oe=S(W),ce=ae(oe,!0),fe=g(oe,2);$r(fe,{size:11,class:"shrink-0"});var ye=g(W,2);{var De=le=>{var Ce=Jv();_t(Ce,21,()=>i(C).models,Ue=>Ue[0],(Ue,gt)=>{var ze=Qv(),lt=S(ze),Tt=S(lt);{var Dt=kt=>{wa(kt,{size:11})};j(Tt,kt=>{i(gt)[0]===i(C).model&&kt(Dt)})}var ft=g(lt,2),mt=ae(ft,!0);X(()=>Z(mt,i(gt)[1])),H("click",ze,()=>P(i(gt)[0])),y(Ue,ze)}),y(le,Ce)};j(ye,le=>{i(E)==="model"&&le(De)})}X(()=>Z(ce,i(J))),H("click",W,()=>h(E,i(E)==="model"?"":"model",!0)),y(x,R)};j(It,x=>{i(C).models.length&&x(St)})}var vt=g(It,2);{var Hn=x=>{var R=ng(),W=S(R),oe=S(W),ce=g(oe);$r(ce,{size:11});var fe=g(W,2);{var ye=De=>{var le=tg();_t(le,20,()=>i(C).efforts,Ce=>Ce,(Ce,Ue)=>{var gt=cc(),ze=S(gt),lt=S(ze);{var Tt=ft=>{wa(ft,{size:11})};j(lt,ft=>{Ue===i(C).effort&&ft(Tt)})}var Dt=g(ze);X(()=>Z(Dt,` ${Ue??""}`)),H("click",gt,()=>D(Ue)),y(Ce,gt)}),y(De,le)};j(fe,De=>{i(E)==="effort"&&De(ye)})}X(()=>Z(oe,`${(i(C).effort||"effort")??""} `)),H("click",W,()=>h(E,i(E)==="effort"?"":"effort",!0)),y(x,R)};j(vt,x=>{i(C).efforts.length&&x(Hn)})}var $=g(vt,2);{var I=x=>{ur(x,{size:11,class:"animate-spin text-mk-muted"})};j($,x=>{i(z)&&x(I)})}var V=g($,2),Ae=g(S(V),2),Oe=S(Ae);{var qe=x=>{up(x,{size:11})},tt=x=>{Hd(x,{size:13})};j(Oe,x=>{i(b)?x(qe):x(tt,-1)})}X(x=>{Z(Rt,`${i(C).agent==="claude"?"Claude":"Codex"} `),Ae.disabled=x},[()=>i(b)||!i(a).trim()]),Ut("dragover",mn,Ne),Ut("dragleave",mn,()=>h(be,!1)),Ut("drop",mn,rn),Ut("scroll",Lt,K),H("keydown",Be,pr),H("input",Be,Pr),ct(Be,()=>i(a),x=>h(a,x)),H("click",ot,()=>h(E,i(E)==="agent"?"":"agent",!0)),H("click",Ae,qt),y(t,mn),vn()}Zn(["click","keydown","input"]);var og=N('<span class="hint svelte-e2eyom">searching…</span>'),ag=N('<li><button><span class="name svelte-e2eyom"> </span> <span class="path svelte-e2eyom"> </span> <!></button></li>'),ig=N('<ul class="results svelte-e2eyom"></ul>'),lg=N('<p class="empty svelte-e2eyom"> </p>'),cg=N('<div class="backdrop svelte-e2eyom" role="button" tabindex="-1"></div> <div class="dialog svelte-e2eyom" role="dialog" aria-label="Quick open"><div class="field svelte-e2eyom"><!> <input placeholder="Search files by name…" aria-label="Search files by name" class="svelte-e2eyom"/> <!></div> <!></div>',1);function ug(t,e){hn(e,!0);let n=L(""),r=L(Qe([])),s=L(0),o=L(!1),a=L(null),l=null;tn(()=>{i(a)&&i(a).focus()}),tn(()=>{const E=i(n).trim();if(l&&clearTimeout(l),!E){h(r,[],!0);return}l=setTimeout(async()=>{h(o,!0);try{const z=await He.searchFiles(m.connectionId,m.path||".",E);h(r,z.matches||[],!0),h(s,0)}catch{h(r,[],!0)}finally{h(o,!1)}},180)});async function c(E){var J;if(!E)return;const z=m.path&&m.path!=="."?`${m.path}/`:"";await m.openFile(`${z}${E.path}`),(J=e.onclose)==null||J.call(e)}function p(E){var z;E.key==="Escape"?(E.preventDefault(),(z=e.onclose)==null||z.call(e)):E.key==="ArrowDown"?(E.preventDefault(),h(s,Math.min(i(s)+1,i(r).length-1),!0)):E.key==="ArrowUp"?(E.preventDefault(),h(s,Math.max(i(s)-1,0),!0)):E.key==="Enter"&&(E.preventDefault(),c(i(r)[i(s)]))}var f=cg(),_=q(f),d=g(_,2),T=S(d),b=S(T);nl(b,{size:14});var w=g(b,2);Zs(w,E=>h(a,E),()=>i(a));var A=g(w,2);{var O=E=>{var z=og();y(E,z)};j(A,E=>{i(o)&&E(O)})}var U=g(T,2);{var B=E=>{var z=ig();_t(z,23,()=>i(r),J=>J.path,(J,Q,de)=>{var pe=ag(),he=S(pe);let Ze;var Ge=S(he),Je=ae(Ge,!0),K=g(Ge,2),ve=ae(K,!0),re=g(K,2);{var se=P=>{Vd(P,{size:12})};j(re,P=>{i(de)===i(s)&&P(se)})}X(()=>{Ze=dn(he,1,"svelte-e2eyom",null,Ze,{active:i(de)===i(s)}),Z(Je,i(Q).name),Z(ve,i(Q).path)}),H("click",he,()=>c(i(Q))),y(J,pe)}),y(E,z)},Y=E=>{var z=lg(),J=ae(z);X(Q=>Z(J,`No files match “${Q??""}”.`),[()=>i(n).trim()]),y(E,z)},C=Bt(()=>i(n).trim()&&!i(o));j(U,E=>{i(r).length?E(B):i(C)&&E(Y,1)})}H("click",_,()=>{var E;return(E=e.onclose)==null?void 0:E.call(e)}),H("keydown",_,E=>{var z;return E.key==="Escape"&&((z=e.onclose)==null?void 0:z.call(e))}),H("keydown",w,p),ct(w,()=>i(n),E=>h(n,E)),y(t,f),vn()}Zn(["click","keydown"]);var fg=N('<div class="terminal-pane svelte-maclc7"><div class="bar svelte-maclc7"><span class="label svelte-maclc7">Terminal</span> <span> </span></div> <div class="screen svelte-maclc7"></div></div>');function dg(t,e){hn(e,!0);let n=yt(e,"rootPath",3,""),r=yt(e,"session",3,""),s=yt(e,"index",3,0),o,a=null,l=null,c=null,p=L("connecting"),f=null,_=0,d=null,T=!1;const b={background:ko.colors["editor.background"],foreground:ko.colors["editor.foreground"],cursor:ko.colors["editorCursor.foreground"],selectionBackground:ko.colors["editor.selectionBackground"],black:"#272822",red:"#f92672",green:"#a6e22e",yellow:"#e6db74",blue:"#66d9ef",magenta:"#ae81ff",cyan:"#a1efe4",white:"#f8f8f2",brightBlack:"#75715e",brightRed:"#f92672",brightGreen:"#a6e22e",brightYellow:"#e6db74",brightBlue:"#66d9ef",brightMagenta:"#ae81ff",brightCyan:"#a1efe4",brightWhite:"#f9f8f5"};function w(){if(!(!l||!a||(c==null?void 0:c.readyState)!==WebSocket.OPEN))try{l.fit(),c.send(JSON.stringify({type:"resize",cols:a.cols,rows:a.rows}))}catch{}}function A(){if(T)return;const z=`${location.protocol==="https:"?"wss":"ws"}://${location.host}${n()}/ws/sessions/${encodeURIComponent(r())}/ide/terminal/${encodeURIComponent(m.connectionId)}?index=${encodeURIComponent(s())}`;c=new WebSocket(z),c.binaryType="arraybuffer",c.onopen=()=>{h(p,"connected"),_=0,w()},c.onmessage=J=>{a.write(typeof J.data=="string"?J.data:new Uint8Array(J.data))},c.onclose=J=>{if(T)return;if(J.code===1008){h(p,"refused"),a==null||a.write(`\r
\x1B[31m— not authorised for this terminal —\x1B[0m\r
`);return}if(_>=6){h(p,"closed"),a==null||a.write(`\r
\x1B[33m— terminal unavailable; reopen the panel to retry —\x1B[0m\r
`);return}h(p,"reconnecting");const Q=Math.min(1e3*2**_,1e4);_+=1,d=setTimeout(A,Q)},c.onerror=()=>{T||h(p,"error")}}ro(async()=>{const[{Terminal:E},{FitAddon:z}]=await Promise.all([Ta(()=>import("./ide-xterm.js"),[],import.meta.url),Ta(()=>import("./ide-addon-fit.js"),[],import.meta.url)]);await Ta(()=>Promise.resolve({}),__vite__mapDeps([2]),import.meta.url),a=new E({theme:b,fontSize:12,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",cursorBlink:!0,scrollback:5e3}),l=new z,a.loadAddon(l),a.open(o),l.fit(),A(),a.onData(J=>{(c==null?void 0:c.readyState)===WebSocket.OPEN&&c.send(new TextEncoder().encode(J))}),f=new ResizeObserver(()=>w()),f.observe(o)}),el(()=>{T=!0,d&&clearTimeout(d),f==null||f.disconnect(),c==null||c.close(),a==null||a.dispose()});var O=fg(),U=S(O),B=g(S(U),2),Y=ae(B,!0),C=g(U,2);Zs(C,E=>o=E,()=>o),X(()=>{dn(B,1,`status ${i(p)??""}`,"svelte-maclc7"),Z(Y,i(p))}),y(t,O),vn()}var pg=N('<div class="border-b border-vs-line bg-vs-red/10 px-4 py-2 text-xs text-vs-red"> </div>'),hg=N('<div class="flex items-center gap-2 px-4 py-3 text-xs text-vs-muted"><!> Loading…</div>'),vg=N('<button class="flex w-full items-center gap-2 px-4 py-1 text-left text-[13px] text-vs-fg hover:bg-vs-hover"><!> <span class="truncate"> </span></button>'),gg=N('<div class="px-4 py-3 text-xs text-vs-muted">No sub-folders here. You can still open this folder.</div>'),mg=N('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="flex h-[70vh] w-[min(640px,92vw)] flex-col overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright">Open Folder <span class="ml-1 font-normal text-vs-muted"><!></span></div> <form class="flex gap-2 border-b border-vs-line px-3 py-2"><button type="button" class="flex items-center gap-1 rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover disabled:opacity-40" title="Up one folder"><!> Up</button> <input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-xs text-vs-fg outline-none focus:border-vs-accent" spellcheck="false" aria-label="Folder path"/> <button type="submit" class="rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover">Go</button></form> <!> <div class="min-h-0 flex-1 overflow-y-auto py-1"><!></div> <div class="flex items-center gap-2 border-t border-vs-line px-4 py-3"><span class="flex min-w-0 flex-1 items-center gap-2 text-xs text-vs-muted"><!> <span class="truncate font-mono"> </span></span> <button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40">Open Folder</button></div></div></div>');function _g(t,e){hn(e,!0);let n=L(""),r=L(""),s=L(Qe([])),o=L(""),a=L(!0),l=L("");async function c(re){h(a,!0),h(o,"");try{const se=m.connectionId?await He.browseOn(m.connectionId,re):await He.browse(re);h(n,se.path,!0),h(r,se.parent,!0),h(s,se.entries||[],!0),h(l,se.path,!0)}catch(se){h(o,se.message||"Could not open that folder",!0)}finally{h(a,!1)}}ro(()=>c(""));function p(re){re.preventDefault(),i(l).trim()&&c(i(l).trim())}var f=mg(),_=S(f),d=S(_),T=g(S(d)),b=S(T);{var w=re=>{var se=yl();X(()=>Z(se,`on ${m.connection.username??""}@${m.connection.host??""}`)),y(re,se)},A=re=>{var se=yl("on this server");y(re,se)};j(b,re=>{m.connection&&m.connection.kind!=="local"?re(w):re(A,-1)})}var O=g(d,2),U=S(O),B=S(U);qd(B,{size:14});var Y=g(U,2),C=g(O,2);{var E=re=>{var se=pg(),P=ae(se,!0);X(()=>Z(P,i(o))),y(re,se)};j(C,re=>{i(o)&&re(E)})}var z=g(C,2),J=S(z);{var Q=re=>{var se=hg(),P=S(se);ur(P,{size:13,class:"animate-spin"}),y(re,se)},de=re=>{var se=ue(),P=q(se);_t(P,17,()=>i(s),D=>D.path,(D,ee)=>{var be=vg(),we=S(be);Jd(we,{size:14,class:"shrink-0 text-vs-blue"});var Ne=g(we,2),rn=ae(Ne,!0);X(()=>Z(rn,i(ee).name)),H("dblclick",be,()=>c(i(ee).path)),H("click",be,()=>c(i(ee).path)),y(D,be)},D=>{var ee=gg();y(D,ee)}),y(re,se)};j(J,re=>{i(a)?re(Q):re(de,-1)})}var pe=g(z,2),he=S(pe),Ze=S(he);ep(Ze,{size:13,class:"shrink-0"});var Ge=g(Ze,2),Je=ae(Ge,!0),K=g(he,2),ve=g(K,2);X(()=>{U.disabled=!i(r),Pe(Ge,"title",i(n)),Z(Je,i(n)),ve.disabled=!i(n)||i(a)}),H("click",f,re=>re.target===re.currentTarget&&e.onclose()),H("keydown",f,re=>re.key==="Escape"&&e.onclose()),Ut("submit",O,p),H("click",U,()=>i(r)&&c(i(r))),ct(Y,()=>i(l),re=>h(l,re)),H("click",K,function(...re){var se;(se=e.onclose)==null||se.apply(this,re)}),H("click",ve,()=>e.onopen(i(n))),y(t,f),vn()}Zn(["click","keydown","dblclick"]);var bg=N('<p class="px-4 py-2 text-xs text-vs-muted">Open a folder to search it.</p>'),xg=N('<button class="flex w-full items-center gap-2 px-3 py-1 text-left text-[13px] hover:bg-vs-hover"><!> <span class="truncate text-vs-fg"> </span> <span class="ml-auto max-w-[45%] truncate text-[11px] text-vs-muted"> </span></button>'),yg=N('<p class="px-4 py-2 text-xs text-vs-muted"> </p>'),kg=N('<p class="px-4 py-2 text-xs text-vs-muted">Type to search filenames in this workspace.</p>'),wg=N('<div class="flex h-full min-h-0 flex-col"><div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Search</div> <div class="px-3 pb-2"><div class="flex items-center gap-1.5 rounded-sm border border-vs-line bg-vs-input px-2 focus-within:border-vs-accent"><!> <input class="min-w-0 flex-1 bg-transparent py-1 text-xs text-vs-fg outline-none placeholder:text-vs-muted" placeholder="Search filenames" spellcheck="false"/> <!></div></div> <div class="min-h-0 flex-1 overflow-y-auto"><!></div></div>');function Sg(t,e){hn(e,!0);let n=L(""),r=L(Qe([])),s=L(!1),o=L(!1),a=null;tn(()=>{const B=i(n).trim();if(a&&clearTimeout(a),!B||!m.connectionId){h(r,[],!0),h(o,!1);return}a=setTimeout(async()=>{h(s,!0);try{const Y=await He.searchFiles(m.connectionId,m.path||".",B);h(r,Y.matches||[],!0)}catch(Y){h(r,[],!0),m.setStatus(Y.message||"Search failed")}finally{h(s,!1),h(o,!0)}},200)});const l=B=>{const Y=(B||"").split("/");return Y.pop(),Y.join("/")};var c=wg(),p=g(S(c),2),f=S(p),_=S(f);nl(_,{size:12,class:"shrink-0 text-vs-muted"});var d=g(_,2),T=g(d,2);{var b=B=>{ur(B,{size:12,class:"shrink-0 animate-spin text-vs-muted"})};j(T,B=>{i(s)&&B(b)})}var w=g(p,2),A=S(w);{var O=B=>{var Y=bg();y(B,Y)},U=B=>{var Y=ue(),C=q(Y);_t(C,17,()=>i(r),E=>E.path,(E,z)=>{var J=xg(),Q=S(J);tl(Q,{size:13,class:"shrink-0 text-vs-blue"});var de=g(Q,2),pe=ae(de,!0),he=g(de,2),Ze=ae(he,!0);X((Ge,Je)=>{Pe(J,"title",i(z).path),Z(pe,Ge),Z(Ze,Je)},[()=>i(z).name||i(z).path.split("/").pop(),()=>l(i(z).path)]),H("click",J,()=>m.openFile(i(z).path)),y(E,J)},E=>{var z=ue(),J=q(z);{var Q=he=>{var Ze=yg(),Ge=ae(Ze);X(()=>Z(Ge,`No files match “${i(n)??""}”.`)),y(he,Ze)},de=he=>{var Ze=kg();y(he,Ze)},pe=Bt(()=>!i(n).trim());j(J,he=>{i(o)&&!i(s)?he(Q):i(pe)&&he(de,1)})}y(E,z)}),y(B,Y)};j(A,B=>{m.connectionId?B(U,-1):B(O)})}ct(d,()=>i(n),B=>h(n,B)),y(t,c),vn()}Zn(["click"]);var Tg=N('<p class="flex items-center gap-2 text-vs-muted"><!> Fetching host key…</p>'),$g=N('<p class="text-vs-red"> </p>'),Eg=N("<p>This host is already trusted. Try connecting again.</p>"),Ag=N('<div class="flex items-baseline gap-2 font-mono text-[11px]"><span class="w-16 shrink-0 text-vs-muted"> </span> <span class="break-all text-vs-fg"> </span></div>'),Cg=N(`<p>The authenticity of <span class="font-mono text-vs-blue"> </span> can't be established. Verify these fingerprints match the server before you continue —
          if they don't, someone may be intercepting the connection.</p> <div class="mt-3 flex flex-col gap-1 rounded-sm border border-vs-line bg-vs-input p-2"></div> <p class="mt-3 text-xs text-vs-muted">Accepting adds the key to <span class="font-mono">~/.ssh/known_hosts</span> on this server.</p>`,1),Rg=N('<button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"> </button>'),Pg=N('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="w-[min(560px,92vw)] overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="flex items-center gap-2 border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright"><!> Unknown host</div> <div class="px-4 py-3 text-[13px] leading-relaxed text-vs-fg"><!></div> <div class="flex justify-end gap-2 border-t border-vs-line px-4 py-3"><button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <!></div></div></div>');function Ig(t,e){hn(e,!0);let n=L(!0),r=L(""),s=L(null),o=L(!1);ro(async()=>{try{h(s,await He.hostKey(m.connectionId),!0)}catch(C){h(r,C.message||"Could not fetch the host key",!0)}finally{h(n,!1)}});async function a(){h(o,!0);try{await He.trustHost(m.connectionId),e.ontrusted()}catch(C){h(r,C.message||"Could not trust this host",!0),h(o,!1)}}var l=Pg(),c=S(l),p=S(c),f=S(p);cp(f,{size:15,class:"text-vs-yellow"});var _=g(p,2),d=S(_);{var T=C=>{var E=Tg(),z=S(E);ur(z,{size:13,class:"animate-spin"}),y(C,E)},b=C=>{var E=$g(),z=ae(E,!0);X(()=>Z(z,i(r))),y(C,E)},w=C=>{var E=Eg();y(C,E)},A=C=>{var E=Cg(),z=q(E),J=g(S(z)),Q=ae(J),de=g(z,2);_t(de,21,()=>i(s).fingerprints,pe=>pe.fingerprint,(pe,he)=>{var Ze=Ag(),Ge=S(Ze),Je=ae(Ge,!0),K=g(Ge,2),ve=ae(K,!0);X(()=>{Z(Je,i(he).type),Z(ve,i(he).fingerprint)}),y(pe,Ze)}),X(()=>Z(Q,`${i(s).host??""}:${i(s).port??""}`)),y(C,E)};j(d,C=>{var E;i(n)?C(T):i(r)?C(b,1):(E=i(s))!=null&&E.known?C(w,2):C(A,-1)})}var O=g(_,2),U=S(O),B=g(U,2);{var Y=C=>{var E=Rg(),z=ae(E,!0);X(()=>{E.disabled=i(o),Z(z,i(o)?"Trusting…":"Trust and connect")}),H("click",E,a),y(C,E)};j(B,C=>{var E;!i(n)&&!((E=i(s))!=null&&E.known)&&!i(r)&&C(Y)})}H("click",l,C=>C.target===C.currentTarget&&e.onclose()),H("keydown",l,C=>C.key==="Escape"&&e.onclose()),H("click",U,function(...C){var E;(E=e.onclose)==null||E.apply(this,C)}),y(t,l),vn()}Zn(["click","keydown"]);var Ng=N('<div role="separator" tabindex="0" title="Drag to resize (double-click to reset)"><div></div></div>');function hi(t,e){hn(e,!0);let n=yt(e,"size",15),r=yt(e,"side",3,"right"),s=yt(e,"min",3,120),o=yt(e,"max",3,800),a=yt(e,"onreset",3,null),l=L(!1);const c=r()==="top";function p(b){var Y;b.preventDefault(),h(l,!0);const w=c?b.clientY:b.clientX,A=n(),O=b.currentTarget;(Y=O.setPointerCapture)==null||Y.call(O,b.pointerId);function U(C){const z=(c?C.clientY:C.clientX)-w,J=r()==="left"||r()==="top"?-z:z;n(Math.round(Math.min(o(),Math.max(s(),A+J))))}function B(){var C;h(l,!1),(C=O.releasePointerCapture)==null||C.call(O,b.pointerId),window.removeEventListener("pointermove",U),window.removeEventListener("pointerup",B)}window.addEventListener("pointermove",U),window.addEventListener("pointerup",B)}function f(b){const w=b.shiftKey?40:10,A=c?"ArrowUp":r()==="left"?"ArrowLeft":"ArrowRight",O=c?"ArrowDown":r()==="left"?"ArrowRight":"ArrowLeft";if(b.key===A)n(Math.min(o(),n()+w));else if(b.key===O)n(Math.max(s(),n()-w));else return;b.preventDefault()}var _=Ng();let d;var T=ae(_);X(()=>{d=dn(_,1,`group relative shrink-0 ${c?"h-1 w-full cursor-row-resize":"w-1 cursor-col-resize"}`,null,d,{"bg-vs-accent":i(l)}),Pe(_,"aria-orientation",c?"horizontal":"vertical"),Pe(_,"aria-valuenow",n()),Pe(_,"aria-valuemin",s()),Pe(_,"aria-valuemax",o()),dn(T,1,`absolute ${c?"-top-1 -bottom-1 left-0 right-0":"-left-1 -right-1 top-0 bottom-0"}
           transition-colors group-hover:bg-vs-accent ${i(l)?"bg-vs-accent":""}`)}),H("pointerdown",_,p),H("dblclick",_,()=>{var b;return(b=a())==null?void 0:b()}),H("keydown",_,f),y(t,_),vn()}Zn(["pointerdown","dblclick","keydown"]);var Og=N('<span class="absolute top-0 bottom-0 left-0 w-0.5 bg-vs-bright"></span>'),zg=N('<span class="absolute right-1.5 bottom-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-vs-status px-1 text-[10px] leading-none font-semibold text-white"> </span>'),Mg=N("<button><!> <!> <!></button>"),uc=N("<option> </option>"),Lg=N('<button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Connection settings" aria-label="Connection settings"><!></button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover hover:text-vs-red" title="Remove workspace" aria-label="Remove workspace"><!></button>',1),Dg=N('<div class="flex gap-1"><input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="Host"/> <input class="w-16 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" type="number" min="1" max="65535" placeholder="Port"/></div> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="Username"/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="Identity file (optional)"/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" type="password" autocomplete="new-password" placeholder="Password — leave blank to keep current"/>',1),Fg=N('<div class="flex flex-col gap-1.5 rounded-sm border border-vs-line bg-vs-panel p-2"><span class="text-[11px] font-semibold tracking-wide uppercase text-vs-muted"> </span> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="Label"/> <!> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="Workspace folder"/> <div class="flex gap-1"><button class="flex-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110 disabled:opacity-40"> </button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover">Cancel</button></div></div>'),Hg=N('<input class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" type="password" placeholder="Password (optional)" autocomplete="new-password"/>'),Bg=N(`<button class="w-full rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Show this host's key fingerprint and trust it">Verify host key…</button>`),Ug=N('<!> <button class="w-full rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"> </button> <!>',1),jg=N('<p class="mt-1 font-mono text-[11px] break-all text-vs-muted"> </p>'),Wg=N('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="~/.ssh/id_ed25519"/> <textarea class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-[11px] outline-none focus:border-vs-accent" rows="4" placeholder="…or paste a private key (-----BEGIN OPENSSH PRIVATE KEY-----)" spellcheck="false"></textarea>',1),Vg=N('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" type="password" placeholder="Password" autocomplete="new-password"/>'),qg=N('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Host" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="User" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Port" type="number" min="1" max="65535"/> <select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>SSH agent</option><option>Existing key</option><option>Password (saved, encrypted)</option></select> <!> <!>',1),Gg=N('<form class="mt-2 flex flex-col gap-1.5 border-t border-vs-line px-3 pt-2"><select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>This server (local folder)</option><option>Remote host over SSH</option></select> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Label"/> <!> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"/> <div class="flex gap-1 pb-2"><button class="flex-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110" type="submit">Create</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" type="button">Cancel</button></div></form>'),Kg=N('<div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Workspaces</div> <div class="flex flex-col gap-2 px-3 pt-1"><select class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" aria-label="Workspace"><option>— select workspace —</option><!></select> <div class="flex gap-1"><button class="flex flex-1 items-center justify-center gap-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"><!> Open Folder</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Add a workspace or SSH connection" aria-label="Add workspace"><!></button> <!></div> <!> <!> <!></div> <!>',1),Yg=N('<aside class="flex shrink-0 flex-col overflow-hidden border-r border-vs-border bg-vs-panel"><!></aside> <!>',1),Zg=N('<div class="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center"><!> <div><h1 class="text-2xl font-light text-vs-fg">Multibuilder IDE</h1> <p class="mt-1 text-sm text-vs-muted">Edit files on this server or on a remote host over SSH.</p></div> <div class="flex flex-col gap-2 text-sm"><button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Open Folder… <kbd class="ml-2 rounded-sm border border-vs-line px-1.5 py-0.5 text-[10px] text-vs-muted">Ctrl+Shift+O</kbd></button> <button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Connect to a host over SSH…</button></div></div>'),Xg=N('<button class="rounded-sm p-0.5 opacity-0 group-hover:opacity-100 hover:bg-vs-line" title="Close terminal — ends the shell"><!></button>'),Qg=N('<span><button class="max-w-[140px] truncate"> </button> <!></span>'),Jg=N('<div class="absolute inset-0"><!></div>'),em=N('<!> <div class="flex shrink-0 flex-col border-t border-vs-border bg-vs-bg"><div class="flex items-center gap-1 border-b border-vs-border px-2 py-1 text-[11px]"><!> <div class="flex min-w-0 flex-1 items-center gap-0.5 overflow-x-auto"></div> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover disabled:opacity-40" title="New terminal in this workspace" aria-label="New terminal"><!></button> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover" title="Hide terminals (Ctrl+`) — sessions keep running" aria-label="Hide all terminals"><!></button> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover hover:text-vs-red" title="Close this terminal — ends the shell" aria-label="Close this terminal"><!></button></div> <div class="relative min-h-0 flex-1"><!></div></div>',1),tm=N('<!> <div class="min-h-0 flex-1"><!></div> <!>',1),nm=N(`<!> <aside class="flex shrink-0 flex-col overflow-hidden border-l border-vs-border bg-vs-panel"><div class="flex items-center gap-1.5 border-b border-vs-border px-3 py-1.5"><!> <span class="shrink-0 text-[11px] font-semibold tracking-wide uppercase">AI Agent</span> <select class="ml-auto min-w-0 flex-1 truncate rounded-sm border border-vs-line bg-vs-input px-1.5 py-0.5
                   text-[11px] text-vs-fg outline-none focus:border-vs-accent" title="Agent session — each has its own history"></select> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover disabled:opacity-40" title="New agent session" aria-label="New agent session"><!></button> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover" title="Hide AI Agent" aria-label="Hide AI Agent"><!></button></div> <div class="min-h-0 flex-1"><!></div></aside>`,1),rm=N('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20"><!> <!></button>'),sm=N('<span class="flex items-center gap-1"><!> </span>'),om=N("<span> </span>"),am=N('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle terminal (Ctrl+`)"><!> Terminal</button> <button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Focus the tmux window on the host"><!></button>',1),im=N('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle AI Agent panel"><!> Chat</button>'),lm=N('<div class="flex h-full flex-col overflow-hidden bg-vs-bg font-sans text-vs-fg"><header class="flex items-center gap-2 border-b border-vs-border bg-vs-titlebar px-3 py-1 text-xs"><!> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover" title="Open a folder on this server (Ctrl+Shift+O)">Open Folder…</button> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40" title="Open a file (Ctrl+P)">Open File…</button> <button><!> Terminal</button> <span class="mx-auto truncate text-vs-muted"> </span> <span><!> </span></header> <div class="flex min-h-0 flex-1"><nav class="flex w-12 shrink-0 flex-col items-center bg-vs-activity"><!> <div class="mt-auto flex flex-col items-center pb-1"><button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Account — signed in to the dashboard" aria-label="Account"><!></button> <button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Toggle side bar (Ctrl+B)" aria-label="Toggle side bar"><!></button></div></nav> <!> <section class="flex min-h-0 min-w-0 flex-1 flex-col"><!></section> <!></div> <footer class="flex shrink-0 items-center gap-3 bg-vs-status px-3 py-0.5 text-[12px] text-white"><!> <!> <span class="truncate"> </span> <span class="ml-auto flex items-center gap-3"><!> <span class="max-w-[40vw] truncate opacity-80"> </span> <!> <!></span></footer> <!> <!> <!></div>');function cm(t,e){hn(e,!0);let n=yt(e,"sessions",19,()=>[]),r=yt(e,"session",3,""),s=yt(e,"rootPath",3,""),o=L(Qe([...n()])),a=L(Qe(r()||n()[0]||"")),l=L(!1),c=L(!1),p=L(!1),f=L(Qe({label:"",host:"",username:"",port:22,identity_file:"",password:"",workspace_root:""}));function _(){m.connection&&(h(w,"remote"),h(z,!0),i(c)||d())}function d(){const $=m.connection;$&&(h(f,{label:$.label||"",host:$.host||"",username:$.username||"",port:$.port||22,identity_file:$.identity_file||"",password:"",workspace_root:$.workspace_root||""},!0),h(c,!i(c)))}async function T(){var $;if(!(!m.connection||i(p))){h(p,!0);try{const I={...i(f),port:Number(i(f).port)||22};I.password||delete I.password,await He.updateConnection(m.connection.id,I),await(($=m.loadConnections)==null?void 0:$.call(m)),h(c,!1),m.setStatus("Connection settings saved")}catch(I){m.setStatus(I.message||"Could not save connection settings")}finally{h(p,!1)}}}async function b(){var $;if(!i(l)){h(l,!0);try{const I=((($=m.connection)==null?void 0:$.label)||r()||"agent").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,20)||"agent";let V=I;for(let tt=2;i(o).includes(V);tt+=1)V=`${I}-${tt}`;const Ae=await fetch(`${s()}/api/sessions/create`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:V,agent:"claude"})}),Oe=await Ae.json().catch(()=>({}));if(!Ae.ok)throw new Error(Oe.error||"Could not create session");const qe=Oe.session||Oe.name||V;i(o).includes(qe)||h(o,[...i(o),qe],!0),h(a,qe,!0),m.setStatus(`Agent session "${qe}" created`)}catch(I){m.setStatus(I.message||"Could not create agent session")}finally{h(l,!1)}}}let w=L("files");function A($,I){try{const V=localStorage.getItem(`ide.show.${$}`);return V===null?I:V==="1"}catch{return I}}let O=L(Qe(A("chat",!0)));const U={sidebar:240,chat:320,panel:240};function B($){try{const I=localStorage.getItem(`ide.size.${$}`),V=Number(I);return Number.isFinite(V)&&V>0?V:U[$]}catch{return U[$]}}let Y=L(Qe(B("sidebar"))),C=L(Qe(B("chat"))),E=L(Qe(B("panel")));tn(()=>{try{localStorage.setItem("ide.size.sidebar",String(i(Y))),localStorage.setItem("ide.size.chat",String(i(C))),localStorage.setItem("ide.size.panel",String(i(E))),localStorage.setItem("ide.show.terminal",i(Q)?"1":"0"),localStorage.setItem("ide.show.chat",i(O)?"1":"0"),localStorage.setItem("ide.show.sidebar",i(z)?"1":"0")}catch{}});let z=L(Qe(A("sidebar",!0))),J=L(!1),Q=L(Qe(A("terminal",!1)));const de=8;let pe=L(Qe([0])),he=L(0);function Ze(){if(i(pe).length>=de)return;let $=0;for(;i(pe).includes($);)$+=1;$>=de||(h(pe,[...i(pe),$].sort((I,V)=>I-V),!0),h(he,$,!0))}async function Ge($){const I=i(pe).indexOf($),V=i(pe).filter(Ae=>Ae!==$);h(pe,V.length?V:[0],!0),i(he)===$&&h(he,i(pe)[Math.min(I,i(pe).length-1)],!0);try{await He.closeTerminal(m.connectionId,$)}catch(Ae){m.setStatus(Ae.message||"Could not close terminal")}}let Je=L("");tn(()=>{const $=m.connectionId,I=m.connectionState;if(!$||I!=="connected")return;const V=`${$}|${I}`;i(Je)!==V&&(h(Je,V),h(pe,[0],!0),h(he,0),He.listTerminals($).then(Ae=>{const Oe=((Ae==null?void 0:Ae.terminals)||[]).filter(qe=>Number.isInteger(qe));Oe.length&&(h(pe,Oe,!0),Oe.includes(i(he))||h(he,Oe[0],!0))}).catch(()=>{}))});let K=L(!1);tn(()=>{i(Q)&&h(K,!0)});let ve=L(!1),re=L(!1),se=L(""),P=L(Qe({kind:"local",label:"",host:"",username:"",port:22,auth_mode:"agent",identity_file:"",password:"",private_key:"",workspace_root:"",max_file_bytes:1e6}));const D={idle:{icon:Wd,label:"Not connected"},connecting:{icon:Ud,label:"Connecting…"},connected:{icon:Bd,label:"Connected"},reconnect:{icon:Il,label:"Reconnect required"},error:{icon:Il,label:"Error"}},ee=Bt(()=>D[m.connectionState].icon),be=Bt(()=>{var $;return(($=m.connection)==null?void 0:$.kind)==="local"}),we=[{id:"files",icon:Xd,label:"Explorer",keys:"Ctrl+Shift+E"},{id:"search",icon:nl,label:"Search",keys:"Ctrl+Shift+F"},{id:"git",icon:Ri,label:"Source Control",keys:"Ctrl+Shift+G"},{id:"remote",icon:op,label:"Remote Explorer",keys:""}];ro(async()=>{await m.loadConnections(),m.connectionId&&await m.refreshStatus()});function Ne($){i(w)===$&&i(z)?h(z,!1):(h(w,$,!0),h(z,!0))}async function rn($){m.connectionId=$.currentTarget.value,m.resetWorkspaceView(),await m.refreshStatus()}async function gn($){h(re,!1);try{const I=$.split("/").filter(Boolean).pop()||$,V=m.connection;if(V&&V.kind!=="local"){await He.setWorkspaceRoot(V.id,$,I),await m.loadConnections(),m.resetWorkspaceView(),await m.refreshFiles("."),m.setStatus(`Opened ${$} on ${V.username}@${V.host}`),h(w,"files"),h(z,!0);return}if(V&&V.kind==="local"){await He.setWorkspaceRoot(V.id,$,I),await m.loadConnections(),m.resetWorkspaceView(),await m.refreshFiles("."),m.setStatus(`Opened ${$}`),h(w,"files"),h(z,!0);return}const Ae=await He.createConnection({kind:"local",label:I,workspace_root:$,max_file_bytes:1e6});await m.loadConnections(),m.connectionId=Ae.connection.id,m.resetWorkspaceView(),await m.connect(""),h(w,"files"),h(z,!0)}catch(I){m.setStatus(I.message||"Could not open folder")}}async function Vt($){$.preventDefault();try{const I=await He.createConnection({...i(P),port:Number(i(P).port)});h(ve,!1),h(P,{...i(P),label:"",host:"",username:"",password:"",private_key:""},!0),await m.loadConnections(),m.connectionId=I.connection.id,await m.refreshStatus()}catch(I){m.setStatus(I.message||"Could not create connection")}}async function qt(){const $=m.connection;if(!$)return;const I=$.kind==="local"?"workspace":"connection";if(confirm(`Remove ${I} "${$.label}"? Saved tabs are cleared; files are untouched.`))try{await He.deleteConnection($.id),m.connectionId="",m.resetWorkspaceView(),await m.loadConnections()}catch(V){m.setStatus(V.message||"Could not delete")}}async function pr(){try{const $=await He.focusTerminal(m.connectionId);m.setStatus(`Focused ${$.window_name}`,"tmux window selected")}catch($){m.setStatus($.message||"Could not focus terminal")}}function Pr($){var Oe,qe,tt,x;const I=$.ctrlKey||$.metaKey,V=$.key.toLowerCase(),Ae=((qe=(Oe=$.target)==null?void 0:Oe.matches)==null?void 0:qe.call(Oe,"input, textarea, select"))&&!((x=(tt=$.target).closest)!=null&&x.call(tt,".monaco-editor"));I&&V==="s"?($.preventDefault(),m.saveActive()):I&&V==="p"&&!Ae?($.preventDefault(),m.connectionId&&h(J,!0)):I&&$.shiftKey&&V==="o"?($.preventDefault(),h(re,!0)):I&&$.shiftKey&&["e","f","g"].includes(V)?($.preventDefault(),h(w,{e:"files",f:"search",g:"git"}[V],!0),h(z,!0)):I&&V==="b"&&!Ae?($.preventDefault(),h(z,!i(z))):I&&V==="`"?($.preventDefault(),m.connectionState==="connected"&&h(Q,!i(Q))):$.key==="Escape"&&i(J)&&($.preventDefault(),h(J,!1))}var Ir=lm();Ut("keydown",$s,Pr);var Nr=S(Ir),hr=S(Nr);Nl(hr,{size:15,class:"shrink-0 text-vs-blue"});var _e=g(hr,2),Gt=g(_e,2),Le=g(Gt,2);let Xn;var Mt=S(Le);Ll(Mt,{size:13});var Tn=g(Le,2),vr=ae(Tn,!0),sn=g(Tn,2),Or=S(sn);Sl(Or,()=>i(ee),($,I)=>{I($,{size:12})});var gr=g(Or),Qn=g(Nr,2),mn=S(Qn),on=S(mn);_t(on,17,()=>we,$=>$.id,($,I)=>{var V=Mg(),Ae=S(V);{var Oe=R=>{var W=Og();y(R,W)};j(Ae,R=>{i(w)===i(I).id&&i(z)&&R(Oe)})}var qe=g(Ae,2);Sl(qe,()=>i(I).icon,(R,W)=>{W(R,{size:24,strokeWidth:1.4})});var tt=g(qe,2);{var x=R=>{var W=zg(),oe=ae(W,!0);X(()=>Z(oe,m.gitDirtyCount)),y(R,W)};j(tt,R=>{i(I).id==="git"&&m.gitDirtyCount&&R(x)})}X(()=>{dn(V,1,`relative flex h-12 w-12 items-center justify-center ${i(w)===i(I).id&&i(z)?"text-vs-bright":"text-vs-muted hover:text-vs-fg"}`),Pe(V,"title",i(I).keys?`${i(I).label} (${i(I).keys})`:i(I).label),Pe(V,"aria-label",i(I).label)}),H("click",V,()=>Ne(i(I).id)),y($,V)});var $n=g(on,2),Lt=S($n),mr=S(Lt);jd(mr,{size:24,strokeWidth:1.4});var Jn=g(Lt,2),Mn=S(Jn);ip(Mn,{size:24,strokeWidth:1.4});var er=g(mn,2);{var En=$=>{var I=Yg(),V=q(I),Ae=S(V);{var Oe=W=>{kp(W,{})},qe=W=>{Sg(W,{})},tt=W=>{Up(W,{})},x=W=>{var oe=Kg(),ce=g(q(oe),2),fe=S(ce),ye=S(fe);ye.value=ye.__value="";var De=g(ye);_t(De,17,()=>m.connections,Xe=>Xe.id,(Xe,dt)=>{var pt=uc(),bn=ae(pt),Ft={};X(()=>{Z(bn,`${i(dt).kind==="local"?"🖿 ":"⇅ "}${i(dt).label??""}`),Ft!==(Ft=i(dt).id)&&(pt.value=(pt.__value=Ft)??"")}),y(Xe,pt)});var le;yo(fe);var Ce=g(fe,2),Ue=S(Ce),gt=S(Ue);ai(gt,{size:13});var ze=g(Ue,2),lt=S(ze);Ao(lt,{size:13});var Tt=g(ze,2);{var Dt=Xe=>{var dt=Lg(),pt=q(dt),bn=S(pt);Ml(bn,{size:13});var Ft=g(pt,2),Bn=S(Ft);Dl(Bn,{size:13}),H("click",pt,d),H("click",Ft,qt),y(Xe,dt)};j(Tt,Xe=>{m.connection&&Xe(Dt)})}var ft=g(Ce,2);{var mt=Xe=>{var dt=Fg(),pt=S(dt),bn=ae(pt,!0),Ft=g(pt,2),Bn=g(Ft,2);{var Zr=u=>{var k=Dg(),M=q(k),G=S(M),te=g(G,2),ge=g(M,2),Ke=g(ge,2),rt=g(Ke,2);ct(G,()=>i(f).host,at=>i(f).host=at),ct(te,()=>i(f).port,at=>i(f).port=at),ct(ge,()=>i(f).username,at=>i(f).username=at),ct(Ke,()=>i(f).identity_file,at=>i(f).identity_file=at),ct(rt,()=>i(f).password,at=>i(f).password=at),y(u,k)};j(Bn,u=>{i(be)||u(Zr)})}var Xr=g(Bn,2),Xt=g(Xr,2),Qt=S(Xt),Fr=ae(Qt,!0),F=g(Qt,2);X(()=>{Z(bn,i(be)?"Folder settings":"SSH connection settings"),Qt.disabled=i(p),Z(Fr,i(p)?"Saving…":"Save")}),ct(Ft,()=>i(f).label,u=>i(f).label=u),ct(Xr,()=>i(f).workspace_root,u=>i(f).workspace_root=u),H("click",Qt,T),H("click",F,()=>h(c,!1)),y(Xe,dt)};j(ft,Xe=>{i(c)&&m.connection&&Xe(mt)})}var kt=g(ft,2);{var Yt=Xe=>{var dt=Ug(),pt=q(dt);{var bn=Xt=>{var Qt=Hg();ct(Qt,()=>i(se),Fr=>h(se,Fr)),y(Xt,Qt)};j(pt,Xt=>{!i(be)&&!m.connection.has_password&&Xt(bn)})}var Ft=g(pt,2),Bn=ae(Ft,!0),Zr=g(Ft,2);{var Xr=Xt=>{var Qt=Bg();H("click",Qt,()=>m.needsHostKey=!0),y(Xt,Qt)};j(Zr,Xt=>{i(be)||Xt(Xr)})}X(()=>Z(Bn,i(be)?"Open workspace":"Connect")),H("click",Ft,()=>m.connect(i(se))),y(Xe,dt)};j(kt,Xe=>{m.connection&&m.connectionState!=="connected"&&Xe(Yt)})}var Zt=g(kt,2);{var Dr=Xe=>{var dt=jg(),pt=ae(dt,!0);X(()=>Z(pt,m.connection.workspace_root)),y(Xe,dt)};j(Zt,Xe=>{m.connection&&Xe(Dr)})}var _r=g(ce,2);{var br=Xe=>{var dt=Gg(),pt=S(dt),bn=S(pt);bn.value=bn.__value="local";var Ft=g(bn);Ft.value=Ft.__value="ssh",yo(pt);var Bn=g(pt,2),Zr=g(Bn,2);{var Xr=F=>{var u=qg(),k=q(u),M=g(k,2),G=g(M,2),te=g(G,2),ge=S(te);ge.value=ge.__value="agent";var Ke=g(ge);Ke.value=Ke.__value="key";var rt=g(Ke);rt.value=rt.__value="password",yo(te);var at=g(te,2);{var an=Ht=>{var Cs=Wg(),da=q(Cs),Hu=g(da,2);ct(da,()=>i(P).identity_file,Ga=>i(P).identity_file=Ga),ct(Hu,()=>i(P).private_key,Ga=>i(P).private_key=Ga),y(Ht,Cs)};j(at,Ht=>{i(P).auth_mode==="key"&&Ht(an)})}var oo=g(at,2);{var Jt=Ht=>{var Cs=Vg();ct(Cs,()=>i(P).password,da=>i(P).password=da),y(Ht,Cs)};j(oo,Ht=>{i(P).auth_mode==="password"&&Ht(Jt)})}ct(k,()=>i(P).host,Ht=>i(P).host=Ht),ct(M,()=>i(P).username,Ht=>i(P).username=Ht),ct(G,()=>i(P).port,Ht=>i(P).port=Ht),ni(te,()=>i(P).auth_mode,Ht=>i(P).auth_mode=Ht),y(F,u)};j(Zr,F=>{i(P).kind==="ssh"&&F(Xr)})}var Xt=g(Zr,2),Qt=g(Xt,2),Fr=g(S(Qt),2);X(()=>{Pe(Xt,"placeholder",i(P).kind==="local"?"/var/www/app":"Workspace root"),Xt.required=i(P).kind==="local"}),Ut("submit",dt,Vt),ni(pt,()=>i(P).kind,F=>i(P).kind=F),ct(Bn,()=>i(P).label,F=>i(P).label=F),ct(Xt,()=>i(P).workspace_root,F=>i(P).workspace_root=F),H("click",Fr,()=>h(ve,!1)),y(Xe,dt)};j(_r,Xe=>{i(ve)&&Xe(br)})}X(()=>{le!==(le=m.connectionId)&&(fe.value=(fe.__value=le)??"",Ro(fe,le))}),H("change",fe,rn),H("click",Ue,()=>h(re,!0)),H("click",ze,()=>h(ve,!i(ve))),y(W,oe)};j(Ae,W=>{i(w)==="files"?W(Oe):i(w)==="search"?W(qe,1):i(w)==="git"?W(tt,2):W(x,-1)})}var R=g(V,2);hi(R,{side:"right",min:170,max:620,onreset:()=>h(Y,U.sidebar,!0),get size(){return i(Y)},set size(W){h(Y,W,!0)}}),X(()=>ws(V,`width: ${i(Y)??""}px`)),y($,I)};j(er,$=>{i(z)&&$(En)})}var An=g(er,2),tr=S(An);{var Kr=$=>{var I=Zg(),V=S(I);Nl(V,{size:64,strokeWidth:1,class:"text-vs-line"});var Ae=g(V,4),Oe=S(Ae),qe=S(Oe);ai(qe,{size:16});var tt=g(Oe,2),x=S(tt);zl(x,{size:16}),H("click",Oe,()=>h(re,!0)),H("click",tt,()=>{h(w,"remote"),h(z,!0),h(ve,!0)}),y($,I)},Yr=$=>{var I=tm(),V=q(I);Jp(V,{});var Ae=g(V,2),Oe=S(Ae);Kp(Oe,{});var qe=g(Ae,2);{var tt=x=>{var R=em(),W=q(R);{var oe=ft=>{hi(ft,{side:"top",min:120,max:640,onreset:()=>h(E,U.panel,!0),get size(){return i(E)},set size(mt){h(E,mt,!0)}})};j(W,ft=>{i(Q)&&ft(oe)})}var ce=g(W,2),fe=S(ce),ye=S(fe);Ll(ye,{size:13,class:"mx-1 shrink-0"});var De=g(ye,2);_t(De,20,()=>i(pe),ft=>ft,(ft,mt)=>{var kt=Qg(),Yt=S(kt),Zt=ae(Yt,!0),Dr=g(Yt,2);{var _r=br=>{var Xe=Xg(),dt=S(Xe);Na(dt,{size:11}),X(()=>Pe(Xe,"aria-label",`Close terminal ${mt+1}`)),H("click",Xe,()=>Ge(mt)),y(br,Xe)};j(Dr,br=>{i(pe).length>1&&br(_r)})}X(()=>{var br;dn(kt,1,`group flex shrink-0 items-center gap-1 rounded-sm px-2 py-0.5
                           ${mt===i(he)?"bg-vs-hover text-vs-fg":"text-vs-muted hover:text-vs-fg"}`),Z(Zt,mt===0?((br=m.connection)==null?void 0:br.label)||"Terminal":`Terminal ${mt+1}`)}),H("click",Yt,()=>h(he,mt,!0)),y(ft,kt)});var le=g(De,2),Ce=S(le);Ao(Ce,{size:14});var Ue=g(le,2),gt=S(Ue);$r(gt,{size:15});var ze=g(Ue,2),lt=S(ze);Dl(lt,{size:13});var Tt=g(fe,2),Dt=S(Tt);gd(Dt,()=>m.connectionId,ft=>{var mt=ue(),kt=q(mt);_t(kt,16,()=>i(pe),Yt=>Yt,(Yt,Zt)=>{var Dr=Jg(),_r=S(Dr);dg(_r,{get rootPath(){return s()},get session(){return r()},get index(){return Zt}}),X(()=>Pe(Dr,"hidden",Zt!==i(he))),y(Yt,Dr)}),y(ft,mt)}),X(()=>{ws(ce,`height: ${i(E)??""}px`),Pe(ce,"hidden",!i(Q)),le.disabled=i(pe).length>=de}),H("click",le,Ze),H("click",Ue,()=>h(Q,!1)),H("click",ze,()=>Ge(i(he))),y(x,R)};j(qe,x=>{i(K)&&m.connectionState==="connected"&&x(tt)})}y($,I)};j(tr,$=>{m.connectionId?$(Yr,-1):$(Kr)})}var zr=g(An,2);{var Mr=$=>{var I=nm(),V=q(I);hi(V,{side:"left",min:260,max:760,onreset:()=>h(C,U.chat,!0),get size(){return i(C)},set size(le){h(C,le,!0)}});var Ae=g(V,2),Oe=S(Ae),qe=S(Oe);Ol(qe,{size:13,class:"shrink-0"});var tt=g(qe,4);_t(tt,20,()=>i(o),le=>le,(le,Ce)=>{var Ue=uc(),gt=ae(Ue,!0),ze={};X(()=>{Z(gt,Ce),ze!==(ze=Ce)&&(Ue.value=(Ue.__value=ze)??"")}),y(le,Ue)}),yo(tt);var x=g(tt,2),R=S(x);{var W=le=>{ur(le,{size:13,class:"animate-spin"})},oe=le=>{Ao(le,{size:14})};j(R,le=>{i(l)?le(W):le(oe,-1)})}var ce=g(x,2),fe=S(ce);Na(fe,{size:14});var ye=g(Oe,2),De=S(ye);sg(De,{get sessions(){return i(o)},get session(){return r()},get rootPath(){return s()},get target(){return i(a)},set target(le){h(a,le,!0)}}),X(()=>{ws(Ae,`width: ${i(C)??""}px`),x.disabled=i(l)}),ni(tt,()=>i(a),le=>h(a,le)),H("click",x,b),H("click",ce,()=>h(O,!1)),y($,I)};j(zr,$=>{i(O)&&$(Mr)})}var Ln=g(Qn,2),_n=S(Ln);{var Dn=$=>{var I=rm(),V=S(I);{var Ae=x=>{ai(x,{size:12})},Oe=x=>{zl(x,{size:12})};j(V,x=>{i(be)?x(Ae):x(Oe,-1)})}var qe=g(V),tt=g(qe);Ml(tt,{size:11,class:"opacity-70"}),X(()=>{Pe(I,"title",`${m.connection.workspace_root??""} — click for connection settings`),Z(qe,` ${m.connection.label??""} `)}),H("click",I,_),y($,I)};j(_n,$=>{m.connection&&$(Dn)})}var Lr=g(_n,2);{var ie=$=>{var I=sm(),V=S(I);Ri(V,{size:12});var Ae=g(V);X(()=>Z(Ae,` ${m.gitBranch??""}`)),y($,I)};j(Lr,$=>{m.gitBranch&&$(ie)})}var et=g(Lr,2),We=ae(et,!0),xe=g(et,2),Ve=S(xe);{var wt=$=>{var I=om(),V=ae(I);X(()=>Z(V,`${m.dirtyCount??""} unsaved`)),y($,I)};j(Ve,$=>{m.dirtyCount&&$(wt)})}var Be=g(Ve,2),Ct=ae(Be,!0),Kt=g(Be,2);{var ot=$=>{var I=am(),V=q(I),Ae=S(V);ap(Ae,{size:12});var Oe=g(V,2),qe=S(Oe);Kd(qe,{size:12}),H("click",V,()=>h(Q,!i(Q))),H("click",Oe,pr),y($,I)};j(Kt,$=>{m.connectionState==="connected"&&$(ot)})}var Rt=g(Kt,2);{var ht=$=>{var I=im(),V=S(I);Ol(V,{size:12}),H("click",I,()=>h(O,!i(O))),y($,I)};j(Rt,$=>{$(ht)})}var Pt=g(Ln,2);{var Fn=$=>{ug($,{onclose:()=>h(J,!1)})};j(Pt,$=>{i(J)&&$(Fn)})}var It=g(Pt,2);{var St=$=>{_g($,{onopen:gn,onclose:()=>h(re,!1)})};j(It,$=>{i(re)&&$(St)})}var vt=g(It,2);{var Hn=$=>{Ig($,{onclose:()=>m.needsHostKey=!1,ontrusted:async()=>{m.needsHostKey=!1,await m.connect(i(se))}})};j(vt,$=>{m.needsHostKey&&$(Hn)})}X(()=>{var $;Gt.disabled=!m.connectionId,Xn=dn(Le,1,"flex items-center gap-1 rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40",null,Xn,{"text-vs-bright":i(Q)}),Le.disabled=m.connectionState!=="connected",Pe(Le,"title",m.connectionState==="connected"?"Toggle terminal (Ctrl+`)":"Open a workspace to use the terminal"),Pe(Tn,"title",($=m.connection)==null?void 0:$.workspace_root),Z(vr,m.connection?`${m.connection.label} — Multibuilder IDE`:"Multibuilder IDE"),dn(sn,1,`flex items-center gap-1 ${m.connectionState==="connected"?"text-vs-green":m.connectionState==="connecting"?"text-vs-yellow":m.connectionState==="idle"?"text-vs-muted":"text-vs-red"}`),Z(gr,` ${D[m.connectionState].label??""}`),Z(We,m.statusText),Z(Ct,m.detailText)}),H("click",_e,()=>h(re,!0)),H("click",Gt,()=>h(J,!0)),H("click",Le,()=>h(Q,!i(Q))),H("click",Lt,()=>m.setStatus("Signed in to the Multibuilder dashboard")),H("click",Jn,()=>h(z,!i(z))),y(t,Ir),vn()}Zn(["click","change"]);function Fu(t,e){return dd(cm,{target:t,props:e})}function fc(){const t=document.getElementById("ide-root");if(!t||t.dataset.mounted)return;t.dataset.mounted="1";const e=window.__IDE_BOOTSTRAP__||{};Fu(t,{sessions:e.sessions||[],session:e.session||"",rootPath:e.rootPath||""})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",fc):fc();window.mountRemoteIde=Fu;export{Ta as _};
