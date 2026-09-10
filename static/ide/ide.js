const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ide-monaco.js","./ide2.css","./ide3.css"])))=>i.map(i=>d[i]);
var Bu=Object.defineProperty;var fl=t=>{throw TypeError(t)};var Uu=(t,e,n)=>e in t?Bu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Oe=(t,e,n)=>Uu(t,typeof e!="symbol"?e+"":e,n),Ka=(t,e,n)=>e.has(t)||fl("Cannot "+n);var m=(t,e,n)=>(Ka(t,e,"read from private field"),n?n.call(t):e.get(t)),re=(t,e,n)=>e.has(t)?fl("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Pe=(t,e,n,r)=>(Ka(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),Ue=(t,e,n)=>(Ka(t,e,"access private method"),n);var Ha=Array.isArray,ju=Array.prototype.indexOf,$a=Array.prototype.includes,Ba=Array.from,vc=Object.defineProperty,ts=Object.getOwnPropertyDescriptor,gc=Object.getOwnPropertyDescriptors,Wu=Object.prototype,Vu=Array.prototype,Di=Object.getPrototypeOf,dl=Object.isExtensible;function ao(t){return typeof t=="function"}const qu=()=>{};function Gu(t){return t()}function vi(t){for(var e=0;e<t.length;e++)t[e]()}function mc(){var t,e,n=new Promise((r,s)=>{t=r,e=s});return{promise:n,resolve:t,reject:e}}function Ku(t,e){if(Array.isArray(t))return t;if(!(Symbol.iterator in t))return Array.from(t);const n=[];for(const r of t)if(n.push(r),n.length===e)break;return n}const Wt=2,Ws=4,aa=8,Fi=1<<24,pr=16,Xn=32,Ur=64,gi=128,Hi=256,Zn=512,Nt=1024,Ot=2048,mr=4096,vn=8192,Tn=16384,Zs=32768,Ea=1<<25,rs=65536,Aa=1<<17,Yu=1<<18,Xs=1<<19,_c=1<<20,$r=1<<25,ks=65536,Ca=1<<21,Os=1<<22,ns=1<<23,Cr=Symbol("$state"),bc=Symbol("component"),xc=Symbol("legacy props"),Zu=Symbol(""),_a=Symbol("attributes"),mi=Symbol("class"),_i=Symbol("style"),vo=Symbol("text"),ba=Symbol("form reset"),ia=new class extends Error{constructor(){super(...arguments);Oe(this,"name","StaleReactionError");Oe(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var dc;const Bi=!!((dc=globalThis.document)!=null&&dc.contentType)&&globalThis.document.contentType.includes("xml"),Xu=1,Qu=2,yc=4,Ju=8,ef=16,tf=1,nf=2,kc=4,rf=8,sf=16,of=1,af=2,Et=Symbol("uninitialized"),wc="http://www.w3.org/1999/xhtml",Sc="http://www.w3.org/2000/svg",lf="http://www.w3.org/1998/Math/MathML",cf="@attach";function uf(){console.warn("https://svelte.dev/e/derived_inert")}function ff(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function df(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Tc(t){return t===this.v}function pf(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function $c(t){return!pf(t,this.v)}function Ec(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function hf(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function vf(t,e,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function gf(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function mf(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function _f(t){throw new Error("https://svelte.dev/e/effect_orphan")}function bf(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function xf(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function yf(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function kf(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function wf(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Sf(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Qs=!1;function Tf(){Qs=!0}let vt=null;function Vs(t){vt=t}function gn(t,e=!1,n){vt={p:vt,i:!1,c:null,e:null,s:t,x:null,r:Me,l:Qs&&!e?{s:null,u:null,$:[]}:null}}function mn(t){var e=vt,n=e.e;if(n!==null){e.e=null;for(var r of n)Zc(r)}return e.i=!0,vt=e.p,Ui(t)}function Ui(t={}){return vc(t,bc,{value:!0}),t}function Js(){return!Qs||vt!==null&&vt.l===null}let fs=[];function Ac(){var t=fs;fs=[],vi(t)}function Er(t){if(fs.length===0&&!$o){var e=fs;queueMicrotask(()=>{e===fs&&Ac()})}fs.push(t)}function $f(){for(;fs.length>0;)Ac()}const Ef=-7169;function xt(t,e){t.f=t.f&Ef|e}function ji(t){(t.f&Zn)!==0||t.deps===null?xt(t,Nt):xt(t,mr)}function Cc(t){if(t!==null)for(const e of t)(e.f&Wt)===0||(e.f&ks)===0||(e.f^=ks,Cc(e.deps))}function Rc(t,e,n){(t.f&Ot)!==0?e.add(t):(t.f&mr)!==0&&n.add(t),Cc(t.deps),xt(t,Nt)}let pa=!1;function Af(t){var e=pa;try{return pa=!1,[t(),pa]}finally{pa=e}}function Pc(t,e){if(e){const n=document.body;t.autofocus=!0,Er(()=>{document.activeElement===n&&t.focus()})}}let pl=!1;function Cf(){pl||(pl=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const n of t.target.elements)(e=n[ba])==null||e.call(n)})},{capture:!0}))}function eo(t){var e=He,n=Me;Qn(null),Jn(null);try{return t()}finally{Qn(e),Jn(n)}}function Ic(t,e,n,r=n){t.addEventListener(e,()=>eo(n));const s=t[ba];s?t[ba]=()=>{s(),r(!0)}:t[ba]=()=>r(!0),Cf()}function Nc(t,e,n,r){const s=Js()?qs:Wi;var o=t.filter(T=>!T.settled),a=e.map(s);if(n.length===0&&o.length===0){r(a);return}var l=Me,c=Rf(),p=o.length===1?o[0].promise:o.length>1?Promise.all(o.map(T=>T.promise)):null;function u(T){if((l.f&Tn)===0){c();try{r([...a,...T])}catch(b){Tr(b,l)}Ra()}}var _=Oc();if(n.length===0){p.then(()=>u([])).finally(_);return}function d(){Promise.all(n.map(T=>Pf(T))).then(u).catch(T=>Tr(T,l)).finally(_)}p?p.then(()=>{c(),d(),Ra()}):d()}function Rf(){var t=Me,e=He,n=vt,r=_e;return function(o=!0){Jn(t),Qn(e),Vs(n),o&&(t.f&Tn)===0&&(r==null||r.activate(),r==null||r.apply())}}function Ra(t=!0){Jn(null),Qn(null),Vs(null),t&&(_e==null||_e.deactivate())}function Oc(){var t=Me,e=t.b,n=_e,r=!!(e!=null&&e.is_rendered());return e==null||e.update_pending_count(1,n),n.increment(r,t),()=>{e==null||e.update_pending_count(-1,n),n.decrement(r,t)}}function qs(t){var e=Wt|Ot;return Me!==null&&(Me.f|=Xs),{ctx:vt,deps:null,effects:null,equals:Tc,f:e,fn:t,reactions:null,rv:0,v:Et,wv:0,parent:Me,ac:null}}const go=Symbol("obsolete");function Pf(t,e,n){let r=Me;r===null&&hf();var s=void 0,o=jr(Et),a=!He,l=new Set;return qf(()=>{var T,b;var c=Me,p=mc();s=p.promise;try{Promise.resolve(t()).then(p.resolve,w=>{w!==ia&&p.reject(w)}).finally(Ra)}catch(w){p.reject(w),Ra()}var u=_e;if(a){if((c.f&Zs)!==0)var _=Oc();if((T=r.b)!=null&&T.is_rendered())(b=u.async_deriveds.get(c))==null||b.reject(go);else for(const w of l.values())w.reject(go);l.add(p),u.async_deriveds.set(c,p)}const d=(w,C=void 0)=>{_==null||_(),l.delete(p),C!==go&&(u.activate(),C?(o.f|=ns,Gs(o,C)):((o.f&ns)!==0&&(o.f^=ns),Gs(o,w)),u.deactivate())};p.promise.then(d,w=>d(null,w||"unknown"))}),ja(()=>{for(const c of l)c.reject(go)}),new Promise(c=>{function p(u){function _(){u===s?c(o):p(s)}u.then(_,_)}p(s)})}function Ut(t){const e=qs(t);return ru(e),e}function Wi(t){const e=qs(t);return e.equals=$c,e}function If(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)en(e[n])}}function Vi(t){var e,n=Me,r=t.parent;if(!Wr&&r!==null&&t.v!==Et&&(r.f&(Tn|vn))!==0)return uf(),t.v;Jn(r);try{t.f&=~ks,If(t),e=iu(t)}finally{Jn(n)}return e}function zc(t){var e=Vi(t);if(!t.equals(e)&&(t.wv=ou(),(!(_e!=null&&_e.is_fork)||t.deps===null)&&(_e!==null?(_e.capture(t,e,!0),To==null||To.capture(t,e,!0)):t.v=e,t.deps===null))){xt(t,Nt);return}Wr||(Qt!==null?(Ki()||_e!=null&&_e.is_fork)&&Qt.set(t,e):ji(t))}function Nf(t){var e;if(t.effects!==null)for(const n of t.effects)(n.teardown||n.ac)&&((e=n.teardown)==null||e.call(n),n.ac!==null&&eo(()=>{n.ac.abort(ia),n.ac=null}),n.fn!==null&&(n.teardown=qu),Co(n,0),Zi(n))}function Mc(t){if(t.effects!==null)for(const e of t.effects)e.teardown&&e.fn!==null&&Ks(e)}let Ya=null,Cs=null,_e=null,To=null,Qt=null,bi=null,$o=!1,Za=!1,Ns=null,xa=null;var hl=0;let Of=1;var Ls,Jr,hs,Ds,Fs,Hs,Fr,Bs,yn,Po,Hr,cr,kr,Us,vs,rt,xi,mo,yi,Lc,Dc,Ps,zf,_o;const La=class La{constructor(){re(this,rt);Oe(this,"id",Of++);re(this,Ls,!1);Oe(this,"linked",!0);re(this,Jr,null);re(this,hs,null);Oe(this,"async_deriveds",new Map);Oe(this,"current",new Map);Oe(this,"previous",new Map);re(this,Ds,new Set);re(this,Fs,new Set);re(this,Hs,0);re(this,Fr,new Map);re(this,Bs,null);re(this,yn,[]);re(this,Po,[]);re(this,Hr,new Set);re(this,cr,new Set);re(this,kr,new Map);re(this,Us,new Set);Oe(this,"is_fork",!1);re(this,vs,!1);Cs===null?Ya=Cs=this:(Pe(Cs,hs,this),Pe(this,Jr,Cs)),Cs=this}skip_effect(e){m(this,kr).has(e)||m(this,kr).set(e,{d:[],m:[]}),m(this,Us).delete(e)}unskip_effect(e,n=r=>this.schedule(r)){var r=m(this,kr).get(e);if(r){m(this,kr).delete(e);for(var s of r.d)xt(s,Ot),n(s);for(s of r.m)xt(s,mr),n(s)}m(this,Us).add(e)}capture(e,n,r=!1){e.v!==Et&&!this.previous.has(e)&&this.previous.set(e,e.v),(e.f&ns)===0&&(this.current.set(e,[n,r]),Qt==null||Qt.set(e,n)),this.is_fork||(e.v=n)}activate(){_e=this}deactivate(){_e=null,Qt=null}flush(){try{Za=!0,_e=this,Ue(this,rt,mo).call(this)}finally{hl=0,bi=null,Ns=null,xa=null,Za=!1,_e=null,Qt=null,Rr.clear()}}discard(){var e;for(const n of m(this,Fs))n(this);m(this,Fs).clear();for(const n of this.async_deriveds.values())n.reject(go);Ue(this,rt,_o).call(this),(e=m(this,Bs))==null||e.resolve()}register_created_effect(e){m(this,Po).push(e)}increment(e,n){if(Pe(this,Hs,m(this,Hs)+1),e){let r=m(this,Fr).get(n)??0;m(this,Fr).set(n,r+1)}}decrement(e,n){if(Pe(this,Hs,m(this,Hs)-1),e){let r=m(this,Fr).get(n)??0;r===1?m(this,Fr).delete(n):m(this,Fr).set(n,r-1)}m(this,vs)||(Pe(this,vs,!0),Er(()=>{Pe(this,vs,!1),this.linked&&this.flush()}))}transfer_effects(e,n){for(const r of e)m(this,Hr).add(r);for(const r of n)m(this,cr).add(r);e.clear(),n.clear()}oncommit(e){m(this,Ds).add(e)}ondiscard(e){m(this,Fs).add(e)}settled(){return(m(this,Bs)??Pe(this,Bs,mc())).promise}static ensure(){if(_e===null){const e=_e=new La;!Za&&!$o&&Er(()=>{m(e,Ls)||e.flush()})}return _e}apply(){{Qt=null;return}}schedule(e){var s;if(bi=e,(s=e.b)!=null&&s.is_pending&&(e.f&(Ws|aa|Fi))!==0&&(e.f&Zs)===0){e.b.defer_effect(e);return}for(var n=e;n.parent!==null;){n=n.parent;var r=n.f;if(Ns!==null&&n===Me&&(He===null||(He.f&Wt)===0))return;if((r&(Ur|Xn))!==0){if((r&Nt)===0)return;n.f^=Nt}}m(this,yn).push(n)}};Ls=new WeakMap,Jr=new WeakMap,hs=new WeakMap,Ds=new WeakMap,Fs=new WeakMap,Hs=new WeakMap,Fr=new WeakMap,Bs=new WeakMap,yn=new WeakMap,Po=new WeakMap,Hr=new WeakMap,cr=new WeakMap,kr=new WeakMap,Us=new WeakMap,vs=new WeakMap,rt=new WeakSet,xi=function(){if(this.is_fork)return!0;for(const r of m(this,Fr).keys()){for(var e=r,n=!1;e.parent!==null;){if(m(this,kr).has(e)){n=!0;break}e=e.parent}if(!n)return!0}return!1},mo=function(){var c,p,u,_;Pe(this,Ls,!0),hl++>1e3&&(Ue(this,rt,_o).call(this),Lf());for(const d of m(this,Hr))m(this,cr).delete(d),xt(d,Ot),this.schedule(d);for(const d of m(this,cr))xt(d,mr),this.schedule(d);const e=m(this,yn);Pe(this,yn,[]),this.apply();var n=Ns=[],r=[],s=xa=[];for(const d of e)try{Ue(this,rt,yi).call(this,d,n,r)}catch(T){throw Bc(d),Ue(this,rt,xi).call(this)||this.discard(),T}if(_e=null,s.length>0){var o=La.ensure();for(const d of s)o.schedule(d)}if(Ns=null,xa=null,Ue(this,rt,xi).call(this)){Ue(this,rt,Ps).call(this,r),Ue(this,rt,Ps).call(this,n);for(const[d,T]of m(this,kr))Hc(d,T);s.length>0&&Ue(c=_e,rt,mo).call(c);return}const a=Ue(this,rt,Lc).call(this);if(a){Ue(this,rt,Ps).call(this,r),Ue(this,rt,Ps).call(this,n),Ue(p=a,rt,Dc).call(p,this);return}m(this,Hr).clear(),m(this,cr).clear();for(const d of m(this,Ds))d(this);m(this,Ds).clear(),To=this,vl(r),vl(n),To=null,(u=m(this,Bs))==null||u.resolve();var l=_e;if(m(this,Hs)===0&&(m(this,yn).length===0||l!==null)&&Ue(this,rt,_o).call(this),m(this,yn).length>0)if(l!==null){const d=l;m(d,yn).push(...m(this,yn).filter(T=>!m(d,yn).includes(T)))}else l=this;l!==null&&(Rr.clear(),Ue(_=l,rt,mo).call(_))},yi=function(e,n,r){e.f^=Nt;for(var s=e.first;s!==null;){var o=s.f,a=(o&(Xn|Ur))!==0,l=a&&(o&Nt)!==0,c=l||(o&vn)!==0||m(this,kr).has(s);if(!c&&s.fn!==null){a?s.f^=Nt:(o&Ws)!==0?n.push(s):ca(s)&&((o&pr)!==0&&m(this,cr).add(s),Ks(s));var p=s.first;if(p!==null){s=p;continue}}for(;s!==null;){var u=s.next;if(u!==null){s=u;break}s=s.parent}}},Lc=function(){for(var e=m(this,Jr);e!==null;){if(!e.is_fork){for(const[n,[,r]]of this.current)if(e.current.has(n)&&!r)return e}e=m(e,Jr)}return null},Dc=function(e){var r;for(const[s,o]of e.current)!this.previous.has(s)&&e.previous.has(s)&&this.previous.set(s,e.previous.get(s)),this.current.set(s,o);for(const[s,o]of e.async_deriveds){const a=this.async_deriveds.get(s);a&&o.promise.then(a.resolve).catch(a.reject)}e.async_deriveds.clear(),this.transfer_effects(m(e,Hr),m(e,cr));const n=s=>{var o=s.reactions;if(o!==null&&!((s.f&Wt)!==0&&(s.f&(Ot|mr))===0))for(const c of o){var a=c.f;if((a&Wt)!==0)n(c);else{var l=c;a&(Os|pr)&&!this.async_deriveds.has(l)&&(m(this,cr).delete(l),xt(l,Ot),this.schedule(l))}}};for(const s of this.current.keys())n(s);this.oncommit(()=>e.discard()),Ue(r=e,rt,_o).call(r),_e=this,Ue(this,rt,mo).call(this)},Ps=function(e){for(var n=0;n<e.length;n+=1)Rc(e[n],m(this,Hr),m(this,cr))},zf=function(){var _;for(let d=Ya;d!==null;d=m(d,hs)){var e=d.id<this.id,n=[];for(const[T,[b,w]]of this.current){if(d.current.has(T)){var r=d.current.get(T)[0];if(e&&b!==r)d.current.set(T,[b,w]);else continue}n.push(T)}if(e)for(const[T,b]of this.async_deriveds){const w=d.async_deriveds.get(T);w&&b.promise.then(w.resolve).catch(w.reject)}var s=[...d.current.keys()].filter(T=>!d.current.get(T)[1]);if(!(!m(d,Ls)||s.length===0)){var o=s.filter(T=>!this.current.has(T));if(o.length===0)e&&d.discard();else if(n.length>0){if(e)for(const T of m(this,Us))d.unskip_effect(T,b=>{var w;(b.f&(pr|Os))!==0?d.schedule(b):Ue(w=d,rt,Ps).call(w,[b])});d.activate();var a=new Set,l=new Map;for(var c of n)Fc(c,o,a,l);l=new Map;var p=[...d.current].filter(([T,b])=>{const w=this.current.get(T);return w?w[0]!==b[0]||w[1]!==b[1]:!0}).map(([T])=>T);if(p.length>0)for(const T of m(this,Po))(T.f&(Tn|vn|Aa))===0&&qi(T,p,l)&&((T.f&(Os|pr))!==0?(xt(T,Ot),d.schedule(T)):m(d,Hr).add(T));if(m(d,yn).length>0&&!m(d,vs)){d.apply();for(var u of m(d,yn))Ue(_=d,rt,yi).call(_,u,[],[]);Pe(d,yn,[])}d.deactivate()}}}},_o=function(){if(this.linked){var e=m(this,Jr),n=m(this,hs);e===null?Ya=n:Pe(e,hs,n),n===null?Cs=e:Pe(n,Jr,e),this.linked=!1}};let ws=La;function Mf(t){var e=$o;$o=!0;try{for(var n;;){if($f(),_e===null)return n;_e.flush()}}finally{$o=e}}function Lf(){try{bf()}catch(t){Tr(t,bi)}}let lr=null;function vl(t){var e=t.length;if(e!==0){for(var n=0;n<e;){var r=t[n++];if((r.f&(Tn|vn))===0&&ca(r)&&(lr=new Set,Ks(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&eu(r),(lr==null?void 0:lr.size)>0)){Rr.clear();for(const s of lr){if((s.f&(Tn|vn))!==0)continue;const o=[s];let a=s.parent;for(;a!==null;)lr.has(a)&&(lr.delete(a),o.push(a)),a=a.parent;for(let l=o.length-1;l>=0;l--){const c=o[l];(c.f&(Tn|vn))===0&&Ks(c)}}lr.clear()}}lr=null}}function Fc(t,e,n,r){if(!n.has(t)&&(n.add(t),t.reactions!==null))for(const s of t.reactions){const o=s.f;(o&Wt)!==0?Fc(s,e,n,r):(o&(Os|pr))!==0&&(o&Ot)===0&&qi(s,e,r)&&(xt(s,Ot),Gi(s))}}function qi(t,e,n){const r=n.get(t);if(r!==void 0)return r;if(t.deps!==null)for(const s of t.deps){if($a.call(e,s))return!0;if((s.f&Wt)!==0&&qi(s,e,n))return n.set(s,!0),!0}return n.set(t,!1),!1}function Gi(t){_e.schedule(t)}function Hc(t,e){if(!((t.f&Xn)!==0&&(t.f&Nt)!==0)){(t.f&Ot)!==0?e.d.push(t):(t.f&mr)!==0&&e.m.push(t),xt(t,Nt);for(var n=t.first;n!==null;)Hc(n,e),n=n.next}}function Bc(t){xt(t,Nt);for(var e=t.first;e!==null;)Bc(e),e=e.next}let Pa=new Set;const Rr=new Map;let Uc=!1;function jr(t,e){var n={f:0,v:t,reactions:null,equals:Tc,rv:0,wv:0};return n}function z(t,e){const n=jr(t);return ru(n),n}function Df(t,e=!1,n=!0){var s;const r=jr(t);return e||(r.equals=$c),Qs&&n&&vt!==null&&vt.l!==null&&((s=vt.l).s??(s.s=[])).push(r),r}function h(t,e,n=!1){He!==null&&(!vr||(He.f&Aa)!==0)&&Js()&&(He.f&(Wt|pr|Os|Aa))!==0&&(Ir===null||!Ir.has(t))&&wf();let r=n?Xe(e):e;return Gs(t,r,xa)}function Gs(t,e,n=null){if(!t.equals(e)){Wr?Rr.set(t,e):Rr.has(t)||Rr.set(t,t.v);var r=ws.ensure();if(r.capture(t,e),(t.f&Wt)!==0){const s=t;(t.f&Ot)!==0&&Vi(s),Qt===null&&ji(s)}t.wv=ou(),jc(t,Ot,n),Js()&&Me!==null&&(Me.f&Nt)!==0&&(Me.f&(Xn|Ur))===0&&(Gn===null?Kf([t]):Gn.push(t)),!r.is_fork&&Pa.size>0&&!Uc&&Ff()}return e}function Ff(){Uc=!1;for(const t of Pa){(t.f&Nt)!==0&&xt(t,mr);let e;try{e=ca(t)}catch{e=!0}e&&Ks(t)}Pa.clear()}function gl(t,e=1){var n=i(t),r=e===1?n++:n--;return h(t,n),r}function Eo(t){h(t,t.v+1)}function jc(t,e,n){var r=t.reactions;if(r!==null)for(var s=Js(),o=r.length,a=0;a<o;a++){var l=r[a],c=l.f;if(!(!s&&l===Me)){var p=(c&Ot)===0;if(p&&xt(l,e),(c&Aa)!==0)Pa.add(l);else if((c&Wt)!==0){var u=l;Qt==null||Qt.delete(u),(c&ks)===0&&(c&Zn&&(Me===null||(Me.f&Ca)===0)&&(l.f|=ks),jc(u,mr,n))}else if(p){var _=l;(c&pr)!==0&&lr!==null&&lr.add(_),n!==null?n.push(_):Gi(_)}}}}function Xe(t){if(typeof t!="object"||t===null||Cr in t||bc in t)return t;const e=Di(t);if(e!==Wu&&e!==Vu)return t;var n=new Map,r=Ha(t),s=z(0),o=xs,a=l=>{if(xs===o)return l();var c=He,p=xs;Qn(null),bl(o);var u=l();return Qn(c),bl(p),u};return r&&n.set("length",z(t.length)),new Proxy(t,{defineProperty(l,c,p){(!("value"in p)||p.configurable===!1||p.enumerable===!1||p.writable===!1)&&yf();var u=n.get(c);return u===void 0?a(()=>{var _=z(p.value);return n.set(c,_),_}):h(u,p.value,!0),!0},deleteProperty(l,c){var p=n.get(c);if(p===void 0){if(c in l){const u=a(()=>z(Et));n.set(c,u),Eo(s)}}else h(p,Et),Eo(s);return!0},get(l,c,p){var T;if(c===Cr)return t;var u=n.get(c),_=c in l;if(u===void 0&&(!_||(T=ts(l,c))!=null&&T.writable)&&(u=a(()=>{var b=Xe(_?l[c]:Et),w=z(b);return w}),n.set(c,u)),u!==void 0){var d=i(u);return d===Et?void 0:d}return Reflect.get(l,c,p)},getOwnPropertyDescriptor(l,c){var p=Reflect.getOwnPropertyDescriptor(l,c);if(p&&"value"in p){var u=n.get(c);u&&(p.value=i(u))}else if(p===void 0){var _=n.get(c),d=_==null?void 0:_.v;if(_!==void 0&&d!==Et)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return p},has(l,c){var d;if(c===Cr)return!0;var p=n.get(c),u=p!==void 0&&p.v!==Et||Reflect.has(l,c);if(p!==void 0||Me!==null&&(!u||(d=ts(l,c))!=null&&d.writable)){p===void 0&&(p=a(()=>{var T=u?Xe(l[c]):Et,b=z(T);return b}),n.set(c,p));var _=i(p);if(_===Et)return!1}return u},set(l,c,p,u){var H;var _=n.get(c),d=c in l;if(r&&c==="length")for(var T=p;T<_.v;T+=1){var b=n.get(T+"");b!==void 0?h(b,Et):T in l&&(b=a(()=>z(Et)),n.set(T+"",b))}if(_===void 0)(!d||(H=ts(l,c))!=null&&H.writable)&&(_=a(()=>z(void 0)),h(_,Xe(p)),n.set(c,_));else{d=_.v!==Et;var w=a(()=>Xe(p));h(_,w)}var C=Reflect.getOwnPropertyDescriptor(l,c);if(C!=null&&C.set&&C.set.call(u,p),!d){if(r&&typeof c=="string"){var O=n.get("length"),B=Number(c);Number.isInteger(B)&&B>=O.v&&h(O,B+1)}Eo(s)}return!0},ownKeys(l){i(s);var c=Reflect.ownKeys(l).filter(_=>{var d=n.get(_);return d===void 0||d.v!==Et});for(var[p,u]of n)u.v!==Et&&!(p in l)&&c.push(p);return c},setPrototypeOf(){kf()}})}function ml(t){try{if(t!==null&&typeof t=="object"&&Cr in t)return t[Cr]}catch{}return t}function Wc(t,e){return Object.is(ml(t),ml(e))}var Ss,Vc,qc,Gc;function Hf(){if(Ss===void 0){Ss=window,Vc=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,n=Text.prototype;qc=ts(e,"firstChild").get,Gc=ts(e,"nextSibling").get,dl(t)&&(t[mi]=void 0,t[_a]=null,t[_i]=void 0,t.__e=void 0),dl(n)&&(n[vo]=void 0)}}function Pr(t=""){return document.createTextNode(t)}function hr(t){return qc.call(t)}function la(t){return Gc.call(t)}function S(t,e){return hr(t)}function q(t,e=!1){{var n=hr(t);return n instanceof Comment&&n.data===""?la(n):n}}function ie(t,e=!1){return hr(t)}function g(t,e=1,n=!1){let r=t;for(;e--;)r=la(r);return r}function Bf(t){t.textContent=""}function Kc(){return!1}function Ua(t,e,n){return e==null||e===wc?n?document.createElement(t,{is:n}):document.createElement(t):n?document.createElementNS(e,t,{is:n}):document.createElementNS(e,t)}function Uf(t){var e=Me;if(e===null)return He.f|=ns,t;if((e.f&Zs)===0&&(e.f&Ws)===0)throw t;Tr(t,e)}function Tr(t,e){if(!(e!==null&&(e.f&Tn)!==0)){for(;e!==null;){if((e.f&gi)!==0&&(e.f&(Tn|Ea))===0){if((e.f&Zs)===0)throw t;try{e.b.error(t);return}catch(n){t=n}}e=e.parent}throw t}}function Yc(t){Me===null&&(He===null&&_f(),mf()),Wr&&gf()}function jf(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function _r(t,e){var n=Me;n!==null&&(n.f&vn)!==0&&(t|=vn);var r={ctx:vt,deps:null,nodes:null,f:t|Ot|Zn,first:null,fn:e,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};_e==null||_e.register_created_effect(r);var s=r;if((t&Ws)!==0)Ns!==null?Ns.push(r):ws.ensure().schedule(r);else if(e!==null){try{Ks(r)}catch(a){throw en(r),a}s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&Xs)===0&&(s=s.first,(t&pr)!==0&&(t&rs)!==0&&s!==null&&(s.f|=rs))}if(s!==null&&(s.parent=n,n!==null&&jf(s,n),He!==null&&(He.f&Wt)!==0&&(t&Ur)===0)){var o=He;(o.effects??(o.effects=[])).push(s)}return r}function Ki(){return He!==null&&!vr}function ja(t){const e=_r(aa,null);return xt(e,Nt),e.teardown=t,e}function Jt(t){Yc();var e=Me.f,n=!He&&(e&Xn)!==0&&vt!==null&&!vt.i;if(n){var r=vt;(r.e??(r.e=[])).push(t)}else return Zc(t)}function Zc(t){return _r(Ws|_c,t)}function Wf(t){return Yc(),_r(aa|_c,t)}function Vf(t){ws.ensure();const e=_r(Ur|Xs,t);return(n={})=>new Promise(r=>{n.outro?bs(e,()=>{en(e),r(void 0)}):(en(e),r(void 0))})}function Wa(t){return _r(Ws,t)}function qf(t){return _r(Os|Xs,t)}function Yi(t,e=0){return _r(aa|e,t)}function ee(t,e=[],n=[],r=[]){Nc(r,e,n,s=>{_r(aa,()=>{t(...s.map(i))})})}function to(t,e=0){var n=_r(pr|e,t);return n}function Xc(t,e=0){var n=_r(Fi|e,t);return n}function wn(t){return _r(Xn|Xs,t)}function Qc(t){var e=t.teardown;if(e!==null){const n=Wr,r=He;_l(!0),Qn(null);try{e.call(null)}catch(s){Tr(s,t.parent)}finally{_l(n),Qn(r)}}}function Zi(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){const s=n.ac;s!==null&&eo(()=>{s.abort(ia)});var r=n.next;(n.f&Ur)!==0?n.parent=null:en(n,e),n=r}}function Gf(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&Xn)===0&&en(e),e=n}}function en(t,e=!0){var n=!1;(e||(t.f&Yu)!==0)&&t.nodes!==null&&t.nodes.end!==null&&(Jc(t.nodes.start,t.nodes.end),n=!0),t.f|=Ea,Zi(t,e&&!n),Co(t,0);var r=t.nodes&&t.nodes.t;if(r!==null)for(const o of r)o.stop();Qc(t),t.f^=Ea,t.f|=Tn;var s=t.parent;s!==null&&s.first!==null&&eu(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes=t.ac=t.b=null}function Jc(t,e){for(;t!==null;){var n=t===e?null:la(t);t.remove(),t=n}}function eu(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function bs(t,e,n=!0){var r=[];t.f|=Hi,tu(t,r,!0);var s=()=>{n&&en(t),e&&e()},o=r.length;if(o>0){var a=()=>--o||s();for(var l of r)l.out(a)}else s()}function tu(t,e,n){if((t.f&vn)===0){t.f^=vn;var r=t.nodes&&t.nodes.t;if(r!==null)for(const l of r)(l.is_global||n)&&e.push(l);for(var s=t.first;s!==null;){var o=s.next;if((s.f&Ur)===0){var a=(s.f&rs)!==0||(s.f&Xn)!==0&&(t.f&pr)!==0;tu(s,e,a?n:!1)}s=o}}}function Ia(t){t.f&=~Hi,nu(t,!0)}function nu(t,e){if((t.f&Hi)===0&&(t.f&vn)!==0){t.f^=vn,(t.f&Nt)===0&&(xt(t,Ot),ws.ensure().schedule(t));for(var n=t.first;n!==null;){var r=n.next,s=(n.f&rs)!==0||(n.f&Xn)!==0;nu(n,s?e:!1),n=r}var o=t.nodes&&t.nodes.t;if(o!==null)for(const a of o)(a.is_global||e)&&a.in()}}function Xi(t,e){if(t.nodes)for(var n=t.nodes.start,r=t.nodes.end;n!==null;){var s=n===r?null:la(n);e.append(n),n=s}}let ya=!1,Wr=!1;function _l(t){Wr=t}let He=null,vr=!1;function Qn(t){He=t}let Me=null;function Jn(t){Me=t}let Ir=null;function ru(t){He!==null&&(Ir??(Ir=new Set)).add(t)}let Sn=null,Mn=0,Gn=null;function Kf(t){Gn=t}let su=1,ds=0,xs=ds;function bl(t){xs=t}function ou(){return++su}function ca(t){var e=t.f;if((e&Ot)!==0)return!0;if(e&Wt&&(t.f&=~ks),(e&mr)!==0){for(var n=t.deps,r=n.length,s=0;s<r;s++){var o=n[s];if(ca(o)&&zc(o),o.wv>t.wv)return!0}(e&Zn)!==0&&Qt===null&&xt(t,Nt)}return!1}function au(t,e,n=!0){var r=t.reactions;if(r!==null&&!(Ir!==null&&Ir.has(t)))for(var s=0;s<r.length;s++){var o=r[s];(o.f&Wt)!==0?au(o,e,!1):e===o&&(n?xt(o,Ot):(o.f&Nt)!==0&&xt(o,mr),Gi(o))}}function iu(t){var e=Sn,n=Mn,r=Gn,s=He,o=Ir,a=vt,l=vr,c=xs,p=t.f;Sn=null,Mn=0,Gn=null,He=(p&(Xn|Ur))===0?t:null,Ir=null,Vs(t.ctx),vr=!1,xs=++ds,t.ac!==null&&(eo(()=>{t.ac.abort(ia)}),t.ac=null);try{t.f|=Ca;var u=t.fn,_=u();t.f|=Zs;var d=xl(t);if(Js()&&Gn!==null&&!vr&&d!==null&&(t.f&(Wt|mr|Ot))===0)for(var T=0;T<Gn.length;T++)au(Gn[T],t);if(s!==null&&s!==t){if(ds++,s.deps!==null)for(let b=0;b<n;b+=1)s.deps[b].rv=ds;if(e!==null)for(const b of e)b.rv=ds;Gn!==null&&(r===null?r=Gn:r.push(...Gn))}return(t.f&ns)!==0&&(t.f^=ns),_}catch(b){return xl(t),Uf(b)}finally{t.f^=Ca,Sn=e,Mn=n,Gn=r,He=s,Ir=o,Vs(a),vr=l,xs=c}}function xl(t){var s;var e=t.deps,n=_e==null?void 0:_e.is_fork;if(Sn!==null){var r;if(n||Co(t,Mn),e!==null&&Mn>0)for(e.length=Mn+Sn.length,r=0;r<Sn.length;r++)e[Mn+r]=Sn[r];else t.deps=e=Sn;if(Ki()&&(t.f&Zn)!==0)for(r=Mn;r<e.length;r++)((s=e[r]).reactions??(s.reactions=[])).push(t)}else!n&&e!==null&&Mn<e.length&&(Co(t,Mn),e.length=Mn);return e}function Yf(t,e){let n=e.reactions;if(n!==null){var r=ju.call(n,t);if(r!==-1){var s=n.length-1;s===0?n=e.reactions=null:(n[r]=n[s],n.pop())}}if(n===null&&(e.f&Wt)!==0&&(Sn===null||!$a.call(Sn,e))){var o=e;(o.f&Zn)!==0&&(o.f^=Zn,o.f&=~ks),o.v!==Et&&ji(o),o.ac!==null&&eo(()=>{o.ac.abort(ia),o.ac=null,xt(o,Ot)}),Nf(o),Co(o,0)}}function Co(t,e){var n=t.deps;if(n!==null)for(var r=e;r<n.length;r++)Yf(t,n[r])}function Ks(t){var e=t.f;if((e&Tn)===0){xt(t,Nt);var n=Me,r=ya;Me=t,ya=(e&(Xn|Ur))===0;try{(e&(pr|Fi))!==0?Gf(t):Zi(t),Qc(t);var s=iu(t);t.teardown=typeof s=="function"?s:null,t.wv=su;var o}finally{ya=r,Me=n}}}async function Qi(){await Promise.resolve(),Mf()}function i(t){var e=t.f,n=(e&Wt)!==0;if(He!==null&&!vr){var r=Me!==null&&(Me.f&Tn)!==0;if(!r&&(Ir===null||!Ir.has(t))){var s=He.deps;if((He.f&Ca)!==0)t.rv<ds&&(t.rv=ds,Sn===null&&s!==null&&s[Mn]===t?Mn++:Sn===null?Sn=[t]:Sn.push(t));else{He.deps??(He.deps=[]),$a.call(He.deps,t)||He.deps.push(t);var o=t.reactions;o===null?t.reactions=[He]:$a.call(o,He)||o.push(He)}}}if(Wr&&Rr.has(t))return Rr.get(t);if(n){var a=t;if(Wr){var l=a.v;return((a.f&Nt)===0&&a.reactions!==null||cu(a))&&(l=Vi(a)),Rr.set(a,l),l}var c=(a.f&Zn)===0&&!vr&&He!==null&&(ya||(He.f&Zn)!==0),p=(a.f&Zs)===0;ca(a)&&(c&&(a.f|=Zn),zc(a)),c&&!p&&(Mc(a),lu(a))}if(Qt!=null&&Qt.has(t))return Qt.get(t);if((t.f&ns)!==0)throw t.v;return t.v}function lu(t){if(t.f|=Zn,t.deps!==null)for(const e of t.deps)(e.reactions??(e.reactions=[])).push(t),(e.f&Wt)!==0&&(e.f&Zn)===0&&(Mc(e),lu(e))}function cu(t){if(t.v===Et)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(Rr.has(e)||(e.f&Wt)!==0&&cu(e))return!0;return!1}function Vr(t){var e=vr;try{return vr=!0,t()}finally{vr=e}}function is(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(Cr in t)ki(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];typeof n=="object"&&n&&Cr in n&&ki(n)}}}function ki(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let r in t)try{ki(t[r],e)}catch{}const n=Di(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=gc(n);for(let s in r){const o=r[s].get;if(o)try{o.call(t)}catch{}}}}}function Zf(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const Xf=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Qf(t){return Xf.includes(t)}const Jf={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function ed(t){return t=t.toLowerCase(),Jf[t]??t}const td=["touchstart","touchmove"];function nd(t){return td.includes(t)}const ps=Symbol("events"),uu=new Set,wi=new Set;function fu(t,e,n,r={}){function s(o){if(r.capture||Si.call(e,o),!o.cancelBubble)return eo(()=>n==null?void 0:n.call(this,o))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?Er(()=>{e.addEventListener(t,s,r)}):e.addEventListener(t,s,r),s}function jt(t,e,n,r,s){var o={capture:r,passive:s},a=fu(t,e,n,o);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&ja(()=>{e.removeEventListener(t,a,o)})}function L(t,e,n){(e[ps]??(e[ps]={}))[t]=n}function er(t){for(var e=0;e<t.length;e++)uu.add(t[e]);for(var n of wi)n(t)}let Xa=null,Qa=!1;function Si(t){var w,C;var e=this,n=e.ownerDocument,r=t.type,s=((w=t.composedPath)==null?void 0:w.call(t))||[],o=s[0]||t.target;Xa=t,Qa||(Qa=!0,setTimeout(()=>{Qa=!1,Xa=null}));var a=0,l=Xa===t&&t[ps];if(l){var c=s.indexOf(l);if(c!==-1&&(e===document||e===window)){t[ps]=e;return}var p=s.indexOf(e);if(p===-1)return;c<=p&&(a=c)}if(o=s[a]||t.target,o!==e){vc(t,"currentTarget",{configurable:!0,get(){return o||n}});var u=He,_=Me;Qn(null),Jn(null);try{for(var d,T=[];o!==null&&o!==e;){try{var b=(C=o[ps])==null?void 0:C[r];b!=null&&(!o.disabled||t.target===o)&&b.call(o,t)}catch(O){d?T.push(O):d=O}if(t.cancelBubble)break;a++,o=a<s.length?s[a]:null}if(d){for(let O of T)queueMicrotask(()=>{throw O});throw d}}finally{t[ps]=e,delete t.currentTarget,Qn(u),Jn(_)}}}var pc;const Ja=((pc=globalThis==null?void 0:globalThis.window)==null?void 0:pc.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:t=>t});function rd(t){return(Ja==null?void 0:Ja.createHTML(t))??t}function du(t){var e=Ua("template");return e.innerHTML=rd(t.replaceAll("<!>","<!---->")),e.content}function ss(t,e){var n=Me;n.nodes===null&&(n.nodes={start:t,end:e,a:null,t:null})}function I(t,e){var n=(e&of)!==0,r=(e&af)!==0,s,o=!t.startsWith("<!>");return()=>{s===void 0&&(s=du(o?t:"<!>"+t),n||(s=hr(s)));var a=r||Vc?document.importNode(s,!0):s.cloneNode(!0);if(n){var l=hr(a),c=a.lastChild;ss(l,c)}else ss(a,a);return a}}function sd(t,e,n="svg"){var r=!t.startsWith("<!>"),s=`<${n}>${r?t:"<!>"+t}</${n}>`,o;return()=>{if(!o){var a=du(s),l=hr(a);o=hr(l)}var c=o.cloneNode(!0);return ss(c,c),c}}function pu(t,e){return sd(t,e,"svg")}function yl(t=""){{var e=Pr(t+"");return ss(e,e),e}}function de(){var t=document.createDocumentFragment(),e=document.createComment(""),n=Pr();return t.append(e,n),ss(e,n),t}function y(t,e){t!==null&&t.before(e)}function od(t){let e=0,n=jr(0),r;return()=>{Ki()&&(i(n),Yi(()=>(e===0&&(r=Vr(()=>t(()=>Eo(n)))),e+=1,()=>{Er(()=>{e-=1,e===0&&(r==null||r(),r=void 0,Eo(n))})})))}}var ad=rs|Xs;function id(t,e,n,r){new ld(t,e,n,r)}var Kn,Li,Yn,gs,dn,Nn,pn,On,wr,ms,es,js,Io,No,Br,Da,ht,cd,ud,Ti,fd,$i,bo,ka,Ei,Ai;class ld{constructor(e,n,r,s){re(this,ht);Oe(this,"parent");Oe(this,"is_pending",!1);Oe(this,"transform_error");re(this,Kn);re(this,Li,null);re(this,Yn);re(this,gs);re(this,dn);re(this,Nn,null);re(this,pn,null);re(this,On,null);re(this,wr,null);re(this,ms,0);re(this,es,0);re(this,js,!1);re(this,Io,new Set);re(this,No,new Set);re(this,Br,null);re(this,Da,od(()=>(Pe(this,Br,jr(m(this,ms))),()=>{Pe(this,Br,null)})));var o;Pe(this,Kn,e),Pe(this,Yn,n),Pe(this,gs,a=>{var l=Me;l.b=this,l.f|=gi,r(a)}),this.parent=Me.b,this.transform_error=s??((o=this.parent)==null?void 0:o.transform_error)??(a=>a),Pe(this,dn,to(()=>{Ue(this,ht,$i).call(this)},ad))}defer_effect(e){Rc(e,m(this,Io),m(this,No))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!m(this,Yn).pending}update_pending_count(e,n){Ue(this,ht,Ei).call(this,e,n),Pe(this,ms,m(this,ms)+e),!(!m(this,Br)||m(this,js))&&(Pe(this,js,!0),Er(()=>{Pe(this,js,!1),m(this,Br)&&Gs(m(this,Br),m(this,ms))}))}get_effect_pending(){return m(this,Da).call(this),i(m(this,Br))}error(e){if(!m(this,Yn).onerror&&!m(this,Yn).failed)throw e;_e!=null&&_e.is_fork?(m(this,Nn)&&_e.skip_effect(m(this,Nn)),m(this,pn)&&_e.skip_effect(m(this,pn)),m(this,On)&&_e.skip_effect(m(this,On)),_e.oncommit(()=>{Ue(this,ht,Ai).call(this,e)})):Ue(this,ht,Ai).call(this,e)}}Kn=new WeakMap,Li=new WeakMap,Yn=new WeakMap,gs=new WeakMap,dn=new WeakMap,Nn=new WeakMap,pn=new WeakMap,On=new WeakMap,wr=new WeakMap,ms=new WeakMap,es=new WeakMap,js=new WeakMap,Io=new WeakMap,No=new WeakMap,Br=new WeakMap,Da=new WeakMap,ht=new WeakSet,cd=function(){try{Pe(this,Nn,wn(()=>m(this,gs).call(this,m(this,Kn))))}catch(e){this.error(e)}},ud=function(e){const n=m(this,Yn).failed,{reset:r,invoke_onerror:s}=Ue(this,ht,Ti).call(this,e);Er(s),n&&Pe(this,On,wn(()=>{n(m(this,Kn),()=>e,()=>r)}))},Ti=function(e){var n=!1,r=!1;const s=()=>{if(n){df();return}n=!0,r&&Sf(),m(this,On)!==null&&bs(m(this,On),()=>{Pe(this,On,null)}),Ue(this,ht,ka).call(this,()=>{Ue(this,ht,$i).call(this)})};return{reset:s,invoke_onerror:()=>{var a,l;try{r=!0,(l=(a=m(this,Yn)).onerror)==null||l.call(a,e,s),r=!1}catch(c){Tr(c,m(this,dn)&&m(this,dn).parent)}}}},fd=function(){const e=m(this,Yn).pending;e&&(this.is_pending=!0,Pe(this,pn,wn(()=>e(m(this,Kn)))),Er(()=>{var n=Pe(this,wr,document.createDocumentFragment()),r=Pr(),s=!1;if(n.append(r),Pe(this,Nn,Ue(this,ht,ka).call(this,()=>{try{return wn(()=>m(this,gs).call(this,r))}catch(o){try{this.error(o),s=!0}catch(a){Tr(a,m(this,dn).parent)}return null}})),m(this,Nn)===null){Pe(this,wr,null),s&&Ue(this,ht,bo).call(this,_e);return}m(this,es)===0&&(m(this,Kn).before(n),Pe(this,wr,null),bs(m(this,pn),()=>{Pe(this,pn,null)}),Ue(this,ht,bo).call(this,_e))}))},$i=function(){try{if(this.is_pending=this.has_pending_snippet(),Pe(this,es,0),Pe(this,ms,0),Pe(this,Nn,wn(()=>{m(this,gs).call(this,m(this,Kn))})),m(this,es)>0){var e=Pe(this,wr,document.createDocumentFragment());Xi(m(this,Nn),e);const n=m(this,Yn).pending;Pe(this,pn,wn(()=>n(m(this,Kn))))}else Ue(this,ht,bo).call(this,_e)}catch(n){this.error(n)}},bo=function(e){this.is_pending=!1,e.transfer_effects(m(this,Io),m(this,No))},ka=function(e){var n=Me,r=He,s=vt;Jn(m(this,dn)),Qn(m(this,dn)),Vs(m(this,dn).ctx);try{return ws.ensure(),e()}finally{Jn(n),Qn(r),Vs(s)}},Ei=function(e,n){var r;if(!this.has_pending_snippet()){this.parent&&Ue(r=this.parent,ht,Ei).call(r,e,n);return}Pe(this,es,m(this,es)+e),m(this,es)===0&&(Ue(this,ht,bo).call(this,n),m(this,pn)&&bs(m(this,pn),()=>{Pe(this,pn,null)}),m(this,wr)&&(m(this,Kn).before(m(this,wr)),Pe(this,wr,null)))},Ai=function(e){m(this,Nn)&&(en(m(this,Nn)),Pe(this,Nn,null)),m(this,pn)&&(en(m(this,pn)),Pe(this,pn,null)),m(this,On)&&(en(m(this,On)),Pe(this,On,null));let n=m(this,Yn).failed;const r=s=>{const{reset:o,invoke_onerror:a}=Ue(this,ht,Ti).call(this,s);a(),n&&Pe(this,On,Ue(this,ht,ka).call(this,()=>{try{return wn(()=>{var l=Me;l.b=this,l.f|=gi,n(m(this,Kn),()=>s,()=>o)})}catch(l){return Tr(l,m(this,dn).parent),null}}))};Er(()=>{var s;try{s=this.transform_error(e)}catch(o){Tr(o,m(this,dn)&&m(this,dn).parent);return}s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(r,o=>Tr(o,m(this,dn)&&m(this,dn).parent)):r(s)})};function X(t,e){var n=e==null?"":typeof e=="object"?`${e}`:e;n!==(t[vo]??(t[vo]=t.nodeValue))&&(t[vo]=n,t.nodeValue=`${n}`)}function dd(t,e){return pd(t,e)}const ha=new Map;function pd(t,{target:e,anchor:n,props:r={},events:s,context:o,intro:a=!0,transformError:l}){Hf();var c=void 0,p=Vf(()=>{var u=n??e.appendChild(Pr());id(u,{pending:()=>{}},T=>{gn({});var b=vt;o&&(b.c=o),s&&(r.$$events=s),c=t(T,r)||Ui(),mn()},l);var _=new Set,d=T=>{for(var b=0;b<T.length;b++){var w=T[b];if(!_.has(w)){_.add(w);var C=nd(w);for(const H of[e,document]){var O=ha.get(H);O===void 0&&(O=new Map,ha.set(H,O));var B=O.get(w);B===void 0?(H.addEventListener(w,Si,{passive:C}),O.set(w,1)):O.set(w,B+1)}}}};return d(Ba(uu)),wi.add(d),()=>{var C;for(var T of _)for(const O of[e,document]){var b=ha.get(O),w=b.get(T);--w==0?(O.removeEventListener(T,Si),b.delete(T),b.size===0&&ha.delete(O)):b.set(T,w)}wi.delete(d),u!==n&&((C=u.parentNode)==null||C.removeChild(u))}});return hd.set(c,p),c}let hd=new WeakMap;var ur,Sr,zn,_s,Oo,zo,Fa;class Va{constructor(e,n=!0){Oe(this,"anchor");re(this,ur,new Map);re(this,Sr,new Map);re(this,zn,new Map);re(this,_s,new Set);re(this,Oo,!0);re(this,zo,e=>{if(m(this,ur).has(e)){var n=m(this,ur).get(e),r=m(this,Sr).get(n);if(r)Ia(r),m(this,_s).delete(n);else{var s=m(this,zn).get(n);s&&(Ia(s.effect),m(this,Sr).set(n,s.effect),m(this,zn).delete(n),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[o,a]of m(this,ur)){if(m(this,ur).delete(o),o===e)break;const l=m(this,zn).get(a);l&&(en(l.effect),m(this,zn).delete(a))}for(const[o,a]of m(this,Sr)){if(o===n||m(this,_s).has(o))continue;const l=()=>{if(Array.from(m(this,ur).values()).includes(o)){var p=document.createDocumentFragment();Xi(a,p),p.append(Pr()),m(this,zn).set(o,{effect:a,fragment:p})}else en(a);m(this,_s).delete(o),m(this,Sr).delete(o)};m(this,Oo)||!r?(m(this,_s).add(o),bs(a,l,!1)):l()}}});re(this,Fa,e=>{m(this,ur).delete(e);const n=Array.from(m(this,ur).values());for(const[r,s]of m(this,zn))n.includes(r)||(en(s.effect),m(this,zn).delete(r))});this.anchor=e,Pe(this,Oo,n)}ensure(e,n){var r=_e,s=Kc();if(n&&!m(this,Sr).has(e)&&!m(this,zn).has(e))if(s){var o=document.createDocumentFragment(),a=Pr();o.append(a),m(this,zn).set(e,{effect:wn(()=>n(a)),fragment:o})}else m(this,Sr).set(e,wn(()=>n(this.anchor)));if(m(this,ur).set(r,e),s){for(const[l,c]of m(this,Sr))l===e?r.unskip_effect(c):r.skip_effect(c);for(const[l,c]of m(this,zn))l===e?r.unskip_effect(c.effect):r.skip_effect(c.effect);r.oncommit(m(this,zo)),r.ondiscard(m(this,Fa))}else m(this,zo).call(this,r)}}ur=new WeakMap,Sr=new WeakMap,zn=new WeakMap,_s=new WeakMap,Oo=new WeakMap,zo=new WeakMap,Fa=new WeakMap;function U(t,e,n=!1){var r=new Va(t),s=n?rs:0;function o(a,l){r.ensure(a,l)}to(()=>{var a=!1;e((l,c=0)=>{a=!0,o(c,l)}),a||o(-1,null)},s)}const vd=Symbol("NaN");function gd(t,e,n){var r=new Va(t),s=!Js();to(()=>{var o=e();o!==o&&(o=vd),s&&o!==null&&typeof o=="object"&&(o={}),r.ensure(o,n)})}function Ji(t,e){return e}function md(t,e,n){for(var r=[],s=e.length,o,a=e.length,l=0;l<s;l++){let _=e[l];bs(_,()=>{if(o){if(o.pending.delete(_),o.done.add(_),o.pending.size===0){var d=t.outrogroups;Ci(t,Ba(o.done)),d.delete(o),d.size===0&&(t.outrogroups=null)}}else a-=1},!1)}if(a===0){var c=r.length===0&&n!==null&&t.pending.size===0;if(c){var p=n,u=p.parentNode;Bf(u),u.append(p),t.items.clear()}Ci(t,e,!c)}else o={pending:new Set(e),done:new Set},(t.outrogroups??(t.outrogroups=new Set)).add(o)}function Ci(t,e,n=!0){var r;if(t.pending.size>0){r=new Set;for(const a of t.pending.values())for(const l of a)r.add(t.items.get(l).e)}for(var s=0;s<e.length;s++){var o=e[s];if(r!=null&&r.has(o)){o.f|=$r;const a=document.createDocumentFragment();Xi(o,a)}else en(e[s],n)}}var kl;function _t(t,e,n,r,s,o=null){var a=t,l=new Map,c=(e&yc)!==0;if(c){var p=t;a=p.appendChild(Pr())}var u=null,_=Wi(()=>{var H=n();return Ha(H)?H:H==null?[]:Ba(H)}),d,T=new Map,b=!0;function w(H){(B.effect.f&Tn)===0&&(B.pending.delete(H),B.fallback=u,_d(B,d,a,e,r),u!==null&&(d.length===0?(u.f&$r)===0?Ia(u):(u.f^=$r,xo(u,null,a)):bs(u,()=>{u=null})))}function C(H){B.pending.delete(H)}var O=to(()=>{d=i(_);for(var H=d.length,Z=new Set,A=_e,E=Kc(),N=0;N<H;N+=1){var ne=d[N],te=r(ne,N),pe=b?null:l.get(te);pe?(pe.v&&Gs(pe.v,ne),pe.i&&Gs(pe.i,N),E&&A.unskip_effect(pe.e)):(pe=bd(l,b?a:kl??(kl=Pr()),ne,te,N,s,e,n),b||(pe.e.f|=$r),l.set(te,pe)),Z.add(te)}if(H===0&&o&&!u&&(b?u=wn(()=>o(a)):(u=wn(()=>o(kl??(kl=Pr()))),u.f|=$r)),H>Z.size&&vf(),!b)if(T.set(A,Z),E){for(const[ge,me]of l)Z.has(ge)||A.skip_effect(me.e);A.oncommit(w),A.ondiscard(C)}else w(A);i(_)}),B={effect:O,items:l,pending:T,outrogroups:null,fallback:u};b=!1}function io(t){for(;t!==null&&(t.f&Xn)===0;)t=t.next;return t}function _d(t,e,n,r,s){var pe,ge,me,Ke,Ve,st,K,he,oe;var o=(r&Ju)!==0,a=e.length,l=t.items,c=io(t.effect.first),p,u=null,_,d=[],T=[],b,w,C,O;if(o)for(O=0;O<a;O+=1)b=e[O],w=s(b,O),C=l.get(w).e,(C.f&$r)===0&&((ge=(pe=C.nodes)==null?void 0:pe.a)==null||ge.measure(),(_??(_=new Set)).add(C));for(O=0;O<a;O+=1){if(b=e[O],w=s(b,O),C=l.get(w).e,t.outrogroups!==null)for(const le of t.outrogroups)le.pending.delete(C),le.done.delete(C);if((C.f&vn)!==0&&(Ia(C),o&&((Ke=(me=C.nodes)==null?void 0:me.a)==null||Ke.unfix(),(_??(_=new Set)).delete(C))),(C.f&$r)!==0)if(C.f^=$r,C===c)xo(C,null,n);else{var B=u?u.next:c;C===t.effect.last&&(t.effect.last=C.prev),C.prev&&(C.prev.next=C.next),C.next&&(C.next.prev=C.prev),Yr(t,u,C),Yr(t,C,B),xo(C,B,n),u=C,d=[],T=[],c=io(u.next);continue}if(C!==c){if(p!==void 0&&p.has(C)){if(d.length<T.length){var H=T[0],Z;u=H.prev;var A=d[0],E=d[d.length-1];for(Z=0;Z<d.length;Z+=1)xo(d[Z],H,n);for(Z=0;Z<T.length;Z+=1)p.delete(T[Z]);Yr(t,A.prev,E.next),Yr(t,u,A),Yr(t,E,H),c=H,u=E,O-=1,d=[],T=[]}else p.delete(C),xo(C,c,n),Yr(t,C.prev,C.next),Yr(t,C,u===null?t.effect.first:u.next),Yr(t,u,C),u=C;continue}for(d=[],T=[];c!==null&&c!==C;)(p??(p=new Set)).add(c),T.push(c),c=io(c.next);if(c===null)continue}(C.f&$r)===0&&d.push(C),u=C,c=io(C.next)}if(t.outrogroups!==null){for(const le of t.outrogroups)le.pending.size===0&&(Ci(t,Ba(le.done)),(Ve=t.outrogroups)==null||Ve.delete(le));t.outrogroups.size===0&&(t.outrogroups=null)}if(c!==null||p!==void 0){var N=[];if(p!==void 0)for(C of p)(C.f&vn)===0&&N.push(C);for(;c!==null;)(c.f&vn)===0&&c!==t.fallback&&N.push(c),c=io(c.next);var ne=N.length;if(ne>0){var te=(r&yc)!==0&&a===0?n:null;if(o){for(O=0;O<ne;O+=1)(K=(st=N[O].nodes)==null?void 0:st.a)==null||K.measure();for(O=0;O<ne;O+=1)(oe=(he=N[O].nodes)==null?void 0:he.a)==null||oe.fix()}md(t,N,te)}}o&&Er(()=>{var le,P;if(_!==void 0)for(C of _)(P=(le=C.nodes)==null?void 0:le.a)==null||P.apply()})}function bd(t,e,n,r,s,o,a,l){var c=(a&Xu)!==0?(a&ef)===0?Df(n,!1,!1):jr(n):null,p=(a&Qu)!==0?jr(s):null;return{v:c,i:p,e:wn(()=>(o(e,c??n,p??s,l),()=>{t.delete(r)}))}}function xo(t,e,n){if(t.nodes)for(var r=t.nodes.start,s=t.nodes.end,o=e&&(e.f&$r)===0?e.nodes.start:n;r!==null;){var a=la(r);if(o.before(r),r===s)return;r=a}}function Yr(t,e,n){e===null?t.effect.first=n:e.next=n,n===null?t.effect.last=e:n.prev=e}function wl(t,e,n=!1,r=!1,s=!1,o=!1){var a=t,l="";if(n)var c=t;ee(()=>{var p=Me;if(l!==(l=e()??"")){if(n){p.nodes=null,c.innerHTML=l,l!==""&&ss(hr(c),c.lastChild);return}if(p.nodes!==null&&(Jc(p.nodes.start,p.nodes.end),p.nodes=null),l!==""){var u=r?Sc:s?lf:void 0,_=Ua(r?"svg":s?"math":"template",u);_.innerHTML=l;var d=r||s?_:_.content;if(ss(hr(d),d.lastChild),r||s)for(;hr(d);)a.before(hr(d));else a.before(d)}}})}function Se(t,e,n,r,s){var l,c;if((l=e.$$host)!=null&&l.$$shadowRoot){const p=Ua("slot");y(t,p);return}var o=(c=e.$$slots)==null?void 0:c[n],a=!1;o===!0&&(o=e.children,a=!0),o===void 0||o(t,a?()=>r:r)}function Sl(t,e,n){var r=new Va(t);to(()=>{var s=e()??null;r.ensure(s,s&&(o=>n(o,s)))},rs)}function xd(t,e,n,r,s,o){var a=null,l=t,c=new Va(l,!1);to(()=>{const p=e()||null;var u=Sc;if(p===null){c.ensure(null,null);return}return c.ensure(p,_=>{if(p){if(a=Ua(p,u),ss(a,a),r){var d=null,T=a.appendChild(Pr());r(a,T),d==null||d.remove()}Me.nodes.end=a,_.before(a)}}),()=>{}},rs),ja(()=>{})}function yd(t,e){var n=void 0,r;Xc(()=>{n!==(n=e())&&(r&&(en(r),r=null),n&&(r=wn(()=>{Wa(()=>n(t))})))})}function hu(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(e=0;e<s;e++)t[e]&&(n=hu(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function kd(){for(var t,e,n=0,r="",s=arguments.length;n<s;n++)(t=arguments[n])&&(e=hu(t))&&(r&&(r+=" "),r+=e);return r}function vu(t){return typeof t=="object"?kd(t):t??""}const Tl=[...` 	
\r\f \v\uFEFF`];function wd(t,e,n){var r=t==null?"":""+t;if(e&&(r=r?r+" "+e:e),n){for(var s of Object.keys(n))if(n[s])r=r?r+" "+s:s;else if(r.length)for(var o=s.length,a=0;(a=r.indexOf(s,a))>=0;){var l=a+o;(a===0||Tl.includes(r[a-1]))&&(l===r.length||Tl.includes(r[l]))?r=(a===0?"":r.substring(0,a))+r.substring(l+1):a=l}}return r===""?null:r}function $l(t,e=!1){var n=e?" !important;":";",r="";for(var s of Object.keys(t)){var o=t[s];o!=null&&o!==""&&(r+=" "+s+": "+o+n)}return r}function ei(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function Sd(t,e){if(e){var n="",r,s;if(Array.isArray(e)?(r=e[0],s=e[1]):r=e,t){t=String(t).replaceAll(/\/\*.*?\*\//g,"").trim();var o=!1,a=0,l=!1,c=[];r&&c.push(...Object.keys(r).map(ei)),s&&c.push(...Object.keys(s).map(ei));var p=0,u=-1;const w=t.length;for(var _=0;_<w;_++){var d=t[_];if(l?d==="/"&&t[_-1]==="*"&&(l=!1):o?o===d&&(o=!1):d==="/"&&t[_+1]==="*"?l=!0:d==='"'||d==="'"?o=d:d==="("?a++:d===")"&&a--,!l&&o===!1&&a===0){if(d===":"&&u===-1)u=_;else if(d===";"||_===w-1){if(u!==-1){var T=ei(t.substring(p,u).trim());if(!c.includes(T)){d!==";"&&_++;var b=t.substring(p,_).trim();n+=" "+b+";"}}p=_+1,u=-1}}}}return r&&(n+=$l(r)),s&&(n+=$l(s,!0)),n=n.trim(),n===""?null:n}return t==null?null:String(t)}function hn(t,e,n,r,s,o){var a=t[mi];if(a!==n||a===void 0){var l=wd(n,r,o);l==null?t.removeAttribute("class"):e?t.className=l:t.setAttribute("class",l),t[mi]=n}else if(o&&s!==o)for(var c in o){var p=!!o[c];(s==null||p!==!!s[c])&&t.classList.toggle(c,p)}return o}function ti(t,e={},n,r){for(var s in n){var o=n[s];e[s]!==o&&(n[s]==null?t.style.removeProperty(s):t.style.setProperty(s,o,r))}}function ys(t,e,n,r){var s=t[_i];if(s!==e){var o=Sd(e,r);o==null?t.removeAttribute("style"):t.style.cssText=o,t[_i]=e}else r&&(Array.isArray(r)?(ti(t,n==null?void 0:n[0],r[0]),ti(t,n==null?void 0:n[1],r[1],"important")):ti(t,n,r));return r}function gu(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function El(t,e){var n=!("__defaultValue"in t);!n&&t.__defaultValue===e||(t.__defaultValue=e,mu(t,!n||"__value"in t))}function mu(t,e){var n=t.__defaultValue,r=t.multiple,s=r?n??[]:null;if(!(r&&!Ha(s))){var o=t.selectedIndex,a=e&&r?new Set(t.selectedOptions):null;for(var l of t.options){var c=zs(l);gu(l,r?s.includes(c):Wc(c,n))}if(e)if(a!==null)for(l of t.options){var p=a.has(l);l.selected!==p&&(l.selected=p)}else t.selectedIndex!==o&&(t.selectedIndex=o)}}function Ro(t,e,n=!1){if(t.multiple){if(e==null)return;if(!Ha(e))return ff();for(var r of t.options)r.selected=e.includes(zs(r));return}for(r of t.options){var s=zs(r);if(Wc(s,e)){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function yo(t){var e=new MutationObserver(n=>{n.every(Td)||("__defaultValue"in t&&mu(t,!1),"__value"in t&&Ro(t,t.__value))});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ja(()=>{e.disconnect()})}function ni(t,e,n=e){var r=new WeakSet,s=!0;Ic(t,"change",o=>{var a=o?"[selected]":":checked",l;if(t.multiple)l=[].map.call(t.querySelectorAll(a),zs);else{var c=t.querySelector(a)??t.querySelector("option:not([disabled])");l=c&&zs(c)}n(l),t.__value=l,_e!==null&&r.add(_e)}),Wa(()=>{var o=e();if(t===document.activeElement){var a=_e;if(r.has(a))return}if(Ro(t,o,s),s&&o===void 0){var l=t.querySelector(":checked");l!==null&&(o=zs(l),n(o))}t.__value=o,s=!1})}function zs(t){return"__value"in t?t.__value:t.value}function Td(t){if(t.target.closest("selectedcontent")!==null)return!0;if(t.type==="childList"){var e=[...t.addedNodes,...t.removedNodes];return e.length>0&&e.every(n=>n.nodeName==="SELECTEDCONTENT")}return!1}const lo=Symbol("class"),co=Symbol("style"),_u=Symbol("is custom element"),bu=Symbol("is html"),$d=Bi?"input":"INPUT",Ed=Bi?"option":"OPTION",xu=Bi?"select":"SELECT";function Ie(t,e,n,r){var s=yu(t);s[e]!==(s[e]=n)&&(e==="loading"&&(t[Zu]=n),n==null?t.removeAttribute(e):typeof n!="string"&&ku(t).has(e)?t[e]=n:t.setAttribute(e,n))}function Ad(t,e,n,r,s=!1,o=!1){var a=yu(t),l=a[_u],c=!a[bu],p=e||{},u=t.nodeName===Ed,_=t.nodeName===xu;for(var d in e)!(d in n)&&d[0]+d[1]!=="$$"&&(n[d]=null);n.class?n.class=vu(n.class):n[lo]&&(n.class=null),n[co]&&(n.style??(n.style=null));var T=ku(t);if(t.nodeName===$d&&"type"in n&&("value"in n||"__value"in n)){var b=n.type;(b!==p.type||b===void 0&&t.hasAttribute("type"))&&(p.type=b,Ie(t,"type",b))}for(const A in n){let E=n[A];if(u&&A==="value"&&E==null){t.value=t.__value="",p[A]=E;continue}if(A==="class"){var w=t.namespaceURI==="http://www.w3.org/1999/xhtml";hn(t,w,E,r,e==null?void 0:e[lo],n[lo]),p[A]=E,p[lo]=n[lo];continue}if(A==="style"){ys(t,E,e==null?void 0:e[co],n[co]),p[A]=E,p[co]=n[co];continue}var C=p[A];if(!(E===C&&!(E===void 0&&t.hasAttribute(A)))){p[A]=E;var O=A[0]+A[1];if(O!=="$$")if(O==="on"){const N={},ne="$$"+A;let te=A.slice(2);var B=Qf(te);if(Zf(te)&&(te=te.slice(0,-7),N.capture=!0),!B&&C){if(E!=null)continue;t.removeEventListener(te,p[ne],N),p[ne]=null}if(B)L(te,t,E),er([te]);else if(E!=null){let pe=function(ge){p[A].call(this,ge)};p[ne]=fu(te,t,pe,N)}}else if(A==="style")Ie(t,A,E);else if(A==="autofocus")Pc(t,!!E);else if(!l&&(A==="__value"||A==="value"&&E!=null))t.value=t.__value=E;else if(A==="selected"&&u)gu(t,E);else{var H=A;c||(H=ed(H));var Z=H==="defaultValue"||H==="defaultChecked";if(_&&H==="defaultValue")continue;if(E==null&&!l&&!Z)if(a[A]=null,H==="value"||H==="checked"){let N=t;const ne=e===void 0;if(H==="value"){let te=N.defaultValue;N.removeAttribute(H),N.defaultValue=te,N.value=N.__value=ne?te:null}else{let te=N.defaultChecked;N.removeAttribute(H),N.defaultChecked=te,N.checked=ne?te:!1}}else t.removeAttribute(A);else Z||(l||typeof E!="string")&&T.has(H)?(t[H]=E,H in a&&(a[H]=Et)):typeof E!="function"&&Ie(t,H,E)}}}return p}function Al(t,e,n=[],r=[],s=[],o,a=!1,l=!1){Nc(s,n,r,c=>{var p=void 0,u={},_=t.nodeName===xu,d=!1;if(Xc(()=>{var b=e(...c.map(i)),w=Ad(t,p,b,o,a,l);if(d&&_){var C=t;"defaultValue"in b&&El(C,b.defaultValue),"value"in b&&Ro(C,b.value)}for(let B of Object.getOwnPropertySymbols(u))b[B]||en(u[B]);for(let B of Object.getOwnPropertySymbols(b)){var O=b[B];B.description===cf&&(!p||O!==p[B])&&(u[B]&&en(u[B]),u[B]=wn(()=>yd(t,()=>O))),w[B]=O}p=w}),_){var T=t;Wa(()=>{var b=p;"defaultValue"in b&&El(T,b.defaultValue),Ro(T,b.value,!0),yo(T)})}d=!0})}function yu(t){return t[_a]??(t[_a]={[_u]:t.nodeName.includes("-"),[bu]:t.namespaceURI===wc})}var Cl=new Map;function ku(t){var e=t.getAttribute("is")||t.nodeName,n=Cl.get(e);if(n)return n;Cl.set(e,n=new Set);for(var r,s=t,o=Element.prototype;o!==s;){r=gc(s);for(var a in r)r[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&n.add(a);s=Di(s)}return n}function pt(t,e,n=e){var r=new WeakSet;Ic(t,"input",async s=>{var o=s?t.defaultValue:t.value;if(o=ri(t)?si(o):o,n(o),_e!==null&&r.add(_e),await Qi(),o!==(o=e())){var a=t.selectionStart,l=t.selectionEnd,c=t.value.length;if(t.value=o??"",l!==null){var p=t.value.length;a===l&&l===c&&p>c?(t.selectionStart=p,t.selectionEnd=p):(t.selectionStart=a,t.selectionEnd=Math.min(l,p))}}}),Vr(e)==null&&t.value&&(n(ri(t)?si(t.value):t.value),_e!==null&&r.add(_e)),Yi(()=>{var s=e();if(t===document.activeElement){var o=_e;if(r.has(o))return}ri(t)&&s===si(t.value)||t.type==="date"&&!s&&!t.value||s!==t.value&&(t.value=s??"")})}function ri(t){var e=t.type;return e==="number"||e==="range"}function si(t){return t===""?null:+t}function oi(t,e){return t===e||(t==null?void 0:t[Cr])===e}function Ys(t=Ui(),e,n,r){var s=vt.r,o=Me;return Wa(()=>{var a,l;return Yi(()=>{a=l,l=[],Vr(()=>{oi(n(...l),t)||(e(t,...l),a&&oi(n(...a),t)&&e(null,...a))})}),()=>{let c=o;for(;c!==s&&c.parent!==null&&c.parent.f&Ea;)c=c.parent;const p=()=>{l&&oi(n(...l),t)&&e(null,...l)},u=c.teardown;c.teardown=()=>{p(),u==null||u()}}}),t}function wu(t=!1){const e=vt,n=e.l.u;if(!n)return;let r=()=>is(e.s);if(t){let s=0,o={};const a=qs(()=>{let l=!1;const c=e.s;for(const p in c)c[p]!==o[p]&&(o[p]=c[p],l=!0);return l&&s++,s});r=()=>i(a)}n.b.length&&Wf(()=>{Rl(e,r),vi(n.b)}),Jt(()=>{const s=Vr(()=>n.m.map(Gu));return()=>{for(const o of s)typeof o=="function"&&o()}}),n.a.length&&Jt(()=>{Rl(e,r),vi(n.a)})}function Rl(t,e){if(t.l.s)for(const n of t.l.s)i(n);e()}function Cd(t){var e=jr(0);return function(){return arguments.length===1?(h(e,i(e)+1),arguments[0]):(i(e),t())}}const Rd={get(t,e){if(!t.exclude.includes(e))return i(t.version),e in t.special?t.special[e]():t.props[e]},set(t,e,n){if(!(e in t.special)){var r=Me;try{Jn(t.parent_effect),t.special[e]=yt({get[e](){return t.props[e]}},e,kc)}finally{Jn(r)}}return t.special[e](n),gl(t.version),!0},getOwnPropertyDescriptor(t,e){if(!t.exclude.includes(e)&&e in t.props)return{enumerable:!0,configurable:!0,value:t.props[e]}},deleteProperty(t,e){return t.exclude.includes(e)||(t.exclude.push(e),gl(t.version)),!0},has(t,e){return t.exclude.includes(e)?!1:e in t.props},ownKeys(t){return Reflect.ownKeys(t.props).filter(e=>!t.exclude.includes(e))}};function we(t,e){return new Proxy({props:t,exclude:e,special:{},version:jr(0),parent_effect:Me},Rd)}const Pd={get(t,e){let n=t.props.length;for(;n--;){let r=t.props[n];if(ao(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r)return r[e]}},set(t,e,n){let r=t.props.length;for(;r--;){let s=t.props[r];ao(s)&&(s=s());const o=ts(s,e);if(o&&o.set)return o.set(n),!0}return!1},getOwnPropertyDescriptor(t,e){let n=t.props.length;for(;n--;){let r=t.props[n];if(ao(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r){const s=ts(r,e);return s&&!s.configurable&&(s.configurable=!0),s}}},has(t,e){if(e===Cr||e===xc)return!1;for(let n of t.props)if(ao(n)&&(n=n()),n!=null&&e in n)return!0;return!1},ownKeys(t){const e=[];for(let n of t.props)if(ao(n)&&(n=n()),!!n){for(const r in n)e.includes(r)||e.push(r);for(const r of Object.getOwnPropertySymbols(n))e.includes(r)||e.push(r)}return e}};function $e(...t){return new Proxy({props:t},Pd)}function yt(t,e,n,r){var Z;var s=!Qs||(n&nf)!==0,o=(n&rf)!==0,a=(n&sf)!==0,l=r,c=!0,p=void 0,u=()=>a&&s?(p??(p=qs(r)),i(p)):(c&&(c=!1,l=a?Vr(r):r),l);let _;if(o){var d=Cr in t||xc in t;_=((Z=ts(t,e))==null?void 0:Z.set)??(d&&e in t?A=>t[e]=A:void 0)}var T,b=!1;o?[T,b]=Af(()=>t[e]):T=t[e],T===void 0&&r!==void 0&&(T=u(),_&&(s&&xf(),_(T)));var w;if(s?w=()=>{var A=t[e];return A===void 0?u():(c=!0,A)}:w=()=>{var A=t[e];return A!==void 0&&(l=void 0),A===void 0?l:A},s&&(n&kc)===0)return w;if(_){var C=t.$$legacy;return(function(A,E){return arguments.length>0?((!s||!E||C||b)&&_(E?w():A),A):w()})}var O=!1,B=((n&tf)!==0?qs:Wi)(()=>(O=!1,w()));o&&i(B);var H=Me;return(function(A,E){if(arguments.length>0){const N=E?i(B):s&&o?Xe(A):A;return h(B,N),O=!0,l!==void 0&&(l=N),A}return Wr&&O||(H.f&Tn)!==0?B.v:i(B)})}function no(t){vt===null&&Ec(),Qs&&vt.l!==null?Id(vt).m.push(t):Jt(()=>{const e=Vr(t);if(typeof e=="function")return e})}function el(t){vt===null&&Ec(),no(()=>()=>Vr(t))}function Id(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}const Nd="5";var hc;typeof window<"u"&&((hc=window.__svelte??(window.__svelte={})).v??(hc.v=new Set)).add(Nd);const ls=()=>window.__IDE_BOOTSTRAP__||{};function Od(t){const{rootPath:e="",session:n=""}=ls();return`${e}/api/sessions/${encodeURIComponent(n)}/ide${t}`}async function bt(t,e={}){const n=await fetch(Od(t),e),r=await n.json().catch(()=>({}));if(!n.ok){const s=new Error(r.error||"Request failed");throw Object.assign(s,r),s}return r}const $t=(t,e)=>`/ssh-connections/${encodeURIComponent(t)}${e}`,Le={chat:async(t,e=80)=>{const{rootPath:n=""}=ls(),r=`${n}/api/sessions/${encodeURIComponent(t)}/ide/chat?limit=${e}`,s=await fetch(r),o=await s.json().catch(()=>({}));if(!s.ok)throw new Error(o.error||"Could not load chat");return o},browse:async(t="")=>{const{rootPath:e=""}=ls(),n=`${e}/api/ide/browse?path=${encodeURIComponent(t)}`,r=await fetch(n),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not browse folders");return s},sessionAgent:async t=>{const{rootPath:e=""}=ls(),n=await fetch(`${e}/api/sessions/${encodeURIComponent(t)}/agent`),r=await n.json().catch(()=>({}));if(!n.ok)throw new Error(r.error||"Could not read agent settings");return r},setSessionAgent:async(t,e)=>{const{rootPath:n=""}=ls(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(t)}/agent`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({agent:e,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not switch agent");return s},setSessionModel:async(t,e)=>{const{rootPath:n=""}=ls(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(t)}/model`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:e,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change model");return s},setSessionEffort:async(t,e)=>{const{rootPath:n=""}=ls(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(t)}/effort`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({effort:e,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change effort");return s},browseOn:(t,e="")=>bt($t(t,`/browse?path=${encodeURIComponent(e)}`)),setWorkspaceRoot:(t,e,n)=>bt($t(t,"/workspace-root"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({workspace_root:e,label:n})}),agentContext:t=>bt($t(t,"/agent-context")),hostKey:t=>bt($t(t,"/host-key")),trustHost:t=>bt($t(t,"/host-key"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({accept:!0})}),listConnections:()=>bt("/ssh-connections"),createConnection:t=>bt("/ssh-connections",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),deleteConnection:t=>bt($t(t,""),{method:"DELETE"}),connect:(t,e)=>bt($t(t,"/connect"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e||""})}),status:t=>bt($t(t,"/status?reconnect=1")),listFiles:(t,e)=>bt($t(t,`/files?path=${encodeURIComponent(e)}`)),searchFiles:(t,e,n)=>bt($t(t,`/files/search?path=${encodeURIComponent(e)}&query=${encodeURIComponent(n)}`)),readFile:(t,e)=>bt($t(t,`/file?path=${encodeURIComponent(e)}`)),saveFile:(t,e,n)=>bt($t(t,"/file"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:e,content:n})}),fs:(t,e)=>bt($t(t,"/fs"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),git:(t,e)=>bt($t(t,"/git"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),focusTerminal:t=>bt($t(t,"/focus-terminal"),{method:"POST"}),updateConnection:(t,e)=>bt($t(t,""),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),listTerminals:t=>bt($t(t,"/terminals")),closeTerminal:(t,e)=>bt($t(t,`/terminals/${e}`),{method:"DELETE"}),getWorkspace:t=>bt($t(t,"/workspace")),saveWorkspace:(t,e)=>bt($t(t,"/workspace"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};var Mo,Lo,Do,Fo,Ho,Bo,Uo,jo,Wo,Vo,qo,Go,Ko,Yo,Zo,Xo,Qo,Jo,ea,ta,na,ra,sa,oa;class zd{constructor(){re(this,Mo,z(Xe([])));re(this,Lo,z(""));re(this,Do,z("idle"));re(this,Fo,z("Ready"));re(this,Ho,z("No file open"));re(this,Bo,z("."));re(this,Uo,z(Xe([])));re(this,jo,z(Xe({})));re(this,Wo,z(Xe({})));re(this,Vo,z(""));re(this,qo,z(Xe([])));re(this,Go,z(""));re(this,Ko,z(""));re(this,Yo,z(""));re(this,Zo,z(Xe([])));re(this,Xo,z(""));re(this,Qo,z(!1));re(this,Jo,z(!1));re(this,ea,z(0));re(this,ta,z(0));re(this,na,z(!1));re(this,ra,z(""));re(this,sa,z(Xe([])));re(this,oa,z(!1));Oe(this,"restoredKey","");Oe(this,"persistTimer",null)}get connections(){return i(m(this,Mo))}set connections(e){h(m(this,Mo),e,!0)}get connectionId(){return i(m(this,Lo))}set connectionId(e){h(m(this,Lo),e,!0)}get connectionState(){return i(m(this,Do))}set connectionState(e){h(m(this,Do),e,!0)}get statusText(){return i(m(this,Fo))}set statusText(e){h(m(this,Fo),e,!0)}get detailText(){return i(m(this,Ho))}set detailText(e){h(m(this,Ho),e,!0)}get path(){return i(m(this,Bo))}set path(e){h(m(this,Bo),e,!0)}get entries(){return i(m(this,Uo))}set entries(e){h(m(this,Uo),e,!0)}get expanded(){return i(m(this,jo))}set expanded(e){h(m(this,jo),e,!0)}get treeChildren(){return i(m(this,Wo))}set treeChildren(e){h(m(this,Wo),e,!0)}get filter(){return i(m(this,Vo))}set filter(e){h(m(this,Vo),e,!0)}get tabs(){return i(m(this,qo))}set tabs(e){h(m(this,qo),e,!0)}get activeKey(){return i(m(this,Go))}set activeKey(e){h(m(this,Go),e,!0)}get gitOutput(){return i(m(this,Ko))}set gitOutput(e){h(m(this,Ko),e,!0)}get gitStatus(){return i(m(this,Yo))}set gitStatus(e){h(m(this,Yo),e,!0)}get gitBranches(){return i(m(this,Zo))}set gitBranches(e){h(m(this,Zo),e,!0)}get gitBranch(){return i(m(this,Xo))}set gitBranch(e){h(m(this,Xo),e,!0)}get needsHostKey(){return i(m(this,Qo))}set needsHostKey(e){h(m(this,Qo),e,!0)}get notARepo(){return i(m(this,Jo))}set notARepo(e){h(m(this,Jo),e,!0)}get gitAhead(){return i(m(this,ea))}set gitAhead(e){h(m(this,ea),e,!0)}get gitBehind(){return i(m(this,ta))}set gitBehind(e){h(m(this,ta),e,!0)}get gitHasUpstream(){return i(m(this,na))}set gitHasUpstream(e){h(m(this,na),e,!0)}get gitBusy(){return i(m(this,ra))}set gitBusy(e){h(m(this,ra),e,!0)}get gitCommits(){return i(m(this,sa))}set gitCommits(e){h(m(this,sa),e,!0)}get gitHistoryLoaded(){return i(m(this,oa))}set gitHistoryLoaded(e){h(m(this,oa),e,!0)}get connection(){return this.connections.find(e=>e.id===this.connectionId)||null}get activeTab(){return this.tabs.find(e=>e.key===this.activeKey)||null}get visibleEntries(){const e=this.filter.trim().toLowerCase();return e?this.entries.filter(n=>n.name.toLowerCase().includes(e)):this.entries}get dirtyCount(){return this.tabs.filter(e=>e.dirty).length}get gitDirtyCount(){return this.gitStatus.split(`
`).filter(e=>e.trim()&&!e.startsWith("##")).length}resetWorkspaceView(){this.tabs=[],this.activeKey="",this.restoredKey="",this.path=".",this.entries=[],this.expanded={},this.treeChildren={},this.filter="",this.gitOutput="",this.gitStatus="",this.gitBranches=[],this.gitBranch="",this.needsHostKey=!1,this.notARepo=!1,this.gitAhead=0,this.gitBehind=0,this.gitHasUpstream=!1,this.gitCommits=[],this.gitHistoryLoaded=!1}setStatus(e,n){this.statusText=e,n!==void 0&&(this.detailText=n)}async loadConnections(){try{const e=await Le.listConnections();this.connections=e.connections||[],!this.connectionId&&this.connections.length&&(this.connectionId=this.connections[0].id)}catch(e){this.setStatus(e.message||"Could not load connections")}}async refreshStatus(){var e,n,r;if(this.connectionId)try{const s=await Le.status(this.connectionId);s.connected?(this.connectionState="connected",this.setStatus(`Connected · ${((e=this.connection)==null?void 0:e.label)||"SSH workspace"}`,`SSH terminal: ${s.window_name||"open"}`),await this.restoreWorkspace()):(this.connectionState="reconnect",this.entries=[],this.setStatus(`Reconnect required · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,(r=this.connection)!=null&&r.has_password?"Auto-reconnect failed — select Connect to retry":"Select Connect to reopen SSH"))}catch(s){this.connectionState="error",this.setStatus(s.message||"Could not check SSH connection")}}async connect(e){var n;if(this.connectionId){this.connectionState="connecting",this.setStatus("Connecting…");try{const r=await Le.connect(this.connectionId,e);this.connectionState="connected",this.setStatus(`Connected · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,`SSH terminal: ${r.window_name||"open"}`),await this.restoreWorkspace()}catch(r){this.connectionState="error",this.setStatus(r.message||"Could not connect"),this.needsHostKey=!!r.needs_host_key}}}async refreshFiles(e){if(!this.connectionId)return;const n=e||this.path||".";try{const r=await Le.listFiles(this.connectionId,n);this.path=r.path||n,this.entries=r.entries||[],this.remember()}catch(r){this.setStatus(r.message||"Could not list remote files")}}async revealDirectory(e){if(!e||e===".")return;const n={...this.treeChildren};delete n[e],this.treeChildren=n,this.expanded={...this.expanded,[e]:!0};try{const r=await Le.listFiles(this.connectionId,e);this.treeChildren={...this.treeChildren,[e]:r.entries||[]}}catch(r){this.setStatus(r.message||"Could not expand folder")}}async toggleDirectory(e){if(this.expanded[e]){const n={...this.expanded};delete n[e],this.expanded=n;return}if(this.expanded={...this.expanded,[e]:!0},!this.treeChildren[e])try{const n=await Le.listFiles(this.connectionId,e);this.treeChildren={...this.treeChildren,[e]:n.entries||[]}}catch(n){this.setStatus(n.message||"Could not expand folder")}}openDiffTab(e,n){const r=`${this.connectionId}|diff:${e}`,s=this.tabs.find(a=>a.key===r);if(s)return s.content=n,s.saved=n,this.activeKey=r,s;const o={key:r,path:`${e} (diff)`,content:n,saved:n,dirty:!1,readOnly:!0,language:"plaintext"};return this.tabs=[...this.tabs,o],this.activeKey=r,o}async openFile(e){if(!this.connectionId)return null;const n=`${this.connectionId}|${e}`,r=this.tabs.find(s=>s.key===n);if(r)return this.activeKey=n,r;try{const s=await Le.readFile(this.connectionId,e),o={key:`${this.connectionId}|${s.path}`,path:s.path,content:s.content||"",saved:s.content||"",dirty:!1};return this.tabs=[...this.tabs,o],this.activeKey=o.key,this.setStatus("Opened",o.path),this.remember(),o}catch(s){return this.setStatus(s.message||"Could not open remote file"),null}}updateContent(e,n){this.tabs=this.tabs.map(r=>r.key===e?{...r,content:n,dirty:n!==r.saved}:r),this.remember()}closeTab(e){var r;const n=this.tabs.find(s=>s.key===e);n!=null&&n.dirty&&!confirm(`Discard unsaved changes to ${n.path}?`)||(this.tabs=this.tabs.filter(s=>s.key!==e),this.activeKey===e&&(this.activeKey=((r=this.tabs.at(-1))==null?void 0:r.key)||""),this.remember())}async saveActive(){const e=this.activeTab;if(e)try{await Le.saveFile(this.connectionId,e.path,e.content),this.tabs=this.tabs.map(n=>n.key===e.key?{...n,saved:n.content,dirty:!1}:n),this.setStatus(`Saved ${e.path}`,e.path),this.remember()}catch(n){this.setStatus(n.message||"Could not save file")}}async restoreWorkspace(){const e=`${this.connectionId}`;if(!e)return;let n=null;try{n=await Le.getWorkspace(this.connectionId)}catch{n=null}if(await this.refreshFiles((n==null?void 0:n.last_directory)||"."),this.restoredKey===e)return;this.restoredKey=e;const r=(n==null?void 0:n.buffers)||{};for(const o of((n==null?void 0:n.tabs)||[]).slice(0,12)){const a=await this.openFile(o);a&&Object.prototype.hasOwnProperty.call(r,o)&&this.updateContent(a.key,r[o])}const s=this.tabs.find(o=>o.path===(n==null?void 0:n.active_path));s&&(this.activeKey=s.key)}remember(){this.persistTimer&&clearTimeout(this.persistTimer),this.persistTimer=setTimeout(()=>this.persist(),1500)}async persist(){var n;if(!this.connectionId)return;const e={};for(const r of this.tabs)r.dirty&&(e[r.path]=r.content);try{await Le.saveWorkspace(this.connectionId,{tabs:this.tabs.map(r=>r.path).slice(0,50),active_path:((n=this.activeTab)==null?void 0:n.path)||"",last_directory:this.path||".",buffers:e})}catch{}}async runGit(e,n={}){try{const r=await Le.git(this.connectionId,{action:e,path:this.path||".",...n});return r.not_a_repo?(this.gitOutput=r.error||"This folder is not a Git repository.",this.gitStatus="",this.gitBranches=[],this.gitBranch="",this.gitCommits=[],this.gitHistoryLoaded=!1,this.notARepo=!0,null):(this.notARepo=!1,this.gitAhead=r.ahead||0,this.gitBehind=r.behind||0,this.gitHasUpstream=!!r.has_upstream,e==="log"?(this.gitCommits=r.commits||[],this.gitHistoryLoaded=!0):e!=="show"&&(this.gitOutput=r.output||r.status||""),this.gitStatus=r.status||"",this.gitBranches=r.branches||[],this.gitBranch=r.current_branch||"",["commit","switch","create_branch","pull","push","fetch"].includes(e)&&(this.gitHistoryLoaded=!1),r)}catch(r){return this.gitOutput=r.message||"Git command failed",null}}}Mo=new WeakMap,Lo=new WeakMap,Do=new WeakMap,Fo=new WeakMap,Ho=new WeakMap,Bo=new WeakMap,Uo=new WeakMap,jo=new WeakMap,Wo=new WeakMap,Vo=new WeakMap,qo=new WeakMap,Go=new WeakMap,Ko=new WeakMap,Yo=new WeakMap,Zo=new WeakMap,Xo=new WeakMap,Qo=new WeakMap,Jo=new WeakMap,ea=new WeakMap,ta=new WeakMap,na=new WeakMap,ra=new WeakMap,sa=new WeakMap,oa=new WeakMap;const v=new zd;Tf();/**
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
 */const Pl=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();var Dd=pu("<svg><!><!></svg>");function Ee(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]),r=we(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);gn(e,!1);let s=yt(e,"name",8,void 0),o=yt(e,"color",8,"currentColor"),a=yt(e,"size",8,24),l=yt(e,"strokeWidth",8,2),c=yt(e,"absoluteStrokeWidth",8,!1),p=yt(e,"iconNode",24,()=>[]);wu();var u=Dd();Al(u,(T,b,w)=>({...Md,...T,...r,width:a(),height:a(),stroke:o(),"stroke-width":b,class:w}),[()=>Ld(r)?void 0:{"aria-hidden":"true"},()=>(is(c()),is(l()),is(a()),Vr(()=>c()?Number(l())*24/Number(a()):l())),()=>(is(Pl),is(s()),is(n),Vr(()=>Pl("lucide-icon","lucide",s()?`lucide-${s()}`:"",n.class)))]);var _=S(u);_t(_,1,p,Ji,(T,b)=>{var w=Ut(()=>Ku(i(b),2));let C=()=>i(w)[0],O=()=>i(w)[1];var B=de(),H=q(B);xd(H,C,!0,(Z,A)=>{Al(Z,()=>({...O()}))}),y(T,B)});var d=g(_);Se(d,e,"default",{}),y(t,u),mn()}function Fd(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"m21 8-4-4-4 4"}],["path",{d:"M17 4v16"}]];Ee(t,$e({name:"arrow-down-up"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Hd(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];Ee(t,$e({name:"arrow-up"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function wa(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M20 6 9 17l-5-5"}]];Ee(t,$e({name:"check"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Ar(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];Ee(t,$e({name:"chevron-down"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Sa(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m9 18 6-6-6-6"}]];Ee(t,$e({name:"chevron-right"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Il(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];Ee(t,$e({name:"circle-alert"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Bd(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];Ee(t,$e({name:"circle-check"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Ud(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]];Ee(t,$e({name:"circle-dot"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function jd(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]];Ee(t,$e({name:"circle-user"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Wd(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];Ee(t,$e({name:"circle"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Vd(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}],["path",{d:"m9 10-5 5 5 5"}]];Ee(t,$e({name:"corner-down-left"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function qd(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]];Ee(t,$e({name:"corner-left-up"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Gd(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]];Ee(t,$e({name:"ellipsis"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Kd(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];Ee(t,$e({name:"external-link"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Nl(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m5 16-3 3 3 3"}],["path",{d:"m9 22 3-3-3-3"}]];Ee(t,$e({name:"file-code-corner"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Yd(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]];Ee(t,$e({name:"file-diff"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Zd(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]];Ee(t,$e({name:"file-plus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function tl(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}]];Ee(t,$e({name:"file"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Xd(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"}]];Ee(t,$e({name:"files"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function ai(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];Ee(t,$e({name:"folder-open"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Qd(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];Ee(t,$e({name:"folder-plus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Jd(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];Ee(t,$e({name:"folder"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Ri(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M15 6a9 9 0 0 0-9 9V3"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}]];Ee(t,$e({name:"git-branch"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function ep(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M10 16h.01"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["path",{d:"M21.946 12.013H2.054"}],["path",{d:"M6 16h.01"}]];Ee(t,$e({name:"hard-drive"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function tp(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];Ee(t,$e({name:"history"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function np(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];Ee(t,$e({name:"link-2"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function gr(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]];Ee(t,$e({name:"loader"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Ol(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}]];Ee(t,$e({name:"message-square"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function rp(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m14 10 7-7"}],["path",{d:"M20 10h-6V4"}],["path",{d:"m3 21 7-7"}],["path",{d:"M4 14h6v6"}]];Ee(t,$e({name:"minimize-2"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function sp(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M5 12h14"}]];Ee(t,$e({name:"minus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function op(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{d:"M10 19v-3.96 3.15"}],["path",{d:"M7 19h5"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2"}]];Ee(t,$e({name:"monitor-smartphone"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function ap(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}]];Ee(t,$e({name:"panel-bottom"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function ip(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]];Ee(t,$e({name:"panel-left"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function lp(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"}]];Ee(t,$e({name:"paperclip"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Ao(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];Ee(t,$e({name:"plus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Pi(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];Ee(t,$e({name:"refresh-cw"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function nl(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];Ee(t,$e({name:"search"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function zl(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];Ee(t,$e({name:"server"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Ml(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M14 17H5"}],["path",{d:"M19 7h-9"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]];Ee(t,$e({name:"settings-2"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function cp(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]];Ee(t,$e({name:"shield-alert"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function ii(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];Ee(t,$e({name:"sparkles"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Ll(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]];Ee(t,$e({name:"square-terminal"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function up(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];Ee(t,$e({name:"square"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Dl(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];Ee(t,$e({name:"trash-2"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function fp(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]];Ee(t,$e({name:"undo-2"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Na(t,e){const n=we(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];Ee(t,$e({name:"x"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=de(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}var dp=I('<span class="w-[14px] shrink-0"></span>'),pp=pu('<svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1.5 3.5h4l1.2 1.4h7.8v7.6H1.5z" fill="#c09553"></path></svg>'),hp=I(`<div draggable="true" role="treeitem" tabindex="0"><!> <span class="flex shrink-0 items-center"><!></span> <span class="flex-1 truncate text-vs-fg"> </span> <span class="pointer-events-none flex shrink-0 gap-0.5 opacity-0 transition-opacity
               group-hover:pointer-events-auto group-hover:opacity-100
               focus-within:pointer-events-auto focus-within:opacity-100"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Rename"><span class="text-[11px] leading-none">✎</span></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Delete"><span class="text-[11px] leading-none">🗑</span></button></span></div> <!>`,1);function Su(t,e){gn(e,!0);const n=Ut(()=>e.dir==="."?e.entry.name:`${e.dir}/${e.entry.name}`),r=Ut(()=>!!v.expanded[i(n)]),s=Ut(()=>v.treeChildren[i(n)]||[]),o=Ut(()=>{var K;return((K=v.activeTab)==null?void 0:K.path)===i(n)});async function a(){e.entry.is_dir?await v.toggleDirectory(i(n)):await v.openFile(i(n))}let l=z(!1);function c(K){K.stopPropagation(),K.dataTransfer.effectAllowed="move",K.dataTransfer.setData("text/x-ide-path",i(n))}function p(K){!e.entry.is_dir||!K.dataTransfer.types.includes("text/x-ide-path")||(K.preventDefault(),K.dataTransfer.dropEffect="move",h(l,!0))}async function u(K){if(h(l,!1),!e.entry.is_dir)return;K.preventDefault(),K.stopPropagation();const he=K.dataTransfer.getData("text/x-ide-path");if(!he||he===i(n))return;if(i(n)===he||i(n).startsWith(`${he}/`)){v.setStatus("Cannot move a folder into itself");return}const oe=he.split("/").pop(),le=i(n)==="."?oe:`${i(n)}/${oe}`;if(le!==he)try{await Le.fs(v.connectionId,{action:"rename",path:he,new_path:le}),await v.refreshFiles(),v.setStatus(`Moved ${oe} to ${i(n)}`)}catch(P){v.setStatus(P.message||"Could not move")}}function _(K){var he;K.preventDefault(),K.stopPropagation(),(he=v.openTreeMenu)==null||he.call(v,{path:i(n),isDir:e.entry.is_dir,x:K.clientX,y:K.clientY})}async function d(K){if(K.stopPropagation(),!!confirm(`Delete ${i(n)}? Folders must already be empty.`))try{await Le.fs(v.connectionId,{action:"delete",path:i(n)}),await v.refreshFiles()}catch(he){v.setStatus(he.message||"Could not delete")}}async function T(K){K.stopPropagation();const he=prompt("Rename to (relative path):",i(n));if(!(!he||he===i(n)))try{await Le.fs(v.connectionId,{action:"rename",path:i(n),new_path:he}),await v.refreshFiles()}catch(oe){v.setStatus(oe.message||"Could not rename")}}var b=hp(),w=q(b);let C;var O=S(w);{var B=K=>{var he=de(),oe=q(he);{var le=ce=>{Ar(ce,{size:14,class:"shrink-0 text-vs-muted"})},P=ce=>{Sa(ce,{size:14,class:"shrink-0 text-vs-muted"})};U(oe,ce=>{i(r)?ce(le):ce(P,-1)})}y(K,he)},H=K=>{var he=dp();y(K,he)};U(O,K=>{e.entry.is_dir?K(B):K(H,-1)})}var Z=g(O,2),A=S(Z);{var E=K=>{var he=pp();y(K,he)},N=K=>{np(K,{size:14,class:"text-vs-muted"})},ne=K=>{tl(K,{size:14,class:"text-vs-blue"})};U(A,K=>{e.entry.is_dir?K(E):e.entry.is_symlink?K(N,1):K(ne,-1)})}var te=g(Z,2),pe=ie(te,!0),ge=g(te,2),me=S(ge),Ke=g(me,2),Ve=g(w,2);{var st=K=>{var he=de(),oe=q(he);_t(oe,17,()=>i(s),le=>le.name,(le,P)=>{{let ce=Ut(()=>e.depth+1);Su(le,{get entry(){return i(P)},get dir(){return i(n)},get depth(){return i(ce)}})}}),y(K,he)};U(Ve,K=>{e.entry.is_dir&&i(r)&&K(st)})}ee(()=>{C=hn(w,1,"group flex cursor-pointer items-center gap-1 py-[2px] pr-1 text-[13px] hover:bg-vs-hover",null,C,{"bg-vs-active":i(o),"ring-1":i(l),"ring-vs-accent":i(l)}),ys(w,`padding-left: ${8+e.depth*12}px`),Ie(w,"aria-expanded",e.entry.is_dir?i(r):void 0),Ie(w,"aria-selected",i(o)),Ie(w,"title",i(n)),X(pe,e.entry.name),Ie(me,"aria-label",`Rename ${e.entry.name??""}`),Ie(Ke,"aria-label",`Delete ${e.entry.name??""}`)}),L("click",w,a),L("keydown",w,K=>{(K.key==="Enter"||K.key===" ")&&(K.preventDefault(),a())}),L("contextmenu",w,_),jt("dragstart",w,c),jt("dragover",w,p),jt("dragleave",w,()=>h(l,!1)),jt("drop",w,u),L("click",me,T),L("click",Ke,d),y(t,b),mn()}er(["click","keydown","contextmenu"]);var vp=I('<form class="px-2 pb-1"><input class="w-full rounded-sm border border-vs-accent bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none"/></form>'),gp=I('<p class="px-4 py-2 text-xs text-vs-muted">No folder opened.</p>'),mp=I('<p class="px-4 py-2 text-xs text-vs-muted">No files here</p>'),_p=I('<form class="px-2 py-1"><input class="w-full rounded-sm border border-vs-line bg-vs-input px-1.5 py-0.5 text-xs outline-none focus:border-vs-accent"/></form>'),bp=I('<button class="w-full px-3 py-1 text-left hover:bg-vs-hover">New File…</button> <button class="w-full px-3 py-1 text-left hover:bg-vs-hover">New Folder…</button> <div class="my-1 h-px bg-vs-line"></div> <button class="w-full px-3 py-1 text-left hover:bg-vs-hover">Rename…</button> <button class="w-full px-3 py-1 text-left hover:bg-vs-hover">Copy Path</button> <div class="my-1 h-px bg-vs-line"></div> <button class="w-full px-3 py-1 text-left text-vs-red hover:bg-vs-hover">Delete</button>',1),xp=I('<div class="fixed z-50 min-w-[170px] rounded-md border border-vs-line bg-vs-panel py-1 text-xs shadow-2xl" data-tree-menu=""><!></div>'),yp=I('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-vs-fg uppercase"><span class="flex-1 truncate">Explorer</span></div> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold text-vs-fg uppercase"><!> <span class="flex-1 truncate"> </span> <span class="flex opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-1 hover:bg-vs-hover" title="New file" aria-label="New file"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="New folder" aria-label="New folder"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="Refresh" aria-label="Refresh"><!></button></span></div> <!> <input class="mx-2 mb-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none focus:border-vs-accent" placeholder="Filter files…"/> <div class="min-h-0 flex-1 overflow-y-auto pb-2"><!></div> <!></div>');function kp(t,e){gn(e,!0);let n=z(null),r=z(!1),s=z(""),o=z(null);function a(){h(n,null),h(r,!1)}v.openTreeMenu=V=>{h(n,{...V,x:Math.min(V.x,window.innerWidth-190)},!0),h(r,!1)};async function l(){var ue,Qe;h(s,i(n).path,!0),h(r,!0),await Qi(),(ue=i(o))==null||ue.focus();const V=i(s).lastIndexOf("/"),Q=i(s).lastIndexOf(".");(Qe=i(o))==null||Qe.setSelectionRange(V+1,Q>V+1?Q:i(s).length)}async function c(V){V.preventDefault();const Q=i(s).trim(),ue=i(n).path;if(a(),!(!Q||Q===ue))try{await Le.fs(v.connectionId,{action:"rename",path:ue,new_path:Q}),await v.refreshFiles()}catch(Qe){v.setStatus(Qe.message||"Could not rename")}}async function p(){const V=i(n).path;if(a(),!!confirm(`Delete ${V}? Folders must already be empty.`))try{await Le.fs(v.connectionId,{action:"delete",path:V}),await v.refreshFiles()}catch(Q){v.setStatus(Q.message||"Could not delete")}}function u(){var Q;const V=i(n).path;a(),(Q=navigator.clipboard)==null||Q.writeText(V).catch(()=>{}),v.setStatus(`Copied ${V}`)}let _=z(""),d=z(""),T=z("");const b=(V,Q)=>V==="."||!V?Q:`${V}/${Q}`;function w(V,Q,ue){h(T,ue?Q:Q.split("/").slice(0,-1).join("/")||".",!0),h(_,V,!0),h(d,""),a()}async function C(V){V.preventDefault();const Q=i(d).trim();if(!Q)return;const ue=i(T)||v.path;try{await Le.fs(v.connectionId,{action:i(_)==="dir"?"create_dir":"create_file",path:b(ue,Q)});const Qe=b(ue,Q),an=i(_);h(_,""),h(d,""),h(T,""),await v.refreshFiles(),await v.revealDirectory(ue),an==="file"&&await v.openFile(Qe)}catch(Qe){v.setStatus(Qe.message||"Could not create")}}const O=Ut(()=>{var V,Q;return(((V=v.connection)==null?void 0:V.workspace_root)||"").split("/").filter(Boolean).pop()||((Q=v.connection)==null?void 0:Q.label)||"WORKSPACE"});var B=yp();jt("click",Ss,V=>{var Q,ue;i(n)&&!((ue=(Q=V.target).closest)!=null&&ue.call(Q,"[data-tree-menu]"))&&a()}),jt("keydown",Ss,V=>{V.key==="Escape"&&a()});var H=g(S(B),2),Z=S(H);Ar(Z,{size:14,class:"shrink-0 text-vs-muted"});var A=g(Z,2),E=ie(A,!0),N=g(A,2),ne=S(N),te=S(ne);Zd(te,{size:14});var pe=g(ne,2),ge=S(pe);Qd(ge,{size:14});var me=g(pe,2),Ke=S(me);Pi(Ke,{size:13});var Ve=g(H,2);{var st=V=>{var Q=vp(),ue=S(Q);Pc(ue,!0),ee(()=>Ie(ue,"placeholder",`${i(_)==="dir"?"New folder":"New file"} in ${i(T)||v.path||"."}`)),jt("submit",Q,C),L("keydown",ue,Qe=>{Qe.key==="Escape"&&h(_,"")}),jt("blur",ue,()=>{i(d).trim()||h(_,"")}),pt(ue,()=>i(d),Qe=>h(d,Qe)),y(V,Q)};U(Ve,V=>{i(_)&&V(st)})}var K=g(Ve,2),he=g(K,2),oe=S(he);{var le=V=>{var Q=gp();y(V,Q)},P=V=>{var Q=de(),ue=q(Q);_t(ue,17,()=>v.visibleEntries,Qe=>Qe.name,(Qe,an)=>{Su(Qe,{get entry(){return i(an)},get dir(){return v.path},depth:0})},Qe=>{var an=mp();y(Qe,an)}),y(V,Q)};U(oe,V=>{v.connectionId?V(P,-1):V(le)})}var ce=g(he,2);{var Ye=V=>{var Q=xp(),ue=S(Q);{var Qe=qt=>{var ln=_p(),cn=S(ln);Ys(cn,Mt=>h(o,Mt),()=>i(o)),jt("submit",ln,c),L("keydown",cn,Mt=>{Mt.key==="Escape"&&a()}),pt(cn,()=>i(s),Mt=>h(s,Mt)),y(qt,ln)},an=qt=>{var ln=bp(),cn=q(ln),Mt=g(cn,2),Ln=g(Mt,4),Dn=g(Ln,2),Fn=g(Dn,4);L("click",cn,()=>w("file",i(n).path,i(n).isDir)),L("click",Mt,()=>w("dir",i(n).path,i(n).isDir)),L("click",Ln,l),L("click",Dn,u),L("click",Fn,p),y(qt,ln)};U(ue,qt=>{i(r)?qt(Qe):qt(an,-1)})}ee(()=>ys(Q,`left: ${i(n).x??""}px; top: ${i(n).y??""}px`)),y(V,Q)};U(ce,V=>{i(n)&&V(Ye)})}ee(()=>{var V;Ie(A,"title",(V=v.connection)==null?void 0:V.workspace_root),X(E,i(O))}),L("click",ne,()=>{h(_,"file"),h(d,""),h(T,"")}),L("click",pe,()=>{h(_,"dir"),h(d,""),h(T,"")}),L("click",me,()=>v.refreshFiles()),pt(K,()=>v.filter,V=>v.filter=V),y(t,B),mn()}er(["click","keydown"]);var wp=I('<div class="absolute top-full right-0 z-20 mt-1 min-w-[170px] rounded-md border border-vs-line bg-vs-panel py-1 shadow-2xl"><button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Fetch</button> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Pull</button> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Push</button> <div class="my-1 h-px bg-vs-line"></div> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Create Branch…</button></div>'),Sp=I('<p class="mx-3 flex items-center gap-1.5 text-xs text-vs-muted"><!> Reading repository…</p>'),Tp=I(`<p class="mx-3 text-xs leading-relaxed text-vs-muted">This folder isn't a Git repository.<br/> Open a folder containing a <code class="rounded-sm bg-vs-input px-1">.git</code> directory,
      or run <code class="rounded-sm bg-vs-input px-1">git init</code> in the terminal.</p>`),$p=I(`<div class="group flex cursor-pointer items-center gap-1.5 py-[2px] pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><span class="truncate text-vs-fg"> </span> <span class="truncate text-[11px] text-vs-muted"> </span> <span class="pointer-events-none ml-auto flex shrink-0 gap-0.5 opacity-0 transition-opacity
                         group-hover:pointer-events-auto group-hover:opacity-100"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Unstage"><!></button></span> <span> </span></div>`),Ep=I('<div class="flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <span class="truncate">Staged Changes</span></button> <span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span></div> <!>',1),Ap=I(`<div class="group flex cursor-pointer items-center gap-1.5 py-[2px] pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><span class="truncate text-vs-fg"> </span> <span class="truncate text-[11px] text-vs-muted"> </span> <span class="pointer-events-none ml-auto flex shrink-0 gap-0.5 opacity-0 transition-opacity
                         group-hover:pointer-events-auto group-hover:opacity-100"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Open changes"><!></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Discard changes"><!></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Stage changes"><!></button></span> <span> </span></div>`),Cp=I('<p class="px-6 py-2 text-xs text-vs-muted">No changes.</p>'),Rp=I('<div class="min-h-0 flex-1 overflow-y-auto"></div>'),Pp=I('<span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span>'),Ip=I('<span class="flex shrink-0 opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-0.5 hover:bg-vs-line" title="Refresh history" aria-label="Refresh history"><!></button></span> <!>',1),Np=I('<span class="shrink-0 rounded-sm bg-vs-line px-1 text-[10px] text-vs-blue"> </span>'),Op=I('<div class="group flex cursor-pointer flex-col gap-0.5 py-1 pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><div class="flex min-w-0 items-center gap-1.5"><span class="truncate text-vs-fg"> </span> <!></div> <div class="flex min-w-0 items-center gap-1.5 text-[11px] text-vs-muted"><span class="shrink-0 font-mono text-vs-yellow"> </span> <span class="truncate"> </span> <span class="ml-auto shrink-0"> </span></div></div>'),zp=I('<p class="px-6 py-2 text-xs text-vs-muted"> </p>'),Mp=I('<div class="max-h-[45%] min-h-0 flex-1 overflow-y-auto"></div>'),Lp=I('<button class="flex items-center gap-1 rounded-sm px-1 text-vs-muted hover:bg-vs-hover hover:text-vs-fg" title="Pull then push"><!> </button>'),Dp=I('<div class="flex gap-1 border-t border-vs-line px-3 py-2"><input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="New branch name"/> <button class="rounded-sm bg-vs-status px-2 py-1 text-xs text-white">Create</button></div>'),Fp=I('<pre class="max-h-[120px] shrink-0 overflow-auto border-t border-vs-line px-3 py-1.5 text-[11px] whitespace-pre-wrap text-vs-muted"> </pre>'),Hp=I('<div class="px-3 pb-2"><textarea class="w-full resize-none rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs text-vs-fg outline-none focus:border-vs-accent placeholder:text-vs-muted" rows="2"></textarea> <button class="mt-1 flex w-full items-center justify-center gap-1.5 rounded-sm bg-vs-status px-2 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"><!> Commit</button></div> <!> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <span class="truncate">Changes</span></button> <span class="flex shrink-0 opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-0.5 hover:bg-vs-line" title="Refresh" aria-label="Refresh"><!></button> <button class="rounded-sm p-0.5 hover:bg-vs-line" title="Stage all changes" aria-label="Stage all"><!></button></span> <span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span></div> <!> <div class="group flex shrink-0 items-center gap-1 border-t border-vs-line px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <!> <span class="truncate">History</span></button> <!></div> <!> <div class="mt-auto flex items-center gap-2 border-t border-vs-line px-3 py-1.5 text-[11px]"><span class="flex min-w-0 items-center gap-1 text-vs-muted" title="Current branch"><!> <span class="truncate"> </span></span> <!></div> <!> <!>',1),Bp=I('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase"><span class="flex-1">Source Control</span> <div class="relative" data-scm-menu=""><button class="rounded-sm p-0.5 hover:bg-vs-hover" title="More actions" aria-label="More actions"><!></button> <!></div></div> <!></div>');function Up(t,e){gn(e,!0);let n=z(""),r=z(""),s=z(!1),o=z(!0),a=z(!0),l=z(!1),c=z(!1);const p=Ut(()=>(v.gitStatus||"").split(`
`).filter(P=>P&&!P.startsWith("##")).map(P=>{const ce=P.slice(3),Ye=ce.indexOf(" -> "),V=Ye===-1?ce:ce.slice(Ye+4);return{index:P[0]===" "?"":P[0],work:P[1]===" "?"":P[1],code:P.slice(0,2).trim()||"??",path:V.replace(/\r$/,""),from:Ye===-1?"":ce.slice(0,Ye)}}).filter(P=>P.path)),u=Ut(()=>i(p).filter(P=>P.index&&P.index!=="?")),_=Ut(()=>i(p).filter(P=>P.work&&P.work!==" ")),d=P=>P.includes("?")||P.includes("A")?"text-vs-green":P.includes("D")?"text-vs-red":P.includes("R")?"text-vs-blue":"text-vs-yellow",T=P=>P.split("/").pop(),b=P=>{const ce=P.split("/");return ce.pop(),ce.join("/")};async function w(P,ce={}){v.gitBusy=P;try{return await v.runGit(P,ce)}finally{v.gitBusy=""}}async function C(){if(!i(n).trim()||!i(u).length)return;await w("commit",{message:i(n).trim()})&&h(n,"")}async function O(){if(!i(r).trim())return;await w("create_branch",{branch:i(r).trim()})&&(h(r,""),h(s,!1))}async function B(P){confirm(`Discard changes in ${P.path}? This cannot be undone.`)&&await w("discard",{files:[P.path]})}async function H(P){const ce=await v.runGit("diff_file",{files:[P.path]});ce&&v.openDiffTab(P.path,ce.output||"No changes to show.")}let Z=z("");Jt(()=>{const P=v.connectionId,ce=v.connectionState,Ye=P?`${P}|${ce}`:"";!P||ce!=="connected"||i(Z)!==Ye&&(h(Z,Ye,!0),w("status"))});async function A(){h(l,!i(l)),i(l)&&!v.gitHistoryLoaded&&await w("log")}Jt(()=>{i(l)&&!v.gitHistoryLoaded&&!v.notARepo&&!v.gitBusy&&w("log")});async function E(P){const ce=await v.runGit("show",{ref:P.hash});ce&&v.openDiffTab(`${P.short} ${P.subject}`,ce.output||"Empty commit.")}const N=P=>(P||"").split(",").map(ce=>ce.trim().replace(/^HEAD -> /,"")).filter(Boolean);function ne(P){P.key==="Enter"&&(P.ctrlKey||P.metaKey)&&(P.preventDefault(),C())}var te=Bp();jt("click",Ss,P=>{var ce,Ye;(Ye=(ce=P.target).closest)!=null&&Ye.call(ce,"[data-scm-menu]")||h(c,!1)});var pe=S(te),ge=g(S(pe),2),me=S(ge),Ke=S(me);Gd(Ke,{size:14});var Ve=g(me,2);{var st=P=>{var ce=wp(),Ye=S(ce),V=g(Ye,2),Q=g(V,2),ue=g(Q,4);L("click",Ye,()=>{h(c,!1),w("fetch")}),L("click",V,()=>{h(c,!1),w("pull")}),L("click",Q,()=>{h(c,!1),w("push")}),L("click",ue,()=>{h(c,!1),h(s,!i(s))}),y(P,ce)};U(Ve,P=>{i(c)&&P(st)})}var K=g(pe,2);{var he=P=>{var ce=Sp(),Ye=S(ce);gr(Ye,{size:12,class:"animate-spin"}),y(P,ce)},oe=P=>{var ce=Tp();y(P,ce)},le=P=>{var ce=Hp(),Ye=q(ce),V=S(Ye),Q=g(V,2),ue=S(Q);{var Qe=fe=>{gr(fe,{size:12,class:"animate-spin"})},an=fe=>{wa(fe,{size:12})};U(ue,fe=>{v.gitBusy==="commit"?fe(Qe):fe(an,-1)})}var qt=g(Ye,2);{var ln=fe=>{var tt=Ep(),je=q(tt),ke=S(je),We=S(ke);{var St=mt=>{Ar(mt,{size:14,class:"text-vs-muted"})},Be=mt=>{Sa(mt,{size:14,class:"text-vs-muted"})};U(We,mt=>{i(a)?mt(St):mt(Be,-1)})}var Ct=g(ke,2),Kt=ie(Ct,!0),lt=g(je,2);{var Rt=mt=>{var Pt=de(),jn=q(Pt);_t(jn,17,()=>i(u),It=>It.path,(It,Tt)=>{var gt=$p(),Wn=S(gt),kt=ie(Wn,!0),Ze=g(Wn,2),$=ie(Ze,!0),F=g(Ze,2),W=S(F),Ae=S(W);sp(Ae,{size:13});var ze=g(F,2),x=ie(ze,!0);ee((R,j,J)=>{Ie(gt,"title",i(Tt).path),X(kt,R),X($,j),Ie(W,"aria-label",`Unstage ${i(Tt).path??""}`),hn(ze,1,`shrink-0 font-mono text-[11px] ${J??""}`),X(x,i(Tt).index||i(Tt).code)},[()=>T(i(Tt).path),()=>b(i(Tt).path),()=>d(i(Tt).code)]),L("click",gt,()=>H(i(Tt))),L("keydown",gt,R=>{R.key==="Enter"&&H(i(Tt))}),L("click",W,R=>{R.stopPropagation(),w("unstage",{files:[i(Tt).path]})}),y(It,gt)}),y(mt,Pt)};U(lt,mt=>{i(a)&&mt(Rt)})}ee(()=>X(Kt,i(u).length)),L("click",ke,()=>h(a,!i(a))),y(fe,tt)};U(qt,fe=>{i(u).length&&fe(ln)})}var cn=g(qt,2),Mt=S(cn),Ln=S(Mt);{var Dn=fe=>{Ar(fe,{size:14,class:"text-vs-muted"})},Fn=fe=>{Sa(fe,{size:14,class:"text-vs-muted"})};U(Ln,fe=>{i(o)?fe(Dn):fe(Fn,-1)})}var be=g(Mt,2),Gt=S(be),Fe=S(Gt);Pi(Fe,{size:12});var tr=g(Gt,2),Lt=S(tr);Ao(Lt,{size:13});var $n=g(be,2),br=ie($n,!0),tn=g(cn,2);{var Nr=fe=>{var tt=Rp();_t(tt,21,()=>i(_),je=>je.path,(je,ke)=>{var We=Ap(),St=S(We),Be=ie(St,!0),Ct=g(St,2),Kt=ie(Ct,!0),lt=g(Ct,2),Rt=S(lt),mt=S(Rt);Yd(mt,{size:13});var Pt=g(Rt,2),jn=S(Pt);fp(jn,{size:13});var It=g(Pt,2),Tt=S(It);Ao(Tt,{size:13});var gt=g(lt,2),Wn=ie(gt,!0);ee((kt,Ze,$)=>{Ie(We,"title",i(ke).path),X(Be,kt),X(Kt,Ze),Ie(Rt,"aria-label",`Open changes to ${i(ke).path??""}`),Ie(Pt,"aria-label",`Discard changes to ${i(ke).path??""}`),Ie(It,"aria-label",`Stage ${i(ke).path??""}`),hn(gt,1,`shrink-0 font-mono text-[11px] ${$??""}`),X(Wn,i(ke).work||i(ke).code)},[()=>T(i(ke).path),()=>b(i(ke).path),()=>d(i(ke).code)]),L("click",We,()=>H(i(ke))),L("keydown",We,kt=>{kt.key==="Enter"&&H(i(ke))}),L("click",Rt,kt=>{kt.stopPropagation(),H(i(ke))}),L("click",Pt,kt=>{kt.stopPropagation(),B(i(ke))}),L("click",It,kt=>{kt.stopPropagation(),w("stage",{files:[i(ke).path]})}),y(je,We)},je=>{var ke=Cp();y(je,ke)}),y(fe,tt)};U(tn,fe=>{i(o)&&fe(Nr)})}var xr=g(tn,2),nr=S(xr),_n=S(nr);{var nn=fe=>{Ar(fe,{size:14,class:"text-vs-muted"})},En=fe=>{Sa(fe,{size:14,class:"text-vs-muted"})};U(_n,fe=>{i(l)?fe(nn):fe(En,-1)})}var Dt=g(_n,2);tp(Dt,{size:12,class:"shrink-0 text-vs-muted"});var yr=g(nr,2);{var rr=fe=>{var tt=Ip(),je=q(tt),ke=S(je),We=S(ke);{var St=lt=>{gr(lt,{size:12,class:"animate-spin"})},Be=lt=>{Pi(lt,{size:12})};U(We,lt=>{v.gitBusy==="log"?lt(St):lt(Be,-1)})}var Ct=g(je,2);{var Kt=lt=>{var Rt=Pp(),mt=ie(Rt,!0);ee(()=>X(mt,v.gitCommits.length)),y(lt,Rt)};U(Ct,lt=>{v.gitCommits.length&&lt(Kt)})}L("click",ke,()=>w("log")),y(fe,tt)};U(yr,fe=>{i(l)&&fe(rr)})}var Hn=g(xr,2);{var sr=fe=>{var tt=Mp();_t(tt,21,()=>v.gitCommits,je=>je.hash,(je,ke)=>{var We=Op(),St=S(We),Be=S(St),Ct=ie(Be,!0),Kt=g(Be,2);_t(Kt,17,()=>N(i(ke).refs),Ji,(gt,Wn)=>{var kt=Np(),Ze=ie(kt,!0);ee(()=>X(Ze,i(Wn))),y(gt,kt)});var lt=g(St,2),Rt=S(lt),mt=ie(Rt,!0),Pt=g(Rt,2),jn=ie(Pt,!0),It=g(Pt,2),Tt=ie(It,!0);ee(()=>{Ie(We,"title",`${i(ke).short} · ${i(ke).author} · ${i(ke).date}`),X(Ct,i(ke).subject),X(mt,i(ke).short),X(jn,i(ke).author),X(Tt,i(ke).relative)}),L("click",We,()=>E(i(ke))),L("keydown",We,gt=>{gt.key==="Enter"&&E(i(ke))}),y(je,We)},je=>{var ke=zp(),We=ie(ke,!0);ee(()=>X(We,v.gitBusy==="log"?"Loading history…":"No commits yet.")),y(je,ke)}),y(fe,tt)};U(Hn,fe=>{i(l)&&fe(sr)})}var An=g(Hn,2),Cn=S(An),or=S(Cn);Ri(or,{size:12,class:"shrink-0"});var Gr=g(or,2),Kr=ie(Gr,!0),Or=g(Cn,2);{var zr=fe=>{var tt=Lp(),je=S(tt);{var ke=Be=>{gr(Be,{size:11,class:"animate-spin"})},We=Be=>{Fd(Be,{size:11})};U(je,Be=>{v.gitBusy==="pull"||v.gitBusy==="push"?Be(ke):Be(We,-1)})}var St=g(je);ee(()=>X(St,` ${v.gitBehind??""}↓ ${v.gitAhead??""}↑`)),L("click",tt,()=>w("pull").then(()=>w("push"))),y(fe,tt)};U(Or,fe=>{v.gitHasUpstream&&fe(zr)})}var Bn=g(An,2);{var bn=fe=>{var tt=Dp(),je=S(tt),ke=g(je,2);L("keydown",je,We=>{We.key==="Enter"&&O(),We.key==="Escape"&&h(s,!1)}),pt(je,()=>i(r),We=>h(r,We)),L("click",ke,O),y(fe,tt)};U(Bn,fe=>{i(s)&&fe(bn)})}var Un=g(Bn,2);{var Mr=fe=>{var tt=Fp(),je=ie(tt,!0);ee(()=>X(je,v.gitOutput)),y(fe,tt)};U(Un,fe=>{v.gitOutput&&fe(Mr)})}ee(fe=>{Ie(V,"placeholder",`Message (Ctrl+Enter to commit on "${v.gitBranch||"branch"}")`),Q.disabled=fe,Ie(Q,"title",i(u).length?"Commit staged changes":"Stage a change first"),X(br,i(_).length),X(Kr,v.gitBranch||"—")},[()=>!i(n).trim()||!i(u).length||v.gitBusy==="commit"]),L("keydown",V,ne),pt(V,()=>i(n),fe=>h(n,fe)),L("click",Q,C),L("click",Mt,()=>h(o,!i(o))),L("click",Gt,()=>w("status")),L("click",tr,()=>w("stage",{files:["."]})),L("click",nr,A),y(P,ce)};U(K,P=>{!i(Z)||v.gitBusy==="status"&&!v.gitStatus&&!v.notARepo?P(he):v.notARepo?P(oe,1):P(le,-1)})}L("click",me,()=>h(c,!i(c))),y(t,te),mn()}er(["click","keydown"]);const jp="modulepreload",Wp=function(t,e){return new URL(t,e).href},Fl={},Ta=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let a=function(u){return Promise.all(u.map(_=>Promise.resolve(_).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const l=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),p=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=a(n.map(u=>{if(u=Wp(u,r),u in Fl)return;Fl[u]=!0;const _=u.endsWith(".css"),d=_?'[rel="stylesheet"]':"";if(!!r)for(let w=l.length-1;w>=0;w--){const C=l[w];if(C.href===u&&(!_||C.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const b=document.createElement("link");if(b.rel=_?"stylesheet":jp,_||(b.as="script"),b.crossOrigin="",b.href=u,p&&b.setAttribute("nonce",p),document.head.appendChild(b),_)return new Promise((w,C)=>{b.addEventListener("load",w),b.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${u}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return e().catch(o)})},ko={base:"vs-dark",inherit:!0,rules:[{token:"",foreground:"f8f8f2",background:"272822"},{token:"comment",foreground:"75715e",fontStyle:"italic"},{token:"string",foreground:"e6db74"},{token:"constant",foreground:"ae81ff"},{token:"number",foreground:"ae81ff"},{token:"keyword",foreground:"f92672"},{token:"operator",foreground:"f92672"},{token:"delimiter",foreground:"f8f8f2"},{token:"type",foreground:"66d9ef",fontStyle:"italic"},{token:"function",foreground:"a6e22e"},{token:"variable",foreground:"f8f8f2"},{token:"variable.parameter",foreground:"fd971f",fontStyle:"italic"},{token:"tag",foreground:"f92672"},{token:"attribute.name",foreground:"a6e22e"},{token:"attribute.value",foreground:"e6db74"},{token:"regexp",foreground:"e6db74"}],colors:{"editor.background":"#272822","editor.foreground":"#f8f8f2","editor.lineHighlightBackground":"#3e3d32","editor.selectionBackground":"#49483e","editorCursor.foreground":"#f8f8f0","editorWhitespace.foreground":"#3b3a32","editorLineNumber.foreground":"#90908a","editorLineNumber.activeForeground":"#f8f8f2","editorIndentGuide.background":"#3b3a32","editorGutter.background":"#272822"}},Vp={py:"python",js:"javascript",mjs:"javascript",cjs:"javascript",ts:"typescript",tsx:"typescript",jsx:"javascript",json:"json",md:"markdown",html:"html",htm:"html",css:"css",scss:"scss",less:"less",sh:"shell",bash:"shell",zsh:"shell",yml:"yaml",yaml:"yaml",toml:"ini",ini:"ini",cfg:"ini",sql:"sql",go:"go",rs:"rust",rb:"ruby",php:"php",java:"java",c:"c",h:"c",cpp:"cpp",hpp:"cpp",cs:"csharp",svelte:"html",vue:"html",xml:"xml",dockerfile:"dockerfile"};function qp(t){var n;const e=(t||"").split("/").pop()||"";return e.toLowerCase()==="dockerfile"?"dockerfile":e.toLowerCase()==="makefile"?"shell":Vp[(n=e.split(".").pop())==null?void 0:n.toLowerCase()]||"plaintext"}var Gp=I('<div class="editor svelte-1h8xysy"></div>');function Kp(t,e){gn(e,!0);let n,r=null,s=null,o="",a=!1;no(async()=>{s=await Ta(()=>import("./ide-monaco.js").then(c=>c.a),__vite__mapDeps([0,1]),import.meta.url),s.editor.defineTheme("monokai",ko),r=s.editor.create(n,{value:"",theme:"monokai",automaticLayout:!0,fontSize:13,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",minimap:{enabled:!0},scrollBeyondLastLine:!1,renderWhitespace:"selection",tabSize:2}),r.onDidChangeModelContent(()=>{a||!o||v.updateContent(o,r.getValue())}),r.addCommand(s.KeyMod.CtrlCmd|s.KeyCode.KeyS,()=>v.saveActive())}),el(()=>r==null?void 0:r.dispose()),Jt(()=>{const c=v.activeTab;if(!(!r||!s)){if(!c){a=!0,r.setValue(""),o="",a=!1;return}if(c.key!==o){a=!0;const p=s.editor.createModel(c.content,c.language||qp(c.path)),u=r.getModel();r.setModel(p),u==null||u.dispose(),r.updateOptions({readOnly:!!c.readOnly}),o=c.key,a=!1}else r.getValue()!==c.content&&(a=!0,r.setValue(c.content),a=!1)}});var l=Gp();Ys(l,c=>n=c,()=>n),y(t,l),mn()}var Zr=Cd(()=>v),Yp=I('<span class="h-2 w-2 rounded-full bg-vs-fg group-hover:hidden"></span> <!>',1),Zp=I('<div><button class="flex items-center gap-1.5 py-2 pr-1 pl-3" role="tab"><!> <span class="whitespace-nowrap"> </span></button> <button class="mr-1.5 flex h-5 w-5 items-center justify-center rounded-sm hover:bg-vs-line"><!></button></div>'),Xp=I('<div class="px-3 py-2 text-xs text-vs-muted">Open a file from the Explorer</div>'),Qp=I('<div class="flex min-h-[35px] items-stretch overflow-x-auto bg-vs-tabinactive" role="tablist"></div>');function Jp(t,e){gn(e,!1);const n=s=>s.split("/").pop();wu();var r=Qp();_t(r,5,()=>Zr().tabs,s=>s.key,(s,o)=>{var a=Zp();let l;var c=S(a),p=S(c);tl(p,{size:14,class:"shrink-0 text-vs-blue"});var u=g(p,2),_=ie(u,!0),d=g(c,2),T=S(d);{var b=C=>{var O=Yp(),B=g(q(O),2);Na(B,{size:14,class:"hidden group-hover:block"}),y(C,O)},w=C=>{Na(C,{size:14,class:"opacity-0 group-hover:opacity-100"})};U(T,C=>{i(o).dirty?C(b):C(w,-1)})}ee((C,O)=>{l=hn(a,1,"group flex items-center border-r border-vs-bg text-[13px]",null,l,{"bg-vs-tabactive":i(o).key===Zr().activeKey,"text-vs-bright":i(o).key===Zr().activeKey,"text-vs-muted":i(o).key!==Zr().activeKey}),Ie(c,"aria-selected",i(o).key===Zr().activeKey),Ie(c,"title",i(o).path),X(_,C),Ie(d,"title",i(o).dirty?"Unsaved changes — close":"Close"),Ie(d,"aria-label",`Close ${O??""}`)},[()=>n(i(o).path),()=>n(i(o).path)]),L("click",c,()=>Zr(Zr().activeKey=i(o).key)),L("click",d,()=>Zr().closeTab(i(o).key)),y(s,a)},s=>{var o=Xp();y(s,o)}),y(t,r),mn()}er(["click"]);function rl(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var $s=rl();function Tu(t){$s=t}var us={exec:()=>null};function Rs(t){let e=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),s=e[r];return s||(s=t(r),e[r]=s),s}}function De(t,e=""){let n=typeof t=="string"?t:t.source,r={replace:(s,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(on.caret,"$1"),n=n.replace(s,a),r},getRegex:()=>new RegExp(n,e)};return r}var eh=((t="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+t)}catch{return!1}})(),on={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:Rs(t=>new RegExp(`^ {0,${t}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:Rs(t=>new RegExp(`^ {0,${t}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:Rs(t=>new RegExp(`^ {0,${t}}(?:\`\`\`|~~~)`)),headingBeginRegex:Rs(t=>new RegExp(`^ {0,${t}}#`)),htmlBeginRegex:Rs(t=>new RegExp(`^ {0,${t}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:Rs(t=>new RegExp(`^ {0,${t}}>`))},th=/^(?:[ \t]*(?:\n|$))+/,nh=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,rh=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ua=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,sh=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,sl=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,$u=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Eu=De($u).replace(/bull/g,sl).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),oh=De($u).replace(/bull/g,sl).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),ol=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,ah=/^[^\n]+/,al=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,ih=De(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",al).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),lh=De(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,sl).getRegex(),qa="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",il=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ch=De("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",il).replace("tag",qa).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Au=t=>De(ol).replace("hr",ua).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list",t).replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",qa).getRegex(),uh=Au(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),fh=Au(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),dh=De(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",fh).getRegex(),ll={blockquote:dh,code:nh,def:ih,fences:rh,heading:sh,hr:ua,html:ch,lheading:Eu,list:lh,newline:th,paragraph:uh,table:us,text:ah},Hl=De("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ua).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",qa).getRegex(),ph={...ll,lheading:oh,table:Hl,paragraph:De(ol).replace("hr",ua).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Hl).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",qa).getRegex()},hh={...ll,html:De(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",il).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:us,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:De(ol).replace("hr",ua).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Eu).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},vh=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,gh=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Cu=/^( {2,}|\\)\n(?!\s*$)/,mh=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,qr=/[\p{P}\p{S}]/u,ro=/[\s\p{P}\p{S}]/u,fa=/[^\s\p{P}\p{S}]/u,_h=De(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,ro).getRegex(),bh=/[\p{Pi}\p{Ps}"']/u,Ru=/(?!~)[\p{P}\p{S}]/u,xh=/(?!~)[\s\p{P}\p{S}]/u,yh=/(?:[^\s\p{P}\p{S}]|~)/u,kh=De(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",eh?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Pu=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,wh=De(Pu,"u").replace(/punct/g,qr).getRegex(),Sh=De(Pu,"u").replace(/punct/g,Ru).getRegex(),Th=/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,$h=De(Th,"u").replace(/openQuote/g,bh).replace(/punct/g,qr).getRegex(),Iu="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Eh=De(Iu,"gu").replace(/notPunctSpace/g,fa).replace(/punctSpace/g,ro).replace(/punct/g,qr).getRegex(),Ah=De(Iu,"gu").replace(/notPunctSpace/g,yh).replace(/punctSpace/g,xh).replace(/punct/g,Ru).getRegex(),Ch="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)",Rh=De(Ch,"gu").replace(/notPunctSpace/g,fa).replace(/punctSpace/g,ro).replace(/punct/g,qr).getRegex(),Ph=De("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,fa).replace(/punctSpace/g,ro).replace(/punct/g,qr).getRegex(),Ih="^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)",Nh=De(Ih,"gu").replace(/notPunctSpace/g,fa).replace(/punctSpace/g,ro).replace(/punct/g,qr).getRegex(),Oh=De(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,qr).getRegex(),zh="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Mh=De(zh,"gu").replace(/notPunctSpace/g,fa).replace(/punctSpace/g,ro).replace(/punct/g,qr).getRegex(),Lh=De(/\\(punct)/,"gu").replace(/punct/g,qr).getRegex(),Dh=De(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Fh=De(il).replace("(?:-->|$)","-->").getRegex(),Hh=De("^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Fh).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Bh=/\[(?:\\[\s\S]|[^\[\]\\])*\]/,Oa=De(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace("brackets",Bh).getRegex(),Uh=De(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Oa).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Nu=De(/^!?\[(label)\]\[(ref)\]/).replace("label",Oa).replace("ref",al).getRegex(),Ou=De(/^!?\[(ref)\](?:\[\])?/).replace("ref",al).getRegex(),jh=De("reflink|nolink(?!\\()","g").replace("reflink",Nu).replace("nolink",Ou).getRegex(),Bl=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,cl={_backpedal:us,anyPunctuation:Lh,autolink:Dh,blockSkip:kh,br:Cu,code:gh,del:us,delLDelim:us,delRDelim:us,emStrongLDelim:wh,emStrongRDelimAst:Eh,emStrongRDelimUnd:Ph,escape:vh,link:Uh,nolink:Ou,punctuation:_h,reflink:Nu,reflinkSearch:jh,tag:Hh,text:mh,url:us},Wh={...cl,emStrongLDelim:$h,emStrongRDelimAst:Rh,emStrongRDelimUnd:Nh,link:De(/^!?\[(label)\]\((.*?)\)/).replace("label",Oa).getRegex(),reflink:De(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Oa).getRegex()},Ii={...cl,emStrongRDelimAst:Ah,emStrongLDelim:Sh,delLDelim:Oh,delRDelim:Mh,url:De(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Bl).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:De(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Bl).getRegex()},Vh={...Ii,br:De(Cu).replace("{2,}","*").getRegex(),text:De(Ii.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},va={normal:ll,gfm:ph,pedantic:hh},uo={normal:cl,gfm:Ii,breaks:Vh,pedantic:Wh},qh={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ul=t=>qh[t];function Pn(t,e){if(e){if(on.escapeTest.test(t))return t.replace(on.escapeReplace,Ul)}else if(on.escapeTestNoEncode.test(t))return t.replace(on.escapeReplaceNoEncode,Ul);return t}function jl(t){try{t=encodeURI(t).replace(on.percentDecode,"%")}catch{return null}return t}function Wl(t,e){var o;let n=t.replace(on.findPipe,(a,l,c)=>{let p=!1,u=l;for(;--u>=0&&c[u]==="\\";)p=!p;return p?"|":" |"}),r=n.split(on.splitPipe),s=0;if(r[0].trim()||r.shift(),r.length>0&&!((o=r.at(-1))!=null&&o.trim())&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(on.slashPipe,"|");return r}function Xr(t,e,n){let r=t.length;if(r===0)return"";let s=0;for(;s<r&&t.charAt(r-s-1)===e;)s++;return t.slice(0,r-s)}function Vl(t){let e=t.split(`
`),n=e.length-1;for(;n>=0&&on.blankLine.test(e[n]);)n--;return e.length-n<=2?t:e.slice(0,n+1).join(`
`)}function Gh(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return n>0?-2:-1}function Kh(t,e=0){let n=e,r="";for(let s of t)if(s==="	"){let o=4-n%4;r+=" ".repeat(o),n+=o}else r+=s,n++;return r}function ql(t,e,n,r,s){let o=e.href,a=e.title||null,l=t[1].replace(s.other.outputLinkReplace,"$1"),c=t[0].charAt(0)==="!";r.state.inLink=!0;let p=r.state.linkEmitted,u=r.state.inRawBlock;r.state.linkEmitted=!1;let _=r.inlineTokens(l),d=r.state.linkEmitted;if(r.state.linkEmitted=p,r.state.inLink=!1,!c){if(d){r.state.inRawBlock=u;return}r.state.linkEmitted=!0}return{type:c?"image":"link",raw:n,href:o,title:a,text:l,tokens:_}}function Yh(t,e,n){let r=t.match(n.other.indentCodeCompensation);if(r===null)return e;let s=r[1];return e.split(`
`).map(o=>{let a=o.match(n.other.beginningSpace);if(a===null)return o;let[l]=a;return o.slice(Math.min(l.length,s.length))}).join(`
`)}var za=class{constructor(t){Oe(this,"options");Oe(this,"rules");Oe(this,"lexer");this.options=t||$s}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let n=this.options.pedantic?e[0]:Vl(e[0]),r=n.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:n,codeBlockStyle:"indented",text:r}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let n=e[0],r=Yh(n,e[3]||"",this.rules);return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(this.rules.other.endingHash.test(n)){let r=Xr(n,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceTabChar.test(r))&&(n=r.trim())}return{type:"heading",raw:Xr(e[0],`
`),depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:Xr(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let n=Xr(e[0],`
`).split(`
`),r="",s="",o=[];for(;n.length>0;){let a=!1,l=[],c;for(c=0;c<n.length;c++)if(this.rules.other.blockquoteStart.test(n[c]))l.push(n[c]),a=!0;else if(!a)l.push(n[c]);else break;n=n.slice(c);let p=l.join(`
`),u=p.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${p}`:p,s=s?`${s}
${u}`:u;let _=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,o,!0),this.lexer.state.top=_,n.length===0)break;let d=o.at(-1);if((d==null?void 0:d.type)==="code")break;if((d==null?void 0:d.type)==="blockquote"){let T=d,b=n.join(`
`),w=T.raw+`
`+b.replace(this.rules.other.blockquoteSetextReplace2,""),C=this.blockquote(w);o[o.length-1]=C,r=`${r}
${b}`,s=s.substring(0,s.length-T.text.length)+C.text;break}else if((d==null?void 0:d.type)==="list"){let T=d,b=T.raw+`
`+n.join(`
`),w=this.list(b);o[o.length-1]=w,r=r.substring(0,r.length-d.raw.length)+w.raw,s=s.substring(0,s.length-T.raw.length)+w.raw,n=b.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:o,text:s}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n=e[1].trim(),r=n.length>1,s={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");let o=this.rules.other.listItemRegex(n),a=!1;for(;t;){let c=!1,p="",u="";if(!(e=o.exec(t))||this.rules.block.hr.test(t))break;p=e[0],t=t.substring(p.length);let _=Kh(e[2].split(`
`,1)[0],e[1].length),d=t.split(`
`,1)[0],T=!_.trim(),b=0;if(this.options.pedantic?(b=2,u=_.trimStart()):T?b=e[1].length+1:(b=_.search(this.rules.other.nonSpaceChar),b=b>4?1:b,u=_.slice(b),b+=e[1].length),T&&this.rules.other.blankLine.test(d)&&(p+=d+`
`,t=t.substring(d.length+1),c=!0),!c){let w=this.rules.other.nextBulletRegex(b),C=this.rules.other.hrRegex(b),O=this.rules.other.fencesBeginRegex(b),B=this.rules.other.headingBeginRegex(b),H=this.rules.other.htmlBeginRegex(b),Z=this.rules.other.blockquoteBeginRegex(b);for(;t;){let A=t.split(`
`,1)[0],E;if(d=A,this.options.pedantic?(d=d.replace(this.rules.other.listReplaceNesting,"  "),E=d):E=d.replace(this.rules.other.tabCharGlobal,"    "),O.test(d)||B.test(d)||H.test(d)||Z.test(d)||w.test(d)||C.test(d))break;if(E.search(this.rules.other.nonSpaceChar)>=b||!d.trim())u+=`
`+E.slice(b);else{if(T||_.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||O.test(_)||B.test(_)||C.test(_))break;u+=`
`+d}T=!d.trim(),p+=A+`
`,t=t.substring(A.length+1),_=E.slice(b)}}s.loose||(a?s.loose=!0:this.rules.other.doubleBlankLine.test(p)&&(a=!0)),s.items.push({type:"list_item",raw:p,task:!!this.options.gfm&&this.rules.other.listIsTask.test(u),loose:!1,text:u,tokens:[]}),s.raw+=p}let l=s.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;s.raw=s.raw.trimEnd();for(let c of s.items)if(this.lexer.state.top=!1,c.tokens=this.lexer.blockTokens(c.text,[]),!s.loose){let p=c.tokens.filter(_=>_.type==="space"),u=p.length>0&&p.some(_=>this.rules.other.anyLine.test(_.raw));s.loose=u}for(let c of s.items){let p=c.tokens[0];if(c.task&&((p==null?void 0:p.type)==="text"||(p==null?void 0:p.type)==="paragraph")){c.text=c.text.replace(this.rules.other.listReplaceTask,""),p.raw=p.raw.replace(this.rules.other.listReplaceTask,""),p.text=p.text.replace(this.rules.other.listReplaceTask,"");for(let _=this.lexer.inlineQueue.length-1;_>=0;_--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[_].src)){this.lexer.inlineQueue[_].src=this.lexer.inlineQueue[_].src.replace(this.rules.other.listReplaceTask,"");break}let u=this.rules.other.listTaskCheckbox.exec(c.raw);if(u){let _={type:"checkbox",raw:u[0]+" ",checked:u[0]!=="[ ]"};c.checked=_.checked,s.loose?c.tokens[0]&&["paragraph","text"].includes(c.tokens[0].type)&&"tokens"in c.tokens[0]&&c.tokens[0].tokens?(c.tokens[0].raw=_.raw+c.tokens[0].raw,c.tokens[0].text=_.raw+c.tokens[0].text,c.tokens[0].tokens.unshift(_)):c.tokens.unshift({type:"paragraph",raw:_.raw,text:_.raw,tokens:[_]}):c.tokens.unshift(_)}}else c.task&&(c.task=!1)}if(s.loose)for(let c of s.items){c.loose=!0;for(let p of c.tokens)p.type==="text"&&(p.type="paragraph")}return s}}html(t){let e=this.rules.block.html.exec(t);if(e){let n=Vl(e[0]);return{type:"html",block:!0,raw:n,pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:n}}}def(t){let e=this.rules.block.def.exec(t);if(e){let n=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:Xr(e[0],`
`),href:r,title:s}}}table(t){var a;let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let n=Wl(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=(a=e[3])!=null&&a.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:Xr(e[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let l of r)this.rules.other.tableAlignRight.test(l)?o.align.push("right"):this.rules.other.tableAlignCenter.test(l)?o.align.push("center"):this.rules.other.tableAlignLeft.test(l)?o.align.push("left"):o.align.push(null);for(let l=0;l<n.length;l++)o.header.push({text:n[l],tokens:this.lexer.inline(n[l]),header:!0,align:o.align[l]});for(let l of s)o.rows.push(Wl(l,o.header.length).map((c,p)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:o.align[p]})));return o}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e){let n=e[1].trim();return{type:"heading",raw:Xr(e[0],`
`),depth:e[2].charAt(0)==="="?1:2,text:n,tokens:this.lexer.inline(n)}}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){let e=this.rules.inline.link.exec(t);if(e){let n=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let o=Xr(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{let o=Gh(e[2],"()");if(o===-2)return;if(o>-1){let a=(e[0].indexOf("!")===0?5:4)+e[1].length+o;e[2]=e[2].substring(0,o),e[0]=e[0].substring(0,a).trim(),e[3]=""}}let r=e[2],s="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(r);o&&(r=o[1],s=o[3])}else s=e[3]?e[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?r=r.slice(1):r=r.slice(1,-1)),ql(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let r=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=e[r.toLowerCase()];if(!s){let o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return ql(n,s,n[0],this.lexer,this.rules)}}emStrong(t,e,n=""){let r=this.rules.inline.emStrongLDelim.exec(t);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let s=[...r[0]].length-1,o,a,l=s,c=0,p=r[0][0],u=n===p,_=p==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(_.lastIndex=0,e=e.slice(-1*t.length+s);(r=_.exec(e))!==null;){if(o=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!o)continue;if(a=[...o].length,r[3]||r[4]){l+=a;continue}else if(r[5]||r[6]){if(s%3&&!((s+a)%3)){c+=a;continue}if(u)break}if(l-=a,l>0)continue;a=Math.min(a,a+l+c);let d=[...r[0]][0].length,T=t.slice(0,s+r.index+d+a);if(Math.min(s,a)%2){let w=T.slice(1,-1);return{type:"em",raw:T,text:w,tokens:this.lexer.inlineTokens(w)}}let b=T.slice(2,-2);return{type:"strong",raw:T,text:b,tokens:this.lexer.inlineTokens(b)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(n),s=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return r&&s&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:e[0],text:n}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t,e,n=""){let r=this.rules.inline.delLDelim.exec(t);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let s=[...r[0]].length-1,o,a,l=s,c=this.rules.inline.delRDelim;for(c.lastIndex=0,e=e.slice(-1*t.length+s);(r=c.exec(e))!==null;){if(o=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!o||(a=[...o].length,a!==s))continue;if(r[3]||r[4]){l+=a;continue}if(l-=a,l>0)continue;a=Math.min(a,a+l);let p=[...r[0]][0].length,u=t.slice(0,s+r.index+p+a),_=u.slice(s,-s);return{type:"del",raw:u,text:_,tokens:this.lexer.inlineTokens(_)}}}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let n,r;return e[2]==="@"?(n=e[1],r="mailto:"+n):(n=e[1],r=n),{type:"link",raw:e[0],text:n,href:r,autolink:!0,tokens:[{type:"text",raw:n,text:n}]}}}url(t){var n;let e;if(e=this.rules.inline.url.exec(t)){let r,s;if(e[2]==="@")r=e[0],s="mailto:"+r;else{let o;do o=e[0],e[0]=((n=this.rules.inline._backpedal.exec(e[0]))==null?void 0:n[0])??"";while(o!==e[0]);r=e[0],e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:r,href:s,autolink:!0,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let n=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:n}}}},fr=class Ni{constructor(e){Oe(this,"tokens");Oe(this,"options");Oe(this,"state");Oe(this,"inlineQueue");Oe(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||$s,this.options.tokenizer=this.options.tokenizer||new za,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,top:!0};let n={other:on,block:va.normal,inline:uo.normal};this.options.pedantic?(n.block=va.pedantic,n.inline=uo.pedantic):this.options.gfm&&(n.block=va.gfm,this.options.breaks?n.inline=uo.breaks:n.inline=uo.gfm),this.tokenizer.rules=n}static get rules(){return{block:va,inline:uo}}static lex(e,n){return new Ni(n).lex(e)}static lexInline(e,n){return new Ni(n).inlineTokens(e)}lex(e){e=e.replace(on.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){var o,a,l;this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(on.tabCharGlobal,"    ").replace(on.spaceLine,""));let s=1/0;for(;e;){if(e.length<s)s=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let c;if((a=(o=this.options.extensions)==null?void 0:o.block)!=null&&a.some(u=>(c=u.call({lexer:this},e,n))?(e=e.substring(c.raw.length),n.push(c),!0):!1))continue;if(c=this.tokenizer.space(e)){e=e.substring(c.raw.length);let u=n.at(-1);c.raw.length===1&&u!==void 0?u.raw+=`
`:n.push(c);continue}if(c=this.tokenizer.code(e)){e=e.substring(c.raw.length);let u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=(u.raw.endsWith(`
`)?"":`
`)+c.raw,u.text+=`
`+c.text,this.inlineQueue.at(-1).src=u.text):n.push(c);continue}if(c=this.tokenizer.fences(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.heading(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.hr(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.blockquote(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.list(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.html(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.def(e)){e=e.substring(c.raw.length);let u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=(u.raw.endsWith(`
`)?"":`
`)+c.raw,u.text+=`
`+c.raw,this.inlineQueue.at(-1).src=u.text):this.tokens.links[c.tag]||(this.tokens.links[c.tag]={href:c.href,title:c.title},n.push(c));continue}if(c=this.tokenizer.table(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.lheading(e)){e=e.substring(c.raw.length),n.push(c);continue}let p=e;if((l=this.options.extensions)!=null&&l.startBlock){let u=1/0,_=e.slice(1),d;this.options.extensions.startBlock.forEach(T=>{d=T.call({lexer:this},_),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(p=e.substring(0,u+1))}if(this.state.top&&(c=this.tokenizer.paragraph(p))){let u=n.at(-1);r&&(u==null?void 0:u.type)==="paragraph"?(u.raw+=(u.raw.endsWith(`
`)?"":`
`)+c.raw,u.text+=`
`+c.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(c),r=p.length!==e.length,e=e.substring(c.raw.length);continue}if(c=this.tokenizer.text(e)){e=e.substring(c.raw.length);let u=n.at(-1);(u==null?void 0:u.type)==="text"?(u.raw+=(u.raw.endsWith(`
`)?"":`
`)+c.raw,u.text+=`
`+c.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(c);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}linkInText(e){if(!e.includes("["))return!1;let n=this.tokenizer.rules.inline.link;for(let r of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(n.test(r[0])&&e.charAt(r.index-1)!=="!")return!0;for(let r of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let s=r[0],o=s.lastIndexOf("[");if(!(s.charAt(0)==="!"||!Object.hasOwn(this.tokens.links,s.slice(o+1,-1)))&&!(o>1&&this.linkInText(s.slice(1,o-1))))return!0}return!1}inlineTokens(e,n=[]){var l,c,p,u,_;this.tokenizer.lexer=this;let r=e;if(this.tokens.links&&e.includes("[")){let d=this.tokenizer.rules.inline.reflinkSearch,T=b=>{let w=b.lastIndexOf("[");if(!Object.hasOwn(this.tokens.links,b.slice(w+1,-1)))return b;if(w>1&&b.charAt(0)!=="!"){let C=b.slice(1,w-1);if(this.linkInText(C))return"["+C.replace(d,T)+"]["+"a".repeat(b.length-w-2)+"]"}return"["+"a".repeat(b.length-2)+"]"};r=r.replace(d,T)}r=r.replace(this.tokenizer.rules.inline.anyPunctuation,d=>"+".repeat(d.length)),r=r.replace(this.tokenizer.rules.inline.blockSkip,(d,T,b)=>{let w=b?b.length:0;return d.slice(0,w)+"["+"a".repeat(d.length-w-2)+"]"}),r=((c=(l=this.options.hooks)==null?void 0:l.emStrongMask)==null?void 0:c.call({lexer:this},r))??r;let s=!1,o="",a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}s||(o=""),s=!1;let d;if((u=(p=this.options.extensions)==null?void 0:p.inline)!=null&&u.some(b=>(d=b.call({lexer:this},e,n))?(e=e.substring(d.raw.length),n.push(d),!0):!1))continue;if(d=this.tokenizer.escape(e)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.tag(e)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.link(e)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(d.raw.length);let b=n.at(-1);d.type==="text"&&(b==null?void 0:b.type)==="text"?(b.raw+=d.raw,b.text+=d.text):n.push(d);continue}if(d=this.tokenizer.emStrong(e,r,o)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.codespan(e)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.br(e)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.del(e,r,o)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.autolink(e)){e=e.substring(d.raw.length),n.push(d);continue}if(!this.state.inLink&&(d=this.tokenizer.url(e))){e=e.substring(d.raw.length),n.push(d);continue}let T=e;if((_=this.options.extensions)!=null&&_.startInline){let b=1/0,w=e.slice(1),C;this.options.extensions.startInline.forEach(O=>{C=O.call({lexer:this},w),typeof C=="number"&&C>=0&&(b=Math.min(b,C))}),b<1/0&&b>=0&&(T=e.substring(0,b+1))}if(d=this.tokenizer.inlineText(T)){e=e.substring(d.raw.length),d.raw.slice(-1)!=="_"&&(o=d.raw.slice(-1)),s=!0;let b=n.at(-1);(b==null?void 0:b.type)==="text"?(b.raw+=d.raw,b.text+=d.text):n.push(d);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return n}infiniteLoopError(e){let n="Infinite loop on byte: "+e;if(this.options.silent)console.error(n);else throw new Error(n)}},Ma=class{constructor(t){Oe(this,"options");Oe(this,"parser");this.options=t||$s}space(t){return""}code({text:t,lang:e,escaped:n}){var o;let r=(o=(e||"").match(on.notSpaceStart))==null?void 0:o[0],s=t?t.replace(on.endingNewline,"")+`
`:"";return r?'<pre><code class="language-'+Pn(r)+'">'+(n?s:Pn(s,!0))+`</code></pre>
`:"<pre><code>"+(n?s:Pn(s,!0))+`</code></pre>
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
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${Pn(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,text:n,tokens:r,autolink:s}){let o=s?Pn(n,!0):this.parser.parseInline(r),a=jl(t);if(a===null)return o;t=Pn(a,s);let l='<a href="'+t+'"';return e&&(l+=' title="'+Pn(e)+'"'),l+=">"+o+"</a>",l}image({href:t,title:e,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let s=jl(t);if(s===null)return Pn(n);t=s;let o=`<img src="${Pn(t)}" alt="${Pn(n)}"`;return e&&(o+=` title="${Pn(e)}"`),o+=">",o}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:Pn(t.text)}},ul=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}checkbox({raw:t}){return t}},dr=class Oi{constructor(e){Oe(this,"options");Oe(this,"renderer");Oe(this,"textRenderer");this.options=e||$s,this.options.renderer=this.options.renderer||new Ma,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ul}static parse(e,n){return new Oi(n).parse(e)}static parseInline(e,n){return new Oi(n).parseInline(e)}parse(e){var r,s;this.renderer.parser=this;let n="";for(let o=0;o<e.length;o++){let a=e[o];if((s=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&s[a.type]){let c=a,p=this.options.extensions.renderers[c.type].call({parser:this},c);if(p!==!1||!["space","hr","heading","code","table","blockquote","list","checkbox","html","def","paragraph","text"].includes(c.type)){n+=p||"";continue}}let l=a;switch(l.type){case"space":{n+=this.renderer.space(l);break}case"hr":{n+=this.renderer.hr(l);break}case"heading":{n+=this.renderer.heading(l);break}case"code":{n+=this.renderer.code(l);break}case"table":{n+=this.renderer.table(l);break}case"blockquote":{n+=this.renderer.blockquote(l);break}case"list":{n+=this.renderer.list(l);break}case"checkbox":{n+=this.renderer.checkbox(l);break}case"html":{n+=this.renderer.html(l);break}case"def":{n+=this.renderer.def(l);break}case"paragraph":{n+=this.renderer.paragraph(l);break}case"text":{n+=this.renderer.text(l);break}default:{let c='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return n}parseInline(e,n=this.renderer){var s,o;this.renderer.parser=this;let r="";for(let a=0;a<e.length;a++){let l=e[a];if((o=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&o[l.type]){let p=this.options.extensions.renderers[l.type].call({parser:this},l);if(p!==!1||!["escape","html","link","image","checkbox","strong","em","codespan","br","del","text"].includes(l.type)){r+=p||"";continue}}let c=l;switch(c.type){case"escape":{r+=n.text(c);break}case"html":{r+=n.html(c);break}case"link":{r+=n.link(c);break}case"image":{r+=n.image(c);break}case"checkbox":{r+=n.checkbox(c);break}case"strong":{r+=n.strong(c);break}case"em":{r+=n.em(c);break}case"codespan":{r+=n.codespan(c);break}case"br":{r+=n.br(c);break}case"del":{r+=n.del(c);break}case"text":{r+=n.text(c);break}default:{let p='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(p),"";throw new Error(p)}}}return r}},ma,wo=(ma=class{constructor(t){Oe(this,"options");Oe(this,"block");this.options=t||$s}preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(t=this.block){return t?fr.lex:fr.lexInline}provideParser(t=this.block){return t?dr.parse:dr.parseInline}},Oe(ma,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),Oe(ma,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),ma),Zh=class{constructor(...t){Oe(this,"defaults",rl());Oe(this,"options",this.setOptions);Oe(this,"parse",this.parseMarkdown(!0));Oe(this,"parseInline",this.parseMarkdown(!1));Oe(this,"Parser",dr);Oe(this,"Renderer",Ma);Oe(this,"TextRenderer",ul);Oe(this,"Lexer",fr);Oe(this,"Tokenizer",za);Oe(this,"Hooks",wo);this.use(...t)}walkTokens(t,e){var r,s;let n=[];for(let o of t)switch(n=n.concat(e.call(this,o)),o.type){case"table":{let a=o;for(let l of a.header)n=n.concat(this.walkTokens(l.tokens,e));for(let l of a.rows)for(let c of l)n=n.concat(this.walkTokens(c.tokens,e));break}case"list":{let a=o;n=n.concat(this.walkTokens(a.items,e));break}default:{let a=o;(s=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&s[a.type]?this.defaults.extensions.childTokens[a.type].forEach(l=>{let c=a[l].flat(1/0);n=n.concat(this.walkTokens(c,e))}):a.tokens&&(n=n.concat(this.walkTokens(a.tokens,e)))}}return n}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{let r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){let o=e.renderers[s.name];o?e.renderers[s.name]=function(...a){let l=s.renderer.apply(this,a);return l===!1&&(l=o.apply(this,a)),l}:e.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=e[s.level];o?o.unshift(s.tokenizer):e[s.level]=[s.tokenizer],s.start&&(s.level==="block"?e.startBlock?e.startBlock.push(s.start):e.startBlock=[s.start]:s.level==="inline"&&(e.startInline?e.startInline.push(s.start):e.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(e.childTokens[s.name]=s.childTokens)}),r.extensions=e),n.renderer){let s=this.defaults.renderer||new Ma(this.defaults);for(let o in n.renderer){if(!(o in s))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let a=o,l=n.renderer[a],c=s[a];s[a]=(...p)=>{let u=l.apply(s,p);return u===!1&&(u=c.apply(s,p)),u||""}}r.renderer=s}if(n.tokenizer){let s=this.defaults.tokenizer||new za(this.defaults);for(let o in n.tokenizer){if(!(o in s))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let a=o,l=n.tokenizer[a],c=s[a];s[a]=(...p)=>{let u=l.apply(s,p);return u===!1&&(u=c.apply(s,p)),u}}r.tokenizer=s}if(n.hooks){let s=this.defaults.hooks||new wo;for(let o in n.hooks){if(!(o in s))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let a=o,l=n.hooks[a],c=s[a];wo.passThroughHooks.has(o)?s[a]=p=>{if(this.defaults.async&&wo.passThroughHooksRespectAsync.has(o))return(async()=>{let _=await l.call(s,p);return c.call(s,_)})();let u=l.call(s,p);return c.call(s,u)}:s[a]=(...p)=>{if(this.defaults.async)return(async()=>{let _=await l.apply(s,p);return _===!1&&(_=await c.apply(s,p)),_})();let u=l.apply(s,p);return u===!1&&(u=c.apply(s,p)),u}}r.hooks=s}if(n.walkTokens){let s=this.defaults.walkTokens,o=n.walkTokens;r.walkTokens=function(a){let l=[];return l.push(o.call(this,a)),s&&(l=l.concat(s.call(this,a))),l}}this.defaults={...this.defaults,...r}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return fr.lex(t,e??this.defaults)}parser(t,e){return dr.parse(t,e??this.defaults)}parseMarkdown(t){return(e,n)=>{let r={...n},s={...this.defaults,...r},o=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&r.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(s.hooks&&(s.hooks.options=s,s.hooks.block=t),s.async)return(async()=>{let a=s.hooks?await s.hooks.preprocess(e):e,l=await(s.hooks?await s.hooks.provideLexer(t):t?fr.lex:fr.lexInline)(a,s),c=s.hooks?await s.hooks.processAllTokens(l):l;s.walkTokens&&await Promise.all(this.walkTokens(c,s.walkTokens));let p=await(s.hooks?await s.hooks.provideParser(t):t?dr.parse:dr.parseInline)(c,s);return s.hooks?await s.hooks.postprocess(p):p})().catch(o);try{s.hooks&&(e=s.hooks.preprocess(e));let a=(s.hooks?s.hooks.provideLexer(t):t?fr.lex:fr.lexInline)(e,s);s.hooks&&(a=s.hooks.processAllTokens(a)),s.walkTokens&&this.walkTokens(a,s.walkTokens);let l=(s.hooks?s.hooks.provideParser(t):t?dr.parse:dr.parseInline)(a,s);return s.hooks&&(l=s.hooks.postprocess(l)),l}catch(a){return o(a)}}}onError(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let r="<p>An error occurred:</p><pre>"+Pn(n.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(n);throw n}}},Ts=new Zh;function it(t,e){return Ts.parse(t,e)}it.options=it.setOptions=function(t){return Ts.setOptions(t),it.defaults=Ts.defaults,Tu(it.defaults),it};it.getDefaults=rl;it.defaults=$s;function Xh(...t){return Ts.use(...t),it.defaults=Ts.defaults,Tu(it.defaults),it}it.use=Xh;it.walkTokens=function(t,e){return Ts.walkTokens(t,e)};it.parseInline=Ts.parseInline;it.Parser=dr;it.parser=dr.parse;it.Renderer=Ma;it.TextRenderer=ul;it.Lexer=fr;it.lexer=fr.lex;it.Tokenizer=za;it.Hooks=wo;it.parse=it;it.options;it.setOptions;it.walkTokens;it.parseInline;dr.parse;fr.lex;/*! @license DOMPurify 3.4.15 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.15/LICENSE */function Gl(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Qh(t){if(Array.isArray(t))return t}function Jh(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,s,o,a,l=[],c=!0,p=!1;try{if(o=(n=n.call(t)).next,e!==0)for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(u){p=!0,s=u}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(p)throw s}}return l}}function ev(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tv(t,e){return Qh(t)||Jh(t,e)||nv(t,e)||ev()}function nv(t,e){if(t){if(typeof t=="string")return Gl(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Gl(t,e):void 0}}const zu=Object.entries,Kl=Object.setPrototypeOf,rv=Object.isFrozen,sv=Object.getPrototypeOf,ov=Object.getOwnPropertyDescriptor;let zt=Object.freeze,Vt=Object.seal,Is=Object.create,Mu=typeof Reflect<"u"&&Reflect,zi=Mu.apply,Mi=Mu.construct;zt||(zt=function(e){return e});Vt||(Vt=function(e){return e});zi||(zi=function(e,n){for(var r=arguments.length,s=new Array(r>2?r-2:0),o=2;o<r;o++)s[o-2]=arguments[o];return e.apply(n,s)});Mi||(Mi=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return new e(...r)});const cs=At(Array.prototype.forEach),av=At(Array.prototype.lastIndexOf),Yl=At(Array.prototype.pop),fo=At(Array.prototype.push),iv=At(Array.prototype.splice),Ms=Array.isArray,So=At(String.prototype.toLowerCase),li=At(String.prototype.toString),Zl=At(String.prototype.match),po=At(String.prototype.replace),Xl=At(String.prototype.indexOf),lv=At(String.prototype.trim),cv=At(Number.prototype.toString),uv=At(Boolean.prototype.toString),Ql=typeof BigInt>"u"?null:At(BigInt.prototype.toString),Jl=typeof Symbol>"u"?null:At(Symbol.prototype.toString),kn=At(Object.prototype.hasOwnProperty),ho=At(Object.prototype.toString),sn=At(RegExp.prototype.test),as=fv(TypeError);function At(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return zi(t,e,r)}}function fv(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return Mi(t,n)}}function Ge(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:So;if(Kl&&Kl(t,null),!Ms(e))return t;let r=e.length;for(;r--;){let s=e[r];if(typeof s=="string"){const o=n(s);o!==s&&(rv(e)||(e[r]=o),s=o)}t[s]=!0}return t}function dv(t){for(let e=0;e<t.length;e++)kn(t,e)||(t[e]=null);return t}function In(t){const e=Is(null);for(const r of zu(t)){var n=tv(r,2);const s=n[0],o=n[1];kn(t,s)&&(Ms(o)?e[s]=dv(o):o&&typeof o=="object"&&o.constructor===Object?e[s]=In(o):e[s]=o)}return e}function pv(t){switch(typeof t){case"string":return t;case"number":return cv(t);case"boolean":return uv(t);case"bigint":return Ql?Ql(t):"0";case"symbol":return Jl?Jl(t):"Symbol()";case"undefined":return ho(t);case"function":case"object":{if(t===null)return ho(t);const e=t,n=qn(e,"toString");if(typeof n=="function"){const r=n(e);return typeof r=="string"?r:ho(r)}return ho(t)}default:return ho(t)}}function qn(t,e){for(;t!==null;){const r=ov(t,e);if(r){if(r.get)return At(r.get);if(typeof r.value=="function")return At(r.value)}t=sv(t)}function n(){return null}return n}function hv(t){try{return sn(t,""),!0}catch{return!1}}const ec=zt(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),ci=zt(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ui=zt(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),vv=zt(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),fi=zt(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),gv=zt(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),tc=zt(["#text"]),nc=zt(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),di=zt(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),rc=zt(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ga=zt(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),mv=Vt(/{{[\w\W]*|^[\w\W]*}}/g),_v=Vt(/<%[\w\W]*|^[\w\W]*%>/g),bv=Vt(/\${[\w\W]*/g),xv=Vt(/^data-[\-\w.\u00B7-\uFFFF]+$/),yv=Vt(/^aria-[\-\w]+$/),sc=Vt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),kv=Vt(/^(?:\w+script|data):/i),wv=Vt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Sv=Vt(/^html$/i),Tv=Vt(/^[a-z][.\w]*(-[.\w]+)+$/i),oc=Vt(/<[/\w!]/g),ac=Vt(/<[/\w]/g),$v=Vt(/<\/no(script|embed|frames)/i),Ev=Vt(/\/>/i),Rn={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Lu=["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"],Av=zt(Ge({},Lu)),Cv=(function(){const t={};return cs(Lu,e=>{t[e]=Vt(new RegExp("</"+e+"(?=[\\t\\n\\f\\r />])","i"))}),zt(t)})(),Rv=function(){return typeof window>"u"?null:window},Pv=function(e,n){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let r=null;const s="data-tt-policy-suffix";n&&n.hasAttribute(s)&&(r=n.getAttribute(s));const o="dompurify"+(r?"#"+r:"");try{return e.createPolicy(o,{createHTML(a){return a},createScriptURL(a){return a}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}},ic=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},Qr=function(e,n,r,s){return kn(e,n)&&Ms(e[n])?Ge(s.base?In(s.base):{},e[n],s.transform):r},pi=function(e,n,r){const s=kn(e,n)?e[n]:void 0;return s&&typeof s=="object"?In(s):r()};function Du(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Rv();const e=D=>Du(D);if(e.version="3.4.15",e.removed=[],!t||!t.document||t.document.nodeType!==Rn.document||!t.Element)return e.isSupported=!1,e;let n=t.document;const r=n,s=r.currentScript;t.DocumentFragment;const o=t.HTMLTemplateElement,a=t.Node,l=t.Element,c=t.NodeFilter,p=t.NamedNodeMap;p===void 0&&(t.NamedNodeMap||t.MozNamedAttrMap),t.HTMLFormElement;const u=t.DOMParser,_=t.trustedTypes,d=l.prototype,T=qn(d,"cloneNode"),b=qn(d,"remove"),w=qn(d,"removeAttributeNode"),C=qn(d,"nextSibling"),O=qn(d,"childNodes"),B=qn(d,"parentNode"),H=qn(d,"shadowRoot"),Z=qn(d,"attributes"),A=a&&a.prototype?qn(a.prototype,"nodeType"):null,E=a&&a.prototype?qn(a.prototype,"nodeName"):null,N=a&&a.prototype?qn(a.prototype,"ownerDocument"):null,ne=function(f){return A?A(f):f.nodeType},te=function(f){return E?E(f):f.nodeName};if(typeof o=="function"){const D=n.createElement("template");D.content&&D.content.ownerDocument&&(n=D.content.ownerDocument)}let pe,ge="",me,Ke=!1,Ve=0;const st=function(){if(Ve>0)throw as('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},K=function(f){st(),Ve++;try{return pe.createHTML(f)}finally{Ve--}},he=function(f){st(),Ve++;try{return pe.createScriptURL(f)}finally{Ve--}},oe=function(){return Ke||(me=Pv(_,s),Ke=!0),me},le=n,P=le.implementation,ce=le.createNodeIterator,Ye=le.createDocumentFragment,V=le.getElementsByTagName,Q=r.importNode;let ue=ic();e.isSupported=typeof zu=="function"&&typeof B=="function"&&P&&P.createHTMLDocument!==void 0;const Qe=mv,an=_v,qt=bv,ln=xv,cn=yv,Mt=kv,Ln=wv,Dn=Tv;let Fn=sc,be=null;const Gt=Ge({},[...ec,...ci,...ui,...fi,...tc]);let Fe=null;const tr=Ge({},[...nc,...di,...rc,...ga]);let Lt=Object.seal(Is(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),$n=null,br=null;const tn=Object.seal(Is(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Nr=!0,xr=!0,nr=!1,_n=!0,nn=!1,En=!0,Dt=!1,yr=!1,rr=null,Hn=null,sr=!1,An=!1,Cn=!1,or=!1,Gr=!0,Kr=!1;const Or="user-content-";let zr=!0,Bn=!1,bn={},Un=null;const Mr=Ge({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let fe=null;const tt=Ge({},["audio","video","img","source","image","track"]);let je=null;const ke=Ge({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),We="http://www.w3.org/1998/Math/MathML",St="http://www.w3.org/2000/svg",Be="http://www.w3.org/1999/xhtml";let Ct=Be,Kt=!1,lt=null;const Rt=Ge({},[We,St,Be],li),mt=zt(["mi","mo","mn","ms","mtext"]);let Pt=Ge({},mt);const jn=zt(["annotation-xml"]);let It=Ge({},jn);const Tt=Ge({},["title","style","font","a","script"]);let gt=null;const Wn=["application/xhtml+xml","text/html"],kt="text/html";let Ze=null,$=null;const F=n.createElement("form"),W=function(f){return f instanceof RegExp||f instanceof Function},Ae=function(){let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if($&&$===f)return;(!f||typeof f!="object")&&(f={}),f=In(f),gt=Wn.indexOf(f.PARSER_MEDIA_TYPE)===-1?kt:f.PARSER_MEDIA_TYPE,Ze=gt==="application/xhtml+xml"?li:So,be=Qr(f,"ALLOWED_TAGS",Gt,{transform:Ze}),Fe=Qr(f,"ALLOWED_ATTR",tr,{transform:Ze}),lt=Qr(f,"ALLOWED_NAMESPACES",Rt,{transform:li}),je=Qr(f,"ADD_URI_SAFE_ATTR",ke,{transform:Ze,base:ke}),fe=Qr(f,"ADD_DATA_URI_TAGS",tt,{transform:Ze,base:tt}),Un=Qr(f,"FORBID_CONTENTS",Mr,{transform:Ze}),$n=Qr(f,"FORBID_TAGS",In({}),{transform:Ze}),br=Qr(f,"FORBID_ATTR",In({}),{transform:Ze}),bn=kn(f,"USE_PROFILES")?f.USE_PROFILES&&typeof f.USE_PROFILES=="object"?In(f.USE_PROFILES):f.USE_PROFILES:!1,Nr=f.ALLOW_ARIA_ATTR!==!1,xr=f.ALLOW_DATA_ATTR!==!1,nr=f.ALLOW_UNKNOWN_PROTOCOLS||!1,_n=f.ALLOW_SELF_CLOSE_IN_ATTR!==!1,nn=f.SAFE_FOR_TEMPLATES||!1,En=f.SAFE_FOR_XML!==!1,Dt=f.WHOLE_DOCUMENT||!1,An=f.RETURN_DOM||!1,Cn=f.RETURN_DOM_FRAGMENT||!1,or=f.RETURN_TRUSTED_TYPE||!1,sr=f.FORCE_BODY||!1,Gr=f.SANITIZE_DOM!==!1,Kr=f.SANITIZE_NAMED_PROPS||!1,zr=f.KEEP_CONTENT!==!1,Bn=f.IN_PLACE||!1,Fn=hv(f.ALLOWED_URI_REGEXP)?f.ALLOWED_URI_REGEXP:sc,Ct=typeof f.NAMESPACE=="string"?f.NAMESPACE:Be,Pt=pi(f,"MATHML_TEXT_INTEGRATION_POINTS",()=>Ge({},mt)),It=pi(f,"HTML_INTEGRATION_POINTS",()=>Ge({},jn));const k=pi(f,"CUSTOM_ELEMENT_HANDLING",()=>Is(null));if(Lt=Is(null),kn(k,"tagNameCheck")&&W(k.tagNameCheck)&&(Lt.tagNameCheck=k.tagNameCheck),kn(k,"attributeNameCheck")&&W(k.attributeNameCheck)&&(Lt.attributeNameCheck=k.attributeNameCheck),kn(k,"allowCustomizedBuiltInElements")&&typeof k.allowCustomizedBuiltInElements=="boolean"&&(Lt.allowCustomizedBuiltInElements=k.allowCustomizedBuiltInElements),Vt(Lt),nn&&(xr=!1),Cn&&(An=!0),bn&&(be=Ge({},tc),Fe=Is(null),bn.html===!0&&(Ge(be,ec),Ge(Fe,nc)),bn.svg===!0&&(Ge(be,ci),Ge(Fe,di),Ge(Fe,ga)),bn.svgFilters===!0&&(Ge(be,ui),Ge(Fe,di),Ge(Fe,ga)),bn.mathMl===!0&&(Ge(be,fi),Ge(Fe,rc),Ge(Fe,ga))),tn.tagCheck=null,tn.attributeCheck=null,kn(f,"ADD_TAGS")&&(typeof f.ADD_TAGS=="function"?tn.tagCheck=f.ADD_TAGS:Ms(f.ADD_TAGS)&&(be===Gt&&(be=In(be)),Ge(be,f.ADD_TAGS,Ze))),kn(f,"ADD_ATTR")&&(typeof f.ADD_ATTR=="function"?tn.attributeCheck=f.ADD_ATTR:Ms(f.ADD_ATTR)&&(Fe===tr&&(Fe=In(Fe)),Ge(Fe,f.ADD_ATTR,Ze))),kn(f,"ADD_FORBID_CONTENTS")&&Ms(f.ADD_FORBID_CONTENTS)&&(Un===Mr&&(Un=In(Un)),Ge(Un,f.ADD_FORBID_CONTENTS,Ze)),zr&&(be["#text"]=!0),Dt&&Ge(be,["html","head","body"]),be.table&&(Ge(be,["tbody"]),delete $n.tbody),f.TRUSTED_TYPES_POLICY){if(typeof f.TRUSTED_TYPES_POLICY.createHTML!="function")throw as('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof f.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw as('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const M=pe;pe=f.TRUSTED_TYPES_POLICY;try{ge=K("")}catch(Y){throw pe=M,Y}}else f.TRUSTED_TYPES_POLICY===null?(pe=void 0,ge=""):(pe===void 0&&(pe=oe()),pe&&typeof ge=="string"&&(ge=K("")));zt&&zt(f),$=f},ze=Ge({},[...ci,...ui,...vv]),x=Ge({},[...fi,...gv]),R=function(f,k,M){return k.namespaceURI===Be?f==="svg":k.namespaceURI===We?f==="svg"&&(M==="annotation-xml"||Pt[M]):!!ze[f]},j=function(f,k,M){return k.namespaceURI===Be?f==="math":k.namespaceURI===St?f==="math"&&It[M]:!!x[f]},J=function(f,k,M){return k.namespaceURI===St&&!It[M]||k.namespaceURI===We&&!Pt[M]?!1:!x[f]&&(Tt[f]||!ze[f])},G=function(f){let k=B(f);(!k||!k.tagName)&&(k={namespaceURI:Ct,tagName:"template"});const M=So(f.tagName),Y=So(k.tagName);return lt[f.namespaceURI]?f.namespaceURI===St?R(M,k,Y):f.namespaceURI===We?j(M,k,Y):f.namespaceURI===Be?J(M,k,Y):!!(gt==="application/xhtml+xml"&&lt[f.namespaceURI]):!1},ve=function(f){fo(e.removed,{element:f});try{B(f).removeChild(f)}catch{if(b(f),!B(f))throw as("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},xe=function(f,k,M){try{w(f,k)}catch{try{f.removeAttribute(M)}catch{}}},Te=function(f){ae(f);const k=O(f);if(k){const Y=[];cs(k,se=>{fo(Y,se)}),cs(Y,se=>{try{b(se)}catch{}})}const M=Z(f);if(M)for(let Y=M.length-1;Y>=0;--Y){const se=M[Y],ye=se&&se.name;typeof ye=="string"&&xe(f,se,ye)}},Ce=function(f,k,M){if(!M)try{M=k.getAttributeNode(f)}catch{M=null}fo(e.removed,{attribute:M||null,from:k});try{M?w(k,M):k.removeAttribute(f)}catch{try{k.removeAttribute(f)}catch{}}if(f==="is")if(An||Cn)try{ve(k)}catch{}else try{k.setAttribute(f,"")}catch{}},Ne=function(f){const k=Z(f);if(k)for(let M=k.length-1;M>=0;--M){const Y=k[M],se=Y&&Y.name;typeof se!="string"||Fe[Ze(se)]||xe(f,Y,se)}},ae=function(f){const k=[f];for(;k.length>0;){const M=k.pop();ne(M)===Rn.element&&Ne(M);const se=O(M);if(se)for(let ye=se.length-1;ye>=0;--ye)k.push(se[ye])}},ot=function(f,k){return En?f==="patchsrc"?!0:f==="for"&&k!=="label"&&k!=="output":!1},Re=function(f){if(!En)return;const k=[f];for(;k.length>0;){const M=k.pop(),Y=ne(M);if(Y===Rn.processingInstruction||Y===Rn.comment&&sn(ac,M.data)){try{b(M)}catch{}continue}if(Y===Rn.element){const ye=M,et=Ze(te(M));try{ye.hasAttribute&&ye.hasAttribute("patchsrc")&&ye.removeAttribute("patchsrc"),ye.hasAttribute&&ye.hasAttribute("for")&&ot("for",et)&&ye.removeAttribute("for")}catch{}}const se=O(M);if(se)for(let ye=se.length-1;ye>=0;--ye)k.push(se[ye])}},Je=function(f){let k=null,M=null;if(sr)f="<remove></remove>"+f;else{const ye=Zl(f,/^[\r\n\t ]+/);M=ye&&ye[0]}gt==="application/xhtml+xml"&&Ct===Be&&(f='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+f+"</body></html>");const Y=pe?K(f):f;if(Ct===Be)try{k=new u().parseFromString(Y,gt)}catch{}if(!k||!k.documentElement){k=P.createDocument(Ct,"template",null);try{k.documentElement.innerHTML=Kt?ge:Y}catch{}}const se=k.body||k.documentElement;return f&&M&&se.insertBefore(n.createTextNode(M),se.childNodes[0]||null),Ct===Be?V.call(k,Dt?"html":"body")[0]:Dt?k.documentElement:se},nt=function(f){const k=N?N(f):f.ownerDocument;return ce.call(k||f,f,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},wt=function(f){return f=po(f,Qe," "),f=po(f,an," "),f=po(f,qt," "),f},Ft=function(f){var k;f.normalize();const M=N?N(f):f.ownerDocument,Y=ce.call(M||f,f,c.SHOW_TEXT|c.SHOW_COMMENT|c.SHOW_CDATA_SECTION|c.SHOW_PROCESSING_INSTRUCTION,null);let se=Y.nextNode();for(;se;)se.data=wt(se.data),se=Y.nextNode();const ye=(k=f.querySelectorAll)===null||k===void 0?void 0:k.call(f,"template");ye&&cs(ye,et=>{at(et.content)&&Ft(et.content)})},Yt=function(f){const k=E?E(f):null;return typeof k!="string"||Ze(k)!=="form"?!1:typeof f.nodeName!="string"||typeof f.textContent!="string"||typeof f.removeChild!="function"||f.attributes!==Z(f)||typeof f.removeAttribute!="function"||typeof f.removeAttributeNode!="function"||typeof f.getAttributeNode!="function"||typeof f.setAttribute!="function"||typeof f.namespaceURI!="string"||typeof f.insertBefore!="function"||typeof f.hasChildNodes!="function"||f.nodeType!==A(f)||f.childNodes!==O(f)},at=function(f){if(!A||typeof f!="object"||f===null)return!1;try{return A(f)===Rn.documentFragment}catch{return!1}},qe=function(f){if(!A||typeof f!="object"||f===null)return!1;try{return typeof A(f)=="number"}catch{return!1}};function Ht(D,f,k){D.length!==0&&cs(D,M=>{M.call(e,f,k,$)})}const ar=function(f,k){return!!(En&&f.hasChildNodes()&&!qe(f.firstElementChild)&&sn(oc,f.textContent)&&sn(oc,f.innerHTML)||En&&f.namespaceURI===Be&&Av[k]&&(qe(f.firstElementChild)||typeof f.textContent=="string"&&sn(Cv[k],f.textContent))||f.nodeType===Rn.processingInstruction||En&&f.nodeType===Rn.comment&&sn(ac,f.data))},ir=function(f,k){if(f instanceof RegExp)return sn(f,k);if(f instanceof Function){for(var M=arguments.length,Y=new Array(M>2?M-2:0),se=2;se<M;se++)Y[se-2]=arguments[se];return!!f(k,...Y)}return!1},Lr=function(f,k,M){if(!$n[k]&&Dr(k)&&ir(Lt.tagNameCheck,k))return!1;if(zr&&!Un[k]){const Y=B(f),se=O(f);if(se&&Y){const ye=se.length;for(let et=ye-1;et>=0;--et){const dt=f===M?T(se[et],!0):se[et];Y.insertBefore(dt,C(f))}}}return ve(f),!0},ct=function(f,k,M,Y){return f.length===0?k:k===M||k===Y?In(k):k},ut=function(f,k){return f===k||B(f)!==null?!1:(Bn&&ae(f),!0)},ft=function(f,k){if(Ht(ue.beforeSanitizeElements,f,null),ut(f,k))return!0;if(Yt(f))return ve(f),!0;const M=Ze(te(f));if(be=ct(ue.uponSanitizeElement,be,Gt,rr),Ht(ue.uponSanitizeElement,f,{tagName:M,allowedTags:be}),ut(f,k))return!0;if(ar(f,M))return ve(f),!0;if($n[M]||!(tn.tagCheck instanceof Function&&tn.tagCheck(M))&&!be[M]){const se=Lr(f,M,k);return se===!1&&Ht(ue.afterSanitizeElements,f,null),se}if(ne(f)===Rn.element&&!G(f)||(M==="noscript"||M==="noembed"||M==="noframes")&&sn($v,f.innerHTML))return ve(f),!0;if(nn&&f.nodeType===Rn.text){const se=wt(f.textContent);f.textContent!==se&&(fo(e.removed,{element:f.cloneNode()}),f.textContent=se)}return Ht(ue.afterSanitizeElements,f,null),!1},xn=function(f,k,M){if(br[k]||ot(k,f)||Gr&&(k==="id"||k==="name")&&(M in n||M in F))return!1;const Y=Fe[k]||tn.attributeCheck instanceof Function&&tn.attributeCheck(k,f);return xr&&sn(ln,k)||Nr&&sn(cn,k)?!0:Y?je[k]||sn(Fn,po(M,Ln,""))||(k==="src"||k==="xlink:href"||k==="href")&&f!=="script"&&Xl(M,"data:")===0&&fe[f]||nr&&!sn(Mt,po(M,Ln,""))?!0:!M:Dr(f)&&ir(Lt.tagNameCheck,f)&&ir(Lt.attributeNameCheck,k,f)||k==="is"&&Lt.allowCustomizedBuiltInElements&&ir(Lt.tagNameCheck,M)},un=Ge({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),Dr=function(f){return!un[So(f)]&&sn(Dn,f)},Es=function(f,k,M,Y){if(pe&&typeof _=="object"&&typeof _.getAttributeType=="function"&&!M)switch(_.getAttributeType(f,k)){case"TrustedHTML":return K(Y);case"TrustedScriptURL":return he(Y)}return Y},so=function(f,k,M,Y){try{return M?f.setAttributeNS(M,k,Y):f.setAttribute(k,Y),Yt(f)?(ve(f),!1):!0}catch{return Ce(k,f),!1}},fn=function(f){Ht(ue.beforeSanitizeAttributes,f,null);const k=f.attributes;if(!k||Yt(f))return;Fe=ct(ue.uponSanitizeAttribute,Fe,tr,Hn);const M={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Fe,forceKeepAttr:void 0};let Y=k.length;const se=Ze(f.nodeName);for(;Y--;){const ye=k[Y],et=ye.name,dt=ye.namespaceURI,Zt=ye.value,rn=Ze(et),oo=Zt;let Xt=et==="value"?oo:lv(oo),Bt=!1;if(M.attrName=rn,M.attrValue=Xt,M.keepAttr=!0,M.forceKeepAttr=void 0,Ht(ue.uponSanitizeAttribute,f,M),Xt=M.attrValue,Kr&&(rn==="id"||rn==="name")&&Xl(Xt,Or)!==0&&(Ce(et,f,ye),Xt=Or+Xt,Bt=!0),En&&sn(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,Xt)){Ce(et,f,ye);continue}if(rn==="attributename"&&Zl(Xt,"href")){Ce(et,f,ye);continue}if(!M.forceKeepAttr){if(!M.keepAttr){Ce(et,f,ye);continue}if(!_n&&sn(Ev,Xt)){Ce(et,f,ye);continue}if(nn&&(Xt=wt(Xt)),!xn(se,rn,Xt)){Ce(et,f,ye);continue}Xt=Es(se,rn,dt,Xt),Xt!==oo&&so(f,et,dt,Xt)&&Bt&&Yl(e.removed)}}Ht(ue.afterSanitizeAttributes,f,null)},Vn=function(f){let k=null;const M=nt(f);for(Ht(ue.beforeSanitizeShadowDOM,f,null);k=M.nextNode();)if(Ht(ue.uponSanitizeShadowNode,k,null),ft(k,f),fn(k),at(k.content)&&Vn(k.content),ne(k)===Rn.element){const Y=H(k);at(Y)&&(os(Y),Vn(Y))}Ht(ue.afterSanitizeShadowDOM,f,null)},os=function(f){const k=[{node:f,shadow:null}];for(;k.length>0;){const M=k.pop();if(M.shadow){Vn(M.shadow);continue}const Y=M.node,ye=ne(Y)===Rn.element,et=O(Y);if(et)for(let dt=et.length-1;dt>=0;--dt)k.push({node:et[dt],shadow:null});if(ye){const dt=E?E(Y):null;if(typeof dt=="string"&&Ze(dt)==="template"){const Zt=Y.content;at(Zt)&&k.push({node:Zt,shadow:null})}}if(ye){const dt=H(Y);at(dt)&&k.push({node:null,shadow:dt},{node:dt,shadow:null})}}};return e.sanitize=function(D){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},k=null,M=null,Y=null,se=null;if(Kt=!D,Kt&&(D="<!-->"),typeof D!="string"&&!qe(D)&&(D=pv(D),typeof D!="string"))throw as("dirty is not a string, aborting");if(!e.isSupported)return D;yr?(be=rr,Fe=Hn):Ae(f),(ue.uponSanitizeElement.length>0||ue.uponSanitizeAttribute.length>0)&&(be=In(be)),ue.uponSanitizeAttribute.length>0&&(Fe=In(Fe)),e.removed=[];const ye=Bn&&typeof D!="string"&&qe(D);if(ye){Re(D);const Zt=te(D);if(typeof Zt=="string"){const rn=Ze(Zt);if(!be[rn]||$n[rn])throw Te(D),as("root node is forbidden and cannot be sanitized in-place")}if(Yt(D))throw Te(D),as("root node is clobbered and cannot be sanitized in-place");try{os(D)}catch(rn){throw Te(D),rn}}else if(qe(D))k=Je("<!---->"),M=k.ownerDocument.importNode(D,!0),M.nodeType===Rn.element&&M.nodeName==="BODY"||M.nodeName==="HTML"?k=M:k.appendChild(M),os(k);else{if(!An&&!nn&&!Dt&&D.indexOf("<")===-1)return pe&&or?K(D):D;if(k=Je(D),!k)return An?null:or?ge:""}k&&sr&&ve(k.firstChild);const et=ye?D:k;try{const Zt=nt(et);for(;Y=Zt.nextNode();)ft(Y,et),fn(Y),at(Y.content)&&Vn(Y.content)}catch(Zt){throw ye&&(Te(D),cs(e.removed,rn=>{rn.element&&ae(rn.element)})),Zt}if(ye)return cs(e.removed,Zt=>{Zt.element&&ae(Zt.element)}),nn&&Ft(D),D;if(An){if(nn&&Ft(k),Cn)for(se=Ye.call(k.ownerDocument);k.firstChild;)se.appendChild(k.firstChild);else se=k;return(Fe.shadowroot||Fe.shadowrootmode)&&(se=Q.call(r,se,!0)),se}let dt=Dt?k.outerHTML:k.innerHTML;return Dt&&be["!doctype"]&&k.ownerDocument&&k.ownerDocument.doctype&&k.ownerDocument.doctype.name&&sn(Sv,k.ownerDocument.doctype.name)&&(dt="<!DOCTYPE "+k.ownerDocument.doctype.name+`>
`+dt),nn&&(dt=wt(dt)),pe&&or?K(dt):dt},e.setConfig=function(){let D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ae(D),yr=!0,rr=be,Hn=Fe},e.clearConfig=function(){$=null,yr=!1,rr=null,Hn=null,pe=me,ge=""},e.isValidAttribute=function(D,f,k){$||Ae({});const M=Ze(D),Y=Ze(f);return xn(M,Y,k)},e.addHook=function(D,f){typeof f=="function"&&kn(ue,D)&&fo(ue[D],f)},e.removeHook=function(D,f){if(kn(ue,D)){if(f!==void 0){const k=av(ue[D],f);return k===-1?void 0:iv(ue[D],k,1)[0]}return Yl(ue[D])}},e.removeHooks=function(D){kn(ue,D)&&(ue[D]=[])},e.removeAllHooks=function(){ue=ic()},e}var Iv=Du(),Nv=I(`<div class="pointer-events-none absolute inset-2 z-20 flex items-center justify-center
                rounded-md border-2 border-dashed border-mk-green/70 bg-mk-bg/80 text-xs text-mk-green svelte-1roe1v9">Drop files to attach</div>`),Ov=I('<p class="rounded-sm border border-mk-pink/40 bg-mk-pink/10 px-2 py-1 text-xs text-mk-pink svelte-1roe1v9"> </p>'),zv=I('<div class="flex flex-col items-start gap-1 svelte-1roe1v9"><span class="flex items-center gap-1.5 text-[11px] font-semibold text-mk-green svelte-1roe1v9"><!> </span> <div class="chat-bubble chat-bubble-agent chat-prose text-[13px] leading-relaxed text-mk-fg svelte-1roe1v9"></div></div>'),Mv=I('<div class="flex flex-col items-end gap-1 svelte-1roe1v9"><span class="text-[11px] font-semibold text-mk-blue svelte-1roe1v9">You</span> <div class="chat-bubble chat-bubble-user text-[13px] leading-relaxed whitespace-pre-wrap text-mk-fg svelte-1roe1v9"> </div></div>'),Lv=I(`<div class="m-auto flex max-w-[250px] flex-col items-center gap-2.5 text-center svelte-1roe1v9"><!> <p class="text-xs leading-relaxed text-mk-comment svelte-1roe1v9">Ask about the file you have open. The prompt goes to <span class="text-mk-muted svelte-1roe1v9"> </span>,
            and the reply appears here.</p></div>`),lc=I('<span class="text-mk-comment svelte-1roe1v9"> </span>'),Dv=I('<div class="flex items-start gap-1.5 text-mk-comment svelte-1roe1v9"><span class="mt-[3px] text-mk-green svelte-1roe1v9">●</span> <span class="truncate svelte-1roe1v9"><b class="font-medium text-mk-fg/80 svelte-1roe1v9"> </b> <!></span></div>'),Fv=I('<div class="flex flex-col gap-0.5 text-[11px] svelte-1roe1v9"></div>'),Hv=I('<div class="flex flex-col items-start gap-1 svelte-1roe1v9"><span class="flex items-center gap-1.5 text-[11px] font-semibold text-mk-green svelte-1roe1v9"><!> </span> <div class="chat-bubble chat-bubble-agent chat-prose text-[13px] leading-relaxed text-mk-fg svelte-1roe1v9"><!><span class="chat-caret svelte-1roe1v9"></span></div></div>'),Bv=I('<div class="flex items-center gap-2 text-[11px] text-mk-comment svelte-1roe1v9"><!> <span class="svelte-1roe1v9"> <span class="chat-dots svelte-1roe1v9"></span></span></div>'),Uv=I(`<button class="mx-auto -mt-1 mb-1 flex shrink-0 items-center gap-1 rounded-full border border-mk-line
             bg-mk-input px-2.5 py-0.5 text-[11px] text-mk-comment shadow hover:text-mk-fg svelte-1roe1v9"><!> </button>`),jv=I(`<span title="Context used of the model's window"> </span> <span class="h-2 w-16 overflow-hidden rounded-full bg-mk-line svelte-1roe1v9" aria-hidden="true"><span></span></span>`,1),Wv=I('<span class="text-mk-muted svelte-1roe1v9" title="Several sessions share this folder — totals cover all of them">shared</span>'),Vv=I('<span class="truncate text-mk-muted svelte-1roe1v9" title="Model for the most recent turn"> </span>'),qv=I('<!> <span class="svelte-1roe1v9"> </span> <!> <!> <!>',1),Gv=I('<span class="text-mk-muted svelte-1roe1v9">No usage reported yet</span>'),Kv=I('<button class="ml-auto flex items-center gap-1 rounded-sm px-1.5 py-0.5 hover:bg-mk-line hover:text-mk-fg disabled:opacity-40 svelte-1roe1v9" title="Compact the conversation to free up context (/compact)"><!> Compact</button>'),Yv=I('<span class="flex items-center gap-1 rounded-sm bg-mk-input px-1.5 py-0.5 text-[11px] text-mk-fg svelte-1roe1v9"><!> <button class="rounded-sm p-0.5 text-mk-comment hover:text-mk-fg svelte-1roe1v9" title="Remove attachment">×</button></span>'),Zv=I('<div class="flex shrink-0 flex-wrap gap-1 border-t border-mk-line px-3 py-1.5 svelte-1roe1v9"></div>'),cc=I('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line svelte-1roe1v9"><span class="w-3 text-mk-green svelte-1roe1v9"><!></span> </button>'),Xv=I('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[150px] rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl svelte-1roe1v9"></div>'),Qv=I('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line svelte-1roe1v9"><span class="w-3 text-mk-green svelte-1roe1v9"><!></span> <span class="truncate svelte-1roe1v9"> </span></button>'),Jv=I('<div class="absolute bottom-full left-0 z-20 mb-1 max-h-[260px] min-w-[190px] overflow-y-auto rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl svelte-1roe1v9"></div>'),eg=I('<div class="relative svelte-1roe1v9" data-menu=""><button class="flex max-w-[110px] items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg svelte-1roe1v9" title="Model"><span class="truncate svelte-1roe1v9"> </span> <!></button> <!></div>'),tg=I('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[130px] rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl svelte-1roe1v9"></div>'),ng=I('<div class="relative svelte-1roe1v9" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg svelte-1roe1v9" title="Reasoning effort"> <!></button> <!></div>'),rg=I('<div class="relative flex h-full min-h-0 flex-col bg-mk-bg text-mk-fg svelte-1roe1v9" role="region" aria-label="AI Agent conversation"><!> <div class="relative flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-3 py-3 svelte-1roe1v9"><!> <!> <!> <!> <!></div> <!> <div class="flex shrink-0 items-center gap-2 border-t border-mk-line px-3 py-1 text-[10px] text-mk-comment svelte-1roe1v9"><!> <!></div> <!> <div class="border-t border-mk-line p-2 svelte-1roe1v9"><div class="rounded-md border border-mk-line bg-mk-input focus-within:border-mk-green svelte-1roe1v9"><textarea rows="2" class="max-h-[200px] w-full resize-none bg-transparent px-2.5 py-2 text-[13px] text-mk-fg outline-none placeholder:text-mk-comment svelte-1roe1v9" placeholder="Ask about this workspace…"></textarea> <div class="flex items-center gap-1 px-1.5 pb-1.5 text-[11px] svelte-1roe1v9"><div class="relative svelte-1roe1v9" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg svelte-1roe1v9" title="Agent"> <!></button> <!></div> <!> <!> <!> <span class="ml-auto flex items-center gap-1.5 svelte-1roe1v9"><kbd class="hidden text-[10px] text-mk-comment sm:inline svelte-1roe1v9">↵ send · ⇧↵ newline</kbd> <button class="flex h-6 w-6 items-center justify-center rounded-md bg-mk-green text-mk-bg disabled:opacity-40 svelte-1roe1v9" title="Send (Enter)" aria-label="Send"><!></button></span></div></div></div></div>');function sg(t,e){gn(e,!0);let n=yt(e,"sessions",19,()=>[]),r=yt(e,"session",3,""),s=yt(e,"rootPath",3,""),o=yt(e,"target",15,"");Jt(()=>{!o()&&(r()||n()[0])&&o(r()||n()[0])});let a=z(""),l=z(!1),c=0,p=z(!1),u=z(""),_=z(Xe([])),d=z(null),T=z("");const b=Ut(()=>i(l)||i(p)||!!i(u)),w=Ut(()=>{const x=[...i(_)].reverse().find(R=>R.type==="tool");return x?`Running ${x.name}`:i(u)?"Writing":i(T)||"Generating"});let C=z(Xe([])),O=z(""),B=z(null),H=z(null),Z=null,A=z(Xe({agent:"codex",available:[],model:"",effort:"",models:[],efforts:[]})),E=z(""),N=z("");const ne=Ut(()=>(i(A).models.find(x=>x[0]===i(A).model)||[])[1]||i(A).model||"default");let te=z("");async function pe(){if(!v.connectionId){h(te,"");return}try{h(te,(await Le.agentContext(v.connectionId)).context||"",!0)}catch{h(te,"")}}Jt(()=>{v.connectionId,pe()});async function ge(){if(o())try{h(A,{agent:"codex",available:[],model:"",effort:"",models:[],efforts:[],...await Le.sessionAgent(o())},!0)}catch(x){h(A,{agent:i(A).agent,available:[],model:"",effort:"",models:[],efforts:[]},!0),v.setStatus(x.message||"Could not read agent settings")}}async function me(){if(o())try{const x=await Le.chat(o()),R=x.messages||[],j=new Set;for(const Ne of R)Ne.role==="user"&&(Ne.text&&j.add(Ne.text.trim()),Ne.full&&j.add(Ne.full.trim()));const J=i(C).filter(Ne=>Ne._local&&!j.has((Ne.text||"").trim())),G=J.length?[...R,...J]:R,ve=G.length!==i(C).length;h(C,G,!0),h(p,!!x.busy),h(T,x.detail||"",!0);const xe=x.pending||"",Te=x.steps||[],Ce=xe!==i(u)||Te.length!==i(_).length;h(u,xe,!0),h(_,Te,!0),h(O,""),(ve||Ce||i(b))&&i(st)&&he()}catch(x){h(O,x.message||"Could not load chat",!0)}}const Ke=3e3,Ve=600;Jt(()=>{const x=i(b)?Ve:Ke;!o()||c===x||(c=x,clearInterval(Z),Z=setInterval(me,x))});let st=z(!0);function K(){if(!i(B))return;const x=i(B).scrollHeight-i(B).scrollTop-i(B).clientHeight;h(st,x<80)}async function he(){await Qi(),i(B)&&(i(B).scrollTop=i(B).scrollHeight,requestAnimationFrame(()=>{i(B)&&(i(B).scrollTop=i(B).scrollHeight)}))}function oe(){h(st,!0),he()}Jt(()=>{const x=o();h(C,[],!0),h(u,""),h(_,[],!0),h(p,!1),h(st,!0),Z&&clearInterval(Z),c=0,x&&(me(),ge())}),el(()=>{Z&&clearInterval(Z)});async function le(x){if(h(E,""),x!==i(A).agent){h(N,"agent");try{await Le.setSessionAgent(o(),x),await ge(),v.setStatus(`Switched to ${x}`)}catch(R){v.setStatus(R.message||"Could not switch agent")}finally{h(N,"")}}}async function P(x){if(h(E,""),x!==i(A).model){h(N,"model");try{await Le.setSessionModel(o(),x),await ge(),v.setStatus(`Model set to ${x}`)}catch(R){v.setStatus(R.message||"Could not change model")}finally{h(N,"")}}}async function ce(x){if(h(E,""),x!==i(A).effort){h(N,"effort");try{await Le.setSessionEffort(o(),x),await ge(),v.setStatus(`Reasoning effort set to ${x}`)}catch(R){v.setStatus(R.message||"Could not change effort")}finally{h(N,"")}}}function Ye(){const x=v.connection||{},R=v.activeTab,j=R?R.path:v.path||".",J=R?`
Active file contents (first 12,000 characters):
${R.content.slice(0,12e3)}`:"";return`${i(te)||(x.kind==="local"?`[IDE workspace]
Local folder: ${x.workspace_root||"."}
`:`[IDE workspace]
SSH target: ${x.username||"?"}@${x.host||"?"}
`)}
Currently open: ${j}${J}

${i(a).trim()}`}let V=z(!1),Q=z(Xe([]));function ue(x){const R=x.dataTransfer;!R||!(R.types.includes("Files")||R.types.includes("text/x-ide-path"))||(x.preventDefault(),h(V,!0))}async function Qe(x){x.preventDefault(),h(V,!1);const R=x.dataTransfer;if(!R)return;const j=R.getData("text/x-ide-path");if(j){i(Q).includes(j)||h(Q,[...i(Q),j],!0);return}for(const J of Array.from(R.files||[]))try{const G=new FormData;G.append("file",J);const ve=await fetch(`${s()}/api/sessions/${encodeURIComponent(o())}/upload`,{method:"POST",body:G}),xe=await ve.json().catch(()=>({}));if(!ve.ok)throw new Error(xe.error||"Upload failed");xe.path&&!i(Q).includes(xe.path)&&h(Q,[...i(Q),xe.path],!0)}catch(G){v.setStatus(G.message||`Could not attach ${J.name}`)}}const an=x=>{h(Q,i(Q).filter(R=>R!==x),!0)},qt=x=>x.split("/").pop();async function ln(){const x=i(a).trim();if(!x||!o()||i(l))return;const R=i(Q).length?`

Attached files (read them from these paths):
${i(Q).map(G=>`- ${G}`).join(`
`)}`:"",j=Ye()+R;h(l,!0);const J={role:"user",text:i(Q).length?`${x}

${i(Q).map(qt).join(", ")}`:x,ts:Date.now()/1e3,_local:!0};h(C,[...i(C),J],!0),h(a,""),h(Q,[],!0),i(H)&&(i(H).style.height="auto"),he();try{const G=await fetch(`${s()}/api/sessions/${encodeURIComponent(o())}/send`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:j,display:x})}),ve=await G.json().catch(()=>({}));if(!G.ok)throw h(C,i(C).filter(xe=>xe!==J),!0),h(a,x,!0),new Error(ve.error||"Could not send");me(),setTimeout(me,400)}catch(G){v.setStatus(G.message||"Could not send prompt")}finally{h(l,!1)}}function cn(x){x.key==="Enter"&&!x.shiftKey&&(x.preventDefault(),ln())}function Mt(x){const R=x.currentTarget;R.style.height="auto",R.style.height=`${Math.min(R.scrollHeight,200)}px`}const Ln=x=>x.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function Dn(x){try{const R=it.parse(x||"",{breaks:!0,gfm:!0});return Iv.sanitize(R,{FORBID_TAGS:["form","input","button","style","iframe","object","embed"],FORBID_ATTR:["style","srcset"]})}catch{return Ln(x||"")}}function Fn(x){const R=x.full||x.text||"",j=`

`;if(R.startsWith("[IDE workspace")||R.startsWith("[Remote IDE context]")||R.startsWith("[Remote SSH IDE context]")){const J=R.lastIndexOf(j);if(J!==-1)return R.slice(J+j.length)}return R}let be=z(null),Gt=z(!1),Fe=null;async function tr(){if(o())try{const x=await fetch(`${s()}/api/sessions/${encodeURIComponent(o())}/mcp`);h(d,x.ok?await x.json():null,!0)}catch{h(d,null)}}async function Lt(){if(o())try{const R=await(await fetch(`${s()}/api/sessions/${encodeURIComponent(o())}/stats`)).json().catch(()=>({}));h(be,R&&R.available?R:null,!0)}catch{h(be,null)}}Jt(()=>(o(),Lt(),tr(),clearInterval(Fe),Fe=setInterval(Lt,2e4),()=>clearInterval(Fe)));async function $n(){if(!(!o()||i(Gt))){h(Gt,!0);try{const x=await fetch(`${s()}/api/sessions/${encodeURIComponent(o())}/compact`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:"/compact"})}),R=await x.json().catch(()=>({}));if(!x.ok)throw new Error(R.error||"Could not compact");v.setStatus(R.outcome||"Compact requested"),setTimeout(Lt,4e3)}catch(x){v.setStatus(x.message||"Could not compact context")}finally{h(Gt,!1)}}}const br=x=>{const R=Number(x)||0;return R>=1e6?`${(R/1e6).toFixed(1)}M`:R>=1e3?`${(R/1e3).toFixed(1)}k`:String(R)},tn=15,Nr=2e4,xr=Ut(()=>!!o()&&!!i(be)&&(i(be).ctxWindowSize&&(i(be).contextPct||0)>=tn||!i(be).ctxWindowSize&&(i(be).lastInputTokens||0)>=Nr)),nr=x=>x>=90?"text-vs-red":x>=70?"text-vs-yellow":"text-vs-muted";var _n=rg();jt("click",Ss,x=>{var R,j;(j=(R=x.target).closest)!=null&&j.call(R,"[data-menu]")||h(E,"")});var nn=S(_n);{var En=x=>{var R=Nv();y(x,R)};U(nn,x=>{i(V)&&x(En)})}var Dt=g(nn,2),yr=S(Dt);{var rr=x=>{var R=Ov(),j=ie(R,!0);ee(()=>X(j,i(O))),y(x,R)};U(yr,x=>{i(O)&&x(rr)})}var Hn=g(yr,2);_t(Hn,19,()=>i(C),(x,R)=>x.ts+":"+R,(x,R)=>{var j=de(),J=q(j);{var G=xe=>{var Te=zv(),Ce=S(Te),Ne=S(Ce);ii(Ne,{size:11});var ae=g(Ne),ot=g(Ce,2);wl(ot,()=>Dn(Fn(i(R))),!0),ee(()=>X(ae,` ${i(A).agent==="claude"?"Claude":"Codex"}`)),y(xe,Te)},ve=xe=>{var Te=Mv(),Ce=g(S(Te),2),Ne=ie(Ce,!0);ee(ae=>X(Ne,ae),[()=>Fn(i(R))]),y(xe,Te)};U(J,xe=>{i(R).role==="assistant"?xe(G):xe(ve,-1)})}y(x,j)},x=>{var R=de(),j=q(R);{var J=G=>{var ve=Lv(),xe=S(ve);ii(xe,{size:26,strokeWidth:1.3,class:"text-mk-line"});var Te=g(xe,2),Ce=g(S(Te)),Ne=ie(Ce,!0);ee(()=>X(Ne,o()||"the selected session")),y(G,ve)};U(j,G=>{i(O)||G(J)})}y(x,R)});var sr=g(Hn,2);{var An=x=>{var R=Fv();_t(R,21,()=>i(_).filter(j=>j.type==="tool"),Ji,(j,J)=>{var G=Dv(),ve=g(S(G),2),xe=S(ve),Te=ie(xe,!0),Ce=g(xe,2);{var Ne=ae=>{var ot=lc(),Re=ie(ot);ee(()=>X(Re,`(${i(J).detail??""})`)),y(ae,ot)};U(Ce,ae=>{i(J).detail&&ae(Ne)})}ee(()=>X(Te,i(J).name)),y(j,G)}),y(x,R)};U(sr,x=>{i(_).length&&i(b)&&x(An)})}var Cn=g(sr,2);{var or=x=>{var R=Hv(),j=S(R),J=S(j);ii(J,{size:11});var G=g(J),ve=g(j,2),xe=S(ve);wl(xe,()=>Dn(i(u))),ee(()=>X(G,` ${i(A).agent==="claude"?"Claude":"Codex"}`)),y(x,R)};U(Cn,x=>{i(u)&&x(or)})}var Gr=g(Cn,2);{var Kr=x=>{var R=Bv(),j=S(R);gr(j,{size:11,class:"animate-spin"});var J=g(j,2),G=S(J);ee(()=>X(G,i(w))),y(x,R)};U(Gr,x=>{i(b)&&x(Kr)})}Ys(Dt,x=>h(B,x),()=>i(B));var Or=g(Dt,2);{var zr=x=>{var R=Uv(),j=S(R);Ar(j,{size:11});var J=g(j);ee(()=>X(J,` ${i(b)?"Jump to latest — still generating":"Jump to latest"}`)),L("click",R,oe),y(x,R)};U(Or,x=>{i(st)||x(zr)})}var Bn=g(Or,2),bn=S(Bn);{var Un=x=>{var R=qv(),j=q(R);{var J=Re=>{var Je=jv(),nt=q(Je),wt=ie(nt),Ft=g(nt,2),Yt=ie(Ft);ee((at,qe)=>{hn(nt,1,at,"svelte-1roe1v9"),X(wt,`${i(be).contextPct??0??""}% context`),hn(Yt,1,`block h-full rounded-full ${(i(be).contextPct||0)>=90?"bg-vs-red":(i(be).contextPct||0)>=70?"bg-vs-yellow":"bg-mk-green"}`,"svelte-1roe1v9"),ys(Yt,`width: ${qe??""}%`)},[()=>vu(nr(i(be).contextPct||0)),()=>Math.min(100,Math.max(0,i(be).contextPct||0))]),y(Re,Je)};U(j,Re=>{i(be).ctxWindowSize&&Re(J)})}var G=g(j,2),ve=ie(G),xe=g(G,2);{var Te=Re=>{var Je=lc(),nt=ie(Je);ee(wt=>{Ie(Je,"title",wt),X(nt,`${i(d).servers.length??""} MCP`)},[()=>`MCP tools available to this agent: ${i(d).servers.map(wt=>wt.name).join(", ")}`]),y(Re,Je)};U(xe,Re=>{i(d)&&i(d).servers&&i(d).servers.length&&Re(Te)})}var Ce=g(xe,2);{var Ne=Re=>{var Je=Wv();y(Re,Je)};U(Ce,Re=>{i(be).shared&&Re(Ne)})}var ae=g(Ce,2);{var ot=Re=>{var Je=Vv(),nt=ie(Je,!0);ee(()=>X(nt,i(be).model)),y(Re,Je)};U(ae,Re=>{i(be).model&&i(be).model!=="unknown"&&Re(ot)})}ee((Re,Je,nt)=>{Ie(G,"title",`${i(be).messageCount??""} turns · ${Re??""} in · ${Je??""} out`),X(ve,`${nt??""} tokens`)},[()=>br(i(be).totalInput),()=>br(i(be).totalOutput),()=>br(i(be).totalTokens)]),y(x,R)},Mr=x=>{var R=Gv();y(x,R)};U(bn,x=>{i(be)?x(Un):x(Mr,-1)})}var fe=g(bn,2);{var tt=x=>{var R=Kv(),j=S(R);{var J=ve=>{gr(ve,{size:10,class:"animate-spin"})},G=ve=>{rp(ve,{size:10})};U(j,ve=>{i(Gt)?ve(J):ve(G,-1)})}ee(()=>R.disabled=i(Gt)),L("click",R,$n),y(x,R)};U(fe,x=>{i(xr)&&x(tt)})}var je=g(Bn,2);{var ke=x=>{var R=Zv();_t(R,20,()=>i(Q),j=>j,(j,J)=>{var G=Yv(),ve=S(G);lp(ve,{size:10,class:"text-mk-comment"});var xe=g(ve),Te=g(xe);ee((Ce,Ne)=>{Ie(G,"title",J),X(xe,` ${Ce??""} `),Ie(Te,"aria-label",`Remove ${Ne??""}`)},[()=>qt(J),()=>qt(J)]),L("click",Te,()=>an(J)),y(j,G)}),y(x,R)};U(je,x=>{i(Q).length&&x(ke)})}var We=g(je,2),St=S(We),Be=S(St);Ys(Be,x=>h(H,x),()=>i(H));var Ct=g(Be,2),Kt=S(Ct),lt=S(Kt),Rt=S(lt),mt=g(Rt);Ar(mt,{size:11});var Pt=g(lt,2);{var jn=x=>{var R=Xv();_t(R,20,()=>i(A).available.length?i(A).available:["codex"],j=>j,(j,J)=>{var G=cc(),ve=S(G),xe=S(ve);{var Te=Ne=>{wa(Ne,{size:11})};U(xe,Ne=>{J===i(A).agent&&Ne(Te)})}var Ce=g(ve);ee(()=>X(Ce,` ${J==="claude"?"Claude":"Codex"}`)),L("click",G,()=>le(J)),y(j,G)}),y(x,R)};U(Pt,x=>{i(E)==="agent"&&x(jn)})}var It=g(Kt,2);{var Tt=x=>{var R=eg(),j=S(R),J=S(j),G=ie(J,!0),ve=g(J,2);Ar(ve,{size:11,class:"shrink-0"});var xe=g(j,2);{var Te=Ce=>{var Ne=Jv();_t(Ne,21,()=>i(A).models,ae=>ae[0],(ae,ot)=>{var Re=Qv(),Je=S(Re),nt=S(Je);{var wt=at=>{wa(at,{size:11})};U(nt,at=>{i(ot)[0]===i(A).model&&at(wt)})}var Ft=g(Je,2),Yt=ie(Ft,!0);ee(()=>X(Yt,i(ot)[1])),L("click",Re,()=>P(i(ot)[0])),y(ae,Re)}),y(Ce,Ne)};U(xe,Ce=>{i(E)==="model"&&Ce(Te)})}ee(()=>X(G,i(ne))),L("click",j,()=>h(E,i(E)==="model"?"":"model",!0)),y(x,R)};U(It,x=>{i(A).models.length&&x(Tt)})}var gt=g(It,2);{var Wn=x=>{var R=ng(),j=S(R),J=S(j),G=g(J);Ar(G,{size:11});var ve=g(j,2);{var xe=Te=>{var Ce=tg();_t(Ce,20,()=>i(A).efforts,Ne=>Ne,(Ne,ae)=>{var ot=cc(),Re=S(ot),Je=S(Re);{var nt=Ft=>{wa(Ft,{size:11})};U(Je,Ft=>{ae===i(A).effort&&Ft(nt)})}var wt=g(Re);ee(()=>X(wt,` ${ae??""}`)),L("click",ot,()=>ce(ae)),y(Ne,ot)}),y(Te,Ce)};U(ve,Te=>{i(E)==="effort"&&Te(xe)})}ee(()=>X(J,`${(i(A).effort||"effort")??""} `)),L("click",j,()=>h(E,i(E)==="effort"?"":"effort",!0)),y(x,R)};U(gt,x=>{i(A).efforts.length&&x(Wn)})}var kt=g(gt,2);{var Ze=x=>{gr(x,{size:11,class:"animate-spin text-mk-muted"})};U(kt,x=>{i(N)&&x(Ze)})}var $=g(kt,2),F=g(S($),2),W=S(F);{var Ae=x=>{up(x,{size:11})},ze=x=>{Hd(x,{size:13})};U(W,x=>{i(b)?x(Ae):x(ze,-1)})}ee(x=>{X(Rt,`${i(A).agent==="claude"?"Claude":"Codex"} `),F.disabled=x},[()=>i(b)||!i(a).trim()]),jt("dragover",_n,ue),jt("dragleave",_n,()=>h(V,!1)),jt("drop",_n,Qe),jt("scroll",Dt,K),L("keydown",Be,cn),L("input",Be,Mt),pt(Be,()=>i(a),x=>h(a,x)),L("click",lt,()=>h(E,i(E)==="agent"?"":"agent",!0)),L("click",F,ln),y(t,_n),mn()}er(["click","keydown","input"]);var og=I('<span class="hint svelte-e2eyom">searching…</span>'),ag=I('<li><button><span class="name svelte-e2eyom"> </span> <span class="path svelte-e2eyom"> </span> <!></button></li>'),ig=I('<ul class="results svelte-e2eyom"></ul>'),lg=I('<p class="empty svelte-e2eyom"> </p>'),cg=I('<div class="backdrop svelte-e2eyom" role="button" tabindex="-1"></div> <div class="dialog svelte-e2eyom" role="dialog" aria-label="Quick open"><div class="field svelte-e2eyom"><!> <input placeholder="Search files by name…" aria-label="Search files by name" class="svelte-e2eyom"/> <!></div> <!></div>',1);function ug(t,e){gn(e,!0);let n=z(""),r=z(Xe([])),s=z(0),o=z(!1),a=z(null),l=null;Jt(()=>{i(a)&&i(a).focus()}),Jt(()=>{const E=i(n).trim();if(l&&clearTimeout(l),!E){h(r,[],!0);return}l=setTimeout(async()=>{h(o,!0);try{const N=await Le.searchFiles(v.connectionId,v.path||".",E);h(r,N.matches||[],!0),h(s,0)}catch{h(r,[],!0)}finally{h(o,!1)}},180)});async function c(E){var ne;if(!E)return;const N=v.path&&v.path!=="."?`${v.path}/`:"";await v.openFile(`${N}${E.path}`),(ne=e.onclose)==null||ne.call(e)}function p(E){var N;E.key==="Escape"?(E.preventDefault(),(N=e.onclose)==null||N.call(e)):E.key==="ArrowDown"?(E.preventDefault(),h(s,Math.min(i(s)+1,i(r).length-1),!0)):E.key==="ArrowUp"?(E.preventDefault(),h(s,Math.max(i(s)-1,0),!0)):E.key==="Enter"&&(E.preventDefault(),c(i(r)[i(s)]))}var u=cg(),_=q(u),d=g(_,2),T=S(d),b=S(T);nl(b,{size:14});var w=g(b,2);Ys(w,E=>h(a,E),()=>i(a));var C=g(w,2);{var O=E=>{var N=og();y(E,N)};U(C,E=>{i(o)&&E(O)})}var B=g(T,2);{var H=E=>{var N=ig();_t(N,23,()=>i(r),ne=>ne.path,(ne,te,pe)=>{var ge=ag(),me=S(ge);let Ke;var Ve=S(me),st=ie(Ve,!0),K=g(Ve,2),he=ie(K,!0),oe=g(K,2);{var le=P=>{Vd(P,{size:12})};U(oe,P=>{i(pe)===i(s)&&P(le)})}ee(()=>{Ke=hn(me,1,"svelte-e2eyom",null,Ke,{active:i(pe)===i(s)}),X(st,i(te).name),X(he,i(te).path)}),L("click",me,()=>c(i(te))),y(ne,ge)}),y(E,N)},Z=E=>{var N=lg(),ne=ie(N);ee(te=>X(ne,`No files match “${te??""}”.`),[()=>i(n).trim()]),y(E,N)},A=Ut(()=>i(n).trim()&&!i(o));U(B,E=>{i(r).length?E(H):i(A)&&E(Z,1)})}L("click",_,()=>{var E;return(E=e.onclose)==null?void 0:E.call(e)}),L("keydown",_,E=>{var N;return E.key==="Escape"&&((N=e.onclose)==null?void 0:N.call(e))}),L("keydown",w,p),pt(w,()=>i(n),E=>h(n,E)),y(t,u),mn()}er(["click","keydown"]);var fg=I('<div class="terminal-pane svelte-maclc7"><div class="bar svelte-maclc7"><span class="label svelte-maclc7">Terminal</span> <span> </span></div> <div class="screen svelte-maclc7"></div></div>');function dg(t,e){gn(e,!0);let n=yt(e,"rootPath",3,""),r=yt(e,"session",3,""),s=yt(e,"index",3,0),o,a=null,l=null,c=null,p=z("connecting"),u=null,_=0,d=null,T=!1;const b={background:ko.colors["editor.background"],foreground:ko.colors["editor.foreground"],cursor:ko.colors["editorCursor.foreground"],selectionBackground:ko.colors["editor.selectionBackground"],black:"#272822",red:"#f92672",green:"#a6e22e",yellow:"#e6db74",blue:"#66d9ef",magenta:"#ae81ff",cyan:"#a1efe4",white:"#f8f8f2",brightBlack:"#75715e",brightRed:"#f92672",brightGreen:"#a6e22e",brightYellow:"#e6db74",brightBlue:"#66d9ef",brightMagenta:"#ae81ff",brightCyan:"#a1efe4",brightWhite:"#f9f8f5"};function w(){if(!(!l||!a||(c==null?void 0:c.readyState)!==WebSocket.OPEN))try{l.fit(),c.send(JSON.stringify({type:"resize",cols:a.cols,rows:a.rows}))}catch{}}function C(){if(T)return;const N=`${location.protocol==="https:"?"wss":"ws"}://${location.host}${n()}/ws/sessions/${encodeURIComponent(r())}/ide/terminal/${encodeURIComponent(v.connectionId)}?index=${encodeURIComponent(s())}`;c=new WebSocket(N),c.binaryType="arraybuffer",c.onopen=()=>{h(p,"connected"),_=0,w()},c.onmessage=ne=>{a.write(typeof ne.data=="string"?ne.data:new Uint8Array(ne.data))},c.onclose=ne=>{if(T)return;if(ne.code===1008){h(p,"refused"),a==null||a.write(`\r
\x1B[31m— not authorised for this terminal —\x1B[0m\r
`);return}if(_>=6){h(p,"closed"),a==null||a.write(`\r
\x1B[33m— terminal unavailable; reopen the panel to retry —\x1B[0m\r
`);return}h(p,"reconnecting");const te=Math.min(1e3*2**_,1e4);_+=1,d=setTimeout(C,te)},c.onerror=()=>{T||h(p,"error")}}no(async()=>{const[{Terminal:E},{FitAddon:N}]=await Promise.all([Ta(()=>import("./ide-xterm.js"),[],import.meta.url),Ta(()=>import("./ide-addon-fit.js"),[],import.meta.url)]);await Ta(()=>Promise.resolve({}),__vite__mapDeps([2]),import.meta.url),a=new E({theme:b,fontSize:12,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",cursorBlink:!0,scrollback:5e3}),l=new N,a.loadAddon(l),a.open(o),l.fit(),C(),a.onData(ne=>{(c==null?void 0:c.readyState)===WebSocket.OPEN&&c.send(new TextEncoder().encode(ne))}),u=new ResizeObserver(()=>w()),u.observe(o)}),el(()=>{T=!0,d&&clearTimeout(d),u==null||u.disconnect(),c==null||c.close(),a==null||a.dispose()});var O=fg(),B=S(O),H=g(S(B),2),Z=ie(H,!0),A=g(B,2);Ys(A,E=>o=E,()=>o),ee(()=>{hn(H,1,`status ${i(p)??""}`,"svelte-maclc7"),X(Z,i(p))}),y(t,O),mn()}var pg=I('<div class="border-b border-vs-line bg-vs-red/10 px-4 py-2 text-xs text-vs-red"> </div>'),hg=I('<div class="flex items-center gap-2 px-4 py-3 text-xs text-vs-muted"><!> Loading…</div>'),vg=I('<button class="flex w-full items-center gap-2 px-4 py-1 text-left text-[13px] text-vs-fg hover:bg-vs-hover"><!> <span class="truncate"> </span></button>'),gg=I('<div class="px-4 py-3 text-xs text-vs-muted">No sub-folders here. You can still open this folder.</div>'),mg=I('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="flex h-[70vh] w-[min(640px,92vw)] flex-col overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright">Open Folder <span class="ml-1 font-normal text-vs-muted"><!></span></div> <form class="flex gap-2 border-b border-vs-line px-3 py-2"><button type="button" class="flex items-center gap-1 rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover disabled:opacity-40" title="Up one folder"><!> Up</button> <input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-xs text-vs-fg outline-none focus:border-vs-accent" spellcheck="false" aria-label="Folder path"/> <button type="submit" class="rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover">Go</button></form> <!> <div class="min-h-0 flex-1 overflow-y-auto py-1"><!></div> <div class="flex items-center gap-2 border-t border-vs-line px-4 py-3"><span class="flex min-w-0 flex-1 items-center gap-2 text-xs text-vs-muted"><!> <span class="truncate font-mono"> </span></span> <button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40">Open Folder</button></div></div></div>');function _g(t,e){gn(e,!0);let n=z(""),r=z(""),s=z(Xe([])),o=z(""),a=z(!0),l=z("");async function c(oe){h(a,!0),h(o,"");try{const le=v.connectionId?await Le.browseOn(v.connectionId,oe):await Le.browse(oe);h(n,le.path,!0),h(r,le.parent,!0),h(s,le.entries||[],!0),h(l,le.path,!0)}catch(le){h(o,le.message||"Could not open that folder",!0)}finally{h(a,!1)}}no(()=>c(""));function p(oe){oe.preventDefault(),i(l).trim()&&c(i(l).trim())}var u=mg(),_=S(u),d=S(_),T=g(S(d)),b=S(T);{var w=oe=>{var le=yl();ee(()=>X(le,`on ${v.connection.username??""}@${v.connection.host??""}`)),y(oe,le)},C=oe=>{var le=yl("on this server");y(oe,le)};U(b,oe=>{v.connection&&v.connection.kind!=="local"?oe(w):oe(C,-1)})}var O=g(d,2),B=S(O),H=S(B);qd(H,{size:14});var Z=g(B,2),A=g(O,2);{var E=oe=>{var le=pg(),P=ie(le,!0);ee(()=>X(P,i(o))),y(oe,le)};U(A,oe=>{i(o)&&oe(E)})}var N=g(A,2),ne=S(N);{var te=oe=>{var le=hg(),P=S(le);gr(P,{size:13,class:"animate-spin"}),y(oe,le)},pe=oe=>{var le=de(),P=q(le);_t(P,17,()=>i(s),ce=>ce.path,(ce,Ye)=>{var V=vg(),Q=S(V);Jd(Q,{size:14,class:"shrink-0 text-vs-blue"});var ue=g(Q,2),Qe=ie(ue,!0);ee(()=>X(Qe,i(Ye).name)),L("dblclick",V,()=>c(i(Ye).path)),L("click",V,()=>c(i(Ye).path)),y(ce,V)},ce=>{var Ye=gg();y(ce,Ye)}),y(oe,le)};U(ne,oe=>{i(a)?oe(te):oe(pe,-1)})}var ge=g(N,2),me=S(ge),Ke=S(me);ep(Ke,{size:13,class:"shrink-0"});var Ve=g(Ke,2),st=ie(Ve,!0),K=g(me,2),he=g(K,2);ee(()=>{B.disabled=!i(r),Ie(Ve,"title",i(n)),X(st,i(n)),he.disabled=!i(n)||i(a)}),L("click",u,oe=>oe.target===oe.currentTarget&&e.onclose()),L("keydown",u,oe=>oe.key==="Escape"&&e.onclose()),jt("submit",O,p),L("click",B,()=>i(r)&&c(i(r))),pt(Z,()=>i(l),oe=>h(l,oe)),L("click",K,function(...oe){var le;(le=e.onclose)==null||le.apply(this,oe)}),L("click",he,()=>e.onopen(i(n))),y(t,u),mn()}er(["click","keydown","dblclick"]);var bg=I('<p class="px-4 py-2 text-xs text-vs-muted">Open a folder to search it.</p>'),xg=I('<button class="flex w-full items-center gap-2 px-3 py-1 text-left text-[13px] hover:bg-vs-hover"><!> <span class="truncate text-vs-fg"> </span> <span class="ml-auto max-w-[45%] truncate text-[11px] text-vs-muted"> </span></button>'),yg=I('<p class="px-4 py-2 text-xs text-vs-muted"> </p>'),kg=I('<p class="px-4 py-2 text-xs text-vs-muted">Type to search filenames in this workspace.</p>'),wg=I('<div class="flex h-full min-h-0 flex-col"><div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Search</div> <div class="px-3 pb-2"><div class="flex items-center gap-1.5 rounded-sm border border-vs-line bg-vs-input px-2 focus-within:border-vs-accent"><!> <input class="min-w-0 flex-1 bg-transparent py-1 text-xs text-vs-fg outline-none placeholder:text-vs-muted" placeholder="Search filenames" spellcheck="false"/> <!></div></div> <div class="min-h-0 flex-1 overflow-y-auto"><!></div></div>');function Sg(t,e){gn(e,!0);let n=z(""),r=z(Xe([])),s=z(!1),o=z(!1),a=null;Jt(()=>{const H=i(n).trim();if(a&&clearTimeout(a),!H||!v.connectionId){h(r,[],!0),h(o,!1);return}a=setTimeout(async()=>{h(s,!0);try{const Z=await Le.searchFiles(v.connectionId,v.path||".",H);h(r,Z.matches||[],!0)}catch(Z){h(r,[],!0),v.setStatus(Z.message||"Search failed")}finally{h(s,!1),h(o,!0)}},200)});const l=H=>{const Z=(H||"").split("/");return Z.pop(),Z.join("/")};var c=wg(),p=g(S(c),2),u=S(p),_=S(u);nl(_,{size:12,class:"shrink-0 text-vs-muted"});var d=g(_,2),T=g(d,2);{var b=H=>{gr(H,{size:12,class:"shrink-0 animate-spin text-vs-muted"})};U(T,H=>{i(s)&&H(b)})}var w=g(p,2),C=S(w);{var O=H=>{var Z=bg();y(H,Z)},B=H=>{var Z=de(),A=q(Z);_t(A,17,()=>i(r),E=>E.path,(E,N)=>{var ne=xg(),te=S(ne);tl(te,{size:13,class:"shrink-0 text-vs-blue"});var pe=g(te,2),ge=ie(pe,!0),me=g(pe,2),Ke=ie(me,!0);ee((Ve,st)=>{Ie(ne,"title",i(N).path),X(ge,Ve),X(Ke,st)},[()=>i(N).name||i(N).path.split("/").pop(),()=>l(i(N).path)]),L("click",ne,()=>v.openFile(i(N).path)),y(E,ne)},E=>{var N=de(),ne=q(N);{var te=me=>{var Ke=yg(),Ve=ie(Ke);ee(()=>X(Ve,`No files match “${i(n)??""}”.`)),y(me,Ke)},pe=me=>{var Ke=kg();y(me,Ke)},ge=Ut(()=>!i(n).trim());U(ne,me=>{i(o)&&!i(s)?me(te):i(ge)&&me(pe,1)})}y(E,N)}),y(H,Z)};U(C,H=>{v.connectionId?H(B,-1):H(O)})}pt(d,()=>i(n),H=>h(n,H)),y(t,c),mn()}er(["click"]);var Tg=I('<p class="flex items-center gap-2 text-vs-muted"><!> Fetching host key…</p>'),$g=I('<p class="text-vs-red"> </p>'),Eg=I("<p>This host is already trusted. Try connecting again.</p>"),Ag=I('<div class="flex items-baseline gap-2 font-mono text-[11px]"><span class="w-16 shrink-0 text-vs-muted"> </span> <span class="break-all text-vs-fg"> </span></div>'),Cg=I(`<p>The authenticity of <span class="font-mono text-vs-blue"> </span> can't be established. Verify these fingerprints match the server before you continue —
          if they don't, someone may be intercepting the connection.</p> <div class="mt-3 flex flex-col gap-1 rounded-sm border border-vs-line bg-vs-input p-2"></div> <p class="mt-3 text-xs text-vs-muted">Accepting adds the key to <span class="font-mono">~/.ssh/known_hosts</span> on this server.</p>`,1),Rg=I('<button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"> </button>'),Pg=I('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="w-[min(560px,92vw)] overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="flex items-center gap-2 border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright"><!> Unknown host</div> <div class="px-4 py-3 text-[13px] leading-relaxed text-vs-fg"><!></div> <div class="flex justify-end gap-2 border-t border-vs-line px-4 py-3"><button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <!></div></div></div>');function Ig(t,e){gn(e,!0);let n=z(!0),r=z(""),s=z(null),o=z(!1);no(async()=>{try{h(s,await Le.hostKey(v.connectionId),!0)}catch(A){h(r,A.message||"Could not fetch the host key",!0)}finally{h(n,!1)}});async function a(){h(o,!0);try{await Le.trustHost(v.connectionId),e.ontrusted()}catch(A){h(r,A.message||"Could not trust this host",!0),h(o,!1)}}var l=Pg(),c=S(l),p=S(c),u=S(p);cp(u,{size:15,class:"text-vs-yellow"});var _=g(p,2),d=S(_);{var T=A=>{var E=Tg(),N=S(E);gr(N,{size:13,class:"animate-spin"}),y(A,E)},b=A=>{var E=$g(),N=ie(E,!0);ee(()=>X(N,i(r))),y(A,E)},w=A=>{var E=Eg();y(A,E)},C=A=>{var E=Cg(),N=q(E),ne=g(S(N)),te=ie(ne),pe=g(N,2);_t(pe,21,()=>i(s).fingerprints,ge=>ge.fingerprint,(ge,me)=>{var Ke=Ag(),Ve=S(Ke),st=ie(Ve,!0),K=g(Ve,2),he=ie(K,!0);ee(()=>{X(st,i(me).type),X(he,i(me).fingerprint)}),y(ge,Ke)}),ee(()=>X(te,`${i(s).host??""}:${i(s).port??""}`)),y(A,E)};U(d,A=>{var E;i(n)?A(T):i(r)?A(b,1):(E=i(s))!=null&&E.known?A(w,2):A(C,-1)})}var O=g(_,2),B=S(O),H=g(B,2);{var Z=A=>{var E=Rg(),N=ie(E,!0);ee(()=>{E.disabled=i(o),X(N,i(o)?"Trusting…":"Trust and connect")}),L("click",E,a),y(A,E)};U(H,A=>{var E;!i(n)&&!((E=i(s))!=null&&E.known)&&!i(r)&&A(Z)})}L("click",l,A=>A.target===A.currentTarget&&e.onclose()),L("keydown",l,A=>A.key==="Escape"&&e.onclose()),L("click",B,function(...A){var E;(E=e.onclose)==null||E.apply(this,A)}),y(t,l),mn()}er(["click","keydown"]);var Ng=I('<div role="separator" tabindex="0" title="Drag to resize (double-click to reset)"><div></div></div>');function hi(t,e){gn(e,!0);let n=yt(e,"size",15),r=yt(e,"side",3,"right"),s=yt(e,"min",3,120),o=yt(e,"max",3,800),a=yt(e,"onreset",3,null),l=z(!1);const c=r()==="top";function p(b){var Z;b.preventDefault(),h(l,!0);const w=c?b.clientY:b.clientX,C=n(),O=b.currentTarget;(Z=O.setPointerCapture)==null||Z.call(O,b.pointerId);function B(A){const N=(c?A.clientY:A.clientX)-w,ne=r()==="left"||r()==="top"?-N:N;n(Math.round(Math.min(o(),Math.max(s(),C+ne))))}function H(){var A;h(l,!1),(A=O.releasePointerCapture)==null||A.call(O,b.pointerId),window.removeEventListener("pointermove",B),window.removeEventListener("pointerup",H)}window.addEventListener("pointermove",B),window.addEventListener("pointerup",H)}function u(b){const w=b.shiftKey?40:10,C=c?"ArrowUp":r()==="left"?"ArrowLeft":"ArrowRight",O=c?"ArrowDown":r()==="left"?"ArrowRight":"ArrowLeft";if(b.key===C)n(Math.min(o(),n()+w));else if(b.key===O)n(Math.max(s(),n()-w));else return;b.preventDefault()}var _=Ng();let d;var T=ie(_);ee(()=>{d=hn(_,1,`group relative shrink-0 ${c?"h-1 w-full cursor-row-resize":"w-1 cursor-col-resize"}`,null,d,{"bg-vs-accent":i(l)}),Ie(_,"aria-orientation",c?"horizontal":"vertical"),Ie(_,"aria-valuenow",n()),Ie(_,"aria-valuemin",s()),Ie(_,"aria-valuemax",o()),hn(T,1,`absolute ${c?"-top-1 -bottom-1 left-0 right-0":"-left-1 -right-1 top-0 bottom-0"}
           transition-colors group-hover:bg-vs-accent ${i(l)?"bg-vs-accent":""}`)}),L("pointerdown",_,p),L("dblclick",_,()=>{var b;return(b=a())==null?void 0:b()}),L("keydown",_,u),y(t,_),mn()}er(["pointerdown","dblclick","keydown"]);var Og=I('<span class="absolute top-0 bottom-0 left-0 w-0.5 bg-vs-bright"></span>'),zg=I('<span class="absolute right-1.5 bottom-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-vs-status px-1 text-[10px] leading-none font-semibold text-white"> </span>'),Mg=I("<button><!> <!> <!></button>"),uc=I("<option> </option>"),Lg=I('<button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Connection settings" aria-label="Connection settings"><!></button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover hover:text-vs-red" title="Remove workspace" aria-label="Remove workspace"><!></button>',1),Dg=I('<input class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" type="password" placeholder="Password (optional)" autocomplete="new-password"/>'),Fg=I(`<button class="w-full rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Show this host's key fingerprint and trust it">Verify host key…</button>`),Hg=I('<!> <button class="w-full rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"> </button> <!>',1),Bg=I('<p class="mt-1 font-mono text-[11px] break-all text-vs-muted"> </p>'),Ug=I('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="~/.ssh/id_ed25519"/> <textarea class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-[11px] outline-none focus:border-vs-accent" rows="4" placeholder="…or paste a private key (-----BEGIN OPENSSH PRIVATE KEY-----)" spellcheck="false"></textarea>',1),jg=I('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" type="password" placeholder="Password" autocomplete="new-password"/>'),Wg=I('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Host" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="User" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Port" type="number" min="1" max="65535"/> <select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>SSH agent</option><option>Existing key</option><option>Password (saved, encrypted)</option></select> <!> <!>',1),Vg=I('<form class="mt-2 flex flex-col gap-1.5 border-t border-vs-line px-3 pt-2"><select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>This server (local folder)</option><option>Remote host over SSH</option></select> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Label"/> <!> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"/> <div class="flex gap-1 pb-2"><button class="flex-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110" type="submit">Create</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" type="button">Cancel</button></div></form>'),qg=I('<div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Workspaces</div> <div class="flex flex-col gap-2 px-3 pt-1"><select class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" aria-label="Workspace"><option>— select workspace —</option><!></select> <div class="flex gap-1"><button class="flex flex-1 items-center justify-center gap-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"><!> Open Folder</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Add a workspace or SSH connection" aria-label="Add workspace"><!></button> <!></div> <!> <!></div> <!>',1),Gg=I('<aside class="flex shrink-0 flex-col overflow-hidden border-r border-vs-border bg-vs-panel"><!></aside> <!>',1),Kg=I('<div class="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center"><!> <div><h1 class="text-2xl font-light text-vs-fg">Multibuilder IDE</h1> <p class="mt-1 text-sm text-vs-muted">Edit files on this server or on a remote host over SSH.</p></div> <div class="flex flex-col gap-2 text-sm"><button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Open Folder… <kbd class="ml-2 rounded-sm border border-vs-line px-1.5 py-0.5 text-[10px] text-vs-muted">Ctrl+Shift+O</kbd></button> <button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Connect to a host over SSH…</button></div></div>'),Yg=I('<button class="rounded-sm p-0.5 opacity-0 group-hover:opacity-100 hover:bg-vs-line" title="Close terminal — ends the shell"><!></button>'),Zg=I('<span><button class="max-w-[140px] truncate"> </button> <!></span>'),Xg=I('<div class="absolute inset-0"><!></div>'),Qg=I('<!> <div class="flex shrink-0 flex-col border-t border-vs-border bg-vs-bg"><div class="flex items-center gap-1 border-b border-vs-border px-2 py-1 text-[11px]"><!> <div class="flex min-w-0 flex-1 items-center gap-0.5 overflow-x-auto"></div> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover disabled:opacity-40" title="New terminal in this workspace" aria-label="New terminal"><!></button> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover" title="Hide terminals (Ctrl+`) — sessions keep running" aria-label="Hide all terminals"><!></button> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover hover:text-vs-red" title="Close this terminal — ends the shell" aria-label="Close this terminal"><!></button></div> <div class="relative min-h-0 flex-1"><!></div></div>',1),Jg=I('<!> <div class="min-h-0 flex-1"><!></div> <!>',1),em=I(`<!> <aside class="flex shrink-0 flex-col overflow-hidden border-l border-vs-border bg-vs-panel"><div class="flex items-center gap-1.5 border-b border-vs-border px-3 py-1.5"><!> <span class="shrink-0 text-[11px] font-semibold tracking-wide uppercase">AI Agent</span> <select class="ml-auto min-w-0 flex-1 truncate rounded-sm border border-vs-line bg-vs-input px-1.5 py-0.5
                   text-[11px] text-vs-fg outline-none focus:border-vs-accent" title="Agent session — each has its own history"></select> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover disabled:opacity-40" title="New agent session" aria-label="New agent session"><!></button> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover" title="Hide AI Agent" aria-label="Hide AI Agent"><!></button></div> <div class="min-h-0 flex-1"><!></div></aside>`,1),tm=I('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20"><!> <!></button>'),nm=I('<span class="flex items-center gap-1"><!> </span>'),rm=I("<span> </span>"),sm=I('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle terminal (Ctrl+`)"><!> Terminal</button> <button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Focus the tmux window on the host"><!></button>',1),om=I('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle AI Agent panel"><!> Chat</button>'),am=I('<div class="flex gap-2"><input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs outline-none focus:border-vs-accent" placeholder="Host"/> <input class="w-20 rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs outline-none focus:border-vs-accent" type="number" min="1" max="65535" placeholder="Port"/></div> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs outline-none focus:border-vs-accent" placeholder="Username"/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs outline-none focus:border-vs-accent" placeholder="Identity file (optional)"/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs outline-none focus:border-vs-accent" type="password" autocomplete="new-password"/> <textarea rows="3" class="resize-y rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 font-mono text-[11px] outline-none focus:border-vs-accent"></textarea>',1),im=I('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" role="presentation"><div class="flex w-full max-w-[420px] flex-col gap-2 rounded-lg border border-vs-line bg-vs-panel p-4 shadow-2xl"><h3 class="text-sm font-semibold text-vs-fg"> </h3> <p class="mb-1 text-[11px] leading-relaxed text-vs-muted"> </p> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs outline-none focus:border-vs-accent" placeholder="Label"/> <!> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs outline-none focus:border-vs-accent" placeholder="Workspace folder"/> <div class="mt-1 flex justify-end gap-2"><button class="rounded-sm border border-vs-line px-3 py-1 text-xs hover:bg-vs-hover">Cancel</button> <button class="rounded-sm bg-vs-status px-3 py-1 text-xs text-white hover:brightness-110 disabled:opacity-40"> </button></div></div></div>'),lm=I('<div class="flex h-full flex-col overflow-hidden bg-vs-bg font-sans text-vs-fg"><header class="flex items-center gap-2 border-b border-vs-border bg-vs-titlebar px-3 py-1 text-xs"><!> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover" title="Open a folder on this server (Ctrl+Shift+O)">Open Folder…</button> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40" title="Open a file (Ctrl+P)">Open File…</button> <button><!> Terminal</button> <span class="mx-auto truncate text-vs-muted"> </span> <span><!> </span></header> <div class="flex min-h-0 flex-1"><nav class="flex w-12 shrink-0 flex-col items-center bg-vs-activity"><!> <div class="mt-auto flex flex-col items-center pb-1"><button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Account — signed in to the dashboard" aria-label="Account"><!></button> <button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Toggle side bar (Ctrl+B)" aria-label="Toggle side bar"><!></button></div></nav> <!> <section class="flex min-h-0 min-w-0 flex-1 flex-col"><!></section> <!></div> <footer class="flex shrink-0 items-center gap-3 bg-vs-status px-3 py-0.5 text-[12px] text-white"><!> <!> <span class="truncate"> </span> <span class="ml-auto flex items-center gap-3"><!> <span class="max-w-[40vw] truncate opacity-80"> </span> <!> <!></span></footer> <!> <!> <!> <!></div>');function cm(t,e){gn(e,!0);let n=yt(e,"sessions",19,()=>[]),r=yt(e,"session",3,""),s=yt(e,"rootPath",3,""),o=z(Xe([...n()])),a=z(Xe(r()||n()[0]||"")),l=z(!1),c=z(!1),p=z(!1),u=z(Xe({label:"",host:"",username:"",port:22,identity_file:"",password:"",private_key:"",workspace_root:""}));function _(){v.connection&&(h(w,"remote"),h(N,!0),i(c)||d())}function d(){const $=v.connection;$&&(h(u,{label:$.label||"",host:$.host||"",username:$.username||"",port:$.port||22,identity_file:$.identity_file||"",password:"",private_key:"",workspace_root:$.workspace_root||""},!0),h(c,!0))}async function T(){var $;if(!(!v.connection||i(p))){h(p,!0);try{const F={...i(u),port:Number(i(u).port)||22};F.password||delete F.password,F.private_key||delete F.private_key,await Le.updateConnection(v.connection.id,F),await(($=v.loadConnections)==null?void 0:$.call(v)),h(c,!1),v.setStatus("Connection settings saved")}catch(F){v.setStatus(F.message||"Could not save connection settings")}finally{h(p,!1)}}}async function b(){var $;if(!i(l)){h(l,!0);try{const F=((($=v.connection)==null?void 0:$.label)||r()||"agent").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,20)||"agent";let W=F;for(let R=2;i(o).includes(W);R+=1)W=`${F}-${R}`;const Ae=await fetch(`${s()}/api/sessions/create`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:W,agent:"claude"})}),ze=await Ae.json().catch(()=>({}));if(!Ae.ok)throw new Error(ze.error||"Could not create session");const x=ze.session||ze.name||W;i(o).includes(x)||h(o,[...i(o),x],!0),h(a,x,!0),v.setStatus(`Agent session "${x}" created`)}catch(F){v.setStatus(F.message||"Could not create agent session")}finally{h(l,!1)}}}let w=z("files");function C($,F){try{const W=localStorage.getItem(`ide.show.${$}`);return W===null?F:W==="1"}catch{return F}}let O=z(Xe(C("chat",!0)));const B={sidebar:240,chat:320,panel:240};function H($){try{const F=localStorage.getItem(`ide.size.${$}`),W=Number(F);return Number.isFinite(W)&&W>0?W:B[$]}catch{return B[$]}}let Z=z(Xe(H("sidebar"))),A=z(Xe(H("chat"))),E=z(Xe(H("panel")));Jt(()=>{try{localStorage.setItem("ide.size.sidebar",String(i(Z))),localStorage.setItem("ide.size.chat",String(i(A))),localStorage.setItem("ide.size.panel",String(i(E))),localStorage.setItem("ide.show.terminal",i(te)?"1":"0"),localStorage.setItem("ide.show.chat",i(O)?"1":"0"),localStorage.setItem("ide.show.sidebar",i(N)?"1":"0")}catch{}});let N=z(Xe(C("sidebar",!0))),ne=z(!1),te=z(Xe(C("terminal",!1)));const pe=8;let ge=z(Xe([0])),me=z(0);function Ke(){if(i(ge).length>=pe)return;let $=0;for(;i(ge).includes($);)$+=1;$>=pe||(h(ge,[...i(ge),$].sort((F,W)=>F-W),!0),h(me,$,!0))}async function Ve($){const F=i(ge).indexOf($),W=i(ge).filter(Ae=>Ae!==$);h(ge,W.length?W:[0],!0),i(me)===$&&h(me,i(ge)[Math.min(F,i(ge).length-1)],!0);try{await Le.closeTerminal(v.connectionId,$)}catch(Ae){v.setStatus(Ae.message||"Could not close terminal")}}let st=z("");Jt(()=>{const $=v.connectionId,F=v.connectionState;if(!$||F!=="connected")return;const W=`${$}|${F}`;i(st)!==W&&(h(st,W),h(ge,[0],!0),h(me,0),Le.listTerminals($).then(Ae=>{const ze=((Ae==null?void 0:Ae.terminals)||[]).filter(x=>Number.isInteger(x));ze.length&&(h(ge,ze,!0),ze.includes(i(me))||h(me,ze[0],!0))}).catch(()=>{}))});let K=z(!1);Jt(()=>{i(te)&&h(K,!0)});let he=z(!1),oe=z(!1),le=z(""),P=z(Xe({kind:"local",label:"",host:"",username:"",port:22,auth_mode:"agent",identity_file:"",password:"",private_key:"",workspace_root:"",max_file_bytes:1e6}));const ce={idle:{icon:Wd,label:"Not connected"},connecting:{icon:Ud,label:"Connecting…"},connected:{icon:Bd,label:"Connected"},reconnect:{icon:Il,label:"Reconnect required"},error:{icon:Il,label:"Error"}},Ye=Ut(()=>ce[v.connectionState].icon),V=Ut(()=>{var $;return(($=v.connection)==null?void 0:$.kind)==="local"}),Q=[{id:"files",icon:Xd,label:"Explorer",keys:"Ctrl+Shift+E"},{id:"search",icon:nl,label:"Search",keys:"Ctrl+Shift+F"},{id:"git",icon:Ri,label:"Source Control",keys:"Ctrl+Shift+G"},{id:"remote",icon:op,label:"Remote Explorer",keys:""}];no(async()=>{await v.loadConnections(),v.connectionId&&await v.refreshStatus()});function ue($){i(w)===$&&i(N)?h(N,!1):(h(w,$,!0),h(N,!0))}async function Qe($){v.connectionId=$.currentTarget.value,v.resetWorkspaceView(),await v.refreshStatus()}async function an($){h(oe,!1);try{const F=$.split("/").filter(Boolean).pop()||$,W=v.connection;if(W&&W.kind!=="local"){await Le.setWorkspaceRoot(W.id,$,F),await v.loadConnections(),v.resetWorkspaceView(),await v.refreshFiles("."),v.setStatus(`Opened ${$} on ${W.username}@${W.host}`),h(w,"files"),h(N,!0);return}if(W&&W.kind==="local"){await Le.setWorkspaceRoot(W.id,$,F),await v.loadConnections(),v.resetWorkspaceView(),await v.refreshFiles("."),v.setStatus(`Opened ${$}`),h(w,"files"),h(N,!0);return}const Ae=await Le.createConnection({kind:"local",label:F,workspace_root:$,max_file_bytes:1e6});await v.loadConnections(),v.connectionId=Ae.connection.id,v.resetWorkspaceView(),await v.connect(""),h(w,"files"),h(N,!0)}catch(F){v.setStatus(F.message||"Could not open folder")}}async function qt($){$.preventDefault();try{const F=await Le.createConnection({...i(P),port:Number(i(P).port)});h(he,!1),h(P,{...i(P),label:"",host:"",username:"",password:"",private_key:""},!0),await v.loadConnections(),v.connectionId=F.connection.id,await v.refreshStatus()}catch(F){v.setStatus(F.message||"Could not create connection")}}async function ln(){const $=v.connection;if(!$)return;const F=$.kind==="local"?"workspace":"connection";if(confirm(`Remove ${F} "${$.label}"? Saved tabs are cleared; files are untouched.`))try{await Le.deleteConnection($.id),v.connectionId="",v.resetWorkspaceView(),await v.loadConnections()}catch(W){v.setStatus(W.message||"Could not delete")}}async function cn(){try{const $=await Le.focusTerminal(v.connectionId);v.setStatus(`Focused ${$.window_name}`,"tmux window selected")}catch($){v.setStatus($.message||"Could not focus terminal")}}function Mt($){var ze,x,R,j;const F=$.ctrlKey||$.metaKey,W=$.key.toLowerCase(),Ae=((x=(ze=$.target)==null?void 0:ze.matches)==null?void 0:x.call(ze,"input, textarea, select"))&&!((j=(R=$.target).closest)!=null&&j.call(R,".monaco-editor"));F&&W==="s"?($.preventDefault(),v.saveActive()):F&&W==="p"&&!Ae?($.preventDefault(),v.connectionId&&h(ne,!0)):F&&$.shiftKey&&W==="o"?($.preventDefault(),h(oe,!0)):F&&$.shiftKey&&["e","f","g"].includes(W)?($.preventDefault(),h(w,{e:"files",f:"search",g:"git"}[W],!0),h(N,!0)):F&&W==="b"&&!Ae?($.preventDefault(),h(N,!i(N))):F&&W==="`"?($.preventDefault(),v.connectionState==="connected"&&h(te,!i(te))):$.key==="Escape"&&i(ne)&&($.preventDefault(),h(ne,!1))}var Ln=lm();jt("keydown",Ss,Mt);var Dn=S(Ln),Fn=S(Dn);Nl(Fn,{size:15,class:"shrink-0 text-vs-blue"});var be=g(Fn,2),Gt=g(be,2),Fe=g(Gt,2);let tr;var Lt=S(Fe);Ll(Lt,{size:13});var $n=g(Fe,2),br=ie($n,!0),tn=g($n,2),Nr=S(tn);Sl(Nr,()=>i(Ye),($,F)=>{F($,{size:12})});var xr=g(Nr),nr=g(Dn,2),_n=S(nr),nn=S(_n);_t(nn,17,()=>Q,$=>$.id,($,F)=>{var W=Mg(),Ae=S(W);{var ze=J=>{var G=Og();y(J,G)};U(Ae,J=>{i(w)===i(F).id&&i(N)&&J(ze)})}var x=g(Ae,2);Sl(x,()=>i(F).icon,(J,G)=>{G(J,{size:24,strokeWidth:1.4})});var R=g(x,2);{var j=J=>{var G=zg(),ve=ie(G,!0);ee(()=>X(ve,v.gitDirtyCount)),y(J,G)};U(R,J=>{i(F).id==="git"&&v.gitDirtyCount&&J(j)})}ee(()=>{hn(W,1,`relative flex h-12 w-12 items-center justify-center ${i(w)===i(F).id&&i(N)?"text-vs-bright":"text-vs-muted hover:text-vs-fg"}`),Ie(W,"title",i(F).keys?`${i(F).label} (${i(F).keys})`:i(F).label),Ie(W,"aria-label",i(F).label)}),L("click",W,()=>ue(i(F).id)),y($,W)});var En=g(nn,2),Dt=S(En),yr=S(Dt);jd(yr,{size:24,strokeWidth:1.4});var rr=g(Dt,2),Hn=S(rr);ip(Hn,{size:24,strokeWidth:1.4});var sr=g(_n,2);{var An=$=>{var F=Gg(),W=q(F),Ae=S(W);{var ze=G=>{kp(G,{})},x=G=>{Sg(G,{})},R=G=>{Up(G,{})},j=G=>{var ve=qg(),xe=g(q(ve),2),Te=S(xe),Ce=S(Te);Ce.value=Ce.__value="";var Ne=g(Ce);_t(Ne,17,()=>v.connections,ct=>ct.id,(ct,ut)=>{var ft=uc(),xn=ie(ft),un={};ee(()=>{X(xn,`${i(ut).kind==="local"?"🖿 ":"⇅ "}${i(ut).label??""}`),un!==(un=i(ut).id)&&(ft.value=(ft.__value=un)??"")}),y(ct,ft)});var ae;yo(Te);var ot=g(Te,2),Re=S(ot),Je=S(Re);ai(Je,{size:13});var nt=g(Re,2),wt=S(nt);Ao(wt,{size:13});var Ft=g(nt,2);{var Yt=ct=>{var ut=Lg(),ft=q(ut),xn=S(ft);Ml(xn,{size:13});var un=g(ft,2),Dr=S(un);Dl(Dr,{size:13}),L("click",ft,d),L("click",un,ln),y(ct,ut)};U(Ft,ct=>{v.connection&&ct(Yt)})}var at=g(ot,2);{var qe=ct=>{var ut=Hg(),ft=q(ut);{var xn=fn=>{var Vn=Dg();pt(Vn,()=>i(le),os=>h(le,os)),y(fn,Vn)};U(ft,fn=>{!i(V)&&!v.connection.has_password&&fn(xn)})}var un=g(ft,2),Dr=ie(un,!0),Es=g(un,2);{var so=fn=>{var Vn=Fg();L("click",Vn,()=>v.needsHostKey=!0),y(fn,Vn)};U(Es,fn=>{i(V)||fn(so)})}ee(()=>X(Dr,i(V)?"Open workspace":"Connect")),L("click",un,()=>v.connect(i(le))),y(ct,ut)};U(at,ct=>{v.connection&&v.connectionState!=="connected"&&ct(qe)})}var Ht=g(at,2);{var ar=ct=>{var ut=Bg(),ft=ie(ut,!0);ee(()=>X(ft,v.connection.workspace_root)),y(ct,ut)};U(Ht,ct=>{v.connection&&ct(ar)})}var ir=g(xe,2);{var Lr=ct=>{var ut=Vg(),ft=S(ut),xn=S(ft);xn.value=xn.__value="local";var un=g(xn);un.value=un.__value="ssh",yo(ft);var Dr=g(ft,2),Es=g(Dr,2);{var so=D=>{var f=Wg(),k=q(f),M=g(k,2),Y=g(M,2),se=g(Y,2),ye=S(se);ye.value=ye.__value="agent";var et=g(ye);et.value=et.__value="key";var dt=g(et);dt.value=dt.__value="password",yo(se);var Zt=g(se,2);{var rn=Bt=>{var As=Ug(),da=q(As),Hu=g(da,2);pt(da,()=>i(P).identity_file,Ga=>i(P).identity_file=Ga),pt(Hu,()=>i(P).private_key,Ga=>i(P).private_key=Ga),y(Bt,As)};U(Zt,Bt=>{i(P).auth_mode==="key"&&Bt(rn)})}var oo=g(Zt,2);{var Xt=Bt=>{var As=jg();pt(As,()=>i(P).password,da=>i(P).password=da),y(Bt,As)};U(oo,Bt=>{i(P).auth_mode==="password"&&Bt(Xt)})}pt(k,()=>i(P).host,Bt=>i(P).host=Bt),pt(M,()=>i(P).username,Bt=>i(P).username=Bt),pt(Y,()=>i(P).port,Bt=>i(P).port=Bt),ni(se,()=>i(P).auth_mode,Bt=>i(P).auth_mode=Bt),y(D,f)};U(Es,D=>{i(P).kind==="ssh"&&D(so)})}var fn=g(Es,2),Vn=g(fn,2),os=g(S(Vn),2);ee(()=>{Ie(fn,"placeholder",i(P).kind==="local"?"/var/www/app":"Workspace root"),fn.required=i(P).kind==="local"}),jt("submit",ut,qt),ni(ft,()=>i(P).kind,D=>i(P).kind=D),pt(Dr,()=>i(P).label,D=>i(P).label=D),pt(fn,()=>i(P).workspace_root,D=>i(P).workspace_root=D),L("click",os,()=>h(he,!1)),y(ct,ut)};U(ir,ct=>{i(he)&&ct(Lr)})}ee(()=>{ae!==(ae=v.connectionId)&&(Te.value=(Te.__value=ae)??"",Ro(Te,ae))}),L("change",Te,Qe),L("click",Re,()=>h(oe,!0)),L("click",nt,()=>h(he,!i(he))),y(G,ve)};U(Ae,G=>{i(w)==="files"?G(ze):i(w)==="search"?G(x,1):i(w)==="git"?G(R,2):G(j,-1)})}var J=g(W,2);hi(J,{side:"right",min:170,max:620,onreset:()=>h(Z,B.sidebar,!0),get size(){return i(Z)},set size(G){h(Z,G,!0)}}),ee(()=>ys(W,`width: ${i(Z)??""}px`)),y($,F)};U(sr,$=>{i(N)&&$(An)})}var Cn=g(sr,2),or=S(Cn);{var Gr=$=>{var F=Kg(),W=S(F);Nl(W,{size:64,strokeWidth:1,class:"text-vs-line"});var Ae=g(W,4),ze=S(Ae),x=S(ze);ai(x,{size:16});var R=g(ze,2),j=S(R);zl(j,{size:16}),L("click",ze,()=>h(oe,!0)),L("click",R,()=>{h(w,"remote"),h(N,!0),h(he,!0)}),y($,F)},Kr=$=>{var F=Jg(),W=q(F);Jp(W,{});var Ae=g(W,2),ze=S(Ae);Kp(ze,{});var x=g(Ae,2);{var R=j=>{var J=Qg(),G=q(J);{var ve=at=>{hi(at,{side:"top",min:120,max:640,onreset:()=>h(E,B.panel,!0),get size(){return i(E)},set size(qe){h(E,qe,!0)}})};U(G,at=>{i(te)&&at(ve)})}var xe=g(G,2),Te=S(xe),Ce=S(Te);Ll(Ce,{size:13,class:"mx-1 shrink-0"});var Ne=g(Ce,2);_t(Ne,20,()=>i(ge),at=>at,(at,qe)=>{var Ht=Zg(),ar=S(Ht),ir=ie(ar,!0),Lr=g(ar,2);{var ct=ut=>{var ft=Yg(),xn=S(ft);Na(xn,{size:11}),ee(()=>Ie(ft,"aria-label",`Close terminal ${qe+1}`)),L("click",ft,()=>Ve(qe)),y(ut,ft)};U(Lr,ut=>{i(ge).length>1&&ut(ct)})}ee(()=>{var ut;hn(Ht,1,`group flex shrink-0 items-center gap-1 rounded-sm px-2 py-0.5
                           ${qe===i(me)?"bg-vs-hover text-vs-fg":"text-vs-muted hover:text-vs-fg"}`),X(ir,qe===0?((ut=v.connection)==null?void 0:ut.label)||"Terminal":`Terminal ${qe+1}`)}),L("click",ar,()=>h(me,qe,!0)),y(at,Ht)});var ae=g(Ne,2),ot=S(ae);Ao(ot,{size:14});var Re=g(ae,2),Je=S(Re);Ar(Je,{size:15});var nt=g(Re,2),wt=S(nt);Dl(wt,{size:13});var Ft=g(Te,2),Yt=S(Ft);gd(Yt,()=>v.connectionId,at=>{var qe=de(),Ht=q(qe);_t(Ht,16,()=>i(ge),ar=>ar,(ar,ir)=>{var Lr=Xg(),ct=S(Lr);dg(ct,{get rootPath(){return s()},get session(){return r()},get index(){return ir}}),ee(()=>Ie(Lr,"hidden",ir!==i(me))),y(ar,Lr)}),y(at,qe)}),ee(()=>{ys(xe,`height: ${i(E)??""}px`),Ie(xe,"hidden",!i(te)),ae.disabled=i(ge).length>=pe}),L("click",ae,Ke),L("click",Re,()=>h(te,!1)),L("click",nt,()=>Ve(i(me))),y(j,J)};U(x,j=>{i(K)&&v.connectionState==="connected"&&j(R)})}y($,F)};U(or,$=>{v.connectionId?$(Kr,-1):$(Gr)})}var Or=g(Cn,2);{var zr=$=>{var F=em(),W=q(F);hi(W,{side:"left",min:260,max:760,onreset:()=>h(A,B.chat,!0),get size(){return i(A)},set size(ae){h(A,ae,!0)}});var Ae=g(W,2),ze=S(Ae),x=S(ze);Ol(x,{size:13,class:"shrink-0"});var R=g(x,4);_t(R,20,()=>i(o),ae=>ae,(ae,ot)=>{var Re=uc(),Je=ie(Re,!0),nt={};ee(()=>{X(Je,ot),nt!==(nt=ot)&&(Re.value=(Re.__value=nt)??"")}),y(ae,Re)}),yo(R);var j=g(R,2),J=S(j);{var G=ae=>{gr(ae,{size:13,class:"animate-spin"})},ve=ae=>{Ao(ae,{size:14})};U(J,ae=>{i(l)?ae(G):ae(ve,-1)})}var xe=g(j,2),Te=S(xe);Na(Te,{size:14});var Ce=g(ze,2),Ne=S(Ce);sg(Ne,{get sessions(){return i(o)},get session(){return r()},get rootPath(){return s()},get target(){return i(a)},set target(ae){h(a,ae,!0)}}),ee(()=>{ys(Ae,`width: ${i(A)??""}px`),j.disabled=i(l)}),ni(R,()=>i(a),ae=>h(a,ae)),L("click",j,b),L("click",xe,()=>h(O,!1)),y($,F)};U(Or,$=>{i(O)&&$(zr)})}var Bn=g(nr,2),bn=S(Bn);{var Un=$=>{var F=tm(),W=S(F);{var Ae=j=>{ai(j,{size:12})},ze=j=>{zl(j,{size:12})};U(W,j=>{i(V)?j(Ae):j(ze,-1)})}var x=g(W),R=g(x);Ml(R,{size:11,class:"opacity-70"}),ee(()=>{Ie(F,"title",`${v.connection.workspace_root??""} — click for connection settings`),X(x,` ${v.connection.label??""} `)}),L("click",F,_),y($,F)};U(bn,$=>{v.connection&&$(Un)})}var Mr=g(bn,2);{var fe=$=>{var F=nm(),W=S(F);Ri(W,{size:12});var Ae=g(W);ee(()=>X(Ae,` ${v.gitBranch??""}`)),y($,F)};U(Mr,$=>{v.gitBranch&&$(fe)})}var tt=g(Mr,2),je=ie(tt,!0),ke=g(tt,2),We=S(ke);{var St=$=>{var F=rm(),W=ie(F);ee(()=>X(W,`${v.dirtyCount??""} unsaved`)),y($,F)};U(We,$=>{v.dirtyCount&&$(St)})}var Be=g(We,2),Ct=ie(Be,!0),Kt=g(Be,2);{var lt=$=>{var F=sm(),W=q(F),Ae=S(W);ap(Ae,{size:12});var ze=g(W,2),x=S(ze);Kd(x,{size:12}),L("click",W,()=>h(te,!i(te))),L("click",ze,cn),y($,F)};U(Kt,$=>{v.connectionState==="connected"&&$(lt)})}var Rt=g(Kt,2);{var mt=$=>{var F=om(),W=S(F);Ol(W,{size:12}),L("click",F,()=>h(O,!i(O))),y($,F)};U(Rt,$=>{$(mt)})}var Pt=g(Bn,2);{var jn=$=>{ug($,{onclose:()=>h(ne,!1)})};U(Pt,$=>{i(ne)&&$(jn)})}var It=g(Pt,2);{var Tt=$=>{_g($,{onopen:an,onclose:()=>h(oe,!1)})};U(It,$=>{i(oe)&&$(Tt)})}var gt=g(It,2);{var Wn=$=>{var F=im(),W=S(F),Ae=S(W),ze=ie(Ae,!0),x=g(Ae,2),R=ie(x,!0),j=g(x,2),J=g(j,2);{var G=ae=>{var ot=am(),Re=q(ot),Je=S(Re),nt=g(Je,2),wt=g(Re,2),Ft=g(wt,2),Yt=g(Ft,2),at=g(Yt,2);ee(()=>{Ie(Yt,"placeholder",v.connection.has_password?"Password stored — type to replace":"Password (optional)"),Ie(at,"placeholder",v.connection.has_private_key?"Private key stored — paste a new one to replace":"Paste a private key (optional)")}),pt(Je,()=>i(u).host,qe=>i(u).host=qe),pt(nt,()=>i(u).port,qe=>i(u).port=qe),pt(wt,()=>i(u).username,qe=>i(u).username=qe),pt(Ft,()=>i(u).identity_file,qe=>i(u).identity_file=qe),pt(Yt,()=>i(u).password,qe=>i(u).password=qe),pt(at,()=>i(u).private_key,qe=>i(u).private_key=qe),y(ae,ot)};U(J,ae=>{i(V)||ae(G)})}var ve=g(J,2),xe=g(ve,2),Te=S(xe),Ce=g(Te,2),Ne=ie(Ce,!0);ee(()=>{X(ze,i(V)?"Folder settings":"SSH connection settings"),X(R,i(V)?"Where this workspace opens.":"Secrets are never shown — leave a field blank to keep what is stored."),Ce.disabled=i(p),X(Ne,i(p)?"Saving…":"Save")}),L("click",F,ae=>{ae.target===ae.currentTarget&&h(c,!1)}),L("keydown",F,ae=>{ae.key==="Escape"&&h(c,!1)}),pt(j,()=>i(u).label,ae=>i(u).label=ae),pt(ve,()=>i(u).workspace_root,ae=>i(u).workspace_root=ae),L("click",Te,()=>h(c,!1)),L("click",Ce,T),y($,F)};U(gt,$=>{i(c)&&v.connection&&$(Wn)})}var kt=g(gt,2);{var Ze=$=>{Ig($,{onclose:()=>v.needsHostKey=!1,ontrusted:async()=>{v.needsHostKey=!1,await v.connect(i(le))}})};U(kt,$=>{v.needsHostKey&&$(Ze)})}ee(()=>{var $;Gt.disabled=!v.connectionId,tr=hn(Fe,1,"flex items-center gap-1 rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40",null,tr,{"text-vs-bright":i(te)}),Fe.disabled=v.connectionState!=="connected",Ie(Fe,"title",v.connectionState==="connected"?"Toggle terminal (Ctrl+`)":"Open a workspace to use the terminal"),Ie($n,"title",($=v.connection)==null?void 0:$.workspace_root),X(br,v.connection?`${v.connection.label} — Multibuilder IDE`:"Multibuilder IDE"),hn(tn,1,`flex items-center gap-1 ${v.connectionState==="connected"?"text-vs-green":v.connectionState==="connecting"?"text-vs-yellow":v.connectionState==="idle"?"text-vs-muted":"text-vs-red"}`),X(xr,` ${ce[v.connectionState].label??""}`),X(je,v.statusText),X(Ct,v.detailText)}),L("click",be,()=>h(oe,!0)),L("click",Gt,()=>h(ne,!0)),L("click",Fe,()=>h(te,!i(te))),L("click",Dt,()=>v.setStatus("Signed in to the Multibuilder dashboard")),L("click",rr,()=>h(N,!i(N))),y(t,Ln),mn()}er(["click","change","keydown"]);function Fu(t,e){return dd(cm,{target:t,props:e})}function fc(){const t=document.getElementById("ide-root");if(!t||t.dataset.mounted)return;t.dataset.mounted="1";const e=window.__IDE_BOOTSTRAP__||{};Fu(t,{sessions:e.sessions||[],session:e.session||"",rootPath:e.rootPath||""})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",fc):fc();window.mountRemoteIde=Fu;export{Ta as _};
