const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ide-monaco.js","./ide2.css","./ide3.css"])))=>i.map(i=>d[i]);
var Ha=Object.defineProperty;var Mi=e=>{throw TypeError(e)};var Ba=(e,t,n)=>t in e?Ha(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Re=(e,t,n)=>Ba(e,typeof t!="symbol"?t+"":t,n),Cs=(e,t,n)=>t.has(e)||Mi("Cannot "+n);var u=(e,t,n)=>(Cs(e,t,"read from private field"),n?n.call(e):t.get(e)),O=(e,t,n)=>t.has(e)?Mi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),q=(e,t,n,r)=>(Cs(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),se=(e,t,n)=>(Cs(e,t,"access private method"),n);var vs=Array.isArray,Ka=Array.prototype.indexOf,ns=Array.prototype.includes,hs=Array.from,ao=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,lo=Object.getOwnPropertyDescriptors,Ua=Object.prototype,qa=Array.prototype,ii=Object.getPrototypeOf,Ai=Object.isExtensible;function Wn(e){return typeof e=="function"}const Wa=()=>{};function Ga(e){return e()}function js(e){for(var t=0;t<e.length;t++)e[t]()}function co(){var e,t,n=new Promise((r,s)=>{e=r,t=s});return{promise:n,resolve:e,reject:t}}function Ya(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const n=[];for(const r of e)if(n.push(r),n.length===t)break;return n}const Ee=2,Nn=4,Mr=8,oi=1<<24,ft=16,nt=32,Rt=64,Vs=128,ai=256,tt=512,$e=1024,ke=2048,vt=4096,je=8192,Ue=16384,zn=32768,rs=1<<25,Wt=65536,ss=1<<17,Ja=1<<18,Rn=1<<19,uo=1<<20,wt=1<<25,an=65536,is=1<<21,bn=1<<22,qt=1<<23,$t=Symbol("$state"),fo=Symbol("component"),vo=Symbol("legacy props"),Za=Symbol(""),Jr=Symbol("attributes"),Hs=Symbol("class"),Bs=Symbol("style"),Zn=Symbol("text"),Zr=Symbol("form reset"),Ar=new class extends Error{constructor(){super(...arguments);Re(this,"name","StaleReactionError");Re(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var so;const li=!!((so=globalThis.document)!=null&&so.contentType)&&globalThis.document.contentType.includes("xml"),Xa=1,Qa=2,ho=4,el=8,tl=16,nl=1,rl=2,po=4,sl=8,il=16,ol=1,al=2,ye=Symbol("uninitialized"),_o="http://www.w3.org/1999/xhtml",ll="http://www.w3.org/2000/svg",cl="@attach";function ul(){console.warn("https://svelte.dev/e/derived_inert")}function fl(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function dl(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function go(e){return e===this.v}function vl(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function mo(e){return!vl(e,this.v)}function bo(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function hl(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function pl(e,t,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function _l(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function gl(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ml(e){throw new Error("https://svelte.dev/e/effect_orphan")}function bl(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function yl(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function wl(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function xl(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function $l(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function kl(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Fn=!1;function Sl(){Fn=!0}let he=null;function Pn(e){he=e}function ot(e,t=!1,n){he={p:he,i:!1,c:null,e:null,s:e,x:null,r:Q,l:Fn&&!t?{s:null,u:null,$:[]}:null}}function at(e){var t=he,n=t.e;if(n!==null){t.e=null;for(var r of n)Vo(r)}return t.i=!0,he=t.p,ci(e)}function ci(e={}){return ao(e,fo,{value:!0}),e}function Dn(){return!Fn||he!==null&&he.l===null}let Jt=[];function yo(){var e=Jt;Jt=[],js(e)}function xt(e){if(Jt.length===0&&!ir){var t=Jt;queueMicrotask(()=>{t===Jt&&yo()})}Jt.push(e)}function El(){for(;Jt.length>0;)yo()}const Cl=-7169;function _e(e,t){e.f=e.f&Cl|t}function ui(e){(e.f&tt)!==0||e.deps===null?_e(e,$e):_e(e,vt)}function wo(e){if(e!==null)for(const t of e)(t.f&Ee)===0||(t.f&an)===0||(t.f^=an,wo(t.deps))}function xo(e,t,n){(e.f&ke)!==0?t.add(e):(e.f&vt)!==0&&n.add(e),wo(e.deps),_e(e,$e)}let Gr=!1;function Tl(e){var t=Gr;try{return Gr=!1,[e(),Gr]}finally{Gr=t}}function $o(e,t){if(t){const n=document.body;e.autofocus=!0,xt(()=>{document.activeElement===n&&e.focus()})}}let Ii=!1;function Nl(){Ii||(Ii=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n[Zr])==null||t.call(n)})},{capture:!0}))}function Ln(e){var t=te,n=Q;rt(null),st(null);try{return e()}finally{rt(t),st(n)}}function fi(e,t,n,r=n){e.addEventListener(t,()=>Ln(n));const s=e[Zr];s?e[Zr]=()=>{s(),r(!0)}:e[Zr]=()=>r(!0),Nl()}function ko(e,t,n,r){const s=Dn()?Mn:di;var i=e.filter(h=>!h.settled),o=t.map(s);if(n.length===0&&i.length===0){r(o);return}var a=Q,l=Pl(),f=i.length===1?i[0].promise:i.length>1?Promise.all(i.map(h=>h.promise)):null;function d(h){if((a.f&Ue)===0){l();try{r([...o,...h])}catch(_){yt(_,a)}os()}}var p=So();if(n.length===0){f.then(()=>d([])).finally(p);return}function v(){Promise.all(n.map(h=>Ml(h))).then(d).catch(h=>yt(h,a)).finally(p)}f?f.then(()=>{l(),v(),os()}):v()}function Pl(){var e=Q,t=te,n=he,r=L;return function(i=!0){st(e),rt(t),Pn(n),i&&(e.f&Ue)===0&&(r==null||r.activate(),r==null||r.apply())}}function os(e=!0){st(null),rt(null),Pn(null),e&&(L==null||L.deactivate())}function So(){var e=Q,t=e.b,n=L,r=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,n),n.increment(r,e),()=>{t==null||t.update_pending_count(-1,n),n.decrement(r,e)}}function Mn(e){var t=Ee|ke;return Q!==null&&(Q.f|=Rn),{ctx:he,deps:null,effects:null,equals:go,f:t,fn:e,reactions:null,rv:0,v:ye,wv:0,parent:Q,ac:null}}const Xn=Symbol("obsolete");function Ml(e,t,n){let r=Q;r===null&&hl();var s=void 0,i=Ft(ye),o=!te,a=new Set;return ql(()=>{var h,_;var l=Q,f=co();s=f.promise;try{Promise.resolve(e()).then(f.resolve,w=>{w!==Ar&&f.reject(w)}).finally(os)}catch(w){f.reject(w),os()}var d=L;if(o){if((l.f&zn)!==0)var p=So();if((h=r.b)!=null&&h.is_rendered())(_=d.async_deriveds.get(l))==null||_.reject(Xn);else for(const w of a.values())w.reject(Xn);a.add(f),d.async_deriveds.set(l,f)}const v=(w,m=void 0)=>{p==null||p(),a.delete(f),m!==Xn&&(d.activate(),m?(i.f|=qt,An(i,m)):((i.f&qt)!==0&&(i.f^=qt),An(i,w)),d.deactivate())};f.promise.then(v,w=>v(null,w||"unknown"))}),ps(()=>{for(const l of a)l.reject(Xn)}),new Promise(l=>{function f(d){function p(){d===s?l(i):f(s)}d.then(p,p)}f(s)})}function et(e){const t=Mn(e);return Wo(t),t}function di(e){const t=Mn(e);return t.equals=mo,t}function Al(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)Pe(t[n])}}function vi(e){var t,n=Q,r=e.parent;if(!Dt&&r!==null&&e.v!==ye&&(r.f&(Ue|je))!==0)return ul(),e.v;st(r);try{e.f&=~an,Al(e),t=Zo(e)}finally{st(n)}return t}function Eo(e){var t=vi(e);if(!e.equals(t)&&(e.wv=Yo(),(!(L!=null&&L.is_fork)||e.deps===null)&&(L!==null?(L.capture(e,t,!0),sr==null||sr.capture(e,t,!0)):e.v=t,e.deps===null))){_e(e,$e);return}Dt||(Ne!==null?(gi()||L!=null&&L.is_fork)&&Ne.set(e,t):ui(e))}function Il(e){var t;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),n.ac!==null&&Ln(()=>{n.ac.abort(Ar),n.ac=null}),n.fn!==null&&(n.teardown=Wa),ar(n,0),mi(n))}function Co(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&In(t)}let Ts=null,_n=null,L=null,sr=null,Ne=null,Ks=null,ir=!1,Ns=!1,mn=null,Xr=null;var Oi=0;let Ol=1;var xn,Bt,Qt,$n,kn,Sn,At,En,He,ur,It,ct,gt,Cn,en,fe,Us,Qn,qs,To,No,gn,zl,er;const us=class us{constructor(){O(this,fe);Re(this,"id",Ol++);O(this,xn,!1);Re(this,"linked",!0);O(this,Bt,null);O(this,Qt,null);Re(this,"async_deriveds",new Map);Re(this,"current",new Map);Re(this,"previous",new Map);O(this,$n,new Set);O(this,kn,new Set);O(this,Sn,0);O(this,At,new Map);O(this,En,null);O(this,He,[]);O(this,ur,[]);O(this,It,new Set);O(this,ct,new Set);O(this,gt,new Map);O(this,Cn,new Set);Re(this,"is_fork",!1);O(this,en,!1);_n===null?Ts=_n=this:(q(_n,Qt,this),q(this,Bt,_n)),_n=this}skip_effect(t){u(this,gt).has(t)||u(this,gt).set(t,{d:[],m:[]}),u(this,Cn).delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=u(this,gt).get(t);if(r){u(this,gt).delete(t);for(var s of r.d)_e(s,ke),n(s);for(s of r.m)_e(s,vt),n(s)}u(this,Cn).add(t)}capture(t,n,r=!1){t.v!==ye&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&qt)===0&&(this.current.set(t,[n,r]),Ne==null||Ne.set(t,n)),this.is_fork||(t.v=n)}activate(){L=this}deactivate(){L=null,Ne=null}flush(){try{Ns=!0,L=this,se(this,fe,Qn).call(this)}finally{Oi=0,Ks=null,mn=null,Xr=null,Ns=!1,L=null,Ne=null,kt.clear()}}discard(){var t;for(const n of u(this,kn))n(this);u(this,kn).clear();for(const n of this.async_deriveds.values())n.reject(Xn);se(this,fe,er).call(this),(t=u(this,En))==null||t.resolve()}register_created_effect(t){u(this,ur).push(t)}increment(t,n){if(q(this,Sn,u(this,Sn)+1),t){let r=u(this,At).get(n)??0;u(this,At).set(n,r+1)}}decrement(t,n){if(q(this,Sn,u(this,Sn)-1),t){let r=u(this,At).get(n)??0;r===1?u(this,At).delete(n):u(this,At).set(n,r-1)}u(this,en)||(q(this,en,!0),xt(()=>{q(this,en,!1),this.linked&&this.flush()}))}transfer_effects(t,n){for(const r of t)u(this,It).add(r);for(const r of n)u(this,ct).add(r);t.clear(),n.clear()}oncommit(t){u(this,$n).add(t)}ondiscard(t){u(this,kn).add(t)}settled(){return(u(this,En)??q(this,En,co())).promise}static ensure(){if(L===null){const t=L=new us;!Ns&&!ir&&xt(()=>{u(t,xn)||t.flush()})}return L}apply(){{Ne=null;return}}schedule(t){var s;if(Ks=t,(s=t.b)!=null&&s.is_pending&&(t.f&(Nn|Mr|oi))!==0&&(t.f&zn)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(mn!==null&&n===Q&&(te===null||(te.f&Ee)===0))return;if((r&(Rt|nt))!==0){if((r&$e)===0)return;n.f^=$e}}u(this,He).push(n)}};xn=new WeakMap,Bt=new WeakMap,Qt=new WeakMap,$n=new WeakMap,kn=new WeakMap,Sn=new WeakMap,At=new WeakMap,En=new WeakMap,He=new WeakMap,ur=new WeakMap,It=new WeakMap,ct=new WeakMap,gt=new WeakMap,Cn=new WeakMap,en=new WeakMap,fe=new WeakSet,Us=function(){if(this.is_fork)return!0;for(const r of u(this,At).keys()){for(var t=r,n=!1;t.parent!==null;){if(u(this,gt).has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1},Qn=function(){var l,f,d,p;q(this,xn,!0),Oi++>1e3&&(se(this,fe,er).call(this),Fl());for(const v of u(this,It))u(this,ct).delete(v),_e(v,ke),this.schedule(v);for(const v of u(this,ct))_e(v,vt),this.schedule(v);const t=u(this,He);q(this,He,[]),this.apply();var n=mn=[],r=[],s=Xr=[];for(const v of t)try{se(this,fe,qs).call(this,v,n,r)}catch(h){throw Ao(v),se(this,fe,Us).call(this)||this.discard(),h}if(L=null,s.length>0){var i=us.ensure();for(const v of s)i.schedule(v)}if(mn=null,Xr=null,se(this,fe,Us).call(this)){se(this,fe,gn).call(this,r),se(this,fe,gn).call(this,n);for(const[v,h]of u(this,gt))Mo(v,h);s.length>0&&se(l=L,fe,Qn).call(l);return}const o=se(this,fe,To).call(this);if(o){se(this,fe,gn).call(this,r),se(this,fe,gn).call(this,n),se(f=o,fe,No).call(f,this);return}u(this,It).clear(),u(this,ct).clear();for(const v of u(this,$n))v(this);u(this,$n).clear(),sr=this,zi(r),zi(n),sr=null,(d=u(this,En))==null||d.resolve();var a=L;if(u(this,Sn)===0&&(u(this,He).length===0||a!==null)&&se(this,fe,er).call(this),u(this,He).length>0)if(a!==null){const v=a;u(v,He).push(...u(this,He).filter(h=>!u(v,He).includes(h)))}else a=this;a!==null&&(kt.clear(),se(p=a,fe,Qn).call(p))},qs=function(t,n,r){t.f^=$e;for(var s=t.first;s!==null;){var i=s.f,o=(i&(nt|Rt))!==0,a=o&&(i&$e)!==0,l=a||(i&je)!==0||u(this,gt).has(s);if(!l&&s.fn!==null){o?s.f^=$e:(i&Nn)!==0?n.push(s):Or(s)&&((i&ft)!==0&&u(this,ct).add(s),In(s));var f=s.first;if(f!==null){s=f;continue}}for(;s!==null;){var d=s.next;if(d!==null){s=d;break}s=s.parent}}},To=function(){for(var t=u(this,Bt);t!==null;){if(!t.is_fork){for(const[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=u(t,Bt)}return null},No=function(t){var r;for(const[s,i]of t.current)!this.previous.has(s)&&t.previous.has(s)&&this.previous.set(s,t.previous.get(s)),this.current.set(s,i);for(const[s,i]of t.async_deriveds){const o=this.async_deriveds.get(s);o&&i.promise.then(o.resolve).catch(o.reject)}t.async_deriveds.clear(),this.transfer_effects(u(t,It),u(t,ct));const n=s=>{var i=s.reactions;if(i!==null&&!((s.f&Ee)!==0&&(s.f&(ke|vt))===0))for(const l of i){var o=l.f;if((o&Ee)!==0)n(l);else{var a=l;o&(bn|ft)&&!this.async_deriveds.has(a)&&(u(this,ct).delete(a),_e(a,ke),this.schedule(a))}}};for(const s of this.current.keys())n(s);this.oncommit(()=>t.discard()),se(r=t,fe,er).call(r),L=this,se(this,fe,Qn).call(this)},gn=function(t){for(var n=0;n<t.length;n+=1)xo(t[n],u(this,It),u(this,ct))},zl=function(){var p;for(let v=Ts;v!==null;v=u(v,Qt)){var t=v.id<this.id,n=[];for(const[h,[_,w]]of this.current){if(v.current.has(h)){var r=v.current.get(h)[0];if(t&&_!==r)v.current.set(h,[_,w]);else continue}n.push(h)}if(t)for(const[h,_]of this.async_deriveds){const w=v.async_deriveds.get(h);w&&_.promise.then(w.resolve).catch(w.reject)}var s=[...v.current.keys()].filter(h=>!v.current.get(h)[1]);if(!(!u(v,xn)||s.length===0)){var i=s.filter(h=>!this.current.has(h));if(i.length===0)t&&v.discard();else if(n.length>0){if(t)for(const h of u(this,Cn))v.unskip_effect(h,_=>{var w;(_.f&(ft|bn))!==0?v.schedule(_):se(w=v,fe,gn).call(w,[_])});v.activate();var o=new Set,a=new Map;for(var l of n)Po(l,i,o,a);a=new Map;var f=[...v.current].filter(([h,_])=>{const w=this.current.get(h);return w?w[0]!==_[0]||w[1]!==_[1]:!0}).map(([h])=>h);if(f.length>0)for(const h of u(this,ur))(h.f&(Ue|je|ss))===0&&hi(h,f,a)&&((h.f&(bn|ft))!==0?(_e(h,ke),v.schedule(h)):u(v,It).add(h));if(u(v,He).length>0&&!u(v,en)){v.apply();for(var d of u(v,He))se(p=v,fe,qs).call(p,d,[],[]);q(v,He,[])}v.deactivate()}}}},er=function(){if(this.linked){var t=u(this,Bt),n=u(this,Qt);t===null?Ts=n:q(t,Qt,n),n===null?_n=t:q(n,Bt,t),this.linked=!1}};let ln=us;function Rl(e){var t=ir;ir=!0;try{for(var n;;){if(El(),L===null)return n;L.flush()}}finally{ir=t}}function Fl(){try{bl()}catch(e){yt(e,Ks)}}let lt=null;function zi(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(Ue|je))===0&&Or(r)&&(lt=new Set,In(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Ko(r),(lt==null?void 0:lt.size)>0)){kt.clear();for(const s of lt){if((s.f&(Ue|je))!==0)continue;const i=[s];let o=s.parent;for(;o!==null;)lt.has(o)&&(lt.delete(o),i.push(o)),o=o.parent;for(let a=i.length-1;a>=0;a--){const l=i[a];(l.f&(Ue|je))===0&&In(l)}}lt.clear()}}lt=null}}function Po(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const s of e.reactions){const i=s.f;(i&Ee)!==0?Po(s,t,n,r):(i&(bn|ft))!==0&&(i&ke)===0&&hi(s,t,r)&&(_e(s,ke),pi(s))}}function hi(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const s of e.deps){if(ns.call(t,s))return!0;if((s.f&Ee)!==0&&hi(s,t,n))return n.set(s,!0),!0}return n.set(e,!1),!1}function pi(e){L.schedule(e)}function Mo(e,t){if(!((e.f&nt)!==0&&(e.f&$e)!==0)){(e.f&ke)!==0?t.d.push(e):(e.f&vt)!==0&&t.m.push(e),_e(e,$e);for(var n=e.first;n!==null;)Mo(n,t),n=n.next}}function Ao(e){_e(e,$e);for(var t=e.first;t!==null;)Ao(t),t=t.next}let as=new Set;const kt=new Map;let Io=!1;function Ft(e,t){var n={f:0,v:e,reactions:null,equals:go,rv:0,wv:0};return n}function z(e,t){const n=Ft(e);return Wo(n),n}function Dl(e,t=!1,n=!0){var s;const r=Ft(e);return t||(r.equals=mo),Fn&&n&&he!==null&&he.l!==null&&((s=he.l).s??(s.s=[])).push(r),r}function y(e,t,n=!1){te!==null&&(!dt||(te.f&ss)!==0)&&Dn()&&(te.f&(Ee|ft|bn|ss))!==0&&(St===null||!St.has(e))&&$l();let r=n?Se(t):t;return An(e,r,Xr)}function An(e,t,n=null){if(!e.equals(t)){Dt?kt.set(e,t):kt.has(e)||kt.set(e,e.v);var r=ln.ensure();if(r.capture(e,t),(e.f&Ee)!==0){const s=e;(e.f&ke)!==0&&vi(s),Ne===null&&ui(s)}e.wv=Yo(),Oo(e,ke,n),Dn()&&Q!==null&&(Q.f&$e)!==0&&(Q.f&(nt|Rt))===0&&(Ze===null?Yl([e]):Ze.push(e)),!r.is_fork&&as.size>0&&!Io&&Ll()}return t}function Ll(){Io=!1;for(const e of as){(e.f&$e)!==0&&_e(e,vt);let t;try{t=Or(e)}catch{t=!0}t&&In(e)}as.clear()}function Ri(e,t=1){var n=c(e),r=t===1?n++:n--;return y(e,n),r}function or(e){y(e,e.v+1)}function Oo(e,t,n){var r=e.reactions;if(r!==null)for(var s=Dn(),i=r.length,o=0;o<i;o++){var a=r[o],l=a.f;if(!(!s&&a===Q)){var f=(l&ke)===0;if(f&&_e(a,t),(l&ss)!==0)as.add(a);else if((l&Ee)!==0){var d=a;Ne==null||Ne.delete(d),(l&an)===0&&(l&tt&&(Q===null||(Q.f&is)===0)&&(a.f|=an),Oo(d,vt,n))}else if(f){var p=a;(l&ft)!==0&&lt!==null&&lt.add(p),n!==null?n.push(p):pi(p)}}}}function Se(e){if(typeof e!="object"||e===null||$t in e||fo in e)return e;const t=ii(e);if(t!==Ua&&t!==qa)return e;var n=new Map,r=vs(e),s=z(0),i=on,o=a=>{if(on===i)return a();var l=te,f=on;rt(null),Li(i);var d=a();return rt(l),Li(f),d};return r&&n.set("length",z(e.length)),new Proxy(e,{defineProperty(a,l,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&wl();var d=n.get(l);return d===void 0?o(()=>{var p=z(f.value);return n.set(l,p),p}):y(d,f.value,!0),!0},deleteProperty(a,l){var f=n.get(l);if(f===void 0){if(l in a){const d=o(()=>z(ye));n.set(l,d),or(s)}}else y(f,ye),or(s);return!0},get(a,l,f){var h;if(l===$t)return e;var d=n.get(l),p=l in a;if(d===void 0&&(!p||(h=Ut(a,l))!=null&&h.writable)&&(d=o(()=>{var _=Se(p?a[l]:ye),w=z(_);return w}),n.set(l,d)),d!==void 0){var v=c(d);return v===ye?void 0:v}return Reflect.get(a,l,f)},getOwnPropertyDescriptor(a,l){var f=Reflect.getOwnPropertyDescriptor(a,l);if(f&&"value"in f){var d=n.get(l);d&&(f.value=c(d))}else if(f===void 0){var p=n.get(l),v=p==null?void 0:p.v;if(p!==void 0&&v!==ye)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return f},has(a,l){var v;if(l===$t)return!0;var f=n.get(l),d=f!==void 0&&f.v!==ye||Reflect.has(a,l);if(f!==void 0||Q!==null&&(!d||(v=Ut(a,l))!=null&&v.writable)){f===void 0&&(f=o(()=>{var h=d?Se(a[l]):ye,_=z(h);return _}),n.set(l,f));var p=c(f);if(p===ye)return!1}return d},set(a,l,f,d){var A;var p=n.get(l),v=l in a;if(r&&l==="length")for(var h=f;h<p.v;h+=1){var _=n.get(h+"");_!==void 0?y(_,ye):h in a&&(_=o(()=>z(ye)),n.set(h+"",_))}if(p===void 0)(!v||(A=Ut(a,l))!=null&&A.writable)&&(p=o(()=>z(void 0)),y(p,Se(f)),n.set(l,p));else{v=p.v!==ye;var w=o(()=>Se(f));y(p,w)}var m=Reflect.getOwnPropertyDescriptor(a,l);if(m!=null&&m.set&&m.set.call(d,f),!v){if(r&&typeof l=="string"){var E=n.get("length"),I=Number(l);Number.isInteger(I)&&I>=E.v&&y(E,I+1)}or(s)}return!0},ownKeys(a){c(s);var l=Reflect.ownKeys(a).filter(p=>{var v=n.get(p);return v===void 0||v.v!==ye});for(var[f,d]of n)d.v!==ye&&!(f in a)&&l.push(f);return l},setPrototypeOf(){xl()}})}function Fi(e){try{if(e!==null&&typeof e=="object"&&$t in e)return e[$t]}catch{}return e}function zo(e,t){return Object.is(Fi(e),Fi(t))}var Ws,Ro,Fo,Do;function jl(){if(Ws===void 0){Ws=window,Ro=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Fo=Ut(t,"firstChild").get,Do=Ut(t,"nextSibling").get,Ai(e)&&(e[Hs]=void 0,e[Jr]=null,e[Bs]=void 0,e.__e=void 0),Ai(n)&&(n[Zn]=void 0)}}function zt(e=""){return document.createTextNode(e)}function cn(e){return Fo.call(e)}function Ir(e){return Do.call(e)}function k(e,t){return cn(e)}function V(e,t=!1){{var n=cn(e);return n instanceof Comment&&n.data===""?Ir(n):n}}function ve(e,t=!1){return cn(e)}function b(e,t=1,n=!1){let r=e;for(;t--;)r=Ir(r);return r}function Vl(e){e.textContent=""}function Lo(){return!1}function _i(e,t,n){return t==null||t===_o?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function Hl(e){var t=Q;if(t===null)return te.f|=qt,e;if((t.f&zn)===0&&(t.f&Nn)===0)throw e;yt(e,t)}function yt(e,t){if(!(t!==null&&(t.f&Ue)!==0)){for(;t!==null;){if((t.f&Vs)!==0&&(t.f&(Ue|rs))===0){if((t.f&zn)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}function jo(e){Q===null&&(te===null&&ml(),gl()),Dt&&_l()}function Bl(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function ht(e,t){var n=Q;n!==null&&(n.f&je)!==0&&(e|=je);var r={ctx:he,deps:null,nodes:null,f:e|ke|tt,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};L==null||L.register_created_effect(r);var s=r;if((e&Nn)!==0)mn!==null?mn.push(r):ln.ensure().schedule(r);else if(t!==null){try{In(r)}catch(o){throw Pe(r),o}s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&Rn)===0&&(s=s.first,(e&ft)!==0&&(e&Wt)!==0&&s!==null&&(s.f|=Wt))}if(s!==null&&(s.parent=n,n!==null&&Bl(s,n),te!==null&&(te.f&Ee)!==0&&(e&Rt)===0)){var i=te;(i.effects??(i.effects=[])).push(s)}return r}function gi(){return te!==null&&!dt}function ps(e){const t=ht(Mr,null);return _e(t,$e),t.teardown=e,t}function un(e){jo();var t=Q.f,n=!te&&(t&nt)!==0&&he!==null&&!he.i;if(n){var r=he;(r.e??(r.e=[])).push(e)}else return Vo(e)}function Vo(e){return ht(Nn|uo,e)}function Kl(e){return jo(),ht(Mr|uo,e)}function Ul(e){ln.ensure();const t=ht(Rt|Rn,e);return(n={})=>new Promise(r=>{n.outro?sn(t,()=>{Pe(t),r(void 0)}):(Pe(t),r(void 0))})}function _s(e){return ht(Nn,e)}function ql(e){return ht(bn|Rn,e)}function gs(e,t=0){return ht(Mr|t,e)}function ce(e,t=[],n=[],r=[]){ko(r,t,n,s=>{ht(Mr,()=>{e(...s.map(c))})})}function jn(e,t=0){var n=ht(ft|t,e);return n}function Ho(e,t=0){var n=ht(oi|t,e);return n}function Be(e){return ht(nt|Rn,e)}function Bo(e){var t=e.teardown;if(t!==null){const n=Dt,r=te;Di(!0),rt(null);try{t.call(null)}catch(s){yt(s,e.parent)}finally{Di(n),rt(r)}}}function mi(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const s=n.ac;s!==null&&Ln(()=>{s.abort(Ar)});var r=n.next;(n.f&Rt)!==0?n.parent=null:Pe(n,t),n=r}}function Wl(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&nt)===0&&Pe(t),t=n}}function Pe(e,t=!0){var n=!1;(t||(e.f&Ja)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Gl(e.nodes.start,e.nodes.end),n=!0),e.f|=rs,mi(e,t&&!n),ar(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const i of r)i.stop();Bo(e),e.f^=rs,e.f|=Ue;var s=e.parent;s!==null&&s.first!==null&&Ko(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Gl(e,t){for(;e!==null;){var n=e===t?null:Ir(e);e.remove(),e=n}}function Ko(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function sn(e,t,n=!0){var r=[];e.f|=ai,Uo(e,r,!0);var s=()=>{n&&Pe(e),t&&t()},i=r.length;if(i>0){var o=()=>--i||s();for(var a of r)a.out(o)}else s()}function Uo(e,t,n){if((e.f&je)===0){e.f^=je;var r=e.nodes&&e.nodes.t;if(r!==null)for(const a of r)(a.is_global||n)&&t.push(a);for(var s=e.first;s!==null;){var i=s.next;if((s.f&Rt)===0){var o=(s.f&Wt)!==0||(s.f&nt)!==0&&(e.f&ft)!==0;Uo(s,t,o?n:!1)}s=i}}}function ls(e){e.f&=~ai,qo(e,!0)}function qo(e,t){if((e.f&ai)===0&&(e.f&je)!==0){e.f^=je,(e.f&$e)===0&&(_e(e,ke),ln.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,s=(n.f&Wt)!==0||(n.f&nt)!==0;qo(n,s?t:!1),n=r}var i=e.nodes&&e.nodes.t;if(i!==null)for(const o of i)(o.is_global||t)&&o.in()}}function bi(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var s=n===r?null:Ir(n);t.append(n),n=s}}let Qr=!1,Dt=!1;function Di(e){Dt=e}let te=null,dt=!1;function rt(e){te=e}let Q=null;function st(e){Q=e}let St=null;function Wo(e){te!==null&&(St??(St=new Set)).add(e)}let Ke=null,Ye=0,Ze=null;function Yl(e){Ze=e}let Go=1,Zt=0,on=Zt;function Li(e){on=e}function Yo(){return++Go}function Or(e){var t=e.f;if((t&ke)!==0)return!0;if(t&Ee&&(e.f&=~an),(t&vt)!==0){for(var n=e.deps,r=n.length,s=0;s<r;s++){var i=n[s];if(Or(i)&&Eo(i),i.wv>e.wv)return!0}(t&tt)!==0&&Ne===null&&_e(e,$e)}return!1}function Jo(e,t,n=!0){var r=e.reactions;if(r!==null&&!(St!==null&&St.has(e)))for(var s=0;s<r.length;s++){var i=r[s];(i.f&Ee)!==0?Jo(i,t,!1):t===i&&(n?_e(i,ke):(i.f&$e)!==0&&_e(i,vt),pi(i))}}function Zo(e){var t=Ke,n=Ye,r=Ze,s=te,i=St,o=he,a=dt,l=on,f=e.f;Ke=null,Ye=0,Ze=null,te=(f&(nt|Rt))===0?e:null,St=null,Pn(e.ctx),dt=!1,on=++Zt,e.ac!==null&&(Ln(()=>{e.ac.abort(Ar)}),e.ac=null);try{e.f|=is;var d=e.fn,p=d();e.f|=zn;var v=ji(e);if(Dn()&&Ze!==null&&!dt&&v!==null&&(e.f&(Ee|vt|ke))===0)for(var h=0;h<Ze.length;h++)Jo(Ze[h],e);if(s!==null&&s!==e){if(Zt++,s.deps!==null)for(let _=0;_<n;_+=1)s.deps[_].rv=Zt;if(t!==null)for(const _ of t)_.rv=Zt;Ze!==null&&(r===null?r=Ze:r.push(...Ze))}return(e.f&qt)!==0&&(e.f^=qt),p}catch(_){return ji(e),Hl(_)}finally{e.f^=is,Ke=t,Ye=n,Ze=r,te=s,St=i,Pn(o),dt=a,on=l}}function ji(e){var s;var t=e.deps,n=L==null?void 0:L.is_fork;if(Ke!==null){var r;if(n||ar(e,Ye),t!==null&&Ye>0)for(t.length=Ye+Ke.length,r=0;r<Ke.length;r++)t[Ye+r]=Ke[r];else e.deps=t=Ke;if(gi()&&(e.f&tt)!==0)for(r=Ye;r<t.length;r++)((s=t[r]).reactions??(s.reactions=[])).push(e)}else!n&&t!==null&&Ye<t.length&&(ar(e,Ye),t.length=Ye);return t}function Jl(e,t){let n=t.reactions;if(n!==null){var r=Ka.call(n,e);if(r!==-1){var s=n.length-1;s===0?n=t.reactions=null:(n[r]=n[s],n.pop())}}if(n===null&&(t.f&Ee)!==0&&(Ke===null||!ns.call(Ke,t))){var i=t;(i.f&tt)!==0&&(i.f^=tt,i.f&=~an),i.v!==ye&&ui(i),i.ac!==null&&Ln(()=>{i.ac.abort(Ar),i.ac=null,_e(i,ke)}),Il(i),ar(i,0)}}function ar(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Jl(e,n[r])}function In(e){var t=e.f;if((t&Ue)===0){_e(e,$e);var n=Q,r=Qr;Q=e,Qr=(t&(nt|Rt))===0;try{(t&(ft|oi))!==0?Wl(e):mi(e),Bo(e);var s=Zo(e);e.teardown=typeof s=="function"?s:null,e.wv=Go;var i}finally{Qr=r,Q=n}}}async function Zl(){await Promise.resolve(),Rl()}function c(e){var t=e.f,n=(t&Ee)!==0;if(te!==null&&!dt){var r=Q!==null&&(Q.f&Ue)!==0;if(!r&&(St===null||!St.has(e))){var s=te.deps;if((te.f&is)!==0)e.rv<Zt&&(e.rv=Zt,Ke===null&&s!==null&&s[Ye]===e?Ye++:Ke===null?Ke=[e]:Ke.push(e));else{te.deps??(te.deps=[]),ns.call(te.deps,e)||te.deps.push(e);var i=e.reactions;i===null?e.reactions=[te]:ns.call(i,te)||i.push(te)}}}if(Dt&&kt.has(e))return kt.get(e);if(n){var o=e;if(Dt){var a=o.v;return((o.f&$e)===0&&o.reactions!==null||Qo(o))&&(a=vi(o)),kt.set(o,a),a}var l=(o.f&tt)===0&&!dt&&te!==null&&(Qr||(te.f&tt)!==0),f=(o.f&zn)===0;Or(o)&&(l&&(o.f|=tt),Eo(o)),l&&!f&&(Co(o),Xo(o))}if(Ne!=null&&Ne.has(e))return Ne.get(e);if((e.f&qt)!==0)throw e.v;return e.v}function Xo(e){if(e.f|=tt,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Ee)!==0&&(t.f&tt)===0&&(Co(t),Xo(t))}function Qo(e){if(e.v===ye)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(kt.has(t)||(t.f&Ee)!==0&&Qo(t))return!0;return!1}function Et(e){var t=dt;try{return dt=!0,e()}finally{dt=t}}function Yt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if($t in e)Gs(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&$t in n&&Gs(n)}}}function Gs(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{Gs(e[r],t)}catch{}const n=ii(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=lo(n);for(let s in r){const i=r[s].get;if(i)try{i.call(e)}catch{}}}}}function Xl(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Ql=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ec(e){return Ql.includes(e)}const tc={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function nc(e){return e=e.toLowerCase(),tc[e]??e}const rc=["touchstart","touchmove"];function sc(e){return rc.includes(e)}const Xt=Symbol("events"),ea=new Set,Ys=new Set;function ta(e,t,n,r={}){function s(i){if(r.capture||Js.call(t,i),!i.cancelBubble)return Ln(()=>n==null?void 0:n.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?xt(()=>{t.addEventListener(e,s,r)}):t.addEventListener(e,s,r),s}function lr(e,t,n,r,s){var i={capture:r,passive:s},o=ta(e,t,n,i);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&ps(()=>{t.removeEventListener(e,o,i)})}function H(e,t,n){(t[Xt]??(t[Xt]={}))[e]=n}function jt(e){for(var t=0;t<e.length;t++)ea.add(e[t]);for(var n of Ys)n(e)}let Ps=null,Ms=!1;function Js(e){var w,m;var t=this,n=t.ownerDocument,r=e.type,s=((w=e.composedPath)==null?void 0:w.call(e))||[],i=s[0]||e.target;Ps=e,Ms||(Ms=!0,setTimeout(()=>{Ms=!1,Ps=null}));var o=0,a=Ps===e&&e[Xt];if(a){var l=s.indexOf(a);if(l!==-1&&(t===document||t===window)){e[Xt]=t;return}var f=s.indexOf(t);if(f===-1)return;l<=f&&(o=l)}if(i=s[o]||e.target,i!==t){ao(e,"currentTarget",{configurable:!0,get(){return i||n}});var d=te,p=Q;rt(null),st(null);try{for(var v,h=[];i!==null&&i!==t;){try{var _=(m=i[Xt])==null?void 0:m[r];_!=null&&(!i.disabled||e.target===i)&&_.call(i,e)}catch(E){v?h.push(E):v=E}if(e.cancelBubble)break;o++,i=o<s.length?s[o]:null}if(v){for(let E of h)queueMicrotask(()=>{throw E});throw v}}finally{e[Xt]=t,delete e.currentTarget,rt(d),st(p)}}}var io;const As=((io=globalThis==null?void 0:globalThis.window)==null?void 0:io.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function ic(e){return(As==null?void 0:As.createHTML(e))??e}function na(e){var t=_i("template");return t.innerHTML=ic(e.replaceAll("<!>","<!---->")),t.content}function cr(e,t){var n=Q;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function F(e,t){var n=(t&ol)!==0,r=(t&al)!==0,s,i=!e.startsWith("<!>");return()=>{s===void 0&&(s=na(i?e:"<!>"+e),n||(s=cn(s)));var o=r||Ro?document.importNode(s,!0):s.cloneNode(!0);if(n){var a=cn(o),l=o.lastChild;cr(a,l)}else cr(o,o);return o}}function oc(e,t,n="svg"){var r=!e.startsWith("<!>"),s=`<${n}>${r?e:"<!>"+e}</${n}>`,i;return()=>{if(!i){var o=na(s),a=cn(o);i=cn(a)}var l=i.cloneNode(!0);return cr(l,l),l}}function ra(e,t){return oc(e,t,"svg")}function Z(){var e=document.createDocumentFragment(),t=document.createComment(""),n=zt();return e.append(t,n),cr(t,n),e}function x(e,t){e!==null&&e.before(t)}function ac(e){let t=0,n=Ft(0),r;return()=>{gi()&&(c(n),gs(()=>(t===0&&(r=Et(()=>e(()=>or(n)))),t+=1,()=>{xt(()=>{t-=1,t===0&&(r==null||r(),r=void 0,or(n))})})))}}var lc=Wt|Rn;function cc(e,t,n,r){new uc(e,t,n,r)}var Xe,si,Qe,tn,Fe,qe,De,We,mt,nn,Kt,Tn,fr,dr,Ot,fs,de,fc,dc,Zs,vc,Xs,tr,es,Qs,ei;class uc{constructor(t,n,r,s){O(this,de);Re(this,"parent");Re(this,"is_pending",!1);Re(this,"transform_error");O(this,Xe);O(this,si,null);O(this,Qe);O(this,tn);O(this,Fe);O(this,qe,null);O(this,De,null);O(this,We,null);O(this,mt,null);O(this,nn,0);O(this,Kt,0);O(this,Tn,!1);O(this,fr,new Set);O(this,dr,new Set);O(this,Ot,null);O(this,fs,ac(()=>(q(this,Ot,Ft(u(this,nn))),()=>{q(this,Ot,null)})));var i;q(this,Xe,t),q(this,Qe,n),q(this,tn,o=>{var a=Q;a.b=this,a.f|=Vs,r(o)}),this.parent=Q.b,this.transform_error=s??((i=this.parent)==null?void 0:i.transform_error)??(o=>o),q(this,Fe,jn(()=>{se(this,de,Xs).call(this)},lc))}defer_effect(t){xo(t,u(this,fr),u(this,dr))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,Qe).pending}update_pending_count(t,n){se(this,de,Qs).call(this,t,n),q(this,nn,u(this,nn)+t),!(!u(this,Ot)||u(this,Tn))&&(q(this,Tn,!0),xt(()=>{q(this,Tn,!1),u(this,Ot)&&An(u(this,Ot),u(this,nn))}))}get_effect_pending(){return u(this,fs).call(this),c(u(this,Ot))}error(t){if(!u(this,Qe).onerror&&!u(this,Qe).failed)throw t;L!=null&&L.is_fork?(u(this,qe)&&L.skip_effect(u(this,qe)),u(this,De)&&L.skip_effect(u(this,De)),u(this,We)&&L.skip_effect(u(this,We)),L.oncommit(()=>{se(this,de,ei).call(this,t)})):se(this,de,ei).call(this,t)}}Xe=new WeakMap,si=new WeakMap,Qe=new WeakMap,tn=new WeakMap,Fe=new WeakMap,qe=new WeakMap,De=new WeakMap,We=new WeakMap,mt=new WeakMap,nn=new WeakMap,Kt=new WeakMap,Tn=new WeakMap,fr=new WeakMap,dr=new WeakMap,Ot=new WeakMap,fs=new WeakMap,de=new WeakSet,fc=function(){try{q(this,qe,Be(()=>u(this,tn).call(this,u(this,Xe))))}catch(t){this.error(t)}},dc=function(t){const n=u(this,Qe).failed,{reset:r,invoke_onerror:s}=se(this,de,Zs).call(this,t);xt(s),n&&q(this,We,Be(()=>{n(u(this,Xe),()=>t,()=>r)}))},Zs=function(t){var n=!1,r=!1;const s=()=>{if(n){dl();return}n=!0,r&&kl(),u(this,We)!==null&&sn(u(this,We),()=>{q(this,We,null)}),se(this,de,es).call(this,()=>{se(this,de,Xs).call(this)})};return{reset:s,invoke_onerror:()=>{var o,a;try{r=!0,(a=(o=u(this,Qe)).onerror)==null||a.call(o,t,s),r=!1}catch(l){yt(l,u(this,Fe)&&u(this,Fe).parent)}}}},vc=function(){const t=u(this,Qe).pending;t&&(this.is_pending=!0,q(this,De,Be(()=>t(u(this,Xe)))),xt(()=>{var n=q(this,mt,document.createDocumentFragment()),r=zt(),s=!1;if(n.append(r),q(this,qe,se(this,de,es).call(this,()=>{try{return Be(()=>u(this,tn).call(this,r))}catch(i){try{this.error(i),s=!0}catch(o){yt(o,u(this,Fe).parent)}return null}})),u(this,qe)===null){q(this,mt,null),s&&se(this,de,tr).call(this,L);return}u(this,Kt)===0&&(u(this,Xe).before(n),q(this,mt,null),sn(u(this,De),()=>{q(this,De,null)}),se(this,de,tr).call(this,L))}))},Xs=function(){try{if(this.is_pending=this.has_pending_snippet(),q(this,Kt,0),q(this,nn,0),q(this,qe,Be(()=>{u(this,tn).call(this,u(this,Xe))})),u(this,Kt)>0){var t=q(this,mt,document.createDocumentFragment());bi(u(this,qe),t);const n=u(this,Qe).pending;q(this,De,Be(()=>n(u(this,Xe))))}else se(this,de,tr).call(this,L)}catch(n){this.error(n)}},tr=function(t){this.is_pending=!1,t.transfer_effects(u(this,fr),u(this,dr))},es=function(t){var n=Q,r=te,s=he;st(u(this,Fe)),rt(u(this,Fe)),Pn(u(this,Fe).ctx);try{return ln.ensure(),t()}finally{st(n),rt(r),Pn(s)}},Qs=function(t,n){var r;if(!this.has_pending_snippet()){this.parent&&se(r=this.parent,de,Qs).call(r,t,n);return}q(this,Kt,u(this,Kt)+t),u(this,Kt)===0&&(se(this,de,tr).call(this,n),u(this,De)&&sn(u(this,De),()=>{q(this,De,null)}),u(this,mt)&&(u(this,Xe).before(u(this,mt)),q(this,mt,null)))},ei=function(t){u(this,qe)&&(Pe(u(this,qe)),q(this,qe,null)),u(this,De)&&(Pe(u(this,De)),q(this,De,null)),u(this,We)&&(Pe(u(this,We)),q(this,We,null));let n=u(this,Qe).failed;const r=s=>{const{reset:i,invoke_onerror:o}=se(this,de,Zs).call(this,s);o(),n&&q(this,We,se(this,de,es).call(this,()=>{try{return Be(()=>{var a=Q;a.b=this,a.f|=Vs,n(u(this,Xe),()=>s,()=>i)})}catch(a){return yt(a,u(this,Fe).parent),null}}))};xt(()=>{var s;try{s=this.transform_error(t)}catch(i){yt(i,u(this,Fe)&&u(this,Fe).parent);return}s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(r,i=>yt(i,u(this,Fe)&&u(this,Fe).parent)):r(s)})};function ue(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[Zn]??(e[Zn]=e.nodeValue))&&(e[Zn]=n,e.nodeValue=`${n}`)}function hc(e,t){return pc(e,t)}const Yr=new Map;function pc(e,{target:t,anchor:n,props:r={},events:s,context:i,intro:o=!0,transformError:a}){jl();var l=void 0,f=Ul(()=>{var d=n??t.appendChild(zt());cc(d,{pending:()=>{}},h=>{ot({});var _=he;i&&(_.c=i),s&&(r.$$events=s),l=e(h,r)||ci(),at()},a);var p=new Set,v=h=>{for(var _=0;_<h.length;_++){var w=h[_];if(!p.has(w)){p.add(w);var m=sc(w);for(const A of[t,document]){var E=Yr.get(A);E===void 0&&(E=new Map,Yr.set(A,E));var I=E.get(w);I===void 0?(A.addEventListener(w,Js,{passive:m}),E.set(w,1)):E.set(w,I+1)}}}};return v(hs(ea)),Ys.add(v),()=>{var m;for(var h of p)for(const E of[t,document]){var _=Yr.get(E),w=_.get(h);--w==0?(E.removeEventListener(h,Js),_.delete(h),_.size===0&&Yr.delete(E)):_.set(h,w)}Ys.delete(v),d!==n&&((m=d.parentNode)==null||m.removeChild(d))}});return _c.set(l,f),l}let _c=new WeakMap;var ut,bt,Ge,rn,vr,hr,ds;class ms{constructor(t,n=!0){Re(this,"anchor");O(this,ut,new Map);O(this,bt,new Map);O(this,Ge,new Map);O(this,rn,new Set);O(this,vr,!0);O(this,hr,t=>{if(u(this,ut).has(t)){var n=u(this,ut).get(t),r=u(this,bt).get(n);if(r)ls(r),u(this,rn).delete(n);else{var s=u(this,Ge).get(n);s&&(ls(s.effect),u(this,bt).set(n,s.effect),u(this,Ge).delete(n),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[i,o]of u(this,ut)){if(u(this,ut).delete(i),i===t)break;const a=u(this,Ge).get(o);a&&(Pe(a.effect),u(this,Ge).delete(o))}for(const[i,o]of u(this,bt)){if(i===n||u(this,rn).has(i))continue;const a=()=>{if(Array.from(u(this,ut).values()).includes(i)){var f=document.createDocumentFragment();bi(o,f),f.append(zt()),u(this,Ge).set(i,{effect:o,fragment:f})}else Pe(o);u(this,rn).delete(i),u(this,bt).delete(i)};u(this,vr)||!r?(u(this,rn).add(i),sn(o,a,!1)):a()}}});O(this,ds,t=>{u(this,ut).delete(t);const n=Array.from(u(this,ut).values());for(const[r,s]of u(this,Ge))n.includes(r)||(Pe(s.effect),u(this,Ge).delete(r))});this.anchor=t,q(this,vr,n)}ensure(t,n){var r=L,s=Lo();if(n&&!u(this,bt).has(t)&&!u(this,Ge).has(t))if(s){var i=document.createDocumentFragment(),o=zt();i.append(o),u(this,Ge).set(t,{effect:Be(()=>n(o)),fragment:i})}else u(this,bt).set(t,Be(()=>n(this.anchor)));if(u(this,ut).set(r,t),s){for(const[a,l]of u(this,bt))a===t?r.unskip_effect(l):r.skip_effect(l);for(const[a,l]of u(this,Ge))a===t?r.unskip_effect(l.effect):r.skip_effect(l.effect);r.oncommit(u(this,hr)),r.ondiscard(u(this,ds))}else u(this,hr).call(this,r)}}ut=new WeakMap,bt=new WeakMap,Ge=new WeakMap,rn=new WeakMap,vr=new WeakMap,hr=new WeakMap,ds=new WeakMap;function X(e,t,n=!1){var r=new ms(e),s=n?Wt:0;function i(o,a){r.ensure(o,a)}jn(()=>{var o=!1;t((a,l=0)=>{o=!0,i(l,a)}),o||i(-1,null)},s)}const gc=Symbol("NaN");function mc(e,t,n){var r=new ms(e),s=!Dn();jn(()=>{var i=t();i!==i&&(i=gc),s&&i!==null&&typeof i=="object"&&(i={}),r.ensure(i,n)})}function bc(e,t){return t}function yc(e,t,n){for(var r=[],s=t.length,i,o=t.length,a=0;a<s;a++){let p=t[a];sn(p,()=>{if(i){if(i.pending.delete(p),i.done.add(p),i.pending.size===0){var v=e.outrogroups;ti(e,hs(i.done)),v.delete(i),v.size===0&&(e.outrogroups=null)}}else o-=1},!1)}if(o===0){var l=r.length===0&&n!==null&&e.pending.size===0;if(l){var f=n,d=f.parentNode;Vl(d),d.append(f),e.items.clear()}ti(e,t,!l)}else i={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(i)}function ti(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(const o of e.pending.values())for(const a of o)r.add(e.items.get(a).e)}for(var s=0;s<t.length;s++){var i=t[s];if(r!=null&&r.has(i)){i.f|=wt;const o=document.createDocumentFragment();bi(i,o)}else Pe(t[s],n)}}var Vi;function it(e,t,n,r,s,i=null){var o=e,a=new Map,l=(t&ho)!==0;if(l){var f=e;o=f.appendChild(zt())}var d=null,p=di(()=>{var A=n();return vs(A)?A:A==null?[]:hs(A)}),v,h=new Map,_=!0;function w(A){(I.effect.f&Ue)===0&&(I.pending.delete(A),I.fallback=d,wc(I,v,o,t,r),d!==null&&(v.length===0?(d.f&wt)===0?ls(d):(d.f^=wt,nr(d,null,o)):sn(d,()=>{d=null})))}function m(A){I.pending.delete(A)}var E=jn(()=>{v=c(p);for(var A=v.length,Y=new Set,C=L,S=Lo(),M=0;M<A;M+=1){var ee=v[M],G=r(ee,M),R=_?null:a.get(G);R?(R.v&&An(R.v,ee),R.i&&An(R.i,M),S&&C.unskip_effect(R.e)):(R=xc(a,_?o:Vi??(Vi=zt()),ee,G,M,s,t,n),_||(R.e.f|=wt),a.set(G,R)),Y.add(G)}if(A===0&&i&&!d&&(_?d=Be(()=>i(o)):(d=Be(()=>i(Vi??(Vi=zt()))),d.f|=wt)),A>Y.size&&pl(),!_)if(h.set(C,Y),S){for(const[N,B]of a)Y.has(N)||C.skip_effect(B.e);C.oncommit(w),C.ondiscard(m)}else w(C);c(p)}),I={effect:E,items:a,pending:h,outrogroups:null,fallback:d};_=!1}function Gn(e){for(;e!==null&&(e.f&nt)===0;)e=e.next;return e}function wc(e,t,n,r,s){var R,N,B,D,W,be,T,K,P;var i=(r&el)!==0,o=t.length,a=e.items,l=Gn(e.effect.first),f,d=null,p,v=[],h=[],_,w,m,E;if(i)for(E=0;E<o;E+=1)_=t[E],w=s(_,E),m=a.get(w).e,(m.f&wt)===0&&((N=(R=m.nodes)==null?void 0:R.a)==null||N.measure(),(p??(p=new Set)).add(m));for(E=0;E<o;E+=1){if(_=t[E],w=s(_,E),m=a.get(w).e,e.outrogroups!==null)for(const U of e.outrogroups)U.pending.delete(m),U.done.delete(m);if((m.f&je)!==0&&(ls(m),i&&((D=(B=m.nodes)==null?void 0:B.a)==null||D.unfix(),(p??(p=new Set)).delete(m))),(m.f&wt)!==0)if(m.f^=wt,m===l)nr(m,null,n);else{var I=d?d.next:l;m===e.effect.last&&(e.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),Vt(e,d,m),Vt(e,m,I),nr(m,I,n),d=m,v=[],h=[],l=Gn(d.next);continue}if(m!==l){if(f!==void 0&&f.has(m)){if(v.length<h.length){var A=h[0],Y;d=A.prev;var C=v[0],S=v[v.length-1];for(Y=0;Y<v.length;Y+=1)nr(v[Y],A,n);for(Y=0;Y<h.length;Y+=1)f.delete(h[Y]);Vt(e,C.prev,S.next),Vt(e,d,C),Vt(e,S,A),l=A,d=S,E-=1,v=[],h=[]}else f.delete(m),nr(m,l,n),Vt(e,m.prev,m.next),Vt(e,m,d===null?e.effect.first:d.next),Vt(e,d,m),d=m;continue}for(v=[],h=[];l!==null&&l!==m;)(f??(f=new Set)).add(l),h.push(l),l=Gn(l.next);if(l===null)continue}(m.f&wt)===0&&v.push(m),d=m,l=Gn(m.next)}if(e.outrogroups!==null){for(const U of e.outrogroups)U.pending.size===0&&(ti(e,hs(U.done)),(W=e.outrogroups)==null||W.delete(U));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||f!==void 0){var M=[];if(f!==void 0)for(m of f)(m.f&je)===0&&M.push(m);for(;l!==null;)(l.f&je)===0&&l!==e.fallback&&M.push(l),l=Gn(l.next);var ee=M.length;if(ee>0){var G=(r&ho)!==0&&o===0?n:null;if(i){for(E=0;E<ee;E+=1)(T=(be=M[E].nodes)==null?void 0:be.a)==null||T.measure();for(E=0;E<ee;E+=1)(P=(K=M[E].nodes)==null?void 0:K.a)==null||P.fix()}yc(e,M,G)}}i&&xt(()=>{var U,le;if(p!==void 0)for(m of p)(le=(U=m.nodes)==null?void 0:U.a)==null||le.apply()})}function xc(e,t,n,r,s,i,o,a){var l=(o&Xa)!==0?(o&tl)===0?Dl(n,!1,!1):Ft(n):null,f=(o&Qa)!==0?Ft(s):null;return{v:l,i:f,e:Be(()=>(i(t,l??n,f??s,a),()=>{e.delete(r)}))}}function nr(e,t,n){if(e.nodes)for(var r=e.nodes.start,s=e.nodes.end,i=t&&(t.f&wt)===0?t.nodes.start:n;r!==null;){var o=Ir(r);if(i.before(r),r===s)return;r=o}}function Vt(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function re(e,t,n,r,s){var a,l;if((a=t.$$host)!=null&&a.$$shadowRoot){const f=_i("slot");x(e,f);return}var i=(l=t.$$slots)==null?void 0:l[n],o=!1;i===!0&&(i=t.children,o=!0),i===void 0||i(e,o?()=>r:r)}function Hi(e,t,n){var r=new ms(e);jn(()=>{var s=t()??null;r.ensure(s,s&&(i=>n(i,s)))},Wt)}function $c(e,t,n,r,s,i){var o=null,a=e,l=new ms(a,!1);jn(()=>{const f=t()||null;var d=ll;if(f===null){l.ensure(null,null);return}return l.ensure(f,p=>{if(f){if(o=_i(f,d),cr(o,o),r){var v=null,h=o.appendChild(zt());r(o,h),v==null||v.remove()}Q.nodes.end=o,p.before(o)}}),()=>{}},Wt),ps(()=>{})}function kc(e,t){var n=void 0,r;Ho(()=>{n!==(n=t())&&(r&&(Pe(r),r=null),n&&(r=Be(()=>{_s(()=>n(e))})))})}function sa(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=sa(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Sc(){for(var e,t,n=0,r="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=sa(e))&&(r&&(r+=" "),r+=t);return r}function Ec(e){return typeof e=="object"?Sc(e):e??""}const Bi=[...` 	
\r\f \v\uFEFF`];function Cc(e,t,n){var r=e==null?"":""+e;if(t&&(r=r?r+" "+t:t),n){for(var s of Object.keys(n))if(n[s])r=r?r+" "+s:s;else if(r.length)for(var i=s.length,o=0;(o=r.indexOf(s,o))>=0;){var a=o+i;(o===0||Bi.includes(r[o-1]))&&(a===r.length||Bi.includes(r[a]))?r=(o===0?"":r.substring(0,o))+r.substring(a+1):o=a}}return r===""?null:r}function Ki(e,t=!1){var n=t?" !important;":";",r="";for(var s of Object.keys(e)){var i=e[s];i!=null&&i!==""&&(r+=" "+s+": "+i+n)}return r}function Is(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Tc(e,t){if(t){var n="",r,s;if(Array.isArray(t)?(r=t[0],s=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var i=!1,o=0,a=!1,l=[];r&&l.push(...Object.keys(r).map(Is)),s&&l.push(...Object.keys(s).map(Is));var f=0,d=-1;const w=e.length;for(var p=0;p<w;p++){var v=e[p];if(a?v==="/"&&e[p-1]==="*"&&(a=!1):i?i===v&&(i=!1):v==="/"&&e[p+1]==="*"?a=!0:v==='"'||v==="'"?i=v:v==="("?o++:v===")"&&o--,!a&&i===!1&&o===0){if(v===":"&&d===-1)d=p;else if(v===";"||p===w-1){if(d!==-1){var h=Is(e.substring(f,d).trim());if(!l.includes(h)){v!==";"&&p++;var _=e.substring(f,p).trim();n+=" "+_+";"}}f=p+1,d=-1}}}}return r&&(n+=Ki(r)),s&&(n+=Ki(s,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function Lt(e,t,n,r,s,i){var o=e[Hs];if(o!==n||o===void 0){var a=Cc(n,r,i);a==null?e.removeAttribute("class"):t?e.className=a:e.setAttribute("class",a),e[Hs]=n}else if(i&&s!==i)for(var l in i){var f=!!i[l];(s==null||f!==!!s[l])&&e.classList.toggle(l,f)}return i}function Os(e,t={},n,r){for(var s in n){var i=n[s];t[s]!==i&&(n[s]==null?e.style.removeProperty(s):e.style.setProperty(s,i,r))}}function ia(e,t,n,r){var s=e[Bs];if(s!==t){var i=Tc(t,r);i==null?e.removeAttribute("style"):e.style.cssText=i,e[Bs]=t}else r&&(Array.isArray(r)?(Os(e,n==null?void 0:n[0],r[0]),Os(e,n==null?void 0:n[1],r[1],"important")):Os(e,n,r));return r}function oa(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Ui(e,t){var n=!("__defaultValue"in e);!n&&e.__defaultValue===t||(e.__defaultValue=t,aa(e,!n||"__value"in e))}function aa(e,t){var n=e.__defaultValue,r=e.multiple,s=r?n??[]:null;if(!(r&&!vs(s))){var i=e.selectedIndex,o=t&&r?new Set(e.selectedOptions):null;for(var a of e.options){var l=wn(a);oa(a,r?s.includes(l):zo(l,n))}if(t)if(o!==null)for(a of e.options){var f=o.has(a);a.selected!==f&&(a.selected=f)}else e.selectedIndex!==i&&(e.selectedIndex=i)}}function On(e,t,n=!1){if(e.multiple){if(t==null)return;if(!vs(t))return fl();for(var r of e.options)r.selected=t.includes(wn(r));return}for(r of e.options){var s=wn(r);if(zo(s,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function yn(e){var t=new MutationObserver(n=>{n.every(Nc)||("__defaultValue"in e&&aa(e,!1),"__value"in e&&On(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ps(()=>{t.disconnect()})}function ni(e,t,n=t){var r=new WeakSet,s=!0;fi(e,"change",i=>{var o=i?"[selected]":":checked",a;if(e.multiple)a=[].map.call(e.querySelectorAll(o),wn);else{var l=e.querySelector(o)??e.querySelector("option:not([disabled])");a=l&&wn(l)}n(a),e.__value=a,L!==null&&r.add(L)}),_s(()=>{var i=t();if(e===document.activeElement){var o=L;if(r.has(o))return}if(On(e,i,s),s&&i===void 0){var a=e.querySelector(":checked");a!==null&&(i=wn(a),n(i))}e.__value=i,s=!1})}function wn(e){return"__value"in e?e.__value:e.value}function Nc(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(n=>n.nodeName==="SELECTEDCONTENT")}return!1}const Yn=Symbol("class"),Jn=Symbol("style"),la=Symbol("is custom element"),ca=Symbol("is html"),Pc=li?"input":"INPUT",Mc=li?"option":"OPTION",ua=li?"select":"SELECT";function me(e,t,n,r){var s=fa(e);s[t]!==(s[t]=n)&&(t==="loading"&&(e[Za]=n),n==null?e.removeAttribute(t):typeof n!="string"&&da(e).has(t)?e[t]=n:e.setAttribute(t,n))}function Ac(e,t,n,r,s=!1,i=!1){var o=fa(e),a=o[la],l=!o[ca],f=t||{},d=e.nodeName===Mc,p=e.nodeName===ua;for(var v in t)!(v in n)&&v[0]+v[1]!=="$$"&&(n[v]=null);n.class?n.class=Ec(n.class):n[Yn]&&(n.class=null),n[Jn]&&(n.style??(n.style=null));var h=da(e);if(e.nodeName===Pc&&"type"in n&&("value"in n||"__value"in n)){var _=n.type;(_!==f.type||_===void 0&&e.hasAttribute("type"))&&(f.type=_,me(e,"type",_))}for(const C in n){let S=n[C];if(d&&C==="value"&&S==null){e.value=e.__value="",f[C]=S;continue}if(C==="class"){var w=e.namespaceURI==="http://www.w3.org/1999/xhtml";Lt(e,w,S,r,t==null?void 0:t[Yn],n[Yn]),f[C]=S,f[Yn]=n[Yn];continue}if(C==="style"){ia(e,S,t==null?void 0:t[Jn],n[Jn]),f[C]=S,f[Jn]=n[Jn];continue}var m=f[C];if(!(S===m&&!(S===void 0&&e.hasAttribute(C)))){f[C]=S;var E=C[0]+C[1];if(E!=="$$")if(E==="on"){const M={},ee="$$"+C;let G=C.slice(2);var I=ec(G);if(Xl(G)&&(G=G.slice(0,-7),M.capture=!0),!I&&m){if(S!=null)continue;e.removeEventListener(G,f[ee],M),f[ee]=null}if(I)H(G,e,S),jt([G]);else if(S!=null){let R=function(N){f[C].call(this,N)};f[ee]=ta(G,e,R,M)}}else if(C==="style")me(e,C,S);else if(C==="autofocus")$o(e,!!S);else if(!a&&(C==="__value"||C==="value"&&S!=null))e.value=e.__value=S;else if(C==="selected"&&d)oa(e,S);else{var A=C;l||(A=nc(A));var Y=A==="defaultValue"||A==="defaultChecked";if(p&&A==="defaultValue")continue;if(S==null&&!a&&!Y)if(o[C]=null,A==="value"||A==="checked"){let M=e;const ee=t===void 0;if(A==="value"){let G=M.defaultValue;M.removeAttribute(A),M.defaultValue=G,M.value=M.__value=ee?G:null}else{let G=M.defaultChecked;M.removeAttribute(A),M.defaultChecked=G,M.checked=ee?G:!1}}else e.removeAttribute(C);else Y||(a||typeof S!="string")&&h.has(A)?(e[A]=S,A in o&&(o[A]=ye)):typeof S!="function"&&me(e,A,S)}}}return f}function qi(e,t,n=[],r=[],s=[],i,o=!1,a=!1){ko(s,n,r,l=>{var f=void 0,d={},p=e.nodeName===ua,v=!1;if(Ho(()=>{var _=t(...l.map(c)),w=Ac(e,f,_,i,o,a);if(v&&p){var m=e;"defaultValue"in _&&Ui(m,_.defaultValue),"value"in _&&On(m,_.value)}for(let I of Object.getOwnPropertySymbols(d))_[I]||Pe(d[I]);for(let I of Object.getOwnPropertySymbols(_)){var E=_[I];I.description===cl&&(!f||E!==f[I])&&(d[I]&&Pe(d[I]),d[I]=Be(()=>kc(e,()=>E))),w[I]=E}f=w}),p){var h=e;_s(()=>{var _=f;"defaultValue"in _&&Ui(h,_.defaultValue),On(h,_.value,!0),yn(h)})}v=!0})}function fa(e){return e[Jr]??(e[Jr]={[la]:e.nodeName.includes("-"),[ca]:e.namespaceURI===_o})}var Wi=new Map;function da(e){var t=e.getAttribute("is")||e.nodeName,n=Wi.get(t);if(n)return n;Wi.set(t,n=new Set);for(var r,s=e,i=Element.prototype;i!==s;){r=lo(s);for(var o in r)r[o].set&&o!=="innerHTML"&&o!=="textContent"&&o!=="innerText"&&n.add(o);s=ii(s)}return n}function Oe(e,t,n=t){var r=new WeakSet;fi(e,"input",async s=>{var i=s?e.defaultValue:e.value;if(i=zs(e)?Rs(i):i,n(i),L!==null&&r.add(L),await Zl(),i!==(i=t())){var o=e.selectionStart,a=e.selectionEnd,l=e.value.length;if(e.value=i??"",a!==null){var f=e.value.length;o===a&&a===l&&f>l?(e.selectionStart=f,e.selectionEnd=f):(e.selectionStart=o,e.selectionEnd=Math.min(a,f))}}}),Et(t)==null&&e.value&&(n(zs(e)?Rs(e.value):e.value),L!==null&&r.add(L)),gs(()=>{var s=t();if(e===document.activeElement){var i=L;if(r.has(i))return}zs(e)&&s===Rs(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function Ic(e,t,n=t){fi(e,"change",r=>{var s=r?e.defaultChecked:e.checked;n(s)}),Et(t)==null&&n(e.checked),gs(()=>{var r=t();e.checked=!!r})}function zs(e){var t=e.type;return t==="number"||t==="range"}function Rs(e){return e===""?null:+e}function Fs(e,t){return e===t||(e==null?void 0:e[$t])===t}function bs(e=ci(),t,n,r){var s=he.r,i=Q;return _s(()=>{var o,a;return gs(()=>{o=a,a=[],Et(()=>{Fs(n(...a),e)||(t(e,...a),o&&Fs(n(...o),e)&&t(null,...o))})}),()=>{let l=i;for(;l!==s&&l.parent!==null&&l.parent.f&rs;)l=l.parent;const f=()=>{a&&Fs(n(...a),e)&&t(null,...a)},d=l.teardown;l.teardown=()=>{f(),d==null||d()}}}),e}function va(e=!1){const t=he,n=t.l.u;if(!n)return;let r=()=>Yt(t.s);if(e){let s=0,i={};const o=Mn(()=>{let a=!1;const l=t.s;for(const f in l)l[f]!==i[f]&&(i[f]=l[f],a=!0);return a&&s++,s});r=()=>c(o)}n.b.length&&Kl(()=>{Gi(t,r),js(n.b)}),un(()=>{const s=Et(()=>n.m.map(Ga));return()=>{for(const i of s)typeof i=="function"&&i()}}),n.a.length&&un(()=>{Gi(t,r),js(n.a)})}function Gi(e,t){if(e.l.s)for(const n of e.l.s)c(n);t()}function Oc(e){var t=Ft(0);return function(){return arguments.length===1?(y(t,c(t)+1),arguments[0]):(c(t),e())}}const zc={get(e,t){if(!e.exclude.includes(t))return c(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var r=Q;try{st(e.parent_effect),e.special[t]=Le({get[t](){return e.props[t]}},t,po)}finally{st(r)}}return e.special[t](n),Ri(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),Ri(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ne(e,t){return new Proxy({props:e,exclude:t,special:{},version:Ft(0),parent_effect:Q},zc)}const Rc={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(Wn(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let s=e.props[r];Wn(s)&&(s=s());const i=Ut(s,t);if(i&&i.set)return i.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(Wn(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const s=Ut(r,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===$t||t===vo)return!1;for(let n of e.props)if(Wn(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){const t=[];for(let n of e.props)if(Wn(n)&&(n=n()),!!n){for(const r in n)t.includes(r)||t.push(r);for(const r of Object.getOwnPropertySymbols(n))t.includes(r)||t.push(r)}return t}};function ie(...e){return new Proxy({props:e},Rc)}function Le(e,t,n,r){var Y;var s=!Fn||(n&rl)!==0,i=(n&sl)!==0,o=(n&il)!==0,a=r,l=!0,f=void 0,d=()=>o&&s?(f??(f=Mn(r)),c(f)):(l&&(l=!1,a=o?Et(r):r),a);let p;if(i){var v=$t in e||vo in e;p=((Y=Ut(e,t))==null?void 0:Y.set)??(v&&t in e?C=>e[t]=C:void 0)}var h,_=!1;i?[h,_]=Tl(()=>e[t]):h=e[t],h===void 0&&r!==void 0&&(h=d(),p&&(s&&yl(),p(h)));var w;if(s?w=()=>{var C=e[t];return C===void 0?d():(l=!0,C)}:w=()=>{var C=e[t];return C!==void 0&&(a=void 0),C===void 0?a:C},s&&(n&po)===0)return w;if(p){var m=e.$$legacy;return(function(C,S){return arguments.length>0?((!s||!S||m||_)&&p(S?w():C),C):w()})}var E=!1,I=((n&nl)!==0?Mn:di)(()=>(E=!1,w()));i&&c(I);var A=Q;return(function(C,S){if(arguments.length>0){const M=S?c(I):s&&i?Se(C):C;return y(I,M),E=!0,a!==void 0&&(a=M),C}return Dt&&E||(A.f&Ue)!==0?I.v:c(I)})}function zr(e){he===null&&bo(),Fn&&he.l!==null?Fc(he).m.push(e):un(()=>{const t=Et(e);if(typeof t=="function")return t})}function yi(e){he===null&&bo(),zr(()=>()=>Et(e))}function Fc(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const Dc="5";var oo;typeof window<"u"&&((oo=window.__svelte??(window.__svelte={})).v??(oo.v=new Set)).add(Dc);const ri=()=>window.__IDE_BOOTSTRAP__||{};function Lc(e){const{rootPath:t="",session:n=""}=ri();return`${t}/api/sessions/${encodeURIComponent(n)}/ide${e}`}async function Ve(e,t={}){const n=await fetch(Lc(e),t),r=await n.json().catch(()=>({}));if(!n.ok)throw new Error(r.error||"Request failed");return r}const Je=(e,t)=>`/ssh-connections/${encodeURIComponent(e)}${t}`,we={chat:async(e,t=80)=>{const{rootPath:n=""}=ri(),r=`${n}/api/sessions/${encodeURIComponent(e)}/ide/chat?limit=${t}`,s=await fetch(r),i=await s.json().catch(()=>({}));if(!s.ok)throw new Error(i.error||"Could not load chat");return i},browse:async(e="")=>{const{rootPath:t=""}=ri(),n=`${t}/api/ide/browse?path=${encodeURIComponent(e)}`,r=await fetch(n),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not browse folders");return s},listConnections:()=>Ve("/ssh-connections"),createConnection:e=>Ve("/ssh-connections",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),deleteConnection:e=>Ve(Je(e,""),{method:"DELETE"}),connect:(e,t)=>Ve(Je(e,"/connect"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t||""})}),status:e=>Ve(Je(e,"/status?reconnect=1")),listFiles:(e,t)=>Ve(Je(e,`/files?path=${encodeURIComponent(t)}`)),searchFiles:(e,t,n)=>Ve(Je(e,`/files/search?path=${encodeURIComponent(t)}&query=${encodeURIComponent(n)}`)),readFile:(e,t)=>Ve(Je(e,`/file?path=${encodeURIComponent(t)}`)),saveFile:(e,t,n)=>Ve(Je(e,"/file"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:t,content:n})}),fs:(e,t)=>Ve(Je(e,"/fs"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),git:(e,t)=>Ve(Je(e,"/git"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),focusTerminal:e=>Ve(Je(e,"/focus-terminal"),{method:"POST"}),getWorkspace:e=>Ve(Je(e,"/workspace")),saveWorkspace:(e,t)=>Ve(Je(e,"/workspace"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})};var pr,_r,gr,mr,br,yr,wr,xr,$r,kr,Sr,Er,Cr,Tr,Nr,Pr;class jc{constructor(){O(this,pr,z(Se([])));O(this,_r,z(""));O(this,gr,z("idle"));O(this,mr,z("Ready"));O(this,br,z("No file open"));O(this,yr,z("."));O(this,wr,z(Se([])));O(this,xr,z(Se({})));O(this,$r,z(Se({})));O(this,kr,z(""));O(this,Sr,z(Se([])));O(this,Er,z(""));O(this,Cr,z(""));O(this,Tr,z(""));O(this,Nr,z(Se([])));O(this,Pr,z(""));Re(this,"restoredKey","");Re(this,"persistTimer",null)}get connections(){return c(u(this,pr))}set connections(t){y(u(this,pr),t,!0)}get connectionId(){return c(u(this,_r))}set connectionId(t){y(u(this,_r),t,!0)}get connectionState(){return c(u(this,gr))}set connectionState(t){y(u(this,gr),t,!0)}get statusText(){return c(u(this,mr))}set statusText(t){y(u(this,mr),t,!0)}get detailText(){return c(u(this,br))}set detailText(t){y(u(this,br),t,!0)}get path(){return c(u(this,yr))}set path(t){y(u(this,yr),t,!0)}get entries(){return c(u(this,wr))}set entries(t){y(u(this,wr),t,!0)}get expanded(){return c(u(this,xr))}set expanded(t){y(u(this,xr),t,!0)}get treeChildren(){return c(u(this,$r))}set treeChildren(t){y(u(this,$r),t,!0)}get filter(){return c(u(this,kr))}set filter(t){y(u(this,kr),t,!0)}get tabs(){return c(u(this,Sr))}set tabs(t){y(u(this,Sr),t,!0)}get activeKey(){return c(u(this,Er))}set activeKey(t){y(u(this,Er),t,!0)}get gitOutput(){return c(u(this,Cr))}set gitOutput(t){y(u(this,Cr),t,!0)}get gitStatus(){return c(u(this,Tr))}set gitStatus(t){y(u(this,Tr),t,!0)}get gitBranches(){return c(u(this,Nr))}set gitBranches(t){y(u(this,Nr),t,!0)}get gitBranch(){return c(u(this,Pr))}set gitBranch(t){y(u(this,Pr),t,!0)}get connection(){return this.connections.find(t=>t.id===this.connectionId)||null}get activeTab(){return this.tabs.find(t=>t.key===this.activeKey)||null}get visibleEntries(){const t=this.filter.trim().toLowerCase();return t?this.entries.filter(n=>n.name.toLowerCase().includes(t)):this.entries}get dirtyCount(){return this.tabs.filter(t=>t.dirty).length}setStatus(t,n){this.statusText=t,n!==void 0&&(this.detailText=n)}async loadConnections(){try{const t=await we.listConnections();this.connections=t.connections||[],!this.connectionId&&this.connections.length&&(this.connectionId=this.connections[0].id)}catch(t){this.setStatus(t.message||"Could not load connections")}}async refreshStatus(){var t,n,r;if(this.connectionId)try{const s=await we.status(this.connectionId);s.connected?(this.connectionState="connected",this.setStatus(`Connected · ${((t=this.connection)==null?void 0:t.label)||"SSH workspace"}`,`SSH terminal: ${s.window_name||"open"}`),await this.restoreWorkspace()):(this.connectionState="reconnect",this.entries=[],this.setStatus(`Reconnect required · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,(r=this.connection)!=null&&r.has_password?"Auto-reconnect failed — select Connect to retry":"Select Connect to reopen SSH"))}catch(s){this.connectionState="error",this.setStatus(s.message||"Could not check SSH connection")}}async connect(t){var n;if(this.connectionId){this.connectionState="connecting",this.setStatus("Connecting…");try{const r=await we.connect(this.connectionId,t);this.connectionState="connected",this.setStatus(`Connected · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,`SSH terminal: ${r.window_name||"open"}`),await this.restoreWorkspace()}catch(r){this.connectionState="error",this.setStatus(r.message||"Could not connect")}}}async refreshFiles(t){if(!this.connectionId)return;const n=t||this.path||".";try{const r=await we.listFiles(this.connectionId,n);this.path=r.path||n,this.entries=r.entries||[],this.remember()}catch(r){this.setStatus(r.message||"Could not list remote files")}}async toggleDirectory(t){if(this.expanded[t]){const n={...this.expanded};delete n[t],this.expanded=n;return}if(this.expanded={...this.expanded,[t]:!0},!this.treeChildren[t])try{const n=await we.listFiles(this.connectionId,t);this.treeChildren={...this.treeChildren,[t]:n.entries||[]}}catch(n){this.setStatus(n.message||"Could not expand folder")}}async openFile(t){if(!this.connectionId)return null;const n=`${this.connectionId}|${t}`,r=this.tabs.find(s=>s.key===n);if(r)return this.activeKey=n,r;try{const s=await we.readFile(this.connectionId,t),i={key:`${this.connectionId}|${s.path}`,path:s.path,content:s.content||"",saved:s.content||"",dirty:!1};return this.tabs=[...this.tabs,i],this.activeKey=i.key,this.setStatus("Opened",i.path),this.remember(),i}catch(s){return this.setStatus(s.message||"Could not open remote file"),null}}updateContent(t,n){this.tabs=this.tabs.map(r=>r.key===t?{...r,content:n,dirty:n!==r.saved}:r),this.remember()}closeTab(t){var r;const n=this.tabs.find(s=>s.key===t);n!=null&&n.dirty&&!confirm(`Discard unsaved changes to ${n.path}?`)||(this.tabs=this.tabs.filter(s=>s.key!==t),this.activeKey===t&&(this.activeKey=((r=this.tabs.at(-1))==null?void 0:r.key)||""),this.remember())}async saveActive(){const t=this.activeTab;if(t)try{await we.saveFile(this.connectionId,t.path,t.content),this.tabs=this.tabs.map(n=>n.key===t.key?{...n,saved:n.content,dirty:!1}:n),this.setStatus(`Saved ${t.path}`,t.path),this.remember()}catch(n){this.setStatus(n.message||"Could not save file")}}async restoreWorkspace(){const t=`${this.connectionId}`;if(!t)return;let n=null;try{n=await we.getWorkspace(this.connectionId)}catch{n=null}if(await this.refreshFiles((n==null?void 0:n.last_directory)||"."),this.restoredKey===t)return;this.restoredKey=t;const r=(n==null?void 0:n.buffers)||{};for(const i of((n==null?void 0:n.tabs)||[]).slice(0,12)){const o=await this.openFile(i);o&&Object.prototype.hasOwnProperty.call(r,i)&&this.updateContent(o.key,r[i])}const s=this.tabs.find(i=>i.path===(n==null?void 0:n.active_path));s&&(this.activeKey=s.key)}remember(){this.persistTimer&&clearTimeout(this.persistTimer),this.persistTimer=setTimeout(()=>this.persist(),1500)}async persist(){var n;if(!this.connectionId)return;const t={};for(const r of this.tabs)r.dirty&&(t[r.path]=r.content);try{await we.saveWorkspace(this.connectionId,{tabs:this.tabs.map(r=>r.path).slice(0,50),active_path:((n=this.activeTab)==null?void 0:n.path)||"",last_directory:this.path||".",buffers:t})}catch{}}async runGit(t,n={}){try{const r=await we.git(this.connectionId,{action:t,path:this.path||".",...n});return this.gitOutput=r.output||r.status||"",this.gitStatus=r.status||"",this.gitBranches=r.branches||[],this.gitBranch=r.current_branch||"",r}catch(r){return this.gitOutput=r.message||"Git command failed",null}}}pr=new WeakMap,_r=new WeakMap,gr=new WeakMap,mr=new WeakMap,br=new WeakMap,yr=new WeakMap,wr=new WeakMap,xr=new WeakMap,$r=new WeakMap,kr=new WeakMap,Sr=new WeakMap,Er=new WeakMap,Cr=new WeakMap,Tr=new WeakMap,Nr=new WeakMap,Pr=new WeakMap;const g=new jc;Sl();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Vc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Hc=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Yi=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();var Bc=ra("<svg><!><!></svg>");function oe(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]),r=ne(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);ot(t,!1);let s=Le(t,"name",8,void 0),i=Le(t,"color",8,"currentColor"),o=Le(t,"size",8,24),a=Le(t,"strokeWidth",8,2),l=Le(t,"absoluteStrokeWidth",8,!1),f=Le(t,"iconNode",24,()=>[]);va();var d=Bc();qi(d,(h,_,w)=>({...Vc,...h,...r,width:o(),height:o(),stroke:i(),"stroke-width":_,class:w}),[()=>Hc(r)?void 0:{"aria-hidden":"true"},()=>(Yt(l()),Yt(a()),Yt(o()),Et(()=>l()?Number(a())*24/Number(o()):a())),()=>(Yt(Yi),Yt(s()),Yt(n),Et(()=>Yi("lucide-icon","lucide",s()?`lucide-${s()}`:"",n.class)))]);var p=k(d);it(p,1,f,bc,(h,_)=>{var w=et(()=>Ya(c(_),2));let m=()=>c(w)[0],E=()=>c(w)[1];var I=Z(),A=V(I);$c(A,m,!0,(Y,C)=>{qi(Y,()=>({...E()}))}),x(h,I)});var v=b(p);re(v,t,"default",{}),x(e,d),at()}function ha(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];oe(e,ie({name:"chevron-down"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Kc(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m9 18 6-6-6-6"}]];oe(e,ie({name:"chevron-right"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Ji(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];oe(e,ie({name:"circle-alert"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Uc(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];oe(e,ie({name:"circle-check"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function qc(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]];oe(e,ie({name:"circle-dot"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Wc(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];oe(e,ie({name:"circle"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Gc(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}],["path",{d:"m9 10-5 5 5 5"}]];oe(e,ie({name:"corner-down-left"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Yc(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]];oe(e,ie({name:"corner-left-up"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Jc(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];oe(e,ie({name:"external-link"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Zi(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m5 16-3 3 3 3"}],["path",{d:"m9 22 3-3-3-3"}]];oe(e,ie({name:"file-code-corner"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Zc(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]];oe(e,ie({name:"file-diff"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Xc(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 14V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M14 18h6"}]];oe(e,ie({name:"file-minus-corner"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Xi(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M14 19h6"}],["path",{d:"M17 16v6"}]];oe(e,ie({name:"file-plus-corner"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Qc(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]];oe(e,ie({name:"file-plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function pa(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}]];oe(e,ie({name:"file"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function eu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"}]];oe(e,ie({name:"files"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Ds(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];oe(e,ie({name:"folder-open"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function tu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];oe(e,ie({name:"folder-plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function nu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];oe(e,ie({name:"folder"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function ru(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 3v12"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M15 6a9 9 0 0 0-9 9"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]];oe(e,ie({name:"git-branch-plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Qi(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 6a9 9 0 0 0-9 9V3"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}]];oe(e,ie({name:"git-branch"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function su(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 3v6"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 15v6"}]];oe(e,ie({name:"git-commit-vertical"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function iu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 16h.01"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["path",{d:"M21.946 12.013H2.054"}],["path",{d:"M6 16h.01"}]];oe(e,ie({name:"hard-drive"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function ou(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];oe(e,ie({name:"link-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function _a(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]];oe(e,ie({name:"loader"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function eo(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}]];oe(e,ie({name:"message-square"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function au(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}]];oe(e,ie({name:"panel-bottom"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function lu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];oe(e,ie({name:"plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function ga(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];oe(e,ie({name:"refresh-cw"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function cu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];oe(e,ie({name:"search"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function uu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]];oe(e,ie({name:"send"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Ls(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];oe(e,ie({name:"server"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function fu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]];oe(e,ie({name:"square-terminal"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function du(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];oe(e,ie({name:"trash-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function cs(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];oe(e,ie({name:"x"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=Z(),a=V(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}var vu=F('<span class="w-[14px] shrink-0"></span>'),hu=ra('<svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1.5 3.5h4l1.2 1.4h7.8v7.6H1.5z" fill="#c09553"></path></svg>'),pu=F('<div role="treeitem" tabindex="0"><!> <span class="flex shrink-0 items-center"><!></span> <span class="flex-1 truncate text-vs-fg"> </span> <span class="hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Rename"><span class="text-[11px] leading-none">✎</span></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Delete"><span class="text-[11px] leading-none">🗑</span></button></span></div> <!>',1);function ma(e,t){ot(t,!0);const n=et(()=>t.dir==="."?t.entry.name:`${t.dir}/${t.entry.name}`),r=et(()=>!!g.expanded[c(n)]),s=et(()=>g.treeChildren[c(n)]||[]),i=et(()=>{var N;return((N=g.activeTab)==null?void 0:N.path)===c(n)});async function o(){t.entry.is_dir?await g.toggleDirectory(c(n)):await g.openFile(c(n))}async function a(N){if(N.stopPropagation(),!!confirm(`Delete ${c(n)}? Folders must already be empty.`))try{await we.fs(g.connectionId,{action:"delete",path:c(n)}),await g.refreshFiles()}catch(B){g.setStatus(B.message||"Could not delete")}}async function l(N){N.stopPropagation();const B=prompt("Rename to (relative path):",c(n));if(!(!B||B===c(n)))try{await we.fs(g.connectionId,{action:"rename",path:c(n),new_path:B}),await g.refreshFiles()}catch(D){g.setStatus(D.message||"Could not rename")}}var f=pu(),d=V(f);let p;var v=k(d);{var h=N=>{var B=Z(),D=V(B);{var W=T=>{ha(T,{size:14,class:"shrink-0 text-vs-muted"})},be=T=>{Kc(T,{size:14,class:"shrink-0 text-vs-muted"})};X(D,T=>{c(r)?T(W):T(be,-1)})}x(N,B)},_=N=>{var B=vu();x(N,B)};X(v,N=>{t.entry.is_dir?N(h):N(_,-1)})}var w=b(v,2),m=k(w);{var E=N=>{var B=hu();x(N,B)},I=N=>{ou(N,{size:14,class:"text-vs-muted"})},A=N=>{pa(N,{size:14,class:"text-vs-blue"})};X(m,N=>{t.entry.is_dir?N(E):t.entry.is_symlink?N(I,1):N(A,-1)})}var Y=b(w,2),C=ve(Y,!0),S=b(Y,2),M=k(S),ee=b(M,2),G=b(d,2);{var R=N=>{var B=Z(),D=V(B);it(D,17,()=>c(s),W=>W.name,(W,be)=>{{let T=et(()=>t.depth+1);ma(W,{get entry(){return c(be)},get dir(){return c(n)},get depth(){return c(T)}})}}),x(N,B)};X(G,N=>{t.entry.is_dir&&c(r)&&N(R)})}ce(()=>{p=Lt(d,1,"group flex cursor-pointer items-center gap-1 py-[2px] pr-1 text-[13px] hover:bg-vs-hover",null,p,{"bg-vs-active":c(i)}),ia(d,`padding-left: ${8+t.depth*12}px`),me(d,"aria-expanded",t.entry.is_dir?c(r):void 0),me(d,"aria-selected",c(i)),me(d,"title",c(n)),ue(C,t.entry.name),me(M,"aria-label",`Rename ${t.entry.name??""}`),me(ee,"aria-label",`Delete ${t.entry.name??""}`)}),H("click",d,o),H("keydown",d,N=>{(N.key==="Enter"||N.key===" ")&&(N.preventDefault(),o())}),H("click",M,l),H("click",ee,a),x(e,f),at()}jt(["click","keydown"]);var _u=F('<form class="px-2 pb-1"><input class="w-full rounded-sm border border-vs-accent bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none"/></form>'),gu=F('<p class="px-4 py-2 text-xs text-vs-muted">No folder opened.</p>'),mu=F('<p class="px-4 py-2 text-xs text-vs-muted">No files here</p>'),bu=F('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-vs-fg uppercase"><span class="flex-1 truncate">Explorer</span></div> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold text-vs-fg uppercase"><!> <span class="flex-1 truncate"> </span> <span class="flex opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-1 hover:bg-vs-hover" title="New file" aria-label="New file"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="New folder" aria-label="New folder"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="Refresh" aria-label="Refresh"><!></button></span></div> <!> <input class="mx-2 mb-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none focus:border-vs-accent" placeholder="Filter files…"/> <div class="min-h-0 flex-1 overflow-y-auto pb-2"><!></div></div>');function yu(e,t){ot(t,!0);let n=z(""),r=z("");const s=(R,N)=>R==="."?N:`${R}/${N}`;async function i(R){R.preventDefault();const N=c(r).trim();if(N)try{await we.fs(g.connectionId,{action:c(n)==="dir"?"create_dir":"create_file",path:s(g.path,N)}),y(n,""),y(r,""),await g.refreshFiles()}catch(B){g.setStatus(B.message||"Could not create")}}const o=et(()=>{var R,N;return(((R=g.connection)==null?void 0:R.workspace_root)||"").split("/").filter(Boolean).pop()||((N=g.connection)==null?void 0:N.label)||"WORKSPACE"});var a=bu(),l=b(k(a),2),f=k(l);ha(f,{size:14,class:"shrink-0 text-vs-muted"});var d=b(f,2),p=ve(d,!0),v=b(d,2),h=k(v),_=k(h);Qc(_,{size:14});var w=b(h,2),m=k(w);tu(m,{size:14});var E=b(w,2),I=k(E);ga(I,{size:13});var A=b(l,2);{var Y=R=>{var N=_u(),B=k(N);$o(B,!0),ce(()=>me(B,"placeholder",c(n)==="dir"?"New folder name":"New file name")),lr("submit",N,i),H("keydown",B,D=>{D.key==="Escape"&&y(n,"")}),lr("blur",B,()=>{c(r).trim()||y(n,"")}),Oe(B,()=>c(r),D=>y(r,D)),x(R,N)};X(A,R=>{c(n)&&R(Y)})}var C=b(A,2),S=b(C,2),M=k(S);{var ee=R=>{var N=gu();x(R,N)},G=R=>{var N=Z(),B=V(N);it(B,17,()=>g.visibleEntries,D=>D.name,(D,W)=>{ma(D,{get entry(){return c(W)},get dir(){return g.path},depth:0})},D=>{var W=mu();x(D,W)}),x(R,N)};X(M,R=>{g.connectionId?R(G,-1):R(ee)})}ce(()=>{var R;me(d,"title",(R=g.connection)==null?void 0:R.workspace_root),ue(p,c(o))}),H("click",h,()=>{y(n,"file"),y(r,"")}),H("click",w,()=>{y(n,"dir"),y(r,"")}),H("click",E,()=>g.refreshFiles()),Oe(C,()=>g.filter,R=>g.filter=R),x(e,a),at()}jt(["click","keydown"]);var wu=F('<div class="branch svelte-1skdisl">On <strong> </strong></div>'),xu=F('<li class="svelte-1skdisl"><label class="svelte-1skdisl"><input type="checkbox"/> <span> </span> <span class="file svelte-1skdisl"> </span></label></li>'),$u=F('<ul class="changes svelte-1skdisl"></ul> <div class="row svelte-1skdisl"><button class="svelte-1skdisl"><!> </button> <button class="svelte-1skdisl"><!> Unstage</button></div>',1),ku=F("<option> </option>"),Su=F('<select class="svelte-1skdisl"></select>'),Eu=F('<div class="git svelte-1skdisl"><div class="row svelte-1skdisl"><button class="svelte-1skdisl"><!> Status</button> <button class="svelte-1skdisl"><!> Diff</button> <button class="svelte-1skdisl"><!> Stage all</button></div> <!> <!> <!> <div class="row svelte-1skdisl"><input placeholder="New branch…" class="svelte-1skdisl"/> <button class="svelte-1skdisl"><!> Create</button></div> <div class="row svelte-1skdisl"><input placeholder="Commit message…" class="svelte-1skdisl"/> <button class="svelte-1skdisl"><!> Commit</button></div> <pre class="output svelte-1skdisl"> </pre></div>');function Cu(e,t){ot(t,!0);let n=z(""),r=z(""),s=z(Se({}));const i=et(()=>(g.gitStatus||"").split(`
`).filter(P=>P&&!P.startsWith("##")).map(P=>({code:P.slice(0,2).trim()||"??",path:P.slice(3).trim()})).filter(P=>P.path)),o=et(()=>c(i).filter(P=>c(s)[P.path]).map(P=>P.path));async function a(P){c(o).length&&(await g.runGit(P,{files:c(o)}),y(s,{},!0))}async function l(){if(!c(n).trim())return;await g.runGit("commit",{message:c(n).trim()})&&y(n,"")}async function f(){if(!c(r).trim())return;await g.runGit("create_branch",{branch:c(r).trim()})&&y(r,"")}var d=Eu(),p=k(d),v=k(p),h=k(v);ga(h,{size:13});var _=b(v,2),w=k(_);Zc(w,{size:13});var m=b(_,2),E=k(m);Xi(E,{size:13});var I=b(p,2);{var A=P=>{var U=wu(),le=b(k(U)),Me=ve(le,!0);ce(()=>ue(Me,g.gitBranch)),x(P,U)};X(I,P=>{g.gitBranch&&P(A)})}var Y=b(I,2);{var C=P=>{var U=$u(),le=V(U);it(le,21,()=>c(i),Hn=>Hn.path,(Hn,Nt)=>{var Bn=xu(),Rr=k(Bn),Fr=k(Rr),fn=b(Fr,2);let Dr;var Lr=ve(fn,!0),jr=b(fn,2),ws=ve(jr,!0);ce(()=>{Dr=Lt(fn,1,"code svelte-1skdisl",null,Dr,{staged:c(Nt).code[0]!=="?"&&c(Nt).code[0]!==" "}),ue(Lr,c(Nt).code),me(jr,"title",c(Nt).path),ue(ws,c(Nt).path)}),Ic(Fr,()=>c(s)[c(Nt).path],Vr=>c(s)[c(Nt).path]=Vr),x(Hn,Bn)});var Me=b(le,2),Ct=k(Me),pt=k(Ct);Xi(pt,{size:13});var Vn=b(pt),Tt=b(Ct,2),ys=k(Tt);Xc(ys,{size:13}),ce(()=>{Ct.disabled=!c(o).length,ue(Vn,` Stage (${c(o).length??""})`),Tt.disabled=!c(o).length}),H("click",Ct,()=>a("stage")),H("click",Tt,()=>a("unstage")),x(P,U)};X(Y,P=>{c(i).length&&P(C)})}var S=b(Y,2);{var M=P=>{var U=Su();it(U,20,()=>g.gitBranches,Me=>Me,(Me,Ct)=>{var pt=ku(),Vn=ve(pt,!0),Tt={};ce(()=>{ue(Vn,Ct),Tt!==(Tt=Ct)&&(pt.value=(pt.__value=Tt)??"")}),x(Me,pt)});var le;yn(U),ce(()=>{le!==(le=g.gitBranch)&&(U.value=(U.__value=le)??"",On(U,le))}),H("change",U,Me=>g.runGit("switch",{branch:Me.currentTarget.value})),x(P,U)};X(S,P=>{g.gitBranches.length&&P(M)})}var ee=b(S,2),G=k(ee),R=b(G,2),N=k(R);ru(N,{size:13});var B=b(ee,2),D=k(B),W=b(D,2),be=k(W);su(be,{size:13});var T=b(B,2),K=ve(T,!0);ce(()=>ue(K,g.gitOutput||"No git output yet.")),H("click",v,()=>g.runGit("status")),H("click",_,()=>g.runGit("diff")),H("click",m,()=>g.runGit("stage",{files:["."]})),Oe(G,()=>c(r),P=>y(r,P)),H("click",R,f),Oe(D,()=>c(n),P=>y(n,P)),H("click",W,l),x(e,d),at()}jt(["click","change"]);const Tu="modulepreload",Nu=function(e,t){return new URL(e,t).href},to={},ts=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(d){return Promise.all(d.map(p=>Promise.resolve(p).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};const a=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),f=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=o(n.map(d=>{if(d=Nu(d,r),d in to)return;to[d]=!0;const p=d.endsWith(".css"),v=p?'[rel="stylesheet"]':"";if(!!r)for(let w=a.length-1;w>=0;w--){const m=a[w];if(m.href===d&&(!p||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${v}`))return;const _=document.createElement("link");if(_.rel=p?"stylesheet":Tu,p||(_.as="script"),_.crossOrigin="",_.href=d,f&&_.setAttribute("nonce",f),document.head.appendChild(_),p)return new Promise((w,m)=>{_.addEventListener("load",w),_.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})},rr={base:"vs-dark",inherit:!0,rules:[{token:"",foreground:"f8f8f2",background:"272822"},{token:"comment",foreground:"75715e",fontStyle:"italic"},{token:"string",foreground:"e6db74"},{token:"constant",foreground:"ae81ff"},{token:"number",foreground:"ae81ff"},{token:"keyword",foreground:"f92672"},{token:"operator",foreground:"f92672"},{token:"delimiter",foreground:"f8f8f2"},{token:"type",foreground:"66d9ef",fontStyle:"italic"},{token:"function",foreground:"a6e22e"},{token:"variable",foreground:"f8f8f2"},{token:"variable.parameter",foreground:"fd971f",fontStyle:"italic"},{token:"tag",foreground:"f92672"},{token:"attribute.name",foreground:"a6e22e"},{token:"attribute.value",foreground:"e6db74"},{token:"regexp",foreground:"e6db74"}],colors:{"editor.background":"#272822","editor.foreground":"#f8f8f2","editor.lineHighlightBackground":"#3e3d32","editor.selectionBackground":"#49483e","editorCursor.foreground":"#f8f8f0","editorWhitespace.foreground":"#3b3a32","editorLineNumber.foreground":"#90908a","editorLineNumber.activeForeground":"#f8f8f2","editorIndentGuide.background":"#3b3a32","editorGutter.background":"#272822"}},Pu={py:"python",js:"javascript",mjs:"javascript",cjs:"javascript",ts:"typescript",tsx:"typescript",jsx:"javascript",json:"json",md:"markdown",html:"html",htm:"html",css:"css",scss:"scss",less:"less",sh:"shell",bash:"shell",zsh:"shell",yml:"yaml",yaml:"yaml",toml:"ini",ini:"ini",cfg:"ini",sql:"sql",go:"go",rs:"rust",rb:"ruby",php:"php",java:"java",c:"c",h:"c",cpp:"cpp",hpp:"cpp",cs:"csharp",svelte:"html",vue:"html",xml:"xml",dockerfile:"dockerfile"};function Mu(e){var n;const t=(e||"").split("/").pop()||"";return t.toLowerCase()==="dockerfile"?"dockerfile":t.toLowerCase()==="makefile"?"shell":Pu[(n=t.split(".").pop())==null?void 0:n.toLowerCase()]||"plaintext"}var Au=F('<div class="editor svelte-1h8xysy"></div>');function Iu(e,t){ot(t,!0);let n,r=null,s=null,i="",o=!1;zr(async()=>{s=await ts(()=>import("./ide-monaco.js").then(l=>l.a),__vite__mapDeps([0,1]),import.meta.url),s.editor.defineTheme("monokai",rr),r=s.editor.create(n,{value:"",theme:"monokai",automaticLayout:!0,fontSize:13,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",minimap:{enabled:!0},scrollBeyondLastLine:!1,renderWhitespace:"selection",tabSize:2}),r.onDidChangeModelContent(()=>{o||!i||g.updateContent(i,r.getValue())}),r.addCommand(s.KeyMod.CtrlCmd|s.KeyCode.KeyS,()=>g.saveActive())}),yi(()=>r==null?void 0:r.dispose()),un(()=>{const l=g.activeTab;if(!(!r||!s)){if(!l){o=!0,r.setValue(""),i="",o=!1;return}if(l.key!==i){o=!0;const f=s.editor.createModel(l.content,Mu(l.path)),d=r.getModel();r.setModel(f),d==null||d.dispose(),i=l.key,o=!1}else r.getValue()!==l.content&&(o=!0,r.setValue(l.content),o=!1)}});var a=Au();bs(a,l=>n=l,()=>n),x(e,a),at()}var Ht=Oc(()=>g),Ou=F('<span class="h-2 w-2 rounded-full bg-vs-fg group-hover:hidden"></span> <!>',1),zu=F('<div><button class="flex items-center gap-1.5 py-2 pr-1 pl-3" role="tab"><!> <span class="whitespace-nowrap"> </span></button> <button class="mr-1.5 flex h-5 w-5 items-center justify-center rounded-sm hover:bg-vs-line"><!></button></div>'),Ru=F('<div class="px-3 py-2 text-xs text-vs-muted">Open a file from the Explorer</div>'),Fu=F('<div class="flex min-h-[35px] items-stretch overflow-x-auto bg-vs-tabinactive" role="tablist"></div>');function Du(e,t){ot(t,!1);const n=s=>s.split("/").pop();va();var r=Fu();it(r,5,()=>Ht().tabs,s=>s.key,(s,i)=>{var o=zu();let a;var l=k(o),f=k(l);pa(f,{size:14,class:"shrink-0 text-vs-blue"});var d=b(f,2),p=ve(d,!0),v=b(l,2),h=k(v);{var _=m=>{var E=Ou(),I=b(V(E),2);cs(I,{size:14,class:"hidden group-hover:block"}),x(m,E)},w=m=>{cs(m,{size:14,class:"opacity-0 group-hover:opacity-100"})};X(h,m=>{c(i).dirty?m(_):m(w,-1)})}ce((m,E)=>{a=Lt(o,1,"group flex items-center border-r border-vs-bg text-[13px]",null,a,{"bg-vs-tabactive":c(i).key===Ht().activeKey,"text-vs-bright":c(i).key===Ht().activeKey,"text-vs-muted":c(i).key!==Ht().activeKey}),me(l,"aria-selected",c(i).key===Ht().activeKey),me(l,"title",c(i).path),ue(p,m),me(v,"title",c(i).dirty?"Unsaved changes — close":"Close"),me(v,"aria-label",`Close ${E??""}`)},[()=>n(c(i).path),()=>n(c(i).path)]),H("click",l,()=>Ht(Ht().activeKey=c(i).key)),H("click",v,()=>Ht().closeTab(c(i).key)),x(s,o)},s=>{var i=Ru();x(s,i)}),x(e,r),at()}jt(["click"]);var Lu=F("<option> </option>"),ju=F('<p class="error svelte-1roe1v9"> </p>'),Vu=F("<div> </div>"),Hu=F(`<p class="empty svelte-1roe1v9">Ask about the active remote file. The prompt is delivered to the selected
          agent session — pick a Codex session or a Claude session to choose which
          assistant answers, and replies appear here.</p>`),Bu=F('<div class="chat svelte-1roe1v9"><div class="head svelte-1roe1v9"><span class="title svelte-1roe1v9">AI chat</span> <select title="Agent session to send to" class="svelte-1roe1v9"></select></div> <div class="messages svelte-1roe1v9"><!> <!></div> <div class="compose svelte-1roe1v9"><textarea placeholder="Ask about the active remote file… (⌘/Ctrl+Enter to send)" class="svelte-1roe1v9"></textarea> <button class="svelte-1roe1v9"><!> </button></div></div>');function Ku(e,t){ot(t,!0);let n=Le(t,"sessions",19,()=>[]),r=Le(t,"session",3,""),s=Le(t,"rootPath",3,""),i=z(""),o=z(Se(r()||n()[0]||"")),a=z(!1),l=z(Se([])),f=z(""),d=z(null),p=null;async function v(){if(c(o))try{const K=(await we.chat(c(o))).messages||[],P=K.length!==c(l).length;y(l,K,!0),y(f,""),P&&queueMicrotask(h)}catch(T){y(f,T.message||"Could not load chat",!0)}}function h(){c(d)&&(c(d).scrollTop=c(d).scrollHeight)}un(()=>{const T=c(o);y(l,[],!0),p&&clearInterval(p),T&&(v(),p=setInterval(v,3e3))}),yi(()=>{p&&clearInterval(p)});function _(){const T=g.connection||{},K=g.activeTab,P=K?K.path:g.path||".",U=K?`
Active file contents (first 12,000 characters):
${K.content.slice(0,12e3)}`:"";return`[Remote SSH IDE context]
SSH target: ${T.username||"?"}@${T.host||"?"}
Remote path: ${P}${U}

${c(i).trim()}`}async function w(){const T=c(i).trim();if(!T||!c(o)||c(a))return;const K=_();y(a,!0);try{const P=await fetch(`${s()}/api/sessions/${encodeURIComponent(c(o))}/send`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:K})}),U=await P.json().catch(()=>({}));if(!P.ok)throw new Error(U.error||"Could not send");y(i,""),y(l,[...c(l),{role:"user",text:T,ts:Date.now()/1e3,_local:!0}],!0),queueMicrotask(h),setTimeout(v,1200)}catch(P){g.setStatus(P.message||"Could not send prompt")}finally{y(a,!1)}}function m(T){T.key==="Enter"&&(T.metaKey||T.ctrlKey)&&(T.preventDefault(),w())}function E(T){const K=T.full||T.text||"",P=`

`;if(K.startsWith("[Remote SSH IDE context]")){const U=K.lastIndexOf(P);if(U!==-1)return K.slice(U+P.length)}return K}var I=Bu(),A=k(I),Y=b(k(A),2);it(Y,20,n,T=>T,(T,K)=>{var P=Lu(),U=ve(P,!0),le={};ce(()=>{ue(U,K),le!==(le=K)&&(P.value=(P.__value=le)??"")}),x(T,P)}),yn(Y);var C=b(A,2),S=k(C);{var M=T=>{var K=ju(),P=ve(K,!0);ce(()=>ue(P,c(f))),x(T,K)};X(S,T=>{c(f)&&T(M)})}var ee=b(S,2);it(ee,19,()=>c(l),(T,K)=>T.ts+":"+K,(T,K)=>{var P=Vu(),U=ve(P,!0);ce(le=>{Lt(P,1,`msg ${c(K).role==="assistant"?"assistant":"user"}`,"svelte-1roe1v9"),ue(U,le)},[()=>E(c(K))]),x(T,P)},T=>{var K=Z(),P=V(K);{var U=le=>{var Me=Hu();x(le,Me)};X(P,le=>{c(f)||le(U)})}x(T,K)}),bs(C,T=>y(d,T),()=>c(d));var G=b(C,2),R=k(G),N=b(R,2),B=k(N);{var D=T=>{_a(T,{size:13})},W=T=>{uu(T,{size:13})};X(B,T=>{c(a)?T(D):T(W,-1)})}var be=b(B);ce(T=>{N.disabled=T,ue(be,` ${c(a)?"Sending…":"Send"}`)},[()=>c(a)||!c(i).trim()]),ni(Y,()=>c(o),T=>y(o,T)),H("keydown",R,m),Oe(R,()=>c(i),T=>y(i,T)),H("click",N,w),x(e,I),at()}jt(["keydown","click"]);var Uu=F('<span class="hint svelte-e2eyom">searching…</span>'),qu=F('<li><button><span class="name svelte-e2eyom"> </span> <span class="path svelte-e2eyom"> </span> <!></button></li>'),Wu=F('<ul class="results svelte-e2eyom"></ul>'),Gu=F('<p class="empty svelte-e2eyom"> </p>'),Yu=F('<div class="backdrop svelte-e2eyom" role="button" tabindex="-1"></div> <div class="dialog svelte-e2eyom" role="dialog" aria-label="Quick open"><div class="field svelte-e2eyom"><!> <input placeholder="Search files by name…" aria-label="Search files by name" class="svelte-e2eyom"/> <!></div> <!></div>',1);function Ju(e,t){ot(t,!0);let n=z(""),r=z(Se([])),s=z(0),i=z(!1),o=z(null),a=null;un(()=>{c(o)&&c(o).focus()}),un(()=>{const S=c(n).trim();if(a&&clearTimeout(a),!S){y(r,[],!0);return}a=setTimeout(async()=>{y(i,!0);try{const M=await we.searchFiles(g.connectionId,g.path||".",S);y(r,M.matches||[],!0),y(s,0)}catch{y(r,[],!0)}finally{y(i,!1)}},180)});async function l(S){var ee;if(!S)return;const M=g.path&&g.path!=="."?`${g.path}/`:"";await g.openFile(`${M}${S.path}`),(ee=t.onclose)==null||ee.call(t)}function f(S){var M;S.key==="Escape"?(S.preventDefault(),(M=t.onclose)==null||M.call(t)):S.key==="ArrowDown"?(S.preventDefault(),y(s,Math.min(c(s)+1,c(r).length-1),!0)):S.key==="ArrowUp"?(S.preventDefault(),y(s,Math.max(c(s)-1,0),!0)):S.key==="Enter"&&(S.preventDefault(),l(c(r)[c(s)]))}var d=Yu(),p=V(d),v=b(p,2),h=k(v),_=k(h);cu(_,{size:14});var w=b(_,2);bs(w,S=>y(o,S),()=>c(o));var m=b(w,2);{var E=S=>{var M=Uu();x(S,M)};X(m,S=>{c(i)&&S(E)})}var I=b(h,2);{var A=S=>{var M=Wu();it(M,23,()=>c(r),ee=>ee.path,(ee,G,R)=>{var N=qu(),B=k(N);let D;var W=k(B),be=ve(W,!0),T=b(W,2),K=ve(T,!0),P=b(T,2);{var U=le=>{Gc(le,{size:12})};X(P,le=>{c(R)===c(s)&&le(U)})}ce(()=>{D=Lt(B,1,"svelte-e2eyom",null,D,{active:c(R)===c(s)}),ue(be,c(G).name),ue(K,c(G).path)}),H("click",B,()=>l(c(G))),x(ee,N)}),x(S,M)},Y=S=>{var M=Gu(),ee=ve(M);ce(G=>ue(ee,`No files match “${G??""}”.`),[()=>c(n).trim()]),x(S,M)},C=et(()=>c(n).trim()&&!c(i));X(I,S=>{c(r).length?S(A):c(C)&&S(Y,1)})}H("click",p,()=>{var S;return(S=t.onclose)==null?void 0:S.call(t)}),H("keydown",p,S=>{var M;return S.key==="Escape"&&((M=t.onclose)==null?void 0:M.call(t))}),H("keydown",w,f),Oe(w,()=>c(n),S=>y(n,S)),x(e,d),at()}jt(["click","keydown"]);var Zu=F('<div class="terminal-pane svelte-maclc7"><div class="bar svelte-maclc7"><span class="label svelte-maclc7">SSH terminal</span> <span> </span></div> <div class="screen svelte-maclc7"></div></div>');function Xu(e,t){ot(t,!0);let n=Le(t,"rootPath",3,""),r=Le(t,"session",3,""),s,i=null,o=null,a=null,l=z("connecting"),f=null;const d={background:rr.colors["editor.background"],foreground:rr.colors["editor.foreground"],cursor:rr.colors["editorCursor.foreground"],selectionBackground:rr.colors["editor.selectionBackground"],black:"#272822",red:"#f92672",green:"#a6e22e",yellow:"#e6db74",blue:"#66d9ef",magenta:"#ae81ff",cyan:"#a1efe4",white:"#f8f8f2",brightBlack:"#75715e",brightRed:"#f92672",brightGreen:"#a6e22e",brightYellow:"#e6db74",brightBlue:"#66d9ef",brightMagenta:"#ae81ff",brightCyan:"#a1efe4",brightWhite:"#f9f8f5"};function p(){if(!(!o||!i||(a==null?void 0:a.readyState)!==WebSocket.OPEN))try{o.fit(),a.send(JSON.stringify({type:"resize",cols:i.cols,rows:i.rows}))}catch{}}zr(async()=>{const[{Terminal:E},{FitAddon:I}]=await Promise.all([ts(()=>import("./ide-xterm.js"),[],import.meta.url),ts(()=>import("./ide-addon-fit.js"),[],import.meta.url)]);await ts(()=>Promise.resolve({}),__vite__mapDeps([2]),import.meta.url),i=new E({theme:d,fontSize:12,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",cursorBlink:!0,scrollback:5e3}),o=new I,i.loadAddon(o),i.open(s),o.fit();const Y=`${location.protocol==="https:"?"wss":"ws"}://${location.host}${n()}/ws/sessions/${encodeURIComponent(r())}/ide/terminal/${encodeURIComponent(g.connectionId)}`;a=new WebSocket(Y),a.binaryType="arraybuffer",a.onopen=()=>{y(l,"connected"),p()},a.onmessage=C=>{i.write(typeof C.data=="string"?C.data:new Uint8Array(C.data))},a.onclose=()=>{y(l,"closed"),i==null||i.write(`\r
\x1B[90m— terminal detached —\x1B[0m\r
`)},a.onerror=()=>{y(l,"error")},i.onData(C=>{(a==null?void 0:a.readyState)===WebSocket.OPEN&&a.send(new TextEncoder().encode(C))}),f=new ResizeObserver(()=>p()),f.observe(s)}),yi(()=>{f==null||f.disconnect(),a==null||a.close(),i==null||i.dispose()});var v=Zu(),h=k(v),_=b(k(h),2),w=ve(_,!0),m=b(h,2);bs(m,E=>s=E,()=>s),ce(()=>{Lt(_,1,`status ${c(l)??""}`,"svelte-maclc7"),ue(w,c(l))}),x(e,v),at()}var Qu=F('<div class="border-b border-vs-line bg-vs-red/10 px-4 py-2 text-xs text-vs-red"> </div>'),ef=F('<div class="flex items-center gap-2 px-4 py-3 text-xs text-vs-muted"><!> Loading…</div>'),tf=F('<button class="flex w-full items-center gap-2 px-4 py-1 text-left text-[13px] text-vs-fg hover:bg-vs-hover"><!> <span class="truncate"> </span></button>'),nf=F('<div class="px-4 py-3 text-xs text-vs-muted">No sub-folders here. You can still open this folder.</div>'),rf=F('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="flex h-[70vh] w-[min(640px,92vw)] flex-col overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright">Open Folder</div> <form class="flex gap-2 border-b border-vs-line px-3 py-2"><button type="button" class="flex items-center gap-1 rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover disabled:opacity-40" title="Up one folder"><!> Up</button> <input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-xs text-vs-fg outline-none focus:border-vs-accent" spellcheck="false" aria-label="Folder path"/> <button type="submit" class="rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover">Go</button></form> <!> <div class="min-h-0 flex-1 overflow-y-auto py-1"><!></div> <div class="flex items-center gap-2 border-t border-vs-line px-4 py-3"><span class="flex min-w-0 flex-1 items-center gap-2 text-xs text-vs-muted"><!> <span class="truncate font-mono"> </span></span> <button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40">Open Folder</button></div></div></div>');function sf(e,t){ot(t,!0);let n=z(""),r=z(""),s=z(Se([])),i=z(""),o=z(!0),a=z("");async function l(D){y(o,!0),y(i,"");try{const W=await we.browse(D);y(n,W.path,!0),y(r,W.parent,!0),y(s,W.entries||[],!0),y(a,W.path,!0)}catch(W){y(i,W.message||"Could not open that folder",!0)}finally{y(o,!1)}}zr(()=>l(""));function f(D){D.preventDefault(),c(a).trim()&&l(c(a).trim())}var d=rf(),p=k(d),v=b(k(p),2),h=k(v),_=k(h);Yc(_,{size:14});var w=b(h,2),m=b(v,2);{var E=D=>{var W=Qu(),be=ve(W,!0);ce(()=>ue(be,c(i))),x(D,W)};X(m,D=>{c(i)&&D(E)})}var I=b(m,2),A=k(I);{var Y=D=>{var W=ef(),be=k(W);_a(be,{size:13,class:"animate-spin"}),x(D,W)},C=D=>{var W=Z(),be=V(W);it(be,17,()=>c(s),T=>T.path,(T,K)=>{var P=tf(),U=k(P);nu(U,{size:14,class:"shrink-0 text-vs-blue"});var le=b(U,2),Me=ve(le,!0);ce(()=>ue(Me,c(K).name)),H("dblclick",P,()=>l(c(K).path)),H("click",P,()=>l(c(K).path)),x(T,P)},T=>{var K=nf();x(T,K)}),x(D,W)};X(A,D=>{c(o)?D(Y):D(C,-1)})}var S=b(I,2),M=k(S),ee=k(M);iu(ee,{size:13,class:"shrink-0"});var G=b(ee,2),R=ve(G,!0),N=b(M,2),B=b(N,2);ce(()=>{h.disabled=!c(r),me(G,"title",c(n)),ue(R,c(n)),B.disabled=!c(n)||c(o)}),H("click",d,D=>D.target===D.currentTarget&&t.onclose()),H("keydown",d,D=>D.key==="Escape"&&t.onclose()),lr("submit",v,f),H("click",h,()=>c(r)&&l(c(r))),Oe(w,()=>c(a),D=>y(a,D)),H("click",N,function(...D){var W;(W=t.onclose)==null||W.apply(this,D)}),H("click",B,()=>t.onopen(c(n))),x(e,d),at()}jt(["click","keydown","dblclick"]);var of=F('<span class="absolute top-0 bottom-0 left-0 w-0.5 bg-vs-bright"></span>'),af=F("<button><!> <!></button>"),lf=F("<option> </option>"),cf=F('<button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover hover:text-vs-red" title="Remove workspace" aria-label="Remove workspace"><!></button>'),uf=F('<input class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" type="password" placeholder="Password (optional)" autocomplete="new-password"/>'),ff=F('<!> <button class="w-full rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"> </button>',1),df=F('<p class="mt-1 font-mono text-[11px] break-all text-vs-muted"> </p>'),vf=F('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="~/.ssh/id_ed25519"/> <textarea class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-[11px] outline-none focus:border-vs-accent" rows="4" placeholder="…or paste a private key (-----BEGIN OPENSSH PRIVATE KEY-----)" spellcheck="false"></textarea>',1),hf=F('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" type="password" placeholder="Password" autocomplete="new-password"/>'),pf=F('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Host" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="User" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Port" type="number" min="1" max="65535"/> <select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>SSH agent</option><option>Existing key</option><option>Password (saved, encrypted)</option></select> <!> <!>',1),_f=F('<form class="mt-2 flex flex-col gap-1.5 border-t border-vs-line px-3 pt-2"><select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>This server (local folder)</option><option>Remote host over SSH</option></select> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Label"/> <!> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"/> <div class="flex gap-1 pb-2"><button class="flex-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110" type="submit">Create</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" type="button">Cancel</button></div></form>'),gf=F('<div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Workspaces</div> <div class="flex flex-col gap-2 px-3 pt-1"><select class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" aria-label="Workspace"><option>— select workspace —</option><!></select> <div class="flex gap-1"><button class="flex flex-1 items-center justify-center gap-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"><!> Open Folder</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Add a workspace or SSH connection" aria-label="Add workspace"><!></button> <!></div> <!> <!></div> <!>',1),mf=F('<aside class="flex w-60 shrink-0 flex-col overflow-hidden border-r border-vs-border bg-vs-panel"><!></aside>'),bf=F('<div class="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center"><!> <div><h1 class="text-2xl font-light text-vs-fg">Multibuilder IDE</h1> <p class="mt-1 text-sm text-vs-muted">Edit files on this server or on a remote host over SSH.</p></div> <div class="flex flex-col gap-2 text-sm"><button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Open Folder… <kbd class="ml-2 rounded-sm border border-vs-line px-1.5 py-0.5 text-[10px] text-vs-muted">Ctrl+Shift+O</kbd></button> <button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Connect to a host over SSH…</button></div></div>'),yf=F('<div class="flex h-[35%] min-h-[140px] flex-col border-t border-vs-line bg-vs-bg"><div class="flex items-center gap-2 border-b border-vs-border px-3 py-1 text-[11px] tracking-wide uppercase"><!> Terminal <button class="ml-auto rounded-sm p-0.5 hover:bg-vs-hover" title="Close panel" aria-label="Close terminal panel"><!></button></div> <div class="min-h-0 flex-1"><!></div></div>'),wf=F('<!> <div class="min-h-0 flex-1"><!></div> <!>',1),xf=F('<aside class="flex w-80 shrink-0 flex-col overflow-hidden border-l border-vs-border bg-vs-panel"><div class="flex items-center gap-2 border-b border-vs-border px-3 py-1.5"><!> <span class="flex-1 text-[11px] font-semibold tracking-wide uppercase">Chat</span> <button class="rounded-sm p-0.5 hover:bg-vs-hover" title="Hide chat" aria-label="Hide chat"><!></button></div> <div class="min-h-0 flex-1"><!></div></aside>'),no=F('<span class="flex items-center gap-1"><!> </span>'),$f=F("<span> </span>"),kf=F('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle terminal (Ctrl+`)"><!> Terminal</button> <button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Focus the tmux window on the host"><!></button>',1),Sf=F('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle chat panel"><!> Chat</button>'),Ef=F('<div class="flex h-full flex-col overflow-hidden bg-vs-bg font-sans text-vs-fg"><header class="flex items-center gap-2 border-b border-vs-border bg-vs-titlebar px-3 py-1 text-xs"><!> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover" title="Open a folder on this server (Ctrl+Shift+O)">Open Folder…</button> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40" title="Open a file (Ctrl+P)">Open File…</button> <span class="mx-auto truncate text-vs-muted"> </span> <span><!> </span></header> <div class="flex min-h-0 flex-1"><nav class="flex w-12 shrink-0 flex-col items-center bg-vs-activity py-1"></nav> <!> <section class="flex min-h-0 min-w-0 flex-1 flex-col"><!></section> <!></div> <footer class="flex shrink-0 items-center gap-3 bg-vs-status px-3 py-0.5 text-[12px] text-white"><!> <!> <span class="truncate"> </span> <span class="ml-auto flex items-center gap-3"><!> <span class="max-w-[40vw] truncate opacity-80"> </span> <!> <!></span></footer> <!> <!></div>');function Cf(e,t){ot(t,!0);let n=Le(t,"sessions",19,()=>[]),r=Le(t,"session",3,""),s=Le(t,"rootPath",3,""),i=z("files"),o=z(!0),a=z(!0),l=z(!1),f=z(!1),d=z(!1),p=z(!1),v=z(""),h=z(Se({kind:"local",label:"",host:"",username:"",port:22,auth_mode:"agent",identity_file:"",password:"",private_key:"",workspace_root:"",max_file_bytes:1e6}));const _={idle:{icon:Wc,label:"Not connected"},connecting:{icon:qc,label:"Connecting…"},connected:{icon:Uc,label:"Connected"},reconnect:{icon:Ji,label:"Reconnect required"},error:{icon:Ji,label:"Error"}},w=et(()=>_[g.connectionState].icon),m=et(()=>{var $;return(($=g.connection)==null?void 0:$.kind)==="local"}),E=[{id:"files",icon:eu,label:"Explorer"},{id:"git",icon:Qi,label:"Source Control"},{id:"remote",icon:Ls,label:"Workspaces"}];zr(async()=>{await g.loadConnections(),g.connectionId&&await g.refreshStatus()});function I($){c(i)===$&&c(a)?y(a,!1):(y(i,$,!0),y(a,!0))}async function A($){g.connectionId=$.currentTarget.value,g.tabs=[],g.activeKey="",g.restoredKey="",await g.refreshStatus()}async function Y($){y(p,!1);try{const j=$.split("/").filter(Boolean).pop()||$,J=await we.createConnection({kind:"local",label:j,workspace_root:$,max_file_bytes:1e6});await g.loadConnections(),g.connectionId=J.connection.id,g.tabs=[],g.activeKey="",g.restoredKey="",await g.connect(""),y(i,"files"),y(a,!0)}catch(j){g.setStatus(j.message||"Could not open folder")}}async function C($){$.preventDefault();try{const j=await we.createConnection({...c(h),port:Number(c(h).port)});y(d,!1),y(h,{...c(h),label:"",host:"",username:"",password:"",private_key:""},!0),await g.loadConnections(),g.connectionId=j.connection.id,await g.refreshStatus()}catch(j){g.setStatus(j.message||"Could not create connection")}}async function S(){const $=g.connection;if(!$)return;const j=$.kind==="local"?"workspace":"connection";if(confirm(`Remove ${j} "${$.label}"? Saved tabs are cleared; files are untouched.`))try{await we.deleteConnection($.id),g.connectionId="",g.tabs=[],await g.loadConnections()}catch(J){g.setStatus(J.message||"Could not delete")}}async function M(){try{const $=await we.focusTerminal(g.connectionId);g.setStatus(`Focused ${$.window_name}`,"tmux window selected")}catch($){g.setStatus($.message||"Could not focus terminal")}}function ee($){var pe,Ae,ae,Ce;const j=$.ctrlKey||$.metaKey,J=$.key.toLowerCase(),ge=((Ae=(pe=$.target)==null?void 0:pe.matches)==null?void 0:Ae.call(pe,"input, textarea, select"))&&!((Ce=(ae=$.target).closest)!=null&&Ce.call(ae,".monaco-editor"));j&&J==="s"?($.preventDefault(),g.saveActive()):j&&J==="p"&&!ge?($.preventDefault(),g.connectionId&&y(l,!0)):j&&$.shiftKey&&J==="o"?($.preventDefault(),y(p,!0)):j&&J==="b"&&!ge?($.preventDefault(),y(a,!c(a))):j&&J==="`"?($.preventDefault(),g.connectionState==="connected"&&y(f,!c(f))):$.key==="Escape"&&c(l)&&($.preventDefault(),y(l,!1))}var G=Ef();lr("keydown",Ws,ee);var R=k(G),N=k(R);Zi(N,{size:15,class:"shrink-0 text-vs-blue"});var B=b(N,2),D=b(B,2),W=b(D,2),be=ve(W,!0),T=b(W,2),K=k(T);Hi(K,()=>c(w),($,j)=>{j($,{size:12})});var P=b(K),U=b(R,2),le=k(U);it(le,21,()=>E,$=>$.id,($,j)=>{var J=af(),ge=k(J);{var pe=ae=>{var Ce=of();x(ae,Ce)};X(ge,ae=>{c(i)===c(j).id&&c(a)&&ae(pe)})}var Ae=b(ge,2);Hi(Ae,()=>c(j).icon,(ae,Ce)=>{Ce(ae,{size:22,strokeWidth:1.5})}),ce(()=>{Lt(J,1,`relative flex h-12 w-12 items-center justify-center ${c(i)===c(j).id&&c(a)?"text-vs-bright":"text-vs-muted hover:text-vs-fg"}`),me(J,"title",c(j).label),me(J,"aria-label",c(j).label)}),H("click",J,()=>I(c(j).id)),x($,J)});var Me=b(le,2);{var Ct=$=>{var j=mf(),J=k(j);{var ge=ae=>{yu(ae,{})},pe=ae=>{Cu(ae,{})},Ae=ae=>{var Ce=gf(),Kn=b(V(Ce),2),_t=k(Kn),dn=k(_t);dn.value=dn.__value="";var Hr=b(dn);it(Hr,17,()=>g.connections,xe=>xe.id,(xe,Te)=>{var Ie=lf(),Gt=ve(Ie),Pt={};ce(()=>{ue(Gt,`${c(Te).kind==="local"?"🖿 ":"⇅ "}${c(Te).label??""}`),Pt!==(Pt=c(Te).id)&&(Ie.value=(Ie.__value=Pt)??"")}),x(xe,Ie)});var vn;yn(_t);var Br=b(_t,2),Un=k(Br),xs=k(Un);Ds(xs,{size:13});var $s=b(Un,2),Ta=k($s);lu(Ta,{size:13});var Na=b($s,2);{var Pa=xe=>{var Te=cf(),Ie=k(Te);du(Ie,{size:13}),H("click",Te,S),x(xe,Te)};X(Na,xe=>{g.connection&&xe(Pa)})}var ki=b(Br,2);{var Ma=xe=>{var Te=ff(),Ie=V(Te);{var Gt=hn=>{var Ur=uf();Oe(Ur,()=>c(v),pn=>y(v,pn)),x(hn,Ur)};X(Ie,hn=>{!c(m)&&!g.connection.has_password&&hn(Gt)})}var Pt=b(Ie,2),Kr=ve(Pt,!0);ce(()=>ue(Kr,c(m)?"Open workspace":"Connect")),H("click",Pt,()=>g.connect(c(v))),x(xe,Te)};X(ki,xe=>{g.connection&&g.connectionState!=="connected"&&xe(Ma)})}var Aa=b(ki,2);{var Ia=xe=>{var Te=df(),Ie=ve(Te,!0);ce(()=>ue(Ie,g.connection.workspace_root)),x(xe,Te)};X(Aa,xe=>{g.connection&&xe(Ia)})}var Oa=b(Kn,2);{var za=xe=>{var Te=_f(),Ie=k(Te),Gt=k(Ie);Gt.value=Gt.__value="local";var Pt=b(Gt);Pt.value=Pt.__value="ssh",yn(Ie);var Kr=b(Ie,2),hn=b(Kr,2);{var Ur=Mt=>{var Si=pf(),Ei=V(Si),Ci=b(Ei,2),Ti=b(Ci,2),qr=b(Ti,2),ks=k(qr);ks.value=ks.__value="agent";var Ss=b(ks);Ss.value=Ss.__value="key";var Ni=b(Ss);Ni.value=Ni.__value="password",yn(qr);var Pi=b(qr,2);{var Da=ze=>{var qn=vf(),Wr=V(qn),Va=b(Wr,2);Oe(Wr,()=>c(h).identity_file,Es=>c(h).identity_file=Es),Oe(Va,()=>c(h).private_key,Es=>c(h).private_key=Es),x(ze,qn)};X(Pi,ze=>{c(h).auth_mode==="key"&&ze(Da)})}var La=b(Pi,2);{var ja=ze=>{var qn=hf();Oe(qn,()=>c(h).password,Wr=>c(h).password=Wr),x(ze,qn)};X(La,ze=>{c(h).auth_mode==="password"&&ze(ja)})}Oe(Ei,()=>c(h).host,ze=>c(h).host=ze),Oe(Ci,()=>c(h).username,ze=>c(h).username=ze),Oe(Ti,()=>c(h).port,ze=>c(h).port=ze),ni(qr,()=>c(h).auth_mode,ze=>c(h).auth_mode=ze),x(Mt,Si)};X(hn,Mt=>{c(h).kind==="ssh"&&Mt(Ur)})}var pn=b(hn,2),Ra=b(pn,2),Fa=b(k(Ra),2);ce(()=>{me(pn,"placeholder",c(h).kind==="local"?"/var/www/app":"Workspace root"),pn.required=c(h).kind==="local"}),lr("submit",Te,C),ni(Ie,()=>c(h).kind,Mt=>c(h).kind=Mt),Oe(Kr,()=>c(h).label,Mt=>c(h).label=Mt),Oe(pn,()=>c(h).workspace_root,Mt=>c(h).workspace_root=Mt),H("click",Fa,()=>y(d,!1)),x(xe,Te)};X(Oa,xe=>{c(d)&&xe(za)})}ce(()=>{vn!==(vn=g.connectionId)&&(_t.value=(_t.__value=vn)??"",On(_t,vn))}),H("change",_t,A),H("click",Un,()=>y(p,!0)),H("click",$s,()=>y(d,!c(d))),x(ae,Ce)};X(J,ae=>{c(i)==="files"?ae(ge):c(i)==="git"?ae(pe,1):ae(Ae,-1)})}x($,j)};X(Me,$=>{c(a)&&$(Ct)})}var pt=b(Me,2),Vn=k(pt);{var Tt=$=>{var j=bf(),J=k(j);Zi(J,{size:64,strokeWidth:1,class:"text-vs-line"});var ge=b(J,4),pe=k(ge),Ae=k(pe);Ds(Ae,{size:16});var ae=b(pe,2),Ce=k(ae);Ls(Ce,{size:16}),H("click",pe,()=>y(p,!0)),H("click",ae,()=>{y(i,"remote"),y(a,!0),y(d,!0)}),x($,j)},ys=$=>{var j=wf(),J=V(j);Du(J,{});var ge=b(J,2),pe=k(ge);Iu(pe,{});var Ae=b(ge,2);{var ae=Ce=>{var Kn=yf(),_t=k(Kn),dn=k(_t);fu(dn,{size:13});var Hr=b(dn,2),vn=k(Hr);cs(vn,{size:14});var Br=b(_t,2),Un=k(Br);mc(Un,()=>g.connectionId,xs=>{Xu(xs,{get rootPath(){return s()},get session(){return r()}})}),H("click",Hr,()=>y(f,!1)),x(Ce,Kn)};X(Ae,Ce=>{c(f)&&g.connectionState==="connected"&&Ce(ae)})}x($,j)};X(Vn,$=>{g.connectionId?$(ys,-1):$(Tt)})}var Hn=b(pt,2);{var Nt=$=>{var j=xf(),J=k(j),ge=k(J);eo(ge,{size:13});var pe=b(ge,4),Ae=k(pe);cs(Ae,{size:14});var ae=b(J,2),Ce=k(ae);Ku(Ce,{get sessions(){return n()},get session(){return r()},get rootPath(){return s()}}),H("click",pe,()=>y(o,!1)),x($,j)};X(Hn,$=>{c(o)&&$(Nt)})}var Bn=b(U,2),Rr=k(Bn);{var Fr=$=>{var j=no(),J=k(j);{var ge=ae=>{Ds(ae,{size:12})},pe=ae=>{Ls(ae,{size:12})};X(J,ae=>{c(m)?ae(ge):ae(pe,-1)})}var Ae=b(J);ce(()=>{me(j,"title",g.connection.workspace_root),ue(Ae,` ${g.connection.label??""}`)}),x($,j)};X(Rr,$=>{g.connection&&$(Fr)})}var fn=b(Rr,2);{var Dr=$=>{var j=no(),J=k(j);Qi(J,{size:12});var ge=b(J);ce(()=>ue(ge,` ${g.gitBranch??""}`)),x($,j)};X(fn,$=>{g.gitBranch&&$(Dr)})}var Lr=b(fn,2),jr=ve(Lr,!0),ws=b(Lr,2),Vr=k(ws);{var ya=$=>{var j=$f(),J=ve(j);ce(()=>ue(J,`${g.dirtyCount??""} unsaved`)),x($,j)};X(Vr,$=>{g.dirtyCount&&$(ya)})}var wi=b(Vr,2),wa=ve(wi,!0),xi=b(wi,2);{var xa=$=>{var j=kf(),J=V(j),ge=k(J);au(ge,{size:12});var pe=b(J,2),Ae=k(pe);Jc(Ae,{size:12}),H("click",J,()=>y(f,!c(f))),H("click",pe,M),x($,j)};X(xi,$=>{g.connectionState==="connected"&&$(xa)})}var $a=b(xi,2);{var ka=$=>{var j=Sf(),J=k(j);eo(J,{size:12}),H("click",j,()=>y(o,!c(o))),x($,j)};X($a,$=>{$(ka)})}var $i=b(Bn,2);{var Sa=$=>{Ju($,{onclose:()=>y(l,!1)})};X($i,$=>{c(l)&&$(Sa)})}var Ea=b($i,2);{var Ca=$=>{sf($,{onopen:Y,onclose:()=>y(p,!1)})};X(Ea,$=>{c(p)&&$(Ca)})}ce(()=>{var $;D.disabled=!g.connectionId,me(W,"title",($=g.connection)==null?void 0:$.workspace_root),ue(be,g.connection?`${g.connection.label} — Multibuilder IDE`:"Multibuilder IDE"),Lt(T,1,`flex items-center gap-1 ${g.connectionState==="connected"?"text-vs-green":g.connectionState==="connecting"?"text-vs-yellow":g.connectionState==="idle"?"text-vs-muted":"text-vs-red"}`),ue(P,` ${_[g.connectionState].label??""}`),ue(jr,g.statusText),ue(wa,g.detailText)}),H("click",B,()=>y(p,!0)),H("click",D,()=>y(l,!0)),x(e,G),at()}jt(["click","change"]);function ba(e,t){return hc(Cf,{target:e,props:t})}function ro(){const e=document.getElementById("ide-root");if(!e||e.dataset.mounted)return;e.dataset.mounted="1";const t=window.__IDE_BOOTSTRAP__||{};ba(e,{sessions:t.sessions||[],session:t.session||"",rootPath:t.rootPath||""})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ro):ro();window.mountRemoteIde=ba;export{ts as _};
