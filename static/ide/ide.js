const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ide-monaco.js","./ide2.css","./ide3.css"])))=>i.map(i=>d[i]);
var za=Object.defineProperty;var Ti=e=>{throw TypeError(e)};var Ra=(e,t,n)=>t in e?za(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Oe=(e,t,n)=>Ra(e,typeof t!="symbol"?t+"":t,n),Ss=(e,t,n)=>t.has(e)||Ti("Cannot "+n);var u=(e,t,n)=>(Ss(e,t,"read from private field"),n?n.call(e):t.get(e)),O=(e,t,n)=>t.has(e)?Ti("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),U=(e,t,n,r)=>(Ss(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),se=(e,t,n)=>(Ss(e,t,"access private method"),n);var fs=Array.isArray,Fa=Array.prototype.indexOf,ts=Array.prototype.includes,ds=Array.from,ro=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,so=Object.getOwnPropertyDescriptors,Da=Object.prototype,La=Array.prototype,si=Object.getPrototypeOf,Ni=Object.isExtensible;function Yn(e){return typeof e=="function"}const ja=()=>{};function Va(e){return e()}function Ds(e){for(var t=0;t<e.length;t++)e[t]()}function io(){var e,t,n=new Promise((r,s)=>{e=r,t=s});return{promise:n,resolve:e,reject:t}}function Ha(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const n=[];for(const r of e)if(n.push(r),n.length===t)break;return n}const Ce=2,Nn=4,Ir=8,ii=1<<24,ft=16,nt=32,Rt=64,Ls=128,oi=256,tt=512,$e=1024,ke=2048,vt=4096,Le=8192,Ue=16384,zn=32768,ns=1<<25,Wt=65536,rs=1<<17,Ba=1<<18,Rn=1<<19,oo=1<<20,yt=1<<25,an=65536,ss=1<<21,bn=1<<22,qt=1<<23,xt=Symbol("$state"),ao=Symbol("component"),lo=Symbol("legacy props"),Ka=Symbol(""),Yr=Symbol("attributes"),js=Symbol("class"),Vs=Symbol("style"),Qn=Symbol("text"),Jr=Symbol("form reset"),Or=new class extends Error{constructor(){super(...arguments);Oe(this,"name","StaleReactionError");Oe(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var eo;const ai=!!((eo=globalThis.document)!=null&&eo.contentType)&&globalThis.document.contentType.includes("xml"),Ua=1,qa=2,co=4,Wa=8,Ga=16,Ya=1,Ja=2,uo=4,Za=8,Xa=16,Qa=1,el=2,be=Symbol("uninitialized"),fo="http://www.w3.org/1999/xhtml",tl="http://www.w3.org/2000/svg",nl="@attach";function rl(){console.warn("https://svelte.dev/e/derived_inert")}function sl(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function il(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function vo(e){return e===this.v}function ol(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function ho(e){return!ol(e,this.v)}function po(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function al(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function ll(e,t,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function cl(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ul(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function fl(e){throw new Error("https://svelte.dev/e/effect_orphan")}function dl(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function vl(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function hl(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function pl(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function _l(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function gl(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Fn=!1;function ml(){Fn=!0}let he=null;function Pn(e){he=e}function ot(e,t=!1,n){he={p:he,i:!1,c:null,e:null,s:e,x:null,r:Z,l:Fn&&!t?{s:null,u:null,$:[]}:null}}function at(e){var t=he,n=t.e;if(n!==null){t.e=null;for(var r of n)Fo(r)}return t.i=!0,he=t.p,li(e)}function li(e={}){return ro(e,ao,{value:!0}),e}function Dn(){return!Fn||he!==null&&he.l===null}let Jt=[];function _o(){var e=Jt;Jt=[],Ds(e)}function wt(e){if(Jt.length===0&&!ar){var t=Jt;queueMicrotask(()=>{t===Jt&&_o()})}Jt.push(e)}function bl(){for(;Jt.length>0;)_o()}const yl=-7169;function _e(e,t){e.f=e.f&yl|t}function ci(e){(e.f&tt)!==0||e.deps===null?_e(e,$e):_e(e,vt)}function go(e){if(e!==null)for(const t of e)(t.f&Ce)===0||(t.f&an)===0||(t.f^=an,go(t.deps))}function mo(e,t,n){(e.f&ke)!==0?t.add(e):(e.f&vt)!==0&&n.add(e),go(e.deps),_e(e,$e)}let Wr=!1;function wl(e){var t=Wr;try{return Wr=!1,[e(),Wr]}finally{Wr=t}}function bo(e,t){if(t){const n=document.body;e.autofocus=!0,wt(()=>{document.activeElement===n&&e.focus()})}}let Pi=!1;function xl(){Pi||(Pi=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n[Jr])==null||t.call(n)})},{capture:!0}))}function Ln(e){var t=ee,n=Z;rt(null),st(null);try{return e()}finally{rt(t),st(n)}}function ui(e,t,n,r=n){e.addEventListener(t,()=>Ln(n));const s=e[Jr];s?e[Jr]=()=>{s(),r(!0)}:e[Jr]=()=>r(!0),xl()}function yo(e,t,n,r){const s=Dn()?Mn:fi;var i=e.filter(h=>!h.settled),o=t.map(s);if(n.length===0&&i.length===0){r(o);return}var a=Z,l=$l(),f=i.length===1?i[0].promise:i.length>1?Promise.all(i.map(h=>h.promise)):null;function v(h){if((a.f&Ue)===0){l();try{r([...o,...h])}catch(_){bt(_,a)}is()}}var p=wo();if(n.length===0){f.then(()=>v([])).finally(p);return}function d(){Promise.all(n.map(h=>kl(h))).then(v).catch(h=>bt(h,a)).finally(p)}f?f.then(()=>{l(),d(),is()}):d()}function $l(){var e=Z,t=ee,n=he,r=D;return function(i=!0){st(e),rt(t),Pn(n),i&&(e.f&Ue)===0&&(r==null||r.activate(),r==null||r.apply())}}function is(e=!0){st(null),rt(null),Pn(null),e&&(D==null||D.deactivate())}function wo(){var e=Z,t=e.b,n=D,r=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,n),n.increment(r,e),()=>{t==null||t.update_pending_count(-1,n),n.decrement(r,e)}}function Mn(e){var t=Ce|ke;return Z!==null&&(Z.f|=Rn),{ctx:he,deps:null,effects:null,equals:vo,f:t,fn:e,reactions:null,rv:0,v:be,wv:0,parent:Z,ac:null}}const er=Symbol("obsolete");function kl(e,t,n){let r=Z;r===null&&al();var s=void 0,i=Ft(be),o=!ee,a=new Set;return Ll(()=>{var h,_;var l=Z,f=io();s=f.promise;try{Promise.resolve(e()).then(f.resolve,y=>{y!==Or&&f.reject(y)}).finally(is)}catch(y){f.reject(y),is()}var v=D;if(o){if((l.f&zn)!==0)var p=wo();if((h=r.b)!=null&&h.is_rendered())(_=v.async_deriveds.get(l))==null||_.reject(er);else for(const y of a.values())y.reject(er);a.add(f),v.async_deriveds.set(l,f)}const d=(y,m=void 0)=>{p==null||p(),a.delete(f),m!==er&&(v.activate(),m?(i.f|=qt,An(i,m)):((i.f&qt)!==0&&(i.f^=qt),An(i,y)),v.deactivate())};f.promise.then(d,y=>d(null,y||"unknown"))}),vs(()=>{for(const l of a)l.reject(er)}),new Promise(l=>{function f(v){function p(){v===s?l(i):f(s)}v.then(p,p)}f(s)})}function et(e){const t=Mn(e);return Bo(t),t}function fi(e){const t=Mn(e);return t.equals=ho,t}function Sl(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)Pe(t[n])}}function di(e){var t,n=Z,r=e.parent;if(!Dt&&r!==null&&e.v!==be&&(r.f&(Ue|Le))!==0)return rl(),e.v;st(r);try{e.f&=~an,Sl(e),t=Wo(e)}finally{st(n)}return t}function xo(e){var t=di(e);if(!e.equals(t)&&(e.wv=Uo(),(!(D!=null&&D.is_fork)||e.deps===null)&&(D!==null?(D.capture(e,t,!0),or==null||or.capture(e,t,!0)):e.v=t,e.deps===null))){_e(e,$e);return}Dt||(Ne!==null?(_i()||D!=null&&D.is_fork)&&Ne.set(e,t):ci(e))}function El(e){var t;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),n.ac!==null&&Ln(()=>{n.ac.abort(Or),n.ac=null}),n.fn!==null&&(n.teardown=ja),cr(n,0),gi(n))}function $o(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&In(t)}let Es=null,_n=null,D=null,or=null,Ne=null,Hs=null,ar=!1,Cs=!1,mn=null,Zr=null;var Mi=0;let Cl=1;var xn,Bt,Qt,$n,kn,Sn,At,En,He,dr,It,ct,_t,Cn,en,ue,Bs,tr,Ks,ko,So,gn,Tl,nr;const ls=class ls{constructor(){O(this,ue);Oe(this,"id",Cl++);O(this,xn,!1);Oe(this,"linked",!0);O(this,Bt,null);O(this,Qt,null);Oe(this,"async_deriveds",new Map);Oe(this,"current",new Map);Oe(this,"previous",new Map);O(this,$n,new Set);O(this,kn,new Set);O(this,Sn,0);O(this,At,new Map);O(this,En,null);O(this,He,[]);O(this,dr,[]);O(this,It,new Set);O(this,ct,new Set);O(this,_t,new Map);O(this,Cn,new Set);Oe(this,"is_fork",!1);O(this,en,!1);_n===null?Es=_n=this:(U(_n,Qt,this),U(this,Bt,_n)),_n=this}skip_effect(t){u(this,_t).has(t)||u(this,_t).set(t,{d:[],m:[]}),u(this,Cn).delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=u(this,_t).get(t);if(r){u(this,_t).delete(t);for(var s of r.d)_e(s,ke),n(s);for(s of r.m)_e(s,vt),n(s)}u(this,Cn).add(t)}capture(t,n,r=!1){t.v!==be&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&qt)===0&&(this.current.set(t,[n,r]),Ne==null||Ne.set(t,n)),this.is_fork||(t.v=n)}activate(){D=this}deactivate(){D=null,Ne=null}flush(){try{Cs=!0,D=this,se(this,ue,tr).call(this)}finally{Mi=0,Hs=null,mn=null,Zr=null,Cs=!1,D=null,Ne=null,$t.clear()}}discard(){var t;for(const n of u(this,kn))n(this);u(this,kn).clear();for(const n of this.async_deriveds.values())n.reject(er);se(this,ue,nr).call(this),(t=u(this,En))==null||t.resolve()}register_created_effect(t){u(this,dr).push(t)}increment(t,n){if(U(this,Sn,u(this,Sn)+1),t){let r=u(this,At).get(n)??0;u(this,At).set(n,r+1)}}decrement(t,n){if(U(this,Sn,u(this,Sn)-1),t){let r=u(this,At).get(n)??0;r===1?u(this,At).delete(n):u(this,At).set(n,r-1)}u(this,en)||(U(this,en,!0),wt(()=>{U(this,en,!1),this.linked&&this.flush()}))}transfer_effects(t,n){for(const r of t)u(this,It).add(r);for(const r of n)u(this,ct).add(r);t.clear(),n.clear()}oncommit(t){u(this,$n).add(t)}ondiscard(t){u(this,kn).add(t)}settled(){return(u(this,En)??U(this,En,io())).promise}static ensure(){if(D===null){const t=D=new ls;!Cs&&!ar&&wt(()=>{u(t,xn)||t.flush()})}return D}apply(){{Ne=null;return}}schedule(t){var s;if(Hs=t,(s=t.b)!=null&&s.is_pending&&(t.f&(Nn|Ir|ii))!==0&&(t.f&zn)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(mn!==null&&n===Z&&(ee===null||(ee.f&Ce)===0))return;if((r&(Rt|nt))!==0){if((r&$e)===0)return;n.f^=$e}}u(this,He).push(n)}};xn=new WeakMap,Bt=new WeakMap,Qt=new WeakMap,$n=new WeakMap,kn=new WeakMap,Sn=new WeakMap,At=new WeakMap,En=new WeakMap,He=new WeakMap,dr=new WeakMap,It=new WeakMap,ct=new WeakMap,_t=new WeakMap,Cn=new WeakMap,en=new WeakMap,ue=new WeakSet,Bs=function(){if(this.is_fork)return!0;for(const r of u(this,At).keys()){for(var t=r,n=!1;t.parent!==null;){if(u(this,_t).has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1},tr=function(){var l,f,v,p;U(this,xn,!0),Mi++>1e3&&(se(this,ue,nr).call(this),Pl());for(const d of u(this,It))u(this,ct).delete(d),_e(d,ke),this.schedule(d);for(const d of u(this,ct))_e(d,vt),this.schedule(d);const t=u(this,He);U(this,He,[]),this.apply();var n=mn=[],r=[],s=Zr=[];for(const d of t)try{se(this,ue,Ks).call(this,d,n,r)}catch(h){throw To(d),se(this,ue,Bs).call(this)||this.discard(),h}if(D=null,s.length>0){var i=ls.ensure();for(const d of s)i.schedule(d)}if(mn=null,Zr=null,se(this,ue,Bs).call(this)){se(this,ue,gn).call(this,r),se(this,ue,gn).call(this,n);for(const[d,h]of u(this,_t))Co(d,h);s.length>0&&se(l=D,ue,tr).call(l);return}const o=se(this,ue,ko).call(this);if(o){se(this,ue,gn).call(this,r),se(this,ue,gn).call(this,n),se(f=o,ue,So).call(f,this);return}u(this,It).clear(),u(this,ct).clear();for(const d of u(this,$n))d(this);u(this,$n).clear(),or=this,Ai(r),Ai(n),or=null,(v=u(this,En))==null||v.resolve();var a=D;if(u(this,Sn)===0&&(u(this,He).length===0||a!==null)&&se(this,ue,nr).call(this),u(this,He).length>0)if(a!==null){const d=a;u(d,He).push(...u(this,He).filter(h=>!u(d,He).includes(h)))}else a=this;a!==null&&($t.clear(),se(p=a,ue,tr).call(p))},Ks=function(t,n,r){t.f^=$e;for(var s=t.first;s!==null;){var i=s.f,o=(i&(nt|Rt))!==0,a=o&&(i&$e)!==0,l=a||(i&Le)!==0||u(this,_t).has(s);if(!l&&s.fn!==null){o?s.f^=$e:(i&Nn)!==0?n.push(s):Rr(s)&&((i&ft)!==0&&u(this,ct).add(s),In(s));var f=s.first;if(f!==null){s=f;continue}}for(;s!==null;){var v=s.next;if(v!==null){s=v;break}s=s.parent}}},ko=function(){for(var t=u(this,Bt);t!==null;){if(!t.is_fork){for(const[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=u(t,Bt)}return null},So=function(t){var r;for(const[s,i]of t.current)!this.previous.has(s)&&t.previous.has(s)&&this.previous.set(s,t.previous.get(s)),this.current.set(s,i);for(const[s,i]of t.async_deriveds){const o=this.async_deriveds.get(s);o&&i.promise.then(o.resolve).catch(o.reject)}t.async_deriveds.clear(),this.transfer_effects(u(t,It),u(t,ct));const n=s=>{var i=s.reactions;if(i!==null&&!((s.f&Ce)!==0&&(s.f&(ke|vt))===0))for(const l of i){var o=l.f;if((o&Ce)!==0)n(l);else{var a=l;o&(bn|ft)&&!this.async_deriveds.has(a)&&(u(this,ct).delete(a),_e(a,ke),this.schedule(a))}}};for(const s of this.current.keys())n(s);this.oncommit(()=>t.discard()),se(r=t,ue,nr).call(r),D=this,se(this,ue,tr).call(this)},gn=function(t){for(var n=0;n<t.length;n+=1)mo(t[n],u(this,It),u(this,ct))},Tl=function(){var p;for(let d=Es;d!==null;d=u(d,Qt)){var t=d.id<this.id,n=[];for(const[h,[_,y]]of this.current){if(d.current.has(h)){var r=d.current.get(h)[0];if(t&&_!==r)d.current.set(h,[_,y]);else continue}n.push(h)}if(t)for(const[h,_]of this.async_deriveds){const y=d.async_deriveds.get(h);y&&_.promise.then(y.resolve).catch(y.reject)}var s=[...d.current.keys()].filter(h=>!d.current.get(h)[1]);if(!(!u(d,xn)||s.length===0)){var i=s.filter(h=>!this.current.has(h));if(i.length===0)t&&d.discard();else if(n.length>0){if(t)for(const h of u(this,Cn))d.unskip_effect(h,_=>{var y;(_.f&(ft|bn))!==0?d.schedule(_):se(y=d,ue,gn).call(y,[_])});d.activate();var o=new Set,a=new Map;for(var l of n)Eo(l,i,o,a);a=new Map;var f=[...d.current].filter(([h,_])=>{const y=this.current.get(h);return y?y[0]!==_[0]||y[1]!==_[1]:!0}).map(([h])=>h);if(f.length>0)for(const h of u(this,dr))(h.f&(Ue|Le|rs))===0&&vi(h,f,a)&&((h.f&(bn|ft))!==0?(_e(h,ke),d.schedule(h)):u(d,It).add(h));if(u(d,He).length>0&&!u(d,en)){d.apply();for(var v of u(d,He))se(p=d,ue,Ks).call(p,v,[],[]);U(d,He,[])}d.deactivate()}}}},nr=function(){if(this.linked){var t=u(this,Bt),n=u(this,Qt);t===null?Es=n:U(t,Qt,n),n===null?_n=t:U(n,Bt,t),this.linked=!1}};let ln=ls;function Nl(e){var t=ar;ar=!0;try{for(var n;;){if(bl(),D===null)return n;D.flush()}}finally{ar=t}}function Pl(){try{dl()}catch(e){bt(e,Hs)}}let lt=null;function Ai(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(Ue|Le))===0&&Rr(r)&&(lt=new Set,In(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&jo(r),(lt==null?void 0:lt.size)>0)){$t.clear();for(const s of lt){if((s.f&(Ue|Le))!==0)continue;const i=[s];let o=s.parent;for(;o!==null;)lt.has(o)&&(lt.delete(o),i.push(o)),o=o.parent;for(let a=i.length-1;a>=0;a--){const l=i[a];(l.f&(Ue|Le))===0&&In(l)}}lt.clear()}}lt=null}}function Eo(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const s of e.reactions){const i=s.f;(i&Ce)!==0?Eo(s,t,n,r):(i&(bn|ft))!==0&&(i&ke)===0&&vi(s,t,r)&&(_e(s,ke),hi(s))}}function vi(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const s of e.deps){if(ts.call(t,s))return!0;if((s.f&Ce)!==0&&vi(s,t,n))return n.set(s,!0),!0}return n.set(e,!1),!1}function hi(e){D.schedule(e)}function Co(e,t){if(!((e.f&nt)!==0&&(e.f&$e)!==0)){(e.f&ke)!==0?t.d.push(e):(e.f&vt)!==0&&t.m.push(e),_e(e,$e);for(var n=e.first;n!==null;)Co(n,t),n=n.next}}function To(e){_e(e,$e);for(var t=e.first;t!==null;)To(t),t=t.next}let os=new Set;const $t=new Map;let No=!1;function Ft(e,t){var n={f:0,v:e,reactions:null,equals:vo,rv:0,wv:0};return n}function R(e,t){const n=Ft(e);return Bo(n),n}function Ml(e,t=!1,n=!0){var s;const r=Ft(e);return t||(r.equals=ho),Fn&&n&&he!==null&&he.l!==null&&((s=he.l).s??(s.s=[])).push(r),r}function w(e,t,n=!1){ee!==null&&(!dt||(ee.f&rs)!==0)&&Dn()&&(ee.f&(Ce|ft|bn|rs))!==0&&(kt===null||!kt.has(e))&&_l();let r=n?Ee(t):t;return An(e,r,Zr)}function An(e,t,n=null){if(!e.equals(t)){Dt?$t.set(e,t):$t.has(e)||$t.set(e,e.v);var r=ln.ensure();if(r.capture(e,t),(e.f&Ce)!==0){const s=e;(e.f&ke)!==0&&di(s),Ne===null&&ci(s)}e.wv=Uo(),Po(e,ke,n),Dn()&&Z!==null&&(Z.f&$e)!==0&&(Z.f&(nt|Rt))===0&&(Ze===null?Hl([e]):Ze.push(e)),!r.is_fork&&os.size>0&&!No&&Al()}return t}function Al(){No=!1;for(const e of os){(e.f&$e)!==0&&_e(e,vt);let t;try{t=Rr(e)}catch{t=!0}t&&In(e)}os.clear()}function Ii(e,t=1){var n=c(e),r=t===1?n++:n--;return w(e,n),r}function lr(e){w(e,e.v+1)}function Po(e,t,n){var r=e.reactions;if(r!==null)for(var s=Dn(),i=r.length,o=0;o<i;o++){var a=r[o],l=a.f;if(!(!s&&a===Z)){var f=(l&ke)===0;if(f&&_e(a,t),(l&rs)!==0)os.add(a);else if((l&Ce)!==0){var v=a;Ne==null||Ne.delete(v),(l&an)===0&&(l&tt&&(Z===null||(Z.f&ss)===0)&&(a.f|=an),Po(v,vt,n))}else if(f){var p=a;(l&ft)!==0&&lt!==null&&lt.add(p),n!==null?n.push(p):hi(p)}}}}function Ee(e){if(typeof e!="object"||e===null||xt in e||ao in e)return e;const t=si(e);if(t!==Da&&t!==La)return e;var n=new Map,r=fs(e),s=R(0),i=on,o=a=>{if(on===i)return a();var l=ee,f=on;rt(null),Ri(i);var v=a();return rt(l),Ri(f),v};return r&&n.set("length",R(e.length)),new Proxy(e,{defineProperty(a,l,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&hl();var v=n.get(l);return v===void 0?o(()=>{var p=R(f.value);return n.set(l,p),p}):w(v,f.value,!0),!0},deleteProperty(a,l){var f=n.get(l);if(f===void 0){if(l in a){const v=o(()=>R(be));n.set(l,v),lr(s)}}else w(f,be),lr(s);return!0},get(a,l,f){var h;if(l===xt)return e;var v=n.get(l),p=l in a;if(v===void 0&&(!p||(h=Ut(a,l))!=null&&h.writable)&&(v=o(()=>{var _=Ee(p?a[l]:be),y=R(_);return y}),n.set(l,v)),v!==void 0){var d=c(v);return d===be?void 0:d}return Reflect.get(a,l,f)},getOwnPropertyDescriptor(a,l){var f=Reflect.getOwnPropertyDescriptor(a,l);if(f&&"value"in f){var v=n.get(l);v&&(f.value=c(v))}else if(f===void 0){var p=n.get(l),d=p==null?void 0:p.v;if(p!==void 0&&d!==be)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return f},has(a,l){var d;if(l===xt)return!0;var f=n.get(l),v=f!==void 0&&f.v!==be||Reflect.has(a,l);if(f!==void 0||Z!==null&&(!v||(d=Ut(a,l))!=null&&d.writable)){f===void 0&&(f=o(()=>{var h=v?Ee(a[l]):be,_=R(h);return _}),n.set(l,f));var p=c(f);if(p===be)return!1}return v},set(a,l,f,v){var A;var p=n.get(l),d=l in a;if(r&&l==="length")for(var h=f;h<p.v;h+=1){var _=n.get(h+"");_!==void 0?w(_,be):h in a&&(_=o(()=>R(be)),n.set(h+"",_))}if(p===void 0)(!d||(A=Ut(a,l))!=null&&A.writable)&&(p=o(()=>R(void 0)),w(p,Ee(f)),n.set(l,p));else{d=p.v!==be;var y=o(()=>Ee(f));w(p,y)}var m=Reflect.getOwnPropertyDescriptor(a,l);if(m!=null&&m.set&&m.set.call(v,f),!d){if(r&&typeof l=="string"){var E=n.get("length"),I=Number(l);Number.isInteger(I)&&I>=E.v&&w(E,I+1)}lr(s)}return!0},ownKeys(a){c(s);var l=Reflect.ownKeys(a).filter(p=>{var d=n.get(p);return d===void 0||d.v!==be});for(var[f,v]of n)v.v!==be&&!(f in a)&&l.push(f);return l},setPrototypeOf(){pl()}})}function Oi(e){try{if(e!==null&&typeof e=="object"&&xt in e)return e[xt]}catch{}return e}function Mo(e,t){return Object.is(Oi(e),Oi(t))}var Us,Ao,Io,Oo;function Il(){if(Us===void 0){Us=window,Ao=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Io=Ut(t,"firstChild").get,Oo=Ut(t,"nextSibling").get,Ni(e)&&(e[js]=void 0,e[Yr]=null,e[Vs]=void 0,e.__e=void 0),Ni(n)&&(n[Qn]=void 0)}}function zt(e=""){return document.createTextNode(e)}function cn(e){return Io.call(e)}function zr(e){return Oo.call(e)}function k(e,t){return cn(e)}function j(e,t=!1){{var n=cn(e);return n instanceof Comment&&n.data===""?zr(n):n}}function ve(e,t=!1){return cn(e)}function b(e,t=1,n=!1){let r=e;for(;t--;)r=zr(r);return r}function Ol(e){e.textContent=""}function zo(){return!1}function pi(e,t,n){return t==null||t===fo?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function zl(e){var t=Z;if(t===null)return ee.f|=qt,e;if((t.f&zn)===0&&(t.f&Nn)===0)throw e;bt(e,t)}function bt(e,t){if(!(t!==null&&(t.f&Ue)!==0)){for(;t!==null;){if((t.f&Ls)!==0&&(t.f&(Ue|ns))===0){if((t.f&zn)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}function Ro(e){Z===null&&(ee===null&&fl(),ul()),Dt&&cl()}function Rl(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function ht(e,t){var n=Z;n!==null&&(n.f&Le)!==0&&(e|=Le);var r={ctx:he,deps:null,nodes:null,f:e|ke|tt,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};D==null||D.register_created_effect(r);var s=r;if((e&Nn)!==0)mn!==null?mn.push(r):ln.ensure().schedule(r);else if(t!==null){try{In(r)}catch(o){throw Pe(r),o}s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&Rn)===0&&(s=s.first,(e&ft)!==0&&(e&Wt)!==0&&s!==null&&(s.f|=Wt))}if(s!==null&&(s.parent=n,n!==null&&Rl(s,n),ee!==null&&(ee.f&Ce)!==0&&(e&Rt)===0)){var i=ee;(i.effects??(i.effects=[])).push(s)}return r}function _i(){return ee!==null&&!dt}function vs(e){const t=ht(Ir,null);return _e(t,$e),t.teardown=e,t}function un(e){Ro();var t=Z.f,n=!ee&&(t&nt)!==0&&he!==null&&!he.i;if(n){var r=he;(r.e??(r.e=[])).push(e)}else return Fo(e)}function Fo(e){return ht(Nn|oo,e)}function Fl(e){return Ro(),ht(Ir|oo,e)}function Dl(e){ln.ensure();const t=ht(Rt|Rn,e);return(n={})=>new Promise(r=>{n.outro?sn(t,()=>{Pe(t),r(void 0)}):(Pe(t),r(void 0))})}function hs(e){return ht(Nn,e)}function Ll(e){return ht(bn|Rn,e)}function ps(e,t=0){return ht(Ir|t,e)}function le(e,t=[],n=[],r=[]){yo(r,t,n,s=>{ht(Ir,()=>{e(...s.map(c))})})}function jn(e,t=0){var n=ht(ft|t,e);return n}function Do(e,t=0){var n=ht(ii|t,e);return n}function Be(e){return ht(nt|Rn,e)}function Lo(e){var t=e.teardown;if(t!==null){const n=Dt,r=ee;zi(!0),rt(null);try{t.call(null)}catch(s){bt(s,e.parent)}finally{zi(n),rt(r)}}}function gi(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const s=n.ac;s!==null&&Ln(()=>{s.abort(Or)});var r=n.next;(n.f&Rt)!==0?n.parent=null:Pe(n,t),n=r}}function jl(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&nt)===0&&Pe(t),t=n}}function Pe(e,t=!0){var n=!1;(t||(e.f&Ba)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Vl(e.nodes.start,e.nodes.end),n=!0),e.f|=ns,gi(e,t&&!n),cr(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const i of r)i.stop();Lo(e),e.f^=ns,e.f|=Ue;var s=e.parent;s!==null&&s.first!==null&&jo(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Vl(e,t){for(;e!==null;){var n=e===t?null:zr(e);e.remove(),e=n}}function jo(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function sn(e,t,n=!0){var r=[];e.f|=oi,Vo(e,r,!0);var s=()=>{n&&Pe(e),t&&t()},i=r.length;if(i>0){var o=()=>--i||s();for(var a of r)a.out(o)}else s()}function Vo(e,t,n){if((e.f&Le)===0){e.f^=Le;var r=e.nodes&&e.nodes.t;if(r!==null)for(const a of r)(a.is_global||n)&&t.push(a);for(var s=e.first;s!==null;){var i=s.next;if((s.f&Rt)===0){var o=(s.f&Wt)!==0||(s.f&nt)!==0&&(e.f&ft)!==0;Vo(s,t,o?n:!1)}s=i}}}function as(e){e.f&=~oi,Ho(e,!0)}function Ho(e,t){if((e.f&oi)===0&&(e.f&Le)!==0){e.f^=Le,(e.f&$e)===0&&(_e(e,ke),ln.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,s=(n.f&Wt)!==0||(n.f&nt)!==0;Ho(n,s?t:!1),n=r}var i=e.nodes&&e.nodes.t;if(i!==null)for(const o of i)(o.is_global||t)&&o.in()}}function mi(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var s=n===r?null:zr(n);t.append(n),n=s}}let Xr=!1,Dt=!1;function zi(e){Dt=e}let ee=null,dt=!1;function rt(e){ee=e}let Z=null;function st(e){Z=e}let kt=null;function Bo(e){ee!==null&&(kt??(kt=new Set)).add(e)}let Ke=null,Ye=0,Ze=null;function Hl(e){Ze=e}let Ko=1,Zt=0,on=Zt;function Ri(e){on=e}function Uo(){return++Ko}function Rr(e){var t=e.f;if((t&ke)!==0)return!0;if(t&Ce&&(e.f&=~an),(t&vt)!==0){for(var n=e.deps,r=n.length,s=0;s<r;s++){var i=n[s];if(Rr(i)&&xo(i),i.wv>e.wv)return!0}(t&tt)!==0&&Ne===null&&_e(e,$e)}return!1}function qo(e,t,n=!0){var r=e.reactions;if(r!==null&&!(kt!==null&&kt.has(e)))for(var s=0;s<r.length;s++){var i=r[s];(i.f&Ce)!==0?qo(i,t,!1):t===i&&(n?_e(i,ke):(i.f&$e)!==0&&_e(i,vt),hi(i))}}function Wo(e){var t=Ke,n=Ye,r=Ze,s=ee,i=kt,o=he,a=dt,l=on,f=e.f;Ke=null,Ye=0,Ze=null,ee=(f&(nt|Rt))===0?e:null,kt=null,Pn(e.ctx),dt=!1,on=++Zt,e.ac!==null&&(Ln(()=>{e.ac.abort(Or)}),e.ac=null);try{e.f|=ss;var v=e.fn,p=v();e.f|=zn;var d=Fi(e);if(Dn()&&Ze!==null&&!dt&&d!==null&&(e.f&(Ce|vt|ke))===0)for(var h=0;h<Ze.length;h++)qo(Ze[h],e);if(s!==null&&s!==e){if(Zt++,s.deps!==null)for(let _=0;_<n;_+=1)s.deps[_].rv=Zt;if(t!==null)for(const _ of t)_.rv=Zt;Ze!==null&&(r===null?r=Ze:r.push(...Ze))}return(e.f&qt)!==0&&(e.f^=qt),p}catch(_){return Fi(e),zl(_)}finally{e.f^=ss,Ke=t,Ye=n,Ze=r,ee=s,kt=i,Pn(o),dt=a,on=l}}function Fi(e){var s;var t=e.deps,n=D==null?void 0:D.is_fork;if(Ke!==null){var r;if(n||cr(e,Ye),t!==null&&Ye>0)for(t.length=Ye+Ke.length,r=0;r<Ke.length;r++)t[Ye+r]=Ke[r];else e.deps=t=Ke;if(_i()&&(e.f&tt)!==0)for(r=Ye;r<t.length;r++)((s=t[r]).reactions??(s.reactions=[])).push(e)}else!n&&t!==null&&Ye<t.length&&(cr(e,Ye),t.length=Ye);return t}function Bl(e,t){let n=t.reactions;if(n!==null){var r=Fa.call(n,e);if(r!==-1){var s=n.length-1;s===0?n=t.reactions=null:(n[r]=n[s],n.pop())}}if(n===null&&(t.f&Ce)!==0&&(Ke===null||!ts.call(Ke,t))){var i=t;(i.f&tt)!==0&&(i.f^=tt,i.f&=~an),i.v!==be&&ci(i),i.ac!==null&&Ln(()=>{i.ac.abort(Or),i.ac=null,_e(i,ke)}),El(i),cr(i,0)}}function cr(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Bl(e,n[r])}function In(e){var t=e.f;if((t&Ue)===0){_e(e,$e);var n=Z,r=Xr;Z=e,Xr=(t&(nt|Rt))===0;try{(t&(ft|ii))!==0?jl(e):gi(e),Lo(e);var s=Wo(e);e.teardown=typeof s=="function"?s:null,e.wv=Ko;var i}finally{Xr=r,Z=n}}}async function Kl(){await Promise.resolve(),Nl()}function c(e){var t=e.f,n=(t&Ce)!==0;if(ee!==null&&!dt){var r=Z!==null&&(Z.f&Ue)!==0;if(!r&&(kt===null||!kt.has(e))){var s=ee.deps;if((ee.f&ss)!==0)e.rv<Zt&&(e.rv=Zt,Ke===null&&s!==null&&s[Ye]===e?Ye++:Ke===null?Ke=[e]:Ke.push(e));else{ee.deps??(ee.deps=[]),ts.call(ee.deps,e)||ee.deps.push(e);var i=e.reactions;i===null?e.reactions=[ee]:ts.call(i,ee)||i.push(ee)}}}if(Dt&&$t.has(e))return $t.get(e);if(n){var o=e;if(Dt){var a=o.v;return((o.f&$e)===0&&o.reactions!==null||Yo(o))&&(a=di(o)),$t.set(o,a),a}var l=(o.f&tt)===0&&!dt&&ee!==null&&(Xr||(ee.f&tt)!==0),f=(o.f&zn)===0;Rr(o)&&(l&&(o.f|=tt),xo(o)),l&&!f&&($o(o),Go(o))}if(Ne!=null&&Ne.has(e))return Ne.get(e);if((e.f&qt)!==0)throw e.v;return e.v}function Go(e){if(e.f|=tt,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Ce)!==0&&(t.f&tt)===0&&($o(t),Go(t))}function Yo(e){if(e.v===be)return!0;if(e.deps===null)return!1;for(const t of e.deps)if($t.has(t)||(t.f&Ce)!==0&&Yo(t))return!0;return!1}function St(e){var t=dt;try{return dt=!0,e()}finally{dt=t}}function Yt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(xt in e)qs(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&xt in n&&qs(n)}}}function qs(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{qs(e[r],t)}catch{}const n=si(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=so(n);for(let s in r){const i=r[s].get;if(i)try{i.call(e)}catch{}}}}}function Ul(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ql=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Wl(e){return ql.includes(e)}const Gl={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Yl(e){return e=e.toLowerCase(),Gl[e]??e}const Jl=["touchstart","touchmove"];function Zl(e){return Jl.includes(e)}const Xt=Symbol("events"),Jo=new Set,Ws=new Set;function Zo(e,t,n,r={}){function s(i){if(r.capture||Gs.call(t,i),!i.cancelBubble)return Ln(()=>n==null?void 0:n.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?wt(()=>{t.addEventListener(e,s,r)}):t.addEventListener(e,s,r),s}function ur(e,t,n,r,s){var i={capture:r,passive:s},o=Zo(e,t,n,i);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&vs(()=>{t.removeEventListener(e,o,i)})}function B(e,t,n){(t[Xt]??(t[Xt]={}))[e]=n}function jt(e){for(var t=0;t<e.length;t++)Jo.add(e[t]);for(var n of Ws)n(e)}let Ts=null,Ns=!1;function Gs(e){var y,m;var t=this,n=t.ownerDocument,r=e.type,s=((y=e.composedPath)==null?void 0:y.call(e))||[],i=s[0]||e.target;Ts=e,Ns||(Ns=!0,setTimeout(()=>{Ns=!1,Ts=null}));var o=0,a=Ts===e&&e[Xt];if(a){var l=s.indexOf(a);if(l!==-1&&(t===document||t===window)){e[Xt]=t;return}var f=s.indexOf(t);if(f===-1)return;l<=f&&(o=l)}if(i=s[o]||e.target,i!==t){ro(e,"currentTarget",{configurable:!0,get(){return i||n}});var v=ee,p=Z;rt(null),st(null);try{for(var d,h=[];i!==null&&i!==t;){try{var _=(m=i[Xt])==null?void 0:m[r];_!=null&&(!i.disabled||e.target===i)&&_.call(i,e)}catch(E){d?h.push(E):d=E}if(e.cancelBubble)break;o++,i=o<s.length?s[o]:null}if(d){for(let E of h)queueMicrotask(()=>{throw E});throw d}}finally{e[Xt]=t,delete e.currentTarget,rt(v),st(p)}}}var to;const Ps=((to=globalThis==null?void 0:globalThis.window)==null?void 0:to.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Xl(e){return(Ps==null?void 0:Ps.createHTML(e))??e}function Xo(e){var t=pi("template");return t.innerHTML=Xl(e.replaceAll("<!>","<!---->")),t.content}function fr(e,t){var n=Z;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function L(e,t){var n=(t&Qa)!==0,r=(t&el)!==0,s,i=!e.startsWith("<!>");return()=>{s===void 0&&(s=Xo(i?e:"<!>"+e),n||(s=cn(s)));var o=r||Ao?document.importNode(s,!0):s.cloneNode(!0);if(n){var a=cn(o),l=o.lastChild;fr(a,l)}else fr(o,o);return o}}function Ql(e,t,n="svg"){var r=!e.startsWith("<!>"),s=`<${n}>${r?e:"<!>"+e}</${n}>`,i;return()=>{if(!i){var o=Xo(s),a=cn(o);i=cn(a)}var l=i.cloneNode(!0);return fr(l,l),l}}function Qo(e,t){return Ql(e,t,"svg")}function J(){var e=document.createDocumentFragment(),t=document.createComment(""),n=zt();return e.append(t,n),fr(t,n),e}function x(e,t){e!==null&&e.before(t)}function ec(e){let t=0,n=Ft(0),r;return()=>{_i()&&(c(n),ps(()=>(t===0&&(r=St(()=>e(()=>lr(n)))),t+=1,()=>{wt(()=>{t-=1,t===0&&(r==null||r(),r=void 0,lr(n))})})))}}var tc=Wt|Rn;function nc(e,t,n,r){new rc(e,t,n,r)}var Xe,ri,Qe,tn,ze,qe,Re,We,gt,nn,Kt,Tn,vr,hr,Ot,cs,fe,sc,ic,Ys,oc,Js,rr,Qr,Zs,Xs;class rc{constructor(t,n,r,s){O(this,fe);Oe(this,"parent");Oe(this,"is_pending",!1);Oe(this,"transform_error");O(this,Xe);O(this,ri,null);O(this,Qe);O(this,tn);O(this,ze);O(this,qe,null);O(this,Re,null);O(this,We,null);O(this,gt,null);O(this,nn,0);O(this,Kt,0);O(this,Tn,!1);O(this,vr,new Set);O(this,hr,new Set);O(this,Ot,null);O(this,cs,ec(()=>(U(this,Ot,Ft(u(this,nn))),()=>{U(this,Ot,null)})));var i;U(this,Xe,t),U(this,Qe,n),U(this,tn,o=>{var a=Z;a.b=this,a.f|=Ls,r(o)}),this.parent=Z.b,this.transform_error=s??((i=this.parent)==null?void 0:i.transform_error)??(o=>o),U(this,ze,jn(()=>{se(this,fe,Js).call(this)},tc))}defer_effect(t){mo(t,u(this,vr),u(this,hr))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,Qe).pending}update_pending_count(t,n){se(this,fe,Zs).call(this,t,n),U(this,nn,u(this,nn)+t),!(!u(this,Ot)||u(this,Tn))&&(U(this,Tn,!0),wt(()=>{U(this,Tn,!1),u(this,Ot)&&An(u(this,Ot),u(this,nn))}))}get_effect_pending(){return u(this,cs).call(this),c(u(this,Ot))}error(t){if(!u(this,Qe).onerror&&!u(this,Qe).failed)throw t;D!=null&&D.is_fork?(u(this,qe)&&D.skip_effect(u(this,qe)),u(this,Re)&&D.skip_effect(u(this,Re)),u(this,We)&&D.skip_effect(u(this,We)),D.oncommit(()=>{se(this,fe,Xs).call(this,t)})):se(this,fe,Xs).call(this,t)}}Xe=new WeakMap,ri=new WeakMap,Qe=new WeakMap,tn=new WeakMap,ze=new WeakMap,qe=new WeakMap,Re=new WeakMap,We=new WeakMap,gt=new WeakMap,nn=new WeakMap,Kt=new WeakMap,Tn=new WeakMap,vr=new WeakMap,hr=new WeakMap,Ot=new WeakMap,cs=new WeakMap,fe=new WeakSet,sc=function(){try{U(this,qe,Be(()=>u(this,tn).call(this,u(this,Xe))))}catch(t){this.error(t)}},ic=function(t){const n=u(this,Qe).failed,{reset:r,invoke_onerror:s}=se(this,fe,Ys).call(this,t);wt(s),n&&U(this,We,Be(()=>{n(u(this,Xe),()=>t,()=>r)}))},Ys=function(t){var n=!1,r=!1;const s=()=>{if(n){il();return}n=!0,r&&gl(),u(this,We)!==null&&sn(u(this,We),()=>{U(this,We,null)}),se(this,fe,Qr).call(this,()=>{se(this,fe,Js).call(this)})};return{reset:s,invoke_onerror:()=>{var o,a;try{r=!0,(a=(o=u(this,Qe)).onerror)==null||a.call(o,t,s),r=!1}catch(l){bt(l,u(this,ze)&&u(this,ze).parent)}}}},oc=function(){const t=u(this,Qe).pending;t&&(this.is_pending=!0,U(this,Re,Be(()=>t(u(this,Xe)))),wt(()=>{var n=U(this,gt,document.createDocumentFragment()),r=zt(),s=!1;if(n.append(r),U(this,qe,se(this,fe,Qr).call(this,()=>{try{return Be(()=>u(this,tn).call(this,r))}catch(i){try{this.error(i),s=!0}catch(o){bt(o,u(this,ze).parent)}return null}})),u(this,qe)===null){U(this,gt,null),s&&se(this,fe,rr).call(this,D);return}u(this,Kt)===0&&(u(this,Xe).before(n),U(this,gt,null),sn(u(this,Re),()=>{U(this,Re,null)}),se(this,fe,rr).call(this,D))}))},Js=function(){try{if(this.is_pending=this.has_pending_snippet(),U(this,Kt,0),U(this,nn,0),U(this,qe,Be(()=>{u(this,tn).call(this,u(this,Xe))})),u(this,Kt)>0){var t=U(this,gt,document.createDocumentFragment());mi(u(this,qe),t);const n=u(this,Qe).pending;U(this,Re,Be(()=>n(u(this,Xe))))}else se(this,fe,rr).call(this,D)}catch(n){this.error(n)}},rr=function(t){this.is_pending=!1,t.transfer_effects(u(this,vr),u(this,hr))},Qr=function(t){var n=Z,r=ee,s=he;st(u(this,ze)),rt(u(this,ze)),Pn(u(this,ze).ctx);try{return ln.ensure(),t()}finally{st(n),rt(r),Pn(s)}},Zs=function(t,n){var r;if(!this.has_pending_snippet()){this.parent&&se(r=this.parent,fe,Zs).call(r,t,n);return}U(this,Kt,u(this,Kt)+t),u(this,Kt)===0&&(se(this,fe,rr).call(this,n),u(this,Re)&&sn(u(this,Re),()=>{U(this,Re,null)}),u(this,gt)&&(u(this,Xe).before(u(this,gt)),U(this,gt,null)))},Xs=function(t){u(this,qe)&&(Pe(u(this,qe)),U(this,qe,null)),u(this,Re)&&(Pe(u(this,Re)),U(this,Re,null)),u(this,We)&&(Pe(u(this,We)),U(this,We,null));let n=u(this,Qe).failed;const r=s=>{const{reset:i,invoke_onerror:o}=se(this,fe,Ys).call(this,s);o(),n&&U(this,We,se(this,fe,Qr).call(this,()=>{try{return Be(()=>{var a=Z;a.b=this,a.f|=Ls,n(u(this,Xe),()=>s,()=>i)})}catch(a){return bt(a,u(this,ze).parent),null}}))};wt(()=>{var s;try{s=this.transform_error(t)}catch(i){bt(i,u(this,ze)&&u(this,ze).parent);return}s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(r,i=>bt(i,u(this,ze)&&u(this,ze).parent)):r(s)})};function ce(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[Qn]??(e[Qn]=e.nodeValue))&&(e[Qn]=n,e.nodeValue=`${n}`)}function ac(e,t){return lc(e,t)}const Gr=new Map;function lc(e,{target:t,anchor:n,props:r={},events:s,context:i,intro:o=!0,transformError:a}){Il();var l=void 0,f=Dl(()=>{var v=n??t.appendChild(zt());nc(v,{pending:()=>{}},h=>{ot({});var _=he;i&&(_.c=i),s&&(r.$$events=s),l=e(h,r)||li(),at()},a);var p=new Set,d=h=>{for(var _=0;_<h.length;_++){var y=h[_];if(!p.has(y)){p.add(y);var m=Zl(y);for(const A of[t,document]){var E=Gr.get(A);E===void 0&&(E=new Map,Gr.set(A,E));var I=E.get(y);I===void 0?(A.addEventListener(y,Gs,{passive:m}),E.set(y,1)):E.set(y,I+1)}}}};return d(ds(Jo)),Ws.add(d),()=>{var m;for(var h of p)for(const E of[t,document]){var _=Gr.get(E),y=_.get(h);--y==0?(E.removeEventListener(h,Gs),_.delete(h),_.size===0&&Gr.delete(E)):_.set(h,y)}Ws.delete(d),v!==n&&((m=v.parentNode)==null||m.removeChild(v))}});return cc.set(l,f),l}let cc=new WeakMap;var ut,mt,Ge,rn,pr,_r,us;class _s{constructor(t,n=!0){Oe(this,"anchor");O(this,ut,new Map);O(this,mt,new Map);O(this,Ge,new Map);O(this,rn,new Set);O(this,pr,!0);O(this,_r,t=>{if(u(this,ut).has(t)){var n=u(this,ut).get(t),r=u(this,mt).get(n);if(r)as(r),u(this,rn).delete(n);else{var s=u(this,Ge).get(n);s&&(as(s.effect),u(this,mt).set(n,s.effect),u(this,Ge).delete(n),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[i,o]of u(this,ut)){if(u(this,ut).delete(i),i===t)break;const a=u(this,Ge).get(o);a&&(Pe(a.effect),u(this,Ge).delete(o))}for(const[i,o]of u(this,mt)){if(i===n||u(this,rn).has(i))continue;const a=()=>{if(Array.from(u(this,ut).values()).includes(i)){var f=document.createDocumentFragment();mi(o,f),f.append(zt()),u(this,Ge).set(i,{effect:o,fragment:f})}else Pe(o);u(this,rn).delete(i),u(this,mt).delete(i)};u(this,pr)||!r?(u(this,rn).add(i),sn(o,a,!1)):a()}}});O(this,us,t=>{u(this,ut).delete(t);const n=Array.from(u(this,ut).values());for(const[r,s]of u(this,Ge))n.includes(r)||(Pe(s.effect),u(this,Ge).delete(r))});this.anchor=t,U(this,pr,n)}ensure(t,n){var r=D,s=zo();if(n&&!u(this,mt).has(t)&&!u(this,Ge).has(t))if(s){var i=document.createDocumentFragment(),o=zt();i.append(o),u(this,Ge).set(t,{effect:Be(()=>n(o)),fragment:i})}else u(this,mt).set(t,Be(()=>n(this.anchor)));if(u(this,ut).set(r,t),s){for(const[a,l]of u(this,mt))a===t?r.unskip_effect(l):r.skip_effect(l);for(const[a,l]of u(this,Ge))a===t?r.unskip_effect(l.effect):r.skip_effect(l.effect);r.oncommit(u(this,_r)),r.ondiscard(u(this,us))}else u(this,_r).call(this,r)}}ut=new WeakMap,mt=new WeakMap,Ge=new WeakMap,rn=new WeakMap,pr=new WeakMap,_r=new WeakMap,us=new WeakMap;function Q(e,t,n=!1){var r=new _s(e),s=n?Wt:0;function i(o,a){r.ensure(o,a)}jn(()=>{var o=!1;t((a,l=0)=>{o=!0,i(l,a)}),o||i(-1,null)},s)}const uc=Symbol("NaN");function fc(e,t,n){var r=new _s(e),s=!Dn();jn(()=>{var i=t();i!==i&&(i=uc),s&&i!==null&&typeof i=="object"&&(i={}),r.ensure(i,n)})}function dc(e,t){return t}function vc(e,t,n){for(var r=[],s=t.length,i,o=t.length,a=0;a<s;a++){let p=t[a];sn(p,()=>{if(i){if(i.pending.delete(p),i.done.add(p),i.pending.size===0){var d=e.outrogroups;Qs(e,ds(i.done)),d.delete(i),d.size===0&&(e.outrogroups=null)}}else o-=1},!1)}if(o===0){var l=r.length===0&&n!==null&&e.pending.size===0;if(l){var f=n,v=f.parentNode;Ol(v),v.append(f),e.items.clear()}Qs(e,t,!l)}else i={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(i)}function Qs(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(const o of e.pending.values())for(const a of o)r.add(e.items.get(a).e)}for(var s=0;s<t.length;s++){var i=t[s];if(r!=null&&r.has(i)){i.f|=yt;const o=document.createDocumentFragment();mi(i,o)}else Pe(t[s],n)}}var Di;function it(e,t,n,r,s,i=null){var o=e,a=new Map,l=(t&co)!==0;if(l){var f=e;o=f.appendChild(zt())}var v=null,p=fi(()=>{var A=n();return fs(A)?A:A==null?[]:ds(A)}),d,h=new Map,_=!0;function y(A){(I.effect.f&Ue)===0&&(I.pending.delete(A),I.fallback=v,hc(I,d,o,t,r),v!==null&&(d.length===0?(v.f&yt)===0?as(v):(v.f^=yt,sr(v,null,o)):sn(v,()=>{v=null})))}function m(A){I.pending.delete(A)}var E=jn(()=>{d=c(p);for(var A=d.length,G=new Set,C=D,$=zo(),M=0;M<A;M+=1){var X=d[M],W=r(X,M),z=_?null:a.get(W);z?(z.v&&An(z.v,X),z.i&&An(z.i,M),$&&C.unskip_effect(z.e)):(z=pc(a,_?o:Di??(Di=zt()),X,W,M,s,t,n),_||(z.e.f|=yt),a.set(W,z)),G.add(W)}if(A===0&&i&&!v&&(_?v=Be(()=>i(o)):(v=Be(()=>i(Di??(Di=zt()))),v.f|=yt)),A>G.size&&ll(),!_)if(h.set(C,G),$){for(const[N,V]of a)G.has(N)||C.skip_effect(V.e);C.oncommit(y),C.ondiscard(m)}else y(C);c(p)}),I={effect:E,items:a,pending:h,outrogroups:null,fallback:v};_=!1}function Jn(e){for(;e!==null&&(e.f&nt)===0;)e=e.next;return e}function hc(e,t,n,r,s){var z,N,V,F,Y,ge,T,q,P;var i=(r&Wa)!==0,o=t.length,a=e.items,l=Jn(e.effect.first),f,v=null,p,d=[],h=[],_,y,m,E;if(i)for(E=0;E<o;E+=1)_=t[E],y=s(_,E),m=a.get(y).e,(m.f&yt)===0&&((N=(z=m.nodes)==null?void 0:z.a)==null||N.measure(),(p??(p=new Set)).add(m));for(E=0;E<o;E+=1){if(_=t[E],y=s(_,E),m=a.get(y).e,e.outrogroups!==null)for(const K of e.outrogroups)K.pending.delete(m),K.done.delete(m);if((m.f&Le)!==0&&(as(m),i&&((F=(V=m.nodes)==null?void 0:V.a)==null||F.unfix(),(p??(p=new Set)).delete(m))),(m.f&yt)!==0)if(m.f^=yt,m===l)sr(m,null,n);else{var I=v?v.next:l;m===e.effect.last&&(e.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),Vt(e,v,m),Vt(e,m,I),sr(m,I,n),v=m,d=[],h=[],l=Jn(v.next);continue}if(m!==l){if(f!==void 0&&f.has(m)){if(d.length<h.length){var A=h[0],G;v=A.prev;var C=d[0],$=d[d.length-1];for(G=0;G<d.length;G+=1)sr(d[G],A,n);for(G=0;G<h.length;G+=1)f.delete(h[G]);Vt(e,C.prev,$.next),Vt(e,v,C),Vt(e,$,A),l=A,v=$,E-=1,d=[],h=[]}else f.delete(m),sr(m,l,n),Vt(e,m.prev,m.next),Vt(e,m,v===null?e.effect.first:v.next),Vt(e,v,m),v=m;continue}for(d=[],h=[];l!==null&&l!==m;)(f??(f=new Set)).add(l),h.push(l),l=Jn(l.next);if(l===null)continue}(m.f&yt)===0&&d.push(m),v=m,l=Jn(m.next)}if(e.outrogroups!==null){for(const K of e.outrogroups)K.pending.size===0&&(Qs(e,ds(K.done)),(Y=e.outrogroups)==null||Y.delete(K));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||f!==void 0){var M=[];if(f!==void 0)for(m of f)(m.f&Le)===0&&M.push(m);for(;l!==null;)(l.f&Le)===0&&l!==e.fallback&&M.push(l),l=Jn(l.next);var X=M.length;if(X>0){var W=(r&co)!==0&&o===0?n:null;if(i){for(E=0;E<X;E+=1)(T=(ge=M[E].nodes)==null?void 0:ge.a)==null||T.measure();for(E=0;E<X;E+=1)(P=(q=M[E].nodes)==null?void 0:q.a)==null||P.fix()}vc(e,M,W)}}i&&wt(()=>{var K,ae;if(p!==void 0)for(m of p)(ae=(K=m.nodes)==null?void 0:K.a)==null||ae.apply()})}function pc(e,t,n,r,s,i,o,a){var l=(o&Ua)!==0?(o&Ga)===0?Ml(n,!1,!1):Ft(n):null,f=(o&qa)!==0?Ft(s):null;return{v:l,i:f,e:Be(()=>(i(t,l??n,f??s,a),()=>{e.delete(r)}))}}function sr(e,t,n){if(e.nodes)for(var r=e.nodes.start,s=e.nodes.end,i=t&&(t.f&yt)===0?t.nodes.start:n;r!==null;){var o=zr(r);if(i.before(r),r===s)return;r=o}}function Vt(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function re(e,t,n,r,s){var a,l;if((a=t.$$host)!=null&&a.$$shadowRoot){const f=pi("slot");x(e,f);return}var i=(l=t.$$slots)==null?void 0:l[n],o=!1;i===!0&&(i=t.children,o=!0),i===void 0||i(e,o?()=>r:r)}function Li(e,t,n){var r=new _s(e);jn(()=>{var s=t()??null;r.ensure(s,s&&(i=>n(i,s)))},Wt)}function _c(e,t,n,r,s,i){var o=null,a=e,l=new _s(a,!1);jn(()=>{const f=t()||null;var v=tl;if(f===null){l.ensure(null,null);return}return l.ensure(f,p=>{if(f){if(o=pi(f,v),fr(o,o),r){var d=null,h=o.appendChild(zt());r(o,h),d==null||d.remove()}Z.nodes.end=o,p.before(o)}}),()=>{}},Wt),vs(()=>{})}function gc(e,t){var n=void 0,r;Do(()=>{n!==(n=t())&&(r&&(Pe(r),r=null),n&&(r=Be(()=>{hs(()=>n(e))})))})}function ea(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=ea(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function mc(){for(var e,t,n=0,r="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=ea(e))&&(r&&(r+=" "),r+=t);return r}function bc(e){return typeof e=="object"?mc(e):e??""}const ji=[...` 	
\r\f \v\uFEFF`];function yc(e,t,n){var r=e==null?"":""+e;if(t&&(r=r?r+" "+t:t),n){for(var s of Object.keys(n))if(n[s])r=r?r+" "+s:s;else if(r.length)for(var i=s.length,o=0;(o=r.indexOf(s,o))>=0;){var a=o+i;(o===0||ji.includes(r[o-1]))&&(a===r.length||ji.includes(r[a]))?r=(o===0?"":r.substring(0,o))+r.substring(a+1):o=a}}return r===""?null:r}function Vi(e,t=!1){var n=t?" !important;":";",r="";for(var s of Object.keys(e)){var i=e[s];i!=null&&i!==""&&(r+=" "+s+": "+i+n)}return r}function Ms(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function wc(e,t){if(t){var n="",r,s;if(Array.isArray(t)?(r=t[0],s=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var i=!1,o=0,a=!1,l=[];r&&l.push(...Object.keys(r).map(Ms)),s&&l.push(...Object.keys(s).map(Ms));var f=0,v=-1;const y=e.length;for(var p=0;p<y;p++){var d=e[p];if(a?d==="/"&&e[p-1]==="*"&&(a=!1):i?i===d&&(i=!1):d==="/"&&e[p+1]==="*"?a=!0:d==='"'||d==="'"?i=d:d==="("?o++:d===")"&&o--,!a&&i===!1&&o===0){if(d===":"&&v===-1)v=p;else if(d===";"||p===y-1){if(v!==-1){var h=Ms(e.substring(f,v).trim());if(!l.includes(h)){d!==";"&&p++;var _=e.substring(f,p).trim();n+=" "+_+";"}}f=p+1,v=-1}}}}return r&&(n+=Vi(r)),s&&(n+=Vi(s,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function Lt(e,t,n,r,s,i){var o=e[js];if(o!==n||o===void 0){var a=yc(n,r,i);a==null?e.removeAttribute("class"):t?e.className=a:e.setAttribute("class",a),e[js]=n}else if(i&&s!==i)for(var l in i){var f=!!i[l];(s==null||f!==!!s[l])&&e.classList.toggle(l,f)}return i}function As(e,t={},n,r){for(var s in n){var i=n[s];t[s]!==i&&(n[s]==null?e.style.removeProperty(s):e.style.setProperty(s,i,r))}}function ta(e,t,n,r){var s=e[Vs];if(s!==t){var i=wc(t,r);i==null?e.removeAttribute("style"):e.style.cssText=i,e[Vs]=t}else r&&(Array.isArray(r)?(As(e,n==null?void 0:n[0],r[0]),As(e,n==null?void 0:n[1],r[1],"important")):As(e,n,r));return r}function na(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Hi(e,t){var n=!("__defaultValue"in e);!n&&e.__defaultValue===t||(e.__defaultValue=t,ra(e,!n||"__value"in e))}function ra(e,t){var n=e.__defaultValue,r=e.multiple,s=r?n??[]:null;if(!(r&&!fs(s))){var i=e.selectedIndex,o=t&&r?new Set(e.selectedOptions):null;for(var a of e.options){var l=wn(a);na(a,r?s.includes(l):Mo(l,n))}if(t)if(o!==null)for(a of e.options){var f=o.has(a);a.selected!==f&&(a.selected=f)}else e.selectedIndex!==i&&(e.selectedIndex=i)}}function On(e,t,n=!1){if(e.multiple){if(t==null)return;if(!fs(t))return sl();for(var r of e.options)r.selected=t.includes(wn(r));return}for(r of e.options){var s=wn(r);if(Mo(s,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function yn(e){var t=new MutationObserver(n=>{n.every(xc)||("__defaultValue"in e&&ra(e,!1),"__value"in e&&On(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),vs(()=>{t.disconnect()})}function ei(e,t,n=t){var r=new WeakSet,s=!0;ui(e,"change",i=>{var o=i?"[selected]":":checked",a;if(e.multiple)a=[].map.call(e.querySelectorAll(o),wn);else{var l=e.querySelector(o)??e.querySelector("option:not([disabled])");a=l&&wn(l)}n(a),e.__value=a,D!==null&&r.add(D)}),hs(()=>{var i=t();if(e===document.activeElement){var o=D;if(r.has(o))return}if(On(e,i,s),s&&i===void 0){var a=e.querySelector(":checked");a!==null&&(i=wn(a),n(i))}e.__value=i,s=!1})}function wn(e){return"__value"in e?e.__value:e.value}function xc(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(n=>n.nodeName==="SELECTEDCONTENT")}return!1}const Zn=Symbol("class"),Xn=Symbol("style"),sa=Symbol("is custom element"),ia=Symbol("is html"),$c=ai?"input":"INPUT",kc=ai?"option":"OPTION",oa=ai?"select":"SELECT";function me(e,t,n,r){var s=aa(e);s[t]!==(s[t]=n)&&(t==="loading"&&(e[Ka]=n),n==null?e.removeAttribute(t):typeof n!="string"&&la(e).has(t)?e[t]=n:e.setAttribute(t,n))}function Sc(e,t,n,r,s=!1,i=!1){var o=aa(e),a=o[sa],l=!o[ia],f=t||{},v=e.nodeName===kc,p=e.nodeName===oa;for(var d in t)!(d in n)&&d[0]+d[1]!=="$$"&&(n[d]=null);n.class?n.class=bc(n.class):n[Zn]&&(n.class=null),n[Xn]&&(n.style??(n.style=null));var h=la(e);if(e.nodeName===$c&&"type"in n&&("value"in n||"__value"in n)){var _=n.type;(_!==f.type||_===void 0&&e.hasAttribute("type"))&&(f.type=_,me(e,"type",_))}for(const C in n){let $=n[C];if(v&&C==="value"&&$==null){e.value=e.__value="",f[C]=$;continue}if(C==="class"){var y=e.namespaceURI==="http://www.w3.org/1999/xhtml";Lt(e,y,$,r,t==null?void 0:t[Zn],n[Zn]),f[C]=$,f[Zn]=n[Zn];continue}if(C==="style"){ta(e,$,t==null?void 0:t[Xn],n[Xn]),f[C]=$,f[Xn]=n[Xn];continue}var m=f[C];if(!($===m&&!($===void 0&&e.hasAttribute(C)))){f[C]=$;var E=C[0]+C[1];if(E!=="$$")if(E==="on"){const M={},X="$$"+C;let W=C.slice(2);var I=Wl(W);if(Ul(W)&&(W=W.slice(0,-7),M.capture=!0),!I&&m){if($!=null)continue;e.removeEventListener(W,f[X],M),f[X]=null}if(I)B(W,e,$),jt([W]);else if($!=null){let z=function(N){f[C].call(this,N)};f[X]=Zo(W,e,z,M)}}else if(C==="style")me(e,C,$);else if(C==="autofocus")bo(e,!!$);else if(!a&&(C==="__value"||C==="value"&&$!=null))e.value=e.__value=$;else if(C==="selected"&&v)na(e,$);else{var A=C;l||(A=Yl(A));var G=A==="defaultValue"||A==="defaultChecked";if(p&&A==="defaultValue")continue;if($==null&&!a&&!G)if(o[C]=null,A==="value"||A==="checked"){let M=e;const X=t===void 0;if(A==="value"){let W=M.defaultValue;M.removeAttribute(A),M.defaultValue=W,M.value=M.__value=X?W:null}else{let W=M.defaultChecked;M.removeAttribute(A),M.defaultChecked=W,M.checked=X?W:!1}}else e.removeAttribute(C);else G||(a||typeof $!="string")&&h.has(A)?(e[A]=$,A in o&&(o[A]=be)):typeof $!="function"&&me(e,A,$)}}}return f}function Bi(e,t,n=[],r=[],s=[],i,o=!1,a=!1){yo(s,n,r,l=>{var f=void 0,v={},p=e.nodeName===oa,d=!1;if(Do(()=>{var _=t(...l.map(c)),y=Sc(e,f,_,i,o,a);if(d&&p){var m=e;"defaultValue"in _&&Hi(m,_.defaultValue),"value"in _&&On(m,_.value)}for(let I of Object.getOwnPropertySymbols(v))_[I]||Pe(v[I]);for(let I of Object.getOwnPropertySymbols(_)){var E=_[I];I.description===nl&&(!f||E!==f[I])&&(v[I]&&Pe(v[I]),v[I]=Be(()=>gc(e,()=>E))),y[I]=E}f=y}),p){var h=e;hs(()=>{var _=f;"defaultValue"in _&&Hi(h,_.defaultValue),On(h,_.value,!0),yn(h)})}d=!0})}function aa(e){return e[Yr]??(e[Yr]={[sa]:e.nodeName.includes("-"),[ia]:e.namespaceURI===fo})}var Ki=new Map;function la(e){var t=e.getAttribute("is")||e.nodeName,n=Ki.get(t);if(n)return n;Ki.set(t,n=new Set);for(var r,s=e,i=Element.prototype;i!==s;){r=so(s);for(var o in r)r[o].set&&o!=="innerHTML"&&o!=="textContent"&&o!=="innerText"&&n.add(o);s=si(s)}return n}function Fe(e,t,n=t){var r=new WeakSet;ui(e,"input",async s=>{var i=s?e.defaultValue:e.value;if(i=Is(e)?Os(i):i,n(i),D!==null&&r.add(D),await Kl(),i!==(i=t())){var o=e.selectionStart,a=e.selectionEnd,l=e.value.length;if(e.value=i??"",a!==null){var f=e.value.length;o===a&&a===l&&f>l?(e.selectionStart=f,e.selectionEnd=f):(e.selectionStart=o,e.selectionEnd=Math.min(a,f))}}}),St(t)==null&&e.value&&(n(Is(e)?Os(e.value):e.value),D!==null&&r.add(D)),ps(()=>{var s=t();if(e===document.activeElement){var i=D;if(r.has(i))return}Is(e)&&s===Os(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function Ec(e,t,n=t){ui(e,"change",r=>{var s=r?e.defaultChecked:e.checked;n(s)}),St(t)==null&&n(e.checked),ps(()=>{var r=t();e.checked=!!r})}function Is(e){var t=e.type;return t==="number"||t==="range"}function Os(e){return e===""?null:+e}function zs(e,t){return e===t||(e==null?void 0:e[xt])===t}function gs(e=li(),t,n,r){var s=he.r,i=Z;return hs(()=>{var o,a;return ps(()=>{o=a,a=[],St(()=>{zs(n(...a),e)||(t(e,...a),o&&zs(n(...o),e)&&t(null,...o))})}),()=>{let l=i;for(;l!==s&&l.parent!==null&&l.parent.f&ns;)l=l.parent;const f=()=>{a&&zs(n(...a),e)&&t(null,...a)},v=l.teardown;l.teardown=()=>{f(),v==null||v()}}}),e}function ca(e=!1){const t=he,n=t.l.u;if(!n)return;let r=()=>Yt(t.s);if(e){let s=0,i={};const o=Mn(()=>{let a=!1;const l=t.s;for(const f in l)l[f]!==i[f]&&(i[f]=l[f],a=!0);return a&&s++,s});r=()=>c(o)}n.b.length&&Fl(()=>{Ui(t,r),Ds(n.b)}),un(()=>{const s=St(()=>n.m.map(Va));return()=>{for(const i of s)typeof i=="function"&&i()}}),n.a.length&&un(()=>{Ui(t,r),Ds(n.a)})}function Ui(e,t){if(e.l.s)for(const n of e.l.s)c(n);t()}function Cc(e){var t=Ft(0);return function(){return arguments.length===1?(w(t,c(t)+1),arguments[0]):(c(t),e())}}const Tc={get(e,t){if(!e.exclude.includes(t))return c(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var r=Z;try{st(e.parent_effect),e.special[t]=De({get[t](){return e.props[t]}},t,uo)}finally{st(r)}}return e.special[t](n),Ii(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),Ii(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function te(e,t){return new Proxy({props:e,exclude:t,special:{},version:Ft(0),parent_effect:Z},Tc)}const Nc={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(Yn(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let s=e.props[r];Yn(s)&&(s=s());const i=Ut(s,t);if(i&&i.set)return i.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(Yn(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const s=Ut(r,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===xt||t===lo)return!1;for(let n of e.props)if(Yn(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){const t=[];for(let n of e.props)if(Yn(n)&&(n=n()),!!n){for(const r in n)t.includes(r)||t.push(r);for(const r of Object.getOwnPropertySymbols(n))t.includes(r)||t.push(r)}return t}};function ie(...e){return new Proxy({props:e},Nc)}function De(e,t,n,r){var G;var s=!Fn||(n&Ja)!==0,i=(n&Za)!==0,o=(n&Xa)!==0,a=r,l=!0,f=void 0,v=()=>o&&s?(f??(f=Mn(r)),c(f)):(l&&(l=!1,a=o?St(r):r),a);let p;if(i){var d=xt in e||lo in e;p=((G=Ut(e,t))==null?void 0:G.set)??(d&&t in e?C=>e[t]=C:void 0)}var h,_=!1;i?[h,_]=wl(()=>e[t]):h=e[t],h===void 0&&r!==void 0&&(h=v(),p&&(s&&vl(),p(h)));var y;if(s?y=()=>{var C=e[t];return C===void 0?v():(l=!0,C)}:y=()=>{var C=e[t];return C!==void 0&&(a=void 0),C===void 0?a:C},s&&(n&uo)===0)return y;if(p){var m=e.$$legacy;return(function(C,$){return arguments.length>0?((!s||!$||m||_)&&p($?y():C),C):y()})}var E=!1,I=((n&Ya)!==0?Mn:fi)(()=>(E=!1,y()));i&&c(I);var A=Z;return(function(C,$){if(arguments.length>0){const M=$?c(I):s&&i?Ee(C):C;return w(I,M),E=!0,a!==void 0&&(a=M),C}return Dt&&E||(A.f&Ue)!==0?I.v:c(I)})}function Fr(e){he===null&&po(),Fn&&he.l!==null?Pc(he).m.push(e):un(()=>{const t=St(e);if(typeof t=="function")return t})}function bi(e){he===null&&po(),Fr(()=>()=>St(e))}function Pc(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const Mc="5";var no;typeof window<"u"&&((no=window.__svelte??(window.__svelte={})).v??(no.v=new Set)).add(Mc);const ti=()=>window.__IDE_BOOTSTRAP__||{};function Ac(e){const{rootPath:t="",session:n=""}=ti();return`${t}/api/sessions/${encodeURIComponent(n)}/ide${e}`}async function Ve(e,t={}){const n=await fetch(Ac(e),t),r=await n.json().catch(()=>({}));if(!n.ok)throw new Error(r.error||"Request failed");return r}const Je=(e,t)=>`/ssh-connections/${encodeURIComponent(e)}${t}`,ye={chat:async(e,t=80)=>{const{rootPath:n=""}=ti(),r=`${n}/api/sessions/${encodeURIComponent(e)}/ide/chat?limit=${t}`,s=await fetch(r),i=await s.json().catch(()=>({}));if(!s.ok)throw new Error(i.error||"Could not load chat");return i},browse:async(e="")=>{const{rootPath:t=""}=ti(),n=`${t}/api/ide/browse?path=${encodeURIComponent(e)}`,r=await fetch(n),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not browse folders");return s},listConnections:()=>Ve("/ssh-connections"),createConnection:e=>Ve("/ssh-connections",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),deleteConnection:e=>Ve(Je(e,""),{method:"DELETE"}),connect:(e,t)=>Ve(Je(e,"/connect"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t||""})}),status:e=>Ve(Je(e,"/status?reconnect=1")),listFiles:(e,t)=>Ve(Je(e,`/files?path=${encodeURIComponent(t)}`)),searchFiles:(e,t,n)=>Ve(Je(e,`/files/search?path=${encodeURIComponent(t)}&query=${encodeURIComponent(n)}`)),readFile:(e,t)=>Ve(Je(e,`/file?path=${encodeURIComponent(t)}`)),saveFile:(e,t,n)=>Ve(Je(e,"/file"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:t,content:n})}),fs:(e,t)=>Ve(Je(e,"/fs"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),git:(e,t)=>Ve(Je(e,"/git"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),focusTerminal:e=>Ve(Je(e,"/focus-terminal"),{method:"POST"}),getWorkspace:e=>Ve(Je(e,"/workspace")),saveWorkspace:(e,t)=>Ve(Je(e,"/workspace"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})};var gr,mr,br,yr,wr,xr,$r,kr,Sr,Er,Cr,Tr,Nr,Pr,Mr,Ar;class Ic{constructor(){O(this,gr,R(Ee([])));O(this,mr,R(""));O(this,br,R("idle"));O(this,yr,R("Ready"));O(this,wr,R("No file open"));O(this,xr,R("."));O(this,$r,R(Ee([])));O(this,kr,R(Ee({})));O(this,Sr,R(Ee({})));O(this,Er,R(""));O(this,Cr,R(Ee([])));O(this,Tr,R(""));O(this,Nr,R(""));O(this,Pr,R(""));O(this,Mr,R(Ee([])));O(this,Ar,R(""));Oe(this,"restoredKey","");Oe(this,"persistTimer",null)}get connections(){return c(u(this,gr))}set connections(t){w(u(this,gr),t,!0)}get connectionId(){return c(u(this,mr))}set connectionId(t){w(u(this,mr),t,!0)}get connectionState(){return c(u(this,br))}set connectionState(t){w(u(this,br),t,!0)}get statusText(){return c(u(this,yr))}set statusText(t){w(u(this,yr),t,!0)}get detailText(){return c(u(this,wr))}set detailText(t){w(u(this,wr),t,!0)}get path(){return c(u(this,xr))}set path(t){w(u(this,xr),t,!0)}get entries(){return c(u(this,$r))}set entries(t){w(u(this,$r),t,!0)}get expanded(){return c(u(this,kr))}set expanded(t){w(u(this,kr),t,!0)}get treeChildren(){return c(u(this,Sr))}set treeChildren(t){w(u(this,Sr),t,!0)}get filter(){return c(u(this,Er))}set filter(t){w(u(this,Er),t,!0)}get tabs(){return c(u(this,Cr))}set tabs(t){w(u(this,Cr),t,!0)}get activeKey(){return c(u(this,Tr))}set activeKey(t){w(u(this,Tr),t,!0)}get gitOutput(){return c(u(this,Nr))}set gitOutput(t){w(u(this,Nr),t,!0)}get gitStatus(){return c(u(this,Pr))}set gitStatus(t){w(u(this,Pr),t,!0)}get gitBranches(){return c(u(this,Mr))}set gitBranches(t){w(u(this,Mr),t,!0)}get gitBranch(){return c(u(this,Ar))}set gitBranch(t){w(u(this,Ar),t,!0)}get connection(){return this.connections.find(t=>t.id===this.connectionId)||null}get activeTab(){return this.tabs.find(t=>t.key===this.activeKey)||null}get visibleEntries(){const t=this.filter.trim().toLowerCase();return t?this.entries.filter(n=>n.name.toLowerCase().includes(t)):this.entries}get dirtyCount(){return this.tabs.filter(t=>t.dirty).length}setStatus(t,n){this.statusText=t,n!==void 0&&(this.detailText=n)}async loadConnections(){try{const t=await ye.listConnections();this.connections=t.connections||[],!this.connectionId&&this.connections.length&&(this.connectionId=this.connections[0].id)}catch(t){this.setStatus(t.message||"Could not load connections")}}async refreshStatus(){var t,n,r;if(this.connectionId)try{const s=await ye.status(this.connectionId);s.connected?(this.connectionState="connected",this.setStatus(`Connected · ${((t=this.connection)==null?void 0:t.label)||"SSH workspace"}`,`SSH terminal: ${s.window_name||"open"}`),await this.restoreWorkspace()):(this.connectionState="reconnect",this.entries=[],this.setStatus(`Reconnect required · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,(r=this.connection)!=null&&r.has_password?"Auto-reconnect failed — select Connect to retry":"Select Connect to reopen SSH"))}catch(s){this.connectionState="error",this.setStatus(s.message||"Could not check SSH connection")}}async connect(t){var n;if(this.connectionId){this.connectionState="connecting",this.setStatus("Connecting…");try{const r=await ye.connect(this.connectionId,t);this.connectionState="connected",this.setStatus(`Connected · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,`SSH terminal: ${r.window_name||"open"}`),await this.restoreWorkspace()}catch(r){this.connectionState="error",this.setStatus(r.message||"Could not connect")}}}async refreshFiles(t){if(!this.connectionId)return;const n=t||this.path||".";try{const r=await ye.listFiles(this.connectionId,n);this.path=r.path||n,this.entries=r.entries||[],this.remember()}catch(r){this.setStatus(r.message||"Could not list remote files")}}async toggleDirectory(t){if(this.expanded[t]){const n={...this.expanded};delete n[t],this.expanded=n;return}if(this.expanded={...this.expanded,[t]:!0},!this.treeChildren[t])try{const n=await ye.listFiles(this.connectionId,t);this.treeChildren={...this.treeChildren,[t]:n.entries||[]}}catch(n){this.setStatus(n.message||"Could not expand folder")}}async openFile(t){if(!this.connectionId)return null;const n=`${this.connectionId}|${t}`,r=this.tabs.find(s=>s.key===n);if(r)return this.activeKey=n,r;try{const s=await ye.readFile(this.connectionId,t),i={key:`${this.connectionId}|${s.path}`,path:s.path,content:s.content||"",saved:s.content||"",dirty:!1};return this.tabs=[...this.tabs,i],this.activeKey=i.key,this.setStatus("Opened",i.path),this.remember(),i}catch(s){return this.setStatus(s.message||"Could not open remote file"),null}}updateContent(t,n){this.tabs=this.tabs.map(r=>r.key===t?{...r,content:n,dirty:n!==r.saved}:r),this.remember()}closeTab(t){var r;const n=this.tabs.find(s=>s.key===t);n!=null&&n.dirty&&!confirm(`Discard unsaved changes to ${n.path}?`)||(this.tabs=this.tabs.filter(s=>s.key!==t),this.activeKey===t&&(this.activeKey=((r=this.tabs.at(-1))==null?void 0:r.key)||""),this.remember())}async saveActive(){const t=this.activeTab;if(t)try{await ye.saveFile(this.connectionId,t.path,t.content),this.tabs=this.tabs.map(n=>n.key===t.key?{...n,saved:n.content,dirty:!1}:n),this.setStatus(`Saved ${t.path}`,t.path),this.remember()}catch(n){this.setStatus(n.message||"Could not save file")}}async restoreWorkspace(){const t=`${this.connectionId}`;if(!t)return;let n=null;try{n=await ye.getWorkspace(this.connectionId)}catch{n=null}if(await this.refreshFiles((n==null?void 0:n.last_directory)||"."),this.restoredKey===t)return;this.restoredKey=t;const r=(n==null?void 0:n.buffers)||{};for(const i of((n==null?void 0:n.tabs)||[]).slice(0,12)){const o=await this.openFile(i);o&&Object.prototype.hasOwnProperty.call(r,i)&&this.updateContent(o.key,r[i])}const s=this.tabs.find(i=>i.path===(n==null?void 0:n.active_path));s&&(this.activeKey=s.key)}remember(){this.persistTimer&&clearTimeout(this.persistTimer),this.persistTimer=setTimeout(()=>this.persist(),1500)}async persist(){var n;if(!this.connectionId)return;const t={};for(const r of this.tabs)r.dirty&&(t[r.path]=r.content);try{await ye.saveWorkspace(this.connectionId,{tabs:this.tabs.map(r=>r.path).slice(0,50),active_path:((n=this.activeTab)==null?void 0:n.path)||"",last_directory:this.path||".",buffers:t})}catch{}}async runGit(t,n={}){try{const r=await ye.git(this.connectionId,{action:t,path:this.path||".",...n});return this.gitOutput=r.output||r.status||"",this.gitStatus=r.status||"",this.gitBranches=r.branches||[],this.gitBranch=r.current_branch||"",r}catch(r){return this.gitOutput=r.message||"Git command failed",null}}}gr=new WeakMap,mr=new WeakMap,br=new WeakMap,yr=new WeakMap,wr=new WeakMap,xr=new WeakMap,$r=new WeakMap,kr=new WeakMap,Sr=new WeakMap,Er=new WeakMap,Cr=new WeakMap,Tr=new WeakMap,Nr=new WeakMap,Pr=new WeakMap,Mr=new WeakMap,Ar=new WeakMap;const g=new Ic;ml();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Oc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const zc=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const qi=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();var Rc=Qo("<svg><!><!></svg>");function oe(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]),r=te(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);ot(t,!1);let s=De(t,"name",8,void 0),i=De(t,"color",8,"currentColor"),o=De(t,"size",8,24),a=De(t,"strokeWidth",8,2),l=De(t,"absoluteStrokeWidth",8,!1),f=De(t,"iconNode",24,()=>[]);ca();var v=Rc();Bi(v,(h,_,y)=>({...Oc,...h,...r,width:o(),height:o(),stroke:i(),"stroke-width":_,class:y}),[()=>zc(r)?void 0:{"aria-hidden":"true"},()=>(Yt(l()),Yt(a()),Yt(o()),St(()=>l()?Number(a())*24/Number(o()):a())),()=>(Yt(qi),Yt(s()),Yt(n),St(()=>qi("lucide-icon","lucide",s()?`lucide-${s()}`:"",n.class)))]);var p=k(v);it(p,1,f,dc,(h,_)=>{var y=et(()=>Ha(c(_),2));let m=()=>c(y)[0],E=()=>c(y)[1];var I=J(),A=j(I);_c(A,m,!0,(G,C)=>{Bi(G,()=>({...E()}))}),x(h,I)});var d=b(p);re(d,t,"default",{}),x(e,v),at()}function ua(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];oe(e,ie({name:"chevron-down"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Fc(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m9 18 6-6-6-6"}]];oe(e,ie({name:"chevron-right"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Wi(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];oe(e,ie({name:"circle-alert"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Dc(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];oe(e,ie({name:"circle-check"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Lc(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]];oe(e,ie({name:"circle-dot"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function jc(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];oe(e,ie({name:"circle"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Vc(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}],["path",{d:"m9 10-5 5 5 5"}]];oe(e,ie({name:"corner-down-left"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Hc(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]];oe(e,ie({name:"corner-left-up"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Bc(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];oe(e,ie({name:"external-link"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Gi(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m5 16-3 3 3 3"}],["path",{d:"m9 22 3-3-3-3"}]];oe(e,ie({name:"file-code-corner"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Kc(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]];oe(e,ie({name:"file-diff"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Uc(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 14V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M14 18h6"}]];oe(e,ie({name:"file-minus-corner"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Yi(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M14 19h6"}],["path",{d:"M17 16v6"}]];oe(e,ie({name:"file-plus-corner"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function qc(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]];oe(e,ie({name:"file-plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function fa(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}]];oe(e,ie({name:"file"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Wc(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"}]];oe(e,ie({name:"files"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Rs(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];oe(e,ie({name:"folder-open"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Gc(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];oe(e,ie({name:"folder-plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Yc(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];oe(e,ie({name:"folder"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Jc(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 3v12"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M15 6a9 9 0 0 0-9 9"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]];oe(e,ie({name:"git-branch-plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Ji(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 6a9 9 0 0 0-9 9V3"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}]];oe(e,ie({name:"git-branch"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Zc(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 3v6"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 15v6"}]];oe(e,ie({name:"git-commit-vertical"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Xc(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 16h.01"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["path",{d:"M21.946 12.013H2.054"}],["path",{d:"M6 16h.01"}]];oe(e,ie({name:"hard-drive"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Qc(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];oe(e,ie({name:"link-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function da(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]];oe(e,ie({name:"loader"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function eu(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}]];oe(e,ie({name:"message-square"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function tu(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}]];oe(e,ie({name:"panel-bottom"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function nu(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];oe(e,ie({name:"plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function va(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];oe(e,ie({name:"refresh-cw"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function ru(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];oe(e,ie({name:"search"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function su(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]];oe(e,ie({name:"send"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function Fs(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];oe(e,ie({name:"server"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function iu(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]];oe(e,ie({name:"square-terminal"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function ou(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];oe(e,ie({name:"trash-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}function ni(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];oe(e,ie({name:"x"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=J(),a=j(o);re(a,t,"default",{}),x(s,o)},$$slots:{default:!0}}))}var au=L('<span class="w-[14px] shrink-0"></span>'),lu=Qo('<svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1.5 3.5h4l1.2 1.4h7.8v7.6H1.5z" fill="#c09553"></path></svg>'),cu=L('<div role="treeitem" tabindex="0"><!> <span class="flex shrink-0 items-center"><!></span> <span class="flex-1 truncate text-vs-fg"> </span> <span class="hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Rename"><span class="text-[11px] leading-none">✎</span></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Delete"><span class="text-[11px] leading-none">🗑</span></button></span></div> <!>',1);function ha(e,t){ot(t,!0);const n=et(()=>t.dir==="."?t.entry.name:`${t.dir}/${t.entry.name}`),r=et(()=>!!g.expanded[c(n)]),s=et(()=>g.treeChildren[c(n)]||[]),i=et(()=>{var N;return((N=g.activeTab)==null?void 0:N.path)===c(n)});async function o(){t.entry.is_dir?await g.toggleDirectory(c(n)):await g.openFile(c(n))}async function a(N){if(N.stopPropagation(),!!confirm(`Delete ${c(n)}? Folders must already be empty.`))try{await ye.fs(g.connectionId,{action:"delete",path:c(n)}),await g.refreshFiles()}catch(V){g.setStatus(V.message||"Could not delete")}}async function l(N){N.stopPropagation();const V=prompt("Rename to (relative path):",c(n));if(!(!V||V===c(n)))try{await ye.fs(g.connectionId,{action:"rename",path:c(n),new_path:V}),await g.refreshFiles()}catch(F){g.setStatus(F.message||"Could not rename")}}var f=cu(),v=j(f);let p;var d=k(v);{var h=N=>{var V=J(),F=j(V);{var Y=T=>{ua(T,{size:14,class:"shrink-0 text-vs-muted"})},ge=T=>{Fc(T,{size:14,class:"shrink-0 text-vs-muted"})};Q(F,T=>{c(r)?T(Y):T(ge,-1)})}x(N,V)},_=N=>{var V=au();x(N,V)};Q(d,N=>{t.entry.is_dir?N(h):N(_,-1)})}var y=b(d,2),m=k(y);{var E=N=>{var V=lu();x(N,V)},I=N=>{Qc(N,{size:14,class:"text-vs-muted"})},A=N=>{fa(N,{size:14,class:"text-vs-blue"})};Q(m,N=>{t.entry.is_dir?N(E):t.entry.is_symlink?N(I,1):N(A,-1)})}var G=b(y,2),C=ve(G,!0),$=b(G,2),M=k($),X=b(M,2),W=b(v,2);{var z=N=>{var V=J(),F=j(V);it(F,17,()=>c(s),Y=>Y.name,(Y,ge)=>{{let T=et(()=>t.depth+1);ha(Y,{get entry(){return c(ge)},get dir(){return c(n)},get depth(){return c(T)}})}}),x(N,V)};Q(W,N=>{t.entry.is_dir&&c(r)&&N(z)})}le(()=>{p=Lt(v,1,"group flex cursor-pointer items-center gap-1 py-[2px] pr-1 text-[13px] hover:bg-vs-hover",null,p,{"bg-vs-active":c(i)}),ta(v,`padding-left: ${8+t.depth*12}px`),me(v,"aria-expanded",t.entry.is_dir?c(r):void 0),me(v,"aria-selected",c(i)),me(v,"title",c(n)),ce(C,t.entry.name),me(M,"aria-label",`Rename ${t.entry.name??""}`),me(X,"aria-label",`Delete ${t.entry.name??""}`)}),B("click",v,o),B("keydown",v,N=>{(N.key==="Enter"||N.key===" ")&&(N.preventDefault(),o())}),B("click",M,l),B("click",X,a),x(e,f),at()}jt(["click","keydown"]);var uu=L('<form class="px-2 pb-1"><input class="w-full rounded-sm border border-vs-accent bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none"/></form>'),fu=L('<p class="px-4 py-2 text-xs text-vs-muted">No folder opened.</p>'),du=L('<p class="px-4 py-2 text-xs text-vs-muted">No files here</p>'),vu=L('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-vs-fg uppercase"><span class="flex-1 truncate">Explorer</span></div> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold text-vs-fg uppercase"><!> <span class="flex-1 truncate"> </span> <span class="flex opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-1 hover:bg-vs-hover" title="New file" aria-label="New file"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="New folder" aria-label="New folder"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="Refresh" aria-label="Refresh"><!></button></span></div> <!> <input class="mx-2 mb-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none focus:border-vs-accent" placeholder="Filter files…"/> <div class="min-h-0 flex-1 overflow-y-auto pb-2"><!></div></div>');function hu(e,t){ot(t,!0);let n=R(""),r=R("");const s=(z,N)=>z==="."?N:`${z}/${N}`;async function i(z){z.preventDefault();const N=c(r).trim();if(N)try{await ye.fs(g.connectionId,{action:c(n)==="dir"?"create_dir":"create_file",path:s(g.path,N)}),w(n,""),w(r,""),await g.refreshFiles()}catch(V){g.setStatus(V.message||"Could not create")}}const o=et(()=>{var z,N;return(((z=g.connection)==null?void 0:z.workspace_root)||"").split("/").filter(Boolean).pop()||((N=g.connection)==null?void 0:N.label)||"WORKSPACE"});var a=vu(),l=b(k(a),2),f=k(l);ua(f,{size:14,class:"shrink-0 text-vs-muted"});var v=b(f,2),p=ve(v,!0),d=b(v,2),h=k(d),_=k(h);qc(_,{size:14});var y=b(h,2),m=k(y);Gc(m,{size:14});var E=b(y,2),I=k(E);va(I,{size:13});var A=b(l,2);{var G=z=>{var N=uu(),V=k(N);bo(V,!0),le(()=>me(V,"placeholder",c(n)==="dir"?"New folder name":"New file name")),ur("submit",N,i),B("keydown",V,F=>{F.key==="Escape"&&w(n,"")}),ur("blur",V,()=>{c(r).trim()||w(n,"")}),Fe(V,()=>c(r),F=>w(r,F)),x(z,N)};Q(A,z=>{c(n)&&z(G)})}var C=b(A,2),$=b(C,2),M=k($);{var X=z=>{var N=fu();x(z,N)},W=z=>{var N=J(),V=j(N);it(V,17,()=>g.visibleEntries,F=>F.name,(F,Y)=>{ha(F,{get entry(){return c(Y)},get dir(){return g.path},depth:0})},F=>{var Y=du();x(F,Y)}),x(z,N)};Q(M,z=>{g.connectionId?z(W,-1):z(X)})}le(()=>{var z;me(v,"title",(z=g.connection)==null?void 0:z.workspace_root),ce(p,c(o))}),B("click",h,()=>{w(n,"file"),w(r,"")}),B("click",y,()=>{w(n,"dir"),w(r,"")}),B("click",E,()=>g.refreshFiles()),Fe(C,()=>g.filter,z=>g.filter=z),x(e,a),at()}jt(["click","keydown"]);var pu=L('<div class="branch svelte-1skdisl">On <strong> </strong></div>'),_u=L('<li class="svelte-1skdisl"><label class="svelte-1skdisl"><input type="checkbox"/> <span> </span> <span class="file svelte-1skdisl"> </span></label></li>'),gu=L('<ul class="changes svelte-1skdisl"></ul> <div class="row svelte-1skdisl"><button class="svelte-1skdisl"><!> </button> <button class="svelte-1skdisl"><!> Unstage</button></div>',1),mu=L("<option> </option>"),bu=L('<select class="svelte-1skdisl"></select>'),yu=L('<div class="git svelte-1skdisl"><div class="row svelte-1skdisl"><button class="svelte-1skdisl"><!> Status</button> <button class="svelte-1skdisl"><!> Diff</button> <button class="svelte-1skdisl"><!> Stage all</button></div> <!> <!> <!> <div class="row svelte-1skdisl"><input placeholder="New branch…" class="svelte-1skdisl"/> <button class="svelte-1skdisl"><!> Create</button></div> <div class="row svelte-1skdisl"><input placeholder="Commit message…" class="svelte-1skdisl"/> <button class="svelte-1skdisl"><!> Commit</button></div> <pre class="output svelte-1skdisl"> </pre></div>');function wu(e,t){ot(t,!0);let n=R(""),r=R(""),s=R(Ee({}));const i=et(()=>(g.gitStatus||"").split(`
`).filter(P=>P&&!P.startsWith("##")).map(P=>({code:P.slice(0,2).trim()||"??",path:P.slice(3).trim()})).filter(P=>P.path)),o=et(()=>c(i).filter(P=>c(s)[P.path]).map(P=>P.path));async function a(P){c(o).length&&(await g.runGit(P,{files:c(o)}),w(s,{},!0))}async function l(){if(!c(n).trim())return;await g.runGit("commit",{message:c(n).trim()})&&w(n,"")}async function f(){if(!c(r).trim())return;await g.runGit("create_branch",{branch:c(r).trim()})&&w(r,"")}var v=yu(),p=k(v),d=k(p),h=k(d);va(h,{size:13});var _=b(d,2),y=k(_);Kc(y,{size:13});var m=b(_,2),E=k(m);Yi(E,{size:13});var I=b(p,2);{var A=P=>{var K=pu(),ae=b(k(K)),Ae=ve(ae,!0);le(()=>ce(Ae,g.gitBranch)),x(P,K)};Q(I,P=>{g.gitBranch&&P(A)})}var G=b(I,2);{var C=P=>{var K=gu(),ae=j(K);it(ae,21,()=>c(i),fn=>fn.path,(fn,Nt)=>{var Hn=_u(),ms=k(Hn),Bn=k(ms),Kn=b(Bn,2);let Lr;var jr=ve(Kn,!0),Vr=b(Kn,2),Hr=ve(Vr,!0);le(()=>{Lr=Lt(Kn,1,"code svelte-1skdisl",null,Lr,{staged:c(Nt).code[0]!=="?"&&c(Nt).code[0]!==" "}),ce(jr,c(Nt).code),me(Vr,"title",c(Nt).path),ce(Hr,c(Nt).path)}),Ec(Bn,()=>c(s)[c(Nt).path],bs=>c(s)[c(Nt).path]=bs),x(fn,Hn)});var Ae=b(ae,2),Et=k(Ae),Ct=k(Et);Yi(Ct,{size:13});var Vn=b(Ct),Tt=b(Et,2),Dr=k(Tt);Uc(Dr,{size:13}),le(()=>{Et.disabled=!c(o).length,ce(Vn,` Stage (${c(o).length??""})`),Tt.disabled=!c(o).length}),B("click",Et,()=>a("stage")),B("click",Tt,()=>a("unstage")),x(P,K)};Q(G,P=>{c(i).length&&P(C)})}var $=b(G,2);{var M=P=>{var K=bu();it(K,20,()=>g.gitBranches,Ae=>Ae,(Ae,Et)=>{var Ct=mu(),Vn=ve(Ct,!0),Tt={};le(()=>{ce(Vn,Et),Tt!==(Tt=Et)&&(Ct.value=(Ct.__value=Tt)??"")}),x(Ae,Ct)});var ae;yn(K),le(()=>{ae!==(ae=g.gitBranch)&&(K.value=(K.__value=ae)??"",On(K,ae))}),B("change",K,Ae=>g.runGit("switch",{branch:Ae.currentTarget.value})),x(P,K)};Q($,P=>{g.gitBranches.length&&P(M)})}var X=b($,2),W=k(X),z=b(W,2),N=k(z);Jc(N,{size:13});var V=b(X,2),F=k(V),Y=b(F,2),ge=k(Y);Zc(ge,{size:13});var T=b(V,2),q=ve(T,!0);le(()=>ce(q,g.gitOutput||"No git output yet.")),B("click",d,()=>g.runGit("status")),B("click",_,()=>g.runGit("diff")),B("click",m,()=>g.runGit("stage",{files:["."]})),Fe(W,()=>c(r),P=>w(r,P)),B("click",z,f),Fe(F,()=>c(n),P=>w(n,P)),B("click",Y,l),x(e,v),at()}jt(["click","change"]);const xu="modulepreload",$u=function(e,t){return new URL(e,t).href},Zi={},es=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(v){return Promise.all(v.map(p=>Promise.resolve(p).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const a=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),f=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=o(n.map(v=>{if(v=$u(v,r),v in Zi)return;Zi[v]=!0;const p=v.endsWith(".css"),d=p?'[rel="stylesheet"]':"";if(!!r)for(let y=a.length-1;y>=0;y--){const m=a[y];if(m.href===v&&(!p||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${v}"]${d}`))return;const _=document.createElement("link");if(_.rel=p?"stylesheet":xu,p||(_.as="script"),_.crossOrigin="",_.href=v,f&&_.setAttribute("nonce",f),document.head.appendChild(_),p)return new Promise((y,m)=>{_.addEventListener("load",y),_.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${v}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})},ir={base:"vs-dark",inherit:!0,rules:[{token:"",foreground:"f8f8f2",background:"272822"},{token:"comment",foreground:"75715e",fontStyle:"italic"},{token:"string",foreground:"e6db74"},{token:"constant",foreground:"ae81ff"},{token:"number",foreground:"ae81ff"},{token:"keyword",foreground:"f92672"},{token:"operator",foreground:"f92672"},{token:"delimiter",foreground:"f8f8f2"},{token:"type",foreground:"66d9ef",fontStyle:"italic"},{token:"function",foreground:"a6e22e"},{token:"variable",foreground:"f8f8f2"},{token:"variable.parameter",foreground:"fd971f",fontStyle:"italic"},{token:"tag",foreground:"f92672"},{token:"attribute.name",foreground:"a6e22e"},{token:"attribute.value",foreground:"e6db74"},{token:"regexp",foreground:"e6db74"}],colors:{"editor.background":"#272822","editor.foreground":"#f8f8f2","editor.lineHighlightBackground":"#3e3d32","editor.selectionBackground":"#49483e","editorCursor.foreground":"#f8f8f0","editorWhitespace.foreground":"#3b3a32","editorLineNumber.foreground":"#90908a","editorLineNumber.activeForeground":"#f8f8f2","editorIndentGuide.background":"#3b3a32","editorGutter.background":"#272822"}},ku={py:"python",js:"javascript",mjs:"javascript",cjs:"javascript",ts:"typescript",tsx:"typescript",jsx:"javascript",json:"json",md:"markdown",html:"html",htm:"html",css:"css",scss:"scss",less:"less",sh:"shell",bash:"shell",zsh:"shell",yml:"yaml",yaml:"yaml",toml:"ini",ini:"ini",cfg:"ini",sql:"sql",go:"go",rs:"rust",rb:"ruby",php:"php",java:"java",c:"c",h:"c",cpp:"cpp",hpp:"cpp",cs:"csharp",svelte:"html",vue:"html",xml:"xml",dockerfile:"dockerfile"};function Su(e){var n;const t=(e||"").split("/").pop()||"";return t.toLowerCase()==="dockerfile"?"dockerfile":t.toLowerCase()==="makefile"?"shell":ku[(n=t.split(".").pop())==null?void 0:n.toLowerCase()]||"plaintext"}var Eu=L('<div class="editor svelte-1h8xysy"></div>');function Cu(e,t){ot(t,!0);let n,r=null,s=null,i="",o=!1;Fr(async()=>{s=await es(()=>import("./ide-monaco.js").then(l=>l.a),__vite__mapDeps([0,1]),import.meta.url),s.editor.defineTheme("monokai",ir),r=s.editor.create(n,{value:"",theme:"monokai",automaticLayout:!0,fontSize:13,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",minimap:{enabled:!0},scrollBeyondLastLine:!1,renderWhitespace:"selection",tabSize:2}),r.onDidChangeModelContent(()=>{o||!i||g.updateContent(i,r.getValue())}),r.addCommand(s.KeyMod.CtrlCmd|s.KeyCode.KeyS,()=>g.saveActive())}),bi(()=>r==null?void 0:r.dispose()),un(()=>{const l=g.activeTab;if(!(!r||!s)){if(!l){o=!0,r.setValue(""),i="",o=!1;return}if(l.key!==i){o=!0;const f=s.editor.createModel(l.content,Su(l.path)),v=r.getModel();r.setModel(f),v==null||v.dispose(),i=l.key,o=!1}else r.getValue()!==l.content&&(o=!0,r.setValue(l.content),o=!1)}});var a=Eu();gs(a,l=>n=l,()=>n),x(e,a),at()}var Ht=Cc(()=>g),Tu=L('<span class="h-2 w-2 rounded-full bg-vs-fg group-hover:hidden"></span> <!>',1),Nu=L('<div><button class="flex items-center gap-1.5 py-2 pr-1 pl-3" role="tab"><!> <span class="whitespace-nowrap"> </span></button> <button class="mr-1.5 flex h-5 w-5 items-center justify-center rounded-sm hover:bg-vs-line"><!></button></div>'),Pu=L('<div class="px-3 py-2 text-xs text-vs-muted">Open a file from the Explorer</div>'),Mu=L('<div class="flex min-h-[35px] items-stretch overflow-x-auto bg-vs-tabinactive" role="tablist"></div>');function Au(e,t){ot(t,!1);const n=s=>s.split("/").pop();ca();var r=Mu();it(r,5,()=>Ht().tabs,s=>s.key,(s,i)=>{var o=Nu();let a;var l=k(o),f=k(l);fa(f,{size:14,class:"shrink-0 text-vs-blue"});var v=b(f,2),p=ve(v,!0),d=b(l,2),h=k(d);{var _=m=>{var E=Tu(),I=b(j(E),2);ni(I,{size:14,class:"hidden group-hover:block"}),x(m,E)},y=m=>{ni(m,{size:14,class:"opacity-0 group-hover:opacity-100"})};Q(h,m=>{c(i).dirty?m(_):m(y,-1)})}le((m,E)=>{a=Lt(o,1,"group flex items-center border-r border-vs-bg text-[13px]",null,a,{"bg-vs-tabactive":c(i).key===Ht().activeKey,"text-vs-bright":c(i).key===Ht().activeKey,"text-vs-muted":c(i).key!==Ht().activeKey}),me(l,"aria-selected",c(i).key===Ht().activeKey),me(l,"title",c(i).path),ce(p,m),me(d,"title",c(i).dirty?"Unsaved changes — close":"Close"),me(d,"aria-label",`Close ${E??""}`)},[()=>n(c(i).path),()=>n(c(i).path)]),B("click",l,()=>Ht(Ht().activeKey=c(i).key)),B("click",d,()=>Ht().closeTab(c(i).key)),x(s,o)},s=>{var i=Pu();x(s,i)}),x(e,r),at()}jt(["click"]);var Iu=L("<option> </option>"),Ou=L('<p class="error svelte-1roe1v9"> </p>'),zu=L("<div> </div>"),Ru=L(`<p class="empty svelte-1roe1v9">Ask about the active remote file. The prompt is delivered to the selected
          agent session — pick a Codex session or a Claude session to choose which
          assistant answers, and replies appear here.</p>`),Fu=L('<div class="chat svelte-1roe1v9"><div class="head svelte-1roe1v9"><span class="title svelte-1roe1v9">AI chat</span> <select title="Agent session to send to" class="svelte-1roe1v9"></select></div> <div class="messages svelte-1roe1v9"><!> <!></div> <div class="compose svelte-1roe1v9"><textarea placeholder="Ask about the active remote file… (⌘/Ctrl+Enter to send)" class="svelte-1roe1v9"></textarea> <button class="svelte-1roe1v9"><!> </button></div></div>');function Du(e,t){ot(t,!0);let n=De(t,"sessions",19,()=>[]),r=De(t,"session",3,""),s=De(t,"rootPath",3,""),i=R(""),o=R(Ee(r()||n()[0]||"")),a=R(!1),l=R(Ee([])),f=R(""),v=R(null),p=null;async function d(){if(c(o))try{const q=(await ye.chat(c(o))).messages||[],P=q.length!==c(l).length;w(l,q,!0),w(f,""),P&&queueMicrotask(h)}catch(T){w(f,T.message||"Could not load chat",!0)}}function h(){c(v)&&(c(v).scrollTop=c(v).scrollHeight)}un(()=>{const T=c(o);w(l,[],!0),p&&clearInterval(p),T&&(d(),p=setInterval(d,3e3))}),bi(()=>{p&&clearInterval(p)});function _(){const T=g.connection||{},q=g.activeTab,P=q?q.path:g.path||".",K=q?`
Active file contents (first 12,000 characters):
${q.content.slice(0,12e3)}`:"";return`[Remote SSH IDE context]
SSH target: ${T.username||"?"}@${T.host||"?"}
Remote path: ${P}${K}

${c(i).trim()}`}async function y(){const T=c(i).trim();if(!T||!c(o)||c(a))return;const q=_();w(a,!0);try{const P=await fetch(`${s()}/api/sessions/${encodeURIComponent(c(o))}/send`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:q})}),K=await P.json().catch(()=>({}));if(!P.ok)throw new Error(K.error||"Could not send");w(i,""),w(l,[...c(l),{role:"user",text:T,ts:Date.now()/1e3,_local:!0}],!0),queueMicrotask(h),setTimeout(d,1200)}catch(P){g.setStatus(P.message||"Could not send prompt")}finally{w(a,!1)}}function m(T){T.key==="Enter"&&(T.metaKey||T.ctrlKey)&&(T.preventDefault(),y())}function E(T){const q=T.full||T.text||"",P=`

`;if(q.startsWith("[Remote SSH IDE context]")){const K=q.lastIndexOf(P);if(K!==-1)return q.slice(K+P.length)}return q}var I=Fu(),A=k(I),G=b(k(A),2);it(G,20,n,T=>T,(T,q)=>{var P=Iu(),K=ve(P,!0),ae={};le(()=>{ce(K,q),ae!==(ae=q)&&(P.value=(P.__value=ae)??"")}),x(T,P)}),yn(G);var C=b(A,2),$=k(C);{var M=T=>{var q=Ou(),P=ve(q,!0);le(()=>ce(P,c(f))),x(T,q)};Q($,T=>{c(f)&&T(M)})}var X=b($,2);it(X,19,()=>c(l),(T,q)=>T.ts+":"+q,(T,q)=>{var P=zu(),K=ve(P,!0);le(ae=>{Lt(P,1,`msg ${c(q).role==="assistant"?"assistant":"user"}`,"svelte-1roe1v9"),ce(K,ae)},[()=>E(c(q))]),x(T,P)},T=>{var q=J(),P=j(q);{var K=ae=>{var Ae=Ru();x(ae,Ae)};Q(P,ae=>{c(f)||ae(K)})}x(T,q)}),gs(C,T=>w(v,T),()=>c(v));var W=b(C,2),z=k(W),N=b(z,2),V=k(N);{var F=T=>{da(T,{size:13})},Y=T=>{su(T,{size:13})};Q(V,T=>{c(a)?T(F):T(Y,-1)})}var ge=b(V);le(T=>{N.disabled=T,ce(ge,` ${c(a)?"Sending…":"Send"}`)},[()=>c(a)||!c(i).trim()]),ei(G,()=>c(o),T=>w(o,T)),B("keydown",z,m),Fe(z,()=>c(i),T=>w(i,T)),B("click",N,y),x(e,I),at()}jt(["keydown","click"]);var Lu=L('<span class="hint svelte-e2eyom">searching…</span>'),ju=L('<li><button><span class="name svelte-e2eyom"> </span> <span class="path svelte-e2eyom"> </span> <!></button></li>'),Vu=L('<ul class="results svelte-e2eyom"></ul>'),Hu=L('<p class="empty svelte-e2eyom"> </p>'),Bu=L('<div class="backdrop svelte-e2eyom" role="button" tabindex="-1"></div> <div class="dialog svelte-e2eyom" role="dialog" aria-label="Quick open"><div class="field svelte-e2eyom"><!> <input placeholder="Search files by name…" aria-label="Search files by name" class="svelte-e2eyom"/> <!></div> <!></div>',1);function Ku(e,t){ot(t,!0);let n=R(""),r=R(Ee([])),s=R(0),i=R(!1),o=R(null),a=null;un(()=>{c(o)&&c(o).focus()}),un(()=>{const $=c(n).trim();if(a&&clearTimeout(a),!$){w(r,[],!0);return}a=setTimeout(async()=>{w(i,!0);try{const M=await ye.searchFiles(g.connectionId,g.path||".",$);w(r,M.matches||[],!0),w(s,0)}catch{w(r,[],!0)}finally{w(i,!1)}},180)});async function l($){var X;if(!$)return;const M=g.path&&g.path!=="."?`${g.path}/`:"";await g.openFile(`${M}${$.path}`),(X=t.onclose)==null||X.call(t)}function f($){var M;$.key==="Escape"?($.preventDefault(),(M=t.onclose)==null||M.call(t)):$.key==="ArrowDown"?($.preventDefault(),w(s,Math.min(c(s)+1,c(r).length-1),!0)):$.key==="ArrowUp"?($.preventDefault(),w(s,Math.max(c(s)-1,0),!0)):$.key==="Enter"&&($.preventDefault(),l(c(r)[c(s)]))}var v=Bu(),p=j(v),d=b(p,2),h=k(d),_=k(h);ru(_,{size:14});var y=b(_,2);gs(y,$=>w(o,$),()=>c(o));var m=b(y,2);{var E=$=>{var M=Lu();x($,M)};Q(m,$=>{c(i)&&$(E)})}var I=b(h,2);{var A=$=>{var M=Vu();it(M,23,()=>c(r),X=>X.path,(X,W,z)=>{var N=ju(),V=k(N);let F;var Y=k(V),ge=ve(Y,!0),T=b(Y,2),q=ve(T,!0),P=b(T,2);{var K=ae=>{Vc(ae,{size:12})};Q(P,ae=>{c(z)===c(s)&&ae(K)})}le(()=>{F=Lt(V,1,"svelte-e2eyom",null,F,{active:c(z)===c(s)}),ce(ge,c(W).name),ce(q,c(W).path)}),B("click",V,()=>l(c(W))),x(X,N)}),x($,M)},G=$=>{var M=Hu(),X=ve(M);le(W=>ce(X,`No files match “${W??""}”.`),[()=>c(n).trim()]),x($,M)},C=et(()=>c(n).trim()&&!c(i));Q(I,$=>{c(r).length?$(A):c(C)&&$(G,1)})}B("click",p,()=>{var $;return($=t.onclose)==null?void 0:$.call(t)}),B("keydown",p,$=>{var M;return $.key==="Escape"&&((M=t.onclose)==null?void 0:M.call(t))}),B("keydown",y,f),Fe(y,()=>c(n),$=>w(n,$)),x(e,v),at()}jt(["click","keydown"]);var Uu=L('<div class="terminal-pane svelte-maclc7"><div class="bar svelte-maclc7"><span class="label svelte-maclc7">SSH terminal</span> <span> </span></div> <div class="screen svelte-maclc7"></div></div>');function qu(e,t){ot(t,!0);let n=De(t,"rootPath",3,""),r=De(t,"session",3,""),s,i=null,o=null,a=null,l=R("connecting"),f=null;const v={background:ir.colors["editor.background"],foreground:ir.colors["editor.foreground"],cursor:ir.colors["editorCursor.foreground"],selectionBackground:ir.colors["editor.selectionBackground"],black:"#272822",red:"#f92672",green:"#a6e22e",yellow:"#e6db74",blue:"#66d9ef",magenta:"#ae81ff",cyan:"#a1efe4",white:"#f8f8f2",brightBlack:"#75715e",brightRed:"#f92672",brightGreen:"#a6e22e",brightYellow:"#e6db74",brightBlue:"#66d9ef",brightMagenta:"#ae81ff",brightCyan:"#a1efe4",brightWhite:"#f9f8f5"};function p(){if(!(!o||!i||(a==null?void 0:a.readyState)!==WebSocket.OPEN))try{o.fit(),a.send(JSON.stringify({type:"resize",cols:i.cols,rows:i.rows}))}catch{}}Fr(async()=>{const[{Terminal:E},{FitAddon:I}]=await Promise.all([es(()=>import("./ide-xterm.js"),[],import.meta.url),es(()=>import("./ide-addon-fit.js"),[],import.meta.url)]);await es(()=>Promise.resolve({}),__vite__mapDeps([2]),import.meta.url),i=new E({theme:v,fontSize:12,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",cursorBlink:!0,scrollback:5e3}),o=new I,i.loadAddon(o),i.open(s),o.fit();const G=`${location.protocol==="https:"?"wss":"ws"}://${location.host}${n()}/ws/sessions/${encodeURIComponent(r())}/ide/terminal/${encodeURIComponent(g.connectionId)}`;a=new WebSocket(G),a.binaryType="arraybuffer",a.onopen=()=>{w(l,"connected"),p()},a.onmessage=C=>{i.write(typeof C.data=="string"?C.data:new Uint8Array(C.data))},a.onclose=()=>{w(l,"closed"),i==null||i.write(`\r
\x1B[90m— terminal detached —\x1B[0m\r
`)},a.onerror=()=>{w(l,"error")},i.onData(C=>{(a==null?void 0:a.readyState)===WebSocket.OPEN&&a.send(new TextEncoder().encode(C))}),f=new ResizeObserver(()=>p()),f.observe(s)}),bi(()=>{f==null||f.disconnect(),a==null||a.close(),i==null||i.dispose()});var d=Uu(),h=k(d),_=b(k(h),2),y=ve(_,!0),m=b(h,2);gs(m,E=>s=E,()=>s),le(()=>{Lt(_,1,`status ${c(l)??""}`,"svelte-maclc7"),ce(y,c(l))}),x(e,d),at()}var Wu=L('<div class="border-b border-vs-line bg-vs-red/10 px-4 py-2 text-xs text-vs-red"> </div>'),Gu=L('<div class="flex items-center gap-2 px-4 py-3 text-xs text-vs-muted"><!> Loading…</div>'),Yu=L('<button class="flex w-full items-center gap-2 px-4 py-1 text-left text-[13px] text-vs-fg hover:bg-vs-hover"><!> <span class="truncate"> </span></button>'),Ju=L('<div class="px-4 py-3 text-xs text-vs-muted">No sub-folders here. You can still open this folder.</div>'),Zu=L('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="flex h-[70vh] w-[min(640px,92vw)] flex-col overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright">Open Folder</div> <form class="flex gap-2 border-b border-vs-line px-3 py-2"><button type="button" class="flex items-center gap-1 rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover disabled:opacity-40" title="Up one folder"><!> Up</button> <input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-xs text-vs-fg outline-none focus:border-vs-accent" spellcheck="false" aria-label="Folder path"/> <button type="submit" class="rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover">Go</button></form> <!> <div class="min-h-0 flex-1 overflow-y-auto py-1"><!></div> <div class="flex items-center gap-2 border-t border-vs-line px-4 py-3"><span class="flex min-w-0 flex-1 items-center gap-2 text-xs text-vs-muted"><!> <span class="truncate font-mono"> </span></span> <button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40">Open Folder</button></div></div></div>');function Xu(e,t){ot(t,!0);let n=R(""),r=R(""),s=R(Ee([])),i=R(""),o=R(!0),a=R("");async function l(F){w(o,!0),w(i,"");try{const Y=await ye.browse(F);w(n,Y.path,!0),w(r,Y.parent,!0),w(s,Y.entries||[],!0),w(a,Y.path,!0)}catch(Y){w(i,Y.message||"Could not open that folder",!0)}finally{w(o,!1)}}Fr(()=>l(""));function f(F){F.preventDefault(),c(a).trim()&&l(c(a).trim())}var v=Zu(),p=k(v),d=b(k(p),2),h=k(d),_=k(h);Hc(_,{size:14});var y=b(h,2),m=b(d,2);{var E=F=>{var Y=Wu(),ge=ve(Y,!0);le(()=>ce(ge,c(i))),x(F,Y)};Q(m,F=>{c(i)&&F(E)})}var I=b(m,2),A=k(I);{var G=F=>{var Y=Gu(),ge=k(Y);da(ge,{size:13,class:"animate-spin"}),x(F,Y)},C=F=>{var Y=J(),ge=j(Y);it(ge,17,()=>c(s),T=>T.path,(T,q)=>{var P=Yu(),K=k(P);Yc(K,{size:14,class:"shrink-0 text-vs-blue"});var ae=b(K,2),Ae=ve(ae,!0);le(()=>ce(Ae,c(q).name)),B("dblclick",P,()=>l(c(q).path)),B("click",P,()=>l(c(q).path)),x(T,P)},T=>{var q=Ju();x(T,q)}),x(F,Y)};Q(A,F=>{c(o)?F(G):F(C,-1)})}var $=b(I,2),M=k($),X=k(M);Xc(X,{size:13,class:"shrink-0"});var W=b(X,2),z=ve(W,!0),N=b(M,2),V=b(N,2);le(()=>{h.disabled=!c(r),me(W,"title",c(n)),ce(z,c(n)),V.disabled=!c(n)||c(o)}),B("click",v,F=>F.target===F.currentTarget&&t.onclose()),B("keydown",v,F=>F.key==="Escape"&&t.onclose()),ur("submit",d,f),B("click",h,()=>c(r)&&l(c(r))),Fe(y,()=>c(a),F=>w(a,F)),B("click",N,function(...F){var Y;(Y=t.onclose)==null||Y.apply(this,F)}),B("click",V,()=>t.onopen(c(n))),x(e,v),at()}jt(["click","keydown","dblclick"]);var Qu=L('<span class="absolute top-0 bottom-0 left-0 w-0.5 bg-vs-bright"></span>'),ef=L("<button><!> <!></button>"),tf=L("<option> </option>"),nf=L('<button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover hover:text-vs-red" title="Remove workspace" aria-label="Remove workspace"><!></button>'),rf=L('<input class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" type="password" placeholder="Password (optional)" autocomplete="new-password"/>'),sf=L('<!> <button class="w-full rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"> </button>',1),of=L('<p class="mt-1 font-mono text-[11px] break-all text-vs-muted"> </p>'),af=L('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="~/.ssh/id_ed25519"/>'),lf=L('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" type="password" placeholder="Password" autocomplete="new-password"/>'),cf=L('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Host" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="User" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Port" type="number" min="1" max="65535"/> <select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>SSH agent</option><option>Existing key</option><option>Password (saved, encrypted)</option></select> <!> <!>',1),uf=L('<form class="mt-2 flex flex-col gap-1.5 border-t border-vs-line px-3 pt-2"><select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>This server (local folder)</option><option>Remote host over SSH</option></select> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Label"/> <!> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"/> <div class="flex gap-1 pb-2"><button class="flex-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110" type="submit">Create</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" type="button">Cancel</button></div></form>'),ff=L('<div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Workspaces</div> <div class="flex flex-col gap-2 px-3 pt-1"><select class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" aria-label="Workspace"><option>— select workspace —</option><!></select> <div class="flex gap-1"><button class="flex flex-1 items-center justify-center gap-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"><!> Open Folder</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Add a workspace or SSH connection" aria-label="Add workspace"><!></button> <!></div> <!> <!></div> <!>',1),df=L('<aside class="flex w-60 shrink-0 flex-col overflow-hidden border-r border-vs-border bg-vs-panel"><!></aside>'),vf=L('<div class="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center"><!> <div><h1 class="text-2xl font-light text-vs-fg">Multibuilder IDE</h1> <p class="mt-1 text-sm text-vs-muted">Edit files on this server or on a remote host over SSH.</p></div> <div class="flex flex-col gap-2 text-sm"><button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Open Folder… <kbd class="ml-2 rounded-sm border border-vs-line px-1.5 py-0.5 text-[10px] text-vs-muted">Ctrl+Shift+O</kbd></button> <button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Connect to a host over SSH…</button></div></div>'),hf=L('<div class="flex h-[35%] min-h-[140px] flex-col border-t border-vs-line bg-vs-bg"><div class="flex items-center gap-2 border-b border-vs-border px-3 py-1 text-[11px] tracking-wide uppercase"><!> Terminal <button class="ml-auto rounded-sm p-0.5 hover:bg-vs-hover" title="Close panel" aria-label="Close terminal panel"><!></button></div> <div class="min-h-0 flex-1"><!></div></div>'),pf=L('<!> <div class="min-h-0 flex-1"><!></div> <!>',1),Xi=L('<span class="flex items-center gap-1"><!> </span>'),_f=L("<span> </span>"),gf=L('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle terminal (Ctrl+`)"><!> Terminal</button> <button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Focus the tmux window on the host"><!></button>',1),mf=L('<div class="flex h-full flex-col overflow-hidden bg-vs-bg font-sans text-vs-fg"><header class="flex items-center gap-2 border-b border-vs-border bg-vs-titlebar px-3 py-1 text-xs"><!> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover" title="Open a folder on this server (Ctrl+Shift+O)">Open Folder…</button> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40" title="Open a file (Ctrl+P)">Open File…</button> <span class="mx-auto truncate text-vs-muted"> </span> <span><!> </span></header> <div class="flex min-h-0 flex-1"><nav class="flex w-12 shrink-0 flex-col items-center bg-vs-activity py-1"></nav> <!> <section class="flex min-h-0 min-w-0 flex-1 flex-col"><!></section></div> <footer class="flex shrink-0 items-center gap-3 bg-vs-status px-3 py-0.5 text-[12px] text-white"><!> <!> <span class="truncate"> </span> <span class="ml-auto flex items-center gap-3"><!> <span class="max-w-[40vw] truncate opacity-80"> </span> <!></span></footer> <!> <!></div>');function bf(e,t){ot(t,!0);let n=De(t,"sessions",19,()=>[]),r=De(t,"session",3,""),s=De(t,"rootPath",3,""),i=R("files"),o=R(!0),a=R(!1),l=R(!1),f=R(!1),v=R(!1),p=R(""),d=R(Ee({kind:"local",label:"",host:"",username:"",port:22,auth_mode:"agent",identity_file:"",password:"",workspace_root:"",max_file_bytes:1e6}));const h={idle:{icon:jc,label:"Not connected"},connecting:{icon:Lc,label:"Connecting…"},connected:{icon:Dc,label:"Connected"},reconnect:{icon:Wi,label:"Reconnect required"},error:{icon:Wi,label:"Error"}},_=et(()=>h[g.connectionState].icon),y=et(()=>{var S;return((S=g.connection)==null?void 0:S.kind)==="local"}),m=[{id:"files",icon:Wc,label:"Explorer"},{id:"git",icon:Ji,label:"Source Control"},{id:"remote",icon:Fs,label:"Workspaces"},{id:"chat",icon:eu,label:"Chat"}];Fr(async()=>{await g.loadConnections(),g.connectionId&&await g.refreshStatus()});function E(S){c(i)===S&&c(o)?w(o,!1):(w(i,S,!0),w(o,!0))}async function I(S){g.connectionId=S.currentTarget.value,g.tabs=[],g.activeKey="",g.restoredKey="",await g.refreshStatus()}async function A(S){w(v,!1);try{const H=S.split("/").filter(Boolean).pop()||S,ne=await ye.createConnection({kind:"local",label:H,workspace_root:S,max_file_bytes:1e6});await g.loadConnections(),g.connectionId=ne.connection.id,g.tabs=[],g.activeKey="",g.restoredKey="",await g.connect(""),w(i,"files"),w(o,!0)}catch(H){g.setStatus(H.message||"Could not open folder")}}async function G(S){S.preventDefault();try{const H=await ye.createConnection({...c(d),port:Number(c(d).port)});w(f,!1),w(d,{...c(d),label:"",host:"",username:"",password:""},!0),await g.loadConnections(),g.connectionId=H.connection.id,await g.refreshStatus()}catch(H){g.setStatus(H.message||"Could not create connection")}}async function C(){const S=g.connection;if(!S)return;const H=S.kind==="local"?"workspace":"connection";if(confirm(`Remove ${H} "${S.label}"? Saved tabs are cleared; files are untouched.`))try{await ye.deleteConnection(S.id),g.connectionId="",g.tabs=[],await g.loadConnections()}catch(ne){g.setStatus(ne.message||"Could not delete")}}async function $(){try{const S=await ye.focusTerminal(g.connectionId);g.setStatus(`Focused ${S.window_name}`,"tmux window selected")}catch(S){g.setStatus(S.message||"Could not focus terminal")}}function M(S){var we,je,pe,de;const H=S.ctrlKey||S.metaKey,ne=S.key.toLowerCase(),Se=((je=(we=S.target)==null?void 0:we.matches)==null?void 0:je.call(we,"input, textarea, select"))&&!((de=(pe=S.target).closest)!=null&&de.call(pe,".monaco-editor"));H&&ne==="s"?(S.preventDefault(),g.saveActive()):H&&ne==="p"&&!Se?(S.preventDefault(),g.connectionId&&w(a,!0)):H&&S.shiftKey&&ne==="o"?(S.preventDefault(),w(v,!0)):H&&ne==="b"&&!Se?(S.preventDefault(),w(o,!c(o))):H&&ne==="`"?(S.preventDefault(),g.connectionState==="connected"&&w(l,!c(l))):S.key==="Escape"&&c(a)&&(S.preventDefault(),w(a,!1))}var X=mf();ur("keydown",Us,M);var W=k(X),z=k(W);Gi(z,{size:15,class:"shrink-0 text-vs-blue"});var N=b(z,2),V=b(N,2),F=b(V,2),Y=ve(F,!0),ge=b(F,2),T=k(ge);Li(T,()=>c(_),(S,H)=>{H(S,{size:12})});var q=b(T),P=b(W,2),K=k(P);it(K,21,()=>m,S=>S.id,(S,H)=>{var ne=ef(),Se=k(ne);{var we=pe=>{var de=Qu();x(pe,de)};Q(Se,pe=>{c(i)===c(H).id&&c(o)&&pe(we)})}var je=b(Se,2);Li(je,()=>c(H).icon,(pe,de)=>{de(pe,{size:22,strokeWidth:1.5})}),le(()=>{Lt(ne,1,`relative flex h-12 w-12 items-center justify-center ${c(i)===c(H).id&&c(o)?"text-vs-bright":"text-vs-muted hover:text-vs-fg"}`),me(ne,"title",c(H).label),me(ne,"aria-label",c(H).label)}),B("click",ne,()=>E(c(H).id)),x(S,ne)});var ae=b(K,2);{var Ae=S=>{var H=df(),ne=k(H);{var Se=de=>{hu(de,{})},we=de=>{wu(de,{})},je=de=>{Du(de,{get sessions(){return n()},get session(){return r()},get rootPath(){return s()}})},pe=de=>{var Un=ff(),qn=b(j(Un),2),pt=k(qn),dn=k(pt);dn.value=dn.__value="";var ys=b(dn);it(ys,17,()=>g.connections,xe=>xe.id,(xe,Te)=>{var Me=tf(),Gt=ve(Me),Pt={};le(()=>{ce(Gt,`${c(Te).kind==="local"?"🖿 ":"⇅ "}${c(Te).label??""}`),Pt!==(Pt=c(Te).id)&&(Me.value=(Me.__value=Pt)??"")}),x(xe,Me)});var vn;yn(pt);var Br=b(pt,2),Wn=k(Br),wa=k(Wn);Rs(wa,{size:13});var ws=b(Wn,2),xa=k(ws);nu(xa,{size:13});var $a=b(ws,2);{var ka=xe=>{var Te=nf(),Me=k(Te);ou(Me,{size:13}),B("click",Te,C),x(xe,Te)};Q($a,xe=>{g.connection&&xe(ka)})}var wi=b(Br,2);{var Sa=xe=>{var Te=sf(),Me=j(Te);{var Gt=hn=>{var Ur=rf();Fe(Ur,()=>c(p),pn=>w(p,pn)),x(hn,Ur)};Q(Me,hn=>{!c(y)&&!g.connection.has_password&&hn(Gt)})}var Pt=b(Me,2),Kr=ve(Pt,!0);le(()=>ce(Kr,c(y)?"Open workspace":"Connect")),B("click",Pt,()=>g.connect(c(p))),x(xe,Te)};Q(wi,xe=>{g.connection&&g.connectionState!=="connected"&&xe(Sa)})}var Ea=b(wi,2);{var Ca=xe=>{var Te=of(),Me=ve(Te,!0);le(()=>ce(Me,g.connection.workspace_root)),x(xe,Te)};Q(Ea,xe=>{g.connection&&xe(Ca)})}var Ta=b(qn,2);{var Na=xe=>{var Te=uf(),Me=k(Te),Gt=k(Me);Gt.value=Gt.__value="local";var Pt=b(Gt);Pt.value=Pt.__value="ssh",yn(Me);var Kr=b(Me,2),hn=b(Kr,2);{var Ur=Mt=>{var xi=cf(),$i=j(xi),ki=b($i,2),Si=b(ki,2),qr=b(Si,2),xs=k(qr);xs.value=xs.__value="agent";var $s=b(xs);$s.value=$s.__value="key";var Ei=b($s);Ei.value=Ei.__value="password",yn(qr);var Ci=b(qr,2);{var Aa=Ie=>{var Gn=af();Fe(Gn,()=>c(d).identity_file,ks=>c(d).identity_file=ks),x(Ie,Gn)};Q(Ci,Ie=>{c(d).auth_mode==="key"&&Ie(Aa)})}var Ia=b(Ci,2);{var Oa=Ie=>{var Gn=lf();Fe(Gn,()=>c(d).password,ks=>c(d).password=ks),x(Ie,Gn)};Q(Ia,Ie=>{c(d).auth_mode==="password"&&Ie(Oa)})}Fe($i,()=>c(d).host,Ie=>c(d).host=Ie),Fe(ki,()=>c(d).username,Ie=>c(d).username=Ie),Fe(Si,()=>c(d).port,Ie=>c(d).port=Ie),ei(qr,()=>c(d).auth_mode,Ie=>c(d).auth_mode=Ie),x(Mt,xi)};Q(hn,Mt=>{c(d).kind==="ssh"&&Mt(Ur)})}var pn=b(hn,2),Pa=b(pn,2),Ma=b(k(Pa),2);le(()=>{me(pn,"placeholder",c(d).kind==="local"?"/var/www/app":"Workspace root"),pn.required=c(d).kind==="local"}),ur("submit",Te,G),ei(Me,()=>c(d).kind,Mt=>c(d).kind=Mt),Fe(Kr,()=>c(d).label,Mt=>c(d).label=Mt),Fe(pn,()=>c(d).workspace_root,Mt=>c(d).workspace_root=Mt),B("click",Ma,()=>w(f,!1)),x(xe,Te)};Q(Ta,xe=>{c(f)&&xe(Na)})}le(()=>{vn!==(vn=g.connectionId)&&(pt.value=(pt.__value=vn)??"",On(pt,vn))}),B("change",pt,I),B("click",Wn,()=>w(v,!0)),B("click",ws,()=>w(f,!c(f))),x(de,Un)};Q(ne,de=>{c(i)==="files"?de(Se):c(i)==="git"?de(we,1):c(i)==="chat"?de(je,2):de(pe,-1)})}x(S,H)};Q(ae,S=>{c(o)&&S(Ae)})}var Et=b(ae,2),Ct=k(Et);{var Vn=S=>{var H=vf(),ne=k(H);Gi(ne,{size:64,strokeWidth:1,class:"text-vs-line"});var Se=b(ne,4),we=k(Se),je=k(we);Rs(je,{size:16});var pe=b(we,2),de=k(pe);Fs(de,{size:16}),B("click",we,()=>w(v,!0)),B("click",pe,()=>{w(i,"remote"),w(o,!0),w(f,!0)}),x(S,H)},Tt=S=>{var H=pf(),ne=j(H);Au(ne,{});var Se=b(ne,2),we=k(Se);Cu(we,{});var je=b(Se,2);{var pe=de=>{var Un=hf(),qn=k(Un),pt=k(qn);iu(pt,{size:13});var dn=b(pt,2),ys=k(dn);ni(ys,{size:14});var vn=b(qn,2),Br=k(vn);fc(Br,()=>g.connectionId,Wn=>{qu(Wn,{get rootPath(){return s()},get session(){return r()}})}),B("click",dn,()=>w(l,!1)),x(de,Un)};Q(je,de=>{c(l)&&g.connectionState==="connected"&&de(pe)})}x(S,H)};Q(Ct,S=>{g.connectionId?S(Tt,-1):S(Vn)})}var Dr=b(P,2),fn=k(Dr);{var Nt=S=>{var H=Xi(),ne=k(H);{var Se=pe=>{Rs(pe,{size:12})},we=pe=>{Fs(pe,{size:12})};Q(ne,pe=>{c(y)?pe(Se):pe(we,-1)})}var je=b(ne);le(()=>{me(H,"title",g.connection.workspace_root),ce(je,` ${g.connection.label??""}`)}),x(S,H)};Q(fn,S=>{g.connection&&S(Nt)})}var Hn=b(fn,2);{var ms=S=>{var H=Xi(),ne=k(H);Ji(ne,{size:12});var Se=b(ne);le(()=>ce(Se,` ${g.gitBranch??""}`)),x(S,H)};Q(Hn,S=>{g.gitBranch&&S(ms)})}var Bn=b(Hn,2),Kn=ve(Bn,!0),Lr=b(Bn,2),jr=k(Lr);{var Vr=S=>{var H=_f(),ne=ve(H);le(()=>ce(ne,`${g.dirtyCount??""} unsaved`)),x(S,H)};Q(jr,S=>{g.dirtyCount&&S(Vr)})}var Hr=b(jr,2),bs=ve(Hr,!0),_a=b(Hr,2);{var ga=S=>{var H=gf(),ne=j(H),Se=k(ne);tu(Se,{size:12});var we=b(ne,2),je=k(we);Bc(je,{size:12}),B("click",ne,()=>w(l,!c(l))),B("click",we,$),x(S,H)};Q(_a,S=>{g.connectionState==="connected"&&S(ga)})}var yi=b(Dr,2);{var ma=S=>{Ku(S,{onclose:()=>w(a,!1)})};Q(yi,S=>{c(a)&&S(ma)})}var ba=b(yi,2);{var ya=S=>{Xu(S,{onopen:A,onclose:()=>w(v,!1)})};Q(ba,S=>{c(v)&&S(ya)})}le(()=>{var S;V.disabled=!g.connectionId,me(F,"title",(S=g.connection)==null?void 0:S.workspace_root),ce(Y,g.connection?`${g.connection.label} — Multibuilder IDE`:"Multibuilder IDE"),Lt(ge,1,`flex items-center gap-1 ${g.connectionState==="connected"?"text-vs-green":g.connectionState==="connecting"?"text-vs-yellow":g.connectionState==="idle"?"text-vs-muted":"text-vs-red"}`),ce(q,` ${h[g.connectionState].label??""}`),ce(Kn,g.statusText),ce(bs,g.detailText)}),B("click",N,()=>w(v,!0)),B("click",V,()=>w(a,!0)),x(e,X),at()}jt(["click","change"]);function pa(e,t){return ac(bf,{target:e,props:t})}function Qi(){const e=document.getElementById("ide-root");if(!e||e.dataset.mounted)return;e.dataset.mounted="1";const t=window.__IDE_BOOTSTRAP__||{};pa(e,{sessions:t.sessions||[],session:t.session||"",rootPath:t.rootPath||""})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Qi):Qi();window.mountRemoteIde=pa;export{es as _};
