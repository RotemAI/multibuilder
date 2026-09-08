const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ide-monaco.js","./ide2.css","./ide3.css"])))=>i.map(i=>d[i]);
var Bu=Object.defineProperty;var fl=t=>{throw TypeError(t)};var Uu=(t,e,n)=>e in t?Bu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Oe=(t,e,n)=>Uu(t,typeof e!="symbol"?e+"":e,n),Ka=(t,e,n)=>e.has(t)||fl("Cannot "+n);var m=(t,e,n)=>(Ka(t,e,"read from private field"),n?n.call(t):e.get(t)),re=(t,e,n)=>e.has(t)?fl("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Pe=(t,e,n,r)=>(Ka(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),je=(t,e,n)=>(Ka(t,e,"access private method"),n);var Ha=Array.isArray,ju=Array.prototype.indexOf,$a=Array.prototype.includes,Ba=Array.from,vc=Object.defineProperty,ts=Object.getOwnPropertyDescriptor,gc=Object.getOwnPropertyDescriptors,Wu=Object.prototype,Vu=Array.prototype,Di=Object.getPrototypeOf,dl=Object.isExtensible;function ao(t){return typeof t=="function"}const qu=()=>{};function Gu(t){return t()}function vi(t){for(var e=0;e<t.length;e++)t[e]()}function mc(){var t,e,n=new Promise((r,s)=>{t=r,e=s});return{promise:n,resolve:t,reject:e}}function Ku(t,e){if(Array.isArray(t))return t;if(!(Symbol.iterator in t))return Array.from(t);const n=[];for(const r of t)if(n.push(r),n.length===e)break;return n}const Ut=2,Ws=4,aa=8,Fi=1<<24,lr=16,qn=32,Ur=64,gi=128,Hi=256,Vn=512,It=1024,Nt=2048,dr=4096,dn=8192,wn=16384,Zs=32768,Ea=1<<25,rs=65536,Aa=1<<17,Yu=1<<18,Xs=1<<19,_c=1<<20,wr=1<<25,ks=65536,Ca=1<<21,Os=1<<22,ns=1<<23,$r=Symbol("$state"),bc=Symbol("component"),xc=Symbol("legacy props"),Zu=Symbol(""),_a=Symbol("attributes"),mi=Symbol("class"),_i=Symbol("style"),vo=Symbol("text"),ba=Symbol("form reset"),ia=new class extends Error{constructor(){super(...arguments);Oe(this,"name","StaleReactionError");Oe(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var dc;const Bi=!!((dc=globalThis.document)!=null&&dc.contentType)&&globalThis.document.contentType.includes("xml"),Xu=1,Qu=2,yc=4,Ju=8,ef=16,tf=1,nf=2,kc=4,rf=8,sf=16,of=1,af=2,$t=Symbol("uninitialized"),wc="http://www.w3.org/1999/xhtml",Sc="http://www.w3.org/2000/svg",lf="http://www.w3.org/1998/Math/MathML",cf="@attach";function uf(){console.warn("https://svelte.dev/e/derived_inert")}function ff(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function df(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Tc(t){return t===this.v}function pf(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function $c(t){return!pf(t,this.v)}function Ec(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function hf(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function vf(t,e,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function gf(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function mf(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function _f(t){throw new Error("https://svelte.dev/e/effect_orphan")}function bf(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function xf(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function yf(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function kf(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function wf(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Sf(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Qs=!1;function Tf(){Qs=!0}let ht=null;function Vs(t){ht=t}function pn(t,e=!1,n){ht={p:ht,i:!1,c:null,e:null,s:t,x:null,r:Me,l:Qs&&!e?{s:null,u:null,$:[]}:null}}function hn(t){var e=ht,n=e.e;if(n!==null){e.e=null;for(var r of n)Zc(r)}return e.i=!0,ht=e.p,Ui(t)}function Ui(t={}){return vc(t,bc,{value:!0}),t}function Js(){return!Qs||ht!==null&&ht.l===null}let fs=[];function Ac(){var t=fs;fs=[],vi(t)}function Sr(t){if(fs.length===0&&!$o){var e=fs;queueMicrotask(()=>{e===fs&&Ac()})}fs.push(t)}function $f(){for(;fs.length>0;)Ac()}const Ef=-7169;function bt(t,e){t.f=t.f&Ef|e}function ji(t){(t.f&Vn)!==0||t.deps===null?bt(t,It):bt(t,dr)}function Cc(t){if(t!==null)for(const e of t)(e.f&Ut)===0||(e.f&ks)===0||(e.f^=ks,Cc(e.deps))}function Rc(t,e,n){(t.f&Nt)!==0?e.add(t):(t.f&dr)!==0&&n.add(t),Cc(t.deps),bt(t,It)}let pa=!1;function Af(t){var e=pa;try{return pa=!1,[t(),pa]}finally{pa=e}}function Pc(t,e){if(e){const n=document.body;t.autofocus=!0,Sr(()=>{document.activeElement===n&&t.focus()})}}let pl=!1;function Cf(){pl||(pl=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const n of t.target.elements)(e=n[ba])==null||e.call(n)})},{capture:!0}))}function eo(t){var e=He,n=Me;Gn(null),Kn(null);try{return t()}finally{Gn(e),Kn(n)}}function Ic(t,e,n,r=n){t.addEventListener(e,()=>eo(n));const s=t[ba];s?t[ba]=()=>{s(),r(!0)}:t[ba]=()=>r(!0),Cf()}function Nc(t,e,n,r){const s=Js()?qs:Wi;var o=t.filter(T=>!T.settled),a=e.map(s);if(n.length===0&&o.length===0){r(a);return}var l=Me,c=Rf(),p=o.length===1?o[0].promise:o.length>1?Promise.all(o.map(T=>T.promise)):null;function u(T){if((l.f&wn)===0){c();try{r([...a,...T])}catch(b){kr(b,l)}Ra()}}var _=Oc();if(n.length===0){p.then(()=>u([])).finally(_);return}function d(){Promise.all(n.map(T=>Pf(T))).then(u).catch(T=>kr(T,l)).finally(_)}p?p.then(()=>{c(),d(),Ra()}):d()}function Rf(){var t=Me,e=He,n=ht,r=ge;return function(o=!0){Kn(t),Gn(e),Vs(n),o&&(t.f&wn)===0&&(r==null||r.activate(),r==null||r.apply())}}function Ra(t=!0){Kn(null),Gn(null),Vs(null),t&&(ge==null||ge.deactivate())}function Oc(){var t=Me,e=t.b,n=ge,r=!!(e!=null&&e.is_rendered());return e==null||e.update_pending_count(1,n),n.increment(r,t),()=>{e==null||e.update_pending_count(-1,n),n.decrement(r,t)}}function qs(t){var e=Ut|Nt;return Me!==null&&(Me.f|=Xs),{ctx:ht,deps:null,effects:null,equals:Tc,f:e,fn:t,reactions:null,rv:0,v:$t,wv:0,parent:Me,ac:null}}const go=Symbol("obsolete");function Pf(t,e,n){let r=Me;r===null&&hf();var s=void 0,o=jr($t),a=!He,l=new Set;return qf(()=>{var T,b;var c=Me,p=mc();s=p.promise;try{Promise.resolve(t()).then(p.resolve,w=>{w!==ia&&p.reject(w)}).finally(Ra)}catch(w){p.reject(w),Ra()}var u=ge;if(a){if((c.f&Zs)!==0)var _=Oc();if((T=r.b)!=null&&T.is_rendered())(b=u.async_deriveds.get(c))==null||b.reject(go);else for(const w of l.values())w.reject(go);l.add(p),u.async_deriveds.set(c,p)}const d=(w,A=void 0)=>{_==null||_(),l.delete(p),A!==go&&(u.activate(),A?(o.f|=ns,Gs(o,A)):((o.f&ns)!==0&&(o.f^=ns),Gs(o,w)),u.deactivate())};p.promise.then(d,w=>d(null,w||"unknown"))}),ja(()=>{for(const c of l)c.reject(go)}),new Promise(c=>{function p(u){function _(){u===s?c(o):p(s)}u.then(_,_)}p(s)})}function Ht(t){const e=qs(t);return ru(e),e}function Wi(t){const e=qs(t);return e.equals=$c,e}function If(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)Jt(e[n])}}function Vi(t){var e,n=Me,r=t.parent;if(!Wr&&r!==null&&t.v!==$t&&(r.f&(wn|dn))!==0)return uf(),t.v;Kn(r);try{t.f&=~ks,If(t),e=iu(t)}finally{Kn(n)}return e}function zc(t){var e=Vi(t);if(!t.equals(e)&&(t.wv=ou(),(!(ge!=null&&ge.is_fork)||t.deps===null)&&(ge!==null?(ge.capture(t,e,!0),To==null||To.capture(t,e,!0)):t.v=e,t.deps===null))){bt(t,It);return}Wr||(Xt!==null?(Ki()||ge!=null&&ge.is_fork)&&Xt.set(t,e):ji(t))}function Nf(t){var e;if(t.effects!==null)for(const n of t.effects)(n.teardown||n.ac)&&((e=n.teardown)==null||e.call(n),n.ac!==null&&eo(()=>{n.ac.abort(ia),n.ac=null}),n.fn!==null&&(n.teardown=qu),Co(n,0),Zi(n))}function Mc(t){if(t.effects!==null)for(const e of t.effects)e.teardown&&e.fn!==null&&Ks(e)}let Ya=null,Cs=null,ge=null,To=null,Xt=null,bi=null,$o=!1,Za=!1,Ns=null,xa=null;var hl=0;let Of=1;var Ls,Jr,hs,Ds,Fs,Hs,Fr,Bs,bn,Po,Hr,sr,br,Us,vs,rt,xi,mo,yi,Lc,Dc,Ps,zf,_o;const La=class La{constructor(){re(this,rt);Oe(this,"id",Of++);re(this,Ls,!1);Oe(this,"linked",!0);re(this,Jr,null);re(this,hs,null);Oe(this,"async_deriveds",new Map);Oe(this,"current",new Map);Oe(this,"previous",new Map);re(this,Ds,new Set);re(this,Fs,new Set);re(this,Hs,0);re(this,Fr,new Map);re(this,Bs,null);re(this,bn,[]);re(this,Po,[]);re(this,Hr,new Set);re(this,sr,new Set);re(this,br,new Map);re(this,Us,new Set);Oe(this,"is_fork",!1);re(this,vs,!1);Cs===null?Ya=Cs=this:(Pe(Cs,hs,this),Pe(this,Jr,Cs)),Cs=this}skip_effect(e){m(this,br).has(e)||m(this,br).set(e,{d:[],m:[]}),m(this,Us).delete(e)}unskip_effect(e,n=r=>this.schedule(r)){var r=m(this,br).get(e);if(r){m(this,br).delete(e);for(var s of r.d)bt(s,Nt),n(s);for(s of r.m)bt(s,dr),n(s)}m(this,Us).add(e)}capture(e,n,r=!1){e.v!==$t&&!this.previous.has(e)&&this.previous.set(e,e.v),(e.f&ns)===0&&(this.current.set(e,[n,r]),Xt==null||Xt.set(e,n)),this.is_fork||(e.v=n)}activate(){ge=this}deactivate(){ge=null,Xt=null}flush(){try{Za=!0,ge=this,je(this,rt,mo).call(this)}finally{hl=0,bi=null,Ns=null,xa=null,Za=!1,ge=null,Xt=null,Er.clear()}}discard(){var e;for(const n of m(this,Fs))n(this);m(this,Fs).clear();for(const n of this.async_deriveds.values())n.reject(go);je(this,rt,_o).call(this),(e=m(this,Bs))==null||e.resolve()}register_created_effect(e){m(this,Po).push(e)}increment(e,n){if(Pe(this,Hs,m(this,Hs)+1),e){let r=m(this,Fr).get(n)??0;m(this,Fr).set(n,r+1)}}decrement(e,n){if(Pe(this,Hs,m(this,Hs)-1),e){let r=m(this,Fr).get(n)??0;r===1?m(this,Fr).delete(n):m(this,Fr).set(n,r-1)}m(this,vs)||(Pe(this,vs,!0),Sr(()=>{Pe(this,vs,!1),this.linked&&this.flush()}))}transfer_effects(e,n){for(const r of e)m(this,Hr).add(r);for(const r of n)m(this,sr).add(r);e.clear(),n.clear()}oncommit(e){m(this,Ds).add(e)}ondiscard(e){m(this,Fs).add(e)}settled(){return(m(this,Bs)??Pe(this,Bs,mc())).promise}static ensure(){if(ge===null){const e=ge=new La;!Za&&!$o&&Sr(()=>{m(e,Ls)||e.flush()})}return ge}apply(){{Xt=null;return}}schedule(e){var s;if(bi=e,(s=e.b)!=null&&s.is_pending&&(e.f&(Ws|aa|Fi))!==0&&(e.f&Zs)===0){e.b.defer_effect(e);return}for(var n=e;n.parent!==null;){n=n.parent;var r=n.f;if(Ns!==null&&n===Me&&(He===null||(He.f&Ut)===0))return;if((r&(Ur|qn))!==0){if((r&It)===0)return;n.f^=It}}m(this,bn).push(n)}};Ls=new WeakMap,Jr=new WeakMap,hs=new WeakMap,Ds=new WeakMap,Fs=new WeakMap,Hs=new WeakMap,Fr=new WeakMap,Bs=new WeakMap,bn=new WeakMap,Po=new WeakMap,Hr=new WeakMap,sr=new WeakMap,br=new WeakMap,Us=new WeakMap,vs=new WeakMap,rt=new WeakSet,xi=function(){if(this.is_fork)return!0;for(const r of m(this,Fr).keys()){for(var e=r,n=!1;e.parent!==null;){if(m(this,br).has(e)){n=!0;break}e=e.parent}if(!n)return!0}return!1},mo=function(){var c,p,u,_;Pe(this,Ls,!0),hl++>1e3&&(je(this,rt,_o).call(this),Lf());for(const d of m(this,Hr))m(this,sr).delete(d),bt(d,Nt),this.schedule(d);for(const d of m(this,sr))bt(d,dr),this.schedule(d);const e=m(this,bn);Pe(this,bn,[]),this.apply();var n=Ns=[],r=[],s=xa=[];for(const d of e)try{je(this,rt,yi).call(this,d,n,r)}catch(T){throw Bc(d),je(this,rt,xi).call(this)||this.discard(),T}if(ge=null,s.length>0){var o=La.ensure();for(const d of s)o.schedule(d)}if(Ns=null,xa=null,je(this,rt,xi).call(this)){je(this,rt,Ps).call(this,r),je(this,rt,Ps).call(this,n);for(const[d,T]of m(this,br))Hc(d,T);s.length>0&&je(c=ge,rt,mo).call(c);return}const a=je(this,rt,Lc).call(this);if(a){je(this,rt,Ps).call(this,r),je(this,rt,Ps).call(this,n),je(p=a,rt,Dc).call(p,this);return}m(this,Hr).clear(),m(this,sr).clear();for(const d of m(this,Ds))d(this);m(this,Ds).clear(),To=this,vl(r),vl(n),To=null,(u=m(this,Bs))==null||u.resolve();var l=ge;if(m(this,Hs)===0&&(m(this,bn).length===0||l!==null)&&je(this,rt,_o).call(this),m(this,bn).length>0)if(l!==null){const d=l;m(d,bn).push(...m(this,bn).filter(T=>!m(d,bn).includes(T)))}else l=this;l!==null&&(Er.clear(),je(_=l,rt,mo).call(_))},yi=function(e,n,r){e.f^=It;for(var s=e.first;s!==null;){var o=s.f,a=(o&(qn|Ur))!==0,l=a&&(o&It)!==0,c=l||(o&dn)!==0||m(this,br).has(s);if(!c&&s.fn!==null){a?s.f^=It:(o&Ws)!==0?n.push(s):ca(s)&&((o&lr)!==0&&m(this,sr).add(s),Ks(s));var p=s.first;if(p!==null){s=p;continue}}for(;s!==null;){var u=s.next;if(u!==null){s=u;break}s=s.parent}}},Lc=function(){for(var e=m(this,Jr);e!==null;){if(!e.is_fork){for(const[n,[,r]]of this.current)if(e.current.has(n)&&!r)return e}e=m(e,Jr)}return null},Dc=function(e){var r;for(const[s,o]of e.current)!this.previous.has(s)&&e.previous.has(s)&&this.previous.set(s,e.previous.get(s)),this.current.set(s,o);for(const[s,o]of e.async_deriveds){const a=this.async_deriveds.get(s);a&&o.promise.then(a.resolve).catch(a.reject)}e.async_deriveds.clear(),this.transfer_effects(m(e,Hr),m(e,sr));const n=s=>{var o=s.reactions;if(o!==null&&!((s.f&Ut)!==0&&(s.f&(Nt|dr))===0))for(const c of o){var a=c.f;if((a&Ut)!==0)n(c);else{var l=c;a&(Os|lr)&&!this.async_deriveds.has(l)&&(m(this,sr).delete(l),bt(l,Nt),this.schedule(l))}}};for(const s of this.current.keys())n(s);this.oncommit(()=>e.discard()),je(r=e,rt,_o).call(r),ge=this,je(this,rt,mo).call(this)},Ps=function(e){for(var n=0;n<e.length;n+=1)Rc(e[n],m(this,Hr),m(this,sr))},zf=function(){var _;for(let d=Ya;d!==null;d=m(d,hs)){var e=d.id<this.id,n=[];for(const[T,[b,w]]of this.current){if(d.current.has(T)){var r=d.current.get(T)[0];if(e&&b!==r)d.current.set(T,[b,w]);else continue}n.push(T)}if(e)for(const[T,b]of this.async_deriveds){const w=d.async_deriveds.get(T);w&&b.promise.then(w.resolve).catch(w.reject)}var s=[...d.current.keys()].filter(T=>!d.current.get(T)[1]);if(!(!m(d,Ls)||s.length===0)){var o=s.filter(T=>!this.current.has(T));if(o.length===0)e&&d.discard();else if(n.length>0){if(e)for(const T of m(this,Us))d.unskip_effect(T,b=>{var w;(b.f&(lr|Os))!==0?d.schedule(b):je(w=d,rt,Ps).call(w,[b])});d.activate();var a=new Set,l=new Map;for(var c of n)Fc(c,o,a,l);l=new Map;var p=[...d.current].filter(([T,b])=>{const w=this.current.get(T);return w?w[0]!==b[0]||w[1]!==b[1]:!0}).map(([T])=>T);if(p.length>0)for(const T of m(this,Po))(T.f&(wn|dn|Aa))===0&&qi(T,p,l)&&((T.f&(Os|lr))!==0?(bt(T,Nt),d.schedule(T)):m(d,Hr).add(T));if(m(d,bn).length>0&&!m(d,vs)){d.apply();for(var u of m(d,bn))je(_=d,rt,yi).call(_,u,[],[]);Pe(d,bn,[])}d.deactivate()}}}},_o=function(){if(this.linked){var e=m(this,Jr),n=m(this,hs);e===null?Ya=n:Pe(e,hs,n),n===null?Cs=e:Pe(n,Jr,e),this.linked=!1}};let ws=La;function Mf(t){var e=$o;$o=!0;try{for(var n;;){if($f(),ge===null)return n;ge.flush()}}finally{$o=e}}function Lf(){try{bf()}catch(t){kr(t,bi)}}let rr=null;function vl(t){var e=t.length;if(e!==0){for(var n=0;n<e;){var r=t[n++];if((r.f&(wn|dn))===0&&ca(r)&&(rr=new Set,Ks(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&eu(r),(rr==null?void 0:rr.size)>0)){Er.clear();for(const s of rr){if((s.f&(wn|dn))!==0)continue;const o=[s];let a=s.parent;for(;a!==null;)rr.has(a)&&(rr.delete(a),o.push(a)),a=a.parent;for(let l=o.length-1;l>=0;l--){const c=o[l];(c.f&(wn|dn))===0&&Ks(c)}}rr.clear()}}rr=null}}function Fc(t,e,n,r){if(!n.has(t)&&(n.add(t),t.reactions!==null))for(const s of t.reactions){const o=s.f;(o&Ut)!==0?Fc(s,e,n,r):(o&(Os|lr))!==0&&(o&Nt)===0&&qi(s,e,r)&&(bt(s,Nt),Gi(s))}}function qi(t,e,n){const r=n.get(t);if(r!==void 0)return r;if(t.deps!==null)for(const s of t.deps){if($a.call(e,s))return!0;if((s.f&Ut)!==0&&qi(s,e,n))return n.set(s,!0),!0}return n.set(t,!1),!1}function Gi(t){ge.schedule(t)}function Hc(t,e){if(!((t.f&qn)!==0&&(t.f&It)!==0)){(t.f&Nt)!==0?e.d.push(t):(t.f&dr)!==0&&e.m.push(t),bt(t,It);for(var n=t.first;n!==null;)Hc(n,e),n=n.next}}function Bc(t){bt(t,It);for(var e=t.first;e!==null;)Bc(e),e=e.next}let Pa=new Set;const Er=new Map;let Uc=!1;function jr(t,e){var n={f:0,v:t,reactions:null,equals:Tc,rv:0,wv:0};return n}function z(t,e){const n=jr(t);return ru(n),n}function Df(t,e=!1,n=!0){var s;const r=jr(t);return e||(r.equals=$c),Qs&&n&&ht!==null&&ht.l!==null&&((s=ht.l).s??(s.s=[])).push(r),r}function h(t,e,n=!1){He!==null&&(!ur||(He.f&Aa)!==0)&&Js()&&(He.f&(Ut|lr|Os|Aa))!==0&&(Cr===null||!Cr.has(t))&&wf();let r=n?Xe(e):e;return Gs(t,r,xa)}function Gs(t,e,n=null){if(!t.equals(e)){Wr?Er.set(t,e):Er.has(t)||Er.set(t,t.v);var r=ws.ensure();if(r.capture(t,e),(t.f&Ut)!==0){const s=t;(t.f&Nt)!==0&&Vi(s),Xt===null&&ji(s)}t.wv=ou(),jc(t,Nt,n),Js()&&Me!==null&&(Me.f&It)!==0&&(Me.f&(qn|Ur))===0&&(Un===null?Kf([t]):Un.push(t)),!r.is_fork&&Pa.size>0&&!Uc&&Ff()}return e}function Ff(){Uc=!1;for(const t of Pa){(t.f&It)!==0&&bt(t,dr);let e;try{e=ca(t)}catch{e=!0}e&&Ks(t)}Pa.clear()}function gl(t,e=1){var n=i(t),r=e===1?n++:n--;return h(t,n),r}function Eo(t){h(t,t.v+1)}function jc(t,e,n){var r=t.reactions;if(r!==null)for(var s=Js(),o=r.length,a=0;a<o;a++){var l=r[a],c=l.f;if(!(!s&&l===Me)){var p=(c&Nt)===0;if(p&&bt(l,e),(c&Aa)!==0)Pa.add(l);else if((c&Ut)!==0){var u=l;Xt==null||Xt.delete(u),(c&ks)===0&&(c&Vn&&(Me===null||(Me.f&Ca)===0)&&(l.f|=ks),jc(u,dr,n))}else if(p){var _=l;(c&lr)!==0&&rr!==null&&rr.add(_),n!==null?n.push(_):Gi(_)}}}}function Xe(t){if(typeof t!="object"||t===null||$r in t||bc in t)return t;const e=Di(t);if(e!==Wu&&e!==Vu)return t;var n=new Map,r=Ha(t),s=z(0),o=xs,a=l=>{if(xs===o)return l();var c=He,p=xs;Gn(null),bl(o);var u=l();return Gn(c),bl(p),u};return r&&n.set("length",z(t.length)),new Proxy(t,{defineProperty(l,c,p){(!("value"in p)||p.configurable===!1||p.enumerable===!1||p.writable===!1)&&yf();var u=n.get(c);return u===void 0?a(()=>{var _=z(p.value);return n.set(c,_),_}):h(u,p.value,!0),!0},deleteProperty(l,c){var p=n.get(c);if(p===void 0){if(c in l){const u=a(()=>z($t));n.set(c,u),Eo(s)}}else h(p,$t),Eo(s);return!0},get(l,c,p){var T;if(c===$r)return t;var u=n.get(c),_=c in l;if(u===void 0&&(!_||(T=ts(l,c))!=null&&T.writable)&&(u=a(()=>{var b=Xe(_?l[c]:$t),w=z(b);return w}),n.set(c,u)),u!==void 0){var d=i(u);return d===$t?void 0:d}return Reflect.get(l,c,p)},getOwnPropertyDescriptor(l,c){var p=Reflect.getOwnPropertyDescriptor(l,c);if(p&&"value"in p){var u=n.get(c);u&&(p.value=i(u))}else if(p===void 0){var _=n.get(c),d=_==null?void 0:_.v;if(_!==void 0&&d!==$t)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return p},has(l,c){var d;if(c===$r)return!0;var p=n.get(c),u=p!==void 0&&p.v!==$t||Reflect.has(l,c);if(p!==void 0||Me!==null&&(!u||(d=ts(l,c))!=null&&d.writable)){p===void 0&&(p=a(()=>{var T=u?Xe(l[c]):$t,b=z(T);return b}),n.set(c,p));var _=i(p);if(_===$t)return!1}return u},set(l,c,p,u){var H;var _=n.get(c),d=c in l;if(r&&c==="length")for(var T=p;T<_.v;T+=1){var b=n.get(T+"");b!==void 0?h(b,$t):T in l&&(b=a(()=>z($t)),n.set(T+"",b))}if(_===void 0)(!d||(H=ts(l,c))!=null&&H.writable)&&(_=a(()=>z(void 0)),h(_,Xe(p)),n.set(c,_));else{d=_.v!==$t;var w=a(()=>Xe(p));h(_,w)}var A=Reflect.getOwnPropertyDescriptor(l,c);if(A!=null&&A.set&&A.set.call(u,p),!d){if(r&&typeof c=="string"){var N=n.get("length"),U=Number(c);Number.isInteger(U)&&U>=N.v&&h(N,U+1)}Eo(s)}return!0},ownKeys(l){i(s);var c=Reflect.ownKeys(l).filter(_=>{var d=n.get(_);return d===void 0||d.v!==$t});for(var[p,u]of n)u.v!==$t&&!(p in l)&&c.push(p);return c},setPrototypeOf(){kf()}})}function ml(t){try{if(t!==null&&typeof t=="object"&&$r in t)return t[$r]}catch{}return t}function Wc(t,e){return Object.is(ml(t),ml(e))}var Ss,Vc,qc,Gc;function Hf(){if(Ss===void 0){Ss=window,Vc=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,n=Text.prototype;qc=ts(e,"firstChild").get,Gc=ts(e,"nextSibling").get,dl(t)&&(t[mi]=void 0,t[_a]=null,t[_i]=void 0,t.__e=void 0),dl(n)&&(n[vo]=void 0)}}function Ar(t=""){return document.createTextNode(t)}function cr(t){return qc.call(t)}function la(t){return Gc.call(t)}function S(t,e){return cr(t)}function q(t,e=!1){{var n=cr(t);return n instanceof Comment&&n.data===""?la(n):n}}function ie(t,e=!1){return cr(t)}function v(t,e=1,n=!1){let r=t;for(;e--;)r=la(r);return r}function Bf(t){t.textContent=""}function Kc(){return!1}function Ua(t,e,n){return e==null||e===wc?n?document.createElement(t,{is:n}):document.createElement(t):n?document.createElementNS(e,t,{is:n}):document.createElementNS(e,t)}function Uf(t){var e=Me;if(e===null)return He.f|=ns,t;if((e.f&Zs)===0&&(e.f&Ws)===0)throw t;kr(t,e)}function kr(t,e){if(!(e!==null&&(e.f&wn)!==0)){for(;e!==null;){if((e.f&gi)!==0&&(e.f&(wn|Ea))===0){if((e.f&Zs)===0)throw t;try{e.b.error(t);return}catch(n){t=n}}e=e.parent}throw t}}function Yc(t){Me===null&&(He===null&&_f(),mf()),Wr&&gf()}function jf(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function pr(t,e){var n=Me;n!==null&&(n.f&dn)!==0&&(t|=dn);var r={ctx:ht,deps:null,nodes:null,f:t|Nt|Vn,first:null,fn:e,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};ge==null||ge.register_created_effect(r);var s=r;if((t&Ws)!==0)Ns!==null?Ns.push(r):ws.ensure().schedule(r);else if(e!==null){try{Ks(r)}catch(a){throw Jt(r),a}s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&Xs)===0&&(s=s.first,(t&lr)!==0&&(t&rs)!==0&&s!==null&&(s.f|=rs))}if(s!==null&&(s.parent=n,n!==null&&jf(s,n),He!==null&&(He.f&Ut)!==0&&(t&Ur)===0)){var o=He;(o.effects??(o.effects=[])).push(s)}return r}function Ki(){return He!==null&&!ur}function ja(t){const e=pr(aa,null);return bt(e,It),e.teardown=t,e}function Qt(t){Yc();var e=Me.f,n=!He&&(e&qn)!==0&&ht!==null&&!ht.i;if(n){var r=ht;(r.e??(r.e=[])).push(t)}else return Zc(t)}function Zc(t){return pr(Ws|_c,t)}function Wf(t){return Yc(),pr(aa|_c,t)}function Vf(t){ws.ensure();const e=pr(Ur|Xs,t);return(n={})=>new Promise(r=>{n.outro?bs(e,()=>{Jt(e),r(void 0)}):(Jt(e),r(void 0))})}function Wa(t){return pr(Ws,t)}function qf(t){return pr(Os|Xs,t)}function Yi(t,e=0){return pr(aa|e,t)}function J(t,e=[],n=[],r=[]){Nc(r,e,n,s=>{pr(aa,()=>{t(...s.map(i))})})}function to(t,e=0){var n=pr(lr|e,t);return n}function Xc(t,e=0){var n=pr(Fi|e,t);return n}function yn(t){return pr(qn|Xs,t)}function Qc(t){var e=t.teardown;if(e!==null){const n=Wr,r=He;_l(!0),Gn(null);try{e.call(null)}catch(s){kr(s,t.parent)}finally{_l(n),Gn(r)}}}function Zi(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){const s=n.ac;s!==null&&eo(()=>{s.abort(ia)});var r=n.next;(n.f&Ur)!==0?n.parent=null:Jt(n,e),n=r}}function Gf(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&qn)===0&&Jt(e),e=n}}function Jt(t,e=!0){var n=!1;(e||(t.f&Yu)!==0)&&t.nodes!==null&&t.nodes.end!==null&&(Jc(t.nodes.start,t.nodes.end),n=!0),t.f|=Ea,Zi(t,e&&!n),Co(t,0);var r=t.nodes&&t.nodes.t;if(r!==null)for(const o of r)o.stop();Qc(t),t.f^=Ea,t.f|=wn;var s=t.parent;s!==null&&s.first!==null&&eu(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes=t.ac=t.b=null}function Jc(t,e){for(;t!==null;){var n=t===e?null:la(t);t.remove(),t=n}}function eu(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function bs(t,e,n=!0){var r=[];t.f|=Hi,tu(t,r,!0);var s=()=>{n&&Jt(t),e&&e()},o=r.length;if(o>0){var a=()=>--o||s();for(var l of r)l.out(a)}else s()}function tu(t,e,n){if((t.f&dn)===0){t.f^=dn;var r=t.nodes&&t.nodes.t;if(r!==null)for(const l of r)(l.is_global||n)&&e.push(l);for(var s=t.first;s!==null;){var o=s.next;if((s.f&Ur)===0){var a=(s.f&rs)!==0||(s.f&qn)!==0&&(t.f&lr)!==0;tu(s,e,a?n:!1)}s=o}}}function Ia(t){t.f&=~Hi,nu(t,!0)}function nu(t,e){if((t.f&Hi)===0&&(t.f&dn)!==0){t.f^=dn,(t.f&It)===0&&(bt(t,Nt),ws.ensure().schedule(t));for(var n=t.first;n!==null;){var r=n.next,s=(n.f&rs)!==0||(n.f&qn)!==0;nu(n,s?e:!1),n=r}var o=t.nodes&&t.nodes.t;if(o!==null)for(const a of o)(a.is_global||e)&&a.in()}}function Xi(t,e){if(t.nodes)for(var n=t.nodes.start,r=t.nodes.end;n!==null;){var s=n===r?null:la(n);e.append(n),n=s}}let ya=!1,Wr=!1;function _l(t){Wr=t}let He=null,ur=!1;function Gn(t){He=t}let Me=null;function Kn(t){Me=t}let Cr=null;function ru(t){He!==null&&(Cr??(Cr=new Set)).add(t)}let kn=null,On=0,Un=null;function Kf(t){Un=t}let su=1,ds=0,xs=ds;function bl(t){xs=t}function ou(){return++su}function ca(t){var e=t.f;if((e&Nt)!==0)return!0;if(e&Ut&&(t.f&=~ks),(e&dr)!==0){for(var n=t.deps,r=n.length,s=0;s<r;s++){var o=n[s];if(ca(o)&&zc(o),o.wv>t.wv)return!0}(e&Vn)!==0&&Xt===null&&bt(t,It)}return!1}function au(t,e,n=!0){var r=t.reactions;if(r!==null&&!(Cr!==null&&Cr.has(t)))for(var s=0;s<r.length;s++){var o=r[s];(o.f&Ut)!==0?au(o,e,!1):e===o&&(n?bt(o,Nt):(o.f&It)!==0&&bt(o,dr),Gi(o))}}function iu(t){var e=kn,n=On,r=Un,s=He,o=Cr,a=ht,l=ur,c=xs,p=t.f;kn=null,On=0,Un=null,He=(p&(qn|Ur))===0?t:null,Cr=null,Vs(t.ctx),ur=!1,xs=++ds,t.ac!==null&&(eo(()=>{t.ac.abort(ia)}),t.ac=null);try{t.f|=Ca;var u=t.fn,_=u();t.f|=Zs;var d=xl(t);if(Js()&&Un!==null&&!ur&&d!==null&&(t.f&(Ut|dr|Nt))===0)for(var T=0;T<Un.length;T++)au(Un[T],t);if(s!==null&&s!==t){if(ds++,s.deps!==null)for(let b=0;b<n;b+=1)s.deps[b].rv=ds;if(e!==null)for(const b of e)b.rv=ds;Un!==null&&(r===null?r=Un:r.push(...Un))}return(t.f&ns)!==0&&(t.f^=ns),_}catch(b){return xl(t),Uf(b)}finally{t.f^=Ca,kn=e,On=n,Un=r,He=s,Cr=o,Vs(a),ur=l,xs=c}}function xl(t){var s;var e=t.deps,n=ge==null?void 0:ge.is_fork;if(kn!==null){var r;if(n||Co(t,On),e!==null&&On>0)for(e.length=On+kn.length,r=0;r<kn.length;r++)e[On+r]=kn[r];else t.deps=e=kn;if(Ki()&&(t.f&Vn)!==0)for(r=On;r<e.length;r++)((s=e[r]).reactions??(s.reactions=[])).push(t)}else!n&&e!==null&&On<e.length&&(Co(t,On),e.length=On);return e}function Yf(t,e){let n=e.reactions;if(n!==null){var r=ju.call(n,t);if(r!==-1){var s=n.length-1;s===0?n=e.reactions=null:(n[r]=n[s],n.pop())}}if(n===null&&(e.f&Ut)!==0&&(kn===null||!$a.call(kn,e))){var o=e;(o.f&Vn)!==0&&(o.f^=Vn,o.f&=~ks),o.v!==$t&&ji(o),o.ac!==null&&eo(()=>{o.ac.abort(ia),o.ac=null,bt(o,Nt)}),Nf(o),Co(o,0)}}function Co(t,e){var n=t.deps;if(n!==null)for(var r=e;r<n.length;r++)Yf(t,n[r])}function Ks(t){var e=t.f;if((e&wn)===0){bt(t,It);var n=Me,r=ya;Me=t,ya=(e&(qn|Ur))===0;try{(e&(lr|Fi))!==0?Gf(t):Zi(t),Qc(t);var s=iu(t);t.teardown=typeof s=="function"?s:null,t.wv=su;var o}finally{ya=r,Me=n}}}async function Qi(){await Promise.resolve(),Mf()}function i(t){var e=t.f,n=(e&Ut)!==0;if(He!==null&&!ur){var r=Me!==null&&(Me.f&wn)!==0;if(!r&&(Cr===null||!Cr.has(t))){var s=He.deps;if((He.f&Ca)!==0)t.rv<ds&&(t.rv=ds,kn===null&&s!==null&&s[On]===t?On++:kn===null?kn=[t]:kn.push(t));else{He.deps??(He.deps=[]),$a.call(He.deps,t)||He.deps.push(t);var o=t.reactions;o===null?t.reactions=[He]:$a.call(o,He)||o.push(He)}}}if(Wr&&Er.has(t))return Er.get(t);if(n){var a=t;if(Wr){var l=a.v;return((a.f&It)===0&&a.reactions!==null||cu(a))&&(l=Vi(a)),Er.set(a,l),l}var c=(a.f&Vn)===0&&!ur&&He!==null&&(ya||(He.f&Vn)!==0),p=(a.f&Zs)===0;ca(a)&&(c&&(a.f|=Vn),zc(a)),c&&!p&&(Mc(a),lu(a))}if(Xt!=null&&Xt.has(t))return Xt.get(t);if((t.f&ns)!==0)throw t.v;return t.v}function lu(t){if(t.f|=Vn,t.deps!==null)for(const e of t.deps)(e.reactions??(e.reactions=[])).push(t),(e.f&Ut)!==0&&(e.f&Vn)===0&&(Mc(e),lu(e))}function cu(t){if(t.v===$t)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(Er.has(e)||(e.f&Ut)!==0&&cu(e))return!0;return!1}function Vr(t){var e=ur;try{return ur=!0,t()}finally{ur=e}}function is(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if($r in t)ki(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];typeof n=="object"&&n&&$r in n&&ki(n)}}}function ki(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let r in t)try{ki(t[r],e)}catch{}const n=Di(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=gc(n);for(let s in r){const o=r[s].get;if(o)try{o.call(t)}catch{}}}}}function Zf(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const Xf=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Qf(t){return Xf.includes(t)}const Jf={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function ed(t){return t=t.toLowerCase(),Jf[t]??t}const td=["touchstart","touchmove"];function nd(t){return td.includes(t)}const ps=Symbol("events"),uu=new Set,wi=new Set;function fu(t,e,n,r={}){function s(o){if(r.capture||Si.call(e,o),!o.cancelBubble)return eo(()=>n==null?void 0:n.call(this,o))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?Sr(()=>{e.addEventListener(t,s,r)}):e.addEventListener(t,s,r),s}function Bt(t,e,n,r,s){var o={capture:r,passive:s},a=fu(t,e,n,o);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&ja(()=>{e.removeEventListener(t,a,o)})}function L(t,e,n){(e[ps]??(e[ps]={}))[t]=n}function Yn(t){for(var e=0;e<t.length;e++)uu.add(t[e]);for(var n of wi)n(t)}let Xa=null,Qa=!1;function Si(t){var w,A;var e=this,n=e.ownerDocument,r=t.type,s=((w=t.composedPath)==null?void 0:w.call(t))||[],o=s[0]||t.target;Xa=t,Qa||(Qa=!0,setTimeout(()=>{Qa=!1,Xa=null}));var a=0,l=Xa===t&&t[ps];if(l){var c=s.indexOf(l);if(c!==-1&&(e===document||e===window)){t[ps]=e;return}var p=s.indexOf(e);if(p===-1)return;c<=p&&(a=c)}if(o=s[a]||t.target,o!==e){vc(t,"currentTarget",{configurable:!0,get(){return o||n}});var u=He,_=Me;Gn(null),Kn(null);try{for(var d,T=[];o!==null&&o!==e;){try{var b=(A=o[ps])==null?void 0:A[r];b!=null&&(!o.disabled||t.target===o)&&b.call(o,t)}catch(N){d?T.push(N):d=N}if(t.cancelBubble)break;a++,o=a<s.length?s[a]:null}if(d){for(let N of T)queueMicrotask(()=>{throw N});throw d}}finally{t[ps]=e,delete t.currentTarget,Gn(u),Kn(_)}}}var pc;const Ja=((pc=globalThis==null?void 0:globalThis.window)==null?void 0:pc.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:t=>t});function rd(t){return(Ja==null?void 0:Ja.createHTML(t))??t}function du(t){var e=Ua("template");return e.innerHTML=rd(t.replaceAll("<!>","<!---->")),e.content}function ss(t,e){var n=Me;n.nodes===null&&(n.nodes={start:t,end:e,a:null,t:null})}function I(t,e){var n=(e&of)!==0,r=(e&af)!==0,s,o=!t.startsWith("<!>");return()=>{s===void 0&&(s=du(o?t:"<!>"+t),n||(s=cr(s)));var a=r||Vc?document.importNode(s,!0):s.cloneNode(!0);if(n){var l=cr(a),c=a.lastChild;ss(l,c)}else ss(a,a);return a}}function sd(t,e,n="svg"){var r=!t.startsWith("<!>"),s=`<${n}>${r?t:"<!>"+t}</${n}>`,o;return()=>{if(!o){var a=du(s),l=cr(a);o=cr(l)}var c=o.cloneNode(!0);return ss(c,c),c}}function pu(t,e){return sd(t,e,"svg")}function yl(t=""){{var e=Ar(t+"");return ss(e,e),e}}function ue(){var t=document.createDocumentFragment(),e=document.createComment(""),n=Ar();return t.append(e,n),ss(e,n),t}function y(t,e){t!==null&&t.before(e)}function od(t){let e=0,n=jr(0),r;return()=>{Ki()&&(i(n),Yi(()=>(e===0&&(r=Vr(()=>t(()=>Eo(n)))),e+=1,()=>{Sr(()=>{e-=1,e===0&&(r==null||r(),r=void 0,Eo(n))})})))}}var ad=rs|Xs;function id(t,e,n,r){new ld(t,e,n,r)}var jn,Li,Wn,gs,cn,Pn,un,In,xr,ms,es,js,Io,No,Br,Da,pt,cd,ud,Ti,fd,$i,bo,ka,Ei,Ai;class ld{constructor(e,n,r,s){re(this,pt);Oe(this,"parent");Oe(this,"is_pending",!1);Oe(this,"transform_error");re(this,jn);re(this,Li,null);re(this,Wn);re(this,gs);re(this,cn);re(this,Pn,null);re(this,un,null);re(this,In,null);re(this,xr,null);re(this,ms,0);re(this,es,0);re(this,js,!1);re(this,Io,new Set);re(this,No,new Set);re(this,Br,null);re(this,Da,od(()=>(Pe(this,Br,jr(m(this,ms))),()=>{Pe(this,Br,null)})));var o;Pe(this,jn,e),Pe(this,Wn,n),Pe(this,gs,a=>{var l=Me;l.b=this,l.f|=gi,r(a)}),this.parent=Me.b,this.transform_error=s??((o=this.parent)==null?void 0:o.transform_error)??(a=>a),Pe(this,cn,to(()=>{je(this,pt,$i).call(this)},ad))}defer_effect(e){Rc(e,m(this,Io),m(this,No))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!m(this,Wn).pending}update_pending_count(e,n){je(this,pt,Ei).call(this,e,n),Pe(this,ms,m(this,ms)+e),!(!m(this,Br)||m(this,js))&&(Pe(this,js,!0),Sr(()=>{Pe(this,js,!1),m(this,Br)&&Gs(m(this,Br),m(this,ms))}))}get_effect_pending(){return m(this,Da).call(this),i(m(this,Br))}error(e){if(!m(this,Wn).onerror&&!m(this,Wn).failed)throw e;ge!=null&&ge.is_fork?(m(this,Pn)&&ge.skip_effect(m(this,Pn)),m(this,un)&&ge.skip_effect(m(this,un)),m(this,In)&&ge.skip_effect(m(this,In)),ge.oncommit(()=>{je(this,pt,Ai).call(this,e)})):je(this,pt,Ai).call(this,e)}}jn=new WeakMap,Li=new WeakMap,Wn=new WeakMap,gs=new WeakMap,cn=new WeakMap,Pn=new WeakMap,un=new WeakMap,In=new WeakMap,xr=new WeakMap,ms=new WeakMap,es=new WeakMap,js=new WeakMap,Io=new WeakMap,No=new WeakMap,Br=new WeakMap,Da=new WeakMap,pt=new WeakSet,cd=function(){try{Pe(this,Pn,yn(()=>m(this,gs).call(this,m(this,jn))))}catch(e){this.error(e)}},ud=function(e){const n=m(this,Wn).failed,{reset:r,invoke_onerror:s}=je(this,pt,Ti).call(this,e);Sr(s),n&&Pe(this,In,yn(()=>{n(m(this,jn),()=>e,()=>r)}))},Ti=function(e){var n=!1,r=!1;const s=()=>{if(n){df();return}n=!0,r&&Sf(),m(this,In)!==null&&bs(m(this,In),()=>{Pe(this,In,null)}),je(this,pt,ka).call(this,()=>{je(this,pt,$i).call(this)})};return{reset:s,invoke_onerror:()=>{var a,l;try{r=!0,(l=(a=m(this,Wn)).onerror)==null||l.call(a,e,s),r=!1}catch(c){kr(c,m(this,cn)&&m(this,cn).parent)}}}},fd=function(){const e=m(this,Wn).pending;e&&(this.is_pending=!0,Pe(this,un,yn(()=>e(m(this,jn)))),Sr(()=>{var n=Pe(this,xr,document.createDocumentFragment()),r=Ar(),s=!1;if(n.append(r),Pe(this,Pn,je(this,pt,ka).call(this,()=>{try{return yn(()=>m(this,gs).call(this,r))}catch(o){try{this.error(o),s=!0}catch(a){kr(a,m(this,cn).parent)}return null}})),m(this,Pn)===null){Pe(this,xr,null),s&&je(this,pt,bo).call(this,ge);return}m(this,es)===0&&(m(this,jn).before(n),Pe(this,xr,null),bs(m(this,un),()=>{Pe(this,un,null)}),je(this,pt,bo).call(this,ge))}))},$i=function(){try{if(this.is_pending=this.has_pending_snippet(),Pe(this,es,0),Pe(this,ms,0),Pe(this,Pn,yn(()=>{m(this,gs).call(this,m(this,jn))})),m(this,es)>0){var e=Pe(this,xr,document.createDocumentFragment());Xi(m(this,Pn),e);const n=m(this,Wn).pending;Pe(this,un,yn(()=>n(m(this,jn))))}else je(this,pt,bo).call(this,ge)}catch(n){this.error(n)}},bo=function(e){this.is_pending=!1,e.transfer_effects(m(this,Io),m(this,No))},ka=function(e){var n=Me,r=He,s=ht;Kn(m(this,cn)),Gn(m(this,cn)),Vs(m(this,cn).ctx);try{return ws.ensure(),e()}finally{Kn(n),Gn(r),Vs(s)}},Ei=function(e,n){var r;if(!this.has_pending_snippet()){this.parent&&je(r=this.parent,pt,Ei).call(r,e,n);return}Pe(this,es,m(this,es)+e),m(this,es)===0&&(je(this,pt,bo).call(this,n),m(this,un)&&bs(m(this,un),()=>{Pe(this,un,null)}),m(this,xr)&&(m(this,jn).before(m(this,xr)),Pe(this,xr,null)))},Ai=function(e){m(this,Pn)&&(Jt(m(this,Pn)),Pe(this,Pn,null)),m(this,un)&&(Jt(m(this,un)),Pe(this,un,null)),m(this,In)&&(Jt(m(this,In)),Pe(this,In,null));let n=m(this,Wn).failed;const r=s=>{const{reset:o,invoke_onerror:a}=je(this,pt,Ti).call(this,s);a(),n&&Pe(this,In,je(this,pt,ka).call(this,()=>{try{return yn(()=>{var l=Me;l.b=this,l.f|=gi,n(m(this,jn),()=>s,()=>o)})}catch(l){return kr(l,m(this,cn).parent),null}}))};Sr(()=>{var s;try{s=this.transform_error(e)}catch(o){kr(o,m(this,cn)&&m(this,cn).parent);return}s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(r,o=>kr(o,m(this,cn)&&m(this,cn).parent)):r(s)})};function Z(t,e){var n=e==null?"":typeof e=="object"?`${e}`:e;n!==(t[vo]??(t[vo]=t.nodeValue))&&(t[vo]=n,t.nodeValue=`${n}`)}function dd(t,e){return pd(t,e)}const ha=new Map;function pd(t,{target:e,anchor:n,props:r={},events:s,context:o,intro:a=!0,transformError:l}){Hf();var c=void 0,p=Vf(()=>{var u=n??e.appendChild(Ar());id(u,{pending:()=>{}},T=>{pn({});var b=ht;o&&(b.c=o),s&&(r.$$events=s),c=t(T,r)||Ui(),hn()},l);var _=new Set,d=T=>{for(var b=0;b<T.length;b++){var w=T[b];if(!_.has(w)){_.add(w);var A=nd(w);for(const H of[e,document]){var N=ha.get(H);N===void 0&&(N=new Map,ha.set(H,N));var U=N.get(w);U===void 0?(H.addEventListener(w,Si,{passive:A}),N.set(w,1)):N.set(w,U+1)}}}};return d(Ba(uu)),wi.add(d),()=>{var A;for(var T of _)for(const N of[e,document]){var b=ha.get(N),w=b.get(T);--w==0?(N.removeEventListener(T,Si),b.delete(T),b.size===0&&ha.delete(N)):b.set(T,w)}wi.delete(d),u!==n&&((A=u.parentNode)==null||A.removeChild(u))}});return hd.set(c,p),c}let hd=new WeakMap;var or,yr,Nn,_s,Oo,zo,Fa;class Va{constructor(e,n=!0){Oe(this,"anchor");re(this,or,new Map);re(this,yr,new Map);re(this,Nn,new Map);re(this,_s,new Set);re(this,Oo,!0);re(this,zo,e=>{if(m(this,or).has(e)){var n=m(this,or).get(e),r=m(this,yr).get(n);if(r)Ia(r),m(this,_s).delete(n);else{var s=m(this,Nn).get(n);s&&(Ia(s.effect),m(this,yr).set(n,s.effect),m(this,Nn).delete(n),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[o,a]of m(this,or)){if(m(this,or).delete(o),o===e)break;const l=m(this,Nn).get(a);l&&(Jt(l.effect),m(this,Nn).delete(a))}for(const[o,a]of m(this,yr)){if(o===n||m(this,_s).has(o))continue;const l=()=>{if(Array.from(m(this,or).values()).includes(o)){var p=document.createDocumentFragment();Xi(a,p),p.append(Ar()),m(this,Nn).set(o,{effect:a,fragment:p})}else Jt(a);m(this,_s).delete(o),m(this,yr).delete(o)};m(this,Oo)||!r?(m(this,_s).add(o),bs(a,l,!1)):l()}}});re(this,Fa,e=>{m(this,or).delete(e);const n=Array.from(m(this,or).values());for(const[r,s]of m(this,Nn))n.includes(r)||(Jt(s.effect),m(this,Nn).delete(r))});this.anchor=e,Pe(this,Oo,n)}ensure(e,n){var r=ge,s=Kc();if(n&&!m(this,yr).has(e)&&!m(this,Nn).has(e))if(s){var o=document.createDocumentFragment(),a=Ar();o.append(a),m(this,Nn).set(e,{effect:yn(()=>n(a)),fragment:o})}else m(this,yr).set(e,yn(()=>n(this.anchor)));if(m(this,or).set(r,e),s){for(const[l,c]of m(this,yr))l===e?r.unskip_effect(c):r.skip_effect(c);for(const[l,c]of m(this,Nn))l===e?r.unskip_effect(c.effect):r.skip_effect(c.effect);r.oncommit(m(this,zo)),r.ondiscard(m(this,Fa))}else m(this,zo).call(this,r)}}or=new WeakMap,yr=new WeakMap,Nn=new WeakMap,_s=new WeakMap,Oo=new WeakMap,zo=new WeakMap,Fa=new WeakMap;function j(t,e,n=!1){var r=new Va(t),s=n?rs:0;function o(a,l){r.ensure(a,l)}to(()=>{var a=!1;e((l,c=0)=>{a=!0,o(c,l)}),a||o(-1,null)},s)}const vd=Symbol("NaN");function gd(t,e,n){var r=new Va(t),s=!Js();to(()=>{var o=e();o!==o&&(o=vd),s&&o!==null&&typeof o=="object"&&(o={}),r.ensure(o,n)})}function Ji(t,e){return e}function md(t,e,n){for(var r=[],s=e.length,o,a=e.length,l=0;l<s;l++){let _=e[l];bs(_,()=>{if(o){if(o.pending.delete(_),o.done.add(_),o.pending.size===0){var d=t.outrogroups;Ci(t,Ba(o.done)),d.delete(o),d.size===0&&(t.outrogroups=null)}}else a-=1},!1)}if(a===0){var c=r.length===0&&n!==null&&t.pending.size===0;if(c){var p=n,u=p.parentNode;Bf(u),u.append(p),t.items.clear()}Ci(t,e,!c)}else o={pending:new Set(e),done:new Set},(t.outrogroups??(t.outrogroups=new Set)).add(o)}function Ci(t,e,n=!0){var r;if(t.pending.size>0){r=new Set;for(const a of t.pending.values())for(const l of a)r.add(t.items.get(l).e)}for(var s=0;s<e.length;s++){var o=e[s];if(r!=null&&r.has(o)){o.f|=wr;const a=document.createDocumentFragment();Xi(o,a)}else Jt(e[s],n)}}var kl;function mt(t,e,n,r,s,o=null){var a=t,l=new Map,c=(e&yc)!==0;if(c){var p=t;a=p.appendChild(Ar())}var u=null,_=Wi(()=>{var H=n();return Ha(H)?H:H==null?[]:Ba(H)}),d,T=new Map,b=!0;function w(H){(U.effect.f&wn)===0&&(U.pending.delete(H),U.fallback=u,_d(U,d,a,e,r),u!==null&&(d.length===0?(u.f&wr)===0?Ia(u):(u.f^=wr,xo(u,null,a)):bs(u,()=>{u=null})))}function A(H){U.pending.delete(H)}var N=to(()=>{d=i(_);for(var H=d.length,X=new Set,C=ge,$=Kc(),O=0;O<H;O+=1){var te=d[O],ee=r(te,O),fe=b?null:l.get(ee);fe?(fe.v&&Gs(fe.v,te),fe.i&&Gs(fe.i,O),$&&C.unskip_effect(fe.e)):(fe=bd(l,b?a:kl??(kl=Ar()),te,ee,O,s,e,n),b||(fe.e.f|=wr),l.set(ee,fe)),X.add(ee)}if(H===0&&o&&!u&&(b?u=yn(()=>o(a)):(u=yn(()=>o(kl??(kl=Ar()))),u.f|=wr)),H>X.size&&vf(),!b)if(T.set(C,X),$){for(const[pe,he]of l)X.has(pe)||C.skip_effect(he.e);C.oncommit(w),C.ondiscard(A)}else w(C);i(_)}),U={effect:N,items:l,pending:T,outrogroups:null,fallback:u};b=!1}function io(t){for(;t!==null&&(t.f&qn)===0;)t=t.next;return t}function _d(t,e,n,r,s){var fe,pe,he,Ye,qe,et,K,ve,oe;var o=(r&Ju)!==0,a=e.length,l=t.items,c=io(t.effect.first),p,u=null,_,d=[],T=[],b,w,A,N;if(o)for(N=0;N<a;N+=1)b=e[N],w=s(b,N),A=l.get(w).e,(A.f&wr)===0&&((pe=(fe=A.nodes)==null?void 0:fe.a)==null||pe.measure(),(_??(_=new Set)).add(A));for(N=0;N<a;N+=1){if(b=e[N],w=s(b,N),A=l.get(w).e,t.outrogroups!==null)for(const le of t.outrogroups)le.pending.delete(A),le.done.delete(A);if((A.f&dn)!==0&&(Ia(A),o&&((Ye=(he=A.nodes)==null?void 0:he.a)==null||Ye.unfix(),(_??(_=new Set)).delete(A))),(A.f&wr)!==0)if(A.f^=wr,A===c)xo(A,null,n);else{var U=u?u.next:c;A===t.effect.last&&(t.effect.last=A.prev),A.prev&&(A.prev.next=A.next),A.next&&(A.next.prev=A.prev),Yr(t,u,A),Yr(t,A,U),xo(A,U,n),u=A,d=[],T=[],c=io(u.next);continue}if(A!==c){if(p!==void 0&&p.has(A)){if(d.length<T.length){var H=T[0],X;u=H.prev;var C=d[0],$=d[d.length-1];for(X=0;X<d.length;X+=1)xo(d[X],H,n);for(X=0;X<T.length;X+=1)p.delete(T[X]);Yr(t,C.prev,$.next),Yr(t,u,C),Yr(t,$,H),c=H,u=$,N-=1,d=[],T=[]}else p.delete(A),xo(A,c,n),Yr(t,A.prev,A.next),Yr(t,A,u===null?t.effect.first:u.next),Yr(t,u,A),u=A;continue}for(d=[],T=[];c!==null&&c!==A;)(p??(p=new Set)).add(c),T.push(c),c=io(c.next);if(c===null)continue}(A.f&wr)===0&&d.push(A),u=A,c=io(A.next)}if(t.outrogroups!==null){for(const le of t.outrogroups)le.pending.size===0&&(Ci(t,Ba(le.done)),(qe=t.outrogroups)==null||qe.delete(le));t.outrogroups.size===0&&(t.outrogroups=null)}if(c!==null||p!==void 0){var O=[];if(p!==void 0)for(A of p)(A.f&dn)===0&&O.push(A);for(;c!==null;)(c.f&dn)===0&&c!==t.fallback&&O.push(c),c=io(c.next);var te=O.length;if(te>0){var ee=(r&yc)!==0&&a===0?n:null;if(o){for(N=0;N<te;N+=1)(K=(et=O[N].nodes)==null?void 0:et.a)==null||K.measure();for(N=0;N<te;N+=1)(oe=(ve=O[N].nodes)==null?void 0:ve.a)==null||oe.fix()}md(t,O,ee)}}o&&Sr(()=>{var le,P;if(_!==void 0)for(A of _)(P=(le=A.nodes)==null?void 0:le.a)==null||P.apply()})}function bd(t,e,n,r,s,o,a,l){var c=(a&Xu)!==0?(a&ef)===0?Df(n,!1,!1):jr(n):null,p=(a&Qu)!==0?jr(s):null;return{v:c,i:p,e:yn(()=>(o(e,c??n,p??s,l),()=>{t.delete(r)}))}}function xo(t,e,n){if(t.nodes)for(var r=t.nodes.start,s=t.nodes.end,o=e&&(e.f&wr)===0?e.nodes.start:n;r!==null;){var a=la(r);if(o.before(r),r===s)return;r=a}}function Yr(t,e,n){e===null?t.effect.first=n:e.next=n,n===null?t.effect.last=e:n.prev=e}function wl(t,e,n=!1,r=!1,s=!1,o=!1){var a=t,l="";if(n)var c=t;J(()=>{var p=Me;if(l!==(l=e()??"")){if(n){p.nodes=null,c.innerHTML=l,l!==""&&ss(cr(c),c.lastChild);return}if(p.nodes!==null&&(Jc(p.nodes.start,p.nodes.end),p.nodes=null),l!==""){var u=r?Sc:s?lf:void 0,_=Ua(r?"svg":s?"math":"template",u);_.innerHTML=l;var d=r||s?_:_.content;if(ss(cr(d),d.lastChild),r||s)for(;cr(d);)a.before(cr(d));else a.before(d)}}})}function Se(t,e,n,r,s){var l,c;if((l=e.$$host)!=null&&l.$$shadowRoot){const p=Ua("slot");y(t,p);return}var o=(c=e.$$slots)==null?void 0:c[n],a=!1;o===!0&&(o=e.children,a=!0),o===void 0||o(t,a?()=>r:r)}function Sl(t,e,n){var r=new Va(t);to(()=>{var s=e()??null;r.ensure(s,s&&(o=>n(o,s)))},rs)}function xd(t,e,n,r,s,o){var a=null,l=t,c=new Va(l,!1);to(()=>{const p=e()||null;var u=Sc;if(p===null){c.ensure(null,null);return}return c.ensure(p,_=>{if(p){if(a=Ua(p,u),ss(a,a),r){var d=null,T=a.appendChild(Ar());r(a,T),d==null||d.remove()}Me.nodes.end=a,_.before(a)}}),()=>{}},rs),ja(()=>{})}function yd(t,e){var n=void 0,r;Xc(()=>{n!==(n=e())&&(r&&(Jt(r),r=null),n&&(r=yn(()=>{Wa(()=>n(t))})))})}function hu(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(e=0;e<s;e++)t[e]&&(n=hu(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function kd(){for(var t,e,n=0,r="",s=arguments.length;n<s;n++)(t=arguments[n])&&(e=hu(t))&&(r&&(r+=" "),r+=e);return r}function vu(t){return typeof t=="object"?kd(t):t??""}const Tl=[...` 	
\r\f \v\uFEFF`];function wd(t,e,n){var r=t==null?"":""+t;if(e&&(r=r?r+" "+e:e),n){for(var s of Object.keys(n))if(n[s])r=r?r+" "+s:s;else if(r.length)for(var o=s.length,a=0;(a=r.indexOf(s,a))>=0;){var l=a+o;(a===0||Tl.includes(r[a-1]))&&(l===r.length||Tl.includes(r[l]))?r=(a===0?"":r.substring(0,a))+r.substring(l+1):a=l}}return r===""?null:r}function $l(t,e=!1){var n=e?" !important;":";",r="";for(var s of Object.keys(t)){var o=t[s];o!=null&&o!==""&&(r+=" "+s+": "+o+n)}return r}function ei(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function Sd(t,e){if(e){var n="",r,s;if(Array.isArray(e)?(r=e[0],s=e[1]):r=e,t){t=String(t).replaceAll(/\/\*.*?\*\//g,"").trim();var o=!1,a=0,l=!1,c=[];r&&c.push(...Object.keys(r).map(ei)),s&&c.push(...Object.keys(s).map(ei));var p=0,u=-1;const w=t.length;for(var _=0;_<w;_++){var d=t[_];if(l?d==="/"&&t[_-1]==="*"&&(l=!1):o?o===d&&(o=!1):d==="/"&&t[_+1]==="*"?l=!0:d==='"'||d==="'"?o=d:d==="("?a++:d===")"&&a--,!l&&o===!1&&a===0){if(d===":"&&u===-1)u=_;else if(d===";"||_===w-1){if(u!==-1){var T=ei(t.substring(p,u).trim());if(!c.includes(T)){d!==";"&&_++;var b=t.substring(p,_).trim();n+=" "+b+";"}}p=_+1,u=-1}}}}return r&&(n+=$l(r)),s&&(n+=$l(s,!0)),n=n.trim(),n===""?null:n}return t==null?null:String(t)}function fn(t,e,n,r,s,o){var a=t[mi];if(a!==n||a===void 0){var l=wd(n,r,o);l==null?t.removeAttribute("class"):e?t.className=l:t.setAttribute("class",l),t[mi]=n}else if(o&&s!==o)for(var c in o){var p=!!o[c];(s==null||p!==!!s[c])&&t.classList.toggle(c,p)}return o}function ti(t,e={},n,r){for(var s in n){var o=n[s];e[s]!==o&&(n[s]==null?t.style.removeProperty(s):t.style.setProperty(s,o,r))}}function ys(t,e,n,r){var s=t[_i];if(s!==e){var o=Sd(e,r);o==null?t.removeAttribute("style"):t.style.cssText=o,t[_i]=e}else r&&(Array.isArray(r)?(ti(t,n==null?void 0:n[0],r[0]),ti(t,n==null?void 0:n[1],r[1],"important")):ti(t,n,r));return r}function gu(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function El(t,e){var n=!("__defaultValue"in t);!n&&t.__defaultValue===e||(t.__defaultValue=e,mu(t,!n||"__value"in t))}function mu(t,e){var n=t.__defaultValue,r=t.multiple,s=r?n??[]:null;if(!(r&&!Ha(s))){var o=t.selectedIndex,a=e&&r?new Set(t.selectedOptions):null;for(var l of t.options){var c=zs(l);gu(l,r?s.includes(c):Wc(c,n))}if(e)if(a!==null)for(l of t.options){var p=a.has(l);l.selected!==p&&(l.selected=p)}else t.selectedIndex!==o&&(t.selectedIndex=o)}}function Ro(t,e,n=!1){if(t.multiple){if(e==null)return;if(!Ha(e))return ff();for(var r of t.options)r.selected=e.includes(zs(r));return}for(r of t.options){var s=zs(r);if(Wc(s,e)){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function yo(t){var e=new MutationObserver(n=>{n.every(Td)||("__defaultValue"in t&&mu(t,!1),"__value"in t&&Ro(t,t.__value))});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ja(()=>{e.disconnect()})}function ni(t,e,n=e){var r=new WeakSet,s=!0;Ic(t,"change",o=>{var a=o?"[selected]":":checked",l;if(t.multiple)l=[].map.call(t.querySelectorAll(a),zs);else{var c=t.querySelector(a)??t.querySelector("option:not([disabled])");l=c&&zs(c)}n(l),t.__value=l,ge!==null&&r.add(ge)}),Wa(()=>{var o=e();if(t===document.activeElement){var a=ge;if(r.has(a))return}if(Ro(t,o,s),s&&o===void 0){var l=t.querySelector(":checked");l!==null&&(o=zs(l),n(o))}t.__value=o,s=!1})}function zs(t){return"__value"in t?t.__value:t.value}function Td(t){if(t.target.closest("selectedcontent")!==null)return!0;if(t.type==="childList"){var e=[...t.addedNodes,...t.removedNodes];return e.length>0&&e.every(n=>n.nodeName==="SELECTEDCONTENT")}return!1}const lo=Symbol("class"),co=Symbol("style"),_u=Symbol("is custom element"),bu=Symbol("is html"),$d=Bi?"input":"INPUT",Ed=Bi?"option":"OPTION",xu=Bi?"select":"SELECT";function Ie(t,e,n,r){var s=yu(t);s[e]!==(s[e]=n)&&(e==="loading"&&(t[Zu]=n),n==null?t.removeAttribute(e):typeof n!="string"&&ku(t).has(e)?t[e]=n:t.setAttribute(e,n))}function Ad(t,e,n,r,s=!1,o=!1){var a=yu(t),l=a[_u],c=!a[bu],p=e||{},u=t.nodeName===Ed,_=t.nodeName===xu;for(var d in e)!(d in n)&&d[0]+d[1]!=="$$"&&(n[d]=null);n.class?n.class=vu(n.class):n[lo]&&(n.class=null),n[co]&&(n.style??(n.style=null));var T=ku(t);if(t.nodeName===$d&&"type"in n&&("value"in n||"__value"in n)){var b=n.type;(b!==p.type||b===void 0&&t.hasAttribute("type"))&&(p.type=b,Ie(t,"type",b))}for(const C in n){let $=n[C];if(u&&C==="value"&&$==null){t.value=t.__value="",p[C]=$;continue}if(C==="class"){var w=t.namespaceURI==="http://www.w3.org/1999/xhtml";fn(t,w,$,r,e==null?void 0:e[lo],n[lo]),p[C]=$,p[lo]=n[lo];continue}if(C==="style"){ys(t,$,e==null?void 0:e[co],n[co]),p[C]=$,p[co]=n[co];continue}var A=p[C];if(!($===A&&!($===void 0&&t.hasAttribute(C)))){p[C]=$;var N=C[0]+C[1];if(N!=="$$")if(N==="on"){const O={},te="$$"+C;let ee=C.slice(2);var U=Qf(ee);if(Zf(ee)&&(ee=ee.slice(0,-7),O.capture=!0),!U&&A){if($!=null)continue;t.removeEventListener(ee,p[te],O),p[te]=null}if(U)L(ee,t,$),Yn([ee]);else if($!=null){let fe=function(pe){p[C].call(this,pe)};p[te]=fu(ee,t,fe,O)}}else if(C==="style")Ie(t,C,$);else if(C==="autofocus")Pc(t,!!$);else if(!l&&(C==="__value"||C==="value"&&$!=null))t.value=t.__value=$;else if(C==="selected"&&u)gu(t,$);else{var H=C;c||(H=ed(H));var X=H==="defaultValue"||H==="defaultChecked";if(_&&H==="defaultValue")continue;if($==null&&!l&&!X)if(a[C]=null,H==="value"||H==="checked"){let O=t;const te=e===void 0;if(H==="value"){let ee=O.defaultValue;O.removeAttribute(H),O.defaultValue=ee,O.value=O.__value=te?ee:null}else{let ee=O.defaultChecked;O.removeAttribute(H),O.defaultChecked=ee,O.checked=te?ee:!1}}else t.removeAttribute(C);else X||(l||typeof $!="string")&&T.has(H)?(t[H]=$,H in a&&(a[H]=$t)):typeof $!="function"&&Ie(t,H,$)}}}return p}function Al(t,e,n=[],r=[],s=[],o,a=!1,l=!1){Nc(s,n,r,c=>{var p=void 0,u={},_=t.nodeName===xu,d=!1;if(Xc(()=>{var b=e(...c.map(i)),w=Ad(t,p,b,o,a,l);if(d&&_){var A=t;"defaultValue"in b&&El(A,b.defaultValue),"value"in b&&Ro(A,b.value)}for(let U of Object.getOwnPropertySymbols(u))b[U]||Jt(u[U]);for(let U of Object.getOwnPropertySymbols(b)){var N=b[U];U.description===cf&&(!p||N!==p[U])&&(u[U]&&Jt(u[U]),u[U]=yn(()=>yd(t,()=>N))),w[U]=N}p=w}),_){var T=t;Wa(()=>{var b=p;"defaultValue"in b&&El(T,b.defaultValue),Ro(T,b.value,!0),yo(T)})}d=!0})}function yu(t){return t[_a]??(t[_a]={[_u]:t.nodeName.includes("-"),[bu]:t.namespaceURI===wc})}var Cl=new Map;function ku(t){var e=t.getAttribute("is")||t.nodeName,n=Cl.get(e);if(n)return n;Cl.set(e,n=new Set);for(var r,s=t,o=Element.prototype;o!==s;){r=gc(s);for(var a in r)r[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&n.add(a);s=Di(s)}return n}function dt(t,e,n=e){var r=new WeakSet;Ic(t,"input",async s=>{var o=s?t.defaultValue:t.value;if(o=ri(t)?si(o):o,n(o),ge!==null&&r.add(ge),await Qi(),o!==(o=e())){var a=t.selectionStart,l=t.selectionEnd,c=t.value.length;if(t.value=o??"",l!==null){var p=t.value.length;a===l&&l===c&&p>c?(t.selectionStart=p,t.selectionEnd=p):(t.selectionStart=a,t.selectionEnd=Math.min(l,p))}}}),Vr(e)==null&&t.value&&(n(ri(t)?si(t.value):t.value),ge!==null&&r.add(ge)),Yi(()=>{var s=e();if(t===document.activeElement){var o=ge;if(r.has(o))return}ri(t)&&s===si(t.value)||t.type==="date"&&!s&&!t.value||s!==t.value&&(t.value=s??"")})}function ri(t){var e=t.type;return e==="number"||e==="range"}function si(t){return t===""?null:+t}function oi(t,e){return t===e||(t==null?void 0:t[$r])===e}function Ys(t=Ui(),e,n,r){var s=ht.r,o=Me;return Wa(()=>{var a,l;return Yi(()=>{a=l,l=[],Vr(()=>{oi(n(...l),t)||(e(t,...l),a&&oi(n(...a),t)&&e(null,...a))})}),()=>{let c=o;for(;c!==s&&c.parent!==null&&c.parent.f&Ea;)c=c.parent;const p=()=>{l&&oi(n(...l),t)&&e(null,...l)},u=c.teardown;c.teardown=()=>{p(),u==null||u()}}}),t}function wu(t=!1){const e=ht,n=e.l.u;if(!n)return;let r=()=>is(e.s);if(t){let s=0,o={};const a=qs(()=>{let l=!1;const c=e.s;for(const p in c)c[p]!==o[p]&&(o[p]=c[p],l=!0);return l&&s++,s});r=()=>i(a)}n.b.length&&Wf(()=>{Rl(e,r),vi(n.b)}),Qt(()=>{const s=Vr(()=>n.m.map(Gu));return()=>{for(const o of s)typeof o=="function"&&o()}}),n.a.length&&Qt(()=>{Rl(e,r),vi(n.a)})}function Rl(t,e){if(t.l.s)for(const n of t.l.s)i(n);e()}function Cd(t){var e=jr(0);return function(){return arguments.length===1?(h(e,i(e)+1),arguments[0]):(i(e),t())}}const Rd={get(t,e){if(!t.exclude.includes(e))return i(t.version),e in t.special?t.special[e]():t.props[e]},set(t,e,n){if(!(e in t.special)){var r=Me;try{Kn(t.parent_effect),t.special[e]=xt({get[e](){return t.props[e]}},e,kc)}finally{Kn(r)}}return t.special[e](n),gl(t.version),!0},getOwnPropertyDescriptor(t,e){if(!t.exclude.includes(e)&&e in t.props)return{enumerable:!0,configurable:!0,value:t.props[e]}},deleteProperty(t,e){return t.exclude.includes(e)||(t.exclude.push(e),gl(t.version)),!0},has(t,e){return t.exclude.includes(e)?!1:e in t.props},ownKeys(t){return Reflect.ownKeys(t.props).filter(e=>!t.exclude.includes(e))}};function ke(t,e){return new Proxy({props:t,exclude:e,special:{},version:jr(0),parent_effect:Me},Rd)}const Pd={get(t,e){let n=t.props.length;for(;n--;){let r=t.props[n];if(ao(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r)return r[e]}},set(t,e,n){let r=t.props.length;for(;r--;){let s=t.props[r];ao(s)&&(s=s());const o=ts(s,e);if(o&&o.set)return o.set(n),!0}return!1},getOwnPropertyDescriptor(t,e){let n=t.props.length;for(;n--;){let r=t.props[n];if(ao(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r){const s=ts(r,e);return s&&!s.configurable&&(s.configurable=!0),s}}},has(t,e){if(e===$r||e===xc)return!1;for(let n of t.props)if(ao(n)&&(n=n()),n!=null&&e in n)return!0;return!1},ownKeys(t){const e=[];for(let n of t.props)if(ao(n)&&(n=n()),!!n){for(const r in n)e.includes(r)||e.push(r);for(const r of Object.getOwnPropertySymbols(n))e.includes(r)||e.push(r)}return e}};function $e(...t){return new Proxy({props:t},Pd)}function xt(t,e,n,r){var X;var s=!Qs||(n&nf)!==0,o=(n&rf)!==0,a=(n&sf)!==0,l=r,c=!0,p=void 0,u=()=>a&&s?(p??(p=qs(r)),i(p)):(c&&(c=!1,l=a?Vr(r):r),l);let _;if(o){var d=$r in t||xc in t;_=((X=ts(t,e))==null?void 0:X.set)??(d&&e in t?C=>t[e]=C:void 0)}var T,b=!1;o?[T,b]=Af(()=>t[e]):T=t[e],T===void 0&&r!==void 0&&(T=u(),_&&(s&&xf(),_(T)));var w;if(s?w=()=>{var C=t[e];return C===void 0?u():(c=!0,C)}:w=()=>{var C=t[e];return C!==void 0&&(l=void 0),C===void 0?l:C},s&&(n&kc)===0)return w;if(_){var A=t.$$legacy;return(function(C,$){return arguments.length>0?((!s||!$||A||b)&&_($?w():C),C):w()})}var N=!1,U=((n&tf)!==0?qs:Wi)(()=>(N=!1,w()));o&&i(U);var H=Me;return(function(C,$){if(arguments.length>0){const O=$?i(U):s&&o?Xe(C):C;return h(U,O),N=!0,l!==void 0&&(l=O),C}return Wr&&N||(H.f&wn)!==0?U.v:i(U)})}function no(t){ht===null&&Ec(),Qs&&ht.l!==null?Id(ht).m.push(t):Qt(()=>{const e=Vr(t);if(typeof e=="function")return e})}function el(t){ht===null&&Ec(),no(()=>()=>Vr(t))}function Id(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}const Nd="5";var hc;typeof window<"u"&&((hc=window.__svelte??(window.__svelte={})).v??(hc.v=new Set)).add(Nd);const ls=()=>window.__IDE_BOOTSTRAP__||{};function Od(t){const{rootPath:e="",session:n=""}=ls();return`${e}/api/sessions/${encodeURIComponent(n)}/ide${t}`}async function _t(t,e={}){const n=await fetch(Od(t),e),r=await n.json().catch(()=>({}));if(!n.ok){const s=new Error(r.error||"Request failed");throw Object.assign(s,r),s}return r}const Tt=(t,e)=>`/ssh-connections/${encodeURIComponent(t)}${e}`,Be={chat:async(t,e=80)=>{const{rootPath:n=""}=ls(),r=`${n}/api/sessions/${encodeURIComponent(t)}/ide/chat?limit=${e}`,s=await fetch(r),o=await s.json().catch(()=>({}));if(!s.ok)throw new Error(o.error||"Could not load chat");return o},browse:async(t="")=>{const{rootPath:e=""}=ls(),n=`${e}/api/ide/browse?path=${encodeURIComponent(t)}`,r=await fetch(n),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not browse folders");return s},sessionAgent:async t=>{const{rootPath:e=""}=ls(),n=await fetch(`${e}/api/sessions/${encodeURIComponent(t)}/agent`),r=await n.json().catch(()=>({}));if(!n.ok)throw new Error(r.error||"Could not read agent settings");return r},setSessionAgent:async(t,e)=>{const{rootPath:n=""}=ls(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(t)}/agent`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({agent:e,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not switch agent");return s},setSessionModel:async(t,e)=>{const{rootPath:n=""}=ls(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(t)}/model`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:e,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change model");return s},setSessionEffort:async(t,e)=>{const{rootPath:n=""}=ls(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(t)}/effort`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({effort:e,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change effort");return s},browseOn:(t,e="")=>_t(Tt(t,`/browse?path=${encodeURIComponent(e)}`)),setWorkspaceRoot:(t,e,n)=>_t(Tt(t,"/workspace-root"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({workspace_root:e,label:n})}),agentContext:t=>_t(Tt(t,"/agent-context")),hostKey:t=>_t(Tt(t,"/host-key")),trustHost:t=>_t(Tt(t,"/host-key"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({accept:!0})}),listConnections:()=>_t("/ssh-connections"),createConnection:t=>_t("/ssh-connections",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),deleteConnection:t=>_t(Tt(t,""),{method:"DELETE"}),connect:(t,e)=>_t(Tt(t,"/connect"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e||""})}),status:t=>_t(Tt(t,"/status?reconnect=1")),listFiles:(t,e)=>_t(Tt(t,`/files?path=${encodeURIComponent(e)}`)),searchFiles:(t,e,n)=>_t(Tt(t,`/files/search?path=${encodeURIComponent(e)}&query=${encodeURIComponent(n)}`)),readFile:(t,e)=>_t(Tt(t,`/file?path=${encodeURIComponent(e)}`)),saveFile:(t,e,n)=>_t(Tt(t,"/file"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:e,content:n})}),fs:(t,e)=>_t(Tt(t,"/fs"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),git:(t,e)=>_t(Tt(t,"/git"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),focusTerminal:t=>_t(Tt(t,"/focus-terminal"),{method:"POST"}),updateConnection:(t,e)=>_t(Tt(t,""),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),listTerminals:t=>_t(Tt(t,"/terminals")),closeTerminal:(t,e)=>_t(Tt(t,`/terminals/${e}`),{method:"DELETE"}),getWorkspace:t=>_t(Tt(t,"/workspace")),saveWorkspace:(t,e)=>_t(Tt(t,"/workspace"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};var Mo,Lo,Do,Fo,Ho,Bo,Uo,jo,Wo,Vo,qo,Go,Ko,Yo,Zo,Xo,Qo,Jo,ea,ta,na,ra,sa,oa;class zd{constructor(){re(this,Mo,z(Xe([])));re(this,Lo,z(""));re(this,Do,z("idle"));re(this,Fo,z("Ready"));re(this,Ho,z("No file open"));re(this,Bo,z("."));re(this,Uo,z(Xe([])));re(this,jo,z(Xe({})));re(this,Wo,z(Xe({})));re(this,Vo,z(""));re(this,qo,z(Xe([])));re(this,Go,z(""));re(this,Ko,z(""));re(this,Yo,z(""));re(this,Zo,z(Xe([])));re(this,Xo,z(""));re(this,Qo,z(!1));re(this,Jo,z(!1));re(this,ea,z(0));re(this,ta,z(0));re(this,na,z(!1));re(this,ra,z(""));re(this,sa,z(Xe([])));re(this,oa,z(!1));Oe(this,"restoredKey","");Oe(this,"persistTimer",null)}get connections(){return i(m(this,Mo))}set connections(e){h(m(this,Mo),e,!0)}get connectionId(){return i(m(this,Lo))}set connectionId(e){h(m(this,Lo),e,!0)}get connectionState(){return i(m(this,Do))}set connectionState(e){h(m(this,Do),e,!0)}get statusText(){return i(m(this,Fo))}set statusText(e){h(m(this,Fo),e,!0)}get detailText(){return i(m(this,Ho))}set detailText(e){h(m(this,Ho),e,!0)}get path(){return i(m(this,Bo))}set path(e){h(m(this,Bo),e,!0)}get entries(){return i(m(this,Uo))}set entries(e){h(m(this,Uo),e,!0)}get expanded(){return i(m(this,jo))}set expanded(e){h(m(this,jo),e,!0)}get treeChildren(){return i(m(this,Wo))}set treeChildren(e){h(m(this,Wo),e,!0)}get filter(){return i(m(this,Vo))}set filter(e){h(m(this,Vo),e,!0)}get tabs(){return i(m(this,qo))}set tabs(e){h(m(this,qo),e,!0)}get activeKey(){return i(m(this,Go))}set activeKey(e){h(m(this,Go),e,!0)}get gitOutput(){return i(m(this,Ko))}set gitOutput(e){h(m(this,Ko),e,!0)}get gitStatus(){return i(m(this,Yo))}set gitStatus(e){h(m(this,Yo),e,!0)}get gitBranches(){return i(m(this,Zo))}set gitBranches(e){h(m(this,Zo),e,!0)}get gitBranch(){return i(m(this,Xo))}set gitBranch(e){h(m(this,Xo),e,!0)}get needsHostKey(){return i(m(this,Qo))}set needsHostKey(e){h(m(this,Qo),e,!0)}get notARepo(){return i(m(this,Jo))}set notARepo(e){h(m(this,Jo),e,!0)}get gitAhead(){return i(m(this,ea))}set gitAhead(e){h(m(this,ea),e,!0)}get gitBehind(){return i(m(this,ta))}set gitBehind(e){h(m(this,ta),e,!0)}get gitHasUpstream(){return i(m(this,na))}set gitHasUpstream(e){h(m(this,na),e,!0)}get gitBusy(){return i(m(this,ra))}set gitBusy(e){h(m(this,ra),e,!0)}get gitCommits(){return i(m(this,sa))}set gitCommits(e){h(m(this,sa),e,!0)}get gitHistoryLoaded(){return i(m(this,oa))}set gitHistoryLoaded(e){h(m(this,oa),e,!0)}get connection(){return this.connections.find(e=>e.id===this.connectionId)||null}get activeTab(){return this.tabs.find(e=>e.key===this.activeKey)||null}get visibleEntries(){const e=this.filter.trim().toLowerCase();return e?this.entries.filter(n=>n.name.toLowerCase().includes(e)):this.entries}get dirtyCount(){return this.tabs.filter(e=>e.dirty).length}get gitDirtyCount(){return this.gitStatus.split(`
`).filter(e=>e.trim()&&!e.startsWith("##")).length}resetWorkspaceView(){this.tabs=[],this.activeKey="",this.restoredKey="",this.path=".",this.entries=[],this.expanded={},this.treeChildren={},this.filter="",this.gitOutput="",this.gitStatus="",this.gitBranches=[],this.gitBranch="",this.needsHostKey=!1,this.notARepo=!1,this.gitAhead=0,this.gitBehind=0,this.gitHasUpstream=!1,this.gitCommits=[],this.gitHistoryLoaded=!1}setStatus(e,n){this.statusText=e,n!==void 0&&(this.detailText=n)}async loadConnections(){try{const e=await Be.listConnections();this.connections=e.connections||[],!this.connectionId&&this.connections.length&&(this.connectionId=this.connections[0].id)}catch(e){this.setStatus(e.message||"Could not load connections")}}async refreshStatus(){var e,n,r;if(this.connectionId)try{const s=await Be.status(this.connectionId);s.connected?(this.connectionState="connected",this.setStatus(`Connected · ${((e=this.connection)==null?void 0:e.label)||"SSH workspace"}`,`SSH terminal: ${s.window_name||"open"}`),await this.restoreWorkspace()):(this.connectionState="reconnect",this.entries=[],this.setStatus(`Reconnect required · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,(r=this.connection)!=null&&r.has_password?"Auto-reconnect failed — select Connect to retry":"Select Connect to reopen SSH"))}catch(s){this.connectionState="error",this.setStatus(s.message||"Could not check SSH connection")}}async connect(e){var n;if(this.connectionId){this.connectionState="connecting",this.setStatus("Connecting…");try{const r=await Be.connect(this.connectionId,e);this.connectionState="connected",this.setStatus(`Connected · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,`SSH terminal: ${r.window_name||"open"}`),await this.restoreWorkspace()}catch(r){this.connectionState="error",this.setStatus(r.message||"Could not connect"),this.needsHostKey=!!r.needs_host_key}}}async refreshFiles(e){if(!this.connectionId)return;const n=e||this.path||".";try{const r=await Be.listFiles(this.connectionId,n);this.path=r.path||n,this.entries=r.entries||[],this.remember()}catch(r){this.setStatus(r.message||"Could not list remote files")}}async toggleDirectory(e){if(this.expanded[e]){const n={...this.expanded};delete n[e],this.expanded=n;return}if(this.expanded={...this.expanded,[e]:!0},!this.treeChildren[e])try{const n=await Be.listFiles(this.connectionId,e);this.treeChildren={...this.treeChildren,[e]:n.entries||[]}}catch(n){this.setStatus(n.message||"Could not expand folder")}}openDiffTab(e,n){const r=`${this.connectionId}|diff:${e}`,s=this.tabs.find(a=>a.key===r);if(s)return s.content=n,s.saved=n,this.activeKey=r,s;const o={key:r,path:`${e} (diff)`,content:n,saved:n,dirty:!1,readOnly:!0,language:"plaintext"};return this.tabs=[...this.tabs,o],this.activeKey=r,o}async openFile(e){if(!this.connectionId)return null;const n=`${this.connectionId}|${e}`,r=this.tabs.find(s=>s.key===n);if(r)return this.activeKey=n,r;try{const s=await Be.readFile(this.connectionId,e),o={key:`${this.connectionId}|${s.path}`,path:s.path,content:s.content||"",saved:s.content||"",dirty:!1};return this.tabs=[...this.tabs,o],this.activeKey=o.key,this.setStatus("Opened",o.path),this.remember(),o}catch(s){return this.setStatus(s.message||"Could not open remote file"),null}}updateContent(e,n){this.tabs=this.tabs.map(r=>r.key===e?{...r,content:n,dirty:n!==r.saved}:r),this.remember()}closeTab(e){var r;const n=this.tabs.find(s=>s.key===e);n!=null&&n.dirty&&!confirm(`Discard unsaved changes to ${n.path}?`)||(this.tabs=this.tabs.filter(s=>s.key!==e),this.activeKey===e&&(this.activeKey=((r=this.tabs.at(-1))==null?void 0:r.key)||""),this.remember())}async saveActive(){const e=this.activeTab;if(e)try{await Be.saveFile(this.connectionId,e.path,e.content),this.tabs=this.tabs.map(n=>n.key===e.key?{...n,saved:n.content,dirty:!1}:n),this.setStatus(`Saved ${e.path}`,e.path),this.remember()}catch(n){this.setStatus(n.message||"Could not save file")}}async restoreWorkspace(){const e=`${this.connectionId}`;if(!e)return;let n=null;try{n=await Be.getWorkspace(this.connectionId)}catch{n=null}if(await this.refreshFiles((n==null?void 0:n.last_directory)||"."),this.restoredKey===e)return;this.restoredKey=e;const r=(n==null?void 0:n.buffers)||{};for(const o of((n==null?void 0:n.tabs)||[]).slice(0,12)){const a=await this.openFile(o);a&&Object.prototype.hasOwnProperty.call(r,o)&&this.updateContent(a.key,r[o])}const s=this.tabs.find(o=>o.path===(n==null?void 0:n.active_path));s&&(this.activeKey=s.key)}remember(){this.persistTimer&&clearTimeout(this.persistTimer),this.persistTimer=setTimeout(()=>this.persist(),1500)}async persist(){var n;if(!this.connectionId)return;const e={};for(const r of this.tabs)r.dirty&&(e[r.path]=r.content);try{await Be.saveWorkspace(this.connectionId,{tabs:this.tabs.map(r=>r.path).slice(0,50),active_path:((n=this.activeTab)==null?void 0:n.path)||"",last_directory:this.path||".",buffers:e})}catch{}}async runGit(e,n={}){try{const r=await Be.git(this.connectionId,{action:e,path:this.path||".",...n});return r.not_a_repo?(this.gitOutput=r.error||"This folder is not a Git repository.",this.gitStatus="",this.gitBranches=[],this.gitBranch="",this.gitCommits=[],this.gitHistoryLoaded=!1,this.notARepo=!0,null):(this.notARepo=!1,this.gitAhead=r.ahead||0,this.gitBehind=r.behind||0,this.gitHasUpstream=!!r.has_upstream,e==="log"?(this.gitCommits=r.commits||[],this.gitHistoryLoaded=!0):e!=="show"&&(this.gitOutput=r.output||r.status||""),this.gitStatus=r.status||"",this.gitBranches=r.branches||[],this.gitBranch=r.current_branch||"",["commit","switch","create_branch","pull","push","fetch"].includes(e)&&(this.gitHistoryLoaded=!1),r)}catch(r){return this.gitOutput=r.message||"Git command failed",null}}}Mo=new WeakMap,Lo=new WeakMap,Do=new WeakMap,Fo=new WeakMap,Ho=new WeakMap,Bo=new WeakMap,Uo=new WeakMap,jo=new WeakMap,Wo=new WeakMap,Vo=new WeakMap,qo=new WeakMap,Go=new WeakMap,Ko=new WeakMap,Yo=new WeakMap,Zo=new WeakMap,Xo=new WeakMap,Qo=new WeakMap,Jo=new WeakMap,ea=new WeakMap,ta=new WeakMap,na=new WeakMap,ra=new WeakMap,sa=new WeakMap,oa=new WeakMap;const g=new zd;Tf();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
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
 */const Pl=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();var Dd=pu("<svg><!><!></svg>");function Ee(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]),r=ke(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);pn(e,!1);let s=xt(e,"name",8,void 0),o=xt(e,"color",8,"currentColor"),a=xt(e,"size",8,24),l=xt(e,"strokeWidth",8,2),c=xt(e,"absoluteStrokeWidth",8,!1),p=xt(e,"iconNode",24,()=>[]);wu();var u=Dd();Al(u,(T,b,w)=>({...Md,...T,...r,width:a(),height:a(),stroke:o(),"stroke-width":b,class:w}),[()=>Ld(r)?void 0:{"aria-hidden":"true"},()=>(is(c()),is(l()),is(a()),Vr(()=>c()?Number(l())*24/Number(a()):l())),()=>(is(Pl),is(s()),is(n),Vr(()=>Pl("lucide-icon","lucide",s()?`lucide-${s()}`:"",n.class)))]);var _=S(u);mt(_,1,p,Ji,(T,b)=>{var w=Ht(()=>Ku(i(b),2));let A=()=>i(w)[0],N=()=>i(w)[1];var U=ue(),H=q(U);xd(H,A,!0,(X,C)=>{Al(X,()=>({...N()}))}),y(T,U)});var d=v(_);Se(d,e,"default",{}),y(t,u),hn()}function Fd(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"m21 8-4-4-4 4"}],["path",{d:"M17 4v16"}]];Ee(t,$e({name:"arrow-down-up"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Hd(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];Ee(t,$e({name:"arrow-up"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function wa(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 6 9 17l-5-5"}]];Ee(t,$e({name:"check"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Tr(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];Ee(t,$e({name:"chevron-down"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Sa(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m9 18 6-6-6-6"}]];Ee(t,$e({name:"chevron-right"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Il(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];Ee(t,$e({name:"circle-alert"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Bd(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];Ee(t,$e({name:"circle-check"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Ud(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]];Ee(t,$e({name:"circle-dot"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function jd(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]];Ee(t,$e({name:"circle-user"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Wd(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];Ee(t,$e({name:"circle"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Vd(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}],["path",{d:"m9 10-5 5 5 5"}]];Ee(t,$e({name:"corner-down-left"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function qd(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]];Ee(t,$e({name:"corner-left-up"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Gd(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]];Ee(t,$e({name:"ellipsis"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Kd(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];Ee(t,$e({name:"external-link"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Nl(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m5 16-3 3 3 3"}],["path",{d:"m9 22 3-3-3-3"}]];Ee(t,$e({name:"file-code-corner"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Yd(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]];Ee(t,$e({name:"file-diff"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Zd(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]];Ee(t,$e({name:"file-plus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function tl(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}]];Ee(t,$e({name:"file"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Xd(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"}]];Ee(t,$e({name:"files"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function ai(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];Ee(t,$e({name:"folder-open"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Qd(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];Ee(t,$e({name:"folder-plus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Jd(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];Ee(t,$e({name:"folder"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Ri(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 6a9 9 0 0 0-9 9V3"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}]];Ee(t,$e({name:"git-branch"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function ep(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 16h.01"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["path",{d:"M21.946 12.013H2.054"}],["path",{d:"M6 16h.01"}]];Ee(t,$e({name:"hard-drive"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function tp(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];Ee(t,$e({name:"history"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function np(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];Ee(t,$e({name:"link-2"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function fr(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]];Ee(t,$e({name:"loader"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Ol(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}]];Ee(t,$e({name:"message-square"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function rp(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m14 10 7-7"}],["path",{d:"M20 10h-6V4"}],["path",{d:"m3 21 7-7"}],["path",{d:"M4 14h6v6"}]];Ee(t,$e({name:"minimize-2"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function sp(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}]];Ee(t,$e({name:"minus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function op(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{d:"M10 19v-3.96 3.15"}],["path",{d:"M7 19h5"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2"}]];Ee(t,$e({name:"monitor-smartphone"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function ap(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}]];Ee(t,$e({name:"panel-bottom"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function ip(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]];Ee(t,$e({name:"panel-left"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function lp(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"}]];Ee(t,$e({name:"paperclip"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Ao(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];Ee(t,$e({name:"plus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Pi(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];Ee(t,$e({name:"refresh-cw"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function nl(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];Ee(t,$e({name:"search"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function zl(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];Ee(t,$e({name:"server"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Ml(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M14 17H5"}],["path",{d:"M19 7h-9"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]];Ee(t,$e({name:"settings-2"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function cp(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]];Ee(t,$e({name:"shield-alert"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function ii(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];Ee(t,$e({name:"sparkles"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Ll(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]];Ee(t,$e({name:"square-terminal"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function up(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];Ee(t,$e({name:"square"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Dl(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];Ee(t,$e({name:"trash-2"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function fp(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]];Ee(t,$e({name:"undo-2"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}function Na(t,e){const n=ke(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];Ee(t,$e({name:"x"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=ue(),l=q(a);Se(l,e,"default",{}),y(s,a)},$$slots:{default:!0}}))}var dp=I('<span class="w-[14px] shrink-0"></span>'),pp=pu('<svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1.5 3.5h4l1.2 1.4h7.8v7.6H1.5z" fill="#c09553"></path></svg>'),hp=I(`<div draggable="true" role="treeitem" tabindex="0"><!> <span class="flex shrink-0 items-center"><!></span> <span class="flex-1 truncate text-vs-fg"> </span> <span class="pointer-events-none flex shrink-0 gap-0.5 opacity-0 transition-opacity
               group-hover:pointer-events-auto group-hover:opacity-100
               focus-within:pointer-events-auto focus-within:opacity-100"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Rename"><span class="text-[11px] leading-none">✎</span></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Delete"><span class="text-[11px] leading-none">🗑</span></button></span></div> <!>`,1);function Su(t,e){pn(e,!0);const n=Ht(()=>e.dir==="."?e.entry.name:`${e.dir}/${e.entry.name}`),r=Ht(()=>!!g.expanded[i(n)]),s=Ht(()=>g.treeChildren[i(n)]||[]),o=Ht(()=>{var K;return((K=g.activeTab)==null?void 0:K.path)===i(n)});async function a(){e.entry.is_dir?await g.toggleDirectory(i(n)):await g.openFile(i(n))}let l=z(!1);function c(K){K.stopPropagation(),K.dataTransfer.effectAllowed="move",K.dataTransfer.setData("text/x-ide-path",i(n))}function p(K){!e.entry.is_dir||!K.dataTransfer.types.includes("text/x-ide-path")||(K.preventDefault(),K.dataTransfer.dropEffect="move",h(l,!0))}async function u(K){if(h(l,!1),!e.entry.is_dir)return;K.preventDefault(),K.stopPropagation();const ve=K.dataTransfer.getData("text/x-ide-path");if(!ve||ve===i(n))return;if(i(n)===ve||i(n).startsWith(`${ve}/`)){g.setStatus("Cannot move a folder into itself");return}const oe=ve.split("/").pop(),le=i(n)==="."?oe:`${i(n)}/${oe}`;if(le!==ve)try{await Be.fs(g.connectionId,{action:"rename",path:ve,new_path:le}),await g.refreshFiles(),g.setStatus(`Moved ${oe} to ${i(n)}`)}catch(P){g.setStatus(P.message||"Could not move")}}function _(K){var ve;K.preventDefault(),K.stopPropagation(),(ve=g.openTreeMenu)==null||ve.call(g,{path:i(n),isDir:e.entry.is_dir,x:K.clientX,y:K.clientY})}async function d(K){if(K.stopPropagation(),!!confirm(`Delete ${i(n)}? Folders must already be empty.`))try{await Be.fs(g.connectionId,{action:"delete",path:i(n)}),await g.refreshFiles()}catch(ve){g.setStatus(ve.message||"Could not delete")}}async function T(K){K.stopPropagation();const ve=prompt("Rename to (relative path):",i(n));if(!(!ve||ve===i(n)))try{await Be.fs(g.connectionId,{action:"rename",path:i(n),new_path:ve}),await g.refreshFiles()}catch(oe){g.setStatus(oe.message||"Could not rename")}}var b=hp(),w=q(b);let A;var N=S(w);{var U=K=>{var ve=ue(),oe=q(ve);{var le=D=>{Tr(D,{size:14,class:"shrink-0 text-vs-muted"})},P=D=>{Sa(D,{size:14,class:"shrink-0 text-vs-muted"})};j(oe,D=>{i(r)?D(le):D(P,-1)})}y(K,ve)},H=K=>{var ve=dp();y(K,ve)};j(N,K=>{e.entry.is_dir?K(U):K(H,-1)})}var X=v(N,2),C=S(X);{var $=K=>{var ve=pp();y(K,ve)},O=K=>{np(K,{size:14,class:"text-vs-muted"})},te=K=>{tl(K,{size:14,class:"text-vs-blue"})};j(C,K=>{e.entry.is_dir?K($):e.entry.is_symlink?K(O,1):K(te,-1)})}var ee=v(X,2),fe=ie(ee,!0),pe=v(ee,2),he=S(pe),Ye=v(he,2),qe=v(w,2);{var et=K=>{var ve=ue(),oe=q(ve);mt(oe,17,()=>i(s),le=>le.name,(le,P)=>{{let D=Ht(()=>e.depth+1);Su(le,{get entry(){return i(P)},get dir(){return i(n)},get depth(){return i(D)}})}}),y(K,ve)};j(qe,K=>{e.entry.is_dir&&i(r)&&K(et)})}J(()=>{A=fn(w,1,"group flex cursor-pointer items-center gap-1 py-[2px] pr-1 text-[13px] hover:bg-vs-hover",null,A,{"bg-vs-active":i(o),"ring-1":i(l),"ring-vs-accent":i(l)}),ys(w,`padding-left: ${8+e.depth*12}px`),Ie(w,"aria-expanded",e.entry.is_dir?i(r):void 0),Ie(w,"aria-selected",i(o)),Ie(w,"title",i(n)),Z(fe,e.entry.name),Ie(he,"aria-label",`Rename ${e.entry.name??""}`),Ie(Ye,"aria-label",`Delete ${e.entry.name??""}`)}),L("click",w,a),L("keydown",w,K=>{(K.key==="Enter"||K.key===" ")&&(K.preventDefault(),a())}),L("contextmenu",w,_),Bt("dragstart",w,c),Bt("dragover",w,p),Bt("dragleave",w,()=>h(l,!1)),Bt("drop",w,u),L("click",he,T),L("click",Ye,d),y(t,b),hn()}Yn(["click","keydown","contextmenu"]);var vp=I('<form class="px-2 pb-1"><input class="w-full rounded-sm border border-vs-accent bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none"/></form>'),gp=I('<p class="px-4 py-2 text-xs text-vs-muted">No folder opened.</p>'),mp=I('<p class="px-4 py-2 text-xs text-vs-muted">No files here</p>'),_p=I('<form class="px-2 py-1"><input class="w-full rounded-sm border border-vs-line bg-vs-input px-1.5 py-0.5 text-xs outline-none focus:border-vs-accent"/></form>'),bp=I('<button class="w-full px-3 py-1 text-left hover:bg-vs-hover">Rename…</button> <button class="w-full px-3 py-1 text-left hover:bg-vs-hover">Copy Path</button> <div class="my-1 h-px bg-vs-line"></div> <button class="w-full px-3 py-1 text-left text-vs-red hover:bg-vs-hover">Delete</button>',1),xp=I('<div class="fixed z-50 min-w-[170px] rounded-md border border-vs-line bg-vs-panel py-1 text-xs shadow-2xl" data-tree-menu=""><!></div>'),yp=I('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-vs-fg uppercase"><span class="flex-1 truncate">Explorer</span></div> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold text-vs-fg uppercase"><!> <span class="flex-1 truncate"> </span> <span class="flex opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-1 hover:bg-vs-hover" title="New file" aria-label="New file"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="New folder" aria-label="New folder"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="Refresh" aria-label="Refresh"><!></button></span></div> <!> <input class="mx-2 mb-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none focus:border-vs-accent" placeholder="Filter files…"/> <div class="min-h-0 flex-1 overflow-y-auto pb-2"><!></div> <!></div>');function kp(t,e){pn(e,!0);let n=z(null),r=z(!1),s=z(""),o=z(null);function a(){h(n,null),h(r,!1)}g.openTreeMenu=D=>{h(n,{...D,x:Math.min(D.x,window.innerWidth-190)},!0),h(r,!1)};async function l(){var xe,we;h(s,i(n).path,!0),h(r,!0),await Qi(),(xe=i(o))==null||xe.focus();const D=i(s).lastIndexOf("/"),ne=i(s).lastIndexOf(".");(we=i(o))==null||we.setSelectionRange(D+1,ne>D+1?ne:i(s).length)}async function c(D){D.preventDefault();const ne=i(s).trim(),xe=i(n).path;if(a(),!(!ne||ne===xe))try{await Be.fs(g.connectionId,{action:"rename",path:xe,new_path:ne}),await g.refreshFiles()}catch(we){g.setStatus(we.message||"Could not rename")}}async function p(){const D=i(n).path;if(a(),!!confirm(`Delete ${D}? Folders must already be empty.`))try{await Be.fs(g.connectionId,{action:"delete",path:D}),await g.refreshFiles()}catch(ne){g.setStatus(ne.message||"Could not delete")}}function u(){var ne;const D=i(n).path;a(),(ne=navigator.clipboard)==null||ne.writeText(D).catch(()=>{}),g.setStatus(`Copied ${D}`)}let _=z(""),d=z("");const T=(D,ne)=>D==="."?ne:`${D}/${ne}`;async function b(D){D.preventDefault();const ne=i(d).trim();if(ne)try{await Be.fs(g.connectionId,{action:i(_)==="dir"?"create_dir":"create_file",path:T(g.path,ne)}),h(_,""),h(d,""),await g.refreshFiles()}catch(xe){g.setStatus(xe.message||"Could not create")}}const w=Ht(()=>{var D,ne;return(((D=g.connection)==null?void 0:D.workspace_root)||"").split("/").filter(Boolean).pop()||((ne=g.connection)==null?void 0:ne.label)||"WORKSPACE"});var A=yp();Bt("click",Ss,D=>{var ne,xe;i(n)&&!((xe=(ne=D.target).closest)!=null&&xe.call(ne,"[data-tree-menu]"))&&a()}),Bt("keydown",Ss,D=>{D.key==="Escape"&&a()});var N=v(S(A),2),U=S(N);Tr(U,{size:14,class:"shrink-0 text-vs-muted"});var H=v(U,2),X=ie(H,!0),C=v(H,2),$=S(C),O=S($);Zd(O,{size:14});var te=v($,2),ee=S(te);Qd(ee,{size:14});var fe=v(te,2),pe=S(fe);Pi(pe,{size:13});var he=v(N,2);{var Ye=D=>{var ne=vp(),xe=S(ne);Pc(xe,!0),J(()=>Ie(xe,"placeholder",i(_)==="dir"?"New folder name":"New file name")),Bt("submit",ne,b),L("keydown",xe,we=>{we.key==="Escape"&&h(_,"")}),Bt("blur",xe,()=>{i(d).trim()||h(_,"")}),dt(xe,()=>i(d),we=>h(d,we)),y(D,ne)};j(he,D=>{i(_)&&D(Ye)})}var qe=v(he,2),et=v(qe,2),K=S(et);{var ve=D=>{var ne=gp();y(D,ne)},oe=D=>{var ne=ue(),xe=q(ne);mt(xe,17,()=>g.visibleEntries,we=>we.name,(we,Le)=>{Su(we,{get entry(){return i(Le)},get dir(){return g.path},depth:0})},we=>{var Le=mp();y(we,Le)}),y(D,ne)};j(K,D=>{g.connectionId?D(oe,-1):D(ve)})}var le=v(et,2);{var P=D=>{var ne=xp(),xe=S(ne);{var we=en=>{var vn=_p(),Wt=S(vn);Ys(Wt,Vt=>h(o,Vt),()=>i(o)),Bt("submit",vn,c),L("keydown",Wt,Vt=>{Vt.key==="Escape"&&a()}),dt(Wt,()=>i(s),Vt=>h(s,Vt)),y(en,vn)},Le=en=>{var vn=bp(),Wt=q(vn),Vt=v(Wt,2),hr=v(Vt,4);L("click",Wt,l),L("click",Vt,u),L("click",hr,p),y(en,vn)};j(xe,en=>{i(r)?en(we):en(Le,-1)})}J(()=>ys(ne,`left: ${i(n).x??""}px; top: ${i(n).y??""}px`)),y(D,ne)};j(le,D=>{i(n)&&D(P)})}J(()=>{var D;Ie(H,"title",(D=g.connection)==null?void 0:D.workspace_root),Z(X,i(w))}),L("click",$,()=>{h(_,"file"),h(d,"")}),L("click",te,()=>{h(_,"dir"),h(d,"")}),L("click",fe,()=>g.refreshFiles()),dt(qe,()=>g.filter,D=>g.filter=D),y(t,A),hn()}Yn(["click","keydown"]);var wp=I('<div class="absolute top-full right-0 z-20 mt-1 min-w-[170px] rounded-md border border-vs-line bg-vs-panel py-1 shadow-2xl"><button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Fetch</button> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Pull</button> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Push</button> <div class="my-1 h-px bg-vs-line"></div> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Create Branch…</button></div>'),Sp=I('<p class="mx-3 flex items-center gap-1.5 text-xs text-vs-muted"><!> Reading repository…</p>'),Tp=I(`<p class="mx-3 text-xs leading-relaxed text-vs-muted">This folder isn't a Git repository.<br/> Open a folder containing a <code class="rounded-sm bg-vs-input px-1">.git</code> directory,
      or run <code class="rounded-sm bg-vs-input px-1">git init</code> in the terminal.</p>`),$p=I(`<div class="group flex cursor-pointer items-center gap-1.5 py-[2px] pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><span class="truncate text-vs-fg"> </span> <span class="truncate text-[11px] text-vs-muted"> </span> <span class="pointer-events-none ml-auto flex shrink-0 gap-0.5 opacity-0 transition-opacity
                         group-hover:pointer-events-auto group-hover:opacity-100"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Unstage"><!></button></span> <span> </span></div>`),Ep=I('<div class="flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <span class="truncate">Staged Changes</span></button> <span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span></div> <!>',1),Ap=I(`<div class="group flex cursor-pointer items-center gap-1.5 py-[2px] pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><span class="truncate text-vs-fg"> </span> <span class="truncate text-[11px] text-vs-muted"> </span> <span class="pointer-events-none ml-auto flex shrink-0 gap-0.5 opacity-0 transition-opacity
                         group-hover:pointer-events-auto group-hover:opacity-100"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Open changes"><!></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Discard changes"><!></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Stage changes"><!></button></span> <span> </span></div>`),Cp=I('<p class="px-6 py-2 text-xs text-vs-muted">No changes.</p>'),Rp=I('<div class="min-h-0 flex-1 overflow-y-auto"></div>'),Pp=I('<span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span>'),Ip=I('<span class="flex shrink-0 opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-0.5 hover:bg-vs-line" title="Refresh history" aria-label="Refresh history"><!></button></span> <!>',1),Np=I('<span class="shrink-0 rounded-sm bg-vs-line px-1 text-[10px] text-vs-blue"> </span>'),Op=I('<div class="group flex cursor-pointer flex-col gap-0.5 py-1 pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><div class="flex min-w-0 items-center gap-1.5"><span class="truncate text-vs-fg"> </span> <!></div> <div class="flex min-w-0 items-center gap-1.5 text-[11px] text-vs-muted"><span class="shrink-0 font-mono text-vs-yellow"> </span> <span class="truncate"> </span> <span class="ml-auto shrink-0"> </span></div></div>'),zp=I('<p class="px-6 py-2 text-xs text-vs-muted"> </p>'),Mp=I('<div class="max-h-[45%] min-h-0 flex-1 overflow-y-auto"></div>'),Lp=I('<button class="flex items-center gap-1 rounded-sm px-1 text-vs-muted hover:bg-vs-hover hover:text-vs-fg" title="Pull then push"><!> </button>'),Dp=I('<div class="flex gap-1 border-t border-vs-line px-3 py-2"><input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="New branch name"/> <button class="rounded-sm bg-vs-status px-2 py-1 text-xs text-white">Create</button></div>'),Fp=I('<pre class="max-h-[120px] shrink-0 overflow-auto border-t border-vs-line px-3 py-1.5 text-[11px] whitespace-pre-wrap text-vs-muted"> </pre>'),Hp=I('<div class="px-3 pb-2"><textarea class="w-full resize-none rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs text-vs-fg outline-none focus:border-vs-accent placeholder:text-vs-muted" rows="2"></textarea> <button class="mt-1 flex w-full items-center justify-center gap-1.5 rounded-sm bg-vs-status px-2 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"><!> Commit</button></div> <!> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <span class="truncate">Changes</span></button> <span class="flex shrink-0 opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-0.5 hover:bg-vs-line" title="Refresh" aria-label="Refresh"><!></button> <button class="rounded-sm p-0.5 hover:bg-vs-line" title="Stage all changes" aria-label="Stage all"><!></button></span> <span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span></div> <!> <div class="group flex shrink-0 items-center gap-1 border-t border-vs-line px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <!> <span class="truncate">History</span></button> <!></div> <!> <div class="mt-auto flex items-center gap-2 border-t border-vs-line px-3 py-1.5 text-[11px]"><span class="flex min-w-0 items-center gap-1 text-vs-muted" title="Current branch"><!> <span class="truncate"> </span></span> <!></div> <!> <!>',1),Bp=I('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase"><span class="flex-1">Source Control</span> <div class="relative" data-scm-menu=""><button class="rounded-sm p-0.5 hover:bg-vs-hover" title="More actions" aria-label="More actions"><!></button> <!></div></div> <!></div>');function Up(t,e){pn(e,!0);let n=z(""),r=z(""),s=z(!1),o=z(!0),a=z(!0),l=z(!1),c=z(!1);const p=Ht(()=>(g.gitStatus||"").split(`
`).filter(P=>P&&!P.startsWith("##")).map(P=>{const D=P.slice(3),ne=D.indexOf(" -> "),xe=ne===-1?D:D.slice(ne+4);return{index:P[0]===" "?"":P[0],work:P[1]===" "?"":P[1],code:P.slice(0,2).trim()||"??",path:xe.replace(/\r$/,""),from:ne===-1?"":D.slice(0,ne)}}).filter(P=>P.path)),u=Ht(()=>i(p).filter(P=>P.index&&P.index!=="?")),_=Ht(()=>i(p).filter(P=>P.work&&P.work!==" ")),d=P=>P.includes("?")||P.includes("A")?"text-vs-green":P.includes("D")?"text-vs-red":P.includes("R")?"text-vs-blue":"text-vs-yellow",T=P=>P.split("/").pop(),b=P=>{const D=P.split("/");return D.pop(),D.join("/")};async function w(P,D={}){g.gitBusy=P;try{return await g.runGit(P,D)}finally{g.gitBusy=""}}async function A(){if(!i(n).trim()||!i(u).length)return;await w("commit",{message:i(n).trim()})&&h(n,"")}async function N(){if(!i(r).trim())return;await w("create_branch",{branch:i(r).trim()})&&(h(r,""),h(s,!1))}async function U(P){confirm(`Discard changes in ${P.path}? This cannot be undone.`)&&await w("discard",{files:[P.path]})}async function H(P){const D=await g.runGit("diff_file",{files:[P.path]});D&&g.openDiffTab(P.path,D.output||"No changes to show.")}let X=z("");Qt(()=>{const P=g.connectionId,D=g.connectionState,ne=P?`${P}|${D}`:"";!P||D!=="connected"||i(X)!==ne&&(h(X,ne,!0),w("status"))});async function C(){h(l,!i(l)),i(l)&&!g.gitHistoryLoaded&&await w("log")}Qt(()=>{i(l)&&!g.gitHistoryLoaded&&!g.notARepo&&!g.gitBusy&&w("log")});async function $(P){const D=await g.runGit("show",{ref:P.hash});D&&g.openDiffTab(`${P.short} ${P.subject}`,D.output||"Empty commit.")}const O=P=>(P||"").split(",").map(D=>D.trim().replace(/^HEAD -> /,"")).filter(Boolean);function te(P){P.key==="Enter"&&(P.ctrlKey||P.metaKey)&&(P.preventDefault(),A())}var ee=Bp();Bt("click",Ss,P=>{var D,ne;(ne=(D=P.target).closest)!=null&&ne.call(D,"[data-scm-menu]")||h(c,!1)});var fe=S(ee),pe=v(S(fe),2),he=S(pe),Ye=S(he);Gd(Ye,{size:14});var qe=v(he,2);{var et=P=>{var D=wp(),ne=S(D),xe=v(ne,2),we=v(xe,2),Le=v(we,4);L("click",ne,()=>{h(c,!1),w("fetch")}),L("click",xe,()=>{h(c,!1),w("pull")}),L("click",we,()=>{h(c,!1),w("push")}),L("click",Le,()=>{h(c,!1),h(s,!i(s))}),y(P,D)};j(qe,P=>{i(c)&&P(et)})}var K=v(fe,2);{var ve=P=>{var D=Sp(),ne=S(D);fr(ne,{size:12,class:"animate-spin"}),y(P,D)},oe=P=>{var D=Tp();y(P,D)},le=P=>{var D=Hp(),ne=q(D),xe=S(ne),we=v(xe,2),Le=S(we);{var en=ce=>{fr(ce,{size:12,class:"animate-spin"})},vn=ce=>{wa(ce,{size:12})};j(Le,ce=>{g.gitBusy==="commit"?ce(en):ce(vn,-1)})}var Wt=v(ne,2);{var Vt=ce=>{var tt=Ep(),We=q(tt),ye=S(We),Ve=S(ye);{var wt=gt=>{Tr(gt,{size:14,class:"text-vs-muted"})},Ue=gt=>{Sa(gt,{size:14,class:"text-vs-muted"})};j(Ve,gt=>{i(a)?gt(wt):gt(Ue,-1)})}var At=v(ye,2),Gt=ie(At,!0),it=v(We,2);{var Ct=gt=>{var Rt=ue(),Dn=q(Rt);mt(Dn,17,()=>i(u),Pt=>Pt.path,(Pt,St)=>{var vt=$p(),Fn=S(vt),yt=ie(Fn,!0),Ze=v(Fn,2),E=ie(Ze,!0),B=v(Ze,2),V=S(B),Ae=S(V);sp(Ae,{size:13});var ze=v(B,2),x=ie(ze,!0);J((R,W,Q)=>{Ie(vt,"title",i(St).path),Z(yt,R),Z(E,W),Ie(V,"aria-label",`Unstage ${i(St).path??""}`),fn(ze,1,`shrink-0 font-mono text-[11px] ${Q??""}`),Z(x,i(St).index||i(St).code)},[()=>T(i(St).path),()=>b(i(St).path),()=>d(i(St).code)]),L("click",vt,()=>H(i(St))),L("keydown",vt,R=>{R.key==="Enter"&&H(i(St))}),L("click",V,R=>{R.stopPropagation(),w("unstage",{files:[i(St).path]})}),y(Pt,vt)}),y(gt,Rt)};j(it,gt=>{i(a)&&gt(Ct)})}J(()=>Z(Gt,i(u).length)),L("click",ye,()=>h(a,!i(a))),y(ce,tt)};j(Wt,ce=>{i(u).length&&ce(Vt)})}var hr=v(Wt,2),Rr=S(hr),Pr=S(Rr);{var Ir=ce=>{Tr(ce,{size:14,class:"text-vs-muted"})},vr=ce=>{Sa(ce,{size:14,class:"text-vs-muted"})};j(Pr,ce=>{i(o)?ce(Ir):ce(vr,-1)})}var me=v(Rr,2),qt=S(me),Fe=S(qt);Pi(Fe,{size:12});var Zn=v(qt,2),zt=S(Zn);Ao(zt,{size:13});var Sn=v(me,2),gr=ie(Sn,!0),tn=v(hr,2);{var Nr=ce=>{var tt=Rp();mt(tt,21,()=>i(_),We=>We.path,(We,ye)=>{var Ve=Ap(),wt=S(Ve),Ue=ie(wt,!0),At=v(wt,2),Gt=ie(At,!0),it=v(At,2),Ct=S(it),gt=S(Ct);Yd(gt,{size:13});var Rt=v(Ct,2),Dn=S(Rt);fp(Dn,{size:13});var Pt=v(Rt,2),St=S(Pt);Ao(St,{size:13});var vt=v(it,2),Fn=ie(vt,!0);J((yt,Ze,E)=>{Ie(Ve,"title",i(ye).path),Z(Ue,yt),Z(Gt,Ze),Ie(Ct,"aria-label",`Open changes to ${i(ye).path??""}`),Ie(Rt,"aria-label",`Discard changes to ${i(ye).path??""}`),Ie(Pt,"aria-label",`Stage ${i(ye).path??""}`),fn(vt,1,`shrink-0 font-mono text-[11px] ${E??""}`),Z(Fn,i(ye).work||i(ye).code)},[()=>T(i(ye).path),()=>b(i(ye).path),()=>d(i(ye).code)]),L("click",Ve,()=>H(i(ye))),L("keydown",Ve,yt=>{yt.key==="Enter"&&H(i(ye))}),L("click",Ct,yt=>{yt.stopPropagation(),H(i(ye))}),L("click",Rt,yt=>{yt.stopPropagation(),U(i(ye))}),L("click",Pt,yt=>{yt.stopPropagation(),w("stage",{files:[i(ye).path]})}),y(We,Ve)},We=>{var ye=Cp();y(We,ye)}),y(ce,tt)};j(tn,ce=>{i(o)&&ce(Nr)})}var mr=v(tn,2),Xn=S(mr),gn=S(Xn);{var nn=ce=>{Tr(ce,{size:14,class:"text-vs-muted"})},Tn=ce=>{Sa(ce,{size:14,class:"text-vs-muted"})};j(gn,ce=>{i(l)?ce(nn):ce(Tn,-1)})}var Mt=v(gn,2);tp(Mt,{size:12,class:"shrink-0 text-vs-muted"});var _r=v(Xn,2);{var Qn=ce=>{var tt=Ip(),We=q(tt),ye=S(We),Ve=S(ye);{var wt=it=>{fr(it,{size:12,class:"animate-spin"})},Ue=it=>{Pi(it,{size:12})};j(Ve,it=>{g.gitBusy==="log"?it(wt):it(Ue,-1)})}var At=v(We,2);{var Gt=it=>{var Ct=Pp(),gt=ie(Ct,!0);J(()=>Z(gt,g.gitCommits.length)),y(it,Ct)};j(At,it=>{g.gitCommits.length&&it(Gt)})}L("click",ye,()=>w("log")),y(ce,tt)};j(_r,ce=>{i(l)&&ce(Qn)})}var zn=v(mr,2);{var Jn=ce=>{var tt=Mp();mt(tt,21,()=>g.gitCommits,We=>We.hash,(We,ye)=>{var Ve=Op(),wt=S(Ve),Ue=S(wt),At=ie(Ue,!0),Gt=v(Ue,2);mt(Gt,17,()=>O(i(ye).refs),Ji,(vt,Fn)=>{var yt=Np(),Ze=ie(yt,!0);J(()=>Z(Ze,i(Fn))),y(vt,yt)});var it=v(wt,2),Ct=S(it),gt=ie(Ct,!0),Rt=v(Ct,2),Dn=ie(Rt,!0),Pt=v(Rt,2),St=ie(Pt,!0);J(()=>{Ie(Ve,"title",`${i(ye).short} · ${i(ye).author} · ${i(ye).date}`),Z(At,i(ye).subject),Z(gt,i(ye).short),Z(Dn,i(ye).author),Z(St,i(ye).relative)}),L("click",Ve,()=>$(i(ye))),L("keydown",Ve,vt=>{vt.key==="Enter"&&$(i(ye))}),y(We,Ve)},We=>{var ye=zp(),Ve=ie(ye,!0);J(()=>Z(Ve,g.gitBusy==="log"?"Loading history…":"No commits yet.")),y(We,ye)}),y(ce,tt)};j(zn,ce=>{i(l)&&ce(Jn)})}var $n=v(zn,2),En=S($n),er=S(En);Ri(er,{size:12,class:"shrink-0"});var Gr=v(er,2),Kr=ie(Gr,!0),Or=v(En,2);{var zr=ce=>{var tt=Lp(),We=S(tt);{var ye=Ue=>{fr(Ue,{size:11,class:"animate-spin"})},Ve=Ue=>{Fd(Ue,{size:11})};j(We,Ue=>{g.gitBusy==="pull"||g.gitBusy==="push"?Ue(ye):Ue(Ve,-1)})}var wt=v(We);J(()=>Z(wt,` ${g.gitBehind??""}↓ ${g.gitAhead??""}↑`)),L("click",tt,()=>w("pull").then(()=>w("push"))),y(ce,tt)};j(Or,ce=>{g.gitHasUpstream&&ce(zr)})}var Mn=v($n,2);{var mn=ce=>{var tt=Dp(),We=S(tt),ye=v(We,2);L("keydown",We,Ve=>{Ve.key==="Enter"&&N(),Ve.key==="Escape"&&h(s,!1)}),dt(We,()=>i(r),Ve=>h(r,Ve)),L("click",ye,N),y(ce,tt)};j(Mn,ce=>{i(s)&&ce(mn)})}var Ln=v(Mn,2);{var Mr=ce=>{var tt=Fp(),We=ie(tt,!0);J(()=>Z(We,g.gitOutput)),y(ce,tt)};j(Ln,ce=>{g.gitOutput&&ce(Mr)})}J(ce=>{Ie(xe,"placeholder",`Message (Ctrl+Enter to commit on "${g.gitBranch||"branch"}")`),we.disabled=ce,Ie(we,"title",i(u).length?"Commit staged changes":"Stage a change first"),Z(gr,i(_).length),Z(Kr,g.gitBranch||"—")},[()=>!i(n).trim()||!i(u).length||g.gitBusy==="commit"]),L("keydown",xe,te),dt(xe,()=>i(n),ce=>h(n,ce)),L("click",we,A),L("click",Rr,()=>h(o,!i(o))),L("click",qt,()=>w("status")),L("click",Zn,()=>w("stage",{files:["."]})),L("click",Xn,C),y(P,D)};j(K,P=>{!i(X)||g.gitBusy==="status"&&!g.gitStatus&&!g.notARepo?P(ve):g.notARepo?P(oe,1):P(le,-1)})}L("click",he,()=>h(c,!i(c))),y(t,ee),hn()}Yn(["click","keydown"]);const jp="modulepreload",Wp=function(t,e){return new URL(t,e).href},Fl={},Ta=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let a=function(u){return Promise.all(u.map(_=>Promise.resolve(_).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const l=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),p=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=a(n.map(u=>{if(u=Wp(u,r),u in Fl)return;Fl[u]=!0;const _=u.endsWith(".css"),d=_?'[rel="stylesheet"]':"";if(!!r)for(let w=l.length-1;w>=0;w--){const A=l[w];if(A.href===u&&(!_||A.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const b=document.createElement("link");if(b.rel=_?"stylesheet":jp,_||(b.as="script"),b.crossOrigin="",b.href=u,p&&b.setAttribute("nonce",p),document.head.appendChild(b),_)return new Promise((w,A)=>{b.addEventListener("load",w),b.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${u}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return e().catch(o)})},ko={base:"vs-dark",inherit:!0,rules:[{token:"",foreground:"f8f8f2",background:"272822"},{token:"comment",foreground:"75715e",fontStyle:"italic"},{token:"string",foreground:"e6db74"},{token:"constant",foreground:"ae81ff"},{token:"number",foreground:"ae81ff"},{token:"keyword",foreground:"f92672"},{token:"operator",foreground:"f92672"},{token:"delimiter",foreground:"f8f8f2"},{token:"type",foreground:"66d9ef",fontStyle:"italic"},{token:"function",foreground:"a6e22e"},{token:"variable",foreground:"f8f8f2"},{token:"variable.parameter",foreground:"fd971f",fontStyle:"italic"},{token:"tag",foreground:"f92672"},{token:"attribute.name",foreground:"a6e22e"},{token:"attribute.value",foreground:"e6db74"},{token:"regexp",foreground:"e6db74"}],colors:{"editor.background":"#272822","editor.foreground":"#f8f8f2","editor.lineHighlightBackground":"#3e3d32","editor.selectionBackground":"#49483e","editorCursor.foreground":"#f8f8f0","editorWhitespace.foreground":"#3b3a32","editorLineNumber.foreground":"#90908a","editorLineNumber.activeForeground":"#f8f8f2","editorIndentGuide.background":"#3b3a32","editorGutter.background":"#272822"}},Vp={py:"python",js:"javascript",mjs:"javascript",cjs:"javascript",ts:"typescript",tsx:"typescript",jsx:"javascript",json:"json",md:"markdown",html:"html",htm:"html",css:"css",scss:"scss",less:"less",sh:"shell",bash:"shell",zsh:"shell",yml:"yaml",yaml:"yaml",toml:"ini",ini:"ini",cfg:"ini",sql:"sql",go:"go",rs:"rust",rb:"ruby",php:"php",java:"java",c:"c",h:"c",cpp:"cpp",hpp:"cpp",cs:"csharp",svelte:"html",vue:"html",xml:"xml",dockerfile:"dockerfile"};function qp(t){var n;const e=(t||"").split("/").pop()||"";return e.toLowerCase()==="dockerfile"?"dockerfile":e.toLowerCase()==="makefile"?"shell":Vp[(n=e.split(".").pop())==null?void 0:n.toLowerCase()]||"plaintext"}var Gp=I('<div class="editor svelte-1h8xysy"></div>');function Kp(t,e){pn(e,!0);let n,r=null,s=null,o="",a=!1;no(async()=>{s=await Ta(()=>import("./ide-monaco.js").then(c=>c.a),__vite__mapDeps([0,1]),import.meta.url),s.editor.defineTheme("monokai",ko),r=s.editor.create(n,{value:"",theme:"monokai",automaticLayout:!0,fontSize:13,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",minimap:{enabled:!0},scrollBeyondLastLine:!1,renderWhitespace:"selection",tabSize:2}),r.onDidChangeModelContent(()=>{a||!o||g.updateContent(o,r.getValue())}),r.addCommand(s.KeyMod.CtrlCmd|s.KeyCode.KeyS,()=>g.saveActive())}),el(()=>r==null?void 0:r.dispose()),Qt(()=>{const c=g.activeTab;if(!(!r||!s)){if(!c){a=!0,r.setValue(""),o="",a=!1;return}if(c.key!==o){a=!0;const p=s.editor.createModel(c.content,c.language||qp(c.path)),u=r.getModel();r.setModel(p),u==null||u.dispose(),r.updateOptions({readOnly:!!c.readOnly}),o=c.key,a=!1}else r.getValue()!==c.content&&(a=!0,r.setValue(c.content),a=!1)}});var l=Gp();Ys(l,c=>n=c,()=>n),y(t,l),hn()}var Zr=Cd(()=>g),Yp=I('<span class="h-2 w-2 rounded-full bg-vs-fg group-hover:hidden"></span> <!>',1),Zp=I('<div><button class="flex items-center gap-1.5 py-2 pr-1 pl-3" role="tab"><!> <span class="whitespace-nowrap"> </span></button> <button class="mr-1.5 flex h-5 w-5 items-center justify-center rounded-sm hover:bg-vs-line"><!></button></div>'),Xp=I('<div class="px-3 py-2 text-xs text-vs-muted">Open a file from the Explorer</div>'),Qp=I('<div class="flex min-h-[35px] items-stretch overflow-x-auto bg-vs-tabinactive" role="tablist"></div>');function Jp(t,e){pn(e,!1);const n=s=>s.split("/").pop();wu();var r=Qp();mt(r,5,()=>Zr().tabs,s=>s.key,(s,o)=>{var a=Zp();let l;var c=S(a),p=S(c);tl(p,{size:14,class:"shrink-0 text-vs-blue"});var u=v(p,2),_=ie(u,!0),d=v(c,2),T=S(d);{var b=A=>{var N=Yp(),U=v(q(N),2);Na(U,{size:14,class:"hidden group-hover:block"}),y(A,N)},w=A=>{Na(A,{size:14,class:"opacity-0 group-hover:opacity-100"})};j(T,A=>{i(o).dirty?A(b):A(w,-1)})}J((A,N)=>{l=fn(a,1,"group flex items-center border-r border-vs-bg text-[13px]",null,l,{"bg-vs-tabactive":i(o).key===Zr().activeKey,"text-vs-bright":i(o).key===Zr().activeKey,"text-vs-muted":i(o).key!==Zr().activeKey}),Ie(c,"aria-selected",i(o).key===Zr().activeKey),Ie(c,"title",i(o).path),Z(_,A),Ie(d,"title",i(o).dirty?"Unsaved changes — close":"Close"),Ie(d,"aria-label",`Close ${N??""}`)},[()=>n(i(o).path),()=>n(i(o).path)]),L("click",c,()=>Zr(Zr().activeKey=i(o).key)),L("click",d,()=>Zr().closeTab(i(o).key)),y(s,a)},s=>{var o=Xp();y(s,o)}),y(t,r),hn()}Yn(["click"]);function rl(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var $s=rl();function Tu(t){$s=t}var us={exec:()=>null};function Rs(t){let e=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),s=e[r];return s||(s=t(r),e[r]=s),s}}function De(t,e=""){let n=typeof t=="string"?t:t.source,r={replace:(s,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(on.caret,"$1"),n=n.replace(s,a),r},getRegex:()=>new RegExp(n,e)};return r}var eh=((t="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+t)}catch{return!1}})(),on={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:Rs(t=>new RegExp(`^ {0,${t}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:Rs(t=>new RegExp(`^ {0,${t}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:Rs(t=>new RegExp(`^ {0,${t}}(?:\`\`\`|~~~)`)),headingBeginRegex:Rs(t=>new RegExp(`^ {0,${t}}#`)),htmlBeginRegex:Rs(t=>new RegExp(`^ {0,${t}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:Rs(t=>new RegExp(`^ {0,${t}}>`))},th=/^(?:[ \t]*(?:\n|$))+/,nh=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,rh=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ua=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,sh=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,sl=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,$u=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Eu=De($u).replace(/bull/g,sl).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),oh=De($u).replace(/bull/g,sl).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),ol=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,ah=/^[^\n]+/,al=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,ih=De(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",al).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),lh=De(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,sl).getRegex(),qa="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",il=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ch=De("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",il).replace("tag",qa).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Au=t=>De(ol).replace("hr",ua).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list",t).replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",qa).getRegex(),uh=Au(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),fh=Au(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),dh=De(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",fh).getRegex(),ll={blockquote:dh,code:nh,def:ih,fences:rh,heading:sh,hr:ua,html:ch,lheading:Eu,list:lh,newline:th,paragraph:uh,table:us,text:ah},Hl=De("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ua).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",qa).getRegex(),ph={...ll,lheading:oh,table:Hl,paragraph:De(ol).replace("hr",ua).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Hl).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",qa).getRegex()},hh={...ll,html:De(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",il).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:us,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:De(ol).replace("hr",ua).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Eu).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},vh=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,gh=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Cu=/^( {2,}|\\)\n(?!\s*$)/,mh=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,qr=/[\p{P}\p{S}]/u,ro=/[\s\p{P}\p{S}]/u,fa=/[^\s\p{P}\p{S}]/u,_h=De(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,ro).getRegex(),bh=/[\p{Pi}\p{Ps}"']/u,Ru=/(?!~)[\p{P}\p{S}]/u,xh=/(?!~)[\s\p{P}\p{S}]/u,yh=/(?:[^\s\p{P}\p{S}]|~)/u,kh=De(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",eh?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Pu=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,wh=De(Pu,"u").replace(/punct/g,qr).getRegex(),Sh=De(Pu,"u").replace(/punct/g,Ru).getRegex(),Th=/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,$h=De(Th,"u").replace(/openQuote/g,bh).replace(/punct/g,qr).getRegex(),Iu="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Eh=De(Iu,"gu").replace(/notPunctSpace/g,fa).replace(/punctSpace/g,ro).replace(/punct/g,qr).getRegex(),Ah=De(Iu,"gu").replace(/notPunctSpace/g,yh).replace(/punctSpace/g,xh).replace(/punct/g,Ru).getRegex(),Ch="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)",Rh=De(Ch,"gu").replace(/notPunctSpace/g,fa).replace(/punctSpace/g,ro).replace(/punct/g,qr).getRegex(),Ph=De("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,fa).replace(/punctSpace/g,ro).replace(/punct/g,qr).getRegex(),Ih="^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)",Nh=De(Ih,"gu").replace(/notPunctSpace/g,fa).replace(/punctSpace/g,ro).replace(/punct/g,qr).getRegex(),Oh=De(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,qr).getRegex(),zh="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Mh=De(zh,"gu").replace(/notPunctSpace/g,fa).replace(/punctSpace/g,ro).replace(/punct/g,qr).getRegex(),Lh=De(/\\(punct)/,"gu").replace(/punct/g,qr).getRegex(),Dh=De(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Fh=De(il).replace("(?:-->|$)","-->").getRegex(),Hh=De("^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Fh).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Bh=/\[(?:\\[\s\S]|[^\[\]\\])*\]/,Oa=De(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace("brackets",Bh).getRegex(),Uh=De(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Oa).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Nu=De(/^!?\[(label)\]\[(ref)\]/).replace("label",Oa).replace("ref",al).getRegex(),Ou=De(/^!?\[(ref)\](?:\[\])?/).replace("ref",al).getRegex(),jh=De("reflink|nolink(?!\\()","g").replace("reflink",Nu).replace("nolink",Ou).getRegex(),Bl=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,cl={_backpedal:us,anyPunctuation:Lh,autolink:Dh,blockSkip:kh,br:Cu,code:gh,del:us,delLDelim:us,delRDelim:us,emStrongLDelim:wh,emStrongRDelimAst:Eh,emStrongRDelimUnd:Ph,escape:vh,link:Uh,nolink:Ou,punctuation:_h,reflink:Nu,reflinkSearch:jh,tag:Hh,text:mh,url:us},Wh={...cl,emStrongLDelim:$h,emStrongRDelimAst:Rh,emStrongRDelimUnd:Nh,link:De(/^!?\[(label)\]\((.*?)\)/).replace("label",Oa).getRegex(),reflink:De(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Oa).getRegex()},Ii={...cl,emStrongRDelimAst:Ah,emStrongLDelim:Sh,delLDelim:Oh,delRDelim:Mh,url:De(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Bl).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:De(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Bl).getRegex()},Vh={...Ii,br:De(Cu).replace("{2,}","*").getRegex(),text:De(Ii.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},va={normal:ll,gfm:ph,pedantic:hh},uo={normal:cl,gfm:Ii,breaks:Vh,pedantic:Wh},qh={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ul=t=>qh[t];function Cn(t,e){if(e){if(on.escapeTest.test(t))return t.replace(on.escapeReplace,Ul)}else if(on.escapeTestNoEncode.test(t))return t.replace(on.escapeReplaceNoEncode,Ul);return t}function jl(t){try{t=encodeURI(t).replace(on.percentDecode,"%")}catch{return null}return t}function Wl(t,e){var o;let n=t.replace(on.findPipe,(a,l,c)=>{let p=!1,u=l;for(;--u>=0&&c[u]==="\\";)p=!p;return p?"|":" |"}),r=n.split(on.splitPipe),s=0;if(r[0].trim()||r.shift(),r.length>0&&!((o=r.at(-1))!=null&&o.trim())&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(on.slashPipe,"|");return r}function Xr(t,e,n){let r=t.length;if(r===0)return"";let s=0;for(;s<r&&t.charAt(r-s-1)===e;)s++;return t.slice(0,r-s)}function Vl(t){let e=t.split(`
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
`+b.replace(this.rules.other.blockquoteSetextReplace2,""),A=this.blockquote(w);o[o.length-1]=A,r=`${r}
${b}`,s=s.substring(0,s.length-T.text.length)+A.text;break}else if((d==null?void 0:d.type)==="list"){let T=d,b=T.raw+`
`+n.join(`
`),w=this.list(b);o[o.length-1]=w,r=r.substring(0,r.length-d.raw.length)+w.raw,s=s.substring(0,s.length-T.raw.length)+w.raw,n=b.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:o,text:s}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n=e[1].trim(),r=n.length>1,s={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");let o=this.rules.other.listItemRegex(n),a=!1;for(;t;){let c=!1,p="",u="";if(!(e=o.exec(t))||this.rules.block.hr.test(t))break;p=e[0],t=t.substring(p.length);let _=Kh(e[2].split(`
`,1)[0],e[1].length),d=t.split(`
`,1)[0],T=!_.trim(),b=0;if(this.options.pedantic?(b=2,u=_.trimStart()):T?b=e[1].length+1:(b=_.search(this.rules.other.nonSpaceChar),b=b>4?1:b,u=_.slice(b),b+=e[1].length),T&&this.rules.other.blankLine.test(d)&&(p+=d+`
`,t=t.substring(d.length+1),c=!0),!c){let w=this.rules.other.nextBulletRegex(b),A=this.rules.other.hrRegex(b),N=this.rules.other.fencesBeginRegex(b),U=this.rules.other.headingBeginRegex(b),H=this.rules.other.htmlBeginRegex(b),X=this.rules.other.blockquoteBeginRegex(b);for(;t;){let C=t.split(`
`,1)[0],$;if(d=C,this.options.pedantic?(d=d.replace(this.rules.other.listReplaceNesting,"  "),$=d):$=d.replace(this.rules.other.tabCharGlobal,"    "),N.test(d)||U.test(d)||H.test(d)||X.test(d)||w.test(d)||A.test(d))break;if($.search(this.rules.other.nonSpaceChar)>=b||!d.trim())u+=`
`+$.slice(b);else{if(T||_.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||N.test(_)||U.test(_)||A.test(_))break;u+=`
`+d}T=!d.trim(),p+=C+`
`,t=t.substring(C.length+1),_=$.slice(b)}}s.loose||(a?s.loose=!0:this.rules.other.doubleBlankLine.test(p)&&(a=!0)),s.items.push({type:"list_item",raw:p,task:!!this.options.gfm&&this.rules.other.listIsTask.test(u),loose:!1,text:u,tokens:[]}),s.raw+=p}let l=s.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;s.raw=s.raw.trimEnd();for(let c of s.items)if(this.lexer.state.top=!1,c.tokens=this.lexer.blockTokens(c.text,[]),!s.loose){let p=c.tokens.filter(_=>_.type==="space"),u=p.length>0&&p.some(_=>this.rules.other.anyLine.test(_.raw));s.loose=u}for(let c of s.items){let p=c.tokens[0];if(c.task&&((p==null?void 0:p.type)==="text"||(p==null?void 0:p.type)==="paragraph")){c.text=c.text.replace(this.rules.other.listReplaceTask,""),p.raw=p.raw.replace(this.rules.other.listReplaceTask,""),p.text=p.text.replace(this.rules.other.listReplaceTask,"");for(let _=this.lexer.inlineQueue.length-1;_>=0;_--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[_].src)){this.lexer.inlineQueue[_].src=this.lexer.inlineQueue[_].src.replace(this.rules.other.listReplaceTask,"");break}let u=this.rules.other.listTaskCheckbox.exec(c.raw);if(u){let _={type:"checkbox",raw:u[0]+" ",checked:u[0]!=="[ ]"};c.checked=_.checked,s.loose?c.tokens[0]&&["paragraph","text"].includes(c.tokens[0].type)&&"tokens"in c.tokens[0]&&c.tokens[0].tokens?(c.tokens[0].raw=_.raw+c.tokens[0].raw,c.tokens[0].text=_.raw+c.tokens[0].text,c.tokens[0].tokens.unshift(_)):c.tokens.unshift({type:"paragraph",raw:_.raw,text:_.raw,tokens:[_]}):c.tokens.unshift(_)}}else c.task&&(c.task=!1)}if(s.loose)for(let c of s.items){c.loose=!0;for(let p of c.tokens)p.type==="text"&&(p.type="paragraph")}return s}}html(t){let e=this.rules.block.html.exec(t);if(e){let n=Vl(e[0]);return{type:"html",block:!0,raw:n,pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:n}}}def(t){let e=this.rules.block.def.exec(t);if(e){let n=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:Xr(e[0],`
`),href:r,title:s}}}table(t){var a;let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let n=Wl(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=(a=e[3])!=null&&a.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:Xr(e[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let l of r)this.rules.other.tableAlignRight.test(l)?o.align.push("right"):this.rules.other.tableAlignCenter.test(l)?o.align.push("center"):this.rules.other.tableAlignLeft.test(l)?o.align.push("left"):o.align.push(null);for(let l=0;l<n.length;l++)o.header.push({text:n[l],tokens:this.lexer.inline(n[l]),header:!0,align:o.align[l]});for(let l of s)o.rows.push(Wl(l,o.header.length).map((c,p)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:o.align[p]})));return o}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e){let n=e[1].trim();return{type:"heading",raw:Xr(e[0],`
`),depth:e[2].charAt(0)==="="?1:2,text:n,tokens:this.lexer.inline(n)}}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){let e=this.rules.inline.link.exec(t);if(e){let n=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let o=Xr(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{let o=Gh(e[2],"()");if(o===-2)return;if(o>-1){let a=(e[0].indexOf("!")===0?5:4)+e[1].length+o;e[2]=e[2].substring(0,o),e[0]=e[0].substring(0,a).trim(),e[3]=""}}let r=e[2],s="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(r);o&&(r=o[1],s=o[3])}else s=e[3]?e[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?r=r.slice(1):r=r.slice(1,-1)),ql(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let r=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=e[r.toLowerCase()];if(!s){let o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return ql(n,s,n[0],this.lexer,this.rules)}}emStrong(t,e,n=""){let r=this.rules.inline.emStrongLDelim.exec(t);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let s=[...r[0]].length-1,o,a,l=s,c=0,p=r[0][0],u=n===p,_=p==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(_.lastIndex=0,e=e.slice(-1*t.length+s);(r=_.exec(e))!==null;){if(o=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!o)continue;if(a=[...o].length,r[3]||r[4]){l+=a;continue}else if(r[5]||r[6]){if(s%3&&!((s+a)%3)){c+=a;continue}if(u)break}if(l-=a,l>0)continue;a=Math.min(a,a+l+c);let d=[...r[0]][0].length,T=t.slice(0,s+r.index+d+a);if(Math.min(s,a)%2){let w=T.slice(1,-1);return{type:"em",raw:T,text:w,tokens:this.lexer.inlineTokens(w)}}let b=T.slice(2,-2);return{type:"strong",raw:T,text:b,tokens:this.lexer.inlineTokens(b)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(n),s=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return r&&s&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:e[0],text:n}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t,e,n=""){let r=this.rules.inline.delLDelim.exec(t);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let s=[...r[0]].length-1,o,a,l=s,c=this.rules.inline.delRDelim;for(c.lastIndex=0,e=e.slice(-1*t.length+s);(r=c.exec(e))!==null;){if(o=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!o||(a=[...o].length,a!==s))continue;if(r[3]||r[4]){l+=a;continue}if(l-=a,l>0)continue;a=Math.min(a,a+l);let p=[...r[0]][0].length,u=t.slice(0,s+r.index+p+a),_=u.slice(s,-s);return{type:"del",raw:u,text:_,tokens:this.lexer.inlineTokens(_)}}}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let n,r;return e[2]==="@"?(n=e[1],r="mailto:"+n):(n=e[1],r=n),{type:"link",raw:e[0],text:n,href:r,autolink:!0,tokens:[{type:"text",raw:n,text:n}]}}}url(t){var n;let e;if(e=this.rules.inline.url.exec(t)){let r,s;if(e[2]==="@")r=e[0],s="mailto:"+r;else{let o;do o=e[0],e[0]=((n=this.rules.inline._backpedal.exec(e[0]))==null?void 0:n[0])??"";while(o!==e[0]);r=e[0],e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:r,href:s,autolink:!0,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let n=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:n}}}},ar=class Ni{constructor(e){Oe(this,"tokens");Oe(this,"options");Oe(this,"state");Oe(this,"inlineQueue");Oe(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||$s,this.options.tokenizer=this.options.tokenizer||new za,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,top:!0};let n={other:on,block:va.normal,inline:uo.normal};this.options.pedantic?(n.block=va.pedantic,n.inline=uo.pedantic):this.options.gfm&&(n.block=va.gfm,this.options.breaks?n.inline=uo.breaks:n.inline=uo.gfm),this.tokenizer.rules=n}static get rules(){return{block:va,inline:uo}}static lex(e,n){return new Ni(n).lex(e)}static lexInline(e,n){return new Ni(n).inlineTokens(e)}lex(e){e=e.replace(on.carriageReturn,`
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
`+c.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(c);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}linkInText(e){if(!e.includes("["))return!1;let n=this.tokenizer.rules.inline.link;for(let r of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(n.test(r[0])&&e.charAt(r.index-1)!=="!")return!0;for(let r of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let s=r[0],o=s.lastIndexOf("[");if(!(s.charAt(0)==="!"||!Object.hasOwn(this.tokens.links,s.slice(o+1,-1)))&&!(o>1&&this.linkInText(s.slice(1,o-1))))return!0}return!1}inlineTokens(e,n=[]){var l,c,p,u,_;this.tokenizer.lexer=this;let r=e;if(this.tokens.links&&e.includes("[")){let d=this.tokenizer.rules.inline.reflinkSearch,T=b=>{let w=b.lastIndexOf("[");if(!Object.hasOwn(this.tokens.links,b.slice(w+1,-1)))return b;if(w>1&&b.charAt(0)!=="!"){let A=b.slice(1,w-1);if(this.linkInText(A))return"["+A.replace(d,T)+"]["+"a".repeat(b.length-w-2)+"]"}return"["+"a".repeat(b.length-2)+"]"};r=r.replace(d,T)}r=r.replace(this.tokenizer.rules.inline.anyPunctuation,d=>"+".repeat(d.length)),r=r.replace(this.tokenizer.rules.inline.blockSkip,(d,T,b)=>{let w=b?b.length:0;return d.slice(0,w)+"["+"a".repeat(d.length-w-2)+"]"}),r=((c=(l=this.options.hooks)==null?void 0:l.emStrongMask)==null?void 0:c.call({lexer:this},r))??r;let s=!1,o="",a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}s||(o=""),s=!1;let d;if((u=(p=this.options.extensions)==null?void 0:p.inline)!=null&&u.some(b=>(d=b.call({lexer:this},e,n))?(e=e.substring(d.raw.length),n.push(d),!0):!1))continue;if(d=this.tokenizer.escape(e)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.tag(e)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.link(e)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(d.raw.length);let b=n.at(-1);d.type==="text"&&(b==null?void 0:b.type)==="text"?(b.raw+=d.raw,b.text+=d.text):n.push(d);continue}if(d=this.tokenizer.emStrong(e,r,o)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.codespan(e)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.br(e)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.del(e,r,o)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.autolink(e)){e=e.substring(d.raw.length),n.push(d);continue}if(!this.state.inLink&&(d=this.tokenizer.url(e))){e=e.substring(d.raw.length),n.push(d);continue}let T=e;if((_=this.options.extensions)!=null&&_.startInline){let b=1/0,w=e.slice(1),A;this.options.extensions.startInline.forEach(N=>{A=N.call({lexer:this},w),typeof A=="number"&&A>=0&&(b=Math.min(b,A))}),b<1/0&&b>=0&&(T=e.substring(0,b+1))}if(d=this.tokenizer.inlineText(T)){e=e.substring(d.raw.length),d.raw.slice(-1)!=="_"&&(o=d.raw.slice(-1)),s=!0;let b=n.at(-1);(b==null?void 0:b.type)==="text"?(b.raw+=d.raw,b.text+=d.text):n.push(d);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return n}infiniteLoopError(e){let n="Infinite loop on byte: "+e;if(this.options.silent)console.error(n);else throw new Error(n)}},Ma=class{constructor(t){Oe(this,"options");Oe(this,"parser");this.options=t||$s}space(t){return""}code({text:t,lang:e,escaped:n}){var o;let r=(o=(e||"").match(on.notSpaceStart))==null?void 0:o[0],s=t?t.replace(on.endingNewline,"")+`
`:"";return r?'<pre><code class="language-'+Cn(r)+'">'+(n?s:Cn(s,!0))+`</code></pre>
`:"<pre><code>"+(n?s:Cn(s,!0))+`</code></pre>
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
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${Cn(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,text:n,tokens:r,autolink:s}){let o=s?Cn(n,!0):this.parser.parseInline(r),a=jl(t);if(a===null)return o;t=Cn(a,s);let l='<a href="'+t+'"';return e&&(l+=' title="'+Cn(e)+'"'),l+=">"+o+"</a>",l}image({href:t,title:e,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let s=jl(t);if(s===null)return Cn(n);t=s;let o=`<img src="${Cn(t)}" alt="${Cn(n)}"`;return e&&(o+=` title="${Cn(e)}"`),o+=">",o}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:Cn(t.text)}},ul=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}checkbox({raw:t}){return t}},ir=class Oi{constructor(e){Oe(this,"options");Oe(this,"renderer");Oe(this,"textRenderer");this.options=e||$s,this.options.renderer=this.options.renderer||new Ma,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ul}static parse(e,n){return new Oi(n).parse(e)}static parseInline(e,n){return new Oi(n).parseInline(e)}parse(e){var r,s;this.renderer.parser=this;let n="";for(let o=0;o<e.length;o++){let a=e[o];if((s=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&s[a.type]){let c=a,p=this.options.extensions.renderers[c.type].call({parser:this},c);if(p!==!1||!["space","hr","heading","code","table","blockquote","list","checkbox","html","def","paragraph","text"].includes(c.type)){n+=p||"";continue}}let l=a;switch(l.type){case"space":{n+=this.renderer.space(l);break}case"hr":{n+=this.renderer.hr(l);break}case"heading":{n+=this.renderer.heading(l);break}case"code":{n+=this.renderer.code(l);break}case"table":{n+=this.renderer.table(l);break}case"blockquote":{n+=this.renderer.blockquote(l);break}case"list":{n+=this.renderer.list(l);break}case"checkbox":{n+=this.renderer.checkbox(l);break}case"html":{n+=this.renderer.html(l);break}case"def":{n+=this.renderer.def(l);break}case"paragraph":{n+=this.renderer.paragraph(l);break}case"text":{n+=this.renderer.text(l);break}default:{let c='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return n}parseInline(e,n=this.renderer){var s,o;this.renderer.parser=this;let r="";for(let a=0;a<e.length;a++){let l=e[a];if((o=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&o[l.type]){let p=this.options.extensions.renderers[l.type].call({parser:this},l);if(p!==!1||!["escape","html","link","image","checkbox","strong","em","codespan","br","del","text"].includes(l.type)){r+=p||"";continue}}let c=l;switch(c.type){case"escape":{r+=n.text(c);break}case"html":{r+=n.html(c);break}case"link":{r+=n.link(c);break}case"image":{r+=n.image(c);break}case"checkbox":{r+=n.checkbox(c);break}case"strong":{r+=n.strong(c);break}case"em":{r+=n.em(c);break}case"codespan":{r+=n.codespan(c);break}case"br":{r+=n.br(c);break}case"del":{r+=n.del(c);break}case"text":{r+=n.text(c);break}default:{let p='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(p),"";throw new Error(p)}}}return r}},ma,wo=(ma=class{constructor(t){Oe(this,"options");Oe(this,"block");this.options=t||$s}preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(t=this.block){return t?ar.lex:ar.lexInline}provideParser(t=this.block){return t?ir.parse:ir.parseInline}},Oe(ma,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),Oe(ma,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),ma),Zh=class{constructor(...t){Oe(this,"defaults",rl());Oe(this,"options",this.setOptions);Oe(this,"parse",this.parseMarkdown(!0));Oe(this,"parseInline",this.parseMarkdown(!1));Oe(this,"Parser",ir);Oe(this,"Renderer",Ma);Oe(this,"TextRenderer",ul);Oe(this,"Lexer",ar);Oe(this,"Tokenizer",za);Oe(this,"Hooks",wo);this.use(...t)}walkTokens(t,e){var r,s;let n=[];for(let o of t)switch(n=n.concat(e.call(this,o)),o.type){case"table":{let a=o;for(let l of a.header)n=n.concat(this.walkTokens(l.tokens,e));for(let l of a.rows)for(let c of l)n=n.concat(this.walkTokens(c.tokens,e));break}case"list":{let a=o;n=n.concat(this.walkTokens(a.items,e));break}default:{let a=o;(s=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&s[a.type]?this.defaults.extensions.childTokens[a.type].forEach(l=>{let c=a[l].flat(1/0);n=n.concat(this.walkTokens(c,e))}):a.tokens&&(n=n.concat(this.walkTokens(a.tokens,e)))}}return n}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{let r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){let o=e.renderers[s.name];o?e.renderers[s.name]=function(...a){let l=s.renderer.apply(this,a);return l===!1&&(l=o.apply(this,a)),l}:e.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=e[s.level];o?o.unshift(s.tokenizer):e[s.level]=[s.tokenizer],s.start&&(s.level==="block"?e.startBlock?e.startBlock.push(s.start):e.startBlock=[s.start]:s.level==="inline"&&(e.startInline?e.startInline.push(s.start):e.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(e.childTokens[s.name]=s.childTokens)}),r.extensions=e),n.renderer){let s=this.defaults.renderer||new Ma(this.defaults);for(let o in n.renderer){if(!(o in s))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let a=o,l=n.renderer[a],c=s[a];s[a]=(...p)=>{let u=l.apply(s,p);return u===!1&&(u=c.apply(s,p)),u||""}}r.renderer=s}if(n.tokenizer){let s=this.defaults.tokenizer||new za(this.defaults);for(let o in n.tokenizer){if(!(o in s))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let a=o,l=n.tokenizer[a],c=s[a];s[a]=(...p)=>{let u=l.apply(s,p);return u===!1&&(u=c.apply(s,p)),u}}r.tokenizer=s}if(n.hooks){let s=this.defaults.hooks||new wo;for(let o in n.hooks){if(!(o in s))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let a=o,l=n.hooks[a],c=s[a];wo.passThroughHooks.has(o)?s[a]=p=>{if(this.defaults.async&&wo.passThroughHooksRespectAsync.has(o))return(async()=>{let _=await l.call(s,p);return c.call(s,_)})();let u=l.call(s,p);return c.call(s,u)}:s[a]=(...p)=>{if(this.defaults.async)return(async()=>{let _=await l.apply(s,p);return _===!1&&(_=await c.apply(s,p)),_})();let u=l.apply(s,p);return u===!1&&(u=c.apply(s,p)),u}}r.hooks=s}if(n.walkTokens){let s=this.defaults.walkTokens,o=n.walkTokens;r.walkTokens=function(a){let l=[];return l.push(o.call(this,a)),s&&(l=l.concat(s.call(this,a))),l}}this.defaults={...this.defaults,...r}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return ar.lex(t,e??this.defaults)}parser(t,e){return ir.parse(t,e??this.defaults)}parseMarkdown(t){return(e,n)=>{let r={...n},s={...this.defaults,...r},o=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&r.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(s.hooks&&(s.hooks.options=s,s.hooks.block=t),s.async)return(async()=>{let a=s.hooks?await s.hooks.preprocess(e):e,l=await(s.hooks?await s.hooks.provideLexer(t):t?ar.lex:ar.lexInline)(a,s),c=s.hooks?await s.hooks.processAllTokens(l):l;s.walkTokens&&await Promise.all(this.walkTokens(c,s.walkTokens));let p=await(s.hooks?await s.hooks.provideParser(t):t?ir.parse:ir.parseInline)(c,s);return s.hooks?await s.hooks.postprocess(p):p})().catch(o);try{s.hooks&&(e=s.hooks.preprocess(e));let a=(s.hooks?s.hooks.provideLexer(t):t?ar.lex:ar.lexInline)(e,s);s.hooks&&(a=s.hooks.processAllTokens(a)),s.walkTokens&&this.walkTokens(a,s.walkTokens);let l=(s.hooks?s.hooks.provideParser(t):t?ir.parse:ir.parseInline)(a,s);return s.hooks&&(l=s.hooks.postprocess(l)),l}catch(a){return o(a)}}}onError(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let r="<p>An error occurred:</p><pre>"+Cn(n.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(n);throw n}}},Ts=new Zh;function at(t,e){return Ts.parse(t,e)}at.options=at.setOptions=function(t){return Ts.setOptions(t),at.defaults=Ts.defaults,Tu(at.defaults),at};at.getDefaults=rl;at.defaults=$s;function Xh(...t){return Ts.use(...t),at.defaults=Ts.defaults,Tu(at.defaults),at}at.use=Xh;at.walkTokens=function(t,e){return Ts.walkTokens(t,e)};at.parseInline=Ts.parseInline;at.Parser=ir;at.parser=ir.parse;at.Renderer=Ma;at.TextRenderer=ul;at.Lexer=ar;at.lexer=ar.lex;at.Tokenizer=za;at.Hooks=wo;at.parse=at;at.options;at.setOptions;at.walkTokens;at.parseInline;ir.parse;ar.lex;/*! @license DOMPurify 3.4.15 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.15/LICENSE */function Gl(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Qh(t){if(Array.isArray(t))return t}function Jh(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,s,o,a,l=[],c=!0,p=!1;try{if(o=(n=n.call(t)).next,e!==0)for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(u){p=!0,s=u}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(p)throw s}}return l}}function ev(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tv(t,e){return Qh(t)||Jh(t,e)||nv(t,e)||ev()}function nv(t,e){if(t){if(typeof t=="string")return Gl(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Gl(t,e):void 0}}const zu=Object.entries,Kl=Object.setPrototypeOf,rv=Object.isFrozen,sv=Object.getPrototypeOf,ov=Object.getOwnPropertyDescriptor;let Ot=Object.freeze,jt=Object.seal,Is=Object.create,Mu=typeof Reflect<"u"&&Reflect,zi=Mu.apply,Mi=Mu.construct;Ot||(Ot=function(e){return e});jt||(jt=function(e){return e});zi||(zi=function(e,n){for(var r=arguments.length,s=new Array(r>2?r-2:0),o=2;o<r;o++)s[o-2]=arguments[o];return e.apply(n,s)});Mi||(Mi=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return new e(...r)});const cs=Et(Array.prototype.forEach),av=Et(Array.prototype.lastIndexOf),Yl=Et(Array.prototype.pop),fo=Et(Array.prototype.push),iv=Et(Array.prototype.splice),Ms=Array.isArray,So=Et(String.prototype.toLowerCase),li=Et(String.prototype.toString),Zl=Et(String.prototype.match),po=Et(String.prototype.replace),Xl=Et(String.prototype.indexOf),lv=Et(String.prototype.trim),cv=Et(Number.prototype.toString),uv=Et(Boolean.prototype.toString),Ql=typeof BigInt>"u"?null:Et(BigInt.prototype.toString),Jl=typeof Symbol>"u"?null:Et(Symbol.prototype.toString),xn=Et(Object.prototype.hasOwnProperty),ho=Et(Object.prototype.toString),sn=Et(RegExp.prototype.test),as=fv(TypeError);function Et(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return zi(t,e,r)}}function fv(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return Mi(t,n)}}function Ke(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:So;if(Kl&&Kl(t,null),!Ms(e))return t;let r=e.length;for(;r--;){let s=e[r];if(typeof s=="string"){const o=n(s);o!==s&&(rv(e)||(e[r]=o),s=o)}t[s]=!0}return t}function dv(t){for(let e=0;e<t.length;e++)xn(t,e)||(t[e]=null);return t}function Rn(t){const e=Is(null);for(const r of zu(t)){var n=tv(r,2);const s=n[0],o=n[1];xn(t,s)&&(Ms(o)?e[s]=dv(o):o&&typeof o=="object"&&o.constructor===Object?e[s]=Rn(o):e[s]=o)}return e}function pv(t){switch(typeof t){case"string":return t;case"number":return cv(t);case"boolean":return uv(t);case"bigint":return Ql?Ql(t):"0";case"symbol":return Jl?Jl(t):"Symbol()";case"undefined":return ho(t);case"function":case"object":{if(t===null)return ho(t);const e=t,n=Bn(e,"toString");if(typeof n=="function"){const r=n(e);return typeof r=="string"?r:ho(r)}return ho(t)}default:return ho(t)}}function Bn(t,e){for(;t!==null;){const r=ov(t,e);if(r){if(r.get)return Et(r.get);if(typeof r.value=="function")return Et(r.value)}t=sv(t)}function n(){return null}return n}function hv(t){try{return sn(t,""),!0}catch{return!1}}const ec=Ot(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),ci=Ot(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ui=Ot(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),vv=Ot(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),fi=Ot(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),gv=Ot(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),tc=Ot(["#text"]),nc=Ot(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),di=Ot(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),rc=Ot(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ga=Ot(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),mv=jt(/{{[\w\W]*|^[\w\W]*}}/g),_v=jt(/<%[\w\W]*|^[\w\W]*%>/g),bv=jt(/\${[\w\W]*/g),xv=jt(/^data-[\-\w.\u00B7-\uFFFF]+$/),yv=jt(/^aria-[\-\w]+$/),sc=jt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),kv=jt(/^(?:\w+script|data):/i),wv=jt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Sv=jt(/^html$/i),Tv=jt(/^[a-z][.\w]*(-[.\w]+)+$/i),oc=jt(/<[/\w!]/g),ac=jt(/<[/\w]/g),$v=jt(/<\/no(script|embed|frames)/i),Ev=jt(/\/>/i),An={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Lu=["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"],Av=Ot(Ke({},Lu)),Cv=(function(){const t={};return cs(Lu,e=>{t[e]=jt(new RegExp("</"+e+"(?=[\\t\\n\\f\\r />])","i"))}),Ot(t)})(),Rv=function(){return typeof window>"u"?null:window},Pv=function(e,n){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let r=null;const s="data-tt-policy-suffix";n&&n.hasAttribute(s)&&(r=n.getAttribute(s));const o="dompurify"+(r?"#"+r:"");try{return e.createPolicy(o,{createHTML(a){return a},createScriptURL(a){return a}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}},ic=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},Qr=function(e,n,r,s){return xn(e,n)&&Ms(e[n])?Ke(s.base?Rn(s.base):{},e[n],s.transform):r},pi=function(e,n,r){const s=xn(e,n)?e[n]:void 0;return s&&typeof s=="object"?Rn(s):r()};function Du(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Rv();const e=F=>Du(F);if(e.version="3.4.15",e.removed=[],!t||!t.document||t.document.nodeType!==An.document||!t.Element)return e.isSupported=!1,e;let n=t.document;const r=n,s=r.currentScript;t.DocumentFragment;const o=t.HTMLTemplateElement,a=t.Node,l=t.Element,c=t.NodeFilter,p=t.NamedNodeMap;p===void 0&&(t.NamedNodeMap||t.MozNamedAttrMap),t.HTMLFormElement;const u=t.DOMParser,_=t.trustedTypes,d=l.prototype,T=Bn(d,"cloneNode"),b=Bn(d,"remove"),w=Bn(d,"removeAttributeNode"),A=Bn(d,"nextSibling"),N=Bn(d,"childNodes"),U=Bn(d,"parentNode"),H=Bn(d,"shadowRoot"),X=Bn(d,"attributes"),C=a&&a.prototype?Bn(a.prototype,"nodeType"):null,$=a&&a.prototype?Bn(a.prototype,"nodeName"):null,O=a&&a.prototype?Bn(a.prototype,"ownerDocument"):null,te=function(f){return C?C(f):f.nodeType},ee=function(f){return $?$(f):f.nodeName};if(typeof o=="function"){const F=n.createElement("template");F.content&&F.content.ownerDocument&&(n=F.content.ownerDocument)}let fe,pe="",he,Ye=!1,qe=0;const et=function(){if(qe>0)throw as('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},K=function(f){et(),qe++;try{return fe.createHTML(f)}finally{qe--}},ve=function(f){et(),qe++;try{return fe.createScriptURL(f)}finally{qe--}},oe=function(){return Ye||(he=Pv(_,s),Ye=!0),he},le=n,P=le.implementation,D=le.createNodeIterator,ne=le.createDocumentFragment,xe=le.getElementsByTagName,we=r.importNode;let Le=ic();e.isSupported=typeof zu=="function"&&typeof U=="function"&&P&&P.createHTMLDocument!==void 0;const en=mv,vn=_v,Wt=bv,Vt=xv,hr=yv,Rr=kv,Pr=wv,Ir=Tv;let vr=sc,me=null;const qt=Ke({},[...ec,...ci,...ui,...fi,...tc]);let Fe=null;const Zn=Ke({},[...nc,...di,...rc,...ga]);let zt=Object.seal(Is(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Sn=null,gr=null;const tn=Object.seal(Is(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Nr=!0,mr=!0,Xn=!1,gn=!0,nn=!1,Tn=!0,Mt=!1,_r=!1,Qn=null,zn=null,Jn=!1,$n=!1,En=!1,er=!1,Gr=!0,Kr=!1;const Or="user-content-";let zr=!0,Mn=!1,mn={},Ln=null;const Mr=Ke({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let ce=null;const tt=Ke({},["audio","video","img","source","image","track"]);let We=null;const ye=Ke({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ve="http://www.w3.org/1998/Math/MathML",wt="http://www.w3.org/2000/svg",Ue="http://www.w3.org/1999/xhtml";let At=Ue,Gt=!1,it=null;const Ct=Ke({},[Ve,wt,Ue],li),gt=Ot(["mi","mo","mn","ms","mtext"]);let Rt=Ke({},gt);const Dn=Ot(["annotation-xml"]);let Pt=Ke({},Dn);const St=Ke({},["title","style","font","a","script"]);let vt=null;const Fn=["application/xhtml+xml","text/html"],yt="text/html";let Ze=null,E=null;const B=n.createElement("form"),V=function(f){return f instanceof RegExp||f instanceof Function},Ae=function(){let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(E&&E===f)return;(!f||typeof f!="object")&&(f={}),f=Rn(f),vt=Fn.indexOf(f.PARSER_MEDIA_TYPE)===-1?yt:f.PARSER_MEDIA_TYPE,Ze=vt==="application/xhtml+xml"?li:So,me=Qr(f,"ALLOWED_TAGS",qt,{transform:Ze}),Fe=Qr(f,"ALLOWED_ATTR",Zn,{transform:Ze}),it=Qr(f,"ALLOWED_NAMESPACES",Ct,{transform:li}),We=Qr(f,"ADD_URI_SAFE_ATTR",ye,{transform:Ze,base:ye}),ce=Qr(f,"ADD_DATA_URI_TAGS",tt,{transform:Ze,base:tt}),Ln=Qr(f,"FORBID_CONTENTS",Mr,{transform:Ze}),Sn=Qr(f,"FORBID_TAGS",Rn({}),{transform:Ze}),gr=Qr(f,"FORBID_ATTR",Rn({}),{transform:Ze}),mn=xn(f,"USE_PROFILES")?f.USE_PROFILES&&typeof f.USE_PROFILES=="object"?Rn(f.USE_PROFILES):f.USE_PROFILES:!1,Nr=f.ALLOW_ARIA_ATTR!==!1,mr=f.ALLOW_DATA_ATTR!==!1,Xn=f.ALLOW_UNKNOWN_PROTOCOLS||!1,gn=f.ALLOW_SELF_CLOSE_IN_ATTR!==!1,nn=f.SAFE_FOR_TEMPLATES||!1,Tn=f.SAFE_FOR_XML!==!1,Mt=f.WHOLE_DOCUMENT||!1,$n=f.RETURN_DOM||!1,En=f.RETURN_DOM_FRAGMENT||!1,er=f.RETURN_TRUSTED_TYPE||!1,Jn=f.FORCE_BODY||!1,Gr=f.SANITIZE_DOM!==!1,Kr=f.SANITIZE_NAMED_PROPS||!1,zr=f.KEEP_CONTENT!==!1,Mn=f.IN_PLACE||!1,vr=hv(f.ALLOWED_URI_REGEXP)?f.ALLOWED_URI_REGEXP:sc,At=typeof f.NAMESPACE=="string"?f.NAMESPACE:Ue,Rt=pi(f,"MATHML_TEXT_INTEGRATION_POINTS",()=>Ke({},gt)),Pt=pi(f,"HTML_INTEGRATION_POINTS",()=>Ke({},Dn));const k=pi(f,"CUSTOM_ELEMENT_HANDLING",()=>Is(null));if(zt=Is(null),xn(k,"tagNameCheck")&&V(k.tagNameCheck)&&(zt.tagNameCheck=k.tagNameCheck),xn(k,"attributeNameCheck")&&V(k.attributeNameCheck)&&(zt.attributeNameCheck=k.attributeNameCheck),xn(k,"allowCustomizedBuiltInElements")&&typeof k.allowCustomizedBuiltInElements=="boolean"&&(zt.allowCustomizedBuiltInElements=k.allowCustomizedBuiltInElements),jt(zt),nn&&(mr=!1),En&&($n=!0),mn&&(me=Ke({},tc),Fe=Is(null),mn.html===!0&&(Ke(me,ec),Ke(Fe,nc)),mn.svg===!0&&(Ke(me,ci),Ke(Fe,di),Ke(Fe,ga)),mn.svgFilters===!0&&(Ke(me,ui),Ke(Fe,di),Ke(Fe,ga)),mn.mathMl===!0&&(Ke(me,fi),Ke(Fe,rc),Ke(Fe,ga))),tn.tagCheck=null,tn.attributeCheck=null,xn(f,"ADD_TAGS")&&(typeof f.ADD_TAGS=="function"?tn.tagCheck=f.ADD_TAGS:Ms(f.ADD_TAGS)&&(me===qt&&(me=Rn(me)),Ke(me,f.ADD_TAGS,Ze))),xn(f,"ADD_ATTR")&&(typeof f.ADD_ATTR=="function"?tn.attributeCheck=f.ADD_ATTR:Ms(f.ADD_ATTR)&&(Fe===Zn&&(Fe=Rn(Fe)),Ke(Fe,f.ADD_ATTR,Ze))),xn(f,"ADD_FORBID_CONTENTS")&&Ms(f.ADD_FORBID_CONTENTS)&&(Ln===Mr&&(Ln=Rn(Ln)),Ke(Ln,f.ADD_FORBID_CONTENTS,Ze)),zr&&(me["#text"]=!0),Mt&&Ke(me,["html","head","body"]),me.table&&(Ke(me,["tbody"]),delete Sn.tbody),f.TRUSTED_TYPES_POLICY){if(typeof f.TRUSTED_TYPES_POLICY.createHTML!="function")throw as('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof f.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw as('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const M=fe;fe=f.TRUSTED_TYPES_POLICY;try{pe=K("")}catch(Y){throw fe=M,Y}}else f.TRUSTED_TYPES_POLICY===null?(fe=void 0,pe=""):(fe===void 0&&(fe=oe()),fe&&typeof pe=="string"&&(pe=K("")));Ot&&Ot(f),E=f},ze=Ke({},[...ci,...ui,...vv]),x=Ke({},[...fi,...gv]),R=function(f,k,M){return k.namespaceURI===Ue?f==="svg":k.namespaceURI===Ve?f==="svg"&&(M==="annotation-xml"||Rt[M]):!!ze[f]},W=function(f,k,M){return k.namespaceURI===Ue?f==="math":k.namespaceURI===wt?f==="math"&&Pt[M]:!!x[f]},Q=function(f,k,M){return k.namespaceURI===wt&&!Pt[M]||k.namespaceURI===Ve&&!Rt[M]?!1:!x[f]&&(St[f]||!ze[f])},G=function(f){let k=U(f);(!k||!k.tagName)&&(k={namespaceURI:At,tagName:"template"});const M=So(f.tagName),Y=So(k.tagName);return it[f.namespaceURI]?f.namespaceURI===wt?R(M,k,Y):f.namespaceURI===Ve?W(M,k,Y):f.namespaceURI===Ue?Q(M,k,Y):!!(vt==="application/xhtml+xml"&&it[f.namespaceURI]):!1},de=function(f){fo(e.removed,{element:f});try{U(f).removeChild(f)}catch{if(b(f),!U(f))throw as("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},_e=function(f,k,M){try{w(f,k)}catch{try{f.removeAttribute(M)}catch{}}},Te=function(f){ae(f);const k=N(f);if(k){const Y=[];cs(k,se=>{fo(Y,se)}),cs(Y,se=>{try{b(se)}catch{}})}const M=X(f);if(M)for(let Y=M.length-1;Y>=0;--Y){const se=M[Y],be=se&&se.name;typeof be=="string"&&_e(f,se,be)}},Ce=function(f,k,M){if(!M)try{M=k.getAttributeNode(f)}catch{M=null}fo(e.removed,{attribute:M||null,from:k});try{M?w(k,M):k.removeAttribute(f)}catch{try{k.removeAttribute(f)}catch{}}if(f==="is")if($n||En)try{de(k)}catch{}else try{k.setAttribute(f,"")}catch{}},Ne=function(f){const k=X(f);if(k)for(let M=k.length-1;M>=0;--M){const Y=k[M],se=Y&&Y.name;typeof se!="string"||Fe[Ze(se)]||_e(f,Y,se)}},ae=function(f){const k=[f];for(;k.length>0;){const M=k.pop();te(M)===An.element&&Ne(M);const se=N(M);if(se)for(let be=se.length-1;be>=0;--be)k.push(se[be])}},st=function(f,k){return Tn?f==="patchsrc"?!0:f==="for"&&k!=="label"&&k!=="output":!1},Re=function(f){if(!Tn)return;const k=[f];for(;k.length>0;){const M=k.pop(),Y=te(M);if(Y===An.processingInstruction||Y===An.comment&&sn(ac,M.data)){try{b(M)}catch{}continue}if(Y===An.element){const be=M,Je=Ze(ee(M));try{be.hasAttribute&&be.hasAttribute("patchsrc")&&be.removeAttribute("patchsrc"),be.hasAttribute&&be.hasAttribute("for")&&st("for",Je)&&be.removeAttribute("for")}catch{}}const se=N(M);if(se)for(let be=se.length-1;be>=0;--be)k.push(se[be])}},Qe=function(f){let k=null,M=null;if(Jn)f="<remove></remove>"+f;else{const be=Zl(f,/^[\r\n\t ]+/);M=be&&be[0]}vt==="application/xhtml+xml"&&At===Ue&&(f='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+f+"</body></html>");const Y=fe?K(f):f;if(At===Ue)try{k=new u().parseFromString(Y,vt)}catch{}if(!k||!k.documentElement){k=P.createDocument(At,"template",null);try{k.documentElement.innerHTML=Gt?pe:Y}catch{}}const se=k.body||k.documentElement;return f&&M&&se.insertBefore(n.createTextNode(M),se.childNodes[0]||null),At===Ue?xe.call(k,Mt?"html":"body")[0]:Mt?k.documentElement:se},nt=function(f){const k=O?O(f):f.ownerDocument;return D.call(k||f,f,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},kt=function(f){return f=po(f,en," "),f=po(f,vn," "),f=po(f,Wt," "),f},Lt=function(f){var k;f.normalize();const M=O?O(f):f.ownerDocument,Y=D.call(M||f,f,c.SHOW_TEXT|c.SHOW_COMMENT|c.SHOW_CDATA_SECTION|c.SHOW_PROCESSING_INSTRUCTION,null);let se=Y.nextNode();for(;se;)se.data=kt(se.data),se=Y.nextNode();const be=(k=f.querySelectorAll)===null||k===void 0?void 0:k.call(f,"template");be&&cs(be,Je=>{ot(Je.content)&&Lt(Je.content)})},Kt=function(f){const k=$?$(f):null;return typeof k!="string"||Ze(k)!=="form"?!1:typeof f.nodeName!="string"||typeof f.textContent!="string"||typeof f.removeChild!="function"||f.attributes!==X(f)||typeof f.removeAttribute!="function"||typeof f.removeAttributeNode!="function"||typeof f.getAttributeNode!="function"||typeof f.setAttribute!="function"||typeof f.namespaceURI!="string"||typeof f.insertBefore!="function"||typeof f.hasChildNodes!="function"||f.nodeType!==C(f)||f.childNodes!==N(f)},ot=function(f){if(!C||typeof f!="object"||f===null)return!1;try{return C(f)===An.documentFragment}catch{return!1}},Ge=function(f){if(!C||typeof f!="object"||f===null)return!1;try{return typeof C(f)=="number"}catch{return!1}};function Dt(F,f,k){F.length!==0&&cs(F,M=>{M.call(e,f,k,E)})}const tr=function(f,k){return!!(Tn&&f.hasChildNodes()&&!Ge(f.firstElementChild)&&sn(oc,f.textContent)&&sn(oc,f.innerHTML)||Tn&&f.namespaceURI===Ue&&Av[k]&&(Ge(f.firstElementChild)||typeof f.textContent=="string"&&sn(Cv[k],f.textContent))||f.nodeType===An.processingInstruction||Tn&&f.nodeType===An.comment&&sn(ac,f.data))},nr=function(f,k){if(f instanceof RegExp)return sn(f,k);if(f instanceof Function){for(var M=arguments.length,Y=new Array(M>2?M-2:0),se=2;se<M;se++)Y[se-2]=arguments[se];return!!f(k,...Y)}return!1},Lr=function(f,k,M){if(!Sn[k]&&Dr(k)&&nr(zt.tagNameCheck,k))return!1;if(zr&&!Ln[k]){const Y=U(f),se=N(f);if(se&&Y){const be=se.length;for(let Je=be-1;Je>=0;--Je){const ft=f===M?T(se[Je],!0):se[Je];Y.insertBefore(ft,A(f))}}}return de(f),!0},lt=function(f,k,M,Y){return f.length===0?k:k===M||k===Y?Rn(k):k},ct=function(f,k){return f===k||U(f)!==null?!1:(Mn&&ae(f),!0)},ut=function(f,k){if(Dt(Le.beforeSanitizeElements,f,null),ct(f,k))return!0;if(Kt(f))return de(f),!0;const M=Ze(ee(f));if(me=lt(Le.uponSanitizeElement,me,qt,Qn),Dt(Le.uponSanitizeElement,f,{tagName:M,allowedTags:me}),ct(f,k))return!0;if(tr(f,M))return de(f),!0;if(Sn[M]||!(tn.tagCheck instanceof Function&&tn.tagCheck(M))&&!me[M]){const se=Lr(f,M,k);return se===!1&&Dt(Le.afterSanitizeElements,f,null),se}if(te(f)===An.element&&!G(f)||(M==="noscript"||M==="noembed"||M==="noframes")&&sn($v,f.innerHTML))return de(f),!0;if(nn&&f.nodeType===An.text){const se=kt(f.textContent);f.textContent!==se&&(fo(e.removed,{element:f.cloneNode()}),f.textContent=se)}return Dt(Le.afterSanitizeElements,f,null),!1},_n=function(f,k,M){if(gr[k]||st(k,f)||Gr&&(k==="id"||k==="name")&&(M in n||M in B))return!1;const Y=Fe[k]||tn.attributeCheck instanceof Function&&tn.attributeCheck(k,f);return mr&&sn(Vt,k)||Nr&&sn(hr,k)?!0:Y?We[k]||sn(vr,po(M,Pr,""))||(k==="src"||k==="xlink:href"||k==="href")&&f!=="script"&&Xl(M,"data:")===0&&ce[f]||Xn&&!sn(Rr,po(M,Pr,""))?!0:!M:Dr(f)&&nr(zt.tagNameCheck,f)&&nr(zt.attributeNameCheck,k,f)||k==="is"&&zt.allowCustomizedBuiltInElements&&nr(zt.tagNameCheck,M)},an=Ke({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),Dr=function(f){return!an[So(f)]&&sn(Ir,f)},Es=function(f,k,M,Y){if(fe&&typeof _=="object"&&typeof _.getAttributeType=="function"&&!M)switch(_.getAttributeType(f,k)){case"TrustedHTML":return K(Y);case"TrustedScriptURL":return ve(Y)}return Y},so=function(f,k,M,Y){try{return M?f.setAttributeNS(M,k,Y):f.setAttribute(k,Y),Kt(f)?(de(f),!1):!0}catch{return Ce(k,f),!1}},ln=function(f){Dt(Le.beforeSanitizeAttributes,f,null);const k=f.attributes;if(!k||Kt(f))return;Fe=lt(Le.uponSanitizeAttribute,Fe,Zn,zn);const M={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Fe,forceKeepAttr:void 0};let Y=k.length;const se=Ze(f.nodeName);for(;Y--;){const be=k[Y],Je=be.name,ft=be.namespaceURI,Yt=be.value,rn=Ze(Je),oo=Yt;let Zt=Je==="value"?oo:lv(oo),Ft=!1;if(M.attrName=rn,M.attrValue=Zt,M.keepAttr=!0,M.forceKeepAttr=void 0,Dt(Le.uponSanitizeAttribute,f,M),Zt=M.attrValue,Kr&&(rn==="id"||rn==="name")&&Xl(Zt,Or)!==0&&(Ce(Je,f,be),Zt=Or+Zt,Ft=!0),Tn&&sn(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,Zt)){Ce(Je,f,be);continue}if(rn==="attributename"&&Zl(Zt,"href")){Ce(Je,f,be);continue}if(!M.forceKeepAttr){if(!M.keepAttr){Ce(Je,f,be);continue}if(!gn&&sn(Ev,Zt)){Ce(Je,f,be);continue}if(nn&&(Zt=kt(Zt)),!_n(se,rn,Zt)){Ce(Je,f,be);continue}Zt=Es(se,rn,ft,Zt),Zt!==oo&&so(f,Je,ft,Zt)&&Ft&&Yl(e.removed)}}Dt(Le.afterSanitizeAttributes,f,null)},Hn=function(f){let k=null;const M=nt(f);for(Dt(Le.beforeSanitizeShadowDOM,f,null);k=M.nextNode();)if(Dt(Le.uponSanitizeShadowNode,k,null),ut(k,f),ln(k),ot(k.content)&&Hn(k.content),te(k)===An.element){const Y=H(k);ot(Y)&&(os(Y),Hn(Y))}Dt(Le.afterSanitizeShadowDOM,f,null)},os=function(f){const k=[{node:f,shadow:null}];for(;k.length>0;){const M=k.pop();if(M.shadow){Hn(M.shadow);continue}const Y=M.node,be=te(Y)===An.element,Je=N(Y);if(Je)for(let ft=Je.length-1;ft>=0;--ft)k.push({node:Je[ft],shadow:null});if(be){const ft=$?$(Y):null;if(typeof ft=="string"&&Ze(ft)==="template"){const Yt=Y.content;ot(Yt)&&k.push({node:Yt,shadow:null})}}if(be){const ft=H(Y);ot(ft)&&k.push({node:null,shadow:ft},{node:ft,shadow:null})}}};return e.sanitize=function(F){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},k=null,M=null,Y=null,se=null;if(Gt=!F,Gt&&(F="<!-->"),typeof F!="string"&&!Ge(F)&&(F=pv(F),typeof F!="string"))throw as("dirty is not a string, aborting");if(!e.isSupported)return F;_r?(me=Qn,Fe=zn):Ae(f),(Le.uponSanitizeElement.length>0||Le.uponSanitizeAttribute.length>0)&&(me=Rn(me)),Le.uponSanitizeAttribute.length>0&&(Fe=Rn(Fe)),e.removed=[];const be=Mn&&typeof F!="string"&&Ge(F);if(be){Re(F);const Yt=ee(F);if(typeof Yt=="string"){const rn=Ze(Yt);if(!me[rn]||Sn[rn])throw Te(F),as("root node is forbidden and cannot be sanitized in-place")}if(Kt(F))throw Te(F),as("root node is clobbered and cannot be sanitized in-place");try{os(F)}catch(rn){throw Te(F),rn}}else if(Ge(F))k=Qe("<!---->"),M=k.ownerDocument.importNode(F,!0),M.nodeType===An.element&&M.nodeName==="BODY"||M.nodeName==="HTML"?k=M:k.appendChild(M),os(k);else{if(!$n&&!nn&&!Mt&&F.indexOf("<")===-1)return fe&&er?K(F):F;if(k=Qe(F),!k)return $n?null:er?pe:""}k&&Jn&&de(k.firstChild);const Je=be?F:k;try{const Yt=nt(Je);for(;Y=Yt.nextNode();)ut(Y,Je),ln(Y),ot(Y.content)&&Hn(Y.content)}catch(Yt){throw be&&(Te(F),cs(e.removed,rn=>{rn.element&&ae(rn.element)})),Yt}if(be)return cs(e.removed,Yt=>{Yt.element&&ae(Yt.element)}),nn&&Lt(F),F;if($n){if(nn&&Lt(k),En)for(se=ne.call(k.ownerDocument);k.firstChild;)se.appendChild(k.firstChild);else se=k;return(Fe.shadowroot||Fe.shadowrootmode)&&(se=we.call(r,se,!0)),se}let ft=Mt?k.outerHTML:k.innerHTML;return Mt&&me["!doctype"]&&k.ownerDocument&&k.ownerDocument.doctype&&k.ownerDocument.doctype.name&&sn(Sv,k.ownerDocument.doctype.name)&&(ft="<!DOCTYPE "+k.ownerDocument.doctype.name+`>
`+ft),nn&&(ft=kt(ft)),fe&&er?K(ft):ft},e.setConfig=function(){let F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ae(F),_r=!0,Qn=me,zn=Fe},e.clearConfig=function(){E=null,_r=!1,Qn=null,zn=null,fe=he,pe=""},e.isValidAttribute=function(F,f,k){E||Ae({});const M=Ze(F),Y=Ze(f);return _n(M,Y,k)},e.addHook=function(F,f){typeof f=="function"&&xn(Le,F)&&fo(Le[F],f)},e.removeHook=function(F,f){if(xn(Le,F)){if(f!==void 0){const k=av(Le[F],f);return k===-1?void 0:iv(Le[F],k,1)[0]}return Yl(Le[F])}},e.removeHooks=function(F){xn(Le,F)&&(Le[F]=[])},e.removeAllHooks=function(){Le=ic()},e}var Iv=Du(),Nv=I(`<div class="pointer-events-none absolute inset-2 z-20 flex items-center justify-center
                rounded-md border-2 border-dashed border-mk-green/70 bg-mk-bg/80 text-xs text-mk-green svelte-1roe1v9">Drop files to attach</div>`),Ov=I('<p class="rounded-sm border border-mk-pink/40 bg-mk-pink/10 px-2 py-1 text-xs text-mk-pink svelte-1roe1v9"> </p>'),zv=I('<div class="flex flex-col items-start gap-1 svelte-1roe1v9"><span class="flex items-center gap-1.5 text-[11px] font-semibold text-mk-green svelte-1roe1v9"><!> </span> <div class="chat-bubble chat-bubble-agent chat-prose text-[13px] leading-relaxed text-mk-fg svelte-1roe1v9"></div></div>'),Mv=I('<div class="flex flex-col items-end gap-1 svelte-1roe1v9"><span class="text-[11px] font-semibold text-mk-blue svelte-1roe1v9">You</span> <div class="chat-bubble chat-bubble-user text-[13px] leading-relaxed whitespace-pre-wrap text-mk-fg svelte-1roe1v9"> </div></div>'),Lv=I(`<div class="m-auto flex max-w-[250px] flex-col items-center gap-2.5 text-center svelte-1roe1v9"><!> <p class="text-xs leading-relaxed text-mk-comment svelte-1roe1v9">Ask about the file you have open. The prompt goes to <span class="text-mk-muted svelte-1roe1v9"> </span>,
            and the reply appears here.</p></div>`),lc=I('<span class="text-mk-comment svelte-1roe1v9"> </span>'),Dv=I('<div class="flex items-start gap-1.5 text-mk-comment svelte-1roe1v9"><span class="mt-[3px] text-mk-green svelte-1roe1v9">●</span> <span class="truncate svelte-1roe1v9"><b class="font-medium text-mk-fg/80 svelte-1roe1v9"> </b> <!></span></div>'),Fv=I('<div class="flex flex-col gap-0.5 text-[11px] svelte-1roe1v9"></div>'),Hv=I('<div class="flex flex-col items-start gap-1 svelte-1roe1v9"><span class="flex items-center gap-1.5 text-[11px] font-semibold text-mk-green svelte-1roe1v9"><!> </span> <div class="chat-bubble chat-bubble-agent chat-prose text-[13px] leading-relaxed text-mk-fg svelte-1roe1v9"><!><span class="chat-caret svelte-1roe1v9"></span></div></div>'),Bv=I('<div class="flex items-center gap-2 text-[11px] text-mk-comment svelte-1roe1v9"><!> <span class="svelte-1roe1v9"> <span class="chat-dots svelte-1roe1v9"></span></span></div>'),Uv=I(`<button class="mx-auto -mt-1 mb-1 flex shrink-0 items-center gap-1 rounded-full border border-mk-line
             bg-mk-input px-2.5 py-0.5 text-[11px] text-mk-comment shadow hover:text-mk-fg svelte-1roe1v9"><!> </button>`),jv=I(`<span title="Context used of the model's window"> </span> <span class="h-2 w-16 overflow-hidden rounded-full bg-mk-line svelte-1roe1v9" aria-hidden="true"><span></span></span>`,1),Wv=I('<span class="text-mk-muted svelte-1roe1v9" title="Several sessions share this folder — totals cover all of them">shared</span>'),Vv=I('<span class="truncate text-mk-muted svelte-1roe1v9" title="Model for the most recent turn"> </span>'),qv=I('<!> <span class="svelte-1roe1v9"> </span> <!> <!> <!>',1),Gv=I('<span class="text-mk-muted svelte-1roe1v9">No usage reported yet</span>'),Kv=I('<button class="ml-auto flex items-center gap-1 rounded-sm px-1.5 py-0.5 hover:bg-mk-line hover:text-mk-fg disabled:opacity-40 svelte-1roe1v9" title="Compact the conversation to free up context (/compact)"><!> Compact</button>'),Yv=I('<span class="flex items-center gap-1 rounded-sm bg-mk-input px-1.5 py-0.5 text-[11px] text-mk-fg svelte-1roe1v9"><!> <button class="rounded-sm p-0.5 text-mk-comment hover:text-mk-fg svelte-1roe1v9" title="Remove attachment">×</button></span>'),Zv=I('<div class="flex shrink-0 flex-wrap gap-1 border-t border-mk-line px-3 py-1.5 svelte-1roe1v9"></div>'),cc=I('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line svelte-1roe1v9"><span class="w-3 text-mk-green svelte-1roe1v9"><!></span> </button>'),Xv=I('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[150px] rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl svelte-1roe1v9"></div>'),Qv=I('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line svelte-1roe1v9"><span class="w-3 text-mk-green svelte-1roe1v9"><!></span> <span class="truncate svelte-1roe1v9"> </span></button>'),Jv=I('<div class="absolute bottom-full left-0 z-20 mb-1 max-h-[260px] min-w-[190px] overflow-y-auto rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl svelte-1roe1v9"></div>'),eg=I('<div class="relative svelte-1roe1v9" data-menu=""><button class="flex max-w-[110px] items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg svelte-1roe1v9" title="Model"><span class="truncate svelte-1roe1v9"> </span> <!></button> <!></div>'),tg=I('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[130px] rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl svelte-1roe1v9"></div>'),ng=I('<div class="relative svelte-1roe1v9" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg svelte-1roe1v9" title="Reasoning effort"> <!></button> <!></div>'),rg=I('<div class="relative flex h-full min-h-0 flex-col bg-mk-bg text-mk-fg svelte-1roe1v9" role="region" aria-label="AI Agent conversation"><!> <div class="relative flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-3 py-3 svelte-1roe1v9"><!> <!> <!> <!> <!></div> <!> <div class="flex shrink-0 items-center gap-2 border-t border-mk-line px-3 py-1 text-[10px] text-mk-comment svelte-1roe1v9"><!> <!></div> <!> <div class="border-t border-mk-line p-2 svelte-1roe1v9"><div class="rounded-md border border-mk-line bg-mk-input focus-within:border-mk-green svelte-1roe1v9"><textarea rows="2" class="max-h-[200px] w-full resize-none bg-transparent px-2.5 py-2 text-[13px] text-mk-fg outline-none placeholder:text-mk-comment svelte-1roe1v9" placeholder="Ask about this workspace…"></textarea> <div class="flex items-center gap-1 px-1.5 pb-1.5 text-[11px] svelte-1roe1v9"><div class="relative svelte-1roe1v9" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg svelte-1roe1v9" title="Agent"> <!></button> <!></div> <!> <!> <!> <span class="ml-auto flex items-center gap-1.5 svelte-1roe1v9"><kbd class="hidden text-[10px] text-mk-comment sm:inline svelte-1roe1v9">↵ send · ⇧↵ newline</kbd> <button class="flex h-6 w-6 items-center justify-center rounded-md bg-mk-green text-mk-bg disabled:opacity-40 svelte-1roe1v9" title="Send (Enter)" aria-label="Send"><!></button></span></div></div></div></div>');function sg(t,e){pn(e,!0);let n=xt(e,"sessions",19,()=>[]),r=xt(e,"session",3,""),s=xt(e,"rootPath",3,""),o=xt(e,"target",15,"");Qt(()=>{!o()&&(r()||n()[0])&&o(r()||n()[0])});let a=z(""),l=z(!1),c=0,p=z(!1),u=z(""),_=z(Xe([])),d=z(null),T=z("");const b=Ht(()=>i(l)||i(p)||!!i(u)),w=Ht(()=>{const x=[...i(_)].reverse().find(R=>R.type==="tool");return x?`Running ${x.name}`:i(u)?"Writing":i(T)||"Generating"});let A=z(Xe([])),N=z(""),U=z(null),H=z(null),X=null,C=z(Xe({agent:"codex",available:[],model:"",effort:"",models:[],efforts:[]})),$=z(""),O=z("");const te=Ht(()=>(i(C).models.find(x=>x[0]===i(C).model)||[])[1]||i(C).model||"default");let ee=z("");async function fe(){if(!g.connectionId){h(ee,"");return}try{h(ee,(await Be.agentContext(g.connectionId)).context||"",!0)}catch{h(ee,"")}}Qt(()=>{g.connectionId,fe()});async function pe(){if(o())try{h(C,{agent:"codex",available:[],model:"",effort:"",models:[],efforts:[],...await Be.sessionAgent(o())},!0)}catch(x){h(C,{agent:i(C).agent,available:[],model:"",effort:"",models:[],efforts:[]},!0),g.setStatus(x.message||"Could not read agent settings")}}async function he(){if(o())try{const x=await Be.chat(o()),R=x.messages||[],W=new Set;for(const Ne of R)Ne.role==="user"&&(Ne.text&&W.add(Ne.text.trim()),Ne.full&&W.add(Ne.full.trim()));const Q=i(A).filter(Ne=>Ne._local&&!W.has((Ne.text||"").trim())),G=Q.length?[...R,...Q]:R,de=G.length!==i(A).length;h(A,G,!0),h(p,!!x.busy),h(T,x.detail||"",!0);const _e=x.pending||"",Te=x.steps||[],Ce=_e!==i(u)||Te.length!==i(_).length;h(u,_e,!0),h(_,Te,!0),h(N,""),(de||Ce||i(b))&&i(et)&&ve()}catch(x){h(N,x.message||"Could not load chat",!0)}}const Ye=3e3,qe=600;Qt(()=>{const x=i(b)?qe:Ye;!o()||c===x||(c=x,clearInterval(X),X=setInterval(he,x))});let et=z(!0);function K(){if(!i(U))return;const x=i(U).scrollHeight-i(U).scrollTop-i(U).clientHeight;h(et,x<80)}async function ve(){await Qi(),i(U)&&(i(U).scrollTop=i(U).scrollHeight,requestAnimationFrame(()=>{i(U)&&(i(U).scrollTop=i(U).scrollHeight)}))}function oe(){h(et,!0),ve()}Qt(()=>{const x=o();h(A,[],!0),h(u,""),h(_,[],!0),h(p,!1),h(et,!0),X&&clearInterval(X),c=0,x&&(he(),pe())}),el(()=>{X&&clearInterval(X)});async function le(x){if(h($,""),x!==i(C).agent){h(O,"agent");try{await Be.setSessionAgent(o(),x),await pe(),g.setStatus(`Switched to ${x}`)}catch(R){g.setStatus(R.message||"Could not switch agent")}finally{h(O,"")}}}async function P(x){if(h($,""),x!==i(C).model){h(O,"model");try{await Be.setSessionModel(o(),x),await pe(),g.setStatus(`Model set to ${x}`)}catch(R){g.setStatus(R.message||"Could not change model")}finally{h(O,"")}}}async function D(x){if(h($,""),x!==i(C).effort){h(O,"effort");try{await Be.setSessionEffort(o(),x),await pe(),g.setStatus(`Reasoning effort set to ${x}`)}catch(R){g.setStatus(R.message||"Could not change effort")}finally{h(O,"")}}}function ne(){const x=g.connection||{},R=g.activeTab,W=R?R.path:g.path||".",Q=R?`
Active file contents (first 12,000 characters):
${R.content.slice(0,12e3)}`:"";return`${i(ee)||(x.kind==="local"?`[IDE workspace]
Local folder: ${x.workspace_root||"."}
`:`[IDE workspace]
SSH target: ${x.username||"?"}@${x.host||"?"}
`)}
Currently open: ${W}${Q}

${i(a).trim()}`}let xe=z(!1),we=z(Xe([]));function Le(x){const R=x.dataTransfer;!R||!(R.types.includes("Files")||R.types.includes("text/x-ide-path"))||(x.preventDefault(),h(xe,!0))}async function en(x){x.preventDefault(),h(xe,!1);const R=x.dataTransfer;if(!R)return;const W=R.getData("text/x-ide-path");if(W){i(we).includes(W)||h(we,[...i(we),W],!0);return}for(const Q of Array.from(R.files||[]))try{const G=new FormData;G.append("file",Q);const de=await fetch(`${s()}/api/sessions/${encodeURIComponent(o())}/upload`,{method:"POST",body:G}),_e=await de.json().catch(()=>({}));if(!de.ok)throw new Error(_e.error||"Upload failed");_e.path&&!i(we).includes(_e.path)&&h(we,[...i(we),_e.path],!0)}catch(G){g.setStatus(G.message||`Could not attach ${Q.name}`)}}const vn=x=>{h(we,i(we).filter(R=>R!==x),!0)},Wt=x=>x.split("/").pop();async function Vt(){const x=i(a).trim();if(!x||!o()||i(l))return;const R=i(we).length?`

Attached files (read them from these paths):
${i(we).map(G=>`- ${G}`).join(`
`)}`:"",W=ne()+R;h(l,!0);const Q={role:"user",text:i(we).length?`${x}

${i(we).map(Wt).join(", ")}`:x,ts:Date.now()/1e3,_local:!0};h(A,[...i(A),Q],!0),h(a,""),h(we,[],!0),i(H)&&(i(H).style.height="auto"),ve();try{const G=await fetch(`${s()}/api/sessions/${encodeURIComponent(o())}/send`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:W,display:x})}),de=await G.json().catch(()=>({}));if(!G.ok)throw h(A,i(A).filter(_e=>_e!==Q),!0),h(a,x,!0),new Error(de.error||"Could not send");he(),setTimeout(he,400)}catch(G){g.setStatus(G.message||"Could not send prompt")}finally{h(l,!1)}}function hr(x){x.key==="Enter"&&!x.shiftKey&&(x.preventDefault(),Vt())}function Rr(x){const R=x.currentTarget;R.style.height="auto",R.style.height=`${Math.min(R.scrollHeight,200)}px`}const Pr=x=>x.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function Ir(x){try{const R=at.parse(x||"",{breaks:!0,gfm:!0});return Iv.sanitize(R,{FORBID_TAGS:["form","input","button","style","iframe","object","embed"],FORBID_ATTR:["style","srcset"]})}catch{return Pr(x||"")}}function vr(x){const R=x.full||x.text||"",W=`

`;if(R.startsWith("[IDE workspace")||R.startsWith("[Remote IDE context]")||R.startsWith("[Remote SSH IDE context]")){const Q=R.lastIndexOf(W);if(Q!==-1)return R.slice(Q+W.length)}return R}let me=z(null),qt=z(!1),Fe=null;async function Zn(){if(o())try{const x=await fetch(`${s()}/api/sessions/${encodeURIComponent(o())}/mcp`);h(d,x.ok?await x.json():null,!0)}catch{h(d,null)}}async function zt(){if(o())try{const R=await(await fetch(`${s()}/api/sessions/${encodeURIComponent(o())}/stats`)).json().catch(()=>({}));h(me,R&&R.available?R:null,!0)}catch{h(me,null)}}Qt(()=>(o(),zt(),Zn(),clearInterval(Fe),Fe=setInterval(zt,2e4),()=>clearInterval(Fe)));async function Sn(){if(!(!o()||i(qt))){h(qt,!0);try{const x=await fetch(`${s()}/api/sessions/${encodeURIComponent(o())}/compact`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:"/compact"})}),R=await x.json().catch(()=>({}));if(!x.ok)throw new Error(R.error||"Could not compact");g.setStatus(R.outcome||"Compact requested"),setTimeout(zt,4e3)}catch(x){g.setStatus(x.message||"Could not compact context")}finally{h(qt,!1)}}}const gr=x=>{const R=Number(x)||0;return R>=1e6?`${(R/1e6).toFixed(1)}M`:R>=1e3?`${(R/1e3).toFixed(1)}k`:String(R)},tn=15,Nr=2e4,mr=Ht(()=>!!o()&&!!i(me)&&(i(me).ctxWindowSize&&(i(me).contextPct||0)>=tn||!i(me).ctxWindowSize&&(i(me).lastInputTokens||0)>=Nr)),Xn=x=>x>=90?"text-vs-red":x>=70?"text-vs-yellow":"text-vs-muted";var gn=rg();Bt("click",Ss,x=>{var R,W;(W=(R=x.target).closest)!=null&&W.call(R,"[data-menu]")||h($,"")});var nn=S(gn);{var Tn=x=>{var R=Nv();y(x,R)};j(nn,x=>{i(xe)&&x(Tn)})}var Mt=v(nn,2),_r=S(Mt);{var Qn=x=>{var R=Ov(),W=ie(R,!0);J(()=>Z(W,i(N))),y(x,R)};j(_r,x=>{i(N)&&x(Qn)})}var zn=v(_r,2);mt(zn,19,()=>i(A),(x,R)=>x.ts+":"+R,(x,R)=>{var W=ue(),Q=q(W);{var G=_e=>{var Te=zv(),Ce=S(Te),Ne=S(Ce);ii(Ne,{size:11});var ae=v(Ne),st=v(Ce,2);wl(st,()=>Ir(vr(i(R))),!0),J(()=>Z(ae,` ${i(C).agent==="claude"?"Claude":"Codex"}`)),y(_e,Te)},de=_e=>{var Te=Mv(),Ce=v(S(Te),2),Ne=ie(Ce,!0);J(ae=>Z(Ne,ae),[()=>vr(i(R))]),y(_e,Te)};j(Q,_e=>{i(R).role==="assistant"?_e(G):_e(de,-1)})}y(x,W)},x=>{var R=ue(),W=q(R);{var Q=G=>{var de=Lv(),_e=S(de);ii(_e,{size:26,strokeWidth:1.3,class:"text-mk-line"});var Te=v(_e,2),Ce=v(S(Te)),Ne=ie(Ce,!0);J(()=>Z(Ne,o()||"the selected session")),y(G,de)};j(W,G=>{i(N)||G(Q)})}y(x,R)});var Jn=v(zn,2);{var $n=x=>{var R=Fv();mt(R,21,()=>i(_).filter(W=>W.type==="tool"),Ji,(W,Q)=>{var G=Dv(),de=v(S(G),2),_e=S(de),Te=ie(_e,!0),Ce=v(_e,2);{var Ne=ae=>{var st=lc(),Re=ie(st);J(()=>Z(Re,`(${i(Q).detail??""})`)),y(ae,st)};j(Ce,ae=>{i(Q).detail&&ae(Ne)})}J(()=>Z(Te,i(Q).name)),y(W,G)}),y(x,R)};j(Jn,x=>{i(_).length&&i(b)&&x($n)})}var En=v(Jn,2);{var er=x=>{var R=Hv(),W=S(R),Q=S(W);ii(Q,{size:11});var G=v(Q),de=v(W,2),_e=S(de);wl(_e,()=>Ir(i(u))),J(()=>Z(G,` ${i(C).agent==="claude"?"Claude":"Codex"}`)),y(x,R)};j(En,x=>{i(u)&&x(er)})}var Gr=v(En,2);{var Kr=x=>{var R=Bv(),W=S(R);fr(W,{size:11,class:"animate-spin"});var Q=v(W,2),G=S(Q);J(()=>Z(G,i(w))),y(x,R)};j(Gr,x=>{i(b)&&x(Kr)})}Ys(Mt,x=>h(U,x),()=>i(U));var Or=v(Mt,2);{var zr=x=>{var R=Uv(),W=S(R);Tr(W,{size:11});var Q=v(W);J(()=>Z(Q,` ${i(b)?"Jump to latest — still generating":"Jump to latest"}`)),L("click",R,oe),y(x,R)};j(Or,x=>{i(et)||x(zr)})}var Mn=v(Or,2),mn=S(Mn);{var Ln=x=>{var R=qv(),W=q(R);{var Q=Re=>{var Qe=jv(),nt=q(Qe),kt=ie(nt),Lt=v(nt,2),Kt=ie(Lt);J((ot,Ge)=>{fn(nt,1,ot,"svelte-1roe1v9"),Z(kt,`${i(me).contextPct??0??""}% context`),fn(Kt,1,`block h-full rounded-full ${(i(me).contextPct||0)>=90?"bg-vs-red":(i(me).contextPct||0)>=70?"bg-vs-yellow":"bg-mk-green"}`,"svelte-1roe1v9"),ys(Kt,`width: ${Ge??""}%`)},[()=>vu(Xn(i(me).contextPct||0)),()=>Math.min(100,Math.max(0,i(me).contextPct||0))]),y(Re,Qe)};j(W,Re=>{i(me).ctxWindowSize&&Re(Q)})}var G=v(W,2),de=ie(G),_e=v(G,2);{var Te=Re=>{var Qe=lc(),nt=ie(Qe);J(kt=>{Ie(Qe,"title",kt),Z(nt,`${i(d).servers.length??""} MCP`)},[()=>`MCP tools available to this agent: ${i(d).servers.map(kt=>kt.name).join(", ")}`]),y(Re,Qe)};j(_e,Re=>{i(d)&&i(d).servers&&i(d).servers.length&&Re(Te)})}var Ce=v(_e,2);{var Ne=Re=>{var Qe=Wv();y(Re,Qe)};j(Ce,Re=>{i(me).shared&&Re(Ne)})}var ae=v(Ce,2);{var st=Re=>{var Qe=Vv(),nt=ie(Qe,!0);J(()=>Z(nt,i(me).model)),y(Re,Qe)};j(ae,Re=>{i(me).model&&i(me).model!=="unknown"&&Re(st)})}J((Re,Qe,nt)=>{Ie(G,"title",`${i(me).messageCount??""} turns · ${Re??""} in · ${Qe??""} out`),Z(de,`${nt??""} tokens`)},[()=>gr(i(me).totalInput),()=>gr(i(me).totalOutput),()=>gr(i(me).totalTokens)]),y(x,R)},Mr=x=>{var R=Gv();y(x,R)};j(mn,x=>{i(me)?x(Ln):x(Mr,-1)})}var ce=v(mn,2);{var tt=x=>{var R=Kv(),W=S(R);{var Q=de=>{fr(de,{size:10,class:"animate-spin"})},G=de=>{rp(de,{size:10})};j(W,de=>{i(qt)?de(Q):de(G,-1)})}J(()=>R.disabled=i(qt)),L("click",R,Sn),y(x,R)};j(ce,x=>{i(mr)&&x(tt)})}var We=v(Mn,2);{var ye=x=>{var R=Zv();mt(R,20,()=>i(we),W=>W,(W,Q)=>{var G=Yv(),de=S(G);lp(de,{size:10,class:"text-mk-comment"});var _e=v(de),Te=v(_e);J((Ce,Ne)=>{Ie(G,"title",Q),Z(_e,` ${Ce??""} `),Ie(Te,"aria-label",`Remove ${Ne??""}`)},[()=>Wt(Q),()=>Wt(Q)]),L("click",Te,()=>vn(Q)),y(W,G)}),y(x,R)};j(We,x=>{i(we).length&&x(ye)})}var Ve=v(We,2),wt=S(Ve),Ue=S(wt);Ys(Ue,x=>h(H,x),()=>i(H));var At=v(Ue,2),Gt=S(At),it=S(Gt),Ct=S(it),gt=v(Ct);Tr(gt,{size:11});var Rt=v(it,2);{var Dn=x=>{var R=Xv();mt(R,20,()=>i(C).available.length?i(C).available:["codex"],W=>W,(W,Q)=>{var G=cc(),de=S(G),_e=S(de);{var Te=Ne=>{wa(Ne,{size:11})};j(_e,Ne=>{Q===i(C).agent&&Ne(Te)})}var Ce=v(de);J(()=>Z(Ce,` ${Q==="claude"?"Claude":"Codex"}`)),L("click",G,()=>le(Q)),y(W,G)}),y(x,R)};j(Rt,x=>{i($)==="agent"&&x(Dn)})}var Pt=v(Gt,2);{var St=x=>{var R=eg(),W=S(R),Q=S(W),G=ie(Q,!0),de=v(Q,2);Tr(de,{size:11,class:"shrink-0"});var _e=v(W,2);{var Te=Ce=>{var Ne=Jv();mt(Ne,21,()=>i(C).models,ae=>ae[0],(ae,st)=>{var Re=Qv(),Qe=S(Re),nt=S(Qe);{var kt=ot=>{wa(ot,{size:11})};j(nt,ot=>{i(st)[0]===i(C).model&&ot(kt)})}var Lt=v(Qe,2),Kt=ie(Lt,!0);J(()=>Z(Kt,i(st)[1])),L("click",Re,()=>P(i(st)[0])),y(ae,Re)}),y(Ce,Ne)};j(_e,Ce=>{i($)==="model"&&Ce(Te)})}J(()=>Z(G,i(te))),L("click",W,()=>h($,i($)==="model"?"":"model",!0)),y(x,R)};j(Pt,x=>{i(C).models.length&&x(St)})}var vt=v(Pt,2);{var Fn=x=>{var R=ng(),W=S(R),Q=S(W),G=v(Q);Tr(G,{size:11});var de=v(W,2);{var _e=Te=>{var Ce=tg();mt(Ce,20,()=>i(C).efforts,Ne=>Ne,(Ne,ae)=>{var st=cc(),Re=S(st),Qe=S(Re);{var nt=Lt=>{wa(Lt,{size:11})};j(Qe,Lt=>{ae===i(C).effort&&Lt(nt)})}var kt=v(Re);J(()=>Z(kt,` ${ae??""}`)),L("click",st,()=>D(ae)),y(Ne,st)}),y(Te,Ce)};j(de,Te=>{i($)==="effort"&&Te(_e)})}J(()=>Z(Q,`${(i(C).effort||"effort")??""} `)),L("click",W,()=>h($,i($)==="effort"?"":"effort",!0)),y(x,R)};j(vt,x=>{i(C).efforts.length&&x(Fn)})}var yt=v(vt,2);{var Ze=x=>{fr(x,{size:11,class:"animate-spin text-mk-muted"})};j(yt,x=>{i(O)&&x(Ze)})}var E=v(yt,2),B=v(S(E),2),V=S(B);{var Ae=x=>{up(x,{size:11})},ze=x=>{Hd(x,{size:13})};j(V,x=>{i(b)?x(Ae):x(ze,-1)})}J(x=>{Z(Ct,`${i(C).agent==="claude"?"Claude":"Codex"} `),B.disabled=x},[()=>i(b)||!i(a).trim()]),Bt("dragover",gn,Le),Bt("dragleave",gn,()=>h(xe,!1)),Bt("drop",gn,en),Bt("scroll",Mt,K),L("keydown",Ue,hr),L("input",Ue,Rr),dt(Ue,()=>i(a),x=>h(a,x)),L("click",it,()=>h($,i($)==="agent"?"":"agent",!0)),L("click",B,Vt),y(t,gn),hn()}Yn(["click","keydown","input"]);var og=I('<span class="hint svelte-e2eyom">searching…</span>'),ag=I('<li><button><span class="name svelte-e2eyom"> </span> <span class="path svelte-e2eyom"> </span> <!></button></li>'),ig=I('<ul class="results svelte-e2eyom"></ul>'),lg=I('<p class="empty svelte-e2eyom"> </p>'),cg=I('<div class="backdrop svelte-e2eyom" role="button" tabindex="-1"></div> <div class="dialog svelte-e2eyom" role="dialog" aria-label="Quick open"><div class="field svelte-e2eyom"><!> <input placeholder="Search files by name…" aria-label="Search files by name" class="svelte-e2eyom"/> <!></div> <!></div>',1);function ug(t,e){pn(e,!0);let n=z(""),r=z(Xe([])),s=z(0),o=z(!1),a=z(null),l=null;Qt(()=>{i(a)&&i(a).focus()}),Qt(()=>{const $=i(n).trim();if(l&&clearTimeout(l),!$){h(r,[],!0);return}l=setTimeout(async()=>{h(o,!0);try{const O=await Be.searchFiles(g.connectionId,g.path||".",$);h(r,O.matches||[],!0),h(s,0)}catch{h(r,[],!0)}finally{h(o,!1)}},180)});async function c($){var te;if(!$)return;const O=g.path&&g.path!=="."?`${g.path}/`:"";await g.openFile(`${O}${$.path}`),(te=e.onclose)==null||te.call(e)}function p($){var O;$.key==="Escape"?($.preventDefault(),(O=e.onclose)==null||O.call(e)):$.key==="ArrowDown"?($.preventDefault(),h(s,Math.min(i(s)+1,i(r).length-1),!0)):$.key==="ArrowUp"?($.preventDefault(),h(s,Math.max(i(s)-1,0),!0)):$.key==="Enter"&&($.preventDefault(),c(i(r)[i(s)]))}var u=cg(),_=q(u),d=v(_,2),T=S(d),b=S(T);nl(b,{size:14});var w=v(b,2);Ys(w,$=>h(a,$),()=>i(a));var A=v(w,2);{var N=$=>{var O=og();y($,O)};j(A,$=>{i(o)&&$(N)})}var U=v(T,2);{var H=$=>{var O=ig();mt(O,23,()=>i(r),te=>te.path,(te,ee,fe)=>{var pe=ag(),he=S(pe);let Ye;var qe=S(he),et=ie(qe,!0),K=v(qe,2),ve=ie(K,!0),oe=v(K,2);{var le=P=>{Vd(P,{size:12})};j(oe,P=>{i(fe)===i(s)&&P(le)})}J(()=>{Ye=fn(he,1,"svelte-e2eyom",null,Ye,{active:i(fe)===i(s)}),Z(et,i(ee).name),Z(ve,i(ee).path)}),L("click",he,()=>c(i(ee))),y(te,pe)}),y($,O)},X=$=>{var O=lg(),te=ie(O);J(ee=>Z(te,`No files match “${ee??""}”.`),[()=>i(n).trim()]),y($,O)},C=Ht(()=>i(n).trim()&&!i(o));j(U,$=>{i(r).length?$(H):i(C)&&$(X,1)})}L("click",_,()=>{var $;return($=e.onclose)==null?void 0:$.call(e)}),L("keydown",_,$=>{var O;return $.key==="Escape"&&((O=e.onclose)==null?void 0:O.call(e))}),L("keydown",w,p),dt(w,()=>i(n),$=>h(n,$)),y(t,u),hn()}Yn(["click","keydown"]);var fg=I('<div class="terminal-pane svelte-maclc7"><div class="bar svelte-maclc7"><span class="label svelte-maclc7">Terminal</span> <span> </span></div> <div class="screen svelte-maclc7"></div></div>');function dg(t,e){pn(e,!0);let n=xt(e,"rootPath",3,""),r=xt(e,"session",3,""),s=xt(e,"index",3,0),o,a=null,l=null,c=null,p=z("connecting"),u=null,_=0,d=null,T=!1;const b={background:ko.colors["editor.background"],foreground:ko.colors["editor.foreground"],cursor:ko.colors["editorCursor.foreground"],selectionBackground:ko.colors["editor.selectionBackground"],black:"#272822",red:"#f92672",green:"#a6e22e",yellow:"#e6db74",blue:"#66d9ef",magenta:"#ae81ff",cyan:"#a1efe4",white:"#f8f8f2",brightBlack:"#75715e",brightRed:"#f92672",brightGreen:"#a6e22e",brightYellow:"#e6db74",brightBlue:"#66d9ef",brightMagenta:"#ae81ff",brightCyan:"#a1efe4",brightWhite:"#f9f8f5"};function w(){if(!(!l||!a||(c==null?void 0:c.readyState)!==WebSocket.OPEN))try{l.fit(),c.send(JSON.stringify({type:"resize",cols:a.cols,rows:a.rows}))}catch{}}function A(){if(T)return;const O=`${location.protocol==="https:"?"wss":"ws"}://${location.host}${n()}/ws/sessions/${encodeURIComponent(r())}/ide/terminal/${encodeURIComponent(g.connectionId)}?index=${encodeURIComponent(s())}`;c=new WebSocket(O),c.binaryType="arraybuffer",c.onopen=()=>{h(p,"connected"),_=0,w()},c.onmessage=te=>{a.write(typeof te.data=="string"?te.data:new Uint8Array(te.data))},c.onclose=te=>{if(T)return;if(te.code===1008){h(p,"refused"),a==null||a.write(`\r
\x1B[31m— not authorised for this terminal —\x1B[0m\r
`);return}if(_>=6){h(p,"closed"),a==null||a.write(`\r
\x1B[33m— terminal unavailable; reopen the panel to retry —\x1B[0m\r
`);return}h(p,"reconnecting");const ee=Math.min(1e3*2**_,1e4);_+=1,d=setTimeout(A,ee)},c.onerror=()=>{T||h(p,"error")}}no(async()=>{const[{Terminal:$},{FitAddon:O}]=await Promise.all([Ta(()=>import("./ide-xterm.js"),[],import.meta.url),Ta(()=>import("./ide-addon-fit.js"),[],import.meta.url)]);await Ta(()=>Promise.resolve({}),__vite__mapDeps([2]),import.meta.url),a=new $({theme:b,fontSize:12,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",cursorBlink:!0,scrollback:5e3}),l=new O,a.loadAddon(l),a.open(o),l.fit(),A(),a.onData(te=>{(c==null?void 0:c.readyState)===WebSocket.OPEN&&c.send(new TextEncoder().encode(te))}),u=new ResizeObserver(()=>w()),u.observe(o)}),el(()=>{T=!0,d&&clearTimeout(d),u==null||u.disconnect(),c==null||c.close(),a==null||a.dispose()});var N=fg(),U=S(N),H=v(S(U),2),X=ie(H,!0),C=v(U,2);Ys(C,$=>o=$,()=>o),J(()=>{fn(H,1,`status ${i(p)??""}`,"svelte-maclc7"),Z(X,i(p))}),y(t,N),hn()}var pg=I('<div class="border-b border-vs-line bg-vs-red/10 px-4 py-2 text-xs text-vs-red"> </div>'),hg=I('<div class="flex items-center gap-2 px-4 py-3 text-xs text-vs-muted"><!> Loading…</div>'),vg=I('<button class="flex w-full items-center gap-2 px-4 py-1 text-left text-[13px] text-vs-fg hover:bg-vs-hover"><!> <span class="truncate"> </span></button>'),gg=I('<div class="px-4 py-3 text-xs text-vs-muted">No sub-folders here. You can still open this folder.</div>'),mg=I('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="flex h-[70vh] w-[min(640px,92vw)] flex-col overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright">Open Folder <span class="ml-1 font-normal text-vs-muted"><!></span></div> <form class="flex gap-2 border-b border-vs-line px-3 py-2"><button type="button" class="flex items-center gap-1 rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover disabled:opacity-40" title="Up one folder"><!> Up</button> <input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-xs text-vs-fg outline-none focus:border-vs-accent" spellcheck="false" aria-label="Folder path"/> <button type="submit" class="rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover">Go</button></form> <!> <div class="min-h-0 flex-1 overflow-y-auto py-1"><!></div> <div class="flex items-center gap-2 border-t border-vs-line px-4 py-3"><span class="flex min-w-0 flex-1 items-center gap-2 text-xs text-vs-muted"><!> <span class="truncate font-mono"> </span></span> <button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40">Open Folder</button></div></div></div>');function _g(t,e){pn(e,!0);let n=z(""),r=z(""),s=z(Xe([])),o=z(""),a=z(!0),l=z("");async function c(oe){h(a,!0),h(o,"");try{const le=g.connectionId?await Be.browseOn(g.connectionId,oe):await Be.browse(oe);h(n,le.path,!0),h(r,le.parent,!0),h(s,le.entries||[],!0),h(l,le.path,!0)}catch(le){h(o,le.message||"Could not open that folder",!0)}finally{h(a,!1)}}no(()=>c(""));function p(oe){oe.preventDefault(),i(l).trim()&&c(i(l).trim())}var u=mg(),_=S(u),d=S(_),T=v(S(d)),b=S(T);{var w=oe=>{var le=yl();J(()=>Z(le,`on ${g.connection.username??""}@${g.connection.host??""}`)),y(oe,le)},A=oe=>{var le=yl("on this server");y(oe,le)};j(b,oe=>{g.connection&&g.connection.kind!=="local"?oe(w):oe(A,-1)})}var N=v(d,2),U=S(N),H=S(U);qd(H,{size:14});var X=v(U,2),C=v(N,2);{var $=oe=>{var le=pg(),P=ie(le,!0);J(()=>Z(P,i(o))),y(oe,le)};j(C,oe=>{i(o)&&oe($)})}var O=v(C,2),te=S(O);{var ee=oe=>{var le=hg(),P=S(le);fr(P,{size:13,class:"animate-spin"}),y(oe,le)},fe=oe=>{var le=ue(),P=q(le);mt(P,17,()=>i(s),D=>D.path,(D,ne)=>{var xe=vg(),we=S(xe);Jd(we,{size:14,class:"shrink-0 text-vs-blue"});var Le=v(we,2),en=ie(Le,!0);J(()=>Z(en,i(ne).name)),L("dblclick",xe,()=>c(i(ne).path)),L("click",xe,()=>c(i(ne).path)),y(D,xe)},D=>{var ne=gg();y(D,ne)}),y(oe,le)};j(te,oe=>{i(a)?oe(ee):oe(fe,-1)})}var pe=v(O,2),he=S(pe),Ye=S(he);ep(Ye,{size:13,class:"shrink-0"});var qe=v(Ye,2),et=ie(qe,!0),K=v(he,2),ve=v(K,2);J(()=>{U.disabled=!i(r),Ie(qe,"title",i(n)),Z(et,i(n)),ve.disabled=!i(n)||i(a)}),L("click",u,oe=>oe.target===oe.currentTarget&&e.onclose()),L("keydown",u,oe=>oe.key==="Escape"&&e.onclose()),Bt("submit",N,p),L("click",U,()=>i(r)&&c(i(r))),dt(X,()=>i(l),oe=>h(l,oe)),L("click",K,function(...oe){var le;(le=e.onclose)==null||le.apply(this,oe)}),L("click",ve,()=>e.onopen(i(n))),y(t,u),hn()}Yn(["click","keydown","dblclick"]);var bg=I('<p class="px-4 py-2 text-xs text-vs-muted">Open a folder to search it.</p>'),xg=I('<button class="flex w-full items-center gap-2 px-3 py-1 text-left text-[13px] hover:bg-vs-hover"><!> <span class="truncate text-vs-fg"> </span> <span class="ml-auto max-w-[45%] truncate text-[11px] text-vs-muted"> </span></button>'),yg=I('<p class="px-4 py-2 text-xs text-vs-muted"> </p>'),kg=I('<p class="px-4 py-2 text-xs text-vs-muted">Type to search filenames in this workspace.</p>'),wg=I('<div class="flex h-full min-h-0 flex-col"><div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Search</div> <div class="px-3 pb-2"><div class="flex items-center gap-1.5 rounded-sm border border-vs-line bg-vs-input px-2 focus-within:border-vs-accent"><!> <input class="min-w-0 flex-1 bg-transparent py-1 text-xs text-vs-fg outline-none placeholder:text-vs-muted" placeholder="Search filenames" spellcheck="false"/> <!></div></div> <div class="min-h-0 flex-1 overflow-y-auto"><!></div></div>');function Sg(t,e){pn(e,!0);let n=z(""),r=z(Xe([])),s=z(!1),o=z(!1),a=null;Qt(()=>{const H=i(n).trim();if(a&&clearTimeout(a),!H||!g.connectionId){h(r,[],!0),h(o,!1);return}a=setTimeout(async()=>{h(s,!0);try{const X=await Be.searchFiles(g.connectionId,g.path||".",H);h(r,X.matches||[],!0)}catch(X){h(r,[],!0),g.setStatus(X.message||"Search failed")}finally{h(s,!1),h(o,!0)}},200)});const l=H=>{const X=(H||"").split("/");return X.pop(),X.join("/")};var c=wg(),p=v(S(c),2),u=S(p),_=S(u);nl(_,{size:12,class:"shrink-0 text-vs-muted"});var d=v(_,2),T=v(d,2);{var b=H=>{fr(H,{size:12,class:"shrink-0 animate-spin text-vs-muted"})};j(T,H=>{i(s)&&H(b)})}var w=v(p,2),A=S(w);{var N=H=>{var X=bg();y(H,X)},U=H=>{var X=ue(),C=q(X);mt(C,17,()=>i(r),$=>$.path,($,O)=>{var te=xg(),ee=S(te);tl(ee,{size:13,class:"shrink-0 text-vs-blue"});var fe=v(ee,2),pe=ie(fe,!0),he=v(fe,2),Ye=ie(he,!0);J((qe,et)=>{Ie(te,"title",i(O).path),Z(pe,qe),Z(Ye,et)},[()=>i(O).name||i(O).path.split("/").pop(),()=>l(i(O).path)]),L("click",te,()=>g.openFile(i(O).path)),y($,te)},$=>{var O=ue(),te=q(O);{var ee=he=>{var Ye=yg(),qe=ie(Ye);J(()=>Z(qe,`No files match “${i(n)??""}”.`)),y(he,Ye)},fe=he=>{var Ye=kg();y(he,Ye)},pe=Ht(()=>!i(n).trim());j(te,he=>{i(o)&&!i(s)?he(ee):i(pe)&&he(fe,1)})}y($,O)}),y(H,X)};j(A,H=>{g.connectionId?H(U,-1):H(N)})}dt(d,()=>i(n),H=>h(n,H)),y(t,c),hn()}Yn(["click"]);var Tg=I('<p class="flex items-center gap-2 text-vs-muted"><!> Fetching host key…</p>'),$g=I('<p class="text-vs-red"> </p>'),Eg=I("<p>This host is already trusted. Try connecting again.</p>"),Ag=I('<div class="flex items-baseline gap-2 font-mono text-[11px]"><span class="w-16 shrink-0 text-vs-muted"> </span> <span class="break-all text-vs-fg"> </span></div>'),Cg=I(`<p>The authenticity of <span class="font-mono text-vs-blue"> </span> can't be established. Verify these fingerprints match the server before you continue —
          if they don't, someone may be intercepting the connection.</p> <div class="mt-3 flex flex-col gap-1 rounded-sm border border-vs-line bg-vs-input p-2"></div> <p class="mt-3 text-xs text-vs-muted">Accepting adds the key to <span class="font-mono">~/.ssh/known_hosts</span> on this server.</p>`,1),Rg=I('<button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"> </button>'),Pg=I('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="w-[min(560px,92vw)] overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="flex items-center gap-2 border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright"><!> Unknown host</div> <div class="px-4 py-3 text-[13px] leading-relaxed text-vs-fg"><!></div> <div class="flex justify-end gap-2 border-t border-vs-line px-4 py-3"><button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <!></div></div></div>');function Ig(t,e){pn(e,!0);let n=z(!0),r=z(""),s=z(null),o=z(!1);no(async()=>{try{h(s,await Be.hostKey(g.connectionId),!0)}catch(C){h(r,C.message||"Could not fetch the host key",!0)}finally{h(n,!1)}});async function a(){h(o,!0);try{await Be.trustHost(g.connectionId),e.ontrusted()}catch(C){h(r,C.message||"Could not trust this host",!0),h(o,!1)}}var l=Pg(),c=S(l),p=S(c),u=S(p);cp(u,{size:15,class:"text-vs-yellow"});var _=v(p,2),d=S(_);{var T=C=>{var $=Tg(),O=S($);fr(O,{size:13,class:"animate-spin"}),y(C,$)},b=C=>{var $=$g(),O=ie($,!0);J(()=>Z(O,i(r))),y(C,$)},w=C=>{var $=Eg();y(C,$)},A=C=>{var $=Cg(),O=q($),te=v(S(O)),ee=ie(te),fe=v(O,2);mt(fe,21,()=>i(s).fingerprints,pe=>pe.fingerprint,(pe,he)=>{var Ye=Ag(),qe=S(Ye),et=ie(qe,!0),K=v(qe,2),ve=ie(K,!0);J(()=>{Z(et,i(he).type),Z(ve,i(he).fingerprint)}),y(pe,Ye)}),J(()=>Z(ee,`${i(s).host??""}:${i(s).port??""}`)),y(C,$)};j(d,C=>{var $;i(n)?C(T):i(r)?C(b,1):($=i(s))!=null&&$.known?C(w,2):C(A,-1)})}var N=v(_,2),U=S(N),H=v(U,2);{var X=C=>{var $=Rg(),O=ie($,!0);J(()=>{$.disabled=i(o),Z(O,i(o)?"Trusting…":"Trust and connect")}),L("click",$,a),y(C,$)};j(H,C=>{var $;!i(n)&&!(($=i(s))!=null&&$.known)&&!i(r)&&C(X)})}L("click",l,C=>C.target===C.currentTarget&&e.onclose()),L("keydown",l,C=>C.key==="Escape"&&e.onclose()),L("click",U,function(...C){var $;($=e.onclose)==null||$.apply(this,C)}),y(t,l),hn()}Yn(["click","keydown"]);var Ng=I('<div role="separator" tabindex="0" title="Drag to resize (double-click to reset)"><div></div></div>');function hi(t,e){pn(e,!0);let n=xt(e,"size",15),r=xt(e,"side",3,"right"),s=xt(e,"min",3,120),o=xt(e,"max",3,800),a=xt(e,"onreset",3,null),l=z(!1);const c=r()==="top";function p(b){var X;b.preventDefault(),h(l,!0);const w=c?b.clientY:b.clientX,A=n(),N=b.currentTarget;(X=N.setPointerCapture)==null||X.call(N,b.pointerId);function U(C){const O=(c?C.clientY:C.clientX)-w,te=r()==="left"||r()==="top"?-O:O;n(Math.round(Math.min(o(),Math.max(s(),A+te))))}function H(){var C;h(l,!1),(C=N.releasePointerCapture)==null||C.call(N,b.pointerId),window.removeEventListener("pointermove",U),window.removeEventListener("pointerup",H)}window.addEventListener("pointermove",U),window.addEventListener("pointerup",H)}function u(b){const w=b.shiftKey?40:10,A=c?"ArrowUp":r()==="left"?"ArrowLeft":"ArrowRight",N=c?"ArrowDown":r()==="left"?"ArrowRight":"ArrowLeft";if(b.key===A)n(Math.min(o(),n()+w));else if(b.key===N)n(Math.max(s(),n()-w));else return;b.preventDefault()}var _=Ng();let d;var T=ie(_);J(()=>{d=fn(_,1,`group relative shrink-0 ${c?"h-1 w-full cursor-row-resize":"w-1 cursor-col-resize"}`,null,d,{"bg-vs-accent":i(l)}),Ie(_,"aria-orientation",c?"horizontal":"vertical"),Ie(_,"aria-valuenow",n()),Ie(_,"aria-valuemin",s()),Ie(_,"aria-valuemax",o()),fn(T,1,`absolute ${c?"-top-1 -bottom-1 left-0 right-0":"-left-1 -right-1 top-0 bottom-0"}
           transition-colors group-hover:bg-vs-accent ${i(l)?"bg-vs-accent":""}`)}),L("pointerdown",_,p),L("dblclick",_,()=>{var b;return(b=a())==null?void 0:b()}),L("keydown",_,u),y(t,_),hn()}Yn(["pointerdown","dblclick","keydown"]);var Og=I('<span class="absolute top-0 bottom-0 left-0 w-0.5 bg-vs-bright"></span>'),zg=I('<span class="absolute right-1.5 bottom-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-vs-status px-1 text-[10px] leading-none font-semibold text-white"> </span>'),Mg=I("<button><!> <!> <!></button>"),uc=I("<option> </option>"),Lg=I('<button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Connection settings" aria-label="Connection settings"><!></button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover hover:text-vs-red" title="Remove workspace" aria-label="Remove workspace"><!></button>',1),Dg=I('<input class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" type="password" placeholder="Password (optional)" autocomplete="new-password"/>'),Fg=I(`<button class="w-full rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Show this host's key fingerprint and trust it">Verify host key…</button>`),Hg=I('<!> <button class="w-full rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"> </button> <!>',1),Bg=I('<p class="mt-1 font-mono text-[11px] break-all text-vs-muted"> </p>'),Ug=I('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="~/.ssh/id_ed25519"/> <textarea class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-[11px] outline-none focus:border-vs-accent" rows="4" placeholder="…or paste a private key (-----BEGIN OPENSSH PRIVATE KEY-----)" spellcheck="false"></textarea>',1),jg=I('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" type="password" placeholder="Password" autocomplete="new-password"/>'),Wg=I('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Host" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="User" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Port" type="number" min="1" max="65535"/> <select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>SSH agent</option><option>Existing key</option><option>Password (saved, encrypted)</option></select> <!> <!>',1),Vg=I('<form class="mt-2 flex flex-col gap-1.5 border-t border-vs-line px-3 pt-2"><select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>This server (local folder)</option><option>Remote host over SSH</option></select> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Label"/> <!> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"/> <div class="flex gap-1 pb-2"><button class="flex-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110" type="submit">Create</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" type="button">Cancel</button></div></form>'),qg=I('<div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Workspaces</div> <div class="flex flex-col gap-2 px-3 pt-1"><select class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" aria-label="Workspace"><option>— select workspace —</option><!></select> <div class="flex gap-1"><button class="flex flex-1 items-center justify-center gap-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"><!> Open Folder</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Add a workspace or SSH connection" aria-label="Add workspace"><!></button> <!></div> <!> <!></div> <!>',1),Gg=I('<aside class="flex shrink-0 flex-col overflow-hidden border-r border-vs-border bg-vs-panel"><!></aside> <!>',1),Kg=I('<div class="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center"><!> <div><h1 class="text-2xl font-light text-vs-fg">Multibuilder IDE</h1> <p class="mt-1 text-sm text-vs-muted">Edit files on this server or on a remote host over SSH.</p></div> <div class="flex flex-col gap-2 text-sm"><button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Open Folder… <kbd class="ml-2 rounded-sm border border-vs-line px-1.5 py-0.5 text-[10px] text-vs-muted">Ctrl+Shift+O</kbd></button> <button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Connect to a host over SSH…</button></div></div>'),Yg=I('<button class="rounded-sm p-0.5 opacity-0 group-hover:opacity-100 hover:bg-vs-line" title="Close terminal — ends the shell"><!></button>'),Zg=I('<span><button class="max-w-[140px] truncate"> </button> <!></span>'),Xg=I('<div class="absolute inset-0"><!></div>'),Qg=I('<!> <div class="flex shrink-0 flex-col border-t border-vs-border bg-vs-bg"><div class="flex items-center gap-1 border-b border-vs-border px-2 py-1 text-[11px]"><!> <div class="flex min-w-0 flex-1 items-center gap-0.5 overflow-x-auto"></div> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover disabled:opacity-40" title="New terminal in this workspace" aria-label="New terminal"><!></button> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover" title="Hide terminals (Ctrl+`) — sessions keep running" aria-label="Hide all terminals"><!></button> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover hover:text-vs-red" title="Close this terminal — ends the shell" aria-label="Close this terminal"><!></button></div> <div class="relative min-h-0 flex-1"><!></div></div>',1),Jg=I('<!> <div class="min-h-0 flex-1"><!></div> <!>',1),em=I(`<!> <aside class="flex shrink-0 flex-col overflow-hidden border-l border-vs-border bg-vs-panel"><div class="flex items-center gap-1.5 border-b border-vs-border px-3 py-1.5"><!> <span class="shrink-0 text-[11px] font-semibold tracking-wide uppercase">AI Agent</span> <select class="ml-auto min-w-0 flex-1 truncate rounded-sm border border-vs-line bg-vs-input px-1.5 py-0.5
                   text-[11px] text-vs-fg outline-none focus:border-vs-accent" title="Agent session — each has its own history"></select> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover disabled:opacity-40" title="New agent session" aria-label="New agent session"><!></button> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover" title="Hide AI Agent" aria-label="Hide AI Agent"><!></button></div> <div class="min-h-0 flex-1"><!></div></aside>`,1),tm=I('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20"><!> <!></button>'),nm=I('<span class="flex items-center gap-1"><!> </span>'),rm=I("<span> </span>"),sm=I('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle terminal (Ctrl+`)"><!> Terminal</button> <button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Focus the tmux window on the host"><!></button>',1),om=I('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle AI Agent panel"><!> Chat</button>'),am=I('<div class="flex gap-2"><input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs outline-none focus:border-vs-accent" placeholder="Host"/> <input class="w-20 rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs outline-none focus:border-vs-accent" type="number" min="1" max="65535" placeholder="Port"/></div> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs outline-none focus:border-vs-accent" placeholder="Username"/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs outline-none focus:border-vs-accent" placeholder="Identity file (optional)"/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs outline-none focus:border-vs-accent" type="password" autocomplete="new-password"/> <textarea rows="3" class="resize-y rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 font-mono text-[11px] outline-none focus:border-vs-accent"></textarea>',1),im=I('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" role="presentation"><div class="flex w-full max-w-[420px] flex-col gap-2 rounded-lg border border-vs-line bg-vs-panel p-4 shadow-2xl"><h3 class="text-sm font-semibold text-vs-fg"> </h3> <p class="mb-1 text-[11px] leading-relaxed text-vs-muted"> </p> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs outline-none focus:border-vs-accent" placeholder="Label"/> <!> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs outline-none focus:border-vs-accent" placeholder="Workspace folder"/> <div class="mt-1 flex justify-end gap-2"><button class="rounded-sm border border-vs-line px-3 py-1 text-xs hover:bg-vs-hover">Cancel</button> <button class="rounded-sm bg-vs-status px-3 py-1 text-xs text-white hover:brightness-110 disabled:opacity-40"> </button></div></div></div>'),lm=I('<div class="flex h-full flex-col overflow-hidden bg-vs-bg font-sans text-vs-fg"><header class="flex items-center gap-2 border-b border-vs-border bg-vs-titlebar px-3 py-1 text-xs"><!> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover" title="Open a folder on this server (Ctrl+Shift+O)">Open Folder…</button> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40" title="Open a file (Ctrl+P)">Open File…</button> <button><!> Terminal</button> <span class="mx-auto truncate text-vs-muted"> </span> <span><!> </span></header> <div class="flex min-h-0 flex-1"><nav class="flex w-12 shrink-0 flex-col items-center bg-vs-activity"><!> <div class="mt-auto flex flex-col items-center pb-1"><button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Account — signed in to the dashboard" aria-label="Account"><!></button> <button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Toggle side bar (Ctrl+B)" aria-label="Toggle side bar"><!></button></div></nav> <!> <section class="flex min-h-0 min-w-0 flex-1 flex-col"><!></section> <!></div> <footer class="flex shrink-0 items-center gap-3 bg-vs-status px-3 py-0.5 text-[12px] text-white"><!> <!> <span class="truncate"> </span> <span class="ml-auto flex items-center gap-3"><!> <span class="max-w-[40vw] truncate opacity-80"> </span> <!> <!></span></footer> <!> <!> <!> <!></div>');function cm(t,e){pn(e,!0);let n=xt(e,"sessions",19,()=>[]),r=xt(e,"session",3,""),s=xt(e,"rootPath",3,""),o=z(Xe([...n()])),a=z(Xe(r()||n()[0]||"")),l=z(!1),c=z(!1),p=z(!1),u=z(Xe({label:"",host:"",username:"",port:22,identity_file:"",password:"",private_key:"",workspace_root:""}));function _(){g.connection&&(h(w,"remote"),h(O,!0),i(c)||d())}function d(){const E=g.connection;E&&(h(u,{label:E.label||"",host:E.host||"",username:E.username||"",port:E.port||22,identity_file:E.identity_file||"",password:"",private_key:"",workspace_root:E.workspace_root||""},!0),h(c,!0))}async function T(){var E;if(!(!g.connection||i(p))){h(p,!0);try{const B={...i(u),port:Number(i(u).port)||22};B.password||delete B.password,B.private_key||delete B.private_key,await Be.updateConnection(g.connection.id,B),await((E=g.loadConnections)==null?void 0:E.call(g)),h(c,!1),g.setStatus("Connection settings saved")}catch(B){g.setStatus(B.message||"Could not save connection settings")}finally{h(p,!1)}}}async function b(){var E;if(!i(l)){h(l,!0);try{const B=(((E=g.connection)==null?void 0:E.label)||r()||"agent").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,20)||"agent";let V=B;for(let R=2;i(o).includes(V);R+=1)V=`${B}-${R}`;const Ae=await fetch(`${s()}/api/sessions/create`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:V,agent:"claude"})}),ze=await Ae.json().catch(()=>({}));if(!Ae.ok)throw new Error(ze.error||"Could not create session");const x=ze.session||ze.name||V;i(o).includes(x)||h(o,[...i(o),x],!0),h(a,x,!0),g.setStatus(`Agent session "${x}" created`)}catch(B){g.setStatus(B.message||"Could not create agent session")}finally{h(l,!1)}}}let w=z("files");function A(E,B){try{const V=localStorage.getItem(`ide.show.${E}`);return V===null?B:V==="1"}catch{return B}}let N=z(Xe(A("chat",!0)));const U={sidebar:240,chat:320,panel:240};function H(E){try{const B=localStorage.getItem(`ide.size.${E}`),V=Number(B);return Number.isFinite(V)&&V>0?V:U[E]}catch{return U[E]}}let X=z(Xe(H("sidebar"))),C=z(Xe(H("chat"))),$=z(Xe(H("panel")));Qt(()=>{try{localStorage.setItem("ide.size.sidebar",String(i(X))),localStorage.setItem("ide.size.chat",String(i(C))),localStorage.setItem("ide.size.panel",String(i($))),localStorage.setItem("ide.show.terminal",i(ee)?"1":"0"),localStorage.setItem("ide.show.chat",i(N)?"1":"0"),localStorage.setItem("ide.show.sidebar",i(O)?"1":"0")}catch{}});let O=z(Xe(A("sidebar",!0))),te=z(!1),ee=z(Xe(A("terminal",!1)));const fe=8;let pe=z(Xe([0])),he=z(0);function Ye(){if(i(pe).length>=fe)return;let E=0;for(;i(pe).includes(E);)E+=1;E>=fe||(h(pe,[...i(pe),E].sort((B,V)=>B-V),!0),h(he,E,!0))}async function qe(E){const B=i(pe).indexOf(E),V=i(pe).filter(Ae=>Ae!==E);h(pe,V.length?V:[0],!0),i(he)===E&&h(he,i(pe)[Math.min(B,i(pe).length-1)],!0);try{await Be.closeTerminal(g.connectionId,E)}catch(Ae){g.setStatus(Ae.message||"Could not close terminal")}}let et=z("");Qt(()=>{const E=g.connectionId,B=g.connectionState;if(!E||B!=="connected")return;const V=`${E}|${B}`;i(et)!==V&&(h(et,V),h(pe,[0],!0),h(he,0),Be.listTerminals(E).then(Ae=>{const ze=((Ae==null?void 0:Ae.terminals)||[]).filter(x=>Number.isInteger(x));ze.length&&(h(pe,ze,!0),ze.includes(i(he))||h(he,ze[0],!0))}).catch(()=>{}))});let K=z(!1);Qt(()=>{i(ee)&&h(K,!0)});let ve=z(!1),oe=z(!1),le=z(""),P=z(Xe({kind:"local",label:"",host:"",username:"",port:22,auth_mode:"agent",identity_file:"",password:"",private_key:"",workspace_root:"",max_file_bytes:1e6}));const D={idle:{icon:Wd,label:"Not connected"},connecting:{icon:Ud,label:"Connecting…"},connected:{icon:Bd,label:"Connected"},reconnect:{icon:Il,label:"Reconnect required"},error:{icon:Il,label:"Error"}},ne=Ht(()=>D[g.connectionState].icon),xe=Ht(()=>{var E;return((E=g.connection)==null?void 0:E.kind)==="local"}),we=[{id:"files",icon:Xd,label:"Explorer",keys:"Ctrl+Shift+E"},{id:"search",icon:nl,label:"Search",keys:"Ctrl+Shift+F"},{id:"git",icon:Ri,label:"Source Control",keys:"Ctrl+Shift+G"},{id:"remote",icon:op,label:"Remote Explorer",keys:""}];no(async()=>{await g.loadConnections(),g.connectionId&&await g.refreshStatus()});function Le(E){i(w)===E&&i(O)?h(O,!1):(h(w,E,!0),h(O,!0))}async function en(E){g.connectionId=E.currentTarget.value,g.resetWorkspaceView(),await g.refreshStatus()}async function vn(E){h(oe,!1);try{const B=E.split("/").filter(Boolean).pop()||E,V=g.connection;if(V&&V.kind!=="local"){await Be.setWorkspaceRoot(V.id,E,B),await g.loadConnections(),g.resetWorkspaceView(),await g.refreshFiles("."),g.setStatus(`Opened ${E} on ${V.username}@${V.host}`),h(w,"files"),h(O,!0);return}if(V&&V.kind==="local"){await Be.setWorkspaceRoot(V.id,E,B),await g.loadConnections(),g.resetWorkspaceView(),await g.refreshFiles("."),g.setStatus(`Opened ${E}`),h(w,"files"),h(O,!0);return}const Ae=await Be.createConnection({kind:"local",label:B,workspace_root:E,max_file_bytes:1e6});await g.loadConnections(),g.connectionId=Ae.connection.id,g.resetWorkspaceView(),await g.connect(""),h(w,"files"),h(O,!0)}catch(B){g.setStatus(B.message||"Could not open folder")}}async function Wt(E){E.preventDefault();try{const B=await Be.createConnection({...i(P),port:Number(i(P).port)});h(ve,!1),h(P,{...i(P),label:"",host:"",username:"",password:"",private_key:""},!0),await g.loadConnections(),g.connectionId=B.connection.id,await g.refreshStatus()}catch(B){g.setStatus(B.message||"Could not create connection")}}async function Vt(){const E=g.connection;if(!E)return;const B=E.kind==="local"?"workspace":"connection";if(confirm(`Remove ${B} "${E.label}"? Saved tabs are cleared; files are untouched.`))try{await Be.deleteConnection(E.id),g.connectionId="",g.resetWorkspaceView(),await g.loadConnections()}catch(V){g.setStatus(V.message||"Could not delete")}}async function hr(){try{const E=await Be.focusTerminal(g.connectionId);g.setStatus(`Focused ${E.window_name}`,"tmux window selected")}catch(E){g.setStatus(E.message||"Could not focus terminal")}}function Rr(E){var ze,x,R,W;const B=E.ctrlKey||E.metaKey,V=E.key.toLowerCase(),Ae=((x=(ze=E.target)==null?void 0:ze.matches)==null?void 0:x.call(ze,"input, textarea, select"))&&!((W=(R=E.target).closest)!=null&&W.call(R,".monaco-editor"));B&&V==="s"?(E.preventDefault(),g.saveActive()):B&&V==="p"&&!Ae?(E.preventDefault(),g.connectionId&&h(te,!0)):B&&E.shiftKey&&V==="o"?(E.preventDefault(),h(oe,!0)):B&&E.shiftKey&&["e","f","g"].includes(V)?(E.preventDefault(),h(w,{e:"files",f:"search",g:"git"}[V],!0),h(O,!0)):B&&V==="b"&&!Ae?(E.preventDefault(),h(O,!i(O))):B&&V==="`"?(E.preventDefault(),g.connectionState==="connected"&&h(ee,!i(ee))):E.key==="Escape"&&i(te)&&(E.preventDefault(),h(te,!1))}var Pr=lm();Bt("keydown",Ss,Rr);var Ir=S(Pr),vr=S(Ir);Nl(vr,{size:15,class:"shrink-0 text-vs-blue"});var me=v(vr,2),qt=v(me,2),Fe=v(qt,2);let Zn;var zt=S(Fe);Ll(zt,{size:13});var Sn=v(Fe,2),gr=ie(Sn,!0),tn=v(Sn,2),Nr=S(tn);Sl(Nr,()=>i(ne),(E,B)=>{B(E,{size:12})});var mr=v(Nr),Xn=v(Ir,2),gn=S(Xn),nn=S(gn);mt(nn,17,()=>we,E=>E.id,(E,B)=>{var V=Mg(),Ae=S(V);{var ze=Q=>{var G=Og();y(Q,G)};j(Ae,Q=>{i(w)===i(B).id&&i(O)&&Q(ze)})}var x=v(Ae,2);Sl(x,()=>i(B).icon,(Q,G)=>{G(Q,{size:24,strokeWidth:1.4})});var R=v(x,2);{var W=Q=>{var G=zg(),de=ie(G,!0);J(()=>Z(de,g.gitDirtyCount)),y(Q,G)};j(R,Q=>{i(B).id==="git"&&g.gitDirtyCount&&Q(W)})}J(()=>{fn(V,1,`relative flex h-12 w-12 items-center justify-center ${i(w)===i(B).id&&i(O)?"text-vs-bright":"text-vs-muted hover:text-vs-fg"}`),Ie(V,"title",i(B).keys?`${i(B).label} (${i(B).keys})`:i(B).label),Ie(V,"aria-label",i(B).label)}),L("click",V,()=>Le(i(B).id)),y(E,V)});var Tn=v(nn,2),Mt=S(Tn),_r=S(Mt);jd(_r,{size:24,strokeWidth:1.4});var Qn=v(Mt,2),zn=S(Qn);ip(zn,{size:24,strokeWidth:1.4});var Jn=v(gn,2);{var $n=E=>{var B=Gg(),V=q(B),Ae=S(V);{var ze=G=>{kp(G,{})},x=G=>{Sg(G,{})},R=G=>{Up(G,{})},W=G=>{var de=qg(),_e=v(q(de),2),Te=S(_e),Ce=S(Te);Ce.value=Ce.__value="";var Ne=v(Ce);mt(Ne,17,()=>g.connections,lt=>lt.id,(lt,ct)=>{var ut=uc(),_n=ie(ut),an={};J(()=>{Z(_n,`${i(ct).kind==="local"?"🖿 ":"⇅ "}${i(ct).label??""}`),an!==(an=i(ct).id)&&(ut.value=(ut.__value=an)??"")}),y(lt,ut)});var ae;yo(Te);var st=v(Te,2),Re=S(st),Qe=S(Re);ai(Qe,{size:13});var nt=v(Re,2),kt=S(nt);Ao(kt,{size:13});var Lt=v(nt,2);{var Kt=lt=>{var ct=Lg(),ut=q(ct),_n=S(ut);Ml(_n,{size:13});var an=v(ut,2),Dr=S(an);Dl(Dr,{size:13}),L("click",ut,d),L("click",an,Vt),y(lt,ct)};j(Lt,lt=>{g.connection&&lt(Kt)})}var ot=v(st,2);{var Ge=lt=>{var ct=Hg(),ut=q(ct);{var _n=ln=>{var Hn=Dg();dt(Hn,()=>i(le),os=>h(le,os)),y(ln,Hn)};j(ut,ln=>{!i(xe)&&!g.connection.has_password&&ln(_n)})}var an=v(ut,2),Dr=ie(an,!0),Es=v(an,2);{var so=ln=>{var Hn=Fg();L("click",Hn,()=>g.needsHostKey=!0),y(ln,Hn)};j(Es,ln=>{i(xe)||ln(so)})}J(()=>Z(Dr,i(xe)?"Open workspace":"Connect")),L("click",an,()=>g.connect(i(le))),y(lt,ct)};j(ot,lt=>{g.connection&&g.connectionState!=="connected"&&lt(Ge)})}var Dt=v(ot,2);{var tr=lt=>{var ct=Bg(),ut=ie(ct,!0);J(()=>Z(ut,g.connection.workspace_root)),y(lt,ct)};j(Dt,lt=>{g.connection&&lt(tr)})}var nr=v(_e,2);{var Lr=lt=>{var ct=Vg(),ut=S(ct),_n=S(ut);_n.value=_n.__value="local";var an=v(_n);an.value=an.__value="ssh",yo(ut);var Dr=v(ut,2),Es=v(Dr,2);{var so=F=>{var f=Wg(),k=q(f),M=v(k,2),Y=v(M,2),se=v(Y,2),be=S(se);be.value=be.__value="agent";var Je=v(be);Je.value=Je.__value="key";var ft=v(Je);ft.value=ft.__value="password",yo(se);var Yt=v(se,2);{var rn=Ft=>{var As=Ug(),da=q(As),Hu=v(da,2);dt(da,()=>i(P).identity_file,Ga=>i(P).identity_file=Ga),dt(Hu,()=>i(P).private_key,Ga=>i(P).private_key=Ga),y(Ft,As)};j(Yt,Ft=>{i(P).auth_mode==="key"&&Ft(rn)})}var oo=v(Yt,2);{var Zt=Ft=>{var As=jg();dt(As,()=>i(P).password,da=>i(P).password=da),y(Ft,As)};j(oo,Ft=>{i(P).auth_mode==="password"&&Ft(Zt)})}dt(k,()=>i(P).host,Ft=>i(P).host=Ft),dt(M,()=>i(P).username,Ft=>i(P).username=Ft),dt(Y,()=>i(P).port,Ft=>i(P).port=Ft),ni(se,()=>i(P).auth_mode,Ft=>i(P).auth_mode=Ft),y(F,f)};j(Es,F=>{i(P).kind==="ssh"&&F(so)})}var ln=v(Es,2),Hn=v(ln,2),os=v(S(Hn),2);J(()=>{Ie(ln,"placeholder",i(P).kind==="local"?"/var/www/app":"Workspace root"),ln.required=i(P).kind==="local"}),Bt("submit",ct,Wt),ni(ut,()=>i(P).kind,F=>i(P).kind=F),dt(Dr,()=>i(P).label,F=>i(P).label=F),dt(ln,()=>i(P).workspace_root,F=>i(P).workspace_root=F),L("click",os,()=>h(ve,!1)),y(lt,ct)};j(nr,lt=>{i(ve)&&lt(Lr)})}J(()=>{ae!==(ae=g.connectionId)&&(Te.value=(Te.__value=ae)??"",Ro(Te,ae))}),L("change",Te,en),L("click",Re,()=>h(oe,!0)),L("click",nt,()=>h(ve,!i(ve))),y(G,de)};j(Ae,G=>{i(w)==="files"?G(ze):i(w)==="search"?G(x,1):i(w)==="git"?G(R,2):G(W,-1)})}var Q=v(V,2);hi(Q,{side:"right",min:170,max:620,onreset:()=>h(X,U.sidebar,!0),get size(){return i(X)},set size(G){h(X,G,!0)}}),J(()=>ys(V,`width: ${i(X)??""}px`)),y(E,B)};j(Jn,E=>{i(O)&&E($n)})}var En=v(Jn,2),er=S(En);{var Gr=E=>{var B=Kg(),V=S(B);Nl(V,{size:64,strokeWidth:1,class:"text-vs-line"});var Ae=v(V,4),ze=S(Ae),x=S(ze);ai(x,{size:16});var R=v(ze,2),W=S(R);zl(W,{size:16}),L("click",ze,()=>h(oe,!0)),L("click",R,()=>{h(w,"remote"),h(O,!0),h(ve,!0)}),y(E,B)},Kr=E=>{var B=Jg(),V=q(B);Jp(V,{});var Ae=v(V,2),ze=S(Ae);Kp(ze,{});var x=v(Ae,2);{var R=W=>{var Q=Qg(),G=q(Q);{var de=ot=>{hi(ot,{side:"top",min:120,max:640,onreset:()=>h($,U.panel,!0),get size(){return i($)},set size(Ge){h($,Ge,!0)}})};j(G,ot=>{i(ee)&&ot(de)})}var _e=v(G,2),Te=S(_e),Ce=S(Te);Ll(Ce,{size:13,class:"mx-1 shrink-0"});var Ne=v(Ce,2);mt(Ne,20,()=>i(pe),ot=>ot,(ot,Ge)=>{var Dt=Zg(),tr=S(Dt),nr=ie(tr,!0),Lr=v(tr,2);{var lt=ct=>{var ut=Yg(),_n=S(ut);Na(_n,{size:11}),J(()=>Ie(ut,"aria-label",`Close terminal ${Ge+1}`)),L("click",ut,()=>qe(Ge)),y(ct,ut)};j(Lr,ct=>{i(pe).length>1&&ct(lt)})}J(()=>{var ct;fn(Dt,1,`group flex shrink-0 items-center gap-1 rounded-sm px-2 py-0.5
                           ${Ge===i(he)?"bg-vs-hover text-vs-fg":"text-vs-muted hover:text-vs-fg"}`),Z(nr,Ge===0?((ct=g.connection)==null?void 0:ct.label)||"Terminal":`Terminal ${Ge+1}`)}),L("click",tr,()=>h(he,Ge,!0)),y(ot,Dt)});var ae=v(Ne,2),st=S(ae);Ao(st,{size:14});var Re=v(ae,2),Qe=S(Re);Tr(Qe,{size:15});var nt=v(Re,2),kt=S(nt);Dl(kt,{size:13});var Lt=v(Te,2),Kt=S(Lt);gd(Kt,()=>g.connectionId,ot=>{var Ge=ue(),Dt=q(Ge);mt(Dt,16,()=>i(pe),tr=>tr,(tr,nr)=>{var Lr=Xg(),lt=S(Lr);dg(lt,{get rootPath(){return s()},get session(){return r()},get index(){return nr}}),J(()=>Ie(Lr,"hidden",nr!==i(he))),y(tr,Lr)}),y(ot,Ge)}),J(()=>{ys(_e,`height: ${i($)??""}px`),Ie(_e,"hidden",!i(ee)),ae.disabled=i(pe).length>=fe}),L("click",ae,Ye),L("click",Re,()=>h(ee,!1)),L("click",nt,()=>qe(i(he))),y(W,Q)};j(x,W=>{i(K)&&g.connectionState==="connected"&&W(R)})}y(E,B)};j(er,E=>{g.connectionId?E(Kr,-1):E(Gr)})}var Or=v(En,2);{var zr=E=>{var B=em(),V=q(B);hi(V,{side:"left",min:260,max:760,onreset:()=>h(C,U.chat,!0),get size(){return i(C)},set size(ae){h(C,ae,!0)}});var Ae=v(V,2),ze=S(Ae),x=S(ze);Ol(x,{size:13,class:"shrink-0"});var R=v(x,4);mt(R,20,()=>i(o),ae=>ae,(ae,st)=>{var Re=uc(),Qe=ie(Re,!0),nt={};J(()=>{Z(Qe,st),nt!==(nt=st)&&(Re.value=(Re.__value=nt)??"")}),y(ae,Re)}),yo(R);var W=v(R,2),Q=S(W);{var G=ae=>{fr(ae,{size:13,class:"animate-spin"})},de=ae=>{Ao(ae,{size:14})};j(Q,ae=>{i(l)?ae(G):ae(de,-1)})}var _e=v(W,2),Te=S(_e);Na(Te,{size:14});var Ce=v(ze,2),Ne=S(Ce);sg(Ne,{get sessions(){return i(o)},get session(){return r()},get rootPath(){return s()},get target(){return i(a)},set target(ae){h(a,ae,!0)}}),J(()=>{ys(Ae,`width: ${i(C)??""}px`),W.disabled=i(l)}),ni(R,()=>i(a),ae=>h(a,ae)),L("click",W,b),L("click",_e,()=>h(N,!1)),y(E,B)};j(Or,E=>{i(N)&&E(zr)})}var Mn=v(Xn,2),mn=S(Mn);{var Ln=E=>{var B=tm(),V=S(B);{var Ae=W=>{ai(W,{size:12})},ze=W=>{zl(W,{size:12})};j(V,W=>{i(xe)?W(Ae):W(ze,-1)})}var x=v(V),R=v(x);Ml(R,{size:11,class:"opacity-70"}),J(()=>{Ie(B,"title",`${g.connection.workspace_root??""} — click for connection settings`),Z(x,` ${g.connection.label??""} `)}),L("click",B,_),y(E,B)};j(mn,E=>{g.connection&&E(Ln)})}var Mr=v(mn,2);{var ce=E=>{var B=nm(),V=S(B);Ri(V,{size:12});var Ae=v(V);J(()=>Z(Ae,` ${g.gitBranch??""}`)),y(E,B)};j(Mr,E=>{g.gitBranch&&E(ce)})}var tt=v(Mr,2),We=ie(tt,!0),ye=v(tt,2),Ve=S(ye);{var wt=E=>{var B=rm(),V=ie(B);J(()=>Z(V,`${g.dirtyCount??""} unsaved`)),y(E,B)};j(Ve,E=>{g.dirtyCount&&E(wt)})}var Ue=v(Ve,2),At=ie(Ue,!0),Gt=v(Ue,2);{var it=E=>{var B=sm(),V=q(B),Ae=S(V);ap(Ae,{size:12});var ze=v(V,2),x=S(ze);Kd(x,{size:12}),L("click",V,()=>h(ee,!i(ee))),L("click",ze,hr),y(E,B)};j(Gt,E=>{g.connectionState==="connected"&&E(it)})}var Ct=v(Gt,2);{var gt=E=>{var B=om(),V=S(B);Ol(V,{size:12}),L("click",B,()=>h(N,!i(N))),y(E,B)};j(Ct,E=>{E(gt)})}var Rt=v(Mn,2);{var Dn=E=>{ug(E,{onclose:()=>h(te,!1)})};j(Rt,E=>{i(te)&&E(Dn)})}var Pt=v(Rt,2);{var St=E=>{_g(E,{onopen:vn,onclose:()=>h(oe,!1)})};j(Pt,E=>{i(oe)&&E(St)})}var vt=v(Pt,2);{var Fn=E=>{var B=im(),V=S(B),Ae=S(V),ze=ie(Ae,!0),x=v(Ae,2),R=ie(x,!0),W=v(x,2),Q=v(W,2);{var G=ae=>{var st=am(),Re=q(st),Qe=S(Re),nt=v(Qe,2),kt=v(Re,2),Lt=v(kt,2),Kt=v(Lt,2),ot=v(Kt,2);J(()=>{Ie(Kt,"placeholder",g.connection.has_password?"Password stored — type to replace":"Password (optional)"),Ie(ot,"placeholder",g.connection.has_private_key?"Private key stored — paste a new one to replace":"Paste a private key (optional)")}),dt(Qe,()=>i(u).host,Ge=>i(u).host=Ge),dt(nt,()=>i(u).port,Ge=>i(u).port=Ge),dt(kt,()=>i(u).username,Ge=>i(u).username=Ge),dt(Lt,()=>i(u).identity_file,Ge=>i(u).identity_file=Ge),dt(Kt,()=>i(u).password,Ge=>i(u).password=Ge),dt(ot,()=>i(u).private_key,Ge=>i(u).private_key=Ge),y(ae,st)};j(Q,ae=>{i(xe)||ae(G)})}var de=v(Q,2),_e=v(de,2),Te=S(_e),Ce=v(Te,2),Ne=ie(Ce,!0);J(()=>{Z(ze,i(xe)?"Folder settings":"SSH connection settings"),Z(R,i(xe)?"Where this workspace opens.":"Secrets are never shown — leave a field blank to keep what is stored."),Ce.disabled=i(p),Z(Ne,i(p)?"Saving…":"Save")}),L("click",B,ae=>{ae.target===ae.currentTarget&&h(c,!1)}),L("keydown",B,ae=>{ae.key==="Escape"&&h(c,!1)}),dt(W,()=>i(u).label,ae=>i(u).label=ae),dt(de,()=>i(u).workspace_root,ae=>i(u).workspace_root=ae),L("click",Te,()=>h(c,!1)),L("click",Ce,T),y(E,B)};j(vt,E=>{i(c)&&g.connection&&E(Fn)})}var yt=v(vt,2);{var Ze=E=>{Ig(E,{onclose:()=>g.needsHostKey=!1,ontrusted:async()=>{g.needsHostKey=!1,await g.connect(i(le))}})};j(yt,E=>{g.needsHostKey&&E(Ze)})}J(()=>{var E;qt.disabled=!g.connectionId,Zn=fn(Fe,1,"flex items-center gap-1 rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40",null,Zn,{"text-vs-bright":i(ee)}),Fe.disabled=g.connectionState!=="connected",Ie(Fe,"title",g.connectionState==="connected"?"Toggle terminal (Ctrl+`)":"Open a workspace to use the terminal"),Ie(Sn,"title",(E=g.connection)==null?void 0:E.workspace_root),Z(gr,g.connection?`${g.connection.label} — Multibuilder IDE`:"Multibuilder IDE"),fn(tn,1,`flex items-center gap-1 ${g.connectionState==="connected"?"text-vs-green":g.connectionState==="connecting"?"text-vs-yellow":g.connectionState==="idle"?"text-vs-muted":"text-vs-red"}`),Z(mr,` ${D[g.connectionState].label??""}`),Z(We,g.statusText),Z(At,g.detailText)}),L("click",me,()=>h(oe,!0)),L("click",qt,()=>h(te,!0)),L("click",Fe,()=>h(ee,!i(ee))),L("click",Mt,()=>g.setStatus("Signed in to the Multibuilder dashboard")),L("click",Qn,()=>h(O,!i(O))),y(t,Pr),hn()}Yn(["click","change","keydown"]);function Fu(t,e){return dd(cm,{target:t,props:e})}function fc(){const t=document.getElementById("ide-root");if(!t||t.dataset.mounted)return;t.dataset.mounted="1";const e=window.__IDE_BOOTSTRAP__||{};Fu(t,{sessions:e.sessions||[],session:e.session||"",rootPath:e.rootPath||""})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",fc):fc();window.mountRemoteIde=Fu;export{Ta as _};
