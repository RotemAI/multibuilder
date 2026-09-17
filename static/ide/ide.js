const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ide-monaco.js","./ide2.css","./ide3.css"])))=>i.map(i=>d[i]);
var Wu=Object.defineProperty;var vl=t=>{throw TypeError(t)};var Vu=(t,e,n)=>e in t?Wu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ie=(t,e,n)=>Vu(t,typeof e!="symbol"?e+"":e,n),Za=(t,e,n)=>e.has(t)||vl("Cannot "+n);var m=(t,e,n)=>(Za(t,e,"read from private field"),n?n.call(t):e.get(t)),ae=(t,e,n)=>e.has(t)?vl("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Re=(t,e,n,r)=>(Za(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),He=(t,e,n)=>(Za(t,e,"access private method"),n);var Ua=Array.isArray,qu=Array.prototype.indexOf,Ca=Array.prototype.includes,ja=Array.from,_c=Object.defineProperty,rs=Object.getOwnPropertyDescriptor,bc=Object.getOwnPropertyDescriptors,Gu=Object.prototype,Ku=Array.prototype,Bi=Object.getPrototypeOf,gl=Object.isExtensible;function ao(t){return typeof t=="function"}const Yu=()=>{};function Zu(t){return t()}function _i(t){for(var e=0;e<t.length;e++)t[e]()}function xc(){var t,e,n=new Promise((r,s)=>{t=r,e=s});return{promise:n,resolve:t,reject:e}}function Xu(t,e){if(Array.isArray(t))return t;if(!(Symbol.iterator in t))return Array.from(t);const n=[];for(const r of t)if(n.push(r),n.length===e)break;return n}const Bt=2,Vs=4,la=8,Ui=1<<24,dr=16,Xn=32,jr=64,bi=128,ji=256,Zn=512,It=1024,Nt=2048,gr=4096,hn=8192,Sn=16384,Xs=32768,Ra=1<<25,os=65536,Pa=1<<17,Qu=1<<18,Qs=1<<19,yc=1<<20,Er=1<<25,Ss=65536,Ia=1<<21,zs=1<<22,ss=1<<23,Rr=Symbol("$state"),kc=Symbol("component"),wc=Symbol("legacy props"),Ju=Symbol(""),ya=Symbol("attributes"),xi=Symbol("class"),yi=Symbol("style"),vo=Symbol("text"),ka=Symbol("form reset"),ca=new class extends Error{constructor(){super(...arguments);Ie(this,"name","StaleReactionError");Ie(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var vc;const Wi=!!((vc=globalThis.document)!=null&&vc.contentType)&&globalThis.document.contentType.includes("xml"),ef=1,tf=2,Sc=4,nf=8,rf=16,sf=1,of=2,Tc=4,af=8,lf=16,cf=1,uf=2,Et=Symbol("uninitialized"),$c="http://www.w3.org/1999/xhtml",Ec="http://www.w3.org/2000/svg",ff="http://www.w3.org/1998/Math/MathML",df="@attach";function pf(){console.warn("https://svelte.dev/e/derived_inert")}function hf(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function vf(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Ac(t){return t===this.v}function gf(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function Cc(t){return!gf(t,this.v)}function Rc(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function mf(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function _f(t,e,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function bf(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function xf(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function yf(t){throw new Error("https://svelte.dev/e/effect_orphan")}function kf(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function wf(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Sf(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Tf(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function $f(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Ef(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Js=!1;function Af(){Js=!0}let pt=null;function qs(t){pt=t}function vn(t,e=!1,n){pt={p:pt,i:!1,c:null,e:null,s:t,x:null,r:Ne,l:Js&&!e?{s:null,u:null,$:[]}:null}}function gn(t){var e=pt,n=e.e;if(n!==null){e.e=null;for(var r of n)Jc(r)}return e.i=!0,pt=e.p,Vi(t)}function Vi(t={}){return _c(t,kc,{value:!0}),t}function eo(){return!Js||pt!==null&&pt.l===null}let ps=[];function Pc(){var t=ps;ps=[],_i(t)}function Ar(t){if(ps.length===0&&!$o){var e=ps;queueMicrotask(()=>{e===ps&&Pc()})}ps.push(t)}function Cf(){for(;ps.length>0;)Pc()}const Rf=-7169;function yt(t,e){t.f=t.f&Rf|e}function qi(t){(t.f&Zn)!==0||t.deps===null?yt(t,It):yt(t,gr)}function Ic(t){if(t!==null)for(const e of t)(e.f&Bt)===0||(e.f&Ss)===0||(e.f^=Ss,Ic(e.deps))}function Nc(t,e,n){(t.f&Nt)!==0?e.add(t):(t.f&gr)!==0&&n.add(t),Ic(t.deps),yt(t,It)}let ga=!1;function Pf(t){var e=ga;try{return ga=!1,[t(),ga]}finally{ga=e}}function Oc(t,e){if(e){const n=document.body;t.autofocus=!0,Ar(()=>{document.activeElement===n&&t.focus()})}}let ml=!1;function If(){ml||(ml=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const n of t.target.elements)(e=n[ka])==null||e.call(n)})},{capture:!0}))}function to(t){var e=Le,n=Ne;Qn(null),Jn(null);try{return t()}finally{Qn(e),Jn(n)}}function zc(t,e,n,r=n){t.addEventListener(e,()=>to(n));const s=t[ka];s?t[ka]=()=>{s(),r(!0)}:t[ka]=()=>r(!0),If()}function Mc(t,e,n,r){const s=eo()?Gs:Gi;var o=t.filter(T=>!T.settled),a=e.map(s);if(n.length===0&&o.length===0){r(a);return}var l=Ne,c=Nf(),p=o.length===1?o[0].promise:o.length>1?Promise.all(o.map(T=>T.promise)):null;function u(T){if((l.f&Sn)===0){c();try{r([...a,...T])}catch(x){$r(x,l)}Na()}}var _=Lc();if(n.length===0){p.then(()=>u([])).finally(_);return}function d(){Promise.all(n.map(T=>Of(T))).then(u).catch(T=>$r(T,l)).finally(_)}p?p.then(()=>{c(),d(),Na()}):d()}function Nf(){var t=Ne,e=Le,n=pt,r=be;return function(o=!0){Jn(t),Qn(e),qs(n),o&&(t.f&Sn)===0&&(r==null||r.activate(),r==null||r.apply())}}function Na(t=!0){Jn(null),Qn(null),qs(null),t&&(be==null||be.deactivate())}function Lc(){var t=Ne,e=t.b,n=be,r=!!(e!=null&&e.is_rendered());return e==null||e.update_pending_count(1,n),n.increment(r,t),()=>{e==null||e.update_pending_count(-1,n),n.decrement(r,t)}}function Gs(t){var e=Bt|Nt;return Ne!==null&&(Ne.f|=Qs),{ctx:pt,deps:null,effects:null,equals:Ac,f:e,fn:t,reactions:null,rv:0,v:Et,wv:0,parent:Ne,ac:null}}const go=Symbol("obsolete");function Of(t,e,n){let r=Ne;r===null&&mf();var s=void 0,o=Wr(Et),a=!Le,l=new Set;return Yf(()=>{var T,x;var c=Ne,p=xc();s=p.promise;try{Promise.resolve(t()).then(p.resolve,w=>{w!==ca&&p.reject(w)}).finally(Na)}catch(w){p.reject(w),Na()}var u=be;if(a){if((c.f&Xs)!==0)var _=Lc();if((T=r.b)!=null&&T.is_rendered())(x=u.async_deriveds.get(c))==null||x.reject(go);else for(const w of l.values())w.reject(go);l.add(p),u.async_deriveds.set(c,p)}const d=(w,R=void 0)=>{_==null||_(),l.delete(p),R!==go&&(u.activate(),R?(o.f|=ss,Ks(o,R)):((o.f&ss)!==0&&(o.f^=ss),Ks(o,w)),u.deactivate())};p.promise.then(d,w=>d(null,w||"unknown"))}),Va(()=>{for(const c of l)c.reject(go)}),new Promise(c=>{function p(u){function _(){u===s?c(o):p(s)}u.then(_,_)}p(s)})}function Ft(t){const e=Gs(t);return au(e),e}function Gi(t){const e=Gs(t);return e.equals=Cc,e}function zf(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)Qt(e[n])}}function Ki(t){var e,n=Ne,r=t.parent;if(!Vr&&r!==null&&t.v!==Et&&(r.f&(Sn|hn))!==0)return pf(),t.v;Jn(r);try{t.f&=~Ss,zf(t),e=uu(t)}finally{Jn(n)}return e}function Dc(t){var e=Ki(t);if(!t.equals(e)&&(t.wv=lu(),(!(be!=null&&be.is_fork)||t.deps===null)&&(be!==null?(be.capture(t,e,!0),To==null||To.capture(t,e,!0)):t.v=e,t.deps===null))){yt(t,It);return}Vr||(Zt!==null?(Xi()||be!=null&&be.is_fork)&&Zt.set(t,e):qi(t))}function Mf(t){var e;if(t.effects!==null)for(const n of t.effects)(n.teardown||n.ac)&&((e=n.teardown)==null||e.call(n),n.ac!==null&&to(()=>{n.ac.abort(ca),n.ac=null}),n.fn!==null&&(n.teardown=Yu),Ro(n,0),Ji(n))}function Fc(t){if(t.effects!==null)for(const e of t.effects)e.teardown&&e.fn!==null&&Ys(e)}let Xa=null,Rs=null,be=null,To=null,Zt=null,ki=null,$o=!1,Qa=!1,Os=null,wa=null;var _l=0;let Lf=1;var Ds,ts,gs,Fs,Hs,Bs,Hr,Us,xn,Io,Br,lr,wr,js,ms,et,wi,mo,Si,Hc,Bc,Is,Df,_o;const Fa=class Fa{constructor(){ae(this,et);Ie(this,"id",Lf++);ae(this,Ds,!1);Ie(this,"linked",!0);ae(this,ts,null);ae(this,gs,null);Ie(this,"async_deriveds",new Map);Ie(this,"current",new Map);Ie(this,"previous",new Map);ae(this,Fs,new Set);ae(this,Hs,new Set);ae(this,Bs,0);ae(this,Hr,new Map);ae(this,Us,null);ae(this,xn,[]);ae(this,Io,[]);ae(this,Br,new Set);ae(this,lr,new Set);ae(this,wr,new Map);ae(this,js,new Set);Ie(this,"is_fork",!1);ae(this,ms,!1);Rs===null?Xa=Rs=this:(Re(Rs,gs,this),Re(this,ts,Rs)),Rs=this}skip_effect(e){m(this,wr).has(e)||m(this,wr).set(e,{d:[],m:[]}),m(this,js).delete(e)}unskip_effect(e,n=r=>this.schedule(r)){var r=m(this,wr).get(e);if(r){m(this,wr).delete(e);for(var s of r.d)yt(s,Nt),n(s);for(s of r.m)yt(s,gr),n(s)}m(this,js).add(e)}capture(e,n,r=!1){e.v!==Et&&!this.previous.has(e)&&this.previous.set(e,e.v),(e.f&ss)===0&&(this.current.set(e,[n,r]),Zt==null||Zt.set(e,n)),this.is_fork||(e.v=n)}activate(){be=this}deactivate(){be=null,Zt=null}flush(){try{Qa=!0,be=this,He(this,et,mo).call(this)}finally{_l=0,ki=null,Os=null,wa=null,Qa=!1,be=null,Zt=null,Pr.clear()}}discard(){var e;for(const n of m(this,Hs))n(this);m(this,Hs).clear();for(const n of this.async_deriveds.values())n.reject(go);He(this,et,_o).call(this),(e=m(this,Us))==null||e.resolve()}register_created_effect(e){m(this,Io).push(e)}increment(e,n){if(Re(this,Bs,m(this,Bs)+1),e){let r=m(this,Hr).get(n)??0;m(this,Hr).set(n,r+1)}}decrement(e,n){if(Re(this,Bs,m(this,Bs)-1),e){let r=m(this,Hr).get(n)??0;r===1?m(this,Hr).delete(n):m(this,Hr).set(n,r-1)}m(this,ms)||(Re(this,ms,!0),Ar(()=>{Re(this,ms,!1),this.linked&&this.flush()}))}transfer_effects(e,n){for(const r of e)m(this,Br).add(r);for(const r of n)m(this,lr).add(r);e.clear(),n.clear()}oncommit(e){m(this,Fs).add(e)}ondiscard(e){m(this,Hs).add(e)}settled(){return(m(this,Us)??Re(this,Us,xc())).promise}static ensure(){if(be===null){const e=be=new Fa;!Qa&&!$o&&Ar(()=>{m(e,Ds)||e.flush()})}return be}apply(){{Zt=null;return}}schedule(e){var s;if(ki=e,(s=e.b)!=null&&s.is_pending&&(e.f&(Vs|la|Ui))!==0&&(e.f&Xs)===0){e.b.defer_effect(e);return}for(var n=e;n.parent!==null;){n=n.parent;var r=n.f;if(Os!==null&&n===Ne&&(Le===null||(Le.f&Bt)===0))return;if((r&(jr|Xn))!==0){if((r&It)===0)return;n.f^=It}}m(this,xn).push(n)}};Ds=new WeakMap,ts=new WeakMap,gs=new WeakMap,Fs=new WeakMap,Hs=new WeakMap,Bs=new WeakMap,Hr=new WeakMap,Us=new WeakMap,xn=new WeakMap,Io=new WeakMap,Br=new WeakMap,lr=new WeakMap,wr=new WeakMap,js=new WeakMap,ms=new WeakMap,et=new WeakSet,wi=function(){if(this.is_fork)return!0;for(const r of m(this,Hr).keys()){for(var e=r,n=!1;e.parent!==null;){if(m(this,wr).has(e)){n=!0;break}e=e.parent}if(!n)return!0}return!1},mo=function(){var c,p,u,_;Re(this,Ds,!0),_l++>1e3&&(He(this,et,_o).call(this),Hf());for(const d of m(this,Br))m(this,lr).delete(d),yt(d,Nt),this.schedule(d);for(const d of m(this,lr))yt(d,gr),this.schedule(d);const e=m(this,xn);Re(this,xn,[]),this.apply();var n=Os=[],r=[],s=wa=[];for(const d of e)try{He(this,et,Si).call(this,d,n,r)}catch(T){throw Wc(d),He(this,et,wi).call(this)||this.discard(),T}if(be=null,s.length>0){var o=Fa.ensure();for(const d of s)o.schedule(d)}if(Os=null,wa=null,He(this,et,wi).call(this)){He(this,et,Is).call(this,r),He(this,et,Is).call(this,n);for(const[d,T]of m(this,wr))jc(d,T);s.length>0&&He(c=be,et,mo).call(c);return}const a=He(this,et,Hc).call(this);if(a){He(this,et,Is).call(this,r),He(this,et,Is).call(this,n),He(p=a,et,Bc).call(p,this);return}m(this,Br).clear(),m(this,lr).clear();for(const d of m(this,Fs))d(this);m(this,Fs).clear(),To=this,bl(r),bl(n),To=null,(u=m(this,Us))==null||u.resolve();var l=be;if(m(this,Bs)===0&&(m(this,xn).length===0||l!==null)&&He(this,et,_o).call(this),m(this,xn).length>0)if(l!==null){const d=l;m(d,xn).push(...m(this,xn).filter(T=>!m(d,xn).includes(T)))}else l=this;l!==null&&(Pr.clear(),He(_=l,et,mo).call(_))},Si=function(e,n,r){e.f^=It;for(var s=e.first;s!==null;){var o=s.f,a=(o&(Xn|jr))!==0,l=a&&(o&It)!==0,c=l||(o&hn)!==0||m(this,wr).has(s);if(!c&&s.fn!==null){a?s.f^=It:(o&Vs)!==0?n.push(s):fa(s)&&((o&dr)!==0&&m(this,lr).add(s),Ys(s));var p=s.first;if(p!==null){s=p;continue}}for(;s!==null;){var u=s.next;if(u!==null){s=u;break}s=s.parent}}},Hc=function(){for(var e=m(this,ts);e!==null;){if(!e.is_fork){for(const[n,[,r]]of this.current)if(e.current.has(n)&&!r)return e}e=m(e,ts)}return null},Bc=function(e){var r;for(const[s,o]of e.current)!this.previous.has(s)&&e.previous.has(s)&&this.previous.set(s,e.previous.get(s)),this.current.set(s,o);for(const[s,o]of e.async_deriveds){const a=this.async_deriveds.get(s);a&&o.promise.then(a.resolve).catch(a.reject)}e.async_deriveds.clear(),this.transfer_effects(m(e,Br),m(e,lr));const n=s=>{var o=s.reactions;if(o!==null&&!((s.f&Bt)!==0&&(s.f&(Nt|gr))===0))for(const c of o){var a=c.f;if((a&Bt)!==0)n(c);else{var l=c;a&(zs|dr)&&!this.async_deriveds.has(l)&&(m(this,lr).delete(l),yt(l,Nt),this.schedule(l))}}};for(const s of this.current.keys())n(s);this.oncommit(()=>e.discard()),He(r=e,et,_o).call(r),be=this,He(this,et,mo).call(this)},Is=function(e){for(var n=0;n<e.length;n+=1)Nc(e[n],m(this,Br),m(this,lr))},Df=function(){var _;for(let d=Xa;d!==null;d=m(d,gs)){var e=d.id<this.id,n=[];for(const[T,[x,w]]of this.current){if(d.current.has(T)){var r=d.current.get(T)[0];if(e&&x!==r)d.current.set(T,[x,w]);else continue}n.push(T)}if(e)for(const[T,x]of this.async_deriveds){const w=d.async_deriveds.get(T);w&&x.promise.then(w.resolve).catch(w.reject)}var s=[...d.current.keys()].filter(T=>!d.current.get(T)[1]);if(!(!m(d,Ds)||s.length===0)){var o=s.filter(T=>!this.current.has(T));if(o.length===0)e&&d.discard();else if(n.length>0){if(e)for(const T of m(this,js))d.unskip_effect(T,x=>{var w;(x.f&(dr|zs))!==0?d.schedule(x):He(w=d,et,Is).call(w,[x])});d.activate();var a=new Set,l=new Map;for(var c of n)Uc(c,o,a,l);l=new Map;var p=[...d.current].filter(([T,x])=>{const w=this.current.get(T);return w?w[0]!==x[0]||w[1]!==x[1]:!0}).map(([T])=>T);if(p.length>0)for(const T of m(this,Io))(T.f&(Sn|hn|Pa))===0&&Yi(T,p,l)&&((T.f&(zs|dr))!==0?(yt(T,Nt),d.schedule(T)):m(d,Br).add(T));if(m(d,xn).length>0&&!m(d,ms)){d.apply();for(var u of m(d,xn))He(_=d,et,Si).call(_,u,[],[]);Re(d,xn,[])}d.deactivate()}}}},_o=function(){if(this.linked){var e=m(this,ts),n=m(this,gs);e===null?Xa=n:Re(e,gs,n),n===null?Rs=e:Re(n,ts,e),this.linked=!1}};let Ts=Fa;function Ff(t){var e=$o;$o=!0;try{for(var n;;){if(Cf(),be===null)return n;be.flush()}}finally{$o=e}}function Hf(){try{kf()}catch(t){$r(t,ki)}}let ir=null;function bl(t){var e=t.length;if(e!==0){for(var n=0;n<e;){var r=t[n++];if((r.f&(Sn|hn))===0&&fa(r)&&(ir=new Set,Ys(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&ru(r),(ir==null?void 0:ir.size)>0)){Pr.clear();for(const s of ir){if((s.f&(Sn|hn))!==0)continue;const o=[s];let a=s.parent;for(;a!==null;)ir.has(a)&&(ir.delete(a),o.push(a)),a=a.parent;for(let l=o.length-1;l>=0;l--){const c=o[l];(c.f&(Sn|hn))===0&&Ys(c)}}ir.clear()}}ir=null}}function Uc(t,e,n,r){if(!n.has(t)&&(n.add(t),t.reactions!==null))for(const s of t.reactions){const o=s.f;(o&Bt)!==0?Uc(s,e,n,r):(o&(zs|dr))!==0&&(o&Nt)===0&&Yi(s,e,r)&&(yt(s,Nt),Zi(s))}}function Yi(t,e,n){const r=n.get(t);if(r!==void 0)return r;if(t.deps!==null)for(const s of t.deps){if(Ca.call(e,s))return!0;if((s.f&Bt)!==0&&Yi(s,e,n))return n.set(s,!0),!0}return n.set(t,!1),!1}function Zi(t){be.schedule(t)}function jc(t,e){if(!((t.f&Xn)!==0&&(t.f&It)!==0)){(t.f&Nt)!==0?e.d.push(t):(t.f&gr)!==0&&e.m.push(t),yt(t,It);for(var n=t.first;n!==null;)jc(n,e),n=n.next}}function Wc(t){yt(t,It);for(var e=t.first;e!==null;)Wc(e),e=e.next}let Oa=new Set;const Pr=new Map;let Vc=!1;function Wr(t,e){var n={f:0,v:t,reactions:null,equals:Ac,rv:0,wv:0};return n}function z(t,e){const n=Wr(t);return au(n),n}function Bf(t,e=!1,n=!0){var s;const r=Wr(t);return e||(r.equals=Cc),Js&&n&&pt!==null&&pt.l!==null&&((s=pt.l).s??(s.s=[])).push(r),r}function h(t,e,n=!1){Le!==null&&(!hr||(Le.f&Pa)!==0)&&eo()&&(Le.f&(Bt|dr|zs|Pa))!==0&&(Nr===null||!Nr.has(t))&&$f();let r=n?Xe(e):e;return Ks(t,r,wa)}function Ks(t,e,n=null){if(!t.equals(e)){Vr?Pr.set(t,e):Pr.has(t)||Pr.set(t,t.v);var r=Ts.ensure();if(r.capture(t,e),(t.f&Bt)!==0){const s=t;(t.f&Nt)!==0&&Ki(s),Zt===null&&qi(s)}t.wv=lu(),qc(t,Nt,n),eo()&&Ne!==null&&(Ne.f&It)!==0&&(Ne.f&(Xn|jr))===0&&(Gn===null?Xf([t]):Gn.push(t)),!r.is_fork&&Oa.size>0&&!Vc&&Uf()}return e}function Uf(){Vc=!1;for(const t of Oa){(t.f&It)!==0&&yt(t,gr);let e;try{e=fa(t)}catch{e=!0}e&&Ys(t)}Oa.clear()}function xl(t,e=1){var n=i(t),r=e===1?n++:n--;return h(t,n),r}function Eo(t){h(t,t.v+1)}function qc(t,e,n){var r=t.reactions;if(r!==null)for(var s=eo(),o=r.length,a=0;a<o;a++){var l=r[a],c=l.f;if(!(!s&&l===Ne)){var p=(c&Nt)===0;if(p&&yt(l,e),(c&Pa)!==0)Oa.add(l);else if((c&Bt)!==0){var u=l;Zt==null||Zt.delete(u),(c&Ss)===0&&(c&Zn&&(Ne===null||(Ne.f&Ia)===0)&&(l.f|=Ss),qc(u,gr,n))}else if(p){var _=l;(c&dr)!==0&&ir!==null&&ir.add(_),n!==null?n.push(_):Zi(_)}}}}function Xe(t){if(typeof t!="object"||t===null||Rr in t||kc in t)return t;const e=Bi(t);if(e!==Gu&&e!==Ku)return t;var n=new Map,r=Ua(t),s=z(0),o=ks,a=l=>{if(ks===o)return l();var c=Le,p=ks;Qn(null),wl(o);var u=l();return Qn(c),wl(p),u};return r&&n.set("length",z(t.length)),new Proxy(t,{defineProperty(l,c,p){(!("value"in p)||p.configurable===!1||p.enumerable===!1||p.writable===!1)&&Sf();var u=n.get(c);return u===void 0?a(()=>{var _=z(p.value);return n.set(c,_),_}):h(u,p.value,!0),!0},deleteProperty(l,c){var p=n.get(c);if(p===void 0){if(c in l){const u=a(()=>z(Et));n.set(c,u),Eo(s)}}else h(p,Et),Eo(s);return!0},get(l,c,p){var T;if(c===Rr)return t;var u=n.get(c),_=c in l;if(u===void 0&&(!_||(T=rs(l,c))!=null&&T.writable)&&(u=a(()=>{var x=Xe(_?l[c]:Et),w=z(x);return w}),n.set(c,u)),u!==void 0){var d=i(u);return d===Et?void 0:d}return Reflect.get(l,c,p)},getOwnPropertyDescriptor(l,c){var p=Reflect.getOwnPropertyDescriptor(l,c);if(p&&"value"in p){var u=n.get(c);u&&(p.value=i(u))}else if(p===void 0){var _=n.get(c),d=_==null?void 0:_.v;if(_!==void 0&&d!==Et)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return p},has(l,c){var d;if(c===Rr)return!0;var p=n.get(c),u=p!==void 0&&p.v!==Et||Reflect.has(l,c);if(p!==void 0||Ne!==null&&(!u||(d=rs(l,c))!=null&&d.writable)){p===void 0&&(p=a(()=>{var T=u?Xe(l[c]):Et,x=z(T);return x}),n.set(c,p));var _=i(p);if(_===Et)return!1}return u},set(l,c,p,u){var F;var _=n.get(c),d=c in l;if(r&&c==="length")for(var T=p;T<_.v;T+=1){var x=n.get(T+"");x!==void 0?h(x,Et):T in l&&(x=a(()=>z(Et)),n.set(T+"",x))}if(_===void 0)(!d||(F=rs(l,c))!=null&&F.writable)&&(_=a(()=>z(void 0)),h(_,Xe(p)),n.set(c,_));else{d=_.v!==Et;var w=a(()=>Xe(p));h(_,w)}var R=Reflect.getOwnPropertyDescriptor(l,c);if(R!=null&&R.set&&R.set.call(u,p),!d){if(r&&typeof c=="string"){var O=n.get("length"),j=Number(c);Number.isInteger(j)&&j>=O.v&&h(O,j+1)}Eo(s)}return!0},ownKeys(l){i(s);var c=Reflect.ownKeys(l).filter(_=>{var d=n.get(_);return d===void 0||d.v!==Et});for(var[p,u]of n)u.v!==Et&&!(p in l)&&c.push(p);return c},setPrototypeOf(){Tf()}})}function yl(t){try{if(t!==null&&typeof t=="object"&&Rr in t)return t[Rr]}catch{}return t}function Gc(t,e){return Object.is(yl(t),yl(e))}var $s,Kc,Yc,Zc;function jf(){if($s===void 0){$s=window,Kc=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,n=Text.prototype;Yc=rs(e,"firstChild").get,Zc=rs(e,"nextSibling").get,gl(t)&&(t[xi]=void 0,t[ya]=null,t[yi]=void 0,t.__e=void 0),gl(n)&&(n[vo]=void 0)}}function Ir(t=""){return document.createTextNode(t)}function pr(t){return Yc.call(t)}function ua(t){return Zc.call(t)}function S(t,e){return pr(t)}function K(t,e=!1){{var n=pr(t);return n instanceof Comment&&n.data===""?ua(n):n}}function le(t,e=!1){return pr(t)}function g(t,e=1,n=!1){let r=t;for(;e--;)r=ua(r);return r}function Wf(t){t.textContent=""}function Xc(){return!1}function Wa(t,e,n){return e==null||e===$c?n?document.createElement(t,{is:n}):document.createElement(t):n?document.createElementNS(e,t,{is:n}):document.createElementNS(e,t)}function Vf(t){var e=Ne;if(e===null)return Le.f|=ss,t;if((e.f&Xs)===0&&(e.f&Vs)===0)throw t;$r(t,e)}function $r(t,e){if(!(e!==null&&(e.f&Sn)!==0)){for(;e!==null;){if((e.f&bi)!==0&&(e.f&(Sn|Ra))===0){if((e.f&Xs)===0)throw t;try{e.b.error(t);return}catch(n){t=n}}e=e.parent}throw t}}function Qc(t){Ne===null&&(Le===null&&yf(),xf()),Vr&&bf()}function qf(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function mr(t,e){var n=Ne;n!==null&&(n.f&hn)!==0&&(t|=hn);var r={ctx:pt,deps:null,nodes:null,f:t|Nt|Zn,first:null,fn:e,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};be==null||be.register_created_effect(r);var s=r;if((t&Vs)!==0)Os!==null?Os.push(r):Ts.ensure().schedule(r);else if(e!==null){try{Ys(r)}catch(a){throw Qt(r),a}s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&Qs)===0&&(s=s.first,(t&dr)!==0&&(t&os)!==0&&s!==null&&(s.f|=os))}if(s!==null&&(s.parent=n,n!==null&&qf(s,n),Le!==null&&(Le.f&Bt)!==0&&(t&jr)===0)){var o=Le;(o.effects??(o.effects=[])).push(s)}return r}function Xi(){return Le!==null&&!hr}function Va(t){const e=mr(la,null);return yt(e,It),e.teardown=t,e}function Xt(t){Qc();var e=Ne.f,n=!Le&&(e&Xn)!==0&&pt!==null&&!pt.i;if(n){var r=pt;(r.e??(r.e=[])).push(t)}else return Jc(t)}function Jc(t){return mr(Vs|yc,t)}function Gf(t){return Qc(),mr(la|yc,t)}function Kf(t){Ts.ensure();const e=mr(jr|Qs,t);return(n={})=>new Promise(r=>{n.outro?ys(e,()=>{Qt(e),r(void 0)}):(Qt(e),r(void 0))})}function qa(t){return mr(Vs,t)}function Yf(t){return mr(zs|Qs,t)}function Qi(t,e=0){return mr(la|e,t)}function J(t,e=[],n=[],r=[]){Mc(r,e,n,s=>{mr(la,()=>{t(...s.map(i))})})}function no(t,e=0){var n=mr(dr|e,t);return n}function eu(t,e=0){var n=mr(Ui|e,t);return n}function kn(t){return mr(Xn|Qs,t)}function tu(t){var e=t.teardown;if(e!==null){const n=Vr,r=Le;kl(!0),Qn(null);try{e.call(null)}catch(s){$r(s,t.parent)}finally{kl(n),Qn(r)}}}function Ji(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){const s=n.ac;s!==null&&to(()=>{s.abort(ca)});var r=n.next;(n.f&jr)!==0?n.parent=null:Qt(n,e),n=r}}function Zf(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&Xn)===0&&Qt(e),e=n}}function Qt(t,e=!0){var n=!1;(e||(t.f&Qu)!==0)&&t.nodes!==null&&t.nodes.end!==null&&(nu(t.nodes.start,t.nodes.end),n=!0),t.f|=Ra,Ji(t,e&&!n),Ro(t,0);var r=t.nodes&&t.nodes.t;if(r!==null)for(const o of r)o.stop();tu(t),t.f^=Ra,t.f|=Sn;var s=t.parent;s!==null&&s.first!==null&&ru(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes=t.ac=t.b=null}function nu(t,e){for(;t!==null;){var n=t===e?null:ua(t);t.remove(),t=n}}function ru(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function ys(t,e,n=!0){var r=[];t.f|=ji,su(t,r,!0);var s=()=>{n&&Qt(t),e&&e()},o=r.length;if(o>0){var a=()=>--o||s();for(var l of r)l.out(a)}else s()}function su(t,e,n){if((t.f&hn)===0){t.f^=hn;var r=t.nodes&&t.nodes.t;if(r!==null)for(const l of r)(l.is_global||n)&&e.push(l);for(var s=t.first;s!==null;){var o=s.next;if((s.f&jr)===0){var a=(s.f&os)!==0||(s.f&Xn)!==0&&(t.f&dr)!==0;su(s,e,a?n:!1)}s=o}}}function za(t){t.f&=~ji,ou(t,!0)}function ou(t,e){if((t.f&ji)===0&&(t.f&hn)!==0){t.f^=hn,(t.f&It)===0&&(yt(t,Nt),Ts.ensure().schedule(t));for(var n=t.first;n!==null;){var r=n.next,s=(n.f&os)!==0||(n.f&Xn)!==0;ou(n,s?e:!1),n=r}var o=t.nodes&&t.nodes.t;if(o!==null)for(const a of o)(a.is_global||e)&&a.in()}}function el(t,e){if(t.nodes)for(var n=t.nodes.start,r=t.nodes.end;n!==null;){var s=n===r?null:ua(n);e.append(n),n=s}}let Sa=!1,Vr=!1;function kl(t){Vr=t}let Le=null,hr=!1;function Qn(t){Le=t}let Ne=null;function Jn(t){Ne=t}let Nr=null;function au(t){Le!==null&&(Nr??(Nr=new Set)).add(t)}let wn=null,Ln=0,Gn=null;function Xf(t){Gn=t}let iu=1,hs=0,ks=hs;function wl(t){ks=t}function lu(){return++iu}function fa(t){var e=t.f;if((e&Nt)!==0)return!0;if(e&Bt&&(t.f&=~Ss),(e&gr)!==0){for(var n=t.deps,r=n.length,s=0;s<r;s++){var o=n[s];if(fa(o)&&Dc(o),o.wv>t.wv)return!0}(e&Zn)!==0&&Zt===null&&yt(t,It)}return!1}function cu(t,e,n=!0){var r=t.reactions;if(r!==null&&!(Nr!==null&&Nr.has(t)))for(var s=0;s<r.length;s++){var o=r[s];(o.f&Bt)!==0?cu(o,e,!1):e===o&&(n?yt(o,Nt):(o.f&It)!==0&&yt(o,gr),Zi(o))}}function uu(t){var e=wn,n=Ln,r=Gn,s=Le,o=Nr,a=pt,l=hr,c=ks,p=t.f;wn=null,Ln=0,Gn=null,Le=(p&(Xn|jr))===0?t:null,Nr=null,qs(t.ctx),hr=!1,ks=++hs,t.ac!==null&&(to(()=>{t.ac.abort(ca)}),t.ac=null);try{t.f|=Ia;var u=t.fn,_=u();t.f|=Xs;var d=Sl(t);if(eo()&&Gn!==null&&!hr&&d!==null&&(t.f&(Bt|gr|Nt))===0)for(var T=0;T<Gn.length;T++)cu(Gn[T],t);if(s!==null&&s!==t){if(hs++,s.deps!==null)for(let x=0;x<n;x+=1)s.deps[x].rv=hs;if(e!==null)for(const x of e)x.rv=hs;Gn!==null&&(r===null?r=Gn:r.push(...Gn))}return(t.f&ss)!==0&&(t.f^=ss),_}catch(x){return Sl(t),Vf(x)}finally{t.f^=Ia,wn=e,Ln=n,Gn=r,Le=s,Nr=o,qs(a),hr=l,ks=c}}function Sl(t){var s;var e=t.deps,n=be==null?void 0:be.is_fork;if(wn!==null){var r;if(n||Ro(t,Ln),e!==null&&Ln>0)for(e.length=Ln+wn.length,r=0;r<wn.length;r++)e[Ln+r]=wn[r];else t.deps=e=wn;if(Xi()&&(t.f&Zn)!==0)for(r=Ln;r<e.length;r++)((s=e[r]).reactions??(s.reactions=[])).push(t)}else!n&&e!==null&&Ln<e.length&&(Ro(t,Ln),e.length=Ln);return e}function Qf(t,e){let n=e.reactions;if(n!==null){var r=qu.call(n,t);if(r!==-1){var s=n.length-1;s===0?n=e.reactions=null:(n[r]=n[s],n.pop())}}if(n===null&&(e.f&Bt)!==0&&(wn===null||!Ca.call(wn,e))){var o=e;(o.f&Zn)!==0&&(o.f^=Zn,o.f&=~Ss),o.v!==Et&&qi(o),o.ac!==null&&to(()=>{o.ac.abort(ca),o.ac=null,yt(o,Nt)}),Mf(o),Ro(o,0)}}function Ro(t,e){var n=t.deps;if(n!==null)for(var r=e;r<n.length;r++)Qf(t,n[r])}function Ys(t){var e=t.f;if((e&Sn)===0){yt(t,It);var n=Ne,r=Sa;Ne=t,Sa=(e&(Xn|jr))===0;try{(e&(dr|Ui))!==0?Zf(t):Ji(t),tu(t);var s=uu(t);t.teardown=typeof s=="function"?s:null,t.wv=iu;var o}finally{Sa=r,Ne=n}}}async function tl(){await Promise.resolve(),Ff()}function i(t){var e=t.f,n=(e&Bt)!==0;if(Le!==null&&!hr){var r=Ne!==null&&(Ne.f&Sn)!==0;if(!r&&(Nr===null||!Nr.has(t))){var s=Le.deps;if((Le.f&Ia)!==0)t.rv<hs&&(t.rv=hs,wn===null&&s!==null&&s[Ln]===t?Ln++:wn===null?wn=[t]:wn.push(t));else{Le.deps??(Le.deps=[]),Ca.call(Le.deps,t)||Le.deps.push(t);var o=t.reactions;o===null?t.reactions=[Le]:Ca.call(o,Le)||o.push(Le)}}}if(Vr&&Pr.has(t))return Pr.get(t);if(n){var a=t;if(Vr){var l=a.v;return((a.f&It)===0&&a.reactions!==null||du(a))&&(l=Ki(a)),Pr.set(a,l),l}var c=(a.f&Zn)===0&&!hr&&Le!==null&&(Sa||(Le.f&Zn)!==0),p=(a.f&Xs)===0;fa(a)&&(c&&(a.f|=Zn),Dc(a)),c&&!p&&(Fc(a),fu(a))}if(Zt!=null&&Zt.has(t))return Zt.get(t);if((t.f&ss)!==0)throw t.v;return t.v}function fu(t){if(t.f|=Zn,t.deps!==null)for(const e of t.deps)(e.reactions??(e.reactions=[])).push(t),(e.f&Bt)!==0&&(e.f&Zn)===0&&(Fc(e),fu(e))}function du(t){if(t.v===Et)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(Pr.has(e)||(e.f&Bt)!==0&&du(e))return!0;return!1}function qr(t){var e=hr;try{return hr=!0,t()}finally{hr=e}}function cs(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(Rr in t)Ti(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];typeof n=="object"&&n&&Rr in n&&Ti(n)}}}function Ti(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let r in t)try{Ti(t[r],e)}catch{}const n=Bi(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=bc(n);for(let s in r){const o=r[s].get;if(o)try{o.call(t)}catch{}}}}}function Jf(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const ed=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function td(t){return ed.includes(t)}const nd={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function rd(t){return t=t.toLowerCase(),nd[t]??t}const sd=["touchstart","touchmove"];function od(t){return sd.includes(t)}const vs=Symbol("events"),pu=new Set,$i=new Set;function hu(t,e,n,r={}){function s(o){if(r.capture||Ei.call(e,o),!o.cancelBubble)return to(()=>n==null?void 0:n.call(this,o))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?Ar(()=>{e.addEventListener(t,s,r)}):e.addEventListener(t,s,r),s}function Ht(t,e,n,r,s){var o={capture:r,passive:s},a=hu(t,e,n,o);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Va(()=>{e.removeEventListener(t,a,o)})}function L(t,e,n){(e[vs]??(e[vs]={}))[t]=n}function er(t){for(var e=0;e<t.length;e++)pu.add(t[e]);for(var n of $i)n(t)}let Ja=null,ei=!1;function Ei(t){var w,R;var e=this,n=e.ownerDocument,r=t.type,s=((w=t.composedPath)==null?void 0:w.call(t))||[],o=s[0]||t.target;Ja=t,ei||(ei=!0,setTimeout(()=>{ei=!1,Ja=null}));var a=0,l=Ja===t&&t[vs];if(l){var c=s.indexOf(l);if(c!==-1&&(e===document||e===window)){t[vs]=e;return}var p=s.indexOf(e);if(p===-1)return;c<=p&&(a=c)}if(o=s[a]||t.target,o!==e){_c(t,"currentTarget",{configurable:!0,get(){return o||n}});var u=Le,_=Ne;Qn(null),Jn(null);try{for(var d,T=[];o!==null&&o!==e;){try{var x=(R=o[vs])==null?void 0:R[r];x!=null&&(!o.disabled||t.target===o)&&x.call(o,t)}catch(O){d?T.push(O):d=O}if(t.cancelBubble)break;a++,o=a<s.length?s[a]:null}if(d){for(let O of T)queueMicrotask(()=>{throw O});throw d}}finally{t[vs]=e,delete t.currentTarget,Qn(u),Jn(_)}}}var gc;const ti=((gc=globalThis==null?void 0:globalThis.window)==null?void 0:gc.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:t=>t});function ad(t){return(ti==null?void 0:ti.createHTML(t))??t}function vu(t){var e=Wa("template");return e.innerHTML=ad(t.replaceAll("<!>","<!---->")),e.content}function as(t,e){var n=Ne;n.nodes===null&&(n.nodes={start:t,end:e,a:null,t:null})}function I(t,e){var n=(e&cf)!==0,r=(e&uf)!==0,s,o=!t.startsWith("<!>");return()=>{s===void 0&&(s=vu(o?t:"<!>"+t),n||(s=pr(s)));var a=r||Kc?document.importNode(s,!0):s.cloneNode(!0);if(n){var l=pr(a),c=a.lastChild;as(l,c)}else as(a,a);return a}}function id(t,e,n="svg"){var r=!t.startsWith("<!>"),s=`<${n}>${r?t:"<!>"+t}</${n}>`,o;return()=>{if(!o){var a=vu(s),l=pr(a);o=pr(l)}var c=o.cloneNode(!0);return as(c,c),c}}function gu(t,e){return id(t,e,"svg")}function Tl(t=""){{var e=Ir(t+"");return as(e,e),e}}function he(){var t=document.createDocumentFragment(),e=document.createComment(""),n=Ir();return t.append(e,n),as(e,n),t}function k(t,e){t!==null&&t.before(e)}function ld(t){let e=0,n=Wr(0),r;return()=>{Xi()&&(i(n),Qi(()=>(e===0&&(r=qr(()=>t(()=>Eo(n)))),e+=1,()=>{Ar(()=>{e-=1,e===0&&(r==null||r(),r=void 0,Eo(n))})})))}}var cd=os|Qs;function ud(t,e,n,r){new fd(t,e,n,r)}var Kn,Hi,Yn,_s,fn,On,dn,zn,Sr,bs,ns,Ws,No,Oo,Ur,Ha,ft,dd,pd,Ai,hd,Ci,bo,Ta,Ri,Pi;class fd{constructor(e,n,r,s){ae(this,ft);Ie(this,"parent");Ie(this,"is_pending",!1);Ie(this,"transform_error");ae(this,Kn);ae(this,Hi,null);ae(this,Yn);ae(this,_s);ae(this,fn);ae(this,On,null);ae(this,dn,null);ae(this,zn,null);ae(this,Sr,null);ae(this,bs,0);ae(this,ns,0);ae(this,Ws,!1);ae(this,No,new Set);ae(this,Oo,new Set);ae(this,Ur,null);ae(this,Ha,ld(()=>(Re(this,Ur,Wr(m(this,bs))),()=>{Re(this,Ur,null)})));var o;Re(this,Kn,e),Re(this,Yn,n),Re(this,_s,a=>{var l=Ne;l.b=this,l.f|=bi,r(a)}),this.parent=Ne.b,this.transform_error=s??((o=this.parent)==null?void 0:o.transform_error)??(a=>a),Re(this,fn,no(()=>{He(this,ft,Ci).call(this)},cd))}defer_effect(e){Nc(e,m(this,No),m(this,Oo))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!m(this,Yn).pending}update_pending_count(e,n){He(this,ft,Ri).call(this,e,n),Re(this,bs,m(this,bs)+e),!(!m(this,Ur)||m(this,Ws))&&(Re(this,Ws,!0),Ar(()=>{Re(this,Ws,!1),m(this,Ur)&&Ks(m(this,Ur),m(this,bs))}))}get_effect_pending(){return m(this,Ha).call(this),i(m(this,Ur))}error(e){if(!m(this,Yn).onerror&&!m(this,Yn).failed)throw e;be!=null&&be.is_fork?(m(this,On)&&be.skip_effect(m(this,On)),m(this,dn)&&be.skip_effect(m(this,dn)),m(this,zn)&&be.skip_effect(m(this,zn)),be.oncommit(()=>{He(this,ft,Pi).call(this,e)})):He(this,ft,Pi).call(this,e)}}Kn=new WeakMap,Hi=new WeakMap,Yn=new WeakMap,_s=new WeakMap,fn=new WeakMap,On=new WeakMap,dn=new WeakMap,zn=new WeakMap,Sr=new WeakMap,bs=new WeakMap,ns=new WeakMap,Ws=new WeakMap,No=new WeakMap,Oo=new WeakMap,Ur=new WeakMap,Ha=new WeakMap,ft=new WeakSet,dd=function(){try{Re(this,On,kn(()=>m(this,_s).call(this,m(this,Kn))))}catch(e){this.error(e)}},pd=function(e){const n=m(this,Yn).failed,{reset:r,invoke_onerror:s}=He(this,ft,Ai).call(this,e);Ar(s),n&&Re(this,zn,kn(()=>{n(m(this,Kn),()=>e,()=>r)}))},Ai=function(e){var n=!1,r=!1;const s=()=>{if(n){vf();return}n=!0,r&&Ef(),m(this,zn)!==null&&ys(m(this,zn),()=>{Re(this,zn,null)}),He(this,ft,Ta).call(this,()=>{He(this,ft,Ci).call(this)})};return{reset:s,invoke_onerror:()=>{var a,l;try{r=!0,(l=(a=m(this,Yn)).onerror)==null||l.call(a,e,s),r=!1}catch(c){$r(c,m(this,fn)&&m(this,fn).parent)}}}},hd=function(){const e=m(this,Yn).pending;e&&(this.is_pending=!0,Re(this,dn,kn(()=>e(m(this,Kn)))),Ar(()=>{var n=Re(this,Sr,document.createDocumentFragment()),r=Ir(),s=!1;if(n.append(r),Re(this,On,He(this,ft,Ta).call(this,()=>{try{return kn(()=>m(this,_s).call(this,r))}catch(o){try{this.error(o),s=!0}catch(a){$r(a,m(this,fn).parent)}return null}})),m(this,On)===null){Re(this,Sr,null),s&&He(this,ft,bo).call(this,be);return}m(this,ns)===0&&(m(this,Kn).before(n),Re(this,Sr,null),ys(m(this,dn),()=>{Re(this,dn,null)}),He(this,ft,bo).call(this,be))}))},Ci=function(){try{if(this.is_pending=this.has_pending_snippet(),Re(this,ns,0),Re(this,bs,0),Re(this,On,kn(()=>{m(this,_s).call(this,m(this,Kn))})),m(this,ns)>0){var e=Re(this,Sr,document.createDocumentFragment());el(m(this,On),e);const n=m(this,Yn).pending;Re(this,dn,kn(()=>n(m(this,Kn))))}else He(this,ft,bo).call(this,be)}catch(n){this.error(n)}},bo=function(e){this.is_pending=!1,e.transfer_effects(m(this,No),m(this,Oo))},Ta=function(e){var n=Ne,r=Le,s=pt;Jn(m(this,fn)),Qn(m(this,fn)),qs(m(this,fn).ctx);try{return Ts.ensure(),e()}finally{Jn(n),Qn(r),qs(s)}},Ri=function(e,n){var r;if(!this.has_pending_snippet()){this.parent&&He(r=this.parent,ft,Ri).call(r,e,n);return}Re(this,ns,m(this,ns)+e),m(this,ns)===0&&(He(this,ft,bo).call(this,n),m(this,dn)&&ys(m(this,dn),()=>{Re(this,dn,null)}),m(this,Sr)&&(m(this,Kn).before(m(this,Sr)),Re(this,Sr,null)))},Pi=function(e){m(this,On)&&(Qt(m(this,On)),Re(this,On,null)),m(this,dn)&&(Qt(m(this,dn)),Re(this,dn,null)),m(this,zn)&&(Qt(m(this,zn)),Re(this,zn,null));let n=m(this,Yn).failed;const r=s=>{const{reset:o,invoke_onerror:a}=He(this,ft,Ai).call(this,s);a(),n&&Re(this,zn,He(this,ft,Ta).call(this,()=>{try{return kn(()=>{var l=Ne;l.b=this,l.f|=bi,n(m(this,Kn),()=>s,()=>o)})}catch(l){return $r(l,m(this,fn).parent),null}}))};Ar(()=>{var s;try{s=this.transform_error(e)}catch(o){$r(o,m(this,fn)&&m(this,fn).parent);return}s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(r,o=>$r(o,m(this,fn)&&m(this,fn).parent)):r(s)})};function X(t,e){var n=e==null?"":typeof e=="object"?`${e}`:e;n!==(t[vo]??(t[vo]=t.nodeValue))&&(t[vo]=n,t.nodeValue=`${n}`)}function vd(t,e){return gd(t,e)}const ma=new Map;function gd(t,{target:e,anchor:n,props:r={},events:s,context:o,intro:a=!0,transformError:l}){jf();var c=void 0,p=Kf(()=>{var u=n??e.appendChild(Ir());ud(u,{pending:()=>{}},T=>{vn({});var x=pt;o&&(x.c=o),s&&(r.$$events=s),c=t(T,r)||Vi(),gn()},l);var _=new Set,d=T=>{for(var x=0;x<T.length;x++){var w=T[x];if(!_.has(w)){_.add(w);var R=od(w);for(const F of[e,document]){var O=ma.get(F);O===void 0&&(O=new Map,ma.set(F,O));var j=O.get(w);j===void 0?(F.addEventListener(w,Ei,{passive:R}),O.set(w,1)):O.set(w,j+1)}}}};return d(ja(pu)),$i.add(d),()=>{var R;for(var T of _)for(const O of[e,document]){var x=ma.get(O),w=x.get(T);--w==0?(O.removeEventListener(T,Ei),x.delete(T),x.size===0&&ma.delete(O)):x.set(T,w)}$i.delete(d),u!==n&&((R=u.parentNode)==null||R.removeChild(u))}});return md.set(c,p),c}let md=new WeakMap;var cr,Tr,Mn,xs,zo,Mo,Ba;class Ga{constructor(e,n=!0){Ie(this,"anchor");ae(this,cr,new Map);ae(this,Tr,new Map);ae(this,Mn,new Map);ae(this,xs,new Set);ae(this,zo,!0);ae(this,Mo,e=>{if(m(this,cr).has(e)){var n=m(this,cr).get(e),r=m(this,Tr).get(n);if(r)za(r),m(this,xs).delete(n);else{var s=m(this,Mn).get(n);s&&(za(s.effect),m(this,Tr).set(n,s.effect),m(this,Mn).delete(n),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[o,a]of m(this,cr)){if(m(this,cr).delete(o),o===e)break;const l=m(this,Mn).get(a);l&&(Qt(l.effect),m(this,Mn).delete(a))}for(const[o,a]of m(this,Tr)){if(o===n||m(this,xs).has(o))continue;const l=()=>{if(Array.from(m(this,cr).values()).includes(o)){var p=document.createDocumentFragment();el(a,p),p.append(Ir()),m(this,Mn).set(o,{effect:a,fragment:p})}else Qt(a);m(this,xs).delete(o),m(this,Tr).delete(o)};m(this,zo)||!r?(m(this,xs).add(o),ys(a,l,!1)):l()}}});ae(this,Ba,e=>{m(this,cr).delete(e);const n=Array.from(m(this,cr).values());for(const[r,s]of m(this,Mn))n.includes(r)||(Qt(s.effect),m(this,Mn).delete(r))});this.anchor=e,Re(this,zo,n)}ensure(e,n){var r=be,s=Xc();if(n&&!m(this,Tr).has(e)&&!m(this,Mn).has(e))if(s){var o=document.createDocumentFragment(),a=Ir();o.append(a),m(this,Mn).set(e,{effect:kn(()=>n(a)),fragment:o})}else m(this,Tr).set(e,kn(()=>n(this.anchor)));if(m(this,cr).set(r,e),s){for(const[l,c]of m(this,Tr))l===e?r.unskip_effect(c):r.skip_effect(c);for(const[l,c]of m(this,Mn))l===e?r.unskip_effect(c.effect):r.skip_effect(c.effect);r.oncommit(m(this,Mo)),r.ondiscard(m(this,Ba))}else m(this,Mo).call(this,r)}}cr=new WeakMap,Tr=new WeakMap,Mn=new WeakMap,xs=new WeakMap,zo=new WeakMap,Mo=new WeakMap,Ba=new WeakMap;function U(t,e,n=!1){var r=new Ga(t),s=n?os:0;function o(a,l){r.ensure(a,l)}no(()=>{var a=!1;e((l,c=0)=>{a=!0,o(c,l)}),a||o(-1,null)},s)}const _d=Symbol("NaN");function bd(t,e,n){var r=new Ga(t),s=!eo();no(()=>{var o=e();o!==o&&(o=_d),s&&o!==null&&typeof o=="object"&&(o={}),r.ensure(o,n)})}function nl(t,e){return e}function xd(t,e,n){for(var r=[],s=e.length,o,a=e.length,l=0;l<s;l++){let _=e[l];ys(_,()=>{if(o){if(o.pending.delete(_),o.done.add(_),o.pending.size===0){var d=t.outrogroups;Ii(t,ja(o.done)),d.delete(o),d.size===0&&(t.outrogroups=null)}}else a-=1},!1)}if(a===0){var c=r.length===0&&n!==null&&t.pending.size===0;if(c){var p=n,u=p.parentNode;Wf(u),u.append(p),t.items.clear()}Ii(t,e,!c)}else o={pending:new Set(e),done:new Set},(t.outrogroups??(t.outrogroups=new Set)).add(o)}function Ii(t,e,n=!0){var r;if(t.pending.size>0){r=new Set;for(const a of t.pending.values())for(const l of a)r.add(t.items.get(l).e)}for(var s=0;s<e.length;s++){var o=e[s];if(r!=null&&r.has(o)){o.f|=Er;const a=document.createDocumentFragment();el(o,a)}else Qt(e[s],n)}}var $l;function _t(t,e,n,r,s,o=null){var a=t,l=new Map,c=(e&Sc)!==0;if(c){var p=t;a=p.appendChild(Ir())}var u=null,_=Gi(()=>{var F=n();return Ua(F)?F:F==null?[]:ja(F)}),d,T=new Map,x=!0;function w(F){(j.effect.f&Sn)===0&&(j.pending.delete(F),j.fallback=u,yd(j,d,a,e,r),u!==null&&(d.length===0?(u.f&Er)===0?za(u):(u.f^=Er,xo(u,null,a)):ys(u,()=>{u=null})))}function R(F){j.pending.delete(F)}var O=no(()=>{d=i(_);for(var F=d.length,Q=new Set,C=be,A=Xc(),N=0;N<F;N+=1){var se=d[N],te=r(se,N),ve=x?null:l.get(te);ve?(ve.v&&Ks(ve.v,se),ve.i&&Ks(ve.i,N),A&&C.unskip_effect(ve.e)):(ve=kd(l,x?a:$l??($l=Ir()),se,te,N,s,e,n),x||(ve.e.f|=Er),l.set(te,ve)),Q.add(te)}if(F===0&&o&&!u&&(x?u=kn(()=>o(a)):(u=kn(()=>o($l??($l=Ir()))),u.f|=Er)),F>Q.size&&_f(),!x)if(T.set(C,Q),A){for(const[me,_e]of l)Q.has(me)||C.skip_effect(_e.e);C.oncommit(w),C.ondiscard(R)}else w(C);i(_)}),j={effect:O,items:l,pending:T,outrogroups:null,fallback:u};x=!1}function io(t){for(;t!==null&&(t.f&Xn)===0;)t=t.next;return t}function yd(t,e,n,r,s){var ve,me,_e,Ve,Ue,tt,Y,ge,ie;var o=(r&nf)!==0,a=e.length,l=t.items,c=io(t.effect.first),p,u=null,_,d=[],T=[],x,w,R,O;if(o)for(O=0;O<a;O+=1)x=e[O],w=s(x,O),R=l.get(w).e,(R.f&Er)===0&&((me=(ve=R.nodes)==null?void 0:ve.a)==null||me.measure(),(_??(_=new Set)).add(R));for(O=0;O<a;O+=1){if(x=e[O],w=s(x,O),R=l.get(w).e,t.outrogroups!==null)for(const ue of t.outrogroups)ue.pending.delete(R),ue.done.delete(R);if((R.f&hn)!==0&&(za(R),o&&((Ve=(_e=R.nodes)==null?void 0:_e.a)==null||Ve.unfix(),(_??(_=new Set)).delete(R))),(R.f&Er)!==0)if(R.f^=Er,R===c)xo(R,null,n);else{var j=u?u.next:c;R===t.effect.last&&(t.effect.last=R.prev),R.prev&&(R.prev.next=R.next),R.next&&(R.next.prev=R.prev),Xr(t,u,R),Xr(t,R,j),xo(R,j,n),u=R,d=[],T=[],c=io(u.next);continue}if(R!==c){if(p!==void 0&&p.has(R)){if(d.length<T.length){var F=T[0],Q;u=F.prev;var C=d[0],A=d[d.length-1];for(Q=0;Q<d.length;Q+=1)xo(d[Q],F,n);for(Q=0;Q<T.length;Q+=1)p.delete(T[Q]);Xr(t,C.prev,A.next),Xr(t,u,C),Xr(t,A,F),c=F,u=A,O-=1,d=[],T=[]}else p.delete(R),xo(R,c,n),Xr(t,R.prev,R.next),Xr(t,R,u===null?t.effect.first:u.next),Xr(t,u,R),u=R;continue}for(d=[],T=[];c!==null&&c!==R;)(p??(p=new Set)).add(c),T.push(c),c=io(c.next);if(c===null)continue}(R.f&Er)===0&&d.push(R),u=R,c=io(R.next)}if(t.outrogroups!==null){for(const ue of t.outrogroups)ue.pending.size===0&&(Ii(t,ja(ue.done)),(Ue=t.outrogroups)==null||Ue.delete(ue));t.outrogroups.size===0&&(t.outrogroups=null)}if(c!==null||p!==void 0){var N=[];if(p!==void 0)for(R of p)(R.f&hn)===0&&N.push(R);for(;c!==null;)(c.f&hn)===0&&c!==t.fallback&&N.push(c),c=io(c.next);var se=N.length;if(se>0){var te=(r&Sc)!==0&&a===0?n:null;if(o){for(O=0;O<se;O+=1)(Y=(tt=N[O].nodes)==null?void 0:tt.a)==null||Y.measure();for(O=0;O<se;O+=1)(ie=(ge=N[O].nodes)==null?void 0:ge.a)==null||ie.fix()}xd(t,N,te)}}o&&Ar(()=>{var ue,P;if(_!==void 0)for(R of _)(P=(ue=R.nodes)==null?void 0:ue.a)==null||P.apply()})}function kd(t,e,n,r,s,o,a,l){var c=(a&ef)!==0?(a&rf)===0?Bf(n,!1,!1):Wr(n):null,p=(a&tf)!==0?Wr(s):null;return{v:c,i:p,e:kn(()=>(o(e,c??n,p??s,l),()=>{t.delete(r)}))}}function xo(t,e,n){if(t.nodes)for(var r=t.nodes.start,s=t.nodes.end,o=e&&(e.f&Er)===0?e.nodes.start:n;r!==null;){var a=ua(r);if(o.before(r),r===s)return;r=a}}function Xr(t,e,n){e===null?t.effect.first=n:e.next=n,n===null?t.effect.last=e:n.prev=e}function El(t,e,n=!1,r=!1,s=!1,o=!1){var a=t,l="";if(n)var c=t;J(()=>{var p=Ne;if(l!==(l=e()??"")){if(n){p.nodes=null,c.innerHTML=l,l!==""&&as(pr(c),c.lastChild);return}if(p.nodes!==null&&(nu(p.nodes.start,p.nodes.end),p.nodes=null),l!==""){var u=r?Ec:s?ff:void 0,_=Wa(r?"svg":s?"math":"template",u);_.innerHTML=l;var d=r||s?_:_.content;if(as(pr(d),d.lastChild),r||s)for(;pr(d);)a.before(pr(d));else a.before(d)}}})}function Te(t,e,n,r,s){var l,c;if((l=e.$$host)!=null&&l.$$shadowRoot){const p=Wa("slot");k(t,p);return}var o=(c=e.$$slots)==null?void 0:c[n],a=!1;o===!0&&(o=e.children,a=!0),o===void 0||o(t,a?()=>r:r)}function Al(t,e,n){var r=new Ga(t);no(()=>{var s=e()??null;r.ensure(s,s&&(o=>n(o,s)))},os)}function wd(t,e,n,r,s,o){var a=null,l=t,c=new Ga(l,!1);no(()=>{const p=e()||null;var u=Ec;if(p===null){c.ensure(null,null);return}return c.ensure(p,_=>{if(p){if(a=Wa(p,u),as(a,a),r){var d=null,T=a.appendChild(Ir());r(a,T),d==null||d.remove()}Ne.nodes.end=a,_.before(a)}}),()=>{}},os),Va(()=>{})}function Sd(t,e){var n=void 0,r;eu(()=>{n!==(n=e())&&(r&&(Qt(r),r=null),n&&(r=kn(()=>{qa(()=>n(t))})))})}function mu(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(e=0;e<s;e++)t[e]&&(n=mu(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Td(){for(var t,e,n=0,r="",s=arguments.length;n<s;n++)(t=arguments[n])&&(e=mu(t))&&(r&&(r+=" "),r+=e);return r}function _u(t){return typeof t=="object"?Td(t):t??""}const Cl=[...` 	
\r\f \v\uFEFF`];function $d(t,e,n){var r=t==null?"":""+t;if(e&&(r=r?r+" "+e:e),n){for(var s of Object.keys(n))if(n[s])r=r?r+" "+s:s;else if(r.length)for(var o=s.length,a=0;(a=r.indexOf(s,a))>=0;){var l=a+o;(a===0||Cl.includes(r[a-1]))&&(l===r.length||Cl.includes(r[l]))?r=(a===0?"":r.substring(0,a))+r.substring(l+1):a=l}}return r===""?null:r}function Rl(t,e=!1){var n=e?" !important;":";",r="";for(var s of Object.keys(t)){var o=t[s];o!=null&&o!==""&&(r+=" "+s+": "+o+n)}return r}function ni(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function Ed(t,e){if(e){var n="",r,s;if(Array.isArray(e)?(r=e[0],s=e[1]):r=e,t){t=String(t).replaceAll(/\/\*.*?\*\//g,"").trim();var o=!1,a=0,l=!1,c=[];r&&c.push(...Object.keys(r).map(ni)),s&&c.push(...Object.keys(s).map(ni));var p=0,u=-1;const w=t.length;for(var _=0;_<w;_++){var d=t[_];if(l?d==="/"&&t[_-1]==="*"&&(l=!1):o?o===d&&(o=!1):d==="/"&&t[_+1]==="*"?l=!0:d==='"'||d==="'"?o=d:d==="("?a++:d===")"&&a--,!l&&o===!1&&a===0){if(d===":"&&u===-1)u=_;else if(d===";"||_===w-1){if(u!==-1){var T=ni(t.substring(p,u).trim());if(!c.includes(T)){d!==";"&&_++;var x=t.substring(p,_).trim();n+=" "+x+";"}}p=_+1,u=-1}}}}return r&&(n+=Rl(r)),s&&(n+=Rl(s,!0)),n=n.trim(),n===""?null:n}return t==null?null:String(t)}function pn(t,e,n,r,s,o){var a=t[xi];if(a!==n||a===void 0){var l=$d(n,r,o);l==null?t.removeAttribute("class"):e?t.className=l:t.setAttribute("class",l),t[xi]=n}else if(o&&s!==o)for(var c in o){var p=!!o[c];(s==null||p!==!!s[c])&&t.classList.toggle(c,p)}return o}function ri(t,e={},n,r){for(var s in n){var o=n[s];e[s]!==o&&(n[s]==null?t.style.removeProperty(s):t.style.setProperty(s,o,r))}}function ws(t,e,n,r){var s=t[yi];if(s!==e){var o=Ed(e,r);o==null?t.removeAttribute("style"):t.style.cssText=o,t[yi]=e}else r&&(Array.isArray(r)?(ri(t,n==null?void 0:n[0],r[0]),ri(t,n==null?void 0:n[1],r[1],"important")):ri(t,n,r));return r}function bu(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function Pl(t,e){var n=!("__defaultValue"in t);!n&&t.__defaultValue===e||(t.__defaultValue=e,xu(t,!n||"__value"in t))}function xu(t,e){var n=t.__defaultValue,r=t.multiple,s=r?n??[]:null;if(!(r&&!Ua(s))){var o=t.selectedIndex,a=e&&r?new Set(t.selectedOptions):null;for(var l of t.options){var c=Ms(l);bu(l,r?s.includes(c):Gc(c,n))}if(e)if(a!==null)for(l of t.options){var p=a.has(l);l.selected!==p&&(l.selected=p)}else t.selectedIndex!==o&&(t.selectedIndex=o)}}function Po(t,e,n=!1){if(t.multiple){if(e==null)return;if(!Ua(e))return hf();for(var r of t.options)r.selected=e.includes(Ms(r));return}for(r of t.options){var s=Ms(r);if(Gc(s,e)){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function yo(t){var e=new MutationObserver(n=>{n.every(Ad)||("__defaultValue"in t&&xu(t,!1),"__value"in t&&Po(t,t.__value))});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Va(()=>{e.disconnect()})}function si(t,e,n=e){var r=new WeakSet,s=!0;zc(t,"change",o=>{var a=o?"[selected]":":checked",l;if(t.multiple)l=[].map.call(t.querySelectorAll(a),Ms);else{var c=t.querySelector(a)??t.querySelector("option:not([disabled])");l=c&&Ms(c)}n(l),t.__value=l,be!==null&&r.add(be)}),qa(()=>{var o=e();if(t===document.activeElement){var a=be;if(r.has(a))return}if(Po(t,o,s),s&&o===void 0){var l=t.querySelector(":checked");l!==null&&(o=Ms(l),n(o))}t.__value=o,s=!1})}function Ms(t){return"__value"in t?t.__value:t.value}function Ad(t){if(t.target.closest("selectedcontent")!==null)return!0;if(t.type==="childList"){var e=[...t.addedNodes,...t.removedNodes];return e.length>0&&e.every(n=>n.nodeName==="SELECTEDCONTENT")}return!1}const lo=Symbol("class"),co=Symbol("style"),yu=Symbol("is custom element"),ku=Symbol("is html"),Cd=Wi?"input":"INPUT",Rd=Wi?"option":"OPTION",wu=Wi?"select":"SELECT";function Ae(t,e,n,r){var s=Su(t);s[e]!==(s[e]=n)&&(e==="loading"&&(t[Ju]=n),n==null?t.removeAttribute(e):typeof n!="string"&&Tu(t).has(e)?t[e]=n:t.setAttribute(e,n))}function Pd(t,e,n,r,s=!1,o=!1){var a=Su(t),l=a[yu],c=!a[ku],p=e||{},u=t.nodeName===Rd,_=t.nodeName===wu;for(var d in e)!(d in n)&&d[0]+d[1]!=="$$"&&(n[d]=null);n.class?n.class=_u(n.class):n[lo]&&(n.class=null),n[co]&&(n.style??(n.style=null));var T=Tu(t);if(t.nodeName===Cd&&"type"in n&&("value"in n||"__value"in n)){var x=n.type;(x!==p.type||x===void 0&&t.hasAttribute("type"))&&(p.type=x,Ae(t,"type",x))}for(const C in n){let A=n[C];if(u&&C==="value"&&A==null){t.value=t.__value="",p[C]=A;continue}if(C==="class"){var w=t.namespaceURI==="http://www.w3.org/1999/xhtml";pn(t,w,A,r,e==null?void 0:e[lo],n[lo]),p[C]=A,p[lo]=n[lo];continue}if(C==="style"){ws(t,A,e==null?void 0:e[co],n[co]),p[C]=A,p[co]=n[co];continue}var R=p[C];if(!(A===R&&!(A===void 0&&t.hasAttribute(C)))){p[C]=A;var O=C[0]+C[1];if(O!=="$$")if(O==="on"){const N={},se="$$"+C;let te=C.slice(2);var j=td(te);if(Jf(te)&&(te=te.slice(0,-7),N.capture=!0),!j&&R){if(A!=null)continue;t.removeEventListener(te,p[se],N),p[se]=null}if(j)L(te,t,A),er([te]);else if(A!=null){let ve=function(me){p[C].call(this,me)};p[se]=hu(te,t,ve,N)}}else if(C==="style")Ae(t,C,A);else if(C==="autofocus")Oc(t,!!A);else if(!l&&(C==="__value"||C==="value"&&A!=null))t.value=t.__value=A;else if(C==="selected"&&u)bu(t,A);else{var F=C;c||(F=rd(F));var Q=F==="defaultValue"||F==="defaultChecked";if(_&&F==="defaultValue")continue;if(A==null&&!l&&!Q)if(a[C]=null,F==="value"||F==="checked"){let N=t;const se=e===void 0;if(F==="value"){let te=N.defaultValue;N.removeAttribute(F),N.defaultValue=te,N.value=N.__value=se?te:null}else{let te=N.defaultChecked;N.removeAttribute(F),N.defaultChecked=te,N.checked=se?te:!1}}else t.removeAttribute(C);else Q||(l||typeof A!="string")&&T.has(F)?(t[F]=A,F in a&&(a[F]=Et)):typeof A!="function"&&Ae(t,F,A)}}}return p}function Il(t,e,n=[],r=[],s=[],o,a=!1,l=!1){Mc(s,n,r,c=>{var p=void 0,u={},_=t.nodeName===wu,d=!1;if(eu(()=>{var x=e(...c.map(i)),w=Pd(t,p,x,o,a,l);if(d&&_){var R=t;"defaultValue"in x&&Pl(R,x.defaultValue),"value"in x&&Po(R,x.value)}for(let j of Object.getOwnPropertySymbols(u))x[j]||Qt(u[j]);for(let j of Object.getOwnPropertySymbols(x)){var O=x[j];j.description===df&&(!p||O!==p[j])&&(u[j]&&Qt(u[j]),u[j]=kn(()=>Sd(t,()=>O))),w[j]=O}p=w}),_){var T=t;qa(()=>{var x=p;"defaultValue"in x&&Pl(T,x.defaultValue),Po(T,x.value,!0),yo(T)})}d=!0})}function Su(t){return t[ya]??(t[ya]={[yu]:t.nodeName.includes("-"),[ku]:t.namespaceURI===$c})}var Nl=new Map;function Tu(t){var e=t.getAttribute("is")||t.nodeName,n=Nl.get(e);if(n)return n;Nl.set(e,n=new Set);for(var r,s=t,o=Element.prototype;o!==s;){r=bc(s);for(var a in r)r[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&n.add(a);s=Bi(s)}return n}function ut(t,e,n=e){var r=new WeakSet;zc(t,"input",async s=>{var o=s?t.defaultValue:t.value;if(o=oi(t)?ai(o):o,n(o),be!==null&&r.add(be),await tl(),o!==(o=e())){var a=t.selectionStart,l=t.selectionEnd,c=t.value.length;if(t.value=o??"",l!==null){var p=t.value.length;a===l&&l===c&&p>c?(t.selectionStart=p,t.selectionEnd=p):(t.selectionStart=a,t.selectionEnd=Math.min(l,p))}}}),qr(e)==null&&t.value&&(n(oi(t)?ai(t.value):t.value),be!==null&&r.add(be)),Qi(()=>{var s=e();if(t===document.activeElement){var o=be;if(r.has(o))return}oi(t)&&s===ai(t.value)||t.type==="date"&&!s&&!t.value||s!==t.value&&(t.value=s??"")})}function oi(t){var e=t.type;return e==="number"||e==="range"}function ai(t){return t===""?null:+t}function ii(t,e){return t===e||(t==null?void 0:t[Rr])===e}function Zs(t=Vi(),e,n,r){var s=pt.r,o=Ne;return qa(()=>{var a,l;return Qi(()=>{a=l,l=[],qr(()=>{ii(n(...l),t)||(e(t,...l),a&&ii(n(...a),t)&&e(null,...a))})}),()=>{let c=o;for(;c!==s&&c.parent!==null&&c.parent.f&Ra;)c=c.parent;const p=()=>{l&&ii(n(...l),t)&&e(null,...l)},u=c.teardown;c.teardown=()=>{p(),u==null||u()}}}),t}function $u(t=!1){const e=pt,n=e.l.u;if(!n)return;let r=()=>cs(e.s);if(t){let s=0,o={};const a=Gs(()=>{let l=!1;const c=e.s;for(const p in c)c[p]!==o[p]&&(o[p]=c[p],l=!0);return l&&s++,s});r=()=>i(a)}n.b.length&&Gf(()=>{Ol(e,r),_i(n.b)}),Xt(()=>{const s=qr(()=>n.m.map(Zu));return()=>{for(const o of s)typeof o=="function"&&o()}}),n.a.length&&Xt(()=>{Ol(e,r),_i(n.a)})}function Ol(t,e){if(t.l.s)for(const n of t.l.s)i(n);e()}function Id(t){var e=Wr(0);return function(){return arguments.length===1?(h(e,i(e)+1),arguments[0]):(i(e),t())}}const Nd={get(t,e){if(!t.exclude.includes(e))return i(t.version),e in t.special?t.special[e]():t.props[e]},set(t,e,n){if(!(e in t.special)){var r=Ne;try{Jn(t.parent_effect),t.special[e]=kt({get[e](){return t.props[e]}},e,Tc)}finally{Jn(r)}}return t.special[e](n),xl(t.version),!0},getOwnPropertyDescriptor(t,e){if(!t.exclude.includes(e)&&e in t.props)return{enumerable:!0,configurable:!0,value:t.props[e]}},deleteProperty(t,e){return t.exclude.includes(e)||(t.exclude.push(e),xl(t.version)),!0},has(t,e){return t.exclude.includes(e)?!1:e in t.props},ownKeys(t){return Reflect.ownKeys(t.props).filter(e=>!t.exclude.includes(e))}};function Se(t,e){return new Proxy({props:t,exclude:e,special:{},version:Wr(0),parent_effect:Ne},Nd)}const Od={get(t,e){let n=t.props.length;for(;n--;){let r=t.props[n];if(ao(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r)return r[e]}},set(t,e,n){let r=t.props.length;for(;r--;){let s=t.props[r];ao(s)&&(s=s());const o=rs(s,e);if(o&&o.set)return o.set(n),!0}return!1},getOwnPropertyDescriptor(t,e){let n=t.props.length;for(;n--;){let r=t.props[n];if(ao(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r){const s=rs(r,e);return s&&!s.configurable&&(s.configurable=!0),s}}},has(t,e){if(e===Rr||e===wc)return!1;for(let n of t.props)if(ao(n)&&(n=n()),n!=null&&e in n)return!0;return!1},ownKeys(t){const e=[];for(let n of t.props)if(ao(n)&&(n=n()),!!n){for(const r in n)e.includes(r)||e.push(r);for(const r of Object.getOwnPropertySymbols(n))e.includes(r)||e.push(r)}return e}};function $e(...t){return new Proxy({props:t},Od)}function kt(t,e,n,r){var Q;var s=!Js||(n&of)!==0,o=(n&af)!==0,a=(n&lf)!==0,l=r,c=!0,p=void 0,u=()=>a&&s?(p??(p=Gs(r)),i(p)):(c&&(c=!1,l=a?qr(r):r),l);let _;if(o){var d=Rr in t||wc in t;_=((Q=rs(t,e))==null?void 0:Q.set)??(d&&e in t?C=>t[e]=C:void 0)}var T,x=!1;o?[T,x]=Pf(()=>t[e]):T=t[e],T===void 0&&r!==void 0&&(T=u(),_&&(s&&wf(),_(T)));var w;if(s?w=()=>{var C=t[e];return C===void 0?u():(c=!0,C)}:w=()=>{var C=t[e];return C!==void 0&&(l=void 0),C===void 0?l:C},s&&(n&Tc)===0)return w;if(_){var R=t.$$legacy;return(function(C,A){return arguments.length>0?((!s||!A||R||x)&&_(A?w():C),C):w()})}var O=!1,j=((n&sf)!==0?Gs:Gi)(()=>(O=!1,w()));o&&i(j);var F=Ne;return(function(C,A){if(arguments.length>0){const N=A?i(j):s&&o?Xe(C):C;return h(j,N),O=!0,l!==void 0&&(l=N),C}return Vr&&O||(F.f&Sn)!==0?j.v:i(j)})}function ro(t){pt===null&&Rc(),Js&&pt.l!==null?zd(pt).m.push(t):Xt(()=>{const e=qr(t);if(typeof e=="function")return e})}function rl(t){pt===null&&Rc(),ro(()=>()=>qr(t))}function zd(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}const Md="5";var mc;typeof window<"u"&&((mc=window.__svelte??(window.__svelte={})).v??(mc.v=new Set)).add(Md);const us=()=>window.__IDE_BOOTSTRAP__||{};function Ld(t){const{rootPath:e="",session:n=""}=us();return`${e}/api/sessions/${encodeURIComponent(n)}/ide${t}`}async function xt(t,e={}){const n=await fetch(Ld(t),e),r=await n.json().catch(()=>({}));if(!n.ok){const s=new Error(r.error||"Request failed");throw Object.assign(s,r),s}return r}const $t=(t,e)=>`/ssh-connections/${encodeURIComponent(t)}${e}`,Oe={chat:async(t,e=80)=>{const{rootPath:n=""}=us(),r=`${n}/api/sessions/${encodeURIComponent(t)}/ide/chat?limit=${e}`,s=await fetch(r),o=await s.json().catch(()=>({}));if(!s.ok)throw new Error(o.error||"Could not load chat");return o},browse:async(t="")=>{const{rootPath:e=""}=us(),n=`${e}/api/ide/browse?path=${encodeURIComponent(t)}`,r=await fetch(n),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not browse folders");return s},sessionAgent:async t=>{const{rootPath:e=""}=us(),n=await fetch(`${e}/api/sessions/${encodeURIComponent(t)}/agent`),r=await n.json().catch(()=>({}));if(!n.ok)throw new Error(r.error||"Could not read agent settings");return r},setSessionAgent:async(t,e)=>{const{rootPath:n=""}=us(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(t)}/agent`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({agent:e,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not switch agent");return s},setSessionModel:async(t,e)=>{const{rootPath:n=""}=us(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(t)}/model`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:e,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change model");return s},setSessionEffort:async(t,e)=>{const{rootPath:n=""}=us(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(t)}/effort`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({effort:e,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change effort");return s},browseOn:(t,e="")=>xt($t(t,`/browse?path=${encodeURIComponent(e)}`)),setWorkspaceRoot:(t,e,n)=>xt($t(t,"/workspace-root"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({workspace_root:e,label:n})}),agentContext:t=>xt($t(t,"/agent-context")),hostKey:t=>xt($t(t,"/host-key")),trustHost:t=>xt($t(t,"/host-key"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({accept:!0})}),listConnections:()=>xt("/ssh-connections"),createConnection:t=>xt("/ssh-connections",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),deleteConnection:t=>xt($t(t,""),{method:"DELETE"}),connect:(t,e)=>xt($t(t,"/connect"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e||""})}),status:t=>xt($t(t,"/status?reconnect=1")),listFiles:(t,e)=>xt($t(t,`/files?path=${encodeURIComponent(e)}`)),searchFiles:(t,e,n)=>xt($t(t,`/files/search?path=${encodeURIComponent(e)}&query=${encodeURIComponent(n)}`)),readFile:(t,e)=>xt($t(t,`/file?path=${encodeURIComponent(e)}`)),saveFile:(t,e,n)=>xt($t(t,"/file"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:e,content:n})}),fs:(t,e)=>xt($t(t,"/fs"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),git:(t,e)=>xt($t(t,"/git"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),focusTerminal:t=>xt($t(t,"/focus-terminal"),{method:"POST"}),updateConnection:(t,e)=>xt($t(t,""),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),listTerminals:t=>xt($t(t,"/terminals")),closeTerminal:(t,e)=>xt($t(t,`/terminals/${e}`),{method:"DELETE"}),getWorkspace:t=>xt($t(t,"/workspace")),saveWorkspace:(t,e)=>xt($t(t,"/workspace"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};var Lo,Do,Fo,Ho,Bo,Uo,jo,Wo,Vo,qo,Go,Ko,Yo,Zo,Xo,Qo,Jo,ea,ta,na,ra,sa,oa,aa,ia;class Dd{constructor(){ae(this,Lo,z(Xe([])));ae(this,Do,z(""));ae(this,Fo,z("idle"));ae(this,Ho,z(""));ae(this,Bo,z("Ready"));ae(this,Uo,z("No file open"));ae(this,jo,z("."));ae(this,Wo,z(Xe([])));ae(this,Vo,z(Xe({})));ae(this,qo,z(Xe({})));ae(this,Go,z(""));ae(this,Ko,z(Xe([])));ae(this,Yo,z(""));ae(this,Zo,z(""));ae(this,Xo,z(""));ae(this,Qo,z(Xe([])));ae(this,Jo,z(""));ae(this,ea,z(!1));ae(this,ta,z(!1));ae(this,na,z(0));ae(this,ra,z(0));ae(this,sa,z(!1));ae(this,oa,z(""));ae(this,aa,z(Xe([])));ae(this,ia,z(!1));Ie(this,"restoredKey","");Ie(this,"persistTimer",null)}get connections(){return i(m(this,Lo))}set connections(e){h(m(this,Lo),e,!0)}get connectionId(){return i(m(this,Do))}set connectionId(e){h(m(this,Do),e,!0)}get connectionState(){return i(m(this,Fo))}set connectionState(e){h(m(this,Fo),e,!0)}get connectionError(){return i(m(this,Ho))}set connectionError(e){h(m(this,Ho),e,!0)}get statusText(){return i(m(this,Bo))}set statusText(e){h(m(this,Bo),e,!0)}get detailText(){return i(m(this,Uo))}set detailText(e){h(m(this,Uo),e,!0)}get path(){return i(m(this,jo))}set path(e){h(m(this,jo),e,!0)}get entries(){return i(m(this,Wo))}set entries(e){h(m(this,Wo),e,!0)}get expanded(){return i(m(this,Vo))}set expanded(e){h(m(this,Vo),e,!0)}get treeChildren(){return i(m(this,qo))}set treeChildren(e){h(m(this,qo),e,!0)}get filter(){return i(m(this,Go))}set filter(e){h(m(this,Go),e,!0)}get tabs(){return i(m(this,Ko))}set tabs(e){h(m(this,Ko),e,!0)}get activeKey(){return i(m(this,Yo))}set activeKey(e){h(m(this,Yo),e,!0)}get gitOutput(){return i(m(this,Zo))}set gitOutput(e){h(m(this,Zo),e,!0)}get gitStatus(){return i(m(this,Xo))}set gitStatus(e){h(m(this,Xo),e,!0)}get gitBranches(){return i(m(this,Qo))}set gitBranches(e){h(m(this,Qo),e,!0)}get gitBranch(){return i(m(this,Jo))}set gitBranch(e){h(m(this,Jo),e,!0)}get needsHostKey(){return i(m(this,ea))}set needsHostKey(e){h(m(this,ea),e,!0)}get notARepo(){return i(m(this,ta))}set notARepo(e){h(m(this,ta),e,!0)}get gitAhead(){return i(m(this,na))}set gitAhead(e){h(m(this,na),e,!0)}get gitBehind(){return i(m(this,ra))}set gitBehind(e){h(m(this,ra),e,!0)}get gitHasUpstream(){return i(m(this,sa))}set gitHasUpstream(e){h(m(this,sa),e,!0)}get gitBusy(){return i(m(this,oa))}set gitBusy(e){h(m(this,oa),e,!0)}get gitCommits(){return i(m(this,aa))}set gitCommits(e){h(m(this,aa),e,!0)}get gitHistoryLoaded(){return i(m(this,ia))}set gitHistoryLoaded(e){h(m(this,ia),e,!0)}get connection(){return this.connections.find(e=>e.id===this.connectionId)||null}get activeTab(){return this.tabs.find(e=>e.key===this.activeKey)||null}get visibleEntries(){const e=this.filter.trim().toLowerCase();return e?this.entries.filter(n=>n.name.toLowerCase().includes(e)):this.entries}get dirtyCount(){return this.tabs.filter(e=>e.dirty).length}get gitDirtyCount(){return this.gitStatus.split(`
`).filter(e=>e.trim()&&!e.startsWith("##")).length}resetWorkspaceView(){this.tabs=[],this.activeKey="",this.restoredKey="",this.path=".",this.entries=[],this.expanded={},this.treeChildren={},this.filter="",this.gitOutput="",this.gitStatus="",this.gitBranches=[],this.gitBranch="",this.needsHostKey=!1,this.notARepo=!1,this.gitAhead=0,this.gitBehind=0,this.gitHasUpstream=!1,this.gitCommits=[],this.gitHistoryLoaded=!1}setStatus(e,n){this.statusText=e,n!==void 0&&(this.detailText=n)}async loadConnections(){try{const e=await Oe.listConnections();this.connections=e.connections||[],!this.connectionId&&this.connections.length&&(this.connectionId=this.connections[0].id)}catch(e){this.setStatus(e.message||"Could not load connections")}}async refreshStatus(){var e,n,r;if(this.connectionId)try{const s=await Oe.status(this.connectionId);if(s.connected)this.connectionState="connected",this.connectionError="",this.setStatus(`Connected · ${((e=this.connection)==null?void 0:e.label)||"SSH workspace"}`,`SSH terminal: ${s.window_name||"open"}`),await this.restoreWorkspace();else{this.connectionState="reconnect",this.entries=[],this.connectionError=s.reason||"";const o=(n=this.connection)!=null&&n.has_password?"Auto-reconnect failed — select Connect to retry":"Select Connect to reopen SSH";this.setStatus(`Reconnect required · ${((r=this.connection)==null?void 0:r.label)||"SSH workspace"}`,s.reason?`${s.reason} — ${o}`:o)}}catch(s){this.connectionState="error",this.connectionError=s.message||"",this.setStatus(s.message||"Could not check SSH connection")}}async connect(e){var n;if(this.connectionId){this.connectionState="connecting",this.setStatus("Connecting…");try{const r=await Oe.connect(this.connectionId,e);this.connectionState="connected",this.connectionError="",this.setStatus(`Connected · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,`SSH terminal: ${r.window_name||"open"}`),await this.restoreWorkspace()}catch(r){this.connectionState="error",this.connectionError=r.message||"",this.setStatus(r.message||"Could not connect"),this.needsHostKey=!!r.needs_host_key}}}async refreshFiles(e){if(!this.connectionId)return;const n=e||this.path||".";try{const r=await Oe.listFiles(this.connectionId,n);this.path=r.path||n,this.entries=r.entries||[],this.remember()}catch(r){this.setStatus(r.message||"Could not list remote files")}}async revealDirectory(e){if(!e||e===".")return;const n={...this.treeChildren};delete n[e],this.treeChildren=n,this.expanded={...this.expanded,[e]:!0};try{const r=await Oe.listFiles(this.connectionId,e);this.treeChildren={...this.treeChildren,[e]:r.entries||[]}}catch(r){this.setStatus(r.message||"Could not expand folder")}}async toggleDirectory(e){if(this.expanded[e]){const n={...this.expanded};delete n[e],this.expanded=n;return}if(this.expanded={...this.expanded,[e]:!0},!this.treeChildren[e])try{const n=await Oe.listFiles(this.connectionId,e);this.treeChildren={...this.treeChildren,[e]:n.entries||[]}}catch(n){this.setStatus(n.message||"Could not expand folder")}}openDiffTab(e,n){const r=`${this.connectionId}|diff:${e}`,s=this.tabs.find(a=>a.key===r);if(s)return s.content=n,s.saved=n,this.activeKey=r,s;const o={key:r,path:`${e} (diff)`,content:n,saved:n,dirty:!1,readOnly:!0,language:"plaintext"};return this.tabs=[...this.tabs,o],this.activeKey=r,o}async openFile(e){if(!this.connectionId)return null;const n=`${this.connectionId}|${e}`,r=this.tabs.find(s=>s.key===n);if(r)return this.activeKey=n,r;try{const s=await Oe.readFile(this.connectionId,e),o={key:`${this.connectionId}|${s.path}`,path:s.path,content:s.content||"",saved:s.content||"",dirty:!1};return this.tabs=[...this.tabs,o],this.activeKey=o.key,this.setStatus("Opened",o.path),this.remember(),o}catch(s){return this.setStatus(s.message||"Could not open remote file"),null}}updateContent(e,n){this.tabs=this.tabs.map(r=>r.key===e?{...r,content:n,dirty:n!==r.saved}:r),this.remember()}closeTab(e){var r;const n=this.tabs.find(s=>s.key===e);n!=null&&n.dirty&&!confirm(`Discard unsaved changes to ${n.path}?`)||(this.tabs=this.tabs.filter(s=>s.key!==e),this.activeKey===e&&(this.activeKey=((r=this.tabs.at(-1))==null?void 0:r.key)||""),this.remember())}async saveActive(){const e=this.activeTab;if(e)try{await Oe.saveFile(this.connectionId,e.path,e.content),this.tabs=this.tabs.map(n=>n.key===e.key?{...n,saved:n.content,dirty:!1}:n),this.setStatus(`Saved ${e.path}`,e.path),this.remember()}catch(n){this.setStatus(n.message||"Could not save file")}}async restoreWorkspace(){const e=`${this.connectionId}`;if(!e)return;let n=null;try{n=await Oe.getWorkspace(this.connectionId)}catch{n=null}if(await this.refreshFiles((n==null?void 0:n.last_directory)||"."),this.restoredKey===e)return;this.restoredKey=e;const r=(n==null?void 0:n.buffers)||{};for(const o of((n==null?void 0:n.tabs)||[]).slice(0,12)){const a=await this.openFile(o);a&&Object.prototype.hasOwnProperty.call(r,o)&&this.updateContent(a.key,r[o])}const s=this.tabs.find(o=>o.path===(n==null?void 0:n.active_path));s&&(this.activeKey=s.key)}remember(){this.persistTimer&&clearTimeout(this.persistTimer),this.persistTimer=setTimeout(()=>this.persist(),1500)}async persist(){var n;if(!this.connectionId)return;const e={};for(const r of this.tabs)r.dirty&&(e[r.path]=r.content);try{await Oe.saveWorkspace(this.connectionId,{tabs:this.tabs.map(r=>r.path).slice(0,50),active_path:((n=this.activeTab)==null?void 0:n.path)||"",last_directory:this.path||".",buffers:e})}catch{}}async runGit(e,n={}){try{const r=await Oe.git(this.connectionId,{action:e,path:this.path||".",...n});return r.not_a_repo?(this.gitOutput=r.error||"This folder is not a Git repository.",this.gitStatus="",this.gitBranches=[],this.gitBranch="",this.gitCommits=[],this.gitHistoryLoaded=!1,this.notARepo=!0,null):(this.notARepo=!1,this.gitAhead=r.ahead||0,this.gitBehind=r.behind||0,this.gitHasUpstream=!!r.has_upstream,e==="log"?(this.gitCommits=r.commits||[],this.gitHistoryLoaded=!0):e!=="show"&&(this.gitOutput=r.output||r.status||""),this.gitStatus=r.status||"",this.gitBranches=r.branches||[],this.gitBranch=r.current_branch||"",["commit","switch","create_branch","pull","push","fetch"].includes(e)&&(this.gitHistoryLoaded=!1),r)}catch(r){return this.gitOutput=r.message||"Git command failed",null}}}Lo=new WeakMap,Do=new WeakMap,Fo=new WeakMap,Ho=new WeakMap,Bo=new WeakMap,Uo=new WeakMap,jo=new WeakMap,Wo=new WeakMap,Vo=new WeakMap,qo=new WeakMap,Go=new WeakMap,Ko=new WeakMap,Yo=new WeakMap,Zo=new WeakMap,Xo=new WeakMap,Qo=new WeakMap,Jo=new WeakMap,ea=new WeakMap,ta=new WeakMap,na=new WeakMap,ra=new WeakMap,sa=new WeakMap,oa=new WeakMap,aa=new WeakMap,ia=new WeakMap;const v=new Dd;Af();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Fd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Hd=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const zl=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();var Bd=gu("<svg><!><!></svg>");function Ee(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]),r=Se(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);vn(e,!1);let s=kt(e,"name",8,void 0),o=kt(e,"color",8,"currentColor"),a=kt(e,"size",8,24),l=kt(e,"strokeWidth",8,2),c=kt(e,"absoluteStrokeWidth",8,!1),p=kt(e,"iconNode",24,()=>[]);$u();var u=Bd();Il(u,(T,x,w)=>({...Fd,...T,...r,width:a(),height:a(),stroke:o(),"stroke-width":x,class:w}),[()=>Hd(r)?void 0:{"aria-hidden":"true"},()=>(cs(c()),cs(l()),cs(a()),qr(()=>c()?Number(l())*24/Number(a()):l())),()=>(cs(zl),cs(s()),cs(n),qr(()=>zl("lucide-icon","lucide",s()?`lucide-${s()}`:"",n.class)))]);var _=S(u);_t(_,1,p,nl,(T,x)=>{var w=Ft(()=>Xu(i(x),2));let R=()=>i(w)[0],O=()=>i(w)[1];var j=he(),F=K(j);wd(F,R,!0,(Q,C)=>{Il(Q,()=>({...O()}))}),k(T,j)});var d=g(_);Te(d,e,"default",{}),k(t,u),gn()}function Ud(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"m21 8-4-4-4 4"}],["path",{d:"M17 4v16"}]];Ee(t,$e({name:"arrow-down-up"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function jd(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];Ee(t,$e({name:"arrow-up"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function $a(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 6 9 17l-5-5"}]];Ee(t,$e({name:"check"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function Cr(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];Ee(t,$e({name:"chevron-down"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function Ea(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m9 18 6-6-6-6"}]];Ee(t,$e({name:"chevron-right"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function li(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];Ee(t,$e({name:"circle-alert"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function Wd(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];Ee(t,$e({name:"circle-check"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function Vd(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]];Ee(t,$e({name:"circle-dot"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function qd(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]];Ee(t,$e({name:"circle-user"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function Gd(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];Ee(t,$e({name:"circle"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function Kd(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}],["path",{d:"m9 10-5 5 5 5"}]];Ee(t,$e({name:"corner-down-left"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function Yd(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]];Ee(t,$e({name:"corner-left-up"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function Zd(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]];Ee(t,$e({name:"ellipsis"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function Xd(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];Ee(t,$e({name:"external-link"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function Ml(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m5 16-3 3 3 3"}],["path",{d:"m9 22 3-3-3-3"}]];Ee(t,$e({name:"file-code-corner"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function Qd(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]];Ee(t,$e({name:"file-diff"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function Jd(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]];Ee(t,$e({name:"file-plus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function sl(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}]];Ee(t,$e({name:"file"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function ep(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"}]];Ee(t,$e({name:"files"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function ci(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];Ee(t,$e({name:"folder-open"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function tp(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];Ee(t,$e({name:"folder-plus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function np(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];Ee(t,$e({name:"folder"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function Ni(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 6a9 9 0 0 0-9 9V3"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}]];Ee(t,$e({name:"git-branch"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function rp(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 16h.01"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["path",{d:"M21.946 12.013H2.054"}],["path",{d:"M6 16h.01"}]];Ee(t,$e({name:"hard-drive"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function sp(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];Ee(t,$e({name:"history"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function op(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];Ee(t,$e({name:"link-2"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function vr(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]];Ee(t,$e({name:"loader"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function Ll(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}]];Ee(t,$e({name:"message-square"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function ap(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m14 10 7-7"}],["path",{d:"M20 10h-6V4"}],["path",{d:"m3 21 7-7"}],["path",{d:"M4 14h6v6"}]];Ee(t,$e({name:"minimize-2"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function ip(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}]];Ee(t,$e({name:"minus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function lp(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{d:"M10 19v-3.96 3.15"}],["path",{d:"M7 19h5"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2"}]];Ee(t,$e({name:"monitor-smartphone"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function cp(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}]];Ee(t,$e({name:"panel-bottom"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function up(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]];Ee(t,$e({name:"panel-left"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function fp(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"}]];Ee(t,$e({name:"paperclip"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function Ao(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];Ee(t,$e({name:"plus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function Oi(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];Ee(t,$e({name:"refresh-cw"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function ol(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];Ee(t,$e({name:"search"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function Dl(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];Ee(t,$e({name:"server"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function Fl(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M14 17H5"}],["path",{d:"M19 7h-9"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]];Ee(t,$e({name:"settings-2"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function dp(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]];Ee(t,$e({name:"shield-alert"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function ui(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];Ee(t,$e({name:"sparkles"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function Hl(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]];Ee(t,$e({name:"square-terminal"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function pp(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];Ee(t,$e({name:"square"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function Bl(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];Ee(t,$e({name:"trash-2"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function hp(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]];Ee(t,$e({name:"undo-2"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}function Co(t,e){const n=Se(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];Ee(t,$e({name:"x"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=he(),l=K(a);Te(l,e,"default",{}),k(s,a)},$$slots:{default:!0}}))}var vp=I('<span class="w-[14px] shrink-0"></span>'),gp=gu('<svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1.5 3.5h4l1.2 1.4h7.8v7.6H1.5z" fill="#c09553"></path></svg>'),mp=I(`<div draggable="true" role="treeitem" tabindex="0"><!> <span class="flex shrink-0 items-center"><!></span> <span class="flex-1 truncate text-vs-fg"> </span> <span class="pointer-events-none flex shrink-0 gap-0.5 opacity-0 transition-opacity
               group-hover:pointer-events-auto group-hover:opacity-100
               focus-within:pointer-events-auto focus-within:opacity-100"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Rename"><span class="text-[11px] leading-none">✎</span></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Delete"><span class="text-[11px] leading-none">🗑</span></button></span></div> <!>`,1);function Eu(t,e){vn(e,!0);const n=Ft(()=>e.dir==="."?e.entry.name:`${e.dir}/${e.entry.name}`),r=Ft(()=>!!v.expanded[i(n)]),s=Ft(()=>v.treeChildren[i(n)]||[]),o=Ft(()=>{var Y;return((Y=v.activeTab)==null?void 0:Y.path)===i(n)});async function a(){e.entry.is_dir?await v.toggleDirectory(i(n)):await v.openFile(i(n))}let l=z(!1);function c(Y){Y.stopPropagation(),Y.dataTransfer.effectAllowed="move",Y.dataTransfer.setData("text/x-ide-path",i(n))}function p(Y){!e.entry.is_dir||!Y.dataTransfer.types.includes("text/x-ide-path")||(Y.preventDefault(),Y.dataTransfer.dropEffect="move",h(l,!0))}async function u(Y){if(h(l,!1),!e.entry.is_dir)return;Y.preventDefault(),Y.stopPropagation();const ge=Y.dataTransfer.getData("text/x-ide-path");if(!ge||ge===i(n))return;if(i(n)===ge||i(n).startsWith(`${ge}/`)){v.setStatus("Cannot move a folder into itself");return}const ie=ge.split("/").pop(),ue=i(n)==="."?ie:`${i(n)}/${ie}`;if(ue!==ge)try{await Oe.fs(v.connectionId,{action:"rename",path:ge,new_path:ue}),await v.refreshFiles(),v.setStatus(`Moved ${ie} to ${i(n)}`)}catch(P){v.setStatus(P.message||"Could not move")}}function _(Y){var ge;Y.preventDefault(),Y.stopPropagation(),(ge=v.openTreeMenu)==null||ge.call(v,{path:i(n),isDir:e.entry.is_dir,x:Y.clientX,y:Y.clientY})}async function d(Y){if(Y.stopPropagation(),!!confirm(`Delete ${i(n)}? Folders must already be empty.`))try{await Oe.fs(v.connectionId,{action:"delete",path:i(n)}),await v.refreshFiles()}catch(ge){v.setStatus(ge.message||"Could not delete")}}async function T(Y){Y.stopPropagation();const ge=prompt("Rename to (relative path):",i(n));if(!(!ge||ge===i(n)))try{await Oe.fs(v.connectionId,{action:"rename",path:i(n),new_path:ge}),await v.refreshFiles()}catch(ie){v.setStatus(ie.message||"Could not rename")}}var x=mp(),w=K(x);let R;var O=S(w);{var j=Y=>{var ge=he(),ie=K(ge);{var ue=fe=>{Cr(fe,{size:14,class:"shrink-0 text-vs-muted"})},P=fe=>{Ea(fe,{size:14,class:"shrink-0 text-vs-muted"})};U(ie,fe=>{i(r)?fe(ue):fe(P,-1)})}k(Y,ge)},F=Y=>{var ge=vp();k(Y,ge)};U(O,Y=>{e.entry.is_dir?Y(j):Y(F,-1)})}var Q=g(O,2),C=S(Q);{var A=Y=>{var ge=gp();k(Y,ge)},N=Y=>{op(Y,{size:14,class:"text-vs-muted"})},se=Y=>{sl(Y,{size:14,class:"text-vs-blue"})};U(C,Y=>{e.entry.is_dir?Y(A):e.entry.is_symlink?Y(N,1):Y(se,-1)})}var te=g(Q,2),ve=le(te,!0),me=g(te,2),_e=S(me),Ve=g(_e,2),Ue=g(w,2);{var tt=Y=>{var ge=he(),ie=K(ge);_t(ie,17,()=>i(s),ue=>ue.name,(ue,P)=>{{let fe=Ft(()=>e.depth+1);Eu(ue,{get entry(){return i(P)},get dir(){return i(n)},get depth(){return i(fe)}})}}),k(Y,ge)};U(Ue,Y=>{e.entry.is_dir&&i(r)&&Y(tt)})}J(()=>{R=pn(w,1,"group flex cursor-pointer items-center gap-1 py-[2px] pr-1 text-[13px] hover:bg-vs-hover",null,R,{"bg-vs-active":i(o),"ring-1":i(l),"ring-vs-accent":i(l)}),ws(w,`padding-left: ${8+e.depth*12}px`),Ae(w,"aria-expanded",e.entry.is_dir?i(r):void 0),Ae(w,"aria-selected",i(o)),Ae(w,"title",i(n)),X(ve,e.entry.name),Ae(_e,"aria-label",`Rename ${e.entry.name??""}`),Ae(Ve,"aria-label",`Delete ${e.entry.name??""}`)}),L("click",w,a),L("keydown",w,Y=>{(Y.key==="Enter"||Y.key===" ")&&(Y.preventDefault(),a())}),L("contextmenu",w,_),Ht("dragstart",w,c),Ht("dragover",w,p),Ht("dragleave",w,()=>h(l,!1)),Ht("drop",w,u),L("click",_e,T),L("click",Ve,d),k(t,x),gn()}er(["click","keydown","contextmenu"]);var _p=I('<form class="px-2 pb-1"><input class="w-full rounded-sm border border-vs-accent bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none"/></form>'),bp=I('<p class="px-4 py-2 text-xs text-vs-muted">No folder opened.</p>'),xp=I('<p class="px-4 py-2 text-xs text-vs-muted">No files here</p>'),yp=I('<form class="px-2 py-1"><input class="w-full rounded-sm border border-vs-line bg-vs-input px-1.5 py-0.5 text-xs outline-none focus:border-vs-accent"/></form>'),kp=I('<button class="w-full px-3 py-1 text-left hover:bg-vs-hover">New File…</button> <button class="w-full px-3 py-1 text-left hover:bg-vs-hover">New Folder…</button> <div class="my-1 h-px bg-vs-line"></div> <button class="w-full px-3 py-1 text-left hover:bg-vs-hover">Rename…</button> <button class="w-full px-3 py-1 text-left hover:bg-vs-hover">Copy Path</button> <div class="my-1 h-px bg-vs-line"></div> <button class="w-full px-3 py-1 text-left text-vs-red hover:bg-vs-hover">Delete</button>',1),wp=I('<div class="fixed z-50 min-w-[170px] rounded-md border border-vs-line bg-vs-panel py-1 text-xs shadow-2xl" data-tree-menu=""><!></div>'),Sp=I('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-vs-fg uppercase"><span class="flex-1 truncate">Explorer</span></div> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold text-vs-fg uppercase"><!> <span class="flex-1 truncate"> </span> <span class="flex opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-1 hover:bg-vs-hover" title="New file" aria-label="New file"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="New folder" aria-label="New folder"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="Refresh" aria-label="Refresh"><!></button></span></div> <!> <input class="mx-2 mb-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none focus:border-vs-accent" placeholder="Filter files…"/> <div class="min-h-0 flex-1 overflow-y-auto pb-2"><!></div> <!></div>');function Tp(t,e){vn(e,!0);let n=z(null),r=z(!1),s=z(""),o=z(null);function a(){h(n,null),h(r,!1)}v.openTreeMenu=V=>{h(n,{...V,x:Math.min(V.x,window.innerWidth-190)},!0),h(r,!1)};async function l(){var de,Qe;h(s,i(n).path,!0),h(r,!0),await tl(),(de=i(o))==null||de.focus();const V=i(s).lastIndexOf("/"),ee=i(s).lastIndexOf(".");(Qe=i(o))==null||Qe.setSelectionRange(V+1,ee>V+1?ee:i(s).length)}async function c(V){V.preventDefault();const ee=i(s).trim(),de=i(n).path;if(a(),!(!ee||ee===de))try{await Oe.fs(v.connectionId,{action:"rename",path:de,new_path:ee}),await v.refreshFiles()}catch(Qe){v.setStatus(Qe.message||"Could not rename")}}async function p(){const V=i(n).path;if(a(),!!confirm(`Delete ${V}? Folders must already be empty.`))try{await Oe.fs(v.connectionId,{action:"delete",path:V}),await v.refreshFiles()}catch(ee){v.setStatus(ee.message||"Could not delete")}}function u(){var ee;const V=i(n).path;a(),(ee=navigator.clipboard)==null||ee.writeText(V).catch(()=>{}),v.setStatus(`Copied ${V}`)}let _=z(""),d=z(""),T=z("");const x=(V,ee)=>V==="."||!V?ee:`${V}/${ee}`;function w(V,ee,de){h(T,de?ee:ee.split("/").slice(0,-1).join("/")||".",!0),h(_,V,!0),h(d,""),a()}async function R(V){V.preventDefault();const ee=i(d).trim();if(!ee)return;const de=i(T)||v.path;try{await Oe.fs(v.connectionId,{action:i(_)==="dir"?"create_dir":"create_file",path:x(de,ee)});const Qe=x(de,ee),sn=i(_);h(_,""),h(d,""),h(T,""),await v.refreshFiles(),await v.revealDirectory(de),sn==="file"&&await v.openFile(Qe)}catch(Qe){v.setStatus(Qe.message||"Could not create")}}const O=Ft(()=>{var V,ee;return(((V=v.connection)==null?void 0:V.workspace_root)||"").split("/").filter(Boolean).pop()||((ee=v.connection)==null?void 0:ee.label)||"WORKSPACE"});var j=Sp();Ht("click",$s,V=>{var ee,de;i(n)&&!((de=(ee=V.target).closest)!=null&&de.call(ee,"[data-tree-menu]"))&&a()}),Ht("keydown",$s,V=>{V.key==="Escape"&&a()});var F=g(S(j),2),Q=S(F);Cr(Q,{size:14,class:"shrink-0 text-vs-muted"});var C=g(Q,2),A=le(C,!0),N=g(C,2),se=S(N),te=S(se);Jd(te,{size:14});var ve=g(se,2),me=S(ve);tp(me,{size:14});var _e=g(ve,2),Ve=S(_e);Oi(Ve,{size:13});var Ue=g(F,2);{var tt=V=>{var ee=_p(),de=S(ee);Oc(de,!0),J(()=>Ae(de,"placeholder",`${i(_)==="dir"?"New folder":"New file"} in ${i(T)||v.path||"."}`)),Ht("submit",ee,R),L("keydown",de,Qe=>{Qe.key==="Escape"&&h(_,"")}),Ht("blur",de,()=>{i(d).trim()||h(_,"")}),ut(de,()=>i(d),Qe=>h(d,Qe)),k(V,ee)};U(Ue,V=>{i(_)&&V(tt)})}var Y=g(Ue,2),ge=g(Y,2),ie=S(ge);{var ue=V=>{var ee=bp();k(V,ee)},P=V=>{var ee=he(),de=K(ee);_t(de,17,()=>v.visibleEntries,Qe=>Qe.name,(Qe,sn)=>{Eu(Qe,{get entry(){return i(sn)},get dir(){return v.path},depth:0})},Qe=>{var sn=xp();k(Qe,sn)}),k(V,ee)};U(ie,V=>{v.connectionId?V(P,-1):V(ue)})}var fe=g(ge,2);{var qe=V=>{var ee=wp(),de=S(ee);{var Qe=jt=>{var on=yp(),an=S(on);Zs(an,zt=>h(o,zt),()=>i(o)),Ht("submit",on,c),L("keydown",an,zt=>{zt.key==="Escape"&&a()}),ut(an,()=>i(s),zt=>h(s,zt)),k(jt,on)},sn=jt=>{var on=kp(),an=K(on),zt=g(an,2),Dn=g(zt,4),Fn=g(Dn,2),Hn=g(Fn,4);L("click",an,()=>w("file",i(n).path,i(n).isDir)),L("click",zt,()=>w("dir",i(n).path,i(n).isDir)),L("click",Dn,l),L("click",Fn,u),L("click",Hn,p),k(jt,on)};U(de,jt=>{i(r)?jt(Qe):jt(sn,-1)})}J(()=>ws(ee,`left: ${i(n).x??""}px; top: ${i(n).y??""}px`)),k(V,ee)};U(fe,V=>{i(n)&&V(qe)})}J(()=>{var V;Ae(C,"title",(V=v.connection)==null?void 0:V.workspace_root),X(A,i(O))}),L("click",se,()=>{h(_,"file"),h(d,""),h(T,"")}),L("click",ve,()=>{h(_,"dir"),h(d,""),h(T,"")}),L("click",_e,()=>v.refreshFiles()),ut(Y,()=>v.filter,V=>v.filter=V),k(t,j),gn()}er(["click","keydown"]);var $p=I('<div class="absolute top-full right-0 z-20 mt-1 min-w-[170px] rounded-md border border-vs-line bg-vs-panel py-1 shadow-2xl"><button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Fetch</button> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Pull</button> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Push</button> <div class="my-1 h-px bg-vs-line"></div> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Create Branch…</button></div>'),Ep=I('<p class="mx-3 flex items-center gap-1.5 text-xs text-vs-muted"><!> Reading repository…</p>'),Ap=I(`<p class="mx-3 text-xs leading-relaxed text-vs-muted">This folder isn't a Git repository.<br/> Open a folder containing a <code class="rounded-sm bg-vs-input px-1">.git</code> directory,
      or run <code class="rounded-sm bg-vs-input px-1">git init</code> in the terminal.</p>`),Cp=I(`<div class="group flex cursor-pointer items-center gap-1.5 py-[2px] pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><span class="truncate text-vs-fg"> </span> <span class="truncate text-[11px] text-vs-muted"> </span> <span class="pointer-events-none ml-auto flex shrink-0 gap-0.5 opacity-0 transition-opacity
                         group-hover:pointer-events-auto group-hover:opacity-100"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Unstage"><!></button></span> <span> </span></div>`),Rp=I('<div class="flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <span class="truncate">Staged Changes</span></button> <span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span></div> <!>',1),Pp=I(`<div class="group flex cursor-pointer items-center gap-1.5 py-[2px] pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><span class="truncate text-vs-fg"> </span> <span class="truncate text-[11px] text-vs-muted"> </span> <span class="pointer-events-none ml-auto flex shrink-0 gap-0.5 opacity-0 transition-opacity
                         group-hover:pointer-events-auto group-hover:opacity-100"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Open changes"><!></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Discard changes"><!></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Stage changes"><!></button></span> <span> </span></div>`),Ip=I('<p class="px-6 py-2 text-xs text-vs-muted">No changes.</p>'),Np=I('<div class="min-h-0 flex-1 overflow-y-auto"></div>'),Op=I('<span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span>'),zp=I('<span class="flex shrink-0 opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-0.5 hover:bg-vs-line" title="Refresh history" aria-label="Refresh history"><!></button></span> <!>',1),Mp=I('<span class="shrink-0 rounded-sm bg-vs-line px-1 text-[10px] text-vs-blue"> </span>'),Lp=I('<div class="group flex cursor-pointer flex-col gap-0.5 py-1 pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><div class="flex min-w-0 items-center gap-1.5"><span class="truncate text-vs-fg"> </span> <!></div> <div class="flex min-w-0 items-center gap-1.5 text-[11px] text-vs-muted"><span class="shrink-0 font-mono text-vs-yellow"> </span> <span class="truncate"> </span> <span class="ml-auto shrink-0"> </span></div></div>'),Dp=I('<p class="px-6 py-2 text-xs text-vs-muted"> </p>'),Fp=I('<div class="max-h-[45%] min-h-0 flex-1 overflow-y-auto"></div>'),Hp=I('<button class="flex items-center gap-1 rounded-sm px-1 text-vs-muted hover:bg-vs-hover hover:text-vs-fg" title="Pull then push"><!> </button>'),Bp=I('<div class="flex gap-1 border-t border-vs-line px-3 py-2"><input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="New branch name"/> <button class="rounded-sm bg-vs-status px-2 py-1 text-xs text-white">Create</button></div>'),Up=I('<pre class="max-h-[120px] shrink-0 overflow-auto border-t border-vs-line px-3 py-1.5 text-[11px] whitespace-pre-wrap text-vs-muted"> </pre>'),jp=I('<div class="px-3 pb-2"><textarea class="w-full resize-none rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs text-vs-fg outline-none focus:border-vs-accent placeholder:text-vs-muted" rows="2"></textarea> <button class="mt-1 flex w-full items-center justify-center gap-1.5 rounded-sm bg-vs-status px-2 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"><!> Commit</button></div> <!> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <span class="truncate">Changes</span></button> <span class="flex shrink-0 opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-0.5 hover:bg-vs-line" title="Refresh" aria-label="Refresh"><!></button> <button class="rounded-sm p-0.5 hover:bg-vs-line" title="Stage all changes" aria-label="Stage all"><!></button></span> <span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span></div> <!> <div class="group flex shrink-0 items-center gap-1 border-t border-vs-line px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <!> <span class="truncate">History</span></button> <!></div> <!> <div class="mt-auto flex items-center gap-2 border-t border-vs-line px-3 py-1.5 text-[11px]"><span class="flex min-w-0 items-center gap-1 text-vs-muted" title="Current branch"><!> <span class="truncate"> </span></span> <!></div> <!> <!>',1),Wp=I('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase"><span class="flex-1">Source Control</span> <div class="relative" data-scm-menu=""><button class="rounded-sm p-0.5 hover:bg-vs-hover" title="More actions" aria-label="More actions"><!></button> <!></div></div> <!></div>');function Vp(t,e){vn(e,!0);let n=z(""),r=z(""),s=z(!1),o=z(!0),a=z(!0),l=z(!1),c=z(!1);const p=Ft(()=>(v.gitStatus||"").split(`
`).filter(P=>P&&!P.startsWith("##")).map(P=>{const fe=P.slice(3),qe=fe.indexOf(" -> "),V=qe===-1?fe:fe.slice(qe+4);return{index:P[0]===" "?"":P[0],work:P[1]===" "?"":P[1],code:P.slice(0,2).trim()||"??",path:V.replace(/\r$/,""),from:qe===-1?"":fe.slice(0,qe)}}).filter(P=>P.path)),u=Ft(()=>i(p).filter(P=>P.index&&P.index!=="?")),_=Ft(()=>i(p).filter(P=>P.work&&P.work!==" ")),d=P=>P.includes("?")||P.includes("A")?"text-vs-green":P.includes("D")?"text-vs-red":P.includes("R")?"text-vs-blue":"text-vs-yellow",T=P=>P.split("/").pop(),x=P=>{const fe=P.split("/");return fe.pop(),fe.join("/")};async function w(P,fe={}){v.gitBusy=P;try{return await v.runGit(P,fe)}finally{v.gitBusy=""}}async function R(){if(!i(n).trim()||!i(u).length)return;await w("commit",{message:i(n).trim()})&&h(n,"")}async function O(){if(!i(r).trim())return;await w("create_branch",{branch:i(r).trim()})&&(h(r,""),h(s,!1))}async function j(P){confirm(`Discard changes in ${P.path}? This cannot be undone.`)&&await w("discard",{files:[P.path]})}async function F(P){const fe=await v.runGit("diff_file",{files:[P.path]});fe&&v.openDiffTab(P.path,fe.output||"No changes to show.")}let Q=z("");Xt(()=>{const P=v.connectionId,fe=v.connectionState,qe=P?`${P}|${fe}`:"";!P||fe!=="connected"||i(Q)!==qe&&(h(Q,qe,!0),w("status"))});async function C(){h(l,!i(l)),i(l)&&!v.gitHistoryLoaded&&await w("log")}Xt(()=>{i(l)&&!v.gitHistoryLoaded&&!v.notARepo&&!v.gitBusy&&w("log")});async function A(P){const fe=await v.runGit("show",{ref:P.hash});fe&&v.openDiffTab(`${P.short} ${P.subject}`,fe.output||"Empty commit.")}const N=P=>(P||"").split(",").map(fe=>fe.trim().replace(/^HEAD -> /,"")).filter(Boolean);function se(P){P.key==="Enter"&&(P.ctrlKey||P.metaKey)&&(P.preventDefault(),R())}var te=Wp();Ht("click",$s,P=>{var fe,qe;(qe=(fe=P.target).closest)!=null&&qe.call(fe,"[data-scm-menu]")||h(c,!1)});var ve=S(te),me=g(S(ve),2),_e=S(me),Ve=S(_e);Zd(Ve,{size:14});var Ue=g(_e,2);{var tt=P=>{var fe=$p(),qe=S(fe),V=g(qe,2),ee=g(V,2),de=g(ee,4);L("click",qe,()=>{h(c,!1),w("fetch")}),L("click",V,()=>{h(c,!1),w("pull")}),L("click",ee,()=>{h(c,!1),w("push")}),L("click",de,()=>{h(c,!1),h(s,!i(s))}),k(P,fe)};U(Ue,P=>{i(c)&&P(tt)})}var Y=g(ve,2);{var ge=P=>{var fe=Ep(),qe=S(fe);vr(qe,{size:12,class:"animate-spin"}),k(P,fe)},ie=P=>{var fe=Ap();k(P,fe)},ue=P=>{var fe=jp(),qe=K(fe),V=S(qe),ee=g(V,2),de=S(ee);{var Qe=pe=>{vr(pe,{size:12,class:"animate-spin"})},sn=pe=>{$a(pe,{size:12})};U(de,pe=>{v.gitBusy==="commit"?pe(Qe):pe(sn,-1)})}var jt=g(qe,2);{var on=pe=>{var Je=Rp(),Be=K(Je),we=S(Be),je=S(we);{var wt=gt=>{Cr(gt,{size:14,class:"text-vs-muted"})},De=gt=>{Ea(gt,{size:14,class:"text-vs-muted"})};U(je,gt=>{i(a)?gt(wt):gt(De,-1)})}var Ct=g(we,2),Gt=le(Ct,!0),rt=g(Be,2);{var St=gt=>{var Lt=he(),jn=K(Lt);_t(jn,17,()=>i(u),Rt=>Rt.path,(Rt,Tt)=>{var ht=Cp(),Wn=S(ht),bt=le(Wn,!0),Ge=g(Wn,2),_n=le(Ge,!0),yr=g(Ge,2),$=S(yr),D=S($);ip(D,{size:13});var W=g(yr,2),b=le(W,!0);J((E,B,q)=>{Ae(ht,"title",i(Tt).path),X(bt,E),X(_n,B),Ae($,"aria-label",`Unstage ${i(Tt).path??""}`),pn(W,1,`shrink-0 font-mono text-[11px] ${q??""}`),X(b,i(Tt).index||i(Tt).code)},[()=>T(i(Tt).path),()=>x(i(Tt).path),()=>d(i(Tt).code)]),L("click",ht,()=>F(i(Tt))),L("keydown",ht,E=>{E.key==="Enter"&&F(i(Tt))}),L("click",$,E=>{E.stopPropagation(),w("unstage",{files:[i(Tt).path]})}),k(Rt,ht)}),k(gt,Lt)};U(rt,gt=>{i(a)&&gt(St)})}J(()=>X(Gt,i(u).length)),L("click",we,()=>h(a,!i(a))),k(pe,Je)};U(jt,pe=>{i(u).length&&pe(on)})}var an=g(jt,2),zt=S(an),Dn=S(zt);{var Fn=pe=>{Cr(pe,{size:14,class:"text-vs-muted"})},Hn=pe=>{Ea(pe,{size:14,class:"text-vs-muted"})};U(Dn,pe=>{i(o)?pe(Fn):pe(Hn,-1)})}var xe=g(zt,2),Wt=S(xe),Me=S(Wt);Oi(Me,{size:12});var tr=g(Wt,2),Mt=S(tr);Ao(Mt,{size:13});var Tn=g(xe,2),_r=le(Tn,!0),Vt=g(an,2);{var Or=pe=>{var Je=Np();_t(Je,21,()=>i(_),Be=>Be.path,(Be,we)=>{var je=Pp(),wt=S(je),De=le(wt,!0),Ct=g(wt,2),Gt=le(Ct,!0),rt=g(Ct,2),St=S(rt),gt=S(St);Qd(gt,{size:13});var Lt=g(St,2),jn=S(Lt);hp(jn,{size:13});var Rt=g(Lt,2),Tt=S(Rt);Ao(Tt,{size:13});var ht=g(rt,2),Wn=le(ht,!0);J((bt,Ge,_n)=>{Ae(je,"title",i(we).path),X(De,bt),X(Gt,Ge),Ae(St,"aria-label",`Open changes to ${i(we).path??""}`),Ae(Lt,"aria-label",`Discard changes to ${i(we).path??""}`),Ae(Rt,"aria-label",`Stage ${i(we).path??""}`),pn(ht,1,`shrink-0 font-mono text-[11px] ${_n??""}`),X(Wn,i(we).work||i(we).code)},[()=>T(i(we).path),()=>x(i(we).path),()=>d(i(we).code)]),L("click",je,()=>F(i(we))),L("keydown",je,bt=>{bt.key==="Enter"&&F(i(we))}),L("click",St,bt=>{bt.stopPropagation(),F(i(we))}),L("click",Lt,bt=>{bt.stopPropagation(),j(i(we))}),L("click",Rt,bt=>{bt.stopPropagation(),w("stage",{files:[i(we).path]})}),k(Be,je)},Be=>{var we=Ip();k(Be,we)}),k(pe,Je)};U(Vt,pe=>{i(o)&&pe(Or)})}var br=g(Vt,2),nr=S(br),$n=S(nr);{var Jt=pe=>{Cr(pe,{size:14,class:"text-vs-muted"})},mn=pe=>{Ea(pe,{size:14,class:"text-vs-muted"})};U($n,pe=>{i(l)?pe(Jt):pe(mn,-1)})}var qt=g($n,2);sp(qt,{size:12,class:"shrink-0 text-vs-muted"});var xr=g(nr,2);{var Bn=pe=>{var Je=zp(),Be=K(Je),we=S(Be),je=S(we);{var wt=rt=>{vr(rt,{size:12,class:"animate-spin"})},De=rt=>{Oi(rt,{size:12})};U(je,rt=>{v.gitBusy==="log"?rt(wt):rt(De,-1)})}var Ct=g(Be,2);{var Gt=rt=>{var St=Op(),gt=le(St,!0);J(()=>X(gt,v.gitCommits.length)),k(rt,St)};U(Ct,rt=>{v.gitCommits.length&&rt(Gt)})}L("click",we,()=>w("log")),k(pe,Je)};U(xr,pe=>{i(l)&&pe(Bn)})}var Un=g(br,2);{var rr=pe=>{var Je=Fp();_t(Je,21,()=>v.gitCommits,Be=>Be.hash,(Be,we)=>{var je=Lp(),wt=S(je),De=S(wt),Ct=le(De,!0),Gt=g(De,2);_t(Gt,17,()=>N(i(we).refs),nl,(ht,Wn)=>{var bt=Mp(),Ge=le(bt,!0);J(()=>X(Ge,i(Wn))),k(ht,bt)});var rt=g(wt,2),St=S(rt),gt=le(St,!0),Lt=g(St,2),jn=le(Lt,!0),Rt=g(Lt,2),Tt=le(Rt,!0);J(()=>{Ae(je,"title",`${i(we).short} · ${i(we).author} · ${i(we).date}`),X(Ct,i(we).subject),X(gt,i(we).short),X(jn,i(we).author),X(Tt,i(we).relative)}),L("click",je,()=>A(i(we))),L("keydown",je,ht=>{ht.key==="Enter"&&A(i(we))}),k(Be,je)},Be=>{var we=Dp(),je=le(we,!0);J(()=>X(je,v.gitBusy==="log"?"Loading history…":"No commits yet.")),k(Be,we)}),k(pe,Je)};U(Un,pe=>{i(l)&&pe(rr)})}var En=g(Un,2),An=S(En),sr=S(An);Ni(sr,{size:12,class:"shrink-0"});var zr=g(sr,2),Kr=le(zr,!0),Mr=g(An,2);{var Lr=pe=>{var Je=Hp(),Be=S(Je);{var we=De=>{vr(De,{size:11,class:"animate-spin"})},je=De=>{Ud(De,{size:11})};U(Be,De=>{v.gitBusy==="pull"||v.gitBusy==="push"?De(we):De(je,-1)})}var wt=g(Be);J(()=>X(wt,` ${v.gitBehind??""}↓ ${v.gitAhead??""}↑`)),L("click",Je,()=>w("pull").then(()=>w("push"))),k(pe,Je)};U(Mr,pe=>{v.gitHasUpstream&&pe(Lr)})}var or=g(En,2);{var Cn=pe=>{var Je=Bp(),Be=S(Je),we=g(Be,2);L("keydown",Be,je=>{je.key==="Enter"&&O(),je.key==="Escape"&&h(s,!1)}),ut(Be,()=>i(r),je=>h(r,je)),L("click",we,O),k(pe,Je)};U(or,pe=>{i(s)&&pe(Cn)})}var Rn=g(or,2);{var Dr=pe=>{var Je=Up(),Be=le(Je,!0);J(()=>X(Be,v.gitOutput)),k(pe,Je)};U(Rn,pe=>{v.gitOutput&&pe(Dr)})}J(pe=>{Ae(V,"placeholder",`Message (Ctrl+Enter to commit on "${v.gitBranch||"branch"}")`),ee.disabled=pe,Ae(ee,"title",i(u).length?"Commit staged changes":"Stage a change first"),X(_r,i(_).length),X(Kr,v.gitBranch||"—")},[()=>!i(n).trim()||!i(u).length||v.gitBusy==="commit"]),L("keydown",V,se),ut(V,()=>i(n),pe=>h(n,pe)),L("click",ee,R),L("click",zt,()=>h(o,!i(o))),L("click",Wt,()=>w("status")),L("click",tr,()=>w("stage",{files:["."]})),L("click",nr,C),k(P,fe)};U(Y,P=>{!i(Q)||v.gitBusy==="status"&&!v.gitStatus&&!v.notARepo?P(ge):v.notARepo?P(ie,1):P(ue,-1)})}L("click",_e,()=>h(c,!i(c))),k(t,te),gn()}er(["click","keydown"]);const qp="modulepreload",Gp=function(t,e){return new URL(t,e).href},Ul={},Aa=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let a=function(u){return Promise.all(u.map(_=>Promise.resolve(_).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const l=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),p=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=a(n.map(u=>{if(u=Gp(u,r),u in Ul)return;Ul[u]=!0;const _=u.endsWith(".css"),d=_?'[rel="stylesheet"]':"";if(!!r)for(let w=l.length-1;w>=0;w--){const R=l[w];if(R.href===u&&(!_||R.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const x=document.createElement("link");if(x.rel=_?"stylesheet":qp,_||(x.as="script"),x.crossOrigin="",x.href=u,p&&x.setAttribute("nonce",p),document.head.appendChild(x),_)return new Promise((w,R)=>{x.addEventListener("load",w),x.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${u}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return e().catch(o)})},ko={base:"vs-dark",inherit:!0,rules:[{token:"",foreground:"f8f8f2",background:"272822"},{token:"comment",foreground:"75715e",fontStyle:"italic"},{token:"string",foreground:"e6db74"},{token:"constant",foreground:"ae81ff"},{token:"number",foreground:"ae81ff"},{token:"keyword",foreground:"f92672"},{token:"operator",foreground:"f92672"},{token:"delimiter",foreground:"f8f8f2"},{token:"type",foreground:"66d9ef",fontStyle:"italic"},{token:"function",foreground:"a6e22e"},{token:"variable",foreground:"f8f8f2"},{token:"variable.parameter",foreground:"fd971f",fontStyle:"italic"},{token:"tag",foreground:"f92672"},{token:"attribute.name",foreground:"a6e22e"},{token:"attribute.value",foreground:"e6db74"},{token:"regexp",foreground:"e6db74"}],colors:{"editor.background":"#272822","editor.foreground":"#f8f8f2","editor.lineHighlightBackground":"#3e3d32","editor.selectionBackground":"#49483e","editorCursor.foreground":"#f8f8f0","editorWhitespace.foreground":"#3b3a32","editorLineNumber.foreground":"#90908a","editorLineNumber.activeForeground":"#f8f8f2","editorIndentGuide.background":"#3b3a32","editorGutter.background":"#272822"}},Kp={py:"python",js:"javascript",mjs:"javascript",cjs:"javascript",ts:"typescript",tsx:"typescript",jsx:"javascript",json:"json",md:"markdown",html:"html",htm:"html",css:"css",scss:"scss",less:"less",sh:"shell",bash:"shell",zsh:"shell",yml:"yaml",yaml:"yaml",toml:"ini",ini:"ini",cfg:"ini",sql:"sql",go:"go",rs:"rust",rb:"ruby",php:"php",java:"java",c:"c",h:"c",cpp:"cpp",hpp:"cpp",cs:"csharp",svelte:"html",vue:"html",xml:"xml",dockerfile:"dockerfile"};function Yp(t){var n;const e=(t||"").split("/").pop()||"";return e.toLowerCase()==="dockerfile"?"dockerfile":e.toLowerCase()==="makefile"?"shell":Kp[(n=e.split(".").pop())==null?void 0:n.toLowerCase()]||"plaintext"}var Zp=I('<div class="editor svelte-1h8xysy"></div>');function Xp(t,e){vn(e,!0);let n,r=null,s=null,o="",a=!1;ro(async()=>{s=await Aa(()=>import("./ide-monaco.js").then(c=>c.a),__vite__mapDeps([0,1]),import.meta.url),s.editor.defineTheme("monokai",ko),r=s.editor.create(n,{value:"",theme:"monokai",automaticLayout:!0,fontSize:13,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",minimap:{enabled:!0},scrollBeyondLastLine:!1,renderWhitespace:"selection",tabSize:2}),r.onDidChangeModelContent(()=>{a||!o||v.updateContent(o,r.getValue())}),r.addCommand(s.KeyMod.CtrlCmd|s.KeyCode.KeyS,()=>v.saveActive())}),rl(()=>r==null?void 0:r.dispose()),Xt(()=>{const c=v.activeTab;if(!(!r||!s)){if(!c){a=!0,r.setValue(""),o="",a=!1;return}if(c.key!==o){a=!0;const p=s.editor.createModel(c.content,c.language||Yp(c.path)),u=r.getModel();r.setModel(p),u==null||u.dispose(),r.updateOptions({readOnly:!!c.readOnly}),o=c.key,a=!1}else r.getValue()!==c.content&&(a=!0,r.setValue(c.content),a=!1)}});var l=Zp();Zs(l,c=>n=c,()=>n),k(t,l),gn()}var Qr=Id(()=>v),Qp=I('<span class="h-2 w-2 rounded-full bg-vs-fg group-hover:hidden"></span> <!>',1),Jp=I('<div><button class="flex items-center gap-1.5 py-2 pr-1 pl-3" role="tab"><!> <span class="whitespace-nowrap"> </span></button> <button class="mr-1.5 flex h-5 w-5 items-center justify-center rounded-sm hover:bg-vs-line"><!></button></div>'),eh=I('<div class="px-3 py-2 text-xs text-vs-muted">Open a file from the Explorer</div>'),th=I('<div class="flex min-h-[35px] items-stretch overflow-x-auto bg-vs-tabinactive" role="tablist"></div>');function nh(t,e){vn(e,!1);const n=s=>s.split("/").pop();$u();var r=th();_t(r,5,()=>Qr().tabs,s=>s.key,(s,o)=>{var a=Jp();let l;var c=S(a),p=S(c);sl(p,{size:14,class:"shrink-0 text-vs-blue"});var u=g(p,2),_=le(u,!0),d=g(c,2),T=S(d);{var x=R=>{var O=Qp(),j=g(K(O),2);Co(j,{size:14,class:"hidden group-hover:block"}),k(R,O)},w=R=>{Co(R,{size:14,class:"opacity-0 group-hover:opacity-100"})};U(T,R=>{i(o).dirty?R(x):R(w,-1)})}J((R,O)=>{l=pn(a,1,"group flex items-center border-r border-vs-bg text-[13px]",null,l,{"bg-vs-tabactive":i(o).key===Qr().activeKey,"text-vs-bright":i(o).key===Qr().activeKey,"text-vs-muted":i(o).key!==Qr().activeKey}),Ae(c,"aria-selected",i(o).key===Qr().activeKey),Ae(c,"title",i(o).path),X(_,R),Ae(d,"title",i(o).dirty?"Unsaved changes — close":"Close"),Ae(d,"aria-label",`Close ${O??""}`)},[()=>n(i(o).path),()=>n(i(o).path)]),L("click",c,()=>Qr(Qr().activeKey=i(o).key)),L("click",d,()=>Qr().closeTab(i(o).key)),k(s,a)},s=>{var o=eh();k(s,o)}),k(t,r),gn()}er(["click"]);function al(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var As=al();function Au(t){As=t}var ds={exec:()=>null};function Ps(t){let e=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),s=e[r];return s||(s=t(r),e[r]=s),s}}function ze(t,e=""){let n=typeof t=="string"?t:t.source,r={replace:(s,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(rn.caret,"$1"),n=n.replace(s,a),r},getRegex:()=>new RegExp(n,e)};return r}var rh=((t="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+t)}catch{return!1}})(),rn={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:Ps(t=>new RegExp(`^ {0,${t}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:Ps(t=>new RegExp(`^ {0,${t}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:Ps(t=>new RegExp(`^ {0,${t}}(?:\`\`\`|~~~)`)),headingBeginRegex:Ps(t=>new RegExp(`^ {0,${t}}#`)),htmlBeginRegex:Ps(t=>new RegExp(`^ {0,${t}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:Ps(t=>new RegExp(`^ {0,${t}}>`))},sh=/^(?:[ \t]*(?:\n|$))+/,oh=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,ah=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,da=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ih=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,il=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Cu=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Ru=ze(Cu).replace(/bull/g,il).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),lh=ze(Cu).replace(/bull/g,il).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),ll=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,ch=/^[^\n]+/,cl=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,uh=ze(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",cl).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),fh=ze(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,il).getRegex(),Ka="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ul=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,dh=ze("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",ul).replace("tag",Ka).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Pu=t=>ze(ll).replace("hr",da).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list",t).replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ka).getRegex(),ph=Pu(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),hh=Pu(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),vh=ze(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",hh).getRegex(),fl={blockquote:vh,code:oh,def:uh,fences:ah,heading:ih,hr:da,html:dh,lheading:Ru,list:fh,newline:sh,paragraph:ph,table:ds,text:ch},jl=ze("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",da).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ka).getRegex(),gh={...fl,lheading:lh,table:jl,paragraph:ze(ll).replace("hr",da).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",jl).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ka).getRegex()},mh={...fl,html:ze(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ul).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ds,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ze(ll).replace("hr",da).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Ru).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},_h=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,bh=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Iu=/^( {2,}|\\)\n(?!\s*$)/,xh=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Gr=/[\p{P}\p{S}]/u,so=/[\s\p{P}\p{S}]/u,pa=/[^\s\p{P}\p{S}]/u,yh=ze(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,so).getRegex(),kh=/[\p{Pi}\p{Ps}"']/u,Nu=/(?!~)[\p{P}\p{S}]/u,wh=/(?!~)[\s\p{P}\p{S}]/u,Sh=/(?:[^\s\p{P}\p{S}]|~)/u,Th=ze(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",rh?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Ou=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,$h=ze(Ou,"u").replace(/punct/g,Gr).getRegex(),Eh=ze(Ou,"u").replace(/punct/g,Nu).getRegex(),Ah=/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,Ch=ze(Ah,"u").replace(/openQuote/g,kh).replace(/punct/g,Gr).getRegex(),zu="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Rh=ze(zu,"gu").replace(/notPunctSpace/g,pa).replace(/punctSpace/g,so).replace(/punct/g,Gr).getRegex(),Ph=ze(zu,"gu").replace(/notPunctSpace/g,Sh).replace(/punctSpace/g,wh).replace(/punct/g,Nu).getRegex(),Ih="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)",Nh=ze(Ih,"gu").replace(/notPunctSpace/g,pa).replace(/punctSpace/g,so).replace(/punct/g,Gr).getRegex(),Oh=ze("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,pa).replace(/punctSpace/g,so).replace(/punct/g,Gr).getRegex(),zh="^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)",Mh=ze(zh,"gu").replace(/notPunctSpace/g,pa).replace(/punctSpace/g,so).replace(/punct/g,Gr).getRegex(),Lh=ze(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Gr).getRegex(),Dh="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Fh=ze(Dh,"gu").replace(/notPunctSpace/g,pa).replace(/punctSpace/g,so).replace(/punct/g,Gr).getRegex(),Hh=ze(/\\(punct)/,"gu").replace(/punct/g,Gr).getRegex(),Bh=ze(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Uh=ze(ul).replace("(?:-->|$)","-->").getRegex(),jh=ze("^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Uh).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Wh=/\[(?:\\[\s\S]|[^\[\]\\])*\]/,Ma=ze(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace("brackets",Wh).getRegex(),Vh=ze(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Ma).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Mu=ze(/^!?\[(label)\]\[(ref)\]/).replace("label",Ma).replace("ref",cl).getRegex(),Lu=ze(/^!?\[(ref)\](?:\[\])?/).replace("ref",cl).getRegex(),qh=ze("reflink|nolink(?!\\()","g").replace("reflink",Mu).replace("nolink",Lu).getRegex(),Wl=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,dl={_backpedal:ds,anyPunctuation:Hh,autolink:Bh,blockSkip:Th,br:Iu,code:bh,del:ds,delLDelim:ds,delRDelim:ds,emStrongLDelim:$h,emStrongRDelimAst:Rh,emStrongRDelimUnd:Oh,escape:_h,link:Vh,nolink:Lu,punctuation:yh,reflink:Mu,reflinkSearch:qh,tag:jh,text:xh,url:ds},Gh={...dl,emStrongLDelim:Ch,emStrongRDelimAst:Nh,emStrongRDelimUnd:Mh,link:ze(/^!?\[(label)\]\((.*?)\)/).replace("label",Ma).getRegex(),reflink:ze(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ma).getRegex()},zi={...dl,emStrongRDelimAst:Ph,emStrongLDelim:Eh,delLDelim:Lh,delRDelim:Fh,url:ze(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Wl).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:ze(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Wl).getRegex()},Kh={...zi,br:ze(Iu).replace("{2,}","*").getRegex(),text:ze(zi.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},_a={normal:fl,gfm:gh,pedantic:mh},uo={normal:dl,gfm:zi,breaks:Kh,pedantic:Gh},Yh={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Vl=t=>Yh[t];function In(t,e){if(e){if(rn.escapeTest.test(t))return t.replace(rn.escapeReplace,Vl)}else if(rn.escapeTestNoEncode.test(t))return t.replace(rn.escapeReplaceNoEncode,Vl);return t}function ql(t){try{t=encodeURI(t).replace(rn.percentDecode,"%")}catch{return null}return t}function Gl(t,e){var o;let n=t.replace(rn.findPipe,(a,l,c)=>{let p=!1,u=l;for(;--u>=0&&c[u]==="\\";)p=!p;return p?"|":" |"}),r=n.split(rn.splitPipe),s=0;if(r[0].trim()||r.shift(),r.length>0&&!((o=r.at(-1))!=null&&o.trim())&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(rn.slashPipe,"|");return r}function Jr(t,e,n){let r=t.length;if(r===0)return"";let s=0;for(;s<r&&t.charAt(r-s-1)===e;)s++;return t.slice(0,r-s)}function Kl(t){let e=t.split(`
`),n=e.length-1;for(;n>=0&&rn.blankLine.test(e[n]);)n--;return e.length-n<=2?t:e.slice(0,n+1).join(`
`)}function Zh(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return n>0?-2:-1}function Xh(t,e=0){let n=e,r="";for(let s of t)if(s==="	"){let o=4-n%4;r+=" ".repeat(o),n+=o}else r+=s,n++;return r}function Yl(t,e,n,r,s){let o=e.href,a=e.title||null,l=t[1].replace(s.other.outputLinkReplace,"$1"),c=t[0].charAt(0)==="!";r.state.inLink=!0;let p=r.state.linkEmitted,u=r.state.inRawBlock;r.state.linkEmitted=!1;let _=r.inlineTokens(l),d=r.state.linkEmitted;if(r.state.linkEmitted=p,r.state.inLink=!1,!c){if(d){r.state.inRawBlock=u;return}r.state.linkEmitted=!0}return{type:c?"image":"link",raw:n,href:o,title:a,text:l,tokens:_}}function Qh(t,e,n){let r=t.match(n.other.indentCodeCompensation);if(r===null)return e;let s=r[1];return e.split(`
`).map(o=>{let a=o.match(n.other.beginningSpace);if(a===null)return o;let[l]=a;return o.slice(Math.min(l.length,s.length))}).join(`
`)}var La=class{constructor(t){Ie(this,"options");Ie(this,"rules");Ie(this,"lexer");this.options=t||As}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let n=this.options.pedantic?e[0]:Kl(e[0]),r=n.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:n,codeBlockStyle:"indented",text:r}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let n=e[0],r=Qh(n,e[3]||"",this.rules);return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(this.rules.other.endingHash.test(n)){let r=Jr(n,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceTabChar.test(r))&&(n=r.trim())}return{type:"heading",raw:Jr(e[0],`
`),depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:Jr(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let n=Jr(e[0],`
`).split(`
`),r="",s="",o=[];for(;n.length>0;){let a=!1,l=[],c;for(c=0;c<n.length;c++)if(this.rules.other.blockquoteStart.test(n[c]))l.push(n[c]),a=!0;else if(!a)l.push(n[c]);else break;n=n.slice(c);let p=l.join(`
`),u=p.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${p}`:p,s=s?`${s}
${u}`:u;let _=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,o,!0),this.lexer.state.top=_,n.length===0)break;let d=o.at(-1);if((d==null?void 0:d.type)==="code")break;if((d==null?void 0:d.type)==="blockquote"){let T=d,x=n.join(`
`),w=T.raw+`
`+x.replace(this.rules.other.blockquoteSetextReplace2,""),R=this.blockquote(w);o[o.length-1]=R,r=`${r}
${x}`,s=s.substring(0,s.length-T.text.length)+R.text;break}else if((d==null?void 0:d.type)==="list"){let T=d,x=T.raw+`
`+n.join(`
`),w=this.list(x);o[o.length-1]=w,r=r.substring(0,r.length-d.raw.length)+w.raw,s=s.substring(0,s.length-T.raw.length)+w.raw,n=x.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:o,text:s}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n=e[1].trim(),r=n.length>1,s={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");let o=this.rules.other.listItemRegex(n),a=!1;for(;t;){let c=!1,p="",u="";if(!(e=o.exec(t))||this.rules.block.hr.test(t))break;p=e[0],t=t.substring(p.length);let _=Xh(e[2].split(`
`,1)[0],e[1].length),d=t.split(`
`,1)[0],T=!_.trim(),x=0;if(this.options.pedantic?(x=2,u=_.trimStart()):T?x=e[1].length+1:(x=_.search(this.rules.other.nonSpaceChar),x=x>4?1:x,u=_.slice(x),x+=e[1].length),T&&this.rules.other.blankLine.test(d)&&(p+=d+`
`,t=t.substring(d.length+1),c=!0),!c){let w=this.rules.other.nextBulletRegex(x),R=this.rules.other.hrRegex(x),O=this.rules.other.fencesBeginRegex(x),j=this.rules.other.headingBeginRegex(x),F=this.rules.other.htmlBeginRegex(x),Q=this.rules.other.blockquoteBeginRegex(x);for(;t;){let C=t.split(`
`,1)[0],A;if(d=C,this.options.pedantic?(d=d.replace(this.rules.other.listReplaceNesting,"  "),A=d):A=d.replace(this.rules.other.tabCharGlobal,"    "),O.test(d)||j.test(d)||F.test(d)||Q.test(d)||w.test(d)||R.test(d))break;if(A.search(this.rules.other.nonSpaceChar)>=x||!d.trim())u+=`
`+A.slice(x);else{if(T||_.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||O.test(_)||j.test(_)||R.test(_))break;u+=`
`+d}T=!d.trim(),p+=C+`
`,t=t.substring(C.length+1),_=A.slice(x)}}s.loose||(a?s.loose=!0:this.rules.other.doubleBlankLine.test(p)&&(a=!0)),s.items.push({type:"list_item",raw:p,task:!!this.options.gfm&&this.rules.other.listIsTask.test(u),loose:!1,text:u,tokens:[]}),s.raw+=p}let l=s.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;s.raw=s.raw.trimEnd();for(let c of s.items)if(this.lexer.state.top=!1,c.tokens=this.lexer.blockTokens(c.text,[]),!s.loose){let p=c.tokens.filter(_=>_.type==="space"),u=p.length>0&&p.some(_=>this.rules.other.anyLine.test(_.raw));s.loose=u}for(let c of s.items){let p=c.tokens[0];if(c.task&&((p==null?void 0:p.type)==="text"||(p==null?void 0:p.type)==="paragraph")){c.text=c.text.replace(this.rules.other.listReplaceTask,""),p.raw=p.raw.replace(this.rules.other.listReplaceTask,""),p.text=p.text.replace(this.rules.other.listReplaceTask,"");for(let _=this.lexer.inlineQueue.length-1;_>=0;_--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[_].src)){this.lexer.inlineQueue[_].src=this.lexer.inlineQueue[_].src.replace(this.rules.other.listReplaceTask,"");break}let u=this.rules.other.listTaskCheckbox.exec(c.raw);if(u){let _={type:"checkbox",raw:u[0]+" ",checked:u[0]!=="[ ]"};c.checked=_.checked,s.loose?c.tokens[0]&&["paragraph","text"].includes(c.tokens[0].type)&&"tokens"in c.tokens[0]&&c.tokens[0].tokens?(c.tokens[0].raw=_.raw+c.tokens[0].raw,c.tokens[0].text=_.raw+c.tokens[0].text,c.tokens[0].tokens.unshift(_)):c.tokens.unshift({type:"paragraph",raw:_.raw,text:_.raw,tokens:[_]}):c.tokens.unshift(_)}}else c.task&&(c.task=!1)}if(s.loose)for(let c of s.items){c.loose=!0;for(let p of c.tokens)p.type==="text"&&(p.type="paragraph")}return s}}html(t){let e=this.rules.block.html.exec(t);if(e){let n=Kl(e[0]);return{type:"html",block:!0,raw:n,pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:n}}}def(t){let e=this.rules.block.def.exec(t);if(e){let n=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:Jr(e[0],`
`),href:r,title:s}}}table(t){var a;let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let n=Gl(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=(a=e[3])!=null&&a.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:Jr(e[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let l of r)this.rules.other.tableAlignRight.test(l)?o.align.push("right"):this.rules.other.tableAlignCenter.test(l)?o.align.push("center"):this.rules.other.tableAlignLeft.test(l)?o.align.push("left"):o.align.push(null);for(let l=0;l<n.length;l++)o.header.push({text:n[l],tokens:this.lexer.inline(n[l]),header:!0,align:o.align[l]});for(let l of s)o.rows.push(Gl(l,o.header.length).map((c,p)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:o.align[p]})));return o}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e){let n=e[1].trim();return{type:"heading",raw:Jr(e[0],`
`),depth:e[2].charAt(0)==="="?1:2,text:n,tokens:this.lexer.inline(n)}}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){let e=this.rules.inline.link.exec(t);if(e){let n=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let o=Jr(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{let o=Zh(e[2],"()");if(o===-2)return;if(o>-1){let a=(e[0].indexOf("!")===0?5:4)+e[1].length+o;e[2]=e[2].substring(0,o),e[0]=e[0].substring(0,a).trim(),e[3]=""}}let r=e[2],s="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(r);o&&(r=o[1],s=o[3])}else s=e[3]?e[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?r=r.slice(1):r=r.slice(1,-1)),Yl(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let r=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=e[r.toLowerCase()];if(!s){let o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return Yl(n,s,n[0],this.lexer,this.rules)}}emStrong(t,e,n=""){let r=this.rules.inline.emStrongLDelim.exec(t);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let s=[...r[0]].length-1,o,a,l=s,c=0,p=r[0][0],u=n===p,_=p==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(_.lastIndex=0,e=e.slice(-1*t.length+s);(r=_.exec(e))!==null;){if(o=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!o)continue;if(a=[...o].length,r[3]||r[4]){l+=a;continue}else if(r[5]||r[6]){if(s%3&&!((s+a)%3)){c+=a;continue}if(u)break}if(l-=a,l>0)continue;a=Math.min(a,a+l+c);let d=[...r[0]][0].length,T=t.slice(0,s+r.index+d+a);if(Math.min(s,a)%2){let w=T.slice(1,-1);return{type:"em",raw:T,text:w,tokens:this.lexer.inlineTokens(w)}}let x=T.slice(2,-2);return{type:"strong",raw:T,text:x,tokens:this.lexer.inlineTokens(x)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(n),s=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return r&&s&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:e[0],text:n}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t,e,n=""){let r=this.rules.inline.delLDelim.exec(t);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let s=[...r[0]].length-1,o,a,l=s,c=this.rules.inline.delRDelim;for(c.lastIndex=0,e=e.slice(-1*t.length+s);(r=c.exec(e))!==null;){if(o=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!o||(a=[...o].length,a!==s))continue;if(r[3]||r[4]){l+=a;continue}if(l-=a,l>0)continue;a=Math.min(a,a+l);let p=[...r[0]][0].length,u=t.slice(0,s+r.index+p+a),_=u.slice(s,-s);return{type:"del",raw:u,text:_,tokens:this.lexer.inlineTokens(_)}}}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let n,r;return e[2]==="@"?(n=e[1],r="mailto:"+n):(n=e[1],r=n),{type:"link",raw:e[0],text:n,href:r,autolink:!0,tokens:[{type:"text",raw:n,text:n}]}}}url(t){var n;let e;if(e=this.rules.inline.url.exec(t)){let r,s;if(e[2]==="@")r=e[0],s="mailto:"+r;else{let o;do o=e[0],e[0]=((n=this.rules.inline._backpedal.exec(e[0]))==null?void 0:n[0])??"";while(o!==e[0]);r=e[0],e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:r,href:s,autolink:!0,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let n=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:n}}}},ur=class Mi{constructor(e){Ie(this,"tokens");Ie(this,"options");Ie(this,"state");Ie(this,"inlineQueue");Ie(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||As,this.options.tokenizer=this.options.tokenizer||new La,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,top:!0};let n={other:rn,block:_a.normal,inline:uo.normal};this.options.pedantic?(n.block=_a.pedantic,n.inline=uo.pedantic):this.options.gfm&&(n.block=_a.gfm,this.options.breaks?n.inline=uo.breaks:n.inline=uo.gfm),this.tokenizer.rules=n}static get rules(){return{block:_a,inline:uo}}static lex(e,n){return new Mi(n).lex(e)}static lexInline(e,n){return new Mi(n).inlineTokens(e)}lex(e){e=e.replace(rn.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){var o,a,l;this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(rn.tabCharGlobal,"    ").replace(rn.spaceLine,""));let s=1/0;for(;e;){if(e.length<s)s=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let c;if((a=(o=this.options.extensions)==null?void 0:o.block)!=null&&a.some(u=>(c=u.call({lexer:this},e,n))?(e=e.substring(c.raw.length),n.push(c),!0):!1))continue;if(c=this.tokenizer.space(e)){e=e.substring(c.raw.length);let u=n.at(-1);c.raw.length===1&&u!==void 0?u.raw+=`
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
`+c.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(c);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}linkInText(e){if(!e.includes("["))return!1;let n=this.tokenizer.rules.inline.link;for(let r of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(n.test(r[0])&&e.charAt(r.index-1)!=="!")return!0;for(let r of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let s=r[0],o=s.lastIndexOf("[");if(!(s.charAt(0)==="!"||!Object.hasOwn(this.tokens.links,s.slice(o+1,-1)))&&!(o>1&&this.linkInText(s.slice(1,o-1))))return!0}return!1}inlineTokens(e,n=[]){var l,c,p,u,_;this.tokenizer.lexer=this;let r=e;if(this.tokens.links&&e.includes("[")){let d=this.tokenizer.rules.inline.reflinkSearch,T=x=>{let w=x.lastIndexOf("[");if(!Object.hasOwn(this.tokens.links,x.slice(w+1,-1)))return x;if(w>1&&x.charAt(0)!=="!"){let R=x.slice(1,w-1);if(this.linkInText(R))return"["+R.replace(d,T)+"]["+"a".repeat(x.length-w-2)+"]"}return"["+"a".repeat(x.length-2)+"]"};r=r.replace(d,T)}r=r.replace(this.tokenizer.rules.inline.anyPunctuation,d=>"+".repeat(d.length)),r=r.replace(this.tokenizer.rules.inline.blockSkip,(d,T,x)=>{let w=x?x.length:0;return d.slice(0,w)+"["+"a".repeat(d.length-w-2)+"]"}),r=((c=(l=this.options.hooks)==null?void 0:l.emStrongMask)==null?void 0:c.call({lexer:this},r))??r;let s=!1,o="",a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}s||(o=""),s=!1;let d;if((u=(p=this.options.extensions)==null?void 0:p.inline)!=null&&u.some(x=>(d=x.call({lexer:this},e,n))?(e=e.substring(d.raw.length),n.push(d),!0):!1))continue;if(d=this.tokenizer.escape(e)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.tag(e)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.link(e)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(d.raw.length);let x=n.at(-1);d.type==="text"&&(x==null?void 0:x.type)==="text"?(x.raw+=d.raw,x.text+=d.text):n.push(d);continue}if(d=this.tokenizer.emStrong(e,r,o)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.codespan(e)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.br(e)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.del(e,r,o)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.autolink(e)){e=e.substring(d.raw.length),n.push(d);continue}if(!this.state.inLink&&(d=this.tokenizer.url(e))){e=e.substring(d.raw.length),n.push(d);continue}let T=e;if((_=this.options.extensions)!=null&&_.startInline){let x=1/0,w=e.slice(1),R;this.options.extensions.startInline.forEach(O=>{R=O.call({lexer:this},w),typeof R=="number"&&R>=0&&(x=Math.min(x,R))}),x<1/0&&x>=0&&(T=e.substring(0,x+1))}if(d=this.tokenizer.inlineText(T)){e=e.substring(d.raw.length),d.raw.slice(-1)!=="_"&&(o=d.raw.slice(-1)),s=!0;let x=n.at(-1);(x==null?void 0:x.type)==="text"?(x.raw+=d.raw,x.text+=d.text):n.push(d);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return n}infiniteLoopError(e){let n="Infinite loop on byte: "+e;if(this.options.silent)console.error(n);else throw new Error(n)}},Da=class{constructor(t){Ie(this,"options");Ie(this,"parser");this.options=t||As}space(t){return""}code({text:t,lang:e,escaped:n}){var o;let r=(o=(e||"").match(rn.notSpaceStart))==null?void 0:o[0],s=t?t.replace(rn.endingNewline,"")+`
`:"";return r?'<pre><code class="language-'+In(r)+'">'+(n?s:In(s,!0))+`</code></pre>
`:"<pre><code>"+(n?s:In(s,!0))+`</code></pre>
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
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${In(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,text:n,tokens:r,autolink:s}){let o=s?In(n,!0):this.parser.parseInline(r),a=ql(t);if(a===null)return o;t=In(a,s);let l='<a href="'+t+'"';return e&&(l+=' title="'+In(e)+'"'),l+=">"+o+"</a>",l}image({href:t,title:e,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let s=ql(t);if(s===null)return In(n);t=s;let o=`<img src="${In(t)}" alt="${In(n)}"`;return e&&(o+=` title="${In(e)}"`),o+=">",o}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:In(t.text)}},pl=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}checkbox({raw:t}){return t}},fr=class Li{constructor(e){Ie(this,"options");Ie(this,"renderer");Ie(this,"textRenderer");this.options=e||As,this.options.renderer=this.options.renderer||new Da,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new pl}static parse(e,n){return new Li(n).parse(e)}static parseInline(e,n){return new Li(n).parseInline(e)}parse(e){var r,s;this.renderer.parser=this;let n="";for(let o=0;o<e.length;o++){let a=e[o];if((s=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&s[a.type]){let c=a,p=this.options.extensions.renderers[c.type].call({parser:this},c);if(p!==!1||!["space","hr","heading","code","table","blockquote","list","checkbox","html","def","paragraph","text"].includes(c.type)){n+=p||"";continue}}let l=a;switch(l.type){case"space":{n+=this.renderer.space(l);break}case"hr":{n+=this.renderer.hr(l);break}case"heading":{n+=this.renderer.heading(l);break}case"code":{n+=this.renderer.code(l);break}case"table":{n+=this.renderer.table(l);break}case"blockquote":{n+=this.renderer.blockquote(l);break}case"list":{n+=this.renderer.list(l);break}case"checkbox":{n+=this.renderer.checkbox(l);break}case"html":{n+=this.renderer.html(l);break}case"def":{n+=this.renderer.def(l);break}case"paragraph":{n+=this.renderer.paragraph(l);break}case"text":{n+=this.renderer.text(l);break}default:{let c='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return n}parseInline(e,n=this.renderer){var s,o;this.renderer.parser=this;let r="";for(let a=0;a<e.length;a++){let l=e[a];if((o=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&o[l.type]){let p=this.options.extensions.renderers[l.type].call({parser:this},l);if(p!==!1||!["escape","html","link","image","checkbox","strong","em","codespan","br","del","text"].includes(l.type)){r+=p||"";continue}}let c=l;switch(c.type){case"escape":{r+=n.text(c);break}case"html":{r+=n.html(c);break}case"link":{r+=n.link(c);break}case"image":{r+=n.image(c);break}case"checkbox":{r+=n.checkbox(c);break}case"strong":{r+=n.strong(c);break}case"em":{r+=n.em(c);break}case"codespan":{r+=n.codespan(c);break}case"br":{r+=n.br(c);break}case"del":{r+=n.del(c);break}case"text":{r+=n.text(c);break}default:{let p='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(p),"";throw new Error(p)}}}return r}},xa,wo=(xa=class{constructor(t){Ie(this,"options");Ie(this,"block");this.options=t||As}preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(t=this.block){return t?ur.lex:ur.lexInline}provideParser(t=this.block){return t?fr.parse:fr.parseInline}},Ie(xa,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),Ie(xa,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),xa),Jh=class{constructor(...t){Ie(this,"defaults",al());Ie(this,"options",this.setOptions);Ie(this,"parse",this.parseMarkdown(!0));Ie(this,"parseInline",this.parseMarkdown(!1));Ie(this,"Parser",fr);Ie(this,"Renderer",Da);Ie(this,"TextRenderer",pl);Ie(this,"Lexer",ur);Ie(this,"Tokenizer",La);Ie(this,"Hooks",wo);this.use(...t)}walkTokens(t,e){var r,s;let n=[];for(let o of t)switch(n=n.concat(e.call(this,o)),o.type){case"table":{let a=o;for(let l of a.header)n=n.concat(this.walkTokens(l.tokens,e));for(let l of a.rows)for(let c of l)n=n.concat(this.walkTokens(c.tokens,e));break}case"list":{let a=o;n=n.concat(this.walkTokens(a.items,e));break}default:{let a=o;(s=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&s[a.type]?this.defaults.extensions.childTokens[a.type].forEach(l=>{let c=a[l].flat(1/0);n=n.concat(this.walkTokens(c,e))}):a.tokens&&(n=n.concat(this.walkTokens(a.tokens,e)))}}return n}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{let r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){let o=e.renderers[s.name];o?e.renderers[s.name]=function(...a){let l=s.renderer.apply(this,a);return l===!1&&(l=o.apply(this,a)),l}:e.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=e[s.level];o?o.unshift(s.tokenizer):e[s.level]=[s.tokenizer],s.start&&(s.level==="block"?e.startBlock?e.startBlock.push(s.start):e.startBlock=[s.start]:s.level==="inline"&&(e.startInline?e.startInline.push(s.start):e.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(e.childTokens[s.name]=s.childTokens)}),r.extensions=e),n.renderer){let s=this.defaults.renderer||new Da(this.defaults);for(let o in n.renderer){if(!(o in s))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let a=o,l=n.renderer[a],c=s[a];s[a]=(...p)=>{let u=l.apply(s,p);return u===!1&&(u=c.apply(s,p)),u||""}}r.renderer=s}if(n.tokenizer){let s=this.defaults.tokenizer||new La(this.defaults);for(let o in n.tokenizer){if(!(o in s))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let a=o,l=n.tokenizer[a],c=s[a];s[a]=(...p)=>{let u=l.apply(s,p);return u===!1&&(u=c.apply(s,p)),u}}r.tokenizer=s}if(n.hooks){let s=this.defaults.hooks||new wo;for(let o in n.hooks){if(!(o in s))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let a=o,l=n.hooks[a],c=s[a];wo.passThroughHooks.has(o)?s[a]=p=>{if(this.defaults.async&&wo.passThroughHooksRespectAsync.has(o))return(async()=>{let _=await l.call(s,p);return c.call(s,_)})();let u=l.call(s,p);return c.call(s,u)}:s[a]=(...p)=>{if(this.defaults.async)return(async()=>{let _=await l.apply(s,p);return _===!1&&(_=await c.apply(s,p)),_})();let u=l.apply(s,p);return u===!1&&(u=c.apply(s,p)),u}}r.hooks=s}if(n.walkTokens){let s=this.defaults.walkTokens,o=n.walkTokens;r.walkTokens=function(a){let l=[];return l.push(o.call(this,a)),s&&(l=l.concat(s.call(this,a))),l}}this.defaults={...this.defaults,...r}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return ur.lex(t,e??this.defaults)}parser(t,e){return fr.parse(t,e??this.defaults)}parseMarkdown(t){return(e,n)=>{let r={...n},s={...this.defaults,...r},o=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&r.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(s.hooks&&(s.hooks.options=s,s.hooks.block=t),s.async)return(async()=>{let a=s.hooks?await s.hooks.preprocess(e):e,l=await(s.hooks?await s.hooks.provideLexer(t):t?ur.lex:ur.lexInline)(a,s),c=s.hooks?await s.hooks.processAllTokens(l):l;s.walkTokens&&await Promise.all(this.walkTokens(c,s.walkTokens));let p=await(s.hooks?await s.hooks.provideParser(t):t?fr.parse:fr.parseInline)(c,s);return s.hooks?await s.hooks.postprocess(p):p})().catch(o);try{s.hooks&&(e=s.hooks.preprocess(e));let a=(s.hooks?s.hooks.provideLexer(t):t?ur.lex:ur.lexInline)(e,s);s.hooks&&(a=s.hooks.processAllTokens(a)),s.walkTokens&&this.walkTokens(a,s.walkTokens);let l=(s.hooks?s.hooks.provideParser(t):t?fr.parse:fr.parseInline)(a,s);return s.hooks&&(l=s.hooks.postprocess(l)),l}catch(a){return o(a)}}}onError(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let r="<p>An error occurred:</p><pre>"+In(n.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(n);throw n}}},Es=new Jh;function nt(t,e){return Es.parse(t,e)}nt.options=nt.setOptions=function(t){return Es.setOptions(t),nt.defaults=Es.defaults,Au(nt.defaults),nt};nt.getDefaults=al;nt.defaults=As;function ev(...t){return Es.use(...t),nt.defaults=Es.defaults,Au(nt.defaults),nt}nt.use=ev;nt.walkTokens=function(t,e){return Es.walkTokens(t,e)};nt.parseInline=Es.parseInline;nt.Parser=fr;nt.parser=fr.parse;nt.Renderer=Da;nt.TextRenderer=pl;nt.Lexer=ur;nt.lexer=ur.lex;nt.Tokenizer=La;nt.Hooks=wo;nt.parse=nt;nt.options;nt.setOptions;nt.walkTokens;nt.parseInline;fr.parse;ur.lex;/*! @license DOMPurify 3.4.15 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.15/LICENSE */function Zl(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function tv(t){if(Array.isArray(t))return t}function nv(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,s,o,a,l=[],c=!0,p=!1;try{if(o=(n=n.call(t)).next,e!==0)for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(u){p=!0,s=u}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(p)throw s}}return l}}function rv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sv(t,e){return tv(t)||nv(t,e)||ov(t,e)||rv()}function ov(t,e){if(t){if(typeof t=="string")return Zl(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Zl(t,e):void 0}}const Du=Object.entries,Xl=Object.setPrototypeOf,av=Object.isFrozen,iv=Object.getPrototypeOf,lv=Object.getOwnPropertyDescriptor;let Ot=Object.freeze,Ut=Object.seal,Ns=Object.create,Fu=typeof Reflect<"u"&&Reflect,Di=Fu.apply,Fi=Fu.construct;Ot||(Ot=function(e){return e});Ut||(Ut=function(e){return e});Di||(Di=function(e,n){for(var r=arguments.length,s=new Array(r>2?r-2:0),o=2;o<r;o++)s[o-2]=arguments[o];return e.apply(n,s)});Fi||(Fi=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return new e(...r)});const fs=At(Array.prototype.forEach),cv=At(Array.prototype.lastIndexOf),Ql=At(Array.prototype.pop),fo=At(Array.prototype.push),uv=At(Array.prototype.splice),Ls=Array.isArray,So=At(String.prototype.toLowerCase),fi=At(String.prototype.toString),Jl=At(String.prototype.match),po=At(String.prototype.replace),ec=At(String.prototype.indexOf),fv=At(String.prototype.trim),dv=At(Number.prototype.toString),pv=At(Boolean.prototype.toString),tc=typeof BigInt>"u"?null:At(BigInt.prototype.toString),nc=typeof Symbol>"u"?null:At(Symbol.prototype.toString),yn=At(Object.prototype.hasOwnProperty),ho=At(Object.prototype.toString),nn=At(RegExp.prototype.test),ls=hv(TypeError);function At(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return Di(t,e,r)}}function hv(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return Fi(t,n)}}function We(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:So;if(Xl&&Xl(t,null),!Ls(e))return t;let r=e.length;for(;r--;){let s=e[r];if(typeof s=="string"){const o=n(s);o!==s&&(av(e)||(e[r]=o),s=o)}t[s]=!0}return t}function vv(t){for(let e=0;e<t.length;e++)yn(t,e)||(t[e]=null);return t}function Nn(t){const e=Ns(null);for(const r of Du(t)){var n=sv(r,2);const s=n[0],o=n[1];yn(t,s)&&(Ls(o)?e[s]=vv(o):o&&typeof o=="object"&&o.constructor===Object?e[s]=Nn(o):e[s]=o)}return e}function gv(t){switch(typeof t){case"string":return t;case"number":return dv(t);case"boolean":return pv(t);case"bigint":return tc?tc(t):"0";case"symbol":return nc?nc(t):"Symbol()";case"undefined":return ho(t);case"function":case"object":{if(t===null)return ho(t);const e=t,n=qn(e,"toString");if(typeof n=="function"){const r=n(e);return typeof r=="string"?r:ho(r)}return ho(t)}default:return ho(t)}}function qn(t,e){for(;t!==null;){const r=lv(t,e);if(r){if(r.get)return At(r.get);if(typeof r.value=="function")return At(r.value)}t=iv(t)}function n(){return null}return n}function mv(t){try{return nn(t,""),!0}catch{return!1}}const rc=Ot(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),di=Ot(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),pi=Ot(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),_v=Ot(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),hi=Ot(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),bv=Ot(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),sc=Ot(["#text"]),oc=Ot(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),vi=Ot(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),ac=Ot(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ba=Ot(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),xv=Ut(/{{[\w\W]*|^[\w\W]*}}/g),yv=Ut(/<%[\w\W]*|^[\w\W]*%>/g),kv=Ut(/\${[\w\W]*/g),wv=Ut(/^data-[\-\w.\u00B7-\uFFFF]+$/),Sv=Ut(/^aria-[\-\w]+$/),ic=Ut(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Tv=Ut(/^(?:\w+script|data):/i),$v=Ut(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Ev=Ut(/^html$/i),Av=Ut(/^[a-z][.\w]*(-[.\w]+)+$/i),lc=Ut(/<[/\w!]/g),cc=Ut(/<[/\w]/g),Cv=Ut(/<\/no(script|embed|frames)/i),Rv=Ut(/\/>/i),Pn={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Hu=["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"],Pv=Ot(We({},Hu)),Iv=(function(){const t={};return fs(Hu,e=>{t[e]=Ut(new RegExp("</"+e+"(?=[\\t\\n\\f\\r />])","i"))}),Ot(t)})(),Nv=function(){return typeof window>"u"?null:window},Ov=function(e,n){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let r=null;const s="data-tt-policy-suffix";n&&n.hasAttribute(s)&&(r=n.getAttribute(s));const o="dompurify"+(r?"#"+r:"");try{return e.createPolicy(o,{createHTML(a){return a},createScriptURL(a){return a}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}},uc=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},es=function(e,n,r,s){return yn(e,n)&&Ls(e[n])?We(s.base?Nn(s.base):{},e[n],s.transform):r},gi=function(e,n,r){const s=yn(e,n)?e[n]:void 0;return s&&typeof s=="object"?Nn(s):r()};function Bu(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Nv();const e=H=>Bu(H);if(e.version="3.4.15",e.removed=[],!t||!t.document||t.document.nodeType!==Pn.document||!t.Element)return e.isSupported=!1,e;let n=t.document;const r=n,s=r.currentScript;t.DocumentFragment;const o=t.HTMLTemplateElement,a=t.Node,l=t.Element,c=t.NodeFilter,p=t.NamedNodeMap;p===void 0&&(t.NamedNodeMap||t.MozNamedAttrMap),t.HTMLFormElement;const u=t.DOMParser,_=t.trustedTypes,d=l.prototype,T=qn(d,"cloneNode"),x=qn(d,"remove"),w=qn(d,"removeAttributeNode"),R=qn(d,"nextSibling"),O=qn(d,"childNodes"),j=qn(d,"parentNode"),F=qn(d,"shadowRoot"),Q=qn(d,"attributes"),C=a&&a.prototype?qn(a.prototype,"nodeType"):null,A=a&&a.prototype?qn(a.prototype,"nodeName"):null,N=a&&a.prototype?qn(a.prototype,"ownerDocument"):null,se=function(f){return C?C(f):f.nodeType},te=function(f){return A?A(f):f.nodeName};if(typeof o=="function"){const H=n.createElement("template");H.content&&H.content.ownerDocument&&(n=H.content.ownerDocument)}let ve,me="",_e,Ve=!1,Ue=0;const tt=function(){if(Ue>0)throw ls('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},Y=function(f){tt(),Ue++;try{return ve.createHTML(f)}finally{Ue--}},ge=function(f){tt(),Ue++;try{return ve.createScriptURL(f)}finally{Ue--}},ie=function(){return Ve||(_e=Ov(_,s),Ve=!0),_e},ue=n,P=ue.implementation,fe=ue.createNodeIterator,qe=ue.createDocumentFragment,V=ue.getElementsByTagName,ee=r.importNode;let de=uc();e.isSupported=typeof Du=="function"&&typeof j=="function"&&P&&P.createHTMLDocument!==void 0;const Qe=xv,sn=yv,jt=kv,on=wv,an=Sv,zt=Tv,Dn=$v,Fn=Av;let Hn=ic,xe=null;const Wt=We({},[...rc,...di,...pi,...hi,...sc]);let Me=null;const tr=We({},[...oc,...vi,...ac,...ba]);let Mt=Object.seal(Ns(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Tn=null,_r=null;const Vt=Object.seal(Ns(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Or=!0,br=!0,nr=!1,$n=!0,Jt=!1,mn=!0,qt=!1,xr=!1,Bn=null,Un=null,rr=!1,En=!1,An=!1,sr=!1,zr=!0,Kr=!1;const Mr="user-content-";let Lr=!0,or=!1,Cn={},Rn=null;const Dr=We({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let pe=null;const Je=We({},["audio","video","img","source","image","track"]);let Be=null;const we=We({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),je="http://www.w3.org/1998/Math/MathML",wt="http://www.w3.org/2000/svg",De="http://www.w3.org/1999/xhtml";let Ct=De,Gt=!1,rt=null;const St=We({},[je,wt,De],fi),gt=Ot(["mi","mo","mn","ms","mtext"]);let Lt=We({},gt);const jn=Ot(["annotation-xml"]);let Rt=We({},jn);const Tt=We({},["title","style","font","a","script"]);let ht=null;const Wn=["application/xhtml+xml","text/html"],bt="text/html";let Ge=null,_n=null;const yr=n.createElement("form"),$=function(f){return f instanceof RegExp||f instanceof Function},D=function(){let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(_n&&_n===f)return;(!f||typeof f!="object")&&(f={}),f=Nn(f),ht=Wn.indexOf(f.PARSER_MEDIA_TYPE)===-1?bt:f.PARSER_MEDIA_TYPE,Ge=ht==="application/xhtml+xml"?fi:So,xe=es(f,"ALLOWED_TAGS",Wt,{transform:Ge}),Me=es(f,"ALLOWED_ATTR",tr,{transform:Ge}),rt=es(f,"ALLOWED_NAMESPACES",St,{transform:fi}),Be=es(f,"ADD_URI_SAFE_ATTR",we,{transform:Ge,base:we}),pe=es(f,"ADD_DATA_URI_TAGS",Je,{transform:Ge,base:Je}),Rn=es(f,"FORBID_CONTENTS",Dr,{transform:Ge}),Tn=es(f,"FORBID_TAGS",Nn({}),{transform:Ge}),_r=es(f,"FORBID_ATTR",Nn({}),{transform:Ge}),Cn=yn(f,"USE_PROFILES")?f.USE_PROFILES&&typeof f.USE_PROFILES=="object"?Nn(f.USE_PROFILES):f.USE_PROFILES:!1,Or=f.ALLOW_ARIA_ATTR!==!1,br=f.ALLOW_DATA_ATTR!==!1,nr=f.ALLOW_UNKNOWN_PROTOCOLS||!1,$n=f.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Jt=f.SAFE_FOR_TEMPLATES||!1,mn=f.SAFE_FOR_XML!==!1,qt=f.WHOLE_DOCUMENT||!1,En=f.RETURN_DOM||!1,An=f.RETURN_DOM_FRAGMENT||!1,sr=f.RETURN_TRUSTED_TYPE||!1,rr=f.FORCE_BODY||!1,zr=f.SANITIZE_DOM!==!1,Kr=f.SANITIZE_NAMED_PROPS||!1,Lr=f.KEEP_CONTENT!==!1,or=f.IN_PLACE||!1,Hn=mv(f.ALLOWED_URI_REGEXP)?f.ALLOWED_URI_REGEXP:ic,Ct=typeof f.NAMESPACE=="string"?f.NAMESPACE:De,Lt=gi(f,"MATHML_TEXT_INTEGRATION_POINTS",()=>We({},gt)),Rt=gi(f,"HTML_INTEGRATION_POINTS",()=>We({},jn));const y=gi(f,"CUSTOM_ELEMENT_HANDLING",()=>Ns(null));if(Mt=Ns(null),yn(y,"tagNameCheck")&&$(y.tagNameCheck)&&(Mt.tagNameCheck=y.tagNameCheck),yn(y,"attributeNameCheck")&&$(y.attributeNameCheck)&&(Mt.attributeNameCheck=y.attributeNameCheck),yn(y,"allowCustomizedBuiltInElements")&&typeof y.allowCustomizedBuiltInElements=="boolean"&&(Mt.allowCustomizedBuiltInElements=y.allowCustomizedBuiltInElements),Ut(Mt),Jt&&(br=!1),An&&(En=!0),Cn&&(xe=We({},sc),Me=Ns(null),Cn.html===!0&&(We(xe,rc),We(Me,oc)),Cn.svg===!0&&(We(xe,di),We(Me,vi),We(Me,ba)),Cn.svgFilters===!0&&(We(xe,pi),We(Me,vi),We(Me,ba)),Cn.mathMl===!0&&(We(xe,hi),We(Me,ac),We(Me,ba))),Vt.tagCheck=null,Vt.attributeCheck=null,yn(f,"ADD_TAGS")&&(typeof f.ADD_TAGS=="function"?Vt.tagCheck=f.ADD_TAGS:Ls(f.ADD_TAGS)&&(xe===Wt&&(xe=Nn(xe)),We(xe,f.ADD_TAGS,Ge))),yn(f,"ADD_ATTR")&&(typeof f.ADD_ATTR=="function"?Vt.attributeCheck=f.ADD_ATTR:Ls(f.ADD_ATTR)&&(Me===tr&&(Me=Nn(Me)),We(Me,f.ADD_ATTR,Ge))),yn(f,"ADD_FORBID_CONTENTS")&&Ls(f.ADD_FORBID_CONTENTS)&&(Rn===Dr&&(Rn=Nn(Rn)),We(Rn,f.ADD_FORBID_CONTENTS,Ge)),Lr&&(xe["#text"]=!0),qt&&We(xe,["html","head","body"]),xe.table&&(We(xe,["tbody"]),delete Tn.tbody),f.TRUSTED_TYPES_POLICY){if(typeof f.TRUSTED_TYPES_POLICY.createHTML!="function")throw ls('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof f.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw ls('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const M=ve;ve=f.TRUSTED_TYPES_POLICY;try{me=Y("")}catch(Z){throw ve=M,Z}}else f.TRUSTED_TYPES_POLICY===null?(ve=void 0,me=""):(ve===void 0&&(ve=ie()),ve&&typeof me=="string"&&(me=Y("")));Ot&&Ot(f),_n=f},W=We({},[...di,...pi,..._v]),b=We({},[...hi,...bv]),E=function(f,y,M){return y.namespaceURI===De?f==="svg":y.namespaceURI===je?f==="svg"&&(M==="annotation-xml"||Lt[M]):!!W[f]},B=function(f,y,M){return y.namespaceURI===De?f==="math":y.namespaceURI===wt?f==="math"&&Rt[M]:!!b[f]},q=function(f,y,M){return y.namespaceURI===wt&&!Rt[M]||y.namespaceURI===je&&!Lt[M]?!1:!b[f]&&(Tt[f]||!W[f])},G=function(f){let y=j(f);(!y||!y.tagName)&&(y={namespaceURI:Ct,tagName:"template"});const M=So(f.tagName),Z=So(y.tagName);return rt[f.namespaceURI]?f.namespaceURI===wt?E(M,y,Z):f.namespaceURI===je?B(M,y,Z):f.namespaceURI===De?q(M,y,Z):!!(ht==="application/xhtml+xml"&&rt[f.namespaceURI]):!1},oe=function(f){fo(e.removed,{element:f});try{j(f).removeChild(f)}catch{if(x(f),!j(f))throw ls("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},ne=function(f,y,M){try{w(f,y)}catch{try{f.removeAttribute(M)}catch{}}},Pe=function(f){Fe(f);const y=O(f);if(y){const Z=[];fs(y,ce=>{fo(Z,ce)}),fs(Z,ce=>{try{x(ce)}catch{}})}const M=Q(f);if(M)for(let Z=M.length-1;Z>=0;--Z){const ce=M[Z],ke=ce&&ce.name;typeof ke=="string"&&ne(f,ce,ke)}},Ce=function(f,y,M){if(!M)try{M=y.getAttributeNode(f)}catch{M=null}fo(e.removed,{attribute:M||null,from:y});try{M?w(y,M):y.removeAttribute(f)}catch{try{y.removeAttribute(f)}catch{}}if(f==="is")if(En||An)try{oe(y)}catch{}else try{y.setAttribute(f,"")}catch{}},ye=function(f){const y=Q(f);if(y)for(let M=y.length-1;M>=0;--M){const Z=y[M],ce=Z&&Z.name;typeof ce!="string"||Me[Ge(ce)]||ne(f,Z,ce)}},Fe=function(f){const y=[f];for(;y.length>0;){const M=y.pop();se(M)===Pn.element&&ye(M);const ce=O(M);if(ce)for(let ke=ce.length-1;ke>=0;--ke)y.push(ce[ke])}},at=function(f,y){return mn?f==="patchsrc"?!0:f==="for"&&y!=="label"&&y!=="output":!1},re=function(f){if(!mn)return;const y=[f];for(;y.length>0;){const M=y.pop(),Z=se(M);if(Z===Pn.processingInstruction||Z===Pn.comment&&nn(cc,M.data)){try{x(M)}catch{}continue}if(Z===Pn.element){const ke=M,Ze=Ge(te(M));try{ke.hasAttribute&&ke.hasAttribute("patchsrc")&&ke.removeAttribute("patchsrc"),ke.hasAttribute&&ke.hasAttribute("for")&&at("for",Ze)&&ke.removeAttribute("for")}catch{}}const ce=O(M);if(ce)for(let ke=ce.length-1;ke>=0;--ke)y.push(ce[ke])}},Ke=function(f){let y=null,M=null;if(rr)f="<remove></remove>"+f;else{const ke=Jl(f,/^[\r\n\t ]+/);M=ke&&ke[0]}ht==="application/xhtml+xml"&&Ct===De&&(f='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+f+"</body></html>");const Z=ve?Y(f):f;if(Ct===De)try{y=new u().parseFromString(Z,ht)}catch{}if(!y||!y.documentElement){y=P.createDocument(Ct,"template",null);try{y.documentElement.innerHTML=Gt?me:Z}catch{}}const ce=y.body||y.documentElement;return f&&M&&ce.insertBefore(n.createTextNode(M),ce.childNodes[0]||null),Ct===De?V.call(y,qt?"html":"body")[0]:qt?y.documentElement:ce},Ye=function(f){const y=N?N(f):f.ownerDocument;return fe.call(y||f,f,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},mt=function(f){return f=po(f,Qe," "),f=po(f,sn," "),f=po(f,jt," "),f},vt=function(f){var y;f.normalize();const M=N?N(f):f.ownerDocument,Z=fe.call(M||f,f,c.SHOW_TEXT|c.SHOW_COMMENT|c.SHOW_CDATA_SECTION|c.SHOW_PROCESSING_INSTRUCTION,null);let ce=Z.nextNode();for(;ce;)ce.data=mt(ce.data),ce=Z.nextNode();const ke=(y=f.querySelectorAll)===null||y===void 0?void 0:y.call(f,"template");ke&&fs(ke,Ze=>{Pt(Ze.content)&&vt(Ze.content)})},en=function(f){const y=A?A(f):null;return typeof y!="string"||Ge(y)!=="form"?!1:typeof f.nodeName!="string"||typeof f.textContent!="string"||typeof f.removeChild!="function"||f.attributes!==Q(f)||typeof f.removeAttribute!="function"||typeof f.removeAttributeNode!="function"||typeof f.getAttributeNode!="function"||typeof f.setAttribute!="function"||typeof f.namespaceURI!="string"||typeof f.insertBefore!="function"||typeof f.hasChildNodes!="function"||f.nodeType!==C(f)||f.childNodes!==O(f)},Pt=function(f){if(!C||typeof f!="object"||f===null)return!1;try{return C(f)===Pn.documentFragment}catch{return!1}},ln=function(f){if(!C||typeof f!="object"||f===null)return!1;try{return typeof C(f)=="number"}catch{return!1}};function it(H,f,y){H.length!==0&&fs(H,M=>{M.call(e,f,y,_n)})}const st=function(f,y){return!!(mn&&f.hasChildNodes()&&!ln(f.firstElementChild)&&nn(lc,f.textContent)&&nn(lc,f.innerHTML)||mn&&f.namespaceURI===De&&Pv[y]&&(ln(f.firstElementChild)||typeof f.textContent=="string"&&nn(Iv[y],f.textContent))||f.nodeType===Pn.processingInstruction||mn&&f.nodeType===Pn.comment&&nn(cc,f.data))},Vn=function(f,y){if(f instanceof RegExp)return nn(f,y);if(f instanceof Function){for(var M=arguments.length,Z=new Array(M>2?M-2:0),ce=2;ce<M;ce++)Z[ce-2]=arguments[ce];return!!f(y,...Z)}return!1},ar=function(f,y,M){if(!Tn[y]&&bn(y)&&Vn(Mt.tagNameCheck,y))return!1;if(Lr&&!Rn[y]){const Z=j(f),ce=O(f);if(ce&&Z){const ke=ce.length;for(let Ze=ke-1;Ze>=0;--Ze){const ot=f===M?T(ce[Ze],!0):ce[Ze];Z.insertBefore(ot,R(f))}}}return oe(f),!0},Fr=function(f,y,M,Z){return f.length===0?y:y===M||y===Z?Nn(y):y},kr=function(f,y){return f===y||j(f)!==null?!1:(or&&Fe(f),!0)},lt=function(f,y){if(it(de.beforeSanitizeElements,f,null),kr(f,y))return!0;if(en(f))return oe(f),!0;const M=Ge(te(f));if(xe=Fr(de.uponSanitizeElement,xe,Wt,Bn),it(de.uponSanitizeElement,f,{tagName:M,allowedTags:xe}),kr(f,y))return!0;if(st(f,M))return oe(f),!0;if(Tn[M]||!(Vt.tagCheck instanceof Function&&Vt.tagCheck(M))&&!xe[M]){const ce=ar(f,M,y);return ce===!1&&it(de.afterSanitizeElements,f,null),ce}if(se(f)===Pn.element&&!G(f)||(M==="noscript"||M==="noembed"||M==="noframes")&&nn(Cv,f.innerHTML))return oe(f),!0;if(Jt&&f.nodeType===Pn.text){const ce=mt(f.textContent);f.textContent!==ce&&(fo(e.removed,{element:f.cloneNode()}),f.textContent=ce)}return it(de.afterSanitizeElements,f,null),!1},ct=function(f,y,M){if(_r[y]||at(y,f)||zr&&(y==="id"||y==="name")&&(M in n||M in yr))return!1;const Z=Me[y]||Vt.attributeCheck instanceof Function&&Vt.attributeCheck(y,f);return br&&nn(on,y)||Or&&nn(an,y)?!0:Z?Be[y]||nn(Hn,po(M,Dn,""))||(y==="src"||y==="xlink:href"||y==="href")&&f!=="script"&&ec(M,"data:")===0&&pe[f]||nr&&!nn(zt,po(M,Dn,""))?!0:!M:bn(f)&&Vn(Mt.tagNameCheck,f)&&Vn(Mt.attributeNameCheck,y,f)||y==="is"&&Mt.allowCustomizedBuiltInElements&&Vn(Mt.tagNameCheck,M)},dt=We({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),bn=function(f){return!dt[So(f)]&&nn(Fn,f)},cn=function(f,y,M,Z){if(ve&&typeof _=="object"&&typeof _.getAttributeType=="function"&&!M)switch(_.getAttributeType(f,y)){case"TrustedHTML":return Y(Z);case"TrustedScriptURL":return ge(Z)}return Z},Yr=function(f,y,M,Z){try{return M?f.setAttributeNS(M,y,Z):f.setAttribute(y,Z),en(f)?(oe(f),!1):!0}catch{return Ce(y,f),!1}},is=function(f){it(de.beforeSanitizeAttributes,f,null);const y=f.attributes;if(!y||en(f))return;Me=Fr(de.uponSanitizeAttribute,Me,tr,Un);const M={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Me,forceKeepAttr:void 0};let Z=y.length;const ce=Ge(f.nodeName);for(;Z--;){const ke=y[Z],Ze=ke.name,ot=ke.namespaceURI,Dt=ke.value,Kt=Ge(Ze),Cs=Dt;let Yt=Ze==="value"?Cs:fv(Cs),ha=!1;if(M.attrName=Kt,M.attrValue=Yt,M.keepAttr=!0,M.forceKeepAttr=void 0,it(de.uponSanitizeAttribute,f,M),Yt=M.attrValue,Kr&&(Kt==="id"||Kt==="name")&&ec(Yt,Mr)!==0&&(Ce(Ze,f,ke),Yt=Mr+Yt,ha=!0),mn&&nn(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,Yt)){Ce(Ze,f,ke);continue}if(Kt==="attributename"&&Jl(Yt,"href")){Ce(Ze,f,ke);continue}if(!M.forceKeepAttr){if(!M.keepAttr){Ce(Ze,f,ke);continue}if(!$n&&nn(Rv,Yt)){Ce(Ze,f,ke);continue}if(Jt&&(Yt=mt(Yt)),!ct(ce,Kt,Yt)){Ce(Ze,f,ke);continue}Yt=cn(ce,Kt,ot,Yt),Yt!==Cs&&Yr(f,Ze,ot,Yt)&&ha&&Ql(e.removed)}}it(de.afterSanitizeAttributes,f,null)},Zr=function(f){let y=null;const M=Ye(f);for(it(de.beforeSanitizeShadowDOM,f,null);y=M.nextNode();)if(it(de.uponSanitizeShadowNode,y,null),lt(y,f),is(y),Pt(y.content)&&Zr(y.content),se(y)===Pn.element){const Z=F(y);Pt(Z)&&(tn(Z),Zr(Z))}it(de.afterSanitizeShadowDOM,f,null)},tn=function(f){const y=[{node:f,shadow:null}];for(;y.length>0;){const M=y.pop();if(M.shadow){Zr(M.shadow);continue}const Z=M.node,ke=se(Z)===Pn.element,Ze=O(Z);if(Ze)for(let ot=Ze.length-1;ot>=0;--ot)y.push({node:Ze[ot],shadow:null});if(ke){const ot=A?A(Z):null;if(typeof ot=="string"&&Ge(ot)==="template"){const Dt=Z.content;Pt(Dt)&&y.push({node:Dt,shadow:null})}}if(ke){const ot=F(Z);Pt(ot)&&y.push({node:null,shadow:ot},{node:ot,shadow:null})}}};return e.sanitize=function(H){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},y=null,M=null,Z=null,ce=null;if(Gt=!H,Gt&&(H="<!-->"),typeof H!="string"&&!ln(H)&&(H=gv(H),typeof H!="string"))throw ls("dirty is not a string, aborting");if(!e.isSupported)return H;xr?(xe=Bn,Me=Un):D(f),(de.uponSanitizeElement.length>0||de.uponSanitizeAttribute.length>0)&&(xe=Nn(xe)),de.uponSanitizeAttribute.length>0&&(Me=Nn(Me)),e.removed=[];const ke=or&&typeof H!="string"&&ln(H);if(ke){re(H);const Dt=te(H);if(typeof Dt=="string"){const Kt=Ge(Dt);if(!xe[Kt]||Tn[Kt])throw Pe(H),ls("root node is forbidden and cannot be sanitized in-place")}if(en(H))throw Pe(H),ls("root node is clobbered and cannot be sanitized in-place");try{tn(H)}catch(Kt){throw Pe(H),Kt}}else if(ln(H))y=Ke("<!---->"),M=y.ownerDocument.importNode(H,!0),M.nodeType===Pn.element&&M.nodeName==="BODY"||M.nodeName==="HTML"?y=M:y.appendChild(M),tn(y);else{if(!En&&!Jt&&!qt&&H.indexOf("<")===-1)return ve&&sr?Y(H):H;if(y=Ke(H),!y)return En?null:sr?me:""}y&&rr&&oe(y.firstChild);const Ze=ke?H:y;try{const Dt=Ye(Ze);for(;Z=Dt.nextNode();)lt(Z,Ze),is(Z),Pt(Z.content)&&Zr(Z.content)}catch(Dt){throw ke&&(Pe(H),fs(e.removed,Kt=>{Kt.element&&Fe(Kt.element)})),Dt}if(ke)return fs(e.removed,Dt=>{Dt.element&&Fe(Dt.element)}),Jt&&vt(H),H;if(En){if(Jt&&vt(y),An)for(ce=qe.call(y.ownerDocument);y.firstChild;)ce.appendChild(y.firstChild);else ce=y;return(Me.shadowroot||Me.shadowrootmode)&&(ce=ee.call(r,ce,!0)),ce}let ot=qt?y.outerHTML:y.innerHTML;return qt&&xe["!doctype"]&&y.ownerDocument&&y.ownerDocument.doctype&&y.ownerDocument.doctype.name&&nn(Ev,y.ownerDocument.doctype.name)&&(ot="<!DOCTYPE "+y.ownerDocument.doctype.name+`>
`+ot),Jt&&(ot=mt(ot)),ve&&sr?Y(ot):ot},e.setConfig=function(){let H=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};D(H),xr=!0,Bn=xe,Un=Me},e.clearConfig=function(){_n=null,xr=!1,Bn=null,Un=null,ve=_e,me=""},e.isValidAttribute=function(H,f,y){_n||D({});const M=Ge(H),Z=Ge(f);return ct(M,Z,y)},e.addHook=function(H,f){typeof f=="function"&&yn(de,H)&&fo(de[H],f)},e.removeHook=function(H,f){if(yn(de,H)){if(f!==void 0){const y=cv(de[H],f);return y===-1?void 0:uv(de[H],y,1)[0]}return Ql(de[H])}},e.removeHooks=function(H){yn(de,H)&&(de[H]=[])},e.removeAllHooks=function(){de=uc()},e}var zv=Bu(),Mv=I(`<div class="pointer-events-none absolute inset-2 z-20 flex items-center justify-center
                rounded-md border-2 border-dashed border-mk-green/70 bg-mk-bg/80 text-xs text-mk-green svelte-1roe1v9">Drop files to attach</div>`),Lv=I('<p class="rounded-sm border border-mk-pink/40 bg-mk-pink/10 px-2 py-1 text-xs text-mk-pink svelte-1roe1v9"> </p>'),Dv=I('<div class="flex flex-col items-start gap-1 svelte-1roe1v9"><span class="flex items-center gap-1.5 text-[11px] font-semibold text-mk-green svelte-1roe1v9"><!> </span> <div class="chat-bubble chat-bubble-agent chat-prose text-[13px] leading-relaxed text-mk-fg svelte-1roe1v9"></div></div>'),Fv=I('<div class="flex flex-col items-end gap-1 svelte-1roe1v9"><span class="text-[11px] font-semibold text-mk-blue svelte-1roe1v9">You</span> <div class="chat-bubble chat-bubble-user text-[13px] leading-relaxed whitespace-pre-wrap text-mk-fg svelte-1roe1v9"> </div></div>'),Hv=I(`<div class="m-auto flex max-w-[250px] flex-col items-center gap-2.5 text-center svelte-1roe1v9"><!> <p class="text-xs leading-relaxed text-mk-comment svelte-1roe1v9">Ask about the file you have open. The prompt goes to <span class="text-mk-muted svelte-1roe1v9"> </span>,
            and the reply appears here.</p></div>`),fc=I('<span class="text-mk-comment svelte-1roe1v9"> </span>'),Bv=I('<div class="flex items-start gap-1.5 text-mk-comment svelte-1roe1v9"><span class="mt-[3px] text-mk-green svelte-1roe1v9">●</span> <span class="truncate svelte-1roe1v9"><b class="font-medium text-mk-fg/80 svelte-1roe1v9"> </b> <!></span></div>'),Uv=I('<div class="flex flex-col gap-0.5 text-[11px] svelte-1roe1v9"></div>'),jv=I('<div class="flex flex-col items-start gap-1 svelte-1roe1v9"><span class="flex items-center gap-1.5 text-[11px] font-semibold text-mk-green svelte-1roe1v9"><!> </span> <div class="chat-bubble chat-bubble-agent chat-prose text-[13px] leading-relaxed text-mk-fg svelte-1roe1v9"><!><span class="chat-caret svelte-1roe1v9"></span></div></div>'),Wv=I('<div class="flex items-center gap-2 text-[11px] text-mk-comment svelte-1roe1v9"><!> <span class="svelte-1roe1v9"> <span class="chat-dots svelte-1roe1v9"></span></span></div>'),Vv=I(`<button class="mx-auto -mt-1 mb-1 flex shrink-0 items-center gap-1 rounded-full border border-mk-line
             bg-mk-input px-2.5 py-0.5 text-[11px] text-mk-comment shadow hover:text-mk-fg svelte-1roe1v9"><!> </button>`),qv=I(`<span title="Context used of the model's window"> </span> <span class="h-2 w-16 overflow-hidden rounded-full bg-mk-line svelte-1roe1v9" aria-hidden="true"><span></span></span>`,1),Gv=I('<span class="text-mk-muted svelte-1roe1v9" title="Several sessions share this folder — totals cover all of them">shared</span>'),Kv=I('<span class="truncate text-mk-muted svelte-1roe1v9" title="Model for the most recent turn"> </span>'),Yv=I('<!> <span class="svelte-1roe1v9"> </span> <!> <!> <!>',1),Zv=I('<span class="text-mk-muted svelte-1roe1v9">No usage reported yet</span>'),Xv=I('<button class="ml-auto flex items-center gap-1 rounded-sm px-1.5 py-0.5 hover:bg-mk-line hover:text-mk-fg disabled:opacity-40 svelte-1roe1v9" title="Compact the conversation to free up context (/compact)"><!> Compact</button>'),Qv=I('<span class="flex items-center gap-1 rounded-sm bg-mk-input px-1.5 py-0.5 text-[11px] text-mk-fg svelte-1roe1v9"><!> <button class="rounded-sm p-0.5 text-mk-comment hover:text-mk-fg svelte-1roe1v9" title="Remove attachment">×</button></span>'),Jv=I('<div class="flex shrink-0 flex-wrap gap-1 border-t border-mk-line px-3 py-1.5 svelte-1roe1v9"></div>'),dc=I('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line svelte-1roe1v9"><span class="w-3 text-mk-green svelte-1roe1v9"><!></span> </button>'),eg=I('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[150px] rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl svelte-1roe1v9"></div>'),tg=I('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line svelte-1roe1v9"><span class="w-3 text-mk-green svelte-1roe1v9"><!></span> <span class="truncate svelte-1roe1v9"> </span></button>'),ng=I('<div class="absolute bottom-full left-0 z-20 mb-1 max-h-[260px] min-w-[190px] overflow-y-auto rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl svelte-1roe1v9"></div>'),rg=I('<div class="relative svelte-1roe1v9" data-menu=""><button class="flex max-w-[110px] items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg svelte-1roe1v9" title="Model"><span class="truncate svelte-1roe1v9"> </span> <!></button> <!></div>'),sg=I('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[130px] rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl svelte-1roe1v9"></div>'),og=I('<div class="relative svelte-1roe1v9" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg svelte-1roe1v9" title="Reasoning effort"> <!></button> <!></div>'),ag=I('<div class="relative flex h-full min-h-0 flex-col bg-mk-bg text-mk-fg svelte-1roe1v9" role="region" aria-label="AI Agent conversation"><!> <div class="relative flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-3 py-3 svelte-1roe1v9"><!> <!> <!> <!> <!></div> <!> <div class="flex shrink-0 items-center gap-2 border-t border-mk-line px-3 py-1 text-[10px] text-mk-comment svelte-1roe1v9"><!> <!></div> <!> <div class="border-t border-mk-line p-2 svelte-1roe1v9"><div class="rounded-md border border-mk-line bg-mk-input focus-within:border-mk-green svelte-1roe1v9"><textarea rows="2" class="max-h-[200px] w-full resize-none bg-transparent px-2.5 py-2 text-[13px] text-mk-fg outline-none placeholder:text-mk-comment svelte-1roe1v9" placeholder="Ask about this workspace…"></textarea> <div class="flex items-center gap-1 px-1.5 pb-1.5 text-[11px] svelte-1roe1v9"><div class="relative svelte-1roe1v9" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg svelte-1roe1v9" title="Agent"> <!></button> <!></div> <!> <!> <!> <span class="ml-auto flex items-center gap-1.5 svelte-1roe1v9"><kbd class="hidden text-[10px] text-mk-comment sm:inline svelte-1roe1v9">↵ send · ⇧↵ newline</kbd> <button class="flex h-6 w-6 items-center justify-center rounded-md bg-mk-green text-mk-bg disabled:opacity-40 svelte-1roe1v9" title="Send (Enter)" aria-label="Send"><!></button></span></div></div></div></div>');function ig(t,e){vn(e,!0);let n=kt(e,"sessions",19,()=>[]),r=kt(e,"session",3,""),s=kt(e,"rootPath",3,""),o=kt(e,"target",15,"");Xt(()=>{!o()&&(r()||n()[0])&&o(r()||n()[0])});let a=z(""),l=z(!1),c=0,p=z(!1),u=z(""),_=z(Xe([])),d=z(null),T=z("");const x=Ft(()=>i(l)||i(p)||!!i(u)),w=Ft(()=>{const b=[...i(_)].reverse().find(E=>E.type==="tool");return b?`Running ${b.name}`:i(u)?"Writing":i(T)||"Generating"});let R=z(Xe([])),O=z(""),j=z(null),F=z(null),Q=null,C=z(Xe({agent:"codex",available:[],model:"",effort:"",models:[],efforts:[]})),A=z(""),N=z("");const se=Ft(()=>(i(C).models.find(b=>b[0]===i(C).model)||[])[1]||i(C).model||"default");let te=z("");async function ve(){if(!v.connectionId){h(te,"");return}try{h(te,(await Oe.agentContext(v.connectionId)).context||"",!0)}catch{h(te,"")}}Xt(()=>{v.connectionId,ve()});async function me(){if(o())try{h(C,{agent:"codex",available:[],model:"",effort:"",models:[],efforts:[],...await Oe.sessionAgent(o())},!0)}catch(b){h(C,{agent:i(C).agent,available:[],model:"",effort:"",models:[],efforts:[]},!0),v.setStatus(b.message||"Could not read agent settings")}}async function _e(){if(o())try{const b=await Oe.chat(o()),E=b.messages||[],B=new Set;for(const ye of E)ye.role==="user"&&(ye.text&&B.add(ye.text.trim()),ye.full&&B.add(ye.full.trim()));const q=i(R).filter(ye=>ye._local&&!B.has((ye.text||"").trim())),G=q.length?[...E,...q]:E,oe=G.length!==i(R).length;h(R,G,!0),h(p,!!b.busy),h(T,b.detail||"",!0);const ne=b.pending||"",Pe=b.steps||[],Ce=ne!==i(u)||Pe.length!==i(_).length;h(u,ne,!0),h(_,Pe,!0),h(O,""),(oe||Ce||i(x))&&i(tt)&&ge()}catch(b){h(O,b.message||"Could not load chat",!0)}}const Ve=3e3,Ue=600;Xt(()=>{const b=i(x)?Ue:Ve;!o()||c===b||(c=b,clearInterval(Q),Q=setInterval(_e,b))});let tt=z(!0);function Y(){if(!i(j))return;const b=i(j).scrollHeight-i(j).scrollTop-i(j).clientHeight;h(tt,b<80)}async function ge(){await tl(),i(j)&&(i(j).scrollTop=i(j).scrollHeight,requestAnimationFrame(()=>{i(j)&&(i(j).scrollTop=i(j).scrollHeight)}))}function ie(){h(tt,!0),ge()}Xt(()=>{const b=o();h(R,[],!0),h(u,""),h(_,[],!0),h(p,!1),h(tt,!0),Q&&clearInterval(Q),c=0,b&&(_e(),me())}),rl(()=>{Q&&clearInterval(Q)});async function ue(b){if(h(A,""),b!==i(C).agent){h(N,"agent");try{await Oe.setSessionAgent(o(),b),await me(),v.setStatus(`Switched to ${b}`)}catch(E){v.setStatus(E.message||"Could not switch agent")}finally{h(N,"")}}}async function P(b){if(h(A,""),b!==i(C).model){h(N,"model");try{await Oe.setSessionModel(o(),b),await me(),v.setStatus(`Model set to ${b}`)}catch(E){v.setStatus(E.message||"Could not change model")}finally{h(N,"")}}}async function fe(b){if(h(A,""),b!==i(C).effort){h(N,"effort");try{await Oe.setSessionEffort(o(),b),await me(),v.setStatus(`Reasoning effort set to ${b}`)}catch(E){v.setStatus(E.message||"Could not change effort")}finally{h(N,"")}}}function qe(){const b=v.connection||{},E=v.activeTab,B=E?E.path:v.path||".",q=E?`
Active file contents (first 12,000 characters):
${E.content.slice(0,12e3)}`:"";return`${i(te)||(b.kind==="local"?`[IDE workspace]
Local folder: ${b.workspace_root||"."}
`:`[IDE workspace]
SSH target: ${b.username||"?"}@${b.host||"?"}
`)}
Currently open: ${B}${q}

${i(a).trim()}`}let V=z(!1),ee=z(Xe([]));function de(b){const E=b.dataTransfer;!E||!(E.types.includes("Files")||E.types.includes("text/x-ide-path"))||(b.preventDefault(),h(V,!0))}async function Qe(b){b.preventDefault(),h(V,!1);const E=b.dataTransfer;if(!E)return;const B=E.getData("text/x-ide-path");if(B){i(ee).includes(B)||h(ee,[...i(ee),B],!0);return}for(const q of Array.from(E.files||[]))try{const G=new FormData;G.append("file",q);const oe=await fetch(`${s()}/api/sessions/${encodeURIComponent(o())}/upload`,{method:"POST",body:G}),ne=await oe.json().catch(()=>({}));if(!oe.ok)throw new Error(ne.error||"Upload failed");ne.path&&!i(ee).includes(ne.path)&&h(ee,[...i(ee),ne.path],!0)}catch(G){v.setStatus(G.message||`Could not attach ${q.name}`)}}const sn=b=>{h(ee,i(ee).filter(E=>E!==b),!0)},jt=b=>b.split("/").pop();async function on(){const b=i(a).trim();if(!b||!o()||i(l))return;const E=i(ee).length?`

Attached files (read them from these paths):
${i(ee).map(G=>`- ${G}`).join(`
`)}`:"",B=qe()+E;h(l,!0);const q={role:"user",text:i(ee).length?`${b}

${i(ee).map(jt).join(", ")}`:b,ts:Date.now()/1e3,_local:!0};h(R,[...i(R),q],!0),h(a,""),h(ee,[],!0),i(F)&&(i(F).style.height="auto"),ge();try{const G=await fetch(`${s()}/api/sessions/${encodeURIComponent(o())}/send`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:B,display:b})}),oe=await G.json().catch(()=>({}));if(!G.ok)throw h(R,i(R).filter(ne=>ne!==q),!0),h(a,b,!0),new Error(oe.error||"Could not send");_e(),setTimeout(_e,400)}catch(G){v.setStatus(G.message||"Could not send prompt")}finally{h(l,!1)}}function an(b){b.key==="Enter"&&!b.shiftKey&&(b.preventDefault(),on())}function zt(b){const E=b.currentTarget;E.style.height="auto",E.style.height=`${Math.min(E.scrollHeight,200)}px`}const Dn=b=>b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function Fn(b){try{const E=nt.parse(b||"",{breaks:!0,gfm:!0});return zv.sanitize(E,{FORBID_TAGS:["form","input","button","style","iframe","object","embed"],FORBID_ATTR:["style","srcset"]})}catch{return Dn(b||"")}}function Hn(b){const E=b.full||b.text||"",B=`

`;if(E.startsWith("[IDE workspace")||E.startsWith("[Remote IDE context]")||E.startsWith("[Remote SSH IDE context]")){const q=E.lastIndexOf(B);if(q!==-1)return E.slice(q+B.length)}return E}let xe=z(null),Wt=z(!1),Me=null;async function tr(){if(o())try{const b=await fetch(`${s()}/api/sessions/${encodeURIComponent(o())}/mcp`);h(d,b.ok?await b.json():null,!0)}catch{h(d,null)}}async function Mt(){if(o())try{const E=await(await fetch(`${s()}/api/sessions/${encodeURIComponent(o())}/stats`)).json().catch(()=>({}));h(xe,E&&E.available?E:null,!0)}catch{h(xe,null)}}Xt(()=>(o(),Mt(),tr(),clearInterval(Me),Me=setInterval(Mt,2e4),()=>clearInterval(Me)));async function Tn(){if(!(!o()||i(Wt))){h(Wt,!0);try{const b=await fetch(`${s()}/api/sessions/${encodeURIComponent(o())}/compact`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:"/compact"})}),E=await b.json().catch(()=>({}));if(!b.ok)throw new Error(E.error||"Could not compact");v.setStatus(E.outcome||"Compact requested"),setTimeout(Mt,4e3)}catch(b){v.setStatus(b.message||"Could not compact context")}finally{h(Wt,!1)}}}const _r=b=>{const E=Number(b)||0;return E>=1e6?`${(E/1e6).toFixed(1)}M`:E>=1e3?`${(E/1e3).toFixed(1)}k`:String(E)},Vt=15,Or=2e4,br=Ft(()=>!!o()&&!!i(xe)&&(i(xe).ctxWindowSize&&(i(xe).contextPct||0)>=Vt||!i(xe).ctxWindowSize&&(i(xe).lastInputTokens||0)>=Or)),nr=b=>b>=90?"text-vs-red":b>=70?"text-vs-yellow":"text-vs-muted";var $n=ag();Ht("click",$s,b=>{var E,B;(B=(E=b.target).closest)!=null&&B.call(E,"[data-menu]")||h(A,"")});var Jt=S($n);{var mn=b=>{var E=Mv();k(b,E)};U(Jt,b=>{i(V)&&b(mn)})}var qt=g(Jt,2),xr=S(qt);{var Bn=b=>{var E=Lv(),B=le(E,!0);J(()=>X(B,i(O))),k(b,E)};U(xr,b=>{i(O)&&b(Bn)})}var Un=g(xr,2);_t(Un,19,()=>i(R),(b,E)=>b.ts+":"+E,(b,E)=>{var B=he(),q=K(B);{var G=ne=>{var Pe=Dv(),Ce=S(Pe),ye=S(Ce);ui(ye,{size:11});var Fe=g(ye),at=g(Ce,2);El(at,()=>Fn(Hn(i(E))),!0),J(()=>X(Fe,` ${i(C).agent==="claude"?"Claude":"Codex"}`)),k(ne,Pe)},oe=ne=>{var Pe=Fv(),Ce=g(S(Pe),2),ye=le(Ce,!0);J(Fe=>X(ye,Fe),[()=>Hn(i(E))]),k(ne,Pe)};U(q,ne=>{i(E).role==="assistant"?ne(G):ne(oe,-1)})}k(b,B)},b=>{var E=he(),B=K(E);{var q=G=>{var oe=Hv(),ne=S(oe);ui(ne,{size:26,strokeWidth:1.3,class:"text-mk-line"});var Pe=g(ne,2),Ce=g(S(Pe)),ye=le(Ce,!0);J(()=>X(ye,o()||"the selected session")),k(G,oe)};U(B,G=>{i(O)||G(q)})}k(b,E)});var rr=g(Un,2);{var En=b=>{var E=Uv();_t(E,21,()=>i(_).filter(B=>B.type==="tool"),nl,(B,q)=>{var G=Bv(),oe=g(S(G),2),ne=S(oe),Pe=le(ne,!0),Ce=g(ne,2);{var ye=Fe=>{var at=fc(),re=le(at);J(()=>X(re,`(${i(q).detail??""})`)),k(Fe,at)};U(Ce,Fe=>{i(q).detail&&Fe(ye)})}J(()=>X(Pe,i(q).name)),k(B,G)}),k(b,E)};U(rr,b=>{i(_).length&&i(x)&&b(En)})}var An=g(rr,2);{var sr=b=>{var E=jv(),B=S(E),q=S(B);ui(q,{size:11});var G=g(q),oe=g(B,2),ne=S(oe);El(ne,()=>Fn(i(u))),J(()=>X(G,` ${i(C).agent==="claude"?"Claude":"Codex"}`)),k(b,E)};U(An,b=>{i(u)&&b(sr)})}var zr=g(An,2);{var Kr=b=>{var E=Wv(),B=S(E);vr(B,{size:11,class:"animate-spin"});var q=g(B,2),G=S(q);J(()=>X(G,i(w))),k(b,E)};U(zr,b=>{i(x)&&b(Kr)})}Zs(qt,b=>h(j,b),()=>i(j));var Mr=g(qt,2);{var Lr=b=>{var E=Vv(),B=S(E);Cr(B,{size:11});var q=g(B);J(()=>X(q,` ${i(x)?"Jump to latest — still generating":"Jump to latest"}`)),L("click",E,ie),k(b,E)};U(Mr,b=>{i(tt)||b(Lr)})}var or=g(Mr,2),Cn=S(or);{var Rn=b=>{var E=Yv(),B=K(E);{var q=re=>{var Ke=qv(),Ye=K(Ke),mt=le(Ye),vt=g(Ye,2),en=le(vt);J((Pt,ln)=>{pn(Ye,1,Pt,"svelte-1roe1v9"),X(mt,`${i(xe).contextPct??0??""}% context`),pn(en,1,`block h-full rounded-full ${(i(xe).contextPct||0)>=90?"bg-vs-red":(i(xe).contextPct||0)>=70?"bg-vs-yellow":"bg-mk-green"}`,"svelte-1roe1v9"),ws(en,`width: ${ln??""}%`)},[()=>_u(nr(i(xe).contextPct||0)),()=>Math.min(100,Math.max(0,i(xe).contextPct||0))]),k(re,Ke)};U(B,re=>{i(xe).ctxWindowSize&&re(q)})}var G=g(B,2),oe=le(G),ne=g(G,2);{var Pe=re=>{var Ke=fc(),Ye=le(Ke);J(mt=>{Ae(Ke,"title",mt),X(Ye,`${i(d).servers.length??""} MCP`)},[()=>`MCP tools available to this agent: ${i(d).servers.map(mt=>mt.name).join(", ")}`]),k(re,Ke)};U(ne,re=>{i(d)&&i(d).servers&&i(d).servers.length&&re(Pe)})}var Ce=g(ne,2);{var ye=re=>{var Ke=Gv();k(re,Ke)};U(Ce,re=>{i(xe).shared&&re(ye)})}var Fe=g(Ce,2);{var at=re=>{var Ke=Kv(),Ye=le(Ke,!0);J(()=>X(Ye,i(xe).model)),k(re,Ke)};U(Fe,re=>{i(xe).model&&i(xe).model!=="unknown"&&re(at)})}J((re,Ke,Ye)=>{Ae(G,"title",`${i(xe).messageCount??""} turns · ${re??""} in · ${Ke??""} out`),X(oe,`${Ye??""} tokens`)},[()=>_r(i(xe).totalInput),()=>_r(i(xe).totalOutput),()=>_r(i(xe).totalTokens)]),k(b,E)},Dr=b=>{var E=Zv();k(b,E)};U(Cn,b=>{i(xe)?b(Rn):b(Dr,-1)})}var pe=g(Cn,2);{var Je=b=>{var E=Xv(),B=S(E);{var q=oe=>{vr(oe,{size:10,class:"animate-spin"})},G=oe=>{ap(oe,{size:10})};U(B,oe=>{i(Wt)?oe(q):oe(G,-1)})}J(()=>E.disabled=i(Wt)),L("click",E,Tn),k(b,E)};U(pe,b=>{i(br)&&b(Je)})}var Be=g(or,2);{var we=b=>{var E=Jv();_t(E,20,()=>i(ee),B=>B,(B,q)=>{var G=Qv(),oe=S(G);fp(oe,{size:10,class:"text-mk-comment"});var ne=g(oe),Pe=g(ne);J((Ce,ye)=>{Ae(G,"title",q),X(ne,` ${Ce??""} `),Ae(Pe,"aria-label",`Remove ${ye??""}`)},[()=>jt(q),()=>jt(q)]),L("click",Pe,()=>sn(q)),k(B,G)}),k(b,E)};U(Be,b=>{i(ee).length&&b(we)})}var je=g(Be,2),wt=S(je),De=S(wt);Zs(De,b=>h(F,b),()=>i(F));var Ct=g(De,2),Gt=S(Ct),rt=S(Gt),St=S(rt),gt=g(St);Cr(gt,{size:11});var Lt=g(rt,2);{var jn=b=>{var E=eg();_t(E,20,()=>i(C).available.length?i(C).available:["codex"],B=>B,(B,q)=>{var G=dc(),oe=S(G),ne=S(oe);{var Pe=ye=>{$a(ye,{size:11})};U(ne,ye=>{q===i(C).agent&&ye(Pe)})}var Ce=g(oe);J(()=>X(Ce,` ${q==="claude"?"Claude":"Codex"}`)),L("click",G,()=>ue(q)),k(B,G)}),k(b,E)};U(Lt,b=>{i(A)==="agent"&&b(jn)})}var Rt=g(Gt,2);{var Tt=b=>{var E=rg(),B=S(E),q=S(B),G=le(q,!0),oe=g(q,2);Cr(oe,{size:11,class:"shrink-0"});var ne=g(B,2);{var Pe=Ce=>{var ye=ng();_t(ye,21,()=>i(C).models,Fe=>Fe[0],(Fe,at)=>{var re=tg(),Ke=S(re),Ye=S(Ke);{var mt=Pt=>{$a(Pt,{size:11})};U(Ye,Pt=>{i(at)[0]===i(C).model&&Pt(mt)})}var vt=g(Ke,2),en=le(vt,!0);J(()=>X(en,i(at)[1])),L("click",re,()=>P(i(at)[0])),k(Fe,re)}),k(Ce,ye)};U(ne,Ce=>{i(A)==="model"&&Ce(Pe)})}J(()=>X(G,i(se))),L("click",B,()=>h(A,i(A)==="model"?"":"model",!0)),k(b,E)};U(Rt,b=>{i(C).models.length&&b(Tt)})}var ht=g(Rt,2);{var Wn=b=>{var E=og(),B=S(E),q=S(B),G=g(q);Cr(G,{size:11});var oe=g(B,2);{var ne=Pe=>{var Ce=sg();_t(Ce,20,()=>i(C).efforts,ye=>ye,(ye,Fe)=>{var at=dc(),re=S(at),Ke=S(re);{var Ye=vt=>{$a(vt,{size:11})};U(Ke,vt=>{Fe===i(C).effort&&vt(Ye)})}var mt=g(re);J(()=>X(mt,` ${Fe??""}`)),L("click",at,()=>fe(Fe)),k(ye,at)}),k(Pe,Ce)};U(oe,Pe=>{i(A)==="effort"&&Pe(ne)})}J(()=>X(q,`${(i(C).effort||"effort")??""} `)),L("click",B,()=>h(A,i(A)==="effort"?"":"effort",!0)),k(b,E)};U(ht,b=>{i(C).efforts.length&&b(Wn)})}var bt=g(ht,2);{var Ge=b=>{vr(b,{size:11,class:"animate-spin text-mk-muted"})};U(bt,b=>{i(N)&&b(Ge)})}var _n=g(bt,2),yr=g(S(_n),2),$=S(yr);{var D=b=>{pp(b,{size:11})},W=b=>{jd(b,{size:13})};U($,b=>{i(x)?b(D):b(W,-1)})}J(b=>{X(St,`${i(C).agent==="claude"?"Claude":"Codex"} `),yr.disabled=b},[()=>i(x)||!i(a).trim()]),Ht("dragover",$n,de),Ht("dragleave",$n,()=>h(V,!1)),Ht("drop",$n,Qe),Ht("scroll",qt,Y),L("keydown",De,an),L("input",De,zt),ut(De,()=>i(a),b=>h(a,b)),L("click",rt,()=>h(A,i(A)==="agent"?"":"agent",!0)),L("click",yr,on),k(t,$n),gn()}er(["click","keydown","input"]);var lg=I('<span class="hint svelte-e2eyom">searching…</span>'),cg=I('<li><button><span class="name svelte-e2eyom"> </span> <span class="path svelte-e2eyom"> </span> <!></button></li>'),ug=I('<ul class="results svelte-e2eyom"></ul>'),fg=I('<p class="empty svelte-e2eyom"> </p>'),dg=I('<div class="backdrop svelte-e2eyom" role="button" tabindex="-1"></div> <div class="dialog svelte-e2eyom" role="dialog" aria-label="Quick open"><div class="field svelte-e2eyom"><!> <input placeholder="Search files by name…" aria-label="Search files by name" class="svelte-e2eyom"/> <!></div> <!></div>',1);function pg(t,e){vn(e,!0);let n=z(""),r=z(Xe([])),s=z(0),o=z(!1),a=z(null),l=null;Xt(()=>{i(a)&&i(a).focus()}),Xt(()=>{const A=i(n).trim();if(l&&clearTimeout(l),!A){h(r,[],!0);return}l=setTimeout(async()=>{h(o,!0);try{const N=await Oe.searchFiles(v.connectionId,v.path||".",A);h(r,N.matches||[],!0),h(s,0)}catch{h(r,[],!0)}finally{h(o,!1)}},180)});async function c(A){var se;if(!A)return;const N=v.path&&v.path!=="."?`${v.path}/`:"";await v.openFile(`${N}${A.path}`),(se=e.onclose)==null||se.call(e)}function p(A){var N;A.key==="Escape"?(A.preventDefault(),(N=e.onclose)==null||N.call(e)):A.key==="ArrowDown"?(A.preventDefault(),h(s,Math.min(i(s)+1,i(r).length-1),!0)):A.key==="ArrowUp"?(A.preventDefault(),h(s,Math.max(i(s)-1,0),!0)):A.key==="Enter"&&(A.preventDefault(),c(i(r)[i(s)]))}var u=dg(),_=K(u),d=g(_,2),T=S(d),x=S(T);ol(x,{size:14});var w=g(x,2);Zs(w,A=>h(a,A),()=>i(a));var R=g(w,2);{var O=A=>{var N=lg();k(A,N)};U(R,A=>{i(o)&&A(O)})}var j=g(T,2);{var F=A=>{var N=ug();_t(N,23,()=>i(r),se=>se.path,(se,te,ve)=>{var me=cg(),_e=S(me);let Ve;var Ue=S(_e),tt=le(Ue,!0),Y=g(Ue,2),ge=le(Y,!0),ie=g(Y,2);{var ue=P=>{Kd(P,{size:12})};U(ie,P=>{i(ve)===i(s)&&P(ue)})}J(()=>{Ve=pn(_e,1,"svelte-e2eyom",null,Ve,{active:i(ve)===i(s)}),X(tt,i(te).name),X(ge,i(te).path)}),L("click",_e,()=>c(i(te))),k(se,me)}),k(A,N)},Q=A=>{var N=fg(),se=le(N);J(te=>X(se,`No files match “${te??""}”.`),[()=>i(n).trim()]),k(A,N)},C=Ft(()=>i(n).trim()&&!i(o));U(j,A=>{i(r).length?A(F):i(C)&&A(Q,1)})}L("click",_,()=>{var A;return(A=e.onclose)==null?void 0:A.call(e)}),L("keydown",_,A=>{var N;return A.key==="Escape"&&((N=e.onclose)==null?void 0:N.call(e))}),L("keydown",w,p),ut(w,()=>i(n),A=>h(n,A)),k(t,u),gn()}er(["click","keydown"]);var hg=I('<div class="terminal-pane svelte-maclc7"><div class="bar svelte-maclc7"><span class="label svelte-maclc7">Terminal</span> <span> </span></div> <div class="screen svelte-maclc7"></div></div>');function vg(t,e){vn(e,!0);let n=kt(e,"rootPath",3,""),r=kt(e,"session",3,""),s=kt(e,"index",3,0),o,a=null,l=null,c=null,p=z("connecting"),u=null,_=0,d=null,T=!1;const x={background:ko.colors["editor.background"],foreground:ko.colors["editor.foreground"],cursor:ko.colors["editorCursor.foreground"],selectionBackground:ko.colors["editor.selectionBackground"],black:"#272822",red:"#f92672",green:"#a6e22e",yellow:"#e6db74",blue:"#66d9ef",magenta:"#ae81ff",cyan:"#a1efe4",white:"#f8f8f2",brightBlack:"#75715e",brightRed:"#f92672",brightGreen:"#a6e22e",brightYellow:"#e6db74",brightBlue:"#66d9ef",brightMagenta:"#ae81ff",brightCyan:"#a1efe4",brightWhite:"#f9f8f5"};function w(){if(!(!l||!a||(c==null?void 0:c.readyState)!==WebSocket.OPEN))try{l.fit(),c.send(JSON.stringify({type:"resize",cols:a.cols,rows:a.rows}))}catch{}}function R(){if(T)return;const N=`${location.protocol==="https:"?"wss":"ws"}://${location.host}${n()}/ws/sessions/${encodeURIComponent(r())}/ide/terminal/${encodeURIComponent(v.connectionId)}?index=${encodeURIComponent(s())}`;c=new WebSocket(N),c.binaryType="arraybuffer",c.onopen=()=>{h(p,"connected"),_=0,w()},c.onmessage=se=>{a.write(typeof se.data=="string"?se.data:new Uint8Array(se.data))},c.onclose=se=>{if(T)return;if(se.code===1008){h(p,"refused"),a==null||a.write(`\r
\x1B[31m— not authorised for this terminal —\x1B[0m\r
`);return}if(_>=6){h(p,"closed"),a==null||a.write(`\r
\x1B[33m— terminal unavailable; reopen the panel to retry —\x1B[0m\r
`);return}h(p,"reconnecting");const te=Math.min(1e3*2**_,1e4);_+=1,d=setTimeout(R,te)},c.onerror=()=>{T||h(p,"error")}}ro(async()=>{const[{Terminal:A},{FitAddon:N}]=await Promise.all([Aa(()=>import("./ide-xterm.js"),[],import.meta.url),Aa(()=>import("./ide-addon-fit.js"),[],import.meta.url)]);await Aa(()=>Promise.resolve({}),__vite__mapDeps([2]),import.meta.url),a=new A({theme:x,fontSize:12,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",cursorBlink:!0,scrollback:5e3}),l=new N,a.loadAddon(l),a.open(o),l.fit(),R(),a.onData(se=>{(c==null?void 0:c.readyState)===WebSocket.OPEN&&c.send(new TextEncoder().encode(se))}),u=new ResizeObserver(()=>w()),u.observe(o)}),rl(()=>{T=!0,d&&clearTimeout(d),u==null||u.disconnect(),c==null||c.close(),a==null||a.dispose()});var O=hg(),j=S(O),F=g(S(j),2),Q=le(F,!0),C=g(j,2);Zs(C,A=>o=A,()=>o),J(()=>{pn(F,1,`status ${i(p)??""}`,"svelte-maclc7"),X(Q,i(p))}),k(t,O),gn()}var gg=I('<div class="border-b border-vs-line bg-vs-red/10 px-4 py-2 text-xs text-vs-red"> </div>'),mg=I('<div class="flex items-center gap-2 px-4 py-3 text-xs text-vs-muted"><!> Loading…</div>'),_g=I('<button class="flex w-full items-center gap-2 px-4 py-1 text-left text-[13px] text-vs-fg hover:bg-vs-hover"><!> <span class="truncate"> </span></button>'),bg=I('<div class="px-4 py-3 text-xs text-vs-muted">No sub-folders here. You can still open this folder.</div>'),xg=I('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="flex h-[70vh] w-[min(640px,92vw)] flex-col overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright">Open Folder <span class="ml-1 font-normal text-vs-muted"><!></span></div> <form class="flex gap-2 border-b border-vs-line px-3 py-2"><button type="button" class="flex items-center gap-1 rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover disabled:opacity-40" title="Up one folder"><!> Up</button> <input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-xs text-vs-fg outline-none focus:border-vs-accent" spellcheck="false" aria-label="Folder path"/> <button type="submit" class="rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover">Go</button></form> <!> <div class="min-h-0 flex-1 overflow-y-auto py-1"><!></div> <div class="flex items-center gap-2 border-t border-vs-line px-4 py-3"><span class="flex min-w-0 flex-1 items-center gap-2 text-xs text-vs-muted"><!> <span class="truncate font-mono"> </span></span> <button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40">Open Folder</button></div></div></div>');function yg(t,e){vn(e,!0);let n=z(""),r=z(""),s=z(Xe([])),o=z(""),a=z(!0),l=z("");async function c(ie){h(a,!0),h(o,"");try{const ue=v.connectionId?await Oe.browseOn(v.connectionId,ie):await Oe.browse(ie);h(n,ue.path,!0),h(r,ue.parent,!0),h(s,ue.entries||[],!0),h(l,ue.path,!0)}catch(ue){h(o,ue.message||"Could not open that folder",!0)}finally{h(a,!1)}}ro(()=>c(""));function p(ie){ie.preventDefault(),i(l).trim()&&c(i(l).trim())}var u=xg(),_=S(u),d=S(_),T=g(S(d)),x=S(T);{var w=ie=>{var ue=Tl();J(()=>X(ue,`on ${v.connection.username??""}@${v.connection.host??""}`)),k(ie,ue)},R=ie=>{var ue=Tl("on this server");k(ie,ue)};U(x,ie=>{v.connection&&v.connection.kind!=="local"?ie(w):ie(R,-1)})}var O=g(d,2),j=S(O),F=S(j);Yd(F,{size:14});var Q=g(j,2),C=g(O,2);{var A=ie=>{var ue=gg(),P=le(ue,!0);J(()=>X(P,i(o))),k(ie,ue)};U(C,ie=>{i(o)&&ie(A)})}var N=g(C,2),se=S(N);{var te=ie=>{var ue=mg(),P=S(ue);vr(P,{size:13,class:"animate-spin"}),k(ie,ue)},ve=ie=>{var ue=he(),P=K(ue);_t(P,17,()=>i(s),fe=>fe.path,(fe,qe)=>{var V=_g(),ee=S(V);np(ee,{size:14,class:"shrink-0 text-vs-blue"});var de=g(ee,2),Qe=le(de,!0);J(()=>X(Qe,i(qe).name)),L("dblclick",V,()=>c(i(qe).path)),L("click",V,()=>c(i(qe).path)),k(fe,V)},fe=>{var qe=bg();k(fe,qe)}),k(ie,ue)};U(se,ie=>{i(a)?ie(te):ie(ve,-1)})}var me=g(N,2),_e=S(me),Ve=S(_e);rp(Ve,{size:13,class:"shrink-0"});var Ue=g(Ve,2),tt=le(Ue,!0),Y=g(_e,2),ge=g(Y,2);J(()=>{j.disabled=!i(r),Ae(Ue,"title",i(n)),X(tt,i(n)),ge.disabled=!i(n)||i(a)}),L("click",u,ie=>ie.target===ie.currentTarget&&e.onclose()),L("keydown",u,ie=>ie.key==="Escape"&&e.onclose()),Ht("submit",O,p),L("click",j,()=>i(r)&&c(i(r))),ut(Q,()=>i(l),ie=>h(l,ie)),L("click",Y,function(...ie){var ue;(ue=e.onclose)==null||ue.apply(this,ie)}),L("click",ge,()=>e.onopen(i(n))),k(t,u),gn()}er(["click","keydown","dblclick"]);var kg=I('<p class="px-4 py-2 text-xs text-vs-muted">Open a folder to search it.</p>'),wg=I('<button class="flex w-full items-center gap-2 px-3 py-1 text-left text-[13px] hover:bg-vs-hover"><!> <span class="truncate text-vs-fg"> </span> <span class="ml-auto max-w-[45%] truncate text-[11px] text-vs-muted"> </span></button>'),Sg=I('<p class="px-4 py-2 text-xs text-vs-muted"> </p>'),Tg=I('<p class="px-4 py-2 text-xs text-vs-muted">Type to search filenames in this workspace.</p>'),$g=I('<div class="flex h-full min-h-0 flex-col"><div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Search</div> <div class="px-3 pb-2"><div class="flex items-center gap-1.5 rounded-sm border border-vs-line bg-vs-input px-2 focus-within:border-vs-accent"><!> <input class="min-w-0 flex-1 bg-transparent py-1 text-xs text-vs-fg outline-none placeholder:text-vs-muted" placeholder="Search filenames" spellcheck="false"/> <!></div></div> <div class="min-h-0 flex-1 overflow-y-auto"><!></div></div>');function Eg(t,e){vn(e,!0);let n=z(""),r=z(Xe([])),s=z(!1),o=z(!1),a=null;Xt(()=>{const F=i(n).trim();if(a&&clearTimeout(a),!F||!v.connectionId){h(r,[],!0),h(o,!1);return}a=setTimeout(async()=>{h(s,!0);try{const Q=await Oe.searchFiles(v.connectionId,v.path||".",F);h(r,Q.matches||[],!0)}catch(Q){h(r,[],!0),v.setStatus(Q.message||"Search failed")}finally{h(s,!1),h(o,!0)}},200)});const l=F=>{const Q=(F||"").split("/");return Q.pop(),Q.join("/")};var c=$g(),p=g(S(c),2),u=S(p),_=S(u);ol(_,{size:12,class:"shrink-0 text-vs-muted"});var d=g(_,2),T=g(d,2);{var x=F=>{vr(F,{size:12,class:"shrink-0 animate-spin text-vs-muted"})};U(T,F=>{i(s)&&F(x)})}var w=g(p,2),R=S(w);{var O=F=>{var Q=kg();k(F,Q)},j=F=>{var Q=he(),C=K(Q);_t(C,17,()=>i(r),A=>A.path,(A,N)=>{var se=wg(),te=S(se);sl(te,{size:13,class:"shrink-0 text-vs-blue"});var ve=g(te,2),me=le(ve,!0),_e=g(ve,2),Ve=le(_e,!0);J((Ue,tt)=>{Ae(se,"title",i(N).path),X(me,Ue),X(Ve,tt)},[()=>i(N).name||i(N).path.split("/").pop(),()=>l(i(N).path)]),L("click",se,()=>v.openFile(i(N).path)),k(A,se)},A=>{var N=he(),se=K(N);{var te=_e=>{var Ve=Sg(),Ue=le(Ve);J(()=>X(Ue,`No files match “${i(n)??""}”.`)),k(_e,Ve)},ve=_e=>{var Ve=Tg();k(_e,Ve)},me=Ft(()=>!i(n).trim());U(se,_e=>{i(o)&&!i(s)?_e(te):i(me)&&_e(ve,1)})}k(A,N)}),k(F,Q)};U(R,F=>{v.connectionId?F(j,-1):F(O)})}ut(d,()=>i(n),F=>h(n,F)),k(t,c),gn()}er(["click"]);var Ag=I('<p class="flex items-center gap-2 text-vs-muted"><!> Fetching host key…</p>'),Cg=I('<p class="text-vs-red"> </p>'),Rg=I("<p>This host is already trusted. Try connecting again.</p>"),Pg=I('<div class="flex items-baseline gap-2 font-mono text-[11px]"><span class="w-16 shrink-0 text-vs-muted"> </span> <span class="break-all text-vs-fg"> </span></div>'),Ig=I(`<p>The authenticity of <span class="font-mono text-vs-blue"> </span> can't be established. Verify these fingerprints match the server before you continue —
          if they don't, someone may be intercepting the connection.</p> <div class="mt-3 flex flex-col gap-1 rounded-sm border border-vs-line bg-vs-input p-2"></div> <p class="mt-3 text-xs text-vs-muted">Accepting adds the key to <span class="font-mono">~/.ssh/known_hosts</span> on this server.</p>`,1),Ng=I('<button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"> </button>'),Og=I('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="w-[min(560px,92vw)] overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="flex items-center gap-2 border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright"><!> Unknown host</div> <div class="px-4 py-3 text-[13px] leading-relaxed text-vs-fg"><!></div> <div class="flex justify-end gap-2 border-t border-vs-line px-4 py-3"><button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <!></div></div></div>');function zg(t,e){vn(e,!0);let n=z(!0),r=z(""),s=z(null),o=z(!1);ro(async()=>{try{h(s,await Oe.hostKey(v.connectionId),!0)}catch(C){h(r,C.message||"Could not fetch the host key",!0)}finally{h(n,!1)}});async function a(){h(o,!0);try{await Oe.trustHost(v.connectionId),e.ontrusted()}catch(C){h(r,C.message||"Could not trust this host",!0),h(o,!1)}}var l=Og(),c=S(l),p=S(c),u=S(p);dp(u,{size:15,class:"text-vs-yellow"});var _=g(p,2),d=S(_);{var T=C=>{var A=Ag(),N=S(A);vr(N,{size:13,class:"animate-spin"}),k(C,A)},x=C=>{var A=Cg(),N=le(A,!0);J(()=>X(N,i(r))),k(C,A)},w=C=>{var A=Rg();k(C,A)},R=C=>{var A=Ig(),N=K(A),se=g(S(N)),te=le(se),ve=g(N,2);_t(ve,21,()=>i(s).fingerprints,me=>me.fingerprint,(me,_e)=>{var Ve=Pg(),Ue=S(Ve),tt=le(Ue,!0),Y=g(Ue,2),ge=le(Y,!0);J(()=>{X(tt,i(_e).type),X(ge,i(_e).fingerprint)}),k(me,Ve)}),J(()=>X(te,`${i(s).host??""}:${i(s).port??""}`)),k(C,A)};U(d,C=>{var A;i(n)?C(T):i(r)?C(x,1):(A=i(s))!=null&&A.known?C(w,2):C(R,-1)})}var O=g(_,2),j=S(O),F=g(j,2);{var Q=C=>{var A=Ng(),N=le(A,!0);J(()=>{A.disabled=i(o),X(N,i(o)?"Trusting…":"Trust and connect")}),L("click",A,a),k(C,A)};U(F,C=>{var A;!i(n)&&!((A=i(s))!=null&&A.known)&&!i(r)&&C(Q)})}L("click",l,C=>C.target===C.currentTarget&&e.onclose()),L("keydown",l,C=>C.key==="Escape"&&e.onclose()),L("click",j,function(...C){var A;(A=e.onclose)==null||A.apply(this,C)}),k(t,l),gn()}er(["click","keydown"]);var Mg=I('<div role="separator" tabindex="0" title="Drag to resize (double-click to reset)"><div></div></div>');function mi(t,e){vn(e,!0);let n=kt(e,"size",15),r=kt(e,"side",3,"right"),s=kt(e,"min",3,120),o=kt(e,"max",3,800),a=kt(e,"onreset",3,null),l=z(!1);const c=r()==="top";function p(x){var Q;x.preventDefault(),h(l,!0);const w=c?x.clientY:x.clientX,R=n(),O=x.currentTarget;(Q=O.setPointerCapture)==null||Q.call(O,x.pointerId);function j(C){const N=(c?C.clientY:C.clientX)-w,se=r()==="left"||r()==="top"?-N:N;n(Math.round(Math.min(o(),Math.max(s(),R+se))))}function F(){var C;h(l,!1),(C=O.releasePointerCapture)==null||C.call(O,x.pointerId),window.removeEventListener("pointermove",j),window.removeEventListener("pointerup",F)}window.addEventListener("pointermove",j),window.addEventListener("pointerup",F)}function u(x){const w=x.shiftKey?40:10,R=c?"ArrowUp":r()==="left"?"ArrowLeft":"ArrowRight",O=c?"ArrowDown":r()==="left"?"ArrowRight":"ArrowLeft";if(x.key===R)n(Math.min(o(),n()+w));else if(x.key===O)n(Math.max(s(),n()-w));else return;x.preventDefault()}var _=Mg();let d;var T=le(_);J(()=>{d=pn(_,1,`group relative shrink-0 ${c?"h-1 w-full cursor-row-resize":"w-1 cursor-col-resize"}`,null,d,{"bg-vs-accent":i(l)}),Ae(_,"aria-orientation",c?"horizontal":"vertical"),Ae(_,"aria-valuenow",n()),Ae(_,"aria-valuemin",s()),Ae(_,"aria-valuemax",o()),pn(T,1,`absolute ${c?"-top-1 -bottom-1 left-0 right-0":"-left-1 -right-1 top-0 bottom-0"}
           transition-colors group-hover:bg-vs-accent ${i(l)?"bg-vs-accent":""}`)}),L("pointerdown",_,p),L("dblclick",_,()=>{var x;return(x=a())==null?void 0:x()}),L("keydown",_,u),k(t,_),gn()}er(["pointerdown","dblclick","keydown"]);var Lg=I('<div class="flex shrink-0 items-start gap-2 border-b border-vs-red/40 bg-vs-red/10 px-3 py-1.5 text-[11px] text-vs-red"><!> <span class="min-w-0 flex-1 break-words select-text"> </span> <button class="shrink-0 rounded-sm px-1.5 py-0.5 hover:bg-vs-red/20" title="Copy this error">Copy</button> <button class="shrink-0 rounded-sm px-1 hover:bg-vs-red/20" title="Dismiss" aria-label="Dismiss error"><!></button></div>'),Dg=I('<span class="absolute top-0 bottom-0 left-0 w-0.5 bg-vs-bright"></span>'),Fg=I('<span class="absolute right-1.5 bottom-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-vs-status px-1 text-[10px] leading-none font-semibold text-white"> </span>'),Hg=I("<button><!> <!> <!></button>"),pc=I("<option> </option>"),Bg=I('<button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Connection settings" aria-label="Connection settings"><!></button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover hover:text-vs-red" title="Remove workspace" aria-label="Remove workspace"><!></button>',1),Ug=I('<input class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" type="password" placeholder="Password (optional)" autocomplete="new-password"/>'),jg=I(`<button class="w-full rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Show this host's key fingerprint and trust it">Verify host key…</button>`),Wg=I('<!> <button class="w-full rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"> </button> <!>',1),Vg=I('<p class="mt-1 font-mono text-[11px] break-all text-vs-muted"> </p>'),qg=I('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="~/.ssh/id_ed25519"/> <textarea class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-[11px] outline-none focus:border-vs-accent" rows="4" placeholder="…or paste a private key (-----BEGIN OPENSSH PRIVATE KEY-----)" spellcheck="false"></textarea>',1),Gg=I('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" type="password" placeholder="Password" autocomplete="new-password"/>'),Kg=I('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Host" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="User" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Port" type="number" min="1" max="65535"/> <select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>SSH agent</option><option>Existing key</option><option>Password (saved, encrypted)</option></select> <!> <!>',1),Yg=I('<form class="mt-2 flex flex-col gap-1.5 border-t border-vs-line px-3 pt-2"><select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>This server (local folder)</option><option>Remote host over SSH</option></select> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Label"/> <!> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"/> <div class="flex gap-1 pb-2"><button class="flex-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110" type="submit">Create</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" type="button">Cancel</button></div></form>'),Zg=I('<div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Workspaces</div> <div class="flex flex-col gap-2 px-3 pt-1"><select class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" aria-label="Workspace"><option>— select workspace —</option><!></select> <div class="flex gap-1"><button class="flex flex-1 items-center justify-center gap-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"><!> Open Folder</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Add a workspace or SSH connection" aria-label="Add workspace"><!></button> <!></div> <!> <!></div> <!>',1),Xg=I('<aside class="flex shrink-0 flex-col overflow-hidden border-r border-vs-border bg-vs-panel"><!></aside> <!>',1),Qg=I('<div class="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center"><!> <div><h1 class="text-2xl font-light text-vs-fg">Multibuilder IDE</h1> <p class="mt-1 text-sm text-vs-muted">Edit files on this server or on a remote host over SSH.</p></div> <div class="flex flex-col gap-2 text-sm"><button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Open Folder… <kbd class="ml-2 rounded-sm border border-vs-line px-1.5 py-0.5 text-[10px] text-vs-muted">Ctrl+Shift+O</kbd></button> <button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Connect to a host over SSH…</button></div></div>'),Jg=I('<button class="rounded-sm p-0.5 opacity-0 group-hover:opacity-100 hover:bg-vs-line" title="Close terminal — ends the shell"><!></button>'),em=I('<span><button class="max-w-[140px] truncate"> </button> <!></span>'),tm=I('<div class="absolute inset-0"><!></div>'),nm=I('<!> <div class="flex shrink-0 flex-col border-t border-vs-border bg-vs-bg"><div class="flex items-center gap-1 border-b border-vs-border px-2 py-1 text-[11px]"><!> <div class="flex min-w-0 flex-1 items-center gap-0.5 overflow-x-auto"></div> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover disabled:opacity-40" title="New terminal in this workspace" aria-label="New terminal"><!></button> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover" title="Hide terminals (Ctrl+`) — sessions keep running" aria-label="Hide all terminals"><!></button> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover hover:text-vs-red" title="Close this terminal — ends the shell" aria-label="Close this terminal"><!></button></div> <div class="relative min-h-0 flex-1"><!></div></div>',1),rm=I('<!> <div class="min-h-0 flex-1"><!></div> <!>',1),sm=I(`<!> <aside class="flex shrink-0 flex-col overflow-hidden border-l border-vs-border bg-vs-panel"><div class="flex items-center gap-1.5 border-b border-vs-border px-3 py-1.5"><!> <span class="shrink-0 text-[11px] font-semibold tracking-wide uppercase">AI Agent</span> <select class="ml-auto min-w-0 flex-1 truncate rounded-sm border border-vs-line bg-vs-input px-1.5 py-0.5
                   text-[11px] text-vs-fg outline-none focus:border-vs-accent" title="Agent session — each has its own history"></select> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover disabled:opacity-40" title="New agent session" aria-label="New agent session"><!></button> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover" title="Hide AI Agent" aria-label="Hide AI Agent"><!></button></div> <div class="min-h-0 flex-1"><!></div></aside>`,1),om=I('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20"><!> <!></button>'),am=I('<span class="flex items-center gap-1"><!> </span>'),im=I("<span> </span>"),lm=I('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle terminal (Ctrl+`)"><!> Terminal</button> <button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Focus the tmux window on the host"><!></button>',1),cm=I('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle AI Agent panel"><!> Chat</button>'),um=I('<div class="flex gap-2"><input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs outline-none focus:border-vs-accent" placeholder="Host"/> <input class="w-20 rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs outline-none focus:border-vs-accent" type="number" min="1" max="65535" placeholder="Port"/></div> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs outline-none focus:border-vs-accent" placeholder="Username"/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs outline-none focus:border-vs-accent" placeholder="Identity file (optional)"/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs outline-none focus:border-vs-accent" type="password" autocomplete="new-password"/> <textarea rows="3" class="resize-y rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 font-mono text-[11px] outline-none focus:border-vs-accent"></textarea>',1),fm=I('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" role="presentation"><div class="flex w-full max-w-[420px] flex-col gap-2 rounded-lg border border-vs-line bg-vs-panel p-4 shadow-2xl"><h3 class="text-sm font-semibold text-vs-fg"> </h3> <p class="mb-1 text-[11px] leading-relaxed text-vs-muted"> </p> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs outline-none focus:border-vs-accent" placeholder="Label"/> <!> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs outline-none focus:border-vs-accent" placeholder="Workspace folder"/> <div class="mt-1 flex justify-end gap-2"><button class="rounded-sm border border-vs-line px-3 py-1 text-xs hover:bg-vs-hover">Cancel</button> <button class="rounded-sm bg-vs-status px-3 py-1 text-xs text-white hover:brightness-110 disabled:opacity-40"> </button></div></div></div>'),dm=I('<div class="flex h-full flex-col overflow-hidden bg-vs-bg font-sans text-vs-fg"><header class="flex items-center gap-2 border-b border-vs-border bg-vs-titlebar px-3 py-1 text-xs"><!> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover" title="Open a folder on this server (Ctrl+Shift+O)">Open Folder…</button> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40" title="Open a file (Ctrl+P)">Open File…</button> <button><!> Terminal</button> <span class="mx-auto truncate text-vs-muted"> </span> <span><!> </span></header> <!> <div class="flex min-h-0 flex-1"><nav class="flex w-12 shrink-0 flex-col items-center bg-vs-activity"><!> <div class="mt-auto flex flex-col items-center pb-1"><button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Account — signed in to the dashboard" aria-label="Account"><!></button> <button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Toggle side bar (Ctrl+B)" aria-label="Toggle side bar"><!></button></div></nav> <!> <section class="flex min-h-0 min-w-0 flex-1 flex-col"><!></section> <!></div> <footer class="flex shrink-0 items-center gap-3 bg-vs-status px-3 py-0.5 text-[12px] text-white"><!> <!> <span class="truncate"> </span> <span class="ml-auto flex items-center gap-3"><!> <span class="max-w-[40vw] truncate opacity-80"> </span> <!> <!></span></footer> <!> <!> <!> <!></div>');function pm(t,e){vn(e,!0);let n=kt(e,"sessions",19,()=>[]),r=kt(e,"session",3,""),s=kt(e,"rootPath",3,""),o=z(Xe([...n()])),a=z(Xe(r()||n()[0]||"")),l=z(!1),c=z(!1),p=z(!1),u=z(Xe({label:"",host:"",username:"",port:22,identity_file:"",password:"",private_key:"",workspace_root:""}));function _(){v.connection&&(h(w,"remote"),h(N,!0),i(c)||d())}function d(){const $=v.connection;$&&(h(u,{label:$.label||"",host:$.host||"",username:$.username||"",port:$.port||22,identity_file:$.identity_file||"",password:"",private_key:"",workspace_root:$.workspace_root||""},!0),h(c,!0))}async function T(){var $;if(!(!v.connection||i(p))){h(p,!0);try{const D={...i(u),port:Number(i(u).port)||22};D.password||delete D.password,D.private_key||delete D.private_key,await Oe.updateConnection(v.connection.id,D),await(($=v.loadConnections)==null?void 0:$.call(v)),h(c,!1),v.setStatus("Settings saved — reconnecting…"),v.connectionError="",await v.connect(i(u).password||"")}catch(D){v.setStatus(D.message||"Could not save connection settings")}finally{h(p,!1)}}}async function x(){var $;if(!i(l)){h(l,!0);try{const D=((($=v.connection)==null?void 0:$.label)||r()||"agent").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,20)||"agent";let W=D;for(let q=2;i(o).includes(W);q+=1)W=`${D}-${q}`;const b=await fetch(`${s()}/api/sessions/create`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:W,agent:"claude"})}),E=await b.json().catch(()=>({}));if(!b.ok)throw new Error(E.error||"Could not create session");const B=E.session||E.name||W;i(o).includes(B)||h(o,[...i(o),B],!0),h(a,B,!0),v.setStatus(`Agent session "${B}" created`)}catch(D){v.setStatus(D.message||"Could not create agent session")}finally{h(l,!1)}}}let w=z("files");function R($,D){try{const W=localStorage.getItem(`ide.show.${$}`);return W===null?D:W==="1"}catch{return D}}let O=z(Xe(R("chat",!0)));const j={sidebar:240,chat:320,panel:240};function F($){try{const D=localStorage.getItem(`ide.size.${$}`),W=Number(D);return Number.isFinite(W)&&W>0?W:j[$]}catch{return j[$]}}let Q=z(Xe(F("sidebar"))),C=z(Xe(F("chat"))),A=z(Xe(F("panel")));Xt(()=>{try{localStorage.setItem("ide.size.sidebar",String(i(Q))),localStorage.setItem("ide.size.chat",String(i(C))),localStorage.setItem("ide.size.panel",String(i(A))),localStorage.setItem("ide.show.terminal",i(te)?"1":"0"),localStorage.setItem("ide.show.chat",i(O)?"1":"0"),localStorage.setItem("ide.show.sidebar",i(N)?"1":"0")}catch{}});let N=z(Xe(R("sidebar",!0))),se=z(!1),te=z(Xe(R("terminal",!1)));const ve=8;let me=z(Xe([0])),_e=z(0);function Ve(){if(i(me).length>=ve)return;let $=0;for(;i(me).includes($);)$+=1;$>=ve||(h(me,[...i(me),$].sort((D,W)=>D-W),!0),h(_e,$,!0))}async function Ue($){const D=i(me).indexOf($),W=i(me).filter(b=>b!==$);h(me,W.length?W:[0],!0),i(_e)===$&&h(_e,i(me)[Math.min(D,i(me).length-1)],!0);try{await Oe.closeTerminal(v.connectionId,$)}catch(b){v.setStatus(b.message||"Could not close terminal")}}let tt=z("");Xt(()=>{const $=v.connectionId,D=v.connectionState;if(!$||D!=="connected")return;const W=`${$}|${D}`;i(tt)!==W&&(h(tt,W),h(me,[0],!0),h(_e,0),Oe.listTerminals($).then(b=>{const E=((b==null?void 0:b.terminals)||[]).filter(B=>Number.isInteger(B));E.length&&(h(me,E,!0),E.includes(i(_e))||h(_e,E[0],!0))}).catch(()=>{}))});let Y=z(!1);Xt(()=>{i(te)&&h(Y,!0)});let ge=z(!1),ie=z(!1),ue=z(""),P=z(Xe({kind:"local",label:"",host:"",username:"",port:22,auth_mode:"agent",identity_file:"",password:"",private_key:"",workspace_root:"",max_file_bytes:1e6}));const fe={idle:{icon:Gd,label:"Not connected"},connecting:{icon:Vd,label:"Connecting…"},connected:{icon:Wd,label:"Connected"},reconnect:{icon:li,label:"Reconnect required"},error:{icon:li,label:"Error"}},qe=Ft(()=>fe[v.connectionState].icon),V=Ft(()=>{var $;return(($=v.connection)==null?void 0:$.kind)==="local"}),ee=[{id:"files",icon:ep,label:"Explorer",keys:"Ctrl+Shift+E"},{id:"search",icon:ol,label:"Search",keys:"Ctrl+Shift+F"},{id:"git",icon:Ni,label:"Source Control",keys:"Ctrl+Shift+G"},{id:"remote",icon:lp,label:"Remote Explorer",keys:""}];ro(async()=>{await v.loadConnections(),v.connectionId&&await v.refreshStatus()});function de($){i(w)===$&&i(N)?h(N,!1):(h(w,$,!0),h(N,!0))}async function Qe($){v.connectionId=$.currentTarget.value,v.resetWorkspaceView(),await v.refreshStatus()}async function sn($){h(ie,!1);try{const D=$.split("/").filter(Boolean).pop()||$,W=v.connection;if(W&&W.kind!=="local"){await Oe.setWorkspaceRoot(W.id,$,D),await v.loadConnections(),v.resetWorkspaceView(),await v.refreshFiles("."),v.setStatus(`Opened ${$} on ${W.username}@${W.host}`),h(w,"files"),h(N,!0);return}if(W&&W.kind==="local"){await Oe.setWorkspaceRoot(W.id,$,D),await v.loadConnections(),v.resetWorkspaceView(),await v.refreshFiles("."),v.setStatus(`Opened ${$}`),h(w,"files"),h(N,!0);return}const b=await Oe.createConnection({kind:"local",label:D,workspace_root:$,max_file_bytes:1e6});await v.loadConnections(),v.connectionId=b.connection.id,v.resetWorkspaceView(),await v.connect(""),h(w,"files"),h(N,!0)}catch(D){v.setStatus(D.message||"Could not open folder")}}async function jt($){$.preventDefault();try{const D=await Oe.createConnection({...i(P),port:Number(i(P).port)});h(ge,!1),h(P,{...i(P),label:"",host:"",username:"",password:"",private_key:""},!0),await v.loadConnections(),v.connectionId=D.connection.id,await v.refreshStatus()}catch(D){v.setStatus(D.message||"Could not create connection")}}async function on(){const $=v.connection;if(!$)return;const D=$.kind==="local"?"workspace":"connection";if(confirm(`Remove ${D} "${$.label}"? Saved tabs are cleared; files are untouched.`))try{await Oe.deleteConnection($.id),v.connectionId="",v.resetWorkspaceView(),await v.loadConnections()}catch(W){v.setStatus(W.message||"Could not delete")}}async function an(){try{const $=await Oe.focusTerminal(v.connectionId);v.setStatus(`Focused ${$.window_name}`,"tmux window selected")}catch($){v.setStatus($.message||"Could not focus terminal")}}function zt($){var E,B,q,G;const D=$.ctrlKey||$.metaKey,W=$.key.toLowerCase(),b=((B=(E=$.target)==null?void 0:E.matches)==null?void 0:B.call(E,"input, textarea, select"))&&!((G=(q=$.target).closest)!=null&&G.call(q,".monaco-editor"));D&&W==="s"?($.preventDefault(),v.saveActive()):D&&W==="p"&&!b?($.preventDefault(),v.connectionId&&h(se,!0)):D&&$.shiftKey&&W==="o"?($.preventDefault(),h(ie,!0)):D&&$.shiftKey&&["e","f","g"].includes(W)?($.preventDefault(),h(w,{e:"files",f:"search",g:"git"}[W],!0),h(N,!0)):D&&W==="b"&&!b?($.preventDefault(),h(N,!i(N))):D&&W==="`"?($.preventDefault(),v.connectionState==="connected"&&h(te,!i(te))):$.key==="Escape"&&i(se)&&($.preventDefault(),h(se,!1))}var Dn=dm();Ht("keydown",$s,zt);var Fn=S(Dn),Hn=S(Fn);Ml(Hn,{size:15,class:"shrink-0 text-vs-blue"});var xe=g(Hn,2),Wt=g(xe,2),Me=g(Wt,2);let tr;var Mt=S(Me);Hl(Mt,{size:13});var Tn=g(Me,2),_r=le(Tn,!0),Vt=g(Tn,2),Or=S(Vt);Al(Or,()=>i(qe),($,D)=>{D($,{size:12})});var br=g(Or),nr=g(Fn,2);{var $n=$=>{var D=Lg(),W=S(D);li(W,{size:12,class:"mt-[1px] shrink-0"});var b=g(W,2),E=le(b,!0),B=g(b,2),q=g(B,2),G=S(q);Co(G,{size:12}),J(()=>X(E,v.connectionError)),L("click",B,()=>{var oe;return(oe=navigator.clipboard)==null?void 0:oe.writeText(v.connectionError).catch(()=>{})}),L("click",q,()=>v.connectionError=""),k($,D)};U(nr,$=>{v.connectionError&&v.connectionState!=="connected"&&$($n)})}var Jt=g(nr,2),mn=S(Jt),qt=S(mn);_t(qt,17,()=>ee,$=>$.id,($,D)=>{var W=Hg(),b=S(W);{var E=oe=>{var ne=Dg();k(oe,ne)};U(b,oe=>{i(w)===i(D).id&&i(N)&&oe(E)})}var B=g(b,2);Al(B,()=>i(D).icon,(oe,ne)=>{ne(oe,{size:24,strokeWidth:1.4})});var q=g(B,2);{var G=oe=>{var ne=Fg(),Pe=le(ne,!0);J(()=>X(Pe,v.gitDirtyCount)),k(oe,ne)};U(q,oe=>{i(D).id==="git"&&v.gitDirtyCount&&oe(G)})}J(()=>{pn(W,1,`relative flex h-12 w-12 items-center justify-center ${i(w)===i(D).id&&i(N)?"text-vs-bright":"text-vs-muted hover:text-vs-fg"}`),Ae(W,"title",i(D).keys?`${i(D).label} (${i(D).keys})`:i(D).label),Ae(W,"aria-label",i(D).label)}),L("click",W,()=>de(i(D).id)),k($,W)});var xr=g(qt,2),Bn=S(xr),Un=S(Bn);qd(Un,{size:24,strokeWidth:1.4});var rr=g(Bn,2),En=S(rr);up(En,{size:24,strokeWidth:1.4});var An=g(mn,2);{var sr=$=>{var D=Xg(),W=K(D),b=S(W);{var E=ne=>{Tp(ne,{})},B=ne=>{Eg(ne,{})},q=ne=>{Vp(ne,{})},G=ne=>{var Pe=Zg(),Ce=g(K(Pe),2),ye=S(Ce),Fe=S(ye);Fe.value=Fe.__value="";var at=g(Fe);_t(at,17,()=>v.connections,lt=>lt.id,(lt,ct)=>{var dt=pc(),bn=le(dt),cn={};J(()=>{X(bn,`${i(ct).kind==="local"?"🖿 ":"⇅ "}${i(ct).label??""}`),cn!==(cn=i(ct).id)&&(dt.value=(dt.__value=cn)??"")}),k(lt,dt)});var re;yo(ye);var Ke=g(ye,2),Ye=S(Ke),mt=S(Ye);ci(mt,{size:13});var vt=g(Ye,2),en=S(vt);Ao(en,{size:13});var Pt=g(vt,2);{var ln=lt=>{var ct=Bg(),dt=K(ct),bn=S(dt);Fl(bn,{size:13});var cn=g(dt,2),Yr=S(cn);Bl(Yr,{size:13}),L("click",dt,d),L("click",cn,on),k(lt,ct)};U(Pt,lt=>{v.connection&&lt(ln)})}var it=g(Ke,2);{var st=lt=>{var ct=Wg(),dt=K(ct);{var bn=tn=>{var H=Ug();ut(H,()=>i(ue),f=>h(ue,f)),k(tn,H)};U(dt,tn=>{!i(V)&&!v.connection.has_password&&tn(bn)})}var cn=g(dt,2),Yr=le(cn,!0),is=g(cn,2);{var Zr=tn=>{var H=jg();L("click",H,()=>v.needsHostKey=!0),k(tn,H)};U(is,tn=>{i(V)||tn(Zr)})}J(()=>X(Yr,i(V)?"Open workspace":"Connect")),L("click",cn,()=>v.connect(i(ue))),k(lt,ct)};U(it,lt=>{v.connection&&v.connectionState!=="connected"&&lt(st)})}var Vn=g(it,2);{var ar=lt=>{var ct=Vg(),dt=le(ct,!0);J(()=>X(dt,v.connection.workspace_root)),k(lt,ct)};U(Vn,lt=>{v.connection&&lt(ar)})}var Fr=g(Ce,2);{var kr=lt=>{var ct=Yg(),dt=S(ct),bn=S(dt);bn.value=bn.__value="local";var cn=g(bn);cn.value=cn.__value="ssh",yo(dt);var Yr=g(dt,2),is=g(Yr,2);{var Zr=y=>{var M=Kg(),Z=K(M),ce=g(Z,2),ke=g(ce,2),Ze=g(ke,2),ot=S(Ze);ot.value=ot.__value="agent";var Dt=g(ot);Dt.value=Dt.__value="key";var Kt=g(Dt);Kt.value=Kt.__value="password",yo(Ze);var Cs=g(Ze,2);{var Yt=un=>{var oo=qg(),va=K(oo),ju=g(va,2);ut(va,()=>i(P).identity_file,Ya=>i(P).identity_file=Ya),ut(ju,()=>i(P).private_key,Ya=>i(P).private_key=Ya),k(un,oo)};U(Cs,un=>{i(P).auth_mode==="key"&&un(Yt)})}var ha=g(Cs,2);{var hl=un=>{var oo=Gg();ut(oo,()=>i(P).password,va=>i(P).password=va),k(un,oo)};U(ha,un=>{i(P).auth_mode==="password"&&un(hl)})}ut(Z,()=>i(P).host,un=>i(P).host=un),ut(ce,()=>i(P).username,un=>i(P).username=un),ut(ke,()=>i(P).port,un=>i(P).port=un),si(Ze,()=>i(P).auth_mode,un=>i(P).auth_mode=un),k(y,M)};U(is,y=>{i(P).kind==="ssh"&&y(Zr)})}var tn=g(is,2),H=g(tn,2),f=g(S(H),2);J(()=>{Ae(tn,"placeholder",i(P).kind==="local"?"/var/www/app":"Workspace root"),tn.required=i(P).kind==="local"}),Ht("submit",ct,jt),si(dt,()=>i(P).kind,y=>i(P).kind=y),ut(Yr,()=>i(P).label,y=>i(P).label=y),ut(tn,()=>i(P).workspace_root,y=>i(P).workspace_root=y),L("click",f,()=>h(ge,!1)),k(lt,ct)};U(Fr,lt=>{i(ge)&&lt(kr)})}J(()=>{re!==(re=v.connectionId)&&(ye.value=(ye.__value=re)??"",Po(ye,re))}),L("change",ye,Qe),L("click",Ye,()=>h(ie,!0)),L("click",vt,()=>h(ge,!i(ge))),k(ne,Pe)};U(b,ne=>{i(w)==="files"?ne(E):i(w)==="search"?ne(B,1):i(w)==="git"?ne(q,2):ne(G,-1)})}var oe=g(W,2);mi(oe,{side:"right",min:170,max:620,onreset:()=>h(Q,j.sidebar,!0),get size(){return i(Q)},set size(ne){h(Q,ne,!0)}}),J(()=>ws(W,`width: ${i(Q)??""}px`)),k($,D)};U(An,$=>{i(N)&&$(sr)})}var zr=g(An,2),Kr=S(zr);{var Mr=$=>{var D=Qg(),W=S(D);Ml(W,{size:64,strokeWidth:1,class:"text-vs-line"});var b=g(W,4),E=S(b),B=S(E);ci(B,{size:16});var q=g(E,2),G=S(q);Dl(G,{size:16}),L("click",E,()=>h(ie,!0)),L("click",q,()=>{h(w,"remote"),h(N,!0),h(ge,!0)}),k($,D)},Lr=$=>{var D=rm(),W=K(D);nh(W,{});var b=g(W,2),E=S(b);Xp(E,{});var B=g(b,2);{var q=G=>{var oe=nm(),ne=K(oe);{var Pe=it=>{mi(it,{side:"top",min:120,max:640,onreset:()=>h(A,j.panel,!0),get size(){return i(A)},set size(st){h(A,st,!0)}})};U(ne,it=>{i(te)&&it(Pe)})}var Ce=g(ne,2),ye=S(Ce),Fe=S(ye);Hl(Fe,{size:13,class:"mx-1 shrink-0"});var at=g(Fe,2);_t(at,20,()=>i(me),it=>it,(it,st)=>{var Vn=em(),ar=S(Vn),Fr=le(ar,!0),kr=g(ar,2);{var lt=ct=>{var dt=Jg(),bn=S(dt);Co(bn,{size:11}),J(()=>Ae(dt,"aria-label",`Close terminal ${st+1}`)),L("click",dt,()=>Ue(st)),k(ct,dt)};U(kr,ct=>{i(me).length>1&&ct(lt)})}J(()=>{var ct;pn(Vn,1,`group flex shrink-0 items-center gap-1 rounded-sm px-2 py-0.5
                           ${st===i(_e)?"bg-vs-hover text-vs-fg":"text-vs-muted hover:text-vs-fg"}`),X(Fr,st===0?((ct=v.connection)==null?void 0:ct.label)||"Terminal":`Terminal ${st+1}`)}),L("click",ar,()=>h(_e,st,!0)),k(it,Vn)});var re=g(at,2),Ke=S(re);Ao(Ke,{size:14});var Ye=g(re,2),mt=S(Ye);Cr(mt,{size:15});var vt=g(Ye,2),en=S(vt);Bl(en,{size:13});var Pt=g(ye,2),ln=S(Pt);bd(ln,()=>v.connectionId,it=>{var st=he(),Vn=K(st);_t(Vn,16,()=>i(me),ar=>ar,(ar,Fr)=>{var kr=tm(),lt=S(kr);vg(lt,{get rootPath(){return s()},get session(){return r()},get index(){return Fr}}),J(()=>Ae(kr,"hidden",Fr!==i(_e))),k(ar,kr)}),k(it,st)}),J(()=>{ws(Ce,`height: ${i(A)??""}px`),Ae(Ce,"hidden",!i(te)),re.disabled=i(me).length>=ve}),L("click",re,Ve),L("click",Ye,()=>h(te,!1)),L("click",vt,()=>Ue(i(_e))),k(G,oe)};U(B,G=>{i(Y)&&v.connectionState==="connected"&&G(q)})}k($,D)};U(Kr,$=>{v.connectionId?$(Lr,-1):$(Mr)})}var or=g(zr,2);{var Cn=$=>{var D=sm(),W=K(D);mi(W,{side:"left",min:260,max:760,onreset:()=>h(C,j.chat,!0),get size(){return i(C)},set size(re){h(C,re,!0)}});var b=g(W,2),E=S(b),B=S(E);Ll(B,{size:13,class:"shrink-0"});var q=g(B,4);_t(q,20,()=>i(o),re=>re,(re,Ke)=>{var Ye=pc(),mt=le(Ye,!0),vt={};J(()=>{X(mt,Ke),vt!==(vt=Ke)&&(Ye.value=(Ye.__value=vt)??"")}),k(re,Ye)}),yo(q);var G=g(q,2),oe=S(G);{var ne=re=>{vr(re,{size:13,class:"animate-spin"})},Pe=re=>{Ao(re,{size:14})};U(oe,re=>{i(l)?re(ne):re(Pe,-1)})}var Ce=g(G,2),ye=S(Ce);Co(ye,{size:14});var Fe=g(E,2),at=S(Fe);ig(at,{get sessions(){return i(o)},get session(){return r()},get rootPath(){return s()},get target(){return i(a)},set target(re){h(a,re,!0)}}),J(()=>{ws(b,`width: ${i(C)??""}px`),G.disabled=i(l)}),si(q,()=>i(a),re=>h(a,re)),L("click",G,x),L("click",Ce,()=>h(O,!1)),k($,D)};U(or,$=>{i(O)&&$(Cn)})}var Rn=g(Jt,2),Dr=S(Rn);{var pe=$=>{var D=om(),W=S(D);{var b=G=>{ci(G,{size:12})},E=G=>{Dl(G,{size:12})};U(W,G=>{i(V)?G(b):G(E,-1)})}var B=g(W),q=g(B);Fl(q,{size:11,class:"opacity-70"}),J(()=>{Ae(D,"title",`${v.connection.workspace_root??""} — click for connection settings`),X(B,` ${v.connection.label??""} `)}),L("click",D,_),k($,D)};U(Dr,$=>{v.connection&&$(pe)})}var Je=g(Dr,2);{var Be=$=>{var D=am(),W=S(D);Ni(W,{size:12});var b=g(W);J(()=>X(b,` ${v.gitBranch??""}`)),k($,D)};U(Je,$=>{v.gitBranch&&$(Be)})}var we=g(Je,2),je=le(we,!0),wt=g(we,2),De=S(wt);{var Ct=$=>{var D=im(),W=le(D);J(()=>X(W,`${v.dirtyCount??""} unsaved`)),k($,D)};U(De,$=>{v.dirtyCount&&$(Ct)})}var Gt=g(De,2),rt=le(Gt,!0),St=g(Gt,2);{var gt=$=>{var D=lm(),W=K(D),b=S(W);cp(b,{size:12});var E=g(W,2),B=S(E);Xd(B,{size:12}),L("click",W,()=>h(te,!i(te))),L("click",E,an),k($,D)};U(St,$=>{v.connectionState==="connected"&&$(gt)})}var Lt=g(St,2);{var jn=$=>{var D=cm(),W=S(D);Ll(W,{size:12}),L("click",D,()=>h(O,!i(O))),k($,D)};U(Lt,$=>{$(jn)})}var Rt=g(Rn,2);{var Tt=$=>{pg($,{onclose:()=>h(se,!1)})};U(Rt,$=>{i(se)&&$(Tt)})}var ht=g(Rt,2);{var Wn=$=>{yg($,{onopen:sn,onclose:()=>h(ie,!1)})};U(ht,$=>{i(ie)&&$(Wn)})}var bt=g(ht,2);{var Ge=$=>{var D=fm(),W=S(D),b=S(W),E=le(b,!0),B=g(b,2),q=le(B,!0),G=g(B,2),oe=g(G,2);{var ne=re=>{var Ke=um(),Ye=K(Ke),mt=S(Ye),vt=g(mt,2),en=g(Ye,2),Pt=g(en,2),ln=g(Pt,2),it=g(ln,2);J(()=>{Ae(ln,"placeholder",v.connection.has_password?"Password stored — type to replace":"Password (optional)"),Ae(it,"placeholder",v.connection.has_private_key?"Private key stored — paste a new one to replace":"Paste a private key (optional)")}),ut(mt,()=>i(u).host,st=>i(u).host=st),ut(vt,()=>i(u).port,st=>i(u).port=st),ut(en,()=>i(u).username,st=>i(u).username=st),ut(Pt,()=>i(u).identity_file,st=>i(u).identity_file=st),ut(ln,()=>i(u).password,st=>i(u).password=st),ut(it,()=>i(u).private_key,st=>i(u).private_key=st),k(re,Ke)};U(oe,re=>{i(V)||re(ne)})}var Pe=g(oe,2),Ce=g(Pe,2),ye=S(Ce),Fe=g(ye,2),at=le(Fe,!0);J(()=>{X(E,i(V)?"Folder settings":"SSH connection settings"),X(q,i(V)?"Where this workspace opens.":"Secrets are never shown — leave a field blank to keep what is stored."),Fe.disabled=i(p),X(at,i(p)?"Saving…":"Save")}),L("click",D,re=>{re.target===re.currentTarget&&h(c,!1)}),L("keydown",D,re=>{re.key==="Escape"&&h(c,!1)}),ut(G,()=>i(u).label,re=>i(u).label=re),ut(Pe,()=>i(u).workspace_root,re=>i(u).workspace_root=re),L("click",ye,()=>h(c,!1)),L("click",Fe,T),k($,D)};U(bt,$=>{i(c)&&v.connection&&$(Ge)})}var _n=g(bt,2);{var yr=$=>{zg($,{onclose:()=>v.needsHostKey=!1,ontrusted:async()=>{v.needsHostKey=!1,await v.connect(i(ue))}})};U(_n,$=>{v.needsHostKey&&$(yr)})}J(()=>{var $;Wt.disabled=!v.connectionId,tr=pn(Me,1,"flex items-center gap-1 rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40",null,tr,{"text-vs-bright":i(te)}),Me.disabled=v.connectionState!=="connected",Ae(Me,"title",v.connectionState==="connected"?"Toggle terminal (Ctrl+`)":"Open a workspace to use the terminal"),Ae(Tn,"title",($=v.connection)==null?void 0:$.workspace_root),X(_r,v.connection?`${v.connection.label} — Multibuilder IDE`:"Multibuilder IDE"),pn(Vt,1,`flex items-center gap-1 ${v.connectionState==="connected"?"text-vs-green":v.connectionState==="connecting"?"text-vs-yellow":v.connectionState==="idle"?"text-vs-muted":"text-vs-red"}`),Ae(Vt,"title",v.connectionError||fe[v.connectionState].label),X(br,` ${fe[v.connectionState].label??""}`),X(je,v.statusText),X(rt,v.detailText)}),L("click",xe,()=>h(ie,!0)),L("click",Wt,()=>h(se,!0)),L("click",Me,()=>h(te,!i(te))),L("click",Bn,()=>v.setStatus("Signed in to the Multibuilder dashboard")),L("click",rr,()=>h(N,!i(N))),k(t,Dn),gn()}er(["click","change","keydown"]);function Uu(t,e){return vd(pm,{target:t,props:e})}function hc(){const t=document.getElementById("ide-root");if(!t||t.dataset.mounted)return;t.dataset.mounted="1";const e=window.__IDE_BOOTSTRAP__||{};Uu(t,{sessions:e.sessions||[],session:e.session||"",rootPath:e.rootPath||""})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",hc):hc();window.mountRemoteIde=Uu;export{Aa as _};
